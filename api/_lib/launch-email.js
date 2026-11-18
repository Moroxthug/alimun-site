/**
 * The launch class email (owner, 12 Nov 2026): to every English learner, in their dashboard language (English, French,
 * Spanish, German; English otherwise), with the times in their own time zone. A1–A2 learners get the class and the
 * offer; B1 and above get the free class and a line about a class at their level. Marketing: unsubscribe link and
 * header. Each send also leaves a note in the learner's dashboard bell (an offer notification with params.launch), which marks
 * them as sent so nobody gets it twice.
 *
 *   POST /api/pricing?action=admin-launch-email (admin) { mode: 'preview' | 'test' | 'send', confirm }
 *     preview  the recipients (name, language, level, time zone) and the English subject; nothing sent
 *     test     one email per language in use, to the owner's address only
 *     report   what each learner sent the email did next (clicked, bell read, free place, price looked at, reserved)
 *     send     { only: [user ids] } or { all: true }: the learners chosen, or everyone not sent yet; confirm = how many
 *     auto     (the hourly job, when app_settings.launch_email_auto is 'on') everyone not sent yet; at most 50 at a time
 */
const mail = require('./email.js');
const TZ = require('../../js/tz.js');
const LAUNCH = require('./launch.js');
const { isTestAccount } = require('./test-accounts.js');

const LINK = 'https://alimun.com/app#/settings/plans/launch';
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
/* notifications.params.launch = the offer's code: who has been sent this launch's email (a new launch, with a new code,
   goes to everyone again; 18 Nov 2026 the second launch, code launch-en-2) */
