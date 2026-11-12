/**
 * Alimun checkout, card first (docs/PRICING_ENGINE_SPEC.md sections 4 and 5; build step 4).
 *
 *   GET  ?action=display            prices for the visitor's country (x-vercel-ip-country), or the signed-in
 *                                   learner's locked band; not binding. Public, cached 10 minutes at the edge.
 *   POST ?action=setup              (signed in) the learner's Stripe customer and a SetupIntent for the card.
 *   POST ?action=quote              (signed in) { setupIntentId, productKey, cadence, cohortId? }: the card's issuing
 *                                   country sets the band and currency, the price book the amount; a quote held
 *                                   15 minutes. The page shows it before anything is charged.
 *   POST ?action=purchase           (signed in) { quoteId }: subscription (app, open class), invoice paid now (trial,
 *                                   help class, voice minutes) or a reserved pack (card saved, nothing charged until
 *                                   the room opens). A payment the bank must confirm returns { next: clientSecret }.
 *   POST ?action=confirm            (signed in) { quoteId }: after the bank's confirmation, records the purchase.
 *   GET  ?action=admin-report       (admin) the last 7 days: purchases by band, card and visitor countries that
 *                                   differ, refused trials, withheld free minutes and disputes (section 7).
 *   GET  ?action=cron-billing       (Vercel cron, Bearer CRON_SECRET) pauses entitlements unpaid for 3 days
 *                                   (public.pause_unpaid_entitlements), which frees their seats.
 *
 * The browser never sends an amount, currency, band or Stripe price id. Only products listed in
 * app_settings.pricing_on_sale are sold. Billing state on student_profiles stays the webhook's (api/webhooks/stripe.js);
 * this file writes the pricing tables, entitlements and, for voice minutes, the tutor time ledger.
 */
const STRIPE_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(STRIPE_KEY || 'dummy_key_for_load_validation');
const { createClient } = require('@supabase/supabase-js');
const P = require('./_lib/pricing.js');
const E = require('./_lib/entitlements.js');
const { recordRun } = require('./_lib/cron-log.js');

const TAX_ON = process.env.STRIPE_AUTOMATIC_TAX === 'on';

function admin() {
  const url = process.env.SUPABASE_URL, key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}
async function userOf(req, sb) {
  const h = req.headers.authorization || '';
  if (!h.startsWith('Bearer ') || !sb) return null;
  const { data, error } = await sb.auth.getUser(h.slice(7));
  return error || !data || !data.user ? null : data.user;
}
function body(req) {
  try { return typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {}); } catch { return null; }
}
function ipCountryOf(req) {
  const c = String(req.headers['x-vercel-ip-country'] || '').toUpperCase();
  return /^[A-Z]{2}$/.test(c) ? c : null;
}
function fail(res, status, code, extra) { return res.status(status).json(Object.assign({ error: code }, extra || {})); }

async function settings(sb, keys) {
  const { data, error } = await sb.from('app_settings').select('key, value').in('key', keys);
  if (error) throw new Error('settings: ' + error.message);
  return Object.fromEntries((data || []).map((r) => [r.key, r.value]));
}
async function country(sb, cc) {
  if (!/^[A-Z]{2}$/.test(cc || '')) return P.countryRow(null, null);
  const { data } = await sb.from('country_bands').select('country, band, currency, tax_inclusive').eq('country', cc).maybeSingle();
  return P.countryRow(data, cc);
}
async function pricingOf(sb, userId) {
  const { data, error } = await sb.from('customer_pricing').select('*').eq('user_id', userId).maybeSingle();
  if (error) throw new Error('customer_pricing: ' + error.message);
  return data || null;
}
async function profileOf(sb, userId) {
  const { data, error } = await sb.from('student_profiles').select('id, full_name, stripe_customer_id').eq('user_id', userId).maybeSingle();
  if (error) throw new Error('student profile: ' + error.message);
  return data || null;
}

