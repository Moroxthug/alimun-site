// Resource: quiz. English items stay English; explanations are in Italian.
export default {
  key: 'en-quiz-a2', site: 'it', slug: 'quiz-inglese-a2', kind: 'quiz', course: 'English', level: 'A2',
  draw: 'dog', tint: 'coral', published: '2026-10-26',
  title: 'Quiz veloce di inglese: dieci domande di livello A2',
  metaTitle: 'Quiz di inglese A2 gratis: grammatica e vocabolario – Alimun',
  desc: 'Un quiz gratis di inglese di livello A2 in dieci domande: past simple, comparativi, going to, some e any e preposizioni di tempo, con ogni risposta spiegata.',
  lead: 'Dieci domande sulla grammatica e sulle parole del livello A2. Scegli una risposta per vedere perché è giusta.',
  instructions: 'Scegli la risposta migliore.',
  about: [
    "All'A2 sai parlare del tuo passato, fare confronti e fare progetti semplici. Sai fare acquisti, ordinare da mangiare, chiedere indicazioni e scrivere brevi messaggi su argomenti quotidiani.",
    'Questo quiz verifica i punti che tornano più spesso a questo livello: il past simple, i comparativi, going to per progetti e previsioni, some e any, i sostantivi numerabili e non numerabili e le preposizioni di tempo. Ogni risposta ha una breve spiegazione.',
  ],
  items: [
    { q: 'We ___ to the beach last weekend.', options: ['go', 'went', 'gone', 'have gone'], a: 1, why: 'Last weekend è un momento concluso nel passato, quindi usa il past simple: went.' },
    { q: 'Did you ___ the email?', options: ['see', 'saw', 'seen', 'seeing'], a: 0, why: 'Dopo did in una domanda usa la forma base del verbo: did you see?' },
    { q: 'My sister is ___ than me.', options: ['more tall', 'tallest', 'tall', 'taller'], a: 3, why: 'Gli aggettivi brevi aggiungono -er per confrontare due cose: tall, taller.' },
    { q: 'This book is ___ than that one.', options: ['the most interesting', 'interestinger', 'more interesting', 'interesting'], a: 2, why: 'Gli aggettivi lunghi usano more per confrontare due cose: more interesting than.' },
    { q: 'Look at those dark clouds! It ___ rain.', options: ['is going to', 'will to', 'going to', 'is go to'], a: 0, why: 'Usa be going to per una previsione basata su quello che vedi in questo momento.' },
    { q: "There isn't ___ bread left.", options: ['some', 'any', 'many', 'a'], a: 1, why: 'Usa any nelle frasi negative; bread è non numerabile, quindi many e a sono sbagliati.' },
    { q: 'How ___ water do you drink every day?', options: ['much', 'many', 'few', 'lot'], a: 0, why: 'Water è non numerabile, quindi si usa how much; how many è per i sostantivi numerabili.' },
    { q: 'She gave me some good ___.', options: ['advices', 'an advice', 'advise', 'advice'], a: 3, why: 'Advice è un sostantivo non numerabile senza plurale; advise è il verbo.' },
    { q: 'The meeting is ___ Monday morning.', options: ['in', 'at', 'to', 'on'], a: 3, why: 'Usa on con i giorni, anche con le parti di un giorno preciso: on Monday morning.' },
    { q: 'I started this job three years ___.', options: ['ago', 'since', 'for', 'last'], a: 0, why: 'Ago va dopo una durata per dire quando è successo qualcosa nel passato.' },
  ],
  related: ['en-quiz-a1', 'en-quiz-b1', 'en-ex-a2'],
};
