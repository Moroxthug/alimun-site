// Resource: quiz. English items stay English; explanations are in Italian.
export default {
  key: 'en-quiz-c1', site: 'it', slug: 'quiz-inglese-c1', kind: 'quiz', course: 'English', level: 'C1',
  draw: 'alien', tint: 'mint', published: '2026-10-26',
  title: 'Quiz veloce di inglese: dieci domande di livello C1',
  metaTitle: 'Quiz di inglese C1 gratis: grammatica e vocabolario – Alimun',
  desc: 'Un quiz gratis di inglese di livello C1 in dieci domande: inversione, frasi scisse, collocazioni, modi di dire e parole che si confondono, con ogni risposta spiegata.',
  lead: 'Dieci domande sulla grammatica e sulle parole del livello C1. Scegli una risposta per vedere perché è giusta.',
  instructions: 'Scegli la risposta migliore.',
  about: [
    "Al C1 usi l'inglese con flessibilità per lavoro, studio e vita sociale. Capisci testi lunghi e impegnativi, cogli i significati impliciti e ti esprimi con scioltezza senza cercare le parole. L'obiettivo non è più dirlo in modo corretto, ma scegliere il modo più preciso e naturale per dirlo.",
    "Questo quiz verifica l'inversione dopo inizi negativi e ipotetici, le frasi scisse per dare enfasi, le collocazioni avanzate, i modi di dire più comuni e le parole che si somigliano ma hanno significati diversi. Sono punti che compaiono anche nel C1 Advanced e nell'IELTS. Ogni risposta ha una breve spiegazione.",
  ],
  items: [
    { q: 'Never ___ such a beautiful sunset.', options: ['I have seen', 'have I seen', 'I saw', 'did I saw'], a: 1, why: 'Quando una frase comincia con una parola negativa come never, soggetto e ausiliare si scambiano di posto: never have I seen.' },
    { q: 'Not only ___ late, but he also forgot the tickets.', options: ['did he arrive', 'he arrived', 'he did arrive', 'arrived he'], a: 0, why: "Dopo not only a inizio frase si usa l'ordine della domanda con un ausiliare: not only did he arrive." },
    { q: '___ I known about the problem, I would have helped.', options: ['If', 'Have', 'Had', 'Should'], a: 2, why: 'Had I known è un periodo ipotetico di terzo tipo con inversione e significa lo stesso di if I had known.' },
    { q: '___ I need is a long vacation.', options: ['That', 'What', 'Which', 'It'], a: 1, why: "Una frase scissa con what mette l'accento sulla fine: what I need is a long vacation." },
    { q: 'It was Maria ___ found the mistake, not Tom.', options: ['which', 'what', 'who', 'whom'], a: 2, why: 'In una frase scissa con it su una persona che fa da soggetto si usa who (o that): it was Maria who found it.' },
    { q: 'The report ___ serious doubts about the project.', options: ['rose', 'arose', 'raised', 'lifted'], a: 2, why: "Raise ha un complemento oggetto e si combina con doubts, questions e concerns; rise e arise non ce l'hanno." },
    { q: 'The decision ___ a storm of protest.', options: ['lit', 'fired', 'burned', 'sparked'], a: 3, why: "Spark si combina con protest, debate e controversy e significa provocarli all'improvviso." },
    { q: 'I expected the exam to be hard, but it was a ___.', options: ['cup of tea', 'piece of cake', 'slice of bread', 'bag of tricks'], a: 1, why: 'A piece of cake è un modo di dire per una cosa molto facile.' },
    { q: 'We will have to ___ the bullet and pay for the repairs.', options: ['chew', 'hit', 'take', 'bite'], a: 3, why: 'Bite the bullet significa accettare qualcosa di sgradevole che non si può evitare.' },
    { q: 'The instructions were so ___ that nobody knew what to do.', options: ['ambivalent', 'ambitious', 'ambiguous', 'amiable'], a: 2, why: "Ambiguous significa che si presta a più di un'interpretazione; ambivalent descrive sentimenti contrastanti, non testi." },
  ],
  related: ['en-quiz-b2', 'en-ex-c1', 'en-ex-b2'],
};
