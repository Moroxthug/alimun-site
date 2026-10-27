// Spanish A1, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'In town',
  goal: 'Find places in town, ask the way and use public transport.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['places-in-town', 'hay-and-estar', 'ir', 'transport', 'tickets', 'directions', 'imperative'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Places in town',
      about: 'Name places in town and ask where they are.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Here are some places you find in most towns. Learn each word with **el** or **la**.' },
          { t: 'table', caption: 'La ciudad', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'English'], rows: [
            ['el banco', 'bank'],
            ['la farmacia', 'chemist’s, pharmacy'],
            ['el supermercado', 'supermarket'],
            ['la estación de tren', 'train station'],
            ['la parada de autobús', 'bus stop'],
            ['la estación de metro', 'underground station'],
            ['el hospital', 'hospital'],
            ['el museo', 'museum'],
            ['la biblioteca', 'library'],
            ['la oficina de correos', 'post office'],
            ['el ayuntamiento', 'town hall'],
            ['la plaza', 'square'],
          ] },
          { t: 'tip', art: 'owl', md: 'For the post office, people often just say *Correos*: *Voy a Correos*. *El banco* is also the word for a bench in a park.' },
        ],
        [
          { t: 'text', md: 'You know **hay** and **estar**. Use them to ask about places.\n\nWhen you look for **any** place of one kind, use **hay** + *un* or *una*: *¿Hay una farmacia por aquí?* When you look for **one place you know**, use **está** + *el* or *la*: *¿Dónde está el museo?*' },
          { t: 'dialogue', title: 'En la calle', lines: [
            { who: 'Elena', s: 'Perdone, ¿hay un supermercado por aquí?' },
            { who: 'Pedro', s: 'Sí, hay uno en la calle Mayor, al lado del banco.' },
            { who: 'Elena', s: '¿Y dónde está la estación de tren?' },
            { who: 'Pedro', s: 'Está un poco lejos. Hay una parada de autobús en la plaza.' },
            { who: 'Elena', s: 'Muchas gracias.' },
            { who: 'Pedro', s: 'De nada.' },
          ] },
          { t: 'examples', items: [
            { s: '¿**Hay un** banco cerca de aquí?', n: 'Any bank: *hay un*.' },
            { s: '¿Dónde **está la** biblioteca municipal?', n: 'One library you know: *está la*.' },
            { s: 'Sí, **hay una** en la plaza.', n: '*una* without the noun: *una farmacia*.' },
            { s: 'El museo **está** cerca de la catedral.', n: '*estar* for where a place is.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Where do you go?', pairs: [
            ['Necesito medicinas.', 'la farmacia'],
            ['Quiero sacar dinero.', 'el banco'],
            ['Quiero enviar un paquete.', 'la oficina de correos'],
            ['Quiero leer un libro gratis.', 'la biblioteca'],
            ['Necesito leche y pan.', 'el supermercado'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Hay or está? Choose.', items: [
            { q: 'Perdone, ¿___ un hospital por aquí?', o: ['hay', 'está', 'es'], why: 'Any hospital: *hay un*.' },
            { q: '¿Dónde ___ el ayuntamiento?', o: ['está', 'hay', 'están'], why: 'One place you know, with *el*: *está*.' },
            { q: 'En mi barrio ___ dos farmacias.', o: ['hay', 'están', 'es'], why: 'How many there are: *hay*.' },
            { q: 'La parada de autobús ___ delante del museo.', o: ['está', 'hay', 'es'], why: 'Where one place is: *está*.' },
            { q: '¿___ una estación de metro cerca?', o: ['Hay', 'Está', 'Es'], why: 'Any station, with *una*: *hay*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Write the places.', words: [
            { a: 'farmacia', clue: 'Aquí compras medicinas.' },
            { a: 'museo', clue: 'Aquí ves cuadros y arte.' },
            { a: 'plaza', clue: 'Un lugar abierto en el centro, con bancos y cafés.' },
            { a: 'hospital', clue: 'Aquí trabajan médicos y enfermeros.' },
            { a: 'banco', clue: 'Aquí tienes tu dinero.' },
            { a: 'biblioteca', clue: 'Aquí lees libros y no hablas alto.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Going by metro',
      about: 'Say where you go and how, and buy a ticket.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'You know **ir** (*voy, vas, va, vamos, vais, van*). To say where you go, use **ir a** + place. Remember: *a + el = al*.\n\nTo say how you travel, use **en** + transport: *en metro, en autobús, en tren, en coche, en bici*. On foot is **a pie** or **andando**.' },
          { t: 'examples', items: [
            { s: '**Voy al** trabajo **en metro**.', n: '*a + el trabajo = al trabajo*.' },
            { s: 'Mis hijos **van a la** escuela **a pie**.', n: '*a la* does not change.' },
            { s: '¿**Vas a** Madrid **en tren** o **en autobús**?', n: 'A city has no article: *a Madrid*.' },
            { s: '**Vamos al** centro **en bici**.', n: '*la bici* is short for *la bicicleta*.' },
            { s: '¿Cómo **vais** a la playa? – **Andando**, está muy cerca.', n: '*andando* means on foot.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain, people say *el coche* and *el billete*. In much of Latin America, people say *el carro* or *el auto* and *el boleto*. The bus also has many local names. In Spain, *coger el autobús* is normal. In Latin America, say *tomar el autobús*. *Tomar* is understood everywhere.' },
        ],
        [
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'train', o: ['el tren', 'el autobús', 'el coche'], why: '*el tren*: the train.' },
            { pic: 'bus', o: ['el autobús', 'el tren', 'la bici'], why: '*el autobús*: the bus.' },
            { pic: 'bicycle', o: ['la bicicleta', 'el metro', 'el coche'], why: '*la bicicleta*, or *la bici*.' },
            { pic: 'ticket', o: ['el billete', 'la llave', 'el móvil'], why: '*el billete*: the ticket.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write al, a la or en.', items: [
            { q: 'Voy ___ supermercado.', a: ['al'], why: '*el supermercado*: *a + el = al*.' },
            { q: 'Mi hermana va al trabajo ___ autobús.', a: ['en'], why: 'Transport: *en autobús*.' },
            { q: '¿Vamos ___ plaza?', a: ['a la'], why: '*la plaza*: *a la* does not change.' },
            { q: 'Los domingos voy ___ parque con mi perro.', a: ['al'], why: '*el parque*: *al parque*.' },
            { q: 'Siempre vamos ___ metro. Es rápido.', a: ['en'], why: 'Transport: *en metro*.' },
          ] },
        ],
        [
          { t: 'text', md: 'At the station, you buy a **billete** at the ticket office (*la taquilla*) or at a machine. A single ticket is **de ida**. A return ticket is **de ida y vuelta**.' },
          { t: 'dialogue', title: 'En la taquilla', lines: [
            { who: 'Javier', s: 'Buenos días. Un billete para Toledo, por favor.' },
            { who: 'Taquillera', s: '¿De ida o de ida y vuelta?' },
            { who: 'Javier', s: 'De ida y vuelta. ¿A qué hora sale el próximo tren?' },
            { who: 'Taquillera', s: 'A las diez y cuarto.' },
            { who: 'Javier', s: '¿Y de qué andén sale?' },
            { who: 'Taquillera', s: 'Del andén cuatro. Son veintidós euros.' },
            { who: 'Javier', s: '¿Puedo pagar con tarjeta?' },
            { who: 'Taquillera', s: 'Sí, claro.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'label', h: 'Label the station.', scene: 'station', extra: ['el billete', 'el coche'], items: [
            { x: 110, y: 90, a: 'el tren', why: '*el tren*: the train.' },
            { x: 260, y: 52, a: 'el reloj', why: '*el reloj*: the clock.' },
            { x: 262, y: 116, a: 'el banco', why: '*el banco*: here, the bench.' },
            { x: 290, y: 140, a: 'la maleta', why: '*la maleta*: the suitcase.' },
            { x: 150, y: 160, a: 'el andén', why: '*el andén*: the platform. *¿De qué andén sale?*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences you need at the station.', items: [
            { a: 'Un billete para Sevilla, por favor.', why: '*un billete para* + the place.' },
            { a: '¿A qué hora sale el próximo tren?', why: '*¿A qué hora* + verb + subject?' },
            { a: '¿De qué andén sale el tren?', why: '*¿De qué andén…?* asks for the platform.' },
            { a: '¿Puedo pagar con tarjeta?', why: '*poder* + infinitive: *puedo pagar*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Turn left',
      about: 'Ask the way and understand directions.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To ask the way, say **Perdone, ¿para ir a…?** or **¿Dónde está…?** To a friend or a young person, say **Perdona**.\n\nPeople give directions with special verb forms called **commands**. With *usted* (polite), *-ar* verbs end in **-e**: *gire*. With *tú*, the form is like *él* in the present: *gira*.' },
          { t: 'table', caption: 'Directions', explain: ['head', 'col2'], quiz: true, head: ['usted', 'tú', 'English'], rows: [
            ['Siga recto.', 'Sigue recto.', 'Go straight on.'],
            ['Gire a la derecha.', 'Gira a la derecha.', 'Turn right.'],
            ['Gire a la izquierda.', 'Gira a la izquierda.', 'Turn left.'],
            ['Cruce la calle.', 'Cruza la calle.', 'Cross the street.'],
            ['Tome la primera calle.', 'Toma la primera calle.', 'Take the first street.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Latin America, people use *usted* more often, also with strangers of your age. To be safe, use the *usted* form with people you do not know.' },
        ],
        [
          { t: 'text', md: 'These words help you understand where a place is.' },
          { t: 'table', caption: 'Where is it?', explain: ['head', 'col1'], head: ['Spanish', 'English'], rows: [
            ['al final de la calle', 'at the end of the street'],
            ['en la esquina', 'on the corner'],
            ['enfrente de', 'opposite'],
            ['cerca / lejos', 'near / far'],
            ['a cinco minutos', 'five minutes away'],
            ['la segunda calle', 'the second street'],
          ] },
          { t: 'dialogue', title: '¿Para ir al museo?', lines: [
            { who: 'Ana', s: 'Perdone, ¿para ir al museo?' },
            { who: 'Rafael', s: 'Mire, siga recto hasta la plaza.' },
            { who: 'Ana', s: 'Hasta la plaza, vale.' },
            { who: 'Rafael', s: 'En la plaza, gire a la izquierda y tome la segunda calle a la derecha.' },
            { who: 'Ana', s: '¿Está lejos?' },
            { who: 'Rafael', s: 'No, está a diez minutos a pie. El museo está al final de la calle, enfrente de un banco.' },
            { who: 'Ana', s: 'Muchas gracias.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it to a friend: change usted to tú.', items: [
            { q: 'Gire a la derecha.', a: ['Gira a la derecha.'], why: 'The *tú* form of *girar* is like *él gira*.' },
            { q: 'Siga recto.', a: ['Sigue recto.'], why: '*seguir*: *sigue*, like *él sigue*.' },
            { q: 'Cruce la calle.', a: ['Cruza la calle.'], why: '*cruzar*: *cruza*, like *él cruza*.' },
            { q: 'Tome la primera calle a la izquierda.', a: ['Toma la primera calle a la izquierda.'], why: '*tomar*: *toma*, like *él toma*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Read Rafael’s directions again. Choose.', items: [
            { q: '¿Qué hace Ana primero?', o: ['Sigue recto hasta la plaza.', 'Gira a la derecha.', 'Cruza la calle.'], why: '*Siga recto hasta la plaza.*' },
            { q: '¿Dónde gira a la izquierda?', o: ['En la plaza.', 'Al final de la calle.', 'Enfrente del banco.'], why: '*En la plaza, gire a la izquierda.*' },
            { q: '¿Dónde está el museo?', o: ['Al final de la calle, enfrente de un banco.', 'En la plaza, al lado de un banco.', 'Lejos, a una hora a pie.'], why: '*El museo está al final de la calle, enfrente de un banco.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'build', h: 'Build the directions. Two words do not belong.', items: [
            { a: 'Gire a la izquierda en la esquina.', extra: ['gira', 'del'], why: 'For *usted*: *gire*. *en la esquina*: on the corner.' },
            { a: 'Sigue recto hasta el semáforo.', extra: ['siga', 'al'], why: 'For *tú*: *sigue*. *hasta el semáforo*: as far as the traffic lights.' },
            { a: 'El banco está enfrente de la farmacia.', extra: ['hay', 'del'], why: 'One place you know: *está*. *la farmacia*, so *de la*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Perdone, señor. [Gira] a la derecha, por favor.', a: ['Gire'], why: 'With *usted* (*señor*), the form is *gire*.' },
            { s: 'Oye, Mateo, [cruce] la calle aquí.', a: ['cruza'], why: 'To a friend (*tú*): *cruza*.' },
            { s: 'El hospital está [enfrente] la estación.', a: ['enfrente de'], why: 'You need *de* after *enfrente*: *enfrente de*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Reading: a city guide and a metro notice',
      about: 'Read a short guide for visitors and a notice in the metro.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'Bienvenidos a Puerto Claro', md: 'Puerto Claro es una ciudad pequeña y tranquila en la costa. El centro es antiguo y muy bonito, y todo está cerca. Es fácil visitarlo a pie.\n\nEl corazón de la ciudad es la Plaza Mayor. Allí está el ayuntamiento, un edificio blanco del siglo dieciocho. Enfrente del ayuntamiento hay muchos cafés con terraza.\n\nDesde la plaza, siga recto por la calle del Mar y llega al puerto en diez minutos. Al final de la calle está el Museo del Mar. Abre de martes a domingo. Los lunes está cerrado.\n\nLa estación de tren está un poco lejos del centro, pero hay un autobús cada quince minutos. También hay metro: la línea uno va de la estación a la playa.' },
          { t: 'reading', title: 'Aviso: metro de Puerto Claro', md: '**Línea 1: obras este fin de semana**\n\nEl sábado y el domingo, la estación Plaza Mayor está cerrada. Los trenes no paran en esta estación.\n\nPara ir al centro, baje en la estación Puerto y vaya a pie: está a cinco minutos. Hay autobuses gratis desde la estación Puerto a la Plaza Mayor cada diez minutos.\n\nEl lunes la estación abre otra vez a las seis de la mañana. Perdonen las molestias.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'En Puerto Claro es fácil ir a pie por el centro.', a: 't', why: '*Todo está cerca. Es fácil visitarlo a pie.*' },
            { q: 'Los cafés están detrás del ayuntamiento.', a: 'f', why: 'They are opposite: *Enfrente del ayuntamiento hay muchos cafés.*' },
            { q: 'El Museo del Mar abre los lunes.', a: 'f', why: '*Los lunes está cerrado.*' },
            { q: 'La entrada al museo cuesta cinco euros.', a: 'ng', why: 'The guide does not say the price.' },
            { q: 'Este fin de semana los trenes no paran en Plaza Mayor.', a: 't', why: '*Los trenes no paran en esta estación.*' },
            { q: 'Los autobuses desde la estación Puerto son gratis.', a: 't', why: '*Hay autobuses gratis desde la estación Puerto.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Cómo vas de la estación de tren al centro?', o: ['En autobús.', 'En barco.', 'A pie, en cinco minutos.'], why: '*Hay un autobús cada quince minutos.*' },
            { q: 'Es sábado. ¿Cómo llegas en metro a la Plaza Mayor?', o: ['Bajas en Puerto y vas a pie o en autobús.', 'Bajas en Plaza Mayor.', 'No hay metro el sábado.'], why: '*Baje en la estación Puerto y vaya a pie.* There are free buses too.' },
            { q: '¿Cuándo abre otra vez la estación Plaza Mayor?', o: ['El lunes a las seis de la mañana.', 'El domingo por la tarde.', 'El sábado a las diez.'], why: '*El lunes la estación abre otra vez a las seis de la mañana.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the commands (usted).', items: [
            { s: 'Desde la plaza, [siga] recto por la calle del Mar.', why: '*siga*: the *usted* command of *seguir*.' },
            { s: 'Para ir al centro, [baje] en la estación Puerto y [vaya] a pie.', why: '*baje* (*bajar*) and *vaya* (*ir*) are *usted* commands.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Perdone, ¿___ un banco por aquí?', o: ['hay', 'está', 'es'], why: 'Any bank: *hay un*.' },
      { q: '¿Dónde ___ la estación de tren?', o: ['está', 'hay', 'es'], why: 'One place you know: *está*.' },
      { q: 'Voy al trabajo ___ metro.', o: ['en', 'a', 'con'], why: 'Transport: *en metro*.' },
      { q: 'Mis padres ___ al mercado los sábados.', o: ['van', 'vamos', 'va'], why: '*ir*, *ellos* form: *van*.' },
      { q: 'Señora, ___ la calle aquí.', o: ['cruce', 'cruza', 'cruzar'], why: 'To *señora* (*usted*): *cruce*.' },
      { q: '¿De ida o de ida y ___?', o: ['vuelta', 'volver', 'vuelve'], why: 'A return ticket: *de ida y vuelta*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Necesito medicinas. ¿Hay una ___ cerca?', a: ['farmacia'], why: 'You buy medicines at *la farmacia*.' },
      { q: 'Vamos ___ museo esta tarde.', a: ['al'], why: '*a + el museo = al museo*.' },
      { q: 'Oye, Diego, ___ a la izquierda en la plaza. (girar, tú)', a: ['gira'], why: 'To a friend (*tú*): *gira*.' },
      { q: 'No está lejos. Vamos ___ pie.', a: ['a'], why: 'On foot: *a pie*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Perdone, ¿para ir a la estación?', why: 'The polite way to ask the way.' },
      { a: 'Tome la segunda calle a la derecha.', why: 'Command, then which street, then the direction.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: '¿Dónde [hay] el ayuntamiento?', a: ['está'], why: 'With *el* + a place you know, use *está*.' },
      { s: 'Voy [a el] banco.', a: ['al'], why: '*a + el* always becomes *al*.' },
    ] },
  ],
};
