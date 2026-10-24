/* Alimun app shell (docs/DASHBOARD_PLAN.md, step 2): navigation, routing, the loader and the preview screens.
   Sidebar on desktop, bottom bar plus a "More" sheet on phones. Screens marked for later steps show their
   character and say which step builds them. */
(function () {
  'use strict';
  var Cast = window.AlimunCast;
  var S = window.ALIMUN_SAMPLE;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }

  /* Line icons drawn for Alimun: 24px grid, 2px rounded strokes, same weight as the drawings */
  var P = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  var ICONS = {
    home: '<path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z"/>',
    book: '<path d="M12 6.5C10.4 5 8.2 4.5 4 4.8v13.4c4.2-.3 6.4.2 8 1.8 1.6-1.6 3.8-2.1 8-1.8V4.8c-4.2-.3-6.4.2-8 1.7z"/><path d="M12 6.5V20"/>',
    practice: '<path d="M13 3 5.5 13.2H12L11 21l7.5-10.2H12z"/>',
    tests: '<path d="M7 3.5h10M8.5 3.5v3.2a3.5 3.5 0 0 0 7 0V3.5"/><path d="M12 10.2v3.3"/><path d="M8 20.5h8M9.5 20.5l.8-7h3.4l.8 7"/>',
    library: '<path d="M5 4v16M9.5 4v16"/><path d="m13.5 5.2 3.8-1 3.4 14.8-3.8 1z"/>',
    classes: '<rect x="3" y="6" width="13" height="12" rx="3"/><path d="m16 10.5 5-3v9l-5-3"/>',
    homework: '<path d="M14.5 4.5 19.5 9.5 9 20H4v-5z"/><path d="m12.5 6.5 5 5"/>',
    progress: '<path d="M4 20V13M10 20V8M16 20v-5M20 20H3"/><path d="m14.5 6.5 3-3 3 3M17.5 3.5V11"/>',
    messages: '<path d="M20 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.2A8 8 0 1 1 20 12z"/>',
    settings: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/>',
    kit: '<circle cx="8" cy="8" r="3.5"/><rect x="13" y="4.5" width="7" height="7" rx="2"/><path d="M4.5 19.5 8 13.5l3.5 6z"/><circle cx="16.5" cy="16.5" r="3.5"/>',
    more: '<circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/>',
    bell: '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z"/><path d="M10 21h4"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    play: '<path d="M8 5.5v13l10.5-6.5z"/>'
  };
  function icon(name) { return '<svg viewBox="0 0 24 24" ' + P + ' aria-hidden="true" focusable="false">' + ICONS[name] + '</svg>'; }

  /* Every section of the student dashboard, in the order of the plan's build steps */
  var ROUTES = [
    { id: 'home', label: 'Home', icon: 'home', group: 'learn' },
    { id: 'book', label: 'Course book', short: 'Learn', icon: 'book', group: 'learn', step: 4, art: 'owl', tint: 'sun', bub: 'Psst: your course book opens here, page by page.', kind: 'say',
      text: 'Course books for every level from A1 to C2, unit by unit. Every page teaches, then checks that you got it before you move on.' },
    { id: 'practice', label: 'Practice', icon: 'practice', group: 'learn', step: 5, art: 'dog', tint: 'leaf', bub: 'Again! Again!', kind: 'say',
      text: 'Exercises built from your own mistakes, flashcards with spaced review, quizzes and long practice sets, all with instant feedback.' },
    { id: 'tests', label: 'Mock tests', short: 'Tests', icon: 'tests', group: 'learn', step: 8, art: 'dragon', tint: 'leaf', bub: 'Beat me in the mock test.', kind: 'say',
      text: 'Practice in the format of IELTS, B2 First, C1 Advanced, Goethe, telc, DELE, DELF and CILS, plus the Alimun tests.' },
    { id: 'library', label: 'Library', icon: 'library', group: 'learn', step: 9, art: 'teacup', tint: 'mint', bub: 'Fancy a cuppa and some listening?', kind: 'say',
      text: 'Graded listening and reading for your level: dialogues, announcements, emails, articles and stories, each with its own exercises.' },
    { id: 'classes', label: 'Classes', icon: 'classes', group: 'class', step: 10, art: 'mug', tint: 'leaf', bub: 'Refill, then class.', kind: 'think',
      text: 'Join your live classes in one tap, keep the notes and the class vocabulary, and book one-to-one lessons with your teacher.' },
    { id: 'homework', label: 'Homework', icon: 'homework', group: 'class', step: 11, art: 'monster', tint: 'coral', bub: 'I eat articles for breakfast.', kind: 'say',
      text: 'Homework and essays from your teacher, with corrections and comments you can come back to.' },
    { id: 'progress', label: 'Progress', icon: 'progress', group: 'class', step: 12, art: 'snail', tint: 'coral', bub: 'Slow and steady still counts.', kind: 'think',
      text: 'Your level, your skills and the topics you have mastered, with the history of every test and class.' },
    { id: 'messages', label: 'Messages', icon: 'messages', group: 'class', step: 13, art: 'alien', tint: 'mint', bub: 'Take me to your teacher.', kind: 'say',
      text: 'Write to your teacher and your class, and get answers about homework and lessons.' },
    { id: 'settings', label: 'Settings', icon: 'settings', group: 'account', step: 14, art: 'cat', tint: 'bone', bub: 'Five more minutes...', kind: 'think',
      text: 'Your profile, languages, notifications, plan and billing.' },
    { id: 'kit', label: 'Design kit', icon: 'kit', group: 'account' }
  ];
  var TINTS = { sun: 'var(--t-sun)', mint: 'var(--t-mint)', coral: 'var(--t-coral)', leaf: 'var(--t-lime)', bone: 'var(--bone)' };
  var BAR = ['home', 'book', 'practice', 'classes'];
  var byId = {}; ROUTES.forEach(function (r) { byId[r.id] = r; });

  var app, view, top, sheet, loadingScreen;

  /* ---------- Navigation markup ---------- */
  function navLinks() {
    var groups = { learn: 'Learn', class: 'With your teacher', account: 'Account' };
    var html = '';
    Object.keys(groups).forEach(function (g) {
      html += '<div class="nav__group"><div class="nav__label">' + groups[g] + '</div>';
      ROUTES.filter(function (r) { return r.group === g; }).forEach(function (r) {
        html += '<a href="#/' + r.id + '" data-route="' + r.id + '">' + icon(r.icon) + '<span>' + esc(r.label) + '</span></a>';
      });
      html += '</div>';
    });
    return html;
  }

  function renderShell() {
    var buddySvg = Cast.drawing(S.course.buddy);
    app.innerHTML =
      '<a class="skip" href="#view">Skip to content</a>' +
      '<aside class="side" aria-label="Main">' +
        '<a class="brand" href="#/home" aria-label="Alimun home">' + Cast.book('idle') + Cast.wordmark() + '</a>' +
        '<nav class="nav" aria-label="Sections">' + navLinks() + '</nav>' +
        '<div class="side__foot"><a class="buddy-card" href="#/book">' + buddySvg +
          '<div><b>' + esc(S.course.language) + ' ' + esc(S.course.level) + '</b><small>' + esc(S.course.unit) + '</small></div></a></div>' +
      '</aside>' +
      '<div class="main">' +
        '<header class="top">' +
          '<a class="top__brand" href="#/home" aria-label="Alimun home">' + Cast.book('idle') + Cast.wordmark() + '</a>' +
          '<p class="top__title" aria-hidden="true"></p>' +
          '<div class="top__actions">' +
            '<button class="course-btn" type="button" aria-label="Course: ' + esc(S.course.language) + '">' + buddySvg + '<span>' + esc(S.course.language) + '</span></button>' +
            '<button class="icon-btn" type="button" aria-label="Notifications">' + icon('bell') + '</button>' +
            '<button class="avatar" type="button" aria-label="Your account">' + esc(S.student.initials) + '</button>' +
          '</div>' +
        '</header>' +
        '<main class="view" id="view" tabindex="-1"></main>' +
      '</div>' +
      '<nav class="bar" aria-label="Sections">' +
        BAR.map(function (id) { var r = byId[id]; return '<a href="#/' + id + '" data-route="' + id + '">' + icon(r.icon) + '<span>' + esc(r.short || r.label) + '</span></a>'; }).join('') +
        '<button type="button" data-more aria-haspopup="dialog" aria-expanded="false">' + icon('more') + '<span>More</span></button>' +
      '</nav>' +
      '<div class="sheet-scrim" data-close></div>' +
      '<div class="sheet" role="dialog" aria-modal="true" aria-label="More sections"><div class="sheet__grip"></div><nav class="nav">' + navLinks() + '</nav></div>';
    view = app.querySelector('.view');
    top = app.querySelector('.top');
    sheet = app.querySelector('.sheet');
  }

  /* ---------- Screens ---------- */
  function greeting() {
    var h = new Date().getHours();
    return h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
  }
  function countdown(mins) {
    var d = Math.floor(mins / 1440), h = Math.floor((mins % 1440) / 60);
    return d > 0 ? 'Starts in ' + d + (d === 1 ? ' day' : ' days') + ' and ' + h + (h === 1 ? ' hour' : ' hours') : 'Starts in ' + h + (h === 1 ? ' hour' : ' hours');
  }

  function homeView() {
    var c = S.nextClass, k = S.course, st = S.streak;
    var days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    var tasks = S.today.map(function (t, i) {
      return '<button class="card card--' + t.tint + ' span-4" style="--i:' + (i + 2) + '" type="button" data-sample-task>' +
        '<div class="card__row"><div class="card__art">' + Cast.drawing(t.art) + '</div>' +
        '<div><h3 class="t-h3">' + esc(t.title) + '</h3><p class="t-small" style="margin-top:8px">' + esc(t.detail) + '</p></div></div></button>';
    }).join('');
    return '' +
      '<div class="view__head"><div><h1 class="t-h1">' + greeting() + ', ' + esc(S.student.firstName) + '</h1>' +
        '<p class="t-lead">A preview of the new dashboard with sample data. The Home screen itself is built in step 3; this one shows the shell, the cards and the motion.</p></div></div>' +
      '<div class="grid rise">' +
        '<section class="card card--forest span-8" style="--i:0" aria-label="Next class">' +
          '<p class="t-small">Your next class</p>' +
          '<h2 class="t-h1" style="margin-top:10px">' + esc(c.when) + '</h2>' +
          '<p class="t-lead" style="margin-top:12px">' + esc(c.title) + ' with ' + esc(c.teacher) + '. ' + countdown(c.inMinutes) + '.</p>' +
          '<div class="btn-row" style="margin-top:26px"><button class="btn btn--lime" type="button" data-join>' + icon('play') + 'Join class</button>' +
          '<a class="btn btn--ghost" href="#/classes" style="color:var(--bone);box-shadow:inset 0 0 0 2px rgba(240,239,233,.4)">See the calendar</a></div>' +
        '</section>' +
        '<section class="stage span-4" style="--i:1;background:var(--t-sun)" aria-label="Your buddy">' +
          '<div class="bub think">Der, die, das... no wonder I am twisted.</div>' + Cast.drawing(k.buddy) +
        '</section>' +
        tasks +
        '<section class="card span-5" style="--i:5" aria-label="Streak">' +
          '<div class="card__row"><div><p class="t-small">Streak</p><div class="t-num" style="margin-top:6px">' + st.days + ' days</div></div>' +
          '<div class="card__art" style="margin-left:auto">' + Cast.drawing('snail') + '</div></div>' +
          '<div class="week" aria-hidden="true">' + st.week.map(function (on, i) { return '<span class="' + (on ? 'on' : '') + (i === st.todayIndex ? ' today' : '') + '">' + days[i] + '</span>'; }).join('') + '</div>' +
          '<p class="t-small" style="margin-top:14px">Practise today to make it seven.</p>' +
        '</section>' +
        '<section class="card span-7" style="--i:6" aria-label="Course">' +
          '<p class="t-small">' + esc(k.language) + ' ' + esc(k.level) + '</p>' +
          '<h2 class="t-h2" style="margin-top:8px">' + esc(k.unit) + '</h2>' +
          '<div class="meter" style="margin-top:20px" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(k.unitProgress * 100) + '" aria-label="Unit progress"><i style="width:' + (k.unitProgress * 100) + '%"></i></div>' +
          '<p class="t-body" style="margin-top:18px">' + esc(S.focus) + '</p>' +
          '<div class="btn-row" style="margin-top:20px"><a class="btn btn--primary" href="#/book">Continue the unit' + icon('arrow') + '</a></div>' +
        '</section>' +
        '<section class="card card--lime span-12" style="--i:7" aria-label="Your plan">' +
          '<div class="card__row" style="flex-wrap:wrap"><div style="flex:1;min-width:240px"><h2 class="t-h2">You are on the free plan</h2>' +
          '<p class="t-body" style="margin-top:10px">Live classes with a teacher, mock tests and full course books come with a paid plan.</p></div>' +
          '<a class="btn btn--primary" href="/tiers">See the plans</a></div>' +
        '</section>' +
      '</div>';
  }

  function soonView(r) {
    return '' +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(r.label) + '</h1><p class="t-lead">' + esc(r.text) + '</p></div></div>' +
      '<div class="soon rise">' +
        '<div class="stage" style="--i:0;background:' + TINTS[r.tint] + '"><div class="bub ' + r.kind + '">' + esc(r.bub) + '</div>' + Cast.drawing(r.art) + '</div>' +
        '<div class="card" style="--i:1"><h2 class="t-h2">Built in step ' + r.step + '</h2>' +
          '<p class="t-body">This screen is designed and built in its own step of the plan, after you confirm the look and the navigation.</p>' +
          '<div class="btn-row"><a class="btn btn--primary" href="#/home">Back to Home</a><a class="btn btn--quiet" href="#/kit">Open the design kit</a></div></div>' +
      '</div>';
  }

  function kitView() {
    var colours = [
      ['Forest', '#1a443c', 'Logo, shell, primary buttons'], ['Gold', '#d5af33', 'Logo eyes, loader'], ['Lime', '#ceff65', 'Active state, highlights'],
      ['Ink', '#080808', 'Text'], ['Bone', '#f0efe9', 'Page background'], ['White', '#ffffff', 'Cards'],
      ['Coral', '#ff9f8a', 'Drawings'], ['Mint', '#9fd6c7', 'Drawings'], ['Sunflower', '#ffd166', 'Drawings']
    ];
    var moodNames = { idle: 'Idle, blinking', happy: 'Right answer', wow: 'New record', think: 'Almost, try again', sleep: 'You have been away' };
    return '' +
      '<div class="view__head"><div><h1 class="t-h1">Design kit</h1><p class="t-lead">The pieces every new screen is made of: colours, type, cards, buttons, bubbles, the book character and the loader.</p></div>' +
        '<button class="btn btn--ghost btn--sm" type="button" data-replay>Replay the motion</button></div>' +
      '<div class="grid rise">' +
        '<section class="card span-12" style="--i:0"><h2 class="t-h2">Colours</h2><p class="t-small" style="margin:8px 0 20px">Site colours plus the approved drawing palette. Soft tints of sunflower, mint, coral and lime sit behind drawings.</p>' +
          '<div class="swatches">' + colours.map(function (c) { return '<div class="swatch"><i style="background:' + c[1] + (c[1] === '#ffffff' ? ';box-shadow:inset 0 -1px 0 var(--line)' : '') + '"></i><span>' + c[0] + ' <small>' + c[1] + ', ' + c[2] + '</small></span></div>'; }).join('') + '</div></section>' +
        '<section class="card span-7" style="--i:1"><h2 class="t-h2">Type</h2>' +
          '<div style="margin-top:12px">' +
          '<div class="type-row"><span class="t-tiny">Display, Coolvetica</span><span class="t-display">Guten Tag</span></div>' +
          '<div class="type-row"><span class="t-tiny">Heading 1</span><span class="t-h1">Your next class</span></div>' +
          '<div class="type-row"><span class="t-tiny">Heading 2</span><span class="t-h2">Unit 4: Making plans</span></div>' +
          '<div class="type-row"><span class="t-tiny">Heading 3</span><span class="t-h3">Separable verbs</span></div>' +
          '<div class="type-row"><span class="t-tiny">Lead, Satoshi 19</span><p class="t-lead">Every page teaches, then checks that you got it.</p></div>' +
          '<div class="type-row"><span class="t-tiny">Body, Satoshi 16</span><p class="t-body">Ich stehe jeden Tag um sieben Uhr auf.</p></div>' +
          '<div class="type-row"><span class="t-tiny">Small, Satoshi 14</span><p class="t-small">Words from Tuesday’s class</p></div>' +
          '</div></section>' +
        '<section class="card span-5" style="--i:2"><h2 class="t-h2">Buttons</h2>' +
          '<div class="btn-row" style="margin-top:22px"><button class="btn btn--primary" type="button">Continue</button><button class="btn btn--lime" type="button">Join class</button></div>' +
          '<div class="btn-row" style="margin-top:12px"><button class="btn btn--ghost" type="button">See the calendar</button><button class="btn btn--quiet" type="button">Not now</button></div>' +
          '<h2 class="t-h2" style="margin-top:34px">Progress</h2>' +
          '<div class="meter" style="margin-top:18px" aria-hidden="true"><i style="width:62%"></i></div>' +
          '<h2 class="t-h2" style="margin-top:34px">Bubbles</h2>' +
          '<div style="display:flex;flex-direction:column;gap:46px;margin-top:20px;padding-bottom:30px">' +
            '<div><span class="bub bub--inline say">A speech bubble says something.</span></div>' +
            '<div><span class="bub bub--inline think">A thought cloud thinks it.</span></div></div>' +
        '</section>' +
        '<section class="card span-12" style="--i:3"><h2 class="t-h2">The book character</h2><p class="t-small" style="margin:8px 0 20px">Reactions in every exercise. Lime cheeks when it is happy.</p>' +
          '<div class="moods">' + Cast.moods.map(function (m) { return '<div class="mood">' + Cast.book(m) + '<span class="t-small">' + moodNames[m] + '</span></div>'; }).join('') + '</div></section>' +
        '<section class="card span-4" style="--i:4"><h2 class="t-h2">Cards</h2><p class="t-small" style="margin-top:8px">White on bone with a soft shadow, 32px corners (24px on phones). Cards you can tap lift on hover.</p></section>' +
        '<a class="card card--forest span-4" style="--i:5" href="#/kit"><h2 class="t-h2">Forest card</h2><p class="t-small" style="margin-top:8px">For the one thing that matters most on a screen, like the next class.</p></a>' +
        '<a class="card card--mint span-4" style="--i:6" href="#/kit"><h2 class="t-h2">Tinted card</h2><p class="t-small" style="margin-top:8px">Behind drawings and tasks. Sunflower, mint, coral, lime and bone tints.</p></a>' +
        '<section class="card span-12" style="--i:7"><div class="card__row" style="flex-wrap:wrap;gap:28px">' +
          '<div class="loader" style="--w:120px" role="img" aria-label="The Alimun loader">' + loaderInner() + '</div>' +
          '<div style="flex:1;min-width:240px"><h2 class="t-h2">The loader</h2><p class="t-body" style="margin-top:10px">One loading animation everywhere: opening the dashboard, joining a class, tests and payment.</p>' +
          '<div class="btn-row" style="margin-top:18px"><button class="btn btn--primary btn--sm" type="button" data-demo-loader>Show it full screen</button></div></div>' +
        '</div></section>' +
      '</div>';
  }

  function loaderInner() {
    return '<div class="whirl whirl--outer"></div><div class="whirl whirl--inner"></div><div class="spark"></div>' +
      '<div class="mark"><svg viewBox="290 360 445 445" aria-hidden="true">' +
      Cast.logoPath +
      '<circle fill="#d5af33" cx="453" cy="605" r="19"/><circle fill="#d5af33" cx="574" cy="605" r="19"/></svg></div>';
  }

  /* ---------- Loader ---------- */
  function showLoader(message, ms) {
    loadingScreen.querySelector('p').textContent = message || '';
    loadingScreen.classList.remove('is-done');
    loadingScreen.setAttribute('aria-hidden', 'false');
    if (ms) setTimeout(hideLoader, ms);
  }
  function hideLoader() {
    loadingScreen.classList.add('is-done');
    loadingScreen.setAttribute('aria-hidden', 'true');
  }

  /* ---------- Routing ---------- */
  var current = null;
  function routeFromHash() {
    var id = (location.hash.match(/^#\/([a-z]+)/) || [])[1];
    return byId[id] ? id : 'home';
  }
  function render(id, animate) {
    var r = byId[id];
    var html = id === 'home' ? homeView() : id === 'kit' ? kitView() : soonView(r);
    var swap = function () {
      view.innerHTML = html;
      view.classList.remove('is-leaving');
      document.title = r.label + ' – Alimun';
      top.querySelector('.top__title').textContent = r.label;
      app.querySelectorAll('[data-route]').forEach(function (a) {
        if (a.getAttribute('data-route') === id) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
      });
      var more = app.querySelector('[data-more]');
      more.classList.toggle('is-active', BAR.indexOf(id) === -1);
      if (animate) { window.scrollTo(0, 0); view.focus({ preventScroll: true }); }
    };
    if (animate && current) { view.classList.add('is-leaving'); setTimeout(swap, 150); } else swap();
    current = id;
  }

  function setSheet(open) {
    document.body.classList.toggle('is-sheet-open', open);
    app.querySelector('[data-more]').setAttribute('aria-expanded', String(open));
    if (open) { var a = sheet.querySelector('a'); if (a) a.focus(); }
  }

  /* ---------- Boot ---------- */
  function boot() {
    app = document.getElementById('app');
    loadingScreen = document.getElementById('loading');
    renderShell();
    render(routeFromHash(), false);

    window.addEventListener('hashchange', function () { setSheet(false); var id = routeFromHash(); if (id !== current) render(id, true); });
    window.addEventListener('scroll', function () { top.classList.toggle('is-scrolled', window.scrollY > 8); }, { passive: true });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setSheet(false); });

    app.addEventListener('click', function (e) {
      var t = e.target.closest('[data-more],[data-close],[data-join],[data-demo-loader],[data-replay],[data-sample-task]');
      if (!t) return;
      if (t.hasAttribute('data-more')) setSheet(!document.body.classList.contains('is-sheet-open'));
      else if (t.hasAttribute('data-close')) setSheet(false);
      else if (t.hasAttribute('data-join')) showLoader('Connecting you to your class', 2200);
      else if (t.hasAttribute('data-demo-loader')) showLoader('Opening your dashboard', 2200);
      else if (t.hasAttribute('data-replay')) render('kit', false);
      else if (t.hasAttribute('data-sample-task')) { t.animate([{ transform: 'scale(1)' }, { transform: 'scale(.97)' }, { transform: 'scale(1)' }], { duration: 260, easing: 'ease-out' }); }
    });

    var started = Date.now();
    var ready = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    ready.then(function () { setTimeout(hideLoader, Math.max(0, 900 - (Date.now() - started))); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
