/**
 * The English A1–A2 launch class (owner, 12 Nov 2026; docs/MATCHING_PLAN.md, "Launch class").
 *
 * app_settings.launch_offer = { code, rooms: [packRoomId, openRoomId], intro_session, ends_at, eur_off, exclude }
 *   (exclude: accounts that are not learners, such as test and staff accounts, left out of the email):
 *   - €10 (eur_off, in cents) off the first payment of the level pack or the open class of those rooms, until ends_at,
 *     converted at the day's rate (fx_rates) for other currencies and never below 0.50 left to pay;
 *   - the free first class: a one-date pass (entitlements.session_id) and a place in its one-session class, so it shows
 *     under Classes with the usual join button;
 *   - the rooms decide together at decide_at (api/_lib/rooms.js): at least min_learners sign-ups or nobody is charged.
 *   - Black Friday (owner, 25 Nov 2026: "label it as black friday discount ... discount it from the initial price of the
 *     month or of the pack and get them to pay"): launch_offer.deal = { name, ends_at, rooms }. Until deal.ends_at, two
 *     weeks of classes come off the first payment instead of eur_off: half of a first month, or 2 of the 12 weeks of a
 *     pack paid upfront. It covers the launch rooms (level or open class) and deal.rooms (the intensive course), which
 *     get it without a code. After it ends, eur_off applies again until ends_at.
 * Pure parts (parseOffer, discountFor) are unit tested in tests/unit/launch.test.js.
 */
const E = require('./entitlements.js');

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function parseOffer(value) {
  let o;
  try { o = typeof value === 'string' ? JSON.parse(value) : value; } catch (e) { return null; }
  if (!o || typeof o !== 'object' || !/^[a-z0-9-]{1,40}$/.test(o.code || '')) return null;
  const rooms = Array.isArray(o.rooms) ? o.rooms.filter((x) => UUID.test(x)) : [];
  const ends = Date.parse(o.ends_at);
  if (!rooms.length || !Number.isFinite(ends)) return null;
  return { code: o.code, rooms, intro_session: UUID.test(o.intro_session || '') ? o.intro_session : null, endsAt: ends,
    exclude: Array.isArray(o.exclude) ? o.exclude.filter((x) => UUID.test(x)) : [],
    eurOff: Math.max(0, Math.min(5000, parseInt(o.eur_off, 10) || 0)),
    // The reminder on the free class's day and the follow-up after it (owner, 18 Nov 2026), sent by the hourly job
    remindAt: Number.isFinite(Date.parse(o.remind_at)) ? Date.parse(o.remind_at) : null,
    followAt: Number.isFinite(Date.parse(o.follow_at)) ? Date.parse(o.follow_at) : null,
    // A same-day note about the free class (owner, 23 Nov 2026), sent until the class starts
    todayAt: Number.isFinite(Date.parse(o.today_at)) ? Date.parse(o.today_at) : null,
    deal: parseDeal(o.deal) };
}
function parseDeal(d) {
  if (!d || typeof d !== 'object' || !Number.isFinite(Date.parse(d.ends_at))) return null;
  return { name: /^[a-z0-9-]{1,40}$/.test(d.name || '') ? d.name : 'deal', endsAt: Date.parse(d.ends_at),
    rooms: Array.isArray(d.rooms) ? d.rooms.filter((x) => UUID.test(x)) : [] };
}
/** The deal is on now for this room and product: the launch rooms' level or open class, or one of deal.rooms' intensive */
function dealFor(offer, cohortId, productKey, now) {
  const d = offer && offer.deal;
  if (!d || (now || Date.now()) >= d.endsAt || !cohortId) return null;
  if (offer.rooms.includes(cohortId) && /^(level|open)_en$/.test(productKey || '')) return d;
  if (d.rooms.includes(cohortId) && /^intensive_en$/.test(productKey || '')) return d;
  return null;
}
/** Two weeks of classes off: half of a monthly payment, 2/12 of a 12-week pack paid upfront */
function twoWeeksOff(cadence, unitAmount) {
  const u = Math.max(0, unitAmount || 0);
  return cadence === 'upfront' ? Math.round(u * 2 / 12) : Math.round(u / 2);
}
/** Minor units off the first payment, or 0 when the offer does not apply. perEur: the currency's rate (1 for EUR). */
function discountFor(offer, { code, cohortId, productKey, cadence, currency, unitAmount, perEur, now }) {
  if (!offer) return 0;
  if (dealFor(offer, cohortId, productKey, now)) {
    if (!offer.deal.rooms.includes(cohortId) && code !== offer.code) return 0;
    return Math.max(0, Math.min(twoWeeksOff(cadence, unitAmount), (unitAmount || 0) - 50));
  }
  if (code !== offer.code || !offer.eurOff) return 0;
  if ((now || Date.now()) >= offer.endsAt || !offer.rooms.includes(cohortId) || !/^(level|open)_en$/.test(productKey || '')) return 0;
  const rate = currency === 'eur' ? 1 : Number(perEur);
  if (!(rate > 0)) return 0;
  const off = Math.round(offer.eurOff * rate);
  return Math.max(0, Math.min(off, (unitAmount || 0) - 50));
}

async function offerOf(sb) {
  const { data } = await sb.from('app_settings').select('value').eq('key', 'launch_offer').maybeSingle();
  return data ? parseOffer(data.value) : null;
}
async function rateOf(sb, currency) {
  if (currency === 'eur') return 1;
  const { data } = await sb.from('fx_rates').select('per_eur').eq('currency', currency).order('day', { ascending: false }).limit(1);
  return data && data[0] ? Number(data[0].per_eur) : null;
}
async function profileOf(sb, userId) {
  const { data } = await sb.from('student_profiles').select('id, language, level').eq('user_id', userId).maybeSingle();
  return data || null;
}

