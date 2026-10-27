// Spanish A2 for study and exams, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Reading for information',
  goal: 'Find information in notices, adverts and short articles: times, prices and places, and the main idea of a text.',
  art: 'cactus',
  tags: { skills: ['reading', 'vocabulary'], topics: ['scanning', 'main-idea', 'notices', 'opening-hours', 'prices', 'abbreviations'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Scanning for details',
      about: 'Find times, prices and places fast, without reading every word.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'Sometimes you need only one detail: a time, a price or a place. Then you do not read every word. You **scan** the text: your eyes look for numbers, days and the key word of the question. Notices often use short forms. Learn the common ones.' },
          { t: 'table', caption: 'Short forms in notices', explain: ['head', 'col2'], quiz: true, head: ['Short form', 'Spanish', 'English'], rows: [
            ['L-V', 'de lunes a viernes', 'Monday to Friday'],
            ['sáb.', 'sábado', 'Saturday'],
            ['dom.', 'domingo', 'Sunday'],
            ['h', 'horas', 'hours, o’clock'],
            ['pl.', 'planta', 'floor'],
            ['c/', 'calle', 'street'],
            ['máx.', 'máximo', 'at most'],
            ['aprox.', 'aproximadamente', 'about'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain, prices use a **comma** for the cents: *4,50 €* is four euros fifty. Say *cuatro euros con cincuenta* or *cuatro cincuenta*. Times are often written with the 24-hour clock: *16:00 h* is *las cuatro de la tarde*. *Festivos* are public holidays.' },
        ],
        [
          { t: 'reading', title: 'Biblioteca de la universidad: horario', md: 'L-V: 8:00–22:00 h\nSáb.: 10:00–18:00 h\nDom. y festivos: cerrado\n\nPréstamo e información en la planta baja, sala de lectura en la 1.ª pl. Las salas de grupo se reservan por internet, máx. 3 horas al día.' },
          { t: 'reading', title: 'Comedor universitario: precios', md: 'Menú del día: estudiantes 4,50 €, otras personas 7,90 €\nMenú vegetariano: estudiantes 4,20 €, otras personas 7,50 €\nCafé: 1,30 €\n\nAbierto L-V, de 13:00 a 16:00 h.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Scan the two notices. Choose the right answer.', items: [
            { q: '¿Cuándo cierra la biblioteca el sábado?', o: ['a las seis de la tarde', 'a las diez de la noche', 'a las ocho de la mañana'], why: '*Sáb.: 10:00–18:00 h*. 18:00 is six in the evening.' },
            { q: '¿Dónde está la sala de lectura?', o: ['en la primera planta', 'en la planta baja', 'en la segunda planta'], why: '*1.ª pl.* means *primera planta*. The ground floor has the loans and the information desk.' },
            { q: '¿Cuánto paga un estudiante por el menú vegetariano?', o: ['4,20 €', '7,50 €', '4,50 €'], why: '7,50 € is the price for other people, 4,50 € is the menu of the day.' },
            { q: '¿Se puede comer en el comedor el domingo?', o: ['No, solo abre de lunes a viernes.', 'Sí, de 13:00 a 16:00.', 'Sí, pero solo café.'], why: '*Abierto L-V*: Monday to Friday only.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the number in words or in figures.', items: [
            { q: 'Los sábados, la biblioteca abre a las ___.', a: ['diez', '10', '10:00'], why: '*Sáb.: 10:00–18:00 h*.' },
            { q: 'El café cuesta un euro con ___ céntimos.', a: ['treinta', '30'], why: '*1,30 €*: one euro and thirty cents.' },
            { q: 'Una sala de grupo se puede reservar como máximo ___ horas al día.', a: ['tres', '3'], why: '*máx. 3 horas al día*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'memory', h: 'Find the pairs: the short form and the full word.', pairs: [
            ['L-V', 'de lunes a viernes'],
            ['pl.', 'planta'],
            ['c/', 'calle'],
            ['máx.', 'máximo'],
            ['aprox.', 'aproximadamente'],
            ['dom.', 'domingo'],
          ] },
          { t: 'ex', kind: 'crossword', h: 'Words from notices. Complete the crossword.', words: [
            { a: 'cerrado', clue: 'Lo contrario de abierto.' },
            { a: 'planta', clue: 'Un piso de un edificio: la baja, la primera…' },
            { a: 'precio', clue: 'Lo que cuesta algo.' },
            { a: 'horario', clue: 'Las horas en que abre un lugar.' },
            { a: 'festivo', clue: 'Un día sin trabajo, como el 1 de enero.' },
            { a: 'reservar', clue: 'Pedir una sala para un día y una hora.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'The main idea of a short text',
      about: 'Say what a short text is mainly about, and find its key sentence.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To find the **main idea**, read the title and the first sentence. Ask yourself: what is new, and who is it for? The details come later. Do not stop at every word you do not know: often you understand the idea without it.' },
          { t: 'reading', title: 'La biblioteca abre hasta medianoche', md: 'A partir del 1 de marzo, la biblioteca tiene un horario más largo. De lunes a viernes, los estudiantes pueden estudiar hasta las doce de la noche. Muchos estudiantes lo han pedido, sobre todo en la época de exámenes.' },
          { t: 'reading', title: 'Café de idiomas', md: '¡Practica español con otras personas! Nuestro café de idiomas es todos los jueves a las 18:00 en la cafetería. Aquí puedes hablar español en grupos pequeños. Es gratis y no hace falta inscribirse.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What is the main idea?', items: [
            { q: '«La biblioteca abre hasta medianoche»: ¿de qué trata?', o: ['La biblioteca va a abrir más horas.', 'La biblioteca va a cerrar en marzo.', 'Hay exámenes en la biblioteca.'], why: 'The title and the first sentence say it: *un horario más largo*.' },
            { q: '«Café de idiomas»: ¿para quién es?', o: ['para personas que quieren hablar español', 'solo para profesores', 'para personas que trabajan en la cafetería'], why: '*¡Practica español con otras personas!* The cafeteria is only the place.' },
          ] },
          { t: 'reading', title: 'Entrada cerrada', md: 'Queridos estudiantes: por obras, la entrada principal está cerrada hasta finales de abril. Por favor, usad la entrada lateral, al lado del aparcamiento. Gracias por vuestra comprensión.' },
          { t: 'reading', title: 'Jornada de puertas abiertas', md: 'El sábado 14 de junio hay una jornada de puertas abiertas en la universidad. Todas las personas interesadas pueden visitar clases, hablar con estudiantes y ver los laboratorios. El programa empieza a las 10:00.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each text and its main idea.', pairs: [
            ['La biblioteca abre hasta medianoche', 'Más horas para estudiar'],
            ['Café de idiomas', 'Hablar español en grupo'],
            ['Entrada cerrada', 'Otra puerta durante unas semanas'],
            ['Jornada de puertas abiertas', 'Un día para conocer la universidad'],
          ] },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the four texts again. True, false or not given?', items: [
            { q: 'El café de idiomas cuesta dinero.', a: 'f', why: '*Es gratis.*' },
            { q: 'Para ir al café de idiomas hay que apuntarse.', a: 'f', why: '*No hace falta inscribirse*: you do not need to sign up.' },
            { q: 'La entrada lateral está al lado del aparcamiento.', a: 't', why: '*la entrada lateral, al lado del aparcamiento*.' },
            { q: 'En la jornada de puertas abiertas hay comida gratis.', a: 'ng', why: 'The text says nothing about food.' },
          ] },
        ],
        [
          { t: 'text', md: 'Texts about study use many fixed word pairs. Learn the verb together with its noun: *hacer un examen*, *tomar apuntes*, *sacar una buena nota*.' },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the verb? Choose all the right ones.', items: [
            { key: 'hacer', o: ['un examen', 'los deberes', 'una pregunta', 'apuntes', 'un descanso'], a: [0, 1, 2, 4], why: '*hacer un examen, los deberes, una pregunta, un descanso*. Notes go with *tomar*: *tomar apuntes*.' },
            { key: 'tomar', o: ['apuntes', 'un café', 'el autobús', 'los deberes'], a: [0, 1, 2], why: '*tomar apuntes, un café, el autobús*. Homework goes with *hacer*.' },
            { key: 'sacar', o: ['una buena nota', 'un libro de la biblioteca', 'una pregunta'], a: [0, 1], why: '*sacar una buena nota* (get a good mark), *sacar un libro* (borrow a book). A question goes with *hacer*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: notices on a school board',
      about: 'Read four notices from a school board and find the right one for each person.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Many schools have **un tablón de anuncios**, a board with notices from students and from the school. Read the four notices. Then find the right notice for each situation.' },
          { t: 'reading', title: 'En el tablón de anuncios', md: '**A** ¡Nuestro grupo de estudio te busca! Somos cuatro personas del curso de tarde y estudiamos todos los sábados de 10:00 a 12:00 en la biblioteca para el examen A2 de julio. Escribe un mensaje a Karim, grupo A2-3.\n\n**B** Vendo mi libro del curso A2 con el cuaderno de ejercicios, casi nuevo, solo 12 €. Clara, aula 214, martes y jueves después de clase.\n\n**C** ¡Habitación libre! A partir del 1 de octubre hay una habitación libre en nuestro piso compartido: 14 m², a 10 minutos de la universidad en bici, 390 € al mes con gastos incluidos. Buscamos a una persona tranquila.\n\n**D** Atención: el aula de informática 012 está cerrada del 3 al 7 de marzo. Esta semana podéis imprimir en la biblioteca, en la planta baja.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Which notice is right for each situation?', pairs: [
            ['Necesitas un libro barato.', 'Anuncio B'],
            ['Buscas compañeros para estudiar.', 'Anuncio A'],
            ['Buscas un sitio para vivir.', 'Anuncio C'],
            ['Quieres imprimir un trabajo el 5 de marzo.', 'Anuncio D'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Cuánto cuesta la habitación con los gastos?', o: ['390 € al mes', '14 € al mes', '12 € al mes'], why: '*390 € al mes con gastos incluidos*. 14 is the size in m² and 12 € is the book.' },
            { q: '¿Cuándo estudia el grupo de Karim?', o: ['los sábados por la mañana', 'los martes y los jueves', 'todos los días por la tarde'], why: '*todos los sábados de 10:00 a 12:00*. Tuesday and Thursday are in notice B.' },
            { q: '¿Dónde se puede imprimir del 3 al 7 de marzo?', o: ['en la biblioteca', 'en el aula 012', 'en el aula 214'], why: 'The computer room is closed: *podéis imprimir en la biblioteca*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'El libro de Clara es muy viejo.', a: 'f', why: '*casi nuevo*: almost new.' },
            { q: 'La habitación está cerca de la universidad.', a: 't', why: '*a 10 minutos de la universidad en bici*.' },
            { q: 'En el piso compartido viven tres personas.', a: 'ng', why: 'The notice does not say how many people live there.' },
            { q: 'El grupo de estudio prepara un examen.', a: 't', why: '*para el examen A2 de julio*.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find the words from the notices.', words: ['libro', 'piso', 'grupo', 'aula', 'examen', 'bici'] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '«L-V» significa ___.', o: ['de lunes a viernes', 'solo los viernes', 'el lunes y el viernes'], why: '*L-V*: Monday to Friday.' },
      { q: 'Un aviso dice: «Dom. y festivos: cerrado». El 1 de enero, la biblioteca ___.', o: ['está cerrada', 'abre a las diez', 'abre por la tarde'], why: 'The 1 January is a public holiday, a *festivo*.' },
      { q: 'Quieres saber de qué trata un texto. Primero lees ___.', o: ['el título y la primera frase', 'todas las palabras', 'solo los números'], why: 'The title and the first sentence usually give the main idea.' },
      { q: '«No hace falta inscribirse» significa ___.', o: ['no tienes que apuntarte', 'tienes que pagar', 'tienes que apuntarte antes'], why: '*no hace falta* = it is not necessary.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'La sala de lectura está en la primera ___. (pl.)', a: ['planta'], why: '*pl.* is short for *planta*.' },
      { q: 'Por ___, la entrada principal está cerrada.', a: ['obras'], why: '*por obras*: because of building work.' },
      { q: 'El café de idiomas es gratis: no ___ nada. (costar)', a: ['cuesta'], why: '*costar* changes *o* to *ue*: *cuesta*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Si un aviso dice «máx. 3 horas», puedes reservar la sala cuatro horas.', a: 'f', why: '*máx.* = *máximo*: not more than three hours.' },
      { q: '«Aprox.» significa más o menos.', a: 't', why: '*aprox.* = *aproximadamente*: about.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the words with the same meaning.', pairs: [
      ['gratis', 'no cuesta dinero'],
      ['cerrado', 'no está abierto'],
      ['medianoche', 'las doce de la noche'],
      ['casi nuevo', 'no es viejo'],
    ] },
  ],
};
