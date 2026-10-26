// Resource: quiz. English items stay English; explanations are in Spanish.
export default {
  key: 'en-quiz-b2', site: 'es', slug: 'quiz-ingles-b2', kind: 'quiz', course: 'English', level: 'B2',
  draw: 'monster', tint: 'lime', published: '2026-10-26',
  title: 'Quiz rápido de inglés: diez preguntas de nivel B2',
  metaTitle: 'Quiz de inglés B2 gratis: gramática y vocabulario – Alimun',
  desc: 'Un quiz de inglés gratis de diez preguntas de nivel B2: pasiva, estilo indirecto, wish, used to, phrasal verbs y collocations, con cada respuesta explicada.',
  lead: 'Diez preguntas sobre la gramática y las palabras que encuentras en el B2. Elige una respuesta para ver por qué es la correcta.',
  instructions: 'Elige la mejor respuesta.',
  about: [
    'En el B2 puedes seguir la mayoría de las conversaciones, noticias y películas sobre temas conocidos, defender un punto de vista y escribir textos claros y detallados. Ahora la precisión cuenta más: la pasiva, el estilo indirecto y las combinaciones de palabras naturales empiezan a marcar la diferencia.',
    'Este quiz repasa la pasiva, las preguntas y órdenes en estilo indirecto, wish, used to y be used to, phrasal verbs frecuentes y collocations. Son también puntos que salen a menudo en el B2 First. Cada respuesta viene con una explicación breve.',
  ],
  items: [
    { q: 'The bridge ___ in 1990.', options: ['built', 'has built', 'was building', 'was built'], a: 3, why: 'El puente no construyó nada, recibió la acción, así que se usa la pasiva: was built.' },
    { q: 'The new hospital ___ right now, so the road is closed.', options: ['is building', 'has built', 'builds', 'is being built'], a: 3, why: 'Para una acción pasiva que está ocurriendo ahora se usa is being + participio.' },
    { q: 'He asked me where ___.', options: ['I lived', 'did I live', 'do I live', 'I did live'], a: 0, why: 'En una pregunta en estilo indirecto se usa el orden normal de una afirmación y el tiempo retrocede: where I lived.' },
    { q: 'She told me ___ the door.', options: ['to close', 'close', 'closing', 'that close'], a: 0, why: 'Para transmitir una instrucción se usa tell someone to do something.' },
    { q: 'I wish I ___ more free time. I am so busy this week.', options: ['have', 'will have', 'had', 'would have'], a: 2, why: 'Para un deseo sobre el presente se usa wish + past simple: I wish I had.' },
    { q: 'I wish I ___ to the party last night. Everyone says it was great.', options: ['went', 'had gone', 'have gone', 'would go'], a: 1, why: 'Para lamentar algo del pasado se usa wish + past perfect: I wish I had gone.' },
    { q: 'I have lived in Chicago for years, so I ___ the cold winters.', options: ['used to', 'use to', 'am use to', 'am used to'], a: 3, why: 'Be used to + sustantivo significa estar acostumbrado a algo, de modo que ya no resulta extraño.' },
    { q: 'When I was a child, I ___ play outside every day.', options: ['used to', 'am used to', 'was used to', 'use to'], a: 0, why: 'Used to + verbo en forma base describe un hábito del pasado que ya no se da.' },
    { q: 'The game was ___ because of the storm.', options: ['called up', 'called on', 'called off', 'called out'], a: 2, why: 'Call off significa cancelar algo que estaba previsto.' },
    { q: 'When you choose a school, you should ___ into account how far it is from home.', options: ['make', 'put', 'take', 'give'], a: 2, why: 'La expresión fija es take something into account, que significa tener algo en cuenta.' },
  ],
  related: ['en-quiz-b1', 'en-quiz-c1', 'en-ex-b2'],
};
