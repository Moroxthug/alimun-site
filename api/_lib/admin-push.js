/**
 * Pop-ups on the admins' devices (owner, 24 Nov 2026: "add the pop-up for new support messages too").
 * Web Push to every device that turned pop-ups on in Admin → Help requests (table admin_push_subscriptions,
 * supabase/migrations/202611241900_admin_push.sql). Keys: VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, VAPID_SUBJECT (Vercel).
 * The browser shows the notification through /admin-push-sw.js. Best effort: a failure never stops the caller; a
 * device the push service no longer knows (404, 410) is removed.
 */
let webpush = null;
function ready() {
  if (webpush) return webpush;
  const pub = process.env.VAPID_PUBLIC_KEY, priv = process.env.VAPID_PRIVATE_KEY;
  if (!pub || !priv) return null;
  webpush = require('web-push');
  webpush.setVapidDetails(process.env.VAPID_SUBJECT || 'https://alimun.com/contact', pub, priv);
  return webpush;
}
function publicKey() { return process.env.VAPID_PUBLIC_KEY || null; }

function cut(s, n) { s = String(s || '').replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 1) + '…' : s; }

/* note: { title, body, url (a path on alimun.com), tag }. only: limit to one admin's devices (the test button). */
async function sendToAdmins(supabase, note, only) {
  const wp = ready();
  if (!wp) return { sent: 0, failed: 0, off: true };
  let q = supabase.from('admin_push_subscriptions').select('id, endpoint, p256dh, auth').limit(50);
  if (only) q = q.eq('user_id', only);
  const { data, error } = await q;
  if (error || !data || !data.length) return { sent: 0, failed: 0 };
  const payload = JSON.stringify({
    title: cut(note.title, 80), body: cut(note.body, 180),
    url: /^\/[^/]/.test(note.url || '') ? note.url : '/app/admin#/help', tag: cut(note.tag || 'support', 60),
  });
  let sent = 0, failed = 0;
  await Promise.all(data.map(async (s) => {
    try {
      await wp.sendNotification({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } }, payload, { TTL: 86400, urgency: 'high', timeout: 6000 });
      sent++;
      await supabase.from('admin_push_subscriptions').update({ last_ok_at: new Date().toISOString(), last_error: null }).eq('id', s.id);
    } catch (e) {
      failed++;
      const code = e && e.statusCode;
      if (code === 404 || code === 410) await supabase.from('admin_push_subscriptions').delete().eq('id', s.id);
      else await supabase.from('admin_push_subscriptions').update({ last_error: cut((code ? code + ' ' : '') + (e && e.message), 200) }).eq('id', s.id);
    }
  }));
  return { sent, failed };
}

/* A subscription from the browser (PushSubscription.toJSON()) */
function validSubscription(sub) {
  if (!sub || typeof sub !== 'object') return null;
  const endpoint = String(sub.endpoint || ''), k = sub.keys || {};
  if (!/^https:\/\/[^\s]{10,1000}$/.test(endpoint)) return null;
  /* Only the browsers' own push services: Chrome and Edge (Google, Windows), Firefox, Safari */
  let host = '';
  try { host = new URL(endpoint).hostname; } catch (e) { return null; }
  if (!/(^|\.)(fcm\.googleapis\.com|push\.services\.mozilla\.com|notify\.windows\.com|push\.apple\.com)$/.test(host)) return null;
  const p256dh = String(k.p256dh || ''), auth = String(k.auth || '');
  if (!/^[A-Za-z0-9_-]{20,200}={0,2}$/.test(p256dh) || !/^[A-Za-z0-9_-]{8,100}={0,2}$/.test(auth)) return null;
  return { endpoint, p256dh, auth };
}

module.exports = { sendToAdmins, validSubscription, publicKey, cut };
