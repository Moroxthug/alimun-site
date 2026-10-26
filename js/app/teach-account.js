/* Alimun teacher dashboard, Payouts and Settings (docs/DASHBOARD_PLAN.md, step 15, part 6).
   Payouts (#/payouts): the payouts Alimun has recorded (teacher_payouts, written by admins) and this month's classes
   marked as done and 1:1s completed. No amount is worked out in the dashboard (owner, 26 Oct 2026: counts only).
   Settings (#/settings): name, location, specialty and bio (the database lets a teacher change only these), languages
   shown as set by Alimun, the dashboard's language on this device, password and signing out.
   Signed out or not a teacher: a sample, nothing is saved. Text: app_tp_* and app_tst_* keys. */
(function () {
  'use strict';
  var A = null, root = null, PAY = null, SET = null;
  var UI = { en: 'English', es: 'Español', fr: 'Français', de: 'Deutsch', pt: 'Português', it: 'Italiano', zh: '中文', ar: 'العربية', ma: 'Français (Maroc)' };
  var PAID = { paid: 'app_tp_s_paid', pending: 'app_tp_s_pending', processing: 'app_tp_s_pending', failed: 'app_tp_s_failed' };
  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real'; }
  function money(n) { return new Intl.NumberFormat(A.locale, { style: 'currency', currency: 'EUR' }).format(Number(n) || 0); }
  function day(d) { return A.fmt(d + (String(d).length === 10 ? 'T12:00:00' : ''), { day: 'numeric', month: 'short', year: 'numeric' }); }
  function loading() { return '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + esc(t('app_book_loading')) + '">' + A.loaderInner() + '</div></div>'; }

  /* ---------- Payouts ---------- */
  function samplePay() {
    var now = new Date(), m = function (k, d) { var x = new Date(now.getFullYear(), now.getMonth() + k, d); return x.toISOString().slice(0, 10); };
    return { sample: true, cohorts: [{ id: 'c1', language: 'German', level: 'B1', tier: 'focused' }, { id: 'c2', language: 'German', level: 'A2', tier: 'intensive' }],
      payouts: [
        { id: 'y1', period_start: m(-1, 1), period_end: m(0, 0), sessions_count: 17, amount_eur: 612.5, status: 'pending', paid_at: null },
        { id: 'y2', period_start: m(-2, 1), period_end: m(-1, 0), sessions_count: 15, amount_eur: 540, status: 'paid', paid_at: m(-1, 5) + 'T10:00:00Z' }
      ],
      classes: [{ cohort_id: 'c1' }, { cohort_id: 'c1' }, { cohort_id: 'c1' }, { cohort_id: 'c2' }, { cohort_id: 'c2' }, { cohort_id: 'c2' }, { cohort_id: 'c2' }],
      oto: [{ kind: 'followup' }, { kind: 'followup' }, { kind: 'credit' }], since: m(0, 1) };
  }
  function payView() {
    var d = PAY, perClass = {};
    d.classes.forEach(function (s) { perClass[s.cohort_id] = (perClass[s.cohort_id] || 0) + 1; });
    var follow = d.oto.filter(function (b) { return b.kind === 'followup'; }).length, priv = d.oto.length - follow;
    var month = A.cap(A.fmt(new Date(), { month: 'long', year: 'numeric' }));
    var html = '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_t_nav_payouts')) + '</h1><p class="t-lead">' + esc(t('app_tp_lead')) + '</p></div></div><div class="grid rise">';
    html += '<section class="card card--forest span-8" style="--i:0" aria-labelledby="h-month"><h2 class="t-h1" id="h-month">' + esc(t('app_tp_month_h', { month: month })) + '</h2>' +
      '<p class="t-lead" style="margin-top:12px">' + esc(t('app_tp_month_p', { classes: A.tn('app_t_classes_taught_n', d.classes.length), oto: A.tn('app_tp_oto_n', d.oto.length) })) + '</p>' +
      (d.classes.length ? '<div class="tt-week th-wait">' + d.cohorts.filter(function (c) { return perClass[c.id]; }).map(function (c) {
        return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(String(perClass[c.id])) + '</span><span><b>' + esc(A.className(c)) + '</b></span></div>';
      }).join('') + (d.oto.length ? '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(String(d.oto.length)) + '</span><span><b>' + esc(A.cap(t('app_tp_oto_line', { follow: follow, priv: priv }))) + '</b></span></div>' : '') + '</div>' : '') +
      '<p class="t-small tp-note">' + esc(t('app_tp_month_note')) + '</p></section>' +
      '<section class="stage span-4" style="--i:1;background:var(--t-sun)" aria-hidden="true"><div class="bub think">' + esc(t('app_t_soon_payouts_bub')) + '</div>' + A.Cast.drawing('suitcase') + '</section>';
    html += '<section class="card span-12" style="--i:2" aria-labelledby="h-paid"><h2 class="t-h2" id="h-paid">' + esc(t('app_tp_paid_h')) + '</h2>';
    if (!d.payouts.length) html += '<p class="t-body" style="margin-top:10px">' + esc(t('app_tp_none')) + '</p>';
    else html += '<div class="tt-week">' + d.payouts.map(function (p) {
      var st = t(PAID[p.status] || 'app_tp_s_pending') + (p.status === 'paid' && p.paid_at ? ', ' + day(p.paid_at) : '');
      return '<div class="tt-row tp-row"><span class="tt-row__time">' + esc(money(p.amount_eur)) + '</span><span><b>' + esc(day(p.period_start) + ' – ' + day(p.period_end)) + '</b><small>' +
        esc(A.tn('app_t_classes_taught_n', p.sessions_count || 0) + '. ' + st + '.') + '</small></span></div>';
    }).join('') + '</div>';
    html += '<p class="t-small" style="margin-top:14px">' + esc(t('app_tp_questions')) + ' <a class="linkish" href="/contact">' + esc(t('app_tp_contact')) + '</a></p></section>';
    if (d.sample) html += '<p class="t-tiny span-12">' + esc(t('app_tp_sample')) + '</p>';
    return html + '</div>';
  }

  /* ---------- Settings ---------- */
  function sampleSet() { return { sample: true, email: 'ana@example.com', teacher: { full_name: 'Ana Weber', location: 'Leipzig', specialty: 'German for moving abroad', bio: 'I have taught German to adults for twelve years.', languages: ['German', 'English'] } }; }
  function setView() {
    var p = SET.teacher || {};
    var field = function (label, control, hint) { return '<label class="st-field"><span class="st-lbl">' + esc(t(label)) + '</span>' + control + (hint ? '<span class="t-small st-hint">' + esc(t(hint)) + '</span>' : '') + '</label>'; };
    var html = '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_t_nav_settings')) + '</h1><p class="t-lead">' + esc(t('app_tst_lead')) + '</p></div></div><div class="grid rise st">';
    html += '<section class="card span-12 st-card" style="--i:0" aria-labelledby="h-me"><h2 class="t-h2" id="h-me">' + esc(t('app_tst_me_h')) + '</h2><form class="st-form" data-tst="me">' +
      field('app_st_name', '<input class="st-in" name="full_name" autocomplete="name" maxlength="100" required value="' + esc(p.full_name || '') + '">') +
      field('app_st_email', '<input class="st-in" type="email" value="' + esc(SET.email || '') + '" disabled>', 'app_st_email_p') +
      '<div class="st-row">' + field('app_tst_location', '<input class="st-in" name="location" maxlength="100" value="' + esc(p.location || '') + '">') +
        field('app_tst_specialty', '<input class="st-in" name="specialty" maxlength="200" value="' + esc(p.specialty || '') + '">') + '</div>' +
      field('app_tst_bio', '<textarea class="st-in tc-ta" name="bio" rows="5" maxlength="3000" dir="auto">' + esc(p.bio || '') + '</textarea>', 'app_tst_bio_p') +
      '<p class="t-body">' + esc(t('app_tst_langs', { list: A.listOf((p.languages || []).map(function (l) { return A.languageName(l); })) || '…' })) + '</p>' +
      '<div class="btn-row"><button class="btn btn--primary" type="submit">' + esc(t('app_st_save')) + '</button></div><p class="t-body st-msg" data-msg="me" aria-live="polite"></p></form></section>';
    html += '<section class="card span-6 st-card" style="--i:1"><h2 class="t-h2">' + esc(t('app_st_ui_h')) + '</h2><p class="t-body">' + esc(t('app_st_ui_p')) + '</p>' +
      '<div class="st-field" style="margin-top:14px"><select class="st-in" data-ui>' + Object.keys(UI).map(function (l) { return '<option value="' + l + '"' + (l === A.lang ? ' selected' : '') + '>' + esc(UI[l]) + '</option>'; }).join('') + '</select></div></section>';
    html += '<section class="card span-6 st-card" style="--i:2"><h2 class="t-h2">' + esc(t('app_st_acc_h')) + '</h2>' +
      '<form class="st-form" data-tst="pw"><label class="st-field"><span class="st-lbl">' + esc(t('app_st_pw')) + '</span><input class="st-in" type="password" name="pw" autocomplete="new-password" minlength="8" required></label>' +
      '<div class="btn-row"><button class="btn btn--ghost btn--sm" type="submit">' + esc(t('app_st_pw_save')) + '</button></div><p class="t-body st-msg" data-msg="pw" aria-live="polite"></p></form>' +
      '<div class="st-acc-foot"><button class="btn btn--quiet btn--sm" type="button" data-tst-out>' + esc(t('app_st_signout')) + '</button><a class="linkish" href="/contact">' + esc(t('app_st_delete')) + '</a></div></section>';
    if (SET.sample) html += '<p class="t-tiny span-12">' + esc(t('app_tst_sample')) + '</p>';
    return html + '</div>';
  }
  function say(which, key, bad) { var m = root.querySelector('[data-msg="' + which + '"]'); if (m) { m.textContent = t(key); m.classList.toggle('is-bad', !!bad); } }
  function saveMe(form) {
    var f = new FormData(form), clean = function (v, n) { return String(v || '').trim().slice(0, n); };
    var patch = { full_name: clean(f.get('full_name'), 100), location: clean(f.get('location'), 100) || null, specialty: clean(f.get('specialty'), 200) || null, bio: String(f.get('bio') || '').trim().slice(0, 3000) || null };
    if (!patch.full_name || /[<>]/.test(patch.full_name + (patch.location || '') + (patch.specialty || ''))) { say('me', 'app_tst_bad', true); return; }
    if (SET.sample) { say('me', 'app_st_sample_saved'); return; }
    var btn = form.querySelector('[type="submit"]'); btn.disabled = true;
    window.AlimunData.saveTeacherProfile(patch).then(function () {
      Object.assign(SET.teacher, patch); btn.disabled = false; say('me', 'app_st_saved');
      var side = document.querySelector('.side__foot b'); if (side) side.textContent = patch.full_name;
    }, function (e) { btn.disabled = false; say('me', 'app_st_error', true); console.warn('[Alimun] Profile not saved', e && e.message); });
  }
  function savePw(form) {
    var pw = String(new FormData(form).get('pw') || '');
    if (pw.length < 8) { say('pw', 'app_st_pw_short', true); return; }
    if (SET.sample) { say('pw', 'app_st_sample_saved'); return; }
    window.AlimunData.changePassword(pw).then(function () { form.reset(); say('pw', 'app_st_pw_done'); }, function () { say('pw', 'app_st_pw_error', true); });
  }
  function bind() {
    if (root.__taccount) return;
    root.__taccount = true;
    root.addEventListener('submit', function (e) {
      var f = e.target.closest('[data-tst]'); if (!f || !SET) return;
      e.preventDefault();
      if (f.getAttribute('data-tst') === 'me') saveMe(f); else savePw(f);
    });
    root.addEventListener('change', function (e) {
      if (!e.target.hasAttribute('data-ui') || !root.querySelector('[data-tst]')) return;
      try { localStorage.setItem('alimun-lang', e.target.value); } catch (x) { /* storage blocked */ }
      var u = new URL(location.href); u.searchParams.delete('lang'); location.replace(u.href); location.reload();
    });
    root.addEventListener('click', function (e) {
      if (!e.target.closest('[data-tst-out]') || !SET) return;
      if (SET.sample) { say('pw', 'app_st_sample_saved'); return; }
      window.AlimunData.signOut().then(function () { location.href = '/'; });
    });
  }

  function mounter(kind) {
    var no = 0;
    return function (view, parts, helpers) {
      var my = ++no;
      A = helpers; root = view;
      bind();
      root.innerHTML = loading();
      var get = kind === 'pay'
        ? (PAY ? Promise.resolve(PAY) : (real() ? window.AlimunData.teacherPayouts().then(function (d) { return d && d.teacher ? d : samplePay(); }) : Promise.resolve(samplePay())).then(function (d) { PAY = d; return d; }))
        : (SET ? Promise.resolve(SET) : (real() ? window.AlimunData.teacherProfile().then(function (d) { return d && d.teacher ? d : sampleSet(); }) : Promise.resolve(sampleSet())).then(function (d) { SET = d; return d; }));
      return get.then(function () {
        if (my !== no) return { stale: true };
        root.innerHTML = kind === 'pay' ? payView() : setView();
        return { title: t(kind === 'pay' ? 'app_t_nav_payouts' : 'app_t_nav_settings') };
      }).catch(function (e) {
        console.warn('[Alimun] ' + kind + ' did not load', e && e.message);
        if (my === no) root.innerHTML = '<div class="card"><p class="t-body">' + esc(t('app_book_error')) + '</p></div>';
        return { stale: true };
      });
    };
  }
  window.AlimunTeachPayouts = { mount: mounter('pay'), reset: function () {} };
  window.AlimunTeachSettings = { mount: mounter('set'), reset: function () {} };
})();
