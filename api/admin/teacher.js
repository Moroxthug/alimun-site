/**
 * ============================================================
 *  ALIMUN — /api/admin/teacher
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Unified admin teacher handler. Responds to:
 *    ?action=approve  (GET) — approve a teacher profile
 *    ?action=reject   (GET) — reject a teacher profile
 *    ?action=notify   (POST) — send admin notification email
 *
 *  Legacy paths (via Vercel rewrites):
 *    /api/admin/approve-teacher → ?action=approve
 *    /api/admin/reject-teacher  → ?action=reject
 *    /api/admin/notify-teacher-application → ?action=notify
 * ============================================================
 */

const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');

// ── Shared helpers ──────────────────────────────────────────

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

async function sendEmail(to, subject, html) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.warn('[Alimun Admin] RESEND_API_KEY not configured. Skipping email.');
    return;
  }
  const emailFrom = process.env.EMAIL_FROM_ADDRESS || 'Alimun <no-reply@alimun.com>';
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendKey}`,
        'Content-Type':  'application/json'
      },
      body: JSON.stringify({ from: emailFrom, to, subject, html })
    });
    console.log(`[Alimun Admin] Email sent to ${to}`);
  } catch (err) {
    console.error('[Alimun Admin] Failed to send email:', err);
  }
}

// ── action=approve ──────────────────────────────────────────

async function handleApprove(req, res) {
  const { token, teacher_id } = req.query || {};

  if (!token || !teacher_id) {
    return renderErrorPage(res, 'Missing token or teacher_id parameters.');
  }

  const adminSecret = process.env.ADMIN_SECRET;
  if (!adminSecret) {
    console.error('[Alimun Approve] ADMIN_SECRET is not configured.');
    return renderErrorPage(res, 'Server environment error: Admin secret is missing.');
  }

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

  const { error: updateErr } = await supabase
    .from('teacher_profiles')
    .update({ status: 'approved', tier_level: 'focused' })
    .eq('id', teacher_id);

  if (updateErr) {
    console.error('[Alimun Approve] Database update failed:', updateErr);
    return renderErrorPage(res, 'Failed to update teacher profile status.');
  }

  let teacherEmail = null;
  try {
    const { data: authUser, error: authErr } = await supabase.auth.admin.getUserById(profile.user_id);
    if (!authErr && authUser?.user) {
      teacherEmail = authUser.user.email;
    }
  } catch (authEx) {
    console.warn('[Alimun Approve] Failed to fetch teacher auth email:', authEx);
  }

  if (teacherEmail) {
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
    await sendEmail(teacherEmail, `Welcome to Alimun, ${profile.full_name}! You're approved.`, welcomeHtml);
  }

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
}

// ── action=reject ───────────────────────────────────────────

