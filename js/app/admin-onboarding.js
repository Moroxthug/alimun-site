/* Alimun admin: Teacher onboarding (docs/TEACHER_ONBOARDING_PLAN.md). English only.
   #/onboarding   each approved teacher (and each teacher about to give a trial class): whether they went through the
   dashboard tour, and how often they opened the practice classroom; then the overview video on the tour's welcome
   card, per language: an upload here (tour/<lang>.mp4 in the public teacher-tutorial bucket, e.g. a Claude Design
   version) replaces the recorded one shipped with the site (/videos/teacher-tour/). Data: /api/onboarding?action=admin.
   Signed out or ?sample=1: a sample. */
(function () {
  'use strict';
  var A = null, root = null, no = 0;
  var LANGS = [['en', 'English'], ['es', 'Spanish'], ['fr', 'French'], ['ma', 'French (Morocco)'], ['de', 'German'], ['pt', 'Portuguese'], ['it', 'Italian'], ['zh', 'Chinese'], ['ar', 'Arabic']];
  var BUCKET = 'https://dgaiasmefcbrtzqwdyri.supabase.co/storage/v1/object/public/teacher-tutorial/tour/', BUILT = '/videos/teacher-tour/';
  var HAS = {};
  function exists(u) { return fetch(u + '?check=' + Date.now(), { method: 'HEAD', cache: 'no-store' }).then(function (r) { return r.ok; }, function () { return false; }); }
  function check() {
    return Promise.all(LANGS.map(function (l) { return Promise.all([exists(BUCKET + l[0] + '.mp4'), exists(BUILT + l[0] + '.mp4')]).then(function (r) { HAS[l[0]] = { up: r[0], built: r[1] }; }); }));
  }
  var STAGE = { approved: 'Approved', pre_approved: 'Interview passed', trial_scheduled: 'Trial class booked', trial_done: 'Trial class given' };

  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real'; }
  function when(at) { return A.fmt(at, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }); }
  function loading() { return '<div class="rd-loading"><div class="loader" style="--w:56px" role="img" aria-label="Loading">' + A.loaderInner() + '</div></div>'; }
  function sample() {
    var n = Date.now(), ago = function (h) { return new Date(n - h * 3600000).toISOString(); };
    return { teachers: [
      { id: 't1', full_name: 'Ana Weber', status: 'approved', hiring_stage: 'approved', tour_done_at: null, tour_closed_at: ago(20), practice_at: null, practice_count: 0 },
      { id: 't2', full_name: 'James Hall', status: 'approved', hiring_stage: 'approved', tour_done_at: ago(48), tour_closed_at: null, practice_at: ago(47), practice_count: 3 },
      { id: 't3', full_name: 'Lucía Gómez', status: 'pending', hiring_stage: 'trial_scheduled', tour_done_at: null, tour_closed_at: null, practice_at: ago(3), practice_count: 1 }
    ] };
  }
  function row(x) {
    var tour = x.status !== 'approved' ? 'The dashboard tour opens once approved.'
      : x.tour_done_at ? 'Finished the dashboard tour on ' + when(x.tour_done_at) + '.'
      : x.tour_closed_at ? 'Closed the dashboard tour before the end on ' + when(x.tour_closed_at) + '.'
      : 'Has not opened the dashboard yet.';
    var practice = x.practice_count ? 'Opened the practice classroom ' + (x.practice_count === 1 ? 'once' : x.practice_count + ' times') + ', last on ' + when(x.practice_at) + '.' : 'Has not opened the practice classroom.';
    return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(STAGE[x.hiring_stage] || STAGE[x.status] || x.status) + '</span>' +
      '<span><b>' + esc(x.full_name || 'No name') + '</b><small>' + esc(tour + ' ' + practice) + '</small></span></div>';
  }
  function videoRow(l) {
    var h = HAS[l[0]] || {}, url = h.up ? BUCKET + l[0] + '.mp4' : h.built ? BUILT + l[0] + '.mp4' : null;
    var state = h.up ? 'Your upload plays.' : h.built ? 'The recorded version plays.' : 'No video in this language: the English one plays.';
    return '<div class="tt-row tt-row--plain" data-vlang="' + l[0] + '"><span><b>' + esc(l[1]) + '</b><small>' + esc(state) + '</small><small data-vmsg></small></span>' +
      '<span class="btn-row">' + (url ? '<a class="btn btn--ghost btn--sm" href="' + esc(url) + '" target="_blank" rel="noopener">Watch</a>' : '') +
      '<label class="btn btn--primary btn--sm">' + (h.up ? 'Replace' : 'Upload') + '<input type="file" accept="video/mp4" data-vup hidden></label>' +
      (h.up ? '<button class="btn btn--quiet btn--sm" type="button" data-vdel>Remove upload</button>' : '') + '</span></div>';
  }
  function videoCard() {
    return '<section class="card span-12" style="--i:1"><h2 class="t-h2">Overview video</h2>' +
      '<p class="t-body" style="margin-top:8px">The tour opens with a short video of the dashboard. A recorded version in each language is part of the site. To use your own, for example one made in Claude Design, upload an MP4 here; it plays instead of the recorded one, and "Remove upload" brings the recorded one back. Teachers see a new upload within a few minutes.</p>' +
      '<div class="tt-week" style="margin-top:12px" data-videos>' + LANGS.map(videoRow).join('') + '</div></section>';
  }
  function say(row, text, bad) { var m = row.querySelector('[data-vmsg]'); m.textContent = text; m.style.color = bad ? 'var(--coral)' : ''; }
  function redraw() { var box = root.querySelector('[data-videos]'); if (box) box.innerHTML = LANGS.map(videoRow).join(''); }
  function bind() {
    if (root.__aob) return;
    root.__aob = true;
    root.addEventListener('change', function (e) {
      if (!e.target.hasAttribute('data-vup')) return;
      var row = e.target.closest('[data-vlang]'), lang = row.getAttribute('data-vlang'), file = e.target.files && e.target.files[0];
      if (!file) return;
      if (file.type !== 'video/mp4') { say(row, 'Choose an MP4 file.', true); return; }
      if (!real()) { say(row, 'In the sample nothing is uploaded.'); return; }
      row.querySelectorAll('button, input').forEach(function (b) { b.disabled = true; });
      say(row, 'Uploading ' + Math.round(file.size / 1048576) + ' MB… keep this page open.');
      window.AlimunData.uploadTourVideo(lang, file).then(function () { return check(); }).then(redraw, function (er) {
        row.querySelectorAll('button, input').forEach(function (b) { b.disabled = false; }); say(row, 'The upload did not finish: ' + ((er && er.message) || 'please try again') + '.', true);
      });
    });
    root.addEventListener('click', function (e) {
      var b = e.target.closest('[data-vdel]'); if (!b || b.disabled) return;
      var row = b.closest('[data-vlang]');
      if (b.getAttribute('data-sure') !== '1') { b.setAttribute('data-sure', '1'); b.textContent = 'Remove it'; say(row, 'Press again to remove your upload; the recorded version plays again.'); return; }
      if (!real()) { say(row, 'In the sample nothing is removed.'); return; }
      b.disabled = true;
      window.AlimunData.removeTourVideo(row.getAttribute('data-vlang')).then(function () { return check(); }).then(redraw, function (er) { b.disabled = false; say(row, 'Not removed: ' + ((er && er.message) || 'please try again') + '.', true); });
    });
  }
  function view(d) {
    var list = d.teachers || [];
    return '<div class="view__head"><div><h1 class="t-h1">Teacher onboarding</h1><p class="t-lead">New teachers get a guided tour of their dashboard the first time they sign in, and can try the classroom on their own in the practice classroom.</p></div></div>' +
      '<div class="grid rise"><section class="card span-12" style="--i:0"><h2 class="t-h2">Teachers</h2>' +
      (list.length ? '<div class="tt-week">' + list.map(row).join('') + '</div>' : '<p class="t-body" style="margin-top:10px">No approved teachers yet.</p>') + '</section>' + videoCard() +
      (real() ? '' : '<p class="t-tiny span-12">This is sample data.</p>') + '</div>';
  }
  function mount(v, parts, helpers) {
    var my = ++no;
    A = helpers; root = v; root.innerHTML = loading();
    bind();
    var get = real() ? window.AlimunData.adminOnboarding() : Promise.resolve(sample());
    return Promise.all([get, check()]).then(function (r) { var d = r[0];
      if (my !== no) return { stale: true };
      root.innerHTML = view(d);
      return { title: 'Teacher onboarding' };
    }, function (e) {
      if (my === no) root.innerHTML = '<div class="card"><p class="t-body">Teacher onboarding did not load: ' + esc((e && e.message) || 'please try again') + '.</p></div>';
      return { stale: true };
    });
  }
  window.AlimunAdminOnboarding = { mount: mount, reset: function () { no++; } };
})();
