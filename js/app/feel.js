/* Alimun app: how it feels (docs/APP_PLAN.md, step 2).
   - answer(ok): a light tap of the phone's vibration on a right answer, a short double one on a wrong answer, where
     the device has it (Android; iPhone browsers have no vibration). Not in mock tests, which give no feedback.
   - transition(fn, kind): changes the screen with the browser's View Transitions where supported and motion is not
     reduced; otherwise just runs fn. kind ('forward', 'back' or 'tab', from direction()) picks the movement on phones:
     a deeper screen slides in from the side, going back slides the other way, a change of section rises and fades
     (css/app.css, "The app's motion").
   - direction(hash): which of the three a change of address is, from the trail of screens opened since the last
     change of section. back() returns the screen before this one, or null at the start of the trail.
   - The keyboard: while it is open the bottom bar is put away (html.is-kb) and the field being typed in is brought
     into view.
   - ahead(urls): fetches recordings the learner is about to play (the page on screen and the next one) into the
     device ("alimun-ahead"), which the service worker answers from; kept to the last 120 files. Not on a limited
     connection or without the service worker. */
(function () {
  'use strict';
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var AHEAD = 'alimun-ahead', KEEP = 120;

  function answer(ok) {
    if (ok == null) return;
    /* The store app: the phone's own haptics (js/app/device.js) */
    if (window.AlimunDevice && window.AlimunDevice.haptic(ok)) return;
    if (!navigator.vibrate) return;
    try { navigator.vibrate(ok ? 12 : [24, 60, 24]); } catch (e) { /* not allowed before a tap */ }
  }

  function canTransition() { return !reduced && typeof document.startViewTransition === 'function'; }
  var root = document.documentElement;
  function transition(fn, kind) {
    if (!canTransition()) { fn(); return; }
    try {
      root.setAttribute('data-nav', kind || 'tab');
      var vt = document.startViewTransition(fn);
      var clear = function () { root.removeAttribute('data-nav'); };
      if (vt && vt.finished) vt.finished.then(clear, clear); else setTimeout(clear, 400);
    } catch (e) { root.removeAttribute('data-nav'); fn(); }
  }

  /* The trail of screens since the last change of section */
  var trail = [], forced = null;
  function sectionOf(h) { return (String(h).match(/^#\/([a-z]+)/) || [])[1] || 'home'; }
  function depthOf(h) { return String(h).replace(/^#\/?/, '').split('/').filter(Boolean).length; }
  function direction(hash) {
    hash = hash && hash !== '#' && hash !== '#/' ? hash : '#/home';
    if (forced) { var f = forced; forced = null; return f; }
    var last = trail[trail.length - 1];
    if (last === hash) return 'none';
    if (trail.length > 1 && trail[trail.length - 2] === hash) { trail.pop(); return 'back'; }
    if (!last || (sectionOf(last) !== sectionOf(hash) && depthOf(hash) <= 1)) { trail = [hash]; return 'tab'; }
    if (sectionOf(last) === sectionOf(hash) && depthOf(hash) < depthOf(last)) {
      var at = trail.lastIndexOf(hash);
      if (at > -1) trail.length = at + 1; else trail[trail.length - 1] = hash;
      return 'back';
    }
    trail.push(hash);
    return 'forward';
  }
  /* For the phone's back button (js/app/native.js): the screen before this one, taken off the trail */
  function back() {
    if (trail.length < 2) return null;
    trail.pop(); forced = 'back';
    return trail[trail.length - 1];
  }

  /* The keyboard */
  var vv = window.visualViewport, tall = 0, wide = 0;
  function keyboard() {
    if (Math.abs(window.innerWidth - wide) > 40) { wide = window.innerWidth; tall = 0; }
    if (vv.height > tall) tall = vv.height;
    var open = tall - vv.height > 140;
    if (open === root.classList.contains('is-kb')) return;
    root.classList.toggle('is-kb', open);
    var el = document.activeElement;
    if (open && el && (/^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName) || el.isContentEditable)) {
      setTimeout(function () { try { el.scrollIntoView({ block: 'center', behavior: reduced ? 'auto' : 'smooth' }); } catch (e) { /* old browser */ } }, 80);
    }
  }
  if (vv && vv.addEventListener) { wide = window.innerWidth; tall = vv.height; vv.addEventListener('resize', keyboard); }
  /* Buttons and cards show their pressed look under a finger (touch browsers need a listener for :active) */
  document.addEventListener('touchstart', function () {}, { passive: true });

  function limited() {
    var c = navigator.connection;
    return navigator.onLine === false || !!(c && (c.saveData || /2g/.test(c.effectiveType || '')));
  }
  var queue = [], busy = 0, seen = {};
  function pump() {
    while (busy < 2 && queue.length) {
      var url = queue.shift();
      busy++;
      caches.open(AHEAD).then(function (c) {
        var u = this;
        return Promise.all([c.match(u), caches.match(u, { cacheName: 'alimun-offline' })]).then(function (hit) {
          if (hit[0] || hit[1]) return;
          return fetch(u, { mode: 'cors', credentials: 'omit' }).then(function (res) { if (res.ok && res.status === 200) return c.put(u, res); });
        });
      }.bind(url)).catch(function () {}).then(function () { busy--; pump(); });
    }
    if (!busy && !queue.length) trim();
  }
  var trimTimer = null;
  function trim() {
    clearTimeout(trimTimer);
    trimTimer = setTimeout(function () {
      caches.open(AHEAD).then(function (c) {
        return c.keys().then(function (keys) { return Promise.all(keys.slice(0, Math.max(0, keys.length - KEEP)).map(function (k) { return c.delete(k); })); });
      }).catch(function () {});
    }, 2000);
  }
  function ahead(urls) {
    if (!urls || !urls.length || typeof caches === 'undefined' || limited()) return;
    if (!navigator.serviceWorker || !navigator.serviceWorker.controller) return;
    urls.forEach(function (u) { if (!seen[u]) { seen[u] = true; queue.push(u); } });
    var idle = window.requestIdleCallback || function (f) { return setTimeout(f, 300); };
    idle(pump, { timeout: 2000 });
  }

  window.AlimunFeel = { answer: answer, transition: transition, canTransition: canTransition, ahead: ahead, direction: direction, back: back };
})();
