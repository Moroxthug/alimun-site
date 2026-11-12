/**
 * Rooms (docs/LAUNCH_PRICING_SPEC.md section 7; docs/PRICING_ENGINE_SPEC.md section 8; build step 7).
 *
 * A room is a cohort with a product_key. Its room_state follows the start-date timeline, run once a day by
 * runRoomJob() (/api/pricing?action=cron-rooms):
 *
 *   21 days before  draft → published, only with a teacher and a named substitute (otherwise the owner is told).
 *                   Open-class and help-class rooms go straight to open: they are sold while they run.
 *   10 days before  packs: rooms of the same product, level and start date that are short of their minimum are merged
 *                   into a room with free seats where that makes one reach it; rooms at their minimum (8) open and the
 *                   teacher is offered the course contract; the rest are cancelled: reservations end with nothing
 *                   charged and the learners are emailed.
 *   7 days before   an open room whose contract is not accepted: the owner is told (no penalty for the teacher).
 *   Start day       with the contract accepted: reserved packs are charged (startPack), learners are enrolled, the room
 *                   runs. Without it nothing is charged and the owner is told.
 *   Afterwards      a reserved seat whose start-day payment failed is released after 3 days; a room whose last class
 *                   is over is finished.
 *
 * planDecisions() is the pure part of the 10-day step, unit tested in tests/unit/rooms.test.js.
 */
const E = require('./entitlements.js');
const { enrol, unenrol } = E;

const KINDS = {
  level_pack: { tier: 'pack', min: 8, max: 12, minutes: 60, days: ['Monday', 'Tuesday', 'Thursday'], goal: 'foundations' },
  exam_pack: { tier: 'exam', min: 8, max: 12, minutes: 60, days: ['Monday', 'Tuesday', 'Thursday'], goal: 'academic' },
  open_class: { tier: 'open', min: 12, max: 20, minutes: 60, days: ['Wednesday'], goal: 'pleasure' },
  help_class: { tier: 'help', min: 3, max: 8, minutes: 30, days: ['Sunday'], goal: 'foundations' },
};
const PRODUCT_KIND = {
  level_en: 'level_pack', level_de: 'level_pack', exam_en: 'exam_pack', exam_de: 'exam_pack',
  open_en: 'open_class', open_de: 'open_class', help_class: 'help_class',
};
const LANGUAGE = { en: 'English', de: 'German' };
const DAY = 86400000;

const isPack = (productKey) => /_pack$/.test(PRODUCT_KIND[productKey] || '');
function ymd(d) { return new Date(d).toISOString().slice(0, 10); }
function addDays(dateStr, n) { return ymd(Date.parse(dateStr + 'T00:00:00Z') + n * DAY); }

/**
 * The 10-day decision for pack rooms. rooms: [{ id, product_key, level, starts_on, max_students, min_learners, seats }].
 * Returns { merges: [{ from, into, seats }], open: [id], cancel: [id] }. Small rooms (fewest seats first) move into the
 * room of the same product, level and start date with the most seats that still has room for them, when that room
 * then reaches its minimum or already had it.
 */
function planDecisions(rooms) {
  const merges = [], open = [], cancel = [];
  const groups = {};
  for (const r of rooms) (groups[[r.product_key, r.level, r.starts_on].join('|')] = groups[[r.product_key, r.level, r.starts_on].join('|')] || []).push(Object.assign({}, r));
  for (const key of Object.keys(groups)) {
    const g = groups[key];
    const minOf = (r) => r.min_learners || (KINDS[PRODUCT_KIND[r.product_key]] || {}).min || 8;
    const small = g.filter((r) => r.seats < minOf(r) && r.seats > 0).sort((a, b) => a.seats - b.seats);
    for (const s of small) {
      if (s.gone) continue;
      const target = g.filter((t) => t !== s && !t.gone && t.seats + s.seats <= t.max_students && t.seats >= s.seats)
        .sort((a, b) => b.seats - a.seats)[0];
      if (target && (target.seats + s.seats >= minOf(target))) {
        merges.push({ from: s.id, into: target.id, seats: s.seats });
        target.seats += s.seats; s.seats = 0; s.gone = true;
      }
    }
    for (const r of g) {
      if (r.gone) continue;
      (r.seats >= minOf(r) ? open : cancel).push(r.id);
    }
  }
  return { merges, open, cancel };
}

