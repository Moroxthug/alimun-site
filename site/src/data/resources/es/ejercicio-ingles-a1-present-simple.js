// Resource: exercise. English items stay English; instructions and explanations are in Spanish.
export default {
  key: 'en-ex-a1', site: 'es', slug: 'ejercicio-ingles-a1-present-simple', kind: 'exercise', course: 'English', level: 'A1',
  draw: 'teacup', tint: 'mint', published: '2026-10-26',
  title: 'Ejercicio de inglés: present simple (A1)',
  metaTitle: 'Ejercicios de inglés present simple A1 con respuestas – Alimun',
  desc: 'Doce preguntas gratis de present simple para el nivel A1 de inglés: am, is, are, do y does, y la -s de he, she e it, con cada respuesta explicada.',
  lead: 'Elige la forma correcta del verbo en cada frase. Ves al momento si aciertas y por qué.',
  instructions: 'Elige la forma correcta.',
  about: [
    'El present simple describe hábitos, rutinas y hechos que son verdad en general: I work in an office, she drinks tea, water boils at 100 degrees. Con el verbo be se usa am con I, is con he, she e it, y are con you, we y they. Con los demás verbos se añade -s con he, she e it (she lives, he works), -es después de ch, sh, s, x y o (he watches, she goes), y una consonante + y final cambia a -ies (the baby cries). Have se convierte en has.',
    'Las preguntas y las negaciones con los demás verbos necesitan un auxiliar: do con I, you, we y they, y does con he, she e it. Después de does y doesn\'t, el verbo principal vuelve a su forma base, así que se dice "Does she live here?" y "He doesn\'t eat meat", nunca "Does she lives". El verbo be no necesita este auxiliar: "Are you tired?" y "I am not ready."',
  ],
  items: [
    { q: 'She ___ in a big city.', options: ['live', 'lives', 'living'], a: 1, why: 'Con he, she e it se añade -s al verbo: she lives.' },
    { q: 'They ___ from Brazil.', options: ['is', 'am', 'are'], a: 2, why: 'Con they, el verbo be es are: they are.' },
    { q: '___ you like coffee?', options: ['Do', 'Does', 'Are'], a: 0, why: 'Las preguntas con you llevan do + el verbo en forma base: Do you like...?' },
    { q: 'My brother ___ eat meat.', options: ['don\'t', 'doesn\'t', 'isn\'t'], a: 1, why: 'My brother equivale a he, así que la negación es doesn\'t + el verbo en forma base.' },
    { q: 'I ___ a student.', options: ['is', 'are', 'am'], a: 2, why: 'Con I, el verbo be es siempre am: I am.' },
    { q: 'He ___ TV every evening.', options: ['watches', 'watchs', 'watch'], a: 0, why: 'Los verbos que acaban en ch añaden -es con he, she e it: he watches.' },
    { q: '___ your sister work in a bank?', options: ['Do', 'Is', 'Does'], a: 2, why: 'Your sister equivale a she, así que la pregunta lleva does + el verbo en forma base.' },
    { q: 'My parents ___ have a car.', options: ['doesn\'t', 'don\'t', 'aren\'t'], a: 1, why: 'My parents equivale a they, así que la negación es don\'t + el verbo en forma base.' },
    { q: 'He ___ two brothers.', options: ['has', 'have', 'haves'], a: 0, why: 'Have es irregular: con he, she e it se convierte en has.' },
    { q: 'The baby ___ a lot at night.', options: ['crys', 'cry', 'cries'], a: 2, why: 'Después de consonante, la y final cambia a -ies: cry pasa a cries.' },
    { q: 'Where ___ he live?', options: ['do', 'does', 'is'], a: 1, why: 'Las preguntas con he llevan does, y el verbo principal se queda en forma base: Where does he live?' },
    { q: 'The store ___ at nine o\'clock.', options: ['opens', 'open', 'opening'], a: 0, why: 'The store equivale a it, así que el verbo lleva -s: it opens.' },
  ],
  related: ['en-ex-a2', 'en-quiz-a1', 'en-quiz-a2'],
};
