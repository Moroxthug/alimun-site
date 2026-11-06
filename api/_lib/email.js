/**
 * Alimun email layout and sender (every email the site sends goes through here).
 *
 *   const { renderEmail, sendEmail, esc } = require('./_lib/email.js');
 *   const { html, text } = renderEmail({
 *     preheader: 'Shown next to the subject in the inbox',
 *     heading:   'Choose a new password',
 *     blocks: [
 *       { p: 'Plain paragraph. <strong>HTML allowed</strong>: escape anything that came from a person with esc().' },
 *       { facts: [['Class', 'German B1'], ['Starts', 'Monday 3 November, 18:00']] },   // values are escaped here
 *       { quote: 'Text from a person (escaped here, line breaks kept)' },
 *       { button: { label: 'Choose a new password', href: 'https://alimun.com/…' } },
 *       { buttons: [{ label: 'Approve', href }, { label: 'Reject', href, secondary: true }] },
 *     ],
 *     note: 'Small print under the content (HTML allowed).',
 *     footer: 'Why this person gets this email (HTML allowed).',
 *   });
 *   await sendEmail({ to, subject, html, text, replyTo });   // true only when Resend accepted it
 *
 * Design (site rules): bone page, white card with the site's large radius, the Alimun logo, Coolvetica Condensed
 * headings where the mail app loads web fonts (Apple Mail, iOS) and a condensed system font elsewhere, Satoshi or the
 * system sans for text, ink text, lime only for the main button. No black backgrounds, no images other than the logo.
 * Built with tables and inline styles so Gmail, Outlook and phone apps show the same thing.
 */

const SITE = 'https://alimun.com';
const INK = '#080808';
const TEXT = '#2b2b2b';
const MUTED = '#6b6b66';
const BONE = '#f0efe9';
const LINE = '#e4e2da';
const LIME = '#ceff65';
const SANS = "Satoshi, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const DISPLAY = "'Coolvetica Condensed', 'Arial Narrow', 'Helvetica Neue Condensed', 'Roboto Condensed', Arial, sans-serif";

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function safeHref(href) {
  const u = String(href || '');
  return /^(https:\/\/|mailto:)/i.test(u) ? u : SITE;
}

function buttonCell(b, i) {
  const primary = !b.secondary;
  const bg = primary ? LIME : '#ffffff';
  const border = primary ? LIME : INK;
  return `<td align="center" bgcolor="${bg}" style="border-radius:999px;background:${bg};border:1.5px solid ${border};mso-padding-alt:15px 30px;">`
    + `<a href="${esc(safeHref(b.href))}" target="_blank" style="display:inline-block;padding:15px 30px;font-family:${SANS};font-size:16px;font-weight:700;line-height:1.2;color:${INK};text-decoration:none;border-radius:999px;">${esc(b.label)}</a></td>`
    + (i >= 0 ? '<td width="12" style="width:12px;font-size:0;line-height:0;">&nbsp;</td>' : '');
}

function block(b) {
  if (b.p != null) {
    return `<p style="margin:0 0 18px;font-family:${SANS};font-size:16px;line-height:1.6;color:${TEXT};">${b.p}</p>`;
  }
  if (b.facts) {
    const rows = b.facts.filter((f) => f && f[1] != null && String(f[1]).trim() !== '').map((f, i, all) =>
      `<tr><td style="padding:14px 20px;${i < all.length - 1 ? `border-bottom:1px solid ${LINE};` : ''}font-family:${SANS};">`
      + `<div style="font-size:13px;line-height:1.4;color:${MUTED};">${esc(f[0])}</div>`
      + `<div style="font-size:16px;line-height:1.45;color:${INK};font-weight:600;white-space:pre-wrap;">${esc(f[1])}</div></td></tr>`).join('');
    return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:6px 0 24px;background:${BONE};border-radius:16px;border-collapse:separate;">${rows}</table>`;
  }
  if (b.quote != null) {
    return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:6px 0 24px;background:${BONE};border-radius:16px;border-collapse:separate;"><tr><td style="padding:18px 20px;font-family:${SANS};font-size:15px;line-height:1.6;color:${TEXT};white-space:pre-wrap;">${esc(b.quote)}</td></tr></table>`;
  }
  if (b.button || b.buttons) {
    const list = b.buttons || [b.button];
    const cells = list.map((x, i) => buttonCell(x, i < list.length - 1 ? i : -1)).join('');
    return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:10px 0 26px;"><tr>${cells}</tr></table>`;
  }
  return '';
}

function htmlToText(html) {
  return String(html)
    .replace(/<a [^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gi, (m, href, label) => `${label.replace(/<[^>]+>/g, '')} (${href.replace(/&amp;/g, '&')})`)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/[ \t]+\n/g, '\n').trim();
}

