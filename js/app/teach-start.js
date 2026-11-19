/* Alimun teacher dashboard: Getting started (docs/TEACHER_ONBOARDING_PLAN.md), #/start.
   How teaching at Alimun works, in parts that open one after another. Each part has a short video (when the owner has
   uploaded one, Admin -> Teacher onboarding), what it is about, its help article, and what opens the next part: a
   question answered right, or something done in the dashboard (availability saved, the practice classroom opened, the
   profile written), checked by /api/onboarding. With a video, the question waits until it has been watched.
   Signed out or ?sample=1: the same parts with nothing saved. Text: app_ob_* keys. */
(function () {
  'use strict';
  var A = null, root = null, S = null, open = {}, mountNo = 0;

  /* The parts, in the server's order (api/onboarding.js). Keys are written out so the translation split files them
     with the dashboard text. A question's right answer is checked by the server; the sample checks it here. */
  var PARTS = [
    { id: 'dashboard', kind: 'quiz', h: 'app_ob_dashboard_h', p: 'app_ob_dashboard_p', help: 'teacher-dashboard-at-a-glance', art: 'owl', tint: 'var(--t-sun)',
      q: 'app_ob_dashboard_q', choices: [['settings', 'app_ob_dashboard_a_settings'], ['today', 'app_ob_dashboard_a_today'], ['payouts', 'app_ob_dashboard_a_payouts']], sample: 'today' },
    { id: 'availability', kind: 'action', h: 'app_ob_availability_h', p: 'app_ob_availability_p', help: 'availability-classes-and-contracts', art: 'mug', tint: 'var(--t-mint)',
      todo: 'app_ob_availability_do', go: '#/classes/availability', btn: 'app_ob_availability_btn', notYet: 'app_ob_availability_not' },
    { id: 'classroom', kind: 'quiz', h: 'app_ob_classroom_h', p: 'app_ob_classroom_p', help: 'start-your-live-class', art: 'parrot', tint: 'var(--t-lime)',
      q: 'app_ob_classroom_q', choices: [['h1', 'app_ob_classroom_a_h1'], ['any', 'app_ob_classroom_a_any'], ['m15', 'app_ob_classroom_a_m15']], sample: 'm15' },
    { id: 'practice', kind: 'action', h: 'app_ob_practice_h', p: 'app_ob_practice_p', help: 'start-your-live-class', art: 'alien', tint: 'var(--t-coral)',
      todo: 'app_ob_practice_do', go: '#/classes/practice', btn: 'app_ob_practice_btn', notYet: 'app_ob_practice_not' },
    { id: 'board', kind: 'quiz', h: 'app_ob_board_h', p: 'app_ob_board_p', help: 'lessons-and-the-classroom-board', art: 'monster', tint: 'var(--t-sun)',
      q: 'app_ob_board_q', choices: [['reveal', 'app_ob_board_a_reveal'], ['always', 'app_ob_board_a_always'], ['after', 'app_ob_board_a_after']], sample: 'reveal' },
    { id: 'notes', kind: 'quiz', h: 'app_ob_notes_h', p: 'app_ob_notes_p', help: 'class-notes-after-class', art: 'cat', tint: 'var(--t-mint)',
      q: 'app_ob_notes_q', choices: [['review', 'app_ob_notes_a_review'], ['everyone', 'app_ob_notes_a_everyone'], ['only', 'app_ob_notes_a_only']], sample: 'everyone' },
    { id: 'profile', kind: 'action', h: 'app_ob_profile_h', p: 'app_ob_profile_p', help: 'teacher-account-and-payouts', art: 'suitcase', tint: 'var(--bone)',
      todo: 'app_ob_profile_do', go: '#/settings', btn: 'app_ob_profile_btn', notYet: 'app_ob_profile_not' }
  ];
  var byId = {}; PARTS.forEach(function (p) { byId[p.id] = p; });

  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real'; }
  function safeUrl(u) { try { var x = new URL(u); return x.protocol === 'https:' ? x.href : null; } catch (e) { return null; } }
  function doneAt(id) { var x = (S.parts || []).filter(function (p) { return p.id === id; })[0]; return x ? x.done_at : null; }
  function current() { return PARTS.filter(function (p) { return !doneAt(p.id); })[0] || null; }
  function doneCount() { return PARTS.filter(function (p) { return doneAt(p.id); }).length; }

  /* Videos watched to the end on this device, so the question stays open after a reload */
  var WKEY = 'alimun-ob-watched';
  function watched(id) { try { return !!(JSON.parse(localStorage.getItem(WKEY) || '{}'))[id]; } catch (e) { return false; } }
  function setWatched(id) { try { var w = JSON.parse(localStorage.getItem(WKEY) || '{}'); w[id] = 1; localStorage.setItem(WKEY, JSON.stringify(w)); } catch (e) { /* storage blocked */ } }
  var seen = {};
  function hasWatched(id) { return seen[id] || watched(id); }

  function sampleState() { return { sample: true, parts: PARTS.map(function (p) { return { id: p.id, kind: p.kind, done_at: null }; }), videos: {} }; }
  function load() {
    if (!real()) return Promise.resolve(sampleState());
    return window.AlimunData.onboardingState(A.lang);
  }

  /* ---------- Drawing ---------- */
  function videoHtml(p) {
    var u = safeUrl((S.videos || {})[p.id]);
    if (!u) return '';
    return '<video class="ob-video" controls preload="metadata" playsinline data-ob-video="' + esc(p.id) + '" src="' + esc(u) + '"></video>';
  }
  function unlockHtml(p) {
    var needWatch = !!safeUrl((S.videos || {})[p.id]) && !hasWatched(p.id);
    if (p.kind === 'quiz') {
      return '<form class="ob-unlock" data-ob-quiz="' + esc(p.id) + '" novalidate><fieldset class="st-field"><legend class="st-lbl">' + esc(t(p.q)) + '</legend>' +
        '<div class="ob-choices">' + p.choices.map(function (c) {
          return '<label class="st-day ob-choice"><input type="radio" name="answer" value="' + esc(c[0]) + '"' + (needWatch ? ' disabled' : '') + '><span>' + esc(t(c[1])) + '</span></label>';
        }).join('') + '</div></fieldset>' +
        (needWatch ? '<p class="t-small" data-ob-wait>' + esc(t('app_ob_watch_first')) + '</p>' : '') +
        '<div class="btn-row"><button class="btn btn--primary" type="submit"' + (needWatch ? ' disabled' : '') + '>' + esc(t('app_ob_check')) + '</button></div>' +
        '<p class="t-small st-msg" data-ob-msg aria-live="polite"></p></form>';
    }
    return '<div class="ob-unlock"><p class="t-body">' + esc(t(p.todo)) + '</p>' +
      '<div class="btn-row"><a class="btn btn--ghost" href="' + esc(p.go) + '">' + esc(t(p.btn)) + '</a>' +
      '<button class="btn btn--primary" type="button" data-ob-do="' + esc(p.id) + '"' + (needWatch ? ' disabled' : '') + '>' + esc(t('app_ob_did')) + '</button></div>' +
      (needWatch ? '<p class="t-small" data-ob-wait>' + esc(t('app_ob_watch_first')) + '</p>' : '') +
      '<p class="t-small st-msg" data-ob-msg aria-live="polite"></p></div>';
  }
  function partHtml(p, i) {
    var cur = current(), done = doneAt(p.id), isCur = cur && cur.id === p.id, locked = !done && !isCur;
    var show = isCur || (done && open[p.id]);
    var status = done ? t('app_ob_done_on', { date: A.fmt(done, { day: 'numeric', month: 'long' }) })
      : locked ? t('app_ob_locked', { part: t(PARTS[i - 1].h) }) : '';
    var toggle = done ? '<button class="btn btn--quiet btn--sm" type="button" data-ob-toggle="' + esc(p.id) + '" aria-expanded="' + !!show + '">' + esc(t(show ? 'app_ob_close' : 'app_ob_again')) + '</button>' : '';
    return '<section class="card span-12 ob-part' + (done ? ' is-done' : locked ? ' is-locked' : ' is-current') + '" id="ob-' + esc(p.id) + '" style="--i:' + (i + 2) + '" aria-labelledby="ob-h-' + esc(p.id) + '">' +
      '<div class="card__row card__row--split"><div class="card__row">' + (show ? '' : '<div class="card__art ob-art" style="background:' + p.tint + '">' + A.Cast.drawing(p.art) + '</div>') +
        '<div><h2 class="t-h2" id="ob-h-' + esc(p.id) + '">' + esc(t(p.h)) + '</h2>' + (status ? '<p class="t-small" style="margin-top:4px">' + esc(status) + '</p>' : '') + '</div></div>' + toggle + '</div>' +
      /* Open part: the video (or, until there is one, the part's drawing on its colour) beside the text and the question */
      (show ? '<div class="ob-body"><div class="ob-media">' + (videoHtml(p) || '<div class="stage ob-stage" style="background:' + p.tint + '" aria-hidden="true">' + A.Cast.drawing(p.art) + '</div>') + '</div>' +
        '<div class="ob-text"><p class="t-body">' + esc(t(p.p)) + '</p>' +
        '<p class="t-small" style="margin-top:10px"><a class="linkish" href="#/help/a/' + esc(p.help) + '">' + esc(t('app_ob_read')) + '</a></p>' +
        (isCur ? unlockHtml(p) : '') + '</div></div>' : '') +
      '</section>';
  }
  function headHtml() {
    var cur = current(), n = doneCount();
    var line = cur ? (n ? t('app_ob_progress', { done: n, all: PARTS.length }) + ' ' + t('app_ob_next', { part: t(cur.h) }) : t('app_ob_first')) : '';
    return '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_t_nav_start')) + '</h1><p class="t-lead">' + esc(t('app_ob_lead')) + '</p></div></div>' +
      '<div class="grid rise">' +
      (cur ? '<div class="span-12 ob-status" style="--i:1"><p class="t-body" role="status">' + esc(line) + '</p>' + (S.sample ? '<p class="t-small">' + esc(t('app_ob_sample')) + '</p>' : '') + '</div>'
        : '<section class="card card--forest span-12" style="--i:1"><div class="card__row card__row--split"><div><h2 class="t-h1">' + esc(t('app_ob_ready_h')) + '</h2>' +
          '<p class="t-lead" style="margin-top:12px">' + esc(t('app_ob_ready_p')) + '</p><div class="btn-row" style="margin-top:22px"><a class="btn btn--lime" href="#/today">' + esc(t('app_ob_ready_btn')) + '</a></div></div>' +
          '<div class="card__art card__art--lg">' + A.Cast.drawing('owl') + '</div></div></section>');
  }
  function draw(focusId) {
    if (!root) return;
    root.innerHTML = headHtml() + PARTS.map(partHtml).join('') + '</div>';
    bindVideos();
    if (focusId) { var el = root.querySelector('#ob-' + focusId); if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); var h = el.querySelector('h2'); if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); } } }
    if (A.onboarding) A.onboarding(S);
  }
  /* The question opens once the video has played to (almost) the end */
  function bindVideos() {
    root.querySelectorAll('[data-ob-video]').forEach(function (v) {
      var id = v.getAttribute('data-ob-video');
      var unlock = function () {
        if (hasWatched(id)) return;
        seen[id] = true; setWatched(id);
        var card = root.querySelector('#ob-' + id);
        if (!card) return;
        card.querySelectorAll('.ob-unlock [disabled]').forEach(function (b) { b.disabled = false; });
        var w = card.querySelector('[data-ob-wait]'); if (w) w.remove();
      };
      v.addEventListener('ended', unlock);
      v.addEventListener('timeupdate', function () { if (v.duration && v.currentTime / v.duration > 0.9) unlock(); });
    });
  }

  /* ---------- Answers ---------- */
  function say(card, key) { var m = card && card.querySelector('[data-ob-msg]'); if (m) { m.textContent = key ? t(key) : ''; m.classList.toggle('is-bad', !!key); } }
  function finish(id, answer, btn) {
    var p = byId[id], card = root.querySelector('#ob-' + id);
    say(card, null);
    if (S.sample) {
      if (p.kind === 'quiz' && answer !== p.sample) { say(card, 'app_ob_wrong'); return; }
      S.parts.forEach(function (x) { if (x.id === id) x.done_at = new Date().toISOString(); });
      var nx = current(); draw(nx ? nx.id : null); return;
    }
    if (btn) btn.disabled = true;
    window.AlimunData.onboardingStep(id, answer, A.lang).then(function (st) {
      S = st; var nx = current(); draw(nx ? nx.id : null);
      if (window.AlimunData.track) window.AlimunData.track('onboarding_part', { part: id });
    }, function (e) {
      if (btn) btn.disabled = false;
      var code = e && e.body && e.body.error;
      say(card, code === 'wrong' ? 'app_ob_wrong' : code === 'not_yet' ? p.notYet : 'app_ob_err');
    });
  }
  function bind() {
    if (root.__tstart) return;
    root.__tstart = true;
    root.addEventListener('submit', function (e) {
      var f = e.target.closest('[data-ob-quiz]');
      if (!f) return;
      e.preventDefault();
      var pick = f.querySelector('input[name="answer"]:checked');
      if (!pick) { say(f.closest('.ob-part'), 'app_ob_pick'); return; }
      finish(f.getAttribute('data-ob-quiz'), pick.value, f.querySelector('[type="submit"]'));
    });
    root.addEventListener('click', function (e) {
      var d = e.target.closest('[data-ob-do]');
      if (d && !d.disabled) { finish(d.getAttribute('data-ob-do'), null, d); return; }
      var g = e.target.closest('[data-ob-toggle]');
      if (g) { var id = g.getAttribute('data-ob-toggle'); open[id] = !open[id]; draw(); var b = root.querySelector('[data-ob-toggle="' + id + '"]'); if (b) b.focus(); }
    });
  }

  function reset() { /* nothing running */ }
  function mount(view, parts, helpers) {
    var my = ++mountNo;
    A = helpers; root = view;
    bind();
    root.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + esc(t('app_loading_open')) + '">' + A.loaderInner() + '</div></div>';
    return load().then(function (st) {
      if (my !== mountNo) return { stale: true };
      S = st;
      var cur = current();
      draw(parts[0] && byId[parts[0]] ? parts[0] : null);
      return { title: t('app_t_nav_start'), current: cur ? cur.id : null };
    }).catch(function (e) {
      console.warn('[Alimun] Getting started did not load', e && e.message);
      if (my === mountNo) root.innerHTML = '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_t_nav_start')) + '</h1><p class="t-lead">' + esc(t('app_ob_err')) + '</p></div></div>';
      return { stale: true };
    });
  }
  window.AlimunTeachStart = { mount: mount, reset: reset, parts: PARTS };
})();
