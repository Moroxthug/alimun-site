/**
 * ============================================================
 *  ALIMUN — Admin demo (teacher and student dashboards)
 *  /js/demo.js
 *
 *  Sample data for the admin demo views:
 *    teacher-dashboard.html?as=demo  → "Demo Teacher"
 *    student-dashboard.html?as=demo  → "Demo Student 1", a student in
 *                                       the demo teacher's class
 *  Lets the admin click through every screen and try new features
 *  without a real teacher, student or class. Everything lives in
 *  memory in this tab: nothing is read from or written to the
 *  database, realtime is off, and API calls are answered locally
 *  (1:1 booking) or refused. Reloading the page resets the demo.
 *
 *  Only js/view-as.js installs it, and only for admin sessions.
 * ============================================================
 */
(function () {
  const DEMO_ID = 'demo';
  const MSG = 'Not available in the demo: nothing is sent.';
  const uid = (n) => `00000000-0000-4000-8000-${String(n).padStart(12, '0')}`;
  let seq = 1000;
  const newId = () => uid(++seq);

  const day = 86400000;
  const now = Date.now();
  const iso = (ms) => new Date(ms).toISOString();
  const date = (ms) => iso(ms).slice(0, 10);
  // Next lesson: tomorrow 18:00 local time
  const next = new Date(now + day); next.setHours(18, 0, 0, 0);
  const lesson = (weeksBack) => next.getTime() - weeksBack * 7 * day;
  const tz = (() => { try { return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'; } catch { return 'UTC'; } })();

  const TEACHER = { id: uid(1), user_id: uid(2), full_name: 'Demo Teacher', languages: ['English'], status: 'approved',
    hourly_rate: 25, location: 'Demo', bio: 'Demo teacher profile.', specialty: 'Demo specialty', sessions_delivered: 3,
    rating: null, badges: [], created_at: iso(now - 90 * day) };
  const teacherPublic = { id: TEACHER.id, full_name: TEACHER.full_name, bio: TEACHER.bio, specialty: TEACHER.specialty,
    languages: TEACHER.languages, sessions_delivered: TEACHER.sessions_delivered, rating: TEACHER.rating, badges: [] };
  const COHORT = { id: uid(10), teacher_id: TEACHER.id, language: 'English', level: 'B1', goal_track: 'foundations',
    tier: 'intensive', max_students: 6, schedule_days: [next.getDay()], schedule_time: '18:00', timezone: tz,
    status: 'open', enrolled_count: 4, description: 'Demo class', created_at: iso(now - 30 * day), teacher_profiles: teacherPublic };
  const cohortRef = { id: COHORT.id, language: 'English', level: 'B1', goal_track: 'foundations', enrolled_count: 4, teacher_profiles: teacherPublic };

  const STUDENTS = [1, 2, 3, 4].map((n) => ({ id: uid(20 + n), user_id: uid(100 + n), full_name: `Demo Student ${n}`, level: 'B1',
    language: 'English', goal_track: 'foundations', tier: n === 1 ? 'intensive' : 'focused', enrolled_cohort_id: COHORT.id,
    timezone: tz, waitlist_opt_in: false, stripe_subscription_status: 'active', created_at: iso(now - 30 * day) }));
  const ME = STUDENTS[0];
  const studentRef = (s) => ({ id: s.id, full_name: s.full_name, level: s.level });

  const SESSIONS = [0, 1, 2, 3].map((w) => {
    const id = uid(30 + w);
    const s = { id, cohort_id: COHORT.id, scheduled_at: iso(lesson(w)), daily_room_url: null,
      status: w === 0 ? 'scheduled' : 'completed', created_at: iso(lesson(w) - 7 * day), cohorts: cohortRef, session_notes: null };
    if (w > 0) {
      s.session_notes = { id: uid(40 + w), session_id: id, grammar_focus: `Demo topic, week ${4 - w}`,
        vocabulary: [{ word: 'demo', definition: 'sample word', example: 'This is a demo sentence.' }],
        exercises: 'Demo exercises', homework: 'Demo homework', due_date: date(lesson(w) + 5 * day),
        teacher_note: 'Demo note from the teacher.', pdf_url: null, published_at: iso(lesson(w) + 2 * 3600000),
        created_at: iso(lesson(w)), sessions: { id, scheduled_at: s.scheduled_at, cohort_id: COHORT.id } };
    }
    return s;
  });

  const ASSIGNMENTS = [0, 1, 2].map((w) => ({ id: uid(50 + w), cohort_id: COHORT.id, teacher_id: TEACHER.id,
    title: `Demo homework ${3 - w}`, type: 'writing', prompt: 'Write a short paragraph (demo).', min_words: 40,
    due_date: date(lesson(w) + 5 * day), created_at: iso(lesson(w) + 3600000) }));

  // Student 1: homework 1 graded, homework 2 pending, homework 3 not done yet
  const SUBS = [[0, 2, 'graded'], [0, 1, 'pending'], [1, 1, 'pending'], [2, 2, 'graded']].map(([si, ai, st], i) => {
    const s = STUDENTS[si], a = ASSIGNMENTS[ai];
    return { id: uid(60 + i), assignment_id: a.id, student_id: s.id, submission_text: 'Demo submission text.',
      status: st, score: st === 'graded' ? 80 : null, feedback: st === 'graded' ? 'Demo feedback.' : null,
      submitted_at: iso(now - (i + 1) * day), graded_at: st === 'graded' ? iso(now - day / 2) : null,
      student_profiles: studentRef(s), assignments: { id: a.id, title: a.title, type: a.type, cohort_id: a.cohort_id } };
  });
  ASSIGNMENTS.forEach((a) => { a.assignment_submissions = SUBS.filter((s) => s.assignment_id === a.id); });

  const CATS = ['grammar', 'vocabulary', 'listening', 'speaking', 'writing'];
  const RESULTS = [];
  STUDENTS.forEach((s, i) => CATS.forEach((c, j) => RESULTS.push({ id: newId(), student_id: s.id, category: c,
    ex_type: 'demo', title: 'Demo exercise', score: 50 + ((i * 7 + j * 11) % 45), created_at: iso(now - (i + j) * day) })));

  const tables = {
    teacher_profiles: [TEACHER],
    teachers_public: [teacherPublic],
    teacher_reviews: [],
    cohorts: [COHORT],
    cohort_waitlist: [],
    student_profiles: STUDENTS,
    sessions: SESSIONS,
    session_notes: SESSIONS.map((s) => s.session_notes).filter(Boolean),
    session_attendance: [1, 2].map((w) => ({ id: uid(85 + w), session_id: SESSIONS[w].id, student_id: ME.id,
      joined_at: iso(lesson(w)), left_at: iso(lesson(w) + 3600000), duration_minutes: 60 })),
    assignments: ASSIGNMENTS,
    assignment_submissions: SUBS,
    exercise_results: RESULTS,
    teacher_availability: [
      { id: uid(70), teacher_id: TEACHER.id, day_of_week: next.getDay(), start_time: '17:00:00', end_time: '21:00:00', timezone: tz },
      { id: uid(71), teacher_id: TEACHER.id, day_of_week: (next.getDay() + 2) % 7, start_time: '17:00:00', end_time: '20:00:00', timezone: tz },
    ],
    teacher_payouts: [{ id: uid(80), teacher_id: TEACHER.id, period_start: date(now - 60 * day), period_end: date(now - 31 * day),
      sessions_count: 4, amount_eur: 108, status: 'paid', paid_at: iso(now - 28 * day), created_at: iso(now - 30 * day) }],
    student_feedback: [{ id: uid(90), student_id: ME.id, teacher_id: TEACHER.id, feedback_text: 'Demo progress note.',
      created_at: iso(now - 7 * day), teacher_profiles: { full_name: TEACHER.full_name } }],
    one_on_one_bookings: [{ id: uid(95), student_id: ME.id, teacher_id: TEACHER.id, kind: 'followup', cohort_id: COHORT.id,
      after_session_id: SESSIONS[1].id, week_of: date(lesson(1)), scheduled_at: iso(now + 2 * day), duration_minutes: 20,
      status: 'booked', teacher_note: null, student_profiles: { full_name: ME.full_name } }],
  };
  let credits = 1;

  const rpcs = {
    cohort_classmates: () => STUDENTS.map((s) => ({ full_name: s.full_name, is_me: s.id === ME.id })),
  };

  // ─ In-memory query builder (the subset of supabase-js the dashboards use) ─
  const get = (row, path) => path.split('.').reduce((v, k) => (v == null ? v : v[k]), row);
  const cmp = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

  function query(table) {
    const rows = () => tables[table] || (tables[table] = []);
    const filters = [];
    const orders = [];
    let op = 'select', payload = null, opts = {}, lim = null, one = null, head = false, returning = false;

    const api = {
      select(_cols, o) { if (op === 'select') { head = !!(o && o.head); } else returning = true; return api; },
      insert(p) { op = 'insert'; payload = p; return api; },
      upsert(p, o) { op = 'upsert'; payload = p; opts = o || {}; return api; },
      update(p) { op = 'update'; payload = p; return api; },
      delete() { op = 'delete'; return api; },
      eq(c, v) { filters.push((r) => get(r, c) === v); return api; },
      neq(c, v) { filters.push((r) => get(r, c) !== v); return api; },
      in(c, vs) { filters.push((r) => vs.includes(get(r, c))); return api; },
      gte(c, v) { filters.push((r) => get(r, c) >= v); return api; },
      gt(c, v) { filters.push((r) => get(r, c) > v); return api; },
      lte(c, v) { filters.push((r) => get(r, c) <= v); return api; },
      lt(c, v) { filters.push((r) => get(r, c) < v); return api; },
      is(c, v) { filters.push((r) => (get(r, c) ?? null) === v); return api; },
      not(c, o, v) { filters.push((r) => (o === 'is' ? (get(r, c) ?? null) !== v : get(r, c) !== v)); return api; },
      contains(c, vs) { filters.push((r) => [].concat(vs).every((v) => [].concat(get(r, c) || []).includes(v))); return api; },
      filter(c, o, v) {
        const f = { eq: (a) => a === v, neq: (a) => a !== v, gte: (a) => a >= v, lte: (a) => a <= v, gt: (a) => a > v, lt: (a) => a < v };
        filters.push((r) => (f[o] ? f[o](get(r, c)) : true)); return api;
      },
      order(c, o) { orders.push([c, o && o.ascending === false ? -1 : 1]); return api; },
      limit(n) { lim = n; return api; },
      range(a, b) { lim = b - a + 1; return api; },
      single() { one = 'single'; return api; },
      maybeSingle() { one = 'maybe'; return api; },
      then(res, rej) { return Promise.resolve().then(run).then(res, rej); },
    };

    function run() {
      const match = (r) => filters.every((f) => f(r));
      let out;
      if (op === 'insert' || op === 'upsert') {
        const keys = String(opts.onConflict || '').split(',').map((k) => k.trim()).filter(Boolean);
        out = [].concat(payload).map((p) => {
          const existing = op === 'upsert' && keys.length && rows().find((r) => keys.every((k) => r[k] === p[k]));
          if (existing) return Object.assign(existing, p);
          const row = { id: newId(), created_at: iso(Date.now()), ...p };
          rows().push(row);
          return row;
        });
      } else if (op === 'update') {
        out = rows().filter(match).map((r) => Object.assign(r, payload));
      } else if (op === 'delete') {
        out = rows().filter(match);
        tables[table] = rows().filter((r) => !match(r));
      } else {
        out = rows().filter(match);
        orders.slice().reverse().forEach(([c, d]) => { out = out.slice().sort((a, b) => d * cmp(get(a, c), get(b, c))); });
        if (lim != null) out = out.slice(0, lim);
      }
      const count = out.length;
      if (op !== 'select' && !returning && !one) return { data: null, error: null, count, status: 200 };
      if (head) return { data: null, error: null, count, status: 200 };
      if (one) {
        if (!out.length && one === 'single') return { data: null, error: { message: 'Not found in demo data', code: 'PGRST116' }, count: 0, status: 406 };
        return { data: out[0] || null, error: null, count, status: 200 };
      }
      return { data: out, error: null, count, status: 200 };
    }
    return api;
  }

  // ─ 1:1 bookings for the demo student (mirrors api/_lib/one-on-one.js) ─
  function otoStatus(kind) {
    const live = (b) => b.student_id === ME.id && b.status !== 'cancelled';
    const booking = tables.one_on_one_bookings.find((b) => live(b) && b.kind === 'followup') || null;
    const followup = { minutes: 20, canBook: !booking, reason: booking ? 'You have booked this week\'s follow-up.' : null,
      lesson: { id: SESSIONS[1].id, startsAt: SESSIONS[1].scheduled_at }, booking,
      window: { from: iso(now - day), to: iso(now + 3 * day) } };
    const credit = credits > 0 ? { minutes: 60, credits, canBook: true, reason: null } : null;
    let slots = null;
    if (kind === 'followup' || kind === 'credit') {
      slots = [];
      const step = kind === 'followup' ? 20 : 30;
      for (let d = 1; d <= 3; d++) {
        const base = new Date(now + d * day); base.setHours(17, 0, 0, 0);
        for (let m = 0; m < 120; m += step) slots.push(iso(base.getTime() + m * 60000));
      }
    }
    return { followup, credit, teacher: { id: TEACHER.id, name: TEACHER.full_name }, slots, kind };
  }

  function api(path, body) {
    if (path === '/api/enroll') {
      if (body.action === 'oto-status') return [200, otoStatus(body.kind)];
      if (body.action === 'oto-book') {
        const kind = body.kind === 'credit' ? 'credit' : 'followup';
        if (kind === 'credit') { if (credits < 1) return [409, { message: 'No credits left.' }]; credits -= 1; }
        const minutes = kind === 'followup' ? 20 : 60;
        const row = { id: newId(), student_id: ME.id, teacher_id: TEACHER.id, kind, cohort_id: COHORT.id, scheduled_at: body.start,
          duration_minutes: minutes, status: 'booked', teacher_note: null, student_profiles: { full_name: ME.full_name } };
        tables.one_on_one_bookings.push(row);
        return [200, { success: true, id: row.id, start: body.start, minutes, teacher: TEACHER.full_name }];
      }
      if (body.action === 'oto-cancel') {
        const b = tables.one_on_one_bookings.find((r) => r.id === body.id);
        if (!b) return [404, { message: 'Booking not found.' }];
        b.status = 'cancelled';
        const back = b.kind === 'credit';
        if (back) credits += 1;
        return [200, { success: true, creditReturned: back }];
      }
      if (body.action === 'oto-note') {
        const b = tables.one_on_one_bookings.find((r) => r.id === body.id);
        if (b) b.teacher_note = body.note;
        return [200, { success: true }];
      }
    }
    return [403, { error: MSG, message: MSG }];
  }

  // Realtime stand-in: subscriptions do nothing in the demo
  function fakeChannel() {
    const ch = { on: () => ch, subscribe: () => ch, unsubscribe: async () => 'ok', send: async () => 'ok' };
    return ch;
  }

  function install(sb) {
    if (sb.__alimunDemo) return;
    sb.__alimunDemo = true;
    window.ALIMUN_DEMO = true;
    sb.__alimunRealFrom = sb.from.bind(sb);
    sb.from = (table) => query(table);
    sb.rpc = async (name) => (rpcs[name] ? { data: rpcs[name](), error: null } : { data: null, error: { message: MSG } });
    sb.channel = () => fakeChannel();
    sb.removeChannel = async () => 'ok';
    if (sb.storage) {
      sb.storage.from = () => ({
        upload: async (path) => ({ data: { path }, error: null }),
        getPublicUrl: () => ({ data: { publicUrl: '' } }),
        createSignedUrl: async () => ({ data: null, error: { message: MSG } }),
        remove: async () => ({ data: [], error: null }),
      });
    }

    const origFetch = window.__alimunViewAsFetch || window.fetch.bind(window);
    window.fetch = async (input, init) => {
      const url = typeof input === 'string' ? input : (input && input.url) || '';
      let path = '';
      try { const u = new URL(url, location.href); if (u.origin === location.origin) path = u.pathname; } catch { /* ignore */ }
      // Public config is safe to read; every other /api call is answered here
      if (!path.startsWith('/api/') || path === '/api/stripe/config') return origFetch(input, init);
      let body = {};
      try { body = JSON.parse((init && init.body) || '{}'); } catch { /* not json */ }
      const [status, json] = api(path, body);
      return new Response(JSON.stringify(json), { status, headers: { 'Content-Type': 'application/json' } });
    };
  }

  window.AlimunDemo = { DEMO_ID, profiles: { teacher: TEACHER, student: ME }, install };
})();