async function handleReject(req, res) {
  const { token, teacher_id } = req.query || {};

  if (!token || !teacher_id) {
    return renderErrorPage(res, 'Missing token or teacher_id parameters.');
  }

  const adminSecret = process.env.ADMIN_SECRET;
  if (!adminSecret) {
    console.error('[Alimun Reject] ADMIN_SECRET is not configured.');
    return renderErrorPage(res, 'Server environment error: Admin secret is missing.');
  }

  const expectedToken = crypto
    .createHmac('sha256', adminSecret)
    .update(teacher_id)
    .digest('hex');

  if (token !== expectedToken) {
    console.warn(`[Alimun Reject] Invalid token signature for teacher_id: ${teacher_id}`);
    return renderErrorPage(res, 'Unauthorized action: Token signature verification failed.');
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return renderErrorPage(res, 'Server database connection error.');
  }

  const { data: profile, error: fetchErr } = await supabase
    .from('teacher_profiles')
    .select('full_name, user_id, status')
    .eq('id', teacher_id)
    .single();

  if (fetchErr || !profile) {
    console.error('[Alimun Reject] Error fetching teacher profile:', fetchErr);
    return renderErrorPage(res, 'Teacher profile not found.');
  }

  if (profile.status === 'suspended') {
    return res.status(200).send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Suspended — Alimun Admin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap" rel="stylesheet">
        <style>
          :root { --b: #080808; --body: 'Satoshi', sans-serif; }
          body { font-family: var(--body); background: #f0efe9; min-height: 100vh; display: flex; align-items: center; justify-content: center; margin: 0; padding: 2rem; }
          .card { background: #fff; border-radius: 1.5rem; box-shadow: 0 8px 40px rgba(0,0,0,.08); padding: 2.5rem; text-align: center; max-width: 440px; width: 100%; }
          .ico { width: 56px; height: 56px; border-radius: 50%; background: #eaeaea; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.375rem; }
          .ico svg { width: 24px; height: 24px; stroke: var(--b); fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
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
          <h1>Already Suspended</h1>
          <p>Teacher <strong>${profile.full_name}</strong> has already been marked as suspended/rejected.</p>
          <a href="https://alimun.com" class="btn">Back to Alimun</a>
        </div>
      </body>
      </html>
    `);
  }

  const { error: updateErr } = await supabase
    .from('teacher_profiles')
    .update({ status: 'suspended' })
    .eq('id', teacher_id);

  if (updateErr) {
    console.error('[Alimun Reject] Database update failed:', updateErr);
    return renderErrorPage(res, 'Failed to update teacher profile status.');
  }

  let teacherEmail = null;
  try {
    const { data: authUser, error: authErr } = await supabase.auth.admin.getUserById(profile.user_id);
    if (!authErr && authUser?.user) {
      teacherEmail = authUser.user.email;
    }
  } catch (authEx) {
    console.warn('[Alimun Reject] Failed to fetch teacher auth email:', authEx);
  }

  if (teacherEmail) {
    const rejectHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Alimun Application Update</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f6f6f6; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { background: #080808; padding: 30px; text-align: center; }
          .header h1 { color: #ceff65; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; }
          .content { padding: 40px 30px; color: #333333; line-height: 1.6; }
          .footer { background: #fafafa; padding: 20px 30px; text-align: center; border-top: 1px solid #eeeeee; font-size: 12px; color: #aaaaaa; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Alimun</h1>
          </div>
          <div class="content">
            <p>Dear ${profile.full_name},</p>
            <p>Thank you for applying to Alimun. After review, we're unable to approve your application at this time.</p>
            <p>We appreciate your interest in our platform and wish you all the best in your teaching endeavors.</p>
            <p>Warm regards,<br/>The Alimun Team</p>
          </div>
          <div class="footer">
            This email was sent to ${teacherEmail}.
          </div>
        </div>
      </body>
      </html>
    `;
    await sendEmail(teacherEmail, 'Teacher Application Update — Alimun', rejectHtml);
  }

  return res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Rejected — Alimun Admin</title>
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
        <h1>Teacher Rejected</h1>
        <p>Teacher <strong>${profile.full_name}</strong> has been rejected and marked as suspended. A notification email has been sent to <strong>${teacherEmail || 'their address'}</strong>.</p>
        <a href="https://alimun.com" class="btn">Back to Alimun</a>
      </div>
    </body>
    </html>
  `);
}

// ── action=notify ───────────────────────────────────────────

async function handleNotify(req, res) {
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

  const signedToken = crypto
    .createHmac('sha256', adminSecret)
    .update(teacher_id)
    .digest('hex');

  const appUrl = process.env.APP_URL || 'https://alimun.com';
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@alimun.com';

  const approveUrl = `${appUrl}/api/admin/approve-teacher?token=${signedToken}&teacher_id=${teacher_id}`;
  const rejectUrl = `${appUrl}/api/admin/reject-teacher?token=${signedToken}&teacher_id=${teacher_id}`;

  const langList = Array.isArray(languages) ? languages.join(', ') : (languages || 'None');

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
              <div class="field"><strong>Languages</strong><span>${langList}</span></div>
              <div class="field"><strong>Experience</strong><span>${experience_years} years</span></div>
              <div class="field"><strong>Specialty</strong><span>${specialty}</span></div>
              <div class="field" style="margin-bottom: 0;"><strong>Biography</strong><div class="bio">${bio}</div></div>
            </div>
            <p style="font-size: 14px; color: #666; margin-bottom: 24px;">Please review the application and make a decision using the buttons below.</p>
            <table width="100%" cellspacing="0" cellpadding="0" style="margin-top: 20px;">
              <tr>
                <td align="center" width="48%"><a href="${approveUrl}" class="btn btn-approve" style="display: block;">Approve Application</a></td>
                <td width="4%"></td>
                <td align="center" width="48%"><a href="${rejectUrl}" class="btn btn-reject" style="display: block;">Reject Application</a></td>
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

  try {
    const emailFrom = process.env.EMAIL_FROM_ADDRESS || 'Alimun <no-reply@alimun.com>';
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
}

// ── Main router ─────────────────────────────────────────────

module.exports = async function handler(req, res) {
  const action = req.query.action || '';

  switch (action) {
    case 'approve':
      return handleApprove(req, res);
    case 'reject':
      return handleReject(req, res);
    case 'notify':
      return handleNotify(req, res);
    default:
      return res.status(400).json({ error: `Unknown admin action: ${action}` });
  }
};
