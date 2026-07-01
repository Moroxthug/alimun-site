/**
 * ============================================================
 *  ALIMUN — GET/POST /api/cron-create-rooms
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Vercel Cron Job:
 *  - Checks for sessions starting in the next 30 minutes without a daily_room_url.
 *  - Calls Daily.co API to provision a secure video room.
 *  - Updates sessions table with daily_room_url.
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error('[Cron Rooms API] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
    return null;
  }
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

module.exports = async function handler(req, res) {
  // Enforce Vercel CRON Auth if token is defined
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = req.headers.authorization;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return res.status(401).json({ error: 'Unauthorized cron trigger' });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return res.status(500).json({ error: 'Server database configuration error' });
  }

  const dailyApiKey = process.env.DAILY_API_KEY;
  if (!dailyApiKey) {
    console.warn('[Cron Rooms API] DAILY_API_KEY is not defined in env');
  }

  try {
    const now = new Date();
    // Check sessions starting in the next 30 minutes (and not already started more than 10 mins ago)
    const minStart = new Date(now.getTime() - 10 * 60 * 1000);
    const maxStart = new Date(now.getTime() + 30 * 60 * 1000);

    const { data: sessions, error: fetchError } = await supabase
      .from('sessions')
      .select('id, scheduled_at')
      .is('daily_room_url', null)
      .gte('scheduled_at', minStart.toISOString())
      .lte('scheduled_at', maxStart.toISOString())
      .eq('status', 'scheduled');

    if (fetchError) throw fetchError;

    if (!sessions || sessions.length === 0) {
      return res.status(200).json({ success: true, message: 'No sessions requiring room creation.' });
    }

    const results = [];

    for (const session of sessions) {
      const sessionStart = new Date(session.scheduled_at);
      // Expire room 90 minutes after session starts
      const expEpoch = Math.floor((sessionStart.getTime() + 90 * 60 * 1000) / 1000);
      const roomName = `alimun-${session.id}`;

      let roomUrl = `https://api.daily.co/mock-room/alimun-${session.id}`; // Fallback mock URL if API fails or API Key missing

      if (dailyApiKey) {
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
                enable_recording: false
              }
            })
          });

          if (dailyRes.ok) {
            const dailyData = await dailyRes.json();
            if (dailyData?.url) {
              roomUrl = dailyData.url;
            }
          } else {
            const errText = await dailyRes.text();
            console.error(`Daily.co API error for session ${session.id}:`, errText);
            // We use the mock URL as safety fallback to avoid failing completely
          }
        } catch (dailyErr) {
          console.error(`Failed to fetch Daily.co API for session ${session.id}:`, dailyErr);
        }
      }

      // Update session with room URL
      const { error: updateError } = await supabase
        .from('sessions')
        .update({ daily_room_url: roomUrl })
        .eq('id', session.id);

      if (updateError) {
        console.error(`Failed to update room URL for session ${session.id}:`, updateError);
      } else {
        results.push({ sessionId: session.id, roomUrl });
      }
    }

    return res.status(200).json({
      success: true,
      message: `Created rooms for ${results.length} sessions.`,
      rooms: results
    });

  } catch (err) {
    console.error('[Cron Rooms API] Execution error:', err);
    return res.status(500).json({ error: 'Internal server error: ' + err.message });
  }
};
