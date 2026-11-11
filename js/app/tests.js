/* Alimun app: Tests (docs/DASHBOARD_PLAN.md, step 8; file format in docs/TESTS.md).
   Practice tests in the format of real exams (B2 First, C1 Advanced, IELTS, Goethe, telc) and Alimun's own end-of-level
   tests, for the student's course language. A test has papers (Reading, Writing, Listening, Speaking...), a paper has
   parts; one paper is taken at a time, with a timer, and nothing is marked until the student finishes it (the exercise
   engine's test mode, js/app/exercises.js). Then every answer shows with its explanation, the part scores and the
   transcripts; writing and spoken answers get drafted marks against the exam's criteria (/api/ai?action=mark-mock, for
   students with a plan) and every task shows its model answer.
   Listening: the recordings are course audio files (/data/audio/<test>.json and Supabase Storage course-audio/<test>/),
   played as often as the exam allows; until they exist the part offers its transcript. Speaking: the examiner's question
   is spoken by the test's examiner (tutor drawing with lip sync) and the student's answer is transcribed.
   Saving: answers in progress in this browser ("alimun-mock:<who>:<test>:<paper>"); a finished paper in
   practice_progress "mock:<test>:<paper>" (score and answers) for a signed-in student, in this browser otherwise.
   Routes: #/tests, #/tests/<test>, #/tests/<test>/<paper>, #/tests/<test>/<paper>/again. Interface text: app_mt_* keys. */
