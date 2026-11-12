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
 *     send     everyone not sent yet; confirm must equal the number previewed
 */
const mail = require('./email.js');
const TZ = require('../../js/tz.js');
const LAUNCH = require('./launch.js');

const LINK = 'https://alimun.com/app#/settings/plans/launch';
const KIND = 'launch-en-a1'; /* notifications.params.launch: who has been sent the launch email */
const LOCALE = { en: 'en-GB', fr: 'fr-FR', ma: 'fr-FR', es: 'es-ES', de: 'de-DE' };
const WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const TX = {
  en: {
    subject: 'Your English class starts Monday. The first class is free',
    subjectUpper: 'A free English class with a teacher on Saturday',
    pre: 'A small live class with a teacher. First class free on Saturday, €10 off your first payment.',
    heading: 'Your English class starts on Monday',
    headingUpper: 'Join our free English class on Saturday',
    hi: (n) => `Hello ${n},`, hiNo: 'Hello,', parisTime: 'All times are Paris time',
    intro: 'We are starting a small live English class for beginners (A1 and A2), taught by a teacher, and we would like you to be part of it.',
    introUpper: 'We are starting live English classes with a teacher, and the first one is free. Come along, meet the teacher and see how the classes work.',
    free: 'Free first class', pack: 'Level pack', open: 'Open class', starts: 'Starts',
    packV: (d, t) => `${d} at ${t}, 12 weeks`, openV: (d, t) => `${d} at ${t}`,
    yourTime: 'All times are in your time zone',
    offerH: '€10 off', offerNow: 'your first payment, on the level pack or the open class', offerEnds: (d) => `Sign up by ${d}`,
    rule: (min, d) => `The class goes ahead if at least ${min} people sign up by ${d}. Until then nothing is charged: your card is saved and only charged on the first day. If fewer than ${min} sign up, nothing is charged at all. Your price for your country is shown before you confirm.`,
    upper: (lv) => `This first class is for beginners. A class for ${lv} opens as soon as 8 learners at your level are ready, and we will write to you.`,
    button: 'Save my free place', buttonClass: 'See the class and sign up',
    note: 'You are getting this email because you have an Alimun account to learn English.',
    bellTitle: 'Your first English class is free', bellBody: 'Saturday, live with a teacher. Then a small class from Monday, with €10 off your first payment.'
  },
  fr: {
    subject: 'Votre cours d’anglais commence lundi. Le premier cours est gratuit',
    subjectUpper: 'Un cours d’anglais gratuit avec un professeur samedi',
    pre: 'Un petit cours en direct avec un professeur. Premier cours gratuit samedi, 10 € de réduction sur votre premier paiement.',
    heading: 'Votre cours d’anglais commence lundi',
    headingUpper: 'Rejoignez notre cours d’anglais gratuit samedi',
    hi: (n) => `Bonjour ${n},`, hiNo: 'Bonjour,', parisTime: 'Toutes les heures sont à l\u2019heure de Paris',
    intro: 'Nous lançons un petit cours d’anglais en direct pour débutants (A1 et A2), avec un professeur, et nous aimerions vous y accueillir.',
    introUpper: 'Nous lançons des cours d’anglais en direct avec un professeur, et le premier est gratuit. Venez rencontrer le professeur et voir comment se passent les cours.',
    free: 'Premier cours gratuit', pack: 'Pack de niveau', open: 'Cours ouvert', starts: 'Début',
    packV: (d, t) => `${d} à ${t}, 12 semaines`, openV: (d, t) => `${d} à ${t}`,
    yourTime: 'Toutes les heures sont à votre heure locale',
    offerH: '10 € de réduction', offerNow: 'sur votre premier paiement, pack de niveau ou cours ouvert', offerEnds: (d) => `Inscription avant le ${d}`,
    rule: (min, d) => `Le cours a lieu si au moins ${min} personnes s’inscrivent avant le ${d}. D’ici là, rien n’est débité : votre carte est enregistrée et débitée seulement le premier jour. S’il y a moins de ${min} inscrits, rien n’est débité. Le prix pour votre pays est affiché avant de confirmer.`,
    upper: (lv) => `Ce premier cours est pour les débutants. Un cours de niveau ${lv} ouvrira dès que 8 apprenants de votre niveau seront prêts, et nous vous écrirons.`,
    button: 'Réserver ma place gratuite', buttonClass: 'Voir le cours et s’inscrire',
    note: 'Vous recevez cet e-mail parce que vous avez un compte Alimun pour apprendre l’anglais.',
    bellTitle: 'Votre premier cours d’anglais est gratuit', bellBody: 'Samedi, en direct avec un professeur. Puis un petit cours dès lundi, avec 10 € de réduction sur votre premier paiement.'
  },
  es: {
    subject: 'Tu clase de inglés empieza el lunes. La primera clase es gratis',
    subjectUpper: 'Una clase de inglés gratis con profesor el sábado',
    pre: 'Una clase pequeña en directo con profesor. Primera clase gratis el sábado, 10 € de descuento en tu primer pago.',
    heading: 'Tu clase de inglés empieza el lunes',
    headingUpper: 'Únete a nuestra clase de inglés gratis el sábado',
    hi: (n) => `Hola, ${n}:`, hiNo: 'Hola:', parisTime: 'Todas las horas son en hora de París',
    intro: 'Empezamos una clase pequeña de inglés en directo para principiantes (A1 y A2), con profesor, y nos gustaría que formaras parte.',
    introUpper: 'Empezamos clases de inglés en directo con profesor, y la primera es gratis. Ven a conocer al profesor y a ver cómo son las clases.',
    free: 'Primera clase gratis', pack: 'Pack de nivel', open: 'Clase abierta', starts: 'Empieza',
    packV: (d, t) => `${d} a las ${t}, 12 semanas`, openV: (d, t) => `${d} a las ${t}`,
    yourTime: 'Todas las horas están en tu zona horaria',
    offerH: '10 € de descuento', offerNow: 'en tu primer pago, pack de nivel o clase abierta', offerEnds: (d) => `Apúntate antes del ${d}`,
    rule: (min, d) => `La clase sale adelante si al menos ${min} personas se apuntan antes del ${d}. Hasta entonces no se cobra nada: tu tarjeta queda guardada y solo se cobra el primer día. Si se apuntan menos de ${min}, no se cobra nada. El precio para tu país se muestra antes de confirmar.`,
    upper: (lv) => `Esta primera clase es para principiantes. Una clase de ${lv} se abrirá en cuanto haya 8 personas de tu nivel, y te escribiremos.`,
    button: 'Reservar mi plaza gratis', buttonClass: 'Ver la clase y apuntarme',
    note: 'Recibes este correo porque tienes una cuenta de Alimun para aprender inglés.',
    bellTitle: 'Tu primera clase de inglés es gratis', bellBody: 'El sábado, en directo con profesor. Después, una clase pequeña desde el lunes, con 10 € de descuento en tu primer pago.'
  },
  de: {
    subject: 'Dein Englischkurs beginnt am Montag. Die erste Stunde ist kostenlos',
    subjectUpper: 'Eine kostenlose Englischstunde mit Lehrkraft am Samstag',
    pre: 'Ein kleiner Live-Kurs mit Lehrkraft. Erste Stunde am Samstag kostenlos, 10 € Rabatt auf deine erste Zahlung.',
    heading: 'Dein Englischkurs beginnt am Montag',
    headingUpper: 'Komm am Samstag zu unserer kostenlosen Englischstunde',
    hi: (n) => `Hallo ${n},`, hiNo: 'Hallo,', parisTime: 'Alle Zeiten in Pariser Zeit',
    intro: 'Wir starten einen kleinen Live-Englischkurs für Anfänger (A1 und A2) mit Lehrkraft, und wir würden uns freuen, wenn du dabei bist.',
    introUpper: 'Wir starten Live-Englischkurse mit Lehrkraft, und die erste Stunde ist kostenlos. Lerne die Lehrkraft kennen und sieh dir an, wie die Kurse laufen.',
    free: 'Kostenlose erste Stunde', pack: 'Level-Paket', open: 'Offener Kurs', starts: 'Beginn',
    packV: (d, t) => `${d} um ${t}, 12 Wochen`, openV: (d, t) => `${d} um ${t}`,
    yourTime: 'Alle Zeiten in deiner Zeitzone',
    offerH: '10 € Rabatt', offerNow: 'auf deine erste Zahlung, Level-Paket oder offener Kurs', offerEnds: (d) => `Anmeldung bis ${d}`,
    rule: (min, d) => `Der Kurs findet statt, wenn sich bis ${d} mindestens ${min} Personen anmelden. Bis dahin wird nichts abgebucht: Deine Karte wird gespeichert und erst am ersten Tag belastet. Melden sich weniger als ${min} an, wird nichts abgebucht. Der Preis für dein Land wird vor der Bestätigung angezeigt.`,
    upper: (lv) => `Diese erste Stunde ist für Anfänger. Ein Kurs für ${lv} startet, sobald 8 Lernende auf deinem Niveau bereit sind, und wir schreiben dir.`,
    button: 'Kostenlosen Platz sichern', buttonClass: 'Kurs ansehen und anmelden',
    note: 'Du bekommst diese E-Mail, weil du ein Alimun-Konto zum Englischlernen hast.',
    bellTitle: 'Deine erste Englischstunde ist kostenlos', bellBody: 'Am Samstag, live mit Lehrkraft. Danach ein kleiner Kurs ab Montag, mit 10 € Rabatt auf deine erste Zahlung.'
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
  const name = firstName(r.name);
  const known = zoneOf(r.timezone) === r.timezone;
  const blocks = [{ p: mail.esc(name ? x.hi(name) : x.hiNo) },
    { p: mail.esc(upper ? x.introUpper : x.intro) }, { facts }, { p: `<span style="font-size:14px">${mail.esc(known ? x.yourTime : x.parisTime)}.</span>` }];
  if (upper) blocks.push({ p: mail.esc(x.upper(String(r.level).slice(0, 2).toUpperCase())) });
  else {
    blocks.push({ offer: { headline: x.offerH, now: x.offerNow, ends: x.offerEnds(deadline) } });
    blocks.push({ p: mail.esc(x.rule(ctx.min, deadline)) });
  }
  blocks.push({ button: { label: upper ? x.button : x.buttonClass, href: LINK } });
  const unsub = ctx.unsub ? mail.unsubscribeUrl(r.user_id) : '';
  const out = mail.renderEmail({ hero: 'class-english', preheader: x.pre, heading: upper ? x.headingUpper : x.heading, blocks, note: mail.esc(x.note), unsubscribeUrl: unsub, lang });
  return { subject: upper ? x.subjectUpper : x.subject, html: out.html, text: out.text, lang, upper, unsub, bell: { title: x.bellTitle, body: x.bellBody } };
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
async function recipients(sb) {
  const { data: people, error } = await sb.from('student_profiles').select('user_id, full_name, level, timezone, ui_lang, language').eq('language', 'English').limit(500);
  if (error) throw new Error('recipients: ' + error.message);
  const { data: sent } = await sb.from('notifications').select('user_id').eq('kind', 'offer').eq('params->>launch', KIND);
  const done = new Set((sent || []).map((x) => x.user_id));
  const out = [];
  for (const p of people || []) {
    if (done.has(p.user_id)) continue;
    const { data: u } = await sb.auth.admin.getUserById(p.user_id);
    const user = u && u.user;
    if (!user || !user.email || (user.app_metadata && ['admin', 'teacher'].includes(user.app_metadata.role))) continue;
    out.push({ user_id: p.user_id, email: user.email, name: p.full_name, level: p.level, timezone: p.timezone, ui_lang: p.ui_lang });
  }
  return out;
}

async function run(sb, mode, opts) {
  const ctx = await context(sb);
  const list = await recipients(sb);
  if (mode === 'preview') {
    return { count: list.length, people: list.map((r) => { const e = build(r, ctx); return { name: r.name, level: r.level, timezone: r.timezone, lang: e.lang, beginner: !e.upper, subject: e.subject }; }) };
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
  if (mode === 'send') {
    if (Number(opts.confirm) !== list.length) return { error: 'count_changed', count: list.length };
    let ok = 0; const failed = [];
    for (const r of list) {
      const e = build(r, ctx);
      const sentOk = await mail.sendEmail({ to: r.email, subject: e.subject, html: e.html, text: e.text, unsubscribeUrl: e.unsub });
      await sb.from('notifications').insert({ user_id: r.user_id, kind: 'offer', params: { launch: KIND }, title: e.bell.title, body: e.bell.body, link: '/app#/settings/plans/launch' });
      if (sentOk) ok++; else failed.push(r.email);
    }
    return { sent: ok, failed };
  }
  return { error: 'bad_mode' };
}

module.exports = { build, run, recipients, TX };
