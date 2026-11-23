/**
 * Teacher onboarding (docs/TEACHER_ONBOARDING_PLAN.md): the dashboard tour and the practice classroom.
 *
 *   GET  ?action=state             (the teacher) whether the tour was seen (finished or closed), and the practice classroom
 *   POST ?action=tour { done }     (the teacher) the tour was finished (done) or closed: it no longer opens by itself
 *   POST ?action=practice          (the teacher, or a teacher before their trial class) a private Daily room for 60 minutes,
 *        with a second pass to join as a learner from another device. Nothing is recorded.
 *   GET  ?action=admin             (admin) every approved or hired teacher with the tour and the practice classroom
 * Stored in teacher_onboarding (service role only): steps.tour = finished, steps.tour_closed = closed early.
 */
const { createClient } = require('@supabase/supabase-js');
const { dailyFetch, hasDailyKey } = require('./_lib/daily.js');

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
async function rowOf(sb, teacherId) {
  const { data } = await sb.from('teacher_onboarding').select('steps, practice_at, practice_count, finished_at').eq('teacher_id', teacherId).maybeSingle();
  return data || { steps: {}, practice_at: null, practice_count: 0, finished_at: null };
}
async function saveRow(sb, teacherId, patch) {
  const { error } = await sb.from('teacher_onboarding').upsert(Object.assign({ teacher_id: teacherId, updated_at: new Date().toISOString() }, patch), { onConflict: 'teacher_id' });
  if (error) throw new Error('onboarding: ' + error.message);
}
function stateOf(row) {
  const s = row.steps || {};
  return { tour_done_at: s.tour || null, tour_closed_at: s.tour_closed || null, tour_seen_at: s.tour || s.tour_closed || null,
    practice_at: row.practice_at, practice_count: row.practice_count || 0 };
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

    if (action === 'admin') {
      if (!(user.app_metadata && user.app_metadata.role === 'admin')) return res.status(403).json({ error: 'admins only' });
      const [{ data: teachers }, { data: rows }] = await Promise.all([
        sb.from('teacher_profiles').select('id, full_name, status, hiring_stage, created_at').in('status', ['approved', 'pending']).order('created_at', { ascending: false }),
        sb.from('teacher_onboarding').select('teacher_id, steps, practice_at, practice_count, finished_at, updated_at'),
      ]);
      const by = {}; (rows || []).forEach((r) => { by[r.teacher_id] = r; });
      const list = (teachers || []).filter((t) => t.status === 'approved' || HIRING_PRACTICE.includes(t.hiring_stage) || by[t.id]).map((t) => {
        const r = by[t.id] || {};
        return Object.assign({ id: t.id, full_name: t.full_name, status: t.status, hiring_stage: t.hiring_stage }, stateOf(r));
      });
      return res.status(200).json({ teachers: list });
    }

    const { data: teacher } = await sb.from('teacher_profiles').select('id, user_id, full_name, status, hiring_stage').eq('user_id', user.id).maybeSingle();
    if (!teacher) return res.status(404).json({ error: 'not a teacher' });

    if (action === 'practice') {
      if (req.method !== 'POST') return res.status(405).json({ error: 'method not allowed' });
      if (teacher.status !== 'approved' && !(teacher.status === 'pending' && HIRING_PRACTICE.includes(teacher.hiring_stage))) return res.status(403).json({ error: 'not yet' });
      if (!hasDailyKey()) return res.status(503).json({ error: 'Video service is not configured' });
      const room = await practiceRoom(teacher);
      if (!room) return res.status(502).json({ error: 'The practice room could not be created. Try again in a moment.' });
      const row = await rowOf(sb, teacher.id);
      await saveRow(sb, teacher.id, { practice_at: new Date().toISOString(), practice_count: (row.practice_count || 0) + 1 });
      return res.status(200).json(room);
    }

    if (teacher.status !== 'approved') return res.status(403).json({ error: 'not yet' });
    if (action === 'state') return res.status(200).json(stateOf(await rowOf(sb, teacher.id)));
    if (action === 'tour') {
      if (req.method !== 'POST') return res.status(405).json({ error: 'method not allowed' });
      const row = await rowOf(sb, teacher.id), steps = Object.assign({}, row.steps || {}), now = new Date().toISOString();
      const patch = { steps };
      if (body(req).done) { steps.tour = steps.tour || now; patch.finished_at = row.finished_at || now; }
      else steps.tour_closed = steps.tour_closed || now;
      await saveRow(sb, teacher.id, patch);
      return res.status(200).json(stateOf(Object.assign({}, row, patch)));
    }
    return res.status(400).json({ error: 'unknown action' });
  } catch (e) {
    console.error('[onboarding]', e);
    return res.status(500).json({ error: 'Something went wrong' });
  }
};
