/* Alimun teacher dashboard: the dashboard tour (docs/TEACHER_ONBOARDING_PLAN.md).
   Owner, 20 Nov 2026: "simplify everything … a process where the teacher sees instructions from the dashboard, like
   other platforms". A guided tour on the real dashboard: the screen dims, the real thing is lit up (the next class,
   To do, availability, the menu, the question mark), and a small card beside it says what it is, with Back, Next and
   Close. It opens by itself the first time an approved teacher signs in, and again from "Dashboard tour" in the menu;
   it ends on the practice classroom. Finished or closed is saved (api/onboarding.js action=tour) so it does not open
   by itself again. Text: app_tour_* keys. */
(function () {
  'use strict';
  /* Each stop: the dashboard page to show, the element to light up (the first visible match; none or hidden = the card
     in the middle), and its text. Keys are written out so the translation split files them with the dashboard text. */
  var STEPS = [
    { id: 'welcome', h: 'app_tour_welcome_h', p: 'app_tour_welcome_p' },
    { id: 'next', route: 'today', sel: '#view .card--forest', h: 'app_tour_next_h', p: 'app_tour_next_p' },
    { id: 'todo', route: 'today', sel: '#view .home__section ~ a.card', h: 'app_tour_todo_h', p: 'app_tour_todo_p' },
    { id: 'classes', route: 'classes', sel: '#view .view__head .btn-row', h: 'app_tour_classes_h', p: 'app_tour_classes_p' },
    { id: 'lessons', route: 'lessons', sel: '[data-route="lessons"]', h: 'app_tour_lessons_h', p: 'app_tour_lessons_p' },
    { id: 'homework', route: 'homework', sel: '[data-route="homework"]', h: 'app_tour_homework_h', p: 'app_tour_homework_p' },
    { id: 'messages', route: 'messages', sel: '[data-route="messages"]', h: 'app_tour_messages_h', p: 'app_tour_messages_p' },
    { id: 'settings', route: 'settings', sel: '[data-route="settings"]', h: 'app_tour_settings_h', p: 'app_tour_settings_p' },
    { id: 'help', route: 'today', sel: '[data-pagehelp]', h: 'app_tour_help_h', p: 'app_tour_help_p' },
    { id: 'practice', h: 'app_tour_practice_h', p: 'app_tour_practice_p' }
  ];
  var A = null, el = null, at = 0, target = null, onEnd = null, drawNo = 0;
  /* The overview video on the welcome card (scripts/record-tour-video.js; its intro reads app_tour_video_h and
     app_tour_video_p). An admin upload in the teacher-tutorial bucket (Admin -> Teacher onboarding, e.g. a Claude
     Design version) comes first, then the recorded file shipped with the site; the teacher's language, then English. */
  var BUCKET = 'https://dgaiasmefcbrtzqwdyri.supabase.co/storage/v1/object/public/teacher-tutorial/tour/';
  var BUILT = '/videos/teacher-tour/';
  function videoHtml() {
    var l = A.lang, srcs = [BUCKET + l + '.mp4', BUILT + l + '.mp4'];
    if (l !== 'en') srcs.push(BUCKET + 'en.mp4', BUILT + 'en.mp4');
    return '<video class="tour__video" controls playsinline preload="metadata" aria-label="' + esc(t('app_tour_video_h')) + '" title="' + esc(t('app_tour_video_p')) + '">' +
      srcs.map(function (u) { return '<source src="' + esc(u) + '#t=0.1" type="video/mp4">'; }).join('') + '</video>';
  }

  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function shown(x) {
    if (!x) return false;
    var r = x.getBoundingClientRect(), cs = getComputedStyle(x);
    return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none' && !x.closest('.sheet');
  }
  function find(sel) { var all = document.querySelectorAll(sel); for (var i = 0; i < all.length; i++) if (shown(all[i])) return all[i]; return null; }
  /* Wait for the page to be drawn (its loader gone) and the element to be there, for up to 4 seconds */
  function waitFor(sel) {
    return new Promise(function (ok) {
      var t0 = Date.now();
      (function look() {
        var busy = document.querySelector('#view .rd-loading') || document.querySelector('#view.is-leaving');
        var x = !busy && sel ? find(sel) : null;
        if ((!busy && (!sel || x)) || Date.now() - t0 > 4000) return ok(x);
        setTimeout(look, 100);
      })();
    });
  }
  function go(route) {
    if (!route) return;
    var want = '#/' + route;
    if (location.hash !== want) location.hash = want;
  }

  /* ---------- Drawing ---------- */
  function build() {
    el = document.createElement('div');
    el.className = 'tour';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-labelledby', 'tour-h');
    el.innerHTML = '<div class="tour__dim" data-tour-dim></div><div class="tour__spot" data-tour-spot hidden></div>' +
      '<div class="tour__card" data-tour-card><div class="tour__media" data-tour-media></div><button class="icon-btn tour__x" type="button" data-tour="close" aria-label="' + esc(t('app_tour_close')) + '">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button>' +
      '<h2 class="t-h3" id="tour-h"></h2><p class="t-body" data-tour-p></p><div class="tour__row" data-tour-row></div></div>';
    document.body.appendChild(el);
    el.addEventListener('click', function (e) {
      var b = e.target.closest('[data-tour]');
      if (!b) return;
      var a = b.getAttribute('data-tour');
      if (a === 'next') step(at + 1);
      else if (a === 'back') step(at - 1);
      else if (a === 'close') end(at === STEPS.length - 1);
      else if (a === 'practice') { end(true); location.hash = '#/classes/practice'; }
    });
    document.addEventListener('keydown', keys);
    window.addEventListener('resize', place);
    window.addEventListener('scroll', place, { passive: true });
  }
  function keys(e) {
    if (!el) return;
    if (e.key === 'Escape') end(false);
    else if (e.key === 'ArrowRight' && at < STEPS.length - 1) step(at + 1);
    else if (e.key === 'ArrowLeft' && at > 0) step(at - 1);
  }
  function buttons() {
    var s = STEPS[at];
    if (s.id === 'welcome') return '<button class="btn btn--quiet btn--sm" type="button" data-tour="close">' + esc(t('app_tour_later')) + '</button>' +
      '<button class="btn btn--primary btn--sm" type="button" data-tour="next">' + esc(t('app_tour_start')) + '</button>';
    if (s.id === 'practice') return '<button class="btn btn--quiet btn--sm" type="button" data-tour="close">' + esc(t('app_tour_finish')) + '</button>' +
      '<button class="btn btn--primary btn--sm" type="button" data-tour="practice">' + esc(t('app_tour_practice_btn')) + '</button>';
    return '<button class="btn btn--quiet btn--sm" type="button" data-tour="back">' + esc(t('app_tour_back')) + '</button>' +
      '<button class="btn btn--primary btn--sm" type="button" data-tour="next">' + esc(t('app_tour_next')) + '</button>';
  }
  function step(i) {
    if (i < 0 || i >= STEPS.length) return;
    var my = ++drawNo, s = STEPS[i];
    at = i;
    el.classList.add('is-moving');
    go(s.route);
    waitFor(s.sel).then(function (x) {
      if (my !== drawNo || !el) return;
      target = x;
      if (target) target.scrollIntoView({ block: 'center', inline: 'nearest' });
      /* On a phone the card sits at the bottom: bring an element of the page up under the top bar, above the card */
      if (target && window.innerWidth < 640 && target.closest('#view')) window.scrollBy(0, target.getBoundingClientRect().top - 76);
      var media = el.querySelector('[data-tour-media]'), card = el.querySelector('[data-tour-card]');
      media.innerHTML = s.id === 'welcome' ? videoHtml() : '';
      card.classList.toggle('has-video', s.id === 'welcome');
      var v = media.querySelector('video');
      if (v) { var last = v.querySelector('source:last-child'); last.addEventListener('error', function () { media.innerHTML = ''; card.classList.remove('has-video'); place(); }); }
      el.querySelector('#tour-h').textContent = t(s.h);
      el.querySelector('[data-tour-p]').textContent = t(s.p);
      el.querySelector('[data-tour-row]').innerHTML = buttons();
      el.classList.remove('is-moving');
      place();
      var first = el.querySelector('[data-tour-row] .btn--primary');
      if (first) first.focus({ preventScroll: true });
    });
  }
  /* The light around the element, and the card below it, above it, or in the middle; at the bottom on a phone */
  function place() {
    if (!el) return;
    var spot = el.querySelector('[data-tour-spot]'), card = el.querySelector('[data-tour-card]'), dim = el.querySelector('[data-tour-dim]');
    var W = window.innerWidth, H = window.innerHeight, phone = W < 640, pad = 8, gap = 14, m = 16;
    var r = target && shown(target) ? target.getBoundingClientRect() : null;
    spot.hidden = !r; dim.hidden = !!r;
    card.classList.toggle('is-center', !r && !phone);
    card.style.left = card.style.top = card.style.right = card.style.bottom = '';
    if (r) {
      spot.style.left = (r.left - pad) + 'px'; spot.style.top = (r.top - pad) + 'px';
      spot.style.width = (r.width + pad * 2) + 'px'; spot.style.height = (r.height + pad * 2) + 'px';
    }
    if (phone) { card.classList.add('is-dock'); return; }
    card.classList.remove('is-dock');
    if (!r) return;
    var cw = card.offsetWidth, ch = card.offsetHeight, left, top;
    if (r.bottom + pad + gap + ch < H - m) top = r.bottom + pad + gap;
    else if (r.top - pad - gap - ch > m) top = r.top - pad - gap - ch;
    else { top = Math.max(m, Math.min(H - ch - m, r.top + r.height / 2 - ch / 2)); left = r.right + pad + gap + cw < W - m ? r.right + pad + gap : r.left - pad - gap - cw; }
    if (left == null) left = r.left;
    card.style.left = Math.max(m, Math.min(W - cw - m, left)) + 'px';
    card.style.top = Math.max(m, top) + 'px';
  }
  function end(done) {
    if (!el) return;
    document.removeEventListener('keydown', keys);
    window.removeEventListener('resize', place);
    window.removeEventListener('scroll', place);
    el.remove(); el = null; target = null; drawNo++;
    if (onEnd) onEnd(!!done);
  }

  /* o: { A (the dashboard's helpers), onEnd(done) } */
  function start(o) {
    if (el) return;
    A = o.A; onEnd = o.onEnd || null;
    build();
    step(0);
  }
  window.AlimunTeachTour = { start: start, running: function () { return !!el; } };
})();
