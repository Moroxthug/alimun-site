// Resource: quiz. German items stay German; explanations are in Spanish.
export default {
  key: 'de-quiz-a2', site: 'es', slug: 'quiz-aleman-a2', kind: 'quiz', course: 'German', level: 'A2',
  draw: 'mug', tint: 'coral', published: '2026-10-26',
  title: 'Quiz rápido de alemán: diez preguntas de nivel A2',
  metaTitle: 'Quiz de alemán A2 gratis: gramática y vocabulario – Alimun',
  desc: 'Un quiz de alemán gratis de diez preguntas de nivel A2: el Perfekt, los verbos modales, el dativo, los verbos separables y los comparativos, todo explicado.',
  lead: 'Diez preguntas sobre la gramática que encuentras en el A2. Elige una respuesta para ver por qué es la correcta.',
  instructions: 'Elige la mejor respuesta.',
  about: [
    'El A2 es el nivel en el que puedes contar lo que hiciste el fin de semana, describir tu rutina diaria, decir lo que puedes, debes o quieres hacer y comparar cosas con frases sencillas.',
    'Este quiz repasa los puntos en los que más tropiezan los alumnos de este nivel: haben o sein en el Perfekt, los participios, los verbos modales, el dativo después de verbos y preposiciones, los verbos separables y los comparativos. Cada respuesta viene con una explicación breve.',
  ],
  items: [
    { q: 'Gestern ___ ich ins Kino gegangen.', options: ['habe', 'bin', 'war', 'hatte'], a: 1, why: 'Los verbos de movimiento de un lugar a otro, como gehen, forman el Perfekt con sein: ich bin gegangen.' },
    { q: 'Wir haben den ganzen Abend Pizza ___.', options: ['gegessen', 'geessen', 'gegesst', 'essen'], a: 0, why: 'Essen es irregular y su participio es gegessen.' },
    { q: 'Hier ___ man nicht rauchen. Das ist verboten.', options: ['muss', 'will', 'darf', 'möchte'], a: 2, why: 'Nicht dürfen expresa que algo no está permitido.' },
    { q: 'Ich helfe ___ Mutter in der Küche.', options: ['meine', 'meiner', 'meinen', 'meinem'], a: 1, why: 'Helfen rige dativo, y el femenino mein pasa a meiner en dativo.' },
    { q: 'Wann stehst du morgens ___?', options: ['an', 'auf', 'aus', 'ein'], a: 1, why: 'Aufstehen (levantarse) es separable, así que auf va al final de la frase.' },
    { q: 'Mein Bruder ist drei Jahre ___ als ich.', options: ['am ältesten', 'alt', 'älter', 'ältere'], a: 2, why: 'Las comparaciones con als usan el comparativo, y alt lleva Umlaut: alt, älter, am ältesten.' },
    { q: 'Ich trinke lieber Tee ___ Kaffee.', options: ['als', 'wie', 'dann', 'wenn'], a: 0, why: 'Después de un comparativo como lieber, el alemán usa als (que).' },
    { q: 'Das Buch liegt auf ___ Tisch.', options: ['der', 'den', 'dem', 'des'], a: 2, why: 'Liegen describe una posición, así que auf lleva dativo: auf dem Tisch.' },
    { q: 'Hast du schon ___?', options: ['geeinkauft', 'einkaufen', 'eingekaufen', 'eingekauft'], a: 3, why: 'En los verbos separables, ge- va entre el prefijo y la raíz: einkaufen, eingekauft.' },
    { q: 'Gefällt ___ das Kleid?', options: ['dich', 'du', 'dein', 'dir'], a: 3, why: 'Gefallen rige dativo, así que du pasa a dir: das Kleid gefällt dir.' },
  ],
  related: ['de-quiz-a1', 'de-quiz-b1', 'de-ex-a2'],
};
