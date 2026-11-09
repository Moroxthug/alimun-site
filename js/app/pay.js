/* Alimun app: Alimun's own checkout page (replaces the trip to Stripe's page, 9 Nov 2026).
   AlimunPay.open(A, body, info) covers the dashboard with a full-screen checkout in the dashboard's look: what is
   being bought (info.title, info.sub, info.photo) with Stripe's own amounts on the left, and the payment on the
   right. Stripe draws only the payment fields (Stripe.js, Checkout Sessions with ui_mode "custom", API version
   2025-09-30.clover, so js.stripe.com/clover), styled with Satoshi, bone, forest and lime.
   The server makes the session exactly as before (api/stripe.js ?action=create-checkout, body.ui = 'custom'): same
   prices, customer, welcome gift, metadata and webhook; Stripe sends the student to the same "back" address after
   paying. Closing the page is the cancel.
   If anything on the way fails to load (Stripe.js, the session, the payment fields), it falls back to Stripe's own
   page so nobody is stuck. Refusals the caller handles itself (active_subscription, profile_required) are passed
   back as a rejected promise with the server's answer in e.body. Interface text: app_pay_* keys. */
(function () {
  'use strict';
  var STRIPE_JS = 'https://js.stripe.com/clover/stripe.js';
  var A = null, el = null, co = null, actions = null, busy = false, codes = false, lastFocus = null, keyHandler = null;
  var CALLER_ERRORS = { active_subscription: true, profile_required: true };

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
          '<div class="pay__bill" data-pay="bill" aria-live="polite"><div class="pay__bill-wait">' + loader(44) + '</div></div>' +
        '</section>' +
        '<section class="pay__form" aria-label="' + esc(t('app_pay_h')) + '">' +
          '<h2 class="t-h2">' + esc(t('app_pay_h')) + '</h2>' +
          '<div class="pay__fields" data-pay="fields"><div class="pay__wait">' + loader(72) + '<p class="t-small">' + esc(t('app_pay_loading')) + '</p></div></div>' +
          '<div class="pay__code" data-pay="code" hidden>' +
            '<button class="linkish pay__code-open" type="button" data-pay="code-open">' + esc(t('app_pay_code')) + '</button>' +
            '<form class="pay__code-form" data-pay="code-form" hidden><label class="sr-only" for="pay-code">' + esc(t('app_pay_code_ph')) + '</label>' +
              '<input id="pay-code" class="pay__code-in" name="code" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="' + esc(t('app_pay_code_ph')) + '">' +
              '<button class="btn btn--quiet btn--sm" type="submit">' + esc(t('app_pay_apply')) + '</button></form>' +
            '<p class="t-small pay__code-msg" data-pay="code-msg" aria-live="polite"></p>' +
          '</div>' +
          '<button class="btn btn--lime pay__go" type="button" data-pay="go" disabled><span data-pay="go-label">' + esc(t('app_pay_go_np')) + '</span></button>' +
          '<p class="t-small pay__msg" data-pay="msg" role="alert"></p>' +
          '<p class="t-tiny pay__safe">' + lockIcon() + '<span>' + esc(t('app_pay_safe')) + '</span></p>' +
        '</section>' +
      '</div>';
  }
  function lockIcon() {
    return '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="10.5" width="15" height="10" rx="3"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/></svg>';
  }
  function q(name) { return el && el.querySelector('[data-pay="' + name + '"]'); }

  /* What is due, from Stripe's session: amounts arrive formatted in the student's currency */
  function amt(x) { return x && typeof x === 'object' ? String(x.amount || '') : ''; }
  function bill(s) {
    var box = q('bill');
    if (!box || !s) return;
    var rows = '', tot = s.total || {};
    (s.lineItems || []).forEach(function (li) {
      rows += '<div class="pay__row"><span>' + esc(li.name || '') + '</span><span>' + esc(amt(li.subtotal)) + '</span></div>';
    });
    (s.discountAmounts || []).forEach(function (d) {
      var name = d.promotionCode ? d.promotionCode : (d.displayName || t('app_pay_discount'));
      rows += '<div class="pay__row pay__row--off"><span>' + esc(name) + '</span><span>−' + esc(amt(d)) + '</span></div>';
    });
    var then = '';
    if (s.recurring && s.recurring.dueNext && s.recurring.dueNext.total) {
      then = '<p class="t-small pay__then">' + esc(t(s.recurring.interval === 'year' ? 'app_pay_then_year' : 'app_pay_then_month', { price: amt(s.recurring.dueNext.total) })) + '</p>';
    }
    box.innerHTML = rows +
      '<div class="pay__row pay__row--total"><span>' + esc(t('app_pay_today')) + '</span><span class="pay__total">' + esc(amt(tot.total)) + '</span></div>' + then;
    var label = q('go-label');
    if (label) label.textContent = amt(tot.total) ? t('app_pay_go', { price: amt(tot.total) }) : t('app_pay_go_np');
    var code = q('code');
    if (code) code.hidden = !codes;
  }
  function say(msg) { var m = q('msg'); if (m) m.textContent = msg || ''; }

  /* ---------- Opening and closing ---------- */
  function close() {
    if (!el || busy) return;
    var old = el; el = null; co = null; actions = null;
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
    q('code-form').addEventListener('submit', onCode);
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
    else if (a === 'go') pay();
    else if (a === 'code-open') { b.hidden = true; var f = q('code-form'); f.hidden = false; f.querySelector('input').focus(); }
  }
  function onCode(e) {
    e.preventDefault();
    var input = e.target.querySelector('input'), code = (input.value || '').trim(), m = q('code-msg');
    if (!code || !actions) return;
    m.textContent = '';
    actions.applyPromotionCode(code).then(function (r) {
      if (r && r.type === 'error') { m.textContent = t('app_pay_code_bad'); return; }
      input.value = '';
      if (r && r.session) bill(r.session);
    }, function () { m.textContent = t('app_pay_code_bad'); });
  }

  /* Stripe's own page, when Alimun's cannot open */
  function hosted(body) {
    say(t('app_pl_going'));
    return window.AlimunData.checkout(body).then(function (r) {
      var u = new URL(r.url);
      if (u.protocol !== 'https:' || !/(^|\.)stripe\.com$/.test(u.hostname)) throw new Error('unexpected checkout address');
      busy = true;
      location.href = u.href;
    });
  }

  function pay() {
    if (!actions || busy) return;
    var go = q('go');
    busy = true; go.disabled = true; go.classList.add('is-busy'); say('');
    q('go-label').textContent = t('app_pay_busy');
    actions.confirm().then(function (r) {
      // On success Stripe moves the page to the "back" address; an answer here means it did not go through.
      if (r && r.type === 'error') {
        busy = false; go.disabled = false; go.classList.remove('is-busy');
        say((r.error && r.error.message) || t('app_pay_err'));
        bill(actions.getSession());
      }
    }, function (e) {
      busy = false; go.disabled = false; go.classList.remove('is-busy');
      say(t('app_pay_err'));
      bill(actions && actions.getSession());
      console.warn('[Alimun] Pay', e && e.message);
    });
  }

  /* body: what /api/stripe?action=create-checkout takes; info: { title, sub, photo } */
  function open(helpers, body, info) {
    A = helpers; busy = false; codes = false;
    show(info || {});
    var session = window.AlimunData.checkout(Object.assign({}, body, { ui: 'custom' }));
    return Promise.all([session, loadStripeJs(), loadConfig()]).then(function (res) {
      var r = res[0];
      if (!el) return null;
      if (!r || !r.clientSecret) throw new Error('no client secret');
      codes = !r.welcomeGift;
      var stripe = window.Stripe(config.stripePublishableKey, { locale: stripeLocale() });
      co = stripe.initCheckout({ clientSecret: r.clientSecret, elementsOptions: { appearance: appearance(), fonts: fonts() } });
      var fields = q('fields');
      var mountAt = document.createElement('div');
      mountAt.className = 'pay__pe';
      fields.appendChild(mountAt);
      var pe = co.createPaymentElement({ layout: { type: 'accordion', defaultCollapsed: false, radios: true, spacedAccordionItems: true } });
      var ready = new Promise(function (resolve, reject) {
        pe.on('ready', resolve);
        pe.on('loaderror', function (ev) { reject(new Error((ev && ev.error && ev.error.message) || 'payment fields did not load')); });
        setTimeout(function () { reject(new Error('payment fields timed out')); }, 20000);
      });
      pe.mount(mountAt);
      co.on('change', function (s) { bill(s); });
      return Promise.all([co.loadActions(), ready]).then(function (x) {
        var la = x[0];
        if (!el) return null;
        if (!la || la.type !== 'success') throw new Error((la && la.error && la.error.message) || 'checkout did not load');
        actions = la.actions;
        var s = actions.getSession();
        bill(s);
        var wait = fields.querySelector('.pay__wait');
        if (wait) wait.remove();
        fields.classList.add('is-ready');
        // Ready to pay; Stripe marks anything missing in the fields when Pay is pressed.
        q('go').disabled = false;
        return null;
      });
    }).catch(function (e) {
      if (e && e.body && CALLER_ERRORS[e.body.error]) { busy = false; close(); throw e; }
      if (!el) return null;
      console.warn('[Alimun] Alimun checkout unavailable, using Stripe\'s page:', e && e.message);
      return hosted(body).catch(function (e2) { busy = false; close(); throw e2; });
    });
  }

  window.AlimunPay = { open: open, close: close };
})();
