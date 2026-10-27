// Spanish A2 for moving abroad, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Finding your way',
  goal: 'Buy a ticket, use public transport and ask for directions.',
  art: 'snail',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['transport', 'tickets', 'directions', 'imperative-usted', 'timetables'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Buying a ticket',
      about: 'The words for tickets and transport, and how to buy a ticket.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'In a new town, you take the bus, the metro or the train every day. You buy tickets at a machine (*la máquina*), at the ticket office (*la taquilla*) or in an app. These are the words you need.' },
          { t: 'table', caption: 'Transport words', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['el billete', 'ticket'],
            ['solo ida / ida y vuelta', 'single / return'],
            ['el bono de diez viajes', 'a ticket for ten trips'],
            ['la tarjeta de transporte', 'a travel card you top up'],
            ['la parada', 'bus or tram stop'],
            ['la estación', 'station'],
            ['el andén / la vía', 'platform / track'],
            ['hacer transbordo', 'to change (trains, lines)'],
            ['validar el billete', 'to stamp or scan your ticket'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Latin America, a ticket is usually *el boleto*, and the bus has many names: *el camión* in Mexico, *el colectivo* in Argentina. In Spain, people say *coger el autobús*; in much of Latin America they say *tomar el autobús*.' },
        ],
        [
          { t: 'dialogue', title: 'En la taquilla', lines: [
            { who: 'Amira', s: 'Buenos días. Quería un billete para Toledo, por favor.' },
            { who: 'Pedro', s: '¿Solo ida o ida y vuelta?' },
            { who: 'Amira', s: 'Ida y vuelta. Vuelvo el domingo.' },
            { who: 'Pedro', s: 'Son veintiún euros con cuarenta.' },
            { who: 'Amira', s: '¿De qué andén sale el tren?' },
            { who: 'Pedro', s: 'Del andén cuatro, a las diez y cuarto.' },
            { who: 'Amira', s: '¿Tengo que hacer transbordo?' },
            { who: 'Pedro', s: 'No, es un tren directo.' },
            { who: 'Amira', s: '¿Puedo pagar con tarjeta?' },
            { who: 'Pedro', s: 'Sí, claro. Aquí tiene su billete.' },
          ] },
          { t: 'examples', items: [
            { s: '**Un bono de diez viajes**, por favor.', n: 'Ten trips on one ticket is usually cheaper than ten single tickets.' },
            { s: '¿**Tengo que** hacer transbordo?', n: '*tener que* + infinitive: something you must do.' },
            { s: '**Hay que** validar el billete antes de subir.', n: '*hay que* + infinitive: a rule for everyone.' },
            { s: '¿**A qué hora sale** el próximo tren?', n: '*salir*: the train leaves. *llegar*: it arrives.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['el billete sencillo', 'para un solo viaje'],
            ['el bono de diez viajes', 'para diez viajes'],
            ['el abono mensual', 'para todo un mes'],
            ['la parada', 'aquí para el autobús'],
            ['el andén', 'aquí para el tren'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Which ticket is best?', items: [
            { q: 'Usted va en autobús dos o tres veces por semana. Compra ___.', o: ['un bono de diez viajes', 'un billete de ida y vuelta', 'un abono anual'], why: 'A few trips a week: a ticket for ten trips is a good choice.' },
            { q: 'Usted va en metro al trabajo todos los días. Compra ___.', o: ['un abono mensual', 'un billete sencillo', 'un bono de diez viajes'], why: 'Every day for weeks: a monthly pass is usually the cheapest.' },
            { q: 'Usted va a Sevilla el viernes y vuelve el lunes. Compra ___.', o: ['un billete de ida y vuelta', 'un billete solo de ida', 'un abono mensual'], why: 'You go and come back: *ida y vuelta*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: '¿Tengo que ___ transbordo en la estación central?', a: ['hacer'], why: 'The phrase is *hacer transbordo*: to change.' },
            { q: '¿A qué hora ___ el tren para Toledo? (salir)', a: ['sale'], why: '*el tren* is singular: *sale*.' },
            { q: 'Hay ___ validar el billete antes de subir.', a: ['que'], why: '*hay que* + infinitive: a rule for everyone.' },
            { q: '¿Dónde está la ___ del autobús 27?', a: ['parada'], why: 'The bus stops at a *parada*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: '¿Dónde puedo comprar un billete?', why: 'Question word, *puedo*, then the infinitive *comprar*.' },
            { a: '¿De qué andén sale el tren?', why: '*¿De qué andén?* first, then the verb *sale* and the subject.' },
            { a: '¿Cuánto cuesta un bono de diez viajes?', why: '*¿Cuánto cuesta…?* asks for the price of one thing.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Asking the way',
      about: 'Ask for directions and understand the answer.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Start with *Perdone* or *Disculpe* (excuse me). Then ask: *¿Por dónde se va a…?* or *¿Dónde está…?* Remember: **a + el = al**: *¿Por dónde se va **al** centro?* but *¿Por dónde se va **a la** estación?*' },
          { t: 'table', caption: 'Directions', explain: ['head', 'col2'], quiz: true, head: ['usted', 'tú', 'Meaning'], rows: [
            ['Siga todo recto.', 'Sigue todo recto.', 'Go straight on.'],
            ['Gire a la derecha.', 'Gira a la derecha.', 'Turn right.'],
            ['Gire a la izquierda.', 'Gira a la izquierda.', 'Turn left.'],
            ['Tome la primera calle.', 'Toma la primera calle.', 'Take the first street.'],
            ['Cruce la plaza.', 'Cruza la plaza.', 'Cross the square.'],
          ] },
          { t: 'examples', items: [
            { s: 'Siga recto **hasta el semáforo**.', n: '*hasta* = as far as. *el semáforo* = the traffic lights.' },
            { s: 'La farmacia está **en la esquina**.', n: '*la esquina* = the corner.' },
            { s: 'Está **enfrente del** supermercado.', n: '*enfrente de* = opposite. *de + el = del*.' },
            { s: 'Está **a cinco minutos a pie**.', n: '*a pie* or *andando* = on foot.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'En la calle', lines: [
            { who: 'Priya', s: 'Perdone, ¿por dónde se va a la estación de autobuses?' },
            { who: 'Rosa', s: 'Mire, siga todo recto por esta calle hasta el semáforo.' },
            { who: 'Priya', s: '¿Hasta el semáforo?' },
            { who: 'Rosa', s: 'Sí. Allí gire a la izquierda y cruce la plaza. La estación está enfrente de un supermercado.' },
            { who: 'Priya', s: '¿Está lejos?' },
            { who: 'Rosa', s: 'No, está a diez minutos a pie.' },
            { who: 'Priya', s: 'Muchas gracias.' },
            { who: 'Rosa', s: 'De nada.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Priya quiere ir a la estación de tren.', a: 'f', why: 'She asks for *la estación de autobuses*, the bus station.' },
            { q: 'En el semáforo, Priya tiene que girar a la izquierda.', a: 't', why: '*Allí gire a la izquierda.*' },
            { q: 'La estación está al lado de un supermercado.', a: 'f', why: 'It is *enfrente de* (opposite) a supermarket, not next to it.' },
            { q: 'Priya puede ir andando.', a: 't', why: 'It is ten minutes *a pie*, on foot.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Latin America, people often say *doblar* for turn (*doble a la derecha*) and count streets in *cuadras* (blocks): *Siga tres cuadras.* In Spain, a block is *una manzana*.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'al, a la, del or de la?', items: [
            { q: '¿Por dónde se va ___ centro?', o: ['al', 'a la', 'a el'], why: '*el centro*: *a + el = al*.' },
            { q: '¿Por dónde se va ___ playa?', o: ['a la', 'al', 'del'], why: '*la playa* is feminine: *a la*. Only *a + el* joins.' },
            { q: 'El banco está enfrente ___ hospital.', o: ['del', 'de la', 'al'], why: '*el hospital*: *de + el = del*.' },
            { q: 'El cajero está al lado ___ farmacia.', o: ['de la', 'del', 'a la'], why: '*la farmacia* is feminine: *de la*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Who is the speaker talking to? Sort the instructions.', groups: ['usted', 'tú'], items: [
            { s: 'Siga recto.', g: 0, why: '*seguir* with *usted*: *siga*.' },
            { s: 'Gira a la derecha.', g: 1, why: 'The *tú* instruction looks like the *él* present: *gira*.' },
            { s: 'Cruce la calle.', g: 0, why: '*cruzar* with *usted*: *cruce*, with *c* before *e*.' },
            { s: 'Toma la segunda calle.', g: 1, why: '*tú*: *toma*.' },
            { s: 'Tome el autobús 5.', g: 0, why: '*usted*: *-ar* verbs end in *-e*: *tome*.' },
            { s: 'Sigue hasta la plaza.', g: 1, why: '*tú*: *sigue*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the instruction and its meaning.', pairs: [
            ['Siga todo recto.', 'No gire.'],
            ['Cruce la calle.', 'Vaya al otro lado.'],
            ['Está en la esquina.', 'Está donde se juntan dos calles.'],
            ['Está a dos pasos.', 'Está muy cerca.'],
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: '¿Por dónde se va al museo?', why: '*¿Por dónde se va…?* and *a + el = al*.' },
            { a: '¿Hay una farmacia por aquí?', why: '*¿Hay…?* asks if something exists near you. Use *un* or *una*.' },
            { a: '¿Cómo voy a la estación de tren?', why: '*¿Cómo voy a…?* asks how to get somewhere. *la estación* is feminine: *a la*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Timetables and delays',
      about: 'Read a departure board, a notice about building work and a ticket.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At a station, look at the board for **salidas** (departures) and **llegadas** (arrivals). Important words: *retraso* (delay), *cancelado* (cancelled), *a su hora* (on time) and *vía* (track).' },
          { t: 'reading', title: 'Salidas', md: '10:05 Regional a Segovia, vía 2: retraso de unos 15 minutos.\n\n10:15 Tren a Toledo, vía 4: a su hora.\n\n10:20 Regional a Ávila, vía 1: cancelado. Próxima salida a Ávila: 11:20.' },
          { t: 'ex', kind: 'choice', h: 'Look at the board. Choose the answer.', items: [
            { q: 'El tren a Segovia sale ___.', o: ['a las 10:20, más o menos', 'a las 10:05', 'a las 11:20'], why: 'It is at 10:05 with about 15 minutes of delay: about 10:20.' },
            { q: 'El tren a Toledo sale ___.', o: ['a su hora, de la vía 4', 'tarde, de la vía 4', 'a su hora, de la vía 2'], why: '*Tren a Toledo, vía 4: a su hora.*' },
            { q: 'Usted va a Ávila. Toma el tren de ___.', o: ['las 11:20', 'las 10:20', 'las 10:05'], why: 'The 10:20 is *cancelado*. The next one is at 11:20.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Obras en la línea 4', md: 'Estimados viajeros:\n\nDel 12 al 25 de octubre hay obras en la avenida de la Constitución. Durante estas dos semanas, el autobús de la línea 4 no para en Mercado Central ni en Plaza del Sol. Pueden usar la parada provisional de la calle Colón, a cinco minutos a pie.\n\nDe lunes a viernes, los autobuses pasan cada diez minutos, como siempre. Los fines de semana pasan cada veinte minutos.\n\nPerdonen las molestias.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the notice. True, false or not given?', items: [
            { q: 'Las obras duran unas dos semanas.', a: 't', why: 'From 12 to 25 October: *estas dos semanas*.' },
            { q: 'El autobús no para en Plaza del Sol.', a: 't', why: '*No para en Mercado Central ni en Plaza del Sol.*' },
            { q: 'Los sábados el autobús pasa cada diez minutos.', a: 'f', why: 'At the weekend it comes every twenty minutes.' },
            { q: 'Hay un autobús especial por la noche.', a: 'ng', why: 'The notice says nothing about night buses.' },
            { q: 'La parada provisional está en la calle Colón.', a: 't', why: '*La parada provisional de la calle Colón.*' },
          ] },
        ],
        [
          { t: 'reading', title: 'Su billete', md: 'Bono de diez viajes\nZona A\nVálido en metro y autobús urbano\nViajes restantes: 7\nNo válido en el autobús del aeropuerto\nPrecio: 12,20 €' },
          { t: 'ex', kind: 'spot', h: 'Tap the words for problems on a trip.', items: [
            { s: 'Hoy hay [obras] en la línea 4, el tren a Segovia tiene [retraso] y el tren a Ávila está [cancelado].', why: 'Building work, a delay and a cancelled train.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Read the ticket. True or false?', items: [
            { q: 'Con este bono se puede viajar en metro.', a: 't', why: '*Válido en metro y autobús urbano.*' },
            { q: 'Quedan siete viajes en el bono.', a: 't', why: '*Viajes restantes: 7*: seven trips are left.' },
            { q: 'Con este bono se puede ir al aeropuerto en autobús.', a: 'f', why: '*No válido en el autobús del aeropuerto.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Usted va y vuelve. Compra un billete de ___.', o: ['ida y vuelta', 'solo ida', 'diez viajes'], why: 'Going and coming back: *ida y vuelta*.' },
      { q: '¿Por dónde se va ___ aeropuerto?', o: ['al', 'a la', 'a el'], why: '*el aeropuerto*: *a + el = al*.' },
      { q: 'El tren no sale hoy. Está ___.', o: ['cancelado', 'a su hora', 'directo'], why: '*cancelado*: it does not run.' },
      { q: '___ a la derecha en el semáforo. (usted)', o: ['Gire', 'Gira', 'Giro'], why: 'A polite instruction with *usted*: *gire*.' },
    ] },
    { t: 'ex', kind: 'bank', h: 'Complete the sentences with the words.', extra: ['llegadas', 'esquina'], items: [
      { q: 'El autobús para en la ___ de enfrente.', a: 'parada', why: 'A bus stops at a *parada*.' },
      { q: 'El tren tiene un ___ de veinte minutos.', a: 'retraso', why: '*el retraso*: the delay.' },
      { q: 'En la estación central tiene que hacer ___ a la línea 2.', a: 'transbordo', why: '*hacer transbordo*: to change lines.' },
      { q: 'El tren para Toledo sale de la ___ 4.', a: 'vía', why: 'Trains leave from a *vía* or an *andén*.' },
    ] },
    { t: 'ex', kind: 'odd', h: 'Which one is not about transport?', items: [
      { o: ['la firma', 'el andén', 'la parada', 'el billete'], why: '*la firma* (signature) is a word on a form. The others are about transport.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: '¿A qué hora sale el próximo tren?', why: '*¿A qué hora…?* + *sale* + the subject.' },
      { a: '¿Tengo que hacer transbordo?', why: '*tener que* + infinitive.' },
      { a: '¿Dónde está la parada del autobús?', why: '*de + el = del*.' },
    ] },
  ],
};
