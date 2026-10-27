/* Alimun app: the live tutor call (docs/AI_TUTOR_PLAN.md, part 7). Route #/tutor/live, mounted by js/app/tutor.js.
   The student talks with the tutor they picked (Lena, Mei, Sofia, Arthur, Kofi or Omar, js/app/cast3.js), each with its
   own voice. /api/tutor?action=live-start gives a one-use pass to Google's Gemini Live API whose setup (instructions,
   voice) the server built and locked; the page streams the microphone to Google as 16 kHz PCM and plays the tutor's
   24 kHz voice as it arrives, the tutor's mouth following the sound (js/app/lipsync.js followAnalyser). Google's
   transcripts show as captions and go to /api/tutor?action=live-tick every 30 seconds, which also counts the time and
   ends the call when it runs out. The pass is renewed before it expires and when Google asks (session resumption).
   Part 7 B, the board in the call: Google's function calls (board_write, set_exercise, say_this) go to
   /api/tutor?action=live-board, which checks and stores them; the board writes the lines in with the written tutor's
   animation (js/app/tutor.js kit), plays exercises with the shared engine (results to live-answer, then told to the
   tutor) and shows the pronunciation card (recorded from the call's microphone, scored by ?action=pronounce live).
   Silence: after 2 minutes with nobody speaking (5 while an exercise or the sentence card is open), the call hangs up
   by itself, with "Are you still there?" 15 seconds before, so neither the student's minutes nor Google's listening run
   on while nobody is there.
   On a phone the call fills the screen while it is on (.tl-wrap.is-live): the tutor's face large while you talk, the board
   sliding up over it when the tutor writes, sets an exercise or a sentence to say (and down again when it is wiped), the
   last captions under it and Mute, the board and End in a bar at the bottom. Wider screens keep the board beside the face.
   The microphone: filtered (no rumble below 120 Hz, nothing above 7 kHz that would fold into the voice range at 16 kHz)
   and gated (speechGate): only sound that lasts like speech and has a voice in it reaches Google, with a short look-back
   so first syllables are kept; otherwise silence is sent. Taps, the phone moving in the hand and rustling were heard as
   words before. While the tutor speaks, the gate asks for a louder voice, so its own sound in the room does not cut it off.
   Sample (signed out or ?sample=1): a scripted call, nothing is sent and the microphone is not used.
   Interface text: app_tl_* keys. */
