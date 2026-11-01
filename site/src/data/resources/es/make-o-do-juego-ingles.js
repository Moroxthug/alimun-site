// Resource: game. Make or do: ten English collocations learners mix up. Collocations and usage checked against Cambridge Dictionary and Oxford Learner's Dictionaries.
// The English sentences, verbs and phrases stay English; explanations and translations are in Spanish.
export default {
  key: 'make-or-do', site: 'es', slug: 'make-o-do-juego-ingles', kind: 'game', course: 'English', level: 'Todos los niveles',
  draw: 'owl', tint: 'mint', published: '2026-11-01',
  title: '¿Make o do? El juego para no confundirlos más en inglés',
  metaTitle: 'Make o do: juego con 10 colocaciones en inglés – Alimun',
  desc: 'Un juego gratis con diez colocaciones del inglés de todos los días, de make a mistake a do your homework. Elige make, do u otro verbo y une las parejas.',
  lead: '¿Make a mistake o do a mistake? ¿Do your homework o make? Elige el verbo correcto en diez frases del inglés de todos los días.',
  instructions: '¿Qué verbo completa la frase?',
  about: [
    'En español decimos hacer en los dos casos, pero el inglés tiene dos verbos, make y do, y es fácil confundirlos. Por regla general, do se usa para tareas, trabajos y actividades, y make para crear, producir o causar algo.',
    'La regla tiene excepciones, como make the bed y do someone a favour, así que aprende cada expresión entera, verbo y sustantivo juntos. Cuanto más inglés leas y escuches, más natural te sonará el verbo correcto.',
  ],
  items: [
    { q: "Don't worry, everyone ___ mistakes when they're learning.", options: ['makes', 'does', 'has', 'takes'], a: 0, why: 'Se dice make a mistake, nunca do. Do es para tareas y trabajos, make para crear o causar algo, y un error es algo que causas.' },
    { q: 'I have to ___ my homework before dinner.', options: ['make', 'give', 'do', 'have'], a: 2, why: 'Los deberes son una tarea, así que llevan do, como do the housework y do an exercise. Make homework es incorrecto.' },
    { q: 'We need to ___ a decision by Friday.', options: ['do', 'make', 'give', 'have'], a: 1, why: 'Make a decision es la expresión habitual. En inglés británico también se dice take a decision, sobre todo en contextos formales, pero nunca do a decision.' },
    { q: "It's your turn to ___ the dishes tonight.", options: ['make', 'have', 'give', 'do'], a: 3, why: 'Las tareas de casa llevan do: do the dishes, do the laundry, do the cleaning. Una excepción conocida es make the bed, hacer la cama.' },
    { q: 'She ___ a real effort to speak only English in class.', options: ['did', 'made', 'had', 'got'], a: 1, why: 'Make an effort, como make progress y make a difference: produces algo, así que en inglés se usa make.' },
    { q: "It's a pleasure to ___ business with you.", options: ['make', 'take', 'do', 'give'], a: 2, why: 'Do business es una expresión fija, aunque los negocios creen cosas. Apréndela entera: do business with someone, hacer negocios con alguien.' },
    { q: 'He ___ a lot of friends at university.', options: ['did', 'took', 'gave', 'made'], a: 3, why: 'Make friends significa hacer amigos, crear amistades nuevas. En pasado es made friends.' },
    { q: 'Could you ___ me a favour and close the window?', options: ['do', 'make', 'give', 'take'], a: 0, why: 'Do someone a favour es una excepción: un favor no es realmente una tarea, pero siempre lleva do. En inglés americano se escribe favor.' },
    { q: 'I have to ___ a phone call to my bank before it closes.', options: ['do', 'take', 'make', 'get'], a: 2, why: 'Make a phone call, como make a complaint y make a suggestion. Take a phone call también existe, pero significa contestar una llamada.' },
    { q: "Don't worry about the result, just ___ your best.", options: ['do', 'make', 'have', 'take'], a: 0, why: 'Do your best es una expresión fija que significa hacerlo lo mejor que puedas. Make your best es incorrecto.' },
  ],
  pairs: [
    ['a mistake', 'make a mistake (cometer un error)'],
    ['homework', 'do homework (hacer los deberes)'],
    ['a decision', 'make a decision (tomar una decisión)'],
    ['the dishes', 'do the dishes (fregar los platos)'],
    ['friends', 'make friends (hacer amigos)'],
    ['business', 'do business (hacer negocios)'],
    ['a phone call', 'make a phone call (hacer una llamada)'],
    ['your best', 'do your best (hacerlo lo mejor posible)'],
  ],
  related: ['english-idioms', 'false-friends', 'en-verbs-sheet'],
};
