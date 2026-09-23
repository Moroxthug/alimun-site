/**
 * ============================================================
 *  ALIMUN — POST /api/join-session
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Secure entry point for joining a live class:
 *  1. Verifies the caller's Supabase JWT.
 *  2. Confirms the caller is the cohort's teacher, an admin, OR an
 *     actively-enrolled student with an ACTIVE subscription.
 *  3. Ensures a private Daily.co room exists (created on demand).
 *  4. Issues a Daily meeting token (teacher = owner).
 *  5. Records attendance (session_attendance.joined_at) server-side.
 *
 *  Body:    { sessionId: "<uuid>" }
 *  Returns: { url, token, role, sessionId, startsAt, endsAt }
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const OPEN_BEFORE_MIN = 15;
const CLOSE_AFTER_MIN = 90;

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
      Authorization: `Bearer ${process.env.DAILY_API_KEY}`,
      ...(options.headers || {}),
    },
  });
  const body = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, body };
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || 'https://alimun.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!process.env.DAILY_API_KEY) {
    return res.status(503).json({ error: 'Video service is not configured' });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) return res.status(500).json({ error: 'Server database configuration error' });

  // 1. Authenticate caller
  const authHeader = req.headers.authorization || '';
  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: missing token' });
  }
  const { data: authData, error: authError } = await supabase.auth.getUser(authHeader.slice(7));
  if (authError || !authData?.user) {
    return res.status(401).json({ error: 'Unauthorized: invalid token' });
  }
  const user = authData.user;
  const isAdmin = user.app_metadata?.role === 'admin';

  let body = req.body || {};
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
  const { sessionId } = body;
  if (!sessionId || !UUID_RE.test(String(sessionId))) {
    return res.status(400).json({ error: 'Missing or invalid sessionId' });
  }

  try {
    // 2. Load session + cohort + teacher
    const { data: session, error: sessionError } = await supabase
      .from('sessions')
      .select('id, scheduled_at, status, daily_room_url, cohort_id, cohorts ( id, teacher_id, language, level, teacher_profiles ( id, user_id, full_name ) )')
      .eq('id', sessionId)
      .maybeSingle();

    if (sessionError || !session) return res.status(404).json({ error: 'Session not found' });
    if (session.status === 'cancelled') return res.status(400).json({ error: 'This session was cancelled' });
    if (session.status === 'completed') return res.status(400).json({ error: 'This session has already ended' });

    const teacherProfile = session.cohorts?.teacher_profiles;
    const isTeacher = !!teacherProfile && teacherProfile.user_id === user.id;

    // Or an actively enrolled, actively paying student?
    let studentProfile = null;
    if (!isTeacher && !isAdmin) {
      const { data: sp } = await supabase
        .from('student_profiles')
        .select('id, full_name, stripe_subscription_status')
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
      if (studentProfile.stripe_subscription_status !== 'active') {
        return res.status(402).json({ error: 'payment_required', message: 'Your subscription is not active. Update your billing to rejoin your class.' });
      }
    }

    // Joining window: from 15 min before start until 90 min after
    const startMs = new Date(session.scheduled_at).getTime();
    const endMs = startMs + CLOSE_AFTER_MIN * 60 * 1000;
    const now = Date.now();
    if (now < startMs - OPEN_BEFORE_MIN * 60 * 1000) {
      return res.status(425).json({ error: 'too_early', message: `The classroom opens ${OPEN_BEFORE_MIN} minutes before the session starts`, startsAt: session.scheduled_at });
    }
    if (now > endMs) {
      return res.status(410).json({ error: 'ended', message: 'This session has already ended' });
    }

    // 3. Ensure the Daily room exists
    const roomName = `alimun-${session.id}`;
    const expEpoch = Math.floor(endMs / 1000);
    let roomUrl = session.daily_room_url;
    if (!roomUrl || roomUrl.includes('/mock-room/')) roomUrl = null;

    if (!roomUrl) {
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
      : isAdmin ? 'Alimun staff' : (studentProfile?.full_name || 'Student');

    const tokenRes = await dailyFetch('/meeting-tokens', {
      method: 'POST',
      body: JSON.stringify({
        properties: {
          room_name: roomName,
          user_name: String(displayName).slice(0, 60),
          user_id: user.id,
          is_owner: isTeacher || isAdmin,
          exp: expEpoch,
        },
      }),
    });

    if (!tokenRes.ok || !tokenRes.body?.token) {
      console.error('[Join Session API] Meeting token creation failed:', tokenRes.body);
      return res.status(502).json({ error: 'Could not authorize video access. Please try again.' });
    }

    // 5. Bookkeeping: mark live when the teacher enters; record attendance.
    if (isTeacher && session.status === 'scheduled') {
      await supabase.from('sessions').update({ status: 'live' }).eq('id', session.id);
    }
    if (studentProfile) {
      await supabase
        .from('session_attendance')
        .upsert(
          { session_id: session.id, student_id: studentProfile.id, joined_at: new Date().toISOString() },
          { onConflict: 'session_id,student_id', ignoreDuplicates: true }
        );
    }

    return res.status(200).json({
      url: roomUrl,
      token: tokenRes.body.token,
      role: isTeacher ? 'teacher' : isAdmin ? 'admin' : 'student',
      sessionId: session.id,
      startsAt: session.scheduled_at,
      endsAt: new Date(endMs).toISOString(),
    });
  } catch (err) {
    console.error('[Join Session API] Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
