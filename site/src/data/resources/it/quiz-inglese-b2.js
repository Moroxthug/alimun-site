// Resource: quiz. English items stay English; explanations are in Italian.
export default {
  key: 'en-quiz-b2', site: 'it', slug: 'quiz-inglese-b2', kind: 'quiz', course: 'English', level: 'B2',
  draw: 'monster', tint: 'lime', published: '2026-10-26',
  title: 'Quiz veloce di inglese: dieci domande di livello B2',
  metaTitle: 'Quiz di inglese B2 gratis: grammatica e vocabolario – Alimun',
  desc: 'Un quiz gratis di inglese di livello B2 in dieci domande: passivo, discorso indiretto, wish, used to, phrasal verbs e collocazioni, con ogni risposta spiegata.',
  lead: 'Dieci domande sulla grammatica e sulle parole del livello B2. Scegli una risposta per vedere perché è giusta.',
  instructions: 'Scegli la risposta migliore.',
  about: [
    'Al B2 segui la maggior parte delle conversazioni, dei notiziari e dei film su argomenti familiari, sostieni un punto di vista e scrivi testi chiari e dettagliati. Ora conta di più la precisione: il passivo, il discorso indiretto e le combinazioni di parole naturali cominciano a fare la differenza.',
    'Questo quiz verifica il passivo, le domande e gli ordini al discorso indiretto, wish, used to e be used to, i phrasal verbs più comuni e le collocazioni. Sono anche punti che compaiono spesso nel B2 First. Ogni risposta ha una breve spiegazione.',
  ],
  items: [
    { q: 'The bridge ___ in 1990.', options: ['built', 'has built', 'was building', 'was built'], a: 3, why: "Il ponte non ha costruito niente, ha subito l'azione, quindi usa il passivo: was built." },
    { q: 'The new hospital ___ right now, so the road is closed.', options: ['is building', 'has built', 'builds', 'is being built'], a: 3, why: "Per un'azione passiva in corso adesso usa is being + participio passato." },
    { q: 'He asked me where ___.', options: ['I lived', 'did I live', 'do I live', 'I did live'], a: 0, why: "In una domanda al discorso indiretto usa l'ordine normale della frase affermativa e sposta il tempo indietro: where I lived." },
    { q: 'She told me ___ the door.', options: ['to close', 'close', 'closing', 'that close'], a: 0, why: 'Per riferire un ordine usa tell someone to do something.' },
    { q: 'I wish I ___ more free time. I am so busy this week.', options: ['have', 'will have', 'had', 'would have'], a: 2, why: 'Per un desiderio sul presente usa wish + past simple: I wish I had.' },
    { q: 'I wish I ___ to the party last night. Everyone says it was great.', options: ['went', 'had gone', 'have gone', 'would go'], a: 1, why: 'Per un rimpianto sul passato usa wish + past perfect: I wish I had gone.' },
    { q: 'I have lived in Chicago for years, so I ___ the cold winters.', options: ['used to', 'use to', 'am use to', 'am used to'], a: 3, why: 'Be used to + sostantivo significa essere abituato a qualcosa, che quindi non ti sembra più strano.' },
    { q: 'When I was a child, I ___ play outside every day.', options: ['used to', 'am used to', 'was used to', 'use to'], a: 0, why: "Used to + forma base del verbo descrive un'abitudine passata che oggi non è più vera." },
    { q: 'The game was ___ because of the storm.', options: ['called up', 'called on', 'called off', 'called out'], a: 2, why: 'Call off significa annullare qualcosa che era in programma.' },
    { q: 'When you choose a school, you should ___ into account how far it is from home.', options: ['make', 'put', 'take', 'give'], a: 2, why: "L'espressione fissa è take something into account, cioè tenere conto di qualcosa." },
  ],
  related: ['en-quiz-b1', 'en-quiz-c1', 'en-ex-b2'],
};
