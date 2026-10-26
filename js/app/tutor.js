/* Alimun app: the tutor (docs/AI_TUTOR_PLAN.md). Part 1: the student's tutor time, as the server counts it
   (/api/tutor?action=status): the free 10 minutes given once, this month's plan minutes and minutes added or bought.
   The browser only shows the time; the server gives it and takes it. The tutor itself opens with part 2; until then
   the section is not in a real student's menu (js/app/shell.js) and says so.
   Sample data when signed out or with ?sample=1. Route: #/tutor. Interface text: app_tu_* keys. */
(function () {
  'use strict';
  var A = null, root = null, mountNo = 0;
  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function signedIn() { return A.mode() === 'real' && A.data().profile && A.data().profile.id; }

  function sample() {
    var renews = new Date(); renews = new Date(Date.UTC(renews.getUTCFullYear(), renews.getUTCMonth() + 1, 1)).toISOString();
    return { seconds: { free: 600, plan: 2520, credit: 0, total: 3120 }, plan: { tier: 'focused', minutes_per_month: 60, granted_seconds: 3600, renews_at: renews }, sample: true };
  }
  /* Whole minutes, with each language's own plural forms */
  function mins(sec) { return new Intl.NumberFormat(A.locale, { style: 'unit', unit: 'minute', unitDisplay: 'long' }).format(Math.floor((sec || 0) / 60)); }
  function day(iso) { return new Intl.DateTimeFormat(A.locale, { day: 'numeric', month: 'long', timeZone: 'UTC' }).format(new Date(iso)); }
  function row(big, small) { return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(big) + '</span><span><small>' + esc(small) + '</small></span></div>'; }

  function view(s) {
    var buddy = A.Cast.drawing(A.buddyFor(A.data().profile.language)), sec = s.seconds || {}, plan = s.plan || {};
    var html = '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_tutor')) + '</h1><p class="t-lead">' + esc(t('app_tu_lead')) + '</p></div></div><div class="grid rise">';
    html += '<section class="card span-7" style="--i:0" aria-labelledby="tu-left"><h2 class="t-h2" id="tu-left">' + esc(t('app_tu_left_h')) + '</h2>' +
      '<p class="t-num" style="margin-top:8px">' + esc(mins(sec.total)) + '</p><div class="tt-week" style="margin-top:12px">' +
      row(mins(sec.free), t('app_tu_free')) +
      (plan.granted_seconds ? row(mins(sec.plan), plan.renews_at ? t('app_tu_plan', { date: day(plan.renews_at) }) : t('app_tu_plan_nodate')) : '') +
      (sec.credit ? row(mins(sec.credit), t('app_tu_credit')) : '') + '</div>' +
      (plan.granted_seconds ? '' : '<p class="t-small" style="margin-top:12px">' + esc(t('app_tu_plan_none')) + '</p>') +
      (s.viewing ? '<p class="t-tiny" style="margin-top:12px">' + esc(t('app_tu_viewing')) + '</p>' : '') + '</section>';
    html += '<section class="stage span-5" style="--i:1;background:var(--t-mint)" aria-hidden="true"><div class="bub say">' + esc(t('app_tu_bub')) + '</div>' + buddy + '</section>';
    html += '<section class="card span-12" style="--i:2"><p class="t-body">' + esc(t('app_tu_soon')) + '</p></section>';
    if (s.sample) html += '<p class="t-tiny span-12">' + esc(t('app_tu_sample')) + '</p>';
    return html + '</div>';
  }
  function note(key) {
    return '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_tutor')) + '</h1></div></div><div class="card"><p class="t-body">' + esc(t(key)) + '</p></div>';
  }

  function mount(view_, parts, helpers) {
    var my = ++mountNo;
    A = helpers; root = view_;
    root.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + esc(t('app_book_loading')) + '">' + A.loaderInner() + '</div></div>';
    var load = signedIn() ? window.AlimunData.tutorStatus() : Promise.resolve(sample());
    return load.then(function (s) {
      return { html: s ? view(s) : note('app_tu_error') };
    }, function (e) {
      console.warn('[Alimun] Tutor time did not load', e && e.message);
      return { html: note(e && e.body && e.body.reason === 'email' ? 'app_tu_email' : 'app_tu_error') };
    }).then(function (res) {
      if (my === mountNo) root.innerHTML = res.html;
      return res;
    });
  }

  window.AlimunTutor = { mount: mount };
})();
