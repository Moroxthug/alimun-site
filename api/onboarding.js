/**
 * Teacher onboarding (docs/TEACHER_ONBOARDING_PLAN.md): "Getting started" in the teacher dashboard and the practice classroom.
 *
 *   GET  ?action=state[&lang=xx]   (the teacher) the parts done, the practice classroom, and the videos in their language
 *   POST ?action=step { part, answer? }  (the teacher) finishes a part: a question is checked against its answer, an action
 *        against the database (availability saved, practice classroom opened, profile written). Parts open one after another.
 *   POST ?action=practice          (the teacher, or a teacher before their trial class) a private Daily room for 60 minutes,
 *        with a second pass to join as a learner from another device. Nothing is recorded.
 *   GET  ?action=admin             (admin) every approved or hired teacher with their progress, and the videos
 *   POST ?action=video-set { part, lang, path|null }   (admin) the video of a part, uploaded to the teacher-tutorial bucket
 * Progress is written here only (service role): the table has no write policy for teachers.
 */
const { createClient } = require('@supabase/supabase-js');
const { dailyFetch, hasDailyKey } = require('./_lib/daily.js');

/* The parts, in order. A question's answer is the id of the right choice; the choices themselves are in the dashboard. */
const PARTS = [
  { id: 'dashboard', kind: 'quiz', answer: 'today' },
  { id: 'availability', kind: 'action' },
  { id: 'classroom', kind: 'quiz', answer: 'm15' },
  { id: 'practice', kind: 'action' },
  { id: 'board', kind: 'quiz', answer: 'reveal' },
  { id: 'notes', kind: 'quiz', answer: 'everyone' },
  { id: 'profile', kind: 'action' },
];
const PART_IDS = PARTS.map((p) => p.id);
const LANGS = ['en', 'es', 'fr', 'de', 'pt', 'it', 'zh', 'ar', 'ma'];
const BIO_MIN = 40;
const PRACTICE_MIN = 60;
/* A teacher still being hired may practise before their trial class */
const HIRING_PRACTICE = ['pre_approved', 'trial_scheduled', 'trial_done'];

function sbAdmin() {
  const url = process.env.SUPABASE_URL, key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return url && key ? createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } }) : null;
}
function body(req) { if (req.body && typeof req.body === 'object') return req.body; try { return JSON.parse(req.body || '{}'); } catch (e) { return {}; } }
async function whoIs(req, sb) {
  const h = req.headers.authorization || '';
  if (!h.startsWith('Bearer ')) return null;
  const { data, error } = await sb.auth.getUser(h.slice(7));
  return error || !data || !data.user ? null : data.user;
}
function videoUrl(path) { return `${process.env.SUPABASE_URL}/storage/v1/object/public/teacher-tutorial/${String(path).split('/').map(encodeURIComponent).join('/')}`; }

async function rowOf(sb, teacherId) {
  const { data } = await sb.from('teacher_onboarding').select('steps, practice_at, practice_count, finished_at').eq('teacher_id', teacherId).maybeSingle();
  return data || { steps: {}, practice_at: null, practice_count: 0, finished_at: null };
}
async function saveRow(sb, teacherId, patch) {
  const { error } = await sb.from('teacher_onboarding').upsert(Object.assign({ teacher_id: teacherId, updated_at: new Date().toISOString() }, patch), { onConflict: 'teacher_id' });
  if (error) throw new Error('onboarding: ' + error.message);
}
function stateOf(row, videos) {
  const steps = row.steps || {};
  return {
    parts: PARTS.map((p) => ({ id: p.id, kind: p.kind, done_at: steps[p.id] || null })),
    practice_at: row.practice_at, practice_count: row.practice_count || 0, finished_at: row.finished_at, videos: videos || {},
  };
}
async function videosFor(sb, lang) {
  const { data } = await sb.from('teacher_tutorial_videos').select('part, lang, path');
  const out = {};
  (data || []).filter((v) => v.lang === 'en').forEach((v) => { out[v.part] = videoUrl(v.path); });
  (data || []).filter((v) => v.lang === lang && lang !== 'en').forEach((v) => { out[v.part] = videoUrl(v.path); });
  return out;
}

