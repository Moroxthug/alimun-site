// Spanish A1 for travel, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Tapas and eating out',
  goal: 'Order drinks and tapas, ask about dishes and pay.',
  art: 'sun',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['bar', 'restaurant', 'food', 'articles', 'gender', 'gustar', 'paying'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'In a bar',
      about: 'Order drinks and tapas politely and use el, la, un and una.',
      art: 'mug',
      spreads: [
        [
          { t: 'dialogue', title: 'En el bar', lines: [
            { who: 'Camarero', s: 'Hola, buenas. ¿Qué les pongo?' },
            { who: 'Lucas', s: '¿Me pone una caña, por favor?' },
            { who: 'Hannah', s: 'Y para mí, un agua sin gas.' },
            { who: 'Camarero', s: 'Muy bien. ¿Algo para comer?' },
            { who: 'Lucas', s: 'Sí, quería una ración de patatas bravas y una tortilla.' },
            { who: 'Camarero', s: '¿Algo más?' },
            { who: 'Hannah', s: 'No, nada más, gracias.' },
          ] },
          { t: 'text', md: 'There are three easy ways to order. *Quiero …* (I want) is fine in a bar. *Quería …* is a little softer and more polite. *¿Me pone …?* (Can you give me …?) is very common in Spain.\n\nThe waiter asks *¿Algo más?* (anything else?). You answer *Sí, …* or *No, nada más, gracias*.' },
        ],
        [
          { t: 'text', md: 'Every Spanish noun is **masculine** or **feminine**. Words that end in *-o* are usually masculine, and words that end in *-a* are usually feminine. Learn each word with its article.\n\nFor the plural, add *-s* after a vowel and *-es* after a consonant: *una tapa, dos tapas; un pan, dos panes*.' },
          { t: 'table', caption: 'Articles', explain: ['head', 'col0'], quiz: true, head: ['', 'the', 'a, some'], rows: [
            ['masculine', 'el vino, los vinos', 'un vino, unos vinos'],
            ['feminine', 'la tapa, las tapas', 'una tapa, unas tapas'],
          ] },
          { t: 'examples', items: [
            { s: '**Un** café con leche, por favor.', n: '*café* is masculine: *un café*.' },
            { s: '**Una** cerveza y **dos** aguas.', n: '*cerveza* is feminine: *una cerveza*.' },
            { s: '**El** pan es gratis.', n: '*pan* ends in a consonant, but it is masculine: *el pan*.' },
            { s: '**El** agua está muy fría.', n: '*agua* is feminine, but it takes *el* because it starts with a stressed *a*.' },
          ] },
          { t: 'tip', art: 'churro', md: 'In Latin America people do not say *¿Me pone …?*. They say *¿Me da …?* or *¿Me trae …?* (Can you bring me …?). *Quería* and *quiero* work everywhere.' },
        ],
        [
          { t: 'table', caption: 'In a bar', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['una caña', 'a small glass of beer'],
            ['un agua con gas / sin gas', 'sparkling water / still water'],
            ['un café con leche', 'coffee with milk'],
            ['un zumo de naranja', 'orange juice'],
            ['una tapa', 'a small plate of food'],
            ['una ración', 'a bigger plate to share'],
            ['la tortilla', 'Spanish omelette, with eggs and potatoes'],
            ['las patatas bravas', 'fried potatoes with a hot sauce'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Latin America orange juice is *jugo de naranja*, and potatoes are *papas*. In Mexico, *una tortilla* is a thin flat bread made of maize.' },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'el or la? Sort the words.', groups: ['el', 'la'], items: [
            { s: 'vino', g: 0, why: 'It ends in *-o*: *el vino*.' },
            { s: 'cerveza', g: 1, why: 'It ends in *-a*: *la cerveza*.' },
            { s: 'zumo', g: 0, why: 'It ends in *-o*: *el zumo*.' },
            { s: 'tapa', g: 1, why: 'It ends in *-a*: *la tapa*.' },
            { s: 'pan', g: 0, why: '*el pan*: learn this one with its article.' },
            { s: 'tortilla', g: 1, why: 'It ends in *-a*: *la tortilla*.' },
            { s: 'café', g: 0, why: '*el café*: learn this one with its article.' },
            { s: 'ración', g: 1, why: 'Words that end in *-ción* are feminine: *la ración*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose un or una.', items: [
            { q: '¿Me pone ___ caña?', o: ['una', 'un', 'unos'], why: '*caña* is feminine: *una caña*.' },
            { q: 'Quería ___ zumo de naranja.', o: ['un', 'una', 'unas'], why: '*zumo* is masculine: *un zumo*.' },
            { q: 'Para mí, ___ ración de queso.', o: ['una', 'un', 'unos'], why: '*ración* is feminine: *una ración*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'label', h: 'Label the café.', scene: 'cafe', extra: ['el vino'], items: [
            { x: 125, y: 137, a: 'la taza', why: '*la taza*: the cup.' },
            { x: 66, y: 152, a: 'la mesa', why: '*la mesa*: the table.' },
            { x: 95, y: 68, a: 'la ventana', why: '*la ventana*: the window.' },
            { x: 188, y: 132, a: 'el cruasán', why: '*el cruasán*: the croissant.' },
            { x: 250, y: 42, a: 'la lámpara', why: '*la lámpara*: the lamp.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the plural.', items: [
            { q: 'Dos ___, por favor. (café)', a: ['cafés', 'cafes'], why: 'After a vowel, add *-s*: *cafés*.' },
            { q: 'Tres ___ de agua. (botella)', a: ['botellas'], why: 'After a vowel, add *-s*: *botellas*.' },
            { q: 'Dos ___ de patatas bravas. (ración)', a: ['raciones'], why: 'After a consonant, add *-es*. The accent goes: *raciones*.' },
            { q: 'Cuatro ___, por favor. (pan)', a: ['panes'], why: 'After a consonant, add *-es*: *panes*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Ordering a meal and paying',
      about: 'Order a menu of the day, say what you like and ask for the bill.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'At lunchtime many restaurants in Spain have a **menú del día**: a set meal for one price. It has a first course (*el primero*), a main course (*el segundo*), a dessert (*el postre*) and often a drink and bread.\n\nTo order, say *De primero, quiero …* and *De segundo, …*. To ask what is in a dish, say *¿Qué lleva?*' },
          { t: 'dialogue', title: 'En el restaurante', lines: [
            { who: 'Camarera', s: 'Buenas tardes. ¿Ya saben qué quieren?' },
            { who: 'Daniel', s: 'Sí. De primero, quiero la sopa de verduras.' },
            { who: 'Sofia', s: 'Yo, la ensalada. ¿Qué lleva?' },
            { who: 'Camarera', s: 'Lleva tomate, lechuga, cebolla y atún.' },
            { who: 'Sofia', s: 'Perfecto. Y de segundo, el pescado.' },
            { who: 'Daniel', s: 'Para mí, el pollo con patatas.' },
            { who: 'Camarera', s: '¿Y para beber?' },
            { who: 'Daniel', s: 'Agua, por favor. No bebo vino.' },
          ] },
        ],
        [
          { t: 'text', md: 'To say what you like, use **me gusta** with one thing or an infinitive, and **me gustan** with more than one thing. To say you do not like it, put *no* first: *No me gusta el café*.\n\nTo say you do not eat something, use *sin* (without): *sin carne, sin gluten*.' },
          { t: 'examples', items: [
            { s: '**Me gusta** el pescado.', n: 'One thing: *me gusta*.' },
            { s: '**Me gustan** las aceitunas.', n: 'More than one thing: *me gustan*.' },
            { s: '**No me gusta** el queso.', n: '*No* goes before *me gusta*.' },
            { s: '¿**Te gusta** la tortilla? – Sí, mucho.', n: '*te gusta*: do you like, with *tú*.' },
            { s: 'Soy vegetariano. ¿Tiene un plato **sin carne**?', n: '*sin carne*: without meat.' },
            { s: 'Soy alérgica a los frutos secos.', n: '*frutos secos*: nuts. A woman says *alérgica*, a man *alérgico*.' },
          ] },
        ],
        [
          { t: 'text', md: 'At the end, ask for the bill: *La cuenta, por favor.* In a bar you can also say *¿Cuánto es?* (how much is it?).\n\nPrices: *12,50 €* is *doce euros con cincuenta* or *doce cincuenta*. For tens, learn *treinta* (30), *cuarenta* (40) and *cincuenta* (50).' },
          { t: 'dialogue', title: 'La cuenta', lines: [
            { who: 'Daniel', s: 'Perdone, la cuenta, por favor.' },
            { who: 'Camarera', s: 'Sí, ahora mismo. … Son veintiséis euros.' },
            { who: 'Daniel', s: '¿Puedo pagar con tarjeta?' },
            { who: 'Camarera', s: 'Sí, claro.' },
          ] },
          { t: 'tip', art: 'churro', md: 'In Spain the menu of the day is usually only at lunchtime, from Monday to Friday. Tips are not required: many people leave a little change. In Latin America the bill sometimes says how much tip people usually give.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'gusta or gustan?', items: [
            { q: 'Me ___ el pollo.', o: ['gusta', 'gustan', 'gusto'], why: 'One thing, *el pollo*: *gusta*.' },
            { q: 'No me ___ las aceitunas.', o: ['gustan', 'gusta', 'gustas'], why: 'More than one thing, *las aceitunas*: *gustan*.' },
            { q: '¿Te ___ comer en la terraza?', o: ['gusta', 'gustan', 'gustas'], why: 'With an infinitive, *comer*: *gusta*.' },
            { q: 'Me ___ mucho las tapas.', o: ['gustan', 'gusta', 'gusto'], why: '*las tapas* is plural: *gustan*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['¿Qué lleva la ensalada?', 'Tomate, lechuga y atún.'],
            ['¿Y de segundo?', 'El pescado, por favor.'],
            ['¿Y para beber?', 'Un agua sin gas.'],
            ['¿Cuánto es?', 'Son quince euros.'],
            ['¿Puedo pagar con tarjeta?', 'Sí, claro.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'De primero, quiero la sopa.', why: '*De primero* + *quiero* + the dish.' },
            { a: 'La cuenta, por favor.', why: 'The short way to ask for the bill.' },
            { a: 'No me gusta el queso.', why: '*No* goes before *me gusta*.' },
            { a: '¿Tiene un plato sin carne?', why: '*¿Tiene* + what you want + *sin carne*.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: the word and its opposite or partner.', pairs: [
            ['con gas', 'sin gas'],
            ['el primero', 'el segundo'],
            ['me gusta', 'no me gusta'],
            ['la tapa', 'la ración'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a tapas menu',
      about: 'Read a menu from a tapas bar and choose what to eat.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A menu is called *la carta*. In a tapas bar it often has two prices: one for a *tapa* and one for a *ración*.' },
          { t: 'table', caption: 'Bar La Plaza: la carta', head: ['', 'Tapa', 'Ración'], rows: [
            ['Tortilla de patatas', '2,50 €', '8 €'],
            ['Patatas bravas', '2 €', '6 €'],
            ['Croquetas de jamón', '2,50 €', '9 €'],
            ['Queso manchego', '3 €', '10 €'],
            ['Calamares fritos', '3,50 €', '12 €'],
            ['Pimientos de Padrón', '', '7 €'],
            ['Ensalada de tomate (vegetariana)', '', '6,50 €'],
          ] },
          { t: 'text', md: '*Pan: 1 €. Agua: 2 €. Caña: 2,20 €. Vino de la casa: 2,80 €.*\n\nOn this menu, the *croquetas* and *calamares* have gluten.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the menu. True, false or not given?', items: [
            { q: 'Una ración de patatas bravas cuesta seis euros.', a: 't', why: 'The *ración* column says 6 €.' },
            { q: 'Hay pimientos de Padrón en tapa.', a: 'f', why: 'There is no price for a *tapa*, only for a *ración*.' },
            { q: 'La tapa de queso cuesta tres euros.', a: 't', why: '*Queso manchego*: 3 € for a *tapa*.' },
            { q: 'La ensalada es vegetariana.', a: 't', why: 'The menu says *(vegetariana)*.' },
            { q: 'Los calamares son muy picantes.', a: 'ng', why: 'The menu does not say if they are hot.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Eres vegetariano. ¿Qué pides?', o: ['la ensalada de tomate', 'las croquetas de jamón', 'los calamares fritos'], why: 'The salad is *vegetariana*. *Jamón* is ham and *calamares* are squid.' },
            { q: 'No puedes comer gluten. ¿Qué no pides?', o: ['las croquetas', 'el queso', 'la tortilla'], why: 'The menu says the *croquetas* and *calamares* have gluten.' },
            { q: 'Pides una tapa de tortilla y una caña. ¿Cuánto es?', o: ['4,70 €', '10,20 €', '5,30 €'], why: '2,50 € + 2,20 € = 4,70 €.' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Food and drink from this unit.', words: [
            { a: 'queso', clue: 'Es blanco o amarillo y se come con pan.' },
            { a: 'agua', clue: 'Con gas o sin gas.' },
            { a: 'pescado', clue: 'Vive en el mar y se come.' },
            { a: 'cuenta', clue: 'La pides al final, para pagar.' },
            { a: 'postre', clue: 'Lo comes después del segundo.' },
            { a: 'tapa', clue: 'Un plato pequeño en un bar.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '¿Me pone ___ cerveza, por favor?', o: ['una', 'un', 'el'], why: '*cerveza* is feminine: *una cerveza*.' },
      { q: 'Me ___ las croquetas.', o: ['gustan', 'gusta', 'gusto'], why: '*las croquetas* is plural: *gustan*.' },
      { q: 'Quiero pagar. Digo: «___»', o: ['La cuenta, por favor.', 'Nada más.', 'De primero.'], why: 'To pay, ask for *la cuenta*.' },
      { q: 'Un plato grande para compartir es una ___.', o: ['ración', 'tapa', 'caña'], why: '*una ración*: a bigger plate to share.' },
      { q: '¿Qué ___ la sopa? – Verduras y pollo.', o: ['lleva', 'tiene usted', 'gusta'], why: '*¿Qué lleva?*: what is in it?' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Dos ___ de croquetas, por favor. (ración)', a: ['raciones'], why: 'After a consonant, add *-es*: *raciones*.' },
      { q: 'Soy vegetariana. ¿Tiene un plato ___ carne?', a: ['sin'], why: '*sin*: without.' },
      { q: '¿Algo más? – No, ___ más, gracias.', a: ['nada'], why: '*nada más*: nothing more.' },
      { q: 'No me ___ el vino. (gustar)', a: ['gusta'], why: 'One thing, *el vino*: *gusta*.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'el or la?', groups: ['el', 'la'], items: [
      { s: 'zumo', g: 0, why: '*el zumo*.' },
      { s: 'tortilla', g: 1, why: '*la tortilla*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentence.', items: [
      { a: 'De segundo, quiero el pollo.', why: '*De segundo* + *quiero* + the dish.' },
    ] },
  ],
};
