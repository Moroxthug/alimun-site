/**
 * ============================================================
 *  ALIMUN — POST /api/waitlist/send-offer
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Sends an email to a waitlisted student via Resend when a
 *  spot opens up in their desired cohort.
 *  Called by the DB trigger via pg_net. Authorized with the
 *  WAITLIST_WEBHOOK_SECRET bearer token (falls back to ADMIN_SECRET
 *  until the dedicated secret is configured). Fails closed.
 * ============================================================
 */

const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');
const { sendOfferEmail } = require('../_lib/waitlist-offer-email.js');

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** Constant-time comparison of two strings (hashed first so lengths match). */
function safeEqual(a, b) {
  const ha = crypto.createHash('sha256').update(String(a)).digest();
  const hb = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
}

function isAuthorized(req) {
  const secret = process.env.WAITLIST_WEBHOOK_SECRET || process.env.ADMIN_SECRET;
  if (!secret) return false; // fail closed
  const authHeader = req.headers.authorization || '';
  return safeEqual(authHeader, `Bearer ${secret}`);
}

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.warn('[Alimun Waitlist] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
    return null;
  }
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

module.exports = async function (req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!isAuthorized(req)) {
    console.warn('[Alimun Waitlist] Unauthorized email dispatch attempt');
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { waitlist_id, cohort_id, student_id } = req.body || {};
  if (![waitlist_id, cohort_id, student_id].every((v) => v && UUID_RE.test(String(v)))) {
    return res.status(400).json({ error: 'Missing or invalid parameters' });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return res.status(500).json({ error: 'Server database connection error' });
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.error('[Alimun Waitlist] RESEND_API_KEY is not configured.');
    return res.status(500).json({ error: 'Internal Server Error' });
  }

  try {
    // 0. The waitlist row must belong to this student and cohort and hold a live offer.
    const { data: entry, error: entryErr } = await supabase
      .from('cohort_waitlist')
      .select('id, student_id, cohort_id, offered_at, offer_expires_at')
      .eq('id', waitlist_id)
      .maybeSingle();
    if (entryErr) throw new Error(`Failed to fetch waitlist entry: ${entryErr.message}`);
    if (!entry || entry.student_id !== student_id || entry.cohort_id !== cohort_id ||
        !entry.offered_at || !entry.offer_expires_at || new Date(entry.offer_expires_at).getTime() <= Date.now()) {
      return res.status(409).json({ error: 'No active offer for this waitlist entry' });
    }

    const sent = await sendOfferEmail(supabase, { waitlist_id, cohort_id, student_id });
    if (!sent) return res.status(502).json({ error: 'Failed to send notification email' });

    console.log(`[Alimun Waitlist] Offer email sent (Waitlist: ${waitlist_id})`);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[Alimun Waitlist] Error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
