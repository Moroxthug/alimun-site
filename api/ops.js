/**
 * Alimun operations (owner, 13 Nov 2026; docs/OPERATIONS_PLAN.md): verified classes and the automations that run alone.
 *
 *   GET  ?action=cron-class-watch  (Vercel cron, every 5 minutes, Bearer CRON_SECRET)
 *        teacher-late: class dates that started 5 to 20 minutes ago with no teacher or substitute in the Daily room:
 *          the owner, the teacher and the learners are told (email; dashboard note for teacher and learners);
 *        class-outcomes: class dates that ended up to 50 hours ago, read again from Daily until settled.
 *   GET  ?action=cron-digest       (Vercel cron, every morning) the owner's digest of yesterday.
 *   POST ?action=automation-set    (admin) { name, enabled?, dry_run?, daily_cap? }
 *   POST ?action=verify-session    (admin) { session }: reads Daily for one class date now.
 *   POST ?action=digest-now        (admin) the digest of yesterday, to the owner, now (does not count as the morning one).
 *   GET  ?action=cron-clips        (Vercel cron, every minute) proof-clips: five 60-second recordings in each class.
 *        cron-class-watch also pairs Daily's recordings with Alimun's (recording-guard reports any other) and, once an
 *        hour, deletes recordings past their date (recording-cleanup).
 *   POST ?action=record-start | record-stop { session }   (admin only: teachers never record; owner, 13 Nov 2026)
 *   POST ?action=recording-link { id }   (admin) a 15-minute link to watch; every viewing is logged
 *   POST ?action=recording-keep { id, keep, note }        (admin) keep past the deletion date, or not
 * Every automated action goes through api/_lib/automation.js (switch, dry run, once only, daily cap, log, pause).
 */
const { createClient } = require('@supabase/supabase-js');
const mail = require('./_lib/email.js');
const L = require('./_lib/email-i18n.js');
const AUTO = require('./_lib/automation.js');
const CV = require('./_lib/class-verify.js');
const REC = require('./_lib/recordings.js');
const { recordRun } = require('./_lib/cron-log.js');
const { isTestAccount } = require('./_lib/test-accounts.js');

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const OWNER = () => process.env.CONTACT_EMAIL || 'bchysf@gmail.com';
const MIN = 60000, HOUR = 3600000, DAY = 86400000;

function sbAdmin() {
  const url = process.env.SUPABASE_URL, key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return url && key ? createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } }) : null;
}
function body(req) { if (req.body && typeof req.body === 'object') return req.body; try { return JSON.parse(req.body || '{}'); } catch (e) { return null; } }
function cronOk(req) { const s = process.env.CRON_SECRET; return !!s && req.headers.authorization === 'Bearer ' + s; }
async function adminOf(req, sb) {
  const h = req.headers.authorization || '';
  if (!h.startsWith('Bearer ')) return null;
  const { data, error } = await sb.auth.getUser(h.slice(7));
  if (error || !data || !data.user || !data.user.app_metadata || data.user.app_metadata.role !== 'admin') return null;
  return data.user;
}
async function send(to, subject, html) {
  if (!to) throw new Error('no address');
  if (!process.env.RESEND_API_KEY) throw new Error('email is not configured');
  const ok = await mail.sendEmail({ to, subject, html });
  if (!ok) throw new Error('the email was not accepted');
  return true;
}
function tellOwner(text) {
  return send(OWNER(), 'Alimun automations: needs your attention', mail.renderEmail({ hero: 'update', lang: 'en', preheader: text.slice(0, 90), heading: 'An automation needs you', blocks: [{ p: mail.esc(text) }] }));
}
const TIERS = { community: 'Community', focused: 'Focused', intensive: 'Intensive', private: '1 on 1', pack: 'Level pack', exam: 'Exam pack', open: 'Open class', help: 'Help class' };
function classLabel(co) { return `${co.language || ''} ${co.level || ''}`.trim(); }
function timeIn(at, tz, lang) {
  try { return new Intl.DateTimeFormat(L.locale(lang || 'en'), { timeZone: tz || 'Europe/Paris', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }).format(new Date(at)); } catch (e) { return new Date(at).toISOString().slice(11, 16) + ' UTC'; }
}

const SESSION_COLS = 'id, cohort_id, scheduled_at, status, room_session_id, outcome, verified_at, minutes_late, learners_present, teacher_seconds, cohorts(id, language, level, tier, product_key, teacher_id, substitute_teacher_id, class_minutes, timezone)';

