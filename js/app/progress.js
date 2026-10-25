/* Alimun app: progress (docs/DASHBOARD_PLAN.md, step 12). Everything here is counted from what the student has done;
   nothing is estimated or invented, and a skill without enough answers says so instead of showing a number.
   Level: the course level, the level test's result, the course book's lessons and unit tests done.
   Skills (share of answers right, with how many answers it rests on):
     listening: listening exercises in practice (practice memory "listen:"), library listening pieces, mock listening papers;
     speaking: speaking practice ("speak:"), mock speaking marks;
     reading: library reading pieces, mock reading papers;
     writing: homework marked by the teacher (writing types), mock writing marks;
     grammar and words: the course book's exercises answered in lessons, tests and practice (practice memory), mock
     language papers.
   Lessons: the course book lessons where the student's answers are most often right, and those to work on.
   History: active days in each of the last twelve weeks, and the latest milestones. Words: flashcards learned.
   Sources: practice memory (js/app/practice.js), practice_progress, session_attendance, assignment_submissions,
   vocab_reviews (js/app/data.js progress()), the course book (js/app/reader.js), library shelves for piece kinds.
   Sample data when signed out. Route: #/progress. Interface text: app_pg_* keys. */
(function () {
  'use strict';
  var A = null, root = null;
  var DAY = 86400000, MIN_ANSWERS = 10;
  var LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function signedIn() { return A.mode() === 'real' && A.data().profile.id; }
  function pct(n) { return new Intl.NumberFormat(A.locale, { style: 'percent' }).format(n / 100); }
  function getJSON(u) { return fetch(u).then(function (r) { if (!r.ok) throw new Error(u); return r.json(); }); }

  /* Skills, written out so the build keeps their names with the dashboard's text */
  var SKILLS = [
    { id: 'listening', name: 'app_pg_s_listening' }, { id: 'speaking', name: 'app_pg_s_speaking' }, { id: 'reading', name: 'app_pg_s_reading' },
    { id: 'writing', name: 'app_pg_s_writing' }, { id: 'language', name: 'app_pg_s_language' }
  ];
  var PAPER = { reading: 'reading', lesen: 'reading', listening: 'listening', hoeren: 'listening', writing: 'writing', schreiben: 'writing', speaking: 'speaking', sprechen: 'speaking', language: 'language', sprache: 'language' };

  /* ---------- Counting ---------- */
  function compute(src) {
    /* Each source counts with a weight (an answer 1, a library piece 12, a marked homework 10, a mock paper 20), and
       what the skill rests on is kept in plain counts for the student to see */
    var sk = {}, add = function (id, right, total, src) {
      var s = sk[id] = sk[id] || { right: 0, total: 0, src: { answers: 0, pieces: 0, papers: 0, hw: 0 } };
      s.right += right; s.total += total; s.src[src] += src === 'answers' ? total : 1;
    };
    var lessons = {};
    var mem = src.memory || {};
    Object.keys(mem).forEach(function (k) {
      var r = mem[k], seen = r.n || 0, wrong = Math.min(r.w || 0, seen);
      if (!seen) return;
      if (k.indexOf('listen:') === 0) return add('listening', seen - wrong, seen, 'answers');
      if (k.indexOf('speak:') === 0) return add('speaking', seen - wrong, seen, 'answers');
      var p = k.split(':');
      if (p.length < 5) return;
      add('language', seen - wrong, seen, 'answers');
      if (src.book && p[0] === src.book.id && p[2] !== 'test') {
        var key = p[1] + ':' + p[2], l = lessons[key] = lessons[key] || { unit: p[1], page: p[2], right: 0, total: 0 };
        l.right += seen - wrong; l.total += seen;
      }
    });
    (src.rows || []).forEach(function (r) {
      var k = r.ex_key, m;
      if (r.graded_score == null) return;
      if ((m = k.match(/^mock:[^:]+:([a-z]+)$/)) && PAPER[m[1]]) add(PAPER[m[1]], r.graded_score / 100 * 20, 20, 'papers');
      else if ((m = k.match(/^lib:([^:]+):(.+)$/))) {
        var kind = src.libKinds && src.libKinds[m[1] + ':' + m[2]];
        if (kind) add(kind === 'listen' ? 'listening' : 'reading', r.graded_score / 100 * 12, 12, 'pieces');
      }
    });
    (src.submissions || []).forEach(function (s) {
      if (s.status !== 'graded' || s.score == null) return;
      var type = String(s.assignments && s.assignments.type || '').toLowerCase();
      add(/speak/.test(type) ? 'speaking' : /grammar|vocab/.test(type) ? 'language' : 'writing', s.score / 100 * 10, 10, 'hw');
    });
    return { skills: sk, lessons: lessons };
  }
  function bookProgress(book, rows) {
    if (!book) return null;
    var done = {}, pages = 0, pagesDone = 0, units = 0, unitsPassed = 0;
    rows.forEach(function (r) { if (r.ex_key.indexOf('book:' + book.id + ':') === 0) done[r.ex_key] = r; });
    book.units.forEach(function (u) {
      if (u.planned) return;
      units++;
      (u.pages || []).forEach(function (p) { pages++; var r = done['book:' + book.id + ':' + u.id + ':' + p.id]; if (r && r.done) pagesDone++; });
      var tr = done['book:' + book.id + ':' + u.id + ':test'];
      if (tr && tr.done && (tr.graded_score == null || tr.graded_score >= 70)) unitsPassed++;
    });
    return { pages: pages, pagesDone: pagesDone, units: units, unitsPassed: unitsPassed };
  }
  function weeks(stamps) {
    var now = new Date(); now.setHours(0, 0, 0, 0);
    var monday = new Date(now.getTime() - ((now.getDay() + 6) % 7) * DAY), out = [];
    for (var w = 11; w >= 0; w--) out.push({ start: new Date(monday.getTime() - w * 7 * DAY), days: {} });
    stamps.forEach(function (s) {
      if (!s) return;
      var d = new Date(s); d.setHours(0, 0, 0, 0);
      out.forEach(function (w) { if (d >= w.start && d < new Date(w.start.getTime() + 7 * DAY)) w.days[d.getTime()] = true; });
    });
    return out.map(function (w) { return { start: w.start, n: Object.keys(w.days).length }; });
  }
  /* A mock test's name from its id (<Language>-<Level>-<format>, docs/TESTS.md) */
  function testName(id) {
    var p = id.split('-'), lv = p[1], f = p[2];
    var exam = { first: 'B2 First', advanced: 'C1 Advanced', ielts: 'IELTS Academic', goethe: 'Goethe-Zertifikat ' + lv, telc: 'telc Deutsch ' + lv }[f];
    return exam || 'Alimun ' + A.languageName(p[0]) + ' ' + lv;
  }
  function milestones(src) {
    var out = [], bookName = function (id) { var p = id.split('-'); return A.languageName(p[0]) + ' ' + p[1]; };
    (src.rows || []).forEach(function (r) {
      var m, k = r.ex_key;
      if ((m = k.match(/^book:([^:]+):([^:]+):test$/)) && r.done) {
        var u = src.book && src.book.id === m[1] ? src.book.units.filter(function (x) { return x.id === m[2]; })[0] : null;
        out.push({ at: r.updated_at, text: t('app_pg_m_unit', { unit: u ? u.title : m[2], book: bookName(m[1]) }), score: r.graded_score });
      } else if ((m = k.match(/^mock:([^:]+):([a-z]+)$/))) out.push({ at: r.updated_at, text: t('app_pg_m_mock', { test: testName(m[1]) }), score: r.graded_score });
      else if ((m = k.match(/^lib:([^:]+):(.+)$/))) out.push({ at: r.updated_at, text: t('app_pg_m_lib', { title: src.libTitles && src.libTitles[m[1] + ':' + m[2]] || m[2] }), score: r.graded_score });
      else if ((m = k.match(/^quiz:[^:]+:(.+)$/))) out.push({ at: r.updated_at, text: t(m[1] === 'clock' ? 'app_pg_m_clock' : 'app_pg_m_quiz'), score: m[1] === 'clock' ? null : r.graded_score });
    });
    (src.submissions || []).forEach(function (s) { if (s.status === 'graded') out.push({ at: s.graded_at || s.submitted_at, text: t('app_pg_m_hw', { title: s.assignments && s.assignments.title || '' }), score: s.score }); });
    (src.attendance || []).forEach(function (a) { out.push({ at: a.joined_at, text: t('app_pg_m_class') }); });
    return out.filter(function (x) { return x.at; }).sort(function (a, b) { return Date.parse(b.at) - Date.parse(a.at); }).slice(0, 8);
  }

  /* ---------- Data ---------- */
  function sample(book) {
    var now = Date.now(), mem = {}, rows = [], ago = function (d) { return new Date(now - d * DAY).toISOString(); };
    if (book) {
      book.units.filter(function (u) { return !u.planned; }).slice(0, 2).forEach(function (u, ui) {
        (u.pages || []).forEach(function (p, pi) {
          rows.push({ ex_key: 'book:' + book.id + ':' + u.id + ':' + p.id, done: ui === 0 || pi < 2, graded_score: null, updated_at: ago(30 - ui * 10 - pi) });
          for (var i = 0; i < 6; i++) mem[book.id + ':' + u.id + ':' + p.id + ':' + i + ':0'] = { n: 2, w: (pi + i + ui) % 4 === 0 ? 1 : (pi === 1 && i < 3 ? 2 : 0), b: 2, at: now };
        });
        if (ui === 0) rows.push({ ex_key: 'book:' + book.id + ':' + u.id + ':test', done: true, graded_score: 84, updated_at: ago(18) });
      });
    }
    for (var i = 0; i < 18; i++) mem['listen:' + (book ? book.id : 'x') + ':' + i] = { n: 1, w: i % 4 === 0 ? 1 : 0, b: 1, at: now };
    for (i = 0; i < 6; i++) mem['speak:' + (book ? book.id : 'x') + ':' + i] = { n: 1, w: i % 3 === 0 ? 1 : 0, b: 1, at: now };
    rows.push(book && book.language === 'English' ? { ex_key: 'mock:English-B2-first:reading', done: true, graded_score: 73, updated_at: ago(6) } : { ex_key: 'mock:German-B1-goethe:lesen', done: true, graded_score: 73, updated_at: ago(6) });
    rows.push({ ex_key: 'quiz:' + (book ? book.id : 'x') + ':mixed', done: true, graded_score: 80, updated_at: ago(3) });
    var stamps = [];
    for (i = 0; i < 84; i++) if ((i * 7) % 5 < 3) stamps.push(ago(i));
    return { sample: true, memory: mem, rows: rows, attendance: [{ joined_at: ago(4) }, { joined_at: ago(6) }, { joined_at: ago(11) }],
      submissions: [{ status: 'graded', score: 86, graded_at: ago(7), assignments: { title: 'Eine E-Mail an den Vermieter', type: 'Writing' } }],
      cards: [{ box: 4 }, { box: 3 }, { box: 3 }, { box: 1 }, { box: 0 }, { box: 5 }, { box: 2 }, { box: 3 }], stamps: stamps, libKinds: {}, libTitles: {} };
  }
  function load() {
    var id = A.myBookId();
    var bookP = window.AlimunReader ? window.AlimunReader.open(A, id).catch(function () { return null; }) : Promise.resolve(null);
    if (!signedIn()) return bookP.then(function (b) { var s = sample(b && b.book); s.book = b && b.book; return s; });
    var me = signedIn();
    return Promise.all([bookP, window.AlimunData.progress(me), window.AlimunPractice ? window.AlimunPractice.use(A).then(function () { return window.AlimunPractice.memory(); }) : {}]).then(function (r) {
      var d = r[1];
      d.book = r[0] && r[0].book; d.memory = r[2] || {};
      d.stamps = d.rows.map(function (x) { return x.updated_at; }).concat(d.attendance.map(function (x) { return x.joined_at; }), d.submissions.map(function (x) { return x.submitted_at; }), d.cards.map(function (x) { return x.last_reviewed_at; }));
      /* Library pieces: their kind (listening or reading) and title, from their shelves */
      var shelves = {};
      d.rows.forEach(function (x) { var m = x.ex_key.match(/^lib:([^:]+):/); if (m) shelves[m[1]] = true; });
      var lang = A.lang === 'ma' ? 'fr' : (['en', 'es', 'fr', 'de', 'pt', 'zh', 'ar', 'it'].indexOf(A.lang) > -1 ? A.lang : 'en');
      d.libKinds = {}; d.libTitles = {};
      return Promise.all(Object.keys(shelves).map(function (s) {
        return getJSON('/data/library/' + encodeURIComponent(s + '.' + lang) + '.json').then(function (sh) {
          sh.pieces.forEach(function (p) { d.libKinds[s + ':' + p.id] = p.kind; d.libTitles[s + ':' + p.id] = p.title; });
        }, function () {});
      })).then(function () { return d; });
    });
  }

  /* What a skill rests on: "18 answers, 1 mock test paper" */
  function basis(src) {
    var out = [];
    if (src.answers) out.push(A.tn('app_pg_n_answers', src.answers));
    if (src.pieces) out.push(A.tn('app_pg_n_pieces', src.pieces));
    if (src.papers) out.push(A.tn('app_pg_n_papers', src.papers));
    if (src.hw) out.push(A.tn('app_pg_n_hw', src.hw));
    return out.join(', ');
  }

  /* ---------- The page ---------- */
  function view(d) {
    var p = A.data().profile, c = compute(d), bp = bookProgress(d.book, d.rows || []);
    var level = (p.level || '').slice(0, 2), placed = A.data().placement && A.data().placement.level;
    var html = '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_progress')) + '</h1><p class="t-lead">' + esc(t('app_pg_lead')) + '</p></div></div><div class="grid rise">';

    /* Level */
    html += '<section class="card card--forest span-8 pg-level" style="--i:0" aria-labelledby="h-level"><h2 class="t-h1" id="h-level">' + esc(t('app_pg_level_h', { course: A.languageName(p.language) + ' ' + level })) + '</h2>' +
      '<div class="pg-ladder" role="img" aria-label="' + esc(t('app_pg_ladder', { level: level })) + '">' + LEVELS.map(function (l) {
        var i = LEVELS.indexOf(l), cur = LEVELS.indexOf(level);
        return '<span class="pg-step' + (i < cur ? ' is-past' : i === cur ? ' is-now' : '') + '">' + l + '</span>';
      }).join('') + '</div>' +
      (placed ? '<p class="t-body pg-level__p">' + esc(t('app_pg_placed', { level: placed })) + '</p>' : '') +
      (bp ? '<p class="t-body pg-level__p">' + esc(t('app_pg_book', { done: bp.pagesDone, total: bp.pages, passed: bp.unitsPassed, units: bp.units })) + '</p>' +
        '<div class="meter pg-level__meter" role="img" aria-label="' + esc(pct(bp.pages ? bp.pagesDone / bp.pages * 100 : 0)) + '"><i style="width:' + (bp.pages ? Math.round(bp.pagesDone / bp.pages * 100) : 0) + '%"></i></div>' : '') +
      '<div class="btn-row" style="margin-top:20px"><a class="btn btn--lime" href="#/book">' + esc(t('app_pg_to_book')) + A.icon('arrow') + '</a></div></section>';
    var cards = d.cards || [], learned = cards.filter(function (x) { return x.box >= 3; }).length;
    html += '<section class="card span-4 pg-words" style="--i:1"><div class="card__art">' + A.Cast.drawing('ghost') + '</div><p class="t-num">' + esc(new Intl.NumberFormat(A.locale).format(learned)) + '</p>' +
      '<h2 class="t-h3">' + esc(A.tn('app_pg_words', learned)) + '</h2><p class="t-small">' + esc(A.tn('app_pg_words_of', cards.length)) + '</p><a class="linkish" href="#/cards">' + esc(t('app_pg_to_cards')) + '</a></section>';

    /* Skills */
    html += '<section class="card span-12 pg-skills" style="--i:2" aria-labelledby="h-skills"><h2 class="t-h2" id="h-skills">' + esc(t('app_pg_skills_h')) + '</h2><p class="t-body">' + esc(t('app_pg_skills_p')) + '</p>' +
      SKILLS.map(function (s) {
        var x = c.skills[s.id], n = x ? Math.round(x.total) : 0, v = x && x.total ? Math.round(x.right / x.total * 100) : null;
        var enough = n >= MIN_ANSWERS;
        return '<div class="pg-skill"><div class="pg-skill__top"><b>' + esc(t(s.name)) + '</b><span>' + (enough ? esc(pct(v)) : '') + '</span></div>' +
          '<div class="meter' + (enough ? '' : ' is-empty') + '" role="img" aria-label="' + esc(t(s.name) + ': ' + (enough ? pct(v) : t('app_pg_not_enough'))) + '"><i style="width:' + (enough ? v : 0) + '%"></i></div>' +
          '<p class="t-small">' + esc(!x ? t('app_pg_none_yet') : t(enough ? 'app_pg_based' : 'app_pg_few', { list: basis(x.src) })) + '</p></div>';
      }).join('') + '</section>';

    /* Lessons */
    var ls = Object.keys(c.lessons).map(function (k) { return c.lessons[k]; }).filter(function (l) { return l.total >= 4; });
    ls.forEach(function (l) { l.rate = l.right / l.total; });
    var strong = ls.slice().sort(function (a, b) { return b.rate - a.rate || b.total - a.total; }).filter(function (l) { return l.rate >= 0.85; }).slice(0, 3);
    var weak = ls.slice().sort(function (a, b) { return a.rate - b.rate || b.total - a.total; }).filter(function (l) { return l.rate < 0.75; }).slice(0, 3);
    var lessonRow = function (l) {
      var u = d.book.units.filter(function (x) { return x.id === l.unit; })[0], pg = u && (u.pages || []).filter(function (x) { return x.id === l.page; })[0];
      if (!pg) return '';
      var xa = ' lang="' + (d.book.explainLang || 'en') + '"';
      return '<li><div' + xa + '><b>' + esc(pg.title) + '</b><span>' + esc(t('app_book_unit_title', { n: d.book.units.indexOf(u) + 1, title: u.title })) + '</span></div><span class="pg-rate">' + esc(pct(Math.round(l.rate * 100))) + '</span>' +
        '<a class="btn btn--ghost btn--sm" href="#/book/' + esc(d.book.id) + '/' + esc(u.id) + '/' + esc(pg.id) + '">' + esc(t('app_pg_open')) + '</a></li>';
    };
    if (d.book && (strong.length || weak.length)) {
      html += '<section class="card span-6 pg-lessons" style="--i:3"><h2 class="t-h2">' + esc(t('app_pg_weak_h')) + '</h2>' +
        (weak.length ? '<ul class="qunits__list">' + weak.map(lessonRow).join('') + '</ul><div class="btn-row" style="margin-top:12px"><a class="btn btn--primary btn--sm" href="#/practice/round">' + esc(t('app_pg_practise')) + '</a></div>' : '<p class="t-body" style="margin-top:8px">' + esc(t('app_pg_weak_none')) + '</p>') + '</section>' +
        '<section class="card span-6 pg-lessons" style="--i:3"><h2 class="t-h2">' + esc(t('app_pg_strong_h')) + '</h2>' +
        (strong.length ? '<ul class="qunits__list">' + strong.map(lessonRow).join('') + '</ul>' : '<p class="t-body" style="margin-top:8px">' + esc(t('app_pg_strong_none')) + '</p>') + '</section>';
    }
    if (A.data().topics && A.data().topics.length) {
      html += '<section class="card card--bone span-12 pg-focus" style="--i:4"><h2 class="t-h3">' + esc(t('app_pg_focus_h')) + '</h2><p class="t-body">' + esc(t('app_pg_focus_p', { topics: A.data().topics.join(', ') })) + '</p></section>';
    }

    /* History */
    var wk = weeks(d.stamps || []), max = 7;
    var fmtW = function (dt) { return new Intl.DateTimeFormat(A.locale, { day: 'numeric', month: 'short' }).format(dt); };
    html += '<section class="card span-12 pg-history" style="--i:5" aria-labelledby="h-hist"><h2 class="t-h2" id="h-hist">' + esc(t('app_pg_hist_h')) + '</h2><p class="t-body">' + esc(t('app_pg_hist_p')) + '</p>' +
      '<div class="pg-weeks" role="img" aria-label="' + esc(wk.map(function (w) { return fmtW(w.start) + ': ' + A.tn('app_pg_days', w.n); }).join('; ')) + '">' + wk.map(function (w, i) {
        return '<div class="pg-week" title="' + esc(t('app_pg_week_of', { date: fmtW(w.start) }) + ': ' + A.tn('app_pg_days', w.n)) + '"><span class="pg-week__v">' + (w.n || '') + '</span><i style="height:' + Math.max(w.n ? 6 : 2, Math.round(w.n / max * 100)) + '%"' + (w.n ? '' : ' class="is-zero"') + '></i>' +
          '<span class="pg-week__l">' + (i % 2 === 1 || i === wk.length - 1 ? esc(fmtW(w.start)) : '') + '</span></div>';
      }).join('') + '</div>';
    var ms = milestones(d);
    html += ms.length ? '<h3 class="t-h3 pg-ms-h">' + esc(t('app_pg_recent_h')) + '</h3><ul class="qunits__list pg-ms">' + ms.map(function (m) {
      return '<li><div><b>' + esc(m.text) + '</b><span>' + esc(new Intl.DateTimeFormat(A.locale, { day: 'numeric', month: 'long' }).format(new Date(m.at))) + '</span></div>' + (m.score != null ? '<span class="pg-rate">' + esc(pct(m.score)) + '</span>' : '') + '</li>';
    }).join('') + '</ul>' : '<p class="t-body" style="margin-top:12px">' + esc(t('app_pg_recent_none')) + '</p>';
    html += '</section>';
    if (d.sample) html += '<p class="t-tiny span-12">' + esc(t('app_pg_sample')) + '</p>';
    return html + '</div>';
  }

  function errorView() {
    return '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_progress')) + '</h1></div></div>' +
      '<div class="soon rise"><div class="stage" style="--i:0;background:var(--t-coral)"><div class="bub think">' + esc(t('app_book_error_bub')) + '</div>' + A.Cast.drawing('cat') + '</div>' +
      '<div class="card" style="--i:1"><p class="t-body">' + esc(t('app_book_error')) + '</p><div class="btn-row"><a class="btn btn--primary" href="#/progress">' + esc(t('app_retry')) + '</a></div></div></div>';
  }

  var mountNo = 0;
  function mount(view_, parts, helpers) {
    var my = ++mountNo;
    A = helpers; root = view_;
    document.body.classList.remove('is-reading');
    root.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + esc(t('app_book_loading')) + '">' + A.loaderInner() + '</div></div>';
    return load().then(function (d) {
      if (my !== mountNo) return { stale: true };
      return { html: view(d), title: t('app_nav_progress') };
    }).catch(function (e) {
      console.warn('[Alimun] Progress did not load', e && e.message);
      return { html: errorView(), title: t('app_nav_progress') };
    }).then(function (res) {
      if (res.stale || my !== mountNo) return { stale: true };
      root.innerHTML = res.html;
      return res;
    });
  }

  window.AlimunProgress = { mount: mount, compute: compute };
})();
