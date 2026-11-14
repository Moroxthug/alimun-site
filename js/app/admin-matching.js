/* Alimun admin: matching (owner, 12 Nov 2026). English only. Engine: js/match.js (unit tested in tests/unit/match.test.js).
   Rebuilt 12 Nov 2026 around what the owner does here (owner: "improve the management of the whole page. who gets
   email is too mechanical, i want automated feel when i do something, also better visual management of the classes"):
   #/matching        the figures in one line; the launch class with its email as a funnel, one click to send it to
                     everyone who has not had it and a switch to send it by itself to new English learners (hourly job);
                     the rooms already planned with their seats; the groups that could form as a board, each with
                     "Create the room": teacher, substitute and start date in place, and the group's learners are put
                     down as interested so the room job emails them when it is published; who is not in a group and why;
                     who is closest to buying; when they can learn (heat map, folded); every learner in a table, with the
                     time zone correctable in place.
   #/matching/<id>   one learner: everything the engine knows and their best matches, with the reasons.
   The owner's test accounts (any email with "bchysf", "Test", "Test test") are left out unless asked for.
   Data from admin_matching() (admins only); signed out or with ?sample=1, a sample where nothing is saved or sent. */
(function () {
  'use strict';
  var A = null, root = null, RAW = null, M = null;
  var S = { lang: 'English', tz: null, incomplete: false, staff: false, tests: false, level: '', q: '', flevel: '', fgoal: '', sort: 'ready' };
  var STAGE = { ready: 'Ready to buy', warming: 'Warming up', cold: 'Cold' };
  var TIMES = { stated: 'gave their days and times', days: 'gave their days, usual hours assumed', assumed: 'gave no times: weekday evenings and weekend mornings assumed', none: 'time zone not known' };
  var TIMES_SHORT = { stated: 'Given', days: 'Days given', assumed: 'Assumed', none: 'Unknown' };
  var PREFER = { exam: 'exam preparation', classes: 'relaxed small-group classes', conversation: 'conversation practice', one: '1 on 1 lessons', self: 'learning on their own' };
  var WEEKLY = { lt1: 'less than an hour a week', h1_3: 'one to three hours a week', h3_5: 'three to five hours a week', gt5: 'more than five hours a week' };
  var TEACHER = { native: 'wants a native speaker', home: 'wants a teacher from their country', either: 'any good teacher' };
  var EXPLAIN = { target: 'explanations only in the language they learn', mostly: 'explanations mostly in that language', own: 'explanations in their own language' };
  var TF = { '3_months': 'within 3 months', '6_months': 'within 6 months', '1_year': 'within a year', no_deadline: 'no deadline' };
  var ROOM_STATE = { draft: 'Draft', published: 'Published, taking sign-ups', open: 'Open', running: 'Running' };
  var PRODUCT_NAME = { level_en: 'English level pack', intensive_en: 'English intensive pack', exam_en: 'English exam pack', open_en: 'English open class', level_de: 'German level pack', exam_de: 'German exam pack', open_de: 'German open class', help_class: 'Help class' };
  /* Time zones offered when correcting a learner's: the ones learners have, plus the usual ones */
  var ZONES = ['Europe/London', 'Europe/Lisbon', 'Europe/Madrid', 'Europe/Paris', 'Europe/Berlin', 'Europe/Rome', 'Europe/Warsaw', 'Europe/Budapest', 'Europe/Athens', 'Europe/Istanbul', 'Europe/Kyiv', 'Europe/Moscow',
    'Africa/Casablanca', 'Africa/Algiers', 'Africa/Tunis', 'Africa/Cairo', 'Africa/Lagos', 'Africa/Nairobi', 'Africa/Mogadishu', 'Asia/Dubai', 'Asia/Tehran', 'Asia/Karachi', 'Asia/Kolkata', 'Asia/Shanghai', 'Asia/Taipei', 'Asia/Seoul', 'Asia/Tokyo',
    'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles', 'America/Vancouver', 'America/Mexico_City', 'America/Bogota', 'America/Lima', 'America/Sao_Paulo', 'America/Buenos_Aires', 'Atlantic/Canary', 'Australia/Sydney'];
  var MY_TZ = (function () { try { return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'; } catch (e) { return 'UTC'; } })();
  var DAY = 86400000;

  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real'; }
  function loading() { return '<div class="rd-loading"><div class="loader" style="--w:56px" role="img" aria-label="Loading">' + A.loaderInner() + '</div></div>'; }
  function city(tz) { return tz ? tz.split('/').pop().replace(/_/g, ' ') : 'Not known'; }
  function goal(g) { return (M.GOALS[g] || 'Focus not given'); }
  function joinAnd(list) { return list.length < 2 ? list.join('') : list.slice(0, -1).join(', ') + ' and ' + list[list.length - 1]; }
  function opt(v, label, cur) { return '<option value="' + esc(v) + '"' + (String(v) === String(cur) ? ' selected' : '') + '>' + esc(label) + '</option>'; }
  function countryName(c) { try { return new Intl.DisplayNames(['en'], { type: 'region' }).of(c) || c; } catch (e) { return c; } }
  function nowIn(tz) { try { return new Intl.DateTimeFormat('en-GB', { timeZone: tz, hour: '2-digit', minute: '2-digit' }).format(new Date()); } catch (e) { return ''; } }
  function dayFmt(d) { return A.fmt(d + (String(d).length === 10 ? 'T12:00:00Z' : ''), { weekday: 'short', day: 'numeric', month: 'short' }); }
  function short(days) { return days.map(function (d) { return d.slice(0, 3); }).join(', '); }
  function pct(n, d) { return d ? Math.round(100 * n / d) : 0; }
  /* When a room starting on `start` goes on sale: 21 days before, or at the next daily room job when that is past */
  function onSale(start) { var pub = Date.parse(start + 'T12:00:00Z') - 21 * DAY; return pub <= Date.now() + DAY / 2 ? 'at the next daily run, early tomorrow' : 'on ' + dayFmt(new Date(pub).toISOString().slice(0, 10)) + ', 21 days before it starts'; }

  /* ---------- Sample (signed out or ?sample=1) ---------- */
  function sample() {
    var n = Date.now(), ago = function (d) { return new Date(n - d * DAY).toISOString(); };
    var P = function (o) { return Object.assign({ time: 'h1_3', prefer: ['classes', 'conversation'], explain: 'mostly', teacher: 'native' }, o); };
    var L = function (i, name, level, goal, tz, o) {
      return Object.assign({ id: 's' + i, user_id: 'u' + i, name: name, email: name.toLowerCase().replace(/[^a-z]+/g, '.') + '@example.com', language: 'English', level: level,
        placement: { level: level, language: 'English' }, goal: goal, timezone: tz, timeframe: '6_months', days: [], role: 'student', last_active: ago(2), days_active: 2, acts_7d: 4, created_at: ago(5) }, o || {});
    };
    return { learners: [
      L(1, 'Marco Rossi', 'A1', 'relocation', 'Europe/Rome', { poll: P({ lang: 'it', time: 'h3_5' }), timeframe: '3_months', tutor_min: 12, news: true, country: 'IT' }),
      L(2, 'Aya Benali', 'A1', 'professional', 'Africa/Casablanca', { poll: P({ lang: 'fr' }), news: true, country: 'MA' }),
      L(3, 'Lena Fischer', 'A1', 'foundations', 'Europe/Berlin', { days: [1, 2, 4], time_start: '18:00', time_end: '21:00' }),
      L(4, 'Pablo Ortega', 'A1', 'relocation', 'Europe/Madrid', { quotes: 1, timeframe: '3_months' }),
      L(5, 'Elif Kaya', 'A1', 'relocation', 'Europe/Istanbul', { poll: P({ lang: 'tr', explain: 'own', teacher: 'home' }), country: 'TR' }),
      L(6, 'Chloé Martin', 'A2', 'professional', 'Europe/Paris', { poll: P({ lang: 'fr' }), news: true }),
      L(7, 'Jakub Nowak', 'A1', 'professional', 'Europe/Warsaw', { last_active: ago(20), days_active: 1 }),
      L(8, 'Sofia Lima', 'A1', 'foundations', 'America/Sao_Paulo', { poll: P({ lang: 'pt' }) }),
      L(9, 'Diego Torres', 'A1', 'relocation', 'America/Lima', { news: true }),
      L(10, 'Emily Chen', 'A1', 'relocation', 'America/Vancouver', { tutor_min: 30, days_active: 5, last_active: ago(0.2) }),
      L(11, 'Ryan Lee', 'A1', 'relocation', 'America/Los_Angeles', {}),
      L(12, 'Mei Lin', 'A1', 'foundations', 'Asia/Taipei', { last_active: null, days_active: 0 }),
      L(13, 'Omar Haddad', 'B2', 'professional', 'Europe/Istanbul', { poll: P({ time: 'h3_5', explain: 'target' }), timeframe: '3_months', days_active: 4, tutor_min: 25, country: 'TR' }),
      L(14, 'Julie Bernard', 'B2', 'academic', 'Europe/Paris', { timeframe: '3_months', interest: ['exam_en'] }),
      L(15, 'Can Yilmaz', 'B2', 'foundations', 'Asia/Karachi', { last_active: null, days_active: 0 }),
      L(16, 'Hugo Leroy', 'B1', 'academic', 'Europe/Paris', {}),
      L(17, 'Nora Svensson', 'B1', 'professional', 'Europe/Stockholm', { days: [6, 0] }),
      L(19, 'Claire Dubois', 'A1', 'pleasure', 'Europe/Paris', { days: [6, 0], time_start: '11:00', time_end: '12:00', poll: P({ prefer: ['conversation'], time: 'lt1' }) }),
      L(20, 'Test test', 'B1', 'foundations', 'America/Vancouver', { test: true }),
      L(21, 'Klaus Weber', 'A2', 'relocation', 'Europe/Vienna', { language: 'German', placement: { level: 'A2', language: 'German' } })
    ], availability: [{ teacher_id: 't1', teacher: 'James Hall', starts_on: ago(-20).slice(0, 10), kinds: ['level_pack', 'open_class'], language: 'English', levels: ['A1', 'A2'],
      days: ['Monday', 'Tuesday', 'Thursday'], schedule_time: '19:00', timezone: 'Europe/Rome', substitute: true }],
    rooms: [{ id: 'r1', product_key: 'level_en', language: 'English', level: 'A1', room_state: 'published', starts_on: ago(-25).slice(0, 10), schedule_days: ['Monday', 'Tuesday', 'Thursday'], schedule_time: '19:00', timezone: 'Europe/Paris', max: 12, min: 8, seats: 5 },
      { id: 'r2', product_key: 'open_en', language: 'English', level: 'A1', room_state: 'open', starts_on: ago(-4).slice(0, 10), schedule_days: ['Wednesday'], schedule_time: '19:00', timezone: 'Europe/Paris', max: 20, min: 12, seats: 13 }] };
  }

  /* ---------- Working it out ---------- */
  function compute() {
    var now = new Date();
    M = window.AlimunMatch;
    var R = M.run(RAW, { language: S.lang, now: now, includeIncomplete: S.incomplete, includeStaff: S.staff, includeTests: S.tests });
    R.now = now;
    R.byId = {}; R.all.forEach(function (l) { R.byId[l.id] = l; });
    R.inGroup = {}; R.groups.forEach(function (g, i) { g.i = i; g.members.forEach(function (m) { R.inGroup[m.learner.id] = g; }); });
    R.why = {}; R.unplaced.forEach(function (u) { R.why[u.learner.id] = u.reason; });
    return R;
  }
  function languages() {
    var c = {};
    (RAW.learners || []).forEach(function (l) { if (l.language && (S.tests || !l.test)) c[l.language] = (c[l.language] || 0) + 1; });
    return Object.keys(c).sort(function (a, b) { return c[b] - c[a]; }).map(function (k) { return [k, c[k]]; });
  }
  function zonesOf(R) {
    var z = {};
    R.pool.forEach(function (l) { if (l.tz) z[l.tz] = (z[l.tz] || 0) + 1; });
    var list = Object.keys(z).sort(function (a, b) { return z[b] - z[a]; });
    if (list.indexOf(MY_TZ) < 0) list.unshift(MY_TZ);
    return list;
  }

  /* ---------- Small pieces ---------- */
  function meter(have, min, max) {
    /* One cell per seat up to the room's size; the cells up to the minimum are outlined, filled cells are learners */
    var cells = '';
    for (var i = 0; i < max; i++) cells += '<i class="' + (i < have ? 'on' : '') + (i < min ? ' req' : '') + '"></i>';
    return '<div class="mm" role="img" aria-label="' + esc(have + ' of ' + min + ' needed, room for ' + max) + '">' + cells + '</div>';
  }
  function readyBar(l) {
    return '<span class="rb" title="' + esc(STAGE[l.ready.stage] + ': ' + (l.ready.why.join(', ') || 'nothing yet')) + '"><span class="rb__t"><i style="width:' + l.ready.score + '%" class="rb--' + l.ready.stage + '"></i></span><b>' + l.ready.score + '</b></span>';
  }
  function localTime(g, l, R) {
    if (!l.tz) return 'time not known';
    var t = M.timesIn(g.slot, l.tz, R.now);
    return short(t.days) + ' ' + t.time;
  }

  /* ---------- Head and figures ---------- */
  function headView(R) {
    var s = R.summary;
    return '<div class="view__head"><div><h1 class="t-h1">Matching</h1><p class="t-lead">Who could learn together, the rooms already planned, and the next step for each group. Worked out live from what learners told us.</p></div>' +
      '<div class="mt-tools"><label class="mt-tool"><span>Language</span><select class="st-in" data-mt="lang">' + languages().map(function (x) { return opt(x[0], x[0] + ' (' + x[1] + ')', S.lang); }).join('') + '</select></label>' +
      '<label class="mt-tool"><span>Times shown in</span><select class="st-in" data-mt="tz">' + zonesOf(R).map(function (z) { return opt(z, city(z) + (z === MY_TZ ? ' (yours)' : ''), S.tz); }).join('') + '</select></label></div></div>' +
      '<div class="mt-filters"><label class="st-check"><input type="checkbox" data-mt="tests"' + (S.tests ? ' checked' : '') + '> Include your test accounts (' + s.tests + ')</label>' +
      '<label class="st-check"><input type="checkbox" data-mt="incomplete"' + (S.incomplete ? ' checked' : '') + '> Include sign-ups with no level test and no time zone (' + s.incomplete + ')</label>' +
      '<label class="st-check"><input type="checkbox" data-mt="staff"' + (S.staff ? ' checked' : '') + '> Include admin and teacher accounts (' + s.staff + ')</label></div>';
  }
  function figures(R) {
    var s = R.summary, open = R.groups.filter(function (g) { return !g.need; }).length, best = R.groups[0];
    var known = (s.times.stated || 0) + (s.times.days || 0), ready = s.stages.ready || 0, warm = s.stages.warming || 0;
    var k = [
      ['Learners', R.pool.length, S.lang + ', in no class yet'],
      ['Groups', R.groups.length, open ? open + ' could open now' : 'none at its minimum yet'],
      ['Closest group', best ? best.members.length + ' of ' + best.min : '0', best ? best.level + ' ' + M.KIND_NAME[best.kind] : 'no group yet'],
      ['Ready to buy', ready, warm + ' warming up'],
      ['Gave their times', known + ' of ' + R.pool.length, 'the rest are assumed'],
      ['Paying', s.paying, 'with a purchase or plan']
    ];
    return '<div class="kpis mt-kpis">' + k.map(function (x) { return '<div class="kpi"><span class="kpi__l">' + esc(x[0]) + '</span><span class="kpi__v">' + esc(String(x[1])) + '</span><span class="kpi__s">' + esc(x[2]) + '</span></div>'; }).join('') + '</div>';
  }

  /* ---------- The launch class (English A1–A2; api/_lib/launch.js, launch-email.js) ---------- */
  var LAUNCH = null, LMAIL = null, LREP = null, LAUTO = null;
  function launchCard() {
    if (S.lang !== 'English') return '';
    var L = LAUNCH;
    var head = '<section class="card span-12 mt-launch" aria-labelledby="h-launch"><div class="panel-h"><h2 class="t-h2" id="h-launch">Launch class</h2>' +
      (L && L.offer ? '<span class="t-small">' + esc(L.offer.active ? 'Sign-ups close ' + A.fmt(L.offer.endsAt, { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }) : 'Sign-ups are closed') + '</span>' : '') + '</div>';
    if (!L) return head + '<p class="t-small">' + esc(real() ? 'Not set up, or it did not load.' : 'In the sample there is no launch class.') + '</p></section>';
    if (!L.offer) return head + '<p class="t-small">No launch class is set up.</p></section>';
    var rooms = (L.rooms || []).map(function (r) { return (/^level_/.test(r.product_key) ? 'Level pack' : 'Open class') + ': ' + r.seats + ' (' + r.state + ')'; }).join(', ');
    var html = head + '<div class="mt-launch__grid"><div><h3 class="t-h3">Sign-ups</h3>' + meter(Math.min(L.seats, Math.max(L.min, 12)), L.min, Math.max(L.min, 12, L.seats)) +
      '<p class="t-small" style="margin-top:6px">' + esc(L.seats + ' of ' + L.min + ' needed to go ahead. ' + rooms + '. Free first class: ' + (L.intro ? L.intro.registeredCount + ' registered' : 'none') + '.') + '</p></div>';
    html += '<div><h3 class="t-h3">The email</h3>' + funnelHtml() + '</div></div>';
    html += mailBar() + reportHtml() + '</section>';
    return html;
  }
  function funnelHtml() {
    var r = LREP, people = (r && r.people) || [], n = people.length, c = function (f) { return people.filter(f).length; };
    if (!n) return '<p class="t-small" style="margin-top:6px">Not sent to anyone yet.</p>';
    var steps = [['Sent', n], ['Clicked the button', c(function (x) { return x.clickedAt; })], ['Read the dashboard note', c(function (x) { return x.bellReadAt; })],
      ['Saved a free place', c(function (x) { return x.freeClassAt; })], ['Looked at a price', c(function (x) { return x.pricedAt; })], ['Reserved', c(function (x) { return x.reserved; })]];
    return '<div class="fn">' + steps.map(function (s) { return '<div class="fn__r"><span>' + esc(s[0]) + '</span><span class="fn__t"><i style="width:' + Math.max(pct(s[1], n), s[1] ? 3 : 0) + '%"></i></span><b>' + s[1] + '</b></div>'; }).join('') + '</div>';
  }
  function mailBar() {
    var m = LMAIL, waiting = m && m.people ? m.people.length : null, beg = 0;
    if (m && m.people) m.people.forEach(function (x) { if (/^A/.test(x.level || '')) beg++; });
    var line = waiting == null ? 'Working out who has not had it…' : waiting ? A.plural(waiting, 'English learner has', 'English learners have') + ' not had it yet: ' + beg + ' at A1 or A2 (the class and the offer), ' + (waiting - beg) + ' at B1 or B2 (the free class).' : 'Every English learner from A1 to B2 has had it.';
    var auto = LAUTO === true, sent = m && m.sent != null ? A.plural(m.sent, 'email', 'emails') + ' sent' + (m.failed && m.failed.length ? ', failed: ' + m.failed.join(', ') : '') + '.' : '';
    return '<div class="mt-mail"><div class="mt-mail__l"><p class="t-body"><b>' + esc(line) + '</b></p>' +
      (waiting ? '<details class="ad-details"><summary>Who they are</summary><p class="t-small">' + esc(m.people.map(function (x) { return (x.name || 'No name') + ' (' + (x.level || '') + ', ' + x.lang + ')'; }).join(', ')) + '</p></details>' : '') +
      '<label class="mt-switch"><input type="checkbox" role="switch" data-mx-auto' + (auto ? ' checked' : '') + (LAUTO == null ? ' disabled' : '') + '><span class="mt-switch__s" aria-hidden="true"></span><span><b>Send it by itself to new English learners</b><small>' +
        esc(auto ? 'On: anyone new at A1 to B2 gets it within the hour, in their language and time zone. Your test accounts never do.' : 'Off. When on, anyone new at A1 to B2 gets it within the hour' + (waiting ? ', and the ' + waiting + ' above get it at the next hourly run' : '') + '.') + '</small></span></label></div>' +
      '<div class="mt-mail__r">' + (waiting ? '<button class="btn btn--primary btn--sm" type="button" data-mx-mail="all">' + esc('Send it to the ' + A.plural(waiting, 'learner', 'learners') + ' now') + '</button>' : '') +
      '<button class="btn btn--quiet btn--sm" type="button" data-mx-mail="test">Send me a test</button></div>' +
      '<p class="t-small st-msg mt-mail__msg" data-mx-mailmsg aria-live="polite">' + esc(sent) + '</p></div>';
  }
  function when(at) { return A.fmt(at, { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }); }
  function reportHtml() {
    var r = LREP;
    if (!r || !r.people || !r.people.length) return '';
    var PROD = { level_en: 'level pack', open_en: 'open class' };
    return '<details class="ad-details mt-rep"><summary>Who did what after the email (' + r.people.length + ')</summary><div class="dt-wrap"><table class="dt"><thead><tr><th>Learner</th><th>Furthest step</th><th>Emailed</th><th>Since then</th></tr></thead><tbody>' +
      r.people.map(function (x) {
        var step = x.reserved ? 'Reserved the ' + (PROD[x.reserved.product] || x.reserved.product) : x.pricedAt ? 'Looked at a price' : x.freeClassAt ? 'Saved a free place' : x.clickedAt ? 'Clicked' : x.bellReadAt ? 'Read the note' : 'Nothing yet';
        var did = [];
        if (x.clickedAt) did.push('clicked ' + when(x.clickedAt));
        if (x.freeClassAt) did.push('free place ' + when(x.freeClassAt));
        if (x.pricedAt) did.push('price ' + when(x.pricedAt));
        if (!did.length) did.push(x.lastSeen ? 'last seen ' + when(x.lastSeen) : 'not seen since');
        return '<tr><td>' + esc((x.name || 'No name') + (x.level ? ', ' + x.level : '')) + '</td><td class="nw"><span class="dot' + (x.reserved ? '' : x.pricedAt || x.freeClassAt || x.clickedAt ? ' dot--warn' : ' dot--off') + '"></span>' + esc(step) + '</td>' +
          '<td class="m nw">' + esc((x.emailed ? '' : 'Failed, ') + when(x.sentAt)) + '</td><td class="m">' + esc(did.join(', ')) + '</td></tr>';
      }).join('') + '</tbody></table></div><p class="t-tiny" style="margin-top:6px">Email opens are not counted: that needs a hidden pixel, which needs consent in the EU.</p></details>';
  }
  function launchMail(b) {
    var mode = b.getAttribute('data-mx-mail'), msg = root.querySelector('[data-mx-mailmsg]');
    if (!real()) { msg.textContent = 'This is sample data; nothing is sent.'; return; }
    var n = LMAIL && LMAIL.people ? LMAIL.people.length : 0;
    if (mode === 'all' && b.getAttribute('data-sure') !== '1') { b.setAttribute('data-sure', '1'); b.textContent = 'Yes, send to ' + A.plural(n, 'learner', 'learners'); msg.textContent = 'Press again to send. Each gets it in their language, with the times in their own time zone, and a note in their dashboard.'; return; }
    b.disabled = true; msg.textContent = mode === 'test' ? 'Sending you one of each…' : 'Sending…';
    var call = mode === 'test' ? window.AlimunData.adminLaunchEmail('test') : window.AlimunData.adminLaunchEmail('send', n, undefined, { all: true });
    call.then(function (r) {
      if (mode === 'test') { msg.textContent = 'Test emails sent to you: ' + (r.tests || []).map(function (x) { return x.lang + (x.beginner ? '' : ' (B1 and above)') + (x.ok ? '' : ' failed'); }).join(', ') + '.'; b.disabled = false; return; }
      return Promise.all([window.AlimunData.adminLaunchEmail('preview'), window.AlimunData.adminLaunchEmail('report')]).then(function (x) { LMAIL = Object.assign(x[0], { sent: r.sent, failed: r.failed }); LREP = x[1]; draw(); });
    }).catch(function (e) {
      b.disabled = false; b.removeAttribute('data-sure');
      var why = e && e.body && e.body.error;
      msg.textContent = why === 'count_changed' ? 'Someone new joined the list meanwhile; it was refreshed, please press again.' : 'That did not work: ' + (why || (e && e.message) || 'please try again') + '.';
      if (why === 'count_changed') window.AlimunData.adminLaunchEmail('preview').then(function (p) { LMAIL = p; draw(); });
    });
  }
  function setAuto(input) {
    var on = input.checked, msg = root.querySelector('[data-mx-mailmsg]');
    if (!real()) { input.checked = !on; msg.textContent = 'This is sample data; nothing is switched.'; return; }
    input.disabled = true;
    window.AlimunData.adminLaunchEmail('auto-set', undefined, undefined, { on: on }).then(function (r) { LAUTO = !!r.auto; draw(); var m = root.querySelector('[data-mx-mailmsg]'); if (m) m.textContent = LAUTO ? 'Switched on.' : 'Switched off.'; },
      function (e) { input.disabled = false; input.checked = !on; msg.textContent = 'That did not work: ' + ((e && e.message) || 'please try again') + '.'; });
  }

  /* ---------- Rooms already planned (better view of the classes) ---------- */
  function roomsCard() {
    var rooms = (RAW.rooms || []).filter(function (r) { return !S.lang || r.language === S.lang; }).sort(function (a, b) { return String(a.starts_on).localeCompare(String(b.starts_on)); });
    var html = '<section class="card span-12" aria-labelledby="h-rooms"><div class="panel-h"><h2 class="t-h2" id="h-rooms">Rooms planned and running</h2><a href="#/classes/rooms">All rooms</a></div>';
    if (!rooms.length) return html + '<p class="t-small">No ' + esc(S.lang) + ' room yet. Create one from a group below.</p></section>';
    html += '<div class="rm-grid">' + rooms.map(function (r) {
      var days = (r.schedule_days || []).map(function (d) { return String(d).slice(0, 3); }).join(', ');
      var starts = r.starts_on ? Date.parse(r.starts_on + 'T12:00:00Z') : null, pub = starts ? starts - 21 * DAY : null;
      var next = r.room_state === 'draft' ? (pub && pub > Date.now() ? 'Goes on sale ' + dayFmt(new Date(pub).toISOString().slice(0, 10)) : 'Goes on sale once it has a teacher and a substitute')
        : r.room_state === 'published' ? (r.seats >= r.min ? 'Has its minimum: opens ' + (starts ? dayFmt(r.starts_on) : '') : 'Needs ' + (r.min - r.seats) + ' more' + (starts && starts - 10 * DAY > Date.now() ? ' by ' + dayFmt(new Date(starts - 10 * DAY).toISOString().slice(0, 10)) : starts ? ', starts ' + dayFmt(r.starts_on) : ''))
        : r.room_state === 'open' ? 'Starts ' + (starts ? dayFmt(r.starts_on) : '') : 'Running since ' + (starts ? dayFmt(r.starts_on) : '');
      return '<a class="rm" href="#/classes/' + esc(r.id) + '"><span class="rm__h"><b>' + esc((PRODUCT_NAME[r.product_key] || r.product_key) + ', ' + (r.level || '')) + '</b><span class="nw"><span class="dot' + (r.room_state === 'running' || r.room_state === 'open' ? '' : r.room_state === 'published' ? ' dot--warn' : ' dot--off') + '"></span>' + esc(ROOM_STATE[r.room_state] || r.room_state) + '</span></span>' +
        '<span class="rm__w">' + esc(days + ' at ' + String(r.schedule_time || '').slice(0, 5) + ', ' + city(r.timezone) + ' time') + '</span>' +
        meter(r.seats || 0, r.min || 0, r.max || 12) + '<span class="rm__n">' + esc((r.seats || 0) + ' of ' + (r.min || 0) + ' needed, room for ' + (r.max || 0) + '. ' + next + '.') + '</span></a>';
    }).join('') + '</div></section>';
    return html;
  }

  /* ---------- The groups that could form ---------- */
  var TEACHERS = null;
  function teachers() {
    if (TEACHERS) return Promise.resolve(TEACHERS);
    if (!real()) return Promise.resolve(TEACHERS = [{ id: 't1', full_name: 'James Hall', languages: ['English'], status: 'approved' }, { id: 't2', full_name: 'Ana Weber', languages: ['English', 'German'], status: 'approved' }]);
    return window.AlimunData.adminTeachers().then(function (d) { TEACHERS = (d.teachers || []).filter(function (t) { return t.status === 'approved'; }); return TEACHERS; });
  }
  var OPEN_FORM = null, DONE = {};
  function groupCard(g, R) {
    var t = M.timesIn(g.slot, g.zone, R.now), n = g.members.length, i = g.i;
    var members = g.members.slice().sort(function (a, b) { return b.learner.ready.score - a.learner.ready.score; }).map(function (m) {
      var l = m.learner;
      return '<li><a href="#/matching/' + esc(l.id) + '"><span class="gm__n">' + esc(l.name) + (m.stretch ? ' <small>(' + esc(m.stretch === 'one level apart' ? l.level + ', one level apart' : 'exam learner') + ')</small>' : '') + '</span><span class="gm__t">' + esc(l.tz === g.zone ? '' : localTime(g, l, R) + ' ' + city(l.tz)) + '</span>' + readyBar(l) + '</a></li>';
    }).join('');
    var sure = g.sure === n ? 'Everyone gave their times' : g.sure ? g.sure + ' of ' + n + ' gave their times' : 'Times assumed for all';
    var done = DONE[i];
    var foot = done ? '<p class="mt-done" role="status">' + esc(done) + '</p>' :
      OPEN_FORM === i ? roomForm(g, t, R) :
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-mt-room="' + i + '">' + esc('Create the room and invite ' + (n === 1 ? 'them' : 'all ' + n)) + '</button></div>';
    return '<article class="gc' + (g.need ? '' : ' is-ready') + '" aria-labelledby="h-g' + i + '"><header><h3 class="t-h3" id="h-g' + i + '">' + esc(g.level + ' ' + M.KIND_NAME[g.kind]) + '</h3>' +
      '<p class="gc__w">' + esc(short(t.days) + ' at ' + t.time + ', ' + city(g.zone) + ' time') + '</p></header>' +
      meter(n, g.min, g.max) + '<p class="gc__s"><b>' + esc(g.need ? n + ' of ' + g.min + ': needs ' + g.need + ' more to open' : n + ' learners: enough to open') + '</b></p>' +
      '<ul class="gm">' + members + '</ul>' +
      '<p class="gc__m">' + esc('Match ' + g.cohesion + ' of 100. ' + sure + '. ' + (g.teacher ? (g.teacher.teacher || 'A teacher') + ' offered this time.' : 'No teacher has offered this time.')) + '</p>' + foot + '</article>';
  }
  function roomForm(g, t, R) {
    var list = (TEACHERS || []).filter(function (x) { return !(x.languages || []).length || (x.languages || []).indexOf(S.lang) > -1; });
    var to = function (cur) { return opt('', list.length ? 'Choose' : 'No approved ' + S.lang + ' teacher', cur) + list.map(function (x) { return opt(x.id, x.full_name, cur); }).join(''); };
    var start = M.startDate(g.kind, t.dayNums, R.now);
    return '<form class="gc__f" data-mt-create="' + g.i + '" onsubmit="return false">' +
      '<label class="st-field"><span class="st-lbl">Teacher</span><select class="st-in" name="teacher_id" required>' + to(g.teacher ? g.teacher.teacher_id : '') + '</select></label>' +
      '<label class="st-field"><span class="st-lbl">Substitute</span><select class="st-in" name="substitute_teacher_id" required>' + to('') + '</select></label>' +
      '<label class="st-field"><span class="st-lbl">Starts</span><input class="st-in" type="date" name="starts_on" value="' + esc(start) + '" required></label>' +
      '<p class="t-small gc__note">' + esc(short(t.days) + ' at ' + t.time + ' ' + city(g.zone) + ' time. The ' + A.plural(g.members.length, 'learner is', 'learners are') + ' put down as interested: when the room goes on sale (' + onSale(start) + ') each gets an email and a dashboard note by themselves, and the teacher gets the contract.') + '</p>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="submit" data-mt-go="' + g.i + '">Create the room</button><button class="btn btn--quiet btn--sm" type="button" data-mt-cancel>Cancel</button></div>' +
      '<p class="t-small st-msg" data-mt-msg="' + g.i + '" aria-live="polite"></p></form>';
  }
  function groupsBoard(R) {
    var html = '<section class="span-12" aria-labelledby="h-groups"><div class="panel-h mt-sec"><h2 class="t-h2" id="h-groups">Groups that could form</h2><span class="t-small">One level and one product at the time that suits most of them; closest to opening first</span></div>';
    if (!R.groups.length) return html + '<div class="card"><p class="t-small">No two ' + esc(S.lang) + ' learners at the same level share a class time yet.</p></div></section>';
    return html + '<div class="gc-grid">' + R.groups.map(function (g) { return groupCard(g, R); }).join('') + '</div></section>';
  }
  function createRoom(form) {
    var i = +form.getAttribute('data-mt-create'), g = R.groups[i], msg = form.querySelector('[data-mt-msg="' + i + '"]');
    if (!g) return;
    var f = new FormData(form), t = M.timesIn(g.slot, g.zone, R.now);
    if (!f.get('teacher_id')) { msg.textContent = 'Choose the teacher.'; return; }
    /* The room job puts a room on sale only with a teacher and a substitute; without one the learners would never be told */
    if (!f.get('substitute_teacher_id')) { msg.textContent = 'Choose a substitute too: the room goes on sale only with both.'; return; }
    if (f.get('substitute_teacher_id') === f.get('teacher_id')) { msg.textContent = 'The substitute is another teacher.'; return; }
    var body = { product_key: g.productKey, language: S.lang, level: g.level, teacher_id: f.get('teacher_id'), substitute_teacher_id: f.get('substitute_teacher_id') || undefined,
      starts_on: f.get('starts_on'), schedule_days: t.days, schedule_time: t.time, timezone: g.zone, invite: g.members.map(function (m) { return m.learner.userId; }).filter(Boolean) };
    var btn = form.querySelector('[data-mt-go]'); btn.disabled = true; msg.textContent = 'Creating the room…';
    var pub = onSale(body.starts_on);
    var after = function (r) {
      DONE[i] = 'Room created with ' + A.plural(r.sessions || 0, 'class date', 'class dates') + '. ' + A.plural(r.invited != null ? r.invited : g.members.length, 'learner is', 'learners are') +
        ' invited: they are told by email and in their dashboard when it goes on sale, ' + pub + '.';
      OPEN_FORM = null;
      if (real()) window.AlimunData.adminMatching().then(function (d) { RAW = d; draw(); }, draw); else draw();
    };
    if (!real()) { setTimeout(function () { after({ sessions: 36, invited: g.members.length }); }, 500); return; }
    window.AlimunData.adminRoom(body).then(after, function (e) {
      btn.disabled = false;
      var why = e && e.body && (e.body.error || e.body.code);
      msg.textContent = { teacher_required: 'Choose the teacher.', teacher_not_approved: 'That teacher is not approved.', bad_start: 'The start date is in the past.', no_sessions: 'No class dates fall on those days.', bad_product: 'There is no product for this group yet.' }[why] || 'That did not work: ' + (why || (e && e.message) || 'please try again') + '.';
    });
  }

  /* ---------- Who is not in a group, who is closest to buying ---------- */
  function sideTables(R) {
    var un = R.unplaced.slice(0, 12), ready = R.pool.slice().sort(function (a, b) { return b.ready.score - a.ready.score; }).slice(0, 10);
    return '<section class="card span-6" aria-labelledby="h-un"><div class="panel-h"><h2 class="t-h2" id="h-un">Not in a group yet</h2><span class="t-small">' + esc(R.unplaced.length + ' learners') + '</span></div>' +
      (un.length ? '<div class="dt-wrap"><table class="dt"><thead><tr><th>Learner</th><th>Why</th></tr></thead><tbody>' + un.map(function (u) {
        var l = u.learner;
        return '<tr data-href="#/matching/' + esc(l.id) + '"><td><a href="#/matching/' + esc(l.id) + '">' + esc(l.name) + '</a><div class="m">' + esc((l.level || '') + ', ' + city(l.tz)) + '</div></td><td class="m">' + esc(A.cap(u.reason)) + '</td></tr>';
      }).join('') + '</tbody></table></div>' : '<p class="t-small">Everyone is in a group.</p>') + '</section>' +
      '<section class="card span-6" aria-labelledby="h-ready"><div class="panel-h"><h2 class="t-h2" id="h-ready">Closest to buying</h2><span class="t-small">From visits, the tutor, exercises, the poll, deadlines and prices looked at</span></div>' +
      '<div class="dt-wrap"><table class="dt"><thead><tr><th>Learner</th><th>Readiness</th><th>Why</th></tr></thead><tbody>' + ready.map(function (l) {
        return '<tr data-href="#/matching/' + esc(l.id) + '"><td><a href="#/matching/' + esc(l.id) + '">' + esc(l.name) + '</a><div class="m">' + esc(l.level || '') + '</div></td><td>' + readyBar(l) + '</td><td class="m">' + esc(A.cap(l.ready.why.slice(0, 3).join(', ') || 'nothing yet')) + '</td></tr>';
      }).join('') + '</tbody></table></div></section>';
  }

  /* ---------- When they can learn (folded) ---------- */
  function heatCard(R) {
    var list = R.pool.filter(function (l) { return !S.level || l.level === S.level; });
    var grid = M.heat(list, S.tz, R.now), max = 1;
    grid.forEach(function (row) { row.forEach(function (c) { if (c.length > max) max = c.length; }); });
    var hours = []; for (var h = 6; h <= 23; h++) hours.push(h);
    var order = [1, 2, 3, 4, 5, 6, 0];
    var levels = M.LEVELS.filter(function (lv) { return R.summary.levels[lv]; });
    var table = '<table><caption class="mx-sr">' + esc('Learners who can start a class at each hour, ' + city(S.tz) + ' time') + '</caption><thead><tr><th scope="col"></th>' +
      hours.map(function (h) { return '<th scope="col">' + String(h).padStart(2, '0') + '</th>'; }).join('') + '</tr></thead><tbody>' +
      order.map(function (d) {
        return '<tr><th scope="row">' + esc(M.WEEK[d].slice(0, 3)) + '</th>' + hours.map(function (h) {
          var who = grid[d][h], a = who.length / max;
          return '<td style="background:' + (who.length ? 'rgba(206,255,101,' + (0.25 + 0.75 * a).toFixed(2) + ')' : 'transparent') + '" title="' +
            esc(M.WEEK[d] + ' ' + String(h).padStart(2, '0') + ':00: ' + (who.length ? who.map(function (l) { return l.name; }).join(', ') : 'nobody')) + '">' + (who.length || '') + '</td>';
        }).join('') + '</tr>';
      }).join('') + '</tbody></table>';
    return '<details class="card span-12 mt-fold"' + (S.heatOpen ? ' open' : '') + ' data-mt-heat><summary><h2 class="t-h2">When they can start a class</h2><span class="t-small">' + esc('Learners free at each hour, ' + city(S.tz) + ' time') + '</span></summary>' +
      '<div class="mt-heat-tools"><label class="mt-tool"><span>Level</span><select class="st-in" data-mt="level">' + opt('', 'All levels', S.level) + levels.map(function (lv) { return opt(lv, lv, S.level); }).join('') + '</select></label>' +
      '<p class="t-small">Hover a number to see who. Learners who gave no times count on weekday evenings and weekend mornings in their own time zone.</p></div>' +
      '<div class="mx-heat">' + table + '</div></details>';
  }

  /* ---------- Every learner ---------- */
  function everyoneRows(R) {
    var q = S.q.trim().toLowerCase();
    var list = R.all.filter(function (l) {
      if (!S.tests && l.test) return false;
      return (!q || (l.name + ' ' + l.email + ' ' + (l.tz || '') + ' ' + (l.country || '')).toLowerCase().indexOf(q) > -1) && (!S.flevel || l.level === S.flevel) && (!S.fgoal || l.goal === S.fgoal);
    });
    var by = { ready: function (a, b) { return b.ready.score - a.ready.score; }, name: function (a, b) { return a.name.localeCompare(b.name); }, level: function (a, b) { return String(a.level).localeCompare(String(b.level)) || b.ready.score - a.ready.score; },
      recent: function (a, b) { return String(b.last_active || '').localeCompare(String(a.last_active || '')); } }[S.sort];
    list.sort(by);
    if (!list.length) return '<p class="t-small" style="margin-top:8px">Nobody matches.</p>';
    var th = function (k, label, cls) { return '<th' + (cls ? ' class="' + cls + '"' : '') + '><button type="button" class="th-s" data-mt-sort="' + k + '"' + (S.sort === k ? ' aria-pressed="true"' : '') + '>' + esc(label) + '</button></th>'; };
    return '<div class="dt-wrap"><table class="dt"><thead><tr>' + th('name', 'Learner') + th('level', 'Level') + '<th>Focus</th><th>Lives in</th><th>Times</th>' + th('ready', 'Readiness') + '<th>Group</th>' + th('recent', 'Last active', 'r') + '</tr></thead><tbody>' +
      list.map(function (l) {
        var g = R.inGroup[l.id], out = R.pool.indexOf(l) < 0;
        var where = g ? g.level + ' ' + M.KIND_NAME[g.kind] + (g.need ? ', needs ' + g.need : ', can open') : out ? (l.test ? 'Your test account' : l.staff ? 'Staff account' : l.inRoom ? 'In a class' : !l.level ? 'No level' : 'Sign-up not finished') : A.cap(R.why[l.id] || 'not in a group');
        var odd = l.country && l.tz && zoneCountryOdd(l);
        return '<tr><td><a href="#/matching/' + esc(l.id) + '">' + esc(l.name) + '</a>' + (l.test ? ' <span class="m">(test)</span>' : '') + '<div class="m">' + esc(l.email) + '</div></td>' +
          '<td>' + esc(l.level || '') + (l.tested ? '' : ' <span class="m" title="Chosen by them, no level test">(own)</span>') + '</td><td class="m">' + esc(goal(l.goal)) + '</td>' +
          '<td class="nw"><button type="button" class="tz-b' + (odd ? ' is-odd' : '') + '" data-mt-tz="' + esc(l.id) + '" title="' + esc((l.tz || 'Not known') + (odd ? '. Does not match their country, ' + countryName(l.country) : '') + '. Click to correct') + '">' + esc(city(l.tz)) + (l.tz ? ' <span class="m">' + esc(nowIn(l.tz)) + '</span>' : '') + '</button>' + (l.country ? '<div class="m">' + esc(countryName(l.country)) + '</div>' : '') + '</td>' +
          '<td class="m">' + esc(TIMES_SHORT[l.times] || '') + '</td><td>' + readyBar(l) + '</td><td class="m">' + esc(where) + '</td><td class="r m">' + esc(l.last_active ? A.relative(new Date(l.last_active).getTime() - Date.now()) : 'Never') + '</td></tr>';
      }).join('') + '</tbody></table></div>';
  }
  /* A learner whose time zone is far from their country's (a phone set to another zone): flagged for a look */
  var COUNTRY_REGION = { TR: 'Europe', FR: 'Europe', DE: 'Europe', ES: 'Europe', IT: 'Europe', PT: 'Europe', GB: 'Europe', UA: 'Europe', PL: 'Europe', NL: 'Europe', BE: 'Europe', CH: 'Europe', AT: 'Europe', MA: 'Africa', DZ: 'Africa', TN: 'Africa', EG: 'Africa', SO: 'Africa', NG: 'Africa',
    US: 'Americas', CA: 'Americas', MX: 'Americas', BR: 'Americas', PE: 'Americas', CO: 'Americas', AR: 'Americas', CN: 'Asia', TW: 'Asia', JP: 'Asia', KR: 'Asia', IN: 'Asia', PK: 'Asia', IR: 'Asia', AE: 'Asia', SA: 'Asia' };
  function zoneCountryOdd(l) { var want = COUNTRY_REGION[l.country]; return !!(want && l.region && l.region !== 'Unknown' && want !== l.region); }
  function everyoneCard(R) {
    var goals = Object.keys(M.GOALS);
    return '<section class="card span-12" aria-labelledby="h-all"><div class="panel-h"><h2 class="t-h2" id="h-all">Every ' + esc(S.lang) + ' learner</h2><span class="t-small">Click a time zone to correct it; zones that do not match the country are marked</span></div>' +
      '<div class="ad-filters" style="margin-top:6px"><input class="st-in" type="search" data-mt="q" value="' + esc(S.q) + '" placeholder="Search by name, email, country or time zone" aria-label="Search">' +
      '<select class="st-in" data-mt="flevel" aria-label="Level">' + opt('', 'Every level', S.flevel) + M.LEVELS.map(function (lv) { return opt(lv, lv, S.flevel); }).join('') + '</select>' +
      '<select class="st-in" data-mt="fgoal" aria-label="Focus">' + opt('', 'Every focus', S.fgoal) + goals.map(function (k) { return opt(k, M.GOALS[k], S.fgoal); }).join('') + '</select></div>' +
      '<div data-mt-rows>' + everyoneRows(R) + '</div></section>';
  }
  function fixZone(btn) {
    var id = btn.getAttribute('data-mt-tz'), l = R.byId[id]; if (!l) return;
    var zones = ZONES.slice(); (RAW.learners || []).forEach(function (x) { if (x.timezone && zones.indexOf(x.timezone) < 0 && M.validZone(x.timezone) && x.timezone !== 'UTC') zones.push(x.timezone); });
    zones.sort();
    var cell = btn.parentNode;
    cell.innerHTML = '<select class="st-in tz-sel" data-mt-tzsel="' + esc(id) + '" aria-label="' + esc('Time zone of ' + l.name) + '">' + opt('', 'Choose', l.tzSet || '') + zones.map(function (z) { return opt(z, z.replace(/_/g, ' '), l.tzSet || ''); }).join('') + '</select><span class="t-small st-msg" data-mt-tzmsg></span>';
    cell.querySelector('select').focus();
  }
  function saveZone(sel) {
    var id = sel.getAttribute('data-mt-tzsel'), tz = sel.value, msg = sel.parentNode.querySelector('[data-mt-tzmsg]');
    if (!tz) return;
    var apply = function () { (RAW.learners || []).forEach(function (x) { if (x.id === id) x.timezone = tz; }); draw(); };
    if (!real()) { apply(); return; }
    sel.disabled = true; msg.textContent = ' Saving…';
    window.AlimunData.adminSave('student_profiles', id, { timezone: tz }).then(apply, function (e) { sel.disabled = false; msg.textContent = ' Not saved: ' + ((e && e.message) || 'try again'); });
  }

  function mainView(R) {
    return headView(R) + figures(R) + '<div class="grid rise" style="margin-top:16px">' + launchCard() + roomsCard() + groupsBoard(R) + sideTables(R) + heatCard(R) + everyoneCard(R) +
      (real() ? '' : '<p class="t-tiny span-12">This is sample data; nothing is saved or sent.</p>') + '</div>';
  }

  /* ---------- One learner ---------- */
  function learnerView(R, id) {
    var l = R.byId[id];
    var back = '<a class="rd-back" href="#/matching">' + A.icon('back') + '<span>Matching</span></a>';
    if (!l) return back + '<div class="card"><p class="t-body">This learner is not among the ' + esc(S.lang) + ' learners. Change the language on the Matching page.</p></div>';
    var p = l.poll || {};
    var facts = [
      ['Level', l.level ? l.level + (l.tested ? ', from the level test' : ', chosen by them (no level test)') : 'Not known'],
      ['Focus', goal(l.goal) + (l.timeframe ? ', ' + (TF[l.timeframe] || l.timeframe) : '')],
      ['Lives in', (l.tz ? city(l.tz) + ' (' + l.tz + '), now ' + nowIn(l.tz) : 'Time zone not known') + (l.country ? ', ' + countryName(l.country) : '')],
      ['Class times', A.cap(TIMES[l.times] || '')],
      ['Best product', A.cap(M.KIND_NAME[l.kind])],
      ['Readiness', l.ready.score + ' of 100, ' + STAGE[l.ready.stage].toLowerCase() + (l.ready.why.length ? ': ' + l.ready.why.join(', ') : '')],
      ['Welcome poll', l.poll ? A.cap([p.prefer ? 'would like ' + joinAnd(p.prefer.map(function (x) { return PREFER[x] || x; })) : '', WEEKLY[p.time] || '', TEACHER[p.teacher] || '', EXPLAIN[p.explain] || ''].filter(Boolean).join('; ')) : 'Not answered'],
      ['Email', (l.email || '') + (l.news ? ', said yes to news and offers' : ', has not said yes to news and offers')]
    ];
    var g = R.inGroup[l.id];
    var matches = M.bestMatches(l, R.pool, 10);
    return back + '<div class="view__head"><div><h1 class="t-h1">' + esc(l.name) + '</h1><p class="t-lead">' + esc(g ? 'In the ' + S.lang + ' ' + g.level + ' ' + M.KIND_NAME[g.kind] + ' group: ' + localTime(g, l, R) + ' their time.' : 'Not in a group yet' + (R.why[l.id] ? ': ' + R.why[l.id] : '') + '.') + '</p></div>' +
      '<div class="btn-row"><a class="btn btn--ghost btn--sm" href="#/students/' + esc(l.id) + '">Open their student file</a></div></div>' +
      '<div class="grid rise"><section class="card span-5"><h2 class="t-h2">What we know</h2><div class="dt-wrap"><table class="dt"><tbody>' + facts.map(function (f) {
        return '<tr><td class="m nw">' + esc(f[0]) + '</td><td>' + esc(f[1]) + '</td></tr>';
      }).join('') + '</tbody></table></div></section>' +
      '<section class="card span-7"><div class="panel-h"><h2 class="t-h2">Best matches</h2><span class="t-small">Level 30, shared times 35, focus 20, way of learning 15</span></div>' +
      (matches.length ? '<div class="dt-wrap"><table class="dt"><thead><tr><th>Learner</th><th class="r">Match</th><th>Why</th></tr></thead><tbody>' + matches.map(function (x) {
        return '<tr data-href="#/matching/' + esc(x.learner.id) + '"><td><a href="#/matching/' + esc(x.learner.id) + '">' + esc(x.learner.name) + '</a><div class="m">' + esc((x.learner.level || '') + ', ' + city(x.learner.tz)) + '</div></td><td class="r"><b>' + x.match.score + '</b></td><td class="m">' + esc(A.cap(x.match.why.join(', '))) + '</td></tr>';
      }).join('') + '</tbody></table></div>' : '<p class="t-small">Nobody else yet.</p>') + '</section></div>';
  }

  /* ---------- Events ---------- */
  var R = null;
  function bind() {
    if (root.__amatch) return;
    root.__amatch = true;
    root.addEventListener('change', function (e) {
      var k = e.target.getAttribute('data-mt');
      if (e.target.hasAttribute('data-mx-auto')) { setAuto(e.target); return; }
      if (e.target.hasAttribute('data-mt-tzsel')) { saveZone(e.target); return; }
      if (!k || !RAW || k === 'q') return;
      if (k === 'incomplete' || k === 'staff' || k === 'tests') S[k] = e.target.checked;
      else S[k] = e.target.value;
      if (k === 'flevel' || k === 'fgoal') { var b = root.querySelector('[data-mt-rows]'); if (b) b.innerHTML = everyoneRows(R); return; }
      if (k === 'lang') { S.level = ''; OPEN_FORM = null; DONE = {}; }
      if (k === 'level') S.heatOpen = true;
      draw();
    });
    root.addEventListener('toggle', function (e) { if (e.target.hasAttribute && e.target.hasAttribute('data-mt-heat')) S.heatOpen = e.target.open; }, true);
    root.addEventListener('input', function (e) {
      if (e.target.getAttribute('data-mt') !== 'q' || !R) return;
      S.q = e.target.value;
      var b = root.querySelector('[data-mt-rows]'); if (b) b.innerHTML = everyoneRows(R);
    });
    root.addEventListener('submit', function (e) { var f = e.target.closest('[data-mt-create]'); if (f) { e.preventDefault(); createRoom(f); } });
    root.addEventListener('click', function (e) {
      var lm = e.target.closest('[data-mx-mail]');
      if (lm && !lm.disabled) { launchMail(lm); return; }
      var srt = e.target.closest('[data-mt-sort]');
      if (srt) { S.sort = srt.getAttribute('data-mt-sort'); var b = root.querySelector('[data-mt-rows]'); if (b) b.innerHTML = everyoneRows(R); return; }
      var tz = e.target.closest('[data-mt-tz]');
      if (tz) { fixZone(tz); return; }
      if (e.target.closest('[data-mt-cancel]')) { OPEN_FORM = null; draw(); return; }
      var rm = e.target.closest('[data-mt-room]');
      if (rm && R) {
        var i = +rm.getAttribute('data-mt-room'); rm.disabled = true;
        teachers().then(function () { OPEN_FORM = i; draw(); var f = root.querySelector('[data-mt-create="' + i + '"] select'); if (f) f.focus(); }, function () { OPEN_FORM = i; TEACHERS = []; draw(); });
      }
    });
  }
  var parts0 = null;
  function draw() {
    R = compute();
    if (!S.tz) S.tz = zonesOf(R)[0] || MY_TZ;
    var y = window.scrollY;
    root.innerHTML = parts0 ? learnerView(R, parts0) : mainView(R);
    if (!parts0) window.scrollTo(0, y);
  }
  var no = 0;
  function mount(view, parts, helpers) {
    var my = ++no;
    A = helpers; root = view; parts0 = parts[0] || null;
    bind();
    if (!window.AlimunMatch) { root.innerHTML = '<div class="card"><p class="t-body">The matching engine did not load. Please reload the page.</p></div>'; return Promise.resolve({ stale: true }); }
    var get = RAW && real() && parts0 ? Promise.resolve(RAW) : real() ? window.AlimunData.adminMatching() : Promise.resolve(sample());
    if (real() && !parts0 && window.AlimunData.launchInfo) get = Promise.all([get, window.AlimunData.launchInfo().catch(function () { return null; }),
      window.AlimunData.adminLaunchEmail('report').catch(function () { return null; }), window.AlimunData.adminLaunchEmail('preview').catch(function () { return null; }),
      window.AlimunData.adminLaunchEmail('auto-get').catch(function () { return null; })]).then(function (r) { LAUNCH = r[1]; LREP = r[2]; LMAIL = r[3]; LAUTO = r[4] ? !!r[4].auto : null; return r[0]; });
    if (!real()) { LAUTO = false; LMAIL = { people: [] }; }
    if (!RAW || !parts0) root.innerHTML = loading();
    return get.then(function (d) {
      if (my !== no) return { stale: true };
      RAW = d;
      if (!S.tz) { var c = {}; (d.learners || []).forEach(function (l) { if (l.language === S.lang && !l.test && l.timezone && l.timezone !== 'UTC') c[l.timezone] = (c[l.timezone] || 0) + 1; }); S.tz = Object.keys(c).sort(function (a, b) { return c[b] - c[a]; })[0] || MY_TZ; }
      draw();
      return { title: parts0 && R.byId[parts0] ? R.byId[parts0].name : 'Matching' };
    }, function (e) {
      if (my === no) root.innerHTML = '<div class="card"><p class="t-body">Matching did not load: ' + esc((e && e.message) || 'please try again') + '.</p></div>';
      return { stale: true };
    });
  }
  window.AlimunAdminMatching = { mount: mount, reset: function () { OPEN_FORM = null; } };
})();
