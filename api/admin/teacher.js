/**
 * ============================================================
 *  ALIMUN — /api/admin/teacher
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Unified admin teacher handler. Responds to:
 *    ?action=approve  (GET shows a confirm page, POST approves a pending teacher)
 *    ?action=reject   (GET shows a confirm page, POST rejects a pending teacher)
 *                     Email links are HMAC-signed and act only while the
 *                     profile is still 'pending' (single use).
 *    ?action=notify   (POST) — send admin notification email
 *    ?action=set-status (POST, admin JWT) — approve/reject/suspend/reinstate
 *                       from the admin dashboard, optionally emailing the teacher
 *    ?action=invite (POST, admin JWT) — invite a student or teacher by email: the
 *                     account is created with its role, a teacher also gets an
 *                     approved profile, and a sign-in link is emailed
 *    ?action=emails (POST, admin JWT) — the sign-in email of up to 500 accounts
 *                     (they live in Supabase Auth, which the browser cannot read)
 *    ?action=session-update | enrollment-move | enrollment-remove
 *                       (POST, admin JWT) — class operations, see api/_lib/admin-ops.js
 *
 *  Legacy paths (via Vercel rewrites):
 *    /api/admin/approve-teacher → ?action=approve
 *    /api/admin/reject-teacher  → ?action=reject
 *    /api/admin/notify-teacher-application → ?action=notify
 * ============================================================
 */

const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');
const adminOps = require('../_lib/admin-ops.js');

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

const TOKEN_TTL_SECONDS = 7 * 24 * 60 * 60; // approve/reject links valid for 7 days
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/**
 * Key for the emailed approve/reject links. APPROVAL_LINK_SECRET keeps this key
 * out of the database; ADMIN_SECRET is the fallback until it is configured.
 */
function linkSecret() {
  return process.env.APPROVAL_LINK_SECRET || process.env.ADMIN_SECRET || '';
}

/** token = HMAC(secret, `${teacherId}:${action}:${exp}`) — bound to action and expiry. */
function signActionToken(secret, teacherId, action, exp) {
  return crypto.createHmac('sha256', secret).update(`${teacherId}:${action}:${exp}`).digest('hex');
}

function verifyActionToken(secret, teacherId, action, exp, token) {
  const expNum = parseInt(exp, 10);
  if (!Number.isFinite(expNum) || expNum < Math.floor(Date.now() / 1000)) return false;
  const expected = signActionToken(secret, teacherId, action, expNum);
  const a = Buffer.from(String(token || ''), 'utf8');
  const b = Buffer.from(expected, 'utf8');
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

/** Verify a Supabase JWT and return the auth user (or null). */
async function getAuthUser(req, supabase) {
  const authHeader = req.headers.authorization || '';
  if (!authHeader.startsWith('Bearer ')) return null;
  const { data, error } = await supabase.auth.getUser(authHeader.slice(7));
  if (error || !data?.user) return null;
  return data.user;
}

function renderErrorPage(res, message) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Referrer-Policy', 'no-referrer');
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
        <p>${escapeHtml(message)}</p>
        <a href="https://alimun.com" class="btn">Back to Alimun</a>
      </div>
    </body>
    </html>
  `);
}

/** Plain-text subject: no CR/LF (header injection) and no angle brackets. */
function cleanSubject(s) {
  return String(s ?? '').replace(/[\r\n<>]+/g, ' ').trim().slice(0, 200);
}

/** Send through Resend. Returns true only when Resend accepted the message. */
async function sendEmail(to, subject, html) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.warn('[Alimun Admin] RESEND_API_KEY not configured. Skipping email.');
    return false;
  }
  const emailFrom = process.env.EMAIL_FROM_ADDRESS || 'Alimun <no-reply@alimun.com>';
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendKey}`,
        'Content-Type':  'application/json'
      },
      body: JSON.stringify({ from: emailFrom, to, subject: cleanSubject(subject), html })
    });
    if (!response.ok) {
      console.error('[Alimun Admin] Resend rejected email:', response.status);
      return false;
    }
    return true;
  } catch (err) {
    console.error('[Alimun Admin] Failed to send email:', err.message);
    return false;
  }
}

// ── action=approve / action=reject (emailed links) ──────────
// GET only renders a confirmation page (mail scanners that prefetch links
// change nothing). The button POSTs the same signed token. The change is
// applied only while the profile is still 'pending', with a conditional
// update, so each link works once and cannot undo a later admin decision.

