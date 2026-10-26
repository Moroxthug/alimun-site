/* Alimun teacher dashboard, Students (docs/DASHBOARD_PLAN.md, step 15, part 3). Routes under #/students:
     (none)        every student of the teacher's classes, class by class, with those who need attention first. The rules
                   (owner, 25 Oct 2026): no practice for 7 days, the last two classes missed, homework past its due date
                   and not handed in
     class/<id>    a class: attendance over the last eight weeks, where the class struggles (the course book lessons with
                   the most wrong answers in practice), how far each student is in the book, homework handed in and marks
     <id>          a student: the same counts the student sees on Progress (js/app/progress.js), homework with marks, and
                   the teachers' notes. A note is visible to the student, or private: only teachers and admins see it
                   (student_feedback.is_private, supabase/migrations/202610252200_private_teacher_notes.sql)
   Signed out or not a teacher: a sample, nothing is saved. Text: app_ts_* keys. */
(function () {
  'use strict';
  var A = null, root = null, S = null, cache = {};
  var DAY = 86400000;
  var LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  var GOALS = { foundations: 'app_st_goal_foundations', relocation: 'app_st_goal_relocation', professional: 'app_st_goal_professional', academic: 'app_st_goal_academic', pleasure: 'app_st_goal_pleasure' };

  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real'; }
  function pct(n) { return new Intl.NumberFormat(A.locale, { style: 'percent' }).format(n / 100); }
  function num(n) { return new Intl.NumberFormat(A.locale).format(n); }
  function shortDay(d) { return A.cap(A.fmt(d, { day: 'numeric', month: 'short' })); }
  function getJSON(u) { return fetch(u).then(function (r) { if (!r.ok) throw new Error(u); return r.json(); }); }
  function cohortOf(id) { return S.cohorts.filter(function (c) { return c.id === id; })[0] || {}; }
  function studentOf(id) { return S.students.filter(function (s) { return s.id === id; })[0] || null; }
  function today() { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  /* The course book for a class, with explanations in the dashboard's language when there are any */
  function bookFor(language, level) {
    var id = language + '-' + level, code = A.lang === 'ma' ? 'fr' : (['en', 'es', 'fr', 'de', 'pt', 'zh', 'ar', 'it'].indexOf(A.lang) > -1 ? A.lang : 'en');
    var k = id + '.' + code;
    if (!cache[k]) cache[k] = getJSON('/data/books/' + encodeURIComponent(k) + '.json').catch(function () { return code === 'en' ? null : getJSON('/data/books/' + encodeURIComponent(id + '.en') + '.json').catch(function () { return null; }); });
    return cache[k];
  }

  /* ---------- Sample: the teacher's two classes and their students ---------- */
  function sample() {
    var now = Date.now(), ago = function (d) { return new Date(now - d * DAY).toISOString(); };
    var cos = [
      { id: 'c1', language: 'German', level: 'B1', goal_track: 'relocation', tier: 'focused', max_students: 17, enrolled_count: 5, status: 'open' },
      { id: 'c2', language: 'German', level: 'A2', goal_track: 'foundations', tier: 'intensive', max_students: 6, enrolled_count: 3, status: 'open' }
    ];
    var people = [
      ['p1', 'Lukas Brandt', 'c1', 1, 140], ['p2', 'Mei Chen', 'c1', 0.2, 212], ['p3', 'Omar Haddad', 'c1', 9, 61], ['p4', 'Sara Rossi', 'c1', 2, 98], ['p5', 'Ines Duarte', 'c1', 3, 77],
      ['p6', 'Yuki Tanaka', 'c2', 0.5, 45], ['p7', 'Ahmed Benali', 'c2', 12, 20], ['p8', 'Clara Novak', 'c2', 4, 33]
    ];
    var students = people.map(function (p) { return { id: p[0], name: p[1], level: p[2] === 'c1' ? 'B1' : 'A2', language: 'German', cohorts: [p[2]], since: ago(70), oto: false, last: ago(p[3]), learned: p[4], cards: p[4] + 30 }; });
    var sessions = [], att = [];
    for (var w = 7; w >= 0; w--) {
      ['c1', 'c2'].forEach(function (c, ci) {
        var id = 's' + c + w;
        sessions.push({ id: id, cohort_id: c, scheduled_at: ago(w * 7 + 1 + ci * 2), status: 'completed' });
        students.forEach(function (s, i) {
          if (s.cohorts[0] !== c) return;
          var missed = (s.id === 'p3' && w < 2) || (s.id === 'p7' && (w + i) % 3 === 0) || ((w + i) % 7 === 0);
          if (!missed) att.push({ session_id: id, student_id: s.id });
        });
      });
    }
    var asg = [
      { id: 'a1', cohort_id: 'c1', title: 'Ein Brief an den Vermieter', type: 'Essay', due_date: ago(3).slice(0, 10), created_at: ago(10) },
      { id: 'a2', cohort_id: 'c1', title: 'Wohnungsanzeige lesen', type: 'Homework', due_date: ago(17).slice(0, 10), created_at: ago(24) },
      { id: 'a3', cohort_id: 'c2', title: 'Mein Wochenende', type: 'Speaking', due_date: ago(-2).slice(0, 10), created_at: ago(5) }
    ];
    var subs = [
      { assignment_id: 'a1', student_id: 'p1', status: 'graded', score: 82, submitted_at: ago(4) }, { assignment_id: 'a1', student_id: 'p2', status: 'pending', score: null, submitted_at: ago(3) },
      { assignment_id: 'a1', student_id: 'p4', status: 'graded', score: 74, submitted_at: ago(5) },
      { assignment_id: 'a2', student_id: 'p1', status: 'graded', score: 90, submitted_at: ago(18) }, { assignment_id: 'a2', student_id: 'p2', status: 'graded', score: 88, submitted_at: ago(18) },
      { assignment_id: 'a2', student_id: 'p3', status: 'graded', score: 61, submitted_at: ago(16) }, { assignment_id: 'a2', student_id: 'p4', status: 'graded', score: 79, submitted_at: ago(17) },
      { assignment_id: 'a2', student_id: 'p5', status: 'graded', score: 70, submitted_at: ago(17) }, { assignment_id: 'a3', student_id: 'p6', status: 'pending', score: null, submitted_at: ago(1) }
    ];
    return { sample: true, teacher: { id: 'tp', full_name: 'Ana Weber' }, cohorts: cos, students: students, sessions: sessions, attendance: att, assignments: asg, submissions: subs };
  }
  /* A sample student's practice built on the real course book, so lessons and units have their real names */
  function sampleStudent(st, book) {
    var now = Date.now(), ago = function (d) { return new Date(now - d * DAY).toISOString(); }, rows = [], items = [];
    if (book) {
      book.units.filter(function (u) { return !u.planned; }).slice(0, 3).forEach(function (u, ui) {
        (u.pages || []).forEach(function (p, pi) {
          if (ui === 2 && pi > 1) return;
          rows.push({ ex_key: 'book:' + book.id + ':' + u.id + ':' + p.id, done: true, graded_score: null, updated_at: ago(40 - ui * 12 - pi) });
          for (var i = 0; i < 6; i++) items.push({ item_key: book.id + ':' + u.id + ':' + p.id + ':' + i + ':0', seen: 2, wrong: (pi + i + ui) % 4 === 0 ? 1 : (pi === 1 && i < 4 ? 2 : 0), box: 2, last_at: ago(3) });
        });
        if (ui < 2) rows.push({ ex_key: 'book:' + book.id + ':' + u.id + ':test', done: true, graded_score: 78 + ui * 6, updated_at: ago(30 - ui * 12) });
      });
    }
    for (var i = 0; i < 16; i++) items.push({ item_key: 'listen:' + (book ? book.id : 'x') + ':' + i, seen: 1, wrong: i % 4 === 0 ? 1 : 0, box: 1, last_at: ago(2) });
    rows.push({ ex_key: 'mock:German-B1-goethe:lesen', done: true, graded_score: 71, updated_at: ago(6) });
    var subs = S.submissions.filter(function (x) { return x.student_id === st.id; }).map(function (x) {
      var a = S.assignments.filter(function (y) { return y.id === x.assignment_id; })[0] || {};
      return { status: x.status, score: x.score, submitted_at: x.submitted_at, graded_at: x.submitted_at, assignments: { title: a.title, type: a.type } };
    });
    var cards = []; for (i = 0; i < st.cards; i++) cards.push({ box: i < st.learned ? 4 : 1, last_reviewed_at: ago(i % 9) });
    return { profile: { id: st.id, full_name: st.name, level: st.level, language: st.language, goal_track: 'relocation', placement: { level: st.level, topics: [] } },
      progress: { rows: rows, attendance: S.attendance.filter(function (a) { return a.student_id === st.id; }).map(function (a) { var s = S.sessions.filter(function (x) { return x.id === a.session_id; })[0]; return { session_id: a.session_id, joined_at: s && s.scheduled_at }; }),
        submissions: subs, cards: cards },
      items: items, due: 12,
      notes: [{ id: 'f1', teacher_id: 'tp', author: 'Ana Weber', feedback_text: 'Very good role play with the landlord. Keep working on the word order after weil.', is_private: false, created_at: ago(6) },
        { id: 'f2', teacher_id: 'tp', author: 'Ana Weber', feedback_text: 'Moving flat this month, so a little tired in class. Go easy on homework.', is_private: true, created_at: ago(2) }] };
  }
  function load() {
    if (!real()) return Promise.resolve(sample());
    return window.AlimunData.teacherStudents().then(function (d) { return d && d.teacher ? d : sample(); });
  }

  /* ---------- Counting for the list ---------- */
  /* For a student in a class: past class dates since they joined, which they joined, homework set since then */
  function inClass(st, co) {
    var since = st.since || '';
    var past = S.sessions.filter(function (s) { return s.cohort_id === co.id && s.scheduled_at >= since && new Date(s.scheduled_at).getTime() < Date.now(); });
    var joined = {}; (S.attendance || []).forEach(function (a) { if (a.student_id === st.id) joined[a.session_id] = true; });
    var asg = S.assignments.filter(function (a) { return a.cohort_id === co.id && (!since || a.created_at >= since.slice(0, 10)); });
    var handed = {}; (S.submissions || []).forEach(function (x) { if (x.student_id === st.id) handed[x.assignment_id] = x; });
    var lastFour = past.slice(-4), lastTwo = past.slice(-2);
    return {
      attended: lastFour.filter(function (s) { return joined[s.id]; }).length, of: lastFour.length,
      missedTwo: lastTwo.length === 2 && !joined[lastTwo[0].id] && !joined[lastTwo[1].id],
      set: asg.length, handed: asg.filter(function (a) { return handed[a.id]; }).length,
      late: asg.filter(function (a) { return a.due_date && a.due_date < today() && !handed[a.id]; })
    };
  }
  function reasons(st, co) {
    var out = [], c = inClass(st, co), idle = st.last ? Date.now() - new Date(st.last).getTime() : null;
    var joinedLongAgo = !st.since || Date.now() - new Date(st.since).getTime() > 7 * DAY;
    if (idle == null && joinedLongAgo) out.push(t('app_ts_r_never'));
    else if (idle != null && idle > 7 * DAY) out.push(A.tn('app_ts_r_idle', Math.floor(idle / DAY)));
    if (c.missedTwo) out.push(t('app_ts_r_missed'));
    if (c.late.length === 1) out.push(t('app_ts_r_late_one', { title: c.late[0].title }));
    else if (c.late.length > 1) out.push(t('app_ts_r_late_n', { n: c.late.length }));
    return out;
  }
  function lastLine(st) {
    if (!st.last) return t('app_ts_never');
    var ms = Date.now() - new Date(st.last).getTime();
    return ms < DAY && new Date(st.last).toDateString() === new Date().toDateString() ? t('app_ts_today') : t('app_ts_last', { when: A.relative(-ms) });
  }

  /* ---------- The list ---------- */
  function listView() {
    var html = '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_t_nav_students')) + '</h1><p class="t-lead">' + esc(t('app_ts_lead')) + '</p></div></div><div class="grid rise">';
    if (!S.students.length) {
      return html + '<section class="card span-8" style="--i:0"><h2 class="t-h2">' + esc(t('app_ts_none_h')) + '</h2><p class="t-body" style="margin-top:10px">' + esc(t('app_ts_none_p')) + '</p>' +
        '<div class="btn-row" style="margin-top:18px"><a class="btn btn--primary btn--sm" href="#/classes">' + esc(t('app_t_nav_classes')) + '</a></div></section>' +
        '<section class="stage span-4" style="--i:1;background:var(--t-mint)" aria-hidden="true"><div class="bub think">' + esc(t('app_t_soon_students_bub')) + '</div>' + A.Cast.drawing('parrot') + '</section></div>';
    }
    var flagged = [];
    S.cohorts.forEach(function (co) {
      S.students.filter(function (s) { return s.cohorts.indexOf(co.id) > -1; }).forEach(function (st) { var r = reasons(st, co); if (r.length) flagged.push({ st: st, co: co, r: r }); });
    });
    if (flagged.length) {
      html += '<section class="card card--coral span-8" style="--i:0" aria-labelledby="h-att"><h2 class="t-h2" id="h-att">' + esc(t('app_ts_att_h')) + '</h2><div class="tt-week">' + flagged.map(function (f) {
        return '<a class="tt-row ts-flag" href="#/students/' + esc(f.st.id) + '"><span><b>' + esc(f.st.name) + '</b><small>' + esc(A.className(f.co) + '. ' + f.r.join('. ') + '.') + '</small></span></a>';
      }).join('') + '</div></section>' +
        '<section class="stage span-4" style="--i:1;background:var(--t-mint)" aria-hidden="true"><div class="bub say">' + esc(t('app_ts_att_bub')) + '</div>' + A.Cast.drawing('parrot') + '</section>';
    } else {
      html += '<section class="card card--leaf span-12" style="--i:0"><div class="card__row"><div class="card__art">' + A.Cast.drawing('parrot') + '</div><div><h2 class="t-h3">' + esc(t('app_ts_att_none_h')) + '</h2><p class="t-small" style="margin-top:6px">' + esc(t('app_ts_att_none_p')) + '</p></div></div></section>';
    }
    S.cohorts.forEach(function (co, i) {
      var list = S.students.filter(function (s) { return s.cohorts.indexOf(co.id) > -1; }).sort(function (a, b) { return a.name.localeCompare(b.name, A.locale); });
      if (!list.length) return;
      html += '<section class="card span-12" style="--i:' + (2 + i) + '" aria-labelledby="h-c' + i + '"><div class="ts-head"><h2 class="t-h2" id="h-c' + i + '">' + esc(A.className(co)) + '</h2>' +
        '<a class="btn btn--ghost btn--sm" href="#/students/class/' + esc(co.id) + '">' + esc(t('app_ts_see_class')) + A.icon('arrow') + '</a></div><div class="tt-week">' + list.map(function (st) {
          var c = inClass(st, co), bits = [lastLine(st)];
          if (c.of) bits.push(t('app_ts_attended', { n: c.attended, of: c.of }));
          if (c.set) bits.push(t('app_ts_handed', { n: c.handed, of: c.set }));
          bits.push(A.tn('app_pg_words', st.learned));
          return '<a class="tt-row ts-row" href="#/students/' + esc(st.id) + '"><span class="tt-row__time">' + esc(st.level || '') + '</span><span><b>' + esc(st.name) + '</b><small>' + esc(bits.join(', ')) + '</small></span></a>';
        }).join('') + '</div></section>';
    });
    return html + sampleLine() + '</div>';
  }
  function sampleLine() { return S.sample ? '<p class="t-tiny span-12">' + esc(t('app_ts_sample')) + '</p>' : ''; }

  /* ---------- A class ---------- */
  function classView(co, book, items) {
    var list = S.students.filter(function (s) { return s.cohorts.indexOf(co.id) > -1; }).sort(function (a, b) { return a.name.localeCompare(b.name, A.locale); });
    var dates = S.sessions.filter(function (s) { return s.cohort_id === co.id && new Date(s.scheduled_at).getTime() < Date.now(); }).slice(-8);
    var joined = {}; (S.attendance || []).forEach(function (a) { joined[a.session_id + ':' + a.student_id] = true; });
    var html = '<a class="rd-back" href="#/students">' + A.icon('back') + '<span>' + esc(t('app_t_nav_students')) + '</span></a>' +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(A.className(co)) + '</h1><p class="t-lead">' + esc(A.tn('app_t_students_n', list.length) + (GOALS[co.goal_track] ? '. ' + t(GOALS[co.goal_track]) + '.' : '.')) + '</p></div></div><div class="grid rise">';

    /* Attendance */
    html += '<section class="card span-12" style="--i:0" aria-labelledby="h-att"><h2 class="t-h2" id="h-att">' + esc(t('app_ts_attendance_h')) + '</h2>';
    if (!dates.length) html += '<p class="t-body" style="margin-top:10px">' + esc(t('app_ts_attendance_none')) + '</p>';
    else {
      html += '<div class="ts-scroll"><table class="ts-table"><thead><tr><th scope="col">' + esc(t('app_ts_student')) + '</th>' + dates.map(function (d) { return '<th scope="col">' + esc(shortDay(d.scheduled_at)) + '</th>'; }).join('') + '<th scope="col">' + esc(t('app_ts_total')) + '</th></tr></thead><tbody>' +
        list.map(function (st) {
          var n = 0, cells = dates.map(function (d) {
            var before = st.since && d.scheduled_at < st.since, on = joined[d.id + ':' + st.id];
            if (on) n++;
            return '<td>' + (before ? '<span class="ts-dot is-na" aria-label="' + esc(t('app_ts_not_yet')) + '"></span>' : '<span class="ts-dot' + (on ? ' is-on' : '') + '" aria-label="' + esc(t(on ? 'app_ts_there' : 'app_ts_away')) + '"></span>') + '</td>';
          }).join('');
          return '<tr><th scope="row"><a class="linkish" href="#/students/' + esc(st.id) + '">' + esc(st.name) + '</a></th>' + cells + '<td><b>' + esc(n + '/' + dates.length) + '</b></td></tr>';
        }).join('') + '</tbody></table></div><p class="t-small ts-key"><span class="ts-dot is-on"></span>' + esc(t('app_ts_there')) + ' <span class="ts-dot"></span>' + esc(t('app_ts_away')) + ' <span class="ts-dot is-na"></span>' + esc(t('app_ts_not_yet')) + '</p>';
    }
    html += '</section>';

    /* Where the class struggles, and the book */
    var lessons = {}, who = {};
    if (book) {
      (items.items || []).forEach(function (r) {
        var p = r.item_key.split(':');
        if (p.length < 5 || p[0] !== book.id || p[2] === 'test') return;
        var k = p[1] + ':' + p[2], l = lessons[k] = lessons[k] || { unit: p[1], page: p[2], right: 0, total: 0 };
        var seen = r.seen || 0, wrong = Math.min(r.wrong || 0, seen);
        l.right += seen - wrong; l.total += seen;
        (who[k] = who[k] || {})[r.student_id] = true;
      });
    }
    var weak = Object.keys(lessons).map(function (k) { var l = lessons[k]; l.rate = l.right / l.total; l.people = Object.keys(who[k]).length; return l; })
      .filter(function (l) { return l.total >= 8 && l.people >= 2 && l.rate < 0.8; }).sort(function (a, b) { return a.rate - b.rate; }).slice(0, 5);
    html += '<section class="card span-7" style="--i:1" aria-labelledby="h-weak"><h2 class="t-h2" id="h-weak">' + esc(t('app_ts_weak_h')) + '</h2><p class="t-body" style="margin-top:6px">' + esc(t('app_ts_weak_p')) + '</p>';
    if (!book) html += '<p class="t-body" style="margin-top:10px">' + esc(t('app_ts_no_book')) + '</p>';
    else if (!weak.length) html += '<p class="t-body" style="margin-top:10px">' + esc(t('app_ts_weak_none')) + '</p>';
    else html += '<ul class="qunits__list">' + weak.map(function (l) {
      var u = book.units.filter(function (x) { return x.id === l.unit; })[0], pg = u && (u.pages || []).filter(function (x) { return x.id === l.page; })[0];
      if (!pg) return '';
      return '<li><div lang="' + esc(book.explainLang || 'en') + '"><b>' + esc(pg.title) + '</b><span>' + esc(t('app_book_unit_title', { n: book.units.indexOf(u) + 1, title: u.title }) + '. ' + t('app_ts_weak_line', { right: num(l.right), total: num(l.total), n: l.people })) + '</span></div><span class="pg-rate">' + esc(pct(Math.round(l.rate * 100))) + '</span></li>';
    }).join('') + '</ul>';
    html += '</section>';
    var pages = 0; if (book) book.units.forEach(function (u) { if (!u.planned) pages += (u.pages || []).length; });
    var done = {}; (items.book || []).forEach(function (r) { if (book && r.done && r.ex_key.indexOf('book:' + book.id + ':') === 0 && !/:test$/.test(r.ex_key)) done[r.student_id] = (done[r.student_id] || 0) + 1; });
    html += '<section class="card span-5" style="--i:2" aria-labelledby="h-book"><h2 class="t-h2" id="h-book">' + esc(t('app_ts_book_h')) + '</h2>' +
      (!book ? '<p class="t-body" style="margin-top:10px">' + esc(t('app_ts_no_book')) + '</p>' : '<div class="tt-week">' + list.map(function (st) {
        var n = Math.min(done[st.id] || 0, pages);
        return '<a class="tt-row ts-bookrow" href="#/students/' + esc(st.id) + '"><span><b>' + esc(st.name) + '</b><small>' + esc(t('app_ts_pages', { n: n, of: pages })) + '</small>' +
          '<span class="meter" aria-hidden="true"><i style="width:' + (pages ? Math.round(n / pages * 100) : 0) + '%"></i></span></span></a>';
      }).join('') + '</div>') + '</section>';

    /* Homework */
    var asg = S.assignments.filter(function (a) { return a.cohort_id === co.id; });
    html += '<section class="card span-12" style="--i:3" aria-labelledby="h-hw"><h2 class="t-h2" id="h-hw">' + esc(t('app_t_nav_homework')) + '</h2>';
    if (!asg.length) html += '<p class="t-body" style="margin-top:10px">' + esc(t('app_ts_hw_none')) + '</p>';
    else html += '<div class="tt-week">' + asg.map(function (a) {
      var subs = (S.submissions || []).filter(function (x) { return x.assignment_id === a.id; }), graded = subs.filter(function (x) { return x.status === 'graded' && x.score != null; });
      var eligible = list.filter(function (st) { return !st.since || a.created_at >= st.since.slice(0, 10); }).length || list.length;
      var avg = graded.length ? Math.round(graded.reduce(function (n, x) { return n + x.score; }, 0) / graded.length) : null;
      var bits = [t('app_ts_handed', { n: subs.length, of: eligible })];
      if (avg != null) bits.push(t('app_ts_avg', { score: pct(avg) }));
      if (subs.length > graded.length) bits.push(t('app_ts_to_mark', { n: subs.length - graded.length }));
      return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + (a.due_date ? esc(shortDay(a.due_date + 'T12:00:00')) : '') + '</span><span><b>' + esc(a.title) + '</b><small>' + esc(bits.join(', ')) + '</small></span></div>';
    }).join('') + '</div>';
    html += '</section>' + sampleLine() + '</div>';
    return html;
  }

  /* ---------- A student ---------- */
  function studentView(st, d, book, topics) {
    var P = window.AlimunProgress, p = d.profile, pr = d.progress;
    var mem = {}; (d.items || []).forEach(function (r) { mem[r.item_key] = { n: r.seen || 0, w: r.wrong || 0 }; });
    var src = { memory: mem, rows: pr.rows || [], submissions: pr.submissions || [], attendance: pr.attendance || [], book: book, libKinds: {}, libTitles: {} };
    var c = P.compute(src), bp = P.bookProgress(book, pr.rows || []);
    var co = st ? cohortOf(st.cohorts[0]) : {};
    var level = String(p.level || '').slice(0, 2), placed = p.placement && p.placement.level;
    var html = '<a class="rd-back" href="#/students">' + A.icon('back') + '<span>' + esc(t('app_t_nav_students')) + '</span></a>' +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(p.full_name || '') + '</h1><p class="t-lead">' + esc([co.id ? A.className(co) : '', GOALS[p.goal_track] ? t(GOALS[p.goal_track]) : '', st ? A.cap(lastLine(st)) : ''].filter(Boolean).join('. ') + '.') + '</p></div>' +
      '<div class="btn-row"><a class="btn btn--primary btn--sm" href="#/messages">' + esc(t('app_ts_message')) + '</a><a class="btn btn--ghost btn--sm" href="#/homework/new/student/' + esc(p.id) + '">' + esc(t('app_ts_set_hw')) + '</a></div></div><div class="grid rise">';
    if (st && co.id) { var r = reasons(st, co); if (r.length) html += '<section class="card card--coral span-12" style="--i:0"><h2 class="t-h3">' + esc(t('app_ts_att_h')) + '</h2><p class="t-body" style="margin-top:6px">' + esc(r.join('. ') + '.') + '</p></section>'; }

    html += '<section class="card card--forest span-8 pg-level" style="--i:1" aria-labelledby="h-level"><h2 class="t-h1" id="h-level">' + esc(t('app_ts_level_h', { course: A.languageName(p.language) + ' ' + level })) + '</h2>' +
      '<div class="pg-ladder" role="img" aria-label="' + esc(t('app_pg_ladder', { level: level })) + '">' + LEVELS.map(function (l) {
        var i = LEVELS.indexOf(l), cur = LEVELS.indexOf(level);
        return '<span class="pg-step' + (i < cur ? ' is-past' : i === cur ? ' is-now' : '') + '">' + l + '</span>';
      }).join('') + '</div>' +
      (placed ? '<p class="t-body pg-level__p">' + esc(t('app_ts_placed', { level: placed })) + '</p>' : '') +
      (bp ? '<p class="t-body pg-level__p">' + esc(t('app_ts_book', { done: bp.pagesDone, total: bp.pages, passed: bp.unitsPassed, units: bp.units })) + '</p>' +
        '<div class="meter pg-level__meter" aria-hidden="true"><i style="width:' + (bp.pages ? Math.round(bp.pagesDone / bp.pages * 100) : 0) + '%"></i></div>' : '') + '</section>';
    var cards = pr.cards || [], learned = cards.filter(function (x) { return x.box >= 3; }).length;
    html += '<section class="card span-4 pg-words" style="--i:2"><div class="card__art">' + A.Cast.drawing('ghost') + '</div><p class="t-num">' + esc(num(learned)) + '</p>' +
      '<h2 class="t-h3">' + esc(A.tn('app_pg_words', learned)) + '</h2><p class="t-small">' + esc(A.tn('app_pg_words_of', cards.length) + '. ' + t('app_ts_due', { n: d.due || 0 })) + '</p></section>';

    html += '<section class="card span-12 pg-skills" style="--i:3" aria-labelledby="h-skills"><h2 class="t-h2" id="h-skills">' + esc(t('app_pg_skills_h')) + '</h2><p class="t-body">' + esc(t('app_ts_skills_p')) + '</p>' +
      P.SKILLS.map(function (s) {
        var x = c.skills[s.id], n = x ? Math.round(x.total) : 0, v = x && x.total ? Math.round(x.right / x.total * 100) : null, enough = n >= P.MIN_ANSWERS;
        return '<div class="pg-skill"><div class="pg-skill__top"><b>' + esc(t(s.name)) + '</b><span>' + (enough ? esc(pct(v)) : '') + '</span></div>' +
          '<div class="meter' + (enough ? '' : ' is-empty') + '" role="img" aria-label="' + esc(t(s.name) + ': ' + (enough ? pct(v) : t('app_pg_not_enough'))) + '"><i style="width:' + (enough ? v : 0) + '%"></i></div>' +
          '<p class="t-small">' + esc(!x ? t('app_pg_none_yet') : t(enough ? 'app_pg_based' : 'app_pg_few', { list: P.basis(x.src) })) + '</p></div>';
      }).join('') + '</section>';

    var ls = Object.keys(c.lessons).map(function (k) { return c.lessons[k]; }).filter(function (l) { return l.total >= 4; });
    ls.forEach(function (l) { l.rate = l.right / l.total; });
    var strong = ls.slice().sort(function (a, b) { return b.rate - a.rate || b.total - a.total; }).filter(function (l) { return l.rate >= 0.85; }).slice(0, 3);
    var weak = ls.slice().sort(function (a, b) { return a.rate - b.rate || b.total - a.total; }).filter(function (l) { return l.rate < 0.75; }).slice(0, 3);
    var row = function (l) {
      var u = book.units.filter(function (x) { return x.id === l.unit; })[0], pg = u && (u.pages || []).filter(function (x) { return x.id === l.page; })[0];
      if (!pg) return '';
      return '<li><div lang="' + esc(book.explainLang || 'en') + '"><b>' + esc(pg.title) + '</b><span>' + esc(t('app_book_unit_title', { n: book.units.indexOf(u) + 1, title: u.title })) + '</span></div><span class="pg-rate">' + esc(pct(Math.round(l.rate * 100))) + '</span></li>';
    };
    if (book && (strong.length || weak.length)) {
      html += '<section class="card span-6 pg-lessons" style="--i:4"><h2 class="t-h2">' + esc(t('app_ts_weak_lessons_h')) + '</h2>' + (weak.length ? '<ul class="qunits__list">' + weak.map(row).join('') + '</ul>' : '<p class="t-body" style="margin-top:8px">' + esc(t('app_ts_weak_lessons_none')) + '</p>') + '</section>' +
        '<section class="card span-6 pg-lessons" style="--i:4"><h2 class="t-h2">' + esc(t('app_ts_strong_h')) + '</h2>' + (strong.length ? '<ul class="qunits__list">' + strong.map(row).join('') + '</ul>' : '<p class="t-body" style="margin-top:8px">' + esc(t('app_ts_strong_none')) + '</p>') + '</section>';
    }
    if (topics && topics.length) html += '<section class="card card--bone span-12 pg-focus" style="--i:5"><h2 class="t-h3">' + esc(t('app_pg_focus_h')) + '</h2><p class="t-body">' + esc(t('app_ts_focus_p', { topics: topics.join(', ') })) + '</p></section>';

    /* Homework with marks */
    var subs = (pr.submissions || []).slice().sort(function (a, b) { return String(b.submitted_at).localeCompare(String(a.submitted_at)); });
    html += '<section class="card span-6" style="--i:6" aria-labelledby="h-shw"><h2 class="t-h2" id="h-shw">' + esc(t('app_t_nav_homework')) + '</h2>' +
      (subs.length ? '<div class="tt-week">' + subs.slice(0, 8).map(function (x) {
        return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(x.status === 'graded' && x.score != null ? pct(x.score) : t('app_ts_unmarked')) + '</span><span><b>' + esc(x.assignments && x.assignments.title || '') + '</b><small>' + esc(x.submitted_at ? t('app_ts_handed_on', { date: shortDay(x.submitted_at) }) : '') + '</small></span></div>';
      }).join('') + '</div>' : '<p class="t-body" style="margin-top:10px">' + esc(t('app_ts_hw_none_student')) + '</p>') + '</section>';

    /* Activity */
    var stamps = (pr.rows || []).map(function (x) { return x.updated_at; }).concat((pr.attendance || []).map(function (x) { return x.joined_at; }), (pr.submissions || []).map(function (x) { return x.submitted_at; }), cards.map(function (x) { return x.last_reviewed_at; }), (d.items || []).map(function (x) { return x.last_at; }));
    var wk = P.weeks(stamps), fmtW = function (dt) { return A.fmt(dt, { day: 'numeric', month: 'short' }); };
    html += '<section class="card span-6 pg-history" style="--i:6" aria-labelledby="h-hist"><h2 class="t-h2" id="h-hist">' + esc(t('app_ts_hist_h')) + '</h2>' +
      '<div class="pg-weeks" role="img" aria-label="' + esc(wk.map(function (w) { return fmtW(w.start) + ': ' + A.tn('app_pg_days', w.n); }).join('; ')) + '">' + wk.map(function (w, i) {
        return '<div class="pg-week"><span class="pg-week__v">' + (w.n || '') + '</span><i style="height:' + Math.max(w.n ? 6 : 2, Math.round(w.n / 7 * 100)) + '%"' + (w.n ? '' : ' class="is-zero"') + '></i><span class="pg-week__l">' + (i % 3 === 2 ? esc(fmtW(w.start)) : '') + '</span></div>';
      }).join('') + '</div>';
    var ms = P.milestones(src);
    html += ms.length ? '<ul class="qunits__list pg-ms">' + ms.slice(0, 5).map(function (m) {
      return '<li><div><b>' + esc(m.text) + '</b><span>' + esc(A.fmt(m.at, { day: 'numeric', month: 'long' })) + '</span></div>' + (m.score != null ? '<span class="pg-rate">' + esc(pct(m.score)) + '</span>' : '') + '</li>';
    }).join('') + '</ul>' : '';
    html += '</section>';

    /* Notes */
    var mine = S.teacher.id;
    html += '<section class="card span-12 ts-notes" style="--i:7" aria-labelledby="h-notes"><h2 class="t-h2" id="h-notes">' + esc(t('app_ts_notes_h')) + '</h2>' +
      '<form class="st-form" data-tsnote="' + esc(p.id) + '" style="max-width:none"><label class="st-field"><span class="st-lbl">' + esc(t('app_ts_note_new')) + '</span><textarea class="st-in tc-ta" name="text" rows="3" maxlength="4000" dir="auto" required></textarea></label>' +
      '<label class="st-day"><input type="checkbox" name="private"><span>' + esc(t('app_ts_private')) + '</span></label>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="submit">' + esc(t('app_ts_note_save')) + '</button></div><p class="t-small st-msg" data-msg aria-live="polite"></p></form>' +
      '<div class="tt-week ts-notelist">' + (d.notes.length ? d.notes.slice().sort(function (a, b) { return String(b.created_at).localeCompare(String(a.created_at)); }).map(function (n) {
        return '<div class="tt-row tt-row--wide' + (n.is_private ? ' is-private' : '') + '"><span class="tt-row__time">' + esc(shortDay(n.created_at)) + '</span><span><span class="ts-note__text" dir="auto">' + esc(n.feedback_text).replace(/\n/g, '<br>') + '</span>' +
          '<small>' + esc((n.author ? t('app_ts_by', { name: n.author }) + '. ' : '') + t(n.is_private ? 'app_ts_is_private' : 'app_ts_is_visible')) + '</small>' +
          (n.teacher_id === mine ? '<button class="linkish ts-del" type="button" data-ts="delnote" data-id="' + esc(n.id) + '">' + esc(t('app_tc_remove')) + '</button>' : '') + '</span></div>';
      }).join('') : '<p class="t-body">' + esc(t('app_ts_notes_none')) + '</p>') + '</div></section>';
    return html + sampleLine() + '</div>';
  }

  /* ---------- Notes ---------- */
  function addNote(form) {
    var f = new FormData(form), text = String(f.get('text') || '').trim(), priv = !!f.get('private'), msg = form.querySelector('[data-msg]');
    var say = function (k, bad) { msg.textContent = t(k); msg.classList.toggle('is-bad', !!bad); };
    if (!text) { say('app_ts_note_empty', true); return; }
    var sid = form.getAttribute('data-tsnote'), d = S.open && S.open.data;
    var done = function (row) { row.author = S.teacher.full_name || ''; d.notes.unshift(row); A.rerender(); setTimeout(function () { var m = root.querySelector('[data-tsnote] [data-msg]'); if (m) m.textContent = t(S.sample ? 'app_tc_saved_sample' : priv ? 'app_ts_saved_private' : 'app_ts_saved_visible'); }, 60); };
    if (S.sample) { done({ id: 'f' + Date.now(), teacher_id: S.teacher.id, feedback_text: text, is_private: priv, created_at: new Date().toISOString() }); return; }
    var btn = form.querySelector('[type="submit"]'); btn.disabled = true;
    window.AlimunData.addStudentNote(S.teacher.id, sid, text, priv).then(done, function (e) { btn.disabled = false; say('app_tc_save_error', true); console.warn('[Alimun] Note not saved', e && e.message); });
  }
  function delNote(btn) {
    var id = btn.getAttribute('data-id'), d = S.open && S.open.data;
    if (btn.getAttribute('data-sure') !== '1') { btn.setAttribute('data-sure', '1'); btn.textContent = t('app_tc_remove_sure'); return; }
    var drop = function () { d.notes = d.notes.filter(function (n) { return n.id !== id; }); A.rerender(); };
    if (S.sample) { drop(); return; }
    btn.disabled = true;
    window.AlimunData.deleteStudentNote(id).then(drop, function () { btn.disabled = false; btn.textContent = t('app_tc_save_error'); });
  }

  function missingView() {
    return '<a class="rd-back" href="#/students">' + A.icon('back') + '<span>' + esc(t('app_t_nav_students')) + '</span></a>' +
      '<div class="soon rise"><div class="stage" style="--i:0;background:var(--t-coral)"><div class="bub think">' + esc(t('app_book_error_bub')) + '</div>' + A.Cast.drawing('cat') + '</div>' +
      '<div class="card" style="--i:1"><p class="t-body">' + esc(t('app_ts_missing')) + '</p><div class="btn-row"><a class="btn btn--primary" href="#/students">' + esc(t('app_t_nav_students')) + '</a></div></div></div>';
  }
  function bind() {
    if (root.__tstudents) return;
    root.__tstudents = true;
    root.addEventListener('submit', function (e) { var f = e.target.closest('[data-tsnote]'); if (f && S) { e.preventDefault(); addNote(f); } });
    root.addEventListener('click', function (e) { var b = e.target.closest('[data-ts="delnote"]'); if (b && S && !b.disabled) delNote(b); });
  }

  var mountNo = 0;
  function mount(view, parts, helpers) {
    var my = ++mountNo;
    A = helpers; root = view;
    if (window.AlimunProgress) window.AlimunProgress.use(helpers);
    bind();
    var p0 = parts[0], keep = S && S.open;
    root.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + esc(t('app_book_loading')) + '">' + A.loaderInner() + '</div></div>';
    return (S ? Promise.resolve() : load().then(function (d) { S = d; })).then(function () {
      if (my !== mountNo) return { stale: true };
      if (p0 === 'class') {
        var co = cohortOf(parts[1]);
        if (!co.id) return { html: missingView() };
        var ids = S.students.filter(function (s) { return s.cohorts.indexOf(co.id) > -1; }).map(function (s) { return s.id; });
        return Promise.all([bookFor(co.language, co.level), S.sample ? Promise.resolve(null) : window.AlimunData.classItems(ids)]).then(function (r) {
          var book = r[0], items = r[1];
          if (S.sample) {
            items = { items: [], book: [] };
            S.students.filter(function (s) { return s.cohorts[0] === co.id; }).forEach(function (st, si) {
              var x = sampleStudent(st, book);
              x.items.forEach(function (it) { it.student_id = st.id; it.wrong = it.wrong + (si % 2); items.items.push(it); });
              x.progress.rows.slice(0, 6 + si * 3).forEach(function (b) { b.student_id = st.id; items.book.push(b); });
            });
          }
          return { html: classView(co, book, items), title: A.className(co) };
        });
      }
      if (p0) {
        var st = studentOf(p0);
        if (!st) return { html: missingView() };
        var go = function (d) {
          if (!d) return { html: missingView() };
          S.open = { id: st.id, data: d };
          var co = cohortOf(st.cohorts[0]);
          return Promise.all([bookFor(d.profile.language || co.language, String(d.profile.level || co.level || '').slice(0, 2)),
            d.profile.placement && d.profile.placement.topics && d.profile.placement.topics.length ? window.AlimunData.topicLabels(d.profile.placement.language || d.profile.language, d.profile.placement.topics, A.lang) : Promise.resolve([])
          ]).then(function (r) {
            if (S.sample && !d.items.length && r[0]) { var x = sampleStudent(st, r[0]); d.items = x.items; d.progress = x.progress; }
            return { html: studentView(st, d, r[0], r[1]), title: st.name };
          });
        };
        if (keep && keep.id === st.id) return go(keep.data);
        if (S.sample) return go(Object.assign(sampleStudent(st, null), { items: [] }));
        return window.AlimunData.teacherStudent(st.id).then(go);
      }
      return { html: listView(), title: t('app_t_nav_students') };
    }).catch(function (e) {
      console.warn('[Alimun] Students did not load', e && e.message);
      return { html: missingView() };
    }).then(function (res) {
      if (res.stale || my !== mountNo) return { stale: true };
      root.innerHTML = res.html;
      return res;
    });
  }
  /* Data stays loaded while the teacher moves between students; a new visit to the dashboard loads it again */
  function reset() {}

  window.AlimunTeachStudents = { mount: mount, reset: reset };
})();
