// Resource: exercise. German items stay German; instructions and explanations are in Spanish.
export default {
  key: 'de-articles-a1', site: 'es', slug: 'ejercicio-articulos-aleman-a1', kind: 'exercise', course: 'German', level: 'A1',
  draw: 'pretzel', tint: 'sun', published: '2026-10-26',
  title: 'Ejercicio de artículos en alemán: ¿der, die o das? (A1)',
  metaTitle: 'Ejercicio de artículos en alemán der, die, das (A1) – Alimun',
  desc: 'Doce preguntas gratis sobre der, die y das para el nivel A1 de alemán, con corrección inmediata y una explicación para cada respuesta.',
  lead: 'Elige der, die o das para cada sustantivo. Ves al momento si aciertas y por qué.',
  instructions: 'Elige el artículo correcto.',
  about: [
    'En alemán cada sustantivo tiene un género y el artículo lo indica: der para el masculino, die para el femenino y das para el neutro. En plural, los tres usan die.',
    'Muchos sustantivos delatan su género por la terminación: los que acaban en -ung, -heit y -keit son femeninos, los que acaban en -chen son neutros, y los días, los meses y las estaciones son masculinos. El resto se aprende junto con el sustantivo, por eso merece la pena decir siempre el artículo en voz alta.',
  ],
  items: [
    { q: '___ Zeitung', options: ['der', 'die', 'das'], a: 1, why: 'Los sustantivos que acaban en -ung son femeninos: die Zeitung.' },
    { q: '___ Mädchen', options: ['der', 'die', 'das'], a: 2, why: 'Los sustantivos que acaban en -chen son siempre neutros, aunque se refieran a una persona: das Mädchen.' },
    { q: '___ Montag', options: ['der', 'die', 'das'], a: 0, why: 'Los días de la semana son masculinos: der Montag.' },
    { q: '___ Freiheit', options: ['der', 'die', 'das'], a: 1, why: 'Los sustantivos que acaban en -heit son femeninos: die Freiheit.' },
    { q: '___ Sommer', options: ['der', 'die', 'das'], a: 0, why: 'Las estaciones del año son masculinas: der Sommer.' },
    { q: '___ Brötchen', options: ['der', 'die', 'das'], a: 2, why: 'La terminación -chen hace que el sustantivo sea neutro: das Brötchen.' },
    { q: '___ Universität', options: ['der', 'die', 'das'], a: 1, why: 'Los sustantivos que acaban en -tät son femeninos: die Universität.' },
    { q: '___ Januar', options: ['der', 'die', 'das'], a: 0, why: 'Los meses son masculinos: der Januar.' },
    { q: '___ Möglichkeit', options: ['der', 'die', 'das'], a: 1, why: 'Los sustantivos que acaban en -keit son femeninos: die Möglichkeit.' },
    { q: '___ Haustür', options: ['der', 'die', 'das'], a: 1, why: 'Un sustantivo compuesto toma el género de su última parte: die Tür, así que die Haustür.' },
    { q: '___ Bücher (plural)', options: ['der', 'die', 'das'], a: 1, why: 'En plural todos los sustantivos llevan die: die Bücher.' },
    { q: '___ Museum', options: ['der', 'die', 'das'], a: 2, why: 'La mayoría de los sustantivos que acaban en -um son neutros: das Museum.' },
  ],
  related: ['en-quiz-b1', 'de-articles-sheet', 'false-friends'],
};
