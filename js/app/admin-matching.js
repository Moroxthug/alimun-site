/* Alimun admin: matching (owner, 12 Nov 2026). English only. Engine: js/match.js (unit tested in tests/unit/match.test.js).
   #/matching        who the learners are (level, focus, where they live, how sure we are of their times), when they can
                     start a class (heat map in any time zone), the groups they could form with the time in each member's
                     own zone, "Make this a room" (fills Admin → Classes → Rooms → Create a room) and "Copy their emails",
                     who is not in a group and why, who is closest to buying and why, and every learner.
   #/matching/<id>   one learner: everything the engine knows and their best matches, with the reasons.
   Data from admin_matching() (admins only); signed out or with ?sample=1, a sample. Nothing is saved from this page. */
(function () {
  'use strict';
  var A = null, root = null, RAW = null, M = null;
  var S = { lang: 'English', tz: null, incomplete: false, staff: false, level: '', q: '', flevel: '', fgoal: '' };
  var STAGE = { ready: 'Ready to buy', warming: 'Warming up', cold: 'Cold' };
  var TIMES = { stated: 'gave their days and times', days: 'gave their days, usual hours assumed', assumed: 'gave no times: weekday evenings and weekend mornings assumed', none: 'time zone not known' };
  var PREFER = { exam: 'exam preparation', classes: 'relaxed small-group classes', conversation: 'conversation practice', one: '1 on 1 lessons', self: 'learning on their own' };
  var WEEKLY = { lt1: 'less than an hour a week', h1_3: 'one to three hours a week', h3_5: 'three to five hours a week', gt5: 'more than five hours a week' };
  var TEACHER = { native: 'wants a native speaker', home: 'wants a teacher from their country', either: 'any good teacher' };
  var EXPLAIN = { target: 'explanations only in the language they learn', mostly: 'explanations mostly in that language', own: 'explanations in their own language' };
  var TF = { '3_months': 'within 3 months', '6_months': 'within 6 months', '1_year': 'within a year', no_deadline: 'no deadline' };
  var MY_TZ = (function () { try { return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'; } catch (e) { return 'UTC'; } })();

  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real'; }
  function loading() { return '<div class="rd-loading"><div class="loader" style="--w:56px" role="img" aria-label="Loading">' + A.loaderInner() + '</div></div>'; }
  function city(tz) { return tz ? tz.split('/').pop().replace(/_/g, ' ') : 'time zone not known'; }
  function goal(g) { return (M.GOALS[g] || 'Focus not given'); }
  function joinAnd(list) { return list.length < 2 ? list.join('') : list.slice(0, -1).join(', ') + ' and ' + list[list.length - 1]; }
  function opt(v, label, cur) { return '<option value="' + esc(v) + '"' + (String(v) === String(cur) ? ' selected' : '') + '>' + esc(label) + '</option>'; }
  function countryName(c) { try { return new Intl.DisplayNames(['en'], { type: 'region' }).of(c) || c; } catch (e) { return c; } }

  /* ---------- Sample (signed out or ?sample=1) ---------- */
  function sample() {
    var n = Date.now(), ago = function (d) { return new Date(n - d * 86400000).toISOString(); };
    var P = function (o) { return Object.assign({ time: 'h1_3', prefer: ['classes', 'conversation'], explain: 'mostly', teacher: 'native' }, o); };
    var L = function (i, name, level, goal, tz, o) {
      return Object.assign({ id: 's' + i, user_id: 'u' + i, name: name, email: name.toLowerCase().replace(/[^a-z]+/g, '.') + '@example.com', language: 'English', level: level,
        placement: { level: level, language: 'English' }, goal: goal, timezone: tz, timeframe: '6_months', days: [], role: 'student', last_active: ago(2), days_active: 2, acts_7d: 4, created_at: ago(5) }, o || {});
    };
    return { learners: [
      L(1, 'Marco Rossi', 'A1', 'relocation', 'Europe/Rome', { poll: P({ lang: 'it', time: 'h3_5' }), timeframe: '3_months', tutor_min: 12, news: true }),
      L(2, 'Aya Benali', 'A1', 'professional', 'Africa/Casablanca', { poll: P({ lang: 'fr' }), news: true }),
      L(3, 'Lena Fischer', 'A1', 'foundations', 'Europe/Berlin', { days: [1, 2, 4], time_start: '18:00', time_end: '21:00' }),
      L(4, 'Pablo Ortega', 'A1', 'relocation', 'Europe/Madrid', { quotes: 1, timeframe: '3_months' }),
      L(5, 'Elif Kaya', 'A1', 'relocation', 'Europe/Istanbul', { poll: P({ lang: 'tr', explain: 'own', teacher: 'home' }) }),
      L(6, 'Chloé Martin', 'A2', 'professional', 'Europe/Paris', { poll: P({ lang: 'fr' }), news: true }),
      L(7, 'Jakub Nowak', 'A1', 'professional', 'Europe/Warsaw', { last_active: ago(20), days_active: 1 }),
      L(8, 'Sofia Lima', 'A1', 'foundations', 'America/Sao_Paulo', { poll: P({ lang: 'pt' }) }),
      L(9, 'Diego Torres', 'A1', 'relocation', 'America/Lima', { news: true }),
      L(10, 'Emily Chen', 'A1', 'relocation', 'America/Vancouver', { tutor_min: 30, days_active: 5, last_active: ago(0.2) }),
      L(11, 'Ryan Lee', 'A1', 'relocation', 'America/Los_Angeles', {}),
      L(12, 'Mei Lin', 'A1', 'foundations', 'Asia/Taipei', { last_active: null, days_active: 0 }),
      L(13, 'Omar Haddad', 'B2', 'professional', 'Europe/Istanbul', { poll: P({ time: 'h3_5', explain: 'target' }), timeframe: '3_months', days_active: 4, tutor_min: 25 }),
      L(14, 'Julie Bernard', 'B2', 'academic', 'Europe/Paris', { timeframe: '3_months', interest: ['exam_en'] }),
      L(15, 'Can Yilmaz', 'B2', 'foundations', 'Europe/Istanbul', { last_active: null, days_active: 0 }),
      L(16, 'Hugo Leroy', 'B1', 'academic', 'Europe/Paris', {}),
      L(17, 'Nora Svensson', 'B1', 'professional', 'Europe/Stockholm', { days: [6, 0] }),
      L(18, 'Ali Raza', 'A1', 'professional', 'Asia/Karachi', { last_active: null, days_active: 0 }),
      L(19, 'Claire Dubois', 'A1', 'pleasure', 'Europe/Paris', { days: [6, 0], time_start: '11:00', time_end: '12:00', poll: P({ prefer: ['conversation'], time: 'lt1' }) }),
      L(20, 'Test account', 'B1', 'foundations', 'UTC', { placement: null }),
      L(21, 'Klaus Weber', 'A2', 'relocation', 'Europe/Vienna', { language: 'German', placement: { level: 'A2', language: 'German' } })
    ], availability: [{ teacher_id: 't1', teacher: 'James Hall', starts_on: ago(-20).slice(0, 10), kinds: ['level_pack', 'open_class'], language: 'English', levels: ['A1', 'A2'],
      days: ['Monday', 'Tuesday', 'Thursday'], schedule_time: '19:00', timezone: 'Europe/Rome', substitute: true }], rooms: [] };
  }

  /* ---------- Working it out ---------- */
  function compute() {
    var now = new Date();
    M = window.AlimunMatch;
    var R = M.run(RAW, { language: S.lang, now: now, includeIncomplete: S.incomplete, includeStaff: S.staff });
    R.now = now;
    R.byId = {}; R.all.forEach(function (l) { R.byId[l.id] = l; });
    return R;
  }
  function languages() {
    var c = {};
    (RAW.learners || []).forEach(function (l) { if (l.language) c[l.language] = (c[l.language] || 0) + 1; });
    return Object.keys(c).sort(function (a, b) { return c[b] - c[a]; }).map(function (k) { return [k, c[k]]; });
  }
  function zonesOf(R) {
    var z = {};
    R.pool.forEach(function (l) { if (l.tz) z[l.tz] = (z[l.tz] || 0) + 1; });
    var list = Object.keys(z).sort(function (a, b) { return z[b] - z[a]; });
    if (list.indexOf(MY_TZ) < 0) list.unshift(MY_TZ);
    return list;
  }

  /* ---------- Pieces ---------- */
  function rowsOf(pairs, total) {
    return pairs.length ? '<div class="tt-week">' + pairs.map(function (p) {
      return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(String(p[1])) + '</span><span><b>' + esc(p[0]) + '</b>' + (total ? '<small>' + esc(Math.round(100 * p[1] / total) + '%') + '</small>' : '') + '</span></div>';
    }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">Nobody yet.</p>';
  }
  function sorted(obj, order) {
    return Object.keys(obj).sort(function (a, b) { return order ? order.indexOf(a) - order.indexOf(b) : obj[b] - obj[a]; }).map(function (k) { return [k, obj[k]]; });
  }
  function localTime(g, l, R) {
    if (!l.tz) return 'time not known';
    var t = M.timesIn(g.slot, l.tz, R.now);
    return t.days.map(function (d) { return d.slice(0, 3); }).join(', ') + ' ' + t.time;
  }
  function learnerLine(l) {
    return [l.level + (l.tested ? ' from the level test' : ', level chosen'), goal(l.goal), city(l.tz), l.times === 'stated' ? 'gave times' : l.times === 'days' ? 'gave days' : l.times === 'assumed' ? 'times assumed' : '',
      STAGE[l.ready.stage].toLowerCase() + ' (' + l.ready.score + ')'].filter(Boolean).join(', ');
  }

  /* ---------- Main view ---------- */
  function controls(R) {
    return '<section class="card card--bone span-12" style="--i:0"><form class="st-form" data-mt-controls onsubmit="return false"><div class="st-row">' +
      '<label class="st-field"><span class="st-lbl">Language</span><select class="st-in" data-mt="lang">' + languages().map(function (x) { return opt(x[0], x[0] + ' (' + x[1] + ')', S.lang); }).join('') + '</select></label>' +
      '<label class="st-field"><span class="st-lbl">Show times in</span><select class="st-in" data-mt="tz">' + zonesOf(R).map(function (z) { return opt(z, city(z) + (z === MY_TZ ? ' (yours)' : ''), S.tz); }).join('') + '</select></label></div>' +
      '<label class="st-check"><input type="checkbox" data-mt="incomplete"' + (S.incomplete ? ' checked' : '') + '> Include accounts with no level test and no time zone (' + R.summary.incomplete + ')</label>' +
      '<label class="st-check"><input type="checkbox" data-mt="staff"' + (S.staff ? ' checked' : '') + '> Include admin and teacher accounts (' + R.summary.staff + ')</label>' +
      '</form></section>';
  }
  function whoCard(R) {
    var s = R.summary, n = R.pool.length;
    var best = R.groups.length ? R.groups[0] : null;
    var known = (s.times.stated || 0) + (s.times.days || 0);
    var html = '<section class="card span-12" style="--i:1" aria-labelledby="h-who"><h2 class="t-h2" id="h-who">Who you have</h2><div class="ac-stats">' +
      '<div class="ac-stat"><b>' + n + '</b><span>' + esc(S.lang + ' learners matched') + '</span></div>' +
      '<div class="ac-stat"><b>' + R.groups.length + '</b><span>possible groups</span></div>' +
      '<div class="ac-stat"><b>' + (best ? best.members.length : 0) + '</b><span>in the largest group</span></div>' +
      '<div class="ac-stat"><b>' + known + '</b><span>told us when they can learn</span></div>' +
      '<div class="ac-stat"><b>' + s.news + '</b><span>said yes to news and offers</span></div>' +
      '<div class="ac-stat"><b>' + s.paying + '</b><span>paying</span></div></div>';
    var gaps = [];
    if (n - known > 0) gaps.push(A.plural(n - known, 'learner has', 'learners have') + ' not given their class times, so their weekday evenings and weekend mornings are assumed: groups with them are a best guess until they fill in Settings, Your profile');
    if (s.incomplete && !S.incomplete) gaps.push(A.plural(s.incomplete, 'account is', 'accounts are') + ' left out because they have no level test and no time zone (old test accounts or sign-ups that stopped half way)');
    if (!(RAW.availability || []).some(function (a) { return a.language === S.lang; })) gaps.push('no approved teacher has given their times for ' + S.lang + ' yet, so no group has a teacher; teachers add them on their Your availability page');
    if (gaps.length) html += '<p class="t-body" style="margin-top:14px">' + esc(A.cap(gaps.join('. ')) + '.') + '</p>';
    html += '<div class="grid" style="margin-top:12px">' +
      '<div class="span-4"><h3 class="t-h3">Level</h3>' + rowsOf(sorted(s.levels, M.LEVELS.concat(['Unknown'])), n) + '</div>' +
      '<div class="span-4"><h3 class="t-h3">Focus</h3>' + rowsOf(sorted(s.goals).map(function (p) { return [goal(p[0] === 'Unknown' ? null : p[0]), p[1]]; }), n) + '</div>' +
      '<div class="span-4"><h3 class="t-h3">Where they live</h3>' + rowsOf(sorted(s.regions), n) + '</div>' +
      '<div class="span-12"><h3 class="t-h3">Time zones</h3><p class="t-body" style="margin-top:6px">' + esc(A.cap(sorted(s.zones).map(function (p) {
        return p[1] + (p[0] === 'Unknown' ? ' not known' : ' in ' + city(p[0]) + ' (' + nowIn(p[0]) + ' now)');
      }).join(', ')) + '.') + '</p></div>' +
      '</div></section>';
    return html;
  }
  function nowIn(tz) { try { return new Intl.DateTimeFormat('en-GB', { timeZone: tz, hour: '2-digit', minute: '2-digit' }).format(new Date()); } catch (e) { return ''; } }
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
    return '<section class="card span-12" style="--i:2" aria-labelledby="h-heat"><div class="card__row" style="flex-wrap:wrap;align-items:flex-end"><div style="flex:1;min-width:220px"><h2 class="t-h2" id="h-heat">When they can start a class</h2>' +
      '<p class="t-small" style="margin-top:6px">' + esc('How many learners can start a 60-minute class at each hour, in ' + city(S.tz) + ' time. Hover a number to see who. Learners who gave no times count on weekday evenings and weekend mornings in their own time zone.') + '</p></div>' +
      '<label class="st-field" style="min-width:160px"><span class="st-lbl">Level</span><select class="st-in" data-mt="level">' + opt('', 'All levels', S.level) + levels.map(function (lv) { return opt(lv, lv, S.level); }).join('') + '</select></label></div>' +
      '<div class="mx-heat">' + table + '</div></section>';
  }
  function groupCard(g, R, i) {
    var t = M.timesIn(g.slot, g.zone, R.now), n = g.members.length, kindName = M.KIND_NAME[g.kind];
    var where = joinAnd(t.days) + ' at ' + t.time + ', ' + city(g.zone) + ' time';
    var status = g.need ? A.plural(n, 'learner fits', 'learners fit') + '; a ' + kindName + ' opens with ' + g.min + ', so it needs ' + g.need + ' more.' : A.plural(n, 'learner fits', 'learners fit') + ': enough to open a ' + kindName + ' (' + g.min + ' to ' + g.max + ').';
    var goals = sorted(g.goals).map(function (p) { return goal(p[0] === 'unknown' ? null : p[0]).toLowerCase() + ' (' + p[1] + ')'; });
    var facts = [status, 'They match each other at ' + g.cohesion + ' of 100 on average; readiness to buy ' + g.readiness + ' of 100.',
      'Focus: ' + joinAnd(goals) + '.',
      g.sure === n ? 'Everyone gave their times.' : g.sure ? g.sure + ' of them gave their times; the others’ are assumed.' : 'None of them gave their times: ask them before you count on it.',
      g.teacher ? (g.teacher.teacher || 'A teacher') + ' offered this time.' : 'No teacher has offered this time yet.'];
    var members = g.members.slice().sort(function (a, b) { return b.learner.ready.score - a.learner.ready.score; }).map(function (m) {
      var l = m.learner;
      return '<a class="tt-row tt-row--wide" href="#/matching/' + esc(l.id) + '"><span class="tt-row__time">' + esc(localTime(g, l, R)) + '</span><span><b>' + esc(l.name) + '</b><small>' +
        esc(learnerLine(l) + (m.stretch ? '. Joins as ' + (m.stretch === 'one level apart' ? 'one level apart' : 'an exam learner in a level pack') : '') + '.') + '</small></span></a>';
    }).join('');
    return '<section class="card span-6 mx-group" style="--i:' + (3 + i) + '" aria-labelledby="h-g' + i + '"><h3 class="t-h2" id="h-g' + i + '">' + esc(S.lang + ' ' + g.level + ', ' + kindName) + '</h3>' +
      '<p class="t-lead" style="margin-top:4px">' + esc(where) + '</p><p class="t-small" style="margin-top:8px">' + esc(facts.join(' ')) + '</p>' +
      '<p class="t-tiny" style="margin-top:6px">Times beside each name are in that learner’s own time zone.</p>' +
      '<div class="tt-week" style="margin-top:8px">' + members + '</div>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-mt-room="' + i + '">Make this a room</button>' +
      '<button class="btn btn--ghost btn--sm" type="button" data-mt-emails="' + i + '">Copy their emails</button></div><p class="t-small st-msg" data-mt-msg="' + i + '" aria-live="polite"></p></section>';
  }
  function groupsCards(R) {
    var head = '<section class="card card--bone span-12" style="--i:3"><h2 class="t-h2">Groups they could form</h2><p class="t-body" style="margin-top:6px">' +
      esc('Each group is one level and one product at the time that suits the most of them (the packs meet three times a week, the open class once). The best placed groups come first: closest to their minimum, then the largest. "Make this a room" fills in the room form; you choose the teacher there.') + '</p></section>';
    if (!R.groups.length) return head + '<section class="card span-12"><p class="t-body">No two learners at the same level share a class time yet.</p></section>';
    return head + R.groups.map(function (g, i) { return groupCard(g, R, i); }).join('');
  }
  function unplacedCard(R) {
    if (!R.unplaced.length) return '';
    return '<section class="card span-6" style="--i:20" aria-labelledby="h-un"><h2 class="t-h2" id="h-un">Not in a group yet</h2><p class="t-small" style="margin-top:6px">Why, and the learner who suits them best.</p><div class="tt-week">' +
      R.unplaced.map(function (u) {
        var l = u.learner, b = M.bestMatches(l, R.pool, 1)[0];
        return '<a class="tt-row tt-row--wide" href="#/matching/' + esc(l.id) + '"><span class="tt-row__time">' + esc(l.level || '') + '</span><span><b>' + esc(l.name) + '</b><small>' +
          esc(A.cap(u.reason) + '. ' + city(l.tz) + ', ' + goal(l.goal).toLowerCase() + '.' + (b ? ' Closest: ' + b.learner.name + ' (' + b.match.score + ').' : '')) + '</small></span></a>';
      }).join('') + '</div></section>';
  }
  function readyCard(R) {
    var list = R.pool.slice().sort(function (a, b) { return b.ready.score - a.ready.score; }).slice(0, 10);
    var c = R.summary.stages;
    return '<section class="card span-6" style="--i:21" aria-labelledby="h-ready"><h2 class="t-h2" id="h-ready">Closest to buying</h2><p class="t-small" style="margin-top:6px">' +
      esc((c.ready || 0) + ' ready, ' + (c.warming || 0) + ' warming up, ' + (c.cold || 0) + ' cold. Readiness comes from what they did: recent visits, the tutor and exercises, their poll answers, their deadline, asking for a room and looking at a price.') + '</p><div class="tt-week">' +
      list.map(function (l) {
        return '<a class="tt-row tt-row--wide" href="#/matching/' + esc(l.id) + '"><span class="tt-row__time">' + esc(l.ready.score + ' of 100') + '</span><span><b>' + esc(l.name + ', ' + (l.level || '')) + '</b><small>' +
          esc(A.cap(l.ready.why.join(', ') || 'nothing yet') + '.' + (l.news ? ' Said yes to news and offers.' : '')) + '</small></span></a>';
      }).join('') + '</div></section>';
  }
  function everyoneRows(R) {
    var q = S.q.trim().toLowerCase();
    var list = R.all.filter(function (l) {
      return (!q || (l.name + ' ' + l.email + ' ' + (l.tz || '')).toLowerCase().indexOf(q) > -1) && (!S.flevel || l.level === S.flevel) && (!S.fgoal || l.goal === S.fgoal);
    });
    var inGroup = {};
    R.groups.forEach(function (g, i) { g.members.forEach(function (m) { inGroup[m.learner.id] = g; }); });
    return list.length ? list.map(function (l) {
      var g = inGroup[l.id], out = R.pool.indexOf(l) < 0;
      var where = g ? 'In the ' + g.level + ' ' + M.KIND_NAME[g.kind] + ' group' : out ? (l.staff ? 'Staff account, left out' : l.inRoom ? 'Already in a class' : !l.level ? 'No level' : 'Left out: no level test and no time zone') : 'Not in a group yet';
      return '<a class="tt-row tt-row--wide" href="#/matching/' + esc(l.id) + '"><span class="tt-row__time">' + esc(l.tz ? nowIn(l.tz) + ' now' : '') + '</span><span><b>' + esc(l.name) + '</b><small>' +
        esc(learnerLine(l) + '. ' + where + '.') + '</small></span></a>';
    }).join('') : '<p class="t-body" style="margin-top:8px">Nobody matches.</p>';
  }
  function everyoneCard(R) {
    var goals = Object.keys(M.GOALS);
    return '<section class="card span-12" style="--i:22" aria-labelledby="h-all"><h2 class="t-h2" id="h-all">Every ' + esc(S.lang) + ' learner</h2>' +
      '<div class="st-row" style="margin-top:10px"><label class="st-field"><span class="st-lbl">Search</span><input class="st-in" type="search" data-mt="q" value="' + esc(S.q) + '" placeholder="Name, email or time zone"></label>' +
      '<label class="st-field"><span class="st-lbl">Level</span><select class="st-in" data-mt="flevel">' + opt('', 'All', S.flevel) + M.LEVELS.map(function (lv) { return opt(lv, lv, S.flevel); }).join('') + '</select></label>' +
      '<label class="st-field"><span class="st-lbl">Focus</span><select class="st-in" data-mt="fgoal">' + opt('', 'All', S.fgoal) + goals.map(function (k) { return opt(k, M.GOALS[k], S.fgoal); }).join('') + '</select></label></div>' +
      '<p class="t-tiny" style="margin-top:6px">The time on the left is the time where they live right now.</p>' +
      '<div class="tt-week" data-mt-rows>' + everyoneRows(R) + '</div></section>';
  }
  /* ---------- The English A1–A2 launch class (owner, 12 Nov 2026; api/_lib/launch.js, launch-email.js) ---------- */
  var LAUNCH = null, LMAIL = null;
  function launchCard() {
    if (S.lang !== 'English') return '';
    var L = LAUNCH;
    var html = '<section class="card card--lime span-12" style="--i:1" aria-labelledby="h-launch"><h2 class="t-h2" id="h-launch">Launch class</h2>';
    if (!L) return html + '<p class="t-body" style="margin-top:8px">' + esc(real() ? 'Not set up, or it did not load.' : 'In the sample there is no launch class.') + '</p></section>';
    if (!L.offer) return html + '<p class="t-body" style="margin-top:8px">No launch class is set up.</p></section>';
    var rooms = (L.rooms || []).map(function (r) { return (/^level_/.test(r.product_key) ? 'level pack ' : 'open class ') + r.seats + ' (' + r.state + ')'; }).join(', ');
    html += '<p class="t-body" style="margin-top:8px">' + esc('Sign-ups: ' + L.seats + ' of ' + L.min + ' needed (' + rooms + '). Free first class: ' + (L.intro ? L.intro.registeredCount + ' registered' : 'none') + '. Sign-ups ' + (L.offer.active ? 'close ' + A.fmt(L.offer.endsAt, { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }) : 'are closed') + '. The class page learners see: /app#/settings/plans/launch.') + '</p>';
    var m = LMAIL;
    if (m && m.people) html += '<p class="t-body" style="margin-top:10px"><b>' + esc(A.plural(m.count, 'learner has', 'learners have') + ' not had the email yet') + '</b></p><div class="tt-week">' + m.people.map(function (x) {
      return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc((x.level || '') + ' ' + x.lang) + '</span><span><b>' + esc(x.name || 'No name') + '</b><small>' + esc((x.timezone || 'zone not known') + '. ' + x.subject) + '</small></span></div>';
    }).join('') + '</div>';
    if (m && m.tests) html += '<p class="t-body" style="margin-top:10px">' + esc('Test emails sent to you: ' + m.tests.map(function (x) { return x.lang + (x.beginner ? '' : ' (B1 and above)') + (x.ok ? '' : ' failed'); }).join(', ') + '.') + '</p>';
    if (m && m.sent != null) html += '<p class="t-body" style="margin-top:10px"><b>' + esc(A.plural(m.sent, 'email sent', 'emails sent') + (m.failed && m.failed.length ? '; failed: ' + m.failed.join(', ') : '') + '.') + '</b></p>';
    html += '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-mx-mail="preview">Who gets the email</button><button class="btn btn--ghost btn--sm" type="button" data-mx-mail="test">Send me a test</button>' +
      (m && m.people && m.count ? '<button class="btn btn--ghost btn--sm" type="button" data-mx-mail="send">' + esc('Send to ' + A.plural(m.count, 'learner', 'learners')) + '</button>' : '') + '</div>' +
      '<p class="t-small st-msg" data-mx-mailmsg aria-live="polite"></p></section>';
    return html;
  }
  function launchMail(b) {
    var mode = b.getAttribute('data-mx-mail'), msg = root.querySelector('[data-mx-mailmsg]');
    if (!real()) { msg.textContent = 'This is sample data; nothing is sent.'; return; }
    if (mode === 'send' && !window.confirm('Send the launch email to ' + LMAIL.count + ' learners now?')) return;
    b.disabled = true; msg.textContent = mode === 'preview' ? 'Working it out\u2026' : 'Sending\u2026';
    window.AlimunData.adminLaunchEmail(mode, mode === 'send' ? LMAIL.count : undefined).then(function (r) {
      LMAIL = mode === 'send' ? r : mode === 'test' ? Object.assign({}, LMAIL, r) : r;
      if (mode === 'send') return window.AlimunData.adminLaunchEmail('preview').then(function (p) { LMAIL = Object.assign(p, { sent: r.sent, failed: r.failed }); });
    }).then(function () { draw(); }, function (e) { b.disabled = false; msg.textContent = 'That did not work: ' + ((e && e.body && e.body.error) || (e && e.message) || 'please try again') + '.'; });
  }
  function mainView(R) {
    return '<div class="view__head"><div><h1 class="t-h1">Matching</h1><p class="t-lead">Every learner’s level, focus and time zone, the groups they could form, and who is closest to buying. Worked out again each time you open this page; nothing here is saved or sent.</p></div></div>' +
      '<div class="grid rise">' + controls(R) + launchCard() + whoCard(R) + heatCard(R) + groupsCards(R) + unplacedCard(R) + readyCard(R) + everyoneCard(R) +
      (real() ? '' : '<p class="t-tiny span-12">This is sample data.</p>') + '</div>';
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
    var g = null;
    R.groups.forEach(function (x) { if (x.members.some(function (m) { return m.learner === l; })) g = x; });
    var matches = M.bestMatches(l, R.pool, 10);
    return back + '<div class="view__head"><div><h1 class="t-h1">' + esc(l.name) + '</h1><p class="t-lead">' + esc(g ? 'In the ' + S.lang + ' ' + g.level + ' ' + M.KIND_NAME[g.kind] + ' group: ' + localTime(g, l, R) + ' their time.' : 'Not in a group yet.') + '</p></div></div>' +
      '<div class="grid rise"><section class="card span-12" style="--i:0"><h2 class="t-h2">What we know</h2><div class="tt-week">' + facts.map(function (f) {
        return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(f[0]) + '</span><span><b>' + esc(f[1]) + '</b></span></div>';
      }).join('') + '</div><div class="btn-row"><a class="btn btn--ghost btn--sm" href="#/students/' + esc(l.id) + '">Open their student file</a></div></section>' +
      '<section class="card span-12" style="--i:1"><h2 class="t-h2">Best matches</h2><p class="t-small" style="margin-top:6px">Out of 100: level counts for 30, shared class times 35, focus 20, way of learning 15. Learners with no class time in common stay at 45 or below.</p>' +
      (matches.length ? '<div class="tt-week">' + matches.map(function (x) {
        return '<a class="tt-row tt-row--wide" href="#/matching/' + esc(x.learner.id) + '"><span class="tt-row__time">' + esc(x.match.score + ' of 100') + '</span><span><b>' + esc(x.learner.name + ', ' + (x.learner.level || '') + ', ' + city(x.learner.tz)) + '</b><small>' + esc(A.cap(x.match.why.join(', ')) + '.') + '</small></span></a>';
      }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">Nobody else yet.</p>') + '</section></div>';
  }

  /* ---------- Actions ---------- */
  var R = null;
  function makeRoom(i) {
    var g = R.groups[i]; if (!g) return;
    var t = M.timesIn(g.slot, g.zone, R.now);
    window.AlimunRoomPrefill = { product_key: g.productKey, language: S.lang, level: g.level, days: t.days, time: t.time, timezone: g.zone,
      starts_on: M.startDate(g.kind, t.dayNums, R.now),
      note: S.lang + ' ' + g.level + ', ' + M.KIND_NAME[g.kind] + ', ' + joinAnd(t.days) + ' at ' + t.time + ' (' + g.zone + '), ' + A.plural(g.members.length, 'learner', 'learners') + ' fit.' };
    location.hash = '#/classes/rooms';
    var tries = 0, look = setInterval(function () {
      var el = document.getElementById('new-room');
      if (el) { clearInterval(look); window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96, behavior: 'smooth' }); } else if (++tries > 40) clearInterval(look);
    }, 100);
  }
  function copyEmails(i, btn) {
    var g = R.groups[i], msg = root.querySelector('[data-mt-msg="' + i + '"]');
    if (!g) return;
    var list = g.members.map(function (m) { return m.learner.email; }).filter(Boolean);
    var text = list.join(', ');
    var done = function () { msg.textContent = A.plural(list.length, 'email', 'emails') + ' copied. Only ' + g.members.filter(function (m) { return m.learner.news; }).length + ' of them said yes to news and offers; write to the others only about their own learning.'; };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () { msg.textContent = text; });
    else msg.textContent = text;
    btn.blur();
  }
  function bind() {
    if (root.__amatch) return;
    root.__amatch = true;
    root.addEventListener('change', function (e) {
      var k = e.target.getAttribute('data-mt');
      if (!k || !RAW) return;
      if (k === 'incomplete' || k === 'staff') S[k] = e.target.checked;
      else if (k !== 'q') S[k] = e.target.value;
      if (k === 'flevel' || k === 'fgoal') { var b = root.querySelector('[data-mt-rows]'); if (b) b.innerHTML = everyoneRows(R); return; }
      if (k === 'lang') S.level = '';
      draw();
    });
    root.addEventListener('input', function (e) {
      if (e.target.getAttribute('data-mt') !== 'q' || !R) return;
      S.q = e.target.value;
      var b = root.querySelector('[data-mt-rows]'); if (b) b.innerHTML = everyoneRows(R);
    });
    root.addEventListener('click', function (e) {
      var lm = e.target.closest('[data-mx-mail]');
      if (lm && !lm.disabled) { launchMail(lm); return; }
      var b = e.target.closest('[data-mt-room],[data-mt-emails]');
      if (!b || !R) return;
      if (b.hasAttribute('data-mt-room')) makeRoom(+b.getAttribute('data-mt-room'));
      else copyEmails(+b.getAttribute('data-mt-emails'), b);
    });
  }
  var parts0 = null;
  function draw() {
    R = compute();
    if (!S.tz) S.tz = zonesOf(R)[0] || MY_TZ;
    root.innerHTML = parts0 ? learnerView(R, parts0) : mainView(R);
  }
  var no = 0;
  function mount(view, parts, helpers) {
    var my = ++no;
    A = helpers; root = view; parts0 = parts[0] || null;
    bind();
    if (!window.AlimunMatch) { root.innerHTML = '<div class="card"><p class="t-body">The matching engine did not load. Please reload the page.</p></div>'; return Promise.resolve({ stale: true }); }
    var get = RAW && real() && parts0 ? Promise.resolve(RAW) : real() ? window.AlimunData.adminMatching() : Promise.resolve(sample());
    if (real() && !parts0 && window.AlimunData.launchInfo) get = Promise.all([get, window.AlimunData.launchInfo().catch(function () { return null; })]).then(function (r) { LAUNCH = r[1]; return r[0]; });
    if (!RAW || !parts0) root.innerHTML = loading();
    return get.then(function (d) {
      if (my !== no) return { stale: true };
      RAW = d;
      if (!S.tz) { var c = {}; (d.learners || []).forEach(function (l) { if (l.language === S.lang && l.timezone && l.timezone !== 'UTC') c[l.timezone] = (c[l.timezone] || 0) + 1; }); S.tz = Object.keys(c).sort(function (a, b) { return c[b] - c[a]; })[0] || MY_TZ; }
      draw();
      return { title: parts0 && R.byId[parts0] ? R.byId[parts0].name : 'Matching' };
    }, function (e) {
      if (my === no) root.innerHTML = '<div class="card"><p class="t-body">Matching did not load: ' + esc((e && e.message) || 'please try again') + '.</p></div>';
      return { stale: true };
    });
  }
  window.AlimunAdminMatching = { mount: mount, reset: function () {} };
})();
