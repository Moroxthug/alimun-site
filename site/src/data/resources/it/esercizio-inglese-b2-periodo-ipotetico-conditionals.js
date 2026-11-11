// Resource: exercise. English items stay English; explanations are in Italian.
export default {
  key: 'en-ex-b2', site: 'it', slug: 'esercizio-inglese-b2-periodo-ipotetico-conditionals', kind: 'exercise', course: 'English', level: 'B2',
  draw: 'cat', tint: 'lime', published: '2026-10-26',
  title: 'Esercizio di inglese: il periodo ipotetico (B2)',
  metaTitle: 'Esercizi periodo ipotetico inglese B2, conditionals – Alimun',
  desc: 'Dodici domande gratis per chi studia inglese al livello B2 sul periodo ipotetico di tipo zero, primo, secondo, terzo e misto, con una spiegazione per ogni risposta.',
  lead: 'Scegli la forma verbale giusta in ogni frase con if. Vedi subito se hai ragione, e perché.',
  instructions: 'Scegli la forma giusta.',
  about: [
    "Il periodo ipotetico di tipo zero (if + presente, presente) è per i fatti e le cose che succedono sempre: \"If you heat ice, it melts.\" Il primo tipo (if + presente, will + verbo) è per possibilità reali nel futuro: \"If it rains tomorrow, we will stay home.\" Unless significa if not, quindi segue lo stesso schema. Il secondo tipo (if + passato, would + verbo) è per situazioni irreali o poco probabili nel presente: \"If I had more time, I would learn the piano.\" Nell'inglese formale si usa were con tutte le persone: \"If I were you...\"",
    "Il terzo tipo (if + past perfect, would have + participio passato) è per cambiamenti immaginari nel passato: \"If we had left earlier, we would have caught the train.\" Il periodo ipotetico misto combina i due: un passato irreale con una conseguenza nel presente (\"If I had taken that job, I would live in New York now\"), oppure un presente irreale con una conseguenza nel passato (\"If he were more careful, he wouldn't have made that mistake\"). Guarda le espressioni di tempo in ciascuna metà della frase per capire quale forma va bene.",
  ],
  items: [
    { q: 'If you mix red and white paint, you ___ pink.', options: ['would get', 'get', 'got', 'had gotten'], a: 1, why: 'Un fatto generale usa il periodo ipotetico di tipo zero: if + presente, presente.' },
    { q: 'If it ___ tomorrow, we will cancel the picnic.', options: ['will rain', 'rained', 'rains', 'would rain'], a: 2, why: 'Nel primo tipo la frase con if vuole il present simple, anche quando si parla del futuro.' },
    { q: 'If I ___ you, I would talk to her.', options: ['were', 'am', 'had been', 'will be'], a: 0, why: 'Per dare un consiglio con il secondo tipo si dice "If I were you", con were per tutte le persone.' },
    { q: 'If she had studied harder, she ___ the exam last month.', options: ['would pass', 'will pass', 'would have passed', 'passed'], a: 2, why: 'Una conseguenza immaginaria nel passato, nel terzo tipo, vuole would have + participio passato.' },
    { q: 'If I had taken the job in New York, I ___ there now.', options: ['would live', 'would have lived', 'will live', 'lived'], a: 0, why: 'Periodo ipotetico misto: una condizione irreale nel passato con una conseguenza nel presente (now) vuole would + verbo.' },
    { q: "If we ___ the map, we wouldn't have gotten lost.", options: ['had checked', 'checked', 'would check', 'have checked'], a: 0, why: 'La frase con if del terzo tipo vuole il past perfect.' },
    { q: 'Unless you hurry, you ___ the bus.', options: ['miss', 'would miss', 'missed', 'will miss'], a: 3, why: 'Unless significa if not, e qui segue il primo tipo: will + verbo.' },
    { q: 'If he ___ more money, he would buy a house.', options: ['would have', 'will have', 'has', 'had'], a: 3, why: 'Il secondo tipo vuole il past simple nella frase con if.' },
    { q: 'If he were more careful, he ___ that mistake yesterday.', options: ["wouldn't make", "wouldn't have made", "won't make", "didn't make"], a: 1, why: 'Periodo ipotetico misto: una condizione irreale nel presente con una conseguenza nel passato vuole would have + participio passato.' },
    { q: "If she weren't so busy, she ___ us more often.", options: ['visits', 'will visit', 'would visit', 'would have visited'], a: 2, why: 'Una situazione irreale nel presente usa il secondo tipo: would + verbo.' },
    { q: "If I hadn't eaten so much, I ___ sick now.", options: ["wouldn't feel", "won't feel", "wouldn't have felt", "don't feel"], a: 0, why: 'Periodo ipotetico misto: una condizione nel passato con una conseguenza nel presente (now) vuole would + verbo.' },
    { q: 'What would you do if you ___ the lottery?', options: ['win', 'had won', 'will win', 'won'], a: 3, why: 'Una situazione immaginaria e poco probabile usa il secondo tipo: if + past simple.' },
  ],
  related: ['en-ex-b1', 'en-ex-c1', 'en-quiz-b2'],
};
