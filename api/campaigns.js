/**
 * ============================================================
 *  ALIMUN — /api/campaigns (docs/GROWTH_PLAN.md step 4b)
 *  Vercel Serverless Function (Node.js runtime)
 *
 *    ?action=audience (POST, admin)  { filter }            → { count, people: first 30 }
 *    ?action=test     (POST, admin)  { message }           → sends the email to the admin's own address only
 *         The test action also accepts an operations key (Authorization: Bearer <key>) whose SHA-256 is stored in
 *         app_settings 'agent_test_key_sha256'. With it the test goes to every admin account and nowhere else; it
 *         cannot send a campaign, read an audience or email anyone else. Delete the setting to switch it off.
 *    ?action=send     (POST, admin)  { message, filter, channels, confirm: <count> }
 *         → creates the campaign, writes in-app notifications and/or emails everyone in the audience
 *    ?action=click    (GET, public)  ?c=&u=&s=             → records the click, then redirects to the campaign's button link
 *
 *  The audience is public.campaign_audience(filter): only people whose latest choice is news-and-offers "yes", which
 *  the database allows only with the 16+ check (owner, 6 Nov 2026: no marketing under 16). Every email carries the
 *  person's own unsubscribe link and List-Unsubscribe headers. Admin = app_metadata.role, checked on the server.
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');
const crypto = require('crypto');
const mail = require('./_lib/email.js');
const L = require('./_lib/email-i18n.js');

const SITE = 'https://alimun.com';
const MAX_RECIPIENTS = 5000;
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const LANGS = ['English', 'German', 'Spanish', 'French', 'Portuguese', 'Italian', 'Mandarin', 'Japanese', 'Arabic'];
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

function admin() {
  const url = process.env.SUPABASE_URL, key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}
async function adminUser(req, supabase) {
  const h = req.headers.authorization || '';
  if (!h.startsWith('Bearer ')) return null;
  const { data, error } = await supabase.auth.getUser(h.slice(7));
  if (error || !data?.user || data.user.app_metadata?.role !== 'admin') return null;
  return data.user;
}
/** Operations key for test sends only: compared with the stored SHA-256, never stored itself. */
async function opsKeyOk(req, supabase) {
  const h = req.headers.authorization || '';
  if (!h.startsWith('Bearer ') || h.length < 50 || h.length > 200 || h.split('.').length === 3) return false;
  const { data } = await supabase.from('app_settings').select('value').eq('key', 'agent_test_key_sha256').maybeSingle();
  const want = (data && data.value) || '';
  if (!/^[0-9a-f]{64}$/.test(want)) return false;
  const got = crypto.createHash('sha256').update(h.slice(7)).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(got), Buffer.from(want));
}
async function adminAccounts(supabase) {
  const out = [];
  for (let page = 1; page <= 20; page++) {
    const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 200 });
    if (error || !data?.users?.length) break;
    for (const u of data.users) if (u.app_metadata?.role === 'admin' && u.email) out.push(u);
    if (data.users.length < 200) break;
  }
  return out;
}
function body(req) {
  let b = req.body || {};
  if (typeof b === 'string') { try { b = JSON.parse(b || '{}'); } catch { b = {}; } }
  return b;
}

