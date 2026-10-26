// Resource: quiz. English items stay English; explanations are in Spanish.
export default {
  key: 'en-quiz-a2', site: 'es', slug: 'quiz-ingles-a2', kind: 'quiz', course: 'English', level: 'A2',
  draw: 'dog', tint: 'coral', published: '2026-10-26',
  title: 'Quiz rápido de inglés: diez preguntas de nivel A2',
  metaTitle: 'Quiz de inglés A2 gratis: gramática y vocabulario – Alimun',
  desc: 'Un quiz de inglés gratis de diez preguntas de nivel A2: past simple, comparativos, going to, some y any y preposiciones de tiempo, con cada respuesta explicada.',
  lead: 'Diez preguntas sobre la gramática y las palabras que encuentras en el A2. Elige una respuesta para ver por qué es la correcta.',
  instructions: 'Elige la mejor respuesta.',
  about: [
    'En el A2 puedes hablar de tu pasado, comparar cosas y hacer planes sencillos. Puedes ir de compras, pedir comida, preguntar cómo llegar a un sitio y escribir mensajes cortos sobre temas cotidianos.',
    'Este quiz repasa los puntos que más salen en este nivel: el past simple, los comparativos, going to para planes y predicciones, some y any, los sustantivos contables e incontables y las preposiciones de tiempo. Cada respuesta viene con una explicación breve.',
  ],
  items: [
    { q: 'We ___ to the beach last weekend.', options: ['go', 'went', 'gone', 'have gone'], a: 1, why: 'Last weekend es un momento terminado del pasado, así que se usa el past simple: went.' },
    { q: 'Did you ___ the email?', options: ['see', 'saw', 'seen', 'seeing'], a: 0, why: 'Después de did en una pregunta, el verbo va en forma base: did you see?' },
    { q: 'My sister is ___ than me.', options: ['more tall', 'tallest', 'tall', 'taller'], a: 3, why: 'Los adjetivos cortos añaden -er para comparar dos cosas: tall, taller.' },
    { q: 'This book is ___ than that one.', options: ['the most interesting', 'interestinger', 'more interesting', 'interesting'], a: 2, why: 'Los adjetivos largos usan more para comparar dos cosas: more interesting than.' },
    { q: 'Look at those dark clouds! It ___ rain.', options: ['is going to', 'will to', 'going to', 'is go to'], a: 0, why: 'Se usa be going to para una predicción basada en lo que ves ahora.' },
    { q: 'There isn\'t ___ bread left.', options: ['some', 'any', 'many', 'a'], a: 1, why: 'Se usa any en frases negativas; bread es incontable, así que many y a no son correctos.' },
    { q: 'How ___ water do you drink every day?', options: ['much', 'many', 'few', 'lot'], a: 0, why: 'Water es incontable, así que se usa how much; how many es para sustantivos contables.' },
    { q: 'She gave me some good ___.', options: ['advices', 'an advice', 'advise', 'advice'], a: 3, why: 'Advice es un sustantivo incontable sin plural; advise es el verbo.' },
    { q: 'The meeting is ___ Monday morning.', options: ['in', 'at', 'to', 'on'], a: 3, why: 'Se usa on con los días, también con partes de un día concreto: on Monday morning.' },
    { q: 'I started this job three years ___.', options: ['ago', 'since', 'for', 'last'], a: 0, why: 'Ago va detrás de un periodo de tiempo para decir cuándo pasó algo en el pasado.' },
  ],
  related: ['en-quiz-a1', 'en-quiz-b1', 'en-ex-a2'],
};
