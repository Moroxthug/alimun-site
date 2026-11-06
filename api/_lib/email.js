/**
 * Alimun email layout and sender (every email the site sends goes through here).
 *
 *   const { renderEmail, sendEmail, esc, heroForLanguage } = require('./_lib/email.js');
 *   const { html, text } = renderEmail({
 *     hero:      'reset',            // illustrated header, see HEROES (the logo is part of the picture)
 *     preheader: 'Shown next to the subject in the inbox',
 *     heading:   'Choose a new password',
 *     blocks: [
 *       { p: 'Paragraph. <strong>HTML allowed</strong>: escape anything that came from a person with esc().' },
 *       { facts: [['Class', 'German B1'], ['Starts', 'Monday 3 November, 18:00']] },   // values are escaped here
 *       { quote: 'Text from a person (escaped here, line breaks kept)', label: 'Their note' },
 *       { button: { label: 'Choose a new password', href: 'https://alimun.com/…' } },
 *       { buttons: [{ label: 'Approve', href }, { label: 'Reject', href, secondary: true }] },
 *     ],
 *     note: 'Small print under the content (HTML allowed).',
 *     signoff: true,                 // "The Alimun team" with the book mark (default true)
 *     footer: 'Why this person gets this email (HTML allowed).',
 *   });
 *   await sendEmail({ to, subject, html, text, replyTo });   // true only when Resend accepted it
 *
 * Design: bone page, white card with the site's large radius, an illustrated header in the approved drawing cast
 * (docs/design/sources/email, rendered to PNG because mail apps do not show SVG), Coolvetica Condensed headings where
 * the mail app loads web fonts and a condensed system font elsewhere, Satoshi or the system sans for text, ink text,
 * lime only for the main button. The logo lives inside the header picture on its light panel, so it stays readable
 * when a mail app darkens the email; apps that support it get a matching dark theme. Tables and inline styles so
 * Gmail, Outlook and phone apps show the same thing. No black backgrounds, no emojis, no AI wording.
 */

const SITE = 'https://alimun.com';
const IMG = `${SITE}/images/email`;
const INK = '#080808';
const TEXT = '#2b2b2b';
const MUTED = '#6b6b66';
const BONE = '#f0efe9';
const LINE = '#e2e0d7';
const LIME = '#ceff65';
const FOREST = '#1a443c';
const SANS = "Satoshi, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const DISPLAY = "'Coolvetica Condensed', 'Arial Narrow', 'Roboto Condensed', 'Helvetica Neue', Arial, sans-serif";

/** Header pictures in images/email (hero-<name>.png, 1120x440, shown at 560x220) and their alt text. */
const HEROES = {
  default: 'Alimun',
  reset: 'Alimun: the Alimun book thinking of a key',
  welcome: 'Alimun: the Alimun book saying Welcome!',
  application: 'Alimun: the owl thinking about a new teacher',
  update: 'Alimun: the Alimun book next to a plant',
  class: 'Alimun: the Alimun book saying Hello! next to a calendar',
  'class-english': 'Alimun: the Alimun book saying Hello! next to a cup of tea',
  'class-german': 'Alimun: the Alimun book saying Hallo! next to a pretzel',
  'class-french': 'Alimun: the Alimun book saying Bonjour ! next to a croissant',
  'class-spanish': 'Alimun: the Alimun book saying ¡Hola! next to a churro',
  'class-italian': 'Alimun: the Alimun book saying Ciao! next to a slice of pizza',
  'class-portuguese': 'Alimun: the Alimun book saying Olá! next to a pastel de nata',
  session: 'Alimun: the Alimun book surprised next to an alarm clock',
  place: 'Alimun: the Alimun book surprised next to a ticket',
  notes: 'Alimun: the Alimun book next to books and a pencil',
  payment: 'Alimun: the Alimun book wondering',
  ended: 'Alimun: the Alimun book asleep next to a mug',
  plan: 'Alimun: the Alimun book next to a rising chart',
  message: 'Alimun: the parrot next to an envelope',
};

/** 'German' → 'class-german' (the language buddy picture), else the plain class picture. */
function heroForLanguage(language) {
  const key = `class-${String(language || '').trim().toLowerCase()}`;
  return HEROES[key] ? key : 'class';
}

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function safeHref(href) {
  const u = String(href || '');
  return /^(https:\/\/|mailto:)/i.test(u) ? u : SITE;
}

function buttonCell(b, last) {
  const primary = !b.secondary;
  const bg = primary ? LIME : '#ffffff';
  const border = primary ? LIME : INK;
  const arrow = primary ? '&nbsp;&nbsp;&rarr;' : '';
  return `<td align="center" bgcolor="${bg}" class="${primary ? 'al-btn' : 'al-btn2'}" style="border-radius:999px;background:${bg};border:1.5px solid ${border};mso-padding-alt:16px 30px;">`
    + `<a href="${esc(safeHref(b.href))}" target="_blank" class="${primary ? 'al-btn-a' : 'al-btn2-a'}" style="display:inline-block;padding:16px 30px;font-family:${SANS};font-size:16px;font-weight:700;line-height:1.2;color:${INK};text-decoration:none;border-radius:999px;white-space:nowrap;">${esc(b.label)}${arrow}</a></td>`
    + (last ? '' : '<td width="10" style="width:10px;font-size:0;line-height:0;">&nbsp;</td>');
}

