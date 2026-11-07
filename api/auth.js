/**
 * ============================================================
 *  ALIMUN — /api/auth
 *  Vercel Serverless Function (Node.js runtime)
 *
 *    ?action=reset (POST, public) — email a "choose a new password" link.
 *    ?action=unsubscribe&u=&s= (GET: a page with a button; POST: done, also the mail apps' one-click
 *      unsubscribe) — stops news and offers for that person (signed link from api/_lib/email.js).
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
const captcha = require('./_lib/captcha.js');
const L = require('./_lib/email-i18n.js');

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

function resetEmail(link, lang) {
  return mail.renderEmail({
    hero: 'reset', lang,
    preheader: L.say(lang, 'reset.preheader'),
    heading: L.say(lang, 'reset.heading'),
    blocks: [
      { p: L.html(lang, 'reset.body') },
      { button: { label: L.say(lang, 'reset.button'), href: link } },
    ],
    note: L.html(lang, 'reset.note'),
    footer: L.html(lang, 'reset.footer'),
  });
}

async function handleReset(req, res) {
  let body = req.body || {};
  if (typeof body === 'string') {
    try { body = JSON.parse(body || '{}'); } catch { return res.status(400).json({ error: 'invalid_json' }); }
  }
  const email = String(body.email || '').trim().toLowerCase();
  const lang = LOCALES.has(String(body.lang || '')) ? String(body.lang) : '';
  // The email's language: the page's folder, else the language the visitor chose on the site, else English.
  const emailLang = lang || (L.LANGS.includes(String(body.ui || '')) ? String(body.ui) : 'en');
  if (!EMAIL_RE.test(email) || email.length > 200) return res.status(400).json({ error: 'invalid_email' });
  if (!allow(recentIp, clientIp(req), PER_IP_HOUR)) return res.status(429).json({ error: 'rate_limited' });
  if (!(await captcha.verify(req))) return res.status(403).json({ error: 'captcha_failed' });
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
  const sent = await mail.sendEmail({ to: email, subject: L.say(emailLang, 'reset.subject'), ...resetEmail(link, emailLang) });
  if (!sent) return res.status(503).json({ error: 'email_unavailable' });
  return res.status(200).json({ ok: true });
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** A small page in the site's style (bone page, white card, Coolvetica heading, lime button). */
function page(res, status, heading, text, form) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  return res.status(status).send(`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${mail.esc(heading)} – Alimun</title>
<link rel="icon" href="/images/favicon.svg" type="image/svg+xml"><style>
@font-face { font-family: 'Coolvetica Condensed'; src: url('/fonts/coolvetica-condensed-rg.otf') format('opentype'); }
@font-face { font-family: 'Satoshi'; src: url('/fonts/Satoshi-Variable.ttf') format('truetype'); font-weight: 300 900; }
body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #f0efe9; font-family: Satoshi, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; color: #080808; padding: 16px; box-sizing: border-box; }
.card { background: #fff; border-radius: 28px; padding: 10px; max-width: 520px; width: 100%; }
.card img { display: block; width: 100%; height: auto; border-radius: 20px; }
.in { padding: 28px 30px 30px; }
h1 { font-family: 'Coolvetica Condensed', 'Arial Narrow', sans-serif; font-weight: 400; font-size: 42px; line-height: 1; margin: 0 0 14px; }
p { font-size: 16px; line-height: 1.6; color: #2b2b2b; margin: 0 0 22px; }
button, a.btn { display: inline-block; background: #ceff65; color: #080808; border: 0; border-radius: 999px; padding: 15px 28px; font: 700 16px Satoshi, Arial, sans-serif; cursor: pointer; text-decoration: none; }
</style></head><body><main class="card"><img src="/images/email/hero-message.png" alt="Alimun"><div class="in"><h1>${mail.esc(heading)}</h1><p>${text}</p>${form || '<a class="btn" href="/">Back to Alimun</a>'}</div></main></body></html>`);
}

async function handleUnsubscribe(req, res) {
  const u = String((req.query && req.query.u) || ''), s = String((req.query && req.query.s) || '');
  if (!UUID_RE.test(u) || !mail.checkUnsubscribe(u, s)) {
    return page(res, 400, 'This link does not work', 'The link may be incomplete. You can also stop news and offers in your dashboard, under Settings.');
  }
  if (req.method === 'GET') {
    // A page with a button: link checkers that open the link do not unsubscribe anyone.
    const action = `/api/auth?action=unsubscribe&u=${encodeURIComponent(u)}&s=${encodeURIComponent(s)}`;
    return page(res, 200, 'Stop news and offers?', 'You will no longer receive news and offers from Alimun. Emails about your account and your classes still arrive.',
      `<form method="POST" action="${mail.esc(action)}"><button type="submit">Stop news and offers</button></form>`);
  }
  const supabase = getSupabaseAdmin();
  if (!supabase) return page(res, 503, 'Please try again', 'Something went wrong on our side. Please try again in a minute.');
  const { data: last } = await supabase.from('marketing_consents').select('age_16_plus').eq('user_id', u)
    .order('created_at', { ascending: false }).limit(1).maybeSingle();
  const { error } = await supabase.from('marketing_consents').insert({ user_id: u, granted: false, age_16_plus: !!(last && last.age_16_plus), source: 'unsubscribe' });
  if (error && error.code !== '23503') {
    console.error('[auth] unsubscribe:', error.message);
    return page(res, 500, 'Please try again', 'Something went wrong on our side. Please try again in a minute.');
  }
  return page(res, 200, 'Done', 'You will no longer receive news and offers from Alimun. You can turn them back on at any time in your dashboard, under Settings.');
}

module.exports = async function handler(req, res) {
  if (req.query && req.query.action === 'unsubscribe') {
    res.setHeader('Cache-Control', 'no-store');
    if (req.method !== 'GET' && req.method !== 'POST') { res.setHeader('Allow', 'GET, POST'); return res.status(405).end(); }
    return handleUnsubscribe(req, res);
  }
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || SITE);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Captcha-Token');
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'Method not allowed' }); }
  const action = (req.query && req.query.action) || '';
  if (action === 'reset') return handleReset(req, res);
  return res.status(400).json({ error: 'Unknown action' });
};
