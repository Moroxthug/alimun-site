// Spanish A1 for moving abroad, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Shopping and the market',
  goal: 'Buy food at the market and in shops, ask for quantities and pay.',
  art: 'churro',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['food', 'market', 'quantities', 'prices', 'este-esta', 'hay-esta', 'paying', 'opening-hours'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'At the market',
      about: 'Ask for fruit, vegetables and other food in the right quantity.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Most Spanish towns have a market (*el mercado*) with stalls for fruit and vegetables, fish, meat and bread. It is a good place to practise: the people at the stalls talk a lot, and you hear the same few phrases again and again.' },
          { t: 'table', caption: 'At the fruit and vegetable stall', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['las manzanas', 'apples'],
            ['las naranjas', 'oranges'],
            ['los plátanos', 'bananas'],
            ['los tomates', 'tomatoes'],
            ['las patatas', 'potatoes'],
            ['las cebollas', 'onions'],
            ['los huevos', 'eggs'],
            ['el queso', 'cheese'],
            ['el pan', 'bread'],
          ] },
          { t: 'tip', art: 'churro', md: 'In Latin America, potatoes are *papas*, not *patatas*. In many countries there, a banana is *una banana* or *un banano*. At a busy stall in Spain, ask *¿Quién es el último?* (Who is last?) to know your place in the queue.' },
        ],
        [
          { t: 'table', caption: 'Quantities', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['un kilo de', 'a kilo of'],
            ['medio kilo de', 'half a kilo of'],
            ['cien gramos de', 'a hundred grams of'],
            ['una docena de', 'twelve, a dozen'],
            ['una barra de pan', 'a loaf of bread, long and thin'],
            ['una botella de', 'a bottle of'],
          ] },
          { t: 'text', md: 'To ask for something, say **quería** + quantity: *Quería un kilo de tomates.* It sounds like the past, but it means *I would like*, and it is very polite. In Spain you also hear **¿Me pone…?**: *¿Me pone medio kilo de cebollas?* After a quantity, use **de** and no article: *un kilo **de** naranjas*.' },
        ],
        [
          { t: 'dialogue', title: 'En el mercado', lines: [
            { who: 'Frutero', s: '¡Buenos días! ¿Qué le pongo?' },
            { who: 'Priya', s: 'Buenos días. Quería un kilo de tomates.' },
            { who: 'Frutero', s: 'Muy bien. ¿Algo más?' },
            { who: 'Priya', s: 'Sí, ¿me pone medio kilo de cebollas, por favor?' },
            { who: 'Frutero', s: 'Aquí tiene. ¿Algo más?' },
            { who: 'Priya', s: 'Y una docena de huevos. ¿Cuánto es?' },
            { who: 'Frutero', s: 'Son cinco euros con cuarenta.' },
            { who: 'Priya', s: 'Aquí tiene. Gracias.' },
            { who: 'Frutero', s: 'A usted. ¡Hasta luego!' },
          ] },
          { t: 'examples', items: [
            { s: '**¿Algo más?** No, nada más, gracias.', n: '*¿Algo más?*: anything else? *Nada más*: nothing else.' },
            { s: 'Son **cinco euros con cuarenta**.', n: '5,40 €. You can also say *cinco cuarenta*. Spain writes a comma, not a point, before the cents.' },
            { s: '¿**Cuánto es**?', n: 'Ask this when you want to pay for everything.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'apple', o: ['una manzana', 'una naranja', 'una patata'], why: 'This is *una manzana*, an apple.' },
            { pic: 'bread', o: ['el pan', 'el queso', 'el huevo'], why: 'This is *el pan*, bread.' },
            { pic: 'cheese', o: ['el queso', 'el pan', 'la cebolla'], why: 'This is *el queso*, cheese.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the quantity and the food.', pairs: [
            ['una docena de', 'huevos'],
            ['una barra de', 'pan'],
            ['una botella de', 'agua'],
            ['cien gramos de', 'queso'],
          ] },
          { t: 'ex', kind: 'sort', h: 'Fruit or vegetable?', groups: ['la fruta', 'la verdura'], items: [
            { s: 'las naranjas', g: 0, why: 'Oranges are fruit.' },
            { s: 'las cebollas', g: 1, why: 'Onions are vegetables.' },
            { s: 'los plátanos', g: 0, why: 'Bananas are fruit.' },
            { s: 'las patatas', g: 1, why: 'Potatoes are vegetables.' },
            { s: 'las manzanas', g: 0, why: 'Apples are fruit.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Quería un kilo ___ naranjas.', a: ['de'], why: 'After a quantity, use *de*: *un kilo de*.' },
            { q: '¿Me ___ medio kilo de tomates? (poner)', a: ['pone'], why: '*¿Me pone…?* uses the *usted* form of *poner*.' },
            { q: '¿Algo más? No, ___ más, gracias.', a: ['nada'], why: '*nada más*: nothing else.' },
            { q: '¿Cuánto ___? Son seis euros. (ser)', a: ['es'], why: 'To pay for everything: *¿Cuánto es?*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Quería medio kilo de patatas.', why: '*Quería* + quantity + *de* + food.' },
            { a: '¿Me pone una docena de huevos?', why: '*¿Me pone…?* + quantity + *de* + food.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find the six food words.', words: ['pan', 'queso', 'huevos', 'tomates', 'naranjas', 'cebollas'] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'In shops',
      about: 'Ask where things are, ask the price, and pay in a shop or a supermarket.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In a supermarket, ask **¿Hay…?** when you do not know if the shop has something: *¿Hay leche sin lactosa?* Ask **¿Dónde está…?** or **¿Dónde están…?** when you know it is there, but not where: *¿Dónde está el pan?*' },
          { t: 'dialogue', title: 'En el supermercado', lines: [
            { who: 'Yusuf', s: 'Perdone, ¿hay leche sin lactosa?' },
            { who: 'Dependienta', s: 'Sí, está allí, al lado del agua.' },
            { who: 'Yusuf', s: 'Gracias. ¿Y dónde están los huevos?' },
            { who: 'Dependienta', s: 'Están al final, con la fruta.' },
            { who: 'Cajera', s: 'Hola. ¿Necesita bolsa?' },
            { who: 'Yusuf', s: 'Sí, una, por favor. ¿Cuánto cuesta?' },
            { who: 'Cajera', s: 'Diez céntimos. Son doce euros con veinte. ¿Con tarjeta o en efectivo?' },
            { who: 'Yusuf', s: 'Con tarjeta.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain, shops usually charge a few cents for a bag. Pay **en efectivo** (in cash) or **con tarjeta** (by card). In many towns, small shops close for a few hours in the middle of the day, and many shops are closed on Sundays.' },
        ],
        [
          { t: 'text', md: 'Use **este**, **esta** (this) for things near you. They agree with the noun. To ask the price of one thing, say **¿Cuánto cuesta?**; for more than one, **¿Cuánto cuestan?**' },
          { t: 'table', caption: 'this and these', explain: ['head', 'col0'], quiz: true, head: ['', 'Singular', 'Plural'], rows: [
            ['masculine', 'este queso', 'estos tomates'],
            ['feminine', 'esta leche', 'estas manzanas'],
          ] },
          { t: 'examples', items: [
            { s: '¿Cuánto **cuesta** este queso?', n: 'One thing: *cuesta*.' },
            { s: '¿Cuánto **cuestan** estas manzanas?', n: 'More than one: *cuestan*.' },
            { s: 'Las naranjas están **a un euro veinte el kilo**.', n: 'At the market, prices are often given per kilo with *estar a*.' },
          ] },
          { t: 'tip', art: 'churro', md: 'In Latin America, people often say *¿Cuánto vale?* or *¿Qué precio tiene?* as well, and in many countries the money is the peso, not the euro. A receipt in Spain is *el tique* or *el recibo*.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: '¿Cuánto cuesta ___ leche?', o: ['esta', 'este', 'estos'], why: '*la leche* is feminine and singular: *esta*.' },
            { q: '¿Cuánto cuestan ___ tomates?', o: ['estos', 'este', 'estas'], why: '*los tomates*: masculine plural, *estos*.' },
            { q: '¿Cuánto ___ estas naranjas?', o: ['cuestan', 'cuesta', 'es'], why: '*estas naranjas* is plural: *cuestan*.' },
            { q: 'Perdone, ¿___ pan sin gluten?', o: ['hay', 'está', 'es'], why: 'You do not know if the shop has it: *¿Hay…?*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Con tarjeta o en efectivo?', o: ['En efectivo, aquí tiene.', 'Sí, una bolsa.', 'Al lado del agua.'], why: 'The question is how you pay: cash or card.' },
            { q: '¿Dónde está el queso?', o: ['Allí, al final.', 'Cuesta tres euros.', 'Sí, hay queso.'], why: '*¿Dónde?* asks for a place.' },
            { q: '¿Necesita bolsa?', o: ['No, gracias.', 'Con tarjeta.', 'Medio kilo.'], why: 'A yes or no question: *No, gracias* or *Sí, por favor*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words go with the quantity?', items: [
            { key: 'una botella de', o: ['agua', 'aceite', 'huevos', 'pan'], a: [0, 1], why: 'You buy liquids in a bottle: water, oil. Eggs come by the dozen, bread by the loaf.' },
            { key: 'un kilo de', o: ['patatas', 'naranjas', 'leche', 'agua'], a: [0, 1], why: 'Fruit and vegetables are sold by the kilo. Milk and water come in litres or bottles.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: '¿Cuánto [cuesta] estos tomates?', a: ['cuestan'], why: '*estos tomates* is plural: *cuestan*.' },
            { s: 'Quería [este] manzanas.', a: ['estas'], why: '*las manzanas*: feminine plural, *estas*.' },
            { s: 'Perdone, ¿dónde [hay] el pan?', a: ['está'], why: 'You know the shop has bread and ask where it is: *¿Dónde está…?*' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the question. Two words do not belong.', items: [
            { a: '¿Dónde están los huevos?', extra: ['está', 'hay'], why: '*los huevos* is plural: *están*. *hay* does not go with *dónde* and *los*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Opening hours and offers',
      about: 'Read the opening hours of a market and a supermarket leaflet.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Opening hours in Spain are often split: shops open in the morning, close for a few hours and open again in the late afternoon. Big supermarkets usually stay open all day. Read the sign before you go.' },
          { t: 'reading', title: 'Mercado del Barrio: horario', md: 'Lunes a viernes: de 8:00 a 14:00 y de 17:00 a 20:30\nSábados: de 8:00 a 14:30\nDomingos y festivos: cerrado\n\nLos martes por la tarde, el mercado está cerrado.\nLa pescadería abre de martes a sábado.\nAparcamiento gratis una hora con su tique de compra.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the sign. True, false or not given?', items: [
            { q: 'El mercado abre los sábados por la mañana.', a: 't', why: '*Sábados: de 8:00 a 14:30*.' },
            { q: 'El lunes a las 15:00 el mercado está abierto.', a: 'f', why: 'From 14:00 to 17:00 it is closed.' },
            { q: 'El martes a las 18:00 se puede comprar en el mercado.', a: 'f', why: '*Los martes por la tarde, el mercado está cerrado.*' },
            { q: 'Los lunes la pescadería está cerrada.', a: 't', why: 'The fish stall opens from Tuesday to Saturday.' },
            { q: 'En el mercado se puede pagar con tarjeta.', a: 'ng', why: 'The sign does not say how you can pay.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Ofertas de la semana', md: 'Supermercado La Plaza. Del 6 al 12 de octubre.\n\nNaranjas de Valencia: 1,20 € el kilo.\nPan de pueblo: 0,90 € la barra.\nQueso de cabra: 2,50 € los 200 gramos.\nHuevos: 2,10 € la docena.\nYogures naturales: compre dos y pague uno.\nAceite de oliva: 6,95 € la botella de un litro.\n\nCon la tarjeta del cliente, 5 % menos en toda la fruta.\nAbierto todos los días de 9:00 a 21:30.' },
          { t: 'ex', kind: 'choice', h: 'Read the leaflet. Choose the answer.', items: [
            { q: 'Dos kilos de naranjas cuestan ___.', o: ['2,40 €', '1,20 €', '3,20 €'], why: '1,20 € a kilo, so two kilos are 2,40 €.' },
            { q: 'Con la oferta de yogures, ___', o: ['compra dos y paga uno.', 'compra uno y paga dos.', 'los yogures son gratis.'], why: '*compre dos y pague uno*: two for the price of one.' },
            { q: 'El supermercado abre ___', o: ['también los domingos.', 'solo por la mañana.', 'de lunes a viernes.'], why: '*Abierto todos los días*: every day.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'On signs and leaflets: *abierto* (open), *cerrado* (closed), *festivos* (public holidays), *la oferta* (special offer), *gratis* (free). A shop for fish is *la pescadería*, for bread *la panadería*, for fruit *la frutería*.' },
          { t: 'ex', kind: 'match', h: 'Match the shop and what you buy there.', pairs: [
            ['la panadería', 'una barra de pan'],
            ['la frutería', 'un kilo de manzanas'],
            ['la pescadería', 'el pescado'],
            ['la farmacia', 'las pastillas'],
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two words that tell you a shop is not open.', items: [
            { s: 'Domingos y festivos: [cerrado]. Los martes por la tarde, el mercado no [abre].', why: '*cerrado* means closed, and *no abre* means it does not open.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Quería ___ de huevos.', o: ['una docena', 'una botella', 'una barra'], why: 'Eggs come by the dozen: *una docena*.' },
      { q: '¿Cuánto ___ estas manzanas?', o: ['cuestan', 'cuesta', 'está'], why: 'Plural: *cuestan*.' },
      { q: 'You want to pay in cash: ___', o: ['En efectivo.', 'Con tarjeta.', 'Nada más.'], why: '*en efectivo*: in cash.' },
      { q: 'Domingos: cerrado. El domingo el mercado ___', o: ['no abre.', 'abre por la mañana.', 'abre todo el día.'], why: '*cerrado*: closed.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Quería medio kilo ___ cebollas.', a: ['de'], why: 'After a quantity: *de*.' },
      { q: '¿___ leche sin lactosa? (haber)', a: ['Hay'], why: 'You do not know if the shop has it: *¿Hay…?*' },
      { q: '¿Cuánto cuesta ___ queso? (this)', a: ['este'], why: '*el queso* is masculine: *este*.' },
      { q: '¿Algo más? No, nada ___, gracias.', a: ['más'], why: '*nada más*: nothing else.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
      { q: 'Perdone, ¿dónde ___ los plátanos?', o: ['están', 'está', 'hay'], why: '*los plátanos* is plural and the shop has them: *están*.' },
      { q: '¿Cuánto cuestan ___ naranjas?', o: ['estas', 'esta', 'estos'], why: '*las naranjas*: feminine plural, *estas*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Me pone un kilo de tomates?', why: '*¿Me pone…?* + quantity + *de* + food.' },
      { a: '¿Cuánto cuesta esta botella de agua?', why: '*¿Cuánto cuesta…?* + *esta botella*: one thing, feminine.' },
    ] },
  ],
};
