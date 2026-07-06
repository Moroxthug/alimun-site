/**
 * ============================================================
 *  ALIMUN — POST /api/join-session
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Secure entry point for joining a live class:
 *  1. Verifies the caller's Supabase JWT.
 *  2. Confirms the caller is the cohort's teacher OR an
 *     actively-enrolled student of the session's cohort.
 *  3. Ensures a Daily.co room exists for the session
 *     (creates it on demand — no dependency on the cron).
 *  4. Issues a Daily meeting token (teacher = owner).
 *
 *  Body:    { sessionId: "<uuid>" }
 *  Returns: { url, token, role }
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

const DAILY_API = 'https://api.daily.co/v1';

async function dailyFetch(path, options = {}) {
  const res = await fetch(`${DAILY_API}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.DAILY_API_KEY}`,
      ...(options.headers || {}),
    },
  });
  const body = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, body };
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!process.env.DAILY_API_KEY) {
    return res.status(500).json({ error: 'Video service is not configured (missing DAILY_API_KEY)' });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) return res.status(500).json({ error: 'Server database configuration error' });

  // 1. Authenticate caller
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: missing token' });
  }
  const { data: authData, error: authError } = await supabase.auth.getUser(authHeader.split(' ')[1]);
  if (authError || !authData?.user) {
    return res.status(401).json({ error: 'Unauthorized: invalid token' });
  }
  const user = authData.user;

  const { sessionId } = req.body || {};
  if (!sessionId) return res.status(400).json({ error: 'Missing sessionId' });

  try {
    // 2. Load session + cohort + teacher
    const { data: session, error: sessionError } = await supabase
      .from('sessions')
      .select('id, scheduled_at, status, daily_room_url, cohort_id, cohorts ( id, teacher_id, teacher_profiles ( id, user_id, full_name ) )')
      .eq('id', sessionId)
      .single();

    if (sessionError || !session) return res.status(404).json({ error: 'Session not found' });
    if (session.status === 'cancelled') return res.status(400).json({ error: 'This session was cancelled' });

    // Authorize: teacher of the cohort?
    const teacherProfile = session.cohorts?.teacher_profiles;
    const isTeacher = teacherProfile?.user_id === user.id;

    // Or an actively enrolled student?
    let studentProfile = null;
    if (!isTeacher) {
      const { data: sp } = await supabase
        .from('student_profiles')
        .select('id, full_name')
        .eq('user_id', user.id)
        .maybeSingle();

      if (sp) {
        const { data: enrollment } = await supabase
          .from('enrollments')
          .select('id')
          .eq('student_id', sp.id)
          .eq('cohort_id', session.cohort_id)
          .eq('status', 'active')
          .maybeSingle();
        if (enrollment) studentProfile = sp;
      }
      if (!studentProfile) {
        return res.status(403).json({ error: 'You are not enrolled in this class' });
      }
    }

    // Joining window: from 15 min before start until 90 min after
    const startMs = new Date(session.scheduled_at).getTime();
    const now = Date.now();
    if (now < startMs - 15 * 60 * 1000) {
      return res.status(400).json({ error: 'The classroom opens 15 minutes before the session starts' });
    }
    if (now > startMs + 90 * 60 * 1000) {
      return res.status(400).json({ error: 'This session has already ended' });
    }

    // 3. Ensure the Daily room exists
    const roomName = `alimun-${session.id}`;
    const expEpoch = Math.floor((startMs + 90 * 60 * 1000) / 1000);
    let roomUrl = session.daily_room_url;

    // Treat legacy mock URLs as missing
    if (!roomUrl || roomUrl.includes('/mock-room/')) roomUrl = null;

    if (!roomUrl) {
      // Check if the room already exists (e.g. created by the cron)
      const existing = await dailyFetch(`/rooms/${roomName}`);
      if (existing.ok && existing.body?.url) {
        roomUrl = existing.body.url;
      } else {
        const created = await dailyFetch('/rooms', {
          method: 'POST',
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
            },
          }),
        });
        if (!created.ok || !created.body?.url) {
          console.error('[Join Session API] Daily room creation failed:', created.body);
          return res.status(502).json({ error: 'Could not create the video room. Please try again.' });
        }
        roomUrl = created.body.url;
      }

      await supabase.from('sessions').update({ daily_room_url: roomUrl }).eq('id', session.id);
    }

    // 4. Issue a meeting token (private room requires it)
    const displayName = isTeacher
      ? (teacherProfile?.full_name || 'Teacher')
      : (studentProfile?.full_name || 'Student');

    const tokenRes = await dailyFetch('/meeting-tokens', {
      method: 'POST',
      body: JSON.stringify({
        properties: {
          room_name: roomName,
          user_name: displayName,
          is_owner: isTeacher,
          exp: expEpoch,
        },
      }),
    });

    if (!tokenRes.ok || !tokenRes.body?.token) {
      console.error('[Join Session API] Meeting token creation failed:', tokenRes.body);
      return res.status(502).json({ error: 'Could not authorize video access. Please try again.' });
    }

    // Mark session live when the teacher enters
    if (isTeacher && session.status === 'scheduled') {
      await supabase.from('sessions').update({ status: 'live' }).eq('id', session.id);
    }

    return res.status(200).json({
      url: roomUrl,
      token: tokenRes.body.token,
      role: isTeacher ? 'teacher' : 'student',
    });
  } catch (err) {
    console.error('[Join Session API] Error:', err);
    return res.status(500).json({ error: 'Internal server error: ' + err.message });
  }
};
