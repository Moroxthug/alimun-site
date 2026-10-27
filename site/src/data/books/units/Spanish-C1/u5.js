// Spanish C1, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Formal and administrative Spanish',
  goal: 'Understand and write the Spanish of letters, contracts and official notices. Learn prepositional phrases such as en virtud de and con arreglo a, the impersonal and passive style, the verbs of administration, and the structure of a formal request and its reply.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['formal Spanish', 'administration', 'prepositional phrases', 'letters', 'requests'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'En virtud de, con arreglo a, en el marco de',
      about: 'Use the prepositional phrases of formal Spanish.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Official Spanish uses **prepositional phrases** (locuciones preposicionales) where everyday Spanish uses a clause. They keep the text short and exact. **En virtud de** means *by virtue of*: **En virtud de la ley, el contrato es válido.** **Con arreglo a** means *in accordance with*: **Con arreglo al reglamento, el plazo es de diez días.** **En el marco de** means *within the framework of*: **En el marco del proyecto, se contrató a dos personas.** **A tenor de** means *in view of*: **A tenor de los resultados, se amplía el plazo.** **Con motivo de** means *on the occasion of*: **Con motivo de la fiesta, la oficina estará cerrada.** **A fin de** means *in order to*: **A fin de evitar retrasos, envíe los documentos.** **En relación con** and **con respecto a** mean *regarding*.' },
          { t: 'table', caption: 'Formal prepositional phrases', explain: ['head', 'col1'], head: ['Phrase', 'Meaning', 'Example'], rows: [
            ['en virtud de', 'by virtue of', 'En virtud de la ley, el contrato es válido.'],
            ['con arreglo a', 'in accordance with', 'Con arreglo al reglamento, el plazo es de diez días.'],
            ['en el marco de', 'within the framework of', 'En el marco del proyecto, se contrató a dos personas.'],
            ['a tenor de', 'in view of', 'A tenor de los resultados, se amplía el plazo.'],
            ['con motivo de', 'on the occasion of', 'Con motivo de la fiesta, la oficina estará cerrada.'],
            ['a fin de', 'in order to', 'A fin de evitar retrasos, envíe los documentos.'],
            ['en relación con', 'regarding', 'En relación con su solicitud, le informamos de que …'],
          ] },
          { t: 'tip', art: 'owl', md: 'The preposition joins the article: **en virtud de la** ley, **con arreglo al** reglamento, **en el marco del** proyecto. **A fin de** is followed by the **infinitive**: **a fin de evitar retrasos**. **En relación con** is lighter than **a tenor de**. These phrases are used in the same way in **Spain** and **Latin America**, although some countries prefer **con relación a** or **de acuerdo con**. Do not write *en relación a*: the RAE prefers **en relación con**.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**En virtud de la** ley, el contrato es válido.', n: 'By virtue of.' },
            { s: '**Con arreglo al** reglamento, el plazo es de diez días.', n: 'In accordance with.' },
            { s: '**En el marco del** proyecto, se contrató a dos personas.', n: 'Within the framework of.' },
            { s: '**A fin de** evitar retrasos, envíe los documentos.', n: 'In order to.' },
            { s: '**En relación con** su solicitud, le informamos de que …', n: 'Regarding.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the phrase with its meaning.', pairs: [
            ['en virtud de', 'by virtue of'],
            ['con arreglo a', 'in accordance with'],
            ['con motivo de', 'on the occasion of'],
            ['en relación con', 'regarding'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'En ___ de la ley, el contrato es válido.', a: ['virtud'], why: '*En virtud de*.' },
            { q: 'Con ___ al reglamento, el plazo es de diez días.', a: ['arreglo'], why: '*Con arreglo a*.' },
            { q: 'En el ___ del proyecto, se contrató a dos personas.', a: ['marco'], why: '*En el marco de*.' },
            { q: 'A fin ___ evitar retrasos, envíe los documentos.', a: ['de'], why: '*A fin de* + infinitive.' },
            { q: 'Con ___ de la fiesta, la oficina estará cerrada.', a: ['motivo'], why: '*Con motivo de*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right phrase.', items: [
            { q: '___ la ley, el contrato es nulo.', o: ['En virtud de', 'En vista a', 'En parte de'], why: '*En virtud de* = by virtue of.' },
            { q: '___ su solicitud, le informamos de que fue aceptada.', o: ['En relación con', 'En relación en', 'En relacionar'], why: '*En relación con* = regarding.' },
            { q: 'A fin de ___ retrasos, envíe los documentos.', o: ['evitar', 'evitamos', 'evitando'], why: '*A fin de* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the phrase in brackets.', items: [
            { q: 'Por la fiesta, la oficina estará cerrada.', cue: 'Con motivo', a: ['Con motivo de la fiesta, la oficina estará cerrada.'], why: '*Con motivo de* + noun.' },
            { q: 'Sobre su solicitud, le informamos de que fue aceptada.', cue: 'En relación', a: ['En relación con su solicitud, le informamos de que fue aceptada.'], why: '*En relación con* + noun.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'En [virtudes] de la ley, el contrato es válido.', a: ['virtud'], why: '*En virtud de*, singular.' },
            { s: 'Con [arreglar] al reglamento, el plazo es de diez días.', a: ['arreglo'], why: '*Con arreglo a*.' },
            { s: 'A fin [para] evitar retrasos, envíe los documentos.', a: ['de'], why: '*A fin de* + infinitive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Con arreglo al reglamento, el plazo es de diez días.', why: '*Con arreglo a* + noun.' },
            { a: 'En virtud de la ley, el contrato es válido.', why: '*En virtud de* + noun.' },
            { a: 'A fin de evitar retrasos, envíe los documentos.', why: '*A fin de* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'El lenguaje de la administración',
      about: 'Understand the impersonal style and the verbs of official texts.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Official Spanish prefers the **impersonal** and the **passive** to a named person. The **passive with se** is the usual form: **Se admiten solicitudes hasta el día 30.** **Se informa de que el plazo termina hoy.** The **passive with ser** names the doer less often: **La solicitud fue estimada.** Common verbs are **solicitar** (*to apply for*), **estimar** (*to grant*), **desestimar** (*to reject*), **remitir** (*to send*), **expedir** (*to issue*) and **proceder a** (*to carry out*): **Proceda al pago antes del día 30.** People are **el solicitante** (*the applicant*) and **los interesados** (*the people concerned*). Documents are **adjuntos** (*attached*).' },
          { t: 'table', caption: 'The language of administration', explain: ['head', 'col1'], head: ['Expression', 'Meaning', 'Example'], rows: [
            ['solicitar', 'to apply for', 'El solicitante solicita un certificado.'],
            ['estimar / desestimar', 'to grant / to reject', 'La solicitud fue estimada.'],
            ['expedir', 'to issue', 'El certificado se expide en diez días.'],
            ['remitir', 'to send', 'Los documentos se remitieron ayer.'],
            ['proceder a', 'to carry out', 'Proceda al pago antes del día 30.'],
            ['se adjunta', 'attached', 'Se adjunta copia del documento.'],
            ['se admiten / se informa de que', 'passive with se', 'Se admiten solicitudes hasta el día 30.'],
          ] },
          { t: 'tip', art: 'owl', md: 'With the **passive with se**, the verb agrees with the thing: **Se admite** la solicitud, **se admiten** las solicitudes. **Informar de que** needs the preposition **de**: **Se informa de que el plazo termina hoy**. Do not drop it (*se informa que* is a common error called *queísmo*). **Proceder** is followed by **a**: **proceder al pago**. These forms are used in **Spain** and **Latin America** in official texts; **estimar** for *to grant* is more common in Spain.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Se admiten** solicitudes hasta el día 30.', n: 'The passive with *se*.' },
            { s: 'La solicitud **fue estimada**.', n: 'To grant.' },
            { s: '**Se informa de que** el plazo termina hoy.', n: 'To inform.' },
            { s: '**Proceda al** pago antes del día 30.', n: '*Proceder a*.' },
            { s: '**Se adjunta** copia del documento.', n: 'Attached.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the verb with its meaning.', pairs: [
            ['solicitar', 'to apply for'],
            ['estimar', 'to grant'],
            ['desestimar', 'to reject'],
            ['proceder a', 'to carry out'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ admiten solicitudes hasta el día 30.', a: ['Se'], why: 'The passive with *se*.' },
            { q: 'La solicitud fue ___. (to grant)', a: ['estimada'], why: '*Estimar*.' },
            { q: 'La solicitud fue ___, por falta de documentos. (to reject)', a: ['desestimada'], why: '*Desestimar*.' },
            { q: 'Proceda ___ pago antes del día 30.', a: ['al'], why: '*Proceder a* + article.' },
            { q: 'Se informa ___ que el plazo termina hoy.', a: ['de'], why: '*Informar de que*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best formal expression.', items: [
            { q: 'Which sentence is more formal?', o: ['Se admiten solicitudes hasta el día 30.', 'Nosotros admitimos solicitudes hasta el día 30.', 'Puede mandar la solicitud hasta el día 30.'], why: 'The passive with *se*.' },
            { q: 'Which verb means *to reject*?', o: ['desestimar', 'estimar', 'remitir'], why: '*Desestimar* = to reject.' },
            { q: 'Which phrase means *attached*?', o: ['se adjunta', 'se queda', 'se sigue'], why: '*Se adjunta*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it in a formal register.', items: [
            { q: 'Admitimos solicitudes hasta el día 30.', cue: 'Se admiten', a: ['Se admiten solicitudes hasta el día 30.'], why: 'The passive with *se*.' },
            { q: 'Pague antes del día 30, por favor.', cue: 'Proceda', a: ['Proceda al pago antes del día 30.'], why: '*Proceder a* + noun.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right form.', items: [
            { s: '[Se admite] solicitudes hasta el día 30.', a: ['Se admiten'], why: 'The verb agrees with the plural noun.' },
            { s: 'Proceda [del] pago antes del día 30.', a: ['al'], why: '*Proceder a* + article.' },
            { s: 'Se informa [que] el plazo termina hoy.', a: ['de que'], why: '*Informar de que*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Se admiten solicitudes hasta el día 30.', why: 'The passive with *se*.' },
            { a: 'Proceda al pago antes del día 30.', why: '*Proceder a*.' },
            { a: 'La solicitud fue estimada en mayo.', why: 'The passive with *ser*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Una solicitud y la respuesta',
      about: 'Write a formal request and a reply with the right formulas.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A formal letter starts with the **asunto** (subject line) and a salutation such as **Estimados señores** or **Estimada señora** (*Dear Sir, Madam*). It states the **reason for writing**, the **request**, and ends with a polite formula. To start: **Por la presente, solicito …** To refer to an earlier contact: **En relación con nuestra conversación telefónica del …** To ask politely: **Le ruego que me envíe …** or **Le agradecería que me enviara …** To close: **Quedo a su disposición para cualquier aclaración. Atentamente,** The office replies: **En respuesta a su solicitud de …, le informamos de que …**, **Lamentamos las molestias ocasionadas**, **Atentamente**.' },
          { t: 'table', caption: 'Formulas of a formal exchange', explain: ['head', 'col1'], head: ['Formula', 'Use'], rows: [
            ['Por la presente, solicito …', 'starting the request'],
            ['En relación con nuestra conversación del …', 'referring to an earlier contact'],
            ['Le ruego que me envíe …', 'asking politely'],
            ['Quedo a su disposición.', 'closing the request'],
            ['En respuesta a su solicitud, le informamos de que …', 'the office gives news'],
            ['Lamentamos las molestias ocasionadas.', 'the office apologises'],
            ['Atentamente', 'closing'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **Le ruego que**, the verb is in the **present subjunctive**: **Le ruego que me envíe**. After **Le agradecería que**, it is in the **imperfect subjunctive**: **Le agradecería que me enviara**. In **Latin America**, letters often end with **Cordialmente** or **Saludos cordiales**; in **Spain**, **Atentamente** and **Un cordial saludo** are the usual choices. Use **Estimados señores** when you do not know the name; with a name, write **Estimado señor Costa**.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Por la presente, solicito** un certificado de empadronamiento.', n: 'Starting the request.' },
            { s: '**En relación con** nuestra conversación telefónica, adjunto copia del documento.', n: 'Referring to an earlier contact.' },
            { s: '**Le ruego que** me envíe el certificado en formato electrónico.', n: 'A polite request.' },
            { s: '**Quedo a su disposición** para cualquier aclaración.', n: 'Closing the request.' },
            { s: '**Lamentamos las molestias** ocasionadas.', n: 'The office apologises.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Applicant or office? Sort the sentences.', groups: ['applicant', 'office'], explain: ['groups'], items: [
            { s: 'Por la presente, solicito un certificado.', g: 0, why: 'The applicant starts the request.' },
            { s: 'Le ruego que me envíe el certificado.', g: 0, why: 'The applicant asks.' },
            { s: 'Quedo a su disposición para cualquier aclaración.', g: 0, why: 'The applicant closes.' },
            { s: 'En respuesta a su solicitud, le informamos de que el certificado ha sido expedido.', g: 1, why: 'The office gives news.' },
            { s: 'Lamentamos las molestias ocasionadas.', g: 1, why: 'The office apologises.' },
            { s: 'Atentamente, el Servicio de Atención al Ciudadano.', g: 1, why: 'The office closes.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Por la ___, solicito un certificado.', a: ['presente'], why: '*Por la presente*.' },
            { q: 'En ___ con nuestra conversación telefónica, adjunto copia.', a: ['relación'], why: '*En relación con*.' },
            { q: 'Le ruego que me ___ el certificado. (enviar, presente de subjuntivo)', a: ['envíe'], why: '*Le ruego que* + present subjunctive.' },
            { q: 'Le agradecería que me ___ el certificado. (enviar, imperfecto de subjuntivo)', a: ['enviara', 'enviase'], why: '*Le agradecería que* + imperfect subjunctive.' },
            { q: 'Quedo a su ___ para cualquier aclaración.', a: ['disposición'], why: 'The fixed phrase.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the formula with its use.', pairs: [
            ['Por la presente', 'I start the request'],
            ['En relación con', 'I refer to an earlier contact'],
            ['Quedo a su disposición', 'I close the request'],
            ['Lamentamos las molestias', 'The office apologises'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence in a formal register.', items: [
            { q: 'Quiero un certificado.', cue: 'Por la presente, solicito', a: ['Por la presente, solicito un certificado.'], why: '*Por la presente, solicito*.' },
            { q: 'Envíeme el documento, por favor.', cue: 'Le ruego que', a: ['Le ruego que me envíe el documento.'], why: '*Le ruego que* + present subjunctive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right form.', items: [
            { s: 'Le ruego que me [envía] el certificado.', a: ['envíe'], why: '*Le ruego que* + present subjunctive.' },
            { s: 'Le agradecería que me [envíe] el certificado.', a: ['enviara', 'enviase'], why: 'After the condicional: imperfect subjunctive.' },
            { s: 'Lamentamos las [molestar] ocasionadas.', a: ['molestias'], why: 'We need the noun.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Por la presente, solicito un certificado.', why: 'The formal opening.' },
            { a: 'Le ruego que me envíe el documento.', why: '*Le ruego que* + subjunctive.' },
            { a: 'Lamentamos las molestias ocasionadas a todos.', why: 'The formal apology.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Una carta oficial y la respuesta',
      about: 'Read a formal request and the reply.',
      art: 'cactus',
      spreads: [
        [
          { t: 'reading', title: 'Solicitud de certificado de empadronamiento', md: 'Asunto: solicitud de certificado de empadronamiento\n\nEstimados señores:\n\npor la presente, solicito la expedición de un certificado de empadronamiento, a fin de presentar una solicitud de matrícula escolar. En relación con nuestra conversación telefónica del 5 de octubre, adjunto copia del documento de identidad. Le ruego que me envíe el certificado en formato electrónico.\n\nQuedo a su disposición para cualquier aclaración. Atentamente,\n\nLuis Navas\n\nRespuesta: Estimado señor Navas: en respuesta a su solicitud del 12 de octubre, le informamos de que el certificado ha sido expedido hoy. A causa de una incidencia técnica, el envío por vía electrónica no es posible en este momento; el documento se remitirá, por tanto, por correo ordinario, previa confirmación de su dirección. Lamentamos las molestias ocasionadas. Atentamente, el Servicio de Atención al Ciudadano.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'El solicitante pide un certificado de empadronamiento.', a: 't', why: '*Solicito la expedición de un certificado de empadronamiento.*' },
            { q: 'El solicitante ya había llamado por teléfono el 5 de octubre.', a: 't', why: '*Nuestra conversación telefónica del 5 de octubre.*' },
            { q: 'El certificado ya ha sido expedido.', a: 't', why: '*El certificado ha sido expedido hoy.*' },
            { q: 'El envío electrónico es posible.', a: 'f', why: '*No es posible en este momento.*' },
            { q: 'El documento se enviará por correo, previa confirmación de la dirección.', a: 't', why: '*Por correo ordinario, previa confirmación de su dirección.*' },
            { q: 'El solicitante tiene tres hijos.', a: 'ng', why: 'The letter does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: '¿Para qué hace falta el certificado?', o: ['Para una matrícula escolar.', 'Para abrir una cuenta.', 'Para cambiar de trabajo.'], why: '*A fin de presentar una solicitud de matrícula escolar.*' },
            { q: '¿Qué adjunta el solicitante?', o: ['Copia del documento de identidad.', 'Una fotografía.', 'Una factura.'], why: '*Adjunto copia del documento de identidad.*' },
            { q: '¿Cómo se enviará el documento?', o: ['Por correo ordinario.', 'Por vía electrónica.', 'En mano.'], why: '*Se remitirá por correo ordinario.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the formal prepositional phrases.', items: [
            { s: 'Solicito un certificado, [a fin de] presentar una matrícula. [En relación con] nuestra conversación, adjunto la copia.', why: '*A fin de* and *en relación con*.' },
            { s: '[En respuesta a] su solicitud, le informamos de que el certificado ha sido expedido.', why: '*En respuesta a*.' },
            { s: '[A causa de] una incidencia técnica, el envío no es posible; el documento se remitirá [previa] confirmación de la dirección.', why: '*A causa de* and *previa*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'En ___ con nuestra conversación telefónica, adjunto copia.', a: ['relación'], why: '*En relación con*.' },
            { q: 'Quedo a su ___ para cualquier aclaración.', a: ['disposición'], why: 'The fixed phrase.' },
            { q: 'Lamentamos las ___ ocasionadas.', a: ['molestias'], why: 'The fixed phrase.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'El documento se remitirá por correo, previa confirmación de la dirección.', why: 'The passive with *se*.' },
            { a: 'Le informamos de que el certificado ha sido expedido.', why: '*Informar de que*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '___ la ley, el contrato es válido.', o: ['En virtud de', 'En vista a', 'En parte de'], why: '*En virtud de*.' },
      { q: 'A fin ___ evitar retrasos, envíe los documentos.', o: ['de', 'para', 'en'], why: '*A fin de* + infinitive.' },
      { q: 'Le ruego que me ___ el certificado.', o: ['envíe', 'envía', 'enviará'], why: '*Le ruego que* + present subjunctive.' },
      { q: 'Se ___ solicitudes hasta el día 30.', o: ['admiten', 'admite', 'admitimos'], why: 'The passive with *se*, plural.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Por la ___, solicito un certificado.', a: ['presente'], why: 'The fixed phrase.' },
      { q: 'Proceda ___ pago antes del día 30.', a: ['al'], why: '*Proceder a* + article.' },
      { q: 'Se informa ___ que el plazo termina hoy.', a: ['de'], why: '*Informar de que*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the verb with its meaning.', pairs: [
      ['estimar', 'to grant'],
      ['desestimar', 'to reject'],
      ['solicitar', 'to apply for'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the phrase in brackets.', items: [
      { q: 'Por la fiesta, la oficina estará cerrada.', cue: 'Con motivo', a: ['Con motivo de la fiesta, la oficina estará cerrada.'], why: '*Con motivo de* + noun.' },
      { q: 'Admitimos solicitudes hasta el día 30.', cue: 'Se admiten', a: ['Se admiten solicitudes hasta el día 30.'], why: 'The passive with *se*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Le ruego que me [envía] el certificado.', a: ['envíe'], why: '*Le ruego que* + present subjunctive.' },
      { s: '[Se admite] solicitudes hasta el día 30.', a: ['Se admiten'], why: 'The verb agrees with the plural noun.' },
    ] },
  ],
};
