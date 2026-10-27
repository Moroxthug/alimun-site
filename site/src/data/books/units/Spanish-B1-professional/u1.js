// Spanish B1 for work, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Work emails',
  goal: 'Write clear, polite work emails in the right register.',
  art: 'mug',
  tags: { skills: ['writing', 'reading', 'vocabulary'], topics: ['formal-email', 'register', 'condicional-polite', 'delivery'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Opening and closing an email',
      about: 'The subject line, the greeting, the closing, and tú or usted.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'A Spanish work email has a clear frame. The **asunto** (subject line) says in a few words what the email is about. In Spain the greeting usually ends with a **colon** (*Estimada Sra. Ruiz:*), and the text starts on a new line with a **capital letter**. At the end comes a closing formula with a comma, and then your name.' },
          { t: 'table', caption: 'Opening and closing an email', explain: ['head', 'col0'], quiz: true, head: ['', 'Formal (usted)', 'Colleague (tú)'], rows: [
            ['Greeting', 'Estimada Sra. Ruiz:', 'Hola, Diego:'],
            ['First line', 'Le escribo para confirmar nuestra reunión.', 'Te escribo por lo de la reunión.'],
            ['Answering an email', 'Muchas gracias por su correo.', 'Gracias por tu mensaje.'],
            ['Asking for something', '¿Podría enviarme la factura, por favor?', '¿Me mandas la factura, por favor?'],
            ['Last line', 'Quedo a la espera de su respuesta.', '¡Hablamos!'],
            ['Closing', 'Atentamente, / Un cordial saludo,', 'Un saludo, / Un abrazo,'],
          ] },
        ],
        [
          { t: 'reading', title: 'Asunto: Reunión del 14 de marzo', md: 'Estimado Sr. Herrera:\n\nMuchas gracias por su llamada de esta mañana. Le escribo para confirmar nuestra reunión del jueves 14 de marzo, a las 10:00, en nuestra oficina de Zaragoza.\n\n¿Podría enviarme antes la lista de precios actualizada? Así nuestro equipo podrá preparar bien la reunión.\n\nQuedo a la espera de su respuesta.\n\nUn cordial saludo,\nNadia Haddad' },
          { t: 'tip', art: 'owl', md: 'Do you not know the name of the person? Write *Estimados señores:* or *A quien corresponda:*. *Sr.* and *Sra.* are short for *señor* and *señora*, and they go before the **surname**: *Estimada Sra. Ruiz*, never *Estimada Sra. Laura*.' },
        ],
        [
          { t: 'text', md: '**Tú or usted?** In many Spanish companies colleagues say *tú* to each other, also to the boss. With customers, partners and people you do not know, start with *usted*. A good rule: answer in the form the other person uses with you.' },
          { t: 'text', md: 'With *usted* the verb is in the third person, like *él* or *ella*, and *your* is *su*: *¿Puede llamarme?*, *Gracias por su correo*. With *tú*, *your* is *tu*: *Gracias por tu correo*. And *you* as an object is *le* (usted) or *te* (tú): *Le envío el contrato*, *Te envío el contrato*.' },
          { t: 'ex', kind: 'spot', h: 'Tap the formal forms (usted, su, le, and the verbs for usted).', items: [
            { s: 'Muchas gracias por [su] correo. [Le] envío los documentos el viernes.', why: '*su* (your) and *le* (to you) are the forms for *usted*.' },
            { s: 'La Sra. Pons no está hoy en la oficina, pero [puede] llamarla mañana.', why: '*puede* is the verb for *usted*. *la* in *llamarla* is Sra. Pons, not the reader.' },
          ] },
          { t: 'tip', art: 'churro', md: 'In many Latin American countries people use *usted* more at work, also with colleagues. Emails often end with *Saludos cordiales*, and for a group Latin America uses *ustedes*, never *vosotros*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best line for an email to a new customer.', items: [
            { q: 'Saludo:', o: ['Estimado Sr. Navarro:', '¡Hola, Navarro!', 'Estimado Sr. Pablo:'], why: '*Estimado* + *Sr.* + surname, and in Spain a colon at the end.' },
            { q: 'Primera línea:', o: ['Muchas gracias por su consulta.', 'Muchas gracias por tu consulta.', 'gracias por el mail!'], why: 'A new customer gets *usted*, so *su*. The text starts with a capital letter.' },
            { q: 'Despedida:', o: ['Un cordial saludo,', 'Un abrazo,', 'Besos,'], why: '*Un cordial saludo* or *Atentamente* is safe in a formal email. *Un abrazo* is for colleagues you know well.' },
            { q: 'No sabe el nombre de la persona:', o: ['Estimados señores:', 'Estimado señor o señora Pérez:', 'Hola a todos:'], why: 'A fixed formal greeting when you do not know the name.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the formal line and the line for a colleague.', pairs: [
            ['Estimada Sra. Molina:', 'Hola, Lucía:'],
            ['Muchas gracias por su correo.', 'Gracias por tu mensaje.'],
            ['¿Podría llamarme, por favor?', '¿Me llamas cuando puedas?'],
            ['Quedo a la espera de su respuesta.', '¡Hablamos!'],
            ['Atentamente,', 'Un abrazo,'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Requests, reminders and confirmations',
      about: 'Ask politely with the condicional, send a friendly reminder and confirm.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A direct request like *Envíeme el informe.* sounds hard in an email. The **condicional** makes it softer: *¿Podría…?*, *¿Sería posible…?*, *Me gustaría…*. Add *por favor*, and the request is polite.' },
          { t: 'examples', items: [
            { s: '¿**Podría** enviarme el informe antes del viernes?', n: 'The most common polite request: *podría* + infinitive.' },
            { s: '¿**Sería posible** cambiar la reunión al miércoles?', n: 'Very polite. After *sería posible* comes an infinitive.' },
            { s: '**Me gustaría** concertar una cita con usted.', n: '*me gustaría* sounds softer than *quiero*.' },
            { s: '**Le agradecería** una respuesta antes del lunes.', n: '*le agradecería* + a noun: I would be grateful for…' },
            { s: '**Tendría** una pregunta sobre el contrato.', n: '*tendría* is softer than *tengo*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'The condicional for polite requests', explain: ['head'], quiz: true, head: ['Infinitive', 'yo', 'usted / él / ella', 'vosotros', 'ustedes'], rows: [
            ['poder', 'podría', 'podría', 'podríais', 'podrían'],
            ['ser', 'sería', 'sería', 'seríais', 'serían'],
            ['gustar', 'me gustaría', 'le gustaría', 'os gustaría', 'les gustaría'],
            ['agradecer', 'agradecería', 'agradecería', 'agradeceríais', 'agradecerían'],
            ['tener', 'tendría', 'tendría', 'tendríais', 'tendrían'],
          ] },
          { t: 'tip', art: 'owl', md: 'The condicional is the infinitive + *-ía*. A few verbs change the stem, as in the future: *tener* becomes *tendr-*, *poder* becomes *podr-*, *hacer* becomes *har-*. And *yo* and *usted* have the same form: *podría*.' },
          { t: 'ex', kind: 'gap', h: 'Write the condicional.', items: [
            { q: '¿___ enviarme el presupuesto hoy, por favor? (poder, usted)', a: ['Podría', 'Podria'], why: '*poder* has the stem *podr-*: *usted podría*.' },
            { q: '¿___ posible recibir la mercancía el martes? (ser)', a: ['Sería', 'Seria'], why: '*¿Sería posible…?*: a very polite question.' },
            { q: 'Me ___ hablar con el responsable del proyecto. (gustar)', a: ['gustaría', 'gustaria'], why: '*me gustaría* + infinitive: I would like to…' },
            { q: 'Le ___ una respuesta antes del jueves. (agradecer, yo)', a: ['agradecería', 'agradeceria'], why: '*le agradecería* + noun: I would be grateful for…' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the polite form.', items: [
            { q: '¿___ mandarme otra vez la factura, por favor?', o: ['Podría', 'Sería', 'Tendría'], why: '*¿Podría…?* + infinitive is the polite request. *Sería* and *Tendría* do not go with *mandarme*.' },
            { q: '¿___ posible cambiar la fecha de la reunión?', o: ['Sería', 'Podría', 'Gustaría'], why: '*¿Sería posible…?*: the condicional of *ser*.' },
            { q: 'Me ___ recibir más información sobre el curso.', o: ['gustaría', 'podría', 'sería'], why: '*Me gustaría* + infinitive.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make the request polite. Start with the word given.', items: [
            { q: 'Envíeme el contrato.', cue: '¿Podría', a: ['¿Podría enviarme el contrato?', '¿Podría enviarme el contrato, por favor?', '¿Podría usted enviarme el contrato?'], why: '*¿Podría* + infinitive, with the pronoun on the end: *enviarme*.' },
            { q: 'Quiero hablar con la directora.', cue: 'Me gustaría', a: ['Me gustaría hablar con la directora.'], why: '*Me gustaría* is softer than *quiero*.' },
            { q: '¿Podemos cambiar la reunión al lunes?', cue: '¿Sería posible', a: ['¿Sería posible cambiar la reunión al lunes?', '¿Seria posible cambiar la reunión al lunes?'], why: '*¿Sería posible* + infinitive.' },
          ] },
        ],
        [
          { t: 'text', md: 'Sometimes nobody answers. A **reminder** (*recordatorio*) stays friendly: say what you sent and ask again. A **confirmation** (*confirmación*) repeats the important facts, such as the date, the time or the amount.' },
          { t: 'examples', items: [
            { s: '**Le recuerdo que** el plazo termina el 3 de mayo.', n: '*recordar*: to remind. *Le recuerdo que…*: I would like to remind you that…' },
            { s: '**Todavía no he recibido** respuesta a mi correo del lunes.', n: 'A neutral way to say that nobody has answered yet.' },
            { s: '**Le confirmo** nuestra cita del 12 de junio a las 9:00.', n: 'A short, formal confirmation.' },
            { s: '**Adjunto le envío** el presupuesto.', n: 'Please find attached… *Adjunto* means attached.' },
          ] },
          { t: 'ex', kind: 'match', h: 'What does the sentence do? Match.', pairs: [
            ['¿Podría enviarme la oferta?', 'una petición'],
            ['Le recuerdo que todavía no hemos recibido el pago.', 'un recordatorio'],
            ['Le confirmo la reunión del viernes.', 'una confirmación'],
            ['Muchas gracias por su rápida respuesta.', 'un agradecimiento'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'An email thread about a delivery',
      about: 'Read a short email thread between a customer and a supplier.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Asunto: Pedido 4471, fecha de entrega', md: '**De: Marta Gil**\n\nEstimado Sr. Brandt:\n\nEl 2 de octubre les hicimos un pedido de 40 sillas de oficina (número de pedido 4471). En su confirmación aparece como fecha de entrega el 16 de octubre. Hoy es 18 de octubre y, por desgracia, las sillas todavía no han llegado. Nuestros nuevos empleados empiezan el 1 de noviembre, así que necesitamos las sillas con urgencia.\n\n¿Podría decirme cuándo podemos contar con la entrega? Le agradecería una respuesta antes del lunes.\n\nAtentamente,\nMarta Gil\n\n**De: Daniel Brandt**\n\nEstimada Sra. Gil:\n\nMuchas gracias por su mensaje, y le pido disculpas por el retraso. Nuestro proveedor tuvo problemas en la fábrica y por eso no pudimos entregar a tiempo. Las sillas ya están en nuestro almacén. Podríamos llevarlas el jueves 24 de octubre, entre las 8:00 y las 12:00. ¿Le vendría bien ese día? Nuestro conductor la llamará una hora antes.\n\nComo compensación por las molestias, no le cobraremos los gastos de envío.\n\nUn cordial saludo,\nDaniel Brandt' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the emails again. True, false or not given?', items: [
            { q: 'La empresa de Marta Gil pidió 40 sillas.', a: 't', why: '*un pedido de 40 sillas de oficina*.' },
            { q: 'Las sillas llegaron a tiempo.', a: 'f', why: 'The delivery date was 16 October. On 18 October the chairs *todavía no han llegado*.' },
            { q: 'Las sillas son para los nuevos empleados.', a: 't', why: '*Nuestros nuevos empleados empiezan el 1 de noviembre.*' },
            { q: 'La empresa de Daniel Brandt fabrica las sillas.', a: 'f', why: 'A supplier, *nuestro proveedor*, had problems in the factory.' },
            { q: 'Marta Gil llamó por teléfono antes de escribir.', a: 'ng', why: 'The emails do not say if she called.' },
            { q: 'Marta Gil no tiene que pagar los gastos de envío.', a: 't', why: '*no le cobraremos los gastos de envío*: the supplier pays them.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Asunto: RE: Pedido 4471, fecha de entrega', md: 'Estimado Sr. Brandt:\n\nMuchas gracias por su rápida respuesta. El 24 de octubre nos viene bien. Le confirmo la entrega para el jueves entre las 8:00 y las 12:00. Por favor, pregunten en la recepción de la planta baja.\n\nAtentamente,\nMarta Gil' },
          { t: 'tip', art: 'owl', md: '*RE:* in the subject line means it is a reply. *RV:* (*reenviado*) means forwarded. In emails in Spanish you also often see *CC* for the people who get a copy.' },
          { t: 'ex', kind: 'match', h: 'Match the words from the emails and their meaning.', pairs: [
            ['el pedido', 'lo que un cliente compra a una empresa'],
            ['la fecha de entrega', 'el día en que llega la mercancía'],
            ['el retraso', 'Algo llega más tarde de lo previsto.'],
            ['el proveedor', 'la empresa que vende o lleva la mercancía'],
            ['los gastos de envío', 'el dinero que cuesta enviar algo'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the sentence that fits.', items: [
            { q: 'Marta Gil pregunta por la fecha de entrega:', o: ['¿Podría decirme cuándo podemos contar con la entrega?', '¿Cuándo llegan de una vez las sillas?', 'Dime cuándo llegan las sillas.'], why: 'Polite *¿Podría…?* with *usted*. The other two are rude or use *tú*.' },
            { q: 'Daniel Brandt pide perdón:', o: ['Le pido disculpas por el retraso.', 'El retraso no es nuestro problema.', 'Perdona el retraso, tío.'], why: 'Formal and polite, with *le* for *usted*.' },
            { q: 'Daniel Brandt propone un nuevo día:', o: ['¿Le vendría bien ese día?', '¿Te va bien ese día?', 'Ese día le tiene que venir bien.'], why: '*¿Le vendría bien…?*: a polite question in the condicional, with *usted*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake in each line.', items: [
            { s: 'Estimada Sra. Gil: muchas gracias por [tu] mensaje.', a: ['su'], why: 'The email uses *usted*, so *your* is *su*.' },
            { s: 'Nuestro proveedor tuvo problemas y por eso no [podimos] entregar a tiempo.', a: ['pudimos'], why: '*poder* in the indefinido: *pudimos*.' },
            { s: '¿[Puedría] decirme cuándo llegan las sillas?', a: ['Podría', 'Podria'], why: 'The condicional of *poder* is *podría*; the stem is *podr-*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Correo a una empresa. No sabe el nombre de la persona: ___', o: ['Estimados señores:', 'Hola a todos:', 'Querida empresa:'], why: 'A fixed formal greeting without a name.' },
      { q: 'Estimado Sr. Vidal: Muchas gracias por ___ correo.', o: ['su', 'tu', 'vuestro'], why: 'A formal email uses *usted*, and *your* is *su*.' },
      { q: '¿___ enviarme la lista de precios, por favor?', o: ['Podría', 'Sería', 'Tendría'], why: '*¿Podría* + infinitive?' },
      { q: 'La despedida más segura en un correo formal: ___', o: ['Atentamente,', 'Un abrazo,', 'Besos,'], why: '*Atentamente* works in almost every formal email.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Le ___ para confirmar la reunión del lunes. (escribir, yo)', a: ['escribo'], why: '*Le escribo para…*: I am writing to…' },
      { q: '¿___ posible cambiar la fecha? (ser, condicional)', a: ['Sería', 'Seria'], why: '*¿Sería posible…?*' },
      { q: 'Le ___ que el plazo termina el viernes. (recordar, yo)', a: ['recuerdo'], why: '*recordar* changes *o* to *ue*: *le recuerdo que…*' },
      { q: 'Quedo a la ___ de su respuesta.', a: ['espera'], why: '*Quedo a la espera de…*: I look forward to…' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Me gustaría hablar con el responsable.', why: '*Me gustaría* + infinitive.' },
      { a: '¿Le vendría bien el jueves por la mañana?', why: '*¿Le vendría bien* + a day?' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'En España, el saludo de un correo formal termina normalmente con dos puntos.', a: 't', why: '*Estimada Sra. Ruiz:* with a colon.' },
      { q: '«RE:» en el asunto significa que el correo es una respuesta.', a: 't', why: '*RE:* marks a reply.' },
      { q: 'Si hablas de usted, escribes «Gracias por tu correo».', a: 'f', why: 'With *usted*, *your* is *su*: *Gracias por su correo*.' },
    ] },
  ],
};
