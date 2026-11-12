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
 *   GET  ?action=rooms&product=     the rooms (packs, open classes) or class dates (trial, help class) on offer, with seats.
 *   GET  ?action=admin-rooms        (admin) every room with its state, seats and contract; POST ?action=admin-room creates
 *                                   a room ({ product_key, level, teacher_id, substitute_teacher_id, starts_on, ... }) or
 *                                   changes one ({ id, teacher_id?, substitute_teacher_id?, cancel? }).
 *   GET  ?action=contracts          (teacher) course contracts offered to them; POST ?action=contract { cohortId, accept }.
 *   GET  ?action=cron-rooms         (Vercel cron) the rooms' daily steps (api/_lib/rooms.js).
 *   GET  ?action=cron-finance       (Vercel cron) founding notices and ends, weekly exchange rates, the monthly figures.
 *   GET  ?action=admin-figures      (admin) the figures page; POST ?action=admin-spend records acquisition spend.
 *   GET  ?action=launch             (signed in) the launch class: offer, times, places, the free class (api/_lib/launch.js);
 *                                   POST ?action=launch-register a free place in its free first class. A quote may carry
 *                                   { offer } for €10 off the first payment of the launch class's rooms.
 *   POST ?action=admin-launch-email (admin) { mode: preview | test | send, confirm }: the launch email (launch-email.js).
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
const R = require('./_lib/rooms.js');
const F = require('./_lib/finance.js');
const LAUNCH = require('./_lib/launch.js');
const LAUNCH_MAIL = require('./_lib/launch-email.js');
const mail = require('./_lib/email.js');
const L = require('./_lib/email-i18n.js');
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
  const sessionId = P.isUuid(b.sessionId) ? b.sessionId : null;
  if (typeof setupIntentId !== 'string' || !/^seti_[A-Za-z0-9]{8,80}$/.test(setupIntentId)) return fail(res, 400, 'bad_setup_intent');
  const s = await settings(sb, ['founding_closes_at', 'founding_cap', 'founding_count', 'pricing_on_sale']);
  const bad = P.checkRequest(productKey, cadence, P.onSale(s.pricing_on_sale));
  if (bad) return fail(res, 400, bad);
  // The room (packs, open classes) or the class date (trial, help class) the learner chose, with a free seat
  const seat = await R.seatProblem(sb, productKey, cohortId, sessionId);
  if (seat) return fail(res, 409, seat);

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

  // The launch offer (api/_lib/launch.js): €10 off the first payment for the launch class's rooms
  let offer = null, discount = 0;
  if (typeof b.offer === 'string' && cohortId) {
    const lo = await LAUNCH.offerOf(sb);
    discount = LAUNCH.discountFor(lo, { code: b.offer, cohortId, productKey, currency, unitAmount: price.unit_amount,
      perEur: await LAUNCH.rateOf(sb, currency), now: Date.now() });
    if (discount > 0) offer = lo.code;
  }
  const reserveRoom = await reservesFirst(sb, productKey, cohortId);

  const expires = new Date(Date.now() + P.QUOTE_MINUTES * 60000).toISOString();
  const { data: q, error: qErr } = await sb.from('quotes').insert({
    offer, discount_minor: discount,
    user_id: user.id, product_key: productKey, variant, cadence, band, currency, unit_amount: price.unit_amount,
    stripe_price_id: price.stripe_price_id, setup_intent_id: si.id, cohort_id: R.PRODUCT_KIND[productKey] ? cohortId : null,
    session_id: productKey === 'trial' || productKey === 'help_class' ? sessionId : null, expires_at: expires,
    payment_method_id: pm.id, card_country: cardCountry, founding_claim: claim, ip_country: ipCountryOf(req),
  }).select('id').single();
  if (qErr) throw new Error('quote: ' + qErr.message);

  return res.status(200).json({
    quoteId: q.id, productKey, cadence, band, currency, amount: price.unit_amount, listAmount: list ? list.unit_amount : null,
    founding: variant === 'founding', cardCountry, taxInclusive: row.band === band ? row.tax_inclusive !== false : true,
    charge: reserveRoom ? 'reserve' : P.PRODUCTS[productKey].charge, months: P.PRODUCTS[productKey].kind.endsWith('_pack') ? 3 : null,
    discount, offer,
    minutes: P.PRODUCTS[productKey].minutes || null, expiresAt: expires,
  });
}

