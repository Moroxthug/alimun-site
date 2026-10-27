// Spanish A2 for travel, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Sightseeing',
  goal: 'Ask about sights, opening times and tickets, and talk about what you saw.',
  art: 'dragon',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['sightseeing', 'opening-times', 'tickets', 'preterito-perfecto', 'preterito-indefinido'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Sights, tours and tickets',
      about: 'Ask about opening times, tickets and tours.',
      art: 'sun',
      spreads: [
        [
          { t: 'dialogue', title: 'En la oficina de turismo', lines: [
            { who: 'Empleado', s: 'Buenos días. ¿En qué le puedo ayudar?' },
            { who: 'Inés', s: 'Buenos días. Estamos aquí solo dos días. ¿Qué se puede visitar?' },
            { who: 'Empleado', s: 'El casco antiguo es muy bonito, y el castillo de la colina es muy interesante.' },
            { who: 'Inés', s: '¿Qué horario tiene el castillo?' },
            { who: 'Empleado', s: 'De martes a domingo, de diez a seis. Los lunes está cerrado.' },
            { who: 'Inés', s: '¿Cuánto cuesta la entrada?' },
            { who: 'Empleado', s: 'Doce euros. Para estudiantes hay una entrada reducida de ocho euros.' },
            { who: 'Inés', s: '¿Hay también una visita guiada por la ciudad?' },
            { who: 'Empleado', s: 'Sí, todos los días a las cinco. El punto de encuentro es delante de la catedral. Dura dos horas.' },
            { who: 'Inés', s: '¡Estupendo, muchas gracias!' },
          ] },
        ],
        [
          { t: 'table', caption: 'Sightseeing', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['el monumento', 'sight, monument'],
            ['el casco antiguo', 'old town'],
            ['el castillo', 'castle'],
            ['la catedral', 'cathedral'],
            ['la entrada', 'ticket to go in'],
            ['la entrada reducida', 'ticket at a lower price'],
            ['el horario', 'opening hours'],
            ['abierto / cerrado', 'open / closed'],
            ['la visita guiada', 'guided tour'],
          ] },
          { t: 'text', md: 'With days, *el lunes* means one Monday. *Los lunes*, in the plural, means every Monday: *Los lunes el museo está cerrado.*' },
          { t: 'tip', art: 'owl', md: 'Many museums have a lower price for students, children or older people, and some are free on certain days or at certain hours. You often need to show a card. Ask: *¿Hay descuento para estudiantes?* In Latin America, *el centro histórico* is more common than *el casco antiguo*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the questions and answers.', pairs: [
            ['¿Qué horario tiene el museo?', 'Todos los días de nueve a cinco.'],
            ['¿Cuánto cuesta la entrada?', 'Diez euros; la reducida, seis.'],
            ['¿Cuánto dura la visita guiada?', 'Más o menos hora y media.'],
            ['¿Dónde es el punto de encuentro?', 'Delante de la entrada principal.'],
            ['¿Hay descuento para niños?', 'Sí, los menores de seis años no pagan.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Los lunes el museo está ___. No se puede visitar.', o: ['cerrado', 'abierto', 'reducido'], why: 'You cannot visit it, so it is closed: *cerrado*.' },
            { q: 'Soy estudiante. ¿Hay ___?', o: ['descuento', 'horario', 'monumento'], why: 'Students often pay less: *un descuento*.' },
            { q: 'La visita guiada ___ a las cinco.', o: ['empieza', 'dura', 'cuesta'], why: 'A time on the clock: the tour starts, *empieza*.' },
            { q: 'El museo está cerrado todos los lunes. Está cerrado ___.', o: ['los lunes', 'el lunes', 'en lunes'], why: 'Every Monday: *los lunes*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: '¿Qué horario tiene la catedral?', why: '*¿Qué horario*, then the verb *tiene* and the place.' },
            { a: '¿Cuánto cuesta la entrada reducida?', why: '*¿Cuánto cuesta*, then the ticket.' },
            { a: '¿A qué hora empieza la visita guiada?', why: '*¿A qué hora*, then the verb and the tour.' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Complete the text with the words.', extra: ['cerrado', 'salida'], items: [
            { q: 'El castillo está ___ de martes a domingo, de diez a seis.', a: 'abierto', why: 'On those days you can visit: *abierto*.' },
            { q: 'La ___ cuesta doce euros.', a: 'entrada', why: 'The price to go in: *la entrada*.' },
            { q: 'Los estudiantes tienen un ___.', a: 'descuento', why: 'A lower price: *un descuento*.' },
            { q: 'La visita ___ empieza a las cinco.', a: 'guiada', why: 'A tour with a guide: *la visita guiada*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Talking about the day in the past',
      about: 'Say what you did today and yesterday.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In Spain, for things you did **today**, **this morning** or **this week**, people use the **pretérito perfecto**: *Hoy hemos visitado la catedral.*\n\nFor **yesterday**, **last week** or a date, they use the **pretérito indefinido**: *Ayer visitamos el castillo.*' },
          { t: 'table', caption: 'Two past tenses', explain: ['head', 'col0'], head: ['', 'perfecto (hoy)', 'indefinido (ayer)'], rows: [
            ['I visited', 'he visitado', 'visité'],
            ['you visited', 'has visitado', 'visitaste'],
            ['she visited', 'ha visitado', 'visitó'],
            ['we visited', 'hemos visitado', 'visitamos'],
            ['you (plural) visited', 'habéis visitado', 'visitasteis'],
            ['they visited', 'han visitado', 'visitaron'],
          ] },
          { t: 'tip', art: 'owl', md: 'In much of Latin America people usually use the indefinido for today too: *Hoy visité el museo.* Both are correct; in Spain the perfecto is more usual for today.' },
        ],
        [
          { t: 'text', md: 'Some participles are irregular: *ver → visto*, *hacer → hecho*, *volver → vuelto*, *escribir → escrito*. And some indefinido forms are irregular too: *ir* and *ser* → *fui, fue, fuimos*; *hacer → hice, hizo*; *ver → vi, vio*; *estar → estuve*.' },
          { t: 'examples', items: [
            { s: 'Esta mañana **hemos visto** el palacio.', n: '*ver → visto*. *esta mañana* goes with the perfecto in Spain.' },
            { s: 'Hoy **he hecho** muchas fotos.', n: '*hacer → hecho*. In Spain: *hacer fotos*; in Latin America also *tomar fotos*.' },
            { s: 'Ayer **fuimos** a la playa.', n: '*ir*, indefinido: *fuimos*.' },
            { s: 'El sábado **vi** un concierto en la plaza.', n: '*ver*, indefinido: *vi*, with no accent.' },
            { s: 'La visita **fue** muy interesante.', n: '*ser*, indefinido: *fue*. The same form as *ir*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the pretérito perfecto.', verb: 'ver', tense: 'pretérito perfecto', rows: [
            ['yo', 'he visto', 'The participle is irregular: *visto*.'],
            ['tú', 'has visto'],
            ['él, ella, usted', 'ha visto'],
            ['nosotros', 'hemos visto'],
            ['vosotros', 'habéis visto|habeis visto'],
            ['ellos, ellas, ustedes', 'han visto'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Hoy ___ el museo del Prado.', o: ['hemos visitado', 'hemos visitando', 'habemos visitado'], why: '*hoy*: in Spain, the perfecto: *hemos* + *visitado*.' },
            { q: 'Ayer ___ al castillo.', o: ['fuimos', 'hemos ido', 'vamos'], why: '*ayer*: the indefinido, *fuimos*.' },
            { q: 'Esta mañana ___ muchas fotos.', o: ['he hecho', 'he hacido', 'he hecha'], why: '*hacer → hecho*, irregular.' },
            { q: 'El lunes pasado ___ un concierto.', o: ['vi', 'he visto', 'veo'], why: '*el lunes pasado*: the indefinido, *vi*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right past tense.', items: [
            { q: 'Hoy ___ la catedral. (visitar, nosotros)', a: ['hemos visitado', 'visitamos'], why: '*hoy*: in Spain *hemos visitado*. In Latin America *visitamos* is also correct.' },
            { q: 'Ayer ___ en un restaurante del puerto. (comer, yo)', a: ['comí', 'comi'], why: '*ayer*: indefinido. *-er* verbs, *yo*: *comí*.' },
            { q: 'Esta tarde ___ a la playa. (ir, ellos)', a: ['han ido', 'fueron'], why: '*esta tarde*: in Spain *han ido*. In Latin America *fueron*.' },
            { q: 'El viaje ___ fantástico. (ser, indefinido)', a: ['fue'], why: '*ser*, indefinido, *él*: *fue*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with ayer.', items: [
            { q: 'Hoy hemos visitado el castillo.', cue: 'Ayer', a: ['Ayer visitamos el castillo.'], why: 'With *ayer*: the indefinido, *visitamos*.' },
            { q: 'Hoy he visto la catedral.', cue: 'Ayer', a: ['Ayer vi la catedral.'], why: '*ver*, indefinido, *yo*: *vi*.' },
            { q: 'Hoy han ido al museo.', cue: 'Ayer', a: ['Ayer fueron al museo.'], why: '*ir*, indefinido, *ellos*: *fueron*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a city leaflet',
      about: 'Read a leaflet about a city and plan your visit.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In the tourist office you can take a leaflet: *un folleto*. Read this one about a small city.' },
          { t: 'reading', title: 'Bienvenidos a Villaclara', md: '**El casco antiguo**\nPasee por las calles estrechas del centro y descubra la Plaza Mayor, con sus cafés y sus terrazas.\n\n**La catedral**\nAbierta todos los días de 10:00 a 19:00. Entrada: 6 €, reducida 4 €. Los domingos por la mañana solo se puede entrar para la misa.\n\n**El Museo de la Ciudad**\nDe martes a sábado, de 10:00 a 14:00 y de 17:00 a 20:00; domingos, de 10:00 a 14:00. Los lunes, cerrado. Entrada gratuita los miércoles por la tarde.\n\n**Visita guiada**\nTodos los días a las 11:00 y a las 18:00, desde la oficina de turismo. Duración: dos horas. Precio: 10 € por persona. Hay que reservar un día antes.\n\n**El mercado**\nLos sábados por la mañana, en la plaza de San Juan: fruta, queso y artesanía de la región.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the leaflet. True, false or not given?', items: [
            { q: 'La catedral está abierta todos los días.', a: 't', why: '*Abierta todos los días de 10:00 a 19:00.*' },
            { q: 'El museo abre los lunes por la tarde.', a: 'f', why: '*Los lunes, cerrado.*' },
            { q: 'Los miércoles por la tarde no se paga en el museo.', a: 't', why: '*Entrada gratuita los miércoles por la tarde.*' },
            { q: 'Para la visita guiada no hace falta reservar.', a: 'f', why: '*Hay que reservar un día antes.*' },
            { q: 'El mercado es todos los días.', a: 'f', why: 'The market is *los sábados por la mañana*.' },
            { q: 'En la Plaza Mayor hay un hotel.', a: 'ng', why: 'The leaflet talks about cafés and terraces, not a hotel.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Plan your visit. Choose the right answer.', items: [
            { q: 'Dos adultos hacen la visita guiada. Pagan ___.', o: ['20 euros', '10 euros', '12 euros'], why: '10 € per person × 2 = 20 €.' },
            { q: 'Es domingo a las 16:00. ¿Puede visitar el museo?', o: ['No, el domingo cierra a las 14:00.', 'Sí, abre hasta las 20:00.', 'Sí, es gratis.'], why: 'On Sundays the museum is open *de 10:00 a 14:00*.' },
            { q: 'Quiere comprar queso de la región. ¿Cuándo va?', o: ['el sábado por la mañana', 'el lunes por la tarde', 'el domingo a las 18:00'], why: 'The market is *los sábados por la mañana*.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: verb and participle.', pairs: [
            ['ver', 'visto'],
            ['hacer', 'hecho'],
            ['volver', 'vuelto'],
            ['escribir', 'escrito'],
            ['visitar', 'visitado'],
            ['comer', 'comido'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Los lunes el museo está ___. No se puede entrar.', o: ['cerrado', 'abierto', 'gratuito'], why: 'You cannot go in: *cerrado*.' },
      { q: 'Para estudiantes hay una entrada ___.', o: ['reducida', 'guiada', 'cerrada'], why: 'A ticket at a lower price: *entrada reducida*.' },
      { q: 'Ayer ___ a la playa.', o: ['fuimos', 'hemos ido', 'vamos'], why: '*ayer*: the indefinido.' },
      { q: 'Hoy ___ muchas fotos.', o: ['he hecho', 'he hacido', 'he hecha'], why: '*hacer → hecho*.' },
      { q: 'El museo cierra ___: todas las semanas.', o: ['los lunes', 'el lunes pasado', 'un lunes'], why: 'The plural *los lunes* means every Monday.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: '¿Cuánto ___ la entrada? (costar)', a: ['cuesta'], why: '*costar* changes *o* to *ue*: *cuesta*.' },
      { q: 'Esta mañana hemos ___ el palacio. (ver)', a: ['visto'], why: 'Irregular participle: *ver → visto*.' },
      { q: 'El sábado pasado ___ un concierto. (ver, yo)', a: ['vi'], why: '*ver*, indefinido, *yo*: *vi*.' },
      { q: 'La visita ___ muy interesante. (ser, indefinido)', a: ['fue'], why: '*ser*, indefinido, *ella*: *fue*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿A qué hora empieza la visita guiada?', why: '*¿A qué hora*, then the verb.' },
      { a: 'Ayer visitamos el casco antiguo.', why: 'Time word, verb, then the place.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with ayer.', items: [
      { q: 'Hoy he comido paella.', cue: 'Ayer', a: ['Ayer comí paella.', 'Ayer comi paella.'], why: '*comer*, indefinido, *yo*: *comí*.' },
    ] },
  ],
};
