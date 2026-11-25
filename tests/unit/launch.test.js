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
test('launch email: only the ticked learners, English learners, each once', async () => {
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
    { user_id: 'c2', full_name: 'Cu', level: 'C1', timezone: 'Europe/Paris', ui_lang: null, language: 'English' },
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
      if (t === 'marketing_consent_current') return q([{ user_id: 'c2', granted: false, source: 'unsubscribe' }]);
      if (t === 'campaign_recipients') return Object.assign(q(recips.slice()), { upsert: async (r) => { recips.push(r); return {}; } });
      throw new Error('table ' + t);
    },
    auth: { admin: { getUserById: async (id) => ({ data: { user: { id, email: id + '@example.com', app_metadata: { role: 'student' } } } }) } }
  };
  try {
    const p = await LM.run(sb, 'preview', {});
    assert.deepStrictEqual(p.people.map((x) => x.id).sort(), ['a1', 'b2', 'c1'], 'English learners only; the excluded account and the one who unsubscribed left out');
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
    assert.deepStrictEqual((await LM.run(sb, 'preview', {})).people.map((x) => x.id).sort(), ['b2', 'c1'], 'nobody gets it twice');
  } finally { mail.sendEmail = realSend; }
});

// The reminder and the follow-up (owner, 18 Nov 2026): times read from the offer, every language and step builds
test('launch steps: offer times and emails in every language', () => {
  const LM = require('../../api/_lib/launch-email.js');
  const o = L.parseOffer(JSON.stringify({ code: 'launch-en-2', rooms: [PACK, OPEN], intro_session: OTHER, ends_at: '2026-11-30T04:00:00Z', eur_off: 1000, remind_at: '2026-11-23T09:00:00Z', follow_at: 'nope' }));
  assert.strictEqual(o.remindAt, Date.parse('2026-11-23T09:00:00Z'));
  assert.strictEqual(o.followAt, null);
  const room = (days) => ({ starts_on: '2026-11-30', schedule_days: days, schedule_time: '19:00:00', timezone: 'Europe/Paris', min_learners: 8 });
  const ctx = { offer: o, pack: room(['Monday', 'Wednesday', 'Thursday']), open: room(['Monday']), introAt: new Date('2026-11-23T18:00:00Z'), min: 8, unsub: false };
  for (const lang of ['en', 'fr', 'es', 'de', 'ma', 'zh']) for (const step of ['remind', 'came', 'missed']) for (const level of ['A1', 'B2']) {
    const e = LM.buildStep(step, { name: 'ana', level, timezone: 'Europe/Madrid', ui_lang: lang }, ctx);
    assert.ok(e.subject && e.html.includes('settings/plans/launch') && !/\{days\}|\{open\}|undefined/.test(e.text), lang + ' ' + step);
  }
  const r = LM.buildStep('remind', { name: 'ana', level: 'A1', timezone: 'Europe/Istanbul', ui_lang: 'en' }, ctx);
  assert.ok(/21:00/.test(r.subject), 'times in the learner’s own zone');
});