const LOCALE = { en: 'en-GB', fr: 'fr-FR', ma: 'fr-FR', es: 'es-ES', de: 'de-DE' };
const WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const TX = {
  en: {
    subject: (d) => `Your first English class is free: ${d}`,
    subjectUpper: (d) => `A free English class with a teacher: ${d}`,
    pre: (d) => `A small live class with a teacher. First class free on ${d}, then one or three classes a week with €10 off.`,
    heading: 'Your first English class is free',
    headingUpper: 'Join our free English class',
    hi: (n) => `Hello ${n},`, hiNo: 'Hello,', parisTime: 'All times are Paris time',
    intro: 'We are starting a small live English class for beginners (A1 and A2), taught by a teacher, and we would like you to be part of it. Come to the first class for free, then choose one class a week or three classes a week.',
    introUpper: 'We are starting live English classes with a teacher, and the first one is free. Come along, meet the teacher and see how the classes work.',
    free: 'Free first class', pack: 'Three classes a week', open: 'One class a week', starts: 'Starts',
    packV: (d, t) => `${d} at ${t}, 12 weeks`, openV: (d, t) => `${d} at ${t}`,
    yourTime: 'All times are in your time zone',
    offerH: '€10 off', offerNow: 'your first payment, for one or three classes a week', offerEnds: (d) => `Sign up by ${d}`,
    rule: (min, d) => `The class goes ahead if at least ${min} people sign up by ${d}. Until then nothing is charged: your card is saved and only charged on the first day. If fewer than ${min} sign up, nothing is charged at all. Your price for your country is shown before you confirm.`,
    upper: (lv) => `This class is for beginners. A class for ${lv} opens as soon as 8 learners at your level are ready, and we will write to you.`,
    button: 'Save my free place', buttonClass: 'Save my free place and see the class',
    note: 'You are getting this email because you have an Alimun account to learn English.',
    bellTitle: 'Your first English class is free', bellBody: (d) => `${d}, live with a teacher. Then one or three classes a week, with €10 off your first payment.`
  },
  fr: {
    subject: (d) => `Votre premier cours d’anglais est gratuit : ${d}`,
    subjectUpper: (d) => `Un cours d’anglais gratuit avec un professeur : ${d}`,
    pre: (d) => `Un petit cours en direct avec un professeur. Premier cours gratuit ${d}, puis un ou trois cours par semaine avec 10 € de réduction.`,
    heading: 'Votre premier cours d’anglais est gratuit',
    headingUpper: 'Rejoignez notre cours d’anglais gratuit',
    hi: (n) => `Bonjour ${n},`, hiNo: 'Bonjour,', parisTime: 'Toutes les heures sont à l’heure de Paris',
    intro: 'Nous lançons un petit cours d’anglais en direct pour débutants (A1 et A2), avec un professeur, et nous aimerions vous y accueillir. Venez au premier cours gratuitement, puis choisissez un cours ou trois cours par semaine.',
    introUpper: 'Nous lançons des cours d’anglais en direct avec un professeur, et le premier est gratuit. Venez rencontrer le professeur et voir comment se passent les cours.',
    free: 'Premier cours gratuit', pack: 'Trois cours par semaine', open: 'Un cours par semaine', starts: 'Début',
    packV: (d, t) => `${d} à ${t}, 12 semaines`, openV: (d, t) => `${d} à ${t}`,
    yourTime: 'Toutes les heures sont à votre heure locale',
    offerH: '10 € de réduction', offerNow: 'sur votre premier paiement, pour un ou trois cours par semaine', offerEnds: (d) => `Inscription avant le ${d}`,
    rule: (min, d) => `Le cours a lieu si au moins ${min} personnes s’inscrivent avant le ${d}. D’ici là, rien n’est débité : votre carte est enregistrée et débitée seulement le premier jour. S’il y a moins de ${min} inscrits, rien n’est débité. Le prix pour votre pays est affiché avant de confirmer.`,
    upper: (lv) => `Ce cours est pour les débutants. Un cours de niveau ${lv} ouvrira dès que 8 apprenants de votre niveau seront prêts, et nous vous écrirons.`,
    button: 'Réserver ma place gratuite', buttonClass: 'Réserver ma place gratuite et voir le cours',
    note: 'Vous recevez cet e-mail parce que vous avez un compte Alimun pour apprendre l’anglais.',
    bellTitle: 'Votre premier cours d’anglais est gratuit', bellBody: (d) => `${d}, en direct avec un professeur. Puis un ou trois cours par semaine, avec 10 € de réduction sur votre premier paiement.`
  },
  es: {
    subject: (d) => `Tu primera clase de inglés es gratis: ${d}`,
    subjectUpper: (d) => `Una clase de inglés gratis con profesor: ${d}`,
    pre: (d) => `Una clase pequeña en directo con profesor. Primera clase gratis el ${d}, después una o tres clases por semana con 10 € de descuento.`,
    heading: 'Tu primera clase de inglés es gratis',
    headingUpper: 'Únete a nuestra clase de inglés gratis',
    hi: (n) => `Hola, ${n}:`, hiNo: 'Hola:', parisTime: 'Todas las horas son en hora de París',
    intro: 'Empezamos una clase pequeña de inglés en directo para principiantes (A1 y A2), con profesor, y nos gustaría que formaras parte. Ven gratis a la primera clase y después elige una clase o tres clases por semana.',
    introUpper: 'Empezamos clases de inglés en directo con profesor, y la primera es gratis. Ven a conocer al profesor y a ver cómo son las clases.',
    free: 'Primera clase gratis', pack: 'Tres clases por semana', open: 'Una clase por semana', starts: 'Empieza',
    packV: (d, t) => `${d} a las ${t}, 12 semanas`, openV: (d, t) => `${d} a las ${t}`,
    yourTime: 'Todas las horas están en tu zona horaria',
    offerH: '10 € de descuento', offerNow: 'en tu primer pago, para una o tres clases por semana', offerEnds: (d) => `Apúntate antes del ${d}`,
    rule: (min, d) => `La clase sale adelante si al menos ${min} personas se apuntan antes del ${d}. Hasta entonces no se cobra nada: tu tarjeta queda guardada y solo se cobra el primer día. Si se apuntan menos de ${min}, no se cobra nada. El precio para tu país se muestra antes de confirmar.`,
    upper: (lv) => `Esta clase es para principiantes. Una clase de ${lv} se abrirá en cuanto haya 8 personas de tu nivel, y te escribiremos.`,
    button: 'Reservar mi plaza gratis', buttonClass: 'Reservar mi plaza gratis y ver la clase',
    note: 'Recibes este correo porque tienes una cuenta de Alimun para aprender inglés.',
    bellTitle: 'Tu primera clase de inglés es gratis', bellBody: (d) => `${d}, en directo con profesor. Después, una o tres clases por semana, con 10 € de descuento en tu primer pago.`
  },
  de: {
    subject: (d) => `Deine erste Englischstunde ist kostenlos: ${d}`,
    subjectUpper: (d) => `Eine kostenlose Englischstunde mit Lehrkraft: ${d}`,
    pre: (d) => `Ein kleiner Live-Kurs mit Lehrkraft. Erste Stunde ${d} kostenlos, danach eine oder drei Stunden pro Woche mit 10 € Rabatt.`,
    heading: 'Deine erste Englischstunde ist kostenlos',
    headingUpper: 'Komm zu unserer kostenlosen Englischstunde',
    hi: (n) => `Hallo ${n},`, hiNo: 'Hallo,', parisTime: 'Alle Zeiten in Pariser Zeit',
    intro: 'Wir starten einen kleinen Live-Englischkurs für Anfänger (A1 und A2) mit Lehrkraft, und wir würden uns freuen, wenn du dabei bist. Die erste Stunde ist kostenlos, danach wählst du eine oder drei Stunden pro Woche.',
    introUpper: 'Wir starten Live-Englischkurse mit Lehrkraft, und die erste Stunde ist kostenlos. Lerne die Lehrkraft kennen und sieh dir an, wie die Kurse laufen.',
    free: 'Kostenlose erste Stunde', pack: 'Drei Stunden pro Woche', open: 'Eine Stunde pro Woche', starts: 'Beginn',
    packV: (d, t) => `${d} um ${t}, 12 Wochen`, openV: (d, t) => `${d} um ${t}`,
    yourTime: 'Alle Zeiten in deiner Zeitzone',
    offerH: '10 € Rabatt', offerNow: 'auf deine erste Zahlung, für eine oder drei Stunden pro Woche', offerEnds: (d) => `Anmeldung bis ${d}`,
    rule: (min, d) => `Der Kurs findet statt, wenn sich bis ${d} mindestens ${min} Personen anmelden. Bis dahin wird nichts abgebucht: Deine Karte wird gespeichert und erst am ersten Tag belastet. Melden sich weniger als ${min} an, wird nichts abgebucht. Der Preis für dein Land wird vor der Bestätigung angezeigt.`,
    upper: (lv) => `Dieser Kurs ist für Anfänger. Ein Kurs für ${lv} startet, sobald 8 Lernende auf deinem Niveau bereit sind, und wir schreiben dir.`,
    button: 'Kostenlosen Platz sichern', buttonClass: 'Kostenlosen Platz sichern und Kurs ansehen',
    note: 'Du bekommst diese E-Mail, weil du ein Alimun-Konto zum Englischlernen hast.',
    bellTitle: 'Deine erste Englischstunde ist kostenlos', bellBody: (d) => `${d}, live mit Lehrkraft. Danach eine oder drei Stunden pro Woche, mit 10 € Rabatt auf deine erste Zahlung.`
  }
};
TX.ma = TX.fr;

