// Run with: node --no-experimental-require-module --test 'tests/unit/*.test.js'
// AI tutor, part 5 and 5b (docs/AI_TUTOR_PLAN.md): finish() putting the session's words into the flashcards and leaving
// a practice set, the lesson to go over (start and live-start), the listening's audio, forgetting the sets, and the
// writing check of a tutor set in api/ai.js. Against an in-memory database and stand-ins for Groq and Google.
const test = require('node:test');
const assert = require('node:assert');
const path = require('path');
const Module = require('module');

const ME = '11111111-1111-4111-8111-111111111111', OTHER = '22222222-2222-4222-8222-222222222222';
const CO = '33333333-3333-4333-8333-333333333333', CO2 = '44444444-4444-4444-8444-444444444444';
const NOTE = '55555555-5555-4555-8555-555555555555', NOTE_OLD = '66666666-6666-4666-8666-666666666666', NOTE_OTHER = '77777777-7777-4777-8777-777777777777';
const DAY = 86400000;
const ago = (d) => new Date(Date.now() - d * DAY).toISOString();

let db, calls, uploads, speaks, user;
let n = 0;
const uuid = () => { n++; return '9' + String(n).padStart(7, '0') + '-0000-4000-8000-000000000000'; };

function reset() {
  n = 0;
  user = { id: 'u-me', email_confirmed_at: ago(30), app_metadata: { role: 'student' } };
  db = {
    student_profiles: [
      { id: ME, user_id: 'u-me', full_name: 'Sara Rossi', language: 'German', level: 'B1', tier: 'free', stripe_subscription_status: null },
      { id: OTHER, user_id: 'u-other', full_name: 'Other', language: 'German', level: 'B1', tier: 'free', stripe_subscription_status: null },
    ],
    tutor_time: [{ student_id: ME, free_seconds: 600, plan_seconds: 0, credit_seconds: 0 }],
    tutor_sessions: [], tutor_messages: [], tutor_memory: [], tutor_sets: [], vocab_reviews: [], ai_usage: [], practice_items: [],
    assignment_submissions: [], one_on_one_bookings: [], app_settings: [{ key: 'tutor_live', value: 'all' }],
    enrollments: [{ id: 'e1', student_id: ME, cohort_id: CO, status: 'active' }],
    sessions: [
      { id: 's-old', cohort_id: CO, scheduled_at: ago(20), status: 'completed' },
      { id: 's-done', cohort_id: CO, scheduled_at: ago(3), status: 'completed' },
      { id: 's-next', cohort_id: CO, scheduled_at: new Date(Date.now() + 2 * DAY).toISOString(), status: 'scheduled' },
      { id: 's-x', cohort_id: CO2, scheduled_at: ago(2), status: 'completed' },
    ],
    session_notes: [
      { id: NOTE, session_id: 's-done', vocabulary: [{ word: 'obwohl', definition: 'although' }, { word: 'der Termin', definition: 'appointment' }], grammar_focus: 'Nebensätze mit obwohl', exercises: null, homework: 'Eine E-Mail schreiben', due_date: null, teacher_note: 'Gut gemacht', published_at: ago(3) },
      { id: NOTE_OLD, session_id: 's-old', vocabulary: [], grammar_focus: 'Alt', published_at: ago(20) },
      { id: NOTE_OTHER, session_id: 's-x', vocabulary: [], grammar_focus: 'Fremd', published_at: ago(2) },
    ],
  };
  calls = []; uploads = []; speaks = 0;
}

