// Resource: fun. Each option votes for a drawing from the cast; the result is a German word that fits.
export default {
  key: 'german-word-quiz', site: 'es', slug: 'que-palabra-alemana-eres', kind: 'fun', course: 'German', level: 'Solo por diversión',
  draw: 'pretzel', tint: 'coral', published: '2026-10-27',
  title: '¿Qué palabra alemana eres?',
  metaTitle: '¿Qué palabra alemana eres? Un quiz para estudiantes – Alimun',
  desc: 'Un quiz gratis de tres preguntas: descubre la palabra alemana que encaja con tu personalidad, de Fernweh a Gemütlichkeit, y compártela con un amigo.',
  lead: 'Tres preguntas rápidas y una palabra alemana que te resume. Compártela con un amigo y aprende qué significa.',
  about: [
    'El alemán tiene palabras para sentimientos que otros idiomas necesitan explicar con una frase. Seguro que una de ellas te describe mejor de lo que crees.',
    'Este quiz es solo por diversión, pero todas las palabras son reales y se usan a diario, así que terminarás con una palabra nueva que no se te va a olvidar.',
  ],
  youAre: 'Tu palabra alemana: {}',
  buddy: {
    questions: [
      ['Es viernes a las seis. Tú...', [['Reservas un viaje a un sitio nuevo', 'suitcase'], ['Enciendes una vela y te preparas un té', 'teacup'], ['Cierras el portátil y lo celebras', 'mug'], ['Organizas todo el fin de semana', 'owl']]],
      ['¿Tu forma favorita de pasar un domingo?', [['Un paseo largo por un sitio lejano', 'suitcase'], ['Manta, sofá y un buen libro', 'teacup'], ['Una terraza con amigos y una cerveza', 'mug'], ['Una canción en bucle mientras cocinas', 'parrot']]],
      ['Elige un sonido:', [['Un tren saliendo de la estación', 'suitcase'], ['La lluvia en la ventana', 'teacup'], ['El choque de las copas en un brindis', 'mug'], ['Un estribillo pegadizo', 'parrot']]],
    ],
    results: {
      suitcase: ['Fernweh', 'Las ganas de viajar a lugares lejanos. Eres más feliz cuando vas de camino a un sitio nuevo.'],
      teacup: ['Gemütlichkeit', 'Calidez, comodidad y sentirse en casa. Haces que cualquier sitio resulte acogedor.'],
      mug: ['Feierabend', 'La alegría de terminar la jornada de trabajo. Sabes desconectar y disfrutarlo.'],
      owl: ['Ordnung', 'Orden. Te gusta tener un plan, y tus planes funcionan de verdad.'],
      parrot: ['Ohrwurm', 'Una canción metida en la cabeza. Llevas ritmo y diversión a todas partes.'],
    },
  },
  related: ['untranslatable-german', 'german-idioms', 'buddy-quiz'],
};