function langOf(ui) { return TX[ui] ? ui : 'en'; }
function zoneOf(tz) { return TZ.isValidTimezone(tz) && tz !== 'UTC' && tz !== 'Etc/UTC' ? tz : 'Europe/Paris'; }
function fmt(d, tz, lang, o) { return new Intl.DateTimeFormat(LOCALE[lang] || 'en-GB', Object.assign({ timeZone: tz }, o)).format(d); }
function list(names, lang) { try { return new Intl.ListFormat(LOCALE[lang] || 'en-GB', { type: 'conjunction' }).format(names); } catch (e) { return names.join(', '); } }
function firstWeek(room) {
  const idx = (room.schedule_days || []).map((d) => WEEK.indexOf(d)).filter((i) => i >= 0);
  const from = new Date(Date.parse(room.starts_on + 'T00:00:00Z') - 86400000);
  return TZ.scheduleOccurrences(idx, String(room.schedule_time).slice(0, 5), room.timezone, from).slice(0, idx.length);
}
function firstName(n) { const s = String(n || '').trim().split(/\s+/)[0] || ''; return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }

/** One learner's email: { subject, html, text, lang, upper } */
function build(r, ctx) {
  const lang = langOf(r.ui_lang), x = TX[lang], tz = zoneOf(r.timezone);
  const upper = /^(B1|B2|C1|C2)$/.test(String(r.level || '').slice(0, 2).toUpperCase());
  const deadline = fmt(new Date(ctx.offer.endsAt - 6 * 3600000), tz, lang, { weekday: 'long', day: 'numeric', month: 'long' });
  const pw = firstWeek(ctx.pack), ow = firstWeek(ctx.open);
  const time = (d) => fmt(d, tz, lang, { hour: '2-digit', minute: '2-digit' });
  const facts = [[x.free, fmt(ctx.introAt, tz, lang, { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })]];
  if (!upper) {
    facts.push([x.pack, x.packV(list(pw.map((d) => fmt(d, tz, lang, { weekday: 'long' })), lang), time(pw[0]))]);
    facts.push([x.open, x.openV(list(ow.map((d) => fmt(d, tz, lang, { weekday: 'long' })), lang), time(ow[0]))]);
    facts.push([x.starts, fmt(pw[0], tz, lang, { weekday: 'long', day: 'numeric', month: 'long' })]);
  }
  const freeDay = fmt(ctx.introAt, tz, lang, { weekday: 'long', day: 'numeric', month: 'long' }) + ', ' + time(ctx.introAt);
  const name = firstName(r.name);
  const known = zoneOf(r.timezone) === r.timezone;
  const blocks = [{ p: mail.esc(name ? x.hi(name) : x.hiNo) },
    { p: mail.esc(upper ? x.introUpper : x.intro) }, { facts }, { p: `<span style="font-size:14px">${mail.esc(known ? x.yourTime : x.parisTime)}.</span>` }];
  if (upper) blocks.push({ p: mail.esc(x.upper(String(r.level).slice(0, 2).toUpperCase())) });
  else {
    blocks.push({ offer: { headline: x.offerH, now: x.offerNow, ends: x.offerEnds(deadline) } });
    blocks.push({ p: mail.esc(x.rule(ctx.min, deadline)) });
  }
  blocks.push({ button: { label: upper ? x.button : x.buttonClass, href: (ctx.clickUrl && ctx.clickUrl(r.user_id)) || LINK } });
  const unsub = ctx.unsub ? mail.unsubscribeUrl(r.user_id) : '';
  const out = mail.renderEmail({ hero: 'class-english', preheader: x.pre(freeDay), heading: upper ? x.headingUpper : x.heading, blocks, note: mail.esc(x.note), unsubscribeUrl: unsub, lang });
  return { subject: upper ? x.subjectUpper(freeDay) : x.subject(freeDay), html: out.html, text: out.text, lang, upper, unsub, bell: { title: x.bellTitle, body: x.bellBody(freeDay) } };
}

async function context(sb) {
  const offer = await LAUNCH.offerOf(sb);
  if (!offer || !offer.intro_session) throw new Error('no launch offer');
  const { data: rooms } = await sb.from('cohorts').select('id, product_key, starts_on, schedule_days, schedule_time, timezone, min_learners').in('id', offer.rooms);
  const pack = (rooms || []).find((r) => /^level_/.test(r.product_key)), open = (rooms || []).find((r) => /^open_/.test(r.product_key));
  const { data: s } = await sb.from('sessions').select('scheduled_at').eq('id', offer.intro_session).maybeSingle();
  if (!pack || !open || !s) throw new Error('launch rooms or free class missing');
  return { offer, pack, open, introAt: new Date(s.scheduled_at), min: pack.min_learners || 8, unsub: true };
}