// ── An in-memory stand-in for the Supabase client ──────────
function matches(row, f) {
  const v = f.col.includes('.') ? f.col.split('.').reduce((o, k) => (o ? o[k] : undefined), row) : row[f.col];
  switch (f.op) {
    case 'eq': return v === f.val;
    case 'neq': return v !== f.val;
    case 'is': return f.val === null ? v == null : v === f.val;
    case 'notnull': return v != null;
    case 'gt': return v > f.val;
    case 'gte': return v >= f.val;
    case 'lt': return v < f.val;
    case 'lte': return v <= f.val;
    case 'in': return f.val.includes(v);
    case 'like': return new RegExp('^' + f.val.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/%/g, '.*') + '$').test(String(v));
    default: return true;
  }
}
const DEFAULTS = {
  tutor_sessions: () => ({ started_at: new Date().toISOString(), last_turn_at: new Date().toISOString(), ended_at: null, seconds_used: 0, turns: 0, title: null, summary: null, topics: [], words: [], board: [], lesson_id: null, live_until: null, mode: 'written' }),
  tutor_messages: () => ({ created_at: new Date().toISOString() }),
  tutor_sets: () => ({ created_at: new Date().toISOString(), audio_path: null }),
  vocab_reviews: () => ({ box: 0, source: null }),
};
function withJoin(table, row) {
  if (table === 'session_notes') return Object.assign({}, row, { sessions: db.sessions.find((s) => s.id === row.session_id) || null });
  return Object.assign({}, row);
}
function from(table) {
  const st = { op: 'select', filters: [], order: null, limit: null, want: false, opts: {} };
  const rows = () => (db[table] = db[table] || []);
  const b = {
    select() { st.want = true; return b; },
    insert(v) { st.op = 'insert'; st.values = Array.isArray(v) ? v : [v]; return b; },
    upsert(v, o) { st.op = 'upsert'; st.values = Array.isArray(v) ? v : [v]; st.opts = o || {}; return b; },
    update(v) { st.op = 'update'; st.values = v; return b; },
    delete() { st.op = 'delete'; return b; },
    eq(col, val) { st.filters.push({ op: 'eq', col, val }); return b; },
    neq(col, val) { st.filters.push({ op: 'neq', col, val }); return b; },
    is(col, val) { st.filters.push({ op: 'is', col, val }); return b; },
    not(col, op, val) { if (op === 'is' && val === null) st.filters.push({ op: 'notnull', col }); return b; },
    gt(col, val) { st.filters.push({ op: 'gt', col, val }); return b; },
    gte(col, val) { st.filters.push({ op: 'gte', col, val }); return b; },
    lt(col, val) { st.filters.push({ op: 'lt', col, val }); return b; },
    lte(col, val) { st.filters.push({ op: 'lte', col, val }); return b; },
    in(col, val) { st.filters.push({ op: 'in', col, val }); return b; },
    like(col, val) { st.filters.push({ op: 'like', col, val }); return b; },
    order(col, o) { st.order = { col, asc: !o || o.ascending !== false }; return b; },
    limit(k) { st.limit = k; return b; },
    range(a, z) { st.limit = z - a + 1; return b; },
    maybeSingle() { st.single = 'maybe'; return b; },
    single() { st.single = 'one'; return b; },
    then(resolve, reject) { return Promise.resolve().then(run).then(resolve, reject); },
  };
  function run() {
    const pick = () => rows().map((r) => withJoin(table, r)).filter((r) => st.filters.every((f) => matches(r, f)));
    let out = [], error = null;
    if (st.op === 'select') {
      out = pick();
      if (st.order) out.sort((x, y) => (x[st.order.col] < y[st.order.col] ? -1 : x[st.order.col] > y[st.order.col] ? 1 : 0) * (st.order.asc ? 1 : -1));
      if (st.limit != null) out = out.slice(0, st.limit);
    } else if (st.op === 'insert' || st.op === 'upsert') {
      for (const v of st.values) {
        if (st.op === 'upsert' && st.opts.onConflict) {
          const keys = st.opts.onConflict.split(',');
          const had = rows().find((r) => keys.every((k) => r[k] === v[k]));
          if (had) { if (!st.opts.ignoreDuplicates) { Object.assign(had, v); out.push(had); } continue; }
        }
        if (table === 'tutor_sets' && v.session_id && rows().some((r) => r.session_id === v.session_id)) { error = { code: '23505', message: 'duplicate' }; break; }
        if (table === 'tutor_sessions' && rows().some((r) => r.student_id === v.student_id && !r.ended_at)) { error = { code: '23505', message: 'one open' }; break; }
        const r = Object.assign({ id: uuid() }, (DEFAULTS[table] || (() => ({})))(), v);
        rows().push(r); out.push(r);
      }
    } else if (st.op === 'update') {
      out = rows().filter((r) => st.filters.every((f) => matches(withJoin(table, r), f)));
      out.forEach((r) => Object.assign(r, st.values));
    } else if (st.op === 'delete') {
      const del = rows().filter((r) => st.filters.every((f) => matches(r, f)));
      db[table] = rows().filter((r) => !del.includes(r));
      if (table === 'tutor_sessions') db.tutor_sets.forEach((s) => { if (del.some((d) => d.id === s.session_id)) s.session_id = null; });
      out = del;
    }
    if (error) return { data: null, error };
    if (st.single) return { data: out[0] || null, error: st.single === 'one' && !out[0] ? { message: 'no row' } : null };
    return { data: st.want || st.op === 'select' ? out : null, error: null, count: out.length };
  }
  return b;
}
const supa = {
  auth: { getUser: async () => ({ data: { user }, error: null }) },
  from,
  rpc: async (name, a) => {
    const t = db.tutor_time.find((x) => x.student_id === a.p_student);
    const total = () => t.free_seconds + t.plan_seconds + t.credit_seconds;
    if (name === 'tutor_refresh') return { data: Object.assign({ plan_granted: 0, plan_period: '2026-10' }, t), error: null };
    if (name === 'tutor_charge') { const c = Math.min(a.p_seconds, total()); t.free_seconds -= c; return { data: [{ charged: c, remaining: total() }], error: null }; }
    if (name === 'tutor_add_credit') { t.credit_seconds += a.p_seconds; return { data: a.p_seconds, error: null }; }
    return { data: null, error: null };
  },
  storage: {
    getBucket: async () => ({ data: { id: 'tutor-audio' } }),
    createBucket: async () => ({ error: null }),
    from: () => ({
      upload: async (p, buf, o) => { uploads.push({ p, o }); return { error: null }; },
      createSignedUrl: async (p) => ({ data: { signedUrl: 'https://dgaiasmefcbrtzqwdyri.supabase.co/storage/v1/object/sign/tutor-audio/' + p + '?token=t' }, error: null }),
      list: async (dir) => ({ data: uploads.filter((u) => u.p.startsWith(dir + '/')).map((u) => ({ name: u.p.split('/')[1] })) }),
      remove: async (paths) => { uploads = uploads.filter((u) => !paths.includes(u.p)); return { error: null }; },
    }),
  },
};

