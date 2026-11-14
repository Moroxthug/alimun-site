// The intensive English pack (owner, 14 Nov 2026): a level pack whose rooms meet every weekday.
const test = require('node:test');
const assert = require('node:assert');
const P = require('../../api/_lib/pricing.js');
const R = require('../../api/_lib/rooms.js');

const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

test('intensive_en is sold as a level pack, monthly or upfront', () => {
  assert.deepStrictEqual(P.onSale('level_en,intensive_en,nope'), ['level_en', 'intensive_en']);
  assert.strictEqual(R.PRODUCT_KIND.intensive_en, 'level_pack');
  assert.ok(R.isPack('intensive_en'));
});

test('suggested intensive rooms meet Monday to Friday whatever days the teacher gave', () => {
  const availability = [{ teacher_id: 't1', language: 'English', kinds: ['level_pack'], levels: ['B1'], starts_on: '2026-12-01',
    days: ['Monday', 'Tuesday', 'Thursday'], schedule_time: '10:00', timezone: 'Europe/Dublin', substitute: false }];
  const out = R.planProposals({ today: '2026-11-20', availability, demand: { 'intensive_en|B1': 8, 'level_en|B1': 8 }, taken: [], minDemand: 5 });
  const intensive = out.find((p) => p.product_key === 'intensive_en'), level = out.find((p) => p.product_key === 'level_en');
  assert.deepStrictEqual(intensive.schedule_days, WEEKDAYS);
  assert.deepStrictEqual(level.schedule_days, ['Monday', 'Tuesday', 'Thursday']);
});
