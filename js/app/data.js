/* Alimun app: the signed-in student's data for Home (docs/DASHBOARD_PLAN.md, step 3) and course book progress (step 4).
   Browser client with the publishable key; row-level security decides what each account can read and write.
   The only write is the student's own book progress (practice_progress, ex_key "book:<book>:<unit>:<page or test>").
   Signed out, or with ?sample=1, the shell uses js/app/sample-data.js instead. */
(function () {
  'use strict';
  var URL = 'https://dgaiasmefcbrtzqwdyri.supabase.co';
  var KEY = 'sb_publishable_6epxmytr0e38p6OI77U_NQ_8pFzrzlh';
  var LANG_CODES = { English: 'en', German: 'de', French: 'fr', Spanish: 'es', Italian: 'it', Portuguese: 'pt' };
  var DAY = 86400000;

  var sb = null;
  function client() {
    if (!sb && window.supabase && window.supabase.createClient) {
      sb = window.supabase.createClient(URL, KEY, { auth: { autoRefreshToken: true, persistSession: true, storageKey: 'alimun-auth' } });
      if (AS) viewAs(sb);
    }
    return sb;
  }

  /* ---------- An admin viewing someone's dashboard (admin pages, part 2) ----------
     /app/teach?as=<teacher profile id> or /app/preview?as=<student profile id>, opened by a signed-in admin: the
     dashboard is drawn for that person (reads run as the admin, whom every row rule lets read), and nothing can be
     changed: inserts, updates, upserts, deletes, functions that write, password changes and every non-GET call to
     /api answer "read-only". For anyone who is not an admin the parameter is ignored. */
  var AS = (location.search.match(/[?&]as=([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i) || [])[1] || null;
  var AS_KIND = /^\/app\/teach/.test(location.pathname) ? 'teacher' : 'student';
  var VA = null;
  var READ_RPCS = { my_threads: true, cohort_classmates: true };
  function readOnly() {
    var p = Promise.resolve({ data: null, error: { message: 'Read-only: an admin is viewing this dashboard', code: 'view_as_read_only' } });
    var px = new Proxy(function () {}, {
      get: function (_, k) { if (k === 'then') return p.then.bind(p); if (k === 'catch') return p.catch.bind(p); if (k === 'finally') return p.finally.bind(p); return function () { return px; }; },
      apply: function () { return px; }
    });
    return px;
  }
  function viewAs(c) {
    var from = c.from.bind(c), rpc = c.rpc.bind(c), fetch0 = window.fetch.bind(window);
    c.from = function (t) {
      var q = from(t);
      if (!VA) return q;
      return { select: q.select.bind(q), insert: readOnly, update: readOnly, upsert: readOnly, delete: readOnly };
    };
    c.rpc = function (name, args) { return VA && !READ_RPCS[name] ? readOnly() : rpc(name, args); };
    var updateUser = c.auth.updateUser.bind(c.auth);
    c.auth.updateUser = function (x) { return VA ? readOnly() : updateUser(x); };
    window.fetch = function (u, o) {
      var method = String((o && o.method) || 'GET').toUpperCase(), path = String(u && u.url || u);
      if (VA && method !== 'GET' && /^(\/|https:\/\/alimun\.com\/)api\//.test(path)) {
        return Promise.resolve(new Response(JSON.stringify({ error: 'Read-only: an admin is viewing this dashboard' }), { status: 403, headers: { 'Content-Type': 'application/json' } }));
      }
      return fetch0(u, o);
    };
  }
  /* The signed-in session, or for an admin viewing someone, a session that names that person (the access token stays
     the admin's, so row rules still see an admin). Every function below asks this, never c.auth.getSession(). */
  var found = null;
  function mySession() {
    var c = client();
    return c.auth.getSession().then(function (x) {
      var s = x.data && x.data.session;
      if (!AS || !s || (s.user.app_metadata || {}).role !== 'admin') return x;
      if (!found) {
        var table = AS_KIND === 'teacher' ? 'teacher_profiles' : 'student_profiles';
        found = c.from(table).select('id, user_id, full_name').eq('id', AS).maybeSingle().then(function (r) {
          if (r.error || !r.data) return null;
          var t = r.data;
          var cos = AS_KIND === 'teacher' ? c.from('cohorts').select('id').eq('teacher_id', t.id) : c.from('enrollments').select('cohort_id').eq('student_id', t.id).eq('status', 'active');
          return cos.then(function (cr) {
            VA = { kind: AS_KIND, id: t.id, userId: t.user_id, name: t.full_name || '', cohorts: (cr.data || []).map(function (y) { return y.id || y.cohort_id; }) };
            viewAsBar();
            return VA;
          });
        });
      }
      return found.then(function (v) {
        if (!v) return x;
        var user = Object.assign({}, s.user, { id: v.userId, email: '', app_metadata: { role: v.kind }, user_metadata: {} });
        return { data: { session: Object.assign({}, s, { user: user }) }, error: null };
      });
    });
  }
  function viewAsBar() {
    var put = function () {
      if (document.querySelector('.va-bar')) return;
      var bar = document.createElement('div');
      bar.className = 'va-bar'; bar.setAttribute('role', 'status');
      bar.innerHTML = 'Viewing as <b></b>, read-only. Nothing here can be saved or sent. <a href="/app/admin#/' + (VA.kind === 'teacher' ? 'teachers/' : 'students/') + encodeURIComponent(VA.id) + '">Back to admin</a>';
      bar.querySelector('b').textContent = VA.name;
      document.body.appendChild(bar);
      document.body.classList.add('is-viewing-as');
    };
    if (document.body) put(); else document.addEventListener('DOMContentLoaded', put);
  }

  /* Local calendar day (browser time zone) as YYYY-MM-DD */
  function dayKey(d) {
    var x = new Date(d);
    return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0');
  }

  /* Days in a row with any activity, ending today (or yesterday, so a streak is not lost before today's practice) */
  function streakFrom(stamps) {
    var days = {};
    stamps.forEach(function (s) { if (s) days[dayKey(s)] = true; });
    var today = new Date(); today.setHours(12, 0, 0, 0);
    var activeToday = !!days[dayKey(today)];
    var n = 0, d = new Date(today.getTime() - (activeToday ? 0 : DAY));
    while (days[dayKey(d)]) { n++; d = new Date(d.getTime() - DAY); }
    var monday = new Date(today.getTime() - ((today.getDay() + 6) % 7) * DAY);
    var week = [];
    for (var i = 0; i < 7; i++) week.push(days[dayKey(monday.getTime() + i * DAY)] ? 1 : 0);
    var last = Object.keys(days).sort().pop() || null;
    return { days: n, week: week, todayIndex: (today.getDay() + 6) % 7, activeToday: activeToday, lastActive: last, monday: monday };
  }

  function rows(res) {
    if (res.error) throw res.error;
    return res.data || [];
  }

  /* Topic names from the level test bank, in the interface language */
  function topicLabels(language, ids, lang) {
    if (!ids || !ids.length || !LANG_CODES[language]) return Promise.resolve([]);
    return fetch('/data/level-test/' + encodeURIComponent(language) + '.json').then(function (r) { return r.ok ? r.json() : null; })
      .then(function (bank) {
        if (!bank) return ids;
        var ui = (bank.topicsI18n || {})[lang === 'ma' ? 'fr' : lang] || {};
        return ids.map(function (id) { return ui[id] || (bank.topics || {})[id] || id; });
      })
      .catch(function () { return ids; });
  }

  /* Returns null when nobody is signed in or the account has no student profile */
  function load(lang) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return mySession().then(function (r) {
      var session = r.data && r.data.session;
      if (!session) return null;
      return c.from('student_profiles').select('id, full_name, language, level, tier, goal_track, placement, enrolled_cohort_id, timezone')
        .eq('user_id', session.user.id).maybeSingle().then(function (pr) {
          if (pr.error) throw pr.error;
          var p = pr.data;
          if (!p) return { signedIn: true, profile: null };
          return loadFor(c, p, lang);
        });
    });
  }

  function loadFor(c, p, lang) {
    var cohortsOf = [];
    var since = new Date(Date.now() - 70 * DAY).toISOString();
    var today = dayKey(Date.now());

    return c.from('enrollments').select('cohort_id').eq('student_id', p.id).eq('status', 'active').then(function (er) {
      var cohorts = rows(er).map(function (e) { return e.cohort_id; });
      if (p.enrolled_cohort_id && cohorts.indexOf(p.enrolled_cohort_id) === -1) cohorts.push(p.enrolled_cohort_id);
      cohortsOf = cohorts.slice();

      var next = cohorts.length ? c.from('sessions')
        .select('id, scheduled_at, status, cohorts ( language, level, teacher_id )')
        .in('cohort_id', cohorts).in('status', ['scheduled', 'live'])
        .gte('scheduled_at', new Date(Date.now() - 90 * 60000).toISOString())
        .order('scheduled_at', { ascending: true }).limit(1) : null;
      var homework = cohorts.length ? c.from('assignments').select('id, title, due_date')
        .in('cohort_id', cohorts).or('due_date.is.null,due_date.gte.' + today).order('due_date', { ascending: true, nullsFirst: false }).limit(20) : null;

      return Promise.all([
        next,
        homework,
        c.from('assignment_submissions').select('assignment_id, submitted_at').eq('student_id', p.id),
        c.from('vocab_reviews').select('id', { count: 'exact', head: true }).eq('student_id', p.id).lte('due_on', today),
        c.from('vocab_reviews').select('last_reviewed_at').eq('student_id', p.id).gte('last_reviewed_at', since),
        c.from('practice_progress').select('updated_at').eq('student_id', p.id).gte('updated_at', since),
        c.from('exercise_results').select('created_at').eq('student_id', p.id).gte('created_at', since),
        c.from('session_attendance').select('joined_at').eq('student_id', p.id).gte('joined_at', since),
        topicLabels(p.placement && p.placement.language || p.language, p.placement && p.placement.topics, lang)
      ]);
    }).then(function (res) {
      res.cohorts = cohortsOf;
      /* The teacher's public name (teachers_public is a view over a function, so it cannot be embedded above) */
      var tid = res[0] && !res[0].error && res[0].data && res[0].data[0] && res[0].data[0].cohorts && res[0].data[0].cohorts.teacher_id;
      if (!tid) return res;
      return c.from('teachers_public').select('full_name').eq('id', tid).maybeSingle().then(function (tr) {
        res.teacher = tr.data && tr.data.full_name || '';
        return res;
      });
    }).then(function (res) {
      var nextRows = res[0] ? rows(res[0]) : [];
      var subs = rows(res[2]);
      var done = {};
      subs.forEach(function (s) { done[s.assignment_id] = true; });
      var openHw = (res[1] ? rows(res[1]) : []).filter(function (a) { return !done[a.id]; });
      if (res[3].error) throw res[3].error;

      var stamps = [];
      subs.forEach(function (s) { stamps.push(s.submitted_at); });
      rows(res[4]).forEach(function (x) { stamps.push(x.last_reviewed_at); });
      rows(res[5]).forEach(function (x) { stamps.push(x.updated_at); });
      rows(res[6]).forEach(function (x) { stamps.push(x.created_at); });
      rows(res[7]).forEach(function (x) { stamps.push(x.joined_at); });

      var s = nextRows[0] || null;
      var co = s && s.cohorts || {};
      var placement = p.placement && p.placement.level ? p.placement : null;
      return {
        signedIn: true,
        profile: {
          id: p.id,
          name: p.full_name || '',
          language: p.language || (placement && placement.language) || '',
          level: p.level || (placement && placement.level) || '',
          tier: p.tier || 'free',
          goal: p.goal_track || null,
          timezone: p.timezone || null,
          cohorts: res.cohorts || []
        },
        nextClass: s ? {
          id: s.id, at: s.scheduled_at, live: s.status === 'live', language: co.language || p.language, level: co.level || p.level,
          teacher: res.teacher || ''
        } : null,
        flashcardsDue: res[3].count || 0,
        homework: openHw,
        streak: streakFrom(stamps),
        placement: placement,
        topics: placement ? res[8] : []
      };
    });
  }

  /* Course book progress: one row per finished page or unit test */
  function bookProgress(studentId, bookId) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('practice_progress').select('ex_key, done, graded_score').eq('student_id', studentId)
      .like('ex_key', 'book:' + bookId + ':%').limit(1000).then(rows);
  }
  function saveBook(studentId, key, rec) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('practice_progress').upsert({
      student_id: studentId, ex_key: key, done: !!rec.done, graded_score: rec.score == null ? null : Math.round(rec.score),
      user_answer: { v: 1 }, updated_at: new Date().toISOString()
    }, { onConflict: 'student_id,ex_key' }).then(function (r) { if (r.error) throw r.error; });
  }

  /* Practice memory per item (practice_items, step 5): every item the student has answered */
  function practiceItems(studentId) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('practice_items').select('item_key, box, seen, wrong, last_at').eq('student_id', studentId).limit(5000).then(rows);
  }
  function savePracticeItem(studentId, key, r) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('practice_items').upsert({
      student_id: studentId, item_key: key, box: r.b, seen: r.n, wrong: r.w, last_at: new Date(r.at).toISOString()
    }, { onConflict: 'student_id,item_key' }).then(function (x) { if (x.error) throw x.error; });
  }
  /* Quiz scores (practice_progress rows "quiz:<book>:<scope>", step 7): best score per quiz */
  function quizScores(studentId) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('practice_progress').select('ex_key, graded_score').eq('student_id', studentId).like('ex_key', 'quiz:%').limit(500).then(rows);
  }

  /* Live classes (step 10): the student's classes from 60 days back to 90 days ahead, their published notes (with
     the class words), homework due dates, 1:1 bookings, attendance and the teachers' public names. Read through
     row-level security, like the class dashboard. */
  function classes(studentId, cohortIds) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    var from = new Date(Date.now() - 60 * DAY).toISOString(), to = new Date(Date.now() + 90 * DAY).toISOString();
    var none = Promise.resolve({ data: [] });
    var ids = cohortIds || [];
    return Promise.all([
      ids.length ? c.from('cohorts').select('id, language, level, tier, teacher_id, schedule_days, schedule_time, timezone').in('id', ids) : none,
      ids.length ? c.from('sessions').select('id, cohort_id, scheduled_at, status').in('cohort_id', ids).gte('scheduled_at', from).lte('scheduled_at', to).order('scheduled_at', { ascending: true }).limit(300) : none,
      ids.length ? c.from('session_notes').select('id, session_id, vocabulary, grammar_focus, exercises, homework, due_date, teacher_note, pdf_url, published_at, sessions!inner ( id, scheduled_at, cohort_id )')
        .in('sessions.cohort_id', ids).not('published_at', 'is', null).order('published_at', { ascending: false }).limit(100) : none,
      ids.length ? c.from('assignments').select('id, cohort_id, title, due_date').in('cohort_id', ids).not('due_date', 'is', null).gte('due_date', from.slice(0, 10)).limit(200) : none,
      c.from('one_on_one_bookings').select('id, kind, scheduled_at, duration_minutes, status, teacher_note, teacher_id').eq('student_id', studentId).gte('scheduled_at', from).order('scheduled_at', { ascending: true }).limit(100),
      c.from('session_attendance').select('session_id, joined_at').eq('student_id', studentId).gte('joined_at', from)
    ]).then(function (r) {
      r.forEach(function (x) { if (x && x.error) throw x.error; });
      var cohorts = r[0].data || [];
      var tids = {};
      cohorts.forEach(function (co) { if (co.teacher_id) tids[co.teacher_id] = true; });
      (r[4].data || []).forEach(function (b) { if (b.teacher_id) tids[b.teacher_id] = true; });
      var list = Object.keys(tids);
      return (list.length ? c.from('teachers_public').select('id, full_name').in('id', list) : none).then(function (tr) {
        var names = {};
        (tr.data || []).forEach(function (x) { names[x.id] = x.full_name || ''; });
        return { cohorts: cohorts, sessions: r[1].data || [], notes: r[2].data || [], homework: r[3].data || [], bookings: r[4].data || [], attended: (r[5].data || []).map(function (x) { return x.session_id; }), teachers: names };
      });
    });
  }
  /* Class words from the notes into the flashcards (vocab_reviews), a word already there kept as it is */
  function syncClassWords(studentId, notes) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    var seen = {}, out = [];
    (notes || []).forEach(function (n) {
      (Array.isArray(n.vocabulary) ? n.vocabulary : []).forEach(function (v) {
        var word = String((v && v.word) || '').trim().slice(0, 200), key = word.toLowerCase();
        if (!word || seen[key]) return;
        seen[key] = true;
        out.push({ student_id: studentId, word: word, word_key: key, definition: String(v.definition || '').trim().slice(0, 500) || null,
          example: String(v.example || '').trim().slice(0, 500) || null, source_note_id: n.id || null });
      });
    });
    if (!out.length) return Promise.resolve(0);
    return c.from('vocab_reviews').upsert(out, { onConflict: 'student_id,word_key', ignoreDuplicates: true }).then(function (x) { if (x.error) throw x.error; return out.length; });
  }
  /* Leaving a class: the student's own attendance row gets left_at (joined_at is set by /api/join-session) */
  function leftClass(studentId, sessionId) {
    var c = client();
    if (!c) return Promise.resolve();
    return c.from('session_attendance').update({ left_at: new Date().toISOString() }).eq('session_id', sessionId).eq('student_id', studentId).then(function () {});
  }

  /* Homework (step 11): the assignments of the student's classes, the student's own submissions, the teacher's
     feedback notes and the teachers' public names. Students can hand in and edit a submission while it is pending;
     the database (trg_guard_submission_columns) keeps marks for teachers. */
  function homework(studentId, cohortIds) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    var none = Promise.resolve({ data: [] }), ids = cohortIds || [];
    var cols = 'id, cohort_id, student_id, teacher_id, title, type, prompt, due_date, min_words, material, created_at';
    /* The class's homework (not set for one other student; row-level security hides those) and homework set for this
       student alone (a 1:1 student's has no class) */
    var both = Promise.all([
      ids.length ? c.from('assignments').select(cols).in('cohort_id', ids).order('created_at', { ascending: false }).limit(200) : none,
      c.from('assignments').select(cols).eq('student_id', studentId).order('created_at', { ascending: false }).limit(100)
    ]).then(function (r) {
      r.forEach(function (x) { if (x && x.error) throw x.error; });
      var seen = {}, out = [];
      (r[0].data || []).concat(r[1].data || []).forEach(function (a) { if (!seen[a.id]) { seen[a.id] = true; out.push(a); } });
      out.sort(function (a, b) { return String(b.created_at).localeCompare(String(a.created_at)); });
      return { data: out };
    });
    return Promise.all([
      both,
      c.from('assignment_submissions').select('id, assignment_id, submission_text, status, score, feedback, submitted_at, graded_at').eq('student_id', studentId).limit(500),
      c.from('student_feedback').select('id, teacher_id, feedback_text, created_at').eq('student_id', studentId).order('created_at', { ascending: false }).limit(20)
    ]).then(function (r) {
      r.forEach(function (x) { if (x && x.error) throw x.error; });
      var tids = {};
      (r[0].data || []).concat(r[2].data || []).forEach(function (x) { if (x.teacher_id) tids[x.teacher_id] = true; });
      var list = Object.keys(tids);
      return (list.length ? c.from('teachers_public').select('id, full_name').in('id', list) : none).then(function (tr) {
        var names = {};
        (tr.data || []).forEach(function (x) { names[x.id] = x.full_name || ''; });
        return { assignments: r[0].data || [], submissions: r[1].data || [], feedback: r[2].data || [], teachers: names };
      });
    });
  }
  /* Homework that is a book lesson, library piece or mock paper: recorded as handed in and marked once the student
     has finished it (complete_material_homework checks their practice; supabase/migrations/202610260900_teacher_homework.sql) */
  function completeMaterial(assignmentId) {
    var c = client();
    if (!c) return Promise.resolve({ done: false });
    return c.rpc('complete_material_homework', { p_assignment: assignmentId }).then(function (r) { if (r.error) throw r.error; return r.data || { done: false }; });
  }
  function handIn(studentId, assignmentId, text) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('assignment_submissions').upsert({ assignment_id: assignmentId, student_id: studentId, submission_text: text, status: 'pending', submitted_at: new Date().toISOString() },
      { onConflict: 'assignment_id,student_id' }).select('id, assignment_id, submission_text, status, score, feedback, submitted_at, graded_at').maybeSingle()
      .then(function (r) { if (r.error) throw r.error; return r.data; });
  }

  /* Progress (step 12): what the student has done, for skills, levels and history: every practice_progress row
     (book pages and tests, quizzes, mock tests, library), classes attended, homework handed in and marked (with
     its type), and the flashcards' boxes */
  function progress(studentId) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    var since = new Date(Date.now() - 120 * DAY).toISOString();
    return Promise.all([
      c.from('practice_progress').select('ex_key, done, graded_score, updated_at').eq('student_id', studentId).order('updated_at', { ascending: false }).limit(3000),
      c.from('session_attendance').select('session_id, joined_at').eq('student_id', studentId).gte('joined_at', since).limit(500),
      c.from('assignment_submissions').select('status, score, submitted_at, graded_at, assignments ( title, type )').eq('student_id', studentId).limit(500),
      c.from('vocab_reviews').select('box, last_reviewed_at, due_on').eq('student_id', studentId).limit(5000)
    ]).then(function (r) {
      r.forEach(function (x) { if (x && x.error) throw x.error; });
      return { rows: r[0].data || [], attendance: r[1].data || [], submissions: r[2].data || [], cards: r[3].data || [] };
    });
  }

  /* Settings (step 14): the student's own profile row and e-mail, and saving the fields a student may change (the
     database's guard_student_profile_columns keeps tier and billing for the payment webhook) */
  function settings() {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return mySession().then(function (x) {
      var session = x.data && x.data.session;
      if (!session) return null;
      return c.from('student_profiles').select('full_name, language, level, goal_track, goal_timeframe, timezone, preferred_days, preferred_time_start, preferred_time_end, tier, stripe_subscription_status, enrolled_cohort_id')
        .eq('user_id', session.user.id).maybeSingle().then(function (r) {
          if (r.error) throw r.error;
          return { email: session.user.email || '', profile: r.data };
        });
    });
  }
  function saveProfile(patch) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return mySession().then(function (x) {
      var session = x.data && x.data.session;
      if (!session) throw new Error('Not signed in');
      return c.from('student_profiles').update(Object.assign({}, patch, { updated_at: new Date().toISOString() })).eq('user_id', session.user.id).then(function (r) { if (r.error) throw r.error; });
    });
  }
  function changePassword(pw) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.auth.updateUser({ password: pw }).then(function (r) { if (r.error) throw r.error; });
  }

  /* Messages (step 13, supabase/migrations/202610251800_messages.sql): conversations through my_threads() and
     open_thread(); the database sets each sender's name and role and limits how fast messages can be sent */
  function myThreads() {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return mySession().then(function () { return c.rpc('my_threads'); }).then(function (r) {
      if (r.error) throw r.error;
      var list = r.data || [];
      /* Viewing as someone: an admin can see every conversation, so keep only that person's */
      if (VA) list = list.filter(function (th) { return VA.kind === 'teacher' ? th.teacher_id === VA.id || (th.kind === 'class' && VA.cohorts.indexOf(th.cohort_id) > -1) : th.student_id === VA.id || (th.kind === 'class' && VA.cohorts.indexOf(th.cohort_id) > -1); });
      return list;
    });
  }
  function openThread(kind, cohortId, teacherId, studentId) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.rpc('open_thread', { p_kind: kind, p_cohort: cohortId || null, p_student: studentId || null, p_teacher: teacherId || null }).then(function (r) { if (r.error) throw r.error; return r.data; });
  }
  function threadMessages(threadId, after) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    var q = c.from('messages').select('id, sender_user, sender_role, sender_name, body, created_at').eq('thread_id', threadId);
    if (after) q = q.gt('created_at', after);
    return q.order('created_at', { ascending: false }).limit(after ? 100 : 80).then(function (r) { if (r.error) throw r.error; return (r.data || []).reverse(); });
  }
  function sendMessage(threadId, body) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('messages').insert({ thread_id: threadId, body: body }).select('id, sender_user, sender_role, sender_name, body, created_at').maybeSingle()
      .then(function (r) { if (r.error) throw r.error; return r.data; });
  }
  function markRead(threadId) {
    var c = client();
    if (!c) return Promise.resolve();
    return c.from('message_reads').upsert({ thread_id: threadId, last_read_at: new Date().toISOString() }, { onConflict: 'thread_id,user_id' }).then(function () {});
  }
  function userId() {
    var c = client();
    if (!c) return Promise.resolve(null);
    return mySession().then(function (x) { return x.data && x.data.session ? x.data.session.user.id : null; });
  }
  function classTeachers(cohortIds) {
    var c = client();
    if (!c || !cohortIds || !cohortIds.length) return Promise.resolve([]);
    return c.from('cohorts').select('id, language, level, teacher_id').in('id', cohortIds).then(function (r) {
      if (r.error) throw r.error;
      var cos = r.data || [], ids = cos.map(function (x) { return x.teacher_id; }).filter(Boolean);
      return (ids.length ? c.from('teachers_public').select('id, full_name').in('id', ids) : Promise.resolve({ data: [] })).then(function (tr) {
        var names = {};
        (tr.data || []).forEach(function (x) { names[x.id] = x.full_name || ''; });
        return cos.map(function (co) { return { cohort: co, teacherName: names[co.teacher_id] || '' }; });
      });
    });
  }

  /* Teacher dashboard, Today (step 15, part 1). Who is signed in and, for an approved teacher: their classes, classes
     from two weeks back to two weeks ahead with whether notes exist, homework waiting for a mark, 1:1s and unread
     messages. Row-level security limits every query to the teacher's own classes and students. */
  function teacherToday() {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return mySession().then(function (x) {
      var session = x.data && x.data.session;
      if (!session) return { signedIn: false };
      var role = (session.user.app_metadata || {}).role || null;
      return c.from('teacher_profiles').select('id, full_name, status, languages, location').eq('user_id', session.user.id).maybeSingle().then(function (tr) {
        if (tr.error) throw tr.error;
        var tp = tr.data;
        if (!tp) return { signedIn: true, role: role, teacher: null };
        if (tp.status !== 'approved') return { signedIn: true, role: role, teacher: tp, pending: true };
        return c.from('cohorts').select('id, language, level, goal_track, tier, max_students, enrolled_count, schedule_days, schedule_time, timezone, status')
          .eq('teacher_id', tp.id).order('created_at', { ascending: true }).then(function (cr) {
            var cos = rows(cr), ids = cos.map(function (co) { return co.id; });
            var now = Date.now(), from = new Date(now - 14 * DAY).toISOString(), to = new Date(now + 14 * DAY).toISOString();
            var none = Promise.resolve({ data: [] });
            return Promise.all([
              ids.length ? c.from('sessions').select('id, cohort_id, scheduled_at, status, session_notes(id, published_at)').in('cohort_id', ids)
                .gte('scheduled_at', from).lte('scheduled_at', to).order('scheduled_at', { ascending: true }) : none,
              ids.length ? c.from('assignment_submissions').select('id, submitted_at, assignment_id, student_profiles(full_name), assignments!inner(id, title, type, cohort_id)')
                .eq('status', 'pending').in('assignments.cohort_id', ids).order('submitted_at', { ascending: true }).limit(50) : none,
              c.from('one_on_one_bookings').select('id, kind, scheduled_at, duration_minutes, status, teacher_note, student_profiles(full_name)')
                .eq('teacher_id', tp.id).in('status', ['booked', 'completed']).gte('scheduled_at', from).lte('scheduled_at', to).order('scheduled_at', { ascending: true }).limit(60),
              c.rpc('my_threads').then(function (r) { return r; }, function () { return { data: [] }; })
            ]).then(function (res) {
              var sessions = rows(res[0]).map(function (s) {
                var n = Array.isArray(s.session_notes) ? s.session_notes[0] : s.session_notes;
                return { id: s.id, cohortId: s.cohort_id, at: s.scheduled_at, status: s.status, notes: n ? (n.published_at ? 'published' : 'draft') : null };
              });
              var waiting = rows(res[1]).map(function (r) {
                return { id: r.id, at: r.submitted_at, student: (r.student_profiles || {}).full_name || '', title: (r.assignments || {}).title || '', type: (r.assignments || {}).type || '', cohortId: (r.assignments || {}).cohort_id };
              });
              var oto = rows(res[2]).map(function (b) {
                return { id: b.id, kind: b.kind, at: b.scheduled_at, minutes: b.duration_minutes || 20, status: b.status, noted: !!b.teacher_note, student: (b.student_profiles || {}).full_name || '' };
              });
              var unread = (res[3].data || []).reduce(function (n, th) { return n + (th.unread || 0); }, 0);
              return { signedIn: true, role: role, teacher: tp, cohorts: cos, sessions: sessions, waiting: waiting, oto: oto, unread: unread };
            });
          });
      });
    });
  }

  /* Teacher dashboard, Classes (step 15, part 2): the approved teacher's classes, class dates four weeks back to
     twelve ahead with their notes and how many students joined, 1:1s, and availability. */
  function teacherClasses() {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return mySession().then(function (x) {
      var session = x.data && x.data.session;
      if (!session) return { signedIn: false };
      return c.from('teacher_profiles').select('id, full_name, status, languages').eq('user_id', session.user.id).maybeSingle().then(function (tr) {
        if (tr.error) throw tr.error;
        var tp = tr.data;
        if (!tp || tp.status !== 'approved') return { signedIn: true, teacher: null };
        var now = Date.now(), from = new Date(now - 28 * DAY).toISOString(), to = new Date(now + 84 * DAY).toISOString();
        return c.from('cohorts').select('id, language, level, goal_track, tier, max_students, enrolled_count, schedule_days, schedule_time, timezone, status')
          .eq('teacher_id', tp.id).order('created_at', { ascending: true }).then(function (cr) {
            var cos = rows(cr), ids = cos.map(function (co) { return co.id; });
            var none = Promise.resolve({ data: [] });
            return Promise.all([
              ids.length ? c.from('sessions').select('id, cohort_id, scheduled_at, status, session_notes(id, vocabulary, grammar_focus, exercises, homework, due_date, teacher_note, pdf_url, published_at)')
                .in('cohort_id', ids).gte('scheduled_at', from).lte('scheduled_at', to).order('scheduled_at', { ascending: true }) : none,
              c.from('one_on_one_bookings').select('id, kind, scheduled_at, duration_minutes, status, teacher_note, student_profiles(full_name)')
                .eq('teacher_id', tp.id).in('status', ['booked', 'completed']).gte('scheduled_at', from).lte('scheduled_at', to).order('scheduled_at', { ascending: true }).limit(200),
              c.from('teacher_availability').select('id, day_of_week, start_time, end_time, timezone').eq('teacher_id', tp.id).order('day_of_week').order('start_time')
            ]).then(function (res) {
              var sessions = rows(res[0]).map(function (s) {
                var n = Array.isArray(s.session_notes) ? s.session_notes[0] : s.session_notes;
                return { id: s.id, cohortId: s.cohort_id, at: s.scheduled_at, status: s.status, notes: n || null, joined: 0 };
              });
              var past = sessions.filter(function (s) { return new Date(s.at).getTime() < now; }).map(function (s) { return s.id; });
              return (past.length ? c.from('session_attendance').select('session_id').in('session_id', past).not('joined_at', 'is', null).limit(5000) : none).then(function (ar) {
                var n = {};
                (ar.data || []).forEach(function (a) { n[a.session_id] = (n[a.session_id] || 0) + 1; });
                sessions.forEach(function (s) { s.joined = n[s.id] || 0; });
                var oto = rows(res[1]).map(function (b) {
                  return { id: b.id, kind: b.kind, at: b.scheduled_at, minutes: b.duration_minutes || 20, status: b.status, note: b.teacher_note || '', student: (b.student_profiles || {}).full_name || '' };
                });
                return { signedIn: true, teacher: tp, cohorts: cos, sessions: sessions, oto: oto, slots: rows(res[2]) };
              });
            });
          });
      });
    });
  }
  /* The teacher's notes for a class date: saved as a draft (one row per date); publishing goes through the server,
     which makes the PDF, sets published_at and emails the class the first time */
  function saveNotes(sessionId, n) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    var row = { session_id: sessionId, vocabulary: n.vocabulary || [], grammar_focus: n.grammar_focus || '', exercises: n.exercises || null,
      homework: n.homework || null, due_date: n.due_date || null, teacher_note: n.teacher_note || null };
    return c.from('session_notes').upsert(row, { onConflict: 'session_id' }).select('id, vocabulary, grammar_focus, exercises, homework, due_date, teacher_note, pdf_url, published_at').single()
      .then(function (r) { if (r.error) throw r.error; return r.data; });
  }
  /* POST to one of the site's functions with the signed-in user's token; rejects with the server's error text */
  function api(path, body) {
    return token().then(function (tok) {
      return fetch(path, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + (tok || '') }, body: JSON.stringify(body) });
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok) { var e = new Error(j.error || j.message || String(r.status)); e.status = r.status; e.body = j; throw e; } return j; });
    });
  }
  function publishNotes(notesId) { return api('/api/generate-notes-pdf', { session_notes_id: notesId }); }
  function otoNote(id, note) { return api('/api/enroll', { action: 'oto-note', id: id, note: note }); }
  function createClass(body) { return api('/api/create-cohort', body); }
  function addSlot(teacherId, day, start, end, tz) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('teacher_availability').insert({ teacher_id: teacherId, day_of_week: day, start_time: start + ':00', end_time: end + ':00', timezone: tz })
      .select('id, day_of_week, start_time, end_time, timezone').single().then(function (r) { if (r.error) throw r.error; return r.data; });
  }
  function removeSlot(id) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('teacher_availability').delete().eq('id', id).then(function (r) { if (r.error) throw r.error; });
  }

  /* Teacher dashboard, Students (step 15, part 3): the approved teacher's students (active enrolments in their classes,
     and anyone with a 1:1 with them), with what is needed for the list and the "needs attention" rules: last activity,
     class dates of the last eight weeks and who joined them, homework set and handed in, flashcards learned.
     Never payment columns. Row-level security limits every read to the teacher's own students. */
  function teacherStudents() {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return mySession().then(function (x) {
      var session = x.data && x.data.session;
      if (!session) return { signedIn: false };
      return c.from('teacher_profiles').select('id, full_name, status').eq('user_id', session.user.id).maybeSingle().then(function (tr) {
        if (tr.error) throw tr.error;
        var tp = tr.data;
        if (!tp || tp.status !== 'approved') return { signedIn: true, teacher: null };
        return c.from('cohorts').select('id, language, level, goal_track, tier, max_students, enrolled_count, status').eq('teacher_id', tp.id).order('created_at', { ascending: true }).then(function (cr) {
          var cos = rows(cr), ids = cos.map(function (co) { return co.id; }), none = Promise.resolve({ data: [] });
          var now = Date.now(), since = new Date(now - 56 * DAY).toISOString();
          return Promise.all([
            ids.length ? c.from('enrollments').select('student_id, cohort_id, enrolled_at, student_profiles(id, full_name, level, language)').in('cohort_id', ids).eq('status', 'active') : none,
            c.from('one_on_one_bookings').select('student_id, scheduled_at, student_profiles(id, full_name, level, language)').eq('teacher_id', tp.id).in('status', ['booked', 'completed']).limit(500),
            ids.length ? c.from('sessions').select('id, cohort_id, scheduled_at, status').in('cohort_id', ids).gte('scheduled_at', since).lte('scheduled_at', new Date(now).toISOString()).neq('status', 'cancelled').order('scheduled_at', { ascending: true }) : none,
            ids.length ? c.from('assignments').select('id, cohort_id, title, type, due_date, created_at').in('cohort_id', ids).order('created_at', { ascending: false }).limit(300) : none
          ]).then(function (r) {
            var students = {}, add = function (p, cohortId, since) {
              if (!p || !p.id) return;
              var s = students[p.id] = students[p.id] || { id: p.id, name: p.full_name || '', level: p.level || '', language: p.language || '', cohorts: [], since: since, oto: false };
              if (cohortId) { s.cohorts.push(cohortId); if (since && (!s.since || since < s.since)) s.since = since; } else s.oto = true;
            };
            rows(r[0]).forEach(function (e) { add(e.student_profiles, e.cohort_id, e.enrolled_at); });
            rows(r[1]).forEach(function (b) { add(b.student_profiles, null, null); });
            var sids = Object.keys(students), sessions = rows(r[2]), asg = rows(r[3]);
            var sesIds = sessions.map(function (s) { return s.id; }), asgIds = asg.map(function (a) { return a.id; });
            if (!sids.length) return { signedIn: true, teacher: tp, cohorts: cos, students: [], sessions: sessions, assignments: asg };
            var since90 = new Date(now - 90 * DAY).toISOString();
            return Promise.all([
              sesIds.length ? c.from('session_attendance').select('session_id, student_id').in('session_id', sesIds).not('joined_at', 'is', null).limit(5000) : none,
              asgIds.length ? c.from('assignment_submissions').select('assignment_id, student_id, status, score, submitted_at').in('assignment_id', asgIds).limit(5000) : none,
              c.from('practice_progress').select('student_id, updated_at').in('student_id', sids).gte('updated_at', since90).order('updated_at', { ascending: false }).limit(5000),
              c.from('practice_items').select('student_id, last_at').in('student_id', sids).gte('last_at', since90).order('last_at', { ascending: false }).limit(5000),
              c.from('vocab_reviews').select('student_id, box, last_reviewed_at').in('student_id', sids).limit(20000)
            ]).then(function (q) {
              var att = rows(q[0]), subs = rows(q[1]);
              sids.forEach(function (id) { var s = students[id]; s.last = null; s.learned = 0; s.cards = 0; });
              var seen = function (id, at) { var s = students[id]; if (s && at && (!s.last || at > s.last)) s.last = at; };
              rows(q[2]).forEach(function (x) { seen(x.student_id, x.updated_at); });
              rows(q[3]).forEach(function (x) { seen(x.student_id, x.last_at); });
              rows(q[4]).forEach(function (x) { var s = students[x.student_id]; if (!s) return; s.cards++; if (x.box >= 3) s.learned++; seen(x.student_id, x.last_reviewed_at); });
              subs.forEach(function (x) { seen(x.student_id, x.submitted_at); });
              return { signedIn: true, teacher: tp, cohorts: cos, students: sids.map(function (id) { return students[id]; }), sessions: sessions, attendance: att, assignments: asg, submissions: subs };
            });
          });
        });
      });
    });
  }
  /* One student for the teacher: the profile (no payment columns), what the Progress page counts, practice memory,
     flashcards and the teachers' notes (private ones included: the teacher can read them, the student cannot) */
  function teacherStudent(studentId) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return Promise.all([
      c.from('student_profiles').select('id, full_name, level, language, goal_track, placement').eq('id', studentId).maybeSingle(),
      progress(studentId),
      practiceItems(studentId),
      c.from('student_feedback').select('id, teacher_id, feedback_text, is_private, created_at').eq('student_id', studentId).order('created_at', { ascending: false }).limit(100),
      c.from('vocab_reviews').select('due_on').eq('student_id', studentId).lte('due_on', new Date().toISOString().slice(0, 10)).limit(5000)
    ]).then(function (r) {
      if (r[0].error) throw r[0].error;
      if (!r[0].data) return null;
      var notes = rows(r[3]), tids = notes.map(function (n) { return n.teacher_id; }).filter(function (v, i, a) { return v && a.indexOf(v) === i; });
      return (tids.length ? c.from('teachers_public').select('id, full_name').in('id', tids) : Promise.resolve({ data: [] })).then(function (tr) {
        var names = {};
        (tr.data || []).forEach(function (x) { names[x.id] = x.full_name || ''; });
        notes.forEach(function (n) { n.author = names[n.teacher_id] || ''; });
        return { profile: r[0].data, progress: r[1], items: r[2], notes: notes, due: (r[4].data || []).length };
      });
    });
  }
  /* A class's practice answers, for where the class struggles */
  function classItems(studentIds) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    if (!studentIds.length) return Promise.resolve({ items: [], book: [] });
    return Promise.all([
      c.from('practice_items').select('student_id, item_key, seen, wrong').in('student_id', studentIds).gt('seen', 0).limit(20000),
      c.from('practice_progress').select('student_id, ex_key, done, graded_score').in('student_id', studentIds).like('ex_key', 'book:%').limit(20000)
    ]).then(function (r) { return { items: rows(r[0]), book: rows(r[1]) }; });
  }
  function addStudentNote(teacherId, studentId, text, isPrivate) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('student_feedback').insert({ teacher_id: teacherId, student_id: studentId, feedback_text: text, is_private: !!isPrivate })
      .select('id, teacher_id, feedback_text, is_private, created_at').single().then(function (r) { if (r.error) throw r.error; return r.data; });
  }
  function deleteStudentNote(id) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('student_feedback').delete().eq('id', id).then(function (r) { if (r.error) throw r.error; });
  }

  /* Teacher dashboard, Homework (step 15, part 4): the approved teacher's classes and students (class enrolments and
     1:1 students), the homework they set and every submission to it */
  function teacherHomework() {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return mySession().then(function (x) {
      var session = x.data && x.data.session;
      if (!session) return { signedIn: false };
      return c.from('teacher_profiles').select('id, full_name, status').eq('user_id', session.user.id).maybeSingle().then(function (tr) {
        if (tr.error) throw tr.error;
        var tp = tr.data;
        if (!tp || tp.status !== 'approved') return { signedIn: true, teacher: null };
        return c.from('cohorts').select('id, language, level, goal_track, tier, status').eq('teacher_id', tp.id).order('created_at', { ascending: true }).then(function (cr) {
          var cos = rows(cr), ids = cos.map(function (co) { return co.id; }), none = Promise.resolve({ data: [] });
          return Promise.all([
            ids.length ? c.from('enrollments').select('student_id, cohort_id, enrolled_at, student_profiles(id, full_name, level, language)').in('cohort_id', ids).eq('status', 'active') : none,
            c.from('one_on_one_bookings').select('student_id, student_profiles(id, full_name, level, language)').eq('teacher_id', tp.id).in('status', ['booked', 'completed']).limit(500),
            c.from('assignments').select('id, cohort_id, student_id, title, type, prompt, due_date, min_words, material, created_at').eq('teacher_id', tp.id).order('created_at', { ascending: false }).limit(300)
          ]).then(function (r) {
            var students = {};
            rows(r[0]).forEach(function (e) { var p = e.student_profiles; if (!p) return; var s = students[p.id] = students[p.id] || { id: p.id, name: p.full_name || '', level: p.level, language: p.language, cohorts: [], since: e.enrolled_at }; s.cohorts.push(e.cohort_id); });
            rows(r[1]).forEach(function (b) { var p = b.student_profiles; if (!p || students[p.id]) return; students[p.id] = { id: p.id, name: p.full_name || '', level: p.level, language: p.language, cohorts: [], oto: true }; });
            var asg = rows(r[2]), aids = asg.map(function (a) { return a.id; });
            return (aids.length ? c.from('assignment_submissions').select('id, assignment_id, student_id, submission_text, status, score, feedback, submitted_at, graded_at').in('assignment_id', aids).limit(5000) : none).then(function (sr) {
              return { signedIn: true, teacher: tp, cohorts: cos, students: Object.keys(students).map(function (k) { return students[k]; }), assignments: asg, submissions: rows(sr) };
            });
          });
        });
      });
    });
  }
  function createHomework(row) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('assignments').insert(row).select('id, cohort_id, student_id, title, type, prompt, due_date, min_words, material, created_at').single()
      .then(function (r) { if (r.error) throw r.error; return r.data; });
  }
  function updateHomework(id, patch) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('assignments').update(patch).eq('id', id).select('id').single().then(function (r) { if (r.error) throw r.error; return r.data; });
  }
  function deleteHomework(id) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('assignments').delete().eq('id', id).then(function (r) { if (r.error) throw r.error; });
  }
  /* Marking: by the submission's id; the database lets the homework's teacher set status, mark and feedback only */
  function markSubmission(id, score, feedback) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('assignment_submissions').update({ status: 'graded', score: score, feedback: feedback, graded_at: new Date().toISOString() }).eq('id', id)
      .select('id, status, score, feedback, graded_at').single().then(function (r) { if (r.error) throw r.error; return r.data; });
  }
  function draftFeedback(submissionId) { return api('/api/ai?action=grade-submission', { submission_id: submissionId }); }
  function draftTask(prompt, system) { return api('/api/ai?action=grade', { prompt: prompt, system: system, json: true }); }

  /* Teacher dashboard, Material (step 15, part 5; supabase/migrations/202610261200_teacher_sets.sql): the teacher's own
     exercise sets, who each was sent to, and the results of those students (practice_progress "set:<id>") */
  function teacherSets() {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return teacherHomework().then(function (h) {
      if (!h || !h.teacher) return h;
      return c.from('teacher_sets').select('id, title, language, level, blocks, created_at, updated_at').eq('teacher_id', h.teacher.id).order('updated_at', { ascending: false }).limit(200).then(function (sr) {
        var sets = rows(sr), ids = sets.map(function (x) { return x.id; }), none = Promise.resolve({ data: [] });
        var sids = h.students.map(function (x) { return x.id; });
        return Promise.all([
          ids.length ? c.from('teacher_set_targets').select('id, set_id, cohort_id, student_id, sent_at').in('set_id', ids) : none,
          ids.length && sids.length ? c.from('practice_progress').select('student_id, ex_key, done, graded_score, updated_at').in('ex_key', ids.map(function (i) { return 'set:' + i; })).in('student_id', sids).limit(5000) : none
        ]).then(function (r) {
          h.sets = sets; h.targets = rows(r[0]); h.results = rows(r[1]);
          return h;
        });
      });
    });
  }
  function saveSet(row) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    var body = { title: row.title, language: row.language, level: row.level, blocks: row.blocks, updated_at: new Date().toISOString() };
    var q = row.id ? c.from('teacher_sets').update(body).eq('id', row.id) : c.from('teacher_sets').insert(Object.assign({ teacher_id: row.teacher_id }, body));
    return q.select('id, title, language, level, blocks, created_at, updated_at').single().then(function (r) { if (r.error) throw r.error; return r.data; });
  }
  function deleteSet(id) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('teacher_sets').delete().eq('id', id).then(function (r) { if (r.error) throw r.error; });
  }
  function sendSet(setId, cohortId, studentId) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('teacher_set_targets').insert({ set_id: setId, cohort_id: cohortId || null, student_id: studentId || null }).select('id, set_id, cohort_id, student_id, sent_at').single()
      .then(function (r) { if (r.error) throw r.error; return r.data; });
  }
  function unsendSet(targetId) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('teacher_set_targets').delete().eq('id', targetId).then(function (r) { if (r.error) throw r.error; });
  }
  /* The student's side: the sets their teachers sent to them or their classes, with their own results */
  function mySets(studentId) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('teacher_set_targets').select('set_id, sent_at').order('sent_at', { ascending: false }).limit(200).then(function (tr) {
      var tg = rows(tr), ids = tg.map(function (x) { return x.set_id; }).filter(function (v, i, a) { return a.indexOf(v) === i; });
      if (!ids.length) return [];
      return Promise.all([
        c.from('teacher_sets').select('id, teacher_id, title, language, level, blocks').in('id', ids),
        c.from('practice_progress').select('ex_key, done, graded_score').eq('student_id', studentId).in('ex_key', ids.map(function (i) { return 'set:' + i; }))
      ]).then(function (r) {
        var res = {}; rows(r[1]).forEach(function (x) { res[x.ex_key.slice(4)] = x; });
        var sent = {}; tg.forEach(function (x) { if (!sent[x.set_id]) sent[x.set_id] = x.sent_at; });
        return rows(r[0]).map(function (s) { s.sent_at = sent[s.id]; s.result = res[s.id] || null; return s; })
          .sort(function (a, b) { return String(b.sent_at).localeCompare(String(a.sent_at)); });
      });
    });
  }

  /* Teacher dashboard, Payouts (step 15, part 6): payouts recorded by Alimun (admins write them), and this month's
     classes marked as done and 1:1s completed. No amount is worked out in the browser (owner, 26 Oct 2026). */
  function teacherPayouts() {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return mySession().then(function (x) {
      var session = x.data && x.data.session;
      if (!session) return { signedIn: false };
      return c.from('teacher_profiles').select('id, full_name, status').eq('user_id', session.user.id).maybeSingle().then(function (tr) {
        if (tr.error) throw tr.error;
        var tp = tr.data;
        if (!tp || tp.status !== 'approved') return { signedIn: true, teacher: null };
        var first = new Date(); first.setDate(1); first.setHours(0, 0, 0, 0);
        return c.from('cohorts').select('id, language, level, tier').eq('teacher_id', tp.id).then(function (cr) {
          var cos = rows(cr), ids = cos.map(function (co) { return co.id; }), none = Promise.resolve({ data: [] });
          return Promise.all([
            c.from('teacher_payouts').select('id, period_start, period_end, sessions_count, amount_eur, status, paid_at').eq('teacher_id', tp.id).order('period_start', { ascending: false }).limit(100),
            ids.length ? c.from('sessions').select('id, cohort_id, scheduled_at').in('cohort_id', ids).eq('status', 'completed').gte('scheduled_at', first.toISOString()).lte('scheduled_at', new Date().toISOString()) : none,
            c.from('one_on_one_bookings').select('id, kind, scheduled_at, duration_minutes').eq('teacher_id', tp.id).eq('status', 'completed').gte('scheduled_at', first.toISOString())
          ]).then(function (r) {
            return { signedIn: true, teacher: tp, cohorts: cos, payouts: rows(r[0]), classes: rows(r[1]), oto: rows(r[2]), since: first.toISOString() };
          });
        });
      });
    });
  }
  /* Teacher dashboard, Settings: the teacher's profile and e-mail; the database (guard_teacher_profile_admin_fields)
     lets a teacher change only name, location, bio and specialty */
  function teacherProfile() {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return mySession().then(function (x) {
      var session = x.data && x.data.session;
      if (!session) return { signedIn: false };
      return c.from('teacher_profiles').select('id, full_name, location, bio, specialty, languages, status').eq('user_id', session.user.id).maybeSingle().then(function (r) {
        if (r.error) throw r.error;
        return { signedIn: true, email: session.user.email || '', teacher: r.data };
      });
    });
  }
  function saveTeacherProfile(patch) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return mySession().then(function (x) {
      var session = x.data && x.data.session;
      if (!session) throw new Error('Not signed in');
      return c.from('teacher_profiles').update(patch).eq('user_id', session.user.id).select('id').single().then(function (r) { if (r.error) throw r.error; });
    });
  }

  /* Admin (docs/DASHBOARD_PLAN.md, step 15, admin part 1): who is signed in, and for an admin (app_metadata.role, checked
     again by every row rule through is_admin()) the Overview's counts, today's classes, old unmarked homework, AI spend
     this month and the automatic jobs' last week. */
  function adminOverview() {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return mySession().then(function (x) {
      var session = x.data && x.data.session;
      if (!session) return { signedIn: false };
      if ((session.user.app_metadata || {}).role !== 'admin') return { signedIn: true, admin: false, role: (session.user.app_metadata || {}).role || null };
      var now = new Date(), day0 = new Date(now); day0.setHours(0, 0, 0, 0);
      var day1 = new Date(day0.getTime() + DAY), week = new Date(now.getTime() + 7 * DAY), month0 = new Date(now.getFullYear(), now.getMonth(), 1);
      var n = function (q) { return q.then(function (r) { if (r.error) throw r.error; return r.count || 0; }); };
      var head = { count: 'exact', head: true };
      return Promise.all([
        n(c.from('student_profiles').select('id', head)),
        n(c.from('student_profiles').select('id', head).eq('stripe_subscription_status', 'active')),
        n(c.from('teacher_profiles').select('id', head).eq('status', 'approved')),
        c.from('teacher_profiles').select('id, full_name, languages, created_at').eq('status', 'pending').order('created_at', { ascending: true }).limit(20),
        n(c.from('cohorts').select('id', head).in('status', ['open', 'full'])),
        n(c.from('enrollments').select('id', head).eq('status', 'active')),
        n(c.from('cohort_waitlist').select('id', head)),
        n(c.from('sessions').select('id', head).neq('status', 'cancelled').gte('scheduled_at', now.toISOString()).lt('scheduled_at', week.toISOString())),
        c.from('sessions').select('id, scheduled_at, status, cohorts(id, language, level, tier, enrolled_count, teacher_profiles(full_name))').neq('status', 'cancelled')
          .gte('scheduled_at', day0.toISOString()).lt('scheduled_at', day1.toISOString()).order('scheduled_at', { ascending: true }),
        c.from('assignment_submissions').select('id, submitted_at, assignments(title, teacher_id)').eq('status', 'pending').lt('submitted_at', new Date(now.getTime() - 7 * DAY).toISOString()).limit(200),
        c.from('v_ai_spend_daily').select('day, calls, cost_usd, failures').gte('day', month0.toISOString().slice(0, 10)),
        c.from('cron_runs').select('job, ran_at, ok').gte('ran_at', new Date(now.getTime() - 7 * DAY).toISOString()).order('ran_at', { ascending: false }).limit(3000)
      ]).then(function (r) {
        return { signedIn: true, admin: true, email: session.user.email || '',
          counts: { students: r[0], paying: r[1], teachers: r[2], pending: (r[3].data || []).length, classes: r[4], enrolled: r[5], waiting: r[6], week: r[7] },
          applications: rows(r[3]), today: rows(r[8]), oldHomework: rows(r[9]), ai: rows(r[10]), jobs: rows(r[11]) };
      });
    });
  }

  /* Admin pages, part 2: people. Admins read and change these through the row rules (is_admin()); emails, invites,
     teacher status changes and messages to people go through the admin server actions, which check the admin again. */
  function adminStudents() {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return Promise.all([
      c.from('student_profiles').select('id, user_id, full_name, language, level, tier, goal_track, stripe_subscription_status, enrolled_cohort_id, created_at').order('created_at', { ascending: false }).limit(2000),
      c.from('cohorts').select('id, language, level, tier, status, teacher_profiles(full_name)').limit(500)
    ]).then(function (r) { return { students: rows(r[0]), cohorts: rows(r[1]) }; });
  }
  function adminTeachers() {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return Promise.all([
      c.from('teacher_profiles').select('id, user_id, full_name, languages, experience_years, specialty, bio, location, hourly_rate, rating, tier_level, status, created_at, sessions_delivered').order('created_at', { ascending: false }).limit(1000),
      c.from('cohorts').select('id, teacher_id, language, level, tier, status, enrolled_count, max_students').limit(1000)
    ]).then(function (r) { return { teachers: rows(r[0]), cohorts: rows(r[1]) }; });
  }
  /* One student's file: their profile in full (payment status included), classes, homework, teachers' notes, and how
     active they have been, without the dashboard's own counting (the admin opens the dashboard for that) */
  function adminStudentFile(id) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    var since = new Date(Date.now() - 90 * DAY).toISOString();
    return Promise.all([
      c.from('student_profiles').select('*').eq('id', id).maybeSingle(),
      c.from('enrollments').select('id, status, enrolled_at, cancelled_at, cohorts(id, language, level, tier, status, teacher_profiles(full_name))').eq('student_id', id).order('enrolled_at', { ascending: false }),
      c.from('assignment_submissions').select('status, score, submitted_at, assignments(title)').eq('student_id', id).order('submitted_at', { ascending: false }).limit(20),
      c.from('student_feedback').select('feedback_text, is_private, created_at, teacher_id').eq('student_id', id).order('created_at', { ascending: false }).limit(20),
      c.from('practice_progress').select('ex_key, updated_at').eq('student_id', id).gte('updated_at', since).order('updated_at', { ascending: false }).limit(2000),
      c.from('vocab_reviews').select('box').eq('student_id', id).limit(5000),
      c.from('one_on_one_bookings').select('kind, scheduled_at, status, teacher_profiles(full_name)').eq('student_id', id).order('scheduled_at', { ascending: false }).limit(10)
    ]).then(function (r) {
      if (r[0].error) throw r[0].error;
      return { profile: r[0].data, enrollments: rows(r[1]), submissions: rows(r[2]), notes: rows(r[3]), activity: rows(r[4]), cards: rows(r[5]), oto: rows(r[6]) };
    });
  }
  function adminTeacherFile(id) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return Promise.all([
      c.from('teacher_profiles').select('*').eq('id', id).maybeSingle(),
      c.from('cohorts').select('id, language, level, tier, status, enrolled_count, max_students, schedule_days, schedule_time, timezone').eq('teacher_id', id),
      c.from('teacher_availability').select('day_of_week, start_time, end_time, timezone').eq('teacher_id', id).order('day_of_week').order('start_time'),
      c.from('teacher_reviews').select('rating, review_text, created_at').eq('teacher_id', id).order('created_at', { ascending: false }).limit(10),
      c.from('teacher_payouts').select('period_start, period_end, amount_eur, status').eq('teacher_id', id).order('period_start', { ascending: false }).limit(6)
    ]).then(function (r) {
      if (r[0].error) throw r[0].error;
      return { profile: r[0].data, cohorts: rows(r[1]), slots: rows(r[2]), reviews: rows(r[3]), payouts: rows(r[4]) };
    });
  }
  function adminSave(table, id, patch) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from(table).update(patch).eq('id', id).select('id').single().then(function (r) { if (r.error) throw r.error; return r.data; });
  }
  function adminSignups() {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('email_signups').select('email, source, locale, page, created_at').order('created_at', { ascending: false }).limit(2000).then(rows);
  }
  function adminEmails(userIds) { return api('/api/admin/teacher?action=emails', { user_ids: userIds }).then(function (j) { return j.emails || {}; }); }
  function adminInvite(body) { return api('/api/admin/teacher?action=invite', body); }
  function adminTeacherStatus(ids, status, notify, reason) { return api('/api/admin/teacher?action=set-status', { teacher_ids: ids, status: status, notify: !!notify, reason: reason || '' }); }
  function adminEmail(targetId, subject, body) { return api('/api/send-admin-email', { targetId: targetId, emailType: 'promo', customSubject: subject, customBody: body }); }
  function adminPlanEmail(targetId, tier) { return api('/api/send-admin-email', { targetId: targetId, emailType: 'tier-upgrade', tierName: tier }); }

  /* Admin pages, part 3: classes, schedule, waiting list, messages. Reads go through the row rules (is_admin());
     creating a class, seats, moving and removing students, changing a class date and offering a place go through the
     admin server actions, which check the admin again and send the emails. */
  var CLASS_COLS = 'id, teacher_id, language, level, goal_track, tier, max_students, description, schedule_days, schedule_time, timezone, status, enrolled_count, created_at, teacher_profiles(full_name)';
  function adminClasses() {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return Promise.all([
      c.from('cohorts').select(CLASS_COLS).order('created_at', { ascending: false }).limit(1000),
      c.from('teacher_profiles').select('id, full_name, languages').eq('status', 'approved').order('full_name').limit(1000),
      c.from('cohort_waitlist').select('cohort_id, offer_expires_at').limit(5000),
      c.from('sessions').select('cohort_id, scheduled_at').eq('status', 'scheduled').gte('scheduled_at', new Date().toISOString()).order('scheduled_at', { ascending: true }).limit(5000)
    ]).then(function (r) {
      if (r[0].error) throw r[0].error;
      return { classes: rows(r[0]), teachers: rows(r[1]), waiting: rows(r[2]), upcoming: rows(r[3]) };
    });
  }
  /* One class: who is in it, who waits for it, every date, and the students who could be added (same language) */
  function adminClassFile(id, language) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return Promise.all([
      c.from('cohorts').select(CLASS_COLS).eq('id', id).maybeSingle(),
      c.from('enrollments').select('id, enrolled_at, student_profiles(id, full_name, level, tier, language, stripe_subscription_status)').eq('cohort_id', id).eq('status', 'active').order('enrolled_at', { ascending: true }),
      c.from('cohort_waitlist').select('id, added_at, offered_at, offer_expires_at, student_profiles(id, full_name, level, tier)').eq('cohort_id', id).order('added_at', { ascending: true }),
      c.from('sessions').select('id, scheduled_at, status').eq('cohort_id', id).order('scheduled_at', { ascending: true }).limit(500),
      c.from('student_profiles').select('id, full_name, level, tier, enrolled_cohort_id').eq('language', language).order('full_name').limit(2000),
      c.from('cohorts').select('id, language, level, tier, status, enrolled_count, max_students, schedule_days, schedule_time, timezone, teacher_profiles(full_name)').eq('language', language).in('status', ['open', 'full']).limit(200)
    ]).then(function (r) {
      if (r[0].error) throw r[0].error;
      return { klass: r[0].data, roster: rows(r[1]), waiting: rows(r[2]), sessions: rows(r[3]), students: rows(r[4]), others: rows(r[5]).filter(function (o) { return o.id !== id; }) };
    });
  }
  function adminTeacherSlots(teacherId) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('teacher_availability').select('day_of_week, start_time, end_time, timezone').eq('teacher_id', teacherId).order('day_of_week').order('start_time').then(rows);
  }
  function adminCreateClass(body) { return api('/api/create-cohort', body); }
  function adminClassUpdate(id, patch) { return api('/api/admin/teacher?action=class-update', Object.assign({ cohort_id: id }, patch)); }
  function adminMoveStudent(studentId, cohortId, notify) { return api('/api/admin/teacher?action=enrollment-move', { student_id: studentId, cohort_id: cohortId, notify: !!notify }); }
  function adminRemoveStudent(studentId, notify) { return api('/api/admin/teacher?action=enrollment-remove', { student_id: studentId, notify: !!notify }); }
  /* Class dates from `since` to `until` (ISO), with their class and teacher */
  function adminSchedule(since, until) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('sessions').select('id, cohort_id, scheduled_at, status, cohorts(id, language, level, tier, timezone, status, enrolled_count, teacher_profiles(full_name))')
      .gte('scheduled_at', since).lt('scheduled_at', until).order('scheduled_at', { ascending: true }).limit(5000).then(rows);
  }
  function adminSessionUpdate(body) { return api('/api/admin/teacher?action=session-update', body); }
  function adminWaitlist() {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('cohort_waitlist').select('id, cohort_id, added_at, offered_at, offer_expires_at, student_profiles(id, full_name, level, tier, stripe_subscription_status), cohorts(id, language, level, tier, status, enrolled_count, max_students, schedule_days, schedule_time, timezone, teacher_profiles(full_name))')
      .order('added_at', { ascending: true }).limit(5000).then(rows);
  }
  function adminWaitlistRemove(id) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('cohort_waitlist').delete().eq('id', id).select('id').then(function (r) { if (r.error) throw r.error; if (!(r.data || []).length) throw new Error('They were no longer on the waiting list'); });
  }
  function adminWaitlistOffer(id) { return api('/api/admin/teacher?action=waitlist-offer', { waitlist_id: id }); }
  /* Every conversation (an admin can see them all through can_see_thread()); hidden messages included for admins */
  function adminThreads() {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('message_threads').select('id, kind, cohort_id, last_message_at, created_at, cohorts(language, level, tier, teacher_profiles(full_name)), student_profiles(full_name), teacher_profiles(full_name)')
      .order('last_message_at', { ascending: false, nullsFirst: false }).limit(2000).then(rows);
  }
  function adminThreadMessages(threadId) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('messages').select('id, sender_role, sender_name, body, created_at, hidden_at').eq('thread_id', threadId).order('created_at', { ascending: false }).limit(500)
      .then(function (r) { return rows(r).reverse(); });
  }
  function adminHideMessage(id, hide) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('messages').update({ hidden_at: hide ? new Date().toISOString() : null }).eq('id', id).select('id, hidden_at').single().then(function (r) { if (r.error) throw r.error; return r.data; });
  }

  /* Library (practice_progress rows "lib:<shelf>:<piece>", step 9): the best result of each piece */
  function libraryResults(studentId) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('practice_progress').select('ex_key, graded_score').eq('student_id', studentId).like('ex_key', 'lib:%').limit(1000).then(rows);
  }
  /* Mock tests (practice_progress rows "mock:<test>:<paper>", step 8): the score of each finished paper, and one
     paper's answers and marks (user_answer) */
  function mockResults(studentId) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('practice_progress').select('ex_key, graded_score, updated_at').eq('student_id', studentId).like('ex_key', 'mock:%').limit(500).then(rows);
  }
  function mockResult(studentId, key) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('practice_progress').select('user_answer').eq('student_id', studentId).eq('ex_key', key).maybeSingle().then(function (r) { if (r.error) throw r.error; return r.data; });
  }
  function saveMock(studentId, key, score, answer) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('practice_progress').upsert({
      student_id: studentId, ex_key: key, done: true, graded_score: score == null ? null : Math.round(score),
      user_answer: answer, updated_at: new Date().toISOString()
    }, { onConflict: 'student_id,ex_key' }).then(function (r) { if (r.error) throw r.error; });
  }

  /* Flashcards (vocab_reviews, step 6): the student's cards, new cards (a word already there is kept), a review */
  function cards(studentId) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('vocab_reviews').select('id, word, word_key, definition, example, box, due_on, correct_count, wrong_count, last_reviewed_at')
      .eq('student_id', studentId).order('due_on', { ascending: true }).limit(3000).then(rows);
  }
  function addCards(studentId, list) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('vocab_reviews').upsert(list.map(function (r) {
      return { student_id: studentId, word: r.word, word_key: r.word_key, definition: r.definition || null, example: r.example || null };
    }), { onConflict: 'student_id,word_key', ignoreDuplicates: true }).then(function (x) { if (x.error) throw x.error; });
  }
  function updateCard(id, patch) {
    var c = client();
    if (!c) return Promise.reject(new Error('Supabase did not load'));
    return c.from('vocab_reviews').update(patch).eq('id', id).then(function (x) { if (x.error) throw x.error; });
  }

  /* The signed-in user's access token, for /api calls (null when signed out) */
  function token() {
    var c = client();
    if (!c) return Promise.resolve(null);
    return mySession().then(function (x) { return x.data && x.data.session ? x.data.session.access_token : null; });
  }

  function signOut() { var c = client(); return c ? c.auth.signOut() : Promise.resolve(); }

  window.AlimunData = { viewingAs: function () { return VA; }, load: load, adminOverview: adminOverview, adminStudents: adminStudents, adminTeachers: adminTeachers, adminStudentFile: adminStudentFile, adminTeacherFile: adminTeacherFile, adminSave: adminSave, adminSignups: adminSignups, adminEmails: adminEmails, adminInvite: adminInvite, adminTeacherStatus: adminTeacherStatus, adminEmail: adminEmail, adminPlanEmail: adminPlanEmail, adminClasses: adminClasses, adminClassFile: adminClassFile, adminTeacherSlots: adminTeacherSlots, adminCreateClass: adminCreateClass, adminClassUpdate: adminClassUpdate, adminMoveStudent: adminMoveStudent, adminRemoveStudent: adminRemoveStudent, adminSchedule: adminSchedule, adminSessionUpdate: adminSessionUpdate, adminWaitlist: adminWaitlist, adminWaitlistRemove: adminWaitlistRemove, adminWaitlistOffer: adminWaitlistOffer, adminThreads: adminThreads, adminThreadMessages: adminThreadMessages, adminHideMessage: adminHideMessage, teacherToday: teacherToday, teacherClasses: teacherClasses, teacherStudents: teacherStudents, teacherHomework: teacherHomework, teacherSets: teacherSets, teacherPayouts: teacherPayouts, teacherProfile: teacherProfile, saveTeacherProfile: saveTeacherProfile, saveSet: saveSet, deleteSet: deleteSet, sendSet: sendSet, unsendSet: unsendSet, mySets: mySets, createHomework: createHomework, updateHomework: updateHomework, deleteHomework: deleteHomework, markSubmission: markSubmission, draftFeedback: draftFeedback, draftTask: draftTask, teacherStudent: teacherStudent, classItems: classItems, addStudentNote: addStudentNote, deleteStudentNote: deleteStudentNote, saveNotes: saveNotes, publishNotes: publishNotes, otoNote: otoNote, createClass: createClass, addSlot: addSlot, removeSlot: removeSlot, signOut: signOut, bookProgress: bookProgress, saveBook: saveBook, practiceItems: practiceItems, savePracticeItem: savePracticeItem, token: token, cards: cards, addCards: addCards, updateCard: updateCard, quizScores: quizScores, mockResults: mockResults, libraryResults: libraryResults, classes: classes, homework: homework, completeMaterial: completeMaterial, handIn: handIn, progress: progress, myThreads: myThreads, openThread: openThread, threadMessages: threadMessages, sendMessage: sendMessage, markRead: markRead, userId: userId, classTeachers: classTeachers, settings: settings, saveProfile: saveProfile, changePassword: changePassword, syncClassWords: syncClassWords, leftClass: leftClass, mockResult: mockResult, saveMock: saveMock, topicLabels: topicLabels, streakFrom: streakFrom, langCode: function (l) { return LANG_CODES[l] || null; } };
})();
