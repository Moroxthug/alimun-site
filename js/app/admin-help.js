/* Alimun admin: Help requests (docs/HELP_PLAN.md, Part 2). English only.
   #/help                 the Support inbox: open, answered and closed conversations, newest first, and what people
                          asked Help in the last 30 days (how often it was sure, what they found helpful, what it missed)
   #/help/list/<status>   one tab: open, answered, closed or all
   #/help/<id>            one conversation: the person, their question to Help if they came from there, every message,
                          and the reply box. A reply goes to their dashboard (bell) and their inbox.
   Data and replies through /api/help (admin actions). Signed out or ?sample=1: a sample where nothing is sent. */
(function () {
  'use strict';
  var A = null, root = null, D = null, Q = { q: '' }, FLASH = '', no = 0;
  var MIN = 60000, HOUR = 3600000;
  var ST = { open: 'Waiting for us', answered: 'Answered', closed: 'Closed' };
  var TOPIC = { classes: 'Live classes', plans: 'Plans and payments', dashboard: 'The dashboard', practice: 'Homework and practice', tutor: 'The tutor', account: 'Account and privacy', teachers: 'Teaching', other: 'Something else' };
  var LANG = { en: 'English', es: 'Spanish', fr: 'French', ma: 'French (Morocco)', de: 'German', pt: 'Portuguese', zh: 'Chinese', ar: 'Arabic', it: 'Italian' };
  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real'; }
  function loading() { return '<div class="rd-loading"><div class="loader" style="--w:56px" role="img" aria-label="Loading">' + A.loaderInner() + '</div></div>'; }
  function back(href, label) { return '<a class="rd-back" href="' + href + '">' + A.icon('back') + '<span>' + esc(label) + '</span></a>'; }
  function flash() { var f = FLASH; FLASH = ''; return f ? '<p class="t-body st-msg ad-flash" role="status">' + esc(f) + '</p>' : ''; }
  function sampleLine() { return real() ? '' : '<p class="t-tiny span-12">This is sample data; nothing here is saved or sent.</p>'; }
  function ago(d) { return A.relative(new Date(d).getTime() - Date.now()); }
  /* The reply starts in the person's language: Hello and their first name, signed by the Alimun team (CLAUDE.md, tone) */
  var GREET = { en: ['Hello', 'The Alimun team'], fr: ['Bonjour', 'L’équipe Alimun'], ma: ['Bonjour', 'L’équipe Alimun'], es: ['Hola', 'El equipo de Alimun'], de: ['Hallo', 'Das Alimun-Team'],
    it: ['Ciao', 'Il team di Alimun'], pt: ['Olá', 'A equipa Alimun'], zh: ['你好', 'Alimun 团队'], ar: ['مرحبًا', 'فريق Alimun'] };
  function greet(lang, first) { var g = GREET[lang] || GREET.en; return g[0] + (first ? ' ' + first : '') + (lang === 'zh' ? '，' : lang === 'ar' ? '،' : ',') + '\n\n\n\n' + g[1]; }
  function para(s) { return esc(s).replace(/\n/g, '<br>'); }

  function sample() {
    var now = Date.now(), at = function (m) { return new Date(now - m * MIN).toISOString(); };
    return {
      requests: [
        { id: 'r1', name: 'Sylvie Martin', email: 'sylvie@example.com', role: 'student', lang: 'fr', topic: 'plans', subject: 'Payer en une fois ?', status: 'open', created_at: at(95), updated_at: at(95),
          question: { question: 'Puis-je payer le pack en une fois ?', answer: 'Oui, un pack peut se payer en trois mois ou en une fois pour les 12 semaines.' },
          messages: [{ id: 'm1', author: 'person', body: 'Bonjour, si je paie en une fois et que la salle ne s’ouvre pas, que se passe-t-il ?', created_at: at(95) }] },
        { id: 'r2', name: 'James Hall', email: 'james@example.com', role: 'teacher', lang: 'en', topic: 'teachers', subject: 'Moving Thursday’s class', status: 'answered', created_at: at(60 * 26), updated_at: at(60 * 20),
          messages: [{ id: 'm2', author: 'person', body: 'I have a dentist appointment on Thursday. Can we move the class to Friday?', created_at: at(60 * 26) },
            { id: 'm3', author: 'alimun', body: 'Hello James, done: Friday at 18:30, and the students have been told. The Alimun team', created_at: at(60 * 20) }] },
        { id: 'r3', name: 'Kenji Sato', email: 'kenji@example.com', role: 'student', lang: 'en', topic: 'account', subject: 'New email address', status: 'closed', created_at: at(60 * 80), updated_at: at(60 * 70),
          messages: [{ id: 'm4', author: 'person', body: 'Please change my email to my work address.', created_at: at(60 * 80) }, { id: 'm5', author: 'alimun', body: 'Hello Kenji, it is changed. The Alimun team', created_at: at(60 * 70) }] }
      ],
      questions: [
        { question: 'How do I join my class?', sure: true, helpful: true, article_slugs: ['join-your-live-class'], created_at: at(30) },
        { question: 'Can I get a refund for a class I missed?', sure: false, helpful: null, created_at: at(200) },
        { question: 'When does my German pack start?', sure: true, helpful: false, article_slugs: ['how-rooms-start'], created_at: at(400) },
        { question: 'How many tutor minutes do I have?', sure: true, helpful: true, article_slugs: ['how-tutor-minutes-work', 'join-your-live-class'], created_at: at(900) }
      ]
    };
  }
  function load() {
    if (!real()) return Promise.resolve(D || (D = sample()));
    return window.AlimunData.token().then(function (tok) {
      return fetch('/api/help?action=admin_list', { headers: { Authorization: 'Bearer ' + (tok || '') } });
    }).then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error(j.error || r.status); return (D = j); }); });
  }
  function post(action, body) {
    return window.AlimunData.token().then(function (tok) {
      return fetch('/api/help?action=' + action, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + (tok || '') }, body: JSON.stringify(body) });
    }).then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error(j.error || r.status); return j; }); });
  }

  /* ---------- The inbox ---------- */
  function who(r) { return (r.name || r.email || 'Someone') + (r.role === 'teacher' ? ', teacher' : r.role === 'visitor' ? ', no account (from the public Help page)' : ''); }
  function lastOf(r) { return r.messages && r.messages[r.messages.length - 1]; }
  function rowsHtml(which) {
    var q = Q.q.trim().toLowerCase();
    var list = D.requests.filter(function (r) { return (which === 'all' || r.status === which) && (!q || (r.subject + ' ' + who(r) + ' ' + (r.email || '')).toLowerCase().indexOf(q) > -1); });
    if (!list.length) return '<p class="t-body" style="margin-top:12px">' + esc(D.requests.length ? (q ? 'No conversation matches.' : 'Nothing here.') : 'No one has written to Support yet.') + '</p>';
    return '<div class="tt-week">' + list.map(function (r) {
      var l = lastOf(r);
      return '<a class="tt-row tt-row--wide ad-help-row' + (r.status === 'open' ? ' is-open' : '') + '" href="#/help/' + esc(r.id) + '"><span class="tt-row__time">' + esc(ST[r.status]) + '</span>' +
        '<span><b dir="auto">' + esc(r.subject) + '</b><small>' + esc([who(r), TOPIC[r.topic] || r.topic, LANG[r.lang] || r.lang, (l && l.author === 'alimun' ? 'we wrote ' : 'they wrote ') + ago(r.updated_at)].join(', ')) + '</small>' +
        (l ? '<small class="ad-help-pv" dir="auto">' + esc(l.body.slice(0, 140)) + '</small>' : '') + '</span></a>';
    }).join('') + '</div>';
  }
  function askedHtml() {
    var qs = D.questions || [];
    if (!qs.length) return '<p class="t-body">No questions in the last 30 days.</p>';
    var sure = qs.filter(function (x) { return x.sure; }).length, yes = qs.filter(function (x) { return x.helpful === true; }).length, nope = qs.filter(function (x) { return x.helpful === false; }).length;
    var missed = qs.filter(function (x) { return !x.sure || x.helpful === false; }).slice(0, 12);
    return '<div class="ad-tiles">' +
      '<div class="ad-tile"><span class="t-num">' + A.num(qs.length) + '</span><b>Questions</b></div>' +
      '<div class="ad-tile"><span class="t-num">' + Math.round(sure * 100 / qs.length) + '%</span><b>Answered with confidence</b></div>' +
      '<div class="ad-tile"><span class="t-num">' + A.num(yes) + '</span><b>Said it helped</b></div>' +
      '<div class="ad-tile"><span class="t-num">' + A.num(nope) + '</span><b>Said it did not</b></div></div>' +
      (missed.length ? '<h3 class="t-h3" style="margin:22px 0 6px">What Help could not answer well</h3><p class="t-small">Each one may need a new help article or a better one.</p><div class="tt-week">' + missed.map(function (x) {
        return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(x.helpful === false ? 'Not helpful' : 'Not sure') + '</span><span><b dir="auto">' + esc(x.question) + '</b><small>' + esc(ago(x.created_at)) + '</small></span></div>';
      }).join('') + '</div>' : '');
  }
  function listView(which) {
    which = ['open', 'answered', 'closed', 'all'].indexOf(which) > -1 ? which : 'open';
    var n = { all: D.requests.length, open: 0, answered: 0, closed: 0 }; D.requests.forEach(function (r) { n[r.status]++; });
    var tab = function (k, label) { return '<a class="btn btn--' + (k === which ? 'primary' : 'quiet') + ' btn--sm" href="#/help/list/' + k + '"' + (k === which ? ' aria-current="page"' : '') + '>' + esc(label + ' (' + n[k] + ')') + '</a>'; };
    return flash() + tabs('conv') + '<div class="view__head"><div><h1 class="t-h1">Help requests</h1><p class="t-lead">What students and teachers write to Support. Your reply reaches their dashboard and their inbox; they can answer from either.</p></div></div>' +
      '<div class="grid rise"><section class="card span-12 ad-push" style="--i:0" data-push>' + pushInner(PUSH.state) + '</section>' +
      '<section class="card span-12" style="--i:0"><div class="btn-row ad-tabs" role="navigation" aria-label="Which conversations">' + tab('open', 'Waiting for us') + tab('answered', 'Answered') + tab('closed', 'Closed') + tab('all', 'All') + '</div>' +
      '<div class="ad-filters"><input class="st-in" type="search" data-hf placeholder="Search by subject, name or email" value="' + esc(Q.q) + '" aria-label="Search"></div>' +
      '<div data-hrows data-which="' + which + '">' + rowsHtml(which) + '</div></section>' +
      '<section class="card span-12" style="--i:1"><h2 class="t-h2">What people ask Help</h2><p class="t-small" style="margin:6px 0 14px">The last 30 days. Questions are deleted after 90 days.</p>' + askedHtml() + '</section>' + sampleLine() + '</div>';
  }

  /* ---------- One conversation ---------- */
  function convView(r) {
    var msgs = (r.messages || []).map(function (m) {
      var us = m.author === 'alimun';
      return '<div class="ms-msg' + (us ? ' is-me' : '') + '"><p class="ms-msg__who">' + esc(us ? 'Alimun' : (r.name || 'They')) + '</p><div class="ms-bub" dir="auto">' + para(m.body) + '</div>' +
        '<p class="ms-msg__time">' + esc(A.fmt(m.created_at, { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })) + '</p></div>';
    }).join('');
    var first = String(r.name || '').split(/\s+/)[0];
    return flash() + back('#/help', 'Help requests') +
      '<div class="view__head"><div><h1 class="t-h1" dir="auto">' + esc(r.subject) + '</h1><p class="t-lead">' + esc([who(r), r.email, TOPIC[r.topic] || r.topic, 'writes in ' + (LANG[r.lang] || r.lang), ST[r.status]].filter(Boolean).join(', ')) + '</p></div>' +
        '<div class="btn-row">' + (r.status === 'closed' ? '<button class="btn btn--ghost btn--sm" type="button" data-hstatus="open">Reopen</button>' : '<button class="btn btn--quiet btn--sm" type="button" data-hstatus="closed">Close without replying</button>') + '</div></div>' +
      '<div class="grid rise">' +
        (r.question ? '<section class="card span-12 ad-help-q" style="--i:0"><h2 class="t-h3">They asked Help first</h2><p class="t-body" dir="auto"><b>' + esc(r.question.question) + '</b></p><p class="t-small" dir="auto">Help answered: ' + esc(r.question.answer || 'nothing') + '</p></section>' : '') +
        '<section class="card span-12 ad-conv" style="--i:1" aria-label="Messages"><div class="ms-msgs ad-msgs">' + msgs + '</div>' +
          '<form class="ad-help-reply" data-hreply novalidate><label class="st-lbl" for="ad-hr">Your reply</label>' +
            '<textarea class="st-in" id="ad-hr" rows="6" maxlength="4000" dir="auto">' + esc(greet(r.lang, first)) + '</textarea>' +
            '<p class="t-small">Write in ' + esc(LANG[r.lang] || 'their language') + ', match their tone, open with Hello and their first name, and sign off as the Alimun team.</p>' +
            '<div class="btn-row"><button class="btn btn--primary btn--sm" type="submit" data-close="0">Send reply</button><button class="btn btn--quiet btn--sm" type="submit" data-close="1">Send and close</button><span class="t-small st-msg" data-hmsg role="status"></span></div></form>' +
        '</section>' + sampleLine() + '</div>';
  }
  function wireConv(r, my) {
    var box = root.querySelector('.ad-msgs'); if (box) box.scrollTop = box.scrollHeight;
    var f = root.querySelector('[data-hreply]'), ta = f.querySelector('textarea'), msg = f.querySelector('[data-hmsg]');
    var caret = ta.value.indexOf('\n\n') + 2; ta.focus(); ta.setSelectionRange(caret, caret);
    var closeIt = false;
    f.querySelectorAll('button[type=submit]').forEach(function (b) { b.addEventListener('click', function () { closeIt = b.getAttribute('data-close') === '1'; }); });
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var body = ta.value.trim();
      if (body.length < 2) { msg.textContent = 'Write the reply first.'; return; }
      if (!real()) { msg.textContent = 'Sample: nothing was sent.'; return; }
      f.querySelectorAll('button').forEach(function (b) { b.disabled = true; }); msg.textContent = 'Sending…';
      post('admin_reply', { id: r.id, message: body, close: closeIt }).then(function (j) {
        if (my !== no) return;
        FLASH = j.emailed ? 'Sent to their dashboard and to ' + (r.email || 'their inbox') + '.' : 'Sent to their dashboard. The email did not go out; check Resend.';
        D = null; A.rerender();
      }, function (e2) { f.querySelectorAll('button').forEach(function (b) { b.disabled = false; }); msg.textContent = 'Not sent: ' + e2.message; });
    });
    root.querySelectorAll('[data-hstatus]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (!real()) { FLASH = 'Sample: nothing was changed.'; A.rerender(); return; }
        b.disabled = true;
        post('admin_status', { id: r.id, status: b.getAttribute('data-hstatus') }).then(function () { if (my === no) { FLASH = b.getAttribute('data-hstatus') === 'closed' ? 'Closed.' : 'Reopened.'; D = null; A.rerender(); } }, function () { b.disabled = false; });
      });
    });
  }

  /* ---------- Part 3: drafts and article use ---------- */
  var DR = null, EN = null;
  var SUBJ = { classes: 'Live classes', plans: 'Plans and payments', dashboard: 'The dashboard', practice: 'Homework and practice', tutor: 'The tutor', account: 'Account and privacy', teachers: 'Teaching' };
  var AUD = { student: 'Students', teacher: 'Teachers', all: 'Everyone' };
  function sampleDrafts() {
    var now = Date.now(), at = function (h) { return new Date(now - h * HOUR).toISOString(); };
    return { lastRun: { ok: true, created_at: at(30), result: { made: 2, questions: 5 } }, drafts: [
      { id: 'd1', kind: 'new', article_slug: null, section: 'help', subject: 'classes', audience: 'student', status: 'draft', created_at: at(30),
        title: 'What happens if I miss a class in my pack?', summary: 'You can catch up with the notes your teacher publishes after each class.',
        body: ['After every class your teacher publishes notes in Classes, with the words from the class and anything to practise. If you miss a class, open them there and go through them before the next one.', 'You can also go over the lesson with your tutor from Classes, using your usual tutor minutes.'],
        missing: ['Can a learner get a refund or credit for a class they missed in a pack?'], reason: 'Three people asked about missed classes and refunds; the articles explain the notes but not refunds.',
        questions: [{ question: 'Can I get a refund for a class I missed?', sure: false, at: at(40) }, { question: 'I missed Tuesday, what now?', sure: false, at: at(50) }, { question: 'Do I lose a class if I am sick?', helpful: false, sure: true, at: at(70) }] },
      { id: 'd2', kind: 'change', article_slug: 'cancel-your-plan', section: 'help', subject: 'plans', audience: 'student', status: 'draft', created_at: at(30),
        title: 'How do I cancel my plan?', summary: 'Go to Settings and choose Manage billing; cancelling stops the next payment.',
        body: ['In your dashboard, go to Settings and choose Manage billing on your plan card.', 'A reserved pack is not charged until the room opens.'], missing: [], reason: 'People with a reserved pack asked how to cancel it.',
        questions: [{ question: 'How do I cancel a reserved pack?', helpful: false, sure: true, at: at(60) }] },
      { id: 'd3', kind: 'new', article_slug: 'change-class-time', section: 'help', subject: 'classes', audience: 'student', status: 'approved', created_at: at(200), decided_at: at(190),
        title: 'Can I change my class time?', summary: '', body: [], missing: [], questions: [{ question: 'Can I move my class to the evening?' }] }
    ] };
  }
  function loadDrafts() {
    var en = EN ? Promise.resolve(EN) : fetch('/js/help/en.json').then(function (r) { return r.json(); }).then(function (j) { return (EN = j.articles || []); }).catch(function () { return (EN = []); });
    if (!real()) return en.then(function () { return DR || (DR = sampleDrafts()); });
    return Promise.all([en, window.AlimunData.token().then(function (tok) { return fetch('/api/help?action=admin_drafts', { headers: { Authorization: 'Bearer ' + (tok || '') } }); })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error(j.error || r.status); return (DR = j); }); })]);
  }
  function tabs(cur) {
    var open = D ? D.requests.filter(function (r) { return r.status === 'open'; }).length : 0;
    var waiting = DR ? DR.drafts.filter(function (d) { return d.status === 'draft'; }).length : 0;
    var t = function (k, href, label) { return '<a class="btn btn--' + (k === cur ? 'primary' : 'quiet') + ' btn--sm" href="' + href + '"' + (k === cur ? ' aria-current="page"' : '') + '>' + esc(label) + '</a>'; };
    return '<div class="btn-row ad-tabs ad-help-tabs" role="navigation" aria-label="Help sections">' + t('conv', '#/help', 'Conversations' + (open ? ' (' + open + ' waiting)' : '')) +
      t('drafts', '#/help/drafts', 'Article drafts' + (waiting ? ' (' + waiting + ')' : '')) + t('articles', '#/help/articles', 'Article use') + '</div>';
  }
  function draftsView() {
    var waiting = DR.drafts.filter(function (d) { return d.status === 'draft'; }), done = DR.drafts.filter(function (d) { return d.status !== 'draft'; });
    var run = DR.lastRun ? (DR.lastRun.ok === false ? 'The last run failed ' + ago(DR.lastRun.created_at) + '.' : 'Last run ' + ago(DR.lastRun.created_at) + ': ' + ((DR.lastRun.result || {}).questions || 0) + ' questions, ' + ((DR.lastRun.result || {}).made || 0) + ' drafts.') : 'No run yet.';
    return flash() + tabs('drafts') +
      '<div class="view__head"><div><h1 class="t-h1">Article drafts</h1><p class="t-lead">Every Monday the questions Help could not answer well are grouped and turned into a new article or a change to one. Nothing is published until you approve it; approving publishes it in English and translates it into the other languages.</p></div>' +
        '<div class="btn-row"><button class="btn btn--primary btn--sm" type="button" data-drun>Draft now from the last 30 days</button></div></div>' +
      '<p class="t-small ad-help-run" data-drunmsg>' + esc(run) + '</p>' +
      '<div class="grid rise">' +
        (waiting.length ? waiting.map(function (d, i) {
          return '<a class="card span-6 ad-draft" style="--i:' + i + '" href="#/help/drafts/' + esc(d.id) + '">' +
            '<span class="ad-draft__kind">' + esc(d.kind === 'change' ? 'Change to an article' : 'New article') + ', ' + esc(SUBJ[d.subject] || d.subject) + ', for ' + esc((AUD[d.audience] || '').toLowerCase()) + '</span>' +
            '<b class="t-h3">' + esc(d.title) + '</b>' + (d.reason ? '<span class="t-small">' + esc(d.reason) + '</span>' : '') +
            '<span class="ad-draft__foot">' + esc(d.questions.length === 1 ? 'From 1 question' : 'From ' + d.questions.length + ' questions') + (d.missing && d.missing.length ? ', ' + esc(d.missing.length === 1 ? '1 fact for you to add' : d.missing.length + ' facts for you to add') : '') + ', ' + esc(ago(d.created_at)) + '</span></a>';
        }).join('') : '<section class="card span-12"><p class="t-body">No drafts waiting. When Help cannot answer a question well, it is drafted here the next Monday.</p></section>') +
        (done.length ? '<section class="card span-12"><h2 class="t-h3">Decided</h2><div class="tt-week">' + done.slice(0, 40).map(function (d) {
          return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(d.status === 'approved' ? 'Published' : 'Discarded') + '</span><span><b>' + esc(d.title) + '</b><small>' + esc((d.article_slug ? d.article_slug + ', ' : '') + ago(d.decided_at || d.created_at)) + '</small></span></div>';
        }).join('') + '</div></section>' : '') + sampleLine() +
      '</div>';
  }
  function opt(v, label, cur) { return '<option value="' + esc(v) + '"' + (v === cur ? ' selected' : '') + '>' + esc(label) + '</option>'; }
  function draftView(d) {
    var base = d.kind === 'change' ? (EN || []).filter(function (a) { return a.slug === d.article_slug; })[0] : null;
    var open = d.status === 'draft';
    return flash() + back('#/help/drafts', 'Article drafts') +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(d.kind === 'change' ? 'Change to an article' : 'A new article') + '</h1><p class="t-lead">' + esc(d.reason || '') + '</p></div></div>' +
      '<div class="grid rise ad-draft-grid">' +
        '<form class="card span-8 ad-draft-form" data-dform novalidate style="--i:0">' +
          '<label class="st-field"><span class="st-lbl">Title, as a question people ask</span><input class="st-in" name="title" maxlength="200" value="' + esc(d.title) + '"' + (open ? '' : ' disabled') + '></label>' +
          '<label class="st-field"><span class="st-lbl">Summary, one sentence that answers it</span><textarea class="st-in" name="summary" rows="2" maxlength="600"' + (open ? '' : ' disabled') + '>' + esc(d.summary) + '</textarea></label>' +
          '<label class="st-field"><span class="st-lbl">The article, with an empty line between paragraphs</span><textarea class="st-in ad-draft-body" name="body" rows="14"' + (open ? '' : ' disabled') + '>' + esc((d.body || []).join('\n\n')) + '</textarea></label>' +
          '<div class="st-row ad-draft-row">' +
            '<label class="st-field"><span class="st-lbl">Where</span><select class="st-in" name="section"' + (open ? '' : ' disabled') + '>' + opt('help', 'Help', d.section) + opt('support', 'Support', d.section) + '</select></label>' +
            '<label class="st-field"><span class="st-lbl">Topic</span><select class="st-in" name="subject"' + (open ? '' : ' disabled') + '>' + Object.keys(SUBJ).map(function (k) { return opt(k, SUBJ[k], d.subject); }).join('') + '</select></label>' +
            '<label class="st-field"><span class="st-lbl">For</span><select class="st-in" name="audience"' + (open ? '' : ' disabled') + '>' + Object.keys(AUD).map(function (k) { return opt(k, AUD[k], d.audience); }).join('') + '</select></label>' +
          '</div>' +
          (d.kind === 'new' ? '<label class="st-field"><span class="st-lbl">Web address</span><input class="st-in" name="slug" maxlength="80" value="' + esc(d.article_slug || slugOf(d.title)) + '"' + (open ? '' : ' disabled') + '><span class="t-tiny">Letters, numbers and hyphens. It cannot be changed later.</span></label>' : '') +
          (open ? '<div class="btn-row"><button class="btn btn--primary btn--sm" type="submit" data-act="approve">Approve and publish in every language</button><button class="btn btn--quiet btn--sm" type="submit" data-act="save">Save</button><button class="btn btn--quiet btn--sm" type="submit" data-act="discard">Discard</button><span class="t-small st-msg" data-dmsg role="status"></span></div>'
            : '<p class="t-body"><b>' + esc(d.status === 'approved' ? 'Published.' : 'Discarded.') + '</b></p>') +
        '</form>' +
        '<aside class="span-4 ad-draft-side">' +
          (d.missing && d.missing.length ? '<section class="card ad-help-q" style="--i:1"><h2 class="t-h3">Facts for you to add</h2><p class="t-small">The articles do not say these, so the draft leaves them out. Add them, or leave them out.</p>' + d.missing.map(function (m) { return '<p class="t-body ad-draft-fact" dir="auto">' + esc(m) + '</p>'; }).join('') + '</section>' : '') +
          '<section class="card" style="--i:2"><h2 class="t-h3">The questions behind it</h2>' + (d.questions || []).map(function (q) {
            return '<div class="ad-draft-q"><p class="t-body" dir="auto"><b>' + esc(q.question) + '</b></p><p class="t-small">' + esc((q.helpful === false ? 'Said Help did not help' : 'Help was not sure') + (q.at ? ', ' + ago(q.at) : '')) + '</p>' + (q.answer ? '<p class="t-small" dir="auto">Help answered: ' + esc(q.answer) + '</p>' : '') + '</div>';
          }).join('') + '</section>' +
          (base ? '<section class="card card--bone" style="--i:3"><h2 class="t-h3">The article now</h2><p class="t-body"><b>' + esc(base.title) + '</b></p><p class="t-small">' + esc(base.summary) + '</p>' + base.body.map(function (p) { return '<p class="t-small">' + esc(p) + '</p>'; }).join('') + '</section>' : '') +
        '</aside>' + sampleLine() +
      '</div>';
  }
  function slugOf(s) { return String(s || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').split('-').slice(0, 8).join('-').slice(0, 70); }
  function wireDrafts(my) {
    var b = root.querySelector('[data-drun]'), msg = root.querySelector('[data-drunmsg]');
    if (b) b.addEventListener('click', function () {
      if (!real()) { msg.textContent = 'Sample: nothing was drafted.'; return; }
      b.disabled = true; msg.textContent = 'Reading the questions and drafting. This takes up to a minute…';
      post('admin_draft_run', {}).then(function (j) {
        if (my !== no) return;
        FLASH = j.questions ? j.made + ' drafts from ' + j.questions + ' questions.' : 'No new questions to draft from.'; DR = null; A.rerender();
      }, function (e) { b.disabled = false; msg.textContent = e.message; });
    });
  }
  function wireDraft(d, my) {
    var f = root.querySelector('[data-dform]');
    if (!f || d.status !== 'draft') return;
    var act = 'save', msg = f.querySelector('[data-dmsg]');
    f.querySelectorAll('button[type=submit]').forEach(function (x) { x.addEventListener('click', function () { act = x.getAttribute('data-act'); }); });
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var body = f.body.value.split(/\n\s*\n/).map(function (p) { return p.replace(/\s+/g, ' ').trim(); }).filter(Boolean);
      var data = { id: d.id, decision: act, title: f.title.value.trim(), summary: f.summary.value.trim(), body: body, section: f.section.value, subject: f.subject.value, audience: f.audience.value, slug: f.slug ? f.slug.value.trim() : null };
      if (act === 'discard' && msg.getAttribute('data-sure') !== '1') { msg.setAttribute('data-sure', '1'); msg.textContent = 'Press Discard again to throw this draft away.'; return; }
      if (!real()) { msg.textContent = 'Sample: nothing was saved.'; return; }
      f.querySelectorAll('button').forEach(function (x) { x.disabled = true; });
      msg.textContent = act === 'approve' ? 'Publishing and translating into seven languages. This takes up to a minute…' : 'Saving…';
      post('admin_draft_decide', data).then(function (j) {
        if (my !== no) return;
        FLASH = j.status === 'approved' ? 'Published as "' + j.slug + '". Translated into ' + (j.translated.length ? j.translated.join(', ') : 'no language') + (j.failed.length ? '; not into ' + j.failed.join(', ') + ' (they show the English until you approve it again)' : '') + '.' : j.status === 'discarded' ? 'Discarded.' : 'Saved.';
        DR = null; A.rerender();
      }, function (e2) { f.querySelectorAll('button').forEach(function (x) { x.disabled = false; }); msg.textContent = e2.message; });
    });
  }
  /* Which articles Help used in its answers over the last 30 days (help_questions.article_slugs) */
  function articlesView() {
    var use = {}, yes = {}, nope = {};
    (D.questions || []).forEach(function (q) { (q.article_slugs || []).forEach(function (s) { use[s] = (use[s] || 0) + 1; if (q.helpful === true) yes[s] = (yes[s] || 0) + 1; if (q.helpful === false) nope[s] = (nope[s] || 0) + 1; }); });
    var list = (EN || []).slice().sort(function (a, b) { return (use[b.slug] || 0) - (use[a.slug] || 0) || a.title.localeCompare(b.title); });
    var used = list.filter(function (a) { return use[a.slug]; }), unused = list.filter(function (a) { return !use[a.slug]; });
    var line = function (a) { return '<a class="tt-row tt-row--wide" href="/app#/help/a/' + esc(a.slug) + '" target="_blank" rel="noopener"><span class="tt-row__time">' + esc(use[a.slug] ? A.num(use[a.slug]) + (use[a.slug] === 1 ? ' answer' : ' answers') : 'Not used') + '</span><span><b>' + esc(a.title) + '</b><small>' + esc([SUBJ[a.subject], AUD[a.audience], yes[a.slug] ? yes[a.slug] + ' said it helped' : '', nope[a.slug] ? nope[a.slug] + ' said it did not' : ''].filter(Boolean).join(', ')) + '</small></span></a>'; };
    return tabs('articles') +
      '<div class="view__head"><div><h1 class="t-h1">Article use</h1><p class="t-lead">How often Help used each article in an answer over the last 30 days, and whether people found it helpful.</p></div></div>' +
      '<div class="grid rise"><section class="card span-12" style="--i:0"><h2 class="t-h3">Used</h2>' + (used.length ? '<div class="tt-week">' + used.map(line).join('') + '</div>' : '<p class="t-body">No answers in the last 30 days yet.</p>') + '</section>' +
      '<section class="card span-12" style="--i:1"><h2 class="t-h3">Not used in the last 30 days</h2><div class="tt-week">' + unused.map(line).join('') + '</div></section>' + sampleLine() + '</div>';
  }

  /* ---------- Pop-ups for new support messages on this device (js/app/admin-push.js) ---------- */
  var PUSH = { state: null, msg: '', busy: false };
  var PUSH_TEXT = {
    on: 'On for this browser. New support messages pop up here even when the admin console is closed.',
    off: 'Off for this browser. Turn them on to see new support messages pop up on this computer or phone, even with the admin console closed. You keep getting the emails either way.',
    denied: 'This browser blocks notifications from alimun.com. Allow them in the site settings (the lock or settings icon beside the address), then come back here.',
    unsupported: 'This browser cannot show pop-ups. On an iPhone, add Alimun to the Home Screen first and open the admin console from there.'
  };
  function pushInner(st) {
    var btns = st === 'on' ? '<button class="btn btn--primary btn--sm" type="button" data-push-do="test">Send a test</button><button class="btn btn--quiet btn--sm" type="button" data-push-do="off">Turn off</button>'
      : st === 'off' ? '<button class="btn btn--primary btn--sm" type="button" data-push-do="on">Turn on pop-ups</button>' : '';
    return '<div class="ad-push__x"><h2 class="t-h3">Pop-ups for new support messages</h2><p class="t-small">' + esc(st ? PUSH_TEXT[st] : 'Checking this browser…') + '</p>' +
      (PUSH.msg ? '<p class="t-small st-msg" role="status">' + esc(PUSH.msg) + '</p>' : '') + '</div>' + (btns ? '<div class="btn-row ad-push__btns">' + btns + '</div>' : '');
  }
  function paintPush() { var el = root && root.querySelector('[data-push]'); if (el) el.innerHTML = pushInner(PUSH.state); }
  function wirePush(my) {
    var P = window.AlimunAdminPush;
    if (!P) { PUSH.state = 'unsupported'; return paintPush(); }
    P.state().then(function (st) { if (my !== no) return; PUSH.state = st; paintPush(); });
    var el = root.querySelector('[data-push]');
    if (!el) return;
    el.addEventListener('click', function (e) {
      var b = e.target.closest('[data-push-do]'); if (!b || PUSH.busy) return;
      var what = b.getAttribute('data-push-do');
      if (!real()) { PUSH.msg = 'Sample: nothing was changed.'; return paintPush(); }
      PUSH.busy = true; b.disabled = true;
      var job = what === 'on' ? P.turnOn().then(function () { return P.test(); }).then(function () { PUSH.msg = 'Pop-ups are on. A test is on its way.'; })
        : what === 'off' ? P.turnOff().then(function () { PUSH.msg = 'Pop-ups are off for this browser.'; })
        : P.test().then(function (j) { PUSH.msg = j && j.sent ? 'Test sent. It shows in a few seconds.' : 'The test did not reach this device. Turn pop-ups off and on again.'; });
      job.catch(function (err) { PUSH.msg = (err && err.message) || 'That did not work. Please try again.'; })
        .then(function () { return P.state(); }).then(function (st) { PUSH.busy = false; if (my !== no) return; PUSH.state = st; paintPush(); });
    });
  }
  function drawList(which) {
    root.innerHTML = listView(which);
    wirePush(no);
    var s = root.querySelector('[data-hf]'), rows = root.querySelector('[data-hrows]');
    if (s) s.addEventListener('input', function () { Q.q = s.value; rows.innerHTML = rowsHtml(rows.getAttribute('data-which')); });
  }
  /* Live (owner, 24 Nov 2026): a new request or a new message from the person shows at once. In a conversation only
     the messages are redrawn, so a reply being written is untouched; the list is redrawn keeping the search. */
  var stopLive = null;
  function unlive() { if (stopLive) { stopLive(); stopLive = null; } }
  function live(my, id, which) {
    unlive();
    if (!real() || !window.AlimunLive) return;
    stopLive = window.AlimunLive.watch('admin-help', [{ table: 'help_requests', event: '*' }, { table: 'help_messages', event: 'INSERT' }], function () {
      load().then(function () {
        if (my !== no) return;
        if (id) {
          var r = D.requests.filter(function (x) { return x.id === id; })[0];
          if (!r) return;
          var tmp = document.createElement('div'); tmp.innerHTML = convView(r);
          var box = root.querySelector('.ad-msgs'), box2 = tmp.querySelector('.ad-msgs');
          if (box && box2) { var end = box.scrollHeight - box.scrollTop - box.clientHeight < 80; box.innerHTML = box2.innerHTML; if (end) box.scrollTop = box.scrollHeight; }
          return;
        }
        var s = root.querySelector('[data-hf]'), focused = s && document.activeElement === s;
        drawList(which);
        var s2 = root.querySelector('[data-hf]');
        if (s2 && focused) { s2.focus(); var n = s2.value.length; try { s2.setSelectionRange(n, n); } catch (e) { /* search input */ } }
      }, function (e) { console.warn('[Alimun] help refresh', e && e.message); });
    }, { wait: 300 });
  }
  function mount(view, parts, helpers) {
    var my = ++no; A = helpers; root = view;
    unlive();
    if (!D) root.innerHTML = loading();
    if (parts[0] === 'drafts') {
      if (!DR) root.innerHTML = loading();
      return Promise.all([load(), loadDrafts()]).then(function () {
        if (my !== no) return {};
        if (parts[1]) {
          var d = DR.drafts.filter(function (x) { return x.id === parts[1]; })[0];
          if (!d) { root.innerHTML = back('#/help/drafts', 'Article drafts') + '<div class="card"><p class="t-body">This draft could not be found.</p></div>'; return { title: 'Article drafts' }; }
          root.innerHTML = draftView(d); wireDraft(d, my); return { title: d.title };
        }
        root.innerHTML = draftsView(); wireDrafts(my); return { title: 'Article drafts' };
      }, function (e) { if (my === no) root.innerHTML = '<div class="card"><p class="t-body">This did not load: ' + esc((e && e.message) || 'please try again') + '.</p></div>'; return {}; });
    }
    if (parts[0] === 'articles') {
      return Promise.all([load(), loadDrafts()]).then(function () { if (my === no) root.innerHTML = articlesView(); return { title: 'Article use' }; },
        function (e) { if (my === no) root.innerHTML = '<div class="card"><p class="t-body">This did not load: ' + esc((e && e.message) || 'please try again') + '.</p></div>'; return {}; });
    }
    loadDrafts().then(function () { var tb = root.querySelector('.ad-help-tabs'); if (tb && my === no) tb.outerHTML = tabs('conv'); }, function () {});
    return load().then(function () {
      if (my !== no) return {};
      if (parts[0] && parts[0] !== 'list') {
        var r = D.requests.filter(function (x) { return x.id === parts[0]; })[0];
        if (!r) { root.innerHTML = back('#/help', 'Help requests') + '<div class="card"><p class="t-body">This conversation could not be found.</p></div>'; return { title: 'Help requests' }; }
        root.innerHTML = convView(r); wireConv(r, my);
        live(my, r.id, null);
        return { title: r.subject };
      }
      drawList(parts[1]);
      live(my, null, parts[1]);
      return { title: 'Help requests' };
    }, function (e) {
      if (my === no) root.innerHTML = '<div class="card"><p class="t-body">This did not load: ' + esc((e && e.message) || 'please try again') + '.</p></div>';
      return {};
    });
  }
  window.AlimunAdminHelp = { mount: mount, reset: function () { no++; unlive(); } };
})();
