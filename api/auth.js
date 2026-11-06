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

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
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

function resetEmailHtml(link) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Choose a new password</title></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;background:#f6f6f6;margin:0;padding:0">
<div style="max-width:600px;margin:40px auto;background:#ffffff;border-radius:16px;overflow:hidden">
<div style="padding:30px 30px 0;text-align:center"><h1 style="color:#080808;margin:0;font-size:24px;font-weight:800;letter-spacing:.05em;text-transform:uppercase">Alimun</h1></div>
<div style="padding:30px;color:#333333;line-height:1.6">
<h2 style="color:#080808;margin-top:0">Choose a new password</h2>
<p>Someone asked to reset the password of the Alimun account for this email address. Use the button below to choose a new one.</p>
<p style="text-align:center"><a href="${escapeHtml(link)}" style="display:inline-block;background:#ceff65;color:#080808;text-decoration:none;padding:14px 30px;border-radius:30px;font-weight:700;font-size:14px">Choose a new password</a></p>
<p style="font-size:13px;color:#777777">The link works once and only for a limited time. If you did not ask for this, ignore this email: your password stays as it is.</p>
</div></div></body></html>`;
}

async function sendEmail(to, subject, html) {
  const key = process.env.RESEND_API_KEY;
  if (!key || key.includes('YOUR_RESEND_API_KEY')) { console.error('[auth] RESEND_API_KEY missing'); return false; }
  const from = process.env.EMAIL_FROM_ADDRESS || 'Alimun <no-reply@alimun.com>';
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to, subject, html }),
    });
    if (!r.ok) { console.error('[auth] Resend rejected email:', r.status); return false; }
    return true;
  } catch (err) {
    console.error('[auth] Resend error:', err.message);
    return false;
  }
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
  const sent = await sendEmail(email, 'Choose a new Alimun password', resetEmailHtml(link));
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
