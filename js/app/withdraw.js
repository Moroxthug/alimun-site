/* Alimun app: withdrawing from a contract online (docs/PRICING_ENGINE_SPEC.md, build step 1).
   #/settings/withdraw  Two steps, as Directive (EU) 2023/2673 requires: the learner picks the purchase and checks their
                        name and email, then sees a summary and presses "Confirm withdrawal". /api/withdraw stores it and
                        emails a receipt with the date and time; the refund is issued by an admin.
   Sample (signed out or ?sample=1): the form works but nothing is sent. Interface text: app_wd_* keys. */
(function () {
  'use strict';
  var A = null, root = null, S = null;
  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real' && A.data().profile && A.data().profile.id; }

  function api(path, opts) {
    return window.AlimunData.token().then(function (tok) {
      if (!tok) throw new Error('signed out');
      var o = opts || {};
      o.headers = Object.assign({ Authorization: 'Bearer ' + tok }, o.body ? { 'Content-Type': 'application/json' } : {});
      return fetch('/api/withdraw?action=' + path, o).then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok) { var e = new Error(j.error || 'http ' + r.status); e.code = j.error; throw e; } return j; });
      });
    });
  }

  function day(iso) { return new Intl.DateTimeFormat(A.locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso)); }
  function money(c) { return c.amount == null ? '' : new Intl.NumberFormat(A.locale, { style: 'currency', currency: String(c.currency || 'eur').toUpperCase() }).format(c.amount / 100); }
  function labelOf(c) {
    var name = c.name || t(c.kind === 'subscription' ? 'app_wd_kind_sub' : 'app_wd_kind_pay');
    return t(c.kind === 'subscription' ? 'app_wd_sub' : 'app_wd_pay', { name: name, amount: money(c), date: day(c.date) });
  }

  function formView() {
    var c = S.contracts, opts = c.map(function (x) { return '<option value="' + esc(x.ref) + '"' + (S.ref === x.ref ? ' selected' : '') + '>' + esc(labelOf(x)) + '</option>'; }).join('');
    var pick = c.length
      ? '<label class="st-field"><span class="st-lbl">' + esc(t('app_wd_contract')) + '</span><select class="st-in" name="ref" id="wd-ref">' + opts + '<option value=""' + (S.ref === '' ? ' selected' : '') + '>' + esc(t('app_wd_other')) + '</option></select></label>'
      : '<p class="t-body">' + esc(t('app_wd_none')) + '</p>';
    var other = '<label class="st-field" data-wd-other' + (c.length && S.ref !== '' ? ' hidden' : '') + '><span class="st-lbl">' + esc(t('app_wd_other_l')) + '</span><input class="st-in" id="wd-other" name="other" maxlength="200" value="' + esc(S.other || '') + '" placeholder="' + esc(t('app_wd_other_ph')) + '"></label>';
    return '<form class="st-form" data-wd="form" novalidate>' + pick + other +
      '<label class="st-field"><span class="st-lbl">' + esc(t('app_wd_name')) + '</span><input class="st-in" id="wd-name" name="name" maxlength="120" required autocomplete="name" value="' + esc(S.name || '') + '"></label>' +
      '<label class="st-field"><span class="st-lbl">' + esc(t('app_wd_email')) + '</span><input class="st-in" id="wd-email" name="email" type="email" maxlength="254" required autocomplete="email" value="' + esc(S.email || '') + '"></label>' +
      '<label class="st-field"><span class="st-lbl">' + esc(t('app_wd_reason')) + '</span><textarea class="st-in" id="wd-reason" name="reason" maxlength="1000" rows="3">' + esc(S.reason || '') + '</textarea></label>' +
      '<div class="btn-row"><button class="btn btn--primary" type="submit">' + esc(t('app_wd_continue')) + '</button><a class="btn btn--quiet" href="#/settings">' + esc(t('app_wd_cancel')) + '</a></div>' +
      '<p class="t-body st-msg" data-wd-msg aria-live="polite"></p></form>';
  }
  function checkView() {
    var c = S.contracts.filter(function (x) { return x.ref === S.ref; })[0];
    var rows = [[t('app_wd_contract'), c ? labelOf(c) : S.other], [t('app_wd_name'), S.name], [t('app_wd_email'), S.email]];
    if (S.reason) rows.push([t('app_wd_reason'), S.reason]);
    return '<p class="t-body">' + esc(t('app_wd_check_p')) + '</p><dl class="wd-sum" style="margin:16px 0 20px">' + rows.map(function (r) { return '<dt class="st-lbl">' + esc(r[0]) + '</dt><dd class="t-body" style="margin:2px 0 12px;overflow-wrap:anywhere">' + esc(r[1]) + '</dd>'; }).join('') + '</dl>' +
      '<div class="btn-row"><button class="btn btn--lime" type="button" data-wd="confirm">' + esc(t('app_wd_confirm')) + '</button><button class="btn btn--quiet" type="button" data-wd="back">' + esc(t('app_wd_back')) + '</button></div>' +
      '<p class="t-body st-msg" data-wd-msg aria-live="polite"></p>';
  }
  function doneView() {
    var when = new Intl.DateTimeFormat(A.locale, { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date(S.done.receivedAt));
    return '<p class="t-lead">' + esc(t('app_wd_done_p', { when: when, email: S.done.email })) + '</p>' +
      '<div class="btn-row" style="margin-top:18px"><a class="btn btn--primary" href="#/settings">' + esc(t('app_wd_to_settings')) + '</a></div>';
  }
  function page() {
    var h = S.done ? t('app_wd_done_h') : S.step === 2 ? t('app_wd_check_h') : t('app_wd_h');
    var body = S.done ? doneView() : S.step === 2 ? checkView() : formView();
    return '<div class="grid"><section class="card span-8 st-card" style="--i:0" aria-labelledby="h-wd"><h1 class="t-h1" id="h-wd" tabindex="-1" style="outline:none">' + esc(h) + '</h1>' +
      (S.step === 1 && !S.done ? '<p class="t-lead" style="margin-top:10px">' + esc(t('app_wd_p')) + '</p>' : '') +
      '<div style="margin-top:18px">' + body + '</div>' + (S.sample ? '<p class="t-tiny" style="margin-top:14px">' + esc(t('app_wd_sample')) + '</p>' : '') + '</section></div>';
  }
  function draw() { root.innerHTML = page(); var h = root.querySelector('#h-wd'); if (h && h.focus) h.focus({ preventScroll: false }); }
  function msg(key) { var m = root.querySelector('[data-wd-msg]'); if (m) { m.textContent = t(key); m.classList.add('is-bad'); } }

  function readForm(f) {
    var d = new FormData(f);
    S.ref = S.contracts.length ? String(d.get('ref') || '') : '';
    S.other = String(d.get('other') || '').trim();
    S.name = String(d.get('name') || '').trim();
    S.email = String(d.get('email') || '').trim();
    S.reason = String(d.get('reason') || '').trim();
  }
  function confirm(btn) {
    if (S.sample) { S.done = { receivedAt: new Date().toISOString(), email: S.email }; draw(); return; }
    btn.disabled = true;
    api('submit', { method: 'POST', body: JSON.stringify({ contractRef: S.ref || undefined, otherText: S.ref ? undefined : S.other, name: S.name, email: S.email, reason: S.reason, locale: A.lang }) })
      .then(function (r) { S.done = r; draw(); }, function (e) { btn.disabled = false; msg(e.code === 'too_many' ? 'app_wd_too_many' : 'app_wd_error'); console.warn('[Alimun] Withdrawal not sent', e && e.message); });
  }

  function bind() {
    root.addEventListener('change', function (e) {
      if (e.target.id !== 'wd-ref') return;
      var o = root.querySelector('[data-wd-other]'); if (o) o.hidden = e.target.value !== '';
    });
    root.addEventListener('submit', function (e) {
      var f = e.target.closest('[data-wd="form"]'); if (!f) return;
      e.preventDefault();
      readForm(f);
      if (!S.ref && !S.other) { msg('app_wd_need_contract'); return; }
      if (!S.name) { msg('app_wd_need_name'); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(S.email)) { msg('app_wd_need_email'); return; }
      S.step = 2; draw();
    });
    root.addEventListener('click', function (e) {
      var b = e.target.closest('[data-wd]'); if (!b || b.disabled) return;
      if (b.getAttribute('data-wd') === 'back') { S.step = 1; draw(); }
      else if (b.getAttribute('data-wd') === 'confirm') confirm(b);
    });
  }

  function mount(view_, parts, helpers) {
    A = helpers; root = view_;
    var fresh = !root.__wdBound; if (fresh) { root.__wdBound = true; bind(); }
    S = { step: 1, contracts: [], ref: null, sample: !real() };
    var p = A.data().profile || {};
    var load = S.sample
      ? Promise.resolve({ contracts: [{ ref: 'sample', kind: 'subscription', name: 'Level pack', amount: 6400, currency: 'eur', date: new Date().toISOString() }], name: p.name || '', email: 'sara@example.com' })
      : api('contracts');
    return load.then(function (r) {
      S.contracts = r.contracts || []; S.name = r.name || p.name || ''; S.email = r.email || '';
      S.ref = S.contracts.length ? S.contracts[0].ref : '';
      draw();
      return { html: root.innerHTML };
    }, function (e) {
      console.warn('[Alimun] Withdrawal page did not load', e && e.message);
      S.contracts = []; S.ref = ''; S.name = p.name || ''; draw();
      return { html: root.innerHTML };
    });
  }

  window.AlimunWithdraw = { mount: mount };
})();