function renderText({ heading, blocks = [], note, footer }) {
  const out = [heading, ''];
  for (const b of blocks) {
    if (b.p != null) out.push(htmlToText(b.p), '');
    else if (b.facts) out.push(b.facts.filter((f) => f && f[1] != null && String(f[1]).trim() !== '').map((f) => `${f[0]}: ${f[1]}`).join('\n'), '');
    else if (b.quote != null) out.push(String(b.quote), '');
    else if (b.button || b.buttons) out.push((b.buttons || [b.button]).map((x) => `${x.label}: ${safeHref(x.href)}`).join('\n'), '');
  }
  if (note) out.push(htmlToText(note), '');
  out.push('--', 'Alimun · alimun.com');
  if (footer) out.push(htmlToText(footer));
  return out.join('\n');
}

function renderEmail({ preheader = '', heading, blocks = [], note = '', footer = '' }) {
  const firstButton = blocks.find((b) => b.button || b.buttons);
  const fallbackHref = firstButton ? safeHref((firstButton.buttons || [firstButton.button])[0].href) : '';
  const fallback = fallbackHref && fallbackHref.startsWith('https://') && fallbackHref.length > 60
    ? `<p style="margin:0 0 18px;font-family:${SANS};font-size:13px;line-height:1.55;color:${MUTED};">If the button does not work, copy this link into your browser:<br><a href="${esc(fallbackHref)}" style="color:${INK};text-decoration:underline;word-break:break-all;">${esc(fallbackHref)}</a></p>`
    : '';
  const noteHtml = note ? `<p style="margin:0 0 18px;font-family:${SANS};font-size:13px;line-height:1.55;color:${MUTED};">${note}</p>` : '';

  const html = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>${esc(heading)}</title>
<style>
@font-face { font-family: 'Coolvetica Condensed'; src: url('${SITE}/fonts/coolvetica-condensed-rg.otf') format('opentype'); font-weight: 400; font-style: normal; }
@font-face { font-family: 'Satoshi'; src: url('${SITE}/fonts/Satoshi-Variable.ttf') format('truetype'); font-weight: 300 900; font-style: normal; }
body { margin: 0 !important; padding: 0 !important; background: ${BONE}; -webkit-text-size-adjust: 100%; }
a { color: ${INK}; }
@media only screen and (max-width: 620px) {
  .al-card { padding: 34px 24px 26px !important; border-radius: 20px !important; }
  .al-h1 { font-size: 36px !important; }
  .al-outer { padding: 24px 12px 32px !important; }
}
</style>
</head>
<body style="margin:0;padding:0;background:${BONE};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;font-size:1px;line-height:1px;color:${BONE};">${esc(preheader)}${'&#847;&zwnj;&nbsp;'.repeat(40)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${BONE}" style="background:${BONE};">
<tr><td align="center" class="al-outer" style="padding:40px 16px 48px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:580px;">
    <tr><td style="padding:0 6px 22px;">
      <a href="${SITE}" target="_blank" style="text-decoration:none;"><img src="${SITE}/images/email/alimun-logo.png" width="120" height="32" alt="Alimun" style="display:block;width:120px;height:32px;border:0;outline:none;"></a>
    </td></tr>
    <tr><td class="al-card" bgcolor="#ffffff" style="background:#ffffff;border-radius:24px;padding:46px 44px 32px;">
      <h1 class="al-h1" style="margin:0 0 22px;font-family:${DISPLAY};font-size:42px;line-height:1.02;font-weight:400;letter-spacing:-0.005em;color:${INK};">${esc(heading)}</h1>
      ${blocks.map(block).join('\n      ')}
      ${fallback}
      ${noteHtml}
    </td></tr>
    <tr><td style="padding:24px 6px 0;font-family:${SANS};font-size:12px;line-height:1.6;color:${MUTED};">
      <a href="${SITE}" target="_blank" style="color:${INK};text-decoration:none;font-weight:700;">Alimun</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="${SITE}" target="_blank" style="color:${MUTED};text-decoration:none;">alimun.com</a>${footer ? `<br>${footer}` : ''}
    </td></tr>
  </table>
</td></tr>
</table>
</body>
</html>`;
  return { html, text: renderText({ heading, blocks, note, footer }) };
}

/** Send through Resend. Returns true only when Resend accepted the message. */
async function sendEmail({ to, subject, html, text, replyTo, from }) {
  const key = process.env.RESEND_API_KEY;
  if (!key || key.includes('YOUR_RESEND_API_KEY')) { console.error('[email] RESEND_API_KEY missing'); return false; }
  const payload = {
    from: from || process.env.EMAIL_FROM_ADDRESS || 'Alimun <no-reply@alimun.com>',
    to,
    subject: String(subject || '').replace(/[\r\n<>]+/g, ' ').trim().slice(0, 200),
    html,
  };
  if (text) payload.text = text;
  if (replyTo) payload.reply_to = replyTo;
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!r.ok) {
      const body = await r.text().catch(() => '');
      console.error('[email] Resend rejected email:', r.status, body.slice(0, 300));
      return false;
    }
    return true;
  } catch (err) {
    console.error('[email] Resend error:', err.message);
    return false;
  }
}

module.exports = { renderEmail, sendEmail, esc, SITE };
