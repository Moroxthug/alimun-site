/* Alimun app: settings, plan and billing (docs/DASHBOARD_PLAN.md, step 14).
   Profile: name, the course (language and level), goal and timeframe, time zone, and the days and times that suit the
   student for classes (student_profiles; the database's guard_student_profile_columns lets the student change only
   these). The dashboard's own language (this browser, "alimun-lang"). Plan and billing: the plan and its status as the
   payment webhook wrote them; subscribers manage payment method, invoices, plan changes and cancelling in Stripe's
   billing portal (/api/stripe?action=billing-portal), others see the plans page. Account: password, signing out,
   asking for the account to be deleted (contact page).
   Signed out: the sample profile, nothing is saved. Route: #/settings. Interface text: app_st_* keys. */
(function () {
  'use strict';
  var A = null, root = null, S = null;
  var COURSES = ['English', 'German', 'French', 'Spanish', 'Italian', 'Portuguese'];
  var LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  var GOALS = { foundations: 'app_st_goal_foundations', relocation: 'app_st_goal_relocation', professional: 'app_st_goal_professional', academic: 'app_st_goal_academic', pleasure: 'app_st_goal_pleasure' };
  var TIMEFRAMES = { '3_months': 'app_st_tf_3', '6_months': 'app_st_tf_6', '1_year': 'app_st_tf_12', no_deadline: 'app_st_tf_none' };
  var UI = { en: 'English', es: 'Español', fr: 'Français', de: 'Deutsch', pt: 'Português', it: 'Italiano', zh: '中文', ar: 'العربية', ma: 'Français (Maroc)' };
  /* Plan names are product names: not translated */
  var PLANS = { free: 'Free', waitlist: null, community: 'Community', focused: 'Focused', intensive: 'Intensive', private: '1 on 1', onetoone: '1 on 1', daily: 'Daily', founding_member: 'Founding member' };
  var STATUS = { active: 'app_st_s_active', trialing: 'app_st_s_active', past_due: 'app_st_s_past_due', unpaid: 'app_st_s_past_due', canceled: 'app_st_s_canceled', cancelled: 'app_st_s_canceled', incomplete: 'app_st_s_incomplete', incomplete_expired: 'app_st_s_canceled' };
  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function signedIn() { return A.mode() === 'real' && A.data().profile.id; }
  function zones() {
    var list = [];
    try { list = Intl.supportedValuesOf('timeZone'); } catch (e) { list = ['Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Europe/Madrid', 'Europe/Rome', 'Europe/Lisbon', 'Africa/Casablanca', 'America/New_York', 'America/Sao_Paulo', 'Asia/Shanghai', 'Asia/Dubai', 'Australia/Sydney']; }
    return list;
  }
  /* The saved zone always appears in the list, even one this browser does not name ("UTC") */
  function zoneList(cur) { var z = zones(); return z.indexOf(cur) > -1 ? z : [cur].concat(z); }
  function browserZone() { try { return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'; } catch (e) { return 'UTC'; } }

  function load() {
    if (!signedIn()) {
      var d = A.data().profile;
      return Promise.resolve({ sample: true, email: 'sara@example.com', profile: { full_name: d.name, language: d.language, level: d.level, goal_track: d.goal || 'relocation', goal_timeframe: '6_months', timezone: browserZone(), preferred_days: [1, 3], preferred_time_start: '18:00', preferred_time_end: '21:00', tier: d.tier || 'free', stripe_subscription_status: null } });
    }
    return window.AlimunData.settings();
  }

  /* ---------- The page ---------- */
  function view() {
    var p = S.profile || {}, zoneNow = p.timezone || browserZone();
    var html = '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_settings')) + '</h1><p class="t-lead">' + esc(t('app_st_lead')) + '</p></div></div><div class="grid rise st">';
    html += planHtml(p);
    html += '<section class="card span-12 st-card" style="--i:1" aria-labelledby="h-me"><h2 class="t-h2" id="h-me">' + esc(t('app_st_me_h')) + '</h2><form class="st-form" data-form="me">' +
      field('app_st_name', '<input class="st-in" name="full_name" autocomplete="name" maxlength="100" required value="' + esc(p.full_name || '') + '">') +
      field('app_st_email', '<input class="st-in" type="email" value="' + esc(S.email || '') + '" disabled>', 'app_st_email_p') +
      '<div class="st-row">' +
        field('app_st_course', select('language', COURSES.map(function (l) { return [l, A.languageName(l)]; }), p.language)) +
        field('app_st_level', select('level', LEVELS.map(function (l) { return [l, l]; }), p.level)) + '</div>' +
      '<p class="t-small st-note">' + esc(t('app_st_course_p')) + '</p>' +
      '<div class="st-row">' +
        field('app_st_goal', select('goal_track', Object.keys(GOALS).map(function (g) { return [g, t(GOALS[g])]; }), p.goal_track)) +
        field('app_st_timeframe', select('goal_timeframe', [['', '…']].concat(Object.keys(TIMEFRAMES).map(function (g) { return [g, t(TIMEFRAMES[g])]; })), p.goal_timeframe || '')) + '</div>' +
      field('app_st_zone', select('timezone', zoneList(zoneNow).map(function (z) { return [z, z.replace(/_/g, ' ')]; }), zoneNow), 'app_st_zone_p') +
      '<fieldset class="st-field"><legend class="st-lbl">' + esc(t('app_st_days')) + '</legend><div class="st-days">' + [1, 2, 3, 4, 5, 6, 0].map(function (d) {
        var on = (p.preferred_days || []).indexOf(d) > -1, name = new Intl.DateTimeFormat(A.locale, { weekday: 'long', timeZone: 'UTC' }).format(new Date(Date.UTC(2024, 0, d === 0 ? 7 : d)));
        return '<label class="st-day"><input type="checkbox" name="day" value="' + d + '"' + (on ? ' checked' : '') + '><span>' + esc(name) + '</span></label>';
      }).join('') + '</div></fieldset>' +
      '<div class="st-row">' + field('app_st_from', '<input class="st-in" type="time" name="preferred_time_start" value="' + esc(String(p.preferred_time_start || '').slice(0, 5)) + '">') +
        field('app_st_to', '<input class="st-in" type="time" name="preferred_time_end" value="' + esc(String(p.preferred_time_end || '').slice(0, 5)) + '">') + '</div>' +
      '<div class="btn-row"><button class="btn btn--primary" type="submit">' + esc(t('app_st_save')) + '</button></div><p class="t-body st-msg" data-msg="me" aria-live="polite"></p></form></section>';
    html += '<section class="card span-6 st-card" style="--i:2" aria-labelledby="h-ui"><h2 class="t-h2" id="h-ui">' + esc(t('app_st_ui_h')) + '</h2><p class="t-body">' + esc(t('app_st_ui_p')) + '</p>' +
      '<div class="st-field" style="margin-top:14px">' + select('ui', Object.keys(UI).map(function (l) { return [l, UI[l]]; }), A.lang, 'data-ui') + '</div></section>';
    html += '<section class="card span-6 st-card" style="--i:3" aria-labelledby="h-acc"><h2 class="t-h2" id="h-acc">' + esc(t('app_st_acc_h')) + '</h2>' +
      '<form class="st-form" data-form="pw"><label class="st-field"><span class="st-lbl">' + esc(t('app_st_pw')) + '</span><input class="st-in" type="password" name="pw" autocomplete="new-password" minlength="8" required></label>' +
      '<div class="btn-row"><button class="btn btn--ghost btn--sm" type="submit">' + esc(t('app_st_pw_save')) + '</button></div><p class="t-body st-msg" data-msg="pw" aria-live="polite"></p></form>' +
      '<div class="st-acc-foot"><button class="btn btn--quiet btn--sm" type="button" data-st="signout">' + esc(t('app_st_signout')) + '</button>' +
      '<a class="linkish" href="/contact">' + esc(t('app_st_delete')) + '</a></div></section>';
    if (S.sample) html += '<p class="t-tiny span-12">' + esc(t('app_st_sample')) + '</p>';
    return html + '</div>';
  }
  function field(label, control, hint) {
    return '<label class="st-field"><span class="st-lbl">' + esc(t(label)) + '</span>' + control + (hint ? '<span class="t-small st-hint">' + esc(t(hint)) + '</span>' : '') + '</label>';
  }
  function select(name, opts, cur, extra) {
    return '<select class="st-in" name="' + name + '"' + (extra ? ' ' + extra : '') + '>' + opts.map(function (o) { return '<option value="' + esc(o[0]) + '"' + (String(o[0]) === String(cur || '') ? ' selected' : '') + '>' + esc(o[1]) + '</option>'; }).join('') + '</select>';
  }
  function planHtml(p) {
    var tier = p.tier || 'free', name = PLANS[tier], paid = tier !== 'free' && tier !== 'waitlist';
    var status = p.stripe_subscription_status, st = STATUS[status];
    var body;
    if (tier === 'waitlist') body = '<h2 class="t-h1">' + esc(t('app_st_plan_wait_h')) + '</h2><p class="t-lead" style="margin-top:12px">' + esc(t('app_st_plan_wait_p')) + '</p>';
    else if (!paid) body = '<h2 class="t-h1">' + esc(t('app_st_plan_free_h')) + '</h2><p class="t-lead" style="margin-top:12px">' + esc(t('app_st_plan_free_p')) + '</p>';
    else body = '<h2 class="t-h1">' + esc(t('app_st_plan_h', { plan: name || tier })) + '</h2><p class="t-lead" style="margin-top:12px">' + esc(st ? t(st) : t('app_st_s_unknown')) + '</p>';
    var btn = paid && status ? '<button class="btn btn--lime" type="button" data-st="portal">' + esc(t('app_st_manage')) + A.icon('arrow') + '</button><p class="t-small st-plan__p">' + esc(t('app_st_manage_p')) + '</p>'
      : paid ? '' : '<a class="btn btn--lime" href="#/settings/plans">' + esc(t(tier === 'waitlist' ? 'app_st_see_plans' : 'app_st_choose_plan')) + A.icon('arrow') + '</a>';
    return '<section class="card card--forest span-8 cover-card st-plan" style="--i:0" aria-live="polite">' + body + '<div class="btn-row" style="margin-top:22px;flex-direction:column;align-items:flex-start">' + btn + '</div><p class="t-body st-msg st-msg--light" data-msg="plan"></p></section>' +
      '<section class="stage span-4" style="--i:0;background:var(--t-sun)" aria-hidden="true"><div class="bub say">' + esc(t(paid ? 'app_st_bub_paid' : 'app_st_bub_free')) + '</div>' + A.Cast.drawing('cat') + '</section>';
  }

  /* ---------- Actions ---------- */
  function say(which, key, bad) { var m = root.querySelector('[data-msg="' + which + '"]'); if (m) { m.textContent = t(key); m.classList.toggle('is-bad', !!bad); } }
  function saveMe(form) {
    var f = new FormData(form), days = f.getAll('day').map(Number);
    var patch = {
      full_name: String(f.get('full_name') || '').trim().slice(0, 100), language: f.get('language'), level: f.get('level'), goal_track: f.get('goal_track'),
      goal_timeframe: f.get('goal_timeframe') || null, timezone: f.get('timezone'), preferred_days: days,
      preferred_time_start: f.get('preferred_time_start') || null, preferred_time_end: f.get('preferred_time_end') || null
    };
    if (!patch.full_name || /[<>]/.test(patch.full_name)) { say('me', 'app_st_name_needed', true); return; }
    if (S.sample) { say('me', 'app_st_sample_saved'); return; }
    var btn = form.querySelector('[type="submit"]'); btn.disabled = true;
    var courseChanged = patch.language !== S.profile.language || patch.level !== S.profile.level;
    window.AlimunData.saveProfile(patch).then(function () {
      Object.assign(S.profile, patch);
      var d = A.data().profile;
      d.name = patch.full_name; d.language = patch.language; d.level = patch.level; d.goal = patch.goal_track; d.timezone = patch.timezone;
      btn.disabled = false;
      say('me', 'app_st_saved');
      /* A new course changes the book, practice and library: start the dashboard again */
      if (courseChanged) setTimeout(function () { location.reload(); }, 900);
    }, function (e) { btn.disabled = false; say('me', 'app_st_error', true); console.warn('[Alimun] Settings not saved', e && e.message); });
  }
  function savePw(form) {
    var pw = String(new FormData(form).get('pw') || '');
    if (pw.length < 8) { say('pw', 'app_st_pw_short', true); return; }
    if (S.sample) { say('pw', 'app_st_sample_saved'); return; }
    window.AlimunData.changePassword(pw).then(function () { form.reset(); say('pw', 'app_st_pw_done'); }, function (e) { say('pw', 'app_st_pw_error', true); console.warn('[Alimun] Password not changed', e && e.message); });
  }
  function portal(btn) {
    btn.disabled = true;
    window.AlimunData.token().then(function (tok) {
      return fetch('/api/stripe?action=billing-portal', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + tok }, body: JSON.stringify({ returnUrl: location.origin + location.pathname + '#/settings' }) });
    }).then(function (r) { return r.json().then(function (j) { if (!r.ok || !j.url) throw new Error(j.error || r.status); return j.url; }); })
      .then(function (url) {
        var u = new URL(url);
        if (u.protocol !== 'https:' || !/(^|\.)stripe\.com$/.test(u.hostname)) throw new Error('unexpected address');
        location.assign(u.href);
      }, function (e) { btn.disabled = false; say('plan', 'app_st_portal_error', true); console.warn('[Alimun] Billing portal', e && e.message); });
  }
  function bind() {
    if (root.__settings) return;
    root.__settings = true;
    root.addEventListener('submit', function (e) {
      var f = e.target.closest('[data-form]'); if (!f || !S) return;
      e.preventDefault();
      if (f.getAttribute('data-form') === 'me') saveMe(f); else savePw(f);
    });
    root.addEventListener('change', function (e) {
      if (!e.target.hasAttribute('data-ui')) return;
      try { localStorage.setItem('alimun-lang', e.target.value); } catch (x) { /* storage blocked */ }
      var u = new URL(location.href); u.searchParams.delete('lang'); location.replace(u.href); location.reload();
    });
    root.addEventListener('click', function (e) {
      var b = e.target.closest('[data-st]'); if (!b || b.disabled) return;
      if (b.getAttribute('data-st') === 'portal') portal(b);
      else if (b.getAttribute('data-st') === 'signout') { if (S.sample) { say('pw', 'app_st_sample_saved'); return; } window.AlimunData.signOut().then(function () { location.href = '/'; }); }
    });
  }

  var mountNo = 0;
  function mount(view_, parts, helpers) {
    var my = ++mountNo;
    /* Choosing a plan lives in js/app/plans.js */
    if (parts && parts[0] === 'plans' && window.AlimunPlans) {
      view_.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + helpers.esc(helpers.t('app_book_loading')) + '">' + helpers.loaderInner() + '</div></div>';
      return window.AlimunPlans.mount(view_, parts, helpers).then(function (res) { if (my === mountNo) view_.innerHTML = res.html; return res; });
    }
    A = helpers; root = view_;
    bind();
    document.body.classList.remove('is-reading');
    root.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + esc(t('app_book_loading')) + '">' + A.loaderInner() + '</div></div>';
    return load().then(function (d) {
      if (my !== mountNo) return { stale: true };
      S = d || { sample: true, profile: {} };
      if (/[?&]billing=/.test(location.search)) S.flash = true;
      return { html: view() };
    }).catch(function (e) {
      console.warn('[Alimun] Settings did not load', e && e.message);
      return { html: '<div class="card"><p class="t-body">' + esc(t('app_book_error')) + '</p></div>' };
    }).then(function (res) {
      if (res.stale || my !== mountNo) return res;
      root.innerHTML = res.html;
      return res;
    });
  }

  window.AlimunSettings = { mount: mount };
})();
