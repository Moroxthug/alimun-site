// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// Pricing engine rules (api/_lib/pricing.js) and the card-first checkout (api/pricing.js) against an in-memory
// database and a fake Stripe.
const test = require('node:test');
const assert = require('node:assert');
const path = require('path');
const P = require('../../api/_lib/pricing.js');

const NOW = new Date('2026-11-20T12:00:00Z');
const OPEN = { founding_closes_at: '2027-01-01T00:00:00Z', founding_cap: '500', founding_count: '12' };

test('band: card country sets it; up at once, down only after the 90 days', () => {
  assert.deepStrictEqual(P.resolveBand('B', null, NOW), { band: 'B', change: true });
  assert.deepStrictEqual(P.resolveBand('A', { band: 'A' }, NOW), { band: 'A', change: false });
  assert.deepStrictEqual(P.resolveBand('A', { band: 'B', band_change_allowed_at: '2027-02-01T00:00:00Z' }, NOW), { band: 'A', change: true });
  assert.deepStrictEqual(P.resolveBand('B', { band: 'A', band_change_allowed_at: '2027-02-01T00:00:00Z' }, NOW), { band: 'A', change: false });
  assert.deepStrictEqual(P.resolveBand('B', { band: 'A', band_change_allowed_at: '2026-11-01T00:00:00Z' }, NOW), { band: 'B', change: true });
  assert.deepStrictEqual(P.resolveBand('B', { band: 'A', band_change_allowed_at: null }, NOW), { band: 'B', change: true });
});

test('currency: the card country\'s when priced, else EUR', () => {
  assert.strictEqual(P.chooseCurrency('mad', ['eur', 'usd', 'mad']), 'mad');
  assert.strictEqual(P.chooseCurrency('mad', ['eur', 'gbp', 'usd']), 'eur');
  assert.strictEqual(P.chooseCurrency(null, ['eur']), 'eur');
  assert.strictEqual(P.chooseCurrency('cad', ['cad']), 'cad');
});

test('countries the table does not list are Band B in USD', () => {
  assert.deepStrictEqual(P.countryRow(null, 'ZZ'), { country: 'ZZ', band: 'B', currency: 'usd', tax_inclusive: true });
  const fr = { country: 'FR', band: 'A', currency: 'eur', tax_inclusive: true };
  assert.strictEqual(P.countryRow(fr, 'FR'), fr);
});

test('founding: only with a founding price, before the date and under the cap, or while a lock runs', () => {
  assert.deepStrictEqual(P.chooseVariant({ hasFoundingPrice: false, settings: OPEN, now: NOW }), { variant: 'list', claim: false });
  assert.deepStrictEqual(P.chooseVariant({ hasFoundingPrice: true, settings: OPEN, now: NOW }), { variant: 'founding', claim: true });
  assert.deepStrictEqual(P.chooseVariant({ hasFoundingPrice: true, settings: { ...OPEN, founding_count: '500' }, now: NOW }), { variant: 'list', claim: false });
  assert.deepStrictEqual(P.chooseVariant({ hasFoundingPrice: true, settings: OPEN, now: new Date('2027-01-01T00:00:00Z') }), { variant: 'list', claim: false });
  const held = { founding: true, founding_until: '2027-11-01T00:00:00Z' };
  assert.deepStrictEqual(P.chooseVariant({ hasFoundingPrice: true, pricing: held, settings: { ...OPEN, founding_count: '500' }, now: NOW }), { variant: 'founding', claim: false });
  assert.strictEqual(P.foundingHeld({ founding: true, founding_until: '2026-11-01T00:00:00Z' }, NOW), false);
});

test('requests: known product, allowed cadence, on sale', () => {
  const sale = P.onSale('level_en, minutes_30,nonsense');
  assert.deepStrictEqual(sale, ['level_en', 'minutes_30']);
  assert.strictEqual(P.checkRequest('level_en', 'upfront', sale), null);
  assert.strictEqual(P.checkRequest('level_en', 'year', sale), 'bad_cadence');
  assert.strictEqual(P.checkRequest('app', 'month', sale), 'not_on_sale');
  assert.strictEqual(P.checkRequest('b2b_en', 'month', sale), 'unknown_product');
  assert.strictEqual(P.checkRequest('__proto__', 'month', sale), 'unknown_product');
});

