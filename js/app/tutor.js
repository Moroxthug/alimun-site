/* Alimun app: the tutor (docs/AI_TUTOR_PLAN.md).
   Part 1: the student's tutor time as the server counts it (/api/tutor?action=status): the free 10 minutes given once,
   this month's plan minutes and minutes added or bought. The browser only shows the time; the server gives and takes it.
   Part 2: a written session beside a whiteboard. The tutor writes on the board (titles, lines with **bold** words,
   notes, corrections, small tables) and sets exercises there, played by the shared engine (js/app/exercises.js); when the
   student has answered every item, the results go back to the tutor as their turn. /api/tutor?action=start|turn|end;
   past sessions, transcripts and what the tutor remembers are read straight from the database (the student's own rows),
   and "Forget everything" goes through /api/tutor?action=forget.
   Part 3: voice. "Speak" records the student (at most 30 seconds); the recording goes to /api/tutor?action=turn, where
   Groq Whisper writes it down in the language being learned and drops it; the words appear as the student's message.
   After each reply the tutor's words are spoken (/api/tutor?action=voice: the server's stored text, once per message,
   Orus or Sulafat through Google Cloud) and kept in the page to hear again. The voice can be turned off (remembered in
   this browser); if Google refuses or is slow, the reply simply stays written. The voice stops when the time runs out.
   Sample (signed out or ?sample=1): a short scripted session in German, nothing is sent.
   Routes: #/tutor, #/tutor/session, #/tutor/past/<id>. Interface text: app_tu_* keys. */
