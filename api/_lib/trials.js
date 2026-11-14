/**
 * Teacher trial classes (docs/TEACHER_HIRING_PLAN.md, step 2; owner, 13 Nov 2026). Pure helpers, unit tested in
 * tests/unit/trials.test.js:
 *   trialSlots: start times for a 30-minute trial class from the teacher's weekly availability (teacher_availability rows:
 *     day_of_week 0 = Sunday, start_time, end_time, timezone, in the teacher's zone), from 48 hours to 21 days ahead,
 *     every half hour, none overlapping a busy time (the owner's interviews and classes, other trial classes);
 *   scorecard: what the admin decides on: punctuality, check-in, the teacher's time in the room, learners present, the
 *     learners' ratings and the recording.
 */
const IV = require('./interviews.js');
const MIN = 60000, HOUR = 3600000, DAY = 86400000;
const LEAD_HOURS = 48, AHEAD_DAYS = 21, MINUTES = 30, MAX_PLACES = 8;
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function hm(s) { const x = /^(\d{1,2}):(\d{2})/.exec(String(s || '')); return x && +x[1] <= 24 && +x[2] < 60 ? Math.min(1440, +x[1] * 60 + +x[2]) : null; }

/** { availability, now, busy: [[startMs, endMs]], minutes, leadHours, aheadDays } → ISO strings, sorted */
function trialSlots(o) {
  const minutes = o.minutes || MINUTES, len = minutes * MIN, now = o.now || Date.now();
  const from = now + (o.leadHours != null ? o.leadHours : LEAD_HOURS) * HOUR, ahead = o.aheadDays || AHEAD_DAYS, to = now + ahead * DAY;
  const busy = (o.busy || []).filter((b) => b[1] > from && b[0] < to);
  const rows = (o.availability || []).filter((r) => r && IV.validZone(r.timezone) && r.day_of_week >= 0 && r.day_of_week <= 6 && hm(r.start_time) != null && hm(r.end_time) != null);
  const out = new Set();
  for (const r of rows) {
    const a = hm(r.start_time), z = hm(r.end_time);
    for (let i = 0; i <= ahead + 1; i++) {
      const p = {};
      new Intl.DateTimeFormat('en-US', { timeZone: r.timezone, year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).formatToParts(new Date(now + i * DAY)).forEach((x) => { p[x.type] = x.value; });
      if (WEEKDAYS.indexOf(p.weekday) !== r.day_of_week) continue;
      /* Whole and half hours inside the range */
      for (let m = Math.ceil(a / 30) * 30; m + minutes <= z; m += 30) {
        const t = IV.zonedToUtc(+p.year, +p.month - 1, +p.day, m, r.timezone);
        if (t < from || t > to) continue;
        if (busy.some((b) => t < b[1] && t + len > b[0])) continue;
        out.add(t);
      }
    }
  }
  return Array.from(out).sort((x, y) => x - y).map((t) => new Date(t).toISOString());
}

/** The weekday name and HH:MM of a moment in a zone (for the one-date class's schedule fields) */
function wallClock(ms, tz) {
  const p = {};
  new Intl.DateTimeFormat('en-US', { timeZone: tz, hourCycle: 'h23', weekday: 'long', hour: '2-digit', minute: '2-digit' }).formatToParts(new Date(ms)).forEach((x) => { p[x.type] = x.value; });
  return { day: p.weekday, time: String(+p.hour % 24).padStart(2, '0') + ':' + p.minute };
}

/**
 * scorecard({ trial: { scheduled_at, minutes }, session: { minutes_late, teacher_seconds, learners_present, outcome,
 *   teacher_checked_in_at, teacher_checkin_via, verified_at }, accepted, ratings: [score 1..3], recordings: [{ id, kind,
 *   daily_recording_id, deleted_at, duration_seconds }], now })
 */
function scorecard(o) {
  const t = o.trial || {}, s = o.session || {}, minutes = t.minutes || MINUTES, start = Date.parse(t.scheduled_at), now = o.now || Date.now();
  const ended = now >= start + minutes * MIN;
  const verified = !!s.verified_at;
  const checkinAt = s.teacher_checked_in_at ? Date.parse(s.teacher_checked_in_at) : null;
  const teacherMinutes = verified ? Math.round((s.teacher_seconds || 0) / 60) : null;
  const ratings = (o.ratings || []).filter((x) => x >= 1 && x <= 3);
  const counts = { 3: 0, 2: 0, 1: 0 };
  ratings.forEach((x) => { counts[x]++; });
  const rec = (o.recordings || []).filter((r) => r.kind === 'full' && !r.deleted_at && r.daily_recording_id)[0] || null;
  return {
    ended, verified, outcome: s.outcome || null,
    minutesLate: verified ? (s.minutes_late || 0) : null,
    checkin: checkinAt ? { at: new Date(checkinAt).toISOString(), via: s.teacher_checkin_via || null, minutesBefore: Math.round((start - checkinAt) / MIN) } : null,
    teacherMinutes, ofMinutes: minutes, teacherShare: teacherMinutes == null ? null : Math.min(1, teacherMinutes / minutes),
    learnersPresent: verified ? (s.learners_present || 0) : null, learnersBooked: o.accepted || 0,
    ratings: { n: ratings.length, counts, mean: ratings.length ? Math.round((ratings.reduce((a, b) => a + b, 0) / ratings.length) * 10) / 10 : null },
    recording: rec ? { id: rec.id, minutes: rec.duration_seconds ? Math.round(rec.duration_seconds / 60) : null } : null
  };
}

module.exports = { trialSlots, wallClock, scorecard, LEAD_HOURS, AHEAD_DAYS, MINUTES, MAX_PLACES, LEVELS };
