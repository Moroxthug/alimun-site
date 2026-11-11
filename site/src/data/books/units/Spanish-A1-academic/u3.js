// Spanish A1 for study and exams, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Timetable and school things',
  goal: 'Name the things you use in class, say where they are and talk about your timetable: days, subjects and times.',
  art: 'dog',
  tags: { skills: ['vocabulary', 'grammar', 'reading'], topics: ['school-things', 'articles', 'plurals', 'hay-esta', 'school-subjects', 'telling-the-time', 'timetable'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'El libro, la mochila',
      about: 'Name school things with el, la, un, una, make plurals and say where things are.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Every Spanish noun is **masculine** or **feminine**. Many words in **-o** are masculine: *el cuaderno*. Many words in **-a** are feminine: *la mochila*. Some words do not follow a pattern: *el lápiz, el ordenador*. Learn every word with its article.' },
          { t: 'table', caption: 'Things for class', explain: ['head', 'col2'], quiz: true, head: ['One', 'Two or more', 'English'], rows: [
            ['el bolígrafo (el boli)', 'los bolígrafos', 'pen'],
            ['el lápiz', 'los lápices', 'pencil'],
            ['la goma', 'las gomas', 'rubber, eraser'],
            ['el cuaderno', 'los cuadernos', 'notebook'],
            ['la carpeta', 'las carpetas', 'folder'],
            ['la mochila', 'las mochilas', 'school bag'],
            ['el diccionario', 'los diccionarios', 'dictionary'],
            ['la calculadora', 'las calculadoras', 'calculator'],
            ['el ordenador', 'los ordenadores', 'computer'],
          ] },
          { t: 'tip', art: 'churro', md: 'For the plural, add **-s** after a vowel (*libro, libros*) and **-es** after a consonant (*ordenador, ordenadores*). A final *z* becomes *c*: *lápiz, lápices*. In parts of Latin America a pen is *la pluma* or *la lapicera*, and a computer is *la computadora*.' },
        ],
        [
          { t: 'text', md: 'To say that something is in a place, use **hay** or **está**. Use **hay** with *un, una*, numbers or no article: *Hay un diccionario en la mesa.* Use **está** (one thing) or **están** (two or more) with *el, la, los, las* or *mi, tu*: *El diccionario está en la mesa.*' },
          { t: 'examples', items: [
            { s: '¿**Hay** una calculadora en la clase?', n: '*hay* + *una*: you ask if there is one.' },
            { s: 'En mi mochila **hay** dos cuadernos.', n: '*hay* + a number.' },
            { s: 'Mi boli **está** en la mesa.', n: '*está* + *mi boli*: one known thing.' },
            { s: 'Los libros **están encima de** la mesa.', n: '*encima de*: on top of. Plural: *están*.' },
            { s: 'La mochila **está debajo de** la silla.', n: '*debajo de*: under.' },
            { s: 'El ordenador **está al lado de** la pizarra.', n: '*al lado de*: next to. *a + el = al*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'el or la? Sort the words.', groups: ['el', 'la'], items: [
            { s: 'cuaderno', g: 0, why: 'A word in *-o*: *el cuaderno*.' },
            { s: 'mochila', g: 1, why: 'A word in *-a*: *la mochila*.' },
            { s: 'lápiz', g: 0, why: '*el lápiz*: learn this one with its article.' },
            { s: 'goma', g: 1, why: 'A word in *-a*: *la goma*.' },
            { s: 'ordenador', g: 0, why: '*el ordenador*: learn this one with its article.' },
            { s: 'calculadora', g: 1, why: 'A word in *-a*: *la calculadora*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'hay, está or están?', items: [
            { q: 'En la clase ___ una pizarra.', o: ['hay', 'está', 'están'], why: '*una pizarra*: with *un, una* you use *hay*.' },
            { q: 'El diccionario ___ en la mesa de la profesora.', o: ['está', 'hay', 'están'], why: '*El diccionario*: one known thing, so *está*.' },
            { q: 'Mis lápices ___ en la mochila.', o: ['están', 'está', 'hay'], why: '*Mis lápices*: two or more known things, so *están*.' },
            { q: 'En mi mochila ___ tres cuadernos.', o: ['hay', 'está', 'están'], why: 'A number: *hay tres cuadernos*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'En la mochila hay dos [lápizes].', a: ['lápices'], why: 'A final *z* becomes *c* in the plural: *lápices*.' },
            { s: 'Hay [el] ordenador en la clase.', a: ['un'], why: 'With *hay* you use *un, una*, not *el, la*.' },
            { s: 'Los cuadernos [está] en la mesa.', a: ['están'], why: '*Los cuadernos* is plural, so *están*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the plural.', items: [
            { q: 'un cuaderno, dos ___', a: ['cuadernos'], why: 'After a vowel, add *-s*.' },
            { q: 'un ordenador, dos ___', a: ['ordenadores'], why: 'After a consonant, add *-es*.' },
            { q: 'una goma, dos ___', a: ['gomas'], why: 'After a vowel, add *-s*.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: one and two or more.', pairs: [
            ['el lápiz', 'los lápices'],
            ['la mochila', 'las mochilas'],
            ['el ordenador', 'los ordenadores'],
            ['la carpeta', 'las carpetas'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'El horario',
      about: 'Say which subjects you have, on which days and at what time.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A subject at school or university is **la asignatura**. The days of the week are masculine and have no capital letter: *el lunes, el martes*. **El lunes** is one Monday. **Los lunes** is every Monday. **De lunes a viernes** is from Monday to Friday.' },
          { t: 'table', caption: 'Subjects', explain: ['head', 'col1'], quiz: true, head: ['Subject', 'What you learn'], rows: [
            ['las matemáticas', 'numbers and formulas'],
            ['la historia', 'life and events in the past'],
            ['la biología', 'plants, animals and the human body'],
            ['la informática', 'computers and programming'],
            ['la economía', 'money, companies and markets'],
            ['la química', 'what things are made of'],
            ['el inglés, el español', 'languages'],
          ] },
          { t: 'tip', art: 'churro', md: 'Days of the week: *lunes, martes, miércoles, jueves, viernes, sábado, domingo*. The plural of *lunes* is also *lunes*: *los lunes*. Only *sábado* and *domingo* add *-s*: *los sábados, los domingos*.' },
        ],
        [
          { t: 'text', md: 'To ask the time of a class: **¿A qué hora es…?** Answer with **a la una** (one o’clock) or **a las** + the other hours: *a las nueve, a las diez y media*. For the start and the end, use **de… a…**: *de nueve a once*.' },
          { t: 'examples', items: [
            { s: '¿**A qué hora** es la clase de historia?', n: 'You ask for the time of a class.' },
            { s: 'Es **a las nueve y media**.', n: '*y media*: half past.' },
            { s: 'Matemáticas es **a la una**.', n: 'Only one o’clock uses *la*: *a la una*.' },
            { s: 'Tengo inglés **de** diez **a** once y cuarto.', n: '*de… a…*: from… to… *y cuarto*: quarter past.' },
            { s: '**Los martes** tengo biología **por la tarde**.', n: '*los martes*: every Tuesday. *por la tarde*: in the afternoon.' },
            { s: 'Las clases **empiezan** a las ocho y **terminan** a las dos.', n: '*empezar* (e > ie) and *terminar* (regular).' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Two classmates and the timetable', lines: [
            { who: 'Diego', s: 'Lucía, ¿qué tenemos hoy?' },
            { who: 'Lucía', s: 'Hoy es lunes. Primero tenemos matemáticas, a las nueve.' },
            { who: 'Diego', s: '¿Y después?' },
            { who: 'Lucía', s: 'Después, historia, de diez y media a doce.' },
            { who: 'Diego', s: '¿Tenemos informática hoy?' },
            { who: 'Lucía', s: 'No, informática es los miércoles por la tarde, a las cuatro.' },
            { who: 'Diego', s: '¿A qué hora terminan las clases hoy?' },
            { who: 'Lucía', s: 'A la una y media. Luego comemos en la cafetería, ¿vale?' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Hoy es lunes.', a: 't', why: '*Hoy es lunes.*' },
            { q: 'La clase de historia es a las nueve.', a: 'f', why: 'Mathematics is at nine. History is *de diez y media a doce*.' },
            { q: 'Tienen informática los miércoles.', a: 't', why: '*informática es los miércoles por la tarde*.' },
            { q: 'Hoy las clases terminan a la una y media.', a: 't', why: '*A la una y media.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the time and the words.', pairs: [
            ['9:00', 'las nueve'],
            ['1:00', 'la una'],
            ['10:30', 'las diez y media'],
            ['11:15', 'las once y cuarto'],
            ['12:45', 'la una menos cuarto'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write a la, a las, de, a or los.', items: [
            { q: 'La clase de química es ___ nueve.', a: ['a las'], why: '*a las* + an hour from two: *a las nueve*.' },
            { q: 'Tengo español ___ una.', a: ['a la'], why: 'One o’clock: *a la una*.' },
            { q: 'La biblioteca está abierta ___ lunes a sábado.', a: ['de'], why: '*de… a…*: from… to…' },
            { q: 'Tengo clase de ocho ___ dos.', a: ['a'], why: '*de ocho a dos*: the end comes after *a*.' },
            { q: '___ viernes no tengo clase.', a: ['Los'], why: '*los viernes*: every Friday.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: '¿A qué hora es la clase de inglés?', why: '*¿A qué hora…?* first, then the verb *es* and the class.' },
            { a: 'Los jueves tengo historia por la mañana.', why: 'The day first is very common: *Los jueves tengo…*' },
            { a: 'Las clases terminan a las dos.', why: 'The subject *Las clases*, the verb *terminan*, then the time.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find six days of the week.', words: ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a timetable and a message',
      about: 'Find days, times and rooms in a timetable, and understand a message about a change.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Here is the timetable of Mei, a student in her first year at university. **El aula** is the classroom. It is feminine, but it takes *el*: *el aula 3*.' },
          { t: 'table', caption: 'Horario de Mei', head: ['Día', 'Hora', 'Asignatura', 'Aula'], rows: [
            ['lunes', '9:00–10:30', 'Matemáticas', '3'],
            ['martes', '11:00–12:30', 'Economía', '12'],
            ['miércoles', '9:00–10:30', 'Matemáticas', '3'],
            ['miércoles', '16:00–17:30', 'Informática', '7'],
            ['jueves', '10:00–11:30', 'Español', '5'],
            ['viernes', '12:00–13:30', 'Historia', '12'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Look at the timetable. Choose the right answer.', items: [
            { q: '¿Cuándo tiene Mei informática?', o: ['el miércoles por la tarde', 'el lunes por la mañana', 'el viernes a las doce'], why: '*miércoles, 16:00–17:30*: Wednesday afternoon.' },
            { q: '¿En qué aula es la clase de español?', o: ['en el aula 5', 'en el aula 3', 'en el aula 12'], why: '*jueves, Español, aula 5*.' },
            { q: '¿Cuántos días tiene Mei matemáticas?', o: ['dos días', 'un día', 'tres días'], why: 'On Monday and on Wednesday.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Mensaje de la secretaría', md: 'Hola a todos:\n\nEl viernes no hay clase de historia porque la profesora Ruiz está enferma. La clase es el lunes, a las once, en el aula 12.\n\nLos deberes para el lunes son los ejercicios de la página cuarenta. Los libros nuevos están en la biblioteca, en el segundo piso.\n\nSi tenéis preguntas, escribid a historia@example.com.\n\nUn saludo,\nla secretaría' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the message. True, false or not given?', items: [
            { q: 'El viernes hay clase de historia.', a: 'f', why: '*El viernes no hay clase de historia.*' },
            { q: 'La profesora Ruiz está enferma.', a: 't', why: '*porque la profesora Ruiz está enferma*.' },
            { q: 'La clase nueva es en otra aula.', a: 'f', why: 'It is in *el aula 12*, the same room as on Friday.' },
            { q: 'La biblioteca está abierta el sábado.', a: 'ng', why: 'The message does not say when the library is open.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Use the timetable and the message together.', items: [
            { q: 'El lunes, ¿cuántas clases tiene Mei?', o: ['dos: matemáticas e historia', 'una: matemáticas', 'tres: matemáticas, historia y español'], why: 'Mathematics at nine, and history moves to Monday at eleven.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words for places.', items: [
            { s: 'La clase es en el [aula] 12. Los libros están en la [biblioteca], en el segundo [piso].', why: '*el aula* (classroom), *la biblioteca* (library), *el piso* (floor).' },
          ] },
          { t: 'tip', art: 'churro', md: 'In Spain a classroom is *el aula* or *la clase*. In many Latin American countries people say *el salón* for a classroom.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'En la clase ___ dos ordenadores.', o: ['hay', 'está', 'están'], why: 'A number: *hay dos ordenadores*.' },
      { q: 'Mi mochila ___ debajo de la silla.', o: ['está', 'hay', 'están'], why: '*Mi mochila*: one known thing, so *está*.' },
      { q: 'La clase de historia es ___ una.', o: ['a la', 'a las', 'los'], why: 'One o’clock: *a la una*.' },
      { q: 'En ___ aprendes sobre los ordenadores.', o: ['informática', 'historia', 'biología'], why: '*la informática*: computers and programming.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'un lápiz, dos ___', a: ['lápices'], why: 'A final *z* becomes *c*: *lápices*.' },
      { q: '___ cuaderno está en la mesa.', a: ['El'], why: '*cuaderno* is masculine: *el cuaderno*.' },
      { q: 'Tengo clase ___ lunes a viernes.', a: ['de'], why: '*de lunes a viernes*.' },
      { q: '¿A qué ___ es la clase de español?', a: ['hora'], why: '*¿A qué hora…?* asks for the time.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the time and the words.', pairs: [
      ['8:30', 'las ocho y media'],
      ['1:00', 'la una'],
      ['10:15', 'las diez y cuarto'],
      ['2:45', 'las tres menos cuarto'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Los libros [está] en la biblioteca.', a: ['están'], why: '*Los libros* is plural: *están*.' },
      { s: 'Hay [la] calculadora en mi mochila.', a: ['una'], why: 'With *hay* you use *un, una*.' },
    ] },
  ],
};
