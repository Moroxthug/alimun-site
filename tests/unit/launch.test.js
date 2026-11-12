// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// English A1–A2 launch class (api/_lib/launch.js, api/_lib/rooms.js decideLinked): the €10 offer and the 8-learner rule.
const test = require('node:test');
const assert = require('node:assert');
const L = require('../../api/_lib/launch.js');
const R = require('../../api/_lib/rooms.js');

const PACK = '11111111-1111-4111-8111-111111111111', OPEN = '22222222-2222-4222-8222-222222222222', OTHER = '33333333-3333-4333-8333-333333333333';
const offer = L.parseOffer(JSON.stringify({ code: 'launch-en-a1', rooms: [PACK, OPEN], intro_session: OTHER, ends_at: '2026-11-16T04:00:00Z', eur_off: 1000, exclude: [OTHER, 'bad'] }));
const BEFORE = Date.parse('2026-11-13T12:00:00Z');
const base = { code: 'launch-en-a1', cohortId: PACK, productKey: 'level_en', currency: 'eur', unitAmount: 6400, perEur: 1, now: BEFORE };

test('the offer is read from the setting and refuses bad values', () => {
  assert.strictEqual(offer.eurOff, 1000);
  assert.deepStrictEqual(offer.rooms, [PACK, OPEN]);
  assert.deepStrictEqual(offer.exclude, [OTHER], 'accounts left out of the email');
  assert.strictEqual(L.parseOffer('not json'), null);
  assert.strictEqual(L.parseOffer({ code: 'Bad Code!', rooms: [PACK], ends_at: '2026-11-16T04:00:00Z' }), null);
  assert.strictEqual(L.parseOffer({ code: 'x', rooms: ['nope'], ends_at: '2026-11-16T04:00:00Z' }), null);
});

test('€10 off the first payment of the launch rooms, in euros', () => {
  assert.strictEqual(L.discountFor(offer, base), 1000);
  assert.strictEqual(L.discountFor(offer, Object.assign({}, base, { cohortId: OPEN, productKey: 'open_en', unitAmount: 2400 })), 1000);
});

test('other currencies at the day’s rate, never below 0.50 left to pay', () => {
  assert.strictEqual(L.discountFor(offer, Object.assign({}, base, { currency: 'usd', perEur: 1.1127, unitAmount: 2999 })), 1113);
  assert.strictEqual(L.discountFor(offer, Object.assign({}, base, { unitAmount: 900 })), 850);
  assert.strictEqual(L.discountFor(offer, Object.assign({}, base, { currency: 'usd', perEur: null })), 0, 'no rate, no discount');
});

test('no discount with a wrong code, another room or product, or after the offer ends', () => {
  assert.strictEqual(L.discountFor(offer, Object.assign({}, base, { code: 'other' })), 0);
  assert.strictEqual(L.discountFor(offer, Object.assign({}, base, { cohortId: OTHER })), 0);
  assert.strictEqual(L.discountFor(offer, Object.assign({}, base, { productKey: 'exam_en' })), 0);
  assert.strictEqual(L.discountFor(offer, Object.assign({}, base, { now: Date.parse('2026-11-16T04:00:00Z') })), 0);
  assert.strictEqual(L.discountFor(null, base), 0);
});

test('the class opens with 8 sign-ups across the pack and the open class, otherwise it is cancelled', () => {
  assert.strictEqual(R.decideLinked(8, 8), 'open');
  assert.strictEqual(R.decideLinked(11, 8), 'open');
  assert.strictEqual(R.decideLinked(7, 8), 'cancel');
  assert.strictEqual(R.decideLinked(0, 0), 'cancel');
});
