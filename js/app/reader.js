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
  function shuffle(n, avoidIdentity) {
    var a = [], i, j, x;
    for (i = 0; i < n; i++) a.push(i);
    for (var tries = 0; tries < 8; tries++) {
      for (i = n - 1; i > 0; i--) { j = Math.floor(Math.random() * (i + 1)); x = a[i]; a[i] = a[j]; a[j] = x; }
      if (!avoidIdentity || n < 2 || a.some(function (v, k) { return v !== k; })) break;
    }
    return a;
  }
  function norm(s) {
    return String(s || '').replace(/[‘’ʼ`´]/g, "'").replace(/\s+/g, ' ').trim().replace(/[.!?]+$/, '').toLocaleLowerCase();
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
    if (!stop) {
      h = t('app_book_all_h'); lead = t('app_book_all_p'); btn = '';
    } else {
      h = share.done ? t('app_book_continue_h') : t('app_book_start_h');
      var what = stop.page === 'test' ? t('app_book_test') : stop.page.title;
      lead = t('app_book_next_line', { unit: unitTitle(book, stop.unit), page: what });
      btn = '<a class="btn btn--lime" href="' + href(book, stop.unit, stop.page) + '">' + esc(share.done ? t('app_book_continue') : t('app_book_start')) + A.icon('arrow') + '</a>';
    }
    var html = '' +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(bookName(book)) + '</h1><p class="t-lead">' + esc(t('app_book_lead')) + '</p></div>' +
        '<div class="btn-row">' + explainSwitch(book) + (mine ? '' : '<a class="btn btn--ghost btn--sm" href="#/book/' + esc(A.myBookId()) + '">' + esc(t('app_book_mine')) + '</a>') + '</div></div>' +
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

  /* ---------- Teaching blocks ---------- */
  function blockHtml(b, gi) {
    var book = ctx.book;
    switch (b.t) {
      case 'text': return '<div class="rd-text">' + paras(b.md) + '</div>';
      case 'examples':
        return '<div class="rd-examples">' + b.items.map(function (x, k) {
          if (!x.n) return '<div class="rd-ex"><p class="rd-ex__s"' + tA(book) + '>' + md(x.s) + '</p></div>';
          return '<button class="rd-ex is-tap" type="button" data-act="why" aria-expanded="false" style="--k:' + k + '"><span class="rd-ex__s"' + tA(book) + '>' + md(x.s) + '</span>' +
            '<span class="rd-ex__hint">' + esc(t('app_book_why_tap')) + '</span><span class="rd-ex__n"><span>' + md(x.n) + '</span></span></button>';
        }).join('') + '</div>';
      case 'table': {
        var ex = b.explain || [];
        var head = '<thead><tr>' + b.head.map(function (h) { return '<th scope="col"' + (ex.indexOf('head') > -1 ? '' : tA(book)) + '>' + md(h) + '</th>'; }).join('') + '</tr></thead>';
        var rows = b.rows.map(function (r, ri) {
          return '<tr style="--k:' + ri + '">' + r.map(function (c, k) {
            if (k === 0) return '<th scope="row"' + (ex.indexOf('col0') > -1 ? '' : tA(book)) + '>' + md(c) + '</th>';
            return '<td' + tA(book) + '>' + (b.quiz ? '<button class="cell" type="button" data-act="cell" tabindex="-1">' + md(c) + '</button>' : md(c)) + '</td>';
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
            return '<div class="chat__line chat__line--' + side + '" style="--k:' + k + '"><span class="chat__who" aria-hidden="true">' + esc(l.who.charAt(0)) + '</span>' +
              '<p><b>' + esc(l.who) + '</b><span>' + md(l.s) + '</span></p></div>';
          }).join('') + '</div>' +
          '<button class="linkish" type="button" data-act="replay">' + esc(t('app_book_replay')) + '</button></figure>';
      }
      case 'tip':
        return '<aside class="rd-tip"><div class="rd-tip__art">' + A.Cast.drawing(b.art || 'owl') + '</div><div class="bub say bub--inline rd-tip__bub">' + md(b.md) + '</div></aside>';
      case 'reading':
        return '<section class="rd-reading"' + tA(book) + '>' + (b.title ? '<h2 class="t-h2">' + esc(b.title) + '</h2>' : '') + paras(b.md) + '</section>';
      case 'ex': return exHtml(gi);
      default: return '';
    }
  }

  /* ---------- Exercises ---------- */
  function spotTokens(s) {
    var out = [], re = /\[([^\]]+)\]|([^\s\[\]]+)|(\s+)/g, m, k = 0;
    while ((m = re.exec(s))) {
      if (m[1]) out.push({ text: m[1], target: k++ });
      else if (m[2]) out.push({ text: m[2], target: -1, word: /[\p{L}\p{N}]/u.test(m[2]) });
      else out.push({ space: true });
    }
    return out;
  }
  function prepare(b) {
    if (b.kind === 'match') {
      return { lo: shuffle(b.pairs.length), ro: shuffle(b.pairs.length, true), sel: null, got: {}, gotR: {}, link: {}, err: {}, pairs: {}, flash: null };
    }
    return {
      items: b.items.map(function (it) {
        var s = { done: false, first: null, tries: 0, wrong: {}, picked: null, value: '', shown: false };
        if (b.kind === 'choice') s.order = shuffle(it.o.length, true);
        if (b.kind === 'order') { s.words = it.a.split(/\s+/); s.pool = shuffle(s.words.length, true); s.placed = []; }
        if (b.kind === 'spot') { s.tokens = spotTokens(it.s); s.targets = s.tokens.filter(function (x) { return x.target > -1; }).length; s.found = {}; s.sel = {}; s.bad = null; }
        return s;
      })
    };
  }
  function tfOptions(b) { return b.ng ? ['t', 'f', 'ng'] : ['t', 'f']; }
  function tfLabel(v) { return t(v === 't' ? 'app_book_true' : v === 'f' ? 'app_book_false' : 'app_book_ng'); }
  function rightAnswer(b, it, x) {
    if (b.kind === 'choice') return it.o[0];
    if (b.kind === 'tf') return tfLabel(it.a);
    if (b.kind === 'gap') return it.a[0];
    if (b.kind === 'spot') return x.tokens.filter(function (k) { return k.target > -1; }).map(function (k) { return k.text; }).join(', ');
    return it.a;
  }
  function isRight(b, it, s) {
    if (b.kind === 'choice') return s.picked === 0;
    if (b.kind === 'tf') return s.picked === it.a;
    if (b.kind === 'gap') { var v = norm(s.value); return it.a.some(function (a) { return norm(a) === v; }); }
    if (b.kind === 'order') return s.placed.length === s.words.length && s.placed.map(function (w) { return s.words[w]; }).join(' ') === s.words.join(' ');
    if (b.kind === 'spot') {
      return s.tokens.every(function (k, i) { return k.space || (k.target > -1 ? !!s.sel[i] : !s.sel[i]); });
    }
    return false;
  }
  function matchRight(b, l, r) { return r != null && b.pairs[r][1] === b.pairs[l][1]; }
  function answered(b, s) {
    if (b.kind === 'match') return Object.keys(s.pairs).length === b.pairs.length;
    return s.items.every(function (x) {
      if (b.kind === 'gap') return norm(x.value) !== '';
      if (b.kind === 'order') return x.placed.length === x.words.length;
      if (b.kind === 'spot') return Object.keys(x.sel).length > 0;
      return x.picked != null;
    });
  }
  function blockDone(b, s) {
    if (b.kind === 'match') return Object.keys(s.got).length === b.pairs.length;
    return s.items.every(function (x) { return x.done; });
  }
  /* Right first time (lessons) */
  function firstTally(b, s) {
    if (b.kind === 'match') return { right: b.pairs.filter(function (p, l) { return s.got[l] && !s.err[l]; }).length, total: b.pairs.length };
    return { right: s.items.filter(function (x) { return x.first === true; }).length, total: s.items.length };
  }

  var PRAISE = ['app_book_right_1', 'app_book_right_2', 'app_book_right_3'];
  function praise(b, i) { return t(PRAISE[(b + i) % 3]); }
  function feedback(ok, text, why, answer) {
    return '<div class="fb ' + (ok ? 'fb--ok' : 'fb--no') + '">' + A.Cast.book(ok ? 'happy' : 'think') +
      '<p' + xA(ctx.book) + '><b>' + esc(text) + '</b>' + (answer ? ' <b' + tA(ctx.book) + '>' + md(answer) + '</b>' : '') + (why ? ' <span>' + md(why) + '</span>' : '') + '</p></div>';
  }
  function withGap(q, fill) {
    var parts = md(q).split('___');
    if (parts.length < 2) return md(q);
    return parts[0] + '<span class="gap' + (fill ? ' is-filled' : '') + '">' + (fill ? md(fill) : '<span class="sr">' + esc(t('app_book_gap')) + '</span>') + '</span>' + parts.slice(1).join('___');
  }

  function exHtml(gi) {
    var b = ctx.blocks[gi], s = ctx.state[gi];
    var test = ctx.kind === 'test', review = test && ctx.result;
    var html = '<section class="ex ex--' + b.kind + '" data-block="' + gi + '"><h3 class="ex__h">' + md(b.h) + '</h3>';
    if (b.kind === 'match') html += matchHtml(gi, b, s, test, review);
    else {
      if (b.kind === 'order' && !review) html += '<p class="t-small ex__hint">' + esc(t('app_book_order_hint')) + '</p>';
      if (b.kind === 'spot' && !review) html += '<p class="t-small ex__hint">' + esc(t('app_book_spot_hint')) + '</p>';
      b.items.forEach(function (it, i) {
        var x = s.items[i];
        var cls = review ? (isRight(b, it, x) ? ' is-right' : ' is-wrong') : x.done ? ' is-right' : x.flash ? ' is-wrong' : '';
        html += '<div class="ex-item' + cls + '" data-item="' + i + '" style="--k:' + i + '">' + itemHtml(gi, i, b, it, x, test, review) + '</div>';
      });
      if (!test && b.kind === 'gap' && !blockDone(b, s)) {
        html += '<div class="btn-row ex__foot"><button class="btn btn--primary btn--sm" type="button" data-act="check" data-b="' + gi + '">' + esc(t('app_book_check')) + '</button></div>';
      }
    }
    return html + '</section>';
  }

  function itemHtml(bi, i, b, it, x, test, review) {
    var a = ' data-b="' + bi + '" data-i="' + i + '"', T = tA(ctx.book);
    var html = '', fb = '';
    if (review) {
      fb = isRight(b, it, x) ? feedback(true, praise(bi, i), it.why) : feedback(false, t('app_book_answer_is_label'), it.why, rightAnswer(b, it, x));
    } else if (!test) {
      if (x.done) fb = x.shown ? feedback(false, t('app_book_answer_is_label'), it.why, rightAnswer(b, it, x)) : feedback(true, praise(bi, i), it.why);
      else if (x.flash) fb = feedback(false, t('app_book_wrong'), '');
    }
    var locked = review || x.done;

    if (b.kind === 'choice' || b.kind === 'tf') {
      if (it.q) html += '<p class="ex-q"' + T + '>' + withGap(it.q, b.kind === 'choice' && ((x.done && !test) || (review && isRight(b, it, x))) ? it.o[0] : '') + '</p>';
      var opts = b.kind === 'choice' ? x.order : tfOptions(b);
      html += '<div class="opts' + (b.kind === 'tf' ? ' opts--tf' : '') + (it.q ? '' : ' opts--stack') + '" role="group" aria-label="' + esc(t('app_book_options')) + '">';
      opts.forEach(function (o, k) {
        var right = b.kind === 'choice' ? o === 0 : o === it.a;
        var c = '';
        if (review) c = right ? ' is-right' : x.picked === o ? ' is-wrong' : '';
        else if (test) c = x.picked === o ? ' is-picked' : '';
        else if (x.done) c = right ? ' is-right' : '';
        else if (x.wrong[o]) c = ' is-wrong';
        var dis = locked || (!test && x.wrong[o]);
        html += '<button class="opt' + c + '" type="button" data-act="pick"' + a + ' data-o="' + o + '" style="--k:' + k + '"' + (dis ? ' disabled' : '') +
          (test && !review ? ' aria-pressed="' + (x.picked === o) + '"' : '') + (b.kind === 'choice' ? T : '') + '>' + (b.kind === 'choice' ? md(it.o[o]) : esc(tfLabel(o))) + '</button>';
      });
      html += '</div>';
    } else if (b.kind === 'gap') {
      var parts = md(it.q).split('___');
      var size = Math.max.apply(null, it.a.map(function (s) { return s.length; })) + 2;
      var input = '<input class="gap-in" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="done"' + a +
        ' size="' + size + '" value="' + esc(x.done && x.shown ? it.a[0] : x.value) + '" aria-label="' + esc(t('app_book_your_answer')) + '"' + (locked ? ' readonly' : '') + '>';
      html += '<p class="ex-q"' + T + '>' + parts[0] + input + parts.slice(1).join('___') + '</p>';
      if (!test && !x.done && x.tries >= 2) html += '<button class="linkish" type="button" data-act="show"' + a + '>' + esc(t('app_book_show')) + '</button>';
    } else if (b.kind === 'order') {
      var placed = x.done && x.shown ? x.words.map(function (w, k) { return k; }) : x.placed;
      html += '<div class="ord-line' + (placed.length ? '' : ' is-empty') + '" data-line' + a + T + '>' +
        placed.map(function (w) {
          return '<button class="tile" type="button" data-act="unplace"' + a + ' data-w="' + w + '"' + (locked ? ' disabled' : '') + '>' + esc(x.words[w]) + '</button>';
        }).join('') + '</div>';
      if (!locked) {
        html += '<div class="ord-pool" data-pool' + a + T + '>' + x.pool.map(function (w) {
          var used = x.placed.indexOf(w) > -1;
          return '<button class="tile' + (used ? ' is-used' : '') + '" type="button" data-act="place"' + a + ' data-w="' + w + '"' + (used ? ' disabled aria-hidden="true" tabindex="-1"' : '') + '>' + esc(x.words[w]) + '</button>';
        }).join('') + '</div>';
        if (!test && x.flash) {
          html += '<div class="btn-row ex__foot"><button class="linkish" type="button" data-act="reset"' + a + '>' + esc(t('app_book_clear')) + '</button>' +
            (x.tries >= 2 ? '<button class="linkish" type="button" data-act="show"' + a + '>' + esc(t('app_book_show')) + '</button>' : '') + '</div>';
        }
      }
    } else if (b.kind === 'spot') {
      html += '<p class="spot"' + T + '>' + x.tokens.map(function (k, ti) {
        if (k.space) return ' ';
        if (k.target === -1 && !k.word) return '<span>' + esc(k.text) + '</span>';
        var c = '';
        var showAll = review || (x.done && x.shown);
        if (showAll) c = k.target > -1 ? (x.sel[ti] || x.shown ? ' is-found' : ' is-missed') : x.sel[ti] ? ' is-bad' : '';
        else if (test) c = x.sel[ti] ? ' is-picked' : '';
        else if (x.found[k.target] && k.target > -1) c = ' is-found';
        else if (x.bad === ti) c = ' is-bad';
        return '<button class="spot__w' + c + '" type="button" data-act="spot"' + a + ' data-t="' + ti + '"' + (locked ? ' disabled' : '') + '>' + esc(k.text) + '</button>';
      }).join('') + '</p>';
      if (!test && !x.done && x.tries >= 2) html += '<button class="linkish" type="button" data-act="show"' + a + '>' + esc(t('app_book_show')) + '</button>';
    }
    return html + '<div class="fb-slot" aria-live="polite">' + fb + '</div>';
  }

  function matchHtml(bi, b, s, test, review) {
    var a = ' data-b="' + bi + '"', T = tA(ctx.book);
    var html = '<p class="t-small ex__hint">' + esc(t('app_book_match_hint')) + '</p><div class="match" data-match="' + bi + '"' + T + '><svg class="match__lines" aria-hidden="true"></svg>';
    html += '<div class="match__col">' + s.lo.map(function (l, k) {
      var c = '', pairNo = '';
      if (review) c = matchRight(b, l, s.pairs[l]) ? ' is-right' : ' is-wrong';
      else if (test) { if (s.pairs[l] != null) { c = ' is-paired'; pairNo = ' data-pair="' + (k % 6) + '"'; } }
      else if (s.got[l]) c = ' is-matched';
      if (!review && s.sel === l) c += ' is-sel';
      if (s.flash && s.flash.l === l) c += ' is-wrong';
      var dis = review || (!test && s.got[l]);
      return '<button class="tile tile--match' + c + '" type="button" data-act="mleft"' + a + ' data-l="' + l + '"' + pairNo + ' style="--k:' + k + '"' + (dis ? ' disabled' : '') + ' aria-pressed="' + (s.sel === l) + '">' + esc(b.pairs[l][0]) + '</button>';
    }).join('') + '</div>';
    html += '<div class="match__col">' + s.ro.map(function (r, k) {
      var c = '', pairNo = '', owner = null;
      Object.keys(s.pairs).forEach(function (l) { if (s.pairs[l] === r) owner = +l; });
      if (review) c = owner != null ? (matchRight(b, owner, r) ? ' is-right' : ' is-wrong') : '';
      else if (test) { if (owner != null) { c = ' is-paired'; pairNo = ' data-pair="' + (s.lo.indexOf(owner) % 6) + '"'; } }
      else if (s.gotR[r]) c = ' is-matched';
      if (s.flash && s.flash.r === r) c += ' is-wrong';
      var dis = review || (!test && s.gotR[r]);
      return '<button class="tile tile--match' + c + '" type="button" data-act="mright"' + a + ' data-r="' + r + '"' + pairNo + ' style="--k:' + k + '"' + (dis ? ' disabled' : '') + '>' + esc(b.pairs[r][1]) + '</button>';
    }).join('') + '</div></div>';
    var fb = '';
    if (review) {
      var wrong = b.pairs.filter(function (p, l) { return !matchRight(b, l, s.pairs[l]); });
      fb = wrong.length ? feedback(false, t('app_book_answer_is_label'), '', wrong.map(function (p) { return p[0] + ' ' + p[1]; }).join(', ')) : feedback(true, praise(bi, 0), '');
    } else if (!test && blockDone(b, s)) fb = feedback(true, praise(bi, 0), '', b.pairs.map(function (p) { return p[0] + ' ' + p[1]; }).join(', '));
    else if (!test && s.flash) fb = feedback(false, t('app_book_wrong'), '');
    return html + '<div class="fb-slot" aria-live="polite">' + fb + '</div>';
  }

  /* Lines between matched pairs, drawn in after each change */
  function drawLines(scope) {
    (scope || root).querySelectorAll('[data-match]').forEach(function (m) {
      var bi = +m.getAttribute('data-match'), b = ctx && ctx.blocks[bi], s = ctx && ctx.state[bi];
      var svg = m.querySelector('.match__lines');
      if (!b || !svg) return;
      var box = m.getBoundingClientRect();
      svg.setAttribute('viewBox', '0 0 ' + box.width + ' ' + box.height);
      var pairs = ctx.kind === 'test' ? s.pairs : s.link;
      var had = svg.__had || {};
      var now = {};
      svg.innerHTML = Object.keys(pairs).map(function (l) {
        var lb = m.querySelector('[data-l="' + l + '"]'), rb = m.querySelector('[data-r="' + pairs[l] + '"]');
        if (!lb || !rb) return '';
        var p = lb.getBoundingClientRect(), q = rb.getBoundingClientRect();
        var x1 = p.right - box.left, y1 = p.top + p.height / 2 - box.top, x2 = q.left - box.left, y2 = q.top + q.height / 2 - box.top;
        var mid = (x1 + x2) / 2;
        var cls = ctx.result ? (matchRight(b, +l, pairs[l]) ? 'is-right' : 'is-wrong') : ctx.kind === 'test' ? 'is-paired p' + (s.lo.indexOf(+l) % 6) : 'is-matched';
        var key = l + '-' + pairs[l];
        now[key] = true;
        return '<path class="' + cls + (had[key] ? '' : ' is-new') + '" d="M' + x1 + ' ' + y1 + ' C' + mid + ' ' + y1 + ' ' + mid + ' ' + y2 + ' ' + x2 + ' ' + y2 + '"/>' +
          '<circle class="' + cls + '" cx="' + x1 + '" cy="' + y1 + '" r="4"/><circle class="' + cls + '" cx="' + x2 + '" cy="' + y2 + '" r="4"/>';
      }).join('');
      svg.__had = now;
    });
  }

  /* ---------- Lessons: a few full pages, turned one at a time ---------- */
  function startLesson(book, unit, page, at) {
    var blocks = [], spreads = [];
    page.spreads.forEach(function (sp) {
      spreads.push(sp.map(function (b) { blocks.push(b); return blocks.length - 1; }));
    });
    ctx = { kind: 'page', book: book, unit: unit, page: page, blocks: blocks, spreads: spreads, at: Math.max(0, Math.min(at || 0, spreads.length)),
      state: blocks.map(function (b) { return b.t === 'ex' ? prepare(b) : null; }), key: keyOf(book, unit, page), saved: false, mood: 'idle', line: '' };
    if (isDone(book, unit, page)) ctx.seen = spreads.length; else ctx.seen = 0;
  }
  function spreadOpen(si) {
    return ctx.spreads[si].every(function (gi) { var b = ctx.blocks[gi]; return b.t !== 'ex' || blockDone(b, ctx.state[gi]); });
  }
  function canGo(si) { return si <= ctx.seen || spreadOpen(si - 1); }
  function lessonComplete() {
    return ctx.blocks.every(function (b, i) { return b.t !== 'ex' || blockDone(b, ctx.state[i]); });
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
    var right = 0, total = 0;
    ctx.blocks.forEach(function (b, i) { if (b.t === 'ex') { var f = firstTally(b, ctx.state[i]); right += f.right; total += f.total; } });
    save(ctx.book.id, ctx.key, { done: true, score: total ? Math.round(right / total * 100) : 100 });
  }
  /* Things that run once a page is on screen: dialogues play, lines are drawn */
  function afterSpread() {
    var cur = root.querySelector('.spread:not([aria-hidden])') || root;
    cur.querySelectorAll('[data-dialogue]').forEach(playDialogue);
    requestAnimationFrame(function () { drawLines(cur); });
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
    ctx = { kind: 'test', book: book, unit: unit, page: null, blocks: blocks, state: blocks.map(function (b) { return b.t === 'ex' ? prepare(b) : null; }),
      key: keyOf(book, unit, null), result: null };
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
    var ready = ctx.blocks.every(function (b, i) { return answered(b, ctx.state[i]); });
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
  function rerender(bi) {
    var el = root.querySelector('[data-block="' + bi + '"]');
    if (!el) return;
    var act = document.activeElement, sel = null;
    if (act && el.contains(act)) {
      sel = ['data-act', 'data-i', 'data-o', 'data-w', 'data-l', 'data-r', 'data-t'].filter(function (k) { return act.hasAttribute(k); })
        .map(function (k) { return '[' + k + '="' + act.getAttribute(k) + '"]'; }).join('');
      if (act.classList.contains('gap-in')) sel = '.gap-in[data-i="' + act.getAttribute('data-i') + '"]';
    }
    /* Remember where the word tiles were, so they glide to their new place */
    var before = {};
    el.querySelectorAll('.tile[data-w]:not(.is-used)').forEach(function (n) { before[n.getAttribute('data-i') + ':' + n.getAttribute('data-w')] = n.getBoundingClientRect(); });
    el.outerHTML = exHtml(bi);
    el = root.querySelector('[data-block="' + bi + '"]');
    el.classList.add('is-settled');
    if (!reduced) {
      el.querySelectorAll('.tile[data-w]:not(.is-used)').forEach(function (n) {
        var r0 = before[n.getAttribute('data-i') + ':' + n.getAttribute('data-w')];
        if (!r0) return;
        var r1 = n.getBoundingClientRect(), dx = r0.left - r1.left, dy = r0.top - r1.top;
        if (!dx && !dy) return;
        n.animate([{ transform: 'translate(' + dx + 'px,' + dy + 'px)' }, { transform: 'none' }], { duration: 320, easing: 'cubic-bezier(.2,.8,.2,1)' });
      });
    }
    if (sel) {
      var f = el.querySelector(sel + ':not([disabled])') || el.querySelector('button:not([disabled]):not(.is-used), input:not([readonly])') || el.querySelector('.fb-slot');
      if (f) { if (f.classList.contains('fb-slot')) f.setAttribute('tabindex', '-1'); f.focus({ preventScroll: true }); }
    }
    drawLines(el);
  }
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
  function mark(x, ok) { if (ok) { x.done = true; x.flash = false; if (x.first === null) x.first = true; } else { x.tries++; x.first = false; x.flash = true; } }

  function onPick(bi, i, o) {
    var b = ctx.blocks[bi], x = ctx.state[bi].items[i], it = b.items[i];
    if (ctx.result) return;
    if (ctx.kind === 'test') { x.picked = o; rerender(bi); refreshEnd(); return; }
    if (x.done) return;
    x.picked = o;
    var ok = isRight(b, it, x);
    if (!ok) x.wrong[o] = true;
    mark(x, ok);
    rerender(bi);
    afterPractice(bi, ok);
  }
  function onCheck(bi) {
    var b = ctx.blocks[bi], s = ctx.state[bi], any = null;
    s.items.forEach(function (x, i) {
      if (x.done || norm(x.value) === '') return;
      var ok = isRight(b, b.items[i], x);
      mark(x, ok);
      any = any === false ? false : ok;
    });
    rerender(bi);
    afterPractice(bi, any);
  }
  function onShow(bi, i) {
    var x = ctx.state[bi].items[i];
    x.done = true; x.shown = true; x.first = false; x.flash = false;
    rerender(bi);
    afterPractice(bi, null);
  }
  function onPlace(bi, i, w, add, at) {
    var b = ctx.blocks[bi], x = ctx.state[bi].items[i];
    if (ctx.result || x.done) return;
    x.placed = x.placed.filter(function (v) { return v !== w; });
    if (add) { if (at == null || at > x.placed.length) at = x.placed.length; x.placed.splice(at, 0, w); }
    x.flash = false;
    var ok = null;
    if (ctx.kind === 'page' && x.placed.length === x.words.length) { ok = isRight(b, b.items[i], x); mark(x, ok); }
    rerender(bi);
    if (ctx.kind === 'test') refreshEnd(); else if (ok !== null) afterPractice(bi, ok);
  }
  function onReset(bi, i) { var x = ctx.state[bi].items[i]; x.placed = []; x.flash = false; rerender(bi); }
  function onSpot(bi, i, ti) {
    var b = ctx.blocks[bi], x = ctx.state[bi].items[i], tok = x.tokens[ti];
    if (ctx.result || x.done) return;
    if (ctx.kind === 'test') { if (x.sel[ti]) delete x.sel[ti]; else x.sel[ti] = true; rerender(bi); refreshEnd(); return; }
    var ok;
    if (tok.target > -1) {
      x.found[tok.target] = true; x.sel[ti] = true; x.bad = null; ok = true;
      if (Object.keys(x.found).length === x.targets) { x.done = true; x.flash = false; if (x.first === null) x.first = true; }
    } else { x.bad = ti; x.first = false; x.tries++; x.flash = true; ok = false; }
    rerender(bi);
    afterPractice(bi, ok);
  }

  function onMatch(bi, side, v) {
    var b = ctx.blocks[bi], s = ctx.state[bi];
    if (ctx.result) return;
    s.flash = null;
    if (side === 'l') {
      if (ctx.kind === 'test' && s.pairs[v] != null && s.sel !== v) delete s.pairs[v];
      s.sel = s.sel === v ? null : v;
      rerender(bi);
      if (ctx.kind === 'test') refreshEnd();
      return;
    }
    if (s.sel == null) return;
    var l = s.sel;
    if (ctx.kind === 'test') {
      Object.keys(s.pairs).forEach(function (k) { if (s.pairs[k] === v) delete s.pairs[k]; });
      s.pairs[l] = v; s.sel = null;
      rerender(bi); refreshEnd();
      return;
    }
    var ok = matchRight(b, l, v) && !s.gotR[v];
    if (ok) { s.got[l] = true; s.gotR[v] = true; s.link[l] = v; s.sel = null; }
    else { s.err[l] = true; s.flash = { l: l, r: v }; s.sel = null; }
    rerender(bi);
    afterPractice(bi, ok);
  }

  function onSubmit() {
    var right = 0, total = 0;
    ctx.blocks.forEach(function (b, i) {
      var s = ctx.state[i];
      if (b.kind === 'match') { b.pairs.forEach(function (p, l) { total++; if (matchRight(b, l, s.pairs[l])) right++; }); s.sel = null; }
      else b.items.forEach(function (it, k) { total++; if (isRight(b, it, s.items[k])) right++; });
    });
    var score = total ? Math.round(right / total * 100) : 0;
    ctx.result = { score: score };
    save(ctx.book.id, ctx.key, { done: score >= PASS, score: score });
    ctx.blocks.forEach(function (b, i) { rerender(i); });
    refreshEnd();
    var box = root.querySelector('[data-result]');
    box.innerHTML = resultHtml(score);
    var card = box.querySelector('.test-result');
    countUp(card.querySelector('[data-count]'));
    window.scrollTo({ top: Math.max(0, box.getBoundingClientRect().top + window.scrollY - 90), behavior: reduced ? 'auto' : 'smooth' });
    card.focus({ preventScroll: true });
  }

  /* Dragging word tiles into order (tapping works too) */
  var drag = null, suppressClick = false;
  function onPointerDown(e) {
    var tile = e.target.closest('.ex--order .tile[data-w]');
    if (!tile || tile.disabled || e.button > 0) return;
    drag = { tile: tile, x: e.clientX, y: e.clientY, moved: false, ghost: null, id: e.pointerId };
  }
  function onPointerMove(e) {
    if (!drag || e.pointerId !== drag.id) return;
    var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (!drag.moved) {
      if (Math.abs(dx) + Math.abs(dy) < 8) return;
      drag.moved = true;
      var r = drag.tile.getBoundingClientRect();
      var g = drag.tile.cloneNode(true);
      g.className = 'tile tile--ghost';
      g.style.width = r.width + 'px'; g.style.left = r.left + 'px'; g.style.top = r.top + 'px';
      document.body.appendChild(g);
      drag.ghost = g; drag.ox = r.left; drag.oy = r.top;
      drag.tile.classList.add('is-dragging');
    }
    e.preventDefault();
    drag.ghost.style.transform = 'translate(' + dx + 'px,' + dy + 'px) rotate(-3deg)';
    var line = drag.tile.closest('.ex-item').querySelector('[data-line]');
    var r2 = line.getBoundingClientRect();
    line.classList.toggle('is-over', e.clientX > r2.left && e.clientX < r2.right && e.clientY > r2.top - 20 && e.clientY < r2.bottom + 20);
  }
  function onPointerUp(e) {
    if (!drag || e.pointerId !== drag.id) return;
    var d = drag; drag = null;
    if (!d.moved) return;
    suppressClick = true; setTimeout(function () { suppressClick = false; }, 0);
    d.ghost.remove();
    d.tile.classList.remove('is-dragging');
    var item = d.tile.closest('.ex-item'), line = item.querySelector('[data-line]');
    line.classList.remove('is-over');
    var bi = +d.tile.getAttribute('data-b'), i = +d.tile.getAttribute('data-i'), w = +d.tile.getAttribute('data-w');
    var r = line.getBoundingClientRect();
    var inLine = e.clientX > r.left && e.clientX < r.right && e.clientY > r.top - 20 && e.clientY < r.bottom + 20;
    if (inLine) {
      var at = 0;
      line.querySelectorAll('.tile').forEach(function (n) {
        if (+n.getAttribute('data-w') === w) return;
        var q = n.getBoundingClientRect();
        if (e.clientY > q.bottom || (e.clientY > q.top && e.clientX > q.left + q.width / 2)) at++;
      });
      onPlace(bi, i, w, true, at);
    } else if (d.tile.closest('[data-line]')) onPlace(bi, i, w, false);
  }

  function bind() {
    if (root.__reader) return;
    root.__reader = true;
    root.addEventListener('click', function (e) {
      if (suppressClick) { e.preventDefault(); return; }
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
      if (act === 'replay') { playDialogue(el.closest('[data-dialogue]')); return; }
      if (!ctx) return;
      var bi = +el.getAttribute('data-b'), i = +el.getAttribute('data-i');
      if (act === 'next') go(ctx.at + 1);
      else if (act === 'prev') go(ctx.at - 1);
      else if (act === 'pick') { var o = el.getAttribute('data-o'); onPick(bi, i, /^\d+$/.test(o) ? +o : o); }
      else if (act === 'check') onCheck(bi);
      else if (act === 'show') onShow(bi, i);
      else if (act === 'place') onPlace(bi, i, +el.getAttribute('data-w'), true);
      else if (act === 'unplace') onPlace(bi, i, +el.getAttribute('data-w'), false);
      else if (act === 'reset') onReset(bi, i);
      else if (act === 'spot') onSpot(bi, i, +el.getAttribute('data-t'));
      else if (act === 'mleft') onMatch(bi, 'l', +el.getAttribute('data-l'));
      else if (act === 'mright') onMatch(bi, 'r', +el.getAttribute('data-r'));
      else if (act === 'submit') onSubmit();
      else if (act === 'retake') A.rerender();
    });
    root.addEventListener('input', function (e) {
      var el = e.target;
      if (!ctx || !el.classList.contains('gap-in')) return;
      var bi = +el.getAttribute('data-b'), x = ctx.state[bi].items[+el.getAttribute('data-i')];
      x.value = el.value;
      if (x.flash) { x.flash = false; var item = el.closest('.ex-item'); if (item) { item.classList.remove('is-wrong'); item.querySelector('.fb-slot').innerHTML = ''; } }
      if (ctx.kind === 'test') refreshEnd();
    });
    root.addEventListener('keydown', function (e) {
      var el = e.target;
      if (e.key === 'Enter' && ctx && el.classList.contains('gap-in')) { e.preventDefault(); if (ctx.kind === 'page') onCheck(+el.getAttribute('data-b')); }
    });
    root.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove, { passive: false });
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', function () { if (drag && drag.ghost) { drag.ghost.remove(); drag.tile.classList.remove('is-dragging'); } drag = null; });
    /* Arrow keys turn the page (not while typing); swipes do too on touch screens */
    document.addEventListener('keydown', function (e) {
      if (!ctx || ctx.kind !== 'page' || !root.querySelector('.lesson') || /INPUT|TEXTAREA/.test(e.target.tagName)) return;
      var rtl = document.documentElement.dir === 'rtl';
      if (e.key === 'ArrowRight') go(ctx.at + (rtl ? -1 : 1));
      else if (e.key === 'ArrowLeft') go(ctx.at + (rtl ? 1 : -1));
    });
    var sw = null;
    root.addEventListener('touchstart', function (e) {
      if (!ctx || ctx.kind !== 'page' || e.touches.length !== 1 || e.target.closest('.tile, .rd-table__scroll, input')) { sw = null; return; }
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
    window.addEventListener('resize', function () { if (ctx) drawLines(); });
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
  function mount(view, parts, helpers) {
    A = helpers; root = view; ctx = null;
    bind();
    document.body.classList.remove('is-reading');
    view.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + esc(t('app_book_loading')) + '">' + A.loaderInner() + '</div></div>';
    return loadIndex().then(function (list) {
      var id = parts[0] || A.myBookId();
      var entry = list.filter(function (b) { return b.id === id; })[0];
      if (!entry) return { html: noneView(list.filter(function (b) { return b.written > 0; })), title: t('app_nav_book') };
      return Promise.all([loadBook(id, explainCode(entry)), loadProgress(id)]).then(function (r) {
        var book = r[0];
        var unit = book.units.filter(function (u) { return u.id === parts[1] && !u.planned; })[0];
        if (!unit) return { html: coverView(book), title: bookName(book) };
        if (parts[2] === 'test') return { html: testView(book, unit), title: t('app_book_test') };
        var page = unit.pages.filter(function (p) { return p.id === parts[2]; })[0];
        if (!page) return { html: unitView(book, unit), title: unitTitle(book, unit) };
        startLesson(book, unit, page, +parts[3] || 0);
        if (ctx.at > ctx.seen && !isDone(book, unit, page)) ctx.at = 0;
        return { html: lessonView(), title: page.title, lesson: true };
      });
    }).catch(function (e) {
      console.warn('[Alimun] Course book did not load', e && e.message);
      index = null;
      return { html: errorView(), title: t('app_nav_book') };
    }).then(function (res) {
      if (root !== view) return res;
      view.innerHTML = res.html;
      if (res.lesson) { updateBar(); afterSpread(); }
      return res;
    });
  }

  window.AlimunReader = { mount: mount };
})();