/** English learners (not staff), not sent yet */
async function recipients(sb, exclude, kind) {
  const skip = new Set(exclude || []);
  // English learners at A1, A2, B1 and B2 only (owner, 12 Nov 2026: "only a1 and a2 english for now, also b2 b1 english")
  const { data: people, error } = await sb.from('student_profiles').select('user_id, full_name, level, timezone, ui_lang, language').eq('language', 'English')
    .in('level', LEVELS).limit(500);
  if (error) throw new Error('recipients: ' + error.message);
  const { data: sent } = await sb.from('notifications').select('user_id').eq('kind', 'offer').eq('params->>launch', kind);
  const done = new Set((sent || []).map((x) => x.user_id));
  // Whoever unsubscribed (latest consent withdrawn through the unsubscribe link) is not emailed. Not ticking the offers
  // box at sign-up does not count: the owner chose to send the launch email to every learner, with an unsubscribe link.
  const { data: off } = await sb.from('marketing_consent_current').select('user_id').eq('granted', false).eq('source', 'unsubscribe');
  (off || []).forEach((x) => done.add(x.user_id));
  const out = [];
  for (const p of people || []) {
    if (done.has(p.user_id) || skip.has(p.user_id)) continue;
    const { data: u } = await sb.auth.admin.getUserById(p.user_id);
    const user = u && u.user;
    if (!user || !user.email || (user.app_metadata && ['admin', 'teacher'].includes(user.app_metadata.role))) continue;
    // The owner's test accounts get tests only ("Send me a test"), never the real send
    if (isTestAccount({ email: user.email, name: p.full_name, app_metadata: user.app_metadata })) continue;
    out.push({ user_id: p.user_id, email: user.email, name: p.full_name, level: p.level, timezone: p.timezone, ui_lang: p.ui_lang });
  }
  return out;
}

/* The launch email is recorded as a campaign (Admin → Campaigns shows it): campaign_recipients holds who was emailed and
   when they clicked the button, through the campaigns' signed click link (/api/campaigns?action=click), which then
   goes on to the class page. No open tracking: a hidden pixel needs consent in the EU and mail apps open emails on
   their own. */
async function campaignOf(sb, create, kind) {
  const { data } = await sb.from('campaigns').select('id, recipients, emailed').eq('audience->>launch', kind).limit(1);
  if (data && data.length) return data[0];
  if (!create) return null;
  const { data: c, error } = await sb.from('campaigns').insert({ subject: 'Launch class (' + kind + '): free first class, then one or three classes a week',
    heading: 'Your first English class is free', body: 'The launch class email (api/_lib/launch-email.js), in the learner\u2019s language, with their own times.',
    button_label: 'See the class', button_link: LINK, hero: 'class-english', channels: ['email', 'inapp'], audience: { launch: kind } }).select('id, recipients, emailed').single();
  if (error) throw new Error('campaign: ' + error.message);
  return c;
}
function clickUrlFor(campaignId) {
  return (userId) => {
    const sig = mail.linkSig(`${campaignId}:${userId}`);
    return sig ? `${mail.SITE}/api/campaigns?action=click&c=${campaignId}&u=${userId}&s=${sig}` : LINK;
  };
}
/** What each learner who was sent the email did next: clicked, read the bell note, free place, price, reservation. */
async function report(sb, ctx) {
  const camp = await campaignOf(sb, false, ctx.offer.code);
  if (!camp) return { campaign: null, people: [] };
  const { data: rec } = await sb.from('campaign_recipients').select('user_id, emailed, clicked_at, created_at').eq('campaign_id', camp.id);
  const ids = (rec || []).map((r) => r.user_id);
  if (!ids.length) return { campaign: camp.id, people: [] };
  const [{ data: prof }, { data: notes }, { data: passes }, { data: quotes }, { data: ents }, { data: acts }] = await Promise.all([
    sb.from('student_profiles').select('user_id, full_name, level').in('user_id', ids),
    sb.from('notifications').select('user_id, read_at').eq('params->>launch', ctx.offer.code).in('user_id', ids),
    ctx.offer.intro_session ? sb.from('entitlements').select('user_id, created_at').eq('session_id', ctx.offer.intro_session).eq('status', 'active').in('user_id', ids) : Promise.resolve({ data: [] }),
    sb.from('quotes').select('user_id, product_key, created_at').in('cohort_id', ctx.offer.rooms).in('user_id', ids),
    sb.from('entitlements').select('user_id, product_key, cadence, status, created_at').in('cohort_id', ctx.offer.rooms).in('user_id', ids),
    sb.from('activity_events').select('user_id, created_at').in('user_id', ids).order('created_at', { ascending: false }).limit(2000)
  ]);
  const by = (list) => { const m = {}; (list || []).forEach((x) => { (m[x.user_id] = m[x.user_id] || []).push(x); }); return m; };
  const P = by(prof), N = by(notes), F = by(passes), Q = by(quotes), E = by(ents), A = by(acts);
  return { campaign: camp.id, people: (rec || []).map((r) => {
    const sentAt = r.created_at, after = (A[r.user_id] || []).filter((a) => a.created_at > sentAt);
    const ent = (E[r.user_id] || []).filter((e) => ['pending_room', 'active', 'paused'].includes(e.status))[0] || null;
    return { name: (P[r.user_id] || [{}])[0].full_name || '', level: (P[r.user_id] || [{}])[0].level || '', sentAt, emailed: r.emailed,
      clickedAt: r.clicked_at, bellReadAt: ((N[r.user_id] || [])[0] || {}).read_at || null, freeClassAt: ((F[r.user_id] || [])[0] || {}).created_at || null,
      pricedAt: (Q[r.user_id] || []).map((q) => q.created_at).sort().pop() || null, reserved: ent ? { product: ent.product_key, cadence: ent.cadence, at: ent.created_at } : null,
      lastSeen: after.length ? after[0].created_at : null };
  }).sort((a, b) => (b.reserved ? 4 : b.pricedAt ? 3 : b.freeClassAt ? 2 : b.clickedAt ? 1 : 0) - (a.reserved ? 4 : a.pricedAt ? 3 : a.freeClassAt ? 2 : a.clickedAt ? 1 : 0)) };
}

