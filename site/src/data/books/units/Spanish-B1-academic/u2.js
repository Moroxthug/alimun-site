// Spanish B1 for study and exams, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Lectures and notes',
  goal: 'Follow a talk and take useful notes.',
  art: 'parrot',
  tags: { skills: ['listening', 'reading', 'vocabulary', 'study-skills'], topics: ['signposting', 'note-taking', 'abbreviations', 'connectors'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Following the structure of a talk',
      about: 'The words that tell you where a speaker is in a talk.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A good talk has a clear structure, and the speaker tells you where you are. Listen for these words: they show the topic, the order of the points, a contrast, an example and the end.' },
          { t: 'table', caption: 'Signposts in a talk', explain: ['head', 'col0'], quiz: true, head: ['Purpose', 'Spanish'], rows: [
            ['the topic', 'Hoy vamos a hablar de… / El tema de hoy es…'],
            ['the order of the points', 'en primer lugar, en segundo lugar, a continuación, por último'],
            ['a new point', 'además, otro aspecto importante es…'],
            ['a contrast', 'pero, sin embargo, en cambio'],
            ['an example', 'por ejemplo, un ejemplo de esto es…'],
            ['an explanation', 'es decir, o sea'],
            ['a summary', 'en resumen, para terminar, en conclusión'],
          ] },
        ],
        [
          { t: 'text', md: 'Most of these signposts start a sentence and are followed by a **comma**. *Sin embargo* and *en cambio* both show a contrast. *Sin embargo* says that something is not what you expect; *en cambio* compares two different things.' },
          { t: 'examples', items: [
            { s: '**En primer lugar**, voy a hablar de la historia de la ciudad.', n: 'The first point of the talk. The second one starts with *en segundo lugar*.' },
            { s: '**A continuación**, les voy a mostrar dos ejemplos.', n: '*A continuación*: next, now. *Les* is the polite plural, for the audience.' },
            { s: 'La bicicleta es barata y sana. **Sin embargo**, en invierno no es muy cómoda.', n: 'Good points, then a problem you might not expect: *sin embargo*.' },
            { s: 'En el norte llueve mucho; **en cambio**, en el sur casi no llueve.', n: '*En cambio* compares two different things: the north and the south.' },
            { s: '**En resumen**, el agua es un recurso muy valioso.', n: 'A typical sentence at the end of a talk.' },
          ] },
          { t: 'tip', art: 'churro', md: 'In Spain a speaker talks to the audience with *ustedes* or, in a friendly class, with *vosotros*: *Os voy a contar…*. In Latin America *ustedes* is used for both: *Les voy a contar…*.' },
        ],
        [
          { t: 'reading', title: 'El comienzo de una exposición', md: 'Buenos días a todos. Hoy vamos a hablar del agua en las ciudades. En primer lugar, voy a explicar de dónde viene el agua que bebemos. En segundo lugar, hablaré de los problemas en verano, cuando no llueve durante mucho tiempo. A continuación, les mostraré dos ejemplos de otras ciudades. Por último, me gustaría comentar con ustedes qué podemos hacer cada uno de nosotros.' },
          { t: 'ex', kind: 'spot', h: 'Tap the words that show the order of the talk.', items: [
            { s: 'Hoy vamos a hablar del agua. [En primer lugar], voy a explicar de dónde viene, y [en segundo lugar], hablaré de los problemas en verano.', why: '*en primer lugar* and *en segundo lugar* give the order of the first two points.' },
            { s: '[A continuación], les mostraré dos ejemplos. [Por último], me gustaría comentar con ustedes qué podemos hacer.', why: '*a continuación* is the next step, *por último* is the last one.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the signpost that fits.', items: [
            { q: '___, hablaré de la historia del tema y, en segundo lugar, de la situación actual.', o: ['En primer lugar', 'En resumen', 'Sin embargo'], why: '*en segundo lugar* comes later, so the first point needs *en primer lugar*.' },
            { q: 'El coche es cómodo. ___, contamina mucho y es caro.', o: ['Sin embargo', 'Además', 'Por ejemplo'], why: 'A good point, then problems: a contrast, *sin embargo*.' },
            { q: 'Muchas ciudades tienen problemas de tráfico, ___ Madrid y Barcelona.', o: ['por ejemplo', 'sin embargo', 'en primer lugar'], why: 'Madrid and Barcelona are examples of cities: *por ejemplo*.' },
            { q: 'Al final de la charla: «___, el agua es un recurso que tenemos que cuidar».', o: ['En resumen', 'Por ejemplo', 'A continuación'], why: 'At the end you sum up: *en resumen*.' },
            { q: 'La prueba es oral, ___, hablas con el profesor.', o: ['es decir', 'en cambio', 'por último'], why: '*es decir* explains what the speaker said before.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'What does each signpost do?', groups: ['order', 'contrast', 'example or explanation'], explain: ['groups'], items: [
            { s: 'en primer lugar', g: 0, why: 'It starts the first point.' },
            { s: 'a continuación', g: 0, why: 'It introduces the next step.' },
            { s: 'por último', g: 0, why: 'It introduces the last point.' },
            { s: 'sin embargo', g: 1, why: 'It shows that something is not what you expect.' },
            { s: 'en cambio', g: 1, why: 'It compares two different things.' },
            { s: 'por ejemplo', g: 2, why: 'It introduces an example.' },
            { s: 'es decir', g: 2, why: 'It explains the idea in other words.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Taking notes',
      about: 'Write down key words, short forms and symbols.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'You cannot write down every word of a lecture. Write **key words**: nouns, numbers, names and the verbs that carry the meaning. Leave out articles and small words. Use short forms: many of them are also common in Spanish texts. Notes from a class are called **apuntes**.' },
          { t: 'table', caption: 'Common short forms', explain: ['head', 'col2'], quiz: true, head: ['Short', 'Long', 'Meaning'], rows: [
            ['p. ej.', 'por ejemplo', 'for example'],
            ['etc.', 'etcétera', 'and so on'],
            ['aprox.', 'aproximadamente', 'about, approximately'],
            ['pág.', 'página', 'page'],
            ['s.', 'siglo', 'century'],
            ['cap.', 'capítulo', 'chapter'],
            ['n.º', 'número', 'number'],
          ] },
        ],
        [
          { t: 'text', md: 'Many students also use symbols: an arrow (→) for a result, a plus (+) for an advantage, a minus (−) for a disadvantage and an equals sign (=) for a definition. Here are sentences from lectures and good notes for them.' },
          { t: 'examples', items: [
            { s: 'Muchos estudiantes trabajan mientras estudian porque los alquileres son muy caros.', n: 'Notes: *muchos est. trabajan, causa: alquileres caros*' },
            { s: 'La bicicleta tiene muchas ventajas: por ejemplo, es barata y sana.', n: 'Notes: *bici: + barata, + sana*' },
            { s: 'Cuando no llueve durante meses, falta agua en muchas regiones.', n: 'Notes: *meses sin lluvia → falta agua*' },
            { s: 'La Revolución Industrial empezó en el siglo XVIII.', n: 'Notes: *Rev. Industrial: s. XVIII*. Centuries are written in Roman numbers.' },
          ] },
          { t: 'tip', art: 'churro', md: 'In their own notes many students write *q* for *que*, *xq* for *porque* and *tb* for *también*. That is fine in your *apuntes*, but never in an exam text or an email to a teacher.' },
        ],
        [
          { t: 'ex', kind: 'memory', h: 'Find the pairs: short form and long form.', pairs: [
            ['p. ej.', 'por ejemplo'],
            ['etc.', 'etcétera'],
            ['aprox.', 'aproximadamente'],
            ['pág.', 'página'],
            ['cap.', 'capítulo'],
            ['s.', 'siglo'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best notes for each sentence.', items: [
            { q: '«En época de exámenes, la biblioteca está abierta hasta las doce de la noche».', o: ['bibl. exámenes → abierta hasta 24 h', 'En época de exámenes la biblioteca', 'biblioteca, época, abierta'], why: 'Good notes keep the key facts (when, until what time) and leave out small words.' },
            { q: '«Una desventaja de estudiar en línea es que tienes poco contacto con otras personas».', o: ['estudiar en línea: − poco contacto', 'estudiar en línea: + mucho contacto', 'una desventaja es que tienes'], why: 'A disadvantage gets a minus, and the key words are *poco contacto*.' },
            { q: '«Es decir, los precios suben todos los años».', o: ['= precios suben cada año', 'p. ej. precios bajan', 'pág. precios'], why: '*es decir* explains or defines, so the equals sign fits. The prices go up, not down.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the short form.', items: [
            { q: 'La clase dura ___ dos horas. (aproximadamente)', a: ['aprox.', 'aprox'], why: '*aprox.* = *aproximadamente*: about.' },
            { q: 'Leemos muchos textos, ___ artículos y capítulos de libros. (por ejemplo)', a: ['p. ej.', 'p.ej.', 'p ej'], why: '*p. ej.* = *por ejemplo*.' },
            { q: 'El ejercicio está en la ___ 45. (página)', a: ['pág.', 'pág', 'p.'], why: '*pág.* or *p.* = *página*.' },
            { q: 'En clase hablamos del medio ambiente, el tráfico, la energía, ___ (etcétera)', a: ['etc.', 'etc'], why: '*etc.* = *etcétera*, at the end of a list.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the symbol for the notes.', items: [
            { q: 'llueve poco ___ falta agua (a result)', o: ['→', '+', '='], why: 'An arrow shows a result.' },
            { q: 'trabajar en casa: ___ menos tiempo en el tren (an advantage)', o: ['+', '−', '='], why: 'A plus shows an advantage.' },
            { q: 'beca ___ dinero para estudiar (a definition)', o: ['=', '→', '−'], why: 'An equals sign gives a definition.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'The transcript of a short talk',
      about: 'Read a short talk, follow its structure and check notes against it.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'This is the written text of a short talk at a university event for new students. Read it once quickly and look for the signposts: they show you the parts of the talk. Then read it again and take notes for each part.' },
          { t: 'tip', art: 'churro', md: 'In a real lecture you hear the text only once. The signposts help you: when you hear *a continuación* or *por último*, start a new line in your notes.' },
        ],
        [
          { t: 'reading', title: 'Estudiar con pausas', md: 'Buenas tardes a todos. Hoy vamos a hablar de una pregunta sencilla: ¿cuál es la mejor manera de preparar un examen? En primer lugar, voy a describir cómo estudian muchos estudiantes. A continuación, presentaré otro método y, por último, les daré tres consejos.\n\nMuchos estudiantes empiezan a estudiar pocos días antes del examen, a veces toda la noche. Al día siguiente recuerdan mucho, pero una semana después han olvidado casi todo.\n\nOtro método es el estudio espaciado, es decir, estudiar el mismo tema varias veces, con pausas de algunos días. Al principio es más difícil, porque ya hemos olvidado una parte. Sin embargo, de esta manera lo recordamos durante más tiempo.\n\nY ahora, mis consejos. Empiecen pronto. Además, repasen el tema en partes pequeñas, por ejemplo, cada dos días. Y, por último, pónganse a prueba con preguntas en lugar de solo leer sus apuntes otra vez.\n\nEn resumen, quien empieza antes y repasa con regularidad no estudia más, sino mejor. Muchas gracias por su atención.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the talk. True, false or not given?', items: [
            { q: 'Los consejos están al principio de la charla.', a: 'f', why: '*por último, les daré tres consejos*: the tips come at the end.' },
            { q: 'Muchos estudiantes empiezan a estudiar poco antes del examen.', a: 't', why: 'The second paragraph says so.' },
            { q: 'En el estudio espaciado se estudia el tema solo una vez.', a: 'f', why: '*estudiar el mismo tema varias veces*: several times.' },
            { q: 'El estudio espaciado es más fácil al principio.', a: 'f', why: '*Al principio es más difícil*: harder at first.' },
            { q: 'La charla dura una hora.', a: 'ng', why: 'The text does not say how long the talk is.' },
            { q: 'Es mejor hacerse preguntas que solo leer los apuntes.', a: 't', why: '*pónganse a prueba con preguntas en lugar de solo leer sus apuntes*: one of the tips.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'A student took notes. Which notes match each part of the talk?', items: [
            { q: 'Parte 2: ¿Cómo estudian muchos estudiantes?', o: ['pocos días antes → 1 semana después olvidan casi todo', 'empiezan pronto → 1 semana después olvidan todo', 'estudio espaciado → recuerdan todo'], why: 'They study just before the exam and forget most of it after a week.' },
            { q: 'Parte 3: El otro método', o: ['estudio espaciado = mismo tema varias veces + pausas; al principio más difícil', 'estudio espaciado = tema 1 vez, sin pausas', 'estudio espaciado: fácil, pero se olvida pronto'], why: 'The same topic several times, with breaks; harder at first, but you remember longer.' },
            { q: 'Parte 4: Los consejos', o: ['empezar pronto, repasar en partes pequeñas, hacerse preguntas', 'estudiar de noche, leer los apuntes muchas veces', 'empezar tarde, estudiar todo en 1 día'], why: 'These are the three tips in the fourth paragraph.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the phrases from the talk.', items: [
            { q: 'En ___, quien empieza antes estudia mejor. (to sum up)', a: ['resumen'], why: '*En resumen* introduces the summary.' },
            { q: 'Es ___, estudiar el mismo tema varias veces. (that means)', a: ['decir'], why: '*es decir* explains what the speaker said before.' },
            { q: 'Muchas gracias por su ___. (attention)', a: ['atención', 'atencion'], why: 'The usual last sentence of a talk.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Al principio de una charla: «Hoy vamos a ___ del agua».', o: ['hablar', 'decir', 'contar'], why: 'The fixed phrase is *hablar de* + the topic.' },
      { q: '¿Qué significa «p. ej.»?', o: ['por ejemplo', 'página', 'para empezar'], why: '*p. ej.* is the short form of *por ejemplo*.' },
      { q: 'El coche es cómodo. ___, es caro.', o: ['Sin embargo', 'Por ejemplo', 'En primer lugar'], why: 'A good point, then a bad point: a contrast, *sin embargo*.' },
      { q: '¿Qué notas corresponden a «Falta agua porque no llueve desde hace meses»?', o: ['meses sin lluvia → falta agua', 'falta agua → mucha lluvia', 'lluvia + agua = bien'], why: 'No rain for months leads to a result: the arrow shows it.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'En primer ___, voy a hablar de la historia. (place)', a: ['lugar'], why: '*En primer lugar*: firstly.' },
      { q: 'Por ___, les daré tres consejos. (the last point)', a: ['último', 'ultimo'], why: '*Por último* introduces the last point.' },
      { q: 'La clase dura ___ una hora. (aproximadamente, short form)', a: ['aprox.', 'aprox'], why: '*aprox.* = *aproximadamente*.' },
      { q: 'En el norte llueve mucho; en ___, en el sur llueve poco.', a: ['cambio'], why: '*en cambio* compares two different things.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'A continuación, les mostraré dos ejemplos.', why: '*A continuación* starts the sentence, followed by a comma.' },
      { a: 'En resumen, las pausas son muy importantes.', why: '*En resumen* introduces the summary at the end of a talk.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the short form and the long form.', pairs: [
      ['etc.', 'etcétera'],
      ['pág.', 'página'],
      ['cap.', 'capítulo'],
      ['s.', 'siglo'],
    ] },
  ],
};
