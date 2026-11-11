// Spanish A2 for travel, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Problems on holiday',
  goal: 'Deal with problems: lost things, illness, changes.',
  art: 'cactus',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['lost-property', 'describing-things', 'health', 'doler', 'pharmacy', 'changes-of-plan'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Losing something and reporting it',
      about: 'Say what you have lost, describe it and report a theft.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'To say what happened a short time ago, use the **pretérito perfecto**: *He perdido la cartera.* *Me han robado el móvil* means someone has stolen my phone; you do not say who.\n\nTo describe a thing, say its colour, its size and what it is made of: *Es negra, pequeña y de piel.* The adjective agrees with the thing: *la cartera negra*, *el bolso negro*.' },
          { t: 'examples', items: [
            { s: '**He perdido** la cartera.', n: '*perder → perdido*.' },
            { s: '**Me han robado** el móvil en el metro.', n: 'Someone has stolen it. In Latin America people usually say *el celular*.' },
            { s: '**Me he dejado** la chaqueta en el autobús.', n: '*dejarse algo*: to leave something somewhere by mistake.' },
            { s: 'Es una mochila **azul y grande**.', n: 'Colour and size after the noun.' },
            { s: 'Es una maleta **de tela**, con ruedas.', n: '*de* + material: *de piel* (leather), *de tela* (fabric), *de plástico*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'If something is stolen, go to the police station, *la comisaría*, and make a report, *poner una denuncia*. You often need it for your insurance. For things you have lost, many cities and stations have a lost property office: *la oficina de objetos perdidos*.' },
        ],
        [
          { t: 'dialogue', title: 'En la oficina de objetos perdidos', lines: [
            { who: 'Kenji', s: 'Buenos días. Esta mañana me he dejado una mochila en el tren de Toledo.' },
            { who: 'Empleada', s: '¿Cómo es la mochila?' },
            { who: 'Kenji', s: 'Es negra y bastante grande, de tela. Tiene un bolsillo rojo delante.' },
            { who: 'Empleada', s: '¿Qué hay dentro?' },
            { who: 'Kenji', s: 'Una cámara, un libro y una botella de agua.' },
            { who: 'Empleada', s: 'Un momento… Lo siento, todavía no la tenemos. Rellene este formulario, por favor.' },
            { who: 'Kenji', s: '¿Me llaman si la encuentran?' },
            { who: 'Empleada', s: 'Sí, le llamamos o le escribimos un correo.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['¿Qué ha perdido?', 'Mi cartera.'],
            ['¿Dónde la ha perdido?', 'Creo que en el autobús.'],
            ['¿Cómo es?', 'Es marrón y pequeña.'],
            ['¿Qué hay dentro?', 'Dinero y mi tarjeta.'],
            ['¿Cuándo ha pasado?', 'Esta mañana, sobre las diez.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Esta mañana ___ perdido el pasaporte.', o: ['he', 'ha', 'soy'], why: '*yo*: *he perdido*.' },
            { q: 'Me ___ robado la cartera en el mercado.', o: ['han', 'he', 'hemos'], why: '*Me han robado*: someone (they) has stolen it.' },
            { q: 'Es una maleta ___.', o: ['roja', 'rojo', 'rojos'], why: '*la maleta* is feminine and singular: *roja*.' },
            { q: 'Es un bolso ___ piel.', o: ['de', 'en', 'con'], why: 'The material: *de piel*.' },
          ] },
          { t: 'ex', kind: 'wordform', h: 'Write the participle.', items: [
            { q: 'He ___ las llaves del hotel.', base: 'perder', a: ['perdido'], why: '*-er* verbs: *-ido*. *perder → perdido*.' },
            { q: 'Nos han ___ el coche.', base: 'robar', a: ['robado'], why: '*-ar* verbs: *-ado*. *robar → robado*.' },
            { q: 'Ya he ___ el formulario.', base: 'escribir', a: ['escrito'], why: '*escribir* is irregular: *escrito*.' },
            { q: '¿Han ___ mi mochila?', base: 'encontrar', a: ['encontrado'], why: '*encontrar → encontrado*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Feeling ill and asking for a pharmacy',
      about: 'Say what hurts and ask for help at the pharmacy.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To say what hurts, use **doler** like *gustar*: *me duele* + one thing, *me duelen* + more than one. With body parts, Spanish uses *el, la*, not *mi*: *Me duele la cabeza.*\n\nOther ways to say you are ill: *tengo fiebre* (a high temperature), *tengo tos* (a cough), *estoy resfriado* or *resfriada* (I have a cold), *estoy mareado* or *mareada* (I feel dizzy or sick).' },
          { t: 'table', caption: 'doler', explain: ['head'], head: ['Who', 'One thing', 'More than one'], rows: [
            ['a mí', 'me duele la cabeza', 'me duelen los pies'],
            ['a ti', 'te duele la espalda', 'te duelen los ojos'],
            ['a él, a ella, a usted', 'le duele el estómago', 'le duelen las piernas'],
            ['a nosotros', 'nos duele la garganta', 'nos duelen los brazos'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain, pharmacies have a green cross. At night and on Sundays, one pharmacy in the area is open: *la farmacia de guardia*. The list is often on the door of every pharmacy. For a serious problem, call 112, the emergency number in Europe.' },
        ],
        [
          { t: 'dialogue', title: 'En la farmacia', lines: [
            { who: 'Sofia', s: 'Buenas tardes. Me duele mucho la garganta y tengo un poco de fiebre.' },
            { who: 'Farmacéutico', s: '¿Desde cuándo?' },
            { who: 'Sofia', s: 'Desde ayer por la noche.' },
            { who: 'Farmacéutico', s: '¿Es alérgica a algún medicamento?' },
            { who: 'Sofia', s: 'No, a ninguno.' },
            { who: 'Farmacéutico', s: 'Tome estas pastillas tres veces al día, después de comer. Y beba mucha agua.' },
            { who: 'Sofia', s: '¿Y si mañana no estoy mejor?' },
            { who: 'Farmacéutico', s: 'Entonces tiene que ir al médico. Hay un centro de salud en esta calle.' },
            { who: 'Sofia', s: 'Muy bien. Muchas gracias.' },
          ] },
          { t: 'examples', items: [
            { s: '¿**Tiene algo para** el dolor de cabeza?', n: 'The usual question at a pharmacy.' },
            { s: '**Tome** una pastilla cada ocho horas.', n: '*tome*: the polite command of *tomar*, for *usted*.' },
            { s: '¿**Dónde hay** una farmacia de guardia?', n: 'Ask for the pharmacy that is open at night.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Me ___ la cabeza.', o: ['duele', 'duelen', 'dolo'], why: '*la cabeza* is one thing: *duele*.' },
            { q: 'Me ___ los pies. He andado mucho.', o: ['duelen', 'duele', 'duelo'], why: '*los pies* is plural: *duelen*.' },
            { q: 'A mi amiga le duele ___ estómago.', o: ['el', 'su', 'un'], why: 'With body parts, use *el* or *la*, not *su*.' },
            { q: 'Tengo 39 grados. Tengo ___.', o: ['fiebre', 'tos', 'resfriado'], why: 'A high temperature is *fiebre*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '¿Tiene algo ___ el dolor de garganta?', a: ['para'], why: 'Something for a problem: *algo para*.' },
            { q: '¿Dónde hay una farmacia de ___? Es domingo.', a: ['guardia'], why: 'The pharmacy open at night or on Sundays: *de guardia*.' },
            { q: 'A nosotros nos ___ las piernas. (doler)', a: ['duelen'], why: '*las piernas* is plural: *duelen*.' },
            { q: 'Lucía está ___. Tiene tos y frío. (resfriado)', a: ['resfriada'], why: 'Lucía is a woman: *resfriada*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'phone', o: ['el móvil', 'la llave', 'el reloj'], why: 'A phone: *el móvil* in Spain, *el celular* in Latin America.' },
            { pic: 'key', o: ['la llave', 'el billete', 'el paraguas'], why: 'You open a door with *la llave*.' },
            { pic: 'umbrella', o: ['el paraguas', 'la maleta', 'el reloj'], why: 'For the rain: *el paraguas*.' },
            { pic: 'ticket', o: ['el billete', 'la llave', 'el móvil'], why: 'For the train or the bus: *el billete*.' },
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the key word?', items: [
            { key: 'me duele', o: ['la cabeza', 'la espalda', 'los pies', 'el estómago', 'los ojos'], a: [0, 1, 3], why: '*me duele* + one thing. *los pies* and *los ojos* need *me duelen*.' },
            { key: 'tengo', o: ['fiebre', 'tos', 'resfriado', 'dolor de cabeza'], a: [0, 1, 3], why: '*tengo fiebre, tengo tos, tengo dolor de cabeza*. But *estoy resfriado*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a message about a change',
      about: 'Read a message from a tour company about a change to your trip.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'Sometimes a trip changes because of the weather, a strike or a problem with a bus. The company sends a message. Read it and find what has changed and what you can do.' },
          { t: 'reading', title: 'Cambio en su excursión', md: 'Estimada señora Haddad:\n\nLe escribimos sobre su excursión «Pueblos blancos», del jueves 14 de septiembre.\n\nPor el mal tiempo, la excursión no puede salir el jueves. La hemos cambiado al viernes 15 de septiembre, a la misma hora: a las 8:30, desde la puerta del Hotel Sol. El precio y el programa no cambian.\n\nSi el viernes no le va bien, tiene dos opciones: puede hacer la excursión el sábado 16 a las 9:00, o le devolvemos el dinero. Para cambiar o cancelar, conteste a este correo o llámenos antes del miércoles a las 20:00.\n\nSentimos mucho las molestias.\n\nUn cordial saludo,\nViajes Horizonte\ninfo@example.com' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the message. True, false or not given?', items: [
            { q: 'La excursión no sale el jueves.', a: 't', why: '*la excursión no puede salir el jueves*.' },
            { q: 'El viernes la excursión sale más tarde.', a: 'f', why: 'It leaves *a la misma hora: a las 8:30*.' },
            { q: 'El viernes la excursión es más cara.', a: 'f', why: '*El precio y el programa no cambian.*' },
            { q: 'La señora Haddad puede recibir su dinero otra vez.', a: 't', why: '*o le devolvemos el dinero*.' },
            { q: 'La excursión es en autobús.', a: 'ng', why: 'The message does not say how the group travels.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Por qué cambia la excursión?', o: ['por el mal tiempo', 'por una huelga', 'por un problema con el autobús'], why: '*Por el mal tiempo*.' },
            { q: 'El viernes no puede. ¿Qué otra fecha tiene?', o: ['el sábado 16 a las 9:00', 'el jueves 14 a las 8:30', 'el domingo 17 a las 9:00'], why: '*puede hacer la excursión el sábado 16 a las 9:00*.' },
            { q: '¿Hasta cuándo tiene que contestar?', o: ['hasta el miércoles a las 20:00', 'hasta el jueves a las 8:30', 'hasta el sábado'], why: '*antes del miércoles a las 20:00*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences for a short answer to the company.', items: [
            { a: 'Muchas gracias por su mensaje.', why: 'A polite start.' },
            { a: 'El viernes no me va bien.', why: '*no me va bien*: it is not good for me.' },
            { a: 'Prefiero hacer la excursión el sábado.', why: '*Prefiero* + infinitive.' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword.', words: [
            { a: 'denuncia', clue: 'Si te roban algo, la pones en la comisaría.' },
            { a: 'farmacia', clue: 'Aquí compras medicamentos.' },
            { a: 'fiebre', clue: 'Tienes 39 grados: tienes…' },
            { a: 'cartera', clue: 'Aquí llevas el dinero y las tarjetas.' },
            { a: 'cabeza', clue: 'Me duele la… Necesito una pastilla.' },
            { a: 'pastilla', clue: 'La tomas con agua cuando estás enfermo.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Esta mañana ___ perdido las llaves.', o: ['he', 'ha', 'estoy'], why: '*yo*: *he perdido*.' },
      { q: 'Me ___ los ojos.', o: ['duelen', 'duele', 'duelo'], why: '*los ojos* is plural: *duelen*.' },
      { q: 'Es domingo por la noche. Busca una farmacia ___.', o: ['de guardia', 'de piel', 'de objetos perdidos'], why: 'Open at night or on Sundays: *de guardia*.' },
      { q: 'Es una mochila ___.', o: ['negra', 'negro', 'negros'], why: '*la mochila* is feminine: *negra*.' },
      { q: 'Si te roban algo, vas a ___ y pones una denuncia.', o: ['la comisaría', 'la farmacia', 'la oficina de turismo'], why: 'A report to the police: *la comisaría*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Me han ___ el móvil. (robar)', a: ['robado'], why: '*robar → robado*.' },
      { q: '¿Tiene algo ___ la tos?', a: ['para'], why: '*algo para* + the problem.' },
      { q: 'A Pedro le ___ la espalda. (doler)', a: ['duele'], why: '*la espalda* is one thing: *duele*.' },
      { q: 'Es un bolso ___ piel.', a: ['de'], why: 'The material: *de piel*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Me he dejado la chaqueta en el tren.', why: '*Me he dejado* + the thing + the place.' },
      { a: 'Me duele mucho la garganta.', why: '*Me duele*, then *mucho*, then the body part.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: '«Le devolvemos el dinero» quiere decir que usted recibe su dinero otra vez.', a: 't', why: '*devolver el dinero*: to give the money back.' },
      { q: '«Estoy resfriada» quiere decir que tengo mucho calor.', a: 'f', why: '*estar resfriada*: to have a cold.' },
    ] },
  ],
};
