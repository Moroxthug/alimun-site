/**
 * Verified classes (owner, 13 Nov 2026; docs/OPERATIONS_PLAN.md, part 1). Reads Daily's own records of a class date's
 * room (meetings and their participants; who is in the room now) and works out what really happened. The meeting
 * token carries each person's account id (api/join-session.js), so Daily's records match Alimun's people.
 *
 * Outcome (owner's rule): held = the teacher was in the room for at least 90% of the scheduled time and at least one
 * learner joined; ended_early = teacher and learners met, the teacher for less; teacher_absent = learners came, the
 * teacher did not; no_learners = the teacher alone; not_held = nobody. The owner's test accounts are recorded but do
 * not count as learners.
 */
const { dailyFetch } = require('./daily.js');
const { isTestAccount } = require('./test-accounts.js');

const HELD_SHARE = 0.9;
const SETTLE_MIN = 20;          // minutes after the scheduled end before an outcome is set
const LOOK_BEFORE_MIN = 60, LOOK_AFTER_MIN = 120;

function roomName(session) {
  const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return 'alimun-' + (UUID.test(session.room_session_id || '') ? session.room_session_id : session.id);
}

/** Seconds of [a1, a2) inside [b1, b2) */
function overlap(a1, a2, b1, b2) { return Math.max(0, Math.min(a2, b2) - Math.max(a1, b1)) / 1000; }

/**
 * Pure: from people's intervals in the room to the class date's facts and outcome.
 * input: { start (ms), minutes, intervals: [{ userId, join (ms), leave (ms) }], who: { userId: { role, name, test } }, now (ms), ongoing }
 */
function summarise(input) {
  const start = input.start, end = start + input.minutes * 60000, now = input.now || Date.now();
  const by = {};
  input.intervals.forEach((iv) => {
    if (!iv.userId || !(iv.leave > iv.join)) return;
    const w = input.who[iv.userId] || { role: 'unknown' };
    const p = by[iv.userId] = by[iv.userId] || { userId: iv.userId, role: w.role, name: w.name || null, test: !!w.test, firstJoin: iv.join, lastLeave: iv.leave, seconds: 0, inSlot: 0, joins: 0 };
    p.firstJoin = Math.min(p.firstJoin, iv.join); p.lastLeave = Math.max(p.lastLeave, iv.leave);
    p.seconds += (iv.leave - iv.join) / 1000; p.inSlot += overlap(iv.join, iv.leave, start, end); p.joins++;
  });
  const people = Object.keys(by).map((k) => by[k]);
  people.forEach((p) => { p.seconds = Math.round(p.seconds); p.inSlot = Math.min(Math.round(p.inSlot), input.minutes * 60); });
  /* Most people at once: a sweep over every join and leave */
  const marks = [];
  input.intervals.forEach((iv) => { if (iv.userId && iv.leave > iv.join) { marks.push([iv.join, 1]); marks.push([iv.leave, -1]); } });
  marks.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let cur = 0, peak = 0; marks.forEach((m) => { cur += m[1]; if (cur > peak) peak = cur; });
  const teachers = people.filter((p) => p.role === 'teacher');
  const learners = people.filter((p) => p.role === 'learner' && !p.test);
  const teacherInSlot = teachers.reduce((a, p) => Math.max(a, p.inSlot), 0);
  const teacherJoin = teachers.length ? Math.min.apply(null, teachers.map((p) => p.firstJoin)) : null;
  const settled = !input.ongoing && now >= end + SETTLE_MIN * 60000;
  let outcome = null;
  if (settled) {
    if (!people.length) outcome = 'not_held';
    else if (!teachers.length) outcome = learners.length ? 'teacher_absent' : 'not_held';
    else if (!learners.length) outcome = 'no_learners';
    else outcome = teacherInSlot >= HELD_SHARE * input.minutes * 60 ? 'held' : 'ended_early';
  }
  return {
    people, peak, settled, outcome,
    actualStart: people.length ? Math.min.apply(null, people.map((p) => p.firstJoin)) : null,
    actualEnd: people.length ? Math.max.apply(null, people.map((p) => p.lastLeave)) : null,
    teacherJoinedAt: teacherJoin, teacherSeconds: Math.round(teacherInSlot),
    minutesLate: teacherJoin == null ? null : Math.max(0, Math.round((teacherJoin - start) / 60000)),
    learnersPresent: learners.length,
  };
}

/** Daily's meetings in a room between two moments, each with its participants */
async function meetingsOf(room, fromMs, toMs) {
  const q = `/meetings?room=${encodeURIComponent(room)}&timeframe_start=${Math.floor(fromMs / 1000)}&timeframe_end=${Math.ceil(toMs / 1000)}&limit=100`;
  const r = await dailyFetch(q);
  if (r.status === 404) return [];
  if (!r.ok) throw new Error(`Daily meetings ${r.status}: ${JSON.stringify(r.body).slice(0, 200)}`);
  const list = (r.body && r.body.data) || [];
  for (const m of list) {
    if (!Array.isArray(m.participants)) {
      const p = await dailyFetch(`/meetings/${encodeURIComponent(m.id)}/participants?limit=300`);
      m.participants = p.ok ? (p.body && p.body.data) || [] : [];
    }
  }
  return list;
}

