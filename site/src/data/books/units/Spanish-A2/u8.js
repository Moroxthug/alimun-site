// Spanish A2, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Celebrations and the future',
  goal: 'Talk about celebrations, give presents and make predictions.',
  art: 'churro',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['indirect-object-pronouns', 'gustar', 'future', 'conditional-si', 'invitations'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Le regalo un libro',
      about: 'Say who you give things to with le and les, and use gustar with a mí, a ti.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'The **indirect object** is the person who receives something: *I give **her** a book*. In Spanish, use **le** for one person (*él, ella, usted*) and **les** for more than one (*ellos, ellas, ustedes*). For the other people, use *me, te, nos* and *os*.\n\nThe pronoun goes **before** the conjugated verb: *Le regalo un libro.*' },
          { t: 'table', caption: 'Indirect object pronouns', quiz: true, head: ['Person', 'Pronoun', 'Example'], rows: [
            ['yo', 'me', '**Me** dan un regalo.'],
            ['tú', 'te', '¿Qué **te** regalan?'],
            ['él / ella / usted', 'le', '**Le** compro flores.'],
            ['nosotros', 'nos', '**Nos** envían una invitación.'],
            ['vosotros', 'os', '**Os** traigo un pastel.'],
            ['ellos / ellas / ustedes', 'les', '**Les** escribo una tarjeta.'],
          ] },
        ],
        [
          { t: 'text', md: 'Very often Spanish says the person **twice**: the pronoun and *a* + the person. *Le regalo un libro a mi padre.* This is normal and correct, and it makes clear who *le* is.\n\nThe verb **gustar** works in the same way. To make it clear or to give emphasis, add *a mí, a ti, a él, a ella, a usted, a nosotros, a vosotros, a ellos*. Note: *a mí* has an accent, *a ti* does not.' },
          { t: 'examples', items: [
            { s: '**Le** voy a regalar una bufanda **a mi madre**.', n: 'Pronoun and *a* + person together.' },
            { s: '**Les** escribimos una tarjeta **a los novios**.', n: 'More than one person: *les*.' },
            { s: '**A mí** me gustan mucho las fiestas, pero **a mi hermano** no **le** gustan.', n: '*a mí … me*, *a mi hermano … le*.' },
            { s: '¿**A ti** te gusta bailar? **A mí** también.', n: '*A mí también*: me too, after a positive sentence.' },
            { s: 'No me gusta el ruido. **A mí** tampoco.', n: '*A mí tampoco*: me neither, after a negative sentence.' },
          ] },
          { t: 'tip', art: 'owl', md: 'With *le* and *les*, you can also put the pronoun at the end of an infinitive: *Voy a regalarle una bufanda.* This is the same rule as for *lo* and *la* in unit 5.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right pronoun.', items: [
            { q: 'Es el cumpleaños de mi abuela. ___ compro unas flores.', o: ['Le', 'Les', 'La'], why: 'One person receives the flowers: *le*.' },
            { q: 'Mis amigos se casan. ___ voy a regalar una cafetera.', o: ['Les', 'Le', 'Los'], why: 'More than one person: *les*.' },
            { q: 'Mamá, ¿___ das un poco de tarta, por favor?', o: ['me', 'mi', 'le'], why: 'I want to receive it: *me*.' },
            { q: 'Chicos, ___ traigo una sorpresa.', o: ['os', 'les', 'nos'], why: 'To *vosotros*: *os*.' },
            { q: 'A ___ me encantan los cumpleaños.', o: ['mí', 'mi', 'yo'], why: '*a mí*, with an accent.' },
            { q: 'A mis padres no ___ gusta la música alta.', o: ['les', 'le', 'los'], why: '*a mis padres* is plural: *les*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing pronoun.', items: [
            { q: '___ regalo un libro a mi hermano.', a: ['Le'], why: '*a mi hermano*: one person, *le*.' },
            { q: 'A nosotros ___ gusta mucho la Navidad.', a: ['nos'], why: '*a nosotros … nos*.' },
            { q: '¿Qué ___ vas a regalar a tus primos?', a: ['les'], why: '*a tus primos*: more than one, *les*.' },
            { q: 'A ti ___ gustan las sorpresas, ¿verdad?', a: ['te'], why: '*a ti … te*.' },
            { q: 'A Carla no ___ gustan las fiestas grandes.', a: ['le'], why: '*a Carla … le*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'También or tampoco?', items: [
            { q: 'Me gusta el chocolate. A mí ___.', o: ['también', 'tampoco', 'sí'], why: 'After a positive sentence: *también*.' },
            { q: 'No me gustan las fiestas de disfraces. A mí ___.', o: ['tampoco', 'también', 'no'], why: 'After a negative sentence: *tampoco*.' },
            { q: 'A Lucas le encanta bailar. A mí ___.', o: ['también', 'tampoco', 'nunca'], why: 'Agreeing with a positive sentence: *también*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'El año que viene viajaré',
      about: 'Make predictions and talk about the future with the futuro simple.',
      art: 'alien',
      spreads: [
        [
          { t: 'text', md: 'The **futuro simple** is used for predictions and for the future in general: *Mañana lloverá. Algún día viviré en el campo.*\n\nIt is easy to form: take the **whole infinitive** and add the endings. The endings are the same for *-ar*, *-er* and *-ir* verbs. All of them have an accent, except the *nosotros* form.' },
          { t: 'table', caption: 'The futuro simple', quiz: true, head: ['', 'viajar', 'comer', 'vivir'], rows: [
            ['yo', 'viajaré', 'comeré', 'viviré'],
            ['tú', 'viajarás', 'comerás', 'vivirás'],
            ['él / ella / usted', 'viajará', 'comerá', 'vivirá'],
            ['nosotros', 'viajaremos', 'comeremos', 'viviremos'],
            ['vosotros', 'viajaréis', 'comeréis', 'viviréis'],
            ['ellos / ustedes', 'viajarán', 'comerán', 'vivirán'],
          ] },
        ],
        [
          { t: 'text', md: 'Some common verbs have an irregular stem, but the endings are the same: *tener → tendr-é*, *hacer → har-é*.' },
          { t: 'table', caption: 'Irregular stems', quiz: true, head: ['', 'stem', 'yo'], rows: [
            ['tener', 'tendr-', 'tendré'],
            ['poner', 'pondr-', 'pondré'],
            ['salir', 'saldr-', 'saldré'],
            ['venir', 'vendr-', 'vendré'],
            ['poder', 'podr-', 'podré'],
            ['saber', 'sabr-', 'sabré'],
            ['querer', 'querr-', 'querré'],
            ['hacer', 'har-', 'haré'],
            ['decir', 'dir-', 'diré'],
            ['haber (hay)', 'habr-', 'habrá'],
          ] },
          { t: 'tip', art: 'owl', md: 'For plans you have already made, Spanish often uses *ir a* + infinitive: *Este sábado voy a celebrar mi cumpleaños.* The futuro simple is more for predictions and things that are less sure: *Creo que vendrá mucha gente.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Mañana **hará** sol y **habrá** mucha gente en la playa.', n: '*hacer → hará*, *hay → habrá*.' },
            { s: 'Creo que mis primos **vendrán** a la fiesta.', n: '*venir → vendrán*' },
            { s: 'Dentro de diez años **tendré** una casa en el campo.', n: '*Dentro de diez años*: in ten years’ time.' },
            { s: '¿Qué **haréis** en Nochevieja?', n: '*hacer → haréis*. *Nochevieja* is the night of 31 December.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the futuro simple of tener.', verb: 'tener', tense: 'futuro simple', rows: [
            ['yo', 'tendré'],
            ['tú', 'tendrás'],
            ['él / ella', 'tendrá'],
            ['nosotros', 'tendremos'],
            ['vosotros', 'tendréis'],
            ['ellos', 'tendrán'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the futuro simple.', items: [
            { q: 'El próximo verano ___ a México. (viajar, nosotros)', a: ['viajaremos'], why: '*viajar + emos*. No accent in the *nosotros* form.' },
            { q: 'Creo que mañana ___. (llover)', a: ['lloverá'], why: '*llover + á*' },
            { q: 'Mi hermana ___ treinta años en mayo. (cumplir)', a: ['cumplirá'], why: '*cumplir + á*' },
            { q: 'En la fiesta ___ música en directo. (haber)', a: ['habrá'], why: '*hay* in the future: *habrá*.' },
            { q: '¿___ venir a la boda? (poder, tú)', a: ['Podrás'], why: 'Irregular stem: *podr- + ás*.' },
            { q: 'Os ___ la verdad mañana. (decir, yo)', a: ['diré'], why: 'Irregular stem: *dir- + é*.' },
            { q: 'Este año ___ una tarta de chocolate. (hacer, yo)', a: ['haré'], why: 'Irregular stem: *har- + é*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
            { s: 'El año que viene [teneré] más tiempo.', a: ['tendré'], why: '*tener* has an irregular stem: *tendré*.' },
            { s: 'Mañana nosotros [comeremós] con mis abuelos.', a: ['comeremos'], why: 'The *nosotros* form has no accent.' },
            { s: 'Creo que mis amigos [venirán] a cenar.', a: ['vendrán'], why: '*venir → vendr-*: *vendrán*.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: infinitive and futuro simple for yo.', pairs: [
            ['hacer', 'haré'],
            ['salir', 'saldré'],
            ['poner', 'pondré'],
            ['saber', 'sabré'],
            ['querer', 'querré'],
            ['decir', 'diré'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Si llueve, nos quedaremos en casa',
      about: 'Talk about possible situations, invite people and congratulate them.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To talk about a possible situation and its result, use **si** + present, then the **futuro**: *Si llueve, nos quedaremos en casa.* Never put the future after *si*.\n\nThe two parts can change places. When *si* comes first, write a comma: *Si tengo tiempo, te llamaré.* / *Te llamaré si tengo tiempo.*' },
          { t: 'examples', items: [
            { s: '**Si** hace buen tiempo, **comeremos** en el jardín.', n: '*si* + present, future.' },
            { s: '**Si** no **encuentras** el restaurante, **llámame**.', n: 'The second part can also be an imperative.' },
            { s: '**Llegaremos** tarde **si** no **salimos** ya.', n: 'The two parts change places. No comma.' },
            { s: '**Si** **viene** Marta, **traerá** su guitarra.', n: '*si* + present: *viene*, not *vendrá*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the two parts.', pairs: [
            ['Si llueve el sábado,', 'haremos la fiesta dentro de casa.'],
            ['Si tengo tiempo,', 'te ayudaré a preparar la cena.'],
            ['Si no estudias,', 'no aprobarás el examen.'],
            ['Si vais a Valencia en marzo,', 'veréis las Fallas.'],
            ['Si me invitan a la boda,', 'tendré que comprar un traje.'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Si ___ dinero, te compraré un regalo bonito.', o: ['tengo', 'tendré', 'tener'], why: 'After *si*, use the present: *tengo*.' },
            { q: 'Si llegas pronto, ___ juntos.', o: ['cenaremos', 'cenar', 'cenando'], why: 'The result: the future, *cenaremos*.' },
            { q: 'Si ___ frío, nos quedaremos en casa.', o: ['hace', 'hará', 'hacer'], why: 'After *si*, the present: *hace*.' },
            { q: 'Te llamaré si ___ algún problema.', o: ['hay', 'habrá', 'haber'], why: 'The *si* part uses the present even when it comes second: *hay*.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'An invitation', lines: [
            { who: 'Marta', s: 'Hola, Andrés. El sábado celebro mi cumpleaños en casa. ¿Te apetece venir?' },
            { who: 'Andrés', s: '¡Claro que sí! Me encantaría. ¿A qué hora?' },
            { who: 'Marta', s: 'A partir de las nueve. Si hace buen tiempo, cenaremos en la terraza.' },
            { who: 'Andrés', s: 'Genial. ¿Llevo algo?' },
            { who: 'Marta', s: 'Si quieres, trae algo de beber. ¿Vendrá también tu hermana?' },
            { who: 'Andrés', s: 'Lo siento, ella no puede: tiene que trabajar. Pero te manda muchos besos.' },
            { who: 'Marta', s: '¡Qué pena! Bueno, nos vemos el sábado.' },
          ] },
          { t: 'tip', art: 'owl', md: 'To invite: *¿Quieres venir…?* or *¿Te apetece…?* To say yes: *¡Me encantaría!* To say no politely: *Lo siento, no puedo*, and give a reason. In Latin America, people say *¿Te gustaría…?* or *¿Se te antoja…?* (Mexico) more than *¿Te apetece…?*' },
        ],
        [
          { t: 'text', md: 'Each celebration has its own words. *¡Felicidades!* works for almost everything: a birthday, a saint’s day, a wedding. *¡Enhorabuena!* is for a success: a new job, an exam or a baby. On a birthday, people sing and say *¡Feliz cumpleaños!*' },
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'Tu amigo cumple 30 años.', o: ['¡Feliz cumpleaños!', '¡Buen viaje!', '¡Que te mejores!'], why: 'For a birthday: *¡Feliz cumpleaños!*' },
            { q: 'Tu compañera ha aprobado el examen de conducir.', o: ['¡Enhorabuena!', '¡Feliz Navidad!', '¡Lo siento!'], why: 'For a success: *¡Enhorabuena!*' },
            { q: 'Es el 31 de diciembre a las doce de la noche.', o: ['¡Feliz Año Nuevo!', '¡Feliz cumpleaños!', '¡Buen provecho!'], why: 'At midnight on 31 December: *¡Feliz Año Nuevo!*' },
            { q: 'Un amigo te invita a su fiesta, pero no puedes ir.', o: ['Lo siento, no puedo. Tengo que trabajar.', '¡Me encantaría! ¿A qué hora?', '¡Enhorabuena!'], why: 'Say no politely and give a reason.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: '¿Te apetece venir a mi fiesta?', why: '*¿Te apetece* + infinitive?' },
            { a: 'Si hace sol, iremos a la playa.', why: '*Si* + present, comma, future.' },
            { a: 'Me encantaría, pero no puedo.', why: 'Say yes in principle, then explain: *pero no puedo*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Reading: a wedding invitation and festivals',
      about: 'Read an invitation and a magazine text about Spanish festivals.',
      art: 'ghost',
      spreads: [
        [
          { t: 'reading', title: 'Una invitación de boda', md: 'Querida Ana:\n\n¡Por fin nos casamos! Clara y yo te invitamos a nuestra boda el sábado 14 de junio. La ceremonia será a las doce en el ayuntamiento del pueblo de Clara, y después habrá una comida en una finca a diez minutos del pueblo.\n\nSi vienes en tren, es muy fácil: habrá un autobús desde la estación a las once. La fiesta terminará tarde, así que en el pueblo hay un hotel pequeño con habitaciones para los invitados. Si quieres una, escríbenos antes del 1 de mayo.\n\nNo queremos regalos. Si quieres hacernos un regalo, nos ayudarás mucho con nuestro viaje de novios: vamos a ir a Perú.\n\nContéstanos antes del 15 de abril, por favor. ¡Esperamos verte allí!\n\nUn abrazo muy fuerte,\nDaniel y Clara' },
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La boda será un sábado.', a: 't', why: '*el sábado 14 de junio*.' },
            { q: 'La ceremonia será en una iglesia.', a: 'f', why: 'It will be *en el ayuntamiento*, the town hall.' },
            { q: 'Habrá un autobús desde la estación.', a: 't', why: '*Habrá un autobús desde la estación a las once.*' },
            { q: 'Ana tiene que contestar antes del 1 de mayo.', a: 'f', why: 'She has to answer before 15 April. The 1 May date is for the hotel.' },
            { q: 'En la comida habrá música en directo.', a: 'ng', why: 'The invitation does not say this.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Fiestas para todo el año', md: 'En España hay fiestas durante todo el año, y cada pueblo tiene la suya. Muchas personas viajan para conocerlas.\n\nEn marzo, en Valencia, se celebran las Fallas. Durante varios días, la ciudad se llena de grandes figuras de madera y cartón. La última noche las queman en la calle. Si vas a las Fallas, verás fuego, música y mucha gente, y oirás petardos a todas horas.\n\nEn verano, casi todos los pueblos celebran sus fiestas. Hay conciertos, comida en la calle y baile en la plaza hasta muy tarde. Para la gente que vive en la ciudad, es el momento de volver al pueblo de sus abuelos y ver a la familia.\n\nY el 31 de diciembre, a las doce de la noche, muchas familias comen doce uvas, una con cada campanada del reloj. Se dice que si comes las doce a tiempo, tendrás suerte el año que viene. No es fácil: ¡las campanadas son muy rápidas!' },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Qué pasa la última noche de las Fallas?', o: ['Queman las figuras en la calle.', 'Comen doce uvas.', 'Vuelven al pueblo.'], why: '*La última noche las queman en la calle.*' },
            { q: '¿Por qué vuelve mucha gente al pueblo en verano?', o: ['Para ver a la familia en las fiestas.', 'Porque en la ciudad hace frío.', 'Para quemar figuras.'], why: '*… volver al pueblo de sus abuelos y ver a la familia.*' },
            { q: '¿Qué pasará si comes las doce uvas a tiempo?', o: ['Tendrás suerte el año que viene.', 'Te casarás pronto.', 'Viajarás mucho.'], why: '*Si comes las doce a tiempo, tendrás suerte.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the futuro simple.', items: [
            { s: 'La ceremonia [será] a las doce y después [habrá] una comida.', why: '*ser → será*, *haber → habrá*.' },
            { s: 'Si vas a las Fallas, [verás] fuego y [oirás] petardos.', why: '*ver → verás*, *oír → oirás*. *Vas* is the present after *si*.' },
            { s: 'Si comes las doce a tiempo, [tendrás] suerte.', why: '*tener → tendrás*. *Comes* is the present after *si*.' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Complete the sentences with words from the box.', extra: ['cumpleaños', 'iglesia'], items: [
            { q: 'Daniel y Clara se casan. Van a celebrar su ___ en junio.', a: 'boda', why: 'A wedding: *la boda*.' },
            { q: 'Después de la boda harán un viaje de ___ a Perú.', a: 'novios', why: 'A honeymoon: *el viaje de novios*.' },
            { q: 'En Nochevieja muchas personas comen doce ___.', a: 'uvas', why: 'The tradition of the twelve grapes.' },
            { q: 'En las fiestas de verano hay baile en la ___.', a: 'plaza', why: '*baile en la plaza*, the main square of the village.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'A mi madre ___ voy a regalar un perfume.', o: ['le', 'la', 'les'], why: 'One person receives the present: *le*.' },
      { q: 'A mis amigos ___ encanta bailar.', o: ['les', 'le', 'los'], why: '*a mis amigos* is plural: *les*.' },
      { q: 'No me gusta el frío. A mí ___.', o: ['tampoco', 'también', 'sí'], why: 'After a negative sentence: *tampoco*.' },
      { q: 'El año que viene ___ más tiempo libre.', o: ['tendré', 'teneré', 'tenderé'], why: '*tener → tendré*' },
      { q: 'Si ___ buen tiempo, iremos a la playa.', o: ['hace', 'hará', 'hacer'], why: 'After *si*, the present: *hace*.' },
      { q: 'Tu hermano tiene un trabajo nuevo. Le dices: ___', o: ['¡Enhorabuena!', '¡Feliz cumpleaños!', '¡Que te mejores!'], why: 'For a success: *¡Enhorabuena!*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Mañana ___ mucha gente en la fiesta. (haber)', a: ['habrá'], why: '*hay → habrá*' },
      { q: 'Si llueve, nosotros ___ en casa. (quedarse)', a: ['nos quedaremos'], why: '*si* + present, then the future: *nos quedaremos*.' },
      { q: '¿Qué ___ vas a regalar a tus padres?', a: ['les'], why: '*a tus padres*: *les*.' },
      { q: 'A ___ me gustan mucho las bodas. (yo)', a: ['mí'], why: '*a mí*, with an accent.' },
      { q: 'Creo que Pedro ___ tarde a la cena. (venir)', a: ['vendrá'], why: '*venir → vendr-*: *vendrá*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
      { s: 'Si [tendré] tiempo, te llamaré.', a: ['tengo'], why: 'After *si*, use the present: *tengo*.' },
      { s: 'A los niños [le] gustan los regalos.', a: ['les'], why: '*a los niños* is plural: *les*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: '¿Te apetece venir a cenar el sábado?', why: '*¿Te apetece* + infinitive + the rest?' },
      { a: 'Le regalaré un libro a mi hermano.', why: 'The pronoun before the verb, *a mi hermano* at the end.' },
    ] },
  ],
};
