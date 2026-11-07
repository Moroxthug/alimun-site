/**
 * Email text in the person's dashboard language (student_profiles.ui_lang / teacher_profiles.ui_lang; owner, 7 Nov 2026:
 * "save their dashboard language and translate the emails"). Used by api/_lib/email.js for the parts every email has,
 * and by api/cron-reminders.js for the reminders. Same tone as the site: es and it informal, fr, de, pt and ma formal.
 * 'ma' (Moroccan site) uses the French text. Unknown or missing languages fall back to English.
 */

const LANGS = ['en', 'es', 'fr', 'de', 'pt', 'it', 'zh', 'ar', 'ma'];
const ISO = { English: 'en', German: 'de', French: 'fr', Spanish: 'es', Italian: 'it', Portuguese: 'pt', Mandarin: 'zh', Japanese: 'ja', Arabic: 'ar' };

function norm(lang) {
  const l = String(lang || '').toLowerCase();
  if (l === 'ma') return 'fr';
  return LANGS.includes(l) ? l : 'en';
}
function htmlLang(lang) { return String(lang || '').toLowerCase() === 'ma' ? 'fr-MA' : norm(lang); }
function isRtl(lang) { return norm(lang) === 'ar'; }

/** 'German' in the reader's language: Deutsch, allemand, tedesco… (lowercase where the language writes it so). */
function languageName(english, lang) {
  const code = ISO[english];
  if (!code) return english || '';
  try { return new Intl.DisplayNames([norm(lang)], { type: 'language' }).of(code) || english; } catch (e) { return english; }
}

