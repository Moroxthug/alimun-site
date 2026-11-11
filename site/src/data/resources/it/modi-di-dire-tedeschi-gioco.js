// Resource: game. German idioms: what each one really means. Meanings checked against Duden and DWDS.
// German idioms stay German; glosses, options and explanations are in Italian.
export default {
  key: 'german-idioms', site: 'it', slug: 'modi-di-dire-tedeschi-gioco', kind: 'game', course: 'German', level: 'Tutti i livelli',
  draw: 'pretzel', tint: 'sun', published: '2026-10-27',
  title: 'Gioco dei modi di dire tedeschi: pomodori sugli occhi?',
  metaTitle: 'Modi di dire tedeschi: gioco con 10 espressioni spiegate – Alimun',
  desc: 'Un gioco gratis con dieci modi di dire tedeschi di tutti i giorni, da Tomaten auf den Augen a Ich verstehe nur Bahnhof. Indovina cosa vogliono dire.',
  lead: 'I tedeschi dicono di avere pomodori sugli occhi e di capire solo "stazione". Indovina cosa vogliono dire davvero dieci modi di dire di tutti i giorni.',
  instructions: 'Cosa significa davvero il modo di dire?',
  about: [
    "I modi di dire sono espressioni il cui significato non è la somma delle parole. In tedesco ce ne sono tantissimi, e molti parlano di cibo, animali e birra.",
    "Li sentirai tutti nelle conversazioni di ogni giorno. Impara il significato insieme alla frase intera, e usali con gli amici più che in una email formale.",
  ],
  items: [
    { q: 'Tomaten auf den Augen haben (avere pomodori sugli occhi)', options: ['non vedere una cosa ovvia', 'essere molto stanco', 'aver pianto', 'essere innamorato'], a: 0, why: 'Hast du Tomaten auf den Augen? vuol dire "Ma non la vedi? Ce l\'hai davanti al naso."' },
    { q: 'Ich verstehe nur Bahnhof (capisco solo "stazione")', options: ['voglio andare a casa', 'non capisco niente', 'ho fretta', 'mi sono perso in città'], a: 1, why: 'Vuol dire che non capisci proprio niente, un po\' come il nostro "per me è arabo".' },
    { q: 'Schwein haben (avere un maiale)', options: ['essere disordinato', 'mangiare troppo', 'avere fortuna', 'essere maleducato'], a: 2, why: 'In tedesco il maiale è un simbolo di fortuna: Da hast du aber Schwein gehabt! vuol dire "Ti è andata proprio bene!"' },
    { q: 'Das ist nicht mein Bier (non è la mia birra)', options: ['non bevo', 'non sono affari miei', 'non è quello che ho ordinato', 'non mi piace'], a: 1, why: 'Vuol dire "non è un mio problema" o "non sono affari miei".' },
    { q: 'Die Daumen drücken (premere i pollici)', options: ['incrociare le dita', 'contare qualcosa', "fare l'autostop", 'lamentarsi'], a: 0, why: 'Dove noi incrociamo le dita, i tedeschi premono i pollici: Ich drücke dir die Daumen!' },
    { q: 'Ins Fettnäpfchen treten (mettere il piede nel pentolino del grasso)', options: ['cucinare male', 'scivolare sul ghiaccio', 'fare una gaffe', 'ingrassare'], a: 2, why: 'Vuol dire dire o fare per sbaglio qualcosa di imbarazzante, cioè fare una gaffe.' },
    { q: 'Jemandem auf den Keks gehen (camminare sul biscotto di qualcuno)', options: ['rubare a qualcuno', 'dare sui nervi a qualcuno', 'fare una sorpresa a qualcuno', 'andare a trovare qualcuno'], a: 1, why: 'Du gehst mir auf den Keks! vuol dire "Mi stai dando sui nervi!"' },
    { q: "Da steppt der Bär (lì l'orso balla il tip tap)", options: ['lì è pericoloso', 'lì fa molto freddo', "lì c'è una festa animata", 'lì ci si annoia'], a: 2, why: 'Descrive un posto dove succede di tutto, come una gran bella festa.' },
    { q: 'Hals- und Beinbruch! (frattura del collo e della gamba!)', options: ['Stai attento!', 'In bocca al lupo!', 'Guarisci presto!', 'Vattene!'], a: 1, why: 'È un modo di augurare buona fortuna, come il nostro "in bocca al lupo" o l\'inglese "break a leg".' },
    { q: 'Jemandem einen Bären aufbinden (legare un orso addosso a qualcuno)', options: ['abbracciare qualcuno', 'dare un lavoro a qualcuno', 'raccontare frottole a qualcuno', 'spaventare qualcuno'], a: 2, why: 'Vuol dire far credere a qualcuno una cosa non vera, come il nostro "darla a bere".' },
  ],
  pairs: [
    ['Tomaten auf den Augen haben', 'Non vedere una cosa ovvia'],
    ['Ich verstehe nur Bahnhof', 'Non capisco niente'],
    ['Schwein haben', 'Avere fortuna'],
    ['Das ist nicht mein Bier', 'Non sono affari miei'],
    ['Die Daumen drücken', 'Incrociare le dita'],
    ['Ins Fettnäpfchen treten', 'Fare una gaffe'],
    ['Auf den Keks gehen', 'Dare sui nervi'],
    ['Da steppt der Bär', "C'è una festa animata"],
  ],
  related: ['german-compounds', 'false-friends', 'de-quiz-a2'],
};
