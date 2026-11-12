/* Alimun app: Alimun's own checkout page, card first (docs/PRICING_ENGINE_SPEC.md section 4; build step 4, 12 Nov 2026).
   AlimunPay.open(A, { productKey, cadence, cohortId }, { title, sub, photo }) covers the dashboard with a full-screen
   checkout in the dashboard's look. The learner adds a card first (a SetupIntent from /api/pricing?action=setup, Stripe's
   Payment Element, nothing charged); the server reads the country the card was issued in and answers with the final
   price (?action=quote), shown before anything is charged ("Your card is from Morocco, so your price is ..."). Pay or
   Reserve then calls ?action=purchase; a payment the bank must confirm opens the bank's check (handleNextAction) and
   ?action=confirm records it. Level and exam packs are reserved: the card is saved and charged when the room opens.
   The browser never sends an amount, a currency or a price. Interface text: app_pay_* keys. */
(function () {
  'use strict';
  var STRIPE_JS = 'https://js.stripe.com/clover/stripe.js';
  var A = null, el = null, busy = false, lastFocus = null, keyHandler = null;

  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }

  /* ---------- Loading Stripe ---------- */
  var stripeJs = null, config = null;
  function loadStripeJs() {
    if (window.Stripe) return Promise.resolve();
    if (stripeJs) return stripeJs;
    stripeJs = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = STRIPE_JS; s.async = true;
      var timer = setTimeout(function () { reject(new Error('Stripe.js timed out')); }, 15000);
      s.onload = function () { clearTimeout(timer); window.Stripe ? resolve() : reject(new Error('Stripe.js missing')); };
      s.onerror = function () { clearTimeout(timer); stripeJs = null; reject(new Error('Stripe.js failed to load')); };
      document.head.appendChild(s);
    });
    return stripeJs;
  }
  function loadConfig() {
    if (config) return Promise.resolve(config);
    return fetch('/api/stripe?action=config').then(function (r) { if (!r.ok) throw new Error('config ' + r.status); return r.json(); })
      .then(function (j) { if (!/^pk_(live|test)_/.test(j.stripePublishableKey || '')) throw new Error('no publishable key'); return (config = j); });
  }
  /* Stripe's languages for the dashboard's (the Morocco site reads French) */
  function stripeLocale() {
    var l = String(A.lang || 'en');
    return { ma: 'fr' }[l] || (/^(en|de|es|fr|it|pt|zh|ar)$/.test(l) ? l : 'auto');
  }

  /* The payment fields in the dashboard's look */
  function appearance() {
    var forest = '#1a443c', bone = '#f0efe9', ink = '#080808';
    return {
      theme: 'flat',
      variables: {
        fontFamily: 'Satoshi, system-ui, sans-serif', fontSizeBase: '16px', fontWeightNormal: '500', fontWeightMedium: '600', fontWeightBold: '700',
        colorPrimary: forest, colorBackground: '#ffffff', colorText: ink, colorTextSecondary: 'rgba(8, 8, 8, .62)', colorTextPlaceholder: 'rgba(8, 8, 8, .4)',
        colorDanger: '#b3412c', colorIcon: forest, borderRadius: '14px', spacingUnit: '5px', gridRowSpacing: '18px', gridColumnSpacing: '14px',
        focusBoxShadow: 'none', focusOutline: 'none'
      },
      rules: {
        '.Input': { backgroundColor: bone, border: '2px solid ' + bone, boxShadow: 'none', padding: '14px 16px', transition: 'border-color .16s ease, background-color .16s ease' },
        '.Input:hover': { borderColor: 'rgba(26, 68, 60, .18)' },
        '.Input:focus': { backgroundColor: '#ffffff', borderColor: forest, boxShadow: 'none' },
        '.Input--invalid': { borderColor: '#b3412c', boxShadow: 'none' },
        '.Label': { fontWeight: '600', fontSize: '14px', color: ink, marginBottom: '8px' },
        '.Error': { fontSize: '13.5px', fontWeight: '500' },
        '.AccordionItem': { backgroundColor: '#ffffff', border: '2px solid rgba(8, 8, 8, .08)', boxShadow: 'none', padding: '18px 20px', borderRadius: '20px' },
        '.AccordionItem:hover': { borderColor: 'rgba(26, 68, 60, .3)' },
        '.AccordionItem--selected': { borderColor: forest, boxShadow: '0 0 0 4px rgba(206, 255, 101, .55)' },
        '.AccordionItemLabel': { fontWeight: '600' },
        '.AccordionItemLabel--selected': { color: forest },
        '.RadioIcon': { width: '22px' },
        '.RadioIconOuter': { stroke: 'rgba(8, 8, 8, .25)' },
        '.RadioIconOuter--checked': { stroke: forest, fill: '#ceff65' },
        '.RadioIconInner': { r: '28', fill: forest },
        '.Block': { backgroundColor: bone, boxShadow: 'none', borderRadius: '14px' },
        '.CheckboxInput': { backgroundColor: bone, borderColor: 'rgba(8, 8, 8, .25)' },
        '.CheckboxInput--checked': { backgroundColor: forest, borderColor: forest },
        '.TermsText': { fontSize: '13px', color: 'rgba(8, 8, 8, .62)' },
        '.Link': { color: forest, fontWeight: '600' }
      }
    };
  }
  function fonts() {
    return [{ family: 'Satoshi', src: 'url(' + location.origin + '/fonts/Satoshi-Variable.ttf)', weight: '300 900', style: 'normal', display: 'swap' }];
  }

  /* ---------- The page ---------- */
  function loader(w) {
    var C = window.AlimunCast;
    return '<div class="loader" style="--w:' + (w || 88) + 'px" aria-hidden="true"><div class="whirl whirl--outer"></div><div class="whirl whirl--inner"></div><div class="spark"></div>' +
      '<div class="mark">' + (C ? C.book('idle') : '') + '</div></div>';
  }
  function shell(info) {
    var C = window.AlimunCast;
    var photo = info.photo ? '<figure class="pay__photo"><img src="' + esc(info.photo) + '" alt="" loading="eager" decoding="async"></figure>' : '';
    return '<div class="pay__top">' +
        '<span class="pay__brand">' + (C ? C.book('idle') + C.wordmark() : '') + '</span>' +
        '<button class="btn btn--quiet btn--sm pay__close" type="button" data-pay="close">' + (A.icon ? A.icon('back') : '') + '<span>' + esc(t('app_pay_back')) + '</span></button>' +
      '</div>' +
      '<div class="pay__grid">' +
        '<section class="pay__sum" aria-labelledby="pay-h">' +
          '<h1 class="t-display pay__title" id="pay-h"><bdi>' + esc(info.title) + '</bdi></h1>' +
          (info.sub ? '<p class="t-lead pay__sub">' + esc(info.sub) + '</p>' : '') +
          photo +
          '<div class="pay__bill" data-pay="bill" aria-live="polite"><p class="t-body">' + esc(t('app_pay_card_p')) + '</p></div>' +
        '</section>' +
        '<section class="pay__form" aria-label="' + esc(t('app_pay_h')) + '">' +
          '<h2 class="t-h2" data-pay="form-h">' + esc(t('app_pay_card_h')) + '</h2>' +
          '<div class="pay__fields" data-pay="fields"><div class="pay__wait">' + loader(72) + '<p class="t-small">' + esc(t('app_pay_loading')) + '</p></div></div>' +
          '<button class="btn btn--lime pay__go" type="button" data-pay="go" disabled><span data-pay="go-label">' + esc(t('app_pay_next')) + '</span></button>' +
          '<button class="linkish pay__again" type="button" data-pay="again" hidden>' + esc(t('app_pay_change_card')) + '</button>' +
          '<p class="t-small pay__msg" data-pay="msg" role="alert"></p>' +
          '<p class="t-tiny pay__safe">' + lockIcon() + '<span>' + esc(t('app_pay_safe')) + '</span></p>' +
        '</section>' +
      '</div>';
  }
  function lockIcon() {
    return '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="10.5" width="15" height="10" rx="3"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/></svg>';
  }
  function q(name) { return el && el.querySelector('[data-pay="' + name + '"]'); }
  function say(msg) { var m = q('msg'); if (m) m.textContent = msg || ''; }
  function label(text) { var l = q('go-label'); if (l) l.textContent = text; }
  function setBusy(on) { busy = on; var go = q('go'); if (go) { go.disabled = on; go.classList.toggle('is-busy', on); } }

  /* Money in the learner's language: whole amounts without cents */
  function money(amount, currency) {
    var whole = amount % 100 === 0;
    return new Intl.NumberFormat(A.locale, { style: 'currency', currency: String(currency || 'eur').toUpperCase(), minimumFractionDigits: whole ? 0 : 2, maximumFractionDigits: 2 }).format(amount / 100);
  }
  function countryName(cc) {
    try { return new Intl.DisplayNames([A.locale], { type: 'region' }).of(cc) || cc; } catch (e) { return cc; }
  }
  /* The price with its period, as the quote gives it */
  function priced(qt) {
    var p = money(qt.amount, qt.currency);
    if (qt.cadence === 'month') return t('app_pl_per_month', { price: p });
    if (qt.cadence === 'year') return t('app_pl_per_year', { price: p });
    return p;
  }

  /* The quote, on the left, before anything is charged */
  function showQuote(qt) {
    var box = q('bill'), p = money(qt.amount, qt.currency), lines = '';
    lines += '<p class="t-body"><b>' + esc(t('app_pay_quote', { country: countryName(qt.cardCountry), price: priced(qt) })) + '</b></p>';
    if (qt.founding && qt.listAmount) lines += '<p class="t-small">' + esc(t('app_pay_founding', { price: money(qt.listAmount, qt.currency) })) + '</p>';
    if (qt.charge === 'reserve') lines += '<p class="t-small">' + esc(t(qt.cadence === 'month' ? 'app_pay_reserve_mo' : 'app_pay_reserve_up', { price: p })) + '</p>';
    else if (qt.cadence === 'month' || qt.cadence === 'year') lines += '<p class="t-small">' + esc(t(qt.cadence === 'year' ? 'app_pay_then_year' : 'app_pay_then_month', { price: p })) + '</p>';
    if (qt.minutes) lines += '<p class="t-small">' + esc(t('app_pay_minutes_p', { n: qt.minutes })) + '</p>';
    if (qt.taxInclusive === false) lines += '<p class="t-small">' + esc(t('app_pp_tax_plus')) + '</p>';
    box.innerHTML = lines + '<div class="pay__row pay__row--total"><span>' + esc(t('app_pay_today')) + '</span><span class="pay__total">' + esc(qt.charge === 'reserve' ? money(0, qt.currency) : p) + '</span></div>';
    var h = q('form-h');
    if (h) h.textContent = t('app_pay_h');
    label(qt.charge === 'reserve' ? t('app_pay_reserve') : t('app_pay_go', { price: p }));
    q('again').hidden = false;
  }

  /* ---------- Opening and closing ---------- */
  function close() {
    if (!el || busy) return;
    var old = el; el = null; elements = null; quote = null; setup = null;
    if (resolveDone) { var done = resolveDone; resolveDone = null; done(); }
    document.documentElement.classList.remove('pay-open');
    if (keyHandler) document.removeEventListener('keydown', keyHandler);
    old.classList.add('is-leaving');
    setTimeout(function () { if (old.parentNode) old.parentNode.removeChild(old); }, 260);
    if (lastFocus && lastFocus.focus) try { lastFocus.focus(); } catch (e) { /* gone */ }
  }
  function show(info) {
    if (el && el.parentNode) el.parentNode.removeChild(el);
    lastFocus = document.activeElement;
    el = document.createElement('div');
    el.className = 'pay';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-labelledby', 'pay-h');
    el.setAttribute('dir', document.documentElement.getAttribute('dir') || 'ltr');
    el.innerHTML = shell(info);
    document.body.appendChild(el);
    document.documentElement.classList.add('pay-open');
    el.addEventListener('click', onClick);
    keyHandler = function (e) { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', keyHandler);
    el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
  }
  function onClick(e) {
    var b = e.target.closest('button[data-pay]');
    if (!b) return;
    var a = b.getAttribute('data-pay');
    if (a === 'close') close();
    else if (a === 'go') { if (quote) buy(); else addCard(); }
    else if (a === 'again') restart();
  }

  /* ---------- The steps ---------- */
  var stripe = null, elements = null, setup = null, quote = null, want = null, info0 = null, resolveDone = null;
  var post = function (action, b) { return window.AlimunData.pricing(action, b); };
  var ERR = { trial_used: 'app_pay_trial_used', already_have: 'app_pay_have', quote_expired: 'app_pay_expired', quote_changed: 'app_pay_changed',
    quote_used: 'app_pay_changed', room_full: 'app_pay_room_full', room_unavailable: 'app_pay_room_gone', session_unavailable: 'app_pay_room_gone', room_required: 'app_pay_room_gone', session_required: 'app_pay_room_gone', card_country_unknown: 'app_pay_err', not_on_sale: 'app_pay_err', profile_required: 'app_pay_err' };
  function errorText(e) {
    var code = e && e.body && e.body.error;
    if (code === 'declined') return t('app_pay_declined') + (e.body.moroccanCard ? ' ' + t('app_pay_ma') : '');
    return t(ERR[code] || 'app_pay_err');
  }

  /* Step one: the card, through a SetupIntent (nothing charged) */
  function mountCard() {
    quote = null;
    var fields = q('fields');
    fields.innerHTML = '<div class="pay__wait">' + loader(72) + '<p class="t-small">' + esc(t('app_pay_loading')) + '</p></div>';
    fields.classList.remove('is-ready');
    label(t('app_pay_next')); q('go').disabled = true; q('again').hidden = true;
    return Promise.all([post('setup', {}), loadStripeJs(), loadConfig()]).then(function (res) {
      if (!el) return null;
      setup = res[0];
      if (!setup || !setup.clientSecret) throw new Error('no setup');
      if (!stripe) stripe = window.Stripe(config.stripePublishableKey, { locale: stripeLocale() });
      elements = stripe.elements({ clientSecret: setup.clientSecret, appearance: appearance(), fonts: fonts() });
      var mountAt = document.createElement('div');
      mountAt.className = 'pay__pe';
      fields.appendChild(mountAt);
      var pe = elements.create('payment', { layout: { type: 'accordion', defaultCollapsed: false, radios: true, spacedAccordionItems: true } });
      return new Promise(function (resolve, reject) {
        pe.on('ready', resolve);
        pe.on('loaderror', function (ev) { reject(new Error((ev && ev.error && ev.error.message) || 'card fields did not load')); });
        setTimeout(function () { reject(new Error('card fields timed out')); }, 20000);
        pe.mount(mountAt);
      }).then(function () {
        if (!el) return;
        var wait = fields.querySelector('.pay__wait');
        if (wait) wait.remove();
        fields.classList.add('is-ready');
        q('go').disabled = false;
      });
    });
  }
  function addCard() {
    if (!elements || busy) return;
    setBusy(true); say(''); label(t('app_pay_checking'));
    stripe.confirmSetup({ elements: elements, redirect: 'if_required', confirmParams: { return_url: location.origin + '/app#/settings/plans' } }).then(function (r) {
      if (r && r.error) throw Object.assign(new Error(r.error.message || 'card'), { stripeMessage: r.error.message });
      return post('quote', { setupIntentId: setup.setupIntentId, productKey: want.productKey, cadence: want.cadence, cohortId: want.cohortId || undefined, sessionId: want.sessionId || undefined });
    }).then(function (qt) {
      setBusy(false);
      if (!el) return;
      quote = qt;
      q('fields').hidden = true;
      showQuote(qt);
    }, function (e) {
      setBusy(false); label(t('app_pay_next'));
      say(e && e.stripeMessage ? e.stripeMessage : errorText(e));
      if (e && e.body && /^(trial_used|already_have)$/.test(e.body.error)) q('go').disabled = true;
    });
  }
  /* Another card: a new SetupIntent and a new quote */
  function restart() {
    if (busy) return;
    say(''); q('fields').hidden = false;
    var box = q('bill'); if (box) box.innerHTML = '<p class="t-body">' + esc(t('app_pay_card_p')) + '</p>';
    var h = q('form-h'); if (h) h.textContent = t('app_pay_card_h');
    mountCard().catch(failed);
  }

  /* Step two: pay or reserve, as quoted */
  function buy() {
    if (!quote || busy) return;
    setBusy(true); say(''); label(t('app_pay_busy'));
    var qt = quote;
    post('purchase', { quoteId: qt.quoteId }).then(function (r) {
      if (r && r.next) {
        return stripe.handleNextAction({ clientSecret: r.next }).then(function (x) {
          if (x && x.error) throw Object.assign(new Error('bank'), { stripeMessage: x.error.message });
          return confirmed(qt, 0);
        });
      }
      return r;
    }).then(function (r) {
      if (r && r.done) return finished(qt);
      throw new Error('not done');
    }).catch(function (e) {
      setBusy(false);
      say(e && e.stripeMessage ? e.stripeMessage : errorText(e));
      // A refused card or a spent quote: start again with a card
      quote = null; q('fields').hidden = false; label(t('app_pay_next'));
      mountCard().catch(failed);
    });
  }
  function confirmed(qt, tries) {
    return post('confirm', { quoteId: qt.quoteId }).then(function (r) {
      if (r && r.pending && tries < 6) return new Promise(function (ok) { setTimeout(ok, 2500); }).then(function () { return confirmed(qt, tries + 1); });
      return r;
    });
  }
  function finished(qt) {
    say(t('app_pay_done'));
    busy = false;
    var where = qt.charge === 'reserve' ? '?checkout=reserved#/settings' : qt.minutes ? '?checkout=minutes#/tutor' : '?checkout=success#/settings';
    resolveDone = null;
    setTimeout(function () { location.href = location.origin + '/app' + where; }, 600);
  }
  function failed(e) {
    if (!el) return;
    console.warn('[Alimun] Checkout', e && e.message);
    say(errorText(e));
  }

  /* want: { productKey, cadence, cohortId }; info: { title, sub, photo } */
  function open(helpers, w, info) {
    A = helpers; busy = false; want = w || {}; info0 = info || {};
    show(info0);
    return new Promise(function (resolve) {
      resolveDone = resolve;
      mountCard().catch(function (e) {
        if (e && e.body && e.body.error === 'profile_required') { busy = false; close(); var x = new Error('profile_required'); x.body = e.body; return resolve(Promise.reject(x)); }
        failed(e);
      });
    });
  }

  window.AlimunPay = { open: open, close: close };
})();
