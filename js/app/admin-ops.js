/* Alimun admin: verified classes and automations (owner, 13 Nov 2026; docs/OPERATIONS_PLAN.md). English only.
   #/classlog        every class date with what the video room's records show: when it really started and ended, the
                     teacher's time against the slot, the learners who came, minutes late and the outcome (held, ended
                     early, teacher absent, no learners, did not happen); totals, and each teacher's record.
   #/classlog/<id>   one class date: each person's time in the room on a timeline, Daily's meetings, and what the
                     automations did for it; "Read the video room again".
   #/automations     each automation with its switch, dry run, daily cap and state (paused after failures), and
                     every action they took.
   Data: sessions, class_presence, video_meetings, automations, automation_log (admin row rules); changes through
   /api/ops. Signed out or ?sample=1: a sample where nothing is saved. */
(function () {
  'use strict';
  var A = null, root = null, MIN = 60000, HOUR = 3600000, DAY = 86400000;
  var OUT = { held: 'Held', ended_early: 'Ended early', teacher_absent: 'Teacher absent', no_learners: 'No learners', not_held: 'Did not happen' };
  var OUT_DOT = { held: '', ended_early: ' dot--warn', teacher_absent: ' dot--bad', no_learners: ' dot--warn', not_held: ' dot--bad' };
  var ROLE = { teacher: 'Teacher', learner: 'Learner', staff: 'Alimun staff', unknown: 'Unknown' };
  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real'; }
  function opt(v, label, cur) { return '<option value="' + esc(v) + '"' + (String(v) === String(cur) ? ' selected' : '') + '>' + esc(label) + '</option>'; }
  function loading() { return '<div class="rd-loading"><div class="loader" style="--w:56px" role="img" aria-label="Loading">' + A.loaderInner() + '</div></div>'; }
  function when(d) { return A.fmt(d, { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }); }
  function hm(d) { return d ? A.fmt(d, { hour: '2-digit', minute: '2-digit' }) : ''; }
  function mins(sec) { return Math.round((sec || 0) / 60); }
  function label(co) { co = co || {}; return ((co.language || '') + ' ' + (co.level || '')).trim() || 'Class'; }
  function teacherOf(s) { var co = s.cohorts || {}; return (co.teacher_profiles && co.teacher_profiles.full_name) || 'No teacher'; }
  function outcomeOf(s) {
    if (s.status === 'cancelled') return { t: 'Cancelled', d: ' dot--off' };
    if (s.outcome) return { t: OUT[s.outcome], d: OUT_DOT[s.outcome] };
    var start = new Date(s.scheduled_at).getTime(), end = start + ((s.cohorts && s.cohorts.class_minutes) || 60) * MIN;
    if (start > Date.now()) return { t: 'Coming up', d: ' dot--off' };
    if (Date.now() < end + 20 * MIN) return { t: s.actual_start ? 'On now' : 'Due now', d: s.actual_start ? '' : ' dot--warn' };
    return { t: 'Not verified yet', d: ' dot--off' };
  }

  /* ---------- Sample ---------- */
  function sampleLog() {
    var now = Date.now(), list = [], teachers = ['Ana Weber', 'James Hall', 'Lucía Gómez'], outs = ['held', 'held', 'held', 'ended_early', 'held', 'teacher_absent', 'held', 'no_learners', 'held', 'not_held'];
    for (var i = 0; i < 24; i++) {
      var at = new Date(now - (i * 15 + 3) * HOUR), o = i < 1 ? null : outs[i % outs.length], late = o === 'ended_early' ? 9 : o === 'held' ? i % 3 : null;
      var s = { id: 's' + i, scheduled_at: at.toISOString(), status: 'completed', outcome: o, minutes_late: o && o !== 'teacher_absent' && o !== 'not_held' ? late : null,
        learners_present: o === 'held' || o === 'ended_early' || o === 'teacher_absent' ? 2 + (i % 5) : 0, peak_people: 4, teacher_seconds: o === 'held' ? 3500 : o === 'ended_early' ? 2900 : 0,
        cohorts: { id: 'c' + (i % 3), language: ['German', 'English', 'Spanish'][i % 3], level: ['A2', 'B2', 'B1'][i % 3], class_minutes: 60, enrolled_count: 6, teacher_profiles: { full_name: teachers[i % 3], user_id: 'tu' + (i % 3) } } };
      if (o && o !== 'not_held') { s.actual_start = new Date(at.getTime() + (late || 0) * MIN - 2 * MIN).toISOString(); s.actual_end = new Date(at.getTime() + (o === 'ended_early' ? 50 : 61) * MIN).toISOString(); s.teacher_joined_at = o === 'teacher_absent' ? null : new Date(at.getTime() + (late || 0) * MIN).toISOString(); }
      list.push(s);
    }
    return { sessions: list, tests: {} };
  }
  function sampleDate(id) {
    var s = sampleLog().sessions.filter(function (x) { return x.id === id; })[0] || sampleLog().sessions[2], st = new Date(s.scheduled_at).getTime();
    var p = function (n, role, a, b, joins) { return { user_id: n, name: n, role: role, is_test: false, first_join: new Date(st + a * MIN).toISOString(), last_leave: new Date(st + b * MIN).toISOString(), seconds: (b - a) * 60, in_slot_seconds: Math.max(0, Math.min(b, 60) - Math.max(a, 0)) * 60, joins: joins || 1 }; };
    return { session: s, presence: [p(teacherOf(s), 'teacher', -3, 61), p('Marco Rossi', 'learner', 0, 60), p('Aya Benali', 'learner', 4, 58, 2), p('Lena Fischer', 'learner', 12, 60)],
      meetings: [{ meeting_id: 'm1', room: 'alimun-' + s.id, started_at: new Date(st - 3 * MIN).toISOString(), duration_seconds: 3840, ongoing: false }],
      log: [{ automation: 'class-outcomes', action: 'set the outcome', target: label(s.cohorts), detail: { outcome: s.outcome }, ok: true, dry_run: false, created_at: new Date(st + 85 * MIN).toISOString() }],
      recordings: [7, 19, 28, 41, 52].map(function (m, i) { return { id: 'r' + i, kind: 'proof', planned_minute: m, requested_at: new Date(st + m * MIN).toISOString(), started_at: new Date(st + m * MIN + 9000).toISOString(), duration_seconds: 60, daily_recording_id: 'd' + i, delete_after: new Date(st + 30 * DAY).toISOString(), recording_views: i === 2 ? [{ viewer_email: 'you', viewed_at: new Date(st + 2 * HOUR).toISOString() }] : [] }; }) };
  }
  function sampleAutos() {
    var now = Date.now(), ago = function (m) { return new Date(now - m * MIN).toISOString(); };
    return { automations: [
      { name: 'class-outcomes', label: 'Class outcomes', about: 'Every 5 minutes: reads Daily’s records of each class date that has ended and sets who was there, minutes late and the outcome.', enabled: true, dry_run: false, daily_cap: 500, consecutive_failures: 0 },
      { name: 'daily-digest', label: 'Morning digest', about: 'Every morning: yesterday’s classes, sign-ups, tutor use, payments, failures and what each automation did, by email to you.', enabled: true, dry_run: false, daily_cap: 2, consecutive_failures: 0 },
      { name: 'teacher-late', label: 'Teacher late alert', about: '5 minutes after a class should start, if the teacher is not in the room: an email to you, the teacher and the learners, and a dashboard note to the teacher and learners.', enabled: true, dry_run: true, daily_cap: 60, consecutive_failures: 0 }
    ], log: [
      { automation: 'teacher-late', action: 'email the owner', target: 'you', dry_run: true, ok: true, created_at: ago(40), detail: { class: 'English B2', teacher: 'James Hall' } },
      { automation: 'teacher-late', action: 'email and note to a learner', target: 'Marco Rossi', dry_run: true, ok: true, created_at: ago(40) },
      { automation: 'class-outcomes', action: 'set the outcome', target: 'German A2', dry_run: false, ok: true, created_at: ago(95), detail: { outcome: 'held', learners: 4, minutes_late: 1 } },
      { automation: 'daily-digest', action: 'email the morning digest', target: 'you', dry_run: false, ok: true, created_at: ago(600), detail: { held: 3, classes: 4 } }
    ] };
  }

  /* ---------- Class log ---------- */
  var F = { days: 30, teacher: '', outcome: '', tests: false }, LOG = null;
  function isTestClass(s) { var tp = s.cohorts && s.cohorts.teacher_profiles; return !!(tp && LOG.tests[tp.user_id]); }
  function list() {
    return LOG.sessions.filter(function (s) {
      if (!F.tests && isTestClass(s)) return false;
      if (F.teacher && teacherOf(s) !== F.teacher) return false;
      if (F.outcome === 'past' && new Date(s.scheduled_at).getTime() > Date.now()) return false;
      if (F.outcome && F.outcome !== 'past' && (F.outcome === 'none' ? !!s.outcome || s.status === 'cancelled' || new Date(s.scheduled_at).getTime() > Date.now() : s.outcome !== F.outcome)) return false;
      return true;
    });
  }
  /* The slot and the teacher's time on one bar: from 15 minutes before to 15 minutes after the class */
  function bar(s) {
    var m = (s.cohorts && s.cohorts.class_minutes) || 60, st = new Date(s.scheduled_at).getTime(), from = st - 15 * MIN, span = (m + 30) * MIN;
    var pos = function (t) { return Math.max(0, Math.min(100, (t - from) / span * 100)); };
    var slot = '<i class="tl__slot" style="left:' + pos(st) + '%;width:' + (pos(st + m * MIN) - pos(st)) + '%"></i>';
    var t = s.teacher_joined_at && s.actual_end ? '<i class="tl__bar" style="left:' + pos(new Date(s.teacher_joined_at).getTime()) + '%;width:' + Math.max(1, pos(new Date(s.actual_end).getTime()) - pos(new Date(s.teacher_joined_at).getTime())) + '%"></i>' : '';
    var l = s.actual_start && s.actual_end ? '<i class="tl__room" style="left:' + pos(new Date(s.actual_start).getTime()) + '%;width:' + Math.max(1, pos(new Date(s.actual_end).getTime()) - pos(new Date(s.actual_start).getTime())) + '%"></i>' : '';
    return '<span class="tl" role="img" aria-label="' + esc(s.actual_start ? 'In the room from ' + hm(s.actual_start) + ' to ' + hm(s.actual_end) + (s.teacher_joined_at ? ', teacher from ' + hm(s.teacher_joined_at) : ', teacher not seen') : 'Nobody in the room') + '">' + slot + l + t + '</span>';
  }
  function logView() {
    var L = list(), past = L.filter(function (s) { return s.status !== 'cancelled' && new Date(s.scheduled_at).getTime() + 80 * MIN < Date.now(); });
    var n = function (o) { return past.filter(function (s) { return s.outcome === o; }).length; };
    var lateList = past.filter(function (s) { return s.minutes_late != null; }), avgLate = lateList.length ? Math.round(lateList.reduce(function (a, s) { return a + s.minutes_late; }, 0) / lateList.length) : 0;
    var enrolled = past.reduce(function (a, s) { return a + ((s.cohorts && s.cohorts.enrolled_count) || 0); }, 0), came = past.reduce(function (a, s) { return a + (s.learners_present || 0); }, 0);
    var teachers = {}; LOG.sessions.forEach(function (s) { teachers[teacherOf(s)] = 1; });
    var kp = [['Class dates', past.length, 'in the last ' + F.days + ' days'], ['Held', n('held'), past.length ? Math.round(100 * n('held') / past.length) + '% of them' : ''], ['Ended early', n('ended_early'), 'teacher under 90% of the class'],
      ['Teacher absent', n('teacher_absent'), 'learners came, no teacher'], ['No learners', n('no_learners') + n('not_held'), n('not_held') + ' with nobody at all'], ['Not verified', past.filter(function (s) { return !s.outcome; }).length, 'before verification began or no record'],
      ['Teacher late', avgLate + ' min', 'on average'], ['Attendance', enrolled ? Math.round(100 * came / enrolled) + '%' : '–', came + ' of ' + enrolled + ' places']];
    var html = '<div class="view__head"><div><h1 class="t-h1">Class log</h1><p class="t-lead">What really happened in each class, from the video room’s own records: who was in the room, from when to when. Held means the teacher was there for 90% of the class with at least one learner.</p></div></div>' +
      '<div class="kpis">' + kp.map(function (k) { return '<div class="kpi"><span class="kpi__l">' + esc(k[0]) + '</span><span class="kpi__v">' + esc(String(k[1])) + '</span><span class="kpi__s">' + esc(k[2]) + '</span></div>'; }).join('') + '</div>' +
      '<div class="grid rise" style="margin-top:16px"><section class="card span-12"><div class="ad-filters cl-f">' +
        '<select class="st-in" data-cl="days" aria-label="Period">' + [7, 30, 90].map(function (d) { return opt(d, 'Last ' + d + ' days', F.days); }).join('') + '</select>' +
        '<select class="st-in" data-cl="teacher" aria-label="Teacher">' + opt('', 'Every teacher', F.teacher) + Object.keys(teachers).sort().map(function (t) { return opt(t, t, F.teacher); }).join('') + '</select>' +
        '<select class="st-in" data-cl="outcome" aria-label="Outcome">' + opt('', 'Every class date', F.outcome) + opt('past', 'Past only', F.outcome) + Object.keys(OUT).map(function (k) { return opt(k, OUT[k], F.outcome); }).join('') + opt('none', 'Not verified', F.outcome) + '</select>' +
        '<label class="st-check"><input type="checkbox" data-cl="tests"' + (F.tests ? ' checked' : '') + '> Your test classes</label></div>' +
      (L.length ? '<div class="dt-wrap"><table class="dt"><thead><tr><th>When</th><th>Class</th><th>In the room <span class="tl-key"><i class="k-slot"></i>slot <i class="k-room"></i>anyone <i class="k-t"></i>teacher</span></th><th class="r">Learners</th><th class="r">Late</th><th>Outcome</th></tr></thead><tbody>' + L.slice(0, 400).map(function (s) {
        var o = outcomeOf(s), co = s.cohorts || {};
        return '<tr data-href="#/classlog/' + esc(s.id) + '"><td class="nw">' + esc(when(s.scheduled_at)) + '</td><td><a href="#/classlog/' + esc(s.id) + '">' + esc(label(co)) + '</a>' + (isTestClass(s) ? ' <span class="m">(test)</span>' : '') + '<div class="m">' + esc(teacherOf(s)) + '</div></td>' +
          '<td class="tl-c">' + bar(s) + '<div class="m">' + esc(s.actual_start ? hm(s.actual_start) + ' to ' + hm(s.actual_end) : s.outcome ? 'Nobody' : '') + '</div></td>' +
          '<td class="r">' + esc(s.learners_present != null ? s.learners_present + ' of ' + (co.enrolled_count || 0) : '') + '</td><td class="r' + (s.minutes_late > 5 ? ' is-bad' : '') + '">' + esc(s.minutes_late != null ? s.minutes_late + ' min' : '') + '</td>' +
          '<td class="nw"><span class="dot' + o.d + '"></span>' + esc(o.t) + '</td></tr>';
      }).join('') + '</tbody></table></div>' : '<p class="t-small">No class dates match.</p>') + '</section>';
    /* Each teacher's record */
    var by = {};
    past.forEach(function (s) { var t = teacherOf(s), r = by[t] = by[t] || { t: t, n: 0, held: 0, absent: 0, early: 0, late: [], came: 0 }; r.n++; if (s.outcome === 'held') r.held++; if (s.outcome === 'teacher_absent') r.absent++; if (s.outcome === 'ended_early') r.early++; if (s.minutes_late != null) r.late.push(s.minutes_late); r.came += s.learners_present || 0; });
    var rows = Object.keys(by).map(function (k) { return by[k]; }).sort(function (a, b) { return b.n - a.n; });
    html += '<section class="card span-12"><div class="panel-h"><h2 class="t-h2">Teachers</h2><span class="t-small">Over the same period</span></div>' + (rows.length ? '<div class="dt-wrap"><table class="dt"><thead><tr><th>Teacher</th><th class="r">Class dates</th><th class="r">Held</th><th class="r">Ended early</th><th class="r">Absent</th><th class="r">Late on average</th><th class="r">Learners per class</th></tr></thead><tbody>' + rows.map(function (r) {
      var avg = r.late.length ? Math.round(r.late.reduce(function (a, b) { return a + b; }, 0) / r.late.length) : null;
      return '<tr><td>' + esc(r.t) + '</td><td class="r">' + r.n + '</td><td class="r">' + r.held + ' <span class="m">(' + Math.round(100 * r.held / r.n) + '%)</span></td><td class="r' + (r.early ? ' is-bad' : '') + '">' + r.early + '</td><td class="r' + (r.absent ? ' is-bad' : '') + '">' + r.absent + '</td><td class="r' + (avg > 5 ? ' is-bad' : '') + '">' + esc(avg == null ? '' : avg + ' min') + '</td><td class="r">' + (r.n ? (r.came / r.n).toFixed(1) : '') + '</td></tr>';
    }).join('') + '</tbody></table></div>' : '<p class="t-small">No class dates yet.</p>') + '</section>';
    return html + (real() ? '' : '<p class="t-tiny span-12">This is sample data.</p>') + '</div>';
  }
  function dateView(d) {
    var s = d.session, back = '<a class="rd-back" href="#/classlog">' + A.icon('back') + '<span>Class log</span></a>';
    if (!s) return back + '<div class="card"><p class="t-body">This class date was not found.</p></div>';
    var co = s.cohorts || {}, m = co.class_minutes || 60, st = new Date(s.scheduled_at).getTime(), o = outcomeOf(s);
    var from = st - 15 * MIN, span = (m + 30) * MIN, pos = function (t) { return Math.max(0, Math.min(100, (t - from) / span * 100)); };
    var facts = [['Scheduled', when(s.scheduled_at) + ' for ' + m + ' minutes'], ['Outcome', o.t], ['In the room', s.actual_start ? hm(s.actual_start) + ' to ' + hm(s.actual_end) : 'Nobody seen'],
      ['Teacher', teacherOf(s) + (s.teacher_joined_at ? ', joined ' + hm(s.teacher_joined_at) + (s.minutes_late ? ' (' + s.minutes_late + ' min late)' : ', on time') + ', ' + mins(s.teacher_seconds) + ' of ' + m + ' minutes in the class' : ', not seen in the room')],
      ['Learners', (s.learners_present != null ? s.learners_present : '–') + ' of ' + (co.enrolled_count || 0) + ' enrolled; most people at once: ' + (s.peak_people || 0)],
      ['Last read', s.verified_at ? when(s.verified_at) : 'Not yet']];
    var people = d.presence.slice().sort(function (a, b) { return (a.role === 'teacher' ? 0 : 1) - (b.role === 'teacher' ? 0 : 1) || String(a.first_join).localeCompare(String(b.first_join)); });
    var html = back + '<div class="view__head"><div><h1 class="t-h1">' + esc(label(co) + ', ' + when(s.scheduled_at)) + '</h1><p class="t-lead"><span class="dot' + o.d + '"></span>' + esc(o.t + '. ' + teacherOf(s) + '.') + '</p></div>' +
      '<div class="btn-row">' + recordButtons(s, d.recordings || []) + '<button class="btn btn--ghost btn--sm" type="button" data-cl-verify="' + esc(s.id) + '">Read the video room again</button>' + (co.id ? '<a class="btn btn--ghost btn--sm" href="#/classes/' + esc(co.id) + '">The class</a>' : '') + '</div></div>' +
      '<p class="t-small st-msg" data-cl-msg aria-live="polite"></p><div class="grid rise">' +
      '<section class="card span-5"><h2 class="t-h2">Facts</h2><div class="dt-wrap"><table class="dt"><tbody>' + facts.map(function (f) { return '<tr><td class="m nw">' + esc(f[0]) + '</td><td>' + esc(f[1]) + '</td></tr>'; }).join('') + '</tbody></table></div></section>' +
      '<section class="card span-7"><div class="panel-h"><h2 class="t-h2">Who was in the room</h2><span class="t-small">' + esc(hm(new Date(from)) + ' to ' + hm(new Date(from + span))) + '</span></div>' +
      (people.length ? '<div class="pl">' + people.map(function (p) {
        var a = new Date(p.first_join).getTime(), b = new Date(p.last_leave).getTime();
        return '<div class="pl__r"><span class="pl__n">' + esc(p.name || 'Unknown') + '<small>' + esc(ROLE[p.role] + (p.is_test ? ', test' : '')) + '</small></span><span class="tl tl--lg"><i class="tl__slot" style="left:' + pos(st) + '%;width:' + (pos(st + m * MIN) - pos(st)) + '%"></i><i class="' + (p.role === 'teacher' ? 'tl__bar' : 'tl__room') + '" style="left:' + pos(a) + '%;width:' + Math.max(1, pos(b) - pos(a)) + '%"></i></span></div>';
      }).join('') + '</div><div class="dt-wrap" style="margin-top:12px"><table class="dt"><thead><tr><th>Person</th><th>Joined</th><th>Left</th><th class="r">Minutes</th><th class="r">In the class</th><th class="r">Joins</th></tr></thead><tbody>' + people.map(function (p) {
        return '<tr><td>' + esc(p.name || 'Unknown') + '<div class="m">' + esc(ROLE[p.role] + (p.is_test ? ', your test account' : '')) + '</div></td><td>' + esc(hm(p.first_join)) + '</td><td>' + esc(hm(p.last_leave)) + '</td><td class="r">' + mins(p.seconds) + '</td><td class="r">' + mins(p.in_slot_seconds) + '</td><td class="r' + (p.joins > 2 ? ' is-bad' : '') + '">' + p.joins + '</td></tr>';
      }).join('') + '</tbody></table></div>' : '<p class="t-small">' + esc(s.verified_at ? 'Nobody was seen in the video room.' : 'The video room has not been read yet.') + '</p>') + '</section>' +
      recordingsCard(d.recordings || []) +
      '<section class="card span-6"><h2 class="t-h2">Video room records</h2>' + (d.meetings.length ? '<div class="dt-wrap"><table class="dt"><thead><tr><th>Started</th><th class="r">Lasted</th><th>Record</th></tr></thead><tbody>' + d.meetings.map(function (x) {
        return '<tr><td>' + esc(when(x.started_at)) + '</td><td class="r">' + mins(x.duration_seconds) + ' min' + (x.ongoing ? ', still on' : '') + '</td><td class="m">' + esc(x.meeting_id) + '</td></tr>';
      }).join('') + '</tbody></table></div>' : '<p class="t-small">No meeting recorded by the video service for this class date.</p>') + '</section>' +
      '<section class="card span-6"><h2 class="t-h2">What the automations did</h2>' + logTable(d.log, true) + '</section></div>';
    return html;
  }

  /* ---------- Recordings (owner, 13 Nov 2026: only admins record; clips kept 30 days, full recordings 90) ---------- */
  var KIND = { proof: 'Proof clip', full: 'Full recording', unknown: 'Not started by Alimun' };
  function onNow(s) { var st = new Date(s.scheduled_at).getTime(), m = (s.cohorts && s.cohorts.class_minutes) || 60; return Date.now() >= st - 15 * MIN && Date.now() <= st + (m + 90) * MIN; }
  function recordButtons(s, recs) {
    if (!onNow(s) || s.status === 'cancelled') return '';
    var running = recs.some(function (r) { return r.kind === 'full' && !r.start_error && !r.deleted_at && (r.status === 'in-progress' || (!r.status && Date.now() - new Date(r.requested_at).getTime() < 3 * HOUR)); });
    return running ? '<button class="btn btn--primary btn--sm" type="button" data-rec="stop" data-s="' + esc(s.id) + '">Stop recording</button>'
      : '<button class="btn btn--primary btn--sm" type="button" data-rec="start" data-s="' + esc(s.id) + '">Record the class</button>';
  }
  function recordingsCard(recs) {
    var html = '<section class="card span-12"><div class="panel-h"><h2 class="t-h2">Recordings</h2><span class="t-small">Only admins can watch; every viewing is noted. Proof clips are deleted after 30 days, full recordings after 90, unless kept.</span></div>';
    if (!recs.length) return html + '<p class="t-small">None for this class date.</p></section>';
    return html + '<div class="dt-wrap"><table class="dt"><thead><tr><th>Recording</th><th>Started</th><th class="r">Length</th><th>Deleted</th><th>Watched by</th><th></th></tr></thead><tbody>' + recs.map(function (r) {
      var views = r.recording_views || [], ready = r.daily_recording_id && !r.deleted_at;
      var state = r.deleted_at ? 'Deleted ' + when(r.deleted_at) : r.start_error ? 'Did not start' : !r.daily_recording_id ? 'Waiting for the video service' : r.keep ? 'Kept' + (r.keep_note ? ': ' + r.keep_note : '') : r.delete_after ? 'On ' + A.fmt(r.delete_after, { day: 'numeric', month: 'short' }) : '';
      return '<tr><td><span class="dot' + (r.kind === 'unknown' ? ' dot--bad' : r.kind === 'full' ? ' dot--warn' : '') + '"></span>' + esc(KIND[r.kind] || r.kind) + (r.planned_minute != null ? ' <span class="m">(minute ' + r.planned_minute + ')</span>' : '') + (r.start_error ? '<div class="m is-bad">' + esc(String(r.start_error).slice(0, 140)) + '</div>' : '') + '</td>' +
        '<td class="nw">' + esc(r.started_at ? hm(r.started_at) : hm(r.requested_at) + ' (asked)') + '</td><td class="r">' + esc(r.duration_seconds ? Math.round(r.duration_seconds) + ' s' : '') + '</td><td class="m">' + esc(state) + '</td>' +
        '<td class="m">' + esc(views.length ? views.map(function (v) { return (v.viewer_email || 'an admin') + ', ' + when(v.viewed_at); }).join('; ') : 'Nobody') + '</td>' +
        '<td class="r nw">' + (ready ? '<button class="btn btn--quiet btn--sm" type="button" data-rec="watch" data-id="' + esc(r.id) + '">Watch</button> <button class="btn btn--ghost btn--sm" type="button" data-rec="' + (r.keep ? 'unkeep' : 'keep') + '" data-id="' + esc(r.id) + '">' + (r.keep ? 'Let it be deleted' : 'Keep') + '</button>' : '') + '</td></tr>';
    }).join('') + '</tbody></table></div></section>';
  }
  function recAction(b) {
    var k = b.getAttribute('data-rec'), msg = root.querySelector('[data-cl-msg]');
    if (!real()) { msg.textContent = 'In the sample nothing is recorded or played.'; return; }
    if (k === 'start' && b.getAttribute('data-sure') !== '1') { b.setAttribute('data-sure', '1'); b.textContent = 'Yes, record now'; msg.textContent = 'Everyone in the room will see that the class is being recorded. Press again to start; it stops by itself 15 minutes after the class ends.'; return; }
    b.disabled = true; msg.textContent = k === 'watch' ? 'Opening…' : 'Working…';
    var win = k === 'watch' ? window.open('', '_blank') : null;
    var call = k === 'start' || k === 'stop' ? window.AlimunData.ops(k === 'start' ? 'record-start' : 'record-stop', { session: b.getAttribute('data-s') })
      : k === 'watch' ? window.AlimunData.ops('recording-link', { id: b.getAttribute('data-id') })
      : window.AlimunData.ops('recording-keep', { id: b.getAttribute('data-id'), keep: k === 'keep', note: k === 'keep' ? (window.prompt('Why keep it? (shown beside it)') || '') : '' });
    call.then(function (r) {
      if (k === 'watch') {
        var u = null; try { u = new URL(r.url); } catch (e) { /* not a link */ }
        if (!u || u.protocol !== 'https:') { if (win) win.close(); throw new Error('unexpected link'); }
        if (win) { win.opener = null; win.location.href = u.href; } else location.href = u.href;
      }
      return window.AlimunData.adminClassDate(part).then(function (d) { DATE = d; draw(); var m = root.querySelector('[data-cl-msg]'); if (m) m.textContent = k === 'start' ? 'Recording for about ' + (r.minutes || '') + ' minutes. It appears below once the video service has it.' : k === 'stop' ? 'Stopped.' : k === 'watch' ? 'Opened in a new tab; the link works for 15 minutes.' : 'Saved.'; });
    }).catch(function (e) { if (win) win.close(); b.disabled = false; msg.textContent = 'That did not work: ' + ((e && e.body && e.body.error) || (e && e.message) || 'try again') + '.'; });
  }
  var LABELS = { 'class-outcomes': 'Class outcomes', 'teacher-late': 'Teacher late alert', 'daily-digest': 'Morning digest', 'proof-clips': 'Proof clips', 'recording-cleanup': 'Recording clean-up', 'recording-guard': 'Recording guard' };
  function autoLabel(n) { var a = AU && AU.automations.filter(function (x) { return x.name === n; })[0]; return a ? a.label : LABELS[n] || n; }
  function logTable(list, short) {
    if (!list.length) return '<p class="t-small">Nothing yet.</p>';
    return '<div class="dt-wrap"><table class="dt"><thead><tr><th>When</th>' + (short ? '' : '<th>Automation</th>') + '<th>Action</th><th>Result</th></tr></thead><tbody>' + list.map(function (l) {
      var d = l.detail || {}, extra = [d.outcome ? 'outcome: ' + (OUT[d.outcome] || d.outcome) : '', d.was ? 'was ' + (OUT[d.was] || d.was) : '', d.teacher ? 'teacher ' + d.teacher : '', d.minutes_late != null ? d.minutes_late + ' min late' : ''].filter(Boolean).join(', ');
      return '<tr><td class="nw m">' + esc(when(l.created_at)) + '</td>' + (short ? '' : '<td>' + esc(autoLabel(l.automation)) + '</td>') + '<td>' + esc(A.cap(l.action) + (l.target ? ': ' + l.target : '')) + (extra ? '<div class="m">' + esc(extra) + '</div>' : '') + (l.session_id && !short ? '<div><a class="m" href="#/classlog/' + esc(l.session_id) + '">The class date</a></div>' : '') + '</td>' +
        '<td class="nw"><span class="dot' + (!l.ok ? ' dot--bad' : l.dry_run ? ' dot--warn' : '') + '"></span>' + esc(!l.ok ? 'Failed' : l.dry_run ? 'Dry run, not done' : 'Done') + (l.error ? '<div class="m is-bad">' + esc(String(l.error).slice(0, 140)) + '</div>' : '') + '</td></tr>';
    }).join('') + '</tbody></table></div>';
  }

  /* ---------- Automations ---------- */
  var AU = null, AF = '';
  function autoView() {
    var html = '<div class="view__head"><div><h1 class="t-h1">Automations</h1><p class="t-lead">What runs by itself. Each one can be switched off; in dry run it only writes down what it would have done. None does the same thing twice, each stops at its daily cap, and three failures in a row pause it and email you.</p></div></div><div class="grid rise">';
    html += AU.automations.map(function (a) {
      var mine = AU.log.filter(function (l) { return l.automation === a.name; }), today = mine.filter(function (l) { return Date.now() - new Date(l.created_at).getTime() < DAY; });
      var state = !a.enabled ? (a.paused_reason ? 'Paused: ' + a.paused_reason : 'Off') : a.dry_run ? 'On, in dry run: it writes down what it would do and does nothing' : 'On and live';
      return '<section class="card span-4 au' + (a.enabled && !a.dry_run ? ' is-live' : '') + '"><div class="panel-h"><h2 class="t-h2">' + esc(a.label) + '</h2><span class="nw t-small"><span class="dot' + (!a.enabled ? (a.paused_reason ? ' dot--bad' : ' dot--off') : a.dry_run ? ' dot--warn' : '') + '"></span>' + esc(!a.enabled ? (a.paused_reason ? 'Paused' : 'Off') : a.dry_run ? 'Dry run' : 'Live') + '</span></div>' +
        '<p class="t-small">' + esc(a.about || '') + '</p><p class="t-small au__state">' + esc(state) + '</p>' +
        '<label class="mt-switch"><input type="checkbox" role="switch" data-au="' + esc(a.name) + '" data-au-k="enabled"' + (a.enabled ? ' checked' : '') + '><span class="mt-switch__s" aria-hidden="true"></span><span><b>On</b></span></label>' +
        '<label class="mt-switch"><input type="checkbox" role="switch" data-au="' + esc(a.name) + '" data-au-k="dry_run"' + (a.dry_run ? ' checked' : '') + '><span class="mt-switch__s" aria-hidden="true"></span><span><b>Dry run</b><small>Write down what it would do, do nothing</small></span></label>' +
        '<div class="au__cap"><label class="st-field"><span class="st-lbl">Daily cap</span><input class="st-in" type="number" min="0" max="10000" value="' + esc(a.daily_cap) + '" data-au-cap="' + esc(a.name) + '"></label><button class="btn btn--quiet btn--sm" type="button" data-au-capsave="' + esc(a.name) + '">Save</button></div>' +
        '<p class="t-small">' + esc(A.plural(today.filter(function (l) { return l.ok && !l.dry_run; }).length, 'action', 'actions') + ' today, ' + today.filter(function (l) { return l.dry_run; }).length + ' in dry run, ' + today.filter(function (l) { return !l.ok; }).length + ' failed' + (a.consecutive_failures ? '; ' + a.consecutive_failures + ' failures in a row' : '') + '.') + '</p>' +
        (a.name === 'daily-digest' ? '<div class="btn-row"><button class="btn btn--ghost btn--sm" type="button" data-au-digest>Send me yesterday’s digest now</button></div>' : '') +
        '<p class="t-small st-msg" data-au-msg="' + esc(a.name) + '" aria-live="polite"></p></section>';
    }).join('');
    var list = AU.log.filter(function (l) { return !AF || l.automation === AF; }).slice(0, 200);
    html += '<section class="card span-12"><div class="panel-h"><h2 class="t-h2">What they did</h2><select class="st-in" data-au-f aria-label="Automation" style="max-width:240px">' + opt('', 'Every automation', AF) + AU.automations.map(function (a) { return opt(a.name, a.label, AF); }).join('') + '</select></div>' + logTable(list, false) + '</section>';
    return html + (real() ? '' : '<p class="t-tiny span-12">This is sample data; nothing is switched.</p>') + '</div>';
  }
  function setAuto(name, patch, msgEl) {
    if (!real()) { var a = AU.automations.filter(function (x) { return x.name === name; })[0]; Object.assign(a, patch); draw(); return; }
    if (msgEl) msgEl.textContent = 'Saving…';
    window.AlimunData.ops('automation-set', Object.assign({ name: name }, patch)).then(function () { return window.AlimunData.adminAutomations(); }).then(function (d) { AU = d; draw(); var m = root.querySelector('[data-au-msg="' + name + '"]'); if (m) m.textContent = 'Saved.'; },
      function (e) { if (msgEl) msgEl.textContent = 'Not saved: ' + ((e && e.body && e.body.error) || (e && e.message) || 'try again') + '.'; draw(); });
  }

  /* ---------- Mounting ---------- */
  var which = null, part = null, DATE = null;
  function draw() {
    if (which === 'automations') root.innerHTML = autoView();
    else root.innerHTML = part ? dateView(DATE) : logView();
  }
  function bind() {
    if (root.__aops) return;
    root.__aops = true;
    root.addEventListener('change', function (e) {
      var k = e.target.getAttribute('data-cl');
      if (k) { F[k] = k === 'tests' ? e.target.checked : k === 'days' ? +e.target.value : e.target.value; if (k === 'days') return load(); draw(); return; }
      if (e.target.hasAttribute('data-au')) { var p = {}; p[e.target.getAttribute('data-au-k')] = e.target.checked; setAuto(e.target.getAttribute('data-au'), p, root.querySelector('[data-au-msg="' + e.target.getAttribute('data-au') + '"]')); return; }
      if (e.target.hasAttribute('data-au-f')) { AF = e.target.value; draw(); }
    });
    root.addEventListener('click', function (e) {
      var rb = e.target.closest('[data-rec]');
      if (rb && !rb.disabled) { recAction(rb); return; }
      var v = e.target.closest('[data-cl-verify]');
      if (v) {
        var msg = root.querySelector('[data-cl-msg]');
        if (!real()) { msg.textContent = 'In the sample there is no video room to read.'; return; }
        v.disabled = true; msg.textContent = 'Reading the video room…';
        window.AlimunData.ops('verify-session', { session: v.getAttribute('data-cl-verify') }).then(function (r) {
          return window.AlimunData.adminClassDate(part).then(function (d) { DATE = d; draw(); var m = root.querySelector('[data-cl-msg]'); if (m) m.textContent = 'Read: ' + A.plural(r.meetings || 0, 'meeting', 'meetings') + ', ' + A.plural(r.people || 0, 'person', 'people') + (r.settled ? '' : '; the outcome is set 20 minutes after the class ends') + '.'; });
        }, function (e2) { v.disabled = false; msg.textContent = 'That did not work: ' + ((e2 && e2.body && e2.body.error) || (e2 && e2.message) || 'try again') + '.'; });
        return;
      }
      var cs = e.target.closest('[data-au-capsave]');
      if (cs) { var n = cs.getAttribute('data-au-capsave'), val = parseInt(root.querySelector('[data-au-cap="' + n + '"]').value, 10); if (isFinite(val)) setAuto(n, { daily_cap: val }, root.querySelector('[data-au-msg="' + n + '"]')); return; }
      var dg = e.target.closest('[data-au-digest]');
      if (dg) {
        var m2 = root.querySelector('[data-au-msg="daily-digest"]');
        if (!real()) { m2.textContent = 'In the sample nothing is sent.'; return; }
        dg.disabled = true; m2.textContent = 'Sending…';
        window.AlimunData.ops('digest-now').then(function (r) { m2.textContent = 'Sent to you: the digest of ' + r.day + '.'; dg.disabled = false; }, function (e3) { dg.disabled = false; m2.textContent = 'Not sent: ' + ((e3 && e3.body && e3.body.error) || (e3 && e3.message) || 'try again') + '.'; });
      }
    });
  }
  var no = 0;
  function load() {
    var my = ++no;
    root.innerHTML = loading();
    var get = which === 'automations' ? (real() ? window.AlimunData.adminAutomations() : Promise.resolve(sampleAutos()))
      : part ? (real() ? window.AlimunData.adminClassDate(part) : Promise.resolve(sampleDate(part))) : (real() ? window.AlimunData.adminClassLog(F.days) : Promise.resolve(sampleLog()));
    return get.then(function (d) {
      if (my !== no) return { stale: true };
      if (which === 'automations') AU = d; else if (part) DATE = d; else LOG = d;
      draw();
      return { title: which === 'automations' ? 'Automations' : part && d.session ? label(d.session.cohorts) + ' class date' : 'Class log' };
    }, function (e) { if (my === no) root.innerHTML = '<div class="card"><p class="t-body">This did not load: ' + esc((e && e.message) || 'please try again') + '.</p></div>'; return { stale: true }; });
  }
  function mounter(kind) {
    return { mount: function (view, parts, helpers) { A = helpers; root = view; which = kind; part = kind === 'classlog' ? parts[0] || null : null; bind(); return load(); }, reset: function () {} };
  }
  window.AlimunAdminClassLog = mounter('classlog');
  window.AlimunAdminAutomations = mounter('automations');
})();
