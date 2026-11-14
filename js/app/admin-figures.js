/* Alimun admin: figures (docs/PRICING_ENGINE_SPEC.md section 8; build step 8). English only.
   #/figures   cash by currency (Stripe's balance), the last months (revenue by currency, band and product, refunds,
               disputes, new paying customers by channel; worked out on the 1st by /api/pricing?action=cron-finance),
               deferred revenue of packs and the exam-guarantee reserve, margin per room (teacher pay and video as in
               docs/LAUNCH_PRICING_SPEC.md section 7, before tax and card fees), room size, refund and dispute rates,
               the cost to win a customer by channel (spend entered here), AI cost against revenue, founding seats and
               how far each currency has moved since the prices were set. Every number comes from Stripe or the
               database; nothing is estimated in the browser. */
(function () {
  'use strict';
  var A = null, root = null, FG = null, FLASH = '', bound = false;
  var PRODUCT = { app: 'App', open_en: 'Open class, English', open_de: 'Open class, German', level_en: 'Level pack, English', level_de: 'Level pack, German', intensive_en: 'Intensive pack, English',
    exam_en: 'Exam pack, English', exam_de: 'Exam pack, German', help_class: 'Help class', trial: 'Trial class', minutes_30: 'Voice minutes 30', minutes_120: 'Voice minutes 120', other: 'Other' };

  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real'; }
  function money(minor, cur) {
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: String(cur || 'eur').toUpperCase(), maximumFractionDigits: 2 }).format((Number(minor) || 0) / 100);
  }
  function eur(n) { return n == null ? 'not known' : new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'EUR' }).format(Number(n) || 0); }
  function pct(x) { return x == null ? 'not known' : (Math.round(x * 1000) / 10) + '%'; }
  function monthName(m) { var p = String(m).split('-'); return A.fmt(new Date(+p[0], +p[1] - 1, 1), { month: 'long', year: 'numeric' }); }
  function card(i, id, title, body) { return '<section class="card span-12" style="--i:' + i + '" aria-labelledby="fg-' + id + '"><h2 class="t-h2" id="fg-' + id + '">' + esc(title) + '</h2>' + body + '</section>'; }
  function p(text) { return '<p class="t-body" style="margin-top:8px">' + esc(text) + '</p>'; }
  function row(left, main, small) { return '<div class="tt-row"><span class="tt-row__time">' + esc(left) + '</span><span><b>' + esc(main) + '</b>' + (small ? '<small>' + esc(small) + '</small>' : '') + '</span></div>'; }
  function list(rows) { return rows.length ? '<div class="tt-week" style="margin-top:12px">' + rows.join('') + '</div>' : ''; }
  function loading() { return '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="Loading">' + A.loaderInner() + '</div></div>'; }

  function sample() {
    var m = function (n) { var d = new Date(); d.setDate(1); d.setMonth(d.getMonth() - n); return d.toISOString().slice(0, 10); };
    return { cash: { eur: { available: 182040, pending: 41900 }, mad: { available: 1250000, pending: 0 } },
      months: [{ month: m(1), charges: 64, refunded: 2, disputes: 0, deferred_eur: 3120.5, reserve_eur: 41.2, new_customers: { instagram: 9, google: 4, unknown: 3 },
        revenue: { eur: { total: 412300, byBand: { A: 380100, B: 32200 }, byProduct: { level_de: 210000, exam_en: 82400, app: 64900, minutes_30: 5000 } }, mad: { total: 1521000, byBand: { B: 1521000 }, byProduct: { level_en: 1521000 } } },
        refunds: { eur: 15800 } }],
      deferredEur: 2890.4, reserveEur: 41.2,
      rooms: [{ product: 'level_de', level: 'B1', state: 'running', learners: 11, max: 12, revenuePerClass: 63.9, payPerClass: 23.69, videoPerClass: 2.66, marginPerClass: 37.55, marginShare: 0.588 },
        { product: 'level_en', level: 'A2', state: 'open', learners: 8, max: 12, revenuePerClass: 39.8, payPerClass: 14.42, videoPerClass: 2.0, marginPerClass: 23.38, marginShare: 0.587 }],
      avgRoomSize: 9.5, lastMonth: { month: m(1), refundRate: 0.031, disputeRate: 0 },
      cac: { instagram: { spend: 420, customers: 9, perCustomer: 46.67 }, google: { spend: 300, customers: 4, perCustomer: 75 }, unknown: { spend: 0, customers: 3, perCustomer: 0 } },
      spend: [{ id: 1, month: m(1), channel: 'instagram', amount_eur: 420, note: 'Reels' }, { id: 2, month: m(1), channel: 'google', amount_eur: 300, note: null }],
      ai: { costUsd30: 61.2, revenueEur30: 5210.4, share: 0.0107 }, founding: { used: 37, cap: 500, closesAt: '2027-01-01T00:00:00Z' },
      drift: { usd: { then: 1.1127, now: 1.098, drift: -0.0132, flagged: false }, mad: { then: 11, now: 10.9, drift: -0.0091, flagged: false } } };
  }

  function view() {
    var f = FG, i = 0, html = (FLASH ? '<p class="t-body st-msg ad-flash" role="status">' + esc(FLASH) + '</p>' : '') +
      '<div class="view__head"><div><h1 class="t-h1">Figures</h1><p class="t-lead">From Stripe and the database when this page opens. The month rows are worked out on the 1st of each month.</p></div></div><div class="grid rise">';
    FLASH = '';

    var cash = f.cash ? Object.keys(f.cash).map(function (c) { return row(c.toUpperCase(), money(f.cash[c].available, c) + ' available', money(f.cash[c].pending, c) + ' on its way'); }) : [];
    html += card(i++, 'cash', 'Cash in Stripe', cash.length ? list(cash) : p('Stripe’s balance could not be read.'));

    html += card(i++, 'owed', 'Owed and set aside', p('Deferred revenue: ' + eur(f.deferredEur) + ', what learners have paid for pack classes not given yet. Exam-guarantee reserve: ' + eur(f.reserveEur) + ', 5% of exam-pack revenue, kept aside.'));

    var months = (f.months || []).map(function (m) {
      var parts = Object.keys(m.revenue || {}).map(function (c) {
        var r = m.revenue[c], bands = Object.keys(r.byBand || {}).map(function (b) { return 'Band ' + b + ' ' + money(r.byBand[b], c); }).join(', ');
        var prods = Object.keys(r.byProduct || {}).sort(function (a, b) { return r.byProduct[b] - r.byProduct[a]; }).map(function (k) { return (PRODUCT[k] || k) + ' ' + money(r.byProduct[k], c); }).join(', ');
        return money(r.total, c) + ' (' + bands + '; ' + prods + ')';
      });
      var refunds = Object.keys(m.refunds || {}).map(function (c) { return money(m.refunds[c], c); }).join(', ') || 'none';
      var fresh = Object.keys(m.new_customers || {}).map(function (k) { return k + ' ' + m.new_customers[k]; }).join(', ') || 'none';
      return row(monthName(m.month), parts.join('; ') || 'No payments.', A.plural(m.charges, 'payment', 'payments') + '. Refunds ' + refunds + ' (' + m.refunded + '). Disputes ' + m.disputes + '. New paying customers by channel: ' + fresh + '. Deferred revenue at the time ' + eur(m.deferred_eur) + ', reserve ' + eur(m.reserve_eur) + '.');
    });
    html += card(i++, 'months', 'Months', months.length ? list(months) : p('No month has been worked out yet. The first is worked out on the 1st, or the day after this goes live.'));

    var rooms = (f.rooms || []).map(function (r) {
      return row((PRODUCT[r.product] || r.product) + ' ' + r.level, r.learners + ' of ' + r.max + ' learners, margin ' + eur(r.marginPerClass) + ' a class (' + pct(r.marginShare) + ')',
        'Per class: revenue ' + eur(r.revenuePerClass) + ', teacher ' + eur(r.payPerClass) + ', video ' + eur(r.videoPerClass) + '. ' + (r.state === 'running' ? 'Running.' : 'Open, starts soon.'));
    });
    html += card(i++, 'rooms', 'Rooms', (rooms.length ? p('Average room: ' + f.avgRoomSize + ' learners. Margins are before tax and card fees; teacher pay follows the launch spec’s rates, payouts are still entered by you.') + list(rooms) : p('No open or running rooms.')));

    var lm = f.lastMonth;
    html += card(i++, 'rates', 'Refunds and disputes', lm ? p(monthName(lm.month) + ': ' + pct(lm.refundRate) + ' of payments refunded, ' + pct(lm.disputeRate) + ' disputed.') : p('Shown once a month has been worked out.'));

    var cac = f.cac ? Object.keys(f.cac).map(function (ch) { var x = f.cac[ch]; return row(ch, x.perCustomer == null ? 'No new customers' : eur(x.perCustomer) + ' a customer', eur(x.spend) + ' spent, ' + A.plural(x.customers, 'new customer', 'new customers') + (lm ? ' in ' + monthName(lm.month) : '') + '.'); }) : [];
    var spendRows = (f.spend || []).map(function (s) {
      return '<div class="tt-row"><span class="tt-row__time">' + esc(monthName(s.month)) + '</span><span><b>' + esc(s.channel + ' ' + eur(s.amount_eur)) + '</b>' + (s.note ? '<small>' + esc(s.note) + '</small>' : '') + '</span>' +
        '<span class="btn-row"><button class="btn btn--quiet btn--sm" type="button" data-fg-remove="' + esc(s.id) + '">Remove</button></span></div>';
    });
    var now = new Date(), lastM = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    var form = '<form class="st-form" data-fg-spend style="margin-top:14px"><div class="st-row">' +
      '<label class="st-field"><span class="st-lbl">Month</span><input class="st-in" type="month" name="month" required value="' + esc(lastM.getFullYear() + '-' + String(lastM.getMonth() + 1).padStart(2, '0')) + '"></label>' +
      '<label class="st-field"><span class="st-lbl">Channel</span><input class="st-in" name="channel" required placeholder="as in the sign-up source, e.g. instagram"></label>' +
      '<label class="st-field"><span class="st-lbl">Spent (EUR)</span><input class="st-in" type="number" name="amount_eur" min="0" step="0.01" required></label></div>' +
      '<label class="st-field"><span class="st-lbl">Note</span><input class="st-in" name="note" maxlength="300"></label>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="submit">Save the spend</button></div><p class="t-small st-msg" data-msg aria-live="polite"></p></form>';
    html += card(i++, 'cac', 'Cost to win a paying customer', p('Spend per channel and month, divided by the new paying customers whose sign-up came from that channel (the UTM source, or what they said in the sign-up question).') +
      list(cac) + list(spendRows) + form);

    var ai = f.ai || {};
    html += card(i++, 'ai', 'AI against revenue, last 30 days', p('AI cost $' + (ai.costUsd30 == null ? '?' : ai.costUsd30) + ' against revenue of ' + eur(ai.revenueEur30) + ' after refunds: ' + pct(ai.share) + '. The target is under 30% of each plan’s net revenue.'));

    var fo = f.founding || {};
    html += card(i++, 'founding', 'Founding seats', p(fo.used + ' of ' + fo.cap + ' founding seats used. The founding price closes on ' + (fo.closesAt ? A.fmt(fo.closesAt, { day: 'numeric', month: 'long', year: 'numeric' }) : '?') + '.'));

    var dr = Object.keys(f.drift || {}).map(function (c) { var d = f.drift[c]; return row(c.toUpperCase(), (d.drift > 0 ? '+' : '') + (Math.round(d.drift * 1000) / 10) + '% since the prices were set' + (d.flagged ? ', past the 7% line' : ''), d.then + ' then, ' + d.now + ' now, per euro.'); });
    html += card(i++, 'fx', 'Currencies since the prices were set', dr.length ? p('Rates are stored once a week (ECB, and an aggregator for the dirham). Past 7%, you get an email and local prices may need new amounts.') + list(dr) : p('The first weekly rates are stored by the next finance run.'));

    if (!real()) html += '<p class="t-tiny span-12">This is sample data; nothing here is saved or sent.</p>';
    return html + '</div>';
  }

  function bind() {
    if (bound) return;
    bound = true;
    root.addEventListener('submit', function (e) {
      var f = e.target.closest('[data-fg-spend]');
      if (!f) return;
      e.preventDefault();
      var fd = new FormData(f), msg = f.querySelector('[data-msg]'), btn = f.querySelector('[type="submit"]');
      if (!real()) { msg.textContent = 'This is sample data; nothing is saved.'; return; }
      btn.disabled = true;
      window.AlimunData.adminSpend({ month: fd.get('month'), channel: fd.get('channel'), amount_eur: Number(fd.get('amount_eur')), note: fd.get('note') || undefined })
        .then(function () { FLASH = 'The spend was saved.'; FG = null; A.rerender(); }, function (er) { btn.disabled = false; msg.textContent = 'Not saved: ' + ((er && er.message) || 'please try again') + '.'; });
    });
    root.addEventListener('click', function (e) {
      var b = e.target.closest('[data-fg-remove]');
      if (!b || b.disabled) return;
      if (!real()) return;
      b.disabled = true;
      window.AlimunData.adminSpend({ id: +b.getAttribute('data-fg-remove'), remove: true }).then(function () { FLASH = 'The spend was removed.'; FG = null; A.rerender(); }, function () { b.disabled = false; });
    });
  }

  var no = 0;
  function mount(view_, parts, helpers) {
    var my = ++no;
    A = helpers; root = view_;
    bind();
    if (!root.innerHTML) root.innerHTML = loading();
    var go = real() ? window.AlimunData.adminFigures() : Promise.resolve(sample());
    return go.then(function (d) {
      if (my !== no) return { stale: true };
      FG = d;
      var html = view();
      root.innerHTML = html;
      return { html: html, title: 'Figures' };
    }).catch(function (e) {
      console.warn('[Alimun] Figures did not load', e && e.message);
      if (my === no) root.innerHTML = '<div class="card"><p class="t-body">The figures did not load: ' + esc((e && e.message) || 'please try again') + '.</p></div>';
      return { stale: true };
    });
  }
  window.AlimunAdminFigures = { mount: mount, reset: function () { FG = null; } };
})();
