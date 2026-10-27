// Spanish A1 for travel, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Sightseeing and opening times',
  goal: 'Ask when places open, buy tickets and plan your day.',
  art: 'cactus',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['time', 'days-of-the-week', 'opening-times', 'tickets', 'ir-a-infinitive', 'gustar', 'sightseeing'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'The time and the days of the week',
      about: 'Say the time, the days of the week and ask when places open and close.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'To ask the time, say *¿Qué hora es?* For one o’clock, say *Es la una*. For all other hours, say *Son las …*: *Son las dos, son las cinco*.\n\nAdd *y cuarto* (quarter past), *y media* (half past) or *menos cuarto* (quarter to). For minutes, add *y* and the number: *Son las diez y diez*.' },
          { t: 'table', caption: 'What time is it?', explain: ['head'], quiz: true, head: ['Time', 'Spanish'], rows: [
            ['1:00', 'Es la una.'],
            ['3:00', 'Son las tres.'],
            ['4:15', 'Son las cuatro y cuarto.'],
            ['6:30', 'Son las seis y media.'],
            ['7:45', 'Son las ocho menos cuarto.'],
            ['10:10', 'Son las diez y diez.'],
            ['12:50', 'Es la una menos diez.'],
          ] },
          { t: 'tip', art: 'owl', md: 'To ask **when** something happens, use *a*: *¿A qué hora abre el museo? – A las diez.* On signs and tickets, times are often written from 0 to 24: *17:00* means five in the afternoon, *las cinco de la tarde*.' },
        ],
        [
          { t: 'text', md: 'The days of the week are written with a small letter. *El lunes* means on Monday, and *los lunes* means on Mondays, every Monday. Opening times use *de … a …*: *de lunes a viernes, de diez a dos*.' },
          { t: 'table', caption: 'The days of the week', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['lunes', 'Monday'],
            ['martes', 'Tuesday'],
            ['miércoles', 'Wednesday'],
            ['jueves', 'Thursday'],
            ['viernes', 'Friday'],
            ['sábado', 'Saturday'],
            ['domingo', 'Sunday'],
          ] },
          { t: 'examples', items: [
            { s: 'El museo **abre** a las diez y **cierra** a las ocho.', n: '*abrir*: to open. *cerrar*: to close, *cierra* with *ie*.' },
            { s: '**Los lunes** está cerrado.', n: 'It is closed every Monday.' },
            { s: 'Está abierto **de martes a domingo**.', n: 'From Tuesday to Sunday.' },
            { s: 'Las tiendas cierran **de dos a cinco**.', n: 'From two to five.' },
          ] },
          { t: 'tip', art: 'churro', md: 'In many smaller towns in Spain, shops close in the afternoon, usually from about two to five, and open again until eight or nine. Many museums are closed one day a week, often on Monday.' },
        ],
        [
          { t: 'dialogue', title: 'En la oficina de turismo', lines: [
            { who: 'Mateo', s: 'Hola, buenos días. ¿A qué hora abre la catedral?' },
            { who: 'Marta', s: 'Abre a las diez y media y cierra a las seis.' },
            { who: 'Mateo', s: '¿Y está abierta los domingos?' },
            { who: 'Marta', s: 'Sí, pero los domingos abre solo por la tarde, de cuatro a siete.' },
            { who: 'Mateo', s: '¿Y el museo de arte?' },
            { who: 'Marta', s: 'El museo está abierto de martes a domingo. Los lunes está cerrado.' },
            { who: 'Mateo', s: 'Perfecto. Muchas gracias.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Read the dialogue again. True or false?', items: [
            { q: 'La catedral abre a las diez y media.', a: 't', why: '*Abre a las diez y media.*' },
            { q: 'Los domingos, la catedral abre por la mañana.', a: 'f', why: 'On Sundays it opens only *por la tarde*, in the afternoon.' },
            { q: 'El museo de arte está cerrado los lunes.', a: 't', why: '*Los lunes está cerrado.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the time and the words.', pairs: [
            ['2:30', 'las dos y media'],
            ['9:15', 'las nueve y cuarto'],
            ['5:45', 'las seis menos cuarto'],
            ['1:00', 'la una'],
            ['11:20', 'las once y veinte'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ la una y media. (ser)', a: ['Es'], why: 'For one o’clock: *es la una*.' },
            { q: 'Son las tres y ___. (3:30)', a: ['media'], why: 'Half past: *y media*.' },
            { q: '¿A qué hora ___ el museo? – A las nueve. (abrir)', a: ['abre'], why: '*el museo* is like *él*: *abre*.' },
            { q: 'La tienda ___ a las ocho. (cerrar)', a: ['cierra'], why: '*cerrar* changes *e* to *ie*: *cierra*.' },
            { q: 'El museo está cerrado ___ lunes. (every Monday)', a: ['los'], why: 'Every Monday: *los lunes*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'odd', h: 'Which word is the odd one out?', items: [
            { o: ['enero', 'lunes', 'jueves', 'sábado'], why: '*enero* is a month, January. The others are days.' },
            { o: ['abierto', 'cuarto', 'media', 'menos'], why: '*abierto* means open. The others are words for the time.' },
            { o: ['la catedral', 'el martes', 'el domingo', 'el viernes'], why: '*la catedral* is a building. The others are days.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: the day and the day after.', pairs: [
            ['lunes', 'martes'],
            ['miércoles', 'jueves'],
            ['viernes', 'sábado'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Tickets and plans',
      about: 'Buy tickets for a museum or a tour and talk about plans with ir a.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'For plans, use **ir a** + an infinitive: *Voy a visitar la catedral.* (I am going to visit the cathedral.) Only *ir* changes: *voy, vas, va, vamos, vais, van*.\n\nTo say what you like doing, use *me gusta* + an infinitive: *Me gusta pasear por el centro.*' },
          { t: 'examples', items: [
            { s: 'Esta tarde **vamos a ver** el palacio.', n: '*vamos a* + *ver*.' },
            { s: 'Mañana **voy a hacer** una visita guiada.', n: '*una visita guiada*: a tour with a guide.' },
            { s: '¿Qué **vas a hacer** el sábado?', n: 'A question about plans.' },
            { s: '**Me gusta** visitar museos.', n: '*me gusta* + an infinitive.' },
            { s: '**No me gusta** hacer cola.', n: '*hacer cola*: to wait in a line.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Use *ir a* with words for later: *esta tarde* (this afternoon), *esta noche* (tonight), *mañana* (tomorrow), *el fin de semana* (at the weekend).' },
        ],
        [
          { t: 'dialogue', title: 'En la taquilla del museo', lines: [
            { who: 'Taquillero', s: 'Buenos días.' },
            { who: 'Leila', s: 'Hola. Dos entradas, por favor. ¿Cuánto cuestan?' },
            { who: 'Taquillero', s: 'La entrada general cuesta doce euros. ¿Son estudiantes?' },
            { who: 'Leila', s: 'Mi amiga sí. Aquí tiene su carné.' },
            { who: 'Taquillero', s: 'Entonces son doce euros y seis euros, la entrada reducida. Dieciocho en total.' },
            { who: 'Leila', s: '¿Hay visitas guiadas en inglés?' },
            { who: 'Taquillero', s: 'Sí, a las once y a las cuatro. Cuestan tres euros más.' },
            { who: 'Leila', s: 'Muy bien, vamos a hacer la visita de las once.' },
          ] },
          { t: 'table', caption: 'Tickets and visits', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['la entrada', 'ticket for a museum, a show or a match'],
            ['la entrada general', 'full price ticket'],
            ['la entrada reducida', 'cheaper ticket, for example for students'],
            ['la visita guiada', 'tour with a guide'],
            ['el carné de estudiante', 'student card'],
            ['abierto, abierta', 'open'],
            ['cerrado, cerrada', 'closed'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it as a plan with ir a.', items: [
            { q: 'Visito la catedral.', cue: 'Voy a', a: ['Voy a visitar la catedral.'], why: '*voy a* + the infinitive *visitar*.' },
            { q: 'Vemos el palacio.', cue: 'Vamos a', a: ['Vamos a ver el palacio.'], why: '*vamos a* + the infinitive *ver*.' },
            { q: 'Ana hace una visita guiada.', cue: 'Ana va a', a: ['Ana va a hacer una visita guiada.'], why: '*va a* + the infinitive *hacer*.' },
            { q: '¿Compras las entradas?', cue: '¿Vas a', a: ['¿Vas a comprar las entradas?'], why: '*vas a* + the infinitive *comprar*.' },
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with hacer?', items: [
            { key: 'hacer', o: ['una visita guiada', 'cola', 'fotos', 'la catedral', 'un museo'], a: [0, 1, 2], why: '*hacer una visita guiada*, *hacer cola*, *hacer fotos*. You *visitar* a cathedral or a museum.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Esta tarde vamos a ver el palacio.', why: 'The time word, then *vamos a* + infinitive.' },
            { a: '¿Cuánto cuesta la entrada?', why: '*¿Cuánto cuesta* + one thing.' },
            { a: 'Me gusta visitar museos.', why: '*me gusta* + an infinitive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
            { s: 'Mañana voy [visitar] el museo.', a: ['a visitar'], why: 'After *voy*, you need *a*: *voy a visitar*.' },
            { s: 'El museo está [cerrada] los lunes.', a: ['cerrado'], why: '*el museo* is masculine: *cerrado*.' },
            { s: 'Dos [entrada], por favor.', a: ['entradas'], why: 'Two tickets: plural, *entradas*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a museum and a tour',
      about: 'Read a leaflet about a museum and a walking tour and plan your visit.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Leaflets give opening times, prices and what you can do. Look for *horario* (opening times), *precio* (price) and *gratis*.' },
          { t: 'reading', title: 'Museo del Agua y paseo por el casco antiguo', md: '**Museo del Agua**\n\nHorario: de martes a sábado, de 10:00 a 19:00. Domingos, de 10:00 a 14:00. Lunes, cerrado.\n\nPrecio: entrada general, 8 €. Entrada reducida (estudiantes y mayores de 65 años), 4 €. Los domingos la entrada es gratis.\n\nEn el museo hay una cafetería con terraza. Está prohibido hacer fotos en las salas.\n\n**Paseo por el casco antiguo**\n\nUna visita guiada a pie por las calles más bonitas de la ciudad. La visita dura dos horas. Sale todos los días a las diez y media, delante de la oficina de turismo. Hay visitas en español y en inglés. Precio: 10 € por persona. Es necesario reservar.' },
          { t: 'tip', art: 'churro', md: '*El casco antiguo* is the old part of a town. In Latin America people often say *el centro histórico*.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the leaflet. True, false or not given?', items: [
            { q: 'El museo está cerrado los lunes.', a: 't', why: '*Lunes, cerrado.*' },
            { q: 'Los domingos el museo cierra a las siete.', a: 'f', why: 'On Sundays it closes at 14:00, two in the afternoon.' },
            { q: 'Los domingos no pagas la entrada.', a: 't', why: '*Los domingos la entrada es gratis.*' },
            { q: 'En el museo puedes hacer fotos.', a: 'f', why: '*Está prohibido hacer fotos en las salas.*' },
            { q: 'La cafetería tiene comida vegetariana.', a: 'ng', why: 'The leaflet says there is a café, but not what food it has.' },
            { q: 'La visita guiada es en dos lenguas.', a: 't', why: '*Hay visitas en español y en inglés.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Eres estudiante. Visitas el museo el jueves. ¿Cuánto pagas?', o: ['4 €', '8 €', 'nada'], why: 'Students pay the *entrada reducida*: 4 €.' },
            { q: '¿Dónde empieza el paseo?', o: ['delante de la oficina de turismo', 'en el museo', 'en la cafetería'], why: '*Sale … delante de la oficina de turismo.*' },
            { q: '¿Cuánto dura el paseo?', o: ['dos horas', 'media hora', 'todo el día'], why: '*La visita dura dos horas.*' },
            { q: 'Quieres hacer el paseo. ¿Qué tienes que hacer antes?', o: ['reservar', 'comprar un carné', 'ir al museo'], why: '*Es necesario reservar*: you must book.' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Words for sightseeing.', words: [
            { a: 'museo', clue: 'Aquí ves arte o historia.' },
            { a: 'entrada', clue: 'La compras para visitar un museo.' },
            { a: 'cerrado', clue: 'No está abierto.' },
            { a: 'domingo', clue: 'El día después del sábado.' },
            { a: 'guía', clue: 'La persona que explica la visita.' },
            { a: 'horario', clue: 'Las horas de abrir y cerrar.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '¿Qué hora es? (1:30)', o: ['Es la una y media.', 'Son las una y media.', 'Es la uno y media.'], why: 'For one o’clock: *es la una*.' },
      { q: '7:45: Son las ___.', o: ['ocho menos cuarto', 'siete menos cuarto', 'ocho y cuarto'], why: 'A quarter to eight: *las ocho menos cuarto*.' },
      { q: 'Mañana ___ a visitar el palacio.', o: ['vamos', 'somos', 'estamos'], why: 'Plans: *ir a* + infinitive, *vamos a visitar*.' },
      { q: 'Una entrada más barata para estudiantes es una entrada ___.', o: ['reducida', 'general', 'cerrada'], why: '*la entrada reducida*: a cheaper ticket.' },
      { q: 'El día después del jueves es el ___.', o: ['viernes', 'miércoles', 'martes'], why: 'After Thursday comes Friday: *viernes*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: '¿A qué hora ___ el museo? – A las ocho de la tarde. (cerrar)', a: ['cierra'], why: '*cerrar* changes *e* to *ie*: *cierra*.' },
      { q: 'La catedral está abierta de lunes ___ sábado.', a: ['a'], why: 'From … to …: *de … a …*.' },
      { q: 'Esta tarde voy ___ hacer una visita guiada.', a: ['a'], why: '*ir a* + infinitive.' },
      { q: 'Son las cuatro y ___. (4:15)', a: ['cuarto'], why: 'Quarter past: *y cuarto*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it as a plan with ir a.', items: [
      { q: 'Compro dos entradas.', cue: 'Voy a', a: ['Voy a comprar dos entradas.'], why: '*voy a* + the infinitive *comprar*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
      { s: 'El museo está cerrado [el] lunes, todas las semanas.', a: ['los'], why: 'Every Monday: *los lunes*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
      ['¿Cuánto cuesta la entrada?', 'Ocho euros.'],
      ['¿Qué vas a hacer mañana?', 'Voy a ver la catedral.'],
      ['¿Está abierto los domingos?', 'Sí, por la mañana.'],
    ] },
  ],
};
