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
 *  Time is counted and taken only here, through the database functions of
 *  supabase/migrations/202610262000_tutor_time.sql (service role); the browser
 *  only reads its own balance.
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');

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
    open: false, // the tutor itself opens with part 2
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
  return res.status(400).json({ error: 'Unknown action' });
};
