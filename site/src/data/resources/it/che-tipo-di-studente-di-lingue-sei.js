// Resource: fun. Each option votes for a learner type; the most votes wins. No word meanings to check; "topo di biblioteca" and "nottambulo" checked against Treccani. The types are playful, not a research-based "learning styles" test, and the about text says so.
export default {
  key: 'learner-type-quiz', site: 'it', slug: 'che-tipo-di-studente-di-lingue-sei', kind: 'fun', course: null, level: 'Per divertirsi',
  draw: 'owl', tint: 'mint', published: '2026-11-01',
  title: 'Che tipo di studente di lingue sei?',
  metaTitle: 'Che tipo di studente di lingue sei? Quiz divertente – Alimun',
  desc: 'Un quiz gratis di tre domande: sei un chiacchierone, un pianificatore, un esploratore, un nottambulo o un topo di biblioteca? Scoprilo e prendi un consiglio.',
  lead: 'Tre domande giocose sulle tue abitudini. Alla fine scopri il tuo tipo, con un consiglio adatto al modo in cui ti piace imparare.',
  about: [
    'C\'è chi impara una lingua parlando con chiunque incontri, chi facendo liste, chi con film e viaggi, chi a tarda notte e chi con un buon libro.',
    'Questo quiz è solo per divertirsi, non è un test scientifico. Il risultato è una spinta amichevole: le abitudini che ti piacciono già sono quelle che ti fanno andare avanti.',
  ],
  youAre: 'Sei: {}',
  buddy: {
    questions: [
      ['Da dove arrivano le tue parole nuove?', [['Dalle chiacchiere con le persone', 'parrot'], ['Da una lista ordinata sul quaderno', 'cat'], ['Da un film o una serie con i sottotitoli', 'suitcase'], ['Da un libro che non riesco a mollare', 'teacup']]],
      ['Quando studi meglio?', [['A tarda notte, quando la casa è silenziosa', 'owl'], ['Alla stessa ora ogni giorno', 'cat'], ['Quando trovo qualcuno con cui parlare', 'parrot'], ['In treno, mentre vado da qualche parte', 'suitcase']]],
      ['Scegli la serata perfetta:', [['Cena con amici di un altro paese', 'parrot'], ['Un romanzo e una teiera', 'teacup'], ['Un film straniero e il piano per il prossimo viaggio', 'suitcase'], ['Ancora sveglio dopo mezzanotte, felice e impegnato', 'owl']]],
    ],
    results: {
      parrot: ['Chiacchierone', 'Impari parlando, e gli errori non ti fanno paura. Prova a usare ogni parola nuova ad alta voce, in una frase tua, il giorno stesso in cui la impari.'],
      cat: ['Pianificatore', 'Ami gli orari e le liste di parole in ordine. Pianifica la settimana, ma tieni libera una sessione per usare quelle parole in una conversazione vera.'],
      suitcase: ['Esploratore', 'Film, musica e posti nuovi ti attirano. Guarda qualcosa che ami nella lingua che stai imparando e scrivi tre parole che senti.'],
      owl: ['Nottambulo', 'Il tuo cervello si sveglia quando gli altri vanno a dormire. Studia poco ma con regolarità prima di dormire, poi ripassa le stesse parole la sera dopo.'],
      teacup: ['Topo di biblioteca', 'Impari meglio leggendo, una pagina alla volta. Scegli un libro un po\' sotto il tuo livello, così leggi per la storia e non per il dizionario.'],
    },
  },
  related: ['buddy-quiz', 'german-word-quiz', 'city-quiz'],
};