/** A class with its own decision time: open with at least `min` learners across its linked rooms (pure, unit tested). */
function decideLinked(seats, min) { return seats >= Math.max(1, min || 0) ? 'open' : 'cancel'; }

// ── Planning: suggested rooms from the teachers' availability and the learners' demand ──
const WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
/** Pack start dates: the first Monday of each month, the next n that still leave 14 days to fill the room. */
function packStarts(today, n) {
  const out = [];
  let y = +today.slice(0, 4), m = +today.slice(5, 7) - 1;
  while (out.length < n) {
    const first = new Date(Date.UTC(y, m, 1));
    const monday = ymd(Date.UTC(y, m, 1 + ((8 - first.getUTCDay()) % 7)));
    if (monday >= addDays(today, 14)) out.push(monday);
    m += 1; if (m > 11) { m = 0; y += 1; }
  }
  return out;
}
/** The first class date on one of `days` on or after `from`. */
function firstOn(from, days) {
  for (let i = 0; i < 7; i++) { const d = addDays(from, i); if (days.includes(WEEK[new Date(d + 'T12:00:00Z').getUTCDay()])) return d; }
  return from;
}
const languageOf = (productKey) => LANGUAGE[String(productKey).slice(-2)] || null;
/**
 * Suggested rooms (pure, unit tested). availability: room_availability rows, whose starts_on is the day the
 * teacher can start from; demand: { 'level_en|A1': 6, ... };
 * taken: keys 'product|level' that already have an upcoming room or a pending or approved suggestion, and
 * 'product|level|start' that the owner dismissed; minDemand: the setting room_suggest_min.
 * For each product and level with enough demand: the earliest start date where a teacher can teach it (packs: the first
 * Monday of a month at least 14 days ahead and on or after the teacher's date; open classes: the teacher's first day at
 * least 7 days ahead), one room per 12 (packs)
 * or 20 (open classes) learners asking, each with a different teacher, and a substitute: another teacher who said they
 * can stand in for that language and is available by then (null when there is none; the owner adds one).
 */
function planProposals({ today, availability, demand, taken, minDemand }) {
  const out = [], subUse = {};
  const takenSet = new Set(taken || []);
  for (const key of Object.keys(demand).sort()) {
    const n = demand[key];
    const [productKey, level] = key.split('|');
    const kind = PRODUCT_KIND[productKey], language = languageOf(productKey);
    if (!kind || kind === 'help_class' || !language || !level || n < minDemand || takenSet.has(productKey + '|' + level)) continue;
    const pack = isPack(productKey), K = KINDS[kind];
    const slots = [];
    for (const a of availability) {
      if (a.language !== language || !a.kinds.includes(kind) || !a.levels.includes(level)) continue;
      let start;
      if (pack) { start = packStarts(today, 6).find((d) => d >= a.starts_on && !takenSet.has([productKey, level, d].join('|'))); if (!start) continue; }
      else start = firstOn(a.starts_on > addDays(today, 7) ? a.starts_on : addDays(today, 7), a.days);
      if (takenSet.has([productKey, level, start].join('|'))) continue;
      slots.push(Object.assign({ start }, a));
    }
    if (!slots.length) continue;
    slots.sort((x, y) => (x.start < y.start ? -1 : x.start > y.start ? 1 : x.schedule_time < y.schedule_time ? -1 : 1));
    const start = slots[0].start;
    const rooms = Math.max(1, Math.ceil(n / K.max));
    const teachers = new Set();
    let made = 0;
    for (const s of slots.filter((x) => x.start === start)) {
      if (made >= rooms || teachers.has(s.teacher_id)) continue;
      const subs = availability.filter((a) => a.substitute && a.language === language && a.teacher_id !== s.teacher_id && a.starts_on <= start)
        .map((a) => a.teacher_id).filter((t, i, all) => all.indexOf(t) === i)
        .sort((x, y) => (subUse[x] || 0) - (subUse[y] || 0));
      const sub = subs[0] || null;
      if (sub) subUse[sub] = (subUse[sub] || 0) + 1;
      teachers.add(s.teacher_id);
      out.push({ product_key: productKey, level, starts_on: start, schedule_days: pack ? s.days : [WEEK[new Date(start + 'T12:00:00Z').getUTCDay()]],
        schedule_time: s.schedule_time, timezone: s.timezone, teacher_id: s.teacher_id, substitute_teacher_id: sub, demand: n });
      made++;
    }
  }
  return out;
}

