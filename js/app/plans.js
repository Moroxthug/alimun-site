/* Alimun app: choosing a plan and buying a private class (docs/DASHBOARD_PLAN.md, step 16, part 2).
   #/settings/plans[/<class>/<plan>]  the four plans with their prices as Stripe has them (/api/stripe?action=prices),
                                      monthly or yearly; choosing one opens Stripe checkout. Coming from a class that
                                      needs a bigger plan, the plans that include it are marked and the class is joined
                                      after paying (?join=). Students who already pay change plan in Stripe's billing page.
   Buying a private class (one payment, a 1:1 credit added by the payment webhook) starts from Classes: buyExtra().
   Coming back from Stripe (?checkout=success|cancelled|credit) is shown by returnNote() in js/app/shell.js.
   Sample (signed out or ?sample=1): nothing is charged. Interface text: app_pl_* keys. */
(function () {
  'use strict';
  var A = null, root = null, PRICES = null, period = 'monthly';
  var PLANS = ['community', 'focused', 'intensive', 'private'];
  var WEIGHT = { community: 1, focused: 2, intensive: 3, private: 4 };
  var SEATS = { community: 35, focused: 17, intensive: 6 };
  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real' && A.data().profile && A.data().profile.id; }
  function P() { return A.data().profile; }

  function prices() {
    if (PRICES) return Promise.resolve(PRICES);
    return fetch('/api/stripe?action=prices').then(function (r) { return r.ok ? r.json() : { prices: {} }; }, function () { return { prices: {} }; })
      .then(function (j) { return (PRICES = j.prices || {}); });
  }
  function money(p) {
    if (!p) return '';
    var whole = p.amount % 100 === 0;
    return new Intl.NumberFormat(A.locale, { style: 'currency', currency: String(p.currency || 'eur').toUpperCase(), minimumFractionDigits: whole ? 0 : 2, maximumFractionDigits: 2 }).format(p.amount / 100);
  }
  /* A plan's name kept in one piece inside right-to-left text ("1 on 1" in Arabic) */
  function planName(k) { return '\u2068' + t('app_tier_' + k) + '\u2069'; }
  function priceOf(plan) { return PRICES && PRICES[plan + (period === 'yearly' ? 'Yearly' : 'Monthly')]; }
  function priceLine(plan) {
    var p = priceOf(plan);
    if (!p) return t('app_pl_no_price');
    return t(p.interval === 'year' ? 'app_pl_per_year' : 'app_pl_per_month', { price: money(p) });
  }

  /* ---------- The plans ---------- */
  function view(classId, need) {
    var p = P(), paying = real() ? p.paying : false, mine = p.tier;
    var html = '<a class="rd-back" href="#/settings">' + A.icon('back') + '<span>' + esc(t('app_nav_settings')) + '</span></a>' +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_pl_title')) + '</h1><p class="t-lead">' + esc(t('app_pl_lead')) + '</p></div></div><div class="grid rise">';
    if (paying) html += '<section class="card card--forest span-12" style="--i:0"><p class="t-body">' + esc(t('app_pl_change_p')) + '</p><div class="btn-row" style="margin-top:14px"><button class="btn btn--lime" type="button" data-pl="portal">' + esc(t('app_pl_change')) + '</button></div><p class="t-small st-msg pl-msg" data-plmsg="top" aria-live="polite"></p></section>';
    var tab = function (k) { return '<button class="btn btn--' + (k === period ? 'primary' : 'quiet') + ' btn--sm" type="button" data-pl="period" data-k="' + k + '" aria-pressed="' + (k === period) + '">' + esc(t(k === 'yearly' ? 'app_pl_yearly' : 'app_pl_monthly')) + '</button>'; };
    html += '<section class="card span-12" style="--i:1" aria-label="' + esc(t('app_pl_title')) + '"><div class="btn-row" role="group">' + tab('monthly') + tab('yearly') + '</div><div class="pl-grid">' + PLANS.map(function (k) {
      var needed = need && WEIGHT[k] >= WEIGHT[need], isMine = paying && mine === k;
      return '<div class="pl-card' + (needed ? ' is-needed' : '') + (isMine ? ' is-mine' : '') + '"><h2 class="t-h2"><bdi>' + esc(t('app_tier_' + k)) + '</bdi></h2>' +
        '<p class="t-h3 pl-price">' + esc(priceLine(k)) + '</p>' +
        '<p class="t-small">' + esc(k === 'private' ? t('app_pl_private') : t('app_pl_seats', { n: SEATS[k] })) + '</p>' +
        (needed ? '<p class="t-small pl-note">' + esc(t('app_pl_needed')) + '</p>' : '') +
        (isMine ? '<p class="t-small pl-note">' + esc(t('app_pl_current')) + '</p>'
          : paying ? '' : '<button class="btn btn--' + (needed || !need ? 'primary' : 'ghost') + ' btn--sm" type="button" data-pl="choose" data-k="' + k + '"' + (priceOf(k) ? '' : ' disabled') + '>' + esc(t('app_pl_choose', { plan: planName(k) })) + '</button>') + '</div>';
    }).join('') + '</div><p class="t-small st-msg pl-msg" data-plmsg="choose" aria-live="polite"></p>' +
      '<p class="t-small" style="margin-top:14px"><a class="linkish" href="/tiers">' + esc(t('app_pl_compare')) + '</a></p></section>';
    if (!real()) html += '<p class="t-tiny span-12">' + esc(t('app_pl_sample')) + '</p>';
    root.setAttribute('data-plclass', classId || '');
    return html + '</div>';
  }
  function say(which, key, bad) { var m = root.querySelector('[data-plmsg="' + which + '"]'); if (m) { m.textContent = t(key); m.classList.toggle('is-bad', !!bad); } }

  /* Opens Stripe checkout; the address it sends back must be Stripe's own */
  function checkout(body, msgKey, btn) {
    if (!real()) { say(msgKey, 'app_pl_sample'); return; }
    if (btn) btn.disabled = true;
    say(msgKey, 'app_pl_going');
    window.AlimunData.checkout(body).then(function (r) {
      var u = new URL(r.url);
      if (u.protocol !== 'https:' || !/(^|\.)stripe\.com$/.test(u.hostname)) throw new Error('unexpected checkout address');
      location.href = u.href;
    }, function (e) {
      if (e && e.body && e.body.error === 'active_subscription') return portal(btn, msgKey);
      if (btn) btn.disabled = false;
      say(msgKey, 'app_pl_err', true);
      console.warn('[Alimun] Checkout', e && e.message);
    });
  }
  function portal(btn, msgKey) {
    if (!real()) { say(msgKey || 'top', 'app_pl_sample'); return; }
    if (btn) btn.disabled = true;
    window.AlimunData.billingPortal(location.origin + '/app#/settings').then(function (r) {
      var u = new URL(r.url);
      if (u.protocol !== 'https:' || !/(^|\.)stripe\.com$/.test(u.hostname)) throw new Error('unexpected portal address');
      location.href = u.href;
    }, function (e) { if (btn) btn.disabled = false; say(msgKey || 'top', 'app_pl_err', true); console.warn('[Alimun] Billing portal', e && e.message); });
  }
  function choose(k, btn) {
    var p = priceOf(k), cls = root.getAttribute('data-plclass');
    if (!p) return;
    var back = location.origin + '/app';
    checkout({ priceId: p.id, mode: 'subscription', successUrl: back + '?checkout=success', cancelUrl: back + '?checkout=cancelled#/settings/plans', cohortId: cls || undefined, customerName: P().name || '' }, 'choose', btn);
  }
  /* One private class, paid once (Classes calls this; the webhook adds the credit) */
  function buyExtra(helpers, btn, msgEl) {
    A = helpers;
    var show = function (k, bad) { if (msgEl) { msgEl.textContent = t(k); msgEl.classList.toggle('is-bad', !!bad); } };
    if (!real()) { show('app_pl_sample'); return; }
    btn.disabled = true; show('app_pl_going');
    prices().then(function (pr) {
      if (!pr.oneOnOneSession) throw new Error('no price');
      var back = location.origin + '/app';
      return window.AlimunData.checkout({ priceId: pr.oneOnOneSession.id, mode: 'payment', successUrl: back + '?checkout=credit#/classes', cancelUrl: back + '?checkout=cancelled#/classes' });
    }).then(function (r) {
      var u = new URL(r.url);
      if (u.protocol !== 'https:' || !/(^|\.)stripe\.com$/.test(u.hostname)) throw new Error('unexpected checkout address');
      location.href = u.href;
    }).catch(function (e) { btn.disabled = false; show('app_pl_err', true); console.warn('[Alimun] Extra class checkout', e && e.message); });
  }
  /* The label of the "buy a private class" button, with Stripe's price once known */
  function extraLabel(helpers) {
    A = helpers;
    return prices().then(function (pr) { return pr.oneOnOneSession ? t('app_pl_buy_extra', { price: money(pr.oneOnOneSession) }) : t('app_pl_buy_extra_np'); });
  }

  function bind() {
    if (root.__plans) return;
    root.__plans = true;
    root.addEventListener('click', function (e) {
      var b = e.target.closest('[data-pl]');
      if (!b || b.disabled) return;
      var a = b.getAttribute('data-pl');
      if (a === 'period') { period = b.getAttribute('data-k'); A.rerender(); }
      else if (a === 'choose') choose(b.getAttribute('data-k'), b);
      else if (a === 'portal') portal(b, 'top');
    });
  }
  function mount(view_, parts, helpers) {
    A = helpers; root = view_;
    bind();
    var classId = /^[0-9a-f-]{36}$/i.test(parts[1] || '') ? parts[1] : '', need = WEIGHT[parts[2]] ? parts[2] : '';
    return prices().then(function () { return { html: view(classId, need), title: t('app_pl_title') }; });
  }
  window.AlimunPlans = { mount: mount, buyExtra: buyExtra, extraLabel: extraLabel };
})();
