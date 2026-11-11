// Spanish A1, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Food and drink',
  goal: 'Order in a bar or café, buy food and say what you want.',
  art: 'mug',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['articles', 'gender', 'plurals', 'present-tense', 'regular-verbs', 'ordering', 'prices', 'food'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'el, la, un, una',
      about: 'Masculine and feminine nouns, the articles and the plural.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Every Spanish noun is **masculine** or **feminine**. Most nouns that end in **-o** are masculine: *el vino*. Most nouns that end in **-a** are feminine: *la cerveza*. For other endings, learn the noun with its article: *el café, la leche, el pan*.' },
          { t: 'table', caption: 'Articles', explain: ['head', 'col0'], quiz: true, head: ['', 'masculine', 'feminine'], rows: [
            ['the', 'el queso', 'la manzana'],
            ['the (plural)', 'los quesos', 'las manzanas'],
            ['a, an', 'un queso', 'una manzana'],
            ['some', 'unos quesos', 'unas manzanas'],
          ] },
          { t: 'tip', art: 'owl', md: 'A few nouns are different. *el día* (the day) is masculine, and *la mano* (the hand) is feminine. *agua* (water) is feminine, but you say *el agua*.' },
        ],
        [
          { t: 'text', md: 'To make the plural, add **-s** after a vowel: *el tomate, los tomates*. Add **-es** after a consonant: *el pan, los panes*. A final **-z** becomes **-ces**: *la nuez, las nueces*.' },
          { t: 'examples', items: [
            { s: '**el** bocadillo → **los** bocadillos', n: 'After a vowel: *-s*.' },
            { s: '**la** naranja → **las** naranjas', n: 'After a vowel: *-s*.' },
            { s: '**el** pan → **los** panes', n: 'After a consonant: *-es*.' },
            { s: '**el** limón → **los** limones', n: 'The accent goes away: *limón, limones*.' },
            { s: '**una** tortilla y **unos** churros', n: '*unos, unas* mean some.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Some food words are different in Latin America. *La patata* in Spain is *la papa* there, and *el zumo* (juice) is *el jugo*.' },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'el or la? Sort the nouns.', groups: ['el', 'la'], items: [
            { s: 'queso', g: 0, why: 'It ends in *-o*: *el queso*.' },
            { s: 'leche', g: 1, why: 'Learn it with the article: *la leche*.' },
            { s: 'pan', g: 0, why: 'Learn it with the article: *el pan*.' },
            { s: 'manzana', g: 1, why: 'It ends in *-a*: *la manzana*.' },
            { s: 'café', g: 0, why: 'Learn it with the article: *el café*.' },
            { s: 'cerveza', g: 1, why: 'It ends in *-a*: *la cerveza*.' },
            { s: 'bocadillo', g: 0, why: 'It ends in *-o*: *el bocadillo*.' },
            { s: 'fruta', g: 1, why: 'It ends in *-a*: *la fruta*.' },
          ] },
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'apple', o: ['la manzana', 'el queso', 'el pan'], why: 'It is an apple: *la manzana*.' },
            { pic: 'bread', o: ['el pan', 'la leche', 'el café'], why: 'It is bread: *el pan*.' },
            { pic: 'cheese', o: ['el queso', 'la tortilla', 'el tomate'], why: 'It is cheese: *el queso*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write el, la, los or las.', items: [
            { q: '___ queso es de Asturias.', a: ['el', 'El'], why: '*queso* is masculine and singular: *el*.' },
            { q: '___ naranjas son de Valencia.', a: ['las', 'Las'], why: '*naranjas* is feminine and plural: *las*.' },
            { q: '___ leche es para el café.', a: ['la', 'La'], why: '*leche* is feminine: *la*.' },
            { q: '___ churros son muy buenos.', a: ['los', 'Los'], why: '*churros* is masculine and plural: *los*.' },
            { q: '___ agua es para mi hijo.', a: ['el', 'El'], why: '*agua* is feminine, but it takes *el*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Order two. Start with Dos.', items: [
            { q: 'Un café, por favor.', cue: 'Dos', a: ['Dos cafés, por favor.'], why: 'After a vowel: *cafés*.' },
            { q: 'Una cerveza, por favor.', cue: 'Dos', a: ['Dos cervezas, por favor.'], why: 'After a vowel: *cervezas*.' },
            { q: 'Un zumo de naranja, por favor.', cue: 'Dos', a: ['Dos zumos de naranja, por favor.'], why: 'Only *zumo* changes: *zumos de naranja*.' },
            { q: 'Una tostada con tomate, por favor.', cue: 'Dos', a: ['Dos tostadas con tomate, por favor.'], why: 'Only *tostada* changes: *tostadas con tomate*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'search', h: 'Find the food and drink words.', words: ['queso', 'leche', 'pan', 'agua', 'vino', 'fruta', 'tomate', 'huevo'] },
          { t: 'ex', kind: 'odd', h: 'Find the odd one out.', items: [
            { o: ['la leche', 'el vino', 'el queso', 'el pan'], why: '*la leche* is feminine. The others are masculine.' },
            { o: ['los panes', 'la fruta', 'el café', 'una manzana'], why: '*los panes* is plural. The others are singular.' },
            { o: ['el queso', 'el agua', 'el café', 'el zumo'], why: '*el queso* is food. The others are drinks.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'hablar, comer, vivir',
      about: 'The present of regular -ar, -er and -ir verbs.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Spanish verbs end in **-ar**, **-er** or **-ir**. For the present, take away the ending and add the ending for the person: *habl-ar → habl-o*.' },
          { t: 'table', caption: 'Regular verbs in the present', quiz: true, head: ['', 'hablar', 'comer', 'vivir'], rows: [
            ['yo', 'hablo', 'como', 'vivo'],
            ['tú', 'hablas', 'comes', 'vives'],
            ['él / ella / usted', 'habla', 'come', 'vive'],
            ['nosotros / nosotras', 'hablamos', 'comemos', 'vivimos'],
            ['vosotros / vosotras', 'habláis', 'coméis', 'vivís'],
            ['ellos / ellas / ustedes', 'hablan', 'comen', 'viven'],
          ] },
          { t: 'tip', art: 'owl', md: '*-er* and *-ir* verbs have the same endings, but not for *nosotros* and *vosotros*: *comemos, vivimos; coméis, vivís*. In Latin America, people use *ustedes* instead of *vosotros*: *ustedes comen*.' },
        ],
        [
          { t: 'text', md: 'More regular verbs: *trabajar* (to work), *tomar* (to have, to take), *estudiar* (to study), *beber* (to drink), *leer* (to read), *escribir* (to write). To say *not*, put **no** before the verb: *No bebo leche.*' },
          { t: 'examples', items: [
            { s: '**Como** en casa con mi familia.', n: '*yo como*' },
            { s: 'Mis padres **viven** en Granada.', n: '*ellos viven*' },
            { s: '¿**Bebes** café o té?', n: '*tú bebes*' },
            { s: '**Trabajamos** en un restaurante.', n: '*nosotros trabajamos*' },
            { s: '¿Dónde **vivís**?', n: '*vosotros vivís*, with an accent.' },
            { s: 'Mi hermano **no come** carne.', n: '*no* goes before the verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of beber.', verb: 'beber', tense: 'present', rows: [
            ['yo', 'bebo'],
            ['tú', 'bebes'],
            ['él / ella / usted', 'bebe'],
            ['nosotros', 'bebemos'],
            ['vosotros', 'bebéis', 'With an accent: *bebéis*.'],
            ['ellos / ellas / ustedes', 'beben'],
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs.', pairs: [
            ['yo', 'vivo'],
            ['tú', 'vives'],
            ['él', 'vive'],
            ['nosotros', 'vivimos'],
            ['vosotros', 'vivís'],
            ['ellos', 'viven'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the present.', items: [
            { q: 'Yo ___ en Barcelona. (vivir)', a: ['vivo'], why: '*yo vivo*' },
            { q: '¿Tú ___ carne? (comer)', a: ['comes'], why: '*tú comes*' },
            { q: 'Mi madre ___ en un hospital. (trabajar)', a: ['trabaja'], why: 'One person, *ella*: *trabaja*.' },
            { q: 'Nosotros ___ el periódico. (leer)', a: ['leemos'], why: '*nosotros leemos*' },
            { q: 'Vosotros ___ mucha agua. (beber)', a: ['bebéis'], why: '*vosotros bebéis*, with an accent.' },
            { q: 'Mis abuelos ___ en un pueblo. (vivir)', a: ['viven'], why: '*ellos viven*' },
            { q: '¿Usted ___ inglés? (hablar)', a: ['habla'], why: '*usted* takes the same form as *él*: *habla*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Nosotros ___ en Madrid.', o: ['vivimos', 'vivemos', 'viven'], why: '*-ir* verbs: *nosotros vivimos*.' },
            { q: '¿Qué ___ vosotros?', o: ['coméis', 'comís', 'comen'], why: '*-er* verbs: *vosotros coméis*.' },
            { q: 'Ella ___ un café con leche.', o: ['toma', 'tomo', 'tomas'], why: 'One person, *ella*: *toma*.' },
            { q: '¿Ustedes ___ aquí?', o: ['trabajan', 'trabajáis', 'trabajamos'], why: '*ustedes* takes the same form as *ellos*: *trabajan*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Mis padres no comen carne.', why: '*no* goes before the verb.' },
            { a: '¿Qué bebes por la mañana?', why: 'Question word, then the verb.' },
            { a: 'Mi hermana vive en Sevilla.', why: 'Subject, verb, then the place.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'En el bar',
      about: 'Order in a bar or café and pay.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Elena and Javier have breakfast in a café. Listen to how they order and pay.' },
          { t: 'dialogue', title: 'In a café', lines: [
            { who: 'Camarero', s: 'Buenos días. ¿Qué les pongo?' },
            { who: 'Elena', s: 'Hola. Quería un café con leche, por favor.' },
            { who: 'Camarero', s: '¿Algo más?' },
            { who: 'Elena', s: 'Sí, una tostada con tomate.' },
            { who: 'Camarero', s: 'Muy bien. ¿Y usted?' },
            { who: 'Javier', s: 'Para mí, un zumo de naranja y un cruasán.' },
            { who: 'Camarero', s: 'Ahora mismo.' },
            { who: 'Elena', s: 'Perdone, ¿cuánto es?' },
            { who: 'Camarero', s: 'Son siete euros con cincuenta.' },
            { who: 'Javier', s: 'Aquí tiene. Gracias.' },
          ] },
        ],
        [
          { t: 'text', md: 'There are different ways to order. **Quiero** (I want) is fine with friends. **Quería** sounds softer and more polite. In Spain, people also say **¿Me pone…?** (Can I have…?). To pay, ask **¿Cuánto es?**' },
          { t: 'table', caption: 'In a bar', explain: ['head'], head: ['Customer', 'Waiter'], rows: [
            ['Quería un café, por favor.', '¿Qué le pongo?'],
            ['¿Me pone una cerveza?', '¿Algo más?'],
            ['Para mí, un agua sin gas.', '¿Y para usted?'],
            ['¿Cuánto es?', 'Son tres euros.'],
            ['La cuenta, por favor.', 'Ahora mismo.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Latin America, people often say **¿Me da…?** or **¿Me trae…?** instead of *¿Me pone…?*' },
        ],
        [
          { t: 'text', md: 'Spain uses the **euro** (€). One euro has 100 **céntimos**. Spanish writes a comma, not a point: *2,50 €*. Say *dos euros con cincuenta* or just *dos cincuenta*. For prices, say **son**: *Son tres euros.* For one euro, say **es**: *Es un euro.*' },
          { t: 'examples', items: [
            { s: '1,20 € – un euro con veinte', n: 'One euro: *un euro*.' },
            { s: '3,50 € – tres euros con cincuenta', n: 'You can also say *tres cincuenta*.' },
            { s: '0,90 € – noventa céntimos', n: 'Less than one euro: *céntimos*.' },
            { s: '¿Cuánto es? – Son cuatro euros con ochenta.', n: '*son* for prices.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the answer.', pairs: [
            ['¿Qué le pongo?', 'Un café con leche, por favor.'],
            ['¿Algo más?', 'No, gracias. Nada más.'],
            ['¿Cuánto es?', 'Son dos euros.'],
            ['La cuenta, por favor.', 'Ahora mismo.'],
          ] },
          { t: 'ex', kind: 'label', h: 'Label the café.', scene: 'cafe', extra: ['la silla', 'el plato'], items: [
            { x: 95, y: 68, a: 'la ventana', why: '*la ventana*: the window.' },
            { x: 250, y: 42, a: 'la lámpara', why: '*la lámpara*: the lamp.' },
            { x: 222, y: 96, a: 'la planta', why: '*la planta*: the plant.' },
            { x: 125, y: 137, a: 'la taza', why: '*la taza*: the cup.' },
            { x: 188, y: 132, a: 'el cruasán', why: '*el cruasán*: the croissant.' },
            { x: 66, y: 152, a: 'la mesa', why: '*la mesa*: the table.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right words.', items: [
            { q: 'Buenos días. ¿___ un té, por favor?', o: ['Me pone', 'Le pongo', 'Me pongo'], why: 'The customer asks: *¿Me pone…?*' },
            { q: 'Hola. ___ una cerveza, por favor.', o: ['Quería', 'Quieres', 'Querías'], why: '*Quería* (I would like) is polite.' },
            { q: 'Perdone, ¿cuánto ___?', o: ['es', 'son', 'está'], why: 'To ask the price: *¿Cuánto es?*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the price in words.', items: [
            { q: '1,80 €: Es un euro con ___.', a: ['ochenta'], why: '80 céntimos: *ochenta*.' },
            { q: '4,50 €: Son cuatro euros con ___.', a: ['cincuenta'], why: '50 céntimos: *cincuenta*.' },
            { q: '0,70 €: Son ___ céntimos.', a: ['setenta'], why: '70: *setenta*.' },
            { q: '15 €: Son ___ euros.', a: ['quince'], why: '15: *quince*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Breakfast and shopping',
      about: 'Read a café menu and a shopping list.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'Cafetería La Plaza', md: '**Desayunos** (de 8.00 a 12.00)\nCafé solo: 1,30 €\nCafé con leche: 1,60 €\nTé o infusión: 1,50 €\nZumo de naranja natural: 2,80 €\nTostada con tomate y aceite: 2,20 €\nChurros con chocolate: 3,90 €\n\n**Bocadillos** (todo el día)\nBocadillo de queso: 3,50 €\nBocadillo de tortilla: 4,00 €\n\n**Oferta de desayuno**\nCafé con leche, zumo de naranja y tostada: 5,50 €' },
          { t: 'reading', title: 'La lista de la compra', md: 'Para el fin de semana:\n\nun kilo de tomates\ndos barras de pan\ndos litros de leche\nseis huevos\nun queso\nunas naranjas para el zumo\n\nEl pan, en la panadería. Todo lo demás, en el mercado.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'El café con leche cuesta 1,60 €.', a: 't', why: '*Café con leche: 1,60 €.* *cuesta* means costs.' },
            { q: 'Los bocadillos son solo por la mañana.', a: 'f', why: 'The sandwiches are *todo el día*: all day.' },
            { q: 'La oferta de desayuno tiene café, zumo y tostada.', a: 't', why: '*Café con leche, zumo de naranja y tostada: 5,50 €.*' },
            { q: 'La cafetería abre los domingos.', a: 'ng', why: 'The menu does not say which days the café is open.' },
            { q: 'En la lista hay seis huevos.', a: 't', why: '*seis huevos*' },
            { q: 'El pan es del mercado.', a: 'f', why: '*El pan, en la panadería.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the menu again and choose.', items: [
            { q: 'Tomas un café con leche y una tostada con tomate. ¿Cuánto es?', o: ['3,80 €', '2,90 €', '5,50 €'], why: '1,60 € + 2,20 € = 3,80 €.' },
            { q: 'Tienes 4 €. ¿Qué tomas?', o: ['un bocadillo de queso', 'churros con chocolate y un café solo', 'la oferta de desayuno'], why: 'The cheese sandwich is 3,50 €. The others cost more than 4 €.' },
            { q: 'Son las 13.00. ¿Qué es posible?', o: ['un bocadillo de tortilla', 'la oferta de desayuno', 'una tostada con tomate'], why: 'Breakfast is until 12.00. Sandwiches are all day.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '¿Me pone ___ cerveza, por favor?', o: ['una', 'un', 'unos'], why: '*cerveza* is feminine and singular: *una*.' },
      { q: 'Dos ___, por favor.', o: ['panes', 'pans', 'pan'], why: 'After a consonant, add *-es*: *panes*.' },
      { q: 'Nosotros ___ en Valencia.', o: ['vivimos', 'vivemos', 'vivís'], why: '*nosotros vivimos*' },
      { q: '¿Tú ___ vino?', o: ['bebes', 'bebe', 'bebo'], why: '*tú bebes*' },
      { q: 'Perdone, ¿cuánto ___?', o: ['es', 'está', 'tiene'], why: 'To ask the price: *¿Cuánto es?*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: '___ manzanas son de Asturias.', a: ['Las', 'las'], why: 'Feminine plural: *las*.' },
      { q: 'Mi padre ___ en un banco. (trabajar)', a: ['trabaja'], why: 'One person, *él*: *trabaja*.' },
      { q: 'Vosotros ___ mucho. (comer)', a: ['coméis'], why: '*vosotros coméis*, with an accent.' },
      { q: '2,50 €: Son dos euros con ___.', a: ['cincuenta'], why: '50 céntimos: *cincuenta*.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'el or la?', groups: ['el', 'la'], items: [
      { s: 'vino', g: 0, why: 'It ends in *-o*: *el vino*.' },
      { s: 'tortilla', g: 1, why: 'It ends in *-a*: *la tortilla*.' },
      { s: 'leche', g: 1, why: '*la leche*' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Ella [bebo] un zumo de naranja.', a: ['bebe'], why: 'One person, *ella*: *bebe*.' },
      { s: 'Quería dos [limónes], por favor.', a: ['limones'], why: 'The accent goes away in the plural: *limones*.' },
    ] },
  ],
};