/** An open class in a room still waiting for its decision (cohorts.decide_at) is reserved like a pack. */
async function reservesFirst(sb, productKey, cohortId) {
  if (!cohortId || !/^open_/.test(productKey || '')) return false;
  const { data } = await sb.from('cohorts').select('decide_at, room_state').eq('id', cohortId).maybeSingle();
  return !!(data && data.decide_at && data.room_state === 'published');
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
  const seat = await R.seatProblem(sb, q.product_key, q.cohort_id, q.session_id);
  if (seat) return fail(res, 409, seat);

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

  const reserveRoom = await reservesFirst(sb, q.product_key, q.cohort_id);
  if (prod.charge === 'reserve' || reserveRoom) {
    // The card stays on the customer for the room's first day (section 5); nothing is charged now.
    await stripe.customers.update(customer, { invoice_settings: { default_payment_method: pm.id } });
    const id = await fulfil(sb, user, q, { reserve: reserveRoom });
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

// ── rooms on offer (public) ──
const firstName = (n) => String(n || '').trim().split(/\s+/)[0] || null;
const ROOM_COLS = 'id, product_key, language, level, starts_on, schedule_days, schedule_time, timezone, max_students, room_state, class_minutes, teacher_profiles!cohorts_teacher_id_fkey ( full_name )';
async function handleRooms(req, res, sb) {
  const product = String((req.query && req.query.product) || '');
  if (!Object.prototype.hasOwnProperty.call(P.PRODUCTS, product)) return fail(res, 400, 'unknown_product');
  const today = R.ymd(new Date());
  const out = [];
  if (product === 'trial' || product === 'help_class') {
    const states = product === 'help_class' ? ['open', 'running'] : ['running'];
    let rq = sb.from('cohorts').select(ROOM_COLS).in('room_state', states).not('product_key', 'is', null);
    rq = product === 'help_class' ? rq.eq('product_key', 'help_class') : rq.neq('product_key', 'help_class');
    const rooms = (await rq.limit(100)).data || [];
    const byId = Object.fromEntries(rooms.map((r) => [r.id, r]));
    if (rooms.length) {
      const until = new Date(Date.now() + (product === 'help_class' ? 21 : 14) * 86400000).toISOString();
      const { data: sessions } = await sb.from('sessions').select('id, cohort_id, scheduled_at').in('cohort_id', rooms.map((r) => r.id))
        .eq('status', 'scheduled').gte('scheduled_at', new Date(Date.now() + 3600000).toISOString()).lte('scheduled_at', until).order('scheduled_at').limit(60);
      for (const x of sessions || []) {
        const r = byId[x.cohort_id];
        const { data: n } = await sb.rpc('session_seats', { p_session: x.id });
        if ((n || 0) >= r.max_students) continue;
        out.push({ sessionId: x.id, at: x.scheduled_at, minutes: r.class_minutes, language: r.language, level: r.level, timezone: r.timezone,
          teacher: firstName(r.teacher_profiles && r.teacher_profiles.full_name), seatsLeft: r.max_students - (n || 0) });
      }
    }
  } else if (R.PRODUCT_KIND[product]) {
    const states = R.isPack(product) ? ['published', 'open'] : ['open', 'running'];
    const { data: rooms } = await sb.from('cohorts').select(ROOM_COLS).eq('product_key', product).in('room_state', states).order('starts_on').limit(50);
    for (const r of rooms || []) {
      if (R.isPack(product) && r.starts_on < today) continue;
      const { data: n } = await sb.rpc('room_seats', { p_cohort: r.id });
      out.push({ cohortId: r.id, startsOn: r.starts_on, days: r.schedule_days, time: String(r.schedule_time || '').slice(0, 5), timezone: r.timezone,
        language: r.language, level: r.level, minutes: r.class_minutes, teacher: firstName(r.teacher_profiles && r.teacher_profiles.full_name),
        joined: n || 0, seatsLeft: Math.max(0, r.max_students - (n || 0)) });
    }
  }
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=120');
  return res.status(200).json({ product, items: out });
}

// ── rooms for the admin ──
async function handleAdminRooms(req, res, sb) {
  const { data, error } = await sb.from('cohorts').select('*, teacher_profiles!cohorts_teacher_id_fkey ( full_name )')
    .not('product_key', 'is', null).order('starts_on', { ascending: false }).limit(200);
  if (error) throw new Error('rooms: ' + error.message);
  const { data: teachers } = await sb.from('teacher_profiles').select('id, full_name, languages, status, country').eq('status', 'approved').order('full_name');
  const nameOf = Object.fromEntries((teachers || []).map((t) => [t.id, t.full_name]));
  const rooms = [];
  for (const r of data || []) {
    const { data: n } = await sb.rpc('room_seats', { p_cohort: r.id });
    rooms.push(Object.assign({}, r, { seats: n || 0, substitute: r.substitute_teacher_id ? { full_name: nameOf[r.substitute_teacher_id] || 'a teacher no longer approved' } : null }));
  }
  // Planning: suggestions waiting for the owner, the teachers' availability, and what learners are asking for
  const today = R.ymd(new Date());
  const { data: proposals } = await sb.from('room_proposals').select('*').or('status.eq.pending,decided_at.gte.' + R.addDays(today, -30)).order('starts_on').limit(100);
  const { data: avail } = await sb.from('room_availability').select('*').order('starts_on').limit(300);
  const { data: allTeachers } = await sb.from('teacher_profiles').select('id, full_name, status').in('id', [...new Set((avail || []).map((a) => a.teacher_id))]);
  const tName = Object.fromEntries((allTeachers || []).map((t) => [t.id, t.full_name || 'a teacher']));
  const name = (id) => (id ? nameOf[id] || tName[id] || 'a teacher no longer approved' : null);
  const demand = await R.demandOf(sb);
  const { data: setting } = await sb.from('app_settings').select('value').eq('key', 'room_suggest_min').maybeSingle();
  return res.status(200).json({ rooms, teachers: teachers || [],
    proposals: (proposals || []).map((p) => Object.assign({}, p, { teacher: name(p.teacher_id), substitute: name(p.substitute_teacher_id) })),
    availability: (avail || []).map((a) => Object.assign({}, a, { teacher: tName[a.teacher_id] || 'a teacher', approved: (allTeachers || []).some((t) => t.id === a.teacher_id && t.status === 'approved') })),
    demand: Object.keys(demand).sort().map((k) => ({ product_key: k.split('|')[0], level: k.split('|')[1], learners: demand[k] })),
    suggestMin: parseInt(setting && setting.value, 10) || 5, starts: R.packStarts(today, 4) });
}
/** The owner's answer to a suggested room: { id, approve: true|false, substitute_teacher_id? }. Approving creates a
    draft room (the same checks as the form); it is published by the daily job 21 days before its start. */
async function handleAdminProposal(req, res, sb) {
  const b = body(req);
  if (!b || !P.isUuid(b.id) || typeof b.approve !== 'boolean') return fail(res, 400, 'bad_request');
  const { data: p } = await sb.from('room_proposals').select('*').eq('id', b.id).maybeSingle();
  if (!p) return fail(res, 404, 'not_found');
  if (p.status !== 'pending') return fail(res, 409, 'already_answered');
  const now = new Date().toISOString();
  if (!b.approve) {
    const { error } = await sb.from('room_proposals').update({ status: 'dismissed', decided_at: now }).eq('id', p.id);
    if (error) throw new Error('suggestion: ' + error.message);
    return res.status(200).json({ ok: true });
  }
  const made = await createRoom(sb, { product_key: p.product_key, level: p.level, starts_on: p.starts_on, schedule_days: p.schedule_days,
    schedule_time: p.schedule_time, timezone: p.timezone, teacher_id: p.teacher_id,
    substitute_teacher_id: P.isUuid(b.substitute_teacher_id) ? b.substitute_teacher_id : p.substitute_teacher_id || null });
  if (made.error) return fail(res, 400, made.error, made.detail ? { detail: made.detail } : undefined);
  const { error } = await sb.from('room_proposals').update({ status: 'approved', decided_at: now, cohort_id: made.id }).eq('id', p.id);
  if (error) throw new Error('suggestion: ' + error.message);
  return res.status(200).json({ ok: true, id: made.id, sessions: made.sessions });
}
const TIME_RE = /^([01]\d|2[0-3]):[0-5]\d$/;
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
async function handleAdminRoom(req, res, sb) {
  const b = body(req);
  if (!b) return fail(res, 400, 'bad_json');
  if (P.isUuid(b.id)) {
    const { data: r } = await sb.from('cohorts').select('*').eq('id', b.id).not('product_key', 'is', null).maybeSingle();
    if (!r) return fail(res, 404, 'room_not_found');
    const f = { updated_at: new Date().toISOString() };
    if (P.isUuid(b.teacher_id) && b.teacher_id !== r.teacher_id) Object.assign(f, { teacher_id: b.teacher_id, contract_accepted_at: null, contract_declined_at: null,
      contract_offered_at: ['open', 'running'].includes(r.room_state) ? new Date().toISOString() : null });
    if (P.isUuid(b.substitute_teacher_id)) f.substitute_teacher_id = b.substitute_teacher_id;
    const want = [f.teacher_id, f.substitute_teacher_id].filter(Boolean);
    if (want.length) {
      const { data: known } = await sb.from('teacher_profiles').select('id').in('id', want).eq('status', 'approved');
      if (!known || known.length !== want.length) return fail(res, 400, 'teacher_not_approved');
    }
    if (b.cancel === true) {
      if (!['draft', 'published', 'open'].includes(r.room_state)) return fail(res, 409, 'room_running');
      const ctx = roomCtx(sb);
      const { data: ents } = await sb.from('entitlements').select('*').eq('cohort_id', r.id).eq('status', 'pending_room');
      for (const ent of ents || []) { await E.releasePack(ctx, ent); await ctx.tell.learner(ent.user_id, 'room_cancelled', r, {}); }
      Object.assign(f, { room_state: 'cancelled', decided_at: new Date().toISOString() });
      await sb.from('sessions').update({ status: 'cancelled' }).eq('cohort_id', r.id).eq('status', 'scheduled');
    }
    const { error } = await sb.from('cohorts').update(f).eq('id', r.id);
    if (error) throw new Error('room update: ' + error.message);
    if (f.contract_offered_at) await roomCtx(sb).tell.teacher(f.teacher_id, 'contract_offer', Object.assign({}, r, f), { learners: 0 });
    return res.status(200).json({ ok: true });
  }
  const made = await createRoom(sb, b);
  if (made.error) return fail(res, 400, made.error, made.detail ? { detail: made.detail } : undefined);
  return res.status(200).json({ ok: true, id: made.id, sessions: made.sessions });
}
/** Creates a draft room with its class dates: from the admin's form, or from an approved suggestion. { id, sessions } or { error, detail } */
async function createRoom(sb, b) {
  const kind = R.PRODUCT_KIND[b.product_key];
  if (!kind) return { error: 'bad_product' };
  const K = R.KINDS[kind];
  const language = b.product_key === 'help_class' ? (['English', 'German'].includes(b.language) ? b.language : null) : R.LANGUAGE[b.product_key.slice(-2)];
  if (!language) return { error: 'bad_language' };
  if (!['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].includes(b.level)) return { error: 'bad_level' };
  if (!P.isUuid(b.teacher_id)) return { error: 'teacher_required' };
  if (b.substitute_teacher_id && (!P.isUuid(b.substitute_teacher_id) || b.substitute_teacher_id === b.teacher_id)) return { error: 'bad_substitute' };
  const want = [b.teacher_id].concat(b.substitute_teacher_id ? [b.substitute_teacher_id] : []);
  const { data: known } = await sb.from('teacher_profiles').select('id').in('id', want).eq('status', 'approved');
  if (!known || known.length !== want.length) return { error: 'teacher_not_approved' };
  if (!/^\d{4}-\d{2}-\d{2}$/.test(b.starts_on || '') || b.starts_on < R.ymd(new Date())) return { error: 'bad_start' };
  if (!TIME_RE.test(b.schedule_time || '')) return { error: 'bad_time' };
  const days = Array.isArray(b.schedule_days) && b.schedule_days.length ? b.schedule_days : K.days;
  if (!days.every((d) => WEEKDAYS.includes(d)) || new Set(days).size !== days.length) return { error: 'bad_days' };
  const tz = typeof b.timezone === 'string' && b.timezone.length < 64 ? b.timezone : 'Europe/Rome';
  try { new Intl.DateTimeFormat('en', { timeZone: tz }); } catch { return { error: 'bad_timezone' }; }
  const max = Math.min(K.max, Math.max(1, parseInt(b.max_students, 10) || K.max));
  const min = Math.min(max, Math.max(1, parseInt(b.min_learners, 10) || K.min));
  const { data: room, error } = await sb.from('cohorts').insert({
    teacher_id: b.teacher_id, substitute_teacher_id: b.substitute_teacher_id || null, language, level: b.level, goal_track: K.goal, tier: K.tier,
    max_students: max, min_learners: min, description: typeof b.description === 'string' ? b.description.slice(0, 2000) : null,
    schedule_days: days, schedule_time: b.schedule_time, timezone: tz, status: 'closed', product_key: b.product_key, room_state: 'draft',
    starts_on: b.starts_on, class_minutes: K.minutes,
  }).select('id').single();
  if (error) throw new Error('room insert: ' + error.message);
  const { data: n, error: gErr } = await sb.rpc('generate_room_sessions', { p_cohort: room.id });
  if (gErr || !n) {
    await sb.from('cohorts').delete().eq('id', room.id);
    return { error: 'no_sessions', detail: gErr ? gErr.message : 'no class dates fall on those days' };
  }
  return { id: room.id, sessions: n };
}

// ── course contracts for teachers ──
async function teacherOf(sb, user) {
  const { data } = await sb.from('teacher_profiles').select('id, full_name').eq('user_id', user.id).maybeSingle();
  return data || null;
}
async function handleContracts(req, res, sb, user) {
  const t = await teacherOf(sb, user);
  if (!t) return fail(res, 403, 'teachers_only');
  const { data, error } = await sb.from('cohorts').select('id, product_key, language, level, starts_on, schedule_days, schedule_time, timezone, room_state, class_minutes, max_students, contract_offered_at, contract_accepted_at, contract_declined_at, teacher_id, substitute_teacher_id')
    .not('product_key', 'is', null).in('room_state', ['published', 'open', 'running']).or(`teacher_id.eq.${t.id},substitute_teacher_id.eq.${t.id}`).order('starts_on');
  if (error) throw new Error('contracts: ' + error.message);
  const rooms = [];
  for (const r of data || []) {
    const { data: n } = await sb.rpc('room_seats', { p_cohort: r.id });
    rooms.push(Object.assign({}, r, { learners: n || 0, role: r.teacher_id === t.id ? 'teacher' : 'substitute' }));
  }
  return res.status(200).json({ rooms });
}
async function handleContract(req, res, sb, user) {
  const b = body(req);
  if (!b || !P.isUuid(b.cohortId) || typeof b.accept !== 'boolean') return fail(res, 400, 'bad_request');
  const t = await teacherOf(sb, user);
  if (!t) return fail(res, 403, 'teachers_only');
  const { data: r } = await sb.from('cohorts').select('*').eq('id', b.cohortId).eq('teacher_id', t.id).maybeSingle();
  if (!r || !r.contract_offered_at || !['open', 'running'].includes(r.room_state)) return fail(res, 404, 'no_offer');
  if (r.contract_accepted_at) return fail(res, 409, 'already_accepted');
  const f = b.accept ? { contract_accepted_at: new Date().toISOString(), contract_declined_at: null } : { contract_declined_at: new Date().toISOString() };
  const { error } = await sb.from('cohorts').update(f).eq('id', r.id);
  if (error) throw new Error('contract: ' + error.message);
  if (!b.accept) await roomCtx(sb).tell.owner([`${t.full_name || 'A teacher'} declined the course contract for ${r.product_key} ${r.level} from ${r.starts_on}. Choose another teacher in Admin, Classes.`]);
  return res.status(200).json({ ok: true, accepted: b.accept });
}

// ── room planning for teachers and learners ──
const ROOM_KINDS = ['level_pack', 'exam_pack', 'open_class', 'help_class'];
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const uniqueIn = (v, allowed) => Array.isArray(v) && v.length > 0 && v.length <= allowed.length && new Set(v).size === v.length && v.every((x) => allowed.includes(x));
/** A teacher's availability: GET lists theirs with the next start dates; POST adds one, or { id, remove: true }. */
async function handleAvailability(req, res, sb, user) {
  const { data: t } = await sb.from('teacher_profiles').select('id, languages, status').eq('user_id', user.id).maybeSingle();
  if (!t) return fail(res, 403, 'teachers_only');
  const today = R.ymd(new Date());
  const languages = (t.languages || []).filter((l) => l === 'English' || l === 'German');
  if (req.method === 'GET') {
    const { data, error } = await sb.from('room_availability').select('id, starts_on, kinds, language, levels, days, schedule_time, timezone, substitute').eq('teacher_id', t.id).order('starts_on');
    if (error) throw new Error('availability: ' + error.message);
    return res.status(200).json({ languages, approved: t.status === 'approved', starts: R.packStarts(today, 4), today, items: data || [] });
  }
  if (req.method !== 'POST') return fail(res, 405, 'method_not_allowed');
  const b = body(req);
  if (!b) return fail(res, 400, 'bad_json');
  if (b.remove === true) {
    if (!P.isUuid(b.id)) return fail(res, 400, 'bad_request');
    const { error } = await sb.from('room_availability').delete().eq('id', b.id).eq('teacher_id', t.id);
    if (error) throw new Error('availability: ' + error.message);
    return res.status(200).json({ ok: true });
  }
  if (t.status !== 'approved') return fail(res, 403, 'not_approved');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(b.starts_on || '') || b.starts_on < today || b.starts_on > R.addDays(today, 200)) return fail(res, 400, 'bad_start');
  if (!uniqueIn(b.kinds, ROOM_KINDS)) return fail(res, 400, 'bad_kinds');
  if (!languages.includes(b.language)) return fail(res, 400, 'bad_language');
  if (!uniqueIn(b.levels, LEVELS)) return fail(res, 400, 'bad_levels');
  if (!uniqueIn(b.days, WEEKDAYS)) return fail(res, 400, 'bad_days');
  if (!TIME_RE.test(b.schedule_time || '')) return fail(res, 400, 'bad_time');
  const tz = typeof b.timezone === 'string' && /^[A-Za-z0-9_+/-]{1,64}$/.test(b.timezone) ? b.timezone : '';
  try { new Intl.DateTimeFormat('en', { timeZone: tz }); } catch { return fail(res, 400, 'bad_timezone'); }
  if (!tz) return fail(res, 400, 'bad_timezone');
  const { data: mine } = await sb.from('room_availability').select('id').eq('teacher_id', t.id);
  if ((mine || []).length >= 30) return fail(res, 409, 'too_many');
  const { data, error } = await sb.from('room_availability').insert({ teacher_id: t.id, starts_on: b.starts_on, kinds: b.kinds, language: b.language,
    levels: b.levels, days: b.days, schedule_time: b.schedule_time, timezone: tz, substitute: b.substitute === true }).select('id').single();
  if (error) throw new Error('availability: ' + error.message);
  return res.status(200).json({ ok: true, id: data.id });
}
const plannable = (k) => !!R.PRODUCT_KIND[k] && R.PRODUCT_KIND[k] !== 'help_class';
/** The learner's standing for one product: asked to be told, and a pack reservation still without a room. */
async function handleRoomMe(req, res, sb, user) {
  const product = String((req.query && req.query.product) || '');
  if (!plannable(product)) return fail(res, 400, 'unknown_product');
  const { data: i } = await sb.from('room_interest').select('notified_at').eq('user_id', user.id).eq('product_key', product).maybeSingle();
  const { data: e } = await sb.from('entitlements').select('id').eq('user_id', user.id).eq('product_key', product).eq('status', 'pending_room').is('cohort_id', null).is('session_id', null).limit(1);
  return res.status(200).json({ product, interested: !!(i && !i.notified_at), reserved: !!(e && e.length) });
}
/** { product, on }: be told (once) when a room for this product opens at the learner's level, or stop. */
async function handleInterest(req, res, sb, user) {
  const b = body(req);
  if (!b || !plannable(b.product) || typeof b.on !== 'boolean') return fail(res, 400, 'bad_request');
  if (!b.on) {
    const { error } = await sb.from('room_interest').delete().eq('user_id', user.id).eq('product_key', b.product);
    if (error) throw new Error('interest: ' + error.message);
    return res.status(200).json({ ok: true, interested: false });
  }
  const { data: sp } = await sb.from('student_profiles').select('level').eq('user_id', user.id).maybeSingle();
  if (!sp) return fail(res, 409, 'profile_required');
  const { error } = await sb.from('room_interest').upsert({ user_id: user.id, product_key: b.product, level: LEVELS.includes(sp.level) ? sp.level : null,
    created_at: new Date().toISOString(), notified_at: null }, { onConflict: 'user_id,product_key' });
  if (error) throw new Error('interest: ' + error.message);
  return res.status(200).json({ ok: true, interested: true });
}
/** { product, cohortId }: moves the learner's room-less pack reservation into a published room (seat checked). */
async function handleAssign(req, res, sb, user) {
  const b = body(req);
  if (!b || !R.isPack(b.product) || !P.isUuid(b.cohortId)) return fail(res, 400, 'bad_request');
  const { data: ents } = await sb.from('entitlements').select('id').eq('user_id', user.id).eq('product_key', b.product).eq('status', 'pending_room').is('cohort_id', null).is('session_id', null).limit(1);
  if (!ents || !ents.length) return fail(res, 404, 'no_reservation');
  const problem = await R.seatProblem(sb, b.product, b.cohortId, null);
  if (problem) return fail(res, 409, problem);
  const { error } = await sb.from('entitlements').update({ cohort_id: b.cohortId, updated_at: new Date().toISOString() }).eq('id', ents[0].id).is('cohort_id', null);
  if (error) throw new Error('assign: ' + error.message);
  await sb.from('room_interest').delete().eq('user_id', user.id).eq('product_key', b.product);
  return res.status(200).json({ ok: true });
}

// ── emails the room steps send ──
function roomCtx(sb) {
  const send = async (to, subject, content) => { if (to && process.env.RESEND_API_KEY) await mail.sendEmail(Object.assign({ to, subject }, content)); };
  const roomText = (r, lang) => {
    const kindKey = { level_pack: 'rooms.kind_level', exam_pack: 'rooms.kind_exam', open_class: 'rooms.kind_open', help_class: 'rooms.kind_help' }[R.PRODUCT_KIND[r.product_key]] || 'rooms.kind_level';
    return { room: L.say(lang, kindKey, { class: L.className(r.language, r.level, lang) }), start: L.day(r.starts_on + 'T12:00:00Z', lang),
      days: L.weekdays(r.schedule_days || [], lang), time: String(r.schedule_time || '').slice(0, 5), zone: r.timezone };
  };
  const email = (lang, k, vars, button, name) => mail.renderEmail({ hero: 'class', lang, preheader: L.say(lang, `${k}.preheader`, vars), heading: L.say(lang, `${k}.heading`, vars),
    blocks: [{ p: L.hello(lang, name) }, { p: L.html(lang, `${k}.body`, vars) }, { p: L.html(lang, `${k}.body2`, vars) }].concat(button ? [{ button }] : []),
    footer: L.html(lang, 'rooms.footer', vars) });
  const learnerOf = async (userId) => {
    const { data: u } = await sb.auth.admin.getUserById(userId);
    const { data: sp } = await sb.from('student_profiles').select('full_name, ui_lang').eq('user_id', userId).maybeSingle();
    return { to: u && u.user && u.user.email, lang: (sp && sp.ui_lang) || 'en', name: sp && sp.full_name };
  };
  return {
    sb, stripe, markerSecret: P.markerSecret(process.env),
    notify: {
      // A room's first-day payment that failed or needs the bank's check: the learner is told how to pay
      paymentFailed: async (userId) => {
        const p = await learnerOf(userId), lang = p.lang;
        await send(p.to, L.say(lang, 'pay_failed.subject'), mail.renderEmail({ hero: 'payment', lang, preheader: L.say(lang, 'pay_failed.preheader'), heading: L.say(lang, 'pay_failed.heading'),
          blocks: [{ p: L.hello(lang, p.name) }, { p: L.html(lang, 'pay_failed.body') }, { p: L.html(lang, 'pay_failed.body2') },
            { button: { label: L.say(lang, 'pay_failed.button'), href: `${mail.SITE}/app#/settings` } }], footer: L.html(lang, 'pay_failed.footer') }));
      },
      owner: async () => {},
    },
    tell: {
      learner: async (userId, kind, room) => {
        const p = await learnerOf(userId), k = kind, vars = roomText(room, p.lang);
        const href = `${mail.SITE}/app#/settings/plans` + (k === 'room_published' ? `/pick/${room.product_key}/month` : '');
        await send(p.to, L.say(p.lang, `${k}.subject`, vars), email(p.lang, k, vars, { label: L.say(p.lang, `${k}.button`), href }, p.name));
      },
      teacher: async (teacherId, kind, room, extra) => {
        if (!teacherId) return;
        const { data: t } = await sb.from('teacher_profiles').select('user_id, full_name, ui_lang').eq('id', teacherId).maybeSingle();
        if (!t) return;
        const { data: u } = await sb.auth.admin.getUserById(t.user_id);
        const lang = t.ui_lang || 'en', k = kind, vars = Object.assign(roomText(room, lang), { learners: String((extra && extra.learners) || 0) });
        await send(u && u.user && u.user.email, L.say(lang, `${k}.subject`, vars), email(lang, k, vars, kind === 'contract_offer' ? { label: L.say(lang, `${k}.button`), href: `${mail.SITE}/app/teach#/classes` } : null, t.full_name));
      },
      founding: async (userId, until) => {
        const p = await learnerOf(userId), lang = p.lang, vars = { date: L.day(until, lang) };
        await send(p.to, L.say(lang, 'founding_notice.subject', vars), mail.renderEmail({ hero: 'update', lang, preheader: L.say(lang, 'founding_notice.preheader', vars),
          heading: L.say(lang, 'founding_notice.heading', vars), blocks: [{ p: L.hello(lang, p.name) }, { p: L.html(lang, 'founding_notice.body', vars) },
            { p: L.html(lang, 'founding_notice.body2', vars) }, { button: { label: L.say(lang, 'founding_notice.button'), href: `${mail.SITE}/app#/settings/plans` } }] }));
      },
      owner: async (lines) => {
        const to = process.env.CONTACT_EMAIL || 'bchysf@gmail.com';
        await send(to, 'Alimun rooms: needs your attention', mail.renderEmail({ hero: 'class', lang: 'en', preheader: 'Rooms that need a decision', heading: 'Rooms that need a decision',
          blocks: lines.map((l) => ({ p: mail.esc(l) })) }));
      },
    },
  };
}

async function handleCronRooms(req, res, sb) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.authorization !== 'Bearer ' + secret) return fail(res, 401, 'unauthorized');
  try {
    const out = await R.runRoomJob(roomCtx(sb), new Date());
    await recordRun(sb, 'vercel:cron-rooms', true, out);
    return res.status(200).json(out);
  } catch (e) {
    await recordRun(sb, 'vercel:cron-rooms', false, { error: String(e && e.message) });
    throw e;
  }
}

// ── finance (step 8) ──
async function handleCronFinance(req, res, sb) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.authorization !== 'Bearer ' + secret) return fail(res, 401, 'unauthorized');
  try {
    const out = await F.dailyJob(roomCtx(sb), new Date());
    await recordRun(sb, 'vercel:cron-finance', true, out);
    return res.status(200).json(out);
  } catch (e) {
    await recordRun(sb, 'vercel:cron-finance', false, { error: String(e && e.message) });
    throw e;
  }
}
/** The owner's acquisition spend: { month: 'YYYY-MM', channel, amount_eur, note? } (one row per month and channel), or { id, remove: true } */
async function handleAdminSpend(req, res, sb) {
  const b = body(req);
  if (!b) return fail(res, 400, 'bad_json');
  if (b.remove === true && Number.isInteger(b.id)) {
    const { error } = await sb.from('marketing_spend').delete().eq('id', b.id);
    if (error) throw new Error('spend delete: ' + error.message);
    return res.status(200).json({ ok: true });
  }
  const month = /^\d{4}-\d{2}$/.test(b.month || '') ? b.month + '-01' : null;
  const channel = typeof b.channel === 'string' ? b.channel.trim().toLowerCase().slice(0, 60) : '';
  const amount = Number(b.amount_eur);
  if (!month || !channel || !Number.isFinite(amount) || amount < 0 || amount > 10000000) return fail(res, 400, 'bad_spend');
  const { error } = await sb.from('marketing_spend').upsert({ month, channel, amount_eur: Math.round(amount * 100) / 100,
    note: typeof b.note === 'string' ? b.note.slice(0, 300) : null }, { onConflict: 'month,channel' });
  if (error) throw new Error('spend: ' + error.message);
  return res.status(200).json({ ok: true });
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
    if (action === 'cron-rooms') return await handleCronRooms(req, res, sb);
    if (action === 'cron-finance') return await handleCronFinance(req, res, sb);
    if (action === 'admin-figures' || action === 'admin-spend') {
      const admin = await userOf(req, sb);
      if (!admin) return fail(res, 401, 'sign_in_required');
      if (!admin.app_metadata || admin.app_metadata.role !== 'admin') return fail(res, 403, 'admins_only');
      if (action === 'admin-figures' && req.method === 'GET') return res.status(200).json(await F.figures(roomCtx(sb), new Date()));
      if (action === 'admin-spend' && req.method === 'POST') return await handleAdminSpend(req, res, sb);
      return fail(res, 405, 'method_not_allowed');
    }
    if (action === 'rooms') {
      if (req.method !== 'GET') return fail(res, 405, 'method_not_allowed');
      return await handleRooms(req, res, sb);
    }
    if (action === 'admin-rooms' || action === 'admin-room' || action === 'admin-proposal') {
      const admin = await userOf(req, sb);
      if (!admin) return fail(res, 401, 'sign_in_required');
      if (!admin.app_metadata || admin.app_metadata.role !== 'admin') return fail(res, 403, 'admins_only');
      if (action === 'admin-rooms' && req.method === 'GET') return await handleAdminRooms(req, res, sb);
      if (action === 'admin-room' && req.method === 'POST') return await handleAdminRoom(req, res, sb);
      if (action === 'admin-proposal' && req.method === 'POST') return await handleAdminProposal(req, res, sb);
      return fail(res, 405, 'method_not_allowed');
    }
    if (action === 'contracts' || action === 'contract') {
      const teacher = await userOf(req, sb);
      if (!teacher) return fail(res, 401, 'sign_in_required');
      if (action === 'contracts' && req.method === 'GET') return await handleContracts(req, res, sb, teacher);
      if (action === 'contract' && req.method === 'POST') return await handleContract(req, res, sb, teacher);
      return fail(res, 405, 'method_not_allowed');
    }
    if (action === 'admin-launch-email') {
      const me = await userOf(req, sb);
      if (!me) return fail(res, 401, 'sign_in_required');
      if (!me.app_metadata || me.app_metadata.role !== 'admin') return fail(res, 403, 'admins_only');
      if (req.method !== 'POST') return fail(res, 405, 'method_not_allowed');
      const b = body(req) || {};
      const out = await LAUNCH_MAIL.run(sb, String(b.mode || ''), { confirm: b.confirm, only: b.only, ownerEmail: me.email });
      return out.error ? fail(res, 409, out.error, out) : res.status(200).json(out);
    }
    if (action === 'launch' || action === 'launch-register') {
      const me = await userOf(req, sb);
      if (!me) return fail(res, 401, 'sign_in_required');
      if (action === 'launch' && req.method === 'GET') return res.status(200).json(await LAUNCH.info(sb, me));
      if (action === 'launch-register' && req.method === 'POST') {
        const r = await LAUNCH.register(sb, me);
        return r.error ? fail(res, r.status, r.error) : res.status(200).json(r);
      }
      return fail(res, 405, 'method_not_allowed');
    }
    if (['availability', 'room-me', 'interest', 'assign'].includes(action)) {
      const me = await userOf(req, sb);
      if (!me) return fail(res, 401, 'sign_in_required');
      if (action === 'availability') return await handleAvailability(req, res, sb, me);
      if (action === 'room-me' && req.method === 'GET') return await handleRoomMe(req, res, sb, me);
      if (action === 'interest' && req.method === 'POST') return await handleInterest(req, res, sb, me);
      if (action === 'assign' && req.method === 'POST') return await handleAssign(req, res, sb, me);
      return fail(res, 405, 'method_not_allowed');
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
