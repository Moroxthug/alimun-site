/* Alimun admin: pop-ups for new support messages (owner, 24 Nov 2026: "add the pop-up for new support messages too").
   Two kinds:
   - In the console: while the admin console is open, a new message from a person shows as a pop-up in the corner
     (with Open and Close), and the tab title counts the new messages while the tab is in the background.
     AlimunAdminPush.toast({ title, sub, text, href }) — called by js/app/admin.js from the live updates.
   - On the device: Admin → Help requests can turn on system pop-ups for this browser (Web Push). They arrive even with
     the console closed, on a computer or a phone (on an iPhone only once Alimun is added to the Home Screen). The
     browser asks for permission; the subscription is kept by the server (api/help.js admin_push_on / off / test,
     table admin_push_subscriptions) and the pop-up is shown by /admin-push-sw.js.
   Everything shown is escaped. English only, like the rest of the console. */
(function () {
  'use strict';
  /* The public half of the server's VAPID key pair (Vercel VAPID_PUBLIC_KEY); public by design */
  var VAPID_PUBLIC = 'BHGMGn7ABNKv2UHYmyaGWptUCK5qFQK6eibvYOLsTIjetiWU5kiSfOfu6wm6OEAcjzzxQcpVrd5SN-J89AM9Y04';
  var SW = '/admin-push-sw.js', SCOPE = '/admin-push/';

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  /* ---------- Device pop-ups (Web Push) ---------- */
  function supported() { return 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window; }
  function b64ToBytes(s) {
    var pad = '='.repeat((4 - s.length % 4) % 4), raw = atob((s + pad).replace(/-/g, '+').replace(/_/g, '/')), out = new Uint8Array(raw.length);
    for (var i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i);
    return out;
  }
  function registration() { return navigator.serviceWorker.getRegistration(SCOPE).then(function (r) { return r || navigator.serviceWorker.register(SW, { scope: SCOPE }); }); }
  /* The worker controls no page, so navigator.serviceWorker.ready never resolves for it: wait for its own activation */
  function activated(reg) {
    if (reg.active) return Promise.resolve(reg);
    var w = reg.installing || reg.waiting;
    if (!w) return Promise.resolve(reg);
    return new Promise(function (res, rej) {
      var t = setTimeout(function () { rej(new Error('The pop-up helper did not start. Please try again.')); }, 15000);
      w.addEventListener('statechange', function () {
        if (w.state === 'activated') { clearTimeout(t); res(reg); }
        else if (w.state === 'redundant') { clearTimeout(t); rej(new Error('The pop-up helper did not start. Please try again.')); }
      });
    });
  }
  function api(action, body) {
    return window.AlimunData.token().then(function (tok) {
      return fetch('/api/help?action=' + action, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + (tok || '') }, body: JSON.stringify(body || {}) });
    }).then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok) throw new Error(j.error || ('Error ' + r.status)); return j; }); });
  }
  /* 'unsupported', 'denied', 'on' or 'off' for this browser */
  function state() {
    if (!supported()) return Promise.resolve('unsupported');
    if (Notification.permission === 'denied') return Promise.resolve('denied');
    return navigator.serviceWorker.getRegistration(SCOPE).then(function (r) {
      if (!r) return 'off';
      return r.pushManager.getSubscription().then(function (s) { return s && Notification.permission === 'granted' ? 'on' : 'off'; });
    }, function () { return 'off'; });
  }
  function turnOn() {
    if (!supported()) return Promise.reject(new Error('This browser cannot show pop-ups.'));
    return Notification.requestPermission().then(function (p) {
      if (p !== 'granted') throw new Error(p === 'denied' ? 'The browser blocked pop-ups for alimun.com. Allow notifications in the site settings, then try again.' : 'Pop-ups were not allowed.');
      return registration();
    }).then(function (reg) {
      return activated(reg).then(function () {
        return reg.pushManager.getSubscription().then(function (s) { return s || reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64ToBytes(VAPID_PUBLIC) }); });
      });
    }).then(function (sub) { return api('admin_push_on', { subscription: sub.toJSON() }); });
  }
  function turnOff() {
    if (!supported()) return Promise.resolve();
    return navigator.serviceWorker.getRegistration(SCOPE).then(function (r) {
      if (!r) return null;
      return r.pushManager.getSubscription().then(function (s) {
        if (!s) return null;
        var endpoint = s.endpoint;
        return s.unsubscribe().catch(function () {}).then(function () { return api('admin_push_off', { endpoint: endpoint }); });
      });
    });
  }
  function test() { return api('admin_push_test', {}); }

  /* A click on a device pop-up while the console is open: show that conversation here */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', function (e) {
      var u = e.data && e.data.alimunOpen;
      if (typeof u === 'string' && /^\/app\/admin(#\/[a-z0-9/-]*)?$/i.test(u)) { var h = u.split('#')[1]; if (h) location.hash = '#' + h; }
    });
  }

  /* ---------- In the console ---------- */
  var box = null, hiddenCount = 0, baseTitle = null;
  function stack() {
    if (!box) { box = document.createElement('div'); box.className = 'adm-toasts'; box.setAttribute('aria-live', 'polite'); document.body.appendChild(box); }
    return box;
  }
  function toast(t) {
    var el = document.createElement('div');
    el.className = 'adm-toast';
    el.setAttribute('role', 'status');
    var href = /^#\/[a-z0-9/-]*$/i.test(t.href || '') ? t.href : '#/help';
    el.innerHTML = '<i aria-hidden="true"></i><div class="adm-toast__x"><b>' + esc(t.title) + '</b>' + (t.sub ? '<span>' + esc(t.sub) + '</span>' : '') + (t.text ? '<p>' + esc(t.text) + '</p>' : '') +
      '<div class="adm-toast__btns"><a class="btn btn--primary btn--sm" href="' + esc(href) + '">Open</a><button class="btn btn--quiet btn--sm" type="button">Close</button></div></div>';
    var s = stack();
    s.insertBefore(el, s.firstChild);
    while (s.children.length > 3) s.removeChild(s.lastChild);
    var gone = false, timer = null;
    function close() { if (gone) return; gone = true; clearTimeout(timer); el.classList.add('is-out'); setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 220); }
    function arm() { clearTimeout(timer); timer = setTimeout(close, 15000); }
    el.querySelector('a').addEventListener('click', close);
    el.querySelector('button').addEventListener('click', close);
    el.addEventListener('mouseenter', function () { clearTimeout(timer); });
    el.addEventListener('mouseleave', arm);
    if (!document.hidden) arm();
    if (document.hidden) {
      hiddenCount++;
      if (baseTitle == null) baseTitle = document.title;
      document.title = '(' + hiddenCount + ') ' + baseTitle;
    }
  }
  document.addEventListener('visibilitychange', function () {
    if (document.hidden || !hiddenCount) return;
    hiddenCount = 0;
    if (baseTitle != null) { document.title = document.title.replace(/^\(\d+\) /, ''); baseTitle = null; }
    if (box) Array.prototype.forEach.call(box.children, function (el) { setTimeout(function () { if (el.parentNode) el.querySelector('button').click(); }, 15000); });
  });

  window.AlimunAdminPush = { supported: supported, state: state, turnOn: turnOn, turnOff: turnOff, test: test, toast: toast };
})();