test('quotes: owner, unused, not expired', () => {
  const q = { user_id: 'u1', used_at: null, expires_at: '2026-11-20T12:10:00Z' };
  assert.strictEqual(P.quoteProblem(q, 'u1', NOW), null);
  assert.strictEqual(P.quoteProblem(q, 'u2', NOW), 'quote_not_found');
  assert.strictEqual(P.quoteProblem({ ...q, used_at: 'x' }, 'u1', NOW), 'quote_used');
  assert.strictEqual(P.quoteProblem(q, 'u1', new Date('2026-11-20T12:10:00Z')), 'quote_expired');
});

test('trial markers: one Gmail inbox is one email', () => {
  assert.strictEqual(P.normaliseEmail(' A.Li.Mun+x@GoogleMail.com '), 'alimun@gmail.com');
  assert.strictEqual(P.normaliseEmail('a.b+c@example.com'), 'a.b@example.com');
  const s = P.markerSecret({ SUPABASE_SERVICE_ROLE_KEY: 'k' });
  assert.ok(s && s !== 'k');
  assert.strictEqual(P.markerSecret({ PRICING_HMAC_SECRET: 'p', SUPABASE_SERVICE_ROLE_KEY: 'k' }), 'p');
  assert.strictEqual(P.markerHash('email', 'a@b.c', s), P.markerHash('email', 'a@b.c', s));
  assert.notStrictEqual(P.markerHash('email', 'a@b.c', s), P.markerHash('card', 'a@b.c', s));
});

test('display book: the band\'s rows in one currency', () => {
  const rows = [
    { product_key: 'app', band: 'B', variant: 'list', cadence: 'month', currency: 'eur', unit_amount: 499 },
    { product_key: 'app', band: 'B', variant: 'list', cadence: 'month', currency: 'mad', unit_amount: 5490 },
    { product_key: 'app', band: 'A', variant: 'list', cadence: 'month', currency: 'mad', unit_amount: 1 },
    { product_key: 'b2b_en', band: 'B', variant: 'list', cadence: 'month', currency: 'eur', unit_amount: 7900 },
  ];
  assert.deepStrictEqual(P.displayBook(rows, 'B', 'mad'), { app: { month: { list: { amount: 5490, currency: 'mad' } } } });
  assert.deepStrictEqual(P.displayBook(rows, 'B', 'gbp'), { app: { month: { list: { amount: 499, currency: 'eur' } } } });
});

// ---------- The handler, with an in-memory database and a fake Stripe ----------

const { fakeDb } = require('./_fake-db.js');

function fakeStripe(calls, opts) {
  const pm = { id: 'pm_1', customer: 'cus_1', card: { country: opts.cardCountry || 'MA', fingerprint: 'fp1' }, billing_details: { address: { country: 'MA' } } };
  return {
    customers: { search: async () => ({ data: [] }), create: async () => { calls.push('customers.create'); return { id: 'cus_1' }; }, update: async (id, p) => { calls.push(['customers.update', p]); return {}; } },
    setupIntents: {
      create: async (p) => { calls.push(['setupIntents.create', p]); return { id: 'seti_12345678', client_secret: 'seti_secret' }; },
      retrieve: async () => ({ id: 'seti_12345678', customer: 'cus_1', status: 'succeeded', payment_method: pm }),
    },
    paymentMethods: { retrieve: async () => pm },
    subscriptions: { create: async (p) => { calls.push(['subscriptions.create', p]); return { id: 'sub_1', status: 'active', current_period_end: 1797000000, latest_invoice: { id: 'in_s', amount_paid: 499 } }; }, cancel: async () => ({}) },
    invoices: {
      create: async (p) => { calls.push(['invoices.create', p]); return { id: 'in_1' }; },
      finalizeInvoice: async () => ({}),
      pay: async () => { calls.push('invoices.pay'); if (opts.payFails) { const e = new Error('needs action'); e.type = 'StripeCardError'; throw e; } return { id: 'in_1', status: 'paid', amount_paid: 299 }; },
      retrieve: async () => ({ id: 'in_1', status: opts.confirmPaid ? 'paid' : 'open', amount_paid: 299, payment_intent: { status: 'requires_action', client_secret: 'pi_secret' } }),
      voidInvoice: async () => ({}),
    },
    invoiceItems: { create: async (p) => { calls.push(['invoiceItems.create', p]); return {}; } },
  };
}

