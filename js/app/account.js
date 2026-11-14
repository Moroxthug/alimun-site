/* Alimun app: signing in, creating an account and the first set-up, inside the store app (docs/APP_PLAN.md, "The
   complete app", step 1b; owner, 14 Nov 2026: "i want an app 100% on the phone"). In a browser these are the website's
   pages (signin.html, signup.html, welcome.html, forgot-password.html); the app never opens a website page, so it has
   its own screens with the same rules and the same texts (au_* keys, packaged with the app by mobile/build-www.js).
   Part of the 'native' file, loaded only in the app. Started by js/app/shell.js:
     AlimunAccount.open(A, 'signin')            nobody is signed in
     AlimunAccount.open(A, 'setup')             a learner without a profile yet: course (if not chosen), goal, timeframe
     AlimunAccount.open(A, 'role')              a teacher or admin account: this app is for learners
   A = { t, esc, icon, Cast, lang, loaderInner }. When done, the app starts again on the learner's Home.
   AlimunAccount.back() is for the phone's back button: true when it went one screen back. */
(function () {
  'use strict';
  var A = null, root = null, trail = [], S = {};
  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  var COURSES = ['English', 'German', 'French', 'Spanish', 'Italian', 'Portuguese'];
  var LIVE = ['English', 'German'];
  var CODES = { English: 'en', German: 'de', French: 'fr', Spanish: 'es', Italian: 'it', Portuguese: 'pt' };
  var GOALS = ['relocation', 'professional', 'academic', 'pleasure', 'foundations'];
  var TIMES = [['3_months', 'au_time_3'], ['6_months', 'au_time_6'], ['1_year', 'au_time_12'], ['no_deadline', 'au_time_none']];
  var SITE = 'https://alimun.com/';

  function sb() { return window.AlimunData.auth(); }
  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function strongPw(pw) { return pw.length >= 8 && /[a-z]/.test(pw) && /[A-Z]/.test(pw) && /[0-9]/.test(pw); }
  function languageName(l) {
    try { var n = new Intl.DisplayNames([A.lang === 'ma' ? 'fr' : A.lang], { type: 'language' }).of(CODES[l]); if (n) return n.charAt(0).toLocaleUpperCase() + n.slice(1); } catch (e) { /* old phone */ }
    return l;
  }
  /* The captcha (js/captcha.js, Cloudflare Turnstile): loaded the first time it is needed; no token when it cannot load */
  var captchaLoad = null;
  function captcha() {
    if (!captchaLoad) captchaLoad = new Promise(function (resolve) {
      if (window.AlimunCaptcha) return resolve();
      var s = document.createElement('script'); s.src = '/js/captcha.js'; s.onload = resolve; s.onerror = resolve; document.head.appendChild(s);
    });
    return captchaLoad.then(function () { return window.AlimunCaptcha ? window.AlimunCaptcha.token() : ''; }).then(function (tk) { return tk || undefined; }, function () { return undefined; });
  }
  /* Our own translated sentences with links (the terms note): only the links are kept as links, to the website, which
     the app opens in the phone's browser */
  function withLinks(html) {
    return String(html).split(/(<a href="[^"]*">|<\/a>)/).map(function (part) {
      var m = part.match(/^<a href="([^"]*)">$/);
      if (m) { var href = /^(mailto:|https:\/\/)/.test(m[1]) ? m[1] : SITE + m[1].replace(/^\//, ''); return /^(mailto:[^"<>\s]+|https:\/\/alimun\.com\/[A-Za-z0-9._\/-]*)$/.test(href) ? '<a href="' + esc(href) + '">' : '<a>'; }
      if (part === '</a>') return '</a>';
      return esc(part.replace(/&amp;/g, '&'));
    }).join('');
  }

  /* ---------- Parts ---------- */
  function field(label, input) { return '<label class="st-field"><span class="st-lbl">' + esc(label) + '</span>' + input + '</label>'; }
  function pwField(label, name, auto) {
    return '<div class="st-field"><label class="st-lbl" for="ac-' + name + '">' + esc(label) + '</label><div class="ac-pw"><input class="st-in" id="ac-' + name + '" name="' + name + '" type="password" autocomplete="' + auto + '" required>' +
      '<button type="button" class="linkish" data-ac="eye" data-for="ac-' + name + '">' + esc(t('au_show')) + '</button></div></div>';
  }
  function options(list, picked, first) {
    return '<option value="">' + esc(first) + '</option>' + list.map(function (o) { return '<option value="' + esc(o[0]) + '"' + (o[0] === picked ? ' selected' : '') + '>' + esc(o[1]) + '</option>'; }).join('');
  }
  function courseFields() {
    return field(t('au_learn_lang'), '<select class="st-in" name="language" required>' + options(COURSES.map(function (l) { return [l, languageName(l)]; }), S.language || '', t('au_lang_pick')) + '</select>') +
      field(t('au_level'), '<select class="st-in" name="level" required>' + options(LEVELS.map(function (l) { return [l, l + ' ' + t('lt_name_' + l)]; }), S.level || '', t('au_level_pick')) + '</select>');
  }
  function page(art, tint, bub, inner, back) {
    return '<div class="ac__in rise">' +
      (back ? '<button type="button" class="rd-back ac__back" data-ac="back" style="--i:0">' + A.icon('back') + '<span>' + esc(t('au_back')) + '</span></button>' : '') +
      '<div class="stage ac__stage" style="--i:0;background:var(--t-' + tint + ')">' + (bub ? '<div class="bub say">' + esc(bub) + '</div>' : '') + A.Cast.drawing(art) + '</div>' +
      '<div class="card ac__card" style="--i:1">' + inner + '</div></div>';
  }
  function head(h, p) { return '<h1 class="t-h1">' + esc(h) + '</h1>' + (p ? '<p class="t-body ac__lead">' + p + '</p>' : ''); }
  function msg(name) { return '<p class="t-body st-msg" data-msg="' + name + '" role="alert"></p>'; }
  function say(text, ok) { var el = root.querySelector('[data-msg]'); if (el) { el.textContent = text || ''; el.classList.toggle('is-bad', !!text && !ok); } }
  function busy(on) {
    var b = root.querySelector('button[type="submit"], [data-ac="finish"], [data-ac="resend"]');
    root.querySelectorAll('button, input, select').forEach(function (el) { if (on) { el.setAttribute('data-was', el.disabled ? '1' : '0'); el.disabled = true; } else if (el.hasAttribute('data-was')) { el.disabled = el.getAttribute('data-was') === '1'; el.removeAttribute('data-was'); } });
    if (b) { if (on) { b.setAttribute('data-label', b.innerHTML); b.textContent = t('au_waiting'); } else if (b.hasAttribute('data-label')) { b.innerHTML = b.getAttribute('data-label'); b.removeAttribute('data-label'); } }
  }

  /* ---------- Screens ---------- */
  var VIEWS = {
    signin: function () {
      return page('owl', 'mint', t('au_signin_title'),
        head(t('au_signin_title'), esc(t('au_signin_lead'))) +
        '<form class="ac__form" data-form="signin" novalidate>' +
          field(t('au_email'), '<input class="st-in" name="email" type="email" inputmode="email" autocomplete="email" autocapitalize="none" required value="' + esc(S.email || '') + '">') +
          pwField(t('au_password'), 'password', 'current-password') +
          '<button type="button" class="linkish ac__link" data-ac="go" data-to="forgot">' + esc(t('au_forgot')) + '</button>' +
          msg('signin') +
          '<button type="submit" class="btn btn--primary ac__go">' + esc(t('au_signin')) + A.icon('arrow') + '</button>' +
        '</form>' +
        '<p class="t-body ac__alt">' + esc(t('au_no_account')) + ' <button type="button" class="linkish" data-ac="go" data-to="create">' + esc(t('au_direct_title')) + '</button></p>');
    },
    forgot: function () {
      return page('cat', 'sun', '',
        head(t('au_forgot_title'), esc(t('au_forgot_lead'))) +
        '<form class="ac__form" data-form="forgot" novalidate>' +
          field(t('au_email'), '<input class="st-in" name="email" type="email" inputmode="email" autocomplete="email" autocapitalize="none" required value="' + esc(S.email || '') + '">') +
          msg('forgot') +
          '<button type="submit" class="btn btn--primary ac__go">' + esc(t('au_send_link')) + '</button>' +
        '</form>', true);
    },
    sent: function () {
      return page('dog', 'lime', '',
        head(t('au_check_title'), esc(t('au_reset_sent')) + ' <b>' + esc(S.email || '') + '</b>' + esc(t('au_reset_sent2'))) +
        '<div class="btn-row"><button type="button" class="btn btn--primary" data-ac="home">' + esc(t('au_back_signin')) + '</button></div>');
    },
    create: function () {
      var C = window.AlimunCountry;
      return page('teacup', 'lime', '',
        head(t('au_direct_title'), '') +
        '<form class="ac__form" data-form="create" novalidate>' +
          courseFields() +
          field(t('au_name'), '<input class="st-in" name="name" type="text" autocomplete="name" required maxlength="100" value="' + esc(S.name || '') + '">') +
          field(t('au_email'), '<input class="st-in" name="email" type="email" inputmode="email" autocomplete="email" autocapitalize="none" required value="' + esc(S.email || '') + '">') +
          pwField(t('au_password'), 'password', 'new-password') +
          '<p class="t-small ac__hint">' + esc(t('au_pw_hint')) + '</p>' +
          field(t('au_country'), '<select class="st-in" name="country" autocomplete="country" required><option value="">' + esc(t('au_country_pick')) + '</option>' + (C ? C.options(A.lang, S.country || C.guess()) : '') + '</select>') +
          '<div class="st-ticks ac__ticks">' +
            '<label class="st-day"><input type="checkbox" name="adult"><span>' + esc(t('au_age16')) + '</span></label>' +
            '<label class="st-day"><input type="checkbox" name="news" disabled><span>' + esc(t('au_marketing')) + '</span></label>' +
          '</div>' +
          msg('create') +
          '<button type="submit" class="btn btn--primary ac__go">' + esc(t('au_create_free')) + '</button>' +
          '<p class="t-small ac__hint">' + withLinks(t('au_terms_note')) + '</p>' +
        '</form>', true);
    },
    check: function () {
      return page('parrot', 'sun', '',
        head(t('au_check_title'), esc(t('au_check_lead')) + ' <b>' + esc(S.email || '') + '</b>' + esc(t('au_full_stop')) + ' ' + esc(t('au_check_lead2'))) +
        msg('check') +
        '<div class="btn-row"><button type="button" class="btn btn--primary" data-ac="home">' + esc(t('au_back_signin')) + '</button>' +
        '<button type="button" class="btn btn--ghost" data-ac="resend">' + esc(t('au_resend')) + '</button></div>');
    },
    course: function () {
      return page('teacup', 'lime', '',
        head(t('au_learn_lang'), '') +
        '<form class="ac__form" data-form="course" novalidate>' + courseFields() + msg('course') +
          '<button type="submit" class="btn btn--primary ac__go">' + esc(t('au_continue')) + A.icon('arrow') + '</button></form>' +
        '<p class="t-body ac__alt"><button type="button" class="linkish" data-ac="signout">' + esc(t('au_signout')) + '</button></p>');
    },
    goal: function () {
      var first = String(S.name || '').trim().split(/\s+/)[0];
      return page('suitcase', 'mint', '',
        head(first ? t('au_hello', { name: first }) : t('au_goal_title'), esc(t('au_goal_lead'))) +
        '<div class="ac__choices" role="group">' + GOALS.map(function (g) {
          return '<button type="button" class="ac__choice" data-ac="goal" data-v="' + g + '" aria-pressed="' + (S.goal === g) + '"><b>' + esc(t('au_goal_' + g)) + '</b><span>' + esc(t('au_goal_' + g + '_d')) + '</span></button>';
        }).join('') + '</div>' +
        '<p class="t-body ac__alt"><button type="button" class="linkish" data-ac="signout">' + esc(t('au_signout')) + '</button></p>', trail.length > 1);
    },
    time: function () {
      return page('snail', 'coral', '',
        head(t('au_time_title'), esc(t('au_time_lead'))) +
        '<div class="ac__choices" role="group">' + TIMES.map(function (x) {
          return '<button type="button" class="ac__choice" data-ac="time" data-v="' + x[0] + '" aria-pressed="' + (S.time === x[0]) + '"><b>' + esc(t(x[1])) + '</b></button>';
        }).join('') + '</div>' + msg('time') +
        '<button type="button" class="btn btn--primary ac__go" data-ac="finish"' + (S.time ? '' : ' disabled') + '>' + esc(t('au_continue')) + A.icon('arrow') + '</button>', true);
    },
    role: function () {
      return page('owl', 'mint', '',
        head(t('app_ac_learners_h'), esc(t('app_ac_learners_p'))) +
        '<div class="btn-row"><button type="button" class="btn btn--primary" data-ac="signout">' + esc(t('au_signout')) + '</button></div>');
    },
    error: function () {
      return page('cat', 'coral', '',
        head(t('au_err_title'), esc(t('au_err_generic'))) +
        '<div class="btn-row"><button type="button" class="btn btn--primary" data-ac="retry">' + esc(t('au_try_again')) + '</button>' +
        '<button type="button" class="btn btn--ghost" data-ac="signout">' + esc(t('au_signout')) + '</button></div>');
    }
  };

  function draw(kind) {
    var name = trail[trail.length - 1];
    var swap = function () { root.querySelector('.ac__body').innerHTML = VIEWS[name](); window.scrollTo(0, 0); };
    var F = window.AlimunFeel;
    if (kind && F && F.canTransition()) F.transition(swap, kind); else swap();
  }
  function go(name) { trail.push(name); draw('forward'); }
  function restart(name) { trail = [name]; draw('tab'); }
  function back() {
    if (!root || trail.length < 2) return false;
    trail.pop(); draw('back');
    return true;
  }
  /* Signed in and set up: the app starts again on Home */
  function done() { location.replace('/app'); setTimeout(function () { location.reload(); }, 50); }

  /* ---------- Signing in ---------- */
  function afterSignIn(user) {
    var role = (user.app_metadata && user.app_metadata.role) || '';
    if (role === 'teacher' || role === 'admin') { restart('role'); return Promise.resolve(); }
    return sb().from('student_profiles').select('id').eq('user_id', user.id).maybeSingle().then(function (res) {
      if (res.error) throw res.error;
      if (res.data) return done();
      startSetup(user);
    });
  }
  function signIn(f) {
    var email = String(f.get('email') || '').trim(), password = String(f.get('password') || '');
    S.email = email;
    if (!email || !password) return say(t('au_err_fill'));
    busy(true);
    captcha().then(function (tk) { return sb().auth.signInWithPassword({ email: email, password: password, options: { captchaToken: tk } }); }).then(function (res) {
      if (res.error) {
        busy(false);
        var m = res.error.message || '';
        return say(/not confirmed/i.test(m) ? t('au_err_unconfirmed') : /rate|too many/i.test(m) ? t('au_err_rate') : t('au_err_login'));
      }
      return afterSignIn(res.data.user);
    }).catch(function (e) { busy(false); say(t('au_err_generic')); console.warn('[Alimun] sign in', e && e.message); });
  }
  function forgot(f) {
    var email = String(f.get('email') || '').trim();
    S.email = email;
    if (!EMAIL.test(email)) return say(t('au_err_email'));
    busy(true);
    captcha().then(function (tk) {
      return fetch('/api/auth?action=reset', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Captcha-Token': tk || '' }, body: JSON.stringify({ email: email, lang: A.lang === 'en' ? '' : A.lang, ui: A.lang }) });
    }).then(function (r) {
      busy(false);
      if (r.status === 429) return say(t('au_err_rate'));
      if (r.status === 400) return say(t('au_err_email'));
      if (!r.ok) return say(t('au_err_generic'));
      go('sent');
    }, function () { busy(false); say(t('au_err_generic')); });
  }

  /* ---------- Creating an account ---------- */
  function signUpError(err) {
    var m = (err && err.message) || '';
    if ((err && err.code === 'weak_password') || /should contain|weak/i.test(m)) return t('au_err_pw');
    if (/already/i.test(m)) return t('au_err_exists');
    if (/rate|too many|seconds/i.test(m)) return t('au_err_rate');
    return t('au_err_generic');
  }
  function create(f) {
    S.language = String(f.get('language') || ''); S.level = String(f.get('level') || '');
    S.name = String(f.get('name') || '').trim().slice(0, 100); S.email = String(f.get('email') || '').trim(); S.country = String(f.get('country') || '');
    var pw = String(f.get('password') || ''), adult = !!f.get('adult'), news = adult && !!f.get('news');
    if (COURSES.indexOf(S.language) < 0 || LEVELS.indexOf(S.level) < 0) return say(t('au_err_level'));
    if (!S.name) return say(t('au_err_name'));
    if (!EMAIL.test(S.email)) return say(t('au_err_email'));
    if (!strongPw(pw)) return say(t('au_err_pw'));
    if (!S.country) return say(t('au_err_country'));
    var timezone = null;
    try { timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || null; } catch (e) { /* old phone */ }
    var data = { full_name: S.name, timezone: timezone, role: 'student', country: S.country, ui_lang: A.lang,
      onboarding: { placement: { language: S.language, level: S.level, self_reported: true, at: new Date().toISOString() }, intent: null },
      marketing: { opt_in: news, age_16_plus: adult, wording: 'v1' } };
    busy(true);
    captcha().then(function (tk) {
      return sb().auth.signUp({ email: S.email, password: pw, options: { emailRedirectTo: SITE + 'signup.html', data: data, captchaToken: tk } });
    }).then(function (res) {
      busy(false);
      if (res.error) return say(signUpError(res.error));
      var u = res.data && res.data.user;
      if (u && Array.isArray(u.identities) && u.identities.length === 0) return say(t('au_err_exists'));
      if (res.data && res.data.session && u) return startSetup(u);
      restart('check');
    }).catch(function (e) { busy(false); say(t('au_err_generic')); console.warn('[Alimun] sign up', e && e.message); });
  }
  var wait = 0, waitTimer = null;
  function resend() {
    if (wait > 0 || !S.email) return;
    busy(true);
    captcha().then(function (tk) { return sb().auth.resend({ type: 'signup', email: S.email, options: { emailRedirectTo: SITE + 'signup.html', captchaToken: tk } }); }).then(function (res) {
      busy(false);
      if (res.error) return say(signUpError(res.error));
      say(t('au_resent'), true);
      wait = 60;
      clearInterval(waitTimer);
      waitTimer = setInterval(function () {
        wait--;
        var b = root.querySelector('[data-ac="resend"]');
        if (b) b.disabled = wait > 0;
        if (trail[trail.length - 1] !== 'check') return;
        if (wait <= 0) { clearInterval(waitTimer); say(''); } else say(t('au_resend_wait', { s: wait }), true);
      }, 1000);
    }, function () { busy(false); say(t('au_err_generic')); });
  }

  /* ---------- The first set-up: course (when not chosen yet), goal, timeframe ---------- */
  function startSetup(user) {
    S.user = user;
    var meta = user.user_metadata || {};
    S.meta = meta;
    S.name = meta.full_name || S.name || '';
    var p = meta.onboarding && meta.onboarding.placement;
    S.placement = p && typeof p.language === 'string' && COURSES.indexOf(p.language) > -1 ? p : null;
    restart(S.placement ? 'goal' : 'course');
  }
  function course(f) {
    S.language = String(f.get('language') || ''); S.level = String(f.get('level') || '');
    if (COURSES.indexOf(S.language) < 0 || LEVELS.indexOf(S.level) < 0) return say(t('au_err_level'));
    S.placement = { language: S.language, level: S.level, self_reported: true, at: new Date().toISOString() };
    go('goal');
  }
  function finish() {
    var p = S.placement, user = S.user;
    if (!p || !user || GOALS.indexOf(S.goal) < 0 || !S.time) return;
    var row = {
      user_id: user.id,
      full_name: String(S.name || String(user.email || '').split('@')[0]).slice(0, 100),
      language: p.language,
      level: LEVELS.indexOf(p.level) > -1 ? p.level : 'A1',
      goal_track: S.goal,
      goal_timeframe: S.time,
      /* A level chosen without the test sets the level only (as on the website's welcome page) */
      placement: p.level && !p.self_reported ? p : null,
      tier: LIVE.indexOf(p.language) > -1 ? 'free' : 'waitlist'
    };
    if (S.meta && S.meta.timezone) row.timezone = S.meta.timezone;
    busy(true);
    var insert = function () { return sb().from('student_profiles').insert(row); };
    insert().then(function (res) {
      /* An unknown time zone is refused by the database: keep the default instead */
      if (res.error && res.error.code === '22023') { delete row.timezone; return insert(); }
      return res;
    }).then(function (res) {
      if (res.error && res.error.code !== '23505') { busy(false); say(t('au_err_generic')); return; }
      done();
    }, function () { busy(false); say(t('au_err_generic')); });
  }
  function signOut() {
    var c = sb();
    (c ? c.auth.signOut() : Promise.resolve()).then(function () { S = {}; restart('signin'); }, function () { S = {}; restart('signin'); });
  }
  /* Opened on a signed-in learner without a profile */
  function setup() {
    var c = sb();
    c.auth.getUser().then(function (res) {
      var u = res.data && res.data.user;
      if (!u) return restart('signin');
      startSetup(u);
    }, function () { restart('error'); });
  }

  /* ---------- Events ---------- */
  function onSubmit(e) {
    var form = e.target.closest('form[data-form]'); if (!form) return;
    e.preventDefault(); say('');
    var f = new FormData(form), kind = form.getAttribute('data-form');
    if (kind === 'signin') signIn(f); else if (kind === 'forgot') forgot(f); else if (kind === 'create') create(f); else if (kind === 'course') course(f);
  }
  function onClick(e) {
    var b = e.target.closest('[data-ac]'); if (!b || b.disabled) return;
    var act = b.getAttribute('data-ac');
    if (act === 'go') { var em = root.querySelector('input[name="email"]'); if (em) S.email = em.value.trim(); go(b.getAttribute('data-to')); }
    else if (act === 'back') back();
    else if (act === 'home') restart('signin');
    else if (act === 'eye') {
      var input = root.querySelector('#' + b.getAttribute('data-for'));
      if (input) { var hide = input.type === 'password'; input.type = hide ? 'text' : 'password'; b.textContent = t(hide ? 'au_hide' : 'au_show'); }
    }
    else if (act === 'resend') resend();
    else if (act === 'goal') { S.goal = b.getAttribute('data-v'); go('time'); }
    else if (act === 'time') {
      S.time = b.getAttribute('data-v');
      root.querySelectorAll('[data-ac="time"]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      var fin = root.querySelector('[data-ac="finish"]'); if (fin) fin.disabled = false;
    }
    else if (act === 'finish') finish();
    else if (act === 'signout') signOut();
    else if (act === 'retry') location.reload();
  }
  function onChange(e) {
    if (e.target.name !== 'adult') return;
    var news = root.querySelector('input[name="news"]');
    if (news) { news.disabled = !e.target.checked; if (!e.target.checked) news.checked = false; }
  }

  function open(helpers, what) {
    A = helpers; S = {};
    root = document.getElementById('app');
    document.body.classList.add('is-account');
    root.innerHTML = '<div class="ac"><header class="ac__top">' + A.Cast.book('idle') + A.Cast.wordmark() + '</header><main class="ac__body" id="view" tabindex="-1"></main></div>';
    root.addEventListener('submit', onSubmit);
    root.addEventListener('click', onClick);
    root.addEventListener('change', onChange);
    document.title = 'Alimun';
    if (what === 'setup') { trail = ['goal']; root.querySelector('.ac__body').innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" aria-hidden="true">' + A.loaderInner() + '</div></div>'; setup(); }
    else { trail = [what === 'role' ? 'role' : 'signin']; draw(); }
  }

  window.AlimunAccount = { open: open, back: back };
})();
