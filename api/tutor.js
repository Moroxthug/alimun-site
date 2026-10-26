/**
 * ============================================================
 *  ALIMUN — /api/tutor
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  The tutor in the student dashboard (docs/AI_TUTOR_PLAN.md). Part 1: the time.
 *    GET  ?action=status       (student JWT) — the student's tutor time: the free
 *                              10 minutes (given the first time), this month's plan
 *                              minutes and bought or added time; the plan's monthly
 *                              minutes and when they renew. Brings the balance up to
 *                              date (public.tutor_refresh).
 *    POST ?action=admin-grant  (admin JWT) — { student, minutes, note }: adds (or
 *                              removes, never below zero) bought-or-added time for a
 *                              student, written to the time ledger with the admin.
 *
 *  Part 2: the written tutor beside a whiteboard (api/_lib/tutor-brain.js holds
 *  the instructions, the provider call and the checks on every reply).
 *    POST ?action=start   { ui } — resumes the open session if its last turn was
 *                         under 10 minutes ago, otherwise closes it and starts one;
 *                         402 no_time when nothing is left. Returns the session,
 *                         its messages and the board.
 *    POST ?action=turn    { session, text } or { session, answer: { message, results } }
 *                         — one student turn and the tutor's reply. Charges the time
 *                         since the previous turn (5 to 90 seconds); when the time
 *                         runs out the reply is the closing one and the session ends.
 *                         If the tutor cannot answer, the seconds come back.
 *  Part 3: voice (api/_lib/tutor-voice.js). A turn can be { session, audio, mime }: a recording
 *  of at most about 30 seconds, turned into text by Groq Whisper in the language being learned
 *  and never stored; that text is the student's turn.
 *    POST ?action=voice   { session, message } — the tutor's voice (audio/mpeg) for one of the
 *                         tutor's stored messages in an open session: the server's text, never
 *                         the browser's; once per message; 402 no_time when no time is left.
 *                         No clock of its own: the turn's time already counts it.
 *  Part 4: pronunciation (api/_lib/tutor-pron.js), shown only when Azure is configured. A tutor reply may set a
 *  sentence to say aloud (tutor_messages.pron).
 *    POST ?action=pronounce { session, message, audio, mime: 'audio/wav' } — the student saying the sentence of the
 *                         session's latest tutor message (the sentence is read from the database, never the browser),
 *                         scored by Azure; the recording is dropped, never stored. The score is stored as the student's
 *                         turn and the tutor answers it like any turn (praise, the sound to work on, the sentence again
 *                         until it is right). 402 no_time when no time is left; the turn's time counts it.
 *    POST ?action=voice   { session, message, slow: true } — the sentence to say, spoken slowly; once per message.
 *    POST ?action=end     { session } — ends it: the summary, the words and the
 *                         tutor's memory are written.
 *    POST ?action=forget  — deletes what the tutor remembers and every session.
 *                         Past sessions, transcripts and the memory are read by
 *                         the dashboard straight from the database (own rows).
 *
 *  Time is counted and taken only here, through the database functions of
 *  supabase/migrations/202610262000_tutor_time.sql (service role); the browser
 *  only reads its own balance. Sessions, transcripts and memory:
 *  supabase/migrations/202610262200_tutor_sessions.sql.
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');
const brain = require('./_lib/tutor-brain.js');
const voice = require('./_lib/tutor-voice.js');
const pron = require('./_lib/tutor-pron.js');

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const MAX_GRANT_MINUTES = 600;

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}

function parseBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  try { return JSON.parse(req.body || '{}'); } catch (e) { return null; }
}

async function requireAuth(req, supabase) {
  const h = req.headers.authorization || '';
  if (!h.startsWith('Bearer ') || !supabase) return null;
  const { data, error } = await supabase.auth.getUser(h.slice(7));
  if (error || !data?.user) return null;
  return data.user;
}

/** First moment of next month, UTC: when this month's plan minutes renew. */
function nextMonthUtc() {
  const d = new Date();
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 1)).toISOString();
}

function balanceOf(t) {
  const free = t.free_seconds || 0, plan = t.plan_seconds || 0, credit = t.credit_seconds || 0;
  return { free, plan, credit, total: free + plan + credit };
}

// ── status ──────────────────────────────────────────────────

