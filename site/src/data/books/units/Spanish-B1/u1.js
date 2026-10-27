// Spanish B1, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Life stories',
  goal: 'Tell stories about the past, with the background and the events in the right tenses.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['indefinido-imperfecto', 'pluscuamperfecto', 'story-connectors', 'life-stories'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Events and background',
      about: 'Choose between the indefinido and the imperfecto when you tell a story.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A story about the past usually needs two tenses. The **indefinido** (*llegué*, *salió*) tells the **events**: what happened, one thing after another. The **imperfecto** (*estaba*, *llovía*) gives the **background**: what was happening, how people and places were, the time and the weather.' },
          { t: 'table', caption: 'Two tenses in one story', explain: ['head', 'col0'], head: ['', 'Indefinido: the events', 'Imperfecto: the background'], rows: [
            ['Example', 'Sonó el teléfono.', 'Estaba en casa.'],
            ['Example', 'Conocí a Pedro en una fiesta.', 'Tenía veinte años y vivía en Valencia.'],
            ['Time words', 'ayer, un día, de repente, en 2015', 'siempre, a menudo, todos los días, mientras'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: '**Estaba** en casa cuando **sonó** el teléfono.', n: '*Estaba*: the background. *Sonó*: the event that happens in the middle of it.' },
            { s: '**Hacía** sol y la playa **estaba** llena de gente.', n: 'Weather and descriptions in a story: imperfecto.' },
            { s: '**Llegué** a Sevilla, **dejé** las maletas y **salí** a cenar.', n: 'A list of events, one after the other: indefinido.' },
            { s: 'Mientras **cocinaba**, **escuchaba** la radio.', n: 'Two actions at the same time, both background: imperfecto.' },
            { s: '**Viví** en Lima cinco años.', n: 'A finished period with a clear length takes the indefinido, even when it is long.' },
          ] },
          { t: 'tip', art: 'churro', md: 'For an action in progress you can also use *estaba* + gerundio: *Estaba duchándome cuando llamaste.* The event that interrupts it stays in the indefinido.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Indefinido or imperfecto? Choose.', items: [
            { q: 'Cuando ___ pequeña, vivía con mis abuelos.', o: ['era', 'fui', 'he sido'], why: 'A description of a time in your life is background: imperfecto, *era*.' },
            { q: 'Ayer ___ a Pedro en el mercado.', o: ['vi', 'veía', 'había visto'], why: '*Ayer* and one finished event: indefinido, *vi*.' },
            { q: 'Leía en el sofá cuando de repente ___ la luz.', o: ['se fue', 'se iba', 'se ha ido'], why: 'The sudden event interrupts the background: indefinido.' },
            { q: 'Eran las once de la noche y ___ mucho.', o: ['llovía', 'llovió', 'ha llovido'], why: 'The time and the weather are the background: imperfecto.' },
            { q: 'En 2018 Carlos ___ su primer trabajo.', o: ['consiguió', 'conseguía', 'consigue'], why: 'A finished event with a date: indefinido.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in brackets in the indefinido or the imperfecto.', items: [
            { q: 'Cuando ___ (llegar, yo) a la fiesta, todos bailaban.', a: ['llegué'], why: 'My arrival is the event; the dancing is the background: *llegué*.' },
            { q: 'La casa ___ (tener) un jardín muy grande.', a: ['tenía'], why: 'A description of a place: imperfecto, *tenía*.' },
            { q: 'Mientras Ana ___ (estudiar), su hermano veía la tele.', a: ['estudiaba'], why: '*Mientras* joins two actions at the same time: imperfecto.' },
            { q: 'El sábado pasado ___ (ir, nosotros) al cine.', a: ['fuimos'], why: '*El sábado pasado* and one finished event: indefinido, *fuimos*.' },
            { q: 'De niño, Mateo ___ (jugar) al fútbol todos los días.', a: ['jugaba'], why: 'A habit in the past (*todos los días*): imperfecto.' },
            { q: 'Conducía por la autopista cuando ___ (ver, yo) el accidente.', a: ['vi'], why: 'Seeing the accident is the event that interrupts the driving: *vi*, without an accent.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which tense usually goes with each time word?', groups: ['Indefinido', 'Imperfecto'], items: [
            { s: 'de repente', g: 0, why: 'Something happens suddenly: an event, indefinido.' },
            { s: 'un día', g: 0, why: '*Un día* starts one event in a story: indefinido.' },
            { s: 'el año pasado', g: 0, why: 'A finished time in the past: indefinido.' },
            { s: 'en 2010', g: 0, why: 'A date for one event: indefinido.' },
            { s: 'todos los veranos', g: 1, why: 'A repeated habit: imperfecto.' },
            { s: 'normalmente', g: 1, why: 'What usually happened: imperfecto.' },
            { s: 'mientras', g: 1, why: 'Two things at the same time, background: imperfecto.' },
            { s: 'a menudo', g: 1, why: 'Something that happened often: imperfecto.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the wrong verb and correct it.', items: [
            { s: '[Fue] las ocho cuando llegué a casa.', a: ['Eran', 'eran'], why: 'The time in the past is always imperfecto, and plural with hours: *Eran las ocho*.' },
            { s: 'Ayer [estudiaba] tres horas y después salí con mis amigos.', a: ['estudié'], why: 'A finished action with a clear length (*tres horas*): indefinido.' },
            { s: 'Mientras [esperé] el autobús, empezó a llover.', a: ['esperaba'], why: '*Mientras* gives the background: imperfecto.' },
            { s: 'De repente, [oíamos] un ruido en la cocina.', a: ['oímos'], why: '*De repente* introduces a single event: indefinido.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'What had happened before',
      about: 'Use the pluscuamperfecto for something that happened before another past moment.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'The **pluscuamperfecto** tells what had happened **before** another moment in the past. Make it with the imperfecto of *haber* and the participle (*-ado*, *-ido*).' },
          { t: 'table', caption: 'The pluscuamperfecto', explain: ['head'], quiz: true, head: ['', 'haber', 'Participle'], rows: [
            ['yo', 'había', 'salido'],
            ['tú', 'habías', 'salido'],
            ['él, ella, usted', 'había', 'salido'],
            ['nosotros, nosotras', 'habíamos', 'salido'],
            ['vosotros, vosotras', 'habíais', 'salido'],
            ['ellos, ellas, ustedes', 'habían', 'salido'],
          ] },
          { t: 'table', caption: 'Irregular participles', explain: ['head'], quiz: true, head: ['Infinitive', 'Participle'], rows: [
            ['hacer', 'hecho'], ['ver', 'visto'], ['escribir', 'escrito'], ['decir', 'dicho'], ['volver', 'vuelto'],
            ['poner', 'puesto'], ['abrir', 'abierto'], ['romper', 'roto'], ['descubrir', 'descubierto'],
          ] },
        ],
        [
          { t: 'text', md: 'Compare: *Cuando llegué, Ana salió* means she left at the moment I arrived. *Cuando llegué, Ana ya había salido* means she left before; I did not see her.' },
          { t: 'examples', items: [
            { s: 'Cuando llegué a la estación, el tren ya **había salido**.', n: 'First the train left, then I arrived.' },
            { s: 'Nunca **había visto** el mar antes de ese viaje.', n: '*Nunca… antes*: the trip was the first time.' },
            { s: 'Me dijo que **había perdido** las llaves.', n: 'She lost them before she told me.' },
            { s: 'Cuando nos conocimos, ella ya **había vivido** en tres países.', n: 'Her life in three countries came before our meeting.' },
            { s: 'No fuimos al concierto porque no **habíamos comprado** las entradas.', n: 'The reason happened earlier than the result.' },
          ] },
          { t: 'tip', art: 'churro', md: 'The two parts stay together: *ya había comido*, never *había ya comido*. Pronouns go before *haber*: *Me lo había dicho.* In Latin America the tense works the same way; *ustedes habían* is used instead of *vosotros habíais*.' },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Complete the table.', verb: 'volver', tense: 'pluscuamperfecto', rows: [
            ['yo', 'había vuelto'],
            ['tú', 'habías vuelto'],
            ['ella', 'había vuelto'],
            ['nosotros', 'habíamos vuelto'],
            ['vosotros', 'habíais vuelto'],
            ['ellos', 'habían vuelto', '*Volver* has an irregular participle: *vuelto*.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in brackets in the pluscuamperfecto.', items: [
            { q: 'Cuando llegamos al cine, la película ya ___ (empezar).', a: ['había empezado'], why: 'The film started before we arrived: *había empezado*.' },
            { q: 'Lucía estaba nerviosa porque nunca ___ (hablar) en público.', a: ['había hablado'], why: 'Before that day she had never spoken in public: *había hablado*.' },
            { q: 'No tenía hambre porque ya ___ (comer, yo).', a: ['había comido'], why: 'I ate before that moment: *había comido*.' },
            { q: 'Los niños ___ (romper) la ventana y no querían decirlo.', a: ['habían roto'], why: '*Romper* has an irregular participle: *roto*.' },
            { q: 'Me di cuenta de que no ___ (poner, yo) la alarma.', a: ['había puesto'], why: '*Poner* has an irregular participle: *puesto*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What happened first?', items: [
            { q: 'Cuando Elena llegó a casa, sus hijos ya habían cenado.', o: ['Los hijos cenaron.', 'Elena llegó a casa.'], why: 'The pluscuamperfecto (*habían cenado*) shows the earlier action.' },
            { q: 'Encontré el libro que había perdido en el tren.', o: ['Perdí el libro.', 'Encontré el libro.'], why: '*Había perdido* happened before *encontré*.' },
            { q: 'Cuando entramos, la clase empezó.', o: ['Las dos cosas pasaron casi a la vez.', 'La clase empezó antes.'], why: 'Two verbs in the indefinido: one right after the other, not one before.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the two sentences. Start with the words given.', items: [
            { q: 'Primero salió el autobús. Después llegué a la parada.', cue: 'Cuando llegué a la parada,', a: ['Cuando llegué a la parada, el autobús ya había salido.', 'Cuando llegué a la parada, ya había salido el autobús.'], why: 'The earlier event goes in the pluscuamperfecto, often with *ya*.' },
            { q: 'Primero terminó la reunión. Después llamó mi jefa.', cue: 'Cuando llamó mi jefa,', a: ['Cuando llamó mi jefa, la reunión ya había terminado.', 'Cuando llamó mi jefa, ya había terminado la reunión.'], why: 'The meeting ended first: *ya había terminado*.' },
            { q: 'Primero mis amigos se fueron. Después me desperté.', cue: 'Cuando me desperté,', a: ['Cuando me desperté, mis amigos ya se habían ido.', 'Cuando me desperté, ya se habían ido mis amigos.'], why: 'The pronoun *se* goes before *haber*: *se habían ido*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Linking a story',
      about: 'Join the parts of a story with words like mientras, de repente and al cabo de.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Small linking words tell the listener **when** each part of the story happens. *Mientras* usually goes with the imperfecto, because it gives the background. *De repente* and *al cabo de* introduce events, so the verb after them is usually in the indefinido.' },
          { t: 'table', caption: 'Words for telling a story', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['al principio', 'at the beginning'],
            ['cuando', 'at the moment that'],
            ['mientras', 'during the time that; two things at the same time'],
            ['de repente', 'suddenly'],
            ['entonces', 'at that moment; and so'],
            ['al cabo de (dos horas)', 'when (two hours) had passed'],
            ['unos días después', 'a few days later'],
            ['en cuanto', 'as soon as'],
            ['al final', 'in the end'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Una noche en el tren', lines: [
            { who: 'Rosa', s: '¿Qué tal el viaje a Asturias?' },
            { who: 'Diego', s: 'Uf, fue una aventura. Al principio todo iba bien. Mientras el tren cruzaba las montañas, yo leía tranquilamente.' },
            { who: 'Rosa', s: '¿Y entonces?' },
            { who: 'Diego', s: 'De repente, el tren se paró en medio del campo. Nadie sabía qué pasaba.' },
            { who: 'Rosa', s: '¿En serio? ¿Y cuánto tiempo estuvisteis allí?' },
            { who: 'Diego', s: 'Mucho. Al cabo de dos horas, el tren arrancó otra vez. Al final llegamos a Oviedo a las tres de la mañana.' },
            { who: 'Rosa', s: '¡Qué noche! Pues por lo menos tienes una buena historia.' },
          ] },
          { t: 'tip', art: 'churro', md: '*Al final* means "in the end". *Por fin* means "finally", after a long wait: *¡Por fin llegó el autobús!* *Al cabo de una hora* means the same as *una hora después*.' },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the story with the words.', extra: ['normalmente', 'todavía'], items: [
            { q: 'Mi hermano y yo charlábamos tranquilamente ___ preparábamos la cena.', a: 'mientras', why: 'Two actions at the same time: *mientras*.' },
            { q: 'Estábamos en el parque y, ___, empezó a llover muchísimo.', a: 'de repente', why: 'The rain starts suddenly and without warning: *de repente*.' },
            { q: 'Esperamos en la cola y ___ media hora nos dieron las entradas.', a: 'al cabo de', why: '*Al cabo de* + a period of time: when half an hour had passed.' },
            { q: '___ el trabajo era difícil, pero después me acostumbré.', a: 'al principio', why: '*Al principio* contrasts with *después*: at the beginning.' },
            { q: 'Buscamos el hotel durante horas y ___ lo encontramos detrás de la catedral.', a: 'al final', why: 'The result after a long search: *al final*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the two halves of each sentence.', pairs: [
            ['Mientras me duchaba,', 'sonó el timbre.'],
            ['De repente se fue la luz y', 'no veíamos nada.'],
            ['Al principio no entendía a nadie, pero', 'al cabo de unos meses hablaba bastante bien.'],
            ['Cuando llegué al aeropuerto,', 'el avión ya había despegado.'],
            ['Buscamos las llaves por toda la casa y al final', 'las encontramos en el coche.'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Mientras ella dormía, yo preparé el desayuno.', why: 'The *mientras* part is the background (imperfecto); the main event is in the indefinido.' },
            { a: 'Al cabo de una hora llegó la ambulancia.', why: '*Al cabo de* + time, then the event in the indefinido.' },
            { a: 'De repente alguien llamó a la puerta.', why: '*De repente* introduces a sudden event: *llamó*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A new life',
      about: 'Read the life story of a woman who changed careers.',
      art: 'dog',
      spreads: [
        [
          { t: 'reading', title: 'De abogada a panadera', md: 'Clara nació en Zaragoza. De pequeña era una niña tranquila a la que le encantaba leer, y sus padres siempre decían que iba a ser profesora. Pero Clara estudió Derecho y, a los veinticinco años, empezó a trabajar en un despacho de abogados en Madrid.\n\nAl principio el trabajo le gustaba. Ganaba bien, viajaba mucho y tenía compañeros simpáticos. Sin embargo, trabajaba doce horas al día y casi nunca veía a su familia. Los fines de semana, para desconectar, hacía pan en casa, una costumbre que había aprendido de su abuela cuando era pequeña.\n\nUn domingo, mientras amasaba una barra, de repente se dio cuenta de que era el único momento de la semana en el que se sentía feliz. Al cabo de unos meses dejó el despacho. Su familia se sorprendió mucho, porque nadie sabía que lo había pensado tanto.\n\nClara hizo un curso de panadería de un año y después trabajó en una panadería de su barrio para aprender el oficio. Dos años más tarde abrió su propia panadería en un pueblo cerca de Zaragoza. Los primeros meses fueron muy duros: se levantaba a las cuatro de la mañana y ya había gastado casi todos sus ahorros.\n\nHoy tiene cuatro empleados y vende pan en el pueblo y en dos tiendas de la ciudad. «Gano menos que antes», dice, «pero por fin tengo tiempo para mí. No me arrepiento de nada».' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'De niña, Clara quería ser abogada.', a: 'ng', why: 'Her parents thought she would be a teacher, but the text does not say what Clara wanted.' },
            { q: 'En Madrid, Clara trabajaba muchas horas.', a: 't', why: '*Trabajaba doce horas al día.*' },
            { q: 'Clara aprendió a hacer pan en un curso cuando era joven.', a: 'f', why: 'She learnt it from her grandmother when she was little.' },
            { q: 'La familia de Clara sabía que quería dejar el despacho.', a: 'f', why: '*Su familia se sorprendió mucho*: nobody knew.' },
            { q: 'Clara trabajó en otra panadería antes de abrir la suya.', a: 't', why: 'She worked in a bakery in her neighbourhood to learn the trade.' },
            { q: 'Ahora Clara gana más dinero que antes.', a: 'f', why: '*Gano menos que antes.*' },
            { q: 'Las dos tiendas de la ciudad son de Clara.', a: 'ng', why: 'She sells bread in them, but the text does not say who owns them.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the story.', items: [
            { q: '«…una costumbre que había aprendido de su abuela»: why the pluscuamperfecto?', o: ['She learnt it before the time of the story.', 'She learnt it at the end of the story.', 'She is still learning it now.'], why: 'The pluscuamperfecto shows something that happened earlier than the other past events.' },
            { q: '«Mientras amasaba una barra, de repente se dio cuenta…»: which part is the background?', o: ['mientras amasaba una barra', 'de repente', 'se dio cuenta'], why: '*Mientras* + imperfecto gives the background; *se dio cuenta* is the event.' },
            { q: '¿Por qué fueron duros los primeros meses?', o: ['Se levantaba muy temprano y tenía poco dinero.', 'No tenía clientes en el pueblo.', 'Sus empleados no sabían hacer pan.'], why: 'She got up at four and had spent almost all her savings.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the indefinido.', items: [
            { s: 'Clara [estudió] Derecho y [empezó] a trabajar en Madrid.', why: 'Two events of her life, one after the other: indefinido.' },
            { s: 'Un domingo, mientras amasaba, se [dio] cuenta de algo y al cabo de unos meses [dejó] el despacho.', why: '*Amasaba* is the background; *dio* and *dejó* are events.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Cuando ___ niño, pasaba los veranos en el pueblo.', o: ['era', 'fui', 'había sido'], why: 'A description of a time in your life: imperfecto.' },
      { q: 'Estábamos cenando cuando ___ el teléfono.', o: ['sonó', 'sonaba', 'había sonado'], why: 'The event that interrupts the background: indefinido.' },
      { q: 'Cuando llegué a la fiesta, Marta ya ___.', o: ['se había ido', 'se fue', 'se iba'], why: 'Marta left before I arrived: pluscuamperfecto.' },
      { q: '___ yo hablaba por teléfono, los niños jugaban en el jardín.', o: ['Mientras', 'De repente', 'Al cabo de'], why: 'Two actions at the same time: *mientras*.' },
      { q: 'Esperamos mucho y ___ dos horas llegó el técnico.', o: ['al cabo de', 'mientras', 'al principio'], why: '*Al cabo de* + a period of time.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in brackets in the right past tense.', items: [
      { q: 'Cuando salimos del cine, ___ (llover) mucho.', a: ['llovía', 'estaba lloviendo'], why: 'The rain was already falling when we came out: background, imperfecto.' },
      { q: 'En 2019 mi hermana ___ (tener) su primer hijo.', a: ['tuvo'], why: 'A finished event with a date: indefinido, *tuvo*.' },
      { q: 'No pude entrar porque ___ (olvidar, yo) las llaves en la oficina.', a: ['había olvidado'], why: 'I forgot them before I tried to enter: pluscuamperfecto.' },
      { q: 'Nunca ___ (ver, nosotros) una película tan triste.', a: ['habíamos visto'], why: 'Until then, never: pluscuamperfecto with the irregular participle *visto*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
      { s: 'Mientras [esperé] a mi amiga, leí el periódico.', a: ['esperaba'], why: '*Mientras* gives the background: imperfecto.' },
      { s: 'Cuando volvió, ya habíamos [hacido] la cena.', a: ['hecho'], why: 'The participle of *hacer* is irregular: *hecho*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Cuando llegué, la película ya había empezado.', why: 'The earlier event, with *ya*, in the pluscuamperfecto.' },
      { a: 'De repente se fue la luz.', why: '*De repente* + an event in the indefinido.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['Eran las diez y hacía frío.', 'Fueron las diez e hizo frío.', 'Era las diez y hacía frío.'], why: 'Time and weather as background: imperfecto, with *eran* for the hours.' },
      { q: '', o: ['Viví en Roma tres años.', 'Vivía en Roma tres años.', 'Había vivido en Roma tres años ayer.'], why: 'A finished period with a clear length: indefinido.' },
    ] },
  ],
};
