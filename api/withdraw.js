/**
 * ============================================================
 *  ALIMUN — /api/withdraw
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  The online withdrawal function (docs/PRICING_ENGINE_SPEC.md, build step 1). EU consumers may withdraw from a
 *  distance contract within 14 days; since 19 June 2026 the trader must let them do it online in two steps and confirm
 *  receipt on a durable medium (Directive (EU) 2023/2673, art. 11a of Directive 2011/83/EU). Every paid contract on
 *  Alimun is made in the signed-in dashboard, so the function lives there (js/app/withdraw.js, #/settings/withdraw).
 *
 *    GET  ?action=contracts (student JWT) — the purchases on the account from Stripe: subscriptions and one-time
 *         payments of the last 120 days, as { ref, kind, name, amount, currency, date, status }.
 *    POST ?action=submit (student JWT) { contractRef?, otherText?, name, email?, reason?, locale? } — the second
 *         step (the learner has seen the summary and pressed "Confirm withdrawal"): stores the statement in
 *         public.withdrawal_requests, emails the learner a receipt with the date and time, and tells the owner.
 *         The refund is decided and issued by an admin (classes already taken are paid for when the learner asked
 *         for classes to start during the withdrawal period); nothing is cancelled or refunded automatically.
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');
const mail = require('./_lib/email.js');
const L = require('./_lib/email-i18n.js');

const STRIPE_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = STRIPE_KEY ? require('stripe')(STRIPE_KEY) : null;
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;
const LOOKBACK_DAYS = 120;
const PER_USER_DAY = 5;

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}

async function getUser(supabase, req) {
  const h = req.headers.authorization || '';
  if (!h.startsWith('Bearer ')) return null;
  const { data, error } = await supabase.auth.getUser(h.slice(7));
  return error || !data || !data.user ? null : data.user;
}

/** Text from the request: trimmed, control characters and angle brackets removed, cut to max. */
function clean(s, max) {
  return String(s == null ? '' : s).replace(/[\u0000-\u001f\u007f<>]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
}

/** Checks and normalises a submission. Returns { ok, error?, value? }. */
function validate(body, contracts) {
  const b = body && typeof body === 'object' ? body : {};
  const name = clean(b.name, 120);
  if (!name) return { ok: false, error: 'name_required' };
  const email = clean(b.email, 254).toLowerCase();
  if (email && !EMAIL_RE.test(email)) return { ok: false, error: 'email_invalid' };
  const reason = clean(b.reason, 1000) || null;
  const ref = clean(b.contractRef, 200);
  let contract;
  if (ref) {
    contract = (contracts || []).find((c) => c.ref === ref);
    if (!contract) return { ok: false, error: 'contract_unknown' };
  } else {
    const other = clean(b.otherText, 200);
    if (!other) return { ok: false, error: 'contract_required' };
    contract = { ref: null, kind: 'other', label: other, date: null };
  }
  return { ok: true, value: { name, email, reason, contract } };
}

/** A short English label for the owner's records; the learner's page formats its own. */
function labelOf(c) {
  if (c.kind === 'other') return c.label;
  const amount = c.amount != null ? ` ${(c.amount / 100).toFixed(2)} ${String(c.currency || '').toUpperCase()}` : '';
  const day = c.date ? ` ${new Date(c.date).toISOString().slice(0, 10)}` : '';
  return `${c.name || (c.kind === 'subscription' ? 'Subscription' : 'Payment')}${amount}${day}`.slice(0, 200);
}

/** The account's purchases from Stripe. Never throws: an empty list when Stripe is not set up or fails. */
async function contractsFor(customerId) {
  if (!stripe || !customerId) return [];
  const out = [];
  const since = Math.floor(Date.now() / 1000) - LOOKBACK_DAYS * 86400;
  try {
    const subs = await stripe.subscriptions.list({ customer: customerId, status: 'all', limit: 10, expand: ['data.items.data.price.product'] });
    for (const s of subs.data || []) {
      if (s.created < since && !['active', 'trialing', 'past_due'].includes(s.status)) continue;
      const price = s.items && s.items.data && s.items.data[0] && s.items.data[0].price;
      const product = price && typeof price.product === 'object' ? price.product : null;
      out.push({
        ref: s.id, kind: 'subscription', status: s.status,
        name: (product && product.name) || (s.metadata && s.metadata.tier) || null,
        amount: price ? price.unit_amount : null, currency: price ? price.currency : (s.currency || null),
        date: new Date(s.created * 1000).toISOString(),
      });
    }
  } catch (e) { console.error('[withdraw] subscriptions', e.message); }
  try {
    const pis = await stripe.paymentIntents.list({ customer: customerId, limit: 20, created: { gte: since } });
    for (const p of pis.data || []) {
      if (p.status !== 'succeeded' || p.invoice) continue; // subscription payments belong to their subscription
      const md = p.metadata || {};
      out.push({
        ref: p.id, kind: 'payment', status: p.status,
        name: md.type || md.tier || p.description || null,
        amount: p.amount_received || p.amount, currency: p.currency,
        date: new Date(p.created * 1000).toISOString(),
      });
    }
  } catch (e) { console.error('[withdraw] payments', e.message); }
  return out.sort((a, b) => (a.date < b.date ? 1 : -1));
}

async function profileOf(supabase, userId) {
  const { data } = await supabase.from('student_profiles').select('full_name, stripe_customer_id, ui_lang').eq('id', userId).maybeSingle();
  return data || {};
}

function receiptEmail({ lang, name, label, ref, when, reason }) {
  const rows = [
    { p: L.hello(lang, name) },
    { p: L.html(lang, 'withdrawal.body', { when }) },
    { p: L.html(lang, 'withdrawal.contract', { contract: label }) + (ref ? ` (${mail.esc(ref)})` : '') },
  ];
  if (reason) rows.push({ p: L.html(lang, 'withdrawal.reason', { reason }) });
  rows.push({ p: L.html(lang, 'withdrawal.refund') });
  rows.push({ p: L.html(lang, 'common.questions') });
  return mail.renderEmail({
    hero: 'default', lang,
    preheader: L.say(lang, 'withdrawal.preheader', { when }),
    heading: L.say(lang, 'withdrawal.heading'),
    blocks: rows,
    footer: L.html(lang, 'withdrawal.footer'),
  });
}

async function handleContracts(req, res, supabase, user) {
  const p = await profileOf(supabase, user.id);
  const list = await contractsFor(p.stripe_customer_id);
  return res.status(200).json({ contracts: list, name: p.full_name || '', email: user.email || '' });
}

async function handleSubmit(req, res, supabase, user) {
  const since = new Date(Date.now() - 86400000).toISOString();
  const { count } = await supabase.from('withdrawal_requests').select('id', { count: 'exact', head: true }).eq('user_id', user.id).gte('received_at', since);
  if ((count || 0) >= PER_USER_DAY) return res.status(429).json({ error: 'too_many' });

  const p = await profileOf(supabase, user.id);
  const body = typeof req.body === 'string' ? (() => { try { return JSON.parse(req.body); } catch { return {}; } })() : (req.body || {});
  const contracts = body.contractRef ? await contractsFor(p.stripe_customer_id) : [];
  const v = validate(body, contracts);
  if (!v.ok) return res.status(400).json({ error: v.error });

  const email = v.value.email || String(user.email || '').toLowerCase();
  if (!EMAIL_RE.test(email)) return res.status(400).json({ error: 'email_invalid' });
  const lang = L.norm(body.locale || p.ui_lang || 'en');
  const c = v.value.contract;
  const label = labelOf(c);

  const { data: row, error } = await supabase.from('withdrawal_requests').insert({
    user_id: user.id, full_name: v.value.name, email,
    contract_kind: c.kind, contract_ref: c.ref, contract_label: label, contract_date: c.date,
    reason: v.value.reason, locale: lang,
  }).select('id, received_at').single();
  if (error || !row) {
    console.error('[withdraw] insert', error && error.message);
    return res.status(500).json({ error: 'not_saved' });
  }

  const when = new Date(row.received_at).toLocaleString(L.locale ? L.locale(lang) : 'en-GB', { dateStyle: 'long', timeStyle: 'short', timeZone: 'UTC' }) + ' UTC';
  let ackSent = false;
  try {
    const sent = await mail.sendEmail({
      to: email,
      subject: L.say(lang, 'withdrawal.subject'),
      ...receiptEmail({ lang, name: v.value.name, label, ref: c.ref, when, reason: v.value.reason }),
    });
    ackSent = sent === true;
  } catch (e) { console.error('[withdraw] receipt', e.message); }
  if (ackSent) await supabase.from('withdrawal_requests').update({ ack_sent_at: new Date().toISOString() }).eq('id', row.id);

  try {
    await mail.sendEmail({
      to: process.env.CONTACT_EMAIL || 'bchysf@gmail.com',
      subject: `Withdrawal received: ${label}`.replace(/[\r\n<>]+/g, ' ').slice(0, 200),
      ...mail.renderEmail({
        heading: 'A learner withdrew from a contract',
        blocks: [
          { p: `${mail.esc(v.value.name)} (${mail.esc(email)}) withdrew on ${mail.esc(when)}.` },
          { p: `Contract: ${mail.esc(label)}${c.ref ? ` (${mail.esc(c.ref)})` : ''}.` },
          { p: v.value.reason ? `Reason: ${mail.esc(v.value.reason)}` : 'No reason given.' },
          { p: 'Refund within 14 days of today, to the payment method used, minus classes already taken if the learner asked for classes to start during the withdrawal period. End the subscription in Stripe if there is one. Request id: ' + mail.esc(row.id) + '.' },
        ],
        signoff: false,
      }),
    });
  } catch (e) { console.error('[withdraw] owner notice', e.message); }

  return res.status(200).json({ id: row.id, receivedAt: row.received_at, email, ackSent });
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const action = req.query && req.query.action;
  const supabase = getSupabaseAdmin();
  if (!supabase) return res.status(503).json({ error: 'unavailable' });
  const user = await getUser(supabase, req);
  if (!user) return res.status(401).json({ error: 'sign_in' });
  try {
    if (action === 'contracts' && req.method === 'GET') return await handleContracts(req, res, supabase, user);
    if (action === 'submit' && req.method === 'POST') return await handleSubmit(req, res, supabase, user);
    return res.status(405).json({ error: 'unknown_action' });
  } catch (e) {
    console.error('[withdraw]', e.message);
    return res.status(500).json({ error: 'server_error' });
  }
};

module.exports.validate = validate;
module.exports.labelOf = labelOf;
module.exports.clean = clean;
