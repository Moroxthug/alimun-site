// Resource: fun. Each option votes for a buddy from the drawing cast; the most votes wins.
export default {
  key: 'buddy-quiz', site: 'it', slug: 'quale-language-buddy-sei', kind: 'fun', course: null, level: 'Per divertirsi',
  draw: 'churro', tint: 'sun', published: '2026-10-26',
  title: 'Quale language buddy sei?',
  metaTitle: 'Quale language buddy sei? Quiz divertente per chi studia – Alimun',
  desc: 'Un quiz gratis di tre domande per chi studia le lingue: scopri il buddy di Alimun che corrisponde al tuo modo di imparare, poi condividilo con un amico.',
  lead: 'Tre domande sul tuo modo di imparare. Alla fine conosci il tuo buddy, e puoi condividerlo con un amico.',
  about: [
    'Ognuno impara una lingua in modo un po\' diverso. Qualcuno impara parlando, qualcuno pianificando, qualcuno con film e musica.',
    'Questo quiz è solo per divertirsi, ma il risultato dice qualcosa di vero su di te: il modo in cui impari meglio è quello che ti fa andare avanti.',
  ],
  buddy: {
    questions: [
      ['Come ti piace imparare?', [['Parlando con le persone', 'churro'], ['Con un piano chiaro e delle regole', 'pretzel'], ['Con film e musica', 'croissant'], ['Con una tazza di tè e un buon libro', 'teacup']]],
      ['Il tuo weekend ideale?', [['Un lungo pranzo con gli amici', 'pizza'], ['Un viaggio in un posto nuovo', 'nata'], ['Un museo, poi un caffè', 'croissant'], ['Organizzare la settimana dopo', 'pretzel']]],
      ['Quando fai un errore...', [['Rido e vado avanti', 'churro'], ['Lo scrivo per correggerlo', 'pretzel'], ['Chiedo a qualcuno di spiegarmelo', 'teacup'], ['Riprovo, a voce più alta', 'pizza']]],
    ],
    results: {
      churro: ['Churro', 'Caloroso, socievole e senza paura. Impari più in fretta parlando.'],
      pretzel: ['Brezel', 'Organizzato e costante. Regole e abitudini sono il tuo superpotere.'],
      croissant: ['Croissant', 'Curioso e con stile. Film, musica e cultura ti conquistano.'],
      teacup: ['Tazza di tè', 'Calmo e riflessivo. Ti piace capire prima di parlare.'],
      pizza: ['Pizza', 'Generoso ed espressivo. Impari con le mani e con il cuore.'],
      nata: ['Pastel de nata', 'Avventuroso. Posti nuovi e parole nuove sono quello che ami.'],
    },
  },
  related: ['false-friends', 'en-quiz-b1', 'cefr-poster'],
};
