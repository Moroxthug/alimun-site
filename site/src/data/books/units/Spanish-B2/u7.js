// Spanish B2, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'The language of reports and letters',
  goal: 'Write and understand a formal report, a complaint and a reply. Learn participle and gerund clauses, nouns in place of verbs, and the set phrases of a formal letter.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['formal writing', 'complaint', 'participle', 'gerund', 'register'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Terminado el trabajo, habiendo terminado',
      about: 'Open a sentence with a participle or a compound gerund.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'In formal writing a sentence often opens with what happened **first**. Use the **participio** with its noun, and make it **agree** with that noun: *Hecho el trabajo, nos fuimos. Terminada la reunión, salimos. Leídas las cartas, respondió.* Use **habiendo + participio** (the compound gerund) when the **subject is the same**: *Habiendo terminado el trabajo, salimos.* For the negative, put **no** before **habiendo**: *No habiendo recibido respuesta, escribí de nuevo.*' },
          { t: 'table', caption: 'Opening a sentence', explain: ['head', 'col1'], head: ['Structure', 'Meaning', 'Example'], rows: [
            ['participio + noun', 'after it was done', 'Hecho el trabajo, nos fuimos.'],
            ['participio + noun', 'after it was done', 'Terminada la reunión, salimos.'],
            ['habiendo + participio', 'having done (same subject)', 'Habiendo terminado el trabajo, salimos.'],
            ['no habiendo + participio', 'not having done', 'No habiendo recibido respuesta, escribí de nuevo.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The participio agrees with the noun that follows it: *leído el texto, leída la carta, leídos los textos, leídas las cartas*. After **habiendo**, the participio never changes: *habiendo escrito las cartas*. In speech people usually say **después de + infinitivo** or **una vez que**: *Después de terminar el trabajo, salimos.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Hecho el trabajo**, nos fuimos.', n: 'Participio agrees with *trabajo*.' },
            { s: '**Terminada la reunión**, salimos.', n: 'Participio agrees with *reunión*.' },
            { s: '**Leídas las cartas**, ella respondió.', n: 'Participio agrees with *cartas*.' },
            { s: '**Habiendo terminado** el trabajo, salimos.', n: 'Same subject.' },
            { s: '**No habiendo recibido** respuesta, escribí de nuevo.', n: 'Negative.' },
          ] },
          { t: 'dialogue', title: 'Después de la reunión', lines: [
            { who: 'Ana', s: 'Terminada la reunión, ¿vas a comer?' },
            { who: 'Pedro', s: 'Sí. Habiendo acabado el informe, tengo tiempo.' },
            { who: 'Ana', s: 'Leído el informe, el director quedó satisfecho.' },
            { who: 'Pedro', s: 'Entonces vamos a celebrarlo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ el trabajo, nos fuimos. (hacer)', a: ['Hecho'], why: 'Participio agrees with *trabajo*.' },
            { q: '___ la reunión, salimos. (terminar)', a: ['Terminada'], why: 'Participio agrees with *reunión*.' },
            { q: '___ los documentos, firmó. (leer)', a: ['Leídos'], why: 'Participio agrees with *documentos*.' },
            { q: 'Habiendo ___ el trabajo, salimos. (acabar)', a: ['acabado'], why: 'After *habiendo* the participio does not change.' },
            { q: 'No ___ recibido respuesta, escribí de nuevo. (haber)', a: ['habiendo'], why: '*No habiendo* + participio.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: '___ las cartas, ella respondió.', o: ['Leídas', 'Leídos', 'Leído'], why: 'It agrees with *cartas*.' },
            { q: '___ la puerta, salió.', o: ['Cerrada', 'Cerrado', 'Cerradas'], why: 'It agrees with *puerta*.' },
            { q: 'Habiendo ___ el trabajo, salimos.', o: ['acabado', 'acabé', 'acabar'], why: '*Habiendo* + participio.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word in brackets.', items: [
            { q: 'Después de acabar el trabajo, salimos.', cue: 'Habiendo', a: ['Habiendo acabado el trabajo, salimos.'], why: '*Habiendo* + participio.' },
            { q: 'Después de terminar la reunión, salimos.', cue: 'Terminada', a: ['Terminada la reunión, salimos.'], why: 'The participio agrees with *reunión*.' },
            { q: 'Como no recibí respuesta, escribí de nuevo.', cue: 'No habiendo', a: ['No habiendo recibido respuesta, escribí de nuevo.'], why: '*No habiendo* + participio.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '[Leído] las cartas, ella respondió.', a: ['Leídas'], why: 'It agrees with *cartas*.' },
            { s: 'Habiendo [acabé] el trabajo, salimos.', a: ['acabado'], why: '*Habiendo* + participio.' },
            { s: '[Terminado] la reunión, salimos.', a: ['Terminada'], why: 'It agrees with *reunión*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Hecho el trabajo, nos fuimos.', why: 'Participio first, then the noun.' },
            { a: 'Habiendo acabado el trabajo, salimos.', why: '*Habiendo* + participio.' },
            { a: 'Terminada la reunión, salimos.', why: 'Participio first, then the noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'The noun in place of the verb',
      about: 'Use nouns such as la entrega, el retraso and el reembolso to write in a formal register.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Formal writing prefers a **noun** to a verb. Instead of *Entregaron el producto tarde*, a report says *La entrega del producto fue tardía*. Instead of *Quiero que me reembolsen*, a letter says *Solicito el reembolso*. The common pairs are **entregar → la entrega**, **retrasar → el retraso**, **reembolsar → el reembolso**, **reclamar → la reclamación**, **pagar → el pago** and **sustituir → la sustitución**. Formal verbs such as **efectuar**, **presentar** and **solicitar** go with these nouns: *efectuar el pago, presentar una reclamación, solicitar la sustitución*.' },
          { t: 'table', caption: 'Verb and noun', explain: ['head', 'col1'], head: ['Verb', 'Noun', 'Example'], rows: [
            ['entregar', 'la entrega', 'La entrega se hizo con retraso.'],
            ['retrasar', 'el retraso', 'El retraso fue de tres días.'],
            ['reembolsar', 'el reembolso', 'Solicito el reembolso del importe pagado.'],
            ['reclamar', 'la reclamación', 'Presenté una reclamación.'],
            ['pagar', 'el pago', 'El pago se efectuó ayer.'],
            ['sustituir', 'la sustitución', 'Solicito la sustitución del producto.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Write **el retraso** (masculine) and **la entrega** (feminine); the noun keeps the gender it has. In speech people say *pagar* and *entregar*; in a letter the noun sounds more careful. Do not overuse nouns: one or two per sentence is enough.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**La entrega** se hizo con retraso.', n: 'The delivery.' },
            { s: '**El retraso** fue de tres días.', n: 'The delay.' },
            { s: 'Solicito **el reembolso** del importe pagado.', n: 'The refund.' },
            { s: 'Presenté **una reclamación**.', n: 'The complaint.' },
            { s: '**El pago** se efectuó ayer.', n: 'The payment.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Verb or noun? Sort the words.', groups: ['verb', 'noun'], explain: ['groups'], items: [
            { s: 'entregar', g: 0, why: 'A verb.' },
            { s: 'la entrega', g: 1, why: 'A noun.' },
            { s: 'retrasar', g: 0, why: 'A verb.' },
            { s: 'el retraso', g: 1, why: 'A noun.' },
            { s: 'reembolsar', g: 0, why: 'A verb.' },
            { s: 'el reembolso', g: 1, why: 'A noun.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the noun.', items: [
            { q: 'La ___ se hizo con retraso. (entregar)', a: ['entrega'], why: 'The noun of *entregar*.' },
            { q: 'El ___ fue de tres días. (retrasar)', a: ['retraso'], why: 'The noun of *retrasar*.' },
            { q: 'Solicito el ___ del importe pagado. (reembolsar)', a: ['reembolso'], why: 'The noun of *reembolsar*.' },
            { q: 'Presenté una ___. (reclamar)', a: ['reclamación'], why: 'The noun of *reclamar*.' },
            { q: 'El ___ se efectuó ayer. (pagar)', a: ['pago'], why: 'The noun of *pagar*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the verb with its noun.', pairs: [
            ['entregar', 'la entrega'],
            ['retrasar', 'el retraso'],
            ['reembolsar', 'el reembolso'],
            ['sustituir', 'la sustitución'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Which sentence is more formal?', o: ['Solicito el reembolso del importe.', 'Quiero que me devuelvan mi dinero.', 'Devuélvanme el dinero.'], why: 'The noun and *solicito* sound formal.' },
            { q: 'La ___ del producto se hizo tarde.', o: ['entrega', 'entregar', 'entregó'], why: 'After *la* we need a noun.' },
            { q: 'Presenté una ___.', o: ['reclamación', 'reclamar', 'reclamé'], why: 'After *una* we need a noun.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence in a formal register.', items: [
            { q: 'Quiero que sustituyan el producto.', cue: 'Solicito', a: ['Solicito la sustitución del producto.'], why: 'The noun of *sustituir*.' },
            { q: 'Quiero que me reembolsen el importe.', cue: 'Solicito', a: ['Solicito el reembolso del importe.'], why: 'The noun of *reembolsar*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Solicito el [reembolsar] del importe.', a: ['reembolso'], why: 'We need the noun.' },
            { s: 'Presenté una [reclamar].', a: ['reclamación'], why: 'We need the noun.' },
            { s: 'El [pagar] se efectuó ayer.', a: ['pago'], why: 'We need the noun.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Solicito el reembolso del importe pagado.', why: '*Solicitar* + noun.' },
            { a: 'La entrega se hizo con retraso.', why: 'Subject, verb, complement.' },
            { a: 'Presenté una reclamación ayer.', why: '*Presentar una reclamación*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A complaint and a reply',
      about: 'Learn the structure and set phrases of a formal complaint and of the reply.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'A complaint follows a clear order in prose. It opens with **Muy señores míos:** or **Estimados señores:**, says what is wrong, then says what you want, and closes politely. Use **Me dirijo a ustedes para reclamar …** to start, **En relación con …** to refer to an earlier contact, **Solicito …** or **Le agradecería que + imperfecto de subjuntivo** to ask, and **Quedo a la espera de su respuesta** to close the request. The company answers with **Agradecemos su mensaje**, **Le informamos de que …** and **Lamentamos las molestias ocasionadas**. Both sides end with **Atentamente,** or **Reciba un cordial saludo.**' },
          { t: 'table', caption: 'Set phrases', explain: ['head', 'col1'], head: ['Phrase', 'Use'], rows: [
            ['Muy señores míos:', 'opening a formal letter'],
            ['Me dirijo a ustedes para reclamar …', 'starting the complaint'],
            ['En relación con …', 'referring to an earlier contact'],
            ['Le agradecería que me enviara …', 'asking very politely'],
            ['Quedo a la espera de su respuesta.', 'closing the request'],
            ['Le informamos de que …', 'the company gives news'],
            ['Lamentamos las molestias ocasionadas.', 'the company apologises'],
            ['Atentamente, / Reciba un cordial saludo.', 'closing'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Latin America a formal letter often opens with **Estimado señor** or **De mi mayor consideración** and ends with **Atentamente**. **Le agradecería que me enviara** is a very polite request: the **imperfecto de subjuntivo** makes it softer than *Le agradezco que me envíe*. Keep the tone calm: say what happened and what you ask, not how angry you are.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Me dirijo a ustedes** para reclamar por el retraso.', n: 'Starting the complaint.' },
            { s: '**En relación con** nuestra conversación, le envío los documentos.', n: 'Referring to an earlier contact.' },
            { s: '**Le agradecería que** me **enviara** una respuesta.', n: 'A very polite request.' },
            { s: '**Le informamos de que** el pedido se envió hoy.', n: 'The company gives news.' },
            { s: '**Lamentamos las molestias** ocasionadas.', n: 'The company apologises.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Customer or company? Sort the sentences.', groups: ['customer', 'company'], explain: ['groups'], items: [
            { s: 'Me dirijo a ustedes para reclamar.', g: 0, why: 'The customer starts the complaint.' },
            { s: 'Solicito el reembolso del importe.', g: 0, why: 'The customer asks.' },
            { s: 'Quedo a la espera de su respuesta.', g: 0, why: 'The customer closes the request.' },
            { s: 'Lamentamos las molestias ocasionadas.', g: 1, why: 'The company apologises.' },
            { s: 'Le informamos de que el reembolso se efectuó.', g: 1, why: 'The company gives news.' },
            { s: 'Agradecemos su mensaje.', g: 1, why: 'The company thanks.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Me dirijo a ustedes ___ reclamar por el retraso.', a: ['para'], why: '*Me dirijo a ustedes para …*' },
            { q: 'En ___ con nuestra conversación, le envío los documentos.', a: ['relación'], why: '*En relación con*.' },
            { q: 'Quedo a la ___ de su respuesta.', a: ['espera'], why: '*Quedo a la espera de*.' },
            { q: 'Lamentamos las ___ ocasionadas.', a: ['molestias'], why: '*Las molestias ocasionadas*.' },
            { q: 'Le agradecería que me ___ una respuesta. (enviar)', a: ['enviara', 'enviase'], why: 'A very polite request: imperfecto de subjuntivo.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the phrase with what it does.', pairs: [
            ['Me dirijo a ustedes', 'I start a formal complaint'],
            ['En relación con', 'I refer to an earlier contact'],
            ['Quedo a la espera', 'I wait for a reply'],
            ['Lamentamos las molestias', 'The company apologises'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'You close a formal letter:', o: ['Atentamente,', 'Un beso,', 'Hasta luego,'], why: 'The formal closing.' },
            { q: 'You refer to an earlier call:', o: ['En relación con nuestra llamada,', 'Ya que llamaste,', 'Oye,'], why: 'The formal way to refer to a contact.' },
            { q: 'The company apologises:', o: ['Lamentamos las molestias ocasionadas.', 'Paciencia.', 'No es nuestro problema.'], why: 'A polite apology.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence in a formal register.', items: [
            { q: 'Escribo para reclamar.', cue: 'Me dirijo', a: ['Me dirijo a ustedes para reclamar.'], why: 'The formal opening.' },
            { q: 'Espero que respondan pronto.', cue: 'Quedo', a: ['Quedo a la espera de su respuesta.'], why: 'The formal closing of a request.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Me dirijo a ustedes [por] reclamar.', a: ['para'], why: '*Para* + infinitive shows purpose.' },
            { s: 'En [relacionar] con su mensaje, le envío los documentos.', a: ['relación'], why: 'We need the noun.' },
            { s: 'Le agradecería que me [envío] una respuesta.', a: ['enviara', 'enviase'], why: 'After *le agradecería que*: imperfecto de subjuntivo.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Me dirijo a ustedes para reclamar por el retraso.', why: 'The formal opening.' },
            { a: 'En relación con nuestra llamada, envío los documentos.', why: '*En relación con* + noun.' },
            { a: 'Quedo a la espera de su respuesta lo antes posible.', why: 'The formal closing of a request.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Una reclamación y la respuesta',
      about: 'Read a formal complaint and the company\'s answer.',
      art: 'cactus',
      spreads: [
        [
          { t: 'reading', title: 'Un pedido retrasado', md: 'Muy señores míos:\n\nMe dirijo a ustedes para reclamar por el retraso en la entrega de mi pedido, realizado el 3 de octubre. Habiendo pagado el importe total en el momento de la compra, esperaba recibirlo en el plazo indicado. No habiendo recibido ninguna información, contacté con su servicio de atención al cliente, pero el problema no se resolvió. Solicito, por tanto, la entrega inmediata del producto o el reembolso del importe pagado. Quedo a la espera de su respuesta.\n\nAtentamente,\nRubén Mata\n\nRespuesta: Estimado señor Mata:\n\nEn relación con su reclamación, le informamos de que el pedido se envió hoy. Comprobado el retraso, la empresa ha decidido ofrecerle el transporte gratuito en su próxima compra. Lamentamos las molestias ocasionadas.\n\nReciba un cordial saludo.\nAtención al Cliente' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'El cliente hizo el pedido el 3 de octubre.', a: 't', why: '*Mi pedido, realizado el 3 de octubre.*' },
            { q: 'El cliente pagó solo la mitad del importe.', a: 'f', why: '*Habiendo pagado el importe total.*' },
            { q: 'El servicio de atención resolvió el problema enseguida.', a: 'f', why: '*El problema no se resolvió.*' },
            { q: 'La empresa envió el pedido hoy.', a: 't', why: '*El pedido se envió hoy.*' },
            { q: 'La empresa va a devolver el dinero al cliente.', a: 'ng', why: 'The answer does not mention a refund.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: '¿Qué pide el cliente?', o: ['La entrega inmediata o el reembolso.', 'Un descuento.', 'Una visita.'], why: '*La entrega inmediata del producto o el reembolso.*' },
            { q: '¿Qué ofrece la empresa?', o: ['Transporte gratuito en su próxima compra.', 'Un descuento de la mitad.', 'Un producto nuevo.'], why: '*Transporte gratuito en su próxima compra.*' },
            { q: '¿Cómo termina el pedido del cliente?', o: ['Quedo a la espera de su respuesta.', 'Hasta pronto.', 'Gracias por todo.'], why: 'The formal closing of a request.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the participle and gerund clauses.', items: [
            { s: '[Habiendo pagado] el importe total, esperaba recibirlo en el plazo indicado.', why: '*Habiendo pagado*: compound gerund, same subject.' },
            { s: '[No habiendo recibido] ninguna información, contacté con su servicio.', why: '*No habiendo recibido*: negative compound gerund.' },
            { s: '[Comprobado el retraso], la empresa ha decidido ofrecer transporte gratuito.', why: 'Participle clause: *comprobado* agrees with *retraso*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Me dirijo a ustedes ___ reclamar por el retraso.', a: ['para'], why: '*Me dirijo a ustedes para …*' },
            { q: '___ el retraso, la empresa ha decidido ofrecer transporte gratuito. (comprobar)', a: ['Comprobado'], why: 'Participle agrees with *retraso*.' },
            { q: 'Lamentamos las ___ ocasionadas.', a: ['molestias'], why: '*Las molestias ocasionadas*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Me dirijo a ustedes para reclamar por el retraso en la entrega.', why: 'The formal opening.' },
            { a: 'Quedo a la espera de su respuesta lo antes posible.', why: 'The formal closing of a request.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '___ la reunión, salimos.', o: ['Terminada', 'Terminado', 'Terminadas'], why: 'It agrees with *reunión*.' },
      { q: 'Habiendo ___ el trabajo, salimos.', o: ['acabado', 'acabé', 'acabar'], why: '*Habiendo* + participio.' },
      { q: 'Which sentence is more formal?', o: ['Solicito el reembolso del importe.', 'Quiero que me devuelvan mi dinero.', 'Devuélvanme el dinero.'], why: 'The noun and *solicito* sound formal.' },
      { q: 'You close a formal letter:', o: ['Atentamente,', 'Un beso,', 'Hasta luego,'], why: 'The formal closing.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Solicito el ___ del importe pagado. (reembolsar)', a: ['reembolso'], why: 'The noun of *reembolsar*.' },
      { q: 'No ___ recibido respuesta, escribí de nuevo. (haber)', a: ['habiendo'], why: '*No habiendo* + participio.' },
      { q: 'En ___ con nuestra llamada, envío los documentos.', a: ['relación'], why: '*En relación con*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the verb with its noun.', pairs: [
      ['entregar', 'la entrega'],
      ['retrasar', 'el retraso'],
      ['reclamar', 'la reclamación'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word in brackets.', items: [
      { q: 'Después de acabar el trabajo, salimos.', cue: 'Habiendo', a: ['Habiendo acabado el trabajo, salimos.'], why: '*Habiendo* + participio.' },
      { q: 'Quiero que sustituyan el producto.', cue: 'Solicito', a: ['Solicito la sustitución del producto.'], why: 'The noun of *sustituir*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Me dirijo a ustedes [por] reclamar.', a: ['para'], why: '*Para* + infinitive shows purpose.' },
      { s: '[Leído] las cartas, ella respondió.', a: ['Leídas'], why: 'It agrees with *cartas*.' },
    ] },
  ],
};
