/**
 * ============================================================
 *  ALIMUN — GET /api/admin/approve-teacher
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Approves a teacher profile:
 *  - Verifies signed token using HMAC-SHA256 of teacher_id + ADMIN_SECRET.
 *  - Updates status='approved' and tier_level='focused' in teacher_profiles.
 *  - Sends a welcome email to the teacher via Resend.
 *  - Renders a beautiful success HTML page.
 * ============================================================
 */

const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.warn('[Alimun] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
    return null;
  }
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

function renderErrorPage(res, message) {
  return res.status(400).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Error — Alimun Admin</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap" rel="stylesheet">
      <style>
        :root { --b: #080808; --body: 'Satoshi', sans-serif; }
        body { font-family: var(--body); background: #f0efe9; min-height: 100vh; display: flex; align-items: center; justify-content: center; margin: 0; padding: 2rem; }
        .card { background: #fff; border-radius: 1.5rem; box-shadow: 0 8px 40px rgba(0,0,0,.08); padding: 2.5rem; text-align: center; max-width: 440px; width: 100%; }
        .ico { width: 56px; height: 56px; border-radius: 50%; background: #fff0f0; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.375rem; border: 1.5px solid #fca5a5; }
        .ico svg { width: 24px; height: 24px; stroke: #dc2626; fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
        h1 { font-size: 1.5rem; font-weight: 900; margin-bottom: 0.5rem; color: var(--b); text-transform: uppercase; }
        p { font-size: 0.875rem; color: #666; line-height: 1.6; margin-bottom: 1.875rem; }
        .btn { display: inline-flex; align-items: center; justify-content: center; background: var(--b); color: #fff; font-weight: 700; font-size: .78rem; text-transform: uppercase; letter-spacing: .055em; border: none; border-radius: 5rem; padding: .75rem 1.5rem; cursor: pointer; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="ico">
          <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
        <h1>Action Failed</h1>
        <p>${message}</p>
        <a href="https://alimun.com" class="btn">Back to Alimun</a>
      </div>
    </body>
    </html>
  `);
}

module.exports = async function (req, res) {
  // Can be GET or POST depending on how the admin clicks it from email
  const { token, teacher_id } = req.query || {};

  if (!token || !teacher_id) {
    return renderErrorPage(res, 'Missing token or teacher_id parameters.');
  }

  const adminSecret = process.env.ADMIN_SECRET;
  if (!adminSecret) {
    console.error('[Alimun Approve] ADMIN_SECRET is not configured.');
    return renderErrorPage(res, 'Server environment error: Admin secret is missing.');
  }

  // 1. Verify token
  const expectedToken = crypto
    .createHmac('sha256', adminSecret)
    .update(teacher_id)
    .digest('hex');

  if (token !== expectedToken) {
    console.warn(`[Alimun Approve] Invalid token signature for teacher_id: ${teacher_id}`);
    return renderErrorPage(res, 'Unauthorized action: Token signature verification failed.');
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return renderErrorPage(res, 'Server database connection error.');
  }

  // 2. Fetch the teacher profile to get name and user_id
  const { data: profile, error: fetchErr } = await supabase
    .from('teacher_profiles')
    .select('full_name, user_id, status')
    .eq('id', teacher_id)
    .single();

  if (fetchErr || !profile) {
    console.error('[Alimun Approve] Error fetching teacher profile:', fetchErr);
    return renderErrorPage(res, 'Teacher profile not found.');
  }

  if (profile.status === 'approved') {
    return res.status(200).send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Approved — Alimun Admin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap" rel="stylesheet">
        <style>
          :root { --g: #ceff65; --b: #080808; --body: 'Satoshi', sans-serif; }
          body { font-family: var(--body); background: #f0efe9; min-height: 100vh; display: flex; align-items: center; justify-content: center; margin: 0; padding: 2rem; }
          .card { background: #fff; border-radius: 1.5rem; box-shadow: 0 8px 40px rgba(0,0,0,.08); padding: 2.5rem; text-align: center; max-width: 440px; width: 100%; }
          .ico { width: 56px; height: 56px; border-radius: 50%; background: var(--g); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.375rem; }
          .ico svg { width: 24px; height: 24px; stroke: var(--b); fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
          h1 { font-size: 1.5rem; font-weight: 900; margin-bottom: 0.5rem; color: var(--b); text-transform: uppercase; }
          p { font-size: 0.875rem; color: #666; line-height: 1.6; margin-bottom: 1.875rem; }
          .btn { display: inline-flex; align-items: center; justify-content: center; background: var(--b); color: #fff; font-weight: 700; font-size: .78rem; text-transform: uppercase; letter-spacing: .055em; border: none; border-radius: 5rem; padding: .75rem 1.5rem; cursor: pointer; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="ico">
            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h1>Already Approved</h1>
          <p>Teacher <strong>${profile.full_name}</strong> is already approved.</p>
          <a href="https://alimun.com" class="btn">Back to Alimun</a>
        </div>
      </body>
      </html>
    `);
  }

  // 3. Update status='approved' and tier_level='focused' in teacher_profiles
  const { error: updateErr } = await supabase
    .from('teacher_profiles')
    .update({ status: 'approved', tier_level: 'focused' })
    .eq('id', teacher_id);

  if (updateErr) {
    console.error('[Alimun Approve] Database update failed:', updateErr);
    return renderErrorPage(res, 'Failed to update teacher profile status.');
  }

  // 4. Retrieve teacher's email from auth.users
  let teacherEmail = null;
  try {
    const { data: authUser, error: authErr } = await supabase.auth.admin.getUserById(profile.user_id);
    if (!authErr && authUser?.user) {
      teacherEmail = authUser.user.email;
    }
  } catch (authEx) {
    console.warn('[Alimun Approve] Failed to fetch teacher auth email:', authEx);
  }

  // 5. Send welcome email to teacher via Resend
  if (teacherEmail) {
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const emailFrom = process.env.EMAIL_FROM_ADDRESS || 'Alimun <no-reply@alimun.com>';
      const subject = `Welcome to Alimun, ${profile.full_name}! You're approved.`;
      
      const welcomeHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Welcome to Alimun</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f6f6f6; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
            .header { background: #080808; padding: 30px; text-align: center; }
            .header h1 { color: #ceff65; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; }
            .content { padding: 40px 30px; color: #333333; line-height: 1.6; }
            .btn { display: inline-block; background-color: #ceff65; color: #080808; text-decoration: none; padding: 14px 30px; border-radius: 30px; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 20px; }
            .footer { background: #fafafa; padding: 20px 30px; text-align: center; border-top: 1px solid #eeeeee; font-size: 12px; color: #aaaaaa; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Alimun</h1>
            </div>
            <div class="content">
              <h2 style="color: #080808; margin-top: 0;">Congratulations, ${profile.full_name}!</h2>
              <p>Your application to join the Alimun teacher network has been approved.</p>
              <p>Your account is ready. You can now log in to the dashboard to set up your cohorts and welcome your first students.</p>
              <p>We've started you on the <strong>Focused</strong> tier level by default.</p>
              <center>
                <a href="https://alimun.com/signin.html" class="btn">Access Dashboard</a>
              </center>
            </div>
            <div class="footer">
              If you have any questions, reply to this email or contact teacher support.
            </div>
          </div>
        </body>
        </html>
      `;

      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendKey}`,
            'Content-Type':  'application/json'
          },
          body: JSON.stringify({
            from:    emailFrom,
            to:      teacherEmail,
            subject: subject,
            html:    welcomeHtml
          })
        });
        console.log(`[Alimun Approve] Welcome email successfully sent to ${teacherEmail}`);
      } catch (emailErr) {
        console.error('[Alimun Approve] Failed to send welcome email:', emailErr);
      }
    } else {
      console.warn('[Alimun Approve] RESEND_API_KEY not configured. Skipping welcome email.');
    }
  } else {
    console.error(`[Alimun Approve] No email found for teacher_id: ${teacher_id}`);
  }

  // 6. Return 200 with success HTML page
  return res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Approved — Alimun Admin</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap" rel="stylesheet">
      <style>
        :root { --g: #ceff65; --b: #080808; --body: 'Satoshi', sans-serif; }
        body { font-family: var(--body); background: #f0efe9; min-height: 100vh; display: flex; align-items: center; justify-content: center; margin: 0; padding: 2rem; }
        .card { background: #fff; border-radius: 1.5rem; box-shadow: 0 8px 40px rgba(0,0,0,.08); padding: 2.5rem; text-align: center; max-width: 440px; width: 100%; }
        .ico { width: 56px; height: 56px; border-radius: 50%; background: var(--g); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.375rem; }
        .ico svg { width: 24px; height: 24px; stroke: var(--b); fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
        h1 { font-size: 1.5rem; font-weight: 900; margin-bottom: 0.5rem; color: var(--b); text-transform: uppercase; }
        p { font-size: 0.875rem; color: #666; line-height: 1.6; margin-bottom: 1.875rem; }
        .btn { display: inline-flex; align-items: center; justify-content: center; background: var(--b); color: #fff; font-weight: 700; font-size: .78rem; text-transform: uppercase; letter-spacing: .055em; border: none; border-radius: 5rem; padding: .75rem 1.5rem; cursor: pointer; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="ico">
          <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h1>Teacher Approved</h1>
        <p>Teacher <strong>${profile.full_name}</strong> is now approved. A confirmation welcome email has been sent to <strong>${teacherEmail || 'their address'}</strong>.</p>
        <a href="https://alimun.com" class="btn">Back to Alimun</a>
      </div>
    </body>
    </html>
  `);
};
