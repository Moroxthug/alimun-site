/* Alimun: course audio, admin only and not linked (docs/DASHBOARD_PLAN.md, step 5). Shows how much of each book is
   voiced and, with Start, keeps calling /api/speech?action=generate book after book while this tab stays open.
   Files: Supabase Storage course-audio/<book>/<hash>.mp3, listed in <book>/manifest.json. Interface in English. */
(function () {
  'use strict';
  var SUPA = 'https://dgaiasmefcbrtzqwdyri.supabase.co';
  var PRICE_MIN = 0.0135;  /* USD per minute of audio, gemini-3.8-flash-tts until 31 Dec 2026 */
  var token = null, books = [], state = {}, running = false;
  var list = document.getElementById('books'), status = document.getElementById('status'), btn = document.getElementById('go');

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function say(m) { status.textContent = m; }
  function getJSON(u) { return fetch(u, { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }); }

  function draw() {
    var all = 0, done = 0, secs = 0;
    list.innerHTML = books.map(function (b) {
      var s = state[b.id] || { total: 0, done: 0, seconds: 0 };
      all += s.total; done += s.done; secs += s.seconds;
      var w = s.total ? Math.round(s.done / s.total * 100) : 0;
      return '<div class="card span-6 au"><h2 class="t-h3">' + esc(b.id) + '</h2>' +
        '<div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + w + '"><i style="width:' + w + '%"></i></div>' +
        '<p class="t-small">' + s.done + ' of ' + s.total + ' files, ' + Math.round(s.seconds / 60) + ' min' + (s.err ? ' · <b>' + esc(s.err) + '</b>' : '') + '</p></div>';
    }).join('');
    document.getElementById('sum').textContent = done + ' of ' + all + ' files, ' + Math.round(secs / 60) + ' minutes of audio, about $' + (secs / 60 * PRICE_MIN).toFixed(2) + ' so far.';
  }

  function load() {
    return getJSON('/data/books/index.json').then(function (x) {
      books = (x && x.books || []).filter(function (b) { return b.written > 0; });
      return Promise.all(books.map(function (b) {
        return Promise.all([getJSON('/data/audio/' + b.id + '.json'), getJSON(SUPA + '/storage/v1/object/public/course-audio/' + b.id + '/manifest.json?t=' + Date.now())]).then(function (r) {
          var plan = r[0], man = r[1] || { done: {} }, h = {};
          if (plan) Object.keys(plan.items).forEach(function (k) { h[plan.items[k][0]] = true; });
          var ids = Object.keys(h);
          state[b.id] = { total: ids.length, done: ids.filter(function (x) { return man.done[x]; }).length,
            seconds: ids.reduce(function (n, x) { return n + (man.done[x] || 0); }, 0) };
        });
      }));
    }).then(draw);
  }

  function step() {
    if (!running) return;
    var b = books.filter(function (x) { var s = state[x.id]; return s && s.done < s.total && (s.fails || 0) < 3; })[0];
    if (!b) { running = false; btn.textContent = 'Start'; say('Finished: every book has its audio, or the remaining files failed three times (see the books marked in bold).'); return; }
    say('Working on ' + b.id + '…');
    fetch('/api/speech?action=generate', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token }, body: JSON.stringify({ book: b.id }) })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error((j.error || r.status) + (j.detail ? ': ' + JSON.stringify(j.detail) : '')); return j; }); })
      .then(function (j) {
        var s = state[b.id];
        s.total = j.total; s.done = j.done; s.seconds = j.seconds;
        if (j.retryAfter) {
          /* Google's per-minute limit: wait and carry on, it is not a failure */
          draw();
          say(new Date().toLocaleTimeString() + ': Google asked to wait, so waiting ' + j.retryAfter + ' seconds, then carrying on. Google said: ' + (j.limitMessage || 'rate limit'));
          setTimeout(step, j.retryAfter * 1000 + 1500);
          return;
        }
        if (!j.made && j.failed.length) { s.fails = (s.fails || 0) + 1; s.err = j.failed[0].error + (j.failed[0].detail ? ' ' + JSON.stringify(j.failed[0].detail).slice(0, 200) : ''); }
        else { s.fails = 0; s.err = ''; }
        draw();
        setTimeout(step, 300);
      })
      .catch(function (e) { var s = state[b.id]; s.fails = (s.fails || 0) + 1; s.err = e.message; draw(); setTimeout(step, 3000); });
  }

  btn.addEventListener('click', function () {
    running = !running;
    btn.textContent = running ? 'Pause' : 'Start';
    if (running) step(); else say('Paused. Start again whenever you like; nothing is lost.');
  });

  function boot() {
    var sb = window.supabase.createClient(SUPA, 'sb_publishable_6epxmytr0e38p6OI77U_NQ_8pFzrzlh', { auth: { persistSession: true, storageKey: 'alimun-auth' } });
    sb.auth.getSession().then(function (r) {
      var s = r.data && r.data.session;
      if (!s || !s.user.app_metadata || s.user.app_metadata.role !== 'admin') { say('Sign in with the admin account first, then come back to this page.'); return; }
      token = s.access_token;
      /* The session token expires after an hour; keep it fresh while the tab works */
      sb.auth.onAuthStateChange(function (ev, ses) { if (ses) token = ses.access_token; });
      return load().then(function () { btn.disabled = false; say('Press Start and keep this tab open. Google allows about 10 recordings a minute on this plan, so this takes a few hours.'); });
    }).catch(function (e) { say('Could not start: ' + e.message); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