/** GET ?action=launch (signed in): the offer, the class times, places taken, the free class and what this learner holds. */
async function info(sb, user) {
  const offer = await offerOf(sb);
  if (!offer) return { offer: null };
  const { data: rooms } = await sb.from('cohorts').select('id, product_key, level, starts_on, schedule_days, schedule_time, timezone, min_learners, max_students, room_state, decide_at')
    .in('id', offer.rooms);
  let seats = 0;
  for (const r of rooms || []) {
    const { data: n } = await sb.rpc('room_seats', { p_cohort: r.id });
    r.seats = n || 0; seats += r.seats;
  }
  const pack = (rooms || []).find((r) => /^level_/.test(r.product_key)) || (rooms || [])[0] || null;
  let intro = null;
  if (offer.intro_session) {
    const { data: s } = await sb.from('sessions').select('id, scheduled_at, status, cohort_id').eq('id', offer.intro_session).maybeSingle();
    if (s) {
      const { data: pass } = await sb.from('entitlements').select('id').eq('user_id', user.id).eq('session_id', s.id).eq('status', 'active').limit(1);
      const { count } = await sb.from('entitlements').select('id', { count: 'exact', head: true }).eq('session_id', s.id).eq('status', 'active');
      intro = { session: s.id, at: s.scheduled_at, open: s.status === 'scheduled' && Date.parse(s.scheduled_at) > Date.now() - 30 * 60000,
        registered: !!(pass && pass.length), registeredCount: count || 0 };
    }
  }
  // Black Friday's other rooms (the intensive course): times for the dashboard's pop-up
  const dealOn = offer.deal && Date.now() < offer.deal.endsAt;
  let dealRooms = [];
  if (dealOn && offer.deal.rooms.length) {
    const { data: dr } = await sb.from('cohorts').select('id, product_key, level, starts_on, schedule_days, schedule_time, timezone, room_state')
      .in('id', offer.deal.rooms).in('room_state', ['published', 'confirmed']);
    dealRooms = dr || [];
  }
  const { data: mine } = await sb.from('entitlements').select('product_key, status, cohort_id, cadence').eq('user_id', user.id)
    .in('cohort_id', offer.rooms.concat(dealOn ? offer.deal.rooms : [])).in('status', ['pending_room', 'active', 'paused']).limit(5);
  return {
    offer: { code: offer.code, endsAt: new Date(offer.endsAt).toISOString(), active: Date.now() < offer.endsAt, eurOff: offer.eurOff,
      deal: offer.deal && Date.now() < offer.deal.endsAt ? { name: offer.deal.name, endsAt: new Date(offer.deal.endsAt).toISOString(), rooms: offer.deal.rooms } : null },
    rooms: (rooms || []).map((r) => ({ id: r.id, product_key: r.product_key, starts_on: r.starts_on, days: r.schedule_days, time: String(r.schedule_time || '').slice(0, 5),
      timezone: r.timezone, seats: r.seats, max: r.max_students, state: r.room_state, decideAt: r.decide_at })),
    dealRooms: dealRooms.map((r) => ({ id: r.id, product_key: r.product_key, level: r.level, starts_on: r.starts_on, days: r.schedule_days,
      time: String(r.schedule_time || '').slice(0, 5), timezone: r.timezone, state: r.room_state })),
    seats, min: pack ? pack.min_learners || 8 : 8, intro, mine: mine || []
  };
}

/** POST ?action=launch-register (signed in): a free place in the free first class. */
async function register(sb, user) {
  const offer = await offerOf(sb);
  if (!offer || !offer.intro_session) return { status: 404, error: 'no_free_class' };
  const { data: s } = await sb.from('sessions').select('id, cohort_id, scheduled_at, status').eq('id', offer.intro_session).maybeSingle();
  if (!s || s.status !== 'scheduled' || Date.parse(s.scheduled_at) < Date.now() - 30 * 60000) return { status: 409, error: 'free_class_over' };
  const sp = await profileOf(sb, user.id);
  if (!sp) return { status: 409, error: 'profile_required' };
  // The place first: a place in the one-session class, so it shows under Classes with the join button
  // (enrolled_cohort_id is left alone). A place in an earlier free class that is over is marked completed; a learner
  // in a real class keeps it and gets no free place (one active place per learner).
  const place = await E.savePlace(sb, sp.id, s.cohort_id);
  if (!place.ok) return { status: 409, error: place.error };
  // Then the pass for the date. If it cannot be saved, the place is put back as it was: no place without a pass.
  const { data: had } = await sb.from('entitlements').select('id').eq('user_id', user.id).eq('session_id', s.id).eq('status', 'active').limit(1);
  if (!had || !had.length) {
    const { error } = await sb.from('entitlements').insert({ user_id: user.id, product_key: 'trial', variant: 'list', band: 'A', currency: 'eur', cadence: 'once',
      source: 'admin', status: 'active', amount_paid: 0, session_id: s.id, offer: offer.code, starts_at: new Date().toISOString() });
    if (error) { await place.undo(); throw new Error('free class pass: ' + error.message); }
  }
  return { status: 200, registered: true, at: s.scheduled_at };
}

module.exports = { parseOffer, discountFor, dealFor, twoWeeksOff, offerOf, rateOf, info, register };
