/**
 * Cloudflare Turnstile check for public endpoints (docs/GROWTH_PLAN.md step 1).
 *
 *   const captcha = require('./_lib/captcha.js');
 *   if (!(await captcha.verify(req))) return res.status(403).json({ error: 'captcha_failed' });
 *
 * The browser sends the token in the X-Captcha-Token header (js/captcha.js). Dormant while TURNSTILE_SECRET_KEY is not
 * set in Vercel: verify() then answers true, so the site keeps working before the keys exist.
 */

function clientIp(req) {
  const fwd = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  return fwd || String(req.headers['x-real-ip'] || '') || '';
}

function enabled() {
  return !!process.env.TURNSTILE_SECRET_KEY;
}

async function verify(req) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  const token = String(req.headers['x-captcha-token'] || '').slice(0, 2048);
  if (!token) return false;
  try {
    const body = new URLSearchParams({ secret, response: token });
    const ip = clientIp(req);
    if (ip) body.set('remoteip', ip);
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
    const out = await r.json().catch(() => ({}));
    if (!out.success) console.warn('[captcha] rejected:', (out['error-codes'] || []).join(','));
    return !!out.success;
  } catch (err) {
    // Cloudflare unreachable: let the request through rather than lock everyone out; rate limits still apply.
    console.error('[captcha] verify failed:', err.message);
    return true;
  }
}

module.exports = { verify, enabled };
