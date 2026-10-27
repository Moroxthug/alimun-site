// Spanish A1, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Shopping and plans',
  goal: 'Buy clothes, compare things and talk about your plans.',
  art: 'monster',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['clothes', 'colours', 'adjective-agreement', 'demonstratives', 'shopping', 'object-pronouns', 'ir-a-infinitive', 'future-plans'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'This shirt or that one?',
      about: 'Name clothes and colours, and point with este, ese and aquel.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Here are some clothes. Learn each word with **el** or **la**. Some clothes are usually plural in Spanish: *los pantalones, los vaqueros, los zapatos*.' },
          { t: 'table', caption: 'La ropa', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'English'], rows: [
            ['la camisa', 'shirt'],
            ['la camiseta', 'T-shirt'],
            ['el jersey', 'jumper, sweater'],
            ['la chaqueta', 'jacket'],
            ['el abrigo', 'coat'],
            ['los pantalones', 'trousers'],
            ['los vaqueros', 'jeans'],
            ['la falda', 'skirt'],
            ['el vestido', 'dress'],
            ['los zapatos', 'shoes'],
            ['las zapatillas', 'trainers'],
          ] },
          { t: 'tip', art: 'owl', md: 'Some clothes have other names in Latin America: *el suéter* for *el jersey*, *la chamarra* or *la campera* for a warm jacket, and *los jeans* for *los vaqueros*. Ask your teacher about the words in their country.' },
        ],
        [
          { t: 'text', md: 'Colours are adjectives. They go **after** the noun and agree with it, like other adjectives.\n\nColours that end in **-o** have four forms: *rojo, roja, rojos, rojas*. Colours that end in **-e** or a consonant have two forms: *verde, verdes; azul, azules*.' },
          { t: 'table', caption: 'Los colores', explain: ['head', 'col0'], quiz: true, head: ['', 'masculine', 'feminine', 'plural'], rows: [
            ['red', 'rojo', 'roja', 'rojos / rojas'],
            ['white', 'blanco', 'blanca', 'blancos / blancas'],
            ['black', 'negro', 'negra', 'negros / negras'],
            ['yellow', 'amarillo', 'amarilla', 'amarillos / amarillas'],
            ['green', 'verde', 'verde', 'verdes'],
            ['blue', 'azul', 'azul', 'azules'],
            ['grey', 'gris', 'gris', 'grises'],
            ['brown', 'marrón', 'marrón', 'marrones'],
          ] },
          { t: 'examples', items: [
            { s: 'un vestido **rojo** y una falda **roja**', n: 'The colour agrees with the noun.' },
            { s: 'unos pantalones **negros**', n: 'Masculine plural: *-os*.' },
            { s: 'unas zapatillas **azules**', n: '*azul* + *-es* in the plural.' },
            { s: 'una camiseta **rosa**', n: '*rosa* and *naranja* usually do not change for masculine or feminine.' },
          ] },
        ],
        [
          { t: 'text', md: 'To point at things, use **este** (this, near me), **ese** (that, near you) and **aquel** (that, far from us both). Each one agrees with the noun.' },
          { t: 'table', caption: 'este, ese, aquel', explain: ['head', 'col0'], quiz: true, head: ['', 'near me', 'near you', 'far away'], rows: [
            ['masculine', 'este jersey', 'ese jersey', 'aquel jersey'],
            ['feminine', 'esta falda', 'esa falda', 'aquella falda'],
            ['masculine plural', 'estos zapatos', 'esos zapatos', 'aquellos zapatos'],
            ['feminine plural', 'estas camisas', 'esas camisas', 'aquellas camisas'],
          ] },
          { t: 'tip', art: 'owl', md: 'Without the noun, the words stay the same: *¿Te gusta esta camisa? – No, prefiero esa.* In everyday speech, many people use *ese* for things that are far away too.' },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Write the colour in the right form.', items: [
            { q: 'Tengo dos camisetas ___.', base: 'rojo', a: ['rojas'], why: '*camisetas* is feminine plural: *rojas*.' },
            { q: 'Me gustan esos zapatos ___.', base: 'negro', a: ['negros'], why: '*zapatos* is masculine plural: *negros*.' },
            { q: 'Busco una chaqueta ___.', base: 'blanco', a: ['blanca'], why: '*chaqueta* is feminine singular: *blanca*.' },
            { q: 'Mi hermano lleva unos pantalones ___.', base: 'azul', a: ['azules'], why: '*azul* ends in a consonant: plural *azules*.' },
            { q: 'Quiero las zapatillas ___.', base: 'verde', a: ['verdes'], why: '*verde* has one form for masculine and feminine. Plural: *verdes*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '¿Cuánto cuesta ___ camisa? (near me)', o: ['esta', 'este', 'estas'], why: '*camisa* is feminine, near me: *esta*.' },
            { q: 'Me gustan ___ zapatos. (near you)', o: ['esos', 'esas', 'ese'], why: '*zapatos* is masculine plural, near you: *esos*.' },
            { q: '¿Ves ___ abrigo en la ventana? (far away)', o: ['aquel', 'aquella', 'aquellos'], why: '*abrigo* is masculine singular, far away: *aquel*.' },
            { q: '___ faldas son muy bonitas. (near me)', o: ['Estas', 'Estos', 'Esta'], why: '*faldas* is feminine plural, near me: *estas*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'In a clothes shop',
      about: 'Ask about prices and sizes, and say what you take.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To ask the price, use **costar** (o → ue). For one thing, say **¿Cuánto cuesta?** For more than one thing, say **¿Cuánto cuestan?**\n\nThe size of clothes is **la talla**. For shoes, people often say **el número**.' },
          { t: 'dialogue', title: 'En la tienda de ropa', lines: [
            { who: 'Dependienta', s: 'Hola, buenos días. ¿Puedo ayudarle?' },
            { who: 'Marta', s: 'Sí, ¿cuánto cuesta este jersey?' },
            { who: 'Dependienta', s: 'Treinta y cinco euros.' },
            { who: 'Marta', s: '¿Tiene otra talla? Esta es pequeña.' },
            { who: 'Dependienta', s: 'Sí, ¿qué talla usa?' },
            { who: 'Marta', s: 'La M. ¿Puedo probármelo?' },
            { who: 'Dependienta', s: 'Claro. Los probadores están al fondo.' },
            { who: 'Marta', s: 'Me queda muy bien. Me lo llevo.' },
            { who: 'Dependienta', s: 'Muy bien. ¿Paga con tarjeta o en efectivo?' },
          ] },
          { t: 'tip', art: 'owl', md: '*Me queda bien* means it fits me or it suits me. *Me queda grande* means it is too big for me. *¿Qué talla usa?* is the polite form. To a friend, say *¿Qué talla usas?* In *¿Puedo probármelo?* (Can I try it on?), *me* and *lo* are joined to the end of the infinitive.' },
        ],
        [
          { t: 'text', md: 'To avoid saying the noun again, use **lo, la, los, las**. They go **before** the verb and agree with the thing.\n\n*¿El jersey? **Lo** compro.* (*lo* = el jersey)\n*¿La falda? **La** compro.* (*la* = la falda)' },
          { t: 'table', caption: 'lo, la, los, las', explain: ['head'], quiz: true, head: ['Thing', 'Word', 'Example'], rows: [
            ['el abrigo', 'lo', 'Lo quiero.'],
            ['la chaqueta', 'la', 'La compro.'],
            ['los zapatos', 'los', 'Me los llevo.'],
            ['las camisetas', 'las', 'No las necesito.'],
          ] },
          { t: 'examples', items: [
            { s: '¿Te gusta este vestido? – Sí, **me lo llevo**.', n: '*Me lo llevo*: I will take it. *lo* = el vestido.' },
            { s: '¿Y las zapatillas? – No, **no las quiero**.', n: '*no* goes before *las*.' },
            { s: '¿Dónde está mi chaqueta? – **La** tienes en la silla.', n: '*la* = la chaqueta.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Cuesta or cuestan? Choose.', items: [
            { q: '¿Cuánto ___ estos pantalones?', o: ['cuestan', 'cuesta', 'costan'], why: '*pantalones* is plural: *cuestan*.' },
            { q: '¿Cuánto ___ esta falda?', o: ['cuesta', 'cuestan', 'costa'], why: '*falda* is one thing: *cuesta*.' },
            { q: 'Las camisetas ___ diez euros.', o: ['cuestan', 'cuesta', 'costamos'], why: 'Plural subject: *cuestan*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose lo, la, los or las.', items: [
            { q: '¿El abrigo? Sí, ___ compro.', o: ['lo', 'la', 'los'], why: '*el abrigo* is masculine singular: *lo*.' },
            { q: '¿Las zapatillas? Me ___ llevo.', o: ['las', 'los', 'la'], why: '*las zapatillas* is feminine plural: *las*.' },
            { q: '¿Y la camisa? No ___ necesito.', o: ['la', 'lo', 'las'], why: '*la camisa* is feminine singular: *la*.' },
            { q: '¿Los vaqueros? ___ quiero en azul.', o: ['Los', 'Lo', 'Las'], why: '*los vaqueros* is masculine plural: *los*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the answer.', pairs: [
            ['¿Cuánto cuesta este abrigo?', 'Noventa euros.'],
            ['¿Qué talla usa?', 'La L.'],
            ['¿Puedo probármelo?', 'Sí, los probadores están al fondo.'],
            ['¿Paga con tarjeta?', 'No, en efectivo.'],
            ['¿Le queda bien?', 'No, me queda pequeño.'],
          ] },
          { t: 'ex', kind: 'transform', h: 'Answer with lo, la, los or las.', items: [
            { q: '¿Compras el jersey? – Sí, compro el jersey.', cue: 'Sí,', a: ['Sí, lo compro.'], why: '*el jersey* → *lo*, before the verb.' },
            { q: '¿Quieres la chaqueta? – No, no quiero la chaqueta.', cue: 'No,', a: ['No, no la quiero.'], why: '*la chaqueta* → *la*, between *no* and the verb.' },
            { q: '¿Te llevas los zapatos? – Sí, me llevo los zapatos.', cue: 'Sí,', a: ['Sí, me los llevo.'], why: '*los zapatos* → *los*, after *me* and before the verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'What are you going to do?',
      about: 'Talk about plans with ir a + infinitive.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To talk about plans, use **ir a** + infinitive. Only *ir* changes with the person. The second verb stays in the infinitive: *Voy a comprar un abrigo.* (I am going to buy a coat.)' },
          { t: 'table', caption: 'ir a + infinitive', explain: ['head'], quiz: true, head: ['Person', 'ir a', 'Infinitive'], rows: [
            ['yo', 'voy a', 'viajar'],
            ['tú', 'vas a', 'estudiar'],
            ['él / ella / usted', 'va a', 'trabajar'],
            ['nosotros / nosotras', 'vamos a', 'comer fuera'],
            ['vosotros / vosotras', 'vais a', 'salir'],
            ['ellos / ellas / ustedes', 'van a', 'ver una película'],
          ] },
          { t: 'examples', items: [
            { s: 'Este fin de semana **voy a ir** de compras.', n: '*ir a ir*: this is correct and very common.' },
            { s: '¿Qué **vas a hacer** mañana?', n: 'The question for plans.' },
            { s: 'Mis padres **van a visitar** a mi tía.', n: 'With a person after the verb, add *a*: *visitar a mi tía*.' },
            { s: 'Esta noche **no vamos a salir**.', n: '*no* goes before *ir*.' },
          ] },
        ],
        [
          { t: 'text', md: 'These words say when your plans are.' },
          { t: 'table', caption: 'When?', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'English'], rows: [
            ['esta tarde', 'this afternoon, this evening'],
            ['esta noche', 'tonight'],
            ['mañana', 'tomorrow'],
            ['pasado mañana', 'the day after tomorrow'],
            ['el fin de semana', 'at the weekend'],
            ['la semana que viene', 'next week'],
            ['el mes que viene', 'next month'],
            ['el próximo año', 'next year'],
          ] },
          { t: 'tip', art: 'owl', md: '*mañana* means tomorrow, and *la mañana* means the morning. So *mañana por la mañana* is tomorrow morning. You can also say *el año que viene* for next year.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the right form of ir a.', items: [
            { q: 'Mañana yo ___ comprar un regalo para mi madre.', a: ['voy a'], why: '*yo* → *voy a* + infinitive.' },
            { q: '¿Qué ___ hacer tú el sábado?', a: ['vas a'], why: '*tú* → *vas a* + infinitive.' },
            { q: 'Esta noche nosotros ___ cenar en casa.', a: ['vamos a'], why: '*nosotros* → *vamos a* + infinitive.' },
            { q: 'Mi hermana ___ estudiar en Francia el próximo año.', a: ['va a'], why: '*ella* → *va a* + infinitive.' },
            { q: '¿Vosotros ___ venir a la fiesta?', a: ['vais a'], why: '*vosotros* → *vais a* + infinitive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Voy a comprar unos zapatos nuevos.', why: '*voy a* + infinitive + the thing.' },
            { a: '¿Qué vais a hacer el fin de semana?', why: 'Question word, *vais a hacer*, then when.' },
            { a: 'Mañana no voy a trabajar.', why: '*no* goes before *voy*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Mañana voy a [compro] una chaqueta.', a: ['comprar'], why: 'After *ir a*, use the infinitive: *comprar*.' },
            { s: 'El sábado nosotros [vamos] cenar con mis padres.', a: ['vamos a'], why: 'You need *a* between *ir* and the infinitive: *vamos a cenar*.' },
            { s: 'Mis amigos [va] a ir a la playa.', a: ['van'], why: '*mis amigos* is *ellos*: *van a*.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs.', pairs: [
            ['mañana', 'tomorrow'],
            ['esta noche', 'tonight'],
            ['el fin de semana', 'at the weekend'],
            ['la semana que viene', 'next week'],
            ['pasado mañana', 'the day after tomorrow'],
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Reading: a sale and weekend plans',
      about: 'Read a shop advert and a message about plans.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'Rebajas en Moda Luna', md: '**¡Grandes rebajas de enero!**\n\nTodos los abrigos y chaquetas: **cincuenta por ciento** menos.\n\nJerséis de todos los colores: antes treinta euros, ahora quince.\n\nVaqueros: dos por el precio de uno.\n\nZapatillas blancas y negras: veinte euros.\n\nLas rebajas empiezan el siete de enero. Abrimos de lunes a sábado, de diez de la mañana a nueve de la noche. Los domingos, cerrado.\n\nSi la talla no te queda bien, puedes cambiar la ropa durante treinta días. ¡Guarda el tique!' },
          { t: 'reading', title: 'Mensaje de Clara', md: '¡Hola, Inés!\n\n¿Qué vas a hacer este fin de semana? Yo voy a ir a las rebajas de Moda Luna el sábado por la mañana. Necesito un abrigo, porque mi abrigo es muy viejo, y voy a mirar los vaqueros. ¡Dos por el precio de uno!\n\n¿Vienes conmigo? Podemos quedar a las once delante de la tienda. Después vamos a comer con mi hermano y su novia en el restaurante de la plaza.\n\nEl domingo no voy a salir. Voy a descansar y a leer en casa.\n\nUn beso,\nClara' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Los abrigos cuestan la mitad en las rebajas.', a: 't', why: '*cincuenta por ciento menos*: half the price.' },
            { q: 'Un jersey cuesta ahora treinta euros.', a: 'f', why: 'Before it was thirty. Now it is fifteen euros.' },
            { q: 'La tienda abre los domingos.', a: 'f', why: '*Los domingos, cerrado.*' },
            { q: 'Clara va a comprar un abrigo.', a: 't', why: '*Necesito un abrigo.* She is going to the sale for it.' },
            { q: 'Inés necesita unos zapatos.', a: 'ng', why: 'The message does not say what Inés needs.' },
            { q: 'El domingo Clara va a ir al cine.', a: 'f', why: 'She is going to stay at home: *Voy a descansar y a leer en casa.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Por qué necesita Clara un abrigo?', o: ['Porque su abrigo es muy viejo.', 'Porque hace mucho frío.', 'Porque es muy barato.'], why: '*mi abrigo es muy viejo*: her coat is very old.' },
            { q: '¿Dónde van a quedar Clara e Inés?', o: ['Delante de la tienda.', 'En el restaurante de la plaza.', 'En casa de Clara.'], why: '*Podemos quedar a las once delante de la tienda.*' },
            { q: 'Clara compra unos vaqueros y no le quedan bien. ¿Qué puede hacer?', o: ['Cambiarlos durante treinta días.', 'Cambiarlos solo el domingo.', 'Nada, no puede cambiarlos.'], why: '*puedes cambiar la ropa durante treinta días*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the plans with ir a + infinitive.', items: [
            { s: 'Yo [voy a ir] a las rebajas el sábado.', why: '*voy a* + the infinitive *ir*.' },
            { s: 'Después [vamos a comer] con mi hermano.', why: '*vamos a* + the infinitive *comer*.' },
            { s: 'El domingo [no voy a salir].', why: '*no* + *voy a* + the infinitive *salir*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Me gusta mucho esa falda ___.', o: ['roja', 'rojo', 'rojas'], why: '*falda* is feminine singular: *roja*.' },
      { q: '¿Cuánto cuestan ___ zapatos? (near me)', o: ['estos', 'este', 'estas'], why: '*zapatos* is masculine plural, near me: *estos*.' },
      { q: '¿El vestido? Sí, me ___ llevo.', o: ['lo', 'la', 'le'], why: '*el vestido* is masculine singular: *lo*.' },
      { q: '¿Tiene otra ___? Esta es grande.', o: ['talla', 'tarjeta', 'tienda'], why: 'The size of clothes is *la talla*.' },
      { q: '¿Qué ___ hacer el domingo, Clara?', o: ['vas a', 'vas', 'ir a'], why: 'Plans: *ir a* + infinitive. *tú* → *vas a hacer*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: '¿Cuánto ___ estas camisetas?', a: ['cuestan'], why: 'Plural: *cuestan*.' },
      { q: 'Busco unos pantalones ___. (gris)', a: ['grises'], why: '*gris* ends in a consonant: plural *grises*.' },
      { q: '¿La chaqueta? No, no ___ quiero.', a: ['la'], why: '*la chaqueta* is feminine singular: *la*.' },
      { q: '¿Qué vas a ___ mañana? – Voy a estudiar.', a: ['hacer'], why: 'The question for plans: *¿Qué vas a hacer?*' },
      { q: 'Hoy es lunes. ___ mañana es miércoles.', a: ['Pasado'], why: 'Two days from today: *pasado mañana*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Puedo probarme esta camisa?', why: '*poder* + infinitive, with *me* joined to the end.' },
      { a: 'Vamos a ir de compras el sábado.', why: '*vamos a* + infinitive, then when.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Me gustan [esas] zapatos.', a: ['esos'], why: '*zapatos* is masculine: *esos*.' },
      { s: 'Mañana vamos a [compramos] un regalo.', a: ['comprar'], why: 'After *ir a*, use the infinitive: *comprar*.' },
    ] },
  ],
};
