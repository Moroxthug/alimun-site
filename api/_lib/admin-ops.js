/**
 * Admin class operations, served by /api/admin/teacher?action=… (the
 * function cap keeps them in that handler). Every action: POST, Supabase
 * JWT, app_metadata.role = 'admin'.
 *
 *   session-update     { session_id, op: 'cancel' | 'reschedule',
 *                        date: 'YYYY-MM-DD', time: 'HH:MM'  (reschedule; in the class's timezone),
 *                        reason?, notify? (default true) }
 *   enrollment-move    { student_id, cohort_id, notify? }
 *   enrollment-remove  { student_id, notify? }
 *
 * Emails go to the class's active students and its teacher (session-update)
 * or to the student (move/remove). Without RESEND_API_KEY the change still
 * happens and the response reports emailConfigured: false.
 */

const { createClient } = require('@supabase/supabase-js');
const TZ = require('../../js/tz.js');
const { cancelActiveEnrollments, takeSeat } = require('./seat.js');

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const DATE_RE = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
const TIME_RE = /^([01]\d|2[0-3]):[0-5]\d$/;
const TIER_WEIGHTS = { community: 1, focused: 2, intensive: 3, private: 4 };

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function emailConfigured() {
  return !!process.env.RESEND_API_KEY;
}

/** Send through Resend. Returns true only when Resend accepted the message. */
async function sendEmail(to, subject, html) {
  if (!emailConfigured()) return false;
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM_ADDRESS || 'Alimun <no-reply@alimun.com>',
        to,
        subject: String(subject).replace(/[\r\n<>]+/g, ' ').slice(0, 200),
        html,
      }),
    });
    if (!r.ok) console.error('[Admin ops] Resend rejected email:', r.status);
    return r.ok;
  } catch (err) {
    console.error('[Admin ops] Email failed:', err.message);
    return false;
  }
}

function emailHtml(heading, paragraphs) {
  const appUrl = process.env.APP_URL || 'https://alimun.com';
  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
  <body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;background:#f0efe9;margin:0;padding:0;">
    <div style="max-width:600px;margin:40px auto;background:#fff;border-radius:16px;overflow:hidden;">
      <div style="background:#080808;padding:30px;text-align:center;"><h1 style="color:#ceff65;margin:0;font-size:24px;letter-spacing:.05em;text-transform:uppercase;">Alimun</h1></div>
      <div style="padding:40px 30px;color:#333;line-height:1.6;">
        <h2 style="color:#080808;margin-top:0;">${escapeHtml(heading)}</h2>
        ${paragraphs.map((p) => `<p>${p}</p>`).join('')}
        <p style="text-align:center;"><a href="${appUrl}/signin.html" style="display:inline-block;background:#ceff65;color:#080808;text-decoration:none;padding:14px 30px;border-radius:30px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;margin-top:12px;">Open your dashboard</a></p>
      </div>
      <div style="background:#fafafa;padding:20px 30px;text-align:center;border-top:1px solid #eee;font-size:12px;color:#aaa;">Questions? Just reply to this email.</div>
    </div></body></html>`;
}

/** "Monday 20 October, 18:00 (Europe/Madrid)" */
function formatWhen(date, tz) {
  const zone = TZ.isValidTimezone(tz) ? tz : 'UTC';
  const d = new Date(date);
  return `${d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', timeZone: zone })}, `
    + `${d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: zone })} (${zone})`;
}

/** A person's display zone: their own setting unless it is the 'UTC' default, else the class zone. */
function personZone(profileTz, classTz) {
  return profileTz && profileTz !== 'UTC' && TZ.isValidTimezone(profileTz) ? profileTz : classTz;
}

async function emailOf(supabase, userId) {
  if (!userId) return null;
  const { data } = await supabase.auth.admin.getUserById(userId);
  return data?.user?.email || null;
}

function parseBody(req) {
  let body = req.body || {};
  if (typeof body === 'string') { try { body = JSON.parse(body || '{}'); } catch { body = null; } }
  return body;
}

/** Common gate. Returns { supabase, user, body } or sends the error and returns null. */
async function adminGate(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method not allowed' });
    return null;
  }
  const supabase = getSupabaseAdmin();
  if (!supabase) { res.status(500).json({ error: 'Server database connection error' }); return null; }
  const auth = req.headers.authorization || '';
  const { data, error } = auth.startsWith('Bearer ')
    ? await supabase.auth.getUser(auth.slice(7))
    : { data: null, error: true };
  if (error || !data?.user) { res.status(401).json({ error: 'Unauthorized' }); return null; }
  if (data.user.app_metadata?.role !== 'admin') { res.status(403).json({ error: 'Admins only' }); return null; }
  const body = parseBody(req);
  if (!body) { res.status(400).json({ error: 'Invalid JSON' }); return null; }
  return { supabase, user: data.user, body };
}

