/* Alimun app: plans and prices, card first (docs/PRICING_ENGINE_SPEC.md section 4; build step 4, 12 Nov 2026).
   #/settings/plans  the products on sale today (app_settings.pricing_on_sale, through /api/pricing?action=display), with
                     prices for the learner's country, or their band once they have bought. The prices are a guide: at
                     checkout (js/app/pay.js) the country the card was issued in sets the final price, shown before
                     anything is charged. Level and exam packs are reserved (card saved, charged when the room opens).
   #/settings/plans/pick/<product>/<cadence>  packs, open classes, trial and help class: the learner picks a room
                     (start date, days, time, places taken) or a class date first (/api/pricing?action=rooms); a pack
                     can also be reserved without a room, for the next start date.
   Voice practice minutes are also bought from the Tutor when the time is used up: tutorPacks(), buyTutor().
   Learners with a subscription from the old plans change it on Stripe's billing page.
   Coming back after paying (?checkout=success|reserved|minutes) is shown by stripeNote() in js/app/shell.js.
   Sample (signed out or ?sample=1): nothing is charged. Interface text: app_pp_* and app_pl_* keys. */
(function () {
  'use strict';
  var A = null, root = null, D = null;
  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real' && A.data().profile && A.data().profile.id; }
  function P() { return A.data().profile; }
  /* Photos for the checkout page (the homepage's own) */
  var PHOTO = { group: '/images/pexels-katerina-holmes-5905749-p-1080.jpg', tutor: '/images/pexels-6599010-tool.jpg' };
  /* The order on the page, and what each product is called and says */
  var ORDER = ['level_en', 'level_de', 'exam_en', 'exam_de', 'open_en', 'open_de', 'app', 'help_class', 'trial'];
  function lang(k) { return '⁨' + t(/_de$/.test(k) ? 'app_pp_lang_de' : 'app_pp_lang_en') + '⁩'; }
  function nameOf(k) {
    if (/^level_/.test(k)) return t('app_pp_level_h', { lang: lang(k) });
    if (/^exam_/.test(k)) return t('app_pp_exam_h', { lang: lang(k) });
    if (/^open_/.test(k)) return t('app_pp_open_h', { lang: lang(k) });
    return t({ app: 'app_pp_app_h', help_class: 'app_pp_help_h', trial: 'app_pp_trial_h' }[k] || 'app_pp_min_h');
  }
  function textOf(k) {
    if (/^level_/.test(k)) return t('app_pp_level_p');
    if (k === 'exam_en') return t('app_pp_exam_en_p');
    if (k === 'exam_de') return t('app_pp_exam_de_p');
    if (/^open_/.test(k)) return t('app_pp_open_p');
    return t({ app: 'app_pp_app_p', help_class: 'app_pp_help_p', trial: 'app_pp_trial_p' }[k] || 'app_pp_min_p');
  }

  function display() {
    if (D) return Promise.resolve(D);
    return window.AlimunData.pricingDisplay().then(function (d) { return (D = d); }, function (e) { console.warn('[Alimun] Prices', e && e.message); return null; });
  }
  function money(x) {
    var whole = x.amount % 100 === 0;
    return new Intl.NumberFormat(A.locale, { style: 'currency', currency: String(x.currency || 'eur').toUpperCase(), minimumFractionDigits: whole ? 0 : 2, maximumFractionDigits: 2 }).format(x.amount / 100);
  }
  /* The price a button shows: founding while it is open, else the usual one */
  function offer(k, cadence) {
    var c = D && D.prices && D.prices[k] && D.prices[k][cadence];
    if (!c || !c.list) return null;
    return D.founding && c.founding ? { price: c.founding, list: c.list, founding: true } : { price: c.list };
  }
  function buttonText(k, cadence, o) {
    var p = money(o.price);
    if (cadence === 'month') return t('app_pl_per_month', { price: p });
    if (cadence === 'year') return t('app_pl_per_year', { price: p });
    if (cadence === 'upfront') return t('app_pp_pay_upfront', { price: p });
    return p;
  }

  /* ---------- The page ---------- */
  function card(k, i) {
    var cadences = { app: ['month', 'year'], help_class: ['once'], trial: ['once'] }[k] || (/^open_/.test(k) ? ['month'] : ['month', 'upfront']);
    var offers = cadences.map(function (c) { return { c: c, o: offer(k, c) }; }).filter(function (x) { return x.o; });
    if (!offers.length) return '';
    var founding = offers.filter(function (x) { return x.o.founding; })[0];
    var pack = /^(level|exam)_/.test(k);
    return '<section class="card span-6" style="--i:' + i + '"><h2 class="t-h2"><bdi>' + esc(nameOf(k)) + '</bdi></h2>' +
      '<p class="t-body" style="margin-top:8px">' + esc(textOf(k)) + '</p>' +
      (founding ? '<p class="t-small" style="margin-top:8px">' + esc(t('app_pp_founding', { price: buttonText(k, founding.c, { price: founding.o.list }) })) + '</p>' : '') +
      (pack ? '<p class="t-small" style="margin-top:8px">' + esc(t('app_pp_room')) + '</p>' : '') +
      '<div class="btn-row" style="margin-top:14px">' + offers.map(function (x, j) {
        return '<button class="btn btn--' + (j ? 'ghost' : 'primary') + ' btn--sm" type="button" data-pl="choose" data-k="' + esc(k) + '" data-c="' + esc(x.c) + '">' + esc(buttonText(k, x.c, x.o)) + '</button>';
      }).join('') + '</div></section>';
  }
  function minutesCard(i) {
    var packs = ['minutes_30', 'minutes_120'].filter(function (k) { return D.onSale.indexOf(k) >= 0 && offer(k, 'once'); });
    if (!packs.length) return '';
    return '<section class="card span-12" style="--i:' + i + '"><h2 class="t-h2">' + esc(t('app_pp_min_h')) + '</h2><p class="t-body" style="margin-top:8px">' + esc(t('app_pp_min_p')) + '</p>' +
      '<div class="btn-row" style="margin-top:14px">' + packs.map(function (k, j) {
        return '<button class="btn btn--' + (j ? 'ghost' : 'primary') + ' btn--sm" type="button" data-pl="choose" data-k="' + k + '" data-c="once">' +
          esc(t('app_pp_pay_min', { n: k === 'minutes_30' ? 30 : 120, price: money(offer(k, 'once').price) })) + '</button>';
      }).join('') + '</div></section>';
  }
  function view() {
    var p = P(), paying = real() && p.paying && !p.givenUntil;
    var html = '<a class="rd-back" href="#/settings">' + A.icon('back') + '<span>' + esc(t('app_nav_settings')) + '</span></a>' +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_pp_title')) + '</h1><p class="t-lead">' + esc(t('app_pp_lead')) + '</p></div></div><div class="grid rise">';
    if (paying) html += '<section class="card card--forest span-12" style="--i:0"><p class="t-body">' + esc(t('app_pl_change_p')) + '</p><div class="btn-row" style="margin-top:14px"><button class="btn btn--lime" type="button" data-pl="portal">' + esc(t('app_pl_change')) + '</button></div><p class="t-small st-msg pl-msg" data-plmsg="top" aria-live="polite"></p></section>';
    if (!D || !D.prices) return html + '<section class="card span-12"><p class="t-body">' + esc(t('app_pp_none')) + '</p></section></div>';
    var i = 1;
    ORDER.forEach(function (k) { if (D.onSale.indexOf(k) >= 0) html += card(k, i++); });
    html += minutesCard(i++);
    html += '<p class="t-small st-msg pl-msg span-12" data-plmsg="choose" aria-live="polite"></p>';
    html += '<p class="t-small span-12">' + esc(t(D.taxInclusive === false ? 'app_pp_tax_plus' : 'app_pp_tax_in')) + '</p>';
    if (!real()) html += '<p class="t-tiny span-12">' + esc(t('app_pl_sample')) + '</p>';
    return html + '</div>';
  }
  function say(which, key, bad) { var m = root.querySelector('[data-plmsg="' + which + '"]'); if (m) { m.textContent = key ? t(key) : ''; m.classList.toggle('is-bad', !!bad); } }

  /* Opens the card-first checkout for one product; where: { cohortId } or { sessionId, label } from the picker */
  function pay(k, cadence, btn, show, where) {
    if (!window.AlimunPay) { show('app_pl_err', true); return; }
    if (btn) btn.disabled = true;
    var minutes = /^minutes_/.test(k), w = where || {};
    window.AlimunPay.open(A, { productKey: k, cadence: cadence, cohortId: w.cohortId, sessionId: w.sessionId },
      { title: nameOf(k), sub: w.label || textOf(k), photo: minutes ? PHOTO.tutor : PHOTO.group })
      .then(function () { if (btn) btn.disabled = false; }, function (e) { if (btn) btn.disabled = false; show('app_pl_err', true); console.warn('[Alimun] Checkout', e && e.message); });
  }
  /* Products bought for a room (packs, open classes) or a class date (trial, help class) go through the picker first */
  function picks(k) { return /^(level|exam|open)_/.test(k) || k === 'trial' || k === 'help_class'; }
  function choose(k, cadence, btn) {
    if (picks(k)) { location.hash = '#/settings/plans/pick/' + k + '/' + cadence; return; }
    if (!real()) { say('choose', 'app_pl_sample'); return; }
    say('choose', null);
    pay(k, cadence, btn, function (key, bad) { say('choose', key, bad); });
  }

  /* ---------- The picker: rooms with their start date, days, time and places, or class dates ---------- */
  var PICK = null;
  function day(iso) { return new Intl.DateTimeFormat(A.locale, { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date(iso + (iso.length === 10 ? 'T12:00:00Z' : ''))); }
  function weekdays(days) {
    var idx = { Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6 };
    var f = new Intl.DateTimeFormat(A.locale, { weekday: 'long', timeZone: 'UTC' });
    var names = (days || []).map(function (d) { return idx[d] == null ? d : f.format(new Date(Date.UTC(2024, 0, 7 + idx[d]))); });
    try { return new Intl.ListFormat(A.locale, { style: 'long', type: 'conjunction' }).format(names); } catch (e) { return names.join(', '); }
  }
  function when(iso, tz) {
    try { return new Intl.DateTimeFormat(A.locale, { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', timeZone: tz }).format(new Date(iso)); } catch (e) { return iso; }
  }
  function lineOf(k, x) {
    var bits = [];
    if (x.sessionId) bits.push(t('app_pp_pick_session', { when: when(x.at, x.timezone), zone: x.timezone, cls: x.language + ' ' + x.level }));
    else if (/^(level|exam)_/.test(k)) bits.push(t('app_pp_pick_pack', { date: day(x.startsOn), days: weekdays(x.days), time: x.time, zone: x.timezone, level: x.level }));
    else bits.push(t('app_pp_pick_open', { days: weekdays(x.days), time: x.time, zone: x.timezone, level: x.level }));
    if (x.teacher) bits.push(t('app_pp_pick_with', { teacher: x.teacher }));
    if (x.joined != null) bits.push(t('app_pp_pick_joined', { n: x.joined }));
    bits.push(t('app_pp_pick_left', { n: x.seatsLeft }));
    return bits.join(' ');
  }
  function pickView(k, cadence) {
    var items = (PICK && PICK.items) || [], pack = /^(level|exam)_/.test(k);
    var html = '<a class="rd-back" href="#/settings/plans">' + A.icon('back') + '<span>' + esc(t('app_pp_title')) + '</span></a>' +
      '<div class="view__head"><div><h1 class="t-h1"><bdi>' + esc(nameOf(k)) + '</bdi></h1><p class="t-lead">' + esc(t(pack ? 'app_pp_pick_lead_pack' : 'app_pp_pick_lead')) + '</p></div></div><div class="grid rise">';
    html += '<section class="card span-12" style="--i:0"><h2 class="t-h2">' + esc(t('app_pp_pick_h')) + '</h2>';
    if (!items.length) html += '<p class="t-body" style="margin-top:8px">' + esc(t('app_pp_pick_none')) + '</p>';
    else html += '<div class="tt-week" style="margin-top:12px">' + items.map(function (x, i) {
      var id = x.sessionId ? 's:' + x.sessionId : 'r:' + x.cohortId, full = x.seatsLeft <= 0;
      return '<div class="tt-row"><span>' + esc(lineOf(k, x)) + '</span><span class="btn-row"><button class="btn btn--' + (i ? 'ghost' : 'primary') + ' btn--sm" type="button" data-pl="pick" data-k="' + esc(k) + '" data-c="' + esc(cadence) + '" data-w="' + esc(id) + '" data-i="' + i + '"' + (full ? ' disabled' : '') + '>' + esc(t('app_pp_pick_choose')) + '</button></span></div>';
    }).join('') + '</div>';
    if (pack) html += '<p class="t-small" style="margin-top:14px">' + esc(t('app_pp_pick_later_p')) + '</p><div class="btn-row" style="margin-top:8px"><button class="btn btn--quiet btn--sm" type="button" data-pl="pick" data-k="' + esc(k) + '" data-c="' + esc(cadence) + '" data-w="">' + esc(t('app_pp_pick_later')) + '</button></div>';
    html += '<p class="t-small st-msg pl-msg" data-plmsg="pick" aria-live="polite"></p></section>';
    if (!real()) html += '<p class="t-tiny span-12">' + esc(t('app_pl_sample')) + '</p>';
    return html + '</div>';
  }
  function picked(b) {
    var k = b.getAttribute('data-k'), c = b.getAttribute('data-c'), w = b.getAttribute('data-w') || '', x = PICK && PICK.items[+b.getAttribute('data-i')];
    if (!real()) { say('pick', 'app_pl_sample'); return; }
    say('pick', null);
    var where = {};
    if (w.indexOf('r:') === 0) where = { cohortId: w.slice(2), label: x ? lineOf(k, x) : '' };
    else if (w.indexOf('s:') === 0) where = { sessionId: w.slice(2), label: x ? lineOf(k, x) : '' };
    pay(k, c, b, function (key, bad) { say('pick', key, bad); }, where);
  }
  function portal(btn) {
    if (!real()) { say('top', 'app_pl_sample'); return; }
    if (btn) btn.disabled = true;
    window.AlimunData.billingPortal(location.origin + '/app#/settings').then(function (r) {
      var u = new URL(r.url);
      if (u.protocol !== 'https:' || !/(^|\.)stripe\.com$/.test(u.hostname)) throw new Error('unexpected portal address');
      location.href = u.href;
    }, function (e) { if (btn) btn.disabled = false; say('top', 'app_pl_err', true); console.warn('[Alimun] Billing portal', e && e.message); });
  }

  /* Voice practice minutes for the Tutor's "out of time" card: [{ key, minutes, price }], the smallest first */
  function tutorPacks(helpers) {
    A = helpers;
    return display().then(function () {
      if (!D || !D.onSale) return [];
      return ['minutes_30', 'minutes_120'].filter(function (k) { return D.onSale.indexOf(k) >= 0 && offer(k, 'once'); })
        .map(function (k) { return { key: k, id: k, minutes: k === 'minutes_30' ? 30 : 120, price: money(offer(k, 'once').price) }; });
    });
  }
  function buyTutor(helpers, btn, msgEl, productKey) {
    A = helpers;
    var show = function (k, bad) { if (msgEl) { msgEl.textContent = t(k); msgEl.classList.toggle('is-bad', !!bad); } };
    if (!real()) { show('app_pl_sample'); return; }
    if (!/^minutes_(30|120)$/.test(productKey || '')) return;
    pay(productKey, 'once', btn, show);
  }

  function bind() {
    if (root.__plans) return;
    root.__plans = true;
    root.addEventListener('click', function (e) {
      var b = e.target.closest('[data-pl]');
      if (!b || b.disabled) return;
      var a = b.getAttribute('data-pl');
      if (a === 'choose') choose(b.getAttribute('data-k'), b.getAttribute('data-c'), b);
      else if (a === 'pick') picked(b);
      else if (a === 'portal') portal(b);
    });
  }
  function mount(view_, parts, helpers) {
    A = helpers; root = view_;
    bind();
    if (parts[1] === 'pick' && picks(parts[2] || '') && /^(month|upfront|once)$/.test(parts[3] || '')) {
      var k = parts[2], c = parts[3];
      return window.AlimunData.roomsFor(k).then(function (r) { PICK = r; }, function () { PICK = { items: [] }; })
        .then(function () { return { html: pickView(k, c), title: nameOf(k) }; });
    }
    return display().then(function () { return { html: view(), title: t('app_pp_title') }; });
  }
  window.AlimunPlans = { mount: mount, tutorPacks: tutorPacks, buyTutor: buyTutor };
})();