/** Only known filter keys and values reach the database. */
function cleanFilter(f) {
  f = f || {};
  const out = {};
  if (['student', 'teacher'].includes(f.role)) out.role = f.role;
  if (LANGS.includes(f.language)) out.language = f.language;
  if (LEVELS.includes(f.level)) out.level = f.level;
  if (L.LANGS.includes(f.ui_lang)) out.ui_lang = f.ui_lang;
  if (Array.isArray(f.countries)) { const c = f.countries.filter((x) => /^[A-Z]{2}$/.test(x)).slice(0, 50); if (c.length) out.countries = c; }
  if (['free', 'paying'].includes(f.plan)) out.plan = f.plan;
  const n = (v) => { const x = parseInt(v, 10); return x >= 1 && x <= 400 ? x : null; };
  if (n(f.active_within_days)) out.active_within_days = n(f.active_within_days);
  if (n(f.inactive_for_days)) out.inactive_for_days = n(f.inactive_for_days);
  return out;
}
/** The message, checked: plain text from the admin (escaped when drawn), the button only to alimun.com. */
function cleanMessage(m) {
  m = m || {};
  const t = (v, n) => String(v || '').replace(/\r/g, '').trim().slice(0, n);
  const msg = { subject: t(m.subject, 200).replace(/\n/g, ' '), heading: t(m.heading, 140).replace(/\n/g, ' '), body: t(m.body, 5000),
    button_label: t(m.button_label, 60).replace(/\n/g, ' ') || null, button_link: t(m.button_link, 500) || null,
    hero: mail.HEROES[m.hero] ? m.hero : 'default' };
  if (!msg.subject || !msg.heading || !msg.body) return { error: 'Write a subject, a heading and the text.' };
  if (msg.button_link && !/^https:\/\/alimun\.com\//.test(msg.button_link)) return { error: 'The button can only link to a page on https://alimun.com/.' };
  if (!!msg.button_label !== !!msg.button_link) return { error: 'A button needs both a label and a link (or neither).' };
  return { msg };
}
function clickUrl(campaignId, userId) {
  const s = mail.linkSig(`${campaignId}:${userId}`);
  return `${SITE}/api/campaigns?action=click&c=${campaignId}&u=${userId}&s=${s}`;
}
function render(msg, opts) {
  const paras = msg.body.split(/\n{2,}/).map((x) => x.trim()).filter(Boolean).map((x) => ({ p: mail.esc(x).replace(/\n/g, '<br>') }));
  const blocks = [];
  const tx = L.t(opts.lang);
  if (opts.name) blocks.push({ p: mail.esc(L.fill(tx.hello_name, { name: opts.name.split(/\s+/)[0] })) });
  blocks.push(...paras);
  if (msg.button_link) blocks.push({ button: { label: msg.button_label, href: opts.buttonHref || msg.button_link } });
  return mail.renderEmail({
    hero: msg.hero, preheader: msg.body.replace(/\s+/g, ' ').slice(0, 120), heading: msg.heading, blocks,
    unsubscribeUrl: opts.unsubscribeUrl || '', footer: opts.footer || '', lang: opts.lang || 'en',
  });
}
function fromAddress() { return process.env.EMAIL_MARKETING_FROM || 'Alimun <news@alimun.com>'; }

async function resendBatch(items) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return items.map(() => false);
  const r = await fetch('https://api.resend.com/emails/batch', {
    method: 'POST', headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' }, body: JSON.stringify(items),
  });
  if (!r.ok) { console.error('[campaigns] Resend batch refused:', r.status, (await r.text().catch(() => '')).slice(0, 300)); return items.map(() => false); }
  return items.map(() => true);
}

async function handleAudience(req, res, supabase) {
  const filter = cleanFilter(body(req).filter);
  const { data, error } = await supabase.rpc('campaign_audience', { p_filter: filter });
  if (error) { console.error('[campaigns] audience', error.message); return res.status(500).json({ error: 'The audience could not be counted' }); }
  return res.status(200).json({ count: data.length, people: data.slice(0, 30).map((p) => ({ name: p.name, email: p.email, role: p.role, country: p.country, language: p.language, level: p.level, ui_lang: p.ui_lang })) });
}

async function handleTest(req, res, user) {
  const b = body(req);
  const { msg, error } = cleanMessage(b.message);
  if (error) return res.status(400).json({ error });
  const lang = cleanFilter(b.filter).ui_lang || 'en';
  const { html, text } = render(msg, { name: user.user_metadata?.full_name || '', footer: 'This is a test sent only to you from the Campaigns page.', lang });
  const ok = await mail.sendEmail({ to: user.email, subject: `[Test] ${msg.subject}`, html, text, from: fromAddress() });
  return ok ? res.status(200).json({ sent: user.email }) : res.status(502).json({ error: 'The test email could not be sent' });
}

