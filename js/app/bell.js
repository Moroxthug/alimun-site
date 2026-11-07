/* Alimun dashboards: the bell (docs/GROWTH_PLAN.md step 4). Shared by the student (js/app/shell.js) and teacher
   (js/app/teach.js) dashboards: AlimunBell.attach(button, helpers, isReal).
   Notifications come from public.notifications (supabase/migrations/202611071500_notifications.sql): service ones
   carry a key and parameters, written by the database when something happens, and are drawn here in the dashboard
   language (app_nt_* keys); offers carry the admin's own title and text. Opening the panel marks what it shows as
   read. Signed out or in a sample: sample notifications, nothing is saved. */
(function () {
  'use strict';
  var A = null, btn = null, panel = null, items = [], real = false, loaded = false;

  function esc(s) { return A.esc(s); }
  function when(at) {
    try { return new Intl.DateTimeFormat(A.locale || 'en', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }).format(new Date(at)); } catch (e) { return ''; }
  }
  function ago(at) {
    var mins = Math.round((Date.now() - new Date(at).getTime()) / 60000);
    try {
      var rtf = new Intl.RelativeTimeFormat(A.locale || 'en', { numeric: 'auto' });
      if (mins < 60) return rtf.format(-Math.max(mins, 0), 'minute');
      if (mins < 60 * 24) return rtf.format(-Math.round(mins / 60), 'hour');
      return rtf.format(-Math.round(mins / 1440), 'day');
    } catch (e) { return ''; }
  }
  /* Written out in full so the translation split (scripts/split-translations.js) files them with the dashboard text */
  var KEYS = { homework_graded: 'app_nt_homework_graded', homework_graded_noscore: 'app_nt_homework_graded_noscore', place_offered: 'app_nt_place_offered',
    session_moved: 'app_nt_session_moved', session_cancelled: 'app_nt_session_cancelled', notes_ready: 'app_nt_notes_ready', student_joined: 'app_nt_student_joined' };
  function cls(p) { return (A.languageName ? A.languageName(p.language) : p.language) + (p.level ? ' ' + p.level : ''); }
  function text(n) {
    if (!n.key) return { title: n.title || '', body: n.body || '' };
    var p = n.params || {}, v = { title: p.title || '', score: p.score, class: cls(p), at: p.at ? when(p.at) : '', was: p.was ? when(p.was) : '', until: p.until ? when(p.until) : '', name: p.name || '' };
    var key = n.key === 'homework_graded' && p.score == null ? KEYS.homework_graded_noscore : KEYS[n.key];
    return { title: key ? A.t(key, v) : '', body: '' };
  }
  function sample() {
    var h = function (x) { return new Date(Date.now() - x * 3600000).toISOString(); };
    return [
      { id: 's1', kind: 'service', key: 'homework_graded', params: { title: 'My weekend', score: 86 }, link: '#/homework', created_at: h(1), read_at: null },
      { id: 's2', kind: 'service', key: 'session_moved', params: { language: 'German', level: 'B1', was: h(-20), at: h(-44) }, link: '#/classes', created_at: h(5), read_at: null },
      { id: 's3', kind: 'offer', title: 'New: German B2 evening class', body: 'Twice a week at 19:00 Berlin time, from 1 December.', link: null, created_at: h(30), read_at: h(20) },
      { id: 's4', kind: 'service', key: 'notes_ready', params: { language: 'German', level: 'B1', at: h(50) }, link: '#/classes', created_at: h(48), read_at: h(40) }
    ];
  }
  function href(link) {
    if (!link) return '';
    var here = location.pathname.replace(/\/$/, '');
    if (link.charAt(0) === '#') return link;
    var m = link.match(/^(\/app(?:\/teach)?)(#.*)?$/);
    if (m && (m[1] === here || (m[1] === '/app' && here === '/app/index.html'))) return m[2] || '#/';
    return /^\/[^/]/.test(link) || /^https:\/\/alimun\.com\//.test(link) ? link : '';
  }
  function draw() {
    var unread = items.filter(function (n) { return !n.read_at; }).length;
    btn.classList.toggle('has-dot', unread > 0);
    btn.setAttribute('aria-label', A.t('app_notifications') + (unread ? ' (' + unread + ')' : ''));
    if (!panel) return;
    panel.innerHTML = '<div class="nt-head"><h2 class="t-h3">' + esc(A.t('app_notifications')) + '</h2></div>' +
      (items.length ? '<ul class="nt-list">' + items.map(function (n) {
        var x = text(n), go = href(n.link), tag = go ? 'a' : 'div';
        return '<li><' + tag + ' class="nt-item' + (n.read_at ? '' : ' is-new') + (n.kind === 'offer' ? ' is-offer' : '') + '"' + (go ? ' href="' + esc(go) + '"' : '') + '>' +
          '<b>' + esc(x.title) + '</b>' + (x.body ? '<span>' + esc(x.body) + '</span>' : '') + '<small>' + esc(ago(n.created_at)) + '</small></' + tag + '></li>';
      }).join('') + '</ul>' : '<p class="t-body nt-none">' + esc(A.t('app_nt_none')) + '</p>');
  }
  function load() {
    var get = real && window.AlimunData && window.AlimunData.notifications ? window.AlimunData.notifications() : Promise.resolve(sample());
    return get.then(function (list) { items = list || []; loaded = true; draw(); }, function (e) { console.warn('[Alimun] notifications', e && e.message); });
  }
  function close() {
    if (!panel) return;
    panel.remove(); panel = null; btn.setAttribute('aria-expanded', 'false');
    document.removeEventListener('click', outside, true); document.removeEventListener('keydown', onKey);
  }
  function outside(e) { if (panel && !panel.contains(e.target) && !btn.contains(e.target)) close(); }
  function onKey(e) { if (e.key === 'Escape') { close(); btn.focus(); } }
  function open() {
    panel = document.createElement('div');
    panel.className = 'nt-panel'; panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', A.t('app_notifications'));
    btn.parentNode.appendChild(panel);
    btn.setAttribute('aria-expanded', 'true');
    draw();
    panel.addEventListener('click', function (e) { if (e.target.closest('a.nt-item')) close(); });
    document.addEventListener('click', outside, true); document.addEventListener('keydown', onKey);
    var unread = items.filter(function (n) { return !n.read_at; });
    if (unread.length) {
      var now = new Date().toISOString();
      setTimeout(function () { unread.forEach(function (n) { n.read_at = now; }); btn.classList.remove('has-dot'); }, 1500);
      if (real && window.AlimunData.markNotificationsRead) window.AlimunData.markNotificationsRead(unread.map(function (n) { return n.id; })).catch(function () {});
    }
  }
  function attach(button, helpers, isReal) {
    if (!button) return;
    A = helpers; btn = button; real = !!isReal; panel = null;
    btn.setAttribute('aria-haspopup', 'dialog'); btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', function () { if (panel) close(); else { open(); if (!loaded) load(); } });
    load();
    clearInterval(attach.timer);
    attach.timer = setInterval(function () { if (!document.hidden && !panel) load(); }, 120000);
  }
  window.AlimunBell = { attach: attach };
})();
