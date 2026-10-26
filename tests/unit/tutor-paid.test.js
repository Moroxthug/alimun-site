// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// AI tutor, part 6 (docs/AI_TUTOR_PLAN.md): tutor time bought in Stripe Checkout. Checkout of a pack (returning to the
// Tutor), the packs' prices and minutes, the webhook adding the minutes once from the price (never from the browser),
// and the status naming when bought minutes expire and each plan's minutes. Against stand-ins for Stripe and Supabase.
// The database functions themselves (lots, expiry after 12 months, order of use) are tested against Postgres:
// see supabase/migrations/202610271400_tutor_paid_time.sql and docs/PROGRESS.md.
const test = require('node:test');
const assert = require('node:assert');
const path = require('path');

const ME = '11111111-1111-4111-8111-111111111111';
let db, stripeCalls, user, lineItems, prices;

function reset() {
  user = { id: 'u-me', email: 'me@example.com', email_confirmed_at: new Date().toISOString(), app_metadata: {} };
  db = {
    student_profiles: [{ id: ME, user_id: 'u-me', full_name: 'Sara', tier: 'free', stripe_customer_id: 'cus_1', stripe_subscription_id: null, stripe_subscription_status: null }],
    tutor_time: [{ student_id: ME, free_seconds: 0, plan_seconds: 0, plan_granted: 0, plan_period: '2026-10', credit_seconds: 0 }],
    tutor_plan_minutes: [{ tier: 'free', minutes_per_month: 0 }, { tier: 'community', minutes_per_month: 30 }, { tier: 'focused', minutes_per_month: 60 },
      { tier: 'intensive', minutes_per_month: 120 }, { tier: 'private', minutes_per_month: 120 }, { tier: 'daily', minutes_per_month: 120 }],
    tutor_credit_lots: [], tutor_time_ledger: [], webhook_logs: [],
  };
  stripeCalls = [];
  lineItems = [{ price: { id: 'price_t30', metadata: {} }, quantity: 1 }];
  prices = {
    price_t30: { id: 'price_t30', active: true, unit_amount: 900, currency: 'eur', recurring: null, metadata: {} },
    price_t120: { id: 'price_t120', active: true, unit_amount: 2900, currency: 'eur', recurring: null, metadata: { minutes: '150' } },
  };
}

// ── A small in-memory Supabase ─────────────────────────────
function from(table) {
  const st = { op: 'select', f: [], order: null, limit: null };
  const rows = () => (db[table] = db[table] || []);
  const ok = (r) => st.f.every((f) => f(r));
  const b = {
    select() { return b; },
    insert(v) { st.op = 'insert'; st.v = v; return b; },
    update(v) { st.op = 'update'; st.v = v; return b; },
    eq(c, v) { st.f.push((r) => r[c] === v); return b; },
    neq(c, v) { st.f.push((r) => r[c] !== v); return b; },
    gt(c, v) { st.f.push((r) => r[c] > v); return b; },
    not(c, op, v) { st.f.push((r) => r[c] != null); return b; },
    or() { return b; },
    in(c, v) { st.f.push((r) => v.includes(r[c])); return b; },
    order(c, o) { st.order = { c, asc: !o || o.ascending !== false }; return b; },
    limit(k) { st.limit = k; return b; },
    maybeSingle() { st.single = true; return b; },
    single() { st.single = true; return b; },
    then(res, rej) { return Promise.resolve().then(run).then(res, rej); },
  };
  function run() {
    let out;
    if (st.op === 'insert') {
      if (table === 'webhook_logs' && rows().some((r) => r.event_id === st.v.event_id)) return { data: null, error: { code: '23505' } };
      const r = Object.assign({ id: 'id' + rows().length, created_at: new Date().toISOString() }, st.v); rows().push(r); out = [r];
    } else if (st.op === 'update') { out = rows().filter(ok); out.forEach((r) => Object.assign(r, st.v)); }
    else {
      out = rows().filter(ok);
      if (st.order) out.sort((x, y) => (x[st.order.c] < y[st.order.c] ? -1 : 1) * (st.order.asc ? 1 : -1));
      if (st.limit != null) out = out.slice(0, st.limit);
    }
    return st.single ? { data: out[0] || null, error: null } : { data: out, error: null };
  }
  return b;
}
const supa = {
  auth: { getUser: async () => ({ data: { user }, error: null }) },
  from,
  rpc: async (name, a) => {
    const t = db.tutor_time.find((x) => x.student_id === a.p_student);
    if (name === 'tutor_refresh') return { data: Object.assign({}, t), error: null };
    if (name === 'tutor_add_credit') {
      if (a.p_stripe_session && db.tutor_time_ledger.some((l) => l.stripe_session_id === a.p_stripe_session)) return { data: 0, error: null };
      db.tutor_time_ledger.push({ student_id: a.p_student, seconds: a.p_seconds, bucket: 'credit', reason: a.p_reason, stripe_session_id: a.p_stripe_session, note: a.p_note });
      if (a.p_reason === 'purchase') db.tutor_credit_lots.push({ student_id: a.p_student, seconds: a.p_seconds, left_seconds: a.p_seconds, expires_at: new Date(Date.now() + 365 * 86400000).toISOString() });
      t.credit_seconds += a.p_seconds;
      return { data: a.p_seconds, error: null };
    }
    return { data: null, error: null };
  },
};

