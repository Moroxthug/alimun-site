/* Alimun admin, part 3: classes and schedule (docs/DASHBOARD_PLAN.md, step 15, admin pages). English only.
   #/classes[/list/<which>]   every class: open and full, closed, all; search by teacher or language
   #/classes/new              create a class for a teacher (/api/create-cohort in admin mode: 12 weeks of dates)
   #/classes/<id>             a class: its students (move to another class, remove, add one learning the language),
                              seats and description (/api/admin/teacher class-update), its waiting list and dates,
                              closing and reopening
   #/schedule[/<which>]       every class date: this week, upcoming, past, cancelled; cancel or move one, with the
                              students and the teacher emailed (/api/admin/teacher session-update)
   Times are shown in the class's own timezone, with the admin's own time beside them when it differs. */
(function () {
  'use strict';
  var A = null, root = null, CL = null, FILE = null, SCH = null, FLASH = '';
  var MIN = 60000, DAY = 86400000;
  var LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  var GOALS = { foundations: 'Strong foundations', relocation: 'Living or moving abroad', professional: 'Work', academic: 'Study or an exam', pleasure: 'For the pleasure of it' };
  var TIERS = { community: 'Community', focused: 'Focused', intensive: 'Intensive', private: '1 on 1' };
  var TIER_SEATS = { community: 35, focused: 17, intensive: 6, private: 1 };
  var PLANS = { free: 'Free', community: 'Community', focused: 'Focused', intensive: 'Intensive', private: '1 on 1', onetoone: '1 on 1 (old)', daily: 'Daily', waitlist: 'Waiting list', founding_member: 'Founding member' };
  var STATUS = { open: 'Open', full: 'Full', closed: 'Closed to new students', completed: 'Finished' };
  var DATE_STATUS = { scheduled: 'Scheduled', live: 'Live now', completed: 'Done', cancelled: 'Cancelled' };
  var WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var MY_TZ = (function () { try { return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'; } catch (e) { return 'UTC'; } })();

  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real'; }
  function zoneOf(tz) { return window.AlimunTZ && window.AlimunTZ.isValidTimezone(tz) ? tz : 'UTC'; }
  function day(d, tz) { return A.fmt(d, { weekday: 'short', day: 'numeric', month: 'short', timeZone: zoneOf(tz || MY_TZ) }); }
  function longDay(d, tz) { return A.fmt(d, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: zoneOf(tz || MY_TZ) }); }
  function hm(d, tz) { return A.fmt(d, { hour: '2-digit', minute: '2-digit', timeZone: zoneOf(tz || MY_TZ) }); }
  /* "Tuesday 4 November, 18:30 (Europe/Berlin)", and the admin's own time when the zone differs */
  function when(d, tz) {
    var z = zoneOf(tz), out = longDay(d, z) + ', ' + hm(d, z) + ' (' + z + ')';
    if (z !== MY_TZ && hm(d, z) + day(d, z) !== hm(d, MY_TZ) + day(d, MY_TZ)) out += ', ' + day(d, MY_TZ) + ' ' + hm(d, MY_TZ) + ' your time';
    return out;
  }
  function andList(a) { return a.length < 2 ? a.join('') : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1]; }
  function timetable(c) { return (c.schedule_days || []).length ? andList(c.schedule_days) + ' at ' + String(c.schedule_time || '').slice(0, 5) + ' (' + zoneOf(c.timezone) + ')' : ''; }
  function teacherOf(c) { return c.teacher_profiles && c.teacher_profiles.full_name || 'No teacher'; }
  function opt(v, label, cur) { return '<option value="' + esc(v) + '"' + (String(v) === String(cur == null ? '' : cur) ? ' selected' : '') + '>' + esc(label) + '</option>'; }
  function field(label, control, hint) { return '<label class="st-field"><span class="st-lbl">' + esc(label) + '</span>' + control + (hint ? '<span class="t-small st-hint">' + esc(hint) + '</span>' : '') + '</label>'; }
  function back(href, label) { return '<a class="rd-back" href="' + href + '">' + A.icon('back') + '<span>' + esc(label) + '</span></a>'; }
  function loading() { return '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="Loading">' + A.loaderInner() + '</div></div>'; }
  function sampleLine() { return real() ? '' : '<p class="t-tiny span-12">This is sample data; nothing here is saved or sent.</p>'; }
  function flash() { var f = FLASH; FLASH = ''; return f ? '<p class="t-body st-msg ad-flash" role="status">' + esc(f) + '</p>' : ''; }
  function say(el, text, bad) { if (el) { el.textContent = text; el.classList.toggle('is-bad', !!bad); } }
  function errText(e) { return (e && e.message) || 'please try again'; }
  function emailNote(r, who) {
    if (!r || r.emailed == null) return '';
    if (r.emailConfigured === false) return ' No email was sent: email is not set up on the server.';
    if (typeof r.emailed === 'number') return ' ' + A.plural(r.emailed, 'email', 'emails') + ' sent' + (r.notEmailed ? ', ' + r.notEmailed + ' could not be sent' : '') + '.';
    return r.emailed ? ' ' + who + ' was emailed.' : ' The email to ' + who.toLowerCase() + ' could not be sent.';
  }
  function done(msg, href) { FLASH = msg; CL = null; FILE = null; SCH = null; if (href && location.hash !== href) location.hash = href; else A.rerender(); }

  /* ---------- Sample ---------- */
  function sampleClasses() {
    var bz = 'Europe/Berlin', ld = 'Europe/London';
    var classes = [
      { id: 'c1', teacher_id: 't1', language: 'German', level: 'B1', goal_track: 'relocation', tier: 'focused', max_students: 17, description: 'German for everyday life after a move.', schedule_days: ['Tuesday', 'Thursday'], schedule_time: '18:30', timezone: bz, status: 'open', enrolled_count: 9, teacher_profiles: { full_name: 'Ana Weber' } },
      { id: 'c3', teacher_id: 't1', language: 'German', level: 'A2', goal_track: 'foundations', tier: 'intensive', max_students: 6, description: '', schedule_days: ['Monday', 'Wednesday', 'Friday'], schedule_time: '09:00', timezone: bz, status: 'full', enrolled_count: 6, teacher_profiles: { full_name: 'Ana Weber' } },
      { id: 'c2', teacher_id: 't2', language: 'English', level: 'B2', goal_track: 'academic', tier: 'focused', max_students: 17, description: 'Preparation for B2 First and IELTS.', schedule_days: ['Monday', 'Wednesday'], schedule_time: '19:00', timezone: ld, status: 'full', enrolled_count: 17, teacher_profiles: { full_name: 'James Hall' } },
      { id: 'c4', teacher_id: 't2', language: 'English', level: 'C1', goal_track: 'professional', tier: 'community', max_students: 35, description: '', schedule_days: ['Saturday'], schedule_time: '10:00', timezone: ld, status: 'closed', enrolled_count: 4, teacher_profiles: { full_name: 'James Hall' } }
    ];
    var upcoming = [];
    classes.forEach(function (c) { if (c.status !== 'closed') sampleDates(c).forEach(function (s) { if (s.status === 'scheduled') upcoming.push({ cohort_id: c.id, scheduled_at: s.scheduled_at }); }); });
    upcoming.sort(function (a, b) { return a.scheduled_at.localeCompare(b.scheduled_at); });
    return { sample: true, classes: classes, upcoming: upcoming,
      teachers: [{ id: 't1', full_name: 'Ana Weber', languages: ['German', 'English'] }, { id: 't2', full_name: 'James Hall', languages: ['English'] }, { id: 't6', full_name: 'Lucía Gómez', languages: ['Spanish'] }],
      waiting: [{ cohort_id: 'c2', offer_expires_at: null }, { cohort_id: 'c2', offer_expires_at: new Date(Date.now() + 30 * 3600000).toISOString() }, { cohort_id: 'c3', offer_expires_at: null }] };
  }
  /* Twelve weeks of dates for a sample class: four weeks back, eight ahead */
  function sampleDates(c) {
    var TZ = window.AlimunTZ, out = [], idx = (c.schedule_days || []).map(function (d) { return DAYS.indexOf(d); });
    var from = new Date(Date.now() - 28 * DAY);
    (TZ ? TZ.scheduleOccurrences(idx, String(c.schedule_time).slice(0, 5), c.timezone, from) : []).forEach(function (d, i) {
      var t = d.getTime(), now = Date.now();
      out.push({ id: c.id + '-s' + i, cohort_id: c.id, scheduled_at: d.toISOString(), status: t < now - 90 * MIN ? (i === 2 ? 'cancelled' : 'completed') : (t <= now + 15 * MIN && t >= now - 90 * MIN ? 'live' : 'scheduled') });
    });
    return out;
  }
  function sampleFile(c) {
    var now = Date.now(), ago = function (d) { return new Date(now - d * DAY).toISOString(); };
    var names = { German: ['Lukas Brandt', 'Mei Chen', 'Jonas Keller', 'Priya Nair', 'Elif Yilmaz', 'Hugo Laurent'], English: ['Sara Rossi', 'Kenji Mori', 'Ana Lima', 'Marta Nowak'] }[c.language] || [];
    var n = Math.min(c.enrolled_count, names.length);
    var roster = names.slice(0, n).map(function (nm, i) { return { id: 'e' + i, enrolled_at: ago(40 - i * 3), student_profiles: { id: c.id + 'st' + i, full_name: nm, level: c.level, tier: i === 1 ? 'community' : c.tier, language: c.language, stripe_subscription_status: i === 2 ? 'past_due' : 'active' } }; });
    var waiting = c.id === 'c2' ? [{ id: 'w1', added_at: ago(12), offered_at: ago(0.75), offer_expires_at: new Date(now + 30 * 3600000).toISOString(), student_profiles: { id: 'sw1', full_name: 'Tariq Aziz', level: 'B2', tier: 'focused' } }, { id: 'w2', added_at: ago(6), offered_at: null, offer_expires_at: null, student_profiles: { id: 'sw2', full_name: 'Clara Vidal', level: 'B2', tier: 'focused' } }]
      : c.id === 'c3' ? [{ id: 'w3', added_at: ago(3), offered_at: null, offer_expires_at: null, student_profiles: { id: 'sw3', full_name: 'Noah Fischer', level: 'A2', tier: 'intensive' } }] : [];
    var students = [{ id: 'sx1', full_name: c.language === 'German' ? 'Omar Haddad' : 'Lena Hoffmann', level: c.level, tier: 'free', enrolled_cohort_id: null }];
    roster.forEach(function (e) { students.push(Object.assign({ enrolled_cohort_id: c.id }, e.student_profiles)); });
    return { klass: c, roster: roster, waiting: waiting, sessions: sampleDates(c), students: students,
      others: CL.classes.filter(function (o) { return o.id !== c.id && o.language === c.language && (o.status === 'open' || o.status === 'full'); }) };
  }
  function sampleSchedule() {
    var out = [];
    CL.classes.forEach(function (c) { sampleDates(c).forEach(function (s) { if (c.status !== 'closed' || s.status !== 'scheduled') out.push(Object.assign({ cohorts: c }, s)); }); });
    return out.sort(function (a, b) { return a.scheduled_at.localeCompare(b.scheduled_at); });
  }

  /* ---------- Loading ---------- */
  function loadClasses() {
    if (CL) return Promise.resolve(CL);
    if (!real()) return Promise.resolve(CL = sampleClasses());
    return window.AlimunData.adminClasses().then(function (d) { return (CL = d); });
  }
  function classById(id) { return CL.classes.filter(function (c) { return c.id === id; })[0] || null; }

  /* ---------- Classes ---------- */
  var CF = { q: '', lang: '' };
  function classesView(which) {
    which = which || 'active';
    var counts = { active: 0, closed: 0, all: CL.classes.length };
    CL.classes.forEach(function (c) { if (c.status === 'open' || c.status === 'full') counts.active++; else counts.closed++; });
    var langs = CL.classes.map(function (c) { return c.language; }).filter(function (v, i, a) { return v && a.indexOf(v) === i; }).sort();
    var tab = function (k, label) { return '<a class="btn btn--' + (k === which ? 'primary' : 'quiet') + ' btn--sm" href="#/classes/list/' + k + '"' + (k === which ? ' aria-current="page"' : '') + '>' + esc(label + ' (' + counts[k] + ')') + '</a>'; };
    var seats = CL.classes.filter(function (c) { return c.status === 'open' || c.status === 'full'; }).reduce(function (n, c) { return n + (c.enrolled_count || 0); }, 0);
    return flash() + '<div class="view__head"><div><h1 class="t-h1">Classes</h1><p class="t-lead">' + esc(A.plural(counts.active, 'class', 'classes') + ' taking students, ' + A.plural(seats, 'student', 'students') + ' in them.') + '</p></div>' +
      '<div class="btn-row"><a class="btn btn--primary btn--sm" href="#/classes/new">Create a class</a></div></div>' +
      '<div class="grid rise"><section class="card span-12" style="--i:0"><div class="btn-row ad-tabs" role="navigation" aria-label="Which classes">' + tab('active', 'Open and full') + tab('closed', 'Closed') + tab('all', 'All') + '</div>' +
      '<div class="ad-filters"><input class="st-in" type="search" data-cf="q" placeholder="Search by teacher, language or level" value="' + esc(CF.q) + '" aria-label="Search">' +
      '<select class="st-in" data-cf="lang" aria-label="Language">' + opt('', 'Every language', CF.lang) + langs.map(function (l) { return opt(l, l, CF.lang); }).join('') + '</select></div>' +
      '<div data-crows data-which="' + esc(which) + '">' + classRowsHtml(which) + '</div></section>' + sampleLine() + '</div>';
  }
  function classRowsHtml(which) {
    var q = CF.q.trim().toLowerCase(), next = {}, wait = {};
    CL.upcoming.forEach(function (s) { if (!next[s.cohort_id]) next[s.cohort_id] = s.scheduled_at; });
    CL.waiting.forEach(function (w) { wait[w.cohort_id] = (wait[w.cohort_id] || 0) + 1; });
    var list = CL.classes.filter(function (c) {
      var active = c.status === 'open' || c.status === 'full';
      if (which === 'active' && !active) return false;
      if (which === 'closed' && active) return false;
      if (CF.lang && c.language !== CF.lang) return false;
      return !q || [teacherOf(c), c.language, c.level, TIERS[c.tier]].join(' ').toLowerCase().indexOf(q) > -1;
    });
    if (!list.length) return '<p class="t-body" style="margin-top:12px">' + esc(CL.classes.length ? 'No class matches.' : 'No classes yet.') + '</p>';
    return '<div class="tt-week">' + list.map(function (c) {
      var bits = [teacherOf(c), timetable(c), STATUS[c.status] || c.status, next[c.id] ? 'next ' + day(next[c.id], c.timezone) : (c.status === 'open' || c.status === 'full' ? 'no dates ahead' : ''), wait[c.id] ? wait[c.id] + ' waiting' : ''].filter(Boolean);
      return '<a class="tt-row tt-row--wide" href="#/classes/' + esc(c.id) + '"><span class="tt-row__time">' + esc((c.enrolled_count || 0) + ' of ' + (c.max_students || 0)) + '</span><span><b>' + esc(A.className(c)) + '</b><small>' + esc(bits.join(', ')) + '</small></span></a>';
    }).join('') + '</div>';
  }

  /* ---------- A class ---------- */
  function classFileView(f) {
    var c = f.klass, active = c.status === 'open' || c.status === 'full', now = Date.now();
    var ahead = f.sessions.filter(function (s) { return new Date(s.scheduled_at).getTime() > now - 90 * MIN && s.status !== 'cancelled' && s.status !== 'completed'; });
    var past = f.sessions.filter(function (s) { return s.status === 'completed'; }).length, cancelled = f.sessions.filter(function (s) { return s.status === 'cancelled'; }).length;
    var html = flash() + back('#/classes', 'Classes') + '<div class="view__head"><div><h1 class="t-h1">' + esc(A.className(c)) + '</h1><p class="t-lead">' +
      esc([teacherOf(c), timetable(c), STATUS[c.status] || c.status, (c.enrolled_count || 0) + ' of ' + (c.max_students || 0) + ' seats taken'].filter(Boolean).join('. ') + '.') + '</p></div>' +
      '<div class="btn-row">' + (c.teacher_id ? '<a class="btn btn--ghost btn--sm" href="#/teachers/' + esc(c.teacher_id) + '">The teacher’s file</a>' : '') +
      (active ? '<button class="btn btn--quiet btn--sm" type="button" data-askstatus="closed">Close to new students</button>' : c.status === 'closed' ? '<button class="btn btn--primary btn--sm" type="button" data-askstatus="open">Reopen</button>' : '') + '</div></div>' +
      '<div data-statusbox></div><div class="grid rise">';

    /* Students */
    var inIt = {}; f.roster.forEach(function (e) { if (e.student_profiles) inIt[e.student_profiles.id] = true; });
    var addable = f.students.filter(function (s) { return !inIt[s.id]; });
    html += '<section class="card span-7" style="--i:0" aria-labelledby="h-roster"><h2 class="t-h2" id="h-roster">Students</h2>' + (f.roster.length ? '<div class="tt-week">' + f.roster.map(function (e) {
      var s = e.student_profiles || {};
      return '<div class="ad-item"><div class="tt-row ad-act"><span class="tt-row__time">' + esc(s.level || '') + '</span><span><a class="linkish" href="#/students/' + esc(s.id) + '"><b>' + esc(s.full_name || 'Student') + '</b></a><small>' +
        esc([PLANS[s.tier] || s.tier, s.stripe_subscription_status === 'past_due' ? 'payment overdue' : '', 'since ' + day(e.enrolled_at)].filter(Boolean).join(', ')) + '</small></span>' +
        '<span class="btn-row ad-act__btns"><button class="btn btn--ghost btn--sm" type="button" data-askmove="' + esc(s.id) + '">Move</button><button class="btn btn--quiet btn--sm" type="button" data-askremove="' + esc(s.id) + '">Remove</button></span></div><div data-box="' + esc(s.id) + '"></div></div>';
    }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">No students in this class yet.</p>') +
      '<h3 class="t-h3" style="margin-top:18px">Add a student</h3>' + (!active ? '<p class="t-body" style="margin-top:6px">Reopen the class to add students.</p>'
        : addable.length ? '<form class="st-form ad-inline" data-add style="max-width:none;margin-top:8px">' + field('Students learning ' + c.language, '<select class="st-in" name="student">' + addable.map(function (s) {
          return opt(s.id, (s.full_name || 'Student') + ', ' + (s.level || '?') + ', ' + (PLANS[s.tier] || s.tier || 'no plan') + (s.enrolled_cohort_id ? ' (leaves their current class)' : ''), '');
        }).join('') + '</select>') + '<label class="st-day"><input type="checkbox" name="notify" checked><span>Email them about their new class</span></label>' +
          '<div class="btn-row"><button class="btn btn--primary btn--sm" type="submit">Add to this class</button></div><p class="t-small st-msg" data-msg="add" aria-live="polite"></p></form>'
        : '<p class="t-body" style="margin-top:6px">No other student is learning ' + esc(c.language) + '. Students can also join open classes from their dashboard.</p>') + '</section>';

    /* Seats and description */
    html += '<form class="card span-5 st-form" style="--i:1;max-width:none;margin-top:0" data-classform><h2 class="t-h2">Seats and description</h2>' +
      field('Seats', '<input class="st-in" type="number" name="max_students" min="' + Math.max(1, c.enrolled_count || 0) + '" max="35" step="1" required value="' + esc(c.max_students) + '">', 'From ' + Math.max(1, c.enrolled_count || 0) + ' (the students in it now) to 35.') +
      field('Description, for students', '<textarea class="st-in tc-ta" name="description" rows="4" maxlength="2000" dir="auto">' + esc(c.description || '') + '</textarea>') +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="submit">Save</button></div><p class="t-small st-msg" data-msg="class" aria-live="polite"></p></form>';

    /* Waiting list */
    html += '<section class="card span-5" style="--i:2" aria-labelledby="h-wait"><h2 class="t-h2" id="h-wait">Waiting list</h2>' + (f.waiting.length ? '<div class="tt-week">' + f.waiting.map(function (w) {
      var s = w.student_profiles || {}, live = w.offer_expires_at && new Date(w.offer_expires_at).getTime() > now;
      return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(day(w.added_at)) + '</span><span><a class="linkish" href="#/students/' + esc(s.id) + '"><b>' + esc(s.full_name || 'Student') + '</b></a><small>' +
        esc([PLANS[s.tier] || s.tier, live ? 'place offered, runs out ' + A.relative(new Date(w.offer_expires_at).getTime() - now) : 'waiting'].filter(Boolean).join(', ')) + '</small></span></div>';
    }).join('') + '</div><div class="btn-row"><a class="btn btn--ghost btn--sm" href="#/waiting">Offer a place</a></div>' : '<p class="t-body" style="margin-top:8px">Nobody is waiting for this class.</p>') + '</section>';

    /* Dates */
    html += '<section class="card span-7" style="--i:3" aria-labelledby="h-dates"><h2 class="t-h2" id="h-dates">Dates ahead</h2><p class="t-small" style="margin-top:4px">' +
      esc(A.plural(past, 'date', 'dates') + ' done, ' + A.plural(cancelled, 'cancelled', 'cancelled') + '. Times in ' + zoneOf(c.timezone) + '.') + '</p>' +
      (ahead.length ? '<div class="tt-week">' + ahead.slice(0, 8).map(function (s) { return dateRow(s, c, false); }).join('') +
        (ahead.length > 8 ? '<div class="tt-week" hidden data-rest>' + ahead.slice(8).map(function (s) { return dateRow(s, c, false); }).join('') + '</div>' : '') + '</div>' +
        (ahead.length > 8 ? '<div class="btn-row"><button class="btn btn--ghost btn--sm" type="button" data-showrest>' + esc('Show the other ' + (ahead.length - 8) + ' dates') + '</button></div>' : '')
        : '<p class="t-body" style="margin-top:8px">No dates ahead.</p>') + '</section>';
    return html + sampleLine() + '</div>';
  }
  function askBox(id, html) {
    root.querySelectorAll('[data-box]').forEach(function (b) { b.innerHTML = ''; });
    var box = root.querySelector('[data-box="' + id + '"]');
    if (box) { box.innerHTML = '<div class="card card--bone ad-confirm">' + html + '<p class="t-small st-msg" data-msg="box" aria-live="polite"></p></div>'; var f = box.querySelector('select, input, button'); if (f) f.focus(); }
  }
  function studentIn(id) { var e = FILE.roster.filter(function (x) { return x.student_profiles && x.student_profiles.id === id; })[0]; return e ? e.student_profiles : null; }
  function askMove(id) {
    var s = studentIn(id), c = FILE.klass;
    if (!FILE.others.length) { askBox(id, '<p class="t-body">There is no other open ' + esc(c.language) + ' class to move ' + esc(s.full_name) + ' to.</p><div class="btn-row"><button class="btn btn--quiet btn--sm" type="button" data-cancel>Close</button></div>'); return; }
    askBox(id, '<p class="t-body"><b>' + esc('Move ' + (s.full_name || 'this student') + ' to another class') + '</b></p>' +
      field('Class', '<select class="st-in" data-to>' + FILE.others.map(function (o) { return opt(o.id, A.className(o) + ', ' + teacherOf(o) + ', ' + timetable(o) + ', ' + (o.enrolled_count || 0) + ' of ' + (o.max_students || 0) + ' seats', ''); }).join('') + '</select>') +
      '<label class="st-day"><input type="checkbox" data-notify checked><span>Email them about their new class</span></label>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-domove="' + esc(id) + '">Move</button><button class="btn btn--quiet btn--sm" type="button" data-cancel>Cancel</button></div>');
  }
  function askRemove(id) {
    var s = studentIn(id);
    askBox(id, '<p class="t-body"><b>' + esc('Remove ' + (s.full_name || 'this student') + ' from this class?') + '</b></p><p class="t-small">Their seat is freed and offered to the waiting list. Their subscription does not change.</p>' +
      '<label class="st-day"><input type="checkbox" data-notify checked><span>Email them about it</span></label>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-doremove="' + esc(id) + '">Remove</button><button class="btn btn--quiet btn--sm" type="button" data-cancel>Cancel</button></div>');
  }
  function doMove(btn, studentId, cohortId, notify, msgEl) {
    var s = studentIn(studentId) || FILE.students.filter(function (x) { return x.id === studentId; })[0] || {}, to = cohortId === FILE.klass.id ? FILE.klass : FILE.others.filter(function (o) { return o.id === cohortId; })[0];
    var name = s.full_name || 'The student', where = to ? A.className(to) + ' with ' + teacherOf(to) : 'the class';
    if (!real()) { done(name + ' is now in ' + where + '. (Sample: nothing was saved or sent.)'); return; }
    btn.disabled = true; say(msgEl, 'Moving…');
    window.AlimunData.adminMoveStudent(studentId, cohortId, notify).then(function (r) {
      done(name + ' is now in ' + where + '.' + (r.warning ? ' ' + r.warning : '') + (notify ? emailNote(r, 'They') : ''));
    }, function (e) { btn.disabled = false; say(msgEl, 'That did not work: ' + errText(e) + '.', true); });
  }
  function doRemove(btn) {
    var id = btn.getAttribute('data-doremove'), s = studentIn(id) || {}, box = btn.closest('.ad-confirm'), notify = box.querySelector('[data-notify]').checked;
    if (!real()) { done((s.full_name || 'The student') + ' was removed from the class. (Sample: nothing was saved or sent.)'); return; }
    btn.disabled = true; say(box.querySelector('[data-msg]'), 'Removing…');
    window.AlimunData.adminRemoveStudent(id, notify).then(function (r) { done((s.full_name || 'The student') + ' was removed from the class.' + (notify ? emailNote(r, 'They') : '')); },
      function (e) { btn.disabled = false; say(box.querySelector('[data-msg]'), 'That did not work: ' + errText(e) + '.', true); });
  }
  function askStatus(status) {
    var c = FILE.klass, box = root.querySelector('[data-statusbox]');
    box.innerHTML = '<div class="card card--bone ad-confirm" style="margin-bottom:16px"><p class="t-body"><b>' + esc(status === 'closed' ? 'Close ' + A.className(c) + ' to new students?' : 'Reopen ' + A.className(c) + '?') + '</b></p><p class="t-small">' +
      esc(status === 'closed' ? 'Nobody new can join and nobody is offered a place. The students in it and its dates stay as they are.' : 'Students can join it again' + ((c.enrolled_count || 0) >= (c.max_students || 0) ? ' once a seat is free; it is full now.' : '.')) + '</p>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-dostatus="' + status + '">' + (status === 'closed' ? 'Close it' : 'Reopen it') + '</button><button class="btn btn--quiet btn--sm" type="button" data-cancel>Cancel</button></div><p class="t-small st-msg" data-msg="box" aria-live="polite"></p></div>';
  }
  function doStatus(btn) {
    var c = FILE.klass, status = btn.getAttribute('data-dostatus');
    if (status === 'open' && (c.enrolled_count || 0) >= (c.max_students || 0)) status = 'full';
    var msg = status === 'closed' ? 'The class is closed to new students.' : 'The class is open again.';
    if (!real()) { c.status = status; var k = classById(c.id); if (k) k.status = status; FLASH = msg + ' (Sample: nothing was saved.)'; A.rerender(); return; }
    btn.disabled = true;
    window.AlimunData.adminSave('cohorts', c.id, { status: status }).then(function () { done(msg); },
      function (e) { btn.disabled = false; say(btn.closest('.ad-confirm').querySelector('[data-msg]'), 'That did not work: ' + errText(e) + '.', true); });
  }
  function saveClass(form) {
    var c = FILE.klass, fd = new FormData(form), seats = Number(fd.get('max_students')), desc = String(fd.get('description') || '').trim(), msg = form.querySelector('[data-msg]');
    if (!Number.isInteger(seats) || seats < Math.max(1, c.enrolled_count || 0) || seats > 35) { say(msg, 'Seats must be a whole number from ' + Math.max(1, c.enrolled_count || 0) + ' to 35.', true); return; }
    var patch = {};
    if (seats !== c.max_students) patch.max_students = seats;
    if (desc !== (c.description || '')) patch.description = desc;
    if (!Object.keys(patch).length) { say(msg, 'Nothing changed.'); return; }
    if (!real()) { Object.assign(c, patch); FLASH = 'Saved. (Sample: nothing was saved.)'; A.rerender(); return; }
    var btn = form.querySelector('[type="submit"]'); btn.disabled = true; say(msg, 'Saving…');
    window.AlimunData.adminClassUpdate(c.id, patch).then(function () { done('Saved.'); }, function (e) { btn.disabled = false; say(msg, 'That did not save: ' + errText(e) + '.', true); });
  }

  /* ---------- Create a class ---------- */
  function newClassView() {
    var t = CL.teachers;
    if (!t.length) return back('#/classes', 'Classes') + '<div class="card"><h1 class="t-h2">No approved teacher yet</h1><p class="t-body">A class needs an approved teacher. Approve an application or reinstate a teacher first.</p><div class="btn-row"><a class="btn btn--primary" href="#/teachers">Teachers</a></div></div>';
    return back('#/classes', 'Classes') + '<div class="view__head"><div><h1 class="t-h1">Create a class</h1><p class="t-lead">Twelve weeks of dates are created with it, and the video rooms ahead of each date.</p></div></div>' +
      '<div class="grid rise"><form class="card span-8 st-form" style="--i:0;max-width:none;margin-top:0" data-newclass>' +
      field('Teacher', '<select class="st-in" name="teacher_id" data-teacher>' + t.map(function (x) { return opt(x.id, x.full_name + ' (' + (x.languages || []).join(', ') + ')', t[0].id); }).join('') + '</select>') +
      '<p class="t-small" data-slots aria-live="polite"></p>' +
      '<div class="st-row">' + field('Language', '<select class="st-in" name="language" data-langs></select>') + field('Level', '<select class="st-in" name="level">' + LEVELS.map(function (l) { return opt(l, l, 'B1'); }).join('') + '</select>') + '</div>' +
      '<div class="st-row">' + field('Goal', '<select class="st-in" name="goal_track">' + Object.keys(GOALS).map(function (g) { return opt(g, GOALS[g], 'foundations'); }).join('') + '</select>') +
        field('Plan', '<select class="st-in" name="tier" data-tier>' + Object.keys(TIERS).map(function (k) { return opt(k, TIERS[k] + ' (' + TIER_SEATS[k] + ' seats)', 'focused'); }).join('') + '</select>') + '</div>' +
      '<fieldset class="st-field"><legend class="st-lbl">Days</legend><div class="st-days">' + WEEKDAYS.map(function (d) { return '<label class="st-day"><input type="checkbox" name="day" value="' + d + '"><span>' + d + '</span></label>'; }).join('') + '</div></fieldset>' +
      '<div class="st-row">' + field('Start time', '<input class="st-in" type="time" name="time" step="300" required value="18:00">', 'Classes last an hour.') +
        field('Class timezone', '<input class="st-in" name="timezone" required maxlength="64" value="Europe/Berlin" data-tz>', 'A name such as Europe/Madrid. The teacher’s availability sets it when they have some.') + '</div>' +
      '<div class="st-row">' + field('Seats', '<input class="st-in" type="number" name="max_students" min="1" max="35" step="1" placeholder="17" data-seats>', 'Leave empty for the plan’s usual number.') + '</div>' +
      field('Description, for students', '<textarea class="st-in tc-ta" name="description" rows="3" maxlength="2000" dir="auto"></textarea>', 'Optional') +
      '<label class="st-day"><input type="checkbox" name="skip"><span>Create it even if it does not fit the teacher’s availability</span></label>' +
      '<div class="btn-row"><button class="btn btn--primary" type="submit">Create the class</button></div><p class="t-body st-msg" data-msg="new" aria-live="polite"></p></form>' +
      '<section class="stage span-4" style="--i:1;background:var(--t-mint)" aria-hidden="true"><div class="bub say">A new class, how exciting.</div>' + A.Cast.drawing('cat') + '</section>' + sampleLine() + '</div>';
  }
  var slotsFor = 0;
  function teacherPicked() {
    var sel = root.querySelector('[data-teacher]'); if (!sel) return;
    var t = CL.teachers.filter(function (x) { return x.id === sel.value; })[0] || {}, langs = root.querySelector('[data-langs]'), box = root.querySelector('[data-slots]'), my = ++slotsFor;
    langs.innerHTML = (t.languages || []).map(function (l, i) { return opt(l, l, (t.languages || [])[0]); }).join('');
    box.textContent = 'Loading their availability…';
    var got = real() ? window.AlimunData.adminTeacherSlots(t.id) : Promise.resolve(t.id === 't6' ? [] : [{ day_of_week: 2, start_time: '17:00:00', end_time: '21:00:00', timezone: 'Europe/Berlin' }, { day_of_week: 4, start_time: '17:00:00', end_time: '21:00:00', timezone: 'Europe/Berlin' }]);
    got.then(function (slots) {
      if (my !== slotsFor) return;
      if (!slots.length) { box.textContent = 'This teacher has no weekly availability yet, so the class can only be created outside it.'; return; }
      box.textContent = 'Free to teach: ' + andList(slots.map(function (s) { return DAYS[s.day_of_week] + ' ' + String(s.start_time).slice(0, 5) + ' to ' + String(s.end_time).slice(0, 5) + ' (' + (s.timezone || 'UTC') + ')'; })) + '.';
      root.querySelector('[data-tz]').value = slots[0].timezone || 'UTC';
    }, function (e) { if (my === slotsFor) box.textContent = 'Their availability did not load: ' + errText(e) + '.'; });
  }
  function createClass(form) {
    var fd = new FormData(form), msg = form.querySelector('[data-msg]'), days = fd.getAll('day'), seats = String(fd.get('max_students') || '').trim();
    var body = { teacher_id: fd.get('teacher_id'), language: fd.get('language'), level: fd.get('level'), goal_track: fd.get('goal_track'), tier: fd.get('tier'),
      schedule_days: days, schedule_time: String(fd.get('time') || '').slice(0, 5), timezone: String(fd.get('timezone') || '').trim(), description: String(fd.get('description') || '').trim() || null, skip_availability: !!fd.get('skip') };
    if (seats) body.max_students = Number(seats);
    if (!body.language) { say(msg, 'This teacher has no language on their profile. Add one in their file first.', true); return; }
    if (!days.length) { say(msg, 'Choose at least one day.', true); return; }
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(body.schedule_time)) { say(msg, 'Give the start time.', true); return; }
    if (!window.AlimunTZ.isValidTimezone(body.timezone)) { say(msg, 'The timezone must be a name such as Europe/Madrid.', true); return; }
    if (seats && !(Number.isInteger(body.max_students) && body.max_students >= 1 && body.max_students <= 35)) { say(msg, 'Seats must be a whole number from 1 to 35.', true); return; }
    if (!real()) { done('The class was created with 24 dates. (Sample: nothing was saved.)', '#/classes'); return; }
    var btn = form.querySelector('[type="submit"]'); btn.disabled = true; say(msg, 'Creating the class and its dates…');
    window.AlimunData.adminCreateClass(body).then(function (r) {
      done('The class was created with ' + A.plural(r.sessionsGenerated || 0, 'date', 'dates') + '.' + (r.warning ? ' ' + r.warning : ''), r.cohort && r.cohort.id ? '#/classes/' + r.cohort.id : '#/classes');
    }, function (e) { btn.disabled = false; say(msg, 'The class was not created: ' + errText(e), true); });
  }

  /* ---------- Schedule ---------- */
  var SF = { q: '', teacher: '' };
  function loadSchedule() {
    if (SCH) return Promise.resolve(SCH);
    var since = new Date(Date.now() - 60 * DAY).toISOString(), until = new Date(Date.now() + 120 * DAY).toISOString();
    if (!real()) return loadClasses().then(function () { return (SCH = sampleSchedule()); });
    return window.AlimunData.adminSchedule(since, until).then(function (d) { return (SCH = d); });
  }
  function scheduleList(which) {
    var now = Date.now(), d0 = new Date(); d0.setHours(0, 0, 0, 0);
    var q = SF.q.trim().toLowerCase(), list = SCH.filter(function (s) {
      var t = new Date(s.scheduled_at).getTime(), c = s.cohorts || {};
      if (which === 'week' && (t < d0.getTime() || t >= d0.getTime() + 7 * DAY || s.status === 'cancelled')) return false;
      if (which === 'upcoming' && (t < now - 90 * MIN || s.status === 'cancelled' || s.status === 'completed')) return false;
      if (which === 'past' && (s.status !== 'completed' && !(t < now - 90 * MIN && s.status !== 'cancelled'))) return false;
      if (which === 'cancelled' && s.status !== 'cancelled') return false;
      if (SF.teacher && teacherOf(c) !== SF.teacher) return false;
      return !q || [teacherOf(c), c.language, c.level].join(' ').toLowerCase().indexOf(q) > -1;
    });
    if (which === 'past' || which === 'cancelled') list.reverse();
    return list;
  }
  function scheduleView(which) {
    which = ['week', 'upcoming', 'past', 'cancelled'].indexOf(which) > -1 ? which : 'week';
    var teachers = SCH.map(function (s) { return teacherOf(s.cohorts || {}); }).filter(function (v, i, a) { return a.indexOf(v) === i; }).sort();
    var label = { week: 'The next seven days', upcoming: 'Upcoming', past: 'Past', cancelled: 'Cancelled' };
    var tab = function (k) { return '<a class="btn btn--' + (k === which ? 'primary' : 'quiet') + ' btn--sm" href="#/schedule/' + k + '"' + (k === which ? ' aria-current="page"' : '') + '>' + esc(label[k]) + '</a>'; };
    var week = scheduleList('week').length;
    return flash() + '<div class="view__head"><div><h1 class="t-h1">Schedule</h1><p class="t-lead">' + esc(A.plural(week, 'class date', 'class dates') + ' in the next seven days. Times in each class’s own timezone, yours beside them when it differs.') + '</p></div></div>' +
      '<div class="grid rise"><section class="card span-12" style="--i:0"><div class="btn-row ad-tabs" role="navigation" aria-label="Which dates">' + ['week', 'upcoming', 'past', 'cancelled'].map(tab).join('') + '</div>' +
      '<div class="ad-filters"><input class="st-in" type="search" data-schf="q" placeholder="Search by teacher, language or level" value="' + esc(SF.q) + '" aria-label="Search">' +
      '<select class="st-in" data-schf="teacher" aria-label="Teacher">' + opt('', 'Every teacher', SF.teacher) + teachers.map(function (t) { return opt(t, t, SF.teacher); }).join('') + '</select></div>' +
      '<div data-schrows data-which="' + which + '">' + scheduleRowsHtml(which) + '</div><p class="t-small ad-msg" data-roommsg aria-live="polite"></p></section>' + sampleLine() + '</div>';
  }
  function scheduleRowsHtml(which) {
    var list = scheduleList(which);
    if (!list.length) return '<p class="t-body" style="margin-top:12px">' + esc(which === 'cancelled' ? 'No cancelled dates.' : 'No class dates here.') + '</p>';
    var out = '', last = '';
    list.slice(0, 300).forEach(function (s) {
      var c = s.cohorts || {}, d = day(s.scheduled_at, MY_TZ);
      if (d !== last) { out += '<h3 class="t-h3 ad-day">' + esc(A.cap(longDay(s.scheduled_at, MY_TZ))) + '</h3>'; last = d; }
      out += dateRow(s, c, true);
    });
    return '<div class="tt-week">' + out + '</div>' + (list.length > 300 ? '<p class="t-small">Showing the first 300. Narrow the search to see the rest.</p>' : '');
  }
  /* One class date, with Change for a scheduled one ahead and Open the room around its time */
  function dateRow(s, c, withClass) {
    var t = new Date(s.scheduled_at).getTime(), now = Date.now(), z = zoneOf(c.timezone);
    var canChange = s.status === 'scheduled' && t > now + 15 * MIN, room = (s.status === 'live' || s.status === 'scheduled') && now >= t - 15 * MIN && now <= t + 90 * MIN;
    var mine = z !== MY_TZ && hm(s.scheduled_at, z) + day(s.scheduled_at, z) !== hm(s.scheduled_at, MY_TZ) + day(s.scheduled_at, MY_TZ) ? hm(s.scheduled_at, MY_TZ) + ' your time' : '';
    var title = withClass ? A.className(c) : hm(s.scheduled_at, z);
    var bits = withClass ? [teacherOf(c), A.plural(c.enrolled_count || 0, 'student', 'students'), DATE_STATUS[s.status] || s.status, mine, z] : [DATE_STATUS[s.status] || s.status, mine];
    return '<div class="ad-item"><div class="tt-row ad-act' + (s.status === 'cancelled' ? ' is-off' : '') + '"><span class="tt-row__time">' + esc(withClass ? hm(s.scheduled_at, z) : A.cap(day(s.scheduled_at, z))) + '</span><span>' +
      (withClass && c.id ? '<a class="linkish" href="#/classes/' + esc(c.id) + '"><b>' + esc(title) + '</b></a>' : '<b>' + esc(title) + '</b>') + '<small>' + esc(bits.filter(Boolean).join(', ')) + '</small></span><span class="btn-row ad-act__btns">' +
      (room ? '<button class="btn btn--primary btn--sm" type="button" data-room="' + esc(s.id) + '">' + A.icon('play') + 'Open the room</button>' : '') +
      (canChange ? '<button class="btn btn--ghost btn--sm" type="button" data-askdate="' + esc(s.id) + '">Change</button>' : '') + '</span></div><div data-box="' + esc(s.id) + '"></div></div>';
  }
  /* A class date and its class, from the schedule or from the open class */
  function sessionById(id) {
    var s = (SCH || (FILE ? FILE.sessions : [])).filter(function (x) { return x.id === id; })[0] || null;
    return s ? { s: s, c: s.cohorts || (FILE && FILE.klass) || {} } : null;
  }
  function askDate(id) {
    var x = sessionById(id); if (!x) return;
    var s = x.s, c = x.c, z = zoneOf(c.timezone), TZ = window.AlimunTZ, p = TZ.zonedParts(new Date(s.scheduled_at), z);
    var ymd = p.y + '-' + String(p.m).padStart(2, '0') + '-' + String(p.d).padStart(2, '0');
    askBox(id, '<p class="t-body"><b>' + esc(A.className(c) + ', ' + when(s.scheduled_at, z)) + '</b></p>' +
      '<div class="st-row">' + field('New date (' + z + ')', '<input class="st-in" type="date" data-date value="' + esc(ymd) + '">') + field('New start time (' + z + ')', '<input class="st-in" type="time" step="300" data-time value="' + esc(TZ.fmtMinutes(p.minutes)) + '">') + '</div>' +
      field('Reason, included in the email', '<input class="st-in" data-reason maxlength="1000" placeholder="For example: the teacher is unwell">', 'Optional') +
      '<label class="st-day"><input type="checkbox" data-notify checked><span>Email the class’s students and the teacher</span></label>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-dodate="reschedule" data-id="' + esc(id) + '">Move to this date</button><button class="btn btn--ghost btn--sm" type="button" data-dodate="cancel" data-id="' + esc(id) + '">Cancel this date</button><button class="btn btn--quiet btn--sm" type="button" data-cancel>Close</button></div>');
  }
  function doDate(btn) {
    var id = btn.getAttribute('data-id'), op = btn.getAttribute('data-dodate'), box = btn.closest('.ad-confirm'), msg = box.querySelector('[data-msg]'), x = sessionById(id), s = x.s, c = x.c;
    var body = { session_id: id, op: op, reason: box.querySelector('[data-reason]').value.trim(), notify: box.querySelector('[data-notify]').checked };
    if (op === 'reschedule') {
      body.date = box.querySelector('[data-date]').value; body.time = String(box.querySelector('[data-time]').value || '').slice(0, 5);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(body.date) || !/^\d{2}:\d{2}$/.test(body.time)) { say(msg, 'Give the new date and time.', true); return; }
    } else if (!btn.hasAttribute('data-sure')) {
      btn.setAttribute('data-sure', ''); btn.textContent = 'Yes, cancel it';
      say(msg, 'Cancel the class on ' + when(s.scheduled_at, c.timezone) + '?' + (body.notify ? ' The students and the teacher will be emailed.' : ' Nobody will be emailed.'));
      return;
    }
    var label = op === 'cancel' ? 'The ' + A.className(c) + ' class on ' + day(s.scheduled_at, c.timezone) + ' was cancelled.' : 'The ' + A.className(c) + ' class on ' + day(s.scheduled_at, c.timezone) + ' moved to ' + body.date + ' at ' + body.time + ' (' + zoneOf(c.timezone) + ').';
    if (!real()) {
      if (op === 'cancel') s.status = 'cancelled';
      else { var TZ = window.AlimunTZ, ymd = body.date.split('-').map(Number); s.scheduled_at = TZ.zonedToUtc(ymd[0], ymd[1], ymd[2], TZ.toMinutes(body.time), zoneOf(c.timezone)).toISOString(); }
      if (SCH) SCH.sort(function (a, b) { return a.scheduled_at.localeCompare(b.scheduled_at); });
      FLASH = label + ' (Sample: nothing was saved or sent.)'; A.rerender(); return;
    }
    btn.disabled = true; say(msg, 'Saving…');
    window.AlimunData.adminSessionUpdate(body).then(function (r) { done(label + (body.notify ? emailNote(r) : '')); },
      function (e) { btn.disabled = false; say(msg, 'That did not work: ' + errText(e), true); });
  }

  /* ---------- Events ---------- */
  function bind() {
    if (root.__aclasses) return;
    root.__aclasses = true;
    root.addEventListener('input', function (e) {
      var k = e.target.getAttribute('data-cf'), b;
      if (k === 'q' && CL) { CF.q = e.target.value; b = root.querySelector('[data-crows]'); if (b) b.innerHTML = classRowsHtml(b.getAttribute('data-which')); }
      k = e.target.getAttribute('data-schf');
      if (k === 'q' && SCH) { SF.q = e.target.value; b = root.querySelector('[data-schrows]'); if (b) b.innerHTML = scheduleRowsHtml(b.getAttribute('data-which')); }
    });
    root.addEventListener('change', function (e) {
      var k = e.target.getAttribute('data-cf'), b;
      if (k === 'lang' && CL) { CF.lang = e.target.value; b = root.querySelector('[data-crows]'); if (b) b.innerHTML = classRowsHtml(b.getAttribute('data-which')); return; }
      k = e.target.getAttribute('data-schf');
      if (k === 'teacher' && SCH) { SF.teacher = e.target.value; b = root.querySelector('[data-schrows]'); if (b) b.innerHTML = scheduleRowsHtml(b.getAttribute('data-which')); return; }
      if (e.target.hasAttribute('data-teacher')) teacherPicked();
      if (e.target.hasAttribute('data-tier')) { var s = root.querySelector('[data-seats]'); if (s) s.placeholder = TIER_SEATS[e.target.value] || ''; }
    });
    root.addEventListener('submit', function (e) {
      var f = e.target;
      if (f.hasAttribute('data-classform')) { e.preventDefault(); saveClass(f); }
      else if (f.hasAttribute('data-newclass')) { e.preventDefault(); createClass(f); }
      else if (f.hasAttribute('data-add')) {
        e.preventDefault();
        var fd = new FormData(f);
        doMove(f.querySelector('[type="submit"]'), fd.get('student'), FILE.klass.id, !!fd.get('notify'), f.querySelector('[data-msg]'));
      }
    });
    root.addEventListener('click', function (e) {
      var more = e.target.closest('[data-showrest]');
      if (more) { var rest = root.querySelector('[data-rest]'); if (rest) rest.hidden = false; more.parentNode.remove(); return; }
      var b = e.target.closest('[data-askmove],[data-askremove],[data-domove],[data-doremove],[data-askstatus],[data-dostatus],[data-askdate],[data-dodate],[data-cancel]');
      if (!b || b.disabled) return;
      if (b.hasAttribute('data-askmove')) askMove(b.getAttribute('data-askmove'));
      else if (b.hasAttribute('data-askremove')) askRemove(b.getAttribute('data-askremove'));
      else if (b.hasAttribute('data-domove')) { var box = b.closest('.ad-confirm'); doMove(b, b.getAttribute('data-domove'), box.querySelector('[data-to]').value, box.querySelector('[data-notify]').checked, box.querySelector('[data-msg]')); }
      else if (b.hasAttribute('data-doremove')) doRemove(b);
      else if (b.hasAttribute('data-askstatus')) askStatus(b.getAttribute('data-askstatus'));
      else if (b.hasAttribute('data-dostatus')) doStatus(b);
      else if (b.hasAttribute('data-askdate')) askDate(b.getAttribute('data-askdate'));
      else if (b.hasAttribute('data-dodate')) doDate(b);
      else if (b.hasAttribute('data-cancel')) b.closest('.ad-confirm').parentNode.innerHTML = '';
    });
  }

  function mounter(kind) {
    var no = 0;
    return function (view, parts, helpers) {
      var my = ++no;
      A = helpers; root = view;
      bind();
      if (!root.innerHTML) root.innerHTML = loading();
      var p0 = parts[0], go;
      if (kind === 'schedule') { if (real() && !parts.length) SCH = null; go = loadSchedule().then(function () { FILE = null; return { html: scheduleView(p0), title: 'Schedule' }; }); }
      else if (p0 === 'new') go = loadClasses().then(function () { return { html: newClassView(), title: 'Create a class', after: teacherPicked }; });
      else if (p0 && p0 !== 'list') go = loadClasses().then(function () {
        SCH = null;
        var c = classById(p0);
        if (!c && !real()) return { html: back('#/classes', 'Classes') + '<div class="card"><p class="t-body">This class could not be found.</p></div>' };
        var file = !real() && FILE && FILE.klass && FILE.klass.id === p0 ? Promise.resolve(FILE) : real() ? window.AlimunData.adminClassFile(p0, c ? c.language : '') : Promise.resolve(sampleFile(c));
        return file.then(function (f) {
          if (!f.klass) return { html: back('#/classes', 'Classes') + '<div class="card"><p class="t-body">This class could not be found.</p></div>' };
          if (real() && !c) return window.AlimunData.adminClassFile(p0, f.klass.language).then(function (g) { FILE = g; return { html: classFileView(g), title: A.className(g.klass) }; });
          FILE = f; return { html: classFileView(f), title: A.className(f.klass) };
        });
      });
      else { if (real()) CL = null; go = loadClasses().then(function () { FILE = null; return { html: classesView(parts[1]), title: 'Classes' }; }); }
      return go.then(function (res) {
        if (my !== no) return { stale: true };
        root.innerHTML = res.html;
        if (res.after) res.after();
        return res;
      }).catch(function (e) {
        console.warn('[Alimun] Admin ' + kind + ' did not load', e && e.message);
        if (my === no) root.innerHTML = '<div class="card"><p class="t-body">This did not load: ' + esc(errText(e)) + '.</p></div>';
        return { stale: true };
      });
    };
  }
  window.AlimunAdminClasses = { mount: mounter('classes'), reset: function () {} };
  window.AlimunAdminSchedule = { mount: mounter('schedule'), reset: function () {} };
})();
