/* Alimun app shell (docs/DASHBOARD_PLAN.md, steps 2 to 4): navigation, routing, the loader, Home and the preview screens.
   The course book (#/book/...) is drawn by js/app/reader.js with the helpers below.
   Sidebar on desktop, bottom bar plus a "More" sheet on phones. Home reads the signed-in student's data (js/app/data.js);
   signed out, or with ?sample=1, it shows sample data. Screens marked for later steps show their character and say
   which step builds them. All text comes from js/translations.js (app_* keys) except the design kit. */
(function () {
  'use strict';
  var Cast = window.AlimunCast;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }

  /* ---------- Language ---------- */
  var LANGS = ['en', 'es', 'fr', 'de', 'pt', 'it', 'zh', 'ar', 'ma'];
  var LOCALES = { en: 'en-GB', es: 'es-ES', fr: 'fr-FR', de: 'de-DE', pt: 'pt-PT', it: 'it-IT', zh: 'zh-CN', ar: 'ar', ma: 'fr-MA' };
  var lang = (function () {
    var q = (location.search.match(/[?&]lang=([a-z]{2})/) || [])[1];
    if (q && LANGS.indexOf(q) > -1) return q;
    try { var s = localStorage.getItem('alimun-lang'); if (s && LANGS.indexOf(s) > -1) return s; } catch (e) { /* storage blocked */ }
    var b = (navigator.language || 'en').slice(0, 2);
    return LANGS.indexOf(b) > -1 ? b : 'en';
  })();
  var locale = LOCALES[lang];

  function loadScript(src) {
    return new Promise(function (resolve) {
      var s = document.createElement('script');
      s.src = src; s.onload = resolve; s.onerror = resolve;
      document.head.appendChild(s);
    });
  }
  function loadText() {
    var files = ['/js/i18n/en.app.js'];
    if (lang !== 'en') files.push('/js/i18n/' + lang + '.app.js');
    return Promise.all(files.map(loadScript));
  }

  function t(key, vars) {
    var T = window.ALIMUN_TRANSLATIONS || {};
    var s = (T[lang] && T[lang][key]) || (T.en && T.en[key]) || key;
    if (vars) s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
    return s;
  }
  /* Plurals: the form for the language's plural category (zero, one, two, few, many), falling back to other.
     Every form is written out so the translation split files them with the dashboard text. */
  var PLURALS = {
    app_home_days: ['app_home_days_zero', 'app_home_days_one', 'app_home_days_two', 'app_home_days_few', 'app_home_days_many', 'app_home_days_other'],
    app_home_cards: ['app_home_cards_zero', 'app_home_cards_one', 'app_home_cards_two', 'app_home_cards_few', 'app_home_cards_many', 'app_home_cards_other'],
    app_joke_streak: ['app_joke_streak_one', 'app_joke_streak_other'],
    app_cl_in_min: ['app_cl_in_min_zero', 'app_cl_in_min_one', 'app_cl_in_min_two', 'app_cl_in_min_few', 'app_cl_in_min_many', 'app_cl_in_min_other'],
    app_cl_in_h: ['app_cl_in_h_zero', 'app_cl_in_h_one', 'app_cl_in_h_two', 'app_cl_in_h_few', 'app_cl_in_h_many', 'app_cl_in_h_other'],
    app_cl_in_days: ['app_cl_in_days_zero', 'app_cl_in_days_one', 'app_cl_in_days_two', 'app_cl_in_days_few', 'app_cl_in_days_many', 'app_cl_in_days_other'],
    app_cl_minutes: ['app_cl_minutes_zero', 'app_cl_minutes_one', 'app_cl_minutes_two', 'app_cl_minutes_few', 'app_cl_minutes_many', 'app_cl_minutes_other'],
    app_cl_credits: ['app_cl_credits_zero', 'app_cl_credits_one', 'app_cl_credits_two', 'app_cl_credits_few', 'app_cl_credits_many', 'app_cl_credits_other'],
    app_cl_words_p: ['app_cl_words_p_zero', 'app_cl_words_p_one', 'app_cl_words_p_two', 'app_cl_words_p_few', 'app_cl_words_p_many', 'app_cl_words_p_other'],
    app_lb_cards_added: ['app_lb_cards_added_zero', 'app_lb_cards_added_one', 'app_lb_cards_added_two', 'app_lb_cards_added_few', 'app_lb_cards_added_many', 'app_lb_cards_added_other'],
    app_mt_questions: ['app_mt_questions_zero', 'app_mt_questions_one', 'app_mt_questions_two', 'app_mt_questions_few', 'app_mt_questions_many', 'app_mt_questions_other'],
    app_mt_tasks: ['app_mt_tasks_zero', 'app_mt_tasks_one', 'app_mt_tasks_two', 'app_mt_tasks_few', 'app_mt_tasks_many', 'app_mt_tasks_other'],
    app_mt_plays_left: ['app_mt_plays_left_zero', 'app_mt_plays_left_one', 'app_mt_plays_left_two', 'app_mt_plays_left_few', 'app_mt_plays_left_many', 'app_mt_plays_left_other'],
    app_fc_due: ['app_fc_due_zero', 'app_fc_due_one', 'app_fc_due_two', 'app_fc_due_few', 'app_fc_due_many', 'app_fc_due_other'],
    app_fc_words: ['app_fc_words_zero', 'app_fc_words_one', 'app_fc_words_two', 'app_fc_words_few', 'app_fc_words_many', 'app_fc_words_other'],
    app_fc_add_rest: ['app_fc_add_rest_zero', 'app_fc_add_rest_one', 'app_fc_add_rest_two', 'app_fc_add_rest_few', 'app_fc_add_rest_many', 'app_fc_add_rest_other'],
    app_fc_mine: ['app_fc_mine_zero', 'app_fc_mine_one', 'app_fc_mine_two', 'app_fc_mine_few', 'app_fc_mine_many', 'app_fc_mine_other'],
    app_qz_clock_end_p: ['app_qz_clock_end_p_zero', 'app_qz_clock_end_p_one', 'app_qz_clock_end_p_two', 'app_qz_clock_end_p_few', 'app_qz_clock_end_p_many', 'app_qz_clock_end_p_other'],
    app_pr_mistakes_n: ['app_pr_mistakes_n_zero', 'app_pr_mistakes_n_one', 'app_pr_mistakes_n_two', 'app_pr_mistakes_n_few', 'app_pr_mistakes_n_many', 'app_pr_mistakes_n_other']
  };
  var plural = window.Intl && Intl.PluralRules ? new Intl.PluralRules(locale) : null;
  function tn(key, n, vars) {
    var T = window.ALIMUN_TRANSLATIONS || {};
    var cat = plural ? plural.select(n) : (n === 1 ? 'one' : 'other');
    var k = PLURALS[key].filter(function (f) { return f === key + '_' + cat; })[0];
    if (!k || !((T[lang] && T[lang][k]) || (T.en && T.en[k]))) k = key + '_other';
    var v = { n: new Intl.NumberFormat(locale).format(n) };
    for (var x in vars || {}) v[x] = vars[x];
    return t(k, v);
  }
  function cap(s) { s = String(s || ''); return s.charAt(0).toLocaleUpperCase(locale) + s.slice(1); }
  function languageName(english) {
    var code = window.AlimunData && AlimunData.langCode(english);
    try { if (code && Intl.DisplayNames) return cap(new Intl.DisplayNames([locale], { type: 'language' }).of(code)); } catch (e) { /* old browser */ }
    return english || '';
  }
  function listOf(items) {
    try { if (Intl.ListFormat) return new Intl.ListFormat(locale, { style: 'long', type: 'conjunction' }).format(items); } catch (e) { /* old browser */ }
    return items.join(', ');
  }
  function fmt(d, o) { return new Intl.DateTimeFormat(locale, o).format(new Date(d)); }

  /* Line icons drawn for Alimun: 24px grid, 2px rounded strokes, same weight as the drawings */
  var P = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  var ICONS = {
    home: '<path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z"/>',
    book: '<path d="M12 6.5C10.4 5 8.2 4.5 4 4.8v13.4c4.2-.3 6.4.2 8 1.8 1.6-1.6 3.8-2.1 8-1.8V4.8c-4.2-.3-6.4.2-8 1.7z"/><path d="M12 6.5V20"/>',
    practice: '<path d="M13 3 5.5 13.2H12L11 21l7.5-10.2H12z"/>',
    tests: '<path d="M7 3.5h10M8.5 3.5v3.2a3.5 3.5 0 0 0 7 0V3.5"/><path d="M12 10.2v3.3"/><path d="M8 20.5h8M9.5 20.5l.8-7h3.4l.8 7"/>',
    library: '<path d="M5 4v16M9.5 4v16"/><path d="m13.5 5.2 3.8-1 3.4 14.8-3.8 1z"/>',
    classes: '<rect x="3" y="6" width="13" height="12" rx="3"/><path d="m16 10.5 5-3v9l-5-3"/>',
    homework: '<path d="M14.5 4.5 19.5 9.5 9 20H4v-5z"/><path d="m12.5 6.5 5 5"/>',
    progress: '<path d="M4 20V13M10 20V8M16 20v-5M20 20H3"/><path d="m14.5 6.5 3-3 3 3M17.5 3.5V11"/>',
    messages: '<path d="M20 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.2A8 8 0 1 1 20 12z"/>',
    settings: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/>',
    kit: '<circle cx="8" cy="8" r="3.5"/><rect x="13" y="4.5" width="7" height="7" rx="2"/><path d="M4.5 19.5 8 13.5l3.5 6z"/><circle cx="16.5" cy="16.5" r="3.5"/>',
    more: '<circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/>',
    bell: '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z"/><path d="M10 21h4"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    down: '<path d="M12 5v14M6 13l6 6 6-6"/>',
    cards: '<rect x="3.5" y="7" width="13" height="13" rx="2.5"/><path d="M8 4h10.5a2 2 0 0 1 2 2v10.5"/>',
    back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7"/>',
    expand: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    play: '<path d="M8 5.5v13l10.5-6.5z"/>'
  };
  function icon(name) { return '<svg class="i-' + name + '" viewBox="0 0 24 24" ' + P + ' aria-hidden="true" focusable="false">' + ICONS[name] + '</svg>'; }

  /* Every section of the student dashboard, in the order of the plan's build steps.
     Text keys: app_nav_<id> (label), app_nav_<id>_short, app_soon_<id>_text and app_soon_<id>_bub. */
  var ROUTES = [
    { id: 'home', label: 'app_nav_home', icon: 'home', group: 'learn' },
    { id: 'book', label: 'app_nav_book', short: 'app_nav_book_short', icon: 'book', group: 'learn' },
    { id: 'practice', label: 'app_nav_practice', icon: 'practice', group: 'learn', step: 5, art: 'dog', tint: 'leaf', kind: 'say', text: 'app_soon_practice_text', bub: 'app_soon_practice_bub' },
    { id: 'cards', label: 'app_nav_cards', icon: 'cards', group: 'learn' },
    { id: 'tests', label: 'app_nav_tests', short: 'app_nav_tests_short', icon: 'tests', group: 'learn', step: 8, art: 'dragon', tint: 'leaf', kind: 'say', text: 'app_soon_tests_text', bub: 'app_soon_tests_bub' },
    { id: 'library', label: 'app_nav_library', icon: 'library', group: 'learn', step: 9, art: 'teacup', tint: 'mint', kind: 'say', text: 'app_soon_library_text', bub: 'app_soon_library_bub' },
    { id: 'classes', label: 'app_nav_classes', icon: 'classes', group: 'class', step: 10, art: 'mug', tint: 'leaf', kind: 'think', text: 'app_soon_classes_text', bub: 'app_soon_classes_bub' },
    { id: 'homework', label: 'app_nav_homework', icon: 'homework', group: 'class', step: 11, art: 'monster', tint: 'coral', kind: 'say', text: 'app_soon_homework_text', bub: 'app_soon_homework_bub' },
    { id: 'progress', label: 'app_nav_progress', icon: 'progress', group: 'class', step: 12, art: 'snail', tint: 'coral', kind: 'think', text: 'app_soon_progress_text', bub: 'app_soon_progress_bub' },
    { id: 'messages', label: 'app_nav_messages', icon: 'messages', group: 'class', step: 13, art: 'alien', tint: 'mint', kind: 'say', text: 'app_soon_messages_text', bub: 'app_soon_messages_bub' },
    { id: 'settings', label: 'app_nav_settings', icon: 'settings', group: 'account', step: 14, art: 'cat', tint: 'bone', kind: 'think', text: 'app_soon_settings_text', bub: 'app_soon_settings_bub' },
    { id: 'kit', label: 'app_nav_kit', icon: 'kit', group: 'account' }
  ];
  var GROUPS = { learn: 'app_nav_group_learn', class: 'app_nav_group_class', account: 'app_nav_group_account' };
  var TINTS = { sun: 'var(--t-sun)', mint: 'var(--t-mint)', coral: 'var(--t-coral)', leaf: 'var(--t-lime)', bone: 'var(--bone)' };
  var BAR = ['home', 'book', 'practice', 'classes'];
  var byId = {}; ROUTES.forEach(function (r) { byId[r.id] = r; });

  /* The course buddy for each language (docs/DASHBOARD_PLAN.md section 1) and its jokes */
  var BUDDIES = { English: 'teacup', German: 'pretzel', French: 'croissant', Spanish: 'churro', Italian: 'pizza', Portuguese: 'nata' };
  var JOKES = {
    teacup: ['app_joke_teacup_1', 'app_joke_teacup_2', 'app_joke_teacup_3'],
    pretzel: ['app_joke_pretzel_1', 'app_joke_pretzel_2', 'app_joke_pretzel_3'],
    croissant: ['app_joke_croissant_1', 'app_joke_croissant_2', 'app_joke_croissant_3'],
    churro: ['app_joke_churro_1', 'app_joke_churro_2', 'app_joke_churro_3'],
    pizza: ['app_joke_pizza_1', 'app_joke_pizza_2', 'app_joke_pizza_3'],
    nata: ['app_joke_nata_1', 'app_joke_nata_2', 'app_joke_nata_3']
  };
  var TIERS = { free: 'app_tier_free', waitlist: 'app_tier_waitlist', community: 'app_tier_community', focused: 'app_tier_focused',
    intensive: 'app_tier_intensive', onetoone: 'app_tier_onetoone', private: 'app_tier_private', daily: 'app_tier_daily', founding_member: 'app_tier_founding' };
  var UNPAID = { free: true, waitlist: true };

  var app, view, top, sheet, loadingScreen;
  var D = null; /* what Home shows: real data or sample */
  var mode = 'sample'; /* 'real', 'sample' (signed out), 'forced' (?sample=1), 'noprofile', 'error' */

  function buddyOf(d) { return BUDDIES[d.profile.language] || 'teacup'; }
  function myBookId() { return (D.profile.language || 'English') + '-' + (D.profile.level || 'A1'); }
  function firstName(n) { n = String(n || '').trim().split(/\s+/)[0] || ''; return cap(n); }
  function initials(n) {
    var p = String(n || '').trim().split(/\s+/).filter(Boolean);
    return ((p[0] || '').charAt(0) + (p.length > 1 ? p[p.length - 1].charAt(0) : '')).toLocaleUpperCase(locale) || 'A';
  }
  function courseName(d) { return (languageName(d.profile.language) + ' ' + (d.profile.level || '')).trim(); }

  /* ---------- Navigation markup ---------- */
  function navLinks() {
    var html = '';
    Object.keys(GROUPS).forEach(function (g) {
      html += '<div class="nav__group"><div class="nav__label">' + esc(t(GROUPS[g])) + '</div>';
      ROUTES.filter(function (r) { return r.group === g; }).forEach(function (r) {
        html += '<a href="#/' + r.id + '" data-route="' + r.id + '">' + icon(r.icon) + '<span>' + esc(t(r.label)) + '</span></a>';
      });
      html += '</div>';
    });
    return html;
  }

  function renderShell() {
    var buddySvg = Cast.drawing(buddyOf(D));
    var lng = languageName(D.profile.language);
    app.innerHTML =
      '<a class="skip" href="#view">' + esc(t('app_skip')) + '</a>' +
      '<aside class="side" aria-label="' + esc(t('app_main')) + '">' +
        '<a class="brand" href="#/home" aria-label="' + esc(t('app_home_link')) + '">' + Cast.book('idle') + Cast.wordmark() + '</a>' +
        '<nav class="nav" aria-label="' + esc(t('app_sections')) + '">' + navLinks() + '</nav>' +
        '<div class="side__foot"><a class="buddy-card" href="#/book">' + buddySvg +
          '<div><b>' + esc(courseName(D)) + '</b><small>' + esc(t(TIERS[D.profile.tier] || 'app_tier_free')) + '</small></div></a></div>' +
      '</aside>' +
      '<div class="main">' +
        '<header class="top">' +
          '<a class="top__brand" href="#/home" aria-label="' + esc(t('app_home_link')) + '">' + Cast.book('idle') + Cast.wordmark() + '</a>' +
          '<p class="top__title" aria-hidden="true"></p>' +
          '<div class="top__actions">' +
            '<button class="course-btn" type="button" aria-label="' + esc(t('app_course_label', { language: lng })) + '">' + buddySvg + '<span>' + esc(lng) + '</span></button>' +
            '<button class="icon-btn" type="button" aria-label="' + esc(t('app_notifications')) + '">' + icon('bell') + '</button>' +
            '<button class="avatar" type="button" aria-label="' + esc(t('app_account')) + '">' + esc(initials(D.profile.name)) + '</button>' +
          '</div>' +
        '</header>' +
        '<main class="view" id="view" tabindex="-1"></main>' +
      '</div>' +
      '<nav class="bar" aria-label="' + esc(t('app_sections')) + '">' +
        BAR.map(function (id) { var r = byId[id]; return '<a href="#/' + id + '" data-route="' + id + '">' + icon(r.icon) + '<span>' + esc(t(r.short || r.label)) + '</span></a>'; }).join('') +
        '<button type="button" data-more aria-haspopup="dialog" aria-expanded="false">' + icon('more') + '<span>' + esc(t('app_nav_more')) + '</span></button>' +
      '</nav>' +
      '<div class="sheet-scrim" data-close></div>' +
      '<div class="sheet" role="dialog" aria-modal="true" aria-label="' + esc(t('app_more_sections')) + '"><div class="sheet__grip"></div><nav class="nav">' + navLinks() + '</nav></div>';
    view = app.querySelector('.view');
    top = app.querySelector('.top');
    sheet = app.querySelector('.sheet');
  }

  /* ---------- Home ---------- */
  var MIN = 60000, HOUR = 3600000, DAY = 86400000;

  function greeting(name) {
    var h = new Date().getHours();
    var g = t(h < 12 ? 'app_greet_morning' : h < 18 ? 'app_greet_afternoon' : 'app_greet_evening');
    return name ? t('app_greet_named', { greeting: g, name: name }) : g;
  }

  /* "in 2 days", "in 3 hours", "in 20 minutes" */
  function relative(ms) {
    var rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'always' });
    if (ms < HOUR) return rtf.format(Math.max(1, Math.round(ms / MIN)), 'minute');
    if (ms < DAY) return rtf.format(Math.round(ms / HOUR), 'hour');
    return rtf.format(Math.floor(ms / DAY), 'day');
  }
  /* "Today, 18:30", "Tomorrow, 18:30", "Thursday, 18:30", or with the date when it is more than a week away */
  function classWhen(at) {
    var d = new Date(at), today = new Date(); today.setHours(0, 0, 0, 0);
    var days = Math.round((new Date(d).setHours(0, 0, 0, 0) - today) / DAY);
    var time = fmt(d, { hour: '2-digit', minute: '2-digit' });
    var day = days === 0 || days === 1 ? new Intl.RelativeTimeFormat(locale, { numeric: 'auto' }).format(days, 'day')
      : fmt(d, days < 7 ? { weekday: 'long' } : { weekday: 'long', day: 'numeric', month: 'long' });
    return t('app_home_when', { day: cap(day), time: time });
  }

  /* One joke a day, or the one that fits the moment */
  function buddyLine(d) {
    var s = d.streak, now = new Date();
    if (d.nextClass && new Date(d.nextClass.at).toDateString() === now.toDateString()) return { key: 'app_joke_class_today', kind: 'say' };
    if (s.days >= 3) return { text: tn('app_joke_streak', s.days), kind: 'say' };
    if (s.lastActive && Date.now() - new Date(s.lastActive).getTime() > 7 * DAY) return { key: 'app_joke_away', kind: 'think' };
    if (!s.lastActive) return { key: 'app_joke_first', kind: 'say' };
    var pool = (JOKES[buddyOf(d)] || []).concat(now.getHours() < 12 ? ['app_joke_morning'] : now.getHours() >= 18 ? ['app_joke_evening'] : []);
    var dayNo = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / DAY);
    return { key: pool[dayNo % pool.length], kind: dayNo % 2 ? 'think' : 'say' };
  }

  function nextClassCard(d) {
    var c = d.nextClass, tier = d.profile.tier;
    var head = '<section class="card card--forest' + (c ? '' : ' card--center') + ' span-8" style="--i:1" aria-labelledby="h-next">';
    if (c) {
      var start = new Date(c.at).getTime(), now = Date.now();
      var open = c.live || (now >= start - 15 * MIN && now <= start + 90 * MIN);
      var name = t('app_home_class_name', { course: (languageName(c.language) + ' ' + (c.level || '')).trim() });
      var line = c.teacher ? t('app_home_class_with', { class: name, teacher: c.teacher }) : name;
      var when = c.live ? t('app_home_live_now') : start > now ? t('app_home_starts', { when: relative(start - now) }) : t('app_home_started');
      return head + '<p class="t-small" id="h-next">' + esc(t('app_home_next')) + '</p>' +
        '<h2 class="t-h1" style="margin-top:10px">' + esc(classWhen(c.at)) + '</h2>' +
        '<p class="t-lead" style="margin-top:12px">' + esc(t('app_home_class_line', { line: line, when: when })) + '</p>' +
        '<div class="btn-row" style="margin-top:26px">' +
          (open ? (d.sample ? '<button class="btn btn--lime" type="button" data-join>' + icon('play') + esc(t('app_home_join')) + '</button>'
                            : '<a class="btn btn--lime" href="' + (c.id ? '#/classes/live/' + esc(c.id) : '#/classes') + '" data-join-real>' + icon('play') + esc(t('app_home_join')) + '</a>') : '') +
          '<a class="btn btn--ghost btn--on-forest" href="#/classes">' + esc(t('app_home_calendar')) + '</a></div>' +
      '</section>';
    }
    /* No class yet: waiting for a class to open, on the free plan, or paid with nothing scheduled */
    var k = tier === 'waitlist' ? ['app_home_forming_h', 'app_home_forming_p'] : tier === 'free' ? ['app_home_free_h', 'app_home_free_p'] : ['app_home_none_h', 'app_home_none_p'];
    return head + '<div class="card__row card__row--split"><div>' +
        '<p class="t-small" id="h-next">' + esc(t('app_home_next')) + '</p>' +
        '<h2 class="t-h1" style="margin-top:10px">' + esc(t(k[0])) + '</h2>' +
        '<p class="t-lead" style="margin-top:12px">' + esc(t(k[1], { course: courseName(d) })) + '</p></div>' +
        '<div class="card__art card__art--lg">' + Cast.drawing('mug') + '</div></div>' +
      '</section>';
  }

  function buddyStage(d) {
    var b = buddyLine(d);
    return '<section class="stage span-4" style="--i:2;background:var(--t-sun)" aria-label="' + esc(t('app_home_buddy')) + '">' +
      '<div class="bub ' + b.kind + '">' + esc(b.text || t(b.key)) + '</div>' + Cast.drawing(buddyOf(d)) + '</section>';
  }

  function todayPlan(d) {
    var items = [];
    if (d.flashcardsDue > 0) items.push({ art: 'ghost', tint: 'coral', href: '#/cards/review', h: tn('app_home_cards', d.flashcardsDue), p: t('app_home_cards_p') });
    if (d.homework.length) {
      var hw = d.homework[0];
      items.push({ art: 'monster', tint: 'mint', href: '#/homework', h: hw.titleKey ? t(hw.titleKey) : hw.title,
        p: hw.due_date ? t('app_home_hw_due', { date: fmt(hw.due_date + 'T12:00:00', { weekday: 'long', day: 'numeric', month: 'long' }) }) : t('app_home_hw_nodate') });
    }
    if (d.topics && d.topics.length) items.push({ art: 'dragon', tint: 'sun', href: '#/practice', h: t('app_home_topic_h', { topic: d.topics[0] }), p: t('app_home_topic_p') });
    if (!items.length) items.push({ art: 'sun', tint: 'leaf', href: '#/practice', h: t('app_home_clear_h'), p: t('app_home_clear_p') });
    var span = items.length === 1 ? 12 : items.length === 2 ? 6 : 4;
    return '<h2 class="t-h2 span-12 home__section" id="h-today" style="--i:3">' + esc(t('app_home_today_h')) + '</h2>' +
      items.map(function (it, i) {
        return '<a class="card card--' + it.tint + ' span-' + span + '" style="--i:' + (4 + i) + '" href="' + it.href + '">' +
          '<div class="card__row"><div class="card__art">' + Cast.drawing(it.art) + '</div>' +
          '<div><h3 class="t-h3">' + esc(it.h) + '</h3><p class="t-small" style="margin-top:8px">' + esc(it.p) + '</p></div></div></a>';
      }).join('');
  }

  function streakCard(d) {
    var s = d.streak;
    var days = [];
    for (var i = 0; i < 7; i++) days.push(fmt(new Date(s.monday).getTime() + i * DAY, { weekday: 'narrow' }));
    var line = s.days === 0 ? 'app_home_streak_zero' : s.activeToday ? 'app_home_streak_done' : 'app_home_streak_keep';
    return '<section class="card span-5" style="--i:7" aria-labelledby="h-streak">' +
      '<div class="card__row"><div><p class="t-small" id="h-streak">' + esc(t('app_home_streak')) + '</p><div class="t-num" style="margin-top:6px">' + esc(tn('app_home_days', s.days)) + '</div></div>' +
      '<div class="card__art card__art--end">' + Cast.drawing('snail') + '</div></div>' +
      '<div class="week" role="img" aria-label="' + esc(t('app_home_week')) + '">' + s.week.map(function (on, i) { return '<span class="' + (on ? 'on' : '') + (i === s.todayIndex ? ' today' : '') + '">' + esc(days[i]) + '</span>'; }).join('') + '</div>' +
      '<p class="t-small" style="margin-top:14px">' + esc(t(line)) + '</p>' +
    '</section>';
  }

  function focusCard(d) {
    var body, btn;
    if (d.placement && d.topics && d.topics.length) {
      /* Topic names in bold, joined the way the interface language joins a list */
      var list = esc(listOf(d.topics.map(function (x) { return '\u0001' + x + '\u0002'; }))).replace(/\u0001/g, '<b>').replace(/\u0002/g, '</b>');
      body = esc(t('app_home_focus_p', { level: d.placement.level })).replace('{topics}', list);
      btn = '<a class="btn btn--ghost btn--sm" href="/level-test">' + esc(t('app_home_retake')) + '</a>';
    } else if (d.placement) {
      body = esc(t('app_home_focus_top', { level: d.placement.level }));
      btn = '<a class="btn btn--ghost btn--sm" href="/level-test">' + esc(t('app_home_retake')) + '</a>';
    } else {
      body = esc(t('app_home_focus_none'));
      btn = '<a class="btn btn--primary btn--sm" href="/level-test">' + esc(t('app_home_take')) + icon('arrow') + '</a>';
    }
    return '<section class="card span-7" style="--i:8" aria-labelledby="h-focus">' +
      '<div class="card__row card__row--split"><div><h2 class="t-h2" id="h-focus">' + esc(t('app_home_focus_h')) + '</h2>' +
      '<p class="t-body" style="margin-top:14px">' + body + '</p>' +
      '<div class="btn-row" style="margin-top:20px">' + btn + '</div></div>' +
      '<div class="card__art">' + Cast.drawing('owl') + '</div></div>' +
    '</section>';
  }

  function planCard(d) {
    var tier = d.profile.tier;
    if (!UNPAID[tier]) return '';
    var k = tier === 'waitlist' ? ['app_home_plan_wait_h', 'app_home_plan_wait_p'] : ['app_home_plan_free_h', 'app_home_plan_free_p'];
    return '<section class="card card--lime span-12" style="--i:9" aria-labelledby="h-plan">' +
      '<div class="card__row" style="flex-wrap:wrap"><div style="flex:1;min-width:240px"><h2 class="t-h2" id="h-plan">' + esc(t(k[0])) + '</h2>' +
      '<p class="t-body" style="margin-top:10px">' + esc(t(k[1])) + '</p></div>' +
      '<a class="btn btn--primary" href="/tiers">' + esc(t('app_home_see_plans')) + '</a></div>' +
    '</section>';
  }

  /* Why sample data is showing, with the way to your own */
  function sampleNote() {
    if (mode === 'real') return '';
    var p, btn;
    if (mode === 'forced') { p = t('app_sample_forced'); btn = '<a class="btn btn--primary btn--sm" href="' + location.pathname + location.hash + '">' + esc(t('app_sample_mine')) + '</a>'; }
    else if (mode === 'noprofile') { p = t('app_sample_noprofile'); btn = ''; }
    else if (mode === 'error') { p = t('app_sample_error'); btn = '<button class="btn btn--primary btn--sm" type="button" data-retry>' + esc(t('app_retry')) + '</button>'; }
    else { p = t('app_sample_p'); btn = '<a class="btn btn--primary btn--sm" href="/signin.html">' + esc(t('app_sample_signin')) + '</a>'; }
    return '<section class="card card--bone span-12 sample-note" style="--i:0" role="note">' +
      '<div class="card__row" style="flex-wrap:wrap"><div style="flex:1;min-width:220px"><h2 class="t-h3">' + esc(t('app_sample_h')) + '</h2>' +
      '<p class="t-small" style="margin-top:6px">' + esc(p) + '</p></div>' + btn + '</div></section>';
  }

  function homeView() {
    var d = D;
    return '' +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(greeting(firstName(d.profile.name))) + '</h1>' +
        '<p class="t-lead">' + esc(cap(fmt(Date.now(), { weekday: 'long', day: 'numeric', month: 'long' }))) + '</p></div></div>' +
      '<div class="grid rise">' +
        sampleNote() +
        nextClassCard(d) +
        buddyStage(d) +
        todayPlan(d) +
        streakCard(d) +
        focusCard(d) +
        planCard(d) +
      '</div>';
  }

  /* ---------- Screens built in later steps ---------- */
  /* Paper-cut drawings of the third cast for the sections (js/app/cast3.js) */
  var SPOTS = { library: 'books', classes: 'calendar', homework: 'pencil', progress: 'chart', messages: 'envelope', settings: 'plant' };
  function soonView(r) {
    var spot = SPOTS[r.id] && Cast.spot ? '<div class="soon__spot">' + Cast.spot(SPOTS[r.id]) + '</div>' : '';
    return '' +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(t(r.label)) + '</h1><p class="t-lead">' + esc(t(r.text)) + '</p></div></div>' +
      '<div class="soon rise">' +
        '<div class="stage" style="--i:0;background:' + TINTS[r.tint] + '"><div class="bub ' + r.kind + '">' + esc(t(r.bub)) + '</div>' + Cast.drawing(r.art) + '</div>' +
        '<div class="card" style="--i:1">' + spot + '<h2 class="t-h2">' + esc(t('app_soon_h', { step: r.step })) + '</h2>' +
          '<p class="t-body">' + esc(t('app_soon_p')) + '</p>' +
          '<div class="btn-row"><a class="btn btn--primary" href="#/home">' + esc(t('app_soon_back')) + '</a><a class="btn btn--quiet" href="#/kit">' + esc(t('app_soon_kit')) + '</a></div></div>' +
      '</div>';
  }

  /* ---------- Design kit (internal reference, English only) ---------- */
  function kitView() {
    var colours = [
      ['Forest', '#1a443c', 'Logo, shell, primary buttons'], ['Gold', '#d5af33', 'Logo eyes, loader'], ['Lime', '#ceff65', 'Active state, highlights'],
      ['Ink', '#080808', 'Text'], ['Bone', '#f0efe9', 'Page background'], ['White', '#ffffff', 'Cards'],
      ['Coral', '#ff9f8a', 'Drawings'], ['Mint', '#9fd6c7', 'Drawings'], ['Sunflower', '#ffd166', 'Drawings']
    ];
    var moodNames = { idle: 'Idle, blinking', happy: 'Right answer', wow: 'New record', think: 'Almost, try again', sleep: 'You have been away' };
    return '' +
      '<div class="view__head"><div><h1 class="t-h1">Design kit</h1><p class="t-lead">The pieces every new screen is made of: colours, type, cards, buttons, bubbles, the book character and the loader.</p></div>' +
        '<button class="btn btn--ghost btn--sm" type="button" data-replay>Replay the motion</button></div>' +
      '<div class="grid rise">' +
        '<section class="card span-12" style="--i:0"><h2 class="t-h2">Colours</h2><p class="t-small" style="margin:8px 0 20px">Site colours plus the approved drawing palette. Soft tints of sunflower, mint, coral and lime sit behind drawings.</p>' +
          '<div class="swatches">' + colours.map(function (c) { return '<div class="swatch"><i style="background:' + c[1] + (c[1] === '#ffffff' ? ';box-shadow:inset 0 -1px 0 var(--line)' : '') + '"></i><span>' + c[0] + ' <small>' + c[1] + ', ' + c[2] + '</small></span></div>'; }).join('') + '</div></section>' +
        '<section class="card span-7" style="--i:1"><h2 class="t-h2">Type</h2>' +
          '<div style="margin-top:12px">' +
          '<div class="type-row"><span class="t-tiny">Display, Coolvetica</span><span class="t-display">Guten Tag</span></div>' +
          '<div class="type-row"><span class="t-tiny">Heading 1</span><span class="t-h1">Your next class</span></div>' +
          '<div class="type-row"><span class="t-tiny">Heading 2</span><span class="t-h2">Unit 4: Making plans</span></div>' +
          '<div class="type-row"><span class="t-tiny">Heading 3</span><span class="t-h3">Separable verbs</span></div>' +
          '<div class="type-row"><span class="t-tiny">Lead, Satoshi 19</span><p class="t-lead">Every page teaches, then checks that you got it.</p></div>' +
          '<div class="type-row"><span class="t-tiny">Body, Satoshi 16</span><p class="t-body">Ich stehe jeden Tag um sieben Uhr auf.</p></div>' +
          '<div class="type-row"><span class="t-tiny">Small, Satoshi 14</span><p class="t-small">Words from Tuesday’s class</p></div>' +
          '</div></section>' +
        '<section class="card span-5" style="--i:2"><h2 class="t-h2">Buttons</h2>' +
          '<div class="btn-row" style="margin-top:22px"><button class="btn btn--primary" type="button">Continue</button><button class="btn btn--lime" type="button">Join class</button></div>' +
          '<div class="btn-row" style="margin-top:12px"><button class="btn btn--ghost" type="button">See the calendar</button><button class="btn btn--quiet" type="button">Not now</button></div>' +
          '<h2 class="t-h2" style="margin-top:34px">Progress</h2>' +
          '<div class="meter" style="margin-top:18px" aria-hidden="true"><i style="width:62%"></i></div>' +
          '<h2 class="t-h2" style="margin-top:34px">Bubbles</h2>' +
          '<div style="display:flex;flex-direction:column;gap:46px;margin-top:20px;padding-bottom:30px">' +
            '<div><span class="bub bub--inline say">A speech bubble says something.</span></div>' +
            '<div><span class="bub bub--inline think">A thought cloud thinks it.</span></div></div>' +
        '</section>' +
        '<section class="card span-12" style="--i:3"><h2 class="t-h2">The book character</h2><p class="t-small" style="margin:8px 0 20px">Reactions in every exercise. Lime cheeks when it is happy.</p>' +
          '<div class="moods">' + Cast.moods.map(function (m) { return '<div class="mood">' + Cast.book(m) + '<span class="t-small">' + moodNames[m] + '</span></div>'; }).join('') + '</div></section>' +
        '<section class="card span-4" style="--i:4"><h2 class="t-h2">Cards</h2><p class="t-small" style="margin-top:8px">White on bone with a soft shadow, 32px corners (24px on phones). Cards you can tap lift on hover.</p></section>' +
        '<a class="card card--forest span-4" style="--i:5" href="#/kit"><h2 class="t-h2">Forest card</h2><p class="t-small" style="margin-top:8px">For the one thing that matters most on a screen, like the next class.</p></a>' +
        '<a class="card card--mint span-4" style="--i:6" href="#/kit"><h2 class="t-h2">Tinted card</h2><p class="t-small" style="margin-top:8px">Behind drawings and tasks. Sunflower, mint, coral, lime and bone tints.</p></a>' +
        '<section class="card span-12" style="--i:7"><div class="card__row" style="flex-wrap:wrap;gap:28px">' +
          '<div class="loader" style="--w:120px" role="img" aria-label="The Alimun loader">' + loaderInner() + '</div>' +
          '<div style="flex:1;min-width:240px"><h2 class="t-h2">The loader</h2><p class="t-body" style="margin-top:10px">One loading animation everywhere: opening the dashboard, joining a class, tests and payment.</p>' +
          '<div class="btn-row" style="margin-top:18px"><button class="btn btn--primary btn--sm" type="button" data-demo-loader>Show it full screen</button></div></div>' +
        '</div></section>' +
      '</div>';
  }

  function loaderInner() {
    return '<div class="whirl whirl--outer"></div><div class="whirl whirl--inner"></div><div class="spark"></div>' +
      '<div class="mark"><svg viewBox="290 360 445 445" aria-hidden="true">' +
      Cast.logoPath +
      '<circle fill="#d5af33" cx="453" cy="605" r="19"/><circle fill="#d5af33" cx="574" cy="605" r="19"/></svg></div>';
  }


  /* ---------- Loader ---------- */
  function showLoader(message, ms) {
    loadingScreen.querySelector('p').textContent = message || '';
    loadingScreen.classList.remove('is-done');
    loadingScreen.setAttribute('aria-hidden', 'false');
    if (ms) setTimeout(hideLoader, ms);
  }
  function hideLoader() {
    loadingScreen.classList.add('is-done');
    loadingScreen.setAttribute('aria-hidden', 'true');
  }

  /* What the course book reader (js/app/reader.js) uses from the shell */
  var readerHelpers = {
    t: t, esc: esc, icon: icon, Cast: Cast, lang: lang, locale: locale, cap: cap, languageName: languageName, loaderInner: loaderInner,
    data: function () { return D; }, mode: function () { return mode; }, myBookId: function () { return myBookId(); },
    buddyFor: function (language) { return BUDDIES[language] || 'teacup'; }, courseName: function () { return courseName(D); },
    rerender: function () { render('book', false); }, tn: function (k, n) { return tn(k, n); }
  };
  /* The Practice screen (js/app/practice.js) uses the same helpers */
  var practiceHelpers = Object.assign({}, readerHelpers, { rerender: function () { render('practice', false); } });
  var cardsHelpers = Object.assign({}, readerHelpers, { rerender: function () { render('cards', false); } });
  var testsHelpers = Object.assign({}, readerHelpers, { rerender: function () { render('tests', false); } });
  var libraryHelpers = Object.assign({}, readerHelpers, { rerender: function () { render('library', false); } });
  var classesHelpers = Object.assign({}, readerHelpers, { rerender: function () { render('classes', false); } });
  function classesParts() { return location.hash.replace(/^#\/classes\/?/, '').split('/').filter(Boolean); }
  function libraryParts() { return location.hash.replace(/^#\/library\/?/, '').split('/').filter(Boolean); }
  function testsParts() { return location.hash.replace(/^#\/tests\/?/, '').split('/').filter(Boolean); }
  function cardsParts() { return location.hash.replace(/^#\/cards\/?/, '').split('/').filter(Boolean); }
  function practiceParts() { return location.hash.replace(/^#\/practice\/?/, '').split('/').filter(Boolean); }
  function bookParts() { return location.hash.replace(/^#\/book\/?/, '').split('/').filter(Boolean); }

  /* ---------- Routing ---------- */
  var current = null;
  function routeFromHash() {
    var id = (location.hash.match(/^#\/([a-z]+)/) || [])[1];
    return byId[id] ? id : 'home';
  }
  function render(id, animate) {
    var r = byId[id];
    var html = id === 'home' ? homeView() : id === 'kit' ? kitView() : id === 'book' || id === 'practice' || id === 'cards' || id === 'tests' || id === 'library' || id === 'classes' ? '' : soonView(r);
    var swap = function () {
      if (id !== 'book' && window.AlimunReader) window.AlimunReader.reset();
      if (id !== 'tests' && window.AlimunTests) window.AlimunTests.reset();
      if (window.AlimunLibrary) window.AlimunLibrary.reset();
      if (window.AlimunClasses) window.AlimunClasses.reset();
      view.innerHTML = html;
      view.classList.remove('is-leaving');
      document.body.classList.remove('is-reading');
      document.title = t(r.label) + ' – Alimun';
      if (id === 'book') {
        window.AlimunReader.mount(view, bookParts(), readerHelpers).then(function (res) {
          if (current === 'book' && res && !res.stale && res.title) document.title = res.title + ' – Alimun';
        });
      }
      if (id === 'cards') {
        window.AlimunCards.mount(view, cardsParts(), cardsHelpers).then(function (res) {
          if (current === 'cards' && res && !res.stale && res.title) document.title = res.title + ' – Alimun';
        });
      }
      if (id === 'classes') {
        window.AlimunClasses.mount(view, classesParts(), classesHelpers).then(function (res) {
          if (current === 'classes' && res && !res.stale && res.title) document.title = res.title + ' – Alimun';
        });
      }
      if (id === 'library') {
        window.AlimunLibrary.mount(view, libraryParts(), libraryHelpers).then(function (res) {
          if (current === 'library' && res && !res.stale && res.title) document.title = res.title + ' – Alimun';
        });
      }
      if (id === 'tests') {
        window.AlimunTests.mount(view, testsParts(), testsHelpers).then(function (res) {
          if (current === 'tests' && res && !res.stale && res.title) document.title = res.title + ' – Alimun';
        });
      }
      if (id === 'practice') {
        window.AlimunPractice.mount(view, practiceParts(), practiceHelpers).then(function (res) {
          if (current === 'practice' && res && !res.stale && res.title) document.title = res.title + ' – Alimun';
        });
      }
      top.querySelector('.top__title').textContent = t(r.label);
      app.querySelectorAll('[data-route]').forEach(function (a) {
        if (a.getAttribute('data-route') === id) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
      });
      var more = app.querySelector('[data-more]');
      more.classList.toggle('is-active', BAR.indexOf(id) === -1);
      if (animate) { window.scrollTo(0, 0); view.focus({ preventScroll: true }); }
    };
    if (animate && current) { view.classList.add('is-leaving'); setTimeout(swap, 150); } else swap();
    current = id;
  }

  function setSheet(open) {
    document.body.classList.toggle('is-sheet-open', open);
    app.querySelector('[data-more]').setAttribute('aria-expanded', String(open));
    if (open) { var a = sheet.querySelector('a'); if (a) a.focus(); }
  }

  /* ---------- Data ---------- */
  function sample() {
    var s = window.ALIMUN_SAMPLE();
    return window.AlimunData.topicLabels(s.placement.language, s.placement.topics, lang).then(function (labels) { s.topics = labels; return s; });
  }
  function loadData() {
    if (/[?&]sample=1/.test(location.search)) { mode = 'forced'; return sample(); }
    return window.AlimunData.load(lang).then(function (d) {
      if (d && d.profile) { mode = 'real'; return d; }
      mode = d ? 'noprofile' : 'sample';
      return sample();
    }, function (err) {
      console.warn('[Alimun] Home data did not load', err && err.message);
      mode = 'error';
      return sample();
    });
  }

  /* ---------- Boot ---------- */
  function start() {
    renderShell();
    render(routeFromHash(), false);
  }

  function boot() {
    app = document.getElementById('app');
    loadingScreen = document.getElementById('loading');
    document.documentElement.lang = lang === 'ma' ? 'fr-MA' : lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    var started = Date.now();
    var fonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    loadText().then(function () {
      loadingScreen.querySelector('p').textContent = t('app_loading_open');
      return Promise.all([loadData(), fonts]);
    }).then(function (res) {
      D = res[0];
      start();
      setTimeout(hideLoader, Math.max(0, 900 - (Date.now() - started)));
    });

    window.addEventListener('hashchange', function () { if (!D) return; setSheet(false); var id = routeFromHash(); if (id !== current || id === 'book' || id === 'practice' || id === 'cards' || id === 'tests' || id === 'library' || id === 'classes') render(id, true); });
    window.addEventListener('scroll', function () { if (top) top.classList.toggle('is-scrolled', window.scrollY > 8); }, { passive: true });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && D) setSheet(false); });

    app.addEventListener('click', function (e) {
      var el = e.target.closest('[data-more],[data-close],[data-join],[data-join-real],[data-demo-loader],[data-replay],[data-retry]');
      if (!el) return;
      if (el.hasAttribute('data-more')) setSheet(!document.body.classList.contains('is-sheet-open'));
      else if (el.hasAttribute('data-close')) setSheet(false);
      else if (el.hasAttribute('data-join')) showLoader(t('app_loading_join'), 2200);
      else if (el.hasAttribute('data-join-real')) showLoader(t('app_loading_join'), 1600);
      else if (el.hasAttribute('data-demo-loader')) showLoader(t('app_loading_open'), 2200);
      else if (el.hasAttribute('data-replay')) render('kit', false);
      else if (el.hasAttribute('data-retry')) {
        showLoader(t('app_loading_open'));
        loadData().then(function (d) { D = d; current = null; start(); hideLoader(); });
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
