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
   View-as opens /app/preview?as=<id> or /app/teach?as=<id>, where js/app/data.js blocks every write. */
(function () {
  'use strict';
  var A = null, root = null, ST = null, TE = null, EMAILS = {}, FILE = null;
  var DAY = 86400000;
  var PLANS = { free: 'Free', community: 'Community', focused: 'Focused', intensive: 'Intensive', private: '1 on 1', onetoone: '1 on 1 (old)', daily: 'Daily', waitlist: 'Waiting list', founding_member: 'Founding member' };
  var PAID_EMAIL = { community: true, focused: true, intensive: true, private: true };
  var GOALS = { foundations: 'Strong foundations', relocation: 'Living or moving abroad', professional: 'Work', academic: 'Study or an exam', pleasure: 'For the pleasure of it' };
  var LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  var LANGS = ['English', 'German', 'Spanish', 'French', 'Portuguese', 'Italian', 'Mandarin', 'Japanese', 'Arabic'];
  var STATUS = { pending: 'Waiting for review', approved: 'Approved', suspended: 'Rejected or suspended' };
  var PAY = { active: 'Subscription active', past_due: 'Payment overdue', cancelled: 'Subscription cancelled' };
  var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function esc(s) { return A.esc(s); }
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
      activity: act, cards: cards, oto: [] };
  }
  function sampleTeachers() {
    var now = Date.now(), ago = function (d) { return new Date(now - d * DAY).toISOString(); };
    var te = [
      { id: 't1', user_id: 'ut1', full_name: 'Ana Weber', languages: ['German', 'English'], experience_years: 12, specialty: 'German for moving abroad', bio: 'I have taught German to adults for twelve years.', location: 'Leipzig', hourly_rate: 28, rating: 4.9, tier_level: 'focused', status: 'approved', created_at: ago(200), sessions_delivered: 184 },
      { id: 't2', user_id: 'ut2', full_name: 'James Hall', languages: ['English'], experience_years: 8, specialty: 'Exam preparation', bio: '', location: 'Bristol', hourly_rate: 26, rating: 4.7, tier_level: 'focused', status: 'approved', created_at: ago(150), sessions_delivered: 120 },
      { id: 't3', user_id: 'ut3', full_name: 'Léa Martin', languages: ['French'], experience_years: 5, specialty: 'Conversation and pronunciation', bio: 'Native French speaker, DELF examiner.', location: 'Lyon', hourly_rate: 22, rating: 0, tier_level: 'community', status: 'pending', created_at: ago(1), sessions_delivered: 0 },
      { id: 't4', user_id: 'ut4', full_name: 'Tomás Ruiz', languages: ['Spanish'], experience_years: 3, specialty: 'Spanish for travel', bio: '', location: 'Valencia', hourly_rate: 22, rating: 0, tier_level: 'community', status: 'pending', created_at: ago(0.2), sessions_delivered: 0 },
      { id: 't5', user_id: 'ut5', full_name: 'Paul Grant', languages: ['English'], experience_years: 1, specialty: '', bio: '', location: '', hourly_rate: 22, rating: 0, tier_level: 'community', status: 'suspended', created_at: ago(60), sessions_delivered: 0 }
    ];
    te.forEach(function (x, i) { EMAILS[x.user_id] = ['ana.weber', 'james.hall', 'lea.martin', 'tomas.ruiz', 'paul.grant'][i] + '@example.com'; });
    return { sample: true, teachers: te, cohorts: [
      { id: 'c1', teacher_id: 't1', language: 'German', level: 'B1', tier: 'focused', status: 'open', enrolled_count: 9, max_students: 17 },
      { id: 'c3', teacher_id: 't1', language: 'German', level: 'A2', tier: 'intensive', status: 'open', enrolled_count: 5, max_students: 6 },
      { id: 'c2', teacher_id: 't2', language: 'English', level: 'B2', tier: 'focused', status: 'full', enrolled_count: 17, max_students: 17 }] };
  }
  function sampleTeacherFile(t) {
    var now = Date.now(), ago = function (d) { return new Date(now - d * DAY).toISOString(); };
    return { profile: t, cohorts: TE.cohorts.filter(function (c) { return c.teacher_id === t.id; }).map(function (c) { return Object.assign({ schedule_days: ['Tuesday', 'Thursday'], schedule_time: '18:30', timezone: 'Europe/Berlin' }, c); }),
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
      if (SF.plan === 'paying' && s.stripe_subscription_status !== 'active') return false;
      if (SF.plan && SF.plan !== 'paying' && s.tier !== SF.plan) return false;
      if (SF.lang && s.language !== SF.lang) return false;
      if (SF.klass === 'in' && !s.enrolled_cohort_id) return false;
      if (SF.klass === 'none' && s.enrolled_cohort_id) return false;
      return true;
    });
  }
  function studentsView() {
    var langs = ST.students.map(function (s) { return s.language; }).filter(function (v, i, a) { return v && a.indexOf(v) === i; }).sort();
    return '<div class="view__head"><div><h1 class="t-h1">Students</h1><p class="t-lead">' + esc(A.plural(ST.students.length, 'student', 'students') + ', ' + A.plural(ST.students.filter(function (s) { return s.stripe_subscription_status === 'active'; }).length, 'with an active subscription', 'with an active subscription') + '.') + '</p></div>' +
      '<div class="btn-row"><a class="btn btn--primary btn--sm" href="#/students/invite">Invite a student</a><a class="btn btn--ghost btn--sm" href="#/students/signups">Email signups</a></div></div>' +
      '<div class="grid rise"><section class="card span-12" style="--i:0"><div class="ad-filters">' +
        '<input class="st-in" type="search" data-sf="q" placeholder="Search by name, email or language" value="' + esc(SF.q) + '" aria-label="Search">' +
        '<select class="st-in" data-sf="plan" aria-label="Plan">' + opt('', 'Every plan', SF.plan) + opt('paying', 'Active subscription', SF.plan) + Object.keys(PLANS).map(function (k) { return opt(k, PLANS[k], SF.plan); }).join('') + '</select>' +
        '<select class="st-in" data-sf="lang" aria-label="Language">' + opt('', 'Every language', SF.lang) + langs.map(function (l) { return opt(l, l, SF.lang); }).join('') + '</select>' +
        '<select class="st-in" data-sf="klass" aria-label="Class">' + opt('', 'In a class or not', SF.klass) + opt('in', 'In a class', SF.klass) + opt('none', 'Not in a class', SF.klass) + '</select></div>' +
        (ST.noEmails ? '<p class="t-small st-msg is-bad">Emails could not be loaded, so the search covers names and languages only.</p>' : '') +
        '<div class="tt-week" data-srows>' + studentRowsHtml() + '</div></section>' + sampleLine() + '</div>';
  }
  function studentRowsHtml() {
    var list = studentRows();
    if (!list.length) return '<p class="t-body" style="margin-top:12px">No student matches.</p>';
    return list.slice(0, 300).map(function (s) {
      var co = cohortOf(ST.cohorts, s.enrolled_cohort_id);
      var bits = [s.language + ' ' + (s.level || ''), PLANS[s.tier] || s.tier, PAY[s.stripe_subscription_status] || '', co ? 'in ' + A.className(co) : 'no class', 'joined ' + day(s.created_at)].filter(Boolean);
      return '<a class="tt-row tt-row--wide" href="#/students/' + esc(s.id) + '"><span class="tt-row__time">' + esc(s.level || '') + '</span><span><b>' + esc(s.full_name || '') + '</b><small>' + esc((EMAILS[s.user_id] ? EMAILS[s.user_id] + '. ' : '') + bits.join(', ')) + '</small></span></a>';
    }).join('') + (list.length > 300 ? '<p class="t-small">Showing the first 300. Narrow the search to see the rest.</p>' : '');
  }
  function studentFileView(s, f) {
    var p = f.profile || s, email = EMAILS[p.user_id] || '';
    var days = {}; f.activity.forEach(function (a) { days[String(a.updated_at).slice(0, 10)] = true; });
    var last = f.activity[0] && f.activity[0].updated_at, learned = f.cards.filter(function (c) { return c.box >= 3; }).length;
    var html = back('#/students', 'Students') + '<div class="view__head"><div><h1 class="t-h1">' + esc(p.full_name || '') + '</h1><p class="t-lead">' + esc([email, p.language + ' ' + (p.level || ''), 'Joined ' + day(p.created_at)].filter(Boolean).join('. ') + '.') + '</p></div>' +
      '<div class="btn-row"><a class="btn btn--primary btn--sm" href="/app/preview?as=' + esc(p.id) + '" target="_blank" rel="noopener">Open their dashboard, read-only</a></div></div><div class="grid rise">';
    var paid = p.stripe_subscription_status === 'active';
    html += '<form class="card span-7 st-form" style="--i:0;max-width:none;margin-top:0" data-sfile="' + esc(p.id) + '"><h2 class="t-h2">Plan and level</h2>' +
      '<p class="t-body">' + esc((PLANS[p.tier] || p.tier) + '. ' + (PAY[p.stripe_subscription_status] || 'No subscription') + '.') + '</p>' +
      '<div class="st-row">' + field('Level', '<select class="st-in" name="level">' + LEVELS.map(function (l) { return opt(l, l, p.level); }).join('') + '</select>') +
        field('Goal', '<select class="st-in" name="goal_track">' + Object.keys(GOALS).map(function (g) { return opt(g, GOALS[g], p.goal_track); }).join('') + '</select>') + '</div>' +
      field('Plan', '<select class="st-in" name="tier">' + Object.keys(PLANS).map(function (k) { return opt(k, PLANS[k], p.tier); }).join('') + '</select>',
        paid ? 'This student pays through Stripe: changing the plan here does not change what they pay, and the next payment update sets it back.' : 'Changing the plan here does not charge or refund anything.') +
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
      '<p class="t-small" style="margin-top:12px">Moving them to another class comes with the Classes part.</p></section>';
    html += '<section class="card span-6" style="--i:3"><h2 class="t-h2">Homework</h2>' + (f.submissions.length ? '<div class="tt-week">' + f.submissions.map(function (x) {
      return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(x.status === 'graded' && x.score != null ? x.score + '%' : 'To mark') + '</span><span><b>' + esc(x.assignments && x.assignments.title || '') + '</b><small>handed in ' + esc(day(x.submitted_at)) + '</small></span></div>';
    }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">None handed in yet.</p>') + '</section>';
    html += '<section class="card span-6" style="--i:4"><h2 class="t-h2">Teachers’ notes</h2>' + (f.notes.length ? '<div class="tt-week">' + f.notes.map(function (n) {
      return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(day(n.created_at)) + '</span><span><span class="ts-note__text" dir="auto">' + esc(n.feedback_text) + '</span><small>' + esc(n.is_private ? 'Private: the student does not see it' : 'The student sees it') + '</small></span></div>';
    }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">No notes yet.</p>') + '</section>';
    html += mailForm(p.id, 'span-6', 5);
    return html + sampleLine() + '</div>';
  }
  function row(big, small) { return '<div class="tt-row ad-kv"><span class="tt-row__time">' + esc(big) + '</span><span><small>' + esc(small) + '</small></span></div>'; }
  function mailForm(id, span, i) {
    return '<form class="card ' + span + ' st-form" style="--i:' + i + ';max-width:none;margin-top:0" data-mail="' + esc(id) + '"><h2 class="t-h2">Write to them</h2>' +
      field('Subject', '<input class="st-in" name="subject" maxlength="200" required>') + field('Message', '<textarea class="st-in tc-ta" name="body" rows="5" maxlength="10000" required dir="auto"></textarea>', 'Sent from Alimun’s address to their sign-in email.') +
      '<div class="btn-row"><button class="btn btn--ghost btn--sm" type="submit">Send</button></div><p class="t-small st-msg" data-msg="mail" aria-live="polite"></p></form>';
  }
  function saveStudent(form) {
    var id = form.getAttribute('data-sfile'), s = ST.students.filter(function (x) { return x.id === id; })[0], fd = new FormData(form);
    var patch = { level: fd.get('level'), goal_track: fd.get('goal_track'), tier: fd.get('tier') }, tell = !!fd.get('tell');
    var changed = patch.tier !== (FILE.profile || s).tier;
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
        ? 'The account is created as an approved teacher and they get an email with a link to sign in. They set a password in their Settings.'
        : 'The account is created as a student and they get an email with a link to sign in, then take the level test.') + '</p></div></div>' +
      '<div class="grid rise"><form class="card span-8 st-form" style="--i:0;max-width:none;margin-top:0" data-invite="' + role + '">' +
      field('Email', '<input class="st-in" type="email" name="email" maxlength="200" required autocomplete="off">') +
      field('Full name', '<input class="st-in" name="full_name" maxlength="100" required>') +
      (role === 'teacher' ? '<div class="st-row">' + field('Language they teach', '<select class="st-in" name="language">' + LANGS.map(function (l) { return opt(l, l, 'English'); }).join('') + '</select>') +
        field('Specialty', '<input class="st-in" name="specialty" maxlength="200">', 'Optional') + '</div>' : '') +
      '<div class="btn-row"><button class="btn btn--primary" type="submit">Create the account and send the invitation</button></div><p class="t-body st-msg" data-msg="inv" aria-live="polite"></p><div data-invlink></div></form>' +
      '<section class="stage span-4" style="--i:1;background:var(--t-lime)" aria-hidden="true"><div class="bub say">One more for the family.</div>' + A.Cast.drawing('cat') + '</section>' + sampleLine() + '</div>';
  }
  function invite(form) {
    var fd = new FormData(form), role = form.getAttribute('data-invite');
    var body = { role: role, email: String(fd.get('email') || '').trim(), full_name: String(fd.get('full_name') || '').trim(), language: fd.get('language') || '', specialty: String(fd.get('specialty') || '').trim() };
    if (!body.email || !body.full_name) { say('[data-msg="inv"]', 'Write the email address and the name.', true); return; }
    if (!real()) { say('[data-msg="inv"]', 'Sample: no account was created and nothing was sent.'); return; }
    var btn = form.querySelector('[type="submit"]'); btn.disabled = true; say('[data-msg="inv"]', 'Creating the account…');
    window.AlimunData.adminInvite(body).then(function (r) {
      btn.disabled = false; form.reset(); ST = null; TE = null;
      say('[data-msg="inv"]', r.emailed ? 'Done. ' + body.full_name + ' has been emailed a link to sign in.' : 'The account was created, but the email could not be sent. Send them this sign-in link yourself; it works once and expires after a day:');
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
      '<div class="btn-row"><a class="btn btn--primary btn--sm" href="#/teachers/invite">Invite a teacher</a></div></div>' +
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
    return html + '<div class="tt-week">' + list.map(function (t) {
      var cos = TE.cohorts.filter(function (c) { return c.teacher_id === t.id && c.status !== 'closed'; }).length;
      var bits = [(t.languages || []).join(', '), t.experience_years != null ? A.plural(t.experience_years, 'year', 'years') + ' teaching' : '', t.specialty, t.status === 'approved' ? A.plural(cos, 'open class', 'open classes') : STATUS[t.status], 'joined ' + day(t.created_at)].filter(Boolean);
      return '<div class="tt-row ad-trow">' + (bulk ? '<input type="checkbox" data-sel="' + esc(t.id) + '"' + (SEL[t.id] ? ' checked' : '') + ' aria-label="Select ' + esc(t.full_name) + '">' : '') +
        '<span><a class="linkish" href="#/teachers/' + esc(t.id) + '"><b>' + esc(t.full_name || '') + '</b></a><small>' + esc((EMAILS[t.user_id] ? EMAILS[t.user_id] + '. ' : '') + bits.join(', ')) + '</small></span>' +
        '<a class="btn btn--ghost btn--sm" href="#/teachers/' + esc(t.id) + '">' + esc(t.status === 'pending' ? 'Review' : 'Open') + '</a></div>';
    }).join('') + '</div>';
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
  function teacherFileView(t, f) {
    var p = f.profile || t, email = EMAILS[p.user_id] || '';
    var html = back('#/teachers/list/' + (p.status || 'approved'), 'Teachers') + '<div class="view__head"><div><h1 class="t-h1">' + esc(p.full_name || '') + '</h1><p class="t-lead">' + esc([email, STATUS[p.status] || p.status, 'Joined ' + day(p.created_at)].filter(Boolean).join('. ') + '.') + '</p></div>' +
      '<div class="btn-row">' + (p.status === 'approved' ? '<a class="btn btn--primary btn--sm" href="/app/teach?as=' + esc(p.id) + '" target="_blank" rel="noopener">Open their dashboard, read-only</a>' : '') + '</div></div><div class="grid rise">';
    var actions = p.status === 'pending' ? [['approved', 'Approve', 'primary'], ['suspended', 'Reject', 'quiet']] : p.status === 'approved' ? [['suspended', 'Suspend', 'quiet']] : [['approved', 'Reinstate', 'primary'], ['pending', 'Move back to review', 'quiet']];
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
    });
    root.addEventListener('click', function (e) {
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
        else if (p0 && p0 !== 'list') go = loadTeachers().then(function () {
          var t = TE.teachers.filter(function (x) { return x.id === p0; })[0];
          if (!t) return { html: back('#/teachers', 'Teachers') + '<div class="card"><p class="t-body">This teacher could not be found.</p></div>' };
          return (real() ? window.AlimunData.adminTeacherFile(t.id) : Promise.resolve(sampleTeacherFile(t))).then(function (f) { FILE = f; return { html: teacherFileView(t, f), title: t.full_name }; });
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
