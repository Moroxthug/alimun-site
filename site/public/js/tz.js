/**
 * Alimun timezone helpers, shared by the browser (window.AlimunTZ) and the
 * serverless functions (require('../js/tz.js')).
 *
 * Weekly schedules (teacher availability, cohort schedule_time) are wall-clock
 * times in an IANA timezone. Converting them between zones depends on the
 * date because of daylight saving, so every conversion here works on a real
 * calendar date, never on a fixed reference week.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.AlimunTZ = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const fmtCache = {};

  function isValidTimezone(tz) {
    if (typeof tz !== 'string' || !tz || tz.length > 64) return false;
    try { new Intl.DateTimeFormat('en-US', { timeZone: tz }); return true; } catch (e) { return false; }
  }

  function formatter(tz) {
    if (!fmtCache[tz]) {
      fmtCache[tz] = new Intl.DateTimeFormat('en-US', {
        timeZone: tz, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', weekday: 'short',
      });
    }
    return fmtCache[tz];
  }

  /** Wall-clock parts of a UTC instant in `tz`: { y, m, d, weekday (0=Sun), minutes }. */
  function zonedParts(date, tz) {
    const p = {};
    formatter(tz).formatToParts(date).forEach((x) => { p[x.type] = x.value; });
    const hour = Number(p.hour) % 24;
    return {
      y: Number(p.year), m: Number(p.month), d: Number(p.day),
      weekday: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday),
      minutes: hour * 60 + Number(p.minute),
    };
  }

  /** UTC Date for wall-clock y-m-d + minutes-after-midnight in `tz`. */
  function zonedToUtc(y, m, d, minutes, tz) {
    const target = Date.UTC(y, m - 1, d, 0, minutes);
    let guess = target;
    // Two passes settle the offset, including across a DST change.
    for (let i = 0; i < 2; i++) {
      const p = zonedParts(new Date(guess), tz);
      const seen = Date.UTC(p.y, p.m - 1, p.d, 0, p.minutes);
      guess += target - seen;
    }
    return new Date(guess);
  }

  function toMinutes(t) {
    const [h, m] = String(t).split(':').map(Number);
    return h * 60 + (m || 0);
  }

  function fmtMinutes(min) {
    return `${String(Math.floor(min / 60)).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`;
  }

  /**
   * UTC start of every occurrence of a weekly schedule, the same dates
   * generate_cohort_sessions() uses: the 84 calendar days starting tomorrow
   * (UTC), keeping those whose weekday is in `dayIdx`, at `time` in `tz`.
   */
  function scheduleOccurrences(dayIdx, time, tz, from) {
    const start = from ? new Date(from) : new Date();
    const out = [];
    const mins = toMinutes(time);
    for (let i = 1; i <= 84; i++) {
      const day = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate() + i));
      if (!dayIdx.includes(day.getUTCDay())) continue;
      out.push(zonedToUtc(day.getUTCFullYear(), day.getUTCMonth() + 1, day.getUTCDate(), mins, tz));
    }
    return out;
  }

  /** True if [start, start+durationMin) lies inside one availability slot, read in the slot's own timezone. */
  function fitsSlot(start, durationMin, slots) {
    return slots.some((s) => {
      const tz = s.timezone || 'UTC';
      const a = zonedParts(start, tz);
      const b = zonedParts(new Date(start.getTime() + durationMin * 60000), tz);
      let endMin = b.minutes;
      if (b.weekday !== a.weekday) {
        if (b.minutes !== 0) return false; // crosses midnight in the slot's zone
        endMin = 1440; // ends exactly at midnight
      }
      return a.weekday === s.day_of_week && toMinutes(s.start_time) <= a.minutes && endMin <= toMinutes(s.end_time);
    });
  }

  /** Next occurrence of a weekly wall-clock time (`dayName`, `time` in `fromTz`) shown in `toTz`. */
  function convertWeekly(dayName, time, fromTz, toTz, from) {
    const idx = DAY_NAMES.findIndex((n) => n.toLowerCase() === String(dayName).trim().toLowerCase());
    if (idx < 0 || !isValidTimezone(fromTz) || !isValidTimezone(toTz)) return null;
    const occ = scheduleOccurrences([idx], time, fromTz, from)[0];
    if (!occ) return null;
    const p = zonedParts(occ, toTz);
    return { dayIndex: p.weekday, dayName: DAY_NAMES[p.weekday], time: fmtMinutes(p.minutes) + ':00', date: occ };
  }

  function browserTimezone() {
    try { return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'; } catch (e) { return 'UTC'; }
  }

  return { DAY_NAMES, isValidTimezone, zonedParts, zonedToUtc, toMinutes, fmtMinutes, scheduleOccurrences, fitsSlot, convertWeekly, browserTimezone };
});