/** The learner's Stripe customer: stored, found by tag, or created once (idempotent per user). */
async function customerOf(sb, user, profile) {
  if (profile.stripe_customer_id) return profile.stripe_customer_id;
  const found = await stripe.customers.search({ query: `metadata['supabase_user_id']:'${user.id}'`, limit: 1 }).catch(() => ({ data: [] }));
  let id = found.data && found.data[0] && found.data[0].id;
  if (!id) {
    const c = await stripe.customers.create({ email: user.email, name: profile.full_name || undefined,
      metadata: { supabase_user_id: user.id, source: 'alimun_pricing' } }, { idempotencyKey: `cust-${user.id}` });
    id = c.id;
  }
  await sb.from('student_profiles').update({ stripe_customer_id: id }).eq('id', profile.id);
  return id;
}

// ── display ──
const displayCache = new Map();
async function handleDisplay(req, res, sb) {
  const user = await userOf(req, sb);
  const ipCountry = String(req.headers['x-vercel-ip-country'] || '').toUpperCase();
  const row = await country(sb, ipCountry);
  let band = row.band;
  if (user) { const cp = await pricingOf(sb, user.id); if (cp && cp.band) band = cp.band; }
  const key = band + ':' + row.currency + ':' + (user ? user.id : '');
  const hit = displayCache.get(key);
  if (hit && Date.now() - hit.at < 600000) return send(hit.out);

  const s = await settings(sb, ['founding_closes_at', 'founding_cap', 'founding_count', 'pricing_on_sale']);
  const { data: rows, error } = await sb.from('price_book').select('product_key, band, variant, cadence, currency, unit_amount')
    .eq('band', band).eq('active', true);
  if (error) throw new Error('price_book: ' + error.message);
  const available = [...new Set((rows || []).map((r) => r.currency))];
  const currency = P.chooseCurrency(row.band === band ? row.currency : null, available);
  let founding = P.foundingWindowOpen(s);
  if (user) founding = founding || P.foundingHeld(await pricingOf(sb, user.id));
  const out = {
    country: row.country, band, currency, taxInclusive: row.band === band ? row.tax_inclusive !== false : true,
    founding, onSale: P.onSale(s.pricing_on_sale), prices: P.displayBook(rows, band, currency),
  };
  if (displayCache.size > 500) displayCache.clear();
  displayCache.set(key, { at: Date.now(), out });
  return send(out);
  function send(o) {
    res.setHeader('Cache-Control', user ? 'private, no-store' : 'public, max-age=0, s-maxage=600');
    if (!user) res.setHeader('Vary', 'x-vercel-ip-country');
    return res.status(200).json(o);
  }
}

// ── setup ──
async function handleSetup(req, res, sb, user) {
  const profile = await profileOf(sb, user.id);
  if (!profile) return fail(res, 409, 'profile_required');
  const customer = await customerOf(sb, user, profile);
  const si = await stripe.setupIntents.create({
    customer, usage: 'off_session', payment_method_types: ['card'],
    metadata: { supabase_user_id: user.id, source: 'alimun_pricing' },
  });
  return res.status(200).json({ clientSecret: si.client_secret, setupIntentId: si.id });
}

