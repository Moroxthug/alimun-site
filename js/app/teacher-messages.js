/* Alimun: the teacher's messages (app/messages.html), until the teacher dashboard is rebuilt in step 15
   (docs/DASHBOARD_PLAN.md, step 13). The same conversations as the students' Messages screen: one per class the
   teacher teaches, and one per student who has written or whom the teacher writes to. Sign-in, permissions, sender
   names and the sending limit are the database's (supabase/migrations/202610251800_messages.sql); this page only
   shows and sends. Interface text: app_ms_* and app_tm_* keys in the teacher's language ("alimun-lang"). */
(function () {
  'use strict';
  var D = window.AlimunData, box = document.getElementById('tm'), S = null, poll = null;
  var lang = 'en';
  try { lang = localStorage.getItem('alimun-lang') || (navigator.language || 'en').slice(0, 2); } catch (e) { /* storage blocked */ }
  var LANGS = ['en', 'es', 'fr', 'de', 'pt', 'zh', 'ar', 'it', 'ma'];
  if (LANGS.indexOf(lang) === -1) lang = 'en';
  var locale = { en: 'en-GB', es: 'es-ES', fr: 'fr-FR', de: 'de-DE', pt: 'pt-PT', zh: 'zh-CN', ar: 'ar', it: 'it-IT', ma: 'fr-MA' }[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  function t(k, v) {
    var T = window.ALIMUN_TRANSLATIONS || {}, s = (T[lang] && T[lang][k]) || (T.en && T.en[k]) || k;
    Object.keys(v || {}).forEach(function (x) { s = s.split('{' + x + '}').join(v[x]); });
    return s;
  }
  function tn(k, n) {
    var cat = new Intl.PluralRules(locale).select(n), T = window.ALIMUN_TRANSLATIONS || {};
    var key = (T[lang] && T[lang][k + '_' + cat]) || (T.en && T.en[k + '_' + cat]) ? k + '_' + cat : k + '_other';
    return t(key, { n: n });
  }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function text(s) { return String(s || '').split(/\n/).map(esc).join('<br>'); }
  function hm(iso) { return new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit' }).format(new Date(iso)); }
  function dayLabel(iso) {
    var d = new Date(iso), now = new Date();
    if (d.toDateString() === now.toDateString()) return t('app_ms_today');
    if (d.toDateString() === new Date(now.getTime() - 86400000).toDateString()) return t('app_ms_yesterday');
    return new Intl.DateTimeFormat(locale, { weekday: 'long', day: 'numeric', month: 'long' }).format(d);
  }
  function langName(l) { try { return new Intl.DisplayNames([locale], { type: 'language' }).of({ English: 'en', German: 'de', French: 'fr', Spanish: 'es', Italian: 'it', Portuguese: 'pt' }[l] || 'en'); } catch (e) { return l; } }
  function loadScript(src) { return new Promise(function (ok) { var s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = ok; document.head.appendChild(s); }); }

  /* ---------- Data ---------- */
  function load() {
    return D.teacherInbox().then(function (inbox) {
      if (!inbox.signedIn || !inbox.teacher) return inbox;
      return D.myThreads().then(function (threads) {
        var names = {}, convs = [];
        inbox.cohorts.forEach(function (co) {
          co.students.forEach(function (s) { names[s.id] = s.full_name || ''; });
          var th = threads.filter(function (x) { return x.kind === 'class' && x.cohort_id === co.id; })[0];
          convs.push({ key: 'class:' + co.id, kind: 'class', cohort: co.id, title: t('app_ms_class_of', { course: langName(co.language) + ' ' + co.level }), thread: th && th.thread_id, unread: th ? th.unread : 0, last: th });
        });
        threads.filter(function (x) { return x.kind === 'direct'; }).forEach(function (th) {
          convs.push({ key: 'student:' + th.student_id, kind: 'direct', student: th.student_id, title: names[th.student_id] || t('app_tm_student'), thread: th.thread_id, unread: th.unread, last: th });
        });
        inbox.convs = convs;
        inbox.names = names;
        return inbox;
      });
    });
  }

  /* ---------- Drawing ---------- */
  function draw() {
    var cur = current();
    if (!S.signedIn) { box.innerHTML = '<div class="card"><h2 class="t-h2">' + esc(t('app_tm_signin_h')) + '</h2><p class="t-body" style="margin-top:8px">' + esc(t('app_tm_signin_p')) + '</p><div class="btn-row" style="margin-top:18px"><a class="btn btn--primary" href="/teacher-dashboard">' + esc(t('app_tm_back')) + '</a></div></div>'; return; }
    if (!S.teacher) { box.innerHTML = '<div class="card"><h2 class="t-h2">' + esc(t('app_tm_not_teacher')) + '</h2></div>'; return; }
    var all = S.convs.concat(S.extra || []);
    var started = {}; all.forEach(function (c) { if (c.student) started[c.student] = true; });
    var pick = [];
    S.cohorts.forEach(function (co) { co.students.forEach(function (s) { if (!started[s.id] && !pick.some(function (p) { return p.id === s.id; })) pick.push(s); }); });
    var list = '<nav class="ms-list" aria-label="' + esc(t('app_ms_convs')) + '">' + all.map(function (c) {
      var on = cur && cur.key === c.key, pv = c.last && c.last.last_body ? (c.last.last_sender ? c.last.last_sender + ': ' : '') + c.last.last_body : '';
      return '<a class="ms-conv' + (on ? ' is-on' : '') + (c.unread ? ' is-unread' : '') + '" href="#' + esc(c.key) + '"' + (on ? ' aria-current="page"' : '') + '>' +
        '<span class="ms-conv__txt"><b>' + esc(c.title) + '</b><span>' + esc(c.kind === 'class' ? t('app_tm_class_sub') : t('app_tm_student_sub')) + '</span>' + (pv ? '<span class="ms-conv__pv" dir="auto">' + esc(pv.slice(0, 90)) + '</span>' : '') + '</span>' +
        (c.unread ? '<span class="ms-conv__new">' + esc(tn('app_ms_new', c.unread)) + '</span>' : '') + '</a>';
    }).join('') +
      (pick.length ? '<label class="tm-start"><span class="t-small">' + esc(t('app_tm_start')) + '</span><select data-start><option value="">…</option>' + pick.map(function (s) { return '<option value="' + esc(s.id) + '">' + esc(s.full_name || t('app_tm_student')) + '</option>'; }).join('') + '</select></label>' : '') +
      (!all.length ? '<p class="t-body" style="padding:12px">' + esc(t('app_tm_none')) + '</p>' : '') + '</nav>';
    box.innerHTML = '<div class="ms' + (cur ? ' has-conv' : '') + '">' + list + '<section class="ms-main" aria-live="polite">' + (cur ? convHtml(cur) : '<div class="ms-empty"><p class="t-body">' + esc(t('app_ms_pick')) + '</p></div>') + '</section></div>';
    var m = box.querySelector('[data-msgs]'); if (m) m.scrollTop = m.scrollHeight;
  }
  function convHtml(c) {
    return '<header class="ms-head"><a class="rd-back ms-back" href="#">' + esc(t('app_ms_convs')) + '</a><h2 class="t-h3">' + esc(c.title) + '</h2><p class="t-small">' + esc(c.kind === 'class' ? t('app_tm_class_who') : t('app_tm_student_who')) + '</p></header>' +
      '<div class="ms-msgs" data-msgs>' + msgsHtml(c) + '</div>' +
      '<form class="ms-form" data-form><label class="sr" for="ms-in">' + esc(t('app_ms_write')) + '</label><textarea id="ms-in" class="ms-in" rows="1" maxlength="4000" placeholder="' + esc(t('app_ms_write')) + '" dir="auto"></textarea>' +
      '<button class="btn btn--primary" type="submit" data-send disabled>' + esc(t('app_ms_send')) + '</button></form><p class="t-small ms-err" data-err aria-live="assertive"></p>';
  }
  function msgsHtml(c) {
    var list = c.msgs || [];
    if (!list.length) return '<p class="t-body ms-first">' + esc(t('app_tm_first')) + '</p>';
    var out = '', last = '';
    list.forEach(function (m) {
      var d = new Date(m.created_at).toDateString();
      if (d !== last) { out += '<p class="ms-day">' + esc(dayLabel(m.created_at)) + '</p>'; last = d; }
      var mine = m.sender_user === S.me;
      out += '<div class="ms-msg' + (mine ? ' is-me' : '') + (m.sender_role === 'teacher' ? ' is-teacher' : '') + (m.pending ? ' is-pending' : '') + '">' +
        (mine ? '' : '<p class="ms-msg__who">' + esc(m.sender_name) + '</p>') + '<div class="ms-bub" dir="auto">' + text(m.body) + '</div><p class="ms-msg__time">' + esc(hm(m.created_at)) + '</p></div>';
    });
    return out;
  }
  function current() {
    var k = decodeURIComponent(location.hash.slice(1));
    return k && S && S.convs ? S.convs.concat(S.extra || []).filter(function (c) { return c.key === k; })[0] : null;
  }

  /* ---------- Conversations ---------- */
  function open() {
    clearInterval(poll);
    var c = current();
    if (!c) { draw(); return; }
    var ready = c.thread ? Promise.resolve(c.thread) : c.kind === 'class' ? D.openThread('class', c.cohort) : Promise.resolve(null);
    ready.then(function (id) {
      c.thread = id;
      return id ? D.threadMessages(id).then(function (list) { c.msgs = list; c.unread = 0; D.markRead(id); }) : (c.msgs = []);
    }).then(function () {
      draw();
      poll = setInterval(function () { refresh(c); }, 8000);
    }, function () { draw(); });
  }
  function refresh(c) {
    if (!c.thread || document.hidden) return;
    var lastAt = c.msgs && c.msgs.length ? c.msgs[c.msgs.length - 1].created_at : null;
    D.threadMessages(c.thread, lastAt).then(function (list) {
      list = list.filter(function (m) { return !c.msgs.some(function (x) { return x.id === m.id; }); });
      if (!list.length) return;
      c.msgs = c.msgs.filter(function (x) { return !x.pending; }).concat(list);
      var m = box.querySelector('[data-msgs]'); if (m) { m.innerHTML = msgsHtml(c); m.scrollTop = m.scrollHeight; }
      D.markRead(c.thread);
    }).catch(function () {});
  }
  function send(c) {
    var inp = box.querySelector('.ms-in'), err = box.querySelector('[data-err]'), body = String(inp.value || '').trim();
    if (!body) return;
    var temp = { id: 'p' + Date.now(), sender_user: S.me, sender_role: 'teacher', body: body, created_at: new Date().toISOString(), pending: true };
    c.msgs = (c.msgs || []).concat([temp]);
    inp.value = ''; box.querySelector('[data-send]').disabled = true;
    var m = box.querySelector('[data-msgs]'); m.innerHTML = msgsHtml(c); m.scrollTop = m.scrollHeight;
    var thread = c.thread ? Promise.resolve(c.thread) : D.openThread('direct', null, null, c.student);
    thread.then(function (id) { c.thread = id; return D.sendMessage(id, body); }).then(function (row) {
      c.msgs = c.msgs.filter(function (x) { return x !== temp; }).concat(row ? [row] : []);
      m.innerHTML = msgsHtml(c); m.scrollTop = m.scrollHeight;
    }, function (e) {
      c.msgs = c.msgs.filter(function (x) { return x !== temp; });
      m.innerHTML = msgsHtml(c);
      inp.value = body; box.querySelector('[data-send]').disabled = false;
      err.textContent = t(/too many/i.test(e && e.message || '') ? 'app_ms_slow' : 'app_ms_error');
    });
  }

  /* ---------- Events ---------- */
  box.addEventListener('submit', function (e) { if (e.target.hasAttribute('data-form')) { e.preventDefault(); var c = current(); if (c) send(c); } });
  box.addEventListener('input', function (e) {
    if (!e.target.classList.contains('ms-in')) return;
    e.target.style.height = 'auto'; e.target.style.height = Math.min(180, e.target.scrollHeight) + 'px';
    var b = box.querySelector('[data-send]'); if (b) b.disabled = !e.target.value.trim();
  });
  box.addEventListener('keydown', function (e) {
    if (!e.target.classList.contains('ms-in') || e.key !== 'Enter' || e.shiftKey || e.isComposing) return;
    e.preventDefault(); var c = current(); if (c) send(c);
  });
  box.addEventListener('change', function (e) {
    if (!e.target.hasAttribute('data-start') || !e.target.value) return;
    var id = e.target.value;
    S.extra = (S.extra || []).concat([{ key: 'student:' + id, kind: 'direct', student: id, title: S.names[id] || t('app_tm_student'), msgs: [] }]);
    location.hash = 'student:' + id;
  });
  window.addEventListener('hashchange', open);

  /* ---------- Start ---------- */
  Promise.all([loadScript('/js/i18n/en.app.js'), lang !== 'en' ? loadScript('/js/i18n/' + lang + '.app.js') : null]).then(function () {
    document.title = t('app_nav_messages') + ' – Alimun';
    document.querySelector('[data-h]').textContent = t('app_nav_messages');
    document.querySelector('[data-lead]').textContent = t('app_tm_lead');
    document.querySelector('[data-back]').textContent = t('app_tm_back');
    return load();
  }).then(function (s) { S = s; open(); }, function (e) {
    console.warn('[Alimun] Messages did not load', e && e.message);
    box.innerHTML = '<div class="card"><p class="t-body">' + esc(t('app_ms_error')) + '</p></div>';
  });
})();
