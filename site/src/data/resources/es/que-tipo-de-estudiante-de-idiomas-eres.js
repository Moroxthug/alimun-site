// Resource: fun. Each option votes for a learner type; the most votes wins. No word meanings to check; "ratón de biblioteca" and "noctámbulo" checked against the RAE dictionary. The types are playful, not a research-based "learning styles" test, and the about text says so.
export default {
  key: 'learner-type-quiz', site: 'es', slug: 'que-tipo-de-estudiante-de-idiomas-eres', kind: 'fun', course: null, level: 'Solo por diversión',
  draw: 'owl', tint: 'mint', published: '2026-11-01',
  title: '¿Qué tipo de estudiante de idiomas eres?',
  metaTitle: '¿Qué tipo de estudiante de idiomas eres? Quiz divertido – Alimun',
  desc: 'Un quiz gratis de tres preguntas: ¿eres conversador, planificador, explorador, noctámbulo o ratón de biblioteca? Descúbrelo y llévate un consejo a tu medida.',
  lead: 'Tres preguntas divertidas sobre tus costumbres. Al final descubres tu tipo, con un consejo que encaja con tu forma de aprender.',
  about: [
    'Hay quien aprende un idioma hablando con todo el mundo, quien hace listas, quien aprende con películas y viajes, quien estudia de madrugada y quien lo hace con un buen libro.',
    'Este quiz es solo por diversión, no es un test científico. Tu resultado es un empujón amistoso: los hábitos que ya disfrutas son los que te harán seguir.',
  ],
  youAre: 'Eres: {}',
  buddy: {
    questions: [
      ['¿De dónde salen tus palabras nuevas?', [['De charlar con la gente', 'parrot'], ['De una lista ordenada en mi cuaderno', 'cat'], ['De una película o una serie con subtítulos', 'suitcase'], ['De un libro que no puedo dejar', 'teacup']]],
      ['¿Cuándo estudias mejor?', [['De noche, cuando la casa está en silencio', 'owl'], ['A la misma hora todos los días', 'cat'], ['Cuando encuentro a alguien con quien hablar', 'parrot'], ['En el tren, de camino a algún sitio', 'suitcase']]],
      ['Elige la noche perfecta:', [['Una cena con amigos de otro país', 'parrot'], ['Una novela y una tetera', 'teacup'], ['Una película extranjera y el plan del próximo viaje', 'suitcase'], ['Despierto pasada la medianoche, feliz y ocupado', 'owl']]],
    ],
    results: {
      parrot: ['Conversador', 'Aprendes hablando, y los errores no te dan miedo. Intenta usar cada palabra nueva en voz alta, en una frase tuya, el mismo día que la aprendes.'],
      cat: ['Planificador', 'Te encantan los horarios y las listas de palabras ordenadas. Planifica tu semana, pero deja una sesión libre para usar esas palabras en una conversación real.'],
      suitcase: ['Explorador', 'Las películas, la música y los lugares nuevos te atraen. Mira algo que te guste en el idioma que aprendes y apunta tres palabras que oigas.'],
      owl: ['Noctámbulo', 'Tu cabeza se despierta cuando los demás se van a dormir. Estudia poco pero con constancia antes de acostarte, y repasa las mismas palabras la noche siguiente.'],
      teacup: ['Ratón de biblioteca', 'Aprendes mejor leyendo, página a página. Elige un libro un poco por debajo de tu nivel, para leer por la historia y no por el diccionario.'],
    },
  },
  related: ['buddy-quiz', 'german-word-quiz', 'city-quiz'],
};