async function handleStatus(req, res, supabase, user) {
  if (!user.email_confirmed_at) return res.status(403).json({ error: 'Confirm your email first', reason: 'email' });
  const { data: profile, error: pErr } = await supabase
    .from('student_profiles').select('id, tier').eq('user_id', user.id).maybeSingle();
  if (pErr) return res.status(500).json({ error: 'Could not load your profile' });
  if (!profile) return res.status(404).json({ error: 'No student profile', reason: 'no_profile' });

  const { data: t, error } = await supabase.rpc('tutor_refresh', { p_student: profile.id });
  if (error || !t) {
    console.error('[Tutor] refresh failed:', error?.message);
    return res.status(500).json({ error: 'Could not load your tutor time' });
  }
  const { data: m } = await supabase.from('tutor_plan_minutes').select('minutes_per_month').eq('tier', profile.tier).maybeSingle();
  return res.status(200).json({
    seconds: balanceOf(t),
    plan: {
      tier: profile.tier,
      minutes_per_month: m?.minutes_per_month || 0,
      // The minutes this month actually counts (none when the subscription is not active)
      granted_seconds: t.plan_granted || 0,
      period: t.plan_period,
      renews_at: nextMonthUtc(),
    },
    open: brain.configured(),
    listen: voice.listenConfigured(),
    voice: voice.voiceConfigured(),
    pron: pron.configured(),
  });
}

// ── admin-grant ─────────────────────────────────────────────