// ── Providers ───────────────────────────────────────────────
const SUMMARY = { title: 'Nebensätze mit obwohl', summary: 'You practised obwohl.', topics: ['obwohl'], words: [{ w: '**obwohl**', m: 'although' }, { w: 'trotzdem', m: 'nevertheless' }], memory: { next: 'Weil und obwohl mischen' } };
const PRACTICE = {
  title: 'Obwohl üben',
  exercises: [{ kind: 'gap', h: 'Ergänzen Sie.', items: [{ q: 'Ich gehe raus, ___ es regnet.', a: ['obwohl'] }, { q: 'Er kommt, ___ er müde ist.', a: ['obwohl'] }] }, { kind: 'nonsense' }],
  listening: { text: 'Obwohl es heute regnet, gehe ich mit meiner Freundin spazieren. Wir nehmen einen großen Schirm mit und trinken danach einen heißen Kaffee in einem kleinen Café am Markt. Es ist ein schöner Nachmittag.', exercise: { kind: 'tf', h: 'Richtig oder falsch?', items: [{ q: 'Es regnet.', a: 't' }, { q: 'Sie bleiben zu Hause.', a: 'f' }] } },
  speaking: ['Obwohl es regnet, gehe ich spazieren.', 'Ich lerne Deutsch, obwohl es schwer ist.'],
  writing: { task: 'Schreiben Sie eine kurze Nachricht an eine Freundin über Ihren Tag.', min: 40, max: 80 },
};
let practiceFails = false;
global.fetch = async (url, init) => {
  const u = String(url);
  const body = init && typeof init.body === 'string' ? JSON.parse(init.body) : null;
  calls.push({ url: u, body });
  const json = (d, ok = true, status = 200) => ({ ok, status, json: async () => d });
  if (u.includes('/data/books/')) return json({}, false, 404);
  if (u.includes('api.groq.com/openai/v1/chat/completions')) {
    const sys = body.messages[0].content, last = body.messages[body.messages.length - 1].content;
    let out;
    if (/practice material/.test(sys)) { if (practiceFails) return json({ error: 'x' }, false, 500); out = PRACTICE; }
    else if (/session notes/.test(sys)) out = SUMMARY;
    else if (/check a short text/.test(sys + last)) out = { good: 'Gut.', look: [{ quote: 'ich gehe', hint: 'Word order' }] };
    else out = { say: 'Hallo Sara!', board: [{ op: 'title', text: 'obwohl' }], exercise: null };
    return json({ choices: [{ message: { content: JSON.stringify(out) } }], usage: { prompt_tokens: 100, completion_tokens: 50 } });
  }
  if (u.includes('api.groq.com/openai/v1/audio/transcriptions')) return json({ text: 'Obwohl es regnet', duration: 3 });
  if (u.includes('auth_tokens')) return json({ name: 'auth_tokens/abc' });
  return json({}, false, 404);
};