/* ---------- Teacher late ---------- */
async function learnersOf(sb, cohortId) {
  const [{ data: en }, { data: ents }] = await Promise.all([
    sb.from('enrollments').select('student_profiles(user_id, full_name, ui_lang)').eq('cohort_id', cohortId).eq('status', 'active').limit(60),
    sb.from('entitlements').select('user_id').eq('cohort_id', cohortId).in('status', ['active', 'pending_room']).limit(60),
  ]);
  const out = {};
  (en || []).forEach((e) => { const s = e.student_profiles; if (s && s.user_id) out[s.user_id] = { user_id: s.user_id, name: s.full_name, lang: s.ui_lang || 'en' }; });
  const more = (ents || []).map((e) => e.user_id).filter((id) => id && !out[id]);
  if (more.length) {
    const { data: sp } = await sb.from('student_profiles').select('user_id, full_name, ui_lang').in('user_id', more);
    (sp || []).forEach((s) => { out[s.user_id] = { user_id: s.user_id, name: s.full_name, lang: s.ui_lang || 'en' }; });
  }
  return Object.keys(out).map((k) => out[k]);
}
async function emailOf(sb, userId) { const { data } = await sb.auth.admin.getUserById(userId); return data && data.user && data.user.email; }

async function lateCheck(sb, now, auto) {
  const out = { checked: 0, late: 0, results: {} };
  if (!auto || !auto.enabled) return out;
  const { data: list, error } = await sb.from('sessions').select(SESSION_COLS).neq('status', 'cancelled')
    .gte('scheduled_at', new Date(now - 20 * MIN).toISOString()).lte('scheduled_at', new Date(now - 5 * MIN).toISOString()).limit(30);
  if (error) throw new Error('late sessions: ' + error.message);
  for (const s of list || []) {
    const co = s.cohorts || {};
    if (!co.teacher_id) continue;
    out.checked++;
    /* A class taught by one of the owner's test accounts is for testing: verified, never alerted */
    const { data: tpx } = await sb.from('teacher_profiles').select('user_id, full_name').eq('id', co.teacher_id).maybeSingle();
    if (!tpx || isTestAccount({ email: tpx.user_id ? await emailOf(sb, tpx.user_id) : '', name: tpx.full_name })) continue;
    const teacherIds = await CV.teachersOf(sb, co);
    const here = await CV.presentNow(CV.roomName(s));
    if (here.some((id) => teacherIds.includes(id))) continue;
    out.late++;
    const label = classLabel(co), whenLocal = (lang) => timeIn(s.scheduled_at, co.timezone, lang);
    const learners = await learnersOf(sb, s.cohort_id);
    const { data: tp } = await sb.from('teacher_profiles').select('user_id, full_name, ui_lang').eq('id', co.teacher_id).maybeSingle();
    const tag = (who) => ({ key: `late:${s.id}:${who}`, sessionId: s.id });
    /* The owner */
    out.results['owner'] = await AUTO.act(sb, auto, Object.assign(tag('owner'), { action: 'email the owner', target: OWNER(), detail: { class: label, teacher: tp && tp.full_name, in_room: here.length } }), async () => {
      await send(OWNER(), `Teacher not in the room: ${label} at ${timeIn(s.scheduled_at, 'Europe/Paris')}`, mail.renderEmail({ hero: 'class', lang: 'en', preheader: `${tp ? tp.full_name : 'The teacher'} is not in the room yet.`,
        heading: 'A teacher is late', blocks: [{ p: mail.esc(`${label} was due to start at ${timeIn(s.scheduled_at, 'Europe/Paris')}. ${tp ? tp.full_name : 'The teacher'} is not in the room 5 minutes later; ${here.length} ${here.length === 1 ? 'person is' : 'people are'} in it now. The teacher and ${learners.length} learners have been told.`) },
          { button: { label: 'See the class log', href: `${mail.SITE}/app/admin#/classlog/${s.id}` } }] }));
    }, tellOwner);
    /* The teacher */
    if (tp && tp.user_id) {
      const lang = tp.ui_lang || 'en', vars = { class: label, time: whenLocal(lang) };
      out.results['teacher'] = await AUTO.act(sb, auto, Object.assign(tag('teacher'), { action: 'email and note to the teacher', target: tp.full_name }), async () => {
        await send(await emailOf(sb, tp.user_id), L.say(lang, 'class_late.subject_t', vars), mail.renderEmail({ hero: 'class', lang, preheader: L.say(lang, 'class_late.heading_t', vars), heading: L.say(lang, 'class_late.heading_t', vars),
          blocks: [{ p: L.hello(lang, tp.full_name) }, { p: L.html(lang, 'class_late.body_t', vars) }, { button: { label: L.say(lang, 'class_late.button_t'), href: `${mail.SITE}/app/teach#/classes` } }] }));
        await sb.from('notifications').insert({ user_id: tp.user_id, kind: 'service', title: L.say(lang, 'class_late.heading_t', vars), body: L.say(lang, 'class_late.body_t', vars), link: '/app/teach#/classes' });
      }, tellOwner);
    }
    /* The learners */
    for (const l of learners) {
      const lang = l.lang, vars = { class: label, time: whenLocal(lang) };
      await AUTO.act(sb, auto, Object.assign(tag('learner:' + l.user_id), { action: 'email and note to a learner', target: l.name }), async () => {
        await send(await emailOf(sb, l.user_id), L.say(lang, 'class_late.subject_l', vars), mail.renderEmail({ hero: 'class', lang, preheader: L.say(lang, 'class_late.heading_l', vars), heading: L.say(lang, 'class_late.heading_l', vars),
          blocks: [{ p: L.hello(lang, l.name) }, { p: L.html(lang, 'class_late.body_l', vars) }, { button: { label: L.say(lang, 'class_late.button_l'), href: `${mail.SITE}/app#/classes` } }] }));
        await sb.from('notifications').insert({ user_id: l.user_id, kind: 'service', title: L.say(lang, 'class_late.heading_l', vars), body: L.say(lang, 'class_late.body_l', vars), link: '/app#/classes' });
      }, tellOwner);
    }
  }
  return out;
}

