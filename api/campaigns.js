/**
 * ============================================================
 *  ALIMUN — /api/campaigns (docs/GROWTH_PLAN.md step 4b)
 *  Vercel Serverless Function (Node.js runtime)
 *
 *    ?action=audience (POST, admin)  { filter }            → { count, people: first 30 }
 *    ?action=test     (POST, admin)  { message }           → sends the email to the admin's own address only
 *    ?action=send     (POST, admin)  { message, filter, channels, confirm: <count> }
 *         → creates the campaign, writes in-app notifications and/or emails everyone in the audience
 *    ?action=click    (GET, public)  ?c=&u=&s=             → records the click, then redirects to the campaign's button link
 *
 *  The audience is public.campaign_audience(filter): only people whose latest choice is news-and-offers "yes", which
 *  the database allows only with the 16+ check (owner, 6 Nov 2026: no marketing under 16). Every email carries the
 *  person's own unsubscribe link and List-Unsubscribe headers. Admin = app_metadata.role, checked on the server.
 *
 *  Automation (owner, 7 Nov 2026): audience, test and send also accept the campaign key the owner set in Vercel
 *  (CAMPAIGN_AGENT_KEY, sent as Authorization: Bearer <key>). With the key, a test goes to every admin account and
 *  nowhere else, and at most AGENT_SENDS_PER_DAY campaigns go out per day; each is saved with sent_via 'agent'.
 *  The owner approves each campaign by replying "go" to the test (docs/GROWTH_PLAN.md, "Campaigns on request").
 *  Remove the variable in Vercel to switch the key off.
 *
 *  Translations: { messages: { en: {...}, fr: {...}, ... } } instead of { message }. Each person gets the version in
 *  their dashboard language (ma falls back to fr), else English, which is required.
 *  Newsletter: { include_newsletter: true } adds footer sign-ups who agreed to news and offers (email_signups
 *  .offers_consent, not unsubscribed, and not an account holder, whose own choice counts). Only with no filter
 *  other than ui_lang, since sign-ups have no role, level, country or plan.
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');
const crypto = require('crypto');
const mail = require('./_lib/email.js');
const L = require('./_lib/email-i18n.js');

const SITE = 'https://alimun.com';
const MAX_RECIPIENTS = 5000;
const AGENT_SENDS_PER_DAY = 3;
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
/** The owner's campaign key (Vercel env CAMPAIGN_AGENT_KEY): compared in constant time, never logged. */
function agentKeyOk(req) {
  const want = process.env.CAMPAIGN_AGENT_KEY || '';
  const h = req.headers.authorization || '';
  if (want.length < 32 || !h.startsWith('Bearer ')) return false;
  const a = crypto.createHash('sha256').update(h.slice(7)).digest(), b = crypto.createHash('sha256').update(want).digest();
  return crypto.timingSafeEqual(a, b);
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
/** One message, or translated versions keyed by dashboard language (English required). */
function cleanMessages(b) {
  if (b.messages && typeof b.messages === 'object') {
    const msgs = {};
    for (const lang of Object.keys(b.messages)) {
      if (!L.LANGS.includes(lang)) return { error: `Unknown language: ${String(lang).slice(0, 8)}` };
      const { msg, error } = cleanMessage(b.messages[lang]);
      if (error) return { error: `${lang}: ${error}` };
      msgs[lang] = msg;
    }
    if (!msgs.en) return { error: 'The English version is required.' };
    const links = new Set(Object.values(msgs).map((m) => m.button_link || ''));
    if (links.size > 1) return { error: 'Every language version needs the same button link.' };
    return { msgs, base: msgs.en };
  }
  const { msg, error } = cleanMessage(b.message);
  return error ? { error } : { msgs: { en: msg }, base: msg };
}
function pick(msgs, lang) { return msgs[lang] || (lang === 'ma' && msgs.fr) || msgs.en; }
const USER_ONLY_FILTERS = ['role', 'language', 'level', 'countries', 'plan', 'active_within_days', 'inactive_for_days'];

async function allUserEmails(supabase) {
  const out = new Set();
  for (let page = 1; page <= 50; page++) {
    const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 1000 });
    if (error) throw error;
    for (const u of data.users || []) if (u.email) out.add(u.email.toLowerCase());
    if (!data.users || data.users.length < 1000) break;
  }
  return out;
}
/** Footer sign-ups who agreed to news and offers, have not unsubscribed and have no account. */
async function newsletterAudience(supabase, filter) {
  if (USER_ONLY_FILTERS.some((k) => k in filter)) return [];
  const { data, error } = await supabase.from('email_signups').select('id, email, locale')
    .eq('offers_consent', true).is('unsubscribed_at', null).limit(MAX_RECIPIENTS + 1);
  if (error) throw error;
  const users = await allUserEmails(supabase);
  return (data || []).filter((r) => !users.has(r.email.toLowerCase()))
    .map((r) => ({ id: r.id, email: r.email, lang: L.LANGS.includes(r.locale) ? r.locale : 'en' }))
    .filter((r) => !filter.ui_lang || r.lang === filter.ui_lang);
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
  const b = body(req);
  const filter = cleanFilter(b.filter);
  const { data, error } = await supabase.rpc('campaign_audience', { p_filter: filter });
  if (error) { console.error('[campaigns] audience', error.message); return res.status(500).json({ error: 'The audience could not be counted' }); }
  let newsletter = [];
  if (b.include_newsletter) {
    try { newsletter = await newsletterAudience(supabase, filter); } catch (e) { console.error('[campaigns] newsletter', e.message); return res.status(500).json({ error: 'The newsletter list could not be read' }); }
  }
  const byLang = {};
  for (const p of data) { const l = p.ui_lang || 'en'; byLang[l] = (byLang[l] || 0) + 1; }
  for (const n of newsletter) byLang[n.lang] = (byLang[n.lang] || 0) + 1;
  return res.status(200).json({ count: data.length + newsletter.length, users: data.length, newsletter: newsletter.length, by_language: byLang, people: data.slice(0, 30).map((p) => ({ name: p.name, email: p.email, role: p.role, country: p.country, language: p.language, level: p.level, ui_lang: p.ui_lang })) });
}

