// Spanish C1, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Reporting, quoting and summarising',
  goal: 'Report what others say with precision. Learn reporting verbs with nuance, the tenses of indirect speech, the condicional of reported doubt, ways to name a source, and how to summarise a text.',
  art: 'owl',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['reported speech', 'sources', 'summary', 'press', 'hedging'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Afirmar, sostener, admitir',
      about: 'Choose reporting verbs that show attitude.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A press article rarely says only **decir**. The verb shows the **attitude** of the speaker. **Afirmar** and **declarar** are neutral and formal: **El ministro declaró que el plan está listo.** **Sostener** means *to maintain* and suggests an opinion that may be disputed: **Sostiene no saber nada.** **Admitir** means *to admit*: **Admitió haberse equivocado.** **Subrayar** means *to stress*: **Subrayó la gravedad del problema.** **Negar** means *to deny*: **Niega haber participado.** **Lamentar** means *to regret, to condemn*: **Lamentó la decisión.** **Pretender** means *to intend*, not *to pretend*: **Pretende viajar en mayo.** For *to pretend*, use **fingir**: **Finge dormir.**' },
          { t: 'table', caption: 'Reporting verbs', explain: ['head', 'col1'], head: ['Verb', 'Meaning', 'Example'], rows: [
            ['afirmar / declarar', 'to state (neutral)', 'El ministro declaró que el plan está listo.'],
            ['sostener', 'to maintain', 'Sostiene no saber nada.'],
            ['admitir', 'to admit', 'Admitió haberse equivocado.'],
            ['subrayar', 'to stress', 'Subrayó la gravedad del problema.'],
            ['negar', 'to deny', 'Niega haber participado.'],
            ['lamentar', 'to regret, to condemn', 'Lamentó la decisión.'],
            ['pretender', 'to intend (not to pretend)', 'Pretende viajar en mayo.'],
          ] },
          { t: 'tip', art: 'owl', md: 'When the subject of the two verbs is the **same person**, use the **infinitive** (often the **compound** infinitive): **Sostiene no saber nada**, **Admitió haberse equivocado**, **Niega haber participado**. When the subjects differ, use **que + clause**: **Admitió que el plan estaba equivocado.** **Pretender** is a **false friend** of *to pretend*: the Spanish verb for that is **fingir**. After **negar que**, the verb is in the **subjunctive**: **Niega que sea necesario.**' },
        ],
        [
          { t: 'examples', items: [
            { s: 'El ministro **declaró que** el plan está listo.', n: 'Neutral.' },
            { s: '**Sostiene** no saber nada.', n: 'The same subject: the infinitive.' },
            { s: '**Admitió** haberse equivocado.', n: 'The compound infinitive.' },
            { s: '**Subrayó** la gravedad del problema.', n: 'To stress.' },
            { s: '**Pretende** viajar en mayo.', n: 'To intend.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the verb with its meaning.', pairs: [
            ['sostener', 'to maintain'],
            ['admitir', 'to admit'],
            ['negar', 'to deny'],
            ['pretender', 'to intend'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Sostiene ___ saber nada. (not to know)', a: ['no'], why: 'The same subject: *sostiene no saber nada*.' },
            { q: 'Admitió haberse ___. (equivocar, participle)', a: ['equivocado'], why: 'The compound infinitive: *haberse equivocado*.' },
            { q: 'Niega ___ participado. (haber)', a: ['haber'], why: '*Negar* + compound infinitive.' },
            { q: '___ la gravedad del problema. (subrayar, indefinido, él)', a: ['Subrayó'], why: '*Subrayar*.' },
            { q: 'El ministro ___ que el plan está listo. (declarar, indefinido)', a: ['declaró', 'afirmó'], why: 'A neutral verb.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best verb.', items: [
            { q: '___ la decisión: la considera injusta.', o: ['Lamentó', 'Admitió', 'Negó'], why: '*Lamentar* = to condemn, to regret.' },
            { q: '___ viajar en mayo y ya ha comprado los billetes.', o: ['Pretende', 'Finge', 'Niega'], why: '*Pretender* = to intend.' },
            { q: '___ haberse equivocado: pide disculpas.', o: ['Admitió', 'Negó', 'Lamentó'], why: '*Admitir* = to admit.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Report the sentence with the verb in brackets.', items: [
            { q: 'Me equivoqué, dice Luis.', cue: 'Luis admite', a: ['Luis admite haberse equivocado.'], why: 'The same subject: the compound infinitive.' },
            { q: 'No sé nada, dice Ana.', cue: 'Ana sostiene', a: ['Ana sostiene no saber nada.'], why: 'The same subject: the infinitive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Luis [finge] viajar en mayo y ya ha comprado los billetes.', a: ['pretende'], why: '*Pretender* means to intend; *fingir* means to pretend.' },
            { s: 'Admitió haberse [equivocar].', a: ['equivocado'], why: 'The participle after *haber*.' },
            { s: 'Sostiene [de no] saber nada.', a: ['no'], why: 'No preposition: *sostiene no saber*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'El ministro declaró que el plan está listo.', why: 'A neutral verb.' },
            { a: 'Luis admite haberse equivocado.', why: '*Admitir* + compound infinitive.' },
            { a: 'Subrayó la gravedad del problema.', why: '*Subrayar*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'El estilo indirecto y el condicional',
      about: 'Move the tenses correctly in indirect speech.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'In **indirect speech**, if the reporting verb is in the **past**, the tenses move back. The **present** becomes the **imperfecto**: **«Estoy cansado»** → **Dijo que estaba cansado.** The **perfecto** and the **indefinido** become the **pluscuamperfecto**: **«He terminado»** → **Dijo que había terminado.** The **future** becomes the **condicional**: **«Vendré mañana»** → **Dijo que vendría al día siguiente.** Time words change too: **hoy** becomes **ese día**, **mañana** becomes **al día siguiente**, **ayer** becomes **el día anterior**, **aquí** becomes **allí**. The **imperative** becomes **que + imperfect subjunctive** or **de + infinitive**: **«¡Ven!»** → **Me dijo que viniera.** A reported **question** uses **si**: **Me preguntó si iba.**' },
          { t: 'table', caption: 'Indirect speech', explain: ['head', 'col1'], head: ['Direct', 'Indirect'], rows: [
            ['«Estoy cansado.»', 'Dijo que estaba cansado.'],
            ['«He terminado.»', 'Dijo que había terminado.'],
            ['«Vendré mañana.»', 'Dijo que vendría al día siguiente.'],
            ['«¡Ven aquí!»', 'Me dijo que fuera allí.'],
            ['hoy / ayer / mañana', 'ese día / el día anterior / al día siguiente'],
          ] },
          { t: 'tip', art: 'owl', md: 'If the reporting verb is in the **present** (**Dice que está cansado**), the tenses do **not** move. The **condicional** is the Spanish *future in the past*: **había prometido que vendría**. The **imperfecto** stays the same in indirect speech: **«Cuando era joven, vivía en Madrid»** → **Dijo que, cuando era joven, vivía en Madrid.** For an order, **decir que** + **subjunctive** is used: **Me dijo que viniera.** In **Latin America**, **pedir que** + subjunctive is also frequent: **Me pidió que fuera.**' },
        ],
        [
          { t: 'examples', items: [
            { s: '«Estoy cansado.» → Dijo que **estaba** cansado.', n: 'Present to imperfecto.' },
            { s: '«He terminado.» → Dijo que **había terminado**.', n: 'Perfecto to pluscuamperfecto.' },
            { s: '«Vendré mañana.» → Dijo que **vendría** al día siguiente.', n: 'Future to condicional.' },
            { s: '«¡Ven aquí!» → Me dijo que **fuera allí**.', n: 'Imperative and place word.' },
            { s: '«¿Vienes?» → Me preguntó **si** iba.', n: 'A reported question.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the direct tense with the indirect one.', pairs: [
            ['estoy', 'estaba'],
            ['he terminado', 'había terminado'],
            ['vendré', 'vendría'],
            ['mañana', 'al día siguiente'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: '«Estoy cansado.» → Dijo que ___ cansado. (estar)', a: ['estaba'], why: 'Present to imperfecto.' },
            { q: '«He terminado.» → Dijo que ___ terminado. (haber)', a: ['había'], why: 'Perfecto to pluscuamperfecto.' },
            { q: '«Vendré mañana.» → Dijo que ___ al día siguiente. (venir, condicional)', a: ['vendría'], why: 'Future to condicional.' },
            { q: '«¡Ven aquí!» → Me dijo que ___ allí. (ir, imperfecto de subjuntivo)', a: ['fuera', 'fuese'], why: 'An order: imperfect subjunctive.' },
            { q: '«¿Vienes?» → Me preguntó ___ iba.', a: ['si'], why: 'A reported question.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: '«Voy a Madrid.» → Dijo que ___ a Madrid.', o: ['iba', 'va', 'irá'], why: 'Present to imperfecto.' },
            { q: '«Llamaré mañana.» → Dijo que ___ al día siguiente.', o: ['llamaría', 'llamaba', 'llamará'], why: 'Future to condicional.' },
            { q: '«Ayer estuve en casa.» → Dijo que el día anterior ___ en casa.', o: ['había estado', 'estuvo', 'estaría'], why: 'Indefinido to pluscuamperfecto.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Report the sentence.', items: [
            { q: '«Vendré mañana.» Dijo que', cue: 'Dijo que', a: ['Dijo que vendría al día siguiente.'], why: 'Future to condicional.' },
            { q: '«He perdido las llaves.» Dijo que', cue: 'Dijo que', a: ['Dijo que había perdido las llaves.'], why: 'Perfecto to pluscuamperfecto.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ayer dijo que [está] cansado.', a: ['estaba'], why: 'The reporting verb is in the past.' },
            { s: 'Dijo que [vendrá] al día siguiente.', a: ['vendría'], why: 'Future to condicional.' },
            { s: 'Me preguntó [que] iba.', a: ['si'], why: 'A reported question uses *si*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Dijo que vendría al día siguiente.', why: 'Future to condicional.' },
            { a: 'Me preguntó si iba.', why: 'A reported question.' },
            { a: 'Dijo que había terminado el trabajo.', why: 'Perfecto to pluscuamperfecto.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Las fuentes y la cautela',
      about: 'Name a source and show doubt with the condicional.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A journalist names the **source** and shows how sure the news is. To name a source: **según**, **de acuerdo con**, **a decir de** and **como informa**: **Según el ayuntamiento, las obras terminan en mayo.** **De acuerdo con las primeras informaciones, no hay heridos.** To show caution: **parece que**, **al parecer**, **se dice que**, **todo indica que**: **Al parecer, el presidente va a dimitir.** The **condicional of reported doubt** is typical of the press: **El presidente habría dimitido** means *the president has reportedly resigned*, and the journalist does not guarantee the news. The same form can be present: **El incendio sería intencionado.**' },
          { t: 'table', caption: 'Sources and caution', explain: ['head', 'col1'], head: ['Expression', 'Use', 'Example'], rows: [
            ['según / de acuerdo con', 'naming a source', 'Según el ayuntamiento, las obras terminan en mayo.'],
            ['a decir de', 'according to what someone says', 'A decir del presidente, el plan está listo.'],
            ['al parecer / se dice que', 'caution', 'Al parecer, el presidente va a dimitir.'],
            ['todo indica que', 'a strong sign', 'Todo indica que se cumplirá el plazo.'],
            ['condicional', 'reported doubt', 'El presidente habría dimitido.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The **condicional of reported doubt** appears in headlines and news: **El ministro habría abandonado el cargo.** Do not use it for your own opinion or for a plain fact. **Según yo** is wrong: say **en mi opinión** or **a mi juicio**, because **según** names a source. **Parece que** takes the **indicative**: **Parece que el presidente ha dimitido.** **No parece que** takes the **subjunctive**: **No parece que sea verdad.** In **Latin America**, the same forms are used in the press.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Según** el ayuntamiento, las obras terminan en mayo.', n: 'Naming a source.' },
            { s: '**De acuerdo con** las primeras informaciones, no hay heridos.', n: 'Naming a source.' },
            { s: '**Al parecer**, el presidente va a dimitir.', n: 'Caution.' },
            { s: 'El presidente **habría dimitido**.', n: 'Reported doubt.' },
            { s: 'El incendio **sería** intencionado.', n: 'Reported doubt in the present.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Source or caution? Sort the expressions.', groups: ['source', 'caution'], explain: ['groups'], items: [
            { s: 'Según el ayuntamiento', g: 0, why: 'A source.' },
            { s: 'De acuerdo con las primeras informaciones', g: 0, why: 'A source.' },
            { s: 'A decir del presidente', g: 0, why: 'A source.' },
            { s: 'Al parecer', g: 1, why: 'Caution.' },
            { s: 'Se dice que', g: 1, why: 'Caution.' },
            { s: 'Todo indica que', g: 1, why: 'Caution.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ el ayuntamiento, las obras terminan en mayo.', a: ['Según'], why: 'Naming a source.' },
            { q: 'De ___ con las primeras informaciones, no hay heridos.', a: ['acuerdo'], why: '*De acuerdo con*.' },
            { q: 'Al ___, el presidente va a dimitir.', a: ['parecer'], why: '*Al parecer*.' },
            { q: 'El presidente ___ dimitido. (condicional perfecto, reported doubt)', a: ['habría'], why: 'Reported doubt.' },
            { q: 'No parece que ___ verdad. (ser, subjuntivo)', a: ['sea'], why: '*No parece que* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best form.', items: [
            { q: 'El ministro ___ abandonado el cargo, pero no está confirmado.', o: ['habría', 'ha', 'había'], why: 'Reported doubt.' },
            { q: 'Parece que el plan ___ listo.', o: ['está', 'esté', 'estuviera'], why: '*Parece que* + indicative.' },
            { q: '___ las primeras informaciones, no hay heridos.', o: ['De acuerdo con', 'De acuerdo a', 'En acuerdo de'], why: '*De acuerdo con*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Report the news with caution.', items: [
            { q: 'El presidente ha dimitido. (reported doubt)', cue: 'El presidente', a: ['El presidente habría dimitido.'], why: 'Condicional perfecto.' },
            { q: 'El incendio es intencionado. (reported doubt)', cue: 'El incendio', a: ['El incendio sería intencionado.'], why: 'Condicional of reported doubt.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'No parece que [es] verdad.', a: ['sea'], why: '*No parece que* + subjunctive.' },
            { s: '[Según yo], el plan está mal. (in my opinion)', a: ['En mi opinión', 'A mi juicio'], why: '*Según* names a source, not yourself.' },
            { s: 'El ministro [ha] abandonado el cargo, pero no está confirmado. (reported doubt)', a: ['habría'], why: 'The news is not confirmed.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Según el ayuntamiento, las obras terminan en mayo.', why: 'Naming a source.' },
            { a: 'El presidente habría dimitido ayer.', why: 'Reported doubt.' },
            { a: 'Al parecer, el presidente va a dimitir.', why: 'Caution.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un artículo y su resumen',
      about: 'Read a press article and its summary.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'El puente cerrado', md: 'ARTÍCULO\n\nEl puente sobre el río permanecerá cerrado hasta septiembre. Lo anunció ayer el alcalde, que declaró haber recibido un informe de los técnicos. Según el documento, algunas vigas presentan signos de fallo. El alcalde subrayó que no hay peligro inmediato, pero admitió que las obras serán largas.\n\nLa asociación de vecinos niega que las obras fueran necesarias y sostiene que el cierre perjudicará al comercio. De acuerdo con las primeras estimaciones, el tráfico habría aumentado ya un treinta por ciento en las calles vecinas. Al parecer, el concejal de obras públicas habría dimitido, pero la noticia no ha sido confirmada.\n\nRESUMEN\n\nEl alcalde anunció el cierre del puente hasta septiembre por el fallo de algunas vigas. Los vecinos cuestionan la necesidad de las obras y temen por el comercio. Sigue sin confirmarse la noticia de una dimisión en el equipo de gobierno.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'El puente permanecerá cerrado hasta septiembre.', a: 't', why: '*Permanecerá cerrado hasta septiembre.*' },
            { q: 'El alcalde dice que hay un peligro inmediato.', a: 'f', why: '*No hay peligro inmediato.*' },
            { q: 'La asociación de vecinos cree que las obras eran necesarias.', a: 'f', why: '*Niega que las obras fueran necesarias.*' },
            { q: 'La dimisión del concejal está confirmada.', a: 'f', why: '*La noticia no ha sido confirmada.*' },
            { q: 'El tráfico en las calles vecinas habría aumentado un treinta por ciento.', a: 't', why: '*De acuerdo con las primeras estimaciones.*' },
            { q: 'El puente se construyó en 1950.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: '¿Por qué está cerrado el puente?', o: ['Algunas vigas presentan signos de fallo.', 'Hay un concurso.', 'Ha caído nieve.'], why: '*Algunas vigas presentan signos de fallo.*' },
            { q: '¿Qué admite el alcalde?', o: ['Las obras serán largas.', 'Se equivocó.', 'Dimite.'], why: '*Admitió que las obras serán largas.*' },
            { q: '¿Cómo presenta el resumen la dimisión?', o: ['Como una noticia incierta.', 'Como un hecho.', 'No la menciona.'], why: '*Sigue sin confirmarse la noticia de una dimisión.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the reporting verbs and the sources.', items: [
            { s: 'El alcalde [declaró] haber recibido un informe. [Según] el documento, algunas vigas presentan signos de fallo.', why: 'A reporting verb and a source.' },
            { s: 'El alcalde [subrayó] que no hay peligro, pero [admitió] que las obras serán largas.', why: 'Two reporting verbs.' },
            { s: 'La asociación [niega] que las obras fueran necesarias y [sostiene] que el cierre perjudicará al comercio.', why: 'Two reporting verbs.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'El alcalde ___ haber recibido un informe. (declarar, indefinido)', a: ['declaró'], why: '*Declarar* + infinitive.' },
            { q: '___ las primeras estimaciones, el tráfico habría aumentado.', a: ['De acuerdo con'], why: '*De acuerdo con*.' },
            { q: 'El concejal ___ dimitido, pero no está confirmado. (condicional perfecto)', a: ['habría'], why: 'Reported doubt.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'El alcalde anunció el cierre del puente hasta septiembre.', why: 'The summary opens with the main fact.' },
            { a: 'Los vecinos cuestionan la necesidad de las obras.', why: 'The summary uses a nominal style.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Sostiene ___ saber nada.', o: ['no', 'de no', 'a no'], why: 'The same subject: the infinitive.' },
      { q: '«Estoy cansado.» → Dijo que ___ cansado.', o: ['estaba', 'está', 'estará'], why: 'Present to imperfecto.' },
      { q: '«Vendré mañana.» → Dijo que ___ al día siguiente.', o: ['vendría', 'vendrá', 'vino'], why: 'Future to condicional.' },
      { q: 'El ministro ___ abandonado el cargo, pero no está confirmado.', o: ['habría', 'ha', 'había'], why: 'Reported doubt.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Admitió haberse ___. (equivocar, participle)', a: ['equivocado'], why: 'The compound infinitive.' },
      { q: 'Me preguntó ___ iba.', a: ['si'], why: 'A reported question.' },
      { q: 'Al ___, el presidente va a dimitir.', a: ['parecer'], why: '*Al parecer*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the verb with its meaning.', pairs: [
      ['sostener', 'to maintain'],
      ['negar', 'to deny'],
      ['pretender', 'to intend'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Report the sentence.', items: [
      { q: '«He perdido las llaves.» Dijo que', cue: 'Dijo que', a: ['Dijo que había perdido las llaves.'], why: 'Perfecto to pluscuamperfecto.' },
      { q: 'El presidente ha dimitido. (reported doubt)', cue: 'El presidente', a: ['El presidente habría dimitido.'], why: 'Condicional perfecto.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Dijo que [vendrá] al día siguiente.', a: ['vendría'], why: 'Future to condicional.' },
      { s: 'No parece que [es] verdad.', a: ['sea'], why: '*No parece que* + subjunctive.' },
    ] },
  ],
};
