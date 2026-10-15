/**
 * ============================================================
 *  ALIMUN — POST /api/send-admin-email
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Admin-only email gateway to send notifications and promotional emails via Resend.
 *  ?action=subscribe is the one public action: the site's email signup forms.
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');
const subscribe = require('./_lib/subscribe.js');

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const EMAIL_TYPES = new Set(['tier-upgrade', 'promo']);
// Tier emails are only sent for real classroom tiers (not e.g. 'waitlist').
const TIERS = new Set(['community', 'focused', 'intensive', 'private']);
const MAX_SUBJECT = 200;
const MAX_BODY = 10000;

module.exports = async function handler(req, res) {
  // Public email signup from the site forms (api/_lib/subscribe.js); no admin auth.
  if (req.query && req.query.action === 'subscribe') return subscribe(req, res);

  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || 'https://alimun.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // 1. Authenticate caller
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: missing token' });
  }
  
  const token = authHeader.split(' ')[1];
  const supabase = getSupabaseAdmin();
  if (!supabase) return res.status(500).json({ error: 'Server database configuration error' });

  let user;
  try {
    const { data: authData, error: authError } = await supabase.auth.getUser(token);
    if (authError || !authData?.user) {
      return res.status(401).json({ error: 'Unauthorized: invalid token' });
    }
    user = authData.user;
  } catch (err) {
    return res.status(401).json({ error: 'Unauthorized: authentication exception' });
  }

  // Admin comes from app_metadata only (user_metadata is user-writable).
  if (user.app_metadata?.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden: admin access required' });
  }

  // 2. Parse body
  const { targetId, emailType, customSubject, customBody, tierName } = req.body || {};
  if (!targetId || !UUID_RE.test(String(targetId)) || !EMAIL_TYPES.has(emailType)) {
    return res.status(400).json({ error: 'Missing or invalid targetId or emailType' });
  }
  if (emailType === 'tier-upgrade' && !TIERS.has(String(tierName || '').toLowerCase())) {
    return res.status(400).json({ error: 'Invalid tierName' });
  }
  if (emailType === 'promo') {
    if (typeof customBody !== 'string' || !customBody.trim() || customBody.length > MAX_BODY) {
      return res.status(400).json({ error: 'Invalid customBody' });
    }
    if (customSubject != null && (typeof customSubject !== 'string' || customSubject.length > MAX_SUBJECT)) {
      return res.status(400).json({ error: 'Invalid customSubject' });
    }
  }

  try {
    // 3. Resolve user profile and user_id
    let userId, fullName;
    const { data: student } = await supabase
      .from('student_profiles')
      .select('user_id, full_name')
      .eq('id', targetId)
      .maybeSingle();

    if (student) {
      userId = student.user_id;
      fullName = student.full_name;
    } else {
      const { data: teacher } = await supabase
        .from('teacher_profiles')
        .select('user_id, full_name')
        .eq('id', targetId)
        .maybeSingle();
      if (teacher) {
        userId = teacher.user_id;
        fullName = teacher.full_name;
      }
    }

    if (!userId) {
      return res.status(404).json({ error: 'Target user profile not found' });
    }

    // Get email from auth admin API
    const { data: authUser, error: authUserErr } = await supabase.auth.admin.getUserById(userId);
    if (authUserErr || !authUser?.user) {
      return res.status(404).json({ error: 'Auth user email resolution failed' });
    }

    const email = authUser.user.email;
    if (!email) {
      return res.status(400).json({ error: 'Target user does not have a registered email address' });
    }

    // 4. Build templates
    // Subjects are plain text: strip CR/LF and angle brackets.
    const cleanSubject = (v) => String(v).replace(/[\r\n<>]/g, ' ').trim().slice(0, MAX_SUBJECT);
    let subject = cleanSubject(customSubject || 'Update from Alimun') || 'Update from Alimun';
    let emailHtml = '';

    if (emailType === 'tier-upgrade') {
      subject = cleanSubject(`Your Alimun classroom tier has been upgraded to ${tierName}!`);
      emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: sans-serif; line-height: 1.6; color: #080808; background-color: #fafaf8; padding: 20px; }
            .container { max-width: 600px; margin: 20px auto; padding: 30px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #eae8e2; }
            .header { background-color: #080808; color: #ffffff; padding: 20px; border-radius: 8px; text-align: center; }
            .header h1 { color: #ceff65; font-size: 28px; margin: 0; text-transform: uppercase; font-weight: bold; letter-spacing: 0.05em; }
            .badge { display: inline-block; background-color: #ceff65; color: #080808; padding: 8px 16px; border-radius: 20px; font-weight: bold; font-size: 14px; text-transform: uppercase; margin-top: 15px; }
            .footer { font-size: 11px; color: #888; margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>ALIMUN</h1>
              <p>Administrative Upgrade</p>
            </div>
            <div style="margin-top:24px;">
              <p>Hello <b>${escapeHtml(fullName)}</b>,</p>
              <p>Your subscription tier has been modified directly by the Alimun Administration team. Your account has been upgraded to:</p>
              <center>
                <div class="badge">${escapeHtml(tierName)}</div>
              </center>
              <p style="margin-top: 24px;">This tier is now active on your account without requiring credit card registration or subscription payments. Enjoy your live classes and interactive exercises!</p>
              <p>Log in to your dashboard to view your new capabilities.</p>
            </div>
            <div class="footer">
              This is a transactional update from Alimun. If you believe this is in error, please contact support@alimun.com.
            </div>
          </div>
        </body>
        </html>
      `;
    } else {
      // General promo / custom memo email
      emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: sans-serif; line-height: 1.6; color: #080808; background-color: #fafaf8; padding: 20px; }
            .container { max-width: 600px; margin: 20px auto; padding: 30px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #eae8e2; }
            .header { background-color: #080808; color: #ffffff; padding: 20px; border-radius: 8px; text-align: center; }
            .header h1 { color: #ceff65; font-size: 28px; margin: 0; text-transform: uppercase; font-weight: bold; letter-spacing: 0.05em; }
            .content { margin-top: 24px; font-size: 15px; white-space: pre-wrap; }
            .footer { font-size: 11px; color: #888; margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>ALIMUN</h1>
              <p>Admin Notification</p>
            </div>
            <div class="content">
<p>Hello <b>${escapeHtml(fullName)}</b>,</p>

${escapeHtml(customBody)}
            </div>
            <div class="footer">
              Sent by Alimun Administration. Contact support@alimun.com for inquiry.
            </div>
          </div>
        </body>
        </html>
      `;
    }

    // 5. Send via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey || resendKey.includes('YOUR_RESEND_API_KEY')) {
      console.warn('[Send Admin Email] Resend key is not configured; nothing sent.');
      return res.status(503).json({ error: 'Email delivery is not configured' });
    }

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM_ADDRESS || 'Alimun <no-reply@alimun.com>',
        to: email,
        subject: subject,
        html: emailHtml
      })
    });

    if (resendRes.ok) {
      const resendData = await resendRes.json();
      return res.status(200).json({ success: true, id: resendData.id });
    } else {
      const errText = await resendRes.text();
      console.error('[Send Admin Email] Resend failure:', resendRes.status, errText.slice(0, 500));
      return res.status(502).json({ error: 'Email delivery failed' });
    }

  } catch (err) {
    console.error('[Send Admin Email] Endpoint exception:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
