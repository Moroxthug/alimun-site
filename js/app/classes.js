/* Alimun app: live classes and the calendar (docs/DASHBOARD_PLAN.md, step 10).
   The student's group classes and 1:1s: the next class with Join (open 15 minutes before until 90 minutes after the
   start, like /api/join-session), the classroom in the dashboard (Daily Prebuilt, room and token from
   /api/join-session, which also records attendance), a month calendar with classes, homework due dates and 1:1s,
   the 1:1 follow-ups and private classes (booking, cancelling and joining through /api/enroll?action=oto-*, the
   rules in api/_lib/one-on-one.js), the teacher's notes of each class with its PDF, and the class words, which are
   copied into the flashcards (vocab_reviews) as the class dashboard does.
   Times are shown in the student's time zone (student_profiles.timezone, else this device's).
   Sample data (signed out or ?sample=1): a German B1 class, nothing is sent anywhere.
   Routes: #/classes, #/classes/live/<session>, #/classes/live/b/<booking>. Interface text: app_cl_* keys. */
(function () {
  'use strict';
  var A = null, root = null, C = null, call = null;
  var DAY = 86400000, MIN = 60000;
  var OPEN_BEFORE = 15, CLOSE_AFTER = 90, LESSON = 60;
  var DAILY_JS = 'https://unpkg.com/@daily-co/daily-js@0.79.0/dist/daily-iframe.js';
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function signedIn() { return A.mode() === 'real' && A.data().profile.id; }

  /* ---------- Time ---------- */
  function zone() {
    var tz = A.data().profile.timezone;
    try { if (tz && tz !== 'UTC') { new Intl.DateTimeFormat('en', { timeZone: tz }); return tz; } } catch (e) { /* not a time zone */ }
    try { return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'; } catch (e) { return 'UTC'; }
  }
  function fmt(iso, o) { return new Intl.DateTimeFormat(A.locale, Object.assign({ timeZone: zone() }, o)).format(new Date(iso)); }
  function when(iso) { return fmt(iso, { weekday: 'long', day: 'numeric', month: 'long' }) + ', ' + fmt(iso, { hour: '2-digit', minute: '2-digit' }); }
  function time(iso) { return fmt(iso, { hour: '2-digit', minute: '2-digit' }); }
  /* The calendar day of a moment in the student's time zone, as YYYY-MM-DD */
  function dayOf(iso) {
    var p = {};
    new Intl.DateTimeFormat('en-CA', { timeZone: zone(), year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date(iso)).forEach(function (x) { p[x.type] = x.value; });
    return p.year + '-' + p.month + '-' + p.day;
  }
  function inFrom(iso) {
    var m = Math.round((Date.parse(iso) - Date.now()) / MIN);
    if (m <= 0) return t('app_cl_now');
    if (m < 60) return A.tn('app_cl_in_min', m);
    if (m < 48 * 60) return A.tn('app_cl_in_h', Math.round(m / 60));
    return A.tn('app_cl_in_days', Math.round(m / 1440));
  }
  function joinable(iso, minutes) {
    var s = Date.parse(iso), now = Date.now();
    return now >= s - OPEN_BEFORE * MIN && now <= s + Math.max(CLOSE_AFTER, minutes || 0) * MIN;
  }

  /* ---------- Data ---------- */
  function sample() {
    var now = Date.now(), d0 = new Date(); d0.setHours(18, 30, 0, 0);
    var day = function (n) { return new Date(d0.getTime() + n * DAY).toISOString(); };
    var de = (A.data().profile.language || 'German') === 'German';
    var words = de
      ? [[{ word: 'die Wohnung', definition: 'flat, apartment', example: 'Die Wohnung hat drei Zimmer.' }, { word: 'umziehen', definition: 'to move house', example: 'Wir ziehen im Mai um.' }, { word: 'die Miete', definition: 'rent' }],
        [{ word: 'sich bewerben', definition: 'to apply (for a job)', example: 'Ich bewerbe mich um die Stelle.' }, { word: 'der Lebenslauf', definition: 'CV, résumé' }]]
      : [[{ word: 'landlord', definition: 'the owner of a flat you rent' }, { word: 'deposit', definition: 'money you pay before you move in' }], [{ word: 'to apply for', definition: 'to ask formally for a job' }, { word: 'shortlist', definition: 'the final list of candidates' }]];
    var sessions = [], notes = [];
    [-13, -11, -6, -4, 1, 3, 8, 10, 15, 17].forEach(function (n, i) { sessions.push({ id: 's' + i, cohort_id: 'c1', scheduled_at: day(n), status: n < 0 ? 'completed' : 'scheduled' }); });
    notes.push({ id: 'n1', session_id: 's3', vocabulary: words[1], grammar_focus: de ? 'Nebensätze mit weil und obwohl' : 'Linking ideas: although and because', homework: de ? 'Schreiben Sie eine kurze Bewerbung (80 Wörter).' : 'Write a short job application (80 words).', due_date: day(2).slice(0, 10), teacher_note: de ? 'Sehr gute Fragen heute. Achten Sie auf das Verb am Ende.' : 'Great questions today. Watch the word order after although.', pdf_url: null, published_at: day(-4), sessions: { scheduled_at: day(-4) } });
    notes.push({ id: 'n2', session_id: 's2', vocabulary: words[0], grammar_focus: de ? 'Wohnungssuche: Fragen stellen' : 'Asking about a flat', homework: null, due_date: null, teacher_note: null, exercises: de ? 'Rollenspiel: ein Anruf beim Vermieter.' : 'Role play: calling a landlord.', pdf_url: null, published_at: day(-6), sessions: { scheduled_at: day(-6) } });
    return {
      cohorts: [{ id: 'c1', language: A.data().profile.language || 'German', level: A.data().profile.level || 'B1', tier: 'intensive', teacher_id: 't1' }],
      sessions: sessions, notes: notes,
      homework: [{ id: 'h1', cohort_id: 'c1', title: de ? 'Eine Bewerbung schreiben' : 'A job application', due_date: day(2).slice(0, 10) }],
      bookings: [{ id: 'b1', kind: 'followup', scheduled_at: new Date(d0.getTime() - 3 * DAY - 7.5 * 3600000).toISOString(), duration_minutes: 20, status: 'completed', teacher_note: de ? 'Gute Aussprache. Üben Sie die Wortstellung im Nebensatz.' : 'Good pronunciation. Practise word order in clauses.', teacher_id: 't1' }],
      attended: ['s2', 's3'], teachers: { t1: 'Jonas' },
      oto: { teacher: { name: 'Jonas' }, followup: { minutes: 20, canBook: true, reason: null }, credit: { minutes: 60, credits: 2, canBook: true, reason: null } },
      sample: true
    };
  }
  function load() {
    if (!signedIn()) return Promise.resolve(sample());
    var p = A.data().profile;
    return window.AlimunData.classes(p.id, p.cohorts || []).then(function (d) {
      /* Class words go to the flashcards, quietly */
      window.AlimunData.syncClassWords(p.id, d.notes).catch(function (e) { console.warn('[Alimun] Class words not copied', e && e.message); });
      return oto('oto-status', {}).then(function (st) { d.oto = st; return d; }, function () { d.oto = null; return d; });
    });
  }
  function oto(action, body) {
    return window.AlimunData.token().then(function (tok) {
      return fetch('/api/enroll', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + tok }, body: JSON.stringify(Object.assign({ action: action }, body)) });
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok) throw { message: j.message || '', code: j.error || r.status }; return j; });
    });
  }

  /* ---------- The page ---------- */
  function upcoming() {
    var now = Date.now();
    var list = C.sessions.filter(function (s) { return s.status !== 'cancelled' && Date.parse(s.scheduled_at) + CLOSE_AFTER * MIN > now; }).map(function (s) { return { type: 'class', at: s.scheduled_at, id: s.id, cohort: s.cohort_id, minutes: LESSON }; });
    C.bookings.filter(function (b) { return b.status === 'booked' && Date.parse(b.scheduled_at) + (b.duration_minutes || 60) * MIN > now; })
      .forEach(function (b) { list.push({ type: 'oto', at: b.scheduled_at, id: b.id, kind: b.kind, minutes: b.duration_minutes || 60, booking: b }); });
    return list.sort(function (a, b) { return Date.parse(a.at) - Date.parse(b.at); });
  }
  function cohortName(id) {
    var co = C.cohorts.filter(function (x) { return x.id === id; })[0];
    return co ? t('app_cl_class_of', { course: A.languageName(co.language) + ' ' + co.level }) : t('app_cl_class');
  }
  function teacherOf(cohortId) {
    var co = C.cohorts.filter(function (x) { return x.id === cohortId; })[0];
    return co && C.teachers[co.teacher_id] || '';
  }

  function pageView() {
    var up = upcoming(), next = up[0];
    var html = (window.AlimunFind ? AlimunFind.takeFlash() : '') + '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_classes')) + '</h1><p class="t-lead">' + esc(t('app_cl_lead')) + '</p></div>' +
      '<p class="t-small cl-zone">' + esc(t('app_cl_zone', { zone: zone().replace(/_/g, ' ') })) + '</p></div><div class="grid rise">';
    var offer = A.data().offer;
    if (offer && window.AlimunFind) html += AlimunFind.offerHtml(offer, 0);
    if (!C.cohorts.length && !C.bookings.length) {
      html += '<section class="stage span-4" style="--i:0;background:var(--t-mint)" aria-hidden="true"><div class="bub think">' + esc(t('app_cl_none_bub')) + '</div>' + A.Cast.drawing('mug') + '</section>' +
        '<section class="card span-8" style="--i:1"><h2 class="t-h2">' + esc(t('app_cl_none_h')) + '</h2><p class="t-body" style="margin-top:8px">' + esc(t('app_cl_none_p')) + '</p>' +
        '<div class="btn-row" style="margin-top:20px"><a class="btn btn--primary" href="#/classes/find">' + esc(t('app_cl_find')) + A.icon('arrow') + '</a></div></section>';
    } else {
      html += nextHtml(next);
      html += '<section class="stage span-4" style="--i:1;background:var(--t-lime)" aria-hidden="true"><div class="bub say">' + esc(t(next && joinable(next.at, next.minutes) ? 'app_cl_bub_now' : 'app_cl_bub')) + '</div>' + A.Cast.drawing('mug') + '</section>';
      html += upcomingHtml(up.slice(next ? 1 : 0, 6));
      html += calendarHtml();
      html += otoHtml();
      html += notesHtml();
      html += wordsHtml();
      var mine = C.cohorts.filter(function (co) { return (A.data().profile.cohorts || []).indexOf(co.id) > -1; })[0] || (C.sample ? C.cohorts[0] : null);
      if (mine && window.AlimunFind) html += AlimunFind.yourClassHtml(mine, C.teachers[mine.teacher_id] || '', 7);
      else if (window.AlimunFind) html += '<section class="card card--bone span-12" style="--i:7"><div class="card__row" style="flex-wrap:wrap"><p class="t-body" style="flex:1;min-width:220px">' + esc(t('app_fd_no_group')) + '</p><a class="btn btn--ghost btn--sm" href="#/classes/find">' + esc(t('app_cl_find')) + '</a></div></section>';
    }
    if (C.sample) html += '<p class="t-tiny span-12" style="margin-top:4px">' + esc(t('app_cl_sample')) + '</p>';
    return html + '</div>';
  }
  function nextHtml(n) {
    if (!n) {
      return '<section class="card card--forest span-8 cover-card" style="--i:0"><h2 class="t-h1">' + esc(t('app_cl_next_none_h')) + '</h2><p class="t-lead" style="margin-top:12px">' + esc(t('app_cl_next_none_p')) + '</p></section>';
    }
    var open = joinable(n.at, n.minutes);
    var title = n.type === 'class' ? cohortName(n.cohort) : t(n.kind === 'followup' ? 'app_cl_oto_followup' : 'app_cl_oto_private');
    var who = n.type === 'class' ? teacherOf(n.cohort) : (C.teachers[n.booking.teacher_id] || '');
    return '<section class="card card--forest span-8 cover-card cl-next" style="--i:0" aria-labelledby="h-next">' +
      '<h2 class="t-h1" id="h-next">' + esc(title) + '</h2>' +
      '<p class="t-lead" style="margin-top:12px">' + esc(when(n.at)) + (who ? ' · ' + esc(t('app_cl_with', { name: who })) : '') + '</p>' +
      '<p class="t-body cl-next__in"><span data-countdown="' + esc(n.at) + '">' + esc(inFrom(n.at)) + '</span>' + (open ? ' · ' + esc(t('app_cl_next_open')) : '') + '</p>' +
      '<div class="btn-row" style="margin-top:22px">' + joinBtn(n, true) +
      '<button class="btn btn--on-forest" type="button" data-cl="ics">' + esc(t('app_cl_add_cal')) + '</button>' +
      (n.type === 'oto' && Date.parse(n.at) - Date.now() > 120 * MIN ? '<button class="btn btn--on-forest" type="button" data-cl="cancel" data-id="' + esc(n.id) + '">' + esc(t('app_cl_cancel')) + '</button>' : '') + '</div>' +
      (open ? '' : '<p class="t-small cl-next__note">' + esc(t('app_cl_join_when', { n: OPEN_BEFORE })) + '</p>') + '<div data-cancelbox></div></section>';
  }
  function joinBtn(n, big) {
    var open = joinable(n.at, n.minutes);
    var href = '#/classes/live/' + (n.type === 'oto' ? 'b/' : '') + esc(n.id);
    /* In the list, Join only appears once the class is open */
    if (!open && !big) return '';
    return open ? '<a class="btn ' + (big ? 'btn--lime' : 'btn--primary btn--sm') + '" href="' + href + '">' + esc(t('app_cl_join')) + A.icon('arrow') + '</a>'
      : '<span class="btn btn--lime is-off" aria-disabled="true">' + esc(t('app_cl_join')) + '</span>';
  }
  function upcomingHtml(list) {
    if (!list.length) return '';
    return '<section class="card span-12 cl-up" style="--i:2"><h2 class="t-h2">' + esc(t('app_cl_up_h')) + '</h2><ul class="qunits__list">' + list.map(function (n) {
      var title = n.type === 'class' ? cohortName(n.cohort) : t(n.kind === 'followup' ? 'app_cl_oto_followup' : 'app_cl_oto_private');
      return '<li><div><b>' + esc(when(n.at)) + '</b><span>' + esc(title + ', ' + A.tn('app_cl_minutes', n.minutes)) + '</span></div>' + joinBtn(n) +
        (n.type === 'oto' && Date.parse(n.at) - Date.now() > 120 * MIN ? '<button class="btn btn--ghost btn--sm" type="button" data-cl="cancel" data-id="' + esc(n.id) + '">' + esc(t('app_cl_cancel')) + '</button>' : '') + '</li>';
    }).join('') + '</ul><div data-cancelbox></div></section>';
  }

  /* ---------- Calendar ---------- */
  function events() {
    var out = {};
    var add = function (day, e) { (out[day] = out[day] || []).push(e); };
    C.sessions.forEach(function (s) { if (s.status !== 'cancelled') add(dayOf(s.scheduled_at), { kind: 'class', at: s.scheduled_at, text: cohortName(s.cohort_id), done: C.attended.indexOf(s.id) > -1 }); });
    C.homework.forEach(function (h) { add(h.due_date, { kind: 'hw', text: t('app_cl_hw_due', { title: h.title }) }); });
    C.notes.forEach(function (n) { if (n.homework && n.due_date) add(n.due_date, { kind: 'hw', text: t('app_cl_hw_due', { title: n.homework }) }); });
    C.bookings.forEach(function (b) { if (b.status !== 'cancelled') add(dayOf(b.scheduled_at), { kind: 'oto', at: b.scheduled_at, text: t(b.kind === 'followup' ? 'app_cl_oto_followup' : 'app_cl_oto_private') }); });
    return out;
  }
  function calendarHtml() {
    var ev = events(), m = C.month, first = new Date(Date.UTC(m.y, m.m, 1)), today = dayOf(new Date().toISOString());
    var lead = (first.getUTCDay() + 6) % 7, days = new Date(Date.UTC(m.y, m.m + 1, 0)).getUTCDate();
    var names = [];
    for (var k = 0; k < 7; k++) names.push(new Intl.DateTimeFormat(A.locale, { weekday: 'short', timeZone: 'UTC' }).format(new Date(Date.UTC(2024, 0, 1 + k))));
    var cells = '';
    for (var i = 0; i < lead; i++) cells += '<span class="cal__cell is-pad" aria-hidden="true"></span>';
    for (var d = 1; d <= days; d++) {
      var key = m.y + '-' + ('0' + (m.m + 1)).slice(-2) + '-' + ('0' + d).slice(-2), list = ev[key] || [];
      var kinds = {}; list.forEach(function (e) { kinds[e.kind] = true; });
      cells += '<button class="cal__cell' + (key === today ? ' is-today' : '') + (key === C.day ? ' is-on' : '') + (list.length ? ' has-ev' : '') + '" type="button" data-cl="day" data-day="' + key + '" aria-pressed="' + (key === C.day) + '"' +
        ' aria-label="' + esc(new Intl.DateTimeFormat(A.locale, { day: 'numeric', month: 'long', timeZone: 'UTC' }).format(new Date(key + 'T12:00:00Z')) + (list.length ? ': ' + list.map(function (e) { return e.text; }).join(', ') : '')) + '">' +
        '<span>' + d + '</span><i class="cal__dots">' + ['class', 'hw', 'oto'].filter(function (x) { return kinds[x]; }).map(function (x) { return '<b class="dot dot--' + x + '"></b>'; }).join('') + '</i></button>';
    }
    var title = new Intl.DateTimeFormat(A.locale, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(first);
    var sel = ev[C.day] || [];
    return '<section class="card span-12 cal" style="--i:3" aria-labelledby="h-cal"><div class="cal__top"><h2 class="t-h2" id="h-cal">' + esc(t('app_cl_cal_h')) + '</h2>' +
      '<div class="cal__nav"><button class="btn btn--quiet btn--sm" type="button" data-cl="month" data-d="-1" aria-label="' + esc(t('app_cl_prev_month')) + '">' + A.icon('back') + '</button>' +
      '<b class="cal__month">' + esc(title) + '</b><button class="btn btn--quiet btn--sm" type="button" data-cl="month" data-d="1" aria-label="' + esc(t('app_cl_next_month')) + '">' + A.icon('arrow') + '</button></div></div>' +
      '<p class="t-small cal__key"><b class="dot dot--class"></b>' + esc(t('app_cl_key_class')) + ' <b class="dot dot--hw"></b>' + esc(t('app_cl_key_hw')) + ' <b class="dot dot--oto"></b>' + esc(t('app_cl_key_oto')) + '</p>' +
      '<div class="cal__grid" role="group" aria-label="' + esc(title) + '">' + names.map(function (n) { return '<span class="cal__wd" aria-hidden="true">' + esc(n) + '</span>'; }).join('') + cells + '</div>' +
      '<div class="cal__day" aria-live="polite"><h3 class="t-h3">' + esc(new Intl.DateTimeFormat(A.locale, { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' }).format(new Date(C.day + 'T12:00:00Z'))) + '</h3>' +
      (sel.length ? sel.map(function (e) {
        return '<p class="cal__ev"><b class="dot dot--' + e.kind + '"></b><span>' + (e.at ? '<b>' + esc(time(e.at)) + '</b> ' : '') + esc(e.text) + (e.done ? ' · ' + esc(t('app_cl_attended')) : '') + '</span></p>';
      }).join('') : '<p class="t-body cal__none">' + esc(t('app_cl_day_none')) + '</p>') + '</div></section>';
  }

  /* ---------- 1:1s ---------- */
  function reasonText(part) {
    if (!part || !part.reasonCode && !part.reason) return '';
    var K = { not_active: 'app_cl_r_not_active', no_teacher: 'app_cl_r_no_teacher', before_first_lesson: 'app_cl_r_first', booked: 'app_cl_r_booked', window_closed: 'app_cl_r_closed', before_lesson_end: 'app_cl_r_after', join_class_first: 'app_cl_r_join' };
    return K[part.reasonCode] ? t(K[part.reasonCode]) : part.reason || '';
  }
  function otoHtml() {
    var st = C.oto;
    var past = C.bookings.filter(function (b) { return b.teacher_note; }).slice(-3).reverse();
    if (!st || (!st.followup && !st.credit && !past.length)) return '';
    var html = '<section class="card span-12 cl-oto" style="--i:4" aria-labelledby="h-oto"><h2 class="t-h2" id="h-oto">' + esc(t('app_cl_oto_h')) + '</h2>';
    if (st.followup) {
      html += '<div class="cl-oto__row"><div><h3 class="t-h3">' + esc(t('app_cl_oto_followup')) + '</h3><p class="t-body">' + esc(t('app_cl_followup_p', { n: st.followup.minutes })) + '</p>' +
        (reasonText(st.followup) ? '<p class="t-small cl-oto__why">' + esc(reasonText(st.followup)) + '</p>' : '') + '</div>' +
        (st.followup.canBook ? '<button class="btn btn--primary btn--sm" type="button" data-cl="pick" data-kind="followup">' + esc(t('app_cl_book')) + '</button>' : '') + '</div>';
    }
    if (st.credit) {
      html += '<div class="cl-oto__row"><div><h3 class="t-h3">' + esc(t('app_cl_oto_private')) + '</h3><p class="t-body">' + esc(A.tn('app_cl_credits', st.credit.credits)) + '</p>' +
        (reasonText(st.credit) ? '<p class="t-small cl-oto__why">' + esc(reasonText(st.credit)) + '</p>' : '') + '</div>' +
        (st.credit.canBook ? '<button class="btn btn--primary btn--sm" type="button" data-cl="pick" data-kind="credit">' + esc(t('app_cl_book')) + '</button>' : '') + '</div>';
    }
    html += '<div data-picker></div>';
    if (past.length) {
      html += '<h3 class="t-h3 cl-oto__notes-h">' + esc(t('app_cl_oto_notes_h')) + '</h3>' + past.map(function (b) {
        return '<div class="cl-note-mini"><p class="t-small"><b>' + esc(when(b.scheduled_at)) + '</b></p><p class="t-body" dir="auto">' + esc(b.teacher_note) + '</p></div>';
      }).join('');
    }
    return html + '</section>';
  }
  function pickerHtml(kind, slots, part) {
    var head = '<div class="cl-pick" tabindex="-1"><h3 class="t-h3">' + esc(t(kind === 'followup' ? 'app_cl_pick_followup' : 'app_cl_pick_private', { n: part ? part.minutes : 60 })) + '</h3>';
    if (!slots.length) return head + '<p class="t-body">' + esc(t('app_cl_no_slots')) + '</p><div class="btn-row"><button class="btn btn--quiet btn--sm" type="button" data-cl="closepick">' + esc(t('app_cl_close')) + '</button></div></div>';
    var byDay = {}, order = [];
    slots.forEach(function (iso) { var d = dayOf(iso); if (!byDay[d]) { byDay[d] = []; order.push(d); } byDay[d].push(iso); });
    return head + '<p class="t-small">' + esc(t('app_cl_times_in', { zone: zone().replace(/_/g, ' ') })) + '</p>' + order.map(function (d) {
      return '<div class="cl-pick__day"><p class="cl-pick__d">' + esc(fmt(byDay[d][0], { weekday: 'long', day: 'numeric', month: 'long' })) + '</p><div class="cl-pick__times">' +
        byDay[d].map(function (iso) { return '<button class="opt opt--sm" type="button" data-cl="slot" data-kind="' + kind + '" data-at="' + esc(iso) + '">' + esc(time(iso)) + '</button>'; }).join('') + '</div></div>';
    }).join('') + '<div data-confirm></div><div class="btn-row"><button class="btn btn--quiet btn--sm" type="button" data-cl="closepick">' + esc(t('app_cl_close')) + '</button></div></div>';
  }
  function openPicker(kind) {
    var box = root.querySelector('[data-picker]');
    box.innerHTML = '<div class="cl-pick"><div class="loader" style="--w:40px" aria-hidden="true">' + A.loaderInner() + '</div><p class="t-small">' + esc(t('app_cl_finding')) + '</p></div>';
    var got = C.sample ? Promise.resolve(sampleSlots(kind)) : oto('oto-status', { kind: kind });
    got.then(function (st) {
      box.innerHTML = pickerHtml(kind, st.slots || [], st[kind]);
      var p = box.querySelector('.cl-pick'); if (p) p.focus({ preventScroll: true });
      box.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'nearest' });
    }, function (e) { box.innerHTML = '<p class="t-body cl-err">' + esc(e.message || t('app_cl_error')) + '</p>'; });
  }
  function sampleSlots(kind) {
    var out = [], d = new Date(); d.setMinutes(0, 0, 0);
    for (var day = 1; day <= 3; day++) [9, 10, 14, 17].forEach(function (h) { var x = new Date(d.getTime() + day * DAY); x.setHours(h, kind === 'followup' ? 20 : 0); out.push(x.toISOString()); });
    var st = { slots: out }; st[kind] = C.oto[kind];
    return st;
  }
  function confirmSlot(kind, iso) {
    var box = root.querySelector('[data-confirm]');
    root.querySelectorAll('[data-cl="slot"]').forEach(function (b) { b.classList.toggle('is-picked', b.getAttribute('data-at') === iso); });
    box.innerHTML = '<div class="mt-confirm"><p class="t-body">' + esc(t('app_cl_confirm', { when: when(iso) })) + '</p><div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-cl="book" data-kind="' + kind + '" data-at="' + esc(iso) + '">' + esc(t('app_cl_book_yes')) + '</button></div></div>';
    box.querySelector('[data-cl="book"]').focus();
  }
  function book(kind, iso, btn) {
    btn.disabled = true;
    var done = function () {
      A.rerender();
      setTimeout(function () { var u = root.querySelector('.cl-up, .cl-next'); if (u) u.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' }); }, 400);
    };
    if (C.sample) {
      SAMPLE_BOOKED.push({ id: 'sb' + SAMPLE_BOOKED.length, kind: kind, scheduled_at: iso, duration_minutes: kind === 'followup' ? 20 : 60, status: 'booked', teacher_id: 't1' });
      return done();
    }
    oto('oto-book', { kind: kind, start: iso }).then(done, function (e) {
      btn.disabled = false;
      var box = root.querySelector('[data-confirm]');
      box.innerHTML = '<p class="t-body cl-err">' + esc(e.code === 'slot_taken' ? t('app_cl_taken') : e.message || t('app_cl_error')) + '</p>';
      if (e.code === 'slot_taken') setTimeout(function () { openPicker(kind); }, 1500);
    });
  }
  function askCancel(id, from) {
    var box = from.closest('section').querySelector('[data-cancelbox]');
    box.innerHTML = '<div class="mt-confirm"><p class="t-body">' + esc(t('app_cl_cancel_q')) + '</p><div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-cl="cancelyes" data-id="' + esc(id) + '">' + esc(t('app_cl_cancel_yes')) + '</button>' +
      '<button class="btn btn--quiet btn--sm" type="button" data-cl="cancelno">' + esc(t('app_cl_keep')) + '</button></div></div>';
    box.querySelector('[data-cl="cancelyes"]').focus();
  }
  function cancel(id, btn) {
    btn.disabled = true;
    if (C.sample) { SAMPLE_BOOKED = SAMPLE_BOOKED.filter(function (b) { return b.id !== id; }); return A.rerender(); }
    oto('oto-cancel', { id: id }).then(function (r) {
      FLASH = r.creditReturned ? 'app_cl_credit_back' : 'app_cl_cancelled';
      A.rerender();
    }, function (e) { btn.disabled = false; btn.closest('[data-cancelbox]').innerHTML = '<p class="t-body cl-err">' + esc(e.message || t('app_cl_error')) + '</p>'; });
  }
  var SAMPLE_BOOKED = [], FLASH = null;

  /* ---------- Notes and words ---------- */
  function safeUrl(u) { try { var x = new URL(String(u)); return x.protocol === 'https:' ? x.href : ''; } catch (e) { return ''; } }
  function notesHtml() {
    var ta = ' lang="' + (window.AlimunData.langCode((C.cohorts[0] || {}).language) || 'en') + '" dir="ltr"';
    var list = C.notes.slice(0, 12);
    var html = '<section class="card span-12 cl-notes" style="--i:5" aria-labelledby="h-notes"><h2 class="t-h2" id="h-notes">' + esc(t('app_cl_notes_h')) + '</h2>';
    if (!list.length) return html + '<p class="t-body" style="margin-top:8px">' + esc(t('app_cl_notes_none')) + '</p></section>';
    html += '<p class="t-body" style="margin-top:6px">' + esc(t('app_cl_notes_p')) + '</p>';
    return html + list.map(function (n, i) {
      var at = n.sessions && n.sessions.scheduled_at || n.published_at, pdf = n.pdf_url && safeUrl(n.pdf_url);
      var words = Array.isArray(n.vocabulary) ? n.vocabulary.filter(function (v) { return v && v.word; }) : [];
      return '<details class="cl-note"' + (i === 0 ? ' open' : '') + '><summary><b>' + esc(fmt(at, { weekday: 'long', day: 'numeric', month: 'long' })) + '</b>' + (n.grammar_focus ? '<span' + ta + '>' + esc(n.grammar_focus) + '</span>' : '') + '</summary><div class="cl-note__body">' +
        (n.teacher_note ? '<div class="cl-note__teacher"><h4>' + esc(t('app_cl_note_teacher')) + '</h4><p' + ta + '>' + esc(n.teacher_note) + '</p></div>' : '') +
        (n.exercises ? '<div><h4>' + esc(t('app_cl_note_ex')) + '</h4><p' + ta + '>' + esc(n.exercises) + '</p></div>' : '') +
        (n.homework ? '<div><h4>' + esc(t('app_cl_note_hw')) + '</h4><p' + ta + '>' + esc(n.homework) + (n.due_date ? ' <span class="t-small">' + esc(t('app_cl_due', { date: new Intl.DateTimeFormat(A.locale, { day: 'numeric', month: 'long', timeZone: 'UTC' }).format(new Date(n.due_date + 'T12:00:00Z')) })) + '</span>' : '') + '</p></div>' : '') +
        (words.length ? '<div><h4>' + esc(t('app_cl_note_words')) + '</h4><dl class="lb-wl">' + words.map(function (v) { return '<div><dt' + ta + '>' + esc(v.word) + '</dt><dd>' + esc(v.definition || '') + (v.example ? '<br><i' + ta + '>' + esc(v.example) + '</i>' : '') + '</dd></div>'; }).join('') + '</dl></div>' : '') +
        (pdf ? '<a class="btn btn--ghost btn--sm" href="' + esc(pdf) + '" target="_blank" rel="noopener">' + esc(t('app_cl_pdf')) + '</a>' : '') +
        '</div></details>';
    }).join('') + '</section>';
  }
  function wordsHtml() {
    var n = 0, seen = {};
    C.notes.forEach(function (x) { (Array.isArray(x.vocabulary) ? x.vocabulary : []).forEach(function (v) { var k = String(v && v.word || '').toLowerCase(); if (k && !seen[k]) { seen[k] = true; n++; } }); });
    if (!n) return '';
    return '<a class="card card--mint span-12 cl-words" href="#/cards" style="--i:6"><div class="card__row"><div class="card__art">' + (A.Cast.spot ? A.Cast.spot('books') : A.Cast.drawing('owl')) + '</div><div>' +
      '<h2 class="t-h2">' + esc(t('app_cl_words_h')) + '</h2><p class="t-body" style="margin-top:8px">' + esc(A.tn('app_cl_words_p', n)) + '</p></div></div></a>';
  }

  /* ---------- Add to calendar (.ics) ---------- */
  function ics() {
    var stamp = function (iso) { return new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z'); };
    var lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Alimun//Classes//EN', 'CALSCALE:GREGORIAN'];
    upcoming().forEach(function (n) {
      var title = n.type === 'class' ? cohortName(n.cohort) : t(n.kind === 'followup' ? 'app_cl_oto_followup' : 'app_cl_oto_private');
      lines.push('BEGIN:VEVENT', 'UID:' + n.id + '@alimun.com', 'DTSTAMP:' + stamp(new Date().toISOString()), 'DTSTART:' + stamp(n.at), 'DTEND:' + stamp(new Date(Date.parse(n.at) + n.minutes * MIN).toISOString()),
        'SUMMARY:Alimun: ' + String(title).replace(/[,;\\]/g, ' '), 'URL:https://alimun.com/app/preview#/classes', 'END:VEVENT');
    });
    lines.push('END:VCALENDAR');
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([lines.join('\r\n')], { type: 'text/calendar' }));
    a.download = 'alimun-classes.ics';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
  }

  /* ---------- The classroom ---------- */
  function liveView(kind, id) {
    document.body.classList.add('is-reading');
    var item = kind === 'b' ? C.bookings.filter(function (b) { return b.id === id; })[0] : C.sessions.filter(function (s) { return s.id === id; })[0];
    var title = !item ? t('app_cl_class') : kind === 'b' ? t(item.kind === 'followup' ? 'app_cl_oto_followup' : 'app_cl_oto_private') : cohortName(item.cohort_id);
    var latest = C.notes.filter(function (n) { return Array.isArray(n.vocabulary) && n.vocabulary.length; })[0];
    var ta = ' lang="' + (window.AlimunData.langCode((C.cohorts[0] || {}).language) || 'en') + '" dir="ltr"';
    return '<div class="cl-live"><div class="cl-live__top"><a class="rd-back" href="#/classes">' + A.icon('back') + '<span>' + esc(t('app_cl_leave')) + '</span></a>' +
      '<h1 class="t-h2">' + esc(title) + '</h1></div>' +
      '<div class="cl-live__body"><div class="cl-live__frame" data-frame><div class="cl-live__wait"><div class="loader" style="--w:64px" aria-hidden="true">' + A.loaderInner() + '</div><p class="t-body" data-livemsg>' + esc(t('app_cl_joining')) + '</p></div></div>' +
      (latest ? '<aside class="cl-live__side card"><h2 class="t-h3">' + esc(t('app_cl_live_words')) + '</h2><dl class="lb-wl">' + latest.vocabulary.slice(0, 12).map(function (v) { return '<div><dt' + ta + '>' + esc(v.word) + '</dt><dd>' + esc(v.definition || '') + '</dd></div>'; }).join('') + '</dl></aside>' : '') +
      '</div></div>';
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
  function say(k, extra) {
    var m = root.querySelector('[data-livemsg]');
    if (m) m.textContent = extra || t(k);
    var w = root.querySelector('.cl-live__wait .loader'); if (w) w.remove();
  }
  function join(kind, id) {
    if (C.sample) { say('app_cl_sample_join'); return; }
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
          leave(true);
          call = { frame: D.createFrame(box, { iframeStyle: { width: '100%', height: '100%', border: '0', borderRadius: '20px', background: '#080808' }, showLeaveButton: true, showFullscreenButton: true }), session: kind === 'b' ? null : id };
          call.frame.on('left-meeting', function () { leave(); if (location.hash.indexOf('#/classes/live') === 0) location.hash = '#/classes'; });
          return call.frame.join(j.token ? { url: url, token: j.token } : { url: url });
        });
      }).catch(function (e) { say('app_cl_join_error', e && e.message ? e.message : null); });
  }
  function leave(quiet) {
    if (!call) return;
    var c = call; call = null;
    try { var p = c.frame.leave(); if (p && p.catch) p.catch(function () {}); } catch (e) { /* already gone */ }
    try { c.frame.destroy(); } catch (e) { /* already gone */ }
    if (!quiet && c.session && signedIn()) window.AlimunData.leftClass(signedIn(), c.session).catch(function () {});
  }

  /* ---------- Errors ---------- */
  function errorView() {
    return '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_classes')) + '</h1></div></div>' +
      '<div class="soon rise"><div class="stage" style="--i:0;background:var(--t-coral)"><div class="bub think">' + esc(t('app_book_error_bub')) + '</div>' + A.Cast.drawing('cat') + '</div>' +
      '<div class="card" style="--i:1"><p class="t-body">' + esc(t('app_book_error')) + '</p><div class="btn-row"><a class="btn btn--primary" href="#/classes">' + esc(t('app_retry')) + '</a></div></div></div>';
  }

  /* ---------- Events ---------- */
  function redrawCal() {
    var el = root.querySelector('.cal');
    if (el) { el.outerHTML = calendarHtml(); var n = root.querySelector('.cal'); n.style.animation = 'none'; }
  }
  function bind() {
    if (root.__classes) return;
    root.__classes = true;
    root.addEventListener('click', function (e) {
      if (!C) return;
      var el = e.target.closest('[data-cl]');
      if (!el || el.disabled) return;
      var a = el.getAttribute('data-cl');
      if (a === 'month') { var d = +el.getAttribute('data-d'); C.month = { y: C.month.y + Math.floor((C.month.m + d) / 12), m: ((C.month.m + d) % 12 + 12) % 12 }; redrawCal(); }
      else if (a === 'day') { C.day = el.getAttribute('data-day'); redrawCal(); var b = root.querySelector('[data-day="' + C.day + '"]'); if (b) b.focus({ preventScroll: true }); }
      else if (a === 'pick') openPicker(el.getAttribute('data-kind'));
      else if (a === 'closepick') root.querySelector('[data-picker]').innerHTML = '';
      else if (a === 'slot') confirmSlot(el.getAttribute('data-kind'), el.getAttribute('data-at'));
      else if (a === 'book') book(el.getAttribute('data-kind'), el.getAttribute('data-at'), el);
      else if (a === 'cancel') askCancel(el.getAttribute('data-id'), el);
      else if (a === 'cancelno') el.closest('[data-cancelbox]').innerHTML = '';
      else if (a === 'cancelyes') cancel(el.getAttribute('data-id'), el);
      else if (a === 'ics') ics();
    });
    /* The countdown and the Join button follow the clock */
    setInterval(function () {
      if (!C || !root.querySelector('.cl-next')) return;
      var c = root.querySelector('[data-countdown]');
      if (c) c.textContent = inFrom(c.getAttribute('data-countdown'));
      var n = upcoming()[0];
      if (n && joinable(n.at, n.minutes) && root.querySelector('.cl-next .is-off')) A.rerender();
    }, 30000);
    window.addEventListener('pagehide', function () { leave(); });
  }

  /* ---------- Entry ---------- */
  var mountNo = 0;
  function mount(view, parts, helpers) {
    var my = ++mountNo;
    A = helpers; root = view;
    leave();
    bind();
    if (window.AlimunFind) AlimunFind.bind(view, helpers);
    document.body.classList.remove('is-reading');
    /* Finding a class, an offered place and reviews live in js/app/find.js */
    if (window.AlimunFind && AlimunFind.routes.indexOf(parts[0]) > -1) {
      view.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + esc(t('app_book_loading')) + '">' + A.loaderInner() + '</div></div>';
      return AlimunFind.mount(view, parts, helpers).then(function (res) {
        if (my !== mountNo) return { stale: true };
        view.innerHTML = res.html;
        return res;
      }, function (e) {
        console.warn('[Alimun] Finding a class did not load', e && e.message);
        if (my === mountNo) view.innerHTML = errorView();
        return { title: t('app_nav_classes') };
      });
    }
    view.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + esc(t('app_book_loading')) + '">' + A.loaderInner() + '</div></div>';
    var keep = C && { month: C.month, day: C.day };
    return load().then(function (d) {
      if (my !== mountNo) return { stale: true };
      C = d;
      if (C.sample) C.bookings = C.bookings.concat(SAMPLE_BOOKED);
      var today = dayOf(new Date().toISOString());
      C.month = keep ? keep.month : { y: +today.slice(0, 4), m: +today.slice(5, 7) - 1 };
      C.day = keep ? keep.day : today;
      if (parts[0] === 'live' && parts[1]) {
        var kind = parts[1] === 'b' ? 'b' : 's', id = kind === 'b' ? parts[2] : parts[1];
        return { html: liveView(kind, id), title: t('app_nav_classes'), live: { kind: kind, id: id } };
      }
      return { html: pageView(), title: t('app_nav_classes') };
    }).catch(function (e) {
      console.warn('[Alimun] Classes did not load', e && e.message);
      return { html: errorView(), title: t('app_nav_classes') };
    }).then(function (res) {
      if (res.stale || my !== mountNo) return { stale: true };
      view.innerHTML = res.html;
      if (res.live) join(res.live.kind, res.live.id);
      if (FLASH && root.querySelector('.cl-up, .cl-oto')) {
        var where = root.querySelector('.cl-oto') || root.querySelector('.cl-up');
        where.insertAdjacentHTML('afterbegin', '<p class="t-body cl-flash" role="status">' + esc(t(FLASH)) + '</p>');
        FLASH = null;
      }
      return res;
    });
  }
  function reset() { leave(); }

  window.AlimunClasses = { mount: mount, reset: reset, debug: function () { return C; } };
})();
