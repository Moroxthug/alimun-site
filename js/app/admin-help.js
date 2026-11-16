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
        { question: 'How do I join my class?', sure: true, helpful: true, created_at: at(30) },
        { question: 'Can I get a refund for a class I missed?', sure: false, helpful: null, created_at: at(200) },
        { question: 'When does my German pack start?', sure: true, helpful: false, created_at: at(400) },
        { question: 'How many tutor minutes do I have?', sure: true, helpful: true, created_at: at(900) }
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
  function who(r) { return (r.name || r.email || 'Someone') + (r.role === 'teacher' ? ', teacher' : ''); }
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
    return flash() + '<div class="view__head"><div><h1 class="t-h1">Help requests</h1><p class="t-lead">What students and teachers write to Support. Your reply reaches their dashboard and their inbox; they can answer from either.</p></div></div>' +
      '<div class="grid rise"><section class="card span-12" style="--i:0"><div class="btn-row ad-tabs" role="navigation" aria-label="Which conversations">' + tab('open', 'Waiting for us') + tab('answered', 'Answered') + tab('closed', 'Closed') + tab('all', 'All') + '</div>' +
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

  function mount(view, parts, helpers) {
    var my = ++no; A = helpers; root = view;
    if (!D) root.innerHTML = loading();
    return load().then(function () {
      if (my !== no) return {};
      if (parts[0] && parts[0] !== 'list') {
        var r = D.requests.filter(function (x) { return x.id === parts[0]; })[0];
        if (!r) { root.innerHTML = back('#/help', 'Help requests') + '<div class="card"><p class="t-body">This conversation could not be found.</p></div>'; return { title: 'Help requests' }; }
        root.innerHTML = convView(r); wireConv(r, my);
        return { title: r.subject };
      }
      root.innerHTML = listView(parts[1]);
      var s = root.querySelector('[data-hf]'), rows = root.querySelector('[data-hrows]');
      if (s) s.addEventListener('input', function () { Q.q = s.value; rows.innerHTML = rowsHtml(rows.getAttribute('data-which')); });
      return { title: 'Help requests' };
    }, function (e) {
      if (my === no) root.innerHTML = '<div class="card"><p class="t-body">This did not load: ' + esc((e && e.message) || 'please try again') + '.</p></div>';
      return {};
    });
  }
  window.AlimunAdminHelp = { mount: mount, reset: function () { no++; } };
})();
