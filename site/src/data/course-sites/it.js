// Italian site (/it/): the course pages for Italian speakers. Approved text; the guide,
// FAQ and quiz-result text live in the course-*.js files they were approved in.
import { GUIDES } from '../course-guides.js';
import { courseFaq } from '../course-faq.js';
import { LEVEL_TEXT } from '../course-quiz.js';

const art = (name) => ({ inglese: "l'", spagnolo: 'lo ' })[name] || 'il ';

export default {
  site: 'it',
  locale: 'it_IT',
  courses: [
    { lang: 'English', slug: 'corsi-inglese-online', name: 'inglese', video: 'pexels-12156230-london', open: true },
    { lang: 'German', slug: 'corsi-tedesco-online', name: 'tedesco', video: 'pexels-29955338-berlin', open: true },
    { lang: 'French', slug: 'corsi-francese-online', name: 'francese', video: 'pexels-4272751-paris', open: false },
    { lang: 'Spanish', slug: 'corsi-spagnolo-online', name: 'spagnolo', video: 'pexels-20066590-barcelona', open: false },
    { lang: 'Portuguese', slug: 'corsi-portoghese-online', name: 'portoghese', video: 'pexels-12890902-sintra', open: false },
  ],
  pageTitle: (c) => c.open ? `Corsi di ${c.name} online con lezioni dal vivo | Alimun` : `Corsi di ${c.name} online: lista d'attesa | Alimun`,
  metaDesc: (c) => c.open
    ? `Corsi di ${c.name} online in piccoli gruppi con un insegnante, in giorni e orari fissi ogni settimana, compiti corretti con l'aiuto dell'IA ed esercizi con correzione immediata. Da €24 al mese.`
    : `Le lezioni di ${c.name} su Alimun apriranno presto. Iscriviti gratis alla lista d'attesa e ti scriveremo appena si aprono le classi.`,
  heroTitle: (c) => `Corsi di ${c.name} online`,
  heroDesc: (c) => c.open
    ? "Lezioni dal vivo in video con un insegnante e lo stesso gruppo, in giorni fissi e alla stessa ora ogni settimana. Tra una lezione e l'altra ti eserciti con correzione immediata e il tuo insegnante corregge i compiti con l'aiuto dell'IA. Da €24 al mese."
    : `Le classi di ${c.name} apriranno presto. Iscriviti gratis alla lista d'attesa: ti scriviamo appena si apre la tua lingua e oggi non paghi nulla. Nel frattempo puoi già seguire le lezioni di inglese e tedesco.`,
  heroCta: (c) => c.open ? 'Inizia ora' : "Unisciti alla lista d'attesa",
  howTitle: (c) => `Come funzionano le lezioni di ${c.name}`,
  liveDesc: (c) => `Video lezioni di ${c.name} con il tuo insegnante e lo stesso gruppo, in giorni fissi e alla stessa ora ogni settimana.`,
  levelsTitle: (c) => `I livelli di ${c.name} dalla A1 alla C2`,
  exams: {
    English: {
      title: "Le certificazioni d'inglese",
      desc: "Le certificazioni più richieste per lo studio, il lavoro e i visti. Su Alimun ti eserciti con prove nel loro stesso formato.",
      panels: [
        ['B2 First', "Il B2 First di Cambridge English certifica il livello B2 con quattro prove: Reading and Use of English, Writing, Listening e Speaking. È spesso richiesto da università, programmi Erasmus e datori di lavoro, e il certificato non ha scadenza."],
        ['C1 Advanced', "Il C1 Advanced di Cambridge English certifica il livello C1 con le stesse quattro prove, più impegnative. Molte università e aziende lo accettano come prova di un inglese avanzato per studiare e lavorare in inglese."],
        ['IELTS', "L'IELTS valuta Listening, Reading, Writing e Speaking con un punteggio da 0 a 9. Esiste nella versione Academic, per lo studio, e General Training, per il lavoro e l'immigrazione, ed è richiesto per i visti in paesi come Regno Unito, Australia e Canada."],
      ],
    },
    German: {
      title: 'Le certificazioni di tedesco',
      desc: 'Le certificazioni più richieste per vivere, studiare e lavorare nei paesi di lingua tedesca. Su Alimun ti eserciti con prove nel loro stesso formato.',
      panels: [
        ['Goethe B1', "Il Goethe-Zertifikat B1 del Goethe-Institut verifica lettura, ascolto, scrittura e parlato, che puoi sostenere anche in moduli separati. È uno dei certificati più richiesti per vivere e lavorare in Germania."],
        ['Goethe B2', "Il Goethe-Zertifikat B2 certifica un tedesco indipendente nelle stesse quattro competenze. È spesso richiesto per lavori qualificati e per l'accesso ad alcuni corsi di studio."],
        ['telc B1', "Il telc Deutsch B1, noto come Zertifikat Deutsch, certifica il livello B1 ed è riconosciuto dalle autorità tedesche, per esempio nelle domande di cittadinanza."],
      ],
    },
  },
  guides: GUIDES,
  faq: courseFaq,
  quiz: {
    title: (c) => `Scopri il tuo livello di ${c.name}`,
    intro: (c) => `Frasi da completare che diventano più difficili se rispondi bene e più facili se sbagli, in circa due minuti. Alla fine vedi una stima del tuo livello di ${c.name}.`,
    note: (c) => c.open
      ? "È una stima. Dopo l'iscrizione il test completo stabilisce il tuo livello e ti inserisce nella classe giusta."
      : `È una stima. Quando le classi di ${c.name} apriranno, il test completo stabilirà il tuo livello e la classe giusta per te.`,
    cta: (c) => c.open ? 'Registrati e fai il test completo' : "Unisciti alla lista d'attesa",
    start: 'Inizia il quiz',
    prompt: 'Completa la frase',
    again: 'Rifai il quiz',
    right1: 'risposta giusta su',
    rightN: 'risposte giuste su',
    levels: LEVEL_TEXT,
  },
  ui: {
    UI_QUIZ_BTN: "Scopri il tuo livello",
    UI_HOW_1_T: "Test di livello",
    UI_HOW_1_D: "Un breve test stabilisce il tuo livello, dalla A1 alla C1, e ti inserisce nella classe giusta per te.",
    UI_HOW_1_A: "Una studentessa al computer mentre prende appunti",
    UI_HOW_2_T: "Lezioni dal vivo",
    UI_HOW_2_A: "Una video lezione con due studenti sullo schermo",
    UI_HOW_3_T: "Compiti corretti",
    UI_HOW_3_D: "Il tuo insegnante assegna i compiti e te li restituisce corretti con l'aiuto dell'IA: voto, punti di forza, cosa migliorare e un esempio di correzione.",
    UI_HOW_3_A: "Un insegnante che corregge i compiti al computer",
    UI_HOW_4_T: "Pratica quando vuoi",
    UI_HOW_4_D: "Esercizi al tuo livello con correzione immediata, flashcard con le parole delle lezioni e prove nel formato degli esami.",
    UI_HOW_4_A: "Uno studente con le cuffie che si esercita sul quaderno",
    UI_LV_INTRO: "Il Quadro comune europeo di riferimento (QCER) descrive sei livelli di conoscenza di una lingua. Su Alimun ci sono classi per ogni livello e il test iniziale ti colloca dalla A1 alla C1.",
    UI_LV_1_H: "A1, livello base",
    UI_LV_1_P: "Capisci e usi espressioni quotidiane e frasi molto semplici, sai presentarti e fare domande su informazioni personali, se l'altra persona parla lentamente e con chiarezza.",
    UI_LV_2_H: "A2, livello elementare",
    UI_LV_2_P: "Comunichi in situazioni semplici e abituali, come la famiglia, gli acquisti, il lavoro e il luogo in cui vivi, e descrivi con parole semplici il tuo ambiente.",
    UI_LV_3_H: "B1, livello intermedio",
    UI_LV_3_P: "Te la cavi nella maggior parte delle situazioni che si incontrano in viaggio, racconti esperienze, progetti e desideri e spieghi brevemente le tue opinioni.",
    UI_LV_4_H: "B2, intermedio superiore",
    UI_LV_4_P: "Capisci le idee principali di testi complessi, anche tecnici nel tuo campo, e parli con una scioltezza che rende naturale la conversazione con chi parla la lingua da sempre.",
    UI_LV_5_H: "C1, livello avanzato",
    UI_LV_5_P: "Usi la lingua in modo flessibile ed efficace per la vita sociale, lo studio e il lavoro, e scrivi testi chiari e ben strutturati su argomenti complessi.",
    UI_LV_6_H: "C2, padronanza",
    UI_LV_6_P: "Capisci con facilità quasi tutto ciò che leggi e ascolti e ti esprimi in modo spontaneo, scorrevole e preciso, cogliendo anche le sfumature di significato.",
    UI_QUIZ_BTN_LONG: "Scopri il tuo livello in due minuti",
    UI_EX_NOTE: "Non è materiale d'esame ufficiale. Alimun non è affiliata agli enti certificatori.",
    UI_PL_TITLE: "Piani e prezzi",
    UI_PL_DESC: "Scegli quanta attenzione vuoi: più piccolo è il gruppo, più tempo hai per parlare. Con l'abbonamento annuale paghi dieci mesi invece di dodici.",
    UI_PL_1: "Gruppi di circa 35 persone, lezioni dal vivo e accesso alla community.",
    UI_PL_2: "Gruppi di circa 17 persone e un riscontro settimanale sul tuo lavoro.",
    UI_PL_3: "Gruppi di circa 6 persone e in più una lezione individuale ogni settimana.",
    UI_PL_4: "Lezioni private con il tuo insegnante, con una base di tre lezioni a settimana.",
    UI_PL_CTA: "Scegli il tuo piano",
    UI_PL_MONTH: "al mese",
    UI_FAQ_TITLE: "Domande frequenti",
    UI_Q_CLOSE: "Chiudi",
  },
};
