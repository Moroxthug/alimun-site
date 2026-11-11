// Resource: quiz. English items stay English; explanations are in Spanish.
export default {
  key: 'en-quiz-b1', site: 'es', slug: 'quiz-ingles-b1', kind: 'quiz', course: 'English', level: 'B1',
  draw: 'parrot', tint: 'mint', published: '2026-10-26',
  title: 'Quiz rápido de inglés: diez preguntas de nivel B1',
  metaTitle: 'Quiz de inglés B1 gratis: gramática y vocabulario – Alimun',
  desc: 'Un quiz de inglés gratis de diez preguntas de nivel B1: tiempos verbales, preposiciones y vocabulario cotidiano, con todas las respuestas explicadas.',
  lead: 'Diez preguntas sobre la gramática y las palabras que encuentras en el B1. Elige una respuesta para ver por qué es la correcta.',
  instructions: 'Elige la mejor respuesta.',
  about: [
    'El B1 es el nivel en el que te desenvuelves en la mayoría de las situaciones cotidianas: hablas de experiencias y planes y empiezas a usar con seguridad el present perfect, el past continuous y el first conditional.',
    'Este quiz mezcla los puntos por los que más se pregunta en este nivel. Cada respuesta viene con una explicación breve, así que aprendes algo incluso cuando fallas.',
  ],
  items: [
    { q: 'I have lived in this city ___ 2019.', options: ['for', 'since', 'from', 'during'], a: 1, why: 'Se usa since con un punto de partida en el tiempo (2019) y for con una duración (seven years).' },
    { q: 'She ___ dinner when the phone rang.', options: ['cooked', 'was cooking', 'has cooked', 'cooks'], a: 1, why: 'El past continuous describe una acción que estaba en curso cuando pasó otra cosa.' },
    { q: 'If it rains tomorrow, we ___ at home.', options: ['stay', 'will stay', 'would stay', 'stayed'], a: 1, why: 'First conditional: if + present simple y luego will + verbo.' },
    { q: 'Have you ever ___ to Canada?', options: ['gone', 'went', 'been', 'go'], a: 2, why: 'Para una visita que ya ha terminado se usa been: have you ever been to Canada?' },
    { q: 'I am really looking forward ___ you.', options: ['to see', 'to seeing', 'seeing', 'see'], a: 1, why: 'En look forward to, to es una preposición, así que el verbo va en -ing.' },
    { q: 'He is good ___ math.', options: ['in', 'on', 'at', 'with'], a: 2, why: 'Se dice good at algo: good at math, good at tennis.' },
    { q: 'We ran out ___ milk, so I went to the shop.', options: ['from', 'of', 'off', 'with'], a: 1, why: 'Run out of significa quedarse sin algo.' },
    { q: 'This is the ___ film I have ever seen.', options: ['worse', 'baddest', 'worst', 'most bad'], a: 2, why: 'Bad es irregular: bad, worse, the worst.' },
    { q: 'You ___ wear a seatbelt in the car. It is the law.', options: ['must', 'might', 'could', 'would'], a: 0, why: 'Must expresa una obligación fuerte, como una norma o una ley.' },
    { q: 'Can you ___ the music down, please? I am on the phone.', options: ['put', 'take', 'turn', 'make'], a: 2, why: 'Turn down significa bajar el volumen: turn the music down.' },
  ],
  related: ['de-articles-a1', 'en-reading-a2', 'buddy-quiz'],
};
