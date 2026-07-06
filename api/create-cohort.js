/**
 * ============================================================
 *  ALIMUN — POST /api/create-cohort
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Handles secure cohort creation by teachers:
 *  - Verifies teacher's JWT token.
 *  - Checks teacher approval status.
 *  - Enforces active cohort limit (max 3 active cohorts).
 *  - Maps capacity (max_students) based on tier.
 *  - Inserts new cohort record.
 *  - Calls generate_cohort_sessions(cohort_id) to auto-schedule 12 weeks of sessions.
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error('[Create Cohort API] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
    return null;
  }
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

module.exports = async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 1. Authenticate user via JWT
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1];
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return res.status(500).json({ error: 'Server database configuration error' });
  }

  let user;
  try {
    const { data: authData, error: authError } = await supabase.auth.getUser(token);
    if (authError || !authData?.user) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
    user = authData.user;
  } catch (err) {
    console.error('[Create Cohort API] Auth error:', err);
    return res.status(401).json({ error: 'Unauthorized: Auth validation exception' });
  }

  // 2. Fetch and check teacher profile
  const { data: teacher, error: teacherError } = await supabase
    .from('teacher_profiles')
    .select('*')
    .eq('user_id', user.id)
    .maybeSingle();

  if (teacherError || !teacher) {
    return res.status(404).json({ error: 'Teacher profile not found' });
  }

  if (teacher.status !== 'approved') {
    return res.status(403).json({ error: 'Forbidden: Teacher status must be approved' });
  }

  // 3. Parse input body
  const { language, level, goal_track, tier, schedule_days, schedule_time, timezone, description } = req.body || {};
  
  if (!language || !level || !goal_track || !tier || !schedule_days || !schedule_time || !timezone) {
    return res.status(400).json({ error: 'Missing required cohort fields' });
  }

  // Validations
  if (!Array.isArray(schedule_days) || schedule_days.length === 0) {
    return res.status(400).json({ error: 'Schedule days must be a non-empty array' });
  }

  try {
    // 3b. Validate the schedule against the teacher's availability
    //     Every chosen day/time must fall inside one of the teacher's
    //     weekly availability slots (sessions last 60 minutes).
    const { data: slots, error: slotsError } = await supabase
      .from('teacher_availability')
      .select('day_of_week, start_time, end_time')
      .eq('teacher_id', teacher.id);

    if (slotsError) throw slotsError;

    if (!slots || slots.length === 0) {
      return res.status(400).json({
        error: 'No availability configured. Add your weekly availability before creating a classroom.'
      });
    }

    const DAY_INDEX = {
      sunday: 0, monday: 1, tuesday: 2, wednesday: 3,
      thursday: 4, friday: 5, saturday: 6
    };
    const toMinutes = (t) => {
      const [h, m] = String(t).split(':').map(Number);
      return h * 60 + (m || 0);
    };
    const sessionStart = toMinutes(schedule_time);
    const sessionEnd = sessionStart + 60;

    const unavailableDays = schedule_days.filter((dayName) => {
      const dayIdx = DAY_INDEX[String(dayName).trim().toLowerCase()];
      if (dayIdx === undefined) return true;
      return !slots.some((s) =>
        s.day_of_week === dayIdx
        && toMinutes(s.start_time) <= sessionStart
        && sessionEnd <= toMinutes(s.end_time)
      );
    });

    if (unavailableDays.length > 0) {
      return res.status(400).json({
        error: `Schedule conflicts with your availability on: ${unavailableDays.join(', ')}. Sessions are 60 minutes and must fit inside an availability slot.`
      });
    }

    // 4. Enforce active cohort limit (< 4 active cohorts)
    const { count, error: countError } = await supabase
      .from('cohorts')
      .select('*', { count: 'exact', head: true })
      .eq('teacher_id', teacher.id)
      .in('status', ['open', 'full']);

    if (countError) throw countError;

    if (count >= 4) {
      return res.status(400).json({ error: 'Active cohort limit reached. You can have at most 4 active cohorts.' });
    }

    // 5. Map max students based on tier
    let maxStudents = 20;
    if (tier === 'community') maxStudents = 35;
    else if (tier === 'focused') maxStudents = 17;
    else if (tier === 'intensive') maxStudents = 6;
    else if (tier === 'private') maxStudents = 1;

    // 6. Insert new cohort
    const { data: newCohort, error: insertError } = await supabase
      .from('cohorts')
      .insert({
        teacher_id: teacher.id,
        language,
        level,
        goal_track,
        tier,
        max_students: maxStudents,
        description,
        schedule_days,
        schedule_time,
        timezone,
        status: 'open',
        enrolled_count: 0
      })
      .select()
      .single();

    if (insertError) throw insertError;

    // 7. Auto-schedule 12 weeks of sessions using Supabase RPC
    const { data: sessionCount, error: rpcError } = await supabase
      .rpc('generate_cohort_sessions', { p_cohort_id: newCohort.id });

    if (rpcError) {
      console.error('[Create Cohort API] RPC Error generating sessions:', rpcError);
      // We still created the cohort, but let the client know scheduling failed
      return res.status(201).json({
        success: true,
        cohort: newCohort,
        sessionsGenerated: 0,
        warning: 'Cohort created but session auto-generation failed: ' + rpcError.message
      });
    }

    const dailyApiKey = process.env.DAILY_API_KEY;
    if (sessionCount > 0 && dailyApiKey) {
      try {
        const { data: sessions } = await supabase
          .from('sessions')
          .select('id, scheduled_at')
          .eq('cohort_id', newCohort.id);

        if (sessions && sessions.length > 0) {
          await Promise.all(
            sessions.map(async (session) => {
              const sessionStart = new Date(session.scheduled_at);
              const expEpoch = Math.floor((sessionStart.getTime() + 90 * 60 * 1000) / 1000);
              const roomName = `alimun-${session.id}`;

              try {
                const dailyRes = await fetch('https://api.daily.co/v1/rooms', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${dailyApiKey}`
                  },
                  body: JSON.stringify({
                    name: roomName,
                    privacy: 'private',
                    properties: {
                      exp: expEpoch,
                      max_participants: 40,
                      enable_chat: true,
                      enable_screenshare: true,
                      enable_knocking: false,
                      start_video_off: false,
                      eject_at_room_exp: true,
                    }
                  })
                });

                if (dailyRes.ok) {
                  const dailyData = await dailyRes.json();
                  if (dailyData?.url) {
                    await supabase
                      .from('sessions')
                      .update({ daily_room_url: dailyData.url })
                      .eq('id', session.id);
                  }
                } else {
                  const errText = await dailyRes.text();
                  console.error(`Daily.co room creation failed for session ${session.id}:`, errText);
                }
              } catch (dailyErr) {
                console.error(`Failed to fetch Daily.co API for session ${session.id}:`, dailyErr);
              }
            })
          );
        }
      } catch (err) {
        console.error('[Create Cohort API] Daily room generation failed:', err);
      }
    }

    return res.status(201).json({
      success: true,
      cohort: newCohort,
      sessionsGenerated: sessionCount
    });

  } catch (err) {
    console.error('[Create Cohort API] Internal Error:', err);
    return res.status(500).json({ error: 'Internal server error: ' + err.message });
  }
};
