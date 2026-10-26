/* Alimun admin (docs/DASHBOARD_PLAN.md, step 15, admin pages), page /app/admin. English only (owner, 26 Oct 2026).
   Part 1: the shell (same look as the dashboards) and the Overview: what needs the admin (teacher applications,
   homework unmarked for more than a week, automatic jobs that failed or stopped), the numbers counted from the
   database, today's classes with a way into each room, AI spend this month and the jobs' last week. Sections of later
   parts say which part builds them. Only an admin (app_metadata.role, checked again by the database's is_admin()) sees
   real data; signed out, or with ?sample=1, a sample; any other account is told the page is not for them.
   Part 2 (js/app/admin-people.js): students and teachers. Part 3 (js/app/admin-classes.js, js/app/admin-teaching.js):
   classes, schedule, waiting list and messages. */
(function () {
  'use strict';
  var Cast = window.AlimunCast;
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }
  var locale = 'en-GB';
  function fmt(d, o) { return new Intl.DateTimeFormat(locale, o).format(new Date(d)); }
  function num(n) { return new Intl.NumberFormat(locale).format(n); }
  function cap(s) { s = String(s || ''); return s.charAt(0).toUpperCase() + s.slice(1); }
  function plural(n, one, many) { return num(n) + ' ' + (n === 1 ? one : many); }
  var MIN = 60000, HOUR = 3600000, DAY = 86400000;
  function relative(ms) {
    var rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' }), a = Math.abs(ms), s = ms < 0 ? -1 : 1;
    if (a < HOUR) return rtf.format(s * Math.max(1, Math.round(a / MIN)), 'minute');
    if (a < DAY) return rtf.format(s * Math.round(a / HOUR), 'hour');
    return rtf.format(s * Math.round(a / DAY), 'day');
  }
  var TIERS = { community: 'Community', focused: 'Focused', intensive: 'Intensive', private: '1 on 1', onetoone: '1 on 1', daily: 'Daily' };
  function className(co) { return ((co.language || '') + ' ' + (co.level || '') + (TIERS[co.tier] ? ', ' + TIERS[co.tier] : '')).trim(); }

  var P = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  var ICONS = {
    home: '<path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z"/>',
    students: '<circle cx="9" cy="8.5" r="3.2"/><path d="M3.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5"/><circle cx="16.8" cy="9.5" r="2.5"/><path d="M15.5 14.6c2.6-.3 4.4 1.3 5 4.4"/>',
    teachers: '<rect x="3.5" y="5" width="17" height="11" rx="2"/><path d="M8 20h8M12 16v4"/>',
    classes: '<rect x="3" y="6" width="13" height="12" rx="3"/><path d="m16 10.5 5-3v9l-5-3"/>',
    schedule: '<rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    waiting: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4.5l3 2"/>',
    messages: '<path d="M20 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.2A8 8 0 1 1 20 12z"/>',
    payouts: '<rect x="3" y="6.5" width="18" height="12" rx="2.5"/><path d="M3 10.5h18M7 15h3"/>',
    ai: '<path d="M4 20V13M10 20V8M16 20v-5M20 20H3"/>',
    system: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/>',
    more: '<circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    play: '<path d="M8 5.5v13l10.5-6.5z"/>'
  };
  function icon(name) { return '<svg class="i-' + name + '" viewBox="0 0 24 24" ' + P + ' aria-hidden="true" focusable="false">' + ICONS[name] + '</svg>'; }
  function loaderInner() {
    return '<div class="whirl whirl--outer"></div><div class="whirl whirl--inner"></div><div class="spark"></div>' +
      '<div class="mark"><svg viewBox="290 360 445 445" aria-hidden="true">' + Cast.logoPath +
      '<circle fill="#d5af33" cx="453" cy="605" r="19"/><circle fill="#d5af33" cx="574" cy="605" r="19"/></svg></div>';
  }

  /* ---------- Sections ---------- */
  var ROUTES = [
    { id: 'overview', label: 'Overview', icon: 'home', group: 'Alimun' },
    { id: 'students', label: 'Students', icon: 'students', group: 'People', part: 2, text: 'Every student: search, their file, plan, class and progress, and view their dashboard as they see it.' },
    { id: 'teachers', label: 'Teachers', icon: 'teachers', group: 'People', part: 2, text: 'Applications to approve or reject, and each teacher’s file, classes and availability.' },
    { id: 'classes', label: 'Classes', icon: 'classes', group: 'Teaching', part: 3, text: 'Creating classes for teachers, rosters, moving students, closing and reopening.' },
    { id: 'schedule', label: 'Schedule', icon: 'schedule', group: 'Teaching', part: 3, text: 'Every class date: cancel or move one, with students and teacher told.' },
    { id: 'waiting', label: 'Waiting list', icon: 'waiting', group: 'Teaching', part: 3, text: 'Who is waiting for which class, and the places offered.' },
    { id: 'messages', label: 'Messages', icon: 'messages', group: 'Teaching', part: 3, text: 'Read conversations and hide a message if needed.' },
    { id: 'payouts', label: 'Payouts', icon: 'payouts', group: 'Money and system', part: 4, text: 'Record what teachers are paid, beside the classes they taught.' },
    { id: 'ai', label: 'AI spend', icon: 'ai', group: 'Money and system', part: 4, text: 'Calls and cost by day, by feature and by person.' },
    { id: 'system', label: 'System', icon: 'system', group: 'Money and system', part: 4, text: 'Reviews, app settings, email signups and the automatic jobs.' }
  ];
  var byId = {}; ROUTES.forEach(function (r) { byId[r.id] = r; });
  var BAR = ['overview', 'students', 'teachers', 'classes'];
  var GROUPS = ['Alimun', 'People', 'Teaching', 'Money and system'];

  var app, view, top, sheet, loadingScreen, D = null, current = null;
  var mode = 'sample'; /* 'real', 'sample' (signed out), 'forced' (?sample=1), 'denied', 'error' */

  function navLinks() {
    return GROUPS.map(function (g) {
      return '<div class="nav__group"><div class="nav__label">' + esc(g) + '</div>' + ROUTES.filter(function (r) { return r.group === g; }).map(function (r) {
        return '<a href="#/' + r.id + '" data-route="' + r.id + '">' + icon(r.icon) + '<span>' + esc(r.label) + '</span></a>';
      }).join('') + '</div>';
    }).join('');
  }
  function renderShell() {
    var who = D && D.email ? D.email : 'Sample admin';
    app.innerHTML = '<a class="skip" href="#view">Skip to the content</a>' +
      '<aside class="side" aria-label="Main"><a class="brand" href="#/overview" aria-label="Overview">' + Cast.book('idle') + Cast.wordmark() + '</a>' +
        '<nav class="nav" aria-label="Sections">' + navLinks() + '</nav>' +
        '<div class="side__foot"><div class="buddy-card">' + Cast.drawing('cat') + '<div><b>Admin</b><small>' + esc(who) + '</small></div></div></div></aside>' +
      '<div class="main"><header class="top"><a class="top__brand" href="#/overview" aria-label="Overview">' + Cast.book('idle') + Cast.wordmark() + '</a>' +
        '<p class="top__title" aria-hidden="true"></p><div class="top__actions"><button class="btn btn--quiet btn--sm" type="button" data-signout>Sign out</button></div></header>' +
        '<main class="view" id="view" tabindex="-1"></main></div>' +
      '<nav class="bar" aria-label="Sections">' + BAR.map(function (id) { var r = byId[id]; return '<a href="#/' + id + '" data-route="' + id + '">' + icon(r.icon) + '<span>' + esc(r.label) + '</span></a>'; }).join('') +
        '<button type="button" data-more aria-haspopup="dialog" aria-expanded="false">' + icon('more') + '<span>More</span></button></nav>' +
      '<div class="sheet-scrim" data-close></div><div class="sheet" role="dialog" aria-modal="true" aria-label="More sections"><div class="sheet__grip"></div><nav class="nav">' + navLinks() + '</nav></div>';
    view = app.querySelector('.view'); top = app.querySelector('.top'); sheet = app.querySelector('.sheet');
  }

  /* ---------- Overview ---------- */
  /* Each automatic job and how often it should run; one that has not run for twice that long is late */
  var JOBS = {
    'db:complete-sessions': { name: 'Mark finished class dates as done', every: 15 * MIN },
    'db:expire-waitlist-offers': { name: 'Expire unanswered waiting-list offers', every: 15 * MIN },
    'vercel:cron-create-rooms': { name: 'Prepare tomorrow’s video rooms', every: DAY },
    'vercel:cron-expire-offers': { name: 'Expire offers (daily backstop)', every: DAY }
  };
  function jobsSummary() {
    var by = {};
    (D.jobs || []).forEach(function (r) {
      var j = by[r.job] = by[r.job] || { job: r.job, last: null, lastOk: null, failed: 0, runs: 0 };
      j.runs++; if (!r.ok) j.failed++;
      if (!j.last) { j.last = r.ran_at; j.lastOk = r.ok; }
    });
    Object.keys(JOBS).forEach(function (k) { if (!by[k]) by[k] = { job: k, last: null, lastOk: null, failed: 0, runs: 0 }; });
    return Object.keys(by).map(function (k) {
      var j = by[k], every = (JOBS[k] || {}).every || DAY;
      j.name = (JOBS[k] || {}).name || k;
      j.late = !j.last || Date.now() - new Date(j.last).getTime() > 2 * every + 10 * MIN;
      j.bad = j.late || j.lastOk === false;
      return j;
    }).sort(function (a, b) { return (b.bad ? 1 : 0) - (a.bad ? 1 : 0) || a.name.localeCompare(b.name); });
  }
  function attention() {
    var items = [], c = D.counts, jobs = jobsSummary().filter(function (j) { return j.bad; });
    if (c.pending) items.push({ href: '#/teachers', h: plural(c.pending, 'teacher application', 'teacher applications') + ' waiting',
      p: 'Oldest: ' + D.applications[0].full_name + ', ' + relative(new Date(D.applications[0].created_at).getTime() - Date.now()) + '.' });
    if (D.oldHomework.length) items.push({ href: '#/teachers', h: plural(D.oldHomework.length, 'piece', 'pieces') + ' of homework unmarked for over a week',
      p: 'Handed in ' + relative(new Date(D.oldHomework.map(function (x) { return x.submitted_at; }).sort()[0]).getTime() - Date.now()) + ' at the earliest.' });
    if (jobs.length) items.push({ href: '#/system', h: plural(jobs.length, 'automatic job', 'automatic jobs') + ' not running well',
      p: jobs.map(function (j) { return j.name + (j.late ? (j.last ? ': last ran ' + relative(new Date(j.last).getTime() - Date.now()) : ': has not run this week') : ': failed last time'); }).join('. ') + '.' });
    return items;
  }
  function overviewView() {
    var c = D.counts, items = attention();
    var html = '<div class="view__head"><div><h1 class="t-h1">Overview</h1><p class="t-lead">' + esc(cap(fmt(Date.now(), { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }))) + '</p></div></div><div class="grid rise">';
    if (mode !== 'real') html += '<section class="card card--bone span-12 sample-note" style="--i:0" role="note"><div class="card__row" style="flex-wrap:wrap"><div style="flex:1;min-width:220px"><h2 class="t-h3">You are looking at sample data</h2>' +
      '<p class="t-small" style="margin-top:6px">' + esc(mode === 'forced' ? 'You asked for the sample.' : mode === 'error' ? 'The real data did not load. Please try again.' : 'Sign in with an admin account to see Alimun’s real data.') + '</p></div>' +
      (mode === 'forced' ? '<a class="btn btn--primary btn--sm" href="' + location.pathname + location.hash + '">Show the real data</a>' : mode === 'error' ? '<button class="btn btn--primary btn--sm" type="button" data-retry>Try again</button>' : '<a class="btn btn--primary btn--sm" href="/signin.html">Sign in</a>') + '</div></section>';
    html += '<section class="card card--forest span-8" style="--i:1" aria-labelledby="h-att"><h2 class="t-h1" id="h-att">' + esc(items.length ? 'Needs you' : 'Nothing needs you') + '</h2>' +
      (items.length ? '<div class="tt-week th-wait">' + items.map(function (it) { return '<a class="tt-row ad-att" href="' + it.href + '"><span><b>' + esc(it.h) + '</b><small>' + esc(it.p) + '</small></span></a>'; }).join('') + '</div>'
        : '<p class="t-lead" style="margin-top:12px">No applications waiting, no old homework, and every automatic job ran on time.</p>') + '</section>' +
      '<section class="stage span-4" style="--i:2;background:var(--t-mint)" aria-hidden="true"><div class="bub ' + (items.length ? 'say' : 'think') + '">' + esc(items.length ? 'Paws on deck.' : 'Nap time. Probably.') + '</div>' + Cast.drawing('cat') + '</section>';
    var spend = (D.ai || []).reduce(function (n, r) { return n + Number(r.cost_usd || 0); }, 0), calls = (D.ai || []).reduce(function (n, r) { return n + Number(r.calls || 0); }, 0);
    var tiles = [
      [num(c.students), 'students', plural(c.paying, 'with an active subscription', 'with an active subscription'), '#/students'],
      [num(c.teachers), 'approved teachers', c.pending ? plural(c.pending, 'application waiting', 'applications waiting') : 'no applications waiting', '#/teachers'],
      [num(c.classes), 'open classes', plural(c.enrolled, 'student enrolled', 'students enrolled'), '#/classes'],
      [num(c.week), 'class dates', 'in the next seven days', '#/schedule'],
      [num(c.waiting), 'on the waiting list', 'across all classes', '#/waiting'],
      [new Intl.NumberFormat(locale, { style: 'currency', currency: 'USD' }).format(spend), 'AI spend this month', plural(calls, 'call', 'calls'), '#/ai']
    ];
    html += '<section class="card span-12" style="--i:3" aria-labelledby="h-num"><h2 class="t-h2" id="h-num">Alimun in numbers</h2><div class="ad-tiles">' + tiles.map(function (x) {
      return '<a class="ad-tile" href="' + x[3] + '"><span class="t-num">' + esc(x[0]) + '</span><b>' + esc(x[1]) + '</b><small>' + esc(x[2]) + '</small></a>';
    }).join('') + '</div></section>';
    html += '<section class="card span-7" style="--i:4" aria-labelledby="h-today"><h2 class="t-h2" id="h-today">Today’s classes</h2>' +
      (D.today.length ? '<div class="tt-week">' + D.today.map(function (s) {
        var co = s.cohorts || {}, at = new Date(s.scheduled_at).getTime(), open = s.status === 'live' || (Date.now() >= at - 15 * MIN && Date.now() <= at + 90 * MIN);
        return '<div class="tt-row tt-row--wide ad-today"><span class="tt-row__time">' + esc(fmt(s.scheduled_at, { hour: '2-digit', minute: '2-digit' })) + '</span><span><b>' + esc(className(co)) + '</b><small>' +
          esc((co.teacher_profiles ? co.teacher_profiles.full_name + ', ' : '') + plural(co.enrolled_count || 0, 'student', 'students') + ', ' + (s.status === 'live' ? 'live now' : s.status === 'completed' ? 'done' : 'scheduled')) + '</small></span>' +
          (open ? '<button class="btn btn--primary btn--sm" type="button" data-room="' + esc(s.id) + '">' + icon('play') + 'Open the room</button>' : '') + '</div>';
      }).join('') + '</div><p class="t-small ad-msg" data-roommsg aria-live="polite"></p>' : '<p class="t-body" style="margin-top:10px">No classes today.</p>') + '</section>';
    html += '<section class="card span-5" style="--i:5" aria-labelledby="h-jobs"><h2 class="t-h2" id="h-jobs">Automatic jobs</h2><div class="tt-week">' + jobsSummary().map(function (j) {
      var state = j.late ? (j.last ? 'Late: last ran ' + relative(new Date(j.last).getTime() - Date.now()) : 'Has not run this week') : j.lastOk === false ? 'Failed last time' : 'Ran ' + relative(new Date(j.last).getTime() - Date.now());
      return '<div class="tt-row ad-job' + (j.bad ? ' is-bad' : '') + '"><span><b>' + esc(j.name) + '</b><small>' + esc(state + (j.failed ? '. ' + plural(j.failed, 'failure', 'failures') + ' this week' : '') + '.') + '</small></span></div>';
    }).join('') + '</div></section>';
    return html + '</div>';
  }
  function soonView(r) {
    return '<div class="view__head"><div><h1 class="t-h1">' + esc(r.label) + '</h1><p class="t-lead">' + esc(r.text) + '</p></div></div>' +
      '<div class="soon rise"><div class="stage" style="--i:0;background:var(--t-sun)"><div class="bub think">On my list.</div>' + Cast.drawing('cat') + '</div>' +
      '<div class="card" style="--i:1"><h2 class="t-h2">Comes in part ' + r.part + ' of the admin pages</h2><p class="t-body">Each part is shown to you and approved before the next one is built.' +
      (mode === 'real' ? ' Until then this is on the current admin page.' : '') + '</p><div class="btn-row"><a class="btn btn--primary" href="#/overview">Back to the overview</a>' +
      (mode === 'real' ? '<a class="btn btn--quiet" href="/admin.html?old=1">Open the current admin page</a>' : '') + '</div></div></div>';
  }
  function deniedView() {
    var to = D.role === 'teacher' ? '/app/teach' : D.role === 'student' ? '/student-dashboard.html' : '/';
    return '<div class="soon rise"><div class="stage" style="--i:0;background:var(--t-coral)"><div class="bub think">Staff only, I’m afraid.</div>' + Cast.drawing('cat') + '</div>' +
      '<div class="card" style="--i:1"><h2 class="t-h2">This page is for Alimun’s administrators</h2><p class="t-body">Your account does not have access to it.</p><div class="btn-row"><a class="btn btn--primary" href="' + to + '">Go to your dashboard</a></div></div></div>';
  }

  /* Opening a class's video room as an admin: /api/join-session makes the admin the room's owner */
  function openRoom(btn) {
    var id = btn.getAttribute('data-room'), msg = app.querySelector('[data-roommsg]');
    if (mode !== 'real') { if (msg) msg.textContent = 'In the sample there is no real room.'; return; }
    var win = window.open('', '_blank');
    btn.disabled = true;
    window.AlimunData.token().then(function (tok) {
      return fetch('/api/join-session', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + tok }, body: JSON.stringify({ sessionId: id }) });
    }).then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error(j.error || r.status); return j; }); }).then(function (j) {
      var u = new URL(j.url);
      if (u.protocol !== 'https:' || !/\.daily\.co$/.test(u.hostname)) throw new Error('unexpected room address');
      if (j.token) u.searchParams.set('t', j.token);
      if (win) { win.opener = null; win.location.href = u.href; } else location.href = u.href;
      btn.disabled = false;
    }).catch(function (e) { if (win) win.close(); btn.disabled = false; if (msg) msg.textContent = 'The room did not open: ' + (e && e.message ? e.message : 'please try again') + '.'; });
  }

  /* ---------- Loader, sheet, routing ---------- */
  function showLoader(m, ms) { loadingScreen.querySelector('p').textContent = m || ''; loadingScreen.classList.remove('is-done'); loadingScreen.setAttribute('aria-hidden', 'false'); if (ms) setTimeout(hideLoader, ms); }
  function hideLoader() { loadingScreen.classList.add('is-done'); loadingScreen.setAttribute('aria-hidden', 'true'); }
  function setSheet(open) { document.body.classList.toggle('is-sheet-open', open); app.querySelector('[data-more]').setAttribute('aria-expanded', String(open)); if (open) { var a = sheet.querySelector('a'); if (a) a.focus(); } }
  function routeFromHash() { var id = (location.hash.match(/^#\/([a-z]+)/) || [])[1]; return byId[id] ? id : 'overview'; }
  var MODULES = { students: function () { return window.AlimunAdminStudents; }, teachers: function () { return window.AlimunAdminTeachers; },
    classes: function () { return window.AlimunAdminClasses; }, schedule: function () { return window.AlimunAdminSchedule; },
    waiting: function () { return window.AlimunAdminWaiting; }, messages: function () { return window.AlimunAdminMessages; } };
  function helpers() {
    return { esc: esc, fmt: fmt, num: num, cap: cap, plural: plural, relative: relative, className: className, icon: icon, Cast: Cast, loaderInner: loaderInner,
      mode: function () { return mode; }, rerender: function () { render(current, false); } };
  }
  function partsOf(id) { return location.hash.replace(new RegExp('^#\\/' + id + '\\/?'), '').split('/').filter(Boolean); }
  function render(id, animate) {
    var r = byId[id], mod = mode !== 'denied' && MODULES[id] ? MODULES[id]() : null;
    var html = mode === 'denied' ? deniedView() : id === 'overview' ? overviewView() : mod ? '' : soonView(r);
    var swap = function () {
      Object.keys(MODULES).forEach(function (k) { var m = MODULES[k](); if (m && m.reset) m.reset(); });
      view.innerHTML = html; view.classList.remove('is-leaving');
      document.title = r.label + ' – Alimun admin';
      top.querySelector('.top__title').textContent = r.label;
      if (mod) mod.mount(view, partsOf(id), helpers()).then(function (res) { if (current === id && res && res.title) document.title = res.title + ' – Alimun admin'; });
      app.querySelectorAll('[data-route]').forEach(function (a) { if (a.getAttribute('data-route') === id) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
      app.querySelector('[data-more]').classList.toggle('is-active', BAR.indexOf(id) === -1);
      if (animate) { window.scrollTo(0, 0); view.focus({ preventScroll: true }); }
    };
    if (animate && current) { view.classList.add('is-leaving'); setTimeout(swap, 150); } else swap();
    current = id;
  }

  /* ---------- Data ---------- */
  function sample() {
    var now = Date.now(), at = function (h) { var d = new Date(); d.setHours(h, h === 18 ? 30 : 0, 0, 0); return d.toISOString(); }, ago = function (m) { return new Date(now - m * MIN).toISOString(); };
    var jobs = [];
    for (var i = 0; i < 40; i++) { jobs.push({ job: 'db:complete-sessions', ran_at: ago(i * 15 + 3), ok: true }); jobs.push({ job: 'db:expire-waitlist-offers', ran_at: ago(i * 15 + 3), ok: true }); }
    jobs.push({ job: 'vercel:cron-create-rooms', ran_at: ago(9 * 60), ok: true }, { job: 'vercel:cron-expire-offers', ran_at: ago(8.5 * 60), ok: false });
    return { email: '', counts: { students: 214, paying: 87, teachers: 12, pending: 2, classes: 18, enrolled: 143, waiting: 9, week: 54 },
      applications: [{ id: 'x1', full_name: 'Léa Martin', languages: ['French'], created_at: ago(60 * 30) }, { id: 'x2', full_name: 'Tomás Ruiz', languages: ['Spanish'], created_at: ago(60 * 5) }],
      today: [
        { id: 's1', scheduled_at: at(9), status: 'completed', cohorts: { language: 'German', level: 'A2', tier: 'intensive', enrolled_count: 5, teacher_profiles: { full_name: 'Ana Weber' } } },
        { id: 's2', scheduled_at: new Date(now + 5 * MIN).toISOString(), status: 'scheduled', cohorts: { language: 'English', level: 'B2', tier: 'focused', enrolled_count: 14, teacher_profiles: { full_name: 'James Hall' } } },
        { id: 's3', scheduled_at: at(18), status: 'scheduled', cohorts: { language: 'Spanish', level: 'B1', tier: 'community', enrolled_count: 29, teacher_profiles: { full_name: 'Lucía Gómez' } } }
      ].sort(function (a, b) { return a.scheduled_at.localeCompare(b.scheduled_at); }),
      oldHomework: [{ id: 'h1', submitted_at: ago(60 * 24 * 9) }, { id: 'h2', submitted_at: ago(60 * 24 * 8) }],
      ai: [{ day: '', calls: 412, cost_usd: 3.84, failures: 2 }], jobs: jobs };
  }
  function loadData() {
    if (/[?&]sample=1/.test(location.search)) { mode = 'forced'; return Promise.resolve(sample()); }
    return window.AlimunData.adminOverview().then(function (d) {
      if (d && d.admin) { mode = 'real'; return d; }
      if (d && d.signedIn) { mode = 'denied'; return d; }
      mode = 'sample'; return sample();
    }, function (e) { console.warn('[Alimun] Admin data did not load', e && e.message); mode = 'error'; return sample(); });
  }
  function boot() {
    app = document.getElementById('app'); loadingScreen = document.getElementById('loading');
    var started = Date.now(), fonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    loadingScreen.querySelector('p').textContent = 'Opening the admin pages';
    Promise.all([loadData(), fonts]).then(function (r) {
      D = r[0]; renderShell(); render(routeFromHash(), false);
      setTimeout(hideLoader, Math.max(0, 700 - (Date.now() - started)));
    });
    window.addEventListener('hashchange', function () { if (!D) return; setSheet(false); var id = routeFromHash(); if (id !== current || MODULES[id]) render(id, true); });
    window.addEventListener('scroll', function () { if (top) top.classList.toggle('is-scrolled', window.scrollY > 8); }, { passive: true });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && D) setSheet(false); });
    app.addEventListener('click', function (e) {
      var el = e.target.closest('[data-more],[data-close],[data-room],[data-retry],[data-signout]');
      if (!el || el.disabled) return;
      if (el.hasAttribute('data-more')) setSheet(!document.body.classList.contains('is-sheet-open'));
      else if (el.hasAttribute('data-close')) setSheet(false);
      else if (el.hasAttribute('data-room')) openRoom(el);
      else if (el.hasAttribute('data-retry')) { showLoader('Opening the admin pages'); loadData().then(function (d) { D = d; current = null; renderShell(); render(routeFromHash(), false); hideLoader(); }); }
      else if (el.hasAttribute('data-signout')) { if (mode === 'real' || mode === 'denied') window.AlimunData.signOut().then(function () { location.href = '/'; }); else location.href = '/signin.html'; }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
