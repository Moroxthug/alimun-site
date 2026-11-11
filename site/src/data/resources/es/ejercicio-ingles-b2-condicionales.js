// Resource: exercise. English items stay English; instructions and explanations are in Spanish.
export default {
  key: 'en-ex-b2', site: 'es', slug: 'ejercicio-ingles-b2-condicionales', kind: 'exercise', course: 'English', level: 'B2',
  draw: 'cat', tint: 'lime', published: '2026-10-26',
  title: 'Ejercicio de inglés: condicionales (B2)',
  metaTitle: 'Ejercicios de condicionales en inglés B2 gratis – Alimun',
  desc: 'Doce preguntas gratis de nivel B2 de inglés sobre el zero, first, second y third conditional y los condicionales mixtos, con una explicación para cada respuesta.',
  lead: 'Elige la forma verbal correcta en cada frase con if. Ves al momento si aciertas y por qué.',
  instructions: 'Elige la forma correcta.',
  about: [
    'El zero conditional (if + presente, presente) es para hechos y cosas que siempre ocurren: "If you heat ice, it melts." El first conditional (if + presente, will + verbo) es para posibilidades reales en el futuro: "If it rains tomorrow, we will stay home." Unless significa if not, así que sigue el mismo esquema. El second conditional (if + pasado, would + verbo) es para situaciones irreales o poco probables ahora: "If I had more time, I would learn the piano." En inglés formal se usa were con todas las personas: "If I were you..."',
    'El third conditional (if + past perfect, would have + participio) es para cambios imaginados en el pasado: "If we had left earlier, we would have caught the train." Los condicionales mixtos combinan los dos: un pasado irreal con un resultado en el presente ("If I had taken that job, I would live in New York now"), o un presente irreal con un resultado en el pasado ("If he were more careful, he wouldn\'t have made that mistake"). Fíjate en las expresiones de tiempo de cada mitad de la frase para decidir qué forma encaja.',
  ],
  items: [
    { q: 'If you mix red and white paint, you ___ pink.', options: ['would get', 'get', 'got', 'had gotten'], a: 1, why: 'Un hecho general usa el zero conditional: if + presente, presente.' },
    { q: 'If it ___ tomorrow, we will cancel the picnic.', options: ['will rain', 'rained', 'rains', 'would rain'], a: 2, why: 'En el first conditional, la oración con if lleva el present simple, aunque hable del futuro.' },
    { q: 'If I ___ you, I would talk to her.', options: ['were', 'am', 'had been', 'will be'], a: 0, why: 'Para dar un consejo con el second conditional se dice "If I were you", con were para todas las personas.' },
    { q: 'If she had studied harder, she ___ the exam last month.', options: ['would pass', 'will pass', 'would have passed', 'passed'], a: 2, why: 'Un resultado imaginado en el pasado, en el third conditional, lleva would have + participio.' },
    { q: 'If I had taken the job in New York, I ___ there now.', options: ['would live', 'would have lived', 'will live', 'lived'], a: 0, why: 'Condicional mixto: una condición irreal en el pasado con un resultado en el presente (now) lleva would + verbo.' },
    { q: 'If we ___ the map, we wouldn\'t have gotten lost.', options: ['had checked', 'checked', 'would check', 'have checked'], a: 0, why: 'La oración con if del third conditional lleva el past perfect.' },
    { q: 'Unless you hurry, you ___ the bus.', options: ['miss', 'would miss', 'missed', 'will miss'], a: 3, why: 'Unless significa if not y aquí sigue el first conditional: will + verbo.' },
    { q: 'If he ___ more money, he would buy a house.', options: ['would have', 'will have', 'has', 'had'], a: 3, why: 'El second conditional lleva el past simple en la oración con if.' },
    { q: 'If he were more careful, he ___ that mistake yesterday.', options: ['wouldn\'t make', 'wouldn\'t have made', 'won\'t make', 'didn\'t make'], a: 1, why: 'Condicional mixto: una condición irreal en el presente con un resultado en el pasado lleva would have + participio.' },
    { q: 'If she weren\'t so busy, she ___ us more often.', options: ['visits', 'will visit', 'would visit', 'would have visited'], a: 2, why: 'Una situación irreal en el presente usa el second conditional: would + verbo.' },
    { q: 'If I hadn\'t eaten so much, I ___ sick now.', options: ['wouldn\'t feel', 'won\'t feel', 'wouldn\'t have felt', 'don\'t feel'], a: 0, why: 'Condicional mixto: una condición en el pasado con un resultado en el presente (now) lleva would + verbo.' },
    { q: 'What would you do if you ___ the lottery?', options: ['win', 'had won', 'will win', 'won'], a: 3, why: 'Una situación imaginada y poco probable usa el second conditional: if + past simple.' },
  ],
  related: ['en-ex-b1', 'en-ex-c1', 'en-quiz-b2'],
};
