/* Alimun app: the course book reader (docs/DASHBOARD_PLAN.md, step 4; book format in docs/BOOKS.md).
   Book > unit > lesson > pages (spreads) > blocks. A lesson is a few full-screen pages turned like a book: it teaches,
   then checks with exercises; the next page opens when the exercises on this one are done. Every unit ends with a
   unit test. Explanations are in the learner's language (or, by choice, the language being learned); example
   sentences, exercises and texts are in the language being learned. Books: /data/books/<book>.<lang>.json.
   Progress: practice_progress for a signed-in student (js/app/data.js), this browser otherwise.
   Routes: #/book, #/book/<book>, #/book/<book>/<unit>, #/book/<book>/<unit>/<lesson>[/<page>], #/book/<book>/<unit>/test.
   Interface text comes from js/translations.js (app_book_* keys). */
(function () {
  'use strict';
  var A = null;          /* helpers from the shell (js/app/shell.js) */
  var root = null;       /* the view the reader draws into */
  var index = null;      /* the list of books */
  var books = {};        /* loaded books by "<id>.<explanation language>" */
  var progress = {};     /* by book id: { "book:<book>:<unit>:<lesson>": { done, score } } */
  var ctx = null;        /* the lesson or unit test on screen */
  var PASS = 70;
  var LOCAL = 'alimun-book-progress';
  var PREF = 'alimun-book-explain';
  var BOOK_LANGS = ['en', 'es', 'fr', 'de', 'pt', 'zh', 'ar', 'it'];
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  /* Book text: escaped, then **bold** and *italic* */
  function md(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\*(.+?)\*/g, '<i>$1</i>');
  }
  function paras(s) {
    return String(s || '').split(/\n\s*\n/).map(function (p) { return '<p>' + md(p.trim()) + '</p>'; }).join('');
  }
  function pct(n) { return new Intl.NumberFormat(A.locale, { style: 'percent' }).format(n / 100); }

  /* ---------- Explanation language ---------- */
  function pref() { try { return localStorage.getItem(PREF) === 'target' ? 'target' : 'mine'; } catch (e) { return 'mine'; } }
  function setPref(v) { try { localStorage.setItem(PREF, v); } catch (e) { /* storage blocked */ } }
  function targetCode(book) { return window.AlimunData.langCode(book.language) || 'en'; }
  function mineCode() { var l = A.lang === 'ma' ? 'fr' : A.lang; return BOOK_LANGS.indexOf(l) > -1 ? l : 'en'; }
  function explainCode(entry) { return pref() === 'target' ? targetCode(entry) : mineCode(); }
  /* lang and dir for explanations and for text in the language being learned */
  function xA(book) { var l = book.explainLang || 'en'; return ' lang="' + l + '" dir="' + (l === 'ar' ? 'rtl' : 'ltr') + '"'; }
  function tA(book) { return ' lang="' + targetCode(book) + '" dir="ltr"'; }

  /* ---------- Loading ---------- */
  function getJSON(url) {
    return fetch(url).then(function (r) { if (!r.ok) throw new Error(url + ' ' + r.status); return r.json(); });
  }
  function loadIndex() {
    return index ? Promise.resolve(index) : getJSON('/data/books/index.json').then(function (x) { index = x.books || []; return index; });
  }
  function loadBook(id, lang) {
    var k = id + '.' + lang;
    return books[k] ? Promise.resolve(books[k]) : getJSON('/data/books/' + encodeURIComponent(k) + '.json').then(function (b) { books[k] = b; return b; });
  }
  function signedIn() { return A.mode() === 'real' && A.data().profile.id; }
  function readLocal() {
    try { return JSON.parse(localStorage.getItem(LOCAL) || '{}') || {}; } catch (e) { return {}; }
  }
  function loadProgress(id) {
    if (progress[id]) return Promise.resolve(progress[id]);
    if (!signedIn()) { progress[id] = readLocal()[id] || {}; return Promise.resolve(progress[id]); }
    return window.AlimunData.bookProgress(A.data().profile.id, id).then(function (list) {
      var m = {};
      list.forEach(function (r) { m[r.ex_key] = { done: !!r.done, score: r.graded_score }; });
      progress[id] = m;
      return m;
    });
  }
  /* Keeps the best score; a finished lesson or passed test stays finished */
  function save(bookId, key, rec) {
    var m = progress[bookId] || (progress[bookId] = {});
    var old = m[key] || {};
    var next = { done: !!(old.done || rec.done), score: Math.max(old.score == null ? -1 : old.score, rec.score == null ? -1 : rec.score) };
    if (next.score < 0) next.score = null;
    m[key] = next;
    if (signedIn()) {
      window.AlimunData.saveBook(A.data().profile.id, key, next).catch(function (e) { console.warn('[Alimun] Book progress not saved', e && e.message); });
    } else {
      try { var all = readLocal(); all[bookId] = m; localStorage.setItem(LOCAL, JSON.stringify(all)); } catch (e) { /* storage blocked */ }
    }
  }

  /* ---------- Book structure ---------- */
  function keyOf(book, unit, page) { return 'book:' + book.id + ':' + unit.id + ':' + (page ? page.id : 'test'); }
  function href(book, unit, page) {
    return '#/book/' + book.id + (unit ? '/' + unit.id + (page === 'test' ? '/test' : page ? '/' + page.id : '') : '');
  }
  function written(book) { return book.units.filter(function (u) { return !u.planned; }); }
  function unitNo(book, unit) { return book.units.indexOf(unit) + 1; }
  function unitTitle(book, unit) { return t('app_book_unit_title', { n: unitNo(book, unit), title: unit.title }); }
  function isDone(book, unit, page) { var r = progress[book.id][keyOf(book, unit, page)]; return !!(r && r.done); }
  function testRec(book, unit) { return progress[book.id][keyOf(book, unit, null)] || null; }
  /* The first lesson not finished, or the first unit test not passed */
  function nextStop(book) {
    var w = written(book);
    for (var i = 0; i < w.length; i++) {
      for (var j = 0; j < w[i].pages.length; j++) if (!isDone(book, w[i], w[i].pages[j])) return { unit: w[i], page: w[i].pages[j] };
      if (!isDone(book, w[i], null)) return { unit: w[i], page: 'test' };
    }
    return null;
  }
  function unitShare(book, unit) {
    var n = unit.pages.length + 1, d = isDone(book, unit, null) ? 1 : 0;
    unit.pages.forEach(function (p) { if (isDone(book, unit, p)) d++; });
    return { done: d, total: n };
  }
  function bookName(b) { return (A.languageName(b.language) + ' ' + b.level).trim(); }
  /* Goal books: a second book for what the learner wants to do with the language (goal_track from sign-up) */
  var GOALS = { relocation: { key: 'app_goal_relocation', art: 'suitcase' }, professional: { key: 'app_goal_professional', art: 'mug' },
    academic: { key: 'app_goal_academic', art: 'owl' }, pleasure: { key: 'app_goal_pleasure', art: 'sun' } };
  function coreOf(b) { return (index || []).filter(function (x) { return x.track === 'core' && x.language === b.language && x.level === b.level; })[0]; }
  function goalShelf(book) {
    var mine = A.data().profile.goal;
    /* Goal books for this course's language and level, the learner's own goal first */
    var list = (index || []).filter(function (x) { return x.track === 'goal' && x.language === book.language && x.level === book.level && x.written > 0; });
    list.sort(function (a, b) { return (b.goal === mine) - (a.goal === mine); });
    var html = '<h2 class="t-h2 span-12 home__section" style="--i:3">' + esc(t('app_book_second_h')) + '</h2>' +
      '<p class="t-body span-12" style="--i:3;margin-top:-6px">' + esc(t('app_book_second_p')) + '</p>';
    var hasMine = list.some(function (x) { return x.goal === mine; });
    list.forEach(function (g, i) {
      var meta = GOALS[g.goal] || GOALS.pleasure;
      html += '<a class="card span-6 goal-card' + (g.goal === mine ? ' is-mine' : '') + '" href="#/book/' + esc(g.id) + '" style="--i:' + (4 + i) + '"><div class="card__row"><div class="card__art">' + A.Cast.drawing(meta.art) + '</div><div>' +
        '<h3 class="t-h2">' + esc(t(meta.key)) + '</h3><p class="t-small" style="margin-top:6px">' + esc(bookName(g)) + '</p>' +
        (g.goal === mine ? '<p class="t-tiny">' + esc(t('app_book_your_goal')) + '</p>' : '') + '</div></div></a>';
    });
    if (mine && GOALS[mine] && !hasMine) {
      html += '<div class="card card--bone span-6 goal-card is-planned" style="--i:' + (4 + list.length) + '"><div class="card__row"><div class="card__art">' + A.Cast.drawing(GOALS[mine].art) + '</div><div>' +
        '<h3 class="t-h2">' + esc(t(GOALS[mine].key)) + '</h3><p class="t-small" style="margin-top:6px">' + esc(t('app_book_writing')) + '</p><p class="t-tiny">' + esc(t('app_book_your_goal')) + '</p></div></div></div>';
    }
    return list.length || (mine && GOALS[mine]) ? html : '';
  }
  function meter(share) {
    var w = share.total ? Math.round(share.done / share.total * 100) : 0;
    return '<div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + w + '" aria-label="' + esc(t('app_book_progress')) + '"><i style="width:' + w + '%"></i></div>';
  }
  function backLink(to, label, attrs) {
    return '<a class="rd-back" href="' + to + '"' + (attrs || '') + '>' + A.icon('back') + '<span>' + esc(label) + '</span></a>';
  }
  /* The switch between explanations in the learner's language and in the language being learned */
  function explainSwitch(book) {
    var mine = mineCode(), target = targetCode(book);
    if (mine === target) return '';
    var name = function (code) {
      try { return A.cap(new Intl.DisplayNames([A.locale], { type: 'language' }).of(code)); } catch (e) { return code; }
    };
    var cur = pref();
    return '<div class="xswitch" role="group" aria-label="' + esc(t('app_book_explain')) + '"><span class="xswitch__label">' + esc(t('app_book_explain')) + '</span>' +
      '<button type="button" data-act="explain" data-v="mine" aria-pressed="' + (cur === 'mine') + '">' + esc(name(mine)) + '</button>' +
      '<button type="button" data-act="explain" data-v="target" aria-pressed="' + (cur === 'target') + '">' + esc(name(target)) + '</button></div>';
  }

  /* ---------- Book and unit screens ---------- */
  function coverView(book) {
    var w = written(book);
    var share = { done: 0, total: 0 };
    w.forEach(function (u) { var s = unitShare(book, u); share.done += s.done; share.total += s.total; });
    var stop = nextStop(book);
    var mine = A.data().profile.language === book.language && A.data().profile.level === book.level;
    var lead, h, btn;
    if (!w.length) {
      h = t('app_book_none_h'); lead = t('app_book_soon_p'); btn = '';
    } else if (!stop) {
      h = t('app_book_all_h'); lead = t('app_book_all_p'); btn = '';
    } else {
      h = share.done ? t('app_book_continue_h') : t('app_book_start_h');
      var what = stop.page === 'test' ? t('app_book_test') : stop.page.title;
      lead = t('app_book_next_line', { unit: unitTitle(book, stop.unit), page: what });
      btn = '<a class="btn btn--lime" href="' + href(book, stop.unit, stop.page) + '">' + esc(share.done ? t('app_book_continue') : t('app_book_start')) + A.icon('arrow') + '</a>';
    }
    var isGoal = book.track === 'goal', core = isGoal && coreOf(book);
    var html = '' + (core ? backLink('#/book/' + core.id, bookName(core)) : '') +
      '<div class="view__head"><div><h1 class="t-h1"' + (isGoal ? xA(book) : '') + '>' + esc(isGoal ? book.title : bookName(book)) + '</h1><p class="t-lead">' + esc(isGoal ? t('app_book_goal_lead', { course: bookName(book) }) : t('app_book_lead')) + '</p></div>' +
        '<div class="btn-row">' + explainSwitch(book) + (mine || isGoal ? '' : '<a class="btn btn--ghost btn--sm" href="#/book/' + esc(A.myBookId()) + '">' + esc(t('app_book_mine')) + '</a>') + '</div></div>' +
      '<div class="grid rise">' +
        '<section class="card card--forest span-8 cover-card" style="--i:0" aria-labelledby="h-cont">' +
          '<h2 class="t-h1" id="h-cont">' + esc(h) + '</h2>' +
          '<p class="t-lead" style="margin-top:12px"' + xA(book) + '>' + esc(lead) + '</p>' +
          '<div style="margin-top:24px">' + meter(share) + '</div>' +
          (btn ? '<div class="btn-row" style="margin-top:24px">' + btn + '</div>' : '') +
        '</section>' +
        '<section class="stage span-4" style="--i:1;background:var(--t-sun)" aria-label="' + esc(t('app_home_buddy')) + '">' +
          '<div class="bub say">' + esc(t(share.done ? 'app_book_bub_back' : 'app_book_bub_start')) + '</div>' + A.Cast.drawing(A.buddyFor(book.language)) + '</section>' +
        (book.review === 'draft' ? '<section class="card card--bone span-12 draft-note" style="--i:2" role="note"><h2 class="t-h3">' + esc(t('app_book_draft_h')) + '</h2><p class="t-small" style="margin-top:6px">' + esc(t('app_book_draft_p')) + '</p></section>' : '') +
        (isGoal ? '' : goalShelf(book)) +
        '<h2 class="t-h2 span-12 home__section" style="--i:3">' + esc(t('app_book_units')) + '</h2>';
    book.units.forEach(function (u, i) {
      var style = ' style="--i:' + (4 + i) + '"';
      if (u.planned) {
        html += '<div class="card card--bone span-6 rd-unit is-planned"' + style + '><h3 class="t-h3"' + xA(book) + '>' + esc(unitTitle(book, u)) + '</h3>' +
          '<p class="t-small" style="margin-top:8px">' + esc(t('app_book_writing')) + '</p></div>';
        return;
      }
      var s = unitShare(book, u);
      var state = s.done === s.total ? t('app_book_unit_done') : s.done ? t('app_book_unit_going') : t('app_book_unit_new');
      html += '<a class="card span-6 rd-unit" href="' + href(book, u) + '"' + style + '><div class="card__row"><div class="card__art">' + A.Cast.drawing(u.art || 'owl') + '</div>' +
        '<div style="flex:1;min-width:0"' + xA(book) + '><h3 class="t-h3">' + esc(unitTitle(book, u)) + '</h3>' +
        '<p class="t-small" style="margin-top:8px">' + esc(u.goal) + '</p>' +
        '<div style="margin-top:14px">' + meter(s) + '</div><p class="t-tiny" style="margin-top:8px">' + esc(state) + '</p></div></div></a>';
    });
    html += localNote() + '</div>';
    return html;
  }

  function localNote() {
    if (signedIn()) return '';
    return '<p class="t-tiny span-12" style="--i:12;margin-top:4px">' + esc(t('app_book_local')) + '</p>';
  }

  function unitView(book, unit) {
    var stop = nextStop(book);
    var html = '' + backLink(href(book), bookName(book)) +
      '<div class="view__head"><div' + xA(book) + '><h1 class="t-h1">' + esc(unitTitle(book, unit)) + '</h1>' +
        '<p class="t-lead">' + esc(unit.goal) + '</p></div>' + explainSwitch(book) + '</div>' +
      '<div class="grid rise">' +
        '<h2 class="t-h2 span-12 home__section" style="--i:0">' + esc(t('app_book_pages')) + '</h2>';
    unit.pages.forEach(function (p, i) {
      var done = isDone(book, unit, p);
      var next = stop && stop.unit === unit && stop.page === p;
      html += '<a class="card span-6 rd-page' + (done ? ' card--leaf' : '') + (next ? ' is-next' : '') + '" href="' + href(book, unit, p) + '" style="--i:' + (1 + i) + '">' +
        '<div class="card__row"><div class="rd-page__art">' + A.Cast.drawing(p.art || 'owl') + '<span class="rd-mark' + (done ? ' is-done' : '') + '" aria-hidden="true">' + A.icon(done ? 'check' : 'arrow') + '</span></div>' +
        '<div style="min-width:0"' + xA(book) + '><h3 class="t-h3">' + esc(p.title) + '</h3>' +
        '<p class="t-small" style="margin-top:6px">' + esc(p.about) + '</p>' +
        (done ? '<p class="t-tiny" style="margin-top:6px">' + esc(t('app_book_page_done')) + '</p>' : next ? '<p class="t-tiny" style="margin-top:6px">' + esc(t('app_book_up_next')) + '</p>' : '') +
        '</div></div></a>';
    });
    var rec = testRec(book, unit);
    html += '<a class="card card--sun span-12 rd-testcard" href="' + href(book, unit, 'test') + '" style="--i:' + (2 + unit.pages.length) + '">' +
      '<div class="card__row"><div class="card__art">' + A.Cast.drawing('dragon') + '</div><div>' +
      '<h3 class="t-h2">' + esc(t('app_book_test')) + '</h3>' +
      '<p class="t-body" style="margin-top:8px">' + esc(rec && rec.score != null ? t(rec.done ? 'app_book_test_best_pass' : 'app_book_test_best', { score: pct(rec.score) }) : t('app_book_test_p', { pass: pct(PASS) })) + '</p>' +
      '</div></div></a>' + localNote() + '</div>';
    return html;
  }

  /* ---------- Course audio (step 5): /data/audio/<book>.json and the files made so far ---------- */
  var SUPA_AUDIO = 'https://dgaiasmefcbrtzqwdyri.supabase.co/storage/v1/object/public/course-audio/';
  var audio = {};   /* by book id: { items, done } (empty when there is no audio yet) */
  function loadAudio(id) {
    if (audio[id]) return Promise.resolve(audio[id]);
    var get = function (u) { return fetch(u).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }); };
    return Promise.all([get('/data/audio/' + encodeURIComponent(id) + '.json'), get(SUPA_AUDIO + encodeURIComponent(id) + '/manifest.json')]).then(function (r) {
      audio[id] = { items: (r[0] && r[0].items) || {}, done: (r[1] && r[1].done) || {} };
      return audio[id];
    });
  }
  /* The file for an item of the lesson on screen, if it has been made */
  function audioSrc(gi, i) {
    var a = ctx && ctx.page && audio[ctx.book.id];
    if (!a) return '';
    var it = a.items[ctx.unit.id + ':' + ctx.page.id + ':' + gi + ':' + i];
    return it && a.done[it[0]] ? SUPA_AUDIO + encodeURIComponent(ctx.book.id) + '/' + it[0] + '.mp3' : '';
  }
  var player = null, queue = null;
  function stopAudio() {
    if (player) { player.pause(); player.onended = null; }
    if (queue) { queue.list.forEach(function (x) { if (x.el) x.el.classList.remove('is-speaking'); }); if (queue.btn) queue.btn.classList.remove('is-playing'); }
    queue = null;
  }
  /* Plays files one after another; each element is marked while it is spoken */
  function playList(list, btn, before) {
    var same = queue && queue.btn === btn;
    stopAudio();
    if (same) return;
    player = player || new Audio();
    queue = { list: list, btn: btn, at: 0 };
    btn.classList.add('is-playing');
    var q = queue;
    var next = function () {
      if (queue !== q) return;
      if (q.at > 0 && q.list[q.at - 1].el) q.list[q.at - 1].el.classList.remove('is-speaking');
      if (q.at >= q.list.length) { btn.classList.remove('is-playing'); queue = null; return; }
      var x = q.list[q.at++];
      if (before) before(x);
      if (x.el) x.el.classList.add('is-speaking');
      player.src = x.src;
      player.onended = function () { setTimeout(next, 250); };
      player.play().catch(function () { stopAudio(); });
    };
    next();
  }
  /* Listen to a whole dialogue (lines appear as they are spoken) or a reading (paragraph by paragraph) */
  function listen(btn) {
    var box = btn.closest('[data-dialogue], [data-reading]');
    var els = Array.prototype.slice.call(box.querySelectorAll('[data-src]'));
    if (box.hasAttribute('data-dialogue') && !(queue && queue.btn === btn)) {
      clearTimeout(box.__timer);
      els.forEach(function (l) { l.classList.remove('is-on', 'is-typing'); });
    }
    playList(els.map(function (el) { return { src: el.getAttribute('data-src'), el: el }; }), btn, function (x) { x.el.classList.add('is-on'); });
  }

  /* ---------- Teaching blocks ---------- */
  function blockHtml(b, gi) {
    var book = ctx.book;
    switch (b.t) {
      case 'text': return '<div class="rd-text">' + paras(b.md) + '</div>';
      case 'examples':
        return '<div class="rd-examples">' + b.items.map(function (x, k) {
          var ex = !x.n ? '<div class="rd-ex"><p class="rd-ex__s"' + tA(book) + '>' + md(x.s) + '</p></div>'
            : '<button class="rd-ex is-tap" type="button" data-act="why" aria-expanded="false" style="--k:' + k + '"><span class="rd-ex__s"' + tA(book) + '>' + md(x.s) + '</span>' +
              '<span class="rd-ex__hint">' + esc(t('app_book_why_tap')) + '</span><span class="rd-ex__n"><span>' + md(x.n) + '</span></span></button>';
          var src = audioSrc(gi, k);
          return src ? '<div class="rd-exrow" style="--k:' + k + '"><button class="say" type="button" data-act="say" data-src="' + esc(src) + '" aria-label="' + esc(t('app_book_play')) + '">' + A.icon('play') + '</button>' + ex + '</div>' : ex;
        }).join('') + '</div>';
      case 'table': {
        var ex = b.explain || [];
        var own = function (k) { return ex.indexOf('col' + k) > -1 ? '' : tA(book); };
        var head = '<thead><tr>' + b.head.map(function (h) { return '<th scope="col"' + (ex.indexOf('head') > -1 ? '' : tA(book)) + '>' + md(h) + '</th>'; }).join('') + '</tr></thead>';
        var rows = b.rows.map(function (r, ri) {
          return '<tr style="--k:' + ri + '">' + r.map(function (c, k) {
            if (k === 0) return '<th scope="row"' + own(0) + '>' + md(c) + '</th>';
            return '<td' + own(k) + '>' + (b.quiz ? '<button class="cell" type="button" data-act="cell" tabindex="-1">' + md(c) + '</button>' : md(c)) + '</td>';
          }).join('') + '</tr>';
        }).join('');
        return '<figure class="rd-table' + (b.quiz ? ' is-quiz' : '') + '" data-table>' +
          '<div class="rd-table__top">' + (b.caption ? '<figcaption>' + md(b.caption) + '</figcaption>' : '') +
          (b.quiz ? '<button class="linkish" type="button" data-act="quiz" aria-pressed="false">' + esc(t('app_book_quiz')) + '</button>' : '') + '</div>' +
          '<p class="t-small rd-table__hint">' + esc(t('app_book_quiz_hint')) + '</p>' +
          '<div class="rd-table__scroll"><table>' + head + '<tbody>' + rows + '</tbody></table></div></figure>';
      }
      case 'dialogue': {
        var who = [];
        b.lines.forEach(function (l) { if (who.indexOf(l.who) === -1) who.push(l.who); });
        return '<figure class="rd-dialogue" data-dialogue>' + (b.title ? '<figcaption>' + md(b.title) + '</figcaption>' : '') +
          '<div class="chat"' + tA(book) + '>' + b.lines.map(function (l, k) {
            var side = who.indexOf(l.who) % 2;
            var src = audioSrc(gi, k);
            return '<div class="chat__line chat__line--' + side + '" style="--k:' + k + '"' + (src ? ' data-src="' + esc(src) + '"' : '') + '><span class="chat__who" aria-hidden="true">' + esc(l.who.charAt(0)) + '</span>' +
              '<p><b>' + esc(l.who) + '</b><span>' + md(l.s) + '</span></p></div>';
          }).join('') + '</div>' +
          (b.lines.every(function (l, k) { return audioSrc(gi, k); })
            ? '<button class="btn btn--primary btn--sm listen" type="button" data-act="listen">' + A.icon('play') + '<span>' + esc(t('app_book_listen')) + '</span></button>'
            : '<button class="linkish" type="button" data-act="replay">' + esc(t('app_book_replay')) + '</button>') + '</figure>';
      }
      case 'tip':
        return '<aside class="rd-tip"><div class="rd-tip__art">' + A.Cast.drawing(b.art || 'owl') + '</div><div class="bub say bub--inline rd-tip__bub">' + md(b.md) + '</div></aside>';
      case 'reading':
        var ps = String(b.md || '').split(/\n\s*\n/);
        var heard = ps.every(function (p, k) { return !p.trim() || audioSrc(gi, k); });
        return '<section class="rd-reading" data-reading' + tA(book) + '>' + (b.title ? '<h2 class="t-h2">' + esc(b.title) + '</h2>' : '') +
          (heard ? '<button class="btn btn--primary btn--sm listen" type="button" data-act="listen">' + A.icon('play') + '<span>' + esc(t('app_book_listen')) + '</span></button>' : '') +
          ps.map(function (p, k) { var src = heard && audioSrc(gi, k); return '<p' + (src ? ' data-src="' + esc(src) + '"' : '') + '>' + md(p.trim()) + '</p>'; }).join('') + '</section>';
      case 'ex': return ctx.ex.html(gi);
      default: return '';
    }
  }

  /* ---------- Exercises (js/app/exercises.js) ---------- */
  var PRAISE = ['app_book_right_1', 'app_book_right_2', 'app_book_right_3'];
  function praise(b, i) { return t(PRAISE[(b + i) % 3]); }
  /* Each answer also goes to the Practice memory (js/app/practice.js), so mistakes come back in practice rounds */
  function session(blocks, test) {
    var base = ctx.book.id + ':' + ctx.unit.id + ':' + (ctx.page ? ctx.page.id : 'test') + ':';
    return window.AlimunEx.create({ A: A, blocks: blocks, test: test, xa: xA(ctx.book), ta: tA(ctx.book), root: function () { return root; },
      onAnswer: afterPractice, onChange: refreshEnd,
      onItem: function (r) { if (window.AlimunPractice) window.AlimunPractice.record(base + r.bi + ':' + r.i, r.ok); } });
  }

  /* ---------- Lessons: a few full pages, turned one at a time ---------- */
  function startLesson(book, unit, page, at) {
    var blocks = [], spreads = [];
    page.spreads.forEach(function (sp) {
      spreads.push(sp.map(function (b) { blocks.push(b); return blocks.length - 1; }));
    });
    ctx = { kind: 'page', book: book, unit: unit, page: page, blocks: blocks, spreads: spreads, at: Math.max(0, Math.min(at || 0, spreads.length)),
      key: keyOf(book, unit, page), saved: false, mood: 'idle', line: '' };
    ctx.ex = session(blocks, false);
    if (isDone(book, unit, page)) ctx.seen = spreads.length; else ctx.seen = 0;
  }
  function spreadOpen(si) {
    return ctx.spreads[si].every(function (gi) { return ctx.ex.done(gi); });
  }
  function canGo(si) { return si <= ctx.seen || spreadOpen(si - 1); }
  function lessonComplete() {
    return ctx.ex.allDone();
  }

  function lessonView() {
    var book = ctx.book, unit = ctx.unit;
    document.body.classList.add('is-reading');
    return '<div class="lesson">' +
      '<div class="lesson__top">' + backLink(href(book, unit), unitTitle(book, unit), xA(book)) + explainSwitch(book) + '</div>' +
      '<div class="lesson__bar" aria-hidden="true"><i></i></div>' +
      '<div class="lesson__stage" data-stage>' + spreadHtml(ctx.at, '') + '</div>' +
      '<nav class="lesson__nav" data-nav>' + navHtml() + '</nav>' +
    '</div>';
  }

  function coachHtml() {
    var line = ctx.line || t('app_book_coach_start');
    return '<div class="coach" data-coach><div class="bub ' + (ctx.mood === 'think' ? 'think' : 'say') + ' coach__bub">' + esc(line) + '</div>' + A.Cast.book(ctx.mood) + '</div>';
  }

  function spreadHtml(si, turn) {
    var book = ctx.book, page = ctx.page;
    var cls = 'spread' + (turn ? ' turn-in-' + turn : '');
    if (si >= ctx.spreads.length) return endSpread(cls);
    var ids = ctx.spreads[si];
    var bl = ids.map(function (gi) { return ctx.blocks[gi]; });
    var hasEx = bl.some(function (b) { return b.t === 'ex'; });
    var left = [], right = [];
    ids.forEach(function (gi) {
      var b = ctx.blocks[gi];
      if (hasEx) (b.t === 'ex' ? right : left).push(gi);
      else ((b.t === 'text' || b.t === 'tip') ? left : right).push(gi);
    });
    var col = function (list) { return list.map(function (gi, k) { return '<div class="rd-block" style="--i:' + (k + 1) + '">' + blockHtml(ctx.blocks[gi], gi) + '</div>'; }).join(''); };
    var head = si === 0 ? '<header class="spread__head" style="--i:0"><div><h1 class="t-display">' + esc(page.title) + '</h1>' +
      (page.about ? '<p class="t-lead">' + esc(page.about) + '</p>' : '') + '</div><div class="spread__art">' + A.Cast.drawing(page.art || 'owl') + '</div></header>' : '';
    var body;
    if (hasEx && !left.length) {
      ctx.mood = spreadOpen(si) ? 'wow' : ctx.mood === 'wow' ? 'idle' : ctx.mood;
      body = '<div class="spread__cols spread__cols--ex"><div class="spread__side">' + coachHtml() + '</div><div class="spread__main">' + col(right) + '</div></div>';
    } else if (left.length && right.length) {
      body = '<div class="spread__cols"><div class="spread__main">' + col(left) + '</div><div class="spread__main">' + col(right) + '</div></div>';
    } else {
      body = '<div class="spread__one">' + col(left.concat(right)) + '</div>';
    }
    return '<article class="' + cls + '" data-spread="' + si + '"' + xA(book) + '>' + head + body + '</article>';
  }

  function endSpread(cls) {
    var book = ctx.book, unit = ctx.unit, i = unit.pages.indexOf(ctx.page), last = i === unit.pages.length - 1;
    var next = last ? href(book, unit, 'test') : href(book, unit, unit.pages[i + 1]);
    return '<article class="' + cls + ' spread--end" data-spread="end"' + xA(book) + '>' +
      '<div class="end"><div class="end__art">' + A.Cast.drawing('dog') + '<div class="bub say end__bub">' + esc(t(last ? 'app_book_unit_end_p' : 'app_book_page_end_p')) + '</div></div>' +
      '<h1 class="t-display">' + esc(t('app_book_page_end_h')) + '</h1>' +
      '<p class="t-lead">' + esc(ctx.page.title) + '</p>' +
      '<div class="btn-row" style="margin-top:26px;justify-content:center"><a class="btn btn--primary" href="' + next + '">' + esc(t(last ? 'app_book_to_test' : 'app_book_next_lesson')) + A.icon('arrow') + '</a>' +
      '<a class="btn btn--quiet" href="' + href(book, unit) + '">' + esc(t('app_book_back_unit')) + '</a></div></div></article>';
  }

  function navHtml() {
    var si = ctx.at, n = ctx.spreads.length;
    if (si >= n) return '<button class="icon-btn lesson__prev" type="button" data-act="prev" aria-label="' + esc(t('app_book_prev')) + '">' + A.icon('back') + '</button><span></span><span></span>';
    var open = spreadOpen(si) || si < ctx.seen;
    var hint = open ? '' : t('app_book_locked');
    return '<button class="icon-btn lesson__prev" type="button" data-act="prev" aria-label="' + esc(t('app_book_prev')) + '"' + (si === 0 ? ' disabled' : '') + '>' + A.icon('back') + '</button>' +
      '<p class="lesson__hint" aria-live="polite">' + esc(hint) + '</p>' +
      '<button class="btn btn--primary lesson__next" type="button" data-act="next"' + (open ? '' : ' disabled') + '>' + esc(t(si === n - 1 ? 'app_book_finish' : 'app_book_next')) + A.icon('arrow') + '</button>';
  }
  function updateBar() {
    var bar = root.querySelector('.lesson__bar i');
    if (bar) bar.style.width = Math.round(Math.min(ctx.at, ctx.spreads.length) / ctx.spreads.length * 100) + '%';
  }
  function refreshNav() { var n = root.querySelector('[data-nav]'); if (n) n.innerHTML = navHtml(); updateBar(); }

  function go(si) {
    if (!ctx || ctx.kind !== 'page' || si < 0 || si > ctx.spreads.length || si === ctx.at) return;
    stopAudio();
    if (si > ctx.at && !canGo(si)) return;
    var dir = si > ctx.at ? 'next' : 'prev';
    ctx.seen = Math.max(ctx.seen, si);
    var stage = root.querySelector('[data-stage]');
    var old = stage.querySelector('.spread');
    ctx.at = si;
    if (si === ctx.spreads.length) finishLesson();
    ctx.line = ''; if (ctx.mood !== 'wow') ctx.mood = 'idle';
    var html = spreadHtml(si, reduced ? '' : dir);
    if (old && !reduced) {
      old.classList.add('turn-out-' + dir);
      old.setAttribute('aria-hidden', 'true');
      stage.insertAdjacentHTML('beforeend', html);
      setTimeout(function () { if (old.parentNode) old.parentNode.removeChild(old); }, 520);
    } else stage.innerHTML = html;
    try { history.replaceState(null, '', href(ctx.book, ctx.unit, ctx.page) + (si ? '/' + si : '')); } catch (e) { /* file:// */ }
    refreshNav();
    afterSpread();
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    var cur = stage.querySelector('.spread:not([aria-hidden])');
    if (cur) { cur.setAttribute('tabindex', '-1'); cur.focus({ preventScroll: true }); }
  }
  function finishLesson() {
    if (ctx.saved) return;
    ctx.saved = true;
    var f = ctx.ex.firstTally();
    save(ctx.book.id, ctx.key, { done: true, score: f.total ? Math.round(f.right / f.total * 100) : 100 });
  }
  /* Things that run once a page is on screen: dialogues play, lines are drawn */
  function afterSpread() {
    var cur = root.querySelector('.spread:not([aria-hidden])') || root;
    cur.querySelectorAll('[data-dialogue]').forEach(playDialogue);
    requestAnimationFrame(function () { if (ctx && ctx.ex) ctx.ex.drawLines(cur); fitTables(cur); });
  }

  /* A table wider than its page is shrunk to fit, never widening the screen; tapping it opens it full screen */
  function fitTables(scope) {
    (scope || root).querySelectorAll('.rd-table__scroll').forEach(function (box) {
      var tb = box.querySelector('table');
      var old = box.querySelector('.rd-table__open');
      if (old) old.remove();
      box.classList.remove('is-fit'); box.removeAttribute('data-act'); box.removeAttribute('role'); box.removeAttribute('tabindex'); box.removeAttribute('aria-label');
      tb.style.transform = ''; box.style.height = ''; tb.style.width = '';
      /* Cells wrap first; only a table that still does not fit is shrunk */
      var need = tb.offsetWidth, have = box.clientWidth;
      if (need <= have + 1) return;
      tb.style.width = need + 'px';
      var k = have / need;
      box.classList.add('is-fit');
      tb.style.transform = 'scale(' + k + ')';
      box.style.height = Math.ceil(tb.offsetHeight * k) + 'px';
      box.setAttribute('data-act', 'enlarge'); box.setAttribute('role', 'button'); box.setAttribute('tabindex', '0');
      box.setAttribute('aria-label', t('app_book_table_open'));
      box.insertAdjacentHTML('beforeend', '<span class="rd-table__open" aria-hidden="true">' + A.icon('expand') + esc(t('app_book_table_open')) + '</span>');
    });
  }
  var viewer = null;
  function openTable(box) {
    var fig = box.closest('[data-table]'), cap = fig.querySelector('figcaption');
    var tb = box.querySelector('table').cloneNode(true);
    tb.removeAttribute('style');
    var wrap = document.createElement('div');
    wrap.className = 'tv';
    wrap.setAttribute('role', 'dialog'); wrap.setAttribute('aria-modal', 'true');
    wrap.setAttribute('aria-label', cap ? cap.textContent : t('app_book_table_open'));
    var book = ctx && ctx.book;
    if (book) { wrap.setAttribute('lang', book.explainLang || 'en'); wrap.setAttribute('dir', book.explainLang === 'ar' ? 'rtl' : 'ltr'); }
    wrap.innerHTML = '<div class="tv__top"><p class="tv__title">' + (cap ? cap.innerHTML : '') + '</p>' +
      '<button class="icon-btn" type="button" data-act="zoom" data-z="-1" aria-label="' + esc(t('app_book_zoom_out')) + '">' + A.icon('minus') + '</button>' +
      '<button class="icon-btn" type="button" data-act="zoom" data-z="1" aria-label="' + esc(t('app_book_zoom_in')) + '">' + A.icon('plus') + '</button>' +
      '<button class="icon-btn" type="button" data-act="tvclose" aria-label="' + esc(t('app_book_table_close')) + '">' + A.icon('close') + '</button></div>' +
      '<p class="t-tiny tv__hint">' + esc(t('app_book_table_hint')) + '</p>' +
      '<div class="tv__body"><div class="rd-table' + (fig.classList.contains('is-hidden') ? ' is-quiz is-hidden' : '') + '"><div class="tv__zoom"></div></div></div>';
    wrap.querySelector('.tv__zoom').appendChild(tb);
    tb.querySelectorAll('.cell').forEach(function (c) { c.tabIndex = 0; });
    root.appendChild(wrap);
    document.documentElement.style.overflow = 'hidden';
    viewer = { el: wrap, z: 1, back: box };
    var body = wrap.querySelector('.tv__body'), pinch = null;
    body.addEventListener('touchstart', function (e) {
      if (e.touches.length === 2) pinch = { d: dist(e.touches), z: viewer.z };
    }, { passive: true });
    body.addEventListener('touchmove', function (e) {
      if (!pinch || e.touches.length !== 2) return;
      e.preventDefault();
      setZoom(pinch.z * dist(e.touches) / pinch.d);
    }, { passive: false });
    body.addEventListener('touchend', function (e) { if (e.touches.length < 2) pinch = null; });
    wrap.querySelector('[data-act="tvclose"]').focus();
  }
  function dist(tt) { return Math.hypot(tt[0].clientX - tt[1].clientX, tt[0].clientY - tt[1].clientY) || 1; }
  function setZoom(z) {
    if (!viewer) return;
    viewer.z = Math.max(0.6, Math.min(3, z));
    viewer.el.querySelector('.tv__zoom').style.zoom = viewer.z;
  }
  function closeTable() {
    if (!viewer) return;
    var back = viewer.back;
    viewer.el.remove(); viewer = null;
    document.documentElement.style.overflow = '';
    if (back && back.isConnected) back.focus({ preventScroll: true });
  }
  function playDialogue(fig) {
    var lines = fig.querySelectorAll('.chat__line');
    lines.forEach(function (l) { l.classList.remove('is-on', 'is-typing'); });
    if (reduced) { lines.forEach(function (l) { l.classList.add('is-on'); }); return; }
    var k = 0;
    clearTimeout(fig.__timer);
    var step = function () {
      if (k >= lines.length || !fig.isConnected) return;
      var l = lines[k++];
      l.classList.add('is-typing');
      fig.__timer = setTimeout(function () {
        l.classList.remove('is-typing'); l.classList.add('is-on');
        fig.__timer = setTimeout(step, 380);
      }, 520 + Math.min(900, l.textContent.length * 14));
    };
    fig.__timer = setTimeout(step, 450);
  }

  /* The book character beside the exercises */
  function react(mood, line) {
    if (!ctx || ctx.kind !== 'page') return;
    ctx.mood = mood; ctx.line = line;
    var c = root.querySelector('.spread:not([aria-hidden]) [data-coach]');
    if (c) c.outerHTML = coachHtml();
  }

  /* ---------- Unit test ---------- */
  function startTest(book, unit) {
    var blocks = unit.test;
    ctx = { kind: 'test', book: book, unit: unit, page: null, blocks: blocks, key: keyOf(book, unit, null), result: null };
    ctx.ex = session(blocks, true);
  }
  function testView(book, unit) {
    startTest(book, unit);
    document.body.classList.remove('is-reading');
    var rec = testRec(book, unit);
    return backLink(href(book, unit), unitTitle(book, unit), xA(book)) +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_book_test')) + '</h1>' +
        '<p class="t-lead"' + xA(book) + '>' + esc(unitTitle(book, unit)) + '</p></div>' + explainSwitch(book) + '</div>' +
      '<div data-result></div>' +
      '<div class="grid rise" style="margin-bottom:var(--gap)">' +
        '<section class="card span-8 card--center" style="--i:0"><p class="t-body">' + esc(t('app_book_test_intro', { pass: pct(PASS) })) + '</p>' +
          (rec && rec.score != null ? '<p class="t-small" style="margin-top:10px">' + esc(t('app_book_test_best', { score: pct(rec.score) })) + '</p>' : '') + '</section>' +
        '<section class="stage span-4" style="--i:1;background:var(--t-lime);min-height:240px"><div class="bub say">' + esc(t('app_book_test_bub')) + '</div>' + A.Cast.drawing('dragon') + '</section>' +
      '</div>' +
      '<article class="paper rise"' + xA(book) + '>' +
        unit.test.map(function (b, i) { return '<div class="rd-block" style="--i:' + (i + 2) + '">' + blockHtml(b, i) + '</div>'; }).join('') +
      '</article>' +
      '<div data-end>' + testEnd() + '</div>';
  }
  function testEnd() {
    if (ctx.result) {
      return '<section class="card card--bone page-end"><div class="btn-row">' +
        '<button class="btn btn--primary" type="button" data-act="retake">' + esc(t('app_book_test_retake')) + '</button>' +
        '<a class="btn btn--quiet" href="' + href(ctx.book, ctx.unit) + '">' + esc(t('app_book_back_unit')) + '</a></div></section>';
    }
    var ready = ctx.ex.allReady();
    return '<section class="card card--bone page-end">' +
      (ready ? '' : '<p class="t-small" style="margin-bottom:14px">' + esc(t('app_book_test_answer_all')) + '</p>') +
      '<button class="btn btn--primary" type="button" data-act="submit"' + (ready ? '' : ' disabled') + '>' + esc(t('app_book_test_submit')) + '</button></section>';
  }
  function resultHtml(score) {
    var pass = score >= PASS;
    var mood = score >= 90 ? 'wow' : pass ? 'happy' : 'think';
    var w = written(ctx.book), ui = w.indexOf(ctx.unit);
    var next = pass && w[ui + 1] ? '<a class="btn btn--lime" href="' + href(ctx.book, w[ui + 1]) + '">' + esc(t('app_book_next_unit')) + A.icon('arrow') + '</a>'
      : pass ? '<a class="btn btn--lime" href="' + href(ctx.book) + '">' + esc(t('app_book_back_book')) + '</a>' : '';
    return '<section class="card card--forest test-result" tabindex="-1" aria-live="polite">' +
      '<div class="card__row"><div class="card__art test-result__art">' + A.Cast.book(mood) + '</div><div>' +
      '<p class="t-num" data-count="' + score + '">' + esc(pct(reduced ? score : 0)) + '</p>' +
      '<h2 class="t-h2" style="margin-top:10px">' + esc(t(pass ? 'app_book_test_passed_h' : 'app_book_test_failed_h')) + '</h2>' +
      '<p class="t-body" style="margin-top:8px">' + esc(t(pass ? 'app_book_test_passed_p' : 'app_book_test_failed_p')) + '</p>' +
      '<div class="btn-row" style="margin-top:18px">' + next + '<button class="btn btn--ghost btn--on-forest" type="button" data-act="retake">' + esc(t('app_book_test_retake')) + '</button></div>' +
      '</div></div></section>';
  }
  function countUp(el) {
    var to = +el.getAttribute('data-count'), t0 = null;
    if (reduced) return;
    var tick = function (ts) {
      if (!t0) t0 = ts;
      var p = Math.min(1, (ts - t0) / 900), e = 1 - Math.pow(1 - p, 3);
      el.textContent = pct(Math.round(to * e));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ---------- Interaction ---------- */
  function refreshEnd() {
    if (ctx.kind === 'test') { var end = root.querySelector('[data-end]'); if (end) end.innerHTML = testEnd(); }
    else refreshNav();
  }
  function afterPractice(bi, ok) {
    if (ctx.kind !== 'page') return;
    var si = ctx.at;
    if (spreadOpen(si)) react('wow', t('app_book_coach_done'));
    else if (ok === true) react('happy', praise(bi, ctx.at));
    else if (ok === false) react('think', t('app_book_wrong'));
    refreshNav();
    if (spreadOpen(si) && !ctx.flashedNext) {
      var nx = root.querySelector('.lesson__next');
      if (nx) { nx.classList.add('is-ready'); setTimeout(function () { nx.classList.remove('is-ready'); }, 1200); }
    }
    if (lessonComplete()) finishLesson();
  }

  function onSubmit() {
    var score = ctx.ex.submit();
    ctx.result = { score: score };
    save(ctx.book.id, ctx.key, { done: score >= PASS, score: score });
    refreshEnd();
    var box = root.querySelector('[data-result]');
    box.innerHTML = resultHtml(score);
    var card = box.querySelector('.test-result');
    countUp(card.querySelector('[data-count]'));
    window.scrollTo({ top: Math.max(0, box.getBoundingClientRect().top + window.scrollY - 90), behavior: reduced ? 'auto' : 'smooth' });
    card.focus({ preventScroll: true });
  }

  function bind() {
    if (root.__reader) return;
    root.__reader = true;
    root.addEventListener('click', function (e) {
      if (window.AlimunEx.swallowClick()) { e.preventDefault(); return; }
      var el = e.target.closest('[data-act]');
      if (!el || el.disabled) return;
      var act = el.getAttribute('data-act');
      if (act === 'explain') { setPref(el.getAttribute('data-v')); A.rerender(); return; }
      if (act === 'why') { var open = el.getAttribute('aria-expanded') !== 'true'; el.setAttribute('aria-expanded', String(open)); return; }
      if (act === 'quiz') {
        var fig = el.closest('[data-table]'), on = !fig.classList.contains('is-hidden');
        fig.classList.toggle('is-hidden', on);
        el.setAttribute('aria-pressed', String(on));
        el.textContent = t(on ? 'app_book_quiz_show' : 'app_book_quiz');
        fig.querySelectorAll('.cell').forEach(function (c) { c.classList.remove('is-shown'); c.tabIndex = on ? 0 : -1; });
        return;
      }
      if (act === 'cell') { el.classList.add('is-shown'); return; }
      if (act === 'enlarge') { openTable(el); return; }
      if (act === 'zoom') { setZoom(viewer.z * (+el.getAttribute('data-z') > 0 ? 1.25 : 0.8)); return; }
      if (act === 'tvclose') { closeTable(); return; }
      if (act === 'replay') { playDialogue(el.closest('[data-dialogue]')); return; }
      if (act === 'say') { playList([{ src: el.getAttribute('data-src'), el: el.closest('.rd-exrow') }], el); return; }
      if (act === 'listen') { listen(el); return; }
      if (!ctx) return;
      if (act === 'next') go(ctx.at + 1);
      else if (act === 'prev') go(ctx.at - 1);
      else if (act === 'submit') onSubmit();
      else if (act === 'retake') A.rerender();
      else if (ctx.ex) ctx.ex.act(act, el);
    });
    root.addEventListener('input', function (e) { if (ctx && ctx.ex) ctx.ex.input(e.target); });
    root.addEventListener('change', function (e) { if (ctx && ctx.ex) ctx.ex.change(e.target); });
    root.addEventListener('keydown', function (e) {
      var el = e.target;
      if (ctx && ctx.ex && ctx.ex.keydown(e)) return;
      if ((e.key === 'Enter' || e.key === ' ') && el.getAttribute('data-act') === 'enlarge') { e.preventDefault(); openTable(el); }
    });
    root.addEventListener('pointerdown', function (e) { if (ctx && ctx.ex) window.AlimunEx.pointerDown(ctx.ex, e); });
    /* Arrow keys turn the page (not while typing); swipes do too on touch screens */
    document.addEventListener('keydown', function (e) {
      if (viewer) { if (e.key === 'Escape') closeTable(); return; }
      if (!ctx || ctx.kind !== 'page' || !root.querySelector('.lesson') || /INPUT|TEXTAREA/.test(e.target.tagName)) return;
      var rtl = document.documentElement.dir === 'rtl';
      if (e.key === 'ArrowRight') go(ctx.at + (rtl ? -1 : 1));
      else if (e.key === 'ArrowLeft') go(ctx.at + (rtl ? 1 : -1));
    });
    var sw = null;
    root.addEventListener('touchstart', function (e) {
      if (!ctx || ctx.kind !== 'page' || viewer || e.touches.length !== 1 || e.target.closest('.tile, input, select, .tv, .mem, .ws')) { sw = null; return; }
      sw = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: true });
    root.addEventListener('touchend', function (e) {
      if (!sw || !ctx || ctx.kind !== 'page') return;
      var dx = e.changedTouches[0].clientX - sw.x, dy = e.changedTouches[0].clientY - sw.y;
      sw = null;
      if (Math.abs(dx) < 70 || Math.abs(dy) > Math.abs(dx) * 0.6) return;
      var rtl = document.documentElement.dir === 'rtl';
      go(ctx.at + ((dx < 0) !== rtl ? 1 : -1));
    }, { passive: true });
    window.addEventListener('resize', function () { if (ctx) { if (ctx.ex) ctx.ex.drawLines(); fitTables(); } });
  }

  /* ---------- Entry ---------- */
  function noneView(list) {
    var html = '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_book_none_h')) + '</h1>' +
      '<p class="t-lead">' + esc(t('app_book_none_p', { course: A.courseName() })) + '</p></div></div><div class="grid rise">' +
      '<section class="stage span-4" style="--i:0;background:var(--t-mint)"><div class="bub think">' + esc(t('app_book_none_bub')) + '</div>' + A.Cast.drawing('owl') + '</section>';
    list.forEach(function (b, i) {
      html += '<a class="card span-4 rd-other" href="#/book/' + esc(b.id) + '" style="--i:' + (1 + i) + '"><div class="card__art">' + A.Cast.drawing(A.buddyFor(b.language)) + '</div>' +
        '<h2 class="t-h2">' + esc(bookName(b)) + '</h2><p class="t-small" style="margin-top:8px">' + esc(t('app_book_preview_p')) + '</p></a>';
    });
    return html + '</div>';
  }
  function errorView() {
    return '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_book')) + '</h1></div></div>' +
      '<div class="soon rise"><div class="stage" style="--i:0;background:var(--t-coral)"><div class="bub think">' + esc(t('app_book_error_bub')) + '</div>' + A.Cast.drawing('cat') + '</div>' +
      '<div class="card" style="--i:1"><p class="t-body">' + esc(t('app_book_error')) + '</p><div class="btn-row"><button class="btn btn--primary" type="button" data-act="retake">' + esc(t('app_retry')) + '</button></div></div></div>';
  }

  /* Draws the screen for the route parts after #/book. Returns a promise. */
  var mountNo = 0;
  function mount(view, parts, helpers) {
    var my = ++mountNo;
    A = helpers; root = view; ctx = null; stopAudio();
    if (window.AlimunPractice) window.AlimunPractice.use(helpers);
    closeTable();
    bind();
    document.body.classList.remove('is-reading');
    view.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + esc(t('app_book_loading')) + '">' + A.loaderInner() + '</div></div>';
    return loadIndex().then(function (list) {
      var id = parts[0] || A.myBookId();
      var entry = list.filter(function (b) { return b.id === id; })[0];
      if (!entry) return { html: noneView(list.filter(function (b) { return b.written > 0 && b.track === 'core'; })), title: t('app_nav_book') };
      return Promise.all([loadBook(id, explainCode(entry)), loadProgress(id), loadAudio(id)]).then(function (r) {
        var book = r[0];
        var unit = book.units.filter(function (u) { return u.id === parts[1] && !u.planned; })[0];
        if (!unit) return { html: coverView(book), title: book.track === 'goal' ? book.title : bookName(book) };
        if (my !== mountNo) return { stale: true };
        if (parts[2] === 'test') return { html: testView(book, unit), title: t('app_book_test') };
        var page = unit.pages.filter(function (p) { return p.id === parts[2]; })[0];
        if (!page) return { html: unitView(book, unit), title: unitTitle(book, unit) };
        if (my !== mountNo) return { stale: true };
        startLesson(book, unit, page, +parts[3] || 0);
        if (ctx.at > ctx.seen && !isDone(book, unit, page)) ctx.at = 0;
        return { html: lessonView(), title: page.title, lesson: true };
      });
    }).catch(function (e) {
      console.warn('[Alimun] Course book did not load', e && e.message);
      index = null;
      return { html: errorView(), title: t('app_nav_book') };
    }).then(function (res) {
      /* A newer navigation has started: its screen wins */
      if (res.stale || my !== mountNo) return { stale: true };
      view.innerHTML = res.html;
      if (res.lesson) { updateBar(); afterSpread(); }
      return res;
    });
  }

  /* For the Practice screen: a book in the learner's explanation language, with its progress (null if there is no such book) */
  function open(helpers, id) {
    A = helpers;
    return loadIndex().then(function (list) {
      var entry = list.filter(function (b) { return b.id === id; })[0];
      if (!entry) return null;
      return Promise.all([loadBook(id, explainCode(entry)), loadProgress(id)]).then(function (r) { return { book: r[0], progress: r[1] }; });
    });
  }
  /* Another section is on screen: stop reacting to keys and clicks */
  function reset() { ctx = null; closeTable(); stopAudio(); if (window.AlimunEx) window.AlimunEx.stopAudio(); }
  /* For Practice: a book's audio plan with the files made so far, and the address of a file */
  function audioFor(id) {
    return loadAudio(id).then(function (a) {
      return { items: a.items, done: a.done, url: function (h) { return SUPA_AUDIO + encodeURIComponent(id) + '/' + h + '.mp3'; } };
    });
  }

  window.AlimunReader = { mount: mount, open: open, reset: reset, audio: audioFor };
})();