function load(tables, rpcs, stripeOpts) {
  const calls = [];
  const sbPath = require.resolve('@supabase/supabase-js', { paths: [path.join(__dirname, '../../api')] });
  const stPath = require.resolve('stripe', { paths: [path.join(__dirname, '../../api')] });
  const handlerPath = require.resolve('../../api/pricing.js');
  delete require.cache[handlerPath];
  const db = fakeDb(tables, rpcs);
  require.cache[sbPath] = { id: sbPath, filename: sbPath, loaded: true, exports: { createClient: () => db } };
  require.cache[stPath] = { id: stPath, filename: stPath, loaded: true, exports: () => fakeStripe(calls, stripeOpts || {}) };
  process.env.STRIPE_SECRET_KEY = 'sk_test_x';
  process.env.SUPABASE_URL = 'https://x.supabase.co';
  process.env.SUPABASE_SERVICE_ROLE_KEY = 'service';
  const handler = require(handlerPath);
  return { handler, calls, tables };
}

function call(handler, action, body, method) {
  return new Promise((resolve) => {
    const res = { code: 200, headers: {}, setHeader(k, v) { this.headers[k] = v; }, status(c) { this.code = c; return this; },
      json(j) { resolve({ code: this.code, body: j }); return this; }, end() { resolve({ code: this.code }); return this; } };
    handler({ method: method || 'POST', query: { action }, headers: { authorization: 'Bearer good', 'x-vercel-ip-country': 'MA' }, body }, res);
  });
}

// The rule of public.sync_access (supabase/migrations/202611121300_pricing_access.sql), for the in-memory database
const RANK = { app: 1, open_en: 2, open_de: 2, level_en: 3, level_de: 3, exam_en: 4, exam_de: 4 };
const TIER = { 1: 'app', 2: 'open', 3: 'pack', 4: 'exam' };
function syncAccess(tables, user) {
  const now = Date.now(), mine = tables.entitlements.filter((e) => e.user_id === user && RANK[e.product_key]);
  const live = mine.filter((e) => e.status === 'active' && (!e.ends_at || Date.parse(e.ends_at) > now));
  const sp = tables.student_profiles.find((r) => r.user_id === user);
  if (live.length) { sp.tier = TIER[Math.max(...live.map((e) => RANK[e.product_key]))]; sp.stripe_subscription_status = 'active'; return { data: sp.tier, error: null }; }
  if (mine.some((e) => e.status !== 'pending_room') && ['app', 'open', 'pack', 'exam'].includes(sp.tier)) {
    sp.stripe_subscription_status = mine.some((e) => e.status === 'paused') ? 'past_due' : 'cancelled';
  }
  return { data: null, error: null };
}

