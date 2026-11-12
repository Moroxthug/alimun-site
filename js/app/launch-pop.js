/* The English launch class on the student dashboard's Home (owner, 12 Nov 2026: "a banner in homepage in case they do
   not check out emails ... that doesn't overlap with the poll one if they did not do the poll already, if they did just
   put the banner there"). Data: /api/pricing?action=launch (api/_lib/launch.js).
   AlimunLaunchPop.card(L, H)   the banner at the top of Home: a photo in a large rounded frame, the free class in the
                                learner's own time, the class from Monday with €10 off, "Save my free place" (one click)
                                and "See the class".
   AlimunLaunchPop.maybe(L, H)  the same as a window over the dashboard, in the welcome poll's place: only once the poll
                                is answered and closed (never on top of it), at most once a day ("Not now" hides it for a
                                day), never after the learner saved a place and reserved.
   H: { t, esc, locale, level, real, onChange }. Texts: app_ln_* keys. */
(function () {
  'use strict';
  var LATER = 'alimun-launch-later', DAY = 86400000;
  var PHOTO = '/images/pexels-diimejii-3466163-p-800.jpg';
  var box = null, H = null, L = null, lastFocus = null;

  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function store(k, v) { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { /* blocked */ } }
  function t(k, v) { return H.t(k, v); }
  function esc(s) { return H.esc(s); }
  function fmt(at, o) { return new Intl.DateTimeFormat(H.locale, o).format(new Date(at)); }
  function upper() { return /^(B1|B2|C1|C2)$/.test(String(H.level || '').slice(0, 2).toUpperCase()); }
  function startOf() {
    var r = (L.rooms || []).filter(function (x) { return /^level_/.test(x.product_key); })[0] || (L.rooms || [])[0];
    return r ? r.starts_on : null;
  }
  /* Who sees it: sign-ups open, and not both a free place and a reservation already */
  function wanted(l) {
    return !!(l && l.offer && l.offer.active && !((l.mine || []).length && (!l.intro || l.intro.registered)));
  }

  function facts() {
    var rows = [];
    if (L.intro) rows.push(L.intro.registered ? t('app_ln_free_done') : t('app_ln_win_free', { when: fmt(L.intro.at, { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }) }));
    var s = startOf();
    if (upper()) rows.push(t('app_ln_upper', { level: String(H.level).slice(0, 2).toUpperCase() }));
    else if (s) rows.push(t('app_ln_win_class', { date: fmt(s + 'T12:00:00Z', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' }) }));
    return '<div class="ln__facts">' + rows.map(function (r) { return '<p>' + esc(r) + '</p>'; }).join('') + '</div>';
  }
  function buttons(inWindow) {
    var free = L.intro && L.intro.open && !L.intro.registered;
    return '<div class="btn-row ln__btns">' +
      (free ? '<button class="btn btn--primary" type="button" data-ln-free>' + esc(t('app_ln_free_btn')) + '</button>' : '') +
      '<a class="btn btn--' + (free ? 'ghost' : 'primary') + '" href="#/settings/plans/launch" data-ln-see>' + esc(t('app_ln_home_go')) + '</a>' +
      (inWindow ? '<button class="btn btn--quiet" type="button" data-ln-later>' + esc(t('app_ln_later')) + '</button>' : '') + '</div>' +
      '<p class="t-small ln__msg" data-ln-msg aria-live="polite"></p>';
  }
  function count() {
    var waiting = (L.rooms || []).some(function (r) { return r.state === 'published'; });
    return waiting && !upper() ? '<p class="t-small ln__count">' + esc(t('app_ln_count', { n: Math.min(L.seats, L.min), min: L.min })) + '</p>' : '';
  }

  /* ---------- The banner on Home ---------- */
  function card(l, helpers) {
    H = helpers; L = l;
    if (!wanted(L)) return '';
    return '<section class="card ln-card span-12" data-launch aria-labelledby="h-launch"><div class="ln-card__text">' +
      '<h2 class="t-h1" id="h-launch">' + esc(t(L.intro && L.intro.open && !L.intro.registered ? 'app_ln_home_h' : 'app_ln_title')) + '</h2>' +
      facts() + count() + buttons(false) + '</div>' +
      '<div class="ln-card__photo"><img src="' + PHOTO + '" alt="" loading="lazy" width="800" height="1067"></div></section>';
  }

  /* ---------- The window, in the poll's place ---------- */
  function snoozed() { var at = +read(LATER); return isFinite(at) && at > 0 && Date.now() - at < DAY; }
  function pollOpen() { return document.body.classList.contains('is-wp-open') || !!document.querySelector('.wp'); }
  function maybe(l, helpers, pollAnswered) {
    H = helpers; L = l;
    if (!wanted(L) || box || snoozed() || !pollAnswered) return;
    /* Never on top of the poll: wait until it is closed */
    var tries = 0, wait = function () {
      if (box) return;
      if (pollOpen()) { if (++tries < 600) setTimeout(wait, 1000); return; }
      open();
    };
    setTimeout(wait, 1500);
  }
  function open() {
    lastFocus = document.activeElement;
    box = document.createElement('div');
    box.className = 'wp ln-win';
    box.innerHTML = '<div class="wp__card ln-win__card" role="dialog" aria-modal="true" aria-labelledby="ln-h">' +
      '<button class="wp__x ln-win__x" type="button" data-ln-later aria-label="' + esc(t('app_ln_later')) + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button>' +
      '<div class="ln-win__photo"><img src="' + PHOTO + '" alt="" width="800" height="1067"></div>' +
      '<h2 class="wp__h" id="ln-h" tabindex="-1">' + esc(t(L.intro && L.intro.open && !L.intro.registered ? 'app_ln_home_h' : 'app_ln_title')) + '</h2>' +
      facts() + count() + buttons(true) + '</div>';
    document.body.appendChild(box);
    document.body.classList.add('is-wp-open');
    box.addEventListener('click', onClick);
    box.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(true); });
    requestAnimationFrame(function () { box.classList.add('is-in'); var h = box.querySelector('#ln-h'); if (h) h.focus(); });
  }
  function close(later) {
    if (!box) return;
    if (later) store(LATER, String(Date.now()));
    var b = box; box = null;
    b.classList.remove('is-in');
    document.body.classList.remove('is-wp-open');
    setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 200);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function onClick(e) {
    if (e.target === box) { close(true); return; }
    var el = e.target.closest('[data-ln-later],[data-ln-see],[data-ln-free]');
    if (!el) return;
    if (el.hasAttribute('data-ln-later')) { e.preventDefault(); close(true); }
    else if (el.hasAttribute('data-ln-see')) close(false);
    else register(el, box);
  }

  /* ---------- One click: a free place in the free class ---------- */
  function register(btn, scope) {
    var msg = scope.querySelector('[data-ln-msg]');
    if (!H.real) { if (msg) msg.textContent = t('app_pl_sample'); return; }
    btn.disabled = true;
    window.AlimunData.launchRegister().then(function () {
      L.intro.registered = true;
      if (msg) msg.textContent = t('app_ln_free_done');
      btn.remove();
      var f = scope.querySelector('.ln__facts'); if (f) f.outerHTML = facts();
      var see = scope.querySelector('[data-ln-see]'); if (see) see.className = 'btn btn--primary';
      if (H.onChange) H.onChange(L);
    }, function (e) { btn.disabled = false; if (msg) msg.textContent = t('app_pl_err'); console.warn('[Alimun] Free class', e && e.message); });
  }
  /* Clicks on the Home banner (the shell passes them here) */
  function homeClick(e, root) {
    var el = e.target.closest('[data-launch] [data-ln-free]');
    if (!el || el.disabled) return false;
    register(el, el.closest('[data-launch]'));
    return true;
  }

  window.AlimunLaunchPop = { card: card, maybe: maybe, homeClick: homeClick, wanted: wanted };
})();
