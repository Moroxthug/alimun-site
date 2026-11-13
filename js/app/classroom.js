/* Alimun: the live classroom around the video and the board, shared by the teacher's (js/app/teach-classes.js) and the
   student's (js/app/classes.js) dashboards. Owner, 10 Nov 2026: a cleaner top, made for phones, an animated change
   between the small and the large video, a notice for every new message and every person who joins, the class notes
   one tap away for the teacher.
   shell(o) returns the page; start(o) wires it: the side panel (chat, words, notes), the video size, the board layout,
   the class conversation (open_thread 'class', refreshed every 6 seconds and at once when someone in the call sends,
   through a Daily app message), and the notices. On phones the side panel is a sheet opened from a button. */
(function () {
  'use strict';
  var P = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  var ICONS = {
    back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    grow: '<path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7"/>',
    shrink: '<path d="M20 4l-7 7M13 5v6h6M4 20l7-7M11 19v-6H5"/>',
    board: '<rect x="3" y="4" width="18" height="13" rx="2.5"/><path d="M8 21l4-4 4 4"/>',
    notes: '<path d="M6 3.5h9l4 4V20a.5.5 0 0 1-.5.5h-12A.5.5 0 0 1 6 20z"/><path d="M14.5 3.5V8H19M9 12h7M9 16h5"/>',
    chat: '<path d="M20 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.2A8 8 0 1 1 20 12z"/>',
    words: '<path d="M12 6.5C10.4 5 8.2 4.5 4 4.8v13.4c4.2-.3 6.4.2 8 1.8 1.6-1.6 3.8-2.1 8-1.8V4.8c-4.2-.3-6.4.2-8 1.7z"/><path d="M12 6.5V20"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    send: '<path d="M4 12 20 4l-6 16-3-7z"/><path d="m11 13 9-9"/>',
    person: '<circle cx="12" cy="8.5" r="3.6"/><path d="M5 20c.8-3.8 3.6-6 7-6s6.2 2.2 7 6"/>'
  };
  function icon(n) { return '<svg class="cr-i" viewBox="0 0 24 24" ' + P + ' aria-hidden="true" focusable="false">' + ICONS[n] + '</svg>'; }
  var reduced = function () { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; };
  var phone = function () { return window.matchMedia && window.matchMedia('(max-width: 899px)').matches; };

  /* The page, in the dashboard's own parts: the back link and the big heading of every dashboard page, the standard
     buttons, cards for the board and the side panel, and the cast with a speech bubble while the video opens.
     o: { A, role, title, sub (html, already escaped), back, board (bool), actions (html), tabs: [{ id, label, icon, html }], art, wait } */
  function shell(o) {
    var A = o.A, t = A.t, esc = A.esc, tabs = o.tabs || [];
    var art = A.Cast && A.Cast.drawing ? A.Cast.drawing(o.art || 'mug') : '';
    return '<div class="cr" data-cr data-role="' + esc(o.role) + '">' +
      '<a class="rd-back" href="' + esc(o.back || '#/classes') + '">' + A.icon('back') + '<span>' + esc(t('app_cl_leave')) + '</span></a>' +
      '<div class="view__head cr-head"><div><h1 class="t-h1">' + esc(o.title) + '</h1>' + (o.sub ? '<p class="t-lead">' + o.sub + '</p>' : '') +
        /* Group classes may be recorded by Alimun only (owner, 13 Nov 2026): said before anyone joins */
        (o.board ? '<p class="t-small cr-rec">' + esc(t('app_cr_rec_note')) + '</p>' : '') + '</div>' +
        (o.actions ? '<div class="btn-row cr-actions">' + o.actions + '</div>' : '') + '</div>' +
      '<div class="cr-body rise">' +
        (o.board ? '<section class="card cr-board" data-board hidden style="--i:0" aria-label="' + esc(t('app_bd_open')) + '"></section>' : '') +
        '<div class="cr-video" data-cr-video style="--i:1"><div class="cr-frame" data-frame><div class="cl-live__wait cr-wait"><div class="bub say" data-livemsg>' + esc(o.wait || '') + '</div>' + art +
          '<div class="loader" style="--w:46px" aria-hidden="true">' + A.loaderInner() + '</div></div></div>' +
          '<button class="icon-btn cr-grow" type="button" data-cr="grow" aria-pressed="false" aria-label="' + esc(t('app_cr_bigger')) + '" title="' + esc(t('app_cr_bigger')) + '">' + icon('grow') + '</button></div>' +
        (tabs.length ? '<aside class="card cr-side" data-cr-side style="--i:2" aria-label="' + esc(t('app_cr_panel')) + '"><div class="cr-tabs" role="tablist">' +
          tabs.map(function (x, i) { return '<button class="btn btn--sm ' + (i === 0 ? 'btn--primary' : 'btn--quiet') + ' cr-tab" type="button" role="tab" id="cr-tab-' + esc(x.id) + '" aria-controls="cr-p-' + esc(x.id) + '" aria-selected="' + (i === 0) + '" data-cr="tab" data-k="' + esc(x.id) + '">' + icon(x.icon) + '<span>' + esc(x.label) + '</span><b class="cr-dot" data-cr-dot="' + esc(x.id) + '" hidden></b></button>'; }).join('') +
          '<button class="icon-btn cr-x" type="button" data-cr="sheet" aria-label="' + esc(t('app_cr_close')) + '">' + icon('close') + '</button></div>' +
          tabs.map(function (x, i) { return '<div class="cr-panel" role="tabpanel" id="cr-p-' + esc(x.id) + '" aria-labelledby="cr-tab-' + esc(x.id) + '" data-cr-panel="' + esc(x.id) + '"' + (i ? ' hidden' : '') + '>' + x.html + '</div>'; }).join('') +
        '</aside>' : '') +
      '</div>' +
      (tabs.length ? '<button class="btn btn--primary cr-fab" type="button" data-cr="sheet" aria-expanded="false">' + icon('chat') + '<span>' + esc(t('app_cr_chat')) + '</span><b class="cr-count" data-cr-count hidden></b></button>' : '') +
      '<div class="cr-toasts" data-cr-toasts aria-live="polite"></div></div>';
  }
  function chatHtml(A) {
    var t = A.t, esc = A.esc;
    return '<div class="ms-msgs cr-msgs" data-msgs><p class="t-small">' + esc(t('app_tc_chat_loading')) + '</p></div>' +
      '<form class="ms-form cr-send" data-cr-chat><label class="sr" for="cr-in">' + esc(t('app_ms_write')) + '</label><textarea id="cr-in" class="ms-in" rows="1" maxlength="4000" placeholder="' + esc(t('app_ms_write')) + '" dir="auto"></textarea>' +
      '<button class="btn btn--primary btn--sm" type="submit">' + esc(t('app_ms_send')) + '</button></form>';
  }
  function wordsHtml(A, words, lang) {
    var esc = A.esc;
    return '<dl class="lb-wl cr-words">' + words.slice(0, 20).map(function (v) { return '<div><dt lang="' + esc(lang || 'en') + '" dir="ltr">' + esc(v.word) + '</dt><dd>' + esc(v.definition || '') + '</dd></div>'; }).join('') + '</dl>';
  }

  /* Moves an element from where it was to where change() puts it, smoothly (FLIP) */
  function flip(el, change) {
    if (!el || reduced()) { change(); return; }
    var a = el.getBoundingClientRect();
    change();
    var b = el.getBoundingClientRect();
    if (!a.width || !b.width || (Math.abs(a.left - b.left) < 1 && Math.abs(a.top - b.top) < 1 && Math.abs(a.width - b.width) < 1 && Math.abs(a.height - b.height) < 1)) return;
    el.style.transition = 'none';
    el.style.transformOrigin = '0 0';
    el.style.transform = 'translate(' + (a.left - b.left) + 'px,' + (a.top - b.top) + 'px) scale(' + (a.width / b.width) + ',' + (a.height / b.height) + ')';
    void el.offsetWidth;
    el.style.transition = 'transform 460ms cubic-bezier(.2, .8, .2, 1)';
    el.style.transform = '';
    var done = function () { el.style.transition = ''; el.style.transformOrigin = ''; el.removeEventListener('transitionend', done); };
    el.addEventListener('transitionend', done);
  }

  /* A short, quiet two-note chime for new messages and arrivals (no file to load) */
  var audio = null;
  function chime(soft) {
    try {
      audio = audio || new (window.AudioContext || window.webkitAudioContext)();
      if (audio.state === 'suspended') audio.resume();
      [[660, 0], [880, 0.11]].forEach(function (n) {
        var o = audio.createOscillator(), g = audio.createGain(), at = audio.currentTime + n[1];
        o.type = 'sine'; o.frequency.value = soft ? n[0] * 0.75 : n[0];
        g.gain.setValueAtTime(0, at); g.gain.linearRampToValueAtTime(soft ? 0.05 : 0.08, at + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, at + 0.32);
        o.connect(g); g.connect(audio.destination); o.start(at); o.stop(at + 0.34);
      });
    } catch (e) { /* no sound: the notice still shows */ }
  }

  /* o: { root (the view), A, role, cohortId, sample, sampleMsgs, onLayout } */
  function start(o) {
    var A = o.A, t = A.t, esc = A.esc, root = o.root;
    var cr = root.querySelector('[data-cr]'), frame = null, poll = null, chat = null, alive = true, tab = null, unread = 0;
    if (!cr) return null;
    var first = cr.querySelector('[data-cr="tab"]'); tab = first ? first.getAttribute('data-k') : null;

    /* A notice in the dashboard's speech bubble, next to the person's initials in the dashboard's avatar circle */
    function initials(n) { return String(n || '').trim().split(/\s+/).slice(0, 2).map(function (w) { return w.charAt(0); }).join('').toUpperCase() || '·'; }
    function toast(text, kind, who) {
      var box = cr.querySelector('[data-cr-toasts]'); if (!box) return;
      var el = document.createElement('div');
      el.className = 'cr-toast' + (kind ? ' cr-toast--' + kind : '');
      el.setAttribute('role', 'status');
      el.innerHTML = '<span class="avatar cr-toast__av" aria-hidden="true"></span><div class="bub say cr-toast__bub"><b></b><span></span></div>';
      el.querySelector('.cr-toast__av').textContent = initials(who);
      el.querySelector('b').textContent = kind === 'msg' ? (who || '') : '';
      el.querySelector('.cr-toast__bub span').textContent = text;
      box.appendChild(el);
      while (box.children.length > 3) box.removeChild(box.firstChild);
      requestAnimationFrame(function () { el.classList.add('is-in'); });
      setTimeout(function () { el.classList.remove('is-in'); setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 400); }, 4800);
      if (kind === 'msg') el.addEventListener('click', function () { openTab('chat'); });
    }
    function sheetOpen() { return cr.classList.contains('is-sheet'); }
    function chatSeen() { return tab === 'chat' && (!phone() || sheetOpen()) && !document.hidden; }
    function setUnread(n) {
      unread = n;
      var dot = cr.querySelector('[data-cr-dot="chat"]'), cnt = cr.querySelector('[data-cr-count]');
      if (dot) dot.hidden = !n;
      if (cnt) { cnt.hidden = !n; cnt.textContent = n > 9 ? '9+' : String(n); }
    }
    function openTab(k) {
      var b = cr.querySelector('[data-cr="tab"][data-k="' + k + '"]'); if (!b) return;
      tab = k;
      cr.querySelectorAll('[data-cr="tab"]').forEach(function (x) { x.setAttribute('aria-selected', String(x === b)); x.classList.toggle('btn--primary', x === b); x.classList.toggle('btn--quiet', x !== b); });
      cr.querySelectorAll('[data-cr-panel]').forEach(function (p) { p.hidden = p.getAttribute('data-cr-panel') !== k; });
      if (phone() && !sheetOpen()) setSheet(true);
      if (k === 'chat') { setUnread(0); var m = cr.querySelector('[data-msgs]'); if (m) m.scrollTop = m.scrollHeight; }
    }
    function setSheet(on) {
      cr.classList.toggle('is-sheet', on);
      var f = cr.querySelector('.cr-fab'); if (f) f.setAttribute('aria-expanded', String(on));
      document.documentElement.classList.toggle('cr-locked', on && phone());
      if (on && tab === 'chat') setUnread(0);
    }
    /* The video: small beside the board, or large; the change is animated */
    function setBig(on) {
      var v = cr.querySelector('[data-cr-video]'), g = cr.querySelector('[data-cr="grow"]');
      flip(v, function () { cr.classList.toggle('is-big', on); });
      if (g) { g.setAttribute('aria-pressed', String(on)); g.innerHTML = icon(on ? 'shrink' : 'grow'); g.setAttribute('aria-label', t(on ? 'app_cr_smaller' : 'app_cr_bigger')); g.title = t(on ? 'app_cr_smaller' : 'app_cr_bigger'); }
      if (o.onLayout) setTimeout(o.onLayout, 480);
    }
    function setBoard(on) {
      var el = cr.querySelector('[data-board]'), v = cr.querySelector('[data-cr-video]');
      if (!el) return;
      if (cr.classList.contains('has-board') === on && el.hidden === !on) return;
      flip(v, function () { cr.classList.toggle('has-board', on); if (!on) cr.classList.remove('is-big'); el.hidden = !on; });
      var g = cr.querySelector('[data-cr="grow"]'); if (g && !on) { g.setAttribute('aria-pressed', 'false'); g.innerHTML = icon('grow'); }
      if (on) { el.classList.remove('is-in'); requestAnimationFrame(function () { el.classList.add('is-in'); }); }
      if (o.onLayout) { o.onLayout(); setTimeout(o.onLayout, 480); }
    }

    /* ---------- The class conversation ---------- */
    function time(at) { return A.fmt ? A.fmt(at, { hour: '2-digit', minute: '2-digit' }) : new Date(at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); }
    function drawChat(stick) {
      var b = cr.querySelector('[data-msgs]');
      if (!b || !chat) return;
      var atEnd = b.scrollHeight - b.scrollTop - b.clientHeight < 60;
      b.innerHTML = chat.msgs.length ? chat.msgs.map(function (m) {
        var mine = m.sender_user === chat.me;
        return '<div class="ms-msg' + (mine ? ' is-me' : '') + (m.sender_role === 'teacher' ? ' is-teacher' : '') + '">' + (mine ? '' : '<p class="ms-msg__who">' + esc(m.sender_name || t('app_cr_someone')) + '</p>') +
          '<div class="ms-bub" dir="auto">' + esc(m.body).replace(/\n/g, '<br>') + '</div><p class="ms-msg__time">' + esc(time(m.created_at)) + '</p></div>';
      }).join('') : '<p class="t-small">' + esc(t('app_tc_chat_empty')) + '</p>';
      if (stick || atEnd) b.scrollTop = b.scrollHeight;
    }
    function arrived(list) {
      var fresh = list.filter(function (m) { return m.sender_user !== chat.me; });
      if (!fresh.length) return;
      var last = fresh[fresh.length - 1];
      toast(String(last.body || '').replace(/\s+/g, ' ').slice(0, 110), 'msg', last.sender_name || t('app_cr_someone'));
      chime(false);
      if (!chatSeen()) setUnread(unread + fresh.length);
    }
    function fetchNew() {
      if (!chat || !chat.id || !alive) return;
      var lastAt = chat.msgs.length ? chat.msgs[chat.msgs.length - 1].created_at : null;
      window.AlimunData.threadMessages(chat.id, lastAt).then(function (m) {
        if (!m.length || !chat) return;
        var have = {}; chat.msgs.forEach(function (x) { have[x.id] = true; });
        var add = m.filter(function (x) { return !have[x.id]; });
        if (!add.length) return;
        chat.msgs = chat.msgs.concat(add);
        drawChat(false); arrived(add);
        if (chatSeen()) window.AlimunData.markRead(chat.id).catch(function () {});
      }).catch(function () { /* try again on the next tick */ });
    }
    function chatStart() {
      if (!cr.querySelector('[data-msgs]')) return;
      if (o.sample || !o.cohortId) { chat = { id: null, me: 'me', msgs: o.sampleMsgs || [] }; drawChat(true); return; }
      Promise.all([window.AlimunData.openThread('class', o.cohortId), window.AlimunData.userId()]).then(function (r) {
        if (!alive) return;
        chat = { id: r[0], me: r[1], msgs: [] };
        return window.AlimunData.threadMessages(r[0]).then(function (m) { chat.msgs = m; drawChat(true); window.AlimunData.markRead(r[0]).catch(function () {}); });
      }).catch(function () { var b = cr.querySelector('[data-msgs]'); if (b) b.innerHTML = '<p class="t-small">' + esc(t('app_tc_chat_error')) + '</p>'; });
      poll = setInterval(function () { if (!document.hidden) fetchNew(); }, 6000);
    }
    function chatSend(form) {
      var ta = form.querySelector('textarea'), body = ta.value.trim();
      if (!body || !chat) return;
      ta.value = ''; ta.style.height = '';
      if (o.sample || !chat.id) { chat.msgs.push({ id: 'l' + Date.now(), sender_user: 'me', sender_role: o.role, sender_name: '', body: body, created_at: new Date().toISOString() }); drawChat(true); return; }
      window.AlimunData.sendMessage(chat.id, body).then(function (m) {
        if (m && chat) { chat.msgs.push(m); drawChat(true); }
        /* Everyone in the call fetches it now instead of on their next tick */
        if (frame) { try { frame.sendAppMessage({ a: 'cr1', k: 'chat' }, '*'); } catch (e) { /* not in the call */ } }
      }, function () { ta.value = body; });
    }

    /* ---------- The call ---------- */
    function nameOf(e) { var p = e && e.participant; return p && (p.user_name || '').trim() ? p.user_name.trim().slice(0, 60) : t('app_cr_someone'); }
    function onJoined(e) { if (e && e.participant && !e.participant.local) { toast(t('app_cr_joined', { name: nameOf(e) }), 'join', nameOf(e)); chime(true); } }
    function onLeft(e) { if (e && e.participant && !e.participant.local) toast(t('app_cr_left', { name: nameOf(e) }), 'join', nameOf(e)); }
    function onApp(e) { var m = e && e.data; if (m && m.a === 'cr1' && m.k === 'chat') fetchNew(); }
    function attach(f) {
      detach(); frame = f;
      if (!f) return;
      f.on('participant-joined', onJoined); f.on('participant-left', onLeft); f.on('app-message', onApp);
    }
    function detach() {
      if (!frame) return;
      try { frame.off('participant-joined', onJoined); frame.off('participant-left', onLeft); frame.off('app-message', onApp); } catch (e) { /* gone */ }
      frame = null;
    }

    /* ---------- Events ---------- */
    function onClick(e) {
      var b = e.target.closest('[data-cr]'); if (!b || !cr.contains(b)) return;
      var k = b.getAttribute('data-cr');
      if (k === 'tab') openTab(b.getAttribute('data-k'));
      else if (k === 'grow') setBig(!cr.classList.contains('is-big'));
      else if (k === 'sheet') setSheet(!sheetOpen());
      else if (k === 'open') { openTab(b.getAttribute('data-k')); }
    }
    function onSubmit(e) { var f = e.target.closest('[data-cr-chat]'); if (f) { e.preventDefault(); chatSend(f); } }
    function onKey(e) {
      var ta = e.target.closest && e.target.closest('[data-cr-chat] textarea');
      if (ta && e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); chatSend(ta.form); return; }
      if (e.key === 'Escape' && sheetOpen()) setSheet(false);
    }
    function onInput(e) { var ta = e.target.closest && e.target.closest('[data-cr-chat] textarea'); if (ta) { ta.style.height = 'auto'; ta.style.height = Math.min(140, ta.scrollHeight) + 'px'; } }
    function onVis() { if (!document.hidden && chatSeen()) setUnread(0); }
    cr.addEventListener('click', onClick);
    cr.addEventListener('submit', onSubmit);
    cr.addEventListener('keydown', onKey);
    cr.addEventListener('input', onInput);
    document.addEventListener('visibilitychange', onVis);
    document.body.classList.add('is-class');
    chatStart();

    function destroy() {
      alive = false; detach();
      if (poll) { clearInterval(poll); poll = null; }
      cr.removeEventListener('click', onClick); cr.removeEventListener('submit', onSubmit); cr.removeEventListener('keydown', onKey); cr.removeEventListener('input', onInput);
      document.removeEventListener('visibilitychange', onVis);
      document.body.classList.remove('is-class');
      document.documentElement.classList.remove('cr-locked');
    }
    var api = { attach: attach, board: setBoard, big: setBig, tab: openTab, toast: toast, destroy: function () { destroy(); if (window.AlimunClassroom.current === api) window.AlimunClassroom.current = null; } };
    window.AlimunClassroom.current = api;
    return api;
  }

  window.AlimunClassroom = { shell: shell, start: start, chatHtml: chatHtml, wordsHtml: wordsHtml, icon: icon };
})();
