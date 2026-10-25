/* Alimun: voice comparison for the course audio (docs/DASHBOARD_PLAN.md, step 5). Admin only, not linked anywhere.
   The owner listens to the same sentences and dialogues in each course language with different Gemini voices and
   picks the ones the course books will use. Audio comes from /api/speech?action=sample (admin JWT); nothing is stored.
   Interface in English (internal tool, like the design kit). */
(function () {
  'use strict';
  var LANGS = {
    English: { s: 'I’ve lived here since 2019, and I still discover new places every weekend.',
      d: [['A', 'Excuse me, is this the train to Manchester?'], ['B', 'Yes, it is. It leaves from platform four in ten minutes.']] },
    German: { s: 'Ich wohne seit drei Jahren in Berlin und entdecke jedes Wochenende etwas Neues.',
      d: [['A', 'Entschuldigung, fährt dieser Zug nach Hamburg?'], ['B', 'Ja, genau. Er fährt in zehn Minuten von Gleis vier ab.']] },
    French: { s: 'J’habite à Lyon depuis trois ans et je découvre encore de nouveaux endroits chaque week-end.',
      d: [['A', 'Excusez-moi, c’est bien le train pour Marseille ?'], ['B', 'Oui, c’est ça. Il part du quai quatre dans dix minutes.']] },
    Spanish: { s: 'Vivo en Madrid desde hace tres años y todavía descubro sitios nuevos cada fin de semana.',
      d: [['A', 'Perdone, ¿este es el tren para Sevilla?'], ['B', 'Sí, es este. Sale del andén cuatro dentro de diez minutos.']] },
    Italian: { s: 'Abito a Bologna da tre anni e ogni fine settimana scopro ancora posti nuovi.',
      d: [['A', 'Scusi, è questo il treno per Firenze?'], ['B', 'Sì, è questo. Parte dal binario quattro tra dieci minuti.']] },
    Portuguese: { s: 'Moro em Lisboa há três anos e ainda descubro sítios novos todos os fins de semana.',
      d: [['A', 'Desculpe, este é o comboio para o Porto?'], ['B', 'Sim, é este. Parte da linha quatro daqui a dez minutos.']] }
  };
  /* A first shortlist; every Gemini voice is in the list below each language */
  var SHORT = ['Kore', 'Puck', 'Charon', 'Aoede', 'Leda', 'Orus', 'Achird', 'Sulafat', 'Vindemiatrix', 'Sadaltager'];
  var STYLE = 'clear and natural, at a calm pace for language learners';
  var cache = {}, voices = SHORT, token = null;
  var app = document.getElementById('voices');

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function say(msg) { document.getElementById('status').textContent = msg; }
  function opts(sel) { return voices.map(function (v) { return '<option' + (v === sel ? ' selected' : '') + '>' + esc(v) + '</option>'; }).join(''); }

  function draw() {
    app.innerHTML = Object.keys(LANGS).map(function (l, i) {
      var x = LANGS[l];
      return '<section class="card span-12 vc" style="--i:' + i + '" data-lang="' + esc(l) + '">' +
        '<h2 class="t-h2">' + esc(l) + '</h2>' +
        '<p class="t-body vc__s">' + esc(x.s) + '</p>' +
        '<div class="vc__grid">' + SHORT.map(function (v) {
          return '<button class="btn btn--ghost btn--sm" type="button" data-play="s" data-voice="' + esc(v) + '">' + esc(v) + '</button>';
        }).join('') + '</div>' +
        '<div class="vc__dlg"><p class="t-small">' + x.d.map(function (d) { return '<b>' + d[0] + '</b> ' + esc(d[1]); }).join('<br>') + '</p>' +
        '<div class="btn-row"><label class="t-small">A <select data-a>' + opts('Puck') + '</select></label>' +
        '<label class="t-small">B <select data-b>' + opts('Kore') + '</select></label>' +
        '<button class="btn btn--primary btn--sm" type="button" data-play="d">Play the dialogue</button></div></div>' +
        '</section>';
    }).join('');
  }

  function play(btn, payload, key) {
    var model = document.querySelector('input[name="model"]:checked').value;
    payload.model = model; payload.style = STYLE;
    key = model + '|' + key;
    var start = function (url) {
      var a = new Audio(url);
      document.querySelectorAll('.is-playing').forEach(function (b) { b.classList.remove('is-playing'); });
      btn.classList.add('is-playing');
      a.onended = function () { btn.classList.remove('is-playing'); };
      a.play();
    };
    if (cache[key]) return start(cache[key]);
    btn.disabled = true; say('Making the audio…');
    var t0 = Date.now();
    fetch('/api/speech?action=sample', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token }, body: JSON.stringify(payload) })
      .then(function (r) {
        if (r.ok) return r.blob();
        return r.json().catch(function () { return {}; }).then(function (j) { throw new Error((j.error || r.status) + (j.detail ? ' ' + JSON.stringify(j.detail) : '')); });
      })
      .then(function (b) { cache[key] = URL.createObjectURL(b); say('Ready in ' + ((Date.now() - t0) / 1000).toFixed(1) + ' s.'); start(cache[key]); })
      .catch(function (e) { say('Did not work: ' + e.message); })
      .then(function () { btn.disabled = false; });
  }

  app.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-play]');
    if (!btn) return;
    var sec = btn.closest('[data-lang]'), x = LANGS[sec.getAttribute('data-lang')];
    if (btn.getAttribute('data-play') === 's') {
      var v = btn.getAttribute('data-voice');
      play(btn, { text: x.s, voice: v }, sec.getAttribute('data-lang') + '|s|' + v);
    } else {
      var a = sec.querySelector('[data-a]').value, b = sec.querySelector('[data-b]').value;
      play(btn, { lines: x.d.map(function (d) { return { speaker: d[0], text: d[1] }; }), voices: { A: a, B: b } }, sec.getAttribute('data-lang') + '|d|' + a + '|' + b);
    }
  });

  function boot() {
    var cfg = window.ALIMUN_CONFIG || {};
    var sb = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey, { auth: { persistSession: true, storageKey: 'alimun-auth' } });
    Promise.all([sb.auth.getSession(), fetch('/api/speech?action=status').then(function (r) { return r.json(); })]).then(function (r) {
      var s = r[0].data && r[0].data.session, st = r[1];
      if (st.voices) voices = st.voices;
      if (!st.configured) { say('GOOGLE_AI_API_KEY is not set in Vercel yet.'); return; }
      if (!s || !s.user || !s.user.app_metadata || s.user.app_metadata.role !== 'admin') { say('Sign in with the admin account first, then come back to this page.'); return; }
      token = s.access_token;
      say('Pick a voice to hear it. Each sound is made once and then replays from this page.');
      draw();
    }).catch(function (e) { say('Could not start: ' + e.message); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
