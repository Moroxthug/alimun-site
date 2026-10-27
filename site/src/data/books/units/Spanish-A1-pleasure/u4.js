// Spanish A1 for travel, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Getting around',
  goal: 'Buy a ticket, use the metro and the bus and ask the way.',
  art: 'dog',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['transport', 'tickets', 'ir', 'directions', 'imperative', 'notices'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Transport and tickets',
      about: 'Say how you travel with ir and buy a ticket for the train, metro or bus.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'The verb **ir** (to go) is irregular. Use *a* for the place: *Voy a Sevilla.* When *a* comes before *el*, they become one word: *a + el = al*. *Voy al museo.*\n\nTo say how you travel, use *en*: *en tren, en metro, en autobús, en taxi*. On foot is *a pie* or *andando*.' },
          { t: 'table', caption: 'ir (to go)', quiz: true, head: ['', 'ir'], rows: [
            ['yo', 'voy'],
            ['tú', 'vas'],
            ['él, ella, usted', 'va'],
            ['nosotros, nosotras', 'vamos'],
            ['vosotros, vosotras', 'vais'],
            ['ellos, ellas, ustedes', 'van'],
          ] },
          { t: 'examples', items: [
            { s: 'Mañana **vamos a** Toledo **en tren**.', n: '*ir a* + the place, *en* + the transport.' },
            { s: '¿**Vas al** centro **en metro**?', n: '*a + el centro = al centro*.' },
            { s: 'El hotel está cerca. Voy **a pie**.', n: 'On foot: *a pie*.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'En la taquilla', lines: [
            { who: 'Aiko', s: 'Buenos días. Un billete para Córdoba, por favor.' },
            { who: 'Taquillero', s: '¿De ida o de ida y vuelta?' },
            { who: 'Aiko', s: 'De ida y vuelta. Vuelvo el viernes.' },
            { who: 'Taquillero', s: 'Son cincuenta euros. El próximo tren sale a las diez y cuarto.' },
            { who: 'Aiko', s: '¿De qué andén sale?' },
            { who: 'Taquillero', s: 'Del andén tres.' },
            { who: 'Aiko', s: 'Muchas gracias.' },
          ] },
          { t: 'table', caption: 'Travel words', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['el billete', 'ticket'],
            ['de ida', 'one way'],
            ['de ida y vuelta', 'return'],
            ['la taquilla', 'ticket office'],
            ['el andén', 'platform'],
            ['la parada', 'bus stop'],
            ['la estación', 'station'],
            ['el próximo tren', 'the next train'],
          ] },
          { t: 'tip', art: 'owl', md: 'In much of Latin America a ticket is *el boleto*, a bus is often *el camión* in Mexico or *el colectivo* in Argentina, and a car is *el carro* or *el auto*, where Spain says *el coche*.' },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of ir.', verb: 'ir', tense: 'present', rows: [
            ['yo', 'voy'],
            ['tú', 'vas'],
            ['él, ella, usted', 'va'],
            ['nosotros', 'vamos'],
            ['vosotros', 'vais', 'Only in Spain. In Latin America people say *ustedes van*.'],
            ['ellos, ellas, ustedes', 'van'],
          ] },
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'train', o: ['el tren', 'el autobús', 'el metro'], why: 'This is *el tren*.' },
            { pic: 'bus', o: ['el autobús', 'el tren', 'el taxi'], why: 'This is *el autobús*.' },
            { pic: 'bicycle', o: ['la bicicleta', 'la parada', 'la estación'], why: 'This is *la bicicleta*, or *la bici*.' },
            { pic: 'ticket', o: ['el billete', 'el andén', 'el pasaporte'], why: 'This is *el billete*. In Latin America: *el boleto*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Voy ___ museo.', o: ['al', 'a el', 'en'], why: '*a + el* is always *al*.' },
            { q: 'Vamos a la playa ___ autobús.', o: ['en', 'a', 'al'], why: 'For transport, use *en*: *en autobús*.' },
            { q: 'El restaurante está cerca. Vamos ___ pie.', o: ['a', 'en', 'al'], why: 'On foot: *a pie*.' },
            { q: 'Un billete de ida y ___, por favor.', o: ['vuelta', 'andén', 'parada'], why: 'A return ticket: *de ida y vuelta*.' },
          ] },
          { t: 'ex', kind: 'label', h: 'Label the station.', scene: 'station', extra: ['la parada'], items: [
            { x: 110, y: 90, a: 'el tren', why: '*el tren*: the train.' },
            { x: 260, y: 52, a: 'el reloj', why: '*el reloj*: the clock.' },
            { x: 262, y: 116, a: 'el banco', why: '*el banco*: the bench. It is also the word for a bank.' },
            { x: 290, y: 140, a: 'la maleta', why: '*la maleta*: the suitcase.' },
            { x: 150, y: 160, a: 'el andén', why: '*el andén*: the platform.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the right form of ir.', items: [
            { q: 'Yo ___ a Granada en autobús.', a: ['voy'], why: 'With *yo*: *voy*.' },
            { q: '¿Cómo ___ tú al aeropuerto?', a: ['vas'], why: 'With *tú*: *vas*.' },
            { q: 'Nosotros ___ al centro en metro.', a: ['vamos'], why: 'With *nosotros*: *vamos*.' },
            { q: '¿Este autobús ___ a la estación?', a: ['va'], why: 'With *este autobús*, like *él*: *va*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['¿De ida o de ida y vuelta?', 'De ida, por favor.'],
            ['¿De qué andén sale el tren?', 'Del andén cinco.'],
            ['¿Cómo vas al hotel?', 'En taxi.'],
            ['¿Cuánto cuesta el billete?', 'Un euro con cincuenta.'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Asking the way',
      about: 'Ask where a place is and understand simple directions.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To ask the way, start with *Perdone* or *Disculpe*. Then ask *¿Dónde está …?* for a place you know, or *¿Hay un/una … por aquí?* for any place of that kind.\n\nPeople give directions with special verb forms. With *usted*, they are *siga, gire, cruce, tome*. With *tú*, they are *sigue, gira, cruza, toma*.' },
          { t: 'table', caption: 'Directions', explain: ['head', 'col2'], quiz: true, head: ['usted', 'tú', 'Meaning'], rows: [
            ['Siga recto.', 'Sigue recto.', 'Go straight on.'],
            ['Gire a la derecha.', 'Gira a la derecha.', 'Turn right.'],
            ['Gire a la izquierda.', 'Gira a la izquierda.', 'Turn left.'],
            ['Cruce la calle.', 'Cruza la calle.', 'Cross the street.'],
            ['Tome la primera calle.', 'Toma la primera calle.', 'Take the first street.'],
          ] },
          { t: 'examples', items: [
            { s: 'Perdone, ¿**dónde está** la estación de metro?', n: 'A place you know: *¿Dónde está …?*' },
            { s: 'Disculpe, ¿**hay una** farmacia **por aquí**?', n: 'Any pharmacy near here: *¿Hay una … por aquí?*' },
            { s: 'Está **cerca**, a cinco minutos a pie.', n: '*cerca*: near. *lejos*: far.' },
            { s: 'Está **al lado del** banco, **enfrente de** la iglesia.', n: '*al lado de*: next to. *enfrente de*: opposite.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'En la calle', lines: [
            { who: 'Omar', s: 'Perdone, ¿hay una parada de autobús por aquí?' },
            { who: 'Rosa', s: 'Sí, hay una en la plaza. Siga recto y tome la segunda calle a la izquierda.' },
            { who: 'Omar', s: '¿Está lejos?' },
            { who: 'Rosa', s: 'No, está muy cerca, a cinco minutos. La parada está enfrente de una farmacia.' },
            { who: 'Omar', s: 'Y el autobús al museo, ¿para allí?' },
            { who: 'Rosa', s: 'Sí, el número doce.' },
            { who: 'Omar', s: 'Muchas gracias, muy amable.' },
          ] },
          { t: 'tip', art: 'churro', md: '*Muy amable* means that is very kind of you. It is a nice way to thank someone who helps you in the street.' },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Your friend asks the way. Say it with tú.', items: [
            { q: 'Siga recto.', a: ['Sigue recto.'], why: 'With *tú*: *sigue*.' },
            { q: 'Gire a la derecha.', a: ['Gira a la derecha.'], why: 'With *tú*: *gira*.' },
            { q: 'Cruce la calle.', a: ['Cruza la calle.'], why: 'With *tú*: *cruza*.' },
            { q: 'Tome la primera calle a la izquierda.', a: ['Toma la primera calle a la izquierda.'], why: 'With *tú*: *toma*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Quieres una farmacia. No sabes dónde hay una. Preguntas: «___»', o: ['¿Hay una farmacia por aquí?', '¿Dónde está farmacia?', '¿Hay la farmacia por aquí?'], why: 'For any pharmacy: *¿Hay una … por aquí?*' },
            { q: '«Está a dos minutos a pie.» El lugar está ___.', o: ['cerca', 'lejos', 'enfrente'], why: 'Two minutes on foot is near: *cerca*.' },
            { q: '«Gire a la ___.» →', o: ['derecha', 'izquierda', 'recta'], why: 'The arrow points right: *a la derecha*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Perdone, ¿dónde está el museo?', why: '*Perdone*, then *¿dónde está* + the place.' },
            { a: 'Siga recto y gire a la derecha.', why: 'Two directions joined by *y*.' },
            { a: 'La parada está enfrente de la farmacia.', why: 'The place + *está* + *enfrente de* + the other place.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentence. Some words do not belong.', items: [
            { a: '¿Hay un banco por aquí?', extra: ['el', 'está'], why: 'Any bank: *¿Hay un …?*, not *el*.' },
            { a: 'Está al lado del hotel.', extra: ['a', 'el'], why: '*de + el = del*: *al lado del hotel*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a notice in the metro',
      about: 'Read a notice about changes in the metro and find what to do.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'In the metro, notices tell you about changes. Look for the dates, the stations and what to do. *Cerrada* means closed. *Línea* is a metro line.' },
          { t: 'reading', title: 'Aviso', md: '**Aviso a los viajeros**\n\nDel 3 al 16 de agosto, la estación Plaza Mayor de la línea 2 está cerrada por obras. Los trenes de la línea 2 no paran en esta estación.\n\nPara ir a Plaza Mayor, baje en la estación Mercado y vaya a pie. Son diez minutos. También hay un autobús gratis entre Mercado y Plaza Mayor cada quince minutos.\n\nLas otras estaciones de la línea 2 están abiertas. El billete sencillo cuesta 1,50 €. Con la tarjeta de diez viajes, cada viaje cuesta menos.\n\nGracias por su comprensión.' },
          { t: 'tip', art: 'owl', md: '*Baje* means get off, and *vaya* means go. They are the *usted* forms of *bajar* and *ir*, like *siga* and *gire*.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the notice. True, false or not given?', items: [
            { q: 'La estación Plaza Mayor está cerrada dos semanas.', a: 't', why: 'From 3 to 16 August: about two weeks.' },
            { q: 'Los trenes de la línea 2 paran en Plaza Mayor.', a: 'f', why: '*no paran en esta estación*.' },
            { q: 'De Mercado a Plaza Mayor a pie son diez minutos.', a: 't', why: '*Son diez minutos.*' },
            { q: 'El autobús entre Mercado y Plaza Mayor cuesta un euro.', a: 'f', why: 'The bus is *gratis*: it costs nothing.' },
            { q: 'La estación Mercado tiene ascensor.', a: 'ng', why: 'The notice does not talk about a lift.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Quieres ir a Plaza Mayor en metro. ¿Dónde bajas?', o: ['en Mercado', 'en Plaza Mayor', 'en la línea 3'], why: '*baje en la estación Mercado*.' },
            { q: '¿Cada cuánto pasa el autobús?', o: ['cada quince minutos', 'cada diez minutos', 'cada hora'], why: '*cada quince minutos*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two words that tell you the station is not open and why.', items: [
            { s: 'La estación está [cerrada] por [obras].', why: '*cerrada*: closed. *obras*: building work.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find the transport words.', words: ['metro', 'tren', 'billete', 'parada', 'andén', 'taxi'] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Mañana ___ a Valencia en tren.', o: ['vamos', 'van', 'somos'], why: 'With *nosotros*: *vamos*.' },
      { q: 'Vas ___ hotel en taxi.', o: ['al', 'a el', 'en el'], why: '*a + el = al*.' },
      { q: 'Vuelves mañana. Compras un billete ___.', o: ['de ida y vuelta', 'de ida', 'sencillo'], why: 'You come back, so you need a return ticket.' },
      { q: 'Con un amigo: «___ la calle.»', o: ['Cruza', 'Cruce', 'Cruzo'], why: 'With *tú*: *cruza*.' },
      { q: '¿___ un supermercado por aquí?', o: ['Hay', 'Está', 'Es'], why: 'Any supermarket: *¿Hay un …?*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Ellos ___ al museo a pie. (ir)', a: ['van'], why: 'With *ellos*: *van*.' },
      { q: 'Gire a la ___. ←', a: ['izquierda'], why: 'The arrow points left: *a la izquierda*.' },
      { q: 'El tren sale del ___ cuatro.', a: ['andén'], why: 'Trains leave from a platform: *el andén*.' },
      { q: 'La farmacia está al lado ___ banco.', a: ['del'], why: '*de + el = del*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with tú.', items: [
      { q: 'Siga recto.', a: ['Sigue recto.'], why: 'With *tú*: *sigue*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the question.', items: [
      { a: '¿Dónde está la parada de autobús?', why: '*¿Dónde está* + the place.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: '«Cerrada por obras» quiere decir que la estación está abierta.', a: 'f', why: '*cerrada* means closed.' },
    ] },
  ],
};
