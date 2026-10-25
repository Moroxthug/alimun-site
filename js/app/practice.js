/* Alimun app: the Practice screen (docs/DASHBOARD_PLAN.md, step 5).
   Short rounds built from the student's course book: exercises from the units they have reached, mixed and turned into
   other kinds of exercise (a gap exercise can come back as a word bank, matching as memory cards or a crossword, word
   order with extra words), so the same item rarely looks the same twice. Answers the student got wrong, in lessons,
   tests or rounds, come back first and then at growing intervals; items not seen yet come next.
   Item memory: practice_items for a signed-in student (merged with this browser's copy on the first visit, then
   written on every answer); this browser only ("alimun-practice") otherwise, or while the table is not there. A finished round is saved as practice_progress "practice:round:<date>" for a signed-in student (it counts
   for the streak). "Every kind of exercise" plays a hand-written set (/data/practice/<set>.<lang>.json).
   Routes: #/practice, #/practice/round, #/practice/types. Interface text: app_pr_* and app_ex_* keys. */
(function () {
  'use strict';
  var A = null, root = null, R = null;
  var MEM = 'alimun-practice';
  var DAY = 86400000;
  var BOXES = [0, 1, 3, 7, 21, 60];  /* days before an item comes back, by how many times in a row it was right */
  var ROUND = 6;
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EX = function () { return window.AlimunEx; };

  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }

  /* ---------- Item memory ---------- */
  /* Signed in: one browser copy per student, kept in step with practice_items */
  var who = null, synced = null, dbOff = false;
  function memKey() { return who ? MEM + ':' + who : MEM; }
  function readMem() { try { return JSON.parse(localStorage.getItem(memKey()) || '{}') || {}; } catch (e) { return {}; } }
  function writeMem(m) { try { localStorage.setItem(memKey(), JSON.stringify(m)); } catch (e) { /* storage blocked */ } }
  /* Called by the book reader and Practice with the shell helpers: who is answering, and their saved items */
  function use(helpers) {
    var id = helpers.mode() === 'real' && helpers.data().profile.id;
    if (!id) { who = null; return Promise.resolve(); }
    if (who === id && synced) return synced;
    who = id;
    synced = window.AlimunData.practiceItems(id).then(function (list) {
      var m = readMem();
      list.forEach(function (x) {
        var at = Date.parse(x.last_at), mine = m[x.item_key];
        if (!mine || mine.at < at) m[x.item_key] = { b: x.box, n: x.seen, w: x.wrong, at: at };
      });
      writeMem(m);
    }, function (e) { dbOff = true; console.warn('[Alimun] Practice items not loaded', e && e.message); });
    return synced;
  }
  /* One answer to one item (first try): right moves it up a box, wrong sends it back to the first */
  function record(key, ok) {
    if (!key) return;
    var m = readMem(), r = m[key] || { b: 0, n: 0, w: 0 };
    r.n++; r.at = Date.now();
    /* Right the first time it is seen: back in a week; right again after a mistake: one box up */
    if (ok) r.b = r.n > 1 || r.w ? Math.min(BOXES.length - 1, r.b + 1) : 3;
    else { r.b = 0; r.w++; }
    m[key] = r;
    writeMem(m);
    if (who && !dbOff) {
      window.AlimunData.savePracticeItem(who, key, r).catch(function (e) { dbOff = true; console.warn('[Alimun] Practice item not saved', e && e.message); });
    }
  }
  function due(r, now) { return !r || r.at + BOXES[r.b] * DAY <= now; }
  /* Answers got wrong and due again */
  function mistakesDue() {
    var m = readMem(), now = Date.now(), n = 0;
    Object.keys(m).forEach(function (k) { var r = m[k]; if (r.w && r.b < 2 && due(r, now)) n++; });
    return n;
  }

  /* ---------- Building a round ---------- */
  var COMMON = /^(a|an|the|to|der|die|das|den|dem|des|ein|eine|einen|einem|einer|le|la|les|un|une|el|los|las|il|lo|gli|o|os|as|um|uma)$/i;
  function oneWord(s) { return /^[\p{L}][\p{L}'’\-]{2,11}$/u.test(String(s).trim()); }
  function shortOpt(s) { return String(s).trim().split(/\s+/).length <= 3 && String(s).length <= 24; }
  function bare(w) { return String(w).replace(/^[„“"'(¿¡]+|[.,!?;:“”"')]+$/g, ''); }

  /* Every exercise in the units reached, with a key for each item */
  function sources(book, progress) {
    var units = book.units.filter(function (u) { return !u.planned; });
    var reach = 0;
    units.forEach(function (u, i) {
      var any = u.pages.some(function (p) { var r = progress['book:' + book.id + ':' + u.id + ':' + p.id]; return r && r.done; });
      if (any) reach = i;
    });
    var out = [];
    units.slice(0, Math.max(reach + 1, 2)).forEach(function (u) {
      u.pages.forEach(function (p) {
        var gi = 0;
        p.spreads.forEach(function (sp) {
          sp.forEach(function (b) { if (b.t === 'ex') out.push({ b: b, key: book.id + ':' + u.id + ':' + p.id + ':' + gi, unit: u.id }); gi++; });
        });
      });
      (u.test || []).forEach(function (b, gi) { if (b.t === 'ex') out.push({ b: b, key: book.id + ':' + u.id + ':test:' + gi, unit: u.id }); });
    });
    return out;
  }
  function itemCount(b) { return b.pairs ? b.pairs.length : b.items ? b.items.length : 0; }
  /* How much a block is worth practising now: mistakes due count most, then items never seen */
  function weigh(src, mem, now) {
    var w = 0, n = itemCount(src.b);
    for (var i = 0; i < n; i++) {
      var r = mem[src.key + ':' + i];
      if (!r) w += 1;
      else if (r.w && r.b < 2 && due(r, now)) w += 4;
      else if (due(r, now)) w += 0.6;
    }
    return w / Math.max(1, Math.sqrt(n)) + Math.random() * 0.8;
  }
  /* The items to use from a block: the most useful first, up to max */
  function pickItems(src, mem, now, max) {
    var n = itemCount(src.b), idx = [];
    for (var i = 0; i < n; i++) idx.push(i);
    var score = function (i) { var r = mem[src.key + ':' + i]; return (!r ? 2 : r.w && r.b < 2 && due(r, now) ? 5 : due(r, now) ? 1 : 0) + Math.random(); };
    idx.sort(function (a, b) { return score(b) - score(a); });
    return idx.slice(0, max).sort(function (a, b) { return a - b; });
  }
  /* The kinds a block can come back as, with the block for each */
  function remixes(src, pool, mem, now) {
    var b = src.b, out = [];
    if (b.kind === 'match') {
      var ps = pickItems(src, mem, now, 6);
      var pairs = ps.map(function (i) { return b.pairs[i]; });
      out.push({ kind: 'match', b: { t: 'ex', kind: 'match', h: b.h, pairs: pairs }, map: ps });
      if (pairs.length >= 3) out.push({ kind: 'memory', b: { t: 'ex', kind: 'memory', h: b.h, pairs: pairs }, map: ps, w: 1.3 });
      var cw = ps.filter(function (i) { return oneWord(b.pairs[i][0]) && !COMMON.test(b.pairs[i][0]); });
      if (cw.length >= 4) {
        cw = cw.slice(0, 6);
        out.push({ kind: 'crossword', b: { t: 'ex', kind: 'crossword', h: t('app_ex_h_crossword'), words: cw.map(function (i) { return { a: b.pairs[i][0], clue: b.pairs[i][1] }; }) }, map: cw, w: 1.4 });
        out.push({ kind: 'search', b: { t: 'ex', kind: 'search', h: t('app_ex_h_search'), words: cw.map(function (i) { return b.pairs[i][0]; }) }, map: [], w: 0.5 });
      }
      return out;
    }
    var ids = pickItems(src, mem, now, b.kind === 'order' ? 2 : 4);
    var items = ids.map(function (i) { return b.items[i]; });
    out.push({ kind: b.kind, b: Object.assign({}, b, { items: items }), map: ids });
    if (b.kind === 'choice' && items.every(function (it) { return it.q && it.q.indexOf('___') > -1 && it.o.every(shortOpt); })) {
      out.push({ kind: 'select', b: { t: 'ex', kind: 'select', h: b.h, items: items }, map: ids, w: 1.2 });
    }
    if (b.kind === 'gap' && items.length >= 3) {
      var words = items.map(function (it) { return it.a[0]; });
      var distinct = words.filter(function (w, k) { return words.findIndex(function (v) { return EX().norm(v) === EX().norm(w); }) === k; }).length === words.length;
      if (words.every(oneWord) && distinct) {
        var others = [];
        pool.forEach(function (p) {
          if (p.b.kind !== 'gap' || p.unit !== src.unit || p === src) return;
          p.b.items.forEach(function (it) { var w = it.a[0]; if (oneWord(w) && others.indexOf(w) === -1 && !words.some(function (v) { return EX().norm(v) === EX().norm(w); })) others.push(w); });
        });
        var extra = others.sort(function () { return Math.random() - 0.5; }).slice(0, 2);
        out.push({ kind: 'bank', b: { t: 'ex', kind: 'bank', h: b.h, extra: extra, items: items.map(function (it) { return { q: it.q, a: it.a[0], why: it.why }; }) }, map: ids, w: 1.5 });
      }
    }
    if (b.kind === 'order') {
      var mine = [];
      items.forEach(function (it) { it.a.split(/\s+/).forEach(function (w) { mine.push(EX().norm(bare(w))); }); });
      var spare = [];
      pool.forEach(function (p) {
        if (p.b.kind !== 'order' || p === src) return;
        p.b.items.forEach(function (it) {
          var ws = it.a.split(/\s+/);
          ws.slice(1, -1).forEach(function (w) { w = bare(w); if (w.length > 1 && mine.indexOf(EX().norm(w)) === -1 && spare.indexOf(w) === -1) spare.push(w); });
        });
      });
      if (spare.length >= 2) {
        out.push({ kind: 'build', b: { t: 'ex', kind: 'build', h: b.h, items: items.map(function (it) {
          return { a: it.a, why: it.why, extra: spare.sort(function () { return Math.random() - 0.5; }).slice(0, 2) };
        }) }, map: ids, w: 1.3 });
      }
    }
    return out;
  }
  function choose(list) {
    var total = list.reduce(function (n, x) { return n + (x.w || 1); }, 0), r = Math.random() * total;
    for (var i = 0; i < list.length; i++) { r -= list[i].w || 1; if (r <= 0) return list[i]; }
    return list[list.length - 1];
  }
  function buildRound(book, progress) {
    var pool = sources(book, progress), mem = readMem(), now = Date.now();
    var ranked = pool.map(function (s) { return { s: s, w: weigh(s, mem, now) }; }).sort(function (a, b) { return b.w - a.w; });
    var round = [], used = {}, last = null, kinds = {};
    for (var k = 0; k < ranked.length && round.length < ROUND; k++) {
      var src = ranked[k].s;
      if (used[src.key]) continue;
      var opts = remixes(src, pool, mem, now).filter(function (o) { return o.kind !== last && (kinds[o.kind] || 0) < 2; });
      if (!opts.length) continue;
      var pick = choose(opts);
      used[src.key] = true; last = pick.kind; kinds[pick.kind] = (kinds[pick.kind] || 0) + 1;
      round.push({ b: pick.b, keys: pick.map.map(function (i) { return src.key + ':' + i; }) });
    }
    return round;
  }

  /* ---------- Loading ---------- */
  function getJSON(url) { return fetch(url).then(function (r) { if (!r.ok) throw new Error(url + ' ' + r.status); return r.json(); }); }
  var sets = null;
  function loadSets() { return sets ? Promise.resolve(sets) : getJSON('/data/practice/index.json').then(function (x) { sets = x.sets || []; return sets; }, function () { sets = []; return sets; }); }
  function explainLang() {
    var l = A.lang === 'ma' ? 'fr' : A.lang;
    return ['en', 'es', 'fr', 'de', 'pt', 'zh', 'ar', 'it'].indexOf(l) > -1 ? l : 'en';
  }
  function signedIn() { return A.mode() === 'real' && A.data().profile.id; }
  function typesSet(list, language) {
    return list.filter(function (s) { return s.language === language && /-types$/.test(s.id); })[0] || list.filter(function (s) { return /-types$/.test(s.id); })[0] || null;
  }

  /* ---------- Screens ---------- */
  function homeView(info) {
    var d = A.data(), lang = A.languageName(d.profile.language);
    var hasBook = !!info.book;
    var mist = mistakesDue();
    var set = info.set;
    var html = '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_practice')) + '</h1><p class="t-lead">' + esc(t('app_pr_lead')) + '</p></div></div>' +
      '<div class="grid rise">' +
        '<section class="card card--forest span-8 cover-card" style="--i:0" aria-labelledby="h-round">' +
          '<h2 class="t-h1" id="h-round">' + esc(t('app_pr_round_h')) + '</h2>' +
          '<p class="t-lead" style="margin-top:12px">' + esc(hasBook ? t('app_pr_round_p', { course: A.courseName() }) : t('app_pr_nobook_p', { language: lang })) + '</p>' +
          (hasBook ? '<div class="btn-row" style="margin-top:24px"><a class="btn btn--lime" href="#/practice/round">' + esc(t('app_pr_start')) + A.icon('arrow') + '</a></div>' : '') +
        '</section>' +
        '<section class="stage span-4" style="--i:1;background:var(--t-lime)" aria-hidden="true"><div class="bub say">' + esc(t(mist ? 'app_pr_bub_mistakes' : 'app_pr_bub')) + '</div>' + A.Cast.drawing('dog') + '</section>' +
        '<section class="card span-6" style="--i:2"><div class="card__row"><div class="card__art">' + A.Cast.drawing('ghost') + '</div><div>' +
          '<h2 class="t-h2">' + esc(t('app_pr_mistakes_h')) + '</h2><p class="t-body" style="margin-top:8px">' + esc(mist ? A.tn('app_pr_mistakes_n', mist) : t('app_pr_mistakes_none')) + '</p></div></div></section>' +
        (set ? '<a class="card span-6" href="#/practice/types" style="--i:3"><div class="card__row"><div class="card__art">' + A.Cast.drawing('owl') + '</div><div>' +
          '<h2 class="t-h2">' + esc(t('app_pr_types_h')) + '</h2><p class="t-body" style="margin-top:8px">' + esc(t('app_pr_types_p', { course: A.languageName(set.language) + ' ' + set.level })) + '</p></div></div></a>' : '') +
        (signedIn() ? '' : '<p class="t-tiny span-12" style="--i:4;margin-top:4px">' + esc(t('app_pr_local')) + '</p>') +
      '</div>';
    return html;
  }

  function roundView() {
    document.body.classList.add('is-reading');
    return '<div class="lesson pr">' +
      '<div class="lesson__top"><a class="rd-back" href="#/practice">' + A.icon('back') + '<span>' + esc(t('app_nav_practice')) + '</span></a></div>' +
      '<div class="lesson__bar" aria-hidden="true"><i></i></div>' +
      '<div class="lesson__stage" data-stage></div>' +
      '<nav class="lesson__nav" data-nav></nav></div>';
  }
  function coachHtml() {
    return '<div class="coach" data-coach><div class="bub ' + (R.mood === 'think' ? 'think' : 'say') + ' coach__bub">' + esc(R.line || t('app_book_coach_start')) + '</div>' + A.Cast.book(R.mood) + '</div>';
  }
  function stepHtml(turn) {
    if (R.at >= R.blocks.length) return endHtml(turn);
    return '<article class="spread' + (turn ? ' turn-in-next' : '') + '" data-spread="' + R.at + '"' + R.xa + '>' +
      '<div class="spread__cols spread__cols--ex"><div class="spread__side">' + coachHtml() + '</div><div class="spread__main"><div class="rd-block" style="--i:1">' + R.ex.html(R.at) + '</div></div></div></article>';
  }
  function endHtml(turn) {
    var f = R.ex.firstTally(), score = f.total ? Math.round(f.right / f.total * 100) : 100;
    var pct = new Intl.NumberFormat(A.locale, { style: 'percent' }).format(score / 100);
    var again = R.types ? '#/practice/types' : '#/practice/round';
    return '<article class="spread spread--end' + (turn ? ' turn-in-next' : '') + '" data-spread="end"' + R.xa + '>' +
      '<div class="end"><div class="end__art">' + A.Cast.drawing('dog') + '<div class="bub say end__bub">' + esc(t(score >= 80 ? 'app_pr_end_great' : 'app_pr_end_ok')) + '</div></div>' +
      '<h1 class="t-display">' + esc(t('app_pr_end_h')) + '</h1>' +
      '<p class="t-lead">' + esc(t('app_pr_end_p', { score: pct })) + '</p>' +
      '<div class="btn-row" style="margin-top:26px;justify-content:center"><a class="btn btn--primary" href="' + again + '" data-again>' + esc(t('app_pr_again')) + A.icon('arrow') + '</a>' +
      '<a class="btn btn--quiet" href="#/practice">' + esc(t('app_pr_back')) + '</a></div></div></article>';
  }
  function navHtml() {
    if (R.at >= R.blocks.length) return '<span></span><span></span><span></span>';
    var open = R.ex.done(R.at), last = R.at === R.blocks.length - 1;
    return '<span></span><p class="lesson__hint" aria-live="polite">' + esc(open ? '' : t('app_pr_locked')) + '</p>' +
      '<button class="btn btn--primary lesson__next" type="button" data-act="next"' + (open ? '' : ' disabled') + '>' + esc(t(last ? 'app_pr_finish' : 'app_pr_next')) + A.icon('arrow') + '</button>';
  }
  function refresh() {
    var n = root.querySelector('[data-nav]'); if (n) n.innerHTML = navHtml();
    var bar = root.querySelector('.lesson__bar i'); if (bar) bar.style.width = Math.round(Math.min(R.at, R.blocks.length) / R.blocks.length * 100) + '%';
  }
  function show(turn) {
    var stage = root.querySelector('[data-stage]');
    var old = stage.querySelector('.spread');
    var html = stepHtml(turn && !reduced);
    if (old && turn && !reduced) {
      old.classList.add('turn-out-next'); old.setAttribute('aria-hidden', 'true');
      stage.insertAdjacentHTML('beforeend', html);
      setTimeout(function () { if (old.parentNode) old.parentNode.removeChild(old); }, 520);
    } else stage.innerHTML = html;
    refresh();
    requestAnimationFrame(function () { R.ex.drawLines(stage.querySelector('.spread:not([aria-hidden])')); });
    if (turn) {
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
      var cur = stage.querySelector('.spread:not([aria-hidden])');
      if (cur) { cur.setAttribute('tabindex', '-1'); cur.focus({ preventScroll: true }); }
    }
  }
  function react(mood, line) {
    R.mood = mood; R.line = line;
    var c = root.querySelector('.spread:not([aria-hidden]) [data-coach]');
    if (c) c.outerHTML = coachHtml();
  }
  var PRAISE = ['app_book_right_1', 'app_book_right_2', 'app_book_right_3'];
  function onAnswer(bi, ok) {
    if (R.ex.done(bi)) react('wow', t('app_pr_coach_done'));
    else if (ok === true) react('happy', t(PRAISE[(bi + R.at) % 3]));
    else if (ok === false) react('think', t('app_book_wrong'));
    refresh();
    if (R.ex.done(bi)) {
      var nx = root.querySelector('.lesson__next');
      if (nx) { nx.classList.add('is-ready'); setTimeout(function () { nx.classList.remove('is-ready'); }, 1200); }
    }
  }
  function next() {
    if (!R || !R.ex.done(R.at)) return;
    R.at++; R.mood = 'idle'; R.line = '';
    if (R.at === R.blocks.length) finish();
    show(true);
  }
  function finish() {
    if (R.saved || R.types) return;
    R.saved = true;
    var f = R.ex.firstTally(), score = f.total ? Math.round(f.right / f.total * 100) : 100;
    if (signedIn()) {
      var key = 'practice:round:' + new Date().toISOString().slice(0, 10);
      window.AlimunData.saveBook(A.data().profile.id, key, { done: true, score: score }).catch(function (e) { console.warn('[Alimun] Practice round not saved', e && e.message); });
    }
  }
  function startRound(blocks, keys, xa, ta, types) {
    R = { blocks: blocks, keys: keys, at: 0, mood: 'idle', line: '', xa: xa, types: types, saved: false };
    R.ex = EX().create({ A: A, blocks: blocks, test: false, xa: xa, ta: ta, root: function () { return root; }, onAnswer: onAnswer,
      onItem: function (r) { var k = R.keys[r.bi] && R.keys[r.bi][r.i]; if (k) record(k, r.ok); } });
  }
  function attrs(code, rtl) { return ' lang="' + code + '" dir="' + (rtl ? 'rtl' : 'ltr') + '"'; }

  function emptyView() {
    return '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_practice')) + '</h1></div></div>' +
      '<div class="soon rise"><div class="stage" style="--i:0;background:var(--t-mint)"><div class="bub think">' + esc(t('app_pr_empty_bub')) + '</div>' + A.Cast.drawing('owl') + '</div>' +
      '<div class="card" style="--i:1"><p class="t-body">' + esc(t('app_pr_empty_p')) + '</p><div class="btn-row"><a class="btn btn--primary" href="#/practice">' + esc(t('app_pr_back')) + '</a></div></div></div>';
  }
  function errorView() {
    return '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_practice')) + '</h1></div></div>' +
      '<div class="soon rise"><div class="stage" style="--i:0;background:var(--t-coral)"><div class="bub think">' + esc(t('app_book_error_bub')) + '</div>' + A.Cast.drawing('cat') + '</div>' +
      '<div class="card" style="--i:1"><p class="t-body">' + esc(t('app_book_error')) + '</p><div class="btn-row"><a class="btn btn--primary" href="#/practice">' + esc(t('app_retry')) + '</a></div></div></div>';
  }

  /* ---------- Events ---------- */
  function bind() {
    if (root.__practice) return;
    root.__practice = true;
    root.addEventListener('click', function (e) {
      if (!R || !root.querySelector('.pr')) return;
      if (EX().swallowClick()) { e.preventDefault(); return; }
      var el = e.target.closest('[data-act], [data-again]');
      if (!el || el.disabled) return;
      if (el.hasAttribute('data-again')) { e.preventDefault(); A.rerender(); return; }
      var act = el.getAttribute('data-act');
      if (act === 'next') next();
      else R.ex.act(act, el);
    });
    root.addEventListener('input', function (e) { if (R && root.querySelector('.pr')) R.ex.input(e.target); });
    root.addEventListener('change', function (e) { if (R && root.querySelector('.pr')) R.ex.change(e.target); });
    root.addEventListener('keydown', function (e) { if (R && root.querySelector('.pr')) R.ex.keydown(e); });
    root.addEventListener('pointerdown', function (e) { if (R && root.querySelector('.pr')) EX().pointerDown(R.ex, e); });
    window.addEventListener('resize', function () { if (R && root.querySelector('.pr')) R.ex.drawLines(); });
  }

  /* ---------- Entry ---------- */
  var mountNo = 0;
  function mount(view, parts, helpers) {
    var my = ++mountNo;
    A = helpers; root = view; R = null;
    bind();
    document.body.classList.remove('is-reading');
    view.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + esc(t('app_book_loading')) + '">' + A.loaderInner() + '</div></div>';
    var id = A.myBookId(), lang = explainLang();
    return Promise.all([window.AlimunReader.open(helpers, id), loadSets(), use(helpers)]).then(function (r) {
      var info = { book: r[0] && r[0].book, progress: r[0] && r[0].progress, set: typesSet(r[1], A.data().profile.language) };
      if (my !== mountNo) return { stale: true };
      if (parts[0] === 'types' && info.set) {
        return getJSON('/data/practice/' + encodeURIComponent(info.set.id + '.' + lang) + '.json').then(function (set) {
          var code = window.AlimunData.langCode(set.language) || 'en';
          startRound(set.blocks.filter(function (b) { return b.t === 'ex'; }), [], attrs(lang, lang === 'ar'), attrs(code, false), true);
          return { html: roundView(), title: t('app_pr_types_h'), round: true };
        });
      }
      if (parts[0] === 'round' && info.book) {
        var round = buildRound(info.book, info.progress || {});
        if (!round.length) return { html: emptyView(), title: t('app_nav_practice') };
        var code = window.AlimunData.langCode(info.book.language) || 'en', xl = info.book.explainLang || 'en';
        startRound(round.map(function (x) { return x.b; }), round.map(function (x) { return x.keys; }), attrs(xl, xl === 'ar'), attrs(code, false), false);
        return { html: roundView(), title: t('app_pr_round_h'), round: true };
      }
      return { html: homeView(info), title: t('app_nav_practice') };
    }).catch(function (e) {
      console.warn('[Alimun] Practice did not load', e && e.message);
      return { html: errorView(), title: t('app_nav_practice') };
    }).then(function (res) {
      if (res.stale || my !== mountNo) return { stale: true };
      view.innerHTML = res.html;
      if (res.round) show(false);
      return res;
    });
  }

  /* debug(): the blocks of the round on screen (used by scripts/play-books.js) */
  window.AlimunPractice = { mount: mount, use: use, record: record, mistakesDue: mistakesDue, debug: function () { return R && R.ex.blocks; } };
})();
