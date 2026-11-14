/* Alimun app: what only the store app does (docs/APP_PLAN.md, "The complete app", step 1). Loaded by js/app/device.js
   in the Android app, never in a browser.
   - The phone's back button and back gesture: closes what is open on top (the More sheet, notifications, a table, the
     payment window, the welcome questions), else goes one screen back, else to Home, and from Home puts the app away.
     Leaving a live class or a tutor call asks for a second press (text app_back_again).
   - Pulling down at the top of Home, Classes, Homework, Messages, Progress and Flashcards fetches fresh data, with the
     Alimun loader as the sign.
   - The screen stays on in a lesson, a mock test paper, a live class and a tutor call.
   - Coming back to the app after five minutes away refreshes Home's data quietly.
   - A light tap of the phone on the bottom bar. */
(function () {
  'use strict';
  var C = window.Capacitor, Dev = window.AlimunDevice;
  if (!C || !Dev || !Dev.native) return;
  var App = C.registerPlugin('App');
  var Feel = window.AlimunFeel;
  function shell() { return window.AlimunShell; }
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- A short note above the bar ---------- */
  var note = null, noteTimer = null;
  function say(text) {
    if (!note) { note = document.createElement('div'); note.className = 'net-note'; note.setAttribute('role', 'status'); document.body.appendChild(note); }
    note.textContent = text;
    void note.offsetWidth;
    note.classList.add('is-on');
    clearTimeout(noteTimer);
    noteTimer = setTimeout(function () { note.classList.remove('is-on'); }, 2200);
  }

  /* ---------- Back ---------- */
  var TOP = '.nt-panel, .tv, .pay, .wp';
  /* What is open on top closes on Escape; the key is sent to it and travels up to the page */
  function escape(el) { (el || document).dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true })); }
  function onTop() {
    var S = shell();
    if (S && S.sheetOpen()) return true;
    return !!document.querySelector(TOP);
  }
  function live() { return /^#\/classes\/live\//.test(location.hash) || !!document.querySelector('.tl-wrap.is-live'); }
  var askedAt = 0;
  function goBack() {
    if (onTop()) {
      var S = shell();
      if (S && S.sheetOpen()) S.closeSheet(); else escape(document.querySelector(TOP));
      return;
    }
    if (live() && Date.now() - askedAt > 2500) {
      askedAt = Date.now();
      if (shell()) say(shell().t('app_back_again'));
      return;
    }
    askedAt = 0;
    /* Signing in and the first set-up (js/app/account.js) have their own steps */
    if (document.body.classList.contains('is-account')) { if (!window.AlimunAccount || !window.AlimunAccount.back()) { try { App.minimizeApp(); } catch (e) { /* older app */ } } return; }
    var prev = Feel && Feel.back ? Feel.back() : null;
    if (prev) { location.replace(prev); return; }
    if (!/^#\/home\/?$/.test(location.hash) && location.hash && location.hash !== '#' && location.hash !== '#/') { location.replace('#/home'); return; }
    try { App.minimizeApp(); } catch (e) { /* older app */ }
  }
  try { App.addListener('backButton', goBack); } catch (e) { /* older app */ }

  /* ---------- Coming back to the app ---------- */
  var leftAt = 0;
  try {
    App.addListener('appStateChange', function (st) {
      if (!st.isActive) { leftAt = Date.now(); return; }
      if (leftAt && Date.now() - leftAt > 5 * 60000 && shell() && shell().current() === 'home' && !onTop()) shell().refresh();
      leftAt = 0;
    });
  } catch (e) { /* older app */ }

  /* ---------- Keep the screen on ---------- */
  function wake() {
    var on = document.body.classList.contains('is-reading') || live() || /^#\/tests\/[^/]+\/[^/]+/.test(location.hash);
    Dev.awake(on);
  }
  window.addEventListener('hashchange', function () { setTimeout(wake, 300); });
  new MutationObserver(wake).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  document.addEventListener('visibilitychange', function () { if (document.hidden) Dev.awake(false); else wake(); });
  wake();

  /* ---------- A light tap on the bottom bar ---------- */
  document.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('.bar a, .bar button')) Dev.tick(); }, true);

  /* ---------- Pull down to refresh ---------- */
  var PULL = { home: 1, classes: 1, homework: 1, messages: 1, progress: 1, cards: 1 };
  var NEED = 70, MAX = 110;
  var ptr = null, pull = null, busy = false;
  function sign() {
    if (ptr) return ptr;
    ptr = document.createElement('div');
    ptr.className = 'ptr'; ptr.setAttribute('aria-hidden', 'true');
    ptr.innerHTML = '<div class="loader" style="--w:34px">' + (shell() ? shell().loaderInner() : '') + '</div>';
    document.body.appendChild(ptr);
    return ptr;
  }
  function place(y, moving) {
    var el = sign();
    el.classList.toggle('is-moving', !!moving);
    el.style.setProperty('--pull', y + 'px');
    el.classList.toggle('is-on', y > 4);
    el.classList.toggle('is-ready', y >= NEED);
  }
  function canPull(e) {
    var S = shell();
    if (busy || !S || !S.isReal() || !PULL[S.current()] || window.scrollY > 0 || e.touches.length !== 1 || onTop() || live()) return false;
    if (document.documentElement.classList.contains('is-kb') || document.body.classList.contains('is-reading')) return false;
    /* Not from inside something that scrolls by itself */
    for (var n = e.target; n && n !== document.body; n = n.parentNode) {
      if (n.scrollTop > 0) return false;
    }
    return true;
  }
  document.addEventListener('touchstart', function (e) {
    pull = canPull(e) ? { y: e.touches[0].clientY, x: e.touches[0].clientX, d: 0, on: false } : null;
  }, { passive: true });
  document.addEventListener('touchmove', function (e) {
    if (!pull) return;
    var dy = e.touches[0].clientY - pull.y, dx = e.touches[0].clientX - pull.x;
    if (!pull.on) {
      if (dy < -6 || Math.abs(dx) > Math.abs(dy) + 6 || window.scrollY > 0) { pull = null; return; }
      if (dy < 12) return;
      pull.on = true;
    }
    var d = Math.max(0, Math.min(MAX, (dy - 12) * 0.55));
    if ((d >= NEED) !== (pull.d >= NEED)) Dev.tick();
    pull.d = d;
    place(d, true);
  }, { passive: true });
  function end() {
    if (!pull) return;
    var go = pull.on && pull.d >= NEED;
    pull = null;
    if (!go) { place(0); return; }
    busy = true;
    place(NEED - 14);
    sign().classList.add('is-busy');
    var started = Date.now();
    shell().refresh().then(function () {
      setTimeout(function () { sign().classList.remove('is-busy'); place(0); busy = false; }, Math.max(0, (reduced ? 0 : 500) - (Date.now() - started)));
    });
  }
  document.addEventListener('touchend', end, { passive: true });
  document.addEventListener('touchcancel', end, { passive: true });
})();