// ── The daily job ──
async function rows(q, what) {
  const { data, error } = await q;
  if (error) throw new Error(what + ': ' + error.message);
  return data || [];
}
async function seatsOf(sb, cohortId) {
  const { data, error } = await sb.rpc('room_seats', { p_cohort: cohortId });
  if (error) throw new Error('room_seats: ' + error.message);
  return data || 0;
}
async function setRoom(sb, id, fields) {
  const { error } = await sb.from('cohorts').update(Object.assign({ updated_at: new Date().toISOString() }, fields)).eq('id', id);
  if (error) throw new Error('room update: ' + error.message);
}
async function cancelSessions(sb, cohortId) {
  await sb.from('sessions').update({ status: 'cancelled' }).eq('cohort_id', cohortId).eq('status', 'scheduled');
}
async function reservations(sb, cohortId) {
  return rows(sb.from('entitlements').select('*').eq('cohort_id', cohortId).eq('status', 'pending_room').is('session_id', null), 'reservations');
}
/** Demand per 'product|level': learners asking to be told (not told yet) and room-less pack reservations (by the
    learner's level), each learner counted once per product. */
async function demandOf(sb) {
  const d = {}, seen = new Set();
  const add = (k) => { d[k] = (d[k] || 0) + 1; };
  for (const r of await rows(sb.from('room_interest').select('user_id, product_key, level').is('notified_at', null), 'interest')) {
    if (!r.level) continue;
    add(r.product_key + '|' + r.level); seen.add(r.user_id + '|' + r.product_key);
  }
  const res = await rows(sb.from('entitlements').select('user_id, product_key').eq('status', 'pending_room').is('cohort_id', null).is('session_id', null), 'room-less reservations');
  const levels = await levelsOf(sb, res.map((r) => r.user_id));
  for (const r of res) if (levels[r.user_id] && !seen.has(r.user_id + '|' + r.product_key)) { add(r.product_key + '|' + levels[r.user_id]); seen.add(r.user_id + '|' + r.product_key); }
  return d;
}
async function levelsOf(sb, userIds) {
  const ids = [...new Set(userIds)];
  if (!ids.length) return {};
  return Object.fromEntries((await rows(sb.from('student_profiles').select('user_id, level').in('user_id', ids), 'levels')).map((p) => [p.user_id, p.level]));
}
/** The day's suggestions: new rows in room_proposals, returned with the lines the owner is sent. */
async function suggestRooms(ctx, now) {
  const { sb } = ctx;
  const today = ymd(now || new Date());
  const all = await rows(sb.from('room_availability').select('*'), 'availability');
  if (!all.length) return { made: [], lines: [] };
  const names = Object.fromEntries((await rows(sb.from('teacher_profiles').select('id, full_name, status').in('id', [...new Set(all.map((a) => a.teacher_id))]), 'teachers'))
    .filter((t) => t.status === 'approved').map((t) => [t.id, t.full_name || 'a teacher']));
  const availability = all.filter((a) => names[a.teacher_id]);
  const { data: setting } = await sb.from('app_settings').select('value').eq('key', 'room_suggest_min').maybeSingle();
  const minDemand = Math.max(1, parseInt(setting && setting.value, 10) || 5);
  const taken = [];
  for (const r of await rows(sb.from('cohorts').select('product_key, level, room_state').in('room_state', ['draft', 'published', 'open', 'running']), 'upcoming rooms')) {
    if (r.product_key && (r.room_state !== 'running' || !isPack(r.product_key))) taken.push(r.product_key + '|' + r.level);
  }
  for (const p of await rows(sb.from('room_proposals').select('product_key, level, starts_on, status'), 'suggestions')) {
    if (p.status === 'pending') taken.push(p.product_key + '|' + p.level);
    else if (p.status === 'dismissed') taken.push([p.product_key, p.level, p.starts_on].join('|'));
  }
  const plan = planProposals({ today, availability, demand: await demandOf(sb), taken, minDemand });
  const made = [], lines = [];
  for (const p of plan) {
    const { data, error } = await sb.from('room_proposals').upsert(p, { onConflict: 'product_key,level,starts_on,schedule_time', ignoreDuplicates: true }).select('id');
    if (error) throw new Error('suggestion: ' + error.message);
    if (!data || !data.length) continue;
    made.push(Object.assign({ id: data[0].id }, p));
    lines.push(`Room suggestion: ${p.product_key} ${p.level} from ${p.starts_on} (${p.schedule_days.join(', ')} ${p.schedule_time} ${p.timezone}), ${p.demand} learners asking, ` +
      `teacher ${names[p.teacher_id]}, substitute ${p.substitute_teacher_id ? names[p.substitute_teacher_id] : 'none yet'}. Approve or dismiss it in Admin, Classes, Rooms.`);
  }
  return { made, lines };
}
/** A room is published (packs) or open (open classes): learners who asked, and room-less pack reservations at that
    level, are emailed once with a link to choose it. Returns how many were told. */