async function handleTest(req, res, users, viaAgent) {
  const b = body(req);
  const { msgs, error } = cleanMessages(b);
  if (error) return res.status(400).json({ error });
  const wanted = cleanFilter(b.filter).ui_lang;
  // From the dashboard: the version for the chosen language. With the key: every version, so the owner sees them all.
  const langs = viaAgent ? Object.keys(msgs) : [wanted && msgs[wanted] ? wanted : (wanted === 'ma' && msgs.fr ? 'fr' : 'en')];
  const footer = viaAgent ? 'This is a test sent only to Alimun admins. Nothing goes to customers until you approve it.'
    : 'This is a test sent only to you from the Campaigns page.';
  const sent = [];
  for (const user of users) {
    for (const lang of langs) {
      const msg = pick(msgs, lang);
      const { html, text } = render(msg, { name: user.user_metadata?.full_name || '', footer, lang });
      const tag = langs.length > 1 ? `[Test ${lang.toUpperCase()}]` : '[Test]';
      const ok = await mail.sendEmail({ to: user.email, subject: `${tag} ${msg.subject}`, html, text, from: fromAddress() });
      if (!ok) return res.status(502).json({ error: 'The test email could not be sent', sent });
      sent.push(`${user.email} (${lang})`);
    }
  }
  return res.status(200).json({ sent: users.length === 1 && langs.length === 1 ? users[0].email : sent });
}

