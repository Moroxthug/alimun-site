/* Alimun admin: matching (owner, 12 Nov 2026). English only. Engine: js/match.js (unit tested in tests/unit/match.test.js).
   Rebuilt 12 Nov 2026 around what the owner does here (owner: "improve the management of the whole page. who gets
   email is too mechanical, i want automated feel when i do something, also better visual management of the classes"):
   #/matching        the figures in one line; the launch class with its email as a funnel, one click to send it to
                     everyone who has not had it and a switch to send it by itself to new English learners (hourly job);
                     the rooms already planned with their seats; the groups that could form as a board, each with
                     "Create the room": teacher, substitute and start date in place, and the group's learners are put
                     down as interested so the room job emails them when it is published; who is not in a group and why;
                     who is closest to buying; when they can learn (heat map, folded); every learner in a table, with the
                     time zone correctable in place.
   #/matching/<id>   one learner: everything the engine knows and their best matches, with the reasons.
   The owner's test accounts (any email with "bchysf", "Test", "Test test") are left out unless asked for.
   Data from admin_matching() (admins only); signed out or with ?sample=1, a sample where nothing is saved or sent. */
(function () {
  'use strict';
  var A = null, root = null, RAW = null, M = null;
  var S = { lang: 'English', tz: null, incomplete: false, staff: false, tests: false, level: '', q: '', flevel: '', fgoal: '', sort: 'ready', tab: 'plan', heatOpen: true };
  var STAGE = { ready: 'Ready to buy', warming: 'Warming up', cold: 'Cold' };
  var TIMES = { stated: 'gave their days and times', days: 'gave their days, usual hours assumed', assumed: 'gave no times: weekday evenings and weekend mornings assumed', none: 'time zone not known' };
  var TIMES_SHORT = { stated: 'Given', days: 'Days given', assumed: 'Assumed', none: 'Unknown' };
  var PREFER = { exam: 'exam preparation', classes: 'relaxed small-group classes', conversation: 'conversation practice', one: '1 on 1 lessons', self: 'learning on their own' };
  var WEEKLY = { lt1: 'less than an hour a week', h1_3: 'one to three hours a week', h3_5: 'three to five hours a week', gt5: 'more than five hours a week' };
  var TEACHER = { native: 'wants a native speaker', home: 'wants a teacher from their country', either: 'any good teacher' };
  var EXPLAIN = { target: 'explanations only in the language they learn', mostly: 'explanations mostly in that language', own: 'explanations in their own language' };
  var TF = { '3_months': 'within 3 months', '6_months': 'within 6 months', '1_year': 'within a year', no_deadline: 'no deadline' };
  var ROOM_STATE = { draft: 'Draft', published: 'Published, taking sign-ups', open: 'Open', running: 'Running' };
  var PRODUCT_NAME = { level_en: 'English level pack', intensive_en: 'English intensive pack', exam_en: 'English exam pack', open_en: 'English open class', level_de: 'German level pack', exam_de: 'German exam pack', open_de: 'German open class', help_class: 'Help class' };
  /* Time zones offered when correcting a learner's: the ones learners have, plus the usual ones */
  var ZONES = ['Europe/London', 'Europe/Lisbon', 'Europe/Madrid', 'Europe/Paris', 'Europe/Berlin', 'Europe/Rome', 'Europe/Warsaw', 'Europe/Budapest', 'Europe/Athens', 'Europe/Istanbul', 'Europe/Kyiv', 'Europe/Moscow',
    'Africa/Casablanca', 'Africa/Algiers', 'Africa/Tunis', 'Africa/Cairo', 'Africa/Lagos', 'Africa/Nairobi', 'Africa/Mogadishu', 'Asia/Dubai', 'Asia/Tehran', 'Asia/Karachi', 'Asia/Kolkata', 'Asia/Shanghai', 'Asia/Taipei', 'Asia/Seoul', 'Asia/Tokyo',
    'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles', 'America/Vancouver', 'America/Mexico_City', 'America/Bogota', 'America/Lima', 'America/Sao_Paulo', 'America/Buenos_Aires', 'Atlantic/Canary', 'Australia/Sydney'];
  var MY_TZ = (function () { try { return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'; } catch (e) { return 'UTC'; } })();
  var DAY = 86400000;

  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real'; }
  function loading() { return '<div class="rd-loading"><div class="loader" style="--w:56px" role="img" aria-label="Loading">' + A.loaderInner() + '</div></div>'; }
  function city(tz) { return tz ? tz.split('/').pop().replace(/_/g, ' ') : 'Not known'; }
  function goal(g) { return (M.GOALS[g] || 'Focus not given'); }
  function joinAnd(list) { return list.length < 2 ? list.join('') : list.slice(0, -1).join(', ') + ' and ' + list[list.length - 1]; }
  function sentence(s) { return s.replace(/\.\.$/, '.'); }
  function opt(v, label, cur) { return '<option value="' + esc(v) + '"' + (String(v) === String(cur) ? ' selected' : '') + '>' + esc(label) + '</option>'; }
  function countryName(c) { try { return new Intl.DisplayNames(['en'], { type: 'region' }).of(c) || c; } catch (e) { return c; } }
  function nowIn(tz) { try { return new Intl.DateTimeFormat('en-GB', { timeZone: tz, hour: '2-digit', minute: '2-digit' }).format(new Date()); } catch (e) { return ''; } }
  function dayFmt(d) { return A.fmt(d + (String(d).length === 10 ? 'T12:00:00Z' : ''), { weekday: 'short', day: 'numeric', month: 'short' }); }
  function short(days) { return days.map(function (d) { return d.slice(0, 3); }).join(', '); }
  function pct(n, d) { return d ? Math.round(100 * n / d) : 0; }
  /* When a room starting on `start` goes on sale: 21 days before, or at the next daily room job when that is past */
  function onSale(start) { var pub = Date.parse(start + 'T12:00:00Z') - 21 * DAY; return pub <= Date.now() + DAY / 2 ? 'at the next daily run, early tomorrow' : 'on ' + dayFmt(new Date(pub).toISOString().slice(0, 10)) + ', 21 days before it starts'; }

  /* ---------- Sample (signed out or ?sample=1) ---------- */
  function sample() {
    var n = Date.now(), ago = function (d) { return new Date(n - d * DAY).toISOString(); };
    var P = function (o) { return Object.assign({ time: 'h1_3', prefer: ['classes', 'conversation'], explain: 'mostly', teacher: 'native' }, o); };
    var L = function (i, name, level, goal, tz, o) {
      return Object.assign({ id: 's' + i, user_id: 'u' + i, name: name, email: name.toLowerCase().replace(/[^a-z]+/g, '.') + '@example.com', language: 'English', level: level,
        placement: { level: level, language: 'English' }, goal: goal, timezone: tz, timeframe: '6_months', days: [], role: 'student', last_active: ago(2), days_active: 2, acts_7d: 4, created_at: ago(5) }, o || {});
    };
    return { learners: [
      L(1, 'Marco Rossi', 'A1', 'relocation', 'Europe/Rome', { poll: P({ lang: 'it', time: 'h3_5' }), timeframe: '3_months', tutor_min: 12, news: true, country: 'IT' }),
      L(2, 'Aya Benali', 'A1', 'professional', 'Africa/Casablanca', { poll: P({ lang: 'fr' }), news: true, country: 'MA' }),
      L(3, 'Lena Fischer', 'A1', 'foundations', 'Europe/Berlin', { days: [1, 2, 4], time_start: '18:00', time_end: '21:00' }),
      L(4, 'Pablo Ortega', 'A1', 'relocation', 'Europe/Madrid', { quotes: 1, timeframe: '3_months' }),
      L(5, 'Elif Kaya', 'A1', 'relocation', 'Europe/Istanbul', { poll: P({ lang: 'tr', explain: 'own', teacher: 'home' }), country: 'TR' }),
      L(6, 'Chloé Martin', 'A2', 'professional', 'Europe/Paris', { poll: P({ lang: 'fr' }), news: true }),
      L(7, 'Jakub Nowak', 'A1', 'professional', 'Europe/Warsaw', { last_active: ago(20), days_active: 1 }),
      L(8, 'Sofia Lima', 'A1', 'foundations', 'America/Sao_Paulo', { poll: P({ lang: 'pt' }) }),
      L(9, 'Diego Torres', 'A1', 'relocation', 'America/Lima', { news: true }),
      L(10, 'Emily Chen', 'A1', 'relocation', 'America/Vancouver', { tutor_min: 30, days_active: 5, last_active: ago(0.2) }),
      L(11, 'Ryan Lee', 'A1', 'relocation', 'America/Los_Angeles', {}),
      L(12, 'Mei Lin', 'A1', 'foundations', 'Asia/Taipei', { last_active: null, days_active: 0 }),
      L(13, 'Omar Haddad', 'B2', 'professional', 'Europe/Istanbul', { poll: P({ time: 'h3_5', explain: 'target' }), timeframe: '3_months', days_active: 4, tutor_min: 25, country: 'TR' }),
      L(14, 'Julie Bernard', 'B2', 'academic', 'Europe/Paris', { timeframe: '3_months', interest: ['exam_en'] }),
      L(15, 'Can Yilmaz', 'B2', 'foundations', 'Asia/Karachi', { last_active: null, days_active: 0 }),
      L(16, 'Hugo Leroy', 'B1', 'academic', 'Europe/Paris', {}),
      L(17, 'Nora Svensson', 'B1', 'professional', 'Europe/Stockholm', { days: [6, 0] }),
      L(19, 'Claire Dubois', 'A1', 'pleasure', 'Europe/Paris', { days: [6, 0], time_start: '11:00', time_end: '12:00', poll: P({ prefer: ['conversation'], time: 'lt1' }) }),
      L(20, 'Test test', 'B1', 'foundations', 'America/Vancouver', { test: true }),
      L(21, 'Klaus Weber', 'A2', 'relocation', 'Europe/Vienna', { language: 'German', placement: { level: 'A2', language: 'German' } })
    ], availability: [{ teacher_id: 't1', teacher: 'James Hall', starts_on: ago(-20).slice(0, 10), kinds: ['level_pack', 'open_class'], language: 'English', levels: ['A1', 'A2'],
      days: ['Monday', 'Tuesday', 'Thursday'], schedule_time: '19:00', timezone: 'Europe/Rome', substitute: true }],
    rooms: [{ id: 'r1', product_key: 'level_en', language: 'English', level: 'A1', room_state: 'published', starts_on: ago(-25).slice(0, 10), schedule_days: ['Monday', 'Tuesday', 'Thursday'], schedule_time: '19:00', timezone: 'Europe/Paris', max: 12, min: 8, seats: 5 },
      { id: 'r2', product_key: 'open_en', language: 'English', level: 'A1', room_state: 'open', starts_on: ago(-4).slice(0, 10), schedule_days: ['Wednesday'], schedule_time: '19:00', timezone: 'Europe/Paris', max: 20, min: 12, seats: 13 }] };
  }

  /* ---------- Working it out ---------- */
  function compute() {
    var now = new Date();
    M = window.AlimunMatch;
    var R = M.run(RAW, { language: S.lang, now: now, includeIncomplete: S.incomplete, includeStaff: S.staff, includeTests: S.tests });
    R.now = now;
    R.byId = {}; R.all.forEach(function (l) { R.byId[l.id] = l; });
    R.plan = plan(R);
    R.inGroup = {}; R.plan.groups.forEach(function (g) { g.members.forEach(function (m) { R.inGroup[m.learner.id] = g; }); });
    R.why = {}; R.plan.alone.forEach(function (u) { R.why[u.learner.id] = u.reason; });
    return R;
  }
  function languages() {
    var c = {};
    (RAW.learners || []).forEach(function (l) { if (l.language && (S.tests || !l.test)) c[l.language] = (c[l.language] || 0) + 1; });
    return Object.keys(c).sort(function (a, b) { return c[b] - c[a]; }).map(function (k) { return [k, c[k]]; });
  }
  function zonesOf(R) {
    var z = {};
    R.pool.forEach(function (l) { if (l.tz) z[l.tz] = (z[l.tz] || 0) + 1; });
    var list = Object.keys(z).sort(function (a, b) { return z[b] - z[a]; });
    if (list.indexOf(MY_TZ) < 0) list.unshift(MY_TZ);
    return list;
  }

  /* ---------- Small pieces ---------- */
  function meter(have, min, max) {
    /* One cell per seat up to the room's size; the cells up to the minimum are outlined, filled cells are learners */
    var cells = '';
    for (var i = 0; i < max; i++) cells += '<i class="' + (i < have ? 'on' : '') + (i < min ? ' req' : '') + '"></i>';
    return '<div class="mm" role="img" aria-label="' + esc(have + ' of ' + min + ' needed, room for ' + max) + '">' + cells + '</div>';
  }
  function readyBar(l) {
    return '<span class="rb" title="' + esc(STAGE[l.ready.stage] + ': ' + (l.ready.why.join(', ') || 'nothing yet')) + '"><span class="rb__t"><i style="width:' + l.ready.score + '%" class="rb--' + l.ready.stage + '"></i></span><b>' + l.ready.score + '</b></span>';
  }
  function localTime(g, l, R) {
    if (!l.tz) return 'time not known';
    var t = M.timesIn(g.slot, l.tz, R.now);
    return short(t.days) + ' ' + t.time;
  }

  /* ---------- The class planner (owner, 18 Nov 2026: "matching page is very messy ... show me data another way ...
     which classes could be organised, with accurate details based on each student's profile, time zone, level") ----------
     Learners are put together by level band (A1–A2, B1–B2, C1–C2: one teacher can take two neighbouring levels) and by
     where they live on the clock (the Americas, Europe with Africa and the Middle East, Asia with Oceania: within each,
     an evening class works for everyone). For each band and area the planner tries every pack pattern (three days a
     week) at every half hour from 17:00 to 21:00 in the zone most of them live in, and keeps the time that suits most:
     a learner "fits" when the time is inside the hours they gave (or, when they gave none, a weekday evening start from
     18:00 to 20:00 their time), is "an hour off" when each class day is within an hour of that, and otherwise is listed
     apart with the hours they are free. Each learner shows their own class time, country, level, focus and activity. */
  var AREAS = [
    { k: 'am', name: 'The Americas', test: function (o) { return o <= -120; } },
    { k: 'eu', name: 'Europe, Africa and the Middle East', test: function (o) { return o > -120 && o < 270; } },
    { k: 'as', name: 'Asia and Oceania', test: function (o) { return o >= 270; } }
  ];
  var BANDS = [['A1', 'A2'], ['B1', 'B2'], ['C1', 'C2']];
  var PACK_DAYS = [[1, 2, 4], [1, 3, 4], [2, 3, 4], [1, 3, 5], [1, 2, 3]];
  var DEADLINE = { '3_months': 'within 3 months', '6_months': 'within 6 months', '1_year': 'within a year', no_deadline: 'no deadline' };
  /* Addresses that look mistyped: mail to them never arrives */
  var TYPO = /@(gmai|gmial|gamil|gnail|gmail\.co|hotmial|hotmai|hotmal|yahooo|yaho|outlok)\.?[a-z]*$/i;
  function typo(email) { return !!email && TYPO.test(email) && !/@gmail\.com$|@hotmail\.[a-z.]+$|@yahoo\.[a-z.]+$|@outlook\.[a-z.]+$/i.test(email); }
  function areaOf(l, now) {
    if (!l.tz) return null;
    var o = M.offsetMin(l.tz, now);
    for (var i = 0; i < AREAS.length; i++) if (AREAS[i].test(o)) return AREAS[i];
    return null;
  }
  function areaIn(a) { return a.k === 'am' ? 'the Americas' : a.name; }
  function bandOf(level) { for (var i = 0; i < BANDS.length; i++) if (BANDS[i].indexOf(level) > -1) return BANDS[i]; return null; }
  function utcLabel(tz, now) { var o = M.offsetMin(tz, now), h = Math.floor(Math.abs(o) / 60), m = Math.abs(o) % 60; return 'UTC' + (o === 0 ? '' : (o < 0 ? '−' : '+') + h + (m ? ':' + String(m).padStart(2, '0') : '')); }
  function makeSlot(days, minutes, zone, now) { return { days: days, minutes: minutes, zone: zone, exact: days.map(function (d) { return M.toSlot(d, minutes, zone, now); }), teacher: null }; }
  /* How well a time suits a learner: 2 inside their hours, 1 within an hour on every class day, 0 not */
  function fitOf(l, c) {
    if (c.exact.every(function (s) { return l.slots.has(s); })) return 2;
    var near = c.exact.every(function (s) { for (var k = -2; k <= 2; k++) if (l.slots.has((s + k + 336) % 336)) return true; return false; });
    return near ? 1 : 0;
  }
  /* The hours a learner is free, in their own words */
  function freeWhen(l) {
    if (!l.tz) return 'time zone not known';
    var raw = (RAW.learners || []).filter(function (x) { return x.id === l.id; })[0] || {};
    var days = (raw.days || []).map(function (d) { return M.WEEK[d] ? M.WEEK[d].slice(0, 3) : ''; }).filter(Boolean);
    var t = raw.time_start && raw.time_end ? String(raw.time_start).slice(0, 5) + ' to ' + String(raw.time_end).slice(0, 5) : '';
    if (l.times === 'stated') return 'free ' + (days.length ? days.join(', ') + ' ' : 'every day ') + t + ' their time';
    if (l.times === 'days') return 'free on ' + days.join(', ') + ', hours not given';
    return 'no class times given yet';
  }
  function majorityZone(list, now) {
    var clocks = {}, zones = {};
    list.forEach(function (l) { var o = M.offsetMin(l.tz, now); clocks[o] = (clocks[o] || 0) + 1; zones[l.tz] = (zones[l.tz] || 0) + 1 + (l.country ? 0.25 : 0); });
    return Object.keys(zones).sort(function (a, b) { return (clocks[M.offsetMin(b, now)] || 0) - (clocks[M.offsetMin(a, now)] || 0) || zones[b] - zones[a] || a.localeCompare(b); })[0];
  }
  function plan(R) {
    var now = R.now, out = [], alone = [];
    BANDS.forEach(function (band) {
      AREAS.forEach(function (area) {
        var list = R.pool.filter(function (l) { return band.indexOf(l.level) > -1 && areaOf(l, now) === area; });
        if (!list.length) return;
        if (list.length < 2) { alone.push({ learner: list[0], reason: 'the only ' + band.join('–') + ' learner in ' + areaIn(area) + ' (' + freeWhen(list[0]) + ')' }); return; }
        var zone = majorityZone(list, now), best = null;
        PACK_DAYS.forEach(function (days, pi) {
          for (var m = 1020; m <= 1260; m += 30) {
            var c = makeSlot(days, m, zone, now), fits = list.map(function (l) { return fitOf(l, c); });
            var w = fits.reduce(function (s, f) { return s + (f === 2 ? 1 : f === 1 ? 0.6 : 0); }, 0) - Math.abs(m - 1140) / 6000 - pi / 1000;
            if (!best || w > best.w) best = { c: c, fits: fits, w: w };
          }
        });
        var members = [], apart = [];
        list.forEach(function (l, i) { if (best.fits[i]) members.push({ learner: l, fit: best.fits[i] }); else apart.push(l); });
        if (members.length < 2) { list.forEach(function (l) { alone.push({ learner: l, reason: 'no evening shared with another ' + band.join('–') + ' learner nearby (' + freeWhen(l) + ')' }); }); return; }
        apart.forEach(function (l) { alone.push({ learner: l, reason: freeWhen(l) + ', which the class time does not suit' }); });
        members.sort(function (a, b) { return b.fit - a.fit || M.LEVELS.indexOf(a.learner.level) - M.LEVELS.indexOf(b.learner.level) || b.learner.ready.score - a.learner.ready.score; });
        var lv = {}; members.forEach(function (x) { lv[x.learner.level] = (lv[x.learner.level] || 0) + 1; });
        var level = Object.keys(lv).sort(function (a, b) { return lv[b] - lv[a] || M.LEVELS.indexOf(a) - M.LEVELS.indexOf(b); })[0];
        var exam = members.filter(function (x) { return x.learner.kind === 'exam_pack'; }).length;
        var kind = band[0] !== 'A1' && exam * 2 > members.length ? 'exam_pack' : 'level_pack';
        var g = { band: band, area: area, level: level, levels: lv, kind: kind, slot: best.c, zone: zone, members: members,
          productKey: (M.PRODUCTS[S.lang] || {})[kind] || null, min: M.KINDS[kind].min, max: M.KINDS[kind].max };
        g.need = Math.max(0, g.min - members.length);
        out.push(g);
      });
    });
    R.pool.forEach(function (l) { if (!bandOf(l.level)) alone.push({ learner: l, reason: 'level not known' }); else if (!l.tz) alone.push({ learner: l, reason: 'time zone not known' }); });
    out.sort(function (a, b) { return a.need - b.need || b.members.length - a.members.length; });
    out.forEach(function (g, i) { g.i = i; });
    return { groups: out, alone: alone };
  }

  /* ---------- Head ---------- */
  var CHECKED = 0, NEW = {};
  function headView(R) {
    var s = R.summary, P = R.plan;
    var biggest = P.groups[0], fresh = Object.keys(NEW).map(function (id) { return R.byId[id]; }).filter(Boolean);
    var lead = A.plural(R.pool.length, S.lang + ' learner', S.lang + ' learners') + ' in no class yet. ' +
      (biggest ? (biggest.need ? 'The biggest class that could form has ' + biggest.members.length + ' of the ' + biggest.min + ' it needs (' + biggest.band.join('–') + ', ' + areaIn(biggest.area) + ').' : biggest.members.length + ' learners could start an ' + biggest.band.join('–') + ' class now.') : 'No two of them can learn together yet.') +
      ' ' + (s.paying ? A.plural(s.paying, 'pays', 'pay') : 'Nobody pays yet') + '.';
    return '<div class="view__head"><div><h1 class="t-h1">Matching</h1><p class="t-lead">' + esc(lead) + '</p>' +
      '<p class="t-small mt-live" aria-live="polite">' + esc(real() ? 'Checks for new learners every minute' + (CHECKED ? ', last at ' + A.fmt(CHECKED, { hour: '2-digit', minute: '2-digit' }) : '') + '.' : 'Sample data.') +
      (fresh.length ? ' <b>' + esc('New since you opened this page: ' + joinAnd(fresh.map(function (l) { return l.name + ' (' + [l.level, l.country ? countryName(l.country) : city(l.tz)].filter(Boolean).join(', ') + ')'; })) + '.') + '</b>' : '') + '</p></div>' +
      '<div class="mt-tools"><label class="mt-tool"><span>Language</span><select class="st-in" data-mt="lang">' + languages().map(function (x) { return opt(x[0], x[0] + ' (' + x[1] + ')', S.lang); }).join('') + '</select></label>' +
      '<label class="mt-tool"><span>Times shown in</span><select class="st-in" data-mt="tz">' + zonesOf(R).map(function (z) { return opt(z, city(z) + (z === MY_TZ ? ' (yours)' : ''), S.tz); }).join('') + '</select></label></div></div>';
  }
  function countedLine(R) {
    var s = R.summary;
    return '<details class="ad-details mt-who"><summary>Who is counted</summary><div class="mt-filters"><label class="st-check"><input type="checkbox" data-mt="tests"' + (S.tests ? ' checked' : '') + '> Your test accounts (' + s.tests + ')</label>' +
      '<label class="st-check"><input type="checkbox" data-mt="incomplete"' + (S.incomplete ? ' checked' : '') + '> Sign-ups with no level test and no time zone (' + s.incomplete + ')</label>' +
      '<label class="st-check"><input type="checkbox" data-mt="staff"' + (S.staff ? ' checked' : '') + '> Admin and teacher accounts (' + s.staff + ')</label></div></details>';
  }
  var TABS = [['plan', 'Classes that could run'], ['map', 'Who is where'], ['all', 'Every learner'], ['launch', 'Launch class and rooms']];
  function tabsBar() {
    return '<div class="btn-row ad-tabs mt-tabs" role="tablist" aria-label="Matching">' + TABS.map(function (t) {
      return '<button type="button" role="tab" class="btn btn--' + (S.tab === t[0] ? 'primary' : 'quiet') + ' btn--sm" data-mt-tab="' + t[0] + '" aria-selected="' + (S.tab === t[0]) + '">' + esc(t[1]) + '</button>';
    }).join('') + '</div>';
  }

  /* ---------- The launch class (English A1–A2; api/_lib/launch.js, launch-email.js) ---------- */
  var LAUNCH = null, LMAIL = null, LREP = null, LAUTO = null;
  function launchCard() {
    if (S.lang !== 'English') return '';
    var L = LAUNCH;
    var head = '<section class="card span-12 mt-launch" aria-labelledby="h-launch"><div class="panel-h"><h2 class="t-h2" id="h-launch">Launch class</h2>' +
      (L && L.offer ? '<span class="t-small">' + esc(L.offer.active ? 'Sign-ups close ' + A.fmt(L.offer.endsAt, { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }) : 'Sign-ups are closed') + '</span>' : '') + '</div>';
    if (!L) return head + '<p class="t-small">' + esc(real() ? 'Not set up, or it did not load.' : 'In the sample there is no launch class.') + '</p></section>';
    if (!L.offer) return head + '<p class="t-small">No launch class is set up.</p></section>';
    var rooms = (L.rooms || []).map(function (r) { return (/^level_/.test(r.product_key) ? 'Level pack' : 'Open class') + ': ' + r.seats + ' (' + r.state + ')'; }).join(', ');
    var html = head + '<div class="mt-launch__grid"><div><h3 class="t-h3">Sign-ups</h3>' + meter(Math.min(L.seats, Math.max(L.min, 12)), L.min, Math.max(L.min, 12, L.seats)) +
      '<p class="t-small" style="margin-top:6px">' + esc(L.seats + ' of ' + L.min + ' needed to go ahead. ' + rooms + '. Free first class: ' + (L.intro ? L.intro.registeredCount + ' registered' : 'none') + '.') + '</p></div>';
    html += '<div><h3 class="t-h3">The email</h3>' + funnelHtml() + '</div></div>';
    html += mailBar() + reportHtml() + '</section>';
    return html;
  }
  function funnelHtml() {
    var r = LREP, people = (r && r.people) || [], n = people.length, c = function (f) { return people.filter(f).length; };
    if (!n) return '<p class="t-small" style="margin-top:6px">Not sent to anyone yet.</p>';
    var steps = [['Sent', n], ['Clicked the button', c(function (x) { return x.clickedAt; })], ['Read the dashboard note', c(function (x) { return x.bellReadAt; })],
      ['Saved a free place', c(function (x) { return x.freeClassAt; })], ['Looked at a price', c(function (x) { return x.pricedAt; })], ['Reserved', c(function (x) { return x.reserved; })]];
    return '<div class="fn">' + steps.map(function (s) { return '<div class="fn__r"><span>' + esc(s[0]) + '</span><span class="fn__t"><i style="width:' + Math.max(pct(s[1], n), s[1] ? 3 : 0) + '%"></i></span><b>' + s[1] + '</b></div>'; }).join('') + '</div>';
  }
  function mailBar() {
    var m = LMAIL, waiting = m && m.people ? m.people.length : null, beg = 0;
    if (m && m.people) m.people.forEach(function (x) { if (/^A/.test(x.level || '')) beg++; });
    var line = waiting == null ? 'Working out who has not had it…' : waiting ? A.plural(waiting, 'English learner has', 'English learners have') + ' not had it yet: ' + beg + ' at A1 or A2 (the class and the offer), ' + (waiting - beg) + ' at B1 or B2 (the free class).' : 'Every English learner from A1 to B2 has had it.';
    var auto = LAUTO === true, sent = m && m.sent != null ? A.plural(m.sent, 'email', 'emails') + ' sent' + (m.failed && m.failed.length ? ', failed: ' + m.failed.join(', ') : '') + '.' : '';
    return '<div class="mt-mail"><div class="mt-mail__l"><p class="t-body"><b>' + esc(line) + '</b></p>' +
      (waiting ? '<details class="ad-details"><summary>Who they are</summary><p class="t-small">' + esc(m.people.map(function (x) { return (x.name || 'No name') + ' (' + (x.level || '') + ', ' + x.lang + ')'; }).join(', ')) + '</p></details>' : '') +
      '<label class="mt-switch"><input type="checkbox" role="switch" data-mx-auto' + (auto ? ' checked' : '') + (LAUTO == null ? ' disabled' : '') + '><span class="mt-switch__s" aria-hidden="true"></span><span><b>Send it by itself to new English learners</b><small>' +
        esc(auto ? 'On: anyone new at A1 to B2 gets it within the hour, in their language and time zone. Your test accounts never do.' : 'Off. When on, anyone new at A1 to B2 gets it within the hour' + (waiting ? ', and the ' + waiting + ' above get it at the next hourly run' : '') + '.') + '</small></span></label></div>' +
      '<div class="mt-mail__r">' + (waiting ? '<button class="btn btn--primary btn--sm" type="button" data-mx-mail="all">' + esc('Send it to the ' + A.plural(waiting, 'learner', 'learners') + ' now') + '</button>' : '') +
      '<button class="btn btn--quiet btn--sm" type="button" data-mx-mail="test">Send me a test</button></div>' +
      '<p class="t-small st-msg mt-mail__msg" data-mx-mailmsg aria-live="polite">' + esc(sent) + '</p></div>';
  }
  function when(at) { return A.fmt(at, { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }); }
  function reportHtml() {
    var r = LREP;
    if (!r || !r.people || !r.people.length) return '';
    var PROD = { level_en: 'level pack', open_en: 'open class' };
    return '<details class="ad-details mt-rep"><summary>Who did what after the email (' + r.people.length + ')</summary><div class="dt-wrap"><table class="dt"><thead><tr><th>Learner</th><th>Furthest step</th><th>Emailed</th><th>Since then</th></tr></thead><tbody>' +
      r.people.map(function (x) {
        var step = x.reserved ? 'Reserved the ' + (PROD[x.reserved.product] || x.reserved.product) : x.pricedAt ? 'Looked at a price' : x.freeClassAt ? 'Saved a free place' : x.clickedAt ? 'Clicked' : x.bellReadAt ? 'Read the note' : 'Nothing yet';
        var did = [];
        if (x.clickedAt) did.push('clicked ' + when(x.clickedAt));
        if (x.freeClassAt) did.push('free place ' + when(x.freeClassAt));
        if (x.pricedAt) did.push('price ' + when(x.pricedAt));
        if (!did.length) did.push(x.lastSeen ? 'last seen ' + when(x.lastSeen) : 'not seen since');
        return '<tr><td>' + esc((x.name || 'No name') + (x.level ? ', ' + x.level : '')) + '</td><td class="nw"><span class="dot' + (x.reserved ? '' : x.pricedAt || x.freeClassAt || x.clickedAt ? ' dot--warn' : ' dot--off') + '"></span>' + esc(step) + '</td>' +
          '<td class="m nw">' + esc((x.emailed ? '' : 'Failed, ') + when(x.sentAt)) + '</td><td class="m">' + esc(did.join(', ')) + '</td></tr>';
      }).join('') + '</tbody></table></div><p class="t-tiny" style="margin-top:6px">Email opens are not counted: that needs a hidden pixel, which needs consent in the EU.</p></details>';
  }
  function launchMail(b) {
    var mode = b.getAttribute('data-mx-mail'), msg = root.querySelector('[data-mx-mailmsg]');
    if (!real()) { msg.textContent = 'This is sample data; nothing is sent.'; return; }
    var n = LMAIL && LMAIL.people ? LMAIL.people.length : 0;
    if (mode === 'all' && b.getAttribute('data-sure') !== '1') { b.setAttribute('data-sure', '1'); b.textContent = 'Yes, send to ' + A.plural(n, 'learner', 'learners'); msg.textContent = 'Press again to send. Each gets it in their language, with the times in their own time zone, and a note in their dashboard.'; return; }
    b.disabled = true; msg.textContent = mode === 'test' ? 'Sending you one of each…' : 'Sending…';
    var call = mode === 'test' ? window.AlimunData.adminLaunchEmail('test') : window.AlimunData.adminLaunchEmail('send', n, undefined, { all: true });
    call.then(function (r) {
      if (mode === 'test') { msg.textContent = 'Test emails sent to you: ' + (r.tests || []).map(function (x) { return x.lang + (x.beginner ? '' : ' (B1 and above)') + (x.ok ? '' : ' failed'); }).join(', ') + '.'; b.disabled = false; return; }
      return Promise.all([window.AlimunData.adminLaunchEmail('preview'), window.AlimunData.adminLaunchEmail('report')]).then(function (x) { LMAIL = Object.assign(x[0], { sent: r.sent, failed: r.failed }); LREP = x[1]; draw(); });
    }).catch(function (e) {
      b.disabled = false; b.removeAttribute('data-sure');
      var why = e && e.body && e.body.error;
      msg.textContent = why === 'count_changed' ? 'Someone new joined the list meanwhile; it was refreshed, please press again.' : 'That did not work: ' + (why || (e && e.message) || 'please try again') + '.';
      if (why === 'count_changed') window.AlimunData.adminLaunchEmail('preview').then(function (p) { LMAIL = p; draw(); });
    });
  }
  function setAuto(input) {
    var on = input.checked, msg = root.querySelector('[data-mx-mailmsg]');
    if (!real()) { input.checked = !on; msg.textContent = 'This is sample data; nothing is switched.'; return; }
    input.disabled = true;
    window.AlimunData.adminLaunchEmail('auto-set', undefined, undefined, { on: on }).then(function (r) { LAUTO = !!r.auto; draw(); var m = root.querySelector('[data-mx-mailmsg]'); if (m) m.textContent = LAUTO ? 'Switched on.' : 'Switched off.'; },
      function (e) { input.disabled = false; input.checked = !on; msg.textContent = 'That did not work: ' + ((e && e.message) || 'please try again') + '.'; });
  }

  /* ---------- Rooms already planned (better view of the classes) ---------- */
  function roomsCard() {
    var rooms = (RAW.rooms || []).filter(function (r) { return !S.lang || r.language === S.lang; }).sort(function (a, b) { return String(a.starts_on).localeCompare(String(b.starts_on)); });
    var html = '<section class="card span-12" aria-labelledby="h-rooms"><div class="panel-h"><h2 class="t-h2" id="h-rooms">Rooms planned and running</h2><a href="#/classes/rooms">All rooms</a></div>';
    if (!rooms.length) return html + '<p class="t-small">No ' + esc(S.lang) + ' room yet. Create one from Classes that could run.</p></section>';
    html += '<div class="rm-grid">' + rooms.map(function (r) {
      var days = (r.schedule_days || []).map(function (d) { return String(d).slice(0, 3); }).join(', ');
      var starts = r.starts_on ? Date.parse(r.starts_on + 'T12:00:00Z') : null, pub = starts ? starts - 21 * DAY : null;
      var next = r.room_state === 'draft' ? (pub && pub > Date.now() ? 'Goes on sale ' + dayFmt(new Date(pub).toISOString().slice(0, 10)) : 'Goes on sale once it has a teacher and a substitute')
        : r.room_state === 'published' ? (r.seats >= r.min ? 'Has its minimum: opens ' + (starts ? dayFmt(r.starts_on) : '') : 'Needs ' + (r.min - r.seats) + ' more' + (starts && starts - 10 * DAY > Date.now() ? ' by ' + dayFmt(new Date(starts - 10 * DAY).toISOString().slice(0, 10)) : starts ? ', starts ' + dayFmt(r.starts_on) : ''))
        : r.room_state === 'open' ? 'Starts ' + (starts ? dayFmt(r.starts_on) : '') : 'Running since ' + (starts ? dayFmt(r.starts_on) : '');
      return '<a class="rm" href="#/classes/' + esc(r.id) + '"><span class="rm__h"><b>' + esc((PRODUCT_NAME[r.product_key] || r.product_key) + ', ' + (r.level || '')) + '</b><span class="nw"><span class="dot' + (r.room_state === 'running' || r.room_state === 'open' ? '' : r.room_state === 'published' ? ' dot--warn' : ' dot--off') + '"></span>' + esc(ROOM_STATE[r.room_state] || r.room_state) + '</span></span>' +
        '<span class="rm__w">' + esc(days + ' at ' + String(r.schedule_time || '').slice(0, 5) + ', ' + city(r.timezone) + ' time') + '</span>' +
        meter(r.seats || 0, r.min || 0, r.max || 12) + '<span class="rm__n">' + esc((r.seats || 0) + ' of ' + (r.min || 0) + ' needed, room for ' + (r.max || 0) + '. ' + next + '.') + '</span></a>';
    }).join('') + '</div></section>';
    return html;
  }

  /* ---------- The groups that could form ---------- */
  var TEACHERS = null;
  function teachers() {
    if (TEACHERS) return Promise.resolve(TEACHERS);
    if (!real()) return Promise.resolve(TEACHERS = [{ id: 't1', full_name: 'James Hall', languages: ['English'], status: 'approved' }, { id: 't2', full_name: 'Ana Weber', languages: ['English', 'German'], status: 'approved' }]);
    return window.AlimunData.adminTeachers().then(function (d) { TEACHERS = (d.teachers || []).filter(function (t) { return t.status === 'approved'; }); return TEACHERS; });
  }
  var OPEN_FORM = null, DONE = {};
  function lastSeen(l) { return l.last_active ? A.relative(new Date(l.last_active).getTime() - Date.now()) : 'Never came back'; }
  function levelCell(l) { return esc(l.level || '') + (l.tested ? '' : ' <span class="m" title="Chosen by them, no level test">(own choice)</span>'); }
  function countryCell(l) { return esc(l.country ? countryName(l.country) : 'Not given'); }
  function zoneCell(l) { return l.tz ? esc(city(l.tz)) + ' <span class="m">' + esc(utcLabel(l.tz, R.now) + ', now ' + nowIn(l.tz)) + '</span>' : '<span class="m">Not known</span>'; }
  /* Plain sentences about a class's learners: levels, focus, deadlines, how sure their times are, what to check */
  function classNotes(g) {
    var ls = g.members.map(function (m) { return m.learner; }), n = ls.length, out = [];
    var lv = Object.keys(g.levels).sort(function (a, b) { return M.LEVELS.indexOf(a) - M.LEVELS.indexOf(b); }).map(function (k) { return g.levels[k] + ' at ' + k; });
    var own = ls.filter(function (l) { return !l.tested; });
    out.push('Levels: ' + joinAnd(lv) + (own.length ? '; ' + joinAnd(own.map(function (l) { return l.name; })) + ' chose ' + (own.length === 1 ? 'their level' : 'their levels') + ' without the test' : ', all from the level test') + '.');
    var goals = {}; ls.forEach(function (l) { var k = l.goal ? goal(l.goal).toLowerCase() : 'focus not given'; goals[k] = (goals[k] || 0) + 1; });
    out.push('Focus: ' + joinAnd(Object.keys(goals).sort(function (a, b) { return goals[b] - goals[a]; }).map(function (k) { return goals[k] + ' ' + k; })) + '.');
    var soon = ls.filter(function (l) { return l.timeframe === '3_months'; });
    if (soon.length) out.push(A.plural(soon.length, 'wants', 'want') + ' results within 3 months.');
    var gave = ls.filter(function (l) { return l.times === 'stated' || l.times === 'days'; }).length;
    out.push(gave === n ? 'Everyone gave their class times.' : gave ? gave + ' of ' + n + ' gave their class times; for the rest a weekday evening is assumed.' : 'None of them gave class times yet: a weekday evening is assumed for all, so ask them before you fix the time.');
    var off = ls.filter(function (l, i) { return g.members[i].fit === 1; });
    if (off.length) out.push('An hour outside their usual evening: ' + joinAnd(off.map(function (l) { return l.name; })) + '.');
    var never = ls.filter(function (l) { return !l.last_active; });
    if (never.length) out.push('Not seen since signing up: ' + joinAnd(never.map(function (l) { return l.name; })) + '.');
    var free = ls.filter(function (l) { return l.freeClass; });
    if (free.length) out.push('Saved a place in the free first class: ' + joinAnd(free.map(function (l) { return l.name; })) + '.');
    out.push(ls.filter(function (l) { return l.news; }).length + ' of ' + n + ' said yes to news and offers by email.');
    var bad = ls.filter(function (l) { return typo(l.email); });
    if (bad.length) out.push('Email that looks mistyped, so mail will not arrive: ' + joinAnd(bad.map(function (l) { return l.name + ' (' + l.email + ')'; })) + '.');
    return out;
  }
  function classCard(g) {
    var t = M.timesIn(g.slot, g.zone, R.now), n = g.members.length, i = g.i;
    var rows = g.members.map(function (m) {
      var l = m.learner, lt = l.tz ? M.timesIn(g.slot, l.tz, R.now) : null;
      return '<tr class="' + (NEW[l.id] ? 'is-new' : '') + '" data-href="#/matching/' + esc(l.id) + '"><td><a href="#/matching/' + esc(l.id) + '">' + esc(l.name) + '</a><div class="m">' + esc(l.email) + '</div></td>' +
        '<td>' + levelCell(l) + '</td><td>' + countryCell(l) + '</td><td class="nw">' + zoneCell(l) + '</td>' +
        '<td class="nw">' + (lt ? esc(short(lt.days) + ' ' + lt.time) + '<div class="m">' + esc(m.fit === 2 ? (l.times === 'stated' ? 'in the hours they gave' : 'a usual evening') : 'an hour off their usual evening') + '</div>' : '') + '</td>' +
        '<td class="m">' + esc(goal(l.goal) + (l.timeframe ? ', ' + (DEADLINE[l.timeframe] || '') : '')) + '</td><td class="m nw">' + esc(lastSeen(l)) + '</td><td>' + readyBar(l) + '</td></tr>';
    }).join('');
    var done = DONE[i];
    var foot = done ? '<p class="mt-done" role="status">' + esc(done) + '</p>' :
      OPEN_FORM === i ? roomForm(g, t, R) :
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-mt-room="' + i + '">' + esc('Create this room and invite ' + (n === 1 ? 'them' : 'all ' + n)) + '</button></div>';
    return '<article class="card span-12 pc' + (g.need ? '' : ' is-ready') + '" aria-labelledby="h-g' + i + '"><div class="pc__h"><div><h3 class="t-h2" id="h-g' + i + '">' + esc(S.lang + ' ' + g.band.join('–') + ', ' + areaIn(g.area)) + '</h3>' +
      '<p class="gc__w">' + esc(A.cap(M.KIND_NAME[g.kind]) + ' at ' + g.level + ': ' + short(t.days) + ' at ' + t.time + ', ' + city(g.zone) + ' time') + '</p></div>' +
      '<div class="pc__n"><b>' + esc(g.need ? n + ' of ' + g.min : n + ' learners') + '</b><span class="t-small">' + esc(g.need ? 'needs ' + g.need + ' more to open' : 'enough to open') + '</span>' + meter(n, g.min, g.max) + '</div></div>' +
      '<div class="dt-wrap"><table class="dt"><thead><tr><th>Learner</th><th>Level</th><th>Country</th><th>Time zone</th><th>Class time, theirs</th><th>Focus</th><th>Last seen</th><th>Readiness</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<p class="pc__notes t-small">' + esc(classNotes(g).map(sentence).join(' ')) + '</p>' + foot + '</article>';
  }
  function roomForm(g, t, R) {
    var list = (TEACHERS || []).filter(function (x) { return !(x.languages || []).length || (x.languages || []).indexOf(S.lang) > -1; });
    var to = function (cur) { return opt('', list.length ? 'Choose' : 'No approved ' + S.lang + ' teacher', cur) + list.map(function (x) { return opt(x.id, x.full_name, cur); }).join(''); };
    var start = M.startDate(g.kind, t.dayNums, R.now);
    return '<form class="gc__f" data-mt-create="' + g.i + '" onsubmit="return false">' +
      '<label class="st-field"><span class="st-lbl">Teacher</span><select class="st-in" name="teacher_id" required>' + to('') + '</select></label>' +
      '<label class="st-field"><span class="st-lbl">Substitute</span><select class="st-in" name="substitute_teacher_id" required>' + to('') + '</select></label>' +
      '<label class="st-field"><span class="st-lbl">Starts</span><input class="st-in" type="date" name="starts_on" value="' + esc(start) + '" required></label>' +
      '<p class="t-small gc__note">' + esc('A ' + M.KIND_NAME[g.kind] + ' at ' + g.level + ', ' + short(t.days) + ' at ' + t.time + ' ' + city(g.zone) + ' time. The ' + A.plural(g.members.length, 'learner is', 'learners are') + ' put down as interested: when the room goes on sale (' + onSale(start) + ') each gets an email and a dashboard note by themselves, and the teacher gets the contract.') + '</p>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="submit" data-mt-go="' + g.i + '">Create the room</button><button class="btn btn--quiet btn--sm" type="button" data-mt-cancel>Cancel</button></div>' +
      '<p class="t-small st-msg" data-mt-msg="' + g.i + '" aria-live="polite"></p></form>';
  }
  function planView(R) {
    var P = R.plan;
    var html = P.groups.length ? P.groups.map(classCard).join('') : '<section class="card span-12"><p class="t-body">No two ' + esc(S.lang) + ' learners at neighbouring levels live close enough on the clock to share an evening class yet.</p></section>';
    html += '<section class="card span-12" aria-labelledby="h-alone"><div class="panel-h"><h2 class="t-h2" id="h-alone">Nobody to learn with yet</h2><span class="t-small">' + esc(A.plural(P.alone.length, 'learner', 'learners')) + '</span></div>' +
      (P.alone.length ? '<div class="dt-wrap"><table class="dt"><thead><tr><th>Learner</th><th>Level</th><th>Country</th><th>Time zone</th><th>Why</th><th>Last seen</th></tr></thead><tbody>' + P.alone.map(function (u) {
        var l = u.learner;
        return '<tr class="' + (NEW[l.id] ? 'is-new' : '') + '" data-href="#/matching/' + esc(l.id) + '"><td><a href="#/matching/' + esc(l.id) + '">' + esc(l.name) + '</a><div class="m">' + esc(l.email) + '</div></td><td>' + levelCell(l) + '</td><td>' + countryCell(l) + '</td><td class="nw">' + zoneCell(l) + '</td><td class="m">' + esc(A.cap(u.reason)) + '</td><td class="m nw">' + esc(lastSeen(l)) + '</td></tr>';
      }).join('') + '</tbody></table></div>' : '<p class="t-small">Everyone is in a class above.</p>') +
      '<p class="t-tiny" style="margin-top:8px">Classes are worked out by level band (A1–A2, B1–B2, C1–C2) and by part of the world, at the evening time that suits most of them. Room sizes: packs need 8 and take 12.</p></section>';
    return html;
  }
  function createRoom(form) {
    var i = +form.getAttribute('data-mt-create'), g = R.plan.groups[i], msg = form.querySelector('[data-mt-msg="' + i + '"]');
    if (!g) return;
    var f = new FormData(form), t = M.timesIn(g.slot, g.zone, R.now);
    if (!f.get('teacher_id')) { msg.textContent = 'Choose the teacher.'; return; }
    /* The room job puts a room on sale only with a teacher and a substitute; without one the learners would never be told */
    if (!f.get('substitute_teacher_id')) { msg.textContent = 'Choose a substitute too: the room goes on sale only with both.'; return; }
    if (f.get('substitute_teacher_id') === f.get('teacher_id')) { msg.textContent = 'The substitute is another teacher.'; return; }
    var body = { product_key: g.productKey, language: S.lang, level: g.level, teacher_id: f.get('teacher_id'), substitute_teacher_id: f.get('substitute_teacher_id') || undefined,
      starts_on: f.get('starts_on'), schedule_days: t.days, schedule_time: t.time, timezone: g.zone, invite: g.members.map(function (m) { return m.learner.userId; }).filter(Boolean) };
    var btn = form.querySelector('[data-mt-go]'); btn.disabled = true; msg.textContent = 'Creating the room…';
    var pub = onSale(body.starts_on);
    var after = function (r) {
      DONE[i] = 'Room created with ' + A.plural(r.sessions || 0, 'class date', 'class dates') + '. ' + A.plural(r.invited != null ? r.invited : g.members.length, 'learner is', 'learners are') +
        ' invited: they are told by email and in their dashboard when it goes on sale, ' + pub + '.';
      OPEN_FORM = null;
      if (real()) window.AlimunData.adminMatching().then(function (d) { RAW = d; draw(); }, draw); else draw();
    };
    if (!real()) { setTimeout(function () { after({ sessions: 36, invited: g.members.length }); }, 500); return; }
    window.AlimunData.adminRoom(body).then(after, function (e) {
      btn.disabled = false;
      var why = e && e.body && (e.body.error || e.body.code);
      msg.textContent = { teacher_required: 'Choose the teacher.', teacher_not_approved: 'That teacher is not approved.', bad_start: 'The start date is in the past.', no_sessions: 'No class dates fall on those days.', bad_product: 'There is no product for this group yet.' }[why] || 'That did not work: ' + (why || (e && e.message) || 'please try again') + '.';
    });
  }

  /* ---------- Who is where: level by part of the world, with names ---------- */
  function mapView(R) {
    var levels = M.LEVELS.filter(function (lv) { return R.pool.some(function (l) { return l.level === lv; }); });
    var cols = AREAS.concat([{ k: 'none', name: 'Time zone not known' }]);
    var cell = function (lv, a) {
      var who = R.pool.filter(function (l) { var ar = areaOf(l, R.now); return l.level === lv && (a.k === 'none' ? !ar : ar === a); });
      if (!who.length) return '<td class="wm__c"></td>';
      var cls = who.length >= 8 ? ' is-full' : who.length >= 3 ? ' is-some' : '';
      return '<td class="wm__c' + cls + '"><b>' + who.length + '</b><span>' + who.map(function (l) {
        return '<a href="#/matching/' + esc(l.id) + '"' + (NEW[l.id] ? ' class="is-new"' : '') + ' title="' + esc((l.tz || 'Time zone not known') + (l.tz ? ', now ' + nowIn(l.tz) : '')) + '">' + esc(l.name.split(/\s+/).slice(0, 2).join(' ')) + '</a> <small>' + esc(l.country || city(l.tz)) + '</small>';
      }).join(', ') + '</span></td>';
    };
    var countries = {}; R.pool.forEach(function (l) { var k = l.country ? countryName(l.country) : 'Not given'; countries[k] = (countries[k] || 0) + 1; });
    var clist = Object.keys(countries).sort(function (a, b) { return countries[b] - countries[a] || a.localeCompare(b); });
    return '<section class="card span-12" aria-labelledby="h-map"><div class="panel-h"><h2 class="t-h2" id="h-map">Level and part of the world</h2><span class="t-small">Lime: 8 or more, enough for a pack. Hover a name for their time zone.</span></div>' +
      '<div class="dt-wrap"><table class="wm"><thead><tr><th scope="col">Level</th>' + cols.map(function (a) { return '<th scope="col">' + esc(a.name) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      levels.map(function (lv) { return '<tr><th scope="row">' + esc(lv) + '</th>' + cols.map(function (a) { return cell(lv, a); }).join('') + '</tr>'; }).join('') + '</tbody></table></div>' +
      '<p class="t-small" style="margin-top:10px">' + esc('By country: ' + joinAnd(clist.map(function (k) { return k + ' ' + countries[k]; })) + '.') + '</p></section>' + heatCard(R);
  }

  /* ---------- When they can learn (folded) ---------- */
  function heatCard(R) {
    var list = R.pool.filter(function (l) { return !S.level || l.level === S.level; });
    var grid = M.heat(list, S.tz, R.now), max = 1;
    grid.forEach(function (row) { row.forEach(function (c) { if (c.length > max) max = c.length; }); });
    var hours = []; for (var h = 6; h <= 23; h++) hours.push(h);
    var order = [1, 2, 3, 4, 5, 6, 0];
    var levels = M.LEVELS.filter(function (lv) { return R.summary.levels[lv]; });
    var table = '<table><caption class="mx-sr">' + esc('Learners who can start a class at each hour, ' + city(S.tz) + ' time') + '</caption><thead><tr><th scope="col"></th>' +
      hours.map(function (h) { return '<th scope="col">' + String(h).padStart(2, '0') + '</th>'; }).join('') + '</tr></thead><tbody>' +
      order.map(function (d) {
        return '<tr><th scope="row">' + esc(M.WEEK[d].slice(0, 3)) + '</th>' + hours.map(function (h) {
          var who = grid[d][h], a = who.length / max;
          return '<td style="background:' + (who.length ? 'rgba(206,255,101,' + (0.25 + 0.75 * a).toFixed(2) + ')' : 'transparent') + '" title="' +
            esc(M.WEEK[d] + ' ' + String(h).padStart(2, '0') + ':00: ' + (who.length ? who.map(function (l) { return l.name; }).join(', ') : 'nobody')) + '">' + (who.length || '') + '</td>';
        }).join('') + '</tr>';
      }).join('') + '</tbody></table>';
    return '<details class="card span-12 mt-fold"' + (S.heatOpen ? ' open' : '') + ' data-mt-heat><summary><h2 class="t-h2">When they can start a class</h2><span class="t-small">' + esc('Learners free at each hour, ' + city(S.tz) + ' time') + '</span></summary>' +
      '<div class="mt-heat-tools"><label class="mt-tool"><span>Level</span><select class="st-in" data-mt="level">' + opt('', 'All levels', S.level) + levels.map(function (lv) { return opt(lv, lv, S.level); }).join('') + '</select></label>' +
      '<p class="t-small">Hover a number to see who. Learners who gave no times count on weekday evenings and weekend mornings in their own time zone.</p></div>' +
      '<div class="mx-heat">' + table + '</div></details>';
  }

  /* ---------- Every learner ---------- */
  function everyoneRows(R) {
    var q = S.q.trim().toLowerCase();
    var list = R.all.filter(function (l) {
      if (!S.tests && l.test) return false;
      return (!q || (l.name + ' ' + l.email + ' ' + (l.tz || '') + ' ' + (l.country || '')).toLowerCase().indexOf(q) > -1) && (!S.flevel || l.level === S.flevel) && (!S.fgoal || l.goal === S.fgoal);
    });
    var by = { ready: function (a, b) { return b.ready.score - a.ready.score; }, name: function (a, b) { return a.name.localeCompare(b.name); }, level: function (a, b) { return String(a.level).localeCompare(String(b.level)) || b.ready.score - a.ready.score; },
      recent: function (a, b) { return String(b.last_active || '').localeCompare(String(a.last_active || '')); },
      country: function (a, b) { return (a.country ? countryName(a.country) : '~').localeCompare(b.country ? countryName(b.country) : '~') || a.name.localeCompare(b.name); } }[S.sort];
    list.sort(by);
    if (!list.length) return '<p class="t-small" style="margin-top:8px">Nobody matches.</p>';
    var th = function (k, label, cls) { return '<th' + (cls ? ' class="' + cls + '"' : '') + '><button type="button" class="th-s" data-mt-sort="' + k + '"' + (S.sort === k ? ' aria-pressed="true"' : '') + '>' + esc(label) + '</button></th>'; };
    return '<div class="dt-wrap"><table class="dt"><thead><tr>' + th('name', 'Learner') + th('level', 'Level') + th('country', 'Country') + '<th>Time zone</th><th>Focus</th><th>Class times</th>' + th('ready', 'Readiness') + '<th>Class that could run</th>' + th('recent', 'Last seen', 'r') + '</tr></thead><tbody>' +
      list.map(function (l) {
        var g = R.inGroup[l.id], out = R.pool.indexOf(l) < 0;
        var where = g ? g.band.join('–') + ', ' + areaIn(g.area) + (g.need ? ' (' + g.members.length + ' of ' + g.min + ')' : ', can open') : out ? (l.test ? 'Your test account' : l.staff ? 'Staff account' : l.inRoom ? 'In a class' : !l.level ? 'No level' : 'Sign-up not finished') : A.cap(R.why[l.id] || 'not in a group');
        var odd = l.country && l.tz && zoneCountryOdd(l);
        return '<tr class="' + (NEW[l.id] ? 'is-new' : '') + '"><td><a href="#/matching/' + esc(l.id) + '">' + esc(l.name) + '</a>' + (l.test ? ' <span class="m">(test)</span>' : '') + '<div class="m">' + esc(l.email) + (typo(l.email) ? ', looks mistyped' : '') + '</div></td>' +
          '<td>' + levelCell(l) + '</td><td>' + countryCell(l) + '</td>' +
          '<td class="nw"><button type="button" class="tz-b' + (odd ? ' is-odd' : '') + '" data-mt-tz="' + esc(l.id) + '" title="' + esc((l.tz || 'Not known') + (odd ? '. Does not match their country, ' + countryName(l.country) : '') + '. Click to correct') + '">' + esc(city(l.tz)) + (l.tz ? ' <span class="m">' + esc(utcLabel(l.tz, R.now) + ', now ' + nowIn(l.tz)) + '</span>' : '') + '</button></td>' +
          '<td class="m">' + esc(goal(l.goal) + (l.timeframe ? ', ' + (DEADLINE[l.timeframe] || '') : '')) + '</td>' +
          '<td class="m">' + esc(TIMES_SHORT[l.times] || '') + '</td><td>' + readyBar(l) + '</td><td class="m">' + esc(where) + '</td><td class="r m">' + esc(l.last_active ? A.relative(new Date(l.last_active).getTime() - Date.now()) : 'Never') + '</td></tr>';
      }).join('') + '</tbody></table></div>';
  }
  /* A learner whose time zone is far from their country's (a phone set to another zone): flagged for a look */
  var COUNTRY_REGION = { TR: 'Europe', FR: 'Europe', DE: 'Europe', ES: 'Europe', IT: 'Europe', PT: 'Europe', GB: 'Europe', UA: 'Europe', PL: 'Europe', NL: 'Europe', BE: 'Europe', CH: 'Europe', AT: 'Europe', MA: 'Africa', DZ: 'Africa', TN: 'Africa', EG: 'Africa', SO: 'Africa', NG: 'Africa',
    US: 'Americas', CA: 'Americas', MX: 'Americas', BR: 'Americas', PE: 'Americas', CO: 'Americas', AR: 'Americas', CN: 'Asia', TW: 'Asia', JP: 'Asia', KR: 'Asia', IN: 'Asia', PK: 'Asia', IR: 'Asia', AE: 'Asia', SA: 'Asia' };
  function zoneCountryOdd(l) { var want = COUNTRY_REGION[l.country]; return !!(want && l.region && l.region !== 'Unknown' && want !== l.region); }
  function everyoneCard(R) {
    var goals = Object.keys(M.GOALS);
    return '<section class="card span-12" aria-labelledby="h-all"><div class="panel-h"><h2 class="t-h2" id="h-all">Every ' + esc(S.lang) + ' learner</h2><span class="t-small">Click a time zone to correct it; zones that do not match the country are marked</span></div>' +
      '<div class="ad-filters" style="margin-top:6px"><input class="st-in" type="search" data-mt="q" value="' + esc(S.q) + '" placeholder="Search by name, email, country or time zone" aria-label="Search">' +
      '<select class="st-in" data-mt="flevel" aria-label="Level">' + opt('', 'Every level', S.flevel) + M.LEVELS.map(function (lv) { return opt(lv, lv, S.flevel); }).join('') + '</select>' +
      '<select class="st-in" data-mt="fgoal" aria-label="Focus">' + opt('', 'Every focus', S.fgoal) + goals.map(function (k) { return opt(k, M.GOALS[k], S.fgoal); }).join('') + '</select></div>' +
      '<div data-mt-rows>' + everyoneRows(R) + '</div></section>';
  }
  function fixZone(btn) {
    var id = btn.getAttribute('data-mt-tz'), l = R.byId[id]; if (!l) return;
    var zones = ZONES.slice(); (RAW.learners || []).forEach(function (x) { if (x.timezone && zones.indexOf(x.timezone) < 0 && M.validZone(x.timezone) && x.timezone !== 'UTC') zones.push(x.timezone); });
    zones.sort();
    var cell = btn.parentNode;
    cell.innerHTML = '<select class="st-in tz-sel" data-mt-tzsel="' + esc(id) + '" aria-label="' + esc('Time zone of ' + l.name) + '">' + opt('', 'Choose', l.tzSet || '') + zones.map(function (z) { return opt(z, z.replace(/_/g, ' '), l.tzSet || ''); }).join('') + '</select><span class="t-small st-msg" data-mt-tzmsg></span>';
    cell.querySelector('select').focus();
  }
  function saveZone(sel) {
    var id = sel.getAttribute('data-mt-tzsel'), tz = sel.value, msg = sel.parentNode.querySelector('[data-mt-tzmsg]');
    if (!tz) return;
    var apply = function () { (RAW.learners || []).forEach(function (x) { if (x.id === id) x.timezone = tz; }); draw(); };
    if (!real()) { apply(); return; }
    sel.disabled = true; msg.textContent = ' Saving…';
    window.AlimunData.adminSave('student_profiles', id, { timezone: tz }).then(apply, function (e) { sel.disabled = false; msg.textContent = ' Not saved: ' + ((e && e.message) || 'try again'); });
  }

  function mainView(R) {
    var body = S.tab === 'map' ? mapView(R) : S.tab === 'all' ? everyoneCard(R) : S.tab === 'launch' ? launchCard() + roomsCard() : planView(R);
    return headView(R) + countedLine(R) + tabsBar() + '<div class="grid rise" style="margin-top:14px">' + body +
      (real() ? '' : '<p class="t-tiny span-12">This is sample data; nothing is saved or sent.</p>') + '</div>';
  }

  /* ---------- One learner ---------- */
  function learnerView(R, id) {
    var l = R.byId[id];
    var back = '<a class="rd-back" href="#/matching">' + A.icon('back') + '<span>Matching</span></a>';
    if (!l) return back + '<div class="card"><p class="t-body">This learner is not among the ' + esc(S.lang) + ' learners. Change the language on the Matching page.</p></div>';
    var p = l.poll || {};
    var facts = [
      ['Level', l.level ? l.level + (l.tested ? ', from the level test' : ', chosen by them (no level test)') : 'Not known'],
      ['Focus', goal(l.goal) + (l.timeframe ? ', ' + (TF[l.timeframe] || l.timeframe) : '')],
      ['Lives in', (l.tz ? city(l.tz) + ' (' + l.tz + '), now ' + nowIn(l.tz) : 'Time zone not known') + (l.country ? ', ' + countryName(l.country) : '')],
      ['Class times', A.cap(TIMES[l.times] || '')],
      ['Best product', A.cap(M.KIND_NAME[l.kind])],
      ['Readiness', l.ready.score + ' of 100, ' + STAGE[l.ready.stage].toLowerCase() + (l.ready.why.length ? ': ' + l.ready.why.join(', ') : '')],
      ['Welcome poll', l.poll ? A.cap([p.prefer ? 'would like ' + joinAnd(p.prefer.map(function (x) { return PREFER[x] || x; })) : '', WEEKLY[p.time] || '', TEACHER[p.teacher] || '', EXPLAIN[p.explain] || ''].filter(Boolean).join('; ')) : 'Not answered'],
      ['Email', (l.email || '') + (l.news ? ', said yes to news and offers' : ', has not said yes to news and offers')]
    ];
    var g = R.inGroup[l.id];
    var matches = M.bestMatches(l, R.pool, 10);
    return back + '<div class="view__head"><div><h1 class="t-h1">' + esc(l.name) + '</h1><p class="t-lead">' + esc(g ? 'Could join the ' + S.lang + ' ' + g.band.join('–') + ' class for ' + areaIn(g.area) + ': ' + localTime(g, l, R) + ' their time.' : 'Not in a group yet' + (R.why[l.id] ? ': ' + R.why[l.id] : '') + '.') + '</p></div>' +
      '<div class="btn-row"><a class="btn btn--ghost btn--sm" href="#/students/' + esc(l.id) + '">Open their student file</a></div></div>' +
      '<div class="grid rise"><section class="card span-5"><h2 class="t-h2">What we know</h2><div class="dt-wrap"><table class="dt"><tbody>' + facts.map(function (f) {
        return '<tr><td class="m nw">' + esc(f[0]) + '</td><td>' + esc(f[1]) + '</td></tr>';
      }).join('') + '</tbody></table></div></section>' +
      '<section class="card span-7"><div class="panel-h"><h2 class="t-h2">Best matches</h2><span class="t-small">Level 30, shared times 35, focus 20, way of learning 15</span></div>' +
      (matches.length ? '<div class="dt-wrap"><table class="dt"><thead><tr><th>Learner</th><th class="r">Match</th><th>Why</th></tr></thead><tbody>' + matches.map(function (x) {
        return '<tr data-href="#/matching/' + esc(x.learner.id) + '"><td><a href="#/matching/' + esc(x.learner.id) + '">' + esc(x.learner.name) + '</a><div class="m">' + esc((x.learner.level || '') + ', ' + city(x.learner.tz)) + '</div></td><td class="r"><b>' + x.match.score + '</b></td><td class="m">' + esc(A.cap(x.match.why.join(', '))) + '</td></tr>';
      }).join('') + '</tbody></table></div>' : '<p class="t-small">Nobody else yet.</p>') + '</section></div>';
  }

  /* ---------- Events ---------- */
  var R = null;
  function bind() {
    if (root.__amatch) return;
    root.__amatch = true;
    root.addEventListener('change', function (e) {
      var k = e.target.getAttribute('data-mt');
      if (e.target.hasAttribute('data-mx-auto')) { setAuto(e.target); return; }
      if (e.target.hasAttribute('data-mt-tzsel')) { saveZone(e.target); return; }
      if (!k || !RAW || k === 'q') return;
      if (k === 'incomplete' || k === 'staff' || k === 'tests') S[k] = e.target.checked;
      else S[k] = e.target.value;
      if (k === 'flevel' || k === 'fgoal') { var b = root.querySelector('[data-mt-rows]'); if (b) b.innerHTML = everyoneRows(R); return; }
      if (k === 'lang') { S.level = ''; OPEN_FORM = null; DONE = {}; }
      if (k === 'level') S.heatOpen = true;
      draw();
    });
    root.addEventListener('toggle', function (e) { if (e.target.hasAttribute && e.target.hasAttribute('data-mt-heat')) S.heatOpen = e.target.open; }, true);
    root.addEventListener('input', function (e) {
      if (e.target.getAttribute('data-mt') !== 'q' || !R) return;
      S.q = e.target.value;
      var b = root.querySelector('[data-mt-rows]'); if (b) b.innerHTML = everyoneRows(R);
    });
    root.addEventListener('submit', function (e) { var f = e.target.closest('[data-mt-create]'); if (f) { e.preventDefault(); createRoom(f); } });
    root.addEventListener('click', function (e) {
      var tb = e.target.closest('[data-mt-tab]');
      if (tb) { S.tab = tb.getAttribute('data-mt-tab'); OPEN_FORM = null; draw(); return; }
      var lm = e.target.closest('[data-mx-mail]');
      if (lm && !lm.disabled) { launchMail(lm); return; }
      var srt = e.target.closest('[data-mt-sort]');
      if (srt) { S.sort = srt.getAttribute('data-mt-sort'); var b = root.querySelector('[data-mt-rows]'); if (b) b.innerHTML = everyoneRows(R); return; }
      var tz = e.target.closest('[data-mt-tz]');
      if (tz) { fixZone(tz); return; }
      if (e.target.closest('[data-mt-cancel]')) { OPEN_FORM = null; draw(); return; }
      var rm = e.target.closest('[data-mt-room]');
      if (rm && R) {
        var i = +rm.getAttribute('data-mt-room'); rm.disabled = true;
        teachers().then(function () { OPEN_FORM = i; draw(); var f = root.querySelector('[data-mt-create="' + i + '"] select'); if (f) f.focus(); }, function () { OPEN_FORM = i; TEACHERS = []; draw(); });
      }
    });
  }
  var parts0 = null;
  function draw() {
    R = compute();
    if (!S.tz) S.tz = zonesOf(R)[0] || MY_TZ;
    var y = window.scrollY;
    root.innerHTML = parts0 ? learnerView(R, parts0) : mainView(R);
    if (!parts0) window.scrollTo(0, y);
  }
  /* ---------- Live: new sign-ups and changes appear by themselves (owner, 18 Nov 2026: "should update every time
     someone new joins"). Every minute while the page is open and visible, and when the tab comes back into view, the
     data is read again; the page is redrawn only when something a class depends on changed, and never while the owner
     is typing, choosing or filling in the room form (it waits for the next check). */
  var SIG = '', SEEN = null, TIMER = null, PENDING = null;
  function sig(d) {
    return (d.learners || []).map(function (x) { return [x.id, x.language, x.level, x.timezone, x.country, (x.days || []).join(''), x.time_start, x.time_end, x.cohort, x.placement && x.placement.level, x.goal, x.free_class, x.paid, (x.interest || []).length].join(':'); }).join('|') +
      '#' + (d.rooms || []).map(function (r) { return r.id + ':' + r.room_state + ':' + r.seats; }).join('|');
  }
  function onMatching() { return /^#\/matching(\/|$)/.test(location.hash) && root && root.isConnected; }
  function busy() { var a = document.activeElement; return OPEN_FORM !== null || (a && root.contains(a) && /^(INPUT|SELECT|TEXTAREA)$/.test(a.tagName)); }
  function absorb(d) {
    CHECKED = Date.now();
    var ids = {}; (d.learners || []).forEach(function (x) { ids[x.id] = 1; if (SEEN && !SEEN[x.id]) NEW[x.id] = 1; });
    if (!SEEN) SEEN = ids; else Object.keys(ids).forEach(function (k) { SEEN[k] = 1; });
    var g = sig(d), changed = g !== SIG; SIG = g;
    return changed;
  }
  function check() {
    if (!real() || !onMatching() || document.visibilityState !== 'visible') return;
    window.AlimunData.adminMatching().then(function (d) {
      if (!onMatching()) return;
      var changed = absorb(d);
      if (changed) { if (busy()) { PENDING = d; return; } RAW = d; PENDING = null; draw(); }
      else { if (PENDING && !busy()) { RAW = PENDING; PENDING = null; draw(); return; } var t = root.querySelector('.mt-live'); if (t && !parts0) { var keep = t.querySelector('b'); t.textContent = 'Checks for new learners every minute, last at ' + A.fmt(CHECKED, { hour: '2-digit', minute: '2-digit' }) + '.'; if (keep) { t.appendChild(document.createTextNode(' ')); t.appendChild(keep); } } }
    }, function () { /* a missed check is retried at the next one */ });
  }
  function startLive() {
    if (TIMER) return;
    TIMER = setInterval(check, 60000);
    document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible') check(); });
  }
  var no = 0;
  function mount(view, parts, helpers) {
    var my = ++no;
    A = helpers; root = view; parts0 = parts[0] || null;
    bind();
    if (real()) startLive();
    if (!window.AlimunMatch) { root.innerHTML = '<div class="card"><p class="t-body">The matching engine did not load. Please reload the page.</p></div>'; return Promise.resolve({ stale: true }); }
    var get = RAW && real() && parts0 ? Promise.resolve(RAW) : real() ? window.AlimunData.adminMatching() : Promise.resolve(sample());
    if (real() && !parts0 && window.AlimunData.launchInfo) get = Promise.all([get, window.AlimunData.launchInfo().catch(function () { return null; }),
      window.AlimunData.adminLaunchEmail('report').catch(function () { return null; }), window.AlimunData.adminLaunchEmail('preview').catch(function () { return null; }),
      window.AlimunData.adminLaunchEmail('auto-get').catch(function () { return null; })]).then(function (r) { LAUNCH = r[1]; LREP = r[2]; LMAIL = r[3]; LAUTO = r[4] ? !!r[4].auto : null; return r[0]; });
    if (!real()) { LAUTO = false; LMAIL = { people: [] }; }
    if (!RAW || !parts0) root.innerHTML = loading();
    return get.then(function (d) {
      if (my !== no) return { stale: true };
      RAW = d;
      if (real()) absorb(d);
      if (!S.tz) { var c = {}; (d.learners || []).forEach(function (l) { if (l.language === S.lang && !l.test && l.timezone && l.timezone !== 'UTC') c[l.timezone] = (c[l.timezone] || 0) + 1; }); S.tz = Object.keys(c).sort(function (a, b) { return c[b] - c[a]; })[0] || MY_TZ; }
      draw();
      return { title: parts0 && R.byId[parts0] ? R.byId[parts0].name : 'Matching' };
    }, function (e) {
      if (my === no) root.innerHTML = '<div class="card"><p class="t-body">Matching did not load: ' + esc((e && e.message) || 'please try again') + '.</p></div>';
      return { stale: true };
    });
  }
  window.AlimunAdminMatching = { mount: mount, reset: function () { OPEN_FORM = null; } };
})();