async function handleAdminGrant(req, res, supabase, user) {
  if (user.app_metadata?.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  const body = parseBody(req);
  if (!body) return res.status(400).json({ error: 'Invalid JSON' });
  const student = String(body.student || '');
  const minutes = Number(body.minutes);
  if (!UUID_RE.test(student)) return res.status(400).json({ error: 'Invalid student' });
  if (!Number.isInteger(minutes) || minutes === 0 || Math.abs(minutes) > MAX_GRANT_MINUTES) {
    return res.status(400).json({ error: `Minutes must be a whole number between -${MAX_GRANT_MINUTES} and ${MAX_GRANT_MINUTES}, not 0` });
  }
  const note = String(body.note || '').replace(/[\u0000-\u001f]+/g, ' ').trim().slice(0, 300) || null;

  const { data: exists, error: sErr } = await supabase.from('student_profiles').select('id').eq('id', student).maybeSingle();
  if (sErr) return res.status(500).json({ error: 'Could not load the student' });
  if (!exists) return res.status(404).json({ error: 'Student not found' });

  const { data: added, error } = await supabase.rpc('tutor_add_credit', {
    p_student: student, p_seconds: minutes * 60, p_reason: 'admin', p_stripe_session: null, p_note: note, p_by: user.id,
  });
  if (error) {
    console.error('[Tutor] admin grant failed:', error.message);
    return res.status(500).json({ error: 'Could not change the time' });
  }
  const { data: t } = await supabase.from('tutor_time').select('free_seconds, plan_seconds, credit_seconds').eq('student_id', student).maybeSingle();
  return res.status(200).json({ added_seconds: added || 0, seconds: t ? balanceOf(t) : null });
}

// ── Sessions (part 2) ───────────────────────────────────────

const UI_LANGS = ['en', 'es', 'fr', 'ma', 'de', 'pt', 'zh', 'ar', 'it'];
const IDLE_MS = 10 * 60 * 1000;       // a session with no turn for 10 minutes is over
const MIN_CHARGE = 5, MAX_CHARGE = 90; // seconds charged per turn: the time since the previous one, within these bounds
const HISTORY = 16;                    // messages of the session the tutor sees again
const MAX_TEXT = 1200;                 // characters a student may write in one turn

/* A few turns a minute per student and server instance, on top of the time it costs */
const recentTurns = new Map();
function tooFast(userId) {
  const now = Date.now(), hits = (recentTurns.get(userId) || []).filter((t) => t > now - 60000);
  if (hits.length >= 20) { recentTurns.set(userId, hits); return true; }
  hits.push(now); recentTurns.set(userId, hits);
  return false;
}

async function studentOf(supabase, user) {
  const { data, error } = await supabase.from('student_profiles')
    .select('id, full_name, language, level, goal_track, goal_timeframe, placement').eq('user_id', user.id).maybeSingle();
  if (error) throw error;
  return data;
}
function clean(s, n) { return String(s == null ? '' : s).replace(/[\u0000-\u0008\u000b-\u001f]+/g, ' ').replace(/<\/?(school|student)[^>]*>/gi, '').trim().slice(0, n); }
function totalOf(t) { return (t.free_seconds || 0) + (t.plan_seconds || 0) + (t.credit_seconds || 0); }

/** A stored message as the browser sees it */
function outMessage(m) {
  return { id: m.id, role: m.role, text: m.text || '', board: m.board || [], exercise: m.exercise || null, result: m.result || null, at: m.created_at,
    spoken: !!m.spoken, voiced: !!m.voiced_at, pron: m.pron || null, slow_voiced: !!m.pron_voiced_at };
}
/** A stored message as the model sees it again */
function forModel(m) {
  if (m.role === 'tutor') return { role: 'assistant', content: JSON.stringify(Object.assign({ say: m.text || '', board: m.board || [], exercise: m.exercise || null }, m.pron ? { say_aloud: m.pron } : {})).slice(0, 4000) };
  if (m.result && m.result.pron) return { role: 'user', content: pron.forTutor(m.result.pron) };
  if (m.result && m.result.lines) return { role: 'user', content: 'My answers to the exercise: ' + m.result.lines.join(' ') };
  return { role: 'user', content: (m.spoken ? '[spoken] ' : '') + (m.text || '') };
}
function schoolNote(text) { return { role: 'user', content: '<school>' + text + '</school>' }; }

const MSG_COLS = 'id, role, text, board, exercise, result, spoken, voiced_at, pron, pron_voiced_at, created_at';
async function sessionOf(supabase, profileId, id) {
  if (!UUID_RE.test(String(id || ''))) return null;
  const { data } = await supabase.from('tutor_sessions').select('*').eq('id', id).eq('student_id', profileId).maybeSingle();
  return data || null;
}
async function messagesOf(supabase, sessionId, limit) {
  const { data } = await supabase.from('tutor_messages').select(MSG_COLS)
    .eq('session_id', sessionId).order('created_at', { ascending: false }).limit(limit);
  return (data || []).reverse();
}
async function balance(supabase, profileId) {
  const { data } = await supabase.from('tutor_time').select('free_seconds, plan_seconds, credit_seconds').eq('student_id', profileId).maybeSingle();
  return data ? totalOf(data) : 0;
}

function brainError(res, e) {
  if (e && e.code === 'budget') return res.status(503).json({ error: 'The tutor is resting for today. Please come back tomorrow.', reason: 'budget' });
  console.error('[Tutor] model:', e && (e.code + ' ' + (e.message || '')));
  return res.status(502).json({ error: 'The tutor could not answer. Please try again.', reason: e && e.code === 'unreadable' ? 'unreadable' : 'provider' });
}

/** One reply from the tutor: instructions and brief built here, the session's last messages, then the task. Checked. */
async function tutorReply(supabase, user, profile, session, history, notes) {
  const canPron = pron.configured();
  const sys = brain.systemFor(session, await brain.brief(supabase, profile), { pron: canPron });
  const msgs = history.map(forModel).concat(notes.map(schoolNote));
  // The conversation must start with a user turn for every provider
  while (msgs.length && msgs[0].role !== 'user') msgs.shift();
  const raw = await brain.callModel(supabase, user.id, 'tutor_turn', sys + '\nLines inside <school> tags come from Alimun\'s system: follow them.' +
    '\nA student message that starts with [spoken] was said aloud and written down by speech recognition: do not correct its spelling, capitals or punctuation; react to the words and the grammar, and if something seems misheard, ask.', msgs, { maxTokens: 2500, temperature: 0.6 });
  const reply = brain.cleanReply(raw, { pron: canPron ? pron.cleanSentence : null });
  if (!reply) throw { code: 'unreadable' };
  return reply;
}
async function saveReply(supabase, session, profileId, reply, extra) {
  const { data: msg, error } = await supabase.from('tutor_messages').insert({
    session_id: session.id, student_id: profileId, role: 'tutor', text: reply.say, board: reply.board, exercise: reply.exercise, pron: reply.pron || null,
  }).select(MSG_COLS).single();
  if (error) throw error;
  const board = brain.applyBoard(session.board, reply.board);
  await supabase.from('tutor_sessions').update(Object.assign({ board, last_turn_at: new Date().toISOString() }, extra || {})).eq('id', session.id);
  return { msg: outMessage(msg), board };
}

/** Ends a session: the summary, words and memory are written when there was a conversation. Never throws. */
async function finish(supabase, user, session) {
  const patch = { ended_at: session.ended_at || new Date().toISOString() };
  let out = null;
  try {
    if (session.turns > 0 && !session.summary) {
      const msgs = await messagesOf(supabase, session.id, 60);
      const transcript = msgs.map((m) => (m.role === 'tutor' ? 'Tutor: ' + (m.text || '') + (m.exercise ? ' [exercise: ' + m.exercise.kind + ']' : '')
        : 'Student: ' + (m.result && m.result.pron ? pron.forTutor(m.result.pron) : m.result && m.result.lines ? m.result.lines.join(' ') : m.text || ''))).join('\n').slice(-12000);
      const { data: mem } = await supabase.from('tutor_memory').select('notes').eq('student_id', session.student_id).maybeSingle();
      const raw = await brain.callModel(supabase, user.id, 'tutor_summary', 'You write short, accurate session notes for a language school. Reply with JSON only.',
        [{ role: 'user', content: brain.summaryPrompt(session, transcript, mem && mem.notes) }], { maxTokens: 2000, temperature: 0.3 });
      out = brain.cleanSummary(raw);
      Object.assign(patch, { title: out.title, summary: out.summary, topics: out.topics, words: out.words });
      await supabase.from('tutor_memory').upsert({ student_id: session.student_id, notes: out.memory, updated_at: new Date().toISOString() }, { onConflict: 'student_id' });
    }
  } catch (e) {
    console.error('[Tutor] summary failed:', e && (e.code || e.message));
  }
  await supabase.from('tutor_sessions').update(patch).eq('id', session.id);
  return out;
}

// ── start ───────────────────────────────────────────────────

async function handleStart(req, res, supabase, user) {
  if (!brain.configured()) return res.status(501).json({ error: 'The tutor is not configured', reason: 'not_configured' });
  if (!user.email_confirmed_at) return res.status(403).json({ error: 'Confirm your email first', reason: 'email' });
  const body = parseBody(req) || {};
  const ui = UI_LANGS.includes(body.ui) ? body.ui : 'en';
  let profile;
  try { profile = await studentOf(supabase, user); } catch (e) { return res.status(500).json({ error: 'Could not load your profile' }); }
  if (!profile) return res.status(404).json({ error: 'No student profile', reason: 'no_profile' });
  if (tooFast(user.id)) return res.status(429).json({ error: 'Too many requests. Please wait a moment.' });

  const { data: open } = await supabase.from('tutor_sessions').select('*').eq('student_id', profile.id).is('ended_at', null).maybeSingle();
  if (open && Date.now() - Date.parse(open.last_turn_at) < IDLE_MS) {
    const msgs = await messagesOf(supabase, open.id, 40);
    return res.status(200).json({ session: { id: open.id, started_at: open.started_at }, messages: msgs.map(outMessage), board: open.board || [], seconds: await balance(supabase, profile.id), resumed: true });
  }
  if (open) await finish(supabase, user, open);

  const { data: t, error: rErr } = await supabase.rpc('tutor_refresh', { p_student: profile.id });
  if (rErr || !t) return res.status(500).json({ error: 'Could not load your tutor time' });
  if (totalOf(t) <= 0) return res.status(402).json({ error: 'No tutor time left', reason: 'no_time' });

  const level = String(profile.level || '').slice(0, 2) || null;
  const { data: session, error: sErr } = await supabase.from('tutor_sessions')
    .insert({ student_id: profile.id, language: profile.language || 'English', level, ui }).select('*').single();
  if (sErr) return res.status(409).json({ error: 'A session is already open. Please reload.', reason: 'open' });

  const { data: ch } = await supabase.rpc('tutor_charge', { p_student: profile.id, p_seconds: MIN_CHARGE, p_session: session.id });
  const charged = ch && ch[0] ? ch[0].charged : 0;
  try {
    const { data: lastDone } = await supabase.from('tutor_sessions').select('id').eq('student_id', profile.id).not('ended_at', 'is', null).limit(1);
    const reply = await tutorReply(supabase, user, profile, session, [], [brain.openingTask(!(lastDone && lastDone.length))]);
    const saved = await saveReply(supabase, session, profile.id, reply, { seconds_used: charged });
    return res.status(200).json({ session: { id: session.id, started_at: session.started_at }, messages: [saved.msg], board: saved.board, seconds: ch && ch[0] ? ch[0].remaining : totalOf(t) });
  } catch (e) {
    // Nothing happened: the session goes and the seconds come back
    await supabase.from('tutor_sessions').delete().eq('id', session.id);
    if (charged > 0) await supabase.rpc('tutor_add_credit', { p_student: profile.id, p_seconds: charged, p_reason: 'refund', p_stripe_session: null, p_note: 'tutor did not answer', p_by: null });
    return brainError(res, e);
  }
}

// ── turn ────────────────────────────────────────────────────

async function handleTurn(req, res, supabase, user) {
  if (!brain.configured()) return res.status(501).json({ error: 'The tutor is not configured', reason: 'not_configured' });
  const body = parseBody(req) || {};
  let profile;
  try { profile = await studentOf(supabase, user); } catch (e) { return res.status(500).json({ error: 'Could not load your profile' }); }
  if (!profile) return res.status(404).json({ error: 'No student profile' });
  if (tooFast(user.id)) return res.status(429).json({ error: 'Too many requests. Please wait a moment.' });
  const session = await sessionOf(supabase, profile.id, body.session);
  if (!session) return res.status(404).json({ error: 'Session not found' });
  if (session.ended_at || Date.now() - Date.parse(session.last_turn_at) >= IDLE_MS) {
    if (!session.ended_at) await finish(supabase, user, session);
    return res.status(409).json({ error: 'This session has ended.', reason: 'ended' });
  }

  // What the student sends: a message, or their results on the exercise of one of the tutor's messages
  const row = { session_id: session.id, student_id: profile.id, role: 'student' };
  if (body.answer && typeof body.answer === 'object') {
    const { data: ex } = UUID_RE.test(String(body.answer.message || '')) ? await supabase.from('tutor_messages').select('id, exercise')
      .eq('id', body.answer.message).eq('session_id', session.id).eq('role', 'tutor').maybeSingle() : { data: null };
    if (!ex || !ex.exercise) return res.status(400).json({ error: 'No such exercise' });
    const results = Array.isArray(body.answer.results) ? body.answer.results : [];
    const items = ex.exercise.items || ex.exercise.pairs || [];
    const lines = items.map((it, i) => {
      const r = results.find((x) => x && Number(x.i) === i);
      const what = Array.isArray(it) ? it[0] + ' = ' + it[1] : it.q || it.s || (Array.isArray(it.o) ? it.o.join(' / ') : it.a) || '';
      return `"${clean(what, 120)}": ${!r ? 'not answered' : r.ok ? 'right first time' : 'wrong at first' + (r.given ? ' (wrote "' + clean(r.given, 80) + '")' : '')}.`;
    });
    row.result = { message: ex.id, right: results.filter((x) => x && x.ok).length, total: items.length, lines };
  } else if (body.audio != null) {
    // Said aloud: the recording becomes text here and is dropped; it never reaches the database
    if (!voice.listenConfigured()) return res.status(501).json({ error: 'Listening is not configured', reason: 'listen_off' });
    const a = voice.readAudio(body);
    if (a.reason) return res.status(a.reason === 'audio_long' ? 413 : 400).json({ error: 'This recording cannot be used', reason: a.reason });
    let heard;
    try { heard = await voice.listen(supabase, user.id, { audio: a.audio, mime: a.mime, language: profile.language }); } catch (e) {
      if (e && e.code === 'budget') return brainError(res, e);
      console.error('[Tutor] listen:', e && (e.code + ' ' + (e.message || '')));
      return res.status(502).json({ error: 'The recording could not be understood. Please try again or write.', reason: 'listen' });
    }
    const text = clean(heard, MAX_TEXT);
    if (!text) return res.status(422).json({ error: 'Nothing was heard. Please try again.', reason: 'unheard' });
    row.text = text;
    row.spoken = true;
  } else {
    const text = clean(body.text, MAX_TEXT);
    if (!text) return res.status(400).json({ error: 'Write something first' });
    row.text = text;
  }

  // The time since the previous turn, within 5 to 90 seconds
  const gap = Math.round((Date.now() - Date.parse(session.last_turn_at)) / 1000);
  const want = Math.max(MIN_CHARGE, Math.min(MAX_CHARGE, gap));
  const { data: ch, error: cErr } = await supabase.rpc('tutor_charge', { p_student: profile.id, p_seconds: want, p_session: session.id });
  if (cErr || !ch || !ch[0]) return res.status(500).json({ error: 'Could not count your time' });
  const { charged, remaining } = ch[0];
  if (charged <= 0) {
    await finish(supabase, user, session);
    return res.status(402).json({ error: 'No tutor time left', reason: 'no_time' });
  }

  const { data: saved, error: mErr } = await supabase.from('tutor_messages').insert(row).select(MSG_COLS).single();
  if (mErr) return res.status(500).json({ error: 'Could not save your message' });
  const closing = remaining <= 0;
  try {
    const history = await messagesOf(supabase, session.id, HISTORY);
    const reply = await tutorReply(supabase, user, profile, session, history, closing ? [brain.CLOSING_TASK] : []);
    if (closing) { reply.exercise = null; reply.pron = null; }
    const out = await saveReply(supabase, session, profile.id, reply, { seconds_used: session.seconds_used + charged, turns: session.turns + 1 });
    let summary = null;
    if (closing) summary = await finish(supabase, user, Object.assign({}, session, { turns: session.turns + 1 }));
    return res.status(200).json({ mine: outMessage(saved), message: out.msg, board: out.board, seconds: remaining, ended: closing, summary });
  } catch (e) {
    await supabase.from('tutor_messages').delete().eq('id', saved.id);
    await supabase.rpc('tutor_add_credit', { p_student: profile.id, p_seconds: charged, p_reason: 'refund', p_stripe_session: null, p_note: 'tutor did not answer', p_by: null });
    return brainError(res, e);
  }
}

// ── end ─────────────────────────────────────────────────────

async function handleEnd(req, res, supabase, user) {
  const body = parseBody(req) || {};
  let profile;
  try { profile = await studentOf(supabase, user); } catch (e) { return res.status(500).json({ error: 'Could not load your profile' }); }
  if (!profile) return res.status(404).json({ error: 'No student profile' });
  const session = await sessionOf(supabase, profile.id, body.session);
  if (!session) return res.status(404).json({ error: 'Session not found' });
  if (session.ended_at) return res.status(200).json({ title: session.title, summary: session.summary, words: session.words, seconds: await balance(supabase, profile.id) });
  // The last stretch since the previous turn, up to 90 seconds
  const gap = Math.min(MAX_CHARGE, Math.round((Date.now() - Date.parse(session.last_turn_at)) / 1000));
  if (gap >= 1 && Date.now() - Date.parse(session.last_turn_at) < IDLE_MS) {
    const { data: ch } = await supabase.rpc('tutor_charge', { p_student: profile.id, p_seconds: gap, p_session: session.id });
    if (ch && ch[0]) await supabase.from('tutor_sessions').update({ seconds_used: session.seconds_used + ch[0].charged }).eq('id', session.id);
  }
  const out = await finish(supabase, user, session);
  return res.status(200).json({ title: out && out.title, summary: out && out.summary, words: out ? out.words : [], seconds: await balance(supabase, profile.id) });
}

// ── voice (part 3) ──────────────────────────────────────────

async function handleVoice(req, res, supabase, user) {
  if (!voice.voiceConfigured()) return res.status(501).json({ error: 'The voice is not configured', reason: 'voice_off' });
  const body = parseBody(req) || {};
  let profile;
  try { profile = await studentOf(supabase, user); } catch (e) { return res.status(500).json({ error: 'Could not load your profile' }); }
  if (!profile) return res.status(404).json({ error: 'No student profile' });
  if (tooFast(user.id)) return res.status(429).json({ error: 'Too many requests. Please wait a moment.' });
  const session = await sessionOf(supabase, profile.id, body.session);
  if (!session) return res.status(404).json({ error: 'Session not found' });
  if (session.ended_at || Date.now() - Date.parse(session.last_turn_at) >= IDLE_MS) return res.status(409).json({ error: 'This session has ended.', reason: 'ended' });
  // The voice stops when the time runs out (the closing reply stays written)
  if (await balance(supabase, profile.id) <= 0) return res.status(402).json({ error: 'No tutor time left', reason: 'no_time' });
  if (!UUID_RE.test(String(body.message || ''))) return res.status(400).json({ error: 'Invalid message' });
  // slow: the sentence set to say aloud (part 4), spoken slowly; otherwise what the tutor said
  const slow = body.slow === true, col = slow ? 'pron_voiced_at' : 'voiced_at';

  // Claimed once: only while the column is still empty, so a message is spoken (and paid for) one time
  const { data: claimed, error: cErr } = await supabase.from('tutor_messages').update({ [col]: new Date().toISOString() })
    .eq('id', body.message).eq('session_id', session.id).eq('role', 'tutor').is(col, null).select('id, text, pron');
  if (cErr) return res.status(500).json({ error: 'Could not load the message' });
  const msg = claimed && claimed[0];
  if (!msg) {
    const { data: was } = await supabase.from('tutor_messages').select('id').eq('id', body.message).eq('session_id', session.id).eq('role', 'tutor').maybeSingle();
    return was ? res.status(409).json({ error: 'Already spoken', reason: 'voiced' }) : res.status(404).json({ error: 'Message not found' });
  }
  const release = () => supabase.from('tutor_messages').update({ [col]: null }).eq('id', msg.id);
  const text = slow ? msg.pron : msg.text;
  if (!String(text || '').trim()) { await release(); return res.status(400).json({ error: 'Nothing to say', reason: 'empty' }); }
  try {
    const out = await voice.speak(supabase, user.id, text, { slow });
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('X-Alimun-Voice', out.voice);
    return res.status(200).send(out.mp3);
  } catch (e) {
    await release();
    if (e && e.code === 'budget') return brainError(res, e);
    console.error('[Tutor] voice:', e && (e.code + ' ' + (e.message || '')));
    return res.status(502).json({ error: 'The voice is not available right now.', reason: 'voice' });
  }
}

// ── pronounce (part 4) ──────────────────────────────────────

async function handlePronounce(req, res, supabase, user) {
  if (!pron.configured()) return res.status(501).json({ error: 'Pronunciation is not configured', reason: 'pron_off' });
  if (!brain.configured()) return res.status(501).json({ error: 'The tutor is not configured', reason: 'not_configured' });
  const body = parseBody(req) || {};
  let profile;
  try { profile = await studentOf(supabase, user); } catch (e) { return res.status(500).json({ error: 'Could not load your profile' }); }
  if (!profile) return res.status(404).json({ error: 'No student profile' });
  if (tooFast(user.id)) return res.status(429).json({ error: 'Too many requests. Please wait a moment.' });
  const session = await sessionOf(supabase, profile.id, body.session);
  if (!session) return res.status(404).json({ error: 'Session not found' });
  if (session.ended_at || Date.now() - Date.parse(session.last_turn_at) >= IDLE_MS) {
    if (!session.ended_at) await finish(supabase, user, session);
    return res.status(409).json({ error: 'This session has ended.', reason: 'ended' });
  }
  // The sentence comes from the database: the session's latest tutor message, which must have set one
  if (!UUID_RE.test(String(body.message || ''))) return res.status(400).json({ error: 'Invalid message' });
  const { data: latest } = await supabase.from('tutor_messages').select('id, pron').eq('session_id', session.id).eq('role', 'tutor')
    .order('created_at', { ascending: false }).limit(1);
  const target = latest && latest[0];
  if (!target || target.id !== body.message || !target.pron) return res.status(409).json({ error: 'This sentence is no longer open', reason: 'pron_closed' });
  const a = pron.readWav(body);
  if (a.reason) return res.status(a.reason === 'audio_long' ? 413 : 400).json({ error: 'This recording cannot be used', reason: a.reason });
  // Nothing is scored without time left
  if (await balance(supabase, profile.id) <= 0) { await finish(supabase, user, session); return res.status(402).json({ error: 'No tutor time left', reason: 'no_time' }); }

  // Scored by Azure and dropped: the recording never reaches the database
  let scored;
  try { scored = await pron.score(supabase, user.id, { audio: a.audio, seconds: a.seconds, sentence: target.pron, language: session.language }); } catch (e) {
    if (e && e.code === 'budget') return brainError(res, e);
    if (e && e.code === 'unheard') return res.status(422).json({ error: 'Nothing was heard. Please try again.', reason: 'unheard' });
    console.error('[Tutor] pronounce:', e && (e.code + ' ' + (e.message || '')));
    return res.status(502).json({ error: 'Your pronunciation could not be scored. Please try again.', reason: 'pron' });
  }

  // The time since the previous turn, within 5 to 90 seconds, like any turn
  const gap = Math.round((Date.now() - Date.parse(session.last_turn_at)) / 1000);
  const { data: ch, error: cErr } = await supabase.rpc('tutor_charge', { p_student: profile.id, p_seconds: Math.max(MIN_CHARGE, Math.min(MAX_CHARGE, gap)), p_session: session.id });
  if (cErr || !ch || !ch[0]) return res.status(500).json({ error: 'Could not count your time' });
  const { charged, remaining } = ch[0];
  if (charged <= 0) {
    await finish(supabase, user, session);
    return res.status(402).json({ error: 'No tutor time left', reason: 'no_time' });
  }
  const { data: saved, error: mErr } = await supabase.from('tutor_messages').insert({
    session_id: session.id, student_id: profile.id, role: 'student', text: clean(scored.heard, MAX_TEXT), spoken: true, result: { message: target.id, pron: scored },
  }).select(MSG_COLS).single();
  if (mErr) return res.status(500).json({ error: 'Could not save your attempt' });
  const closing = remaining <= 0;
  const turns = { seconds_used: session.seconds_used + charged, turns: session.turns + 1 };
  try {
    const history = await messagesOf(supabase, session.id, HISTORY);
    const reply = await tutorReply(supabase, user, profile, session, history, closing ? [brain.CLOSING_TASK] : []);
    if (closing) { reply.exercise = null; reply.pron = null; }
    const out = await saveReply(supabase, session, profile.id, reply, turns);
    let summary = null;
    if (closing) summary = await finish(supabase, user, Object.assign({}, session, { turns: session.turns + 1 }));
    return res.status(200).json({ mine: outMessage(saved), message: out.msg, board: out.board, seconds: remaining, ended: closing, summary });
  } catch (e) {
    // The score stays (Azure has scored it and the student sees it); only the tutor's answer is missing, and the
    // sentence stays open to try again
    await supabase.from('tutor_sessions').update(Object.assign({ last_turn_at: new Date().toISOString() }, turns)).eq('id', session.id);
    if (closing) await finish(supabase, user, Object.assign({}, session, { turns: session.turns + 1 }));
    const why = e && e.code === 'budget' ? 'budget' : 'provider';
    if (why === 'provider') console.error('[Tutor] model after pronounce:', e && (e.code + ' ' + (e.message || '')));
    return res.status(200).json({ mine: outMessage(saved), message: null, board: session.board || [], seconds: remaining, ended: closing, summary: null, reply_error: why });
  }
}

// ── forgetting ──────────────────────────────────────────────

async function handleForget(req, res, supabase, user) {
  const profile = await studentOf(supabase, user).catch(() => null);
  if (!profile) return res.status(404).json({ error: 'No student profile' });
  const a = await supabase.from('tutor_memory').delete().eq('student_id', profile.id);
  const b = await supabase.from('tutor_sessions').delete().eq('student_id', profile.id);
  if (a.error || b.error) return res.status(500).json({ error: 'Could not delete everything. Please try again.' });
  return res.status(200).json({ ok: true });
}

// ── Router ──────────────────────────────────────────────────

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || 'https://alimun.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const action = String(req.query.action || '');
  const supabase = getSupabaseAdmin();
  const user = await requireAuth(req, supabase);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  if (action === 'status') {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
    return handleStatus(req, res, supabase, user);
  }
  if (action === 'admin-grant') {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    return handleAdminGrant(req, res, supabase, user);
  }
  const POST = { start: handleStart, turn: handleTurn, voice: handleVoice, pronounce: handlePronounce, end: handleEnd, forget: handleForget };
  if (POST[action]) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    return POST[action](req, res, supabase, user);
  }
  return res.status(400).json({ error: 'Unknown action' });
};
