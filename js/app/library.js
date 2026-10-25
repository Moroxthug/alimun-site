/* Alimun app: the listening and reading library (docs/DASHBOARD_PLAN.md, step 9; file format in docs/LIBRARY.md).
   One shelf per course language and level (/data/library/<shelf>.<lang>.json, explanations in the student's language):
   listening pieces (dialogues, announcements, interviews, talks, podcasts) and reading pieces (notices, messages,
   articles, opinion pieces, stories), each with its words and exercises in lesson mode (the exercise engine,
   js/app/exercises.js, with feedback straight away).
   Listening: the recording plays line after line (course audio, /data/audio/<shelf>.json), as often as the student
   likes and slower too; the transcript is hidden until they ask for it or finish, and the line being spoken is marked.
   Reading: the words of the piece are marked in the text and show their meaning when tapped; when the text has been
   recorded, "Listen while you read" reads it aloud. The piece's words can be added to the flashcards (js/app/cards.js).
   Results: practice_progress "lib:<shelf>:<piece>" (right first time) for a signed-in student, this browser otherwise;
   a finished piece counts for the streak.
   Routes: #/library, #/library/<shelf>, #/library/<shelf>/<piece>. Interface text: app_lb_* keys. */
(function () {
  'use strict';
  var A = null, root = null, R = null;
  var SUPA_AUDIO = 'https://dgaiasmefcbrtzqwdyri.supabase.co/storage/v1/object/public/course-audio/';
  var LOCAL = 'alimun-library';
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EX = function () { return window.AlimunEx; };
  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function md(s) { return EX().md(s); }
  function signedIn() { return A.mode() === 'real' && A.data().profile.id; }
  function explainLang() {
    var l = A.lang === 'ma' ? 'fr' : A.lang;
    return ['en', 'es', 'fr', 'de', 'pt', 'zh', 'ar', 'it'].indexOf(l) > -1 ? l : 'en';
  }
  function attrs(code, rtl) { return ' lang="' + code + '" dir="' + (rtl ? 'rtl' : 'ltr') + '"'; }

  /* A drawing for each genre */
  var ART = {
    dialogue: ['drawing', 'parrot'], announcement: ['drawing', 'suitcase'], interview: ['spot', 'microphone'], talk: ['drawing', 'owl'], podcast: ['spot', 'headphones'],
    notice: ['drawing', 'cactus'], message: ['spot', 'envelope'], article: ['spot', 'books'], opinion: ['drawing', 'monster'], story: ['drawing', 'ghost']
  };
  /* Genre names (written out, so the build keeps them with the dashboard's text) */
  var GENRE = { dialogue: 'app_lb_g_dialogue', announcement: 'app_lb_g_announcement', interview: 'app_lb_g_interview', talk: 'app_lb_g_talk', podcast: 'app_lb_g_podcast',
    notice: 'app_lb_g_notice', message: 'app_lb_g_message', article: 'app_lb_g_article', opinion: 'app_lb_g_opinion', story: 'app_lb_g_story' };
  function genre(g) { return GENRE[g] ? t(GENRE[g]) : g; }
  function art(genre) {
    var a = ART[genre] || ['drawing', 'teacup'];
    return a[0] === 'spot' && A.Cast.spot ? A.Cast.spot(a[1]) : A.Cast.drawing(a[0] === 'spot' ? 'teacup' : a[1]);
  }

  /* ---------- Loading ---------- */
  function getJSON(url) { return fetch(url).then(function (r) { if (!r.ok) throw new Error(url + ' ' + r.status); return r.json(); }); }
  var index = null, shelves = {}, audio = {};
  function loadIndex() { return index ? Promise.resolve(index) : getJSON('/data/library/index.json').then(function (x) { index = x.shelves || []; return index; }); }
  function loadShelf(id) {
    var k = id + '.' + explainLang();
    return shelves[k] ? Promise.resolve(shelves[k]) : getJSON('/data/library/' + encodeURIComponent(k) + '.json').then(function (x) { shelves[k] = x; return x; });
  }
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
  var results = null;
  function readLocal() { try { return JSON.parse(localStorage.getItem(LOCAL) || '{}') || {}; } catch (e) { return {}; } }
  function loadResults() {
    if (results) return Promise.resolve(results);
    if (!signedIn()) { results = readLocal(); return Promise.resolve(results); }
    return window.AlimunData.libraryResults(signedIn()).then(function (rows) {
      results = {};
      rows.forEach(function (r) { results[r.ex_key] = r.graded_score; });
      return results;
    }, function () { results = readLocal(); return results; });
  }
  function saveResult(key, score) {
    results[key] = Math.max(results[key] != null ? results[key] : -1, score);
    if (signedIn()) {
      window.AlimunData.saveBook(signedIn(), key, { done: true, score: results[key] }).catch(function (e) { console.warn('[Alimun] Library result not saved', e && e.message); });
      window.AlimunData.saveBook(signedIn(), 'practice:round:' + new Date().toISOString().slice(0, 10), { done: true, score: score }).catch(function () {});
    } else {
      try { localStorage.setItem(LOCAL, JSON.stringify(results)); } catch (e) { /* storage blocked */ }
    }
  }

  /* ---------- The shelf ---------- */
  function pickShelf(list, parts) {
    var d = A.data(), mine = list.filter(function (s) { return s.language === d.profile.language; });
    if (parts[0]) return list.filter(function (s) { return s.id === parts[0]; })[0] || null;
    var lv = (d.profile.level || '').slice(0, 2);
    return mine.filter(function (s) { return s.level === lv; })[0] || mine.filter(function (s) { return s.level < lv; }).pop() || mine[0] || null;
  }
  function shelfView(list, S) {
    var d = A.data(), mine = list.filter(function (s) { return s.language === S.language; });
    var html = '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_library')) + '</h1><p class="t-lead">' + esc(t('app_lb_lead')) + '</p></div>' +
      (mine.length > 1 ? '<nav class="lb-levels" aria-label="' + esc(t('app_lb_level')) + '">' + mine.map(function (s) {
        var on = s.id === S.id;
        return '<a class="lb-level' + (on ? ' is-on' : '') + '" href="#/library/' + esc(s.id) + '"' + (on ? ' aria-current="page"' : '') + '>' + esc(A.languageName(s.language) + ' ' + s.level) + '</a>';
      }).join('') + '</nav>' : '') + '</div>';
    var xa = attrs(S.explainLang || 'en', S.explainLang === 'ar'), ta = attrs(window.AlimunData.langCode(S.language) || 'en', false);
    var section = function (kind, h, p) {
      var list2 = S.pieces.filter(function (x) { return x.kind === kind; });
      if (!list2.length) return '';
      return '<h2 class="t-h2 span-12 home__section">' + esc(t(h)) + '</h2><p class="t-body span-12 lb-section-p">' + esc(t(p)) + '</p>' +
        list2.map(function (x, i) {
          var r = results['lib:' + S.id + ':' + x.id];
          return '<a class="card span-6 lb-card' + (kind === 'listen' ? ' card--mint' : '') + '" href="#/library/' + esc(S.id) + '/' + esc(x.id) + '" style="--i:' + (i + 1) + '"><div class="card__row"><div class="card__art">' + art(x.genre) + '</div><div>' +
            '<h3 class="t-h2"' + ta + '>' + esc(x.title) + '</h3><p class="t-body" style="margin-top:8px"' + xa + '>' + md(x.about) + '</p>' +
            '<p class="t-small lb-card__meta">' + esc(t('app_lb_meta', { genre: genre(x.genre), n: x.minutes })) + '</p>' +
            (r != null ? '<p class="t-small qcard__best">' + esc(t('app_lb_done', { score: new Intl.NumberFormat(A.locale, { style: 'percent' }).format(r / 100) })) + '</p>' : '') +
            '</div></div></a>';
        }).join('');
    };
    return html + '<div class="grid rise">' + section('listen', 'app_lb_listen_h', 'app_lb_listen_p') + section('read', 'app_lb_read_h', 'app_lb_read_p') +
      (signedIn() ? '' : '<p class="t-tiny span-12" style="margin-top:4px">' + esc(t('app_lb_local')) + '</p>') + '</div>';
  }
  function emptyView() {
    var lang = A.languageName(A.data().profile.language);
    return '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_library')) + '</h1><p class="t-lead">' + esc(t('app_lb_lead')) + '</p></div></div>' +
      '<div class="grid rise"><section class="stage span-4" style="--i:0;background:var(--t-mint)" aria-hidden="true"><div class="bub think">' + esc(t('app_lb_none_bub')) + '</div>' + A.Cast.drawing('teacup') + '</section>' +
      '<section class="card span-8" style="--i:1"><h2 class="t-h2">' + esc(t('app_lb_none_h', { language: lang })) + '</h2><p class="t-body" style="margin-top:8px">' + esc(t('app_lb_none_p')) + '</p></section></div>';
  }

  /* ---------- A piece ---------- */
  function start(S, x) {
    var code = window.AlimunData.langCode(S.language) || 'en';
    R = { S: S, x: x, xa: attrs(S.explainLang || 'en', S.explainLang === 'ar'), ta: attrs(code, false), script: false, saved: false, open: null };
    R.ex = EX().create({ A: A, blocks: x.blocks, test: false, xa: R.xa, ta: R.ta, root: function () { return root; }, onAnswer: onAnswer });
  }
  function onAnswer() {
    if (!R || R.saved || !R.ex.allDone()) return;
    R.saved = true;
    var f = R.ex.firstTally(), score = f.total ? Math.round(f.right / f.total * 100) : 100;
    saveResult('lib:' + R.S.id + ':' + R.x.id, score);
    R.script = true;
    var sc = root.querySelector('[data-script]');
    if (sc) sc.outerHTML = scriptHtml();
    var end = root.querySelector('[data-end]');
    if (end) { end.innerHTML = endHtml(f, score); end.querySelector('.lb-end').focus({ preventScroll: true }); end.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' }); }
  }
  function pieceView() {
    var S = R.S, x = R.x;
    document.body.classList.remove('is-reading');
    var html = '<div class="lb">' +
      '<a class="rd-back" href="#/library/' + esc(S.id) + '">' + A.icon('back') + '<span>' + esc(t('app_lb_back', { shelf: A.languageName(S.language) + ' ' + S.level })) + '</span></a>' +
      '<div class="view__head"><div><p class="t-small lb-genre">' + esc(t('app_lb_meta', { genre: genre(x.genre), n: x.minutes })) + '</p>' +
      '<h1 class="t-h1"' + R.ta + '>' + esc(x.title) + '</h1><p class="t-lead"' + R.xa + '>' + md(x.about) + '</p></div></div>' +
      '<div class="lb-body">';
    html += '<div class="lb-mat">' + (x.kind === 'listen' ? playerHtml() + scriptHtml() : readHtml()) + wordsHtml() + '</div>';
    html += '<div class="lb-qs"><h2 class="t-h2">' + esc(t('app_lb_ex_h')) + '</h2>' + x.blocks.map(function (b, i) { return '<div class="rd-block" style="--i:' + (i + 1) + '">' + R.ex.html(i) + '</div>'; }).join('') +
      '<div data-end></div></div></div></div>';
    return html;
  }
  function endHtml(f, score) {
    var S = R.S, i = S.pieces.indexOf(R.x), next = S.pieces[i + 1];
    return '<section class="card card--forest lb-end" tabindex="-1" aria-live="polite"><div class="card__row"><div class="card__art test-result__art">' + A.Cast.book(score >= 80 ? 'wow' : 'happy') + '</div><div>' +
      '<h2 class="t-h2">' + esc(t('app_lb_end_h')) + '</h2><p class="t-body" style="margin-top:8px">' + esc(t('app_lb_end_p', { right: f.right, total: f.total })) + '</p>' +
      '<div class="btn-row" style="margin-top:20px">' + (next ? '<a class="btn btn--lime" href="#/library/' + esc(S.id) + '/' + esc(next.id) + '"><span' + R.ta + '>' + esc(t('app_lb_next', { title: next.title })) + '</span>' + A.icon('arrow') + '</a>' : '') +
      '<a class="btn btn--on-forest" href="#/library/' + esc(S.id) + '">' + esc(t('app_lb_back_shelf')) + '</a></div></div></div></section>';
  }

  /* Listening: the recording, line after line */
  function lines() { var out = []; R.x.recs.forEach(function (r, ri) { r.lines.forEach(function (l, li) { out.push({ ri: ri, li: li, who: l.who, s: l.s, key: R.x.id + ':r' + ri + ':l:' + li }); }); }); return out; }
  function playerHtml() {
    var list = lines(), ready = list.every(function (l) { return fileFor(R.S.id, l.key); });
    if (!ready) return '<section class="lb-player"><p class="t-body">' + esc(t('app_lb_no_audio')) + '</p></section>';
    return '<section class="lb-player"><div class="hear-row"><button class="btn btn--primary hear" type="button" data-lb="play">' + A.icon('play') + '<span>' + esc(t('app_lb_play')) + '</span></button>' +
      '<button class="btn btn--ghost btn--sm hear" type="button" data-lb="slow">' + esc(t('app_ex_slower')) + '</button></div>' +
      '<div class="meter lb-player__meter" aria-hidden="true"><i data-lbmeter style="width:0%"></i></div></section>';
  }
  function scriptHtml() {
    var list = lines(), ready = list.every(function (l) { return fileFor(R.S.id, l.key); }), show = R.script || !ready;
    return '<section class="lb-script" data-script>' + (show ? '' : '<button class="linkish" type="button" data-lb="script">' + esc(t('app_lb_show_script')) + '</button>') +
      (show ? '<h3 class="t-h3">' + esc(t('app_lb_script')) + '</h3><div class="lb-lines"' + R.ta + '>' + list.map(function (l, k) {
        return (l.li === 0 && R.x.recs.length > 1 && k ? '<hr>' : '') + '<p class="lb-line" data-line="' + k + '"><b>' + esc(l.who) + '</b> ' + md(l.s) + '</p>';
      }).join('') + '</div>' : '') + '</section>';
  }
  /* Reading: the text with its words marked; "Listen while you read" when the paragraphs are recorded */
  function paragraphs() { return String(R.x.text.md).split(/\n\s*\n/); }
  function readHtml() {
    var ps = paragraphs(), keys = ps.map(function (p, i) { return R.x.id + ':read:p:' + i; });
    var ready = keys.every(function (k) { return fileFor(R.S.id, k); });
    var marked = {};
    var html = ps.map(function (p, i) { return '<p class="lb-para" data-line="' + i + '">' + markWords(md(p).replace(/\n/g, '<br>'), marked) + '</p>'; }).join('');
    return (ready ? '<section class="lb-player lb-player--read"><div class="hear-row"><button class="btn btn--primary btn--sm hear" type="button" data-lb="play">' + A.icon('play') + '<span>' + esc(t('app_lb_read_aloud')) + '</span></button>' +
      '<button class="btn btn--ghost btn--sm hear" type="button" data-lb="slow">' + esc(t('app_ex_slower')) + '</button></div><div class="meter lb-player__meter" aria-hidden="true"><i data-lbmeter style="width:0%"></i></div></section>' : '') +
      '<article class="lb-text"' + R.ta + '>' + html + '</article>';
  }
  /* The first time each word of the piece appears in the text (outside tags) becomes a button with its meaning */
  function markWords(h, marked) {
    (R.x.words || []).forEach(function (w, k) {
      if (marked[k]) return;
      var word = esc(String(w.w).replace(/\*/g, ''));
      var re = new RegExp('(^|[^\\p{L}\\p{N}])(' + word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(?=[^\\p{L}\\p{N}]|$)', 'iu');
      var parts = h.split(/(<[^>]+>)/), done = false;
      h = parts.map(function (seg) {
        if (done || seg.charAt(0) === '<') return seg;
        return seg.replace(re, function (m, pre, hit) { done = true; return pre + '<button class="gl" type="button" data-gl="' + k + '" aria-expanded="false">' + hit + '</button>'; });
      }).join('');
      if (done) marked[k] = true;
    });
    return h;
  }
  function wordsHtml() {
    var ws = R.x.words || [];
    if (!ws.length) return '';
    return '<section class="card lb-words"><h3 class="t-h3">' + esc(t('app_lb_words_h')) + '</h3><dl class="lb-wl">' + ws.map(function (w) {
      return '<div><dt' + R.ta + '>' + md(w.w) + '</dt><dd' + R.xa + '>' + md(w.n) + '</dd></div>';
    }).join('') + '</dl><div class="btn-row" style="margin-top:14px"><button class="btn btn--primary btn--sm" type="button" data-lb="cards">' + esc(t('app_lb_add_cards')) + '</button></div><p class="t-small lb-words__note" data-cardsnote aria-live="polite"></p></section>';
  }
  function showWord(btn) {
    var k = +btn.getAttribute('data-gl'), w = R.x.words[k], open = btn.getAttribute('aria-expanded') === 'true';
    root.querySelectorAll('.gl[aria-expanded="true"]').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); var tip = b.nextElementSibling; if (tip && tip.classList.contains('gl-tip')) tip.remove(); });
    if (open) return;
    btn.setAttribute('aria-expanded', 'true');
    btn.insertAdjacentHTML('afterend', '<span class="gl-tip" role="note"' + R.xa + '>' + md(w.n) + '</span>');
  }
  function addCards() {
    var note = root.querySelector('[data-cardsnote]'), btn = root.querySelector('[data-lb="cards"]');
    if (!window.AlimunCards || !window.AlimunCards.addWords) return;
    btn.disabled = true;
    var rows = R.x.words.map(function (w) {
      var ex = R.x.kind === 'read' ? sentenceWith(R.x.text.md, w.w) : sentenceWith(lines().map(function (l) { return l.s; }).join(' '), w.w);
      return { word: w.w, definition: w.n, example: ex };
    });
    window.AlimunCards.addWords(A, rows).then(function (n) {
      note.textContent = n ? A.tn('app_lb_cards_added', n) : t('app_lb_cards_had');
    }, function () { note.textContent = t('app_lb_cards_error'); btn.disabled = false; });
  }
  function sentenceWith(text, word) {
    var plain = String(text).replace(/\*/g, '').replace(/\s+/g, ' ');
    var s = plain.split(/(?<=[.!?])\s+/).filter(function (x) { return x.toLowerCase().indexOf(String(word).toLowerCase()) > -1; })[0];
    return s && s.length < 220 ? s : null;
  }

  /* The player: one file after another, marking the line or paragraph being spoken */
  var player = { el: null, on: false, rate: 1 };
  function stop() {
    if (player.el) { player.el.pause(); player.el.onended = null; }
    player.on = false;
    if (!root) return;
    root.querySelectorAll('.is-speaking').forEach(function (n) { n.classList.remove('is-speaking'); });
    root.querySelectorAll('[data-lb="play"], [data-lb="slow"]').forEach(function (b) { b.classList.remove('is-playing'); });
  }
  function play(rate, btn) {
    if (player.on) { var same = player.rate === rate; stop(); if (same) return; }
    var files = R.x.kind === 'listen' ? lines().map(function (l) { return fileFor(R.S.id, l.key); }) : paragraphs().map(function (p, i) { return fileFor(R.S.id, R.x.id + ':read:p:' + i); });
    player.el = player.el || new Audio();
    player.on = true; player.rate = rate;
    btn.classList.add('is-playing');
    var at = 0, my = {};
    player.token = my;
    var meter = root.querySelector('[data-lbmeter]');
    var next = function () {
      if (player.token !== my || !player.on) return;
      root.querySelectorAll('.is-speaking').forEach(function (n) { n.classList.remove('is-speaking'); });
      if (meter) meter.style.width = Math.round(at / files.length * 100) + '%';
      if (at >= files.length) { stop(); return; }
      var line = root.querySelector('[data-line="' + at + '"]');
      if (line) line.classList.add('is-speaking');
      player.el.src = files[at++];
      player.el.playbackRate = rate;
      player.el.onended = function () { setTimeout(next, R.x.kind === 'listen' ? 300 : 450); };
      player.el.play().catch(stop);
    };
    next();
  }

  /* ---------- Errors ---------- */
  function errorView() {
    return '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_library')) + '</h1></div></div>' +
      '<div class="soon rise"><div class="stage" style="--i:0;background:var(--t-coral)"><div class="bub think">' + esc(t('app_book_error_bub')) + '</div>' + A.Cast.drawing('cat') + '</div>' +
      '<div class="card" style="--i:1"><p class="t-body">' + esc(t('app_book_error')) + '</p><div class="btn-row"><a class="btn btn--primary" href="#/library">' + esc(t('app_retry')) + '</a></div></div></div>';
  }

  /* ---------- Events ---------- */
  function bind() {
    if (root.__library) return;
    root.__library = true;
    root.addEventListener('click', function (e) {
      if (!R || !root.querySelector('.lb')) return;
      var g = e.target.closest('.gl');
      if (g) { showWord(g); return; }
      var l = e.target.closest('[data-lb]');
      if (l && !l.disabled) {
        var a = l.getAttribute('data-lb');
        if (a === 'play') play(1, l);
        else if (a === 'slow') play(0.75, l);
        else if (a === 'script') { R.script = true; root.querySelector('[data-script]').outerHTML = scriptHtml(); }
        else if (a === 'cards') addCards();
        return;
      }
      if (EX().swallowClick()) { e.preventDefault(); return; }
      var el = e.target.closest('[data-act]');
      if (el && !el.disabled) R.ex.act(el.getAttribute('data-act'), el);
    });
    root.addEventListener('input', function (e) { if (R && root.querySelector('.lb')) R.ex.input(e.target); });
    root.addEventListener('change', function (e) { if (R && root.querySelector('.lb')) R.ex.change(e.target); });
    root.addEventListener('keydown', function (e) { if (R && root.querySelector('.lb')) R.ex.keydown(e); });
    root.addEventListener('pointerdown', function (e) { if (R && root.querySelector('.lb')) EX().pointerDown(R.ex, e); });
    window.addEventListener('resize', function () { if (R && root.querySelector('.lb')) R.ex.drawLines(); });
  }

  /* ---------- Entry ---------- */
  var mountNo = 0;
  function mount(view, parts, helpers) {
    var my = ++mountNo;
    A = helpers; root = view; stop(); R = null;
    if (EX()) EX().stopAudio();
    bind();
    view.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + esc(t('app_book_loading')) + '">' + A.loaderInner() + '</div></div>';
    return Promise.all([loadIndex(), loadResults()]).then(function (r) {
      if (my !== mountNo) return { stale: true };
      var info = pickShelf(r[0], parts);
      if (!info) return { html: emptyView(), title: t('app_nav_library') };
      return Promise.all([loadShelf(info.id), loadAudio(info.id)]).then(function (r2) {
        var S = r2[0], x = parts[1] && S.pieces.filter(function (p) { return p.id === parts[1]; })[0];
        if (!x) return { html: shelfView(r[0], S), title: t('app_nav_library') };
        start(S, x);
        return { html: pieceView(), title: x.title, piece: true };
      });
    }).catch(function (e) {
      console.warn('[Alimun] Library did not load', e && e.message);
      return { html: errorView(), title: t('app_nav_library') };
    }).then(function (res) {
      if (res.stale || my !== mountNo) return { stale: true };
      view.innerHTML = res.html;
      if (res.piece) R.ex.drawLines();
      return res;
    });
  }
  function reset() { stop(); }

  window.AlimunLibrary = { mount: mount, reset: reset, debug: function () { return R; } };
})();
