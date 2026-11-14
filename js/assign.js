/**
 * Teacher assignment (docs/TEACHER_HIRING_PLAN.md, step 3; owner, 13 Nov 2026: "teacher can be then assigned
 * automatically to the best class suitable to their timetable, but preferably matches to one of our classes we create").
 * Shared by the browser (window.AlimunAssign), the server (api/_lib/assign.js) and the unit tests. Pure: it reads rooms,
 * teachers and their times, and writes nothing.
 *
 *   needs(room, ctx)  what a room lacks: a teacher (its teacher is no longer approved, declined the course contract, or
 *                     the room is held by an admin account whose contract is not accepted yet, the owner's placeholder),
 *                     or a substitute. A room an admin teaches with the contract accepted is only offered for a handover,
 *                     never assigned automatically.
 *   fit(room, teacher, ctx)  whether a teacher suits a room: their language; their levels and kinds when they said
 *                     which (room_availability); free at every class time of the room's first week, read on real dates in
 *                     their own zone (teacher_availability), or a room time they offered exactly; no clash with the rooms
 *                     they already teach. "sure" only when their times are known.
 *   plan(input)       every room that needs someone, with the teachers who fit, best first.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./tz.js'));
  else root.AlimunAssign = factory(root.AlimunTZ);
})(typeof self !== 'undefined' ? self : this, function (TZ) {
  'use strict';
  var KIND = { level_en: 'level_pack', level_de: 'level_pack', exam_en: 'exam_pack', exam_de: 'exam_pack', open_en: 'open_class', open_de: 'open_class', help_class: 'help_class' };
  var KIND_NAME = { level_pack: 'level pack', exam_pack: 'exam pack', open_class: 'open class', help_class: 'help class' };
  var ACTIVE = ['draft', 'published', 'open', 'running'];
  var DAY = 86400000;

  function ymd(t) { return new Date(t).toISOString().slice(0, 10); }
  function hm(t) { return String(t || '').slice(0, 5); }
  function minutesOf(room) { return room.class_minutes || 60; }

  /** The UTC starts of a room's classes in its first two weeks from `from` (its start date, or today when it runs) */
  function occurrences(room, now) {
    var days = (room.schedule_days || []).map(function (d) { return TZ.DAY_NAMES.indexOf(d); }).filter(function (d) { return d >= 0; });
    if (!days.length || !TZ.isValidTimezone(room.timezone) || !/^\d{1,2}:\d{2}/.test(String(room.schedule_time || ''))) return [];
    var today = ymd(now || Date.now()), start = room.starts_on && room.starts_on > today ? room.starts_on : today;
    /* scheduleOccurrences starts the day after `from` */
    var from = new Date(Date.parse(start + 'T00:00:00Z') - DAY);
    return TZ.scheduleOccurrences(days, hm(room.schedule_time), room.timezone, from).filter(function (d) { return d.getTime() < Date.parse(start + 'T00:00:00Z') + 15 * DAY; });
  }

  /** What a room lacks. ctx: { approved: { teacherId: true }, admins: { teacherId: true } } */
  function needs(room, ctx) {
    var out = [], approved = ctx.approved || {}, admins = ctx.admins || {};
    if (!room || !room.product_key || ACTIVE.indexOf(room.room_state) < 0) return out;
    var t = room.teacher_id;
    if (!t || !approved[t]) out.push({ role: 'teacher', why: 'its teacher is no longer approved', auto: true });
    else if (room.contract_declined_at && !room.contract_accepted_at) out.push({ role: 'teacher', why: 'its teacher declined the course contract', auto: true });
    else if (admins[t] && !room.contract_accepted_at) out.push({ role: 'teacher', why: 'you hold it until a teacher is found', auto: true });
    else if (admins[t]) out.push({ role: 'teacher', why: 'you teach it: a teacher could take it over', auto: false, handover: true });
    if (!room.substitute_teacher_id || !approved[room.substitute_teacher_id] || room.substitute_teacher_id === t) out.push({ role: 'substitute', why: 'it has no substitute', auto: true });
    return out;
  }

  /** Two weekly schedules overlap (each class lasts its room's minutes, with 15 minutes between classes), compared as
      minutes of the week in UTC so rooms that start in different weeks still clash */
  var WEEK_MIN = 7 * 1440;
  function mow(d) { return d.getUTCDay() * 1440 + d.getUTCHours() * 60 + d.getUTCMinutes(); }
  function clash(a, aMin, b, bMin) {
    return a.some(function (x) {
      return b.some(function (y) {
        var gap = ((mow(y) - mow(x)) % WEEK_MIN + WEEK_MIN) % WEEK_MIN; /* y after x, within the week */
        return gap < aMin + 15 || WEEK_MIN - gap < bMin + 15;
      });
    });
  }

  /**
   * fit(room, teacher, ctx): teacher { id, languages, rating, hiring_stage }; ctx { weekly: [teacher_availability rows],
   * offers: [room_availability rows], rooms: [rooms they teach or stand in for], role, now }.
   * Returns { ok, sure, score, why: [plain words], no: reason when not ok }.
   */
  function fit(room, teacher, ctx) {
    var why = [], role = ctx.role || 'teacher', now = ctx.now || Date.now();
    var lang = String(room.language || '').toLowerCase();
    if (!(teacher.languages || []).some(function (l) { return String(l).toLowerCase() === lang; })) return { ok: false, no: 'does not teach ' + room.language };
    var kind = KIND[room.product_key] || null;
    var offers = (ctx.offers || []).filter(function (o) { return String(o.language || '').toLowerCase() === lang; });
    var score = 50;
    if (offers.length) {
      var lv = offers.filter(function (o) { return (o.levels || []).indexOf(room.level) > -1 && (!kind || (o.kinds || []).indexOf(kind) > -1); });
      if (!lv.length) return { ok: false, no: 'did not offer ' + (kind ? KIND_NAME[kind] + ' ' : '') + room.level };
      why.push('offered ' + (kind ? KIND_NAME[kind] + ' ' : '') + room.level);
      if (role === 'substitute' && offers.some(function (o) { return o.substitute; })) { score += 15; why.push('willing to stand in'); }
    }
    var occ = occurrences(room, now), mins = minutesOf(room);
    if (!occ.length) return { ok: false, no: 'the room has no class times' };
    var exact = offers.some(function (o) {
      return hm(o.schedule_time) === hm(room.schedule_time) && o.timezone === room.timezone && (o.days || []).length === (room.schedule_days || []).length &&
        (room.schedule_days || []).every(function (d) { return (o.days || []).indexOf(d) > -1; }) && (!o.starts_on || !room.starts_on || o.starts_on <= room.starts_on);
    });
    var weekly = ctx.weekly || [], sure = false;
    if (exact) { score += 30; sure = true; why.push('offered exactly these times'); }
    else if (weekly.length) {
      var missed = occ.filter(function (d) { return !TZ.fitsSlot(d, mins, weekly); });
      if (missed.length) {
        var z = weekly[0].timezone || 'UTC', p = TZ.zonedParts(missed[0], z);
        return { ok: false, no: 'not free on ' + TZ.DAY_NAMES[p.weekday] + ' at ' + TZ.fmtMinutes(p.minutes) + ' their time' };
      }
      score += 20; sure = true; why.push('free at every class time');
    } else { score -= 30; why.push('their times are not known'); }
    var theirs = (ctx.rooms || []).filter(function (r) { return r.id !== room.id && ACTIVE.indexOf(r.room_state) > -1; });
    for (var i = 0; i < theirs.length; i++) {
      if (clash(occ, mins, occurrences(theirs[i], now), minutesOf(theirs[i]))) return { ok: false, no: 'teaches ' + theirs[i].language + ' ' + theirs[i].level + ' at the same time' };
    }
    if (theirs.length) { score -= 5 * theirs.length; why.push('already has ' + theirs.length + (theirs.length === 1 ? ' room' : ' rooms')); }
    else if (teacher.hiring_stage === 'approved') { score += 10; why.push('newly approved, no room yet'); }
    if (teacher.rating) score += Math.round(Number(teacher.rating) * 2);
    return { ok: true, sure: sure, score: score, why: why };
  }

  /**
   * plan({ rooms, teachers, weekly: { teacherId: rows }, offers: { teacherId: rows }, admins: { teacherId: true },
   *   dismissed: { 'cohort|teacher|role': true }, now }) → [{ room, role, why, auto, handover, candidates: [{ teacher, fit }] }]
   * Teachers: approved ones (admins are never candidates). A teacher's own rooms come from `rooms`.
   */
  function plan(input) {
    var rooms = input.rooms || [], teachers = (input.teachers || []).filter(function (t) { return t.status === 'approved'; }), admins = input.admins || {};
    var approved = {}; teachers.forEach(function (t) { approved[t.id] = true; });
    var out = [];
    rooms.forEach(function (room) {
      needs(room, { approved: approved, admins: admins }).forEach(function (n) {
        var list = [];
        teachers.forEach(function (t) {
          if (admins[t.id] || t.id === room.teacher_id || t.id === room.substitute_teacher_id) return;
          if ((input.dismissed || {})[[room.id, t.id, n.role].join('|')]) return;
          var theirs = rooms.filter(function (r) { return r.teacher_id === t.id || r.substitute_teacher_id === t.id; });
          var f = fit(room, t, { weekly: (input.weekly || {})[t.id] || [], offers: (input.offers || {})[t.id] || [], rooms: theirs, role: n.role, now: input.now });
          if (f.ok) list.push({ teacher: t, fit: f });
        });
        list.sort(function (a, b) { return (b.fit.sure - a.fit.sure) || b.fit.score - a.fit.score || String(a.teacher.full_name).localeCompare(String(b.teacher.full_name)); });
        out.push({ room: room, role: n.role, why: n.why, auto: n.auto, handover: !!n.handover, candidates: list });
      });
    });
    /* Rooms that need a teacher first, then the soonest */
    out.sort(function (a, b) { return (a.role === 'teacher' ? 0 : 1) - (b.role === 'teacher' ? 0 : 1) || (a.handover ? 1 : 0) - (b.handover ? 1 : 0) || String(a.room.starts_on).localeCompare(String(b.room.starts_on)); });
    return out;
  }

  return { needs: needs, fit: fit, plan: plan, occurrences: occurrences, KIND: KIND, KIND_NAME: KIND_NAME };
});
