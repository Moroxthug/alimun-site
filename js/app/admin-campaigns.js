/* Alimun admin: campaigns (docs/GROWTH_PLAN.md step 4b). English only.
   #/campaigns  write a message (subject, heading, text, an optional button to a page on alimun.com, a header picture),
                choose who gets it (students or teachers, language, level, countries, free or paying, recently active or
                quiet), see how many people that is, send a test to yourself, then send by email and/or the dashboard
                bell. Below: past campaigns with how many got it and how many clicked.
   Only people whose latest choice is news-and-offers "yes" (16 or older) can be in the audience; the server
   (api/campaigns.js) checks the admin and the audience again and asks to confirm the exact count.
   Layouts (owner, 8 Nov 2026: "add the templates to the admin campaigns page"): announcement, offer (the lime card with
   price and code), newsletter (up to four pieces with pictures) and event (details panel), with a preview of the email
   as it will look. Footer newsletter sign-ups can be added to email campaigns. Banners: strip, card or panel on the
   site, the student dashboard or both, saved switched off with preview links, then switched on or stopped here. */
(function () {
  'use strict';
  var A = null, root = null, PAST = null, COUNT = null, timer = null, BANNERS = null, ptimer = null;
  var LAYOUTS = [['announcement', 'Announcement: text and a button'], ['offer', 'Offer: price and code in a lime card'], ['newsletter', 'Newsletter: up to four short pieces'], ['event', 'Event: when, where and how long']];
  var ORD = ['First', 'Second', 'Third', 'Fourth'];
  var UI_LANGS = [['es', 'Spanish'], ['fr', 'French'], ['de', 'German'], ['pt', 'Portuguese'], ['it', 'Italian'], ['zh', 'Chinese'], ['ar', 'Arabic']];
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
      field('Layout', '<select class="st-in" name="template">' + LAYOUTS.map(function (l) { return opt(l[0], l[1], 'announcement'); }).join('') + '</select>', 'Every layout has the picture, the heading, your text and the button; the offer, newsletter and event layouts add their own part below the text.') +
      field('Subject', '<input class="st-in" name="subject" maxlength="200" required>', 'What people see in their inbox.') +
      field('Heading', '<input class="st-in" name="heading" maxlength="140" required>', 'The big title in the email, and the line in the bell.') +
      field('Text', '<textarea class="st-in tc-ta" name="body" rows="7" maxlength="5000" required></textarea>', 'Plain text. A blank line starts a new paragraph. Each email starts with "Hello" and the person’s first name.') +
      '<div class="st-row">' + field('Button label (optional)', '<input class="st-in" name="button_label" maxlength="60">') +
        field('Button link', '<input class="st-in" name="button_link" maxlength="500" placeholder="https://alimun.com/…">', 'Only pages on alimun.com. Clicks are counted.') + '</div>' +
      field('Header picture', '<select class="st-in" name="hero">' + HEROES.map(function (h) { return opt(h[0], h[1], 'default'); }).join('') + '</select>') +
      '<fieldset class="st-field" data-tpl="offer" hidden><legend class="st-lbl">The offer card</legend>' +
        field('Headline', '<input class="st-in" name="o_headline" maxlength="60" placeholder="Half price">', 'The big words in the lime card.') +
        '<div class="st-row">' + field('Old price (optional)', '<input class="st-in" name="o_was" maxlength="60" placeholder="€49 a month">', 'Shown crossed out.') +
          field('New price (optional)', '<input class="st-in" name="o_now" maxlength="60" placeholder="€24.50 for your first month">') + '</div>' +
        field('Code (optional)', '<input class="st-in" name="o_code" maxlength="30" placeholder="FOCUSED50">', 'It must exist in Stripe as a promotion code, or it will not work at checkout. Letters, numbers, - and _.') +
        field('When it ends (optional)', '<input class="st-in" name="o_ends" maxlength="160" placeholder="The offer ends on Sunday 8 November at midnight.">') +
      '</fieldset>' +
      '<fieldset class="st-field" data-tpl="newsletter" hidden><legend class="st-lbl">The pieces</legend><span class="t-small st-hint">Fill in one to four. Leave the others empty.</span>' +
        ORD.map(function (o, i) {
          return '<details class="ad-details"' + (i === 0 ? ' open' : '') + '><summary>' + o + ' piece</summary>' +
            field('Title', '<input class="st-in" name="s' + i + '_title" maxlength="100">') +
            field('Text', '<textarea class="st-in" name="s' + i + '_text" rows="3" maxlength="600"></textarea>') +
            '<div class="st-row">' + field('Link label (optional)', '<input class="st-in" name="s' + i + '_link_label" maxlength="40">') +
              field('Link', '<input class="st-in" name="s' + i + '_link" maxlength="500" placeholder="https://alimun.com/…">') + '</div>' +
            field('Picture', '<select class="st-in" name="s' + i + '_hero">' + opt('', 'No picture') + HEROES.map(function (h) { return opt(h[0], h[1]); }).join('') + '</select>') +
          '</details>';
        }).join('') +
      '</fieldset>' +
      '<fieldset class="st-field" data-tpl="event" hidden><legend class="st-lbl">The details</legend><span class="t-small st-hint">For example When, Where and How long. Empty rows are left out.</span>' +
        [0, 1, 2, 3, 4].map(function (i) {
          return '<div class="st-row">' + field('Label', '<input class="st-in" name="f' + i + '_l" maxlength="40"' + (i < 3 ? ' placeholder="' + ['When', 'Where', 'How long'][i] + '"' : '') + '>') +
            field('Detail', '<input class="st-in" name="f' + i + '_v" maxlength="120">') + '</div>';
        }).join('') +
      '</fieldset>' +
      '<fieldset class="st-field"><legend class="st-lbl">Send by</legend><div class="st-ticks">' +
        '<label class="st-day"><input type="checkbox" name="ch_email" checked><span>Email</span></label>' +
        '<label class="st-day"><input type="checkbox" name="ch_inapp" checked><span>The bell in their dashboard</span></label></div></fieldset>' +
      '<div class="btn-row"><button class="btn btn--ghost btn--sm" type="button" data-camp-preview>Preview</button><button class="btn btn--ghost btn--sm" type="button" data-camp-test>Send a test to me</button></div><p class="t-small st-msg" data-msg="test" aria-live="polite"></p>' +
      '<div data-preview hidden><iframe title="Email preview" sandbox="" style="width:100%;height:760px;border:0;border-radius:18px;background:#f0efe9;margin-top:10px"></iframe></div></form>';
    html += '<form class="card span-5 st-form" style="--i:1;max-width:none;margin-top:0" data-aud><h2 class="t-h2">Who gets it</h2>' +
      field('People', '<select class="st-in" name="role">' + opt('', 'Students and teachers') + opt('student', 'Students') + opt('teacher', 'Teachers') + '</select>') +
      '<div class="st-row">' + field('Course', '<select class="st-in" name="language">' + opt('', 'Any') + LANGS.map(function (l) { return opt(l, l); }).join('') + '</select>') +
        field('Level', '<select class="st-in" name="level">' + opt('', 'Any') + LEVELS.map(function (l) { return opt(l, l); }).join('') + '</select>') + '</div>' +
      field('Dashboard language', '<select class="st-in" name="ui_lang">' + opt('', 'Any') + [['en', 'English'], ['es', 'Spanish'], ['fr', 'French'], ['de', 'German'], ['pt', 'Portuguese'], ['it', 'Italian'], ['zh', 'Chinese'], ['ar', 'Arabic'], ['ma', 'French (Morocco)']].map(function (l) { return opt(l[0], l[1]); }).join('') + '</select>', 'Write the message in this language. The greeting and the email\u2019s own lines follow each person\u2019s dashboard language; people who have not opened their dashboard since 7 Nov count as English.') +
      field('Countries', '<input class="st-in" name="countries" placeholder="e.g. IT, MA, DE">', 'Two-letter codes, separated by commas. Empty: every country.') +
      field('Plan', '<select class="st-in" name="plan">' + opt('', 'Any') + opt('free', 'Free plan') + opt('paying', 'Paying') + '</select>') +
      '<div class="st-row">' + field('Active in the last … days', '<input class="st-in" type="number" name="active_within_days" min="1" max="400">') +
        field('Or quiet for … days', '<input class="st-in" type="number" name="inactive_for_days" min="1" max="400">') + '</div>' +
      '<label class="st-day" style="margin-top:6px"><input type="checkbox" name="welcome_poll"><span>Only students who answered the welcome poll</span></label>' +
      '<label class="st-day" style="margin-top:6px"><input type="checkbox" name="include_newsletter" checked><span>Newsletter sign-ups too (email only)</span></label>' +
      '<span class="t-small st-hint">People who signed up with the footer form since it says news and offers. Left out when you choose people, course, level, countries, plan, activity or the welcome poll, since sign-ups have none of these.</span>' +
      '<div class="ad-count" data-count aria-live="polite">' + loading() + '</div>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-camp-send disabled>Send</button></div><p class="t-small st-msg" data-msg="send" aria-live="polite"></p>' +
      '<div data-confirm></div></form>';
    html += '<section class="card span-12" style="--i:2"><h2 class="t-h2">Sent</h2><div data-past>' + pastHtml() + '</div></section>';
    html += bannerFormHtml();
    html += '<section class="card span-12" style="--i:4"><h2 class="t-h2">Banners</h2><div data-banners>' + bannersHtml() + '</div><p class="t-small st-msg" data-msg="blist" aria-live="polite"></p></section>';
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
    var g = function (k) { return String(f.get(k) || '').trim(); };
    var m = { template: g('template') || 'announcement', subject: g('subject'), heading: g('heading'), body: g('body'), button_label: g('button_label'), button_link: g('button_link'), hero: g('hero') };
    if (m.template === 'offer') m.offer = { headline: g('o_headline'), was: g('o_was'), now: g('o_now'), code: g('o_code'), ends: g('o_ends') };
    if (m.template === 'newsletter') m.stories = [0, 1, 2, 3].map(function (i) { return { title: g('s' + i + '_title'), text: g('s' + i + '_text'), link_label: g('s' + i + '_link_label'), link: g('s' + i + '_link'), hero: g('s' + i + '_hero') }; })
      .filter(function (x) { return x.title || x.text; });
    if (m.template === 'event') m.facts = [0, 1, 2, 3, 4].map(function (i) { return [g('f' + i + '_l'), g('f' + i + '_v')]; }).filter(function (x) { return x[0] && x[1]; });
    return m;
  }
  function showLayout() {
    var t = root.querySelector('[data-camp] [name="template"]').value;
    Array.prototype.forEach.call(root.querySelectorAll('[data-tpl]'), function (el) { el.hidden = el.getAttribute('data-tpl') !== t; });
  }
  function preview(quiet) {
    var box = root.querySelector('[data-preview]'), frame = box.querySelector('iframe');
    if (!real()) { if (!quiet) say('[data-msg="test"]', 'Sample: the preview needs the real admin page.'); return; }
    var lang = (root.querySelector('[data-aud] [name="ui_lang"]') || {}).value || 'en';
    window.AlimunData.campaignPreview(message(), lang).then(function (r) { box.hidden = false; frame.srcdoc = r.html; if (!quiet) say('[data-msg="test"]', ''); },
      function (e) { if (!quiet) say('[data-msg="test"]', e.message, true); });
  }
  function newsletterOn() { var x = root.querySelector('[data-aud] [name="include_newsletter"]'); return !!(x && x.checked); }
  function channels() {
    var f = root.querySelector('[data-camp]');
    return [f.ch_email.checked ? 'email' : null, f.ch_inapp.checked ? 'inapp' : null].filter(Boolean);
  }
  function filter() {
    var f = new FormData(root.querySelector('[data-aud]')), out = {};
    ['role', 'language', 'level', 'ui_lang', 'plan', 'active_within_days', 'inactive_for_days'].forEach(function (k) { var v = String(f.get(k) || '').trim(); if (v) out[k] = v; });
    var c = String(f.get('countries') || '').toUpperCase().split(/[\s,;]+/).filter(function (x) { return /^[A-Z]{2}$/.test(x); });
    if (c.length) out.countries = c;
    if (f.get('welcome_poll')) out.welcome_poll = true;
    return out;
  }
  function count() {
    var box = root.querySelector('[data-count]'), send = root.querySelector('[data-camp-send]');
    root.querySelector('[data-confirm]').innerHTML = '';
    var get = real() ? window.AlimunData.campaignAudience(filter(), newsletterOn()) : Promise.resolve({ count: 42, people: [{ name: 'Marco Rossi', country: 'IT', language: 'German', level: 'B1' }, { name: 'Aya Benali', country: 'MA', language: 'English', level: 'A2' }] });
    get.then(function (r) {
      COUNT = r.count;
      box.innerHTML = '<p class="t-body"><b class="ac-num">' + esc(String(r.count)) + '</b> ' + esc(r.count === 1 ? 'person' : 'people') + ' asked for news and offers and match' +
        (r.newsletter ? esc(', ' + r.newsletter + ' of them from the newsletter form (email only)') : '') + '.</p>' +
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
    window.AlimunData.campaignSend(message(), filter(), channels(), COUNT, newsletterOn()).then(function (r) {
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
  /* ---------- Banners ---------- */
  function bannerFormHtml() {
    var langs = UI_LANGS.map(function (l) {
      return '<details class="ad-details"><summary>' + esc(l[1]) + '</summary>' +
        field('Heading', '<input class="st-in" name="b_' + l[0] + '_heading" maxlength="80">') +
        field('Text', '<input class="st-in" name="b_' + l[0] + '_text" maxlength="280">') +
        field('Button label', '<input class="st-in" name="b_' + l[0] + '_button_label" maxlength="30">') + '</details>';
    }).join('');
    return '<form class="card span-12 st-form" style="--i:3;max-width:none" data-ban><h2 class="t-h2">New banner</h2>' +
      '<p class="t-small st-hint">A banner on the website, in the student dashboard, or both. It is saved switched off: look at it with the preview links, then switch it on in the list below.</p>' +
      '<div class="st-row">' + field('Layout', '<select class="st-in" name="template">' + opt('strip', 'Strip: one sentence and a link') + opt('card', 'Card: a small card in the corner') + opt('panel', 'Panel: a wide panel with a picture') + '</select>') +
        field('Where', '<select class="st-in" name="placement">' + opt('site', 'The website') + opt('dashboard', 'The student dashboard') + opt('both', 'Both') + '</select>') + '</div>' +
      '<div class="st-row">' + field('Heading', '<input class="st-in" name="b_en_heading" maxlength="80">', 'Not shown in a strip.') +
        field('Picture', '<select class="st-in" name="hero">' + opt('', 'No picture') + HEROES.map(function (h) { return opt(h[0], h[1]); }).join('') + '</select>', 'Card and panel only.') + '</div>' +
      field('Text', '<input class="st-in" name="b_en_text" maxlength="280" required>', 'One or two sentences (a strip takes up to 160 characters).') +
      '<div class="st-row">' + field('Button label (optional)', '<input class="st-in" name="b_en_button_label" maxlength="30">') +
        field('Link', '<input class="st-in" name="link" maxlength="500" placeholder="https://alimun.com/…">', 'Only pages on alimun.com. Clicks are counted.') + '</div>' +
      '<div class="st-row">' + field('Starts', '<input class="st-in" type="datetime-local" name="starts_at">', 'Empty: as soon as you switch it on.') +
        field('Ends (optional)', '<input class="st-in" type="datetime-local" name="ends_at">', 'Your computer\u2019s time zone.') + '</div>' +
      '<fieldset class="st-field"><legend class="st-lbl">Other languages (optional)</legend><span class="t-small st-hint">Visitors and students see their language when it is filled in here, and English otherwise.</span>' + langs + '</fieldset>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-ban-save>Save switched off</button></div><p class="t-small st-msg" data-msg="ban" aria-live="polite"></p><div data-ban-links></div></form>';
  }
  function bannerData() {
    var f = new FormData(root.querySelector('[data-ban]'));
    var g = function (k) { return String(f.get(k) || '').trim(); };
    var when = function (k) { var v = g(k); return v ? new Date(v).toISOString() : null; };
    var messages = {};
    [['en']].concat(UI_LANGS).forEach(function (l) {
      var x = { heading: g('b_' + l[0] + '_heading'), text: g('b_' + l[0] + '_text'), button_label: g('b_' + l[0] + '_button_label') };
      if (x.heading || x.text || x.button_label) messages[l[0]] = x;
    });
    return { template: g('template'), placement: g('placement'), hero: g('hero') || null, link: g('link') || null, starts_at: when('starts_at'), ends_at: when('ends_at'), messages: messages };
  }
  function previewLinksHtml(p) {
    return '<p class="t-small" style="margin-top:8px">Preview: <a href="' + esc(p.site) + '" target="_blank" rel="noopener">on the website</a> or <a href="' + esc(p.dashboard) + '" target="_blank" rel="noopener">in the student dashboard</a>.</p>';
  }
  function bannerState(b) {
    var now = Date.now();
    if (b.ends_at && new Date(b.ends_at).getTime() <= now) return 'Ended';
    if (!b.active) return 'Switched off';
    return new Date(b.starts_at).getTime() > now ? 'Switched on, starts ' + day(b.starts_at) : 'Showing now';
  }
  function bannersHtml() {
    if (!BANNERS) return loading();
    if (!BANNERS.length) return '<p class="t-body" style="margin-top:8px">No banners yet.</p>';
    var where = { site: 'the website', dashboard: 'the student dashboard', both: 'the website and the dashboard' };
    return '<div class="tt-week">' + BANNERS.map(function (b) {
      var m = (b.messages && b.messages.en) || {};
      var langs = Object.keys(b.messages || {}).filter(function (k) { return k !== 'en'; });
      var info = [bannerState(b), b.template + ' on ' + (where[b.placement] || b.placement), b.ends_at ? 'until ' + day(b.ends_at) : 'no end date',
        b.clicks + (b.clicks === 1 ? ' click' : ' clicks'), langs.length ? 'also in ' + langs.join(', ') : ''].filter(Boolean).join(', ');
      var ended = b.ends_at && new Date(b.ends_at).getTime() <= Date.now();
      return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(b.active && !ended ? 'On' : 'Off') + '</span><span><b>' + esc(m.heading || m.text || '') + '</b><small>' + esc(info) + '</small>' +
        previewLinksHtml(b.preview) +
        (ended ? '' : '<div class="btn-row" style="margin-top:6px">' + (b.active ? '<button class="btn btn--quiet btn--sm" type="button" data-ban-stop="' + esc(b.id) + '">Stop</button>'
          : '<button class="btn btn--primary btn--sm" type="button" data-ban-on="' + esc(b.id) + '">Switch on</button>') + '</div>') + '</span></div>';
    }).join('') + '</div>';
  }
  function loadBanners() {
    var get = real() ? window.AlimunData.banners() : Promise.resolve([{ id: 'x', template: 'card', placement: 'both', active: false, clicks: 0, starts_at: new Date().toISOString(), ends_at: null,
      messages: { en: { heading: 'Evening classes', text: 'Small classes at 19:00.' } }, preview: { site: '#', dashboard: '#' } }]);
    get.then(function (list) { BANNERS = list; var b = root && root.querySelector('[data-banners]'); if (b) b.innerHTML = bannersHtml(); },
      function (e) { var b = root && root.querySelector('[data-banners]'); if (b) b.innerHTML = '<p class="t-body">Banners did not load: ' + esc(e.message) + '.</p>'; });
  }
  function saveBanner(btn) {
    if (!real()) { say('[data-msg="ban"]', 'Sample: nothing was saved.'); return; }
    btn.disabled = true; say('[data-msg="ban"]', 'Saving…');
    window.AlimunData.bannerSave(bannerData()).then(function (r) {
      btn.disabled = false; say('[data-msg="ban"]', 'Saved, switched off.');
      root.querySelector('[data-ban-links]').innerHTML = previewLinksHtml(r.preview);
      loadBanners();
    }, function (e) { btn.disabled = false; say('[data-msg="ban"]', e.message, true); });
  }
  function switchBanner(btn, id, on) {
    if (!real()) { say('[data-msg="blist"]', 'Sample: nothing was changed.'); return; }
    btn.disabled = true;
    window.AlimunData.bannerSwitch(id, on).then(function () { say('[data-msg="blist"]', on ? 'Switched on. Visitors see it within a minute.' : 'Stopped. It disappears within a minute.'); loadBanners(); },
      function (e) { btn.disabled = false; say('[data-msg="blist"]', e.message, true); });
  }

  function bind() {
    if (root.__camp) return;
    root.__camp = true;
    root.addEventListener('input', function (e) {
      if (e.target.closest('[data-aud]')) { clearTimeout(timer); timer = setTimeout(count, 500); }
      // Keep an open preview up to date while typing.
      if (e.target.closest('[data-camp]') && !root.querySelector('[data-preview]').hidden) { clearTimeout(ptimer); ptimer = setTimeout(function () { preview(true); }, 700); }
    });
    root.addEventListener('change', function (e) {
      if (e.target.closest('[data-aud]')) { clearTimeout(timer); timer = setTimeout(count, 200); }
      if (e.target.name === 'template' && e.target.closest('[data-camp]')) showLayout();
    });
    root.addEventListener('submit', function (e) { if (e.target.closest('[data-camp], [data-aud], [data-ban]')) e.preventDefault(); });
    root.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b || b.disabled) return;
      if (b.hasAttribute('data-camp-test')) test(b);
      else if (b.hasAttribute('data-camp-preview')) preview(false);
      else if (b.hasAttribute('data-ban-save')) saveBanner(b);
      else if (b.hasAttribute('data-ban-on')) switchBanner(b, b.getAttribute('data-ban-on'), true);
      else if (b.hasAttribute('data-ban-stop')) switchBanner(b, b.getAttribute('data-ban-stop'), false);
      else if (b.hasAttribute('data-camp-send')) ask();
      else if (b.hasAttribute('data-camp-go')) go(b);
      else if (b.hasAttribute('data-camp-no')) root.querySelector('[data-confirm]').innerHTML = '';
    });
  }
  function mount(v, parts, helpers) {
    A = helpers; root = v; PAST = null; BANNERS = null;
    bind();
    root.innerHTML = view();
    showLayout();
    count(); loadPast(); loadBanners();
    return Promise.resolve({ title: 'Campaigns' });
  }
  window.AlimunAdminCampaigns = { mount: mount, reset: function () {} };
})();
