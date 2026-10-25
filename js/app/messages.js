/* Alimun app: messages (docs/DASHBOARD_PLAN.md, step 13; tables in supabase/migrations/202610251800_messages.sql).
   The student's conversations: one with each class (its students and teacher) and one with each class teacher.
   Conversations open through open_thread(), which the database checks; the sender's name and role are set by the
   database (students show their first name). New messages are fetched every few seconds while a conversation is
   open; reading a conversation marks it read (message_reads), and unread counts come from my_threads().
   Messages are plain text: escaped, line breaks kept, nothing turned into links or HTML.
   Sample conversations when signed out. Routes: #/messages, #/messages/<class:cohort | teacher:cohort>.
   Interface text: app_ms_* keys. */
(function () {
  'use strict';
  var A = null, root = null, M = null, poll = null;
  var POLL_MS = 8000, MAX = 4000;
  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function signedIn() { return A.mode() === 'real' && A.data().profile.id; }
  function text(s) { return String(s || '').split(/\n/).map(esc).join('<br>'); }
  function dayLabel(iso) {
    var d = new Date(iso), now = new Date(), y = new Date(now.getTime() - 86400000);
    if (d.toDateString() === now.toDateString()) return t('app_ms_today');
    if (d.toDateString() === y.toDateString()) return t('app_ms_yesterday');
    return new Intl.DateTimeFormat(A.locale, { weekday: 'long', day: 'numeric', month: 'long' }).format(d);
  }
  function hm(iso) { return new Intl.DateTimeFormat(A.locale, { hour: '2-digit', minute: '2-digit' }).format(new Date(iso)); }

  /* ---------- Data ---------- */
  function sample() {
    var now = Date.now(), ago = function (m) { return new Date(now - m * 60000).toISOString(); };
    var de = (A.data().profile.language || 'German') === 'German';
    return {
      sample: true, me: 'me',
      convs: [
        { key: 'class:c1', kind: 'class', cohort: 'c1', title: t('app_ms_class_of', { course: A.languageName(A.data().profile.language) + ' ' + (A.data().profile.level || '') }), thread: 't1', unread: 2,
          msgs: [
            { id: 'm1', sender_user: 'u2', sender_role: 'teacher', sender_name: 'Jonas', body: de ? 'Hallo zusammen! Die Notizen von heute sind jetzt in euren Klassen.' : 'Hello everyone! Today\'s notes are in your Classes page now.', created_at: ago(1500) },
            { id: 'm2', sender_user: 'u3', sender_role: 'student', sender_name: 'Amira', body: de ? 'Danke! Bis Mittwoch.' : 'Thanks! See you on Wednesday.', created_at: ago(1490) },
            { id: 'm3', sender_user: 'u4', sender_role: 'student', sender_name: 'Kenji', body: de ? 'Hat jemand die Hausaufgabe schon gemacht? Ich verstehe die zweite Frage nicht ganz.' : 'Has anyone done the homework yet? I do not quite get the second question.', created_at: ago(40) },
            { id: 'm4', sender_user: 'u2', sender_role: 'teacher', sender_name: 'Jonas', body: de ? 'Kenji, schreiben Sie einfach zwei Sätze mit „weil“. Wir besprechen es am Mittwoch.' : 'Kenji, just write two sentences with "because". We will go through it on Wednesday.', created_at: ago(25) }
          ] },
        { key: 'teacher:c1', kind: 'direct', cohort: 'c1', teacherId: 't1', title: 'Jonas', thread: 't2', unread: 0,
          msgs: [
            { id: 'm5', sender_user: 'me', sender_role: 'student', sender_name: 'Sara', body: de ? 'Guten Tag Jonas, ich kann am Freitag leider nicht kommen.' : 'Hi Jonas, I cannot come on Friday, sorry.', created_at: ago(3000) },
            { id: 'm6', sender_user: 'u2', sender_role: 'teacher', sender_name: 'Jonas', body: de ? 'Kein Problem, Sara. Die Notizen finden Sie danach in Ihren Klassen.' : 'No problem, Sara. You will find the notes in your Classes page afterwards.', created_at: ago(2950) }
          ] }
      ]
    };
  }
  function load() {
    if (!signedIn()) return Promise.resolve(sample());
    var p = A.data().profile;
    return Promise.all([window.AlimunData.userId(), window.AlimunData.classTeachers(p.cohorts || []), window.AlimunData.myThreads()]).then(function (r) {
      var me = r[0], classes = r[1], threads = r[2];
      var convs = [];
      classes.forEach(function (x) {
        var co = x.cohort, th = threads.filter(function (z) { return z.kind === 'class' && z.cohort_id === co.id; })[0];
        convs.push({ key: 'class:' + co.id, kind: 'class', cohort: co.id, title: t('app_ms_class_of', { course: A.languageName(co.language) + ' ' + co.level }), thread: th && th.thread_id, unread: th ? th.unread : 0, last: th });
        if (co.teacher_id) {
          var dt = threads.filter(function (z) { return z.kind === 'direct' && z.teacher_id === co.teacher_id; })[0];
          if (!convs.some(function (c) { return c.teacherId === co.teacher_id; })) convs.push({ key: 'teacher:' + co.id, kind: 'direct', cohort: co.id, teacherId: co.teacher_id, title: x.teacherName || t('app_ms_teacher'), thread: dt && dt.thread_id, unread: dt ? dt.unread : 0, last: dt });
        }
      });
      return { me: me, convs: convs };
    }).catch(function (e) {
      /* The tables are not there yet (migration not applied) */
      if (e && (e.code === '42P01' || e.code === 'PGRST202' || /my_threads|does not exist/i.test(e.message || ''))) return { missing: true, convs: [] };
      throw e;
    });
  }

  /* ---------- The page ---------- */
  function preview(c) {
    if (M.sample) { var m = c.msgs[c.msgs.length - 1]; return m ? m.sender_name + ': ' + m.body : ''; }
    return c.last && c.last.last_body ? (c.last.last_sender ? c.last.last_sender + ': ' : '') + c.last.last_body : '';
  }
  function listHtml(cur) {
    return '<nav class="ms-list" aria-label="' + esc(t('app_ms_convs')) + '">' + M.convs.map(function (c) {
      var on = cur && cur.key === c.key, pv = preview(c);
      return '<a class="ms-conv' + (on ? ' is-on' : '') + (c.unread ? ' is-unread' : '') + '" href="#/messages/' + esc(c.key) + '"' + (on ? ' aria-current="page"' : '') + '>' +
        '<span class="ms-conv__art" aria-hidden="true">' + (c.kind === 'class' ? A.Cast.drawing('mug') : A.Cast.tutor ? A.Cast.tutor('arthur') : A.Cast.drawing('owl')) + '</span>' +
        '<span class="ms-conv__txt"><b>' + esc(c.title) + '</b><span>' + esc(c.kind === 'class' ? t('app_ms_class_sub') : t('app_ms_teacher_sub')) + '</span>' +
        (pv ? '<span class="ms-conv__pv" dir="auto">' + esc(pv.slice(0, 90)) + '</span>' : '') + '</span>' +
        (c.unread ? '<span class="ms-conv__new">' + esc(A.tn('app_ms_new', c.unread)) + '</span>' : '') + '</a>';
    }).join('') + '</nav>';
  }
  function pageView(cur) {
    var html = '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_messages')) + '</h1><p class="t-lead">' + esc(t('app_ms_lead')) + '</p></div></div>';
    if (M.missing) {
      return html + '<div class="grid rise"><section class="stage span-4" style="--i:0;background:var(--t-mint)" aria-hidden="true"><div class="bub think">' + esc(t('app_ms_soon_bub')) + '</div>' + A.Cast.drawing('alien') + '</section>' +
        '<section class="card span-8" style="--i:1"><h2 class="t-h2">' + esc(t('app_ms_soon_h')) + '</h2><p class="t-body" style="margin-top:8px">' + esc(t('app_ms_soon_p')) + '</p></section></div>';
    }
    if (!M.convs.length) {
      return html + '<div class="grid rise"><section class="stage span-4" style="--i:0;background:var(--t-mint)" aria-hidden="true"><div class="bub think">' + esc(t('app_ms_none_bub')) + '</div>' + A.Cast.drawing('alien') + '</section>' +
        '<section class="card span-8" style="--i:1"><h2 class="t-h2">' + esc(t('app_ms_none_h')) + '</h2><p class="t-body" style="margin-top:8px">' + esc(t('app_ms_none_p')) + '</p>' +
        '<div class="btn-row" style="margin-top:20px"><a class="btn btn--primary" href="#/classes">' + esc(t('app_nav_classes')) + A.icon('arrow') + '</a></div></section></div>';
    }
    return html + '<div class="ms' + (cur ? ' has-conv' : '') + ' rise">' + listHtml(cur) +
      '<section class="ms-main" aria-live="polite">' + (cur ? convHtml(cur) : '<div class="ms-empty"><div class="ms-empty__art" aria-hidden="true">' + A.Cast.drawing('alien') + '</div><p class="t-body">' + esc(t('app_ms_pick')) + '</p></div>') + '</section>' +
      (M.sample ? '<p class="t-tiny ms-sample">' + esc(t('app_ms_sample')) + '</p>' : '') + '</div>';
  }
  function convHtml(c) {
    return '<header class="ms-head"><a class="rd-back ms-back" href="#/messages">' + A.icon('back') + '<span>' + esc(t('app_ms_convs')) + '</span></a><h2 class="t-h3">' + esc(c.title) + '</h2>' +
      '<p class="t-small">' + esc(c.kind === 'class' ? t('app_ms_class_who') : t('app_ms_teacher_who')) + '</p></header>' +
      '<div class="ms-msgs" data-msgs>' + msgsHtml(c) + '</div>' +
      '<form class="ms-form" data-form><label class="sr" for="ms-in">' + esc(t('app_ms_write')) + '</label><textarea id="ms-in" class="ms-in" rows="1" maxlength="' + MAX + '" placeholder="' + esc(t('app_ms_write')) + '" dir="auto"></textarea>' +
      '<button class="btn btn--primary" type="submit" data-send disabled>' + esc(t('app_ms_send')) + '</button></form><p class="t-small ms-err" data-err aria-live="assertive"></p>';
  }
  function msgsHtml(c) {
    var list = c.msgs || [];
    if (!list.length) return '<p class="t-body ms-first">' + esc(t(c.kind === 'class' ? 'app_ms_first_class' : 'app_ms_first_teacher')) + '</p>';
    var out = '', last = '';
    list.forEach(function (m) {
      var d = new Date(m.created_at).toDateString();
      if (d !== last) { out += '<p class="ms-day">' + esc(dayLabel(m.created_at)) + '</p>'; last = d; }
      var mine = m.sender_user === M.me;
      out += '<div class="ms-msg' + (mine ? ' is-me' : '') + (m.sender_role === 'teacher' ? ' is-teacher' : '') + (m.pending ? ' is-pending' : '') + '">' +
        (mine ? '' : '<p class="ms-msg__who">' + esc(m.sender_name) + (m.sender_role === 'teacher' ? ' · ' + esc(t('app_ms_role_teacher')) : '') + '</p>') +
        '<div class="ms-bub" dir="auto">' + text(m.body) + '</div><p class="ms-msg__time">' + esc(hm(m.created_at)) + '</p></div>';
    });
    return out;
  }
  function redrawMsgs(c, stick) {
    var box = root.querySelector('[data-msgs]');
    if (!box) return;
    var atEnd = box.scrollHeight - box.scrollTop - box.clientHeight < 60;
    box.innerHTML = msgsHtml(c);
    if (stick || atEnd) box.scrollTop = box.scrollHeight;
  }

  /* ---------- A conversation ---------- */
  function openConv(c) {
    if (M.sample) return Promise.resolve();
    var ready = c.thread ? Promise.resolve(c.thread) : (c.kind === 'class' ? window.AlimunData.openThread('class', c.cohort) : Promise.resolve(null));
    return ready.then(function (id) {
      c.thread = id;
      if (!id) { c.msgs = []; return; }
      return window.AlimunData.threadMessages(id).then(function (list) { c.msgs = list; c.unread = 0; window.AlimunData.markRead(id); });
    });
  }
  function refresh(c) {
    if (M.sample || !c.thread || document.hidden) return;
    var lastAt = c.msgs && c.msgs.length ? c.msgs[c.msgs.length - 1].created_at : null;
    window.AlimunData.threadMessages(c.thread, lastAt).then(function (list) {
      list = list.filter(function (m) { return !c.msgs.some(function (x) { return x.id === m.id; }); });
      if (!list.length) return;
      c.msgs = c.msgs.filter(function (x) { return !x.pending; }).concat(list);
      redrawMsgs(c);
      window.AlimunData.markRead(c.thread);
    }).catch(function () {});
  }
  function send(c) {
    var inp = root.querySelector('.ms-in'), err = root.querySelector('[data-err]'), body = String(inp.value || '').trim();
    if (!body) return;
    if (body.length > MAX) { err.textContent = t('app_ms_too_long'); return; }
    err.textContent = '';
    var temp = { id: 'p' + Date.now(), sender_user: M.me, sender_role: 'student', sender_name: '', body: body, created_at: new Date().toISOString(), pending: true };
    c.msgs = (c.msgs || []).concat([temp]);
    inp.value = ''; grow(inp); root.querySelector('[data-send]').disabled = true;
    redrawMsgs(c, true);
    if (M.sample) { temp.pending = false; redrawMsgs(c, true); return; }
    var thread = c.thread ? Promise.resolve(c.thread) : window.AlimunData.openThread('direct', null, c.teacherId);
    thread.then(function (id) {
      c.thread = id;
      return window.AlimunData.sendMessage(id, body);
    }).then(function (row) {
      c.msgs = c.msgs.filter(function (x) { return x !== temp; }).concat(row ? [row] : []);
      redrawMsgs(c, true);
    }, function (e) {
      c.msgs = c.msgs.filter(function (x) { return x !== temp; });
      redrawMsgs(c);
      inp.value = body; grow(inp); root.querySelector('[data-send]').disabled = false;
      err.textContent = t(/too many/i.test(e && e.message || '') ? 'app_ms_slow' : 'app_ms_error');
    });
  }
  function grow(el) { el.style.height = 'auto'; el.style.height = Math.min(180, el.scrollHeight) + 'px'; }

  /* ---------- Errors ---------- */
  function errorView() {
    return '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_messages')) + '</h1></div></div>' +
      '<div class="soon rise"><div class="stage" style="--i:0;background:var(--t-coral)"><div class="bub think">' + esc(t('app_book_error_bub')) + '</div>' + A.Cast.drawing('cat') + '</div>' +
      '<div class="card" style="--i:1"><p class="t-body">' + esc(t('app_book_error')) + '</p><div class="btn-row"><a class="btn btn--primary" href="#/messages">' + esc(t('app_retry')) + '</a></div></div></div>';
  }

  /* ---------- Events ---------- */
  function current() { var k = decodeURIComponent((location.hash.match(/^#\/messages\/(.+)$/) || [])[1] || ''); return M && M.convs.filter(function (c) { return c.key === k; })[0]; }
  function bind() {
    if (root.__messages) return;
    root.__messages = true;
    root.addEventListener('submit', function (e) {
      if (!e.target.hasAttribute || !e.target.hasAttribute('data-form')) return;
      e.preventDefault();
      var c = current(); if (c) send(c);
    });
    root.addEventListener('input', function (e) {
      if (!e.target.classList || !e.target.classList.contains('ms-in')) return;
      grow(e.target);
      var b = root.querySelector('[data-send]'); if (b) b.disabled = !e.target.value.trim();
    });
    root.addEventListener('keydown', function (e) {
      if (!e.target.classList || !e.target.classList.contains('ms-in') || e.key !== 'Enter' || e.shiftKey || e.isComposing) return;
      e.preventDefault();
      var c = current(); if (c) send(c);
    });
  }

  /* ---------- Entry ---------- */
  var mountNo = 0;
  function mount(view, parts, helpers) {
    var my = ++mountNo;
    A = helpers; root = view;
    reset();
    bind();
    document.body.classList.remove('is-reading');
    var keep = M;
    view.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + esc(t('app_book_loading')) + '">' + A.loaderInner() + '</div></div>';
    var got = keep && keep.sample && !signedIn() ? Promise.resolve(keep) : load();
    return got.then(function (d) {
      if (my !== mountNo) return { stale: true };
      M = d;
      var cur = current();
      if (cur && M.sample) cur.unread = 0;
      return (cur ? openConv(cur) : Promise.resolve()).then(function () { return { html: pageView(cur), title: cur ? cur.title : t('app_nav_messages'), cur: cur }; });
    }).catch(function (e) {
      console.warn('[Alimun] Messages did not load', e && e.message);
      return { html: errorView(), title: t('app_nav_messages') };
    }).then(function (res) {
      if (res.stale || my !== mountNo) return { stale: true };
      view.innerHTML = res.html;
      if (res.cur) {
        /* A conversation takes the whole phone screen: the bottom bar steps aside for the message box */
        document.body.classList.add('is-reading');
        var box = root.querySelector('[data-msgs]'); if (box) box.scrollTop = box.scrollHeight;
        poll = setInterval(function () { refresh(res.cur); }, POLL_MS);
      }
      return res;
    });
  }
  function reset() { if (poll) { clearInterval(poll); poll = null; } }

  window.AlimunMessages = { mount: mount, reset: reset, debug: function () { return M; } };
})();