(function () {
  'use strict';
  var A = null, root = null, P = null;
  var SUPA_AUDIO = 'https://dgaiasmefcbrtzqwdyri.supabase.co/storage/v1/object/public/course-audio/';
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EX = function () { return window.AlimunEx; };
  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function md(s) { return EX().md(s); }
  function paras(s) { return String(s || '').split(/\n\s*\n/).map(function (p) { return '<p>' + md(p).replace(/\n/g, '<br>') + '</p>'; }).join(''); }
  function pct(n) { return new Intl.NumberFormat(A.locale, { style: 'percent' }).format(n / 100); }
  function signedIn() { return A.mode() === 'real' && A.data().profile.id; }
  function who() { return signedIn() || 'guest'; }

  /* The exams; names are not translated */
  var FORMATS = {
    first: { exam: function () { return 'B2 First'; }, body: 'Cambridge English', art: 'dragon' },
    advanced: { exam: function () { return 'C1 Advanced'; }, body: 'Cambridge English', art: 'dragon' },
    ielts: { exam: function () { return 'IELTS Academic'; }, body: 'IELTS', art: 'dragon' },
    goethe: { exam: function (T) { return 'Goethe-Zertifikat ' + T.level; }, body: 'Goethe-Institut', art: 'dragon', pass: 'app_mt_pass_goethe' },
    telc: { exam: function (T) { return 'telc Deutsch ' + T.level; }, body: 'telc', art: 'dragon', pass: 'app_mt_pass_telc' },
    alimun: { exam: function (T) { return 'Alimun ' + T.level; }, art: 'owl' }
  };
  function examName(T) { return (FORMATS[T.format] || FORMATS.alimun).exam(T); }
  function testTitle(T) { return T.format === 'alimun' ? t('app_mt_alimun_title', { level: T.level }) : t('app_mt_exam_title', { exam: examName(T) }); }

  /* Marking criteria (docs/TESTS.md): names as the exam uses them; pronunciation is not marked from a transcript */
  var MARKING = {
    cambridge: { max: 5, write: ['Content', 'Communicative Achievement', 'Organisation', 'Language'], talk: ['Grammar and Vocabulary', 'Discourse Management', 'Interactive Communication'] },
    ielts: { max: 9, write: ['Task Response', 'Coherence and Cohesion', 'Lexical Resource', 'Grammatical Range and Accuracy'], talk: ['Fluency and Coherence', 'Lexical Resource', 'Grammatical Range and Accuracy'] },
    goethe: { max: 5, write: ['Aufgabenerfüllung', 'Kohärenz', 'Wortschatz', 'Strukturen'], talk: ['Aufgabenerfüllung', 'Kohärenz', 'Wortschatz', 'Strukturen'] },
    telc: { max: 5, write: ['Inhalt', 'Kommunikative Gestaltung', 'Formale Richtigkeit'], talk: ['Ausdrucksfähigkeit', 'Aufgabenbewältigung', 'Formale Richtigkeit'] },
    alimun: { max: 5, write: ['Task', 'Organisation', 'Vocabulary', 'Grammar'], talk: ['Task', 'Fluency', 'Vocabulary', 'Grammar'] }
  };
  /* The examiner's face: a tutor drawing that matches the examiner's voice */
  var EXAMINER = { Sulafat: 'lena', Kore: 'mei', Aoede: 'sofia', Leda: 'sofia', Vindemiatrix: 'lena', Orus: 'arthur', Charon: 'kofi', Puck: 'omar', Achird: 'omar', Sadaltager: 'kofi' };
  var TF = { English: ['True', 'False', 'Not given'], German: ['Richtig', 'Falsch', 'Steht nicht im Text'], French: ['Vrai', 'Faux', 'On ne sait pas'], Spanish: ['Verdadero', 'Falso', 'No se dice'], Italian: ['Vero', 'Falso', 'Non indicato'], Portuguese: ['Verdadeiro', 'Falso', 'Não referido'] };

  /* ---------- Loading ---------- */
  function getJSON(url) { return fetch(url).then(function (r) { if (!r.ok) throw new Error(url + ' ' + r.status); return r.json(); }); }
  var index = null, tests = {}, audio = {};
  function loadIndex() { return index ? Promise.resolve(index) : getJSON('/data/tests/index.json').then(function (x) { index = x.tests || []; return index; }); }
  function loadTest(id) { return tests[id] ? Promise.resolve(tests[id]) : getJSON('/data/tests/' + encodeURIComponent(id) + '.json').then(function (x) { tests[id] = x; return x; }); }
  function loadAudio(id) {
    if (audio[id]) return Promise.resolve(audio[id]);
    var get = function (u) { return fetch(u).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }); };
    return Promise.all([get('/data/audio/' + encodeURIComponent(id) + '.json'), get(SUPA_AUDIO + encodeURIComponent(id) + '/manifest.json')]).then(function (r) {
      audio[id] = { items: (r[0] && r[0].items) || {}, done: (r[1] && r[1].done) || {} };
      return audio[id];
    });
  }
  function fileFor(id, key) {
    var a = audio[id], it = a && a.items[key];
    return it && a.done[it[0]] ? SUPA_AUDIO + encodeURIComponent(id) + '/' + it[0] + '.mp3' : '';
  }

  /* ---------- Results ---------- */
  var results = null;   /* { '<test>:<paper>': { score, at } } */
  var LOCAL = 'alimun-mock-done';
  function readLocal() { try { return JSON.parse(localStorage.getItem(LOCAL + ':' + who()) || '{}') || {}; } catch (e) { return {}; } }
  function loadResults() {
    if (results) return Promise.resolve(results);
    var local = readLocal();
    if (!signedIn()) { results = {}; Object.keys(local).forEach(function (k) { results[k] = { score: local[k].score, at: local[k].at }; }); return Promise.resolve(results); }
    return window.AlimunData.mockResults(signedIn()).then(function (rows) {
      results = {};
      rows.forEach(function (r) { results[r.ex_key.replace(/^mock:/, '')] = { score: r.graded_score, at: Date.parse(r.updated_at) }; });
      return results;
    }, function () { results = {}; return results; });
  }
  /* A finished paper: answers, marks and part scores */
  function loadDone(key) {
    var local = readLocal()[key];
    if (!signedIn()) return Promise.resolve(local || null);
    return window.AlimunData.mockResult(signedIn(), 'mock:' + key).then(function (r) { return r && r.user_answer && r.user_answer.state ? r.user_answer : local || null; }, function () { return local || null; });
  }
  function saveDone(key, rec, quiet) {
    results = results || {};
    results[key] = { score: rec.score, at: rec.at };
    if (signedIn()) {
      window.AlimunData.saveMock(signedIn(), 'mock:' + key, rec.score, rec).catch(function (e) { console.warn('[Alimun] Test result not saved', e && e.message); });
      /* A finished paper counts for the streak, like a practice round */
      if (!quiet) window.AlimunData.saveBook(signedIn(), 'practice:round:' + new Date().toISOString().slice(0, 10), { done: true, score: rec.score == null ? 100 : rec.score }).catch(function () {});
    } else {
      var all = readLocal();
      all[key] = rec;
      try { localStorage.setItem(LOCAL + ':' + who(), JSON.stringify(all)); } catch (e) { /* storage blocked */ }
    }
  }
  /* Answers in progress (this browser) */
  function progKey(key) { return 'alimun-mock:' + who() + ':' + key; }
  function readProg(key) { try { return JSON.parse(localStorage.getItem(progKey(key)) || 'null'); } catch (e) { return null; } }
  function writeProg() {
    if (!P || P.done) return;
    try { localStorage.setItem(progKey(P.key), JSON.stringify({ state: P.ex.state, spent: P.spent, part: P.part, plays: P.plays })); } catch (e) { /* storage blocked */ }
  }
  function clearProg(key) { try { localStorage.removeItem(progKey(key)); } catch (e) { /* storage blocked */ } }

  /* ---------- Home: the tests for the student's language ---------- */
  function homeView(list) {
    var d = A.data(), language = d.profile.language, lang = A.languageName(language);
    var mine = list.filter(function (x) { return x.language === language; });
    var level = (d.profile.level || '').slice(0, 2);
    var order = function (a, b) { return (a.level === level ? -1 : 0) - (b.level === level ? -1 : 0) || a.level.localeCompare(b.level); };
    var exams = mine.filter(function (x) { return x.format !== 'alimun'; }).sort(order);
    var own = mine.filter(function (x) { return x.format === 'alimun'; }).sort(order);
    var html = '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_tests')) + '</h1><p class="t-lead">' + esc(t('app_mt_lead')) + '</p></div></div><div class="grid rise">';
    if (!mine.length) {
      return html + '<section class="stage span-4" style="--i:0;background:var(--t-mint)" aria-hidden="true"><div class="bub think">' + esc(t('app_mt_none_bub')) + '</div>' + A.Cast.drawing('dragon') + '</section>' +
        '<section class="card span-8" style="--i:1"><h2 class="t-h2">' + esc(t('app_mt_none_h', { language: lang })) + '</h2><p class="t-body" style="margin-top:8px">' + esc(t('app_mt_none_p')) + '</p></section></div>';
    }
    if (exams.length) {
      html += '<h2 class="t-h2 span-12 home__section" style="--i:0">' + esc(t('app_mt_exams_h')) + '</h2>';
      exams.forEach(function (x, i) { html += testCard(x, i); });
    }
    if (own.length) {
      html += '<h2 class="t-h2 span-12 home__section" style="--i:2">' + esc(t('app_mt_own_h')) + '</h2>';
      own.forEach(function (x, i) { html += testCard(x, i); });
    }
    return html + '<p class="t-tiny span-12 mt-note" style="--i:4">' + esc(t('app_mt_note')) + (signedIn() ? '' : ' ' + esc(t('app_mt_local'))) + '</p></div>';
  }
  function testCard(x, i) {
    var f = FORMATS[x.format] || FORMATS.alimun, mins = x.papers.reduce(function (n, p) { return n + p.minutes; }, 0);
    var done = x.papers.filter(function (p) { return results[x.id + ':' + p.id]; }).length;
    var tint = x.format === 'alimun' ? 'card--mint' : i % 2 ? 'card--sun' : 'card--leaf';
    return '<a class="card ' + tint + ' span-6 mt-card" href="#/tests/' + esc(x.id) + '" style="--i:' + (i + 1) + '"><div class="card__row"><div class="card__art">' + A.Cast.drawing(f.art) + '</div><div>' +
      '<h3 class="t-h2">' + esc(testTitle(x)) + '</h3>' +
      '<p class="t-body" style="margin-top:8px">' + esc(x.format === 'alimun' ? t('app_mt_alimun_p', { level: x.level }) : t('app_mt_exam_p', { exam: examName(x), body: f.body })) + '</p>' +
      '<p class="t-small mt-card__meta">' + esc(t('app_mt_meta', { papers: x.papers.map(function (p) { return p.title; }).join(', '), hours: dur(mins) })) + '</p>' +
      (done ? '<p class="t-small qcard__best">' + esc(t('app_mt_done_n', { done: done, total: x.papers.length })) + '</p>' : '') +
      '</div></div></a>';
  }
  function dur(mins) {
    var h = Math.floor(mins / 60), m = mins % 60;
    return h ? (m ? t('app_mt_h_min', { h: h, m: m }) : t('app_mt_h', { h: h })) : t('app_mt_min', { m: m });
  }

  /* ---------- One test: its papers ---------- */
  function testView(T, summary) {
    var f = FORMATS[T.format] || FORMATS.alimun;
    var html = '<a class="rd-back" href="#/tests">' + A.icon('back') + '<span>' + esc(t('app_nav_tests')) + '</span></a>' +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(testTitle(T)) + '</h1><p class="t-lead">' + esc(T.format === 'alimun' ? t('app_mt_alimun_p', { level: T.level }) : t('app_mt_exam_p', { exam: examName(T), body: f.body })) + '</p></div></div>' +
      '<div class="grid rise"><section class="card span-12 mt-papers" style="--i:0"><h2 class="t-h2">' + esc(t('app_mt_papers_h')) + '</h2><p class="t-body" style="margin-top:6px">' + esc(t('app_mt_papers_p')) + '</p><ul class="qunits__list">';
    summary.papers.forEach(function (p) {
      var key = T.id + ':' + p.id, r = results[key], prog = readProg(key);
      var bits = [dur(p.minutes)];
      if (p.questions) bits.push(A.tn('app_mt_questions', p.questions));
      if (p.tasks) bits.push(A.tn('app_mt_tasks', p.tasks));
      html += '<li><div><b>' + esc(p.title) + '</b><span>' + esc(bits.join(', ')) + '</span>' +
        (r ? '<span>' + esc(r.score != null ? t('app_mt_last', { score: pct(r.score) }) : t('app_mt_last_done')) + '</span>' : '') + '</div>' +
        (r ? '<a class="btn btn--ghost btn--sm" href="#/tests/' + esc(T.id) + '/' + esc(p.id) + '">' + esc(t('app_mt_review')) + '</a>' : '') +
        '<a class="btn btn--primary btn--sm" href="#/tests/' + esc(T.id) + '/' + esc(p.id) + (r ? '/again' : '') + '">' + esc(t(prog ? 'app_mt_continue' : r ? 'app_mt_again' : 'app_mt_start')) + '</a></li>';
    });
    html += '</ul></section>';
    if (f.pass) html += '<p class="t-small span-12" style="--i:1">' + esc(t(f.pass)) + '</p>';
    return html + '<p class="t-tiny span-12 mt-note" style="--i:2">' + esc(t('app_mt_note')) + '</p></div>';
  }

  /* ---------- A paper ---------- */
  function startPaper(T, paper, saved, done) {
    var code = window.AlimunData.langCode(T.language) || 'en', ui = A.lang === 'ma' ? 'fr' : A.lang;
    var blocks = [], partOf = [], rec = {};
    paper.parts.forEach(function (pt, pi) {
      pt.blocks.forEach(function (b0, k) {
        var b = JSON.parse(JSON.stringify(b0));
        /* True / false in the exam's language, as on the paper */
        if (b.kind === 'tf') {
          var L = TF[T.language] || TF.English;
          b = Object.assign({}, b, { kind: 'pick', opts: b.ng ? L : L.slice(0, 2), items: b.items.map(function (it) { return Object.assign({}, it, { a: { t: 0, f: 1, ng: 2 }[it.a] }); }) });
        }
        if (b.kind === 'talk') {
          b.tutor = EXAMINER[T.examiner] || 'arthur';
          b.items.forEach(function (it, i) { var src = fileFor(T.id, paper.id + ':' + pt.id + ':q:' + k + '.' + i); if (src) it.src = src; });
        }
        rec[blocks.length] = b.rec != null ? b.rec : null;
        partOf.push(pi);
        blocks.push(b);
      });
    });
    P = { T: T, paper: paper, key: T.id + ':' + paper.id, blocks: blocks, partOf: partOf, rec: rec, part: 0, spent: 0, plays: {}, done: null, marks: {}, timer: null, hideTime: false,
      xa: ' lang="' + ui + '" dir="' + (ui === 'ar' ? 'rtl' : 'ltr') + '"', ta: ' lang="' + code + '" dir="ltr"' };
    P.ex = EX().create({ A: A, blocks: blocks, test: true, xa: P.xa, ta: P.ta, root: function () { return root; },
      transcribe: window.AlimunPractice && window.AlimunPractice.transcriber ? window.AlimunPractice.transcriber(T.language) : null,
      onChange: function () { writeProg(); refreshNav(); } });
    P.ex.marks = {};
    if (done) {
      P.ex.state = done.state;
      P.done = done;
      P.ex.submit();
      Object.keys(done.marks || {}).forEach(function (k) { P.ex.marks[k] = markHtml(done.marks[k]); });
      return;
    }
    if (saved && saved.state && saved.state.length === blocks.length) {
      P.ex.state = saved.state;
      P.spent = saved.spent || 0; P.part = Math.min(saved.part || 0, paper.parts.length - 1); P.plays = saved.plays || {};
      /* A recording or transcription cut off by leaving the page starts again */
      P.ex.state.forEach(function (s) { if (s && s.items) s.items.forEach(function (x) { if (x && x.state === 'wait') x.state = ''; }); });
    }
  }

  function paperView() {
    var T = P.T, paper = P.paper;
    document.body.classList.add('is-reading');
    var html = '<div class="mt">' +
      '<div class="mt-bar"><a class="rd-back" href="#/tests/' + esc(T.id) + '">' + A.icon('back') + '<span>' + esc(testTitle(T)) + '</span></a>' +
        '<h1 class="t-h2 mt-bar__title">' + esc(paper.title) + '</h1></div>';
    if (P.done) return html + resultsView() + '</div>';
    /* Parts and the timer stay at the top while the student scrolls */
    html += '<div class="mt-nav"><nav class="mt-tabs" aria-label="' + esc(t('app_mt_parts')) + '">' + paper.parts.map(function (pt, i) {
      return '<button class="mt-tab' + (i === P.part ? ' is-on' : '') + '" type="button" data-mt="part" data-p="' + i + '"' + (i === P.part ? ' aria-current="step"' : '') + P.ta + '>' + esc(pt.title) + '<i data-tabdot="' + i + '"></i></button>';
    }).join('') + '</nav><button class="mt-timer" type="button" data-mt="time" aria-live="off">' + timerText() + '</button></div>';
    html += '<div data-part>' + partHtml(P.part, false) + '</div>';
    return html + '<div class="mt-foot" data-foot>' + footHtml() + '</div></div>';
  }

  function partHtml(pi, review) {
    var pt = P.paper.parts[pi];
    var bis = P.blocks.map(function (b, i) { return i; }).filter(function (i) { return P.partOf[i] === pi; });
    var mat = materialHtml(pt, pi, review);
    var qs = bis.map(function (bi) {
      var r = P.rec[bi];
      return (r != null && pt.recs && pt.recs.length > 1 ? playerHtml(pt, pi, r, review) : '') + '<div class="rd-block">' + P.ex.html(bi) + '</div>';
    }).join('');
    return '<section class="mt-part' + (mat ? ' has-mat' : '') + '" data-part-i="' + pi + '">' +
      '<header class="mt-part__head"><h2 class="t-h2"' + P.ta + '>' + esc(pt.title) + '</h2>' + (pt.ref ? '<p class="t-small mt-part__ref"' + P.ta + '>' + esc(pt.ref) + '</p>' : '') +
      '<p class="t-body mt-part__about"' + P.ta + '>' + md(pt.about) + '</p></header>' +
      (mat ? '<div class="mt-mat"' + P.ta + '>' + mat + '</div>' : '') +
      '<div class="mt-qs"' + P.ta + '>' + qs + '</div></section>';
  }
  function materialHtml(pt, pi, review) {
    var html = '';
    if (pt.recs && (pt.recs.length === 1 || !P.blocks.some(function (b, bi) { return P.partOf[bi] === pi && P.rec[bi] != null; }))) {
      html += pt.recs.map(function (r, ri) { return playerHtml(pt, pi, ri, review); }).join('');
    }
    if (pt.chart) html += chartSvg(pt.chart);
    if (pt.text) html += '<article class="mt-text">' + (pt.text.title ? '<h3 class="t-h3">' + md(pt.text.title) + '</h3>' : '') + paras(pt.text.md) + '</article>';
    (pt.texts || []).forEach(function (x) { html += '<article class="mt-text">' + (x.title ? '<h3 class="t-h3">' + md(x.title) + '</h3>' : '') + paras(x.md) + '</article>'; });
    return html;
  }

  /* Listening: a recording is its lines, played one after another; as many plays as the exam allows */
  function recFiles(pi, ri) {
    var pt = P.paper.parts[pi];
    return pt.recs[ri].lines.map(function (l, li) { return fileFor(P.T.id, P.paper.id + ':' + pt.id + ':r' + ri + ':' + li); });
  }
  function playerHtml(pt, pi, ri, review) {
    var files = recFiles(pi, ri), ready = files.every(Boolean), id = pi + '-' + ri;
    var used = P.plays[id] || 0, left = Math.max(0, (pt.plays || 2) - used);
    var transcript = '<details class="mt-script"' + (review ? '' : ' data-script') + '><summary>' + esc(t('app_mt_script')) + '</summary><div' + P.ta + '>' +
      pt.recs[ri].lines.map(function (l) { return '<p><b>' + esc(l.who) + '</b> ' + md(l.s) + '</p>'; }).join('') + '</div></details>';
    if (review) return '<div class="mt-player is-review">' + transcript + '</div>';
    if (!ready) return '<div class="mt-player"><p class="t-small">' + esc(t('app_mt_no_audio')) + '</p>' + transcript + '</div>';
    var playing = player.id === id;
    return '<div class="mt-player" data-player="' + id + '"><button class="btn btn--primary btn--sm hear' + (playing ? ' is-playing' : '') + '" type="button" data-mt="play" data-rec="' + id + '"' + (!left && !playing ? ' disabled' : '') + '>' +
      A.icon('play') + '<span>' + esc(t(playing ? 'app_mt_stop' : 'app_mt_play')) + '</span></button>' +
      '<div class="meter mt-player__meter" aria-hidden="true"><i data-meter="' + id + '" style="width:' + (playing ? player.pc : 0) + '%"></i></div>' +
      '<p class="t-small">' + esc(left ? A.tn('app_mt_plays_left', left) : t('app_mt_plays_none')) + '</p></div>';
  }
  var player = { id: null, el: null, at: 0, list: [], pc: 0 };
  function stopPlayer() {
    if (player.el) { player.el.pause(); player.el.onended = null; }
    var was = player.id;
    player.id = null; player.list = []; player.pc = 0;
    if (was && P && !P.done) redrawPlayer(was);
  }
  function play(id) {
    if (player.id === id) { stopPlayer(); return; }
    stopPlayer(); EX().stopAudio();
    var parts = id.split('-'), pi = +parts[0], ri = +parts[1], pt = P.paper.parts[pi];
    if ((P.plays[id] || 0) >= (pt.plays || 2)) return;
    P.plays[id] = (P.plays[id] || 0) + 1;
    writeProg();
    player.el = player.el || new Audio();
    player.id = id; player.list = recFiles(pi, ri); player.at = 0; player.pc = 0;
    redrawPlayer(id);
    var next = function () {
      if (player.id !== id) return;
      if (player.at >= player.list.length) { stopPlayer(); return; }
      player.el.src = player.list[player.at++];
      player.el.onended = function () { player.pc = Math.round(player.at / player.list.length * 100); var m = root.querySelector('[data-meter="' + id + '"]'); if (m) m.style.width = player.pc + '%'; setTimeout(next, 350); };
      player.el.play().catch(stopPlayer);
    };
    next();
  }
  function redrawPlayer(id) {
    var el = root && root.querySelector('[data-player="' + id + '"]');
    if (!el) return;
    var parts = id.split('-');
    el.outerHTML = playerHtml(P.paper.parts[+parts[0]], +parts[0], +parts[1], false);
  }

  /* IELTS Writing Task 1: a bar or line chart from the test file */
  var CHART = ['#1a443c', '#d5af33', '#ff9f8a', '#9fd6c7'];
  function chartSvg(c) {
    var W = 560, H = 300, L = 46, R = 12, Tp = 34, B = 40, w = W - L - R, h = H - Tp - B;
    var all = [].concat.apply([], c.series.map(function (s) { return s.values; }));
    var max = Math.max.apply(null, all.concat([0])), step = Math.pow(10, Math.floor(Math.log10(max || 1)));
    [1, 2, 2.5, 5, 10].some(function (m) { if (max / (step * m) <= 6) { step *= m; return true; } return false; });
    var top = Math.ceil(max / step) * step || 1, y = function (v) { return Tp + h - v / top * h; };
    var n = c.labels.length, band = w / n;
    var svg = '<svg class="mt-chart__svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(c.title) + '">';
    for (var v = 0; v <= top + 1e-9; v += step) {
      svg += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + y(v) + '" y2="' + y(v) + '" class="mt-chart__grid"/><text x="' + (L - 8) + '" y="' + (y(v) + 4) + '" text-anchor="end">' + esc(+v.toFixed(2)) + '</text>';
    }
    c.labels.forEach(function (lb, i) { svg += '<text x="' + (L + band * i + band / 2) + '" y="' + (H - B + 18) + '" text-anchor="middle">' + esc(lb) + '</text>'; });
    c.series.forEach(function (s, si) {
      var col = CHART[si % 4];
      if (c.type === 'line') {
        svg += '<polyline fill="none" stroke="' + col + '" stroke-width="3" points="' + s.values.map(function (val, i) { return (L + band * i + band / 2) + ',' + y(val); }).join(' ') + '"/>';
        s.values.forEach(function (val, i) { svg += '<circle cx="' + (L + band * i + band / 2) + '" cy="' + y(val) + '" r="4" fill="' + col + '"/>'; });
      } else {
        var bw = band * 0.72 / c.series.length;
        s.values.forEach(function (val, i) { svg += '<rect x="' + (L + band * i + band * 0.14 + bw * si) + '" y="' + y(val) + '" width="' + (bw - 2) + '" height="' + (Tp + h - y(val)) + '" rx="3" fill="' + col + '"/>'; });
      }
    });
    svg += '</svg>';
    return '<figure class="mt-chart"><figcaption><b>' + esc(c.title) + '</b>' + (c.unit ? ' <span>(' + esc(c.unit) + ')</span>' : '') + '</figcaption>' + svg +
      '<div class="mt-chart__key">' + c.series.map(function (s, si) { return '<span><i style="background:' + CHART[si % 4] + '"></i>' + esc(s.name) + '</span>'; }).join('') + '</div></figure>';
  }

  /* ---------- Timer and navigation ---------- */
  function timerText() {
    var left = P.paper.minutes * 60 - P.spent, over = left < 0, s = Math.abs(left);
    var mm = Math.floor(s / 60), ss = ('0' + (s % 60)).slice(-2);
    if (P.hideTime) return esc(t('app_mt_time_show'));
    return '<span class="mt-timer__t' + (over ? ' is-over' : left < 300 ? ' is-low' : '') + '">' + esc(over ? t('app_mt_over', { time: mm + ':' + ss }) : t('app_mt_left', { time: mm + ':' + ss })) + '</span>';
  }
  function tick() {
    if (!P || P.done || !root.querySelector('.mt') || document.hidden) return;
    P.spent++;
    var el = root.querySelector('[data-mt="time"]');
    if (el) el.innerHTML = timerText();
    if (P.spent === P.paper.minutes * 60) { var f = root.querySelector('[data-foot]'); if (f) f.innerHTML = footHtml(); }
    if (P.spent % 10 === 0) writeProg();
  }
  function missingParts() {
    return P.paper.parts.map(function (pt, pi) { return pi; }).filter(function (pi) {
      return P.blocks.some(function (b, bi) { return P.partOf[bi] === pi && !P.ex.ready(bi); });
    });
  }
  function footHtml() {
    var n = P.paper.parts.length, last = P.part === n - 1;
    var html = '';
    if (P.spent >= P.paper.minutes * 60) html += '<p class="t-small mt-foot__note">' + esc(t('app_mt_time_up')) + '</p>';
    if (P.confirm) {
      var miss = missingParts();
      html += '<div class="mt-confirm" role="alertdialog" aria-live="polite"><p class="t-body">' + esc(miss.length ? t('app_mt_confirm_missing', { parts: miss.map(function (pi) { return P.paper.parts[pi].title; }).join(', ') }) : t('app_mt_confirm')) + '</p>' +
        '<div class="btn-row"><button class="btn btn--primary" type="button" data-mt="finish">' + esc(t('app_mt_finish_yes')) + '</button><button class="btn btn--quiet" type="button" data-mt="nofinish">' + esc(t('app_mt_finish_no')) + '</button></div></div>';
      return html;
    }
    html += '<div class="btn-row">' + (P.part > 0 ? '<button class="btn btn--quiet" type="button" data-mt="prev">' + A.icon('back') + '<span>' + esc(t('app_mt_prev')) + '</span></button>' : '') +
      (last ? '<button class="btn btn--primary" type="button" data-mt="ask">' + esc(t('app_mt_finish')) + '</button>'
        : '<button class="btn btn--primary" type="button" data-mt="next"><span>' + esc(t('app_mt_next', { part: P.paper.parts[P.part + 1].title })) + '</span>' + A.icon('arrow') + '</button>') + '</div>';
    return html;
  }
  function refreshNav() {
    if (!P || P.done) return;
    P.paper.parts.forEach(function (pt, pi) {
      var dot = root.querySelector('[data-tabdot="' + pi + '"]');
      if (dot) dot.classList.toggle('is-done', !P.blocks.some(function (b, bi) { return P.partOf[bi] === pi && !P.ex.ready(bi); }));
    });
  }
  function goPart(i) {
    stopPlayer(); EX().stopAudio();
    P.part = i; P.confirm = false;
    writeProg();
    var box = root.querySelector('[data-part]');
    box.innerHTML = partHtml(i, false);
    root.querySelectorAll('.mt-tab').forEach(function (b, k) { b.classList.toggle('is-on', k === i); if (k === i) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current'); });
    root.querySelector('[data-foot]').innerHTML = footHtml();
    refreshNav();
    P.ex.drawLines();
    var tab = root.querySelector('.mt-tab.is-on');
    if (tab && tab.scrollIntoView) tab.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduced ? 'auto' : 'smooth' });
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  }

  /* ---------- Finishing and results ---------- */
  function finish() {
    stopPlayer(); EX().stopAudio();
    clearInterval(P.timer);
    P.ex.submit();
    var parts = partScores();
    var right = parts.reduce(function (n, x) { return n + x.right; }, 0), total = parts.reduce(function (n, x) { return n + x.total; }, 0);
    P.done = { state: P.ex.state, parts: parts, right: right, total: total, score: total ? Math.round(right / total * 100) : null, spent: P.spent, at: Date.now(), marks: {} };
    clearProg(P.key);
    saveDone(P.key, P.done);
    root.querySelector('.mt').outerHTML = paperView();
    P.ex.drawLines();
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    markAll();
  }
  function partScores() {
    var res = P.ex.results();
    return P.paper.parts.map(function (pt, pi) {
      var mine = res.filter(function (x) { return P.partOf[x.bi] === pi; });
      return { right: mine.filter(function (x) { return x.ok; }).length, total: mine.length };
    });
  }
  function resultsView() {
    var d = P.done, f = FORMATS[P.T.format] || FORMATS.alimun;
    var manual = P.blocks.some(function (b) { return EX().manual[b.kind]; });
    var score = d.score != null ? d.score : manualScore();
    var html = '<section class="card card--forest test-result mt-result" tabindex="-1" aria-live="polite"><div class="card__row"><div class="card__art test-result__art">' +
      A.Cast.book(score == null ? 'happy' : score >= 80 ? 'wow' : score >= 60 ? 'happy' : 'think') + '</div><div>' +
      (score != null ? '<p class="t-num" data-score>' + esc(pct(score)) + '</p>' : '') +
      '<h2 class="t-h2" style="margin-top:10px">' + esc(d.total ? t('app_mt_score', { right: d.right, total: d.total }) : t('app_mt_done_h')) + '</h2>' +
      '<p class="t-body" style="margin-top:8px">' + esc(manual ? t(signedIn() ? 'app_mt_marking_p' : 'app_mt_marking_signin') : f.pass ? t(f.pass) : t('app_mt_result_p')) + '</p>' +
      '<div class="btn-row" style="margin-top:20px"><a class="btn btn--lime" href="#/tests/' + esc(P.T.id) + '/' + esc(P.paper.id) + '/again">' + esc(t('app_mt_again')) + '</a>' +
      '<a class="btn btn--on-forest" href="#/tests/' + esc(P.T.id) + '">' + esc(t('app_mt_back_test')) + '</a></div></div></div></section>';
    if (d.total) {
      html += '<section class="card mt-parts"><h2 class="t-h3">' + esc(t('app_mt_by_part')) + '</h2>' + P.paper.parts.map(function (pt, pi) {
        var x = d.parts[pi];
        if (!x || !x.total) return '';
        var w = Math.round(x.right / x.total * 100);
        return '<div class="mt-parts__row"><span' + P.ta + '>' + esc(pt.title) + '</span><div class="meter" role="img" aria-label="' + esc(t('app_mt_score', { right: x.right, total: x.total })) + '"><i style="width:' + w + '%"></i></div><b>' + esc(x.right + ' / ' + x.total) + '</b></div>';
      }).join('') + '</section>';
    }
    html += P.paper.parts.map(function (pt, pi) { return partHtml(pi, true); }).join('');
    return html;
  }

  /* Writing and speaking: drafted marks against the exam's criteria, one request per writing task or speaking block */
  function markAll() {
    var jobs = [];
    P.blocks.forEach(function (b, bi) {
      if (!EX().manual[b.kind]) return;
      var s = P.ex.state[bi];
      if (b.kind === 'write') b.items.forEach(function (it, i) { if (s.items[i].value && (!b.choose || s.pick === i)) jobs.push({ bi: bi, i: i, kind: 'write' }); });
      else if (s.items.some(function (x) { return x.heard && x.heard !== '…'; })) jobs.push({ bi: bi, i: b.items.length - 1, kind: 'talk' });
    });
    /* Tasks already marked keep their marks (a finished paper opened again only marks what is missing) */
    jobs = jobs.filter(function (j) { var m = P.done.marks[j.bi + '-' + j.i]; return !(m && m.criteria); });
    if (!jobs.length) return;
    if (!signedIn()) { jobs.forEach(function (j) { setMark(j, { note: 'app_mt_mark_signin' }); }); return; }
    var run = function (k) {
      if (k >= jobs.length || !P || !P.done) return;
      var j = jobs[k];
      setMark(j, { wait: true });
      markOne(j).then(function (m) { setMark(j, m); run(k + 1); }, function (e) {
        var note = e && e.note || 'app_mt_mark_error';
        setMark(j, { note: note });
        if (note === 'app_mt_mark_plan' || note === 'app_mt_mark_limit') jobs.slice(k + 1).forEach(function (x) { setMark(x, { note: note }); });
        else run(k + 1);
      });
    };
    run(0);
  }
  function setMark(j, m) {
    var key = j.bi + '-' + j.i;
    P.ex.marks[key] = markHtml(m);
    var slot = root.querySelector('[data-mark="' + key + '"]');
    if (slot) slot.innerHTML = P.ex.marks[key];
    if (m.wait) return;
    P.done.marks[key] = m;
    /* Writing and Speaking papers are scored from the drafted marks */
    if (!P.done.total && m.criteria) {
      var sc = manualScore(), el = root.querySelector('[data-score]');
      P.done.score = sc;
      if (el) el.textContent = pct(sc);
      else { var h = root.querySelector('.mt-result h2'); if (h) h.insertAdjacentHTML('beforebegin', '<p class="t-num" data-score>' + esc(pct(sc)) + '</p>'); }
    }
    saveDone(P.key, P.done, true);
  }
  function manualScore() {
    var marks = P.done ? Object.keys(P.done.marks || {}).map(function (k) { return P.done.marks[k]; }).filter(function (m) { return m && m.criteria; }) : [];
    if (!marks.length) return null;
    var got = 0, max = 0;
    marks.forEach(function (m) { m.criteria.forEach(function (c) { got += c.score; max += m.max; }); });
    return max ? Math.round(got / max * 100) : null;
  }
  function markHtml(m) {
    if (!m) return '';
    if (m.wait) return '<div class="mt-mark is-wait"><div class="loader" style="--w:34px" aria-hidden="true">' + A.loaderInner() + '</div><p class="t-small">' + esc(t('app_mt_marking')) + '</p></div>';
    if (m.note) return '<div class="mt-mark is-note"><p class="t-small">' + esc(t(m.note)) + '</p></div>';
    return '<div class="mt-mark"><h4 class="t-h3">' + esc(t('app_mt_marks_h')) + '</h4>' +
      m.criteria.map(function (c) {
        return '<div class="mt-mark__row"><div class="mt-mark__top"><b>' + esc(c.name) + '</b><span>' + esc(t('app_mt_mark_n', { score: c.score, max: m.max })) + '</span></div>' +
          '<div class="meter" aria-hidden="true"><i style="width:' + Math.round(c.score / m.max * 100) + '%"></i></div>' + (c.comment ? '<p class="t-small">' + esc(c.comment) + '</p>' : '') + '</div>';
      }).join('') +
      (m.summary ? '<p class="t-body mt-mark__sum">' + esc(m.summary) + '</p>' : '') +
      (m.better ? '<div class="mt-mark__better"><p class="t-small"><b>' + esc(t('app_mt_better_h')) + '</b></p><p class="t-body" lang="' + esc(window.AlimunData.langCode(P.T.language) || 'en') + '">' + esc(m.better) + '</p></div>' : '') +
      '<p class="t-tiny">' + esc(t('app_mt_marks_note')) + '</p></div>';
  }
  function markOne(j) {
    var T = P.T, b = P.blocks[j.bi], s = P.ex.state[j.bi], pt = P.paper.parts[P.partOf[j.bi]];
    var scheme = MARKING[b.marking] || MARKING.alimun;
    var names = (scheme[j.kind] || scheme.write).slice();
    if (b.marking === 'ielts' && j.kind === 'write' && pt.chart) names[0] = 'Task Achievement';
    /* The task and the criteria are read on the server from the test file (/api/ai?action=mark-mock); only the answers go */
    var body = { test: T.id, paper: P.paper.id, block: j.bi, item: j.i, ui: A.lang };
    if (j.kind === 'write') body.answer = String(s.items[j.i].value || '').slice(0, 7000);
    else body.answers = b.items.map(function (it, i) { return String(s.items[i].heard || '').slice(0, 2500); });
    return window.AlimunData.token().then(function (tok) {
      if (!tok) throw { note: 'app_mt_mark_signin' };
      return fetch('/api/ai?action=mark-mock', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + tok }, body: JSON.stringify(body) });
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (x) {
        if (res.status === 403) throw { note: 'app_mt_mark_plan' };
        if (res.status === 429) throw { note: 'app_mt_mark_limit' };
        if (!res.ok) throw { note: 'app_mt_mark_error' };
        var j2 = x.result;
        if (!j2) throw { note: 'app_mt_mark_error' };
        var crit = names.map(function (n, k) {
          var c = (j2.criteria || []).filter(function (y) { return y && y.name === n; })[0] || (j2.criteria || [])[k] || {};
          return { name: n, score: Math.max(0, Math.min(scheme.max, Math.round(+c.score || 0))), comment: String(c.comment || '').slice(0, 400) };
        });
        return { criteria: crit, max: scheme.max, summary: String(j2.summary || '').slice(0, 600), better: String(j2.better || '').slice(0, 600) };
      });
    }).catch(function (e) { throw e && e.note ? e : { note: 'app_mt_mark_error' }; });
  }

  /* ---------- Error ---------- */
  function errorView() {
    return '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_tests')) + '</h1></div></div>' +
      '<div class="soon rise"><div class="stage" style="--i:0;background:var(--t-coral)"><div class="bub think">' + esc(t('app_book_error_bub')) + '</div>' + A.Cast.drawing('cat') + '</div>' +
      '<div class="card" style="--i:1"><p class="t-body">' + esc(t('app_book_error')) + '</p><div class="btn-row"><a class="btn btn--primary" href="#/tests">' + esc(t('app_retry')) + '</a></div></div></div>';
  }

  /* ---------- Events ---------- */
  function bind() {
    if (root.__tests) return;
    root.__tests = true;
    root.addEventListener('click', function (e) {
      if (!P || !root.querySelector('.mt')) return;
      var m = e.target.closest('[data-mt]');
      if (m && !m.disabled) {
        var a = m.getAttribute('data-mt');
        if (a === 'part') goPart(+m.getAttribute('data-p'));
        else if (a === 'next') goPart(P.part + 1);
        else if (a === 'prev') goPart(P.part - 1);
        else if (a === 'ask') { P.confirm = true; root.querySelector('[data-foot]').innerHTML = footHtml(); var y = root.querySelector('[data-mt="finish"]'); if (y) y.focus(); }
        else if (a === 'nofinish') { P.confirm = false; root.querySelector('[data-foot]').innerHTML = footHtml(); }
        else if (a === 'finish') finish();
        else if (a === 'play') play(m.getAttribute('data-rec'));
        else if (a === 'time') { P.hideTime = !P.hideTime; m.innerHTML = timerText(); }
        return;
      }
      if (EX().swallowClick()) { e.preventDefault(); return; }
      var el = e.target.closest('[data-act]');
      if (el && !el.disabled) P.ex.act(el.getAttribute('data-act'), el);
    });
    root.addEventListener('input', function (e) { if (P && root.querySelector('.mt')) P.ex.input(e.target); });
    root.addEventListener('change', function (e) { if (P && root.querySelector('.mt')) P.ex.change(e.target); });
    root.addEventListener('keydown', function (e) { if (P && root.querySelector('.mt')) P.ex.keydown(e); });
    root.addEventListener('pointerdown', function (e) { if (P && root.querySelector('.mt')) EX().pointerDown(P.ex, e); });
    window.addEventListener('resize', function () { if (P && root.querySelector('.mt')) P.ex.drawLines(); });
    window.addEventListener('pagehide', writeProg);
  }

  /* ---------- Entry ---------- */
  var mountNo = 0;
  function mount(view, parts, helpers) {
    var my = ++mountNo;
    A = helpers; root = view;
    if (P) { clearInterval(P.timer); writeProg(); }
    stopPlayer();
    P = null;
    if (EX()) EX().stopAudio();
    bind();
    document.body.classList.remove('is-reading');
    view.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + esc(t('app_book_loading')) + '">' + A.loaderInner() + '</div></div>';
    return Promise.all([loadIndex(), loadResults()]).then(function (r) {
      var list = r[0];
      if (my !== mountNo) return { stale: true };
      var summary = parts[0] && list.filter(function (x) { return x.id === parts[0]; })[0];
      if (!summary) return { html: homeView(list), title: t('app_nav_tests') };
      return Promise.all([loadTest(summary.id), loadAudio(summary.id)]).then(function (r2) {
        var T = r2[0];
        var paper = parts[1] && T.papers.filter(function (p) { return p.id === parts[1]; })[0];
        if (!paper) return { html: testView(T, summary), title: testTitle(T) };
        var key = T.id + ':' + paper.id, again = parts[2] === 'again';
        if (again && !readProg(key)) clearProg(key);
        var finished = !again && results[key] ? loadDone(key) : Promise.resolve(null);
        return finished.then(function (done) {
          startPaper(T, paper, done ? null : readProg(key), done);
          return { html: paperView(), title: paper.title + ' – ' + testTitle(T), paper: true };
        });
      });
    }).catch(function (e) {
      console.warn('[Alimun] Tests did not load', e && e.message);
      return { html: errorView(), title: t('app_nav_tests') };
    }).then(function (res) {
      if (res.stale || my !== mountNo) return { stale: true };
      view.innerHTML = res.html;
      if (res.paper) {
        P.ex.drawLines();
        refreshNav();
        if (!P.done) { clearInterval(P.timer); P.timer = setInterval(tick, 1000); }
        else markAll();
      }
      return res;
    });
  }
  function reset() { if (P) { clearInterval(P.timer); writeProg(); } stopPlayer(); }

  /* debug(): the paper on screen (used by scripts/play-tests.js) */
  window.AlimunTests = { mount: mount, reset: reset, debug: function () { return P; }, markHtml: function (m) { return markHtml(m); } };
})();
