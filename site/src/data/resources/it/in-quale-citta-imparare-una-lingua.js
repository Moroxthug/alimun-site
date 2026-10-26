// Resource: fun. Each option votes for a drawing from the cast; the result is a city to learn English or German in.
export default {
  key: 'city-quiz', site: 'it', slug: 'in-quale-citta-imparare-una-lingua', kind: 'fun', course: null, level: 'Per divertirsi',
  draw: 'suitcase', tint: 'mint', published: '2026-10-27',
  title: 'In quale città dovresti imparare la tua nuova lingua?',
  metaTitle: 'In quale città dovresti imparare inglese o tedesco? Quiz – Alimun',
  desc: 'Un quiz gratis di tre domande: Londra, Dublino, New York, Berlino, Vienna o Zurigo? Trova la città adatta al tuo modo di vivere e imparare, poi condividila.',
  lead: "Londra o Berlino? New York o Vienna? Tre domande per scoprire la città dove impareresti meglio l'inglese o il tedesco.",
  about: [
    'Il posto dove fai pratica cambia il modo in cui impari: una città grande e frenetica ti fa parlare, una tranquilla ti dà il tempo di ascoltare.',
    'Questo quiz è solo per divertirsi. Non serve trasferirsi per imparare, ma è bello sapere dove ti sentiresti a casa.',
  ],
  youAre: 'La tua città: {}',
  buddy: {
    questions: [
      ['La tua serata perfetta?', [['Uno spettacolo in un grande teatro', 'teacup'], ['Musica dal vivo in un pub accogliente', 'cat'], ['Un bar su una terrazza panoramica', 'sun'], ['Un club che apre a mezzanotte', 'pretzel']]],
      ['Scegli una colazione:', [['Tè e pane tostato', 'teacup'], ['Un bagel da portare via', 'sun'], ['Caffè e una fetta di torta', 'croissant'], ['Panini appena sfornati', 'pretzel']]],
      ['Come ti piace spostarti?', [['In metropolitana', 'teacup'], ['A piedi, chiacchierando con la gente', 'cat'], ['In tram, con calma', 'croissant'], ['In treno, sempre puntuale', 'owl']]],
    ],
    results: {
      teacup: ['Londra', 'Teatri, musei e una tazza di tè a ogni angolo. Ami le città piene di storia e di energia.'],
      cat: ['Dublino', 'Accogliente, musicale e piena di storie. Impari meglio parlando con tutti quelli che incontri.'],
      sun: ['New York', 'Veloce, luminosa e aperta tutta la notte. Impari buttandoti e parlando fin dal primo giorno.'],
      pretzel: ['Berlino', 'Creativa, rilassata e sempre sveglia. Ti piace una città che ti lascia essere te stesso.'],
      croissant: ['Vienna', 'Caffè storici, musica e strade eleganti. Ti piace prenderti il tuo tempo e godertelo.'],
      owl: ['Zurigo', 'Tranquilla, pulita e perfettamente puntuale. Ti piacciono i piani ben fatti e i bei panorami.'],
    },
  },
  related: ['buddy-quiz', 'german-word-quiz', 'british-american'],
};
