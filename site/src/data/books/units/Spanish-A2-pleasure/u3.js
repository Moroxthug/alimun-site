// Spanish A2 for travel, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'At the hotel',
  goal: 'Check in, ask for things and solve small problems.',
  art: 'churro',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['hotel', 'time-questions', 'complaints', 'polite-requests', 'no-hay'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Checking in and out',
      about: 'Check in, check out and ask about breakfast and wifi.',
      art: 'mug',
      spreads: [
        [
          { t: 'dialogue', title: 'En la recepción', lines: [
            { who: 'Recepcionista', s: '¡Buenas tardes! Bienvenido.' },
            { who: 'Javier', s: 'Buenas tardes. Tengo una reserva a nombre de Javier Ruiz.' },
            { who: 'Recepcionista', s: 'Sí, señor Ruiz, una habitación individual para tres noches. ¿Me deja su pasaporte o su DNI, por favor?' },
            { who: 'Javier', s: 'Aquí tiene. ¿A partir de qué hora se sirve el desayuno?' },
            { who: 'Recepcionista', s: 'De siete a diez y media, en la planta baja, al lado del bar.' },
            { who: 'Javier', s: '¿Hay wifi en la habitación?' },
            { who: 'Recepcionista', s: 'Sí, la contraseña está en esta tarjeta. Aquí tiene su llave. Es la habitación 214, en la segunda planta.' },
            { who: 'Javier', s: 'Gracias. ¿Y hasta qué hora tengo que dejar la habitación el último día?' },
            { who: 'Recepcionista', s: 'Hasta las doce. Después puede dejar el equipaje aquí, si quiere.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Hotels in Spain usually ask for your passport or ID card when you check in. The Spanish ID card is the *DNI*. Breakfast is often a buffet: *el desayuno bufé*.' },
        ],
        [
          { t: 'text', md: 'Questions about time: *¿A partir de qué hora…?* asks when something starts. *¿Hasta qué hora…?* asks when something ends. *¿A qué hora…?* asks for an exact time.\n\nTo say what you have done, use the **pretérito perfecto**: *he* + participle. *-ar* verbs make *-ado* (*reservar → reservado*), *-er* and *-ir* verbs make *-ido* (*pedir → pedido*).' },
          { t: 'examples', items: [
            { s: '¿**A partir de qué hora** puedo entrar en la habitación? – A partir de las tres.', n: 'When does it start?' },
            { s: '¿**Hasta qué hora** se sirve el desayuno? – Hasta las diez y media.', n: 'When does it end?' },
            { s: '**He reservado** una habitación doble.', n: '*reservar → reservado*.' },
            { s: '¿**Puedo pagar** con tarjeta?', n: '*poder* + infinitive.' },
            { s: 'Mañana **dejo** la habitación a las nueve.', n: '*dejar la habitación*: to check out. Hotels also say *hacer el check-out*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'In the hotel', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['la recepción', 'reception'],
            ['la llave / la tarjeta', 'key / key card'],
            ['la planta baja', 'ground floor'],
            ['la primera planta', 'first floor'],
            ['el ascensor', 'lift'],
            ['el wifi / la contraseña', 'wifi / password'],
            ['registrarse / dejar la habitación', 'to check in / to check out'],
          ] },
          { t: 'ex', kind: 'match', h: 'Match the questions and answers.', pairs: [
            ['¿A partir de qué hora hay desayuno?', 'A partir de las siete.'],
            ['¿Hasta qué hora tengo que dejar la habitación?', 'Hasta las doce.'],
            ['¿Cuál es la contraseña del wifi?', 'Está en su tarjeta.'],
            ['¿Dónde está el ascensor?', 'Aquí mismo, a la izquierda.'],
            ['¿Puedo pagar con tarjeta?', 'Sí, claro.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '¿___ qué hora tengo que dejar la habitación? – Hasta las doce.', o: ['Hasta', 'A partir de', 'Desde'], why: 'The answer is *hasta las doce*, so the question is *¿Hasta qué hora…?*' },
            { q: '___ reservado una habitación.', o: ['He', 'Soy', 'Estoy'], why: 'Pretérito perfecto: *haber* + participle: *he reservado*.' },
            { q: 'Su habitación está en la segunda ___.', o: ['planta', 'llave', 'recepción'], why: '*la segunda planta*: the second floor.' },
            { q: '¿Me deja su ___, por favor?', o: ['pasaporte', 'desayuno', 'ascensor'], why: 'At check-in the hotel often asks to see your passport.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Mañana ___ la habitación a las nueve. (dejar, yo)', a: ['dejo'], why: '*yo* + *-o*: *dejo*.' },
            { q: 'He ___ una habitación doble. (reservar)', a: ['reservado'], why: '*-ar* verbs: the participle ends in *-ado*.' },
            { q: '¿___ pagar con tarjeta? (poder, yo)', a: ['Puedo'], why: '*poder* changes *o* to *ue*: *puedo*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Small problems with the room',
      about: 'Say what is wrong and ask politely for help.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To say what is wrong, use *no funciona*, *está roto*, *no se abre* or *no hay…*. With **demasiado** you say that something is too much for you: *demasiado ruido*, *demasiado calor*. For the weather and the temperature in the room, use *hace*: *hace frío*, *hace calor*.' },
          { t: 'examples', items: [
            { s: 'La calefacción **no funciona**.', n: 'For more than one thing: *Las luces no funcionan.*' },
            { s: 'La ducha **está rota**.', n: '*roto, rota*: broken. It agrees with the noun.' },
            { s: 'La ventana **no se abre**.', n: 'I cannot open the window.' },
            { s: '**No hay** agua caliente.', n: 'With *no hay*, you do not need *un* or *una*.' },
            { s: 'Hay **demasiado** ruido en la habitación.', n: '*demasiado*: so much that it is a problem.' },
            { s: 'En el baño **falta** una toalla.', n: '*faltar*: something is not there.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Una llamada a recepción', lines: [
            { who: 'Elena', s: 'Hola, soy Elena Lindqvist, de la habitación 305. Perdone, pero la calefacción no funciona. Hace mucho frío en la habitación.' },
            { who: 'Recepcionista', s: 'Ay, lo siento mucho. Ahora mismo subo a verla.' },
            { who: 'Elena', s: 'Gracias. Y en el baño faltan toallas.' },
            { who: 'Recepcionista', s: 'Le subimos dos toallas enseguida.' },
            { who: 'Elena', s: 'Otra cosa: ¿me podría despertar mañana a las seis?' },
            { who: 'Recepcionista', s: 'Por supuesto. ¿Necesita algo más?' },
            { who: 'Elena', s: 'No, eso es todo. ¡Muchas gracias!' },
          ] },
          { t: 'tip', art: 'owl', md: 'Be polite: start with *Perdone* and ask with *¿Podría…?* or *¿Me podría…?*. The hotel often answers *Lo siento*: I am sorry. In Latin America, a room key can be *la llave* or *la tarjeta*, and *el elevador* is common for *el ascensor*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'La calefacción no ___.', o: ['funciona', 'funcionan', 'funcionas'], why: '*la calefacción* is one thing: *funciona*.' },
            { q: 'No ___ agua caliente.', o: ['hay', 'está', 'es'], why: 'To say something is not there: *no hay*.' },
            { q: 'La ducha está ___.', o: ['rota', 'roto', 'rotas'], why: '*la ducha* is feminine and singular: *rota*.' },
            { q: 'No puedo dormir. Hay ___ ruido.', o: ['demasiado', 'demasiada', 'muy'], why: '*el ruido* is masculine: *demasiado ruido*. *muy* goes with adjectives, not nouns.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the problem and the polite request.', pairs: [
            ['La calefacción no funciona.', '¿Podría alguien venir a arreglarla?'],
            ['En el baño falta una toalla.', '¿Me podría traer una toalla?'],
            ['Hay demasiado ruido.', '¿Tienen una habitación más tranquila?'],
            ['Mañana me levanto muy temprano.', '¿Me podría despertar a las cinco?'],
            ['El wifi no funciona.', '¿Me podría dar otra vez la contraseña?'],
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the requests.', items: [
            { a: '¿Me podría despertar a las seis?', why: '*Me* before *podría*, the infinitive *despertar*, then the time.' },
            { a: '¿Me podría traer dos toallas?', why: '*Me podría* + infinitive *traer* + the thing.' },
            { a: '¿Puedo cambiar de habitación, por favor?', why: '*Puedo* + infinitive. *cambiar de habitación*: to move to another room.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Las luces no [funciona].', a: ['funcionan'], why: '*las luces* is plural: *funcionan*.' },
            { s: 'No [está] agua caliente en la ducha.', a: ['hay'], why: 'To say something is not there, use *no hay*: *No hay agua caliente.*' },
            { s: 'La ventana está [roto].', a: ['rota'], why: '*la ventana* is feminine: *rota*.' },
            { s: 'Hace [mucha] frío en la habitación.', a: ['mucho'], why: '*el frío* is masculine: *hace mucho frío*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: information for guests',
      about: 'Read the information in your hotel room.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In many hotel rooms there is a page with information for guests: *la información para los huéspedes*. A *huésped* is a guest in a hotel. Read this one.' },
          { t: 'reading', title: 'Información para nuestros huéspedes', md: '**¡Bienvenidos al Hotel Los Tilos!**\n\n**Desayuno:** de lunes a viernes, de 7:00 a 10:30; sábados y domingos, de 8:00 a 11:30. El desayuno bufé está en la planta baja.\n\n**Wifi:** El wifi es gratuito. La contraseña está en su tarjeta de la habitación.\n\n**Salida:** Por favor, deje la habitación antes de las 12:00. Después puede dejar su equipaje en la recepción.\n\n**Toallas:** ¿Quiere toallas nuevas? Deje las toallas usadas en el suelo del baño. Las toallas en el colgador significan: las uso otra vez.\n\n**Descanso:** De 23:00 a 8:00 es hora de silencio. Por favor, no haga ruido.\n\n**Aparcamiento:** Nuestro garaje cuesta 15 euros al día. Pregunte en la recepción.\n\nSi tiene alguna pregunta, estamos a su disposición las 24 horas. Marque el 9.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the information. True, false or not given?', items: [
            { q: 'El sábado hay desayuno hasta las 11:30.', a: 't', why: '*sábados y domingos, de 8:00 a 11:30*.' },
            { q: 'El wifi se paga aparte.', a: 'f', why: '*El wifi es gratuito.*' },
            { q: 'Después de dejar la habitación, se puede dejar el equipaje en el hotel.', a: 't', why: '*Después puede dejar su equipaje en la recepción.*' },
            { q: 'Para tener toallas nuevas, hay que dejar las usadas en el suelo.', a: 't', why: '*Deje las toallas usadas en el suelo del baño.*' },
            { q: 'A medianoche se puede escuchar música alta en la habitación.', a: 'f', why: 'From 23:00 to 8:00 is *hora de silencio*.' },
            { q: 'El hotel tiene piscina.', a: 'ng', why: 'The information does not talk about a swimming pool.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Tiene una pregunta por la noche. ¿Qué hace?', o: ['Marca el 9.', 'Espera hasta las 8:00.', 'Escribe un correo.'], why: '*Estamos a su disposición las 24 horas. Marque el 9.*' },
            { q: 'Aparca tres días en el garaje. Le cuesta ___.', o: ['45 euros', '15 euros', '30 euros'], why: '15 euros a day × 3 days = 45 euros.' },
            { q: '¿Dónde está la contraseña del wifi?', o: ['en la tarjeta de la habitación', 'en la puerta', 'en el baño'], why: '*La contraseña está en su tarjeta de la habitación.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the three places in the hotel.', items: [
            { s: 'El desayuno está en la [planta baja], el equipaje se queda en la [recepción] y el coche está en el [garaje].', why: 'Three places from the information page.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs.', pairs: [
            ['la llave', 'key'],
            ['la toalla', 'towel'],
            ['el ascensor', 'lift'],
            ['la ducha', 'shower'],
            ['la calefacción', 'heating'],
            ['el huésped', 'guest'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '¿___ qué hora hay desayuno? – A partir de las siete.', o: ['A partir de', 'Hasta', 'Desde hace'], why: 'The answer is *a partir de las siete*, so the question is *¿A partir de qué hora…?*' },
      { q: 'La ducha no ___.', o: ['funciona', 'funcionan', 'funcionas'], why: '*la ducha* is one thing: *funciona*.' },
      { q: 'En el baño ___ toallas.', o: ['no hay', 'no está', 'no es'], why: 'Something is not there: *no hay*.' },
      { q: 'No puedo dormir. Hay ___ ruido.', o: ['demasiado', 'muy', 'demasiada'], why: '*demasiado ruido*: too much noise.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'He ___ una habitación doble. (reservar)', a: ['reservado'], why: '*-ar* verbs: *-ado*.' },
      { q: 'Mañana ___ la habitación a las diez. (dejar, nosotros)', a: ['dejamos'], why: '*nosotros dejamos*.' },
      { q: '¿Me ___ despertar a las siete? (poder, usted, polite)', a: ['podría', 'podria'], why: 'Polite: *¿Me podría…?*' },
      { q: '¿La calefacción no funciona? Lo ___ mucho.', a: ['siento'], why: '*Lo siento*: I am sorry.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: '¿Puedo pagar con tarjeta?', why: '*Puedo* + infinitive *pagar*.' },
      { a: '¿Hasta qué hora tengo que dejar la habitación?', why: '*¿Hasta qué hora*, then *tengo que* + infinitive.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: '«Hora de silencio» quiere decir que por la noche no se hace ruido.', a: 't', why: 'Quiet time at night.' },
      { q: 'La planta baja está arriba, en la última planta.', a: 'f', why: '*la planta baja* is the ground floor.' },
    ] },
  ],
};
