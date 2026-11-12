/* Alimun admin console (docs/DASHBOARD_PLAN.md, step 15, admin pages), page /app/admin. English only (owner, 26 Oct 2026).
   Redesigned 12 Nov 2026 (owner: "a corporate grade panel to see everything that happens inside the website"): a compact
   shell (css/admin.css, scoped to body.adm) with a search across students and teachers, counts beside the sections that
   need the admin, and an Overview that is the console's front page: figures with their last 30 days, a live feed of
   everything that happened (accounts, payments, classes, homework, the tutor, messages, failures), what needs the admin,
   today's classes, the automatic jobs, tutor use and the latest accounts.
   Only an admin (app_metadata.role, checked again by the database's is_admin()) sees real data; signed out, or with
   ?sample=1, a sample; any other account is told the page is not for them.
   Sections: js/app/admin-people.js (students, teachers), admin-activity.js, admin-campaigns.js, admin-classes.js and
   admin-teaching.js (classes, schedule, waiting list, messages), admin-matching.js (engine js/match.js),
   admin-figures.js, admin-system.js (payouts, AI spend, system). */
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
  function ago(d) { return relative(new Date(d).getTime() - Date.now()); }
  function money(minor, cur) {
    try { return new Intl.NumberFormat(locale, { style: 'currency', currency: (cur || 'EUR').toUpperCase() }).format((minor || 0) / 100); } catch (e) { return ((minor || 0) / 100).toFixed(2) + ' ' + (cur || ''); }
  }
  function cut(s, n) { s = String(s || '').replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 1) + '…' : s; }
  var TIERS = { community: 'Community', focused: 'Focused', intensive: 'Intensive', private: '1 on 1', onetoone: '1 on 1', daily: 'Daily' };
  var PLAN_NAMES = { free: 'Free', community: 'Community', focused: 'Focused', intensive: 'Intensive', private: '1 on 1', onetoone: '1 on 1', daily: 'Daily', waitlist: 'Waiting list', founding_member: 'Founding member', app: 'App only', open: 'Open class', pack: 'Level pack', exam: 'Exam pack' };
  function planName(t) { return PLAN_NAMES[t] || cap(String(t || '').replace(/_/g, ' ')); }
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
    activity: '<path d="M3 12h4l3-7 4 14 3-7h4"/>',
    matching: '<circle cx="8" cy="8" r="3"/><circle cx="16" cy="16" r="3"/><circle cx="16" cy="8" r="3"/><path d="M10.5 9.5l3 5M11 8h2"/>',
    campaigns: '<path d="M4 10v4a1 1 0 0 0 1 1h2l5 4V5L7 9H5a1 1 0 0 0-1 1z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11"/>',
    system: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/>',
    more: '<circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    chev: '<path d="m9 6 6 6-6 6"/>',
    back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    play: '<path d="M8 5.5v13l10.5-6.5z"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
    refresh: '<path d="M20 12a8 8 0 1 1-2.3-5.6M20 4v4.5h-4.5"/>',
    user: '<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c.8-3.6 3.6-5.6 7-5.6s6.2 2 7 5.6"/>',
    card: '<rect x="3" y="6" width="18" height="12.5" rx="2.5"/><path d="M3 10.5h18"/>',
    book: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5zM20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5a1.5 1.5 0 0 1 1.5 1.5z"/>',
    bot: '<rect x="4.5" y="8" width="15" height="11" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01"/>',
    alert: '<path d="M12 4 2.8 19.5h18.4z"/><path d="M12 10v4.5M12 17.2h.01"/>',
    eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/>',
    mail: '<rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="m4 7 8 6 8-6"/>'
  };
  function icon(name) { return '<svg class="i-' + name + '" viewBox="0 0 24 24" ' + P + ' aria-hidden="true" focusable="false">' + (ICONS[name] || '') + '</svg>'; }
  function loaderInner() {
    return '<div class="whirl whirl--outer"></div><div class="whirl whirl--inner"></div><div class="spark"></div>' +
      '<div class="mark"><svg viewBox="290 360 445 445" aria-hidden="true">' + Cast.logoPath +
      '<circle fill="#d5af33" cx="453" cy="605" r="19"/><circle fill="#d5af33" cx="574" cy="605" r="19"/></svg></div>';
  }

  /* ---------- Sections ---------- */
  var ROUTES = [
    { id: 'overview', label: 'Overview', icon: 'home', group: 'Console' },
    { id: 'activity', label: 'Activity', icon: 'activity', group: 'Console', text: 'Who is active, who is slipping away, where new students stop, and countries.' },
    { id: 'students', label: 'Students', icon: 'students', group: 'People', part: 2, text: 'Every student: search, their file, plan, class and progress, and view their dashboard as they see it.' },
    { id: 'teachers', label: 'Teachers', icon: 'teachers', group: 'People', part: 2, text: 'Applications to approve or reject, and each teacher’s file, classes and availability.' },
    { id: 'campaigns', label: 'Campaigns', icon: 'campaigns', group: 'People', text: 'News and offers by email and in the dashboard bell, to people who asked for them.' },
    { id: 'matching', label: 'Matching', icon: 'matching', group: 'Teaching', text: 'Every learner’s level, focus and time zone, the groups they could form, and who is closest to buying.' },
    { id: 'classes', label: 'Classes', icon: 'classes', group: 'Teaching', part: 3, text: 'Creating classes for teachers, rosters, moving students, closing and reopening.' },
    { id: 'schedule', label: 'Schedule', icon: 'schedule', group: 'Teaching', part: 3, text: 'Every class date: cancel or move one, with students and teacher told.' },
    { id: 'waiting', label: 'Waiting list', icon: 'waiting', group: 'Teaching', part: 3, text: 'Who is waiting for which class, and the places offered.' },
    { id: 'messages', label: 'Messages', icon: 'messages', group: 'Teaching', part: 3, text: 'Read conversations and hide a message if needed.' },
    { id: 'figures', label: 'Figures', icon: 'card', group: 'Money and system', part: 4, text: 'Cash, revenue, deferred revenue, reserves, room margins, refunds, the cost to win a customer, AI against revenue.' },
    { id: 'payouts', label: 'Payouts', icon: 'payouts', group: 'Money and system', part: 4, text: 'Record what teachers are paid, beside the classes they taught.' },
    { id: 'ai', label: 'AI spend', icon: 'ai', group: 'Money and system', part: 4, text: 'Calls and cost by day, by feature and by person.' },
    { id: 'system', label: 'System', icon: 'system', group: 'Money and system', part: 4, text: 'Reviews, app settings and the automatic jobs.' }
  ];
  var byId = {}; ROUTES.forEach(function (r) { byId[r.id] = r; });
  var BAR = ['overview', 'students', 'teachers', 'classes'];
  var GROUPS = ['Console', 'People', 'Teaching', 'Money and system'];

  var app, view, top, sheet, loadingScreen, D = null, current = null, loadedAt = 0;
  var mode = 'sample'; /* 'real', 'sample' (signed out), 'forced' (?sample=1), 'denied', 'error' */
  var feedFilter = 'all';

  /* Counts shown beside a section in the menu: things waiting for the admin there */
  function navCounts() {
    if (!D || !D.counts) return {};
    var c = D.counts, jobsBad = jobsSummary().filter(function (j) { return j.bad; }).length;
    return { teachers: c.pending || 0, waiting: c.waiting || 0, system: jobsBad };
  }
  function navLinks() {
    var n = navCounts();
    return GROUPS.map(function (g) {
      return '<div class="nav__group"><div class="nav__label">' + esc(g) + '</div>' + ROUTES.filter(function (r) { return r.group === g; }).map(function (r) {
        return '<a href="#/' + r.id + '" data-route="' + r.id + '">' + icon(r.icon) + '<span>' + esc(r.label) + '</span>' + (n[r.id] ? '<span class="nav__n" aria-label="' + esc(n[r.id] + ' waiting') + '">' + esc(num(n[r.id])) + '</span>' : '') + '</a>';
      }).join('') + '</div>';
    }).join('');
  }
  function syncLabel() {
    if (mode === 'real') return 'Live, updated ' + fmt(loadedAt, { hour: '2-digit', minute: '2-digit' });
    return mode === 'error' ? 'Real data did not load' : 'Sample data';
  }
  function renderShell() {
    var who = D && D.email ? D.email : 'Sample admin';
    document.body.classList.add('adm');
    app.innerHTML = '<a class="skip" href="#view">Skip to the content</a>' +
      '<aside class="side" aria-label="Main"><a class="brand" href="#/overview" aria-label="Overview">' + Cast.book('idle') + Cast.wordmark() + '</a>' +
        '<nav class="nav" aria-label="Sections">' + navLinks() + '</nav>' +
        '<div class="side__foot"><div class="adm-who"><b>Admin console</b>' + esc(who) + '</div></div></aside>' +
      '<div class="main"><header class="top"><a class="top__brand" href="#/overview" aria-label="Overview">' + Cast.book('idle') + Cast.wordmark() + '</a>' +
        '<p class="top__title"></p>' +
        '<div class="adm-search" role="search"><label class="sr-only" for="adm-q" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">Search students and teachers</label>' + icon('search') +
          '<input id="adm-q" type="search" autocomplete="off" spellcheck="false" placeholder="Search students and teachers by name or email" aria-controls="adm-results" aria-expanded="false"><kbd>/</kbd>' +
          '<div class="adm-results" id="adm-results" role="listbox" hidden></div></div>' +
        '<div class="top__actions"><span class="adm-sync' + (mode === 'real' ? '' : ' is-sample') + '" data-sync><i></i><span>' + esc(syncLabel()) + '</span></span>' +
          (mode === 'real' ? '<button class="btn btn--quiet btn--sm" type="button" data-reload title="Load the latest data">' + icon('refresh') + 'Refresh</button>' : '') +
          '<button class="btn btn--quiet btn--sm" type="button" data-signout>Sign out</button></div></header>' +
        '<main class="view" id="view" tabindex="-1"></main></div>' +
      '<nav class="bar" aria-label="Sections">' + BAR.map(function (id) { var r = byId[id]; return '<a href="#/' + id + '" data-route="' + id + '">' + icon(r.icon) + '<span>' + esc(r.label) + '</span></a>'; }).join('') +
        '<button type="button" data-more aria-haspopup="dialog" aria-expanded="false">' + icon('more') + '<span>More</span></button></nav>' +
      '<div class="sheet-scrim" data-close></div><div class="sheet" role="dialog" aria-modal="true" aria-label="More sections"><div class="sheet__grip"></div><nav class="nav">' + navLinks() + '</nav></div>';
    view = app.querySelector('.view'); top = app.querySelector('.top'); sheet = app.querySelector('.sheet');
    wireSearch();
  }

  /* ---------- Search across students and teachers ---------- */
  function people() {
    var C = D && D.console || {}, E = D && D.emails || {}, out = [];
    (C.students || []).forEach(function (s) { out.push({ name: s.full_name || 'Student', email: E[s.user_id] || '', sub: [[s.language, s.level].filter(Boolean).join(' '), planName(s.tier)].filter(Boolean).join(', '), href: '#/students/' + s.id, kind: 'Students' }); });
    (C.teachers || []).forEach(function (t) { out.push({ name: t.full_name || 'Teacher', email: E[t.user_id] || '', sub: cap(t.status || '') + ((t.languages || []).length ? ', ' + t.languages.join(', ') : ''), href: '#/teachers/' + t.id, kind: 'Teachers' }); });
    return out;
  }
  function wireSearch() {
    var input = app.querySelector('#adm-q'), box = app.querySelector('#adm-results'), on = -1;
    function close() { box.hidden = true; input.setAttribute('aria-expanded', 'false'); on = -1; }
    function draw() {
      var q = input.value.trim().toLowerCase();
      if (!q) { close(); return; }
      var hits = people().filter(function (p) { return (p.name + ' ' + p.email).toLowerCase().indexOf(q) !== -1; }).slice(0, 12);
      var html = '';
      ['Students', 'Teachers'].forEach(function (k) {
        var h = hits.filter(function (p) { return p.kind === k; });
        if (h.length) html += '<div class="adm-results__h">' + k + '</div>' + h.map(function (p) { return '<a role="option" href="' + esc(p.href) + '"><span>' + esc(p.name) + (p.email ? ' <small>' + esc(p.email) + '</small>' : '') + '</span><small>' + esc(p.sub) + '</small></a>'; }).join('');
      });
      box.innerHTML = html || '<p>Nobody matches “' + esc(input.value.trim()) + '”.</p>';
      box.hidden = false; input.setAttribute('aria-expanded', 'true'); on = -1;
    }
    input.addEventListener('input', draw);
    input.addEventListener('focus', function () { if (input.value.trim()) draw(); loadEmails(); });
    input.addEventListener('keydown', function (e) {
      var links = box.querySelectorAll('a');
      if (e.key === 'Escape') { input.value = ''; close(); input.blur(); }
      else if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && links.length) {
        e.preventDefault(); on = (on + (e.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length;
        links.forEach(function (a, i) { a.classList.toggle('is-on', i === on); });
      } else if (e.key === 'Enter' && links.length) { e.preventDefault(); location.hash = links[Math.max(on, 0)].getAttribute('href'); input.value = ''; close(); input.blur(); }
    });
    box.addEventListener('click', function () { input.value = ''; close(); });
    document.addEventListener('click', function (e) { if (!e.target.closest('.adm-search')) close(); });
  }
  var emailsAsked = false;
  function loadEmails() {
    if (emailsAsked || mode !== 'real') return;
    emailsAsked = true;
    var C = D.console || {}, ids = [];
    (C.students || []).concat(C.teachers || []).forEach(function (p) { if (p.user_id && ids.indexOf(p.user_id) === -1) ids.push(p.user_id); });
    if (!ids.length) return;
    window.AlimunData.adminEmails(ids.slice(0, 500)).then(function (e) { D.emails = e || {}; var i = app.querySelector('#adm-q'); if (i && i.value) i.dispatchEvent(new Event('input')); if (current === 'overview') render('overview', false); }, function () { emailsAsked = false; });
  }

  /* ---------- Overview ---------- */
  /* Each automatic job and how often it should run; one that has not run for twice that long is late */
  var JOBS = {
    'db:complete-sessions': { name: 'Mark finished class dates as done', every: 15 * MIN },
    'db:expire-waitlist-offers': { name: 'Expire unanswered waiting-list offers', every: 15 * MIN },
    'vercel:cron-create-rooms': { name: 'Prepare tomorrow’s video rooms', every: DAY },
    'vercel:cron-expire-offers': { name: 'Expire offers (daily backstop)', every: DAY },
    'vercel:cron-reminders': { name: 'Class reminders by email', every: DAY },
    'vercel:cron-billing': { name: 'Pause what stayed unpaid for 3 days', every: DAY, since: '2026-11-12T04:38:00Z' },
    'vercel:cron-rooms': { name: 'Rooms: publish, open or cancel, start and charge', every: DAY, since: '2026-11-12T04:38:00Z' },
    'vercel:cron-finance': { name: 'Finance: founding notices, exchange rates, the month’s figures', every: DAY, since: '2026-11-12T04:38:00Z' },
    'db:tutor-purge': { name: 'Delete old tutor recordings', every: DAY },
    /* Not on a schedule: written when something happens, so never late, only failed */
    'daily:join-session': { name: 'Opening a class video room (Daily)', every: 0 }
  };
  function jobName(k) { return (JOBS[k] || {}).name || k; }
  function jobsSummary() {
    var by = {};
    (D.jobs || []).forEach(function (r) {
      var j = by[r.job] = by[r.job] || { job: r.job, last: null, lastOk: null, failed: 0, runs: 0 };
      j.runs++; if (!r.ok) j.failed++;
      if (!j.last) { j.last = r.ran_at; j.lastOk = r.ok; }
    });
    Object.keys(JOBS).forEach(function (k) { if (!by[k]) by[k] = { job: k, last: null, lastOk: null, failed: 0, runs: 0 }; });
    return Object.keys(by).map(function (k) {
      var j = by[k], spec = JOBS[k] || {}, every = spec.every === 0 ? 0 : spec.every || DAY, from = spec.since ? Date.parse(spec.since) : 0;
      j.name = jobName(k); j.event = every === 0;
      /* A job added recently is only late once it has missed two of its runs since it was added */
      j.late = !j.event && Date.now() - Math.max(j.last ? new Date(j.last).getTime() : 0, from) > 2 * every + 10 * MIN;
      if (!j.event && !j.last && from && !j.late) j.waitingFirst = true;
      j.bad = j.late || j.lastOk === false;
      return j;
    }).sort(function (a, b) { return (b.bad ? 1 : 0) - (a.bad ? 1 : 0) || a.name.localeCompare(b.name); });
  }

  /* Who is who: student profile id, teacher profile id and sign-in account id to a name and a link */
  function directory() {
    var C = D.console || {}, s = {}, t = {}, u = {};
    (C.students || []).forEach(function (p) { s[p.id] = p; if (p.user_id) u[p.user_id] = { name: p.full_name || 'Student', href: '#/students/' + p.id, role: 'student', p: p }; });
    (C.teachers || []).forEach(function (p) { t[p.id] = p; if (p.user_id) u[p.user_id] = { name: p.full_name || 'Teacher', href: '#/teachers/' + p.id, role: 'teacher', p: p }; });
    return { s: s, t: t, u: u };
  }
  function dayKey(d) { var x = new Date(d); return x.getFullYear() + '-' + (x.getMonth() + 1) + '-' + x.getDate(); }
  /* The last n days, oldest first, each with its key, for counting things per day */
  function lastDays(n) { var out = []; for (var i = n - 1; i >= 0; i--) out.push(dayKey(Date.now() - i * DAY)); return out; }
  function series(list, at, n, val) {
    var days = lastDays(n), idx = {}, v = days.map(function () { return 0; });
    days.forEach(function (k, i) { idx[k] = i; });
    list.forEach(function (x) { var t = x[at]; if (!t) return; var i = idx[dayKey(t)]; if (i != null) v[i] += val ? val(x) : 1; });
    return v;
  }
  function distinctSeries(list, at, key, n) {
    var days = lastDays(n), idx = {}, sets = days.map(function () { return {}; });
    days.forEach(function (k, i) { idx[k] = i; });
    list.forEach(function (x) { var i = idx[dayKey(x[at])]; if (i != null && x[key]) sets[i][x[key]] = 1; });
    return sets.map(function (o) { return Object.keys(o).length; });
  }
  function spark(v) {
    var max = Math.max.apply(null, v.concat([1])), w = 100, h = 26, step = w / Math.max(1, v.length - 1);
    var pts = v.map(function (y, i) { return (i * step).toFixed(1) + ',' + (h - 2 - (y / max) * (h - 4)).toFixed(1); }).join(' ');
    return '<svg class="kspark" viewBox="0 0 100 26" preserveAspectRatio="none" aria-hidden="true"><polyline points="0,26 ' + pts + ' 100,26" fill="rgba(206,255,101,.45)" stroke="none"/><polyline points="' + pts + '" fill="none" stroke="#1a443c" stroke-width="1.6" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></svg>';
  }
  function sum(v) { return v.reduce(function (a, b) { return a + b; }, 0); }

  /* Everything that happened, newest first. Each item: when, group (for the filter), icon, sentence, detail, link. */
  var FEED_GROUPS = [['all', 'Everything'], ['people', 'People'], ['money', 'Money'], ['learning', 'Learning'], ['tutor', 'Tutor'], ['messages', 'Messages'], ['visits', 'Visits'], ['problems', 'Problems']];
  function buildFeed() {
    var C = D.console || {}, dir = directory(), E = D.emails || {}, items = [], since = Date.now() - 14 * DAY;
    function sName(id) { var p = dir.s[id]; return p ? (p.full_name || 'A student') : 'A student'; }
    function sHref(id) { return dir.s[id] ? '#/students/' + id : '#/students'; }
    function uName(id) { var p = dir.u[id]; return p ? p.name : 'Someone'; }
    function uHref(id) { var p = dir.u[id]; return p ? p.href : null; }
    function add(at, g, ic, html, sub, href) { if (at && new Date(at).getTime() >= since) items.push({ at: at, g: g, ic: ic, html: html, sub: sub || '', href: href || null }); }
    var b = function (s) { return '<b>' + esc(s) + '</b>'; };
    (C.students || []).forEach(function (s) {
      add(s.created_at, 'people', 'user', b(s.full_name || 'Someone') + ' created a student account', [E[s.user_id], [s.language, s.level].filter(Boolean).join(' '), s.country].filter(Boolean).join(', '), '#/students/' + s.id);
    });
    (C.teachers || []).forEach(function (t) {
      add(t.created_at, 'people', 'teachers', b(t.full_name || 'Someone') + (t.status === 'pending' ? ' applied to teach' : ' joined as a teacher'), [(t.languages || []).join(', '), cap(t.status)].filter(Boolean).join(', '), '#/teachers/' + t.id);
    });
    (C.signups || []).forEach(function (e) { add(e.created_at, 'people', 'mail', b(e.email) + ' signed up for news', [e.source, e.country].filter(Boolean).join(', '), null); });
    (C.poll || []).forEach(function (p) { add(p.created_at, 'people', 'user', b(sName(p.student_id)) + ' answered the welcome poll', p.seconds_added ? Math.round(p.seconds_added / 60) + ' tutor minutes added' : '', '#/activity'); });
    (C.money || []).forEach(function (m) {
      var who = uName(m.user_id), what = cap(String(m.product_key || 'a product').replace(/_/g, ' ')) + (m.variant ? ' (' + m.variant + ')' : '');
      add(m.created_at, 'money', 'card', b(who) + (m.source === 'admin' ? ' was given ' : ' bought ') + esc(what), [m.amount_paid ? money(m.amount_paid, m.currency) : (m.source === 'admin' ? 'Given by an admin' : ''), cap(m.status)].filter(Boolean).join(', '), uHref(m.user_id));
      if (m.payment_failed_at) add(m.payment_failed_at, 'problems', 'alert', 'Payment failed for ' + b(who), what, uHref(m.user_id));
    });
    (C.ledger || []).forEach(function (l) {
      if (l.reason === 'free_grant') return;
      add(l.created_at, l.reason === 'purchase' ? 'money' : 'tutor', 'bot', b(sName(l.student_id)) + ' got ' + plural(Math.round(l.seconds / 60), 'tutor minute', 'tutor minutes'), [l.reason === 'admin' ? 'Added by an admin' : cap(String(l.reason || '').replace(/_/g, ' ')), l.note].filter(Boolean).join(': '), sHref(l.student_id));
    });
    (C.tutor || []).forEach(function (t) {
      add(t.started_at, 'tutor', 'bot', b(sName(t.student_id)) + ' had a ' + Math.max(1, Math.round((t.seconds_used || 0) / 60)) + '-minute ' + (t.mode === 'live' ? 'voice' : 'written') + ' tutor session',
        [[t.language, t.level].filter(Boolean).join(' '), plural(t.turns || 0, 'turn', 'turns'), t.title].filter(Boolean).join(', '), sHref(t.student_id));
    });
    (C.enrol || []).forEach(function (e) {
      var cls = e.cohorts ? className(e.cohorts) : 'a class';
      add(e.enrolled_at, 'learning', 'classes', b(sName(e.student_id)) + ' joined ' + esc(cls), cap(e.status), sHref(e.student_id));
      if (e.cancelled_at) add(e.cancelled_at, 'learning', 'classes', b(sName(e.student_id)) + ' left ' + esc(cls), '', sHref(e.student_id));
    });
    (C.waitlist || []).forEach(function (w) {
      var cls = w.cohorts ? className(w.cohorts) : 'a class';
      add(w.added_at, 'learning', 'waiting', b(sName(w.student_id)) + ' joined the waiting list for ' + esc(cls), '', '#/waiting');
      if (w.offered_at) add(w.offered_at, 'learning', 'waiting', b(sName(w.student_id)) + ' was offered a place in ' + esc(cls), '', '#/waiting');
    });
    (C.attend || []).forEach(function (a) { add(a.joined_at, 'learning', 'play', b(sName(a.student_id)) + ' joined a live class', a.duration_minutes ? plural(a.duration_minutes, 'minute', 'minutes') : '', sHref(a.student_id)); });
    (C.homework || []).forEach(function (h) {
      var title = h.assignments && h.assignments.title ? '“' + cut(h.assignments.title, 60) + '”' : 'homework';
      add(h.submitted_at, 'learning', 'book', b(sName(h.student_id)) + ' handed in ' + esc(title), cap(h.status), sHref(h.student_id));
      if (h.graded_at) add(h.graded_at, 'learning', 'book', 'Homework marked for ' + b(sName(h.student_id)), esc(title), sHref(h.student_id));
    });
    (C.oto || []).forEach(function (o) { add(o.created_at, 'learning', 'schedule', b(sName(o.student_id)) + ' booked a 1 on 1', o.scheduled_at ? 'For ' + fmt(o.scheduled_at, { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : cap(o.status), sHref(o.student_id)); });
    (C.messages || []).forEach(function (m) { add(m.created_at, 'messages', 'messages', b(m.sender_name || cap(m.sender_role) || 'Someone') + ' wrote a message' + (m.hidden_at ? ' (hidden)' : ''), cut(m.body, 110), '#/messages'); });
    /* Visits: the first dashboard visit of each person each day */
    var seen = {};
    (C.events || []).slice().reverse().forEach(function (e) {
      if (e.event !== 'open_dashboard' || !e.user_id) return;
      var k = e.user_id + dayKey(e.created_at); if (seen[k]) return; seen[k] = 1;
      var who = dir.u[e.user_id];
      add(e.created_at, 'visits', 'eye', b(who ? who.name : 'Someone') + ' opened ' + (who && who.role === 'teacher' ? 'the teacher dashboard' : 'the dashboard'), e.page || '', who ? who.href : null);
    });
    (C.withdraw || []).forEach(function (w) { add(w.received_at, 'problems', 'alert', 'Withdrawal request from ' + b(w.full_name || 'someone'), [w.contract_label, cap(w.status)].filter(Boolean).join(', '), '#/system'); });
    (C.aiFail || []).forEach(function (a) { add(a.created_at, 'problems', 'alert', 'AI call failed: ' + b(String(a.action || 'unknown').replace(/_/g, ' ')), [a.provider, cut(a.error, 90), a.user_id ? uName(a.user_id) : ''].filter(Boolean).join(', '), '#/ai'); });
    (C.cronFail || []).forEach(function (j) { add(j.ran_at, 'problems', 'alert', 'Automatic job failed: ' + b(jobName(j.job)), cut(typeof j.result === 'string' ? j.result : JSON.stringify(j.result || ''), 100), '#/system'); });
    (C.hooks || []).forEach(function (h) { if (/^(processed|ok|success|ignored|skipped|duplicate)$/i.test(h.status || '')) return; add(h.created_at, 'problems', 'alert', 'Stripe event not processed: ' + b(h.event_type || 'unknown'), cut(h.error_message || h.status, 100), '#/figures'); });
    (C.abuse || []).forEach(function (a) { add(a.at, 'problems', 'alert', 'Blocked: ' + b(String(a.kind || '').replace(/_/g, ' ')), a.user_id ? uName(a.user_id) : '', a.user_id ? uHref(a.user_id) : null); });
    return items.sort(function (a, b2) { return String(b2.at).localeCompare(String(a.at)); });
  }
  var FEED_IC = { money: 'k-money', problems: 'k-bad', tutor: 'k-ai', people: 'k-people' };
  function feedHtml(items) {
    var list = items.filter(function (i) { return feedFilter === 'all' ? i.g !== 'visits' : i.g === feedFilter; }).slice(0, 200);
    if (!list.length) return '<p class="feed__empty">Nothing in the last 14 days.</p>';
    var last = '', html = '';
    list.forEach(function (i) {
      var d = new Date(i.at), k = dayKey(d);
      if (k !== last) { last = k; html += '<div class="feed__day">' + esc(k === dayKey(Date.now()) ? 'Today' : k === dayKey(Date.now() - DAY) ? 'Yesterday' : fmt(d, { weekday: 'long', day: 'numeric', month: 'long' })) + '</div>'; }
      var inner = '<span class="feed__t">' + esc(fmt(d, { hour: '2-digit', minute: '2-digit' })) + '</span><span class="feed__ic ' + (FEED_IC[i.g] || '') + '">' + icon(i.ic) + '</span><span class="feed__x">' + i.html + (i.sub ? '<small>' + esc(i.sub) + '</small>' : '') + '</span>';
      html += i.href ? '<a class="feed__it" href="' + esc(i.href) + '">' + inner + '</a>' : '<div class="feed__it">' + inner + '</div>';
    });
    return html;
  }

  function attention(feed) {
    var items = [], c = D.counts, jobs = jobsSummary().filter(function (j) { return j.bad; }), C = D.console || {};
    if (c.pending) items.push({ bad: false, href: '#/teachers', h: plural(c.pending, 'teacher application', 'teacher applications') + ' waiting',
      p: 'Oldest: ' + D.applications[0].full_name + ', ' + ago(D.applications[0].created_at) + '.' });
    if (D.oldHomework.length) items.push({ bad: false, href: '#/teachers', h: plural(D.oldHomework.length, 'piece', 'pieces') + ' of homework unmarked for over a week',
      p: 'Handed in ' + ago(D.oldHomework.map(function (x) { return x.submitted_at; }).sort()[0]) + ' at the earliest.' });
    var wd = (C.withdraw || []).filter(function (w) { return !/handled|done|closed/i.test(w.status || ''); });
    if (wd.length) items.push({ bad: true, href: '#/system', h: plural(wd.length, 'withdrawal request', 'withdrawal requests') + ' to handle', p: 'Latest from ' + (wd[0].full_name || 'someone') + ', ' + ago(wd[0].received_at) + '.' });
    var payFail = (C.money || []).filter(function (m) { return m.payment_failed_at && m.status !== 'active'; });
    if (payFail.length) items.push({ bad: true, href: '#/figures', h: plural(payFail.length, 'failed payment', 'failed payments'), p: 'In the last 30 days.' });
    if (jobs.length) items.push({ bad: true, href: '#/system', h: plural(jobs.length, 'automatic job', 'automatic jobs') + ' not running well',
      p: jobs.map(function (j) { return j.name + (j.late ? (j.last ? ': last ran ' + ago(j.last) : ': has not run this week') : ': failed last time'); }).join('. ') + '.' });
    var aiFail = (C.aiFail || []).filter(function (a) { return Date.now() - new Date(a.created_at).getTime() < DAY; });
    if (aiFail.length) items.push({ bad: aiFail.length > 5, href: '#/ai', h: plural(aiFail.length, 'AI call', 'AI calls') + ' failed in the last 24 hours', p: 'Latest: ' + String(aiFail[0].action || '').replace(/_/g, ' ') + ', ' + ago(aiFail[0].created_at) + '.' });
    if (D.failed && D.failed.length) items.push({ bad: true, href: '#/system', h: 'Part of the console did not load', p: 'Not readable: ' + D.failed.join(', ') + '.' });
    return items;
  }

  function overviewView() {
    var c = D.counts, C = D.console || {}, me = D.userId, dir = directory(), items = attention(), feed = buildFeed(), N = 30;
    var html = '<div class="view__head"><div><h1 class="t-h1">Overview</h1><p class="t-lead">' + esc(cap(fmt(Date.now(), { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }))) +
      '. Figures cover the last 30 days unless they say otherwise.</p></div></div>';
    if (mode !== 'real') html += '<div class="sample-bar" role="note"><b>Sample data.</b><span>' + esc(mode === 'forced' ? 'You asked for the sample.' : mode === 'error' ? 'The real data did not load.' : 'Sign in with an admin account to see Alimun’s real data.') + '</span>' +
      (mode === 'forced' ? '<a class="btn btn--primary btn--sm" href="' + location.pathname + location.hash + '">Show the real data</a>' : mode === 'error' ? '<button class="btn btn--primary btn--sm" type="button" data-retry>Try again</button>' : '<a class="btn btn--primary btn--sm" href="/signin.html?next=/app/admin">Sign in</a>') + '</div>';

    /* Figures */
    var students = C.students || [], myStudent = students.filter(function (s) { return s.user_id === me; }).map(function (s) { return s.id; });
    var signupS = series(students, 'created_at', N), new7 = sum(signupS.slice(-7)), newPrev7 = sum(signupS.slice(-14, -7));
    var events = (C.events || []).filter(function (e) { return e.user_id && e.user_id !== me; });
    var activeS = distinctSeries(events, 'created_at', 'user_id', N);
    var active7 = {}; events.forEach(function (e) { if (Date.now() - new Date(e.created_at).getTime() < 7 * DAY) active7[e.user_id] = 1; });
    var tutor = (C.tutor || []).filter(function (t) { return myStudent.indexOf(t.student_id) === -1; });
    var tutorS = series(tutor, 'started_at', N, function (t) { return (t.seconds_used || 0) / 60; });
    var tutorLearners = {}; tutor.forEach(function (t) { tutorLearners[t.student_id] = 1; });
    var paid = (C.money || []).filter(function (m) { return m.source !== 'admin' && m.amount_paid > 0; }), byCur = {};
    paid.forEach(function (m) { var k = (m.currency || 'eur').toLowerCase(); byCur[k] = (byCur[k] || 0) + m.amount_paid; });
    var paidTxt = Object.keys(byCur).length ? Object.keys(byCur).map(function (k) { return money(byCur[k], k); }).join(' + ') : money(0, 'eur');
    var payers = {}; students.forEach(function (s) { if (s.stripe_subscription_status === 'active' && s.user_id) payers[s.user_id] = 1; }); (C.paidNow || []).forEach(function (e) { if (e.user_id) payers[e.user_id] = 1; });
    var payingNow = Object.keys(payers).length, waitTier = students.filter(function (s) { return s.tier === 'waitlist'; }).length, interest = {};
    (C.interest || []).forEach(function (r) { if (r.user_id) interest[r.user_id] = 1; }); interest = Object.keys(interest).length;
    var spend = (D.ai || []).reduce(function (n, r) { return n + Number(r.cost_usd || 0); }, 0), calls = (D.ai || []).reduce(function (n, r) { return n + Number(r.calls || 0); }, 0);
    var trend = function (a, b2) { if (!a && !b2) return ''; var d = a - b2; return '<b class="' + (d < 0 ? 'is-down' : '') + '">' + (d >= 0 ? '+' : '−') + num(Math.abs(d)) + '</b> on the week before'; };
    var kpis = [
      { l: 'Students', v: num(c.students), s: '<b>+' + num(new7) + '</b> this week' + (newPrev7 || new7 ? ', ' + num(newPrev7) + ' the week before' : ''), sp: signupS, href: '#/students' },
      { l: 'Active this week', v: num(Object.keys(active7).length), s: 'people who used a dashboard', sp: activeS, href: '#/activity' },
      { l: 'Paying', v: num(payingNow), s: 'subscriptions and purchases, trials left out', href: '#/students' },
      { l: 'Paid in 30 days', v: paidTxt, s: plural(paid.length, 'payment', 'payments'), href: '#/figures', small: true },
      { l: 'Tutor minutes', v: num(Math.round(sum(tutorS))), s: plural(Object.keys(tutorLearners).length, 'learner', 'learners') + ', ' + plural(tutor.length, 'session', 'sessions') + (myStudent.length ? ', you left out' : ''), sp: tutorS, href: '#/ai' },
      { l: 'Open classes', v: num(c.classes), s: plural(c.enrolled, 'student', 'students') + ' enrolled, ' + num(c.week) + ' dates this week', href: '#/classes' },
      { l: 'Waiting', v: num(c.waiting + waitTier + interest), s: num(c.waiting) + ' for a class, ' + num(waitTier) + ' on the waiting-list plan, ' + num(interest) + ' asked for a room', href: '#/matching' },
      { l: 'AI spend this month', v: new Intl.NumberFormat(locale, { style: 'currency', currency: 'USD' }).format(spend), s: plural(calls, 'call', 'calls'), href: '#/ai', small: true }
    ];
    html += '<div class="kpis rise" style="--i:0">' + kpis.map(function (k) {
      return '<a class="kpi" href="' + k.href + '"><span class="kpi__l">' + esc(k.l) + '</span><span class="kpi__v"' + (k.small && String(k.v).length > 9 ? ' style="font-size:26px"' : '') + '>' + esc(k.v) + '</span><span class="kpi__s">' + k.s + '</span>' + (k.sp ? spark(k.sp) : '') + '</a>';
    }).join('') + '</div>';
    void trend;

    /* Feed beside what needs the admin, today and the jobs */
    html += '<div class="grid rise" style="margin-top:16px">';
    html += '<section class="card span-7" style="--i:1" aria-labelledby="h-feed"><div class="panel-h"><h2 class="t-h2" id="h-feed">Live feed</h2><span class="t-small">Last 14 days, newest first</span></div>' +
      '<div class="feed-tools" role="group" aria-label="Show">' + FEED_GROUPS.map(function (g) {
        var n = g[0] === 'all' ? feed.filter(function (i) { return i.g !== 'visits'; }).length : feed.filter(function (i) { return i.g === g[0]; }).length;
        return '<button type="button" data-feed="' + g[0] + '" aria-pressed="' + (feedFilter === g[0]) + '">' + esc(g[1]) + ' ' + num(n) + '</button>';
      }).join('') + '</div><div class="feed" data-feedlist>' + feedHtml(feed) + '</div></section>';

    html += '<div class="span-5" style="display:grid;gap:16px;align-content:start">';
    html += '<section class="card" style="--i:2" aria-labelledby="h-att"><div class="panel-h"><h2 class="t-h2" id="h-att">Needs you</h2></div>' +
      (items.length ? '<div class="todo">' + items.map(function (it) { return '<a href="' + it.href + '"><i class="' + (it.bad ? 'is-bad' : '') + '"></i><span><b>' + esc(it.h) + '</b><small>' + esc(it.p) + '</small></span>' + icon('chev') + '</a>'; }).join('') + '</div>'
        : '<div class="todo-ok"><i></i>No applications waiting, no old homework, no failures, and every automatic job ran on time.</div>') + '</section>';
    html += '<section class="card" style="--i:3" aria-labelledby="h-today"><div class="panel-h"><h2 class="t-h2" id="h-today">Today’s classes</h2><a href="#/schedule">Schedule</a></div>' +
      (D.today.length ? '<div class="dt-wrap"><table class="dt"><thead><tr><th>Time</th><th>Class</th><th>State</th><th></th></tr></thead><tbody>' + D.today.map(function (s) {
        var co = s.cohorts || {}, at = new Date(s.scheduled_at).getTime(), open = s.status === 'live' || (Date.now() >= at - 15 * MIN && Date.now() <= at + 90 * MIN);
        return '<tr><td>' + esc(fmt(s.scheduled_at, { hour: '2-digit', minute: '2-digit' })) + '</td><td><a href="#/classes/' + esc(co.id || '') + '">' + esc(className(co)) + '</a><div class="m">' + esc((co.teacher_profiles ? co.teacher_profiles.full_name + ', ' : '') + plural(co.enrolled_count || 0, 'student', 'students')) + '</div></td>' +
          '<td class="nw"><span class="dot' + (s.status === 'live' ? '' : s.status === 'completed' ? ' dot--off' : ' dot--warn') + '"></span>' + esc(s.status === 'live' ? 'Live now' : s.status === 'completed' ? 'Done' : 'Scheduled') + '</td>' +
          '<td class="r">' + (open ? '<button class="btn btn--primary btn--sm" type="button" data-room="' + esc(s.id) + '">' + icon('play') + 'Open room</button>' : '') + '</td></tr>';
      }).join('') + '</tbody></table></div><p class="t-small ad-msg" data-roommsg aria-live="polite"></p>' : '<p class="t-small" style="margin-top:6px">No classes today.</p>') + '</section>';
    html += '<section class="card" style="--i:4" aria-labelledby="h-jobs"><div class="panel-h"><h2 class="t-h2" id="h-jobs">System health</h2><a href="#/system">System</a></div><div class="dt-wrap"><table class="dt"><thead><tr><th>Automatic job</th><th class="r">Last run</th><th class="r">Fails, 7 days</th></tr></thead><tbody>' + jobsSummary().map(function (j) {
      return '<tr><td><span class="dot' + (j.bad ? ' dot--bad' : '') + '"></span>' + esc(j.name) + '</td><td class="r' + (j.bad ? ' is-bad' : ' m') + '">' + esc(j.last ? (j.lastOk === false ? 'Failed ' : '') + ago(j.last) : j.waitingFirst ? 'First run due' : j.event ? 'Not used this week' : 'Not this week') + '</td><td class="r' + (j.failed ? ' is-bad' : ' m') + '">' + num(j.failed) + '</td></tr>';
    }).join('') + '</tbody></table></div></section>';
    html += '</div>';

    /* Trends */
    var days = lastDays(N), maxA = Math.max.apply(null, activeS.concat([1])), maxS = Math.max.apply(null, signupS.concat([1]));
    var axis = '<div class="bars-axis"><span>' + esc(fmt(Date.now() - (N - 1) * DAY, { day: 'numeric', month: 'short' })) + '</span><span>Today</span></div>';
    html += '<section class="card span-6" style="--i:5" aria-labelledby="h-act"><div class="panel-h"><h2 class="t-h2" id="h-act">People using a dashboard each day</h2><a href="#/activity">Activity</a></div>' +
      '<div class="bars" role="img" aria-label="' + esc('Daily active people over 30 days, ' + num(Math.max.apply(null, activeS)) + ' at most') + '">' + activeS.map(function (v, i) { return '<i style="--h:' + Math.round(v / maxA * 100) + '%" title="' + esc(days[i] + ': ' + v) + '"></i>'; }).join('') + '</div>' + axis + '</section>';
    html += '<section class="card span-6" style="--i:6" aria-labelledby="h-sig"><div class="panel-h"><h2 class="t-h2" id="h-sig">New student accounts each day</h2><a href="#/students">Students</a></div>' +
      '<div class="bars" role="img" aria-label="' + esc('New student accounts over 30 days, ' + num(sum(signupS)) + ' in all') + '">' + signupS.map(function (v, i) { return '<i style="--h:' + Math.round(v / maxS * 100) + '%" title="' + esc(days[i] + ': ' + v) + '"></i>'; }).join('') + '</div>' + axis + '</section>';

    /* Tutor use per learner */
    var per = {};
    (C.tutor || []).forEach(function (t) {
      var p = per[t.student_id] = per[t.student_id] || { id: t.student_id, n: 0, sec: 0, turns: 0, last: t.started_at, voice: 0, langs: {} };
      p.n++; p.sec += t.seconds_used || 0; p.turns += t.turns || 0; if (t.mode === 'live') p.voice++; if (t.language) p.langs[t.language + (t.level ? ' ' + t.level : '')] = 1;
      if (t.started_at > p.last) p.last = t.started_at;
    });
    var tl = Object.keys(per).map(function (k) { return per[k]; }).sort(function (a, b2) { return b2.last.localeCompare(a.last); });
    html += '<section class="card span-6" style="--i:7" aria-labelledby="h-tut"><div class="panel-h"><h2 class="t-h2" id="h-tut">Who used the tutor</h2><a href="#/ai">AI spend</a></div>' +
      (tl.length ? '<div class="dt-wrap"><table class="dt"><thead><tr><th>Learner</th><th>Practising</th><th class="r">Sessions</th><th class="r">Minutes</th><th class="r">Last</th></tr></thead><tbody>' + tl.slice(0, 12).map(function (p) {
        var s = dir.s[p.id] || {};
        return '<tr><td><a href="#/students/' + esc(p.id) + '">' + esc(s.full_name || 'Student') + '</a>' + (s.user_id === me ? ' <span class="m">(you)</span>' : '') + '<div class="m">' + esc((D.emails || {})[s.user_id] || s.country || '') + '</div></td><td class="m">' + esc(Object.keys(p.langs).join(', ')) + '</td>' +
          '<td class="r">' + num(p.n) + (p.voice ? ' <span class="m">(' + num(p.voice) + ' voice)</span>' : '') + '</td><td class="r">' + num(Math.round(p.sec / 6) / 10) + '</td><td class="r m">' + esc(ago(p.last)) + '</td></tr>';
      }).join('') + '</tbody></table></div>' : '<p class="t-small" style="margin-top:6px">Nobody used the tutor in the last 30 days.</p>') + '</section>';

    /* Latest accounts */
    var lastSeen = {}; (C.events || []).forEach(function (e) { if (e.user_id && (!lastSeen[e.user_id] || e.created_at > lastSeen[e.user_id])) lastSeen[e.user_id] = e.created_at; });
    html += '<section class="card span-6" style="--i:8" aria-labelledby="h-new"><div class="panel-h"><h2 class="t-h2" id="h-new">Latest student accounts</h2><a href="#/students">All students</a></div>' +
      (students.length ? '<div class="dt-wrap"><table class="dt"><thead><tr><th>Student</th><th>Learning</th><th>Plan</th><th class="r">Joined</th><th class="r">Last seen</th></tr></thead><tbody>' + students.slice(0, 12).map(function (s) {
        return '<tr><td><a href="#/students/' + esc(s.id) + '">' + esc(s.full_name || 'Student') + '</a><div class="m">' + esc([(D.emails || {})[s.user_id], s.country].filter(Boolean).join(', ')) + '</div></td><td>' + esc([s.language, s.level].filter(Boolean).join(' ')) + '</td>' +
          '<td>' + esc(planName(s.tier)) + (s.stripe_subscription_status === 'active' ? '' : s.stripe_subscription_status ? ' <span class="m">(' + esc(s.stripe_subscription_status) + ')</span>' : '') + '</td>' +
          '<td class="r m">' + esc(fmt(s.created_at, { day: 'numeric', month: 'short' })) + '</td><td class="r m">' + esc(lastSeen[s.user_id] ? ago(lastSeen[s.user_id]) : 'Never') + '</td></tr>';
      }).join('') + '</tbody></table></div>' : '<p class="t-small">No students yet.</p>') + '</section>';

    return html + '</div>';
  }
  function soonView(r) {
    return '<div class="view__head"><div><h1 class="t-h1">' + esc(r.label) + '</h1><p class="t-lead">' + esc(r.text) + '</p></div></div>' +
      '<div class="card"><h2 class="t-h2">Comes in part ' + r.part + ' of the admin pages</h2><div class="btn-row" style="margin-top:12px"><a class="btn btn--primary" href="#/overview">Back to the overview</a></div></div>';
  }
  function deniedView() {
    var to = D.role === 'teacher' ? '/app/teach' : D.role === 'student' ? '/app' : '/';
    return '<div class="card" style="max-width:560px;margin:40px auto"><h1 class="t-h1">This page is for Alimun’s administrators</h1><p class="t-body" style="margin-top:8px">Your account does not have access to it.</p><div class="btn-row" style="margin-top:14px"><a class="btn btn--primary" href="' + to + '">Go to your dashboard</a></div></div>';
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
  var MODULES = { activity: function () { return window.AlimunAdminActivity; }, campaigns: function () { return window.AlimunAdminCampaigns; }, students: function () { return window.AlimunAdminStudents; }, teachers: function () { return window.AlimunAdminTeachers; },
    classes: function () { return window.AlimunAdminClasses; }, schedule: function () { return window.AlimunAdminSchedule; },
    matching: function () { return window.AlimunAdminMatching; }, waiting: function () { return window.AlimunAdminWaiting; }, messages: function () { return window.AlimunAdminMessages; },
    figures: function () { return window.AlimunAdminFigures; }, payouts: function () { return window.AlimunAdminPayouts; }, ai: function () { return window.AlimunAdminAi; }, system: function () { return window.AlimunAdminSystem; } };
  function helpers() {
    return { esc: esc, fmt: fmt, num: num, cap: cap, plural: plural, relative: relative, className: className, icon: icon, Cast: Cast, loaderInner: loaderInner, jobs: JOBS,
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
      top.querySelector('.top__title').innerHTML = '<span class="top__crumb">' + esc(r.group) + ' / </span>' + esc(r.label);
      if (mod) mod.mount(view, partsOf(id), helpers()).then(function (res) { if (current === id && res && res.title) document.title = res.title + ' – Alimun admin'; });
      app.querySelectorAll('[data-route]').forEach(function (a) { if (a.getAttribute('data-route') === id) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
      app.querySelector('[data-more]').classList.toggle('is-active', BAR.indexOf(id) === -1);
      if (animate) { window.scrollTo(0, 0); view.focus({ preventScroll: true }); }
    };
    if (animate && current) { view.classList.add('is-leaving'); setTimeout(swap, 120); } else swap();
    current = id;
  }

  /* ---------- Data ---------- */
  function sample() {
    var now = Date.now(), at = function (h) { var d = new Date(); d.setHours(h, h === 18 ? 30 : 0, 0, 0); return d.toISOString(); }, ago2 = function (m) { return new Date(now - m * MIN).toISOString(); };
    var jobs = [];
    for (var i = 0; i < 40; i++) { jobs.push({ job: 'db:complete-sessions', ran_at: ago2(i * 15 + 3), ok: true }); jobs.push({ job: 'db:expire-waitlist-offers', ran_at: ago2(i * 15 + 3), ok: true }); }
    ['vercel:cron-create-rooms', 'vercel:cron-billing', 'vercel:cron-rooms', 'vercel:cron-finance'].forEach(function (j, n) { jobs.push({ job: j, ran_at: ago2(60 * (6 + n)), ok: true }); });
    jobs.push({ job: 'vercel:cron-expire-offers', ran_at: ago2(8.5 * 60), ok: false });
    var names = [['Marco Rossi', 'IT', 'English', 'B1', 'focused'], ['Aya Benali', 'MA', 'English', 'A2', 'free'], ['Lea Martin', 'FR', 'German', 'A1', 'free'], ['Omar Haddad', 'MA', 'German', 'A2', 'community'], ['Sara Rossi', 'IT', 'English', 'B2', 'focused'], ['Mei Chen', 'CN', 'German', 'B1', 'intensive'], ['Ines Duarte', 'PT', 'French', 'A2', 'free'], ['Lukas Brandt', 'DE', 'Spanish', 'A1', 'free']];
    var students = names.map(function (n, k) { return { id: 'st' + k, user_id: 'u' + k, full_name: n[0], country: n[1], language: n[2], level: n[3], tier: n[4], stripe_subscription_status: n[4] === 'free' ? null : 'active', created_at: ago2(60 * (5 + k * 70)) }; });
    var events = [];
    for (var d = 0; d < 30; d++) for (var u = 0; u < 3 + Math.round(4 + 3 * Math.sin(d / 4)); u++) events.push({ user_id: 'u' + (u % 8), event: u % 2 ? 'view' : 'open_dashboard', page: '/app', created_at: ago2(d * 1440 + u * 37) });
    var tutor = [{ id: 't1', student_id: 'st1', language: 'English', level: 'A2', mode: 'live', turns: 38, seconds_used: 600, started_at: ago2(70), title: 'Present tense practice' }, { id: 't2', student_id: 'st0', language: 'English', level: 'B1', mode: 'written', turns: 12, seconds_used: 240, started_at: ago2(60 * 26), title: 'Job interview phrases' }, { id: 't3', student_id: 'st2', language: 'German', level: 'A1', mode: 'live', turns: 20, seconds_used: 420, started_at: ago2(60 * 50), title: 'Ordering food' }];
    return { email: '', userId: null, counts: { students: 214, paying: 87, teachers: 12, pending: 2, classes: 18, enrolled: 143, waiting: 9, week: 54 },
      applications: [{ id: 'x1', full_name: 'Léa Martin', languages: ['French'], created_at: ago2(60 * 30) }, { id: 'x2', full_name: 'Tomás Ruiz', languages: ['Spanish'], created_at: ago2(60 * 5) }],
      today: [
        { id: 's1', scheduled_at: at(9), status: 'completed', cohorts: { id: 'c1', language: 'German', level: 'A2', tier: 'intensive', enrolled_count: 5, teacher_profiles: { full_name: 'Ana Weber' } } },
        { id: 's2', scheduled_at: new Date(now + 5 * MIN).toISOString(), status: 'scheduled', cohorts: { id: 'c2', language: 'English', level: 'B2', tier: 'focused', enrolled_count: 14, teacher_profiles: { full_name: 'James Hall' } } },
        { id: 's3', scheduled_at: at(18), status: 'scheduled', cohorts: { id: 'c3', language: 'Spanish', level: 'B1', tier: 'community', enrolled_count: 29, teacher_profiles: { full_name: 'Lucía Gómez' } } }
      ].sort(function (a, b) { return a.scheduled_at.localeCompare(b.scheduled_at); }),
      oldHomework: [{ id: 'h1', submitted_at: ago2(60 * 24 * 9) }, { id: 'h2', submitted_at: ago2(60 * 24 * 8) }],
      ai: [{ day: '', calls: 412, cost_usd: 3.84, failures: 2 }], jobs: jobs, failed: [],
      console: { students: students, teachers: [{ id: 'x1', user_id: 'tu1', full_name: 'Léa Martin', languages: ['French'], status: 'pending', created_at: ago2(60 * 30) }],
        events: events, tutor: tutor,
        money: [{ user_id: 'u0', product_key: 'focused', variant: 'monthly', source: 'stripe', status: 'active', currency: 'eur', amount_paid: 4900, created_at: ago2(60 * 3) }, { user_id: 'u5', product_key: 'intensive', variant: 'monthly', source: 'stripe', status: 'active', currency: 'eur', amount_paid: 8900, created_at: ago2(60 * 30) }],
        ledger: [{ student_id: 'st3', seconds: 600, reason: 'admin', note: 'Welcome back', created_at: ago2(60 * 6) }],
        enrol: [{ student_id: 'st5', status: 'active', enrolled_at: ago2(60 * 29), cohorts: { language: 'German', level: 'B1', tier: 'intensive' } }],
        waitlist: [{ student_id: 'st6', added_at: ago2(60 * 8), cohorts: { language: 'French', level: 'A2', tier: 'community' } }],
        homework: [{ student_id: 'st4', status: 'pending', submitted_at: ago2(95), assignments: { title: 'Conditionals, part 2' } }],
        messages: [{ sender_name: 'James Hall', sender_role: 'teacher', body: 'See you all on Thursday, please bring the reading.', created_at: ago2(40) }],
        oto: [], poll: [{ student_id: 'st1', seconds_added: 600, created_at: ago2(60 * 25) }],
        signups: [{ email: 'reader@example.com', source: 'blog', country: 'ES', created_at: ago2(60 * 12) }],
        withdraw: [], aiFail: [{ action: 'tutor_turn', provider: 'groq', error: 'rate limited', created_at: ago2(55) }], cronFail: [{ job: 'vercel:cron-expire-offers', ran_at: ago2(8.5 * 60), result: 'timeout' }], hooks: [], attend: [{ student_id: 'st4', joined_at: ago2(60 * 22), duration_minutes: 55 }], abuse: [] } };
  }
  function loadData() {
    if (/[?&]sample=1/.test(location.search)) { mode = 'forced'; return Promise.resolve(sample()); }
    return window.AlimunData.adminOverview().then(function (d) {
      if (d && d.admin) {
        mode = 'real';
        return Promise.all([window.AlimunData.adminConsole().catch(function () { return { failed: ['console'] }; }), window.AlimunData.userId()]).then(function (r) {
          d.console = r[0]; d.failed = r[0].failed || []; d.userId = r[1]; d.emails = {}; return d;
        });
      }
      if (d && d.signedIn) { mode = 'denied'; return d; }
      mode = 'sample'; return sample();
    }, function (e) { console.warn('[Alimun] Admin data did not load', e && e.message); mode = 'error'; return sample(); });
  }
  function reload() {
    var btn = app.querySelector('[data-reload]'); if (btn) btn.disabled = true;
    return loadData().then(function (d) { D = d; loadedAt = Date.now(); emailsAsked = false; current = null; renderShell(); render(routeFromHash(), false); loadEmails(); });
  }
  function boot() {
    app = document.getElementById('app'); loadingScreen = document.getElementById('loading');
    var started = Date.now(), fonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    loadingScreen.querySelector('p').textContent = 'Opening the admin console';
    Promise.all([loadData(), fonts]).then(function (r) {
      D = r[0]; loadedAt = Date.now(); renderShell(); render(routeFromHash(), false); loadEmails();
      setTimeout(hideLoader, Math.max(0, 600 - (Date.now() - started)));
    });
    window.addEventListener('hashchange', function () { if (!D) return; setSheet(false); var id = routeFromHash(); if (id !== current || MODULES[id]) render(id, true); });
    window.addEventListener('scroll', function () { if (top) top.classList.toggle('is-scrolled', window.scrollY > 8); }, { passive: true });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && D) setSheet(false);
      if (e.key === '/' && D && !/^(INPUT|TEXTAREA|SELECT)$/.test((document.activeElement || {}).tagName || '') && !(document.activeElement || {}).isContentEditable) { var i = app.querySelector('#adm-q'); if (i) { e.preventDefault(); i.focus(); } }
    });
    app.addEventListener('click', function (e) {
      /* A table row opens its record when clicked anywhere outside its own links, buttons and boxes */
      var row = e.target.closest('tr[data-href]');
      if (row && !e.target.closest('a,button,input,select,label')) { location.hash = row.getAttribute('data-href'); return; }
      var el = e.target.closest('[data-more],[data-close],[data-room],[data-retry],[data-signout],[data-reload],[data-feed]');
      if (!el || el.disabled) return;
      if (el.hasAttribute('data-more')) setSheet(!document.body.classList.contains('is-sheet-open'));
      else if (el.hasAttribute('data-close')) setSheet(false);
      else if (el.hasAttribute('data-room')) openRoom(el);
      else if (el.hasAttribute('data-feed')) {
        feedFilter = el.getAttribute('data-feed');
        app.querySelectorAll('[data-feed]').forEach(function (b) { b.setAttribute('aria-pressed', String(b === el)); });
        var list = app.querySelector('[data-feedlist]'); if (list) { list.innerHTML = feedHtml(buildFeed()); list.scrollTop = 0; }
      }
      else if (el.hasAttribute('data-reload')) reload();
      else if (el.hasAttribute('data-retry')) { showLoader('Opening the admin console'); reload().then(hideLoader); }
      else if (el.hasAttribute('data-signout')) { if (mode === 'real' || mode === 'denied') window.AlimunData.signOut().then(function () { location.href = '/'; }); else location.href = '/signin.html'; }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
