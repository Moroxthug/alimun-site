/**
 * ============================================================
 *  ALIMUN — POST /api/send-admin-email
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Admin-only email gateway to send notifications and promotional emails via Resend.
 *  ?action=subscribe and ?action=contact are the public actions: the site's
 *  email signup forms and the contact form.
 * ============================================================
 */

const { createClient } = require('@supabase/supabase-js');
const subscribe = require('./_lib/subscribe.js');
const contact = require('./_lib/contact.js');
const mail = require('./_lib/email.js');
const L = require('./_lib/email-i18n.js');

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
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
  // Public contact form (api/_lib/contact.js); no admin auth.
  if (req.query && req.query.action === 'contact') return contact(req, res);

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
    let userId, fullName, uiLang;
    const { data: student } = await supabase
      .from('student_profiles')
      .select('user_id, full_name, ui_lang')
      .eq('id', targetId)
      .maybeSingle();

    if (student) {
      userId = student.user_id;
      fullName = student.full_name;
      uiLang = student.ui_lang;
    } else {
      const { data: teacher } = await supabase
        .from('teacher_profiles')
        .select('user_id, full_name, ui_lang')
        .eq('id', targetId)
        .maybeSingle();
      if (teacher) {
        userId = teacher.user_id;
        fullName = teacher.full_name;
        uiLang = teacher.ui_lang;
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
    let content;

    const lang = uiLang || 'en';
    if (emailType === 'tier-upgrade') {
      subject = cleanSubject(L.say(lang, 'plan.subject', { plan: tierName }));
      content = mail.renderEmail({
        hero: 'plan', lang,
        preheader: L.say(lang, 'plan.preheader', { plan: tierName }),
        heading: L.say(lang, 'plan.heading'),
        blocks: [
          { p: L.hello(lang, fullName) },
          { p: L.html(lang, 'plan.body', { plan: tierName }) },
          { p: L.html(lang, 'plan.body2') },
          { button: { label: L.say(lang, 'common.open_dashboard'), href: `${mail.SITE}/signin.html` } },
        ],
        note: L.html(lang, 'plan.note'),
        footer: L.html(lang, 'common.footer_account'),
      });
    } else {
      // Message written by an admin: plain text, escaped, line breaks kept.
      const paras = String(customBody).split(/\n{2,}/).map((t) => t.trim()).filter(Boolean)
        .map((t) => ({ p: mail.esc(t).replace(/\n/g, '<br>') }));
      content = mail.renderEmail({
        hero: 'message',
        preheader: String(customBody).replace(/\s+/g, ' ').slice(0, 120),
        heading: subject,
        lang,
        blocks: [{ p: L.hello(lang, fullName) }, ...paras],
        note: L.html(lang, 'common.questions'),
        footer: L.html(lang, 'common.footer_account'),
      });
    }

    // 5. Send via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey || resendKey.includes('YOUR_RESEND_API_KEY')) {
      console.warn('[Send Admin Email] Resend key is not configured; nothing sent.');
      return res.status(503).json({ error: 'Email delivery is not configured' });
    }

    const sent = await mail.sendEmail({ to: email, subject, ...content });
    if (sent) return res.status(200).json({ success: true });
    return res.status(502).json({ error: 'Email delivery failed' });

  } catch (err) {
    console.error('[Send Admin Email] Endpoint exception:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
