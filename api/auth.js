/**
 * ============================================================
 *  ALIMUN — /api/auth
 *  Vercel Serverless Function (Node.js runtime)
 *
 *    ?action=reset (POST, public) — email a "choose a new password" link.
 *
 *  Why this exists: links in Supabase's own auth emails go through
 *  /auth/v1/verify and are then redirected to the project's Site URL unless the
 *  redirect is on the allow-list. Production was sending everyone to
 *  http://localhost:3000. Here the link is built from the hashed token and
 *  points straight at alimun.com/reset-password.html, which verifies it in the
 *  browser (supabase.auth.verifyOtp) only when the person saves a password, so
 *  mail scanners that open links cannot use it up. Sent through Resend, so it is
 *  not held to Supabase's built-in mailer limits.
 *
 *  Answers 200 whether or not the account exists (no account lookup by email).
 *  503 { error: 'email_unavailable' } means Resend is not set up or refused the
 *  message: the page then falls back to supabase.auth.resetPasswordForEmail.
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');
const mail = require('./_lib/email.js');

const SITE = 'https://alimun.com';
const LOCALES = new Set(['ar', 'de', 'es', 'fr', 'it', 'ma', 'pt', 'zh']);
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;
const PER_IP_HOUR = 10;
const PER_EMAIL_HOUR = 3;
const recentIp = new Map();    // ip -> timestamps (per warm instance)
const recentEmail = new Map(); // email -> timestamps (per warm instance)

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}

function clientIp(req) {
  const fwd = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  return fwd || String(req.headers['x-real-ip'] || '') || 'unknown';
}


/** true when the key may go ahead; records the attempt. */
function allow(map, key, max) {
  const now = Date.now();
  const times = (map.get(key) || []).filter((t) => now - t < 3600e3);
  if (times.length >= max) { map.set(key, times); return false; }
  times.push(now);
  map.set(key, times);
  if (map.size > 5000) map.clear();
  return true;
}

function resetEmail(link) {
  return mail.renderEmail({
    hero: 'reset',
    preheader: 'Use the button in this email to choose a new password for your Alimun account.',
    heading: 'Choose a new password',
    blocks: [
      { p: 'Someone asked to reset the password of the Alimun account for this email address. Use the button below to choose a new one.' },
      { button: { label: 'Choose a new password', href: link } },
    ],
    note: 'The link works once and only for a limited time. If you did not ask for this, you can ignore this email: your password stays as it is.',
    footer: 'You received this email because a password reset was requested for this address on alimun.com.',
  });
}

async function handleReset(req, res) {
  let body = req.body || {};
  if (typeof body === 'string') {
    try { body = JSON.parse(body || '{}'); } catch { return res.status(400).json({ error: 'invalid_json' }); }
  }
  const email = String(body.email || '').trim().toLowerCase();
  const lang = LOCALES.has(String(body.lang || '')) ? String(body.lang) : '';
  if (!EMAIL_RE.test(email) || email.length > 200) return res.status(400).json({ error: 'invalid_email' });
  if (!allow(recentIp, clientIp(req), PER_IP_HOUR)) return res.status(429).json({ error: 'rate_limited' });
  // Same answer as a sent email, so the limit does not reveal anything about the account.
  if (!allow(recentEmail, email, PER_EMAIL_HOUR)) return res.status(200).json({ ok: true });

  const supabase = getSupabaseAdmin();
  if (!supabase) return res.status(503).json({ error: 'email_unavailable' });
  if (!process.env.RESEND_API_KEY) return res.status(503).json({ error: 'email_unavailable' });

  const page = `${SITE}/${lang ? lang + '/' : ''}reset-password.html`;
  const { data, error } = await supabase.auth.admin.generateLink({ type: 'recovery', email, options: { redirectTo: page } });
  const hashed = data?.properties?.hashed_token;
  if (error || !hashed) {
    // Unknown address: answer as if sent. Anything else is logged and still answered the same way.
    if (!/not found|no user/i.test(error?.message || '')) console.error('[auth] reset: generateLink', error?.message || 'no token');
    return res.status(200).json({ ok: true });
  }
  const link = `${page}?token_hash=${encodeURIComponent(hashed)}&type=recovery`;
  const sent = await mail.sendEmail({ to: email, subject: 'Choose a new Alimun password', ...resetEmail(link) });
  if (!sent) return res.status(503).json({ error: 'email_unavailable' });
  return res.status(200).json({ ok: true });
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || SITE);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'Method not allowed' }); }
  const action = (req.query && req.query.action) || '';
  if (action === 'reset') return handleReset(req, res);
  return res.status(400).json({ error: 'Unknown action' });
};