function block(b) {
  if (b.p != null) {
    return `<p class="al-text" style="margin:0 0 18px;font-family:${SANS};font-size:16px;line-height:1.65;color:${TEXT};">${b.p}</p>`;
  }
  if (b.facts) {
    const list = b.facts.filter((f) => f && f[1] != null && String(f[1]).trim() !== '');
    const rows = list.map((f, i) =>
      `<tr><td class="al-fact-l" valign="top" style="padding:15px 0 15px 22px;${i < list.length - 1 ? `border-bottom:1px solid ${LINE};` : ''}font-family:${SANS};font-size:14px;line-height:1.45;color:${MUTED};white-space:nowrap;">${esc(f[0])}</td>`
      + `<td class="al-fact-v" valign="top" align="right" style="padding:15px 22px 15px 16px;${i < list.length - 1 ? `border-bottom:1px solid ${LINE};` : ''}font-family:${SANS};font-size:15px;line-height:1.45;color:${INK};font-weight:700;text-align:right;white-space:pre-wrap;">${esc(f[1])}</td></tr>`).join('');
    return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="al-panel" bgcolor="${BONE}" style="margin:4px 0 24px;background:${BONE};border-radius:16px;border-collapse:separate;">${rows}</table>`;
  }
  if (b.quote != null) {
    const label = b.label ? `<div class="al-muted" style="font-size:13px;line-height:1.4;color:${MUTED};margin:0 0 6px;">${esc(b.label)}</div>` : '';
    return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="al-panel" bgcolor="${BONE}" style="margin:4px 0 24px;background:${BONE};border-radius:16px;border-collapse:separate;"><tr><td style="padding:18px 22px;font-family:${SANS};">${label}<div class="al-text" style="font-size:15px;line-height:1.65;color:${TEXT};white-space:pre-wrap;">${esc(b.quote)}</div></td></tr></table>`;
  }
  if (b.button || b.buttons) {
    const list = b.buttons || [b.button];
    const cells = list.map((x, i) => buttonCell(x, i === list.length - 1)).join('');
    return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 28px;"><tr>${cells}</tr></table>`;
  }
  return '';
}

