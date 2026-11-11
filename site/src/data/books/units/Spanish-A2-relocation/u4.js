// Spanish A2 for moving abroad, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Shopping and money',
  goal: 'Shop, pay and understand everyday rules for shopping.',
  art: 'pizza',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['shopping', 'quantities', 'prices', 'paying', 'opening-hours'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'In the supermarket',
      about: 'Quantities and prices, and how to ask where things are.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'In a supermarket or at a market stall, you buy food in quantities and containers. The pattern is always the same: quantity + **de** + food: *un kilo **de** tomates*, *una botella **de** agua*.' },
          { t: 'table', caption: 'Quantities and containers', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['un kilo de tomates', 'a kilo of tomatoes'],
            ['medio kilo de fresas', 'half a kilo of strawberries'],
            ['cien gramos de jamón', '100 grams of ham'],
            ['una docena de huevos', 'twelve eggs'],
            ['una barra de pan', 'a loaf of bread (a long one)'],
            ['una botella de aceite', 'a bottle of oil'],
            ['un paquete de arroz', 'a packet of rice'],
            ['una lata de atún', 'a tin of tuna'],
            ['un litro de leche', 'a litre of milk'],
          ] },
          { t: 'tip', art: 'owl', md: 'Prices: *4,50 €* is said *cuatro euros con cincuenta* or just *cuatro cincuenta*. Spanish uses a comma for cents and a point for thousands: *1.200 €*.' },
        ],
        [
          { t: 'dialogue', title: 'En el supermercado', lines: [
            { who: 'Yusuf', s: 'Perdone, ¿dónde está el arroz?' },
            { who: 'Elena', s: 'En el pasillo tres, al lado de la pasta.' },
            { who: 'Yusuf', s: '¿Y los huevos?' },
            { who: 'Elena', s: 'Al fondo, cerca de la leche.' },
            { who: 'Yusuf', s: 'Gracias. ¿Tienen pan sin gluten?' },
            { who: 'Elena', s: 'Sí, está en la sección de panadería.' },
          ] },
          { t: 'dialogue', title: 'En la frutería', lines: [
            { who: 'Yusuf', s: 'Buenos días. ¿Quién es el último?' },
            { who: 'Carla', s: 'Usted. Dígame, ¿qué le pongo?' },
            { who: 'Yusuf', s: '¿Me pone un kilo de tomates, por favor?' },
            { who: 'Carla', s: 'Aquí tiene. ¿Algo más?' },
            { who: 'Yusuf', s: 'Sí, medio kilo de fresas.' },
            { who: 'Carla', s: '¿Algo más?' },
            { who: 'Yusuf', s: 'No, nada más, gracias. ¿Cuánto es?' },
            { who: 'Carla', s: 'Son cinco euros con veinte.' },
          ] },
          { t: 'tip', art: 'owl', md: 'At a market or a small shop in Spain, people often ask *¿Quién es el último?* (who is last?) when they arrive, to know their place in the queue. *¿Me pone…?* is the usual way to ask for food at a counter in Spain. In Latin America you will often hear *¿Me da…?*' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each question and its answer.', pairs: [
            ['¿Dónde está el aceite?', 'En el pasillo dos.'],
            ['¿Algo más?', 'No, nada más, gracias.'],
            ['¿Cuánto es?', 'Son tres euros con diez.'],
            ['¿Quién es el último?', 'Yo. Después de mí, usted.'],
            ['¿Qué le pongo?', 'Cien gramos de queso, por favor.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Una ___ de atún, por favor.', o: ['lata', 'barra', 'docena'], why: 'Tuna comes in a tin: *una lata*.' },
            { q: 'Una ___ de pan, por favor.', o: ['barra', 'botella', 'lata'], why: 'A long loaf of bread: *una barra de pan*.' },
            { q: 'Una ___ de huevos, por favor.', o: ['docena', 'botella', 'barra'], why: 'Eggs are sold by the dozen: *una docena*.' },
            { q: '¿Dónde ___ los huevos?', o: ['están', 'está', 'es'], why: '*los huevos* is plural: *están*.' },
          ] },
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'bread', o: ['una barra de pan', 'una lata de atún', 'un paquete de arroz'], why: 'A long loaf: *una barra de pan*.' },
            { pic: 'apple', o: ['una manzana', 'un tomate', 'una fresa'], why: 'It is an apple: *una manzana*.' },
            { pic: 'cheese', o: ['el queso', 'el jamón', 'la leche'], why: 'It is cheese: *el queso*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: '¿Me pone medio kilo ___ fresas?', a: ['de'], why: 'Quantity + *de* + food.' },
            { q: '¿Dónde ___ la leche? (estar)', a: ['está', 'esta'], why: '*la leche* is singular: *está*.' },
            { q: '¿Algo más? No, nada ___, gracias.', a: ['más', 'mas'], why: '*nada más*: nothing else.' },
            { q: 'Cuatro euros ___ cincuenta. (4,50 €)', a: ['con'], why: 'Euros *con* cents: *cuatro euros con cincuenta*.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: the container and the food.', pairs: [
            ['una barra', 'de pan'],
            ['una lata', 'de atún'],
            ['una docena', 'de huevos'],
            ['una botella', 'de aceite'],
            ['un paquete', 'de arroz'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Paying',
      about: 'Pay by cash or card, ask for a receipt, and know when shops are open.',
      art: 'parrot',
      spreads: [
        [
          { t: 'dialogue', title: 'En la caja', lines: [
            { who: 'Sara', s: 'Hola, buenas. ¿Quiere bolsa? Son diez céntimos.' },
            { who: 'Omar', s: 'No, gracias, tengo mi bolsa.' },
            { who: 'Sara', s: 'Son dieciocho euros con setenta. ¿En efectivo o con tarjeta?' },
            { who: 'Omar', s: 'En efectivo. Tome, veinte euros.' },
            { who: 'Sara', s: 'Aquí tiene la vuelta: un euro con treinta. ¿Quiere el tique?' },
            { who: 'Omar', s: 'Sí, por favor. Gracias.' },
            { who: 'Sara', s: 'A usted. Hasta luego.' },
          ] },
          { t: 'examples', items: [
            { s: '¿Puedo pagar **con tarjeta**?', n: '*con tarjeta*: by card. *en efectivo*: in cash. Many people also pay with their phone: *con el móvil*.' },
            { s: 'Aquí tiene **la vuelta**.', n: '*la vuelta* (or *el cambio*) is the money you get back.' },
            { s: '¿Me da **el tique**, por favor?', n: '*el tique* or *el ticket* is the receipt. For a bigger purchase, you can ask for *una factura* (an invoice).' },
            { s: '¿**Quiere** bolsa?', n: 'In many shops in Spain, bags are not free. Bring your own.' },
          ] },
        ],
        [
          { t: 'text', md: 'Opening hours in Spain can surprise you. Big supermarkets usually open all day, often until nine or ten in the evening. Many **small shops close at midday**, for example from two to five, and open again in the evening. On Sundays and public holidays (*festivos*), many shops are closed, but this depends on the town and the region.' },
          { t: 'tip', art: 'owl', md: 'In Latin America, the change is usually *el vuelto* or *el cambio*, and in some countries the receipt is *la boleta*. In many countries, people say *plata* for money. Opening hours are also different from country to country.' },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue at the till. True or false?', items: [
            { q: 'Omar compra una bolsa.', a: 'f', why: '*No, gracias, tengo mi bolsa.*' },
            { q: 'Omar paga en efectivo.', a: 't', why: 'He pays with a twenty-euro note.' },
            { q: 'Omar recibe un euro con treinta de vuelta.', a: 't', why: '20 € − 18,70 € = 1,30 €.' },
            { q: 'Omar no quiere el tique.', a: 'f', why: '*¿Quiere el tique? Sí, por favor.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say or do?', items: [
            { q: 'Usted quiere pagar con tarjeta. Dice: ___', o: ['¿Puedo pagar con tarjeta?', '¿Me da la vuelta?', '¿Quién es el último?'], why: 'Ask if you can pay by card: *¿Puedo pagar con tarjeta?*' },
            { q: 'Usted quiere el papel con los precios. Dice: ___', o: ['¿Me da el tique, por favor?', '¿Me pone una bolsa?', '¿Tienen leche?'], why: '*el tique*: the receipt with what you bought.' },
            { q: 'Es domingo y usted necesita pan. ___', o: ['Mira el horario: muchas tiendas están cerradas.', 'Todas las tiendas están abiertas.', 'Va al banco.'], why: 'On Sundays many shops in Spain are closed. Check the opening hours.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the present of poder (can).', verb: 'poder', tense: 'present', rows: [
            ['yo', 'puedo', 'The *o* changes to *ue*: *puedo*.'],
            ['tú', 'puedes'],
            ['él, ella, usted', 'puede'],
            ['nosotros, nosotras', 'podemos', 'No change with *nosotros*: *podemos*.'],
            ['vosotros, vosotras', 'podéis|podeis', 'No change with *vosotros*: *podéis*.'],
            ['ellos, ellas, ustedes', 'pueden'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: '¿Puedo pagar ___ tarjeta?', a: ['con'], why: 'By card: *con tarjeta*.' },
            { q: 'Pago ___ efectivo.', a: ['en'], why: 'In cash: *en efectivo*.' },
            { q: 'Aquí tiene la ___: dos euros.', a: ['vuelta'], why: 'The money you get back is *la vuelta*.' },
            { q: '¿Se ___ pagar con el móvil? (poder)', a: ['puede'], why: '*se puede* + infinitive: is it possible to…?' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: '¿Puedo pagar con tarjeta?', why: '*puedo* + the infinitive *pagar*.' },
            { a: '¿Me da el tique, por favor?', why: '*me* comes before the verb *da*.' },
            { a: '¿A qué hora cierra la tienda?', why: '*¿A qué hora…?* + verb + subject.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Signs and offers',
      about: 'Read the opening hours and offers of a supermarket and a notice at a market.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Supermercado La Plaza', md: '**Horario**\nDe lunes a sábado: de 9:00 a 21:30\nDomingos y festivos: cerrado\n\n**Ofertas de la semana**\nAceite de oliva, botella de 1 litro: 6,95 €\nTomates: 1,49 € el kilo\nYogures naturales: 2 x 1 (lleve dos y pague uno)\nLeche: la segunda unidad a mitad de precio\n\nOfertas válidas del 5 al 11 de octubre.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the sign and the offers. True, false or not given?', items: [
            { q: 'El supermercado abre los sábados.', a: 't', why: '*De lunes a sábado: de 9:00 a 21:30.*' },
            { q: 'Los domingos el supermercado abre por la mañana.', a: 'f', why: '*Domingos y festivos: cerrado.*' },
            { q: 'Con la oferta, dos yogures cuestan lo mismo que uno.', a: 't', why: '*2 x 1*: take two, pay for one.' },
            { q: 'El supermercado tiene aparcamiento.', a: 'ng', why: 'The sign says nothing about parking.' },
            { q: 'Las ofertas son para todo el mes de octubre.', a: 'f', why: 'They are valid only from 5 to 11 October.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Mercado municipal: aviso', md: 'Horario: de lunes a viernes, de 8:00 a 14:00 y de 17:00 a 20:30. Sábados, de 8:00 a 14:30.\n\nEn agosto, el mercado cierra por las tardes.\n\nEn muchos puestos puede pagar con tarjeta. Algunos puestos solo aceptan efectivo: hay un cajero automático en la entrada.\n\nTraiga su propia bolsa o su carro. Las bolsas de plástico no son gratis.' },
          { t: 'ex', kind: 'tf', h: 'Read the notice. True or false?', items: [
            { q: 'El mercado cierra a mediodía de lunes a viernes.', a: 't', why: 'It closes at 14:00 and opens again at 17:00.' },
            { q: 'El sábado por la tarde el mercado está abierto.', a: 'f', why: 'On Saturdays it is open only until 14:30.' },
            { q: 'En todos los puestos se puede pagar con tarjeta.', a: 'f', why: '*Algunos puestos solo aceptan efectivo.*' },
            { q: 'Hay un cajero automático en el mercado.', a: 't', why: '*Hay un cajero automático en la entrada.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['la vuelta', 'el dinero que le devuelven'],
            ['el tique', 'el papel con lo que ha comprado'],
            ['en efectivo', 'con billetes y monedas'],
            ['la caja', 'el sitio donde se paga'],
            ['un festivo', 'un día sin trabajo'],
            ['la oferta', 'un precio más bajo'],
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the four words about paying.', items: [
            { s: 'Puede pagar en [efectivo] o con [tarjeta], y después la cajera le da la [vuelta] y el [tique].', why: 'Cash, card, the change and the receipt.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Una ___ de aceite, por favor.', o: ['botella', 'barra', 'docena'], why: 'Oil comes in a bottle: *una botella*.' },
      { q: '¿Dónde ___ los tomates?', o: ['están', 'está', 'son'], why: 'Plural: *están*.' },
      { q: 'Usted no tiene tarjeta. Paga ___.', o: ['en efectivo', 'con el tique', 'con la vuelta'], why: 'In cash: *en efectivo*.' },
      { q: 'Es festivo. Muchas tiendas están ___.', o: ['cerradas', 'abiertas', 'en oferta'], why: 'On public holidays many shops are closed.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '¿Me pone cien gramos ___ jamón?', a: ['de'], why: 'Quantity + *de* + food.' },
      { q: '¿___ pagar con tarjeta? (poder, yo)', a: ['Puedo'], why: '*poder*: *yo puedo*.' },
      { q: 'Aquí tiene la ___: tres euros.', a: ['vuelta'], why: 'The money you get back: *la vuelta*.' },
      { q: '¿Me da el ___, por favor? Quiero ver los precios.', a: ['tique', 'ticket'], why: 'The receipt: *el tique* or *el ticket*.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
      { q: 'Lleve dos y pague uno: es un ___.', o: ['2 x 1', 'festivo', 'tique'], why: '*2 x 1* (*dos por uno*): two for the price of one.' },
      { q: 'Muchas tiendas pequeñas cierran a ___.', o: ['mediodía', 'medianoche', 'medio kilo'], why: 'Many small shops close at midday and open again in the evening.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Me pone un kilo de tomates?', why: '*¿Me pone…?* + quantity + *de* + food.' },
      { a: '¿A qué hora abre el mercado?', why: '*¿A qué hora…?* + verb + subject.' },
    ] },
  ],
};