async function run(sb, mode, opts) {
  const ctx = await context(sb);
  if (mode === 'report') return report(sb, ctx);
  const list = await recipients(sb, ctx.offer.exclude, ctx.offer.code);
  if (mode === 'preview') {
    return { count: list.length, people: list.map((r) => { const e = build(r, ctx); return { id: r.user_id, name: r.name, level: r.level, timezone: r.timezone, lang: e.lang, beginner: !e.upper, subject: e.subject }; }) };
  }
  if (mode === 'test') {
    const seen = new Set(), sent = [];
    for (const r of list) {
      const e = build(r, ctx), k = e.lang + (e.upper ? '+' : '');
      if (seen.has(k)) continue;
      seen.add(k);
      const ok = await mail.sendEmail({ to: opts.ownerEmail, subject: '[Test] ' + e.subject, html: e.html, text: e.text });
      sent.push({ lang: e.lang, beginner: !e.upper, ok });
    }
    return { tests: sent };
  }
  if (mode === 'send' || mode === 'auto') {
    // send: the learners the owner chose, or everyone still on the list with all: true (confirm = how many the owner saw);
    // auto: everyone on the list, from the hourly job when the owner has switched automatic sending on.
    // Each must still be on the list (English A1–B2, not sent yet, not excluded, not a test account).
    let chosen;
    if (mode === 'auto' || opts.all === true) chosen = list;
    else {
      const want = new Set(Array.isArray(opts.only) ? opts.only.filter((x) => typeof x === 'string') : []);
      chosen = list.filter((r) => want.has(r.user_id));
      if (chosen.length !== want.size) return { error: 'count_changed', count: chosen.length };
    }
    if (!chosen.length) return mode === 'auto' ? { sent: 0, failed: [] } : { error: 'nobody_chosen' };
    if (mode === 'send' && Number(opts.confirm) !== chosen.length) return { error: 'count_changed', count: chosen.length };
    if (mode === 'auto' && chosen.length > 50) return { error: 'too_many_for_auto', count: chosen.length };
    const camp = await campaignOf(sb, true, ctx.offer.code);
    const sendCtx = Object.assign({}, ctx, { clickUrl: clickUrlFor(camp.id) });
    let ok = 0; const failed = [];
    for (const r of chosen) {
      const e = build(r, sendCtx);
      const sentOk = await mail.sendEmail({ to: r.email, subject: e.subject, html: e.html, text: e.text, unsubscribeUrl: e.unsub });
      await sb.from('campaign_recipients').upsert({ campaign_id: camp.id, user_id: r.user_id, emailed: !!sentOk }, { onConflict: 'campaign_id,user_id' });
      await sb.from('notifications').insert({ user_id: r.user_id, kind: 'offer', params: { launch: ctx.offer.code }, title: e.bell.title, body: e.bell.body, link: '/app#/settings/plans/launch', campaign_id: camp.id });
      if (sentOk) ok++; else failed.push(r.email);
    }
    await sb.from('campaigns').update({ recipients: (camp.recipients || 0) + chosen.length, emailed: (camp.emailed || 0) + ok, sent_at: new Date().toISOString() }).eq('id', camp.id);
    return { sent: ok, failed };
  }
  return { error: 'bad_mode' };
}

/* ---------- The reminder and the follow-up (owner, 18 Nov 2026) ----------
   remind  on the free class's day (offer.remind_at): everyone sent the launch email who has no free place yet.
   follow  the day after (offer.follow_at): those who came (session_attendance on the free class) and those who saved
           a place but did not come, each with their own text; anyone who already reserved is left out.
   Each step is its own campaign (audience.launch = code + '-remind' / '-follow') and leaves a dashboard note, so
   nobody gets a step twice. The hourly job sends a step during the 12 hours after its time. */