function world() {
  const book = [];
  const add = (product, band, variant, cadence, currency, amount) => book.push({ product_key: product, band, variant, cadence, currency, unit_amount: amount, stripe_price_id: `price_${product}_${band}_${variant}_${cadence}`, active: true });
  add('level_en', 'B', 'list', 'upfront', 'eur', 16999); add('level_en', 'B', 'list', 'upfront', 'mad', 211900);
  add('level_en', 'B', 'founding', 'upfront', 'eur', 14999); add('level_en', 'B', 'founding', 'upfront', 'mad', 189900);
  add('level_en', 'A', 'list', 'upfront', 'eur', 19900); add('level_en', 'A', 'founding', 'upfront', 'eur', 17900);
  add('minutes_30', 'B', 'list', 'once', 'eur', 299); add('minutes_30', 'B', 'list', 'once', 'mad', 3290);
  add('app', 'B', 'list', 'month', 'mad', 5490);
  const tables = {
    app_settings: [
      { key: 'founding_closes_at', value: '2099-01-01T00:00:00Z' }, { key: 'founding_cap', value: '500' }, { key: 'founding_count', value: '0' },
      { key: 'pricing_on_sale', value: 'level_en,minutes_30' },
    ],
    country_bands: [{ country: 'MA', band: 'B', currency: 'mad', tax_inclusive: true }, { country: 'FR', band: 'A', currency: 'eur', tax_inclusive: true }],
    price_book: book,
    customer_pricing: [],
    student_profiles: [{ id: 'sp1', user_id: 'u1', full_name: 'L', stripe_customer_id: 'cus_1' }],
    products: [{ product_key: 'level_en', voice_minutes_month: 120 }, { product_key: 'minutes_30', voice_minutes_month: 30 }],
    entitlements: [], quotes: [], trial_markers: [],
  };
  const rpcs = {
    set_band: (a) => { tables.customer_pricing.push({ user_id: a.p_user, band: a.p_band, card_country: a.p_card_country, band_change_allowed_at: '2027-02-18T00:00:00Z' }); return { data: a.p_band, error: null }; },
    claim_founding_seat: (a) => { const cp = tables.customer_pricing.find((r) => r.user_id === a.p_user); Object.assign(cp, { founding: true, founding_seq: 1, founding_until: '2027-11-20T00:00:00Z' }); return { data: 1, error: null }; },
    tutor_add_credit: (a) => { tables.ledger = (tables.ledger || []).concat(a); return { data: a.p_seconds, error: null }; },
    sync_access: (a) => syncAccess(tables, a.p_user),
  };
  return { tables, rpcs };
}

test('checkout: a Moroccan card reserves a level pack at the founding MAD price, nothing charged', async () => {
  const { tables, rpcs } = world();
  const { handler, calls } = load(tables, rpcs);
  const quote = await call(handler, 'quote', { setupIntentId: 'seti_12345678', productKey: 'level_en', cadence: 'upfront' });
  assert.strictEqual(quote.code, 200, JSON.stringify(quote.body));
  assert.strictEqual(quote.body.band, 'B');
  assert.strictEqual(quote.body.currency, 'mad');
  assert.strictEqual(quote.body.amount, 189900);
  assert.strictEqual(quote.body.listAmount, 211900);
  assert.strictEqual(quote.body.founding, true);
  assert.strictEqual(quote.body.charge, 'reserve');

  const buy = await call(handler, 'purchase', { quoteId: quote.body.quoteId });
  assert.strictEqual(buy.code, 200, JSON.stringify(buy.body));
  assert.strictEqual(buy.body.reserved, true);
  assert.ok(!calls.some((c) => Array.isArray(c) && /^(subscriptions|invoices)\./.test(c[0])), 'nothing charged');
  assert.ok(calls.some((c) => Array.isArray(c) && c[0] === 'customers.update' && c[1].invoice_settings), 'card saved for the room');
  const ent = tables.entitlements[0];
  assert.strictEqual(ent.status, 'pending_room');
  assert.strictEqual(ent.variant, 'founding');
  assert.strictEqual(ent.currency, 'mad');
  assert.strictEqual(ent.voice_minutes_month, 120);
  assert.strictEqual(tables.customer_pricing[0].band, 'B');
  assert.strictEqual(tables.customer_pricing[0].founding, true);

  const again = await call(handler, 'purchase', { quoteId: quote.body.quoteId });
  assert.strictEqual(again.code, 409);
  assert.strictEqual(again.body.error, 'quote_used');
  const second = await call(handler, 'quote', { setupIntentId: 'seti_12345678', productKey: 'level_en', cadence: 'upfront' });
  assert.strictEqual(second.body.error, 'already_have');
});

test('checkout: a French card on a Band B account moves the learner up to Band A', async () => {
  const { tables, rpcs } = world();
  tables.customer_pricing.push({ user_id: 'u1', band: 'B', band_change_allowed_at: '2027-02-18T00:00:00Z' });
  const { handler } = load(tables, rpcs, { cardCountry: 'FR' });
  const quote = await call(handler, 'quote', { setupIntentId: 'seti_12345678', productKey: 'level_en', cadence: 'upfront' });
  assert.strictEqual(quote.body.band, 'A');
  assert.strictEqual(quote.body.currency, 'eur');
  assert.strictEqual(quote.body.amount, 17900);
});

