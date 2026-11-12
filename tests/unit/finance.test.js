// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// Finance (api/_lib/finance.js): margins, deferred revenue, drift, cost per customer, founding notices, rates and the
// month; the tutor's scaled daily budget (api/_lib/tutor-brain.js).
const test = require('node:test');
const assert = require('node:assert');
const crypto = require('crypto');
const path = require('path');
const F = require('../../api/_lib/finance.js');
const { fakeDb } = require('./_fake-db.js');

test('per-class value: packs over their class dates, open classes over 4 a month', () => {
  assert.strictEqual(F.perClass({ product_key: 'level_en', cadence: 'upfront' }, { unit_amount: 18000 }, 36), 500);
  assert.strictEqual(F.perClass({ product_key: 'level_en', cadence: 'month' }, { unit_amount: 6000 }, 36), 500);
  assert.strictEqual(F.perClass({ product_key: 'open_en', cadence: 'month' }, { unit_amount: 2400 }, 12, 4), 600);
  assert.strictEqual(F.perClass({ product_key: 'level_en', cadence: 'month' }, null, 36), 0);
});

test('teacher pay and room margin follow the launch spec rates', () => {
  assert.strictEqual(Math.round(F.teacherPay('level_pack', 'English', 10) * 100) / 100, Math.round((8 + 7.5) * 1.03 * 100) / 100);
  assert.strictEqual(Math.round(F.teacherPay('open_class', 'German', 12) * 100) / 100, Math.round((12 + 12 + 3) * 1.03 * 100) / 100);
  assert.strictEqual(Math.round(F.teacherPay('help_class', 'English', 4) * 100) / 100, Math.round(((8 + 3) / 2) * 1.03 * 100) / 100);
  const m = F.roomMargin({ kind: 'level_pack', language: 'English', minutes: 60, learners: Array.from({ length: 10 }, () => ({ perClassEur: 5 })) });
  assert.strictEqual(m.revenue, 50);
  assert.ok(m.margin < 50 && m.margin > 30);
  assert.ok(m.share > 0.6 && m.share < 0.7);
  assert.strictEqual(F.roomMargin({ kind: 'level_pack', language: 'English', minutes: 60, learners: [] }).share, null);
});

test('deferred revenue, currency drift and cost per customer', () => {
  assert.strictEqual(F.deferredOf(18000, 12, 500), 12000);
  assert.strictEqual(F.deferredOf(18000, 40, 500), 0);
  const d = F.drift({ usd: 1.1, mad: 11 }, { usd: 1.2, mad: 11.2 });
  assert.strictEqual(d.usd.flagged, true);
  assert.strictEqual(d.mad.flagged, false);
  assert.deepStrictEqual(F.cac({ instagram: 400 }, { instagram: 8, google: 2 }), {
    instagram: { spend: 400, customers: 8, perCustomer: 50 }, google: { spend: 0, customers: 2, perCustomer: 0 } });
  assert.strictEqual(F.cac({ tiktok: 100 }, {}).tiktok.perCustomer, null);
});

function world() {
  const tables = { customer_pricing: [], fx_rates: [], finance_months: [], finance_reserves: [], entitlements: [], signup_sources: [], sessions: [], price_book: [] };
  const told = [];
  const ctx = { sb: fakeDb(tables, {}), stripe: {}, tell: { founding: async (u, d) => told.push(['founding', u, d]), owner: async (l) => told.push(['owner', l]) } };
  return { tables, ctx, told };
}

test('founding: told once 30 days ahead; the lock ends on its date', async () => {
  const w = world();
  const now = new Date('2027-10-01T00:00:00Z');
  w.tables.customer_pricing.push(
    { user_id: 'a', founding: true, founding_until: '2027-10-20T00:00:00Z', founding_notice_at: null },
    { user_id: 'b', founding: true, founding_until: '2027-12-20T00:00:00Z', founding_notice_at: null },
    { user_id: 'c', founding: true, founding_until: '2027-09-30T00:00:00Z', founding_notice_at: '2027-08-31T00:00:00Z' });
  let out = await F.foundingJob(w.ctx, now);
  assert.deepStrictEqual(out, { notices: 1, ended: 1 });
  assert.deepStrictEqual(w.told.map((x) => x[1]), ['a']);
  assert.ok(w.tables.customer_pricing[0].founding_notice_at);
  assert.strictEqual(w.tables.customer_pricing[2].founding, false);
  out = await F.foundingJob(w.ctx, now);
  assert.deepStrictEqual(out, { notices: 0, ended: 0 }, 'once only');
});