const PAGE_STYLE = `
        :root { --g: #ceff65; --b: #080808; --body: 'Satoshi', sans-serif; }
        body { font-family: var(--body); background: #f0efe9; min-height: 100vh; display: flex; align-items: center; justify-content: center; margin: 0; padding: 2rem; }
        .card { background: #fff; border-radius: 1.5rem; box-shadow: 0 8px 40px rgba(0,0,0,.08); padding: 2.5rem; text-align: center; max-width: 440px; width: 100%; }
        .ico { width: 56px; height: 56px; border-radius: 50%; background: var(--g); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.375rem; }
        .ico.neutral { background: #eaeaea; }
        .ico.bad { background: #fff0f0; border: 1.5px solid #fca5a5; }
        .ico svg { width: 24px; height: 24px; stroke: var(--b); fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
        .ico.bad svg { stroke: #dc2626; }
        h1 { font-size: 1.5rem; font-weight: 900; margin-bottom: 0.5rem; color: var(--b); text-transform: uppercase; }
        p { font-size: 0.875rem; color: #666; line-height: 1.6; margin-bottom: 1.875rem; }
        form { margin: 0 0 1rem; }
        .btn { display: inline-flex; align-items: center; justify-content: center; background: var(--b); color: #fff; font-weight: 700; font-size: .78rem; text-transform: uppercase; letter-spacing: .055em; border: none; border-radius: 5rem; padding: .75rem 1.5rem; cursor: pointer; text-decoration: none; font-family: inherit; }
        .btn.primary { background: var(--g); color: var(--b); }`;

const ICON_CHECK = '<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';
const ICON_X = '<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