/* ---------- Class outcomes ---------- */
async function outcomes(sb, now, auto) {
  const out = { verified: 0, changed: 0, failed: 0 };
  if (!auto || !auto.enabled) return out;
  /* Ended (at least 20 minutes after a 60-minute class) up to 50 hours ago; each read again at most every 25 minutes
     until a day after the class, so late records from Daily still count */
  const { data: list, error } = await sb.from('sessions').select(SESSION_COLS).neq('status', 'cancelled')
    .gte('scheduled_at', new Date(now - 50 * HOUR).toISOString()).lte('scheduled_at', new Date(now - 80 * MIN).toISOString()).order('scheduled_at', { ascending: false }).limit(40);
  if (error) throw new Error('outcome sessions: ' + error.message);
  for (const s of list || []) {
    const seen = s.verified_at ? new Date(s.verified_at).getTime() : 0;
    if (s.outcome && seen > new Date(s.scheduled_at).getTime() + 26 * HOUR) continue;
    if (seen && now - seen < 25 * MIN) continue;
    let v = null;
    try { v = await CV.verifySession(sb, s, now); out.verified++; }
    catch (e) {
      out.failed++;
      /* Failures count towards the automation's pause, through the same guard as every other action */
      await AUTO.act(sb, auto, { key: `verify-failed:${s.id}`, action: 'read Daily', sessionId: s.id, target: classLabel(s.cohorts || {}) }, async () => { throw e; }, tellOwner);
      if (!auto.enabled) break;
      continue;
    }
    /* Only a new or changed outcome is a line in the log */
    if (v.outcome && v.outcome !== s.outcome) {
      out.changed++;
      await AUTO.act(sb, auto, { key: `outcome:${s.id}:${v.outcome}`, action: s.outcome ? 'changed the outcome' : 'set the outcome', sessionId: s.id, target: classLabel(s.cohorts || {}),
        detail: { outcome: v.outcome, was: s.outcome || null, learners: v.learnersPresent, minutes_late: v.minutesLate, teacher_minutes: Math.round(v.teacherSeconds / 60), meetings: v.meetings } }, async () => ({}), tellOwner);
    }
  }
  return out;
}


