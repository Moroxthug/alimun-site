// Resource: fun. Each option votes for a drawing from the cast; the result is an English idiom that fits. Idioms stay in English; everything else is in Italian. Idiom meanings checked against Cambridge Dictionary (night owl, life and soul of the party, go the extra mile, on cloud nine, as cool as a cucumber).
export default {
  key: 'english-idiom-quiz', site: 'it', slug: 'quale-modo-di-dire-inglese-sei', kind: 'fun', course: 'English', level: 'Per divertirsi',
  draw: 'parrot', tint: 'coral', published: '2026-11-01',
  title: 'Quale modo di dire inglese sei?',
  metaTitle: 'Quale modo di dire inglese sei? Un quiz divertente – Alimun',
  desc: "Un quiz gratis di tre domande: scopri il modo di dire inglese che corrisponde alla tua personalità, da a night owl a on cloud nine, e condividilo.",
  lead: 'Tre domande veloci, un modo di dire inglese che ti descrive. Condividilo con un amico e scopri cosa significa.',
  about: [
    "L'inglese è pieno di modi di dire, frasi il cui significato non si indovina dalle singole parole. I madrelingua li usano di continuo, e uno di questi probabilmente ti descrive meglio di quanto pensi.",
    'Questo quiz è solo per divertirsi, ma ogni modo di dire è vero e comune, quindi alla fine avrai una nuova espressione da usare nella tua prossima conversazione in inglese.',
  ],
  youAre: 'Il tuo modo di dire inglese: {}',
  buddy: {
    questions: [
      ['È sabato sera. Tu...', [['Inizi un nuovo progetto a mezzanotte', 'owl'], ['Balli in mezzo alla stanza', 'parrot'], ['Aiuti un amico a portare gli scatoloni nella casa nuova', 'dog'], ['Resti calmo mentre gli altri litigano sul programma', 'cat']]],
      ['Un amico ha una scadenza importante domani. Tu...', [['Resti sveglio fino a tardi a lavorare con lui', 'owl'], ['Porti qualcosa da mangiare e resti finché non è finito', 'dog'], ['Gli dici che andrà tutto bene e fai un piano chiaro', 'cat'], ['Organizzi la festa per quando avrà finito', 'sun']]],
      ['Scegli un suono:', [['Una città silenziosa alle due di notte', 'owl'], ['Risate in una festa affollata', 'parrot'], ['Il telefono che squilla con una bellissima notizia', 'sun'], ['Onde lente su un mare calmo', 'cat']]],
    ],
    results: {
      owl: ['a night owl', 'Letteralmente "un gufo notturno": una persona che preferisce stare sveglia e attiva di notte. Le tue idee migliori arrivano quando tutti dormono.'],
      parrot: ['the life and soul of the party', "L'anima della festa: una persona piena di energia e divertente, sempre al centro di ogni evento. Quando arrivi tu, inizia il divertimento."],
      dog: ['go the extra mile', 'Fare più di quanto ci si aspetta da te. I tuoi amici sanno che possono sempre contare su di te.'],
      sun: ['on cloud nine', 'Al settimo cielo: felicissimo ed entusiasta. Il tuo buonumore illumina tutta la stanza.'],
      cat: ['as cool as a cucumber', 'Calmissimo, soprattutto quando nessuno se lo aspetterebbe. Niente ti scompone, anche quando tutti gli altri vanno nel panico.'],
    },
  },
  related: ['english-idioms', 'buddy-quiz', 'british-american'],
};
