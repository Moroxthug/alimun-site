/* Alimun app: finding a class, the waiting list and reviews (docs/DASHBOARD_PLAN.md, step 16, part 1).
   Routes inside Classes (js/app/classes.js hands them over):
   #/classes/find             the open and full classes of the student's language, their waiting lists, and the email
                              when a new class opens (student_profiles.waitlist_opt_in)
   #/classes/find/<class>     a class with its teacher's public profile and reviews; joining, switching to it, or
                              the waiting list when it is full (/api/enroll checks plan, language and seats again)
   #/classes/offer/<entry>    a place offered from the waiting list, taken within its 48 hours
   #/classes/review/<teacher> the student's review of a teacher who has taught them (stars and words, editable)
   Classes also shows "Your class" (review, switch, leave) and an offered place through yourClassHtml() and offerHtml().
   Times are the student's; the class's own time is shown beside them when it differs.
   Sample data (signed out or ?sample=1): nothing is sent anywhere. Interface text: app_fd_* keys. */
(function () {
  'use strict';
  var A = null, root = null, F = null, FLASH = null;
  var DAY = 86400000;
  var WEIGHT = { community: 1, focused: 2, intensive: 3, private: 4 };
  var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real' && A.data().profile && A.data().profile.id; }
  function P() { return A.data().profile; }

  /* ---------- Time ---------- */
  function zone() {
    var tz = P().timezone;
    try { if (tz && tz !== 'UTC') { new Intl.DateTimeFormat('en', { timeZone: tz }); return tz; } } catch (e) { /* not a zone */ }
    try { return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'; } catch (e) { return 'UTC'; }
  }
  function fmt(iso, o, tz) { return new Intl.DateTimeFormat(A.locale, Object.assign({ timeZone: tz || zone() }, o)).format(new Date(iso)); }
  function when(iso) { return fmt(iso, { weekday: 'long', day: 'numeric', month: 'long' }) + ', ' + fmt(iso, { hour: '2-digit', minute: '2-digit' }); }
  /* The next dates of a class, from its timetable (its dates are not visible before joining) */
  function nextDates(c, n) {
    var TZ = window.AlimunTZ;
    if (!TZ || !c.schedule_days || !c.schedule_time) return [];
    var idx = c.schedule_days.map(function (d) { return DAYS.indexOf(d); }).filter(function (i) { return i > -1; });
    var tz = TZ.isValidTimezone(c.timezone) ? c.timezone : 'UTC';
    return TZ.scheduleOccurrences(idx, String(c.schedule_time).slice(0, 5), tz, new Date()).filter(function (d) { return d.getTime() > Date.now(); }).slice(0, n || 3);
  }
  /* "Tuesdays and Thursdays at 18:30" in the student's time, from the next dates */
  function timetable(c) {
    var ds = nextDates(c, 7);
    if (!ds.length) return '';
    var seen = {}, list0 = [];
    ds.forEach(function (d) {
      var i = WD[new Intl.DateTimeFormat('en-US', { weekday: 'short', timeZone: zone() }).format(d)];
      if (!seen[i]) { seen[i] = true; list0.push({ i: (i + 6) % 7, name: fmt(d.toISOString(), { weekday: 'long' }) }); }
    });
    var names = list0.sort(function (a, b) { return a.i - b.i; }).map(function (x) { return x.name; });
    var list = names.length < 2 ? names[0] : typeof Intl.ListFormat === 'function' ? new Intl.ListFormat(A.locale, { type: 'conjunction' }).format(names) : names.join(', ');
    return t('app_fd_timetable', { days: list, time: fmt(ds[0].toISOString(), { hour: '2-digit', minute: '2-digit' }) });
  }
  function classTime(c) {
    var ds = nextDates(c, 1), tz = c.timezone;
    if (!ds.length || !tz || tz === zone()) return '';
    var mine = fmt(ds[0].toISOString(), { hour: '2-digit', minute: '2-digit' }), theirs = fmt(ds[0].toISOString(), { hour: '2-digit', minute: '2-digit' }, tz);
    return mine === theirs ? '' : t('app_fd_class_time', { time: theirs, zone: tz.replace(/_/g, ' ') });
  }
  /* Whether every date of the class falls on the days the student chose in Settings (0 is Sunday) */
  var WD = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  function fits(c) {
    var mine = (P().days || []).map(Number);
    if (!mine.length) return false;
    var ds = nextDates(c, 7);
    return ds.length > 0 && ds.every(function (d) { return mine.indexOf(WD[new Intl.DateTimeFormat('en-US', { weekday: 'short', timeZone: zone() }).format(d)]) > -1; });
  }
  function course(c) { return A.languageName(c.language) + ' ' + c.level; }
  function planName(tier) { return t('app_tier_' + tier); }
  function seatsLeft(c) { return Math.max(0, (c.max_students || 0) - (c.enrolled_count || 0)); }
  function teacherName(c) { return c.teacher_profiles && c.teacher_profiles.full_name || ''; }

  /* ---------- Data ---------- */
  function sample() {
    var lang = P().language || 'German', lvl = P().level || 'B1';
    var teacher = function (id, name, spec, years, bio, rating) { return { id: id, full_name: name, specialty: spec, experience_years: years, bio: bio, rating: rating, sessions_delivered: years * 40 }; };
    var classes = [
      { id: 'x1', language: lang, level: lvl, tier: 'focused', schedule_days: ['Tuesday', 'Thursday'], schedule_time: '18:30', timezone: 'Europe/Berlin', status: 'open', enrolled_count: 9, max_students: 17, teacher_id: 't1', description: 'Everyday life after a move: flats, work and appointments.', teacher_profiles: teacher('t1', 'Ana Weber', 'Moving abroad', 12, 'I have taught adults for twelve years, most of them new to the country.', 4.9) },
      { id: 'x2', language: lang, level: lvl, tier: 'intensive', schedule_days: ['Monday', 'Wednesday', 'Friday'], schedule_time: '09:00', timezone: 'Europe/Berlin', status: 'full', enrolled_count: 6, max_students: 6, teacher_id: 't2', description: '', teacher_profiles: teacher('t2', 'Jonas Keller', 'Exams', 6, 'Preparation for the Goethe and telc exams.', 0) },
      { id: 'x3', language: lang, level: lvl === 'A1' ? 'A2' : 'A2', tier: 'community', schedule_days: ['Saturday'], schedule_time: '10:00', timezone: 'Europe/London', status: 'open', enrolled_count: 20, max_students: 35, teacher_id: 't3', description: '', teacher_profiles: teacher('t3', 'Clara Vidal', 'Conversation', 4, '', 0) }
    ];
    var reviews = { t1: [{ rating: 5, review_text: 'Clear and patient. I finally understand the cases.', created_at: new Date(Date.now() - 9 * DAY).toISOString() }], t2: [], t3: [] };
    return { sample: true, classes: classes, reviews: reviews, waits: [{ id: 'w1', cohort_id: 'x2', added_at: new Date(Date.now() - 4 * DAY).toISOString(), offered_at: null, offer_expires_at: null, cohorts: classes[1] }] };
  }
  function load() {
    if (!real()) return Promise.resolve(F && F.sample ? F : sample());
    var p = P();
    return Promise.all([window.AlimunData.findClasses(p.language), window.AlimunData.myWaitlist(p.id)]).then(function (r) {
      return { classes: r[0], waits: r[1].filter(function (w) { return w.cohorts; }), reviews: {} };
    });
  }
  function classOf(id) { return F.classes.filter(function (c) { return c.id === id; })[0] || (F.waits.filter(function (w) { return w.cohort_id === id; })[0] || {}).cohorts || null; }
  function waitFor(id) { return F.waits.filter(function (w) { return w.cohort_id === id; })[0] || null; }
  function inClass(id) { return (P().cohorts || []).indexOf(id) > -1; }

  /* ---------- Find a class ---------- */
  var level = '';
  function findView() {
    var p = P(), list = F.classes.filter(function (c) { return !level || c.level === level; });
    list.sort(function (a, b) { return (a.level === p.level ? 0 : 1) - (b.level === p.level ? 0 : 1) || (fits(b) ? 1 : 0) - (fits(a) ? 1 : 0) || a.level.localeCompare(b.level); });
    var html = takeFlash() + '<a class="rd-back" href="#/classes">' + A.icon('back') + '<span>' + esc(t('app_nav_classes')) + '</span></a>' +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_fd_title')) + '</h1><p class="t-lead">' + esc(t('app_fd_lead', { language: A.languageName(p.language) })) + '</p></div>' +
      '<p class="t-small cl-zone">' + esc(t('app_cl_zone', { zone: zone().replace(/_/g, ' ') })) + '</p></div><div class="grid rise">';
    if (A.data().offer) html += offerHtml(A.data().offer, 0);
    if (F.waits.length) {
      html += '<section class="card span-12" style="--i:1" aria-labelledby="h-waits"><h2 class="t-h2" id="h-waits">' + esc(t('app_fd_waits_h')) + '</h2><div class="tt-week">' + F.waits.map(function (w) {
        var c = w.cohorts;
        return '<a class="tt-row tt-row--wide" href="#/classes/find/' + esc(c.id) + '"><span class="tt-row__time">' + esc(c.level) + '</span><span><b>' + esc(course(c) + ', ' + planName(c.tier)) + '</b><small>' +
          esc([teacherName(c) ? t('app_cl_with', { name: teacherName(c) }) : '', t('app_fd_wait_since', { date: fmt(w.added_at, { day: 'numeric', month: 'long' }) })].filter(Boolean).join(' · ')) + '</small></span></a>';
      }).join('') + '</div></section>';
    }
    var levels = F.classes.map(function (c) { return c.level; }).filter(function (v, i, a) { return a.indexOf(v) === i; }).sort();
    html += '<section class="card span-12" style="--i:2" aria-label="' + esc(t('app_fd_title')) + '">' +
      (levels.length > 1 ? '<div class="fd-filter"><label class="st-field"><span class="st-lbl">' + esc(t('app_fd_level')) + '</span><select class="st-in" data-fd="level">' +
        '<option value="">' + esc(t('app_fd_level_all')) + '</option>' + LEVELS.filter(function (l) { return levels.indexOf(l) > -1; }).map(function (l) { return '<option value="' + l + '"' + (l === level ? ' selected' : '') + '>' + l + '</option>'; }).join('') + '</select></label></div>' : '') +
      (list.length ? '<div class="tt-week">' + list.map(rowHtml).join('') + '</div>' : '<h3 class="t-h3">' + esc(t('app_fd_none_h')) + '</h3><p class="t-body" style="margin-top:6px">' + esc(t('app_fd_none_p', { language: A.languageName(p.language) })) + '</p>') + '</section>';
    html += optInHtml(3);
    if (F.sample) html += '<p class="t-tiny span-12">' + esc(t('app_fd_sample')) + '</p>';
    return html + '</div>';
  }
  function rowHtml(c) {
    var full = c.status === 'full' || seatsLeft(c) < 1, bits = [timetable(c), teacherName(c) ? t('app_cl_with', { name: teacherName(c) }) : '',
      inClass(c.id) ? t('app_fd_yours_short') : waitFor(c.id) ? t('app_fd_waiting_short') : full ? t('app_fd_full') : A.tn('app_fd_seats', seatsLeft(c))];
    return '<a class="tt-row tt-row--wide fd-row" href="#/classes/find/' + esc(c.id) + '"><span class="tt-row__time">' + esc(c.level) + '</span><span><b>' + esc(course(c) + ', ' + planName(c.tier)) + '</b><small>' +
      esc(bits.filter(Boolean).join(' · ')) + '</small>' + (fits(c) ? '<small class="fd-fit">' + esc(t('app_fd_fits')) + '</small>' : '') + '</span></a>';
  }
  function optInHtml(i) {
    var on = P().waitlistOptIn;
    return '<section class="card card--bone span-12" style="--i:' + i + '"><div class="card__row" style="flex-wrap:wrap"><div style="flex:1;min-width:220px"><h2 class="t-h3">' + esc(t('app_fd_optin_h')) + '</h2>' +
      '<p class="t-small" style="margin-top:4px">' + esc(t(on ? 'app_fd_optin_on_p' : 'app_fd_optin_p', { language: A.languageName(P().language) })) + '</p></div>' +
      '<button class="btn btn--' + (on ? 'quiet' : 'primary') + ' btn--sm" type="button" data-fd="optin">' + esc(t(on ? 'app_fd_optin_off' : 'app_fd_optin_on')) + '</button></div><p class="t-small st-msg" data-fdmsg="optin" aria-live="polite"></p></section>';
  }

  /* ---------- A class ---------- */
  function classView(c) {
    var p = P(), tp = c.teacher_profiles || {}, reviews = c.reviews || F.reviews[c.teacher_id] || [];
    var html = takeFlash() + '<a class="rd-back" href="#/classes/find">' + A.icon('back') + '<span>' + esc(t('app_fd_title')) + '</span></a>' +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(course(c) + ', ' + planName(c.tier)) + '</h1><p class="t-lead">' + esc([timetable(c), classTime(c)].filter(Boolean).join('. ')) + '</p></div></div><div class="grid rise">';
    var ds = nextDates(c, 3);
    html += '<section class="card card--forest span-7 cover-card" style="--i:0" aria-labelledby="h-act"><h2 class="t-h2" id="h-act">' + esc(t('app_fd_class_h')) + '</h2>' +
      (c.description ? '<p class="t-body" style="margin-top:8px" dir="auto">' + esc(c.description) + '</p>' : '') +
      (ds.length ? '<p class="t-body" style="margin-top:8px">' + esc(t('app_fd_next', { when: when(ds[0].toISOString()) })) + '</p>' : '') +
      '<p class="t-small fd-seats">' + esc(c.status === 'full' || seatsLeft(c) < 1 ? t('app_fd_full') : A.tn('app_fd_seats', seatsLeft(c))) + '</p>' +
      '<div data-fdact>' + actionHtml(c) + '</div></section>';
    html += '<section class="card span-5" style="--i:1" aria-labelledby="h-tp"><h2 class="t-h2" id="h-tp">' + esc(t('app_fd_teacher_h')) + '</h2><h3 class="t-h3" style="margin-top:8px">' + esc(tp.full_name || '') + '</h3>' +
      '<p class="t-small" style="margin-top:4px">' + esc([tp.specialty, tp.location, tp.experience_years ? A.tn('app_fd_years', tp.experience_years) : '', tp.rating && reviews.length ? t('app_fd_rating', { rating: new Intl.NumberFormat(A.locale, { maximumFractionDigits: 1 }).format(tp.rating) }) : ''].filter(Boolean).join(' · ')) + '</p>' +
      (tp.bio ? '<p class="t-body" style="margin-top:10px" dir="auto">' + esc(tp.bio) + '</p>' : '') +
      '<h3 class="t-h3" style="margin-top:18px">' + esc(t('app_fd_reviews_h')) + '</h3>' + (reviews.length ? '<div class="tt-week">' + reviews.map(function (r) {
        return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(t('app_fd_stars', { n: r.rating })) + '</span><span>' + (r.review_text ? '<span class="ts-note__text" dir="auto">' + esc(r.review_text) + '</span>' : '') + '<small>' + esc(fmt(r.created_at, { day: 'numeric', month: 'long', year: 'numeric' })) + '</small></span></div>';
      }).join('') + '</div>' : '<p class="t-body" style="margin-top:6px">' + esc(t('app_fd_reviews_none')) + '</p>') + '</section>';
    if (F.sample) html += '<p class="t-tiny span-12">' + esc(t('app_fd_sample')) + '</p>';
    return html + '</div>';
  }
  /* What the student can do with this class */
  function actionHtml(c) {
    var p = P(), w = waitFor(c.id), full = c.status === 'full' || seatsLeft(c) < 1, mine = p.cohorts || [];
    var planOk = (real() ? p.paying : true) && (WEIGHT[real() ? p.tier : p.tier || 'focused'] || (real() ? 0 : 2)) >= (WEIGHT[c.tier] || 0);
    var btn = function (k, label, kind) { return '<button class="btn btn--' + (kind || 'lime') + '" type="button" data-fd="' + k + '" data-id="' + esc(c.id) + '">' + esc(t(label)) + '</button>'; };
    var out = '';
    if (inClass(c.id)) out = '<p class="t-body fd-state">' + esc(t('app_fd_yours')) + '</p><div class="btn-row"><a class="btn btn--on-forest" href="#/classes">' + esc(t('app_nav_classes')) + '</a></div>';
    else if (w) {
      var live = w.offer_expires_at && Date.parse(w.offer_expires_at) > Date.now();
      out = live ? '<p class="t-body fd-state">' + esc(t('app_fd_offer_p', { course: course(c), name: teacherName(c), when: when(w.offer_expires_at) })) + '</p><div class="btn-row"><a class="btn btn--lime" href="#/classes/offer/' + esc(w.id) + '">' + esc(t('app_fd_offer_take')) + '</a></div>'
        : '<p class="t-body fd-state">' + esc(t('app_fd_wait_on', { date: fmt(w.added_at, { day: 'numeric', month: 'long' }) })) + '</p><div class="btn-row">' + btn('unwait', 'app_fd_wait_leave', 'on-forest') + '</div>';
    } else if (!planOk) {
      out = '<p class="t-body fd-state">' + esc(t('app_fd_need_plan', { plan: planName(c.tier) })) + '</p><div class="btn-row"><a class="btn btn--lime" href="/tiers">' + esc(t('app_fd_see_plans')) + '</a></div>';
    } else if (full) {
      out = '<p class="t-body fd-state">' + esc(t('app_fd_full_p')) + '</p><div class="btn-row">' + btn('wait', 'app_fd_wait_join') + '</div>';
    } else if (mine.length) {
      out = '<p class="t-body fd-state">' + esc(t('app_fd_switch_note')) + '</p><div class="btn-row">' + btn('switch', 'app_fd_switch') + '</div>';
    } else out = '<div class="btn-row">' + btn('join', 'app_fd_join') + '</div>';
    return out + '<p class="t-small st-msg fd-msg" data-fdmsg="act" aria-live="polite"></p>';
  }

  /* ---------- An offered place ---------- */
  function offerHtml(o, i) {
    return '<section class="card card--forest span-12 fd-offer" style="--i:' + (i || 0) + '" aria-labelledby="h-offer"><h2 class="t-h2" id="h-offer">' + esc(t('app_fd_offer_h')) + '</h2>' +
      '<p class="t-body" style="margin-top:8px">' + esc(t('app_fd_offer_p', { course: A.languageName(o.language) + ' ' + o.level, name: o.teacher, when: when(o.until) })) + '</p>' +
      '<div class="btn-row" style="margin-top:14px"><a class="btn btn--lime" href="#/classes/offer/' + esc(o.id) + '">' + esc(t('app_fd_offer_take')) + '</a></div></section>';
  }
  function offerView(w) {
    var back = '<a class="rd-back" href="#/classes/find">' + A.icon('back') + '<span>' + esc(t('app_fd_title')) + '</span></a>';
    if (!w || !w.offer_expires_at || Date.parse(w.offer_expires_at) <= Date.now()) {
      return back + '<div class="grid rise"><section class="card span-8" style="--i:0"><h1 class="t-h2">' + esc(t('app_fd_offer_gone_h')) + '</h1><p class="t-body" style="margin-top:8px">' + esc(t('app_fd_offer_gone_p')) + '</p>' +
        '<div class="btn-row"><a class="btn btn--primary" href="#/classes/find">' + esc(t('app_fd_title')) + '</a></div></section></div>';
    }
    var c = w.cohorts, mine = P().cohorts || [];
    return back + '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_fd_offer_h')) + '</h1><p class="t-lead">' + esc(course(c) + ', ' + planName(c.tier) + (teacherName(c) ? ' · ' + t('app_cl_with', { name: teacherName(c) }) : '')) + '</p></div></div>' +
      '<div class="grid rise"><section class="card card--forest span-8 cover-card" style="--i:0"><p class="t-body">' + esc([timetable(c), classTime(c)].filter(Boolean).join('. ')) + '</p>' +
      '<p class="t-body" style="margin-top:8px">' + esc(t('app_fd_offer_until', { when: when(w.offer_expires_at) })) + '</p>' +
      (mine.length ? '<p class="t-small" style="margin-top:8px">' + esc(t('app_fd_switch_note')) + '</p>' : '') +
      '<div class="btn-row" style="margin-top:16px"><button class="btn btn--lime" type="button" data-fd="claim" data-id="' + esc(w.id) + '">' + esc(t('app_fd_offer_take')) + '</button><a class="btn btn--on-forest" href="#/classes/find/' + esc(c.id) + '">' + esc(t('app_fd_offer_see')) + '</a></div>' +
      '<p class="t-small st-msg fd-msg" data-fdmsg="act" aria-live="polite"></p></section>' +
      '<section class="stage span-4" style="--i:1;background:var(--t-sun)" aria-hidden="true"><div class="bub say">' + esc(t('app_fd_offer_bub')) + '</div>' + A.Cast.drawing('mug') + '</section></div>';
  }

  /* ---------- Your class (shown inside Classes) and leaving ---------- */
  function yourClassHtml(c, teacherName, i) {
    return '<section class="card card--bone span-12" style="--i:' + (i || 0) + '" aria-labelledby="h-yours"><div class="card__row" style="flex-wrap:wrap"><div style="flex:1;min-width:220px"><h2 class="t-h3" id="h-yours">' + esc(t('app_fd_your_class_h')) + '</h2>' +
      '<p class="t-small" style="margin-top:4px">' + esc(course(c) + (teacherName ? ' · ' + t('app_cl_with', { name: teacherName }) : '')) + '</p></div><div class="btn-row">' +
      (c.teacher_id ? '<a class="btn btn--ghost btn--sm" href="#/classes/review/' + esc(c.teacher_id) + '">' + esc(teacherName ? t('app_fd_review', { name: teacherName }) : t('app_fd_review_any')) + '</a>' : '') +
      '<a class="btn btn--ghost btn--sm" href="#/classes/find">' + esc(t('app_fd_switch_class')) + '</a><button class="btn btn--quiet btn--sm" type="button" data-fd="askleave">' + esc(t('app_fd_leave')) + '</button></div></div><div data-fdleave></div></section>';
  }

  /* ---------- Review ---------- */
  function reviewView(st, tid) {
    var back = '<a class="rd-back" href="#/classes">' + A.icon('back') + '<span>' + esc(t('app_nav_classes')) + '</span></a>', name = st.teacher && st.teacher.full_name || '';
    if (!st.allowed) return back + '<div class="grid rise"><section class="card span-8" style="--i:0"><h1 class="t-h2">' + esc(t('app_fd_review_h', { name: name })) + '</h1><p class="t-body" style="margin-top:8px">' + esc(t('app_fd_review_no')) + '</p></section></div>';
    var r = st.review || {};
    return takeFlash() + back + '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_fd_review_h', { name: name })) + '</h1><p class="t-lead">' + esc(t('app_fd_review_p')) + '</p></div></div>' +
      '<div class="grid rise"><form class="card span-8 st-form" style="--i:0;max-width:none;margin-top:0" data-fdreview="' + esc(tid) + '"><fieldset class="st-field"><legend class="st-lbl">' + esc(t('app_fd_review_stars')) + '</legend><div class="fd-stars">' +
      [1, 2, 3, 4, 5].map(function (n) { return '<label class="st-day"><input type="radio" name="rating" value="' + n + '"' + (r.rating === n ? ' checked' : '') + ' required><span>' + esc(t('app_fd_stars', { n: n })) + '</span></label>'; }).join('') + '</div></fieldset>' +
      '<label class="st-field"><span class="st-lbl">' + esc(t('app_fd_review_text')) + '</span><textarea class="st-in tc-ta" name="text" rows="5" maxlength="1000" dir="auto">' + esc(r.review_text || '') + '</textarea></label>' +
      '<div class="btn-row"><button class="btn btn--primary" type="submit">' + esc(t('app_fd_review_save')) + '</button></div><p class="t-small st-msg" data-fdmsg="review" aria-live="polite"></p></form>' +
      '<section class="stage span-4" style="--i:1;background:var(--t-mint)" aria-hidden="true"><div class="bub think">' + esc(t('app_fd_review_bub')) + '</div>' + A.Cast.drawing('cat') + '</section></div>';
  }

  /* ---------- Actions ---------- */
  function say(key, text, bad) { var m = root.querySelector('[data-fdmsg="' + key + '"]'); if (m) { m.textContent = text; m.classList.toggle('is-bad', !!bad); } }
  function errText(e) {
    var code = e && e.code;
    var k = { payment_required: 'app_fd_err_pay', tier_mismatch: 'app_fd_err_plan', language_mismatch: 'app_fd_err_language', already_enrolled: 'app_fd_err_already', cohort_not_open: 'app_fd_err_full', offer_expired: 'app_fd_err_expired', '23505': 'app_fd_err_waiting', '42501': 'app_fd_err_wait_plan' }[code];
    return t(k || 'app_fd_err');
  }
  /* After a change to the student's class the whole dashboard loads again, so every section sees it */
  function reloadTo(hash, flashKey) {
    try { sessionStorage.setItem('alimun-fd-flash', flashKey); } catch (e) { /* private mode */ }
    location.hash = hash; location.reload();
  }
  function takeFlash() {
    var k = FLASH; FLASH = null;
    if (!k) { try { k = sessionStorage.getItem('alimun-fd-flash'); sessionStorage.removeItem('alimun-fd-flash'); } catch (e) { k = null; } }
    return k && /^app_fd_/.test(k) ? '<p class="t-body cl-flash" role="status">' + esc(t(k)) + '</p>' : '';
  }
  function act(btn) {
    var a = btn.getAttribute('data-fd'), id = btn.getAttribute('data-id'), c = id && classOf(id);
    if (a === 'optin') return optIn(btn);
    if (a === 'askleave') {
      root.querySelector('[data-fdleave]').innerHTML = '<div class="card card--bone ad-confirm fd-confirm"><p class="t-body">' + esc(t('app_fd_leave_q')) + '</p><div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-fd="leave">' + esc(t('app_fd_leave_yes')) + '</button><button class="btn btn--quiet btn--sm" type="button" data-fd="noleave">' + esc(t('app_fd_cancel')) + '</button></div><p class="t-small st-msg" data-fdmsg="leave" aria-live="polite"></p></div>';
      return;
    }
    if (a === 'noleave') { root.querySelector('[data-fdleave]').innerHTML = ''; return; }
    var key = a === 'leave' ? 'leave' : a === 'review' ? 'review' : 'act';
    if (!real()) { sampleAct(a, c, id); return; }
    btn.disabled = true; say(key, t('app_fd_working'));
    var p = P(), go;
    if (a === 'join') go = window.AlimunData.enroll({ cohort_id: id }).then(function () { reloadTo('#/classes', 'app_fd_joined'); });
    else if (a === 'switch') go = window.AlimunData.enroll({ cohort_id: id, switch: true }).then(function () { reloadTo('#/classes', 'app_fd_switched'); });
    else if (a === 'claim') { var w = F.waits.filter(function (x) { return x.id === id; })[0]; go = window.AlimunData.enroll({ cohort_id: w.cohort_id, waitlist_id: w.id }).then(function () { reloadTo('#/classes', 'app_fd_joined'); }); }
    else if (a === 'leave') go = window.AlimunData.enroll({ action: 'leave' }).then(function () { reloadTo('#/classes', 'app_fd_left'); });
    else if (a === 'wait') go = window.AlimunData.joinWaitlist(p.id, id).then(function () { FLASH = 'app_fd_waited'; F = null; A.rerender(); });
    else if (a === 'unwait') go = window.AlimunData.leaveWaitlist(waitFor(id).id).then(function () { FLASH = 'app_fd_unwaited'; F = null; A.rerender(); });
    if (go) go.catch(function (e) { btn.disabled = false; say(key, errText(e), true); console.warn('[Alimun] ' + a, e && (e.message || e.code)); });
  }
  function sampleAct(a, c, id) {
    var p = P();
    if (a === 'wait') { F.waits.push({ id: 'w' + Date.now(), cohort_id: id, added_at: new Date().toISOString(), offered_at: null, offer_expires_at: null, cohorts: c }); FLASH = 'app_fd_waited'; }
    else if (a === 'unwait') { F.waits = F.waits.filter(function (w) { return w.cohort_id !== id; }); FLASH = 'app_fd_unwaited'; }
    else { say(a === 'leave' ? 'leave' : 'act', t('app_fd_sample_act')); return; }
    A.rerender();
  }
  function optIn(btn) {
    var p = P(), on = !p.waitlistOptIn;
    if (!real()) { p.waitlistOptIn = on; A.rerender(); return; }
    btn.disabled = true;
    window.AlimunData.setWaitlistOptIn(p.id, on).then(function () { p.waitlistOptIn = on; FLASH = on ? 'app_fd_optin_done_on' : 'app_fd_optin_done_off'; A.rerender(); },
      function (e) { btn.disabled = false; say('optin', t('app_fd_err'), true); console.warn('[Alimun] Opt in', e && e.message); });
  }
  function saveReview(form) {
    var tid = form.getAttribute('data-fdreview'), fd = new FormData(form), rating = Number(fd.get('rating')), text = String(fd.get('text') || '').trim();
    if (!(rating >= 1 && rating <= 5)) { say('review', t('app_fd_review_pick'), true); return; }
    if (!real()) { say('review', t('app_fd_sample_act')); return; }
    var btn = form.querySelector('[type="submit"]'); btn.disabled = true; say('review', t('app_fd_working'));
    window.AlimunData.saveReview(P().id, tid, rating, text).then(function () { FLASH = 'app_fd_review_saved'; A.rerender(); },
      function (e) { btn.disabled = false; say('review', t('app_fd_err'), true); console.warn('[Alimun] Review', e && e.message); });
  }
  function bind() {
    if (root.__find) return;
    root.__find = true;
    root.addEventListener('click', function (e) {
      var b = e.target.closest('[data-fd]');
      if (!b || b.disabled || b.tagName === 'SELECT') return;
      act(b);
    });
    root.addEventListener('change', function (e) { if (e.target.getAttribute('data-fd') === 'level') { level = e.target.value; A.rerender(); } });
    root.addEventListener('submit', function (e) { if (e.target.hasAttribute('data-fdreview')) { e.preventDefault(); saveReview(e.target); } });
  }

  /* ---------- Entry (called by js/app/classes.js for #/classes/find, /offer and /review) ---------- */
  function mount(view, parts, helpers) {
    A = helpers; root = view;
    bind();
    var k = parts[0], id = parts[1];
    if (k === 'review') {
      var go = real() ? window.AlimunData.reviewState(P().id, id) : Promise.resolve({ allowed: true, review: null, teacher: { id: id, full_name: 'Ana Weber' } });
      return go.then(function (st) { return { html: reviewView(st, id), title: t('app_fd_review_h', { name: st.teacher && st.teacher.full_name || '' }) }; });
    }
    return load().then(function (d) {
      F = d;
      if (k === 'offer') return { html: offerView(F.waits.filter(function (w) { return w.id === id; })[0]), title: t('app_fd_offer_h') };
      if (id) {
        var c = classOf(id);
        if (!c && real()) return window.AlimunData.findClass(id).then(function (x) { return x ? { html: classView(x), title: course(x) } : { html: findView(), title: t('app_fd_title') }; });
        if (!c) return { html: findView(), title: t('app_fd_title') };
        if (real() && !c.reviews) return window.AlimunData.findClass(id).then(function (x) { return { html: classView(x || c), title: course(c) }; });
        return { html: classView(c), title: course(c) };
      }
      return { html: findView(), title: t('app_fd_title') };
    });
  }
  window.AlimunFind = { offerCard: function (o, helpers) { A = helpers; return offerHtml(o, 0); }, mount: mount, routes: ['find', 'offer', 'review'], yourClassHtml: yourClassHtml, offerHtml: offerHtml, takeFlash: takeFlash, bind: function (view, helpers) { A = helpers; root = view; bind(); } };
})();