// ── A stand-in for the Stripe SDK ──────────────────────────
const fakeStripe = () => ({
  customers: { search: async () => ({ data: [{ id: 'cus_1' }] }), create: async () => ({ id: 'cus_1' }) },
  checkout: { sessions: {
    create: async (p) => { stripeCalls.push(['create', p]); return { id: 'cs_test_abc', url: 'https://checkout.stripe.com/c/pay/cs_test_abc' }; },
    listLineItems: async (id) => { stripeCalls.push(['lines', id]); return { data: lineItems }; },
  } },
  prices: { retrieve: async (id) => prices[id] },
  subscriptions: { retrieve: async () => ({}) },
  webhooks: { constructEvent: (raw) => JSON.parse(raw.toString()) },
});

process.env.SUPABASE_URL = 'https://example.supabase.co';
process.env.SUPABASE_SERVICE_ROLE_KEY = 'service';
process.env.STRIPE_SECRET_KEY = 'sk_test_x';
process.env.STRIPE_WEBHOOK_SECRET = 'whsec_x';
process.env.STRIPE_PRICE_TUTOR_30 = 'price_t30';
process.env.STRIPE_PRICE_TUTOR_120 = 'price_t120';
process.env.STRIPE_PRICE_FOCUSED_MONTHLY = 'price_focused';
const root = path.join(__dirname, '..', '..');
const sbPath = require.resolve('@supabase/supabase-js', { paths: [root] });
require.cache[sbPath] = { id: sbPath, filename: sbPath, loaded: true, exports: { createClient: () => supa } };
const stPath = require.resolve('stripe', { paths: [root] });
require.cache[stPath] = { id: stPath, filename: stPath, loaded: true, exports: fakeStripe };
const stripeApi = require(path.join(root, 'api/stripe.js'));
const webhook = require(path.join(root, 'api/webhooks/stripe.js'));
const tutor = require(path.join(root, 'api/tutor.js'));

function call(handler, { method = 'POST', action, body, raw } = {}) {
  return new Promise((resolve) => {
    const res = { code: 200, headers: {}, setHeader(k, v) { this.headers[k] = v; }, status(c) { this.code = c; return this; },
      json(j) { resolve({ status: this.code, body: j }); return this; }, end() { resolve({ status: this.code }); return this; } };
    const req = { method, query: action ? { action } : {}, headers: { authorization: 'Bearer t', 'stripe-signature': 'sig' }, body };
    if (raw) { req.rawBody = Buffer.from(raw); }
    handler(req, res);
  });
}
const paidEvent = (id, extra) => JSON.stringify({ id, type: 'checkout.session.completed', data: { object: Object.assign({
  object: 'checkout.session', id: 'cs_test_abc', mode: 'payment', payment_status: 'paid', customer: 'cus_1', client_reference_id: 'u-me',
  metadata: { supabase_user_id: 'u-me', type: 'tutor_time', minutes: '9999' } }, extra || {}) } });

test('checkout of a pack: one payment, back to the Tutor with the checkout id, whatever the browser asks', async () => {
  reset();
  const r = await call(stripeApi, { action: 'create-checkout', body: { priceId: 'price_t30', successUrl: 'https://evil.example/x', cancelUrl: '/app#/home' } });
  assert.strictEqual(r.status, 200);
  const p = stripeCalls[0][1];
  assert.strictEqual(p.mode, 'payment');
  assert.deepStrictEqual(p.line_items, [{ price: 'price_t30', quantity: 1 }]);
  assert.strictEqual(p.metadata.type, 'tutor_time');
  assert.strictEqual(p.payment_intent_data.metadata.type, 'tutor_time');
  assert.strictEqual(p.success_url, 'https://alimun.com/app?checkout=tutor&session_id={CHECKOUT_SESSION_ID}#/tutor');
  assert.strictEqual(p.cancel_url, 'https://alimun.com/app?checkout=cancelled#/tutor');
});

