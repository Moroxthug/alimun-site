// Spanish A2, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'What did you do?',
  goal: 'Tell what you did yesterday, last weekend and on holiday.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['preterito-indefinido', 'irregular-verbs', 'time-expressions', 'sequencing', 'holidays'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'hablé, comí, viví',
      about: 'Talk about finished actions in the past with regular verbs.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'The **pretérito indefinido** tells what happened at a finished time in the past: yesterday, last week, in 2020. Take away *-ar*, *-er* or *-ir* and add the endings. Verbs in *-er* and *-ir* have the same endings.' },
          { t: 'table', caption: 'Pretérito indefinido: regular verbs', explain: ['head'], quiz: true, head: ['Person', 'hablar', 'comer', 'vivir'], rows: [
            ['yo', 'hablé', 'comí', 'viví'],
            ['tú', 'hablaste', 'comiste', 'viviste'],
            ['él, ella, usted', 'habló', 'comió', 'vivió'],
            ['nosotros, nosotras', 'hablamos', 'comimos', 'vivimos'],
            ['vosotros, vosotras', 'hablasteis', 'comisteis', 'vivisteis'],
            ['ellos, ellas, ustedes', 'hablaron', 'comieron', 'vivieron'],
          ] },
          { t: 'tip', art: 'owl', md: 'The accent matters: *hablo* means I speak, but *habló* means he or she spoke. The *nosotros* form of *-ar* and *-ir* verbs is the same as in the present: *hablamos, vivimos*. The time word tells you which one it is.' },
        ],
        [
          { t: 'text', md: 'These words tell you that the action is finished and the time is over. Use them with the *indefinido*.' },
          { t: 'table', caption: 'Time words', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['ayer', 'yesterday'],
            ['anteayer', 'the day before yesterday'],
            ['anoche', 'last night'],
            ['el lunes pasado', 'last Monday'],
            ['la semana pasada', 'last week'],
            ['el año pasado', 'last year'],
            ['hace dos años', 'two years ago'],
            ['en 2019', 'in 2019'],
          ] },
          { t: 'examples', items: [
            { s: 'Ayer **cené** con mis padres.', n: '*cenar → cené*, with an accent.' },
            { s: 'La semana pasada **escribimos** un correo al casero.', n: '*escribir → escribimos*.' },
            { s: 'Mi hermana **vivió** en Lisboa hace dos años.', n: '*hace* + time: ago.' },
            { s: '¿**Visteis** el partido anoche?', n: '*ver → visteis*. *ver* has no accents: *vi, vio*.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Some verbs change their spelling in the *yo* form to keep the sound: *llegar → llegué*, *pagar → pagué*, *buscar → busqué*, *empezar → empecé*. With *leer*, the *i* becomes *y*: *leyó, leyeron*.' },
          { t: 'ex', kind: 'conjugate', h: 'Write the pretérito indefinido of *trabajar*.', verb: 'trabajar', tense: 'pretérito indefinido', rows: [
            ['yo', 'trabajé'], ['tú', 'trabajaste'], ['él, ella, usted', 'trabajó'], ['nosotros', 'trabajamos'], ['vosotros', 'trabajasteis'], ['ellos, ustedes', 'trabajaron'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Ayer yo ___ a mi abuela por teléfono.', o: ['llamé', 'llamó', 'llamo'], why: '*yo* in the past: *llamé*. *llamo* is the present.' },
            { q: 'El sábado pasado Pedro ___ una paella para todos.', o: ['cocinó', 'cociné', 'cocina'], why: '*él* in the past: *cocinó*, with an accent.' },
            { q: 'Anoche mis amigos y yo ___ en un restaurante chino.', o: ['comimos', 'comieron', 'comí'], why: '*mis amigos y yo* = *nosotros*: *comimos*.' },
            { q: '¿A qué hora ___ vosotros a casa anoche?', o: ['volvisteis', 'volvieron', 'volviste'], why: '*vosotros*: *volvisteis*.' },
            { q: 'Mis padres ___ en Francia hace muchos años.', o: ['vivieron', 'vivimos', 'vivió'], why: '*ellos*: *vivieron*.' },
            { q: 'Ayer ___ el autobús a las ocho. (yo, tomar)', o: ['tomé', 'tomó', 'tomí'], why: '*-ar* verb, *yo*: *tomé*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the pretérito indefinido.', items: [
            { q: 'El año pasado yo ___ a tocar la guitarra. (empezar)', a: ['empecé'], why: '*empezar*: the *z* becomes *c* before *e*: *empecé*.' },
            { q: 'Anoche Rosa ___ dos capítulos del libro. (leer)', a: ['leyó'], why: '*leer*: *ella leyó*.' },
            { q: 'Ayer nosotros ___ mucho en la fiesta. (bailar)', a: ['bailamos'], why: '*nosotros*: *bailamos*.' },
            { q: 'Yo ___ al aeropuerto a las seis de la mañana. (llegar)', a: ['llegué'], why: '*llegar*: add *u* to keep the sound: *llegué*.' },
            { q: '¿Tú ___ la película anoche? (ver)', a: ['viste'], why: '*ver*: *tú viste*.' },
            { q: 'Mis vecinos ___ el piso en 2021. (comprar)', a: ['compraron'], why: '*ellos*: *compraron*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'fui, tuve, hice',
      about: 'Use the most common irregular verbs in the past.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Some very common verbs are irregular in the *indefinido*. **ser** and **ir** have exactly the same forms: *fui* means I was or I went. The sentence tells you which.' },
          { t: 'table', caption: 'ser / ir, tener, hacer', explain: ['head'], quiz: true, head: ['Person', 'ser / ir', 'tener', 'hacer'], rows: [
            ['yo', 'fui', 'tuve', 'hice'],
            ['tú', 'fuiste', 'tuviste', 'hiciste'],
            ['él, ella, usted', 'fue', 'tuvo', 'hizo'],
            ['nosotros, nosotras', 'fuimos', 'tuvimos', 'hicimos'],
            ['vosotros, vosotras', 'fuisteis', 'tuvisteis', 'hicisteis'],
            ['ellos, ellas, ustedes', 'fueron', 'tuvieron', 'hicieron'],
          ] },
          { t: 'examples', items: [
            { s: 'El verano pasado **fuimos** a Galicia.', n: '*ir a* + place: *fuimos*, we went.' },
            { s: 'La fiesta **fue** muy divertida.', n: '*ser*: *fue*, it was.' },
            { s: 'Ayer **tuve** un examen de inglés.', n: '*tener → tuve*.' },
            { s: '¿Qué **hiciste** el fin de semana?', n: '*hacer → hiciste*. *él* form: *hizo*, with *z*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'estar, poder, venir', explain: ['head'], quiz: true, head: ['Person', 'estar', 'poder', 'venir'], rows: [
            ['yo', 'estuve', 'pude', 'vine'],
            ['tú', 'estuviste', 'pudiste', 'viniste'],
            ['él, ella, usted', 'estuvo', 'pudo', 'vino'],
            ['nosotros, nosotras', 'estuvimos', 'pudimos', 'vinimos'],
            ['vosotros, vosotras', 'estuvisteis', 'pudisteis', 'vinisteis'],
            ['ellos, ellas, ustedes', 'estuvieron', 'pudieron', 'vinieron'],
          ] },
          { t: 'tip', art: 'owl', md: 'These irregular verbs share the same endings: *-e, -iste, -o, -imos, -isteis, -ieron*. They have **no accents**: *tuve, pudo, vine*, not *tuvé* or *pudó*.' },
          { t: 'examples', items: [
            { s: '**Estuve** dos semanas en Perú.', n: '*estar → estuve*.' },
            { s: 'Lo siento, ayer no **pude** ir a tu cumpleaños.', n: '*poder → pude*.' },
            { s: 'Mis primos **vinieron** a la boda desde México.', n: '*venir → vinieron*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'memory', h: 'Find the pairs: each verb and its yo form in the past.', pairs: [
            ['tener', 'tuve'], ['hacer', 'hice'], ['estar', 'estuve'], ['poder', 'pude'], ['venir', 'vine'], ['ir', 'fui'],
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the pretérito indefinido of *hacer*.', verb: 'hacer', tense: 'pretérito indefinido', rows: [
            ['yo', 'hice'], ['tú', 'hiciste'], ['él, ella, usted', 'hizo'], ['nosotros', 'hicimos'], ['vosotros', 'hicisteis'], ['ellos, ustedes', 'hicieron'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'El domingo pasado mi familia y yo ___ al campo.', o: ['fuimos', 'fueron', 'fui'], why: '*ir*, *nosotros*: *fuimos*.' },
            { q: 'Mi hermano ___ un accidente con la bici, pero está bien.', o: ['tuvo', 'tuve', 'tenió'], why: '*tener*, *él*: *tuvo*.' },
            { q: 'Ayer ___ mucho frío en Burgos.', o: ['hizo', 'hice', 'hació'], why: 'Weather uses *hacer*: *hizo frío*.' },
            { q: 'El concierto ___ fantástico.', o: ['fue', 'fui', 'fueron'], why: '*ser*, *él*: *fue*.' },
            { q: '¿Por qué no ___ a la reunión, chicos?', o: ['vinisteis', 'vinieron', 'venisteis'], why: '*venir*, *vosotros*: *vinisteis*, with *i*.' },
            { q: 'Elena ___ en casa todo el día con su hijo.', o: ['estuvo', 'estuve', 'estó'], why: '*estar*, *ella*: *estuvo*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write it correctly.', items: [
            { s: 'Ayer yo [tení] una cita con el dentista.', a: ['tuve'], why: '*tener* is irregular: *yo tuve*.' },
            { s: 'Mi madre [hació] una tarta de manzana.', a: ['hizo'], why: '*hacer*, *ella*: *hizo*.' },
            { s: 'Nosotros no [podimos] dormir por el ruido.', a: ['pudimos'], why: '*poder*: the *o* becomes *u*: *pudimos*.' },
            { s: 'El año pasado mis padres [fuieron] a Roma.', a: ['fueron'], why: '*ir*, *ellos*: *fueron*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the pretérito indefinido.', items: [
            { q: 'Anoche ___ al cine con Javier. (yo, ir)', a: ['fui'], why: '*ir*, *yo*: *fui*.' },
            { q: '¿Qué ___ vosotros el sábado? (hacer)', a: ['hicisteis'], why: '*hacer*, *vosotros*: *hicisteis*.' },
            { q: 'Mis amigos ___ a cenar a mi casa. (venir)', a: ['vinieron'], why: '*venir*, *ellos*: *vinieron*.' },
            { q: 'El viaje ___ muy largo. (ser)', a: ['fue'], why: '*ser*, *él*: *fue*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'First, then, in the end',
      about: 'Tell a short story in the right order.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To tell a story in order, use **primero** (first), **luego** and **después** (then, after that), **más tarde** (later), **por la tarde / por la noche** and **al final** (in the end). **Después de** + infinitive means after doing something: *después de comer*.' },
          { t: 'examples', items: [
            { s: '**Primero** desayunamos en el hotel.', n: '*primero* starts the story.' },
            { s: '**Luego** visitamos la catedral.', n: '*luego*: then.' },
            { s: '**Después de** comer, dormimos la siesta.', n: '*después de* + infinitive, not the past form.' },
            { s: '**Por la noche** cenamos en el puerto.', n: '*por la noche*: in the evening, at night.' },
            { s: '**Al final**, volvimos al hotel muy cansados.', n: '*al final* closes the story.' },
          ] },
        ],
        [
          { t: 'dialogue', title: '¿Qué tal el fin de semana?', lines: [
            { who: 'Diego', s: '¡Hola, Sara! ¿Qué tal el fin de semana?' },
            { who: 'Sara', s: 'Muy bien. El sábado fui a Toledo con mi hermana.' },
            { who: 'Diego', s: '¡Qué bien! ¿Y qué hicisteis?' },
            { who: 'Sara', s: 'Primero paseamos por el casco antiguo. Luego visitamos un museo.' },
            { who: 'Diego', s: '¿Comisteis allí?' },
            { who: 'Sara', s: 'Sí, en un restaurante pequeño. Después de comer, compramos unos dulces típicos.' },
            { who: 'Diego', s: '¿Y volvisteis tarde?' },
            { who: 'Sara', s: 'No. Al final perdimos el tren de las siete y tomamos el de las nueve.' },
          ] },
          { t: 'tip', art: 'owl', md: 'To ask about someone’s weekend, say *¿Qué tal el fin de semana?* or *¿Qué hiciste el fin de semana?* In Spain people say *el coche* for car; in much of Latin America they say *el carro* or *el auto*.' },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete Sara’s story with the words in the box.', extra: ['nunca', 'mañana'], items: [
            { q: '___ paseamos por el casco antiguo.', a: 'Primero', why: '*Primero* starts the story.' },
            { q: 'Visitamos un museo y ___ comimos en un restaurante.', a: 'luego', why: '*luego*: then, the next action.' },
            { q: '___ de comer, compramos unos dulces.', a: 'Después', why: '*Después de* + infinitive: after eating.' },
            { q: '___, perdimos el tren y volvimos a las nueve.', a: 'Al final', why: '*Al final* closes the story.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Read the dialogue again. True or false?', items: [
            { q: 'Sara fue a Toledo con su hermana.', a: 't', why: '*El sábado fui a Toledo con mi hermana.*' },
            { q: 'Primero visitaron un museo.', a: 'f', why: 'First they walked around the old town: *Primero paseamos por el casco antiguo.*' },
            { q: 'Volvieron en el tren de las siete.', a: 'f', why: 'They missed the seven o’clock train and took the nine o’clock one.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'build', h: 'Build the sentences. Two words do not belong.', items: [
            { a: 'Primero desayunamos y luego fuimos a la playa.', extra: ['fueron', 'desayunan'], why: 'The whole story is about *nosotros*: *desayunamos*, *fuimos*.' },
            { a: 'Después de cenar, vimos una película.', extra: ['cenamos', 'vemos'], why: '*después de* + infinitive (*cenar*). *vimos* is the past.' },
            { a: 'Al final volví a casa muy tarde.', extra: ['volvió', 'mucho'], why: '*yo*: *volví*. *muy* before *tarde*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Después de ___, fui a dormir.', o: ['cenar', 'cené', 'ceno'], why: '*después de* + infinitive.' },
            { q: '___ llegamos al hotel y luego salimos a cenar.', o: ['Primero', 'Al final', 'Después de'], why: 'The first action: *Primero*.' },
            { q: 'Esperamos dos horas y, ___, llegó el autobús.', o: ['al final', 'primero', 'ayer'], why: 'What happened in the end: *al final*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Reading: a holiday blog',
      about: 'Read a blog post about a trip and follow the story.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'Cinco días en Asturias', md: 'Este verano mi amiga Clara y yo fuimos cinco días a Asturias, en el norte de España. Fue nuestro primer viaje juntas y fue genial.\n\nEl lunes llegamos a Oviedo en tren. Primero dejamos las maletas en el hotel y luego paseamos por el centro. Por la noche cenamos en una sidrería y probamos la sidra, la bebida típica de la región.\n\nEl martes alquilamos un coche y fuimos a la costa. Estuvimos en una playa preciosa, pero el agua del mar es muy fría en el norte y no nos bañamos. Después de comer, visitamos un pueblo de pescadores con casas de muchos colores.\n\nEl miércoles hizo mal tiempo: llovió todo el día. Por eso fuimos a un museo y por la tarde leímos en una cafetería.\n\nEl jueves subimos a la montaña. Caminamos cinco horas y vimos vacas, lagos y unas vistas increíbles. Al final del día, Clara tuvo un pequeño problema: perdió su móvil en el camino. Por suerte, un señor muy amable lo encontró y lo llevó a nuestro hotel.\n\nEl viernes volvimos a Madrid, cansadas pero muy contentas. ¡Quiero volver el año que viene!\n\nMarta' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Marta y Clara llegaron a Oviedo en avión.', a: 'f', why: '*El lunes llegamos a Oviedo en tren.*' },
            { q: 'El martes se bañaron en la playa.', a: 'f', why: '*el agua del mar es muy fría en el norte y no nos bañamos.*' },
            { q: 'El miércoles llovió.', a: 't', why: '*El miércoles hizo mal tiempo: llovió todo el día.*' },
            { q: 'El hotel de Oviedo fue muy caro.', a: 'ng', why: 'The blog does not say how much the hotel cost.' },
            { q: 'Un señor encontró el móvil de Clara.', a: 't', why: '*un señor muy amable lo encontró.*' },
            { q: 'Marta no quiere volver a Asturias.', a: 'f', why: '*¡Quiero volver el año que viene!*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the blog again and choose.', items: [
            { q: '¿Qué hicieron primero el lunes?', o: ['Dejaron las maletas en el hotel.', 'Cenaron en una sidrería.', 'Alquilaron un coche.'], why: '*Primero dejamos las maletas en el hotel.*' },
            { q: '¿Qué hicieron el día de lluvia?', o: ['Fueron a un museo y leyeron.', 'Subieron a la montaña.', 'Visitaron un pueblo de pescadores.'], why: '*fuimos a un museo y por la tarde leímos en una cafetería.*' },
            { q: '¿Qué le pasó a Clara el jueves?', o: ['Perdió su móvil.', 'Tuvo un accidente.', 'Perdió el tren.'], why: '*perdió su móvil en el camino.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the irregular verbs in the pretérito indefinido.', items: [
            { s: 'Este verano mi amiga Clara y yo [fuimos] cinco días a Asturias.', why: '*ir → fuimos*.' },
            { s: '[Estuvimos] en una playa preciosa.', why: '*estar → estuvimos*.' },
            { s: 'El miércoles [hizo] mal tiempo.', why: '*hacer → hizo*.' },
            { s: 'Al final del día, Clara [tuvo] un pequeño problema.', why: '*tener → tuvo*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ayer yo ___ en casa todo el día.', o: ['trabajé', 'trabajó', 'trabajo'], why: '*Ayer* and *yo*: *trabajé*.' },
      { q: 'El fin de semana pasado ___ a ver a mis abuelos.', o: ['fuimos', 'fueron', 'vamos'], why: '*ir*, *nosotros*, in the past: *fuimos*.' },
      { q: '¿Qué ___ tú anoche?', o: ['hiciste', 'hizo', 'haciste'], why: '*hacer*, *tú*: *hiciste*.' },
      { q: 'Mis padres se casaron ___ treinta años.', o: ['hace', 'desde', 'en'], why: '*hace* + time: ago.' },
      { q: 'Después de ___, salimos a pasear.', o: ['comer', 'comimos', 'comemos'], why: '*después de* + infinitive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the pretérito indefinido.', items: [
      { q: 'La semana pasada Ana ___ un problema con su jefe. (tener)', a: ['tuvo'], why: '*tener*, *ella*: *tuvo*.' },
      { q: 'Yo ___ la cuenta del restaurante. (pagar)', a: ['pagué'], why: '*pagar*: add *u* in the *yo* form: *pagué*.' },
      { q: 'Mis amigos no ___ venir a la fiesta. (poder)', a: ['pudieron'], why: '*poder*, *ellos*: *pudieron*.' },
      { q: '¿Vosotros ___ en el hotel o en un camping? (dormir)', a: ['dormisteis'], why: '*dormir*, *vosotros*: *dormisteis*.' },
    ] },
    { t: 'ex', kind: 'bank', h: 'Complete the story with the words in the box.', extra: ['siempre'], items: [
      { q: '___ fuimos al mercado.', a: 'Primero', why: 'The first action: *Primero*.' },
      { q: 'Compramos fruta y ___ volvimos a casa.', a: 'luego', why: 'The next action: *luego*.' },
      { q: '___, cocinamos todos juntos.', a: 'Al final', why: 'The last action: *Al final*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'El verano pasado estuve dos semanas en México.', why: 'Time, verb, then how long and where.' },
      { a: '¿A qué hora volvisteis anoche?', why: 'Question words first, then the verb.' },
    ] },
  ],
};
