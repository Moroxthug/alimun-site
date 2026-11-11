// Spanish B1 for travel, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Culture and events',
  goal: 'Find out about museums, concerts and festivals and give your opinion.',
  art: 'dragon',
  tags: { skills: ['vocabulary', 'speaking', 'reading', 'grammar'], topics: ['events', 'tickets', 'opinions', 'gustar-parecer', 'aunque'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Events and tickets',
      about: 'Understand event information and buy tickets.',
      art: 'parrot',
      spreads: [
        [
          { t: 'table', caption: 'Words for events', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['la entrada', 'a ticket for a museum, a concert or a show'],
            ['la taquilla', 'the place where you buy tickets'],
            ['agotado', 'sold out, there are no tickets left'],
            ['la entrada reducida', 'a cheaper ticket, for example for students'],
            ['la función / la sesión', 'one performance of a show or a film'],
            ['la exposición', 'an exhibition'],
            ['la visita guiada', 'a tour with a guide'],
            ['la entrada libre', 'free entry, you do not pay'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain, many museums are closed on Mondays, and some are free at certain times of the week. Students, children and older people often pay less. Ask *¿Hay descuento para estudiantes?* In parts of Latin America, a ticket is often *el boleto*, and the ticket office is *la boletería*.' },
        ],
        [
          { t: 'text', md: 'Event times are often written with the 24-hour clock: *20:30 h*. People usually say *a las ocho y media de la tarde*. *de la tarde* is used until about nine; later it is *de la noche*.' },
          { t: 'examples', items: [
            { s: 'El concierto **empieza a las** nueve **y termina sobre** las once.', n: '*sobre las once*: at about eleven.' },
            { s: '¿**Quedan** entradas para esta noche?', n: '*quedar*: to be left.' },
            { s: 'La función de las ocho **está agotada**.', n: '*agotada*: there are no tickets left.' },
            { s: 'Las puertas **se abren** media hora antes.', n: 'Passive *se*: the doors open.' },
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the verb?', items: [
            { key: 'sacar', o: ['entradas', 'fotos', 'dinero', 'una cola'], a: [0, 1, 2], why: '*sacar entradas*, *sacar fotos*, *sacar dinero*. With a queue, you say *hacer cola*.' },
            { key: 'hacer', o: ['cola', 'una reserva', 'una visita guiada', 'una butaca'], a: [0, 1, 2], why: '*hacer cola*, *hacer una reserva*, *hacer una visita guiada*. A seat is something you choose or book.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'At the ticket office', lines: [
            { who: 'Amara', s: 'Buenas tardes. ¿Quedan entradas para el espectáculo de flamenco de esta noche?' },
            { who: 'Taquillera', s: 'Para la función de las ocho, no, lo siento. Está agotada. Pero quedan algunas para la de las diez y media.' },
            { who: 'Amara', s: '¿Y a qué hora termina, más o menos?' },
            { who: 'Taquillera', s: 'Dura una hora y media, así que sobre las doce.' },
            { who: 'Amara', s: 'Vale. ¿Cuánto cuestan?' },
            { who: 'Taquillera', s: 'Treinta euros en las primeras filas y veintidós más atrás. Con el carné de estudiante hay un descuento del veinte por ciento.' },
            { who: 'Amara', s: 'Aquí tiene mi carné. Dos de veintidós, por favor. Una es para mi amiga, que no es estudiante.' },
            { who: 'Taquillera', s: 'Muy bien, son treinta y nueve con sesenta. Las puertas se abren media hora antes.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Amara va a la función de las ocho.', a: 'f', why: 'The eight o’clock show is sold out. She buys tickets for half past ten.' },
            { q: 'El espectáculo termina sobre medianoche.', a: 't', why: 'It lasts an hour and a half, so it ends at about twelve.' },
            { q: 'Las entradas de atrás son más baratas.', a: 't', why: 'Thirty euros at the front and twenty-two further back.' },
            { q: 'Las dos entradas tienen descuento.', a: 'f', why: 'Only Amara is a student. Her friend pays the full price.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Lo siento, no quedan entradas. El concierto está ___.', o: ['agotado', 'libre', 'reducido'], why: '*agotado*: sold out.' },
            { q: 'Las entradas se compran en la ___, al lado de la puerta.', o: ['taquilla', 'función', 'fila'], why: '*la taquilla*: where you buy tickets.' },
            { q: 'La exposición es gratis. La entrada es ___.', o: ['libre', 'agotada', 'reducida'], why: '*entrada libre*: you do not pay.' },
            { q: 'Quiero conocer la historia del edificio. Voy a hacer una ___.', o: ['visita guiada', 'entrada reducida', 'sesión de noche'], why: 'A guide explains things on *una visita guiada*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: '¿___ entradas para la sesión de las diez? (are there any left)', a: ['Quedan', 'Hay'], why: '*¿Quedan entradas?*: are there tickets left?' },
            { q: '¿Hay ___ para estudiantes? (discount)', a: ['descuento'], why: '*el descuento*: a lower price.' },
            { q: 'El concierto empieza a las nueve y termina ___ las once. (at about)', a: ['sobre', 'hacia', 'a eso de'], why: '*sobre las once*: at about eleven.' },
            { q: 'Los lunes el museo está ___. (closed)', a: ['cerrado'], why: '*estar cerrado*: not open.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Giving your opinion',
      about: 'Say what you liked and did not like about art, music and films.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To talk about a show you saw, use *me gustó* or *me encantó*, and *me pareció* + adjective. Like *gustar*, the verb agrees with the thing: *me gustó la película*, *me gustaron las canciones*.\n\nTo say what was best, use *Lo que más me gustó fue…*. With *aunque* (although) you can add a different idea.' },
          { t: 'examples', items: [
            { s: 'La obra **me pareció** muy original.', n: '*parecer* works like *gustar*: *me pareció*.' },
            { s: '**Me encantaron** los bailarines.', n: 'Plural thing, plural verb: *encantaron*.' },
            { s: '**Lo que más me gustó fue** la música.', n: 'To say what was the best part.' },
            { s: '**Aunque** era un poco larga, la película me gustó mucho.', n: '*aunque* + indicative for a fact: *era*.' },
            { s: '**No creo que** sea la mejor exposición del año.', n: '*no creo que* + subjunctive: *sea*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Words for opinions', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['impresionante', 'very impressive'],
            ['emocionante', 'exciting'],
            ['conmovedor', 'it touches your feelings'],
            ['entretenido', 'fun to watch, not boring'],
            ['original', 'new and different'],
            ['aburrido', 'boring'],
            ['decepcionante', 'not as good as you hoped'],
            ['raro', 'strange'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain, for something you saw today, people often say *me ha gustado*; in Latin America they usually say *me gustó*. To agree, say *Tienes razón* or *Estoy de acuerdo*. To disagree politely, say *¿Tú crees? A mí me pareció…* or *Pues yo no lo veo así*.' },
        ],
        [
          { t: 'dialogue', title: 'After the film', lines: [
            { who: 'Elena', s: '¿Qué te ha parecido? A mí me ha encantado.' },
            { who: 'David', s: 'Pues a mí me ha parecido un poco lenta, la verdad. La primera hora fue bastante aburrida.' },
            { who: 'Elena', s: '¿Tú crees? Para mí fue muy conmovedora. Y la actriz principal estuvo impresionante.' },
            { who: 'David', s: 'En eso tienes razón. Lo que más me gustó fue la música.' },
            { who: 'Elena', s: 'Y el final, ¿qué? No me lo esperaba.' },
            { who: 'David', s: 'Sí, el final estuvo genial. Aunque no me gustó todo, me alegro de haberla visto.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'A Elena le ha gustado mucho la película.', a: 't', why: '*A mí me ha encantado.*' },
            { q: 'David piensa que el principio fue emocionante.', a: 'f', why: 'He says the first hour was *bastante aburrida*.' },
            { q: 'Los dos están de acuerdo sobre la actriz.', a: 't', why: 'David says *En eso tienes razón.*' },
            { q: 'David no quería ver la película.', a: 'f', why: 'He says *me alegro de haberla visto*: he is glad he saw it.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Me ___ mucho las canciones del concierto.', o: ['gustaron', 'gustó', 'gusté'], why: '*las canciones* is plural: *gustaron*.' },
            { q: 'La exposición me ___ muy interesante.', o: ['pareció', 'parecieron', 'parecí'], why: '*la exposición* is singular: *pareció*.' },
            { q: 'Aunque ___ mucha gente, pudimos ver todo bien.', o: ['había', 'haya', 'hay'], why: '*aunque* + indicative for a fact in the past: *había*.' },
            { q: 'No creo que el concierto ___ tan caro.', o: ['sea', 'es', 'será'], why: '*no creo que* + subjunctive: *sea*.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Find the word that does not fit.', items: [
            { o: ['aburrido', 'impresionante', 'emocionante', 'entretenido'], why: '*aburrido* is negative; the others are positive.' },
            { o: ['decepcionante', 'original', 'conmovedor', 'impresionante'], why: '*decepcionante* is negative; the others are positive.' },
            { o: ['la taquilla', 'aburrido', 'raro', 'emocionante'], why: '*la taquilla* is a place; the others are opinions.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the opinions.', items: [
            { a: 'Lo que más me gustó fue el final.', why: '*Lo que más me gustó fue* + the best part.' },
            { a: 'La obra me pareció bastante aburrida.', why: '*me pareció* + adjective. *la obra*, *aburrida*.' },
            { a: 'Aunque era cara, mereció la pena.', why: '*aunque* + indicative; *merecer la pena*: to be worth it.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word and the explanation.', pairs: [
            ['emocionante', 'Te hace sentir mucha energía y nervios.'],
            ['conmovedor', 'Te hace sentir emociones fuertes, a veces tristes.'],
            ['decepcionante', 'Es peor de lo que esperabas.'],
            ['entretenido', 'Pasas un buen rato y no te aburres.'],
            ['raro', 'Es muy diferente y no lo entiendes bien.'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: events and reviews',
      about: 'Read an events listing and two different opinions about one exhibition.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: '¿Qué hacer este fin de semana?', md: '**Viernes, 21:00 h: Jazz en el patio**\nEl trío Las Lunas toca en el patio del Museo de la Ciudad. Entrada: 15 €, reducida: 10 €. Si llueve, el concierto será en el salón de actos.\n\n**Sábado, de 10:00 a 19:00 h: «Luz y agua»**\nExposición de fotografías de cincuenta años en el Centro Cultural. Visitas guiadas a las 11:00 y a las 17:00 h. Entrada libre.\n\n**Domingo, desde las 17:00 h: Fiesta del barrio en el parque**\nMúsica, comida y juegos para toda la familia. A las 22:00 h, fuegos artificiales. Gratis.' },
          { t: 'ex', kind: 'tf', h: 'Read the listing. True or false?', items: [
            { q: 'El concierto de jazz es gratis.', a: 'f', why: 'It costs 15 €, or 10 € with a reduced ticket.' },
            { q: 'Si hace mal tiempo, el concierto es dentro del museo.', a: 't', why: 'If it rains, it moves to the *salón de actos*.' },
            { q: 'Para la exposición no hay que pagar.', a: 't', why: '*Entrada libre.*' },
            { q: 'Los fuegos artificiales son el sábado por la noche.', a: 'f', why: 'They are on Sunday at ten in the evening.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Dos opiniones sobre «Luz y agua»', md: '**Rosa, 54 años:** El sábado fui a la exposición con mi hija y todavía estoy emocionada. Las fotos son impresionantes, sobre todo las antiguas del puerto. Hicimos la visita guiada de las once. La guía nos contó muchas cosas sobre la fotógrafa y fue muy interesante. Aunque había bastante gente, pudimos ver todo bien. ¡La recomiendo de verdad!\n\n**Omar, 31 años:** Sinceramente, me pareció un poco decepcionante. Algunas fotos son preciosas, pero muchas se parecen: agua, luz y otra vez agua. Después de media hora me aburrí. Además, había tanta gente que casi no pude ver algunas fotos. En mi opinión, hay demasiadas. Pero como la entrada es libre, creo que merece la pena una visita corta.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the reviews. True, false or not given?', items: [
            { q: 'Rosa fue a la exposición sola.', a: 'f', why: 'She went with her daughter: *con mi hija*.' },
            { q: 'A Rosa le gustaron mucho las fotos del puerto.', a: 't', why: '*sobre todo las antiguas del puerto*.' },
            { q: 'Omar hizo la visita guiada de las cinco.', a: 'ng', why: 'Omar does not say if he did a guided tour.' },
            { q: 'Omar piensa que hay demasiadas fotos.', a: 't', why: '*En mi opinión, hay demasiadas.*' },
            { q: 'Omar no recomienda ir a la exposición.', a: 'f', why: 'He thinks a short visit is worth it because it is free.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Who says it: Rosa, Omar or both?', items: [
            { q: 'Había mucha gente en la exposición.', o: ['los dos', 'solo Rosa', 'solo Omar'], why: 'Rosa says *había bastante gente* and Omar *había tanta gente*.' },
            { q: 'Me aburrí después de un rato.', o: ['solo Omar', 'solo Rosa', 'los dos'], why: 'Omar: *Después de media hora me aburrí.*' },
            { q: 'Aprendí mucho sobre la fotógrafa.', o: ['solo Rosa', 'solo Omar', 'los dos'], why: 'Rosa did the guided tour and the guide told them about the photographer.' },
            { q: 'Merece la pena ir.', o: ['los dos', 'solo Rosa', 'solo Omar'], why: 'Rosa recommends it, and Omar thinks a short visit is worth it.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the indefinido.', items: [
            { s: 'El sábado [fui] a la exposición y [hicimos] la visita guiada.', why: 'Finished actions on Saturday: *fui*, *hicimos*.' },
            { s: 'Después de media hora me [aburrí] y casi no [pude] ver algunas fotos.', why: '*aburrirse*, *me aburrí*; *poder*, *pude*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'No quedan entradas. La función está ___.', o: ['agotada', 'libre', 'cerrada'], why: '*agotada*: sold out.' },
      { q: 'Me ___ mucho los actores.', o: ['gustaron', 'gustó', 'gusta'], why: '*los actores* is plural: *gustaron*.' },
      { q: 'Aunque ___ cansados, fuimos al concierto.', o: ['estábamos', 'estemos', 'estar'], why: '*aunque* + indicative for a fact: *estábamos*.' },
      { q: '—La película fue muy aburrida. —___ A mí me pareció muy entretenida.', o: ['¿Tú crees?', 'Tienes razón.', 'Estoy de acuerdo.'], why: 'You disagree politely: *¿Tú crees?*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '¿Hay ___ para estudiantes? (discount)', a: ['descuento'], why: '*el descuento*: a lower price.' },
      { q: 'Lo que más me gustó ___ la música. (ser, past)', a: ['fue'], why: '*Lo que más me gustó fue* + the best part.' },
      { q: 'La exposición me ___ muy original. (parecer, past)', a: ['pareció'], why: '*parecer* works like *gustar*: *me pareció*.' },
      { q: 'No creo que la película ___ tan buena como el libro. (ser)', a: ['sea'], why: '*no creo que* + subjunctive: *sea*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word and the meaning.', pairs: [
      ['la taquilla', 'donde se compran las entradas'],
      ['la entrada reducida', 'una entrada más barata'],
      ['la visita guiada', 'una visita con un guía'],
      ['decepcionante', 'peor de lo que esperabas'],
    ] },
  ],
};
