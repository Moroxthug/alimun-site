// Resource: fun. Each option votes for a drawing from the cast; the result is a city to learn English or German in.
export default {
  key: 'city-quiz', site: 'es', slug: 'en-que-ciudad-aprender-idiomas', kind: 'fun', course: null, level: 'Solo por diversión',
  draw: 'suitcase', tint: 'mint', published: '2026-10-27',
  title: '¿En qué ciudad deberías aprender tu nuevo idioma?',
  metaTitle: '¿En qué ciudad deberías aprender inglés o alemán? – Alimun',
  desc: 'Un quiz gratis de tres preguntas: ¿Londres, Dublín, Nueva York, Berlín, Viena o Zúrich? Descubre la ciudad que encaja con tu forma de vivir y aprender.',
  lead: '¿Londres o Berlín? ¿Nueva York o Viena? Tres preguntas para descubrir la ciudad donde mejor aprenderías inglés o alemán.',
  about: [
    'El lugar donde practicas cambia tu forma de aprender: una ciudad grande y ajetreada te hace hablar, una tranquila te da tiempo para escuchar.',
    'Este quiz es solo por diversión. No hace falta mudarse para aprender, pero está bien saber dónde te sentirías como en casa.',
  ],
  youAre: 'Tu ciudad: {}',
  buddy: {
    questions: [
      ['¿Tu noche perfecta?', [['Un espectáculo en un gran teatro', 'teacup'], ['Música en directo en un pub acogedor', 'cat'], ['Una terraza en una azotea con vistas', 'sun'], ['Un club que abre a medianoche', 'pretzel']]],
      ['Elige un desayuno:', [['Té y tostadas', 'teacup'], ['Un bagel para llevar', 'sun'], ['Café y un trozo de tarta', 'croissant'], ['Panecillos recién hechos de la panadería', 'pretzel']]],
      ['¿Cómo te gusta moverte por la ciudad?', [['En metro', 'teacup'], ['A pie, charlando con la gente', 'cat'], ['En tranvía, sin prisa', 'croissant'], ['En tren, siempre puntual', 'owl']]],
    ],
    results: {
      teacup: ['Londres', 'Teatros, museos y una taza de té en cada esquina. Te encanta una ciudad llena de historia y energía.'],
      cat: ['Dublín', 'Amable, musical y llena de historias. Aprendes mejor hablando con todo el que te encuentras.'],
      sun: ['Nueva York', 'Rápida, luminosa y abierta toda la noche. Aprendes lanzándote a hablar desde el primer día.'],
      pretzel: ['Berlín', 'Creativa, relajada y siempre despierta. Te gusta una ciudad que te deja ser tú.'],
      croissant: ['Viena', 'Cafés, música y calles elegantes. Te gusta ir con calma y disfrutar.'],
      owl: ['Zúrich', 'Tranquila, limpia y siempre puntual. Te gusta tener un plan y unas vistas preciosas.'],
    },
  },
  related: ['buddy-quiz', 'german-word-quiz', 'british-american'],
};