process.env.SUPABASE_URL = 'https://example.supabase.co';
process.env.SUPABASE_SERVICE_ROLE_KEY = 'service';
process.env.GROQ_API_KEY = 'groq';
process.env.GOOGLE_AI_API_KEY = 'gemini';
const root = path.join(__dirname, '..', '..');
const sbPath = require.resolve('@supabase/supabase-js', { paths: [root] });
require.cache[sbPath] = { id: sbPath, filename: sbPath, loaded: true, exports: { createClient: () => supa } };
const gv = require(path.join(root, 'api/_lib/google-voice.js'));
gv.serviceAccount = () => ({ client_email: 'x' });
gv.speakVertex = async (o) => { speaks++; return { text: o.text }; };
gv.mp3 = async () => ({ buf: Buffer.from('mp3'), seconds: 20 });
const tutor = require(path.join(root, 'api/tutor.js'));
const ai = require(path.join(root, 'api/ai.js'));

async function call(handler, action, body, method = 'POST') {
  const res = { code: 0, body: null, headers: {}, setHeader(k, v) { this.headers[k] = v; }, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, send(b) { this.body = b; return this; }, end() { return this; } };
  await handler({ method, query: { action }, headers: { authorization: 'Bearer t' }, body }, res);
  return res;
}
/** A written session with two turns, ready to be ended */
function openSession(extra) {
  const s = Object.assign({ id: uuid(), student_id: ME, language: 'German', level: 'B1', ui: 'en' }, DEFAULTS.tutor_sessions(), { turns: 2, seconds_used: 60 }, extra || {});
  db.tutor_sessions.push(s);
  db.tutor_messages.push({ id: uuid(), session_id: s.id, student_id: ME, role: 'tutor', text: 'Was machst du, obwohl es regnet?', created_at: ago(0.001) });
  db.tutor_messages.push({ id: uuid(), session_id: s.id, student_id: ME, role: 'student', text: 'Ich gehe raus obwohl es regnet', created_at: ago(0.0005) });
  return s;
}

