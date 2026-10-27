// Spanish B1 for travel, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Travelling independently',
  goal: 'Plan and make your own way, and change plans when needed.',
  art: 'suitcase',
  tags: { skills: ['speaking', 'reading', 'vocabulary', 'grammar'], topics: ['transport', 'tickets', 'comparatives', 'indirect-questions', 'recommendations'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Train, bus or car?',
      about: 'Compare ways to travel, then book or change a ticket.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To compare two ways to travel, use *más* + adjective + *que*, or *menos* + adjective + *que*. To say two things are the same, use *tan* + adjective + *como*. For the top of a group, use *el más* or *la más* + adjective.\n\nA few comparatives are irregular: *bueno*, *mejor*; *malo*, *peor*. Do not say *más bueno*.' },
          { t: 'examples', items: [
            { s: 'El tren es **más rápido que** el autobús.', n: '*más* + adjective + *que*: you compare two things.' },
            { s: 'El autobús es **el más barato de** todos.', n: '*el más* + adjective + *de*: the cheapest of all.' },
            { s: 'Con el coche eres **más libre**, pero a veces hay atasco.', n: 'The adjective does not change: *libre*, *más libre*.' },
            { s: 'El tren regional **no es tan rápido como** el de alta velocidad.', n: '*no tan* … *como*: less than the other thing.' },
            { s: 'Para viajes largos, el tren nocturno es **mejor que** el autobús.', n: '*mejor*, not *más bueno*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain, long-distance train tickets are often cheaper when you book early. The cheapest tickets usually cost extra to change, or cannot be changed at all. In Latin America, a ticket is often *el boleto* or *el pasaje*, and people say *tomar el tren* instead of *coger el tren*. In many Latin American countries, long journeys are made by bus.' },
        ],
        [
          { t: 'table', caption: 'Words for tickets and journeys', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['el billete de ida', 'a one-way ticket'],
            ['el billete de ida y vuelta', 'a return ticket'],
            ['hacer transbordo', 'to change trains or buses'],
            ['el trayecto', 'the journey from one place to another'],
            ['cambiar el billete', 'to change a ticket to another day or time'],
            ['anular', 'to cancel a booking'],
            ['el retraso', 'a delay'],
            ['ventanilla / pasillo', 'a window seat / an aisle seat'],
          ] },
          { t: 'text', md: 'You can say *anular* or *cancelar* for a booking. A train or bus is *directo* when you do not need to change. To ask about the time a journey takes, say *¿Cuánto se tarda?* or *¿Cuánto dura el trayecto?*' },
        ],
        [
          { t: 'dialogue', title: 'At the ticket office', lines: [
            { who: 'Leyla', s: 'Buenos días. Tengo un billete de Madrid a Granada para el viernes. ¿Puedo cambiarlo para el sábado?' },
            { who: 'Empleado', s: 'A ver… Es una tarifa económica. Se puede cambiar, pero hay que pagar diez euros.' },
            { who: 'Leyla', s: 'Vale, no pasa nada. ¿Hay algún tren directo el sábado por la mañana?' },
            { who: 'Empleado', s: 'Sí, hay uno a las ocho y cuarto. Si hace transbordo en Córdoba, llega media hora antes, pero es más caro.' },
            { who: 'Leyla', s: 'Entonces prefiero el directo. Es más lento, pero mucho más cómodo.' },
            { who: 'Empleado', s: '¿Quiere ventanilla o pasillo? Los sábados los trenes suelen ir llenos.' },
            { who: 'Leyla', s: 'Ventanilla, si es posible.' },
            { who: 'Empleado', s: 'Coche cinco, asiento doce, ventanilla. Con el cambio son diez euros en total.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Leyla quiere viajar un día más tarde.', a: 't', why: 'Her ticket is for Friday and she wants to travel on Saturday.' },
            { q: 'Cambiar el billete es gratis.', a: 'f', why: 'She has to pay: *hay que pagar diez euros*.' },
            { q: 'El tren con transbordo es más rápido.', a: 't', why: 'With a change in Córdoba she arrives half an hour earlier.' },
            { q: 'Leyla va a hacer transbordo en Córdoba.', a: 'f', why: 'She takes the direct train: *Entonces prefiero el directo.*' },
            { q: 'Leyla tiene un asiento junto a la ventana.', a: 't', why: 'She asks for *ventanilla* and gets *asiento doce, ventanilla*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'El tren de alta velocidad es más rápido ___ el regional.', o: ['que', 'como', 'de'], why: 'After *más* + adjective you use *que*.' },
            { q: 'De todos los trenes, el nocturno es ___.', o: ['el más cómodo', 'más cómodo que', 'tan cómodo'], why: 'The top of a group: *el más* + adjective.' },
            { q: 'El autobús no es tan caro ___ el tren.', o: ['como', 'que', 'de'], why: '*tan* … *como*. You use *que* only after *más* or *menos*.' },
            { q: 'Para mí, viajar en tren es ___ que viajar en coche.', o: ['mejor', 'más bueno', 'más mejor'], why: '*bueno* has an irregular comparative: *mejor*.' },
            { q: 'Con tanto tráfico, el coche es ___ rápido que el metro.', o: ['menos', 'tan', 'muy'], why: '*menos* + adjective + *que*: less fast than the metro.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the table.', items: [
            { q: 'No hay tren directo. Tengo que hacer ___ en Zaragoza. (change)', a: ['transbordo'], why: '*hacer transbordo*: to change to another train.' },
            { q: 'El tren llega con veinte minutos de ___. (delay)', a: ['retraso'], why: '*llegar con retraso*: to arrive late.' },
            { q: 'Un billete de ida y ___ a Toledo, por favor. (return)', a: ['vuelta'], why: '*de ida y vuelta*: there and back.' },
            { q: 'El viernes no puedo. Quiero ___ el billete para el domingo. (change)', a: ['cambiar'], why: '*cambiar el billete*: the same journey on another day.' },
            { q: 'Ya no vamos de viaje. Tengo que ___ la reserva del hotel. (cancel)', a: ['anular', 'cancelar'], why: '*anular* or *cancelar*: you cancel the booking completely.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say the same thing in a different way.', items: [
            { q: 'El tren es más rápido que el autobús.', cue: 'El autobús es más lento', a: ['El autobús es más lento que el tren.'], why: 'The opposite adjective turns the comparison round: *rápido*, *lento*.' },
            { q: 'El coche es más caro que el autobús.', cue: 'El autobús no es tan caro', a: ['El autobús no es tan caro como el coche.'], why: '*no tan* + adjective + *como* says the bus costs less.' },
            { q: 'El hostal es peor que el hotel.', cue: 'El hotel es', a: ['El hotel es mejor que el hostal.'], why: 'The opposite of *peor* is *mejor*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Asking locals for tips',
      about: 'Ask people politely and understand their recommendations.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'When you ask a stranger, an **indirect question** sounds more polite. Start with *¿Sabe…?* or *¿Me podría decir…?* and keep the question word with its accent: *dónde*, *cuándo*, *qué*. For a yes or no question, use *si*, without an accent.' },
          { t: 'examples', items: [
            { s: '¿Me podría decir **dónde está** el casco antiguo?', n: 'From *¿Dónde está el casco antiguo?* The question word keeps its accent.' },
            { s: '¿Sabe **si** hay autobús a la playa?', n: 'From *¿Hay autobús a la playa?* A yes or no question needs *si*.' },
            { s: '¿Sabe **a qué hora** abre el museo?', n: 'The preposition stays before the question word: *a qué hora*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Start with *Perdone* or *Disculpe*, and use *usted* with adults you do not know. In hostels and with other young travellers, *tú* is usual. In Spain people also say *perdona* with *tú*.' },
        ],
        [
          { t: 'dialogue', title: 'In a bakery in Cádiz', lines: [
            { who: 'Ji-woo', s: 'Perdone, solo estoy aquí dos días. ¿Me podría decir qué merece la pena ver?' },
            { who: 'Panadera', s: 'Pues el casco antiguo, claro. Y si hace buen tiempo, yo que usted iría a la playa de la Caleta. Está muy cerca.' },
            { who: 'Ji-woo', s: '¿Y sabe si hay autobús para ir a Jerez?' },
            { who: 'Panadera', s: 'Sí, hay autobuses cada hora, y también tren. Se tarda unos cuarenta minutos, creo.' },
            { who: 'Ji-woo', s: '¿Y dónde se puede comer buen pescado, pero no muy caro?' },
            { who: 'Panadera', s: 'En el centro hay muchos restaurantes, pero en verano están llenos. Le recomiendo que vaya al bar pequeño que hay detrás del mercado. El pescado frito es buenísimo.' },
            { who: 'Ji-woo', s: '¡Genial! Muchas gracias por el consejo.' },
            { who: 'Panadera', s: 'De nada. Y no se pierda la puesta de sol desde la playa. Es preciosa.' },
          ] },
          { t: 'text', md: 'People give tips with *Le recomiendo que* + subjunctive (*vaya*, *pruebe*), *Yo que usted* or *yo que tú* + conditional (*iría*), *No se pierda…* or *No te pierdas…* (do not miss) and *Merece la pena* (it is worth it). In Latin America people usually say *Vale la pena*.' },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Make the questions polite.', items: [
            { a: '¿Me podría decir dónde está la estación?', why: 'Start with *¿Me podría decir…?*, then the question word *dónde*.' },
            { a: '¿Sabe si el museo abre los lunes?', why: 'A yes or no question with *si*, then the verb.' },
            { a: '¿Sabe a qué hora sale el último autobús?', why: '*a qué hora* starts the indirect question; the verb comes next.' },
            { a: '¿Me podría decir cuánto se tarda en barco?', why: '*cuánto se tarda*: how long it takes.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['¿Dónde se puede desayunar bien por aquí?', 'En el café de la plaza. Tienen unas tostadas buenísimas.'],
            ['¿Merece la pena el castillo?', 'Sí, pero vaya temprano. A mediodía hay muchísima gente.'],
            ['¿Cuál es la mejor manera de ir a la playa?', 'En bici, se tarda solo diez minutos.'],
            ['¿Sabe si va a llover hoy?', 'Según el pronóstico, no.'],
            ['¿Qué haría usted esta noche?', 'Yo que usted iría al barrio del puerto.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Le recomiendo que ___ la catedral por la mañana.', o: ['visite', 'visita', 'visitar'], why: 'After *le recomiendo que* the verb is in the subjunctive: *visite*.' },
            { q: 'Yo que tú ___ en tren. Es más cómodo.', o: ['iría', 'iré', 'fui'], why: 'Advice with *yo que tú* takes the conditional: *iría*.' },
            { q: '¿Sabe ___ hay una farmacia cerca?', o: ['si', 'sí', 'que'], why: 'A yes or no question takes *si* without an accent. *sí* means yes.' },
            { q: 'La vista desde la torre ___ la pena.', o: ['merece', 'tiene', 'hace'], why: '*merecer la pena*: to be worth it.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
            { s: 'Le recomiendo que [prueba] el gazpacho.', a: ['pruebe'], why: '*recomendar que* + subjunctive: *pruebe*.' },
            { s: '¿Me podría decir dónde [es] la parada del autobús?', a: ['está'], why: 'For where something is, use *estar*: *dónde está*.' },
            { s: 'Yo que usted [iré] a la playa por la tarde.', a: ['iría'], why: '*yo que usted* + conditional: *iría*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a travel forum thread',
      about: 'Read advice from other travellers and find what is useful.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In travel forums people write informally, with *tú* and *vosotros*. Posts often start with *¡Hola a todos!* and end with a short greeting: *Saludos*, *Un saludo* or *Un abrazo*.' },
          { t: 'reading', title: '¿Andalucía sin coche?', md: '**Tomasz88:** ¡Hola a todos! En junio quiero pasar una semana en Andalucía, pero sin coche. Mi idea es llegar en tren a Sevilla y desde allí visitar los pueblos blancos en autobús. ¿Es realista? ¿O es mejor alquilar un coche allí? Saludos, Tomasz\n\n**AnaSur:** ¡Hola, Tomasz! Es totalmente posible. Entre las ciudades grandes hay muchos autobuses y trenes, y son bastante baratos. Pero a los pueblos pequeños a veces solo llegan dos o tres autobuses al día, sobre todo los fines de semana. Yo que tú miraría los horarios antes de reservar el alojamiento. Y reserva pronto, porque en junio hay mucha gente.\n\n**ViajeroJavi:** Yo estuve allí el año pasado. Mi consejo: no intentes verlo todo. Es mejor quedarse dos noches en cada sitio que cambiar de hotel todos los días. Y cuidado con el calor: en junio a mediodía hace muchísimo calor, así que te recomiendo que salgas temprano y descanses después de comer, como la gente de allí. Un día alquilé un coche para ir a la sierra. Fue más cómodo que el autobús, pero también mucho más caro.\n\n**Tomasz88:** ¡Gracias a los dos! Entonces iré en autobús, me quedaré más noches en menos sitios y saldré temprano. Un saludo.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the thread. True, false or not given?', items: [
            { q: 'Tomasz quiere viajar por Andalucía en coche.', a: 'f', why: 'He writes *pero sin coche*: he wants to go by train and bus.' },
            { q: 'Ana cree que el plan es posible.', a: 't', why: '*Es totalmente posible.*' },
            { q: 'Según Ana, a los pueblos pequeños llegan muchos autobuses.', a: 'f', why: 'Only two or three buses a day go to some small villages.' },
            { q: 'Javi visitó todos los pueblos blancos.', a: 'ng', why: 'Javi was there last year, but he does not say which villages he saw.' },
            { q: 'Para Javi, el coche fue más barato que el autobús.', a: 'f', why: '*Fue más cómodo que el autobús, pero también mucho más caro.*' },
            { q: 'Tomasz ya ha reservado el alojamiento.', a: 'ng', why: 'Ana tells him to book early, but we do not know if he has booked.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do these words from the thread mean?', items: [
            { q: 'Reservar el **alojamiento** quiere decir: ___', o: ['reservar el sitio donde duermes', 'reservar el billete de tren', 'reservar una mesa en un restaurante'], why: '*el alojamiento*: a hotel, hostel or flat where you stay.' },
            { q: 'Hay pocos autobuses, **sobre todo** los fines de semana. Quiere decir: ___', o: ['especialmente los fines de semana', 'solo los fines de semana', 'nunca los fines de semana'], why: '*sobre todo*: especially, more than at other times.' },
            { q: 'Mirar los **horarios** quiere decir: ___', o: ['mirar a qué hora salen los autobuses', 'mirar cuánto cuestan los autobuses', 'mirar dónde están las paradas'], why: '*el horario*: the times when a bus or train leaves.' },
            { q: 'No intentes **verlo todo**. Quiere decir: ___', o: ['no quieras ver demasiados sitios', 'no veas nada', 'mira todo con atención'], why: 'Javi means: plan fewer places and enjoy them more.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the comparatives.', items: [
            { s: 'Fue [más cómodo] que el autobús, pero también mucho [más caro].', why: '*más* + adjective: *más cómodo*, *más caro*.' },
            { s: 'Es [mejor] quedarse dos noches en cada sitio que cambiar de hotel todos los días.', why: '*mejor* is the irregular comparative of *bueno*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'El tren es más rápido ___ el autobús, pero también más caro.', o: ['que', 'como', 'de'], why: '*más* + adjective + *que*.' },
      { q: 'El sábado no puedo viajar. Quiero ___ el billete para el domingo.', o: ['cambiar', 'anular', 'hacer transbordo'], why: 'Another day for the same journey: *cambiar el billete*.' },
      { q: '¿Sabe ___ el autobús pasa por el centro?', o: ['si', 'sí', 'que'], why: 'An indirect yes or no question starts with *si*, without an accent.' },
      { q: 'Yo que usted ___ el casco antiguo a pie.', o: ['visitaría', 'visitará', 'visite'], why: 'Advice: *yo que usted* + conditional.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'El autobús no es tan cómodo ___ el tren.', a: ['como'], why: '*tan* + adjective + *como*.' },
      { q: 'El tren llega con media hora de ___. (delay)', a: ['retraso'], why: '*llegar con retraso*: to arrive late.' },
      { q: 'No hay tren directo. En Córdoba tengo que hacer ___. (change)', a: ['transbordo'], why: '*hacer transbordo*: to change to another train.' },
      { q: 'Le recomiendo que ___ el pescado frito. (probar)', a: ['pruebe'], why: '*recomendar que* + subjunctive: *pruebe*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the polite questions.', items: [
      { a: '¿Me podría decir de dónde sale el barco?', why: 'Indirect question: *¿Me podría decir…?* + *de dónde* + verb. *salir de*: to leave from.' },
      { a: '¿Sabe a qué hora cierra el museo?', why: '*a qué hora* keeps the preposition before the question word.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Si anulas un billete, viajas otro día.', a: 'f', why: '*anular* cancels the trip. Another day is *cambiar el billete*.' },
      { q: 'En un foro, *Un saludo* al final de un mensaje es una despedida amable.', a: 't', why: 'A short, friendly way to end an informal post.' },
    ] },
  ],
};
