// Spanish C2, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Legal Spanish and plain language',
  goal: 'Read legal and formal Spanish and rewrite it in plain language. Learn legal words, why legal Spanish is dense and how to simplify it, and the language of obligations, rights and conditions.',
  art: 'cactus',
  tags: { skills: ['reading', 'writing', 'vocabulary'], topics: ['legal Spanish', 'formal words', 'plain language', 'contracts', 'obligation', 'conditions'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'El arrendatario, dicho, sin perjuicio de',
      about: 'Recognise the formal and legal words of contracts and official texts.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Legal Spanish uses words that almost nobody uses in speech. **El arrendador** is *the landlord* and **el arrendatario** *the tenant*. **El presente contrato** is *this contract*. **En lo sucesivo** means *hereinafter, from now on*. **Dicho, dicha, dichos, dichas** mean *the said*, and **el citado** means *the above-mentioned*. **A los efectos de** means *for the purposes of*. **Sin perjuicio de** means *without prejudice to, notwithstanding*. **De conformidad con** means *in accordance with*. **Vigente** means *in force*. **No obstante** means *nevertheless, despite*.' },
          { t: 'table', caption: 'Formal words and plain alternatives', explain: ['head', 'col0'], head: ['Formal', 'Plain Spanish'], rows: [
            ['el arrendatario', 'el inquilino, usted'],
            ['el arrendador', 'el propietario'],
            ['en lo sucesivo', 'a partir de ahora'],
            ['dicho / dicha', 'este / esta'],
            ['a los efectos de', 'para'],
            ['sin perjuicio de', 'aunque, además de'],
            ['de conformidad con', 'según'],
            ['vigente', 'que está en vigor'],
          ] },
        ],
        [
          { t: 'text', md: 'These words make a text precise, but heavy and hard for ordinary readers. **Dicho** and its forms agree in **gender and number** with the noun they replace: *dicho contrato*, *dicha cláusula*, *dichos empleados*, *dichas partes*. They are used only in legal texts. **Sin perjuicio de** is followed by a **noun** or an infinitive: *sin perjuicio de lo dispuesto en el artículo 5*. **Dar por** is a frequent legal link: *se da por terminado* (it is considered ended).' },
          { t: 'tip', art: 'owl', md: 'In an exam, you may be asked to **recognise** these words and **replace** them. You do not need them in everyday writing. If a clause begins with **considerando que** or **visto que**, it gives the reasons for a decision: you can read it as *puesto que*. In **Latin America**, *arrendatario* is also used, but *inquilino* is more common in everyday speech.' },
          { t: 'ex', kind: 'match', h: 'Match the formal word with its plain meaning.', pairs: [
            ['el arrendatario', 'el inquilino'],
            ['de conformidad con', 'según'],
            ['a los efectos de', 'para'],
            ['en lo sucesivo', 'a partir de ahora'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the plain Spanish version.', items: [
            { q: 'De conformidad con el artículo 4, el alquiler es pagadero por adelantado.', o: ['Según el artículo 4, el alquiler se paga por adelantado.', 'Antes del artículo 4, el alquiler se pagó.', 'Sin el artículo 4, el alquiler es gratis.'], why: '*De conformidad con* = según.' },
            { q: 'Sin perjuicio de lo anterior, el contrato sigue vigente.', o: ['Aunque lo anterior sea así, el contrato sigue en vigor.', 'Por culpa de lo anterior, el contrato termina.', 'Antes de lo anterior, el contrato empieza.'], why: '*Sin perjuicio de* = notwithstanding.' },
            { q: 'A los efectos de este contrato, se entiende por vivienda el piso alquilado.', o: ['Para este contrato, la vivienda es el piso alquilado.', 'Después de este contrato, la vivienda desaparece.', 'Contra este contrato, la vivienda es otra.'], why: '*A los efectos de* = para.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Las partes ___ firmantes están obligadas a cumplir el contrato. (the said)', a: ['dichas'], why: '*Dichas* agrees with *partes*.' },
            { q: 'La renta se pagará de ___ con el contrato. (accordance)', a: ['conformidad'], why: '*De conformidad con*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite in plain Spanish, using the word given.', items: [
            { q: 'De conformidad con el reglamento, el plazo es de diez días.', cue: 'Según', a: ['Según el reglamento, el plazo es de diez días.'], why: '*De conformidad con* = según.' },
            { q: 'A los efectos de esta ley, se considera vivienda cualquier piso.', cue: 'Para', a: ['Para esta ley, se considera vivienda cualquier piso.'], why: '*A los efectos de* = para.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Los [dicho] empleados deben firmar el registro.', a: ['dichos'], why: '*Dicho* agrees in the plural.' },
            { s: 'La [dicho] cláusula sigue en vigor.', a: ['dicha'], why: '*Cláusula* is feminine.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Del lenguaje jurídico al lenguaje claro',
      about: 'Understand why legal Spanish is dense and how to simplify a clause.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Legal Spanish is dense because of **long sentences**, **nominal style** (nouns in place of verbs), **passive forms** and the **formal words** of the first lesson. Compare: *El arrendatario deberá proceder al abono de la renta dentro del plazo de diez días contados desde la recepción de la comunicación.* In **plain language** (*lenguaje claro*): *Usted debe pagar el alquiler en los diez días siguientes a la recepción del aviso.* The plain version uses **usted**, an **active verb** (*pagar*), a **short sentence** and **common words**.' },
          { t: 'table', caption: 'From dense to plain', explain: ['head', 'col0'], head: ['Dense', 'Plain'], rows: [
            ['proceder al abono de', 'pagar'],
            ['deberá', 'debe'],
            ['dentro del plazo de diez días', 'en diez días'],
            ['queda prohibido', 'usted no puede'],
            ['en lo sucesivo denominado', 'llamado'],
            ['la resolución del contrato', 'terminar el contrato'],
          ] },
        ],
        [
          { t: 'text', md: 'The **plain language movement** (*lenguaje claro*) argues that official documents should be clear to the reader, without losing legal accuracy. Its advice: write **short sentences**, prefer **active verbs**, use **common words**, address the reader as **usted**, put the **most important information first**, and turn **nouns into verbs** (*abono → pagar*, *resolución → terminar*). It does not mean making the text childish; it means respecting the reader’s time.' },
          { t: 'tip', art: 'owl', md: 'When you rewrite, keep the **meaning** exactly the same. Change the **words** and the **structure** (passive to active, noun to verb, long to short), but not the **obligation**. If the original says the reader *must* act, the plain version must also say *usted debe*, not *usted puede*. Check the **numbers and dates**: they must not change.' },
          { t: 'ex', kind: 'match', h: 'Match the dense expression with its plain version.', pairs: [
            ['proceder al abono de', 'pagar'],
            ['queda prohibido', 'usted no puede'],
            ['la resolución del contrato', 'terminar el contrato'],
            ['dentro del plazo de diez días', 'en diez días'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which is the plain version?', items: [
            { q: 'El arrendatario deberá proceder al abono de la renta antes del día 5.', o: ['Usted debe pagar el alquiler antes del día 5.', 'El alquiler podría pagarse en una fecha sin precisar.', 'El alquiler se ha pagado antes del día 5.'], why: 'Plain: *usted*, an active verb and the same obligation.' },
            { q: 'Queda prohibida la cesión de la vivienda a terceros.', o: ['Usted no puede ceder la vivienda a otras personas.', 'Usted puede ceder la vivienda.', 'La cesión es obligatoria.'], why: 'The same prohibition in plain words.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite in plain language, starting with the words given.', items: [
            { q: 'El beneficiario deberá proceder a la devolución de la cantidad percibida.', cue: 'Usted debe', a: ['Usted debe devolver la cantidad percibida.', 'Usted debe devolver el dinero que ha recibido.'], why: 'An active verb replaces the noun phrase.' },
            { q: 'En el plazo de diez días desde la recepción del escrito, deberá contestarse.', cue: 'Usted debe', a: ['Usted debe contestar en diez días desde la recepción del escrito.', 'Usted debe contestar en los diez días siguientes a la recepción del escrito.'], why: 'The important obligation comes first.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Dense or plain?', groups: ['dense', 'plain'], explain: ['groups'], items: [
            { s: 'El arrendatario deberá proceder al abono de la renta.', g: 0, why: 'Long and nominal.' },
            { s: 'Usted debe pagar el alquiler.', g: 1, why: 'Short, active, with *usted*.' },
            { s: 'Sin perjuicio de lo dispuesto en las cláusulas precedentes…', g: 0, why: 'Legal vocabulary.' },
            { s: 'Aunque lo anterior sea así…', g: 1, why: 'Common words.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the plain version.', items: [
            { q: 'Usted ___ pagar el alquiler antes del día 5. (obligation)', a: ['debe'], why: 'The obligation stays.' },
            { q: 'Usted no ___ ceder la vivienda. (prohibition)', a: ['puede'], why: 'The prohibition stays.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Deberá, podrá, queda prohibido',
      about: 'Use the language of obligation, permission, prohibition and condition.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Contracts and rules state **obligations**, **rights**, **prohibitions** and **conditions**. **Obligation**: **deberá** (the **future** of obligation), **estará obligado a**, **tendrá que** (*El arrendatario deberá pagar la renta*). **Permission and right**: **podrá**, **tendrá derecho a**, **estará facultado para** (*El arrendatario podrá resolver el contrato*). **Prohibition**: **no podrá**, **queda prohibido**, **está prohibido** (*Queda prohibida la cesión*). **Condition**: **siempre que**, **salvo que**, **en caso de**, **de lo contrario** (*otherwise*), **a menos que**.' },
          { t: 'table', caption: 'Obligation, right, prohibition, condition', explain: ['head', 'col0'], head: ['Function', 'Phrases', 'Example'], rows: [
            ['obligation', 'deberá, estará obligado a', 'El arrendatario deberá pagar la renta mensualmente.'],
            ['right', 'podrá, tendrá derecho a', 'El arrendatario podrá resolver el contrato.'],
            ['prohibition', 'no podrá, queda prohibido', 'Queda prohibida la cesión de la vivienda.'],
            ['condition', 'siempre que, en caso de', 'El contrato se renovará siempre que no haya aviso.'],
            ['exception', 'salvo que, de lo contrario', 'El contrato dura un año, salvo que las partes acuerden otra cosa.'],
          ] },
        ],
        [
          { t: 'text', md: 'The **future** has a legal sense of **obligation** or **permission**: *deberá* and *podrá* are not predictions but rules. **Salvo que** means *unless* and takes the **subjunctive**: *salvo que las partes acuerden otra cosa*. **Siempre que** takes the **subjunctive**: *siempre que se pague la renta*. **De lo contrario** means *otherwise* and starts the consequence: *De lo contrario, el contrato será nulo.* **En caso de** is followed by a **noun** or **que + subjunctive**: *en caso de impago*, *en caso de que haya retraso*.' },
          { t: 'tip', art: 'owl', md: 'Do not confuse **deberá** (must) and **podrá** (may): a translation error here changes a legal obligation into a permission. In a contract, **deberá** and **estará obligado a** create a duty; **podrá** and **tendrá derecho a** give a choice. **No podrá** means *is not allowed to*, which is different from **no tendrá que** (*does not have to*).' },
          { t: 'ex', kind: 'sort', h: 'Obligation, right or prohibition?', groups: ['obligation', 'right', 'prohibition'], explain: ['groups'], items: [
            { s: 'El arrendatario deberá pagar la renta.', g: 0, why: '*Deberá* creates an obligation.' },
            { s: 'El arrendatario podrá resolver el contrato.', g: 1, why: '*Podrá* gives a right.' },
            { s: 'Queda prohibida la cesión de la vivienda.', g: 2, why: 'A prohibition.' },
            { s: 'El arrendador estará obligado a conservar la vivienda.', g: 0, why: '*Estará obligado a* = an obligation.' },
            { s: 'El arrendatario tendrá derecho a instalar una antena.', g: 1, why: '*Tendrá derecho a* = a right.' },
            { s: 'El arrendatario no podrá pintar las paredes.', g: 2, why: '*No podrá* = a prohibition.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'El contrato se renovará ___ no haya aviso en contra.', o: ['siempre que', 'de lo contrario', 'en caso de'], why: '*Siempre que* introduces a condition.' },
            { q: 'El contrato dura un año, ___ las partes acuerden otra cosa.', o: ['salvo que', 'siempre que', 'en caso de'], why: '*Salvo que* = unless, with the subjunctive.' },
            { q: '___ impago, el arrendador podrá resolver el contrato.', o: ['En caso de', 'Siempre que', 'Salvo que'], why: '*En caso de* + noun.' },
            { q: 'La renta debe pagarse antes del día 5; ___, el contrato quedará sin efecto.', o: ['de lo contrario', 'siempre que', 'a los efectos'], why: '*De lo contrario* = otherwise.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
            { q: 'Si no se paga la renta, el contrato será nulo.', cue: 'De lo contrario', a: ['La renta debe pagarse; de lo contrario, el contrato será nulo.', 'Debe pagarse la renta; de lo contrario, el contrato será nulo.'], why: '*De lo contrario* introduces the consequence.' },
            { q: 'El contrato dura un año, pero las partes pueden acordar otra cosa.', cue: 'salvo que', a: ['El contrato dura un año, salvo que las partes acuerden otra cosa.'], why: '*Salvo que* + subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
            { q: 'El arrendatario ___ pagar la renta mensualmente. (deber, futuro)', a: ['deberá'], why: 'The future of obligation.' },
            { q: 'Queda ___ la cesión de la vivienda. (prohibida)', a: ['prohibida'], why: 'A prohibition.' },
            { q: '___ caso de impago, el contrato se resolverá.', a: ['En'], why: '*En caso de* + noun.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'El arrendatario [podrá] pagar la renta mensualmente. (it is an obligation)', a: ['deberá', 'estará obligado a'], why: 'An obligation needs *deberá* or *estará obligado a*.' },
            { s: 'El contrato dura un año, salvo que las partes [acuerdan] otra cosa.', a: ['acuerden'], why: '*Salvo que* + subjunctive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Una cláusula y su versión clara',
      about: 'Read a contract clause and its plain-language version.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Cláusula 4: pago del alquiler', md: 'VERSIÓN JURÍDICA\n\nDe conformidad con el presente contrato, el arrendatario, en lo sucesivo «el Arrendatario», deberá proceder al abono de la renta mensual dentro del plazo de cinco días contados desde el primer día del mes. Sin perjuicio de lo dispuesto en otras cláusulas, no se admitirá aplazamiento alguno, salvo que el arrendador lo autorice por escrito. En caso de impago dentro de dicho plazo, el arrendador podrá resolver el contrato, a menos que el Arrendatario justifique un motivo legítimo. Queda prohibida la cesión de la vivienda a terceros.\n\nVERSIÓN CLARA\n\nUsted debe pagar el alquiler en los cinco primeros días del mes. No puede pagar más tarde, salvo que el propietario se lo permita por escrito. Si no paga a tiempo, el propietario puede terminar el contrato, salvo que usted tenga una buena razón. Usted no puede ceder la vivienda a otras personas.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'El arrendatario debe pagar el alquiler en los cinco primeros días del mes.', a: 't', why: '«Dentro del plazo de cinco días contados desde el primer día del mes.»' },
            { q: 'El arrendatario puede pagar más tarde sin autorización.', a: 'f', why: '«Salvo que el propietario se lo permita por escrito.»' },
            { q: 'En caso de impago, el arrendador puede resolver el contrato.', a: 't', why: '«El arrendador podrá resolver el contrato.»' },
            { q: 'El arrendatario puede ceder la vivienda a terceros.', a: 'f', why: '«Queda prohibida la cesión.»' },
            { q: 'El alquiler es de 800 euros al mes.', a: 'ng', why: 'The text gives no amount.' },
            { q: 'El arrendatario puede justificar un motivo legítimo para el retraso.', a: 't', why: '«A menos que el Arrendatario justifique un motivo legítimo.»' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does «de conformidad con el presente contrato» mean?', o: ['in accordance with this contract', 'before this contract', 'without this contract'], why: '*De conformidad con* = in accordance with.' },
            { q: 'What does «en caso de impago» mean?', o: ['in case of non-payment', 'after payment', 'because of payment'], why: '*En caso de* = in case of.' },
            { q: 'What is the plain version of «deberá proceder al abono»?', o: ['usted debe pagar', 'usted puede pagar', 'usted ha pagado'], why: 'The obligation stays, in plain words.' },
            { q: 'What does «en lo sucesivo» do?', o: ['It gives the tenant a short name for the rest of the contract.', 'It names the landlord.', 'It cancels the contract.'], why: '*En lo sucesivo* = hereinafter.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the legal words.', items: [
            { s: '[De conformidad con] el presente contrato, el arrendatario, [en lo sucesivo] «el Arrendatario», deberá pagar la renta.', why: 'Legal phrases.' },
            { s: '[Sin perjuicio de] lo dispuesto en otras cláusulas, no se admitirá aplazamiento, [salvo que] el arrendador lo autorice.', why: 'Formal words of exception.' },
            { s: 'En caso de impago dentro de [dicho] plazo, el arrendador podrá resolver el contrato.', why: '*Dicho* = the said.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'No puede pagar más tarde, ___ que el propietario se lo permita por escrito.', a: ['salvo'], why: '*Salvo que* + subjunctive.' },
            { q: 'Queda ___ la cesión de la vivienda a terceros.', a: ['prohibida'], why: 'A prohibition.' },
            { q: 'El arrendatario ___ proceder al abono de la renta.', a: ['deberá'], why: 'The future of obligation.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Usted debe pagar el alquiler en los cinco primeros días del mes.', why: 'The plain version of the first sentence.' },
            { a: 'Usted no puede ceder la vivienda a otras personas.', why: 'The plain version of the prohibition.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'De conformidad con el artículo 4… “de conformidad con” means…', o: ['según', 'contra', 'antes de'], why: '*De conformidad con* = according to.' },
      { q: 'El contrato se renovará ___ no haya aviso en contra.', o: ['siempre que', 'de lo contrario', 'en caso de'], why: '*Siempre que* introduces a condition.' },
      { q: 'El contrato dura un año, ___ las partes acuerden otra cosa.', o: ['salvo que', 'siempre que', 'en caso de'], why: '*Salvo que* + subjunctive.' },
      { q: 'Which is the plain version of «deberá proceder al abono»?', o: ['usted debe pagar', 'usted puede pagar', 'usted tendría que quizá pagar'], why: 'The obligation stays.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the formal word with its plain meaning.', pairs: [
      ['el arrendatario', 'el inquilino'],
      ['a los efectos de', 'para'],
      ['en lo sucesivo', 'a partir de ahora'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Los ___ empleados deben firmar el registro. (the said, masculine plural)', a: ['dichos'], why: '*Dichos* agrees in the plural.' },
      { q: '___ caso de impago, el arrendador podrá resolver el contrato.', a: ['En'], why: '*En caso de*.' },
      { q: 'Queda ___ la cesión de la vivienda.', a: ['prohibida'], why: 'A prohibition.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite in plain language.', items: [
      { q: 'El beneficiario deberá proceder a la devolución de la cantidad percibida.', cue: 'Usted debe', a: ['Usted debe devolver la cantidad percibida.', 'Usted debe devolver el dinero que ha recibido.'], why: 'An active verb replaces the noun phrase.' },
      { q: 'De conformidad con el reglamento, el plazo es de diez días.', cue: 'Según', a: ['Según el reglamento, el plazo es de diez días.'], why: '*De conformidad con* = según.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'La [dicho] cláusula sigue en vigor.', a: ['dicha'], why: '*Cláusula* is feminine.' },
      { s: 'El contrato dura un año, salvo que las partes [acuerdan] otra cosa.', a: ['acuerden'], why: '*Salvo que* + subjunctive.' },
    ] },
  ],
};