// ── session-update ──────────────────────────────────────────

async function sessionUpdate(req, res) {
  const g = await adminGate(req, res);
  if (!g) return;
  const { supabase, body } = g;
  const op = String(body.op || '');
  const reason = String(body.reason || '').trim().slice(0, 1000);
  const notify = body.notify !== false;

  if (!UUID_RE.test(String(body.session_id || ''))) return res.status(400).json({ error: 'Invalid session_id' });
  if (op !== 'cancel' && op !== 'reschedule') return res.status(400).json({ error: "op must be 'cancel' or 'reschedule'" });

  const { data: session, error: sErr } = await supabase
    .from('sessions')
    .select('id, status, scheduled_at, cohort_id, cohorts ( id, language, level, timezone, teacher_profiles ( full_name, user_id ) )')
    .eq('id', body.session_id)
    .maybeSingle();
  if (sErr) throw sErr;
  if (!session || !session.cohorts) return res.status(404).json({ error: 'Session not found' });
  if (session.status !== 'scheduled') {
    return res.status(409).json({ error: `Only scheduled sessions can be changed (this one is ${session.status}).` });
  }
  const cohort = session.cohorts;
  const classTz = TZ.isValidTimezone(cohort.timezone) ? cohort.timezone : 'UTC';

  let update;
  let newStart = null;
  if (op === 'cancel') {
    update = { status: 'cancelled' };
  } else {
    if (!DATE_RE.test(String(body.date || '')) || !TIME_RE.test(String(body.time || ''))) {
      return res.status(400).json({ error: 'date must be YYYY-MM-DD and time HH:MM' });
    }
    const [y, m, d] = body.date.split('-').map(Number);
    const mins = TZ.toMinutes(body.time);
    newStart = TZ.zonedToUtc(y, m, d, mins, classTz);
    const back = TZ.zonedParts(newStart, classTz);
    if (back.y !== y || back.m !== m || back.d !== d || back.minutes !== mins) {
      return res.status(400).json({ error: `${body.date} ${body.time} does not exist in ${classTz} (clocks change that night).` });
    }
    if (newStart.getTime() < Date.now() + 15 * 60000) {
      return res.status(400).json({ error: 'The new time must be at least 15 minutes from now.' });
    }
    update = { scheduled_at: newStart.toISOString() };
  }

  // Conditional on the status we checked, so two admins cannot both apply.
  const { data: changed, error: uErr } = await supabase
    .from('sessions')
    .update(update)
    .eq('id', session.id)
    .eq('status', 'scheduled')
    .select('id');
  if (uErr) throw uErr;
  if (!changed || changed.length === 0) return res.status(409).json({ error: 'The session changed in the meantime. Reload and try again.' });

  const result = { success: true, op, scheduled_at: newStart ? newStart.toISOString() : session.scheduled_at, emailConfigured: emailConfigured(), emailed: 0, notEmailed: 0 };
  if (!notify) return res.status(200).json(result);

  // Recipients: the class's active students and its teacher.
  const { data: enrolled } = await supabase
    .from('enrollments')
    .select('student_profiles ( full_name, user_id, timezone )')
    .eq('cohort_id', cohort.id)
    .eq('status', 'active');
  const people = (enrolled || []).map((e) => e.student_profiles).filter(Boolean);
  if (cohort.teacher_profiles) people.push({ ...cohort.teacher_profiles, isTeacher: true });

  const className = `${cohort.language} ${cohort.level}`;
  for (const p of people) {
    const to = await emailOf(supabase, p.user_id);
    if (!to) { result.notEmailed++; continue; }
    const zone = personZone(p.timezone, classTz);
    const oldWhen = formatWhen(session.scheduled_at, zone);
    const lines = op === 'cancel'
      ? [`Your <strong>${escapeHtml(className)}</strong> session on <strong>${escapeHtml(oldWhen)}</strong> has been cancelled.`]
      : [`Your <strong>${escapeHtml(className)}</strong> session on ${escapeHtml(oldWhen)} has moved to <strong>${escapeHtml(formatWhen(newStart, zone))}</strong>.`];
    if (reason) lines.push(`Reason: ${escapeHtml(reason)}`);
    if (op === 'reschedule') lines.push('The classroom opens in your dashboard 15 minutes before the new start time.');
    const subject = op === 'cancel' ? `Session cancelled: ${className}` : `Session moved: ${className}`;
    const ok = await sendEmail(to, subject, emailHtml(`Hello ${p.full_name || ''}`.trim(), lines));
    if (ok) result.emailed++; else result.notEmailed++;
  }
  return res.status(200).json(result);
}