/* Whether an action part is really done, read from the database */
async function actionDone(sb, part, teacher, row) {
  if (part === 'availability') {
    const [a, b] = await Promise.all([
      sb.from('teacher_availability').select('id', { count: 'exact', head: true }).eq('teacher_id', teacher.id),
      sb.from('room_availability').select('id', { count: 'exact', head: true }).eq('teacher_id', teacher.id),
    ]);
    return (a.count || 0) + (b.count || 0) > 0;
  }
  if (part === 'practice') return !!row.practice_at;
  if (part === 'profile') return String(teacher.bio || '').trim().length >= BIO_MIN;
  return false;
}

/* A private room for one teacher, with the teacher's pass (managing participants, as in a class) and a learner's pass */
async function practiceRoom(teacher) {
  const name = `practice-${String(teacher.id).replace(/-/g, '')}`;
  const exp = Math.floor(Date.now() / 1000) + PRACTICE_MIN * 60;
  const properties = { exp, eject_at_room_exp: true, enable_recording: false, max_participants: 4, enable_chat: true, enable_screenshare: true, enable_knocking: false, enable_emoji_reactions: false };
  let url = null;
  const refreshed = await dailyFetch(`/rooms/${name}`, { method: 'POST', body: JSON.stringify({ properties }) });
  if (refreshed.ok && refreshed.body && refreshed.body.url) url = refreshed.body.url;
  else {
    const created = await dailyFetch('/rooms', { method: 'POST', body: JSON.stringify({ name, privacy: 'private', properties }) });
    if (created.ok && created.body && created.body.url) url = created.body.url;
  }
  if (!url) return null;
  const pass = (props) => dailyFetch('/meeting-tokens', { method: 'POST', body: JSON.stringify({ properties: Object.assign({ room_name: name, exp, enable_recording_ui: false }, props) }) });
  const [mine, guest] = await Promise.all([
    pass({ user_name: String(teacher.full_name || 'Teacher').slice(0, 60), user_id: teacher.user_id, is_owner: false, permissions: { canAdmin: ['participants'] } }),
    pass({ user_name: 'Practice learner', is_owner: false }),
  ]);
  if (!mine.ok || !mine.body || !mine.body.token) return null;
  const g = guest.ok && guest.body && guest.body.token ? `${url}?t=${encodeURIComponent(guest.body.token)}` : null;
  return { url, token: mine.body.token, guestUrl: g, endsAt: new Date(exp * 1000).toISOString() };
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const action = String(req.query.action || '');
  const sb = sbAdmin();
  if (!sb) return res.status(500).json({ error: 'not configured' });
  try {
    const user = await whoIs(req, sb);
    if (!user) return res.status(401).json({ error: 'sign in' });
    const isAdmin = !!(user.app_metadata && user.app_metadata.role === 'admin');

    if (action === 'admin' || action === 'video-set') {
      if (!isAdmin) return res.status(403).json({ error: 'admins only' });
      if (action === 'admin') {
        const [{ data: teachers }, { data: rows }, { data: vids }] = await Promise.all([
          sb.from('teacher_profiles').select('id, full_name, status, hiring_stage, created_at').in('status', ['approved', 'pending']).order('created_at', { ascending: false }),
          sb.from('teacher_onboarding').select('teacher_id, steps, practice_at, practice_count, finished_at, updated_at'),
          sb.from('teacher_tutorial_videos').select('part, lang, path, updated_at'),
        ]);
        const by = {}; (rows || []).forEach((r) => { by[r.teacher_id] = r; });
        const list = (teachers || []).filter((t) => t.status === 'approved' || HIRING_PRACTICE.includes(t.hiring_stage) || by[t.id]).map((t) => {
          const r = by[t.id] || {}, steps = r.steps || {};
          return { id: t.id, full_name: t.full_name, status: t.status, hiring_stage: t.hiring_stage, done: PART_IDS.filter((p) => steps[p]), steps,
            practice_at: r.practice_at || null, practice_count: r.practice_count || 0, finished_at: r.finished_at || null, updated_at: r.updated_at || null };
        });
        return res.status(200).json({ parts: PART_IDS, langs: LANGS, teachers: list, videos: (vids || []).map((v) => Object.assign({}, v, { url: videoUrl(v.path) })) });
      }
      if (req.method !== 'POST') return res.status(405).json({ error: 'method not allowed' });
      const b = body(req);
      if (!PART_IDS.includes(b.part) || !LANGS.includes(b.lang)) return res.status(400).json({ error: 'bad part or language' });
      if (b.path == null) {
        const { error } = await sb.from('teacher_tutorial_videos').delete().eq('part', b.part).eq('lang', b.lang);
        if (error) throw new Error(error.message);
        return res.status(200).json({ ok: true });
      }
      const path = String(b.path);
      if (!/^[a-z]+\/[a-z]{2}-[0-9a-z]{4,40}\.(mp4|webm|mov)$/.test(path)) return res.status(400).json({ error: 'bad path' });
      const { error } = await sb.from('teacher_tutorial_videos').upsert({ part: b.part, lang: b.lang, path, updated_at: new Date().toISOString() }, { onConflict: 'part,lang' });
      if (error) throw new Error(error.message);
      return res.status(200).json({ ok: true, url: videoUrl(path) });
    }

    const { data: teacher } = await sb.from('teacher_profiles').select('id, user_id, full_name, status, hiring_stage, bio').eq('user_id', user.id).maybeSingle();
    if (!teacher) return res.status(404).json({ error: 'not a teacher' });
    const approved = teacher.status === 'approved';

    if (action === 'practice') {
      if (req.method !== 'POST') return res.status(405).json({ error: 'method not allowed' });
      if (!approved && !(teacher.status === 'pending' && HIRING_PRACTICE.includes(teacher.hiring_stage))) return res.status(403).json({ error: 'not yet' });
      if (!hasDailyKey()) return res.status(503).json({ error: 'Video service is not configured' });
      const room = await practiceRoom(teacher);
      if (!room) return res.status(502).json({ error: 'The practice room could not be created. Try again in a moment.' });
      const row = await rowOf(sb, teacher.id);
      await saveRow(sb, teacher.id, { practice_at: new Date().toISOString(), practice_count: (row.practice_count || 0) + 1 });
      return res.status(200).json(room);
    }

    if (!approved) return res.status(403).json({ error: 'not yet' });
    const lang = LANGS.includes(String(req.query.lang || '')) ? String(req.query.lang) : 'en';

    if (action === 'state') {
      const [row, videos] = await Promise.all([rowOf(sb, teacher.id), videosFor(sb, lang)]);
      return res.status(200).json(stateOf(row, videos));
    }

    if (action === 'step') {
      if (req.method !== 'POST') return res.status(405).json({ error: 'method not allowed' });
      const b = body(req), i = PART_IDS.indexOf(b.part);
      if (i < 0) return res.status(400).json({ error: 'bad part' });
      const row = await rowOf(sb, teacher.id), steps = Object.assign({}, row.steps || {});
      const videos = await videosFor(sb, lang);
      if (steps[b.part]) return res.status(200).json(stateOf(row, videos));
      if (PART_IDS.slice(0, i).some((p) => !steps[p])) return res.status(409).json({ error: 'locked' });
      const part = PARTS[i];
      if (part.kind === 'quiz' && String(b.answer || '') !== part.answer) return res.status(409).json({ error: 'wrong' });
      if (part.kind === 'action' && !(await actionDone(sb, part.id, teacher, row))) return res.status(409).json({ error: 'not_yet' });
      const now = new Date().toISOString();
      steps[part.id] = now;
      const patch = { steps };
      if (PART_IDS.every((p) => steps[p])) patch.finished_at = row.finished_at || now;
      await saveRow(sb, teacher.id, patch);
      return res.status(200).json(stateOf(Object.assign({}, row, patch), videos));
    }

    return res.status(400).json({ error: 'unknown action' });
  } catch (e) {
    console.error('[onboarding]', e);
    return res.status(500).json({ error: 'Something went wrong' });
  }
};
