// Spanish B1 for moving abroad, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Paperwork and offices',
  goal: 'Deal with offices, appointments and formal letters after you arrive.',
  art: 'owl',
  tags: { skills: ['speaking', 'reading', 'writing', 'grammar'], topics: ['offices', 'appointments', 'documents', 'formal-letter', 'subjunctive-necessity'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Appointments and documents',
      about: 'Ask for, change and cancel an appointment, and know which papers to bring.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'At many public offices you cannot just go in and wait: you need an appointment first, **la cita previa**. You usually ask for it on the office’s website or by phone. If you cannot go, change it or cancel it, so that someone else can have your time.' },
          { t: 'table', caption: 'Appointments', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['pedir cita (previa)', 'to ask for an appointment'],
            ['confirmar la cita', 'to confirm the appointment'],
            ['cambiar la cita', 'to change the appointment to another day'],
            ['anular la cita', 'to cancel the appointment'],
            ['el justificante de la cita', 'the confirmation you print or show on your phone'],
            ['la ventanilla', 'the counter where an employee helps you'],
            ['el número de turno', 'your number in the queue'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Argentina and Uruguay an appointment is often *un turno*: *sacar turno*. In Mexico and other countries people also say *hacer una cita*.' },
        ],
        [
          { t: 'dialogue', title: 'Por teléfono', lines: [
            { who: 'Funcionaria', s: 'Oficina de atención ciudadana, buenos días. ¿En qué puedo ayudarle?' },
            { who: 'Daniel', s: 'Buenos días. Tengo cita el jueves a las diez, pero ese día no puedo ir. ¿Sería posible cambiarla?' },
            { who: 'Funcionaria', s: 'Claro. ¿Me dice su nombre y su número de documento?' },
            { who: 'Daniel', s: 'Daniel Okafor, pasaporte A1234567.' },
            { who: 'Funcionaria', s: 'Muy bien. Le puedo dar el martes que viene a las doce y media. ¿Le viene bien?' },
            { who: 'Daniel', s: 'Sí, perfecto. ¿Qué documentos tengo que llevar?' },
            { who: 'Funcionaria', s: 'El pasaporte, el formulario rellenado y firmado, una foto de carné y el justificante de pago de la tasa. Traiga original y copia de todo.' },
          ] },
          { t: 'text', md: 'Offices almost always want **original y copia**: the original document and a photocopy. A **tasa** is a fee for the procedure; you often pay it at a bank or online before the appointment and bring the proof, **el justificante de pago**.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the phone call. True or false?', items: [
            { q: 'Daniel quiere anular la cita y no pedir otra.', a: 'f', why: 'He wants to change it: *¿Sería posible cambiarla?*' },
            { q: 'La nueva cita es el martes a las doce y media.', a: 't', why: '*el martes que viene a las doce y media*.' },
            { q: 'Daniel tiene que pagar la tasa en la oficina.', a: 'f', why: 'He brings the proof of payment, *el justificante de pago de la tasa*: he pays before.' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Complete with the words from the box.', extra: ['ventanilla', 'turno'], items: [
            { q: 'No puedo ir el lunes. Quiero ___ la cita para otro día.', a: 'cambiar', why: '*cambiar la cita*: move it to another day.' },
            { q: 'Ya no necesito la cita. Voy a ___ la cita.', a: 'anular', why: '*anular*: cancel.' },
            { q: 'Traiga el pasaporte original y una ___.', a: 'copia', why: '*original y copia*: the document and a photocopy.' },
            { q: 'Antes de la cita hay que pagar la ___ en el banco.', a: 'tasa', why: '*la tasa*: the fee for the procedure.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Something you bring, or something you do?', groups: ['Lo llevo', 'Lo hago'], items: [
            { s: 'el pasaporte', g: 0, why: 'A document you bring.' },
            { s: 'una foto de carné', g: 0, why: 'A small passport photo you bring.' },
            { s: 'el formulario firmado', g: 0, why: 'The filled-in form you bring.' },
            { s: 'pedir cita', g: 1, why: 'Something you do before you go.' },
            { s: 'pagar la tasa', g: 1, why: 'Something you do, often at a bank or online.' },
            { s: 'rellenar el formulario', g: 1, why: '*rellenar*: fill in. Something you do.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build sentences for the phone.', items: [
            { a: 'Me gustaría pedir cita para el padrón.', why: '*Me gustaría* + infinitive: a polite request.' },
            { a: '¿Qué documentos tengo que llevar?', why: '*tener que* + infinitive: what you must do.' },
            { a: '¿Sería posible cambiar la cita al viernes?', why: '*¿Sería posible* + infinitive? *al viernes*: to Friday.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Understanding a formal letter',
      about: 'The words of official letters, and what they ask you to do with es necesario que.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Official letters use their own words. At the top, **el asunto** says what the letter is about, and **el número de expediente** is the number of your case: write it on every answer. The most important part is often **el plazo**, the time you have to do something.' },
          { t: 'table', caption: 'Words in official letters', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['el asunto', 'what the letter is about'],
            ['el expediente', 'your file or case at the office'],
            ['la solicitud', 'your application'],
            ['el plazo', 'the time limit'],
            ['diez días hábiles', 'ten working days: not weekends or public holidays'],
            ['presentar / aportar la documentación', 'to hand in the documents'],
            ['el requerimiento', 'an official request to send something'],
            ['se archivará', 'it will be closed, the office will stop working on it'],
          ] },
        ],
        [
          { t: 'text', md: 'Letters often say what you must do with **es necesario que**, **hace falta que** or **le rogamos que** followed by the **present subjunctive**. With *usted*, the form is the same as the polite command: *presente*, *envíe*, *traiga*.' },
          { t: 'examples', items: [
            { s: '**Es necesario que** usted **presente** el contrato de trabajo.', n: '*presentar* → *presente*: -ar verbs take -e in the subjunctive.' },
            { s: '**Le rogamos que aporte** una fotocopia del pasaporte.', n: '*le rogamos que*: we ask you to. Very formal.' },
            { s: '**Hace falta que** **traiga** el original.', n: '*traer* → *traiga*, from *yo traigo*.' },
            { s: '**Es necesario** **presentar** el formulario.', n: 'Without a person, use the infinitive: no *que*.' },
          ] },
          { t: 'tip', art: 'churro', md: 'To make the *usted* subjunctive, start from the *yo* form of the present and change the vowel: *envío* → *envíe*, *hago* → *haga*, *pido* → *pida*, *tengo* → *tenga*. *Ir* is irregular: *vaya*.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Es necesario que usted ___ el formulario antes del día 15.', o: ['envíe', 'envía', 'enviar'], why: '*es necesario que* + subjunctive: *envíe*.' },
            { q: 'Le rogamos que ___ a la cita con diez minutos de antelación.', o: ['vaya', 'va', 'ir'], why: '*ir* is irregular in the subjunctive: *vaya*.' },
            { q: 'Es necesario ___ una foto de carné.', o: ['traer', 'traiga', 'trae'], why: 'No person after *es necesario*: the infinitive.' },
            { q: 'Hace falta que ___ el número de expediente en su respuesta.', o: ['indique', 'indica', 'indicar'], why: '*indicar* → *indique*: c becomes qu before e.' },
          ] },
          { t: 'ex', kind: 'wordform', h: 'Write the verb in the present subjunctive (usted).', items: [
            { q: 'Le rogamos que ___ la documentación en el plazo indicado.', base: 'presentar', a: ['presente'], why: '-ar verb: *presente*.' },
            { q: 'Es necesario que ___ cita previa en la web.', base: 'pedir', a: ['pida'], why: 'From *yo pido*: *pida*.' },
            { q: 'Hace falta que ___ el original y una copia.', base: 'tener', a: ['tenga'], why: 'From *yo tengo*: *tenga*.' },
            { q: 'Es importante que ___ el formulario a mano.', base: 'firmar', a: ['firme'], why: '-ar verb: *firme*.' },
          ] },
        ],
        [
          { t: 'text', md: 'When you answer, refer to their letter, say what you send and end politely. Useful phrases: *En respuesta a su carta del…*, *Le adjunto…* (I attach), *Quedo a la espera de su respuesta* (I look forward to your answer).' },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence. Start with the words given.', items: [
            { q: 'Tiene que enviar el certificado.', cue: 'Es necesario que', a: ['Es necesario que envíe el certificado.', 'Es necesario que usted envíe el certificado.'], why: '*es necesario que* + subjunctive: *envíe*.' },
            { q: 'Tiene que hacer una copia del contrato.', cue: 'Hace falta que', a: ['Hace falta que haga una copia del contrato.', 'Hace falta que usted haga una copia del contrato.'], why: '*hacer* → *haga*, from *yo hago*.' },
            { q: 'Por favor, venga a las nueve.', cue: 'Le rogamos que', a: ['Le rogamos que venga a las nueve.'], why: 'The command *venga* and the subjunctive *venga* are the same form.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the phrase and its place in the letter.', pairs: [
            ['Asunto:', 'el tema de la carta'],
            ['En respuesta a su carta del 3 de mayo,', 'la primera frase de su respuesta'],
            ['Le adjunto la copia del contrato.', 'lo que envía con la carta'],
            ['Quedo a la espera de su respuesta.', 'una frase amable antes de la despedida'],
            ['Atentamente,', 'la despedida formal'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A letter and the reply',
      about: 'Read a letter asking for documents and an answer that sends them.',
      art: 'parrot',
      spreads: [
        [
          { t: 'reading', title: 'Requerimiento de documentación', md: '**Asunto:** Solicitud de autorización de residencia\n**Expediente n.º:** 28/2026/004517\n\nEstimado señor Okafor:\n\nHemos recibido su solicitud del 12 de septiembre. Para continuar con el trámite, es necesario que aporte la siguiente documentación: una copia completa de su pasaporte, incluidas las páginas en blanco, y un certificado de empadronamiento con fecha de los últimos tres meses.\n\nLe rogamos que presente estos documentos en un plazo de diez días hábiles a partir del día siguiente a la recepción de esta carta. Puede hacerlo por vía electrónica en la sede de la oficina o en persona, con cita previa. Indique siempre el número de expediente.\n\nSi no presenta la documentación en el plazo indicado, se archivará su solicitud.\n\nAtentamente,\nLa Oficina de Atención al Ciudadano' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the letter. True, false or not given?', items: [
            { q: 'La oficina ya ha recibido la solicitud del señor Okafor.', a: 't', why: '*Hemos recibido su solicitud del 12 de septiembre.*' },
            { q: 'Solo tiene que enviar las páginas del pasaporte con su foto.', a: 'f', why: 'A complete copy, *incluidas las páginas en blanco*: the empty pages too.' },
            { q: 'El certificado de empadronamiento puede tener un año.', a: 'f', why: 'It must be from *los últimos tres meses*.' },
            { q: 'Los fines de semana no cuentan en el plazo.', a: 't', why: '*días hábiles* are working days, so weekends do not count.' },
            { q: 'La oficina cierra a las dos de la tarde.', a: 'ng', why: 'The letter does not give opening hours.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What happens? Choose the right answer.', items: [
            { q: 'Si el señor Okafor no envía nada en diez días hábiles, ___', o: ['la oficina deja de trabajar en su solicitud.', 'la oficina le llama por teléfono.', 'tiene que pagar otra tasa.'], why: '*se archivará su solicitud*: the case is closed.' },
            { q: 'Puede presentar los documentos ___', o: ['por internet o en persona con cita.', 'solo por correo postal.', 'solo en persona, sin cita.'], why: '*por vía electrónica … o en persona, con cita previa*.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Respuesta: Expediente n.º 28/2026/004517', md: 'Estimados señores:\n\nEn respuesta a su carta del 2 de octubre sobre mi solicitud de autorización de residencia, les adjunto la documentación que me piden: la copia completa de mi pasaporte y el certificado de empadronamiento del 6 de octubre.\n\nLes agradecería que me confirmaran la recepción de los documentos.\n\nQuedo a la espera de su respuesta.\n\nAtentamente,\nDaniel Okafor' },
          { t: 'text', md: 'Daniel writes to an office, not to one person, so he uses *Estimados señores:* and *les* (to you, plural formal). *Les agradecería que…* (I would be grateful if you…) is followed by the imperfect subjunctive, *confirmaran*: you can learn it as a fixed phrase.' },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the phrases Daniel uses to answer formally.', items: [
            { s: '[En respuesta a su carta] del 2 de octubre, [les adjunto] la documentación. [Quedo a la espera de su respuesta].', why: 'Three useful phrases for any formal answer.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build sentences for a formal answer.', items: [
            { a: 'Le adjunto una copia del pasaporte.', why: '*Le adjunto*: I attach for you. The object follows.' },
            { a: 'Indico el número de expediente en mi respuesta.', why: 'Always give the case number: *el número de expediente*.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which one does not belong in a formal letter to an office?', items: [
            { o: ['¡Un abrazo fuerte!', 'Atentamente,', 'Quedo a la espera de su respuesta.', 'Le adjunto el certificado.'], why: '*Un abrazo* is for friends and family.' },
            { o: ['Hola, ¿qué tal?', 'Estimados señores:', 'En respuesta a su carta…', 'Les agradecería que…'], why: '*Hola, ¿qué tal?* is informal.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'No puedo ir a la cita y no necesito otra. Voy a ___ la cita.', o: ['anular', 'confirmar', 'pedir'], why: '*anular*: cancel.' },
      { q: 'El tiempo que tiene para hacer algo se llama ___.', o: ['el plazo', 'el asunto', 'la tasa'], why: '*el plazo*: the time limit.' },
      { q: 'Es necesario que usted ___ el formulario.', o: ['firme', 'firma', 'firmar'], why: '*es necesario que* + subjunctive.' },
      { q: 'Diez días ___ son diez días de trabajo, sin fines de semana.', o: ['hábiles', 'previos', 'libres'], why: '*días hábiles*: working days.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Le rogamos que ___ el original y una copia. (traer)', a: ['traiga'], why: 'From *yo traigo*: *traiga*.' },
      { q: 'Es necesario que ___ cita previa. (pedir)', a: ['pida'], why: 'From *yo pido*: *pida*.' },
      { q: 'Le ___ la copia del certificado. (adjuntar, yo)', a: ['adjunto'], why: '*Le adjunto*: I attach.' },
      { q: 'Quedo a la ___ de su respuesta.', a: ['espera'], why: 'The fixed phrase *Quedo a la espera de…*' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'El número de expediente es el número de su caso en la oficina.', a: 't', why: '*el expediente*: your file at the office.' },
      { q: '*Original y copia* significa que solo lleva la fotocopia.', a: 'f', why: 'You bring both: the original and a photocopy.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Sería posible cambiar la cita al lunes?', why: 'Polite request: *¿Sería posible* + infinitive?' },
      { a: 'Es necesario que presente la documentación.', why: '*Es necesario que* + subjunctive *presente*.' },
    ] },
  ],
};