// ── quote ──
async function handleQuote(req, res, sb, user) {
  const b = body(req);
  if (!b) return fail(res, 400, 'bad_json');
  const { setupIntentId, productKey, cadence } = b;
  const cohortId = P.isUuid(b.cohortId) ? b.cohortId : null;
  if (typeof setupIntentId !== 'string' || !/^seti_[A-Za-z0-9]{8,80}$/.test(setupIntentId)) return fail(res, 400, 'bad_setup_intent');
  const s = await settings(sb, ['founding_closes_at', 'founding_cap', 'founding_count', 'pricing_on_sale']);
  const bad = P.checkRequest(productKey, cadence, P.onSale(s.pricing_on_sale));
  if (bad) return fail(res, 400, bad);

  const profile = await profileOf(sb, user.id);
  if (!profile) return fail(res, 409, 'profile_required');
  const customer = await customerOf(sb, user, profile);
  const si = await stripe.setupIntents.retrieve(setupIntentId, { expand: ['payment_method'] });
  if (!si || si.customer !== customer || si.status !== 'succeeded' || !si.payment_method || typeof si.payment_method !== 'object') {
    return fail(res, 400, 'card_not_ready');
  }
  const pm = si.payment_method;
  const cardCountry = String((pm.card && pm.card.country) || '').toUpperCase();
  if (!/^[A-Z]{2}$/.test(cardCountry)) return fail(res, 400, 'card_country_unknown');

  // Already bought: one running pack or subscription per product.
  const { data: held } = await sb.from('entitlements').select('id').eq('user_id', user.id).eq('product_key', productKey)
    .in('status', ['pending_room', 'active', 'paused']).limit(1);
  if (held && held.length && P.PRODUCTS[productKey].charge !== 'once') return fail(res, 409, 'already_have');

  // The trial once per person: email and card.
  // The trial once per person: email and card; never for a throwaway inbox (section 7). Refusals are logged.
  if (productKey === 'trial') {
    const secret = P.markerSecret(process.env);
    const marks = [P.markerHash('email', P.normaliseEmail(user.email), secret), P.markerHash('card', pm.card.fingerprint, secret)];
    const { data: seen } = await sb.from('trial_markers').select('kind').in('hash', marks).limit(1);
    const { data: throwaway } = await sb.rpc('is_disposable_email', { p_email: user.email });
    if ((seen && seen.length) || throwaway === true) {
      await sb.from('abuse_log').insert({ kind: 'trial_refused', user_id: user.id,
        detail: { marker: throwaway === true ? 'disposable_email' : seen[0].kind, card_country: cardCountry } });
      return fail(res, 409, 'trial_used');
    }
  }

  const row = await country(sb, cardCountry);
  const current = await pricingOf(sb, user.id);
  const { band } = P.resolveBand(row.band, current);
  const { data: rows, error } = await sb.from('price_book').select('variant, currency, unit_amount, stripe_price_id')
    .eq('product_key', productKey).eq('band', band).eq('cadence', cadence).eq('active', true);
  if (error) throw new Error('price_book: ' + error.message);
  const hasFounding = (rows || []).some((r) => r.variant === 'founding');
  const { variant, claim } = P.chooseVariant({ hasFoundingPrice: hasFounding, pricing: current, settings: s });
  const currency = P.chooseCurrency(row.band === band ? row.currency : null, (rows || []).filter((r) => r.variant === variant).map((r) => r.currency));
  const price = (rows || []).find((r) => r.variant === variant && r.currency === currency);
  if (!price || !price.stripe_price_id) return fail(res, 503, 'price_missing');
  const list = variant === 'founding' ? (rows || []).find((r) => r.variant === 'list' && r.currency === currency) : null;

  const expires = new Date(Date.now() + P.QUOTE_MINUTES * 60000).toISOString();
  const { data: q, error: qErr } = await sb.from('quotes').insert({
    user_id: user.id, product_key: productKey, variant, cadence, band, currency, unit_amount: price.unit_amount,
    stripe_price_id: price.stripe_price_id, setup_intent_id: si.id, cohort_id: cohortId, expires_at: expires,
    payment_method_id: pm.id, card_country: cardCountry, founding_claim: claim, ip_country: ipCountryOf(req),
  }).select('id').single();
  if (qErr) throw new Error('quote: ' + qErr.message);

  return res.status(200).json({
    quoteId: q.id, productKey, cadence, band, currency, amount: price.unit_amount, listAmount: list ? list.unit_amount : null,
    founding: variant === 'founding', cardCountry, taxInclusive: row.band === band ? row.tax_inclusive !== false : true,
    charge: P.PRODUCTS[productKey].charge, months: P.PRODUCTS[productKey].kind.endsWith('_pack') ? 3 : null,
    minutes: P.PRODUCTS[productKey].minutes || null, expiresAt: expires,
  });
}

