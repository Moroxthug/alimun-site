// Spanish B1 for travel, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Nature and the outdoors',
  goal: 'Plan walks and trips into nature safely.',
  art: 'sun',
  tags: { skills: ['vocabulary', 'reading', 'speaking', 'grammar'], topics: ['nature', 'weather', 'hiking', 'future', 'negative-imperative'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Landscapes, weather and a walk',
      about: 'Talk about landscapes and the weather, and plan a walk.',
      art: 'cactus',
      spreads: [
        [
          { t: 'table', caption: 'Words for landscapes', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['la sierra', 'a range of mountains'],
            ['el valle', 'a valley'],
            ['el río', 'a river'],
            ['el lago', 'a lake'],
            ['la costa', 'the land next to the sea'],
            ['el acantilado', 'a high, steep cliff by the sea'],
            ['el bosque', 'a forest, a wood'],
            ['el sendero', 'a narrow path for walking'],
            ['la cumbre', 'the top of a mountain'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain, *el monte* is the hilly, wild land outside towns, and *ir al monte* means going walking there. In Latin America you will often hear *el cerro* for a hill and *la cordillera* for a long chain of mountains, like the Andes.' },
        ],
        [
          { t: 'text', md: 'For the weather, Spanish uses *hace* (*hace sol*, *hace viento*, *hace frío*), *está* (*está nublado*) and *hay* (*hay niebla*, *hay tormenta*).\n\nTo talk about the weather tomorrow, use *ir a* + infinitive (*va a llover*) or the **future** (*lloverá*, *hará calor*). For a plan that depends on the weather, use *si* + present, then the future: *Si llueve, iremos al museo*.' },
          { t: 'examples', items: [
            { s: 'Mañana **va a hacer** mucho calor.', n: '*ir a* + infinitive: what is going to happen.' },
            { s: 'Según el pronóstico, por la tarde **habrá** tormenta.', n: '*hay*, future *habrá*.' },
            { s: '**Si hace** buen tiempo, **subiremos** a la cumbre.', n: '*si* + present, then the future.' },
            { s: '**Si hay** niebla, no **saldremos**.', n: '*salir* has an irregular future: *saldremos*.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write salir in the future.', verb: 'salir', tense: 'future', rows: [
            ['yo', 'saldré', 'The future stem of *salir* is *saldr-*. Add *-é*.'],
            ['tú', 'saldrás', '*saldr-* + *-ás*.'],
            ['él / ella / usted', 'saldrá', '*saldr-* + *-á*.'],
            ['nosotros', 'saldremos', '*saldr-* + *-emos*.'],
            ['vosotros', 'saldréis', '*saldr-* + *-éis*. Latin America uses *ustedes saldrán*.'],
            ['ellos / ellas / ustedes', 'saldrán', '*saldr-* + *-án*.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Planning a walk', lines: [
            { who: 'Inés', s: '¿Qué te parece si mañana hacemos la ruta del río hasta el lago?' },
            { who: 'Tomás', s: 'Me apetece mucho. ¿Cuánto se tarda?' },
            { who: 'Inés', s: 'Unas cinco horas, ida y vuelta. Al principio hay una subida bastante dura.' },
            { who: 'Tomás', s: '¿Y qué tiempo va a hacer?' },
            { who: 'Inés', s: 'Según el pronóstico, por la mañana hará sol, pero por la tarde puede haber tormenta.' },
            { who: 'Tomás', s: 'Entonces tenemos que salir temprano. Si salimos a las siete, estaremos de vuelta antes de las tres.' },
            { who: 'Inés', s: 'Vale. Y si vemos nubes negras, nos daremos la vuelta.' },
            { who: 'Tomás', s: 'De acuerdo. Yo llevo el agua y algo de comer. ¿Llevas tú el mapa?' },
            { who: 'Inés', s: 'Sí, y también un chubasquero, por si acaso.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'La ruta dura unas cinco horas en total.', a: 't', why: '*Unas cinco horas, ida y vuelta.*' },
            { q: 'La subida del principio es fácil.', a: 'f', why: '*hay una subida bastante dura*: it is hard.' },
            { q: 'Por la tarde puede haber tormenta.', a: 't', why: 'The forecast says there may be a storm in the afternoon.' },
            { q: 'Tomás lleva el mapa.', a: 'f', why: 'Tomás takes the water and food. Inés takes the map.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'No veo nada. Hay mucha ___. (fog)', a: ['niebla'], why: '*hay niebla*: you cannot see far.' },
            { q: 'Hoy ___ mucho viento en la costa. (hacer)', a: ['hace'], why: 'Wind takes *hacer*: *hace viento*.' },
            { q: 'El cielo está gris. Está ___. (cloudy)', a: ['nublado'], why: '*estar nublado*: there are many clouds.' },
            { q: 'Si hace buen tiempo, ___ a la cumbre. (subir, nosotros)', a: ['subiremos', 'vamos a subir'], why: '*si* + present, then the future: *subiremos*.' },
            { q: 'Si llueve, ___ en el refugio. (quedarse, nosotros)', a: ['nos quedaremos', 'nos vamos a quedar', 'vamos a quedarnos'], why: 'The future of a reflexive verb: *nos quedaremos*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the weather word and its meaning.', pairs: [
            ['la tormenta', 'lluvia fuerte con truenos y rayos'],
            ['la niebla', 'nubes muy bajas; no se ve bien'],
            ['el chubasco', 'lluvia fuerte, pero corta'],
            ['la ola de calor', 'muchos días seguidos de mucho calor'],
            ['despejado', 'sin nubes en el cielo'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Safety and rules',
      about: 'Understand signs and rules in parks and mountains, and stay safe.',
      art: 'dog',
      spreads: [
        [
          { t: 'table', caption: 'Signs in parks and mountains', explain: ['head', 'col1'], quiz: true, head: ['Sign', 'Meaning'], rows: [
            ['Prohibido hacer fuego', 'you must not light a fire'],
            ['Prohibido acampar', 'you must not put up a tent here'],
            ['No salga de los senderos señalizados', 'stay on the marked paths'],
            ['Perros atados', 'dogs must be on a lead'],
            ['No deje basura', 'take your rubbish with you'],
            ['Agua no potable', 'you cannot drink this water'],
            ['Camino cortado', 'the path is closed'],
            ['Peligro: desprendimientos', 'danger, rocks may fall'],
          ] },
          { t: 'text', md: 'Rules use *está prohibido* + infinitive, *no se puede* + infinitive and *hay que* + infinitive (you have to). After *es importante que* or *es necesario que*, the verb is in the subjunctive: *Es importante que lleves agua*.\n\nSigns often use the *usted* form: *No deje basura*. A friend uses the *tú* form: *No dejes basura*.' },
        ],
        [
          { t: 'tip', art: 'owl', md: 'In many natural parks in Spain, camping outside campsites is not allowed. In summer, walk early in the day and carry plenty of water. Before a mountain walk, check the weather, tell someone your route and turn back if the weather gets worse. In an emergency in Spain, call *112*: it works in all EU countries. In Latin America the number changes from country to country, so ask at the visitor centre.' },
          { t: 'dialogue', title: 'At the visitor centre', lines: [
            { who: 'Hana', s: 'Buenos días. Queremos subir mañana a la cumbre. ¿Qué nos recomienda?' },
            { who: 'Guarda', s: 'Es una ruta preciosa, pero larga. Es importante que salgan temprano y que lleven mucha agua. En la ruta no hay fuentes de agua potable.' },
            { who: 'Hana', s: '¿Podemos llevar al perro?' },
            { who: 'Guarda', s: 'Sí, pero tiene que ir atado todo el tiempo. Hay vacas en los prados.' },
            { who: 'Hana', s: '¿Y se puede acampar arriba?' },
            { who: 'Guarda', s: 'No, está prohibido acampar en todo el parque. Hay un refugio a dos horas de la cumbre, pero hay que reservar.' },
            { who: 'Hana', s: 'De acuerdo. ¿Algo más?' },
            { who: 'Guarda', s: 'Sí: no salgan de los senderos señalizados. Y si hay niebla, no sigan. Den la vuelta.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'En la ruta hay mucha agua potable.', a: 'f', why: '*En la ruta no hay fuentes de agua potable.*' },
            { q: 'El perro puede ir suelto.', a: 'f', why: 'The dog *tiene que ir atado todo el tiempo*.' },
            { q: 'Se puede dormir en el refugio si se reserva.', a: 't', why: '*Hay un refugio…, pero hay que reservar.*' },
            { q: 'Con niebla, el guarda recomienda volver.', a: 't', why: '*Si hay niebla, no sigan. Den la vuelta.*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Es importante que ___ botas buenas.', o: ['lleves', 'llevas', 'llevar'], why: '*es importante que* + subjunctive: *lleves*.' },
            { q: 'Está prohibido ___ fuego.', o: ['hacer', 'haga', 'hagas'], why: '*está prohibido* + infinitive: *hacer*.' },
            { q: 'No ___ el agua de esa fuente. No es potable.', o: ['bebas', 'bebes', 'bebe'], why: 'Negative *tú* imperative uses the subjunctive: *no bebas*.' },
            { q: 'Para dormir en el refugio, ___ reservar.', o: ['hay que', 'hay', 'tiene'], why: '*hay que* + infinitive: you have to.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Tell a friend the rule.', items: [
            { q: 'Está prohibido hacer fuego.', cue: 'No', a: ['No hagas fuego.'], why: '*hacer*, negative *tú* imperative: *no hagas*.' },
            { q: 'Está prohibido dejar basura.', cue: 'No', a: ['No dejes basura.'], why: '*dejar*, *no dejes*: *-ar* verbs take *-es*.' },
            { q: 'Está prohibido salir del sendero.', cue: 'No', a: ['No salgas del sendero.'], why: '*salir*, *no salgas*: from *salgo*.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentence. Two words do not belong.', items: [
            { a: 'Es importante que llevéis agua suficiente.', extra: ['lleváis', 'llevar'], why: '*es importante que* + subjunctive: *llevéis*, the *vosotros* form.' },
            { a: 'Si hay tormenta, daremos la vuelta.', extra: ['haya', 'damos'], why: '*si* + present, then the future: *hay*, *daremos*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the negative imperatives.', items: [
            { s: '[No salgan] de los senderos y [no dejen] basura en el parque.', why: '*ustedes* form: *no salgan*, *no dejen*.' },
            { s: 'Si ves nubes negras, [no sigas]. Es mejor volver.', why: '*seguir*, *no sigas*: the *tú* form.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a hiking route',
      about: 'Read the information for a walk and find what you need to know.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Ruta circular del Barranco', md: 'Longitud: 11 km. Duración: unas 4 horas. Desnivel: 450 metros. Dificultad: media.\n\nLa ruta empieza en el aparcamiento que hay a la entrada de Valdeluna. Primero pasa por un tranquilo bosque de pinos y después sube con fuerte pendiente hasta el mirador de la Peña del Águila. Desde allí, con buen tiempo, se ve todo el valle. Luego la ruta baja por el estrecho barranco hasta el río. Este tramo es muy estrecho y, cuando llueve, resbaladizo. Por eso es muy importante llevar buen calzado.\n\nDespués de unos dos tercios del recorrido, se llega al refugio del Molino, donde se puede comer algo (abierto de mayo a octubre, cerrado los lunes). Al final, el camino vuelve a Valdeluna por los prados.\n\nAvisos: en invierno, el paso por el barranco está cortado. Se permiten perros, pero tienen que ir atados. Por favor, no salga de los senderos señalizados y llévese su basura.\n\nCómo llegar: en el autobús 52 hasta la parada «Valdeluna Centro» y, desde allí, 10 minutos a pie hasta el aparcamiento.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the route information. True, false or not given?', items: [
            { q: 'La ruta empieza y termina en Valdeluna.', a: 't', why: 'It starts at the car park of Valdeluna and the path goes back there at the end.' },
            { q: 'Desde el mirador se ve el mar.', a: 'f', why: 'From the viewpoint you see the whole valley, not the sea.' },
            { q: 'El barranco es peligroso cuando llueve.', a: 't', why: 'This part is *resbaladizo* when it rains.' },
            { q: 'El refugio abre todos los días del año.', a: 'f', why: 'It opens from May to October and is closed on Mondays.' },
            { q: 'En el refugio hay habitaciones para dormir.', a: 'ng', why: 'The text says you can eat there, but not if you can sleep there.' },
            { q: 'Los perros pueden ir sueltos.', a: 'f', why: 'Dogs *tienen que ir atados*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do these words from the text mean?', items: [
            { q: 'Un **desnivel** de 450 metros quiere decir: ___', o: ['Subes y bajas 450 metros de altura.', 'La ruta tiene 450 metros de largo.', 'Hay 450 metros hasta el autobús.'], why: '*el desnivel*: the difference in height.' },
            { q: 'Un **mirador** es: ___', o: ['un sitio con buenas vistas', 'un tipo de refugio', 'un río pequeño'], why: 'From *mirar*: a place to look at the view.' },
            { q: 'El camino es **resbaladizo**. Quiere decir: ___', o: ['Te puedes caer fácilmente.', 'Es muy ancho.', 'Es muy largo.'], why: '*resbaladizo*: slippery, your feet can slide.' },
            { q: 'El paso está **cortado**. Quiere decir: ___', o: ['No se puede pasar.', 'Es más corto.', 'Hay que pagar.'], why: '*cortado*: closed, you cannot go that way.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Para el barranco, es muy importante llevar buen ___. (shoes or boots)', a: ['calzado'], why: '*el calzado*: shoes or boots.' },
            { q: 'Se permiten perros, pero tienen que ir ___. (on a lead)', a: ['atados'], why: '*atados*: on a lead. Plural, because of *perros*.' },
            { q: 'En el autobús 52 hasta la ___ «Valdeluna Centro». (stop)', a: ['parada'], why: '*la parada*: the bus stop.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Si ___ buen tiempo, subiremos a la cumbre.', o: ['hace', 'hará', 'haga'], why: 'After *si* you use the present: *hace*.' },
      { q: 'Está prohibido ___ en el parque.', o: ['acampar', 'acampe', 'acampes'], why: '*está prohibido* + infinitive.' },
      { q: 'No ___ basura en el sendero.', o: ['dejes', 'dejas', 'deja'], why: 'Negative *tú* imperative: *no dejes*.' },
      { q: 'Es importante que ___ temprano.', o: ['salgáis', 'salís', 'salir'], why: '*es importante que* + subjunctive: *salgáis*.' },
    ] },
    { t: 'ex', kind: 'bank', h: 'Complete with a word from the box.', extra: ['cumbre', 'potable'], items: [
      { q: 'Hay mucha ___ y no se ve nada.', a: 'niebla', why: '*la niebla*: you cannot see far.' },
      { q: 'Vamos por el ___ señalizado.', a: 'sendero', why: '*el sendero*: a path for walking.' },
      { q: 'Mañana ___ tormenta por la tarde.', a: 'habrá', why: 'The future of *hay*: *habrá*.' },
      { q: 'Para dormir en el refugio, hay que ___.', a: 'reservar', why: '*hay que* + infinitive.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the place and the description.', pairs: [
      ['el valle', 'la tierra baja entre montañas'],
      ['el acantilado', 'una pared de roca alta junto al mar'],
      ['la cumbre', 'la parte más alta de una montaña'],
      ['el mirador', 'un sitio con buenas vistas'],
    ] },
  ],
};