async function handleSend(req, res, supabase, user) {
  const b = body(req);
  const { msg, error } = cleanMessage(b.message);
  if (error) return res.status(400).json({ error });
  const channels = (Array.isArray(b.channels) ? b.channels : []).filter((c) => c === 'email' || c === 'inapp');
  if (!channels.length) return res.status(400).json({ error: 'Choose email, the bell in the dashboard, or both.' });
  const filter = cleanFilter(b.filter);
  const { data: people, error: aErr } = await supabase.rpc('campaign_audience', { p_filter: filter });
  if (aErr) return res.status(500).json({ error: 'The audience could not be read' });
  if (!people.length) return res.status(400).json({ error: 'Nobody in this audience has asked for news and offers.' });
  if (people.length > MAX_RECIPIENTS) return res.status(400).json({ error: `At most ${MAX_RECIPIENTS} people per campaign; narrow the audience.` });
  // The admin confirmed this exact number: if the audience changed in between, ask again.
  if (Number(b.confirm) !== people.length) return res.status(409).json({ error: 'The audience changed. Check the count and confirm again.', count: people.length });

  const { data: camp, error: cErr } = await supabase.from('campaigns').insert({
    created_by: user.id, subject: msg.subject, heading: msg.heading, body: msg.body, button_label: msg.button_label, button_link: msg.button_link,
    hero: msg.hero, channels, audience: filter, recipients: people.length,
  }).select('id').single();
  if (cErr) { console.error('[campaigns] create', cErr.message); return res.status(500).json({ error: 'The campaign could not be saved' }); }

  await supabase.from('campaign_recipients').insert(people.map((p) => ({ campaign_id: camp.id, user_id: p.user_id })));

  if (channels.includes('inapp')) {
    const rows = people.map((p) => ({ user_id: p.user_id, kind: 'offer', title: msg.heading, body: msg.body.replace(/\s+/g, ' ').slice(0, 300),
      link: msg.button_link ? clickUrl(camp.id, p.user_id) : null, campaign_id: camp.id }));
    for (let i = 0; i < rows.length; i += 500) {
      const { error: nErr } = await supabase.from('notifications').insert(rows.slice(i, i + 500));
      if (nErr) console.error('[campaigns] notifications', nErr.message);
    }
  }

  let emailed = 0;
  if (channels.includes('email')) {
    for (let i = 0; i < people.length; i += 100) {
      const chunk = people.slice(i, i + 100);
      const items = chunk.map((p) => {
        const unsub = mail.unsubscribeUrl(p.user_id);
        const { html, text } = render(msg, { name: p.name || '', unsubscribeUrl: unsub, buttonHref: msg.button_link ? clickUrl(camp.id, p.user_id) : null, lang: p.ui_lang || 'en' });
        return { from: fromAddress(), to: p.email, subject: msg.subject, html, text,
          headers: unsub ? { 'List-Unsubscribe': `<${unsub}>`, 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' } : undefined };
      });
      const ok = await resendBatch(items);
      const sentIds = chunk.filter((_, k) => ok[k]).map((p) => p.user_id);
      emailed += sentIds.length;
      if (sentIds.length) await supabase.from('campaign_recipients').update({ emailed: true }).eq('campaign_id', camp.id).in('user_id', sentIds);
    }
  }
  await supabase.from('campaigns').update({ emailed, sent_at: new Date().toISOString() }).eq('id', camp.id);
  console.log(`[campaigns] admin ${user.id} sent campaign ${camp.id} to ${people.length} (${channels.join('+')}, emailed ${emailed})`);
  return res.status(200).json({ id: camp.id, recipients: people.length, emailed, inapp: channels.includes('inapp') });
}

async function handleClick(req, res, supabase) {
  const c = String(req.query.c || ''), u = String(req.query.u || ''), s = String(req.query.s || '');
  if (!UUID_RE.test(c) || !UUID_RE.test(u) || !mail.checkLinkSig(`${c}:${u}`, s)) { res.setHeader('Location', SITE + '/'); return res.status(302).end(); }
  const { data: camp } = await supabase.from('campaigns').select('button_link').eq('id', c).maybeSingle();
  await supabase.from('campaign_recipients').update({ clicked_at: new Date().toISOString() }).eq('campaign_id', c).eq('user_id', u).is('clicked_at', null);
  const to = camp && /^https:\/\/alimun\.com\//.test(camp.button_link || '') ? camp.button_link : SITE + '/';
  res.setHeader('Location', to);
  res.setHeader('Cache-Control', 'no-store');
  return res.status(302).end();
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const action = (req.query && req.query.action) || '';
  const supabase = admin();
  if (!supabase) return res.status(500).json({ error: 'Server configuration error' });
  if (action === 'click') return handleClick(req, res, supabase);
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'Method not allowed' }); }
  if (action === 'test' && await opsKeyOk(req, supabase)) {
    const admins = await adminAccounts(supabase);
    if (!admins.length) return res.status(404).json({ error: 'No admin account found' });
    const sent = [];
    for (const a of admins) {
      const r = { statusCode: 0, body: null, status(c) { this.statusCode = c; return this; }, json(b) { this.body = b; return this; } };
      await handleTest(req, r, a);
      if (r.statusCode !== 200) return res.status(r.statusCode).json(r.body);
      sent.push(a.email);
    }
    return res.status(200).json({ sent });
  }
  const user = await adminUser(req, supabase);
  if (!user) return res.status(403).json({ error: 'Admins only' });
  if (action === 'audience') return handleAudience(req, res, supabase);
  if (action === 'test') return handleTest(req, res, user);
  if (action === 'send') return handleSend(req, res, supabase, user);
  return res.status(400).json({ error: 'Unknown action' });
};
