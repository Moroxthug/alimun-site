// Spanish B1 for study and exams, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Writing to teachers and offices',
  goal: 'Write polite, clear emails to teachers and offices.',
  art: 'mug',
  tags: { skills: ['writing', 'reading', 'grammar'], topics: ['formal-email', 'polite-requests', 'condicional', 'giving-reasons'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Formal emails',
      about: 'The parts of a formal email, and how to ask for more time or an appointment.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A formal email to a lecturer or an office has clear parts: a **subject line** (*asunto*), a **greeting**, the **reason** for writing, the **request**, a polite **ending** and your **name**. Here a student asks for more time to hand in a piece of work: in Spanish, *pedir una prórroga* or *pedir más tiempo para la entrega*.' },
          { t: 'reading', title: 'Asunto: Solicitud de prórroga para el trabajo final', md: 'Estimado profesor Ortega:\n\nSoy Aylin Demir, estudiante de su asignatura Ciudad y Migración, del grupo de la tarde. Le escribo porque no voy a poder entregar el trabajo final el 15 de marzo.\n\nHe estado enferma durante dos semanas y en ese tiempo no he podido trabajar. Si lo necesita, puedo enviarle el justificante médico.\n\n¿Sería posible tener dos semanas más para la entrega? Podría entregar el trabajo el 29 de marzo.\n\nMuchas gracias por su comprensión.\n\nAtentamente,\nAylin Demir' },
        ],
        [
          { t: 'table', caption: 'The parts of a formal email', explain: ['head', 'col0'], quiz: true, head: ['Part', 'Spanish'], rows: [
            ['greeting', 'Estimado profesor Ortega: / Estimada señora: / Estimados señores:'],
            ['who you are', 'Soy… , estudiante de su asignatura…'],
            ['the reason for writing', 'Le escribo porque… / Me dirijo a usted para…'],
            ['the request', '¿Sería posible…? / ¿Podría…? / Me gustaría…'],
            ['thanks', 'Muchas gracias por su comprensión. / Gracias de antemano.'],
            ['ending', 'Quedo a la espera de su respuesta. / Atentamente, / Un cordial saludo,'],
          ] },
          { t: 'tip', art: 'churro', md: 'In Spain many lecturers use *tú* with their students. In a first email, write with *usted*; if the lecturer answers with *tú*, you can do the same. In Latin America *Saludos cordiales* is a very common ending, and *usted* is used more often.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each part of the email with an example.', pairs: [
            ['el asunto', 'Solicitud de tutoría'],
            ['el saludo', 'Estimada profesora Gil:'],
            ['el motivo', 'Le escribo porque tengo una duda sobre el examen.'],
            ['la petición', '¿Podría recibirme el jueves por la mañana?'],
            ['la despedida', 'Atentamente,'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the words for asking for more time.', items: [
            { q: 'Quería pedirle una ___ para el trabajo final. (more time)', a: ['prórroga', 'prorroga'], why: '*una prórroga*: more time before the deadline.' },
            { q: 'No voy a poder ___ el trabajo el viernes. (hand in)', a: ['entregar'], why: '*entregar un trabajo*: to hand in a piece of work.' },
            { q: 'Puedo enviarle el ___ médico. (the doctor’s note)', a: ['justificante'], why: '*el justificante médico*: a document from a doctor that explains why you were absent.' },
            { q: 'Muchas gracias por su ___. (understanding)', a: ['comprensión', 'comprension'], why: 'A polite thank you when you ask for something: *gracias por su comprensión*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which one belongs in an email to a lecturer?', items: [
            { q: 'The greeting:', o: ['Estimada profesora Gil:', '¡Hola, guapa!', 'Querida amiga:'], why: '*Estimada* + title + name is the formal greeting. In Spain it ends with a colon.' },
            { q: 'The ending:', o: ['Atentamente,', 'Besos,', '¡Hasta luego!'], why: '*Atentamente* is the usual formal ending. The others are for friends.' },
            { q: 'The request:', o: ['¿Sería posible cambiar la fecha del examen?', '¡Cámbiame la fecha del examen!', 'Quiero otra fecha y ya está.'], why: '*¿Sería posible…?* is polite. An imperative with *tú* sounds like an order.' },
            { q: 'The subject line:', o: ['Solicitud de tutoría', 'hola', 'una cosa'], why: 'A good subject line says what the email is about.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Polite requests and reasons',
      about: 'Ask politely with the condicional and give a clear reason.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The **condicional** makes a request softer and more polite: *¿Puede…?* becomes *¿Podría…?*, *Quiero* becomes *Me gustaría*. The imperfecto *quería* is also polite: *Quería pedirle un favor.*' },
          { t: 'examples', items: [
            { s: '**¿Podría** enviarme la guía docente, por favor?', n: '*podría*: the condicional of *poder*, with *usted*.' },
            { s: '**¿Sería posible** cambiar la fecha de la exposición?', n: '*¿Sería posible* + infinitive: a very polite question.' },
            { s: '**Me gustaría** hablar con usted sobre mi nota.', n: 'Softer than *Quiero hablar…*.' },
            { s: '**Quería** pedirle una cita para la tutoría.', n: 'The imperfecto *quería* is polite here; it does not mean the past.' },
            { s: '**¿Le importaría** revisar mi esquema?', n: '*¿Le importaría* + infinitive: would you mind…?' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the condicional of poder.', verb: 'poder', tense: 'condicional', rows: [
            ['yo', 'podría'],
            ['tú', 'podrías'],
            ['él / ella / usted', 'podría'],
            ['nosotros / nosotras', 'podríamos'],
            ['vosotros / vosotras', 'podríais'],
            ['ellos / ellas / ustedes', 'podrían'],
          ] },
          { t: 'ex', kind: 'transform', h: 'Make the request more polite. Start with the words given.', items: [
            { q: 'Envíeme el horario.', cue: '¿Podría', a: ['¿Podría enviarme el horario?', '¿Podría enviarme el horario, por favor?', '¿Me podría enviar el horario?'], why: '*¿Podría* + infinitive; the pronoun *me* goes on the end of the infinitive or before *podría*.' },
            { q: 'Quiero cambiar de grupo.', cue: 'Me gustaría', a: ['Me gustaría cambiar de grupo.'], why: '*Me gustaría* + infinitive is softer than *quiero*.' },
            { q: '¿Puedo entregar el trabajo más tarde?', cue: '¿Sería posible', a: ['¿Sería posible entregar el trabajo más tarde?'], why: '*¿Sería posible* + infinitive, without *puedo*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Give one clear reason. **porque** goes in the middle of the sentence. **como** gives the reason at the **start**. **ya que** is a little more formal and can go in both places. **debido a** is followed by a noun.' },
          { t: 'examples', items: [
            { s: 'No puedo ir a la tutoría **porque** trabajo los martes.', n: '*porque* in the middle, after the main idea.' },
            { s: '**Como** trabajo los martes, no puedo ir a la tutoría.', n: '*como* at the start: first the reason, then the result.' },
            { s: 'Le escribo, **ya que** no he recibido la nota del examen.', n: '*ya que*: a little more formal than *porque*.' },
            { s: 'No pude asistir a clase **debido a** una enfermedad.', n: '*debido a* + a noun: *una enfermedad*, not a verb.' },
          ] },
          { t: 'tip', art: 'churro', md: 'Do not give too many details. One clear reason is enough: *He estado enfermo* or *Tengo un problema familiar*. If you have a document, for example a *justificante médico*, say that you can send it.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word for the reason.', items: [
            { q: '___ estuve enferma, no pude hacer el examen.', o: ['Como', 'Porque', 'Debido a'], why: 'At the start of the sentence, with a verb: *como*.' },
            { q: 'No pude terminar el trabajo ___ estuve enferma.', o: ['porque', 'como', 'debido a'], why: 'In the middle of the sentence, with a verb: *porque*.' },
            { q: 'La clase se canceló ___ la huelga de transportes.', o: ['debido a', 'como', 'porque'], why: '*la huelga* is a noun, so you need *debido a*.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the polite sentence. Two words do not belong.', items: [
            { a: '¿Podría recibirme el jueves por la mañana?', extra: ['puedes', 'quiero'], why: 'With *usted*: *podría* + infinitive with *me*.' },
            { a: 'Como trabajo por las tardes, no puedo ir.', extra: ['porque', 'debido'], why: '*Como* gives the reason at the start of the sentence.' },
            { a: 'Me gustaría cambiar la fecha de la exposición.', extra: ['gusto', 'quiere'], why: '*Me gustaría* + infinitive: a polite wish.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Emails between a student and a lecturer',
      about: 'Read an exchange of emails and see how a lecturer answers.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Read three emails: a student asks for an appointment, the lecturer answers and the student confirms. Look at the greetings and endings: they change a little when the lecturer answers in a friendlier way.' },
          { t: 'tip', art: 'churro', md: 'If a lecturer answers with *Hola, Paulo:* and *Un saludo*, you can be a little less formal too. *Estimado/a* and *Atentamente* are never wrong.' },
        ],
        [
          { t: 'reading', title: 'Cita para hablar de la exposición', md: '**Paulo a la profesora Navarro**\n\nEstimada profesora Navarro:\n\nSoy Paulo Ferreira, estudiante de su asignatura Introducción a la Sociología. El 12 de junio tengo que hacer una exposición sobre el tema «La familia hoy». Ya he leído algunos textos, pero no estoy seguro de si el esquema es bueno.\n\n¿Podría recibirme en las próximas dos semanas para hablar del esquema? Su horario de tutorías del martes coincide con mi clase de español.\n\nMuchas gracias de antemano.\n\nUn cordial saludo,\nPaulo Ferreira\n\n**La respuesta de la profesora Navarro**\n\nHola, Paulo:\n\nGracias por tu mensaje. Con mucho gusto hablamos de tu esquema. ¿Te va bien el jueves 30 de mayo a las cuatro en mi despacho (2.14)? Por favor, envíame el esquema antes, así puedo leerlo.\n\nUn saludo,\nElena Navarro\n\n**Paulo responde**\n\nHola, Elena:\n\nEl jueves a las cuatro me va muy bien. Te envío el esquema en el archivo adjunto.\n\nMuchas gracias y un saludo,\nPaulo' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the emails. True, false or not given?', items: [
            { q: 'Paulo tiene que hacer una exposición en junio.', a: 't', why: '*El 12 de junio tengo que hacer una exposición.*' },
            { q: 'Paulo no ha leído nada todavía.', a: 'f', why: '*Ya he leído algunos textos*: he has read some texts.' },
            { q: 'Paulo no puede ir a la tutoría del martes.', a: 't', why: 'The Tuesday office hour *coincide con mi clase de español*: it is at the same time.' },
            { q: 'La profesora propone una cita en su despacho.', a: 't', why: '*¿Te va bien el jueves 30 de mayo a las cuatro en mi despacho?*' },
            { q: 'La profesora quiere ver el esquema antes de la cita.', a: 't', why: '*envíame el esquema antes, así puedo leerlo*.' },
            { q: 'Paulo ya ha hecho exposiciones en otras asignaturas.', a: 'ng', why: 'The emails do not say this.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Answer the questions about the emails.', items: [
            { q: '¿Por qué Paulo responde con «Hola, Elena»?', o: ['Porque la profesora le ha escrito con tú y de forma cercana.', 'Porque Paulo no es educado.', 'Porque es su primer correo.'], why: 'The lecturer used *tú* and *Hola, Paulo*, so Paulo can follow her style.' },
            { q: '¿Dónde envía Paulo el esquema?', o: ['en un archivo adjunto', 'en el asunto', 'por correo postal'], why: '*Te envío el esquema en el archivo adjunto*: as an attachment.' },
            { q: '¿Qué significa «¿Te va bien…?»?', o: ['¿Es buena hora para ti?', '¿Estás bien de salud?', '¿Vas a ir en autobús?'], why: '*¿Te va bien el jueves?* asks if a time suits you.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the polite verb forms (condicional).', items: [
            { s: '¿[Podría] recibirme en las próximas dos semanas?', why: '*podría*: the condicional of *poder*.' },
            { s: 'Me [gustaría] hablar con usted. ¿[Sería] posible el lunes?', why: '*gustaría* and *sería*: both in the condicional.' },
            { s: '¿Le [importaría] enviarme el horario de tutorías?', why: '*importaría*: the condicional of *importar*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'A formal greeting to a lecturer:', o: ['Estimado profesor Ortega:', '¡Hola, tío!', 'Querido amigo:'], why: '*Estimado* + title + name, with a colon.' },
      { q: 'A formal ending:', o: ['Atentamente,', 'Un beso,', '¡Chao!'], why: '*Atentamente* is the usual formal ending.' },
      { q: '___ trabajo por las tardes, no puedo ir a la tutoría.', o: ['Como', 'Porque', 'Debido a'], why: 'A reason with a verb at the start of the sentence: *como*.' },
      { q: 'No pude ir a clase debido ___ una enfermedad.', o: ['a', 'que', 'de'], why: '*debido a* + a noun.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '¿___ enviarme el horario, por favor? (poder, condicional, usted)', a: ['Podría'], why: 'The condicional of *poder* with *usted*: *podría*.' },
      { q: '¿___ posible cambiar la fecha? (ser, condicional)', a: ['Sería', 'Seria'], why: '*¿Sería posible…?* is a very polite request.' },
      { q: 'Me ___ hablar con usted sobre el examen. (gustar, condicional)', a: ['gustaría', 'gustaria'], why: '*Me gustaría* + infinitive.' },
      { q: 'Quería pedirle una ___ para el trabajo. (more time)', a: ['prórroga', 'prorroga'], why: '*una prórroga*: more time before the deadline.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Make the request more polite. Start with the words given.', items: [
      { q: 'Quiero una cita.', cue: 'Me gustaría', a: ['Me gustaría tener una cita.', 'Me gustaría pedirle una cita.', 'Me gustaría pedir una cita.'], why: '*Me gustaría* + infinitive: *tener* or *pedir* una cita.' },
      { q: '¿Puede recibirme el lunes?', cue: '¿Podría', a: ['¿Podría recibirme el lunes?'], why: 'The condicional *podría* is softer than *puede*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'En España, el saludo de un correo formal termina normalmente con dos puntos.', a: 't', why: '*Estimada profesora Gil:* with a colon.' },
      { q: '«Debido a» va seguido de un verbo conjugado.', a: 'f', why: '*debido a* is followed by a noun: *debido a la huelga*.' },
    ] },
  ],
};