(function () {
  'use strict';
  var A = null, root = null, mountNo = 0;
  var S = null;  /* { status, session, messages, board, ex, exMsg, busy, ended, summary, error, sessions, memory, sample } */
  var EX = function () { return window.AlimunEx; };
  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function signedIn() { return A.mode() === 'real' && A.data().profile && A.data().profile.id; }
  function D() { return window.AlimunData; }
  function langCode() { return D().langCode(A.data().profile.language) || 'en'; }
  function ta() { return ' lang="' + esc(langCode()) + '" dir="ltr"'; }

  /* Whole minutes, with each language's own plural forms */
  function mins(sec) { return new Intl.NumberFormat(A.locale, { style: 'unit', unit: 'minute', unitDisplay: 'long' }).format(Math.floor((sec || 0) / 60)); }
  function day(iso, opts) { return new Intl.DateTimeFormat(A.locale, opts || { day: 'numeric', month: 'long', timeZone: 'UTC' }).format(new Date(iso)); }
  function row(big, small) { return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(big) + '</span><span><small>' + esc(small) + '</small></span></div>'; }
  function loader(w) { return '<div class="loader" style="--w:' + (w || 72) + 'px" role="img" aria-label="' + esc(t('app_book_loading')) + '">' + A.loaderInner() + '</div>'; }

  /* ---------- Voice (part 3) ---------- */
  var VOICE_KEY = 'alimun.tutor.voice', REC_MAX = 30;
  function voiceOn() { try { return localStorage.getItem(VOICE_KEY) !== 'off'; } catch (e) { return true; } }
  function setVoiceOn(on) { try { if (on) localStorage.removeItem(VOICE_KEY); else localStorage.setItem(VOICE_KEY, 'off'); } catch (e) { /* kept for this visit only */ } }
  function voiceReady() { return !!(S && S.status && S.status.voice); }
  function listenReady() { return !!(S && S.status && (S.status.listen || S.sample)); }
  /* One audio element for the whole session. Started once inside a tap (with a moment of silence) so that phones let
     the replies play by themselves afterwards. */
  var player = null, silent = null;
  function audioEl() {
    if (player) return player;
    player = new Audio();
    var done = function () { if (S && S.playing && (player.paused || player.ended)) { S.playing = null; hearUi(); } };
    player.addEventListener('ended', done); player.addEventListener('pause', done);
    return player;
  }
  function unlock() {
    var p = audioEl();
    if (p.__unlocked || (S && S.playing)) return;
    p.__unlocked = true;
    if (!silent) {
      var n = 400, b = new DataView(new ArrayBuffer(44 + n * 2)), w = function (o, x) { for (var i = 0; i < x.length; i++) b.setUint8(o + i, x.charCodeAt(i)); };
      w(0, 'RIFF'); b.setUint32(4, 36 + n * 2, true); w(8, 'WAVE'); w(12, 'fmt '); b.setUint32(16, 16, true); b.setUint16(20, 1, true); b.setUint16(22, 1, true);
      b.setUint32(24, 8000, true); b.setUint32(28, 16000, true); b.setUint16(32, 2, true); b.setUint16(34, 16, true); w(36, 'data'); b.setUint32(40, n * 2, true);
      silent = URL.createObjectURL(new Blob([b.buffer], { type: 'audio/wav' }));
    }
    p.src = silent;
    var r = p.play(); if (r && r.catch) r.catch(function () { /* nothing to hear */ });
  }
  function play(id) {
    var url = S.audio && S.audio[id];
    if (!url) return;
    var p = audioEl();
    p.src = url; S.playing = id;
    var r = p.play();
    if (r && r.catch) r.catch(function () { if (S && S.playing === id) { S.playing = null; hearUi(); } });
    hearUi();
  }
  function stopVoice() {
    if (player && !player.paused) player.pause();
    if (S) S.playing = null;
  }
  function forgetAudio() {
    stopVoice();
    if (S && S.audio) Object.keys(S.audio).forEach(function (k) { URL.revokeObjectURL(S.audio[k]); });
    if (S) { S.audio = {}; S.vload = null; }
  }
  /* The latest tutor message, the only one whose voice can still be asked for */
  function lastTutor() { for (var i = S.messages.length - 1; i >= 0; i--) if (S.messages[i].role === 'tutor') return S.messages[i]; return null; }
  function hearHtml(m) {
    var has = S.audio && S.audio[m.id];
    var can = has || (voiceReady() && !S.sample && !S.ended && !m.voiced && (S.seconds || 0) > 0 && m.text && lastTutor() === m);
    if (!can) return '';
    var label = S.vload === m.id ? 'app_tu_listen' : S.playing === m.id ? 'app_tu_listen_stop' : 'app_tu_listen';
    return '<button class="tu-hear" type="button" data-tu="hear" data-id="' + esc(m.id) + '"' + (S.vload === m.id ? ' disabled aria-busy="true"' : '') + '>' + esc(t(label)) + '</button>';
  }
  /* Only the listen buttons change: what the student is typing stays */
  function hearUi() {
    if (!root || !S || !S.session) return;
    S.messages.forEach(function (m) {
      if (m.role !== 'tutor') return;
      var box = root.querySelector('[data-hear-for="' + (window.CSS && CSS.escape ? CSS.escape(m.id) : m.id) + '"]');
      if (box) box.innerHTML = hearHtml(m);
    });
    var v = root.querySelector('[data-tu="voice"]');
    if (v) { v.textContent = t(voiceOn() ? 'app_tu_voice_off' : 'app_tu_voice_on'); v.setAttribute('aria-pressed', voiceOn() ? 'true' : 'false'); }
    var n = root.querySelector('[data-tu-note]'); if (n) n.textContent = S.note ? t(S.note) : '';
  }
  /* Asks the server for a message's voice once, keeps it in the page, and plays it if asked to */
  function fetchVoice(m, autoplay) {
    if (S.sample || !voiceReady() || !m || !m.text || m.voiced || (S.audio && S.audio[m.id]) || S.vload) return;
    var session = S.session;
    S.vload = m.id; hearUi();
    D().tutorVoice(session.id, m.id).then(function (blob) {
      if (!S || S.session !== session) return;
      S.vload = null; m.voiced = true;
      S.audio = S.audio || {};
      S.audio[m.id] = URL.createObjectURL(blob);
      if (autoplay && voiceOn() && lastTutor() === m && !S.rec && !S.busy) play(m.id); else hearUi();
    }, function (e) {
      if (!S || S.session !== session) return;
      S.vload = null;
      var r = e && e.body && e.body.reason;
      if (r === 'voiced') m.voiced = true;
      else if (r === 'no_time' || r === 'ended') { m.voiced = true; }
      else S.note = 'app_tu_voice_failed';
      hearUi();
    });
  }
  function hear(id) {
    if (S.playing === id) { stopVoice(); hearUi(); return; }
    unlock();
    if (S.audio && S.audio[id]) { play(id); return; }
    var m = S.messages.filter(function (x) { return x.id === id; })[0];
    if (m) fetchVoice(m, true);
  }
  function toggleVoice() {
    var on = !voiceOn();
    setVoiceOn(on);
    if (!on) stopVoice();
    hearUi();
  }

  /* ---------- Speaking to the tutor ---------- */
  function recMime() {
    var list = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus'];
    for (var k = 0; k < list.length; k++) if (window.MediaRecorder && MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(list[k])) return list[k];
    return '';
  }
  function blobBase64(blob) {
    return new Promise(function (ok, no) { var r = new FileReader(); r.onload = function () { ok(String(r.result).split(',')[1] || ''); }; r.onerror = no; r.readAsDataURL(blob); });
  }
  function showErr(key) { S.error = key; var el = root && root.querySelector('[data-tu-err]'); if (el) el.textContent = key ? t(key) : ''; }
  /* The form while recording: the button stops and sends, writing waits, the seconds left are read out */
  function recUi() {
    if (!root || !S) return;
    var b = root.querySelector('[data-tu="rec"]'), send = root.querySelector('[data-tu-send]'), inp = root.querySelector('#tu-in'), line = root.querySelector('[data-tu-rec]');
    var on = !!S.rec;
    if (b) { b.textContent = t(on ? 'app_tu_rec_stop' : 'app_tu_speak'); b.setAttribute('aria-pressed', on ? 'true' : 'false'); b.disabled = !!S.busy || (on && S.rec.starting); }
    if (send) send.disabled = on || !!S.busy;
    if (inp) inp.disabled = on;
    if (line) line.textContent = on && S.rec.t0 ? t('app_tu_rec_left', { n: Math.max(0, REC_MAX - Math.round((Date.now() - S.rec.t0) / 1000)) }) : '';
  }
  function startRec() {
    if (!S || S.busy || S.ended || S.rec) return;
    stopVoice(); unlock(); showErr(null); S.note = null; hearUi();
    if (S.sample) {
      var sr = S.rec = { sample: true, t0: Date.now() };
      sr.timer = setTimeout(function () { stopRec(); }, 2500); sr.tick = setInterval(recUi, 500);
      recUi(); return;
    }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) { showErr('app_tu_err_mic'); return; }
    var r = S.rec = { starting: true, chunks: [] };
    recUi();
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      if (!S || S.rec !== r || r.cancel) { stream.getTracks().forEach(function (x) { x.stop(); }); if (S && S.rec === r) S.rec = null; recUi(); return; }
      var mime = recMime(), mr;
      try { mr = mime ? new MediaRecorder(stream, { mimeType: mime, audioBitsPerSecond: 32000 }) : new MediaRecorder(stream); } catch (e) {
        stream.getTracks().forEach(function (x) { x.stop(); }); S.rec = null; showErr('app_tu_err_mic'); recUi(); return;
      }
      r.starting = false; r.mr = mr; r.stream = stream; r.t0 = Date.now();
      mr.ondataavailable = function (e) { if (e.data && e.data.size) r.chunks.push(e.data); };
      mr.onstop = function () {
        clearTimeout(r.timer); clearInterval(r.tick);
        stream.getTracks().forEach(function (x) { x.stop(); });
        if (S && S.rec === r) S.rec = null;
        recUi();
        if (r.cancel || !S || !S.session) return;
        sendSpoken(new Blob(r.chunks, { type: (mr.mimeType || mime || 'audio/webm').split(';')[0] }));
      };
      mr.start();
      r.timer = setTimeout(function () { stopRec(); }, REC_MAX * 1000);
      r.tick = setInterval(recUi, 500);
      recUi();
    }, function () { if (S && S.rec === r) S.rec = null; showErr('app_tu_err_mic'); recUi(); });
  }
  function stopRec(cancel) {
    var r = S && S.rec;
    if (!r) return;
    if (cancel) r.cancel = true;
    if (r.sample) {
      clearTimeout(r.timer); clearInterval(r.tick); S.rec = null; recUi();
      if (!cancel) sendSpoken(null);
      return;
    }
    if (r.mr && r.mr.state !== 'inactive') r.mr.stop();
    else if (r.starting && cancel) { S.rec = null; recUi(); }
  }
  function sendSpoken(blob) {
    if (!S || S.busy || S.ended) return;
    if (blob && blob.size < 800) { showErr('app_tu_err_unheard'); return; }
    S.error = null;
    S.messages.push({ id: 'pending', role: 'student', spoken: true, waiting: true });
    busy(true);
    if (S.sample) {
      setTimeout(function () { afterTurn({ mine: sampleMsg('student', { text: 'Am Wochenende bin ich ins Kino gegangen.' }), message: sampleMsg('tutor', SAMPLE_SPOKEN), board: S.board.concat(SAMPLE_SPOKEN.board), seconds: S.seconds - 30 }, true); }, 1100);
      return;
    }
    var session = S.session;
    blobBase64(blob).then(function (b64) {
      return D().tutorTurn({ session: session.id, audio: b64, mime: blob.type || 'audio/webm' });
    }).then(function (r) { if (S && S.session === session) afterTurn(r, true); }, function (e) { if (S && S.session === session) turnFailed(e, true); });
  }

  /* ---------- Sample ---------- */
  function sampleStatus() {
    var renews = new Date(); renews = new Date(Date.UTC(renews.getUTCFullYear(), renews.getUTCMonth() + 1, 1)).toISOString();
    return { seconds: { free: 600, plan: 2520, credit: 0, total: 3120 }, plan: { tier: 'focused', minutes_per_month: 60, granted_seconds: 3600, renews_at: renews }, open: true, listen: true, voice: true, sample: true };
  }
  var SAMPLE_OPEN = {
    text: 'Hallo! Heute üben wir das Perfekt mit haben oder sein, denn das war in deinen Übungen oft schwierig.',
    board: [{ op: 'title', text: 'Perfekt: haben oder sein?' }, { op: 'write', text: 'Ich **habe** gestern lange **geschlafen**.' }, { op: 'write', text: 'Wir **sind** nach Berlin **gefahren**.' },
      { op: 'note', text: 'Verbs of movement from A to B, and changes of state, take sein.' }, { op: 'table', rows: [['haben', 'sein'], ['schlafen, essen, kaufen', 'fahren, gehen, aufstehen']] }],
    exercise: { t: 'ex', kind: 'choice', h: 'Haben oder sein?', items: [
      { q: 'Ich ___ um sieben Uhr aufgestanden.', o: ['bin', 'habe', 'ist'], why: 'aufstehen ist eine Veränderung: sein.' },
      { q: 'Sie ___ einen Kaffee getrunken.', o: ['hat', 'ist', 'sind'], why: 'trinken: haben.' },
      { q: 'Wir ___ in die Stadt gegangen.', o: ['sind', 'haben', 'hat'], why: 'gehen: Bewegung, also sein.' }] }
  };
  var SAMPLE_REPLY = {
    text: 'Sehr gut! Schreib mir jetzt einen Satz über dein Wochenende, im Perfekt.',
    board: [{ op: 'fix', wrong: 'Ich habe nach Hause gegangen.', right: 'Ich bin nach Hause gegangen.' }, { op: 'write', text: 'Am Wochenende **bin** ich ... / **habe** ich ...' }]
  };
  var SAMPLE_SPOKEN = {
    text: 'Super, das hast du richtig gesagt! Ins Kino gehen nimmt sein. Was hast du gesehen?',
    board: [{ op: 'write', text: 'Ich **bin** ins Kino **gegangen**.' }]
  };
  function sampleMsg(role, x) { return { id: 's' + Math.random().toString(36).slice(2), role: role, text: x.text || '', board: x.board || [], exercise: x.exercise || null, result: x.result || null, at: new Date().toISOString() }; }

  /* ---------- The whiteboard ---------- */
  function md(s) { return EX().md(s); }
  function opHtml(o, isNew) {
    var c = isNew ? ' is-new' : '';
    if (o.op === 'title') return '<h3 class="tu-op tu-op--title' + c + '"' + ta() + '>' + md(o.text) + '</h3>';
    if (o.op === 'write') return '<p class="tu-op tu-op--write' + c + '"' + ta() + '>' + md(o.text) + '</p>';
    if (o.op === 'note') return '<p class="tu-op tu-op--note' + c + '" dir="auto">' + md(o.text) + '</p>';
    if (o.op === 'fix') return '<p class="tu-op tu-op--fix' + c + '"' + ta() + '><s>' + esc(o.wrong) + '</s> <span aria-hidden="true">→</span> <b>' + esc(o.right) + '</b></p>';
    if (o.op === 'table') return '<div class="tu-op tu-op--table' + c + '"><table' + ta() + '>' + o.rows.map(function (r, i) {
      return '<tr>' + r.map(function (cell) { return i ? '<td>' + md(cell) + '</td>' : '<th>' + md(cell) + '</th>'; }).join('') + '</tr>';
    }).join('') + '</table></div>';
    return '';
  }
  function boardHtml(newCount) {
    var b = S.board || [], from = b.length - (newCount || 0);
    return b.length ? b.map(function (o, i) { return opHtml(o, i >= from); }).join('') : '<p class="tu-op tu-op--empty">' + esc(t('app_tu_board_empty')) + '</p>';
  }

  /* ---------- The exercise on the board ---------- */
  /* The latest tutor message with an exercise the student has not answered yet */
  function openExercise() {
    var answered = {};
    S.messages.forEach(function (m) { if (m.result && m.result.message) answered[m.result.message] = true; });
    for (var i = S.messages.length - 1; i >= 0; i--) {
      var m = S.messages[i];
      if (m.role === 'tutor') return m.exercise && !answered[m.id] ? m : null;
    }
    return null;
  }
  function prepareExercise() {
    var m = openExercise();
    if (!m) { S.ex = null; S.exMsg = null; return; }
    if (S.exMsg === m.id && S.ex) return;
    S.exMsg = m.id; S.got = [];
    S.ex = EX().create({ A: A, blocks: [m.exercise], xa: '', ta: ta(), root: function () { return root; },
      onItem: function (r) {
        var x = S.ex.state[0] && S.ex.state[0].items && S.ex.state[0].items[r.i];
        S.got.push({ i: r.i, ok: !!r.ok, given: !r.ok && x && x.value ? String(x.value).slice(0, 80) : undefined });
      },
      onAnswer: function () { if (S.ex && S.ex.done(0)) setTimeout(sendResults, 900); } });
  }
  function exHtml() {
    if (!S.ex) return '';
    return '<div class="paper tu-ex" data-tu-ex>' + S.ex.html(0) + '</div>';
  }

  /* ---------- Views ---------- */
  function homeView() {
    var s = S.status, sec = s.seconds || {}, plan = s.plan || {}, none = (sec.total || 0) <= 0;
    var buddy = A.Cast.drawing(A.buddyFor(A.data().profile.language));
    var html = '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_tutor')) + '</h1><p class="t-lead">' + esc(t('app_tu_lead2')) + '</p></div></div><div class="grid rise">';
    html += '<section class="card span-7" style="--i:0" aria-labelledby="tu-left"><h2 class="t-h2" id="tu-left">' + esc(t('app_tu_left_h')) + '</h2>' +
      '<p class="t-num" style="margin-top:8px">' + esc(mins(sec.total)) + '</p><div class="tt-week" style="margin-top:12px">' +
      row(mins(sec.free), t('app_tu_free')) +
      (plan.granted_seconds ? row(mins(sec.plan), plan.renews_at ? t('app_tu_plan', { date: day(plan.renews_at) }) : t('app_tu_plan_nodate')) : '') +
      (sec.credit ? row(mins(sec.credit), t('app_tu_credit')) : '') + '</div>' +
      (plan.granted_seconds ? '' : '<p class="t-small" style="margin-top:12px">' + esc(t('app_tu_plan_none')) + '</p>') +
      (s.viewing ? '<p class="t-tiny" style="margin-top:12px">' + esc(t('app_tu_viewing')) + '</p>'
        : '<div class="btn-row" style="margin-top:16px"><button class="btn btn--primary" type="button" data-tu="start"' + (none || !s.open ? ' disabled' : '') + '>' + esc(t('app_tu_start')) + '</button>' +
          (none ? '<a class="btn btn--ghost" href="#/settings/plans">' + esc(t('app_tu_see_plans')) + '</a>' : '') + '</div>' +
          '<p class="t-small st-msg" data-tu-msg aria-live="polite">' + esc(none ? t('app_tu_none_left') : !s.open ? t('app_tu_closed') : S.error ? t(S.error) : '') + '</p>') + '</section>';
    html += '<section class="stage span-5" style="--i:1;background:var(--t-mint)" aria-hidden="true"><div class="bub say">' + esc(t('app_tu_bub2')) + '</div>' + buddy + '</section>';
    html += '<section class="card span-7" style="--i:2" aria-labelledby="tu-past"><h2 class="t-h2" id="tu-past">' + esc(t('app_tu_past_h')) + '</h2>' +
      ((S.sessions || []).length ? '<div class="tt-week">' + S.sessions.map(function (x) {
        return '<a class="tt-row tt-row--wide" href="#/tutor/past/' + esc(x.id) + '"><span class="tt-row__time">' + esc(day(x.started_at, { day: 'numeric', month: 'short' })) + '</span><span><b dir="auto">' + esc(x.title || t('app_tu_untitled')) + '</b>' +
          (x.summary ? '<small dir="auto">' + esc(x.summary) + '</small>' : '') + '</span></a>';
      }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">' + esc(t('app_tu_past_none')) + '</p>') + '</section>';
    html += memoryCard();
    if (S.sample) html += '<p class="t-tiny span-12">' + esc(t('app_tu_sample')) + '</p>';
    return html + '</div>';
  }
  function memoryCard() {
    var n = S.memory || {}, parts = [];
    if (n.goals) parts.push(n.goals);
    if (n.interests) parts.push(n.interests);
    if (n.mistakes && n.mistakes.length) parts.push(t('app_tu_mem_mistakes', { list: A.listOf(n.mistakes) }));
    if (n.learned && n.learned.length) parts.push(t('app_tu_mem_learned', { list: A.listOf(n.learned) }));
    if (n.next) parts.push(t('app_tu_mem_next', { next: n.next }));
    return '<section class="card span-5" style="--i:3" aria-labelledby="tu-mem"><h2 class="t-h2" id="tu-mem">' + esc(t('app_tu_mem_h')) + '</h2>' +
      (parts.length ? parts.map(function (p) { return '<p class="t-body" style="margin-top:8px" dir="auto">' + esc(p) + '</p>'; }).join('') : '<p class="t-body" style="margin-top:8px">' + esc(t('app_tu_mem_none')) + '</p>') +
      ((parts.length || (S.sessions || []).length) && !(S.status && S.status.viewing) ? '<div class="btn-row" style="margin-top:14px" data-forget><button class="btn btn--quiet btn--sm" type="button" data-tu="ask-forget">' + esc(t('app_tu_forget')) + '</button></div>' : '') +
      '<p class="t-small st-msg" data-forget-msg aria-live="polite"></p></section>';
  }

  function sessionView() {
    var html = '<div class="view__head tu-head"><div><h1 class="t-h1">' + esc(t('app_nav_tutor')) + '</h1><p class="t-lead" data-tu-left>' + esc(t('app_tu_left_n', { time: mins(S.seconds) })) + '</p></div>' +
      '<div class="btn-row">' + (S.ended ? '<button class="btn btn--primary btn--sm" type="button" data-tu="home">' + esc(t('app_tu_back')) + '</button>'
        : (voiceReady() ? '<button class="btn btn--quiet btn--sm" type="button" data-tu="voice" aria-pressed="' + (voiceOn() ? 'true' : 'false') + '">' + esc(t(voiceOn() ? 'app_tu_voice_off' : 'app_tu_voice_on')) + '</button>' : '') +
          '<button class="btn btn--ghost btn--sm" type="button" data-tu="end"' + (S.busy ? ' disabled' : '') + '>' + esc(t('app_tu_end')) + '</button>') + '</div></div>';
    html += '<div class="tu-grid">';
    html += '<section class="tu-board" aria-labelledby="tu-board-h"><h2 class="sr" id="tu-board-h">' + esc(t('app_tu_board_h')) + '</h2><div class="tu-board__ops" data-tu-board aria-live="polite">' + boardHtml(S.fresh) + '</div>' + exHtml() + '</section>';
    html += '<section class="tu-chat card" aria-labelledby="tu-chat-h"><h2 class="sr" id="tu-chat-h">' + esc(t('app_tu_chat_h')) + '</h2>' +
      '<div class="tu-chat__face" aria-hidden="true">' + A.Cast.drawing(A.buddyFor(A.data().profile.language)) + '</div>' +
      '<div class="ms-msgs tu-msgs" data-tu-msgs>' + msgsHtml() + '</div>' +
      (S.ended ? summaryHtml() : '<form class="ms-form tu-form" data-tu-form><label class="sr" for="tu-in">' + esc(t('app_tu_write')) + '</label><textarea id="tu-in" class="ms-in" rows="2" maxlength="1200" placeholder="' + esc(t('app_tu_write')) + '"' + ta() + '></textarea>' +
        (listenReady() ? '<button class="btn btn--ghost" type="button" data-tu="rec" aria-pressed="false"' + (S.busy ? ' disabled' : '') + '>' + esc(t('app_tu_speak')) + '</button>' : '') +
        '<button class="btn btn--primary" type="submit" data-tu-send' + (S.busy ? ' disabled' : '') + '>' + esc(t('app_tu_send')) + '</button></form>' +
        '<p class="t-small tu-rec" data-tu-rec aria-live="polite"></p>') +
      '<p class="t-small ms-err" data-tu-err aria-live="assertive">' + esc(S.error ? t(S.error) : '') + '</p><p class="t-tiny tu-note" data-tu-note aria-live="polite">' + esc(S.note ? t(S.note) : '') + '</p></section></div>';
    if (S.sample) html += '<p class="t-tiny" style="margin-top:12px">' + esc(t('app_tu_sample')) + '</p>';
    return html;
  }
  function msgsHtml() {
    var out = S.messages.map(function (m) {
      if (m.role === 'tutor') return m.text ? '<div class="ms-msg is-teacher"><div class="ms-bub"' + ta() + '>' + esc(m.text) + '<span class="tu-hear-box" data-hear-for="' + esc(m.id) + '">' + hearHtml(m) + '</span></div></div>' : '';
      if (m.waiting) return '<div class="ms-msg is-me"><div class="ms-bub tu-wait">' + loader(28) + '<span class="sr">' + esc(t('app_tu_rec_sending')) + '</span></div></div>';
      if (m.result) return '<div class="ms-msg is-me"><div class="ms-bub">' + esc(t('app_tu_results', { right: m.result.right, total: m.result.total })) + '</div></div>';
      return '<div class="ms-msg is-me"><div class="ms-bub" dir="auto">' + esc(m.text) + '</div></div>';
    }).join('');
    if (S.busy) out += '<div class="ms-msg is-teacher"><div class="ms-bub tu-wait">' + loader(28) + '<span class="sr">' + esc(t('app_tu_thinking')) + '</span></div></div>';
    return out;
  }
  function summaryHtml() {
    var x = S.summary || {};
    return '<div class="tu-sum"><h3 class="t-h3">' + esc(t('app_tu_sum_h')) + '</h3>' + (x.title ? '<p class="t-body" dir="auto"><b>' + esc(x.title) + '</b></p>' : '') +
      (x.summary ? '<p class="t-body" dir="auto">' + esc(x.summary) + '</p>' : '<p class="t-body">' + esc(t('app_tu_sum_none')) + '</p>') +
      ((x.words || []).length ? '<h4 class="t-h3" style="margin-top:12px">' + esc(t('app_tu_words_h')) + '</h4><div class="tt-week">' + x.words.map(function (w) {
        return '<div class="tt-row tt-row--wide"><span class="tt-row__time"' + ta() + '>' + esc(w.w) + '</span><span><small dir="auto">' + esc(w.m || '') + '</small></span></div>';
      }).join('') + '</div>' : '') + '</div>';
  }
  function pastView(x, msgs) {
    var html = '<a class="rd-back" href="#/tutor">' + A.icon('back') + '<span>' + esc(t('app_nav_tutor')) + '</span></a>' +
      '<div class="view__head"><div><h1 class="t-h1" dir="auto">' + esc(x.title || t('app_tu_untitled')) + '</h1><p class="t-lead">' + esc(day(x.started_at, { day: 'numeric', month: 'long', year: 'numeric' })) + '</p></div></div><div class="grid rise">';
    html += '<section class="card span-7" style="--i:0"><h2 class="t-h2">' + esc(t('app_tu_sum_h')) + '</h2>' + (x.summary ? '<p class="t-body" style="margin-top:8px" dir="auto">' + esc(x.summary) + '</p>' : '<p class="t-body" style="margin-top:8px">' + esc(t('app_tu_sum_none')) + '</p>') +
      ((x.words || []).length ? '<h3 class="t-h3" style="margin-top:16px">' + esc(t('app_tu_words_h')) + '</h3><div class="tt-week">' + x.words.map(function (w) {
        return '<div class="tt-row tt-row--wide"><span class="tt-row__time"' + ta() + '>' + esc(w.w) + '</span><span><small dir="auto">' + esc(w.m || '') + '</small></span></div>';
      }).join('') + '</div>' : '') + '</section>';
    html += '<section class="tu-board span-5" style="--i:1"><div class="tu-board__ops">' + ((x.board || []).length ? x.board.map(function (o) { return opHtml(o, false); }).join('') : '<p class="tu-op tu-op--empty">' + esc(t('app_tu_board_empty')) + '</p>') + '</div></section>';
    html += '<section class="card span-12" style="--i:2"><h2 class="t-h2">' + esc(t('app_tu_transcript_h')) + '</h2>' + (msgs.length ? '<div class="ms-msgs tu-msgs tu-msgs--past">' + msgs.map(function (m) {
      if (m.role === 'tutor') return '<div class="ms-msg is-teacher"><div class="ms-bub"' + ta() + '>' + esc(m.text || '') + (m.exercise ? '<br><small>' + esc(t('app_tu_set_ex')) + '</small>' : '') + '</div></div>';
      return '<div class="ms-msg is-me"><div class="ms-bub" dir="auto">' + esc(m.result ? t('app_tu_results', { right: m.result.right, total: m.result.total }) : m.text || '') + '</div></div>';
    }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">' + esc(t('app_tu_transcript_gone')) + '</p>') + '</section>';
    return html + '</div>';
  }
  function note(key) {
    return '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_tutor')) + '</h1></div></div><div class="card"><p class="t-body">' + esc(t(key)) + '</p></div>';
  }

  /* ---------- Drawing ---------- */
  function draw() {
    if (!root) return;
    var inSession = !!S.session, was = root.querySelector('#tu-in'), draft = was ? was.value : '';
    root.innerHTML = inSession ? sessionView() : homeView();
    /* What the student was writing stays when the view is redrawn (a spoken turn, a reply arriving) */
    var inp = draft && root.querySelector('#tu-in'); if (inp) inp.value = draft;
    if (inSession) {
      var box = root.querySelector('[data-tu-msgs]'); if (box) box.scrollTop = box.scrollHeight;
      if (S.ex) S.ex.after(root.querySelector('[data-tu-ex]'));
    }
    S.fresh = 0;
    recUi();
  }
  function errKey(e) {
    var r = e && e.body && e.body.reason;
    if (r === 'listen' || r === 'listen_off' || r === 'audio_type' || r === 'audio_long') return 'app_tu_err_listen';
    if (r === 'unheard' || r === 'audio_short') return 'app_tu_err_unheard';
    return r === 'no_time' ? 'app_tu_none_left' : r === 'budget' ? 'app_tu_err_budget' : r === 'ended' ? 'app_tu_err_ended' : r === 'email' ? 'app_tu_email' : r === 'not_configured' ? 'app_tu_closed' : e && e.status === 429 ? 'app_tu_err_fast' : 'app_tu_err';
  }

  /* ---------- Actions ---------- */
  function start(btn) {
    btn.disabled = true; S.error = null; S.note = null;
    unlock(); forgetAudio();
    var msg = root.querySelector('[data-tu-msg]'); if (msg) msg.innerHTML = loader(28);
    if (S.sample) {
      setTimeout(function () { S.session = { id: 'sample' }; S.messages = [sampleMsg('tutor', SAMPLE_OPEN)]; S.board = SAMPLE_OPEN.board.slice(); S.fresh = S.board.length; S.seconds = S.status.seconds.total; prepareExercise(); history.replaceState(null, '', '#/tutor/session'); draw(); }, 700);
      return;
    }
    D().tutorStart(A.lang).then(function (r) {
      S.session = r.session; S.messages = r.messages || []; S.board = r.board || []; S.seconds = r.seconds; S.ended = false; S.summary = null; S.fresh = r.resumed ? 0 : S.board.length;
      prepareExercise();
      if (location.hash !== '#/tutor/session') history.replaceState(null, '', '#/tutor/session');
      draw();
      if (!r.resumed && voiceOn()) fetchVoice(lastTutor(), true);
    }, function (e) { S.error = errKey(e); btn.disabled = false; if (msg) msg.textContent = t(S.error); });
  }
  function busy(on) { S.busy = on; draw(); }
  function afterTurn(r, mine) {
    if (mine) S.messages[S.messages.length - 1] = r.mine || S.messages[S.messages.length - 1];
    S.messages.push(r.message);
    /* The lines this reply added (after its last "clear") are written in with the board's animation */
    var ops = r.message.board || [], last = -1;
    ops.forEach(function (o, i) { if (o.op === 'clear') last = i; });
    S.board = r.board || S.board; S.fresh = ops.length - last - 1;
    S.seconds = r.seconds;
    if (r.ended) { S.ended = true; S.summary = r.summary || {}; }
    prepareExercise();
    busy(false);
    /* Back to writing, unless the tutor has just set an exercise */
    var inp = !S.ex && root.querySelector('#tu-in'); if (inp) inp.focus({ preventScroll: true });
    /* The tutor speaks the reply, unless the time has run out (the closing reply stays written) */
    if (r.ended || (r.seconds || 0) <= 0) stopVoice();
    else if (voiceOn()) fetchVoice(r.message, true);
  }
  function turnFailed(e, rollback) {
    if (rollback) S.messages.pop();
    S.error = errKey(e);
    if (e && e.body && (e.body.reason === 'ended' || e.body.reason === 'no_time')) { S.ended = true; S.summary = S.summary || {}; }
    busy(false);
  }
  function send(form) {
    var inp = form.querySelector('textarea'), text = String(inp.value || '').trim().slice(0, 1200);
    if (!text || S.busy || S.ended || S.rec) return;
    S.error = null; unlock(); stopVoice();
    S.messages.push({ id: 'pending', role: 'student', text: text });
    inp.value = '';
    busy(true);
    if (S.sample) { setTimeout(function () { afterTurn({ message: sampleMsg('tutor', SAMPLE_REPLY), board: S.board.concat(SAMPLE_REPLY.board), seconds: S.seconds - 30 }, false); }, 900); return; }
    D().tutorTurn({ session: S.session.id, text: text }).then(function (r) { afterTurn(r, true); }, function (e) {
      turnFailed(e, true);
      var i = root.querySelector('#tu-in'); if (i && !i.value) i.value = text;
    });
  }
  function sendResults() {
    if (!S.ex || !S.exMsg || S.busy || S.ended) return;
    var got = S.got || [], items = S.ex.state[0] && S.ex.state[0].items ? S.ex.state[0].items.length : (S.ex.blocks[0].pairs || []).length;
    var right = got.filter(function (g) { return g.ok; }).length;
    var mine = { id: 'pending', role: 'student', result: { message: S.exMsg, right: right, total: items || got.length } };
    var msgId = S.exMsg;
    S.messages.push(mine); S.ex = null; S.exMsg = null;
    busy(true);
    if (S.sample) { setTimeout(function () { afterTurn({ message: sampleMsg('tutor', SAMPLE_REPLY), board: S.board.concat(SAMPLE_REPLY.board), seconds: S.seconds - 45 }, false); }, 900); return; }
    D().tutorTurn({ session: S.session.id, answer: { message: msgId, results: got } }).then(function (r) { afterTurn(r, true); }, function (e) { turnFailed(e, true); prepareExercise(); draw(); });
  }
  function end() {
    if (S.busy) return;
    stopRec(true); stopVoice();
    if (S.sample) { S.ended = true; S.summary = { title: 'Perfekt mit haben und sein', summary: 'You practised the Perfekt with haben and sein and got most of the exercise right. Next time: separable verbs in the Perfekt.', words: [{ w: 'aufstehen', m: 'to get up' }, { w: 'gefahren', m: 'driven, gone (by vehicle)' }] }; draw(); return; }
    busy(true);
    D().tutorEnd(S.session.id).then(function (r) {
      S.ended = true; S.summary = r; S.seconds = r.seconds; S.ex = null; busy(false);
    }, function (e) { S.error = errKey(e); busy(false); });
  }
  function home() {
    stopRec(true); forgetAudio();
    S.session = null; S.messages = []; S.board = []; S.ex = null; S.exMsg = null; S.ended = false; S.summary = null; S.error = null;
    location.hash = '#/tutor';
  }
  function askForget() {
    var box = root.querySelector('[data-forget]');
    box.innerHTML = '<p class="t-small">' + esc(t('app_tu_forget_sure')) + '</p><button class="btn btn--primary btn--sm" type="button" data-tu="forget">' + esc(t('app_tu_forget_yes')) + '</button><button class="btn btn--quiet btn--sm" type="button" data-tu="no-forget">' + esc(t('app_tu_forget_no')) + '</button>';
  }
  function forget(btn) {
    if (S.sample) { S.memory = {}; S.sessions = []; draw(); return; }
    btn.disabled = true;
    D().tutorForget().then(function () { S.memory = {}; S.sessions = []; draw(); var m = root.querySelector('[data-forget-msg]'); if (m) m.textContent = t('app_tu_forgot'); },
      function () { btn.disabled = false; var m = root.querySelector('[data-forget-msg]'); if (m) m.textContent = t('app_tu_err'); });
  }

  /* ---------- Events ---------- */
  function bind() {
    if (root.__tutor) return;
    root.__tutor = true;
    root.addEventListener('click', function (e) {
      if (!S) return;
      var exEl = e.target.closest('[data-tu-ex]');
      if (exEl && S.ex) {
        if (EX().swallowClick && EX().swallowClick()) { e.preventDefault(); return; }
        var a = e.target.closest('[data-act]');
        if (a && !a.disabled) S.ex.act(a.getAttribute('data-act'), a);
        return;
      }
      var b = e.target.closest('[data-tu]');
      if (!b || b.disabled) return;
      var act = b.getAttribute('data-tu');
      if (act === 'start') start(b);
      else if (act === 'end') end();
      else if (act === 'home') home();
      else if (act === 'ask-forget') askForget();
      else if (act === 'no-forget') draw();
      else if (act === 'forget') forget(b);
      else if (act === 'rec') { if (S.rec) stopRec(); else startRec(); }
      else if (act === 'hear') hear(b.getAttribute('data-id'));
      else if (act === 'voice') toggleVoice();
    });
    /* Leaving the session stops the voice and drops a recording in progress */
    window.addEventListener('hashchange', function () {
      if (S && location.hash.indexOf('#/tutor/session') !== 0) { stopRec(true); stopVoice(); }
    });
    root.addEventListener('submit', function (e) { if (e.target.hasAttribute('data-tu-form')) { e.preventDefault(); send(e.target); } });
    root.addEventListener('keydown', function (e) {
      if (e.target.id === 'tu-in' && e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); send(e.target.form); return; }
      if (S && S.ex && e.target.closest('[data-tu-ex]')) S.ex.keydown(e);
    });
    root.addEventListener('input', function (e) { if (S && S.ex && e.target.closest('[data-tu-ex]')) S.ex.input(e.target); });
    root.addEventListener('change', function (e) { if (S && S.ex && e.target.closest('[data-tu-ex]')) S.ex.change(e.target); });
    root.addEventListener('pointerdown', function (e) { if (S && S.ex && e.target.closest('[data-tu-ex]')) EX().pointerDown(S.ex, e); });
  }

  /* ---------- Loading ---------- */
  function loadHome() {
    if (!signedIn()) {
      return Promise.resolve({ status: sampleStatus(), sample: true, memory: { goals: 'Wants to move to Berlin for work next year.', mistakes: ['haben or sein in the Perfekt', 'word order after weil'], next: 'Separable verbs in the Perfekt.' },
        sessions: [{ id: 'x1', started_at: new Date(Date.now() - 2 * 86400000).toISOString(), title: 'Weil and dass', summary: 'You practised word order after weil and dass and wrote three sentences about your job.' }] });
    }
    var none = function () { return null; };
    return Promise.all([D().tutorStatus(), D().tutorSessions(A.data().profile.id).catch(none), D().tutorMemory(A.data().profile.id).catch(none)]).then(function (r) {
      return { status: r[0], sessions: r[1] || [], memory: (r[2] && r[2].notes) || {} };
    });
  }

  function mount(view_, parts, helpers) {
    var my = ++mountNo;
    A = helpers; root = view_;
    bind();
    /* A session keeps going while the student moves around the dashboard and comes back */
    if (parts[0] === 'session' && S && S.session) { draw(); return Promise.resolve({}); }
    if (parts[0] === 'past' && parts[1]) {
      root.innerHTML = '<div class="rd-loading">' + loader() + '</div>';
      var get = signedIn() ? D().tutorSession(parts[1]) : Promise.resolve({ session: { title: 'Weil and dass', started_at: new Date(Date.now() - 2 * 86400000).toISOString(), summary: 'You practised word order after weil and dass and wrote three sentences about your job.', words: [{ w: 'weil', m: 'because' }], board: [{ op: 'title', text: 'weil + Verb am Ende' }, { op: 'write', text: 'Ich lerne Deutsch, **weil** ich in Berlin arbeiten **möchte**.' }] }, messages: [] });
      return get.then(function (r) { if (my === mountNo) root.innerHTML = r && r.session ? pastView(r.session, r.messages || []) : note('app_tu_err'); return {}; },
        function () { if (my === mountNo) root.innerHTML = note('app_tu_err'); return {}; });
    }
    root.innerHTML = '<div class="rd-loading">' + loader() + '</div>';
    return loadHome().then(function (h) {
      if (my !== mountNo) return {};
      var keep = S && S.session && !S.ended ? S : null;
      S = keep || { messages: [], board: [], audio: {} };
      S.status = h.status; S.sessions = h.sessions; S.memory = h.memory; S.sample = !!h.sample;
      if (S.session && !S.ended) { location.replace('#/tutor/session'); return {}; }
      draw();
      return {};
    }, function (e) {
      console.warn('[Alimun] Tutor did not load', e && e.message);
      if (my === mountNo) root.innerHTML = note(e && e.body && e.body.reason === 'email' ? 'app_tu_email' : 'app_tu_error');
      return {};
    });
  }

  window.AlimunTutor = { mount: mount };
})();