test('checkout: voice minutes are paid on an invoice in MAD and added to the tutor time', async () => {
  const { tables, rpcs } = world();
  const { handler, calls } = load(tables, rpcs);
  const quote = await call(handler, 'quote', { setupIntentId: 'seti_12345678', productKey: 'minutes_30', cadence: 'once' });
  assert.strictEqual(quote.body.amount, 3290);
  const buy = await call(handler, 'purchase', { quoteId: quote.body.quoteId });
  assert.strictEqual(buy.code, 200, JSON.stringify(buy.body));
  const item = calls.find((c) => Array.isArray(c) && c[0] === 'invoiceItems.create')[1];
  assert.strictEqual(item.price, 'price_minutes_30_B_list_once');
  assert.strictEqual(item.currency, 'mad');
  assert.strictEqual(tables.ledger[0].p_seconds, 1800);
  assert.strictEqual(tables.ledger[0].p_stripe_session, 'in_1');
  assert.ok(tables.quotes[0].used_at);
});

test('checkout: a payment the bank must confirm returns the confirmation, then confirm records it', async () => {
  const { tables, rpcs } = world();
  let r = load(tables, rpcs, { payFails: true });
  const quote = await call(r.handler, 'quote', { setupIntentId: 'seti_12345678', productKey: 'minutes_30', cadence: 'once' });
  const buy = await call(r.handler, 'purchase', { quoteId: quote.body.quoteId });
  assert.deepStrictEqual(buy.body, { next: 'pi_secret' });
  assert.ok(!tables.ledger, 'nothing added before the bank confirms');
  r = load(tables, rpcs, { confirmPaid: true });
  const ok = await call(r.handler, 'confirm', { quoteId: quote.body.quoteId });
  assert.strictEqual(ok.body.done, true);
  assert.strictEqual(tables.ledger.length, 1);
});

test('checkout: products not on sale, unknown products and signed-out callers are refused', async () => {
  const { tables, rpcs } = world();
  const { handler } = load(tables, rpcs);
  assert.strictEqual((await call(handler, 'quote', { setupIntentId: 'seti_12345678', productKey: 'app', cadence: 'month' })).body.error, 'not_on_sale');
  assert.strictEqual((await call(handler, 'quote', { setupIntentId: 'seti_12345678', productKey: 'b2b_en', cadence: 'month' })).body.error, 'unknown_product');
  assert.strictEqual((await call(handler, 'quote', { setupIntentId: 'nope', productKey: 'level_en', cadence: 'upfront' })).body.error, 'bad_setup_intent');
  const anon = await new Promise((resolve) => handler({ method: 'POST', query: { action: 'quote' }, headers: {}, body: {} },
    { setHeader() {}, status(c) { this.c = c; return this; }, json(j) { resolve({ code: this.c, body: j }); } }));
  assert.strictEqual(anon.code, 401);
});

test('display: prices for the visitor\'s country, founding while open', async () => {
  const { tables, rpcs } = world();
  const { handler } = load(tables, rpcs);
  const d = await new Promise((resolve) => handler({ method: 'GET', query: { action: 'display' }, headers: { 'x-vercel-ip-country': 'MA' } },
    { setHeader() {}, status(c) { this.c = c; return this; }, json(j) { resolve({ code: this.c, body: j }); } }));
  assert.strictEqual(d.code, 200);
  assert.strictEqual(d.body.band, 'B');
  assert.strictEqual(d.body.currency, 'mad');
  assert.strictEqual(d.body.founding, true);
  assert.deepStrictEqual(d.body.onSale, ['level_en', 'minutes_30']);
  assert.deepStrictEqual(d.body.prices.level_en.upfront.founding, { amount: 189900, currency: 'mad' });
});

// ---------- Step 5: Stripe events and room-day charges (api/_lib/entitlements.js) ----------
const E = require('../../api/_lib/entitlements.js');