const STEP_TX = {
  en: {
    rSubject: (t) => `Tonight at ${t}: your free English class`, rSubjectUp: (t) => `Tonight at ${t}: a free English class with a teacher`,
    rHeading: 'Your free English class is tonight',
    rBody: (d) => `Your free English class is tonight, ${d} your time. It is one hour, live, with the teacher of the class, in a small group of beginners (A1 and A2). Bring your questions.`,
    rBody2: 'Save your place in one click, and the join button appears under Classes 15 minutes before the class starts.',
    rBodyUp: (d) => `Our free English class is tonight, ${d} your time: one hour, live, with a teacher. It is a beginners' class, and you are welcome to come, meet the teacher and see how our classes work. We will write to you when a class at your level opens.`,
    rAfter: (d) => `After the class you can choose one class a week or three classes a week, with €10 off your first payment if you sign up by ${d}.`,
    rButton: 'Save my free place',
    cSubject: (d) => `Thank you for coming. Your class starts ${d}`, cHeading: 'Thank you for coming',
    cBody: 'Thank you for joining yesterday’s class. We hope you enjoyed it.',
    cBody2: (d, t) => `The class starts on ${d} at ${t} your time, with the same teacher. Choose what suits you: three classes a week (${'{days}'}) for 12 weeks, or one class a week, on ${'{open}'}.`,
    cBody3: (d, min) => `Sign up by ${d} and you get €10 off your first payment. Your card is only charged on the first day, and only if the class goes ahead: it needs ${min} people. Your price for your country is shown before you confirm.`,
    cButton: 'Choose my class',
    mSubject: 'We missed you yesterday', mHeading: 'We missed you yesterday',
    mBody: (d, t, dl) => `We missed you at yesterday's free class. No problem: the class itself starts on ${d} at ${t} your time, and you can still join, with €10 off your first payment if you sign up by ${dl}. Nothing is charged before the first day.`,
    mButton: 'See the class',
    note: 'You are getting this email because you have an Alimun account to learn English.',
    bellR: 'Your free English class is tonight', bellC: 'Your class starts soon, with €10 off', bellM: 'We missed you yesterday'
  },
  fr: {
    rSubject: (t) => `Ce soir à ${t} : votre cours d’anglais gratuit`, rSubjectUp: (t) => `Ce soir à ${t} : un cours d’anglais gratuit avec un professeur`,
    rHeading: 'Votre cours d’anglais gratuit, c’est ce soir',
    rBody: (d) => `Votre cours d’anglais gratuit a lieu ce soir, ${d} à votre heure. Une heure, en direct, avec le professeur du cours, en petit groupe de débutants (A1 et A2). Venez avec vos questions.`,
    rBody2: 'Réservez votre place en un clic : le bouton pour rejoindre apparaît dans Cours 15 minutes avant le début.',
    rBodyUp: (d) => `Notre cours d’anglais gratuit a lieu ce soir, ${d} à votre heure : une heure, en direct, avec un professeur. C’est un cours pour débutants, et vous pouvez venir rencontrer le professeur et voir comment se passent nos cours. Nous vous écrirons quand un cours de votre niveau ouvrira.`,
    rAfter: (d) => `Après le cours, vous pourrez choisir un cours ou trois cours par semaine, avec 10 € de réduction sur votre premier paiement si vous vous inscrivez avant le ${d}.`,
    rButton: 'Réserver ma place gratuite',
    cSubject: (d) => `Merci pour votre présence. Votre cours commence ${d}`, cHeading: 'Merci pour votre présence',
    cBody: 'Merci d’avoir participé au cours d’hier. Nous espérons qu’il vous a plu.',
    cBody2: (d, t) => `Le cours commence ${d} à ${t} à votre heure, avec le même professeur. Choisissez ce qui vous convient : trois cours par semaine (${'{days}'}) pendant 12 semaines, ou un cours par semaine, le ${'{open}'}.`,
    cBody3: (d, min) => `Inscrivez-vous avant le ${d} et vous aurez 10 € de réduction sur votre premier paiement. Votre carte n’est débitée que le premier jour, et seulement si le cours a lieu : il faut ${min} personnes. Le prix pour votre pays est affiché avant de confirmer.`,
    cButton: 'Choisir mon cours',
    mSubject: 'Vous nous avez manqué hier', mHeading: 'Vous nous avez manqué hier',
    mBody: (d, t, dl) => `Vous nous avez manqué au cours gratuit d’hier. Pas de souci : le cours commence ${d} à ${t} à votre heure, et vous pouvez encore le rejoindre, avec 10 € de réduction sur votre premier paiement si vous vous inscrivez avant le ${dl}. Rien n’est débité avant le premier jour.`,
    mButton: 'Voir le cours',
    note: 'Vous recevez cet e-mail parce que vous avez un compte Alimun pour apprendre l’anglais.',
    bellR: 'Votre cours d’anglais gratuit, c’est ce soir', bellC: 'Votre cours commence bientôt, avec 10 € de réduction', bellM: 'Vous nous avez manqué hier'
  },
  es: {
    rSubject: (t) => `Esta noche a las ${t}: tu clase de inglés gratis`, rSubjectUp: (t) => `Esta noche a las ${t}: una clase de inglés gratis con profesor`,
    rHeading: 'Tu clase de inglés gratis es esta noche',
    rBody: (d) => `Tu clase de inglés gratis es esta noche, ${d} en tu hora. Una hora, en directo, con el profesor de la clase, en un grupo pequeño de principiantes (A1 y A2). Trae tus preguntas.`,
    rBody2: 'Reserva tu plaza con un clic: el botón para entrar aparece en Clases 15 minutos antes de empezar.',
    rBodyUp: (d) => `Nuestra clase de inglés gratis es esta noche, ${d} en tu hora: una hora, en directo, con profesor. Es una clase para principiantes, y puedes venir a conocer al profesor y ver cómo son nuestras clases. Te escribiremos cuando abra una clase de tu nivel.`,
    rAfter: (d) => `Después de la clase podrás elegir una clase o tres clases por semana, con 10 € de descuento en tu primer pago si te apuntas antes del ${d}.`,
    rButton: 'Reservar mi plaza gratis',
    cSubject: (d) => `Gracias por venir. Tu clase empieza el ${d}`, cHeading: 'Gracias por venir',
    cBody: 'Gracias por venir a la clase de ayer. Esperamos que te haya gustado.',
    cBody2: (d, t) => `La clase empieza el ${d} a las ${t} en tu hora, con el mismo profesor. Elige lo que mejor te venga: tres clases por semana (${'{days}'}) durante 12 semanas, o una clase por semana, los ${'{open}'}.`,
    cBody3: (d, min) => `Apúntate antes del ${d} y tendrás 10 € de descuento en tu primer pago. Tu tarjeta solo se cobra el primer día, y solo si la clase sale adelante: hacen falta ${min} personas. El precio para tu país se muestra antes de confirmar.`,
    cButton: 'Elegir mi clase',
    mSubject: 'Te echamos de menos ayer', mHeading: 'Te echamos de menos ayer',
    mBody: (d, t, dl) => `Te echamos de menos en la clase gratis de ayer. No pasa nada: la clase empieza el ${d} a las ${t} en tu hora, y todavía puedes apuntarte, con 10 € de descuento en tu primer pago si te apuntas antes del ${dl}. No se cobra nada antes del primer día.`,
    mButton: 'Ver la clase',
    note: 'Recibes este correo porque tienes una cuenta de Alimun para aprender inglés.',
    bellR: 'Tu clase de inglés gratis es esta noche', bellC: 'Tu clase empieza pronto, con 10 € de descuento', bellM: 'Te echamos de menos ayer'
  },
  de: {
    rSubject: (t) => `Heute um ${t}: deine kostenlose Englischstunde`, rSubjectUp: (t) => `Heute um ${t}: eine kostenlose Englischstunde mit Lehrkraft`,
    rHeading: 'Deine kostenlose Englischstunde ist heute Abend',
    rBody: (d) => `Deine kostenlose Englischstunde ist heute Abend, ${d} deine Zeit. Eine Stunde, live, mit der Lehrkraft des Kurses, in einer kleinen Anfängergruppe (A1 und A2). Bring deine Fragen mit.`,
    rBody2: 'Sichere dir deinen Platz mit einem Klick: Der Button zum Beitreten erscheint unter Kurse 15 Minuten vor Beginn.',
    rBodyUp: (d) => `Unsere kostenlose Englischstunde ist heute Abend, ${d} deine Zeit: eine Stunde, live, mit Lehrkraft. Es ist ein Anfängerkurs, und du bist willkommen, die Lehrkraft kennenzulernen und zu sehen, wie unsere Kurse laufen. Wir schreiben dir, wenn ein Kurs auf deinem Niveau startet.`,
    rAfter: (d) => `Nach der Stunde kannst du eine oder drei Stunden pro Woche wählen, mit 10 € Rabatt auf deine erste Zahlung, wenn du dich bis ${d} anmeldest.`,
    rButton: 'Kostenlosen Platz sichern',
    cSubject: (d) => `Danke fürs Kommen. Dein Kurs beginnt am ${d}`, cHeading: 'Danke fürs Kommen',
    cBody: 'Danke, dass du gestern dabei warst. Wir hoffen, es hat dir gefallen.',
    cBody2: (d, t) => `Der Kurs beginnt am ${d} um ${t} deine Zeit, mit derselben Lehrkraft. Wähle, was zu dir passt: drei Stunden pro Woche (${'{days}'}) für 12 Wochen oder eine Stunde pro Woche, am ${'{open}'}.`,
    cBody3: (d, min) => `Melde dich bis ${d} an und du bekommst 10 € Rabatt auf deine erste Zahlung. Deine Karte wird erst am ersten Tag belastet, und nur wenn der Kurs stattfindet: Es braucht ${min} Personen. Der Preis für dein Land wird vor der Bestätigung angezeigt.`,
    cButton: 'Meinen Kurs wählen',
    mSubject: 'Wir haben dich gestern vermisst', mHeading: 'Wir haben dich gestern vermisst',
    mBody: (d, t, dl) => `Wir haben dich gestern bei der kostenlosen Stunde vermisst. Kein Problem: Der Kurs beginnt am ${d} um ${t} deine Zeit, und du kannst noch dazukommen, mit 10 € Rabatt auf deine erste Zahlung, wenn du dich bis ${dl} anmeldest. Vor dem ersten Tag wird nichts abgebucht.`,
    mButton: 'Kurs ansehen',
    note: 'Du bekommst diese E-Mail, weil du ein Alimun-Konto zum Englischlernen hast.',
    bellR: 'Deine kostenlose Englischstunde ist heute Abend', bellC: 'Dein Kurs beginnt bald, mit 10 € Rabatt', bellM: 'Wir haben dich gestern vermisst'
  }
};
STEP_TX.ma = STEP_TX.fr;