/** Locks the band (logged) and, for a founding quote, claims the seat. Returns an error code or null. */
async function lockPricing(sb, user, q) {
  const current = await pricingOf(sb, user.id);
  const row = await country(sb, q.card_country);
  const r = P.resolveBand(row.band, current);
  if (r.band !== q.band) return 'quote_changed';
  if (r.change) {
    const { error } = await sb.rpc('set_band', { p_user: user.id, p_band: q.band, p_reason: 'card at checkout', p_card_country: q.card_country, p_by: null });
    if (error && /band_change_too_soon/.test(error.message)) return 'quote_changed';
    if (error) throw new Error('set_band: ' + error.message);
  }
  if (q.variant === 'founding' && !P.foundingHeld(current)) {
    const { data: seat, error } = await sb.rpc('claim_founding_seat', { p_user: user.id });
    if (error) throw new Error('claim_founding_seat: ' + error.message);
    if (seat == null) return 'quote_changed';
  }
  return null;
}

function metaOf(user, q) {
  return { supabase_user_id: user.id, product_key: q.product_key, band: q.band, variant: q.variant, cadence: q.cadence,
    quote_id: q.id, source: 'alimun_pricing', type: 'pricing_v2' };
}

/** Grants what a quote bought (api/_lib/entitlements.js, shared with the webhook). */
function fulfil(sb, user, q, refs) {
  return E.fulfil({ sb, stripe, markerSecret: P.markerSecret(process.env) }, user, q, refs || {});
}

async function loadQuote(sb, user, id) {
  if (!P.isUuid(id)) return null;
  const { data } = await sb.from('quotes').select('*').eq('id', id).eq('user_id', user.id).maybeSingle();
  return data || null;
}

// ── purchase ──
async function handlePurchase(req, res, sb, user) {
  const b = body(req);
  if (!b) return fail(res, 400, 'bad_json');
  let q = await loadQuote(sb, user, b.quoteId);
  const problem = P.quoteProblem(q, user.id);
  if (problem) return fail(res, problem === 'quote_not_found' ? 404 : 409, problem);
  const s = await settings(sb, ['pricing_on_sale']);
  const bad = P.checkRequest(q.product_key, q.cadence, P.onSale(s.pricing_on_sale));
  if (bad) return fail(res, 400, bad);

  // One purchase per quote: whoever sets purchase_started_at first goes on (a double click does not charge twice).
  const { data: claimed } = await sb.from('quotes').update({ purchase_started_at: new Date().toISOString() })
    .eq('id', q.id).is('purchase_started_at', null).is('used_at', null).select('id');
  if (!claimed || !claimed.length) return fail(res, 409, 'quote_used');

  const locked = await lockPricing(sb, user, q);
  if (locked) return fail(res, 409, locked);

  const profile = await profileOf(sb, user.id);
  const customer = await customerOf(sb, user, profile);
  const pm = await stripe.paymentMethods.retrieve(q.payment_method_id);
  if (pm.customer !== customer) return fail(res, 409, 'card_not_ready');
  const prod = P.PRODUCTS[q.product_key];
  const meta = metaOf(user, q);
  // The band on the customer, for Stripe Radar rules (docs/STRIPE_RADAR_RULES.md): ::customer:band::
  const custUpdate = { metadata: { band: q.band, card_country: q.card_country } };
  if (TAX_ON && pm.billing_details && pm.billing_details.address && pm.billing_details.address.country) {
    custUpdate.address = { country: pm.billing_details.address.country, postal_code: pm.billing_details.address.postal_code || undefined };
  }
  await stripe.customers.update(customer, custUpdate);

  if (prod.charge === 'reserve') {
    // The card stays on the customer for the room's first day (section 5); nothing is charged now.
    await stripe.customers.update(customer, { invoice_settings: { default_payment_method: pm.id } });
    const id = await fulfil(sb, user, q, {});
    return res.status(200).json({ done: true, reserved: true, entitlementId: id });
  }

  if (prod.charge === 'subscription') {
    const sub = await stripe.subscriptions.create({
      customer, items: [{ price: q.stripe_price_id }], currency: q.currency, default_payment_method: pm.id,
      payment_behavior: 'allow_incomplete', metadata: meta, automatic_tax: { enabled: TAX_ON },
      expand: ['latest_invoice.payment_intent'],
    }, { idempotencyKey: 'sub-' + q.id });
    await sb.from('quotes').update({ stripe_subscription_id: sub.id, stripe_invoice_id: sub.latest_invoice && sub.latest_invoice.id }).eq('id', q.id);
    return finishSubscription(res, sb, user, q, sub);
  }

  // One payment now, on an invoice (so tax and receipts work as for subscriptions).
  const inv = await stripe.invoices.create({
    customer, currency: q.currency, collection_method: 'charge_automatically', auto_advance: false,
    pending_invoice_items_behavior: 'exclude', automatic_tax: { enabled: TAX_ON }, metadata: meta, default_payment_method: pm.id,
  }, { idempotencyKey: 'inv-' + q.id });
  await stripe.invoiceItems.create({ customer, invoice: inv.id, price: q.stripe_price_id, currency: q.currency, metadata: meta },
    { idempotencyKey: 'ii-' + q.id });
  await sb.from('quotes').update({ stripe_invoice_id: inv.id }).eq('id', q.id);
  await stripe.invoices.finalizeInvoice(inv.id, { auto_advance: false });
  let paid;
  try {
    paid = await stripe.invoices.pay(inv.id, { payment_method: pm.id, off_session: false });
  } catch (e) {
    const fresh = await stripe.invoices.retrieve(inv.id, { expand: ['payment_intent'] });
    const pi = fresh.payment_intent;
    if (pi && pi.status === 'requires_action') return res.status(200).json({ next: pi.client_secret });
    await stripe.invoices.voidInvoice(inv.id).catch(() => {});
    return declined(res, sb, q, e);
  }
  if (paid.status !== 'paid') return declined(res, sb, q, null);
  const id = await fulfil(sb, user, q, { invoice: paid.id, amountPaid: paid.amount_paid });
  return res.status(200).json({ done: true, entitlementId: id });
}

