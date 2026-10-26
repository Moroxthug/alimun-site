/**
 * The waiting-list offer email ("a place is open for you, claim it within 48 hours"), sent by
 * /api/waitlist/send-offer (the database's automatic offer) and by the admin's offer by hand
 * (/api/admin/teacher?action=waitlist-offer). Not a serverless function: files under api/_lib are helpers.
 *
 * sendOfferEmail(supabase, { waitlist_id, cohort_id, student_id }) resolves true when Resend accepted
 * the email, false when Resend refused it; it throws when the student or class cannot be read.
 * The caller checks RESEND_API_KEY first.
 */

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

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
  const teacherName = escapeHtml(cohort.teacher_profiles?.full_name || 'your teacher');
  const scheduleDays = escapeHtml((Array.isArray(cohort.schedule_days) ? cohort.schedule_days : []).join(', '));
  const scheduleTime = escapeHtml(String(cohort.schedule_time || '').slice(0, 5));
  const timezone = escapeHtml(cohort.timezone || 'UTC');
  const studentName = escapeHtml(student.full_name);
  const cohortLabel = escapeHtml(`${cohort.language || ''} ${cohort.level || ''}`.trim());

  const appUrl = process.env.APP_URL || 'https://alimun.com';
  const emailFrom = process.env.EMAIL_FROM_ADDRESS || 'Alimun <no-reply@alimun.com>';
  const claimUrl = `${appUrl}/app#/classes/offer/${encodeURIComponent(waitlist_id)}`;

  // 3. Compile Alimun Branded Responsive HTML Email
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>A spot has opened up at Alimun!</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f6f6f6; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
        .wrapper { background-color: #f6f6f6; width: 100%; padding: 40px 0; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .header { background: #080808; padding: 30px; text-align: center; }
        .header h1 { color: #ceff65; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; }
        .content { padding: 40px 30px; color: #333333; line-height: 1.6; }
        .highlight-card { background: #f9f9fb; border: 1px solid #eef0f3; border-radius: 12px; padding: 24px; margin-bottom: 30px; }
        .spot-title { font-size: 20px; font-weight: 700; margin: 0 0 16px 0; color: #080808; border-bottom: 2px solid #ceff65; padding-bottom: 8px; display: inline-block; }
        .field { margin-bottom: 12px; }
        .field strong { color: #555555; text-transform: uppercase; font-size: 11px; letter-spacing: 0.08em; display: block; margin-bottom: 4px; }
        .field span { font-size: 15px; color: #080808; font-weight: 500; }
        .action-btn { display: block; text-align: center; text-decoration: none; padding: 14px 20px; background-color: #ceff65; color: #080808; border-radius: 30px; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 30px; border: 1px solid #ceff65; }
        .action-btn:hover { background-color: #b8eb4c; }
        .warning-text { font-size: 12px; color: #ea4335; font-weight: 700; text-align: center; margin-top: 15px; }
        .footer { background: #fafafa; padding: 20px 30px; text-align: center; border-top: 1px solid #eeeeee; font-size: 12px; color: #aaaaaa; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <div class="header">
            <h1>Alimun</h1>
          </div>
          <div class="content">
            <p>Hi ${studentName},</p>
            <p>Good news! A spot has opened up in your desired language class cohort. As you were first on our waitlist, this spot is reserved for you for the next <strong>48 hours</strong>.</p>
            
            <div class="highlight-card">
              <div class="spot-title">Class Cohort Details</div>
              
              <div class="field">
                <strong>Language & Level</strong>
                <span>${cohortLabel}</span>
              </div>
              
              <div class="field">
                <strong>Teacher</strong>
                <span>${teacherName}</span>
              </div>
              
              <div class="field" style="margin-bottom: 0;">
                <strong>Schedule</strong>
                <span>${scheduleDays} @ ${scheduleTime} (${timezone})</span>
              </div>
            </div>

            <p>To claim your spot and complete your enrollment, please click the button below to sign in and join the cohort:</p>

            <a href="${escapeHtml(claimUrl)}" class="action-btn">Claim Your Spot Now</a>
            
            <p class="warning-text">Warning: If you do not claim this spot within 48 hours, it will automatically expire and be offered to the next student on the waitlist.</p>
          </div>
          <div class="footer">
            This is an automated notification from Alimun Platform.
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  // 4. Send email via Resend API
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type':  'application/json'
    },
    body: JSON.stringify({
      from:    emailFrom,
      to:      studentEmail,
      subject: `Action Required: A spot is open in your Alimun ${cohort.language || ''} class!`.replace(/[\r\n<>]/g, ' '),
      html:    htmlContent
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    console.error('[Alimun Waitlist] Resend API error:', response.status, errText.slice(0, 500));
    return false;
  }
  return true;
}

module.exports = { sendOfferEmail };
