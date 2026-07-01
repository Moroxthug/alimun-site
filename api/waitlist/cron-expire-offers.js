/**
 * ============================================================
 *  ALIMUN — GET/POST /api/waitlist/cron-expire-offers
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Cron endpoint to scan and process expired waitlist offers.
 *  Can be triggered by Vercel Cron or manual admin trigger.
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');

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

module.exports = async function (req, res) {
  // Allow GET or POST for cron triggering
  const adminSecret = process.env.ADMIN_SECRET;
  const authHeader = req.headers.authorization;
  
  // Basic security check: if ADMIN_SECRET is configured, require authorization header
  if (adminSecret && (!authHeader || authHeader !== `Bearer ${adminSecret}`)) {
    console.warn('[Alimun Waitlist Cron] Unauthorized cron execution attempt');
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return res.status(500).json({ error: 'Server database connection error' });
  }

  try {
    // Call the database function to process expired waitlist offers
    const { data, error } = await supabase.rpc('process_expired_offers');
    
    if (error) {
      throw error;
    }

    console.log('[Alimun Waitlist Cron] Processed expired offers:', data);
    return res.status(200).json({ success: true, result: data });
  } catch (err) {
    console.error('[Alimun Waitlist Cron] Error executing cron:', err);
    return res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
};
