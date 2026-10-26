// Resource: game. German words with no one-word Italian translation. Meanings checked against Duden and DWDS.
// German words stay German; options and explanations are in Italian.
export default {
  key: 'untranslatable-german', site: 'it', slug: 'parole-tedesche-intraducibili-gioco', kind: 'game', course: 'German', level: 'Tutti i livelli',
  draw: 'ghost', tint: 'mint', published: '2026-10-27',
  title: 'Parole tedesche intraducibili: il gioco',
  metaTitle: 'Parole tedesche intraducibili: gioco con Fernweh e altre – Alimun',
  desc: "Un gioco gratis con parole tedesche che l'italiano non sa dire con una parola sola: Fernweh, Kummerspeck, Fremdschämen, Feierabend. Indovina cosa vogliono dire.",
  lead: "Il tedesco ha una parola per i chili che prendi mangiando quando sei triste. Indovina il significato di dieci parole per cui all'italiano serve una frase intera.",
  instructions: 'Cosa significa la parola?',
  about: [
    'Ogni lingua racchiude in una sola parola idee per cui le altre hanno bisogno di una frase. Il tedesco lo fa spesso, perché può unire le parole liberamente.',
    'Queste parole sono vere e si usano ogni giorno: sono un ottimo modo per sembrare naturale e per iniziare una conversazione con chi parla tedesco.',
  ],
  items: [
    { q: 'Fernweh', options: ['la voglia di partire per luoghi lontani', 'la paura di volare', 'la nostalgia di casa', 'un lungo viaggio'], a: 0, why: 'Fernweh è il contrario di Heimweh (nostalgia di casa): hai voglia di essere lontano.' },
    { q: 'Kummerspeck', options: ['una canzone triste', 'i chili presi mangiando quando sei triste', 'pancetta vecchia', 'il malumore del mattino'], a: 1, why: 'Letteralmente lardo del dispiacere: i chili in più presi mangiando per consolarsi.' },
    { q: 'Fremdschämen', options: ['essere timidi con gli sconosciuti', 'vergognarsi del proprio accento', 'provare imbarazzo per qualcun altro', 'la paura degli stranieri'], a: 2, why: 'Fremdschämen è vergognarsi al posto di qualcuno che si sta rendendo ridicolo.' },
    { q: 'Feierabend', options: ['una festa di compleanno', 'un giorno festivo', 'la notte di Capodanno', 'la fine della giornata di lavoro'], a: 3, why: 'Feierabend è la fine della giornata di lavoro e il tempo libero che viene dopo: Schönen Feierabend!' },
    { q: 'Verschlimmbessern', options: ['peggiorare una cosa cercando di migliorarla', 'riparare qualcosa', 'lamentarsi tanto', 'dimenticare un appuntamento'], a: 0, why: 'Un incrocio tra verschlimmern (peggiorare) e verbessern (migliorare).' },
    { q: 'Torschlusspanik', options: ['la paura delle porte chiuse', 'la paura che il tempo per fare qualcosa stia finendo', 'il panico prima di una partita', 'il panico da palcoscenico'], a: 1, why: 'Letteralmente panico della chiusura del portone: la paura che si stia facendo troppo tardi, per esempio per sposarsi o cambiare lavoro.' },
    { q: 'Treppenwitz', options: ['una barzelletta sulle scale', 'una caduta goffa', 'la risposta perfetta che ti viene in mente troppo tardi', 'una battuta che nessuno capisce'], a: 2, why: 'Letteralmente battuta delle scale: la risposta brillante che ti viene in mente quando ormai te ne stai andando.' },
    { q: 'Schnapsidee', options: ['un ottimo piano aziendale', 'una ricetta per un liquore', 'i postumi di una sbornia', "un'idea pazza che sul momento sembra buona"], a: 3, why: "Un'idea da grappa è un piano assurdo, di quelli che vengono in mente dopo un bicchierino." },
    { q: 'Ohrwurm', options: ['una canzone che non ti esce dalla testa', "un'otite", 'un vicino rumoroso', 'un sussurro'], a: 0, why: "Letteralmente verme dell'orecchio: un motivetto che continua a suonarti in testa, come un tormentone." },
    { q: 'Backpfeifengesicht', options: ['una faccia allegra', 'una faccia che sembra chiedere uno schiaffo', 'una faccia sporca di farina', 'una faccia da bambino'], a: 1, why: 'È la nostra "faccia da schiaffi", una parola scortese e buffa. Meglio usarla solo per scherzare tra amici.' },
  ],
  pairs: [
    ['Fernweh', 'La voglia di luoghi lontani'],
    ['Kummerspeck', 'I chili presi mangiando quando sei triste'],
    ['Fremdschämen', 'Provare imbarazzo per qualcun altro'],
    ['Feierabend', 'La fine della giornata di lavoro'],
    ['Verschlimmbessern', 'Peggiorare cercando di migliorare'],
    ['Torschlusspanik', 'La paura che il tempo stia finendo'],
    ['Treppenwitz', 'La risposta perfetta, pensata troppo tardi'],
    ['Ohrwurm', 'Una canzone che ti resta in testa'],
  ],
  related: ['german-idioms', 'german-compounds', 'false-friends'],
};
