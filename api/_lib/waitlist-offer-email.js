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
const L = require('./email-i18n.js');


async function sendOfferEmail(supabase, { waitlist_id, cohort_id, student_id }) {
  // 1. Fetch Student Profile and User Email
  const { data: student, error: studentErr } = await supabase
    .from('student_profiles')
    .select('full_name, user_id, ui_lang')
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

  // In the student's dashboard language. Every value is escaped when drawn (names are user-editable).
  const lang = student.ui_lang || 'en';
  const teacherName = cohort.teacher_profiles?.full_name || '';
  const days = Array.isArray(cohort.schedule_days) ? cohort.schedule_days : [];
  const scheduleTime = String(cohort.schedule_time || '').slice(0, 5);
  const timezone = cohort.timezone || 'UTC';
  const cls = L.className(cohort.language, cohort.level, lang);

  const appUrl = process.env.APP_URL || 'https://alimun.com';
  const claimUrl = `${appUrl}/app#/classes/offer/${encodeURIComponent(waitlist_id)}`;

  const content = mail.renderEmail({
    hero: 'place', lang,
    preheader: L.say(lang, 'place.preheader'),
    heading: L.say(lang, 'place.heading'),
    blocks: [
      { p: L.hello(lang, student.full_name) },
      { p: L.html(lang, 'place.body') },
      { facts: [[L.say(lang, 'place.f_class'), cls], [L.say(lang, 'place.f_teacher'), teacherName],
        [L.say(lang, 'place.f_schedule'), days.length ? L.say(lang, 'place.schedule', { days: L.weekdays(days, lang), time: scheduleTime, zone: timezone }) : '']] },
      { button: { label: L.say(lang, 'place.button'), href: claimUrl } },
    ],
    note: L.html(lang, 'place.note'),
    footer: L.html(lang, 'place.footer'),
  });

  const ok = await mail.sendEmail({ to: studentEmail, subject: L.say(lang, 'place.subject', { class: cls }), ...content });
  const response = { ok };
  if (!response.ok) {
    console.error('[Alimun Waitlist] Resend did not accept the offer email');
    return false;
  }
  return true;
}

module.exports = { sendOfferEmail };