async function announceRoom(ctx, room) {
  const { sb } = ctx;
  const told = new Set();
  for (const a of await rows(sb.from('room_interest').select('user_id, level').eq('product_key', room.product_key).is('notified_at', null), 'interest')) {
    if (a.level && a.level !== room.level) continue;
    await ctx.tell.learner(a.user_id, 'room_published', room, {});
    await sb.from('room_interest').update({ notified_at: new Date().toISOString() }).eq('user_id', a.user_id).eq('product_key', room.product_key);
    told.add(a.user_id);
  }
  if (isPack(room.product_key)) {
    const res = await rows(sb.from('entitlements').select('user_id').eq('product_key', room.product_key).eq('status', 'pending_room').is('cohort_id', null).is('session_id', null), 'room-less reservations');
    const levels = await levelsOf(sb, res.map((r) => r.user_id));
    for (const r of res) {
      if (told.has(r.user_id) || levels[r.user_id] !== room.level) continue;
      await ctx.tell.learner(r.user_id, 'room_published', room, {});
      told.add(r.user_id);
    }
  }
  return told.size;
}

/**
 * Runs the day's room steps. ctx: entitlements ctx (sb, stripe, notify, markerSecret) plus
 * ctx.tell = { learner(userId, kind, room, extra), teacher(teacherId, kind, room, extra), owner(lines) }.
 */
