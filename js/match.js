/**
 * Alimun matching engine (Admin → Matching; owner, 12 Nov 2026). Shared by the browser (window.AlimunMatch) and the
 * unit tests (require('../js/match.js')). Pure: it reads what public.admin_matching() returns and writes nothing.
 *
 * What it does, for one language at a time:
 *   1. Each learner's week: the half hours (UTC) at which a 60-minute class can start for them. From the times they gave
 *      in Settings ("stated"), from their days only with the usual hours on those days ("days"), or, when they gave
 *      nothing, weekday evenings 18:00 to 21:00 and weekend mornings 10:00 to 13:00 in their own time zone ("assumed").
 *      Time zones are read at the date given (daylight saving is taken as it is that day).
 *   2. Compatibility of two learners, 0 to 100: level (from the level test, else the level they chose), shared class
 *      times, focus, and learning style from the welcome poll (hours a week, who they want to learn with, how they want
 *      things explained, deadline).
 *   3. Groups: per level, the class time (the rooms' usual day patterns at every half hour in each member's own time zone,
      and every time a teacher offered for that level)
 *      that suits the most learners, weighted by how sure their times are, then the next, up to the room size. Learners
 *      left alone at their level join a group one level away when its time suits them (marked "one level apart").
 *      Each group gets the product its members' focus points to, and how many more learners it needs to open.
 *   4. Readiness to buy, 0 to 100, with its reasons: recent activity, use of the tutor and exercises, poll answers,
 *      their deadline, asking for a room, a price quote, a free place in the first class.
 *   5. A heat map: how many learners can start a class at each hour of the week, in any time zone.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.AlimunMatch = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  var LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  var WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var SLOTS = 336; /* half hours in a week, Sunday 00:00 UTC = 0 */
  /* Room sizes and products: as api/_lib/rooms.js KINDS and PRODUCT_KIND */
  var KINDS = { level_pack: { min: 8, max: 12 }, exam_pack: { min: 8, max: 12 }, open_class: { min: 12, max: 20 } };
  var PRODUCTS = { English: { level_pack: 'level_en', exam_pack: 'exam_en', open_class: 'open_en' }, German: { level_pack: 'level_de', exam_pack: 'exam_de', open_class: 'open_de' } };
  /* Class-day patterns, in the zone a group is shown in: packs meet three times a week (the usual Monday, Tuesday,
     Thursday and its neighbours, or Wednesday and the weekend); an open class once a week */
  var PATTERNS = [[1, 2, 4], [1, 3, 5], [2, 3, 4], [1, 3, 4], [2, 4, 6], [3, 6, 0], [1], [2], [3], [4], [5], [6], [0]];
  function slotFor(c, kind) {
    if (kind === 'open_class') return c.days.length === 1 && (!c.teacher || (c.teacher.kinds || []).indexOf(kind) > -1);
    return c.days.length === 3 && (!c.teacher || (c.teacher.kinds || []).indexOf(kind) > -1);
  }
  var GOALS = { foundations: 'Foundations', relocation: 'Moving abroad', professional: 'Work', academic: 'Exams and study', pleasure: 'For pleasure' };
  var RELATED = { 'professional|relocation': 1, 'academic|professional': 1, 'foundations|relocation': 1, 'foundations|pleasure': 1, 'academic|foundations': 1 };
  var POLL_TIME = { lt1: 0, h1_3: 1, h3_5: 2, gt5: 3 };
  var TIMEFRAME = { '3_months': 0, '6_months': 1, '1_year': 2, no_deadline: 3 };
  var SURE = { stated: 1, days: 0.8, assumed: 0.5 };

  /* ---------- Time zones ---------- */
  var fmtCache = {};
  function validZone(tz) {
    if (typeof tz !== 'string' || !tz || tz.length > 64) return false;
    try { new Intl.DateTimeFormat('en-US', { timeZone: tz }); return true; } catch (e) { return false; }
  }
  /** Minutes the zone is ahead of UTC at `at` (Paris in winter: 60). */
  function offsetMin(tz, at) {
    if (!validZone(tz)) return 0;
    if (!fmtCache[tz]) fmtCache[tz] = new Intl.DateTimeFormat('en-US', { timeZone: tz, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
    var p = {};
    fmtCache[tz].formatToParts(at).forEach(function (x) { p[x.type] = x.value; });
    var asUtc = Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour % 24, +p.minute);
    var t = new Date(at.getTime()); t.setUTCSeconds(0, 0);
    return Math.round((asUtc - t.getTime()) / 60000);
  }
  /** A UTC half-hour slot of the week as the weekday, hour and minute in `tz`. */
  function slotIn(slot, tz, at) {
    var off = Math.round(offsetMin(tz, at) / 30);
    var s = ((slot + off) % SLOTS + SLOTS) % SLOTS;
    return { day: Math.floor(s / 48), minutes: (s % 48) * 30 };
  }
  function toSlot(day, minutes, tz, at) {
    var off = Math.round(offsetMin(tz, at) / 30);
    return (((day * 48 + Math.floor(minutes / 30)) - off) % SLOTS + SLOTS) % SLOTS;
  }
  function hhmm(minutes) { return String(Math.floor(minutes / 60)).padStart(2, '0') + ':' + String(minutes % 60).padStart(2, '0'); }
  function mins(t) { var m = /^(\d{1,2}):(\d{2})/.exec(String(t || '')); return m ? +m[1] * 60 + +m[2] : null; }
  function region(tz) {
    if (!validZone(tz) || tz === 'UTC' || tz === 'Etc/UTC') return 'Unknown';
    var r = tz.split('/')[0];
    return { America: 'Americas', Europe: 'Europe', Asia: 'Asia', Africa: 'Africa', Australia: 'Oceania', Pacific: 'Oceania', Atlantic: 'Europe', Indian: 'Asia' }[r] || 'Unknown';
  }

  /* ---------- Learners ---------- */
  function levelOf(r) {
    var p = r.placement && typeof r.placement === 'object' ? r.placement : null;
    var lv = p && LEVELS.indexOf(p.level) > -1 && (!p.language || p.language === r.language) ? p.level : r.level;
    return { level: LEVELS.indexOf(lv) > -1 ? lv : null, tested: !!(p && p.level === lv) };
  }
  /** The UTC half-hour slots at which a 60-minute class can start for this learner, and how sure that is. */
  function weekOf(r, at) {
    /* UTC is the sign-up default, not a choice: taken as "time zone not known" */
    var tz = validZone(r.timezone) && r.timezone !== 'UTC' && r.timezone !== 'Etc/UTC' ? r.timezone : null;
    var out = { slots: new Set(), source: 'none', tz: tz };
    if (!tz) return out;
    var days = Array.isArray(r.days) ? r.days.filter(function (d) { return d >= 0 && d <= 6; }) : [];
    var from = mins(r.time_start), to = mins(r.time_end);
    var windows = [];
    if (from != null && to != null && to - from >= 60) {
      out.source = 'stated';
      (days.length ? days : [0, 1, 2, 3, 4, 5, 6]).forEach(function (d) { windows.push([d, from, to]); });
    } else {
      out.source = days.length ? 'days' : 'assumed';
      (days.length ? days : [0, 1, 2, 3, 4, 5, 6]).forEach(function (d) { windows.push(d === 0 || d === 6 ? [d, 600, 780] : [d, 1080, 1260]); });
    }
    windows.forEach(function (w) {
      for (var m = w[1]; m + 60 <= w[2]; m += 30) out.slots.add(toSlot(w[0], m, tz, at));
    });
    return out;
  }
  function productKind(l) {
    var prefer = (l.poll && l.poll.prefer) || [];
    var exam = l.goal === 'academic' || prefer.indexOf('exam') > -1;
    if (exam && l.level && LEVELS.indexOf(l.level) >= 2) return 'exam_pack';
    if (l.goal === 'pleasure' || (prefer.length && prefer.every(function (p) { return p === 'conversation' || p === 'classes'; }) && l.goal !== 'professional' && l.goal !== 'relocation' && l.goal !== 'academic')) return 'open_class';
    return 'level_pack';
  }
  /** Readiness to buy, 0 to 100, with the reasons that made it. */
  function readiness(l, now) {
    var score = 0, why = [];
    var add = function (n, s) { if (n > 0) { score += n; why.push(s); } };
    var last = l.last_active ? (now.getTime() - new Date(l.last_active).getTime()) / 86400000 : null;
    if (last != null) add(last <= 3 ? 20 : last <= 7 ? 15 : last <= 30 ? 8 : 0, last <= 3 ? 'active in the last 3 days' : last <= 7 ? 'active this week' : 'active this month');
    add(Math.min(15, (l.days_active || 0) * 3), 'came back on ' + (l.days_active || 0) + (l.days_active === 1 ? ' day' : ' days'));
    add(l.tutor_min > 0 ? 10 : 0, 'used the tutor for ' + l.tutor_min + ' min');
    add(l.exercises > 0 ? 5 : 0, 'did exercises');
    var p = l.poll || {};
    var wants = (p.prefer || []).filter(function (x) { return x === 'classes' || x === 'conversation' || x === 'exam' || x === 'one'; });
    add(wants.length ? 10 : 0, 'said classes or conversation would help most');
    add(p.time === 'gt5' || p.time === 'h3_5' ? 5 : p.time === 'h1_3' ? 3 : 0, 'has time each week');
    add({ '3_months': 10, '6_months': 6, '1_year': 3 }[l.timeframe] || 0, 'has a deadline (' + String(l.timeframe || '').replace('_', ' ') + ')');
    add(l.interest && l.interest.length ? 10 : 0, 'asked to be told when a room opens');
    add(l.quotes > 0 ? 15 : 0, 'looked at a price');
    add(l.freeClass > 0 ? 15 : 0, 'saved a free place in the first class');
    score = Math.min(100, score);
    return { score: score, stage: score >= 55 ? 'ready' : score >= 30 ? 'warming' : 'cold', why: why };
  }
  function normalise(r, now) {
    var lv = levelOf(r), wk = weekOf(r, now);
    var poll = r.poll && typeof r.poll === 'object' ? r.poll : null;
    var l = {
      id: r.id, userId: r.user_id, name: r.name || r.email || 'A learner', email: r.email || '', role: r.role || 'student',
      language: r.language || null, level: lv.level, tested: lv.tested, goal: r.goal || null, timeframe: r.timeframe || null,
      tz: wk.tz, region: region(wk.tz), country: r.country || (poll && poll.from) || null, poll: poll,
      slots: wk.slots, times: wk.source, sure: SURE[wk.source] || 0,
      created_at: r.created_at, last_active: r.last_active || null, acts_7d: r.acts_7d || 0, acts_30d: r.acts_30d || 0, days_active: r.days_active || 0,
      tutor_min: +r.tutor_min || 0, exercises: +r.exercises || 0, interest: r.interest || [], quotes: +r.quotes || 0, freeClass: +r.free_class || 0, news: r.news === true,
      paying: (+r.paid || 0) > 0 || r.sub_status === 'active' || r.sub_status === 'trialing', inRoom: !!r.cohort,
      test: r.test === true, tzSet: r.timezone || null
    };
    l.staff = l.role === 'admin' || l.role === 'teacher';
    /* No level test and no real time zone: an old test account or a sign-up that stopped half way */
    l.incomplete = !lv.tested && !wk.tz;
    l.kind = productKind(l);
    l.ready = readiness(l, now);
    return l;
  }

  /* ---------- Compatibility of two learners ---------- */
  function overlap(a, b) {
    if (!a.slots.size || !b.slots.size) return 0;
    var n = 0;
    a.slots.forEach(function (s) { if (b.slots.has(s)) n++; });
    return n / Math.min(a.slots.size, b.slots.size);
  }
  function compat(a, b) {
    var why = [];
    var la = LEVELS.indexOf(a.level), lb = LEVELS.indexOf(b.level);
    var level = la < 0 || lb < 0 ? 0 : la === lb ? 1 : Math.abs(la - lb) === 1 ? 0.5 : 0;
    why.push(level === 1 ? 'same level' : level ? 'one level apart' : 'levels too far apart');
    var ov = overlap(a, b), time = ov * Math.sqrt(a.sure * b.sure);
    why.push(ov >= 0.5 ? 'many class times in common' : ov > 0 ? 'a few class times in common' : 'no class time in common');
    var focus = !a.goal || !b.goal ? 0.5 : a.goal === b.goal ? 1 : RELATED[[a.goal, b.goal].sort().join('|')] ? 0.6 : 0.2;
    if (a.goal && b.goal) why.push(a.goal === b.goal ? 'same focus' : focus > 0.5 ? 'related focus' : 'different focus');
    var pa = a.poll || {}, pb = b.poll || {}, style = [];
    if (pa.time in POLL_TIME && pb.time in POLL_TIME) style.push(1 - Math.abs(POLL_TIME[pa.time] - POLL_TIME[pb.time]) / 3);
    if (pa.teacher && pb.teacher) style.push((pa.teacher === 'native' && pb.teacher === 'home') || (pa.teacher === 'home' && pb.teacher === 'native') ? 0 : 1);
    if (pa.explain && pb.explain) style.push(pa.explain === 'own' || pb.explain === 'own' ? (pa.lang && pa.lang === pb.lang ? 1 : 0.3) : 1);
    if (a.timeframe in TIMEFRAME && b.timeframe in TIMEFRAME) style.push(1 - Math.abs(TIMEFRAME[a.timeframe] - TIMEFRAME[b.timeframe]) / 3);
    var st = style.length ? style.reduce(function (x, y) { return x + y; }, 0) / style.length : 0.6;
    if (style.length) why.push(st >= 0.75 ? 'similar way of learning' : st >= 0.5 ? 'somewhat similar way of learning' : 'different way of learning');
    var score = Math.round(100 * (0.30 * level + 0.35 * time + 0.20 * focus + 0.15 * st));
    if (!time) score = Math.min(score, 45); /* no class time in common: they cannot share a class */
    return { score: score, level: level, time: time, focus: focus, style: st, why: why };
  }
  function bestMatches(l, all, n) {
    return all.filter(function (o) { return o.id !== l.id && o.language === l.language; })
      .map(function (o) { return { learner: o, match: compat(l, o) }; })
      .sort(function (x, y) { return y.match.score - x.match.score; }).slice(0, n || 8);
  }

  /* ---------- Candidate class times ---------- */
  /** Every pattern at every half hour from 06:00 to 22:30 in each zone the learners live in (so a group's days are its
      members' own days), plus the times teachers offered. Each is kept as its UTC half-hour slots. */
  function candidates(language, availability, at, zones) {
    var out = [], seen = {};
    var push = function (c) { var k = c.zone + '|' + c.exact.join(',') + '|' + (c.teacher ? c.teacher.teacher_id : ''); if (!seen[k]) { seen[k] = 1; out.push(c); } };
    (availability || []).forEach(function (a) {
      if (a.language !== language || !validZone(a.timezone)) return;
      var m = mins(a.schedule_time); if (m == null) return;
      var days = (a.days || []).map(function (d) { return WEEK.indexOf(d); }).filter(function (d) { return d >= 0; });
      if (!days.length) return;
      push({ days: days, minutes: m, zone: a.timezone, exact: days.map(function (d) { return toSlot(d, m, a.timezone, at); }), teacher: a });
    });
    (zones || []).forEach(function (z) {
      PATTERNS.forEach(function (days) {
        for (var m = 360; m <= 1350; m += 30) push({ days: days, minutes: m, zone: z, exact: days.map(function (d) { return toSlot(d, m, z, at); }), teacher: null });
      });
    });
    return out;
  }
  function slotsOf(c) { return c.exact; }
  function fits(l, c) { return slotsOf(c).every(function (s) { return l.slots.has(s); }); }

  /* ---------- Groups ---------- */
  function teacherOk(c, level) { return !c.teacher || (c.teacher.levels || []).indexOf(level) > -1; }
  /** The best time for these learners and this product: most learners weighted by how sure their times are, teachers'
      times first on a tie, the packs' usual days next, shown in the zone most of them live in. */
  function bestSlot(pool, cands, level, kind, near) {
    var best = null;
    cands.forEach(function (c) {
      if (!slotFor(c, kind) || !teacherOk(c, level)) return;
      var who = pool.filter(function (l) { return fits(l, c); });
      if (who.length < 2) return;
      var w = who.reduce(function (s, l) { return s + l.sure + l.ready.score / 400; }, 0) + (c.teacher ? 0.75 : 0) + (c.days.join() === '1,2,4' ? 0.1 : 0) +
        who.filter(function (l) { return l.tz === c.zone; }).length / 100 +
        0.3 * (near || []).filter(function (l) { return fits(l, c); }).length; /* learners who could join it later */
      if (!best || w > best.w + 1e-9) best = { c: c, who: who, w: w };
    });
    return best;
  }
  var KIND_ORDER = ['level_pack', 'exam_pack', 'open_class'];
  var KIND_NAME = { level_pack: 'level pack', exam_pack: 'exam pack', open_class: 'open class' };
  /**
   * run({ learners, availability, rooms }, { language, now, includeIncomplete, includeStaff, includeTests })
   * → { learners, pool, groups, unplaced, summary }
   * Groups are made per level and product (a pack meets three times a week, an open class once). Then each learner
   * still alone joins, where the time suits and there is room: a level pack at their level when they asked for exams
   * ("exam learner in a level pack"), or a group of the same product one level away ("one level apart").
   */
  function run(data, opts) {
    opts = opts || {};
    var now = opts.now || new Date(), language = opts.language || 'English';
    var all = (data.learners || []).map(function (r) { return normalise(r, now); });
    var mine = all.filter(function (l) { return l.language === language; });
    /* The owner's test accounts (public.is_test_user) stay out unless asked for, like staff accounts */
    var pool = mine.filter(function (l) { return (opts.includeStaff || !l.staff) && (opts.includeTests || !l.test) && (opts.includeIncomplete || !l.incomplete) && !l.inRoom && l.level; });
    var zones = pool.map(function (l) { return l.tz; }).filter(function (z, i, a) { return z && a.indexOf(z) === i; }).sort();
    var cands = candidates(language, data.availability, now, zones);
    var groups = [], left = pool.slice();
    LEVELS.forEach(function (level) {
      KIND_ORDER.forEach(function (kind) {
        var lvl = left.filter(function (l) { return l.level === level && l.kind === kind; });
        for (;;) {
          var li = LEVELS.indexOf(level);
          var near = left.filter(function (l) { var gap = Math.abs(LEVELS.indexOf(l.level) - li);
            return (gap === 0 && kind === 'level_pack' && l.kind === 'exam_pack') || (gap === 1 && l.kind === kind); });
          var b = bestSlot(lvl, cands, level, kind, near);
          if (!b) break;
          var members = b.who.slice().sort(function (x, y) { return y.sure - x.sure || y.ready.score - x.ready.score; }).slice(0, KINDS[kind].max);
          groups.push({ language: language, level: level, kind: kind, slot: b.c, members: members.map(function (l) { return { learner: l, stretch: null }; }) });
          lvl = lvl.filter(function (l) { return members.indexOf(l) < 0; });
          left = left.filter(function (l) { return members.indexOf(l) < 0; });
        }
      });
    });
    /* Still alone: a nearby group whose time suits them */
    left.slice().forEach(function (l) {
      var li = LEVELS.indexOf(l.level), home = null, bestScore = -1, why = null;
      groups.forEach(function (g) {
        if (g.members.length >= KINDS[g.kind].max || !fits(l, g.slot)) return;
        var gap = Math.abs(LEVELS.indexOf(g.level) - li);
        var ok = (gap === 0 && l.kind === 'exam_pack' && g.kind === 'level_pack') ? 'exam learner in a level pack' : (gap === 1 && g.kind === l.kind) ? 'one level apart' : null;
        if (!ok) return;
        var sc = g.members.reduce(function (s, m) { return s + compat(l, m.learner).score; }, 0) / g.members.length + (gap ? 0 : 10);
        if (sc > bestScore) { bestScore = sc; home = g; why = ok; }
      });
      if (home) { home.members.push({ learner: l, stretch: why }); left.splice(left.indexOf(l), 1); }
    });
    groups.forEach(function (g) {
      g.productKey = (PRODUCTS[language] || {})[g.kind] || null;
      g.min = KINDS[g.kind].min; g.max = KINDS[g.kind].max;
      g.need = Math.max(0, g.min - g.members.length);
      g.teacher = g.slot.teacher || null;
      /* Shown in the zone most of its members live in (a teacher's offered time keeps the teacher's zone). On a tie the
         zone of members whose country is known counts a little more, then the region most of them are in: never the
         alphabet (two learners in Istanbul and Karachi used to show in Karachi time because "Asia" sorts first). */
      /* First the clock most of them share (Paris, Berlin and Madrid are one clock), then the zone most of them have
         on it, with a known country counting a little more */
      var zones = {}, clocks = {};
      g.members.forEach(function (m) { var l = m.learner; if (l.tz) { var o = offsetMin(l.tz, now); zones[l.tz] = (zones[l.tz] || 0) + 1 + (l.country ? 0.25 : 0); clocks[o] = (clocks[o] || 0) + 1; } });
      var zbest = Object.keys(zones).sort(function (a, b) { return (clocks[offsetMin(b, now)] || 0) - (clocks[offsetMin(a, now)] || 0) || zones[b] - zones[a] || a.localeCompare(b); })[0];
      g.zone = g.slot.teacher ? g.slot.zone : zbest || g.slot.zone || 'UTC';
      var pairs = 0, sum = 0;
      for (var i = 0; i < g.members.length; i++) for (var j = i + 1; j < g.members.length; j++) { sum += compat(g.members[i].learner, g.members[j].learner).score; pairs++; }
      g.cohesion = pairs ? Math.round(sum / pairs) : 0;
      g.readiness = Math.round(g.members.reduce(function (s, m) { return s + m.learner.ready.score; }, 0) / g.members.length);
      var goals = {};
      g.members.forEach(function (m) { var k = m.learner.goal || 'unknown'; goals[k] = (goals[k] || 0) + 1; });
      g.goals = goals;
      g.sure = g.members.filter(function (m) { return m.learner.times !== 'assumed'; }).length;
    });
    groups.sort(function (a, b) { return a.need - b.need || b.members.length - a.members.length || b.readiness - a.readiness; });
    /* Why the rest are not in a group */
    var unplaced = left.map(function (l) {
      var same = pool.filter(function (o) { return o !== l && o.level === l.level; });
      var kin = same.filter(function (o) { return o.kind === l.kind; });
      var reason = !l.tz ? 'no time zone' : !same.length ? 'nobody else at ' + l.level + ' yet' : !kin.length ? 'nobody else at ' + l.level + ' wants the ' + KIND_NAME[l.kind] + ' yet' :
        'no ' + (l.kind === 'open_class' ? 'class time' : 'three class times a week') + ' shared with another ' + l.level + ' learner';
      return { learner: l, reason: reason };
    });
    var count = function (list, key) { var c = {}; list.forEach(function (l) { var k = key(l) || 'Unknown'; c[k] = (c[k] || 0) + 1; }); return c; };
    return {
      language: language, all: mine, pool: pool, groups: groups, unplaced: unplaced,
      left: mine.filter(function (l) { return pool.indexOf(l) < 0; }),
      summary: {
        total: mine.length, pool: pool.length, staff: mine.filter(function (l) { return l.staff; }).length, tests: mine.filter(function (l) { return l.test && !l.staff; }).length,
        incomplete: mine.filter(function (l) { return l.incomplete && !l.staff; }).length, paying: mine.filter(function (l) { return l.paying; }).length,
        levels: count(pool, function (l) { return l.level; }), goals: count(pool, function (l) { return l.goal; }), regions: count(pool, function (l) { return l.region; }),
        zones: count(pool, function (l) { return l.tz; }), times: count(pool, function (l) { return l.times; }), stages: count(pool, function (l) { return l.ready.stage; }),
        news: pool.filter(function (l) { return l.news; }).length
      }
    };
  }

  /* ---------- Heat map and display ---------- */
  /** For each weekday (0 Sunday) and hour (0 to 23) in `tz`: the learners who can start a class then. */
  function heat(learners, tz, at) {
    var grid = [];
    for (var d = 0; d < 7; d++) {
      var row = [];
      for (var h = 0; h < 24; h++) {
        var s = toSlot(d, h * 60, tz, at);
        row.push(learners.filter(function (l) { return l.slots.has(s); }));
      }
      grid.push(row);
    }
    return grid;
  }
  /** A group's class times in `tz`: { days: ['Monday', ...], time: '19:00' }. */
  function timesIn(c, tz, at) {
    var list = slotsOf(c).map(function (s) { return slotIn(s, tz, at); });
    return { days: list.map(function (x) { return WEEK[x.day]; }), dayNums: list.map(function (x) { return x.day; }), time: hhmm(list[0].minutes) };
  }
  function ymd(t) { return new Date(t).toISOString().slice(0, 10); }
  /** First start date for a room: packs start on the first Monday of a month at least 14 days ahead (as the room job);
      open classes on the first class day at least 7 days ahead. */
  function startDate(kind, dayNums, now) {
    var today = ymd(now);
    if (kind !== 'open_class') {
      var y = +today.slice(0, 4), m = +today.slice(5, 7) - 1;
      for (var i = 0; i < 24; i++) {
        var first = new Date(Date.UTC(y, m, 1));
        var monday = ymd(Date.UTC(y, m, 1 + ((8 - first.getUTCDay()) % 7)));
        if (monday >= ymd(now.getTime() + 14 * 86400000)) return monday;
        m += 1; if (m > 11) { m = 0; y += 1; }
      }
    }
    for (var k = 7; k < 14; k++) { var d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + k, 12)); if (dayNums.indexOf(d.getUTCDay()) > -1) return ymd(d); }
    return ymd(now.getTime() + 7 * 86400000);
  }

  return { LEVELS: LEVELS, WEEK: WEEK, KINDS: KINDS, KIND_NAME: KIND_NAME, PRODUCTS: PRODUCTS, GOALS: GOALS, validZone: validZone, offsetMin: offsetMin, toSlot: toSlot, slotIn: slotIn, hhmm: hhmm,
    region: region, normalise: normalise, weekOf: weekOf, compat: compat, bestMatches: bestMatches, readiness: readiness, productKind: productKind, candidates: candidates,
    fits: fits, run: run, heat: heat, timesIn: timesIn, startDate: startDate };
});
