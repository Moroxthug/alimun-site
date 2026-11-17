/* Alimun app: learners deleting their own account (GDPR art. 17, Terms section 13).
   #/settings/delete  Step 1 "Before you go": what is lost, and what the learner can do instead (stop paying and keep
                      the account on the free plan, turn off news and offers, tell us what went wrong). Step 2: an
                      optional reason, then the learner types their email address to confirm. /api/account?action=delete
                      cancels any Stripe plan, deletes the account and everything it owns, and emails a confirmation.
                      Teachers and admins are sent to the Contact page (classes and payouts are handed over by hand).
   Sample (signed out or ?sample=1): the steps work but nothing is sent. Interface text: app_dl_* keys. */
(function () {
  'use strict';
  var A = null, root = null, S = null;
  var REASONS = ['price', 'not_using', 'other_way', 'problems', 'privacy', 'other'];
  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real' && A.data().profile && A.data().profile.id; }

  function api(path, opts) {
    return window.AlimunData.token().then(function (tok) {
      if (!tok) throw new Error('signed out');
      var o = opts || {};
      o.headers = Object.assign({ Authorization: 'Bearer ' + tok }, o.body ? { 'Content-Type': 'application/json' } : {});
      return fetch('/api/account?action=' + path, o).then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok) { var e = new Error(j.error || 'http ' + r.status); e.code = j.error; throw e; } return j; });
      });
    });
  }

  function offer(title, body, action) {
    return '<div class="dl-offer"><h2 class="t-h3">' + esc(title) + '</h2><p class="t-body">' + esc(body) + '</p><div class="btn-row">' + action + '</div></div>';
  }
  function beforeView() {
    var html = '<p class="t-lead" style="margin-top:10px">' + esc(t('app_dl_p')) + '</p><div class="dl-offers">';
    if (S.info.stripeSub) html += offer(t('app_dl_o_plan_h'), t('app_dl_o_plan_p'), '<button class="btn btn--lime btn--sm" type="button" data-dl="portal">' + esc(t('app_dl_o_plan_b')) + '</button>');
    html += offer(t('app_dl_o_mail_h'), t('app_dl_o_mail_p'), '<a class="btn btn--ghost btn--sm" href="#/settings">' + esc(t('app_dl_o_mail_b')) + '</a>');
    html += offer(t('app_dl_o_talk_h'), t('app_dl_o_talk_p'), '<a class="btn btn--ghost btn--sm" href="#/support">' + esc(t('app_dl_o_talk_b')) + '</a>');
    html += '</div>';
    if (S.info.storeSub) html += '<p class="t-body dl-note">' + esc(t('app_dl_store')) + '</p>';
    return html + '<p class="t-body st-msg" data-dl-msg aria-live="polite"></p>' +
      '<div class="btn-row" style="margin-top:22px"><a class="btn btn--primary" href="#/settings">' + esc(t('app_dl_keep')) + '</a><button class="btn btn--quiet" type="button" data-dl="next">' + esc(t('app_dl_continue')) + '</button></div>';
  }
  function confirmView() {
    var opts = '<option value="">' + esc(t('app_dl_reason_none')) + '</option>' + REASONS.map(function (r) { return '<option value="' + r + '"' + (S.reason === r ? ' selected' : '') + '>' + esc(t('app_dl_r_' + r)) + '</option>'; }).join('');
    return '<form class="st-form" data-dl="form" novalidate>' +
      '<p class="t-body" style="margin-top:10px">' + esc(t(S.info.stripeSub ? 'app_dl_confirm_p_sub' : 'app_dl_confirm_p')) + '</p>' +
      '<label class="st-field"><span class="st-lbl">' + esc(t('app_dl_reason')) + '</span><select class="st-in" name="reason">' + opts + '</select></label>' +
      '<label class="st-field"><span class="st-lbl">' + esc(t('app_dl_details')) + '</span><textarea class="st-in" name="details" maxlength="1000" rows="3">' + esc(S.details || '') + '</textarea></label>' +
      '<label class="st-field"><span class="st-lbl">' + esc(t('app_dl_type', { email: S.info.email })) + '</span><input class="st-in" id="dl-email" name="confirm" type="email" autocomplete="off" autocapitalize="off" spellcheck="false" maxlength="254" required></label>' +
      '<div class="btn-row"><button class="btn btn--primary" type="submit" data-dl-go disabled>' + esc(t('app_dl_delete')) + '</button><a class="btn btn--quiet" href="#/settings">' + esc(t('app_dl_keep')) + '</a></div>' +
      '<p class="t-body st-msg" data-dl-msg aria-live="polite"></p></form>';
  }
  function doneView() {
    return '<p class="t-lead" style="margin-top:10px">' + esc(t('app_dl_done_p', { email: S.info.email })) + '</p>' +
      '<div class="btn-row" style="margin-top:18px"><a class="btn btn--primary" href="/">' + esc(t('app_dl_home')) + '</a></div>';
  }
  function blockedView() {
    return '<p class="t-lead" style="margin-top:10px">' + esc(t(S.info.why === 'admin' ? 'app_dl_admin' : 'app_dl_teacher')) + '</p>' +
      '<div class="btn-row" style="margin-top:18px"><a class="btn btn--primary" href="/contact">' + esc(t('app_dl_contact')) + '</a><a class="btn btn--quiet" href="#/settings">' + esc(t('app_dl_back')) + '</a></div>';
  }
  function page() {
    var h = S.done ? t('app_dl_done_h') : !S.info.can ? t('app_dl_h') : S.step === 2 ? t('app_dl_confirm_h') : t('app_dl_before_h');
    var body = S.done ? doneView() : !S.info.can ? blockedView() : S.step === 2 ? confirmView() : beforeView();
    return '<div class="grid"><section class="card span-8 st-card" style="--i:0" aria-labelledby="h-dl"><h1 class="t-h1" id="h-dl" tabindex="-1" style="outline:none">' + esc(h) + '</h1>' +
      body + (S.sample && !S.done ? '<p class="t-tiny" style="margin-top:14px">' + esc(t('app_dl_sample')) + '</p>' : '') + '</section></div>';
  }
  function draw() { root.innerHTML = page(); var h = root.querySelector('#h-dl'); if (h && h.focus) h.focus({ preventScroll: false }); }
  function msg(key) { var m = root.querySelector('[data-dl-msg]'); if (m) { m.textContent = t(key); m.classList.add('is-bad'); } }
  function matches(v) { return String(v || '').trim().toLowerCase() === String(S.info.email || '').trim().toLowerCase() && !!S.info.email; }

  function portal(btn) {
    btn.disabled = true;
    if (S.sample) { btn.disabled = false; msg('app_dl_sample'); return; }
    window.AlimunData.token().then(function (tok) {
      return fetch('/api/stripe?action=billing-portal', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + tok }, body: JSON.stringify({ returnUrl: location.origin + location.pathname + '#/settings' }) });
    }).then(function (r) { return r.json().then(function (j) { if (!r.ok || !j.url) throw new Error(j.error || r.status); return j.url; }); })
      .then(function (url) {
        var u = new URL(url);
        if (u.protocol !== 'https:' || !/(^|\.)stripe\.com$/.test(u.hostname)) throw new Error('unexpected address');
        location.assign(u.href);
      }, function (e) { btn.disabled = false; msg('app_st_portal_error'); console.warn('[Alimun] Billing portal', e && e.message); });
  }
  function remove(form) {
    var f = new FormData(form);
    S.reason = String(f.get('reason') || ''); S.details = String(f.get('details') || '').trim();
    if (!matches(f.get('confirm'))) { msg('app_dl_mismatch'); return; }
    if (S.sample) { S.done = true; draw(); return; }
    var btn = form.querySelector('[data-dl-go]'); btn.disabled = true;
    api('delete', { method: 'POST', body: JSON.stringify({ confirm: String(f.get('confirm')).trim(), reason: S.reason || undefined, details: S.details || undefined, locale: A.lang }) })
      .then(function () {
        S.done = true; draw();
        /* The account is gone: end the session in this browser */
        return window.AlimunData.signOut().catch(function () {});
      }, function (e) {
        btn.disabled = false;
        msg(e.code === 'billing_failed' || e.code === 'billing_unavailable' ? 'app_dl_err_billing' : e.code === 'confirm_mismatch' ? 'app_dl_mismatch' : 'app_dl_error');
        console.warn('[Alimun] Account not deleted', e && e.message);
      });
  }

  function bind() {
    root.addEventListener('input', function (e) {
      if (e.target.id !== 'dl-email') return;
      var go = root.querySelector('[data-dl-go]'); if (go) go.disabled = !matches(e.target.value);
    });
    root.addEventListener('submit', function (e) {
      var f = e.target.closest('[data-dl="form"]'); if (!f) return;
      e.preventDefault(); remove(f);
    });
    root.addEventListener('click', function (e) {
      var b = e.target.closest('[data-dl]'); if (!b || b.disabled || b.tagName === 'FORM') return;
      var what = b.getAttribute('data-dl');
      if (what === 'next') { S.step = 2; draw(); var i = root.querySelector('#dl-email'); if (i) i.focus(); }
      else if (what === 'portal') portal(b);
    });
  }

  function mount(view_, parts, helpers) {
    A = helpers; root = view_;
    if (!root.__dlBound) { root.__dlBound = true; bind(); }
    S = { step: 1, sample: !real() };
    var load = S.sample
      ? Promise.resolve({ can: true, email: 'sara@example.com', tier: 'focused', stripeSub: true, storeSub: false })
      : api('delete-check');
    return load.then(function (r) { S.info = r; draw(); return { html: root.innerHTML }; }, function (e) {
      console.warn('[Alimun] Delete page did not load', e && e.message);
      root.innerHTML = '<div class="card"><p class="t-body">' + esc(t('app_book_error')) + '</p></div>';
      return { html: root.innerHTML };
    });
  }

  window.AlimunDeleteAccount = { mount: mount };
})();