test('a student on a plan may still buy a pack; an unknown price is refused', async () => {
  reset();
  Object.assign(db.student_profiles[0], { tier: 'focused', stripe_subscription_id: 'sub_1', stripe_subscription_status: 'active' });
  assert.strictEqual((await call(stripeApi, { action: 'create-checkout', body: { priceId: 'price_t120' } })).status, 200);
  assert.strictEqual((await call(stripeApi, { action: 'create-checkout', body: { priceId: 'price_focused' } })).body.error, 'active_subscription');
  assert.strictEqual((await call(stripeApi, { action: 'create-checkout', body: { priceId: 'price_made_up' } })).status, 400);
});

test('prices: the packs with Stripe amounts and their minutes (price metadata first)', async () => {
  reset();
  const r = await call(stripeApi, { method: 'GET', action: 'prices' });
  assert.deepStrictEqual(r.body.prices.tutor30, { id: 'price_t30', amount: 900, currency: 'eur', interval: null, minutes: 30 });
  assert.strictEqual(r.body.prices.tutor120.minutes, 150);
});

test('webhook: the minutes come from the price, are added once, and a second delivery adds nothing', async () => {
  reset();
  let r = await call(webhook, { raw: paidEvent('evt_1') });
  assert.strictEqual(r.status, 200);
  assert.deepStrictEqual(stripeCalls.find((c) => c[0] === 'lines'), ['lines', 'cs_test_abc']);
  assert.strictEqual(db.tutor_time[0].credit_seconds, 1800, 'the metadata minutes the checkout carried are ignored');
  const row = db.tutor_time_ledger[0];
  assert.deepStrictEqual([row.reason, row.stripe_session_id, row.note], ['purchase', 'cs_test_abc', '30 minutes bought']);
  // async_payment_succeeded for the same checkout (another event id)
  r = await call(webhook, { raw: JSON.stringify(Object.assign(JSON.parse(paidEvent('evt_2')), { type: 'checkout.session.async_payment_succeeded' })) });
  assert.strictEqual(r.status, 200);
  assert.strictEqual(db.tutor_time[0].credit_seconds, 1800);
  // the same event again
  r = await call(webhook, { raw: paidEvent('evt_1') });
  assert.strictEqual(r.body.duplicate, true);
  assert.strictEqual(db.tutor_time_ledger.length, 1);
});

test('webhook: the 120 pack uses its price metadata; nothing is added before the money arrives', async () => {
  reset();
  lineItems = [{ price: prices.price_t120, quantity: 1 }];
  await call(webhook, { raw: paidEvent('evt_3', { payment_status: 'unpaid' }) });
  assert.strictEqual(db.tutor_time[0].credit_seconds, 0);
  await call(webhook, { raw: paidEvent('evt_4', { id: 'cs_test_def' }) });
  assert.strictEqual(db.tutor_time[0].credit_seconds, 150 * 60);
});

test('webhook: a checkout without a tutor pack fails so Stripe retries, and adds nothing', async () => {
  reset();
  lineItems = [{ price: { id: 'price_other', metadata: { minutes: '600' } }, quantity: 1 }];
  const r = await call(webhook, { raw: paidEvent('evt_5') });
  assert.strictEqual(r.status, 500);
  assert.strictEqual(db.tutor_time[0].credit_seconds, 0);
  assert.strictEqual(db.webhook_logs[0].status, 'failed');
});

test('status: when the soonest bought minutes expire, and each paid plan\'s minutes', async () => {
  reset();
  db.tutor_credit_lots.push(
    { student_id: ME, left_seconds: 600, expires_at: '2027-09-01T00:00:00.000Z' },
    { student_id: ME, left_seconds: 900, expires_at: '2027-03-01T00:00:00.000Z' },
    { student_id: ME, left_seconds: 0, expires_at: '2027-01-01T00:00:00.000Z' },
    { student_id: ME, left_seconds: 300, expires_at: null });
  db.tutor_time[0].credit_seconds = 1800;
  const r = await call(tutor, { method: 'GET', action: 'status' });
  assert.strictEqual(r.status, 200);
  assert.deepStrictEqual(r.body.expiring, { seconds: 900, at: '2027-03-01T00:00:00.000Z' });
  assert.deepStrictEqual(r.body.plans, { community: 30, focused: 60, intensive: 120, private: 120 });
  assert.strictEqual(r.body.seconds.credit, 1800);
});

test('status: nothing bought, nothing expiring', async () => {
  reset();
  const r = await call(tutor, { method: 'GET', action: 'status' });
  assert.strictEqual(r.body.expiring, null);
});
