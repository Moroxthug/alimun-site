/* Alimun app: the store app's own storage and phone features (docs/APP_PLAN.md, step 3).
   In the Android app (Capacitor, mobile/), downloads and the complete course material are files in the app's own
   storage (Filesystem plugin, Directory.Data, under offline/), not browser caches; the app's native layer
   (mobile/android/.../MainActivity.java) serves offline/data/... and offline/audio/... to the page when the phone is
   offline, and recordings always from the device once downloaded. Vibration goes through the Haptics plugin.
   In a browser, AlimunDevice.native is false and the callers keep using Cache Storage as before.
   Keys: 'data/books/English-A1.en.json', 'audio/English-A1/<file>.mp3', 'material/books/English-A1.en.json'. */
(function () {
  'use strict';
  var C = window.Capacitor;
  var native = !!(C && C.isNativePlatform && C.isNativePlatform() && C.registerPlugin);
  var FS = native ? C.registerPlugin('Filesystem') : null;
  var HAP = native ? C.registerPlugin('Haptics') : null;
  var AUDIO_PATH = '/storage/v1/object/public/course-audio/';
  var DIR = 'DATA', ROOT = 'offline/';
  /* css/app.css drops the browser's tap flashes and long-press menus in the app */
  if (native) document.documentElement.classList.add('is-native');

  function safe(key) { return String(key || '').split('/').filter(function (p) { return p && p !== '.' && p !== '..'; }).join('/'); }
  /* The key for a downloadable address, or null */
  function keyOf(url) {
    try {
      var u = new URL(url, location.origin);
      if (u.origin === location.origin && u.pathname.indexOf('/data/') === 0) return 'data/' + safe(decodeURIComponent(u.pathname.slice(6)));
      if (/\.supabase\.co$/.test(u.hostname) && u.pathname.indexOf(AUDIO_PATH) === 0) return 'audio/' + safe(decodeURIComponent(u.pathname.slice(AUDIO_PATH.length)));
    } catch (e) { /* not an address */ }
    return null;
  }
  function blobToBase64(blob) {
    return new Promise(function (resolve, reject) {
      var r = new FileReader();
      r.onload = function () { var s = String(r.result || ''); resolve(s.slice(s.indexOf(',') + 1)); };
      r.onerror = function () { reject(r.error); };
      r.readAsDataURL(blob);
    });
  }
  /* Saves text or a Blob under the key */
  function put(key, body) {
    var path = ROOT + safe(key);
    if (typeof body === 'string') return FS.writeFile({ path: path, data: body, directory: DIR, encoding: 'utf8', recursive: true });
    return blobToBase64(body).then(function (b64) { return FS.writeFile({ path: path, data: b64, directory: DIR, recursive: true }); });
  }
  function getText(key) {
    return FS.readFile({ path: ROOT + safe(key), directory: DIR, encoding: 'utf8' }).then(function (r) { return r.data; }, function () { return null; });
  }
  /* The size in bytes, or null when the file is not there */
  function size(key) {
    return FS.stat({ path: ROOT + safe(key), directory: DIR }).then(function (s) { return s.size || 0; }, function () { return null; });
  }
  function remove(key) { return FS.deleteFile({ path: ROOT + safe(key), directory: DIR }).catch(function () {}); }
  function removeDir(key) { return FS.rmdir({ path: ROOT + safe(key), directory: DIR, recursive: true }).catch(function () {}); }

  function haptic(ok) {
    if (!HAP) return false;
    try { if (ok) HAP.impact({ style: 'LIGHT' }); else HAP.notification({ type: 'ERROR' }); } catch (e) { /* no vibrator */ }
    return true;
  }

  window.AlimunDevice = { native: native, keyOf: keyOf, put: put, getText: getText, size: size, remove: remove, removeDir: removeDir, haptic: haptic };
})();
