/**
 * ============================================================
 *  ALIMUN — POST /api/admin/notify-teacher-application
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Sends an email to ADMIN_EMAIL via Resend when a teacher
 *  submits their application. Includes Approve/Reject links
 *  signed with HMAC-SHA256 of teacher_id + ADMIN_SECRET.
 * ============================================================
 */

const crypto = require('crypto');

module.exports = async function (req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { teacher_id, full_name, languages, experience_years, specialty, bio } = req.body || {};

  if (!teacher_id || !full_name) {
    return res.status(400).json({ error: 'Missing required teacher profile fields' });
  }

  const adminSecret = process.env.ADMIN_SECRET;
  if (!adminSecret) {
    console.error('[Alimun Admin Notification] ADMIN_SECRET is not configured.');
    return res.status(500).json({ error: 'Admin secret is not configured' });
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.error('[Alimun Admin Notification] RESEND_API_KEY is not configured.');
    return res.status(500).json({ error: 'Resend API key is not configured' });
  }

  // 1. Generate signed HMAC-SHA256 token of teacher_id using ADMIN_SECRET
  const signedToken = crypto
    .createHmac('sha256', adminSecret)
    .update(teacher_id)
    .digest('hex');

  const appUrl = process.env.APP_URL || 'https://alimun.com';
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@alimun.com';
  const emailFrom = process.env.EMAIL_FROM_ADDRESS || 'Alimun <no-reply@alimun.com>';

  const approveUrl = `${appUrl}/api/admin/approve-teacher?token=${signedToken}&teacher_id=${teacher_id}`;
  const rejectUrl = `${appUrl}/api/admin/reject-teacher?token=${signedToken}&teacher_id=${teacher_id}`;

  const langList = Array.isArray(languages) ? languages.join(', ') : (languages || 'None');

  // 2. Beautiful premium responsive HTML email
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Teacher Application</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f6f6f6; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
        .wrapper { background-color: #f6f6f6; width: 100%; padding: 40px 0; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .header { background: #080808; padding: 30px; text-align: center; }
        .header h1 { color: #ceff65; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; }
        .content { padding: 40px 30px; color: #333333; line-height: 1.6; }
        .candidate-card { background: #f9f9fb; border: 1px solid #eef0f3; border-radius: 12px; padding: 24px; margin-bottom: 30px; }
        .candidate-title { font-size: 20px; font-weight: 700; margin: 0 0 16px 0; color: #080808; border-bottom: 2px solid #ceff65; padding-bottom: 8px; display: inline-block; }
        .field { margin-bottom: 12px; }
        .field strong { color: #555555; text-transform: uppercase; font-size: 11px; letter-spacing: 0.08em; display: block; margin-bottom: 4px; }
        .field span { font-size: 15px; color: #080808; font-weight: 500; }
        .bio { white-space: pre-wrap; font-style: italic; color: #666; background: #fff; padding: 12px; border-left: 3px solid #080808; border-radius: 4px; margin-top: 6px; }
        .actions { display: flex; gap: 16px; margin-top: 30px; }
        .btn { flex: 1; text-align: center; text-decoration: none; padding: 14px 20px; border-radius: 30px; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; display: inline-block; }
        .btn-approve { background-color: #ceff65; color: #080808; border: 1px solid #ceff65; }
        .btn-approve:hover { background-color: #b8eb4c; }
        .btn-reject { background-color: #ffffff; color: #ea4335; border: 1px solid #ea4335; }
        .btn-reject:hover { background-color: #fff5f5; }
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
            <div class="candidate-card">
              <div class="candidate-title">${full_name}</div>
              
              <div class="field">
                <strong>Languages</strong>
                <span>${langList}</span>
              </div>
              
              <div class="field">
                <strong>Experience</strong>
                <span>${experience_years} years</span>
              </div>
              
              <div class="field">
                <strong>Specialty</strong>
                <span>${specialty}</span>
              </div>
              
              <div class="field" style="margin-bottom: 0;">
                <strong>Biography</strong>
                <div class="bio">${bio}</div>
              </div>
            </div>

            <p style="font-size: 14px; color: #666; margin-bottom: 24px;">Please review the application and make a decision using the buttons below.</p>

            <table width="100%" cellspacing="0" cellpadding="0" style="margin-top: 20px;">
              <tr>
                <td align="center" width="48%">
                  <a href="${approveUrl}" class="btn btn-approve" style="display: block;">Approve Application</a>
                </td>
                <td width="4%"></td>
                <td align="center" width="48%">
                  <a href="${rejectUrl}" class="btn btn-reject" style="display: block;">Reject Application</a>
                </td>
              </tr>
            </table>
          </div>
          <div class="footer">
            This is an automated notification from Alimun Platform.
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  // 3. Send email via Resend REST API
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendKey}`,
        'Content-Type':  'application/json'
      },
      body: JSON.stringify({
        from:    emailFrom,
        to:      adminEmail,
        subject: `New teacher application — ${full_name}`,
        html:    htmlContent
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('[Alimun Admin Notification] Resend API error:', errText);
      return res.status(502).json({ error: 'Failed to send notification email', details: errText });
    }

    console.log(`[Alimun Admin Notification] Sent application email for ${full_name} to ${adminEmail}`);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[Alimun Admin Notification] Error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
