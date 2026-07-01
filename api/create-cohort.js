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