async function finishSubscription(res, sb, user, q, sub) {
  const inv = sub.latest_invoice, pi = inv && inv.payment_intent;
  if (sub.status === 'active' || sub.status === 'trialing') {
    const id = await fulfil(sb, user, q, { subscription: sub.id, invoice: inv && inv.id, amountPaid: inv ? inv.amount_paid : 0,
      periodEnd: sub.current_period_end ? new Date(sub.current_period_end * 1000).toISOString() : null });
    return res.status(200).json({ done: true, entitlementId: id });
  }
  if (pi && pi.status === 'requires_action') return res.status(200).json({ next: pi.client_secret });
  await stripe.subscriptions.cancel(sub.id).catch(() => {});
  return declined(res, sb, q, null);
}

/** A card the bank refused: the quote is spent, the learner starts again with another card. */
async function declined(res, sb, q, err) {
  await sb.from('quotes').update({ used_at: new Date().toISOString() }).eq('id', q.id);
  const code = err && err.raw && err.raw.decline_code;
  return fail(res, 402, 'declined', { decline: code || null, moroccanCard: q.card_country === 'MA' });
}

// ── confirm (after the bank's check) ──
async function handleConfirm(req, res, sb, user) {
  const b = body(req);
  if (!b) return fail(res, 400, 'bad_json');
  const q = await loadQuote(sb, user, b.quoteId);
  if (!q) return fail(res, 404, 'quote_not_found');
  if (q.used_at) return res.status(200).json({ done: !!q.entitlement_id || P.PRODUCTS[q.product_key].kind === 'minutes', entitlementId: q.entitlement_id });
  if (q.stripe_subscription_id) {
    const sub = await stripe.subscriptions.retrieve(q.stripe_subscription_id, { expand: ['latest_invoice.payment_intent'] });
    if (sub.status === 'active' || sub.status === 'trialing') return finishSubscription(res, sb, user, q, sub);
    const pi = sub.latest_invoice && sub.latest_invoice.payment_intent;
    if (pi && pi.status === 'processing') return res.status(202).json({ pending: true });
    await stripe.subscriptions.cancel(sub.id).catch(() => {});
    return declined(res, sb, q, null);
  }
  if (q.stripe_invoice_id) {
    const inv = await stripe.invoices.retrieve(q.stripe_invoice_id, { expand: ['payment_intent'] });
    if (inv.status === 'paid') {
      const id = await fulfil(sb, user, q, { invoice: inv.id, amountPaid: inv.amount_paid });
      return res.status(200).json({ done: true, entitlementId: id });
    }
    if (inv.payment_intent && inv.payment_intent.status === 'processing') return res.status(202).json({ pending: true });
    await stripe.invoices.voidInvoice(inv.id).catch(() => {});
    return declined(res, sb, q, null);
  }
  return fail(res, 409, 'nothing_to_confirm');
}

