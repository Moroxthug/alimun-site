// Spanish A1, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Home and neighbourhood',
  goal: 'Describe your home and your neighbourhood and say where things are.',
  art: 'cactus',
  tags: { skills: ['vocabulary', 'grammar', 'reading'], topics: ['home', 'furniture', 'hay', 'estar', 'location', 'prepositions-of-place', 'neighbourhood'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Hay una cocina',
      about: 'Rooms and furniture, and hay (there is, there are).',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Here are the rooms of a home and some furniture. Learn each word with **el** or **la**.' },
          { t: 'table', caption: 'La casa', explain: ['head'], head: ['Rooms', 'Furniture'], rows: [
            ['la cocina', 'la mesa'],
            ['el salón', 'la silla'],
            ['el dormitorio', 'la cama'],
            ['el baño', 'el sofá'],
            ['el comedor', 'el armario'],
            ['la terraza', 'la estantería'],
            ['el pasillo', 'la lámpara'],
            ['la entrada', 'la nevera'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain, a flat is **el piso**. In Latin America, it is *el departamento* or *el apartamento*. A bedroom is also *la habitación*, and in many Latin American countries *el cuarto*.' },
        ],
        [
          { t: 'text', md: '**hay** means *there is* and *there are*. It never changes: *Hay una cama. Hay dos sillas.* After *hay*, use **un, una, unos, unas**, a number, or **mucho, mucha, muchos, muchas**. Do not use *el* or *la* after *hay*.' },
          { t: 'examples', items: [
            { s: 'En mi piso **hay** dos dormitorios.', n: '*hay* + a number.' },
            { s: '**Hay** una mesa y cuatro sillas en la cocina.', n: '*hay* + *una*.' },
            { s: 'En el salón **hay** muchos libros.', n: '*muchos* + a masculine plural, *muchas* + a feminine plural.' },
            { s: '**Hay** unas plantas en la terraza.', n: '*unos, unas* mean some.' },
            { s: '¿**Hay** ascensor? – No, no **hay** ascensor.', n: 'In questions and with *no*, you often use no article.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'label', h: 'Label the kitchen.', scene: 'kitchen', extra: ['la cama', 'el sofá'], items: [
            { x: 160, y: 50, a: 'la ventana', why: '*la ventana*: the window.' },
            { x: 260, y: 70, a: 'la nevera', why: '*la nevera*: the fridge.' },
            { x: 71, y: 100, a: 'la olla', why: '*la olla*: the pot.' },
            { x: 156, y: 100, a: 'el hervidor', why: '*el hervidor*: the kettle.' },
            { x: 160, y: 165, a: 'el armario', why: '*el armario*: the cupboard.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Write the words for the home.', words: [
            { a: 'cama', clue: 'Es para dormir.' },
            { a: 'silla', clue: 'Es para sentarse a la mesa.' },
            { a: 'mesa', clue: 'En la cocina hay una ___ y cuatro sillas.' },
            { a: 'cocina', clue: 'Aquí preparas la comida.' },
            { a: 'nevera', clue: 'Aquí está la leche fría.' },
            { a: 'terraza', clue: 'Está fuera, con plantas y sol.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word after hay.', items: [
            { q: 'En mi casa hay ___ terraza.', o: ['una', 'la', 'un'], why: '*terraza* is feminine. After *hay*: *una*, not *la*.' },
            { q: 'En la cocina hay ___ sillas.', o: ['cuatro', 'las', 'la'], why: 'After *hay*: a number, not *las*.' },
            { q: 'En el dormitorio hay ___ armario grande.', o: ['un', 'el', 'una'], why: '*armario* is masculine. After *hay*: *un*.' },
            { q: 'En la estantería hay ___ libros.', o: ['muchos', 'muchas', 'mucho'], why: '*libros* is masculine plural: *muchos*.' },
            { q: 'En la terraza hay ___ plantas.', o: ['muchas', 'muchos', 'las'], why: '*plantas* is feminine plural: *muchas*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'En el salón hay [el] sofá.', a: ['un'], why: 'After *hay*, use *un* or *una*, not *el*.' },
            { s: 'En mi piso [son] dos baños.', a: ['hay'], why: 'To say *there are*, use *hay*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: '¿Dónde está?',
      about: 'Say where things and people are with estar, and choose hay or está.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Use **estar** to say where someone or something is: *El baño está aquí. Estoy en casa.* *estar* is irregular, so learn every form.' },
          { t: 'table', caption: 'estar (to be)', quiz: true, head: ['', 'estar'], rows: [
            ['yo', 'estoy'],
            ['tú', 'estás'],
            ['él / ella / usted', 'está'],
            ['nosotros / nosotras', 'estamos'],
            ['vosotros / vosotras', 'estáis'],
            ['ellos / ellas / ustedes', 'están'],
          ] },
          { t: 'examples', items: [
            { s: '¿Dónde **está** el baño?', n: 'One thing: *está*.' },
            { s: 'Mis padres **están** en la cocina.', n: 'Plural: *están*.' },
            { s: '**Estamos** en el salón.', n: '*nosotros estamos*' },
            { s: 'Madrid **está** en el centro de España.', n: 'Cities and countries too.' },
          ] },
          { t: 'tip', art: 'owl', md: '*ser* and *estar* both mean *to be*. To say where something is, use *estar*: *Madrid está en España*, not *Madrid es en España*.' },
        ],
        [
          { t: 'text', md: '**hay** says that something exists. You often use it the first time you talk about a thing: *Hay un bar en mi calle.* **está** and **están** say where a thing is that you already know: *El bar está en la plaza.*' },
          { t: 'table', caption: 'hay or está?', head: ['hay', 'está / están'], rows: [
            ['hay + un, una, unos, unas', 'el, la, los, las + está / están'],
            ['hay + dos, tres, muchos, muchas', 'mi, tu, su + está / están'],
            ['Hay un sofá en el salón.', 'El sofá está en el salón.'],
            ['Hay dos baños.', 'Los baños están aquí.'],
          ] },
          { t: 'examples', items: [
            { s: '¿**Hay** un supermercado por aquí? – Sí, **hay** uno en la plaza.', n: 'Is there one? *hay*.' },
            { s: '¿Dónde **está** el supermercado? – **Está** en la plaza.', n: 'You know the supermarket: *está*.' },
            { s: '**Mi** casa **está** en el centro.', n: '*mi* + *está*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of estar.', verb: 'estar', tense: 'present', rows: [
            ['yo', 'estoy'],
            ['tú', 'estás'],
            ['él / ella / usted', 'está'],
            ['nosotros', 'estamos'],
            ['vosotros', 'estáis', 'With an accent: *estáis*.'],
            ['ellos / ellas / ustedes', 'están'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the right form of estar.', items: [
            { q: 'Yo ___ en el salón.', a: ['estoy'], why: '*yo estoy*' },
            { q: '¿Dónde ___ tú?', a: ['estás'], why: '*tú estás*, with an accent.' },
            { q: 'El baño ___ aquí.', a: ['está'], why: 'One thing: *está*.' },
            { q: 'Nosotros ___ en la terraza.', a: ['estamos'], why: '*nosotros estamos*' },
            { q: '¿Vosotros ___ en casa?', a: ['estáis'], why: '*vosotros estáis*' },
            { q: 'Las sillas ___ en la cocina.', a: ['están'], why: 'Plural: *están*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'hay, está or están? Choose.', items: [
            { q: 'En mi calle ___ un supermercado.', o: ['hay', 'está', 'están'], why: '*un supermercado*: the first time, so *hay*.' },
            { q: 'El supermercado ___ en la plaza.', o: ['está', 'hay', 'están'], why: '*el supermercado*: a thing you know, so *está*.' },
            { q: '¿Dónde ___ mis llaves?', o: ['están', 'hay', 'está'], why: '*mis llaves* is plural: *están*.' },
            { q: 'En el piso ___ dos dormitorios.', o: ['hay', 'están', 'está'], why: 'A number: *hay*.' },
            { q: '¿___ un banco por aquí?', o: ['Hay', 'Está', 'Están'], why: '*un banco*: Is there one? *hay*.' },
            { q: 'Tu móvil ___ en la mesa.', o: ['está', 'hay', 'están'], why: '*tu móvil*: one thing you know, so *está*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: '¿Dónde está la cocina?', why: '*¿Dónde* + *está* + the thing.' },
            { a: '¿Dónde están mis llaves?', why: 'Plural: *están*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Al lado de, encima de',
      about: 'Say where things are, and use al and del.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'These words say where something is. Most of them end in **de**: *El gato está encima de la cama.*' },
          { t: 'table', caption: 'Where is it?', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'English'], rows: [
            ['en', 'in, on'],
            ['al lado de', 'next to'],
            ['delante de', 'in front of'],
            ['detrás de', 'behind'],
            ['encima de', 'on, on top of'],
            ['debajo de', 'under'],
            ['entre … y …', 'between … and …'],
            ['enfrente de', 'opposite'],
            ['cerca de', 'near'],
            ['lejos de', 'far from'],
            ['a la derecha de', 'to the right of'],
            ['a la izquierda de', 'to the left of'],
          ] },
          { t: 'tip', art: 'owl', md: '*entre* has no *de*: *La lámpara está entre el sofá y la ventana.*' },
        ],
        [
          { t: 'text', md: '**a** + **el** becomes **al**, and **de** + **el** becomes **del**: *al lado del sofá*, not *a el lado de el sofá*. With *la, los* and *las*, nothing changes: *al lado de la cama, cerca de los bares*.' },
          { t: 'examples', items: [
            { s: 'El perro está **debajo de la** mesa.', n: '*la*: no change.' },
            { s: 'La lámpara está **al lado del** sofá.', n: '*a + el = al*, *de + el = del*.' },
            { s: 'El metro está **cerca del** parque.', n: '*de + el = del*.' },
            { s: 'La farmacia está **a la derecha del** banco.', n: '*de + el = del*.' },
            { s: 'Mi casa está **enfrente de la** escuela.', n: '*la*: no change.' },
            { s: 'La cocina está **entre** el salón **y** el baño.', n: '*entre … y …*, without *de*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Las llaves están ___ de la mesa, en el suelo.', o: ['debajo', 'encima', 'enfrente'], why: 'On the floor, so under the table: *debajo de*.' },
            { q: 'La cocina está ___ el salón y el baño.', o: ['entre', 'al lado', 'delante'], why: '*entre … y …*: between two things.' },
            { q: 'Vivo en Madrid y mi familia vive en Chile. Vivo muy ___ de mi familia.', o: ['lejos', 'cerca', 'encima'], why: 'Madrid and Chile are far apart: *lejos de*.' },
            { q: 'El coche está ___ de la casa, en la calle.', o: ['delante', 'debajo', 'encima'], why: 'In the street, in front of the house: *delante de*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write del, de la or al.', items: [
            { q: 'La silla está al lado ___ armario.', a: ['del'], why: '*el armario*: *de + el = del*.' },
            { q: 'El gato está encima ___ cama.', a: ['de la'], why: '*la cama*: *de la*, no change.' },
            { q: 'El banco está cerca ___ parque.', a: ['del'], why: '*el parque*: *de + el = del*.' },
            { q: 'Mi piso está enfrente ___ estación.', a: ['de la'], why: '*la estación*: *de la*, no change.' },
            { q: 'La tienda está ___ lado de la farmacia.', a: ['al'], why: '*a + el lado = al lado*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the words that say where.', items: [
            { s: 'Las gafas están [encima de] la estantería.', why: '*encima de*: on top of.' },
            { s: 'Mi casa está [cerca del] mercado.', why: '*cerca del*: near the. *de + el = del*.' },
            { s: 'El sofá está [entre] la ventana [y] la puerta.', why: '*entre … y …*: between … and …' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentences. Two words do not belong.', items: [
            { a: 'Mi gato está siempre encima del sofá.', extra: ['de', 'el'], why: '*de + el = del*. You cannot say *de el*.' },
            { a: '¿Hay una farmacia cerca de aquí?', extra: ['del', 'está'], why: '*Is there…?*: *¿Hay…?* *cerca de aquí*: near here.' },
            { a: 'El baño está a la derecha del dormitorio.', extra: ['al', 'hay'], why: '*el baño*: a thing you know, so *está*. *de + el dormitorio = del dormitorio*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A new home',
      about: 'Read a flat advert and an email about a new neighbourhood.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'Se alquila piso en el centro', md: 'Piso de 70 metros en el centro de la ciudad. Tiene dos dormitorios, un salón grande con mucha luz, una cocina con nevera y un baño. También hay una terraza pequeña. El piso está en la tercera planta y hay ascensor.\n\nEl edificio está enfrente de un parque y al lado de una parada de metro. Cerca hay supermercados, bares y una farmacia.\n\nPrecio: 850 € al mes. Más información: piso.centro@example.com' },
        ],
        [
          { t: 'reading', title: 'Mi barrio nuevo', md: 'Hola, Daniel:\n\n¡Ya vivo en mi piso nuevo! Es pequeño, pero muy bonito. El salón tiene una ventana grande, y mi dormitorio está al lado del baño.\n\nMi barrio es muy tranquilo. Delante de mi casa hay una plaza con árboles y unos bancos. Al lado del edificio hay una panadería, y enfrente hay un bar con churros muy buenos.\n\nEl metro está un poco lejos, a quince minutos, pero hay una parada de autobús cerca de la plaza.\n\n¿Vienes a mi casa el sábado? Hay una cama para ti en el salón: ¡el sofá!\n\nUn abrazo,\nInés' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'El piso del anuncio tiene dos dormitorios.', a: 't', why: '*Tiene dos dormitorios.*' },
            { q: 'El piso del anuncio no tiene ascensor.', a: 'f', why: '*El piso está en la tercera planta y hay ascensor.*' },
            { q: 'El edificio del anuncio está cerca del metro.', a: 't', why: 'It is *al lado de una parada de metro*.' },
            { q: 'El piso de Inés es muy grande.', a: 'f', why: '*Es pequeño, pero muy bonito.*' },
            { q: 'Delante de la casa de Inés hay una plaza.', a: 't', why: '*Delante de mi casa hay una plaza con árboles.*' },
            { q: 'Inés tiene un perro.', a: 'ng', why: 'The email does not talk about animals.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the email again and choose.', items: [
            { q: '¿Qué hay enfrente de la casa de Inés?', o: ['un bar', 'una panadería', 'un parque'], why: '*enfrente hay un bar con churros muy buenos.* The bakery is next to the building.' },
            { q: '¿Dónde está la parada de autobús?', o: ['cerca de la plaza', 'al lado del bar', 'lejos de la casa'], why: '*hay una parada de autobús cerca de la plaza.*' },
            { q: '¿Dónde está la cama para Daniel?', o: ['en el salón', 'en el dormitorio de Inés', 'en la plaza'], why: 'The bed for Daniel is the sofa, in the living room.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'hay, está or están? Choose.', items: [
      { q: 'En mi barrio ___ dos parques.', o: ['hay', 'están', 'está'], why: 'A number: *hay*.' },
      { q: '¿Dónde ___ el baño?', o: ['está', 'hay', 'están'], why: '*el baño*: one thing you know, so *está*.' },
      { q: 'Mis hijos ___ en el colegio.', o: ['están', 'hay', 'está'], why: 'People you know, plural: *están*.' },
      { q: 'En el salón ___ un sofá grande.', o: ['hay', 'está', 'es'], why: '*un sofá*: *hay*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'La farmacia está al lado ___ banco.', o: ['del', 'de el', 'de la'], why: '*de + el = del*.' },
      { q: 'Yo ___ en casa.', o: ['estoy', 'soy', 'hay'], why: 'Where you are: *estar*, *yo estoy*.' },
      { q: 'El gato está ___ la cama. No lo veo.', o: ['debajo de', 'encima de', 'delante de'], why: 'You cannot see the cat, so it is under the bed.' },
      { q: 'En la cocina hay ___ sillas.', o: ['muchas', 'muchos', 'las'], why: '*sillas* is feminine plural: *muchas*. No *las* after *hay*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: '¿Dónde ___ vosotros? (estar)', a: ['estáis'], why: '*vosotros estáis*' },
      { q: 'Mi cama está en el ___.', a: ['dormitorio'], why: 'The bed is in the bedroom: *el dormitorio*.' },
      { q: 'La lámpara está ___ el sofá y la ventana.', a: ['entre'], why: '*entre … y …*: between … and …' },
      { q: 'Mi casa está cerca ___ estación.', a: ['de la'], why: '*la estación*: *de la*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Madrid [es] en el centro de España.', a: ['está'], why: 'To say where a place is, use *estar*: *está*.' },
      { s: 'En la terraza hay [las] plantas.', a: ['unas', 'muchas'], why: 'After *hay*, no *las*: *unas plantas* or *muchas plantas*.' },
    ] },
  ],
};
