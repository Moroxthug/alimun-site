// Resource: quiz. English items stay English; explanations are in French.
export default {
  key: 'en-quiz-a1', site: 'fr', slug: 'quiz-anglais-a1', kind: 'quiz', course: 'English', level: 'A1',
  draw: 'parrot', tint: 'sun', published: '2026-10-26',
  title: "Quiz d'anglais rapide : dix questions de niveau A1",
  metaTitle: "Quiz d'anglais A1 gratuit : grammaire et vocabulaire – Alimun",
  desc: "Un quiz d'anglais gratuit de dix questions au niveau A1 : to be, a et an, pluriels, there is et there are, mots du quotidien, chaque réponse expliquée.",
  lead: "Dix questions sur la première grammaire et les premiers mots que tu apprends en anglais. Choisis une réponse pour voir pourquoi elle est juste.",
  instructions: 'Choisis la meilleure réponse.',
  about: [
    "L'A1, c'est le premier niveau d'anglais. Tu sais te présenter, dire d'où tu viens, parler de ta famille et de ta journée avec des phrases simples, et comprendre des questions courtes et lentes sur des sujets familiers.",
    "Ce quiz vérifie les bases sur lesquelles tout le reste se construit : le verbe to be, a et an, le pluriel des noms, there is et there are, les prépositions simples et les mots courants du quotidien. Chaque réponse est accompagnée d'une courte explication.",
  ],
  items: [
    { q: 'She ___ a teacher.', options: ['am', 'is', 'are', 'be'], a: 1, why: 'Avec he, she et it, le verbe to be devient is : she is a teacher.' },
    { q: 'My brother has ___ old car.', options: ['a', 'any', 'many', 'an'], a: 3, why: 'On utilise an devant un son voyelle : an old car, an apple.' },
    { q: 'I have two ___.', options: ['child', 'childs', 'children', 'childrens'], a: 2, why: 'Child a un pluriel irrégulier : one child, two children.' },
    { q: '___ a park near my house.', options: ['There is', 'There are', 'It have', 'It are'], a: 0, why: 'On utilise there is avec une seule chose (a park) et there are avec plusieurs.' },
    { q: 'My birthday is ___ May.', options: ['on', 'in', 'at', 'to'], a: 1, why: 'On utilise in avec les mois : in May, in July.' },
    { q: 'My keys are ___ my bag.', options: ['in', 'at', 'of', 'to'], a: 0, why: "On utilise in pour quelque chose qui se trouve à l'intérieur : in my bag, in the box." },
    { q: 'You eat soup with a ___.', options: ['knife', 'plate', 'spoon', 'glass'], a: 2, why: "A spoon, c'est la cuillère, ce qu'on utilise pour manger la soupe." },
    { q: '___ you like coffee?', options: ['Are', 'Is', 'Does', 'Do'], a: 3, why: 'Les questions avec like se forment avec do : do you like coffee? Avec he, she et it, on utilise does.' },
    { q: 'He ___ have a car.', options: ["don't", "doesn't", "isn't", 'not'], a: 1, why: "À la forme négative, on utilise does not (doesn't) avec he, she et it : he doesn't have a car." },
    { q: 'The opposite of big is ___.', options: ['tall', 'long', 'old', 'small'], a: 3, why: 'Big et small sont des contraires : a big house, a small house.' },
  ],
  related: ['en-quiz-a2', 'en-ex-a1', 'en-quiz-b1'],
};
