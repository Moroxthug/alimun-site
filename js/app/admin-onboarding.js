/* Alimun admin: Teacher onboarding (docs/TEACHER_ONBOARDING_PLAN.md). English only.
   #/onboarding   each approved teacher (and each teacher about to give a trial class) with how far they are in the
   teacher dashboard's Getting started and how often they have opened the practice classroom; then the tutorial's
   videos: one per part and language, uploaded here to the public teacher-tutorial bucket, with what to show in each.
   Data: /api/onboarding?action=admin and ?action=video-set. Signed out or ?sample=1: a sample, nothing uploaded. */
(function () {
  'use strict';
  var A = null, root = null, D = null, LANG = 'en', no = 0;
  var PARTS = [
    { id: 'dashboard', h: 'Find your way around your dashboard',
      show: 'Open alimun.com/app/teach on Today. Point at the next class card (time, students, Check in, Start the class, Prepare the notes), then To do and what lands there (notes to write, homework to mark, messages, 1:1 notes). Open the menu groups Teaching, Create and Account, then show the phone bar and More. Two minutes.' },
    { id: 'availability', h: 'Tell us when you can teach',
      show: 'Classes, then Your availability: add a weekday block with Add free time and remove one. Then When you can teach: start date, language, levels, kinds of classes, substitute. Back on Classes, show where Course contracts appear with Accept and Decline. Two to three minutes.' },
    { id: 'classroom', h: 'Check in and start your class',
      show: 'On Today an hour before a class: Check in (at least 5 minutes before). Then Start the class from 15 minutes before: the video, the Board button, the side panel with Chat, Notes and Words, and joining again if you leave. Mention the reminder emails. Two minutes; the practice classroom is fine for filming.' },
    { id: 'practice', h: 'Try the classroom',
      show: 'Getting started, then Open the practice classroom. Check camera and microphone, open the Board, write with the pen, change page, add an empty page, Show the answers, Who can write. Copy the learner link and open it on a phone to show the learner side. One to two minutes.' },
    { id: 'board', h: 'Teach with the prepared lessons and the board',
      show: 'Lessons: open a course and a lesson (plan, tips, board pages, activities, homework). On a class date’s notes page, Lesson for this class and Change the lesson. In the practice classroom: Everyone solves this with a timer, seeing who has sent, Show to the class, End the exercise, Show the answers. Three minutes.' },
    { id: 'notes', h: 'After the class: notes and homework',
      show: 'A class date’s notes page: words with meanings, the grammar point, what you did, homework and due date, Publish the notes, Open the PDF. Then Homework: Set homework, then Mark a piece, Draft the feedback (an AI draft), change it, Send to the student. Three minutes.' },
    { id: 'profile', h: 'Your profile and payouts',
      show: 'Settings: About you, for students (what a good bio says), name, location, password, dashboard language, Save changes. Then Payouts: this month’s classes and the recorded payouts with their states, and Contact us. One to two minutes.' }
  ];
  var LANGS = [['en', 'English'], ['es', 'Spanish'], ['fr', 'French'], ['ma', 'French (Morocco)'], ['de', 'German'], ['pt', 'Portuguese'], ['it', 'Italian'], ['zh', 'Chinese'], ['ar', 'Arabic']];
  var STAGE = { approved: 'Approved', pre_approved: 'Interview passed', trial_scheduled: 'Trial class booked', trial_done: 'Trial class given' };

  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real'; }
  function when(at) { return A.fmt(at, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }); }
  function safeUrl(u) { try { var x = new URL(u); return x.protocol === 'https:' ? x.href : null; } catch (e) { return null; } }
  function loading() { return '<div class="rd-loading"><div class="loader" style="--w:56px" role="img" aria-label="Loading">' + A.loaderInner() + '</div></div>'; }
  function title(id) { var p = PARTS.filter(function (x) { return x.id === id; })[0]; return p ? p.h : id; }
  function sample() {
    var n = Date.now(), ago = function (h) { return new Date(n - h * 3600000).toISOString(); };
    return { parts: PARTS.map(function (p) { return p.id; }), teachers: [
      { id: 't1', full_name: 'Ana Weber', status: 'approved', hiring_stage: 'approved', done: ['dashboard', 'availability', 'classroom'], practice_at: null, practice_count: 0, finished_at: null, updated_at: ago(20) },
      { id: 't2', full_name: 'James Hall', status: 'approved', hiring_stage: 'approved', done: PARTS.map(function (p) { return p.id; }), practice_at: ago(50), practice_count: 3, finished_at: ago(48), updated_at: ago(48) },
      { id: 't3', full_name: 'Lucía Gómez', status: 'pending', hiring_stage: 'trial_scheduled', done: [], practice_at: ago(3), practice_count: 1, finished_at: null, updated_at: ago(3) }
    ], videos: [] };
  }

  function teacherRow(x) {
    var next = PARTS.filter(function (p) { return (x.done || []).indexOf(p.id) < 0; })[0];
    var where = x.status !== 'approved' ? 'Getting started opens once approved.'
      : x.finished_at ? 'Finished Getting started on ' + when(x.finished_at) + '.'
      : !(x.done || []).length ? 'Has not started Getting started yet.'
      : 'Done ' + x.done.length + ' of ' + PARTS.length + ' parts; next is “' + title(next.id) + '”' + (x.updated_at ? ', last progress ' + when(x.updated_at) : '') + '.';
    var practice = x.practice_count ? 'Opened the practice classroom ' + (x.practice_count === 1 ? 'once' : x.practice_count + ' times') + ', last on ' + when(x.practice_at) + '.' : 'Has not opened the practice classroom.';
    return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(STAGE[x.hiring_stage] || STAGE[x.status] || x.status) + '</span>' +
      '<span><b>' + esc(x.full_name || 'No name') + '</b><small>' + esc(where + ' ' + practice) + '</small></span></div>';
  }
  function videoOf(part) { return (D.videos || []).filter(function (v) { return v.part === part && v.lang === LANG; })[0] || null; }
  function videoCard(p, i) {
    var v = videoOf(p.id), u = v ? safeUrl(v.url) : null, en = LANG !== 'en' ? (D.videos || []).filter(function (x) { return x.part === p.id && x.lang === 'en'; })[0] : null;
    return '<section class="card span-6" style="--i:' + (3 + i) + '" data-part="' + esc(p.id) + '"><h3 class="t-h3">' + esc(p.h) + '</h3>' +
      '<p class="t-small" style="margin-top:6px"><b>What to show:</b> ' + esc(p.show) + '</p>' +
      (u ? '<video class="ob-video" style="margin-top:12px" controls preload="metadata" playsinline src="' + esc(u) + '"></video><p class="t-tiny">Uploaded ' + esc(when(v.updated_at)) + '.</p>'
        : '<p class="t-small" style="margin-top:12px">' + esc(LANG === 'en' ? 'No video yet: teachers see the text and the question only.' : en ? 'No video in this language: teachers see the English one.' : 'No video in this language or in English yet.') + '</p>') +
      '<div class="btn-row"><label class="btn btn--primary btn--sm">' + (u ? 'Replace the video' : 'Upload a video') + '<input type="file" accept="video/mp4,video/webm,video/quicktime" data-upload hidden></label>' +
      (u ? '<button class="btn btn--ghost btn--sm" type="button" data-remove>Remove</button>' : '') + '</div><p class="t-small st-msg" data-msg aria-live="polite"></p></section>';
  }
  function view() {
    var list = D.teachers || [];
    return '<div class="view__head"><div><h1 class="t-h1">Teacher onboarding</h1><p class="t-lead">How far each teacher is in Getting started and the practice classroom, and the tutorial’s videos.</p></div></div>' +
      '<div class="grid rise">' +
      '<section class="card span-12" style="--i:0"><h2 class="t-h2">Teachers</h2>' +
        (list.length ? '<div class="tt-week">' + list.map(teacherRow).join('') + '</div>' : '<p class="t-body" style="margin-top:10px">No approved teachers yet.</p>') + '</section>' +
      '<section class="card span-12" style="--i:1"><h2 class="t-h2">Videos</h2><p class="t-body" style="margin-top:8px">One short screen recording per part, in MP4 or WebM, up to the storage upload limit. With a video, a teacher has to watch it to the end before the part’s question opens. Each language falls back to the English video.</p>' +
        '<label class="st-lbl" for="ob-lang" style="margin-top:12px;display:block">Language of the videos</label><select id="ob-lang" class="st-in" style="max-width:280px">' +
        LANGS.map(function (l) { return '<option value="' + l[0] + '"' + (l[0] === LANG ? ' selected' : '') + '>' + esc(l[1]) + '</option>'; }).join('') + '</select></section>' +
      PARTS.map(videoCard).join('') +
      (real() ? '' : '<p class="t-tiny span-12">This is sample data. Nothing is uploaded.</p>') + '</div>';
  }
  function say(card, text, bad) { var m = card.querySelector('[data-msg]'); if (m) { m.textContent = text; m.classList.toggle('is-bad', !!bad); } }
  function reload() { return window.AlimunData.adminOnboarding().then(function (d) { D = d; root.innerHTML = view(); }); }
  function upload(card, file) {
    var part = card.getAttribute('data-part');
    if (!file) return;
    if (!/^video\/(mp4|webm|quicktime)$/.test(file.type)) { say(card, 'Choose an MP4, WebM or MOV file.', true); return; }
    if (!real()) { say(card, 'In the sample nothing is uploaded.'); return; }
    var ext = file.type === 'video/webm' ? 'webm' : file.type === 'video/quicktime' ? 'mov' : 'mp4';
    var path = part + '/' + LANG + '-' + Date.now().toString(36) + '.' + ext;
    card.querySelectorAll('button, input').forEach(function (b) { b.disabled = true; });
    say(card, 'Uploading ' + Math.round(file.size / 1048576) + ' MB… keep this page open.');
    window.AlimunData.uploadTutorialVideo(path, file).then(function () { return window.AlimunData.adminTutorialVideo(part, LANG, path); })
      .then(reload, function (e) { card.querySelectorAll('button, input').forEach(function (b) { b.disabled = false; }); say(card, 'The upload did not finish: ' + ((e && e.message) || 'please try again') + '.', true); });
  }
  function remove(card, btn) {
    var part = card.getAttribute('data-part');
    if (btn.getAttribute('data-sure') !== '1') { btn.setAttribute('data-sure', '1'); btn.textContent = 'Remove it from the tutorial'; say(card, 'Teachers will no longer see this video. Press again to remove it.'); return; }
    if (!real()) { say(card, 'In the sample nothing is removed.'); return; }
    btn.disabled = true;
    window.AlimunData.adminTutorialVideo(part, LANG, null).then(reload, function (e) { btn.disabled = false; say(card, 'Not removed: ' + ((e && e.message) || 'please try again') + '.', true); });
  }
  function bind() {
    if (root.__aob) return;
    root.__aob = true;
    root.addEventListener('change', function (e) {
      if (e.target.id === 'ob-lang') { LANG = e.target.value; root.innerHTML = view(); return; }
      if (e.target.hasAttribute('data-upload')) upload(e.target.closest('[data-part]'), e.target.files && e.target.files[0]);
    });
    root.addEventListener('click', function (e) { var b = e.target.closest('[data-remove]'); if (b && !b.disabled) remove(b.closest('[data-part]'), b); });
  }
  function mount(v, parts, helpers) {
    var my = ++no;
    A = helpers; root = v; root.innerHTML = loading();
    bind();
    var get = real() ? window.AlimunData.adminOnboarding() : Promise.resolve(sample());
    return get.then(function (d) {
      if (my !== no) return { stale: true };
      D = d; root.innerHTML = view();
      return { title: 'Teacher onboarding' };
    }, function (e) {
      if (my === no) root.innerHTML = '<div class="card"><p class="t-body">Teacher onboarding did not load: ' + esc((e && e.message) || 'please try again') + '.</p></div>';
      return { stale: true };
    });
  }
  window.AlimunAdminOnboarding = { mount: mount, reset: function () { no++; } };
})();
