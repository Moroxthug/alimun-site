// Spanish A2 for work, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'On the phone',
  goal: 'Make and answer simple work calls and leave a message.',
  art: 'parrot',
  tags: { skills: ['speaking', 'listening', 'reading'], topics: ['phone', 'spelling', 'numbers', 'messages', 'indirect-object-pronouns'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Answering the phone',
      about: 'Answer a work call, ask for someone, and spell names and numbers.',
      art: 'parrot',
      spreads: [
        [
          { t: 'dialogue', title: 'A phone call', lines: [
            { who: 'Sara', s: 'Transportes Garza, buenos días. Le atiende Sara. ¿En qué puedo ayudarle?' },
            { who: 'Carlos Vidal', s: 'Buenos días. ¿Podría hablar con la señora Ortega, por favor?' },
            { who: 'Sara', s: '¿De parte de quién, por favor?' },
            { who: 'Carlos Vidal', s: 'De Carlos Vidal, de la empresa Muebles Norte.' },
            { who: 'Sara', s: 'Perdone, ¿cómo se escribe su apellido?' },
            { who: 'Carlos Vidal', s: 'Uve, i, de, a, ele. Vidal.' },
            { who: 'Sara', s: 'Gracias, señor Vidal. Un momento, por favor, no cuelgue. Le paso con ella.' },
          ] },
          { t: 'text', md: 'At work, you answer with the name of the company, a greeting and often your name: *Transportes Garza, buenos días.*\n\nOn a private phone in Spain people say *¿Sí?*, *¿Diga?* or *¿Dígame?*. When you call someone, you say who you are with *Soy …* or *Le llama …*.' },
          { t: 'tip', art: 'owl', md: 'In Latin America people answer the phone in other ways: *¿Aló?* in many countries and *¿Bueno?* in Mexico. A mobile phone is *el móvil* in Spain and *el celular* in Latin America.' },
        ],
        [
          { t: 'table', caption: 'Useful phrases on the phone', explain: ['head', 'col0'], quiz: true, head: ['You want to …', 'You say …'], rows: [
            ['ask for someone', '¿Podría hablar con …, por favor?'],
            ['ask who is calling', '¿De parte de quién?'],
            ['ask the caller to wait', 'Un momento, por favor. No cuelgue.'],
            ['put the caller through', 'Le paso con él. / Le paso con ella.'],
            ['say the person is not there', 'Lo siento, no está. / Está en una reunión.'],
            ['ask the caller to repeat', '¿Puede repetir, por favor?'],
            ['ask how to spell a word', '¿Cómo se escribe?'],
          ] },
          { t: 'text', md: 'To spell a name, you say the letters: *a, be, ce, de, e, efe, ge, hache, i, jota, ka, ele, eme, ene, eñe, o, pe, cu, erre, ese, te, u, uve, uve doble, equis, i griega, zeta*.\n\nIn Spain people often say phone numbers in groups of two or three: *600 00 00 12* is *seiscientos, cero cero, cero cero, doce*.' },
          { t: 'tip', art: 'churro', md: '*b* and *v* sound the same in Spanish, so people say *be* and *uve* very clearly. In Latin America you also hear *be larga* and *ve corta*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You answer the phone at work.', o: ['Hotel Mirador, buenos días.', '¿Quién eres tú?', 'Adiós, buenos días.'], why: 'At work: the name of the company and a greeting.' },
            { q: 'You want to know who is calling.', o: ['¿De parte de quién?', '¿Cómo está usted?', '¿Dónde está usted?'], why: '*¿De parte de quién?* asks for the caller’s name.' },
            { q: 'The caller should wait a moment.', o: ['Un momento, por favor.', 'Hasta mañana, por favor.', 'Lo siento mucho.'], why: '*Un momento, por favor* asks someone to wait.' },
            { q: 'You did not understand the name.', o: ['Perdone, ¿puede repetir, por favor?', 'Perdone, ¿puede colgar, por favor?', 'Perdone, ¿puede pasar, por favor?'], why: '*repetir*: to say again. *colgar* means to end the call.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the phrases.', items: [
            { q: '¿Podría hablar ___ el señor Molina, por favor?', a: ['con'], why: '*hablar con* + a person.' },
            { q: 'Un momento, le paso ___ ella.', a: ['con'], why: '*pasar con*: to put someone through to a person.' },
            { q: '¿Cómo se ___ su apellido? (escribir)', a: ['escribe'], why: '*¿Cómo se escribe?*: how do you spell it?' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['¿De parte de quién?', 'De Carlos Vidal, de Muebles Norte.'],
            ['¿Cómo se escribe su apellido?', 'Uve, i, de, a, ele.'],
            ['¿Me da su número de teléfono?', 'Sí, es el 600 00 00 12.'],
            ['¿Está la señora Ortega?', 'Lo siento, ahora está en una reunión.'],
          ] },
          { t: 'ex', kind: 'sort', h: 'Do you say this to a person you call usted or tú?', groups: ['usted', 'tú'], items: [
            { s: '¿Puede repetir, por favor?', g: 0, why: '*puede* is the *usted* form of *poder*.' },
            { s: '¿Puedes repetir, por favor?', g: 1, why: '*puedes* is the *tú* form of *poder*.' },
            { s: 'Le paso con la jefa.', g: 0, why: '*le* is the pronoun for *usted*.' },
            { s: 'Te paso con la jefa.', g: 1, why: '*te* is the pronoun for *tú*.' },
            { s: '¿Cómo se llama usted?', g: 0, why: 'The verb form *se llama* goes with *usted*.' },
            { s: '¿Cómo te llamas?', g: 1, why: '*te llamas* goes with *tú*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: '¿Podría hablar con el señor Vidal?', why: '*Podría* is very polite. *hablar con* + the person.' },
            { a: '¿De parte de quién, por favor?', why: 'A fixed question on the phone.' },
            { a: '¿Cómo se escribe su apellido?', why: '*se escribe*: is written. *su apellido*: your family name, to a person you call *usted*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Taking a message',
      about: 'Offer to take a message, pass it on and say goodbye on the phone.',
      art: 'mug',
      spreads: [
        [
          { t: 'dialogue', title: 'A message', lines: [
            { who: 'Sara', s: 'Lo siento, señor Vidal, la señora Ortega está en una reunión hasta las doce. ¿Quiere dejarle un mensaje?' },
            { who: 'Carlos Vidal', s: 'Sí, por favor. ¿Le puede decir que he llamado? Necesito hablar con ella hoy.' },
            { who: 'Sara', s: 'Por supuesto. ¿Me da su número de teléfono?' },
            { who: 'Carlos Vidal', s: 'Sí, es el 600 00 00 12.' },
            { who: 'Sara', s: 'Repito: seiscientos, cero cero, cero cero, doce. ¿Es correcto?' },
            { who: 'Carlos Vidal', s: 'Sí, correcto.' },
            { who: 'Sara', s: 'Muy bien. Le doy el mensaje a las doce.' },
            { who: 'Carlos Vidal', s: 'Muchas gracias. Hasta luego.' },
            { who: 'Sara', s: 'De nada. Hasta luego, señor Vidal.' },
          ] },
          { t: 'text', md: 'On the phone you often need the small words **me, te, le**. They mean *to me*, *to you*, *to him* or *to her*, and they come **before the verb**: *¿**Me** da su número? **Le** doy el mensaje.*\n\n*le* is also for *usted*: *Señor Vidal, **le** paso con la señora Ortega.*' },
        ],
        [
          { t: 'table', caption: 'To me, to you, to him', explain: ['head', 'col1'], quiz: true, head: ['Pronoun', 'Meaning', 'Example'], rows: [
            ['me', 'to me', '¿Me da su número?'],
            ['te', 'to you (tú)', 'Te envío un mensaje.'],
            ['le', 'to him, to her, to you (usted)', 'Le doy el mensaje.'],
            ['nos', 'to us', '¿Nos puede llamar mañana?'],
            ['os', 'to you (vosotros)', 'Os llamo a las cinco.'],
            ['les', 'to them, to you (ustedes)', 'Les envío los datos.'],
          ] },
          { t: 'tip', art: 'owl', md: 'With an infinitive, the pronoun can also go at the end, as one word: *¿**Le** puede decir …?* or *¿Puede decir**le** …?* Both are correct.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write me, te or le.', items: [
            { q: '¿___ da su número de teléfono, por favor? (to me)', a: ['Me'], why: '*me*: to me. It comes before the verb.' },
            { q: 'Señor Vidal, ___ paso con la señora Ortega. (to you, usted)', a: ['le'], why: '*le* is also the pronoun for *usted*.' },
            { q: 'Ana, ___ envío el número por mensaje. (to you, tú)', a: ['te'], why: '*te*: to you, for a person you call *tú*.' },
            { q: 'La jefa no está. ¿___ dejo una nota en la mesa? (to her)', a: ['Le'], why: '*le*: to her.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right sentence or word.', items: [
            { q: 'The person is not there. You offer to take a message.', o: ['¿Quiere dejarle un mensaje?', '¿Quiere colgar el teléfono?', '¿Quiere hablar con ella?'], why: '*dejar un mensaje*: to leave a message.' },
            { q: 'You say goodbye at the end of a call.', o: ['Hasta luego.', 'Dígame.', 'De parte de quién.'], why: '*Hasta luego* is a common goodbye. *Dígame* starts a call.' },
            { q: 'Lo siento, el señor Molina está ___ una reunión.', o: ['en', 'a', 'de'], why: '*estar en una reunión*: to be in a meeting.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Nota telefónica', md: '**Para:** Elena Ortega\n\n**De:** Carlos Vidal, Muebles Norte\n\n**Fecha y hora:** martes, 10:40\n\n**Mensaje:** Ha llamado y necesita hablar con usted hoy. Por favor, llámelo al 600 00 00 12.\n\n**Nota tomada por:** Sara' },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: '¿Quiere dejarle un mensaje?', why: '*Quiere* first, then the infinitive with *le* at the end.' },
            { a: 'Le doy el mensaje a las doce.', why: '*le* before the verb *doy*.' },
            { a: '¿Me puede repetir su número?', why: '*Me* before *puede*, then the infinitive *repetir*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Words for the phone.', words: [
            { a: 'llamada', clue: 'Cuando hablas por teléfono con una persona, es una …' },
            { a: 'mensaje', clue: 'La persona no está. Usted puede dejar un …' },
            { a: 'colgar', clue: 'Terminar una llamada.' },
            { a: 'extensión', clue: 'El número corto de una persona en una empresa.' },
            { a: 'móvil', clue: 'El teléfono que llevas en el bolsillo, en España.' },
            { a: 'apellido', clue: 'Vidal en Carlos Vidal.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: notes and a voicemail',
      about: 'Understand a message on your voicemail and phone notes from colleagues.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'Mensaje en el buzón de voz', md: 'Buenos días, señor Navarro, soy Aylin Demir, del Hotel Mirador de Santander. Le llamo por la reserva de la sala para el 14 de marzo. Lo siento, pero ese día la sala grande no está libre. Le puedo ofrecer la sala pequeña, para veinte personas, o la sala grande el día 15.\n\n¿Puede llamarme hoy o mañana? Mi número es el 942 00 00 31. Estoy en la oficina de nueve a dos. Gracias y hasta luego.' },
          { t: 'tip', art: 'owl', md: 'The *buzón de voz* is your voicemail. On a recorded message people often say *Le llamo por …*: I am calling about …' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the message. True, false or not given?', items: [
            { q: 'Aylin trabaja en un hotel.', a: 't', why: '*soy Aylin Demir, del Hotel Mirador*.' },
            { q: 'La sala grande está libre el 14 de marzo.', a: 'f', why: '*ese día la sala grande no está libre*.' },
            { q: 'La sala pequeña es para veinte personas.', a: 't', why: '*la sala pequeña, para veinte personas*.' },
            { q: 'Aylin está en la oficina por la tarde.', a: 'f', why: 'She is there *de nueve a dos*, in the morning.' },
            { q: 'El señor Navarro ya conoce el hotel.', a: 'ng', why: 'The message does not say this.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two dates.', items: [
            { s: 'Le llamo por la reserva de la sala para el [14] de marzo. Le puedo ofrecer la sala grande el día [15].', why: 'The meeting is planned for the 14th; the big room is free on the 15th.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Dos notas telefónicas', md: '**Para:** Ana Ruiz\n**De:** señor Lago, Talleres Lago\n**Hora:** lunes, 9:15\n**Mensaje:** Su coche ya está listo. Puede recogerlo hoy hasta las 19:00.\n\n**Para:** Ana Ruiz\n**De:** Pedro, de contabilidad\n**Hora:** lunes, 11:40\n**Mensaje:** Necesita la factura de octubre. Por favor, llama a Pedro a la extensión 305.' },
          { t: 'ex', kind: 'choice', h: 'Read the notes and choose the right answer.', items: [
            { q: '¿Qué puede hacer Ana hoy?', o: ['recoger su coche', 'pagar en el hotel', 'llamar al señor Navarro'], why: '*Puede recogerlo hoy hasta las 19:00.*' },
            { q: '¿Qué necesita Pedro?', o: ['la factura de octubre', 'el coche de Ana', 'una sala para el lunes'], why: '*Necesita la factura de octubre.*' },
            { q: '¿Por qué la segunda nota usa *llama* y no *llame*?', o: ['Pedro y Ana son compañeros y se tratan de tú.', 'Pedro es un cliente nuevo.', 'Es una nota del taller.'], why: 'Colleagues often say *tú*: *llama*. To a person you call *usted* you write *llame*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What does it mean? Match.', pairs: [
            ['la extensión', 'el número corto de una persona en la empresa'],
            ['el buzón de voz', 'donde dejas un mensaje grabado'],
            ['colgar', 'terminar una llamada'],
            ['devolver la llamada', 'llamar a una persona que te ha llamado'],
            ['estar en una reunión', 'hablar con otras personas en una sala, en el trabajo'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'You want to speak to Ms Ortega.', o: ['¿Podría hablar con la señora Ortega?', '¿Podría hablar de la señora Ortega?', '¿Podría pasar a la señora Ortega?'], why: '*hablar con* + a person.' },
      { q: 'You ask who is calling.', o: ['¿De parte de quién?', '¿Cómo se escribe?', '¿Quiere dejar un mensaje?'], why: '*¿De parte de quién?* asks for the caller’s name.' },
      { q: 'The letter *v* in Spanish is called ___.', o: ['uve', 'be', 'ele'], why: '*v* is *uve*. *b* is *be*.' },
      { q: 'You end a call politely.', o: ['Muchas gracias. Hasta luego.', 'Dígame.', 'No cuelgue.'], why: '*Hasta luego* is a polite goodbye.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Un momento, por favor, ___ paso con ella. (to you, usted)', a: ['le'], why: '*le* is the pronoun for *usted*.' },
      { q: '¿___ da su número, por favor? (to me)', a: ['Me'], why: '*me*: to me.' },
      { q: 'Lo siento, la jefa está en una ___.', a: ['reunión', 'reunion'], why: '*estar en una reunión*.' },
      { q: '¿Quiere dejar un ___?', a: ['mensaje'], why: '*dejar un mensaje*: to leave a message.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Cómo se escribe su apellido?', why: 'A useful question for names.' },
      { a: 'Le doy el mensaje mañana.', why: '*Le* before the verb *doy*.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Do you say this to a person you call usted or tú?', groups: ['usted', 'tú'], items: [
      { s: 'Te paso con Diego.', g: 1, why: '*te* is for *tú*.' },
      { s: '¿Me puede repetir su número?', g: 0, why: '*puede* and *su* go with *usted*.' },
      { s: '¿Me das tu número?', g: 1, why: '*das* and *tu* go with *tú*.' },
    ] },
  ],
};