/** One learner's reminder or follow-up: step is 'remind', 'came' or 'missed'. */
function buildStep(step, r, ctx) {
  const lang = STEP_TX[r.ui_lang] ? r.ui_lang : 'en', x = STEP_TX[lang], tz = zoneOf(r.timezone);
  const upper = /^(B1|B2|C1|C2)$/.test(String(r.level || '').slice(0, 2).toUpperCase());
  const time = (d) => fmt(d, tz, lang, { hour: '2-digit', minute: '2-digit' });
  const day = (d) => fmt(d, tz, lang, { weekday: 'long', day: 'numeric', month: 'long' });
  const deadline = day(new Date(ctx.offer.endsAt - 6 * 3600000));
  const pw = firstWeek(ctx.pack), ow = firstWeek(ctx.open);
  const packDays = list(pw.map((d) => fmt(d, tz, lang, { weekday: 'long' })), lang), openDay = fmt(ow[0], tz, lang, { weekday: 'long' });
  const T = TX[lang] || TX.en, name = firstName(r.name), blocks = [{ p: mail.esc(name ? T.hi(name) : T.hiNo) }];
  let subject, heading, button, bell;
  if (step === 'remind') {
    const when = day(ctx.introAt) + ', ' + time(ctx.introAt);
    subject = upper ? x.rSubjectUp(time(ctx.introAt)) : x.rSubject(time(ctx.introAt)); heading = x.rHeading; button = x.rButton; bell = x.bellR;
    if (upper) blocks.push({ p: mail.esc(x.rBodyUp(when)) });
    else { blocks.push({ p: mail.esc(x.rBody(when)) }, { p: mail.esc(x.rBody2) }, { p: mail.esc(x.rAfter(deadline)) }); }
  } else if (step === 'came') {
    subject = x.cSubject(day(pw[0])); heading = x.cHeading; button = x.cButton; bell = x.bellC;
    blocks.push({ p: mail.esc(x.cBody) }, { p: mail.esc(x.cBody2(day(pw[0]), time(pw[0])).replace('{days}', packDays).replace('{open}', openDay)) }, { p: mail.esc(x.cBody3(deadline, ctx.min)) });
  } else {
    subject = x.mSubject; heading = x.mHeading; button = x.mButton; bell = x.bellM;
    blocks.push({ p: mail.esc(x.mBody(day(pw[0]), time(pw[0]), deadline)) });
  }
  blocks.push({ button: { label: button, href: (ctx.clickUrl && ctx.clickUrl(r.user_id)) || LINK } });
  const unsub = ctx.unsub ? mail.unsubscribeUrl(r.user_id) : '';
  const out = mail.renderEmail({ hero: 'class-english', preheader: subject, heading, blocks, note: mail.esc(x.note), unsubscribeUrl: unsub, lang });
  return { subject, html: out.html, text: out.text, lang, unsub, bell: { title: bell, body: subject } };
}

