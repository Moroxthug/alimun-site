/* Alimun app: parts loaded only when opened (docs/APP_PLAN.md, step 2). The app's script is one bundled file
   (scripts/bundle-app.js); the tutor, the live classroom with its board, and the payment window are separate files,
   fetched the first time they are needed: AlimunLazy.need('tutor' | 'classroom' | 'pay') resolves once loaded.
   When the device is idle and the connection is not limited, they are fetched ahead so they open at once. */
(function () {
  'use strict';
  var CHUNKS = window.ALIMUN_CHUNKS || {};
  var got = {};
  function need(name) {
    if (got[name]) return got[name];
    var src = CHUNKS[name];
    if (!src) return Promise.resolve();   /* not bundled: the page loaded the files itself */
    got[name] = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.onload = function () { resolve(); };
      s.onerror = function () { delete got[name]; reject(new Error('chunk ' + name + ' did not load')); };
      document.head.appendChild(s);
    });
    return got[name];
  }
  function ahead() {
    var c = navigator.connection;
    if (navigator.onLine === false || (c && (c.saveData || /2g/.test(c.effectiveType || '')))) return;
    /* 'native' is the store app's own part (js/app/native.js), asked for by js/app/device.js */
    Object.keys(CHUNKS).filter(function (n) { return n !== 'native'; }).forEach(function (n, i) { setTimeout(function () { need(n).catch(function () {}); }, 400 * i); });
  }
  window.addEventListener('load', function () {
    var idle = window.requestIdleCallback || function (f) { return setTimeout(f, 2500); };
    setTimeout(function () { idle(ahead, { timeout: 8000 }); }, 3000);
  });
  window.AlimunLazy = { need: need };
})();
