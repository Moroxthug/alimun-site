// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// Store purchases through RevenueCat (api/webhooks/revenuecat.js) into entitlements and tutor time.
const test = require('node:test');
const assert = require('node:assert');
const path = require('path');
const { fakeDb } = require('./_fake-db.js');

const sbPath = require.resolve('@supabase/supabase-js', { paths: [path.join(__dirname, '../../api')] });
let DB = null;
require.cache[sbPath] = { id: sbPath, filename: sbPath, loaded: true, exports: { createClient: () => DB } };
process.env.SUPABASE_URL = 'https://x.supabase.co';
process.env.SUPABASE_SERVICE_ROLE_KEY = 'service';
process.env.REVENUECAT_WEBHOOK_SECRET = 'rc-secret';
const handler = require('../../api/webhooks/revenuecat.js');
const { productOf, userOf } = handler._test;

const USER = '22222222-2222-4222-8222-222222222222';
function world() {
  const tables = {
    entitlements: [], webhook_logs: [], app_settings: [], customer_pricing: [],
    country_bands: [{ country: 'MA', band: 'B' }], products: [{ product_key: 'app', voice_minutes_month: 60 }],
    student_profiles: [{ id: 'sp1', user_id: USER, tier: 'free', stripe_subscription_status: null }],
  };
  const rpcs = {
    tutor_add_credit: (a) => { tables.ledger = (tables.ledger || []).concat(a); return { data: a.p_seconds, error: null }; },
    sync_access: (a) => {
      const sp = tables.student_profiles.find((r) => r.user_id === a.p_user);
      const live = tables.entitlements.some((e) => e.user_id === a.p_user && e.status === 'active');
      if (live) { sp.tier = 'app'; sp.stripe_subscription_status = 'active'; } else if (sp.tier === 'app') sp.stripe_subscription_status = 'cancelled';
      return { data: null, error: null };
    },
  };
  DB = fakeDb(tables, rpcs, { unique: { webhook_logs: ['event_id'] } });
  return tables;
}
function post(event, auth) {
  return new Promise((resolve) => {
    const res = { status(c) { this.c = c; return this; }, json(j) { resolve({ code: this.c, body: j }); return this; } };
    handler({ method: 'POST', headers: { authorization: auth === undefined ? 'Bearer rc-secret' : auth }, body: { api_version: '1.0', event } }, res);
  });
}
const base = (type, extra) => Object.assign({ id: 'ev-' + type + Math.random(), type, app_user_id: USER, product_id: 'alimun_app_month', environment: 'PRODUCTION', store: 'APP_STORE',
  transaction_id: 't2', original_transaction_id: 't1', purchased_at_ms: 1794000000000, expiration_at_ms: 1796600000000, price_in_purchased_currency: 8.99, currency: 'EUR', country_code: 'MA' }, extra || {});

test('store ids map to the app and the minute packs only', () => {
  assert.strictEqual(productOf('alimun_app_month'), 'app');
  assert.strictEqual(productOf('alimun_app:monthly-base'), 'app');
  assert.strictEqual(productOf('alimun_minutes_120'), 'minutes_120');
  assert.strictEqual(productOf('alimun_minutes_30_pack'), 'minutes_30');
  assert.strictEqual(productOf('alimun_apple'), null);
  assert.strictEqual(productOf('com.other.level', { 'com.other.level': 'level_en' }), null);
  assert.strictEqual(productOf('com.x.app', { 'com.x.app': 'app' }), 'app');
  assert.strictEqual(userOf({ app_user_id: '$RCAnonymousID:1', aliases: [USER] }), USER);
});

test('a wrong secret is refused', async () => {
  world();
  assert.strictEqual((await post(base('INITIAL_PURCHASE'), 'Bearer nope')).code, 401);
});

test('an app subscription bought in the store: active, renewed, refunded; each event handled once', async () => {
  const t = world();
  const first = base('INITIAL_PURCHASE');
  let r = await post(first);
  assert.strictEqual(r.body.done, 'entitlement_initial_purchase');
  const e = t.entitlements[0];
  assert.strictEqual(e.status, 'active');
  assert.strictEqual(e.source, 'store');
  assert.strictEqual(e.cadence, 'store');
  assert.strictEqual(e.band, 'B');
  assert.strictEqual(e.currency, 'eur');
  assert.strictEqual(e.amount_paid, 899);
  assert.strictEqual(e.voice_minutes_month, 60);
  assert.strictEqual(t.student_profiles[0].tier, 'app');
  r = await post(first);
  assert.strictEqual(r.body.duplicate, true);
  await post(base('RENEWAL', { transaction_id: 't3', expiration_at_ms: 1799200000000 }));
  assert.strictEqual(t.entitlements.length, 1);
  assert.strictEqual(e.amount_paid, 1798);
  assert.strictEqual(e.ends_at, new Date(1799200000000).toISOString());
  await post(base('CANCELLATION', { cancel_reason: 'UNSUBSCRIBE' }));
  assert.strictEqual(e.status, 'active', 'turning off renewal keeps access until it expires');
  await post(base('CANCELLATION', { cancel_reason: 'CUSTOMER_SUPPORT' }));
  assert.strictEqual(e.status, 'refunded');
  assert.strictEqual(t.student_profiles[0].stripe_subscription_status, 'cancelled');
});

test('minutes bought in the store go to the tutor time once; sandbox and unknown products are ignored', async () => {
  const t = world();
  await post(base('NON_RENEWING_PURCHASE', { product_id: 'alimun_minutes_30', transaction_id: 'm1' }));
  assert.deepStrictEqual(t.ledger.map((x) => [x.p_seconds, x.p_stripe_session]), [[1800, 'rc:m1']]);
  assert.strictEqual((await post(base('INITIAL_PURCHASE', { environment: 'SANDBOX' }))).body.done, 'sandbox_ignored');
  assert.strictEqual((await post(base('INITIAL_PURCHASE', { product_id: 'something_else' }))).body.done, 'unknown_product');
  assert.strictEqual(t.entitlements.length, 0);
});
