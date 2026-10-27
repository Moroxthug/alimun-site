// Spanish A2 for travel, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Eating out',
  goal: 'Order food, ask about dishes and pay.',
  art: 'pizza',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['restaurant', 'ordering', 'menu', 'allergies', 'paying'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Ordering and asking about the menu',
      about: 'Order a meal and ask what is in a dish.',
      art: 'churro',
      spreads: [
        [
          { t: 'dialogue', title: 'En el restaurante', lines: [
            { who: 'Camarero', s: 'Buenas tardes. ¿Qué van a tomar?' },
            { who: 'Lucía', s: 'Buenas tardes. ¿Qué nos recomienda?' },
            { who: 'Camarero', s: 'Hoy tenemos un menú del día muy bueno: de primero, gazpacho o ensalada; de segundo, pescado a la plancha o pollo asado.' },
            { who: 'Lucía', s: '¿Qué lleva la ensalada?' },
            { who: 'Camarero', s: 'Lleva lechuga, tomate, cebolla, atún y huevo.' },
            { who: 'Lucía', s: 'Muy bien. Para mí, de primero, la ensalada, y de segundo, el pescado.' },
            { who: 'Andrés', s: 'Yo quería el gazpacho y el pollo, por favor.' },
            { who: 'Camarero', s: '¿Y para beber?' },
            { who: 'Andrés', s: 'Una botella de agua sin gas y una cerveza, por favor.' },
            { who: 'Camarero', s: 'Perfecto. El postre o el café está incluido en el menú.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Many restaurants in Spain have a *menú del día* at lunchtime on weekdays: a starter, a main course, a dessert or coffee, bread and a drink, for one price. In Latin America a set lunch has other names, for example *el menú ejecutivo* or *la comida corrida* in Mexico.' },
        ],
        [
          { t: 'text', md: 'To order, say **para mí** + the dish, or use *quería* or *me pone*: *Para mí, el pescado. Quería una sopa. ¿Me pone un café?*\n\nThe parts of a meal: **de primero** (starter), **de segundo** (main course), **de postre** (dessert). To ask what is in a dish, use the verb **llevar**: *¿Qué lleva la paella?*' },
          { t: 'examples', items: [
            { s: '**Para mí**, de primero, la sopa de verduras.', n: 'A very common way to order.' },
            { s: '¿**Qué lleva** la tortilla? – **Lleva** huevos, patatas y cebolla.', n: '*llevar*: to have in it, as an ingredient.' },
            { s: '¿**Qué me recomienda**?', n: 'You ask the waiter for an idea.' },
            { s: '**De postre**, un flan, por favor.', n: '*el postre*: the dessert at the end of the meal.' },
            { s: '¿**Me trae** otra botella de agua, por favor?', n: '*traer*: to bring. *¿Me trae…?* is polite and usual.' },
          ] },
        ],
        [
          { t: 'table', caption: 'On the menu', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['la carta', 'menu (the full list)'],
            ['el menú del día', 'set menu for one price'],
            ['el primer plato / el segundo plato', 'starter / main course'],
            ['el postre', 'dessert'],
            ['a la plancha', 'cooked on a hot metal plate'],
            ['asado', 'roasted'],
            ['frito', 'fried'],
            ['las bebidas', 'drinks'],
            ['el agua con gas / sin gas', 'sparkling / still water'],
          ] },
          { t: 'ex', kind: 'sort', h: 'Put each dish in the right part of the meal.', groups: ['de primero', 'de segundo', 'de postre'], items: [
            { s: 'sopa de verduras', g: 0, why: 'A soup is a starter.' },
            { s: 'ensalada mixta', g: 0, why: 'A salad is usually a starter.' },
            { s: 'pollo asado', g: 1, why: 'Meat is a main course.' },
            { s: 'pescado a la plancha', g: 1, why: 'Fish is a main course.' },
            { s: 'flan', g: 2, why: 'A sweet dish at the end: *el postre*.' },
            { s: 'helado de chocolate', g: 2, why: 'Ice cream is a dessert.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '¿Qué ___ la paella? – Arroz, pollo y verduras.', o: ['lleva', 'tiene que', 'pone'], why: 'To ask about the ingredients: *¿Qué lleva…?*' },
            { q: '___ mí, el pollo asado.', o: ['Para', 'Por', 'A'], why: 'To order for yourself: *para mí*.' },
            { q: 'De ___, un helado, por favor.', o: ['postre', 'primero', 'bebida'], why: 'Ice cream comes at the end: *de postre*.' },
            { q: '¿Me ___ un poco más de pan, por favor?', o: ['trae', 'traes', 'traigo'], why: 'To the waiter with *usted*: *¿Me trae…?*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Para mí, de segundo, el pescado.', why: '*Para mí*, then the part of the meal, then the dish.' },
            { a: '¿Qué nos recomienda usted?', why: '*nos* before the verb *recomienda*.' },
            { a: '¿Me trae una botella de agua?', why: '*Me* before *trae*, then the thing.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Allergies, preferences and paying',
      about: 'Say what you cannot eat and ask for the bill.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To say what you cannot eat, use **soy alérgico a** (a man) or **soy alérgica a** (a woman): *Soy alérgica a los frutos secos.* You can also say *no puedo comer…* or *no como carne*.\n\nUse **sin** for without and **con** for with: *sin gluten*, *con leche*. Ask *¿Lleva…?* to check: *¿Lleva huevo?*' },
          { t: 'examples', items: [
            { s: 'Soy **alérgico al** marisco.', n: '*a + el = al*: *al marisco*.' },
            { s: 'Soy **vegetariana**. ¿Tienen algún plato **sin** carne?', n: 'A woman says *vegetariana*, a man *vegetariano*.' },
            { s: '¿Este plato **lleva** gluten?', n: 'A yes/no question with *llevar*.' },
            { s: 'Un café **con** leche y otro **sin** azúcar, por favor.', n: '*con*: with. *sin*: without.' },
            { s: '**No me gusta** el picante.', n: 'Something you do not like, not an allergy.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'La cuenta', lines: [
            { who: 'Grace', s: 'Perdone, ¿nos trae la cuenta, por favor?' },
            { who: 'Camarera', s: 'Ahora mismo. ¿Les ha gustado todo?' },
            { who: 'Grace', s: 'Sí, todo muy rico, gracias. ¿Podemos pagar con tarjeta?' },
            { who: 'Camarera', s: 'Sí, claro. ¿Juntos o por separado?' },
            { who: 'Liam', s: 'Juntos, por favor.' },
            { who: 'Camarera', s: 'Son cuarenta y dos euros con sesenta.' },
            { who: 'Liam', s: 'Aquí tiene. Y esto es para usted.' },
            { who: 'Camarera', s: '¡Muchas gracias! Que tengan un buen día.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain a tip, *la propina*, is not obligatory; many people leave a few coins or round up. In many Latin American countries a tip of about ten per cent is usual, and sometimes it is already on the bill as *servicio*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Ana dice: «Soy ___ a los frutos secos».', o: ['alérgica', 'alérgico', 'alérgicos'], why: 'Ana is a woman: *alérgica*.' },
            { q: 'Soy alérgico ___ marisco.', o: ['al', 'a la', 'del'], why: '*el marisco*: *a + el = al*.' },
            { q: 'No como carne. ¿Tienen algo ___ carne?', o: ['sin', 'con', 'para'], why: 'Without meat: *sin carne*.' },
            { q: '¿Nos trae la ___, por favor? Queremos pagar.', o: ['cuenta', 'carta', 'propina'], why: 'To pay, you ask for *la cuenta*. *La carta* is the menu.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['¿Lleva gluten este plato?', 'No, es sin gluten.'],
            ['¿Juntos o por separado?', 'Juntos, por favor.'],
            ['¿Podemos pagar con tarjeta?', 'Sí, claro.'],
            ['¿Les ha gustado todo?', 'Sí, estaba todo muy rico.'],
            ['¿Tienen algún plato vegetariano?', 'Sí, la lasaña de verduras.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Soy ___. No como carne ni pescado. (vegetariano, a woman)', a: ['vegetariana'], why: 'A woman: *vegetariana*.' },
            { q: 'Un café ___ leche, por favor. (with)', a: ['con'], why: 'With milk: *con leche*.' },
            { q: '¿___ huevo la tortilla? (llevar)', a: ['Lleva'], why: '*la tortilla* is *ella*: *lleva*.' },
            { q: 'Dejo dos euros de ___ para el camarero.', a: ['propina'], why: 'Money you leave for the waiter: *la propina*.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which word does not belong?', items: [
            { o: ['la propina', 'el gazpacho', 'la tortilla', 'la paella'], why: '*la propina* is money for the waiter; the others are dishes.' },
            { o: ['la cuenta', 'asado', 'frito', 'a la plancha'], why: '*la cuenta* is the bill; the others are ways to cook.' },
            { o: ['el postre', 'el agua', 'la cerveza', 'el zumo'], why: '*el postre* is food; the others are drinks.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a menu and a short review',
      about: 'Read a menu and a review of a restaurant.',
      art: 'nata',
      spreads: [
        [
          { t: 'text', md: 'Read the menu of a small restaurant. Some dishes have a note about allergies.' },
          { t: 'reading', title: 'Casa Marisa: menú del día', md: '**Menú del día: 14,50 €**\nDe lunes a viernes, de 13:00 a 16:00\n\n**Primeros**\nGazpacho andaluz\nEnsalada de la casa (lleva atún y huevo)\nSopa de pescado\n\n**Segundos**\nPollo asado con patatas\nMerluza a la plancha con verduras\nLasaña de verduras (plato vegetariano)\n\n**Postres**\nFlan casero, fruta del tiempo o café\n\nIncluye pan y una bebida: agua, refresco o una copa de vino.\n\n*Todos nuestros platos se pueden preparar sin gluten. Pregunte a nuestro personal por los alérgenos.*' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the menu. True, false or not given?', items: [
            { q: 'El menú del día se puede pedir el sábado.', a: 'f', why: 'It is *de lunes a viernes*.' },
            { q: 'La ensalada de la casa lleva huevo.', a: 't', why: '*Ensalada de la casa (lleva atún y huevo)*.' },
            { q: 'Hay un segundo plato sin carne ni pescado.', a: 't', why: 'The *lasaña de verduras* is vegetarian.' },
            { q: 'La bebida se paga aparte.', a: 'f', why: '*Incluye pan y una bebida.*' },
            { q: 'Los platos también se pueden pedir sin gluten.', a: 't', why: '*Todos nuestros platos se pueden preparar sin gluten.*' },
            { q: 'El restaurante tiene una terraza.', a: 'ng', why: 'The menu does not talk about a terrace.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Una opinión en internet', md: 'Comimos en Casa Marisa un martes, durante nuestras vacaciones. El menú del día es muy completo y no es caro. Yo pedí la sopa de pescado y la merluza, y mi amiga, que es vegetariana, la ensalada sin atún y la lasaña. Todo estaba muy rico. El camarero fue muy amable y nos explicó qué lleva cada plato. El único problema: a las dos el restaurante está lleno y hay que esperar. ¡Recomiendo llegar pronto!' },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Qué pidió la amiga de primero?', o: ['la ensalada sin atún', 'la sopa de pescado', 'el gazpacho'], why: '*mi amiga … la ensalada sin atún y la lasaña*.' },
            { q: '¿Qué dice la opinión del camarero?', o: ['Fue muy amable.', 'Fue muy lento.', 'No explicó los platos.'], why: '*El camarero fue muy amable y nos explicó qué lleva cada plato.*' },
            { q: '¿Qué problema hay?', o: ['A las dos hay mucha gente.', 'El menú es caro.', 'No hay platos vegetarianos.'], why: '*a las dos el restaurante está lleno y hay que esperar*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '¿Qué ___ el gazpacho? – Tomate, pepino, pimiento y aceite.', o: ['lleva', 'trae', 'pide'], why: 'To ask about ingredients: *¿Qué lleva…?*' },
      { q: '___ mí, el pescado, por favor.', o: ['Para', 'Por', 'De'], why: 'To order: *para mí*.' },
      { q: 'Para pagar, pide ___.', o: ['la cuenta', 'la carta', 'el postre'], why: 'The bill is *la cuenta*.' },
      { q: 'Omar dice: «Soy ___ al marisco».', o: ['alérgico', 'alérgica', 'alergia'], why: 'Omar is a man: *alérgico*.' },
      { q: 'Un helado es ___.', o: ['un postre', 'un primer plato', 'una bebida'], why: 'Ice cream comes at the end of the meal.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Un café ___ azúcar, por favor. (without)', a: ['sin'], why: 'Without: *sin*.' },
      { q: 'De ___, la sopa, y de segundo, el pollo.', a: ['primero'], why: 'The starter: *de primero*.' },
      { q: '¿Me ___ un poco de pan, por favor? (traer, usted)', a: ['trae'], why: 'Polite request to the waiter: *¿Me trae…?*' },
      { q: '¿Pagan juntos o por ___?', a: ['separado'], why: 'Each person pays: *por separado*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Nos trae la cuenta, por favor?', why: '*Nos* before *trae*, then the thing.' },
      { a: 'Soy alérgica a los frutos secos.', why: '*Soy alérgica a* + the food.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: '«La carta» es la lista de los platos del restaurante.', a: 't', why: '*la carta*: the menu.' },
      { q: '«A la plancha» quiere decir que el plato está frío.', a: 'f', why: '*a la plancha*: cooked on a hot metal plate.' },
    ] },
  ],
};
