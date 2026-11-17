/**
 * ============================================================
 *  ALIMUN — /api/account
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Learners deleting their own account (js/app/delete-account.js, #/settings/delete; GDPR art. 17, Terms section 13).
 *
 *    GET  ?action=delete-check (JWT) — what the page needs before the learner decides:
 *         { can, why?, email, name, stripeSub, storeSub, tier }. can is false for admins and teachers (a teacher's
 *         classes and payouts are handed over by hand: they use the Contact page).
 *    POST ?action=delete (JWT) { confirm, reason?, details?, locale? } — confirm must be the account's email address.
 *         1. Takes the Stripe ids off the profile so the webhook does not email "your plan ended" to a deleted
 *            account, then cancels every live Stripe subscription and schedule straight away (no further charges).
 *            If Stripe fails, the ids are put back and nothing is deleted.
 *         2. Writes an anonymous row to public.account_deletions (tier, reason, how long they were a member).
 *         3. Removes the learner's tutor audio files, then auth.admin.deleteUser: student_profiles and everything
 *            the learner owns are removed by ON DELETE CASCADE. Stripe keeps its invoices, as tax law requires.
 *         4. Emails a confirmation to the address that was deleted, and tells the owner.
 *         App Store and Google Play subscriptions cannot be cancelled from here: the page tells the learner.
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');
const mail = require('./_lib/email.js');
const L = require('./_lib/email-i18n.js');

const STRIPE_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = STRIPE_KEY ? require('stripe')(STRIPE_KEY) : null;
const REASONS = ['price', 'not_using', 'other_way', 'problems', 'privacy', 'other'];
const LIVE_SUB = new Set(['active', 'trialing', 'past_due', 'unpaid', 'incomplete', 'paused']);

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

function clean(s, max) {
  return String(s == null ? '' : s).replace(/[\u0000-\u001f\u007f<>]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
}

function parseBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  try { return JSON.parse(req.body || '{}'); } catch (e) { return {}; }
}

/** Who may delete themselves here, and what they hold. */
async function standing(supabase, user) {
  if (user.app_metadata && user.app_metadata.role === 'admin') return { can: false, why: 'admin' };
  const { data: teacher } = await supabase.from('teacher_profiles').select('id').eq('user_id', user.id).maybeSingle();
  if (teacher) return { can: false, why: 'teacher' };
  const { data: p } = await supabase.from('student_profiles')
    .select('id, full_name, tier, stripe_customer_id, stripe_subscription_id, stripe_subscription_status, ui_lang, created_at')
    .eq('user_id', user.id).maybeSingle();
  const { data: store } = await supabase.from('entitlements').select('id')
    .eq('user_id', user.id).eq('source', 'store').eq('status', 'active').limit(1);
  return { can: true, profile: p || null, storeSub: !!(store && store.length) };
}

/** Live Stripe subscriptions and schedules of a customer. */
async function stripeLive(customerId) {
  if (!stripe || !customerId) return { subs: [], schedules: [] };
  const subs = [];
  for await (const s of stripe.subscriptions.list({ customer: customerId, status: 'all', limit: 100 })) {
    if (LIVE_SUB.has(s.status)) subs.push(s);
  }
  const schedules = [];
  for await (const s of stripe.subscriptionSchedules.list({ customer: customerId, limit: 100 })) {
    if (s.status === 'active' || s.status === 'not_started') schedules.push(s);
  }
  return { subs, schedules };
}

async function handleCheck(req, res, supabase, user) {
  const s = await standing(supabase, user);
  if (!s.can) return res.status(200).json({ can: false, why: s.why, email: user.email || '' });
  const p = s.profile || {};
  let stripeSub = !!(p.stripe_subscription_id && p.stripe_subscription_status && p.stripe_subscription_status !== 'cancelled');
  try { stripeSub = (await stripeLive(p.stripe_customer_id)).subs.length > 0 || stripeSub; } catch (e) { console.error('[account] check stripe', e.message); }
  return res.status(200).json({
    can: true, email: user.email || '', name: p.full_name || '', tier: p.tier || 'free', stripeSub, storeSub: s.storeSub,
  });
}

function confirmEmail({ lang, name }) {
  return mail.renderEmail({
    hero: 'default', lang,
    preheader: L.say(lang, 'deleted.preheader'),
    heading: L.say(lang, 'deleted.heading'),
    blocks: [
      { p: L.hello(lang, name) },
      { p: L.html(lang, 'deleted.body') },
      { p: L.html(lang, 'deleted.kept') },
      { p: L.html(lang, 'deleted.back') },
    ],
    footer: L.html(lang, 'deleted.footer'),
  });
}