(function () {
  'use strict';
  var A = null, root = null, L = null;   /* L: the call's state */
  var TICK_MS = 30000, IN_RATE = 16000, OUT_RATE = 24000, CHUNK = 1600;   /* 100 ms of microphone per message */
  var TUTOR_KEY = 'alimun-tutor';
  var IDLE_MS = 120000, IDLE_BOARD_MS = 300000, IDLE_WARN_MS = 15000;
  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function D() { return window.AlimunData; }
  function K() { return window.AlimunTutor && window.AlimunTutor.kit; }
  function EX() { return window.AlimunEx; }
  function cap(k) { return k.charAt(0).toUpperCase() + k.slice(1); }
  function tutors() { return (window.AlimunCast && window.AlimunCast.tutors) || ['lena']; }
  function myTutor() { try { var x = localStorage.getItem(TUTOR_KEY); return tutors().indexOf(x) > -1 ? x : 'lena'; } catch (e) { return 'lena'; } }
  function setTutor(x) { try { localStorage.setItem(TUTOR_KEY, x); } catch (e) { /* this visit only */ } }
  function mins(sec) { return new Intl.NumberFormat(A.locale, { style: 'unit', unit: 'minute', unitDisplay: 'long' }).format(Math.floor((sec || 0) / 60)); }
  function loader(w) { return '<div class="loader" style="--w:' + (w || 28) + 'px" role="img" aria-label="' + esc(t('app_book_loading')) + '">' + A.loaderInner() + '</div>'; }
  function supported() { return !!(window.WebSocket && (window.AudioContext || window.webkitAudioContext) && navigator.mediaDevices && navigator.mediaDevices.getUserMedia); }

  /* ---------- Audio ---------- */
  function b64(bytes) { var s = '', n = 0x8000; for (var i = 0; i < bytes.length; i += n) s += String.fromCharCode.apply(null, bytes.subarray(i, i + n)); return btoa(s); }
  function unb64(str) { var s = atob(str), out = new Uint8Array(s.length); for (var i = 0; i < s.length; i++) out[i] = s.charCodeAt(i); return out; }
  var WORKLET = 'class P extends AudioWorkletProcessor{process(i){var c=i[0]&&i[0][0];if(c)this.port.postMessage(c.slice(0));return true}}registerProcessor("alimun-mic",P);';

  /* Contexts made inside the student's tap, so browsers let them play and record */
  function prime() {
    if (L && L.out) return Promise.resolve();
    var AC = window.AudioContext || window.webkitAudioContext;
    L = L || {};
    L.out = new AC(); L.out.resume();
    L.an = L.out.createAnalyser(); L.an.fftSize = 1024; L.an.connect(L.out.destination);
    L.micAsk = navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 } });
    L.micAsk.catch(function () { /* handled when the call starts */ });
    return Promise.resolve();
  }
  /* The speech gate: 20 ms frames of 16 kHz audio in, the same frames out about 240 ms later, each kept or silenced.
     It opens on 120 ms of sound clearly above the room's noise of which most frames are voiced (few zero crossings, as a
     voice is; a tap is too short, rubbing and rustling are hiss), keeps the 240 ms before it, and closes after 700 ms
     without speech. busy(): the tutor is speaking, so a louder and longer sound is needed. */
  var FRAME = 320, LOOKBACK = 12, OPEN_FRAMES = 6, BUSY_OPEN_FRAMES = 10, HANG_FRAMES = 35;
  function speechGate(busy) {
    var floor = 0.003, run = 0, voiced = 0, open = false, hang = 0, line = [];
    return function (frame) {
      var sum = 0, cross = 0;
      for (var i = 0; i < frame.length; i++) { sum += frame[i] * frame[i]; if (i && (frame[i] >= 0) !== (frame[i - 1] >= 0)) cross++; }
      var rms = Math.sqrt(sum / frame.length), zcr = cross / frame.length, b = busy && busy();
      var thr = Math.max(0.008, floor * 3) * (b ? 2.5 : 1), loud = rms > thr;
      if (!loud && !open) floor = floor * 0.97 + rms * 0.03;   /* the room's noise, learned while nobody speaks */
      var item = { f: frame, keep: false };
      line.push(item);
      if (loud) { run++; if (zcr < 0.22) voiced++; } else { run = 0; voiced = 0; }
      if (!open && run >= (b ? BUSY_OPEN_FRAMES : OPEN_FRAMES) && voiced * 2 >= run) { open = true; line.forEach(function (x) { x.keep = true; }); }
      if (open) {
        item.keep = true;
        if (rms > thr * 0.6) hang = 0; else if (++hang >= HANG_FRAMES) { open = false; hang = 0; run = 0; voiced = 0; }
      }
      return line.length > LOOKBACK ? [line.shift()] : [];
    };
  }
  /* The microphone as 16 kHz 16-bit PCM in 100 ms pieces, sent while the call is open and not muted */
  function startMic(stream) {
    var AC = window.AudioContext || window.webkitAudioContext, ctx = new AC();
    L.inCtx = ctx; L.stream = stream; ctx.resume();
    var src = ctx.createMediaStreamSource(stream), ratio = ctx.sampleRate / IN_RATE, raw = [], pend = [], acc = 0;
    var gate = speechGate(function () { return !!(L && L.playing && L.playing.length); });
    var feed = function (f) {
      if (!L || L.muted || !L.ready) { raw = []; return; }
      for (var i = 0; i < f.length; i++) {
        acc += 1;
        if (acc >= ratio) { acc -= ratio; raw.push(Math.max(-1, Math.min(1, f[i]))); }
      }
      while (raw.length >= FRAME) {
        gate(raw.splice(0, FRAME)).forEach(function (x) {
          if (x.keep) for (var k = 0; k < x.f.length; k++) pend.push(x.f[k]);
          else for (var z = 0; z < x.f.length; z++) pend.push(0);
        });
      }
      while (pend.length >= CHUNK) {
        var part = pend.splice(0, CHUNK), pcm = new Int16Array(CHUNK);
        for (var j = 0; j < CHUNK; j++) pcm[j] = part[j] < 0 ? part[j] * 0x8000 : part[j] * 0x7fff;
        send({ realtimeInput: { audio: { mimeType: 'audio/pcm;rate=' + IN_RATE, data: b64(new Uint8Array(pcm.buffer)) } } });
      }
    };
    var silent = ctx.createGain(); silent.gain.value = 0; silent.connect(ctx.destination);
    var hp = ctx.createBiquadFilter(), lp = ctx.createBiquadFilter();
    hp.type = 'highpass'; hp.frequency.value = 120; lp.type = 'lowpass'; lp.frequency.value = 7000;
    src.connect(hp); hp.connect(lp); src = lp;
    if (ctx.audioWorklet && window.AudioWorkletNode) {
      return ctx.audioWorklet.addModule(URL.createObjectURL(new Blob([WORKLET], { type: 'text/javascript' }))).then(function () {
        var node = new AudioWorkletNode(ctx, 'alimun-mic');
        node.port.onmessage = function (e) { feed(e.data); };
        src.connect(node); node.connect(silent);
      });
    }
    var sp = ctx.createScriptProcessor(4096, 1, 1);
    sp.onaudioprocess = function (e) { feed(e.inputBuffer.getChannelData(0)); };
    src.connect(sp); sp.connect(silent);
    return Promise.resolve();
  }
  /* The tutor's voice, played piece after piece without gaps */
  function playPcm(b64data) {
    var bytes = unb64(b64data), n = bytes.length >> 1, view = new DataView(bytes.buffer), buf = L.out.createBuffer(1, n, OUT_RATE), ch = buf.getChannelData(0);
    for (var i = 0; i < n; i++) ch[i] = view.getInt16(i * 2, true) / 0x8000;
    var src = L.out.createBufferSource(); src.buffer = buf; src.connect(L.an);
    var at = Math.max(L.out.currentTime + 0.03, L.head || 0);
    src.start(at); L.head = at + buf.duration;
    L.playing.push(src);
    src.onended = function () { L.playing = L.playing.filter(function (x) { return x !== src; }); if (!L.playing.length) setState('listening'); };
    setState('speaking');
  }
  function stopPlayback() {
    (L.playing || []).forEach(function (s) { try { s.stop(); } catch (e) { /* already done */ } });
    L.playing = []; L.head = 0;
  }

  /* ---------- The connection to Google ---------- */
  function send(msg) { if (L && L.ws && L.ws.readyState === 1) L.ws.send(JSON.stringify(msg)); }
  function connect(pass) {
    L.pass = pass; L.ready = false;
    var ws = L.ws = new WebSocket(pass.url + '?access_token=' + encodeURIComponent(pass.token));
    var mine = ws;
    ws.onopen = function () { if (L && L.ws === mine) send({ setup: { model: 'models/' + pass.model } }); };
    ws.onmessage = function (e) {
      if (!L || L.ws !== mine) return;
      (typeof e.data === 'string' ? Promise.resolve(e.data) : e.data.text()).then(function (txt) {
        var m; try { m = JSON.parse(txt); } catch (x) { return; }
        onMessage(m);
      });
    };
    ws.onclose = function (e) {
      if (!L || L.ws !== mine || L.ending) return;
      L.ws = null; L.ready = false;
      if (!L.started) { fail('app_tl_failed', 'closed ' + e.code + ' ' + (e.reason || '')); return; }
      renew('dropped');
    };
    /* Renewed a little before the pass expires */
    clearTimeout(L.renewTimer);
    L.renewTimer = setTimeout(function () { renew('expiring'); }, Math.max(20, (pass.pass_seconds || 600) - 25) * 1000);
  }
  function onMessage(m) {
    if (m.setupComplete) {
      L.ready = true;
      var first = !L.started;
      L.started = true; L.note = null;
      setState('listening');
      if (first && L.fresh) send({ clientContent: { turns: [{ role: 'user', parts: [{ text: '<school>The call has just started. Greet the student by their first name in one short sentence and ask what they would like to do today, suggesting one thing from the brief.</school>' }] }], turnComplete: true } });
      else if (!L.handle) send({ clientContent: { turns: [{ role: 'user', parts: [{ text: '<school>The call was reconnected. Carry on where you left off, in one short sentence.</school>' }] }], turnComplete: true } });
      draw();
      return;
    }
    if (m.sessionResumptionUpdate) { if (m.sessionResumptionUpdate.resumable && m.sessionResumptionUpdate.newHandle) L.handle = m.sessionResumptionUpdate.newHandle; return; }
    if (m.goAway) { renew('goaway'); return; }
    if (m.toolCall) { awake(); boardCalls((m.toolCall.functionCalls || []).slice(0, 4)); return; }
    var c = m.serverContent;
    if (!c) return;
    if (c.interrupted) { stopPlayback(); flush('tutor'); setState('listening'); }
    if (c.inputTranscription || c.outputTranscription || c.modelTurn) awake();
    if (c.inputTranscription && c.inputTranscription.text) { if (L.cur.tutor) flush('tutor'); L.cur.student += c.inputTranscription.text; captions(); }
    if (c.outputTranscription && c.outputTranscription.text) { if (L.cur.student) flush('student'); L.cur.tutor += c.outputTranscription.text; captions(); }
    (c.modelTurn && c.modelTurn.parts || []).forEach(function (p) {
      if (p.inlineData && p.inlineData.data && /audio\/pcm/.test(p.inlineData.mimeType || '')) playPcm(p.inlineData.data);
    });
    if (c.turnComplete) { flush('student'); flush('tutor'); }
  }
  /* A finished line goes to the captions and waits for the next tick */
  function flush(role) {
    var text = String(L.cur[role] || '').replace(/\s+/g, ' ').trim();
    L.cur[role] = '';
    if (!text) return;
    L.lines.push({ role: role, text: text });
    L.queue.push({ role: role, text: text });
    captions();
  }
  function renew(why) {
    if (!L || L.ending || L.renewing) return;
    L.renewing = true; L.note = why === 'dropped' ? 'app_tl_dropped' : null; draw();
    var old = L.ws; L.ws = null; L.ready = false;
    if (old) { try { old.close(); } catch (e) { /* gone */ } }
    tick().then(function () {
      if (!L || L.ending) return null;
      return D().tutorLiveStart({ tutor: L.tutor, ui: A.lang, session: L.session, handle: L.handle });
    }).then(function (pass) {
      if (!L || L.ending || !pass) return;
      L.renewing = false; connect(pass);
    }, function (e) {
      if (!L) return;
      L.renewing = false;
      var r = e && e.body && e.body.reason;
      end(r === 'no_time' ? 'app_tu_none_left' : r === 'budget' ? 'app_tu_err_budget' : 'app_tl_lost');
    });
  }

  /* ---------- The board (part 7 B) ---------- */
  /* A line from the system to the tutor (Alimun's own words) or the student's result passed on as their turn */
  function sendText(text, system) {
    send({ clientContent: { turns: [{ role: 'user', parts: [{ text: system ? '<school>' + text + '</school>' : text }] }], turnComplete: true } });
  }
  function toolAnswer(results) {
    send({ toolResponse: { functionResponses: results.map(function (x) { return { id: x.id, name: x.name, response: x.ok ? { result: 'shown on the board' } : { error: x.error || 'not shown' } }; }) } });
  }
  function boardCalls(calls) {
    if (!calls.length) return;
    var plain = calls.map(function (c) { return { id: c.id, name: c.name, args: c.args || {} }; });
    D().tutorLiveBoard({ session: L.session, calls: plain }).then(function (r) {
      if (!L || L.ended) return;
      applyBoard(r.messages || [], r.board);
      toolAnswer(r.results || []);
    }, function () {
      if (L && !L.ended) toolAnswer(plain.map(function (c) { return { id: c.id, name: c.name, ok: false, error: 'The board is not available right now; go on talking.' }; }));
    });
  }
  /* New board messages: the lines written in, an exercise played, a sentence to say */
  function applyBoard(messages, board) {
    var added = 0;
    messages.forEach(function (m) {
      var ops = m.board || [], last = -1;
      ops.forEach(function (o, i) { if (o.op === 'clear') last = i; });
      added = last > -1 ? ops.length - last - 1 : added + ops.length;
      if (m.exercise) prepareExercise(m);
      if (m.pron) { L.pronMsg = m; L.pronResult = null; }
    });
    L.board = board || L.board; L.newOps = added;
    /* On a phone the board comes up when the tutor uses it, and goes away when it is wiped and nothing is left on it */
    if (added > 0 || messages.some(function (m) { return m.exercise || m.pron; })) L.boardOpen = true;
    if (!hasBoard()) L.boardOpen = false;
    var card = messages.some(function (m) { return m.exercise || m.pron; });
    boardUi(); layoutUi();
    if (window.requestAnimationFrame) requestAnimationFrame(function () { revealNew(card); });
  }
  /* On a phone the board scrolls to what was just added: the exercise or the sentence card, else the first new line */
  function revealNew(card) {
    var board = root && root.querySelector('.tl-wrap.is-live[data-board="open"] .tl-board');
    var el = board && (card && board.querySelector('.tu-ex, .tu-pron') || board.querySelector('.tu-op.is-new'));
    if (!el) return;
    var top = el.getBoundingClientRect().top - board.getBoundingClientRect().top + board.scrollTop - 12;
    var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    board.scrollTo({ top: Math.max(0, top), behavior: calm ? 'auto' : 'smooth' });
  }
  function hasBoard() { return !!(L && ((L.board && L.board.length) || L.ex || L.pronMsg)); }
  function prepareExercise(m) {
    L.exMsg = m.id; L.got = [];
    L.ex = EX().create({ A: A, blocks: [m.exercise], xa: '', ta: K().ta(), root: function () { return root; },
      onItem: function (r) {
        var x = L.ex.state[0] && L.ex.state[0].items && L.ex.state[0].items[r.i];
        L.got.push({ i: r.i, ok: !!r.ok, given: !r.ok && x && x.value ? String(x.value).slice(0, 80) : undefined });
      },
      onAnswer: function () { if (L.ex && L.ex.done(0)) setTimeout(exerciseDone, 900); } });
  }
  function exerciseDone() {
    if (!L || !L.ex || L.ended) return;
    var got = L.got || [], items = L.ex.state[0] && L.ex.state[0].items ? L.ex.state[0].items.length : (L.ex.blocks[0].pairs || []).length, msg = L.exMsg;
    L.ex = null; L.exMsg = null; if (!hasBoard()) L.boardOpen = false; boardUi(); layoutUi();
    if (L.sample) { sampleSay(SAMPLE_AFTER_EX); return; }
    D().tutorLiveAnswer({ session: L.session, answer: { message: msg, results: got } }).then(function (r) {
      if (L && !L.ended && r && r.tell) sendText(r.tell);
    }, function () {
      if (L && !L.ended) sendText('I finished the exercise on the board: ' + got.filter(function (g) { return g.ok; }).length + ' of ' + items + ' right first time.');
    });
  }
  function boardHtml() {
    var b = L.board || [], from = b.length - (L.newOps || 0);
    var ops = b.length ? b.map(function (o, i) { return K().opHtml(o, i >= from); }).join('') : '<p class="tu-op tu-op--empty">' + esc(t('app_tu_board_empty')) + '</p>';
    var html = '<div class="tu-board__ops" aria-live="polite">' + ops + '</div>';
    if (L.ex) html += '<div class="paper tu-ex" data-tl-ex>' + L.ex.html(0) + '</div>';
    if (L.pronMsg) {
      var r = L.pronResult;
      html += '<div class="paper tu-pron"><h3 class="t-h3">' + esc(t(r ? 'app_tu_pron_last' : 'app_tu_pron_h')) + '</h3>' + K().pronBody(L.pronMsg.pron, r, !!r);
      if (!L.ended) {
        var rec = !!L.prec, label = rec ? 'app_tu_rec_stop' : r ? 'app_tu_pron_again' : 'app_tu_pron_say';
        html += '<div class="btn-row" style="margin-top:14px"><button class="btn btn--primary btn--sm" type="button" data-tl="prec" aria-pressed="' + rec + '"' + (L.pbusy ? ' disabled aria-busy="true"' : '') + '>' + esc(t(label)) + '</button>' +
          '<button class="btn btn--ghost btn--sm" type="button" data-tl="pslow"' + (rec || L.pbusy ? ' disabled' : '') + '>' + esc(t('app_tu_pron_slow')) + '</button></div>' +
          '<p class="t-small tu-rec" data-tl-prec aria-live="polite">' + (L.pnote ? esc(t(L.pnote)) : '') + '</p>';
      }
      html += '</div>';
    }
    return html;
  }
  function boardUi() {
    var el = root && root.querySelector('[data-tl-board]');
    if (!el) return;
    el.innerHTML = boardHtml();
    L.newOps = 0;
    if (L.ex) L.ex.after(el.querySelector('[data-tl-ex]'));
  }
  /* Saying the card's sentence: recorded from the call's microphone (the tutor does not hear it meanwhile), scored, told */
  var PREC_MAX = 30;
  function pronRecord() {
    if (!L || L.ended || L.pbusy) return;
    if (L.prec) { if (L.prec.mr && L.prec.mr.state !== 'inactive') L.prec.mr.stop(); else pronStop(null); return; }
    L.pnote = null;
    if (L.sample) { L.prec = { sample: true }; boardUi(); stateUi(); L.prec.timer = setTimeout(function () { pronStop(null); }, 2500); return; }
    if (!L.stream || !window.MediaRecorder) { L.pnote = 'app_tu_err_mic'; boardUi(); return; }
    var mime = K().recMime(), chunks = [], mr;
    try { mr = mime ? new MediaRecorder(L.stream, { mimeType: mime }) : new MediaRecorder(L.stream); } catch (e) { L.pnote = 'app_tu_err_mic'; boardUi(); return; }
    L.prec = { mr: mr }; L.wasMuted = L.muted; L.muted = true;
    send({ realtimeInput: { audioStreamEnd: true } });
    mr.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
    mr.onstop = function () { pronStop(new Blob(chunks, { type: (mr.mimeType || mime || 'audio/webm').split(';')[0] })); };
    mr.start();
    L.prec.timer = setTimeout(function () { if (mr.state !== 'inactive') mr.stop(); }, PREC_MAX * 1000);
    boardUi(); stateUi();
  }
  function pronStop(blob) {
    if (!L || !L.prec) return;
    clearTimeout(L.prec.timer);
    var wasSample = L.prec.sample; L.prec = null;
    if (!wasSample) L.muted = !!L.wasMuted;
    L.pbusy = true; boardUi(); stateUi();
    if (wasSample) {
      setTimeout(function () { if (!L) return; L.pbusy = false; L.pronResult = SAMPLE_PRON; boardUi(); sampleSay(SAMPLE_AFTER_PRON); }, 1000);
      return;
    }
    var msg = L.pronMsg;
    K().toWav(blob).then(function (wav) { return K().blobBase64(wav); }).then(function (b64) {
      return D().tutorPronounce({ session: L.session, message: msg.id, audio: b64, mime: 'audio/wav', live: true });
    }).then(function (r) {
      if (!L || L.ended) return;
      L.pbusy = false;
      if (L.pronMsg === msg) L.pronResult = r.mine && r.mine.result && r.mine.result.pron;
      boardUi();
      if (r.tell) sendText(r.tell);
    }, function (e) {
      if (!L) return;
      L.pbusy = false;
      var why = e && e.body && e.body.reason;
      L.pnote = why === 'unheard' || why === 'audio_short' ? 'app_tu_err_unheard' : why === 'pron_closed' ? 'app_tu_err_pron_closed' : why === 'no_time' ? 'app_tu_none_left' : 'app_tu_err_pron';
      boardUi();
    });
  }
  function pronSlow() {
    if (!L || L.ended || !L.pronMsg) return;
    if (L.sample) { sampleSay(['tutor', 'Am — Wo-chen-en-de — bin — ich — ins — Ki-no — ge-gan-gen.']); return; }
    sendText('Say the sentence on the board slowly and clearly, once, then invite the student to record it.', true);
  }

  /* ---------- Silence ---------- */
  function awake() { if (!L) return; L.activeAt = Date.now(); if (L.idleWarn) { L.idleWarn = false; idleUi(); } }
  function checkIdle() {
    if (!L || L.ended || L.ending || !L.started || L.sample) return;
    var limit = L.ex || L.pronMsg && !L.pronResult || L.prec || L.pbusy ? IDLE_BOARD_MS : IDLE_MS, quiet = Date.now() - (L.activeAt || Date.now());
    if (L.playing && L.playing.length) { awake(); return; }
    if (quiet >= limit) { end('app_tl_idle_end'); return; }
    var warn = quiet >= limit - IDLE_WARN_MS;
    if (warn !== !!L.idleWarn) { L.idleWarn = warn; idleUi(); }
  }
  function idleUi() {
    var el = root && root.querySelector('[data-tl-idle]');
    if (!el) return;
    el.hidden = !L.idleWarn;
  }

  /* ---------- Time ---------- */
  function tick() {
    if (!L || L.sample || !L.session) return Promise.resolve();
    var lines = L.queue.splice(0, L.queue.length);
    return D().tutorLiveTick({ session: L.session, lines: lines }).then(function (r) {
      if (!L) return;
      L.seconds = r.seconds; clock();
      if (r.stop) { if (r.summary) L.summary = r.summary; end(r.stop === 'budget' ? 'app_tu_err_budget' : 'app_tu_none_left', true); }
    }, function (e) {
      if (!L) return;
      if (e && e.status !== 409) L.queue = lines.concat(L.queue);   /* tried again at the next tick */
      if (e && e.body && e.body.reason === 'ended' && !L.renewing) end('app_tl_lost', true);
    });
  }

  /* ---------- The call ---------- */
  function start(tutor, opts) {
    var sample = !!opts.sample;
    L = Object.assign(L || {}, { tutor: tutor, sample: sample, state: 'connecting', lines: [], queue: [], cur: { student: '', tutor: '' }, playing: [], seconds: opts.seconds || 0,
      started: false, ending: false, ended: false, muted: false, note: null, summary: null, handle: null, session: null, fresh: true, failed: null, renewing: false, head: 0,
      board: [], newOps: 0, ex: null, exMsg: null, got: [], pronMsg: null, pronResult: null, prec: null, boardOpen: false });
    draw();
    if (sample) { runSample(); return; }
    if (!supported()) { fail('app_tl_unsupported'); return; }
    prime();
    var mic = L.micAsk;
    D().tutorLiveStart(opts.lesson ? { tutor: tutor, ui: A.lang, lesson: opts.lesson } : { tutor: tutor, ui: A.lang }).then(function (pass) {
      /* Ended while connecting: the session just opened is closed again */
      if (!L || L.ending) { D().tutorEnd(pass.session.id).catch(function () {}); return; }
      L.session = pass.session.id; L.fresh = pass.fresh; L.seconds = pass.seconds; clock();
      return mic.then(function (stream) {
        return startMic(stream).then(function () {
          if (!L || L.ending) return;
          connect(pass);
          L.ticker = setInterval(tick, TICK_MS);
          L.activeAt = Date.now(); L.idleTimer = setInterval(checkIdle, 5000);
          L.face = root && root.querySelector('[data-tl-face]');
          if (L.face && window.AlimunLipsync && window.AlimunLipsync.followAnalyser) L.unfollow = window.AlimunLipsync.followAnalyser(L.an, L.face);
        });
      }, function () {
        /* No microphone: the opened session is closed again so no time keeps counting */
        D().tutorEnd(pass.session.id).catch(function () {});
        fail('app_tl_mic');
      });
    }, function (e) {
      var r = e && e.body && e.body.reason;
      fail(r === 'no_time' ? 'app_tu_none_left' : r === 'lesson_closed' ? 'app_tu_lesson_closed' : r === 'budget' ? 'app_tu_err_budget' : r === 'email' ? 'app_tu_email' : e && e.status === 429 ? 'app_tu_err_fast' : 'app_tl_failed');
    });
  }
  function fail(key, why) {
    if (why) console.warn('[Alimun] live call:', why);
    if (L && L.session && L.started) { end(key); return; }
    teardown();
    if (L) { L.ended = true; L.failed = key; L.state = 'idle'; }
    draw();
  }
  function teardown() {
    if (!L) return;
    clearInterval(L.ticker); clearInterval(L.idleTimer); clearTimeout(L.renewTimer); clearTimeout(L.sampleTimer);
    if (L.prec) { clearTimeout(L.prec.timer); if (L.prec.mr && L.prec.mr.state !== 'inactive') { L.prec.mr.onstop = null; L.prec.mr.stop(); } L.prec = null; }
    if (L.unfollow) L.unfollow();
    if (L.ws) { try { L.ws.close(); } catch (e) { /* gone */ } }
    L.ws = null; L.ready = false;
    if (L.out) stopPlayback();
    if (L.stream) L.stream.getTracks().forEach(function (x) { x.stop(); });
    else if (L.micAsk) L.micAsk.then(function (s) { s.getTracks().forEach(function (x) { x.stop(); }); }, function () {});
    if (L.inCtx && L.inCtx.close) L.inCtx.close();
    if (L.out && L.out.close) L.out.close();
    L.stream = null; L.micAsk = null; L.inCtx = null; L.out = null; L.an = null;
  }
  /* Ends the call: the last lines are counted, then the session is closed and summed up */
  function end(noteKey, serverEnded) {
    if (!L || L.ending) return;
    L.ending = true; L.note = noteKey || null;
    document.documentElement.classList.remove('tl-incall');
    flush('student'); flush('tutor');
    teardown();
    L.state = 'ending'; draw();
    if (L.sample) { L.ended = true; L.summary = SAMPLE_SUMMARY; L.state = 'idle'; draw(); return; }
    var session = L.session;
    (serverEnded ? Promise.resolve() : tick()).then(function () { return session ? D().tutorEnd(session) : null; }).then(function (r) {
      if (!L) return;
      if (r && (r.summary || r.title)) L.summary = r;
      if (r && r.seconds != null) L.seconds = r.seconds;
      L.ended = true; L.state = 'idle'; draw();
    }, function () { if (L) { L.ended = true; L.state = 'idle'; draw(); } });
  }
  function toggleMute() {
    if (!L || !L.started || L.ended) return;
    L.muted = !L.muted;
    if (L.muted) send({ realtimeInput: { audioStreamEnd: true } });
    draw();
  }

  /* ---------- Sample ---------- */
  var SAMPLE_LINES = [
    ['tutor', 'Hallo Sam! Schön, dich zu sehen. Wollen wir heute über dein Wochenende sprechen?', { board: [{ op: 'title', text: 'Mein Wochenende' }] }],
    ['student', 'Ja, gerne. Am Wochenende ich bin ins Kino gegangen.'],
    ['tutor', 'Super! Am Wochenende bin ich ins Kino gegangen. Das Verb kommt an zweite Stelle. Was hast du gesehen?', { board: [{ op: 'fix', wrong: 'Am Wochenende ich bin ins Kino gegangen.', right: 'Am Wochenende bin ich ins Kino gegangen.' }, { op: 'note', text: 'After a time phrase at the start, the verb comes second.' }] }],
    ['student', 'Einen Film über Berlin. Wie schreibt man Wochenende?'],
    ['tutor', 'So: W, o, c, h, e, n, e, n, d, e. Jetzt üben wir die Wortstellung kurz auf der Tafel.', { board: [{ op: 'spell', text: 'Wochenende' }], exercise: { t: 'ex', kind: 'choice', h: 'Was passt? Das Verb steht an zweiter Stelle.', items: [
      { q: 'Am Samstag ___ lange geschlafen.', o: ['habe ich', 'ich habe', 'ich hat'], why: 'Am Samstag zuerst, dann das Verb.' }, { q: 'Gestern ___ ins Kino gegangen.', o: ['bin ich', 'ich bin', 'ich habe'], why: 'Gestern zuerst, dann das Verb: bin ich.' }, { q: 'Am Sonntag ___ gekocht.', o: ['haben wir', 'wir haben', 'wir sind'], why: 'Am Sonntag zuerst, dann das Verb.' }] } }]
  ];
  var SAMPLE_AFTER_EX = ['tutor', 'Sehr gut! Jetzt sag bitte diesen Satz laut, ich höre genau hin.', { pron: 'Am Wochenende bin ich ins Kino gegangen.' }];
  var SAMPLE_PRON = { sentence: 'Am Wochenende bin ich ins Kino gegangen.', score: 78, accuracy: 74, fluency: 85, completeness: 100, extra: 0, words: [{ t: 'Am', s: 'ok' }, { t: 'Wochenende', s: 'diff', sound: 'x' }, { t: 'bin', s: 'ok' }, { t: 'ich', s: 'ok' }, { t: 'ins', s: 'ok' }, { t: 'Kino', s: 'ok' }, { t: 'gegangen.', s: 'ok' }] };
  var SAMPLE_AFTER_PRON = ['tutor', 'Schon gut! Das ch in Wochenende kommt weiter hinten, wie in Bach. Noch einmal?'];
  /* One scripted tutor line in the sample: said word by word, with its board */
  function sampleSay(line, then) {
    if (!L || L.ending) return;
    var words = line[1].split(' '), w = 0, extra = line[2] || {};
    if (line[0] === 'tutor') setState('speaking');
    if (extra.board || extra.exercise || extra.pron) {
      var m = { id: 'sx' + Math.random().toString(36).slice(2), board: extra.board || [], exercise: extra.exercise || null, pron: extra.pron || null };
      var b = L.board.slice(); (m.board || []).forEach(function (o) { if (o.op === 'clear') b = []; else b.push(o); });
      applyBoard([m], b);
    }
    var step = function () {
      if (!L || L.ending) return;
      if (w < words.length) {
        L.cur[line[0]] += (w ? ' ' : '') + words[w++]; captions();
        var face = root && root.querySelector('[data-tl-face]');
        if (face && line[0] === 'tutor') face.setAttribute('data-mouth', ['a', 'e', 'o', 'm', 'e', 'a'][w % 6]);
        L.sampleTimer = setTimeout(step, line[0] === 'tutor' ? 220 : 180);
      } else {
        flush(line[0]);
        var face2 = root && root.querySelector('[data-tl-face]'); if (face2) face2.setAttribute('data-mouth', 'rest');
        setState('listening'); L.seconds -= 20; clock();
        if (then) L.sampleTimer = setTimeout(then, 900);
      }
    };
    step();
  }
  var SAMPLE_SUMMARY = { title: 'Das Wochenende im Perfekt', summary: 'You talked about your weekend and practised word order after Am Wochenende. Next time: separable verbs in the Perfekt.', words: [{ w: 'ins Kino gehen', m: 'to go to the cinema' }], cards: 1, set: { id: 'sample' } };
  function runSample() {
    var i = 0;
    L.started = true; L.seconds = 3120;
    setTimeout(function () { if (L && !L.ending) { setState('listening'); draw(); next(); } }, 900);
    function next() {
      if (!L || L.ending || i >= SAMPLE_LINES.length) return;
      sampleSay(SAMPLE_LINES[i++], next);
    }
  }

  /* ---------- Drawing ---------- */
  function setState(s) {
    if (!L || L.ending) return;
    if (L.state === s) return;
    L.state = s;
    stateUi();
    var st = root && root.querySelector('.tl-stage'); if (st) st.setAttribute('data-state', s);
  }
  function stateUi() { var el = root && root.querySelector('[data-tl-state]'); if (el && L && !L.ended) el.innerHTML = '<span>' + esc(stateText()) + '</span>'; }
  function stateText() {
    var name = cap(L.tutor);
    if (L.note) return t(L.note);
    if (L.prec) return t('app_tl_recording');
    if (L.muted) return t('app_tl_muted');
    return L.state === 'speaking' ? t('app_tl_speaking', { name: name }) : L.state === 'listening' ? t('app_tl_listening', { name: name }) : L.state === 'ending' ? t('app_tl_ending') : t('app_tl_connecting');
  }
  function clock() { var el = root && root.querySelector('[data-tl-left]'); if (el) el.textContent = t('app_tu_left_n', { time: mins(L.seconds) }); }
  function lineHtml(l, partial) {
    return '<div class="ms-msg ' + (l.role === 'tutor' ? 'is-teacher' : 'is-me') + (partial ? ' is-partial' : '') + '"><div class="ms-bub" dir="auto">' + esc(l.text) + '</div></div>';
  }
  function captions() {
    var box = root && root.querySelector('[data-tl-lines]');
    if (!box) return;
    var html = L.lines.slice(-30).map(function (l) { return lineHtml(l, false); }).join('');
    if (L.cur.student) html += lineHtml({ role: 'student', text: L.cur.student }, true);
    if (L.cur.tutor) html += lineHtml({ role: 'tutor', text: L.cur.tutor }, true);
    box.innerHTML = html || '<p class="t-small tl-empty">' + esc(t('app_tl_captions_empty')) + '</p>';
    box.scrollTop = box.scrollHeight;
  }
  function summaryHtml() {
    var x = L.summary || {};
    return '<section class="card tl-sum"><h2 class="t-h2">' + esc(t('app_tl_ended')) + '</h2>' +
      (L.failed ? '<p class="t-body" style="margin-top:8px">' + esc(t(L.failed)) + '</p>' : '') +
      (L.note && !L.failed ? '<p class="t-body" style="margin-top:8px">' + esc(t(L.note)) + '</p>' : '') +
      (x.title ? '<p class="t-body" style="margin-top:8px" dir="auto"><b>' + esc(x.title) + '</b></p>' : '') +
      (x.summary ? '<p class="t-body" style="margin-top:6px" dir="auto">' + esc(x.summary) + '</p>' : '') +
      ((x.words || []).length ? '<h3 class="t-h3" style="margin-top:14px">' + esc(t('app_tu_words_h')) + '</h3><div class="tt-week">' + x.words.map(function (w) {
        return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(w.w) + '</span><span><small dir="auto">' + esc(w.m || '') + '</small></span></div>';
      }).join('') + '</div>' : '') + (window.AlimunTutor && window.AlimunTutor.kit.afterHtml ? window.AlimunTutor.kit.afterHtml(x) : '') +
      /* Part 6: a call that ran out of time ends with the plans and the packs */
      ((L.failed || L.note) === 'app_tu_none_left' && !L.sample && window.AlimunTutor && window.AlimunTutor.kit.outHtml ? window.AlimunTutor.kit.outHtml() : '') +
      '<div class="btn-row" style="margin-top:16px"><a class="btn btn--primary" href="#/tutor">' + esc(t('app_tu_back')) + '</a></div></section>';
  }
  function live() { return !!(L && !L.ended && !L.ending && !L.failed); }
  /* The phone layout: full screen while the call is on, the board up or down (the CSS applies it below 900px only) */
  function layoutUi() {
    document.documentElement.classList.toggle('tl-incall', live());
    var w = root && root.querySelector('.tl-wrap');
    if (!w || !L) return;
    w.setAttribute('data-board', L.boardOpen && hasBoard() ? 'open' : 'closed');
    var b = w.querySelector('.tl-bar [data-tl="board"]');
    if (b) { b.hidden = !hasBoard(); b.setAttribute('aria-expanded', L.boardOpen && hasBoard() ? 'true' : 'false'); }
  }
  function draw() {
    if (!root || !L) return;
    var name = cap(L.tutor), on = L.started && !L.ended;
    var html = '<div class="tl-wrap' + (live() ? ' is-live' : '') + '" data-board="closed"><div class="view__head tu-head"><div><h1 class="t-h1">' + esc(t('app_tl_h', { name: name })) + '</h1><p class="t-lead" data-tl-left>' + esc(t('app_tu_left_n', { time: mins(L.seconds) })) + '</p></div>' +
      (L.ended ? '' : '<div class="btn-row">' + (on ? '<button class="btn btn--quiet btn--sm" type="button" data-tl="mute" aria-pressed="' + (L.muted ? 'true' : 'false') + '">' + esc(t(L.muted ? 'app_tl_unmute' : 'app_tl_mute')) + '</button>' : '') +
        '<button class="btn btn--primary btn--sm" type="button" data-tl="end"' + (L.ending ? ' disabled' : '') + '>' + esc(t('app_tl_end')) + '</button></div>') + '</div>';
    var stage = '<section class="tl-stage" data-state="' + esc(L.state) + '" aria-labelledby="tl-name"><div class="tl-face tutor-art" data-tl-face data-mouth="rest" aria-hidden="true">' + (A.Cast.tutor ? A.Cast.tutor(L.tutor) : '') + '</div>' +
      '<h2 class="t-h2 tl-name" id="tl-name">' + esc(name) + '</h2>' +
      '<p class="t-body tl-state" data-tl-state aria-live="polite">' + (L.ended ? '' : (L.state === 'connecting' || L.state === 'ending' ? loader(22) : '') + '<span>' + esc(stateText()) + '</span>') + '</p>' +
      (L.ended ? '' : '<div class="tl-idle" data-tl-idle role="alert"' + (L.idleWarn ? '' : ' hidden') + '><p class="t-body">' + esc(t('app_tl_idle_warn')) + '</p><button class="btn btn--primary btn--sm" type="button" data-tl="here">' + esc(t('app_tl_still_here')) + '</button></div>') + '</section>';
    var board = '<section class="tu-board tl-board" aria-labelledby="tl-board-h"><h2 class="sr" id="tl-board-h">' + esc(t('app_tu_board_h')) + '</h2><div data-tl-board>' + boardHtml() + '</div></section>';
    html += '<div class="tl-grid">' + board + '<div class="tl-side">' + stage +
      (L.ended ? summaryHtml() : '<section class="card tl-captions" aria-labelledby="tl-cap-h"><h2 class="t-h3" id="tl-cap-h">' + esc(t('app_tl_captions_h')) + '</h2><div class="ms-msgs tl-lines" data-tl-lines aria-live="polite"></div></section>') + '</div></div>';
    if (live()) html += '<div class="tl-bar">' + (on ? '<button class="btn btn--quiet" type="button" data-tl="mute" aria-pressed="' + (L.muted ? 'true' : 'false') + '">' + esc(t(L.muted ? 'app_tl_unmute' : 'app_tl_mute')) + '</button>' : '') +
      '<button class="btn btn--quiet" type="button" data-tl="board" aria-expanded="false" hidden>' + esc(t('app_tu_board_h')) + '</button>' +
      '<button class="btn btn--primary" type="button" data-tl="end">' + esc(t('app_tl_end')) + '</button></div>';
    if (L.sample) html += '<p class="t-tiny tl-sample" style="margin-top:12px">' + esc(t('app_tu_sample')) + '</p>';
    html += '</div>';
    root.innerHTML = html;
    layoutUi();
    L.newOps = 0;
    if (L.ex) L.ex.after(root.querySelector('[data-tl-ex]'));
    if (!L.ended) captions();
    var face = root.querySelector('[data-tl-face]');
    if (face && L.an && window.AlimunLipsync && !L.ended) { if (L.unfollow) L.unfollow(); L.unfollow = window.AlimunLipsync.followAnalyser(L.an, face); }
  }

  /* ---------- Mounting ---------- */
  var bound = false;
  function bind() {
    if (bound) return; bound = true;
    document.addEventListener('click', function (e) {
      if (!root || !root.contains(e.target)) return;
      var exEl = e.target.closest('[data-tl-ex]');
      if (L && root.contains(e.target)) awake();
      if (exEl && L && L.ex) {
        if (EX().swallowClick && EX().swallowClick()) { e.preventDefault(); return; }
        var a = e.target.closest('[data-act]');
        if (a && !a.disabled) L.ex.act(a.getAttribute('data-act'), a);
        return;
      }
      var b = e.target.closest('[data-tl]');
      if (!b || b.disabled) return;
      var act = b.getAttribute('data-tl');
      if (act === 'end') end();
      else if (act === 'mute') toggleMute();
      else if (act === 'board') { L.boardOpen = !L.boardOpen; layoutUi(); }
      else if (act === 'here') awake();
      else if (act === 'prec') pronRecord();
      else if (act === 'pslow') pronSlow();
    });
    var inEx = function (e) { return root && L && L.ex && root.contains(e.target) && e.target.closest('[data-tl-ex]'); };
    document.addEventListener('keydown', function (e) { if (inEx(e)) L.ex.keydown(e); });
    document.addEventListener('input', function (e) { if (inEx(e)) { awake(); L.ex.input(e.target); } });
    document.addEventListener('change', function (e) { if (inEx(e)) L.ex.change(e.target); });
    document.addEventListener('pointerdown', function (e) { if (inEx(e)) EX().pointerDown(L.ex, e); });
    /* Leaving the call's page ends the call: the microphone is never left open */
    window.addEventListener('hashchange', function () { if (L && !L.ended && location.hash.indexOf('#/tutor/live') !== 0) end(); });
    window.addEventListener('pagehide', function () { if (L && !L.ended && L.session) { L.ending = true; teardown(); } });
  }
  /* opts: { tutor, sample, seconds } — called when the student taps "Talk with ..." */
  function begin(view, helpers, opts) {
    A = helpers; root = view; bind();
    start(opts.tutor || myTutor(), opts);
  }
  /* The tutor page asks for a call inside the student's tap (so audio may start), then opens #/tutor/live */
  var pending = null;
  function want(opts) { pending = opts; if (!opts.sample && supported()) prime(); }
  /* The page itself (#/tutor/live): the call in progress, or a button to start one */
  function mount(view, helpers, opts) {
    A = helpers; root = view; bind();
    if (pending) { var p = pending; pending = null; begin(view, helpers, p); return; }
    if (L && (L.started || L.state === 'connecting' || L.state === 'ending')) { draw(); return; }
    var k = myTutor();
    root.innerHTML = '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_tl_h', { name: cap(k) })) + '</h1></div></div><div class="tl-grid"><section class="tl-stage"><div class="tl-face tutor-art" data-mouth="rest" aria-hidden="true">' +
      (A.Cast.tutor ? A.Cast.tutor(k) : '') + '</div><h2 class="t-h2 tl-name">' + esc(cap(k)) + '</h2><div class="btn-row" style="justify-content:center;margin-top:12px"><button class="btn btn--primary" type="button" data-tl-go>' + esc(t('app_tl_call', { name: cap(k) })) + '</button></div></section></div>';
    var go = root.querySelector('[data-tl-go]');
    go.addEventListener('click', function () { if (!opts.sample) prime(); begin(view, helpers, { tutor: k, sample: opts.sample, seconds: opts.seconds }); });
  }
  function active() { return !!(L && !L.ended && (L.started || L.state === 'connecting')); }
  function reset() { if (L && !L.ended) end(); L = null; }

  window.AlimunTutorLive = { speechGate: speechGate, prime: prime, want: want, begin: begin, mount: mount, active: active, reset: reset, myTutor: myTutor, setTutor: setTutor, supported: supported, TUTOR_KEY: TUTOR_KEY };
})();
