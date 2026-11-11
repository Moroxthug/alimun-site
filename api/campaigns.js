/**
 * ============================================================
 *  ALIMUN — /api/campaigns (docs/GROWTH_PLAN.md step 4b)
 *  Vercel Serverless Function (Node.js runtime)
 *
 *    ?action=audience (POST, admin)  { filter }            → { count, people: first 30 }
 *    ?action=test     (POST, admin)  { message }           → sends the email to the admin's own address only
 *    ?action=preview  (POST, admin)  { message, lang }     → { html }: the email as it will look, for the admin page
 *    ?action=send     (POST, admin)  { message, filter, channels, confirm: <count> }
 *         → creates the campaign, writes in-app notifications and/or emails everyone in the audience
 *    ?action=click    (GET, public)  ?c=&u=&s=             → records the click, then redirects to the campaign's button link
 *
 *  Banners (owner, 8 Nov 2026), table public.banners, drawn by js/banner.js:
 *    ?action=banner          (GET, public)  ?place=site|dashboard&lang=&preview=<id>.<sig> → { banner } or { banner: null }
 *    ?action=banner_click    (GET, public)  ?b=<id>                → counts the click, redirects to the banner's link
 *    ?action=banner_save     (POST, admin or key) { id?, template, placement, messages, link, hero, starts_at, ends_at }
 *         → saves a draft (switched off) and returns preview links; an active banner cannot be edited, stop it first
 *    ?action=banner_activate (POST, admin or key) { id }  → switches it on      ?action=banner_stop { id } → off
 *    ?action=banner_list     (POST, admin or key)         → the latest 30 banners with clicks
 *
 *  The audience is public.campaign_audience(filter): only people whose latest choice is news-and-offers "yes", which
 *  the database allows only with the 16+ check (owner, 6 Nov 2026: no marketing under 16). Every email carries the
 *  person's own unsubscribe link and List-Unsubscribe headers. Admin = app_metadata.role, checked on the server.
 *
 *  Automation (owner, 7 Nov 2026): audience, test and send also accept the campaign key the owner set in Vercel
 *  (CAMPAIGN_AGENT_KEY, sent as Authorization: Bearer <key>). With the key, a test goes to every admin account and
 *  nowhere else (or to the owner's test inbox, app_settings 'campaign_test_to'), and at most AGENT_SENDS_PER_DAY campaigns go out per day; each is saved with sent_via 'agent'.
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
const TEMPLATES = ['announcement', 'offer', 'newsletter', 'event'];
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
  if (f.welcome_poll === true) out.welcome_poll = true;
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
  // Layouts (owner, 8 Nov 2026: "create various templates"): announcement (text and a button), offer (the lime
  // offer card with price and code), newsletter (two to four short pieces with pictures), event (when and where).
  msg.template = TEMPLATES.includes(m.template) ? m.template : 'announcement';
  const link = (v) => { const x = t(v, 500); return /^https:\/\/alimun\.com\//.test(x) ? x : null; };
  if (msg.template === 'offer') {
    const o = m.offer || {};
    msg.offer = { headline: t(o.headline, 60).replace(/\n/g, ' '), now: t(o.now, 60) || null, was: t(o.was, 60) || null,
      code: t(o.code, 30).toUpperCase() || null, ends: t(o.ends, 160) || null };
    if (!msg.offer.headline) return { error: 'An offer needs a headline, for example "Half price".' };
    if (msg.offer.code && !/^[A-Z0-9_-]{3,30}$/.test(msg.offer.code)) return { error: 'The code can only have letters, numbers, - and _.' };
  }
  if (msg.template === 'newsletter') {
    const list = (Array.isArray(m.stories) ? m.stories : []).slice(0, 4).map((x) => ({ title: t(x && x.title, 100).replace(/\n/g, ' '),
      text: t(x && x.text, 600), link: link(x && x.link), link_label: t(x && x.link_label, 40).replace(/\n/g, ' ') || null,
      hero: mail.HEROES[x && x.hero] ? x.hero : null }));
    if (!list.length || list.some((x) => !x.title || !x.text)) return { error: 'A newsletter needs one to four pieces, each with a title and text.' };
    if (list.some((x) => !!x.link !== !!x.link_label)) return { error: 'A piece with a link needs a link label too (links only to https://alimun.com/).' };
    msg.stories = list;
  }
  if (msg.template === 'event') {
    const facts = (Array.isArray(m.facts) ? m.facts : []).slice(0, 5).map((f) => [t(f && f[0], 40).replace(/\n/g, ' '), t(f && f[1], 120).replace(/\n/g, ' ')]).filter((f) => f[0] && f[1]);
    if (!facts.length) return { error: 'An event needs at least one detail, for example ["When", "Thursday 12 November, 18:00"].' };
    msg.facts = facts;
  }
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
const USER_ONLY_FILTERS = ['role', 'language', 'level', 'countries', 'plan', 'active_within_days', 'inactive_for_days', 'welcome_poll'];

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
  if (msg.template === 'offer' && msg.offer) blocks.push({ offer: { ...msg.offer, codeLabel: tx.code_label, codeHint: tx.code_hint } });
  if (msg.template === 'event' && msg.facts) blocks.push({ facts: msg.facts });
  if (msg.template === 'newsletter' && msg.stories) blocks.push({ stories: msg.stories.map((x) => ({ title: x.title, text: x.text, href: x.link, linkLabel: x.link_label, hero: x.hero })) });
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

/** The email as it will look (admin page preview): { message } or { messages } and an optional lang. */
function handlePreview(req, res, user) {
  const b = body(req);
  const { msgs, error } = cleanMessages(b);
  if (error) return res.status(400).json({ error });
  const lang = L.LANGS.includes(b.lang) ? b.lang : 'en';
  const { html } = render(pick(msgs, lang), { name: (user && user.user_metadata?.full_name) || 'Sara', lang,
    unsubscribeUrl: `${SITE}/api/auth?action=unsubscribe&preview=1` });
  return res.status(200).json({ html });
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
    sent_via: viaAgent ? 'agent' : 'dashboard', messages: msgs,
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


/* ---------- Banners ---------- */
const BANNER_TEMPLATES = ['strip', 'card', 'panel'];
const PLACES = ['site', 'dashboard', 'both'];
function bannerSig(id) { return mail.linkSig(`banner:${id}`); }
function cleanBanner(b) {
  const t = (v, n) => String(v || '').replace(/\r/g, '').replace(/\n/g, ' ').trim().slice(0, n);
  const template = BANNER_TEMPLATES.includes(b.template) ? b.template : null;
  const placement = PLACES.includes(b.placement) ? b.placement : null;
  if (!template) return { error: 'Choose a layout: strip, card or panel.' };
  if (!placement) return { error: 'Choose where it shows: site, dashboard or both.' };
  const link = t(b.link, 500) || null;
  if (link && !/^https:\/\/alimun\.com\//.test(link)) return { error: 'The link can only go to a page on https://alimun.com/.' };
  const raw = b.messages && typeof b.messages === 'object' ? b.messages : {};
  const messages = {};
  for (const lang of Object.keys(raw)) {
    if (!L.LANGS.includes(lang)) return { error: `Unknown language: ${String(lang).slice(0, 8)}` };
    const m = raw[lang] || {};
    const x = { heading: t(m.heading, 80), text: t(m.text, template === 'strip' ? 160 : 280), button_label: t(m.button_label, 30) };
    if (!x.text) return { error: `${lang}: the text is required.` };
    if (template !== 'strip' && !x.heading) return { error: `${lang}: a card or panel needs a heading.` };
    if (link && !x.button_label) return { error: `${lang}: a banner with a link needs a button label.` };
    messages[lang] = x;
  }
  if (!messages.en) return { error: 'The English version is required.' };
  const when = (v) => { if (!v) return null; const d = new Date(v); return isNaN(d) ? undefined : d.toISOString(); };
  const starts_at = when(b.starts_at) || new Date().toISOString(), ends_at = when(b.ends_at);
  if (starts_at === undefined || ends_at === undefined) return { error: 'Dates must be ISO dates, for example 2026-11-08T23:59:00+01:00.' };
  if (ends_at && ends_at <= starts_at) return { error: 'The end must come after the start.' };
  return { row: { template, placement, messages, link, hero: mail.HEROES[b.hero] ? b.hero : null, starts_at, ends_at } };
}
function previewLinks(id) {
  const q = `alimun_banner=${id}.${bannerSig(id)}`;
  return { site: `${SITE}/?${q}`, dashboard: `${SITE}/app/?${q}` };
}
async function handleBanner(req, res, supabase) {
  const q = req.query || {};
  const place = q.place === 'dashboard' ? 'dashboard' : 'site';
  const lang = L.LANGS.includes(q.lang) ? q.lang : 'en';
  let row = null;
  const pv = String(q.preview || '').split('.');
  if (pv.length === 2 && UUID_RE.test(pv[0]) && mail.checkLinkSig(`banner:${pv[0]}`, pv[1])) {
    res.setHeader('Cache-Control', 'no-store');
    ({ data: row } = await supabase.from('banners').select('*').eq('id', pv[0]).maybeSingle());
  } else {
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
    const now = new Date().toISOString();
    const { data } = await supabase.from('banners').select('*').eq('active', true).in('placement', [place, 'both'])
      .lte('starts_at', now).or(`ends_at.is.null,ends_at.gt.${now}`).order('created_at', { ascending: false }).limit(1);
    row = data && data[0];
  }
  if (!row) return res.status(200).json({ banner: null });
  const m = row.messages[lang] || (lang === 'ma' && row.messages.fr) || row.messages.en;
  return res.status(200).json({ banner: {
    id: row.id, template: row.template, heading: m.heading || '', text: m.text, button_label: row.link ? m.button_label : '',
    href: row.link ? `${SITE}/api/campaigns?action=banner_click&b=${row.id}` : '', picture: row.hero ? `${SITE}/images/email/hero-${row.hero}.png` : '',
    preview: !row.active,
  } });
}
async function handleBannerClick(req, res, supabase) {
  const id = String((req.query && req.query.b) || '');
  let to = SITE + '/';
  if (UUID_RE.test(id)) {
    const { data } = await supabase.from('banners').select('link').eq('id', id).maybeSingle();
    if (data && /^https:\/\/alimun\.com\//.test(data.link || '')) to = data.link;
    await supabase.rpc('banner_click', { p_id: id });
  }
  res.setHeader('Location', to);
  return res.status(302).end();
}
async function handleBannerAdmin(action, req, res, supabase, user, viaAgent) {
  const b = body(req);
  if (action === 'banner_list') {
    const { data, error } = await supabase.from('banners').select('id, template, placement, messages, link, starts_at, ends_at, active, clicks, sent_via, created_at')
      .order('created_at', { ascending: false }).limit(30);
    if (error) return res.status(500).json({ error: 'The banners could not be read' });
    return res.status(200).json({ banners: data.map((x) => ({ ...x, preview: previewLinks(x.id) })) });
  }
  if (action === 'banner_save') {
    const { row, error } = cleanBanner(b);
    if (error) return res.status(400).json({ error });
    if (b.id) {
      if (!UUID_RE.test(b.id)) return res.status(400).json({ error: 'Unknown banner' });
      const { data: cur } = await supabase.from('banners').select('active').eq('id', b.id).maybeSingle();
      if (!cur) return res.status(404).json({ error: 'Unknown banner' });
      if (cur.active) return res.status(409).json({ error: 'This banner is showing. Stop it before editing.' });
      const { error: uErr } = await supabase.from('banners').update({ ...row, updated_at: new Date().toISOString() }).eq('id', b.id);
      if (uErr) return res.status(500).json({ error: 'The banner could not be saved' });
      return res.status(200).json({ id: b.id, active: false, preview: previewLinks(b.id) });
    }
    const { data, error: iErr } = await supabase.from('banners').insert({ ...row, active: false, sent_via: viaAgent ? 'agent' : 'dashboard', created_by: user ? user.id : null }).select('id').single();
    if (iErr) { console.error('[campaigns] banner save', iErr.message); return res.status(500).json({ error: 'The banner could not be saved' }); }
    return res.status(200).json({ id: data.id, active: false, preview: previewLinks(data.id) });
  }
  if (action === 'banner_activate' || action === 'banner_stop') {
    if (!UUID_RE.test(b.id || '')) return res.status(400).json({ error: 'Unknown banner' });
    const on = action === 'banner_activate';
    const { data, error } = await supabase.from('banners').update({ active: on, updated_at: new Date().toISOString() }).eq('id', b.id).select('id, placement, starts_at, ends_at');
    if (error || !data || !data.length) return res.status(404).json({ error: 'Unknown banner' });
    console.log(`[campaigns] ${viaAgent ? 'campaign key' : 'admin ' + user.id} ${on ? 'switched on' : 'stopped'} banner ${b.id}`);
    return res.status(200).json({ id: b.id, active: on, ...data[0] });
  }
  return res.status(400).json({ error: 'Unknown action' });
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const action = (req.query && req.query.action) || '';
  const supabase = admin();
  if (!supabase) return res.status(500).json({ error: 'Server configuration error' });
  if (action === 'click') return handleClick(req, res, supabase);
  if (action === 'banner') return handleBanner(req, res, supabase);
  if (action === 'banner_click') return handleBannerClick(req, res, supabase);
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'Method not allowed' }); }
  if (agentKeyOk(req)) {
    if (action === 'audience') return handleAudience(req, res, supabase);
    if (action === 'preview') return handlePreview(req, res, null);
    if (action === 'test') {
      // Owner-set test inbox (app_settings 'campaign_test_to', admins only), else every admin account.
      const { data: st } = await supabase.from('app_settings').select('value').eq('key', 'campaign_test_to').maybeSingle();
      const inbox = String((st && st.value) || '').split(',').map((x) => x.trim()).filter((x) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(x)).slice(0, 3);
      const admins = inbox.length ? inbox.map((email) => ({ email, user_metadata: {} })) : await adminAccounts(supabase);
      if (!admins.length) return res.status(404).json({ error: 'No admin account found' });
      return handleTest(req, res, admins, true);
    }
    if (action === 'send') return handleSend(req, res, supabase, null, true);
    if (action.startsWith('banner_')) return handleBannerAdmin(action, req, res, supabase, null, true);
    return res.status(400).json({ error: 'Unknown action' });
  }
  const user = await adminUser(req, supabase);
  if (!user) return res.status(403).json({ error: 'Admins only' });
  if (action === 'audience') return handleAudience(req, res, supabase);
  if (action === 'test') return handleTest(req, res, [user], false);
  if (action === 'preview') return handlePreview(req, res, user);
  if (action === 'send') return handleSend(req, res, supabase, user, false);
  if (action.startsWith('banner_')) return handleBannerAdmin(action, req, res, supabase, user, false);
  return res.status(400).json({ error: 'Unknown action' });
};

module.exports._test = { cleanMessage, render };
