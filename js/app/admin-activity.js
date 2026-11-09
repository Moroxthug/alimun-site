/* Alimun admin: activity (docs/GROWTH_PLAN.md step 3). English only.
   #/activity                 who is active (today, 7 and 30 days, by day), sign-ups, where students stop (sign-up,
                              level test, did something, in a class, paying), people slipping away (nothing for 14 to
                              90 days) and countries. From admin_activity_overview() (admins only).
   AlimunAdminActivity.timelineCard(A, userId, i)  a card for a student's or teacher's file; it fills itself from
                              admin_activity_timeline(), newest first, with "Show older".
   Exercises, practice, flashcards, tutor, homework, classes, 1:1s, waiting lists, messages and the news choice come
   from their own tables; opening a dashboard, sections opened and payments from activity_events.
   The Welcome poll card counts the answers to the students' welcome poll (table welcome_poll). */
(function () {
  'use strict';
  var A = null, root = null, OV = null, SRC = null, POLLROWS = null, DAYMS = 86400000;
  var KIND = {
    signed_up: 'Created their account', last_sign_in: 'Last signed in', open_dashboard: 'Opened the dashboard', view: 'Opened',
    exercise: 'Did an exercise', practice: 'Practised', flashcards: 'Reviewed flashcards', tutor: 'Talked with the tutor',
    homework_handed_in: 'Handed in homework', class_attended: 'Joined a live class', joined_class: 'Joined the class',
    left_class: 'Left the class', booked_1on1: 'Booked a 1 on 1', joined_waitlist: 'Joined the waiting list for',
    sent_message: 'Sent a message', news_on: 'Turned news and offers on', news_off: 'Turned news and offers off',
    subscribed: 'Subscribed', purchased: 'Bought', payment_failed: 'A payment failed', subscription_ended: 'Their subscription ended'
  };
  var SECTION = { home: 'Home', book: 'Course book', practice: 'Practice', cards: 'Flashcards', tests: 'Mock tests', library: 'Library',
    classes: 'Classes', homework: 'Homework', progress: 'Progress', messages: 'Messages', settings: 'Settings', tutor: 'Tutor', plans: 'Plans',
    today: 'Today', students: 'Students', material: 'Material', payouts: 'Payouts', find: 'Find a class' };
  var PLANS = { focused: 'Focused', intensive: 'Intensive', community: 'Community', private: 'Private' };

  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real'; }
  function when(at) { return A.fmt(at, { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }); }
  function ago(at) { var ms = new Date(at).getTime() - Date.now(); return A.cap(A.relative ? A.relative(ms) : when(at)); }
  function loading() { return '<div class="rd-loading"><div class="loader" style="--w:56px" role="img" aria-label="Loading">' + A.loaderInner() + '</div></div>'; }

  /* ---------- One person's timeline ---------- */
  function line(e) {
    var d = e.detail || {}, what = KIND[e.kind] || e.kind, more = [];
    if (e.kind === 'view') what += ' ' + (SECTION[d.section] || d.section || 'a page');
    else if (e.kind === 'open_dashboard') what = 'Opened the ' + (d.dashboard === 'teacher' ? 'teacher' : 'student') + ' dashboard';
    else if (e.label && ['joined_class', 'left_class', 'joined_waitlist'].indexOf(e.kind) > -1) what += ' ' + e.label;
    else if (e.kind === 'subscribed') what += ' to ' + (PLANS[d.tier] || d.tier || 'a plan');
    else if (e.kind === 'purchased') what += ' ' + ({ session: 'a 1 on 1 session', tutor_time: 'tutor time', certificate: 'a certificate' }[d.type] || d.type || 'something');
    if (e.label && ['exercise', 'tutor', 'homework_handed_in', 'practice'].indexOf(e.kind) > -1) more.push(e.label);
    if (d.score != null) more.push(d.score + '%');
    if (e.kind === 'tutor' && d.minutes) more.push(d.minutes + ' min' + (d.mode ? ', ' + d.mode : ''));
    if (e.kind === 'class_attended' && d.minutes) more.push(d.minutes + ' min');
    if (e.kind === 'flashcards' && d.cards) more.push(d.cards + (d.cards === 1 ? ' card' : ' cards'));
    if (e.kind === 'booked_1on1' && e.label) more.push(e.label === 'followup' ? 'follow-up' : 'private class');
    if (e.kind === 'practice' && d.done) more.push('done');
    return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(when(e.at)) + '</span><span><b>' + esc(what) + '</b>' +
      (more.length ? '<small>' + esc(more.join(', ')) + '</small>' : '') + '</span></div>';
  }
  function sampleTimeline() {
    var n = Date.now(), at = function (h) { return new Date(n - h * 3600000).toISOString(); };
    return [
      { at: at(2), kind: 'view', detail: { section: 'practice' } }, { at: at(2.1), kind: 'open_dashboard', detail: { dashboard: 'student' } },
      { at: at(26), kind: 'tutor', label: 'Ordering at a café', detail: { minutes: 6.5, mode: 'chat' } },
      { at: at(27), kind: 'exercise', label: 'Perfekt with sein', detail: { score: 80 } },
      { at: at(50), kind: 'flashcards', detail: { cards: 14 } }, { at: at(75), kind: 'class_attended', detail: { minutes: 55 } },
      { at: at(200), kind: 'joined_class', label: 'German B1', detail: {} }, { at: at(201), kind: 'subscribed', detail: { tier: 'focused' } },
      { at: at(240), kind: 'signed_up', detail: {} }
    ];
  }
  function timelineCard(helpers, userId, i) {
    A = helpers;
    var id = 'tl-' + String(userId).replace(/[^a-z0-9-]/gi, '');
    setTimeout(function () { fill(id, userId, null); }, 0);
    return '<section class="card span-12" style="--i:' + (i || 0) + '" aria-labelledby="h-' + id + '"><h2 class="t-h2" id="h-' + id + '">Timeline</h2>' +
      '<p class="t-small" style="margin-top:6px">Everything they did, newest first: dashboards and sections opened, practice, tutor, homework, classes, messages, payments and their news choice.</p>' +
      '<div data-tl="' + id + '">' + loading() + '</div></section>';
  }
  function fill(id, userId, before) {
    var box = document.querySelector('[data-tl="' + id + '"]');
    if (!box) return;
    var get = real() ? window.AlimunData.adminActivity(userId, before) : Promise.resolve(before ? [] : sampleTimeline());
    get.then(function (rows) {
      var html = rows.length ? '<div class="tt-week">' + rows.map(line).join('') + '</div>' : (before ? '' : '<p class="t-body" style="margin-top:8px">Nothing recorded yet.</p>');
      var more = rows.length >= 60 ? '<div class="btn-row"><button class="btn btn--ghost btn--sm" type="button" data-tl-more="' + esc(rows[rows.length - 1].at) + '">Show older</button></div>' : '';
      if (before) { var old = box.querySelector('[data-tl-more]'); if (old) old.parentNode.remove(); box.insertAdjacentHTML('beforeend', html + more); }
      else box.innerHTML = html + more;
      var b = box.querySelector('[data-tl-more]');
      if (b) b.addEventListener('click', function () { b.disabled = true; fill(id, userId, b.getAttribute('data-tl-more')); });
    }, function (e) {
      box.innerHTML = '<p class="t-body" style="margin-top:8px">The timeline did not load: ' + esc((e && e.message) || 'please try again') + '.</p>';
    });
  }

  /* ---------- Overview page ---------- */
  function sampleOverview() {
    var days = [], n = new Date();
    for (var k = 29; k >= 0; k--) { var d = new Date(n.getTime() - k * DAYMS); days.push({ day: d.toISOString().slice(0, 10), active: Math.max(0, Math.round(18 + 8 * Math.sin(k / 3) + (29 - k) / 3)) }); }
    return { sample: true, active_1d: 21, active_7d: 64, active_30d: 118, signups_7d: 23, signups_30d: 91, people: 214, by_day: days,
      funnel: { students: 190, with_profile: 172, took_level_test: 160, did_something: 131, in_a_class: 74, paying: 52 },
      slipping: [{ user_id: 'u1', student_id: 's1', name: 'Marco Rossi', email: 'marco@example.com', role: 'student', last_at: new Date(n - 18 * DAYMS).toISOString(), tier: 'focused' },
        { user_id: 'u2', student_id: 's2', name: 'Aya Benali', email: 'aya@example.com', role: 'student', last_at: new Date(n - 33 * DAYMS).toISOString(), tier: 'free' }],
      countries: [{ country: 'IT', people: 61 }, { country: 'MA', people: 38 }, { country: 'DE', people: 22 }, { country: 'CA', people: 14 }] };
  }
  function countryName(c) { try { return new Intl.DisplayNames(['en'], { type: 'region' }).of(c) || c; } catch (e) { return c; } }
  function pct(a, b) { return b ? Math.round(100 * a / b) + '%' : '–'; }
  function bars(days) {
    var max = Math.max.apply(null, days.map(function (d) { return d.active; }).concat([1]));
    return '<div class="ac-bars" role="img" aria-label="People active each day, last 30 days">' + days.map(function (d) {
      var h = Math.round(100 * d.active / max);
      return '<span class="ac-bar" style="--h:' + h + '%" title="' + esc(A.fmt(d.day + 'T12:00:00', { day: 'numeric', month: 'short' }) + ': ' + d.active) + '"></span>';
    }).join('') + '</div><div class="ac-axis"><span>' + esc(A.fmt(days[0].day + 'T12:00:00', { day: 'numeric', month: 'short' })) + '</span><span>Today</span></div>';
  }
  var HEARD = { search: 'Google or another search engine', chatgpt: 'ChatGPT', instagram: 'Instagram', tiktok: 'TikTok', youtube: 'YouTube', facebook: 'Facebook',
    friend: 'A friend or family member', school: 'Their school or teacher', other: 'Somewhere else' };
  function heardText(p) { return p.heard_from ? (HEARD[p.heard_from] || p.heard_from) + (p.heard_from === 'other' && p.heard_from_other ? ': ' + p.heard_from_other : '') : ''; }
  function trackText(p) {
    var site = p.utm_source ? p.utm_source + (p.utm_medium ? ' / ' + p.utm_medium : '') + (p.utm_campaign ? ' / ' + p.utm_campaign : '') : (p.referrer_host || (p.landing_path ? 'typed the address or a saved link' : ''));
    return site ? 'arrived from ' + site + (p.landing_path ? ' on ' + p.landing_path : '') : '';
  }
  function sampleSources() {
    var n = Date.now();
    return { sample: true, signups: 23, answered: 15, tracked: 9,
      heard: [{ heard_from: 'search', people: 6 }, { heard_from: 'instagram', people: 4 }, { heard_from: 'friend', people: 3 }, { heard_from: 'school', people: 2 }],
      sites: [{ site: 'google.com', people: 4 }, { site: 'instagram', people: 3 }, { site: 'direct', people: 2 }],
      recent: [{ name: 'Marco Rossi', email: 'marco@example.com', role: 'student', student_id: 's1', created_at: new Date(n - 3600000).toISOString(), heard_from: 'instagram', utm_source: 'instagram', utm_medium: 'bio', landing_path: '/' },
        { name: 'Aya Benali', email: 'aya@example.com', role: 'student', student_id: 's2', created_at: new Date(n - 26 * 3600000).toISOString(), heard_from: 'search', referrer_host: 'google.com', landing_path: '/blog/german-a1' },
        { name: 'Lea Martin', email: 'lea@example.com', role: 'teacher', created_at: new Date(n - 50 * 3600000).toISOString() }] };
  }
  function sourcesCard(o, i) {
    if (!o) return '';
    var html = '<section class="card span-12" style="--i:' + i + '"><h2 class="t-h2">Where new people came from</h2><p class="t-small" style="margin-top:6px">' +
      esc('Last 90 days: ' + o.signups + ' new accounts. ' + o.answered + ' said how they heard about Alimun at sign-up. ' + o.tracked + ' had their first visit recorded, which needs the cookie banner\u2019s analytics switch on.') + '</p>';
    var rows = function (list, label) { return '<div class="tt-week">' + list.map(function (r) { return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(String(r.people)) + '</span><span><b>' + esc(label(r)) + '</b></span></div>'; }).join('') + '</div>'; };
    html += '<div class="grid" style="margin-top:12px"><div class="span-6"><h3 class="t-h3">What they said</h3>' + ((o.heard || []).length ? rows(o.heard, function (r) { return HEARD[r.heard_from] || r.heard_from; }) : '<p class="t-body" style="margin-top:8px">No answers yet.</p>') + '</div>' +
      '<div class="span-6"><h3 class="t-h3">Where their first visit came from</h3>' + ((o.sites || []).length ? rows(o.sites, function (r) { return r.site === 'direct' ? 'Typed the address or a saved link' : r.site; }) : '<p class="t-body" style="margin-top:8px">Nothing recorded yet.</p>') + '</div></div>';
    html += '<h3 class="t-h3" style="margin-top:16px">Latest sign-ups</h3>' + ((o.recent || []).length ? '<div class="tt-week">' + o.recent.map(function (p) {
      var href = p.role === 'student' && p.student_id ? '#/students/' + esc(p.student_id) : '#/teachers';
      var what = [heardText(p), trackText(p)].filter(Boolean).join('; ') || 'not known';
      return '<a class="tt-row tt-row--wide" href="' + href + '"><span class="tt-row__time">' + esc(ago(p.created_at)) + '</span><span><b>' + esc(p.name || p.email || 'Someone') + '</b><small>' + esc((p.role === 'teacher' ? 'Teacher. ' : '') + A.cap(what) + '.') + '</small></span></a>';
    }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">No sign-ups in the last 90 days.</p>');
    return html + '</section>';
  }
  /* ---------- Welcome poll (js/app/poll.js): answers counted per question, and what people wrote ---------- */
  var POLL = [
    ['explain', 'How they want things explained', { target: 'Only in the language they learn', mostly: 'Mostly in that language, their own when stuck', own: 'In their own language' }],
    ['teacher', 'Who they want to learn with', { native: 'A native speaker', home: 'A teacher from their country', either: 'Either, if the teacher is good' }],
    ['confidence', 'How confident they feel', { c1: 'Just starting out', c2: 'Simple things, slowly', c3: 'Gets by in everyday situations', c4: 'Comfortable, still makes mistakes', c5: 'Very confident' }],
    ['hardest', 'What feels hardest (several allowed)', { speaking: 'Speaking', listening: 'Listening to fast speech', reading: 'Reading longer texts', writing: 'Writing', grammar: 'Grammar', vocab: 'Finding the right words' }],
    ['prefer', 'What would help most (up to two)', { exam: 'Exam preparation packs', classes: 'Relaxed small-group classes', conversation: 'Conversation practice', one: '1 on 1 lessons', self: 'Learning on their own' }],
    ['time', 'Time each week', { lt1: 'Less than an hour', h1_3: 'One to three hours', h3_5: 'Three to five hours', gt5: 'More than five hours' }],
    ['tutor', 'What they think of the Tutor', { not_tried: 'Not tried yet', love: 'Love it', useful: 'Useful, could be better', unsure: 'Not sure yet', no: 'Not for them' }]
  ];
  function pollCard(rows, total, i) {
    if (!rows) return '';
    var n = rows.length;
    var html = '<section class="card span-12" style="--i:' + i + '"><h2 class="t-h2">Welcome poll</h2><p class="t-small" style="margin-top:6px">' +
      esc(n + ' of ' + (total || 0) + ' students answered. Each answer added 10 minutes of tutor time.') + '</p>';
    if (!n) return html + '<p class="t-body" style="margin-top:8px">No answers yet.</p></section>';
    var count = function (key, labels) {
      var c = {};
      rows.forEach(function (r) { var v = (r.answers || {})[key]; (Array.isArray(v) ? v : v ? [v] : []).forEach(function (x) { c[x] = (c[x] || 0) + 1; }); });
      return Object.keys(c).sort(function (a, b) { return c[b] - c[a]; }).map(function (k) { return [labels[k] || k, c[k]]; });
    };
    var list = function (pairs) { return pairs.length ? '<div class="tt-week">' + pairs.map(function (p) { return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(String(p[1])) + '</span><span><b>' + esc(p[0]) + '</b><small>' + esc(pct(p[1], n)) + '</small></span></div>'; }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">No answers.</p>'; };
    var from = {};
    rows.forEach(function (r) { var c = (r.answers || {}).from; if (c) from[c] = (from[c] || 0) + 1; });
    html += '<div class="grid" style="margin-top:12px"><div class="span-6"><h3 class="t-h3">Where they are from</h3>' +
      list(Object.keys(from).sort(function (a, b) { return from[b] - from[a]; }).map(function (c) { return [countryName(c), from[c]]; })) + '</div>';
    POLL.forEach(function (q) { html += '<div class="span-6"><h3 class="t-h3">' + esc(q[1]) + '</h3>' + list(count(q[0], q[2])) + '</div>'; });
    html += '</div>';
    var said = [];
    rows.forEach(function (r) {
      var a = r.answers || {}, who = (r.student_profiles && r.student_profiles.full_name) || 'A student';
      var course = r.student_profiles ? [r.student_profiles.language, r.student_profiles.level].filter(Boolean).join(' ') : '';
      if (a.tutor_note) said.push([who, course, 'About the Tutor: ' + a.tutor_note, r.created_at]);
      if (a.note) said.push([who, course, a.note, r.created_at]);
    });
    html += '<h3 class="t-h3" style="margin-top:16px">What they wrote</h3>' + (said.length ? '<div class="tt-week">' + said.map(function (x) {
      return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(ago(x[3])) + '</span><span><b>' + esc(x[0] + (x[1] ? ', ' + x[1] : '')) + '</b><small>' + esc(x[2]) + '</small></span></div>';
    }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">Nothing written yet.</p>');
    return html + '</section>';
  }
  function samplePoll() {
    var n = Date.now();
    return [
      { created_at: new Date(n - 3600000).toISOString(), student_profiles: { full_name: 'Marco Rossi', language: 'English', level: 'B1' }, answers: { from: 'IT', explain: 'mostly', teacher: 'native', confidence: 'c3', hardest: ['speaking', 'listening'], prefer: ['exam', 'conversation'], time: 'h1_3', tutor: 'useful', tutor_note: 'Slower voice, please.' } },
      { created_at: new Date(n - 30 * 3600000).toISOString(), student_profiles: { full_name: 'Aya Benali', language: 'English', level: 'A2' }, answers: { from: 'MA', explain: 'own', teacher: 'home', confidence: 'c2', hardest: ['grammar'], prefer: ['classes'], time: 'h3_5', tutor: 'love', note: 'Evening classes would suit me.' } }
    ];
  }
  function stat(n, label) { return '<div class="ac-stat"><b>' + esc(String(n)) + '</b><span>' + esc(label) + '</span></div>'; }
  function overviewView() {
    var o = OV, f = o.funnel || {};
    var html = '<div class="view__head"><div><h1 class="t-h1">Activity</h1><p class="t-lead">Who is using Alimun, who is slipping away, and where new students stop. Active means doing something in a dashboard, not only signing in.</p></div></div><div class="grid rise">';
    html += '<section class="card span-12" style="--i:0"><h2 class="t-h2">Active people</h2><div class="ac-stats">' +
      stat(o.active_1d, 'today') + stat(o.active_7d, 'in the last 7 days') + stat(o.active_30d, 'in the last 30 days') + stat(o.signups_7d, 'new accounts in 7 days') + stat(o.signups_30d, 'new accounts in 30 days') +
      '</div>' + bars(o.by_day || []) + '</section>';
    var steps = [['Created an account', f.students], ['Opened their dashboard', f.with_profile], ['Took the level test', f.took_level_test], ['Did something', f.did_something], ['Are in a class', f.in_a_class], ['Pay for a plan', f.paying]];
    html += '<section class="card span-6" style="--i:1"><h2 class="t-h2">Where students stop</h2><p class="t-small" style="margin-top:6px">From the first step to paying. The share is of everyone who created a student account.</p><div class="tt-week">' +
      steps.map(function (s) { return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(String(s[1] || 0)) + '</span><span><b>' + esc(s[0]) + '</b><small>' + esc(pct(s[1] || 0, f.students)) + '</small></span></div>'; }).join('') + '</div></section>';
    html += '<section class="card span-6" style="--i:2"><h2 class="t-h2">Slipping away</h2><p class="t-small" style="margin-top:6px">Did something before, nothing in the last 14 days (up to 90).</p>' +
      ((o.slipping || []).length ? '<div class="tt-week">' + o.slipping.map(function (p) {
        var href = p.role === 'student' && p.student_id ? '#/students/' + esc(p.student_id) : '#/teachers';
        return '<a class="tt-row tt-row--wide" href="' + href + '"><span class="tt-row__time">' + esc(ago(p.last_at)) + '</span><span><b>' + esc(p.name || p.email || 'Someone') + '</b><small>' + esc([p.email, p.role === 'teacher' ? 'teacher' : (PLANS[p.tier] || 'free plan')].filter(Boolean).join(', ')) + '</small></span></a>';
      }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">Nobody right now.</p>') + '</section>';
    html += '<section class="card span-12" style="--i:3"><h2 class="t-h2">Countries</h2>' + ((o.countries || []).length ? '<div class="tt-week">' + o.countries.map(function (c) {
      return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(String(c.people)) + '</span><span><b>' + esc(countryName(c.country)) + '</b></span></div>';
    }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">No countries yet: people choose theirs when they sign up, or in Settings.</p>') + '</section>';
    html += sourcesCard(SRC, 4);
    html += pollCard(POLLROWS, f.students, 5);
    if (o.sample) html += '<p class="t-tiny span-12">This is sample data.</p>';
    return html + '</div>';
  }
  var no = 0;
  function mount(view, parts, helpers) {
    var my = ++no;
    A = helpers; root = view;
    root.innerHTML = loading();
    // The sources card is extra: if it fails, the rest of the page still shows.
    var src = real() ? window.AlimunData.adminSignupSources(90).catch(function (e) { console.warn('[Alimun] signup sources', e && e.message); return null; }) : Promise.resolve(sampleSources());
    var poll = real() ? window.AlimunData.adminWelcomePoll().catch(function (e) { console.warn('[Alimun] welcome poll', e && e.message); return null; }) : Promise.resolve(samplePoll());
    var get = Promise.all([real() ? window.AlimunData.adminActivityOverview() : Promise.resolve(sampleOverview()), src, poll]).then(function (r) { SRC = r[1]; POLLROWS = r[2]; return r[0]; });
    return get.then(function (o) {
      if (my !== no) return { stale: true };
      OV = o || sampleOverview(); root.innerHTML = overviewView(); return { title: 'Activity' };
    }, function (e) {
      if (my === no) root.innerHTML = '<div class="card"><p class="t-body">Activity did not load: ' + esc((e && e.message) || 'please try again') + '.</p></div>';
      return { stale: true };
    });
  }
  window.AlimunAdminActivity = { mount: mount, reset: function () {}, timelineCard: timelineCard };
})();
