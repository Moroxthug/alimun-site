/**
 * ============================================================
 *  ALIMUN — GET/POST /api/cron-create-rooms
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Daily session-lifecycle cron (runs 00:00 UTC, see vercel.json):
 *   1. Marks sessions that started > 90 min ago as `completed`
 *      (nothing else ever moved them off `scheduled`/`live`).
 *   2. Pre-provisions private Daily.co rooms for sessions in the
 *      next 24 hours that don't have one yet. /api/join-session
 *      still creates rooms on demand, so this is only a prefetch.
 *
 *  Auth: REQUIRES `Authorization: Bearer <CRON_SECRET>`. Fails
 *  closed when CRON_SECRET is not configured.
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');

const COMPLETE_AFTER_MIN = 90;   // must match the join window in join-session.js
const PREFETCH_HOURS = 24;       // cron runs daily, so look a full day ahead

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error('[Cron Sessions] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
    return null;
  }
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

function isAuthorized(req) {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) return false; // fail closed
  return req.headers.authorization === `Bearer ${cronSecret}`;
}

async function createDailyRoom(session, apiKey) {
  const sessionStart = new Date(session.scheduled_at);
  const expEpoch = Math.floor((sessionStart.getTime() + COMPLETE_AFTER_MIN * 60 * 1000) / 1000);
  const roomName = `alimun-${session.id}`;

  const dailyRes = await fetch('https://api.daily.co/v1/rooms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      name: roomName,
      privacy: 'private',
      properties: {
        exp: expEpoch,
        eject_at_room_exp: true,
        enable_recording: false,
        max_participants: 40,
      },
    }),
  });

  if (dailyRes.ok) {
    const data = await dailyRes.json();
    return data?.url || null;
  }

  // Room may already exist (created by join-session or create-cohort) — reuse it.
  if (dailyRes.status === 400) {
    const lookup = await fetch(`https://api.daily.co/v1/rooms/${roomName}`, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    if (lookup.ok) {
      const data = await lookup.json();
      return data?.url || null;
    }
  }

  const errText = await dailyRes.text();
  console.error(`[Cron Sessions] Daily.co error for session ${session.id}:`, errText);
  return null;
}

module.exports = async function handler(req, res) {
  if (!isAuthorized(req)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return res.status(500).json({ error: 'Server database configuration error' });
  }

  const now = new Date();
  const summary = { completed: 0, roomsCreated: 0, roomsFailed: 0 };

  try {
    // 1. Close out sessions that are over.
    const completeBefore = new Date(now.getTime() - COMPLETE_AFTER_MIN * 60 * 1000);
    const { data: completedRows, error: completeErr } = await supabase
      .from('sessions')
      .update({ status: 'completed' })
      .in('status', ['scheduled', 'live'])
      .lt('scheduled_at', completeBefore.toISOString())
      .select('id');
    if (completeErr) {
      console.error('[Cron Sessions] Failed to mark sessions completed:', completeErr);
    } else {
      summary.completed = completedRows?.length || 0;
    }

    // 2. Prefetch rooms for the next 24h.
    const dailyApiKey = process.env.DAILY_API_KEY;
    if (!dailyApiKey) {
      console.warn('[Cron Sessions] DAILY_API_KEY not set — skipping room prefetch');
      return res.status(200).json({ success: true, ...summary, note: 'DAILY_API_KEY not set' });
    }

    const maxStart = new Date(now.getTime() + PREFETCH_HOURS * 60 * 60 * 1000);
    const { data: sessions, error: fetchError } = await supabase
      .from('sessions')
      .select('id, scheduled_at, daily_room_url')
      .eq('status', 'scheduled')
      .gte('scheduled_at', now.toISOString())
      .lte('scheduled_at', maxStart.toISOString());
    if (fetchError) throw fetchError;

    for (const session of sessions || []) {
      const hasRealRoom = session.daily_room_url && !session.daily_room_url.includes('/mock-room/');
      if (hasRealRoom) continue;

      const roomUrl = await createDailyRoom(session, dailyApiKey);
      if (!roomUrl) {
        summary.roomsFailed += 1;
        continue; // never persist a fake URL — join-session will retry on demand
      }

      const { error: updateError } = await supabase
        .from('sessions')
        .update({ daily_room_url: roomUrl })
        .eq('id', session.id);
      if (updateError) {
        console.error(`[Cron Sessions] Failed to store room URL for ${session.id}:`, updateError);
        summary.roomsFailed += 1;
      } else {
        summary.roomsCreated += 1;
      }
    }

    return res.status(200).json({ success: true, ...summary });
  } catch (err) {
    console.error('[Cron Sessions] Execution error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