/* ---------- Recordings ---------- */
async function proofClips(sb, now, auto) {
  const out = { due: 0, started: 0 };
  if (!auto || !auto.enabled) return out;
  const { data: list, error } = await sb.from('sessions').select(SESSION_COLS).neq('status', 'cancelled')
    .gte('scheduled_at', new Date(now - 125 * MIN).toISOString()).lte('scheduled_at', new Date(now).toISOString()).limit(40);
  if (error) throw new Error('clip sessions: ' + error.message);
  for (const s of list || []) {
    const co = s.cohorts || {}, minutes = co.class_minutes || 60, startMs = new Date(s.scheduled_at).getTime(), elapsed = Math.floor((now - startMs) / MIN);
    if (elapsed > minutes) continue;
    const due = REC.clipMinutes(s.id, minutes).filter((m) => elapsed >= m && elapsed < m + 3);
    if (!due.length) continue;
    const { data: done } = await sb.from('class_recordings').select('kind, planned_minute, start_error').eq('session_id', s.id);
    /* An admin's full recording already proves the class, and Daily runs one recording per room at a time */
    if ((done || []).some((d) => d.kind === 'full' && !d.start_error)) continue;
    const todo = due.filter((m) => !(done || []).some((d) => d.kind === 'proof' && d.planned_minute === m));
    if (!todo.length) continue;
    const room = CV.roomName(s), here = await CV.presentNow(room);
    if (!here.length) continue; /* nobody in the room: nothing to record */
    for (const m of todo.slice(0, 1)) {
      out.due++;
      const r = await AUTO.act(sb, auto, { key: `clip:${s.id}:${m}`, action: 'record a 60-second proof clip', sessionId: s.id, target: classLabel(co), detail: { minute: m, in_room: here.length } }, async () => {
        const { data: row, error: e1 } = await sb.from('class_recordings').insert({ session_id: s.id, room, kind: 'proof', planned_minute: m }).select('id').single();
        if (e1) { if (e1.code === '23505') return { skipped: 'already taken' }; throw new Error('clip row: ' + e1.message); }
        try { await REC.start(room, REC.CLIP_SECONDS); } catch (e) { await sb.from('class_recordings').update({ start_error: String(e.message).slice(0, 300) }).eq('id', row.id); throw e; }
        return {};
      }, tellOwner);
      if (r === 'done') out.started++;
    }
  }
  return out;
}

/* Pairs Daily's recordings of recent class rooms with Alimun's requests; any other is reported (recording-guard) */
async function syncRecordings(sb, now, guard) {
  const out = { rooms: 0, linked: 0, unknown: 0 };
  const { data: sess } = await sb.from('sessions').select('id, room_session_id, scheduled_at, cohorts(language, level, class_minutes)').neq('status', 'cancelled')
    .gte('scheduled_at', new Date(now - 6 * HOUR).toISOString()).lte('scheduled_at', new Date(now + 15 * MIN).toISOString()).limit(60);
  const rooms = {};
  (sess || []).forEach((s) => { rooms[CV.roomName(s)] = rooms[CV.roomName(s)] || s; });
  for (const room of Object.keys(rooms)) {
    let recs;
    try { recs = await REC.list(room); } catch (e) { continue; }
    out.rooms++;
    const recent = recs.filter((r) => (r.start_ts || 0) * 1000 > now - 8 * HOUR);
    if (!recent.length) continue;
    const { data: rows } = await sb.from('class_recordings').select('*').eq('room', room).gte('requested_at', new Date(now - 9 * HOUR).toISOString());
    const pr = REC.pair(rows || [], recent);
    for (const [row, rec] of pr.link.concat(pr.update)) {
      const startMs = (rec.start_ts || 0) * 1000;
      await sb.from('class_recordings').update({ daily_recording_id: rec.id, started_at: new Date(startMs).toISOString(), duration_seconds: rec.duration || null, status: rec.status || null,
        delete_after: row.delete_after || REC.deleteAfter(row.kind, startMs) }).eq('id', row.id);
      out.linked++;
    }
    for (const rec of pr.unknown) {
      out.unknown++;
      const s = rooms[room], startMs = (rec.start_ts || 0) * 1000;
      await sb.from('class_recordings').upsert({ session_id: s.id, room, kind: 'unknown', requested_at: new Date(startMs).toISOString(), daily_recording_id: rec.id, started_at: new Date(startMs).toISOString(),
        duration_seconds: rec.duration || null, status: rec.status || null, delete_after: REC.deleteAfter('unknown', startMs) }, { onConflict: 'daily_recording_id' });
      await AUTO.act(sb, guard, { key: 'unknown:' + rec.id, action: 'report a recording Alimun did not start', sessionId: s.id, target: room, detail: { recording: rec.id } }, async () => {
        await send(OWNER(), 'Alimun: a class was recorded by someone other than Alimun', mail.renderEmail({ hero: 'class', lang: 'en', preheader: 'A recording nobody at Alimun started.', heading: 'An unexpected recording',
          blocks: [{ p: mail.esc(`A recording started at ${timeIn(startMs, 'Europe/Paris')} in the room of ${classLabel(s.cohorts || {})} (${room}) was not started by Alimun. It is kept for 90 days and listed on the class date's page.`) },
            { button: { label: 'See the class date', href: `${mail.SITE}/app/admin#/classlog/${s.id}` } }] }));
      }, tellOwner);
    }
  }
  return out;
}

