// Resource: exercise. English items stay English; instructions and explanations are in Spanish.
export default {
  key: 'en-ex-a2', site: 'es', slug: 'ejercicio-ingles-a2-past-simple-verbos-irregulares', kind: 'exercise', course: 'English', level: 'A2',
  draw: 'snail', tint: 'sun', published: '2026-10-26',
  title: 'Ejercicio de inglés: past simple con verbos irregulares (A2)',
  metaTitle: 'Ejercicios past simple verbos irregulares inglés A2 – Alimun',
  desc: 'Doce preguntas gratis de past simple para el nivel A2 de inglés: went, saw, took, did y otros verbos irregulares, con una explicación para cada respuesta.',
  lead: 'Elige la forma de pasado correcta en cada frase. Ves al momento si aciertas y por qué.',
  instructions: 'Elige la forma correcta.',
  about: [
    'El past simple habla de acciones terminadas en un momento ya terminado del pasado: yesterday, last week, two years ago, in 2019. Los verbos regulares añaden -ed (work, worked), pero muchos de los verbos más frecuentes son irregulares y tienen su propia forma de pasado que hay que aprender de memoria: go pasa a went, see a saw, take a took y buy a bought. El verbo be tiene dos formas de pasado: was con I, he, she e it, y were con you, we y they.',
    'Las preguntas y las negaciones en pasado usan did y didn\'t con todas las personas, y después de did el verbo principal vuelve a su forma base: "Did you eat?" y "I didn\'t sleep well", nunca "Did you ate". Un error frecuente es usar el participio (gone, seen, taken) en lugar del past simple. El participio va con have, como en "I have seen it", así que solo es incorrecto: di "I saw it", no "I seen it".',
  ],
  items: [
    { q: 'Yesterday I ___ to the beach.', options: ['goed', 'went', 'gone', 'go'], a: 1, why: 'Go es irregular: su past simple es went.' },
    { q: 'She ___ a new phone last week.', options: ['bought', 'buyed', 'buy', 'boughted'], a: 0, why: 'Buy es irregular: su past simple es bought.' },
    { q: 'We ___ a great movie on Saturday.', options: ['seen', 'saw', 'seed', 'see'], a: 1, why: 'El past simple de see es saw; seen necesita have delante.' },
    { q: 'Did you ___ breakfast this morning?', options: ['ate', 'eaten', 'eat', 'eated'], a: 2, why: 'Después de did, el verbo principal va en forma base: Did you eat?' },
    { q: 'He ___ his keys at home this morning.', options: ['leaved', 'lefted', 'left', 'leave'], a: 2, why: 'Leave es irregular: su past simple es left.' },
    { q: 'I ___ sleep well last night.', options: ['didn\'t', 'don\'t', 'wasn\'t'], a: 0, why: 'Las negaciones en pasado con verbos normales usan didn\'t + el verbo en forma base.' },
    { q: 'They ___ a lot of photos on vacation.', options: ['taken', 'taked', 'took'], a: 2, why: 'El past simple de take es took; taken necesita have delante.' },
    { q: 'Last night my grandfather ___ me a story.', options: ['told', 'telled', 'tells'], a: 0, why: 'Tell es irregular: su past simple es told.' },
    { q: 'She ___ her friend at the coffee shop yesterday.', options: ['meeted', 'met', 'meets'], a: 1, why: 'Meet es irregular: su past simple es met.' },
    { q: 'What time ___ you get up yesterday?', options: ['did', 'do', 'were'], a: 0, why: 'Las preguntas en pasado con verbos normales usan did + el verbo en forma base.' },
    { q: 'I ___ a letter to my aunt last month.', options: ['writed', 'written', 'wrote'], a: 2, why: 'El past simple de write es wrote; written necesita have delante.' },
    { q: 'We ___ very tired after the long walk.', options: ['was', 'were', 'are'], a: 1, why: 'El pasado de be con we, you y they es were.' },
  ],
  related: ['en-ex-a1', 'en-ex-b1', 'en-quiz-a2'],
};
