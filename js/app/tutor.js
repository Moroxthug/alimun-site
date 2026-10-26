/* Alimun app: the tutor (docs/AI_TUTOR_PLAN.md).
   Part 1: the student's tutor time as the server counts it (/api/tutor?action=status): the free 10 minutes given once,
   this month's plan minutes and minutes added or bought. The browser only shows the time; the server gives and takes it.
   Part 2: a written session beside a whiteboard. The tutor writes on the board (titles, lines with **bold** words,
   notes, corrections, small tables) and sets exercises there, played by the shared engine (js/app/exercises.js); when the
   student has answered every item, the results go back to the tutor as their turn. /api/tutor?action=start|turn|end;
   past sessions, transcripts and what the tutor remembers are read straight from the database (the student's own rows),
   and "Forget everything" goes through /api/tutor?action=forget.
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

  /* ---------- Sample ---------- */
  function sampleStatus() {
    var renews = new Date(); renews = new Date(Date.UTC(renews.getUTCFullYear(), renews.getUTCMonth() + 1, 1)).toISOString();
    return { seconds: { free: 600, plan: 2520, credit: 0, total: 3120 }, plan: { tier: 'focused', minutes_per_month: 60, granted_seconds: 3600, renews_at: renews }, open: true, sample: true };
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
        : '<button class="btn btn--ghost btn--sm" type="button" data-tu="end"' + (S.busy ? ' disabled' : '') + '>' + esc(t('app_tu_end')) + '</button>') + '</div></div>';
    html += '<div class="tu-grid">';
    html += '<section class="tu-board" aria-labelledby="tu-board-h"><h2 class="sr" id="tu-board-h">' + esc(t('app_tu_board_h')) + '</h2><div class="tu-board__ops" data-tu-board aria-live="polite">' + boardHtml(S.fresh) + '</div>' + exHtml() + '</section>';
    html += '<section class="tu-chat card" aria-labelledby="tu-chat-h"><h2 class="sr" id="tu-chat-h">' + esc(t('app_tu_chat_h')) + '</h2>' +
      '<div class="tu-chat__face" aria-hidden="true">' + A.Cast.drawing(A.buddyFor(A.data().profile.language)) + '</div>' +
      '<div class="ms-msgs tu-msgs" data-tu-msgs>' + msgsHtml() + '</div>' +
      (S.ended ? summaryHtml() : '<form class="ms-form" data-tu-form><label class="sr" for="tu-in">' + esc(t('app_tu_write')) + '</label><textarea id="tu-in" class="ms-in" rows="2" maxlength="1200" placeholder="' + esc(t('app_tu_write')) + '"' + ta() + '></textarea>' +
        '<button class="btn btn--primary" type="submit" data-tu-send' + (S.busy ? ' disabled' : '') + '>' + esc(t('app_tu_send')) + '</button></form>') +
      '<p class="t-small ms-err" data-tu-err aria-live="assertive">' + esc(S.error ? t(S.error) : '') + '</p></section></div>';
    if (S.sample) html += '<p class="t-tiny" style="margin-top:12px">' + esc(t('app_tu_sample')) + '</p>';
    return html;
  }
  function msgsHtml() {
    var out = S.messages.map(function (m) {
      if (m.role === 'tutor') return m.text ? '<div class="ms-msg is-teacher"><div class="ms-bub"' + ta() + '>' + esc(m.text) + '</div></div>' : '';
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
    var inSession = !!S.session;
    root.innerHTML = inSession ? sessionView() : homeView();
    if (inSession) {
      var box = root.querySelector('[data-tu-msgs]'); if (box) box.scrollTop = box.scrollHeight;
      if (S.ex) S.ex.after(root.querySelector('[data-tu-ex]'));
    }
    S.fresh = 0;
  }
  function errKey(e) {
    var r = e && e.body && e.body.reason;
    return r === 'no_time' ? 'app_tu_none_left' : r === 'budget' ? 'app_tu_err_budget' : r === 'ended' ? 'app_tu_err_ended' : r === 'email' ? 'app_tu_email' : r === 'not_configured' ? 'app_tu_closed' : e && e.status === 429 ? 'app_tu_err_fast' : 'app_tu_err';
  }

  /* ---------- Actions ---------- */
  function start(btn) {
    btn.disabled = true; S.error = null;
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
  }
  function turnFailed(e, rollback) {
    if (rollback) S.messages.pop();
    S.error = errKey(e);
    if (e && e.body && (e.body.reason === 'ended' || e.body.reason === 'no_time')) { S.ended = true; S.summary = S.summary || {}; }
    busy(false);
  }
  function send(form) {
    var inp = form.querySelector('textarea'), text = String(inp.value || '').trim().slice(0, 1200);
    if (!text || S.busy || S.ended) return;
    S.error = null;
    S.messages.push({ id: 'pending', role: 'student', text: text });
    busy(true);
    if (S.sample) { setTimeout(function () { afterTurn({ message: sampleMsg('tutor', SAMPLE_REPLY), board: S.board.concat(SAMPLE_REPLY.board), seconds: S.seconds - 30 }, false); }, 900); return; }
    D().tutorTurn({ session: S.session.id, text: text }).then(function (r) { afterTurn(r, true); }, function (e) { turnFailed(e, true); });
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
    if (S.sample) { S.ended = true; S.summary = { title: 'Perfekt mit haben und sein', summary: 'You practised the Perfekt with haben and sein and got most of the exercise right. Next time: separable verbs in the Perfekt.', words: [{ w: 'aufstehen', m: 'to get up' }, { w: 'gefahren', m: 'driven, gone (by vehicle)' }] }; draw(); return; }
    busy(true);
    D().tutorEnd(S.session.id).then(function (r) {
      S.ended = true; S.summary = r; S.seconds = r.seconds; S.ex = null; busy(false);
    }, function (e) { S.error = errKey(e); busy(false); });
  }
  function home() {
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
      S = keep || { messages: [], board: [] };
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
