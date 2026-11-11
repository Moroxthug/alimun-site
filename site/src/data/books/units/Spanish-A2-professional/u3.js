// Spanish A2 for work, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Emails at work',
  goal: 'Write and understand short work emails.',
  art: 'cat',
  tags: { skills: ['writing', 'reading', 'vocabulary'], topics: ['email', 'greetings', 'polite-requests', 'object-pronouns'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Greetings and endings',
      about: 'Start and end a work email in the right way.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'A work email has a subject line, the **asunto**, then a greeting, the text and an ending. The greeting depends on how well you know the person.\n\n*Estimado* and *Estimada* change with the person: **-o** for a man, **-a** for a woman, **-os** for a group or when you do not know the name.' },
          { t: 'table', caption: 'Greetings', explain: ['head', 'col0'], quiz: true, head: ['You write to …', 'Greeting'], rows: [
            ['a woman, formal', 'Estimada señora García:'],
            ['a man, formal', 'Estimado señor Ruiz:'],
            ['someone whose name you do not know', 'Estimados señores:'],
            ['a customer you know', 'Buenos días, señora García:'],
            ['a colleague you say tú to', 'Hola, Javier:'],
            ['a group of colleagues', 'Hola a todos:'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain the greeting of a letter or a formal email ends with a **colon** (:), and the next line starts with a **capital letter**: *Estimada señora García: / Muchas gracias por su correo.* In emails many people also use a comma.' },
        ],
        [
          { t: 'table', caption: 'Endings', explain: ['head', 'col1'], quiz: true, head: ['Ending', 'When you use it'], rows: [
            ['Atentamente', 'very formal, for example to an office or a new customer'],
            ['Un cordial saludo', 'formal and friendly, very common at work'],
            ['Un saludo', 'friendly, for colleagues and people you know'],
            ['Un abrazo', 'for colleagues you know well'],
          ] },
          { t: 'text', md: 'The forms of *usted* are **usted, le, su**: *Gracias por **su** correo. **Le** envío los documentos.* Unlike in some languages, they start with a small letter. *su* can mean *your* (for *usted*), but also *his* or *her*.' },
          { t: 'tip', art: 'churro', md: 'In Latin America you often read *Saludos cordiales* at the end of an email. And to write to a group, people use *ustedes* and *su*, never *vosotros* and *vuestro*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best greeting or ending.', items: [
            { q: 'You write to an office. You do not know the name.', o: ['Estimados señores:', 'Hola a todos:', 'Un saludo:'], why: 'Formal, without a name: *Estimados señores*.' },
            { q: 'You write to a new customer, Mr Brandt.', o: ['Estimado señor Brandt:', 'Estimada señor Brandt:', 'Hola, Brandt:'], why: 'For a man: *Estimado*, with *-o*.' },
            { q: 'You write to your colleague Omar. You say tú to each other.', o: ['Hola, Omar:', 'Estimado señor Omar:', 'Estimados señores:'], why: '*Estimado señor* goes with the family name and is formal. For a colleague: *Hola, Omar*.' },
            { q: 'The end of an email to a new customer:', o: ['Atentamente', 'Un abrazo', 'Hasta luego'], why: 'The usual very formal ending.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the greetings and the ending.', items: [
            { q: '___ señora Ruiz: (estimado)', a: ['Estimada'], why: 'For a woman: *Estimada*.' },
            { q: '___ señor Navarro: (estimado)', a: ['Estimado'], why: 'For a man: *Estimado*.' },
            { q: 'Hola a ___:', a: ['todos', 'todas'], why: 'To a group: *Hola a todos*. A group of only women: *Hola a todas*.' },
            { q: 'Un cordial ___', a: ['saludo'], why: 'A common ending at work: *Un cordial saludo*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap all the forms of usted.', items: [
            { s: 'Muchas gracias por [su] correo. [Le] envío los documentos mañana.', why: '*su* (your) and *le* (to you) are forms of *usted*.' },
            { s: '¿Puede [usted] enviarme [su] número de teléfono?', why: '*usted* and *su* are forms of *usted*. *enviarme* means *send to me*.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which one is not an ending?', items: [
            { o: ['Estimados señores', 'Atentamente', 'Un saludo', 'Un abrazo'], why: '*Estimados señores* is a greeting. The others end an email.' },
            { o: ['Hola, Javier', 'Un cordial saludo', 'Saludos cordiales', 'Atentamente'], why: '*Hola, Javier* starts an email.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Asking and answering',
      about: 'Ask for something in an email and answer a request politely.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'To ask for something politely, use **¿Puede …?** or the softer **¿Podría …?**, often with *por favor*. Then comes the infinitive: *¿Podría **enviar** el plan?*\n\nThe pronoun can go before *puede* or at the end of the infinitive: ***¿Me** puede enviar el plan?* = *¿Puede enviar**me** el plan?*' },
          { t: 'examples', items: [
            { s: '¿**Me** puede enviar la factura, por favor?', n: '*me*: to me. It comes before *puede*.' },
            { s: '¿**Podría** llamar**me** mañana?', n: '*Podría* is softer and more polite than *Puede*. Here *me* goes at the end of *llamar*.' },
            { s: 'Necesito los datos **antes del** viernes.', n: '*antes del viernes*: before Friday.' },
            { s: '**Le** envío el informe en el archivo adjunto.', n: '*le*: to you (*usted*). *el archivo adjunto*: the file attached to the email.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Podría* is a form of *poder* that makes a request softer. You do not need to learn the whole tense now: use *¿Podría …?* for one person and *¿Podrían …?* for a company or a group.' },
        ],
        [
          { t: 'table', caption: 'Answering an email', explain: ['head', 'col0'], head: ['You want to …', 'You write …'], rows: [
            ['say thank you', 'Muchas gracias por su correo.'],
            ['say yes', 'Con mucho gusto le envío los documentos.'],
            ['send a file', 'Le envío el plan en el archivo adjunto.'],
            ['say no politely', 'Lo siento, pero no puedo enviarle los datos hasta el lunes.'],
            ['offer more help', 'Si tiene alguna pregunta, puede llamarme.'],
            ['hope for an answer', 'Quedo a la espera de su respuesta.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: '¿___ puede enviar la lista, por favor? (to me)', a: ['Me'], why: '*me*: to me. It comes before *puede*.' },
            { q: '¿___ ayudarme, por favor? (poder, the softer form)', a: ['Podría', 'Podria'], why: '*¿Podría …?* is softer than *¿Puede …?*' },
            { q: 'Muchas gracias ___ su correo.', a: ['por'], why: '*gracias por* + the thing you thank for.' },
            { q: 'Quedo a la ___ de su respuesta.', a: ['espera'], why: '*Quedo a la espera*: I am waiting for, a formal last line.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Put the pronoun at the end of the infinitive.', items: [
            { q: '¿Me puede enviar la factura?', cue: '¿Puede', a: ['¿Puede enviarme la factura?'], why: 'The pronoun can join the end of the infinitive: *enviarme*.' },
            { q: '¿Me puede llamar mañana?', cue: '¿Puede', a: ['¿Puede llamarme mañana?'], why: '*llamar* + *me* = *llamarme*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'build', h: 'Build the sentences. Some words do not belong.', items: [
            { a: '¿Me puede enviar el plan?', extra: ['a', 'mi'], why: '*Me* before *puede*, then the infinitive and the thing.' },
            { a: 'Quedo a la espera de su respuesta.', extra: ['tu', 'por'], why: 'To a person you call *usted*: *su respuesta*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you write?', items: [
            { q: 'Your boss wants the report today. You can only send it tomorrow.', o: ['Lo siento, pero no puedo enviarle el informe hasta mañana.', 'Con mucho gusto le envío el informe hoy.', 'No le envío el informe.'], why: '*Lo siento, pero … hasta mañana*: a polite no, with a new time.' },
            { q: 'You send a file with the email.', o: ['Le envío la lista en el archivo adjunto.', 'Quedo a la espera de la lista.', 'Si tiene alguna pregunta, la lista.'], why: '*el archivo adjunto*: the file attached to the email.' },
            { q: 'A customer has written to you. Your first line:', o: ['Muchas gracias por su correo.', 'Muchas gracias por tu correo, chao.', 'Hola a todos.'], why: 'To a customer: *su*, polite. *chao* is too informal.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: three work emails',
      about: 'Read a message from a colleague, a request from a customer and a reply.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Correo 1', md: '**Asunto:** Impresora de la segunda planta\n\nHola, Omar:\n\nLa impresora de la segunda planta no funciona otra vez. ¿Puedes llamar al técnico, por favor? Hoy no tengo tiempo, estoy todo el día con un cliente.\n\nGracias y un saludo,\nCarla' },
          { t: 'reading', title: 'Correo 2', md: '**Asunto:** Presupuesto para muebles de oficina\n\nEstimados señores:\n\nEn mayo nos cambiamos a una oficina nueva y necesitamos diez mesas y diez sillas. ¿Podrían enviarme un presupuesto, por favor? Necesitamos los muebles antes del 20 de abril.\n\nAtentamente,\nRosa Vega\nVega Asesores' },
        ],
        [
          { t: 'reading', title: 'Correo 3', md: '**Asunto:** RE: Presupuesto para muebles de oficina\n\nEstimada señora Vega:\n\nMuchas gracias por su consulta. Le envío nuestro presupuesto en el archivo adjunto. Lo siento, pero las sillas no llegan hasta el 25 de abril. Las mesas sí podemos entregarlas el 15 de abril.\n\nSi tiene alguna pregunta, puede llamarme.\n\nUn cordial saludo,\nMarco Bianchi' },
          { t: 'tip', art: 'owl', md: '*RE:* in the subject line means the email is a reply. *RV:* (*reenviado*) or *Fwd:* means someone forwarded the email.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the three emails. True, false or not given?', items: [
            { q: 'Carla pide ayuda a Omar con la impresora.', a: 't', why: '*¿Puedes llamar al técnico, por favor?*' },
            { q: 'Carla está hoy en la oficina.', a: 'f', why: '*estoy todo el día con un cliente*.' },
            { q: 'Rosa Vega conoce el nombre de la persona de la tienda de muebles.', a: 'f', why: 'She writes *Estimados señores*, so she does not know the name.' },
            { q: 'Marco Bianchi envía el presupuesto con el correo.', a: 't', why: '*Le envío nuestro presupuesto en el archivo adjunto.*' },
            { q: 'Las sillas llegan antes del 20 de abril.', a: 'f', why: 'The chairs only come *el 25 de abril*.' },
            { q: 'Rosa Vega ya compró muebles en esta empresa.', a: 'ng', why: 'The emails do not say this.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['el asunto', 'el tema del correo'],
            ['el archivo adjunto', 'un documento que va con el correo'],
            ['RE:', 'Es una respuesta.'],
            ['la consulta', 'una pregunta a una empresa, por ejemplo sobre el precio'],
            ['el presupuesto', 'el precio y la información de la empresa'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Por qué Carla escribe *tú* a Omar?', o: ['Omar es su compañero.', 'Omar es un cliente nuevo.', 'Omar trabaja en una oficina pública.'], why: 'Colleagues usually say *tú* to each other. To a new customer or an office you write *usted*.' },
            { q: '¿Qué puede entregar la empresa el 15 de abril?', o: ['las mesas', 'las sillas', 'la impresora'], why: '*Las mesas sí podemos entregarlas el 15 de abril.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'A formal email to Mr Fernández:', o: ['Estimado señor Fernández:', 'Estimada señor Fernández:', 'Hola, Fernández:'], why: 'For a man: *Estimado señor* + family name.' },
      { q: 'The subject line of an email is the ___.', o: ['asunto', 'archivo adjunto', 'presupuesto'], why: '*el asunto*: the subject.' },
      { q: '¿___ enviarme la factura, por favor?', o: ['Podría', 'Podrías usted', 'Puedo'], why: 'With *usted*: *¿Podría …?* or *¿Puede …?*' },
      { q: 'You do not know who will read the email. You write:', o: ['Estimados señores:', 'Un abrazo:', 'Hola, señor:'], why: 'The formal greeting without a name.' },
      { q: 'A friendly ending for a colleague:', o: ['Un saludo', 'Estimado saludo', 'Atentamente saludo'], why: '*Un saludo* is friendly. *Atentamente* stands alone.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the email.', items: [
      { q: '___ señora Adeyemi: (estimado)', a: ['Estimada'], why: 'For a woman: *Estimada*.' },
      { q: 'Muchas gracias por ___ correo. (usted)', a: ['su'], why: 'The *usted* form of *your*: *su*.' },
      { q: 'Le envío los documentos en el archivo ___.', a: ['adjunto'], why: '*el archivo adjunto*: the file attached to the email.' },
      { q: 'Lo siento, pero no ___ contestar hasta el lunes. (poder, yo)', a: ['puedo'], why: '*yo puedo*, then the infinitive *contestar*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Me puede enviar la lista?', why: '*Me* before *puede*, then the infinitive.' },
      { a: 'Muchas gracias por su consulta.', why: '*gracias por* + the thing.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the forms of usted.', items: [
      { s: 'Con mucho gusto [le] envío el plan. Si tiene alguna pregunta, [usted] puede llamarme.', why: '*le* and *usted* are forms for a person you call *usted*.' },
    ] },
  ],
};
