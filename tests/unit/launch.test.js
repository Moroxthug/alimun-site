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

// The launch email goes only to the learners the owner ticks, among English A1–B2 learners not sent yet
test('launch email: only the ticked learners, English A1 to B2, each once', async () => {
  const mail = require('../../api/_lib/email.js');
  const LM = require('../../api/_lib/launch-email.js');
  const sent = [], notes = [], camps = [], recips = [], bodies = [];
  const realSend = mail.sendEmail;
  mail.sendEmail = async (m) => { sent.push(m.to); bodies.push(m.html); return true; };
  const ROOM = { starts_on: '2026-11-16', schedule_time: '19:00:00', timezone: 'Europe/Paris', min_learners: 8 };
  const profiles = [
    { user_id: 'a1', full_name: 'Ana', level: 'A1', timezone: 'Europe/Paris', ui_lang: 'fr', language: 'English' },
    { user_id: 'b2', full_name: 'Bo', level: 'B2', timezone: 'Europe/Istanbul', ui_lang: null, language: 'English' },
    { user_id: 'c1', full_name: 'Cy', level: 'C1', timezone: 'Europe/Paris', ui_lang: null, language: 'English' },
    { user_id: 'de', full_name: 'Di', level: 'A1', timezone: 'Europe/Berlin', ui_lang: 'de', language: 'German' },
    { user_id: '44444444-4444-4444-8444-444444444444', full_name: 'Test', level: 'A1', timezone: 'UTC', ui_lang: null, language: 'English' }
  ];
  const q = (rows) => {
    const o = { rows, eq(k, v) { o.rows = o.rows.filter((r) => k.includes('->>') ? (r[k.split('->>')[0]] || {})[k.split('->>')[1]] === v : r[k] === v); return o; },
      in(k, v) { o.rows = o.rows.filter((r) => v.includes(r[k])); return o; }, limit() { return o; }, maybeSingle() { return Promise.resolve({ data: o.rows[0] || null }); },
      select() { return o; }, then(res) { return Promise.resolve({ data: o.rows, error: null }).then(res); } };
    return o;
  };
  const sb = {
    from(t) {
      if (t === 'app_settings') return q([{ key: 'launch_offer', value: JSON.stringify({ code: 'launch-en-a1', rooms: [PACK, OPEN], intro_session: OTHER, ends_at: '2026-11-16T04:00:00Z', eur_off: 1000, exclude: ['44444444-4444-4444-8444-444444444444'] }) }]);
      if (t === 'cohorts') return q([Object.assign({ id: PACK, product_key: 'level_en', schedule_days: ['Monday', 'Tuesday', 'Thursday'] }, ROOM), Object.assign({ id: OPEN, product_key: 'open_en', schedule_days: ['Monday'] }, ROOM)]);
      if (t === 'sessions') return q([{ id: OTHER, scheduled_at: '2026-11-14T16:00:00Z' }]);
      if (t === 'student_profiles') return q(profiles.slice());
      if (t === 'notifications') return Object.assign(q(notes.slice()), { insert: async (n) => { notes.push(n); return {}; } });
      if (t === 'campaigns') return Object.assign(q(camps.slice()), {
        insert: (c) => ({ select: () => ({ single: async () => { const row = Object.assign({ id: 'camp1', recipients: 0, emailed: 0 }, c); camps.push(row); return { data: row, error: null }; } }) }),
        update: (f) => ({ eq: async () => { Object.assign(camps[0], f); return {}; } }) });
      if (t === 'campaign_recipients') return Object.assign(q(recips.slice()), { upsert: async (r) => { recips.push(r); return {}; } });
      throw new Error('table ' + t);
    },
    auth: { admin: { getUserById: async (id) => ({ data: { user: { id, email: id + '@example.com', app_metadata: { role: 'student' } } } }) } }
  };
  try {
    const p = await LM.run(sb, 'preview', {});
    assert.deepStrictEqual(p.people.map((x) => x.id).sort(), ['a1', 'b2'], 'English A1 to B2 only, the excluded account left out');
    assert.strictEqual((await LM.run(sb, 'send', { only: [], confirm: 0 })).error, 'nobody_chosen');
    assert.strictEqual((await LM.run(sb, 'send', { only: ['a1', 'de'], confirm: 2 })).error, 'count_changed', 'a German learner cannot be slipped in');
    const r = await LM.run(sb, 'send', { only: ['a1'], confirm: 1 });
    assert.strictEqual(r.sent, 1);
    assert.deepStrictEqual(sent, ['a1@example.com']);
    assert.strictEqual(camps.length, 1, 'recorded as one campaign');
    assert.deepStrictEqual(recips.map((r) => [r.user_id, r.emailed]), [['a1', true]]);
    assert.strictEqual(notes[0].campaign_id, 'camp1');
    assert.strictEqual(camps[0].emailed, 1);
    assert.ok(/action=click&amp;c=camp1&amp;u=a1/.test(bodies[0]) || !mail.linkSig('x'), 'the button is a personal click link (when the signing key is set)');
    assert.deepStrictEqual((await LM.run(sb, 'preview', {})).people.map((x) => x.id), ['b2'], 'nobody gets it twice');
  } finally { mail.sendEmail = realSend; }
});
