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

function fakeDb(tables, rpcs) {
  function q(name) {
    const st = { name, filters: [], op: 'select', payload: null, single: false, maybe: false, returning: false, onConflict: null };
    const rows = () => (tables[name] = tables[name] || []);
    const match = (r) => st.filters.every((f) => f(r));
    const run = () => {
      let out;
      if (st.op === 'select') out = rows().filter(match);
      else if (st.op === 'insert') { const list = [].concat(st.payload).map((r) => Object.assign({ id: require('crypto').randomUUID() }, r)); rows().push(...list); out = list; }
      else if (st.op === 'update') { out = rows().filter(match); out.forEach((r) => Object.assign(r, st.payload)); }
      else if (st.op === 'upsert') {
        const keys = (st.onConflict || 'id').split(',');
        out = [].concat(st.payload).map((p) => {
          const hit = rows().find((r) => keys.every((k) => r[k] != null && r[k] === p[k]));
          if (hit) { if (!st.ignore) Object.assign(hit, p); return hit; }
          const n = Object.assign({ id: require('crypto').randomUUID() }, p); rows().push(n); return n;
        });
      }
      if (st.single || st.maybe) {
        if (!out.length && st.single) return { data: null, error: { message: 'no rows' } };
        return { data: out[0] || null, error: null };
      }
      return { data: out, error: null };
    };
    const api = {
      select() { st.returning = true; return api; },
      insert(p) { st.op = 'insert'; st.payload = p; return api; },
      update(p) { st.op = 'update'; st.payload = p; return api; },
      upsert(p, o) { st.op = 'upsert'; st.payload = p; st.onConflict = o && o.onConflict; st.ignore = o && o.ignoreDuplicates; return api; },
      eq(k, v) { st.filters.push((r) => r[k] === v); return api; },
      in(k, vs) { st.filters.push((r) => vs.includes(r[k])); return api; },
      is(k, v) { st.filters.push((r) => (r[k] == null ? null : r[k]) === v); return api; },
      limit() { return api; },
      single() { st.single = true; return Promise.resolve(run()); },
      maybeSingle() { st.maybe = true; return Promise.resolve(run()); },
      then(a, b) { return Promise.resolve(run()).then(a, b); },
    };
    return api;
  }
  return {
    from: q,
    rpc: (name, args) => Promise.resolve(rpcs[name](args)),
    auth: { getUser: (tok) => Promise.resolve(tok === 'good' ? { data: { user: { id: 'u1', email: 'Learner+x@gmail.com' } }, error: null } : { data: null, error: { message: 'bad' } }) },
  };
}

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
    tutor_add_credit: (a) => { tables.ledger = (tables.ledger || []).concat(a); return { data: 1800, error: null }; },
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
