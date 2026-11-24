/* Alimun admin: pop-ups for new support messages (owner, 24 Nov 2026). Registered by js/app/admin-push.js with the
   scope /admin-push/, a path no page uses, so it never handles any page or request: it only receives the pushes that
   api/_lib/admin-push.js sends and shows them. If the admin console is open and in front, the console shows its own
   pop-up and this one is skipped. A click opens the conversation in the admin console (or brings it to the front). */
'use strict';

self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });

function adminClients() {
  return self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    return list.filter(function (c) { try { return new URL(c.url).pathname.indexOf('/app/admin') === 0; } catch (e) { return false; } });
  });
}

self.addEventListener('push', function (e) {
  var d = {};
  try { d = e.data ? e.data.json() : {}; } catch (err) { d = { title: 'New message in Support' }; }
  var url = typeof d.url === 'string' && /^\/[^/]/.test(d.url) ? d.url : '/app/admin#/help';
  e.waitUntil(adminClients().then(function (list) {
    var inFront = list.some(function (c) { return c.focused && c.visibilityState === 'visible'; });
    if (inFront && d.tag !== 'support-test') return null;
    return self.registration.showNotification(d.title || 'New message in Support', {
      body: d.body || '', tag: d.tag || 'support', renotify: true, requireInteraction: false,
      icon: '/images/app/icon-192.png', badge: '/images/app/icon-192.png', data: { url: url }
    });
  }));
});

self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  var url = (e.notification.data && e.notification.data.url) || '/app/admin#/help';
  e.waitUntil(adminClients().then(function (list) {
    /* This worker controls no page, so the open console is asked to show the conversation (js/app/admin-push.js) */
    var c = list[0];
    if (c) { c.postMessage({ alimunOpen: url }); return c.focus().catch(function () { return self.clients.openWindow(url); }); }
    return self.clients.openWindow(url);
  }));
});