/** Admin result page. `bodyHtml` must already be escaped. */
function renderPage(res, status, { title, heading, icoClass = '', icon = ICON_CHECK, bodyHtml, extraHtml = '' }) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Referrer-Policy', 'no-referrer');
  return res.status(status).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>${escapeHtml(title)} — Alimun Admin</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="robots" content="noindex">
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap" rel="stylesheet">
      <style>${PAGE_STYLE}
      </style>
    </head>
    <body>
      <div class="card">
        <div class="ico ${icoClass}">${icon}</div>
        <h1>${escapeHtml(heading)}</h1>
        <p>${bodyHtml}</p>
        ${extraHtml}
        <a href="https://alimun.com" class="btn">Back to Alimun</a>
      </div>
    </body>
    </html>
  `);
}

function renderAlreadyReviewed(res, profile) {
  const name = escapeHtml(profile.full_name);
  if (profile.status === 'approved') {
    return renderPage(res, 200, { title: 'Approved', heading: 'Already Approved',
      bodyHtml: `Teacher <strong>${name}</strong> is already approved.` });
  }
  return renderPage(res, 200, { title: 'Suspended', heading: 'Already Suspended', icoClass: 'neutral', icon: ICON_X,
    bodyHtml: `Teacher <strong>${name}</strong> has already been marked as suspended/rejected.` });
}

async function handleEmailDecision(req, res, action) {
  const isPost = req.method === 'POST';
  if (!isPost && req.method !== 'GET') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let params = isPost ? (req.body || {}) : (req.query || {});
  if (typeof params === 'string') {
    params = Object.fromEntries(new URLSearchParams(params));
  }
  const token = String(params.token || '');
  const teacher_id = String(params.teacher_id || '');
  const exp = String(params.exp || '');
  const label = action === 'approve' ? 'Approve' : 'Reject';

  if (!token || !teacher_id || !exp || !UUID_RE.test(teacher_id) || !/^[0-9]{1,12}$/.test(exp) || !/^[0-9a-f]{64}$/i.test(token)) {
    return renderErrorPage(res, 'Missing or invalid parameters.');
  }

  const secret = linkSecret();
  if (!secret) {
    console.error(`[Alimun ${label}] link secret is not configured.`);
    return renderErrorPage(res, 'This link cannot be used right now. Please act from the admin dashboard.');
  }

  if (!verifyActionToken(secret, teacher_id, action, exp, token)) {
    console.warn(`[Alimun ${label}] Invalid or expired token for teacher_id: ${teacher_id}`);
    return renderErrorPage(res, 'This link is invalid or has expired. Please act from the admin dashboard.');
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
    console.error(`[Alimun ${label}] Error fetching teacher profile:`, fetchErr?.message);
    return renderErrorPage(res, 'Teacher profile not found.');
  }

  // Single use: only a pending application can be decided from an email link.
  if (profile.status !== 'pending') {
    return renderAlreadyReviewed(res, profile);
  }

  const name = escapeHtml(profile.full_name);

  if (!isPost) {
    // Confirmation step. Nothing changes until the admin presses the button.
    const form = `
        <form method="POST" action="/api/admin/teacher?action=${action}">
          <input type="hidden" name="token" value="${escapeHtml(token)}">
          <input type="hidden" name="teacher_id" value="${escapeHtml(teacher_id)}">
          <input type="hidden" name="exp" value="${escapeHtml(exp)}">
          <button type="submit" class="btn ${action === 'approve' ? 'primary' : ''}">${label} Application</button>
        </form>`;
    return renderPage(res, 200, {
      title: `${label} teacher`, heading: `${label} Application`,
      icoClass: action === 'approve' ? '' : 'bad', icon: action === 'approve' ? ICON_CHECK : ICON_X,
      bodyHtml: `Teacher <strong>${name}</strong>`,
      extraHtml: form,
    });
  }

  // Conditional update: succeeds only if the row is still pending right now.
  const update = action === 'approve'
    ? { status: 'approved', tier_level: 'focused' } // first approval starts on Focused, as in set-status
    : { status: 'suspended' };
  const { data: changed, error: updateErr } = await supabase
    .from('teacher_profiles')
    .update(update)
    .eq('id', teacher_id)
    .eq('status', 'pending')
    .select('id');

  if (updateErr) {
    console.error(`[Alimun ${label}] Database update failed:`, updateErr.message);
    return renderErrorPage(res, 'Failed to update teacher profile status.');
  }
  if (!changed || changed.length === 0) {
    const { data: now } = await supabase.from('teacher_profiles').select('full_name, status').eq('id', teacher_id).maybeSingle();
    return renderAlreadyReviewed(res, now || profile);
  }

  const teacherEmail = await getTeacherEmail(supabase, profile.user_id);
  let emailed = false;
  if (teacherEmail) {
    emailed = action === 'approve'
      ? await sendEmail(teacherEmail, `Welcome to Alimun, ${profile.full_name}! You're approved.`, approvedEmailHtml(profile.full_name))
      : await sendEmail(teacherEmail, 'Teacher Application Update — Alimun', rejectedEmailHtml(profile.full_name, teacherEmail));
  }
  const emailLine = emailed
    ? ` A notification email has been sent to <strong>${escapeHtml(teacherEmail)}</strong>.`
    : ' The notification email could not be sent.';

  if (action === 'approve') {
    return renderPage(res, 200, { title: 'Approved', heading: 'Teacher Approved',
      bodyHtml: `Teacher <strong>${name}</strong> is now approved.${emailLine}` });
  }
  return renderPage(res, 200, { title: 'Rejected', heading: 'Teacher Rejected', icoClass: 'bad', icon: ICON_X,
    bodyHtml: `Teacher <strong>${name}</strong> has been rejected and marked as suspended.${emailLine}` });
}

// ── Email bodies (shared by the email-link handlers and action=set-status) ──

