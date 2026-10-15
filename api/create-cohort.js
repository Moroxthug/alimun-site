/**
 * ============================================================
 *  ALIMUN — POST /api/create-cohort
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Handles secure cohort creation by teachers:
 *  - Verifies teacher's JWT token.
 *  - Checks teacher approval status.
 *  - Validates every field (enums, teacher's languages, IANA timezone,
 *    HH:MM time, unique weekdays, description length).
 *  - Enforces active cohort limit (max 4 active cohorts).
 *  - Maps capacity (max_students) based on tier.
 *  - Inserts new cohort record.
 *  - Calls generate_cohort_sessions(cohort_id) to auto-schedule 12 weeks of sessions;
 *    the cohort is deleted again if no sessions could be generated.
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');
const TZ = require('../js/tz.js');

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const GOAL_TRACKS = ['relocation', 'academic', 'professional', 'pleasure', 'foundations'];
const TIERS = ['community', 'focused', 'intensive', 'private'];
// Languages offered at signup (signup.html LANGS).
const LANGUAGES = ['English', 'German', 'Spanish', 'French', 'Portuguese', 'Italian', 'Mandarin', 'Japanese', 'Arabic'];
const DAY_INDEX = {
  sunday: 0, monday: 1, tuesday: 2, wednesday: 3,
  thursday: 4, friday: 5, saturday: 6
};
const TIME_RE = /^([01]\d|2[0-3]):[0-5]\d$/;
const MAX_ACTIVE_COHORTS = 4;
const MAX_DESCRIPTION = 2000;

let TIMEZONES = null;
function isValidTimezone(tz) {
  if (typeof tz !== 'string' || tz.length > 64 || !/^[A-Za-z][A-Za-z0-9_+\-]*(\/[A-Za-z0-9_+\-]+){0,2}$/.test(tz)) return false;
  if (tz === 'UTC') return true;
  if (!TIMEZONES) {
    try { TIMEZONES = new Set(Intl.supportedValuesOf('timeZone')); } catch { TIMEZONES = new Set(); }
  }
  if (TIMEZONES.has(tz)) return true;
  // Aliases (e.g. Asia/Calcutta) that the runtime still resolves.
  try { new Intl.DateTimeFormat('en', { timeZone: tz }); return true; } catch { return false; }
}

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
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || 'https://alimun.com');
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

  // 3. Parse and validate input body
  let body = req.body || {};
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
  const { language, level, goal_track, tier, schedule_days, schedule_time, timezone } = body;
  const description = body.description == null ? null : body.description;

  if (!language || !level || !goal_track || !tier || !schedule_days || !schedule_time || !timezone) {
    return res.status(400).json({ error: 'Missing required cohort fields' });
  }

  if (!LEVELS.includes(level)) return res.status(400).json({ error: 'Invalid level' });
  if (!GOAL_TRACKS.includes(goal_track)) return res.status(400).json({ error: 'Invalid goal track' });
  if (!TIERS.includes(tier)) return res.status(400).json({ error: 'Invalid tier' });

  // The language must be a supported one AND one this teacher teaches.
  const teacherLanguages = Array.isArray(teacher.languages) ? teacher.languages : [];
  if (typeof language !== 'string' || !LANGUAGES.includes(language)) {
    return res.status(400).json({ error: 'Unsupported language' });
  }
  if (!teacherLanguages.includes(language)) {
    return res.status(403).json({ error: 'You can only open classes in a language on your teacher profile' });
  }

  if (!isValidTimezone(timezone)) {
    return res.status(400).json({ error: 'Invalid timezone' });
  }
  if (typeof schedule_time !== 'string' || !TIME_RE.test(schedule_time)) {
    return res.status(400).json({ error: 'Schedule time must be HH:MM' });
  }
  if (description !== null && (typeof description !== 'string' || description.length > MAX_DESCRIPTION)) {
    return res.status(400).json({ error: `Description must be text of at most ${MAX_DESCRIPTION} characters` });
  }

  if (!Array.isArray(schedule_days) || schedule_days.length === 0 || schedule_days.length > 7) {
    return res.status(400).json({ error: 'Schedule days must be a non-empty array of weekdays' });
  }
  const normalizedDays = schedule_days.map((d) => String(d).trim().toLowerCase());
  if (normalizedDays.some((d) => DAY_INDEX[d] === undefined) || new Set(normalizedDays).size !== normalizedDays.length) {
    return res.status(400).json({ error: 'Schedule days must be unique weekday names' });
  }
  // Store as Capitalised day names (what the dashboard sends).
  const cleanDays = normalizedDays.map((d) => d.charAt(0).toUpperCase() + d.slice(1));

  try {
    // 3b. Validate the schedule against the teacher's availability.
    //     Slots are wall-clock times in the zone they were entered in;
    //     the class is in `timezone`. Check every one of the 12 weeks of
    //     sessions (the dates generate_cohort_sessions() will create), so a
    //     daylight-saving shift that pushes a session outside a slot is
    //     caught too. Sessions last 60 minutes.
    const { data: slots, error: slotsError } = await supabase
      .from('teacher_availability')
      .select('day_of_week, start_time, end_time, timezone')
      .eq('teacher_id', teacher.id);

    if (slotsError) throw slotsError;

    if (!slots || slots.length === 0) {
      return res.status(400).json({
        error: 'No availability configured. Add your weekly availability before creating a classroom.'
      });
    }

    const dayIdx = cleanDays.map((d) => DAY_INDEX[d.toLowerCase()]);
    const conflicts = TZ.scheduleOccurrences(dayIdx, schedule_time, timezone)
      .filter((start) => !TZ.fitsSlot(start, 60, slots));

    if (conflicts.length > 0) {
      const fmt = (d) => d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', timeZone: timezone });
      const shown = conflicts.slice(0, 3).map(fmt).join(', ') + (conflicts.length > 3 ? ` and ${conflicts.length - 3} more` : '');
      return res.status(400).json({
        error: `Schedule conflicts with your availability on ${shown} (${schedule_time} ${timezone}). Sessions are 60 minutes and must fit inside an availability slot.`
      });
    }

    // 4. Enforce active cohort limit (< 4 active cohorts)
    const { count, error: countError } = await supabase
      .from('cohorts')
      .select('*', { count: 'exact', head: true })
      .eq('teacher_id', teacher.id)
      .in('status', ['open', 'full']);

    if (countError) throw countError;

    if (count >= MAX_ACTIVE_COHORTS) {
      return res.status(400).json({ error: `Active cohort limit reached. You can have at most ${MAX_ACTIVE_COHORTS} active cohorts.` });
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
        description: description ? description.trim() : null,
        schedule_days: cleanDays,
        schedule_time,
        timezone,
        status: 'open',
        enrolled_count: 0
      })
      .select()
      .single();

    if (insertError) throw insertError;

    // Parallel requests can both pass the count check above: re-count now
    // and back this cohort out if the limit was exceeded.
    const { count: countAfter, error: countAfterError } = await supabase
      .from('cohorts')
      .select('*', { count: 'exact', head: true })
      .eq('teacher_id', teacher.id)
      .in('status', ['open', 'full']);
    if (!countAfterError && countAfter > MAX_ACTIVE_COHORTS) {
      await supabase.from('cohorts').delete().eq('id', newCohort.id);
      return res.status(400).json({ error: `Active cohort limit reached. You can have at most ${MAX_ACTIVE_COHORTS} active cohorts.` });
    }

    // 7. Auto-schedule 12 weeks of sessions using Supabase RPC
    const { data: sessionCount, error: rpcError } = await supabase
      .rpc('generate_cohort_sessions', { p_cohort_id: newCohort.id });

    if (rpcError || !(sessionCount > 0)) {
      console.error('[Create Cohort API] Session generation failed; removing cohort', newCohort.id, rpcError || `count=${sessionCount}`);
      // Never leave an open cohort without sessions listed to students.
      const { error: delError } = await supabase.from('cohorts').delete().eq('id', newCohort.id);
      if (delError) console.error('[Create Cohort API] Could not delete cohort after failed generation:', delError);
      return res.status(500).json({ error: 'Could not schedule sessions for this classroom. Please try again.' });
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
    return res.status(500).json({ error: 'Internal server error' });
  }
};
