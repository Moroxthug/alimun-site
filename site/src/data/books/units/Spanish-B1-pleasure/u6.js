// Spanish B1 for travel, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Travel stories',
  goal: 'Tell stories about your travels.',
  art: 'dragon',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['indefinido', 'imperfecto', 'pluscuamperfecto', 'time-linkers', 'feelings', 'adjectives'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Telling a story in the past',
      about: 'Use the right past tenses and link the events of a story.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A story uses three past tenses. The **indefinido** tells the events, one after the other: *llegué*, *pregunté*. The **imperfecto** describes the background: the weather, the place, how you felt: *hacía frío*, *estaba cansado*. The **pluscuamperfecto** (*había* + participle) is for something that happened before: *había perdido el billete*.' },
          { t: 'examples', items: [
            { s: '**Hacía** mucho calor y la plaza **estaba** llena de gente.', n: 'Background: imperfecto.' },
            { s: 'De repente, **empezó** a llover.', n: 'An event: indefinido.' },
            { s: '**Estaba** en la estación cuando **vi** el anuncio.', n: 'Background, then an event that interrupts it.' },
            { s: 'Cuando llegué, el tren ya **había salido**.', n: 'The train left before I arrived: pluscuamperfecto.' },
          ] },
          { t: 'table', caption: 'Irregular verbs in stories', quiz: true, head: ['Infinitivo', 'yo', 'él / ella'], rows: [
            ['ir / ser', 'fui', 'fue'],
            ['tener', 'tuve', 'tuvo'],
            ['estar', 'estuve', 'estuvo'],
            ['hacer', 'hice', 'hizo'],
            ['poder', 'pude', 'pudo'],
            ['decir', 'dije', 'dijo'],
            ['venir', 'vine', 'vino'],
            ['poner', 'puse', 'puso'],
          ] },
        ],
        [
          { t: 'table', caption: 'Linking the events of a story', explain: ['head', 'col1'], head: ['Spanish', 'When you use it'], rows: [
            ['al principio', 'for the start of the story'],
            ['entonces / luego', 'for the next event'],
            ['de repente', 'for something sudden'],
            ['mientras', 'for two things at the same time'],
            ['al cabo de + time', 'after some time had passed'],
            ['antes de / después de + infinitive', 'before or after an action'],
            ['al final / por fin', 'for the end of the story'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain, for something that happened today, people often use the *pretérito perfecto*: *Hoy he perdido el autobús*. In Latin America, people usually use the indefinido: *Hoy perdí el autobús*. In a story about another day, everyone uses the indefinido.' },
          { t: 'ex', kind: 'order', h: 'Build the sentences of a story.', items: [
            { a: 'De repente, el autobús se paró en medio de la carretera.', why: '*de repente* + an event in the indefinido: *se paró*.' },
            { a: 'Mientras esperábamos, empezó a nevar.', why: '*mientras* + imperfecto for the background; the event in the indefinido.' },
            { a: 'Al cabo de una hora, por fin llegó la grúa.', why: '*al cabo de* + time: after an hour.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Cuando llegamos al hotel, ___ mucho frío.', o: ['hacía', 'hizo', 'ha hecho'], why: 'The weather is background: imperfecto.' },
            { q: 'Ayer ___ a Toledo en tren.', o: ['fuimos', 'íbamos', 'habíamos ido'], why: 'A finished event on a past day: indefinido.' },
            { q: 'Cuando llegué al andén, el tren ya ___.', o: ['había salido', 'salía', 'sale'], why: 'It left before I arrived: pluscuamperfecto.' },
            { q: 'Mientras ___ la cena, se fue la luz.', o: ['preparaba', 'preparé', 'he preparado'], why: '*mientras* + imperfecto for the action that was in progress.' },
            { q: '___ de cenar, salimos a dar un paseo.', o: ['Después', 'Mientras', 'De repente'], why: '*después de* + infinitive: after dinner.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the indefinido.', items: [
            { q: 'El verano pasado ___ un viaje por Colombia. (hacer, yo)', a: ['hice'], why: '*hacer*: *hice*, without an accent.' },
            { q: 'Mi amiga no ___ venir porque estaba enferma. (poder)', a: ['pudo'], why: '*poder*: *pudo*.' },
            { q: 'Al final, el guía nos ___ la verdad. (decir)', a: ['dijo'], why: '*decir*: *dijo*.' },
            { q: 'Esa noche ___ que dormir en el aeropuerto. (tener, nosotros)', a: ['tuvimos'], why: '*tener*: *tuv-* + *-imos*.' },
            { q: 'Mis padres ___ a verme a Lima en mayo. (venir)', a: ['vinieron'], why: '*venir*: *vinieron*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'memory', h: 'Find the pairs: infinitive and indefinido.', pairs: [
            ['tener', 'tuve'],
            ['estar', 'estuve'],
            ['hacer', 'hice'],
            ['poder', 'pude'],
            ['decir', 'dije'],
            ['venir', 'vine'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Places, people and feelings',
      about: 'Make your story come alive with adjectives and words for feelings.',
      art: 'cat',
      spreads: [
        [
          { t: 'table', caption: 'Describing places and people', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['pintoresco', 'pretty and special, like a picture'],
            ['animado', 'full of people and life'],
            ['tranquilo', 'calm and quiet'],
            ['abandonado', 'empty, nobody lives or works there'],
            ['amable', 'kind and friendly'],
            ['servicial', 'happy to help'],
            ['desconfiado', 'not trusting other people'],
            ['agotado', 'very, very tired'],
          ] },
          { t: 'tip', art: 'owl', md: 'A good travel story has details. Instead of *El pueblo era bonito*, say what you saw: *El pueblo era pintoresco, con casas blancas y calles estrechas.* In a story, descriptions of places and people go in the imperfecto: *era*, *tenía*, *había*.' },
        ],
        [
          { t: 'text', md: 'For feelings in a story, use *me sentí* + adjective, *me puse* + adjective (for a quick change: *me puse nervioso*), *me dio miedo* or *me dio vergüenza*, and *me alegré de* + infinitive.\n\nRemember that the adjective agrees with the person: *Ana se puso nerviosa*, *nos sentimos agotados*.' },
          { t: 'examples', items: [
            { s: 'Cuando vi el precio, **me quedé** sorprendido.', n: '*quedarse* + adjective: how you were after something happened.' },
            { s: 'En el avión **me puse** muy nerviosa.', n: '*ponerse* + adjective: a sudden change. *nerviosa*: a woman is speaking.' },
            { s: 'Andar sola por la noche **me dio** un poco de miedo.', n: '*dar miedo*: to make you afraid. It works like *gustar*.' },
            { s: '**Me alegré** mucho **de** verte en el aeropuerto.', n: '*alegrarse de* + infinitive: to be happy about something.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Me alegré mucho ___ conocer a tu familia.', o: ['de', 'a', 'por'], why: '*alegrarse de* + infinitive.' },
            { q: 'Cuando perdí el pasaporte, me ___ muy nervioso.', o: ['puse', 'di', 'hice'], why: '*ponerse nervioso*: to become nervous.' },
            { q: 'Los perros grandes me ___ miedo.', o: ['dan', 'da', 'ponen'], why: '*dar miedo* works like *gustar*. *los perros* is plural: *dan*.' },
            { q: 'Después de diez horas de autobús, nos sentimos ___.', o: ['agotados', 'agotado', 'agotar'], why: '*nosotros*: plural *agotados*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the feeling and the situation.', pairs: [
            ['Me dio vergüenza.', 'Me caí delante de todo el autobús.'],
            ['Me quedé sorprendido.', 'El hotel era mucho más bonito que en las fotos.'],
            ['Me puse nervioso.', 'Quedaban dos minutos y no encontraba la puerta de embarque.'],
            ['Me sentí aliviado.', 'Por fin encontré mi maleta.'],
            ['Me alegré mucho.', 'Mi amigo vino a buscarme a la estación.'],
          ] },
          { t: 'ex', kind: 'wordform', h: 'Write the right form of the word.', items: [
            { q: 'Me quedé muy ___ cuando vi el precio. (a man is speaking)', base: 'sorprender', a: ['sorprendido'], why: 'The participle of *sorprender* is used as an adjective: *sorprendido*.' },
            { q: 'Antes del vuelo, mi hermana estaba muy ___.', base: 'nervios', a: ['nerviosa'], why: '*nervioso*, *nerviosa*: it agrees with *mi hermana*.' },
            { q: 'Después de la excursión estábamos ___.', base: 'cansar', a: ['cansados', 'cansadas'], why: '*cansado*, plural *cansados* for *nosotros*.' },
            { q: 'La señora del hostal fue muy ___ con nosotros.', base: 'amabilidad', a: ['amable'], why: 'The adjective of *amabilidad* is *amable*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the adjectives from the table in this lesson.', items: [
            { s: 'El pueblo era muy [pintoresco], pero las calles estaban casi vacías y la estación parecía [abandonada].', why: '*pintoresco* and *abandonada* are in the table. *vacías* is a normal adjective.' },
            { s: 'La plaza estaba muy [animada] y el dueño del bar fue muy [servicial].', why: '*animada* agrees with *la plaza*; *servicial* is the same for men and women.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with an adjective.', items: [
            { q: 'No había nadie en la playa. Todo estaba muy ___. (calm, quiet)', a: ['tranquilo'], why: '*tranquilo*: calm and quiet. It agrees with *todo*.' },
            { q: 'Después de caminar veinte kilómetros, estaba ___. (very tired)', a: ['agotado', 'agotada'], why: '*agotado*: very, very tired.' },
            { q: 'El hombre nos ayudó con las maletas. Fue muy ___. (kind)', a: ['amable', 'servicial'], why: '*amable*: kind. *servicial* also fits: happy to help.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a travel story with a surprise',
      about: 'Read a story told in the past and follow what happens.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'Read Carla’s story. Look at how the three past tenses work together: events, background, and things that had happened before.' },
          { t: 'reading', title: 'En el pueblo equivocado', md: 'El verano pasado quería pasar unos días en San Martín, un pueblo de montaña. Había reservado una habitación en una casa rural y llevaba semanas pensando en el viaje. En la estación de autobuses había mucha gente y mucho ruido. Compré el billete deprisa, subí al autobús y me dormí enseguida, porque me había levantado a las cuatro de la mañana.\n\nCuando me desperté, el autobús estaba parando en una plaza pequeña. Bajé y empecé a buscar la casa rural, pero nadie conocía la dirección. Al cabo de media hora, le pregunté a un señor mayor que estaba sentado en la puerta de un bar. Miró mi reserva y se echó a reír. «Esa calle no está aquí», me dijo. «Esto es San Martín de la Sierra. Usted busca San Martín del Río, ¡a doscientos kilómetros!»\n\nMe quedé helada. El siguiente autobús no salía hasta la mañana siguiente. Por suerte, el señor, que se llamaba Rafael, fue muy amable. Llamó a su hermana, que tenía una habitación libre. Por la noche cené con toda la familia: había tortilla, pan del horno del pueblo y todos contaban historias.\n\nA la mañana siguiente, Rafael me llevó a la parada. Al despedirse, me dijo: «El año que viene vuelves, pero esta vez a propósito.» Y eso es exactamente lo que hice.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read Carla’s story. True, false or not given?', items: [
            { q: 'Carla había reservado un sitio para dormir antes del viaje.', a: 't', why: '*Había reservado una habitación en una casa rural.*' },
            { q: 'Carla se durmió en el autobús porque estaba muy cansada.', a: 't', why: 'She fell asleep because she had got up at four in the morning.' },
            { q: 'En la plaza mucha gente conocía la dirección.', a: 'f', why: '*nadie conocía la dirección*.' },
            { q: 'Rafael trabajaba en el bar.', a: 'ng', why: 'He was sitting at the door of a bar, but we do not know if he worked there.' },
            { q: 'Carla durmió en casa de la hermana de Rafael.', a: 't', why: 'His sister had a free room.' },
            { q: 'Carla nunca volvió al pueblo.', a: 'f', why: '*Y eso es exactamente lo que hice*: she went back.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Carla estaba en el pueblo equivocado porque ___', o: ['había dos pueblos con casi el mismo nombre.', 'el autobús se había roto.', 'había perdido la reserva.'], why: 'She wanted *San Martín del Río*, but she was in *San Martín de la Sierra*.' },
            { q: '*Me quedé helada* quiere decir: ___', o: ['Me sorprendí mucho y no supe qué hacer.', 'Tenía mucho frío.', 'Me puse muy contenta.'], why: '*quedarse helado*: to be shocked. It is not about the weather here.' },
            { q: '*A propósito* quiere decir: ___', o: ['porque quieres, no por error', 'por error', 'muy pronto'], why: 'Rafael means: next time, come to this village because you want to.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the pluscuamperfecto.', items: [
            { s: '[Había reservado] una habitación en una casa rural.', why: '*había* + participle: she booked before the trip.' },
            { s: 'Me dormí enseguida, porque me [había levantado] a las cuatro de la mañana.', why: 'She got up before she fell asleep: *había levantado*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Cuando salimos del hotel, ___ un sol precioso.', o: ['hacía', 'hizo', 'había hecho'], why: 'The weather as background: imperfecto.' },
      { q: 'Cuando llegué a la fiesta, mis amigos ya se ___.', o: ['habían ido', 'iban', 'fueron'], why: 'They left before I arrived: pluscuamperfecto.' },
      { q: '___, se apagaron todas las luces del tren.', o: ['De repente', 'Mientras', 'Antes de'], why: 'Something sudden: *de repente*.' },
      { q: 'Me alegré mucho ___ verte.', o: ['de', 'a', 'en'], why: '*alegrarse de* + infinitive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'El año pasado ___ a Guatemala con mi hermano. (ir, yo)', a: ['fui'], why: '*ir*: *fui*.' },
      { q: 'Mientras ___ la cena, empezó a llover. (preparar, nosotros)', a: ['preparábamos'], why: '*mientras* + imperfecto: *preparábamos*.' },
      { q: 'Al ___ de dos horas, llegó el autobús. (after)', a: ['cabo'], why: '*al cabo de* + time.' },
      { q: 'Cuando perdí la maleta, me ___ muy nerviosa. (ponerse)', a: ['puse'], why: '*ponerse nervioso*: *me puse*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
      { s: 'Ayer [hacía] una excursión a la montaña.', a: ['hice'], why: 'A finished event on a past day: indefinido *hice*.' },
      { s: 'Los perros me [da] miedo.', a: ['dan'], why: '*dar miedo* works like *gustar*: *los perros*, *dan*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'El imperfecto se usa para describir el lugar y el tiempo en una historia.', a: 't', why: 'Descriptions and background go in the imperfecto.' },
      { q: 'En Latinoamérica se dice normalmente *Hoy he perdido el autobús*.', a: 'f', why: 'In Latin America people usually say *Hoy perdí el autobús*.' },
    ] },
  ],
};
