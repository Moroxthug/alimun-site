/* Alimun teacher dashboard, Messages (docs/DASHBOARD_PLAN.md, step 15, part 6; tables from step 13,
   supabase/migrations/202610251800_messages.sql). Routes: #/messages, #/messages/class/<cohort>, #/messages/student/<id>.
   One conversation per class the teacher teaches, and one per student (class students and 1:1 students) who has
   written or whom the teacher writes to. Sign-in, permissions, sender names and the sending limit are the database's;
   this screen only shows and sends, as plain text. Replaces the temporary /app/messages page.
   Signed out or not a teacher: sample conversations, nothing is sent. Text: app_ms_* and app_tm_* keys. */
(function () {
  'use strict';
  var A = null, root = null, S = null, poll = null;
  var DAY = 86400000;
  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real'; }
  function text(s) { return String(s || '').split(/\n/).map(esc).join('<br>'); }
  function hm(iso) { return A.fmt(iso, { hour: '2-digit', minute: '2-digit' }); }
  function dayLabel(iso) {
    var d = new Date(iso), now = new Date();
    if (d.toDateString() === now.toDateString()) return t('app_ms_today');
    if (d.toDateString() === new Date(now.getTime() - DAY).toDateString()) return t('app_ms_yesterday');
    return A.cap(A.fmt(d, { weekday: 'long', day: 'numeric', month: 'long' }));
  }

  /* ---------- Data ---------- */
  function sample() {
    var now = Date.now(), ago = function (m) { return new Date(now - m * 60000).toISOString(); };
    var cos = [{ id: 'c1', language: 'German', level: 'B1', tier: 'focused' }, { id: 'c2', language: 'German', level: 'A2', tier: 'intensive' }];
    var students = [{ id: 'p1', name: 'Lukas Brandt', cohorts: ['c1'] }, { id: 'p2', name: 'Mei Chen', cohorts: ['c1'] }, { id: 'p6', name: 'Yuki Tanaka', cohorts: ['c2'] }, { id: 'p9', name: 'Hannah Okafor', cohorts: [], oto: true }];
    var me = 'me';
    return { sample: true, me: me, cohorts: cos, students: students, convs: [
      { key: 'class/c1', kind: 'class', cohort: 'c1', thread: 't1', unread: 2, msgs: [
        { id: 'a', sender_user: 'u2', sender_role: 'student', sender_name: 'Mei', body: 'Guten Abend! Is the homework for Thursday or next week?', created_at: ago(140) },
        { id: 'b', sender_user: me, sender_role: 'teacher', sender_name: 'Ana Weber', body: 'For Thursday, please. Eighty words is enough.', created_at: ago(120) },
        { id: 'c', sender_user: 'u1', sender_role: 'student', sender_name: 'Lukas', body: 'Danke! Bis Donnerstag.', created_at: ago(30) },
        { id: 'd', sender_user: 'u3', sender_role: 'student', sender_name: 'Omar', body: 'I will be ten minutes late tonight, sorry.', created_at: ago(12) }] },
      { key: 'class/c2', kind: 'class', cohort: 'c2', thread: 't2', unread: 0, msgs: [] },
      { key: 'student/p9', kind: 'direct', student: 'p9', thread: 't3', unread: 0, msgs: [
        { id: 'e', sender_user: 'u9', sender_role: 'student', sender_name: 'Hannah', body: 'Could we spend our next 1:1 on job interviews?', created_at: ago(60 * 26) },
        { id: 'f', sender_user: me, sender_role: 'teacher', sender_name: 'Ana Weber', body: 'Gute Idee. Bring a job advert you like and we will practise with it.', created_at: ago(60 * 25) }] }
    ] };
  }
  function load() {
    if (!real()) return Promise.resolve(sample());
    return Promise.all([window.AlimunData.teacherHomework(), window.AlimunData.myThreads(), window.AlimunData.userId()]).then(function (r) {
      var h = r[0], threads = r[1] || [];
      if (!h || !h.teacher) return sample();
      var convs = [];
      h.cohorts.filter(function (co) { return co.status !== 'cancelled'; }).forEach(function (co) {
        var th = threads.filter(function (x) { return x.kind === 'class' && x.cohort_id === co.id; })[0];
        convs.push({ key: 'class/' + co.id, kind: 'class', cohort: co.id, thread: th && th.thread_id, unread: th ? th.unread : 0, last: th });
      });
      threads.filter(function (x) { return x.kind === 'direct'; }).forEach(function (th) {
        convs.push({ key: 'student/' + th.student_id, kind: 'direct', student: th.student_id, thread: th.thread_id, unread: th.unread, last: th });
      });
      return { me: r[2], cohorts: h.cohorts, students: h.students, convs: convs };
    }).catch(function (e) {
      /* The tables are missing or the call failed: say so instead of showing a sample */
      console.warn('[Alimun] Messages did not load', e && e.message);
      return { error: true };
    });
  }
  function cohortOf(id) { return S.cohorts.filter(function (c) { return c.id === id; })[0] || null; }
  function studentOf(id) { return S.students.filter(function (s) { return s.id === id; })[0] || null; }
  function titleOf(c) {
    if (c.kind === 'class') { var co = cohortOf(c.cohort); return co ? A.className(co) : ''; }
    var s = studentOf(c.student); return s ? s.name : t('app_tm_student');
  }
  function lastOf(c) {
    if (c.msgs && c.msgs.length) { var m = c.msgs[c.msgs.length - 1]; return { body: m.body, who: m.sender_user === S.me ? '' : m.sender_name, at: m.created_at }; }
    if (c.last && c.last.last_body) return { body: c.last.last_body, who: c.last.last_sender, at: c.last.last_message_at };
    return null;
  }

  /* ---------- Drawing ---------- */
  function view(cur) {
    var head = '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_t_nav_messages')) + '</h1><p class="t-lead">' + esc(t('app_tm_lead')) + '</p></div></div>';
    if (S.error) return head + '<div class="card"><p class="t-body">' + esc(t('app_ms_error')) + '</p></div>';
    var started = {}; S.convs.forEach(function (c) { if (c.student) started[c.student] = true; });
    var pick = S.students.filter(function (s) { return !started[s.id]; }).sort(function (a, b) { return a.name.localeCompare(b.name, A.locale); });
    var list = S.convs.slice().sort(function (a, b) { var x = lastOf(a), y = lastOf(b); return String(y ? y.at : '').localeCompare(String(x ? x.at : '')); });
    var nav = '<nav class="ms-list" aria-label="' + esc(t('app_ms_convs')) + '">' + list.map(function (c) {
      var on = cur && cur.key === c.key, l = lastOf(c), pv = l ? (l.who ? l.who + ': ' : '') + l.body : '';
      return '<a class="ms-conv' + (on ? ' is-on' : '') + (c.unread ? ' is-unread' : '') + '" href="#/messages/' + esc(c.key) + '"' + (on ? ' aria-current="page"' : '') + '>' +
        '<span class="ms-conv__txt"><b>' + esc(titleOf(c)) + '</b><span>' + esc(t(c.kind === 'class' ? 'app_tm_class_sub' : 'app_tm_student_sub')) + '</span>' + (pv ? '<span class="ms-conv__pv" dir="auto">' + esc(pv.slice(0, 90)) + '</span>' : '') + '</span>' +
        (c.unread ? '<span class="ms-conv__new">' + esc(A.tn('app_ms_new', c.unread)) + '</span>' : '') + '</a>';
    }).join('') +
      (pick.length ? '<label class="tm-start"><span class="t-small">' + esc(t('app_tm_start')) + '</span><select class="st-in" data-start><option value="">…</option>' + pick.map(function (s) { return '<option value="' + esc(s.id) + '">' + esc(s.name || t('app_tm_student')) + '</option>'; }).join('') + '</select></label>' : '') +
      (!list.length ? '<p class="t-body" style="padding:12px">' + esc(t('app_tm_none')) + '</p>' : '') + '</nav>';
    return head + '<div class="ms tms' + (cur ? ' has-conv' : '') + ' rise">' + nav + '<section class="ms-main" aria-live="polite">' + (cur ? convHtml(cur) :
      '<div class="ms-empty"><div class="ms-empty__art" aria-hidden="true">' + A.Cast.drawing('alien') + '</div><p class="t-body">' + esc(t('app_ms_pick')) + '</p></div>') + '</section>' +
      (S.sample ? '<p class="t-tiny ms-sample">' + esc(t('app_ms_sample')) + '</p>' : '') + '</div>';
  }
  function convHtml(c) {
    return '<header class="ms-head"><a class="rd-back ms-back" href="#/messages">' + A.icon('back') + '<span>' + esc(t('app_ms_convs')) + '</span></a><h2 class="t-h3">' + esc(titleOf(c)) + '</h2>' +
      '<p class="t-small">' + esc(t(c.kind === 'class' ? 'app_tm_class_who' : 'app_tm_student_who')) + '</p></header>' +
      '<div class="ms-msgs" data-msgs>' + msgsHtml(c) + '</div>' +
      '<form class="ms-form" data-form><label class="sr" for="tms-in">' + esc(t('app_ms_write')) + '</label><textarea id="tms-in" class="ms-in" rows="1" maxlength="4000" placeholder="' + esc(t('app_ms_write')) + '" dir="auto"></textarea>' +
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
  function redrawMsgs(c) { var m = root.querySelector('[data-msgs]'); if (m) { m.innerHTML = msgsHtml(c); m.scrollTop = m.scrollHeight; } }

  /* ---------- Conversations ---------- */
  function find(parts) {
    if (!parts[0] || !parts[1]) return null;
    var key = parts[0] + '/' + parts[1], c = S.convs.filter(function (x) { return x.key === key; })[0];
    if (!c && parts[0] === 'student' && studentOf(parts[1])) { c = { key: key, kind: 'direct', student: parts[1], msgs: [], unread: 0 }; S.convs.push(c); }
    if (!c && parts[0] === 'class' && cohortOf(parts[1])) { c = { key: key, kind: 'class', cohort: parts[1], unread: 0 }; S.convs.push(c); }
    return c;
  }
  function open(c) {
    if (S.sample) { c.unread = 0; return Promise.resolve(); }
    var ready = c.thread ? Promise.resolve(c.thread) : c.kind === 'class' ? window.AlimunData.openThread('class', c.cohort) : Promise.resolve(null);
    return ready.then(function (id) {
      c.thread = id;
      if (!id) { c.msgs = c.msgs || []; return; }
      return window.AlimunData.threadMessages(id).then(function (list) { c.msgs = list; c.unread = 0; window.AlimunData.markRead(id).catch(function () {}); });
    });
  }
  function refresh(c) {
    if (!c.thread || document.hidden || S.sample) return;
    var lastAt = c.msgs && c.msgs.length ? c.msgs[c.msgs.length - 1].created_at : null;
    window.AlimunData.threadMessages(c.thread, lastAt).then(function (list) {
      list = list.filter(function (m) { return !c.msgs.some(function (x) { return x.id === m.id; }); });
      if (!list.length) return;
      c.msgs = c.msgs.filter(function (x) { return !x.pending; }).concat(list);
      redrawMsgs(c);
      window.AlimunData.markRead(c.thread).catch(function () {});
    }).catch(function () { /* next tick */ });
  }
  function send(c) {
    var inp = root.querySelector('.ms-in'), err = root.querySelector('[data-err]'), body = String(inp.value || '').trim();
    if (!body) return;
    var temp = { id: 'p' + Date.now(), sender_user: S.me, sender_role: 'teacher', body: body, created_at: new Date().toISOString(), pending: !S.sample };
    c.msgs = (c.msgs || []).concat([temp]);
    inp.value = ''; inp.style.height = ''; root.querySelector('[data-send]').disabled = true; err.textContent = '';
    redrawMsgs(c);
    if (S.sample) return;
    var thread = c.thread ? Promise.resolve(c.thread) : window.AlimunData.openThread('direct', null, null, c.student);
    thread.then(function (id) { c.thread = id; return window.AlimunData.sendMessage(id, body); }).then(function (row) {
      c.msgs = c.msgs.filter(function (x) { return x !== temp; }).concat(row ? [row] : []);
      redrawMsgs(c);
    }, function (e) {
      c.msgs = c.msgs.filter(function (x) { return x !== temp; });
      redrawMsgs(c);
      inp.value = body; root.querySelector('[data-send]').disabled = false;
      err.textContent = t(/too many/i.test(e && e.message || '') ? 'app_ms_slow' : 'app_ms_error');
    });
  }
  function current() { var p = location.hash.replace(/^#\/messages\/?/, '').split('/').filter(Boolean); return S ? S.convs.filter(function (x) { return x.key === p.join('/'); })[0] : null; }
  function bind() {
    if (root.__tmessages) return;
    root.__tmessages = true;
    root.addEventListener('submit', function (e) { if (e.target.hasAttribute('data-form') && S && root.querySelector('.tms')) { e.preventDefault(); var c = current(); if (c) send(c); } });
    root.addEventListener('input', function (e) {
      if (!e.target.classList.contains('ms-in') || !root.querySelector('.tms')) return;
      e.target.style.height = 'auto'; e.target.style.height = Math.min(180, e.target.scrollHeight) + 'px';
      var b = root.querySelector('[data-send]'); if (b) b.disabled = !e.target.value.trim();
    });
    root.addEventListener('keydown', function (e) {
      if (!e.target.classList.contains('ms-in') || !root.querySelector('.tms') || e.key !== 'Enter' || e.shiftKey || e.isComposing) return;
      e.preventDefault(); var c = current(); if (c) send(c);
    });
    root.addEventListener('change', function (e) {
      if (!e.target.hasAttribute('data-start') || !e.target.value) return;
      location.hash = '#/messages/student/' + e.target.value;
    });
  }

  var mountNo = 0;
  function mount(view_, parts, helpers) {
    var my = ++mountNo;
    A = helpers; root = view_;
    bind(); stop();
    root.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + esc(t('app_book_loading')) + '">' + A.loaderInner() + '</div></div>';
    return (S ? Promise.resolve() : load().then(function (d) { S = d; })).then(function () {
      if (my !== mountNo) return { stale: true };
      var c = S.error ? null : find(parts);
      return (c ? open(c) : Promise.resolve()).then(function () {
        if (my !== mountNo) return { stale: true };
        document.body.classList.toggle('is-reading', !!c);
        root.innerHTML = view(c);
        var m = root.querySelector('[data-msgs]'); if (m) m.scrollTop = m.scrollHeight;
        if (c) poll = setInterval(function () { refresh(c); }, 8000);
        return { title: c ? titleOf(c) : t('app_t_nav_messages') };
      });
    }).catch(function (e) {
      console.warn('[Alimun] Messages did not open', e && e.message);
      if (my === mountNo) root.innerHTML = '<div class="card"><p class="t-body">' + esc(t('app_ms_error')) + '</p></div>';
      return { stale: true };
    });
  }
  function stop() { if (poll) { clearInterval(poll); poll = null; } }
  function reset() { stop(); }
  window.AlimunTeachMessages = { mount: mount, reset: reset };
})();
