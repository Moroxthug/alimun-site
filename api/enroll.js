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
 *    - 1:1 bookings                { action: 'oto-status' | 'oto-book' | 'oto-cancel' | 'oto-note' }
 *
 *  Server-side checks (never trust the client):
 *    active subscription, tier allowance, language match,
 *    cohort open (or a valid, unexpired waitlist offer),
 *    atomic capacity via increment_enrollment RPC.
 *
 *  Direct client writes to `enrollments` / `increment_enrollment`
 *  are revoked by supabase/migrations/202610141800_phase1_db_lockdown.sql
 *  (do NOT re-run the older 2026-09-security-hardening.sql, see SQL-02).
 *  One active enrollment per student is enforced by a partial unique
 *  index on enrollments(student_id) where status = 'active' (APIP-05).
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');
const { cancelActiveEnrollments, takeSeat } = require('./_lib/seat.js');
const oneOnOne = require('./_lib/one-on-one.js');
const { planActive } = require('./_lib/plan.js');
const mail = require('./_lib/email.js');
const L = require('./_lib/email-i18n.js');

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


async function sendResend({ to, subject, content }) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('[Enroll API] RESEND_API_KEY not configured. Skipping email.');
    return;
  }
  await mail.sendEmail({ to, subject, ...content });
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

  // 1:1 bookings (follow-ups and paid credits): api/_lib/one-on-one.js
  const OTO = { 'oto-status': oneOnOne.status, 'oto-book': oneOnOne.book, 'oto-cancel': oneOnOne.cancel, 'oto-note': oneOnOne.note };
  if (OTO[action]) {
    try { return await OTO[action](req, res, { supabase, user, body }); }
    catch (err) { console.error('[Enroll API] 1:1 error:', err); return res.status(500).json({ error: 'server_error', message: 'Please try again.' }); }
  }
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
        // Also clear a stray active enrollment the profile does not point to.
        const { data: stray } = await supabase
          .from('enrollments').select('id').eq('student_id', student.id).eq('status', 'active');
        if (!stray || stray.length === 0) {
          return res.status(409).json({ error: 'not_enrolled', message: 'You are not in a class.' });
        }
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
      .select('*, teacher_profiles ( id, full_name, user_id, ui_lang )')
      .eq('id', cohort_id)
      .maybeSingle();
    if (cohortError || !cohort) {
      return res.status(404).json({ error: 'Cohort not found' });
    }

    // Rooms of the new price list (packs, open classes, help classes) are joined by buying them, never here
    if (cohort.product_key) {
      return res.status(409).json({ error: 'room_by_purchase', message: 'Choose this room from Plans and prices.' });
    }

    // ── Pre-enrollment checks ──────────────────────────────
    if (!planActive(student)) {
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

    // ── Enrollment transaction (api/_lib/seat.js) ──────────
    const seat = await takeSeat(supabase, {
      studentId: student.id,
      cohortId: cohort.id,
      previousCohortId: student.enrolled_cohort_id,
      replaceCurrent: wantSwitch || !!waitlist_id,
    });
    if (!seat.ok) {
      return res.status(seat.status).json(seat.message ? { error: seat.error, message: seat.message } : { error: seat.error });
    }
    const newCount = seat.newCount;

    if (offer) {
      await supabase.from('cohort_waitlist').delete().eq('id', offer.id);
    }

    // ── Notifications ──────────────────────────────────────
    const appUrl = process.env.APP_URL || 'https://alimun.com';
    const teacherName = cohort.teacher_profiles?.full_name || '';

    const { data: nextSession } = await supabase
      .from('sessions')
      .select('scheduled_at')
      .eq('cohort_id', cohort.id)
      .eq('status', 'scheduled')
      .gt('scheduled_at', new Date().toISOString())
      .order('scheduled_at', { ascending: true })
      .limit(1)
      .maybeSingle();

    // Each email in its reader's dashboard language; the student's time in their own zone when they set one.
    const sLang = student.ui_lang || 'en';
    const sZone = student.timezone && student.timezone !== 'UTC' ? student.timezone : (cohort.timezone || 'UTC');
    const whenStr = nextSession ? L.when(nextSession.scheduled_at, sZone, sLang) : L.say(sLang, 'enrolled.soon');
    const sClass = L.className(cohort.language, cohort.level, sLang);

    if (user.email) {
      await sendResend({
        to: user.email,
        subject: L.say(sLang, 'enrolled.subject', { class: sClass, teacher: teacherName }),
        content: mail.renderEmail({
          hero: mail.heroForLanguage(cohort.language), lang: sLang,
          preheader: L.say(sLang, 'enrolled.preheader', { when: whenStr }),
          heading: L.say(sLang, 'enrolled.heading'),
          blocks: [
            { p: L.html(sLang, 'enrolled.welcome', { name: String(student.full_name || '').split(/\s+/)[0] }) },
            { p: L.html(sLang, 'enrolled.body', { class: sClass, teacher: teacherName }) },
            { facts: [[L.say(sLang, 'enrolled.f_class'), sClass], [L.say(sLang, 'enrolled.f_teacher'), teacherName], [L.say(sLang, 'enrolled.f_next'), whenStr]] },
            { p: L.html(sLang, 'enrolled.opens') },
            { button: { label: L.say(sLang, 'enrolled.button'), href: `${appUrl}/app#/classes` } },
          ],
          note: L.html(sLang, 'common.questions'),
          footer: L.html(sLang, 'enrolled.footer'),
        }),
      });
    }

    if (cohort.teacher_profiles?.user_id) {
      const { data: authTeacher } = await supabase.auth.admin.getUserById(cohort.teacher_profiles.user_id);
      const teacherEmail = authTeacher?.user?.email;
      if (teacherEmail) {
        const tLang = cohort.teacher_profiles.ui_lang || 'en';
        const tClass = L.className(cohort.language, cohort.level, tLang);
        await sendResend({
          to: teacherEmail,
          subject: L.say(tLang, 'student_joined.subject'),
          content: mail.renderEmail({
            hero: mail.heroForLanguage(cohort.language), lang: tLang,
            preheader: L.say(tLang, 'student_joined.preheader', { name: student.full_name, class: tClass }),
            heading: L.say(tLang, 'student_joined.heading'),
            blocks: [
              { p: L.hello(tLang, teacherName) },
              { p: L.html(tLang, 'student_joined.body', { class: tClass }) },
              { facts: [[L.say(tLang, 'student_joined.f_name'), student.full_name], [L.say(tLang, 'student_joined.f_level'), student.level], [L.say(tLang, 'student_joined.f_goal'), student.goal_track],
                [L.say(tLang, 'student_joined.f_seats'), L.say(tLang, 'student_joined.seats', { n: newCount, max: cohort.max_students })]] },
              { button: { label: L.say(tLang, 'student_joined.button'), href: `${appUrl}/app/teach` } },
            ],
            footer: L.html(tLang, 'student_joined.footer'),
          }),
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
