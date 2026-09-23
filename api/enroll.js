/**
 * ============================================================
 *  ALIMUN — POST /api/enroll
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  The ONLY way a student gets a seat in a cohort. Handles:
 *    - first enrollment            { cohort_id }
 *    - switching cohorts           { cohort_id, switch: true }
 *    - claiming a waitlist offer   { cohort_id, waitlist_id }
 *    - leaving a cohort            { action: 'leave' }
 *
 *  Server-side checks (never trust the client):
 *    active subscription, tier allowance, language match,
 *    cohort open (or a valid, unexpired waitlist offer),
 *    atomic capacity via increment_enrollment RPC.
 *
 *  Direct client writes to `enrollments` / `increment_enrollment`
 *  are revoked in supabase/2026-09-security-hardening.sql.
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const TIER_WEIGHTS = { community: 1, focused: 2, intensive: 3, private: 4 };

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error('[Enroll API] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
    return null;
  }
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

async function sendResend({ to, subject, html }) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.warn('[Enroll API] RESEND_API_KEY not configured. Skipping email.');
    return;
  }
  const from = process.env.EMAIL_FROM_ADDRESS || 'Alimun <no-reply@alimun.com>';
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to, subject, html }),
    });
    if (!r.ok) console.error('[Enroll API] Resend error:', await r.text());
  } catch (err) {
    console.error('[Enroll API] Resend dispatch failed:', err);
  }
}

/** Cancel the student's active enrollment(s). Trigger frees the seat(s). */
async function cancelActiveEnrollments(supabase, studentId) {
  const { error } = await supabase
    .from('enrollments')
    .update({ status: 'cancelled', cancelled_at: new Date().toISOString() })
    .eq('student_id', studentId)
    .eq('status', 'active');
  if (error) throw new Error(`cancel enrollments: ${error.message}`);
  const { error: pErr } = await supabase
    .from('student_profiles')
    .update({ enrolled_cohort_id: null })
    .eq('id', studentId);
  if (pErr) throw new Error(`clear enrolled_cohort_id: ${pErr.message}`);
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || 'https://alimun.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // 1. Authenticate
  const authHeader = req.headers.authorization || '';
  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: Missing or invalid token' });
  }
  const supabase = getSupabaseAdmin();
  if (!supabase) return res.status(500).json({ error: 'Server database configuration error' });

  const { data: authData, error: authError } = await supabase.auth.getUser(authHeader.slice(7));
  if (authError || !authData?.user) {
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
  const user = authData.user;

  let body = req.body || {};
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
  const { cohort_id, waitlist_id, action } = body;
  const wantSwitch = body.switch === true;

  try {
    // 2. Student profile
    const { data: student, error: studentError } = await supabase
      .from('student_profiles')
      .select('*')
      .eq('user_id', user.id)
      .maybeSingle();
    if (studentError || !student) {
      return res.status(404).json({ error: 'Student profile not found' });
    }

    // ── action=leave ───────────────────────────────────────
    if (action === 'leave') {
      if (!student.enrolled_cohort_id) {
        return res.status(409).json({ error: 'not_enrolled', message: 'You are not in a class.' });
      }
      await cancelActiveEnrollments(supabase, student.id);
      return res.status(200).json({ success: true, message: 'You have left your class.' });
    }

    if (!cohort_id || !UUID_RE.test(String(cohort_id))) {
      return res.status(400).json({ error: 'Missing or invalid cohort_id' });
    }
    if (waitlist_id && !UUID_RE.test(String(waitlist_id))) {
      return res.status(400).json({ error: 'Invalid waitlist_id' });
    }

    // 3. Cohort
    const { data: cohort, error: cohortError } = await supabase
      .from('cohorts')
      .select('*, teacher_profiles ( id, full_name, user_id )')
      .eq('id', cohort_id)
      .maybeSingle();
    if (cohortError || !cohort) {
      return res.status(404).json({ error: 'Cohort not found' });
    }

    // ── Pre-enrollment checks ──────────────────────────────
    if (student.stripe_subscription_status !== 'active') {
      return res.status(402).json({
        error: 'payment_required',
        message: 'An active subscription is required to join a class.',
        tier: cohort.tier,
      });
    }

    const studentWeight = TIER_WEIGHTS[student.tier] || 0;
    const cohortWeight = TIER_WEIGHTS[cohort.tier] || 0;
    if (studentWeight < cohortWeight) {
      return res.status(403).json({
        error: 'tier_mismatch',
        message: `Your ${String(student.tier).toUpperCase()} plan does not include ${String(cohort.tier).toUpperCase()} classes.`,
        tier: cohort.tier,
      });
    }

    if (cohort.language !== student.language) {
      return res.status(403).json({
        error: 'language_mismatch',
        message: `This class teaches ${cohort.language}, but your profile is set to learn ${student.language}.`,
      });
    }

    if (student.enrolled_cohort_id === cohort.id) {
      return res.status(409).json({ error: 'already_enrolled', message: 'You are already in this class.' });
    }
    if (student.enrolled_cohort_id && !wantSwitch && !waitlist_id) {
      return res.status(409).json({
        error: 'already_enrolled',
        message: "You're already in a class. Switch classes to move.",
      });
    }

    // Waitlist offer: allows joining a 'full' cohort whose seat is reserved.
    let offer = null;
    if (waitlist_id) {
      const { data: wl } = await supabase
        .from('cohort_waitlist')
        .select('id, offered_at, offer_expires_at')
        .eq('id', waitlist_id)
        .eq('cohort_id', cohort.id)
        .eq('student_id', student.id)
        .maybeSingle();
      if (!wl || !wl.offered_at || !wl.offer_expires_at || new Date(wl.offer_expires_at) < new Date()) {
        return res.status(410).json({ error: 'offer_expired', message: 'This waitlist offer is no longer valid.' });
      }
      offer = wl;
    }

    if (cohort.status !== 'open' && !(offer && cohort.status === 'full')) {
      return res.status(409).json({
        error: 'cohort_not_open',
        message: cohort.status === 'full' ? 'This class is full.' : 'This class is closed.',
      });
    }

    // ── Enrollment transaction ─────────────────────────────
    // Free the current seat first when switching (the trigger decrements
    // the old cohort and may hand that seat to its waitlist).
    if (student.enrolled_cohort_id && (wantSwitch || waitlist_id)) {
      await cancelActiveEnrollments(supabase, student.id);
    }

    // Atomic capacity claim (SECURITY DEFINER RPC, service-role only).
    const { data: newCount, error: rpcError } = await supabase
      .rpc('increment_enrollment', { cohort_id: cohort.id });
    if (rpcError || newCount === null) {
      console.warn('[Enroll API] increment_enrollment failed or full:', rpcError?.message);
      return res.status(409).json({ error: 'cohort_full', message: 'This class is full.' });
    }

    // The enrollments trigger counts UPDATE cancelled→active and DELETE of an
    // active row, but NOT INSERT — increment_enrollment above is the single
    // counter on the way in. Remove any stale cancelled row first so the
    // insert never turns into a (double-counted) re-activation.
    await supabase
      .from('enrollments')
      .delete()
      .eq('student_id', student.id)
      .eq('cohort_id', cohort.id)
      .eq('status', 'cancelled');

    const { data: enrollRow, error: enrollError } = await supabase
      .from('enrollments')
      .insert({ student_id: student.id, cohort_id: cohort.id, status: 'active' })
      .select('id')
      .single();
    if (enrollError || !enrollRow) {
      console.error('[Enroll API] Insert enrollment error:', enrollError);
      await supabase.rpc('decrement_enrollment', { cohort_id: cohort.id });
      return res.status(500).json({ error: 'Failed to record enrollment' });
    }

    const { error: updateProfileError } = await supabase
      .from('student_profiles')
      .update({ enrolled_cohort_id: cohort.id })
      .eq('id', student.id);
    if (updateProfileError) {
      console.error('[Enroll API] Update student profile error:', updateProfileError);
      await supabase.from('enrollments').update({ status: 'cancelled', cancelled_at: new Date().toISOString() }).eq('id', enrollRow?.id);
      return res.status(500).json({ error: 'Failed to assign class to your profile' });
    }

    if (offer) {
      await supabase.from('cohort_waitlist').delete().eq('id', offer.id);
    }

    // ── Notifications ──────────────────────────────────────
    const appUrl = process.env.APP_URL || 'https://alimun.com';
    const teacherName = cohort.teacher_profiles?.full_name || 'your teacher';

    const { data: nextSession } = await supabase
      .from('sessions')
      .select('scheduled_at')
      .eq('cohort_id', cohort.id)
      .eq('status', 'scheduled')
      .gt('scheduled_at', new Date().toISOString())
      .order('scheduled_at', { ascending: true })
      .limit(1)
      .maybeSingle();

    let whenStr = 'soon — check your dashboard for the schedule';
    if (nextSession) {
      const d = new Date(nextSession.scheduled_at);
      whenStr = `${d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', timeZone: cohort.timezone || 'UTC' })} at ${d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: cohort.timezone || 'UTC' })} (${cohort.timezone || 'UTC'})`;
    }

    if (user.email) {
      await sendResend({
        to: user.email,
        subject: `You're in: ${cohort.language} ${cohort.level} with ${teacherName}`,
        html: `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
        <body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;background:#f6f6f6;margin:0;padding:0;">
          <div style="max-width:600px;margin:40px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,.05);">
            <div style="background:#080808;padding:30px;text-align:center;"><h1 style="color:#ceff65;margin:0;font-size:24px;letter-spacing:.05em;text-transform:uppercase;">Alimun</h1></div>
            <div style="padding:40px 30px;color:#333;line-height:1.6;">
              <h2 style="color:#080808;margin-top:0;">Welcome aboard, ${escapeHtml(student.full_name)}!</h2>
              <p>You have joined the <strong>${escapeHtml(cohort.language)} ${escapeHtml(cohort.level)} (${escapeHtml(cohort.goal_track)})</strong> class with <strong>${escapeHtml(teacherName)}</strong>.</p>
              <p>Your next session is <strong>${escapeHtml(whenStr)}</strong>. The classroom opens in your dashboard 15 minutes before start.</p>
              <p style="text-align:center;"><a href="${appUrl}/student-dashboard.html" style="display:inline-block;background:#ceff65;color:#080808;text-decoration:none;padding:14px 30px;border-radius:30px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;margin-top:20px;">Go to dashboard</a></p>
            </div>
            <div style="background:#fafafa;padding:20px 30px;text-align:center;border-top:1px solid #eee;font-size:12px;color:#aaa;">Questions? Just reply to this email.</div>
          </div></body></html>`,
      });
    }

    if (cohort.teacher_profiles?.user_id) {
      const { data: authTeacher } = await supabase.auth.admin.getUserById(cohort.teacher_profiles.user_id);
      const teacherEmail = authTeacher?.user?.email;
      if (teacherEmail) {
        await sendResend({
          to: teacherEmail,
          subject: 'New student joined your class',
          html: `<div style="font-family:sans-serif;line-height:1.6;color:#333;max-width:600px;margin:20px auto;padding:20px;border:1px solid #eee;border-radius:8px;">
            <h2>Hello ${escapeHtml(teacherName)},</h2>
            <p>A new student joined your <strong>${escapeHtml(cohort.language)} ${escapeHtml(cohort.level)}</strong> class:</p>
            <ul><li><strong>Name:</strong> ${escapeHtml(student.full_name)}</li><li><strong>Level:</strong> ${escapeHtml(student.level)}</li><li><strong>Goal:</strong> ${escapeHtml(student.goal_track)}</li></ul>
            <p>Seats: ${newCount}/${cohort.max_students}. Open your teacher dashboard to see the roster.</p>
          </div>`,
        });
      }
    }

    return res.status(200).json({
      success: true,
      message: waitlist_id ? 'Your reserved seat is confirmed!' : (wantSwitch ? 'You have switched classes.' : 'You have joined the class!'),
      cohort_id: cohort.id,
      seats: { enrolled: newCount, max: cohort.max_students },
    });
  } catch (err) {
    console.error('[Enroll API] Internal error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
