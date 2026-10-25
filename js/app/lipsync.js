/* Alimun app: lip sync for the tutors (js/app/cast3.js), in the browser, at no cost per minute.
   AlimunLipsync.follow(audio, el): while the audio plays, sets data-mouth on el to one of the tutor's five mouth
   shapes (m, e, a, o; rest when silent), chosen about every 70 ms from loudness and how often the wave crosses zero.
   The audio must allow it (same origin, or crossOrigin="anonymous" with CORS, as Supabase Storage does).
   Returns a function that stops following. */
(function () {
  'use strict';
  var ctx = null, sources = typeof WeakMap === 'function' ? new WeakMap() : null;
  function follow(audio, el) {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC || !sources) { el.setAttribute('data-mouth', 'rest'); return function () {}; }
    ctx = ctx || new AC();
    var node = sources.get(audio);
    if (!node) { node = { src: ctx.createMediaElementSource(audio), an: ctx.createAnalyser() }; node.an.fftSize = 1024; node.src.connect(node.an); node.an.connect(ctx.destination); sources.set(audio, node); }
    var buf = new Float32Array(node.an.fftSize), last = 0, shape = 'rest', raf = 0, on = true;
    var tick = function (ts) {
      if (!on) return;
      if (audio.paused || audio.ended) { el.setAttribute('data-mouth', 'rest'); raf = requestAnimationFrame(tick); return; }
      node.an.getFloatTimeDomainData(buf);
      var sum = 0, zc = 0;
      for (var i = 0; i < buf.length; i++) { sum += buf[i] * buf[i]; if (i && (buf[i] > 0) !== (buf[i - 1] > 0)) zc++; }
      var rms = Math.sqrt(sum / buf.length), z = zc / buf.length;
      if (ts - last > 70) {
        last = ts;
        shape = rms < 0.012 ? 'm' : z > 0.14 ? 'e' : rms < 0.04 ? (shape === 'e' ? 'o' : 'e') : rms > 0.09 ? 'a' : (Math.random() < 0.5 ? 'o' : 'a');
        el.setAttribute('data-mouth', shape);
      }
      raf = requestAnimationFrame(tick);
    };
    ctx.resume();
    raf = requestAnimationFrame(tick);
    return function () { on = false; cancelAnimationFrame(raf); el.setAttribute('data-mouth', 'rest'); };
  }
  window.AlimunLipsync = { follow: follow };
})();