test('ending a session puts its words in the flashcards as the tutor\'s and leaves a practice set', async () => {
  reset();
  db.vocab_reviews.push({ id: 'v0', student_id: ME, word: 'trotzdem', word_key: 'trotzdem', definition: 'anyway', source: null, box: 3 });
  const s = openSession();
  const r = await call(tutor, 'end', { session: s.id });
  assert.strictEqual(r.code, 200);
  assert.strictEqual(r.body.cards, 1, 'only the new word is added');
  const card = db.vocab_reviews.find((v) => v.word_key === 'obwohl');
  assert.strictEqual(card.word, 'obwohl', 'markup removed');
  assert.strictEqual(card.source, 'tutor');
  assert.strictEqual(db.vocab_reviews.find((v) => v.word_key === 'trotzdem').source, null, 'a card already there is kept as it is');
  assert.strictEqual(db.tutor_sets.length, 1);
  const set = db.tutor_sets[0];
  assert.strictEqual(r.body.set.id, set.id);
  assert.strictEqual(r.body.set.title, 'Obwohl üben');
  assert.strictEqual(set.student_id, ME); assert.strictEqual(set.session_id, s.id); assert.strictEqual(set.language, 'German');
  assert.strictEqual(set.items.blocks.length, 1, 'the exercise that fails the checks is dropped');
  assert.strictEqual(set.items.listen.block.kind, 'tf');
  assert.ok(set.items.listen.text.startsWith('Obwohl'));
  assert.strictEqual(set.items.speak.length, 2);
  assert.deepStrictEqual(set.items.write, { task: PRACTICE.writing.task, min: 40, max: 80 });
  assert.ok(db.ai_usage.some((x) => x.action === 'tutor_practice'), 'the practice call is recorded under the tutor budget');
  assert.ok(db.tutor_sessions[0].ended_at && db.tutor_sessions[0].summary);
  // Ending again answers the stored session and its set, nothing new
  const again = await call(tutor, 'end', { session: s.id });
  assert.strictEqual(again.body.set.id, set.id);
  assert.strictEqual(db.tutor_sets.length, 1);
});

test('one student turn: words go to the flashcards, no practice set', async () => {
  reset();
  const s = openSession({ turns: 1 });
  const r = await call(tutor, 'end', { session: s.id });
  assert.strictEqual(r.body.cards, 2);
  assert.strictEqual(r.body.set, null);
  assert.strictEqual(db.tutor_sets.length, 0);
  assert.ok(!calls.some((c) => c.body && c.body.messages && /practice material/.test(c.body.messages[0].content)));
});

test('a failed practice call leaves the summary and the words in place', async () => {
  reset(); practiceFails = true;
  try {
    const s = openSession();
    const r = await call(tutor, 'end', { session: s.id });
    assert.strictEqual(r.code, 200);
    assert.strictEqual(r.body.summary, 'You practised obwohl.');
    assert.strictEqual(r.body.cards, 2);
    assert.strictEqual(r.body.set, null);
  } finally { practiceFails = false; }
});

test('a live call ended by running out of time also leaves words and a set', async () => {
  reset();
  const s = openSession({ mode: 'live', live_until: new Date(Date.now() + 300000).toISOString(), last_turn_at: new Date(Date.now() - 20000).toISOString() });
  db.tutor_time[0].free_seconds = 10;
  const r = await call(tutor, 'live-tick', { session: s.id, lines: [] });
  assert.strictEqual(r.body.stop, 'no_time');
  assert.ok(r.body.summary && r.body.summary.set && r.body.summary.set.id);
  assert.ok(db.vocab_reviews.some((v) => v.source === 'tutor'));
});

test('going over a lesson: checked against the student\'s classes, the tutor starts from it, its words go to the cards', async () => {
  reset();
  for (const [id, why] of [[NOTE_OTHER, 'a class the student is not in'], [NOTE_OLD, 'the next lesson has been held'], ['not-a-uuid', 'malformed']]) {
    const bad = await call(tutor, 'start', { ui: 'en', lesson: id });
    assert.strictEqual(bad.code, 404, why);
    assert.strictEqual(bad.body.reason, 'lesson_closed', why);
  }
  db.sessions.find((x) => x.id === 's-next').scheduled_at = ago(1);
  assert.strictEqual((await call(tutor, 'start', { ui: 'en', lesson: NOTE })).code, 404, 'closed once the class has had its next lesson');
  db.sessions.find((x) => x.id === 's-next').scheduled_at = new Date(Date.now() + DAY).toISOString();
  db.sessions.find((x) => x.id === 's-next').status = 'scheduled';
  calls = [];
  const r = await call(tutor, 'start', { ui: 'en', lesson: NOTE });
  assert.strictEqual(r.code, 200);
  const s = db.tutor_sessions.find((x) => x.id === r.body.session.id);
  assert.strictEqual(s.lesson_id, NOTE);
  assert.strictEqual(r.body.session.lesson, NOTE);
  const req = calls.find((c) => c.url.includes('chat/completions')).body;
  assert.ok(/The class lesson the student chose to go over today/.test(req.messages[0].content));
  assert.ok(/grammar focus: Nebensätze mit obwohl/.test(req.messages[0].content));
  assert.ok(/chose to go over their class lesson/.test(JSON.stringify(req.messages.slice(1))));
  // A session already open on another lesson (or none) is closed and a new one starts from this lesson
  s.turns = 2;
  db.tutor_messages.push({ id: uuid(), session_id: s.id, student_id: ME, role: 'student', text: 'Obwohl ich müde bin', created_at: new Date().toISOString() });
  const e = await call(tutor, 'end', { session: s.id });
  assert.strictEqual(e.code, 200);
  const lessonCard = db.vocab_reviews.find((v) => v.word_key === 'der termin');
  assert.ok(lessonCard && lessonCard.source_note_id === NOTE && lessonCard.source == null, 'the lesson\'s words, from the notes');
  assert.strictEqual(db.vocab_reviews.find((v) => v.word_key === 'obwohl').source, 'tutor', 'the session word stays the tutor\'s');
});

