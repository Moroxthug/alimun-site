// Spanish A1 for travel, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Shopping and souvenirs',
  goal: 'Ask for things in a shop, ask the price and buy souvenirs.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['shopping', 'souvenirs', 'prices', 'colours', 'demonstratives', 'object-pronouns', 'markets'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'In a shop',
      about: 'Ask for things and their price, and use colours and este, esta.',
      art: 'mug',
      spreads: [
        [
          { t: 'dialogue', title: 'En la tienda de recuerdos', lines: [
            { who: 'Dependienta', s: 'Hola, buenas tardes. ¿Qué desea?' },
            { who: 'Paul', s: 'Hola. Quería un recuerdo para mi madre.' },
            { who: 'Dependienta', s: 'Tenemos estos abanicos y estas tazas de cerámica.' },
            { who: 'Paul', s: '¿Cuánto cuesta este abanico rojo?' },
            { who: 'Dependienta', s: 'Quince euros.' },
            { who: 'Paul', s: '¿Y cuánto cuestan las tazas?' },
            { who: 'Dependienta', s: 'Seis euros cada una.' },
            { who: 'Paul', s: 'Pues quería dos tazas azules, por favor.' },
          ] },
          { t: 'text', md: 'For one thing, ask *¿Cuánto cuesta …?* For more than one thing, ask *¿Cuánto cuestan …?* The verb *costar* changes *o* to *ue*.\n\nThe shop assistant often asks *¿Qué desea?* (What would you like?). In a small shop you can also ask *¿Tiene …?* (Do you have …?).' },
        ],
        [
          { t: 'text', md: 'Colours come **after** the noun and agree with it, like nationalities. Colours that end in *-o* have four forms: *rojo, roja, rojos, rojas*. Colours that end in *-e* or a consonant have only two: *verde, verdes; azul, azules*.' },
          { t: 'table', caption: 'Colours', quiz: true, head: ['Colour', 'masculine', 'feminine', 'feminine plural'], explain: ['head', 'col0'], rows: [
            ['red', 'rojo', 'roja', 'rojas'],
            ['white', 'blanco', 'blanca', 'blancas'],
            ['black', 'negro', 'negra', 'negras'],
            ['yellow', 'amarillo', 'amarilla', 'amarillas'],
            ['green', 'verde', 'verde', 'verdes'],
            ['blue', 'azul', 'azul', 'azules'],
          ] },
          { t: 'table', caption: 'Souvenirs', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['el recuerdo', 'souvenir'],
            ['el abanico', 'hand fan'],
            ['la camiseta', 't-shirt'],
            ['la taza', 'mug, cup'],
            ['el imán', 'fridge magnet'],
            ['el aceite de oliva', 'olive oil'],
            ['la cerámica', 'pottery'],
          ] },
        ],
        [
          { t: 'text', md: 'To point to a thing near you, use **este** (this). It agrees with the noun: *este abanico, esta taza, estos abanicos, estas tazas*. For a thing a little further away, use **ese** (that): *ese, esa, esos, esas*.' },
          { t: 'table', caption: 'this and that', explain: ['head', 'col0'], quiz: true, head: ['', 'masculine', 'feminine'], rows: [
            ['this', 'este imán', 'esta camiseta'],
            ['these', 'estos imanes', 'estas camisetas'],
            ['that', 'ese imán', 'esa camiseta'],
            ['those', 'esos imanes', 'esas camisetas'],
          ] },
          { t: 'examples', items: [
            { s: '¿Cuánto cuesta **esta** camiseta?', n: '*camiseta* is feminine: *esta*.' },
            { s: '**Estos** imanes son muy bonitos.', n: 'Masculine plural: *estos*.' },
            { s: '¿Tiene **esa** taza en verde?', n: 'That one, a little further away: *esa*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Latin America people often say *¿Cuánto vale?* as well as *¿Cuánto cuesta?*. A t-shirt is *una playera* in Mexico and *una remera* in Argentina.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: '¿Cuánto cuesta ___ camiseta?', o: ['esta', 'este', 'estos'], why: '*camiseta* is feminine singular: *esta*.' },
            { q: '¿Cuánto ___ estos imanes?', o: ['cuestan', 'cuesta', 'cuestas'], why: 'More than one thing: *cuestan*.' },
            { q: 'Quería ___ abanico, el rojo.', o: ['ese', 'esa', 'esos'], why: '*abanico* is masculine singular: *ese*.' },
            { q: '___ tazas son muy bonitas.', o: ['Estas', 'Este', 'Esta'], why: '*tazas* is feminine plural: *estas*.' },
          ] },
          { t: 'ex', kind: 'wordform', h: 'Write the colour in the right form.', items: [
            { q: 'Quería una camiseta ___.', base: 'blanco', a: ['blanca'], why: '*camiseta* is feminine: *blanca*.' },
            { q: 'Tengo dos tazas ___.', base: 'azul', a: ['azules'], why: 'Plural after a consonant: *azules*.' },
            { q: 'Estos abanicos ___ son de Sevilla.', base: 'negro', a: ['negros'], why: 'Masculine plural: *negros*.' },
            { q: 'Me gusta la cerámica ___.', base: 'verde', a: ['verde'], why: '*verde* is the same for masculine and feminine.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Colours and souvenirs.', words: [
            { a: 'rojo', clue: 'El color del tomate.' },
            { a: 'amarillo', clue: 'El color del sol y del limón.' },
            { a: 'verde', clue: 'El color de la lechuga.' },
            { a: 'taza', clue: 'Aquí bebes café o té.' },
            { a: 'abanico', clue: 'Lo usas cuando hace calor.' },
            { a: 'camiseta', clue: 'Ropa para el verano, con o sin mangas.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Sizes and deciding',
      about: 'Ask for another size, say you will take it with lo or la, and pay.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'When you decide to buy something, say *Me lo llevo* (I will take it). *Lo* means *it* for a masculine word, and *la* for a feminine word. For plural words use *los* and *las*. These little words go **before** the verb.' },
          { t: 'table', caption: 'I will take it', explain: ['head'], quiz: true, head: ['Thing', 'I will take it.'], rows: [
            ['el abanico', 'Me lo llevo.'],
            ['la camiseta', 'Me la llevo.'],
            ['los imanes', 'Me los llevo.'],
            ['las tazas', 'Me las llevo.'],
          ] },
          { t: 'examples', items: [
            { s: '¿Tiene esta camiseta en otra **talla**?', n: '*la talla*: the size of clothes.' },
            { s: 'Es un poco **pequeña**. ¿Tiene una más **grande**?', n: '*pequeño*: small. *grande*: big.' },
            { s: '¿Dónde está **el probador**?', n: '*el probador*: the room where you try clothes on.' },
            { s: '¿Puedo pagar **con tarjeta** o **en efectivo**?', n: 'By card or in cash.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'En una tienda de ropa', lines: [
            { who: 'Clara', s: 'Perdone, ¿tiene esta camiseta en la talla mediana?' },
            { who: 'Dependiente', s: 'Sí, aquí tiene. El probador está al fondo.' },
            { who: 'Clara', s: 'Gracias. … Es un poco grande. ¿Tiene una más pequeña?' },
            { who: 'Dependiente', s: 'En negro, no. Pero en blanco sí.' },
            { who: 'Clara', s: 'Pues la blanca. Me gusta mucho. Me la llevo.' },
            { who: 'Dependiente', s: 'Muy bien. Son veinte euros. ¿En efectivo o con tarjeta?' },
            { who: 'Clara', s: 'Con tarjeta. ¿Me da una bolsa, por favor?' },
            { who: 'Dependiente', s: 'Claro. Aquí tiene.' },
          ] },
          { t: 'tip', art: 'churro', md: 'If you are not sure, you can say *Voy a pensarlo, gracias* (I am going to think about it). In many markets people ask for a better price, but in most shops the price is fixed.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose lo, la, los or las.', items: [
            { q: 'Me gusta este abanico. Me ___ llevo.', o: ['lo', 'la', 'los'], why: '*el abanico* is masculine singular: *lo*.' },
            { q: '¿Las tazas azules? Sí, me ___ llevo.', o: ['las', 'la', 'los'], why: '*las tazas* is feminine plural: *las*.' },
            { q: 'Esta camiseta es bonita. Me ___ llevo.', o: ['la', 'lo', 'las'], why: '*la camiseta* is feminine singular: *la*.' },
            { q: '¿Y los imanes? Me ___ llevo también.', o: ['los', 'las', 'lo'], why: '*los imanes* is masculine plural: *los*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '¿Tiene esta camiseta en otra ___? (size)', a: ['talla'], why: 'For clothes, the size is *la talla*.' },
            { q: 'Es pequeña. ¿Tiene una más ___?', a: ['grande'], why: 'The opposite of *pequeña* is *grande*.' },
            { q: '¿Puedo pagar con ___? (card)', a: ['tarjeta'], why: 'By card: *con tarjeta*.' },
            { q: 'No pago con tarjeta. Pago en ___. (cash)', a: ['efectivo'], why: 'In cash: *en efectivo*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['¿Qué desea?', 'Quería un recuerdo.'],
            ['¿Tiene otra talla?', 'Sí, la grande.'],
            ['¿En efectivo o con tarjeta?', 'Con tarjeta.'],
            ['¿Dónde está el probador?', 'Al fondo, a la derecha.'],
            ['¿Cuánto cuestan los imanes?', 'Tres euros cada uno.'],
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: '¿Tiene esta camiseta en azul?', why: '*¿Tiene* + the thing + *en* + the colour.' },
            { a: 'Me gusta mucho. Me lo llevo.', why: '*lo* goes before the verb *llevo*.' },
            { a: '¿Me da una bolsa, por favor?', why: '*¿Me da* + the thing you want.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a craft market',
      about: 'Read a leaflet about a market and find what you can buy and when.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Many towns in Spain and Latin America have a market once a week. *La artesanía* means things made by hand, like pottery, bags or jewellery.' },
          { t: 'reading', title: 'Mercado de artesanía', md: '**Mercado de artesanía en la plaza del Sol**\n\nTodos los sábados, de 9:00 a 15:00, la plaza del Sol tiene un mercado de artesanía. Aquí hay más de cuarenta puestos.\n\nPuede comprar cerámica, bolsos de piel, pañuelos de colores, joyas de plata y juguetes de madera. Muchos artesanos trabajan en el mercado: usted puede ver cómo hacen sus cosas.\n\nEn la parte de la comida hay quesos, miel, aceite de oliva y pan de la zona.\n\nMuchos puestos solo aceptan efectivo. Hay un cajero automático en la calle del Puente, a dos minutos.\n\nLos domingos no hay mercado. En agosto, el mercado abre también los miércoles por la tarde, de 18:00 a 22:00.' },
          { t: 'tip', art: 'owl', md: '*Un puesto* is a stall in a market. *Un cajero automático* is a cash machine. In Latin America people also say *un cajero* or *un ATM*.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the leaflet. True, false or not given?', items: [
            { q: 'El mercado es todos los sábados por la mañana.', a: 't', why: '*Todos los sábados, de 9:00 a 15:00.*' },
            { q: 'En el mercado hay cosas de comer.', a: 't', why: 'There are cheeses, honey, olive oil and bread.' },
            { q: 'Todos los puestos aceptan tarjeta.', a: 'f', why: '*Muchos puestos solo aceptan efectivo.*' },
            { q: 'El cajero automático está lejos.', a: 'f', why: 'It is *a dos minutos*: two minutes away.' },
            { q: 'Los bolsos de piel cuestan mucho.', a: 'ng', why: 'The leaflet does not give prices.' },
            { q: 'En agosto hay mercado dos días a la semana.', a: 't', why: 'In August it is on Saturdays and also on Wednesday evenings.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Es domingo y quieres ir al mercado. ___', o: ['No hay mercado.', 'Abre a las nueve.', 'Abre a las seis de la tarde.'], why: '*Los domingos no hay mercado.*' },
            { q: 'Quieres un recuerdo de madera. Compras ___.', o: ['un juguete', 'un pañuelo', 'una joya de plata'], why: '*juguetes de madera*: wooden toys.' },
            { q: 'No tienes efectivo. ¿Qué haces?', o: ['Voy al cajero de la calle del Puente.', 'Pago con tarjeta en todos los puestos.', 'Voy al mercado el domingo.'], why: 'Many stalls take only cash, and there is a cash machine two minutes away.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find the market words.', words: ['puesto', 'queso', 'miel', 'bolso', 'joya', 'plata', 'madera'] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '¿Cuánto ___ estas camisetas?', o: ['cuestan', 'cuesta', 'costan'], why: 'More than one thing: *cuestan*, with *ue*.' },
      { q: 'Quería una taza ___.', o: ['roja', 'rojo', 'rojas'], why: '*taza* is feminine singular: *roja*.' },
      { q: '¿Cuánto cuesta ___ imán?', o: ['este', 'esta', 'estas'], why: '*imán* is masculine singular: *este*.' },
      { q: 'La camiseta es pequeña. Pregunto: «___»', o: ['¿Tiene una más grande?', '¿Tiene una más pequeña?', '¿Dónde está la caja?'], why: 'It is too small, so you want a bigger one: *más grande*.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose lo, la, los or las.', items: [
      { q: 'Me gustan estos pañuelos. Me ___ llevo.', o: ['los', 'las', 'lo'], why: '*los pañuelos* is masculine plural: *los*.' },
      { q: 'Esta cerámica es preciosa. Me ___ llevo.', o: ['la', 'lo', 'las'], why: '*la cerámica* is feminine singular: *la*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: '¿Puedo pagar en ___? (cash)', a: ['efectivo'], why: 'In cash: *en efectivo*.' },
      { q: 'Tengo dos imanes ___. (azul)', a: ['azules'], why: 'Plural after a consonant: *azules*.' },
      { q: '¿Tiene esta camiseta en otra ___?', a: ['talla'], why: 'For clothes, the size is *la talla*.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Write the colour in the right form.', items: [
      { q: 'Me gustan las bolsas ___.', base: 'negro', a: ['negras'], why: 'Feminine plural: *negras*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
      { s: '¿Cuánto cuesta [esto] abanico?', a: ['este'], why: 'Before a masculine noun: *este abanico*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentence.', items: [
      { a: 'Me gusta este abanico. Me lo llevo.', why: '*lo* goes before the verb *llevo*.' },
    ] },
  ],
};