function ctxOf(tables, rpcs, extra) {
  const told = [], calls = [];
  const stripe = Object.assign({
    subscriptions: { retrieve: async (id) => (extra.subs || {})[id], cancel: async (id) => { calls.push(['sub.cancel', id]); return {}; } },
    subscriptionSchedules: { create: async (p, o) => { calls.push(['schedules.create', p, o]); return { id: 'sub_sched_1', subscription: null }; }, cancel: async (id) => { calls.push(['schedules.cancel', id]); } },
    paymentIntents: { create: async (p, o) => { calls.push(['pi.create', p, o]); if (extra.piError) throw extra.piError; return { id: 'pi_1', status: 'succeeded', amount: p.amount, amount_received: p.amount, metadata: p.metadata }; } },
    charges: { retrieve: async () => extra.charge },
    paymentMethods: { retrieve: async () => ({ card: { fingerprint: 'fp1' } }) },
  }, extra.stripe || {});
  const ctx = { sb: fakeDb(tables, rpcs), stripe, markerSecret: 's',
    notify: { paymentFailed: async (u, info) => { told.push(['learner', u, info]); }, owner: async (subj) => { told.push(['owner', subj]); } } };
  return { ctx, told, calls };
}
const ev = (type, object) => ({ id: 'evt_' + Math.random(), type, data: { object } });
const SUB = (status, extra) => Object.assign({ id: 'sub_1', status, customer: 'cus_1', current_period_start: 1794000000, current_period_end: 1796600000,
  metadata: { type: 'pricing_v2', quote_id: null }, latest_invoice: 'in_s' }, extra || {});

async function boughtApp() {
  const { tables, rpcs } = world();
  tables.app_settings.find((r) => r.key === 'pricing_on_sale').value = 'app,level_en,minutes_30';
  tables.products.push({ product_key: 'app', voice_minutes_month: 60 });
  const { handler } = load(tables, rpcs);
  const quote = await call(handler, 'quote', { setupIntentId: 'seti_12345678', productKey: 'app', cadence: 'month' });
  const buy = await call(handler, 'purchase', { quoteId: quote.body.quoteId });
  assert.strictEqual(buy.code, 200, JSON.stringify(buy.body));
  return { tables, rpcs, quoteId: quote.body.quoteId };
}

test('access: buying the app makes the learner a paying app learner with its minutes', async () => {
  const { tables } = await boughtApp();
  const ent = tables.entitlements[0];
  assert.strictEqual(ent.status, 'active');
  assert.strictEqual(ent.stripe_subscription_id, 'sub_1');
  assert.strictEqual(ent.voice_minutes_month, 60);
  assert.strictEqual(ent.last_invoice_id, 'in_s');
  assert.strictEqual(tables.student_profiles[0].tier, 'app');
  assert.strictEqual(tables.student_profiles[0].stripe_subscription_status, 'active');
});

test('events: only the new checkout\'s events are taken; old plan events go to the old code', async () => {
  const { tables, rpcs } = world();
  const { ctx } = ctxOf(tables, rpcs, {});
  assert.strictEqual(await E.isPricingEvent(ctx, ev('customer.subscription.updated', SUB('active'))), true);
  assert.strictEqual(await E.isPricingEvent(ctx, ev('customer.subscription.updated', SUB('active', { metadata: { tier: 'focused' } }))), false);
  assert.strictEqual(await E.isPricingEvent(ctx, ev('invoice.paid', { id: 'in_x', subscription_details: { metadata: { type: 'pricing_v2' } } })), true);
  assert.strictEqual(await E.isPricingEvent(ctx, ev('invoice.paid', { id: 'in_y', subscription: 'sub_old', metadata: {} })), false);
  assert.strictEqual(await E.isPricingEvent(ctx, ev('charge.refunded', { id: 'ch_1', invoice: 'in_nobody' })), false);
});