async function handleDelete(req, res, supabase, user) {
  const body = parseBody(req);
  const email = String(user.email || '').trim().toLowerCase();
  if (!email || clean(body.confirm, 254).toLowerCase() !== email) return res.status(400).json({ error: 'confirm_mismatch' });

  const s = await standing(supabase, user);
  if (!s.can) return res.status(403).json({ error: s.why });
  const p = s.profile;
  const lang = L.norm(body.locale || (p && p.ui_lang) || 'en');
  const reason = REASONS.includes(body.reason) ? body.reason : null;
  const details = clean(body.details, 1000) || null;

  /* 1. Billing: no charge may follow a deleted account */
  let hadSub = false;
  if (p && p.stripe_customer_id) {
    if (!stripe) return res.status(503).json({ error: 'billing_unavailable' });
    const keep = { stripe_customer_id: p.stripe_customer_id, stripe_subscription_id: p.stripe_subscription_id };
    await supabase.from('student_profiles').update({ stripe_customer_id: null, stripe_subscription_id: null }).eq('id', p.id);
    try {
      const live = await stripeLive(p.stripe_customer_id);
      for (const sch of live.schedules) await stripe.subscriptionSchedules.cancel(sch.id);
      for (const sub of live.subs) {
        hadSub = true;
        try { await stripe.subscriptions.cancel(sub.id, { prorate: false }); }
        catch (e) { if (!/No such subscription|canceled/i.test(e.message || '')) throw e; }
      }
    } catch (e) {
      console.error('[account] stripe cancel', e.message);
      await supabase.from('student_profiles').update(keep).eq('id', p.id);
      return res.status(502).json({ error: 'billing_failed' });
    }
  }

  /* 2. Why they left, without who they are */
  const memberDays = p && p.created_at ? Math.max(0, Math.floor((Date.now() - Date.parse(p.created_at)) / 86400000)) : null;
  const { error: logErr } = await supabase.from('account_deletions').insert({
    tier: (p && p.tier) || null, had_subscription: hadSub, member_days: memberDays,
    reason: [reason, details].filter(Boolean).join(': ') || null, locale: lang,
  });
  if (logErr) console.error('[account] log', logErr.message);

  /* 3. Files, then the account (cascades to everything the learner owns) */
  if (p) {
    try {
      const { data: files } = await supabase.storage.from('tutor-audio').list(p.id, { limit: 1000 });
      if (files && files.length) await supabase.storage.from('tutor-audio').remove(files.map((f) => p.id + '/' + f.name));
    } catch (e) { console.error('[account] audio', e.message); }
  }
  const { error: delErr } = await supabase.auth.admin.deleteUser(user.id);
  if (delErr) {
    console.error('[account] deleteUser', delErr.message);
    return res.status(500).json({ error: 'not_deleted', billingCancelled: hadSub });
  }

  /* 4. Confirmation and the owner's notice */
  try {
    await mail.sendEmail({ to: email, subject: L.say(lang, 'deleted.subject'), ...confirmEmail({ lang, name: p && p.full_name }) });
  } catch (e) { console.error('[account] confirmation', e.message); }
  try {
    await mail.sendEmail({
      to: process.env.CONTACT_EMAIL || 'bchysf@gmail.com',
      subject: 'A learner deleted their account',
      ...mail.renderEmail({
        heading: 'A learner deleted their account',
        blocks: [
          { p: `Plan: ${mail.esc((p && p.tier) || 'free')}${hadSub ? ', Stripe subscription cancelled' : ''}. Member for ${memberDays == null ? 'unknown' : memberDays} days.` },
          { p: reason || details ? `Reason: ${mail.esc([reason, details].filter(Boolean).join(': '))}` : 'No reason given.' },
          { p: 'Every reason is listed in public.account_deletions.' },
        ],
        signoff: false,
      }),
    });
  } catch (e) { console.error('[account] owner notice', e.message); }

  return res.status(200).json({ deleted: true, billingCancelled: hadSub });
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const action = req.query && req.query.action;
  const supabase = getSupabaseAdmin();
  if (!supabase) return res.status(503).json({ error: 'unavailable' });
  const user = await getUser(supabase, req);
  if (!user) return res.status(401).json({ error: 'sign_in' });
  try {
    if (action === 'delete-check' && req.method === 'GET') return await handleCheck(req, res, supabase, user);
    if (action === 'delete' && req.method === 'POST') return await handleDelete(req, res, supabase, user);
    return res.status(405).json({ error: 'unknown_action' });
  } catch (e) {
    console.error('[account]', e.message);
    return res.status(500).json({ error: 'server_error' });
  }
};
