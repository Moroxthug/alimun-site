/* The English classes offer on the student dashboard (api/_lib/launch.js; data /api/pricing?action=launch).
   Owner, 25 Nov 2026: "the banners look bad, they should be more on page pop ups" (corner card chosen): no banner on
   Home any more, a card in the bottom corner of the dashboard instead (a sheet above the menu bar on a phone). It does
   not cover the page and never opens on top of the welcome poll. "Close" hides it for a day; it is not shown to a
   learner who already reserved.
   While Black Friday is on (launch_offer.deal): half price on the first month, or two weeks off the 12 weeks paid at
   once; A1–A2 learners see the beginner group, B1 and above the intensive course. After that, the beginner group with
   the €10 offer until sign-ups close.
   AlimunLaunchPop.card()            kept for the shell: returns '' (no Home banner)
   AlimunLaunchPop.maybe(L, H, poll) shows the corner card
   H: { t, esc, locale, level, real }. Texts: app_bf_* and app_ln_* keys. */
(function () {
  'use strict';
  var LATER = 'alimun-launch-later', DAY = 86400000;
  var PHOTO = '/images/pexels-julia-m-cameron-4145153-p-800.jpg';
  var WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var box = null, H = null, L = null;

  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function store(k, v) { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { /* blocked */ } }
  function t(k, v) { return H.t(k, v); }
  function esc(s) { return H.esc(s); }
  function zone() { try { return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'; } catch (e) { return 'UTC'; } }
  function fmt(at, o) { try { return new Intl.DateTimeFormat(H.locale, Object.assign({ timeZone: zone() }, o)).format(new Date(at)); } catch (e) { return ''; } }
  function lv() { return String(H.level || '').slice(0, 2).toUpperCase(); }
  function upper() { return /^(B1|B2|C1|C2)$/.test(lv()); }
  function deal() { var d = L && L.offer && L.offer.deal; return d && Date.parse(d.endsAt) > Date.now() ? d : null; }
  function dayList(names) { try { return new Intl.ListFormat(H.locale, { type: 'conjunction' }).format(names); } catch (e) { return names.join(', '); } }
  /* A room's first week of classes as instants (js/tz.js), to show days and time in the learner's zone */
  function firstWeek(r) {
    var TZ = window.AlimunTZ, idx = (r.days || []).map(function (d) { return WEEK.indexOf(d); }).filter(function (i) { return i >= 0; });
    if (!TZ || !idx.length) return [];
    return TZ.scheduleOccurrences(idx, r.time, r.timezone, new Date(Date.parse(r.starts_on + 'T00:00:00Z') - 86400000)).slice(0, idx.length);
  }
  function pack() { return (L.rooms || []).filter(function (r) { return /^level_/.test(r.product_key); })[0] || null; }
  function intensive() { return (L.dealRooms || []).filter(function (r) { return /^intensive_/.test(r.product_key); })[0] || null; }
  /* Who sees it: sign-ups open, nothing reserved yet, and a class that suits the level */
  function wanted(l) {
    if (!(l && l.offer && l.offer.active) || (l.mine || []).length) return false;
    return true;
  }

  function classLine() {
    var bf = deal(), p = pack(), i = intensive();
    if (upper() && i && bf) {
      var iw = firstWeek(i);
      return iw.length ? t('app_bf_int', { time: fmt(iw[0], { hour: '2-digit', minute: '2-digit' }), date: fmt(iw[0], { weekday: 'long', day: 'numeric', month: 'long' }) }) : '';
    }
    if (upper()) return t('app_ln_upper', { level: lv() });
    if (!p) return '';
    var pw = firstWeek(p);
    if (!pw.length) return '';
    return t('app_bf_beg', { days: dayList(pw.map(function (d) { return fmt(d, { weekday: 'long' }); })), time: fmt(pw[0], { hour: '2-digit', minute: '2-digit' }),
      date: fmt(pw[0], { weekday: 'long', day: 'numeric', month: 'long' }) });
  }
  function link() {
    var i = intensive();
    return upper() && i && deal() ? '#/settings/plans/pick/' + i.product_key + '/month' : '#/settings/plans/launch';
  }
  function count() {
    if (upper()) return '';
    var waiting = (L.rooms || []).some(function (r) { return r.state === 'published'; });
    return waiting && L.seats > 0 ? '<p class="t-small bfp__count">' + esc(t('app_ln_count', { n: Math.min(L.seats, L.min), min: L.min })) + '</p>' : '';
  }
  /* 26 Nov 2026 (owner: "improve the design of those banners"): the real first-month price for this learner (the same
     prices and founding rule as the class page and checkout), the normal one struck through, and how long is left */
  var PRICE = null;
  function money(minor, cur) {
    try { return new Intl.NumberFormat(H.locale, { style: 'currency', currency: String(cur).toUpperCase(), minimumFractionDigits: minor % 100 ? 2 : 0, maximumFractionDigits: 2 }).format(minor / 100); } catch (e) { return ''; }
  }
  function priceHtml() {
    var p = PRICE, k = upper() && intensive() ? 'intensive_en' : 'level_en';
    var c = p && p.prices && p.prices[k] && p.prices[k].month, x = c && (p.founding && c.founding ? c.founding : c.list);
    if (!x || !(x.amount > 0)) return '<p class="bfp__mark"><span>' + esc(t('app_bf_deal')) + '</span></p>';
    return '<p class="bfp__price"><span class="bfp__now">' + esc(money(x.amount - Math.round(x.amount / 2), x.currency)) + '</span> <s class="bfp__was">' + esc(money(x.amount, x.currency)) + '</s>' +
      '<span class="bfp__first">' + esc(t('app_bf_first_m')) + '</span></p>';
  }
  function left(bf) {
    var h = Math.max(1, Math.round((Date.parse(bf.endsAt) - Date.now()) / 3600000));
    try { var f = new Intl.RelativeTimeFormat(H.locale, { numeric: 'auto' }); return t('app_bf_ends', { rel: h >= 36 ? f.format(Math.round(h / 24), 'day') : f.format(h, 'hour') }); } catch (e) { return ''; }
  }
  function html() {
    var bf = deal(), cl = classLine();
    if (upper() && !(bf && intensive())) return '';
    var head = bf ? '<h2 class="bfp__h" id="bfp-h">' + esc(t('app_bf_h')) + '</h2><p class="bfp__ends">' + esc(left(bf)) + '</p>' + priceHtml()
      : '<h2 class="bfp__h" id="bfp-h">' + esc(t('app_ln_title')) + '</h2>';
    return '<div class="bfp__card" role="dialog" aria-labelledby="bfp-h">' +
      '<button class="bfp__x" type="button" data-bf-later aria-label="' + esc(t('app_ln_later')) + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button>' +
      '<div class="bfp__photo"><img src="' + PHOTO + '" alt="" width="800" height="1067"></div>' +
      '<div class="bfp__body">' + head + (cl ? '<p class="t-small bfp__p">' + esc(cl) + '</p>' : '') + (bf ? '' : '<p class="t-small bfp__p">' + esc(t('app_ln_off')) + '</p>') + count() +
      '<a class="btn btn--primary bfp__go" href="' + link() + '" data-bf-go>' + esc(t(bf ? 'app_bf_go' : 'app_ln_home_go')) + '</a></div></div>';
  }

  function card() { return ''; }
  function snoozed() { var at = +read(LATER); return isFinite(at) && at > 0 && Date.now() - at < DAY; }
  function pollOpen() { return document.body.classList.contains('is-wp-open') || !!document.querySelector('.wp'); }
  function maybe(l, helpers) {
    H = helpers; L = l;
    if (!wanted(L) || box || snoozed()) return;
    var prices = H.real && window.AlimunData && window.AlimunData.pricingDisplay ? window.AlimunData.pricingDisplay().catch(function () { return null; })
      : Promise.resolve({ founding: true, prices: { level_en: { month: { list: { amount: 7200, currency: 'eur' }, founding: { amount: 6400, currency: 'eur' } } },
        intensive_en: { month: { list: { amount: 11900, currency: 'eur' }, founding: { amount: 10900, currency: 'eur' } } } } });
    prices.then(function (p) { PRICE = p; go(); });
  }
  function go() {
    var inner = html();
    if (!inner) return;
    /* Never on top of the poll or another window: wait until they are closed */
    var tries = 0, wait = function () {
      if (box) return;
      if (pollOpen()) { if (++tries < 600) setTimeout(wait, 1000); return; }
      open(inner);
    };
    setTimeout(wait, 2500);
  }
  function open(inner) {
    box = document.createElement('aside');
    box.className = 'bfp';
    box.innerHTML = inner;
    document.body.appendChild(box);
    box.addEventListener('click', function (e) {
      var el = e.target.closest('[data-bf-later],[data-bf-go]');
      if (!el) return;
      if (el.hasAttribute('data-bf-later')) { e.preventDefault(); close(true); } else close(false);
    });
    document.addEventListener('keydown', onKey);
    requestAnimationFrame(function () { requestAnimationFrame(function () { if (box) box.classList.add('is-in'); }); });
  }
  function onKey(e) { if (e.key === 'Escape' && box) close(true); }
  function close(later) {
    if (!box) return;
    if (later) store(LATER, String(Date.now()));
    var b = box; box = null;
    document.removeEventListener('keydown', onKey);
    b.classList.remove('is-in');
    setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 300);
  }
  function homeClick() { return false; }

  window.AlimunLaunchPop = { card: card, maybe: maybe, homeClick: homeClick, wanted: wanted };
})();
