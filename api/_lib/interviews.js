/**
 * Teacher interviews (docs/TEACHER_HIRING_PLAN.md, step 1; owner, 13 Nov 2026). Pure helpers: the owner's weekly
 * interview hours (app_settings.interview_hours = { tz, minutes, days: { "1": [["09:00", "12:00"]], ... } }, 0 = Sunday,
 * times in the owner's zone) turned into free start times, leaving out the times the owner is busy.
 */
const MIN = 60000, DAY = 86400000;
const LEAD_HOURS = 12, AHEAD_DAYS = 14;

function validZone(tz) { try { new Intl.DateTimeFormat('en', { timeZone: tz }); return typeof tz === 'string' && tz.length < 64; } catch (e) { return false; } }
/** Minutes the zone is ahead of UTC at `ms` */
function offsetMin(tz, ms) {
  const p = {};
  new Intl.DateTimeFormat('en-US', { timeZone: tz, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
    .formatToParts(new Date(ms)).forEach((x) => { p[x.type] = x.value; });
  return Math.round((Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour % 24, +p.minute) - Math.floor(ms / MIN) * MIN) / MIN);
}
/** The UTC moment of a wall-clock time (minutes after midnight) on a date in a zone */
function zonedToUtc(y, m, d, minutes, tz) {
  const guess = Date.UTC(y, m, d, 0, minutes);
  let t = guess - offsetMin(tz, guess) * MIN;
  t = guess - offsetMin(tz, t) * MIN;
  return t;
}
function hm(s) { const x = /^(\d{1,2}):(\d{2})$/.exec(String(s || '')); return x && +x[1] < 24 && +x[2] < 60 ? +x[1] * 60 + +x[2] : null; }

/** Checks and cleans the owner's hours; null when unusable */
function cleanHours(h) {
  if (!h || typeof h !== 'object' || !validZone(h.tz)) return null;
  const minutes = [20, 30, 45, 60].includes(+h.minutes) ? +h.minutes : 30, days = {};
  for (let d = 0; d < 7; d++) {
    const list = Array.isArray(h.days && h.days[d]) ? h.days[d] : [];
    const ok = list.map((r) => [hm(r && r[0]), hm(r && r[1])]).filter((r) => r[0] != null && r[1] != null && r[1] - r[0] >= minutes).slice(0, 6)
      .map((r) => [r[0], r[1]].map((x) => String(Math.floor(x / 60)).padStart(2, '0') + ':' + String(x % 60).padStart(2, '0')));
    if (ok.length) days[d] = ok;
  }
  return { tz: h.tz, minutes, days };
}

/**
 * Free start times: { hours, now (ms), busy: [[startMs, endMs]] } → ISO strings, from 12 hours ahead to 14 days ahead,
 * one every interview length within each range, none overlapping a busy time.
 */
function freeSlots(o) {
  const h = cleanHours(o.hours);
  if (!h) return [];
  const now = o.now || Date.now(), from = now + LEAD_HOURS * 3600000, to = now + AHEAD_DAYS * DAY, len = h.minutes * MIN, out = [];
  const busy = (o.busy || []).filter((b) => b[1] > from && b[0] < to);
  for (let i = 0; i <= AHEAD_DAYS + 1; i++) {
    const p = {};
    new Intl.DateTimeFormat('en-US', { timeZone: h.tz, year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).formatToParts(new Date(now + i * DAY)).forEach((x) => { p[x.type] = x.value; });
    const wd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday);
    for (const r of h.days[wd] || []) {
      for (let m = hm(r[0]); m + h.minutes <= hm(r[1]); m += h.minutes) {
        const t = zonedToUtc(+p.year, +p.month - 1, +p.day, m, h.tz);
        if (t < from || t > to) continue;
        if (busy.some((b) => t < b[1] && t + len > b[0])) continue;
        out.push(t);
      }
    }
  }
  return Array.from(new Set(out)).sort((a, b) => a - b).map((t) => new Date(t).toISOString());
}

module.exports = { freeSlots, cleanHours, zonedToUtc, offsetMin, validZone, LEAD_HOURS, AHEAD_DAYS };
