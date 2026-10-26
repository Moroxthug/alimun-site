/* Alimun: course audio, admin only and not linked (docs/DASHBOARD_PLAN.md, step 5). Shows how much of each book is
   voiced and, with Start, keeps calling /api/speech?action=generate book after book while this tab stays open.
   Google's per-minute limit: wait the seconds it asks. Its daily limit: stop asking until the reset, then carry on.
   Files: Supabase Storage course-audio/<book>/<hash>.mp3, listed in <book>/manifest.json. Interface in English. */
(function () {
  'use strict';
  var SUPA = 'https://dgaiasmefcbrtzqwdyri.supabase.co';
  var PRICE_MIN = 0.0135;  /* USD per minute of audio, gemini-3.8-flash-tts until 31 Dec 2026 */
  var token = null, books = [], state = {}, running = false, tally = { req: 0, made: 0, split: 0 }, timer = null;
  /* Google's daily limit: when it resets (remembered in this browser, so a reopened tab waits instead of asking) */
  var RESET_KEY = 'alimun-audio-reset';
  function resetAt() { try { var v = +localStorage.getItem(RESET_KEY); return v > Date.now() ? v : 0; } catch (e) { return 0; } }
  function hm(ms) { var m = Math.max(1, Math.round(ms / 60000)); return m < 60 ? m + ' min' : Math.floor(m / 60) + ' h ' + (m % 60) + ' min'; }
  function later(fn, ms) { clearTimeout(timer); timer = setTimeout(fn, ms); }
  /* Waits for the daily reset (checked every minute, so a sleeping laptop catches up), then carries on */
  function waitForReset() {
    var at = resetAt();
    if (!running) return;
    if (!at) { step(); return; }
    say('Google\u2019s daily limit is used up (it allows 100 voice requests a day on the current plan). Carrying on by itself at ' +
      new Date(at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' (in ' + hm(at - Date.now()) + ') if this tab stays open. Nothing is asked of Google until then.');
    later(waitForReset, Math.min(60000, at - Date.now() + 1000));
  }
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
    /* Course books, then the mock tests (/data/tests/index.json, step 8): their recordings use the same folders by id */
    /* ... and the library shelves (/data/library/index.json, step 9) */
    return Promise.all([getJSON('/data/books/index.json'), getJSON('/data/tests/index.json'), getJSON('/data/library/index.json')]).then(function (r) {
      var x = r[0], tests = (r[1] && r[1].tests || []).map(function (t) { return { id: t.id, test: true }; });
      var shelves = (r[2] && r[2].shelves || []).map(function (s) { return { id: s.id, test: true }; });
      books = (x && x.books || []).filter(function (b) { return b.written > 0; }).concat(tests, shelves);
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
    var first = document.getElementById('tests-first').checked;
    var b = books.filter(function (x) { var s = state[x.id]; return s && s.done < s.total && (s.fails || 0) < 3; })
      .sort(function (p, q) { return first ? (q.test ? 1 : 0) - (p.test ? 1 : 0) : 0; })[0];
    if (!b) { running = false; btn.textContent = 'Start'; say('Finished: every book has its audio, or the remaining files failed three times (see the books marked in bold).'); return; }
    say('Working on ' + b.id + '…');
    fetch('/api/speech?action=generate', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token }, body: JSON.stringify({ book: b.id }) })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error((j.error || r.status) + (j.detail ? ': ' + JSON.stringify(j.detail) : '')); return j; }); })
      .then(function (j) {
        var s = state[b.id];
        s.total = j.total; s.done = j.done; s.seconds = j.seconds;
        if (j.retryAfter && j.daily) {
          /* Google's daily limit: no point asking again before it resets */
          draw();
          try { localStorage.setItem(RESET_KEY, String(Date.parse(j.resetAt) + 60000)); } catch (e) { /* private mode */ }
          waitForReset();
          return;
        }
        if (j.retryAfter) {
          /* Google's per-minute limit: wait and carry on, it is not a failure */
          draw();
          say(new Date().toLocaleTimeString() + ': Google asked to wait, so waiting ' + j.retryAfter + ' seconds, then carrying on. Google said: ' + (j.limitMessage || 'rate limit'));
          later(step, j.retryAfter * 1000 + 1500);
          return;
        }
        if (j.requests) {
          tally.req += j.requests; tally.made += j.made; tally.split += j.splitFailed || 0;
          say(new Date().toLocaleTimeString() + ': ' + b.id + ', ' + tally.made + ' recordings from ' + tally.req + ' requests to Google in this session' +
            (tally.split ? ' (' + tally.split + ' groups could not be cut at the pauses and were redone in halves)' : '') + '.');
        }
        if (!j.made && j.failed.length) { s.fails = (s.fails || 0) + 1; s.err = j.failed[0].error + (j.failed[0].detail ? ' ' + JSON.stringify(j.failed[0].detail).slice(0, 200) : ''); }
        else { s.fails = 0; s.err = ''; }
        draw();
        later(step, 300);
      })
      .catch(function (e) { var s = state[b.id]; s.fails = (s.fails || 0) + 1; s.err = e.message; draw(); later(step, 3000); });
  }

  /* Google Cloud Text-to-Speech test: plays the sentence, or shows Google's refusal (no key ever reaches this page) */
  var cloudBtn = document.getElementById('cloud-try'), cloudMsg = document.getElementById('cloud-msg'), cloudAudio = document.getElementById('cloud-audio');
  cloudBtn.addEventListener('click', function () {
    cloudBtn.disabled = true; cloudMsg.textContent = 'Asking Google Cloud…'; cloudAudio.hidden = true;
    fetch('/api/speech?action=cloud-test', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      body: JSON.stringify({ model: document.getElementById('cloud-model').value, voice: document.getElementById('cloud-voice').value }) })
      .then(function (r) {
        if (r.ok) return r.blob().then(function (b) { cloudAudio.src = URL.createObjectURL(b); cloudAudio.hidden = false; cloudAudio.play().catch(function () {}); cloudMsg.textContent = 'It works: Google Cloud spoke the sentence (route: ' + (r.headers.get('X-Alimun-Via') || '?') + ').'; });
        return r.json().catch(function () { return {}; }).then(function (j) {
          cloudMsg.textContent = 'Google Cloud refused. ' + ((j.refused || []).map(function (x) { return x.via + ' ' + x.status + ': ' + x.message + (x.reason ? ' [' + x.reason + ']' : ''); }).join(' | ') || j.message || j.error || 'No detail.');
        });
      })
      .catch(function (e) { cloudMsg.textContent = 'The test did not run: ' + e.message; })
      .then(function () { cloudBtn.disabled = false; });
  });

  btn.addEventListener('click', function () {
    running = !running;
    btn.textContent = running ? 'Pause' : 'Start';
    clearTimeout(timer);
    if (running) waitForReset(); else say('Paused. Start again whenever you like; nothing is lost.');
  });

  function boot() {
    var sb = window.supabase.createClient(SUPA, 'sb_publishable_6epxmytr0e38p6OI77U_NQ_8pFzrzlh', { auth: { persistSession: true, storageKey: 'alimun-auth' } });
    sb.auth.getSession().then(function (r) {
      var s = r.data && r.data.session;
      if (!s || !s.user.app_metadata || s.user.app_metadata.role !== 'admin') { say('Sign in with the admin account first, then come back to this page.'); return; }
      token = s.access_token;
      /* The session token expires after an hour; keep it fresh while the tab works */
      sb.auth.onAuthStateChange(function (ev, ses) { if (ses) token = ses.access_token; });
      return load().then(function () {
        btn.disabled = false; cloudBtn.disabled = false;
        var at = resetAt();
        say(at ? 'Google\u2019s daily limit is used up until ' + new Date(at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' (in ' + hm(at - Date.now()) + '). Press Start and keep this tab open: it carries on by itself then.'
          : 'Press Start and keep this tab open. Several sentences go to Google in one request and are cut apart at the pauses, to fit Google\u2019s daily limit.');
      });
    }).catch(function (e) { say('Could not start: ' + e.message); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
