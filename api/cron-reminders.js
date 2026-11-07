/**
 * ============================================================
 *  ALIMUN — GET /api/cron-reminders (Vercel cron, daily; docs/GROWTH_PLAN.md step 4c)
 *
 *  Sends the automatic reminders that public.reminders_due() lists (supabase/migrations/202611071800_reminders.sql):
 *  no practice for 7 days, level test done but no plan or class after 2 days, free tutor minutes used up.
 *  Everyone due gets a dashboard bell notification (text in their dashboard language, app_nt_reminder_*); people
 *  who asked for news and offers (16+) also get an email with their unsubscribe link. Each send is logged in
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

function email(r) {
  const first = String(r.name || '').trim().split(/\s+/)[0];
  const hello = { p: first ? `Hello ${mail.esc(first)},` : 'Hello,' };
  const lang = r.params && r.params.language ? mail.esc(r.params.language) : '';
  const level = r.params && r.params.level ? mail.esc(r.params.level) : '';
  const site = mail.SITE;
  if (r.kind === 'practice_7d') {
    return { subject: 'Ten minutes today?', hero: mail.heroForLanguage(r.params && r.params.language),
      heading: 'Ten minutes today?', blocks: [hello,
        { p: `It has been a week since you last practised${lang ? ' your ' + lang : ''}. A few minutes of exercises or flashcards today keeps the words you learned fresh.` },
        { button: { label: 'Practise now', href: `${site}/app#/practice` } }] };
  }
  if (r.kind === 'level_test_2d') {
    return { subject: 'Your level test result is waiting', hero: mail.heroForLanguage(r.params && r.params.language),
      heading: 'Your next step', blocks: [hello,
        { p: `Your level test placed you${lang ? ' in ' + lang : ''}${level ? ' at ' + level : ''}. The next step is a class with a teacher and other learners at your level, or a plan that suits how you like to learn.` },
        { button: { label: 'See classes and plans', href: `${site}/app#/settings/plans` } }] };
  }
  return { subject: 'Your free tutor minutes are used up', hero: 'plan',
    heading: 'Keep talking with your tutor', blocks: [hello,
      { p: 'You have used your free minutes with the tutor. A plan gives you tutor minutes every month, together with classes and exercises.' },
      { button: { label: 'See the plans', href: `${site}/app#/settings/plans` } }] };
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
          unsubscribeUrl: unsub, footer: 'You get these reminders because you asked for news and offers from Alimun.' });
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
