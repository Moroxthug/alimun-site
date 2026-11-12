/* Alimun app: offline use and installing the app (docs/APP_PLAN.md, step 1).
   - Registers the app's service worker (/app-sw.js, scope /app) on the learners' app only.
   - Downloads a course book or a library shelf with its recordings into the device (Cache Storage "alimun-offline"),
     in the learner's explanation language and the language being learned (the reader's switch), and removes them.
     The list of downloads is kept in localStorage "alimun-downloads".
   - Shows a note while the device is offline, and when the answers given offline have been sent.
   - "Install the app": the browser's own prompt where there is one (Android, desktop Chrome and Edge), the Share
     instructions on iPhone and iPad.
   Text comes from js/translations.js (app_off_*), through the shell's helpers. */
(function () {
  'use strict';
  var CACHE = 'alimun-offline';
  var LIST = 'alimun-downloads';
  var AUDIO = 'https://dgaiasmefcbrtzqwdyri.supabase.co/storage/v1/object/public/course-audio/';
  var BOOK_LANGS = ['en', 'es', 'fr', 'de', 'pt', 'zh', 'ar', 'it'];
  var CODES = { English: 'en', German: 'de', French: 'fr', Spanish: 'es', Italian: 'it', Portuguese: 'pt' };
  var A = null;          /* the shell's helpers (t, esc, lang, locale, ...) once a screen has used this */
  var running = {};      /* id -> { done, total } while downloading */
  var installEvt = null;

  var supported = typeof window !== 'undefined' && 'caches' in window && 'serviceWorker' in navigator;

  /* ---------- Service worker ---------- */
  function register() {
    if (!supported) return;
    if (!/^\/app\/?$/.test(location.pathname) || /[?&](as|sample)=/.test(location.search)) return;
    if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') return;
    navigator.serviceWorker.register('/app-sw.js', { scope: '/app' }).catch(function (e) { console.warn('[Alimun] Offline support not started', e && e.message); });
  }

  /* ---------- Downloads ---------- */
  function readList() { try { return JSON.parse(localStorage.getItem(LIST) || '{}') || {}; } catch (e) { return {}; } }
  function writeList(l) { try { localStorage.setItem(LIST, JSON.stringify(l)); } catch (e) { /* storage blocked */ } }
  function mineCode(lang) { var l = lang === 'ma' ? 'fr' : lang; return BOOK_LANGS.indexOf(l) > -1 ? l : 'en'; }
  function getJSON(url) { return fetch(url).then(function (r) { if (!r.ok) throw new Error(url + ' ' + r.status); return r.json(); }); }

  /* The files of a book ('book'), a library shelf ('lib') or a mock test ('test'), recordings included. The free
     limit (docs/APP_PLAN.md) applies: a learner with a plan gets the complete files (js/app/data.js, material, kept in
     "alimun-material"), a free account the public ones, and only the recordings of the parts it may open. */
  var BASES = { book: 'books', lib: 'library', test: 'tests' };
  function plan(kind, id, language, lang) {
    var langs = [mineCode(lang)], target = CODES[language];
    if (target && langs.indexOf(target) === -1) langs.push(target);
    var base = BASES[kind] || 'books';
    var rels = kind === 'test' ? [base + '/' + id + '.json'] : langs.map(function (l) { return base + '/' + id + '.' + l + '.json'; });
    var urls = ['/data/' + base + '/index.json'].concat(rels.map(function (r) { return '/data/' + r; }));
    var audioRel = 'audio/' + id + '.json', made = AUDIO + encodeURIComponent(id) + '/manifest.json';
    var D = window.AlimunData;
    return Promise.all([D.material(audioRel, { fresh: true }).catch(function () { return null; }), getJSON(made).catch(function () { return null; })]).then(function (r) {
      var items = (r[0] && r[0].items) || {}, done = (r[1] && r[1].done) || {}, files = {};
      Object.keys(items).forEach(function (k) { var h = items[k] && items[k][0]; if (h && done[h]) files[h] = true; });
      var mp3 = Object.keys(files).map(function (h) { return AUDIO + encodeURIComponent(id) + '/' + h + '.mp3'; });
      return { data: urls.concat(r[0] ? ['/data/' + audioRel] : [], r[1] ? [made] : []), audio: mp3, rels: rels.concat(r[0] ? [audioRel] : []) };
    });
  }

  function download(kind, id, language, onStep) {
    if (!supported) return Promise.reject(new Error('unsupported'));
    if (running[id]) return Promise.reject(new Error('busy'));
    var state = running[id] = { done: 0, total: 1 };
    if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(function () {});
    var lang = A ? A.lang : 'en';
    return Promise.all([plan(kind, id, language, lang), caches.open(CACHE)]).then(function (r) {
      var p = r[0], cache = r[1], all = p.data.concat(p.audio), bytes = 0, at = 0;
      state.total = all.length;
      var step = function () { state.done++; if (onStep) onStep(state.done, state.total); };
      /* Four at a time, files already on the device are kept, a busy server is asked again after a pause; one file
         that never arrives stops the download; what came stays, so trying again carries on from there */
      var stopped = false;
      var wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
      var get = function (url, tries) {
        return fetch(url, { cache: 'no-cache' }).then(function (res) {
          if ((res.status === 429 || res.status >= 500) && tries < 5) return wait(800 * Math.pow(2, tries) + Math.random() * 400).then(function () { return get(url, tries + 1); });
          if (!res.ok) throw new Error(url + ' ' + res.status);
          return res;
        }, function (e) { if (tries < 2 && navigator.onLine !== false) return wait(1500).then(function () { return get(url, tries + 1); }); throw e; });
      };
      var worker = function () {
        if (stopped || at >= all.length) return Promise.resolve();
        var url = all[at++];
        var isData = url.indexOf('/data/') === 0 || /manifest\.json$/.test(url);
        return (isData ? Promise.resolve(null) : cache.match(url)).then(function (had) {
          if (had) return had.blob().then(function (b) { bytes += b.size; });
          return get(url, 0).then(function (res) {
            return res.blob().then(function (b) {
              bytes += b.size;
              if (stopped) return;
              return cache.put(url, new Response(b, { headers: { 'Content-Type': res.headers.get('Content-Type') || (/\.mp3$/.test(url) ? 'audio/mpeg' : 'application/json') } }));
            });
          });
        }).then(function () { step(); return worker(); }, function (e) { stopped = true; throw e; });
      };
      var workers = [];
      for (var i = 0; i < 4; i++) workers.push(worker());
      return Promise.all(workers).then(function () {
        /* The complete files for a learner with a plan (nothing more for a free account) */
        return Promise.all(p.rels.map(function (rel) { return window.AlimunData.material(rel, { fresh: true }).catch(function () { return null; }); }));
      }).then(function () {
        var l = readList();
        l[id] = { kind: kind, language: language, at: Date.now(), bytes: bytes, files: all, rels: p.rels, lang: lang, full: window.AlimunData.hasFullAccess() === true };
        writeList(l);
        return l[id];
      });
    }).then(function (rec) { delete running[id]; return rec; }, function (e) { delete running[id]; throw e; });
  }

  function remove(id) {
    var l = readList(), rec = l[id];
    if (!rec || !supported) return Promise.resolve();
    delete l[id];
    writeList(l);
    /* Files another download also uses stay (the index files are shared) */
    var keep = {};
    Object.keys(l).forEach(function (k) { (l[k].files || []).forEach(function (u) { keep[u] = true; }); });
    var mats = (rec.rels || []).map(function (r) { return location.origin + '/material/' + r; });
    return Promise.all([caches.open(CACHE).then(function (cache) {
      return Promise.all((rec.files || []).filter(function (u) { return !keep[u]; }).map(function (u) { return cache.delete(u); }));
    }), caches.open('alimun-material').then(function (c) { return Promise.all(mats.map(function (u) { return c.delete(u); })); }).catch(function () {})]);
  }

  function size(bytes) {
    var mb = bytes / 1048576, loc = A ? A.locale : undefined;
    try { return new Intl.NumberFormat(loc, { style: 'unit', unit: mb >= 1 ? 'megabyte' : 'kilobyte', maximumFractionDigits: mb >= 10 ? 0 : 1 }).format(mb >= 1 ? mb : bytes / 1024); }
    catch (e) { return (mb >= 1 ? mb.toFixed(1) + ' MB' : Math.round(bytes / 1024) + ' kB'); }
  }

  /* ---------- Installing ---------- */
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); installEvt = e; refresh(); });
  window.addEventListener('appinstalled', function () { installEvt = null; refresh(); });
  function standalone() { return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true; }
  function ios() { return /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1); }

  /* ---------- Offline note ---------- */
  var note = null, noteTimer = null;
  function showNote(text, stay) {
    if (!A) return;
    if (!note) {
      note = document.createElement('div');
      note.className = 'net-note';
      note.setAttribute('role', 'status');
      note.setAttribute('aria-live', 'polite');
      /* A tap puts it away */
      note.addEventListener('click', hideNote);
      document.body.appendChild(note);
    }
    clearTimeout(noteTimer);
    note.textContent = text;
    note.classList.add('is-on');
    if (!stay) noteTimer = setTimeout(function () { note.classList.remove('is-on'); }, 4200);
  }
  function hideNote() { if (note) note.classList.remove('is-on'); }
  function netState() {
    if (!A) return;
    document.documentElement.classList.toggle('is-offline', navigator.onLine === false);
    if (navigator.onLine === false) showNote(A.t('app_off_banner'), true);
    else hideNote();
  }
  window.addEventListener('offline', netState);
  /* js/app/data.js sends the waiting answers when the connection is back; say so once they have gone */
  window.addEventListener('online', netState);
  var hadWaiting = false;
  function watchOutbox() {
    var D = window.AlimunData;
    if (!D || !D.onOutbox) return;
    hadWaiting = D.offlineWaiting() > 0;
    D.onOutbox(function (n) {
      if (n > 0) { hadWaiting = true; return; }
      if (hadWaiting && navigator.onLine !== false && A) showNote(A.t('app_off_back'));
      hadWaiting = false;
    });
  }

  /* ---------- Screens ---------- */
  /* The learner's own course: the core book, the goal book and the library shelf of their language and level */
  function myItems(d) {
    var p = d && d.profile || {}, lang = p.language || 'English', level = p.level || 'A1';
    return Promise.all([getJSON('/data/books/index.json').catch(function () { return { books: [] }; }), getJSON('/data/library/index.json').catch(function () { return { shelves: [] }; }),
      getJSON('/data/tests/index.json').catch(function () { return { tests: [] }; })]).then(function (r) {
      var out = [], course = (A.languageName(lang) + ' ' + level).trim();
      (r[0].books || []).forEach(function (b) {
        if (b.language !== lang || b.level !== level || !(b.written > 0)) return;
        if (b.track === 'core') out.unshift({ kind: 'book', id: b.id, language: lang, name: A.t('app_off_item_book', { course: course }) });
        else if (b.goal && b.goal === p.goal) out.push({ kind: 'book', id: b.id, language: lang, name: A.t('app_off_item_goal', { course: course }) });
      });
      (r[1].shelves || []).forEach(function (s) {
        if (s.language === lang && s.level === level) out.push({ kind: 'lib', id: s.id, language: lang, name: A.t('app_off_item_lib', { course: course }) });
      });
      /* Mock tests at the learner's level (docs/APP_PLAN.md, step 2) */
      (r[2].tests || []).forEach(function (x) {
        if (x.language !== lang || x.level !== level) return;
        var name = window.AlimunProgress && window.AlimunProgress.testName ? window.AlimunProgress.testName(x.id) : x.id;
        out.push({ kind: 'test', id: x.id, language: lang, name: A.t('app_off_item_test', { test: name }) });
      });
      return out;
    });
  }

  var items = [];
  function rowHtml(it) {
    var t = A.t, esc = A.esc, rec = readList()[it.id], run = running[it.id];
    var state = run ? t('app_off_getting', { pct: Math.round(100 * run.done / Math.max(1, run.total)) })
      : rec ? t('app_off_saved', { size: size(rec.bytes || 0) }) : '';
    var btn = run ? '' : rec
      ? '<button class="btn btn--quiet btn--sm" type="button" data-off="remove" data-id="' + esc(it.id) + '">' + esc(t('app_off_remove')) + '</button>'
      : '<button class="btn btn--ghost btn--sm" type="button" data-off="get" data-id="' + esc(it.id) + '">' + esc(t('app_off_get')) + '</button>';
    return '<div class="off-row" data-off-row="' + esc(it.id) + '"><div class="off-row__text"><b>' + esc(it.name) + '</b>' +
      (state ? '<span class="t-small">' + esc(state) + '</span>' : '') +
      (run ? '<span class="off-meter" aria-hidden="true"><i style="width:' + Math.round(100 * run.done / Math.max(1, run.total)) + '%"></i></span>' : '') +
      '</div>' + btn + '</div>';
  }
  function installHtml() {
    var t = A.t, esc = A.esc;
    if (standalone()) return '<p class="t-body off-install">' + esc(t('app_off_installed')) + '</p>';
    if (installEvt) return '<div class="off-install"><p class="t-body">' + esc(t('app_off_install_p')) + '</p><div class="btn-row"><button class="btn btn--lime btn--sm" type="button" data-off="install">' + esc(t('app_off_install')) + '</button></div></div>';
    if (ios()) return '<div class="off-install"><p class="t-body">' + esc(t('app_off_install_p')) + '</p><p class="t-small" style="margin-top:6px">' + esc(t('app_off_ios')) + '</p></div>';
    return '';
  }
  /* The Settings card; filled in once the list of books is known */
  function card(helpers, i) {
    A = helpers;
    if (!supported) return '';
    return '<section class="card span-12 st-card off-card" style="--i:' + (i || 0) + '" aria-labelledby="h-off" data-off-card>' +
      '<h2 class="t-h2" id="h-off">' + A.esc(A.t('app_off_h')) + '</h2><p class="t-body">' + A.esc(A.t('app_off_p')) + '</p>' +
      '<div class="off-list" data-off-list></div><div class="btn-row off-all" data-off-all></div><p class="t-small off-msg" data-off-msg aria-live="polite"></p><div data-off-install>' + installHtml() + '</div></section>';
  }
  function fill(helpers, d) {
    A = helpers;
    var box = document.querySelector('[data-off-list]');
    if (!box) return;
    myItems(d).then(function (list) {
      items = list;
      refresh();
    }, function () { box.innerHTML = ''; });
  }
  function refresh() {
    if (!A) return;
    var box = document.querySelector('[data-off-list]');
    if (box) box.innerHTML = items.map(rowHtml).join('');
    var ins = document.querySelector('[data-off-install]');
    if (ins) ins.innerHTML = installHtml();
    var all = document.querySelector('[data-off-all]');
    if (all) all.innerHTML = allHtml();
    document.querySelectorAll('[data-off-book]').forEach(function (b) { b.outerHTML = itemButton(A, b.getAttribute('data-kind') || 'book', b.getAttribute('data-off-book'), b.getAttribute('data-lang')); });
  }
  /* "Download all": everything in the learner's course that is not on the device yet */
  function allHtml() {
    var left = items.filter(function (it) { return !readList()[it.id]; });
    if (items.length < 2) return '';
    if (!left.length) return '<p class="t-small">' + A.esc(A.t('app_off_all_done')) + '</p>';
    var busy = items.some(function (it) { return running[it.id]; });
    return '<button class="btn btn--lime btn--sm" type="button" data-off="all"' + (busy ? ' disabled' : '') + '>' + A.icon('down') + '<span>' + A.esc(A.t('app_off_all')) + '</span></button>';
  }
  function getAll() {
    var left = items.filter(function (it) { return !readList()[it.id] && !running[it.id]; });
    say('');
    var step = function (i) {
      if (i >= left.length) { refresh(); return; }
      var it = left[i], last = 0;
      refresh();
      download(it.kind, it.id, it.language, function () { if (Date.now() - last > 250) { last = Date.now(); refresh(); } }).then(function () { step(i + 1); }, function (e) {
        refresh();
        if (e && e.message !== 'busy') { say('app_off_failed'); console.warn('[Alimun] Download stopped', e && e.message); }
      });
    };
    step(0);
  }
  function say(key) { var m = document.querySelector('[data-off-msg]'); if (m) m.textContent = key ? A.t(key) : ''; }

  /* The download button on a course book's cover, a library shelf or a mock test ('book', 'lib', 'test') */
  function bookButton(helpers, id, language) { return itemButton(helpers, 'book', id, language); }
  function itemButton(helpers, kind, id, language) {
    A = helpers;
    if (!supported) return '';
    var t = A.t, esc = A.esc, rec = readList()[id], run = running[id];
    var label = run ? t('app_off_getting', { pct: Math.round(100 * run.done / Math.max(1, run.total)) }) : rec ? t('app_off_cover_saved') : t('app_off_cover_get');
    return '<button class="btn btn--ghost btn--sm off-cover' + (rec ? ' is-saved' : '') + '" type="button" data-off-book="' + esc(id) + '" data-kind="' + esc(kind) + '" data-lang="' + esc(language || '') + '"' +
      (run || rec ? ' aria-disabled="true"' : '') + '>' + A.icon(rec ? 'check' : 'down') + '<span>' + esc(label) + '</span></button>';
  }

  function start(id, kind, language) {
    say('');
    var last = 0;
    download(kind, id, language, function () { if (Date.now() - last > 250) { last = Date.now(); refresh(); } }).then(function () { refresh(); }, function (e) {
      refresh();
      if (e && e.message !== 'busy') { say('app_off_failed'); console.warn('[Alimun] Download stopped', e && e.message); }
    });
    refresh();
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-off],[data-off-book]');
    if (!b || !A) return;
    if (b.hasAttribute('data-off-book')) {
      if (b.getAttribute('aria-disabled') === 'true') return;
      return start(b.getAttribute('data-off-book'), b.getAttribute('data-kind') || 'book', b.getAttribute('data-lang'));
    }
    var act = b.getAttribute('data-off'), id = b.getAttribute('data-id');
    var it = items.filter(function (x) { return x.id === id; })[0];
    if (act === 'get' && it) start(it.id, it.kind, it.language);
    else if (act === 'all') getAll();
    else if (act === 'remove') remove(id).then(refresh);
    else if (act === 'install' && installEvt) {
      installEvt.prompt();
      installEvt.userChoice.then(function () { installEvt = null; refresh(); }, function () {});
    }
  });

  /* A learner who has just taken a plan gets the rest of what they downloaded; one whose plan has ended keeps only
     the free parts (js/app/data.js removed the complete files). Quietly, a few seconds after the app opens. */
  function resync() {
    var D = window.AlimunData;
    if (!supported || !D || !D.hasFullAccess || navigator.onLine === false) return;
    var full = D.hasFullAccess(), l = readList();
    Object.keys(l).forEach(function (id) {
      var rec = l[id];
      if (full === true && !rec.full) download(rec.kind, id, rec.language).catch(function () {});
      else if (full === false && rec.full) { rec.full = false; writeList(l); download(rec.kind, id, rec.language).catch(function () {}); }
    });
  }

  /* The shell calls this once its text has loaded */
  var attached = false;
  function attach(helpers) {
    A = helpers;
    netState();
    if (!attached) { attached = true; watchOutbox(); setTimeout(resync, 4000); }
  }

  register();
  window.AlimunOffline = { attach: attach, resync: resync, card: card, fill: fill, bookButton: bookButton, itemButton: itemButton, download: download, remove: remove, list: readList, supported: supported };
})();