function htmlToText(html) {
  return String(html)
    .replace(/<a [^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gi, (m, href, label) => `${label.replace(/<[^>]+>/g, '')} (${href.replace(/&amp;/g, '&')})`)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ').replace(/&rarr;/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/[ \t]+\n/g, '\n').trim();
}

function renderText({ heading, blocks = [], note, footer, signoff }) {
  const out = [heading, ''];
  for (const b of blocks) {
    if (b.p != null) out.push(htmlToText(b.p), '');
    else if (b.facts) out.push(b.facts.filter((f) => f && f[1] != null && String(f[1]).trim() !== '').map((f) => `${f[0]}: ${f[1]}`).join('\n'), '');
    else if (b.quote != null) out.push((b.label ? `${b.label}:\n` : '') + String(b.quote), '');
    else if (b.button || b.buttons) out.push((b.buttons || [b.button]).map((x) => `${x.label}: ${safeHref(x.href)}`).join('\n'), '');
  }
  if (note) out.push(htmlToText(note), '');
  if (signoff !== false) out.push('The Alimun team', '');
  out.push('--', `Alimun · ${SITE}`);
  if (footer) out.push(htmlToText(footer));
  return out.join('\n');
}

function renderEmail({ hero = 'default', preheader = '', heading, blocks = [], note = '', footer = '', signoff = true }) {
  const heroKey = HEROES[hero] ? hero : 'default';
  const firstButton = blocks.find((b) => b.button || b.buttons);
  const fallbackHref = firstButton ? safeHref((firstButton.buttons || [firstButton.button])[0].href) : '';
  const fallback = fallbackHref && fallbackHref.startsWith('https://') && fallbackHref.length > 60
    ? `<p class="al-muted" style="margin:0 0 18px;font-family:${SANS};font-size:13px;line-height:1.55;color:${MUTED};">If the button does not work, copy this link into your browser:<br><a href="${esc(fallbackHref)}" class="al-link" style="color:${INK};text-decoration:underline;word-break:break-all;">${esc(fallbackHref)}</a></p>`
    : '';
  const noteHtml = note ? `<p class="al-muted" style="margin:0 0 18px;font-family:${SANS};font-size:13px;line-height:1.55;color:${MUTED};">${note}</p>` : '';
  const signoffHtml = signoff === false ? '' : `
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:10px 0 4px;"><tr>
        <td valign="middle" style="padding:0 12px 0 0;"><img src="${IMG}/mark.png" width="36" height="36" alt="" style="display:block;width:36px;height:36px;border:0;border-radius:50%;"></td>
        <td valign="middle" class="al-h" style="font-family:${DISPLAY};font-size:22px;line-height:1;color:${INK};">The Alimun team</td>
      </tr></table>`;

  const html = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<title>${esc(heading)}</title>
<style>
@font-face { font-family: 'Coolvetica Condensed'; src: url('${SITE}/fonts/coolvetica-condensed-rg.otf') format('opentype'); font-weight: 400; font-style: normal; }
@font-face { font-family: 'Satoshi'; src: url('${SITE}/fonts/Satoshi-Variable.ttf') format('truetype'); font-weight: 300 900; font-style: normal; }
:root { color-scheme: light dark; supported-color-schemes: light dark; }
body { margin: 0 !important; padding: 0 !important; background: ${BONE}; -webkit-text-size-adjust: 100%; }
a { color: ${INK}; }
@media only screen and (max-width: 620px) {
  .al-outer { padding: 14px 10px 28px !important; }
  .al-card { border-radius: 22px !important; }
  .al-body { padding: 28px 22px 22px !important; }
  .al-h1 { font-size: 38px !important; }
  .al-hero { border-radius: 16px !important; }
  .al-fact-l, .al-fact-v { display: block !important; width: auto !important; text-align: left !important; white-space: normal !important; }
  .al-fact-l { padding: 14px 18px 2px !important; border-bottom: 0 !important; }
  .al-fact-v { padding: 0 18px 14px !important; }
}
@media (prefers-color-scheme: dark) {
  body, .al-page { background: #151514 !important; }
  .al-card { background: #1f1f1d !important; }
  .al-h1, .al-h, .al-fact-v, .al-link, .al-foot-strong { color: #f3f2ec !important; }
  .al-text { color: #dcdad3 !important; }
  .al-muted, .al-fact-l, .al-foot { color: #a6a59d !important; }
  .al-panel { background: #2a2a27 !important; }
  .al-fact-l, .al-fact-v { border-color: #3a3a36 !important; }
  .al-btn2 { background: #1f1f1d !important; border-color: #f3f2ec !important; }
  .al-btn2-a { color: #f3f2ec !important; }
}
[data-ogsc] .al-h1, [data-ogsc] .al-h, [data-ogsc] .al-fact-v, [data-ogsc] .al-link { color: #f3f2ec !important; }
[data-ogsc] .al-text { color: #dcdad3 !important; }
[data-ogsc] .al-muted, [data-ogsc] .al-fact-l, [data-ogsc] .al-foot { color: #a6a59d !important; }
[data-ogsb] .al-card { background: #1f1f1d !important; }
[data-ogsb] .al-panel { background: #2a2a27 !important; }
</style>
<!--[if mso]><style>.al-h1, .al-h { font-family: Arial, sans-serif !important; } td, p, a, div { font-family: Arial, sans-serif !important; }</style><![endif]-->
</head>
<body class="al-page" style="margin:0;padding:0;background:${BONE};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;font-size:1px;line-height:1px;color:${BONE};">${esc(preheader)}${'&#847;&zwnj;&nbsp;'.repeat(40)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${BONE}" class="al-page" style="background:${BONE};">
<tr><td align="center" class="al-outer" style="padding:36px 16px 44px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:580px;">
    <tr><td class="al-card" bgcolor="#ffffff" style="background:#ffffff;border-radius:28px;padding:10px;">
      <a href="${SITE}" target="_blank" style="text-decoration:none;display:block;"><img class="al-hero" src="${IMG}/hero-${heroKey}.png" width="560" alt="${esc(HEROES[heroKey])}" style="display:block;width:100%;max-width:560px;height:auto;border:0;border-radius:20px;outline:none;font-family:${SANS};font-size:16px;color:${FOREST};background:${BONE};"></a>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td class="al-body" style="padding:34px 36px 26px;">
        <h1 class="al-h1" style="margin:0 0 20px;font-family:${DISPLAY};font-size:46px;line-height:1;font-weight:400;letter-spacing:-0.005em;color:${INK};">${esc(heading)}</h1>
        ${blocks.map(block).join('\n        ')}
        ${fallback}
        ${noteHtml}
        ${signoffHtml}
      </td></tr></table>
    </td></tr>
    <tr><td class="al-foot" style="padding:26px 22px 0;font-family:${SANS};font-size:12px;line-height:1.7;color:${MUTED};">
      <a href="${SITE}/signin.html" target="_blank" class="al-foot-strong" style="color:${INK};text-decoration:none;font-weight:700;">Your dashboard</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="${SITE}/contact" target="_blank" class="al-foot-strong" style="color:${INK};text-decoration:none;font-weight:700;">Contact</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="${SITE}" target="_blank" class="al-foot" style="color:${MUTED};text-decoration:none;">alimun.com</a>${footer ? `<br>${footer}` : ''}
    </td></tr>
  </table>
</td></tr>
</table>
</body>
</html>`;
  return { html, text: renderText({ heading, blocks, note, footer, signoff }) };
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

module.exports = { renderEmail, sendEmail, esc, heroForLanguage, HEROES, SITE };