async function runRoomJob(ctx, now) {
  const { sb } = ctx;
  const today = ymd(now || new Date());
  const out = { published: 0, opened: 0, merged: 0, cancelled: 0, started: 0, charged: 0, chargeProblems: 0, released: 0, finished: 0 };
  const attention = [];
  try {
    const sug = await suggestRooms(ctx, now);
    out.suggested = sug.made.length;
    attention.push(...sug.lines);
  } catch (e) { attention.push('Room suggestions could not be worked out today: ' + (e && e.message)); }
  const label = (r) => `${r.product_key} ${r.level} from ${r.starts_on} (${(r.schedule_days || []).join(', ')} ${String(r.schedule_time || '').slice(0, 5)} ${r.timezone})`;

  // 21 days before: publish
  const drafts = await rows(sb.from('cohorts').select('*').eq('room_state', 'draft').lte('starts_on', addDays(today, 21)), 'drafts');
  for (const r of drafts) {
    if (!r.teacher_id || !r.substitute_teacher_id) { attention.push(`Not published, needs a teacher and a substitute: ${label(r)}.`); continue; }
    if (isPack(r.product_key)) {
      await setRoom(sb, r.id, { room_state: 'published', published_at: new Date().toISOString() });
    } else {
      await setRoom(sb, r.id, { room_state: 'open', published_at: new Date().toISOString(), decided_at: new Date().toISOString(), contract_offered_at: new Date().toISOString() });
      await ctx.tell.teacher(r.teacher_id, 'contract_offer', r, { learners: 0 });
    }
    out.announced = (out.announced || 0) + await announceRoom(ctx, r);
    out.published++;
  }

  // 10 days before: merge, open or cancel the pack rooms
  // Rooms with their own decision time (decide_at, with a linked room counted together): open both or cancel both
  const decideNow = await rows(sb.from('cohorts').select('*').eq('room_state', 'published').not('decide_at', 'is', null).lte('decide_at', (now || new Date()).toISOString()), 'rooms to decide');
  const seen = new Set();
  for (const r of decideNow) {
    if (seen.has(r.id)) continue;
    const pair = [r];
    if (r.linked_room) {
      const other = decideNow.find((x) => x.id === r.linked_room) ||
        (await rows(sb.from('cohorts').select('*').eq('id', r.linked_room).eq('room_state', 'published'), 'linked room'))[0];
      if (other) pair.push(other);
    }
    pair.forEach((x) => seen.add(x.id));
    let seats = 0;
    for (const x of pair) seats += await seatsOf(sb, x.id);
    const min = Math.max(...pair.map((x) => (isPack(x.product_key) ? x.min_learners : 0) || 0), r.min_learners || 0);
    const d = decideLinked(seats, min);
    for (const x of pair) {
      if (d === 'open') {
        await setRoom(sb, x.id, { room_state: 'open', decided_at: new Date().toISOString(), contract_offered_at: x.contract_offered_at || new Date().toISOString() });
        out.opened++;
      } else {
        for (const ent of await reservations(sb, x.id)) {
          await E.releasePack(ctx, ent);
          await ctx.tell.learner(ent.user_id, 'room_cancelled', x, {});
        }
        await setRoom(sb, x.id, { room_state: 'cancelled', decided_at: new Date().toISOString() });
        await cancelSessions(sb, x.id);
        out.cancelled++;
      }
    }
    attention.push(`${label(r)}: ${seats} of ${min} learners signed up, so the class ${d === 'open' ? 'opens and starts on ' + r.starts_on : 'was cancelled and nothing was charged'}.`);
  }

  const due = (await rows(sb.from('cohorts').select('*').eq('room_state', 'published').lte('starts_on', addDays(today, 10)), 'due rooms'))
    .filter((r) => !r.decide_at);
  const packRooms = [];
  for (const r of due.filter((x) => isPack(x.product_key))) packRooms.push(Object.assign({}, r, { seats: await seatsOf(sb, r.id) }));
  const byId = Object.fromEntries(packRooms.map((r) => [r.id, r]));
  const plan = planDecisions(packRooms);
  for (const m of plan.merges) {
    const from = byId[m.from], into = byId[m.into];
    for (const ent of await reservations(sb, from.id)) {
      await sb.from('entitlements').update({ cohort_id: into.id, updated_at: new Date().toISOString() }).eq('id', ent.id);
      await ctx.tell.learner(ent.user_id, 'room_merged', into, { from });
    }
    await setRoom(sb, from.id, { room_state: 'cancelled', merged_into: into.id, decided_at: new Date().toISOString() });
    await cancelSessions(sb, from.id);
    if (from.teacher_id !== into.teacher_id) await ctx.tell.teacher(from.teacher_id, 'room_not_opening', from, {});
    out.merged++;
  }
  for (const id of plan.open) {
    const r = byId[id];
    await setRoom(sb, id, { room_state: 'open', decided_at: new Date().toISOString(), contract_offered_at: new Date().toISOString() });
    await ctx.tell.teacher(r.teacher_id, 'contract_offer', r, { learners: await seatsOf(sb, id) });
    out.opened++;
  }
  for (const id of plan.cancel) {
    const r = byId[id];
    for (const ent of await reservations(sb, id)) {
      await E.releasePack(ctx, ent);
      await ctx.tell.learner(ent.user_id, 'room_cancelled', r, {});
    }
    await setRoom(sb, id, { room_state: 'cancelled', decided_at: new Date().toISOString() });
    await cancelSessions(sb, id);
    if (r.teacher_id) await ctx.tell.teacher(r.teacher_id, 'room_not_opening', r, {});
    out.cancelled++;
  }

  // 7 days before and on the day: contracts, then the start
  const open = await rows(sb.from('cohorts').select('*').eq('room_state', 'open').lte('starts_on', addDays(today, 7)), 'open rooms');
  for (const r of open) {
    if (r.contract_declined_at && !r.contract_accepted_at) { attention.push(`The teacher declined the course contract: ${label(r)}. Choose another teacher in Admin, Classes.`); continue; }
    if (!r.contract_accepted_at) {
      attention.push(`${r.starts_on <= today ? 'Starts today but nothing was charged: ' : ''}course contract not accepted yet: ${label(r)}.`);
      continue;
    }
    if (r.starts_on > today) continue;
    for (const ent of await reservations(sb, r.id)) {
      const res = await E.startPack(ctx, ent, new Date());
      if (res.status === 'scheduled' || res.status === 'paid') out.charged++;
      else out.chargeProblems++;
      await enrol(sb, ent.user_id, r.id);
    }
    // Open-class learners paid when they bought: make sure they are in the room
    for (const ent of await rows(sb.from('entitlements').select('user_id').eq('cohort_id', r.id).eq('status', 'active').is('session_id', null), 'room learners')) {
      await enrol(sb, ent.user_id, r.id);
    }
    await setRoom(sb, r.id, { room_state: 'running' });
    out.started++;
  }

  // Afterwards: release seats whose start-day payment stayed unpaid; finish rooms whose last class is over
  const running = await rows(sb.from('cohorts').select('id, product_key, level, starts_on, schedule_days, schedule_time, timezone').eq('room_state', 'running'), 'running rooms');
  for (const r of running) {
    for (const ent of await reservations(sb, r.id)) {
      if (ent.payment_failed_at && Date.parse(ent.payment_failed_at) < Date.now() - 3 * DAY) {
        await E.releasePack(ctx, ent);
        await unenrol(sb, ent.user_id, r.id);
        out.released++;
      }
    }
    const last = await rows(sb.from('sessions').select('scheduled_at').eq('cohort_id', r.id).neq('status', 'cancelled').order('scheduled_at', { ascending: false }).limit(1), 'last session');
    if (!last.length || Date.parse(last[0].scheduled_at) < Date.now() - DAY) {
      await setRoom(sb, r.id, { room_state: 'finished', status: 'completed' });
      out.finished++;
    }
  }

  if (attention.length) await ctx.tell.owner(attention);
  out.attention = attention.length;
  return out;
}

