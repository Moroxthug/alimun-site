// Spanish B1 for travel, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Food culture',
  goal: 'Talk about food, customs and local specialities.',
  art: 'churro',
  tags: { skills: ['vocabulary', 'speaking', 'reading', 'grammar'], topics: ['food', 'restaurant', 'tipping', 'passive-se', 'regional-dishes'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Tastes and regional dishes',
      about: 'Describe how food tastes and explain dishes from Spain and Latin America.',
      art: 'pizza',
      spreads: [
        [
          { t: 'table', caption: 'Words for tastes and textures', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['dulce', 'sweet'],
            ['salado', 'salty'],
            ['picante', 'hot, spicy'],
            ['ácido', 'sour'],
            ['amargo', 'bitter'],
            ['sabroso', 'full of flavour, tasty'],
            ['contundente', 'hearty and filling'],
            ['crujiente', 'crispy'],
            ['jugoso', 'juicy'],
          ] },
          { t: 'tip', art: 'owl', md: 'To say there is too much of a taste, use *demasiado*: *demasiado salado*, *demasiado picante*. To be polite about food you do not like, say *No es mucho mi estilo* or *Está bueno, pero prefiero…*. In Spain people say *¡Está buenísimo!* or *¡Qué rico!*; in Latin America *¡Qué rico!* is the most common.' },
        ],
        [
          { t: 'table', caption: 'Regional dishes', explain: ['head', 'col2'], head: ['Dish', 'Where it is from', 'What it is'], rows: [
            ['la paella', 'Valencia', 'rice cooked in a wide pan, often with chicken, rabbit and green beans'],
            ['el gazpacho', 'Andalucía', 'a cold soup of tomato, pepper, cucumber, garlic and olive oil'],
            ['el pulpo a la gallega', 'Galicia', 'octopus with olive oil, salt and paprika, often on potatoes'],
            ['la fabada', 'Asturias', 'a hearty dish of white beans with sausage and pork'],
            ['el ceviche', 'Perú', 'raw fish in lime juice with onion and chilli'],
            ['las arepas', 'Venezuela, Colombia', 'round breads of maize flour, often filled with cheese or meat'],
            ['el mole', 'México', 'a thick sauce of chillies, spices and sometimes chocolate, served with meat'],
          ] },
          { t: 'tip', art: 'owl', md: 'Many regions are proud of their dishes, and people may tell you that the real version is only made in their town. Ask a local: *¿Qué es lo típico de aquí?* or *¿Qué me recomienda probar?*' },
        ],
        [
          { t: 'text', md: 'To explain a dish, say what is in it and how it is made. The **passive with se** helps here: *se* + verb in the third person. The verb agrees with the food: *se sirve* for one thing, *se sirven* for more than one. To say what is in a dish, use *lleva*.' },
          { t: 'examples', items: [
            { s: 'El gazpacho **se sirve** frío.', n: 'One thing: *se sirve*.' },
            { s: 'Las arepas **se rellenan** de queso o de carne.', n: 'More than one thing: *se rellenan*.' },
            { s: 'La paella **se hace** en una sartén muy grande.', n: '*se hace*: how it is made, not who makes it.' },
            { s: 'El ceviche **lleva** pescado, lima y cebolla.', n: '*llevar*: to contain, to have in it.' },
            { s: 'Esta salsa **sabe a** chocolate.', n: '*saber a*: to taste of.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the descriptions.', items: [
            { q: 'El pulpo a la gallega ___ con aceite y pimentón. (servir)', a: ['se sirve'], why: '*el pulpo* is one thing: *se sirve*.' },
            { q: 'Los tacos ___ con las manos. (comer)', a: ['se comen'], why: '*los tacos* is plural: *se comen*.' },
            { q: 'La fabada ___ judías blancas y chorizo. (llevar)', a: ['lleva'], why: '*llevar*: what is in the dish. *la fabada* is singular.' },
            { q: 'El pescado del ceviche no ___. Se prepara con zumo de lima. (cocinar)', a: ['se cocina'], why: 'One thing, *el pescado*: *se cocina*.' },
            { q: 'Este postre sabe ___ canela.', a: ['a'], why: '*saber a*: to taste of.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the word that fits.', items: [
            { q: 'Los limones son muy ___.', o: ['ácidos', 'dulces', 'contundentes'], why: 'Lemons are sour: *ácidos*.' },
            { q: 'El pan está recién hecho y muy ___.', o: ['crujiente', 'amargo', 'picante'], why: 'Fresh bread has a crispy crust: *crujiente*.' },
            { q: 'La sopa tiene demasiada sal. Está muy ___.', o: ['salada', 'dulce', 'ácida'], why: 'Too much salt: *salada*.' },
            { q: 'Cuidado, la salsa lleva mucho chile. Es muy ___.', o: ['picante', 'jugosa', 'crujiente'], why: 'Chilli makes food *picante*.' },
            { q: 'Un plato de judías con chorizo y carne es muy ___.', o: ['contundente', 'dulce', 'ácido'], why: 'Hearty, filling food is *contundente*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the dish and the description.', pairs: [
            ['la paella', 'arroz con pollo, conejo y verduras'],
            ['el gazpacho', 'una sopa fría de tomate'],
            ['el ceviche', 'pescado crudo con zumo de lima'],
            ['las arepas', 'panes redondos de harina de maíz'],
            ['el mole', 'una salsa espesa de chiles y especias'],
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword.', words: [
            { a: 'dulce', clue: 'Así es el azúcar.' },
            { a: 'salado', clue: 'Así está la comida con mucha sal.' },
            { a: 'picante', clue: 'Así es un plato con mucho chile.' },
            { a: 'amargo', clue: 'Así es el café solo, sin azúcar.' },
            { a: 'crujiente', clue: 'Así es el pan recién hecho por fuera.' },
            { a: 'jugoso', clue: 'Así es una naranja con mucho zumo.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Customs at the table',
      about: 'Know the customs for ordering, sharing, paying and tipping.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'In Spain, people often eat lunch between two and four, and dinner after nine. In many bars you can order *tapas* (small plates) or *raciones* (bigger plates) to share. Everyone eats from the plates in the middle of the table.\n\nWater from the tap is not always served automatically. If you want it, ask for *agua del grifo*. In some places the bread is not free, so check the bill.' },
          { t: 'tip', art: 'owl', md: 'Before eating, people say *¡Que aproveche!* or *¡Buen provecho!* When friends say *¡Te invito!*, they want to pay for you. Next time, it is your turn. To split the bill, you can say *Pagamos a medias* or *Pagamos cada uno lo suyo*.' },
        ],
        [
          { t: 'dialogue', title: 'Paying in a tapas bar', lines: [
            { who: 'Sofia', s: 'Perdona, ¿nos cobras cuando puedas?' },
            { who: 'Camarero', s: 'Claro. ¿Todo junto o por separado?' },
            { who: 'Sofia', s: 'Por separado, por favor. Yo he tomado las croquetas y una caña.' },
            { who: 'Camarero', s: 'Son siete con cincuenta.' },
            { who: 'Sofia', s: 'Aquí tienes ocho. Quédate con el cambio.' },
            { who: 'Camarero', s: 'Gracias. ¿Y tú?' },
            { who: 'Kenji', s: 'Yo, la ración de pulpo y un agua. ¿Puedo pagar con tarjeta?' },
            { who: 'Camarero', s: 'Sí, sin problema. Son catorce euros.' },
            { who: 'Kenji', s: 'Muy bien. Oye, el pulpo estaba buenísimo.' },
            { who: 'Camarero', s: '¡Me alegro! Es la especialidad de la casa.' },
          ] },
          { t: 'text', md: 'In Spain a tip is not expected. Many people leave a few coins or round up the bill when the service was good: *Quédate con el cambio*. In Mexico and many other Latin American countries, a tip of about ten to fifteen percent is usual, and sometimes it is already on the bill (*servicio incluido*). A waiter is *el camarero* in Spain, *el mesero* in Mexico and much of Latin America, and *el mozo* in Argentina.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Sofia y Kenji pagan todo junto.', a: 'f', why: 'Sofia says *Por separado, por favor*: they pay separately.' },
            { q: 'Sofia deja cincuenta céntimos de propina.', a: 't', why: 'The bill is 7,50 € and she gives 8 € and keeps no change.' },
            { q: 'En el bar no se puede pagar con tarjeta.', a: 'f', why: 'The waiter says *Sí, sin problema.*' },
            { q: 'A Kenji le ha gustado el pulpo.', a: 't', why: '*El pulpo estaba buenísimo.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: '¿Todo junto o por ___?', a: ['separado'], why: 'The waiter asks if you pay together or separately.' },
            { q: 'Un vaso de agua del ___, por favor. (tap)', a: ['grifo'], why: '*el agua del grifo*: water from the tap.' },
            { q: 'Aquí tienes diez euros. Quédate con el ___. (change)', a: ['cambio'], why: '*Quédate con el cambio*: keep the change.' },
            { q: 'En México se suele dejar un diez o quince por ciento de ___. (tip)', a: ['propina'], why: '*la propina*: money for the service.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'Quiere pagar: ___', o: ['¿Nos cobras, por favor?', '¿Nos pones otra caña?', 'Ya estamos llenos.'], why: '*cobrar*: to take the money. *¿Nos pones…?* is for ordering.' },
            { q: 'Quiere pagar la cena de su amigo: ___', o: ['¡Te invito!', '¡Pagamos a medias!', '¡Que aproveche!'], why: '*Te invito*: I am paying for you.' },
            { q: 'Antes de comer, a las personas de la mesa: ___', o: ['¡Que aproveche!', '¡Que te mejores!', '¡Feliz cumpleaños!'], why: '*¡Que te mejores!* is for someone who is ill; *¡Feliz cumpleaños!* is for a birthday.' },
            { q: 'Quiere un plato grande para compartir: ___', o: ['Una ración de calamares, por favor.', 'Un poco calamar, por favor.', 'Unos calamar, por favor.'], why: 'A big plate to share is *una ración*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Where do you usually hear these words?', explain: ['groups'], groups: ['In Spain', 'In much of Latin America'], items: [
            { s: 'el camarero', g: 0, why: 'In Spain a waiter is *el camarero*.' },
            { s: 'el mesero', g: 1, why: '*el mesero* is common in Mexico and much of Latin America.' },
            { s: 'el zumo', g: 0, why: 'Juice is *el zumo* in Spain.' },
            { s: 'el jugo', g: 1, why: 'Juice is *el jugo* in Latin America.' },
            { s: 'el melocotón', g: 0, why: 'A peach is *el melocotón* in Spain.' },
            { s: 'el durazno', g: 1, why: 'A peach is *el durazno* in much of Latin America.' },
            { s: 'la patata', g: 0, why: 'In most of Spain a potato is *la patata*. In the Canary Islands people also say *papa*.' },
            { s: 'la papa', g: 1, why: 'In Latin America a potato is *la papa*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a morning at the market',
      about: 'Read an article about a food market.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Un sábado en el mercado', md: 'Todos los sábados, el viejo mercado del barrio se llena de vida. A las siete y media los vendedores ya están preparando sus puestos, y a las ocho llegan los primeros clientes. Muchos vienen cada semana, algunos desde hace cuarenta años.\n\nEn el puesto de Rosa se venden frutas y verduras de la zona. «En invierno vendo naranjas, coles y alcachofas; en verano, tomates, melocotones y sandías», nos cuenta. «Lo que no es de temporada, no lo tengo.» Sus clientes lo agradecen: el producto es fresco y saben de dónde viene.\n\nAl lado, Andrés vende quesos de su granja en Asturias. Le gusta dar a probar. «Quien prueba, casi siempre compra», dice, y se ríe.\n\nPero el mercado no es solo un lugar para comprar. En el bar del fondo se desayuna café con tostadas, los vecinos charlan y los turistas hacen fotos. Mucha gente se queda más tiempo del que había pensado.\n\nUn consejo para los visitantes: traiga su propia bolsa y algo de dinero en efectivo, porque no en todos los puestos se puede pagar con tarjeta. Y venga pronto: a mediodía muchos productos ya se han agotado. A las dos se cierra el mercado.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the article. True, false or not given?', items: [
            { q: 'Los clientes llegan a las siete y media.', a: 'f', why: 'At half past seven the sellers prepare; the customers come at eight.' },
            { q: 'Rosa vende tomates en invierno.', a: 'f', why: 'Tomatoes are in summer. In winter she sells oranges, cabbages and artichokes.' },
            { q: 'En el puesto de Andrés se puede probar el queso.', a: 't', why: '*Le gusta dar a probar.*' },
            { q: 'En el mercado también se puede desayunar.', a: 't', why: 'There is a bar: *se desayuna café con tostadas*.' },
            { q: 'En todos los puestos se puede pagar con tarjeta.', a: 'f', why: '*no en todos los puestos se puede pagar con tarjeta*.' },
            { q: 'El mercado también abre los domingos.', a: 'ng', why: 'The article only talks about Saturdays.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do these words from the article mean?', items: [
            { q: 'Los tomates son **de temporada** en verano. Quiere decir: ___', o: ['En verano hay muchos tomates frescos.', 'En verano no hay tomates.', 'En verano los tomates son muy caros.'], why: '*de temporada*: it is the right time of year for it.' },
            { q: 'Los quesos **se han agotado**. Quiere decir: ___', o: ['Ya no queda queso.', 'El queso es muy barato.', 'El queso está muy fresco.'], why: '*agotarse*: everything has been sold.' },
            { q: 'Andrés da a **probar** su queso. Quiere decir: ___', o: ['Los clientes pueden comer un poco antes de comprar.', 'Los clientes tienen que pagar antes.', 'Andrés no vende queso.'], why: '*probar*: to try a little to know how it tastes.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs with passive se.', items: [
            { s: 'En el puesto de Rosa [se venden] frutas y verduras de la zona.', why: '*se venden*: plural, because *frutas y verduras* are more than one.' },
            { s: 'A las dos [se cierra] el mercado.', why: '*se cierra*: singular, because *el mercado* is one thing.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'El gazpacho es un plato típico de ___.', o: ['Andalucía', 'Asturias', 'Galicia'], why: '*el gazpacho* comes from Andalucía.' },
      { q: 'La cuenta es de 9,40 €. Usted da diez euros y dice: ___', o: ['Quédese con el cambio.', 'Pagamos a medias.', '¿Nos cobra?'], why: '*Quédese con el cambio*: keep the change.' },
      { q: 'Mucho chile hace la comida ___.', o: ['picante', 'dulce', 'crujiente'], why: 'Chilli: *picante*.' },
      { q: '¿Pagáis todo junto o por ___?', o: ['separado', 'solo', 'mitad'], why: '*¿Todo junto o por separado?* is the usual question.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Las arepas ___ de queso o de carne. (rellenar)', a: ['se rellenan'], why: 'Passive *se*, plural: *se rellenan*.' },
      { q: 'Este postre sabe ___ limón.', a: ['a'], why: '*saber a*: to taste of.' },
      { q: 'En España, la cena suele ser después de las ___. (9)', a: ['nueve', '9'], why: 'Dinner in Spain is often after nine.' },
      { q: 'A las dos ___ el mercado. (cerrar)', a: ['se cierra'], why: '*el mercado* is singular: *se cierra*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the taste and the example.', pairs: [
      ['dulce', 'como el azúcar'],
      ['ácido', 'como un limón'],
      ['amargo', 'como el café solo sin azúcar'],
      ['crujiente', 'como el pan recién hecho'],
    ] },
  ],
};