/** Who is in a room right now: account ids (Daily's presence) */
async function presentNow(room) {
  const r = await dailyFetch(`/rooms/${encodeURIComponent(room)}/presence`);
  if (r.status === 404) return [];
  if (!r.ok) throw new Error(`Daily presence ${r.status}: ${JSON.stringify(r.body).slice(0, 200)}`);
  const list = (r.body && (r.body.data || r.body[room])) || [];
  return list.map((p) => p.userId || p.user_id).filter(Boolean);
}

/** The teacher and substitute of a class date's class, as account ids */
async function teachersOf(sb, cohort) {
  const ids = [cohort.teacher_id, cohort.substitute_teacher_id].filter(Boolean);
  if (!ids.length) return [];
  const { data } = await sb.from('teacher_profiles').select('user_id').in('id', ids);
  return (data || []).map((t) => t.user_id).filter(Boolean);
}

/** Role, name and test flag of each account id seen in a room */
async function whoAre(sb, userIds, teacherIds) {
  const who = {};
  if (!userIds.length) return who;
  const [{ data: st }, { data: te }] = await Promise.all([
    sb.from('student_profiles').select('user_id, full_name').in('user_id', userIds),
    sb.from('teacher_profiles').select('user_id, full_name').in('user_id', userIds),
  ]);
  const sName = {}, tName = {};
  (st || []).forEach((s) => { sName[s.user_id] = s.full_name; });
  (te || []).forEach((t) => { tName[t.user_id] = t.full_name; });
  for (const id of userIds) {
    let email = '', meta = {};
    try { const { data } = await sb.auth.admin.getUserById(id); email = (data && data.user && data.user.email) || ''; meta = (data && data.user && data.user.app_metadata) || {}; } catch (e) { /* unknown account */ }
    const name = tName[id] || sName[id] || null;
    const role = teacherIds.includes(id) ? 'teacher' : meta.role === 'admin' || tName[id] ? 'staff' : sName[id] ? 'learner' : 'unknown';
    who[id] = { role, name, test: isTestAccount({ email, name, app_metadata: meta }) };
  }
  return who;
}

/**
 * Reads Daily for one class date and stores what happened: video_meetings, class_presence and the session's facts.
 * session: a sessions row with cohorts(teacher_id, substitute_teacher_id, class_minutes). Returns the summary.
 */
async function verifySession(sb, session, now) {
  now = now || Date.now();
  const co = session.cohorts || {};
  const minutes = co.class_minutes || 60, start = new Date(session.scheduled_at).getTime(), room = roomName(session);
  const meetings = await meetingsOf(room, start - LOOK_BEFORE_MIN * 60000, start + (minutes + LOOK_AFTER_MIN) * 60000);
  const intervals = [], ids = new Set();
  let ongoing = false;
  for (const m of meetings) {
    if (m.ongoing) ongoing = true;
    await sb.from('video_meetings').upsert({ meeting_id: String(m.id), room, session_id: session.id, started_at: m.start_time ? new Date(m.start_time * 1000).toISOString() : null,
      duration_seconds: m.duration || null, ongoing: !!m.ongoing, participants: m.participants || [], fetched_at: new Date().toISOString() }, { onConflict: 'meeting_id' });
    for (const p of m.participants || []) {
      const uid = p.user_id || p.userId; if (!uid) continue;
      const join = (p.join_time || p.joinTime) * 1000, dur = (p.duration || 0) * 1000;
      intervals.push({ userId: uid, join, leave: m.ongoing && !p.duration ? now : join + dur });
      ids.add(uid);
    }
  }
  const teacherIds = await teachersOf(sb, co);
  const who = await whoAre(sb, Array.from(ids), teacherIds);
  const s = summarise({ start, minutes, intervals, who, now, ongoing });
  for (const p of s.people) {
    await sb.from('class_presence').upsert({ session_id: session.id, user_id: p.userId, role: p.role, name: p.name, is_test: p.test,
      first_join: new Date(p.firstJoin).toISOString(), last_leave: new Date(p.lastLeave).toISOString(), seconds: p.seconds, in_slot_seconds: p.inSlot, joins: p.joins,
      updated_at: new Date().toISOString() }, { onConflict: 'session_id,user_id' });
  }
  const iso = (ms) => (ms == null ? null : new Date(ms).toISOString());
  const patch = { actual_start: iso(s.actualStart), actual_end: iso(s.actualEnd), teacher_joined_at: iso(s.teacherJoinedAt), teacher_seconds: s.teacherSeconds,
    minutes_late: s.minutesLate, learners_present: s.learnersPresent, peak_people: s.peak, verified_at: new Date().toISOString() };
  if (s.outcome) patch.outcome = s.outcome;
  const { error } = await sb.from('sessions').update(patch).eq('id', session.id);
  if (error) throw new Error('session update: ' + error.message);
  return Object.assign({ room, meetings: meetings.length }, s);
}

module.exports = { summarise, verifySession, presentNow, teachersOf, roomName, HELD_SHARE, SETTLE_MIN };
