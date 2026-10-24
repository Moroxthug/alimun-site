/* Alimun app: the course book reader (docs/DASHBOARD_PLAN.md, step 4; book format in docs/BOOKS.md).
   Book > unit > page > blocks. Every page teaches, then checks with exercises before the next page opens;
   every unit ends with a unit test. Books are static JSON (/data/books/<Language>-<Level>.json).
   Progress: practice_progress for a signed-in student (js/app/data.js), this browser otherwise.
   Routes: #/book, #/book/<book>, #/book/<book>/<unit>, #/book/<book>/<unit>/<page>, #/book/<book>/<unit>/test.
   Interface text comes from js/translations.js (app_book_* keys); the book text is in the language being learned. */
(function () {
  'use strict';
  var A = null;          /* helpers from the shell (js/app/shell.js) */
  var root = null;       /* the view the reader draws into */
  var index = null;      /* the list of books */
  var books = {};        /* loaded books by id */
  var progress = {};     /* by book id: { "book:<book>:<unit>:<page>": { done, score } } */
  var ctx = null;        /* the page or unit test on screen */
  var PASS = 70;
  var LOCAL = 'alimun-book-progress';

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

  /* ---------- Loading ---------- */
  function getJSON(url) {
    return fetch(url).then(function (r) { if (!r.ok) throw new Error(url + ' ' + r.status); return r.json(); });
  }
  function loadIndex() {
    return index ? Promise.resolve(index) : getJSON('/data/books/index.json').then(function (x) { index = x.books || []; return index; });
  }
  function loadBook(id) {
    return books[id] ? Promise.resolve(books[id]) : getJSON('/data/books/' + encodeURIComponent(id) + '.json').then(function (b) { books[id] = b; return b; });
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
  /* Keeps the best score; a finished page or passed test stays finished */
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
  /* The first page not finished, or the first unit test not passed */
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
  function contentAttrs(book) { return ' lang="' + esc(window.AlimunData.langCode(book.language) || 'en') + '" dir="ltr"'; }
  function meter(share) {
    var w = share.total ? Math.round(share.done / share.total * 100) : 0;
    return '<div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + w + '" aria-label="' + esc(t('app_book_progress')) + '"><i style="width:' + w + '%"></i></div>';
  }
  function backLink(to, label) {
    return '<a class="rd-back" href="' + to + '">' + A.icon('back') + '<span>' + esc(label) + '</span></a>';
  }

  /* ---------- Screens ---------- */
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
        (mine ? '' : '<a class="btn btn--ghost btn--sm" href="#/book/' + esc(A.myBookId()) + '">' + esc(t('app_book_mine')) + '</a>') + '</div>' +
      '<div class="grid rise">' +
        '<section class="card card--forest span-8" style="--i:0" aria-labelledby="h-cont">' +
          '<h2 class="t-h1" id="h-cont">' + esc(h) + '</h2>' +
          '<p class="t-lead" style="margin-top:12px">' + esc(lead) + '</p>' +
          '<div style="margin-top:24px">' + meter(share) + '</div>' +
          (btn ? '<div class="btn-row" style="margin-top:24px">' + btn + '</div>' : '') +
        '</section>' +
        '<section class="stage span-4" style="--i:1;background:var(--t-sun)" aria-label="' + esc(t('app_home_buddy')) + '">' +
          '<div class="bub say">' + esc(t(share.done ? 'app_book_bub_back' : 'app_book_bub_start')) + '</div>' + A.Cast.drawing(A.buddyFor(book.language)) + '</section>' +
        (book.review === 'draft' ? '<section class="card card--bone span-12" style="--i:2" role="note"><h2 class="t-h3">' + esc(t('app_book_draft_h')) + '</h2><p class="t-small" style="margin-top:6px">' + esc(t('app_book_draft_p')) + '</p></section>' : '') +
        '<h2 class="t-h2 span-12 home__section" style="--i:3">' + esc(t('app_book_units')) + '</h2>';
    book.units.forEach(function (u, i) {
      var style = ' style="--i:' + (4 + i) + '"';
      if (u.planned) {
        html += '<div class="card card--bone span-6 rd-unit is-planned"' + style + '><h3 class="t-h3"' + contentAttrs(book) + '>' + esc(unitTitle(book, u)) + '</h3>' +
          '<p class="t-small" style="margin-top:8px">' + esc(t('app_book_writing')) + '</p></div>';
        return;
      }
      var s = unitShare(book, u);
      var state = s.done === s.total ? t('app_book_unit_done') : s.done ? t('app_book_unit_going') : t('app_book_unit_new');
      html += '<a class="card span-6 rd-unit" href="' + href(book, u) + '"' + style + '><div class="card__row"><div class="card__art">' + A.Cast.drawing(u.art || 'owl') + '</div>' +
        '<div style="flex:1;min-width:0"><h3 class="t-h3"' + contentAttrs(book) + '>' + esc(unitTitle(book, u)) + '</h3>' +
        '<p class="t-small" style="margin-top:8px"' + contentAttrs(book) + '>' + esc(u.goal) + '</p>' +
        '<div style="margin-top:14px">' + meter(s) + '</div><p class="t-tiny" style="margin-top:8px">' + esc(state) + '</p></div></div></a>';
    });
    html += localNote() + '</div>';
    return html;
  }

  function localNote() {
    if (signedIn()) return '';
    return '<p class="t-tiny span-12" style="--i:20;margin-top:4px">' + esc(t('app_book_local')) + '</p>';
  }

  function unitView(book, unit) {
    var stop = nextStop(book);
    var html = '' + backLink(href(book), bookName(book)) +
      '<div class="view__head"><div><h1 class="t-h1"' + contentAttrs(book) + '>' + esc(unitTitle(book, unit)) + '</h1>' +
        '<p class="t-lead"' + contentAttrs(book) + '>' + esc(unit.goal) + '</p></div></div>' +
      '<div class="grid rise">' +
        '<h2 class="t-h2 span-12 home__section" style="--i:0">' + esc(t('app_book_pages')) + '</h2>';
    unit.pages.forEach(function (p, i) {
      var done = isDone(book, unit, p);
      var next = stop && stop.unit === unit && stop.page === p;
      html += '<a class="card span-6 rd-page' + (done ? ' card--leaf' : '') + (next ? ' is-next' : '') + '" href="' + href(book, unit, p) + '" style="--i:' + (1 + i) + '">' +
        '<div class="card__row"><span class="rd-mark' + (done ? ' is-done' : '') + '" aria-hidden="true">' + A.icon(done ? 'check' : 'arrow') + '</span>' +
        '<div style="min-width:0"><h3 class="t-h3"' + contentAttrs(book) + '>' + esc(p.title) + '</h3>' +
        '<p class="t-small" style="margin-top:6px"' + contentAttrs(book) + '>' + esc(p.about) + '</p>' +
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

  /* ---------- Blocks ---------- */
  function blockHtml(b, i) {
    switch (b.t) {
      case 'text': return '<div class="rd-text">' + paras(b.md) + '</div>';
      case 'examples':
        return '<div class="rd-examples">' + b.items.map(function (x) {
          return '<div class="rd-ex"><p class="rd-ex__s">' + md(x.s) + '</p>' + (x.n ? '<p class="rd-ex__n">' + md(x.n) + '</p>' : '') + '</div>';
        }).join('') + '</div>';
      case 'table':
        return '<figure class="rd-table">' + (b.caption ? '<figcaption>' + md(b.caption) + '</figcaption>' : '') +
          '<div class="rd-table__scroll"><table><thead><tr>' + b.head.map(function (h) { return '<th scope="col">' + md(h) + '</th>'; }).join('') + '</tr></thead><tbody>' +
          b.rows.map(function (r) { return '<tr>' + r.map(function (c, k) { return k === 0 ? '<th scope="row">' + md(c) + '</th>' : '<td>' + md(c) + '</td>'; }).join('') + '</tr>'; }).join('') +
          '</tbody></table></div></figure>';
      case 'dialogue':
        return '<figure class="rd-dialogue">' + (b.title ? '<figcaption>' + md(b.title) + '</figcaption>' : '') +
          b.lines.map(function (l) { return '<p><b>' + esc(l.who) + '</b><span>' + md(l.s) + '</span></p>'; }).join('') + '</figure>';
      case 'tip':
        return '<aside class="rd-tip"><div class="rd-tip__art">' + A.Cast.drawing(b.art || 'owl') + '</div><div class="bub say bub--inline rd-tip__bub">' + md(b.md) + '</div></aside>';
      case 'reading':
        return '<section class="rd-reading">' + (b.title ? '<h2 class="t-h3">' + esc(b.title) + '</h2>' : '') + paras(b.md) + '</section>';
      case 'ex': return exHtml(i);
      default: return '';
    }
  }

  /* ---------- Exercises ---------- */
  function prepare(b) {
    if (b.kind === 'match') {
      return { lo: shuffle(b.pairs.length), ro: shuffle(b.pairs.length, true), sel: null, got: {}, gotR: {}, err: {}, pairs: {}, flash: null };
    }
    return {
      items: b.items.map(function (it) {
        var s = { done: false, first: null, tries: 0, wrong: {}, picked: null, value: '', shown: false };
        if (b.kind === 'choice') s.order = shuffle(it.o.length, true);
        if (b.kind === 'order') { s.words = it.a.split(/\s+/); s.pool = shuffle(s.words.length, true); s.placed = []; }
        return s;
      })
    };
  }
  function tfOptions(b) { return b.ng ? ['t', 'f', 'ng'] : ['t', 'f']; }
  function tfLabel(v) { return t(v === 't' ? 'app_book_true' : v === 'f' ? 'app_book_false' : 'app_book_ng'); }
  function rightAnswer(b, it) {
    if (b.kind === 'choice') return it.o[0];
    if (b.kind === 'tf') return tfLabel(it.a);
    if (b.kind === 'gap') return it.a[0];
    return it.a;
  }
  function isRight(b, it, s) {
    if (b.kind === 'choice') return s.picked === 0;
    if (b.kind === 'tf') return s.picked === it.a;
    if (b.kind === 'gap') { var v = norm(s.value); return it.a.some(function (a) { return norm(a) === v; }); }
    if (b.kind === 'order') return s.placed.length === s.words.length && s.placed.map(function (w) { return s.words[w]; }).join(' ') === s.words.join(' ');
    return false;
  }
  function matchRight(b, l, r) { return b.pairs[r][1] === b.pairs[l][1]; }
  function answered(b, s) {
    if (b.kind === 'match') return Object.keys(s.pairs).length === b.pairs.length;
    return s.items.every(function (x, i) {
      if (b.kind === 'gap') return norm(x.value) !== '';
      if (b.kind === 'order') return x.placed.length === x.words.length;
      return x.picked != null;
    });
  }
  function blockDone(b, s) {
    if (b.kind === 'match') return Object.keys(s.got).length === b.pairs.length;
    return s.items.every(function (x) { return x.done; });
  }
  /* Right first time (pages) */
  function firstTally(b, s) {
    if (b.kind === 'match') return { right: b.pairs.filter(function (p, l) { return s.got[l] && !s.err[l]; }).length, total: b.pairs.length };
    return { right: s.items.filter(function (x) { return x.first === true; }).length, total: s.items.length };
  }

  var PRAISE = ['app_book_right_1', 'app_book_right_2', 'app_book_right_3'];
  function praise(b, i) { return t(PRAISE[(b + i) % 3]); }
  function feedback(ok, text, why) {
    return '<div class="fb ' + (ok ? 'fb--ok' : 'fb--no') + '">' + A.Cast.book(ok ? 'happy' : 'think') +
      '<p><b>' + esc(text) + '</b>' + (why ? ' <span>' + md(why) + '</span>' : '') + '</p></div>';
  }
  /* The sentence with its gap: a line while open, the answer once it is right */
  function withGap(q, fill) {
    var parts = md(q).split('___');
    if (parts.length < 2) return md(q);
    return parts[0] + '<span class="gap' + (fill ? ' is-filled' : '') + '">' + (fill ? md(fill) : '<span class="sr">' + esc(t('app_book_gap')) + '</span>') + '</span>' + parts.slice(1).join('___');
  }

  function exHtml(bi) {
    var b = ctx.blocks[bi], s = ctx.state[bi];
    var test = ctx.kind === 'test', review = test && ctx.result;
    var html = '<section class="ex ex--' + b.kind + '" data-block="' + bi + '"' + contentAttrs(ctx.book) + '><h3 class="ex__h">' + md(b.h) + '</h3>';
    if (b.kind === 'match') html += matchHtml(bi, b, s, test, review);
    else {
      b.items.forEach(function (it, i) {
        var x = s.items[i];
        var cls = review ? (isRight(b, it, x) ? ' is-right' : ' is-wrong') : x.done ? ' is-right' : x.flash ? ' is-wrong' : '';
        html += '<div class="ex-item' + cls + '" data-item="' + i + '">' + itemHtml(bi, i, b, it, x, test, review) + '</div>';
      });
      if (!test && (b.kind === 'gap') && !blockDone(b, s)) {
        html += '<div class="btn-row ex__foot"><button class="btn btn--primary btn--sm" type="button" data-act="check" data-b="' + bi + '">' + esc(t('app_book_check')) + '</button></div>';
      }
    }
    return html + '</section>';
  }

  function itemHtml(bi, i, b, it, x, test, review) {
    var a = ' data-b="' + bi + '" data-i="' + i + '"';
    var html = '', fb = '';
    if (review) {
      var ok = isRight(b, it, x);
      fb = ok ? feedback(true, praise(bi, i), it.why) : feedback(false, t('app_book_answer_is', { answer: rightAnswer(b, it) }), it.why);
    } else if (!test) {
      if (x.done) fb = x.shown ? feedback(false, t('app_book_answer_is', { answer: rightAnswer(b, it) }), it.why) : feedback(true, praise(bi, i), it.why);
      else if (x.flash) fb = feedback(false, t('app_book_wrong'), '');
    }
    var locked = review || x.done;

    if (b.kind === 'choice' || b.kind === 'tf') {
      if (it.q) html += '<p class="ex-q">' + withGap(it.q, b.kind === 'choice' && ((x.done && !test) || (review && isRight(b, it, x))) ? it.o[0] : '') + '</p>';
      var opts = b.kind === 'choice' ? x.order : tfOptions(b);
      html += '<div class="opts' + (b.kind === 'tf' ? ' opts--tf' : '') + (it.q ? '' : ' opts--stack') + '" role="group" aria-label="' + esc(it.q ? t('app_book_options') : b.h) + '">';
      opts.forEach(function (o) {
        var label = b.kind === 'choice' ? md(it.o[o]) : esc(tfLabel(o));
        var right = b.kind === 'choice' ? o === 0 : o === it.a;
        var c = '';
        if (review) c = right ? ' is-right' : x.picked === o ? ' is-wrong' : '';
        else if (test) c = x.picked === o ? ' is-picked' : '';
        else if (x.done) c = right ? ' is-right' : '';
        else if (x.wrong[o]) c = ' is-wrong';
        var dis = locked || (!test && x.wrong[o]);
        html += '<button class="opt' + c + '" type="button" data-act="pick"' + a + ' data-o="' + o + '"' + (dis ? ' disabled' : '') +
          (test && !review ? ' aria-pressed="' + (x.picked === o) + '"' : '') + '>' + label + '</button>';
      });
      html += '</div>';
    } else if (b.kind === 'gap') {
      var parts = md(it.q).split('___');
      var size = Math.max.apply(null, it.a.map(function (s) { return s.length; })) + 2;
      var input = '<input class="gap-in" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="done"' + a +
        ' size="' + size + '" value="' + esc(x.done && x.shown ? it.a[0] : x.value) + '" aria-label="' + esc(t('app_book_your_answer')) + '"' + (locked ? ' readonly' : '') + '>';
      html += '<p class="ex-q">' + parts[0] + input + parts.slice(1).join('___') + '</p>';
      if (!test && !x.done && x.tries >= 2) html += '<button class="linkish" type="button" data-act="show"' + a + '>' + esc(t('app_book_show')) + '</button>';
    } else if (b.kind === 'order') {
      var placed = x.done && x.shown ? x.words.map(function (w, k) { return k; }) : x.placed;
      html += '<div class="ord-line' + (placed.length ? '' : ' is-empty') + '" aria-live="polite">' +
        (placed.length ? placed.map(function (w) {
          return '<button class="tile" type="button" data-act="unplace"' + a + ' data-w="' + w + '"' + (locked ? ' disabled' : '') + '>' + esc(x.words[w]) + '</button>';
        }).join('') : '<span class="t-small">' + esc(t('app_book_order_hint')) + '</span>') + '</div>';
      if (!locked) {
        html += '<div class="ord-pool">' + x.pool.map(function (w) {
          var used = x.placed.indexOf(w) > -1;
          return '<button class="tile' + (used ? ' is-used' : '') + '" type="button" data-act="place"' + a + ' data-w="' + w + '"' + (used ? ' disabled aria-hidden="true" tabindex="-1"' : '') + '>' + esc(x.words[w]) + '</button>';
        }).join('') + '</div>';
        if (!test && x.flash) {
          html += '<div class="btn-row ex__foot"><button class="linkish" type="button" data-act="reset"' + a + '>' + esc(t('app_book_clear')) + '</button>' +
            (x.tries >= 2 ? '<button class="linkish" type="button" data-act="show"' + a + '>' + esc(t('app_book_show')) + '</button>' : '') + '</div>';
        }
      }
    }
    return html + '<div class="fb-slot" aria-live="polite">' + fb + '</div>';
  }

  function matchHtml(bi, b, s, test, review) {
    var a = ' data-b="' + bi + '"';
    var html = '<p class="t-small ex__hint">' + esc(t('app_book_match_hint')) + '</p><div class="match">';
    html += '<div class="match__col">' + s.lo.map(function (l) {
      var c = '', pairNo = '';
      if (review) c = matchRight(b, l, s.pairs[l]) ? ' is-right' : ' is-wrong';
      else if (test) { if (s.pairs[l] != null) { c = ' is-paired'; pairNo = ' data-pair="' + (s.lo.indexOf(l) % 6) + '"'; } }
      else if (s.got[l]) c = ' is-matched';
      if (!review && s.sel === l) c += ' is-sel';
      if (s.flash && s.flash.l === l) c += ' is-wrong';
      var dis = review || (!test && s.got[l]);
      return '<button class="tile tile--match' + c + '" type="button" data-act="mleft"' + a + ' data-l="' + l + '"' + pairNo + (dis ? ' disabled' : '') + ' aria-pressed="' + (s.sel === l) + '">' + esc(b.pairs[l][0]) + '</button>';
    }).join('') + '</div>';
    html += '<div class="match__col">' + s.ro.map(function (r) {
      var c = '', pairNo = '';
      var owner = null;
      Object.keys(s.pairs).forEach(function (l) { if (s.pairs[l] === r) owner = +l; });
      if (review) c = owner != null ? (matchRight(b, owner, r) ? ' is-right' : ' is-wrong') : '';
      else if (test) { if (owner != null) { c = ' is-paired'; pairNo = ' data-pair="' + (s.lo.indexOf(owner) % 6) + '"'; } }
      else if (s.gotR[r]) c = ' is-matched';
      if (s.flash && s.flash.r === r) c += ' is-wrong';
      var dis = review || (!test && s.gotR[r]);
      return '<button class="tile tile--match' + c + '" type="button" data-act="mright"' + a + ' data-r="' + r + '"' + pairNo + (dis ? ' disabled' : '') + '>' + esc(b.pairs[r][1]) + '</button>';
    }).join('') + '</div></div>';
    var fb = '';
    if (review) {
      var wrong = b.pairs.filter(function (p, l) { return !matchRight(b, l, s.pairs[l]); });
      fb = wrong.length ? feedback(false, t('app_book_answer_is', { answer: wrong.map(function (p) { return p[0] + ' ' + p[1]; }).join(', ') }), '')
        : feedback(true, praise(bi, 0), '');
    } else if (!test && blockDone(b, s)) fb = feedback(true, praise(bi, 0), b.pairs.map(function (p) { return p[0] + ' ' + p[1]; }).join(', '));
    else if (!test && s.flash) fb = feedback(false, t('app_book_wrong'), '');
    return html + '<div class="fb-slot" aria-live="polite">' + fb + '</div>';
  }

  /* ---------- Page and test screens ---------- */
  function startCtx(kind, book, unit, page) {
    var blocks = kind === 'test' ? unit.test : page.blocks;
    ctx = { kind: kind, book: book, unit: unit, page: page, blocks: blocks, state: blocks.map(function (b) { return b.t === 'ex' ? prepare(b) : null; }),
      key: keyOf(book, unit, kind === 'test' ? null : page), result: null, saved: false };
  }

  function pageView(book, unit, page) {
    startCtx('page', book, unit, page);
    return backLink(href(book, unit), unitTitle(book, unit)) +
      '<article class="paper rise"' + contentAttrs(book) + '>' +
        '<header class="paper__head" style="--i:0"><h1 class="t-h1">' + esc(page.title) + '</h1>' + (page.about ? '<p class="t-lead">' + esc(page.about) + '</p>' : '') + '</header>' +
        page.blocks.map(function (b, i) { return '<div class="rd-block" style="--i:' + Math.min(i + 1, 8) + '">' + blockHtml(b, i) + '</div>'; }).join('') +
      '</article>' +
      '<div data-end>' + pageEnd() + '</div>';
  }

  function pageComplete() {
    return ctx.blocks.every(function (b, i) { return b.t !== 'ex' || blockDone(b, ctx.state[i]); });
  }
  function pageEnd() {
    var book = ctx.book, unit = ctx.unit, i = unit.pages.indexOf(ctx.page);
    var last = i === unit.pages.length - 1;
    var prev = i > 0 ? '<a class="btn btn--quiet" href="' + href(book, unit, unit.pages[i - 1]) + '">' + A.icon('back') + esc(t('app_book_prev')) + '</a>' : '';
    var nextHref = last ? href(book, unit, 'test') : href(book, unit, unit.pages[i + 1]);
    var nextLabel = last ? t('app_book_to_test') : t('app_book_next');
    var open = pageComplete() || isDone(book, unit, ctx.page);
    if (open) {
      return '<section class="card card--leaf page-end is-open">' +
        '<div class="card__row"><div class="card__art page-end__art">' + A.Cast.drawing('dog') + '</div>' +
        '<div><h2 class="t-h2">' + esc(t('app_book_page_end_h')) + '</h2><p class="t-body" style="margin-top:8px">' +
          esc(last ? t('app_book_unit_end_p') : t('app_book_page_end_p')) + '</p>' +
        '<div class="btn-row" style="margin-top:18px">' + prev + '<a class="btn btn--primary" href="' + nextHref + '">' + esc(nextLabel) + A.icon('arrow') + '</a></div></div></div></section>';
    }
    return '<section class="card card--bone page-end">' +
      '<p class="t-body">' + esc(t('app_book_locked')) + '</p>' +
      '<div class="btn-row" style="margin-top:16px">' + prev + '<button class="btn btn--primary" type="button" disabled>' + esc(nextLabel) + A.icon('arrow') + '</button></div></section>';
  }

  function testView(book, unit) {
    startCtx('test', book, unit, null);
    var rec = testRec(book, unit);
    return backLink(href(book, unit), unitTitle(book, unit)) +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_book_test')) + '</h1>' +
        '<p class="t-lead"' + contentAttrs(book) + '>' + esc(unitTitle(book, unit)) + '</p></div></div>' +
      '<div data-result></div>' +
      '<div class="grid rise" style="margin-bottom:var(--gap)">' +
        '<section class="card span-8 card--center" style="--i:0"><p class="t-body">' + esc(t('app_book_test_intro', { pass: pct(PASS) })) + '</p>' +
          (rec && rec.score != null ? '<p class="t-small" style="margin-top:10px">' + esc(t('app_book_test_best', { score: pct(rec.score) })) + '</p>' : '') + '</section>' +
        '<section class="stage span-4" style="--i:1;background:var(--t-lime);min-height:240px"><div class="bub say">' + esc(t('app_book_test_bub')) + '</div>' + A.Cast.drawing('dragon') + '</section>' +
      '</div>' +
      '<article class="paper"' + contentAttrs(book) + '>' +
        unit.test.map(function (b, i) { return '<div class="rd-block">' + blockHtml(b, i) + '</div>'; }).join('') +
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
      '<p class="t-num">' + esc(pct(score)) + '</p>' +
      '<h2 class="t-h2" style="margin-top:10px">' + esc(t(pass ? 'app_book_test_passed_h' : 'app_book_test_failed_h')) + '</h2>' +
      '<p class="t-body" style="margin-top:8px">' + esc(t(pass ? 'app_book_test_passed_p' : 'app_book_test_failed_p')) + '</p>' +
      '<div class="btn-row" style="margin-top:18px">' + next + '<button class="btn btn--ghost btn--on-forest" type="button" data-act="retake">' + esc(t('app_book_test_retake')) + '</button></div>' +
      '</div></div></section>';
  }

  /* ---------- Interaction ---------- */
  function rerender(bi) {
    var el = root.querySelector('[data-block="' + bi + '"]');
    if (!el) return;
    var act = document.activeElement, sel = null;
    if (act && el.contains(act)) {
      sel = ['data-act', 'data-i', 'data-o', 'data-w', 'data-l', 'data-r'].filter(function (k) { return act.hasAttribute(k); })
        .map(function (k) { return '[' + k + '="' + act.getAttribute(k) + '"]'; }).join('');
      if (act.classList.contains('gap-in')) sel = '.gap-in[data-i="' + act.getAttribute('data-i') + '"]';
    }
    el.outerHTML = exHtml(bi);
    el = root.querySelector('[data-block="' + bi + '"]');
    if (sel) {
      var f = el.querySelector(sel + ':not([disabled])') || el.querySelector('button:not([disabled]):not(.is-used), input:not([readonly])') || el.querySelector('.fb-slot');
      if (f) { if (f.classList.contains('fb-slot')) f.setAttribute('tabindex', '-1'); f.focus({ preventScroll: true }); }
    }
  }
  function refreshEnd() {
    var end = root.querySelector('[data-end]');
    if (end) end.innerHTML = ctx.kind === 'test' ? testEnd() : pageEnd();
  }
  function afterPractice() {
    if (ctx.kind !== 'page' || ctx.saved || !pageComplete()) return;
    ctx.saved = true;
    var right = 0, total = 0;
    ctx.blocks.forEach(function (b, i) { if (b.t === 'ex') { var f = firstTally(b, ctx.state[i]); right += f.right; total += f.total; } });
    save(ctx.book.id, ctx.key, { done: true, score: total ? Math.round(right / total * 100) : 100 });
    refreshEnd();
    var end = root.querySelector('.page-end');
    if (end) end.classList.add('is-new');
  }
  function flash(bi, x) {
    x.flash = true;
    rerender(bi);
  }

  function onPick(bi, i, o) {
    var b = ctx.blocks[bi], x = ctx.state[bi].items[i], it = b.items[i];
    if (ctx.result) return;
    if (ctx.kind === 'test') { x.picked = o; rerender(bi); refreshEnd(); return; }
    if (x.done) return;
    x.picked = o;
    if (isRight(b, it, x)) { x.done = true; x.flash = false; if (x.first === null) x.first = true; }
    else { x.wrong[o] = true; x.first = false; x.flash = true; }
    rerender(bi);
    afterPractice();
  }
  function onCheck(bi) {
    var b = ctx.blocks[bi], s = ctx.state[bi];
    s.items.forEach(function (x, i) {
      if (x.done || norm(x.value) === '') return;
      if (isRight(b, b.items[i], x)) { x.done = true; x.flash = false; if (x.first === null) x.first = true; }
      else { x.tries++; x.first = false; x.flash = true; }
    });
    rerender(bi);
    afterPractice();
  }
  function onShow(bi, i) {
    var x = ctx.state[bi].items[i];
    x.done = true; x.shown = true; x.first = false; x.flash = false;
    rerender(bi);
    afterPractice();
  }
  function onPlace(bi, i, w, add) {
    var b = ctx.blocks[bi], x = ctx.state[bi].items[i];
    if (ctx.result || x.done) return;
    if (add) { if (x.placed.indexOf(w) === -1) x.placed.push(w); }
    else x.placed = x.placed.filter(function (v) { return v !== w; });
    x.flash = false;
    if (ctx.kind === 'page' && x.placed.length === x.words.length) {
      if (isRight(b, b.items[i], x)) { x.done = true; if (x.first === null) x.first = true; }
      else { x.tries++; x.first = false; x.flash = true; }
    }
    rerender(bi);
    if (ctx.kind === 'test') refreshEnd(); else afterPractice();
  }
  function onReset(bi, i) { var x = ctx.state[bi].items[i]; x.placed = []; x.flash = false; rerender(bi); }

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
    if (matchRight(b, l, v) && !s.gotR[v]) {
      s.got[l] = true; s.gotR[v] = true; s.sel = null;
    } else {
      s.err[l] = true; s.flash = { l: l, r: v }; s.sel = null;
    }
    rerender(bi);
    afterPractice();
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
    window.scrollTo({ top: Math.max(0, box.getBoundingClientRect().top + window.scrollY - 90), behavior: 'smooth' });
    card.focus({ preventScroll: true });
  }

  function bind() {
    if (root.__reader) return;
    root.__reader = true;
    root.addEventListener('click', function (e) {
      var el = e.target.closest('[data-act]');
      if (!el || !ctx || el.disabled) return;
      var act = el.getAttribute('data-act');
      var bi = +el.getAttribute('data-b'), i = +el.getAttribute('data-i');
      if (act === 'pick') { var o = el.getAttribute('data-o'); onPick(bi, i, /^\d+$/.test(o) ? +o : o); }
      else if (act === 'check') onCheck(bi);
      else if (act === 'show') onShow(bi, i);
      else if (act === 'place') onPlace(bi, i, +el.getAttribute('data-w'), true);
      else if (act === 'unplace') onPlace(bi, i, +el.getAttribute('data-w'), false);
      else if (act === 'reset') onReset(bi, i);
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
      if (e.key !== 'Enter' || !ctx || !el.classList.contains('gap-in')) return;
      e.preventDefault();
      if (ctx.kind === 'page') onCheck(+el.getAttribute('data-b'));
    });
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
    view.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + esc(t('app_book_loading')) + '">' + A.loaderInner() + '</div></div>';
    return loadIndex().then(function (list) {
      var id = parts[0] || A.myBookId();
      var entry = list.filter(function (b) { return b.id === id; })[0];
      if (!entry) return { html: noneView(list.filter(function (b) { return b.written > 0; })), title: t('app_nav_book') };
      return Promise.all([loadBook(id), loadProgress(id)]).then(function (r) {
        var book = r[0];
        var unit = book.units.filter(function (u) { return u.id === parts[1] && !u.planned; })[0];
        if (!unit) return { html: coverView(book), title: bookName(book) };
        if (parts[2] === 'test') return { html: testView(book, unit), title: t('app_book_test') };
        var page = unit.pages.filter(function (p) { return p.id === parts[2]; })[0];
        if (!page) return { html: unitView(book, unit), title: unitTitle(book, unit) };
        return { html: pageView(book, unit, page), title: page.title };
      });
    }).catch(function (e) {
      console.warn('[Alimun] Course book did not load', e && e.message);
      index = null;
      return { html: errorView(), title: t('app_nav_book') };
    }).then(function (res) {
      if (root !== view) return res;
      view.innerHTML = res.html;
      return res;
    });
  }

  window.AlimunReader = { mount: mount };
})();