function approvedEmailHtml(fullName) {
  return `
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
            <h2 style="color: #080808; margin-top: 0;">Congratulations, ${escapeHtml(fullName)}!</h2>
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
}

function rejectedEmailHtml(fullName, email, reason) {
  const reasonBlock = reason
    ? `<p style="background:#fafafa;border-left:3px solid #080808;padding:12px;white-space:pre-wrap;">${escapeHtml(reason)}</p>`
    : '';
  return `
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
            <p>Dear ${escapeHtml(fullName)},</p>
            <p>Thank you for applying to Alimun. After review, we're unable to approve your application at this time.</p>
            ${reasonBlock}
            <p>We appreciate your interest in our platform and wish you all the best in your teaching endeavors.</p>
            <p>Warm regards,<br/>The Alimun Team</p>
          </div>
          <div class="footer">
            This email was sent to ${escapeHtml(email)}.
          </div>
        </div>
      </body>
      </html>
    `;
}

function suspendedEmailHtml(fullName, reason) {
  const reasonBlock = reason
    ? `<p style="background:#fafafa;border-left:3px solid #080808;padding:12px;white-space:pre-wrap;">${escapeHtml(reason)}</p>`
    : '';
  return `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"><title>Alimun Account Update</title></head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background:#f6f6f6; margin:0; padding:0;">
        <div style="max-width:600px; margin:40px auto; background:#fff; border-radius:16px; overflow:hidden;">
          <div style="background:#080808; padding:30px; text-align:center;">
            <h1 style="color:#ceff65; margin:0; font-size:24px; font-weight:800; letter-spacing:0.05em; text-transform:uppercase;">Alimun</h1>
          </div>
          <div style="padding:40px 30px; color:#333; line-height:1.6;">
            <p>Dear ${escapeHtml(fullName)},</p>
            <p>Your Alimun teacher account has been suspended, so you can no longer access the teacher dashboard.</p>
            ${reasonBlock}
            <p>If you believe this is a mistake, reply to this email and we'll look into it.</p>
            <p>The Alimun Team</p>
          </div>
        </div>
      </body>
      </html>
    `;
}

async function getTeacherEmail(supabase, userId) {
  try {
    const { data, error } = await supabase.auth.admin.getUserById(userId);
    if (!error && data?.user) return data.user.email;
  } catch (e) {
    console.warn('[Alimun Admin] Failed to fetch teacher auth email:', e);
  }
  return null;
}

// ── action=notify ───────────────────────────────────────────

const NOTIFY_COOLDOWN_MS = 24 * 60 * 60 * 1000;
const notifyLog = new Map();

async function handleNotify(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) return res.status(500).json({ error: 'Internal Server Error' });

  // Only the applicant themself can trigger the notification, and the
  // application data comes from their stored profile, not the request body.
  // Authenticate before anything else so config state is never revealed.
  const user = await getAuthUser(req, supabase);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const adminSecret = linkSecret();
  const resendKey = process.env.RESEND_API_KEY;
  if (!adminSecret || !resendKey) {
    console.error('[Alimun Admin Notification] link secret or RESEND_API_KEY is not configured.');
    return res.status(500).json({ error: 'Internal Server Error' });
  }

  // Fast per-instance repeat guard; the durable guard is teacher_profiles.notified_at below.
  const lastNotified = notifyLog.get(user.id);
  if (lastNotified && Date.now() - lastNotified < NOTIFY_COOLDOWN_MS) {
    return res.status(429).json({ error: 'Application notification already sent' });
  }

  const { data: profile, error: profileErr } = await supabase
    .from('teacher_profiles')
    .select('id, full_name, languages, experience_years, specialty, bio, status')
    .eq('user_id', user.id)
    .maybeSingle();
  if (profileErr || !profile) {
    return res.status(404).json({ error: 'Teacher profile not found' });
  }
  if (profile.status !== 'pending') {
    return res.status(409).json({ error: 'Application already reviewed' });
  }

  const teacher_id = profile.id;

  // Durable repeat guard (AUTH-05): atomically claim the notification slot by
  // stamping notified_at only when it is empty or older than the cooldown.
  // Until the Phase 2 migration adds the column, this falls back to the
  // per-instance guard above.
  const claimedAt = new Date().toISOString();
  const cooldownStart = new Date(Date.now() - NOTIFY_COOLDOWN_MS).toISOString();
  let previousNotifiedAt = null;
  let durableClaim = false;
  {
    const { data: prev, error: prevErr } = await supabase
      .from('teacher_profiles').select('notified_at').eq('id', teacher_id).maybeSingle();
    if (!prevErr) {
      previousNotifiedAt = prev?.notified_at || null;
      const { data: claimed, error: claimErr } = await supabase
        .from('teacher_profiles')
        .update({ notified_at: claimedAt })
        .eq('id', teacher_id)
        .or(`notified_at.is.null,notified_at.lt.${cooldownStart}`)
        .select('id');
      if (claimErr) {
        console.error('[Alimun Admin Notification] notified_at claim failed:', claimErr.message);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!claimed || claimed.length === 0) {
        return res.status(429).json({ error: 'Application notification already sent' });
      }
      durableClaim = true;
    } else if (prevErr.code !== '42703' && !/notified_at/.test(prevErr.message || '')) {
      console.error('[Alimun Admin Notification] notified_at lookup failed:', prevErr.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  // Give the slot back when the email does not go out, so the applicant can retry.
  const releaseClaim = async () => {
    if (!durableClaim) return;
    await supabase.from('teacher_profiles')
      .update({ notified_at: previousNotifiedAt })
      .eq('id', teacher_id).eq('notified_at', claimedAt);
  };

  const rawName = String(profile.full_name || '');
  const full_name = escapeHtml(rawName);
  const experience_years = escapeHtml(profile.experience_years);
  const specialty = escapeHtml(profile.specialty || '—');
  const bio = escapeHtml(profile.bio || '');

  const exp = Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS;
  const approveToken = signActionToken(adminSecret, teacher_id, 'approve', exp);
  const rejectToken  = signActionToken(adminSecret, teacher_id, 'reject', exp);

  const appUrl = process.env.APP_URL || 'https://alimun.com';
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@alimun.com';

  const approveUrl = escapeHtml(`${appUrl}/api/admin/approve-teacher?token=${approveToken}&teacher_id=${encodeURIComponent(teacher_id)}&exp=${exp}`);
  const rejectUrl  = escapeHtml(`${appUrl}/api/admin/reject-teacher?token=${rejectToken}&teacher_id=${encodeURIComponent(teacher_id)}&exp=${exp}`);

  const langList = escapeHtml(Array.isArray(profile.languages) ? profile.languages.join(', ') : (profile.languages || 'None'));

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
        subject: cleanSubject(`New teacher application — ${rawName}`),
        html:    htmlContent
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('[Alimun Admin Notification] Resend API error:', response.status, errText.slice(0, 500));
      await releaseClaim();
      return res.status(502).json({ error: 'Failed to send notification email' });
    }

    notifyLog.set(user.id, Date.now());
    if (notifyLog.size > 5000) notifyLog.clear();
    console.log(`[Alimun Admin Notification] Sent application email for teacher ${teacher_id}`);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[Alimun Admin Notification] Error:', err);
    await releaseClaim().catch(() => {});
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

// ── action=set-status ───────────────────────────────────────
// Used by the admin dashboard. Caller must be signed in with
// app_metadata.role === 'admin' (server-controlled; user_metadata is ignored).
// Body: { teacher_ids: uuid[], status: 'approved'|'suspended'|'pending', notify?: bool, reason?: string }

const SETTABLE_STATUSES = ['approved', 'suspended', 'pending'];

async function handleSetStatus(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) return res.status(500).json({ error: 'Server database connection error' });

  const user = await getAuthUser(req, supabase);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });
  if (user.app_metadata?.role !== 'admin') return res.status(403).json({ error: 'Admins only' });

  let body = req.body || {};
  if (typeof body === 'string') {
    try { body = JSON.parse(body || '{}'); } catch { return res.status(400).json({ error: 'Invalid JSON' }); }
  }
  const ids = Array.isArray(body.teacher_ids) ? body.teacher_ids : [body.teacher_id];
  const status = String(body.status || '');
  const notify = body.notify !== false;
  const reason = String(body.reason || '').trim().slice(0, 2000);

  if (!SETTABLE_STATUSES.includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }
  if (ids.length === 0 || ids.length > 50 || !ids.every((id) => UUID_RE.test(String(id)))) {
    return res.status(400).json({ error: 'teacher_ids must be 1-50 UUIDs' });
  }

  const { data: profiles, error: fetchErr } = await supabase
    .from('teacher_profiles')
    .select('id, full_name, user_id, status, tier_level')
    .in('id', ids);
  if (fetchErr) return res.status(500).json({ error: 'Could not load teacher profiles' });

  const results = [];
  const emailJobs = [];
  for (const profile of profiles || []) {
    const previous = profile.status;
    if (previous === status) {
      results.push({ id: profile.id, status, changed: false, emailed: false });
      continue;
    }

    const update = { status };
    // First approval starts on Focused (the welcome email says so), same as the email-link flow
    if (status === 'approved' && previous === 'pending') update.tier_level = 'focused';
    const { error: updateErr } = await supabase.from('teacher_profiles').update(update).eq('id', profile.id);
    if (updateErr) {
      console.error('[Alimun Admin] set-status update failed:', profile.id, updateErr.message);
      results.push({ id: profile.id, error: 'Update failed' });
      continue;
    }

    console.log(`[Alimun Admin] admin ${user.id} set teacher ${profile.id} ${previous} -> ${status}`);
    const entry = { id: profile.id, status, previous, changed: true, emailed: false };
    results.push(entry);
    if (notify && status !== 'pending') emailJobs.push({ entry, profile, previous });
  }

  // Emails go out in parallel after all updates, so a large batch cannot time
  // out halfway through the status changes. `emailed` is true only when
  // Resend accepted the message.
  await Promise.allSettled(emailJobs.map(async ({ entry, profile, previous }) => {
    const email = await getTeacherEmail(supabase, profile.user_id);
    if (!email) return;
    if (status === 'approved') {
      entry.emailed = await sendEmail(email, `Welcome to Alimun, ${profile.full_name}! You're approved.`, approvedEmailHtml(profile.full_name));
    } else if (previous === 'pending') {
      entry.emailed = await sendEmail(email, 'Teacher Application Update — Alimun', rejectedEmailHtml(profile.full_name, email, reason));
    } else {
      entry.emailed = await sendEmail(email, 'Your Alimun teacher account — Alimun', suspendedEmailHtml(profile.full_name, reason));
    }
  }));

  const missing = ids.filter((id) => !(profiles || []).some((p) => p.id === id));
  missing.forEach((id) => results.push({ id, error: 'Teacher profile not found' }));

  return res.status(200).json({ results });
}