/** Who gets a step now: [{ r, step }] */
async function stepAudience(sb, ctx, which) {
  const code = ctx.offer.code, kind = code + '-' + which;
  const main = await campaignOf(sb, false, code);
  if (!main) return { kind, list: [] };
  const { data: rec } = await sb.from('campaign_recipients').select('user_id').eq('campaign_id', main.id);
  const ids = (rec || []).map((x) => x.user_id);
  if (!ids.length) return { kind, list: [] };
  const [{ data: done }, { data: off }, { data: passes }, { data: reserved }, { data: profs }] = await Promise.all([
    sb.from('notifications').select('user_id').eq('kind', 'offer').eq('params->>launch', kind),
    sb.from('marketing_consent_current').select('user_id').eq('granted', false).eq('source', 'unsubscribe'),
    sb.from('entitlements').select('user_id').eq('session_id', ctx.offer.intro_session).eq('status', 'active'),
    sb.from('entitlements').select('user_id').in('cohort_id', ctx.offer.rooms).in('status', ['pending_room', 'active', 'paused']),
    sb.from('student_profiles').select('id, user_id, full_name, level, timezone, ui_lang').in('user_id', ids)
  ]);
  const skip = new Set([...(done || []), ...(off || [])].map((x) => x.user_id).concat(ctx.offer.exclude || []));
  const hasPass = new Set((passes || []).map((x) => x.user_id)), hasRoom = new Set((reserved || []).map((x) => x.user_id));
  let came = new Set();
  if (which === 'follow') {
    const { data: att } = await sb.from('session_attendance').select('student_id').eq('session_id', ctx.offer.intro_session);
    came = new Set((att || []).map((x) => x.student_id));
  }
  const list = [];
  for (const p of profs || []) {
    if (skip.has(p.user_id)) continue;
    if (which === 'remind' && hasPass.has(p.user_id)) continue;
    if (which === 'follow' && (hasRoom.has(p.user_id) || !hasPass.has(p.user_id))) continue;
    const { data: u } = await sb.auth.admin.getUserById(p.user_id);
    const user = u && u.user;
    if (!user || !user.email || isTestAccount({ email: user.email, name: p.full_name, app_metadata: user.app_metadata })) continue;
    list.push({ step: which === 'remind' ? 'remind' : came.has(p.id) ? 'came' : 'missed',
      r: { user_id: p.user_id, email: user.email, name: p.full_name, level: p.level, timezone: p.timezone, ui_lang: p.ui_lang } });
  }
  return { kind, list };
}

/** The hourly job: sends a step during the 12 hours after its time. mode 'preview-remind' / 'preview-follow' lists who. */
async function steps(sb, opts) {
  const ctx = await context(sb), now = (opts && opts.now) || Date.now(), out = {};
  for (const [which, at] of [['remind', ctx.offer.remindAt], ['follow', ctx.offer.followAt]]) {
    const preview = opts && opts.preview === which;
    if (!preview && (!at || now < at || now > at + 12 * 3600000)) continue;
    const { kind, list } = await stepAudience(sb, ctx, which);
    if (preview) { out[which] = list.map((x) => ({ name: x.r.name, level: x.r.level, step: x.step, lang: STEP_TX[x.r.ui_lang] ? x.r.ui_lang : 'en' })); continue; }
    if (!list.length) { out[which] = { sent: 0 }; continue; }
    const camp = await campaignOf(sb, true, kind);
    const sendCtx = Object.assign({}, ctx, { clickUrl: clickUrlFor(camp.id) });
    let ok = 0; const failed = [];
    for (const { r, step } of list) {
      const e = buildStep(step, r, sendCtx);
      const sentOk = await mail.sendEmail({ to: r.email, subject: e.subject, html: e.html, text: e.text, unsubscribeUrl: e.unsub });
      await sb.from('campaign_recipients').upsert({ campaign_id: camp.id, user_id: r.user_id, emailed: !!sentOk }, { onConflict: 'campaign_id,user_id' });
      await sb.from('notifications').insert({ user_id: r.user_id, kind: 'offer', params: { launch: kind, step }, title: e.bell.title, body: e.bell.body, link: '/app#/settings/plans/launch', campaign_id: camp.id });
      if (sentOk) ok++; else failed.push(r.email);
    }
    await sb.from('campaigns').update({ recipients: (camp.recipients || 0) + list.length, emailed: (camp.emailed || 0) + ok, sent_at: new Date().toISOString() }).eq('id', camp.id);
    out[which] = { sent: ok, failed };
  }
  return out;
}

module.exports = { build, buildStep, run, steps, recipients, TX, STEP_TX };
