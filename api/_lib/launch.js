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
 * Pure parts (parseOffer, discountFor) are unit tested in tests/unit/launch.test.js.
 */
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
    eurOff: Math.max(0, Math.min(5000, parseInt(o.eur_off, 10) || 0)) };
}
/** Minor units off the first payment, or 0 when the offer does not apply. perEur: the currency's rate (1 for EUR). */
function discountFor(offer, { code, cohortId, productKey, currency, unitAmount, perEur, now }) {
  if (!offer || code !== offer.code || !offer.eurOff) return 0;
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
  const { data: mine } = await sb.from('entitlements').select('product_key, status, cohort_id, cadence').eq('user_id', user.id)
    .in('cohort_id', offer.rooms).in('status', ['pending_room', 'active', 'paused']).limit(5);
  return {
    offer: { code: offer.code, endsAt: new Date(offer.endsAt).toISOString(), active: Date.now() < offer.endsAt, eurOff: offer.eurOff },
    rooms: (rooms || []).map((r) => ({ id: r.id, product_key: r.product_key, starts_on: r.starts_on, days: r.schedule_days, time: String(r.schedule_time || '').slice(0, 5),
      timezone: r.timezone, seats: r.seats, max: r.max_students, state: r.room_state, decideAt: r.decide_at })),
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
  const { data: had } = await sb.from('entitlements').select('id').eq('user_id', user.id).eq('session_id', s.id).eq('status', 'active').limit(1);
  if (!had || !had.length) {
    const { error } = await sb.from('entitlements').insert({ user_id: user.id, product_key: 'trial', variant: 'list', band: 'A', currency: 'eur', cadence: 'once',
      source: 'admin', status: 'active', amount_paid: 0, session_id: s.id, offer: offer.code, starts_at: new Date().toISOString() });
    if (error) throw new Error('free class pass: ' + error.message);
  }
  // A place in the one-session class, so it shows under Classes (enrolled_cohort_id is left alone)
  const { data: en } = await sb.from('enrollments').select('id, status').eq('student_id', sp.id).eq('cohort_id', s.cohort_id).limit(1);
  if (en && en.length) { if (en[0].status !== 'active') await sb.from('enrollments').update({ status: 'active', cancelled_at: null }).eq('id', en[0].id); }
  else {
    const { error } = await sb.from('enrollments').insert({ student_id: sp.id, cohort_id: s.cohort_id, status: 'active' });
    if (error) throw new Error('free class place: ' + error.message);
  }
  return { status: 200, registered: true, at: s.scheduled_at };
}

module.exports = { parseOffer, discountFor, offerOf, rateOf, info, register };
