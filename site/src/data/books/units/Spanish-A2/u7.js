// Spanish A2, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Travel',
  goal: 'Plan a trip, compare places and book a room.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['comparative', 'superlative', 'estar-gerund', 'hotel', 'por-para'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Más bonito que Madrid',
      about: 'Compare places, hotels and ways to travel.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To compare two things, use **más** + adjective + **que** (more … than) or **menos** + adjective + **que** (less … than). When two things are the same, use **tan** + adjective + **como**.\n\nThe adjective agrees with the first thing: *La playa es más bonit**a** que el pueblo.*' },
          { t: 'examples', items: [
            { s: 'El tren es **más rápido que** el autobús.', n: '*más* + adjective + *que*.' },
            { s: 'Este hotel es **menos caro que** el hotel del centro.', n: '*menos* + adjective + *que*.' },
            { s: 'Sevilla es **tan bonita como** Granada.', n: 'The same: *tan* + adjective + *como*.' },
            { s: 'En julio hace **más calor que** en mayo.', n: 'With a noun, too: *más calor que*.' },
            { s: 'Mi maleta pesa **menos que** la tuya.', n: 'With a verb: *pesa menos que*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not use *tan* with *que*, or *más* with *como*. Remember the pairs: *más … que*, *menos … que*, *tan … como*.' },
        ],
        [
          { t: 'text', md: 'For **the most** of a group, use **el, la, los** or **las** + **más** + adjective, and **de** for the group: *Es el hotel más barato de la ciudad.*\n\nFour adjectives have a special form. Do not say *más bueno*: say **mejor**.' },
          { t: 'table', caption: 'Irregular comparatives', explain: ['head', 'col2'], quiz: true, head: ['Adjective', 'Comparative', 'Meaning'], rows: [
            ['bueno', 'mejor', 'better'],
            ['malo', 'peor', 'worse'],
            ['grande (age)', 'mayor', 'older'],
            ['pequeño (age)', 'menor', 'younger'],
          ] },
          { t: 'examples', items: [
            { s: 'Es **la ciudad más bonita de** España, en mi opinión.', n: 'Superlative: *la* + noun + *más* + adjective + *de*.' },
            { s: 'Este restaurante es **el mejor del** barrio.', n: '*el mejor*, not *el más bueno*. *de + el = del*.' },
            { s: 'El tiempo hoy es **peor que** ayer.', n: '*malo → peor*' },
            { s: 'Mi hermana es **mayor que** yo.', n: 'For age: *mayor* (older) and *menor* (younger).' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'El avión es más rápido ___ el tren.', o: ['que', 'como', 'de'], why: '*más* + adjective + *que*.' },
            { q: 'Valencia es tan bonita ___ Barcelona.', o: ['como', 'que', 'de'], why: 'The same: *tan … como*.' },
            { q: 'Este es el museo más famoso ___ la ciudad.', o: ['de', 'que', 'en'], why: 'Superlative: *el más famoso de*.' },
            { q: 'La comida de este hotel es ___ que la del otro. Está muy buena.', o: ['mejor', 'más buena', 'más mejor'], why: '*bueno → mejor*. Never *más mejor*.' },
            { q: 'Ayer llovió y hoy llueve más. Hoy el tiempo es ___.', o: ['peor', 'mejor', 'tan malo'], why: '*malo → peor*: worse.' },
            { q: 'Mi abuelo tiene 80 años y mi abuela 76. Mi abuelo es ___.', o: ['mayor', 'menor', 'más grande'], why: 'Older: *mayor*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'El hotel de la playa es ___ caro que el del centro: cuesta 150 euros y el otro, 90.', a: ['más'], why: '150 is more than 90: *más caro*.' },
            { q: 'El autobús es ___ rápido que el tren: tarda más.', a: ['menos'], why: 'The bus takes longer: *menos rápido*.' },
            { q: 'Mi habitación es tan grande ___ la tuya.', a: ['como'], why: '*tan … como*' },
            { q: 'Para mí, la paella de mi madre es la ___ del mundo. (buena)', a: ['mejor'], why: '*la mejor*: the best.' },
            { q: 'Es la playa ___ tranquila de la isla.', a: ['más'], why: 'Superlative: *la más tranquila de*.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentence. Two words do not belong.', items: [
            { a: 'Toledo es más pequeña que Madrid.', extra: ['como', 'tan'], why: '*más … que*. *Como* goes with *tan*.' },
            { a: 'Es el mejor hotel de la ciudad.', extra: ['más', 'que'], why: '*el mejor … de*, without *más*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Estamos esperando el tren',
      about: 'Say what is happening right now with estar and the gerund.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'To say what is happening **now**, at this moment, use **estar** + gerund: *Estoy esperando el tren.*\n\nThe gerund is easy. For *-ar* verbs, add **-ando**: *hablar → hablando*. For *-er* and *-ir* verbs, add **-iendo**: *comer → comiendo*, *salir → saliendo*.' },
          { t: 'table', caption: 'estar + gerund', quiz: true, head: ['', 'estar', 'gerund'], rows: [
            ['yo', 'estoy', 'viajando'],
            ['tú', 'estás', 'comiendo'],
            ['él / ella / usted', 'está', 'escribiendo'],
            ['nosotros', 'estamos', 'esperando'],
            ['vosotros', 'estáis', 'haciendo'],
            ['ellos / ustedes', 'están', 'saliendo'],
          ] },
        ],
        [
          { t: 'text', md: 'Some gerunds are irregular. When the stem ends in a vowel, *-iendo* becomes **-yendo**: *leer → leyendo*, *oír → oyendo*. Some *-ir* verbs change their vowel: *dormir → durmiendo*, *pedir → pidiendo*, *decir → diciendo*.\n\nPronouns go before *estar*, or at the end of the gerund with an accent: *Me estoy duchando* or *Estoy duchándome*.' },
          { t: 'examples', items: [
            { s: '¿Qué **estás haciendo**? Estoy **leyendo** una guía de Lisboa.', n: '*leer → leyendo*' },
            { s: 'Los niños **están durmiendo** en el coche.', n: '*dormir → durmiendo*' },
            { s: 'Ahora mismo **estamos pasando** por un pueblo muy bonito.', n: '*Ahora mismo*: right now.' },
            { s: '**Me estoy preparando** para el viaje.', n: 'The pronoun before *estar* …' },
            { s: 'Estoy **preparándome** para el viaje.', n: '… or at the end of the gerund, with an accent.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Spanish uses *estar* + gerund only for things happening now or around now. For plans, use the present or *ir a*: *Mañana voy a Bilbao*, not *Mañana estoy yendo a Bilbao*.' },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Write the gerund.', items: [
            { q: 'Estamos ___ la ciudad. (visitar)', base: 'visitar', a: ['visitando'], why: '*-ar → -ando*' },
            { q: 'Ana está ___ una postal. (escribir)', base: 'escribir', a: ['escribiendo'], why: '*-ir → -iendo*' },
            { q: '¿Qué estás ___? (leer)', base: 'leer', a: ['leyendo'], why: 'After a vowel, *-yendo*: *leyendo*.' },
            { q: 'El bebé está ___. Habla bajo, por favor. (dormir)', base: 'dormir', a: ['durmiendo'], why: '*dormir* changes *o* to *u*: *durmiendo*.' },
            { q: 'Los turistas están ___ información. (pedir)', base: 'pedir', a: ['pidiendo'], why: '*pedir* changes *e* to *i*: *pidiendo*.' },
            { q: 'Estoy ___ el desayuno en el hotel. (tomar)', base: 'tomar', a: ['tomando'], why: '*-ar → -ando*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write estar + gerund.', items: [
            { q: 'Ahora mismo yo ___ la maleta. (hacer)', a: ['estoy haciendo'], why: '*yo estoy* + *haciendo*.' },
            { q: '¿Dónde estáis? ___ en la playa. (bañarse, nosotros)', a: ['Nos estamos bañando', 'Estamos bañándonos'], why: 'The pronoun before *estar*, or at the end of the gerund.' },
            { q: 'Mis padres ___ por Italia este mes. (viajar)', a: ['están viajando'], why: '*ellos están* + *viajando*. Around now: *este mes*.' },
            { q: '¿Con quién ___ por teléfono? (hablar, tú)', a: ['estás hablando'], why: '*tú estás* + *hablando*.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which gerund is not correct?', items: [
            { o: ['leiendo', 'leyendo', 'comiendo', 'viviendo'], why: '*leer → leyendo*, with *y*.' },
            { o: ['dormiendo', 'durmiendo', 'saliendo', 'bebiendo'], why: '*dormir → durmiendo*, with *u*.' },
            { o: ['hablendo', 'hablando', 'viajando', 'esperando'], why: '*-ar* verbs take *-ando*: *hablando*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Una habitación doble, por favor',
      about: 'Book a hotel room, complain politely and use por and para.',
      art: 'sun',
      spreads: [
        [
          { t: 'dialogue', title: 'At the hotel reception', lines: [
            { who: 'Recepcionista', s: 'Buenas tardes. ¿En qué puedo ayudarles?' },
            { who: 'Lucía', s: 'Buenas tardes. Tenemos una reserva a nombre de Lucía Herrera. La hice por internet.' },
            { who: 'Recepcionista', s: 'Sí, aquí está: una habitación doble para tres noches, con desayuno.' },
            { who: 'Lucía', s: 'Exacto. ¿A qué hora es el desayuno?' },
            { who: 'Recepcionista', s: 'De siete y media a diez y media, en el comedor. Aquí tienen la llave: habitación 214, en la segunda planta.' },
            { who: 'Lucía', s: 'Gracias. ¿Hay wifi en la habitación?' },
            { who: 'Recepcionista', s: 'Sí, la contraseña está en la tarjeta. ¡Que disfruten de su estancia!' },
          ] },
          { t: 'tip', art: 'owl', md: 'Useful hotel words: *una habitación individual* (for one) or *doble* (for two), *con baño*, *con vistas al mar*, *media pensión* (breakfast and dinner) and *la llave* (the key). In parts of Latin America, people say *el cuarto* for the room and *el celular* for *el móvil*.' },
        ],
        [
          { t: 'text', md: 'To complain politely, explain the problem and ask for help. Start with *Perdone* or *Disculpe*, and use *¿Podría…?* (could you…?) to ask.' },
          { t: 'dialogue', title: 'A problem with the room', lines: [
            { who: 'Lucía', s: 'Perdone, tenemos un problema en la habitación 214.' },
            { who: 'Recepcionista', s: 'Dígame, ¿qué pasa?' },
            { who: 'Lucía', s: 'El aire acondicionado no funciona y hace muchísimo calor. Además, no hay toallas en el baño.' },
            { who: 'Recepcionista', s: 'Lo siento mucho. Ahora mismo le subo las toallas.' },
            { who: 'Lucía', s: 'Gracias. ¿Y podría cambiarnos de habitación?' },
            { who: 'Recepcionista', s: 'Claro. Tenemos una habitación libre en la cuarta planta, más tranquila y con vistas al mar.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the problem with what you say.', pairs: [
            ['The shower has no hot water.', 'No hay agua caliente en la ducha.'],
            ['The room is very noisy.', 'La habitación es muy ruidosa.'],
            ['There are no towels.', 'No hay toallas en el baño.'],
            ['The heating does not work.', 'La calefacción no funciona.'],
            ['You want another room.', '¿Podría cambiarnos de habitación?'],
          ] },
        ],
        [
          { t: 'text', md: '**Para** and **por** can both mean *for*, but they are used differently.\n\n**para**: the purpose (*para descansar*), the place you go to (*el tren para Cádiz*), a deadline (*para el lunes*) and the person something is for (*un regalo para ti*).\n\n**por**: the reason (*por el calor*), movement through or along a place (*por el centro*), the means (*por teléfono, por internet*), the price (*por 80 euros*) and how often (*dos veces por semana*). Also *por la mañana, por la tarde, por la noche*.' },
          { t: 'examples', items: [
            { s: 'Vamos a Mallorca **para** descansar.', n: 'Purpose: *para* + infinitive.' },
            { s: 'Reservé la habitación **por** internet.', n: 'The means: *por internet*.' },
            { s: 'Paseamos **por** el casco antiguo.', n: 'Through a place: *por*.' },
            { s: 'Necesito la habitación **para** el viernes.', n: 'A time limit: *para*.' },
            { s: 'Pagamos 200 euros **por** tres noches.', n: 'The price: *por*.' },
            { s: 'No salimos **por** la lluvia.', n: 'The reason: *por*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Por or para?', groups: ['por', 'para'], items: [
            { s: 'Voy a la playa ___ tomar el sol.', g: 1, why: 'Purpose: *para* + infinitive.' },
            { s: 'Te llamo ___ teléfono esta tarde.', g: 0, why: 'The means: *por teléfono*.' },
            { s: 'Este regalo es ___ mi madre.', g: 1, why: 'The person it is for: *para*.' },
            { s: 'Caminamos ___ la playa toda la tarde.', g: 0, why: 'Along a place: *por*.' },
            { s: 'El tren ___ Madrid sale a las ocho.', g: 1, why: 'Where the train goes: *para*.' },
            { s: 'Voy al gimnasio tres veces ___ semana.', g: 0, why: 'How often: *por semana*.' },
            { s: 'Tengo que terminar el informe ___ el lunes.', g: 1, why: 'A deadline: *para*.' },
            { s: 'Cerraron la playa ___ el mal tiempo.', g: 0, why: 'The reason: *por*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'At the hotel. Choose the right answer.', items: [
            { q: 'Quería una habitación ___ dos personas.', o: ['doble', 'individual', 'libre'], why: 'For two people: *una habitación doble*.' },
            { q: '___, la ducha no funciona.', o: ['Perdone', 'De nada', 'Encantado'], why: 'A polite way to start a complaint: *Perdone*.' },
            { q: '¿___ cambiarnos de habitación, por favor?', o: ['Podría', 'Puede que', 'Debe'], why: 'A polite request: *¿Podría…?*' },
            { q: 'Tenemos una reserva ___ nombre de Pedro Ruiz.', o: ['a', 'en', 'por'], why: 'The fixed phrase is *a nombre de*.' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Words for the hotel.', words: [
            { a: 'llave', clue: 'La necesitas para abrir la puerta de la habitación.' },
            { a: 'toalla', clue: 'La usas después de la ducha.' },
            { a: 'reserva', clue: 'La haces antes del viaje, por internet o por teléfono.' },
            { a: 'desayuno', clue: 'La primera comida del día.' },
            { a: 'maleta', clue: 'Pones tu ropa en ella para viajar.' },
            { a: 'planta', clue: 'La habitación 214 está en la segunda.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Reading: a travel forum and a hotel review',
      about: 'Read travel advice and a review, and compare the places.',
      art: 'croissant',
      spreads: [
        [
          { t: 'reading', title: 'Foro de viajeros: ¿Cádiz o Málaga?', md: '**Sara:** Hola a todos. En junio voy a viajar con mi pareja por Andalucía durante una semana. No tenemos coche. ¿Qué ciudad es mejor para pasar cuatro días, Cádiz o Málaga?\n\n**Diego:** Depende de lo que buscas. Málaga es más grande que Cádiz y tiene más museos y más vida por la noche. Además, el aeropuerto está muy cerca. Pero en verano hay muchísimos turistas.\n\n**Elena:** Yo prefiero Cádiz. Es más pequeña y más tranquila, y las playas son tan bonitas como las de Málaga. Todo el centro se puede visitar a pie. Para mí, es la ciudad más bonita de la costa. Eso sí, los hoteles del centro son un poco caros.\n\n**Sara:** ¡Gracias! Creo que vamos a ir a Cádiz. Ahora mismo estoy mirando hoteles.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Sara va a viajar en coche.', a: 'f', why: '*No tenemos coche.*' },
            { q: 'Según Diego, Málaga es más grande que Cádiz.', a: 't', why: '*Málaga es más grande que Cádiz.*' },
            { q: 'Según Elena, las playas de Cádiz son peores que las de Málaga.', a: 'f', why: 'She says they are *tan bonitas como* the beaches of Málaga.' },
            { q: 'Elena vive en Cádiz.', a: 'ng', why: 'The text does not say where Elena lives.' },
            { q: 'Sara decide ir a Cádiz.', a: 't', why: '*Creo que vamos a ir a Cádiz.*' },
          ] },
        ],
        [
          { t: 'reading', title: 'Opinión: Hostal La Caleta', md: 'Estuvimos tres noches en este hostal en junio. Está en el casco antiguo, a cinco minutos a pie de la playa. La habitación era pequeña, pero muy limpia, y tenía un balcón a una calle muy bonita.\n\nEl primer día hubo un problema: no había agua caliente en la ducha. Lo dijimos en recepción y lo arreglaron en media hora. El chico de recepción fue muy amable y nos dio muchas ideas para visitar la ciudad.\n\nEl desayuno no es el mejor del mundo, pero es bueno y barato. Pagamos 70 euros por noche, menos que en los hoteles grandes del centro. Lo recomiendo para parejas o para personas que viajan solas. Para familias con niños, es un poco pequeño.\n\nMarta, Valencia' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Dónde está el hostal?', o: ['En el casco antiguo, cerca de la playa.', 'Lejos del centro.', 'Al lado del aeropuerto.'], why: '*Está en el casco antiguo, a cinco minutos a pie de la playa.*' },
            { q: '¿Qué problema hubo?', o: ['No había agua caliente.', 'La habitación estaba sucia.', 'No había desayuno.'], why: '*No había agua caliente en la ducha.*' },
            { q: '¿Cómo es el precio?', o: ['Más barato que en los hoteles grandes.', 'Más caro que en los hoteles grandes.', 'Tan caro como en los hoteles grandes.'], why: '*Pagamos 70 euros por noche, menos que en los hoteles grandes.*' },
            { q: '¿Para quién no es muy bueno el hostal?', o: ['Para familias con niños.', 'Para parejas.', 'Para personas que viajan solas.'], why: '*Para familias con niños, es un poco pequeño.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap por and para in the review.', items: [
            { s: 'Pagamos 70 euros [por] noche.', why: '*por noche*: per night, the price.' },
            { s: 'Lo recomiendo [para] parejas.', why: 'The people it is good for: *para*.' },
            { s: 'Nos dio muchas ideas [para] visitar la ciudad.', why: 'Purpose: *para* + infinitive.' },
            { s: 'Voy a viajar con mi pareja [por] Andalucía.', why: 'Moving around a place: *por*.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the opposites.', pairs: [
            ['más', 'menos'],
            ['mejor', 'peor'],
            ['mayor', 'menor'],
            ['caro', 'barato'],
            ['tranquilo', 'ruidoso'],
            ['grande', 'pequeño'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'El metro es más rápido ___ el autobús.', o: ['que', 'como', 'de'], why: '*más … que*' },
      { q: 'Mi pueblo es tan tranquilo ___ el tuyo.', o: ['como', 'que', 'tan'], why: '*tan … como*' },
      { q: 'Es el hotel más moderno ___ la ciudad.', o: ['de', 'que', 'como'], why: 'Superlative: *el más moderno de*.' },
      { q: 'Esta playa es ___ que la otra. Tiene arena más fina y menos gente.', o: ['mejor', 'más buena', 'peor'], why: '*bueno → mejor*' },
      { q: 'No podemos salir ___ la lluvia.', o: ['por', 'para', 'de'], why: 'The reason: *por*.' },
      { q: 'Hemos venido a la costa ___ descansar.', o: ['para', 'por', 'a'], why: 'Purpose: *para* + infinitive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Ahora mismo estamos ___ el museo. (visitar)', a: ['visitando'], why: '*-ar → -ando*' },
      { q: 'Mi padre está ___ el periódico. (leer)', a: ['leyendo'], why: '*leer → leyendo*' },
      { q: 'Los niños están ___ en la habitación. (dormir)', a: ['durmiendo'], why: '*dormir → durmiendo*' },
      { q: 'Reservé el hotel ___ teléfono.', a: ['por'], why: 'The means: *por teléfono*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
      { s: 'Madrid es más grande [como] Sevilla.', a: ['que'], why: '*más … que*' },
      { s: 'Para mí, es el [más bueno] restaurante de la ciudad.', a: ['mejor'], why: '*bueno → el mejor*' },
      { s: 'Ana [está escribendo] una postal.', a: ['está escribiendo'], why: '*-ir → -iendo*: *escribiendo*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: '¿Podría cambiarnos de habitación, por favor?', why: 'A polite request: *¿Podría* + infinitive + pronoun?' },
      { a: 'Estamos esperando el tren para Cádiz.', why: '*estar* + gerund, then *para* + the place the train goes to.' },
    ] },
  ],
};
