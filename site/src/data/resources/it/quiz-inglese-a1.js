// Resource: quiz. English items stay English; explanations are in Italian.
export default {
  key: 'en-quiz-a1', site: 'it', slug: 'quiz-inglese-a1', kind: 'quiz', course: 'English', level: 'A1',
  draw: 'parrot', tint: 'sun', published: '2026-10-26',
  title: 'Quiz veloce di inglese: dieci domande di livello A1',
  metaTitle: 'Quiz di inglese A1 gratis: grammatica e vocabolario – Alimun',
  desc: 'Un quiz gratis di inglese di livello A1 in dieci domande: to be, articoli, plurali, there is e there are e parole di tutti i giorni, con ogni risposta spiegata.',
  lead: 'Dieci domande sulla prima grammatica e sulle prime parole che impari in inglese. Scegli una risposta per vedere perché è giusta.',
  instructions: 'Scegli la risposta migliore.',
  about: [
    "L'A1 è il primo livello di inglese. Sai presentarti, dire da dove vieni, parlare della tua famiglia e della tua giornata con frasi semplici, e capire domande brevi e lente su cose familiari.",
    'Questo quiz verifica le basi su cui si costruisce tutto il resto: il verbo to be, a e an, i plurali, there is e there are, le preposizioni più semplici e le parole più comuni di tutti i giorni. Ogni risposta ha una breve spiegazione.',
  ],
  items: [
    { q: 'She ___ a teacher.', options: ['am', 'is', 'are', 'be'], a: 1, why: 'Con he, she e it il verbo to be diventa is: she is a teacher.' },
    { q: 'My brother has ___ old car.', options: ['a', 'any', 'many', 'an'], a: 3, why: 'Usa an davanti a un suono vocalico: an old car, an apple.' },
    { q: 'I have two ___.', options: ['child', 'childs', 'children', 'childrens'], a: 2, why: 'Child ha un plurale irregolare: one child, two children.' },
    { q: '___ a park near my house.', options: ['There is', 'There are', 'It have', 'It are'], a: 0, why: 'Usa there is con una cosa sola (a park) e there are con più di una.' },
    { q: 'My birthday is ___ May.', options: ['on', 'in', 'at', 'to'], a: 1, why: 'Con i mesi si usa in: in May, in July.' },
    { q: 'My keys are ___ my bag.', options: ['in', 'at', 'of', 'to'], a: 0, why: 'Usa in per qualcosa che sta dentro un contenitore: in my bag, in the box.' },
    { q: 'You eat soup with a ___.', options: ['knife', 'plate', 'spoon', 'glass'], a: 2, why: 'Spoon è il cucchiaio, cioè quello che usi per mangiare la minestra.' },
    { q: '___ you like coffee?', options: ['Are', 'Is', 'Does', 'Do'], a: 3, why: 'Le domande con like usano do: do you like coffee? Con he, she e it si usa does.' },
    { q: 'He ___ have a car.', options: ["don't", "doesn't", "isn't", 'not'], a: 1, why: "Nella forma negativa si usa does not (doesn't) con he, she e it: he doesn't have a car." },
    { q: 'The opposite of big is ___.', options: ['tall', 'long', 'old', 'small'], a: 3, why: 'Big e small sono contrari: a big house, a small house.' },
  ],
  related: ['en-quiz-a2', 'en-ex-a1', 'en-quiz-b1'],
};