/** Whether a room or a session can take one more learner for this product (checked at quote and at purchase). */
async function seatProblem(sb, productKey, cohortId, sessionId) {
  const kind = PRODUCT_KIND[productKey];
  if (productKey === 'trial' || productKey === 'help_class') {
    if (!sessionId) return 'session_required';
    const { data: s } = await sb.from('sessions').select('id, cohort_id, scheduled_at, status').eq('id', sessionId).maybeSingle();
    if (!s || s.status !== 'scheduled' || Date.parse(s.scheduled_at) < Date.now() + 3600000) return 'session_unavailable';
    const { data: r } = await sb.from('cohorts').select('id, product_key, room_state, max_students').eq('id', s.cohort_id).maybeSingle();
    if (!r || !r.product_key) return 'session_unavailable';
    if (productKey === 'help_class' ? r.product_key !== 'help_class' || !['open', 'running'].includes(r.room_state)
      : r.product_key === 'help_class' || r.room_state !== 'running') return 'session_unavailable';
    const { data: n, error } = await sb.rpc('session_seats', { p_session: sessionId });
    if (error) throw new Error('session_seats: ' + error.message);
    return n >= r.max_students ? 'room_full' : null;
  }
  if (!kind) return null;
  if (!cohortId) return kind === 'open_class' ? 'room_required' : null;   // a pack may be reserved for the next start
  const { data: r } = await sb.from('cohorts').select('id, product_key, room_state, max_students, decide_at').eq('id', cohortId).maybeSingle();
  if (!r || r.product_key !== productKey) return 'room_unavailable';
  /* An open class waiting for its decision (decide_at) is reserved like a pack */
  const ok = kind === 'open_class' ? (r.decide_at ? ['published', 'open', 'running'] : ['open', 'running']) : ['published', 'open'];
  if (!ok.includes(r.room_state)) return 'room_unavailable';
  return (await seatsOf(sb, cohortId)) >= r.max_students ? 'room_full' : null;
}

module.exports = { KINDS, PRODUCT_KIND, LANGUAGE, planDecisions, decideLinked, planProposals, packStarts, demandOf, suggestRooms, announceRoom, runRoomJob, seatProblem, enrol, unenrol, isPack, addDays, ymd };
