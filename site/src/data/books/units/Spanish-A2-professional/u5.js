// Spanish A2 for work, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Customers',
  goal: 'Help customers politely in a shop, café or office.',
  art: 'mug',
  tags: { skills: ['speaking', 'listening', 'reading'], topics: ['customers', 'shops', 'reception', 'complaints', 'apologies'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Helping customers',
      about: 'Greet customers, offer help and serve them in a shop, a café or at reception.',
      art: 'mug',
      spreads: [
        [
          { t: 'dialogue', title: 'In a shoe shop', lines: [
            { who: 'Dependienta', s: 'Buenos días. ¿En qué puedo ayudarle?' },
            { who: 'Cliente', s: 'Hola, buenos días. Busco unas zapatillas para correr.' },
            { who: 'Dependienta', s: 'Muy bien. ¿Qué número tiene?' },
            { who: 'Cliente', s: 'El 43.' },
            { who: 'Dependienta', s: 'Un momento, por favor. Aquí tiene. Puede sentarse aquí.' },
            { who: 'Cliente', s: 'Gracias. Me quedan un poco pequeñas. ¿Las tiene en el 44?' },
            { who: 'Dependienta', s: 'Sí, ahora mismo le traigo el 44.' },
            { who: 'Cliente', s: 'Perfecto, estas sí. Me las llevo. ¿Puedo pagar con tarjeta?' },
            { who: 'Dependienta', s: 'Claro que sí. ¿Quiere una bolsa?' },
            { who: 'Cliente', s: 'No, gracias.' },
          ] },
          { t: 'text', md: 'With customers you usually say **usted**: *¿En qué puedo ayudar**le**? ¿Qué número **tiene**?* In some shops and cafés in Spain, staff also say *tú* to young customers. If you are not sure, use *usted*.' },
        ],
        [
          { t: 'table', caption: 'Serving customers', explain: ['head', 'col0'], quiz: true, head: ['You want to …', 'You say …'], rows: [
            ['greet and offer help', 'Buenos días. ¿En qué puedo ayudarle?'],
            ['give something', 'Aquí tiene.'],
            ['ask the customer to wait', 'Un momento, por favor. Enseguida le atiendo.'],
            ['ask if they want more', '¿Algo más?'],
            ['say the price', 'Son 45 euros.'],
            ['say goodbye', 'Gracias por su visita. ¡Que tenga un buen día!'],
          ] },
          { t: 'dialogue', title: 'At reception', lines: [
            { who: 'Recepcionista', s: 'Buenos días, bienvenido. ¿Tiene usted cita?' },
            { who: 'Rafael Soto', s: 'Sí, tengo una cita con el señor Molina a las diez.' },
            { who: 'Recepcionista', s: '¿Me dice su nombre, por favor?' },
            { who: 'Rafael Soto', s: 'Rafael Soto.' },
            { who: 'Recepcionista', s: 'Muy bien, señor Soto. Siéntese, por favor. El señor Molina viene enseguida. ¿Quiere un café o un vaso de agua?' },
            { who: 'Rafael Soto', s: 'Un vaso de agua, por favor. Gracias.' },
          ] },
          { t: 'tip', art: 'owl', md: '*¡Que tenga un buen día!* is a fixed phrase: have a nice day. In Latin America you often hear *¡Que le vaya bien!* when a customer leaves.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['¿En qué puedo ayudarle?', 'Busco una chaqueta negra.'],
            ['¿Qué talla tiene?', 'La M.'],
            ['¿Algo más?', 'No, nada más, gracias.'],
            ['¿Cómo quiere pagar?', 'Con tarjeta, por favor.'],
            ['¿Tiene usted cita?', 'Sí, a las diez con la señora Ruiz.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'A customer comes into the shop.', o: ['Buenos días. ¿En qué puedo ayudarle?', 'Buenos días. ¿Qué quieres tú?', 'Adiós, buenos días.'], why: 'Greet and offer help, with *usted*.' },
            { q: 'You give the customer their change.', o: ['Aquí tiene.', 'Aquí estoy.', 'Aquí es.'], why: '*Aquí tiene*: here you are.' },
            { q: 'You are busy. A new customer is waiting.', o: ['Un momento, por favor. Enseguida le atiendo.', 'No tengo tiempo.', 'Vuelva usted mañana.'], why: '*Enseguida le atiendo*: I will be with you in a moment.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: '¿En qué puedo ___?', o: ['ayudarle', 'ayudarte usted', 'ayudo'], why: '*poder* + the infinitive, with *le* for *usted*: *ayudarle*.' },
            { q: 'Gracias por su ___.', o: ['visita', 'visitar', 'visito'], why: '*su* + a noun: *su visita*.' },
            { q: 'Siéntese, por ___.', o: ['favor', 'gracias', 'nada'], why: '*por favor*: please.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: '¿En qué puedo ayudarle?', why: 'The usual first question to a customer.' },
            { a: '¿Puedo pagar con tarjeta?', why: '*pagar con tarjeta*: to pay by card. *pagar en efectivo*: to pay cash.' },
            { a: '¿Quiere un café o un vaso de agua?', why: '*Quiere* (usted) + what you offer.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Problems and saying sorry',
      about: 'Say sorry, show that you understand and offer a solution.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'When a customer has a problem, say three things: **sorry** (*Lo siento mucho.*), **I understand** (*Entiendo.* or *Tiene razón.*) and **a solution** (*Le cambio el producto.*).' },
          { t: 'table', caption: 'Problems and solutions', explain: ['head', 'col0'], quiz: true, head: ['You want to …', 'You say …'], rows: [
            ['say sorry', 'Lo siento mucho. / Perdone. / Disculpe.'],
            ['show you understand', 'Entiendo. / Tiene usted razón.'],
            ['ask for the receipt', '¿Tiene el tique de compra?'],
            ['change the product', 'Le cambio el producto.'],
            ['give the money back', 'Le devuelvo el dinero.'],
            ['say sorry for the trouble', 'Disculpe las molestias.'],
          ] },
          { t: 'tip', art: 'owl', md: '*Perdone* and *Disculpe* are for *usted*. With *tú* you say *Perdona* and *Disculpa*. In Spain the receipt is *el tique* or *el ticket*; in many Latin American countries it is *el recibo* or *la boleta*.' },
        ],
        [
          { t: 'dialogue', title: 'A problem with a coffee maker', lines: [
            { who: 'Ana', s: 'Buenas tardes. Compré esta cafetera la semana pasada y no funciona.' },
            { who: 'Dependiente', s: 'Vaya, lo siento mucho. ¿Tiene el tique de compra?' },
            { who: 'Ana', s: 'Sí, aquí lo tiene.' },
            { who: 'Dependiente', s: 'Gracias. ¿Qué le pasa exactamente?' },
            { who: 'Ana', s: 'No se enciende. Lo he probado varias veces.' },
            { who: 'Dependiente', s: 'Entiendo. ¿Prefiere otra cafetera igual o le devuelvo el dinero?' },
            { who: 'Ana', s: 'Otra igual, por favor. Me gusta mucho el modelo.' },
            { who: 'Dependiente', s: 'Muy bien, ahora mismo le traigo otra. Disculpe las molestias.' },
            { who: 'Ana', s: 'No pasa nada. Muchas gracias.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Ana compró la cafetera ayer.', a: 'f', why: 'She bought it *la semana pasada*.' },
            { q: 'Ana tiene el tique de compra.', a: 't', why: '*Sí, aquí lo tiene.*' },
            { q: 'Ana quiere su dinero.', a: 'f', why: 'She wants *otra igual*, the same coffee maker again.' },
            { q: 'El dependiente pide perdón.', a: 't', why: '*Lo siento mucho* and *Disculpe las molestias*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Saying sorry or offering a solution?', explain: ['groups'], groups: ['Saying sorry', 'Offering a solution'], items: [
            { s: 'Lo siento mucho.', g: 0, why: '*sentir*: to be sorry.' },
            { s: 'Disculpe las molestias.', g: 0, why: 'Sorry for the trouble.' },
            { s: 'Perdone.', g: 0, why: '*perdonar*: to forgive. *Perdone* says sorry to a person you call *usted*.' },
            { s: 'Le cambio el producto.', g: 1, why: 'You give the customer a new product.' },
            { s: 'Le devuelvo el dinero.', g: 1, why: 'You give the money back.' },
            { s: '¿Quiere otro modelo?', g: 1, why: 'You offer something else.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'A customer says: *Esta camisa tiene un agujero.*', o: ['Lo siento mucho. Le cambio la camisa.', '¡Qué bien! Gracias.', 'No es mi problema.'], why: 'Say sorry and offer a solution.' },
            { q: 'A customer waited a long time.', o: ['Perdone la espera.', 'Perdone el dinero.', 'Gracias por la espera, adiós.'], why: '*Perdone la espera*: sorry for the wait.' },
            { q: 'The customer is right.', o: ['Tiene usted razón.', 'Tiene usted la culpa.', 'Tiene usted el tique.'], why: '*tener razón*: to be right.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Lo ___ mucho. (sentir)', a: ['siento'], why: '*Lo siento*: I am sorry.' },
            { q: '¿Tiene el ___ de compra?', a: ['tique', 'ticket'], why: '*el tique de compra*: the receipt.' },
            { q: 'Le ___ el dinero. (devolver)', a: ['devuelvo'], why: '*devolver*: *yo devuelvo*. The *o* becomes *ue*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: '¿Qué le pasa exactamente?', why: 'A question to understand the problem.' },
            { a: 'Ahora mismo le traigo otra.', why: '*le* before the verb *traigo*.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: usted and tú.', pairs: [
            ['Perdone.', 'Perdona.'],
            ['Disculpe.', 'Disculpa.'],
            ['¿Qué le pasa?', '¿Qué te pasa?'],
            ['Tiene razón.', 'Tienes razón.'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: reviews and a notice',
      about: 'Read customer reviews of a bakery, the answer from the team and a notice on the door.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'Opiniones: Panadería La Espiga', md: '**5 de 5 estrellas, Javier M.**\nCompro aquí el pan todas las mañanas. Siempre está buenísimo y los dependientes son muy amables. ¡Las magdalenas son las mejores del barrio!\n\n**2 de 5 estrellas, Lucía R.**\nEl sábado esperé veinte minutos. Solo había una persona en la tienda y la cola era muy larga. El pan estaba bien, pero no tenían croissants. ¡Qué pena!\n\n**Respuesta de la Panadería La Espiga**\nHola, Lucía: muchas gracias por tu opinión y perdona la espera. El sábado una compañera estaba enferma. Desde este mes somos dos personas los sábados por la mañana. ¡Esperamos verte pronto!' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the reviews. True, false or not given?', items: [
            { q: 'Javier compra pan en la panadería todos los días.', a: 't', why: '*Compro aquí el pan todas las mañanas.*' },
            { q: 'Lucía esperó mucho el sábado.', a: 't', why: '*El sábado esperé veinte minutos.*' },
            { q: 'Lucía no estaba contenta con el pan.', a: 'f', why: '*El pan estaba bien.*' },
            { q: 'Ahora trabajan dos personas los sábados por la mañana.', a: 't', why: '*Desde este mes somos dos personas los sábados por la mañana.*' },
            { q: 'Javier vive al lado de la panadería.', a: 'ng', why: 'He says *del barrio*, but not where he lives.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the word for thanks and the word for sorry.', items: [
            { s: 'Hola, Lucía: muchas [gracias] por tu opinión y [perdona] la espera.', why: '*gracias*: thanks. *perdona*: sorry, with *tú*, because the bakery writes *tú* to Lucía.' },
          ] },
        ],
        [
          { t: 'reading', title: 'En la puerta', md: '**Estimados clientes:**\n\nA partir del 1 de marzo tenemos un nuevo horario:\nde lunes a viernes, de 7:00 a 14:00 y de 17:00 a 20:30\nsábados, de 8:00 a 14:00\ndomingos y festivos, cerrado\n\nDel 15 al 31 de agosto cerramos por vacaciones.\n\nGracias por su comprensión.\nEl equipo de la Panadería La Espiga' },
          { t: 'ex', kind: 'choice', h: 'Read the notice and choose the right answer.', items: [
            { q: '¿Cuándo está cerrada la panadería?', o: ['los domingos', 'los sábados por la mañana', 'los lunes por la mañana'], why: '*domingos y festivos, cerrado*.' },
            { q: 'Un martes a las 15:00 la panadería ___.', o: ['está cerrada', 'está abierta', 'cierra por vacaciones'], why: 'From Monday to Friday it is closed between 14:00 and 17:00.' },
            { q: '¿Qué pasa en la segunda mitad de agosto?', o: ['La panadería cierra por vacaciones.', 'La panadería abre los domingos.', 'La panadería tiene un horario nuevo.'], why: '*Del 15 al 31 de agosto cerramos por vacaciones.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'You greet a customer.', o: ['Buenos días. ¿En qué puedo ayudarle?', 'Buenos días. ¿Qué te pasa?', 'Buenos días. ¿Algo más?'], why: 'Greet and offer help, with *usted*.' },
      { q: 'You give a customer the bag.', o: ['Aquí tiene.', 'Aquí está usted.', 'Tiene razón.'], why: '*Aquí tiene*: here you are.' },
      { q: 'A customer has waited a long time.', o: ['Perdone la espera.', 'Gracias por su visita.', 'Que tenga un buen día.'], why: '*Perdone la espera*: sorry for the wait.' },
      { q: 'A customer has a broken product and a receipt.', o: ['Lo siento mucho. ¿Prefiere otro o le devuelvo el dinero?', 'Lo siento, no.', 'Muy bien, adiós.'], why: 'Say sorry and offer a solution.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Un momento, por favor. Enseguida le ___. (atender, yo)', a: ['atiendo'], why: '*atender*: *yo atiendo*. The *e* becomes *ie*.' },
      { q: 'Disculpe las ___.', a: ['molestias'], why: '*Disculpe las molestias*: sorry for the trouble.' },
      { q: 'Tiene usted ___. Es un error nuestro.', a: ['razón', 'razon'], why: '*tener razón*: to be right.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the customer and your answer.', pairs: [
      ['Busco unos zapatos negros.', '¿Qué número tiene?'],
      ['Esta cafetera no funciona.', 'Lo siento mucho. ¿Tiene el tique?'],
      ['¿Puedo pagar con tarjeta?', 'Claro que sí.'],
      ['Tengo una cita a las diez.', '¿Me dice su nombre, por favor?'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Le cambio el producto.', why: '*le* before the verb *cambio*.' },
      { a: '¿Quiere un vaso de agua?', why: '*Quiere* (usted) + what you offer.' },
    ] },
  ],
};
