// Spanish C1, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'The language of narrative',
  goal: 'Read and write narrative Spanish with its literary forms and devices. Learn the pretérito anterior, literary word order, free indirect speech, the historic present and the order of dialogue with the raya.',
  art: 'churro',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['narrative', 'pretérito anterior', 'word order', 'literary Spanish'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Apenas hubo terminado',
      about: 'Recognise and use the pretérito anterior in a narrative.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'In written narrative, Spanish has a tense that says an action was **completed just before** another action in the past: the **pretérito anterior** (also called *antepretérito*). It is formed with the **indefinido of haber** and the **participle**: **hube, hubiste, hubo, hubimos, hubisteis, hubieron** + **terminado**. It appears after **apenas, en cuanto, cuando, tan pronto como, luego que** and **después de que**, with an **indefinido** in the main clause: **Apenas hubo salido, empezó a llover.** **En cuanto hubieron llegado, cenaron.** **Cuando hubo terminado, se fue.** In speech, and in most modern writing, the **indefinido** replaces it: **Apenas salió, empezó a llover.**' },
          { t: 'table', caption: 'The pretérito anterior', explain: ['head', 'col1'], head: ['Form', 'Example', 'Everyday way'], rows: [
            ['hube + participle', 'Cuando hube terminado, me fui.', 'Cuando terminé, me fui.'],
            ['hubo + participle', 'Apenas hubo salido, empezó a llover.', 'Apenas salió, empezó a llover.'],
            ['hubimos + participle', 'En cuanto hubimos comido, salimos.', 'En cuanto comimos, salimos.'],
            ['hubieron + participle', 'Después de que hubieron cantado, aplaudimos.', 'Después de que cantaron, aplaudimos.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The pretérito anterior is **only for reading and formal writing**. You must **recognise** it, but you rarely need to produce it. It is used only after a **time conjunction** and with an **indefinido** in the main clause: *Cuando hubo terminado, se fue* is correct; *Hubo terminado y se fue* is not. In **Latin America** it is almost never used, even in books. Do not confuse **hubo** (from *haber*) with **hubiera** (the subjunctive).' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Apenas hubo salido**, empezó a llover.', n: 'As soon as he had gone out.' },
            { s: '**En cuanto hubieron llegado**, cenaron.', n: 'As soon as they had arrived.' },
            { s: '**Cuando hubo terminado**, se fue.', n: 'When he had finished.' },
            { s: '**Después de que hubo cantado**, todos aplaudieron.', n: 'After she had sung.' },
            { s: 'Un instante después, el tren **partía**.', n: 'The imperfecto for a sudden event.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the form with the person.', pairs: [
            ['hube terminado', 'yo'],
            ['hubo terminado', 'él, ella'],
            ['hubimos terminado', 'nosotros'],
            ['hubieron terminado', 'ellos'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Apenas hubo ___, empezó a llover. (salir, participle)', a: ['salido'], why: '*Hubo* + participle.' },
            { q: 'En cuanto ___ llegado, cenaron. (haber, ellos)', a: ['hubieron'], why: 'The indefinido of *haber* for *ellos*.' },
            { q: 'Cuando ___ terminado, se fue. (haber, él)', a: ['hubo'], why: 'The indefinido of *haber* for *él*.' },
            { q: 'Después de que hubieron ___, todos aplaudieron. (cantar, participle)', a: ['cantado'], why: 'The participle of *cantar*.' },
            { q: 'Cuando ___ comido, salimos. (haber, nosotros)', a: ['hubimos'], why: 'The indefinido of *haber* for *nosotros*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Apenas ___ salido, empezó a llover.', o: ['hubo', 'había', 'ha'], why: 'The pretérito anterior: *hubo* + participle.' },
            { q: 'En cuanto ___ llegado, cenaron.', o: ['hubieron', 'hubieran', 'habían'], why: 'The indefinido of *haber*.' },
            { q: 'Cuando ___ terminado, me fui.', o: ['hube', 'hubiera', 'he'], why: '*Hube* + participle.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it in the literary style.', items: [
            { q: 'Apenas salió, empezó a llover.', cue: 'Apenas hubo', a: ['Apenas hubo salido, empezó a llover.'], why: 'The pretérito anterior.' },
            { q: 'En cuanto llegaron, cenaron.', cue: 'En cuanto hubieron', a: ['En cuanto hubieron llegado, cenaron.'], why: 'The pretérito anterior.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right form.', items: [
            { s: 'Apenas [hubiera] salido, empezó a llover.', a: ['hubo'], why: 'The indicative *hubo*, not the subjunctive.' },
            { s: 'En cuanto [hubo] llegado, cenaron. (ellos)', a: ['hubieron'], why: 'The subject is plural.' },
            { s: 'Cuando hubo [terminar], se fue.', a: ['terminado'], why: 'The participle.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Apenas hubo salido, empezó a llover.', why: 'The pretérito anterior.' },
            { a: 'Cuando hubo terminado, se fue.', why: 'The pretérito anterior.' },
            { a: 'En cuanto hubieron llegado, cenaron.', why: 'The pretérito anterior.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'El orden literario de las palabras',
      about: 'Read and write sentences with literary word order.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'In literary Spanish, the order of words changes for **effect**. The **adjective before the noun** often gives a personal or figurative sense: **un gran hombre** (a great man), **un viejo amigo** (a long-standing friend), **un pobre hombre** (a pitiable man). After the noun, the sense is literal: **un hombre grande** (a big man), **un amigo viejo** (an old friend), **un hombre pobre** (a man without money). You can also put a word **first** to stress it: **Mucho me costó aceptarlo.** **Solo entonces comprendió el error.** **Tan cansado estaba que se durmió.** And a verb can come before its subject: **Llegó la noche.** **Pasaron los años.**' },
          { t: 'table', caption: 'Position and meaning', explain: ['head', 'col1'], head: ['Before the noun', 'After the noun'], rows: [
            ['un gran hombre (a great man)', 'un hombre grande (a big man)'],
            ['un viejo amigo (a long-standing friend)', 'un amigo viejo (an old friend)'],
            ['un pobre hombre (a pitiable man)', 'un hombre pobre (a man with no money)'],
            ['cierta noticia (a certain piece of news)', 'una noticia cierta (a true piece of news)'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use this order **sparingly**. In an email or a report, the normal order (subject, verb, object) is clearer. **Grande** becomes **gran** before a **singular noun** of either gender: **un gran hombre**, **una gran mujer**; the plural is **grandes**: **grandes hombres**. A word first adds **rhythm**: **Fue entonces cuando se abrió la puerta.** The same adjective changes are used in **Latin America**.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Era **un gran hombre**, pero **un hombre pobre**.', n: 'Figurative, then literal.' },
            { s: '**Mucho me costó** aceptarlo.', n: 'It cost me a great deal.' },
            { s: '**Solo entonces** comprendió el error.', n: 'Only then.' },
            { s: '**Tan cansado estaba** que se durmió.', n: 'So tired was he that.' },
            { s: '**Pasaron** los años.', n: 'The verb before the subject.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Figurative or literal? Sort the phrases.', groups: ['figurative', 'literal'], explain: ['groups'], items: [
            { s: 'un gran hombre', g: 0, why: 'Before the noun: a great man.' },
            { s: 'un viejo amigo', g: 0, why: 'Before the noun: a long-standing friend.' },
            { s: 'un pobre hombre', g: 0, why: 'Before the noun: a pitiable man.' },
            { s: 'un hombre grande', g: 1, why: 'After the noun: physically big.' },
            { s: 'un amigo viejo', g: 1, why: 'After the noun: old in age.' },
            { s: 'un hombre pobre', g: 1, why: 'After the noun: without money.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Era un ___ amigo, se conocían desde hacía treinta años. (long-standing)', a: ['viejo'], why: 'Before the noun: long-standing.' },
            { q: 'Era un hombre ___, no tenía dinero para el pan. (poor)', a: ['pobre'], why: 'After the noun: without money.' },
            { q: '___ entonces comprendió el error.', a: ['Solo', 'Sólo'], why: '*Solo entonces*: only then.' },
            { q: '___ cansado estaba que se durmió enseguida.', a: ['Tan'], why: '*Tan … que*: so … that.' },
            { q: 'Era un ___ escritor, famoso en todo el país. (great, before a masculine singular noun)', a: ['gran'], why: '*Grande* becomes *gran* before a singular noun.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right meaning.', items: [
            { q: 'Un viejo amigo es…', o: ['un amigo de hace mucho tiempo', 'un amigo con muchos años', 'un amigo que ya no existe'], why: 'Before the noun: long-standing.' },
            { q: 'Un hombre grande es…', o: ['un hombre de gran estatura', 'un hombre importante', 'un hombre famoso'], why: 'After the noun: physically big.' },
            { q: 'Un pobre hombre es…', o: ['un hombre digno de lástima', 'un hombre sin dinero', 'un hombre sin casa'], why: 'Before the noun: pitiable.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word first.', items: [
            { q: 'Comprendió el error solo entonces.', cue: 'Solo entonces', a: ['Solo entonces comprendió el error.', 'Sólo entonces comprendió el error.'], why: 'The word first adds stress.' },
            { q: 'La noche llegó.', cue: 'Llegó', a: ['Llegó la noche.'], why: 'The verb before the subject.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Era un [grande] escritor, famoso en todo el país.', a: ['gran'], why: '*Grande* becomes *gran* before a singular noun.' },
            { s: 'Era un [amigo viejo] de toda la vida, por eso confiaba en él. (long-standing)', a: ['viejo amigo'], why: 'Before the noun: long-standing.' },
            { s: 'Era un [pobre hombre], sin una moneda. (without money)', a: ['hombre pobre'], why: 'After the noun: without money.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Solo entonces recordó el recado.', why: 'A word first for stress.' },
            { a: 'Tan cansado estaba que se durmió.', why: '*Tan … que* with the adjective first.' },
            { a: 'Pasaron muchos años después de aquello.', why: 'The verb before the subject.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Estilo indirecto libre y presente histórico',
      about: 'Use the devices that bring a story to life.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Narrators use several devices to bring the reader close to a character. In **free indirect speech** (estilo indirecto libre), the narrator reports the thoughts of a character without *dijo que* or quotation marks: **Miró el reloj. ¡Era tarde! ¿Cómo había podido olvidarlo?** The tenses are those of the narration; the question and the exclamation are the character’s. The **presente histórico** tells a past event in the present to make it vivid: **En 1755, un terremoto destruye Lisboa.** The **imperfecto** can describe an event that follows at once: **Un instante después, el tren partía.** In dialogue, a **raya** (—) opens each line, and the tag **follows or interrupts** the words: **—Me voy —dijo ella. —No te vayas —respondió Marcos.**' },
          { t: 'table', caption: 'Narrative devices', explain: ['head', 'col1'], head: ['Device', 'Example'], rows: [
            ['free indirect speech', '¡Era tarde! ¿Cómo había podido olvidarlo?'],
            ['historic present', 'En 1755, un terremoto destruye Lisboa.'],
            ['imperfecto for an event', 'Un instante después, el tren partía.'],
            ['raya and tag', '—Me voy —dijo ella.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Spanish dialogue, the **raya** (—) opens each line of speech and **closes** the speech before the tag: **—Me voy —dijo ella.** The tag begins with a **lowercase** letter, and the verb usually comes **before** the subject: **dijo ella, respondió Marcos.** In **Latin America**, quotation marks (**«…»** or **“…”**) are also common. Use **one device at a time**: a paragraph that mixes them all loses its clarity.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Miró el reloj. **¡Era tarde! ¿Cómo había podido olvidarlo?**', n: 'Free indirect speech: the character’s thought.' },
            { s: 'En 1755, un terremoto **destruye** Lisboa.', n: 'Historic present.' },
            { s: 'Un instante después, el tren **partía**.', n: 'The imperfecto for a sudden event.' },
            { s: '—Me voy —**dijo ella**.', n: 'The tag after the speech.' },
            { s: '—No te vayas —**respondió Marcos**.', n: 'The verb before the subject.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which device? Sort the sentences.', groups: ['free indirect speech', 'historic present'], explain: ['groups'], items: [
            { s: '¡Era tarde! ¿Cómo había podido olvidarlo?', g: 0, why: 'The character’s thought, without a reporting verb.' },
            { s: '¡Qué idea la suya! Nunca volvería.', g: 0, why: 'The character’s feeling in the narration.' },
            { s: '¿Sería posible que lo supiera?', g: 0, why: 'A question in the character’s mind.' },
            { s: 'En 1755, un terremoto destruye Lisboa.', g: 1, why: 'A past event in the present.' },
            { s: 'En 1492, Colón llega a América.', g: 1, why: 'A past event in the present.' },
            { s: 'De repente se abre la puerta y entra un hombre.', g: 1, why: 'A vivid event in the present.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '—Me voy —___ ella. (decir, indefinido)', a: ['dijo'], why: 'The tag: *dijo ella*.' },
            { q: '—No te vayas —___ Marcos. (responder, indefinido)', a: ['respondió'], why: 'The tag: *respondió Marcos*.' },
            { q: 'En 1755, un terremoto ___ Lisboa. (destruir, presente)', a: ['destruye'], why: 'The historic present.' },
            { q: 'Un instante después, el tren ___. (partir, imperfecto)', a: ['partía'], why: 'The imperfecto for a sudden event.' },
            { q: 'Miró el reloj. ¡Era tarde! ¿Cómo ___ podido olvidarlo? (haber, pluscuamperfecto)', a: ['había'], why: 'The tense of the narration.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the device with its example.', pairs: [
            ['free indirect speech', '¡Era tarde! ¿Cómo había podido olvidarlo?'],
            ['historic present', 'En 1755, un terremoto destruye Lisboa.'],
            ['imperfecto for an event', 'Un instante después, el tren partía.'],
            ['raya and tag', '—Me voy —dijo ella.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Change the sentence into free indirect speech.', items: [
            { q: 'Ella pensó que era tarde y se preguntó cómo había podido olvidarlo.', cue: '¡Era tarde!', a: ['¡Era tarde! ¿Cómo había podido olvidarlo?'], why: 'No reporting verb: the thought stands alone.' },
            { q: 'Ella dijo: «Me voy.»', cue: '—Me voy', a: ['—Me voy —dijo ella.', '—Me voy —dijo ella'], why: 'A raya, then the tag with the verb first.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '—Me voy —[ella dijo].', a: ['dijo ella'], why: 'In a tag the verb comes before the subject.' },
            { s: 'En 1755, un terremoto [destruyó] Lisboa. (historic present)', a: ['destruye'], why: 'The historic present uses the present tense.' },
            { s: 'Un instante después, el tren [partió]. (imperfecto)', a: ['partía'], why: 'The imperfecto for a sudden event.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'No te vayas, respondió Marcos.', why: 'The tag has the verb first.' },
            { a: 'En 1755, un terremoto destruye Lisboa.', why: 'The historic present.' },
            { a: 'Un instante después, el tren partía.', why: 'The imperfecto for an event.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'La casa junto al río',
      about: 'Read a literary extract.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'La casa junto al río', md: 'Llegó la noche, y con ella el frío. Teresa se detuvo ante la casa junto al río. Pasaron veinte años desde la última vez. Era un gran día para ella, pero no sabía si quería entrar.\n\n—Te daré la llave mañana —le había dicho su tío. Ahora la tenía en la mano.\n\nTan cansada estaba que se sentó en los escalones. Solo entonces se acordó de su padre. ¿Cómo había podido olvidar la promesa? Había sido un viejo amigo de la familia quien le dijo: «Vuelve cuando puedas». Pero nunca volvió.\n\nApenas hubo cerrado los ojos, oyó el río. En 1998, el río inunda el pueblo y se lleva la mitad de las casas. La suya queda en pie.\n\n—¿Vas a entrar? —preguntó una voz.\n\n—Entraré —respondió Teresa—. Se hará como él quiso.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Teresa llega a la casa de noche.', a: 't', why: '*Llegó la noche.*' },
            { q: 'Teresa llevaba veinte años sin ir a la casa.', a: 't', why: '*Pasaron veinte años desde la última vez.*' },
            { q: 'Teresa decide no entrar.', a: 'f', why: '*Entraré*, respondió Teresa.' },
            { q: 'En 1998, la casa de Teresa quedó en pie.', a: 't', why: '*La suya queda en pie.*' },
            { q: 'Su tío le había prometido la llave.', a: 't', why: '*Te daré la llave mañana.*' },
            { q: 'Teresa tiene dos hermanos.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: '¿Qué recuerda Teresa en los escalones?', o: ['A su padre y la promesa.', 'A su tío y la llave.', 'El río y la riada.'], why: '*Solo entonces se acordó de su padre.*' },
            { q: '¿Qué frase es estilo indirecto libre?', o: ['¿Cómo había podido olvidar la promesa?', 'En 1998, el río inunda el pueblo.', '—¿Vas a entrar? —preguntó una voz.'], why: 'It is the character’s thought, without a reporting verb.' },
            { q: '¿Qué frase usa el presente histórico?', o: ['En 1998, el río inunda el pueblo y se lleva la mitad de las casas.', 'Pasaron veinte años.', 'Tan cansada estaba que se sentó.'], why: 'A past event in the present.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the literary word order and the pretérito anterior.', items: [
            { s: '[Llegó la noche], y con ella el frío. [Pasaron veinte años] desde la última vez.', why: 'The verb before the subject.' },
            { s: '[Apenas hubo cerrado] los ojos, oyó el río.', why: 'The pretérito anterior.' },
            { s: '[Tan cansada estaba] que se sentó. [Solo entonces] se acordó de su padre.', why: 'A word first for stress.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Apenas hubo ___ los ojos, oyó el río. (cerrar, participle)', a: ['cerrado'], why: 'The pretérito anterior.' },
            { q: '—Entraré —___ Teresa. (responder, indefinido)', a: ['respondió'], why: 'The tag: *respondió Teresa*.' },
            { q: 'Había sido un ___ amigo de la familia. (long-standing)', a: ['viejo'], why: 'Before the noun: long-standing.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Teresa se detuvo ante la casa junto al río.', why: 'The first sentence of the scene.' },
            { a: 'Solo entonces se acordó de su padre.', why: 'A word first for stress.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Apenas ___ salido, empezó a llover.', o: ['hubo', 'hubiera', 'ha'], why: 'The pretérito anterior.' },
      { q: 'Era un ___ escritor, famoso en todo el país.', o: ['gran', 'grande', 'grandes'], why: '*Gran* before a singular noun.' },
      { q: 'Un viejo amigo es…', o: ['un amigo de hace mucho tiempo', 'un amigo con muchos años', 'un amigo que ya murió'], why: 'Before the noun: long-standing.' },
      { q: '¿Qué frase tiene el verbo antes del sujeto?', o: ['Llegó la noche.', 'La noche llegó.', 'La noche es larga.'], why: 'Literary order.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'En cuanto hubieron ___, cenaron. (llegar, participle)', a: ['llegado'], why: 'The pretérito anterior.' },
      { q: '—Me voy —___ ella. (decir, indefinido)', a: ['dijo'], why: 'The dialogue tag.' },
      { q: 'En 1755, un terremoto ___ Lisboa. (destruir, presente)', a: ['destruye'], why: 'The historic present.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the device with its example.', pairs: [
      ['free indirect speech', '¡Era tarde! ¿Cómo había podido olvidarlo?'],
      ['historic present', 'En 1755, un terremoto destruye Lisboa.'],
      ['pretérito anterior', 'Cuando hubo terminado, se fue.'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it in the literary style.', items: [
      { q: 'Apenas salió, empezó a llover.', cue: 'Apenas hubo', a: ['Apenas hubo salido, empezó a llover.'], why: 'The pretérito anterior.' },
      { q: 'La noche llegó.', cue: 'Llegó', a: ['Llegó la noche.'], why: 'The verb before the subject.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right form.', items: [
      { s: 'En cuanto [hubo] llegado, cenaron. (ellos)', a: ['hubieron'], why: 'The subject is plural.' },
      { s: '—Me voy —[ella dijo].', a: ['dijo ella'], why: 'The verb comes first in a tag.' },
    ] },
  ],
};
