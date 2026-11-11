// Spanish A2, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'When I was little',
  goal: 'Describe how life used to be and what you used to do.',
  art: 'owl',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['preterito-imperfecto', 'soler', 'past-habits', 'describing-the-past', 'childhood'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'hablaba, comía, vivía',
      about: 'Make the pretérito imperfecto and use it for life in the past.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'The **pretérito imperfecto** describes how things were and what people did again and again in the past: *De pequeño, vivía en un pueblo y jugaba en la calle.* Verbs in *-ar* take **-aba**. Verbs in *-er* and *-ir* take **-ía**.' },
          { t: 'table', caption: 'Pretérito imperfecto: regular verbs', explain: ['head'], quiz: true, head: ['Person', 'hablar', 'comer', 'vivir'], rows: [
            ['yo', 'hablaba', 'comía', 'vivía'],
            ['tú', 'hablabas', 'comías', 'vivías'],
            ['él, ella, usted', 'hablaba', 'comía', 'vivía'],
            ['nosotros, nosotras', 'hablábamos', 'comíamos', 'vivíamos'],
            ['vosotros, vosotras', 'hablabais', 'comíais', 'vivíais'],
            ['ellos, ellas, ustedes', 'hablaban', 'comían', 'vivían'],
          ] },
          { t: 'tip', art: 'owl', md: 'The *yo* and *él, ella* forms are the same: *yo hablaba, ella hablaba*. Add the person when it is not clear. *-er* and *-ir* verbs always have an accent on the *í*.' },
        ],
        [
          { t: 'text', md: 'Only three verbs are irregular in the *imperfecto*: **ser**, **ir** and **ver**.' },
          { t: 'table', caption: 'ser, ir, ver', explain: ['head'], quiz: true, head: ['Person', 'ser', 'ir', 'ver'], rows: [
            ['yo', 'era', 'iba', 'veía'],
            ['tú', 'eras', 'ibas', 'veías'],
            ['él, ella, usted', 'era', 'iba', 'veía'],
            ['nosotros, nosotras', 'éramos', 'íbamos', 'veíamos'],
            ['vosotros, vosotras', 'erais', 'ibais', 'veíais'],
            ['ellos, ellas, ustedes', 'eran', 'iban', 'veían'],
          ] },
          { t: 'examples', items: [
            { s: 'Cuando **era** niña, **vivía** con mis abuelos.', n: '*cuando era niña*: when I was a child.' },
            { s: 'Todos los veranos **íbamos** a la playa.', n: 'Something we did every summer: *imperfecto*.' },
            { s: 'Mi padre **trabajaba** en una fábrica.', n: 'How life was then.' },
            { s: 'Por las tardes **veíamos** dibujos animados.', n: '*ver → veíamos*.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Use the *indefinido* (unit 2) for one finished action: *Ayer **fui** al cine.* Use the *imperfecto* for a habit or a description: *De pequeño **iba** al cine cada domingo.*' },
          { t: 'ex', kind: 'conjugate', h: 'Write the pretérito imperfecto of *ir*.', verb: 'ir', tense: 'pretérito imperfecto', rows: [
            ['yo', 'iba'], ['tú', 'ibas'], ['él, ella, usted', 'iba'], ['nosotros', 'íbamos'], ['vosotros', 'ibais'], ['ellos, ustedes', 'iban'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'De pequeño, yo ___ mucho al fútbol.', o: ['jugaba', 'jugía', 'jugaron'], why: '*-ar* verb: *jugaba*. A habit in the past.' },
            { q: 'Mis abuelos ___ en una casa con jardín.', o: ['vivían', 'vivíamos', 'vivaban'], why: '*-ir* verb, *ellos*: *vivían*.' },
            { q: 'Cuando ___ niños, mi hermano y yo dormíamos en la misma habitación.', o: ['éramos', 'eran', 'fuimos'], why: '*ser*, *nosotros*: *éramos*. A description of the past.' },
            { q: '¿Qué programas ___ tú en la tele de pequeña?', o: ['veías', 'vías', 'veía'], why: '*ver*, *tú*: *veías*.' },
            { q: 'Antes nosotros ___ al colegio a pie.', o: ['íbamos', 'ibamos', 'iban'], why: '*ir*, *nosotros*: *íbamos*, with an accent.' },
            { q: 'Mi madre ___ muy bien.', o: ['cocinaba', 'cocinía', 'cocinaban'], why: '*-ar* verb, *ella*: *cocinaba*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the pretérito imperfecto.', items: [
            { q: 'Cuando yo ___ pequeña, tenía un perro. (ser)', a: ['era'], why: '*ser*, *yo*: *era*.' },
            { q: 'Mi abuelo ___ el periódico cada mañana. (leer)', a: ['leía'], why: '*-er* verb: *leía*, with an accent.' },
            { q: 'Vosotros ___ en el centro, ¿verdad? (vivir)', a: ['vivíais'], why: '*vivir*, *vosotros*: *vivíais*.' },
            { q: 'Los domingos mi familia ___ a misa. (ir)', a: ['iba'], why: '*ir*, *la familia* = *ella*: *iba*.' },
            { q: 'Mis hermanos y yo ___ mucho en el parque. (jugar)', a: ['jugábamos'], why: '*nosotros*: *jugábamos*, with an accent.' },
            { q: 'Tú siempre ___ chocolate con churros, ¿te acuerdas? (tomar)', a: ['tomabas'], why: '*tomar*, *tú*: *tomabas*.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Tap the odd one out.', items: [
            { o: ['fui', 'iba', 'era', 'veía'], why: '*fui* is *indefinido*. The others are *imperfecto*.' },
            { o: ['hablé', 'hablaba', 'comía', 'vivía'], why: '*hablé* is *indefinido*. The others are *imperfecto*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Before and now',
      about: 'Talk about past habits with soler, antes and ahora.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: '**soler** + infinitive says what someone usually did: *Solía levantarme a las siete* (I used to get up at seven). In the past, use the *imperfecto* of *soler*. The other verb stays in the infinitive.' },
          { t: 'table', caption: 'soler in the past', explain: ['head'], quiz: true, head: ['Person', 'soler', 'Example'], rows: [
            ['yo', 'solía', 'Solía ir en bici.'],
            ['tú', 'solías', '¿Solías salir mucho?'],
            ['él, ella, usted', 'solía', 'Solía comer en casa.'],
            ['nosotros, nosotras', 'solíamos', 'Solíamos ver la tele juntos.'],
            ['vosotros, vosotras', 'solíais', '¿Solíais veranear en la costa?'],
            ['ellos, ellas, ustedes', 'solían', 'Solían llegar tarde.'],
          ] },
          { t: 'tip', art: 'owl', md: 'For now, use the present of *soler*: *Ahora suelo trabajar desde casa.* It has a stem change: *suelo, sueles, suele, solemos, soléis, suelen*.' },
        ],
        [
          { t: 'text', md: 'Use **antes** for the past and **ahora** for the present: *Antes vivía en el campo; ahora vivo en Madrid.* **ya no** means not any more, and **todavía** means still.' },
          { t: 'examples', items: [
            { s: '**Antes** fumaba, pero **ya no** fumo.', n: '*ya no*: not any more.' },
            { s: '**Antes** iba al trabajo en coche; **ahora** voy en metro.', n: '*imperfecto* for before, present for now.' },
            { s: 'De niña **solía** pasar el verano en el pueblo.', n: '*soler* + infinitive.' },
            { s: 'Mi abuela **todavía** vive en la misma casa.', n: '*todavía*: still.' },
            { s: 'Antes no había **móviles**.', n: '*había*: there were. *el móvil*: the mobile phone.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Some everyday words are different in Latin America: *el móvil* is often *el celular*, and *el coche* is often *el carro* or *el auto*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Before and now: find the second half.', pairs: [
            ['Antes vivía con mis padres;', 'ahora vivo solo.'],
            ['Antes trabajaba en un banco;', 'ahora soy profesor.'],
            ['Antes tenía el pelo largo;', 'ahora lo tengo corto.'],
            ['Antes no me gustaba el café;', 'ahora tomo tres al día.'],
            ['Antes salíamos todos los sábados;', 'ahora preferimos quedarnos en casa.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'De joven, mi padre solía ___ en bici al trabajo.', o: ['ir', 'iba', 'va'], why: 'After *soler*, the infinitive: *ir*.' },
            { q: 'Antes ___ mucho, pero ahora estoy más tranquila.', o: ['me enfadaba', 'me enfadaban', 'me enfadabas'], why: '*Antes*: *imperfecto*, *me enfadaba*.' },
            { q: 'Antes jugaba al tenis, pero ___ juego.', o: ['ya no', 'todavía', 'antes'], why: 'Not any more: *ya no*.' },
            { q: '¿Vosotros ___ ir de vacaciones con vuestros padres?', o: ['solíais', 'solían', 'solíamos'], why: '*soler*, *vosotros*, in the past: *solíais*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with soler. Start with the words given.', items: [
            { q: 'Antes comía en casa de mi abuela los domingos.', cue: 'Antes solía', a: ['Antes solía comer en casa de mi abuela los domingos'], why: '*solía* + the infinitive *comer*.' },
            { q: 'De pequeños, veíamos dibujos por la mañana.', cue: 'De pequeños, solíamos', a: ['De pequeños, solíamos ver dibujos por la mañana', 'De pequeños solíamos ver dibujos por la mañana'], why: '*solíamos* + the infinitive *ver*.' },
            { q: 'Mis tíos pasaban el verano en la playa.', cue: 'Mis tíos solían', a: ['Mis tíos solían pasar el verano en la playa'], why: '*solían* + the infinitive *pasar*.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentences. Two words do not belong.', items: [
            { a: 'Antes vivíamos en el campo y ahora vivimos en la ciudad.', extra: ['vivimos', 'vivíais'], why: '*antes*: *vivíamos*. *ahora*: the present *vivimos*.' },
            { a: 'Mi abuelo solía pasear por el río.', extra: ['paseaba', 'solió'], why: '*solía* + infinitive: *pasear*.' },
            { a: 'Ya no tengo tiempo para leer.', extra: ['todavía', 'tenía'], why: '*Ya no* + the present: not any more.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'How things were',
      about: 'Describe places and people in the past.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To describe a place or a person in the past, use the *imperfecto*: **era** (it was, he was), **tenía** (it had, she had), **estaba** (it was, for place and state), **llevaba** (he wore). **hay** becomes **había** (there was, there were). *Había* never changes for the plural.' },
          { t: 'table', caption: 'Describing in the past', explain: ['head'], head: ['Present', 'Imperfecto', 'Example'], rows: [
            ['hay', 'había', 'En el pueblo había una plaza y dos bares.'],
            ['es', 'era', 'La casa era pequeña y blanca.'],
            ['está', 'estaba', 'La escuela estaba cerca de la iglesia.'],
            ['tiene', 'tenía', 'Mi abuelo tenía el pelo blanco.'],
            ['lleva', 'llevaba', 'Siempre llevaba un sombrero.'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Mi primer colegio **era** muy antiguo.', n: '*ser* for a description.' },
            { s: 'En mi calle **había** muchas tiendas.', n: '*había* + plural: it does not change.' },
            { s: 'Mi maestra **era** joven y **tenía** los ojos verdes.', n: '*era* for what she was like, *tenía* for her eyes.' },
            { s: 'La casa **estaba** al lado del río.', n: '*estar* for where it was.' },
            { s: 'Mi abuela siempre **llevaba** un delantal azul.', n: '*llevar*: to wear.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Antes, en mi barrio ___ un cine.', o: ['había', 'habían', 'hay'], why: 'In the past: *había*, also for the plural.' },
            { q: 'Ahora ___ un supermercado en el mismo sitio.', o: ['hay', 'había', 'habían'], why: '*Ahora*: present, *hay*.' },
            { q: 'En el pueblo ___ tres panaderías.', o: ['había', 'habían', 'era'], why: '*había* never changes: *había tres panaderías*.' },
            { q: 'Nuestra casa ___ en la plaza.', o: ['estaba', 'era', 'había'], why: 'Where something was: *estar*, *estaba*.' },
            { q: 'Mi abuelo ___ muy alto y delgado.', o: ['era', 'estaba', 'había'], why: 'What someone was like: *ser*, *era*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the description with the words in the box.', extra: ['hay', 'fue'], items: [
            { q: 'Mi pueblo ___ pequeño y tranquilo.', a: 'era', why: 'A description of a place: *era*.' },
            { q: 'En el centro ___ una fuente y una iglesia.', a: 'había', why: 'There was, in the past: *había*.' },
            { q: 'La escuela ___ al lado de la plaza.', a: 'estaba', why: 'Where it was: *estaba*.' },
            { q: 'El maestro ___ barba y gafas.', a: 'tenía', why: '*tener* barba: *tenía*.' },
            { q: 'Siempre ___ una chaqueta marrón.', a: 'llevaba', why: '*llevar* for clothes: *llevaba*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Solve the crossword: places in a village.', words: [
            { a: 'plaza', clue: 'El lugar en el centro del pueblo donde la gente se encuentra.' },
            { a: 'iglesia', clue: 'Aquí la gente va a misa.' },
            { a: 'fuente', clue: 'De aquí sale agua y la gente la usa para beber.' },
            { a: 'escuela', clue: 'Aquí los niños aprenden a leer y a escribir.' },
            { a: 'huerto', clue: 'Aquí la familia cultiva tomates y lechugas.' },
            { a: 'campo', clue: 'Fuera del pueblo, con árboles, animales y mucho espacio.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs that describe the place or the person.', items: [
            { s: 'La casa [era] grande y [tenía] un patio con flores.', why: '*era* and *tenía* describe the house.' },
            { s: 'Mi tía [llevaba] el pelo corto y siempre [estaba] contenta.', why: '*llevaba* and *estaba* describe the aunt.' },
            { s: 'En la calle [había] muchos niños.', why: '*había*: there were.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Reading: a grandmother remembers',
      about: 'Read how a grandmother remembers her village.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'Mi pueblo', md: 'Me llamo Carmen y tengo ochenta años. Ahora vivo en Zaragoza con mi hija, pero cuando era niña vivía en un pueblo pequeño de la montaña, con mis padres y mis cuatro hermanos.\n\nEl pueblo era muy bonito. Había una plaza con una fuente, una iglesia, una escuela y una sola tienda, donde se vendía de todo. No había coches; la gente iba a pie o en burro. Nuestra casa estaba al lado del río y tenía un huerto con tomates, patatas y judías.\n\nLa vida era dura. Mi padre trabajaba en el campo de la mañana a la noche, y mi madre cuidaba de los animales y de nosotros. Los niños solíamos ayudar en casa antes de ir a la escuela. Nuestra maestra se llamaba doña Pilar. Era muy seria y siempre llevaba un vestido negro, pero nos quería mucho.\n\nNo teníamos televisión. Por las noches, en invierno, nos sentábamos al lado del fuego y mi abuelo contaba historias. En verano jugábamos en la calle hasta muy tarde.\n\nAhora el pueblo está casi vacío. Ya no hay escuela y solo viven allí unas veinte personas. Todavía voy todos los veranos, porque allí están mis mejores recuerdos.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Carmen vive ahora en el pueblo.', a: 'f', why: '*Ahora vivo en Zaragoza con mi hija.*' },
            { q: 'En el pueblo había una sola tienda.', a: 't', why: '*una sola tienda, donde se vendía de todo.*' },
            { q: 'La casa de Carmen estaba al lado de la iglesia.', a: 'f', why: '*Nuestra casa estaba al lado del río.*' },
            { q: 'Doña Pilar era muy seria.', a: 't', why: '*Era muy seria y siempre llevaba un vestido negro.*' },
            { q: 'El abuelo de Carmen era maestro.', a: 'ng', why: 'The text says that he told stories, but not what his job was.' },
            { q: 'Hoy todavía hay escuela en el pueblo.', a: 'f', why: '*Ya no hay escuela.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the text again and choose.', items: [
            { q: '¿Cómo iba la gente de un sitio a otro?', o: ['A pie o en burro.', 'En coche.', 'En autobús.'], why: '*No había coches; la gente iba a pie o en burro.*' },
            { q: '¿Qué hacían los niños antes de ir a la escuela?', o: ['Ayudaban en casa.', 'Jugaban en la calle.', 'Veían la televisión.'], why: '*Los niños solíamos ayudar en casa antes de ir a la escuela.*' },
            { q: '¿Qué hacía la familia por las noches en invierno?', o: ['Escuchaba las historias del abuelo.', 'Iba a la plaza.', 'Trabajaba en el huerto.'], why: '*nos sentábamos al lado del fuego y mi abuelo contaba historias.*' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Was it like this before, or is it like this now?', explain: ['groups'], groups: ['Before', 'Now'], items: [
            { s: 'No había coches.', g: 0, why: 'Carmen describes the village when she was a child.' },
            { s: 'El pueblo está casi vacío.', g: 1, why: '*Ahora el pueblo está casi vacío.*' },
            { s: 'Había una escuela.', g: 0, why: '*Había* is the past. Now: *Ya no hay escuela.*' },
            { s: 'Solo viven allí unas veinte personas.', g: 1, why: 'The present *viven* describes the village now.' },
            { s: 'Los niños jugaban en la calle.', g: 0, why: '*jugaban*: *imperfecto*, a habit in the past.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Cuando yo ___ niño, vivía en Cádiz.', o: ['era', 'fui', 'soy'], why: 'A description of the past: *imperfecto*, *era*.' },
      { q: 'Todos los veranos ___ a casa de mis abuelos.', o: ['íbamos', 'íbanos', 'iban'], why: 'A habit in the past: *imperfecto*, *íbamos*.' },
      { q: 'Antes mi madre solía ___ mucho.', o: ['cantar', 'cantaba', 'cantó'], why: 'After *soler*, the infinitive.' },
      { q: 'En mi colegio ___ un patio muy grande.', o: ['había', 'habían', 'estaba'], why: 'There was: *había*.' },
      { q: 'Antes comía carne, pero ___ como.', o: ['ya no', 'todavía', 'antes'], why: 'Not any more: *ya no*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the pretérito imperfecto.', items: [
      { q: 'De pequeña, Ana ___ mucho la tele. (ver)', a: ['veía'], why: '*ver*, *ella*: *veía*.' },
      { q: 'Mis abuelos ___ una tienda en el pueblo. (tener)', a: ['tenían'], why: '*tener*, *ellos*: *tenían*.' },
      { q: 'Nosotros ___ en un piso muy pequeño. (vivir)', a: ['vivíamos'], why: '*vivir*, *nosotros*: *vivíamos*.' },
      { q: 'El profesor siempre ___ una corbata roja. (llevar)', a: ['llevaba'], why: '*llevar*, *él*: *llevaba*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write it correctly.', items: [
      { s: 'De niños, mi hermano y yo [íbanos] al río.', a: ['íbamos'], why: '*ir*, *nosotros*: *íbamos*.' },
      { s: 'En la plaza [habían] dos bancos.', a: ['había'], why: '*había* never changes for the plural.' },
      { s: 'Mi abuela solía [cocinaba] los domingos.', a: ['cocinar'], why: 'After *soler*, the infinitive: *cocinar*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with soler. Start with the words given.', items: [
      { q: 'Antes me levantaba a las seis.', cue: 'Antes solía', a: ['Antes solía levantarme a las seis'], why: '*solía* + infinitive. The pronoun joins the infinitive: *levantarme*.' },
      { q: 'De jóvenes, salíamos todos los fines de semana.', cue: 'De jóvenes, solíamos', a: ['De jóvenes, solíamos salir todos los fines de semana', 'De jóvenes solíamos salir todos los fines de semana'], why: '*solíamos* + the infinitive *salir*.' },
    ] },
  ],
};
