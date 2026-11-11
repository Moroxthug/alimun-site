// Spanish C2, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Subtle grammar',
  goal: 'Use the finer points of Spanish grammar with confidence. Learn the many uses of se, absolute and non-finite constructions, and the mood after quizá, tal vez, a lo mejor, como si and aunque.',
  art: 'cat',
  tags: { skills: ['grammar', 'reading', 'writing'], topics: ['se', 'accidental se', 'absolute constructions', 'gerund', 'participle', 'subjunctive', 'quizá'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Se me cayó, se venden, se comió',
      about: 'Distinguish the many uses of se.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: '**Se** has several functions, and the context decides. **Reflexive**: *Ella se lava las manos.* **Reciprocal**: *Se abrazaron.* **Passive**: *Se venden pisos* (apartments are sold). **Impersonal**: *Se vive bien aquí* (one lives well here). **Accidental or unplanned** (the thing happens to you): *Se me cayó el vaso* (I dropped the glass), *Se nos olvidó la llave* (we forgot the key), *Se le rompió el móvil* (his phone broke). **Dative of interest**: *Se comió toda la tarta* (he ate the whole cake, with relish).' },
          { t: 'table', caption: 'Uses of se', explain: ['head', 'col0'], head: ['Use', 'Example', 'Meaning'], rows: [
            ['reflexive', 'Ella se lava las manos.', 'she washes her hands'],
            ['reciprocal', 'Se abrazaron.', 'they hugged each other'],
            ['passive', 'Se venden pisos.', 'apartments are sold'],
            ['impersonal', 'Se vive bien aquí.', 'one lives well here'],
            ['accidental', 'Se me cayó el vaso.', 'I dropped the glass (by accident)'],
            ['dative of interest', 'Se comió toda la tarta.', 'he ate the whole cake'],
          ] },
        ],
        [
          { t: 'text', md: 'The **accidental** *se* has a fixed pattern: **se + indirect pronoun + verb + thing** (the verb agrees with the thing): *Se me cayó el vaso* (singular), *Se me cayeron los vasos* (plural). It presents the event as **not intended**, so the speaker is not to blame: *Se me olvidó* is softer than *Olvidé*. It is used with verbs of falling, breaking, forgetting and losing: **caer, romper, olvidar, perder, acabar, ocurrir**. A passive *se* with a **person** needs *a*: *Se busca a los culpables* or *Se buscan culpables*.' },
          { t: 'tip', art: 'owl', md: 'The verb agrees with the **thing**, not the person: *Se me perdieron las llaves*, not *Se me perdió las llaves*. In **Latin America**, the accidental *se* is just as common. Do not translate English *I forgot my keys* word for word every time: *Se me olvidaron las llaves* is more natural than *Olvidé mis llaves* when the loss was not intended.' },
          { t: 'ex', kind: 'choice', h: 'Which use of se is it?', items: [
            { q: 'Se me cayó el vaso.', o: ['accidental', 'reflexive', 'reciprocal'], why: 'The event happened to the speaker, not intended.' },
            { q: 'Se venden pisos.', o: ['passive', 'reflexive', 'accidental'], why: 'The things are sold: a passive with *se*.' },
            { q: 'Se abrazaron al despedirse.', o: ['reciprocal', 'passive', 'impersonal'], why: 'Each hugged the other.' },
            { q: 'Se vive muy bien en esta ciudad.', o: ['impersonal', 'reflexive', 'accidental'], why: 'No specific subject: one lives.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Se me ___ las llaves. (perder, plural, indefinido)', a: ['perdieron'], why: 'The verb agrees with *las llaves*.' },
            { q: 'Se nos ___ la reunión. (olvidar, indefinido)', a: ['olvidó'], why: 'The verb agrees with *la reunión*.' },
            { q: 'Se ___ pisos en el centro. (vender, presente)', a: ['venden'], why: 'The passive *se* agrees with *pisos*.' },
            { q: 'Se le ___ el móvil. (romper, indefinido)', a: ['rompió'], why: 'The verb agrees with *el móvil*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say it as an accident, with se, using the words given.', items: [
            { q: 'Olvidé las llaves en casa.', cue: 'Se me', a: ['Se me olvidaron las llaves en casa.'], why: 'The accidental *se* with agreement.' },
            { q: 'Ella rompió el vaso sin querer.', cue: 'Se le', a: ['Se le rompió el vaso.', 'Se le rompió el vaso sin querer.'], why: 'The accidental *se*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Se me [perdió] las llaves.', a: ['perdieron'], why: 'The verb agrees with *las llaves*.' },
            { s: 'Se [vende] pisos en el centro.', a: ['venden'], why: 'The passive *se* agrees with *pisos*.' },
            { s: 'Se nos [olvidaron] la reunión.', a: ['olvidó'], why: 'The verb agrees with *la reunión*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Intended or accidental?', groups: ['intended', 'accidental'], explain: ['groups'], items: [
            { s: 'Rompió el vaso de un golpe.', g: 0, why: 'A deliberate action.' },
            { s: 'Se le rompió el vaso.', g: 1, why: 'The accidental *se*.' },
            { s: 'Olvidé la cita porque no me importaba.', g: 0, why: 'Presented as deliberate.' },
            { s: 'Se me olvidó la cita.', g: 1, why: 'The accidental *se*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Terminada la reunión, nos fuimos',
      about: 'Use absolute and non-finite constructions for a compact style.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'An **absolute construction** is a phrase with its **own subject**, separate from the subject of the main clause. It gives time, cause or condition in a compact form. With a **participle**: *Terminada la reunión, nos fuimos.* (= When the meeting was over.) *Hecho esto, salió.* With a **gerund**: *El tiempo permitiéndolo, saldremos mañana.* (= If the weather permits.) *Siendo así, no hay nada que decir.* Common fixed forms: **dicho esto** (that said), **bien mirado** (all things considered), **dadas las circunstancias** (given the circumstances).' },
          { t: 'table', caption: 'Absolute constructions', explain: ['head', 'col0'], head: ['Construction', 'Meaning', 'Example'], rows: [
            ['noun + participle', 'time', 'Terminada la reunión, nos fuimos.'],
            ['noun + gerund', 'condition or cause', 'El tiempo permitiéndolo, saldremos mañana.'],
            ['pronoun + participle', 'time', 'Hecho esto, salió.'],
            ['dicho esto', 'summing up', 'Dicho esto, pasemos al siguiente punto.'],
            ['dadas las circunstancias', 'given that', 'Dadas las circunstancias, no podemos esperar.'],
          ] },
        ],
        [
          { t: 'text', md: 'Subordinate clauses can also be **reduced** to a participle or a gerund when the subject is the **same** as in the main clause: *Cansada, siguió trabajando.* (= Aunque estaba cansada.) *Preguntado por la prensa, el ministro no respondió.* *Una vez dentro, cerraron la puerta.* *Viendo la lluvia, nos quedamos en casa.* The participle is **passive** in sense, the gerund is **active** and **simultaneous**: *Preguntado* (when asked), *preguntando* (while asking).' },
          { t: 'tip', art: 'owl', md: 'In a reduced clause, the **understood subject** must be the same as the subject of the main clause; otherwise the sentence is faulty: *Cansada, el trabajo continuó* wrongly suggests that the work was tired. In an absolute construction, the **two subjects differ** on purpose: *Terminada la reunión, nos fuimos.* The participle **agrees** with its noun: *terminada la reunión*, *terminados los exámenes*. Use these structures in writing, rarely in speech.' },
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: '___ la reunión, los asistentes se marcharon.', o: ['Terminada', 'Terminado', 'Terminando'], why: 'The participle agrees with *la reunión*.' },
            { q: '___ los exámenes, los alumnos celebraron.', o: ['Terminados', 'Terminadas', 'Terminado'], why: 'The participle agrees with *los exámenes*.' },
            { q: 'El tiempo ___, saldremos mañana.', o: ['permitiéndolo', 'permitiendo', 'permitido'], why: 'An absolute gerund with a pronoun: *permitiéndolo*.' },
            { q: '___ por la prensa, el ministro no respondió.', o: ['Preguntado', 'Preguntando', 'Preguntar'], why: 'Passive sense: *when asked*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with a compact construction, using the words given.', items: [
            { q: 'Cuando la reunión terminó, nos fuimos.', cue: 'Terminada', a: ['Terminada la reunión, nos fuimos.'], why: 'An absolute participle.' },
            { q: 'Si el tiempo lo permite, saldremos mañana.', cue: 'El tiempo', a: ['El tiempo permitiéndolo, saldremos mañana.'], why: 'An absolute gerund.' },
            { q: 'Aunque estaba cansada, siguió trabajando.', cue: 'Cansada', a: ['Cansada, siguió trabajando.'], why: 'A reduced clause.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the structure with its use.', pairs: [
            ['terminada la reunión', 'absolute participle: time'],
            ['el tiempo permitiéndolo', 'absolute gerund: condition'],
            ['dicho esto', 'fixed phrase: that said'],
            ['viendo la lluvia', 'gerund: cause, same subject'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the faulty sentence.', items: [
            { s: '[Cansada, el trabajo continuó] hasta la noche.', a: ['Cansada, siguió trabajando', 'Cansada, ella siguió trabajando'], why: 'The understood subject of *cansada* must be a person.' },
            { s: '[Terminado] los exámenes, los alumnos celebraron.', a: ['Terminados'], why: 'The participle agrees with *los exámenes*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Quizá, a lo mejor, como si',
      about: 'Choose the mood after expressions of doubt, possibility and comparison.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Expressions of **possibility** show different degrees of doubt, and the mood follows. **Quizá(s)**, **tal vez** and **acaso** take the **subjunctive** when the speaker is doubtful, and the indicative when more sure: *Quizá venga mañana.* *Quizá viene mañana.* **A lo mejor** takes only the **indicative**: *A lo mejor viene mañana.* **Posiblemente** and **probablemente** take either, with the subjunctive showing more doubt. **Ojalá** takes the subjunctive: *Ojalá llueva.* With **como si**, the imperfect or pluperfect subjunctive is used: *Habla como si lo supiera todo.* *Parece como si hubiera llorado.*' },
          { t: 'table', caption: 'Mood and possibility', explain: ['head', 'col0'], head: ['Expression', 'Mood', 'Example'], rows: [
            ['quizá, tal vez, acaso', 'subjunctive (more doubt) or indicative', 'Quizá venga mañana. / Quizá viene mañana.'],
            ['a lo mejor', 'indicative only', 'A lo mejor viene mañana.'],
            ['posiblemente, probablemente', 'either', 'Probablemente venga. / Probablemente vendrá.'],
            ['ojalá', 'subjunctive', 'Ojalá llueva.'],
            ['como si', 'imperfect or pluperfect subjunctive', 'Habla como si lo supiera todo.'],
          ] },
        ],
        [
          { t: 'text', md: '**Aunque** takes the **indicative** for a fact that the speaker accepts and the **subjunctive** for a hypothetical or irrelevant objection: *Aunque llueve, salimos* (it is raining, but we go out). *Aunque llueva, saldremos* (even if it rains, we will go out). The difference is about **certainty**, not time. A common mistake is to use the subjunctive after **a lo mejor**: *A lo mejor venga* is wrong. Similarly, **como si** never takes the present subjunctive or the indicative: *como si sabe* is wrong.' },
          { t: 'tip', art: 'owl', md: '**A lo mejor** is informal and very common in speech; **quizá** and **tal vez** are more literary. If you are not sure which mood to use after **quizá**, the **subjunctive** is the safer choice in writing. In **Latin America**, **capaz que** (Argentina) and **a lo mejor** are common, and **capaz que** is also used with the subjunctive: *Capaz que llueva.*' },
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'A lo mejor ___ mañana.', o: ['viene', 'venga', 'viniera'], why: '*A lo mejor* takes the indicative.' },
            { q: 'Quizá ___ mañana, pero no estoy seguro.', o: ['venga', 'vendría', 'viniera'], why: '*Quizá* with the subjunctive: doubt.' },
            { q: 'Habla como si lo ___ todo.', o: ['supiera', 'sabe', 'sepa'], why: '*Como si* + imperfect subjunctive.' },
            { q: 'Ojalá ___ mañana.', o: ['llueva', 'llueve', 'lloverá'], why: '*Ojalá* + subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'A lo mejor ___ a la fiesta. (ir, ella, presente)', a: ['va'], why: '*A lo mejor* + indicative.' },
            { q: 'Quizá ___ razón. (tener, tú, subjuntivo)', a: ['tengas'], why: '*Quizá* + subjunctive.' },
            { q: 'Parece como si ___ llorado. (haber, ella, pluscuamperfecto de subjuntivo)', a: ['hubiera'], why: '*Como si* + pluperfect subjunctive.' },
            { q: 'Aunque ___, saldremos igualmente. (llover, hipotético)', a: ['llueva'], why: '*Aunque* + subjunctive: hypothetical.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite with the word in brackets.', items: [
            { q: 'Es posible que venga mañana.', cue: 'Quizá', a: ['Quizá venga mañana.'], why: '*Quizá* + subjunctive.' },
            { q: 'Quizá viene mañana.', cue: 'A lo mejor', a: ['A lo mejor viene mañana.'], why: '*A lo mejor* + indicative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'A lo mejor [venga] mañana.', a: ['viene'], why: '*A lo mejor* takes the indicative.' },
            { s: 'Habla como si lo [sabe] todo.', a: ['supiera'], why: '*Como si* needs the imperfect subjunctive.' },
            { s: 'Ojalá [llueve] mañana.', a: ['llueva'], why: '*Ojalá* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Indicative or subjunctive?', groups: ['indicative', 'subjunctive'], explain: ['groups'], items: [
            { s: 'a lo mejor + verbo', g: 0, why: '*A lo mejor* takes the indicative.' },
            { s: 'ojalá + verbo', g: 1, why: '*Ojalá* takes the subjunctive.' },
            { s: 'como si + verbo', g: 1, why: '*Como si* takes the imperfect subjunctive.' },
            { s: 'aunque + hecho conocido', g: 0, why: '*Aunque* with a known fact takes the indicative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'El último ferri',
      about: 'Read a short story and notice the advanced structures in context.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'El último ferri', md: 'Cerrada la taquilla, Marta se quedó en el muelle y vio alejarse el último ferri. Se le cayó la maleta al suelo. Quizá no volviera nunca. A lo mejor eso era justo lo que quería.\n\n«No hay otro ferri antes del amanecer —dijo el hombre del quiosco, como si lo supiera todo—. Pero hay un café abierto.» Marta no le hizo caso; se le había olvidado el paraguas, y hasta la lluvia parecía burlarse de ella.\n\nUna hora después se sentó a su lado un desconocido. Cansado, aun así sonrió. Habló como si la conociera de siempre, de barcos, de lluvia y de una hermana en Lisboa. Dicho esto, se calló y miró el mar.\n\nAl amanecer, el mar estaba en calma. Llegado el primer ferri, Marta subió a bordo. El tiempo permitiéndolo, estaría en casa antes del mediodía. Ojalá nadie notara su ausencia.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Marta perdió el último ferri.', a: 't', why: '«Vio alejarse el último ferri.»' },
            { q: 'El hombre del quiosco dice que hay otro ferri antes del amanecer.', a: 'f', why: '«No hay otro ferri antes del amanecer.»' },
            { q: 'A Marta se le cayó la maleta.', a: 't', why: '«Se le cayó la maleta al suelo.»' },
            { q: 'El desconocido habló muy poco.', a: 'f', why: 'He talked of boats, rain and a sister.' },
            { q: 'Marta tomó el primer ferri de la mañana.', a: 't', why: '«Marta subió a bordo.»' },
            { q: 'El desconocido se llamaba Luis.', a: 'ng', why: 'The text does not give his name.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the grammar.', items: [
            { q: '«Se le cayó la maleta» – what is this *se*?', o: ['Accidental: it happened to her.', 'Reflexive.', 'Passive.'], why: 'The accidental *se*.' },
            { q: '«Cerrada la taquilla, Marta se quedó…» What is this?', o: ['An absolute participle.', 'A gerund.', 'An infinitive.'], why: 'Noun + participle with its own subject.' },
            { q: '«Quizá no volviera nunca.» What mood is *volviera*?', o: ['Imperfect subjunctive, after quizá.', 'Indicative.', 'Imperative.'], why: '*Quizá* + subjunctive.' },
            { q: '«Habló como si la conociera de siempre.» What is *conociera*?', o: ['Imperfect subjunctive, after como si.', 'Indicative.', 'Conditional.'], why: '*Como si* + imperfect subjunctive.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the structures of formal Spanish.', items: [
            { s: '[Cerrada la taquilla], Marta se quedó en el muelle. [Llegado el primer ferri], subió a bordo.', why: 'Absolute participles.' },
            { s: '[El tiempo permitiéndolo], estaría en casa antes del mediodía.', why: 'An absolute gerund.' },
            { s: '[Dicho esto], se calló y miró el mar.', why: 'A fixed phrase: that said.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: '___ la taquilla, Marta se quedó en el muelle. (cerrar, participio)', a: ['Cerrada'], why: 'An absolute participle.' },
            { q: 'Se le ___ la maleta al suelo. (caer, indefinido)', a: ['cayó'], why: 'The accidental *se*.' },
            { q: 'A lo mejor eso ___ justo lo que quería. (ser, imperfecto)', a: ['era'], why: '*A lo mejor* + indicative.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Habló como si la conociera de siempre.', why: '*Como si* + imperfect subjunctive.' },
            { a: 'El tiempo permitiéndolo, estaría en casa antes del mediodía.', why: 'An absolute gerund.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Se me ___ las llaves.', o: ['perdieron', 'perdió', 'perdí'], why: 'The verb agrees with *las llaves*.' },
      { q: '___ la reunión, nos fuimos.', o: ['Terminada', 'Terminado', 'Terminando'], why: 'The participle agrees with *la reunión*.' },
      { q: 'A lo mejor ___ mañana.', o: ['viene', 'venga', 'viniera'], why: '*A lo mejor* + indicative.' },
      { q: 'Habla como si lo ___ todo.', o: ['supiera', 'sabe', 'sepa'], why: '*Como si* + imperfect subjunctive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Se ___ pisos en el centro. (vender, presente)', a: ['venden'], why: 'The passive *se* agrees with *pisos*.' },
      { q: 'El tiempo ___, saldremos mañana. (permitir + lo, gerundio)', a: ['permitiéndolo'], why: 'An absolute gerund.' },
      { q: 'Ojalá ___ mañana. (llover, subjuntivo)', a: ['llueva'], why: '*Ojalá* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the structure with its use.', pairs: [
      ['terminada la reunión', 'absolute participle: time'],
      ['dicho esto', 'fixed phrase: that said'],
      ['se me cayó el vaso', 'accidental se'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
      { q: 'Olvidé las llaves en casa.', cue: 'Se me', a: ['Se me olvidaron las llaves en casa.'], why: 'The accidental *se*.' },
      { q: 'Es posible que venga mañana.', cue: 'Quizá', a: ['Quizá venga mañana.'], why: '*Quizá* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Se me [perdió] las llaves.', a: ['perdieron'], why: 'The verb agrees with *las llaves*.' },
      { s: 'A lo mejor [venga] mañana.', a: ['viene'], why: '*A lo mejor* takes the indicative.' },
    ] },
  ],
};
