/**
 * ============================================================
 *  ALIMUN — /api/material
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  The complete course material for learners with a plan (docs/APP_PLAN.md, the free limit). The public files in
 *  /data hold only what a free account may use (api/_lib/free-limit.js); this hands out the complete file to a
 *  signed-in learner with an active plan, an approved teacher or an admin. The app keeps it on the device for
 *  offline use (js/app/data.js, material()).
 *
 *    GET ?path=books/English-A1.en.json   (Supabase JWT)
 *        200 the complete file
 *        401 not signed in, 403 { error: 'plan_required' }, 404 { error: 'not_locked' } when nothing in the file is
 *        locked (the public file is complete), 400 for any other path.
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');
const { PATH_RE, readPrivate, fullAccess } = require('./_lib/material.js');

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'private, no-store');
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });
  const rel = String((req.query && req.query.path) || '');
  if (!PATH_RE.test(rel)) return res.status(400).json({ error: 'bad_path' });
  const supabase = getSupabaseAdmin();
  if (!supabase) return res.status(500).json({ error: 'not_configured' });
  const h = req.headers.authorization || '';
  if (!h.startsWith('Bearer ')) return res.status(401).json({ error: 'sign_in' });
  const { data, error } = await supabase.auth.getUser(h.slice(7));
  if (error || !data || !data.user) return res.status(401).json({ error: 'sign_in' });
  try {
    if (!(await fullAccess(supabase, data.user))) return res.status(403).json({ error: 'plan_required' });
  } catch (e) {
    console.error('[material] access check failed', e && e.message);
    return res.status(500).json({ error: 'server_error' });
  }
  const text = readPrivate(rel);
  if (!text) return res.status(404).json({ error: 'not_locked' });
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  return res.status(200).send(text);
};
