/**
 * ============================================================
 *  ALIMUN — GET/POST /api/waitlist/cron-expire-offers
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Cron endpoint to scan and process expired waitlist offers. Since Phase 3
 *  the database also does this every 15 minutes (pg_cron, migration
 *  202610150400_phase3_cron); this daily run is a backstop.
 *  Triggered by Vercel Cron (Bearer CRON_SECRET) only.
 *  FAILS CLOSED when CRON_SECRET is not set.
 * ============================================================
 */

const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');
const { recordRun } = require('../_lib/cron-log.js');

/** Constant-time comparison of two strings (hashed first so lengths match). */
function safeEqual(a, b) {
  const ha = crypto.createHash('sha256').update(String(a)).digest();
  const hb = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
}

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.warn('[Alimun Waitlist Cron] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
    return null;
  }
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

function isAuthorized(req) {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) return false; // fail closed
  return safeEqual(req.headers.authorization || '', `Bearer ${cronSecret}`);
}

module.exports = async function (req, res) {
  if (!isAuthorized(req)) {
    console.warn('[Alimun Waitlist Cron] Unauthorized cron execution attempt');
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return res.status(500).json({ error: 'Server database connection error' });
  }

  try {
    const { data, error } = await supabase.rpc('process_expired_offers');
    if (error) throw error;

    console.log('[Alimun Waitlist Cron] Processed expired offers:', data);
    await recordRun(supabase, 'vercel:cron-expire-offers', true, data || null);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[Alimun Waitlist Cron] Error executing cron:', err);
    await recordRun(supabase, 'vercel:cron-expire-offers', false, { error: String(err.message || err) });
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
