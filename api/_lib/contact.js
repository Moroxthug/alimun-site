/**
 * Public contact form (contact.html, js/contact-form.js). Served by
 * /api/send-admin-email?action=contact (the function cap keeps it there).
 * Emails each message through Resend to CONTACT_EMAIL (default: the owner),
 * with the sender as reply-to. Nothing is stored.
 *
 * Abuse limits (until Cloudflare Turnstile is configured): a hidden honeypot
 * field, length caps, and at most PER_IP_HOUR messages per address per hour
 * on each warm instance.
 */

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const LOCALES = new Set(['en', 'es', 'fr', 'de', 'it', 'pt', 'zh', 'ar', 'ma']);
const PER_IP_HOUR = 5;
const recent = new Map(); // ip -> timestamps of messages in the last hour

function clientIp(req) {
  const fwd = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  return fwd || String(req.headers['x-real-ip'] || '') || 'unknown';
}

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function field(body, name, max) {
  return String(body[name] || '').replace(/[\r\n]+/g, name === 'message' ? '\n' : ' ').trim().slice(0, max);
}

module.exports = async function contact(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || 'https://alimun.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let body = req.body || {};
  if (typeof body === 'string') { try { body = JSON.parse(body || '{}'); } catch { body = {}; } }

  // Bots fill every field, people never see this one: answer as if sent.
  if (body.website) return res.status(200).json({ ok: true });

  const firstName = field(body, 'first_name', 100);
  const lastName = field(body, 'last_name', 100);
  const email = field(body, 'email', 254);
  const phone = field(body, 'phone', 40);
  const message = field(body, 'message', 5000);
  const locale = LOCALES.has(body.locale) ? body.locale : 'en';
  const page = typeof body.page === 'string' ? body.page.slice(0, 200) : '';

  if (!EMAIL_RE.test(email)) return res.status(400).json({ error: 'invalid_email', message: 'Please enter a valid email address.' });
  if (!firstName || !message) return res.status(400).json({ error: 'missing_fields', message: 'Please fill in your name and message.' });

  const ip = clientIp(req), now = Date.now();
  const times = (recent.get(ip) || []).filter((t) => now - t < 3600 * 1000);
  if (times.length >= PER_IP_HOUR) return res.status(429).json({ error: 'rate_limited', message: 'Too many messages right now. Please try again later.' });

  const key = process.env.RESEND_API_KEY;
  if (!key || key.includes('YOUR_RESEND_API_KEY')) {
    console.error('[contact] RESEND_API_KEY missing');
    return res.status(500).json({ error: 'email_not_configured', message: 'Please try again later.' });
  }

  const name = `${firstName} ${lastName}`.trim();
  const rows = [['Name', name], ['Email', email], ['Phone', phone || '-'], ['Language', locale], ['Page', page || '-']]
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${k}</td><td style="padding:4px 0">${escapeHtml(v)}</td></tr>`).join('');
  const html = `<table style="font-family:sans-serif;font-size:14px">${rows}</table>`
    + `<p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(message)}</p>`;
  const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nLanguage: ${locale}\nPage: ${page || '-'}\n\n${message}`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM_ADDRESS || 'Alimun <no-reply@alimun.com>',
        to: [process.env.CONTACT_EMAIL || 'bchysfpol@gmail.com'],
        reply_to: email,
        subject: `Contact form: ${name}`.slice(0, 200),
        html,
        text,
      }),
    });
    if (!r.ok) {
      console.error('[contact] Resend', r.status, (await r.text()).slice(0, 300));
      return res.status(502).json({ error: 'email_rejected', status: r.status, message: 'Please try again later.' });
    }
    times.push(now); recent.set(ip, times);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact] failed:', err.message || err);
    return res.status(500).json({ error: 'server_error', message: 'Please try again later.' });
  }
};
