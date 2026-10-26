// Resource: quiz. English items stay English; explanations are in Italian.
export default {
  key: 'en-quiz-b1', site: 'it', slug: 'quiz-inglese-b1', kind: 'quiz', course: 'English', level: 'B1',
  draw: 'parrot', tint: 'mint', published: '2026-10-26',
  title: 'Quiz veloce di inglese: dieci domande di livello B1',
  metaTitle: 'Quiz di inglese B1 gratis: grammatica e vocabolario – Alimun',
  desc: 'Un quiz gratis di inglese di livello B1 in dieci domande: tempi verbali, preposizioni e vocabolario di tutti i giorni, con ogni risposta spiegata.',
  lead: 'Dieci domande sulla grammatica e sulle parole del livello B1. Scegli una risposta per vedere perché è giusta.',
  instructions: 'Scegli la risposta migliore.',
  about: [
    "Il B1 è il livello in cui te la cavi nella maggior parte delle situazioni quotidiane: parli di esperienze e progetti, e cominci a usare con sicurezza il present perfect, il past continuous e il periodo ipotetico di primo tipo.",
    "Questo quiz mette insieme i punti su cui chi studia a questo livello fa più domande. Ogni risposta ha una breve spiegazione, così impari qualcosa anche quando sbagli.",
  ],
  items: [
    { q: 'I have lived in this city ___ 2019.', options: ['for', 'since', 'from', 'during'], a: 1, why: 'Usa since con un punto di partenza nel tempo (2019) e for con una durata (seven years).' },
    { q: 'She ___ dinner when the phone rang.', options: ['cooked', 'was cooking', 'has cooked', 'cooks'], a: 1, why: "Il past continuous descrive un'azione in corso quando è successo qualcos'altro." },
    { q: 'If it rains tomorrow, we ___ at home.', options: ['stay', 'will stay', 'would stay', 'stayed'], a: 1, why: 'Periodo ipotetico di primo tipo: if + present simple, poi will + verbo.' },
    { q: 'Have you ever ___ to Canada?', options: ['gone', 'went', 'been', 'go'], a: 2, why: 'Per una visita già conclusa si usa been: have you ever been to Canada?' },
    { q: 'I am really looking forward ___ you.', options: ['to see', 'to seeing', 'seeing', 'see'], a: 1, why: 'In look forward to, to è una preposizione, quindi il verbo prende -ing.' },
    { q: 'He is good ___ math.', options: ['in', 'on', 'at', 'with'], a: 2, why: 'Si dice good at something: good at math, good at tennis.' },
    { q: 'We ran out ___ milk, so I went to the shop.', options: ['from', 'of', 'off', 'with'], a: 1, why: 'Run out of significa non averne più, finire qualcosa.' },
    { q: 'This is the ___ film I have ever seen.', options: ['worse', 'baddest', 'worst', 'most bad'], a: 2, why: 'Bad è irregolare: bad, worse, the worst.' },
    { q: 'You ___ wear a seatbelt in the car. It is the law.', options: ['must', 'might', 'could', 'would'], a: 0, why: "Must esprime un obbligo forte, come una regola o una legge." },
    { q: 'Can you ___ the music down, please? I am on the phone.', options: ['put', 'take', 'turn', 'make'], a: 2, why: 'Turn down significa abbassare il volume: turn the music down.' },
  ],
  related: ['de-articles-a1', 'en-reading-a2', 'buddy-quiz'],
};
