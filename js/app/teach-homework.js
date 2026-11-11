/* Alimun teacher dashboard, Homework (docs/DASHBOARD_PLAN.md, step 15, part 4). Routes under #/homework:
     (none)                 what is waiting to be marked (oldest first) and the homework the teacher has set
     new                    set homework for a class or one student (new/class/<id>, new/student/<id> choose it):
                            a written or spoken task (a draft can be written from a topic, then edited), or a course
                            book lesson, a library piece or a mock test paper, which is marked by itself when the
                            student finishes it (complete_material_homework, supabase/migrations/202610260900_teacher_homework.sql)
     <id>                   one piece of homework: who handed it in, who has not, change it, delete it while nobody has
     mark/<submission id>   marking: the student's work beside drafted feedback (/api/ai?action=grade-submission) that the
                            teacher edits before sending; or marked by hand
   Signed out or not a teacher: a sample, nothing is saved. Text: app_th_* keys. */
(function () {
  'use strict';
  var A = null, root = null, H = null, cache = {};
  var DAY = 86400000;
  var TYPES = ['Homework', 'Essay', 'Writing', 'Speaking', 'Grammar', 'Vocabulary'];
  var TYPE_KEYS = { Homework: 'app_hw_t_homework', Essay: 'app_hw_t_essay', Writing: 'app_hw_t_writing', Speaking: 'app_hw_t_speaking', Grammar: 'app_hw_t_grammar', Vocabulary: 'app_hw_t_vocabulary' };
  var KINDS = { task: 'app_th_k_task', book: 'app_th_k_book', lib: 'app_th_k_lib', mock: 'app_th_k_mock' };

  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real'; }
  function pct(n) { return new Intl.NumberFormat(A.locale, { style: 'percent' }).format(n / 100); }
  function shortDay(d) { return A.cap(A.fmt(d, { day: 'numeric', month: 'short' })); }
  function longDay(d) { return A.cap(A.fmt(d, { weekday: 'long', day: 'numeric', month: 'long' })); }
  function today() { return dayKey(Date.now()); }
  function dayKey(d) { var x = new Date(d); return x.getFullYear() + '-' + ('0' + (x.getMonth() + 1)).slice(-2) + '-' + ('0' + x.getDate()).slice(-2); }
  function paras(s) { return String(s || '').split(/\n{2,}/).map(function (p) { return '<p>' + esc(p).replace(/\n/g, '<br>') + '</p>'; }).join(''); }
  function getJSON(u) { if (!cache[u]) cache[u] = fetch(u).then(function (r) { if (!r.ok) throw new Error(u); return r.json(); }); return cache[u]; }
  function uiCode() { return A.lang === 'ma' ? 'fr' : (['en', 'es', 'fr', 'de', 'pt', 'zh', 'ar', 'it'].indexOf(A.lang) > -1 ? A.lang : 'en'); }
  function cohortOf(id) { return H.cohorts.filter(function (c) { return c.id === id; })[0] || null; }
  function studentOf(id) { return H.students.filter(function (s) { return s.id === id; })[0] || null; }
  function asgOf(id) { return H.assignments.filter(function (a) { return a.id === id; })[0] || null; }
  function subsOf(id) { return H.submissions.filter(function (s) { return s.assignment_id === id; }); }
  function whoName(a) { if (a.student_id) { var s = studentOf(a.student_id); return s ? s.name : t('app_th_one_student'); } var c = cohortOf(a.cohort_id); return c ? A.className(c) : ''; }
  /* The students a piece of homework is for */
  function audience(a) {
    if (a.student_id) { var s = studentOf(a.student_id); return s ? [s] : []; }
    return H.students.filter(function (s) { return s.cohorts.indexOf(a.cohort_id) > -1 && (!s.since || String(a.created_at) >= String(s.since).slice(0, 10)); });
  }
  function course(target) {
    var p = String(target || '').split(':');
    if (p[0] === 'class') { var c = cohortOf(p[1]); return c ? { language: c.language, level: c.level } : null; }
    if (p[0] === 'student') { var s = studentOf(p[1]); return s ? { language: s.language, level: String(s.level || '').slice(0, 2) } : null; }
    return null;
  }

  /* ---------- Sample ---------- */
  function sample() {
    var now = Date.now(), ago = function (d) { return new Date(now - d * DAY).toISOString(); };
    var cos = [{ id: 'c1', language: 'German', level: 'B1', goal_track: 'relocation', tier: 'focused', status: 'open' }, { id: 'c2', language: 'German', level: 'A2', goal_track: 'foundations', tier: 'intensive', status: 'open' }];
    var st = [['p1', 'Lukas Brandt', 'c1'], ['p2', 'Mei Chen', 'c1'], ['p3', 'Omar Haddad', 'c1'], ['p4', 'Sara Rossi', 'c1'], ['p6', 'Yuki Tanaka', 'c2'], ['p7', 'Ahmed Benali', 'c2']]
      .map(function (x) { return { id: x[0], name: x[1], level: x[2] === 'c1' ? 'B1' : 'A2', language: 'German', cohorts: [x[2]], since: ago(70) }; });
    st.push({ id: 'p9', name: 'Hannah Okafor', level: 'B2', language: 'German', cohorts: [], oto: true });
    var asg = [
      { id: 'a1', cohort_id: 'c1', student_id: null, title: 'Ein Brief an den Vermieter', type: 'Essay', prompt: 'Die Heizung in Ihrer Wohnung funktioniert seit einer Woche nicht.\n\nSchreiben Sie Ihrem Vermieter: Was ist das Problem? Seit wann? Was soll er tun?', due_date: dayKey(now - 3 * DAY), min_words: 80, material: null, created_at: ago(10) },
      { id: 'a2', cohort_id: 'c2', student_id: null, title: 'Mein Wochenende', type: 'Speaking', prompt: 'Erzählen Sie eine Minute lang: Was haben Sie am Wochenende gemacht?', due_date: dayKey(now + 2 * DAY), min_words: 0, material: null, created_at: ago(4) },
      { id: 'a3', cohort_id: 'c1', student_id: null, title: 'Wechselpräpositionen', type: 'Homework', prompt: '', due_date: dayKey(now + 4 * DAY), min_words: 0, material: { kind: 'book', key: 'book:German-B1:u2:p1', title: 'Wechselpräpositionen' }, created_at: ago(2) },
      { id: 'a4', cohort_id: null, student_id: 'p9', title: 'Konjunktiv II in Bitten', type: 'Writing', prompt: 'Schreiben Sie fünf höfliche Bitten an Ihre Kollegin mit „Könnten Sie …?“ oder „Würden Sie …?“.', due_date: dayKey(now + 5 * DAY), min_words: 40, material: null, created_at: ago(1) }
    ];
    var subs = [
      { id: 's1', assignment_id: 'a1', student_id: 'p1', status: 'graded', score: 82, feedback: 'Klar und höflich geschrieben. Achten Sie auf die Wortstellung nach „weil“.', submission_text: 'Sehr geehrter Herr Müller,\n\nseit einer Woche funktioniert die Heizung in meiner Wohnung nicht. Es ist sehr kalt, weil es draußen schneit. Könnten Sie bitte so schnell wie möglich einen Techniker schicken?\n\nMit freundlichen Grüßen\nLukas Brandt', submitted_at: ago(4), graded_at: ago(2) },
      { id: 's2', assignment_id: 'a1', student_id: 'p2', status: 'pending', score: null, feedback: null, submission_text: 'Sehr geehrter Herr Müller,\n\nich schreibe Ihnen, weil die Heizung seit Montag kaputt ist. Ich habe schon zweimal angerufen, aber niemand ist gekommen. Bitte schicken Sie diese Woche jemanden, denn meine Tochter ist krank und es ist sehr kalt in der Wohnung.\n\nVielen Dank im Voraus.\n\nMit freundlichen Grüßen\nMei Chen', submitted_at: ago(3), graded_at: null },
      { id: 's3', assignment_id: 'a1', student_id: 'p4', status: 'pending', score: null, feedback: null, submission_text: 'Hallo Herr Müller, die Heizung geht nicht. Seit eine Woche. Bitte reparieren Sie. Danke, Sara', submitted_at: ago(2), graded_at: null },
      { id: 's4', assignment_id: 'a2', student_id: 'p6', status: 'pending', score: null, feedback: null, submission_text: 'Am Samstag bin ich mit meiner Freundin in den Park gegangen. Wir haben Kaffee getrunken und dann haben wir gekocht. Am Sonntag habe ich lange geschlafen.', submitted_at: ago(1), graded_at: null }
    ];
    return { sample: true, teacher: { id: 'tp', full_name: 'Ana Weber' }, cohorts: cos, students: st, assignments: asg, submissions: subs };
  }
  function load() {
    if (!real()) return Promise.resolve(sample());
    return window.AlimunData.teacherHomework().then(function (d) { return d && d.teacher ? d : sample(); });
  }

  /* ---------- The list ---------- */
  function listView() {
    var waiting = H.submissions.filter(function (s) { return s.status !== 'graded'; }).sort(function (a, b) { return String(a.submitted_at).localeCompare(String(b.submitted_at)); });
    var html = '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_t_nav_homework')) + '</h1><p class="t-lead">' + esc(t('app_th_lead')) + '</p></div>' +
      '<div class="btn-row"><a class="btn btn--primary btn--sm" href="#/homework/new">' + A.icon('plus') + esc(t('app_th_new')) + '</a></div></div><div class="grid rise">';
    html += '<section class="card card--forest span-8" style="--i:0" aria-labelledby="h-wait"><h2 class="t-h1" id="h-wait">' + esc(waiting.length ? A.tn('app_t_grade_n', waiting.length) : t('app_th_none_waiting')) + '</h2>';
    if (waiting.length) {
      html += '<div class="tt-week th-wait">' + waiting.slice(0, 8).map(function (s) {
        var a = asgOf(s.assignment_id) || {}, st = studentOf(s.student_id);
        return '<a class="tt-row tt-row--wide" href="#/homework/mark/' + esc(s.id) + '"><span class="tt-row__time">' + esc(A.cap(A.relative(new Date(s.submitted_at).getTime() - Date.now()))) + '</span><span><b>' + esc(st ? st.name : '') + '</b><small>' + esc(a.title || '') + '</small></span></a>';
      }).join('') + '</div><div class="btn-row" style="margin-top:20px"><a class="btn btn--lime" href="#/homework/mark/' + esc(waiting[0].id) + '">' + esc(t('app_th_mark_oldest')) + A.icon('arrow') + '</a></div>';
    } else html += '<p class="t-lead" style="margin-top:12px">' + esc(t('app_th_none_waiting_p')) + '</p>';
    html += '</section><section class="stage span-4" style="--i:1;background:var(--t-coral)" aria-hidden="true"><div class="bub say">' + esc(t(waiting.length ? 'app_th_bub' : 'app_th_bub_done')) + '</div>' + A.Cast.drawing('monster') + '</section>';
    html += '<section class="card span-12" style="--i:2" aria-labelledby="h-set"><h2 class="t-h2" id="h-set">' + esc(t('app_th_set_h')) + '</h2>';
    if (!H.assignments.length) html += '<p class="t-body" style="margin-top:10px">' + esc(t('app_th_set_none')) + '</p>';
    else html += '<div class="tt-week">' + H.assignments.map(function (a) {
      var subs = subsOf(a.id), marked = subs.filter(function (s) { return s.status === 'graded'; }), who = audience(a).length;
      var scored = marked.filter(function (s) { return s.score != null; }), avg = scored.length ? Math.round(scored.reduce(function (n, s) { return n + s.score; }, 0) / scored.length) : null;
      var bits = [whoName(a), t('app_ts_handed', { n: subs.length, of: who || subs.length })];
      if (subs.length > marked.length) bits.push(t('app_ts_to_mark', { n: subs.length - marked.length }));
      if (avg != null) bits.push(t('app_ts_avg', { score: pct(avg) }));
      if (a.material) bits.push(t(KINDS[a.material.kind]));
      return '<a class="tt-row tt-row--wide" href="#/homework/' + esc(a.id) + '"><span class="tt-row__time">' + esc(a.due_date ? shortDay(a.due_date + 'T12:00:00') : t('app_th_no_due')) + '</span><span><b>' + esc(a.title) + '</b><small>' + esc(bits.join(', ')) + '</small></span></a>';
    }).join('') + '</div>';
    return html + '</section>' + sampleLine() + '</div>';
  }
  function sampleLine() { return H.sample ? '<p class="t-tiny span-12">' + esc(t('app_th_sample')) + '</p>' : ''; }

  /* ---------- Setting homework ---------- */
  function newView(pre) {
    var html = '<a class="rd-back" href="#/homework">' + A.icon('back') + '<span>' + esc(t('app_t_nav_homework')) + '</span></a>' +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_th_new')) + '</h1><p class="t-lead">' + esc(t('app_th_new_lead')) + '</p></div></div>';
    if (!H.cohorts.length && !H.students.length) return html + '<div class="card"><p class="t-body">' + esc(t('app_th_nobody')) + '</p></div>';
    var classes = H.cohorts.filter(function (c) { return c.status !== 'closed' && c.status !== 'cancelled'; });
    var people = H.students.slice().sort(function (a, b) { return a.name.localeCompare(b.name, A.locale); });
    var target = pre || (classes[0] ? 'class:' + classes[0].id : people[0] ? 'student:' + people[0].id : '');
    html += '<div class="grid rise"><form class="card span-8 st-form" style="--i:0;max-width:none" data-new novalidate>' +
      '<label class="st-field"><span class="st-lbl">' + esc(t('app_th_for')) + '</span><select class="st-in" name="target" data-target>' +
        (classes.length ? '<optgroup label="' + esc(t('app_t_nav_classes')) + '">' + classes.map(function (c) { return opt('class:' + c.id, A.className(c), target); }).join('') + '</optgroup>' : '') +
        (people.length ? '<optgroup label="' + esc(t('app_th_one_student')) + '">' + people.map(function (s) { return opt('student:' + s.id, s.name + (s.level ? ' (' + s.level + ')' : ''), target); }).join('') + '</optgroup>' : '') +
      '</select></label>' +
      '<fieldset class="st-field"><legend class="st-lbl">' + esc(t('app_th_kind')) + '</legend><div class="th-kinds">' + Object.keys(KINDS).map(function (k, i) {
        return '<label class="st-day"><input type="radio" name="kind" value="' + k + '"' + (i === 0 ? ' checked' : '') + '><span>' + esc(t(KINDS[k])) + '</span></label>';
      }).join('') + '</div></fieldset>' +
      '<div data-kindbox>' + taskFields() + '</div>' +
      '<label class="st-field"><span class="st-lbl">' + esc(t('app_tc_due')) + '</span><input class="st-in" type="date" name="due_date" value="' + dayKey(Date.now() + 7 * DAY) + '" min="' + today() + '"></label>' +
      '<div class="btn-row"><button class="btn btn--primary" type="submit">' + esc(t('app_th_send')) + '</button></div><p class="t-body st-msg" data-msg aria-live="polite"></p></form>' +
      '<section class="card card--bone span-4 th-draft" style="--i:1" data-draftbox><h2 class="t-h3">' + esc(t('app_th_draft_h')) + '</h2><p class="t-small" style="margin-top:6px">' + esc(t('app_th_draft_p')) + '</p>' +
        '<label class="st-field" style="margin-top:12px"><span class="st-lbl">' + esc(t('app_th_topic')) + '</span><input class="st-in" name="topic" data-topic maxlength="200" placeholder="' + esc(t('app_th_topic_ph')) + '"></label>' +
        '<div class="btn-row" style="margin-top:12px"><button class="btn btn--ghost btn--sm" type="button" data-th="draft">' + esc(t('app_th_draft_btn')) + '</button></div><p class="t-small st-msg" data-draftmsg aria-live="polite"></p></section>' +
      sampleLine() + '</div>';
    return html;
  }
  function opt(v, label, cur) { return '<option value="' + esc(v) + '"' + (v === cur ? ' selected' : '') + '>' + esc(label) + '</option>'; }
  function taskFields() {
    return '<label class="st-field"><span class="st-lbl">' + esc(t('app_th_type')) + '</span><select class="st-in" name="type">' + TYPES.map(function (x) { return opt(x, t(TYPE_KEYS[x]), 'Essay'); }).join('') + '</select></label>' +
      '<label class="st-field"><span class="st-lbl">' + esc(t('app_th_title')) + '</span><input class="st-in" name="title" maxlength="200" dir="auto" required></label>' +
      '<label class="st-field"><span class="st-lbl">' + esc(t('app_th_task')) + '</span><textarea class="st-in tc-ta" name="prompt" rows="6" maxlength="4000" dir="auto" required></textarea><span class="t-small st-hint">' + esc(t('app_th_task_p')) + '</span></label>' +
      '<label class="st-field"><span class="st-lbl">' + esc(t('app_th_min')) + '</span><input class="st-in" type="number" name="min_words" min="0" max="2000" step="10" value="80"><span class="t-small st-hint">' + esc(t('app_th_min_p')) + '</span></label>';
  }
  /* Course material for the chosen class or student: the book's lessons, the library shelf's pieces, the mock papers */
  function materialFields(kind, c) {
    var box = root.querySelector('[data-kindbox]');
    if (!c) { box.innerHTML = '<p class="t-body">' + esc(t('app_th_no_course')) + '</p>'; return; }
    box.innerHTML = '<div class="rd-loading" style="min-height:120px"><div class="loader" style="--w:48px" aria-hidden="true">' + A.loaderInner() + '</div></div>';
    var p;
    if (kind === 'book') p = getJSON('/data/books/' + encodeURIComponent(c.language + '-' + c.level + '.' + uiCode()) + '.json').catch(function () { return getJSON('/data/books/' + encodeURIComponent(c.language + '-' + c.level + '.en') + '.json'); }).then(function (b) {
      return b.units.filter(function (u) { return !u.planned; }).map(function (u, i) {
        return { group: t('app_book_unit_title', { n: i + 1, title: u.title }), items: (u.pages || []).map(function (pg) { return { key: 'book:' + b.id + ':' + u.id + ':' + pg.id, title: pg.title }; }) };
      });
    });
    else if (kind === 'lib') p = getJSON('/data/library/' + encodeURIComponent(c.language + '-' + c.level + '-library.' + uiCode()) + '.json').catch(function () { return getJSON('/data/library/' + encodeURIComponent(c.language + '-' + c.level + '-library.en') + '.json'); }).then(function (sh) {
      return [{ group: t('app_th_k_lib'), items: sh.pieces.map(function (x) { return { key: 'lib:' + sh.id + ':' + x.id, title: x.title, note: t(x.kind === 'listen' ? 'app_th_listen' : 'app_th_read') }; }) }];
    });
    else p = getJSON('/data/tests/index.json').then(function (ix) {
      var tests = ix.tests.filter(function (x) { return x.language === c.language; }).sort(function (a, b) { return (a.level === c.level ? 0 : 1) - (b.level === c.level ? 0 : 1); });
      return tests.map(function (x) { var name = window.AlimunProgress ? window.AlimunProgress.testName(x.id) : x.id; return { group: name, items: x.papers.map(function (pp) { return { key: 'mock:' + x.id + ':' + pp.id, title: name + ': ' + pp.title }; }) }; });
    });
    p.then(function (groups) {
      if (!root.querySelector('[data-kindbox]') || currentKind() !== kind) return;
      var any = groups.some(function (g) { return g.items.length; });
      box.innerHTML = !any ? '<p class="t-body">' + esc(t('app_th_no_material')) + '</p>' :
        '<label class="st-field"><span class="st-lbl">' + esc(t(kind === 'book' ? 'app_th_pick_lesson' : kind === 'lib' ? 'app_th_pick_piece' : 'app_th_pick_paper')) + '</span><select class="st-in" name="material" lang="' + esc(window.AlimunData.langCode(c.language) || 'en') + '">' +
        groups.map(function (g) { return '<optgroup label="' + esc(g.group) + '">' + g.items.map(function (x) { return '<option value="' + esc(x.key) + '" data-title="' + esc(x.title) + '">' + esc(x.title + (x.note ? ' (' + x.note + ')' : '')) + '</option>'; }).join('') + '</optgroup>'; }).join('') + '</select></label>' +
        '<label class="st-field"><span class="st-lbl">' + esc(t('app_th_mat_note')) + '</span><textarea class="st-in tc-ta" name="prompt" rows="3" maxlength="2000" dir="auto"></textarea><span class="t-small st-hint">' + esc(t('app_th_mat_note_p')) + '</span></label>';
    }, function () { box.innerHTML = '<p class="t-body">' + esc(t('app_th_no_material')) + '</p>'; });
  }
  function currentKind() { var r = root.querySelector('[data-new] [name="kind"]:checked'); return r ? r.value : 'task'; }
  function kindChanged(form) {
    var k = currentKind(), box = form.querySelector('[data-kindbox]'), dr = root.querySelector('[data-draftbox]');
    if (dr) dr.hidden = k !== 'task';
    if (k === 'task') box.innerHTML = taskFields(); else materialFields(k, course(form.querySelector('[data-target]').value));
  }
  function send(form) {
    var f = new FormData(form), msg = form.querySelector('[data-msg]'), k = currentKind();
    var say = function (key, bad) { msg.textContent = t(key); msg.classList.toggle('is-bad', !!bad); };
    var target = String(f.get('target') || '').split(':'), row = { teacher_id: H.teacher.id, cohort_id: null, student_id: null, due_date: f.get('due_date') || null };
    if (target[0] === 'class') row.cohort_id = target[1]; else if (target[0] === 'student') {
      row.student_id = target[1];
      var st = studentOf(target[1]); if (st && st.cohorts.length) row.cohort_id = st.cohorts[0];
    } else { say('app_th_need_for', true); return; }
    if (k === 'task') {
      row.type = f.get('type'); row.title = String(f.get('title') || '').trim(); row.prompt = String(f.get('prompt') || '').trim();
      row.min_words = Math.max(0, Math.min(2000, parseInt(f.get('min_words'), 10) || 0));
      if (!row.title || !row.prompt) { say('app_th_need_task', true); return; }
      if (row.type === 'Speaking') row.min_words = 0;
    } else {
      var sel = form.querySelector('[name="material"]');
      if (!sel || !sel.value) { say('app_th_need_material', true); return; }
      var title = sel.options[sel.selectedIndex].getAttribute('data-title') || '';
      row.type = 'Homework'; row.title = title.slice(0, 200); row.prompt = String(f.get('prompt') || '').trim(); row.min_words = 0;
      row.material = { kind: k, key: sel.value, title: title.slice(0, 200) };
    }
    if (H.sample) {
      row.id = 'a' + Date.now(); row.created_at = new Date().toISOString(); H.assignments.unshift(row);
      location.hash = '#/homework/' + row.id; return;
    }
    var btn = form.querySelector('[type="submit"]'); btn.disabled = true;
    say('app_th_sending');
    window.AlimunData.createHomework(row).then(function (saved) { H.assignments.unshift(saved); location.hash = '#/homework/' + saved.id; },
      function (e) { btn.disabled = false; say('app_th_send_error', true); console.warn('[Alimun] Homework not set', e && e.message); });
  }
  /* A task drafted from a topic, in the language being learned at the right level; it only fills the form */
  function draft(btn) {
    var form = root.querySelector('[data-new]'), c = course(form.querySelector('[data-target]').value), topic = String(root.querySelector('[data-topic]').value || '').trim().slice(0, 200);
    var msg = root.querySelector('[data-draftmsg]'), say = function (k, bad) { msg.textContent = t(k); msg.classList.toggle('is-bad', !!bad); };
    if (!topic) { say('app_th_need_topic', true); return; }
    if (!c) { say('app_th_no_course', true); return; }
    var type = form.querySelector('[name="type"]').value;
    var fill = function (j) {
      form.querySelector('[name="title"]').value = String(j.title || '').slice(0, 200);
      form.querySelector('[name="prompt"]').value = String(j.task || '').slice(0, 4000);
      if (j.min_words && type !== 'Speaking') form.querySelector('[name="min_words"]').value = Math.max(0, Math.min(400, parseInt(j.min_words, 10) || 0));
      say('app_th_drafted');
    };
    if (H.sample) { fill({ title: 'Mein Traumjob', task: 'Beschreiben Sie Ihren Traumjob.\n\nWas machen Sie jeden Tag? Warum gefällt Ihnen diese Arbeit? Was müssen Sie dafür lernen?', min_words: 100 }); return; }
    btn.disabled = true; say('app_th_drafting');
    window.AlimunData.draftHomework({ language: c.language, level: c.level, type: type, topic: topic }).then(function (r) {
      btn.disabled = false;
      var j = r.result || {};
      if (!j.title || !j.task) throw new Error('empty');
      fill(j);
    }).catch(function (e) { btn.disabled = false; say('app_th_draft_error', true); console.warn('[Alimun] Draft failed', e && e.message); });
  }

  /* ---------- One piece of homework ---------- */
  function itemView(a) {
    var subs = subsOf(a.id), who = audience(a), byStudent = {};
    subs.forEach(function (s) { byStudent[s.student_id] = s; });
    var missing = who.filter(function (s) { return !byStudent[s.id]; }), late = a.due_date && a.due_date < today();
    var lang = window.AlimunData.langCode((course(a.student_id ? 'student:' + a.student_id : 'class:' + a.cohort_id) || {}).language) || 'en';
    var html = '<a class="rd-back" href="#/homework">' + A.icon('back') + '<span>' + esc(t('app_t_nav_homework')) + '</span></a>' +
      '<div class="view__head"><div><h1 class="t-h1" lang="' + esc(lang) + '">' + esc(a.title) + '</h1><p class="t-lead">' + esc([whoName(a), t(a.material ? KINDS[a.material.kind] : TYPE_KEYS[a.type] || 'app_hw_t_homework'), a.due_date ? t('app_hw_due', { date: longDay(a.due_date + 'T12:00:00') }) : t('app_th_no_due')].join(', ')) + '</p></div></div><div class="grid rise">';
    html += '<section class="card span-7" style="--i:0" aria-labelledby="h-in"><h2 class="t-h2" id="h-in">' + esc(t('app_th_in_h', { n: subs.length, of: who.length || subs.length })) + '</h2>';
    html += subs.length ? '<div class="tt-week">' + subs.sort(function (x, y) { return String(x.submitted_at).localeCompare(String(y.submitted_at)); }).map(function (s) {
      var st = studentOf(s.student_id), marked = s.status === 'graded';
      return '<div class="tt-row tt-row--wide th-in"><span class="tt-row__time">' + esc(marked ? (s.score != null ? pct(s.score) : t('app_th_done')) : t('app_ts_unmarked')) + '</span><span><b>' + esc(st ? st.name : '') + '</b><small>' + esc(t('app_ts_handed_on', { date: shortDay(s.submitted_at) })) + '</small></span>' +
        (a.material ? '' : '<a class="btn btn--' + (marked ? 'quiet' : 'primary') + ' btn--sm" href="#/homework/mark/' + esc(s.id) + '">' + esc(t(marked ? 'app_th_see_mark' : 'app_th_mark')) + '</a>') + '</div>';
    }).join('') + '</div>' : '<p class="t-body" style="margin-top:10px">' + esc(t('app_th_in_none')) + '</p>';
    if (missing.length) html += '<h3 class="t-h3 th-sub">' + esc(t(late ? 'app_th_late_h' : 'app_th_not_yet_h')) + '</h3><p class="t-body' + (late ? ' th-late' : '') + '">' + esc(A.listOf(missing.map(function (s) { return s.name; }))) + '</p>';
    html += '</section>';
    /* The task, and changing it */
    html += '<form class="card span-5 st-form" style="--i:1;max-width:none;margin-top:0" data-edit="' + esc(a.id) + '"><h2 class="t-h2">' + esc(t('app_th_change_h')) + '</h2>' +
      (a.material ? '<p class="t-body">' + esc(t('app_th_mat_is', { title: a.material.title || a.title })) + '</p>' : '') +
      '<label class="st-field"><span class="st-lbl">' + esc(t('app_th_title')) + '</span><input class="st-in" name="title" maxlength="200" dir="auto" lang="' + esc(lang) + '" value="' + esc(a.title) + '" required></label>' +
      '<label class="st-field"><span class="st-lbl">' + esc(t(a.material ? 'app_th_mat_note' : 'app_th_task')) + '</span><textarea class="st-in tc-ta" name="prompt" rows="6" maxlength="4000" dir="auto" lang="' + esc(lang) + '">' + esc(a.prompt || '') + '</textarea></label>' +
      '<div class="st-row">' + (a.material ? '' : '<label class="st-field"><span class="st-lbl">' + esc(t('app_th_min')) + '</span><input class="st-in" type="number" name="min_words" min="0" max="2000" step="10" value="' + esc(a.min_words || 0) + '"></label>') +
      '<label class="st-field"><span class="st-lbl">' + esc(t('app_tc_due')) + '</span><input class="st-in" type="date" name="due_date" value="' + esc(a.due_date || '') + '"></label></div>' +
      '<div class="btn-row"><button class="btn btn--primary btn--sm" type="submit">' + esc(t('app_th_save')) + '</button>' +
      (subs.length ? '' : '<button class="btn btn--quiet btn--sm" type="button" data-th="delete">' + esc(t('app_th_delete')) + '</button>') + '</div>' +
      '<p class="t-small st-msg" data-msg aria-live="polite"></p>' + (subs.length ? '<p class="t-small st-hint">' + esc(t('app_th_no_delete')) + '</p>' : '') + '</form>';
    return html + sampleLine() + '</div>';
  }
  function saveEdit(form) {
    var a = asgOf(form.getAttribute('data-edit')), f = new FormData(form), msg = form.querySelector('[data-msg]');
    var say = function (k, bad) { msg.textContent = t(k); msg.classList.toggle('is-bad', !!bad); };
    var patch = { title: String(f.get('title') || '').trim().slice(0, 200), prompt: String(f.get('prompt') || '').trim(), due_date: f.get('due_date') || null };
    if (!a.material) patch.min_words = Math.max(0, Math.min(2000, parseInt(f.get('min_words'), 10) || 0));
    if (!patch.title || (!a.material && !patch.prompt)) { say('app_th_need_task', true); return; }
    if (H.sample) { Object.assign(a, patch); say('app_tc_saved_sample'); return; }
    var btn = form.querySelector('[type="submit"]'); btn.disabled = true;
    window.AlimunData.updateHomework(a.id, patch).then(function () { Object.assign(a, patch); btn.disabled = false; A.rerender(); setTimeout(function () { var m = root.querySelector('[data-edit] [data-msg]'); if (m) m.textContent = t('app_th_saved'); }, 60); },
      function () { btn.disabled = false; say('app_tc_save_error', true); });
  }
  function del(btn) {
    var form = btn.closest('[data-edit]'), id = form.getAttribute('data-edit');
    if (btn.getAttribute('data-sure') !== '1') { btn.setAttribute('data-sure', '1'); btn.textContent = t('app_th_delete_sure'); return; }
    var drop = function () { H.assignments = H.assignments.filter(function (a) { return a.id !== id; }); location.hash = '#/homework'; };
    if (H.sample) { drop(); return; }
    btn.disabled = true;
    window.AlimunData.deleteHomework(id).then(drop, function () { btn.disabled = false; var m = form.querySelector('[data-msg]'); m.textContent = t('app_th_delete_error'); m.classList.add('is-bad'); });
  }

  /* ---------- Marking ---------- */
  function markView(s) {
    var a = asgOf(s.assignment_id) || {}, st = studentOf(s.student_id), marked = s.status === 'graded';
    var lang = window.AlimunData.langCode((course(a.student_id ? 'student:' + a.student_id : 'class:' + a.cohort_id) || {}).language) || 'en';
    var waiting = H.submissions.filter(function (x) { return x.status !== 'graded' && x.id !== s.id; }).sort(function (x, y) { return String(x.submitted_at).localeCompare(String(y.submitted_at)); });
    var words = String(s.submission_text || '').trim().split(/\s+/).filter(Boolean).length;
    var html = '<a class="rd-back" href="#/homework/' + esc(a.id) + '">' + A.icon('back') + '<span lang="' + esc(lang) + '">' + esc(a.title || t('app_t_nav_homework')) + '</span></a>' +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(st ? st.name : '') + '</h1><p class="t-lead">' + esc([a.title, t('app_ts_handed_on', { date: shortDay(s.submitted_at) }), /speak/i.test(a.type || '') ? t('app_th_spoken') : A.tn('app_hw_words', words) + (a.min_words ? ' (' + t('app_th_min_n', { n: a.min_words }) + ')' : '')].join(', ')) + '</p></div></div>' +
      '<div class="hw-body rise"><div><section class="card hw-task"><h2 class="t-h3">' + esc(t('app_hw_task_h')) + '</h2><div class="t-body" lang="' + esc(lang) + '">' + paras(a.prompt || a.title) + '</div></section>' +
      '<section class="card" style="margin-top:18px"><h2 class="t-h3">' + esc(t(/speak/i.test(a.type || '') ? 'app_th_transcript' : 'app_th_answer')) + '</h2><div class="hw-answer t-body" lang="' + esc(lang) + '" dir="auto">' + paras(s.submission_text) + '</div></section></div>' +
      '<form class="card st-form th-mark" style="max-width:none;margin-top:0" data-mark="' + esc(s.id) + '"><h2 class="t-h2">' + esc(t(marked ? 'app_th_marked_h' : 'app_th_mark_h')) + '</h2>' +
      (marked ? '' : '<p class="t-small">' + esc(t('app_th_draft_fb_p')) + '</p><div class="btn-row"><button class="btn btn--ghost btn--sm" type="button" data-th="drafted">' + esc(t('app_th_draft_fb')) + '</button></div>') +
      '<label class="st-field"><span class="st-lbl">' + esc(t('app_th_score')) + '</span><input class="st-in th-score" type="number" name="score" min="0" max="100" step="1" inputmode="numeric" value="' + esc(s.score != null ? s.score : '') + '" required><span class="t-small st-hint">' + esc(t('app_th_score_p')) + '</span></label>' +
      '<label class="st-field"><span class="st-lbl">' + esc(t('app_th_feedback')) + '</span><textarea class="st-in tc-ta" name="feedback" rows="10" maxlength="4000" dir="auto">' + esc(s.feedback || '') + '</textarea><span class="t-small st-hint">' + esc(t('app_th_feedback_p')) + '</span></label>' +
      '<div class="btn-row"><button class="btn btn--primary" type="submit">' + esc(t(marked ? 'app_th_resend' : 'app_th_send_mark')) + '</button>' +
      (waiting.length ? '<a class="btn btn--quiet btn--sm" href="#/homework/mark/' + esc(waiting[0].id) + '">' + esc(t('app_th_next')) + A.icon('arrow') + '</a>' : '') + '</div>' +
      '<p class="t-body st-msg" data-msg aria-live="polite"></p></form></div>' + (H.sample ? '<p class="t-tiny">' + esc(t('app_th_sample')) + '</p>' : '');
    return html;
  }
  /* The draft as plain paragraphs, in the order a teacher would write it: the overall view, what went well, what to
     work on next, and one sentence corrected, in quotation marks */
  function fbText(r) {
    var out = [r.summary || '', (r.strengths || []).join(' '), (r.improvements || []).join(' ')];
    if (r.corrected_excerpt) out.push('\u201c' + r.corrected_excerpt + '\u201d');
    return out.filter(Boolean).join('\n\n');
  }
  function drafted(btn) {
    var form = btn.closest('[data-mark]'), id = form.getAttribute('data-mark'), msg = form.querySelector('[data-msg]');
    var say = function (k, bad, extra) { msg.textContent = t(k) + (extra ? ' ' + extra : ''); msg.classList.toggle('is-bad', !!bad); };
    var fill = function (r) { form.querySelector('[name="score"]').value = r.score; form.querySelector('[name="feedback"]').value = fbText(r); say('app_th_drafted_fb'); };
    if (H.sample) { fill({ score: 74, summary: 'Ein klarer, höflicher Brief, der alle drei Punkte der Aufgabe beantwortet.', strengths: ['Die Anrede und der Gruß sind genau richtig.', 'Sie begründen Ihre Bitte gut.'], improvements: ['Nach „weil“ steht das Verb am Ende.', 'Schreiben Sie „seit einer Woche“, nicht „seit eine Woche“.'], corrected_excerpt: 'Es ist sehr kalt, weil die Heizung nicht funktioniert.' }); return; }
    btn.disabled = true; say('app_th_drafting');
    window.AlimunData.draftFeedback(id).then(function (r) { btn.disabled = false; fill(r.result || {}); },
      function (e) { btn.disabled = false; say(e && e.status === 429 ? 'app_th_draft_busy' : 'app_th_draft_error', true); });
  }
  function sendMark(form) {
    var s = H.submissions.filter(function (x) { return x.id === form.getAttribute('data-mark'); })[0], f = new FormData(form), msg = form.querySelector('[data-msg]');
    var say = function (k, bad) { msg.textContent = t(k); msg.classList.toggle('is-bad', !!bad); };
    var score = parseInt(f.get('score'), 10), fb = String(f.get('feedback') || '').trim();
    if (!(score >= 0 && score <= 100)) { say('app_th_need_score', true); return; }
    var done = function () {
      Object.assign(s, { status: 'graded', score: score, feedback: fb, graded_at: new Date().toISOString() });
      var next = H.submissions.filter(function (x) { return x.status !== 'graded'; }).sort(function (x, y) { return String(x.submitted_at).localeCompare(String(y.submitted_at)); })[0];
      A.rerender();
      setTimeout(function () { var m = root.querySelector('[data-mark] [data-msg]'); if (m) m.textContent = t(H.sample ? 'app_th_sent_sample' : 'app_th_sent') + (next ? '' : ' ' + t('app_th_all_marked')); }, 60);
    };
    if (H.sample) { done(); return; }
    var btn = form.querySelector('[type="submit"]'); btn.disabled = true;
    window.AlimunData.markSubmission(s.id, score, fb || null).then(done, function (e) { btn.disabled = false; say('app_tc_save_error', true); console.warn('[Alimun] Mark not saved', e && e.message); });
  }

  function missingView() {
    return '<a class="rd-back" href="#/homework">' + A.icon('back') + '<span>' + esc(t('app_t_nav_homework')) + '</span></a>' +
      '<div class="soon rise"><div class="stage" style="--i:0;background:var(--t-coral)"><div class="bub think">' + esc(t('app_book_error_bub')) + '</div>' + A.Cast.drawing('cat') + '</div>' +
      '<div class="card" style="--i:1"><p class="t-body">' + esc(t('app_th_missing')) + '</p><div class="btn-row"><a class="btn btn--primary" href="#/homework">' + esc(t('app_t_nav_homework')) + '</a></div></div></div>';
  }
  function bind() {
    if (root.__thomework) return;
    root.__thomework = true;
    root.addEventListener('change', function (e) {
      var f = e.target.closest('[data-new]');
      if (!f || !H) return;
      if (e.target.name === 'kind' || e.target.hasAttribute('data-target')) kindChanged(f);
    });
    root.addEventListener('click', function (e) {
      var b = e.target.closest('[data-th]');
      if (!b || b.disabled || !H) return;
      var a = b.getAttribute('data-th');
      if (a === 'draft') draft(b); else if (a === 'delete') del(b); else if (a === 'drafted') drafted(b);
    });
    root.addEventListener('submit', function (e) {
      if (!H) return;
      var f = e.target;
      if (f.hasAttribute('data-new')) { e.preventDefault(); send(f); }
      else if (f.hasAttribute('data-edit')) { e.preventDefault(); saveEdit(f); }
      else if (f.hasAttribute('data-mark')) { e.preventDefault(); sendMark(f); }
    });
  }

  var mountNo = 0;
  function mount(view, parts, helpers) {
    var my = ++mountNo;
    A = helpers; root = view;
    if (window.AlimunProgress) window.AlimunProgress.use(helpers);
    bind();
    root.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + esc(t('app_book_loading')) + '">' + A.loaderInner() + '</div></div>';
    return (H ? Promise.resolve() : load().then(function (d) { H = d; })).then(function () {
      if (my !== mountNo) return { stale: true };
      var p0 = parts[0], html, title = t('app_t_nav_homework');
      if (p0 === 'new') { html = newView(parts[1] && parts[2] ? parts[1] + ':' + parts[2] : null); title = t('app_th_new'); }
      else if (p0 === 'mark') { var s = H.submissions.filter(function (x) { return x.id === parts[1]; })[0]; html = s ? markView(s) : missingView(); }
      else if (p0) { var a = asgOf(p0); html = a ? itemView(a) : missingView(); if (a) title = a.title; }
      else html = listView();
      root.innerHTML = html;
      return { title: title };
    }).catch(function (e) {
      console.warn('[Alimun] Homework did not load', e && e.message);
      if (my === mountNo) root.innerHTML = missingView();
      return { stale: true };
    });
  }
  /* Data stays loaded while the teacher works through it; a new visit to the dashboard loads it again */
  function reset() {}

  window.AlimunTeachHomework = { mount: mount, reset: reset };
})();
