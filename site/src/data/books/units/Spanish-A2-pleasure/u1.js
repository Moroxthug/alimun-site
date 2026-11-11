// Spanish A2 for travel, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Planning a trip',
  goal: 'Plan a trip, book a room and talk about dates and prices.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['dates', 'months', 'prices', 'booking', 'polite-questions'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Dates, prices and booking online',
      about: 'Say dates and prices and understand a booking website.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'For dates, Spanish uses normal numbers: *el tres de mayo*, *el veinte de julio*. Put *el* before the number and *de* before the month. Months are written with a small letter: *mayo*, not *Mayo*.\n\nFor the first day of the month, you can say *el uno* or *el primero*: *el uno de junio*, *el primero de junio*.' },
          { t: 'table', caption: 'The months', quiz: true, explain: ['head'], head: ['Number', 'Month'], rows: [
            ['1', 'enero'],
            ['2', 'febrero'],
            ['3', 'marzo'],
            ['4', 'abril'],
            ['5', 'mayo'],
            ['6', 'junio'],
            ['7', 'julio'],
            ['8', 'agosto'],
            ['9', 'septiembre'],
            ['10', 'octubre'],
            ['11', 'noviembre'],
            ['12', 'diciembre'],
          ] },
          { t: 'tip', art: 'owl', md: 'To ask the date: *¿Qué día es hoy?* or *¿A qué estamos hoy?* For a time from one day to another, use *del … al …*: *del 3 al 7 de agosto*. *de + el = del*, *a + el = al*. In much of Latin America, people say *el primero* more often than *el uno*.' },
        ],
        [
          { t: 'text', md: 'Prices are written with a comma: *12,50 €*. You say the euros, then *con* and the cents: *doce euros con cincuenta*. In a shop people often say only *doce cincuenta*.\n\nBefore *euros*, *uno* becomes *un* and *veintiuno* becomes *veintiún*: *veintiún euros*. Hotels give the price *por noche* and say if breakfast is included: *desayuno incluido*.' },
          { t: 'table', caption: 'On a booking website', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['la llegada', 'the day you arrive'],
            ['la salida', 'the day you leave'],
            ['la noche', 'one night in a hotel'],
            ['la habitación individual', 'a room for one person'],
            ['la habitación doble', 'a room for two people'],
            ['disponible', 'available, you can book it'],
            ['cancelar', 'to cancel a booking'],
            ['gratis / gratuito', 'free, it costs nothing'],
          ] },
          { t: 'examples', items: [
            { s: 'La habitación cuesta **setenta y nueve euros** por noche.', n: '79 €. Tens and ones are joined with *y*: *setenta y nueve*.' },
            { s: 'El billete cuesta **34,90 €**.', n: 'You say *treinta y cuatro euros con noventa*.' },
            { s: '**Cancelación gratuita** hasta el 10 de mayo.', n: 'You can cancel until 10 May and you pay nothing.' },
            { s: 'Son **ciento cuarenta y cinco euros**.', n: '145 €. For 100 alone, say *cien*; from 101, say *ciento*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the month.', items: [
            { q: 'Viajamos a Sevilla el 3 de ___. (6)', a: ['junio'], why: 'The sixth month is *junio*. Months have a small letter.' },
            { q: 'Hoy es el 1 de ___. (1)', a: ['enero'], why: 'The first month is *enero*.' },
            { q: 'El festival es del 20 al 25 de ___. (7)', a: ['julio'], why: 'The seventh month is *julio*. Be careful: *junio* is 6, *julio* is 7.' },
            { q: 'Me quedo hasta el 8 de ___. (8)', a: ['agosto'], why: 'The eighth month is *agosto*.' },
            { q: 'Mi vuelo es el 12 de ___. (10)', a: ['octubre'], why: 'The tenth month is *octubre*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Estoy en Madrid ___ 3 al 7 de agosto.', o: ['del', 'de', 'el'], why: 'From one day to another: *del … al …*. *de + el = del*.' },
            { q: 'Estoy en Madrid del 3 ___ 7 de agosto.', o: ['al', 'a', 'hasta'], why: '*a + el = al*: *del 3 al 7*.' },
            { q: 'Llego ___ 15 de abril.', o: ['el', 'en', 'a'], why: 'With a date, use *el*: *llego el 15 de abril*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'How do you say the price?', items: [
            { q: '12,50 €', o: ['doce euros con cincuenta', 'doce coma cincuenta euros', 'mil doscientos cincuenta euros'], why: 'With prices, you say the euros, then *con* and the cents.' },
            { q: '89 €', o: ['ochenta y nueve euros', 'noventa y ocho euros', 'ochenta nueve euros'], why: 'From 31, tens and ones are joined with *y*: *ochenta y nueve*.' },
            { q: '145 €', o: ['ciento cuarenta y cinco euros', 'cien cuarenta y cinco euros', 'ciento cincuenta y cuatro euros'], why: 'From 101, say *ciento*: *ciento cuarenta y cinco*.' },
            { q: '21 €', o: ['veintiún euros', 'veintiuno euros', 'veinte y uno euros'], why: 'Before *euros*, *veintiuno* becomes *veintiún*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['la habitación individual', 'una habitación para una persona'],
            ['la habitación doble', 'una habitación para dos personas'],
            ['la llegada', 'el día que llegas'],
            ['la salida', 'el día que te vas'],
            ['cancelar', 'decir que ya no quieres la reserva'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Asking about a room or a tour',
      about: 'Ask polite questions on the phone and in an email.',
      art: 'parrot',
      spreads: [
        [
          { t: 'dialogue', title: 'Por teléfono', lines: [
            { who: 'Recepcionista', s: 'Hostal La Plaza, buenos días.' },
            { who: 'Mariam', s: 'Buenos días. Me llamo Mariam Haddad. ¿Tienen una habitación doble libre del 12 al 15 de julio?' },
            { who: 'Recepcionista', s: 'Un momento, por favor… Sí, tenemos una habitación con vistas al mar.' },
            { who: 'Mariam', s: '¿Cuánto cuesta por noche?' },
            { who: 'Recepcionista', s: 'Noventa y cinco euros, con el desayuno incluido.' },
            { who: 'Mariam', s: '¿Hay aparcamiento?' },
            { who: 'Recepcionista', s: 'Sí, y es gratis para los clientes.' },
            { who: 'Mariam', s: 'Perfecto. Quería reservar la habitación para tres noches.' },
            { who: 'Recepcionista', s: 'Muy bien. ¿Me da un correo electrónico? Le envío la confirmación.' },
          ] },
          { t: 'text', md: 'Mariam asks two kinds of questions. A question with a **question word** starts with it: *¿Cuánto cuesta…? ¿Dónde está…?* A **yes/no question** has the same words as a normal sentence; only the voice goes up at the end: *¿Tienen una habitación? ¿Hay aparcamiento?*\n\nSpanish questions start with *¿* and end with *?*.' },
        ],
        [
          { t: 'text', md: '*Quería* (from *querer*) and *me gustaría* are polite ways to say what you want. *¿Podría…?* (from *poder*) is a polite way to ask someone to do something. After all three, use the **infinitive**: *quería reservar*, *¿podría enviarme…?*\n\nOn the phone, the hotel says *usted* to you: *¿Tiene usted…?* To a hotel, you often say *ustedes*: *¿Tienen…?*' },
          { t: 'examples', items: [
            { s: '**Quería** una habitación con balcón.', n: 'Polite: I would like. It sounds softer than *quiero*.' },
            { s: '¿**Podría enviarme** los precios?', n: 'A polite request. The pronoun *me* can go on the end of the infinitive.' },
            { s: '¿El desayuno **está incluido**?', n: 'A yes/no question: the same words as a sentence.' },
            { s: '¿**A qué hora empieza** la visita guiada?', n: 'A question word, then the verb.' },
            { s: '¿**Hay que** reservar la excursión?', n: '*hay que* + infinitive: something everyone must do.' },
          ] },
          { t: 'tip', art: 'owl', md: 'For a tour, ask where it starts: *¿Dónde es el punto de encuentro?* The *punto de encuentro* is the place where the group meets. In Latin America, a parking place is often *el estacionamiento* or *el parqueadero*, not *el aparcamiento*.' },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: '¿Tienen una habitación individual libre?', why: 'A yes/no question has normal word order: verb, then the thing you want.' },
            { a: '¿Cuánto cuesta la habitación por noche?', why: 'The question word *cuánto* comes first, then the verb *cuesta*.' },
            { a: '¿Podría enviarme los precios por correo?', why: '*Podría* + infinitive. *me* is joined to the end of *enviar*.' },
            { a: '¿Hay que reservar la visita guiada?', why: '*Hay que* + infinitive, then the thing.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '___ una habitación con balcón, por favor.', o: ['Quería', 'Quiere', 'Querer'], why: 'For yourself, politely: *quería*.' },
            { q: '¿___ usted ayudarme, por favor?', o: ['Podría', 'Podrías', 'Puedo'], why: 'With *usted*: *¿Podría usted…?* *Podrías* is for *tú*.' },
            { q: '¿___ aparcamiento cerca del hotel?', o: ['Hay', 'Está', 'Es'], why: 'To ask if something exists, use *hay*.' },
            { q: '¿___ cuesta una habitación doble?', o: ['Cuánto', 'Cuántos', 'Cuándo'], why: 'For a price: *¿Cuánto cuesta…?* *Cuándo* asks about time.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the questions and answers.', pairs: [
            ['¿Tienen una habitación libre el fin de semana?', 'Sí, nos queda una habitación doble.'],
            ['¿Cuánto cuesta la visita guiada?', 'Quince euros por persona.'],
            ['¿A qué hora empieza la excursión?', 'A las diez y media.'],
            ['¿Dónde es el punto de encuentro?', 'Delante del ayuntamiento.'],
            ['¿El desayuno está incluido?', 'No, cuesta doce euros más.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the email to a tour company.', items: [
            { q: '___ señores:', a: ['Estimados'], why: 'A formal email to a company often starts with *Estimados señores:*, with a colon.' },
            { q: 'Me ___ hacer la excursión del sábado. (gustar, polite)', a: ['gustaría', 'gustaria'], why: 'Polite: *me gustaría* + infinitive.' },
            { q: '¿___ decirme a qué hora empieza? (poder, usted, polite)', a: ['Podría', 'Podrían', 'Podria', 'Podrian'], why: 'A polite request: *¿Podría…?* To a company you can also say *¿Podrían…?*' },
            { q: 'Un ___ saludo,', a: ['cordial'], why: 'A usual formal ending: *Un cordial saludo*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a booking confirmation',
      about: 'Read a booking confirmation and find the important details.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'After you book, the hotel sends a confirmation: *la confirmación de reserva*. Check the dates, the price and the rules for cancelling.' },
          { t: 'reading', title: 'Confirmación de reserva', md: '**Hotel Plaza Mayor**\n\nEstimado señor Okoye:\n\nMuchas gracias por su reserva. Estos son sus datos:\n\nLlegada: viernes, 11 de junio de 2027, a partir de las 15:00\nSalida: domingo, 13 de junio de 2027, antes de las 12:00\nHabitación: 1 habitación doble para 2 adultos\nPrecio: 2 noches × 110 € = 220 €, desayuno incluido\n\nUsted paga en el hotel, en efectivo o con tarjeta. La cancelación es gratuita hasta el 7 de junio. Después, cuesta el 50 % del precio.\n\nNuestro restaurante abre todas las noches de 20:00 a 23:30. En la recepción puede alquilar bicicletas.\n\n¡Le esperamos!\n\nUn cordial saludo,\nEl equipo del Hotel Plaza Mayor' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the confirmation. True, false or not given?', items: [
            { q: 'El señor Okoye se queda dos noches en el hotel.', a: 't', why: 'From Friday to Sunday: *2 noches*.' },
            { q: 'El desayuno se paga aparte.', a: 'f', why: 'The price says *desayuno incluido*.' },
            { q: 'El señor Okoye puede entrar en la habitación a las 12:00 del viernes.', a: 'f', why: 'He can arrive *a partir de las 15:00*, from 3 pm.' },
            { q: 'Tiene que pagar con tarjeta.', a: 'f', why: 'He can pay *en efectivo o con tarjeta*: in cash or by card.' },
            { q: 'El hotel tiene piscina.', a: 'ng', why: 'The confirmation does not talk about a swimming pool.' },
            { q: 'En el hotel se pueden alquilar bicicletas.', a: 't', why: '*En la recepción puede alquilar bicicletas.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'El señor Okoye cancela el 5 de junio. Le cuesta ___.', o: ['nada', '110 euros', '220 euros'], why: 'Until 7 June, cancelling is *gratuita*.' },
            { q: 'Cancela el 9 de junio. Le cuesta ___.', o: ['110 euros', 'nada', '220 euros'], why: 'After 7 June it costs 50 % of 220 €, so 110 €.' },
            { q: 'El domingo tiene que dejar la habitación antes de ___.', o: ['las 12:00', 'las 15:00', 'las 23:30'], why: '*Salida: … antes de las 12:00.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the word for the day you arrive and the word for the day you leave.', items: [
            { s: '[Llegada]: viernes, 11 de junio. [Salida]: domingo, 13 de junio.', why: '*la llegada*: the day you arrive. *la salida*: the day you leave.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find six words from the confirmation.', words: ['reserva', 'llegada', 'salida', 'noche', 'precio', 'tarjeta'] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Llego el 2 de ___. (5)', o: ['mayo', 'marzo', 'junio'], why: 'The fifth month is *mayo*.' },
      { q: '34,50 € se dice: ___', o: ['treinta y cuatro euros con cincuenta', 'cuarenta y tres euros con cincuenta', 'treinta y cuatro euros con quince'], why: '*treinta y cuatro*, then *con* and the cents: *cincuenta*.' },
      { q: 'Una habitación para una persona es una habitación ___.', o: ['individual', 'doble', 'gratuita'], why: '*individual*: for one person.' },
      { q: 'Decir que ya no quieres una reserva es ___.', o: ['cancelar', 'reservar', 'pagar'], why: '*cancelar*: to cancel a booking.' },
      { q: 'Llegada el 3 de julio, salida el 5 de julio. Son ___.', o: ['dos noches', 'tres noches', 'cinco noches'], why: 'The nights from 3 to 4 July and from 4 to 5 July.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: '¿___ una habitación doble libre? (tener, ustedes)', a: ['Tienen'], why: 'To a hotel: *ustedes tienen*.' },
      { q: '___ una habitación con balcón, por favor. (querer, polite)', a: ['Quería', 'Queria'], why: 'Polite: *quería*.' },
      { q: 'Nos quedamos del 3 ___ 6 de julio.', a: ['al'], why: '*del … al …*: *a + el = al*.' },
      { q: '¿___ es el punto de encuentro? – Delante del museo.', a: ['Dónde', 'Donde'], why: 'The answer is a place, so the question word is *dónde*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: '¿Cuánto cuesta una habitación individual?', why: 'The question word *cuánto*, then the verb.' },
      { a: '¿Podría enviarme la confirmación por correo?', why: '*Podría* + infinitive, with *me* on the end.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'La habitación cuesta [veintiuno] euros.', a: ['veintiún', 'veintiun'], why: 'Before *euros*, *veintiuno* becomes *veintiún*.' },
    ] },
  ],
};