// The free first class (23 Nov 2026): the place keeps enrolled_count right, an earlier free class that is over never
// blocks the sign-up, a learner in a real class gets no free place, and there is never a pass without a place.
describe_free_class();
function describe_free_class() {
  const { fakeDb } = require('./_fake-db.js');
  const E = require('../../api/_lib/entitlements.js');
  const FREE = 'f0000000-0000-4000-8000-000000000001', OLD = 'f0000000-0000-4000-8000-000000000002', REAL = 'f0000000-0000-4000-8000-000000000003';
  const S_FREE = 'e0000000-0000-4000-8000-000000000001';
  const H = 3600000, now = Date.now();
  function world(extra) {
    const t = {
      app_settings: [{ key: 'launch_offer', value: JSON.stringify({ code: 'launch-en-2', rooms: [PACK, OPEN], intro_session: S_FREE, ends_at: new Date(now + 99 * H).toISOString(), eur_off: 1000 }) }],
      cohorts: [{ id: FREE, product_key: null, enrolled_count: 0 }, { id: OLD, product_key: null, enrolled_count: 0 }, { id: REAL, product_key: 'level_en', enrolled_count: 1 }],
      sessions: [{ id: S_FREE, cohort_id: FREE, scheduled_at: new Date(now + 2 * H).toISOString(), status: 'scheduled' },
        { id: 'old-s', cohort_id: OLD, scheduled_at: new Date(now - 9 * 24 * H).toISOString(), status: 'completed' },
        { id: 'real-1', cohort_id: REAL, scheduled_at: new Date(now - 24 * H).toISOString(), status: 'completed' },
        { id: 'real-2', cohort_id: REAL, scheduled_at: new Date(now + 24 * H).toISOString(), status: 'scheduled' }],
      student_profiles: [{ id: 'sp1', user_id: 'u1' }, { id: 'sp2', user_id: 'u2' }, { id: 'sp3', user_id: 'u3' }],
      entitlements: [], enrollments: []
    };
    Object.keys(extra || {}).filter((k) => k !== 'opts').forEach((k) => { t[k] = t[k].concat(extra[k]); });
    const rpcs = { recount_enrollment: ({ p_cohort }) => {
      const n = t.enrollments.filter((e) => e.cohort_id === p_cohort && ['active', 'completed'].includes(e.status)).length;
      t.cohorts.find((c) => c.id === p_cohort).enrolled_count = n; return { data: n, error: null };
    } };
    const sb = fakeDb(t, rpcs, Object.assign({ uniqueWhere: { enrollments: [{ key: 'student_id', where: (r) => r.status === 'active' }] } }, extra && extra.opts));
    return { t, sb, count: (id) => t.cohorts.find((c) => c.id === id).enrolled_count, active: (sp) => t.enrollments.filter((e) => e.student_id === sp && e.status === 'active').map((e) => e.cohort_id) };
  }

  test('free class: a place and a pass, and the teacher sees the number of learners', async () => {
    const w = world();
    assert.strictEqual((await L.register(w.sb, { id: 'u1' })).registered, true);
    assert.strictEqual((await L.register(w.sb, { id: 'u2' })).registered, true);
    assert.strictEqual((await L.register(w.sb, { id: 'u1' })).registered, true, 'saving again changes nothing');
    assert.strictEqual(w.count(FREE), 2);
    assert.deepStrictEqual(w.active('sp1'), [FREE]);
    assert.strictEqual(w.t.entitlements.filter((e) => e.user_id === 'u1' && e.session_id === S_FREE && e.status === 'active').length, 1);
  });

  test('free class: a cancelled place comes back once and is counted once', async () => {
    const w = world({ enrollments: [{ id: 'x', student_id: 'sp1', cohort_id: FREE, status: 'cancelled', cancelled_at: '2026-11-20T00:00:00Z' }] });
    await L.register(w.sb, { id: 'u1' });
    assert.strictEqual(w.t.enrollments.length, 1);
    assert.strictEqual(w.t.enrollments[0].status, 'active');
    assert.strictEqual(w.count(FREE), 1);
  });

  test('free class: a place in an earlier free class that is over is completed, not a blocker', async () => {
    const w = world({ enrollments: [{ id: 'old', student_id: 'sp1', cohort_id: OLD, status: 'active' }] });
    const r = await L.register(w.sb, { id: 'u1' });
    assert.strictEqual(r.registered, true);
    assert.deepStrictEqual(w.active('sp1'), [FREE], 'one active place, in the new free class');
    assert.strictEqual(w.t.enrollments.find((e) => e.id === 'old').status, 'completed');
    assert.strictEqual(w.count(OLD), 1, 'the past class still counts its learner');
    assert.strictEqual(w.count(FREE), 1);
    assert.strictEqual(w.t.entitlements.length, 1);
  });

  test('free class: a learner in a real class gets neither a place nor a pass', async () => {
    const w = world({ enrollments: [{ id: 'r', student_id: 'sp1', cohort_id: REAL, status: 'active' }] });
    const r = await L.register(w.sb, { id: 'u1' });
    assert.deepStrictEqual([r.status, r.error], [409, 'in_class']);
    assert.deepStrictEqual(w.active('sp1'), [REAL], 'the real class is left alone');
    assert.strictEqual(w.t.entitlements.length, 0, 'no pass without a place');
    assert.strictEqual(w.count(FREE), 0);
  });

  test('free class: an upcoming free class is not ended to make room for another', async () => {
    const w = world({ cohorts: [{ id: 'up', product_key: null, enrolled_count: 1 }], sessions: [{ id: 'up-s', cohort_id: 'up', scheduled_at: new Date(now + 48 * H).toISOString(), status: 'scheduled' }],
      enrollments: [{ id: 'u', student_id: 'sp1', cohort_id: 'up', status: 'active' }] });
    assert.strictEqual((await L.register(w.sb, { id: 'u1' })).error, 'in_class');
    assert.deepStrictEqual(w.active('sp1'), ['up']);
  });

  test('free class: when the pass cannot be saved, the place is taken back', async () => {
    const w = world({ entitlements: [{ id: 'e0', user_id: 'u1', status: 'ended' }], opts: { unique: { entitlements: ['user_id'] } } });
    await assert.rejects(() => L.register(w.sb, { id: 'u1' }), /free class pass/);
    assert.deepStrictEqual(w.active('sp1'), []);
    assert.strictEqual(w.count(FREE), 0);
  });

  test('free class over: room places and paid sign-ups are not blocked by it', async () => {
    const w = world({ cohorts: [{ id: PACK, product_key: 'level_en', enrolled_count: 0 }], enrollments: [{ id: 'old', student_id: 'sp2', cohort_id: OLD, status: 'active' }] });
    await E.enrol(w.sb, 'u2', PACK);   // a pack room's start day (api/_lib/rooms.js)
    assert.deepStrictEqual(w.active('sp2'), [PACK]);
    assert.strictEqual(w.count(PACK), 1);
    assert.strictEqual(w.t.enrollments.find((e) => e.id === 'old').status, 'completed');
  });

  test('daily job: places in free classes that are over are completed, others stay active', async () => {
    const w = world({ enrollments: [{ id: 'a', student_id: 'sp1', cohort_id: OLD, status: 'active' }, { id: 'b', student_id: 'sp2', cohort_id: FREE, status: 'active' },
      { id: 'c', student_id: 'sp3', cohort_id: REAL, status: 'active' }] });
    assert.strictEqual(await E.completeFinishedFreePlaces(w.sb), 1);
    assert.deepStrictEqual(w.active('sp1'), []);
    assert.deepStrictEqual(w.active('sp2'), [FREE]);
    assert.deepStrictEqual(w.active('sp3'), [REAL]);
    assert.strictEqual(w.count(OLD), 1);   // a completed place still counts for the class that was held
    assert.strictEqual(await E.completeFinishedFreePlaces(w.sb), 0);
  });

  test('free class: the one date counts as over 90 minutes after it starts', async () => {
    const w = world({ cohorts: [{ id: 'just', product_key: null }], sessions: [{ id: 'j', cohort_id: 'just', scheduled_at: new Date(now - 60 * 60000).toISOString(), status: 'live' }] });
    assert.deepStrictEqual(await E.finishedFreeClasses(w.sb, ['just', OLD, REAL]), [OLD]);
    assert.deepStrictEqual(await E.finishedFreeClasses(w.sb, ['just'], new Date(now + 31 * 60000)), ['just']);
  });
}