test('rates: stored once a week from the ECB and the aggregator; a move past 7% tells the owner', async () => {
  const w = world();
  w.tables.fx_rates.push({ day: '2026-11-11', currency: 'usd', per_eur: 1.1127, source: 'pricing' }, { day: '2026-11-11', currency: 'mad', per_eur: 11, source: 'pricing' });
  const fetchFn = async (url) => /ecb/.test(url)
    ? { text: async () => "<Cube currency='USD' rate='1.2100'/><Cube currency='GBP' rate='0.85'/>" }
    : { json: async () => ({ rates: { MAD: 11.1, USD: 9 } }) };
  const now = new Date('2026-11-20T05:00:00Z');
  const out = await F.fxJob(w.ctx, now, fetchFn);
  assert.strictEqual(out.stored, 2);
  assert.deepStrictEqual(out.flagged, ['usd']);
  assert.strictEqual(w.tables.fx_rates.find((r) => r.currency === 'usd' && r.day === '2026-11-20').per_eur, 1.21, 'the ECB wins over the aggregator');
  assert.strictEqual(w.tables.fx_rates.find((r) => r.currency === 'mad' && r.day === '2026-11-20').source, 'open.er-api.com');
  assert.strictEqual(w.told[0][0], 'owner');
  assert.deepStrictEqual(await F.fxJob(w.ctx, now, fetchFn), { skipped: 'rates from this week exist' });
});

test('the month: revenue by currency, band and product, refunds, disputes, new customers by channel, the exam reserve', async () => {
  const w = world();
  w.tables.fx_rates.push({ day: '2026-11-11', currency: 'mad', per_eur: 10, source: 'pricing' });
  const at = (d) => Date.parse(d) / 1000;
  const charges = [
    { id: 'c1', paid: true, status: 'succeeded', currency: 'eur', amount: 24900, amount_refunded: 0, disputed: false, created: at('2026-11-05'), customer: { metadata: { band: 'A' } }, metadata: { product_key: 'exam_en' }, invoice: null },
    { id: 'c2', paid: true, status: 'succeeded', currency: 'mad', amount: 76900, amount_refunded: 76900, disputed: false, created: at('2026-11-07'), customer: { metadata: { band: 'B' } }, metadata: {},
      invoice: { metadata: {}, subscription_details: { metadata: { product_key: 'level_en' } } } },
    { id: 'c3', paid: true, status: 'succeeded', currency: 'eur', amount: 799, amount_refunded: 0, disputed: true, created: at('2026-11-09'), customer: { metadata: {} }, metadata: {}, invoice: { metadata: { product_key: 'app' } } },
    { id: 'c4', paid: false, status: 'failed', currency: 'eur', amount: 999, amount_refunded: 0, created: at('2026-11-10'), customer: null, metadata: {}, invoice: null },
  ];
  w.ctx.stripe = { charges: { list: async () => ({ data: charges, has_more: false }) } };
  w.tables.entitlements.push({ user_id: 'u1', amount_paid: 24900, created_at: '2026-11-05T10:00:00Z' }, { user_id: 'u2', amount_paid: 799, created_at: '2026-10-02T10:00:00Z' },
    { user_id: 'u2', amount_paid: 799, created_at: '2026-11-02T10:00:00Z' });
  w.tables.signup_sources.push({ user_id: 'u1', utm_source: 'instagram', heard_from: null });
  const out = await F.monthJob(w.ctx, new Date('2026-11-01T00:00:00Z'));
  const m = w.tables.finance_months[0];
  assert.strictEqual(m.month, '2026-11-01');
  assert.strictEqual(m.charges, 3);
  assert.deepStrictEqual(m.revenue.eur.byBand, { A: 24900, unknown: 799 });
  assert.deepStrictEqual(m.revenue.eur.byProduct, { exam_en: 24900, app: 799 });
  assert.deepStrictEqual(m.revenue.mad.byProduct, { level_en: 76900 });
  assert.deepStrictEqual(m.refunds, { mad: 76900 });
  assert.strictEqual(m.disputes, 1);
  assert.deepStrictEqual(m.new_customers, { instagram: 1 }, 'u2 first paid in October');
  assert.strictEqual(m.reserve_eur, 12.45, '5% of €249 of exam-pack revenue');
  assert.strictEqual(w.tables.finance_reserves[0].amount_eur, 12.45);
  assert.strictEqual(out.new_customers, 1);
});

test('tutor budget: $0.15 per paying learner, never below the $10 floor', () => {
  const sbPath = require.resolve('@supabase/supabase-js', { paths: [path.join(__dirname, '../../api')] });
  if (!require.cache[sbPath]) require.cache[sbPath] = { id: sbPath, filename: sbPath, loaded: true, exports: { createClient: () => ({}) } };
  const brain = require('../../api/_lib/tutor-brain.js');
  assert.strictEqual(brain.budgetOf(0.15, 20, 10), 10);
  assert.strictEqual(brain.budgetOf(0.15, 200, 10), 30);
  assert.strictEqual(brain.budgetOf('x', 200, 10), 10);
});

test.after(() => { void crypto; });