test('renewal: a paid month moves the end date and adds the amount once; a failed one holds the seat and tells the learner', async () => {
  const { tables, rpcs } = await boughtApp();
  const sub = SUB('active', { current_period_end: 1799200000 });
  const { ctx, told } = ctxOf(tables, rpcs, { subs: { sub_1: sub } });
  const inv = { id: 'in_2', subscription: 'sub_1', amount_paid: 5490, subscription_details: { metadata: { type: 'pricing_v2' } },
    lines: { data: [{ period: { start: 1796600000, end: 1799200000 } }] }, hosted_invoice_url: 'https://invoice.stripe.com/i/x' };
  await E.processEvent(ctx, ev('invoice.paid', inv));
  await E.processEvent(ctx, ev('invoice.paid', inv));
  const ent = tables.entitlements[0];
  assert.strictEqual(ent.amount_paid, 499 + 5490);
  assert.strictEqual(ent.ends_at, new Date(1799200000 * 1000).toISOString());

  await E.processEvent(ctx, ev('invoice.payment_failed', Object.assign({}, inv, { id: 'in_3' })));
  assert.ok(ent.payment_failed_at);
  assert.strictEqual(ent.status, 'active', 'the seat is held for 3 days');
  assert.strictEqual(told[0][0], 'learner');
  assert.strictEqual(told[0][2].link, 'https://invoice.stripe.com/i/x');
  await E.processEvent(ctx, ev('invoice.paid', Object.assign({}, inv, { id: 'in_3' })));
  assert.strictEqual(ent.payment_failed_at, null);
});

test('cancellation and refunds end access; a dispute pauses it, tells the owner and flags the card', async () => {
  let w = await boughtApp();
  let { ctx } = ctxOf(w.tables, w.rpcs, {});
  await E.processEvent(ctx, ev('customer.subscription.deleted', SUB('canceled', { ended_at: 1796600000 })));
  assert.strictEqual(w.tables.entitlements[0].status, 'ended');
  assert.strictEqual(w.tables.student_profiles[0].stripe_subscription_status, 'cancelled');

  w = await boughtApp();
  const r = ctxOf(w.tables, w.rpcs, {});
  await E.processEvent(r.ctx, ev('charge.refunded', { id: 'ch_1', invoice: 'in_s', amount: 499, amount_refunded: 499, refunded: true }));
  assert.strictEqual(w.tables.entitlements[0].status, 'refunded');
  assert.deepStrictEqual(r.calls[0], ['sub.cancel', 'sub_1']);

  w = await boughtApp();
  const d = ctxOf(w.tables, w.rpcs, { charge: { id: 'ch_2', invoice: 'in_s', payment_method_details: { card: { fingerprint: 'fp9' } } } });
  assert.strictEqual(await E.isPricingEvent(d.ctx, ev('charge.dispute.created', { id: 'dp_1', charge: 'ch_2', amount: 499, currency: 'mad', reason: 'fraudulent' })), true);
  await E.processEvent(d.ctx, ev('charge.dispute.created', { id: 'dp_1', charge: 'ch_2', amount: 499, currency: 'mad', reason: 'fraudulent' }));
  assert.strictEqual(w.tables.entitlements[0].status, 'paused');
  assert.strictEqual(w.tables.student_profiles[0].stripe_subscription_status, 'past_due');
  assert.strictEqual(d.told[0][0], 'owner');
  assert.strictEqual(w.tables.trial_markers.length, 1);
});

test('refunded voice minutes are taken back from the tutor time', async () => {
  const { tables, rpcs } = world();
  const { handler } = load(tables, rpcs);
  const quote = await call(handler, 'quote', { setupIntentId: 'seti_12345678', productKey: 'minutes_30', cadence: 'once' });
  await call(handler, 'purchase', { quoteId: quote.body.quoteId });
  const { ctx } = ctxOf(tables, rpcs, {});
  await E.processEvent(ctx, ev('charge.refunded', { id: 'ch_3', invoice: 'in_1', amount: 3290, amount_refunded: 3290, refunded: true }));
  assert.deepStrictEqual(tables.ledger.map((x) => x.p_seconds), [1800, -1800]);
});

