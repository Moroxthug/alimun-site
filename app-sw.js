/* Alimun app service worker (docs/APP_PLAN.md, step 1). Registered by js/app/offline.js with scope /app, so it only
   controls the learners' app, never the public site.
   - The app's own files (HTML, CSS, scripts, fonts, drawings, the Supabase library): served from the device straight
     away and refreshed in the background, so the app opens instantly and works without a connection.
   - Course data (/data/...): fetched fresh when online; the saved copy is used when offline.
   - Course recordings (Supabase Storage course-audio): served from the downloads when saved, with Range support for
     audio players; otherwise straight from the network.
   - Everything else (the API, Supabase database and auth, Stripe, Daily) is never touched.
   Change VERSION to drop the cached app files after a breaking change; downloads (alimun-offline) are kept. */
'use strict';
var VERSION = 'v2';
/* The app's bundled script, written by scripts/bundle-app.js (npm run build) */
/* app-bundle */
var BUNDLE = "/js/app/dist/app.js?v=869157a35e";
/* /app-bundle */
var SHELL = 'alimun-shell-' + VERSION;
var DATA = 'alimun-data-' + VERSION;
var OFFLINE = 'alimun-offline';
var AUDIO_HOST = 'https://dgaiasmefcbrtzqwdyri.supabase.co/storage/v1/object/public/course-audio/';
var SUPA_LIB = /^https:\/\/cdn\.jsdelivr\.net\/npm\/@supabase\/supabase-js@/;

/* The files the app needs to open, kept on install. Scripts the app loads later are added as they are used. */
var CORE = [
  '/app', '/css/app.css', '/fonts/Satoshi-Variable.ttf', '/fonts/coolvetica-condensed-rg.otf',
  '/images/favicon.svg?v=2', '/images/favicon-48.png?v=2', '/images/app/icon-192.png', '/app/manifest.webmanifest',
  BUNDLE,
  '/js/i18n/en.app.js', '/js/banner.js', '/data/books/index.json', '/data/library/index.json'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(SHELL).then(function (c) {
    /* One missing file must not stop the install */
    return Promise.all(CORE.map(function (u) { return c.add(new Request(u, { cache: 'no-cache' })).catch(function () {}); }));
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return /^alimun-(shell|data)-/.test(k) && k !== SHELL && k !== DATA; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('message', function (e) {
  if (e.data === 'skip-waiting') self.skipWaiting();
});

function isShellAsset(url) {
  if (url.origin === self.location.origin) return /^\/(js|css|fonts|images)\//.test(url.pathname);
  return SUPA_LIB.test(url.href);
}

/* Answer from the device, refresh in the background. A response is only kept when it is complete and fine. */
function staleWhileRevalidate(req, cacheName, evt) {
  return caches.open(cacheName).then(function (c) {
    return c.match(req).then(function (hit) {
      var net = fetch(req).then(function (res) {
        if (res && res.ok && res.status === 200) c.put(req, res.clone());
        return res;
      });
      if (hit) { evt.waitUntil(net.catch(function () {})); return hit; }
      return net;
    });
  });
}

/* The app page: fresh from the network when it answers quickly, otherwise the saved one */
function appPage(req, evt) {
  var key = new Request(self.location.origin + '/app');
  return caches.open(SHELL).then(function (c) {
    var net = fetch(req).then(function (res) {
      if (res && res.ok && new URL(req.url).pathname.replace(/\/$/, '') === '/app') c.put(key, res.clone());
      return res;
    });
    var timer = new Promise(function (resolve) { setTimeout(resolve, 2500); });
    return Promise.race([net.catch(function () { return null; }), timer.then(function () { return null; })]).then(function (res) {
      if (res) return res;
      return c.match(key).then(function (hit) {
        if (hit) { evt.waitUntil(net.catch(function () {})); return hit; }
        return net;
      });
    });
  });
}

/* Course data: network first, saved copy when offline. Downloads (alimun-offline) count as saved copies. */
function dataFirst(req, evt) {
  return fetch(req).then(function (res) {
    if (res && res.ok && res.status === 200) {
      var copy = res.clone(), copy2 = res.clone();
      evt.waitUntil(caches.open(DATA).then(function (c) { return c.put(req, copy); }).catch(function () {}));
      /* Keep downloaded data up to date while online */
      evt.waitUntil(caches.open(OFFLINE).then(function (c) { return c.match(req).then(function (had) { if (had) return c.put(req, copy2); }); }).catch(function () {}));
    }
    return res;
  }, function () {
    return caches.match(req, { ignoreSearch: true }).then(function (hit) { return hit || Response.error(); });
  });
}

/* Recordings: from the downloads when saved (with byte ranges for audio players), otherwise the network */
function recording(req) {
  /* Downloads first, then the recordings fetched ahead of the learner (js/app/feel.js) */
  return caches.open(OFFLINE).then(function (c) {
    return c.match(req.url, { ignoreSearch: true }).then(function (hit) {
      return hit || caches.open('alimun-ahead').then(function (a) { return a.match(req.url, { ignoreSearch: true }); });
    }).then(function (hit) {
      if (!hit) return fetch(req);
      var range = req.headers.get('range');
      if (!range) return hit;
      return hit.blob().then(function (blob) {
        var m = /bytes=(\d*)-(\d*)/.exec(range) || [];
        var size = blob.size;
        var start = m[1] ? parseInt(m[1], 10) : 0;
        var end = m[2] ? Math.min(parseInt(m[2], 10), size - 1) : size - 1;
        if (!m[1] && m[2]) { start = Math.max(0, size - parseInt(m[2], 10)); end = size - 1; }
        if (start >= size || start > end) return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */' + size } });
        return new Response(blob.slice(start, end + 1), { status: 206, statusText: 'Partial Content', headers: {
          'Content-Type': hit.headers.get('Content-Type') || 'audio/mpeg',
          'Content-Range': 'bytes ' + start + '-' + end + '/' + size,
          'Content-Length': String(end - start + 1),
          'Accept-Ranges': 'bytes'
        } });
      });
    });
  });
}

/* Whether the request comes from the learners' app page (/app), not /app/teach, /app/admin or another page */
function learnerPage(e) {
  if (!e.clientId) return Promise.resolve(false);
  return self.clients.get(e.clientId).then(function (c) {
    return !!c && /^\/app\/?(index(\.html)?)?$/.test(new URL(c.url).pathname);
  }, function () { return false; });
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (req.mode === 'navigate') {
    /* Only the learners' app page; teacher and admin pages stay network-only */
    if (/^\/app\/?(index(\.html)?)?$/.test(url.pathname)) e.respondWith(appPage(req, e));
    return;
  }
  if (url.href.indexOf(AUDIO_HOST) === 0) {
    if (/\.mp3$/.test(url.pathname)) e.respondWith(recording(req));
    else if (/\/manifest\.json$/.test(url.pathname)) e.respondWith(dataFirst(req, e));
    return;
  }
  if (url.origin === self.location.origin && url.pathname.indexOf('/data/') === 0) { e.respondWith(dataFirst(req, e)); return; }
  if (url.origin === self.location.origin && url.pathname === '/app/manifest.webmanifest') { e.respondWith(staleWhileRevalidate(req, SHELL, e)); return; }
  if (isShellAsset(url)) {
    /* Teacher and admin pages (also under /app) always get the newest files */
    e.respondWith(learnerPage(e).then(function (yes) { return yes ? staleWhileRevalidate(req, SHELL, e) : fetch(req); }));
    return;
  }
});