test('a resumed session on another lesson is not reused', async () => {
  reset();
  const s = openSession({ turns: 0, last_turn_at: new Date().toISOString() });
  const r = await call(tutor, 'start', { ui: 'en', lesson: NOTE });
  assert.strictEqual(r.code, 200);
  assert.notStrictEqual(r.body.session.id, s.id);
  assert.ok(db.tutor_sessions.find((x) => x.id === s.id).ended_at);
  const same = await call(tutor, 'start', { ui: 'en', lesson: NOTE });
  assert.strictEqual(same.body.resumed, true, 'the same lesson resumes');
});

test('the live call opened on a lesson tells the tutor to start with it', async () => {
  reset();
  calls = [];
  const r = await call(tutor, 'live-start', { tutor: 'arthur', ui: 'en', lesson: NOTE });
  assert.strictEqual(r.code, 200, JSON.stringify(r.body));
  assert.strictEqual(db.tutor_sessions[0].lesson_id, NOTE);
  const setup = JSON.stringify(calls.find((c) => c.url.includes('auth_tokens')).body);
  assert.ok(/opened this call to go over their class lesson/.test(setup));
  assert.ok(/The class lesson the student chose to go over today/.test(setup));
  assert.strictEqual((await call(tutor, 'live-start', { tutor: 'arthur', ui: 'en', lesson: NOTE_OTHER })).body.reason, 'lesson_closed');
});