// ── the admin's weekly payment checks (section 7) ──
async function handleAdminReport(req, res, sb) {
  const since = new Date(Date.now() - 7 * 86400000).toISOString();
  const { data: quotes, error } = await sb.from('quotes').select('product_key, band, currency, unit_amount, card_country, ip_country, used_at, entitlement_id')
    .gte('created_at', since).not('used_at', 'is', null).limit(5000);
  if (error) throw new Error('quotes: ' + error.message);
  const { data: log, error: lErr } = await sb.from('abuse_log').select('at, kind, user_id, detail').gte('at', since).order('at', { ascending: false }).limit(500);
  if (lErr) throw new Error('abuse_log: ' + lErr.message);
  return res.status(200).json(P.weeklyReport(quotes || [], log || []));
}

// ── daily billing job ──
async function handleCronBilling(req, res, sb) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.authorization !== 'Bearer ' + secret) return fail(res, 401, 'unauthorized');
  const { data, error } = await sb.rpc('pause_unpaid_entitlements');
  const ok = !error;
  await recordRun(sb, 'vercel:cron-billing', ok, ok ? { paused: data } : { error: error.message });
  if (!ok) return fail(res, 500, 'server_error');
  return res.status(200).json({ paused: data });
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || 'https://alimun.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  const sb = admin();
  if (!sb) return fail(res, 503, 'database_unavailable');
  const action = (req.query && req.query.action) || '';
  try {
    if (action === 'cron-billing') return await handleCronBilling(req, res, sb);
    if (action === 'admin-report') {
      if (req.method !== 'GET') return fail(res, 405, 'method_not_allowed');
      const admin = await userOf(req, sb);
      if (!admin) return fail(res, 401, 'sign_in_required');
      if (!admin.app_metadata || admin.app_metadata.role !== 'admin') return fail(res, 403, 'admins_only');
      return await handleAdminReport(req, res, sb);
    }
    if (action === 'display') {
      if (req.method !== 'GET') return fail(res, 405, 'method_not_allowed');
      return await handleDisplay(req, res, sb);
    }
    if (!['setup', 'quote', 'purchase', 'confirm'].includes(action)) return fail(res, 400, 'unknown_action');
    if (req.method !== 'POST') return fail(res, 405, 'method_not_allowed');
    if (!STRIPE_KEY) return fail(res, 503, 'payments_not_configured');
    const user = await userOf(req, sb);
    if (!user) return fail(res, 401, 'sign_in_required');
    if (action === 'setup') return await handleSetup(req, res, sb, user);
    if (action === 'quote') return await handleQuote(req, res, sb, user);
    if (action === 'purchase') return await handlePurchase(req, res, sb, user);
    return await handleConfirm(req, res, sb, user);
  } catch (e) {
    console.error('[Alimun] pricing', action, e && e.message);
    if (e && e.type === 'StripeCardError' && (action === 'purchase' || action === 'confirm')) return fail(res, 402, 'declined');
    return fail(res, 500, 'server_error');
  }
};

module.exports._test = { lockPricing };
