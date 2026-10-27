// Spanish A2, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Food and recipes',
  goal: 'Follow and give a recipe, and talk about food habits.',
  art: 'churro',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['direct-object-pronouns', 'imperative', 'quantities', 'impersonal-se', 'recipes'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: '¿El pan? Lo compro yo',
      about: 'Use lo, la, los and las so you do not repeat a noun.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'When you do not want to say a noun again, use a **direct object pronoun**. It has the same gender and number as the noun: *el pan → lo*, *la leche → la*, *los huevos → los*, *las patatas → las*.\n\nThe pronoun goes **before** the conjugated verb: *¿El pan? Lo compro yo.* In a negative sentence, *no* comes first: *No lo compro.*' },
          { t: 'table', caption: 'Direct object pronouns', explain: ['head', 'col0'], quiz: true, head: ['The noun is…', 'Pronoun', 'Example'], rows: [
            ['masculine, one', 'lo', '¿El queso? **Lo** compro hoy.'],
            ['feminine, one', 'la', '¿La sopa? **La** hago yo.'],
            ['masculine, more than one', 'los', '¿Los tomates? **Los** lavo ahora.'],
            ['feminine, more than one', 'las', '¿Las cebollas? **Las** corto yo.'],
          ] },
        ],
        [
          { t: 'text', md: 'With an **infinitive** (*voy a comprar*, *tengo que hacer*), you have two choices. The pronoun goes before the conjugated verb, or at the end of the infinitive, written as one word: *Lo voy a comprar* or *Voy a comprarlo*. Both are correct.\n\nThe pronouns *me, te, nos* and *os* work in the same way: *¿Me ayudas?*' },
          { t: 'examples', items: [
            { s: '¿Dónde está la leche? No **la** veo.', n: '*la leche* is feminine: *la*. *No* comes before the pronoun.' },
            { s: '¿Los huevos? **Los** compré ayer.', n: 'Before the verb, also in the past.' },
            { s: '**Lo** voy a preparar esta noche.', n: 'Before *voy a* …' },
            { s: 'Voy a preparar**lo** esta noche.', n: '… or at the end of the infinitive. The meaning is the same.' },
            { s: '¿Las fresas? Tienes que lavar**las** antes de comer**las**.', n: 'Two infinitives, two pronouns at the end.' },
          ] },
          { t: 'tip', art: 'owl', md: 'For a man or a boy, many people in Spain say *le* instead of *lo*: *A Juan le veo mucho.* This is accepted. For things, always use *lo*: *¿El libro? Lo tengo yo.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right pronoun.', items: [
            { q: '¿Compras tú el pan? Sí, ___ compro yo.', o: ['lo', 'la', 'los'], why: '*el pan* is masculine and one thing: *lo*.' },
            { q: '¿Dónde pongo la fruta? ___ pones en la mesa.', o: ['La', 'Lo', 'Las'], why: '*la fruta* is feminine: *la*.' },
            { q: '¿Has visto mis gafas? No, no ___ he visto.', o: ['las', 'los', 'la'], why: '*las gafas* is feminine and plural: *las*.' },
            { q: 'Estos tomates están muy buenos. ¿Dónde ___ compras?', o: ['los', 'las', 'lo'], why: '*los tomates* is masculine and plural: *los*.' },
            { q: '¿Y el café? ¿___ tomas con leche?', o: ['Lo', 'La', 'Le'], why: '*el café* is a thing and masculine: *lo*.' },
            { q: 'Ana, ¿___ ayudas con la cena, por favor?', o: ['me', 'mi', 'yo'], why: '*Me* is the object pronoun for *yo*. It goes before the verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Write the sentence again with a pronoun instead of the words in bold.', items: [
            { q: 'Compro **las naranjas** en el mercado.', a: ['Las compro en el mercado.'], why: '*las naranjas → las*, before the verb.' },
            { q: 'No como **carne**.', a: ['No la como.'], why: '*la carne → la*. *No* comes first, then the pronoun.' },
            { q: 'Voy a hacer **la paella**.', a: ['La voy a hacer.', 'Voy a hacerla.'], why: 'With an infinitive, before *voy* or at the end: *hacerla*.' },
            { q: 'Tengo que lavar **los platos**.', a: ['Tengo que lavarlos.', 'Los tengo que lavar.'], why: '*los platos → los*, at the end of *lavar* or before *tengo*.' },
            { q: 'Mi padre prepara **el desayuno**.', a: ['Mi padre lo prepara.'], why: '*el desayuno → lo*, before the verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: '¿El vino? No lo bebo nunca.', why: '*No*, then the pronoun, then the verb.' },
            { a: 'Las patatas las compro yo.', why: 'The noun first for emphasis, then the pronoun before the verb.' },
            { a: 'Vamos a comerlo en el jardín.', why: 'The pronoun can go at the end of the infinitive: *comerlo*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
            { s: '¿La ensalada? [Lo] preparo yo.', a: ['La'], why: '*la ensalada* is feminine: *la*.' },
            { s: '¿Los huevos? Voy a comprar[las] mañana.', a: ['comprarlos'], why: '*los huevos* is masculine: *comprarlos*.' },
            { s: 'El queso no [como lo].', a: ['lo como'], why: 'The pronoun goes before the conjugated verb: *lo como*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Corta, pon, añade',
      about: 'Give instructions to a friend with the tú imperative.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'The **imperative** gives instructions, as in a recipe. For *tú*, most verbs use the same form as *él* or *ella* in the present: *él corta → ¡Corta!*, *él bebe → ¡Bebe!*, *él abre → ¡Abre!*\n\nFor *vosotros*, take the infinitive and change the final *-r* to *-d*: *cortar → cortad*, *poner → poned*.' },
          { t: 'table', caption: 'The affirmative imperative', quiz: true, head: ['', 'tú', 'vosotros'], rows: [
            ['cortar', 'corta', 'cortad'],
            ['añadir', 'añade', 'añadid'],
            ['mezclar', 'mezcla', 'mezclad'],
            ['batir', 'bate', 'batid'],
            ['freír', 'fríe', 'freíd'],
            ['calentar', 'calienta', 'calentad'],
            ['servir', 'sirve', 'servid'],
          ] },
        ],
        [
          { t: 'text', md: 'Some very common verbs have a short, irregular *tú* form. Learn them by heart. The *vosotros* form is regular: *poned, haced, venid*.' },
          { t: 'table', caption: 'Irregular tú imperatives', quiz: true, head: ['', 'tú'], rows: [
            ['poner', 'pon'],
            ['hacer', 'haz'],
            ['venir', 'ven'],
            ['salir', 'sal'],
            ['tener', 'ten'],
            ['decir', 'di'],
            ['ir', 've'],
            ['ser', 'sé'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Latin America, people do not use *vosotros*. To give instructions to two or more people, they use the *ustedes* form: *corten, pongan, añadan*. In Spain, this form is only for formal situations.' },
        ],
        [
          { t: 'text', md: 'In the affirmative imperative, pronouns go **at the end** of the verb, written as one word: *Corta la cebolla → Córtala.* Often you need to add an accent to keep the stress in the same place: *corta → córtala*, *lava → lávalos*. Short forms like *pon* or *haz* do not need one: *ponlo, hazla*.' },
          { t: 'examples', items: [
            { s: '¿La cebolla? **Córtala** en trozos pequeños.', n: '*corta + la*. The stress stays on *cor*, so you write an accent.' },
            { s: '¿Los tomates? **Lávalos** bien.', n: '*lava + los = lávalos*' },
            { s: '¿El aceite? **Ponlo** en la sartén.', n: '*pon + lo = ponlo*. No accent.' },
            { s: '**Ven** a mi casa y **haz** la cena conmigo.', n: 'Two irregular forms: *venir → ven*, *hacer → haz*.' },
            { s: '**Ayúdame**, por favor.', n: '*ayuda + me*. *Me, te, nos* also go at the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the tú imperative.', items: [
            { q: '___ las patatas en trozos. (cortar)', a: ['Corta'], why: 'Like *él corta*: *corta*.' },
            { q: '___ un poco de sal. (añadir)', a: ['Añade'], why: 'Like *él añade*: *añade*.' },
            { q: '___ la sartén en el fuego. (poner)', a: ['Pon'], why: '*Poner* is irregular: *pon*.' },
            { q: '___ una ensalada para la cena. (hacer)', a: ['Haz'], why: '*Hacer* is irregular: *haz*.' },
            { q: '___ los huevos en un bol. (batir)', a: ['Bate'], why: 'Like *él bate*: *bate*.' },
            { q: '___ aquí, la comida está lista. (venir)', a: ['Ven'], why: '*Venir* is irregular: *ven*.' },
            { q: '___ la sopa caliente. (servir)', a: ['Sirve'], why: 'Like *él sirve*: the *e* changes to *i*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form with the pronoun.', items: [
            { q: '¿La cebolla? ___ muy fina.', o: ['Córtala', 'Cortala', 'Córtalo'], why: '*corta + la*, with an accent: *córtala*.' },
            { q: '¿Las manzanas? ___ antes de comerlas.', o: ['Lávalas', 'Lávalos', 'Lavalas'], why: '*las manzanas* is feminine plural: *lávalas*.' },
            { q: '¿El arroz? ___ en el agua.', o: ['Ponlo', 'Pónlo', 'Ponla'], why: '*pon + lo*. A short form does not need an accent.' },
            { q: '¿Los huevos? ___ con un tenedor.', o: ['Bátelos', 'Bátelas', 'Batelos'], why: '*bate + los*, with an accent: *bátelos*.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the instruction. Two words do not belong.', items: [
            { a: 'Pon el agua en una olla grande.', extra: ['pones', 'la'], why: 'The *tú* imperative of *poner* is *pon*, not *pones*.' },
            { a: 'Lávalas y córtalas en trozos.', extra: ['las', 'lavas'], why: 'The pronoun goes at the end of the imperative: *lávalas*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Un kilo de tomates',
      about: 'Say how much you need and describe a recipe with se.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'For quantities and containers, use **de** between the quantity and the food: *un kilo de tomates*, *una botella de agua*. With *un poco de* and *mucho*, the food often has no article: *un poco de sal*, *mucha agua*.' },
          { t: 'table', caption: 'Quantities and containers', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['un kilo de patatas', 'a kilo of potatoes'],
            ['medio kilo de carne', 'half a kilo of meat'],
            ['cien gramos de queso', '100 grams of cheese'],
            ['un litro de leche', 'a litre of milk'],
            ['una botella de aceite', 'a bottle of oil'],
            ['una lata de tomate', 'a tin of tomato'],
            ['un paquete de arroz', 'a packet of rice'],
            ['una docena de huevos', 'a dozen eggs'],
            ['una barra de pan', 'a loaf of bread'],
            ['un poco de sal', 'a little salt'],
          ] },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which food goes with the container? Choose all the right ones.', items: [
            { key: 'una botella de', o: ['agua', 'vino', 'aceite', 'pan', 'huevos'], a: [0, 1, 2], why: 'A bottle holds liquids: *agua*, *vino*, *aceite*.' },
            { key: 'una lata de', o: ['atún', 'tomate', 'sardinas', 'lechuga', 'leche fresca'], a: [0, 1, 2], why: 'Fish and tomato often come in tins. Lettuce and fresh milk do not.' },
            { key: 'un paquete de', o: ['arroz', 'galletas', 'café', 'naranja', 'aceite'], a: [0, 1, 2], why: 'Dry food comes in packets: *arroz*, *galletas*, *café*.' },
          ] },
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'bread', o: ['el pan', 'el queso', 'la manzana'], why: 'You buy it as *una barra de pan*.' },
            { pic: 'cheese', o: ['el queso', 'el pan', 'el huevo'], why: 'You buy it by weight: *cien gramos de queso*.' },
            { pic: 'apple', o: ['la manzana', 'la naranja', 'la patata'], why: 'You buy them by the kilo: *un kilo de manzanas*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Recipes and instructions often use **se** + verb. It means *people do this* or *you do this*, with no person. The verb agrees with the thing: *se corta la cebolla* (one), *se cortan las patatas* (more than one).' },
          { t: 'examples', items: [
            { s: 'Primero **se lavan** las verduras.', n: '*las verduras* is plural: *se lavan*.' },
            { s: 'Luego **se pone** el aceite en la sartén.', n: '*el aceite* is one thing: *se pone*.' },
            { s: 'En España **se come** tarde.', n: 'A habit of many people: *se come*.' },
            { s: '¿Cómo **se dice** *fork* en español?', n: 'A very useful question with *se*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain, lunch is often between two and three, and dinner after nine. Some food words change in Latin America: *patata* is *papa*, *zumo* is *jugo* and *judías verdes* are *ejotes* in Mexico.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Se + one or more than one? Choose the verb.', items: [
            { q: 'En esta receta se ___ dos cebollas.', o: ['usan', 'usa', 'uso'], why: '*dos cebollas* is plural: *se usan*.' },
            { q: 'Primero se ___ el horno a 180 grados.', o: ['calienta', 'calientan', 'calento'], why: '*el horno* is one thing: *se calienta*.' },
            { q: 'Los huevos se ___ en un bol.', o: ['baten', 'bate', 'batimos'], why: '*los huevos* is plural: *se baten*.' },
            { q: 'En mi casa se ___ mucho pescado.', o: ['come', 'comen', 'comes'], why: '*mucho pescado* is one thing (no plural): *se come*.' },
            { q: 'Aquí se ___ café muy bueno.', o: ['vende', 'venden', 'vendes'], why: '*café* is singular: *se vende*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'memory', h: 'Find the pairs: a quantity and a food.', pairs: [
            ['una docena de', 'huevos'],
            ['una barra de', 'pan'],
            ['un litro de', 'leche'],
            ['una lata de', 'atún'],
            ['un paquete de', 'arroz'],
            ['cien gramos de', 'jamón'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Necesito una ___ de huevos: doce, por favor.', a: ['docena'], why: 'Twelve eggs: *una docena*.' },
            { q: 'Quiero medio ___ de tomates.', a: ['kilo'], why: '*medio kilo* is 500 grams.' },
            { q: 'La sopa no tiene sabor. Añade un ___ de sal.', a: ['poco'], why: 'A small amount: *un poco de*.' },
            { q: 'Primero se ___ las patatas. (pelar)', a: ['pelan'], why: '*las patatas* is plural: *se pelan*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Reading: a recipe for tortilla de patatas',
      about: 'Read and follow a classic Spanish recipe.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'The *tortilla de patatas* is a thick omelette with potatoes, and one of the most typical dishes in Spain. People eat it hot or cold, at home or in a bar. Read this recipe from a friend.' },
          { t: 'reading', title: 'La tortilla de mi abuela', md: '**Ingredientes (para cuatro personas)**\nmedio kilo de patatas, una cebolla, seis huevos, un vaso de aceite de oliva y un poco de sal.\n\n**Preparación**\nPrimero pela las patatas, lávalas y córtalas en trozos finos. Corta también la cebolla. Luego pon el aceite en una sartén y caliéntalo. Fríe las patatas y la cebolla a fuego lento unos veinte minutos. Cuidado: las patatas tienen que estar blandas, no duras.\n\nMientras tanto, bate los huevos en un bol grande con un poco de sal. Después saca las patatas de la sartén y mézclalas con los huevos.\n\nPon un poco de aceite en la sartén y añade la mezcla. Espera unos cuatro minutos. Ahora viene lo más difícil: pon un plato encima de la sartén, dale la vuelta a la tortilla y ponla otra vez en la sartén. Espera dos o tres minutos más y ya está.\n\n**Un consejo**\nEn mi familia se discute mucho: ¿con cebolla o sin cebolla? Mi abuela siempre la hace con cebolla. Yo la prefiero así también. Pruébala y decide tú.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La receta es para cuatro personas.', a: 't', why: '*Ingredientes (para cuatro personas)*.' },
            { q: 'Se necesitan doce huevos.', a: 'f', why: 'The recipe uses *seis huevos*.' },
            { q: 'Las patatas tienen que estar duras.', a: 'f', why: '*Tienen que estar blandas, no duras.*' },
            { q: 'Las patatas se fríen unos veinte minutos.', a: 't', why: '*Fríe las patatas … unos veinte minutos.*' },
            { q: 'La abuela es de Madrid.', a: 'ng', why: 'The text does not say where the grandmother is from.' },
            { q: 'La persona que escribe prefiere la tortilla sin cebolla.', a: 'f', why: '*Yo la prefiero así también*: with onion, like the grandmother.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the steps of the recipe in order. Build each sentence.', items: [
            { a: 'Pela las patatas y córtalas.', why: 'The imperative first, the pronoun at the end of *corta*.' },
            { a: 'Bate los huevos con sal.', why: 'Imperative, then the object: *bate los huevos*.' },
            { a: 'Mezcla las patatas con los huevos.', why: 'Imperative first, then the object.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Qué se hace mientras se fríen las patatas?', o: ['Se baten los huevos.', 'Se pela la cebolla.', 'Se pone un plato en la sartén.'], why: '*Mientras tanto, bate los huevos.*' },
            { q: '¿Qué es lo más difícil?', o: ['Dar la vuelta a la tortilla.', 'Cortar la cebolla.', 'Batir los huevos.'], why: '*Lo más difícil: … dale la vuelta a la tortilla.*' },
            { q: 'En la frase *Mi abuela siempre la hace*, ¿qué es *la*?', o: ['la tortilla', 'la cebolla', 'la sartén'], why: 'The grandmother always makes it, the tortilla, with onion.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the imperatives with a pronoun at the end.', items: [
            { s: 'Pela las patatas, [lávalas] y [córtalas] en trozos finos.', why: '*lava + las*, *corta + las*.' },
            { s: 'Pon el aceite en una sartén y [caliéntalo].', why: '*calienta + lo*: the oil.' },
            { s: 'Saca las patatas y [mézclalas] con los huevos.', why: '*mezcla + las*: the potatoes.' },
            { s: 'Mi abuela la hace con cebolla. [Pruébala] y decide tú.', why: '*prueba + la*: the tortilla. *La hace* is not an imperative.' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Words from the recipe.', words: [
            { a: 'sartén', clue: 'Se usa para freír. Es redonda y tiene un mango.' },
            { a: 'huevos', clue: 'La tortilla lleva seis.' },
            { a: 'cebolla', clue: 'Una verdura que te hace llorar cuando la cortas.' },
            { a: 'aceite', clue: 'En España, normalmente es de oliva.' },
            { a: 'patatas', clue: 'En América Latina se llaman papas.' },
            { a: 'sal', clue: 'Es blanca y se pone un poco en casi todo.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '¿Quién compra la leche? ___ compro yo.', o: ['La', 'Lo', 'Le'], why: '*la leche* is feminine: *la*.' },
      { q: '¿Los platos? Tengo que lavar___.', o: ['los', 'las', 'lo'], why: '*los platos* is masculine plural, at the end of the infinitive: *lavarlos*.' },
      { q: '___ la mesa, por favor. Vamos a comer.', o: ['Pon', 'Pone', 'Pones'], why: 'The *tú* imperative of *poner* is *pon*.' },
      { q: '¿La cebolla? ___ en trozos pequeños.', o: ['Córtala', 'Córtalo', 'Cortala'], why: '*la cebolla*: the pronoun *la* at the end, with an accent.' },
      { q: 'Necesito una ___ de agua.', o: ['botella', 'docena', 'barra'], why: 'Water comes in a bottle: *una botella de agua*.' },
      { q: 'En esta receta se ___ tres huevos.', o: ['usan', 'usa', 'usas'], why: '*tres huevos* is plural: *se usan*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: '___ los deberes antes de cenar. (hacer, tú)', a: ['Haz'], why: '*Hacer* is irregular: *haz*.' },
      { q: '___ un poco de azúcar. (añadir, tú)', a: ['Añade'], why: 'Like *él añade*: *añade*.' },
      { q: 'Compra una ___ de pan, por favor.', a: ['barra'], why: 'A loaf of bread: *una barra de pan*.' },
      { q: 'Primero se ___ el agua. (calentar)', a: ['calienta'], why: '*el agua* is singular, and *calentar* changes *e* to *ie*: *se calienta*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Write the sentence again with a pronoun instead of the words in bold.', items: [
      { q: 'No bebo **café**.', a: ['No lo bebo.'], why: '*el café → lo*, after *no* and before the verb.' },
      { q: 'Lava **las fresas**.', a: ['Lávalas.'], why: 'In the imperative, the pronoun goes at the end: *lávalas*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
      { s: '¿El pescado? Voy a [comprarla] hoy.', a: ['comprarlo'], why: '*el pescado* is masculine: *comprarlo*.' },
      { s: '[Hace] la cena tú hoy, por favor.', a: ['Haz'], why: 'The *tú* imperative of *hacer* is *haz*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: '¿Las patatas? Las corto yo.', why: 'The pronoun goes before the conjugated verb.' },
      { a: 'Ponlo en la sartén caliente.', why: 'Imperative + pronoun as one word: *ponlo*.' },
    ] },
  ],
};
