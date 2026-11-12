/* Alimun app: how it feels (docs/APP_PLAN.md, step 2).
   - answer(ok): a light tap of the phone's vibration on a right answer, a short double one on a wrong answer, where
     the device has it (Android; iPhone browsers have no vibration). Not in mock tests, which give no feedback.
   - transition(fn): changes the screen with the browser's View Transitions (a quick cross-fade) where supported and
     motion is not reduced; otherwise just runs fn.
   - ahead(urls): fetches recordings the learner is about to play (the page on screen and the next one) into the
     device ("alimun-ahead"), which the service worker answers from; kept to the last 120 files. Not on a limited
     connection or without the service worker. */
(function () {
  'use strict';
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var AHEAD = 'alimun-ahead', KEEP = 120;

  function answer(ok) {
    if (ok == null || !navigator.vibrate) return;
    try { navigator.vibrate(ok ? 12 : [24, 60, 24]); } catch (e) { /* not allowed before a tap */ }
  }

  function canTransition() { return !reduced && typeof document.startViewTransition === 'function'; }
  function transition(fn) {
    if (!canTransition()) { fn(); return; }
    try { document.startViewTransition(fn); } catch (e) { fn(); }
  }

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

  window.AlimunFeel = { answer: answer, transition: transition, canTransition: canTransition, ahead: ahead };
})();
