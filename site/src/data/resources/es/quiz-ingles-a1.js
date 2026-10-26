// Resource: quiz. English items stay English; explanations are in Spanish.
export default {
  key: 'en-quiz-a1', site: 'es', slug: 'quiz-ingles-a1', kind: 'quiz', course: 'English', level: 'A1',
  draw: 'parrot', tint: 'sun', published: '2026-10-26',
  title: 'Quiz rápido de inglés: diez preguntas de nivel A1',
  metaTitle: 'Quiz de inglés A1 gratis: gramática y vocabulario – Alimun',
  desc: 'Un quiz de inglés gratis de diez preguntas de nivel A1: to be, artículos, plurales, there is y there are y palabras cotidianas, con cada respuesta explicada.',
  lead: 'Diez preguntas sobre la primera gramática y las primeras palabras que aprendes en inglés. Elige una respuesta para ver por qué es la correcta.',
  instructions: 'Elige la mejor respuesta.',
  about: [
    'El A1 es el primer nivel de inglés. Puedes presentarte, decir de dónde eres, hablar de tu familia y de tu día con frases sencillas y entender preguntas cortas y lentas sobre cosas conocidas.',
    'Este quiz repasa la base sobre la que se construye todo lo demás: el verbo to be, a y an, los plurales, there is y there are, preposiciones sencillas y palabras de uso diario. Cada respuesta viene con una explicación breve.',
  ],
  items: [
    { q: 'She ___ a teacher.', options: ['am', 'is', 'are', 'be'], a: 1, why: 'Con he, she e it, el verbo to be es is: she is a teacher.' },
    { q: 'My brother has ___ old car.', options: ['a', 'any', 'many', 'an'], a: 3, why: 'Se usa an delante de un sonido vocálico: an old car, an apple.' },
    { q: 'I have two ___.', options: ['child', 'childs', 'children', 'childrens'], a: 2, why: 'Child tiene un plural irregular: one child, two children.' },
    { q: '___ a park near my house.', options: ['There is', 'There are', 'It have', 'It are'], a: 0, why: 'Se usa there is con una sola cosa (a park) y there are con más de una.' },
    { q: 'My birthday is ___ May.', options: ['on', 'in', 'at', 'to'], a: 1, why: 'Se usa in con los meses: in May, in July.' },
    { q: 'My keys are ___ my bag.', options: ['in', 'at', 'of', 'to'], a: 0, why: 'Se usa in para algo que está dentro de un recipiente: in my bag, in the box.' },
    { q: 'You eat soup with a ___.', options: ['knife', 'plate', 'spoon', 'glass'], a: 2, why: 'A spoon (una cuchara) es lo que usas para comer sopa.' },
    { q: '___ you like coffee?', options: ['Are', 'Is', 'Does', 'Do'], a: 3, why: 'Las preguntas con like llevan do: do you like coffee? Con he, she e it se usa does.' },
    { q: 'He ___ have a car.', options: ['don\'t', 'doesn\'t', 'isn\'t', 'not'], a: 1, why: 'En negativo se usa does not (doesn\'t) con he, she e it: he doesn\'t have a car.' },
    { q: 'The opposite of big is ___.', options: ['tall', 'long', 'old', 'small'], a: 3, why: 'Big y small son contrarios: a big house, a small house.' },
  ],
  related: ['en-quiz-a2', 'en-ex-a1', 'en-quiz-b1'],
};