test('the listening is voiced once, kept privately and given as a signed https link', async () => {
  reset();
  const s = openSession();
  await call(tutor, 'end', { session: s.id });
  const set = db.tutor_sets[0];
  db.tutor_sets.push({ id: 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', student_id: OTHER, title: 'x', language: 'German', items: { listen: { text: 'Hallo' } } });
  assert.strictEqual((await call(tutor, 'set-audio', { set: 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa' })).code, 404, 'another student\'s set');
  assert.strictEqual((await call(tutor, 'set-audio', { set: 'nope' })).code, 400);
  const r = await call(tutor, 'set-audio', { set: set.id });
  assert.strictEqual(r.code, 200);
  assert.ok(/^https:\/\/.+tutor-audio\/.+\.mp3\?token=/.test(r.body.url));
  assert.strictEqual(speaks, 1);
  assert.strictEqual(uploads[0].p, ME + '/' + set.id + '.mp3');
  assert.strictEqual(uploads[0].o.contentType, 'audio/mpeg');
  assert.strictEqual(set.audio_path, uploads[0].p);
  assert.ok(db.ai_usage.some((x) => x.action === 'tutor_voice'));
  const second = await call(tutor, 'set-audio', { set: set.id });
  assert.strictEqual(second.code, 200);
  assert.strictEqual(speaks, 1, 'played again from storage, not voiced again');
  assert.strictEqual(db.tutor_time[0].free_seconds, 600 - 0, 'Practice does not use tutor minutes');
});

test('forgetting everything deletes the sets and their audio', async () => {
  reset();
  const s = openSession();
  await call(tutor, 'end', { session: s.id });
  await call(tutor, 'set-audio', { set: db.tutor_sets[0].id });
  db.tutor_sets.push({ id: 'b', student_id: OTHER, title: 'theirs', language: 'German', items: {} });
  const r = await call(tutor, 'forget', {});
  assert.strictEqual(r.code, 200);
  assert.deepStrictEqual(db.tutor_sets.map((x) => x.id), ['b']);
  assert.strictEqual(uploads.length, 0);
  assert.strictEqual(db.vocab_reviews.length > 0, true, 'flashcards are the student\'s and stay');
});

test('api/ai: the writing and speaking tasks of the student\'s own set work without a plan', async () => {
  reset();
  const s = openSession();
  await call(tutor, 'end', { session: s.id });
  const set = db.tutor_sets[0];
  db.enrollments = [];  // no plan and no class: only the tutor set opens these
  const text = 'Heute bin ich in die Stadt gegangen, obwohl es geregnet hat. Ich habe einen Kaffee getrunken und ein Buch gekauft.';
  calls = [];
  const r = await call(ai, 'homework-check', { tutor_set: set.id, text, ui: 'en' });
  assert.strictEqual(r.code, 200, JSON.stringify(r.body));
  assert.deepStrictEqual(r.body.result.look, [{ quote: 'ich gehe', hint: 'Word order' }]);
  const prompt = JSON.stringify(calls.find((c) => c.url.includes('chat/completions')).body);
  assert.ok(prompt.includes('Schreiben Sie eine kurze Nachricht'), 'the task is read from the set on the server');
  assert.strictEqual((await call(ai, 'homework-check', { tutor_set: set.id, text: 'zu kurz', ui: 'en' })).code, 400);
  assert.strictEqual((await call(ai, 'homework-check', { assignment_id: '12345678-1234-4234-8234-123456789012', text, ui: 'en' })).code, 403, 'homework still needs a plan or a class');
  // Another student cannot use this set
  user = { id: 'u-other', email_confirmed_at: ago(30), app_metadata: { role: 'student' } };
  assert.strictEqual((await call(ai, 'homework-check', { tutor_set: set.id, text, ui: 'en' })).code, 403);
  assert.strictEqual((await call(ai, 'transcribe', { tutor_set: set.id, audio: Buffer.alloc(2000).toString('base64'), mime: 'audio/webm', language: 'de' })).code, 403);
  user = { id: 'u-me', email_confirmed_at: ago(30), app_metadata: { role: 'student' } };
  const tr = await call(ai, 'transcribe', { tutor_set: set.id, audio: Buffer.alloc(2000).toString('base64'), mime: 'audio/webm', language: 'de' });
  assert.strictEqual(tr.code, 200, JSON.stringify(tr.body));
  assert.strictEqual(tr.body.text, 'Obwohl es regnet');
});

test('cleanPractice keeps only what passes the checks', () => {
  const brain = require(path.join(root, 'api/_lib/tutor-brain.js'));
  assert.strictEqual(brain.cleanPractice(null), null);
  assert.strictEqual(brain.cleanPractice({ exercises: [{ kind: 'bogus' }], listening: { text: 'kurz', exercise: null }, speaking: ['ja'], writing: { task: 'x' } }), null);
  const p = brain.cleanPractice({ listening: { text: 'Wort '.repeat(40), exercise: { kind: 'gap', h: 'x', items: [{ q: 'a ___', a: ['b'] }, { q: 'c ___', a: ['d'] }] } }, speaking: ['Ich bin **sehr** müde heute.', 'Ich gehe <b>nach</b> Hause.'], writing: { task: 'Schreiben Sie etwas.', min: 1, max: 5000 } });
  assert.strictEqual(p.listen, null, 'the listening questions are true/false or choice');
  assert.deepStrictEqual(p.speak, ['Ich bin sehr müde heute.', 'Ich gehe nach Hause.'], 'markup removed');
  assert.deepStrictEqual(p.write, { task: 'Schreiben Sie etwas.', min: 20, max: 300 });
});