const T = {
  en: {
    fallback: 'If the button does not work, copy this link into your browser:', signoff: 'The Alimun team', dashboard: 'Your dashboard', contact: 'Contact',
    unsub_line: 'You get these because you asked for news and offers from Alimun.', unsub_link: 'Stop news and offers',
    hello_name: 'Hello {name},', hello: 'Hello,',
    reminder_footer: 'You get these reminders because you asked for news and offers from Alimun.',
    practice: { subject: 'Ten minutes today?', heading: 'Ten minutes today?', body_lang: 'It has been a week since you last practised your {language}. A few minutes of exercises or flashcards today keeps the words you learned fresh.', body: 'It has been a week since you last practised. A few minutes of exercises or flashcards today keeps the words you learned fresh.', button: 'Practise now' },
    level: { subject: 'Your level test result is waiting', heading: 'Your next step', body_full: 'Your {language} level test placed you at {level}. The next step is a class with a teacher and other learners at your level, or a plan that suits how you like to learn.', body: 'You took the level test. The next step is a class with a teacher and other learners at your level, or a plan that suits how you like to learn.', button: 'See classes and plans' },
    tutor: { subject: 'Your free tutor minutes are used up', heading: 'Keep talking with your tutor', body: 'You have used your free minutes with the tutor. A plan gives you tutor minutes every month, together with classes and exercises.', button: 'See the plans' },
  },
  es: {
    fallback: 'Si el botón no funciona, copia este enlace en tu navegador:', signoff: 'El equipo de Alimun', dashboard: 'Tu panel', contact: 'Contacto',
    unsub_line: 'Recibes estos correos porque pediste novedades y ofertas de Alimun.', unsub_link: 'Dejar de recibir novedades y ofertas',
    hello_name: 'Hola, {name}:', hello: 'Hola:',
    reminder_footer: 'Recibes estos recordatorios porque pediste novedades y ofertas de Alimun.',
    practice: { subject: '¿Diez minutos hoy?', heading: '¿Diez minutos hoy?', body_lang: 'Hace una semana que no practicas tu {language}. Unos minutos de ejercicios o tarjetas hoy mantienen frescas las palabras que aprendiste.', body: 'Hace una semana que no practicas. Unos minutos de ejercicios o tarjetas hoy mantienen frescas las palabras que aprendiste.', button: 'Practicar ahora' },
    level: { subject: 'El resultado de tu prueba de nivel te espera', heading: 'Tu siguiente paso', body_full: 'Tu prueba de nivel de {language} te situó en {level}. El siguiente paso es una clase con un profesor y otros estudiantes de tu nivel, o un plan que se adapte a tu forma de aprender.', body: 'Hiciste la prueba de nivel. El siguiente paso es una clase con un profesor y otros estudiantes de tu nivel, o un plan que se adapte a tu forma de aprender.', button: 'Ver clases y planes' },
    tutor: { subject: 'Has usado tus minutos gratis con el tutor', heading: 'Sigue hablando con tu tutor', body: 'Has usado tus minutos gratis con el tutor. Un plan te da minutos de tutor cada mes, además de clases y ejercicios.', button: 'Ver los planes' },
  },
  fr: {
    fallback: 'Si le bouton ne fonctionne pas, copiez ce lien dans votre navigateur :', signoff: "L'équipe Alimun", dashboard: 'Votre tableau de bord', contact: 'Contact',
    unsub_line: 'Vous recevez ces e-mails parce que vous avez demandé les nouveautés et les offres d\'Alimun.', unsub_link: 'Ne plus recevoir les nouveautés et les offres',
    hello_name: 'Bonjour {name},', hello: 'Bonjour,',
    reminder_footer: 'Vous recevez ces rappels parce que vous avez demandé les nouveautés et les offres d\'Alimun.',
    practice: { subject: 'Dix minutes aujourd\'hui ?', heading: 'Dix minutes aujourd\'hui ?', body_lang: 'Cela fait une semaine que vous n\'avez pas pratiqué votre {language}. Quelques minutes d\'exercices ou de cartes mémoire aujourd\'hui gardent en tête les mots appris.', body: 'Cela fait une semaine que vous ne vous êtes pas entraîné. Quelques minutes d\'exercices ou de cartes mémoire aujourd\'hui gardent en tête les mots appris.', button: 'M\'entraîner maintenant' },
    level: { subject: 'Le résultat de votre test de niveau vous attend', heading: 'Votre prochaine étape', body_full: 'Votre test de niveau en {language} vous situe au niveau {level}. La prochaine étape : un cours avec un enseignant et d\'autres apprenants de votre niveau, ou une formule adaptée à votre façon d\'apprendre.', body: 'Vous avez passé le test de niveau. La prochaine étape : un cours avec un enseignant et d\'autres apprenants de votre niveau, ou une formule adaptée à votre façon d\'apprendre.', button: 'Voir les cours et les formules' },
    tutor: { subject: 'Vos minutes gratuites avec le tuteur sont épuisées', heading: 'Continuez à parler avec votre tuteur', body: 'Vous avez utilisé vos minutes gratuites avec le tuteur. Une formule vous donne des minutes de tuteur chaque mois, avec des cours et des exercices.', button: 'Voir les formules' },
  },
  de: {
    fallback: 'Wenn die Schaltfläche nicht funktioniert, kopieren Sie diesen Link in Ihren Browser:', signoff: 'Ihr Alimun-Team', dashboard: 'Ihr Dashboard', contact: 'Kontakt',
    unsub_line: 'Sie erhalten diese E-Mails, weil Sie Neuigkeiten und Angebote von Alimun angefordert haben.', unsub_link: 'Neuigkeiten und Angebote abbestellen',
    hello_name: 'Hallo {name},', hello: 'Hallo,',
    reminder_footer: 'Sie erhalten diese Erinnerungen, weil Sie Neuigkeiten und Angebote von Alimun angefordert haben.',
    practice: { subject: 'Heute zehn Minuten?', heading: 'Heute zehn Minuten?', body_lang: 'Sie haben seit einer Woche kein {language} mehr geübt. Ein paar Minuten Übungen oder Karteikarten heute halten die gelernten Wörter frisch.', body: 'Sie haben seit einer Woche nicht mehr geübt. Ein paar Minuten Übungen oder Karteikarten heute halten die gelernten Wörter frisch.', button: 'Jetzt üben' },
    level: { subject: 'Ihr Einstufungsergebnis wartet', heading: 'Ihr nächster Schritt', body_full: 'Ihr Einstufungstest für {language} ergab das Niveau {level}. Der nächste Schritt ist ein Kurs mit einer Lehrkraft und anderen Lernenden auf Ihrem Niveau oder ein Plan, der zu Ihrer Art zu lernen passt.', body: 'Sie haben den Einstufungstest gemacht. Der nächste Schritt ist ein Kurs mit einer Lehrkraft und anderen Lernenden auf Ihrem Niveau oder ein Plan, der zu Ihrer Art zu lernen passt.', button: 'Kurse und Pläne ansehen' },
    tutor: { subject: 'Ihre kostenlosen Tutor-Minuten sind aufgebraucht', heading: 'Sprechen Sie weiter mit Ihrem Tutor', body: 'Sie haben Ihre kostenlosen Minuten mit dem Tutor genutzt. Mit einem Plan erhalten Sie jeden Monat Tutor-Minuten, dazu Kurse und Übungen.', button: 'Pläne ansehen' },
  },
  pt: {
    fallback: 'Se o botão não funcionar, copie esta ligação para o seu navegador:', signoff: 'A equipa Alimun', dashboard: 'O seu painel', contact: 'Contacto',
    unsub_line: 'Recebe estes e-mails porque pediu novidades e ofertas da Alimun.', unsub_link: 'Deixar de receber novidades e ofertas',
    hello_name: 'Olá, {name},', hello: 'Olá,',
    reminder_footer: 'Recebe estes lembretes porque pediu novidades e ofertas da Alimun.',
    practice: { subject: 'Dez minutos hoje?', heading: 'Dez minutos hoje?', body_lang: 'Já passou uma semana desde a última vez que praticou o seu {language}. Alguns minutos de exercícios ou cartões hoje mantêm frescas as palavras que aprendeu.', body: 'Já passou uma semana desde a última vez que praticou. Alguns minutos de exercícios ou cartões hoje mantêm frescas as palavras que aprendeu.', button: 'Praticar agora' },
    level: { subject: 'O resultado do seu teste de nível está à espera', heading: 'O seu próximo passo', body_full: 'O seu teste de nível de {language} colocou-o no nível {level}. O próximo passo é uma turma com um professor e outros alunos do seu nível, ou um plano à medida da sua forma de aprender.', body: 'Fez o teste de nível. O próximo passo é uma turma com um professor e outros alunos do seu nível, ou um plano à medida da sua forma de aprender.', button: 'Ver turmas e planos' },
    tutor: { subject: 'Os seus minutos grátis com o tutor acabaram', heading: 'Continue a falar com o seu tutor', body: 'Usou os seus minutos grátis com o tutor. Um plano dá-lhe minutos de tutor todos os meses, com aulas e exercícios.', button: 'Ver os planos' },
  },
  it: {
    fallback: 'Se il pulsante non funziona, copia questo link nel browser:', signoff: 'Il team di Alimun', dashboard: 'La tua dashboard', contact: 'Contatti',
    unsub_line: 'Ricevi queste email perché hai chiesto novità e offerte di Alimun.', unsub_link: 'Non ricevere più novità e offerte',
    hello_name: 'Ciao {name},', hello: 'Ciao,',
    reminder_footer: 'Ricevi questi promemoria perché hai chiesto novità e offerte di Alimun.',
    practice: { subject: 'Dieci minuti oggi?', heading: 'Dieci minuti oggi?', body_lang: 'È passata una settimana dall\'ultima volta che hai esercitato il tuo {language}. Qualche minuto di esercizi o flashcard oggi tiene fresche le parole che hai imparato.', body: 'È passata una settimana dall\'ultima volta che ti sei esercitato. Qualche minuto di esercizi o flashcard oggi tiene fresche le parole che hai imparato.', button: 'Esercitati ora' },
    level: { subject: 'Il risultato del tuo test di livello ti aspetta', heading: 'Il tuo prossimo passo', body_full: 'Il tuo test di livello di {language} ti ha collocato al livello {level}. Il prossimo passo è una classe con un insegnante e altri studenti del tuo livello, o un piano adatto al tuo modo di imparare.', body: 'Hai fatto il test di livello. Il prossimo passo è una classe con un insegnante e altri studenti del tuo livello, o un piano adatto al tuo modo di imparare.', button: 'Vedi classi e piani' },
    tutor: { subject: 'Hai esaurito i minuti gratuiti con il tutor', heading: 'Continua a parlare con il tuo tutor', body: 'Hai usato i tuoi minuti gratuiti con il tutor. Un piano ti dà minuti di tutor ogni mese, insieme a lezioni ed esercizi.', button: 'Vedi i piani' },
  },
  zh: {
    fallback: '如果按钮无法使用，请将此链接复制到浏览器中：', signoff: 'Alimun 团队', dashboard: '你的学习面板', contact: '联系我们',
    unsub_line: '你收到这些邮件，是因为你订阅了 Alimun 的最新消息和优惠。', unsub_link: '退订最新消息和优惠',
    hello_name: '{name}，你好：', hello: '你好：',
    reminder_footer: '你收到这些提醒，是因为你订阅了 Alimun 的最新消息和优惠。',
    practice: { subject: '今天练习十分钟？', heading: '今天练习十分钟？', body_lang: '你已经一周没有练习{language}了。今天做几分钟练习或复习抽认卡，让学过的词保持新鲜。', body: '你已经一周没有练习了。今天做几分钟练习或复习抽认卡，让学过的词保持新鲜。', button: '现在练习' },
    level: { subject: '你的水平测试结果在等你', heading: '你的下一步', body_full: '你的{language}水平测试结果是 {level}。下一步可以加入一个由老师带领、同学水平相近的班级，或选择适合你学习方式的计划。', body: '你已经完成了水平测试。下一步可以加入一个由老师带领、同学水平相近的班级，或选择适合你学习方式的计划。', button: '查看课程和计划' },
    tutor: { subject: '你的免费导师时长已用完', heading: '继续和导师对话', body: '你已经用完了免费的导师时长。订阅计划每月都有导师时长，还有课程和练习。', button: '查看计划' },
  },
  ar: {
    fallback: 'إذا لم يعمل الزر، انسخ هذا الرابط في متصفحك:', signoff: 'فريق Alimun', dashboard: 'لوحتك', contact: 'اتصل بنا',
    unsub_line: 'تصلك هذه الرسائل لأنك طلبت أخبار Alimun وعروضها.', unsub_link: 'إيقاف الأخبار والعروض',
    hello_name: 'مرحبًا {name}،', hello: 'مرحبًا،',
    reminder_footer: 'تصلك هذه التذكيرات لأنك طلبت أخبار Alimun وعروضها.',
    practice: { subject: 'عشر دقائق اليوم؟', heading: 'عشر دقائق اليوم؟', body_lang: 'مر أسبوع منذ آخر مرة تدربت فيها على {language}. بضع دقائق من التمارين أو البطاقات اليوم تحافظ على الكلمات التي تعلمتها.', body: 'مر أسبوع منذ آخر مرة تدربت فيها. بضع دقائق من التمارين أو البطاقات اليوم تحافظ على الكلمات التي تعلمتها.', button: 'تدرّب الآن' },
    level: { subject: 'نتيجة اختبار المستوى بانتظارك', heading: 'خطوتك التالية', body_full: 'وضعك اختبار المستوى في {language} في المستوى {level}. الخطوة التالية هي صف مع معلم ومتعلمين آخرين في مستواك، أو خطة تناسب طريقتك في التعلم.', body: 'لقد أجريت اختبار المستوى. الخطوة التالية هي صف مع معلم ومتعلمين آخرين في مستواك، أو خطة تناسب طريقتك في التعلم.', button: 'شاهد الصفوف والخطط' },
    tutor: { subject: 'انتهت دقائقك المجانية مع المعلم', heading: 'واصل الحديث مع معلمك', body: 'لقد استخدمت دقائقك المجانية مع المعلم. تمنحك الخطة دقائق مع المعلم كل شهر، إلى جانب الصفوف والتمارين.', button: 'شاهد الخطط' },
  },
};