// ── action=invite ───────────────────────────────────────────
// Admin pages, part 2 (docs/DASHBOARD_PLAN.md): replaces "Create student" and
// "Add faculty", which needed an existing login id and never set the role.

const INVITE_ROLES = ['student', 'teacher'];
const INVITE_LANGUAGES = ['English', 'German', 'Spanish', 'French', 'Portuguese', 'Italian', 'Mandarin', 'Japanese', 'Arabic'];
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;

function inviteEmailHtml(fullName, role, link) {
  const what = role === 'teacher'
    ? 'Alimun has opened a teacher account for you. Use the button below to sign in for the first time; then set a password in Settings.'
    : 'Alimun has opened a student account for you. Use the button below to sign in for the first time, take the short level test and start learning.';
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Your Alimun account</title></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;background:#f6f6f6;margin:0;padding:0">
<div style="max-width:600px;margin:40px auto;background:#ffffff;border-radius:16px;overflow:hidden">
<div style="background:#080808;padding:30px;text-align:center"><h1 style="color:#ceff65;margin:0;font-size:24px;font-weight:800;letter-spacing:.05em;text-transform:uppercase">Alimun</h1></div>
<div style="padding:40px 30px;color:#333333;line-height:1.6">
<h2 style="color:#080808;margin-top:0">Hello ${escapeHtml(fullName)},</h2>
<p>${what}</p>
<p style="text-align:center"><a href="${escapeHtml(link)}" style="display:inline-block;background:#ceff65;color:#080808;text-decoration:none;padding:14px 30px;border-radius:30px;font-weight:700;font-size:14px">Sign in to Alimun</a></p>
<p style="font-size:13px;color:#777777">The link works once and expires after a day. If it has expired, use "Forgot password" on the sign-in page with this email address.</p>
</div></div></body></html>`;
}

async function handleInvite(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const supabase = getSupabaseAdmin();
  if (!supabase) return res.status(500).json({ error: 'Server database connection error' });
  const user = await getAuthUser(req, supabase);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });
  if (user.app_metadata?.role !== 'admin') return res.status(403).json({ error: 'Admins only' });

  let body = req.body || {};
  if (typeof body === 'string') {
    try { body = JSON.parse(body || '{}'); } catch { return res.status(400).json({ error: 'Invalid JSON' }); }
  }
  const email = String(body.email || '').trim().toLowerCase();
  const role = String(body.role || '');
  const fullName = String(body.full_name || '').trim();
  const language = String(body.language || '');
  const specialty = String(body.specialty || '').trim();
  if (!EMAIL_RE.test(email) || email.length > 200) return res.status(400).json({ error: 'Invalid email address' });
  if (!INVITE_ROLES.includes(role)) return res.status(400).json({ error: 'Role must be student or teacher' });
  if (!fullName || fullName.length > 100 || /[<>\u0000-\u001f]/.test(fullName)) return res.status(400).json({ error: 'Write a name of up to 100 characters, without < or >' });
  if (role === 'teacher' && !INVITE_LANGUAGES.includes(language)) return res.status(400).json({ error: 'Choose the language the teacher teaches' });
  if (specialty.length > 200 || /[<>]/.test(specialty)) return res.status(400).json({ error: 'Specialty: up to 200 characters, without < or >' });

  // The account is created by the invite link itself; the role goes into app_metadata (never user_metadata alone).
  const origin = 'https://alimun.com';
  const { data: linkData, error: linkErr } = await supabase.auth.admin.generateLink({
    type: 'invite', email,
    options: { data: { full_name: fullName, role }, redirectTo: `${origin}/welcome.html` },
  });
  if (linkErr || !linkData?.user) {
    const taken = /already|registered|exists/i.test(linkErr?.message || '');
    return res.status(taken ? 409 : 500).json({ error: taken ? 'An account with this email already exists' : 'The account could not be created' });
  }
  const invited = linkData.user;
  const { error: roleErr } = await supabase.auth.admin.updateUserById(invited.id, { app_metadata: { role } });
  if (roleErr) {
    console.error('[Alimun Admin] invite: role not set', roleErr.message);
    return res.status(500).json({ error: 'The account was created but its role was not set. Try again or set it in Supabase.' });
  }
  if (role === 'teacher') {
    const { error: tpErr } = await supabase.from('teacher_profiles').insert({
      user_id: invited.id, full_name: fullName, languages: [language], specialty: specialty || null,
      status: 'approved', tier_level: 'focused', experience_years: 0,
    });
    if (tpErr && tpErr.code !== '23505') {
      console.error('[Alimun Admin] invite: teacher profile', tpErr.message);
      return res.status(500).json({ error: 'The account was created but the teacher profile was not' });
    }
  }
  const link = linkData.properties?.action_link || '';
  const emailed = link ? await sendEmail(email, 'Your Alimun account', inviteEmailHtml(fullName, role, link)) : false;
  console.log(`[Alimun Admin] admin ${user.id} invited ${role} ${invited.id} (emailed: ${emailed})`);
  // Without email the admin gets the link to pass on by hand
  return res.status(200).json({ success: true, user_id: invited.id, role, emailed, link: emailed ? undefined : link });
}

// ── action=emails ───────────────────────────────────────────

async function handleEmails(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const supabase = getSupabaseAdmin();
  if (!supabase) return res.status(500).json({ error: 'Server database connection error' });
  const user = await getAuthUser(req, supabase);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });
  if (user.app_metadata?.role !== 'admin') return res.status(403).json({ error: 'Admins only' });
  let body = req.body || {};
  if (typeof body === 'string') {
    try { body = JSON.parse(body || '{}'); } catch { return res.status(400).json({ error: 'Invalid JSON' }); }
  }
  const ids = Array.isArray(body.user_ids) ? body.user_ids.filter((id) => UUID_RE.test(String(id))) : [];
  if (!ids.length || ids.length > 500) return res.status(400).json({ error: 'user_ids must be 1-500 UUIDs' });
  const want = new Set(ids);
  const emails = {};
  // Accounts are listed page by page; stop once every id asked for is found
  for (let page = 1; page <= 20 && Object.keys(emails).length < want.size; page++) {
    const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 1000 });
    if (error) return res.status(500).json({ error: 'Could not read the accounts' });
    (data?.users || []).forEach((u) => { if (want.has(u.id)) emails[u.id] = u.email || ''; });
    if (!data?.users || data.users.length < 1000) break;
  }
  return res.status(200).json({ emails });
}

// ── Main router ─────────────────────────────────────────────

module.exports = async function handler(req, res) {
  const action = req.query.action || '';

  switch (action) {
    case 'set-status':
      return handleSetStatus(req, res);
    case 'invite':
      return handleInvite(req, res);
    case 'emails':
      return handleEmails(req, res);
    case 'approve':
      return handleEmailDecision(req, res, 'approve');
    case 'reject':
      return handleEmailDecision(req, res, 'reject');
    case 'notify':
      return handleNotify(req, res);
    // Class operations (api/_lib/admin-ops.js)
    case 'session-update':
      return adminOps.sessionUpdate(req, res);
    case 'enrollment-move':
      return adminOps.enrollmentMove(req, res);
    case 'enrollment-remove':
      return adminOps.enrollmentRemove(req, res);
    default:
      return res.status(400).json({ error: 'Unknown admin action' });
  }
};
