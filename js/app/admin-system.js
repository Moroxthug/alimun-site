/* Alimun admin, part 4: payouts, AI spend and the system (docs/DASHBOARD_PLAN.md, step 15, admin pages). English only.
   #/payouts[/list/<which>]   what each teacher has taught since their last payout; every payout, pending or paid;
                              marking one paid (optionally emailing the teacher), changing the amount of a pending one
                              or deleting it; a paid payout stays as it is
   #/payouts/new[/<teacher>]  record a payout: the classes and 1:1s in the period are counted from the database and
                              the admin types the amount (owner, 26 Oct 2026: no suggested amount)
   #/ai[/<days>]              AI spend over 7, 30 or 90 days from /api/ai?action=usage: totals, limits, by day,
                              by feature, by person, and the latest failures
   #/system                   reviews (delete), app settings (secret values never read into the browser, only
                              replaced), the automatic jobs' last week, and a link to the email signups */
(function () {
  'use strict';
  var A = null, root = null, PO = null, AI = null, SY = null, FLASH = '';
  var DAY = 86400000, MIN = 60000;
  var FEATURES = { grade: 'Exercise answers checked (closed)', 'homework-check': 'Homework checked before handing in', 'mark-mock': 'Mock tests marked', 'draft-homework': 'Homework tasks drafted', 'draft-set': 'Exercise sets drafted', 'generate-exercises': 'Exercises drafted', 'grade-submission': 'Homework marked', transcribe: 'Speaking transcribed', 'draft-feedback': 'Feedback drafted', 'draft-task': 'Homework tasks drafted' };

  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real'; }
  function eur(n) { return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'EUR' }).format(Number(n) || 0); }
  function usd(n, d) { return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol', minimumFractionDigits: d == null ? 2 : d, maximumFractionDigits: d == null ? 2 : d }).format(Number(n) || 0); }
  function ymd(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function dateOf(s) { var p = String(s).split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]); }
  function dayLabel(s) { return A.fmt(dateOf(s), { day: 'numeric', month: 'short', year: 'numeric' }); }
  function period(p) { return dayLabel(p.period_start) + ' to ' + dayLabel(p.period_end); }
  function opt(v, label, cur) { return '<option value="' + esc(v) + '"' + (String(v) === String(cur == null ? '' : cur) ? ' selected' : '') + '>' + esc(label) + '</option>'; }
  function field(label, control, hint) { return '<label class="st-field"><span class="st-lbl">' + esc(label) + '</span>' + control + (hint ? '<span class="t-small st-hint">' + esc(hint) + '</span>' : '') + '</label>'; }
  function back(href, label) { return '<a class="rd-back" href="' + href + '">' + A.icon('back') + '<span>' + esc(label) + '</span></a>'; }
  function loading() { return '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="Loading">' + A.loaderInner() + '</div></div>'; }
  function sampleLine() { return real() ? '' : '<p class="t-tiny span-12">This is sample data; nothing here is saved or sent.</p>'; }
  function flash() { var f = FLASH; FLASH = ''; return f ? '<p class="t-body st-msg ad-flash" role="status">' + esc(f) + '</p>' : ''; }
  function say(el, text, bad) { if (el) { el.textContent = text; el.classList.toggle('is-bad', !!bad); } }
  function errText(e) { return (e && e.message) || 'please try again'; }
  function askBox(id, html) {
    root.querySelectorAll('[data-box]').forEach(function (b) { b.innerHTML = ''; });
    var box = root.querySelector('[data-box="' + id + '"]');
    if (box) { box.innerHTML = '<div class="card card--bone ad-confirm">' + html + '<p class="t-small st-msg" data-msg="box" aria-live="polite"></p></div>'; var f = box.querySelector('input, button'); if (f) f.focus(); }
  }

  /* ---------- Sample ---------- */
  function samplePayouts() {
    var now = new Date(), m = function (back, d) { return ymd(new Date(now.getFullYear(), now.getMonth() + back, d)); };
    var classes = [], oto = [], push = function (list, tid, daysAgo) { list.push({ teacher_id: tid, at: new Date(Date.now() - daysAgo * DAY).toISOString() }); };
    for (var i = 1; i < 80; i += 2) push(classes, 't1', i);
    for (i = 2; i < 60; i += 3) push(classes, 't2', i);
    [3, 9, 20, 33].forEach(function (d) { push(oto, 't1', d); });
    return { sample: true, since: new Date(Date.now() - 400 * DAY).toISOString(), classes: classes, oto: oto,
      teachers: [{ id: 't1', full_name: 'Ana Weber', status: 'approved', hourly_rate: 28 }, { id: 't2', full_name: 'James Hall', status: 'approved', hourly_rate: 26 }, { id: 't6', full_name: 'Lucía Gómez', status: 'approved', hourly_rate: 22 }],
      payouts: [
        { id: 'p1', teacher_id: 't1', period_start: m(-1, 1), period_end: m(0, 0), sessions_count: 17, amount_eur: 612.5, status: 'pending', paid_at: null, created_at: now.toISOString() },
        { id: 'p2', teacher_id: 't1', period_start: m(-2, 1), period_end: m(-1, 0), sessions_count: 15, amount_eur: 540, status: 'paid', paid_at: new Date(Date.now() - 20 * DAY).toISOString(), created_at: now.toISOString() },
        { id: 'p3', teacher_id: 't2', period_start: m(-2, 1), period_end: m(-1, 0), sessions_count: 9, amount_eur: 351, status: 'paid', paid_at: new Date(Date.now() - 19 * DAY).toISOString(), created_at: now.toISOString() }
      ] };
  }
  function sampleAi(days) {
    var by_day = {}, total = 0, calls = 0;
    for (var i = 0; i < days; i++) { var d = new Date(Date.now() - i * DAY).toISOString().slice(0, 10), c = 8 + ((i * 7) % 23), cost = c * 0.0093; by_day[d] = { calls: c, cost: cost }; total += cost; calls += c; }
    return { usage: { days: days, totals: { calls: calls, cost_usd: total, input_tokens: calls * 1650, output_tokens: calls * 420, failures: 3 },
      limits: { daily_call_cap: 150, daily_budget_usd: 25, user_daily_budget_usd: 1 }, by_day: by_day,
      by_action: { grade: { calls: Math.round(calls * 0.6), cost: total * 0.42 }, 'grade-submission': { calls: Math.round(calls * 0.25), cost: total * 0.38 }, 'generate-exercises': { calls: Math.round(calls * 0.1), cost: total * 0.15 }, transcribe: { calls: Math.round(calls * 0.05), cost: total * 0.05 } },
      by_user: { u1: { calls: 140, cost: total * 0.3 }, u2: { calls: 96, cost: total * 0.21 }, u3: { calls: 41, cost: total * 0.12 } } },
      people: { u1: { id: 's1', name: 'Lukas Brandt', role: 'student' }, u2: { id: 't1', name: 'Ana Weber', role: 'teacher' }, u3: { id: 's3', name: 'Sara Rossi', role: 'student' } },
      failures: [{ action: 'transcribe', error: 'Provider timed out after 30 s <retry later>', created_at: new Date(Date.now() - 5 * 3600000).toISOString() }] };
  }
  function sampleSystem() {
    var now = Date.now(), ago = function (m) { return new Date(now - m * MIN).toISOString(); }, jobs = [];
    for (var i = 0; i < 40; i++) { jobs.push({ job: 'db:complete-sessions', ran_at: ago(i * 15 + 3), ok: true, result: { completed: i % 9 === 0 ? 1 : 0 } }); jobs.push({ job: 'db:expire-waitlist-offers', ran_at: ago(i * 15 + 3), ok: true, result: { expired_offers_removed: 0 } }); }
    jobs.push({ job: 'vercel:cron-create-rooms', ran_at: ago(9 * 60), ok: true, result: { completed: 0, roomsCreated: 3, roomsFailed: 0 } }, { job: 'vercel:cron-expire-offers', ran_at: ago(8.5 * 60), ok: false, result: { error: 'fetch failed <timeout>' } });
    return { reviews: [
      { id: 'r1', rating: 5, review_text: 'Clear, patient and fun. I finally understand the cases.', created_at: ago(60 * 24 * 9), teacher_id: 't1', teacher_profiles: { full_name: 'Ana Weber' }, student_profiles: { id: 's1', full_name: 'Lukas Brandt' } },
      { id: 'r2', rating: 2, review_text: 'Visit <b>cheap-essays.example</b> for answers', created_at: ago(60 * 24 * 2), teacher_id: 't2', teacher_profiles: { full_name: 'James Hall' }, student_profiles: { id: 's3', full_name: 'Sara Rossi' } }],
      settings: [{ key: 'admin_secret', secret: true, value: null }, { key: 'api_url', secret: false, value: 'https://alimun.com' }, { key: 'waitlist_webhook_secret', secret: true, value: null }], jobs: jobs };
  }

  /* ---------- Payouts ---------- */
  function loadPayouts() {
    if (PO) return Promise.resolve(PO);
    return (real() ? window.AlimunData.adminPayouts() : Promise.resolve(samplePayouts())).then(function (d) { return (PO = d); });
  }
  function teacherName(id) { var t = PO.teachers.filter(function (x) { return x.id === id; })[0]; return t ? t.full_name : 'A teacher'; }
  function lastEnd(tid) { return PO.payouts.filter(function (p) { return p.teacher_id === tid; }).map(function (p) { return p.period_end; }).sort().pop() || null; }
  /* Classes and 1:1s a teacher completed from `from` to `to` (local dates, both included) */
  function taught(tid, from, to) {
    var a = from ? dateOf(from).getTime() : 0, b = to ? dateOf(to).getTime() + DAY : Infinity;
    var inside = function (x) { var t = new Date(x.at).getTime(); return x.teacher_id === tid && t >= a && t < b; };
    return { classes: PO.classes.filter(inside).length, oto: PO.oto.filter(inside).length };
  }
  function taughtText(n) { return A.plural(n.classes, 'class', 'classes') + ' and ' + A.plural(n.oto, '1:1', '1:1s'); }
  function payoutsView(which) {
    which = which === 'paid' || which === 'all' ? which : 'pending';
    var pend = PO.payouts.filter(function (p) { return p.status === 'pending'; }), year = Date.now() - 365 * DAY;
    var paidYear = PO.payouts.filter(function (p) { return p.status === 'paid' && p.paid_at && new Date(p.paid_at).getTime() >= year; });
    var sum = function (l) { return l.reduce(function (n, p) { return n + Number(p.amount_eur || 0); }, 0); };
    var html = flash() + '<div class="view__head"><div><h1 class="t-h1">Payouts</h1><p class="t-lead">' + esc(eur(sum(pend)) + ' to pay in ' + A.plural(pend.length, 'payout', 'payouts') + '. ' + eur(sum(paidYear)) + ' paid in the last twelve months.') + '</p></div>' +
      '<div class="btn-row"><a class="btn btn--primary btn--sm" href="#/payouts/new">Record a payout</a></div></div><div class="grid rise">';
    var since = PO.teachers.map(function (t) { var e = lastEnd(t.id), from = e ? ymd(new Date(dateOf(e).getTime() + DAY)) : null; return { t: t, end: e, n: taught(t.id, from, null) }; })
      .filter(function (x) { return x.t.status === 'approved' || x.n.classes + x.n.oto; });
    html += '<section class="card span-12" style="--i:0" aria-labelledby="h-since"><h2 class="t-h2" id="h-since">Taught since their last payout</h2><p class="t-small" style="margin-top:4px">Completed class dates and 1:1s, counted from the day after the last period recorded for them.</p>' +
      (since.length ? '<div class="tt-week">' + since.map(function (x) {
        return '<div class="tt-row ad-act"><span class="tt-row__time">' + esc(String(x.n.classes + x.n.oto)) + '</span><span><b>' + esc(x.t.full_name) + '</b><small>' +
          esc(taughtText(x.n) + ', ' + (x.end ? 'since their last payout ended on ' + dayLabel(x.end) : 'no payout recorded yet; counted over the last thirteen months')) + '</small></span>' +
          '<span class="btn-row ad-act__btns"><a class="btn btn--ghost btn--sm" href="#/payouts/new/' + esc(x.t.id) + '">Record a payout</a></span></div>';
      }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">No approved teachers yet.</p>') + '</section>';
    var count = { pending: pend.length, paid: PO.payouts.length - pend.length, all: PO.payouts.length };
    var tab = function (k, label) { return '<a class="btn btn--' + (k === which ? 'primary' : 'quiet') + ' btn--sm" href="#/payouts/list/' + k + '"' + (k === which ? ' aria-current="page"' : '') + '>' + esc(label + ' (' + count[k] + ')') + '</a>'; };
    html += '<section class="card span-12" style="--i:1" aria-labelledby="h-pay"><h2 class="t-h2" id="h-pay">Payouts recorded</h2><div class="btn-row ad-tabs" role="navigation" aria-label="Which payouts" style="margin-top:12px">' + tab('pending', 'To pay') + tab('paid', 'Paid') + tab('all', 'All') + '</div>' +
      '<div class="ad-filters"><select class="st-in" data-pf aria-label="Teacher">' + opt('', 'Every teacher', PF.teacher) + PO.teachers.map(function (t) { return opt(t.id, t.full_name, PF.teacher); }).join('') + '</select></div>' +
      '<div data-prows data-which="' + which + '">' + payoutRowsHtml(which) + '</div></section>';
    return html + sampleLine() + '</div>';
  }
  var PF = { teacher: '' };
  function payoutRowsHtml(which) {
    var list = PO.payouts.filter(function (p) { return (which === 'all' || p.status === which) && (!PF.teacher || p.teacher_id === PF.teacher); });
    if (!list.length) return '<p class="t-body" style="margin-top:12px">' + esc(which === 'pending' ? 'Nothing to pay.' : 'No payouts here.') + '</p>';
    return '<div class="tt-week">' + list.map(function (p) {
      var bits = [period(p), A.plural(p.sessions_count || 0, 'class', 'classes') + ' and 1:1s counted', p.status === 'paid' ? 'paid ' + (p.paid_at ? A.fmt(p.paid_at, { day: 'numeric', month: 'short', year: 'numeric' }) : '') : 'to pay'];
      return '<div class="ad-item"><div class="tt-row ad-act"><span class="tt-row__time">' + esc(eur(p.amount_eur)) + '</span><span><b>' + esc(teacherName(p.teacher_id)) + '</b><small>' + esc(bits.join(', ')) + '</small></span><span class="btn-row ad-act__btns">' +
        (p.status === 'pending' ? '<button class="btn btn--primary btn--sm" type="button" data-askpaid="' + esc(p.id) + '">Mark paid</button><button class="btn btn--ghost btn--sm" type="button" data-askamount="' + esc(p.id) + '">Change</button><button class="btn btn--quiet btn--sm" type="button" data-askdel="' + esc(p.id) + '">Delete</button>' : '') +
        '</span></div><div data-box="' + esc(p.id) + '"></div></div>';
    }).join('') + '</div>';
  }
  function payout(id) { return PO.payouts.filter(function (p) { return p.id === id; })[0]; }
  function askPaid(id) {
    var p = payout(id);
    askBox(id, '<p class="t-body"><b>' + esc('Mark ' + eur(p.amount_eur) + ' to ' + teacherName(p.teacher_id) + ' as paid?') + '</b></p><p class="t-small">Only once the money has been sent. A paid payout can no longer be changed or deleted.</p>' +
      '<label class="st-day"><input type="checkbox" data-notify checked><span>Email ' + esc(teacherName(p.teacher_id)) + ' that it has been paid</span></label>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-dopaid="' + esc(id) + '">Mark paid</button><button class="btn btn--quiet btn--sm" type="button" data-cancel>Cancel</button></div>');
  }
  function doPaid(btn) {
    var id = btn.getAttribute('data-dopaid'), p = payout(id), box = btn.closest('.ad-confirm'), notify = box.querySelector('[data-notify]').checked, msg = box.querySelector('[data-msg]'), name = teacherName(p.teacher_id);
    var body = 'Your payout of ' + eur(p.amount_eur) + ' for ' + period(p) + ' (' + A.plural(p.sessions_count || 0, 'class', 'classes') + ' and 1:1s) has been paid.\n\nYou can see your payouts in your dashboard under Payouts. Reply to this email if anything looks wrong.';
    if (!real()) { p.status = 'paid'; p.paid_at = new Date().toISOString(); FLASH = 'Marked as paid' + (notify ? ' and ' + name + ' was emailed' : '') + '. (Sample: nothing was saved or sent.)'; A.rerender(); return; }
    btn.disabled = true; say(msg, 'Saving…');
    window.AlimunData.adminPayoutUpdate(id, { status: 'paid', paid_at: new Date().toISOString() }).then(function () {
      var fin = function (note) { FLASH = 'Marked as paid.' + note; PO = null; A.rerender(); };
      if (!notify) return fin('');
      return window.AlimunData.adminEmail(p.teacher_id, 'Your Alimun payout has been paid', body).then(function () { fin(' ' + name + ' was emailed.'); }, function () { fin(' The email to ' + name + ' could not be sent.'); });
    }, function (e) { btn.disabled = false; say(msg, 'That did not work: ' + errText(e) + '.', true); });
  }
  function askAmount(id) {
    var p = payout(id);
    askBox(id, '<p class="t-body"><b>' + esc('Change the payout to ' + teacherName(p.teacher_id) + ' for ' + period(p)) + '</b></p>' +
      field('Amount (EUR)', '<input class="st-in" type="number" min="0.01" max="100000" step="0.01" data-amount value="' + esc(p.amount_eur) + '">') +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-doamount="' + esc(id) + '">Save</button><button class="btn btn--quiet btn--sm" type="button" data-cancel>Cancel</button></div>');
  }
  function doAmount(btn) {
    var id = btn.getAttribute('data-doamount'), p = payout(id), box = btn.closest('.ad-confirm'), msg = box.querySelector('[data-msg]'), v = Math.round(Number(box.querySelector('[data-amount]').value) * 100) / 100;
    if (!(v > 0 && v <= 100000)) { say(msg, 'Give an amount above zero.', true); return; }
    if (!real()) { p.amount_eur = v; FLASH = 'The amount is now ' + eur(v) + '. (Sample: nothing was saved.)'; A.rerender(); return; }
    btn.disabled = true;
    window.AlimunData.adminPayoutUpdate(id, { amount_eur: v }).then(function () { FLASH = 'The amount is now ' + eur(v) + '.'; PO = null; A.rerender(); },
      function (e) { btn.disabled = false; say(msg, 'That did not save: ' + errText(e) + '.', true); });
  }
  function askDel(id) {
    var p = payout(id);
    askBox(id, '<p class="t-body"><b>' + esc('Delete the payout of ' + eur(p.amount_eur) + ' to ' + teacherName(p.teacher_id) + ' for ' + period(p) + '?') + '</b></p><p class="t-small">For a payout recorded by mistake. It disappears from their dashboard too.</p>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-dodel="' + esc(id) + '">Delete it</button><button class="btn btn--quiet btn--sm" type="button" data-cancel>Cancel</button></div>');
  }
  function doDel(btn) {
    var id = btn.getAttribute('data-dodel'), msg = btn.closest('.ad-confirm').querySelector('[data-msg]');
    if (!real()) { PO.payouts = PO.payouts.filter(function (p) { return p.id !== id; }); FLASH = 'The payout was deleted. (Sample: nothing was saved.)'; A.rerender(); return; }
    btn.disabled = true;
    window.AlimunData.adminPayoutDelete(id).then(function () { FLASH = 'The payout was deleted.'; PO = null; A.rerender(); },
      function (e) { btn.disabled = false; say(msg, 'That did not work: ' + errText(e) + '.', true); });
  }

  /* Record a payout */
  function newPayoutView(tid) {
    var active = PO.teachers.filter(function (t) { return t.status === 'approved' || t.id === tid; });
    if (!active.length) return back('#/payouts', 'Payouts') + '<div class="card"><p class="t-body">No approved teachers yet.</p></div>';
    tid = active.some(function (t) { return t.id === tid; }) ? tid : active[0].id;
    return back('#/payouts', 'Payouts') + '<div class="view__head"><div><h1 class="t-h1">Record a payout</h1><p class="t-lead">The classes and 1:1s in the period are counted for you. You type the amount; it is recorded as to pay until you mark it paid.</p></div></div>' +
      '<div class="grid rise"><form class="card span-8 st-form" style="--i:0;max-width:none;margin-top:0" data-newpay>' +
      field('Teacher', '<select class="st-in" name="teacher_id" data-pteacher>' + active.map(function (t) { return opt(t.id, t.full_name, tid); }).join('') + '</select>') +
      '<div class="st-row">' + field('From', '<input class="st-in" type="date" name="period_start" required data-pdate>') + field('To', '<input class="st-in" type="date" name="period_end" required data-pdate>') + '</div>' +
      '<p class="t-body" data-pcount aria-live="polite"></p>' +
      field('Amount (EUR)', '<input class="st-in" type="number" name="amount_eur" min="0.01" max="100000" step="0.01" required>') +
      '<div class="btn-row"><button class="btn btn--primary" type="submit">Record the payout</button></div><p class="t-body st-msg" data-msg="pay" aria-live="polite"></p></form>' +
      '<section class="stage span-4" style="--i:1;background:var(--t-sun)" aria-hidden="true"><div class="bub think">Counting carefully.</div>' + A.Cast.drawing('cat') + '</section>' + sampleLine() + '</div>';
  }
  /* The period starts the day after their last payout (or the first of last month) and ends on the last day of last month,
     or yesterday when that is earlier than the start */
  function payoutDefaults() {
    var f = root.querySelector('[data-newpay]'); if (!f) return;
    var tid = f.teacher_id.value, e = lastEnd(tid), now = new Date();
    var start = e ? new Date(dateOf(e).getTime() + DAY) : new Date(now.getFullYear(), now.getMonth() - 1, 1);
    var end = new Date(now.getFullYear(), now.getMonth(), 0);
    if (end < start) end = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    if (end < start) end = start;
    f.period_start.value = ymd(start); f.period_end.value = ymd(end);
    f.period_start.min = f.period_end.min = PO.since.slice(0, 10);
    payoutCount();
  }
  function overlaps(tid, a, b) { return PO.payouts.filter(function (p) { return p.teacher_id === tid && p.period_start <= b && p.period_end >= a; }); }
  function payoutCount() {
    var f = root.querySelector('[data-newpay]'), box = root.querySelector('[data-pcount]'); if (!f) return null;
    var a = f.period_start.value, b = f.period_end.value, tid = f.teacher_id.value;
    if (!a || !b || b < a) { box.textContent = 'Choose the first and the last day of the period.'; box.classList.add('is-bad'); return null; }
    var n = taught(tid, a, b), over = overlaps(tid, a, b);
    box.classList.toggle('is-bad', !!over.length);
    box.textContent = 'In this period: ' + taughtText(n) + ', ' + (n.classes + n.oto) + ' in total.' +
      (over.length ? ' This overlaps a payout already recorded for them: ' + over.map(period).join('; ') + '.' : '') +
      (a < PO.since.slice(0, 10) ? ' Only the last thirteen months are counted.' : '');
    return n;
  }
  function recordPayout(form) {
    var msg = form.querySelector('[data-msg]'), n = payoutCount(), amount = Math.round(Number(form.amount_eur.value) * 100) / 100;
    if (!n) { say(msg, 'Choose the period.', true); return; }
    if (!(amount > 0 && amount <= 100000)) { say(msg, 'Give the amount, above zero.', true); return; }
    var row = { teacher_id: form.teacher_id.value, period_start: form.period_start.value, period_end: form.period_end.value, sessions_count: n.classes + n.oto, amount_eur: amount };
    var label = eur(amount) + ' to ' + teacherName(row.teacher_id) + ' for ' + period(row) + ' was recorded as to pay.';
    if (!real()) { PO.payouts.unshift(Object.assign({ id: 'p' + Date.now(), status: 'pending', paid_at: null, created_at: new Date().toISOString() }, row)); FLASH = label + ' (Sample: nothing was saved.)'; location.hash = '#/payouts'; return; }
    var btn = form.querySelector('[type="submit"]'); btn.disabled = true; say(msg, 'Saving…');
    window.AlimunData.adminRecordPayout(row).then(function () { FLASH = label; PO = null; location.hash = '#/payouts'; },
      function (e) { btn.disabled = false; say(msg, 'That did not save: ' + errText(e) + '.', true); });
  }

  /* ---------- AI spend ---------- */
  function aiView(days) {
    var u = AI.usage, t = u.totals || {}, lim = u.limits || {};
    var tab = function (d) { return '<a class="btn btn--' + (d === days ? 'primary' : 'quiet') + ' btn--sm" href="#/ai/' + d + '"' + (d === days ? ' aria-current="page"' : '') + '>' + esc('Last ' + d + ' days') + '</a>'; };
    var html = '<div class="view__head"><div><h1 class="t-h1">AI spend</h1><p class="t-lead">' + esc(usd(t.cost_usd) + ' over the last ' + days + ' days, ' + A.plural(Number(t.calls) || 0, 'call', 'calls') + '.') + '</p></div></div>' +
      '<div class="grid rise"><section class="card span-12" style="--i:0"><div class="btn-row ad-tabs" role="navigation" aria-label="Which days">' + [7, 30, 90].map(tab).join('') + '</div><div class="ad-tiles">' +
      [[usd(t.cost_usd), 'spent'], [A.num(Number(t.calls) || 0), 'calls'], [A.num(Number(t.failures) || 0), 'failed'], [A.num(Number(t.input_tokens) || 0) + ' / ' + A.num(Number(t.output_tokens) || 0), 'tokens in and out']].map(function (x) {
        return '<div class="ad-tile"><span class="t-num">' + esc(x[0]) + '</span><b>' + esc(x[1]) + '</b></div>';
      }).join('') + '</div><p class="t-small" style="margin-top:14px">' + esc('Limits set on the server: ' + (lim.daily_call_cap != null ? lim.daily_call_cap + ' calls a day per person' : 'no call limit') +
        (lim.user_daily_budget_usd != null ? ', ' + usd(lim.user_daily_budget_usd) + ' a day per person' : '') + (lim.daily_budget_usd != null ? ', ' + usd(lim.daily_budget_usd) + ' a day for all of Alimun' : '') + '. They are changed in Vercel’s settings.') + '</p></section>';
    var byDay = u.by_day || {}, dayKeys = Object.keys(byDay).sort().reverse();
    html += '<section class="card span-6" style="--i:1" aria-labelledby="h-aiday"><h2 class="t-h2" id="h-aiday">By day</h2>' + (dayKeys.length ? '<div class="tt-week">' + dayKeys.map(function (d) {
      var c = Number(byDay[d].cost) || 0;
      return '<div class="tt-row ad-kv"><span class="tt-row__time">' + esc(usd(c)) + '</span><span><b>' + esc(A.fmt(d + 'T12:00:00', { weekday: 'short', day: 'numeric', month: 'short' })) + '</b><small>' + esc(A.plural(Number(byDay[d].calls) || 0, 'call', 'calls')) + '</small></span></div>';
    }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">No AI calls in this period.</p>') + '</section>';
    var byA = u.by_action || {}, aKeys = Object.keys(byA).sort(function (a, b) { return (Number(byA[b].cost) || 0) - (Number(byA[a].cost) || 0); });
    html += '<section class="card span-6" style="--i:2" aria-labelledby="h-aifeat"><h2 class="t-h2" id="h-aifeat">By feature</h2>' + (aKeys.length ? '<div class="tt-week">' + aKeys.map(function (k) {
      return '<div class="tt-row ad-kv"><span class="tt-row__time">' + esc(usd(byA[k].cost)) + '</span><span><b>' + esc(FEATURES[k] || k) + '</b><small>' + esc(A.plural(Number(byA[k].calls) || 0, 'call', 'calls')) + '</small></span></div>';
    }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">Nothing yet.</p>') + '</section>';
    var byU = u.by_user || {}, uKeys = Object.keys(byU).sort(function (a, b) { return (Number(byU[b].cost) || 0) - (Number(byU[a].cost) || 0); }).slice(0, 20);
    html += '<section class="card span-6" style="--i:3" aria-labelledby="h-aiuser"><h2 class="t-h2" id="h-aiuser">By person</h2><p class="t-small" style="margin-top:4px">The twenty who used the most.</p>' + (uKeys.length ? '<div class="tt-week">' + uKeys.map(function (k) {
      var p = AI.people[k], name = p ? p.name || (p.role === 'teacher' ? 'A teacher' : 'A student') : 'An account without a profile';
      var who = p ? '<a class="linkish" href="#/' + (p.role === 'teacher' ? 'teachers' : 'students') + '/' + esc(p.id) + '"><b>' + esc(name) + '</b></a>' : '<b>' + esc(name) + '</b>';
      return '<div class="tt-row ad-kv"><span class="tt-row__time">' + esc(usd(byU[k].cost)) + '</span><span>' + who + '<small>' + esc((p ? (p.role === 'teacher' ? 'Teacher' : 'Student') + ', ' : '') + A.plural(Number(byU[k].calls) || 0, 'call', 'calls')) + '</small></span></div>';
    }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">Nothing yet.</p>') + '</section>';
    html += '<section class="card span-6" style="--i:4" aria-labelledby="h-aifail"><h2 class="t-h2" id="h-aifail">Latest failures</h2>' + (AI.failures.length ? '<div class="tt-week">' + AI.failures.map(function (f) {
      return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(A.fmt(f.created_at, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })) + '</span><span><b>' + esc(FEATURES[f.action] || f.action) + '</b><small class="ad-pre">' + esc(String(f.error || 'No message').slice(0, 400)) + '</small></span></div>';
    }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">No failures in this period.</p>') + '</section>';
    return html + sampleLine() + '</div>';
  }

  /* ---------- System ---------- */
  var RF = { teacher: '', stars: '' };
  function systemView() {
    var html = flash() + '<div class="view__head"><div><h1 class="t-h1">System</h1><p class="t-lead">Reviews, app settings and the automatic jobs.</p></div>' +
      '<div class="btn-row"><a class="btn btn--ghost btn--sm" href="#/students/signups">Email signups</a></div></div><div class="grid rise">';
    var teachers = SY.reviews.map(function (r) { return r.teacher_profiles && r.teacher_profiles.full_name; }).filter(function (v, i, a) { return v && a.indexOf(v) === i; }).sort();
    html += '<section class="card span-12" style="--i:0" aria-labelledby="h-rev"><h2 class="t-h2" id="h-rev">Reviews</h2><p class="t-small" style="margin-top:4px">' + esc(A.plural(SY.reviews.length, 'review', 'reviews') + ' from students. They show on the teachers’ public profiles; deleting one updates the teacher’s rating.') + '</p>' +
      (SY.reviews.length ? '<div class="ad-filters" style="margin-top:12px"><select class="st-in" data-rf="teacher" aria-label="Teacher">' + opt('', 'Every teacher', RF.teacher) + teachers.map(function (t) { return opt(t, t, RF.teacher); }).join('') + '</select>' +
        '<select class="st-in" data-rf="stars" aria-label="Stars">' + opt('', 'Any rating', RF.stars) + [1, 2, 3, 4, 5].map(function (n) { return opt(n, n + ' of 5', RF.stars); }).join('') + '</select></div>' : '') +
      '<div data-rrows>' + reviewRowsHtml() + '</div></section>';
    html += '<section class="card span-12" style="--i:1" aria-labelledby="h-set"><h2 class="t-h2" id="h-set">App settings</h2><p class="t-small" style="margin-top:4px">Values the database uses to reach the site. Secret values are never shown here; you can only replace them.</p>' +
      (SY.settings.length ? '<div class="tt-week">' + SY.settings.map(function (s) {
        return '<div class="ad-item"><div class="tt-row ad-act ad-act--2"><span><b class="ad-key">' + esc(s.key) + '</b><small class="ad-pre">' + esc((s.secret ? 'Set, hidden. ' : (s.value || '(empty)') + '. ') + (SETTING_NOTE[s.key] || '')) + '</small></span>' +
          '<span class="btn-row ad-act__btns"><button class="btn btn--ghost btn--sm" type="button" data-askset="' + esc(s.key) + '">' + (s.secret ? 'Replace' : 'Change') + '</button></span></div><div data-box="' + esc(s.key) + '"></div></div>';
      }).join('') + '</div>' : '<p class="t-body" style="margin-top:8px">No settings.</p>') + '</section>';
    html += jobsHtml();
    return html + sampleLine() + '</div>';
  }
  var SETTING_NOTE = {
    api_url: 'The site’s address, used by the database to send waiting-list offers.',
    waitlist_webhook_secret: 'Shared with Vercel’s WAITLIST_WEBHOOK_SECRET; the waiting-list emails need both to match.',
    admin_secret: 'An older shared secret, used only when the waiting-list secret is missing.'
  };
  function reviewRowsHtml() {
    var list = SY.reviews.filter(function (r) { return (!RF.teacher || (r.teacher_profiles && r.teacher_profiles.full_name) === RF.teacher) && (!RF.stars || String(r.rating) === String(RF.stars)); });
    if (!list.length) return '<p class="t-body" style="margin-top:12px">' + esc(SY.reviews.length ? 'No review matches.' : 'No reviews yet.') + '</p>';
    return '<div class="tt-week">' + list.slice(0, 300).map(function (r) {
      var st = r.student_profiles || {};
      return '<div class="ad-item"><div class="tt-row ad-act"><span class="tt-row__time">' + esc(r.rating + ' of 5') + '</span><span><span class="ts-note__text" dir="auto">' + esc(r.review_text || '(no text)') + '</span><small>' +
        esc((st.full_name || 'A student') + ' about ' + ((r.teacher_profiles && r.teacher_profiles.full_name) || 'a teacher') + ', ' + A.fmt(r.created_at, { day: 'numeric', month: 'short', year: 'numeric' })) + '</small></span>' +
        '<span class="btn-row ad-act__btns"><button class="btn btn--quiet btn--sm" type="button" data-askrev="' + esc(r.id) + '">Delete</button></span></div><div data-box="' + esc(r.id) + '"></div></div>';
    }).join('') + '</div>';
  }
  function askRev(id) {
    askBox(id, '<p class="t-body"><b>Delete this review?</b></p><p class="t-small">It disappears from the teacher’s profile and their rating is worked out again. This cannot be undone.</p>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-dorev="' + esc(id) + '">Delete it</button><button class="btn btn--quiet btn--sm" type="button" data-cancel>Cancel</button></div>');
  }
  function doRev(btn) {
    var id = btn.getAttribute('data-dorev'), msg = btn.closest('.ad-confirm').querySelector('[data-msg]');
    if (!real()) { SY.reviews = SY.reviews.filter(function (r) { return r.id !== id; }); FLASH = 'The review was deleted. (Sample: nothing was saved.)'; A.rerender(); return; }
    btn.disabled = true;
    window.AlimunData.adminReviewDelete(id).then(function () { FLASH = 'The review was deleted.'; SY = null; A.rerender(); },
      function (e) { btn.disabled = false; say(msg, 'That did not work: ' + errText(e) + '.', true); });
  }
  function setting(key) { return SY.settings.filter(function (s) { return s.key === key; })[0]; }
  function askSet(key) {
    var s = setting(key);
    askBox(key, '<p class="t-body"><b>' + esc((s.secret ? 'Replace ' : 'Change ') + key) + '</b></p>' +
      (s.secret ? field('New value', '<input class="st-in" type="password" data-setval autocomplete="new-password" minlength="24" maxlength="500">', 'At least 24 characters. Put the same value in Vercel at the same time, or the waiting-list emails stop being sent.')
        : field('Value', '<input class="st-in" data-setval maxlength="500" value="' + esc(s.value || '') + '">', key === 'api_url' ? 'An https address, such as https://alimun.com' : '')) +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-doset="' + esc(key) + '">Save</button><button class="btn btn--quiet btn--sm" type="button" data-cancel>Cancel</button></div>');
  }
  function doSet(btn) {
    var key = btn.getAttribute('data-doset'), s = setting(key), box = btn.closest('.ad-confirm'), msg = box.querySelector('[data-msg]'), v = box.querySelector('[data-setval]').value.trim();
    if (s.secret && (v.length < 24 || /\s/.test(v))) { say(msg, 'Use at least 24 characters, without spaces.', true); return; }
    if (key === 'api_url') {
      var ok = false; try { var u = new URL(v); ok = u.protocol === 'https:' && !u.search && !u.hash && u.pathname === '/'; } catch (e) { ok = false; }
      if (!ok || /\/$/.test(v)) { say(msg, 'Give the address alone, starting with https:// and without a slash at the end.', true); return; }
    }
    if (!v) { say(msg, 'Give a value.', true); return; }
    if (!real()) { if (!s.secret) s.value = v; FLASH = key + ' was saved. (Sample: nothing was saved.)'; A.rerender(); return; }
    btn.disabled = true;
    window.AlimunData.adminSettingSet(key, v).then(function () { FLASH = key + ' was saved.' + (s.secret ? ' Remember to put the same value in Vercel.' : ''); SY = null; A.rerender(); },
      function (e) { btn.disabled = false; say(msg, 'That did not save: ' + errText(e) + '.', true); });
  }
  function resultText(r) {
    if (r == null) return '';
    if (typeof r !== 'object') return String(r);
    return Object.keys(r).map(function (k) { var v = r[k]; return k + ': ' + (v && typeof v === 'object' ? JSON.stringify(v) : v); }).join(', ');
  }
  function jobsHtml() {
    var JOBS = A.jobs || {}, by = {};
    SY.jobs.forEach(function (r) { (by[r.job] = by[r.job] || []).push(r); });
    Object.keys(JOBS).forEach(function (k) { by[k] = by[k] || []; });
    var keys = Object.keys(by).sort(function (a, b) { return ((JOBS[a] || {}).name || a).localeCompare((JOBS[b] || {}).name || b); });
    return '<section class="card span-12" style="--i:2" aria-labelledby="h-jobs"><h2 class="t-h2" id="h-jobs">Automatic jobs</h2><p class="t-small" style="margin-top:4px">The last seven days. They run by themselves; this page only shows them.</p><div class="tt-week">' + keys.map(function (k) {
      var runs = by[k], j = JOBS[k] || {}, every = j.every || DAY, last = runs[0], failed = runs.filter(function (r) { return !r.ok; });
      var late = !last || Date.now() - new Date(last.ran_at).getTime() > 2 * every + 10 * MIN;
      var state = !last ? 'Has not run this week' : (late ? 'Late: last ran ' : 'Last ran ') + A.relative(new Date(last.ran_at).getTime() - Date.now()) + (last.ok ? '' : ', and failed');
      var freq = every >= DAY ? 'once a day' : 'every ' + Math.round(every / MIN) + ' minutes';
      return '<div class="tt-row tt-row--wide ad-jobw' + (late || (last && !last.ok) ? ' is-bad' : '') + '"><span class="tt-row__time">' + esc(A.plural(runs.length, 'run', 'runs')) + '</span><span><b>' + esc(j.name || k) + '</b><small>' +
        esc(state + '. Runs ' + freq + '. ' + (failed.length ? A.plural(failed.length, 'failure', 'failures') + ' this week.' : 'No failures this week.') + (last && last.result ? ' Last result: ' + resultText(last.result) + '.' : '')) + '</small>' +
        (failed.length ? '<details class="ad-details"><summary>The failures</summary>' + failed.slice(0, 10).map(function (r) { return '<p class="t-small ad-pre">' + esc(A.fmt(r.ran_at, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) + ': ' + resultText(r.result).slice(0, 500)) + '</p>'; }).join('') + '</details>' : '') + '</span></div>';
    }).join('') + '</div></section>';
  }

  /* ---------- Events ---------- */
  function bind() {
    if (root.__asystem) return;
    root.__asystem = true;
    root.addEventListener('change', function (e) {
      var t = e.target, b;
      if (t.hasAttribute('data-pf') && PO) { PF.teacher = t.value; b = root.querySelector('[data-prows]'); if (b) b.innerHTML = payoutRowsHtml(b.getAttribute('data-which')); }
      else if (t.hasAttribute('data-rf') && SY) { RF[t.getAttribute('data-rf')] = t.value; b = root.querySelector('[data-rrows]'); if (b) b.innerHTML = reviewRowsHtml(); }
      else if (t.hasAttribute('data-pteacher')) payoutDefaults();
      else if (t.hasAttribute('data-pdate')) payoutCount();
    });
    root.addEventListener('submit', function (e) { if (e.target.hasAttribute('data-newpay')) { e.preventDefault(); recordPayout(e.target); } });
    root.addEventListener('click', function (e) {
      var b = e.target.closest('[data-askpaid],[data-dopaid],[data-askamount],[data-doamount],[data-askdel],[data-dodel],[data-askrev],[data-dorev],[data-askset],[data-doset],[data-cancel]');
      if (!b || b.disabled) return;
      if (b.hasAttribute('data-askpaid')) askPaid(b.getAttribute('data-askpaid'));
      else if (b.hasAttribute('data-dopaid')) doPaid(b);
      else if (b.hasAttribute('data-askamount')) askAmount(b.getAttribute('data-askamount'));
      else if (b.hasAttribute('data-doamount')) doAmount(b);
      else if (b.hasAttribute('data-askdel')) askDel(b.getAttribute('data-askdel'));
      else if (b.hasAttribute('data-dodel')) doDel(b);
      else if (b.hasAttribute('data-askrev')) askRev(b.getAttribute('data-askrev'));
      else if (b.hasAttribute('data-dorev')) doRev(b);
      else if (b.hasAttribute('data-askset')) askSet(b.getAttribute('data-askset'));
      else if (b.hasAttribute('data-doset')) doSet(b);
      else if (b.hasAttribute('data-cancel')) b.closest('.ad-confirm').parentNode.innerHTML = '';
    });
  }

  function mounter(kind) {
    var no = 0;
    return function (view, parts, helpers) {
      var my = ++no;
      A = helpers; root = view;
      bind();
      root.innerHTML = loading();
      var p0 = parts[0], go;
      if (kind === 'payouts') {
        if (p0 === 'new') go = loadPayouts().then(function () { return { html: newPayoutView(parts[1]), title: 'Record a payout', after: payoutDefaults }; });
        else { if (real() && !FLASH) PO = null; go = loadPayouts().then(function () { return { html: payoutsView(parts[1]), title: 'Payouts' }; }); }
      } else if (kind === 'ai') {
        var days = [7, 30, 90].indexOf(Number(p0)) > -1 ? Number(p0) : 30;
        go = (real() ? Promise.all([window.AlimunData.adminAiUsage(days), window.AlimunData.adminAiFailures(days)]).then(function (r) { return Object.assign(r[0], { failures: r[1] }); }) : Promise.resolve(sampleAi(days)))
          .then(function (d) { AI = d; return { html: aiView(days), title: 'AI spend' }; });
      } else {
        go = (SY && !real() ? Promise.resolve(SY) : real() ? Promise.all([window.AlimunData.adminReviews(), window.AlimunData.adminSettings(), window.AlimunData.adminJobs()]).then(function (r) { return { reviews: r[0], settings: r[1], jobs: r[2] }; }) : Promise.resolve(sampleSystem()))
          .then(function (d) { SY = d; return { html: systemView(), title: 'System' }; });
      }
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
  window.AlimunAdminPayouts = { mount: mounter('payouts'), reset: function () {} };
  window.AlimunAdminAi = { mount: mounter('ai'), reset: function () {} };
  window.AlimunAdminSystem = { mount: mounter('system'), reset: function () {} };
})();
