// Spanish A1 for moving abroad, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Getting around',
  goal: 'Buy a ticket, take the metro or the bus and ask the way.',
  art: 'dog',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['public-transport', 'tickets', 'ir', 'telling-the-time', 'directions', 'al-del', 'imperative-usted', 'timetable'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Buying a ticket',
      about: 'The words for tickets and transport, ir, and the time a train or bus leaves.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Most Spanish cities have good buses, and the big ones have a metro. You buy a ticket, **un billete**, at a machine, at the ticket office (*la taquilla*) or on the bus. If you take the bus or the metro every day, a pass (*un abono*) is usually cheaper.' },
          { t: 'table', caption: 'Tickets and transport', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['el billete sencillo', 'a ticket for one trip'],
            ['de ida y vuelta', 'there and back, a return ticket'],
            ['el abono', 'a pass for a month or more'],
            ['la parada', 'a bus stop'],
            ['la estación de metro', 'an underground station'],
            ['la línea', 'the line, the number of the bus or metro'],
            ['el andén', 'the platform'],
            ['cambiar de línea', 'to change to another line'],
          ] },
          { t: 'tip', art: 'churro', md: 'In Latin America, a ticket is usually *un boleto*, and a bus has many names: *el camión* in Mexico, *el colectivo* in Argentina. A car is *un coche* in Spain, but *un carro* or *un auto* in much of Latin America.' },
        ],
        [
          { t: 'text', md: 'The verb **ir** (to go) is irregular. Use **en** + transport: *voy en metro*, *vamos en autobús*. On foot is **a pie**. To ask about the time, say **¿A qué hora sale…?**: *¿A qué hora sale el tren?* The answer has **a las**: *Sale a las ocho y cuarto.*' },
          { t: 'table', caption: 'ir (to go)', explain: ['head'], quiz: true, head: ['Person', 'ir'], rows: [
            ['yo', 'voy'],
            ['tú', 'vas'],
            ['él, ella, usted', 'va'],
            ['nosotros, nosotras', 'vamos'],
            ['vosotros, vosotras', 'vais'],
            ['ellos, ellas, ustedes', 'van'],
          ] },
          { t: 'examples', items: [
            { s: 'Voy al trabajo **en metro**.', n: '*en* + transport: *en metro*, *en autobús*, *en tren*, *en bici*.' },
            { s: 'Los niños van al colegio **a pie**.', n: 'On foot is *a pie*, not *en pie*.' },
            { s: 'El autobús sale **a las nueve y media**.', n: '*a las* + the hour. *y media*: half past.' },
            { s: 'El tren llega **a la una**.', n: 'For one o’clock, *a la una*, without *s*.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'En la taquilla', lines: [
            { who: 'Amira', s: 'Buenos días. Quería un billete para el aeropuerto.' },
            { who: 'Taquillero', s: '¿Sencillo o de ida y vuelta?' },
            { who: 'Amira', s: 'De ida y vuelta, por favor. ¿Cuánto es?' },
            { who: 'Taquillero', s: 'Son ocho euros con cuarenta.' },
            { who: 'Amira', s: '¿A qué hora sale el próximo tren?' },
            { who: 'Taquillero', s: 'A las diez y veinte, del andén tres.' },
            { who: 'Amira', s: '¿Es directo?' },
            { who: 'Taquillero', s: 'No. Cambie de tren en la estación Centro. Allí sale el tren al aeropuerto.' },
            { who: 'Amira', s: 'Muy bien. Muchas gracias.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Amira compra un billete sencillo.', a: 'f', why: 'She asks for *de ida y vuelta*: there and back.' },
            { q: 'El tren sale del andén tres.', a: 't', why: '*A las diez y veinte, del andén tres.*' },
            { q: 'El tren va directo al aeropuerto.', a: 'f', why: 'It is not direct: she changes at *Centro*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'train', o: ['el tren', 'el autobús', 'la bici'], why: 'This is *el tren*, the train.' },
            { pic: 'bus', o: ['el autobús', 'el tren', 'el coche'], why: 'This is *el autobús*, the bus.' },
            { pic: 'bicycle', o: ['la bici', 'el metro', 'el billete'], why: 'This is *la bici*, short for *la bicicleta*.' },
            { pic: 'ticket', o: ['el billete', 'el andén', 'la parada'], why: 'This is *el billete*, the ticket.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of ir.', verb: 'ir', tense: 'present', rows: [
            ['yo', 'voy'],
            ['tú', 'vas'],
            ['él, ella, usted', 'va'],
            ['nosotros', 'vamos'],
            ['vosotros', 'vais'],
            ['ellos, ellas, ustedes', 'van'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Mi marido va al trabajo ___ autobús.', a: ['en'], why: '*en* + transport: *en autobús*.' },
            { q: 'Yo voy a la estación a ___. Está muy cerca.', a: ['pie'], why: 'On foot: *a pie*.' },
            { q: '¿A qué hora ___ el tren? (salir)', a: ['sale'], why: '*el tren* is singular: *sale*.' },
            { q: 'El autobús sale ___ las siete.', a: ['a'], why: 'The time something happens: *a las* + hour.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which ticket is best?', items: [
            { q: 'Usted va al aeropuerto y vuelve hoy. Compra ___', o: ['un billete de ida y vuelta.', 'un billete sencillo.', 'un abono.'], why: 'There and back on the same day: *de ida y vuelta*.' },
            { q: 'Usted va en metro al trabajo todos los días. Compra ___', o: ['un abono.', 'un billete sencillo.', 'un billete de ida y vuelta.'], why: 'Every day for a month: *un abono* is usually cheapest.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: '¿A qué hora sale el próximo autobús?', why: '*¿A qué hora…?* + verb + what leaves.' },
            { a: '¿Dónde está la parada de la línea 5?', why: '*¿Dónde está…?* + the place.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Asking the way',
      about: 'Ask where a place is and understand simple directions.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Start with **Perdone** (excuse me, with *usted*) or **Perdona** (with *tú*). Ask **¿Dónde está…?** for a place you know: *¿Dónde está la estación?* Ask **¿Hay un / una … por aquí?** for any place of that kind: *¿Hay una farmacia por aquí?*' },
          { t: 'table', caption: 'Directions', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['Siga recto.', 'Go straight on.'],
            ['Gire a la derecha.', 'Turn right.'],
            ['Gire a la izquierda.', 'Turn left.'],
            ['Cruce la calle.', 'Cross the street.'],
            ['la primera calle', 'the first street'],
            ['al final de la calle', 'at the end of the street'],
            ['en la esquina', 'on the corner'],
            ['enfrente de', 'opposite'],
            ['al lado de', 'next to'],
          ] },
          { t: 'tip', art: 'owl', md: '**a + el = al** and **de + el = del**: *Gire **al** final **del** parque.* With *la*, nothing changes: *a la derecha*, *al lado de la estación*. To a friend, use the *tú* forms: *sigue recto*, *gira*, *cruza*.' },
        ],
        [
          { t: 'dialogue', title: 'En la calle', lines: [
            { who: 'Diego', s: 'Perdone, ¿hay una farmacia por aquí?' },
            { who: 'Rosa', s: 'Sí, hay una en la calle Luna.' },
            { who: 'Diego', s: '¿Está lejos?' },
            { who: 'Rosa', s: 'No, está muy cerca, a cinco minutos a pie. Siga recto y gire en la segunda calle a la derecha.' },
            { who: 'Diego', s: 'La segunda a la derecha. ¿Y después?' },
            { who: 'Rosa', s: 'Cruce la plaza. La farmacia está en la esquina, al lado del banco.' },
            { who: 'Diego', s: 'Muchas gracias.' },
            { who: 'Rosa', s: 'De nada.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'La farmacia está lejos.', a: 'f', why: '*Está muy cerca, a cinco minutos a pie.*' },
            { q: 'Diego gira a la izquierda.', a: 'f', why: 'He turns at the second street on the right: *a la derecha*.' },
            { q: 'La farmacia está al lado del banco.', a: 't', why: 'Rosa says this at the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'al, a la, del or de la?', items: [
            { q: 'Gire ___ final de la calle.', o: ['al', 'a la', 'a el'], why: '*a + el final* = *al final*.' },
            { q: 'La parada está al lado ___ hospital.', o: ['del', 'de la', 'de el'], why: '*de + el hospital* = *del hospital*.' },
            { q: 'La farmacia está enfrente ___ estación.', o: ['de la', 'del', 'de el'], why: '*la estación* is feminine: *de la* does not change.' },
            { q: 'Voy ___ mercado en bici.', o: ['al', 'a la', 'del'], why: '*ir a + el mercado* = *al mercado*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the Spanish and its meaning.', pairs: [
            ['Siga recto.', 'Ni a la derecha ni a la izquierda.'],
            ['Cruce la calle.', 'Vaya al otro lado.'],
            ['en la esquina', 'donde se encuentran dos calles'],
            ['cerca', 'no está lejos'],
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the directions with the words.', extra: ['izquierda', 'lejos'], items: [
            { q: '___ recto hasta la plaza.', a: 'Siga', why: '*Siga recto*: go straight on.' },
            { q: 'Gire a la ___ en la primera calle.', a: 'derecha', why: '*a la derecha*: to the right.' },
            { q: '___ la calle en el semáforo.', a: 'Cruce', why: '*Cruce la calle*: cross the street. *el semáforo* is the traffic light.' },
            { q: 'El banco está ___ de la farmacia.', a: 'enfrente', why: '*enfrente de*: opposite.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: '¿Hay un supermercado por aquí?', why: '*¿Hay un…?* + place + *por aquí*.' },
            { a: 'Perdone, ¿dónde está la estación de metro?', why: '*Perdone* first, then *¿Dónde está…?*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Timetables and notices',
      about: 'Read a bus timetable and a notice about building work on the metro.',
      art: 'snail',
      spreads: [
        [
          { t: 'table', caption: 'Línea 7: Plaza Mayor – Hospital', head: ['Día', 'Plaza Mayor', 'Mercado', 'Hospital'], rows: [
            ['Lunes a viernes', '7:15', '7:25', '7:40'],
            ['Lunes a viernes', '7:45', '7:55', '8:10'],
            ['Sábados', '9:00', '9:10', '9:25'],
            ['Domingos y festivos', 'sin servicio', 'sin servicio', 'sin servicio'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Look at the timetable. Choose the answer.', items: [
            { q: 'Es lunes. Usted está en la parada del Mercado a las 7:20. ¿A qué hora llega al Hospital?', o: ['a las 7:40', 'a las 7:25', 'a las 8:10'], why: 'The first bus leaves the *Mercado* at 7:25 and arrives at the *Hospital* at 7:40.' },
            { q: 'El sábado, el autobús sale de la Plaza Mayor ___', o: ['a las nueve.', 'a las siete y cuarto.', 'a las nueve y diez.'], why: 'On Saturdays it leaves the *Plaza Mayor* at 9:00.' },
            { q: 'El domingo ___', o: ['no hay autobús.', 'hay un autobús a las nueve.', 'el autobús sale a las siete.'], why: '*sin servicio*: there is no bus.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Aviso: obras en la línea 2 del metro', md: 'Estimados viajeros:\n\nDel 3 al 16 de noviembre, por obras, la estación Universidad de la línea 2 está cerrada. Los trenes pasan por la estación, pero no paran.\n\nPara ir a la Universidad, bajen en la estación Parque y tomen el autobús 12. La parada está a la salida del metro, enfrente del parque. El viaje en autobús es de unos diez minutos.\n\nCon su billete de metro, el autobús 12 es gratis estos días.\n\nGracias por su paciencia.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the notice. True, false or not given?', items: [
            { q: 'La estación Universidad está cerrada dos semanas.', a: 't', why: 'From 3 to 16 November: two weeks.' },
            { q: 'Los trenes de la línea 2 no funcionan.', a: 'f', why: 'The trains run, but they do not stop at *Universidad*.' },
            { q: 'Para ir a la Universidad, hay un autobús desde la estación Parque.', a: 't', why: '*bajen en la estación Parque y tomen el autobús 12*.' },
            { q: 'El autobús 12 cuesta un euro.', a: 'f', why: 'With a metro ticket it is free: *es gratis*.' },
            { q: 'Las obras son por la noche.', a: 'ng', why: 'The notice does not say when the work happens.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Words on notices: *las obras* (building work), *cerrado* (closed), *sin servicio* (no service), *el retraso* (delay), *la salida* (exit, or departure), *bajar* (to get off), *subir* (to get on).' },
          { t: 'ex', kind: 'spot', h: 'Tap the two verbs for getting off and getting on.', items: [
            { s: 'Por favor, [bajen] en la estación Parque y [suban] al autobús 12.', why: '*bajar*: to get off. *subir*: to get on.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which word is not about transport?', items: [
            { o: ['la cebolla', 'el andén', 'la parada', 'el billete'], why: '*la cebolla* is an onion. The others are about transport.' },
            { o: ['enfrente', 'el metro', 'el autobús', 'el tren'], why: '*enfrente* is a direction word. The others are kinds of transport.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'You go and come back: un billete ___', o: ['de ida y vuelta', 'sencillo', 'de andén'], why: 'There and back: *de ida y vuelta*.' },
      { q: 'Gire ___ final de la calle.', o: ['al', 'a la', 'del'], why: '*a + el* = *al*.' },
      { q: 'Nosotros ___ al centro en metro.', o: ['vamos', 'vais', 'van'], why: '*nosotros*: *vamos*.' },
      { q: 'Espero el autobús en ___.', o: ['la parada', 'el andén', 'la taquilla'], why: 'You wait for a bus at *la parada*, the bus stop.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Voy al trabajo ___ tren.', a: ['en'], why: '*en* + transport.' },
      { q: '¿A qué hora ___ el tren? (salir)', a: ['sale'], why: '*el tren*: *sale*.' },
      { q: 'La farmacia está al lado ___ banco.', a: ['del'], why: '*de + el* = *del*.' },
      { q: 'Perdone, ¿___ un cajero por aquí? (haber)', a: ['hay'], why: '*un cajero* is a cash machine. For any one of that kind, ask *¿Hay un…?*' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
      { q: '___ recto y gire a la izquierda.', o: ['Siga', 'Sigo', 'Sigues'], why: 'A direction with *usted*: *Siga*.' },
      { q: 'Mis hijos ___ al colegio a pie.', o: ['van', 'va', 'vamos'], why: '*mis hijos* = *ellos*: *van*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿A qué hora sale el próximo tren?', why: '*¿A qué hora…?* + *sale* + what leaves.' },
      { a: 'Cruce la calle y gire a la derecha.', why: 'Two directions with *usted*, joined with *y*.' },
    ] },
  ],
};
