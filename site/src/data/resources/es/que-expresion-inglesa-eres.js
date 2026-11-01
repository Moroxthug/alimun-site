// Resource: fun. Each option votes for a drawing from the cast; the result is an English idiom that fits. Idioms stay in English; everything else is in Spanish. Idiom meanings checked against Cambridge Dictionary (night owl, life and soul of the party, go the extra mile, on cloud nine, as cool as a cucumber).
export default {
  key: 'english-idiom-quiz', site: 'es', slug: 'que-expresion-inglesa-eres', kind: 'fun', course: 'English', level: 'Solo por diversión',
  draw: 'parrot', tint: 'coral', published: '2026-11-01',
  title: '¿Qué expresión inglesa eres?',
  metaTitle: '¿Qué expresión inglesa eres? Un quiz para estudiantes – Alimun',
  desc: 'Un quiz gratis de tres preguntas: descubre la expresión inglesa que encaja con tu personalidad, de a night owl a on cloud nine, y compártela.',
  lead: 'Tres preguntas rápidas y una expresión inglesa que te resume. Compártela con un amigo y aprende qué significa.',
  about: [
    'El inglés está lleno de expresiones idiomáticas, frases cuyo significado no se adivina por las palabras sueltas. Los nativos las usan constantemente, y seguro que una de ellas te describe mejor de lo que crees.',
    'Este quiz es solo por diversión, pero todas las expresiones son reales y muy comunes, así que terminarás con una expresión nueva para usar en tu próxima conversación en inglés.',
  ],
  youAre: 'Tu expresión inglesa: {}',
  buddy: {
    questions: [
      ['Es sábado por la noche. Tú...', [['Empiezas un proyecto nuevo a medianoche', 'owl'], ['Bailas en medio del salón', 'parrot'], ['Ayudas a un amigo a llevar cajas a su piso nuevo', 'dog'], ['Mantienes la calma mientras los demás discuten el plan', 'cat']]],
      ['Un amigo tiene una entrega importante mañana. Tú...', [['Te quedas despierto hasta tarde trabajando con él', 'owl'], ['Llevas algo de comer y te quedas hasta que esté terminado', 'dog'], ['Le dices que todo saldrá bien y haces un plan claro', 'cat'], ['Organizas la celebración para cuando termine', 'sun']]],
      ['Elige un sonido:', [['Una ciudad en silencio a las dos de la madrugada', 'owl'], ['Risas en una fiesta llena de gente', 'parrot'], ['El móvil sonando con una noticia buenísima', 'sun'], ['Olas lentas en un mar en calma', 'cat']]],
    ],
    results: {
      owl: ['a night owl', 'Literalmente "un búho nocturno": alguien que prefiere estar despierto y activo por la noche. Tus mejores ideas llegan cuando todos duermen.'],
      parrot: ['the life and soul of the party', 'El alma de la fiesta: alguien con energía y gracia que siempre está en el centro de cualquier reunión. Cuando llegas, empieza la diversión.'],
      dog: ['go the extra mile', 'Esforzarse más de lo que se espera de ti. Tus amigos saben que siempre pueden contar contigo.'],
      sun: ['on cloud nine', 'Como estar en el séptimo cielo: muy feliz e ilusionado. Tu buen humor ilumina toda la habitación.'],
      cat: ['as cool as a cucumber', 'Tranquilísimo, sobre todo cuando nadie lo esperaría. Nada te altera, ni siquiera cuando los demás entran en pánico.'],
    },
  },
  related: ['english-idioms', 'buddy-quiz', 'british-american'],
};
