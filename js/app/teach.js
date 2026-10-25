/* Alimun teacher dashboard (docs/DASHBOARD_PLAN.md, step 15), page /app/teach.
   Part 1: the shell (same look as the student dashboard: sidebar on desktop, bottom bar plus "More" on phones) and
   Today: the next class with Start, what needs doing (notes to write, homework to mark, messages, 1:1 notes), the
   next seven days, the teacher's classes and the homework waiting longest. Sections of later parts show their character
   and say which part builds them. Signed in as an approved teacher it reads their own data (AlimunData.teacherToday);
   a teacher still being reviewed sees that; anyone else, or ?sample=1, sees a sample. Text: app_t_* keys. */
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
  /* Every plural form written out, so the translation split files them with the dashboard text */
  var PLURALS = {
    app_t_notes_n: ['app_t_notes_n_zero', 'app_t_notes_n_one', 'app_t_notes_n_two', 'app_t_notes_n_few', 'app_t_notes_n_many', 'app_t_notes_n_other'],
    app_t_grade_n: ['app_t_grade_n_zero', 'app_t_grade_n_one', 'app_t_grade_n_two', 'app_t_grade_n_few', 'app_t_grade_n_many', 'app_t_grade_n_other'],
    app_t_unread_n: ['app_t_unread_n_zero', 'app_t_unread_n_one', 'app_t_unread_n_two', 'app_t_unread_n_few', 'app_t_unread_n_many', 'app_t_unread_n_other'],
    app_t_students_n: ['app_t_students_n_zero', 'app_t_students_n_one', 'app_t_students_n_two', 'app_t_students_n_few', 'app_t_students_n_many', 'app_t_students_n_other'],
    app_t_classes_n: ['app_t_classes_n_zero', 'app_t_classes_n_one', 'app_t_classes_n_two', 'app_t_classes_n_few', 'app_t_classes_n_many', 'app_t_classes_n_other'],
    app_pg_words: ['app_pg_words_zero', 'app_pg_words_one', 'app_pg_words_two', 'app_pg_words_few', 'app_pg_words_many', 'app_pg_words_other'],
    app_pg_words_of: ['app_pg_words_of_zero', 'app_pg_words_of_one', 'app_pg_words_of_two', 'app_pg_words_of_few', 'app_pg_words_of_many', 'app_pg_words_of_other'],
    app_pg_days: ['app_pg_days_zero', 'app_pg_days_one', 'app_pg_days_two', 'app_pg_days_few', 'app_pg_days_many', 'app_pg_days_other'],
    app_pg_n_answers: ['app_pg_n_answers_zero', 'app_pg_n_answers_one', 'app_pg_n_answers_two', 'app_pg_n_answers_few', 'app_pg_n_answers_many', 'app_pg_n_answers_other'],
    app_pg_n_pieces: ['app_pg_n_pieces_zero', 'app_pg_n_pieces_one', 'app_pg_n_pieces_two', 'app_pg_n_pieces_few', 'app_pg_n_pieces_many', 'app_pg_n_pieces_other'],
    app_pg_n_papers: ['app_pg_n_papers_zero', 'app_pg_n_papers_one', 'app_pg_n_papers_two', 'app_pg_n_papers_few', 'app_pg_n_papers_many', 'app_pg_n_papers_other'],
    app_pg_n_hw: ['app_pg_n_hw_zero', 'app_pg_n_hw_one', 'app_pg_n_hw_two', 'app_pg_n_hw_few', 'app_pg_n_hw_many', 'app_pg_n_hw_other'],
    app_tc_created_n: ['app_tc_created_n_zero', 'app_tc_created_n_one', 'app_tc_created_n_two', 'app_tc_created_n_few', 'app_tc_created_n_many', 'app_tc_created_n_other'],
    app_t_oto_notes_n: ['app_t_oto_notes_n_zero', 'app_t_oto_notes_n_one', 'app_t_oto_notes_n_two', 'app_t_oto_notes_n_few', 'app_t_oto_notes_n_many', 'app_t_oto_notes_n_other']
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

  /* Line icons: the student dashboard's set, plus students and payouts */
  var P = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  var ICONS = {
    home: '<path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z"/>',
    classes: '<rect x="3" y="6" width="13" height="12" rx="3"/><path d="m16 10.5 5-3v9l-5-3"/>',
    students: '<circle cx="9" cy="8.5" r="3.2"/><path d="M3.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5"/><circle cx="16.8" cy="9.5" r="2.5"/><path d="M15.5 14.6c2.6-.3 4.4 1.3 5 4.4"/>',
    homework: '<path d="M14.5 4.5 19.5 9.5 9 20H4v-5z"/><path d="m12.5 6.5 5 5"/>',
    material: '<path d="M12 6.5C10.4 5 8.2 4.5 4 4.8v13.4c4.2-.3 6.4.2 8 1.8 1.6-1.6 3.8-2.1 8-1.8V4.8c-4.2-.3-6.4.2-8 1.7z"/><path d="M12 6.5V20"/>',
    messages: '<path d="M20 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.2A8 8 0 1 1 20 12z"/>',
    payouts: '<rect x="3" y="6.5" width="18" height="12" rx="2.5"/><path d="M3 10.5h18M7 15h3"/>',
    settings: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/>',
    more: '<circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    play: '<path d="M8 5.5v13l10.5-6.5z"/>'
  };
  function loaderInner() {
    return '<div class="whirl whirl--outer"></div><div class="whirl whirl--inner"></div><div class="spark"></div>' +
      '<div class="mark"><svg viewBox="290 360 445 445" aria-hidden="true">' + Cast.logoPath +
      '<circle fill="#d5af33" cx="453" cy="605" r="19"/><circle fill="#d5af33" cx="574" cy="605" r="19"/></svg></div>';
  }
  function icon(name) { return '<svg class="i-' + name + '" viewBox="0 0 24 24" ' + P + ' aria-hidden="true" focusable="false">' + ICONS[name] + '</svg>'; }

  /* ---------- Sections ---------- */
  var ROUTES = [
    { id: 'today', label: 'app_t_nav_today', icon: 'home', group: 'teach' },
    { id: 'classes', label: 'app_t_nav_classes', icon: 'classes', group: 'teach', part: 2, art: 'mug', tint: 'leaf', kind: 'think', text: 'app_t_soon_classes_text', bub: 'app_t_soon_classes_bub' },
    { id: 'students', label: 'app_t_nav_students', icon: 'students', group: 'teach', part: 3, art: 'parrot', tint: 'mint', kind: 'say', text: 'app_t_soon_students_text', bub: 'app_t_soon_students_bub' },
    { id: 'homework', label: 'app_t_nav_homework', icon: 'homework', group: 'teach', part: 4, art: 'monster', tint: 'coral', kind: 'say', text: 'app_t_soon_homework_text', bub: 'app_t_soon_homework_bub' },
    { id: 'material', label: 'app_t_nav_material', icon: 'material', group: 'make', part: 5, art: 'owl', tint: 'sun', kind: 'think', text: 'app_t_soon_material_text', bub: 'app_t_soon_material_bub' },
    { id: 'messages', label: 'app_t_nav_messages', icon: 'messages', group: 'account', part: 6, art: 'alien', tint: 'mint', kind: 'say', text: 'app_t_soon_messages_text', bub: 'app_t_soon_messages_bub' },
    { id: 'payouts', label: 'app_t_nav_payouts', icon: 'payouts', group: 'account', part: 6, art: 'suitcase', tint: 'sun', kind: 'think', text: 'app_t_soon_payouts_text', bub: 'app_t_soon_payouts_bub' },
    { id: 'settings', label: 'app_t_nav_settings', icon: 'settings', group: 'account', part: 6, art: 'cat', tint: 'bone', kind: 'think', text: 'app_t_soon_settings_text', bub: 'app_t_soon_settings_bub' }
  ];
  var GROUPS = { teach: 'app_t_group_teach', make: 'app_t_group_make', account: 'app_t_group_account' };
  var TINTS = { sun: 'var(--t-sun)', mint: 'var(--t-mint)', coral: 'var(--t-coral)', leaf: 'var(--t-lime)', bone: 'var(--bone)' };
  var BAR = ['today', 'classes', 'students', 'homework'];
  var byId = {}; ROUTES.forEach(function (r) { byId[r.id] = r; });
  var TIERS = { community: 'app_tier_community', focused: 'app_tier_focused', intensive: 'app_tier_intensive', onetoone: 'app_tier_onetoone', private: 'app_tier_private', daily: 'app_tier_daily' };
  var DAYS = { Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6 };

  var app, view, top, sheet, loadingScreen;
  var D = null;
  var mode = 'sample'; /* 'real', 'sample' (signed out), 'forced' (?sample=1), 'noprofile', 'admin', 'pending', 'error' */

  var MIN = 60000, HOUR = 3600000, DAY = 86400000;
  function firstName(n) { n = String(n || '').trim().split(/\s+/)[0] || ''; return cap(n); }
  function initials(n) {
    var p = String(n || '').trim().split(/\s+/).filter(Boolean);
    return ((p[0] || '').charAt(0) + (p.length > 1 ? p[p.length - 1].charAt(0) : '')).toLocaleUpperCase(locale) || 'A';
  }
  function cohortOf(id) { return (D.cohorts || []).filter(function (c) { return c.id === id; })[0] || {}; }
  function className(co) {
    var n = (languageName(co.language) + ' ' + (co.level || '')).trim();
    return TIERS[co.tier] ? t('app_t_class_tier', { course: n, tier: t(TIERS[co.tier]) }) : n;
  }
  function time(d) { return fmt(d, { hour: '2-digit', minute: '2-digit' }); }
  function dayName(d) {
    var x = new Date(d), today = new Date(); today.setHours(0, 0, 0, 0);
    var days = Math.round((new Date(x).setHours(0, 0, 0, 0) - today) / DAY);
    if (days >= -1 && days <= 1) return cap(new Intl.RelativeTimeFormat(locale, { numeric: 'auto' }).format(days, 'day'));
    return cap(fmt(x, days > 1 && days < 7 ? { weekday: 'long' } : { weekday: 'long', day: 'numeric', month: 'long' }));
  }
  function relative(ms) {
    var rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
    var a = Math.abs(ms), s = ms < 0 ? -1 : 1;
    if (a < HOUR) return rtf.format(s * Math.max(1, Math.round(a / MIN)), 'minute');
    if (a < DAY) return rtf.format(s * Math.round(a / HOUR), 'hour');
    return rtf.format(s * Math.round(a / DAY), 'day');
  }
  function weekday(n) { return fmt(Date.UTC(2024, 0, 7 + n, 12), { weekday: 'long', timeZone: 'UTC' }); }
  function browserZone() { try { return Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) { return ''; } }

  /* ---------- Shell ---------- */
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
    var tp = D.teacher || {}, students = (D.cohorts || []).reduce(function (n, c) { return n + (c.enrolled_count || 0); }, 0);
    app.innerHTML =
      '<a class="skip" href="#view">' + esc(t('app_skip')) + '</a>' +
      '<aside class="side" aria-label="' + esc(t('app_main')) + '">' +
        '<a class="brand" href="#/today" aria-label="' + esc(t('app_home_link')) + '">' + Cast.book('idle') + Cast.wordmark() + '</a>' +
        '<nav class="nav" aria-label="' + esc(t('app_sections')) + '">' + navLinks() + '</nav>' +
        '<div class="side__foot"><a class="buddy-card" href="#/classes">' + Cast.drawing('owl') +
          '<div><b>' + esc(tp.full_name || '') + '</b><small>' + esc(tn('app_t_classes_n', (D.cohorts || []).length) + ', ' + tn('app_t_students_n', students)) + '</small></div></a></div>' +
      '</aside>' +
      '<div class="main">' +
        '<header class="top">' +
          '<a class="top__brand" href="#/today" aria-label="' + esc(t('app_home_link')) + '">' + Cast.book('idle') + Cast.wordmark() + '</a>' +
          '<p class="top__title" aria-hidden="true"></p>' +
          '<div class="top__actions"><a class="avatar" href="#/settings" aria-label="' + esc(t('app_account')) + '">' + esc(initials(tp.full_name)) + '</a></div>' +
        '</header>' +
        '<main class="view" id="view" tabindex="-1"></main>' +
      '</div>' +
      '<nav class="bar" aria-label="' + esc(t('app_sections')) + '">' +
        BAR.map(function (id) { var r = byId[id]; return '<a href="#/' + id + '" data-route="' + id + '">' + icon(r.icon) + '<span>' + esc(t(r.label)) + '</span></a>'; }).join('') +
        '<button type="button" data-more aria-haspopup="dialog" aria-expanded="false">' + icon('more') + '<span>' + esc(t('app_nav_more')) + '</span></button>' +
      '</nav>' +
      '<div class="sheet-scrim" data-close></div>' +
      '<div class="sheet" role="dialog" aria-modal="true" aria-label="' + esc(t('app_more_sections')) + '"><div class="sheet__grip"></div><nav class="nav">' + navLinks() + '</nav></div>';
    view = app.querySelector('.view');
    top = app.querySelector('.top');
    sheet = app.querySelector('.sheet');
  }

  /* ---------- Today ---------- */
  function greeting(name) {
    var h = new Date().getHours();
    var g = t(h < 12 ? 'app_greet_morning' : h < 18 ? 'app_greet_afternoon' : 'app_greet_evening');
    return name ? t('app_greet_named', { greeting: g, name: name }) : g;
  }
  function live(s) { return s.status !== 'cancelled' && s.status !== 'completed'; }
  function isOpen(s) { var a = new Date(s.at).getTime(), now = Date.now(); return s.status === 'live' || (now >= a - 15 * MIN && now <= a + 90 * MIN); }
  function nextSession() { var now = Date.now(); return (D.sessions || []).filter(function (s) { return live(s) && new Date(s.at).getTime() + 90 * MIN > now; })[0] || null; }
  /* Classes that have ended (an hour after the start) without published notes, in the last two weeks */
  function notesDue() {
    var now = Date.now();
    return (D.sessions || []).filter(function (s) { return s.status !== 'cancelled' && new Date(s.at).getTime() + HOUR < now && s.notes !== 'published'; });
  }
  function otoNotesDue() { var now = Date.now(); return (D.oto || []).filter(function (b) { return b.status === 'booked' && !b.noted && new Date(b.at).getTime() < now; }); }

  function nextCard() {
    var s = nextSession();
    var head = '<section class="card card--forest span-8' + (s ? '' : ' card--center') + '" style="--i:1" aria-labelledby="h-next">';
    if (!s) {
      var none = (D.cohorts || []).length ? ['app_t_next_none_h', 'app_t_next_none_p'] : ['app_t_next_noclass_h', 'app_t_next_noclass_p'];
      return head + '<div class="card__row card__row--split"><div><h2 class="t-h1" id="h-next">' + esc(t(none[0])) + '</h2>' +
        '<p class="t-lead" style="margin-top:12px">' + esc(t(none[1])) + '</p></div><div class="card__art card__art--lg">' + Cast.drawing('mug') + '</div></div></section>';
    }
    var co = cohortOf(s.cohortId), start = new Date(s.at).getTime(), now = Date.now(), open = isOpen(s);
    var when = s.status === 'live' ? t('app_t_live_now') : start > now ? t('app_t_starts', { when: relative(start - now) }) : t('app_t_started');
    var btn = !open ? '' : mode === 'real'
      ? '<a class="btn btn--lime" href="#/classes/live/' + esc(s.id) + '" data-start>' + icon('play') + esc(t('app_t_start')) + '</a>'
      : '<button class="btn btn--lime" type="button" data-start-sample>' + icon('play') + esc(t('app_t_start')) + '</button>';
    return head + '<h2 class="t-h1" id="h-next">' + esc(t('app_t_next_when', { day: dayName(s.at), time: time(s.at) })) + '</h2>' +
      '<p class="t-lead" style="margin-top:12px">' + esc(t('app_t_next_line', { class: className(co), students: tn('app_t_students_n', co.enrolled_count || 0), when: when })) + '</p>' +
      '<div class="btn-row" style="margin-top:26px">' + btn +
        '<a class="btn btn--ghost btn--on-forest" href="#/classes/notes/' + esc(s.id) + '">' + esc(t('app_t_prepare')) + '</a></div></section>';
  }
  function stage() {
    var s = nextSession(), key;
    if (s && isOpen(s)) key = 'app_t_bub_live';
    else if (!notesDue().length && !(D.waiting || []).length) key = 'app_t_bub_clear';
    else key = ['app_t_bub_1', 'app_t_bub_2', 'app_t_bub_3'][new Date().getDate() % 3];
    return '<section class="stage span-4" style="--i:2;background:var(--t-sun)" aria-hidden="true"><div class="bub say">' + esc(t(key)) + '</div>' + Cast.drawing('owl') + '</section>';
  }
  function todo() {
    var items = [], nd = notesDue(), w = D.waiting || [], od = otoNotesDue();
    if (nd.length) {
      var s = nd[nd.length - 1];
      items.push({ art: 'pencil', tint: 'mint', href: '#/classes/notes/' + s.id, h: tn('app_t_notes_n', nd.length), p: t('app_t_notes_p', { class: className(cohortOf(s.cohortId)), day: dayName(s.at) }) });
    }
    if (w.length) items.push({ art: 'monster', tint: 'coral', href: '#/homework', h: tn('app_t_grade_n', w.length), p: t('app_t_grade_p', { name: firstName(w[0].student), when: relative(new Date(w[0].at).getTime() - Date.now()) }) });
    if (D.unread) items.push({ art: 'alien', tint: 'sun', href: '#/messages', h: tn('app_t_unread_n', D.unread), p: t('app_t_unread_p') });
    if (od.length) items.push({ art: 'mug', tint: 'leaf', href: '#/classes/oto/' + od[0].id, h: tn('app_t_oto_notes_n', od.length), p: t('app_t_oto_notes_p', { name: firstName(od[0].student) }) });
    if (!items.length) items.push({ art: 'sun', tint: 'leaf', href: '#/material', h: t('app_t_clear_h'), p: t('app_t_clear_p') });
    var span = items.length === 1 ? 12 : items.length === 3 ? 4 : 6;
    return '<h2 class="t-h2 span-12 home__section" style="--i:3">' + esc(t('app_t_todo_h')) + '</h2>' +
      items.map(function (it, i) {
        var art = it.art === 'pencil' && Cast.spot ? Cast.spot('pencil') : Cast.drawing(it.art === 'pencil' ? 'owl' : it.art);
        return '<a class="card card--' + it.tint + ' span-' + span + '" style="--i:' + (4 + i) + '" href="' + it.href + '">' +
          '<div class="card__row"><div class="card__art">' + art + '</div>' +
          '<div><h3 class="t-h3">' + esc(it.h) + '</h3><p class="t-small" style="margin-top:8px">' + esc(it.p) + '</p></div></div></a>';
      }).join('');
  }
  /* The next seven days: classes and 1:1s, day by day */
  function weekCard() {
    var now = Date.now(), end = now + 7 * DAY, ev = [];
    (D.sessions || []).forEach(function (s) {
      var a = new Date(s.at).getTime();
      if (s.status !== 'cancelled' && a + 90 * MIN > now && a < end) { var co = cohortOf(s.cohortId); ev.push({ at: s.at, h: className(co), p: tn('app_t_students_n', co.enrolled_count || 0), href: '#/classes/notes/' + s.id }); }
    });
    (D.oto || []).forEach(function (b) {
      var a = new Date(b.at).getTime();
      if (b.status === 'booked' && a + (b.minutes + 15) * MIN > now && a < end) ev.push({ at: b.at, h: t(b.kind === 'followup' ? 'app_t_oto_followup' : 'app_t_oto_private', { name: b.student }), p: t('app_t_minutes', { n: b.minutes }), href: '#/classes' });
    });
    ev.sort(function (a, b) { return new Date(a.at) - new Date(b.at); });
    var html = '<section class="card span-7" style="--i:8" aria-labelledby="h-week"><h2 class="t-h2" id="h-week">' + esc(t('app_t_week_h')) + '</h2>';
    if (!ev.length) return html + '<p class="t-body" style="margin-top:12px">' + esc(t('app_t_week_none')) + '</p></section>';
    var last = '';
    html += '<div class="tt-week">';
    ev.forEach(function (e) {
      var d = new Date(e.at).toDateString();
      if (d !== last) { html += '<h3 class="t-small tt-week__day">' + esc(dayName(e.at)) + '</h3>'; last = d; }
      html += '<a class="tt-row" href="' + e.href + '"><span class="tt-row__time">' + esc(time(e.at)) + '</span><span><b>' + esc(e.h) + '</b><small>' + esc(e.p) + '</small></span></a>';
    });
    return html + '</div></section>';
  }
  function classesCard() {
    var cos = (D.cohorts || []).filter(function (c) { return c.status !== 'closed' && c.status !== 'cancelled'; });
    var html = '<section class="card span-5" style="--i:9" aria-labelledby="h-classes"><h2 class="t-h2" id="h-classes">' + esc(t('app_t_classes_h')) + '</h2>';
    if (!cos.length) return html + '<p class="t-body" style="margin-top:12px">' + esc(t('app_t_classes_none')) + '</p><div class="btn-row" style="margin-top:18px"><a class="btn btn--primary btn--sm" href="#/classes">' + esc(t('app_t_classes_create')) + '</a></div></section>';
    var bz = browserZone();
    return html + '<div class="tt-week">' + cos.map(function (co) {
      var days = (co.schedule_days || []).map(function (d) { return DAYS[d] != null ? weekday(DAYS[d]) : d; });
      var at = co.schedule_time ? String(co.schedule_time).slice(0, 5) : '';
      var when = days.length && at ? t('app_t_schedule', { days: listOf(days), time: at }) + (co.timezone && co.timezone !== bz ? ' (' + co.timezone.replace(/_/g, ' ') + ')' : '') : '';
      return '<a class="tt-row" href="#/students"><span class="tt-row__time">' + esc(String(co.enrolled_count || 0) + '/' + String(co.max_students || '')) + '</span>' +
        '<span><b>' + esc(className(co)) + '</b><small>' + esc(when) + '</small></span></a>';
    }).join('') + '</div></section>';
  }
  function waitingCard() {
    var w = D.waiting || [];
    if (!w.length) return '';
    return '<section class="card span-12" style="--i:10" aria-labelledby="h-wait"><div class="card__row card__row--split"><div style="flex:1;min-width:0"><h2 class="t-h2" id="h-wait">' + esc(t('app_t_wait_h')) + '</h2>' +
      '<div class="tt-week">' + w.slice(0, 4).map(function (s) {
        return '<a class="tt-row tt-row--wide" href="#/homework/' + esc(s.id) + '"><span class="tt-row__time">' + esc(cap(relative(new Date(s.at).getTime() - Date.now()))) + '</span>' +
          '<span><b>' + esc(s.student) + '</b><small>' + esc(s.title) + '</small></span></a>';
      }).join('') + '</div></div><div class="card__art card__art--lg">' + Cast.drawing('monster') + '</div></div></section>';
  }
  function sampleNote() {
    if (mode === 'real') return '';
    var p, btn = '';
    if (mode === 'forced') { p = t('app_t_sample_forced'); btn = '<a class="btn btn--primary btn--sm" href="' + location.pathname + location.hash + '">' + esc(t('app_t_sample_mine')) + '</a>'; }
    else if (mode === 'noprofile') { p = t('app_t_sample_noprofile'); btn = '<a class="btn btn--primary btn--sm" href="/app/preview">' + esc(t('app_t_sample_student')) + '</a>'; }
    else if (mode === 'admin') p = t('app_t_sample_admin');
    else if (mode === 'error') { p = t('app_sample_error'); btn = '<button class="btn btn--primary btn--sm" type="button" data-retry>' + esc(t('app_retry')) + '</button>'; }
    else { p = t('app_t_sample_p'); btn = '<a class="btn btn--primary btn--sm" href="/signin.html">' + esc(t('app_sample_signin')) + '</a>'; }
    return '<section class="card card--bone span-12 sample-note" style="--i:0" role="note">' +
      '<div class="card__row" style="flex-wrap:wrap"><div style="flex:1;min-width:220px"><h2 class="t-h3">' + esc(t('app_sample_h')) + '</h2>' +
      '<p class="t-small" style="margin-top:6px">' + esc(p) + '</p></div>' + btn + '</div></section>';
  }
  function todayView() {
    return '<div class="view__head"><div><h1 class="t-h1">' + esc(greeting(firstName((D.teacher || {}).full_name))) + '</h1>' +
        '<p class="t-lead">' + esc(cap(fmt(Date.now(), { weekday: 'long', day: 'numeric', month: 'long' }))) + '</p></div></div>' +
      '<div class="grid rise">' + sampleNote() + nextCard() + stage() + todo() + weekCard() + classesCard() + waitingCard() + '</div>';
  }
  /* A teacher whose application is still being reviewed */
  function pendingView() {
    return '<div class="view__head"><div><h1 class="t-h1">' + esc(greeting(firstName((D.teacher || {}).full_name))) + '</h1></div></div>' +
      '<div class="soon rise"><div class="stage" style="--i:0;background:var(--t-mint)"><div class="bub think">' + esc(t('app_t_pending_bub')) + '</div>' + Cast.drawing('owl') + '</div>' +
      '<div class="card" style="--i:1"><h2 class="t-h2">' + esc(t('app_t_pending_h')) + '</h2><p class="t-body">' + esc(t('app_t_pending_p')) + '</p>' +
      '<div class="btn-row"><a class="btn btn--primary" href="/contact">' + esc(t('app_t_pending_contact')) + '</a></div></div></div>';
  }
  var SPOTS = { classes: 'calendar', students: 'chart', homework: 'pencil', material: 'books', messages: 'envelope', payouts: 'plant', settings: 'plant' };
  function soonView(r) {
    var spot = SPOTS[r.id] && Cast.spot ? '<div class="soon__spot">' + Cast.spot(SPOTS[r.id]) + '</div>' : '';
    return '<div class="view__head"><div><h1 class="t-h1">' + esc(t(r.label)) + '</h1><p class="t-lead">' + esc(t(r.text)) + '</p></div></div>' +
      '<div class="soon rise">' +
        '<div class="stage" style="--i:0;background:' + TINTS[r.tint] + '"><div class="bub ' + r.kind + '">' + esc(t(r.bub)) + '</div>' + Cast.drawing(r.art) + '</div>' +
        '<div class="card" style="--i:1">' + spot + '<h2 class="t-h2">' + esc(t('app_t_soon_h', { part: r.part })) + '</h2>' +
          '<p class="t-body">' + esc(t('app_t_soon_p')) + '</p>' +
          '<div class="btn-row"><a class="btn btn--primary" href="#/today">' + esc(t('app_t_soon_back')) + '</a>' +
          (mode === 'real' ? '<a class="btn btn--quiet" href="/teacher-dashboard">' + esc(t('app_t_soon_old')) + '</a>' : '') + '</div></div>' +
      '</div>';
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
  function setSheet(open) {
    document.body.classList.toggle('is-sheet-open', open);
    app.querySelector('[data-more]').setAttribute('aria-expanded', String(open));
    if (open) { var a = sheet.querySelector('a'); if (a) a.focus(); }
  }

  /* ---------- Sections drawn by their own files ---------- */
  /* Helpers for js/app/teach-classes.js and the parts after it */
  var helpers = {
    t: t, tn: tn, esc: esc, icon: icon, Cast: Cast, lang: lang, locale: locale, cap: cap, languageName: languageName, listOf: listOf, fmt: fmt,
    loaderInner: loaderInner, dayName: dayName, relative: relative, className: className, weekday: weekday, browserZone: browserZone,
    mode: function () { return mode; }, rerender: function () { render(current, false); }
  };
  var MODULES = { classes: function () { return window.AlimunTeachClasses; }, students: function () { return window.AlimunTeachStudents; } };
  function partsOf(id) { return location.hash.replace(new RegExp('^#\\/' + id + '\\/?'), '').split('/').filter(Boolean); }

  /* ---------- Routing ---------- */
  var current = null;
  function routeFromHash() {
    var id = (location.hash.match(/^#\/([a-z]+)/) || [])[1];
    return byId[id] ? id : 'today';
  }
  function render(id, animate) {
    var r = byId[id];
    var mod = mode !== 'pending' && MODULES[id] ? MODULES[id]() : null;
    var html = mode === 'pending' ? pendingView() : id === 'today' ? todayView() : mod ? '' : soonView(r);
    var swap = function () {
      Object.keys(MODULES).forEach(function (k) { var m = MODULES[k](); if (m) m.reset(); });
      view.innerHTML = html;
      view.classList.remove('is-leaving');
      document.title = t(r.label) + ' – Alimun';
      if (mod) mod.mount(view, partsOf(id), helpers).then(function (res) { if (current === id && res && !res.stale && res.title) document.title = res.title + ' – Alimun'; });
      top.querySelector('.top__title').textContent = t(r.label);
      app.querySelectorAll('[data-route]').forEach(function (a) {
        if (a.getAttribute('data-route') === id) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
      });
      app.querySelector('[data-more]').classList.toggle('is-active', BAR.indexOf(id) === -1);
      if (animate) { window.scrollTo(0, 0); view.focus({ preventScroll: true }); }
    };
    if (animate && current) { view.classList.add('is-leaving'); setTimeout(swap, 150); } else swap();
    current = id;
  }

  /* ---------- Data ---------- */
  /* A week of a teacher with two classes, built around now */
  function sample() {
    var now = Math.ceil(Date.now() / (5 * MIN)) * 5 * MIN, h = function (x) { return new Date(now + Math.round(x * 12) * 5 * MIN).toISOString(); };
    var a = { id: 'c1', language: 'German', level: 'B1', goal_track: 'relocation', tier: 'focused', max_students: 17, enrolled_count: 9, schedule_days: ['Tuesday', 'Thursday'], schedule_time: '18:30', timezone: browserZone(), status: 'open' };
    var b = { id: 'c2', language: 'German', level: 'A2', goal_track: 'foundations', tier: 'intensive', max_students: 6, enrolled_count: 5, schedule_days: ['Monday', 'Wednesday', 'Friday'], schedule_time: '09:00', timezone: browserZone(), status: 'open' };
    return {
      teacher: { full_name: 'Ana Weber' }, cohorts: [a, b],
      sessions: [
        { id: 's1', cohortId: 'c1', at: h(-50), status: 'completed', notes: null },
        { id: 's2', cohortId: 'c2', at: h(-26), status: 'completed', notes: 'published' },
        { id: 's3', cohortId: 'c1', at: h(0.1), status: 'scheduled', notes: null },
        { id: 's4', cohortId: 'c2', at: h(20), status: 'scheduled', notes: null },
        { id: 's5', cohortId: 'c1', at: h(48), status: 'scheduled', notes: null },
        { id: 's6', cohortId: 'c2', at: h(68), status: 'scheduled', notes: null }
      ],
      waiting: [
        { id: 'w1', at: h(-40), student: 'Lukas Brandt', title: 'Ein Brief an den Vermieter', type: 'Essay', cohortId: 'c1' },
        { id: 'w2', at: h(-30), student: 'Mei Chen', title: 'Ein Brief an den Vermieter', type: 'Essay', cohortId: 'c1' },
        { id: 'w3', at: h(-5), student: 'Omar Haddad', title: 'Mein Wochenende', type: 'Speaking', cohortId: 'c2' }
      ],
      oto: [
        { id: 'o1', kind: 'followup', at: h(-22), minutes: 20, status: 'booked', noted: false, student: 'Sara Rossi' },
        { id: 'o2', kind: 'followup', at: h(26), minutes: 20, status: 'booked', noted: false, student: 'Mei Chen' }
      ],
      unread: 2
    };
  }
  function loadData() {
    if (/[?&]sample=1/.test(location.search)) { mode = 'forced'; return Promise.resolve(sample()); }
    return window.AlimunData.teacherToday().then(function (d) {
      if (d && d.teacher && d.pending) { mode = 'pending'; return d; }
      if (d && d.teacher) { mode = 'real'; return d; }
      mode = !d || !d.signedIn ? 'sample' : d.role === 'admin' ? 'admin' : 'noprofile';
      return sample();
    }, function (err) {
      console.warn('[Alimun] Teacher data did not load', err && err.message);
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
    window.addEventListener('hashchange', function () { if (!D) return; setSheet(false); var id = routeFromHash(); if (id !== current || MODULES[id]) render(id, true); });
    window.addEventListener('scroll', function () { if (top) top.classList.toggle('is-scrolled', window.scrollY > 8); }, { passive: true });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && D) setSheet(false); });
    /* Today is drawn from the data loaded at the start: refresh it every five minutes so counts and Start stay right */
    setInterval(function () {
      if (mode !== 'real' || document.hidden) return;
      window.AlimunData.teacherToday().then(function (d) { if (d && d.teacher && !d.pending) { D = d; if (current === 'today') render('today', false); } }, function () { /* keep what is shown */ });
    }, 5 * MIN);
    app.addEventListener('click', function (e) {
      var el = e.target.closest('[data-more],[data-close],[data-start],[data-start-sample],[data-retry]');
      if (!el) return;
      if (el.hasAttribute('data-more')) setSheet(!document.body.classList.contains('is-sheet-open'));
      else if (el.hasAttribute('data-close')) setSheet(false);
      else if (el.hasAttribute('data-start-sample')) showLoader(t('app_t_loading_start'), 2200);
      else if (el.hasAttribute('data-start')) showLoader(t('app_t_loading_start'), 1600);
      else if (el.hasAttribute('data-retry')) {
        showLoader(t('app_loading_open'));
        loadData().then(function (d) { D = d; current = null; start(); hideLoader(); });
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