async function handleSend(req, res, supabase, user, viaAgent) {
  const b = body(req);
  const { msgs, base: msg, error } = cleanMessages(b);
  if (error) return res.status(400).json({ error });
  if (viaAgent) {
    const since = new Date(Date.now() - 24 * 3600 * 1000).toISOString();
    const { count } = await supabase.from('campaigns').select('id', { count: 'exact', head: true }).eq('sent_via', 'agent').gte('created_at', since);
    if ((count || 0) >= AGENT_SENDS_PER_DAY) return res.status(429).json({ error: `At most ${AGENT_SENDS_PER_DAY} campaigns a day with the campaign key.` });
  }
  const channels = (Array.isArray(b.channels) ? b.channels : []).filter((c) => c === 'email' || c === 'inapp');
  if (!channels.length) return res.status(400).json({ error: 'Choose email, the bell in the dashboard, or both.' });
  const filter = cleanFilter(b.filter);
  const { data: people, error: aErr } = await supabase.rpc('campaign_audience', { p_filter: filter });
  if (aErr) return res.status(500).json({ error: 'The audience could not be read' });
  let newsletter = [];
  if (b.include_newsletter && channels.includes('email')) {
    try { newsletter = await newsletterAudience(supabase, filter); } catch (e) { return res.status(500).json({ error: 'The newsletter list could not be read' }); }
  }
  const total = people.length + newsletter.length;
  if (!total) return res.status(400).json({ error: 'Nobody in this audience has asked for news and offers.' });
  if (total > MAX_RECIPIENTS) return res.status(400).json({ error: `At most ${MAX_RECIPIENTS} people per campaign; narrow the audience.` });
  // The admin confirmed this exact number: if the audience changed in between, ask again.
  if (Number(b.confirm) !== total) return res.status(409).json({ error: 'The audience changed. Check the count and confirm again.', count: total });

  const { data: camp, error: cErr } = await supabase.from('campaigns').insert({
    created_by: user ? user.id : null, subject: msg.subject, heading: msg.heading, body: msg.body, button_label: msg.button_label, button_link: msg.button_link,
    hero: msg.hero, channels, audience: { ...filter, ...(newsletter.length ? { include_newsletter: true } : {}) }, recipients: total,
    sent_via: viaAgent ? 'agent' : 'dashboard', messages: Object.keys(msgs).length > 1 ? msgs : null,
  }).select('id').single();
  if (cErr) { console.error('[campaigns] create', cErr.message); return res.status(500).json({ error: 'The campaign could not be saved' }); }

  if (people.length) await supabase.from('campaign_recipients').insert(people.map((p) => ({ campaign_id: camp.id, user_id: p.user_id })));

  if (channels.includes('inapp')) {
    const rows = people.map((p) => { const m = pick(msgs, p.ui_lang || 'en'); return { user_id: p.user_id, kind: 'offer', title: m.heading, body: m.body.replace(/\s+/g, ' ').slice(0, 300),
      link: m.button_link ? clickUrl(camp.id, p.user_id) : null, campaign_id: camp.id }; });
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
        const m = pick(msgs, p.ui_lang || 'en');
        const { html, text } = render(m, { name: p.name || '', unsubscribeUrl: unsub, buttonHref: m.button_link ? clickUrl(camp.id, p.user_id) : null, lang: p.ui_lang || 'en' });
        return { from: fromAddress(), to: p.email, subject: m.subject, html, text,
          headers: unsub ? { 'List-Unsubscribe': `<${unsub}>`, 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' } : undefined };
      });
      const ok = await resendBatch(items);
      const sentIds = chunk.filter((_, k) => ok[k]).map((p) => p.user_id);
      emailed += sentIds.length;
      if (sentIds.length) await supabase.from('campaign_recipients').update({ emailed: true }).eq('campaign_id', camp.id).in('user_id', sentIds);
    }
  }
  let newsletterEmailed = 0;
  for (let i = 0; i < newsletter.length; i += 100) {
    const chunk = newsletter.slice(i, i + 100);
    const items = chunk.map((n) => {
      const unsub = mail.newsletterUnsubscribeUrl(n.id);
      const m = pick(msgs, n.lang);
      const { html, text } = render(m, { name: '', unsubscribeUrl: unsub, lang: n.lang,
        footer: L.say(n.lang, 'common.footer_newsletter') });
      return { from: fromAddress(), to: n.email, subject: m.subject, html, text,
        headers: unsub ? { 'List-Unsubscribe': `<${unsub}>`, 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' } : undefined };
    });
    const ok = await resendBatch(items);
    newsletterEmailed += ok.filter(Boolean).length;
  }
  emailed += newsletterEmailed;
  await supabase.from('campaigns').update({ emailed, newsletter_emailed: newsletterEmailed, sent_at: new Date().toISOString() }).eq('id', camp.id);
  console.log(`[campaigns] ${viaAgent ? 'campaign key' : 'admin ' + user.id} sent campaign ${camp.id} to ${total} (${channels.join('+')}, emailed ${emailed}, newsletter ${newsletterEmailed})`);
  return res.status(200).json({ id: camp.id, recipients: total, users: people.length, newsletter: newsletter.length, emailed, inapp: channels.includes('inapp') });
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
  if (agentKeyOk(req)) {
    if (action === 'audience') return handleAudience(req, res, supabase);
    if (action === 'test') {
      const admins = await adminAccounts(supabase);
      if (!admins.length) return res.status(404).json({ error: 'No admin account found' });
      return handleTest(req, res, admins, true);
    }
    if (action === 'send') return handleSend(req, res, supabase, null, true);
    return res.status(400).json({ error: 'Unknown action' });
  }
  const user = await adminUser(req, supabase);
  if (!user) return res.status(403).json({ error: 'Admins only' });
  if (action === 'audience') return handleAudience(req, res, supabase);
  if (action === 'test') return handleTest(req, res, [user], false);
  if (action === 'send') return handleSend(req, res, supabase, user, false);
  return res.status(400).json({ error: 'Unknown action' });
};
