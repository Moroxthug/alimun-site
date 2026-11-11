/**
 * ============================================================
 *  ALIMUN — GET /api/cron-reminders (Vercel cron, daily; docs/GROWTH_PLAN.md step 4c)
 *
 *  Sends the automatic reminders that public.reminders_due() lists (supabase/migrations/202611071800_reminders.sql):
 *  no practice for 7 days, level test done but no plan or class after 2 days, free tutor minutes used up.
 *  Everyone due gets a dashboard bell notification (text in their dashboard language, app_nt_reminder_*); people
 *  who asked for news and offers (16+) also get an email, in their dashboard language, with their unsubscribe link. Each send is logged in
 *  reminder_log so nobody gets the same reminder too often. Each reminder can be paused in Admin → System → App
 *  settings (reminder_practice_7d, reminder_level_test_2d, reminder_tutor_free_out: 'off').
 *
 *  Auth: REQUIRES `Authorization: Bearer <CRON_SECRET>` (fails closed). The run is recorded in public.cron_runs.
 *  ?dry=1 lists who is due without sending anything.
 * ============================================================
 */

const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');
const { recordRun } = require('./_lib/cron-log.js');
const mail = require('./_lib/email.js');
const L = require('./_lib/email-i18n.js');

const LINKS = { practice_7d: '/app#/practice', level_test_2d: '/app#/settings/plans', tutor_free_out: '/app#/settings/plans' };
const KEYS = { practice_7d: 'reminder_practice', level_test_2d: 'reminder_level_test', tutor_free_out: 'reminder_tutor_free' };

function safeEqual(a, b) {
  const x = Buffer.from(String(a)), y = Buffer.from(String(b));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}
function isAuthorized(req) {
  const s = process.env.CRON_SECRET;
  return !!s && safeEqual(req.headers.authorization || '', `Bearer ${s}`);
}

/** The reminder email in the person's dashboard language (api/_lib/email-i18n.js; English when unknown). */
function email(r) {
  const lang = r.ui_lang || 'en', tx = L.t(lang), p = r.params || {};
  const first = String(r.name || '').trim().split(/\s+/)[0];
  const hello = { p: first ? mail.esc(L.fill(tx.hello_name, { name: first })) : mail.esc(tx.hello) };
  const language = p.language ? L.languageName(p.language, lang) : '';
  const site = mail.SITE;
  const pick = (kind) => (kind === 'practice_7d' ? tx.practice : kind === 'level_test_2d' ? tx.level : tx.tutor);
  const m = pick(r.kind);
  let body;
  if (r.kind === 'practice_7d') body = language ? L.fill(m.body_lang, { language }) : m.body;
  else if (r.kind === 'level_test_2d') body = language && p.level ? L.fill(m.body_full, { language, level: p.level }) : m.body;
  else body = m.body;
  return {
    lang, subject: m.subject, heading: m.heading, footer: tx.reminder_footer,
    hero: r.kind === 'tutor_free_out' ? 'plan' : mail.heroForLanguage(p.language),
    blocks: [hello, { p: mail.esc(body) }, { button: { label: m.button, href: site + LINKS[r.kind] } }],
  };
}

module.exports = async function handler(req, res) {
  if (!isAuthorized(req)) return res.status(401).json({ error: 'Unauthorized' });
  const url = process.env.SUPABASE_URL, key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return res.status(500).json({ error: 'Server configuration error' });
  const supabase = createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
  const dry = req.query && req.query.dry === '1';

  const { data: due, error } = await supabase.rpc('reminders_due');
  if (error) {
    await recordRun(supabase, 'vercel:cron-reminders', false, { error: error.message });
    return res.status(500).json({ error: 'reminders_due failed' });
  }
  const counts = {};
  due.forEach((r) => { counts[r.kind] = (counts[r.kind] || 0) + 1; });
  if (dry) return res.status(200).json({ dry: true, due: counts, emailable: due.filter((r) => r.consented).length });

  let bell = 0, emailed = 0, failed = 0;
  for (const r of due) {
    try {
      const { error: nErr } = await supabase.from('notifications').insert({ user_id: r.user_id, kind: 'service', key: KEYS[r.kind], params: r.params || {}, link: LINKS[r.kind] });
      if (!nErr) bell++;
      let sent = false;
      if (r.consented && r.email) {
        const e = email(r), unsub = mail.unsubscribeUrl(r.user_id);
        const { html, text } = mail.renderEmail({ hero: e.hero, preheader: e.blocks[1].p.replace(/<[^>]+>/g, '').slice(0, 120), heading: e.heading, blocks: e.blocks,
          unsubscribeUrl: unsub, lang: e.lang });
        sent = await mail.sendEmail({ to: r.email, subject: e.subject, html, text, unsubscribeUrl: unsub, from: process.env.EMAIL_MARKETING_FROM || 'Alimun <news@alimun.com>' });
        if (sent) emailed++;
      }
      await supabase.from('reminder_log').insert({ user_id: r.user_id, kind: r.kind, emailed: sent });
    } catch (err) {
      failed++;
      console.error('[cron-reminders]', r.kind, err.message);
    }
  }
  const result = { due: counts, bell, emailed, failed };
  await recordRun(supabase, 'vercel:cron-reminders', failed === 0, result);
  return res.status(200).json(result);
};
