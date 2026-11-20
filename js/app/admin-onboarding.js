/* Alimun admin: Teacher onboarding (docs/TEACHER_ONBOARDING_PLAN.md). English only.
   #/onboarding   each approved teacher (and each teacher about to give a trial class): whether they went through the
   dashboard tour, and how often they opened the practice classroom. Data: /api/onboarding?action=admin.
   Signed out or ?sample=1: a sample. */
(function () {
  'use strict';
  var A = null, root = null, no = 0;
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
  function view(d) {
    var list = d.teachers || [];
    return '<div class="view__head"><div><h1 class="t-h1">Teacher onboarding</h1><p class="t-lead">New teachers get a guided tour of their dashboard the first time they sign in, and can try the classroom on their own in the practice classroom.</p></div></div>' +
      '<div class="grid rise"><section class="card span-12" style="--i:0"><h2 class="t-h2">Teachers</h2>' +
      (list.length ? '<div class="tt-week">' + list.map(row).join('') + '</div>' : '<p class="t-body" style="margin-top:10px">No approved teachers yet.</p>') + '</section>' +
      (real() ? '' : '<p class="t-tiny span-12">This is sample data.</p>') + '</div>';
  }
  function mount(v, parts, helpers) {
    var my = ++no;
    A = helpers; root = v; root.innerHTML = loading();
    var get = real() ? window.AlimunData.adminOnboarding() : Promise.resolve(sample());
    return get.then(function (d) {
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
