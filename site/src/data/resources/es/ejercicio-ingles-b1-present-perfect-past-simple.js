// Resource: exercise. English items stay English; instructions and explanations are in Spanish.
export default {
  key: 'en-ex-b1', site: 'es', slug: 'ejercicio-ingles-b1-present-perfect-past-simple', kind: 'exercise', course: 'English', level: 'B1',
  draw: 'owl', tint: 'coral', published: '2026-10-26',
  title: 'Ejercicio de inglés: ¿present perfect o past simple? (B1)',
  metaTitle: 'Ejercicios present perfect o past simple inglés B1 – Alimun',
  desc: 'Doce preguntas gratis de nivel B1 de inglés sobre el present perfect y el past simple, con las expresiones de tiempo como pista y cada respuesta explicada.',
  lead: 'Elige el present perfect o el past simple en cada frase. Ves al momento si aciertas y por qué.',
  instructions: 'Elige el tiempo verbal correcto.',
  about: [
    'Usa el past simple para una acción que ocurrió en un momento ya terminado: yesterday, last Friday, two days ago, in 2019, when I was a child. Si la frase dice o deja claro cuándo ocurrió, el past simple es la opción correcta, y las preguntas con when también lo llevan: "When did you move here?" También es el tiempo para la vida ya terminada de personas que han muerto, como en "Leonardo da Vinci painted the Mona Lisa."',
    'Usa el present perfect (have o has + participio) cuando el tiempo llega hasta ahora. Va con since y for cuando la situación sigue siendo verdad ("She has lived here since 2020"), con las preguntas con how long ("How long have you known her?"), con "This is the first time..." y con periodos que todavía no han terminado, como all my life. Una prueba sencilla: si puedes añadir un momento terminado como yesterday, elige el past simple; si la acción conecta con el presente, elige el present perfect.',
  ],
  items: [
    { q: 'We ___ to Japan in 2019.', options: ['have gone', 'went', 'have been'], a: 1, why: 'In 2019 es un momento terminado, así que se usa el past simple.' },
    { q: 'She ___ in Boston since 2020.', options: ['has lived', 'lived', 'lives'], a: 0, why: 'Since + un punto de partida indica una situación que continúa hasta ahora: present perfect.' },
    { q: 'I ___ my keys two days ago.', options: ['have lost', 'lose', 'lost'], a: 2, why: 'Ago señala un momento terminado, así que se usa el past simple.' },
    { q: 'How long ___ you known Maria?', options: ['did', 'have', 'do'], a: 1, why: 'Las preguntas con how long sobre una situación que sigue siendo verdad usan el present perfect.' },
    { q: 'This is the first time I ___ sushi.', options: ['ate', 'eat', 'have eaten'], a: 2, why: 'Después de "This is the first time", el inglés usa el present perfect.' },
    { q: 'When ___ you move to this apartment?', options: ['did', 'have', 'are'], a: 0, why: 'Las preguntas con when preguntan por un momento terminado, así que llevan el past simple.' },
    { q: 'They ___ married for ten years, and they are still very happy.', options: ['were', 'are', 'have been'], a: 2, why: 'For + un periodo de tiempo que continúa hasta ahora lleva el present perfect.' },
    { q: 'Leonardo da Vinci ___ the Mona Lisa.', options: ['has painted', 'painted', 'paints'], a: 1, why: 'Su vida ya terminó, así que la acción pertenece a un momento terminado: past simple.' },
    { q: 'He ___ for the company since he left college.', options: ['has worked', 'worked', 'works'], a: 0, why: 'Since + un hecho pasado, con el trabajo todavía en curso, lleva el present perfect.' },
    { q: 'I ___ him last Friday at the party.', options: ['have seen', 'saw', 'see'], a: 1, why: 'Last Friday es un momento terminado, así que se usa el past simple.' },
    { q: 'I ___ in this town all my life, and I don\'t want to leave.', options: ['lived', 'was living', 'have lived'], a: 2, why: 'All my life es un periodo que todavía no ha terminado, así que se usa el present perfect.' },
    { q: 'What ___ you do last weekend?', options: ['have', 'did', 'do'], a: 1, why: 'Last weekend es un momento terminado, así que la pregunta lleva did.' },
  ],
  related: ['en-ex-a2', 'en-ex-b2', 'en-quiz-b1'],
};