function t(lang) { return T[norm(lang)]; }
function fill(s, vars) { return String(s).replace(/\{(\w+)\}/g, (m, k) => (vars && vars[k] != null ? vars[k] : m)); }

/* ---------- Every other email to students and teachers: api/_lib/email-text/<lang>.json ----------
   English is the source; a missing language or key falls back to English. */
const TEXT = { en: require('./email-text/en.json') };
for (const l of ['es', 'fr', 'de', 'pt', 'it', 'zh', 'ar']) {
  try { TEXT[l] = require(`./email-text/${l}.json`); } catch (e) { /* not translated yet: English */ }
}
function raw(lang, key) {
  const [group, name] = String(key).split('.');
  const pick = (d) => d && d[group] && d[group][name];
  return pick(TEXT[norm(lang)]) || pick(TEXT.en) || key;
}
function escHtml(s) { return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
/** Plain text (subjects, preheaders, labels, button text): placeholders filled, ** markers removed. */
function say(lang, key, vars) { return fill(raw(lang, key), vars).replace(/\*\*/g, ''); }
/** HTML for a paragraph: the text and the values escaped, **…** made bold. */
function html(lang, key, vars) {
  const safe = {};
  Object.keys(vars || {}).forEach((k) => { safe[k] = escHtml(vars[k]); });
  return fill(escHtml(raw(lang, key)), safe).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}
function locale(lang) { const l = norm(lang); return l === 'en' ? 'en-GB' : l === 'pt' ? 'pt-PT' : l === 'zh' ? 'zh-CN' : l; }
/** 'German', 'B1' → 'Deutsch B1' in the reader's language. */
function className(language, level, lang) { return `${languageName(language, lang)} ${level || ''}`.trim(); }
/** A date and time in the reader's language and time zone, with the zone named. */
function when(date, tz, lang) {
  const zone = tz || 'UTC';
  try {
    const d = new Date(date);
    return new Intl.DateTimeFormat(locale(lang), { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', timeZone: zone }).format(d) + ` (${zone})`;
  } catch (e) { return String(date); }
}
/** A date without the time. */
function day(date, lang, tz) {
  try { return new Intl.DateTimeFormat(locale(lang), { day: 'numeric', month: 'long', year: 'numeric', timeZone: tz || 'UTC' }).format(new Date(date)); } catch (e) { return String(date); }
}
/** ['Monday', 'Thursday'] → 'lunes, jueves' in the reader's language. */
function weekdays(days, lang) {
  const idx = { Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6 };
  const f = new Intl.DateTimeFormat(locale(lang), { weekday: 'long', timeZone: 'UTC' });
  const names = (days || []).map((d) => (idx[d] == null ? d : f.format(new Date(Date.UTC(2024, 0, 7 + idx[d])))));
  try { return new Intl.ListFormat(locale(lang), { style: 'long', type: 'conjunction' }).format(names); } catch (e) { return names.join(', '); }
}
/** Greeting with the first name, or without a name. */
function hello(lang, fullName) {
  const first = String(fullName || '').trim().split(/\s+/)[0];
  return first ? html(lang, 'common.hello_name', { name: first }) : html(lang, 'common.hello');
}

module.exports = { LANGS, norm, htmlLang, isRtl, languageName, t, fill, say, html, className, when, day, weekdays, hello, locale };
