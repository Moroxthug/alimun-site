/**
 * The complete course material (books, library shelves, practice sets, mock tests) for the server.
 * At deploy time scripts/split-material.js cuts the public /data files to the free limit and keeps the complete
 * files, gzipped, in private/material/<kind>/<file>.gz (never served as files). Files with nothing locked stay
 * public only.
 */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const SITE_URL = (process.env.APP_URL || 'https://alimun.com').replace(/\/+$/, '');
const PATH_RE = /^(books|library|practice|tests|audio)\/[A-Za-z0-9-]+(\.[a-z]{2})?\.json$/;
const DIR = path.join(process.cwd(), 'private', 'material');

/** The complete file as text, or null when nothing in it is locked (then the public file is complete). */
function readPrivate(rel) {
  if (!PATH_RE.test(rel)) return null;
  try { return zlib.gunzipSync(fs.readFileSync(path.join(DIR, rel + '.gz'))).toString('utf8'); }
  catch (e) { return null; }
}

/** The complete file as an object: the private copy when there is one, otherwise the public file. */
async function readMaterial(rel) {
  const text = readPrivate(rel);
  if (text) return JSON.parse(text);
  if (!PATH_RE.test(rel)) throw new Error('bad_path');
  const r = await fetch(`${SITE_URL}/data/${rel}`);
  if (!r.ok) throw new Error(`material ${rel} ${r.status}`);
  return r.json();
}

/** Whether this signed-in user may use everything: an active plan, an approved teacher, or an admin. */
async function fullAccess(supabase, user) {
  if (!user) return false;
  if (user.app_metadata && user.app_metadata.role === 'admin') return true;
  const { planActive } = require('./plan.js');
  const [sp, tp] = await Promise.all([
    supabase.from('student_profiles').select('stripe_subscription_status, plan_given_until').eq('user_id', user.id).maybeSingle(),
    supabase.from('teacher_profiles').select('status').eq('user_id', user.id).maybeSingle(),
  ]);
  if (tp.data && tp.data.status === 'approved') return true;
  return planActive(sp.data || null);
}

module.exports = { PATH_RE, readPrivate, readMaterial, fullAccess };
