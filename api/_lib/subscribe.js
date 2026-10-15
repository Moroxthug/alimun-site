/**
 * Public email signup for the "Reserve your spot" and footer newsletter
 * forms (js/subscribe.js). Served by /api/send-admin-email?action=subscribe
 * (the function cap keeps it there). Stores into public.email_signups
 * (migration 202610150500_phase3_email_signups), readable by admins only.
 *
 * Abuse limits (until Cloudflare Turnstile is configured): at most
 * PER_IP_HOUR signups per address per hour and GLOBAL_HOUR in total, keyed
 * by an HMAC of the IP that is cleared after a day. A repeated email gets
 * the same answer as a new one, so the form never reveals who signed up.
 */

const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const SOURCES = new Set(['home', 'footer']);
const LOCALES = new Set(['en', 'es', 'fr', 'de', 'it', 'pt', 'zh', 'ar', 'ma']);
const PER_IP_HOUR = 5;
const GLOBAL_HOUR = 300;

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

function ipHash(ip) {
  return crypto.createHmac('sha256', process.env.SUPABASE_SERVICE_ROLE_KEY || 'alimun').update(ip).digest('hex').slice(0, 32);
}

module.exports = async function subscribe(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || 'https://alimun.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let body = req.body || {};
  if (typeof body === 'string') { try { body = JSON.parse(body || '{}'); } catch { body = {}; } }
  const email = String(body.email || '').trim();
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'invalid_email', message: 'Please enter a valid email address.' });
  }
  const source = SOURCES.has(body.source) ? body.source : 'home';
  const locale = LOCALES.has(body.locale) ? body.locale : null;
  const page = typeof body.page === 'string' ? body.page.slice(0, 200) : null;

  const supabase = getSupabaseAdmin();
  if (!supabase) return res.status(500).json({ error: 'server_error', message: 'Please try again later.' });

  try {
    const hash = ipHash(clientIp(req));
    const hourAgo = new Date(Date.now() - 3600 * 1000).toISOString();
    const [{ count: mine, error: e1 }, { count: all, error: e2 }] = await Promise.all([
      supabase.from('email_signups').select('id', { count: 'exact', head: true }).eq('ip_hash', hash).gte('created_at', hourAgo),
      supabase.from('email_signups').select('id', { count: 'exact', head: true }).gte('created_at', hourAgo),
    ]);
    if (e1 || e2) throw e1 || e2;
    if (mine >= PER_IP_HOUR || all >= GLOBAL_HOUR) {
      return res.status(429).json({ error: 'rate_limited', message: 'Too many signups right now. Please try again later.' });
    }

    const { error } = await supabase.from('email_signups').insert({ email, source, locale, page, ip_hash: hash });
    if (error && error.code !== '23505') throw error; // 23505: already signed up, same answer

    // Keep the rate-limit key no longer than a day.
    await supabase.from('email_signups').update({ ip_hash: null })
      .lt('created_at', new Date(Date.now() - 24 * 3600 * 1000).toISOString())
      .not('ip_hash', 'is', null);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[subscribe] failed:', err.message || err);
    return res.status(500).json({ error: 'server_error', message: 'Please try again later.' });
  }
};
