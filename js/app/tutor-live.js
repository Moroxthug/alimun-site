/* Alimun app: the live tutor call (docs/AI_TUTOR_PLAN.md, part 7). Route #/tutor/live, mounted by js/app/tutor.js.
   The student talks with the tutor they picked (Lena, Mei, Sofia, Arthur, Kofi or Omar, js/app/cast3.js), each with its
   own voice. /api/tutor?action=live-start gives a one-use pass to Google's Gemini Live API whose setup (instructions,
   voice) the server built and locked; the page streams the microphone to Google as 16 kHz PCM and plays the tutor's
   24 kHz voice as it arrives, the tutor's mouth following the sound (js/app/lipsync.js followAnalyser). Google's
   transcripts show as captions and go to /api/tutor?action=live-tick every 30 seconds, which also counts the time and
   ends the call when it runs out. The pass is renewed before it expires and when Google asks (session resumption).
   Sample (signed out or ?sample=1): a scripted call, nothing is sent and the microphone is not used.
   Interface text: app_tl_* keys. */
(function () {
  'use strict';
  var A = null, root = null, L = null;   /* L: the call's state */
  var TICK_MS = 30000, IN_RATE = 16000, OUT_RATE = 24000, CHUNK = 1600;   /* 100 ms of microphone per message */
  var TUTOR_KEY = 'alimun-tutor';
  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function D() { return window.AlimunData; }
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
  /* The microphone as 16 kHz 16-bit PCM in 100 ms pieces, sent while the call is open and not muted */
  function startMic(stream) {
    var AC = window.AudioContext || window.webkitAudioContext, ctx = new AC();
    L.inCtx = ctx; L.stream = stream; ctx.resume();
    var src = ctx.createMediaStreamSource(stream), ratio = ctx.sampleRate / IN_RATE, pend = [], acc = 0;
    var feed = function (f) {
      if (!L || L.muted || !L.ready) return;
      for (var i = 0; i < f.length; i++) {
        acc += 1;
        if (acc >= ratio) { acc -= ratio; pend.push(Math.max(-1, Math.min(1, f[i]))); }
      }
      while (pend.length >= CHUNK) {
        var part = pend.splice(0, CHUNK), pcm = new Int16Array(CHUNK);
        for (var j = 0; j < CHUNK; j++) pcm[j] = part[j] < 0 ? part[j] * 0x8000 : part[j] * 0x7fff;
        send({ realtimeInput: { audio: { mimeType: 'audio/pcm;rate=' + IN_RATE, data: b64(new Uint8Array(pcm.buffer)) } } });
      }
    };
    var silent = ctx.createGain(); silent.gain.value = 0; silent.connect(ctx.destination);
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
    var c = m.serverContent;
    if (!c) return;
    if (c.interrupted) { stopPlayback(); flush('tutor'); setState('listening'); }
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
      started: false, ending: false, ended: false, muted: false, note: null, summary: null, handle: null, session: null, fresh: true, failed: null, renewing: false, head: 0 });
    draw();
    if (sample) { runSample(); return; }
    if (!supported()) { fail('app_tl_unsupported'); return; }
    prime();
    var mic = L.micAsk;
    D().tutorLiveStart({ tutor: tutor, ui: A.lang }).then(function (pass) {
      /* Ended while connecting: the session just opened is closed again */
      if (!L || L.ending) { D().tutorEnd(pass.session.id).catch(function () {}); return; }
      L.session = pass.session.id; L.fresh = pass.fresh; L.seconds = pass.seconds; clock();
      return mic.then(function (stream) {
        return startMic(stream).then(function () {
          if (!L || L.ending) return;
          connect(pass);
          L.ticker = setInterval(tick, TICK_MS);
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
      fail(r === 'no_time' ? 'app_tu_none_left' : r === 'budget' ? 'app_tu_err_budget' : r === 'email' ? 'app_tu_email' : e && e.status === 429 ? 'app_tu_err_fast' : 'app_tl_failed');
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
    clearInterval(L.ticker); clearTimeout(L.renewTimer); clearTimeout(L.sampleTimer);
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
    ['tutor', 'Hallo Sam! Schön, dich zu sehen. Wollen wir heute über dein Wochenende sprechen?'],
    ['student', 'Ja, gerne. Am Wochenende ich bin ins Kino gegangen.'],
    ['tutor', 'Super! Am Wochenende bin ich ins Kino gegangen. Das Verb kommt an zweite Stelle. Was hast du gesehen?'],
    ['student', 'Einen Film über Berlin.'],
    ['tutor', 'Toll! Sag mal Berlin, mit einem klaren e: Ber-lin. Und wie war der Film?']
  ];
  var SAMPLE_SUMMARY = { title: 'Das Wochenende im Perfekt', summary: 'You talked about your weekend and practised word order after Am Wochenende. Next time: separable verbs in the Perfekt.', words: [{ w: 'ins Kino gehen', m: 'to go to the cinema' }] };
  function runSample() {
    var i = 0;
    L.started = true; L.seconds = 3120;
    setTimeout(function () { if (L && !L.ending) { setState('listening'); draw(); next(); } }, 900);
    function next() {
      if (!L || L.ending || i >= SAMPLE_LINES.length) return;
      var line = SAMPLE_LINES[i++], words = line[1].split(' '), w = 0;
      if (line[0] === 'tutor') setState('speaking');
      var step = function () {
        if (!L || L.ending) return;
        if (w < words.length) {
          L.cur[line[0]] += (w ? ' ' : '') + words[w++]; captions();
          var face = root && root.querySelector('[data-tl-face]');
          if (face && line[0] === 'tutor') face.setAttribute('data-mouth', ['a', 'e', 'o', 'm', 'e', 'a'][w % 6]);
          L.sampleTimer = setTimeout(step, line[0] === 'tutor' ? 260 : 200);
        } else {
          flush(line[0]);
          var face2 = root && root.querySelector('[data-tl-face]'); if (face2) face2.setAttribute('data-mouth', 'rest');
          setState('listening'); L.seconds -= 20; clock();
          L.sampleTimer = setTimeout(next, 900);
        }
      };
      step();
    }
  }

  /* ---------- Drawing ---------- */
  function setState(s) {
    if (!L || L.ending) return;
    if (L.state === s) return;
    L.state = s;
    var el = root && root.querySelector('[data-tl-state]');
    if (el) el.textContent = stateText();
    var st = root && root.querySelector('.tl-stage'); if (st) st.setAttribute('data-state', s);
  }
  function stateText() {
    var name = cap(L.tutor);
    if (L.note) return t(L.note);
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
      }).join('') + '</div>' : '') +
      '<div class="btn-row" style="margin-top:16px"><a class="btn btn--primary" href="#/tutor">' + esc(t('app_tu_back')) + '</a></div></section>';
  }
  function draw() {
    if (!root || !L) return;
    var name = cap(L.tutor), on = L.started && !L.ended;
    var html = '<div class="view__head tu-head"><div><h1 class="t-h1">' + esc(t('app_tl_h', { name: name })) + '</h1><p class="t-lead" data-tl-left>' + esc(t('app_tu_left_n', { time: mins(L.seconds) })) + '</p></div>' +
      (L.ended ? '' : '<div class="btn-row">' + (on ? '<button class="btn btn--quiet btn--sm" type="button" data-tl="mute" aria-pressed="' + (L.muted ? 'true' : 'false') + '">' + esc(t(L.muted ? 'app_tl_unmute' : 'app_tl_mute')) + '</button>' : '') +
        '<button class="btn btn--primary btn--sm" type="button" data-tl="end"' + (L.ending ? ' disabled' : '') + '>' + esc(t('app_tl_end')) + '</button></div>') + '</div>';
    html += '<div class="tl-grid">';
    html += '<section class="tl-stage" data-state="' + esc(L.state) + '" aria-labelledby="tl-name"><div class="tl-face tutor-art" data-tl-face data-mouth="rest" aria-hidden="true">' + (A.Cast.tutor ? A.Cast.tutor(L.tutor) : '') + '</div>' +
      '<h2 class="t-h2 tl-name" id="tl-name">' + esc(name) + '</h2>' +
      '<p class="t-body tl-state" data-tl-state aria-live="polite">' + (L.ended ? '' : (L.state === 'connecting' || L.state === 'ending' ? loader(22) : '') + '<span>' + esc(stateText()) + '</span>') + '</p></section>';
    html += L.ended ? summaryHtml() : '<section class="card tl-captions" aria-labelledby="tl-cap-h"><h2 class="t-h3" id="tl-cap-h">' + esc(t('app_tl_captions_h')) + '</h2><div class="ms-msgs tl-lines" data-tl-lines aria-live="polite"></div></section>';
    html += '</div>';
    if (L.sample) html += '<p class="t-tiny" style="margin-top:12px">' + esc(t('app_tu_sample')) + '</p>';
    root.innerHTML = html;
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
      var b = e.target.closest('[data-tl]');
      if (!b || b.disabled) return;
      var act = b.getAttribute('data-tl');
      if (act === 'end') end();
      else if (act === 'mute') toggleMute();
    });
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

  window.AlimunTutorLive = { prime: prime, want: want, begin: begin, mount: mount, active: active, reset: reset, myTutor: myTutor, setTutor: setTutor, supported: supported, TUTOR_KEY: TUTOR_KEY };
})();