async function cleanupRecordings(sb, now, auto) {
  const out = { deleted: 0 };
  if (!auto || !auto.enabled) return out;
  const { data: due } = await sb.from('class_recordings').select('id, daily_recording_id, kind, session_id').is('deleted_at', null).eq('keep', false).lte('delete_after', new Date(now).toISOString()).limit(200);
  for (const r of due || []) {
    const res = await AUTO.act(sb, auto, { key: 'delete:' + r.id, action: 'delete a ' + r.kind + ' recording past its date', sessionId: r.session_id, target: r.daily_recording_id }, async () => {
      if (r.daily_recording_id) await REC.remove(r.daily_recording_id);
      await sb.from('class_recordings').update({ deleted_at: new Date().toISOString() }).eq('id', r.id);
    }, tellOwner);
    if (res === 'done') out.deleted++;
  }
  /* Requests that never became a recording (nobody in the room, Daily refused): closed after two days */
  await sb.from('class_recordings').update({ deleted_at: new Date(now).toISOString() }).is('daily_recording_id', null).is('deleted_at', null).lte('requested_at', new Date(now - 2 * DAY).toISOString());
  return out;
}

/* ---------- Morning digest ---------- */
function parisDay(offsetDays) {
  const fmt = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit' });
  return fmt.format(new Date(Date.now() + offsetDays * DAY));
}
/** UTC bounds of a Paris calendar day */
function dayBounds(ymd) {
  const guess = Date.parse(ymd + 'T00:00:00Z');
  const off = (t) => { const p = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Paris', hour12: false, hour: '2-digit' }).format(new Date(t)); return ((+p % 24) - new Date(t).getUTCHours() + 24) % 24; };
  const start = guess - off(guess) * HOUR;
  return [new Date(start).toISOString(), new Date(start + DAY).toISOString()];
}
const OUTCOME = { held: 'held', ended_early: 'ended early', teacher_absent: 'teacher absent', no_learners: 'no learners', not_held: 'did not happen' };
async function digestHtml(sb, ymd) {
  const [from, to] = dayBounds(ymd);
  const { data: tests } = await sb.rpc('admin_test_users').then((r) => r, () => ({ data: [] }));
  const q = (p) => p.then((r) => r.data || [], () => []);
  const [classes, students, teachers, tutor, feedback, money, crons, aiFail, logs] = await Promise.all([
    q(sb.from('sessions').select('id, scheduled_at, status, outcome, minutes_late, learners_present, cohorts(language, level, tier, timezone, teacher_profiles(full_name))').gte('scheduled_at', from).lt('scheduled_at', to).order('scheduled_at')),
    q(sb.from('student_profiles').select('user_id, full_name, language, level').gte('created_at', from).lt('created_at', to)),
    q(sb.from('teacher_profiles').select('full_name, status').gte('created_at', from).lt('created_at', to)),
    q(sb.from('tutor_sessions').select('student_id, seconds_used, mode').gte('started_at', from).lt('started_at', to)),
    q(sb.from('tutor_feedback').select('mood, improve').gte('created_at', from).lt('created_at', to)),
    q(sb.from('entitlements').select('product_key, amount_paid, currency, source').gte('created_at', from).lt('created_at', to)),
    q(sb.from('cron_runs').select('job, ok').gte('ran_at', from).lt('ran_at', to).eq('ok', false)),
    q(sb.from('ai_usage').select('id').gte('created_at', from).lt('created_at', to).eq('success', false)),
    q(sb.from('automation_log').select('automation, dry_run, ok').gte('created_at', from).lt('created_at', to)),
  ]);
  const testIds = new Set((tests || []).map((x) => (typeof x === 'string' ? x : x.admin_test_users)));
  const realStudents = students.filter((s) => !testIds.has(s.user_id) && !isTestAccount({ name: s.full_name }));
  const blocks = [];
  const line = (t) => blocks.push({ p: mail.esc(t) });
  const heldN = classes.filter((c) => c.outcome === 'held').length;
  line(`Classes: ${classes.length} scheduled, ${heldN} held` + (classes.length ? '.' : '. No class was scheduled.'));
  classes.forEach((c) => {
    const co = c.cohorts || {}, t = (co.teacher_profiles && co.teacher_profiles.full_name) || 'no teacher';
    line(`${timeIn(c.scheduled_at, 'Europe/Paris')}  ${classLabel(co)}, ${t}: ${c.status === 'cancelled' ? 'cancelled' : OUTCOME[c.outcome] || 'not verified yet'}` +
      (c.learners_present != null ? `, ${c.learners_present} learner${c.learners_present === 1 ? '' : 's'}` : '') + (c.minutes_late ? `, teacher ${c.minutes_late} min late` : '') + '.');
  });
  line(`New students: ${realStudents.length}` + (realStudents.length ? ` (${realStudents.slice(0, 12).map((s) => `${s.full_name || 'no name'}, ${s.language || ''} ${s.level || ''}`.trim()).join('; ')})` : '') + '. Teacher applications: ' + teachers.length + '.');
  const tutorMin = Math.round(tutor.reduce((a, t) => a + (t.seconds_used || 0), 0) / 60);
  line(`Tutor: ${tutor.length} sessions, ${tutorMin} minutes, ${new Set(tutor.map((t) => t.student_id)).size} learners. Feedback answers: ${feedback.length}` + (feedback.length ? ` (${feedback.map((f) => f.mood + (f.improve ? ': "' + String(f.improve).slice(0, 80) + '"' : '')).join('; ')})` : '') + '.');
  const paid = money.filter((m) => m.source !== 'admin' && m.amount_paid > 0), byCur = {};
  paid.forEach((m) => { byCur[m.currency || 'eur'] = (byCur[m.currency || 'eur'] || 0) + m.amount_paid; });
  line(`Payments: ${paid.length}` + (paid.length ? ` (${Object.keys(byCur).map((c) => (byCur[c] / 100).toFixed(2) + ' ' + c.toUpperCase()).join(', ')})` : '') + '.');
  const failedJobs = {}; crons.forEach((c) => { failedJobs[c.job] = (failedJobs[c.job] || 0) + 1; });
  line(`Problems: ${Object.keys(failedJobs).length ? Object.keys(failedJobs).map((j) => `${j} failed ${failedJobs[j]} time${failedJobs[j] === 1 ? '' : 's'}`).join(', ') : 'no automatic job failed'}; ${aiFail.length} failed AI call${aiFail.length === 1 ? '' : 's'}.`);
  const byAuto = {}; logs.forEach((l) => { const a = byAuto[l.automation] = byAuto[l.automation] || { done: 0, dry: 0, failed: 0 }; if (!l.ok) a.failed++; else if (l.dry_run) a.dry++; else a.done++; });
  line('Automations: ' + (Object.keys(byAuto).length ? Object.keys(byAuto).map((k) => `${k} ${byAuto[k].done} done` + (byAuto[k].dry ? `, ${byAuto[k].dry} in dry run` : '') + (byAuto[k].failed ? `, ${byAuto[k].failed} failed` : '')).join('; ') : 'nothing to do') + '.');
  blocks.push({ button: { label: 'Open the admin', href: `${mail.SITE}/app/admin#/overview` } });
  return { html: mail.renderEmail({ hero: 'update', lang: 'en', preheader: `${heldN} of ${classes.length} classes held, ${realStudents.length} new students`, heading: `Alimun, ${ymd}`, blocks }), held: heldN, classes: classes.length };
}

/* ---------- Router ---------- */
module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const action = String(req.query.action || '');
  const sb = sbAdmin();
  if (!sb) return res.status(500).json({ error: 'not configured' });
  try {
    if (action === 'cron-class-watch') {
      if (!cronOk(req)) return res.status(401).json({ error: 'unauthorized' });
      const now = Date.now(), out = {};
      const late = await AUTO.load(sb, 'teacher-late'), oc = await AUTO.load(sb, 'class-outcomes');
      try { out.late = await lateCheck(sb, now, late); } catch (e) { out.late = { error: String(e.message || e) }; }
      try { out.outcomes = await outcomes(sb, now, oc); } catch (e) { out.outcomes = { error: String(e.message || e) }; }
      try { out.recordings = await syncRecordings(sb, now, await AUTO.load(sb, 'recording-guard')); } catch (e) { out.recordings = { error: String(e.message || e) }; }
      if (new Date(now).getUTCMinutes() < 5) { try { out.cleanup = await cleanupRecordings(sb, now, await AUTO.load(sb, 'recording-cleanup')); } catch (e) { out.cleanup = { error: String(e.message || e) }; } }
      const ok = !(out.late && out.late.error) && !(out.outcomes && out.outcomes.error) && !(out.recordings && out.recordings.error) && !(out.cleanup && out.cleanup.error);
      /* Quiet runs (nothing due) are not recorded every 5 minutes: only work done and failures */
      if (!ok || (out.late && out.late.checked) || (out.outcomes && (out.outcomes.verified || out.outcomes.failed)) || (out.recordings && (out.recordings.linked || out.recordings.unknown)) || (out.cleanup && out.cleanup.deleted)) await recordRun(sb, 'vercel:cron-class-watch', ok, out);
      return res.status(200).json(out);
    }
    if (action === 'cron-clips') {
      if (!cronOk(req)) return res.status(401).json({ error: 'unauthorized' });
      let out;
      try { out = await proofClips(sb, Date.now(), await AUTO.load(sb, 'proof-clips')); } catch (e) { out = { error: String(e.message || e) }; }
      if (out.error || out.due) await recordRun(sb, 'vercel:cron-clips', !out.error, out);
      return res.status(200).json(out);
    }
    if (action === 'cron-digest') {
      if (!cronOk(req)) return res.status(401).json({ error: 'unauthorized' });
      const auto = await AUTO.load(sb, 'daily-digest'), ymd = parisDay(-1);
      const d = await digestHtml(sb, ymd);
      const r = await AUTO.act(sb, auto, { key: 'digest:' + ymd, action: 'email the morning digest', target: OWNER(), detail: { day: ymd, held: d.held, classes: d.classes } },
        () => send(OWNER(), `Alimun yesterday: ${d.held} of ${d.classes} classes held`, d.html).then(() => ({})), tellOwner);
      await recordRun(sb, 'vercel:cron-digest', r !== 'failed', { day: ymd, result: r });
      return res.status(200).json({ day: ymd, result: r });
    }
    if (req.method !== 'POST') return res.status(405).json({ error: 'method not allowed' });
    const me = await adminOf(req, sb);
    if (!me) return res.status(403).json({ error: 'admins only' });
    const b = body(req) || {};
    if (action === 'automation-set') {
      const name = String(b.name || '');
      const { data: a } = await sb.from('automations').select('name').eq('name', name).maybeSingle();
      if (!a) return res.status(404).json({ error: 'no such automation' });
      const patch = { updated_at: new Date().toISOString(), updated_by: me.id };
      if (typeof b.enabled === 'boolean') { patch.enabled = b.enabled; if (b.enabled) Object.assign(patch, { paused_at: null, paused_reason: null, consecutive_failures: 0 }); }
      if (typeof b.dry_run === 'boolean') patch.dry_run = b.dry_run;
      if (Number.isInteger(b.daily_cap) && b.daily_cap >= 0 && b.daily_cap <= 10000) patch.daily_cap = b.daily_cap;
      const { error } = await sb.from('automations').update(patch).eq('name', name);
      if (error) throw new Error(error.message);
      await sb.from('automation_log').insert({ automation: name, key: 'switch:' + Date.now(), action: 'changed by an admin', target: me.email, detail: patch, ok: true });
      return res.status(200).json({ ok: true });
    }
    if (action === 'verify-session') {
      if (!UUID.test(String(b.session || ''))) return res.status(400).json({ error: 'bad session' });
      const { data: s } = await sb.from('sessions').select(SESSION_COLS).eq('id', b.session).maybeSingle();
      if (!s) return res.status(404).json({ error: 'no such class date' });
      const v = await CV.verifySession(sb, s, Date.now());
      return res.status(200).json({ outcome: v.outcome, settled: v.settled, learners: v.learnersPresent, minutes_late: v.minutesLate, meetings: v.meetings, people: v.people.length });
    }
    if (action === 'record-start' || action === 'record-stop') {
      /* Only admins record (the check above); teachers have no way to (owner, 13 Nov 2026) */
      if (!UUID.test(String(b.session || ''))) return res.status(400).json({ error: 'bad session' });
      const { data: s } = await sb.from('sessions').select(SESSION_COLS).eq('id', b.session).maybeSingle();
      if (!s) return res.status(404).json({ error: 'no such class date' });
      const room = CV.roomName(s), co = s.cohorts || {}, startMs = new Date(s.scheduled_at).getTime(), endMs = startMs + (co.class_minutes || 60) * MIN;
      if (action === 'record-stop') {
        await REC.stop(room);
        await sb.from('automation_log').insert({ automation: 'recording-guard', key: 'stop:' + Date.now(), action: 'an admin stopped a recording', target: me.email, session_id: s.id, ok: true });
        return res.status(200).json({ ok: true });
      }
      if (Date.now() < startMs - 15 * MIN || Date.now() > endMs + 90 * MIN) return res.status(409).json({ error: 'The class is not on now.' });
      const here = await CV.presentNow(room);
      if (!here.length) return res.status(409).json({ error: 'Nobody is in the room yet.' });
      const seconds = Math.max(15 * 60, Math.min(3 * 3600, (endMs + 15 * MIN - Date.now()) / 1000));
      const { data: row, error } = await sb.from('class_recordings').insert({ session_id: s.id, room, kind: 'full', requested_by: me.id }).select('id').single();
      if (error) throw new Error(error.message);
      try { await REC.start(room, seconds); } catch (e) { await sb.from('class_recordings').update({ start_error: String(e.message).slice(0, 300) }).eq('id', row.id); return res.status(502).json({ error: e.message }); }
      return res.status(200).json({ ok: true, minutes: Math.round(seconds / 60) });
    }
    if (action === 'recording-link') {
      if (!UUID.test(String(b.id || ''))) return res.status(400).json({ error: 'bad recording' });
      const { data: r } = await sb.from('class_recordings').select('id, daily_recording_id, deleted_at').eq('id', b.id).maybeSingle();
      if (!r || !r.daily_recording_id) return res.status(404).json({ error: 'This recording is not ready yet.' });
      if (r.deleted_at) return res.status(410).json({ error: 'This recording was deleted.' });
      const l = await REC.link(r.daily_recording_id);
      await sb.from('recording_views').insert({ recording_id: r.id, viewer: me.id, viewer_email: me.email });
      return res.status(200).json(l);
    }
    if (action === 'recording-keep') {
      if (!UUID.test(String(b.id || ''))) return res.status(400).json({ error: 'bad recording' });
      const { error } = await sb.from('class_recordings').update({ keep: b.keep === true, keep_note: typeof b.note === 'string' ? b.note.slice(0, 300) : null }).eq('id', b.id);
      if (error) throw new Error(error.message);
      await sb.from('automation_log').insert({ automation: 'recording-cleanup', key: 'keep:' + b.id + ':' + Date.now(), action: b.keep === true ? 'an admin marked a recording to keep' : 'an admin let a recording be deleted when due', target: me.email, detail: { recording: b.id, note: b.note || null }, ok: true });
      return res.status(200).json({ ok: true });
    }
    if (action === 'digest-now') {
      const ymd = parisDay(-1), d = await digestHtml(sb, ymd);
      await send(OWNER(), `[Now] Alimun yesterday: ${d.held} of ${d.classes} classes held`, d.html);
      await sb.from('automation_log').insert({ automation: 'daily-digest', key: 'now:' + Date.now(), action: 'digest sent on request', target: me.email, detail: { day: ymd }, ok: true });
      return res.status(200).json({ ok: true, day: ymd });
    }
    return res.status(400).json({ error: 'unknown action' });
  } catch (e) {
    console.error('[ops]', action, e);
    if (action.startsWith('cron-')) await recordRun(sb, 'vercel:' + action, false, { error: String(e && e.message) });
    return res.status(500).json({ error: String((e && e.message) || 'server error') });
  }
};

module.exports._test = { dayBounds, parisDay };