// Black Friday (owner, 25 Nov 2026): two weeks of classes off the first payment until deal.ends_at
test('Black Friday takes two weeks off the first payment, then the €10 offer is back', () => {
  const INT = '44444444-4444-4444-8444-444444444444';
  const bf = L.parseOffer(JSON.stringify({ code: 'launch-en-2', rooms: [PACK, OPEN], ends_at: '2026-12-07T04:00:00Z', eur_off: 1000,
    deal: { name: 'black-friday', ends_at: '2026-11-30T22:59:00Z', rooms: [INT, 'bad'] } }));
  const now = Date.parse('2026-11-27T10:00:00Z'), after = Date.parse('2026-12-01T10:00:00Z');
  const b = { code: 'launch-en-2', cohortId: PACK, productKey: 'level_en', cadence: 'month', currency: 'eur', unitAmount: 6400, perEur: 1, now };
  assert.deepStrictEqual(bf.deal.rooms, [INT]);
  assert.strictEqual(L.discountFor(bf, b), 3200, 'half of the first month');
  assert.strictEqual(L.discountFor(bf, Object.assign({}, b, { cadence: 'upfront', unitAmount: 17900 })), 2983, '2 of 12 weeks of the pack');
  assert.strictEqual(L.discountFor(bf, Object.assign({}, b, { currency: 'usd', unitAmount: 6999 })), 3500, 'any currency, no rate needed');
  assert.strictEqual(L.discountFor(bf, Object.assign({}, b, { cohortId: OPEN, productKey: 'open_en', unitAmount: 2400 })), 1200);
  assert.strictEqual(L.discountFor(bf, Object.assign({}, b, { code: null })), 0, 'the launch rooms still need the code');
  assert.strictEqual(L.discountFor(bf, Object.assign({}, b, { code: null, cohortId: INT, productKey: 'intensive_en', unitAmount: 10900 })), 5450, 'the intensive, no code');
  assert.strictEqual(L.discountFor(bf, Object.assign({}, b, { cohortId: INT, productKey: 'level_en' })), 0, 'only the intensive in its room');
  assert.strictEqual(L.discountFor(bf, Object.assign({}, b, { cohortId: OTHER })), 0);
  assert.strictEqual(L.discountFor(bf, Object.assign({}, b, { now: after })), 1000, 'after Black Friday the €10 offer');
  assert.strictEqual(L.discountFor(bf, Object.assign({}, b, { now: after, cohortId: INT, productKey: 'intensive_en' })), 0);
  assert.strictEqual(L.discountFor(bf, Object.assign({}, b, { unitAmount: 80 })), 30, 'never below 0.50 left to pay');
});
