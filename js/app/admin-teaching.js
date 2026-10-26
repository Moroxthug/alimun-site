/* Alimun admin, part 3: waiting list and messages (docs/DASHBOARD_PLAN.md, step 15, admin pages). English only.
   #/waiting                  who waits for which class, grouped by class, longest wait first; the places offered and
                              when they run out; offering a place by hand when the class has a free seat
                              (/api/admin/teacher waitlist-offer: 48 hours, the same email as the automatic offer);
                              taking someone off the list
   #/messages[/list/<which>]  every conversation, class and private, newest first
   #/messages/<thread id>     a conversation with its hidden messages marked; hiding a message and showing it again.
                              The admin reads and hides only (owner, 26 Oct 2026); the writer is not told. */
(function () {
  'use strict';
  var A = null, root = null, WL = null, TH = null, CONV = null, FLASH = '';
  var DAY = 86400000, HOUR = 3600000;
  var PLANS = { free: 'Free', community: 'Community', focused: 'Focused', intensive: 'Intensive', private: '1 on 1', onetoone: '1 on 1 (old)', daily: 'Daily', waitlist: 'Waiting list', founding_member: 'Founding member' };
  var STATUS = { open: 'open', full: 'full', closed: 'closed to new students', completed: 'finished' };

  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real'; }
  function back(href, label) { return '<a class="rd-back" href="' + href + '">' + A.icon('back') + '<span>' + esc(label) + '</span></a>'; }
  function loading() { return '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="Loading">' + A.loaderInner() + '</div></div>'; }
  function sampleLine() { return real() ? '' : '<p class="t-tiny span-12">This is sample data; nothing here is saved or sent.</p>'; }
  function flash() { var f = FLASH; FLASH = ''; return f ? '<p class="t-body st-msg ad-flash" role="status">' + esc(f) + '</p>' : ''; }
  function say(el, text, bad) { if (el) { el.textContent = text; el.classList.toggle('is-bad', !!bad); } }
  function errText(e) { return (e && e.message) || 'please try again'; }
  function ago(t) { return A.relative(new Date(t).getTime() - Date.now()); }
  function teacherOf(c) { return c && c.teacher_profiles && c.teacher_profiles.full_name || 'No teacher'; }
  function timetable(c) { var d = c.schedule_days || []; return d.length ? (d.length < 2 ? d[0] : d.slice(0, -1).join(', ') + ' and ' + d[d.length - 1]) + ' at ' + String(c.schedule_time || '').slice(0, 5) + ' (' + c.timezone + ')' : ''; }
  function liveOffer(w) { return !!(w.offer_expires_at && new Date(w.offer_expires_at).getTime() > Date.now()); }

  /* ---------- Sample ---------- */
  function sampleWaitlist() {
    var now = Date.now(), t = function (h) { return new Date(now + h * HOUR).toISOString(); };
    var c2 = { id: 'c2', language: 'English', level: 'B2', tier: 'focused', status: 'full', enrolled_count: 16, max_students: 17, schedule_days: ['Monday', 'Wednesday'], schedule_time: '19:00', timezone: 'Europe/London', teacher_profiles: { full_name: 'James Hall' } };
    var c3 = { id: 'c3', language: 'German', level: 'A2', tier: 'intensive', status: 'full', enrolled_count: 6, max_students: 6, schedule_days: ['Monday', 'Wednesday', 'Friday'], schedule_time: '09:00', timezone: 'Europe/Berlin', teacher_profiles: { full_name: 'Ana Weber' } };
    var c5 = { id: 'c5', language: 'Spanish', level: 'B1', tier: 'community', status: 'open', enrolled_count: 33, max_students: 35, schedule_days: ['Thursday'], schedule_time: '20:00', timezone: 'Europe/Madrid', teacher_profiles: { full_name: 'Lucía Gómez' } };
    var st = function (id, name, level, tier) { return { id: id, full_name: name, level: level, tier: tier, stripe_subscription_status: 'active' }; };
    return [
      { id: 'w1', cohort_id: 'c2', added_at: t(-24 * 12), offered_at: t(-18), offer_expires_at: t(30), student_profiles: st('sw1', 'Tariq Aziz', 'B2', 'focused'), cohorts: c2 },
      { id: 'w2', cohort_id: 'c2', added_at: t(-24 * 6), offered_at: null, offer_expires_at: null, student_profiles: st('sw2', 'Clara Vidal', 'B2', 'focused'), cohorts: c2 },
      { id: 'w4', cohort_id: 'c2', added_at: t(-24 * 2), offered_at: null, offer_expires_at: null, student_profiles: st('sw4', 'Yusuf Demir', 'B2', 'intensive'), cohorts: c2 },
      { id: 'w3', cohort_id: 'c3', added_at: t(-24 * 3), offered_at: null, offer_expires_at: null, student_profiles: st('sw3', 'Noah Fischer', 'A2', 'intensive'), cohorts: c3 },
      { id: 'w5', cohort_id: 'c5', added_at: t(-5), offered_at: null, offer_expires_at: null, student_profiles: st('sw5', 'Inés Duarte', 'B1', 'community'), cohorts: c5 }
    ];
  }
  function sampleThreads() {
    var now = Date.now(), t = function (m) { return new Date(now - m * 60000).toISOString(); };
    return [
      { id: 'm1', kind: 'class', cohort_id: 'c1', last_message_at: t(12), created_at: t(60 * 24 * 30), cohorts: { language: 'German', level: 'B1', tier: 'focused', teacher_profiles: { full_name: 'Ana Weber' } } },
      { id: 'm2', kind: 'direct', last_message_at: t(95), created_at: t(60 * 24 * 4), student_profiles: { full_name: 'Sara Rossi' }, teacher_profiles: { full_name: 'James Hall' } },
      { id: 'm3', kind: 'class', cohort_id: 'c2', last_message_at: t(60 * 26), created_at: t(60 * 24 * 40), cohorts: { language: 'English', level: 'B2', tier: 'focused', teacher_profiles: { full_name: 'James Hall' } } },
      { id: 'm4', kind: 'direct', last_message_at: null, created_at: t(60 * 24 * 2), student_profiles: { full_name: 'Mei Chen' }, teacher_profiles: { full_name: 'Ana Weber' } }
    ];
  }
  function sampleMessages(id) {
    var now = Date.now(), t = function (m) { return new Date(now - m * 60000).toISOString(); };
    var m = function (k, role, name, body, at, hidden) { return { id: id + '-' + k, sender_role: role, sender_name: name, body: body, created_at: t(at), hidden_at: hidden ? t(at - 5) : null }; };
    if (id === 'm1') return [
      m(1, 'teacher', 'Ana Weber', 'Guten Abend! Tomorrow we practise the conversation with the landlord. Bring one question you would ask.', 60 * 26),
      m(2, 'student', 'Lukas', 'Kann ich fragen, ob Haustiere erlaubt sind?', 60 * 25),
      m(3, 'student', 'Jonas', 'Buy cheap followers here: <a href="http://spam.example">click</a>', 60 * 20, true),
      m(4, 'teacher', 'Ana Weber', 'Perfekt, Lukas. Genau so.', 60 * 19),
      m(5, 'student', 'Mei', 'Bis morgen!\nI will be five minutes late.', 12)
    ];
    if (id === 'm2') return [
      m(1, 'student', 'Sara', 'Hello James, could I hand in the essay on Friday instead?', 60 * 3),
      m(2, 'teacher', 'James Hall', 'Of course. Friday evening is fine.', 95)
    ];
    if (id === 'm3') return [m(1, 'teacher', 'James Hall', 'The reading for Wednesday is in your Material.', 60 * 26)];
    return [];
  }

  /* ---------- Waiting list ---------- */
  var WF = { q: '' };
  function loadWaitlist() {
    if (WL) return Promise.resolve(WL);
    return (real() ? window.AlimunData.adminWaitlist() : Promise.resolve(sampleWaitlist())).then(function (d) { return (WL = d); });
  }
  function groups() {
    var by = {}, order = [];
    WL.forEach(function (w) {
      var c = w.cohorts || { id: w.cohort_id };
      if (!by[c.id]) { by[c.id] = { klass: c, people: [] }; order.push(c.id); }
      by[c.id].people.push(w);
    });
    return order.map(function (id) {
      var g = by[id], held = g.people.filter(liveOffer).length;
      g.held = held; g.free = Math.max(0, (g.klass.max_students || 0) - (g.klass.enrolled_count || 0) - held);
      g.open = g.klass.status === 'open' || g.klass.status === 'full';
      return g;
    });
  }
  function waitingView() {
    var gs = groups(), offers = WL.filter(liveOffer).length;
    return flash() + '<div class="view__head"><div><h1 class="t-h1">Waiting list</h1><p class="t-lead">' + esc(WL.length
      ? A.plural(WL.length, 'person', 'people') + ' waiting for ' + A.plural(gs.length, 'class', 'classes') + ', ' + A.plural(offers, 'place', 'places') + ' offered and not yet taken.'
      : 'Nobody is waiting for a class.') + '</p></div></div>' +
      '<div class="grid rise"><section class="card span-12" style="--i:0"><p class="t-body">When a seat frees up, the place is offered to whoever has waited longest, by email, for 48 hours. ' +
      'You can also offer a place yourself when a class has a free seat; the offer works the same way.</p>' +
      (WL.length > 8 ? '<div class="ad-filters" style="margin-top:14px"><input class="st-in" type="search" data-wf placeholder="Search by name, language or teacher" value="' + esc(WF.q) + '" aria-label="Search"></div>' : '') + '</section>' +
      '<div class="span-12" data-wrows>' + waitRowsHtml() + '</div>' + sampleLine() + '</div>';
  }
  function waitRowsHtml() {
    var q = WF.q.trim().toLowerCase(), now = Date.now();
    var gs = groups().map(function (g) {
      return { g: g, people: g.people.filter(function (w) { return !q || [w.student_profiles && w.student_profiles.full_name, g.klass.language, g.klass.level, teacherOf(g.klass)].join(' ').toLowerCase().indexOf(q) > -1; }) };
    }).filter(function (x) { return x.people.length; });
    if (!gs.length) return WL.length ? '<p class="t-body">Nobody matches.</p>' : '';
    return gs.map(function (x, i) {
      var g = x.g, c = g.klass;
      var state = !g.open ? 'The class is ' + (STATUS[c.status] || c.status) + ': reopen it to offer a place.'
        : g.free ? A.plural(g.free, 'seat', 'seats') + ' free to offer.' : 'No free seat' + (g.held ? ' beyond the ' + A.plural(g.held, 'place', 'places') + ' already offered' : '') + '. Add a seat or move a student in the class to offer one.';
      return '<section class="card" style="--i:' + (i + 1) + ';margin-top:' + (i ? '16px' : '0') + '"><div class="card__row" style="flex-wrap:wrap"><div style="flex:1;min-width:220px"><h2 class="t-h2">' + esc(A.className(c)) + '</h2>' +
        '<p class="t-small" style="margin-top:4px">' + esc([teacherOf(c), timetable(c), (c.enrolled_count || 0) + ' of ' + (c.max_students || 0) + ' seats taken'].filter(Boolean).join('. ') + '. ' + state) + '</p></div>' +
        '<a class="btn btn--ghost btn--sm" href="#/classes/' + esc(c.id) + '">The class</a></div>' +
        '<div class="tt-week">' + x.people.map(function (w) {
          var s = w.student_profiles || {}, live = liveOffer(w), can = g.open && g.free > 0 && !live;
          var bits = [s.level, PLANS[s.tier] || s.tier, 'waiting since ' + A.fmt(w.added_at, { day: 'numeric', month: 'short' }) + ' (' + ago(w.added_at) + ')',
            live ? 'place offered ' + ago(w.offered_at) + ', runs out ' + A.relative(new Date(w.offer_expires_at).getTime() - now) : ''].filter(Boolean);
          return '<div class="ad-item"><div class="tt-row ad-act"><span class="tt-row__time">' + esc(live ? 'Offered' : 'Waiting') + '</span><span><a class="linkish" href="#/students/' + esc(s.id) + '"><b>' + esc(s.full_name || 'Student') + '</b></a><small>' + esc(bits.join(', ')) + '</small></span>' +
            '<span class="btn-row ad-act__btns">' + (can ? '<button class="btn btn--primary btn--sm" type="button" data-askoffer="' + esc(w.id) + '">Offer the place</button>' : '') +
            '<button class="btn btn--quiet btn--sm" type="button" data-askdrop="' + esc(w.id) + '">Take off the list</button></span></div><div data-box="' + esc(w.id) + '"></div></div>';
        }).join('') + '</div></section>';
    }).join('');
  }
  function entry(id) { return WL.filter(function (w) { return w.id === id; })[0]; }
  function askBox(id, html) {
    root.querySelectorAll('[data-box]').forEach(function (b) { b.innerHTML = ''; });
    var box = root.querySelector('[data-box="' + id + '"]');
    if (box) { box.innerHTML = '<div class="card card--bone ad-confirm">' + html + '<p class="t-small st-msg" data-msg="box" aria-live="polite"></p></div>'; var f = box.querySelector('button'); if (f) f.focus(); }
  }
  function askOffer(id) {
    var w = entry(id), s = w.student_profiles || {};
    askBox(id, '<p class="t-body"><b>' + esc('Offer ' + (s.full_name || 'them') + ' a place in ' + A.className(w.cohorts || {}) + '?') + '</b></p><p class="t-small">They get the usual email with a link to take the place, and have 48 hours. After that it goes to the next person waiting.</p>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-dooffer="' + esc(id) + '">Offer the place</button><button class="btn btn--quiet btn--sm" type="button" data-cancel>Cancel</button></div>');
  }
  function askDrop(id) {
    var w = entry(id), s = w.student_profiles || {};
    askBox(id, '<p class="t-body"><b>' + esc('Take ' + (s.full_name || 'them') + ' off the waiting list for ' + A.className(w.cohorts || {}) + '?') + '</b></p><p class="t-small">' +
      esc((liveOffer(w) ? 'The place offered to them is withdrawn. ' : '') + 'They are not emailed; they can join the list again from their dashboard.') + '</p>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-dodrop="' + esc(id) + '">Take them off</button><button class="btn btn--quiet btn--sm" type="button" data-cancel>Cancel</button></div>');
  }
  function doOffer(btn) {
    var id = btn.getAttribute('data-dooffer'), w = entry(id), name = (w.student_profiles || {}).full_name || 'They', msg = btn.closest('.ad-confirm').querySelector('[data-msg]');
    if (!real()) { w.offered_at = new Date().toISOString(); w.offer_expires_at = new Date(Date.now() + 48 * HOUR).toISOString(); FLASH = name + ' was offered the place. (Sample: nothing was saved or sent.)'; A.rerender(); return; }
    btn.disabled = true; say(msg, 'Offering…');
    window.AlimunData.adminWaitlistOffer(id).then(function (r) {
      FLASH = name + ' was offered the place until ' + A.fmt(r.offer_expires_at, { weekday: 'long', hour: '2-digit', minute: '2-digit' }) + '.' +
        (r.emailConfigured === false ? ' No email was sent: email is not set up on the server, so tell them yourself.' : r.emailed ? ' They were emailed.' : ' The email could not be sent, so tell them yourself.');
      WL = null; A.rerender();
    }, function (e) { btn.disabled = false; say(msg, 'That did not work: ' + errText(e), true); });
  }
  function doDrop(btn) {
    var id = btn.getAttribute('data-dodrop'), w = entry(id), name = (w.student_profiles || {}).full_name || 'They', msg = btn.closest('.ad-confirm').querySelector('[data-msg]');
    if (!real()) { WL = WL.filter(function (x) { return x.id !== id; }); FLASH = name + ' was taken off the waiting list. (Sample: nothing was saved.)'; A.rerender(); return; }
    btn.disabled = true;
    window.AlimunData.adminWaitlistRemove(id).then(function () { FLASH = name + ' was taken off the waiting list.'; WL = null; A.rerender(); },
      function (e) { btn.disabled = false; say(msg, 'That did not work: ' + errText(e) + '.', true); });
  }

  /* ---------- Messages ---------- */
  var MF = { q: '' };
  function loadThreads() {
    if (TH) return Promise.resolve(TH);
    return (real() ? window.AlimunData.adminThreads() : Promise.resolve(sampleThreads())).then(function (d) { return (TH = d); });
  }
  function threadTitle(t) {
    if (t.kind === 'class') return A.className(t.cohorts || {}) + ', the class conversation';
    return ((t.student_profiles || {}).full_name || 'A student') + ' and ' + ((t.teacher_profiles || {}).full_name || 'their teacher');
  }
  function threadSub(t) {
    return [t.kind === 'class' ? teacherOf(t.cohorts) + ' and the class' : 'Private conversation', t.last_message_at ? 'last message ' + ago(t.last_message_at) : 'no messages yet'].join(', ');
  }
  function threadsView(which) {
    which = which === 'class' || which === 'direct' ? which : 'all';
    var n = { all: TH.length, class: 0, direct: 0 }; TH.forEach(function (t) { n[t.kind] = (n[t.kind] || 0) + 1; });
    var tab = function (k, label) { return '<a class="btn btn--' + (k === which ? 'primary' : 'quiet') + ' btn--sm" href="#/messages/list/' + k + '"' + (k === which ? ' aria-current="page"' : '') + '>' + esc(label + ' (' + n[k] + ')') + '</a>'; };
    return flash() + '<div class="view__head"><div><h1 class="t-h1">Messages</h1><p class="t-lead">Every conversation between students and teachers. Hiding a message removes it for everyone but the admins; you can show it again.</p></div></div>' +
      '<div class="grid rise"><section class="card span-12" style="--i:0"><div class="btn-row ad-tabs" role="navigation" aria-label="Which conversations">' + tab('all', 'All') + tab('class', 'Classes') + tab('direct', 'Private') + '</div>' +
      '<div class="ad-filters"><input class="st-in" type="search" data-mf placeholder="Search by class, student or teacher" value="' + esc(MF.q) + '" aria-label="Search"></div>' +
      '<div data-mrows data-which="' + which + '">' + threadRowsHtml(which) + '</div></section>' + sampleLine() + '</div>';
  }
  function threadRowsHtml(which) {
    var q = MF.q.trim().toLowerCase();
    var list = TH.filter(function (t) { return (which === 'all' || t.kind === which) && (!q || (threadTitle(t) + ' ' + threadSub(t)).toLowerCase().indexOf(q) > -1); });
    if (!list.length) return '<p class="t-body" style="margin-top:12px">' + esc(TH.length ? 'No conversation matches.' : 'No conversations yet.') + '</p>';
    return '<div class="tt-week">' + list.slice(0, 300).map(function (t) {
      return '<a class="tt-row tt-row--wide" href="#/messages/' + esc(t.id) + '"><span class="tt-row__time">' + esc(t.kind === 'class' ? 'Class' : 'Private') + '</span><span><b>' + esc(threadTitle(t)) + '</b><small>' + esc(threadSub(t)) + '</small></span></a>';
    }).join('') + '</div>' + (list.length > 300 ? '<p class="t-small">Showing the newest 300. Narrow the search to see the rest.</p>' : '');
  }
  function bodyHtml(text) { return esc(text).replace(/\n/g, '<br>'); }
  function convView(t, msgs) {
    var hidden = msgs.filter(function (m) { return m.hidden_at; }).length, last = '';
    var html = flash() + back('#/messages', 'Messages') + '<div class="view__head"><div><h1 class="t-h1">' + esc(threadTitle(t)) + '</h1><p class="t-lead">' +
      esc(A.plural(msgs.length, 'message', 'messages') + (hidden ? ', ' + hidden + ' hidden' : '') + '. ' + (t.kind === 'class' ? 'Teacher: ' + teacherOf(t.cohorts) + '.' : 'Private between the student and the teacher.')) + '</p></div>' +
      (t.kind === 'class' && t.cohort_id ? '<div class="btn-row"><a class="btn btn--ghost btn--sm" href="#/classes/' + esc(t.cohort_id) + '">The class</a></div>' : '') + '</div>';
    if (!msgs.length) return html + '<div class="card"><p class="t-body">No messages in this conversation yet.</p></div>' + sampleLine();
    html += '<section class="card ad-conv" aria-label="Messages"><div class="ms-msgs ad-msgs">' + msgs.map(function (m) {
      var d = A.fmt(m.created_at, { weekday: 'long', day: 'numeric', month: 'long' }), out = '';
      if (d !== last) { out += '<p class="ms-day">' + esc(A.cap(d)) + '</p>'; last = d; }
      var who = m.sender_role === 'admin' ? 'Alimun' : m.sender_name + (m.sender_role === 'teacher' ? ', teacher' : '');
      return out + '<div class="ms-msg' + (m.sender_role === 'teacher' ? ' is-teacher' : '') + (m.hidden_at ? ' is-hidden' : '') + '" data-mid="' + esc(m.id) + '"><p class="ms-msg__who">' + esc(who) + '</p>' +
        '<div class="ms-bub" dir="auto">' + bodyHtml(m.body) + '</div><p class="ms-msg__time">' + esc(A.fmt(m.created_at, { hour: '2-digit', minute: '2-digit' }) + (m.hidden_at ? '. Hidden ' + ago(m.hidden_at) + '; only admins see it' : '')) + '</p>' +
        '<p class="ad-hide"><button class="linkish" type="button" data-askhide="' + esc(m.id) + '">' + (m.hidden_at ? 'Show it again' : 'Hide') + '</button></p></div>';
    }).join('') + '</div></section>';
    return html + sampleLine();
  }
  function askHide(btn) {
    var id = btn.getAttribute('data-askhide'), m = CONV.msgs.filter(function (x) { return x.id === id; })[0], p = btn.parentNode;
    p.innerHTML = '<span class="t-small">' + esc(m.hidden_at ? 'Show it to everyone in the conversation again?' : 'Hide it from everyone but the admins?') + '</span> ' +
      '<button class="linkish" type="button" data-dohide="' + esc(id) + '">' + (m.hidden_at ? 'Yes, show it' : 'Yes, hide it') + '</button><button class="linkish" type="button" data-unask="' + esc(id) + '">Cancel</button><span class="t-small st-msg" aria-live="polite"></span>';
    p.querySelector('[data-dohide]').focus();
  }
  function doHide(btn) {
    var id = btn.getAttribute('data-dohide'), m = CONV.msgs.filter(function (x) { return x.id === id; })[0], hide = !m.hidden_at;
    var keep = window.scrollY, redraw = function () { root.innerHTML = convView(CONV.thread, CONV.msgs); window.scrollTo(0, keep); var el = root.querySelector('[data-mid="' + id + '"] button'); if (el) el.focus(); };
    if (!real()) { m.hidden_at = hide ? new Date().toISOString() : null; redraw(); return; }
    btn.disabled = true;
    window.AlimunData.adminHideMessage(id, hide).then(function (r) { m.hidden_at = r.hidden_at; redraw(); },
      function (e) { btn.disabled = false; say(btn.parentNode.querySelector('.st-msg'), 'That did not work: ' + errText(e) + '.', true); });
  }

  /* ---------- Events ---------- */
  function bind() {
    if (root.__ateaching) return;
    root.__ateaching = true;
    root.addEventListener('input', function (e) {
      var b;
      if (e.target.hasAttribute('data-wf') && WL) { WF.q = e.target.value; b = root.querySelector('[data-wrows]'); if (b) b.innerHTML = waitRowsHtml(); }
      if (e.target.hasAttribute('data-mf') && TH) { MF.q = e.target.value; b = root.querySelector('[data-mrows]'); if (b) b.innerHTML = threadRowsHtml(b.getAttribute('data-which')); }
    });
    root.addEventListener('click', function (e) {
      var b = e.target.closest('[data-askoffer],[data-askdrop],[data-dooffer],[data-dodrop],[data-askhide],[data-dohide],[data-unask],[data-cancel]');
      if (!b || b.disabled) return;
      if (b.hasAttribute('data-askoffer')) askOffer(b.getAttribute('data-askoffer'));
      else if (b.hasAttribute('data-askdrop')) askDrop(b.getAttribute('data-askdrop'));
      else if (b.hasAttribute('data-dooffer')) doOffer(b);
      else if (b.hasAttribute('data-dodrop')) doDrop(b);
      else if (b.hasAttribute('data-askhide')) askHide(b);
      else if (b.hasAttribute('data-dohide')) doHide(b);
      else if (b.hasAttribute('data-unask')) { var id = b.getAttribute('data-unask'), m = CONV.msgs.filter(function (x) { return x.id === id; })[0]; b.parentNode.innerHTML = '<button class="linkish" type="button" data-askhide="' + esc(id) + '">' + (m.hidden_at ? 'Show it again' : 'Hide') + '</button>'; }
      else if (b.hasAttribute('data-cancel')) b.closest('.ad-confirm').parentNode.innerHTML = '';
    });
  }

  function mounter(kind) {
    var no = 0;
    return function (view, parts, helpers) {
      var my = ++no;
      A = helpers; root = view; CONV = null;
      bind();
      root.innerHTML = loading();
      var p0 = parts[0], go;
      if (kind === 'waiting') { if (real()) WL = null; go = loadWaitlist().then(function () { return { html: waitingView(), title: 'Waiting list' }; }); }
      else if (p0 && p0 !== 'list') go = loadThreads().then(function () {
        var t = TH.filter(function (x) { return x.id === p0; })[0];
        if (!t) return { html: back('#/messages', 'Messages') + '<div class="card"><p class="t-body">This conversation could not be found.</p></div>' };
        return (real() ? window.AlimunData.adminThreadMessages(t.id) : Promise.resolve(sampleMessages(t.id))).then(function (msgs) { CONV = { thread: t, msgs: msgs }; return { html: convView(t, msgs), title: threadTitle(t) }; });
      });
      else { if (real()) TH = null; go = loadThreads().then(function () { return { html: threadsView(parts[1]), title: 'Messages' }; }); }
      return go.then(function (res) {
        if (my !== no) return { stale: true };
        root.innerHTML = res.html;
        return res;
      }).catch(function (e) {
        console.warn('[Alimun] Admin ' + kind + ' did not load', e && e.message);
        if (my === no) root.innerHTML = '<div class="card"><p class="t-body">This did not load: ' + esc(errText(e)) + '.</p></div>';
        return { stale: true };
      });
    };
  }
  window.AlimunAdminWaiting = { mount: mounter('waiting'), reset: function () {} };
  window.AlimunAdminMessages = { mount: mounter('messages'), reset: function () {} };
})();
