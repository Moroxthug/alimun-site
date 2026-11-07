/* Alimun admin: campaigns (docs/GROWTH_PLAN.md step 4b). English only.
   #/campaigns  write a message (subject, heading, text, an optional button to a page on alimun.com, a header picture),
                choose who gets it (students or teachers, language, level, countries, free or paying, recently active or
                quiet), see how many people that is, send a test to yourself, then send by email and/or the dashboard
                bell. Below: past campaigns with how many got it and how many clicked.
   Only people whose latest choice is news-and-offers "yes" (16 or older) can be in the audience; the server
   (api/campaigns.js) checks the admin and the audience again and asks to confirm the exact count. */
(function () {
  'use strict';
  var A = null, root = null, PAST = null, COUNT = null, timer = null;
  var HEROES = [['default', 'The Alimun book'], ['welcome', 'The book saying Welcome!'], ['class', 'The book with a calendar'], ['class-english', 'Tea (English)'],
    ['class-german', 'Pretzel (German)'], ['class-french', 'Croissant (French)'], ['class-spanish', 'Churro (Spanish)'], ['class-italian', 'Pizza (Italian)'],
    ['class-portuguese', 'Nata (Portuguese)'], ['place', 'A ticket'], ['plan', 'A rising chart'], ['notes', 'Books and a pencil'], ['message', 'The parrot with a letter'],
    ['session', 'An alarm clock'], ['ended', 'The book asleep with a mug']];
  var LANGS = ['English', 'German', 'Spanish', 'French', 'Portuguese', 'Italian', 'Mandarin', 'Japanese', 'Arabic'];
  var LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real'; }
  function opt(v, label, cur) { return '<option value="' + esc(v) + '"' + (String(v) === String(cur || '') ? ' selected' : '') + '>' + esc(label) + '</option>'; }
  function field(label, control, hint) { return '<label class="st-field"><span class="st-lbl">' + esc(label) + '</span>' + control + (hint ? '<span class="t-small st-hint">' + esc(hint) + '</span>' : '') + '</label>'; }
  function loading() { return '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="Loading">' + A.loaderInner() + '</div></div>'; }
  function say(sel, text, bad) { var el = root.querySelector(sel); if (el) { el.textContent = text; el.classList.toggle('is-bad', !!bad); } }
  function day(d) { return A.fmt(d, { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }); }

  function view() {
    var html = '<div class="view__head"><div><h1 class="t-h1">Campaigns</h1><p class="t-lead">News and offers, by email and in the dashboard bell. Only people who are 16 or older and asked for news and offers can get them; every email has their own link to stop.</p></div></div><div class="grid rise">';
    html += '<form class="card span-7 st-form" style="--i:0;max-width:none;margin-top:0" data-camp><h2 class="t-h2">Message</h2>' +
      field('Subject', '<input class="st-in" name="subject" maxlength="200" required>', 'What people see in their inbox.') +
      field('Heading', '<input class="st-in" name="heading" maxlength="140" required>', 'The big title in the email, and the line in the bell.') +
      field('Text', '<textarea class="st-in tc-ta" name="body" rows="7" maxlength="5000" required></textarea>', 'Plain text. A blank line starts a new paragraph. Each email starts with "Hello" and the person’s first name.') +
      '<div class="st-row">' + field('Button label (optional)', '<input class="st-in" name="button_label" maxlength="60">') +
        field('Button link', '<input class="st-in" name="button_link" maxlength="500" placeholder="https://alimun.com/…">', 'Only pages on alimun.com. Clicks are counted.') + '</div>' +
      field('Header picture', '<select class="st-in" name="hero">' + HEROES.map(function (h) { return opt(h[0], h[1], 'default'); }).join('') + '</select>') +
      '<fieldset class="st-field"><legend class="st-lbl">Send by</legend><div class="st-ticks">' +
        '<label class="st-day"><input type="checkbox" name="ch_email" checked><span>Email</span></label>' +
        '<label class="st-day"><input type="checkbox" name="ch_inapp" checked><span>The bell in their dashboard</span></label></div></fieldset>' +
      '<div class="btn-row"><button class="btn btn--ghost btn--sm" type="button" data-camp-test>Send a test to me</button></div><p class="t-small st-msg" data-msg="test" aria-live="polite"></p></form>';
    html += '<form class="card span-5 st-form" style="--i:1;max-width:none;margin-top:0" data-aud><h2 class="t-h2">Who gets it</h2>' +
      field('People', '<select class="st-in" name="role">' + opt('', 'Students and teachers') + opt('student', 'Students') + opt('teacher', 'Teachers') + '</select>') +
      '<div class="st-row">' + field('Course', '<select class="st-in" name="language">' + opt('', 'Any') + LANGS.map(function (l) { return opt(l, l); }).join('') + '</select>') +
        field('Level', '<select class="st-in" name="level">' + opt('', 'Any') + LEVELS.map(function (l) { return opt(l, l); }).join('') + '</select>') + '</div>' +
      field('Dashboard language', '<select class="st-in" name="ui_lang">' + opt('', 'Any') + [['en', 'English'], ['es', 'Spanish'], ['fr', 'French'], ['de', 'German'], ['pt', 'Portuguese'], ['it', 'Italian'], ['zh', 'Chinese'], ['ar', 'Arabic'], ['ma', 'French (Morocco)']].map(function (l) { return opt(l[0], l[1]); }).join('') + '</select>', 'Write the message in this language. The greeting and the email\u2019s own lines follow each person\u2019s dashboard language; people who have not opened their dashboard since 7 Nov count as English.') +
      field('Countries', '<input class="st-in" name="countries" placeholder="e.g. IT, MA, DE">', 'Two-letter codes, separated by commas. Empty: every country.') +
      field('Plan', '<select class="st-in" name="plan">' + opt('', 'Any') + opt('free', 'Free plan') + opt('paying', 'Paying') + '</select>') +
      '<div class="st-row">' + field('Active in the last … days', '<input class="st-in" type="number" name="active_within_days" min="1" max="400">') +
        field('Or quiet for … days', '<input class="st-in" type="number" name="inactive_for_days" min="1" max="400">') + '</div>' +
      '<div class="ad-count" data-count aria-live="polite">' + loading() + '</div>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-camp-send disabled>Send</button></div><p class="t-small st-msg" data-msg="send" aria-live="polite"></p>' +
      '<div data-confirm></div></form>';
    html += '<section class="card span-12" style="--i:2"><h2 class="t-h2">Sent</h2><div data-past>' + pastHtml() + '</div></section>';
    if (!real()) html += '<p class="t-tiny span-12">This is sample data; nothing here is sent.</p>';
    return html + '</div>';
  }
  function pastHtml() {
    if (!PAST) return loading();
    if (!PAST.length) return '<p class="t-body" style="margin-top:8px">No campaigns yet.</p>';
    return '<div class="tt-week">' + PAST.map(function (c) {
      var by = (c.channels || []).map(function (x) { return x === 'inapp' ? 'bell' : 'email'; }).join(' and ');
      return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(String(c.recipients)) + '</span><span><b>' + esc(c.subject) + '</b><small>' +
        esc([c.sent_at ? day(c.sent_at) : 'not sent', 'by ' + by, (c.channels || []).indexOf('email') > -1 ? c.emailed + ' emailed' : '', c.clicks + (c.clicks === 1 ? ' click' : ' clicks')].filter(Boolean).join(', ')) + '</small></span></div>';
    }).join('') + '</div>';
  }
  function message() {
    var f = new FormData(root.querySelector('[data-camp]'));
    return { subject: f.get('subject'), heading: f.get('heading'), body: f.get('body'), button_label: f.get('button_label'), button_link: f.get('button_link'), hero: f.get('hero') };
  }
  function channels() {
    var f = root.querySelector('[data-camp]');
    return [f.ch_email.checked ? 'email' : null, f.ch_inapp.checked ? 'inapp' : null].filter(Boolean);
  }
  function filter() {
    var f = new FormData(root.querySelector('[data-aud]')), out = {};
    ['role', 'language', 'level', 'ui_lang', 'plan', 'active_within_days', 'inactive_for_days'].forEach(function (k) { var v = String(f.get(k) || '').trim(); if (v) out[k] = v; });
    var c = String(f.get('countries') || '').toUpperCase().split(/[\s,;]+/).filter(function (x) { return /^[A-Z]{2}$/.test(x); });
    if (c.length) out.countries = c;
    return out;
  }
  function count() {
    var box = root.querySelector('[data-count]'), send = root.querySelector('[data-camp-send]');
    root.querySelector('[data-confirm]').innerHTML = '';
    var get = real() ? window.AlimunData.campaignAudience(filter()) : Promise.resolve({ count: 42, people: [{ name: 'Marco Rossi', country: 'IT', language: 'German', level: 'B1' }, { name: 'Aya Benali', country: 'MA', language: 'English', level: 'A2' }] });
    get.then(function (r) {
      COUNT = r.count;
      box.innerHTML = '<p class="t-body"><b class="ac-num">' + esc(String(r.count)) + '</b> ' + esc(r.count === 1 ? 'person' : 'people') + ' asked for news and offers and match.</p>' +
        (r.people && r.people.length ? '<p class="t-small">' + esc(r.people.slice(0, 8).map(function (p) { return p.name || p.email; }).join(', ') + (r.count > 8 ? ' and others.' : '.')) + '</p>' : '');
      send.disabled = !r.count;
    }, function (e) { box.innerHTML = '<p class="t-body">The audience could not be counted: ' + esc(e.message) + '.</p>'; send.disabled = true; });
  }
  function test(btn) {
    btn.disabled = true; say('[data-msg="test"]', 'Sending…');
    if (!real()) { btn.disabled = false; say('[data-msg="test"]', 'Sample: nothing was sent.'); return; }
    window.AlimunData.campaignTest(message(), filter()).then(function (r) { btn.disabled = false; say('[data-msg="test"]', 'Sent to ' + r.sent + '. Check your inbox.'); },
      function (e) { btn.disabled = false; say('[data-msg="test"]', e.message, true); });
  }
  function ask() {
    var m = message(), ch = channels();
    if (!m.subject || !m.heading || !m.body) { say('[data-msg="send"]', 'Write a subject, a heading and the text first.', true); return; }
    if (!ch.length) { say('[data-msg="send"]', 'Choose email, the bell, or both.', true); return; }
    say('[data-msg="send"]', '');
    root.querySelector('[data-confirm]').innerHTML = '<div class="card card--bone ad-confirm"><p class="t-body">Send “' + esc(m.subject) + '” to <b>' + esc(String(COUNT)) + '</b> ' + esc(COUNT === 1 ? 'person' : 'people') +
      ' by ' + esc(ch.map(function (x) { return x === 'inapp' ? 'the dashboard bell' : 'email'; }).join(' and ')) + '? This cannot be undone.</p>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-camp-go>Yes, send now</button><button class="btn btn--quiet btn--sm" type="button" data-camp-no>Not yet</button></div></div>';
  }
  function go(btn) {
    btn.disabled = true; say('[data-msg="send"]', 'Sending…');
    if (!real()) { root.querySelector('[data-confirm]').innerHTML = ''; say('[data-msg="send"]', 'Sample: nothing was sent.'); return; }
    window.AlimunData.campaignSend(message(), filter(), channels(), COUNT).then(function (r) {
      root.querySelector('[data-confirm]').innerHTML = '';
      say('[data-msg="send"]', 'Sent to ' + r.recipients + (r.emailed ? ', ' + r.emailed + ' by email' : '') + (r.inapp ? ', and in their dashboard bell' : '') + '.');
      loadPast();
    }, function (e) {
      btn.disabled = false; say('[data-msg="send"]', e.message, true);
      if (e.status === 409) count();
    });
  }
  function loadPast() {
    var get = real() ? window.AlimunData.campaigns() : Promise.resolve([{ id: 'x', subject: 'New: German B2 evening class', channels: ['email', 'inapp'], recipients: 38, emailed: 38, clicks: 9, sent_at: new Date(Date.now() - 3 * 86400000).toISOString() }]);
    get.then(function (list) { PAST = list; var b = root && root.querySelector('[data-past]'); if (b) b.innerHTML = pastHtml(); }, function (e) { var b = root && root.querySelector('[data-past]'); if (b) b.innerHTML = '<p class="t-body">Past campaigns did not load: ' + esc(e.message) + '.</p>'; });
  }
  function bind() {
    if (root.__camp) return;
    root.__camp = true;
    root.addEventListener('input', function (e) { if (e.target.closest('[data-aud]')) { clearTimeout(timer); timer = setTimeout(count, 500); } });
    root.addEventListener('change', function (e) { if (e.target.closest('[data-aud]')) { clearTimeout(timer); timer = setTimeout(count, 200); } });
    root.addEventListener('submit', function (e) { if (e.target.closest('[data-camp], [data-aud]')) e.preventDefault(); });
    root.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b || b.disabled) return;
      if (b.hasAttribute('data-camp-test')) test(b);
      else if (b.hasAttribute('data-camp-send')) ask();
      else if (b.hasAttribute('data-camp-go')) go(b);
      else if (b.hasAttribute('data-camp-no')) root.querySelector('[data-confirm]').innerHTML = '';
    });
  }
  function mount(v, parts, helpers) {
    A = helpers; root = v; PAST = null;
    bind();
    root.innerHTML = view();
    count(); loadPast();
    return Promise.resolve({ title: 'Campaigns' });
  }
  window.AlimunAdminCampaigns = { mount: mount, reset: function () {} };
})();
