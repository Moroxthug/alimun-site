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
    }
    return sb;
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
    return c.auth.getSession().then(function (r) {
      var session = r.data && r.data.session;
      if (!session) return null;
      return c.from('student_profiles').select('id, full_name, language, level, tier, goal_track, placement, enrolled_cohort_id')
        .eq('user_id', session.user.id).maybeSingle().then(function (pr) {
          if (pr.error) throw pr.error;
          var p = pr.data;
          if (!p) return { signedIn: true, profile: null };
          return loadFor(c, p, lang);
        });
    });
  }

  function loadFor(c, p, lang) {
    var since = new Date(Date.now() - 70 * DAY).toISOString();
    var today = dayKey(Date.now());

    return c.from('enrollments').select('cohort_id').eq('student_id', p.id).eq('status', 'active').then(function (er) {
      var cohorts = rows(er).map(function (e) { return e.cohort_id; });
      if (p.enrolled_cohort_id && cohorts.indexOf(p.enrolled_cohort_id) === -1) cohorts.push(p.enrolled_cohort_id);

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
          goal: p.goal_track || null
        },
        nextClass: s ? {
          at: s.scheduled_at, live: s.status === 'live', language: co.language || p.language, level: co.level || p.level,
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
    return c.auth.getSession().then(function (x) { return x.data && x.data.session ? x.data.session.access_token : null; });
  }

  function signOut() { var c = client(); return c ? c.auth.signOut() : Promise.resolve(); }

  window.AlimunData = { load: load, signOut: signOut, bookProgress: bookProgress, saveBook: saveBook, practiceItems: practiceItems, savePracticeItem: savePracticeItem, token: token, cards: cards, addCards: addCards, updateCard: updateCard, topicLabels: topicLabels, streakFrom: streakFrom, langCode: function (l) { return LANG_CODES[l] || null; } };
})();