test('a learner who closed the page before the bank\'s check still gets what they paid for', async () => {
  const { tables, rpcs } = world();
  tables.app_settings.find((r) => r.key === 'pricing_on_sale').value = 'app';
  tables.products.push({ product_key: 'app', voice_minutes_month: 60 });
  tables.quotes.push({ id: '11111111-1111-4111-8111-111111111111', user_id: 'u1', product_key: 'app', variant: 'list', cadence: 'month', band: 'B',
    currency: 'mad', unit_amount: 5490, payment_method_id: 'pm_1', used_at: null, expires_at: '2099-01-01T00:00:00Z' });
  const sub = SUB('active', { metadata: { type: 'pricing_v2', quote_id: '11111111-1111-4111-8111-111111111111' } });
  const { ctx } = ctxOf(tables, rpcs, { subs: { sub_1: sub } });
  await E.processEvent(ctx, ev('customer.subscription.updated', sub));
  assert.strictEqual(tables.entitlements.length, 1);
  assert.strictEqual(tables.entitlements[0].status, 'active');
  assert.ok(tables.quotes[0].used_at);
  assert.strictEqual(tables.student_profiles[0].tier, 'app');
});

test('room day: a monthly pack becomes a 3-month schedule, an upfront pack one payment; a room that does not open charges nothing', async () => {
  const { tables, rpcs } = world();
  const base = { user_id: 'u1', product_key: 'level_en', variant: 'founding', band: 'B', currency: 'mad', status: 'pending_room', stripe_payment_method_id: 'pm_1', amount_paid: 0 };
  tables.price_book.push({ product_key: 'level_en', band: 'B', variant: 'founding', cadence: 'month', currency: 'mad', unit_amount: 67900, stripe_price_id: 'price_lm', active: true });
  tables.entitlements.push(Object.assign({ id: 'aaaaaaaa-0000-4000-8000-000000000001', cadence: 'month' }, base), Object.assign({ id: 'aaaaaaaa-0000-4000-8000-000000000002', cadence: 'upfront' }, base), Object.assign({ id: 'aaaaaaaa-0000-4000-8000-000000000003', cadence: 'upfront' }, base));
  const { ctx, calls } = ctxOf(tables, rpcs, {});
  const start = new Date(Date.now() + 10 * 86400000);
  assert.strictEqual((await E.startPack(ctx, tables.entitlements[0], start)).status, 'scheduled');
  const sched = calls.find((c) => c[0] === 'schedules.create')[1];
  assert.strictEqual(sched.phases[0].iterations, 3);
  assert.strictEqual(sched.phases[0].currency, 'mad');
  assert.strictEqual(sched.phases[0].items[0].price, 'price_lm');
  assert.strictEqual(sched.start_date, Math.floor(start.getTime() / 1000));
  assert.strictEqual(sched.end_behavior, 'cancel');

  assert.strictEqual((await E.startPack(ctx, tables.entitlements[1], new Date())).status, 'paid');
  const pi = calls.find((c) => c[0] === 'pi.create')[1];
  assert.strictEqual(pi.amount, 189900);
  assert.strictEqual(pi.off_session, true);
  const up = tables.entitlements[1];
  assert.strictEqual(up.status, 'active');
  assert.strictEqual(Date.parse(up.ends_at) - Date.parse(up.starts_at), E.PACK_DAYS * 86400000);
  assert.strictEqual(tables.student_profiles[0].tier, 'pack');

  assert.strictEqual(await E.releasePack(ctx, tables.entitlements[2]), true);
  assert.strictEqual(tables.entitlements[2].status, 'ended');
});

test('room day: a card the bank wants to check off-session tells the learner and holds the seat', async () => {
  const { tables, rpcs } = world();
  tables.entitlements.push({ id: 'aaaaaaaa-0000-4000-8000-000000000002', user_id: 'u1', product_key: 'level_en', variant: 'founding', band: 'B', currency: 'mad', cadence: 'upfront', status: 'pending_room', stripe_payment_method_id: 'pm_1' });
  const err = Object.assign(new Error('auth'), { code: 'authentication_required', raw: { payment_intent: { id: 'pi_9', status: 'requires_payment_method' } } });
  const { ctx, told } = ctxOf(tables, rpcs, { piError: err });
  assert.strictEqual((await E.startPack(ctx, tables.entitlements[0], new Date())).status, 'needs_action');
  assert.ok(tables.entitlements[0].payment_failed_at);
  assert.strictEqual(tables.entitlements[0].status, 'pending_room');
  assert.strictEqual(told[0][2].needsAction, true);
});