// ── enrollment-move / enrollment-remove ─────────────────────

async function loadStudent(supabase, id) {
  const { data, error } = await supabase
    .from('student_profiles')
    .select('id, user_id, full_name, language, tier, enrolled_cohort_id')
    .eq('id', id)
    .maybeSingle();
  if (error) throw error;
  return data;
}

async function enrollmentMove(req, res) {
  const g = await adminGate(req, res);
  if (!g) return;
  const { supabase, body } = g;
  if (!UUID_RE.test(String(body.student_id || ''))) return res.status(400).json({ error: 'Invalid student_id' });
  if (!UUID_RE.test(String(body.cohort_id || ''))) return res.status(400).json({ error: 'Invalid cohort_id' });

  const student = await loadStudent(supabase, body.student_id);
  if (!student) return res.status(404).json({ error: 'Student not found' });
  const { data: cohort, error: cErr } = await supabase
    .from('cohorts')
    .select('id, language, level, tier, status, max_students, teacher_profiles ( full_name )')
    .eq('id', body.cohort_id)
    .maybeSingle();
  if (cErr) throw cErr;
  if (!cohort) return res.status(404).json({ error: 'Class not found' });
  if (cohort.status === 'closed') return res.status(409).json({ error: 'That class is closed. Reopen it first.' });
  if (student.enrolled_cohort_id === cohort.id) return res.status(409).json({ error: 'The student is already in this class.' });
  if (cohort.language !== student.language) {
    return res.status(409).json({ error: `This class teaches ${cohort.language}; the student is learning ${student.language}. Change the student's language first.` });
  }

  const seat = await takeSeat(supabase, {
    studentId: student.id,
    cohortId: cohort.id,
    previousCohortId: student.enrolled_cohort_id,
    replaceCurrent: true,
  });
  if (!seat.ok) return res.status(seat.status).json({ error: seat.message || seat.error });

  const result = { success: true, seats: { enrolled: seat.newCount, max: cohort.max_students }, emailConfigured: emailConfigured(), emailed: false };
  if ((TIER_WEIGHTS[student.tier] || 0) < (TIER_WEIGHTS[cohort.tier] || 0)) {
    result.warning = `The student's ${student.tier || 'no'} plan does not normally include ${cohort.tier} classes.`;
  }
  if (body.notify !== false) {
    const to = await emailOf(supabase, student.user_id);
    if (to) {
      const teacher = cohort.teacher_profiles?.full_name || 'your teacher';
      result.emailed = await sendEmail(to, `Your class: ${cohort.language} ${cohort.level}`, emailHtml(`Hello ${student.full_name || ''}`.trim(), [
        `You are now in the <strong>${escapeHtml(cohort.language)} ${escapeHtml(cohort.level)}</strong> class with <strong>${escapeHtml(teacher)}</strong>.`,
        'Your dashboard shows the schedule and your next session.',
      ]));
    }
  }
  return res.status(200).json(result);
}

async function enrollmentRemove(req, res) {
  const g = await adminGate(req, res);
  if (!g) return;
  const { supabase, body } = g;
  if (!UUID_RE.test(String(body.student_id || ''))) return res.status(400).json({ error: 'Invalid student_id' });

  const student = await loadStudent(supabase, body.student_id);
  if (!student) return res.status(404).json({ error: 'Student not found' });
  const { data: active } = await supabase
    .from('enrollments')
    .select('id, cohorts ( language, level )')
    .eq('student_id', student.id)
    .eq('status', 'active');
  if (!active || active.length === 0) return res.status(409).json({ error: 'The student is not in a class.' });

  await cancelActiveEnrollments(supabase, student.id);

  const result = { success: true, emailConfigured: emailConfigured(), emailed: false };
  if (body.notify !== false) {
    const to = await emailOf(supabase, student.user_id);
    const c = active[0].cohorts;
    if (to) {
      result.emailed = await sendEmail(to, 'Your Alimun class', emailHtml(`Hello ${student.full_name || ''}`.trim(), [
        `You are no longer in the <strong>${escapeHtml(c ? `${c.language} ${c.level}` : '')}</strong> class.`,
        'You can choose a new class from your dashboard, or reply to this email if you have questions.',
      ]));
    }
  }
  return res.status(200).json(result);
}

/** Wrap a handler so unexpected errors become a 500 instead of a crash. */
function safe(fn) {
  return async (req, res) => {
    try {
      return await fn(req, res);
    } catch (err) {
      console.error('[Admin ops] Internal error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
}

module.exports = {
  sessionUpdate: safe(sessionUpdate),
  enrollmentMove: safe(enrollmentMove),
  enrollmentRemove: safe(enrollmentRemove),
};
