/**
 * The waiting-list offer email ("a place is open for you, claim it within 48 hours"), sent by
 * /api/waitlist/send-offer (the database's automatic offer) and by the admin's offer by hand
 * (/api/admin/teacher?action=waitlist-offer). Not a serverless function: files under api/_lib are helpers.
 *
 * sendOfferEmail(supabase, { waitlist_id, cohort_id, student_id }) resolves true when Resend accepted
 * the email, false when Resend refused it; it throws when the student or class cannot be read.
 * The caller checks RESEND_API_KEY first.
 */

const mail = require('./email.js');


async function sendOfferEmail(supabase, { waitlist_id, cohort_id, student_id }) {
  // 1. Fetch Student Profile and User Email
  const { data: student, error: studentErr } = await supabase
    .from('student_profiles')
    .select('full_name, user_id')
    .eq('id', student_id)
    .single();

  if (studentErr || !student) {
    throw new Error(`Failed to fetch student profile: ${studentErr?.message}`);
  }

  const { data: { user }, error: userErr } = await supabase.auth.admin.getUserById(student.user_id);
  if (userErr || !user) {
    throw new Error(`Failed to fetch auth user: ${userErr?.message}`);
  }

  const studentEmail = user.email;

  // 2. Fetch Cohort and Teacher Details
  const { data: cohort, error: cohortErr } = await supabase
    .from('cohorts')
    .select(`
      language,
      level,
      schedule_days,
      schedule_time,
      timezone,
      teacher_profiles (
        full_name
      )
    `)
    .eq('id', cohort_id)
    .single();

  if (cohortErr || !cohort) {
    throw new Error(`Failed to fetch cohort details: ${cohortErr?.message}`);
  }

  // Every value below is escaped: teacher and student names are user-editable.
  const teacherName = cohort.teacher_profiles?.full_name || 'your teacher';
  const scheduleDays = (Array.isArray(cohort.schedule_days) ? cohort.schedule_days : []).join(', ');
  const scheduleTime = String(cohort.schedule_time || '').slice(0, 5);
  const timezone = cohort.timezone || 'UTC';
  const cohortLabel = `${cohort.language || ''} ${cohort.level || ''}`.trim();

  const appUrl = process.env.APP_URL || 'https://alimun.com';
  const claimUrl = `${appUrl}/app#/classes/offer/${encodeURIComponent(waitlist_id)}`;

  const content = mail.renderEmail({
    preheader: 'A place has opened in the class you were waiting for. It is held for you for 48 hours.',
    heading: 'A place is open for you',
    blocks: [
      { p: `Hello ${mail.esc(student.full_name)},` },
      { p: 'A place has opened in the class you were waiting for. You were first on the waiting list, so it is held for you for the next <strong>48 hours</strong>.' },
      { facts: [['Class', cohortLabel], ['Teacher', teacherName], ['Schedule', scheduleDays ? `${scheduleDays} at ${scheduleTime} (${timezone})` : '']] },
      { button: { label: 'Claim your place', href: claimUrl } },
    ],
    note: 'If you do not claim it within 48 hours, the place goes to the next person on the waiting list.',
    footer: 'You received this email because you joined the waiting list for this class on Alimun.',
  });

  const ok = await mail.sendEmail({
    to: studentEmail,
    subject: `A place is open in your ${cohort.language || ''} class`.replace(/\s+/g, ' '),
    ...content,
  });
  const response = { ok };
  if (!response.ok) {
    console.error('[Alimun Waitlist] Resend did not accept the offer email');
    return false;
  }
  return true;
}

module.exports = { sendOfferEmail };
