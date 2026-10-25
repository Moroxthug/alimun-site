/* Alimun teacher dashboard, Classes (docs/DASHBOARD_PLAN.md, step 15, part 2). Routes under #/classes:
     (none)            the timetable: next class with Start, month calendar, coming up, the last four weeks with notes and
                       how many joined, 1:1s with Join and their notes
     live/<id>         the classroom for a class date (Daily Prebuilt; /api/join-session checks the teacher and the time
     live/b/<id>       window and makes the teacher the room's owner); beside it the class conversation (step 13) and words
     notes/<id>        the class notes: words, grammar, what we did, homework, a note to the class. Drafts save as the
                       teacher types (session_notes); Publish goes through /api/generate-notes-pdf (PDF, email the first time)
     oto/<id>          the note after a 1:1 (/api/enroll oto-note)
     new               create a class (/api/create-cohort): only days and times that fit the availability for 12 weeks
     availability      the teacher's weekly free time (teacher_availability)
   Signed out or not a teacher: a sample, nothing is saved. Text: app_tc_* keys. */
(function () {
  'use strict';
  var A = null, root = null, C = null, call = null, poll = null, saveTimer = null, tick = null;
  var DAILY_JS = 'https://unpkg.com/@daily-co/daily-js@0.79.0/dist/daily-iframe.js';
  var MIN = 60000, HOUR = 3600000, DAY = 86400000;
  var LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  var GOALS = { foundations: 'app_st_goal_foundations', relocation: 'app_st_goal_relocation', professional: 'app_st_goal_professional', academic: 'app_st_goal_academic', pleasure: 'app_st_goal_pleasure' };
  var PLANS = { community: 35, focused: 17, intensive: 6, private: 1 };
  var PLAN_KEYS = { community: 'app_tier_community', focused: 'app_tier_focused', intensive: 'app_tier_intensive', private: 'app_tier_private' };
  var SERVER_LANGS = ['English', 'German', 'Spanish', 'French', 'Portuguese', 'Italian', 'Mandarin', 'Japanese', 'Arabic'];
  var DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var WEEK = [1, 2, 3, 4, 5, 6, 0];
  var MAX_WORDS = 10;

  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real'; }
  function time(d) { return A.fmt(d, { hour: '2-digit', minute: '2-digit' }); }
  function longDay(d) { return A.cap(A.fmt(d, { weekday: 'long', day: 'numeric', month: 'long' })); }
  function cohortOf(id) { return C.cohorts.filter(function (c) { return c.id === id; })[0] || {}; }
  function sessionOf(id) { return C.sessions.filter(function (s) { return s.id === id; })[0] || null; }
  function bookingOf(id) { return C.oto.filter(function (b) { return b.id === id; })[0] || null; }
  function notesState(s) { return !s.notes ? 'none' : s.notes.published_at ? 'published' : 'draft'; }
  function isOpen(s) { var a = new Date(s.at).getTime(), now = Date.now(); return s.status === 'live' || (now >= a - 15 * MIN && now <= a + 90 * MIN); }
  function otoOpen(b) { var a = new Date(b.at).getTime(), now = Date.now(); return b.status === 'booked' && now >= a - 10 * MIN && now <= a + (b.minutes + 15) * MIN; }
  function dayKey(d) { var x = new Date(d); return x.getFullYear() + '-' + ('0' + (x.getMonth() + 1)).slice(-2) + '-' + ('0' + x.getDate()).slice(-2); }
  function hm(v) { return String(v || '').slice(0, 5); }
  function safeUrl(u) { try { var x = new URL(u); return x.protocol === 'https:' ? x.href : null; } catch (e) { return null; } }
  function otoTitle(b) { return t(b.kind === 'followup' ? 'app_t_oto_followup' : 'app_t_oto_private', { name: b.student }); }

  /* ---------- Sample: a teacher with two classes, built around now ---------- */
  function sample() {
    var now = Math.ceil(Date.now() / (5 * MIN)) * 5 * MIN, at = function (h) { return new Date(now + Math.round(h * 12) * 5 * MIN).toISOString(); };
    var bz = A.browserZone();
    var cos = [
      { id: 'c1', language: 'German', level: 'B1', goal_track: 'relocation', tier: 'focused', max_students: 17, enrolled_count: 9, schedule_days: ['Tuesday', 'Thursday'], schedule_time: '18:30', timezone: bz, status: 'open' },
      { id: 'c2', language: 'German', level: 'A2', goal_track: 'foundations', tier: 'intensive', max_students: 6, enrolled_count: 5, schedule_days: ['Monday', 'Wednesday', 'Friday'], schedule_time: '09:00', timezone: bz, status: 'open' }
    ];
    var words = [{ word: 'die Kaution', definition: 'the deposit', example: 'Die Kaution beträgt drei Monatsmieten.' }, { word: 'kündigen', definition: 'to give notice', example: 'Ich möchte meinen Vertrag kündigen.' }, { word: 'die Nebenkosten', definition: 'utility costs', example: 'Sind die Nebenkosten in der Miete enthalten?' }];
    var sessions = [], id = 0;
    /* d days from today at the class's own time (18:30 or 09:00) */
    var on = function (d, c) { var x = new Date(); x.setHours(c === 'c1' ? 18 : 9, c === 'c1' ? 30 : 0, 0, 0); x.setDate(x.getDate() + d); return x.toISOString(); };
    [-26, -22, -19, -15, -12, -8, -5, -1].forEach(function (d, i) {
      var c = i % 2 ? 'c2' : 'c1';
      sessions.push({ id: 's' + (++id), cohortId: c, at: on(d, c), status: 'completed', joined: c === 'c1' ? 7 + (i % 3) : 4 + (i % 2),
        notes: i === 7 ? null : i === 6 ? { id: 'n' + id, vocabulary: words, grammar_focus: 'Relativsätze\n\nDer Mann, der neben mir wohnt, ist Lehrer.', exercises: 'Reading a rental advert; role play with the landlord.', homework: '', due_date: null, teacher_note: '', published_at: null, pdf_url: null }
          : { id: 'n' + id, vocabulary: words, grammar_focus: 'Wechselpräpositionen\n\nWo? Dativ. Wohin? Akkusativ.', exercises: 'Describing a flat.', homework: 'Write to your landlord about a repair.', due_date: null, teacher_note: 'Great work today.', published_at: on(d, c), pdf_url: null } });
    });
    sessions.push({ id: 's' + (++id), cohortId: 'c1', at: at(0.1), status: 'scheduled', joined: 0, notes: null });
    [1, 2, 4, 6, 8, 9, 11, 13, 15, 16, 18, 20].forEach(function (d, i) { var c = i % 2 ? 'c1' : 'c2'; sessions.push({ id: 's' + (++id), cohortId: c, at: on(d, c), status: 'scheduled', joined: 0, notes: null }); });
    return {
      sample: true, teacher: { id: 'tp', full_name: 'Ana Weber', languages: ['German', 'English'] }, cohorts: cos, sessions: sessions,
      oto: [
        { id: 'b1', kind: 'followup', at: at(-22), minutes: 20, status: 'booked', note: '', student: 'Sara Rossi' },
        { id: 'b2', kind: 'followup', at: at(26), minutes: 20, status: 'booked', note: '', student: 'Mei Chen' },
        { id: 'b3', kind: 'private', at: at(-70), minutes: 60, status: 'completed', note: 'Worked on the subjunctive; keep reading the news aloud.', student: 'Lukas Brandt' }
      ],
      slots: [
        { id: 'a1', day_of_week: 1, start_time: '08:00:00', end_time: '12:00:00', timezone: bz },
        { id: 'a2', day_of_week: 2, start_time: '17:00:00', end_time: '21:00:00', timezone: bz },
        { id: 'a3', day_of_week: 3, start_time: '08:00:00', end_time: '12:00:00', timezone: bz },
        { id: 'a4', day_of_week: 4, start_time: '17:00:00', end_time: '21:00:00', timezone: bz },
        { id: 'a5', day_of_week: 5, start_time: '08:00:00', end_time: '12:00:00', timezone: bz }
      ]
    };
  }
  function load() {
    if (!real()) return Promise.resolve(sample());
    return window.AlimunData.teacherClasses().then(function (d) { return d && d.teacher ? d : sample(); });
  }

  /* ---------- Timetable ---------- */
  function upcoming() {
    var now = Date.now(), ev = [];
    C.sessions.forEach(function (s) { if (s.status !== 'cancelled' && new Date(s.at).getTime() + 90 * MIN > now) ev.push({ kind: 'class', at: s.at, s: s }); });
    C.oto.forEach(function (b) { if (b.status === 'booked' && new Date(b.at).getTime() + (b.minutes + 15) * MIN > now) ev.push({ kind: 'oto', at: b.at, b: b }); });
    return ev.sort(function (a, b) { return new Date(a.at) - new Date(b.at); });
  }
  function nextCard() {
    var s = C.sessions.filter(function (x) { return x.status !== 'cancelled' && x.status !== 'completed' && new Date(x.at).getTime() + 90 * MIN > Date.now(); })[0];
    var head = '<section class="card card--forest span-8' + (s ? '' : ' card--center') + '" style="--i:0" aria-labelledby="h-next">';
    if (!s) return head + '<h2 class="t-h1" id="h-next">' + esc(t(C.cohorts.length ? 'app_t_next_none_h' : 'app_t_next_noclass_h')) + '</h2><p class="t-lead" style="margin-top:12px">' + esc(t(C.cohorts.length ? 'app_t_next_none_p' : 'app_t_next_noclass_p')) + '</p></section>';
    var co = cohortOf(s.cohortId);
    return head + '<h2 class="t-h1" id="h-next">' + esc(t('app_t_next_when', { day: A.dayName(s.at), time: time(s.at) })) + '</h2>' +
      '<p class="t-lead" style="margin-top:12px">' + esc(A.className(co)) + ', ' + esc(A.tn('app_t_students_n', co.enrolled_count || 0)) + '. <span data-countdown="' + esc(s.at) + '">' + esc(countdown(s)) + '</span></p>' +
      '<div class="btn-row" style="margin-top:26px">' + (isOpen(s) ? '<a class="btn btn--lime" href="#/classes/live/' + esc(s.id) + '">' + A.icon('play') + esc(t('app_t_start')) + '</a>' : '') +
      '<a class="btn btn--ghost btn--on-forest" href="#/classes/notes/' + esc(s.id) + '">' + esc(t('app_t_prepare')) + '</a></div>' +
      (isOpen(s) ? '' : '<p class="t-small tc-open-note">' + esc(t('app_tc_opens')) + '</p>') + '</section>';
  }
  function countdown(s) {
    var ms = new Date(s.at).getTime() - Date.now();
    if (s.status === 'live' || (ms <= 0 && ms > -90 * MIN)) return t('app_t_live_now');
    if (ms > DAY || ms < HOUR) return t('app_t_starts', { when: A.relative(ms) });
    var h = Math.floor(ms / HOUR), m = Math.floor((ms % HOUR) / MIN);
    return t('app_tc_countdown', { h: h, m: ('0' + m).slice(-2) });
  }
  function stageCard() {
    return '<section class="stage span-4" style="--i:1;background:var(--t-lime)" aria-hidden="true"><div class="bub think">' + esc(t('app_tc_bub')) + '</div>' + A.Cast.drawing('mug') + '</section>';
  }
  function events() {
    var ev = {};
    function add(k, e) { (ev[k] = ev[k] || []).push(e); }
    C.sessions.forEach(function (s) { if (s.status !== 'cancelled') add(dayKey(s.at), { kind: 'class', at: s.at, text: A.className(cohortOf(s.cohortId)), href: '#/classes/notes/' + s.id }); });
    C.oto.forEach(function (b) { add(dayKey(b.at), { kind: 'oto', at: b.at, text: otoTitle(b), href: '#/classes/oto/' + b.id }); });
    Object.keys(ev).forEach(function (k) { ev[k].sort(function (a, b) { return new Date(a.at) - new Date(b.at); }); });
    return ev;
  }
  function calendarHtml() {
    var ev = events(), m = C.month, first = new Date(m.y, m.m, 1), today = dayKey(Date.now());
    var lead = (first.getDay() + 6) % 7, days = new Date(m.y, m.m + 1, 0).getDate();
    var names = [];
    for (var k = 0; k < 7; k++) names.push(new Intl.DateTimeFormat(A.locale, { weekday: 'short', timeZone: 'UTC' }).format(new Date(Date.UTC(2024, 0, 1 + k))));
    var cells = '';
    for (var i = 0; i < lead; i++) cells += '<span class="cal__cell is-pad" aria-hidden="true"></span>';
    for (var d = 1; d <= days; d++) {
      var key = m.y + '-' + ('0' + (m.m + 1)).slice(-2) + '-' + ('0' + d).slice(-2), list = ev[key] || [];
      var kinds = {}; list.forEach(function (e) { kinds[e.kind] = true; });
      cells += '<button class="cal__cell' + (key === today ? ' is-today' : '') + (key === C.day ? ' is-on' : '') + (list.length ? ' has-ev' : '') + '" type="button" data-tc="day" data-day="' + key + '" aria-pressed="' + (key === C.day) + '"' +
        ' aria-label="' + esc(A.fmt(new Date(m.y, m.m, d), { day: 'numeric', month: 'long' }) + (list.length ? ': ' + list.map(function (e) { return e.text; }).join(', ') : '')) + '">' +
        '<span>' + d + '</span><i class="cal__dots">' + ['class', 'oto'].filter(function (x) { return kinds[x]; }).map(function (x) { return '<b class="dot dot--' + x + '"></b>'; }).join('') + '</i></button>';
    }
    var title = A.fmt(first, { month: 'long', year: 'numeric' });
    var sel = ev[C.day] || [], p = C.day.split('-');
    return '<section class="card span-7 cal" style="--i:2" aria-labelledby="h-cal"><div class="cal__top"><h2 class="t-h2" id="h-cal">' + esc(t('app_tc_cal_h')) + '</h2>' +
      '<div class="cal__nav"><button class="btn btn--quiet btn--sm" type="button" data-tc="month" data-d="-1" aria-label="' + esc(t('app_cl_prev_month')) + '">' + A.icon('back') + '</button>' +
      '<b class="cal__month">' + esc(title) + '</b><button class="btn btn--quiet btn--sm" type="button" data-tc="month" data-d="1" aria-label="' + esc(t('app_cl_next_month')) + '">' + A.icon('arrow') + '</button></div></div>' +
      '<p class="t-small cal__key"><b class="dot dot--class"></b>' + esc(t('app_tc_key_class')) + ' <b class="dot dot--oto"></b>' + esc(t('app_tc_key_oto')) + '</p>' +
      '<div class="cal__grid" role="group" aria-label="' + esc(title) + '">' + names.map(function (n) { return '<span class="cal__wd" aria-hidden="true">' + esc(n) + '</span>'; }).join('') + cells + '</div>' +
      '<div class="cal__day" aria-live="polite"><h3 class="t-h3">' + esc(longDay(new Date(+p[0], +p[1] - 1, +p[2]))) + '</h3>' +
      (sel.length ? sel.map(function (e) {
        return '<p class="cal__ev"><b class="dot dot--' + e.kind + '"></b><a class="linkish" href="' + e.href + '"><b>' + esc(time(e.at)) + '</b> ' + esc(e.text) + '</a></p>';
      }).join('') : '<p class="t-body cal__none">' + esc(t('app_tc_day_none')) + '</p>') + '</div></section>';
  }
  function notesLabel(s) {
    var st = notesState(s);
    return t(st === 'published' ? 'app_tc_notes_published' : st === 'draft' ? 'app_tc_notes_draft' : 'app_tc_notes_none');
  }
  function comingCard() {
    var ev = upcoming().slice(0, 6);
    var html = '<section class="card span-5" style="--i:3" aria-labelledby="h-up"><h2 class="t-h2" id="h-up">' + esc(t('app_tc_up_h')) + '</h2>';
    if (!ev.length) return html + '<p class="t-body" style="margin-top:12px">' + esc(t('app_t_week_none')) + '</p></section>';
    return html + '<div class="tt-week">' + ev.map(function (e) {
      if (e.kind === 'oto') {
        var b = e.b;
        return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(A.dayName(b.at)) + '<br>' + esc(time(b.at)) + '</span><span><b>' + esc(otoTitle(b)) + '</b><small>' + esc(t('app_t_minutes', { n: b.minutes })) + '</small>' +
          (otoOpen(b) ? '<a class="btn btn--primary btn--sm tc-row-btn" href="#/classes/live/b/' + esc(b.id) + '">' + A.icon('play') + esc(t('app_tc_join')) + '</a>' : '') + '</span></div>';
      }
      var s = e.s, co = cohortOf(s.cohortId);
      return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(A.dayName(s.at)) + '<br>' + esc(time(s.at)) + '</span><span><b>' + esc(A.className(co)) + '</b><small>' +
        esc(A.tn('app_t_students_n', co.enrolled_count || 0) + ', ' + notesLabel(s)) + '</small>' +
        (isOpen(s) ? '<a class="btn btn--primary btn--sm tc-row-btn" href="#/classes/live/' + esc(s.id) + '">' + A.icon('play') + esc(t('app_t_start')) + '</a>' : '<a class="linkish tc-row-link" href="#/classes/notes/' + esc(s.id) + '">' + esc(t('app_t_prepare')) + '</a>') + '</span></div>';
    }).join('') + '</div></section>';
  }
  function pastCard() {
    var now = Date.now(), list = [];
    C.sessions.forEach(function (s) { if (s.status !== 'cancelled' && new Date(s.at).getTime() + HOUR < now) list.push({ at: s.at, s: s }); });
    C.oto.forEach(function (b) { if (new Date(b.at).getTime() < now) list.push({ at: b.at, b: b }); });
    list.sort(function (a, b) { return new Date(b.at) - new Date(a.at); });
    var html = '<section class="card span-12" style="--i:4" aria-labelledby="h-past"><h2 class="t-h2" id="h-past">' + esc(t('app_tc_past_h')) + '</h2>';
    if (!list.length) return html + '<p class="t-body" style="margin-top:12px">' + esc(t('app_tc_past_none')) + '</p></section>';
    return html + '<div class="tt-week tc-past">' + list.map(function (e) {
      if (e.b) {
        var b = e.b;
        return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(A.cap(A.fmt(b.at, { weekday: 'short', day: 'numeric', month: 'short' }))) + '</span><span><b>' + esc(otoTitle(b)) + '</b><small>' +
          esc(b.note ? t('app_tc_oto_noted') : t('app_tc_oto_unnoted')) + '</small></span>' +
          '<a class="btn btn--' + (b.note ? 'quiet' : 'primary') + ' btn--sm" href="#/classes/oto/' + esc(b.id) + '">' + esc(t(b.note ? 'app_tc_edit_note' : 'app_tc_write_note')) + '</a></div>';
      }
      var s = e.s, st = notesState(s);
      return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(A.cap(A.fmt(s.at, { weekday: 'short', day: 'numeric', month: 'short' }))) + '</span><span><b>' + esc(A.className(cohortOf(s.cohortId))) + '</b><small>' +
        esc(t('app_tc_joined', { n: s.joined, of: cohortOf(s.cohortId).enrolled_count || 0 }) + ', ' + notesLabel(s)) + '</small></span>' +
        '<a class="btn btn--' + (st === 'published' ? 'quiet' : 'primary') + ' btn--sm" href="#/classes/notes/' + esc(s.id) + '">' + esc(t(st === 'published' ? 'app_tc_edit_notes' : st === 'draft' ? 'app_tc_finish_notes' : 'app_tc_write_notes')) + '</a></div>';
    }).join('') + '</div></section>';
  }
  function timetableView() {
    return '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_t_nav_classes')) + '</h1><p class="t-lead">' + esc(t('app_tc_lead')) + '</p></div>' +
      '<div class="btn-row"><a class="btn btn--primary btn--sm" href="#/classes/new">' + A.icon('plus') + esc(t('app_tc_new')) + '</a><a class="btn btn--ghost btn--sm" href="#/classes/availability">' + esc(t('app_tc_avail')) + '</a></div></div>' +
      '<div class="grid rise">' + nextCard() + stageCard() + calendarHtml() + comingCard() + pastCard() + sampleLine() + '</div>';
  }
  function sampleLine() { return C.sample ? '<p class="t-tiny span-12">' + esc(t('app_tc_sample')) + '</p>' : ''; }

  /* ---------- Classroom ---------- */
  function liveView(kind, id) {
    document.body.classList.add('is-reading');
    var s = kind === 'b' ? null : sessionOf(id), b = kind === 'b' ? bookingOf(id) : null;
    var title = s ? A.className(cohortOf(s.cohortId)) : b ? otoTitle(b) : t('app_tc_classroom');
    var last = s ? C.sessions.filter(function (x) { return x.cohortId === s.cohortId && x.notes && (x.notes.vocabulary || []).length && new Date(x.at) < new Date(s.at); }).pop() : null;
    var lang = s ? (window.AlimunData.langCode(cohortOf(s.cohortId).language) || 'en') : 'en';
    var side = '';
    if (s) {
      side = '<aside class="cl-live__side card tc-side"><h2 class="t-h3">' + esc(t('app_tc_chat_h')) + '</h2><div class="ms-msgs tc-msgs" data-msgs><p class="t-small">' + esc(t('app_tc_chat_loading')) + '</p></div>' +
        '<form class="ms-form" data-tc-chat><label class="sr" for="tc-in">' + esc(t('app_ms_write')) + '</label><textarea id="tc-in" class="ms-in" rows="1" maxlength="4000" placeholder="' + esc(t('app_ms_write')) + '" dir="auto"></textarea>' +
        '<button class="btn btn--primary btn--sm" type="submit">' + esc(t('app_ms_send')) + '</button></form>' +
        (last ? '<h2 class="t-h3" style="margin-top:18px">' + esc(t('app_tc_last_words')) + '</h2><dl class="lb-wl">' + last.notes.vocabulary.slice(0, 12).map(function (v) { return '<div><dt lang="' + esc(lang) + '" dir="ltr">' + esc(v.word) + '</dt><dd>' + esc(v.definition || '') + '</dd></div>'; }).join('') + '</dl>' : '') +
        '</aside>';
    }
    return '<div class="cl-live"><div class="cl-live__top"><a class="rd-back" href="#/classes">' + A.icon('back') + '<span>' + esc(t('app_cl_leave')) + '</span></a>' +
      '<h1 class="t-h2">' + esc(title) + '</h1>' + (s ? '<a class="btn btn--ghost btn--sm" href="#/classes/notes/' + esc(s.id) + '">' + esc(t('app_tc_write_notes')) + '</a>' : b ? '<a class="btn btn--ghost btn--sm" href="#/classes/oto/' + esc(b.id) + '">' + esc(t('app_tc_write_note')) + '</a>' : '') + '</div>' +
      '<div class="cl-live__body"><div class="cl-live__frame" data-frame><div class="cl-live__wait"><div class="loader" style="--w:64px" aria-hidden="true">' + A.loaderInner() + '</div><p class="t-body" data-livemsg>' + esc(t('app_tc_opening')) + '</p></div></div>' +
      side + '</div></div>';
  }
  function loadDaily() {
    if (window.DailyIframe) return Promise.resolve(window.DailyIframe);
    return new Promise(function (ok, no) {
      var s = document.createElement('script');
      s.src = DAILY_JS; s.async = true; s.crossOrigin = 'anonymous';
      s.onload = function () { window.DailyIframe ? ok(window.DailyIframe) : no(new Error('Daily did not load')); };
      s.onerror = function () { no(new Error('Daily did not load')); };
      document.head.appendChild(s);
    });
  }
  function liveSay(k, extra) {
    var m = root.querySelector('[data-livemsg]');
    if (m) m.textContent = extra ? t(k) + ' ' + extra : t(k);
    var w = root.querySelector('.cl-live__wait .loader'); if (w) w.remove();
  }
  function join(kind, id) {
    if (C.sample) { liveSay('app_tc_sample_join'); return; }
    var body = kind === 'b' ? { bookingId: id } : { sessionId: id };
    window.AlimunData.token().then(function (tok) {
      return fetch('/api/join-session', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + tok }, body: JSON.stringify(body) });
    }).then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok) throw { message: j.message || j.error || '' }; return j; }); })
      .then(function (j) {
        var url = safeUrl(j.url);
        if (!url) throw { message: '' };
        return loadDaily().then(function (D) {
          var box = root.querySelector('[data-frame]');
          if (!box) return;
          box.innerHTML = '';
          leave();
          call = D.createFrame(box, { iframeStyle: { width: '100%', height: '100%', border: '0', borderRadius: '20px', background: '#080808' }, showLeaveButton: true, showFullscreenButton: true });
          call.on('left-meeting', function () { leave(); if (location.hash.indexOf('#/classes/live') === 0) location.hash = '#/classes'; });
          return call.join(j.token ? { url: url, token: j.token } : { url: url });
        });
      }).catch(function (e) { liveSay('app_tc_join_error', e && e.message ? e.message : null); });
  }
  function leave() {
    if (!call) return;
    var c = call; call = null;
    try { var p = c.leave(); if (p && p.catch) p.catch(function () {}); } catch (e) { /* already gone */ }
    try { c.destroy(); } catch (e) { /* already gone */ }
  }
  /* The class conversation beside the video (step 13 tables): opened through open_thread, refreshed every 6 seconds */
  function chatStart(cohortId) {
    var box = function () { return root.querySelector('[data-msgs]'); };
    if (C.sample) {
      C.chat = { id: null, me: 'me', msgs: [{ id: 'm1', sender_user: 'x', sender_role: 'student', sender_name: 'Mei', body: 'Guten Abend! I will be two minutes late.', created_at: new Date(Date.now() - 4 * MIN).toISOString() }] };
      drawChat(true);
      return;
    }
    Promise.all([window.AlimunData.openThread('class', cohortId), window.AlimunData.userId()]).then(function (r) {
      C.chat = { id: r[0], me: r[1], msgs: [] };
      return window.AlimunData.threadMessages(r[0]).then(function (m) { C.chat.msgs = m; drawChat(true); window.AlimunData.markRead(r[0]).catch(function () {}); });
    }).catch(function () { var b = box(); if (b) b.innerHTML = '<p class="t-small">' + esc(t('app_tc_chat_error')) + '</p>'; });
    poll = setInterval(function () {
      if (!C.chat || !C.chat.id || document.hidden) return;
      var lastAt = C.chat.msgs.length ? C.chat.msgs[C.chat.msgs.length - 1].created_at : null;
      window.AlimunData.threadMessages(C.chat.id, lastAt).then(function (m) {
        if (!m.length || !C.chat) return;
        var have = {}; C.chat.msgs.forEach(function (x) { have[x.id] = true; });
        m.forEach(function (x) { if (!have[x.id]) C.chat.msgs.push(x); });
        drawChat(false);
        window.AlimunData.markRead(C.chat.id).catch(function () {});
      }).catch(function () { /* try again on the next tick */ });
    }, 6000);
  }
  function drawChat(stick) {
    var b = root.querySelector('[data-msgs]');
    if (!b || !C.chat) return;
    var atEnd = b.scrollHeight - b.scrollTop - b.clientHeight < 60;
    b.innerHTML = C.chat.msgs.length ? C.chat.msgs.map(function (m) {
      var mine = m.sender_user === C.chat.me;
      return '<div class="ms-msg' + (mine ? ' is-me' : '') + (m.sender_role === 'teacher' ? ' is-teacher' : '') + '">' + (mine ? '' : '<p class="ms-msg__who">' + esc(m.sender_name) + '</p>') +
        '<div class="ms-bub" dir="auto">' + esc(m.body).replace(/\n/g, '<br>') + '</div><p class="ms-msg__time">' + esc(time(m.created_at)) + '</p></div>';
    }).join('') : '<p class="t-small">' + esc(t('app_tc_chat_empty')) + '</p>';
    if (stick || atEnd) b.scrollTop = b.scrollHeight;
  }
  function chatSend(form) {
    var ta = form.querySelector('textarea'), body = ta.value.trim();
    if (!body || !C.chat) return;
    ta.value = '';
    if (C.sample) { C.chat.msgs.push({ id: 'l' + Date.now(), sender_user: 'me', sender_role: 'teacher', sender_name: '', body: body, created_at: new Date().toISOString() }); drawChat(true); return; }
    window.AlimunData.sendMessage(C.chat.id, body).then(function (m) { if (m && C.chat) { C.chat.msgs.push(m); drawChat(true); } }, function () { ta.value = body; });
  }

  /* ---------- Class notes ---------- */
  function splitFocus(g) { g = String(g || ''); var i = g.indexOf('\n\n'); return i < 0 ? [g, ''] : [g.slice(0, i), g.slice(i + 2)]; }
  /* The class's next date after this one, as the default due date for homework */
  function nextDue(s) {
    var n = C.sessions.filter(function (x) { return x.cohortId === s.cohortId && x.status !== 'cancelled' && new Date(x.at) > new Date(s.at); })[0];
    return dayKey(n ? n.at : new Date(s.at).getTime() + 7 * DAY);
  }
  function notesView(id) {
    var s = sessionOf(id);
    if (!s) return missingView();
    var n = s.notes || {}, f = splitFocus(n.grammar_focus), words = (n.vocabulary || []).slice(0, MAX_WORDS);
    if (!words.length) words = [{}];
    var st = notesState(s), co = cohortOf(s.cohortId), lang = window.AlimunData.langCode(co.language) || 'en';
    var html = '<a class="rd-back" href="#/classes">' + A.icon('back') + '<span>' + esc(t('app_t_nav_classes')) + '</span></a>' +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_tc_notes_h', { class: A.className(co) })) + '</h1><p class="t-lead">' + esc(longDay(s.at) + ', ' + time(s.at)) + '</p></div></div>' +
      '<div class="grid rise"><form class="card span-8 st-form tc-notes" style="--i:0;max-width:none" data-notes="' + esc(s.id) + '" novalidate>' +
      '<fieldset class="st-field"><legend class="st-lbl">' + esc(t('app_tc_words')) + '</legend><p class="t-small st-hint">' + esc(t('app_tc_words_p')) + '</p><div class="tc-words" data-words>' +
        words.map(function (w, i) { return wordRow(w, i, lang); }).join('') + '</div>' +
        '<div class="btn-row"><button class="btn btn--quiet btn--sm" type="button" data-tc="addword"' + (words.length >= MAX_WORDS ? ' disabled' : '') + '>' + A.icon('plus') + esc(t('app_tc_add_word')) + '</button></div></fieldset>' +
      field('app_tc_g_title', '<input class="st-in" name="g_title" maxlength="200" value="' + esc(f[0]) + '" lang="' + esc(lang) + '" dir="auto" required>', 'app_tc_g_title_p') +
      field('app_tc_g_text', '<textarea class="st-in tc-ta" name="g_text" rows="4" maxlength="4000" dir="auto">' + esc(f[1]) + '</textarea>') +
      field('app_tc_did', '<textarea class="st-in tc-ta" name="exercises" rows="3" maxlength="4000" dir="auto">' + esc(n.exercises || '') + '</textarea>') +
      '<div class="st-row">' + field('app_tc_hw', '<textarea class="st-in tc-ta" name="homework" rows="3" maxlength="4000" dir="auto">' + esc(n.homework || '') + '</textarea>') +
        field('app_tc_due', '<input class="st-in" type="date" name="due_date" value="' + esc(n.due_date || nextDue(s)) + '">') + '</div>' +
      field('app_tc_note', '<textarea class="st-in tc-ta" name="teacher_note" rows="3" maxlength="4000" dir="auto">' + esc(n.teacher_note || '') + '</textarea>') +
      '<p class="t-small st-msg" data-saved aria-live="polite">' + esc(n.id ? t('app_tc_saved_draft') : '') + '</p></form>';
    var pdf = n.pdf_url ? safeUrl(n.pdf_url) : null;
    html += '<section class="card card--forest span-4 tc-pub" style="--i:1" aria-labelledby="h-pub"><h2 class="t-h2" id="h-pub">' + esc(t(st === 'published' ? 'app_tc_pub_done_h' : 'app_tc_pub_h')) + '</h2>' +
      '<p class="t-body" style="margin-top:10px">' + esc(t(st === 'published' ? 'app_tc_pub_again_p' : 'app_tc_pub_p')) + '</p>' +
      (st === 'published' ? '<p class="t-small" style="margin-top:8px">' + esc(t('app_tc_pub_when', { when: longDay(n.published_at) + ', ' + time(n.published_at) })) + '</p>' : '') +
      '<div class="btn-row" style="margin-top:20px;flex-direction:column;align-items:flex-start"><button class="btn btn--lime" type="button" data-tc="publish">' + esc(t(st === 'published' ? 'app_tc_pub_again' : 'app_tc_pub')) + '</button>' +
      (pdf ? '<a class="btn btn--ghost btn--on-forest btn--sm" href="' + esc(pdf) + '" target="_blank" rel="noopener">' + esc(t('app_tc_pdf')) + '</a>' : '') + '</div>' +
      '<p class="t-body st-msg st-msg--light" data-pubmsg aria-live="polite"></p></section>' + sampleLine() + '</div>';
    return html;
  }
  function wordRow(w, i, lang) {
    return '<div class="tc-word" data-word><input class="st-in" name="w_word" maxlength="200" placeholder="' + esc(t('app_tc_w_word')) + '" aria-label="' + esc(t('app_tc_w_word')) + '" value="' + esc(w.word || '') + '" lang="' + esc(lang || 'en') + '" dir="auto">' +
      '<input class="st-in" name="w_def" dir="auto" maxlength="500" placeholder="' + esc(t('app_tc_w_def')) + '" aria-label="' + esc(t('app_tc_w_def')) + '" value="' + esc(w.definition || '') + '">' +
      '<input class="st-in" name="w_ex" maxlength="500" placeholder="' + esc(t('app_tc_w_ex')) + '" aria-label="' + esc(t('app_tc_w_ex')) + '" value="' + esc(w.example || '') + '" lang="' + esc(lang || 'en') + '" dir="auto">' +
      '<button class="btn btn--quiet btn--sm tc-word__x" type="button" data-tc="delword" aria-label="' + esc(t('app_tc_del_word')) + '">' + A.icon('minus') + '</button></div>';
  }
  function field(label, control, hint) {
    return '<label class="st-field"><span class="st-lbl">' + esc(t(label)) + '</span>' + control + (hint ? '<span class="t-small st-hint">' + esc(t(hint)) + '</span>' : '') + '</label>';
  }
  function readNotes(form) {
    var f = new FormData(form), words = [];
    form.querySelectorAll('[data-word]').forEach(function (r) {
      var w = r.querySelector('[name="w_word"]').value.trim(), d = r.querySelector('[name="w_def"]').value.trim(), e = r.querySelector('[name="w_ex"]').value.trim();
      if (w && d) words.push({ word: w, definition: d, example: e });
    });
    var title = String(f.get('g_title') || '').trim(), text = String(f.get('g_text') || '').trim();
    return { vocabulary: words, grammar_focus: text ? title + '\n\n' + text : title, title: title, exercises: String(f.get('exercises') || '').trim(),
      homework: String(f.get('homework') || '').trim(), due_date: f.get('due_date') || null, teacher_note: String(f.get('teacher_note') || '').trim(),
      halfWords: [].some.call(form.querySelectorAll('[data-word]'), function (r) { return !!r.querySelector('[name="w_word"]').value.trim() !== !!r.querySelector('[name="w_def"]').value.trim(); }) };
  }
  function saveDraft(form, now) {
    clearTimeout(saveTimer);
    var run = function () {
      var s = sessionOf(form.getAttribute('data-notes')), n = readNotes(form), msg = form.querySelector('[data-saved]');
      if (!s) return Promise.resolve();
      if (C.sample) { s.notes = Object.assign({}, s.notes || { id: 'n' + Date.now(), published_at: null, pdf_url: null }, n); if (msg) msg.textContent = t('app_tc_saved_sample'); return Promise.resolve(s.notes); }
      if (msg) msg.textContent = t('app_tc_saving');
      return window.AlimunData.saveNotes(s.id, n).then(function (row) {
        s.notes = row;
        if (msg) { msg.textContent = t('app_tc_saved_at', { time: time(Date.now()) }); msg.classList.remove('is-bad'); }
        return row;
      }, function (e) {
        if (msg) { msg.textContent = t('app_tc_save_error'); msg.classList.add('is-bad'); }
        console.warn('[Alimun] Notes not saved', e && e.message);
        throw e;
      });
    };
    if (now) return run();
    saveTimer = setTimeout(run, 1200);
    return null;
  }
  function publish(btn) {
    var form = root.querySelector('[data-notes]'), out = root.querySelector('[data-pubmsg]');
    var n = readNotes(form), say = function (k, bad) { out.textContent = t(k); out.classList.toggle('is-bad', !!bad); };
    if (!n.title) { say('app_tc_need_title', true); form.querySelector('[name="g_title"]').focus(); return; }
    if (n.halfWords) { say('app_tc_half_words', true); return; }
    btn.disabled = true;
    say('app_tc_publishing');
    var s = sessionOf(form.getAttribute('data-notes'));
    saveDraft(form, true).then(function (row) {
      if (C.sample) { s.notes.published_at = new Date().toISOString(); return { sample: true }; }
      return window.AlimunData.publishNotes(row.id);
    }).then(function (res) {
      if (!C.sample && res) { s.notes.published_at = s.notes.published_at || new Date().toISOString(); s.notes.pdf_url = res.pdf_url || s.notes.pdf_url; }
      btn.disabled = false;
      A.rerender();
      setTimeout(function () { var o = root.querySelector('[data-pubmsg]'); if (o) o.textContent = t(C.sample ? 'app_tc_published_sample' : 'app_tc_published'); }, 60);
    }).catch(function (e) {
      btn.disabled = false;
      say('app_tc_pub_error', true);
      console.warn('[Alimun] Notes not published', e && e.message);
    });
  }

  /* ---------- 1:1 note ---------- */
  var OTO_ERRORS = { too_early: 'app_tc_oto_e_early', cancelled: 'app_tc_oto_e_cancelled', bad_note: 'app_tc_oto_e_note', not_found: 'app_tc_oto_e_missing' };
  function otoView(id) {
    var b = bookingOf(id);
    if (!b) return missingView();
    var early = new Date(b.at).getTime() > Date.now();
    return '<a class="rd-back" href="#/classes">' + A.icon('back') + '<span>' + esc(t('app_t_nav_classes')) + '</span></a>' +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(otoTitle(b)) + '</h1><p class="t-lead">' + esc(longDay(b.at) + ', ' + time(b.at) + ', ' + t('app_t_minutes', { n: b.minutes })) + '</p></div></div>' +
      '<div class="grid rise"><form class="card span-8 st-form" style="--i:0;max-width:none" data-oto="' + esc(b.id) + '">' +
      field('app_tc_oto_note', '<textarea class="st-in tc-ta" name="note" rows="8" maxlength="4000" dir="auto" required' + (early ? ' disabled' : '') + '>' + esc(b.note || '') + '</textarea>', 'app_tc_oto_note_p') +
      '<div class="btn-row"><button class="btn btn--primary" type="submit"' + (early ? ' disabled' : '') + '>' + esc(t('app_tc_oto_save')) + '</button>' +
      (otoOpen(b) ? '<a class="btn btn--ghost" href="#/classes/live/b/' + esc(b.id) + '">' + A.icon('play') + esc(t('app_tc_join')) + '</a>' : '') + '</div>' +
      '<p class="t-body st-msg" data-msg aria-live="polite">' + esc(early ? t('app_tc_oto_e_early') : '') + '</p></form>' +
      '<section class="stage span-4" style="--i:1;background:var(--t-mint)" aria-hidden="true"><div class="bub say">' + esc(t('app_tc_oto_bub')) + '</div>' + A.Cast.drawing('parrot') + '</section>' + sampleLine() + '</div>';
  }
  function saveOto(form) {
    var b = bookingOf(form.getAttribute('data-oto')), note = String(new FormData(form).get('note') || '').trim(), msg = form.querySelector('[data-msg]');
    var say = function (k, bad) { msg.textContent = t(k); msg.classList.toggle('is-bad', !!bad); };
    if (!note) { say('app_tc_oto_e_note', true); return; }
    if (C.sample) { b.note = note; say('app_tc_saved_sample'); return; }
    var btn = form.querySelector('[type="submit"]'); btn.disabled = true;
    window.AlimunData.otoNote(b.id, note).then(function () { b.note = note; b.status = 'completed'; btn.disabled = false; say('app_tc_oto_saved'); },
      function (e) { btn.disabled = false; say(OTO_ERRORS[(e.body || {}).error] || 'app_tc_save_error', true); });
  }

  /* ---------- Create a class ---------- */
  /* Start times (half hours, in the class's zone) where a 60-minute class fits an availability block in every one of
     the twelve weeks that will be scheduled; the server checks the same (AlimunTZ, js/tz.js) */
  function classZone() {
    var n = {};
    C.slots.forEach(function (s) { var z = s.timezone || 'UTC'; n[z] = (n[z] || 0) + 1; });
    return Object.keys(n).sort(function (a, b) { return n[b] - n[a]; })[0] || A.browserZone();
  }
  function fitTimes(day) {
    C.fit = C.fit || {};
    if (C.fit[day]) return C.fit[day];
    var TZ = window.AlimunTZ, out = {}, zone = classZone();
    if (!TZ) return (C.fit[day] = out);
    for (var m = 0; m + 60 <= 1440; m += 30) {
      var occ = TZ.scheduleOccurrences([day], TZ.fmtMinutes(m), zone);
      if (occ.length && occ.every(function (o) { return TZ.fitsSlot(o, 60, C.slots); })) out[m] = true;
    }
    return (C.fit[day] = out);
  }
  function commonTimes(days) {
    var common = null;
    days.forEach(function (d) { var f = fitTimes(d); common = common === null ? Object.keys(f).map(Number) : common.filter(function (m) { return f[m]; }); });
    return (common || []).sort(function (a, b) { return a - b; });
  }
  function newView() {
    var html = '<a class="rd-back" href="#/classes">' + A.icon('back') + '<span>' + esc(t('app_t_nav_classes')) + '</span></a>' +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_tc_new_h')) + '</h1><p class="t-lead">' + esc(t('app_tc_new_lead')) + '</p></div></div>';
    if (!C.slots.length) {
      return html + '<div class="soon rise"><div class="stage" style="--i:0;background:var(--t-sun)"><div class="bub think">' + esc(t('app_tc_noslots_bub')) + '</div>' + A.Cast.drawing('snail') + '</div>' +
        '<div class="card" style="--i:1"><h2 class="t-h2">' + esc(t('app_tc_noslots_h')) + '</h2><p class="t-body">' + esc(t('app_tc_noslots_p')) + '</p>' +
        '<div class="btn-row"><a class="btn btn--primary" href="#/classes/availability">' + esc(t('app_tc_avail')) + '</a></div></div></div>';
    }
    var open = C.cohorts.filter(function (c) { return c.status === 'open' || c.status === 'full'; }).length;
    var langs = (C.teacher.languages || []).filter(function (l) { return SERVER_LANGS.indexOf(l) > -1; });
    if (!langs.length) langs = SERVER_LANGS;
    var days = WEEK.filter(function (d) { return Object.keys(fitTimes(d)).length; });
    var zone = classZone();
    html += '<div class="grid rise"><form class="card span-8 st-form" style="--i:0;max-width:none" data-new novalidate>' +
      (open >= 4 ? '<p class="t-body st-msg is-bad">' + esc(t('app_tc_limit')) + '</p>' : '') +
      '<div class="st-row">' + field('app_st_course', sel('language', langs.map(function (l) { return [l, A.languageName(l)]; }))) + field('app_st_level', sel('level', LEVELS.map(function (l) { return [l, l]; }), 'B1')) + '</div>' +
      '<div class="st-row">' + field('app_tc_goal', sel('goal_track', Object.keys(GOALS).map(function (g) { return [g, t(GOALS[g])]; }))) +
        field('app_tc_plan', sel('tier', Object.keys(PLANS).map(function (p) { return [p, t('app_tc_plan_opt', { plan: t(PLAN_KEYS[p]), n: PLANS[p] })]; }), 'focused')) + '</div>' +
      '<fieldset class="st-field"><legend class="st-lbl">' + esc(t('app_tc_days')) + '</legend>' +
        (days.length ? '<div class="st-days">' + days.map(function (d) { return '<label class="st-day"><input type="checkbox" name="day" value="' + d + '"><span>' + esc(A.weekday(d)) + '</span></label>'; }).join('') + '</div>'
          : '<p class="t-body">' + esc(t('app_tc_nodays')) + '</p>') + '</fieldset>' +
      field('app_tc_time', '<select class="st-in" name="time" data-times disabled><option value="">' + esc(t('app_tc_pick_days')) + '</option></select>', null) +
      '<p class="t-small st-note">' + esc(t('app_tc_zone', { zone: zone.replace(/_/g, ' ') })) + '</p>' +
      field('app_tc_desc', '<textarea class="st-in tc-ta" name="description" rows="3" maxlength="2000" dir="auto"></textarea>', 'app_tc_desc_p') +
      '<div class="btn-row"><button class="btn btn--primary" type="submit"' + (open >= 4 ? ' disabled' : '') + '>' + esc(t('app_tc_create')) + '</button></div>' +
      '<p class="t-body st-msg" data-msg aria-live="polite"></p></form>' +
      '<section class="stage span-4" style="--i:1;background:var(--t-lime)" aria-hidden="true"><div class="bub say">' + esc(t('app_tc_new_bub')) + '</div>' + A.Cast.drawing('mug') + '</section>' + sampleLine() + '</div>';
    return html;
  }
  function sel(name, opts, cur) {
    return '<select class="st-in" name="' + name + '">' + opts.map(function (o) { return '<option value="' + esc(o[0]) + '"' + (String(o[0]) === String(cur || '') ? ' selected' : '') + '>' + esc(o[1]) + '</option>'; }).join('') + '</select>';
  }
  function refreshTimes(form) {
    var days = [].map.call(form.querySelectorAll('[name="day"]:checked'), function (c) { return +c.value; });
    var s = form.querySelector('[data-times]'), TZ = window.AlimunTZ;
    if (!days.length) { s.innerHTML = '<option value="">' + esc(t('app_tc_pick_days')) + '</option>'; s.disabled = true; return; }
    var list = commonTimes(days);
    s.disabled = !list.length;
    s.innerHTML = list.length ? list.map(function (m) { return '<option value="' + TZ.fmtMinutes(m) + '">' + esc(TZ.fmtMinutes(m) + ' – ' + TZ.fmtMinutes(m + 60)) + '</option>'; }).join('')
      : '<option value="">' + esc(t('app_tc_no_common')) + '</option>';
  }
  function createClass(form) {
    var f = new FormData(form), msg = form.querySelector('[data-msg]');
    var say = function (k, bad, extra) { msg.textContent = t(k) + (extra ? ' ' + extra : ''); msg.classList.toggle('is-bad', !!bad); };
    var days = f.getAll('day').map(Number), at = f.get('time');
    if (!days.length) { say('app_tc_need_days', true); return; }
    if (!at) { say('app_tc_need_time', true); return; }
    var body = { language: f.get('language'), level: f.get('level'), goal_track: f.get('goal_track'), tier: f.get('tier'), description: String(f.get('description') || '').trim() || null,
      schedule_days: days.map(function (d) { return DAY_NAMES[d]; }), schedule_time: at, timezone: classZone() };
    if (C.sample) { say('app_tc_created_sample'); return; }
    var btn = form.querySelector('[type="submit"]'); btn.disabled = true;
    say('app_tc_creating');
    window.AlimunData.createClass(body).then(function (res) {
      C.flash = A.tn('app_tc_created_n', res.sessionsGenerated || 0);
      return reload();
    }).then(function () { location.hash = '#/classes'; }, function (e) {
      btn.disabled = false;
      /* The server's own explanation (English) follows the translated sentence */
      say('app_tc_create_error', true, e && e.message && e.status === 400 ? e.message : '');
    });
  }

  /* ---------- Availability ---------- */
  function availView() {
    var bz = A.browserZone(), other = C.slots.some(function (s) { return s.timezone && s.timezone !== bz; });
    var html = '<a class="rd-back" href="#/classes">' + A.icon('back') + '<span>' + esc(t('app_t_nav_classes')) + '</span></a>' +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_tc_avail')) + '</h1><p class="t-lead">' + esc(t('app_tc_avail_lead')) + '</p></div></div><div class="grid rise">' +
      '<section class="card span-7" style="--i:0" aria-labelledby="h-week"><h2 class="t-h2" id="h-week">' + esc(t('app_tc_week_h')) + '</h2>' +
      (other ? '<p class="t-small st-msg is-bad" style="margin-top:8px">' + esc(t('app_tc_zone_warn', { zone: bz.replace(/_/g, ' ') })) + '</p>' : '') + '<div class="tt-week">';
    WEEK.forEach(function (d) {
      var list = C.slots.filter(function (s) { return s.day_of_week === d; });
      html += '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(A.weekday(d)) + '</span><span>' +
        (list.length ? list.map(function (s) {
          return '<span class="tc-slot"><b>' + esc(hm(s.start_time) + ' – ' + hm(s.end_time)) + '</b>' + (s.timezone && s.timezone !== bz ? ' <small>' + esc(s.timezone.replace(/_/g, ' ')) + '</small>' : '') +
            ' <button class="linkish" type="button" data-tc="delslot" data-id="' + esc(s.id) + '">' + esc(t('app_tc_remove')) + '</button></span>';
        }).join('') : '<small>' + esc(t('app_tc_free_none')) + '</small>') + '</span></div>';
    });
    html += '</div><p class="t-small st-msg" data-slotmsg aria-live="polite"></p></section>' +
      '<form class="card span-5 st-form" style="--i:1;max-width:none;margin-top:0" data-slot><h2 class="t-h2">' + esc(t('app_tc_add_h')) + '</h2>' +
      field('app_tc_day', sel('day', WEEK.map(function (d) { return [d, A.weekday(d)]; }), 1)) +
      '<div class="st-row">' + field('app_st_from', '<input class="st-in" type="time" name="start" step="1800" value="09:00" required>') + field('app_st_to', '<input class="st-in" type="time" name="end" step="1800" value="13:00" required>') + '</div>' +
      '<p class="t-small st-note" style="margin-top:0">' + esc(t('app_tc_in_zone', { zone: bz.replace(/_/g, ' ') })) + '</p>' +
      '<div class="btn-row"><button class="btn btn--primary" type="submit">' + esc(t('app_tc_add')) + '</button></div><p class="t-body st-msg" data-msg aria-live="polite"></p></form>' +
      sampleLine() + '</div>';
    return html;
  }
  function addSlot(form) {
    var f = new FormData(form), day = +f.get('day'), a = String(f.get('start') || ''), b = String(f.get('end') || ''), msg = form.querySelector('[data-msg]');
    var say = function (k, bad) { msg.textContent = t(k); msg.classList.toggle('is-bad', !!bad); };
    if (!/^\d\d:\d\d$/.test(a) || !/^\d\d:\d\d$/.test(b) || a >= b) { say('app_tc_slot_order', true); return; }
    var tz = A.browserZone();
    if (C.sample) { C.slots.push({ id: 'a' + Date.now(), day_of_week: day, start_time: a + ':00', end_time: b + ':00', timezone: tz }); C.fit = null; A.rerender(); return; }
    var btn = form.querySelector('[type="submit"]'); btn.disabled = true;
    window.AlimunData.addSlot(C.teacher.id, day, a, b, tz).then(function (row) { C.slots.push(row); C.fit = null; A.rerender(); },
      function (e) { btn.disabled = false; say(e && e.code === '23505' ? 'app_tc_slot_dup' : 'app_tc_save_error', true); });
  }
  function delSlot(btn) {
    var id = btn.getAttribute('data-id'), msg = root.querySelector('[data-slotmsg]');
    if (btn.getAttribute('data-sure') !== '1') { btn.setAttribute('data-sure', '1'); btn.textContent = t('app_tc_remove_sure'); return; }
    var drop = function () { C.slots = C.slots.filter(function (s) { return s.id !== id; }); C.fit = null; A.rerender(); };
    if (C.sample) { drop(); return; }
    btn.disabled = true;
    window.AlimunData.removeSlot(id).then(drop, function () { btn.disabled = false; if (msg) { msg.textContent = t('app_tc_save_error'); msg.classList.add('is-bad'); } });
  }

  function missingView() {
    return '<a class="rd-back" href="#/classes">' + A.icon('back') + '<span>' + esc(t('app_t_nav_classes')) + '</span></a>' +
      '<div class="soon rise"><div class="stage" style="--i:0;background:var(--t-coral)"><div class="bub think">' + esc(t('app_book_error_bub')) + '</div>' + A.Cast.drawing('cat') + '</div>' +
      '<div class="card" style="--i:1"><p class="t-body">' + esc(t('app_tc_missing')) + '</p><div class="btn-row"><a class="btn btn--primary" href="#/classes">' + esc(t('app_t_nav_classes')) + '</a></div></div></div>';
  }

  /* ---------- Events ---------- */
  function bind() {
    if (root.__tclasses) return;
    root.__tclasses = true;
    root.addEventListener('click', function (e) {
      if (!C) return;
      var el = e.target.closest('[data-tc]');
      if (!el || el.disabled) return;
      var a = el.getAttribute('data-tc');
      if (a === 'month') { var d = +el.getAttribute('data-d'); C.month = { y: C.month.y + Math.floor((C.month.m + d) / 12), m: ((C.month.m + d) % 12 + 12) % 12 }; redrawCal(); }
      else if (a === 'day') { C.day = el.getAttribute('data-day'); redrawCal(); var b = root.querySelector('[data-day="' + C.day + '"]'); if (b) b.focus({ preventScroll: true }); }
      else if (a === 'addword') {
        var box = root.querySelector('[data-words]');
        box.insertAdjacentHTML('beforeend', wordRow({}, 0, (box.querySelector('[name="w_word"]') || {}).lang));
        if (box.children.length >= MAX_WORDS) el.disabled = true;
        box.lastElementChild.querySelector('input').focus();
      }
      else if (a === 'delword') {
        var form = el.closest('form'), rows = form.querySelectorAll('[data-word]');
        if (rows.length > 1) el.closest('[data-word]').remove(); else el.closest('[data-word]').querySelectorAll('input').forEach(function (i) { i.value = ''; });
        form.querySelector('[data-tc="addword"]').disabled = false;
        saveDraft(form);
      }
      else if (a === 'publish') publish(el);
      else if (a === 'delslot') delSlot(el);
    });
    root.addEventListener('input', function (e) { var f = e.target.closest('[data-notes]'); if (f && C) saveDraft(f); });
    root.addEventListener('change', function (e) { var f = e.target.closest('[data-new]'); if (f && e.target.name === 'day') refreshTimes(f); });
    root.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey && e.target.matches('[data-tc-chat] textarea')) { e.preventDefault(); chatSend(e.target.form); }
    });
    root.addEventListener('submit', function (e) {
      if (!C) return;
      var f = e.target;
      if (f.hasAttribute('data-tc-chat')) { e.preventDefault(); chatSend(f); }
      else if (f.hasAttribute('data-oto')) { e.preventDefault(); saveOto(f); }
      else if (f.hasAttribute('data-new')) { e.preventDefault(); createClass(f); }
      else if (f.hasAttribute('data-slot')) { e.preventDefault(); addSlot(f); }
      else if (f.hasAttribute('data-notes')) e.preventDefault();
    });
  }
  function redrawCal() {
    var el = root.querySelector('.cal');
    if (el) { el.outerHTML = calendarHtml(); var n = root.querySelector('.cal'); n.style.animation = 'none'; }
  }
  function reload() { return load().then(function (d) { var keep = { month: C.month, day: C.day, flash: C.flash }; C = Object.assign(d, keep); }); }

  /* Leaving the section or the classroom: stop the call, the chat and the timers; save a notes draft not yet saved */
  function reset() {
    leave();
    if (poll) { clearInterval(poll); poll = null; }
    if (tick) { clearInterval(tick); tick = null; }
    if (saveTimer) { clearTimeout(saveTimer); saveTimer = null; var f = root && root.querySelector('[data-notes]'); if (f) saveDraft(f, true).catch(function () {}); }
    if (C) C.chat = null;
    document.body.classList.remove('is-reading');
  }

  var mountNo = 0;
  function mount(view, parts, helpers) {
    var my = ++mountNo;
    A = helpers; root = view;
    bind();
    reset();
    var first = !C;
    root.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + esc(t('app_book_loading')) + '">' + A.loaderInner() + '</div></div>';
    return (first ? load().then(function (d) { var now = new Date(); C = d; C.month = { y: now.getFullYear(), m: now.getMonth() }; C.day = dayKey(now); }) : Promise.resolve()).then(function () {
      if (my !== mountNo) return { stale: true };
      var p0 = parts[0], html, title = t('app_t_nav_classes');
      if (p0 === 'live') html = liveView(parts[1] === 'b' ? 'b' : 's', parts[1] === 'b' ? parts[2] : parts[1]);
      else if (p0 === 'notes') html = notesView(parts[1]);
      else if (p0 === 'oto') html = otoView(parts[1]);
      else if (p0 === 'new') { html = newView(); title = t('app_tc_new_h'); }
      else if (p0 === 'availability') { html = availView(); title = t('app_tc_avail'); }
      else html = timetableView();
      root.innerHTML = html;
      if (!p0 && C.flash) { root.querySelector('.view__head').insertAdjacentHTML('afterend', '<p class="t-body st-msg tc-flash" role="status">' + esc(C.flash) + '</p>'); C.flash = null; }
      if (p0 === 'live') {
        var kind = parts[1] === 'b' ? 'b' : 's', id = kind === 'b' ? parts[2] : parts[1];
        join(kind, id);
        var s = kind === 's' ? sessionOf(id) : null;
        if (s) chatStart(s.cohortId);
      }
      if (!p0) tick = setInterval(function () {
        var el = root.querySelector('[data-countdown]');
        if (!el) return;
        var s = C.sessions.filter(function (x) { return x.at === el.getAttribute('data-countdown'); })[0];
        if (s) el.textContent = countdown(s);
      }, 30000);
      return { title: title };
    }).catch(function (e) {
      console.warn('[Alimun] Classes did not load', e && e.message);
      if (my === mountNo) root.innerHTML = missingView();
      return { stale: true };
    });
  }

  window.AlimunTeachClasses = { mount: mount, reset: reset, refresh: function () { if (C && !C.sample) return reload(); return Promise.resolve(); } };
})();
