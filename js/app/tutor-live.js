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
   Cost (10 Nov 2026): Google re-reads the whole conversation, audio included, on every turn; once it has grown by
   ROTATE_GROWTH tokens the call moves to a fresh connection between turns (rotate), with the call so far as text.
   The tutor is told the time left at about 2 minutes and 1 minute (timeNotes).
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
      var item = { f: frame, keep: false, v: loud && zcr < 0.22 };
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
  /* Taking turns (manual mode: the pass switched Google's own voice detection off, so only what this decides is heard).
     The gate's frames in; out: { start }, { audio: frame } (silence while the student pauses inside a turn) and { end }.
     A turn starts only once the gate has let through enough voiced sound (240 ms, 320 ms while the tutor speaks):
     a cough, a "hm", a tap or a short noise is dropped and Google never receives it, so it cannot turn it into words.
     It ends after silenceMs without a voice (longer for beginners, who pause for a word). Nothing is sent between turns:
     the silence and noise in between were where Google's transcriber made up words before. */
  var MIN_TURN = 12, BUSY_MIN_TURN = 16;
  function turnTaker(silenceMs, busy) {
    var buf = [], voiced = 0, inTurn = false, quiet = 0, endAfter = Math.max(25, Math.round((silenceMs || 1200) / 20));
    function step(item) {
      var out = [];
      if (!inTurn) {
        if (!item.keep) { buf = []; voiced = 0; return out; }   /* the gate closed before it was a turn: dropped */
        buf.push(item); if (item.v) voiced++;
        if (voiced >= (busy && busy() ? BUSY_MIN_TURN : MIN_TURN)) {
          inTurn = true; quiet = 0; out.push({ start: true });
          buf.forEach(function (x) { out.push({ audio: x.f }); });
          buf = []; voiced = 0;
        }
        return out;
      }
      out.push({ audio: item.keep ? item.f : new Array(item.f.length).fill(0) });
      quiet = item.v ? 0 : quiet + 1;
      if (quiet >= endAfter) { inTurn = false; quiet = 0; out.push({ end: true }); }
      return out;
    }
    step.active = function () { return inTurn; };
    step.stop = function () { var was = inTurn; inTurn = false; buf = []; voiced = 0; quiet = 0; return was; };
    return step;
  }
  /* 16 kHz mono samples (-1..1) as a WAV file, for the pronunciation check of a turn */
  function wav16(samples) {
    var n = samples.length, buf = new ArrayBuffer(44 + n * 2), v = new DataView(buf);
    function str(o, x) { for (var i = 0; i < x.length; i++) v.setUint8(o + i, x.charCodeAt(i)); }
    str(0, 'RIFF'); v.setUint32(4, 36 + n * 2, true); str(8, 'WAVE'); str(12, 'fmt '); v.setUint32(16, 16, true);
    v.setUint16(20, 1, true); v.setUint16(22, 1, true); v.setUint32(24, IN_RATE, true); v.setUint32(28, IN_RATE * 2, true);
    v.setUint16(32, 2, true); v.setUint16(34, 16, true); str(36, 'data'); v.setUint32(40, n * 2, true);
    for (var i = 0; i < n; i++) { var x = Math.max(-1, Math.min(1, samples[i])); v.setInt16(44 + i * 2, x < 0 ? x * 0x8000 : x * 0x7fff, true); }
    return new Uint8Array(buf);
  }
  /* The microphone as 16 kHz 16-bit PCM in 100 ms pieces, sent while the call is open and not muted */
  function startMic(stream) {
    var AC = window.AudioContext || window.webkitAudioContext, ctx = new AC();
    L.inCtx = ctx; L.stream = stream; ctx.resume();
    var src = ctx.createMediaStreamSource(stream), ratio = ctx.sampleRate / IN_RATE, raw = [], pend = [], acc = 0;
    /* The tutor counts as speaking until half a second after its voice stops (the room still rings with it) */
    var busy = function () { return !!(L && ((L.playing && L.playing.length) || Date.now() - (L.playEnd || 0) < 500)); };
    var gate = speechGate(busy);
    /* (during a planned fresh connection the microphone keeps going: send() holds it) */
    L.taker = null;
    var sendPend = function () {
      while (pend.length >= CHUNK) sendPcm(pend.splice(0, CHUNK));
    };
    var sendPcm = function (part) {
      var pcm = new Int16Array(part.length);
      for (var j = 0; j < part.length; j++) pcm[j] = part[j] < 0 ? part[j] * 0x8000 : part[j] * 0x7fff;
      send({ realtimeInput: { audio: { mimeType: 'audio/pcm;rate=' + IN_RATE, data: b64(new Uint8Array(pcm.buffer)) } } });
    };
    var feed = function (f) {
      if (!L || L.muted || (!L.ready && !L.rotating)) { raw = []; if (L && L.taker && L.taker.stop()) { if (pend.length) sendPcm(pend.splice(0)); turnEnd(); } return; }
      for (var i = 0; i < f.length; i++) {
        acc += 1;
        if (acc >= ratio) { acc -= ratio; raw.push(Math.max(-1, Math.min(1, f[i]))); }
      }
      var manual = !!(L.pass && L.pass.turn && L.pass.turn.manual);
      if (manual && !L.taker) L.taker = turnTaker(L.pass.turn.silence_ms, busy);
      if (!manual) L.taker = null;
      while (raw.length >= FRAME) {
        gate(raw.splice(0, FRAME)).forEach(function (x) {
          if (!manual) {
            if (x.keep) for (var k = 0; k < x.f.length; k++) pend.push(x.f[k]);
            else for (var z = 0; z < x.f.length; z++) pend.push(0);
            return;
          }
          L.taker(x).forEach(function (o) {
            if (o.start) { send({ realtimeInput: { activityStart: {} } }); L.turnAudio = []; L.studentTurn = true; awake(); }
            if (o.audio) {
              for (var k2 = 0; k2 < o.audio.length; k2++) pend.push(o.audio[k2]);
              if (L.turnAudio && L.turnAudio.length < IN_RATE * 30) for (var k3 = 0; k3 < o.audio.length; k3++) L.turnAudio.push(o.audio[k3]);
            }
            if (o.end) { if (pend.length) sendPcm(pend.splice(0)); turnEnd(); }
          });
        });
      }
      sendPend();
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
  /* The student's turn is over: Google answers now; the turn's audio waits for its transcript to be checked */
  function turnEnd() {
    if (!L) return;
    send({ realtimeInput: { activityEnd: {} } });
    L.studentTurn = false; L.waitReply = true;   /* the tutor's answer is coming: no fresh connection until it is done */
    if (L.turnAudio && L.turnAudio.length >= IN_RATE * 0.5) L.turnWait = L.turnAudio;
    L.turnAudio = null;
    sendNotes();
  }
  /* Pronunciation of what the student just said, checked by Alimun's speech scorer (Azure, through the server) against
     Google's transcript of it. The tutor is told only when a word was said differently, and only between turns
     (a note added to the conversation without asking for an answer), so it never cuts the tutor off. */
  function checkTurn(text) {
    var audio = L && L.turnWait;
    if (!L || !audio) return;
    L.turnWait = null;
    if (!L.pass || !L.pass.pron_check || L.pronBusy || L.sample || !/\p{L}/u.test(text)) return;
    L.pronBusy = true;
    D().tutorLivePron({ session: L.session, text: text.slice(0, 400), audio: b64(wav16(audio)), mime: 'audio/wav' }).then(function (r) {
      if (!L) return;
      L.pronBusy = false;
      if (r && r.note) { L.notes = (L.notes || []).filter(function (n) { return !/^Speech check/.test(n); }).concat([r.note]); sendNotes(); }
    }, function () { if (L) L.pronBusy = false; });
  }
  function sendNotes() {
    if (!L || L.rotating || L.studentTurn || L.tutorTurn || (L.playing && L.playing.length)) return;
    if (rotate()) return;
    if (!L.notes || !L.notes.length) return;
    var notes = L.notes.splice(0), now = !!L.byeNow;
    L.byeNow = false;
    /* The goodbye is asked for at once; other notes wait for the tutor's next turn */
    send({ clientContent: { turns: [{ role: 'user', parts: [{ text: '<school>' + notes.join(' ') + '</school>' }] }], turnComplete: now } });
  }
  /* Google bills the whole conversation again on every turn, the audio of every earlier turn included: a 10-minute call
     on 10 Nov cost about $1.25, 80% of it this re-reading. Once the conversation passes ROTATE_TOKENS, the call moves to a
     fresh connection between turns: the new pass has the same instructions plus the call so far as text (cheaper, and
     much shorter than its audio), so the tutor keeps the thread. Not while an exercise or the sentence card is open.
     Counted from where the connection started, so a long brief never makes it move after every turn. */
  var ROTATE_GROWTH = 5500;
  function rotate() {
    if (!L || !L.started || L.renewing || L.ending || L.sample || !L.ctx0 || (L.ctx || 0) - L.ctx0 < ROTATE_GROWTH) return false;
    if (!(L.pass && L.pass.turn && L.pass.turn.manual) || L.waitReply || L.toolBusy || L.ex || (L.pronMsg && !L.pronResult) || L.prec || L.pbusy) return false;
    L.rotating = true; L.hold = []; L.handle = null; L.ctx = 0;
    renew('rotate');
    return true;
  }
  /* The time left, told to the tutor so it neither wraps up early nor runs out mid-explanation */
  /* Owner, 10 Nov 2026: told "one minute left", the tutor said goodbye half a minute early without saying why. Now the
     student hears that time is nearly up, the practice goes on, and goodbye comes only in the last 20 seconds, asked
     for at once (not left for the tutor's next turn). The time left is counted down here between the 30-second ticks. */
  function secondsLeft() { return L.seconds - Math.max(0, (Date.now() - (L.tickAt || Date.now())) / 1000); }
  function timeNotes() {
    if (!L || L.sample || !L.started || L.ending || L.seconds == null) return;
    var left = secondsLeft();
    if (left <= 20 && !L.toldBye) {
      L.toldBye = L.toldEnd = L.told2 = true;
      L.byeNow = true;
      L.notes = (L.notes || []).concat(['About 20 seconds of the call are left. Say goodbye now in one or two short sentences, with one thing to practise before next time.']);
    } else if (left <= 60 && !L.toldEnd) {
      L.toldEnd = L.told2 = true;
      L.notes = (L.notes || []).concat(['About one minute of the call is left. At your next turn tell the student so in a few words and sum up in one sentence what they learned today, then keep practising it with them. Do not say goodbye yet: you will be told when.']);
    } else if (left <= 150 && !L.told2) {
      L.told2 = true;
      L.notes = (L.notes || []).concat(['About two minutes of the call are left. Do not start a new topic: practise what you just taught.']);
    } else return;
    sendNotes();
  }
  /* The tutor's voice, played piece after piece without gaps */
  function playPcm(b64data) {
    var bytes = unb64(b64data), n = bytes.length >> 1, view = new DataView(bytes.buffer), buf = L.out.createBuffer(1, n, OUT_RATE), ch = buf.getChannelData(0);
    for (var i = 0; i < n; i++) ch[i] = view.getInt16(i * 2, true) / 0x8000;
    var src = L.out.createBufferSource(); src.buffer = buf; src.connect(L.an);
    var at = Math.max(L.out.currentTime + 0.03, L.head || 0);
    src.start(at); L.head = at + buf.duration;
    L.playing.push(src);
    src.onended = function () { L.playing = L.playing.filter(function (x) { return x !== src; }); if (!L.playing.length) { L.playEnd = Date.now(); setState('listening'); sendNotes(); } };
    setState('speaking');
  }
  function stopPlayback() {
    (L.playing || []).forEach(function (s) { try { s.stop(); } catch (e) { /* already done */ } });
    L.playing = []; L.head = 0; L.playEnd = Date.now();
  }

  /* ---------- The cascade engine (owner's test version, admins only) ----------
     Speaks to the rest of this file like Google's connection, so the face, board, exercises, captions, time and
     pronunciation checks work unchanged; behind it each turn goes to /api/tutor?action=cascade-turn (Whisper, the
     written tutor's model, Azure's voice; api/_lib/tutor-cascade.js). Each new turn of the student drops an answer
     still on its way, and stops the tutor's voice. */
  function cascadeLink() {
    var link = { readyState: 0, onopen: null, onmessage: null, onclose: null }, buf = [], notes = [], seq = 0, pending = false, unheard = false, lastSay = '';
    function emit(o) { if (link.readyState === 1 && link.onmessage) link.onmessage({ data: JSON.stringify(o) }); }
    /* One turn, streamed: what was heard, then the voice sentence by sentence as the server writes it, then the board */
    var askedAt = 0, speaking = false;
    function ask(body) {
      var my = ++seq;
      body.session = L.session;
      if (notes.length) body.notes = notes.splice(0);
      if (unheard) { body.unheard = true; unheard = false; }
      if (body.audio && lastSay) body.hint = lastSay;   /* what the student is likely to answer or repeat */
      pending = true; speaking = false; askedAt = Date.now();
      setState('thinking');
      var mine = function () { return my === seq && link.readyState === 1; };
      D().tutorCascadeStream(body, function (ev) {
        if (!mine() || !ev) return;
        if (ev.t === 'heard' && ev.heard) emit({ serverContent: { inputTranscription: { text: ev.heard } } });
        if (ev.t === 'audio' && ev.audio) {
          /* Arriving while the student is talking: not played over them; their new sentence will be answered */
          if (!speaking && L.studentTurn) { unheard = true; pending = false; seq++; return; }
          if (!speaking) { speaking = true; pending = false; }
          emit({ serverContent: { modelTurn: { parts: [{ inlineData: { mimeType: 'audio/pcm;rate=24000', data: ev.audio } }] } } });
        }
        if (ev.t === 'board') {
          if (ev.messages && ev.messages.length) emit({ alimun: { messages: ev.messages, board: ev.board } });
          if (ev.say) { lastSay = ev.say; emit({ serverContent: { outputTranscription: { text: ev.say } } }); }
        }
        if (ev.t === 'done') {
          pending = false;
          if (ev.ms) emit({ alimunCost: { usd: ev.usd, ms: ev.ms } });
          emit({ serverContent: { turnComplete: true } });
          if (!speaking) setState('listening');
        }
        if (ev.t === 'error') {
          pending = false;
          console.warn('[Alimun] cascade turn:', ev.reason);
          emit({ serverContent: { turnComplete: true } });
          setState('listening');
        }
      }).then(null, function (e) {
        if (!mine()) return;
        pending = false;
        console.warn('[Alimun] cascade turn:', e && (e.status + ' ' + (e.body && e.body.reason || '')));
        emit({ serverContent: { turnComplete: true } });
        setState('listening');
      });
    }
    link.close = function () { link.readyState = 3; seq++; };
    link.send = function (str) {
      var m = JSON.parse(str);
      if (m.setup) { setTimeout(function () { emit({ setupComplete: {} }); }, 0); return; }
      var ri = m.realtimeInput;
      if (ri) {
        if (ri.activityStart) {
          buf = [];
          /* The student goes on within 1.5 seconds, before the answer has started: they were still finishing their
             sentence, so that answer is dropped and taken out of the conversation, and the whole sentence gets one.
             Later, an answer still on its way is kept; a voice already playing stops (talked over). */
          if (pending && !speaking && Date.now() - askedAt < 1500) { unheard = true; pending = false; seq++; }
          else if (L.playing && L.playing.length) { seq++; emit({ serverContent: { interrupted: true } }); }
        }
        if (ri.audio && ri.audio.data && buf.length < IN_RATE * 30) {
          var bytes = unb64(ri.audio.data), view = new DataView(bytes.buffer);
          for (var i = 0; i + 1 < bytes.length; i += 2) buf.push(view.getInt16(i, true) / 0x8000);
        }
        if (ri.activityEnd) {
          if (buf.length >= IN_RATE * 0.3) ask({ audio: b64(wav16(buf)), mime: 'audio/wav' });
          else emit({ serverContent: { turnComplete: true } });
          buf = [];
        }
        return;
      }
      if (m.clientContent) {
        var text = (m.clientContent.turns || []).map(function (x) { return (x.parts || []).map(function (p) { return p.text || ''; }).join(' '); }).join(' ');
        if (m.clientContent.turnComplete) ask({ text: text });
        else notes.push(text.replace(/^<school>/, '').replace(/<\/school>$/, ''));
      }
    };
    setTimeout(function () { link.readyState = 1; if (link.onopen) link.onopen(); }, 0);
    return link;
  }
  function costUi() {
    var el = root && root.querySelector('[data-tl-cost]');
    if (!el || !L || !L.cost) return;
    el.textContent = t('app_tl_test_cost', { usd: '$' + Number(L.cost.usd || 0).toFixed(3), sec: ((L.cost.ms && L.cost.ms.total || 0) / 1000).toFixed(1) });
  }

  /* ---------- The connection to Google ---------- */
  function send(msg) {
    if (!L) return;
    /* While a fresh connection is made (rotate), what the student says is kept and sent once it is ready */
    if (L.rotating && msg.realtimeInput) { if (L.hold.length < 400) L.hold.push(msg); return; }
    if (L.ws && L.ws.readyState === 1) L.ws.send(JSON.stringify(msg));
  }
  function connect(pass) {
    L.pass = pass; L.ready = false; L.conn = (L.conn || 0) + 1; L.ctx = 0; L.ctx0 = 0;
    if (!L.rotating) { L.taker = null; L.studentTurn = false; L.tutorTurn = false; L.turnAudio = null; L.waitReply = false; }
    var ws = L.ws = pass.engine === 'cascade' ? cascadeLink() : new WebSocket(pass.url + '?access_token=' + encodeURIComponent(pass.token));
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
  /* Google's token counts, kept as they come and sent with the next tick: they measure what a minute of call really
     costs (tutor_sessions.live_usage); the student's time is counted by the ticks, not by these */
  function modal(list, kind) {
    var n = 0;
    (Array.isArray(list) ? list : []).forEach(function (x) { if (x && x.modality === kind) n += Number(x.tokenCount) || 0; });
    return n;
  }
  function usageOf(u) {
    return { n: L.conn || 0, t: Math.round((Date.now() - (L.startedAt || Date.now())) / 1000), p: u.promptTokenCount || 0, c: u.cachedContentTokenCount || 0,
      r: u.responseTokenCount || 0, th: u.thoughtsTokenCount || 0, tu: u.toolUsePromptTokenCount || 0,
      pa: modal(u.promptTokensDetails, 'AUDIO'), pt: modal(u.promptTokensDetails, 'TEXT'), ra: modal(u.responseTokensDetails, 'AUDIO'), rt: modal(u.responseTokensDetails, 'TEXT') };
  }
  function onMessage(m) {
    if (m.alimun) { awake(); applyBoard(m.alimun.messages || [], m.alimun.board); return; }
    if (m.alimunCost) { L.cost = m.alimunCost; costUi(); return; }
    if (m.usageMetadata) {
      if (L.usage && L.usage.length < 100) L.usage.push(usageOf(m.usageMetadata));
      L.ctx = Number(m.usageMetadata.promptTokenCount) || L.ctx || 0;
      if (!L.ctx0) L.ctx0 = L.ctx;   /* where this connection started: instructions, brief and the call so far as text */
    }
    if (m.setupComplete) {
      L.ready = true;
      var first = !L.started;
      L.started = true; L.note = null;
      setState('listening');
      if (L.rotating) {
        /* A planned fresh connection: nothing to say, the student's held words go out now */
        L.rotating = false;
        L.hold.splice(0).forEach(send);
        sendNotes(); draw(); return;
      }
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
    if (c.interrupted) { stopPlayback(); flush('tutor'); setState('listening'); L.tutorTurn = false; }
    if (c.modelTurn || c.outputTranscription) L.tutorTurn = true;
    if (c.inputTranscription || c.outputTranscription || c.modelTurn) awake();
    if (c.inputTranscription && c.inputTranscription.text) { if (L.cur.tutor) flush('tutor'); L.cur.student += c.inputTranscription.text; captions(); }
    if (c.outputTranscription && c.outputTranscription.text) { if (L.cur.student) flush('student'); L.cur.tutor += c.outputTranscription.text; captions(); }
    (c.modelTurn && c.modelTurn.parts || []).forEach(function (p) {
      if (p.inlineData && p.inlineData.data && /audio\/pcm/.test(p.inlineData.mimeType || '')) playPcm(p.inlineData.data);
    });
    if (c.turnComplete) { flush('student'); flush('tutor'); L.tutorTurn = false; L.waitReply = false; sendNotes(); }
  }
  /* A finished line goes to the captions and waits for the next tick */
  function flush(role) {
    var text = String(L.cur[role] || '').replace(/\s+/g, ' ').trim();
    L.cur[role] = '';
    if (role === 'student' && text) checkTurn(text);
    if (!text) return;
    L.lines.push({ role: role, text: text });
    if (L.engine !== 'cascade') L.queue.push({ role: role, text: text });   /* a cascade call's lines are stored by the server */
    captions();
  }
  function renew(why) {
    if (!L || L.ending || L.renewing) return;
    L.renewing = true; L.note = why === 'dropped' ? 'app_tl_dropped' : null; draw();
    var old = L.ws; L.ws = null; L.ready = false;
    if (old) { try { old.close(); } catch (e) { /* gone */ } }
    tick().then(function () {
      if (!L || L.ending) return null;
      return D().tutorLiveStart({ tutor: L.tutor, ui: A.lang, session: L.session, handle: L.handle, engine: L.engine || undefined });
    }).then(function (pass) {
      if (!L || L.ending || !pass) return;
      L.renewing = false; connect(pass);
    }, function (e) {
      if (!L) return;
      L.renewing = false; L.rotating = false; L.hold = [];
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
    L.toolBusy = (L.toolBusy || 0) + 1;
    var done = function () { if (L) L.toolBusy = Math.max(0, (L.toolBusy || 1) - 1); };
    D().tutorLiveBoard({ session: L.session, calls: plain }).then(function (r) {
      done();
      if (!L || L.ended) return;
      applyBoard(r.messages || [], r.board);
      toolAnswer(r.results || []);
    }, function () {
      done();
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
    if (!(L.pass && L.pass.turn && L.pass.turn.manual)) send({ realtimeInput: { audioStreamEnd: true } });
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
    timeNotes();
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
    var lines = L.queue.splice(0, L.queue.length), usage = (L.usage || []).splice(0);
    return D().tutorLiveTick(usage.length ? { session: L.session, lines: lines, usage: usage } : { session: L.session, lines: lines }).then(function (r) {
      if (!L) return;
      L.seconds = r.seconds; L.tickAt = Date.now(); clock(); timeNotes();
      if (r.stop) { if (r.summary) L.summary = r.summary; end(r.stop === 'budget' ? 'app_tu_err_budget' : 'app_tu_none_left', true); }
    }, function (e) {
      if (!L) return;
      if (e && e.status !== 409) { L.queue = lines.concat(L.queue); L.usage = usage.concat(L.usage || []).slice(0, 100); }   /* tried again at the next tick */
      if (e && e.body && e.body.reason === 'ended' && !L.renewing) end('app_tl_lost', true);
    });
  }

  /* ---------- The call ---------- */
  function start(tutor, opts) {
    var sample = !!opts.sample;
    L = Object.assign(L || {}, { tutor: tutor, sample: sample, engine: opts.engine === 'cascade' ? 'cascade' : null, cost: null, state: 'connecting', lines: [], queue: [], cur: { student: '', tutor: '' }, playing: [], seconds: opts.seconds || 0,
      started: false, ending: false, ended: false, muted: false, note: null, summary: null, handle: null, session: null, fresh: true, failed: null, renewing: false, head: 0,
      usage: [], conn: 0, startedAt: Date.now(), tickAt: Date.now(), ctx: 0, rotating: false, hold: [], notes: [], told2: false, toldEnd: false, toldBye: false, byeNow: false, board: [], newOps: 0, ex: null, exMsg: null, got: [], pronMsg: null, pronResult: null, prec: null, boardOpen: false });
    draw();
    if (sample) { runSample(); return; }
    if (!supported()) { fail('app_tl_unsupported'); return; }
    prime();
    var mic = L.micAsk;
    var ask = opts.lesson ? { tutor: tutor, ui: A.lang, lesson: opts.lesson } : { tutor: tutor, ui: A.lang };
    if (opts.engine === 'cascade') ask.engine = 'cascade';
    D().tutorLiveStart(ask).then(function (pass) {
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
    if (L.muted && !(L.pass && L.pass.turn && L.pass.turn.manual)) send({ realtimeInput: { audioStreamEnd: true } });
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
    return L.state === 'speaking' ? t('app_tl_speaking', { name: name }) : L.state === 'thinking' ? t('app_tl_thinking', { name: name }) : L.state === 'listening' ? t('app_tl_listening', { name: name }) : L.state === 'ending' ? t('app_tl_ending') : t('app_tl_connecting');
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
    var html = '<div class="tl-wrap' + (live() ? ' is-live' : '') + '" data-board="closed"><div class="view__head tu-head"><div><h1 class="t-h1">' + esc(t('app_tl_h', { name: name })) + '</h1><p class="t-lead" data-tl-left>' + esc(t('app_tu_left_n', { time: mins(L.seconds) })) + '</p>' + (L.engine === 'cascade' ? '<p class="t-small" data-tl-cost>' + esc(t('app_tl_test_h')) + '</p>' : '') + '</div>' +
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
    layoutUi(); costUi();
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

  window.AlimunTutorLive = { speechGate: speechGate, turnTaker: turnTaker, wav16: wav16, prime: prime, want: want, begin: begin, mount: mount, active: active, reset: reset, myTutor: myTutor, setTutor: setTutor, supported: supported, TUTOR_KEY: TUTOR_KEY };
})();
