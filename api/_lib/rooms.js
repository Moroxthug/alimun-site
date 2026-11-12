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
/**
 * Runs the day's room steps. ctx: entitlements ctx (sb, stripe, notify, markerSecret) plus
 * ctx.tell = { learner(userId, kind, room, extra), teacher(teacherId, kind, room, extra), owner(lines) }.
 */
async function runRoomJob(ctx, now) {
  const { sb } = ctx;
  const today = ymd(now || new Date());
  const out = { published: 0, opened: 0, merged: 0, cancelled: 0, started: 0, charged: 0, chargeProblems: 0, released: 0, finished: 0 };
  const attention = [];
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
    out.published++;
  }

  // 10 days before: merge, open or cancel the pack rooms
  const due = await rows(sb.from('cohorts').select('*').eq('room_state', 'published').lte('starts_on', addDays(today, 10)), 'due rooms');
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
  const { data: r } = await sb.from('cohorts').select('id, product_key, room_state, max_students').eq('id', cohortId).maybeSingle();
  if (!r || r.product_key !== productKey) return 'room_unavailable';
  const ok = kind === 'open_class' ? ['open', 'running'] : ['published', 'open'];
  if (!ok.includes(r.room_state)) return 'room_unavailable';
  return (await seatsOf(sb, cohortId)) >= r.max_students ? 'room_full' : null;
}

module.exports = { KINDS, PRODUCT_KIND, LANGUAGE, planDecisions, runRoomJob, seatProblem, enrol, unenrol, isPack, addDays, ymd };
