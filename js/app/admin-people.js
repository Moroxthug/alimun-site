/* Alimun admin, part 2: people (docs/DASHBOARD_PLAN.md, step 15, admin pages). English only.
   #/students                 every student: search by name, email or language; filter by plan and class
   #/students/<id>            a student's file: plan and payment status, level and goal, classes, activity, homework,
                              teachers' notes; change level, goal and plan; email them; open their dashboard read-only
   #/students/signups         email signups from the site's forms, with a CSV download
   #/students/invite          invite a student by email (also #/teachers/invite for a teacher)
   #/teachers[/list/<which>]  applications and teachers: pending, approved, rejected or suspended, all; approve, reject,
                              suspend or reinstate one or several (with the emails of /api/admin/teacher set-status)
   #/teachers/<id>            a teacher's file: profile, languages, rate and level, classes, availability, reviews,
                              payouts; status; email them; open their dashboard read-only
   View-as opens /app?as=<id> or /app/teach?as=<id>, where js/app/data.js blocks every write. */
(function () {
  'use strict';
  var A = null, root = null, ST = null, TE = null, EMAILS = {}, FILE = null;
  var DAY = 86400000;
  var PLANS = { free: 'Free', community: 'Community', focused: 'Focused', intensive: 'Intensive', private: '1 on 1', onetoone: '1 on 1 (old)', daily: 'Daily', waitlist: 'Waiting list', founding_member: 'Founding member', app: 'App only', open: 'Open class', pack: 'Level pack', exam: 'Exam pack' };
  var PAID_EMAIL = { community: true, focused: true, intensive: true, private: true };
  var GOALS = { foundations: 'Strong foundations', relocation: 'Living or moving abroad', professional: 'Work', academic: 'Study or an exam', pleasure: 'For the pleasure of it' };
  var LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  var LANGS = ['English', 'German', 'Spanish', 'French', 'Portuguese', 'Italian', 'Mandarin', 'Japanese', 'Arabic'];
  var STATUS = { pending: 'Waiting for review', approved: 'Approved', suspended: 'Rejected or suspended' };
  var PAY = { active: 'Subscription active', past_due: 'Payment overdue', cancelled: 'Subscription cancelled' };
  var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function esc(s) { return A.esc(s); }
  /* A plan given without payment (student_profiles.plan_given_until) */
  function givenOn(s) { var u = s && s.plan_given_until ? Date.parse(s.plan_given_until) : NaN; return isFinite(u) && u > Date.now(); }
  /* Paying: a Stripe subscription, or an active purchase in entitlements (the pricing engine, 12 Nov 2026); admin grants and trials do not count */
  function paying(s) { return !isTest(s) && (s.stripe_subscription_status === 'active' || !!(ST && ST.paid && ST.paid[s.user_id])); }
  /* The owner's own accounts: shown, marked, and left out of the counts */
  function isTest(s) { return !!(ST && ST.tests && ST.tests[s.user_id]); }
  function payLine(s) { var e = ST && ST.paid && ST.paid[s.user_id]; if (e && s.stripe_subscription_status !== 'active') return 'paid: ' + e; return PAY[s.stripe_subscription_status] || (givenOn(s) ? 'given until ' + day(s.plan_given_until) : s.plan_given_until ? 'given plan ended ' + day(s.plan_given_until) : ''); }
  function dateInput(iso) { if (!iso) return ''; var d = new Date(iso); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function real() { return A.mode() === 'real'; }
  function day(d) { return A.fmt(d, { day: 'numeric', month: 'short', year: 'numeric' }); }
  function opt(v, label, cur) { return '<option value="' + esc(v) + '"' + (String(v) === String(cur == null ? '' : cur) ? ' selected' : '') + '>' + esc(label) + '</option>'; }
  function field(label, control, hint) { return '<label class="st-field"><span class="st-lbl">' + esc(label) + '</span>' + control + (hint ? '<span class="t-small st-hint">' + esc(hint) + '</span>' : '') + '</label>'; }
  function back(href, label) { return '<a class="rd-back" href="' + href + '">' + A.icon('back') + '<span>' + esc(label) + '</span></a>'; }
  function loading() { return '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="Loading">' + A.loaderInner() + '</div></div>'; }
  function say(sel, text, bad) { var m = root.querySelector(sel); if (m) { m.textContent = text; m.classList.toggle('is-bad', !!bad); } }
  function sampleLine() { return real() ? '' : '<p class="t-tiny span-12">This is sample data; nothing here is saved or sent.</p>'; }
  function cohortOf(list, id) { return (list || []).filter(function (c) { return c.id === id; })[0] || null; }

  /* ---------- Sample ---------- */
  function sampleStudents() {
    var now = Date.now(), ago = function (d) { return new Date(now - d * DAY).toISOString(); };
    var cos = [{ id: 'c1', language: 'German', level: 'B1', tier: 'focused', status: 'open', teacher_profiles: { full_name: 'Ana Weber' } }, { id: 'c2', language: 'English', level: 'B2', tier: 'focused', status: 'full', teacher_profiles: { full_name: 'James Hall' } }];
    var st = [
      ['s1', 'Lukas Brandt', 'German', 'B1', 'focused', 'relocation', 'active', 'c1', 40, 'lukas@example.com'],
      ['s2', 'Mei Chen', 'German', 'B1', 'focused', 'professional', 'active', 'c1', 35, 'mei.chen@example.com'],
      ['s3', 'Sara Rossi', 'English', 'B2', 'focused', 'academic', 'past_due', 'c2', 80, 'sara.rossi@example.com'],
      ['s4', 'Omar Haddad', 'German', 'A2', 'free', 'foundations', null, null, 3, 'omar.h@example.com'],
      ['s5', 'Ines Duarte', 'French', 'A2', 'waitlist', 'pleasure', null, null, 1, 'ines@example.com']
    ].map(function (x) { EMAILS['u' + x[0]] = x[9]; return { id: x[0], user_id: 'u' + x[0], full_name: x[1], language: x[2], level: x[3], tier: x[4], goal_track: x[5], stripe_subscription_status: x[6], enrolled_cohort_id: x[7], created_at: ago(x[8]) }; });
    return { sample: true, students: st, cohorts: cos };
  }
  function sampleStudentFile(s) {
    var now = Date.now(), ago = function (d) { return new Date(now - d * DAY).toISOString(); }, act = [];
    for (var i = 0; i < 30; i++) if (i % 3 !== 1) act.push({ ex_key: 'book:x', updated_at: ago(i) });
    var cards = []; for (i = 0; i < 120; i++) cards.push({ box: i < 74 ? 4 : 1 });
    return { profile: Object.assign({ placement: { level: s.level }, timezone: 'Europe/Berlin' }, s),
      enrollments: s.enrolled_cohort_id ? [{ id: 'e1', status: 'active', enrolled_at: ago(30), cohorts: cohortOf(ST.cohorts, s.enrolled_cohort_id) }] : [],
      submissions: [{ status: 'graded', score: 82, submitted_at: ago(4), assignments: { title: 'Ein Brief an den Vermieter' } }, { status: 'pending', score: null, submitted_at: ago(1), assignments: { title: 'Mein Wochenende' } }],
      notes: [{ feedback_text: 'Very good role play with the landlord.', is_private: false, created_at: ago(6) }, { feedback_text: 'Moving flat this month, a little tired.', is_private: true, created_at: ago(2) }],
      activity: act, cards: cards, oto: [],
      tutor: { free_seconds: 330, plan_seconds: 2700, plan_granted: 3600, plan_period: new Date().toISOString().slice(0, 7), credit_seconds: 0 },
      tutorLog: [{ seconds: -270, bucket: 'free', reason: 'use', created_at: ago(2) }, { seconds: -900, bucket: 'plan', reason: 'use', created_at: ago(3) }, { seconds: 3600, bucket: 'plan', reason: 'plan_month', note: new Date().toISOString().slice(0, 7), created_at: ago(20) }, { seconds: 600, bucket: 'free', reason: 'free_grant', created_at: ago(21) }] };
  }
  function sampleTeachers() {
    var now = Date.now(), ago = function (d) { return new Date(now - d * DAY).toISOString(); };
    var te = [
      { id: 't1', user_id: 'ut1', full_name: 'Ana Weber', languages: ['German', 'English'], experience_years: 12, specialty: 'German for moving abroad', bio: 'I have taught German to adults for twelve years.', location: 'Leipzig', hourly_rate: 28, rating: 4.9, tier_level: 'focused', status: 'approved', created_at: ago(200), sessions_delivered: 184 },
      { id: 't2', user_id: 'ut2', full_name: 'James Hall', languages: ['English'], experience_years: 8, specialty: 'Exam preparation', bio: '', location: 'Bristol', hourly_rate: 26, rating: 4.7, tier_level: 'focused', status: 'approved', created_at: ago(150), sessions_delivered: 120 },
      { id: 't3', user_id: 'ut3', full_name: 'Léa Martin', languages: ['French'], experience_years: 5, specialty: 'Conversation and pronunciation', bio: 'Native French speaker, DELF examiner.', location: 'Lyon', hourly_rate: 22, rating: 0, tier_level: 'community', status: 'pending', hiring_stage: 'interview_booked', created_at: ago(1), sessions_delivered: 0 },
      { id: 't4', user_id: 'ut4', full_name: 'Tomás Ruiz', languages: ['Spanish'], experience_years: 3, specialty: 'Spanish for travel', bio: '', location: 'Valencia', hourly_rate: 22, rating: 0, tier_level: 'community', status: 'pending', hiring_stage: 'applied', created_at: ago(0.2), sessions_delivered: 0 },
      { id: 't6', user_id: 'ut6', full_name: 'Maya Chen', languages: ['English'], experience_years: 6, specialty: 'Business English', bio: 'CELTA, six years with adult groups.', location: 'Toronto', hourly_rate: 22, rating: 0, tier_level: 'community', status: 'pending', hiring_stage: 'pre_approved', created_at: ago(4), sessions_delivered: 0 },
      { id: 't7', user_id: 'ut7', full_name: 'Jonas Becker', languages: ['German'], experience_years: 4, specialty: 'German grammar made simple', bio: '', location: 'Hamburg', hourly_rate: 22, rating: 0, tier_level: 'community', status: 'pending', hiring_stage: 'trial_scheduled', created_at: ago(6), sessions_delivered: 0 },
      { id: 't8', user_id: 'ut8', full_name: 'Sara Okafor', languages: ['English'], experience_years: 9, specialty: 'IELTS and conversation', bio: '', location: 'Lagos', hourly_rate: 22, rating: 0, tier_level: 'community', status: 'pending', hiring_stage: 'trial_done', created_at: ago(9), sessions_delivered: 0 },
      { id: 't5', user_id: 'ut5', full_name: 'Paul Grant', languages: ['English'], experience_years: 1, specialty: '', bio: '', location: '', hourly_rate: 22, rating: 0, tier_level: 'community', status: 'suspended', created_at: ago(60), sessions_delivered: 0 }
    ];
    te.forEach(function (x, i) { EMAILS[x.user_id] = ['ana.weber', 'james.hall', 'lea.martin', 'tomas.ruiz', 'maya.chen', 'jonas.becker', 'sara.okafor', 'paul.grant'][i] + '@example.com'; });
    return { sample: true, teachers: te, cohorts: [
      { id: 'c1', teacher_id: 't1', language: 'German', level: 'B1', tier: 'focused', status: 'open', enrolled_count: 9, max_students: 17 },
      { id: 'c3', teacher_id: 't1', language: 'German', level: 'A2', tier: 'intensive', status: 'open', enrolled_count: 5, max_students: 6 },
      { id: 'c2', teacher_id: 't2', language: 'English', level: 'B2', tier: 'focused', status: 'full', enrolled_count: 17, max_students: 17 }] };
  }
  function sampleTeacherFile(t) {
    var now = Date.now(), ago = function (d) { return new Date(now - d * DAY).toISOString(); };
    var ivs = t.hiring_stage === 'interview_booked' ? [{ id: 'iv1', status: 'booked', scheduled_at: new Date(now + 8 * 60000).toISOString(), minutes: 30, teacher_tz: 'Europe/Paris' }] : [];
    return { interviews: ivs, profile: t, cohorts: TE.cohorts.filter(function (c) { return c.teacher_id === t.id; }).map(function (c) { return Object.assign({ schedule_days: ['Tuesday', 'Thursday'], schedule_time: '18:30', timezone: 'Europe/Berlin' }, c); }),
      slots: t.status === 'approved' ? [{ day_of_week: 2, start_time: '17:00:00', end_time: '21:00:00', timezone: 'Europe/Berlin' }, { day_of_week: 4, start_time: '17:00:00', end_time: '21:00:00', timezone: 'Europe/Berlin' }] : [],
      reviews: t.status === 'approved' ? [{ rating: 5, review_text: 'Clear, patient and fun.', created_at: ago(9) }] : [], payouts: t.status === 'approved' ? [{ period_start: ago(55).slice(0, 10), period_end: ago(25).slice(0, 10), amount_eur: 540, status: 'paid' }] : [] };
  }

  /* ---------- Loading ---------- */
  function loadStudents() {
    if (ST) return Promise.resolve(ST);
    if (!real()) return Promise.resolve(ST = sampleStudents());
    return window.AlimunData.adminStudents().then(function (d) {
      ST = d;
      var ids = d.students.map(function (s) { return s.user_id; }).filter(Boolean).slice(0, 500);
      return (ids.length ? window.AlimunData.adminEmails(ids).then(function (e) { Object.assign(EMAILS, e); }, function () { ST.noEmails = true; }) : Promise.resolve()).then(function () { return ST; });
    });
  }
  function loadTeachers() {
    if (TE) return Promise.resolve(TE);
    if (!real()) return Promise.resolve(TE = sampleTeachers());
    return window.AlimunData.adminTeachers().then(function (d) {
      TE = d;
      var ids = d.teachers.map(function (s) { return s.user_id; }).filter(Boolean).slice(0, 500);
      return (ids.length ? window.AlimunData.adminEmails(ids).then(function (e) { Object.assign(EMAILS, e); }, function () { TE.noEmails = true; }) : Promise.resolve()).then(function () { return TE; });
    });
  }

  /* ---------- Students ---------- */
  var SF = { q: '', plan: '', lang: '', klass: '' };
  function studentRows() {
    var q = SF.q.trim().toLowerCase();
    return ST.students.filter(function (s) {
      if (q && [s.full_name, EMAILS[s.user_id], s.language].join(' ').toLowerCase().indexOf(q) < 0) return false;
      if (SF.plan === 'paying' && !paying(s)) return false;
      if (SF.plan === 'given' && !givenOn(s)) return false;
      if (SF.plan && SF.plan !== 'paying' && SF.plan !== 'given' && s.tier !== SF.plan) return false;
      if (SF.lang && s.language !== SF.lang) return false;
      if (SF.klass === 'in' && !s.enrolled_cohort_id) return false;
      if (SF.klass === 'none' && s.enrolled_cohort_id) return false;
      return true;
    });
  }
  function studentsView() {
    var langs = ST.students.map(function (s) { return s.language; }).filter(function (v, i, a) { return v && a.indexOf(v) === i; }).sort();
    return '<div class="view__head"><div><h1 class="t-h1">Students</h1><p class="t-lead">' + esc(A.plural(ST.students.filter(function (s) { return !isTest(s); }).length, 'student', 'students') + ', ' + A.plural(ST.students.filter(paying).length, 'paying', 'paying') + '.' + (ST.tests && Object.keys(ST.tests).length ? ' Your test accounts are listed but not counted.' : '')) + '</p></div>' +
      '<div class="btn-row"><a class="btn btn--primary btn--sm" href="#/students/invite">Invite a student</a><a class="btn btn--ghost btn--sm" href="#/students/signups">Email signups</a></div></div>' +
      '<div class="grid rise"><section class="card span-12" style="--i:0"><div class="ad-filters">' +
        '<input class="st-in" type="search" data-sf="q" placeholder="Search by name, email or language" value="' + esc(SF.q) + '" aria-label="Search">' +
        '<select class="st-in" data-sf="plan" aria-label="Plan">' + opt('', 'Every plan', SF.plan) + opt('paying', 'Paying', SF.plan) + opt('given', 'Plan given without payment', SF.plan) + Object.keys(PLANS).map(function (k) { return opt(k, PLANS[k], SF.plan); }).join('') + '</select>' +
        '<select class="st-in" data-sf="lang" aria-label="Language">' + opt('', 'Every language', SF.lang) + langs.map(function (l) { return opt(l, l, SF.lang); }).join('') + '</select>' +
        '<select class="st-in" data-sf="klass" aria-label="Class">' + opt('', 'In a class or not', SF.klass) + opt('in', 'In a class', SF.klass) + opt('none', 'Not in a class', SF.klass) + '</select></div>' +
        (ST.noEmails ? '<p class="t-small st-msg is-bad">Emails could not be loaded, so the search covers names and languages only.</p>' : '') +
        '<div class="tt-week" data-srows>' + studentRowsHtml() + '</div></section>' + sampleLine() + '</div>';
  }
  function studentRowsHtml() {
    var list = studentRows();
    if (!list.length) return '<p class="t-body" style="margin-top:12px">No student matches.</p>';
    /* A table: one student per row, the columns the admin scans (owner, 12 Nov 2026: corporate-grade console) */
    return '<div class="dt-wrap"><table class="dt"><thead><tr><th>Student</th><th>Learning</th><th>Plan</th><th>Payment</th><th>Class</th><th class="r">Joined</th></tr></thead><tbody>' + list.slice(0, 300).map(function (s) {
      var co = cohortOf(ST.cohorts, s.enrolled_cohort_id), pay = payLine(s);
      return '<tr data-href="#/students/' + esc(s.id) + '"><td><a href="#/students/' + esc(s.id) + '">' + esc(s.full_name || 'Student') + '</a>' + (isTest(s) ? ' <span class="m">(your test account)</span>' : '') + '<div class="m">' + esc(EMAILS[s.user_id] || '') + '</div></td>' +
        '<td>' + esc([s.language, s.level].filter(Boolean).join(' ')) + '</td><td>' + esc(PLANS[s.tier] || s.tier || '') + '</td>' +
        '<td class="nw"><span class="dot' + (paying(s) ? '' : s.stripe_subscription_status === 'past_due' ? ' dot--bad' : givenOn(s) ? ' dot--warn' : ' dot--off') + '"></span>' + esc(pay ? A.cap(pay) : 'None') + '</td>' +
        '<td>' + esc(co ? A.className(co) : '') + '</td><td class="r m">' + esc(day(s.created_at)) + '</td></tr>';
    }).join('') + '</tbody></table></div>' + (list.length > 300 ? '<p class="t-small">Showing the first 300. Narrow the search to see the rest.</p>' : '');
  }
  function studentFileView(s, f) {
    var p = f.profile || s, email = EMAILS[p.user_id] || '';
    var days = {}; f.activity.forEach(function (a) { days[String(a.updated_at).slice(0, 10)] = true; });
    var last = f.activity[0] && f.activity[0].updated_at, learned = f.cards.filter(function (c) { return c.box >= 3; }).length;
    var html = back('#/students', 'Students') + '<div class="view__head"><div><h1 class="t-h1">' + esc(p.full_name || '') + '</h1><p class="t-lead">' + esc([email, p.language + ' ' + (p.level || ''), 'Joined ' + day(p.created_at)].filter(Boolean).join('. ') + '.') + '</p></div>' +
      '<div class="btn-row"><a class="btn btn--primary btn--sm" href="/app?as=' + esc(p.id) + '" target="_blank" rel="noopener">Open their dashboard, read-only</a></div></div><div class="grid rise">';
    var paid = p.stripe_subscription_status === 'active';
    html += '<form class="card span-7 st-form" style="--i:0;max-width:none;margin-top:0" data-sfile="' + esc(p.id) + '"><h2 class="t-h2">Plan and level</h2>' +
      '<p class="t-body">' + esc((PLANS[p.tier] || p.tier) + '. ' + A.cap(payLine(p) || 'no subscription') + '.') + '</p>' +
      '<div class="st-row">' + field('Level', '<select class="st-in" name="level">' + LEVELS.map(function (l) { return opt(l, l, p.level); }).join('') + '</select>') +
        field('Goal', '<select class="st-in" name="goal_track">' + Object.keys(GOALS).map(function (g) { return opt(g, GOALS[g], p.goal_track); }).join('') + '</select>') + '</div>' +
      field('Plan', '<select class="st-in" name="tier">' + Object.keys(PLANS).map(function (k) { return opt(k, PLANS[k], p.tier); }).join('') + '</select>',
        paid ? 'This student pays through Stripe: changing the plan here does not change what they pay, and the next payment update sets it back.' : 'Changing the plan here does not charge or refund anything.') +
      field('Give it without payment, until', '<input class="st-in" type="date" name="given_until" min="' + esc(dateInput(new Date().toISOString())) + '" value="' + esc(givenOn(p) ? dateInput(p.plan_given_until) : '') + '">',
        'With a date, the plan above works for classes, live lessons, 1 on 1 and tutor minutes until the end of that day, with no Stripe payment. Leave it empty to stop a given plan.') +
      '<label class="st-day"><input type="checkbox" name="tell" checked><span>Email them when their plan changes to a paid plan</span></label>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="submit">Save</button></div><p class="t-small st-msg" data-msg="sfile" aria-live="polite"></p></form>';
    html += '<section class="card span-5" style="--i:1"><h2 class="t-h2">Activity</h2><div class="tt-week">' +
      row(last ? A.cap(A.relative(new Date(last).getTime() - Date.now())) : 'Never', 'Last practice') +
      row(String(Object.keys(days).length), 'Days with practice in the last 90') +
      row(String(learned), 'Words learned, of ' + f.cards.length + ' flashcards') +
      row(String(f.submissions.length), 'Pieces of homework handed in') + '</div></section>';
    html += '<section class="card span-6" style="--i:2"><h2 class="t-h2">Classes</h2>' + (f.enrollments.length ? '<div class="tt-week">' + f.enrollments.map(function (e) {
      var co = e.cohorts || {};
      return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(e.status === 'active' ? 'Now' : 'Before') + '</span><span><b>' + esc(A.className(co)) + '</b><small>' + esc((co.teacher_profiles ? co.teacher_profiles.full_name + ', ' : '') + 'since ' + day(e.enrolled_at) + (e.cancelled_at ? ', left ' + day(e.cancelled_at) : '')) + '</small></span></div>';
    }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">Not in a class.</p>') +
      (f.oto.length ? '<h3 class="t-h3" style="margin-top:16px">1:1s</h3><div class="tt-week">' + f.oto.map(function (b) { return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(day(b.scheduled_at)) + '</span><span><b>' + esc(b.kind === 'followup' ? 'Follow-up' : 'Private class') + '</b><small>' + esc((b.teacher_profiles ? b.teacher_profiles.full_name + ', ' : '') + b.status) + '</small></span></div>'; }).join('') + '</div>' : '') +
      (function () { var a = f.enrollments.filter(function (e) { return e.status === 'active' && e.cohorts && e.cohorts.id; })[0];
        return '<div class="btn-row"><a class="btn btn--ghost btn--sm" href="' + (a ? '#/classes/' + esc(a.cohorts.id) : '#/classes') + '">' + esc(a ? 'Their class, to move or remove them' : 'Classes, to add them to one') + '</a></div>'; })() + '</section>';
    html += '<section class="card span-6" style="--i:3"><h2 class="t-h2">Homework</h2>' + (f.submissions.length ? '<div class="tt-week">' + f.submissions.map(function (x) {
      return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(x.status === 'graded' && x.score != null ? x.score + '%' : 'To mark') + '</span><span><b>' + esc(x.assignments && x.assignments.title || '') + '</b><small>handed in ' + esc(day(x.submitted_at)) + '</small></span></div>';
    }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">None handed in yet.</p>') + '</section>';
    html += '<section class="card span-6" style="--i:4"><h2 class="t-h2">Teachers’ notes</h2>' + (f.notes.length ? '<div class="tt-week">' + f.notes.map(function (n) {
      return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(day(n.created_at)) + '</span><span><span class="ts-note__text" dir="auto">' + esc(n.feedback_text) + '</span><small>' + esc(n.is_private ? 'Private: the student does not see it' : 'The student sees it') + '</small></span></div>';
    }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">No notes yet.</p>') + '</section>';
    html += tutorCard(p.id, f);
    if (window.AlimunAdminActivity && p.user_id) html += window.AlimunAdminActivity.timelineCard(A, p.user_id, 6);
    html += mailForm(p.id, 'span-12', 7);
    return html + sampleLine() + '</div>';
  }
  /* Tutor time (docs/AI_TUTOR_PLAN.md, part 1): the stored balance, its latest changes, and adding or removing minutes
     (added time, which never expires; bought time expires 12 months after the purchase, part 6) through /api/tutor?action=admin-grant */
  var LEDGER = { free_grant: 'Free minutes given', plan_month: 'Plan minutes for the month', plan_change: 'Plan changed', expire: 'Minutes ended',
    use: 'Used with the tutor', purchase: 'Bought', refund: 'Refunded', admin: 'Changed by an admin' };
  var BUCKET = { free: 'free minutes', plan: 'plan minutes', credit: 'added or bought' };
  function mins(sec) { var m = Math.round(Math.abs(sec || 0) / 6) / 10; return (sec < 0 ? '−' : '') + m + ' min'; }
  function ledgerName(l) { return l.reason === 'expire' ? (l.bucket === 'credit' ? 'Bought minutes expired after 12 months' : 'Last month’s plan minutes ended') : LEDGER[l.reason] || l.reason; }
  function tutorCard(id, f) {
    var tt = f.tutor, log = f.tutorLog || [];
    var html = '<section class="card span-6" style="--i:5" aria-labelledby="h-tutor"><h2 class="t-h2" id="h-tutor">Tutor time</h2>';
    if (!tt) html += '<p class="t-body" style="margin-top:8px">They have not opened the tutor yet; their free 10 minutes are given the first time they do.</p>';
    else html += '<div class="tt-week">' + row(mins(tt.free_seconds + tt.plan_seconds + tt.credit_seconds), 'Left in all') + row(mins(tt.free_seconds), 'Free minutes') +
      row(mins(tt.plan_seconds), 'Plan minutes for ' + (tt.plan_period || 'this month') + ', of ' + mins(tt.plan_granted)) + row(mins(tt.credit_seconds), 'Added or bought (bought minutes expire after 12 months)') + '</div>';
    if (log.length) html += '<h3 class="t-h3" style="margin-top:16px">Latest changes</h3><div class="tt-week">' + log.map(function (l) {
      return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc((l.seconds > 0 ? '+' : '') + mins(l.seconds)) + '</span><span><b>' + esc(ledgerName(l)) + '</b><small>' + esc((BUCKET[l.bucket] || l.bucket) + ', ' + day(l.created_at) + (l.note ? ', ' + l.note : '')) + '</small></span></div>';
    }).join('') + '</div>';
    html += '<form class="st-form" style="max-width:none;margin-top:16px" data-tgrant="' + esc(id) + '">' +
      '<div class="st-row">' + field('Minutes', '<input class="st-in" type="number" name="minutes" min="-600" max="600" step="1" required>', 'Up to 600. A negative number removes added or bought minutes, never below zero.') +
      field('Why', '<input class="st-in" name="note" maxlength="300" dir="auto">') + '</div>' +
      '<div class="btn-row"><button class="btn btn--ghost btn--sm" type="submit">Change their tutor time</button></div><p class="t-small st-msg" data-msg="tgrant" aria-live="polite"></p></form>';
    return html + '</section>';
  }
  function grantTutor(form) {
    var id = form.getAttribute('data-tgrant'), fd = new FormData(form), minutes = parseInt(fd.get('minutes'), 10), note = String(fd.get('note') || '').trim();
    if (!minutes || Math.abs(minutes) > 600) { say('[data-msg="tgrant"]', 'Write a whole number of minutes between −600 and 600, not 0.', true); return; }
    if (!real()) { say('[data-msg="tgrant"]', 'Saved. (Sample: nothing was saved.)'); return; }
    var btn = form.querySelector('[type="submit"]'); btn.disabled = true;
    window.AlimunData.adminTutorGrant(id, minutes, note).then(function (r) {
      btn.disabled = false;
      var done = r.added_seconds ? (r.added_seconds > 0 ? 'Added ' : 'Removed ') + mins(Math.abs(r.added_seconds)) + '.' : 'Nothing changed: they have no added or bought minutes to remove.';
      /* Only the tutor card is drawn again, with the balance and changes read back from the database */
      return window.AlimunData.adminStudentFile(id).then(function (f) {
        FILE = f;
        var card = root.querySelector('[aria-labelledby="h-tutor"]');
        if (card) card.outerHTML = tutorCard(id, f);
        say('[data-msg="tgrant"]', done);
      });
    }, function (e) { btn.disabled = false; say('[data-msg="tgrant"]', 'That did not work: ' + ((e && e.message) || 'please try again') + '.', true); });
  }
  function row(big, small) { return '<div class="tt-row ad-kv"><span class="tt-row__time">' + esc(big) + '</span><span><small>' + esc(small) + '</small></span></div>'; }
  function mailForm(id, span, i) {
    return '<form class="card ' + span + ' st-form" style="--i:' + i + ';max-width:none;margin-top:0" data-mail="' + esc(id) + '"><h2 class="t-h2">Write to them</h2>' +
      field('Subject', '<input class="st-in" name="subject" maxlength="200" required>') + field('Message', '<textarea class="st-in tc-ta" name="body" rows="5" maxlength="10000" required dir="auto"></textarea>', 'Sent from Alimun’s address to their sign-in email.') +
      '<div class="btn-row"><button class="btn btn--ghost btn--sm" type="submit">Send</button></div><p class="t-small st-msg" data-msg="mail" aria-live="polite"></p></form>';
  }
  function saveStudent(form) {
    var id = form.getAttribute('data-sfile'), s = ST.students.filter(function (x) { return x.id === id; })[0], fd = new FormData(form);
    var gu = String(fd.get('given_until') || ''), guMs = gu ? new Date(gu + 'T23:59:59').getTime() : NaN;
    if (gu && !(guMs > Date.now())) { say('[data-msg="sfile"]', 'Choose a date from today on, or leave it empty.', true); return; }
    var patch = { level: fd.get('level'), goal_track: fd.get('goal_track'), tier: fd.get('tier'), plan_given_until: gu ? new Date(guMs).toISOString() : null }, tell = !!fd.get('tell');
    if (gu && (patch.tier === 'free' || patch.tier === 'waitlist')) { say('[data-msg="sfile"]', 'Choose the plan to give, not Free or Waiting list.', true); return; }
    var prev = FILE.profile || s;
    if (!gu && !prev.plan_given_until) delete patch.plan_given_until;
    var changed = patch.tier !== prev.tier || (gu && !givenOn(prev));
    var done = function (note) { Object.assign(s, patch); Object.assign(FILE.profile, patch); say('[data-msg="sfile"]', 'Saved.' + (note || '')); };
    if (!real()) { done(' (sample: nothing was saved)'); return; }
    var btn = form.querySelector('[type="submit"]'); btn.disabled = true;
    window.AlimunData.adminSave('student_profiles', id, patch).then(function () {
      btn.disabled = false;
      if (changed && tell && PAID_EMAIL[patch.tier]) return window.AlimunData.adminPlanEmail(id, patch.tier).then(function () { done(' They were emailed about their plan.'); }, function () { done(' The email about their plan could not be sent.'); });
      done();
    }, function (e) { btn.disabled = false; say('[data-msg="sfile"]', 'That did not save: ' + (e && e.message || 'please try again') + '.', true); });
  }
  function sendMail(form) {
    var fd = new FormData(form), subject = String(fd.get('subject') || '').trim(), body = String(fd.get('body') || '').trim();
    if (!subject || !body) { say('[data-msg="mail"]', 'Write a subject and a message.', true); return; }
    if (!real()) { say('[data-msg="mail"]', 'Sample: nothing was sent.'); return; }
    var btn = form.querySelector('[type="submit"]'); btn.disabled = true;
    window.AlimunData.adminEmail(form.getAttribute('data-mail'), subject, body).then(function () { btn.disabled = false; form.reset(); say('[data-msg="mail"]', 'Sent.'); },
      function (e) { btn.disabled = false; say('[data-msg="mail"]', 'Not sent: ' + (e && e.message || 'please try again') + '.', true); });
  }

  /* ---------- Signups ---------- */
  function signupsView(list) {
    return back('#/students', 'Students') + '<div class="view__head"><div><h1 class="t-h1">Email signups</h1><p class="t-lead">' + esc(A.plural(list.length, 'address', 'addresses') + ' from the site’s forms.') + '</p></div>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-csv' + (list.length ? '' : ' disabled') + '>Download CSV</button></div></div>' +
      '<div class="grid rise"><section class="card span-12" style="--i:0">' + (list.length ? '<div class="tt-week">' + list.slice(0, 500).map(function (x) {
        return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(day(x.created_at)) + '</span><span><b>' + esc(x.email) + '</b><small>' + esc([x.source, x.locale, x.page].filter(Boolean).join(', ')) + '</small></span></div>';
      }).join('') + '</div>' : '<p class="t-body">No signups yet.</p>') + '</section>' + sampleLine() + '</div>';
  }
  function csv(list) {
    /* A cell that starts like a formula is quoted so a spreadsheet does not run it */
    var cell = function (v) { v = String(v == null ? '' : v); if (/^[=+\-@\t\r]/.test(v)) v = "'" + v; return '"' + v.replace(/"/g, '""') + '"'; };
    var text = 'email,form,language,page,signed_up_at\n' + list.map(function (x) { return [x.email, x.source, x.locale, x.page, x.created_at].map(cell).join(','); }).join('\n');
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type: 'text/csv' })); a.download = 'alimun-email-signups.csv';
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
  }

  /* ---------- Invite ---------- */
  function inviteView(role) {
    return back(role === 'teacher' ? '#/teachers' : '#/students', role === 'teacher' ? 'Teachers' : 'Students') +
      '<div class="view__head"><div><h1 class="t-h1">Invite ' + (role === 'teacher' ? 'a teacher' : 'a student') + '</h1><p class="t-lead">' + esc(role === 'teacher'
        ? 'The account is created as an approved teacher and they get an email with a link to choose their password.'
        : 'The account is created as a student and they get an email with a link to choose their password, then take the level test.') + '</p></div></div>' +
      '<div class="grid rise"><form class="card span-8 st-form" style="--i:0;max-width:none;margin-top:0" data-invite="' + role + '">' +
      field('Email', '<input class="st-in" type="email" name="email" maxlength="200" required autocomplete="off">') +
      field('Full name', '<input class="st-in" name="full_name" maxlength="100" required>') +
      field('Their language', '<select class="st-in" name="ui_lang">' + [['en', 'English'], ['es', 'Spanish'], ['fr', 'French'], ['de', 'German'], ['pt', 'Portuguese'], ['it', 'Italian'], ['zh', 'Chinese'], ['ar', 'Arabic'], ['ma', 'French (Morocco)']].map(function (l) { return opt(l[0], l[1], 'en'); }).join('') + '</select>', 'The invitation and their later emails are written in it. They can change it by opening their dashboard in another language.') +
      (role === 'teacher' ? '<div class="st-row">' + field('Language they teach', '<select class="st-in" name="language">' + LANGS.map(function (l) { return opt(l, l, 'English'); }).join('') + '</select>') +
        field('Specialty', '<input class="st-in" name="specialty" maxlength="200">', 'Optional') + '</div>' : '') +
      '<div class="btn-row"><button class="btn btn--primary" type="submit">Create the account and send the invitation</button></div><p class="t-body st-msg" data-msg="inv" aria-live="polite"></p><div data-invlink></div></form>' +
      '<section class="stage span-4" style="--i:1;background:var(--t-lime)" aria-hidden="true"><div class="bub say">One more for the family.</div>' + A.Cast.drawing('cat') + '</section>' + sampleLine() + '</div>';
  }
  function invite(form) {
    var fd = new FormData(form), role = form.getAttribute('data-invite');
    var body = { role: role, email: String(fd.get('email') || '').trim(), full_name: String(fd.get('full_name') || '').trim(), language: fd.get('language') || '', specialty: String(fd.get('specialty') || '').trim(), ui_lang: fd.get('ui_lang') || 'en' };
    if (!body.email || !body.full_name) { say('[data-msg="inv"]', 'Write the email address and the name.', true); return; }
    if (!real()) { say('[data-msg="inv"]', 'Sample: no account was created and nothing was sent.'); return; }
    var btn = form.querySelector('[type="submit"]'); btn.disabled = true; say('[data-msg="inv"]', 'Creating the account…');
    window.AlimunData.adminInvite(body).then(function (r) {
      btn.disabled = false; form.reset(); ST = null; TE = null;
      say('[data-msg="inv"]', r.emailed ? 'Done. ' + body.full_name + ' has been emailed a link to sign in.' : 'The account was created, but the email could not be sent. Send them this sign-in link yourself; it works once and only for a limited time:');
      if (!r.emailed && r.link) {
        var box = root.querySelector('[data-invlink]');
        box.innerHTML = '<input class="st-in" readonly value="' + esc(r.link) + '" aria-label="Sign-in link"><div class="btn-row"><button class="btn btn--ghost btn--sm" type="button" data-copy>Copy the link</button></div>';
      }
    }, function (e) { btn.disabled = false; say('[data-msg="inv"]', (e && e.message) || 'The invitation did not work. Please try again.', true); });
  }

  /* ---------- Teachers ---------- */
  var TF = { q: '' }, SEL = {};
  function counts() { var c = { pending: 0, approved: 0, suspended: 0, all: TE.teachers.length }; TE.teachers.forEach(function (t) { c[t.status] = (c[t.status] || 0) + 1; }); return c; }
  function teachersView(which) {
    var c = counts();
    which = which || (c.pending ? 'pending' : 'approved');
    var tab = function (k, label) { return '<a class="btn btn--' + (k === which ? 'primary' : 'quiet') + ' btn--sm" href="#/teachers/list/' + k + '"' + (k === which ? ' aria-current="page"' : '') + '>' + esc(label + ' (' + c[k] + ')') + '</a>'; };
    return '<div class="view__head"><div><h1 class="t-h1">Teachers</h1><p class="t-lead">' + esc(A.plural(c.approved, 'approved teacher', 'approved teachers') + ', ' + A.plural(c.pending, 'application', 'applications') + ' waiting.') + '</p></div>' +
      '<div class="btn-row"><a class="btn btn--ghost btn--sm" href="#/teachers/hours">Interview hours</a><a class="btn btn--primary btn--sm" href="#/teachers/invite">Invite a teacher</a></div></div>' +
      '<div class="grid rise"><section class="card span-12" style="--i:0"><div class="btn-row ad-tabs" role="navigation" aria-label="Which teachers">' + tab('pending', 'Waiting for review') + tab('approved', 'Approved') + tab('suspended', 'Rejected or suspended') + tab('all', 'All') + '</div>' +
      '<div class="ad-filters"><input class="st-in" type="search" data-tf placeholder="Search by name, email, language or specialty" value="' + esc(TF.q) + '" aria-label="Search"></div>' +
      '<div data-trows data-which="' + which + '">' + teacherRowsHtml(which) + '</div></section>' + sampleLine() + '</div>';
  }
  function teacherRowsHtml(which) {
    var q = TF.q.trim().toLowerCase();
    var list = TE.teachers.filter(function (t) {
      if (which !== 'all' && t.status !== which) return false;
      return !q || [t.full_name, EMAILS[t.user_id], (t.languages || []).join(' '), t.specialty].join(' ').toLowerCase().indexOf(q) > -1;
    });
    var picked = list.filter(function (t) { return SEL[t.id]; });
    var bulk = which === 'pending' || which === 'suspended' || which === 'approved';
    var html = '';
    if (bulk && list.length) html += '<div class="ad-bulk"><label class="st-day"><input type="checkbox" data-selall' + (picked.length === list.length ? ' checked' : '') + '><span>' + esc(picked.length ? A.plural(picked.length, 'selected', 'selected') : 'Select all') + '</span></label>' +
      (picked.length ? (which === 'pending' ? '<button class="btn btn--primary btn--sm" type="button" data-ask="approved">Approve</button><button class="btn btn--quiet btn--sm" type="button" data-ask="suspended">Reject</button>'
        : which === 'suspended' ? '<button class="btn btn--primary btn--sm" type="button" data-ask="approved">Reinstate</button>' : '<button class="btn btn--quiet btn--sm" type="button" data-ask="suspended">Suspend</button>') : '') + '</div><div data-confirm></div>';
    if (!list.length) return html + '<p class="t-body" style="margin-top:12px">' + esc(which === 'pending' ? 'No applications waiting.' : 'No teacher matches.') + '</p>';
    return html + '<div class="dt-wrap"><table class="dt"><thead><tr>' + (bulk ? '<th></th>' : '') + '<th>Teacher</th><th>Languages</th><th>Specialty</th><th class="r">Years</th><th>State</th><th class="r">Joined</th><th></th></tr></thead><tbody>' + list.map(function (t) {
      var cos = TE.cohorts.filter(function (c) { return c.teacher_id === t.id && c.status !== 'closed'; }).length;
      return '<tr>' + (bulk ? '<td style="width:36px"><input type="checkbox" data-sel="' + esc(t.id) + '"' + (SEL[t.id] ? ' checked' : '') + ' aria-label="Select ' + esc(t.full_name) + '" style="width:16px;height:16px;accent-color:#1a443c"></td>' : '') +
        '<td><a href="#/teachers/' + esc(t.id) + '">' + esc(t.full_name || 'Teacher') + '</a><div class="m">' + esc(EMAILS[t.user_id] || '') + '</div></td>' +
        '<td>' + esc((t.languages || []).join(', ')) + '</td><td class="m">' + esc(t.specialty || '') + '</td><td class="r">' + esc(t.experience_years != null ? t.experience_years : '') + '</td>' +
        '<td class="nw"><span class="dot' + (t.status === 'approved' ? '' : t.status === 'pending' ? ' dot--warn' : ' dot--off') + '"></span>' + esc(t.status === 'approved' ? A.plural(cos, 'open class', 'open classes') : t.status === 'pending' ? stageOf(t) : STATUS[t.status] || t.status) + '</td>' +
        '<td class="r m">' + esc(day(t.created_at)) + '</td><td class="r"><a class="btn btn--ghost btn--sm" href="#/teachers/' + esc(t.id) + '">' + esc(t.status === 'pending' ? 'Review' : 'Open') + '</a></td></tr>';
    }).join('') + '</tbody></table></div>';
  }
  function redrawTeachers() { var box = root.querySelector('[data-trows]'); if (box) box.innerHTML = teacherRowsHtml(box.getAttribute('data-which')); }
  /* Confirming a status change: who, whether to email them, and a reason when rejecting or suspending */
  function askStatus(status, ids, where) {
    var names = ids.map(function (id) { var t = TE.teachers.filter(function (x) { return x.id === id; })[0]; return t ? t.full_name : ''; });
    var verb = status === 'approved' ? 'Approve' : status === 'pending' ? 'Move back to review' : 'Reject or suspend';
    var box = root.querySelector(where || '[data-confirm]');
    box.innerHTML = '<div class="card card--bone ad-confirm"><p class="t-body"><b>' + esc(verb + ': ' + names.join(', ')) + '</b></p>' +
      (status === 'suspended' ? field('Reason (optional, included in the email)', '<textarea class="st-in tc-ta" data-reason rows="3" maxlength="2000"></textarea>') : '') +
      (status !== 'pending' ? '<label class="st-day"><input type="checkbox" data-notify checked><span>Email ' + (ids.length > 1 ? 'them' : 'them') + ' about it</span></label>' : '') +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-do="' + status + '" data-ids="' + esc(ids.join(',')) + '">' + esc(verb) + '</button><button class="btn btn--quiet btn--sm" type="button" data-cancel>Cancel</button></div><p class="t-small st-msg" data-msg="st" aria-live="polite"></p></div>';
  }
  function doStatus(btn) {
    var status = btn.getAttribute('data-do'), ids = btn.getAttribute('data-ids').split(','), box = btn.closest('.ad-confirm');
    var reason = box.querySelector('[data-reason]') ? box.querySelector('[data-reason]').value : '', notify = box.querySelector('[data-notify]') ? box.querySelector('[data-notify]').checked : false;
    var apply = function (emailed) {
      ids.forEach(function (id) { var t = TE.teachers.filter(function (x) { return x.id === id; })[0]; if (t) t.status = status; delete SEL[id]; if (FILE && FILE.profile && FILE.profile.id === id) FILE.profile.status = status; });
      A.rerender();
      setTimeout(function () { var m = root.querySelector('.view__head + .grid, .view__head'); if (m) m.insertAdjacentHTML('beforebegin', '<p class="t-body st-msg ad-flash" role="status">' + esc('Done.' + (emailed != null ? ' ' + A.plural(emailed, 'email', 'emails') + ' sent.' : '')) + '</p>'); }, 80);
    };
    if (!real()) { apply(null); return; }
    btn.disabled = true;
    window.AlimunData.adminTeacherStatus(ids, status, notify, reason).then(function (r) {
      var res = r.results || [], failed = res.filter(function (x) { return x.error; });
      if (failed.length) { btn.disabled = false; say('[data-msg="st"]', A.plural(failed.length, 'change', 'changes') + ' did not work: ' + failed.map(function (x) { return x.error; }).join(', ') + '.', true); return; }
      apply(res.filter(function (x) { return x.emailed; }).length);
    }, function (e) { btn.disabled = false; say('[data-msg="st"]', (e && e.message) || 'That did not work.', true); });
  }

  /* ---------- Hiring (docs/TEACHER_HIRING_PLAN.md, step 1: the interview) ---------- */
  var STAGE = { applied: 'Applied', interview_invited: 'Invited to an interview', interview_booked: 'Interview booked', pre_approved: 'Pre-approved: trial class next',
    trial_scheduled: 'Trial class booked', trial_done: 'Trial class done', approved: 'Approved', assigned: 'Assigned to classes', rejected: 'Rejected' };
  function stageOf(t) { return STAGE[t.hiring_stage] || STATUS[t.status] || t.status; }
  function whenBoth(at, tz) {
    var f = function (z) { try { return new Intl.DateTimeFormat('en-GB', { timeZone: z, weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }).format(new Date(at)); } catch (e) { return ''; } };
    var mine = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return f(mine) + (tz && tz !== mine ? '; theirs ' + f(tz) : '');
  }
  function hiringCard(p, ivs) {
    if (p.status !== 'pending') return '';
    var iv = ivs.filter(function (x) { return x.status === 'booked'; })[0], last = ivs[0];
    var html = '<section class="card span-12 hc" style="--i:0"><div class="panel-h"><h2 class="t-h2">Hiring: ' + esc(stageOf(p)) + '</h2><a href="#/teachers/hours">Interview hours</a></div>';
    if (p.hiring_stage === 'applied' || !p.hiring_stage) {
      html += '<p class="t-small">Next: a 30-minute video call with you. They choose a time from your interview hours.</p><div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-hire="invite" data-id="' + esc(p.id) + '">Invite to interview</button></div>';
    } else if (p.hiring_stage === 'interview_invited') {
      html += '<p class="t-small">Invited. They have not chosen a time yet' + (last && last.status === 'no_show' ? '; they missed the last one, ' + esc(whenBoth(last.scheduled_at)) : '') + '.</p>';
    } else if (iv) {
      var start = new Date(iv.scheduled_at).getTime();
      html += '<p class="t-body"><b>' + esc(whenBoth(iv.scheduled_at, iv.teacher_tz)) + '</b>, ' + iv.minutes + ' minutes, not recorded.' + (iv.teacher_checked_in_at ? ' They joined at ' + esc(A.fmt(iv.teacher_checked_in_at, { hour: '2-digit', minute: '2-digit' })) + '.' : '') + '</p>' +
        '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-hire="join" data-iv="' + esc(iv.id) + '">Join the call</button></div>' +
        (Date.now() > start - 15 * 60000 ? decideHtml(p) : '<p class="t-small">Pre-approve or reject once the call has started.</p>');
    } else if (p.hiring_stage === 'pre_approved' || p.hiring_stage === 'trial_scheduled' || p.hiring_stage === 'trial_done') {
      if (last && last.note) html += '<p class="t-small">' + esc('Your note from the interview: ' + last.note) + '</p>';
      html += trialCard(p);
    }
    return html + '<p class="t-small st-msg" data-hire-msg aria-live="polite"></p></section>';
  }
  /* ---------- Hiring, step 2: the trial class ---------- */
  var TS = null; /* choosing a time: { teacher, slots, zone, availability, language, level, pick, custom } */
  function trialOpen() { var T = FILE && FILE.trial; return T && (T.trials || []).filter(function (x) { return x.status === 'scheduled' || x.status === 'done'; })[0]; }
  function trialCard(p) {
    var T = FILE && FILE.trial;
    if (!T) return '<p class="t-small">The trial class did not load. Open the file again.</p>';
    var tr = trialOpen();
    if (!tr) return p.hiring_stage === 'pre_approved' || p.hiring_stage === 'trial_scheduled' ? scheduleHtml(p) : '';
    return trialNowHtml(p, tr, T);
  }
  function scheduleHtml(p) {
    var langs = p.languages && p.languages.length ? p.languages : LANGS, cur = TS && TS.teacher === p.id ? TS : {};
    return '<p class="t-small">Next: a free 30-minute trial class with real learners at a level they teach. Choose the language and level, then a time from their availability, at least 48 hours ahead. After that you invite learners from Matching.</p>' +
      '<div class="st-row" style="max-width:520px">' + field('Language', '<select class="st-in" data-trl>' + langs.map(function (l) { return opt(l, l, cur.language || langs[0]); }).join('') + '</select>') +
      field('Level', '<select class="st-in" data-trv>' + LEVELS.map(function (l) { return opt(l, l, cur.level || 'A2'); }).join('') + '</select>') + '</div>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-hire="trial-times" data-id="' + esc(p.id) + '">Show the free times</button></div><div data-trtimes>' + timesHtml(p) + '</div>';
  }
  function timesHtml(p) {
    if (!TS || TS.teacher !== p.id) return '';
    var html = '', groups = {}, order = [];
    TS.slots.forEach(function (x) { var k = A.fmt(x, { weekday: 'long', day: 'numeric', month: 'long' }); if (!groups[k]) { groups[k] = []; order.push(k); } groups[k].push(x); });
    if (order.length) {
      html += '<p class="t-small" style="margin-top:10px">' + esc('Times in your zone' + (TS.zone ? '; theirs is ' + TS.zone.replace(/_/g, ' ') : '') + '. Times you teach, interview or have another trial class are left out.') + '</p><div class="iv-days">' + order.slice(0, 10).map(function (k) {
        return '<div class="iv-day"><b>' + esc(k) + '</b><div class="iv-times">' + groups[k].map(function (x) {
          return '<button class="btn ' + (TS.pick === x && !TS.custom ? 'btn--primary' : 'btn--quiet') + ' btn--sm" type="button" data-trat="' + esc(x) + '">' + esc(A.fmt(x, { hour: '2-digit', minute: '2-digit' })) + '</button>';
        }).join('') + '</div></div>';
      }).join('') + '</div>';
    } else {
      html += '<p class="t-body" style="margin-top:10px">' + esc(TS.availability ? 'Their availability has no free 30 minutes in the next three weeks.' : 'They have not given their availability (teachers in hiring cannot set it yet).') + '</p>';
    }
    html += '<label class="st-field" style="max-width:320px;margin-top:10px"><span class="st-lbl">Or a time agreed with them (your time zone)</span><input class="st-in" type="datetime-local" step="1800" data-trcustom value=""></label>';
    if (TS.pick) html += '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-hire="trial-book" data-id="' + esc(p.id) + '">' + esc('Book the trial class: ' + whenBoth(TS.pick, TS.zone)) + '</button></div>' +
      '<p class="t-small">They are emailed the time. A one-date class is made with them as its teacher; they check in and join from their dashboard.</p>';
    return html;
  }
  var INV = { invited: 'invited', accepted: 'took a place', declined: 'declined', cancelled: 'cancelled' };
  var VIA = { button: 'from the dashboard', email: 'from the email link', room: 'by entering the room', admin: 'by an admin' };
  function trialNowHtml(p, tr, T) {
    var start = Date.parse(tr.scheduled_at), end = start + tr.minutes * 60000, now = Date.now(), sc = tr.score || {}, s = tr.session || {};
    var auto = T.automations || {}, html = '';
    html += '<p class="t-body"><b>' + esc(whenBoth(tr.scheduled_at, tr.teacher_tz)) + '</b>' + esc(', ' + tr.language + ' ' + tr.level + ', ' + tr.minutes + ' minutes' + (s.teacher_checked_in_at ? '. They checked in at ' + A.fmt(s.teacher_checked_in_at, { hour: '2-digit', minute: '2-digit' }) + '.' : '.')) + '</p>' +
      '<div class="btn-row">' + (now >= start - 15 * 60000 && now <= end + 90 * 60000 && tr.status === 'scheduled' ? '<button class="btn btn--primary btn--sm" type="button" data-room="' + esc(tr.session_id) + '">Join as Alimun staff</button>' : '') +
      (tr.session_id ? '<a class="btn btn--ghost btn--sm" href="#/classlog/' + esc(tr.session_id) + '">The class date: watch, record, read the room</a>' : '') +
      (tr.status === 'scheduled' && now < start ? '<button class="btn btn--quiet btn--sm" type="button" data-hire="trial-cancel" data-trial="' + esc(tr.id) + '">Cancel the trial class</button>' : '') + '</div><p class="t-small st-msg" data-roommsg aria-live="polite"></p>';
    /* Learners */
    var inv = tr.invites || [];
    html += '<h3 class="t-h3" style="margin-top:16px">Learners</h3>';
    if (auto.invites && auto.invites.dry_run) html += '<p class="t-small">Invitations are in dry run: nothing reaches learners until you switch Trial class invitations to live in <a href="#/automations">Automations</a>. Until then each invitation is written down as “not sent”.</p>';
    if (inv.length) html += '<div class="tt-week">' + inv.map(function (x) {
      var st = x.status === 'invited' && !x.sent_at ? 'not sent yet' : INV[x.status] || x.status;
      return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(x.level || '') + '</span><span><b>' + esc(x.name) + '</b><small>' + esc(st + (x.score ? ', rated it ' + RATE[x.score] : '')) + '</small></span></div>';
    }).join('') + '</div>';
    else html += '<p class="t-small">Nobody invited yet.</p>';
    if (tr.status === 'scheduled' && now < start - 2 * 3600000) {
      html += '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-hire="trial-suggest" data-trial="' + esc(tr.id) + '">Suggest learners from Matching</button>' +
        (inv.some(function (x) { return x.status === 'invited' && !x.sent_at; }) ? '<button class="btn btn--ghost btn--sm" type="button" data-hire="trial-invite" data-trial="' + esc(tr.id) + '" data-resend="1">Send the invitations not sent yet</button>' : '') + '</div><div data-trsug>' + suggestHtml(tr) + '</div>';
    }
    /* Scorecard */
    if (now >= start) {
      var row2 = function (k, v) { return '<div class="tt-row tt-row--wide ad-kv"><span class="tt-row__time">' + esc(k) + '</span><span><small>' + esc(v) + '</small></span></div>'; };
      var rt = sc.ratings || { n: 0, counts: {} };
      html += '<h3 class="t-h3" style="margin-top:16px">Scorecard</h3><div class="tt-week">' +
        row2('Punctuality', sc.minutesLate == null ? 'Not read from the video room yet' : sc.minutesLate ? sc.minutesLate + ' minutes late' : 'On time') +
        row2('Check-in', sc.checkin ? 'At ' + A.fmt(sc.checkin.at, { hour: '2-digit', minute: '2-digit' }) + ', ' + (sc.checkin.minutesBefore >= 0 ? sc.checkin.minutesBefore + ' minutes before the start' : -sc.checkin.minutesBefore + ' minutes after the start') + (VIA[sc.checkin.via] ? ', ' + VIA[sc.checkin.via] : '') : 'No check-in') +
        row2('Time in the room', sc.teacherMinutes == null ? 'Not read yet' : sc.teacherMinutes + ' of ' + sc.ofMinutes + ' minutes') +
        row2('Learners', (sc.learnersPresent == null ? 'Not read yet' : sc.learnersPresent + ' in the room') + ', ' + sc.learnersBooked + ' took a place') +
        row2('Ratings', rt.n ? 'Very good ' + (rt.counts[3] || 0) + ', good ' + (rt.counts[2] || 0) + ', not good ' + (rt.counts[1] || 0) + ' (' + A.plural(rt.n, 'answer', 'answers') + ')' : 'No ratings yet' + (auto.ratings && auto.ratings.dry_run ? '; the email asking for them is in dry run, learners can still rate on their Classes page' : '')) +
        row2('Recording', sc.recording ? 'Full recording' + (sc.recording.minutes ? ', ' + sc.recording.minutes + ' minutes' : '') : 'No full recording. Start one on the class date page while the class is on.') + '</div>' +
        '<div class="btn-row">' + (sc.recording ? '<button class="btn btn--ghost btn--sm" type="button" data-hire="trial-watch" data-rec="' + esc(sc.recording.id) + '">Watch the recording</button>' : '') +
        (now > end ? '<button class="btn btn--quiet btn--sm" type="button" data-hire="trial-verify" data-session="' + esc(tr.session_id) + '">Read the video room again</button>' : '') + '</div>';
      if (now >= start + 10 * 60000) html += '<div class="hc-decide"><label class="st-field"><span class="st-lbl">Your note (only admins see it)</span><textarea class="st-in" rows="2" maxlength="2000" data-hire-note>' + esc(tr.note || '') + '</textarea></label>' +
        '<label class="st-check"><input type="checkbox" data-hire-notify checked> Email them the decision (the welcome or the rejection email)</label>' +
        '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-hire="trial-approved" data-trial="' + esc(tr.id) + '" data-id="' + esc(p.id) + '">Approve</button>' +
        '<button class="btn btn--quiet btn--sm" type="button" data-hire="trial-rejected" data-trial="' + esc(tr.id) + '" data-id="' + esc(p.id) + '">Reject</button></div></div>';
    }
    return html;
  }
  var RATE = { 3: 'very good', 2: 'good', 1: 'not good' };
  function suggestHtml(tr) {
    var list = FILE.trialSuggest;
    if (!list) return '';
    var had = {}; (tr.invites || []).forEach(function (x) { had[x.user_id] = true; });
    list = list.filter(function (l) { return !had[l.userId]; }).slice(0, 20);
    if (!list.length) return '<p class="t-small">No other learner of ' + esc(tr.language + ' at ' + tr.level) + ' or one level apart. Your test accounts and staff are never suggested.</p>';
    var room = Math.max(0, (FILE.trial.max || 8) + 2 - (tr.invites || []).filter(function (x) { return x.status !== 'declined' && x.status !== 'cancelled'; }).length);
    return '<p class="t-small" style="margin-top:8px">Best first: the same level, a time that suits them where they live, then how active they are. The first ' + room + ' with a good time are ticked. Your test accounts and staff are never suggested.</p>' +
      '<div class="tt-week">' + list.map(function (l, i) {
        return '<label class="tt-row tt-row--wide" style="cursor:pointer"><span class="tt-row__time"><input type="checkbox" data-trsel="' + esc(l.userId) + '"' + (l.fits && i < room ? ' checked' : '') + ' style="width:16px;height:16px;accent-color:#1a443c"> ' + esc(l.level) + '</span><span><b>' + esc(l.name) + '</b><small>' + esc((l.email ? l.email + '. ' : '') + l.why + (l.tz ? '. ' + A.fmt(tr.scheduled_at, { timeZone: l.tz, weekday: 'short', hour: '2-digit', minute: '2-digit' }) + ' for them' : '')) + '</small></span></label>';
      }).join('') + '</div><div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-hire="trial-invite" data-trial="' + esc(tr.id) + '">Invite the ticked learners</button></div>';
  }
  function sampleTrial(t) {
    var now = Date.now(), d3 = new Date(now + 3 * DAY); d3.setHours(18, 0, 0, 0);
    var y = new Date(now - DAY); y.setHours(18, 0, 0, 0);
    if (t.hiring_stage === 'trial_scheduled') return { automations: { invites: { enabled: true, dry_run: true }, ratings: { enabled: true, dry_run: true } }, max: 8, trials: [{ id: 'tr7', session_id: 's7', status: 'scheduled', language: 'German', level: 'A2', scheduled_at: d3.toISOString(), minutes: 30, teacher_tz: 'Europe/Berlin', session: {}, score: {},
      invites: [{ user_id: 'l1', name: 'Mia Novak', level: 'A2', status: 'accepted', sent_at: new Date(now - DAY).toISOString() }, { user_id: 'l2', name: 'Omar Haddad', level: 'A2', status: 'invited', sent_at: new Date(now - DAY).toISOString() }, { user_id: 'l3', name: 'Lucía Torres', level: 'B1', status: 'invited', sent_at: null }] }] };
    if (t.hiring_stage === 'trial_done') return { automations: { invites: { enabled: true, dry_run: false }, ratings: { enabled: true, dry_run: false } }, max: 8, trials: [{ id: 'tr8', session_id: 's8', status: 'done', language: 'English', level: 'B1', scheduled_at: y.toISOString(), minutes: 30, teacher_tz: 'Africa/Lagos',
      session: { teacher_checked_in_at: new Date(y.getTime() - 11 * 60000).toISOString() },
      score: { ended: true, verified: true, minutesLate: 0, checkin: { at: new Date(y.getTime() - 11 * 60000).toISOString(), via: 'button', minutesBefore: 11 }, teacherMinutes: 30, ofMinutes: 30, learnersPresent: 5, learnersBooked: 6, ratings: { n: 4, counts: { 3: 3, 2: 1, 1: 0 }, mean: 2.8 }, recording: { id: 'r8', minutes: 33 } },
      invites: [['Mia Novak', 3], ['Omar Haddad', 3], ['Lucía Torres', 2], ['Kenji Sato', 3], ['Nora Lind', null], ['Ivan Petrov', null]].map(function (x, i) { return { user_id: 'l' + i, name: x[0], level: 'B1', status: 'accepted', sent_at: y.toISOString(), score: x[1] }; }) }] };
    return { automations: { invites: { enabled: true, dry_run: true }, ratings: { enabled: true, dry_run: true } }, max: 8, trials: [] };
  }
  function sampleSlots() {
    var out = [], d = new Date(); d.setHours(0, 0, 0, 0);
    for (var i = 3; i < 17; i++) { var x = new Date(d.getTime() + i * DAY); if (x.getDay() === 0 || x.getDay() === 6) continue; [17, 17.5, 18, 18.5].forEach(function (h) { var y = new Date(x.getTime()); y.setHours(Math.floor(h), h % 1 ? 30 : 0); out.push(y.toISOString()); }); }
    return { slots: out, zone: 'America/Toronto', availability: 5 };
  }
  function sampleMatching() {
    var L = function (id, name, level, tz, extra) { return Object.assign({ id: 's' + id, user_id: 'l' + id, name: name, email: name.split(' ')[0].toLowerCase() + '@example.com', language: 'German', level: level, timezone: tz, created_at: new Date().toISOString(), last_active: new Date(Date.now() - id * DAY).toISOString(), days_active: 6 - id % 5 }, extra || {}); };
    return { learners: [L(1, 'Mia Novak', 'A2', 'Europe/Prague'), L(2, 'Omar Haddad', 'A2', 'Africa/Casablanca'), L(3, 'Lucía Torres', 'B1', 'Europe/Madrid'), L(4, 'Ravi Shah', 'A2', 'Asia/Kolkata'), L(5, 'Elena Rossi', 'A1', 'Europe/Rome', { tutor_min: 40 }), L(6, 'Test', 'A2', 'Europe/Paris', { test: true }), L(7, 'Chloé Dubois', 'A2', 'Europe/Paris', { quotes: 1 })] };
  }
  function trialAction(k, b) {
    var id = b.getAttribute('data-id'), trial = b.getAttribute('data-trial'), p = FILE && FILE.profile;
    var say2 = function (t) { var m = root.querySelector('[data-hire-msg]'); if (m) m.textContent = t; };
    var fail = function (e) { b.disabled = false; say2('That did not work: ' + ((e && e.body && e.body.error) || (e && e.message) || 'try again') + '.'); };
    var reload = function (note) { TE = null; TS = null; window.AlimunAdminTeachers.mount(root, ['' + p.id], A).then(function () { if (note) say2(note); }); };
    if (k === 'trial-times') {
      var lang = root.querySelector('[data-trl]').value, level = root.querySelector('[data-trv]').value;
      b.disabled = true;
      (real() ? window.AlimunData.ops('trial-slots', { teacher: id }) : Promise.resolve(sampleSlots())).then(function (r) {
        TS = { teacher: id, slots: r.slots || [], zone: r.zone, availability: r.availability, language: lang, level: level, pick: null, custom: false };
        b.disabled = false; root.querySelector('[data-trtimes]').innerHTML = timesHtml(p);
      }, fail);
      return;
    }
    if (k === 'trial-suggest') {
      var tr = trialOpen(); b.disabled = true; say2('Reading Matching…');
      (real() ? window.AlimunData.adminMatching() : Promise.resolve(sampleMatching())).then(function (data) {
        FILE.trialSuggest = window.AlimunMatch ? window.AlimunMatch.trialPick(data, { language: tr.language, level: tr.level, at: Date.parse(tr.scheduled_at) }) : [];
        b.disabled = false; say2(''); root.querySelector('[data-trsug]').innerHTML = suggestHtml(tr);
      }, fail);
      return;
    }
    if (!real()) { say2('This is sample data; nothing is saved or sent.'); return; }
    if ((k === 'trial-cancel' || k === 'trial-rejected') && b.getAttribute('data-sure') !== '1') { b.setAttribute('data-sure', '1'); b.textContent = k === 'trial-cancel' ? 'Yes, cancel it' : 'Yes, reject'; return; }
    b.disabled = true; say2('Working…');
    if (k === 'trial-book') {
      window.AlimunData.ops('trial-schedule', { teacher: id, at: TS.pick, language: TS.language, level: TS.level, custom: !!TS.custom }).then(function () { reload('Booked. They have been emailed. Now invite learners.'); }, fail);
    } else if (k === 'trial-invite') {
      var ids = b.getAttribute('data-resend') ? [] : Array.prototype.map.call(root.querySelectorAll('[data-trsel]:checked'), function (c) { return c.getAttribute('data-trsel'); });
      if (!b.getAttribute('data-resend') && !ids.length) { b.disabled = false; say2('Tick at least one learner.'); return; }
      window.AlimunData.ops('trial-invite', { trial: trial, learners: ids }).then(function (r) {
        var res = r.results || {}, n = function (v) { return Object.keys(res).filter(function (k2) { return res[k2] === v; }).length; }, ref = Object.keys(r.refused || {}).length;
        FILE.trialSuggest = null;
        reload((n('done') ? A.plural(n('done'), 'invitation', 'invitations') + ' sent. ' : '') + (n('dry_run') ? A.plural(n('dry_run'), 'invitation', 'invitations') + ' written down in dry run, not sent. ' : '') + (n('failed') ? n('failed') + ' failed. ' : '') + (ref ? ref + ' refused (another language, a test or staff account, or too many).' : ''));
      }, fail);
    } else if (k === 'trial-cancel') {
      window.AlimunData.ops('trial-cancel', { trial: trial }).then(function () { reload('Cancelled. They can be given a new time.'); }, fail);
    } else if (k === 'trial-verify') {
      window.AlimunData.ops('verify-session', { session: b.getAttribute('data-session') }).then(function () { reload('Read again.'); }, fail);
    } else if (k === 'trial-watch') {
      var win = window.open('', '_blank');
      window.AlimunData.ops('recording-link', { id: b.getAttribute('data-rec') }).then(function (r) {
        var u = null; try { u = new URL(r.url); } catch (e) { /* not a link */ }
        if (!u || u.protocol !== 'https:') throw new Error('unexpected link');
        if (win) { win.opener = null; win.location.href = u.href; } else location.href = u.href; b.disabled = false; say2('Opened in a new tab.');
      }).catch(function (e) { if (win) win.close(); fail(e); });
    } else if (k === 'trial-approved' || k === 'trial-rejected') {
      var result = k === 'trial-approved' ? 'approved' : 'rejected', note = root.querySelector('[data-hire-note]'), notify = root.querySelector('[data-hire-notify]');
      window.AlimunData.ops('trial-decide', { trial: trial, result: result, note: note ? note.value : '' })
        .then(function () { return window.AlimunData.adminTeacherStatus([id], result === 'approved' ? 'approved' : 'suspended', notify ? notify.checked : true, ''); })
        .then(function (r) { var x = (r.results || [])[0] || {}; if (x.error) throw new Error(x.error); reload(result === 'approved' ? 'Approved.' + (x.emailed ? ' The welcome email was sent.' : '') : 'Rejected.' + (x.emailed ? ' The rejection email was sent.' : '')); }, fail);
    }
  }
  function decideHtml(p) {
    return '<div class="hc-decide"><label class="st-field"><span class="st-lbl">Your note (only admins see it)</span><textarea class="st-in" rows="2" maxlength="2000" data-hire-note></textarea></label>' +
      '<label class="st-check"><input type="checkbox" data-hire-notify checked> Email them the decision</label>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-hire="pre_approved" data-id="' + esc(p.id) + '">Pre-approve: trial class next</button>' +
      '<button class="btn btn--quiet btn--sm" type="button" data-hire="rejected" data-id="' + esc(p.id) + '">Reject</button>' +
      '<button class="btn btn--ghost btn--sm" type="button" data-hire="no_show" data-id="' + esc(p.id) + '">They did not come: let them book again</button></div></div>';
  }
  function hireAction(b) {
    var k = b.getAttribute('data-hire'), msg = root.querySelector('[data-hire-msg]');
    if (k.indexOf('trial-') === 0) { trialAction(k, b); return; }
    if (!real()) { msg.textContent = 'This is sample data; nothing is sent.'; return; }
    if (k === 'rejected' && b.getAttribute('data-sure') !== '1') { b.setAttribute('data-sure', '1'); b.textContent = 'Yes, reject'; return; }
    b.disabled = true; msg.textContent = 'Working…';
    var call;
    if (k === 'join') {
      var win = window.open('', '_blank');
      call = window.AlimunData.ops('interview-join', { interview: b.getAttribute('data-iv') }).then(function (r) {
        var u = new URL(r.url); if (u.protocol !== 'https:' || !/\.daily\.co$/.test(u.hostname)) throw new Error('unexpected room address');
        u.searchParams.set('t', r.token); if (win) { win.opener = null; win.location.href = u.href; } else location.href = u.href; b.disabled = false; msg.textContent = 'Opened in a new tab.';
      }).catch(function (e) { if (win) win.close(); throw e; });
    } else if (k === 'invite') {
      call = window.AlimunData.ops('interview-invite', { teacher: b.getAttribute('data-id') });
    } else {
      var note = root.querySelector('[data-hire-note]'), notify = root.querySelector('[data-hire-notify]');
      call = window.AlimunData.ops('interview-decide', { teacher: b.getAttribute('data-id'), result: k, note: note ? note.value : '', notify: notify ? notify.checked : true });
    }
    call.then(function () { if (k !== 'join') { TE = null; window.AlimunAdminTeachers.mount(root, ['' + b.getAttribute('data-id')], A); } }, function (e) { b.disabled = false; msg.textContent = 'That did not work: ' + ((e && e.body && e.body.error) || (e && e.message) || 'try again') + '.'; });
  }
  /* The owner's weekly interview hours */
  var HOURS = null, DAYNAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var ZONE_LIST = ['America/Vancouver', 'America/Los_Angeles', 'America/New_York', 'Europe/London', 'Europe/Paris', 'Europe/Madrid', 'Europe/Berlin', 'Europe/Istanbul', 'Africa/Casablanca', 'Asia/Dubai'];
  function hoursView() {
    var h = (HOURS && HOURS.hours) || { tz: 'America/Vancouver', minutes: 30, days: {} };
    var row = function (d) { var r = (h.days[d] || [])[0] || ['', ''], r2 = (h.days[d] || [])[1] || ['', ''];
      return '<tr><td>' + DAYNAMES[d] + '</td><td><input class="st-in" type="time" data-hr="' + d + ':0:0" value="' + esc(r[0]) + '"> to <input class="st-in" type="time" data-hr="' + d + ':0:1" value="' + esc(r[1]) + '"></td>' +
        '<td><input class="st-in" type="time" data-hr="' + d + ':1:0" value="' + esc(r2[0]) + '"> to <input class="st-in" type="time" data-hr="' + d + ':1:1" value="' + esc(r2[1]) + '"></td></tr>'; };
    return back('#/teachers', 'Teachers') + '<div class="view__head"><div><h1 class="t-h1">Interview hours</h1><p class="t-lead">When teachers can book their call with you. Times you teach or have another interview are left out; calls are booked from 12 hours to 14 days ahead.</p></div></div>' +
      '<div class="grid rise"><section class="card span-12"><div class="st-row" style="max-width:520px">' + field('Your time zone', '<select class="st-in" data-hz>' + ZONE_LIST.concat(ZONE_LIST.indexOf(h.tz) < 0 ? [h.tz] : []).map(function (z) { return opt(z, z.replace(/_/g, ' '), h.tz); }).join('') + '</select>') +
      field('Length of a call', '<select class="st-in" data-hm>' + [20, 30, 45, 60].map(function (m) { return opt(m, m + ' minutes', h.minutes); }).join('') + '</select>') + '</div>' +
      '<div class="dt-wrap"><table class="dt hr-t"><thead><tr><th>Day</th><th>Hours</th><th>More hours (optional)</th></tr></thead><tbody>' + [1, 2, 3, 4, 5, 6, 0].map(row).join('') + '</tbody></table></div>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-hours-save>Save the hours</button></div><p class="t-small st-msg" data-hours-msg aria-live="polite"></p>' +
      (HOURS && HOURS.next && HOURS.next.length ? '<p class="t-small">Next free times: ' + esc(HOURS.next.map(function (x) { return whenBoth(x); }).join('; ')) + '.</p>' : '') + '</section></div>';
  }
  function saveHours(b) {
    var msg = root.querySelector('[data-hours-msg]'), days = {};
    for (var d = 0; d < 7; d++) for (var i = 0; i < 2; i++) {
      var a = root.querySelector('[data-hr="' + d + ':' + i + ':0"]').value, z = root.querySelector('[data-hr="' + d + ':' + i + ':1"]').value;
      if (a && z) (days[d] = days[d] || []).push([a, z]);
    }
    var hours = { tz: root.querySelector('[data-hz]').value, minutes: +root.querySelector('[data-hm]').value, days: days };
    if (!real()) { HOURS = { hours: hours, next: [] }; msg.textContent = 'Sample: not saved.'; return; }
    b.disabled = true; msg.textContent = 'Saving…';
    window.AlimunData.ops('interview-hours', { hours: hours }).then(function (r) { HOURS = r; root.innerHTML = hoursView(); var m = root.querySelector('[data-hours-msg]'); if (m) m.textContent = 'Saved.'; },
      function (e) { b.disabled = false; msg.textContent = 'Not saved: ' + ((e && e.body && e.body.error) || (e && e.message) || 'try again') + '.'; });
  }
  function teacherFileView(t, f) {
    var p = f.profile || t, email = EMAILS[p.user_id] || '';
    var html = back('#/teachers/list/' + (p.status || 'approved'), 'Teachers') + '<div class="view__head"><div><h1 class="t-h1">' + esc(p.full_name || '') + '</h1><p class="t-lead">' + esc([email, STATUS[p.status] || p.status, 'Joined ' + day(p.created_at)].filter(Boolean).join('. ') + '.') + '</p></div>' +
      '<div class="btn-row">' + (p.status === 'approved' ? '<a class="btn btn--primary btn--sm" href="/app/teach?as=' + esc(p.id) + '" target="_blank" rel="noopener">Open their dashboard, read-only</a>' : '') + '</div></div><div class="grid rise">';
    var actions = p.status === 'pending' ? [['approved', 'Approve without interview', 'primary'], ['suspended', 'Reject', 'quiet']] : p.status === 'approved' ? [['suspended', 'Suspend', 'quiet']] : [['approved', 'Reinstate', 'primary'], ['pending', 'Move back to review', 'quiet']];
    html += hiringCard(p, f.interviews || []);
    html += '<section class="card card--forest span-12" style="--i:0"><h2 class="t-h2">' + esc(STATUS[p.status] || p.status) + '</h2>' +
      (p.status === 'pending' && p.bio ? '<p class="t-body" style="margin-top:8px" dir="auto">' + esc(p.bio) + '</p>' : '') +
      '<div class="btn-row" style="margin-top:14px">' + actions.map(function (a) { return '<button class="btn btn--' + (a[2] === 'primary' ? 'lime' : 'ghost btn--on-forest') + ' btn--sm" type="button" data-ask1="' + a[0] + '" data-id="' + esc(p.id) + '">' + esc(a[1]) + '</button>'; }).join('') + '</div><div data-confirm1></div></section>';
    html += '<form class="card span-7 st-form" style="--i:1;max-width:none;margin-top:0" data-tfile="' + esc(p.id) + '"><h2 class="t-h2">Profile</h2>' +
      field('Full name', '<input class="st-in" name="full_name" maxlength="100" required value="' + esc(p.full_name || '') + '">') +
      field('Languages they teach', '<input class="st-in" name="languages" value="' + esc((p.languages || []).join(', ')) + '">', 'Separated by commas. They can open classes only in these: ' + LANGS.join(', ') + '.') +
      '<div class="st-row">' + field('Specialty', '<input class="st-in" name="specialty" maxlength="200" value="' + esc(p.specialty || '') + '">') + field('Location', '<input class="st-in" name="location" maxlength="100" value="' + esc(p.location || '') + '">') + '</div>' +
      '<div class="st-row">' + field('Years teaching', '<input class="st-in" type="number" name="experience_years" min="0" max="60" value="' + esc(p.experience_years == null ? '' : p.experience_years) + '">') +
        field('Hourly rate (EUR)', '<input class="st-in" type="number" name="hourly_rate" min="0" max="500" step="0.5" value="' + esc(p.hourly_rate == null ? '' : p.hourly_rate) + '">') + '</div>' +
      field('Teacher level', '<select class="st-in" name="tier_level">' + ['community', 'focused', 'intensive'].map(function (k) { return opt(k, A.cap(k), p.tier_level); }).join('') + '</select>') +
      field('About them, for students', '<textarea class="st-in tc-ta" name="bio" rows="4" maxlength="3000" dir="auto">' + esc(p.bio || '') + '</textarea>') +
      '<p class="t-small">Rating: ' + esc(p.rating ? Number(p.rating).toFixed(1) + ' from students’ reviews' : 'no reviews yet') + '. Classes taught: ' + esc(String(p.sessions_delivered || 0)) + '.</p>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="submit">Save</button></div><p class="t-small st-msg" data-msg="tfile" aria-live="polite"></p></form>';
    html += '<section class="card span-5" style="--i:2"><h2 class="t-h2">Classes</h2>' + (f.cohorts.length ? '<div class="tt-week">' + f.cohorts.map(function (c) {
      return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc((c.enrolled_count || 0) + '/' + (c.max_students || '')) + '</span><span><b>' + esc(A.className(c)) + '</b><small>' + esc(c.status + (c.schedule_days ? ', ' + c.schedule_days.join(' and ') + ' at ' + String(c.schedule_time || '').slice(0, 5) + ' (' + c.timezone + ')' : '')) + '</small></span></div>';
    }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">No classes.</p>') +
      '<h3 class="t-h3" style="margin-top:16px">Free to teach</h3>' + (f.slots.length ? '<div class="tt-week">' + f.slots.map(function (s) { return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(DAYS[s.day_of_week]) + '</span><span><b>' + esc(String(s.start_time).slice(0, 5) + ' – ' + String(s.end_time).slice(0, 5)) + '</b><small>' + esc(s.timezone || '') + '</small></span></div>'; }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">No availability yet.</p>') + '</section>';
    html += '<section class="card span-6" style="--i:3"><h2 class="t-h2">Reviews</h2>' + (f.reviews.length ? '<div class="tt-week">' + f.reviews.map(function (r) { return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(r.rating + ' of 5') + '</span><span><span class="ts-note__text" dir="auto">' + esc(r.review_text || '') + '</span><small>' + esc(day(r.created_at)) + '</small></span></div>'; }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">No reviews yet.</p>') +
      '<h3 class="t-h3" style="margin-top:16px">Payouts</h3>' + (f.payouts.length ? '<div class="tt-week">' + f.payouts.map(function (x) { return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'EUR' }).format(x.amount_eur)) + '</span><span><b>' + esc(day(x.period_start + 'T12:00:00') + ' – ' + day(x.period_end + 'T12:00:00')) + '</b><small>' + esc(x.status) + '</small></span></div>'; }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">No payouts yet.</p>') + '</section>';
    html += mailForm(p.id, 'span-6', 4);
    if (window.AlimunAdminActivity && p.user_id) html += window.AlimunAdminActivity.timelineCard(A, p.user_id, 5);
    return html + sampleLine() + '</div>';
  }
  function saveTeacher(form) {
    var id = form.getAttribute('data-tfile'), t = TE.teachers.filter(function (x) { return x.id === id; })[0], fd = new FormData(form);
    var langs = String(fd.get('languages') || '').split(',').map(function (x) { return x.trim(); }).filter(Boolean);
    var bad = langs.filter(function (l) { var ok = LANGS.some(function (k) { return k.toLowerCase() === l.toLowerCase(); }); return !ok; });
    if (!langs.length || bad.length) { say('[data-msg="tfile"]', bad.length ? 'Not a language Alimun teaches: ' + bad.join(', ') + '.' : 'Give at least one language.', true); return; }
    langs = langs.map(function (l) { return LANGS.filter(function (k) { return k.toLowerCase() === l.toLowerCase(); })[0]; }).filter(function (v, i, a) { return a.indexOf(v) === i; });
    var num = function (k) { var v = String(fd.get(k) || '').trim(); return v === '' ? null : Number(v); };
    var patch = { full_name: String(fd.get('full_name') || '').trim().slice(0, 100), languages: langs, specialty: String(fd.get('specialty') || '').trim() || null, location: String(fd.get('location') || '').trim() || null,
      experience_years: num('experience_years'), hourly_rate: num('hourly_rate'), tier_level: fd.get('tier_level'), bio: String(fd.get('bio') || '').trim() || null };
    if (!patch.full_name || /[<>]/.test(patch.full_name + (patch.specialty || '') + (patch.location || ''))) { say('[data-msg="tfile"]', 'Write a name, without < or > in any field.', true); return; }
    var done = function (note) { Object.assign(t, patch); Object.assign(FILE.profile, patch); say('[data-msg="tfile"]', 'Saved.' + (note || '')); };
    if (!real()) { done(' (sample: nothing was saved)'); return; }
    var btn = form.querySelector('[type="submit"]'); btn.disabled = true;
    window.AlimunData.adminSave('teacher_profiles', id, patch).then(function () { btn.disabled = false; done(); },
      function (e) { btn.disabled = false; say('[data-msg="tfile"]', 'That did not save: ' + (e && e.message || 'please try again') + '.', true); });
  }

  /* ---------- Events ---------- */
  function bind() {
    if (root.__apeople) return;
    root.__apeople = true;
    root.addEventListener('input', function (e) {
      var k = e.target.getAttribute('data-sf');
      if (k === 'q' && ST) { SF.q = e.target.value; var b = root.querySelector('[data-srows]'); if (b) b.innerHTML = studentRowsHtml(); }
      if (e.target.hasAttribute('data-tf') && TE) { TF.q = e.target.value; redrawTeachers(); }
    });
    root.addEventListener('change', function (e) {
      if (e.target.hasAttribute('data-trcustom') && TS) {
        var v = e.target.value, d = v ? new Date(v) : null;
        if (d && !isNaN(d.getTime())) { TS.pick = d.toISOString(); TS.custom = true; var box = root.querySelector('[data-trtimes]'); box.innerHTML = timesHtml(FILE.profile); box.querySelector('[data-trcustom]').value = v; }
        return;
      }
      if ((e.target.hasAttribute('data-trl') || e.target.hasAttribute('data-trv')) && TS) { TS.language = root.querySelector('[data-trl]').value; TS.level = root.querySelector('[data-trv]').value; return; }
      var k = e.target.getAttribute('data-sf');
      if (k && k !== 'q' && ST) { SF[k] = e.target.value; var b = root.querySelector('[data-srows]'); if (b) b.innerHTML = studentRowsHtml(); return; }
      if (e.target.hasAttribute('data-sel')) { SEL[e.target.getAttribute('data-sel')] = e.target.checked; redrawTeachers(); return; }
      if (e.target.hasAttribute('data-selall')) { var on = e.target.checked; root.querySelectorAll('[data-sel]').forEach(function (c) { SEL[c.getAttribute('data-sel')] = on; }); redrawTeachers(); }
    });
    root.addEventListener('submit', function (e) {
      var f = e.target;
      if (f.hasAttribute('data-sfile')) { e.preventDefault(); saveStudent(f); }
      else if (f.hasAttribute('data-tfile')) { e.preventDefault(); saveTeacher(f); }
      else if (f.hasAttribute('data-mail')) { e.preventDefault(); sendMail(f); }
      else if (f.hasAttribute('data-invite')) { e.preventDefault(); invite(f); }
      else if (f.hasAttribute('data-tgrant')) { e.preventDefault(); grantTutor(f); }
    });
    root.addEventListener('click', function (e) {
      var ta = e.target.closest('[data-trat]');
      if (ta && TS) { TS.pick = ta.getAttribute('data-trat'); TS.custom = false; root.querySelector('[data-trtimes]').innerHTML = timesHtml(FILE.profile); return; }
      var hb = e.target.closest('[data-hire]');
      if (hb && !hb.disabled) { hireAction(hb); return; }
      var hs = e.target.closest('[data-hours-save]');
      if (hs && !hs.disabled) { saveHours(hs); return; }
      var b = e.target.closest('[data-ask],[data-ask1],[data-do],[data-cancel],[data-csv],[data-copy]');
      if (!b || b.disabled) return;
      if (b.hasAttribute('data-ask')) askStatus(b.getAttribute('data-ask'), Object.keys(SEL).filter(function (k) { return SEL[k] && root.querySelector('[data-sel="' + k + '"]'); }));
      else if (b.hasAttribute('data-ask1')) askStatus(b.getAttribute('data-ask1'), [b.getAttribute('data-id')], '[data-confirm1]');
      else if (b.hasAttribute('data-do')) doStatus(b);
      else if (b.hasAttribute('data-cancel')) b.closest('.ad-confirm').parentNode.innerHTML = '';
      else if (b.hasAttribute('data-csv')) csv(FILE && FILE.signups || []);
      else if (b.hasAttribute('data-copy')) { var inp = root.querySelector('[data-invlink] input'); inp.select(); try { navigator.clipboard.writeText(inp.value); b.textContent = 'Copied'; } catch (x) { document.execCommand('copy'); } }
    });
  }

  function mounter(kind) {
    var no = 0;
    return function (view, parts, helpers) {
      var my = ++no;
      A = helpers; root = view; FILE = null;
      bind();
      root.innerHTML = loading();
      var p0 = parts[0], go;
      if (kind === 'students') {
        if (p0 === 'invite') go = Promise.resolve({ html: inviteView('student'), title: 'Invite a student' });
        else if (p0 === 'signups') go = (real() ? window.AlimunData.adminSignups() : Promise.resolve([{ email: 'hello@example.com', source: 'newsletter', locale: 'de', page: '/de/', created_at: new Date().toISOString() }, { email: 'maria@example.com', source: 'level-test', locale: 'es', page: '/es/level-test', created_at: new Date(Date.now() - 3 * DAY).toISOString() }]))
          .then(function (list) { FILE = { signups: list }; return { html: signupsView(list), title: 'Email signups' }; });
        else if (p0) go = loadStudents().then(function () {
          var s = ST.students.filter(function (x) { return x.id === p0; })[0];
          if (!s) return { html: back('#/students', 'Students') + '<div class="card"><p class="t-body">This student could not be found.</p></div>' };
          return (real() ? window.AlimunData.adminStudentFile(s.id) : Promise.resolve(sampleStudentFile(s))).then(function (f) { FILE = f; return { html: studentFileView(s, f), title: s.full_name }; });
        });
        else go = loadStudents().then(function () { return { html: studentsView(), title: 'Students' }; });
      } else {
        if (p0 === 'invite') go = Promise.resolve({ html: inviteView('teacher'), title: 'Invite a teacher' });
        else if (p0 === 'hours') go = (real() ? window.AlimunData.ops('interview-hours', {}) : Promise.resolve({ hours: { tz: 'America/Vancouver', minutes: 30, days: { 1: [['09:00', '11:00']], 3: [['14:00', '16:00']] } }, next: [] }))
          .then(function (r) { HOURS = r; return { html: hoursView(), title: 'Interview hours' }; });
        else if (p0 && p0 !== 'list') go = loadTeachers().then(function () {
          var t = TE.teachers.filter(function (x) { return x.id === p0; })[0];
          if (!t) return { html: back('#/teachers', 'Teachers') + '<div class="card"><p class="t-body">This teacher could not be found.</p></div>' };
          return (real() ? window.AlimunData.adminTeacherFile(t.id) : Promise.resolve(sampleTeacherFile(t))).then(function (f) {
            FILE = f;
            var stage = (f.profile || t).hiring_stage;
            if (!/^(pre_approved|trial_scheduled|trial_done)$/.test(stage || '')) return f;
            return (real() ? window.AlimunData.ops('trial-file', { teacher: t.id }) : Promise.resolve(sampleTrial(t))).then(function (x) { f.trial = x; return f; }, function () { f.trial = null; return f; });
          }).then(function (f) { return { html: teacherFileView(t, f), title: t.full_name }; });
        });
        else go = loadTeachers().then(function () { return { html: teachersView(parts[1]), title: 'Teachers' }; });
      }
      return go.then(function (res) {
        if (my !== no) return { stale: true };
        root.innerHTML = res.html;
        return res;
      }).catch(function (e) {
        console.warn('[Alimun] Admin ' + kind + ' did not load', e && e.message);
        if (my === no) root.innerHTML = '<div class="card"><p class="t-body">This did not load: ' + esc(e && e.message || 'please try again') + '.</p></div>';
        return { stale: true };
      });
    };
  }
  window.AlimunAdminStudents = { mount: mounter('students'), reset: function () {} };
  window.AlimunAdminTeachers = { mount: mounter('teachers'), reset: function () {} };
})();
