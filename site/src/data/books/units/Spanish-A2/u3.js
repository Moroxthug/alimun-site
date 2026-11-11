// Spanish A2, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Experiences',
  goal: 'Talk about experiences and things you have or have not done yet.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['preterito-perfecto', 'irregular-participles', 'ya-todavia', 'perfecto-indefinido', 'experiences'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'he viajado, has visto',
      about: 'Make the pretérito perfecto and learn the irregular participles.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'The **pretérito perfecto** is the present of **haber** + a participle: *he viajado* (I have travelled). For the participle, *-ar* verbs take **-ado** and *-er* and *-ir* verbs take **-ido**: *hablar → hablado, comer → comido, vivir → vivido*.' },
          { t: 'table', caption: 'Pretérito perfecto', explain: ['head'], quiz: true, head: ['Person', 'haber', 'Participle'], rows: [
            ['yo', 'he', 'viajado'],
            ['tú', 'has', 'comido'],
            ['él, ella, usted', 'ha', 'vivido'],
            ['nosotros, nosotras', 'hemos', 'trabajado'],
            ['vosotros, vosotras', 'habéis', 'bebido'],
            ['ellos, ellas, ustedes', 'han', 'salido'],
          ] },
          { t: 'tip', art: 'owl', md: 'The participle never changes: *Ana ha comido, mis hermanos han comido*. Nothing goes between *haber* and the participle. *no* and pronouns go before *haber*: *No **me** he duchado.*' },
        ],
        [
          { t: 'text', md: 'Some very common verbs have an **irregular participle**. Learn them by heart.' },
          { t: 'table', caption: 'Irregular participles', explain: ['head'], quiz: true, head: ['Infinitive', 'Participle'], rows: [
            ['hacer', 'hecho'],
            ['ver', 'visto'],
            ['escribir', 'escrito'],
            ['decir', 'dicho'],
            ['volver', 'vuelto'],
            ['poner', 'puesto'],
            ['abrir', 'abierto'],
            ['romper', 'roto'],
          ] },
          { t: 'examples', items: [
            { s: '¿Qué **has hecho** hoy?', n: '*hacer → hecho*.' },
            { s: 'Nunca **he visto** la nieve.', n: '*ver → visto*.' },
            { s: 'Mi hijo **ha roto** un vaso.', n: '*romper → roto*.' },
            { s: '¿**Habéis vuelto** ya de vacaciones?', n: '*volver → vuelto*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the pretérito perfecto of *estar*.', verb: 'estar', tense: 'pretérito perfecto', rows: [
            ['yo', 'he estado'], ['tú', 'has estado'], ['él, ella, usted', 'ha estado'], ['nosotros', 'hemos estado'], ['vosotros', 'habéis estado'], ['ellos, ustedes', 'han estado'],
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: each verb and its participle.', pairs: [
            ['hacer', 'hecho'], ['ver', 'visto'], ['escribir', 'escrito'], ['decir', 'dicho'], ['volver', 'vuelto'], ['abrir', 'abierto'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the pretérito perfecto.', items: [
            { q: 'Esta mañana yo ___ un correo a mi profesora. (escribir)', a: ['he escrito'], why: '*yo he* + the irregular participle *escrito*.' },
            { q: 'Hoy Pablo ___ la cena. (hacer)', a: ['ha hecho'], why: '*él ha* + *hecho*.' },
            { q: 'Nosotros ___ mucho este fin de semana. (dormir)', a: ['hemos dormido'], why: '*-ir* verb: *dormido*. *nosotros hemos*.' },
            { q: '¿Vosotros ___ la última película de esa directora? (ver)', a: ['habéis visto'], why: '*vosotros habéis* + *visto*.' },
            { q: 'Mis padres ya ___ del viaje. (volver)', a: ['han vuelto'], why: '*ellos han* + *vuelto*.' },
            { q: '¿Qué te ___ el médico? (decir)', a: ['ha dicho'], why: '*el médico* = *él*: *ha dicho*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['Hoy no me he levantado temprano.', 'Hoy me no he levantado temprano.', 'Hoy he no me levantado temprano.'], why: '*no* first, then the pronoun, then *haber*.' },
            { q: '', o: ['Mi hermana ha abierto la ventana.', 'Mi hermana ha abrido la ventana.', 'Mi hermana ha abierta la ventana.'], why: '*abrir → abierto*, and the participle does not change.' },
            { q: '', o: ['¿Has puesto la mesa?', '¿Has ponido la mesa?', '¿Ha puesto tú la mesa?'], why: '*poner → puesto*. *tú has*.' },
            { q: '', o: ['Ellos han viajado mucho.', 'Ellos han mucho viajado.', 'Ellos ha viajado mucho.'], why: 'Nothing goes between *han* and the participle.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Have you ever…?',
      about: 'Ask about experiences with ya, todavía no, alguna vez and nunca.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Use the *pretérito perfecto* to talk about your experiences, without saying when. **¿alguna vez?** means ever. **nunca** means never. **ya** means already, and **todavía no** means not yet.' },
          { t: 'examples', items: [
            { s: '¿Has estado **alguna vez** en Cuba?', n: '*alguna vez*: at any time in your life.' },
            { s: 'Sí, he estado **una vez**. / Sí, **muchas veces**.', n: '*una vez, dos veces, muchas veces*: once, twice, many times.' },
            { s: 'No, **nunca** he estado en Cuba.', n: '*nunca* before *haber*.' },
            { s: 'No he estado **nunca** en Cuba.', n: 'Or *no* before *haber* and *nunca* after the participle.' },
            { s: '¿**Ya** has comprado los billetes? No, **todavía no**.', n: '*ya*: already. *todavía no*: not yet.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Where the words go', explain: ['head'], head: ['Word', 'Example'], rows: [
            ['ya', 'Ya he terminado. / He terminado ya.'],
            ['todavía no', 'Todavía no he terminado. / No he terminado todavía.'],
            ['nunca', 'Nunca he volado. / No he volado nunca.'],
            ['alguna vez', '¿Has volado alguna vez?'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Spanish, two negative words are fine: *No he visto **nunca** el mar.* If *nunca* comes first, do not use *no*: *Nunca he visto el mar.*' },
          { t: 'dialogue', title: 'En la oficina', lines: [
            { who: 'Javier', s: 'Elena, ¿ya has enviado el informe?' },
            { who: 'Elena', s: 'No, todavía no. Lo termino ahora.' },
            { who: 'Javier', s: 'Vale. Oye, ¿has estado alguna vez en Lisboa? Tengo una reunión allí.' },
            { who: 'Elena', s: 'Sí, he estado dos veces. Es preciosa.' },
            { who: 'Javier', s: 'Yo no he estado nunca. ¿Y has probado los pasteles de nata?' },
            { who: 'Elena', s: '¡Claro! Muchas veces.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '¿Has comido ___ pulpo? – Sí, una vez.', o: ['alguna vez', 'todavía no', 'nunca'], why: 'A question about experience: *alguna vez*.' },
            { q: 'No he montado ___ a caballo.', o: ['nunca', 'ya', 'alguna vez'], why: '*No* + verb + *nunca*: never.' },
            { q: '¿Has hecho los deberes? – Sí, ___ los he hecho.', o: ['ya', 'todavía no', 'nunca'], why: 'The answer is yes: *ya*, already.' },
            { q: '¿Han llegado tus padres? – No, ___.', o: ['todavía no', 'ya', 'alguna vez'], why: 'Not yet: *todavía no*.' },
            { q: 'He estado en Japón ___ veces.', o: ['dos', 'una', 'alguna'], why: '*veces* is plural: *dos veces*.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Read the dialogue again. True or false?', items: [
            { q: 'Elena ya ha enviado el informe.', a: 'f', why: '*No, todavía no.*' },
            { q: 'Elena ha estado en Lisboa dos veces.', a: 't', why: '*Sí, he estado dos veces.*' },
            { q: 'Javier ha estado en Lisboa muchas veces.', a: 'f', why: '*Yo no he estado nunca.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say the same thing another way. Start with the words given.', items: [
            { q: 'Nunca he visto una ballena.', cue: 'No he', a: ['No he visto nunca una ballena', 'No he visto una ballena nunca'], why: 'With *no* before *haber*, *nunca* goes after the participle.' },
            { q: 'No he terminado todavía.', cue: 'Todavía no', a: ['Todavía no he terminado'], why: '*Todavía no* goes before *haber*.' },
            { q: 'He leído el libro ya.', cue: 'Ya', a: ['Ya he leído el libro'], why: '*Ya* can go before *haber*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions and answers.', items: [
            { a: '¿Has estado alguna vez en Argentina?', why: '*alguna vez* usually goes at the end of the question.' },
            { a: 'Todavía no he hecho la compra.', why: '*Todavía no* + *haber* + participle.' },
            { a: 'Mis hijos no han visto nunca la nieve.', why: '*no* before *han*, *nunca* after *visto*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'This week or last week?',
      about: 'Choose between the pretérito perfecto and the pretérito indefinido.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In Spain, the time word helps you choose. If the time is **not over yet** (today, this week, this year) or there is **no time** (ever, never, already), use the **pretérito perfecto**. If the time is **over** (yesterday, last year, in 2015), use the **pretérito indefinido**.' },
          { t: 'table', caption: 'Which past?', explain: ['head'], head: ['Pretérito perfecto', 'Pretérito indefinido'], rows: [
            ['hoy, esta mañana', 'ayer, anoche'],
            ['esta semana', 'la semana pasada'],
            ['este mes, este año', 'el mes pasado, el año pasado'],
            ['alguna vez, nunca, ya', 'en 2015, hace dos años'],
          ] },
          { t: 'examples', items: [
            { s: 'Esta mañana **he desayunado** en un bar.', n: 'The morning is part of today: *perfecto*.' },
            { s: 'Ayer **desayuné** en casa.', n: 'Yesterday is over: *indefinido*.' },
            { s: 'Este año **hemos viajado** mucho.', n: 'This year is not over: *perfecto*.' },
            { s: 'En 2018 **viajamos** a Chile.', n: 'A year that is over: *indefinido*.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'In much of Latin America, and in some parts of Spain, people use the *indefinido* for both: *Hoy comí con mi madre*. In Spain you mostly hear *Hoy he comido con mi madre*. Both are correct Spanish.' },
          { t: 'ex', kind: 'sort', h: 'Which past goes with each time word in Spain?', groups: ['pretérito perfecto', 'pretérito indefinido'], items: [
            { s: 'hoy', g: 0, why: 'Today is not over: *perfecto*.' },
            { s: 'ayer', g: 1, why: 'Yesterday is over: *indefinido*.' },
            { s: 'esta semana', g: 0, why: 'This week is not over: *perfecto*.' },
            { s: 'el verano pasado', g: 1, why: 'Last summer is over: *indefinido*.' },
            { s: 'alguna vez', g: 0, why: 'No time is said: *perfecto*.' },
            { s: 'hace tres días', g: 1, why: '*hace* + time: a finished moment, *indefinido*.' },
            { s: 'este año', g: 0, why: 'This year is not over: *perfecto*.' },
            { s: 'en 2010', g: 1, why: 'A year in the past: *indefinido*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right past form, as people speak in Spain.', items: [
            { q: 'Hoy ___ muy tarde.', o: ['me he levantado', 'me levanté', 'me levanto'], why: '*hoy*: *perfecto*.' },
            { q: 'El año pasado ___ a vivir a Barcelona.', o: ['nos mudamos', 'nos hemos mudado', 'nos mudáis'], why: '*el año pasado*: *indefinido*.' },
            { q: 'Esta semana Carla ___ dos exámenes.', o: ['ha tenido', 'tuvo', 'tiene tenido'], why: '*esta semana*: *perfecto*.' },
            { q: 'Anoche ___ una serie muy buena.', o: ['vi', 'he visto', 'veo'], why: '*anoche*: *indefinido*.' },
            { q: '¿___ alguna vez en un concurso de la tele?', o: ['Has participado', 'Participas', 'Has participar'], why: '*alguna vez*: *perfecto*.' },
            { q: 'Mi abuelo ___ en 1950.', o: ['nació', 'ha nacido', 'nace'], why: 'A date in the past: *indefinido*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write it correctly, as people speak in Spain.', items: [
            { s: 'Ayer [he ido] al médico.', a: ['fui'], why: '*Ayer* is over: *indefinido*, *fui*.' },
            { s: 'Esta mañana [hablé] con mi jefa.', a: ['he hablado'], why: 'In Spain, *esta mañana* goes with the *perfecto*: *he hablado*.' },
            { s: 'Hace dos años [hemos comprado] una casa.', a: ['compramos'], why: '*hace dos años*: *indefinido*.' },
            { s: 'Nunca [estuve] en Brasil, pero quiero ir.', a: ['he estado'], why: 'Experience with no time, in Spain: *perfecto*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the pretérito perfecto or the pretérito indefinido.', items: [
            { q: 'Este mes ___ tres libros. (yo, leer)', a: ['he leído'], why: '*este mes*: *perfecto*.' },
            { q: 'El domingo pasado ___ en la playa. (nosotros, comer)', a: ['comimos'], why: '*el domingo pasado*: *indefinido*.' },
            { q: 'Hoy mis hijos ___ del colegio a las cinco. (salir)', a: ['han salido'], why: '*hoy*: *perfecto*.' },
            { q: 'En 2020 Laura ___ la carrera. (terminar)', a: ['terminó'], why: 'A year in the past: *indefinido*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Reading: unusual experiences',
      about: 'Read three short interviews about experiences.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: '¿Qué es lo más raro que has hecho?', md: 'Esta semana hemos hecho la misma pregunta a tres personas: ¿qué es lo más raro que has hecho en tu vida?\n\n**Leila, 31 años, enfermera.** He dormido en un hotel de hielo. Fue hace cuatro años, en el norte de Suecia. La habitación y la cama son de hielo, y en el bar hasta los vasos son de hielo. Pasé un poco de frío, pero ha sido la noche más especial de mi vida. Todavía no he vuelto, pero quiero ir otra vez con mi pareja.\n\n**Andrés, 45 años, cocinero.** Yo he cocinado para doscientas personas en una boda en el campo, sin cocina, solo con fuego. Fue el verano pasado. Terminé muerto de cansancio, pero los novios quedaron muy contentos. Este año ya me han llamado para otras dos bodas.\n\n**Rosa, 68 años, jubilada.** Yo nunca he subido a un avión, pero he viajado mucho en barco y en tren. Lo más raro que he hecho fue hace dos años: aprendí a nadar. Con sesenta y seis años, sí. Esta mañana he ido a la piscina, como todos los días, y he nadado una hora.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Leila ha dormido en un hotel de hielo.', a: 't', why: '*He dormido en un hotel de hielo.*' },
            { q: 'Leila ha vuelto al hotel con su pareja.', a: 'f', why: '*Todavía no he vuelto.*' },
            { q: 'Andrés cocinó en una boda el verano pasado.', a: 't', why: '*Fue el verano pasado.*' },
            { q: 'Andrés trabaja en un restaurante.', a: 'ng', why: 'He is a cook, but the text does not say where he works.' },
            { q: 'Rosa ha viajado muchas veces en avión.', a: 'f', why: '*Yo nunca he subido a un avión.*' },
            { q: 'Hoy Rosa ha ido a nadar.', a: 't', why: '*Esta mañana he ido a la piscina.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the interviews again and choose.', items: [
            { q: '¿Cuándo durmió Leila en el hotel de hielo?', o: ['Hace cuatro años.', 'Esta semana.', 'El verano pasado.'], why: '*Fue hace cuatro años.*' },
            { q: '¿Qué ha pasado este año con Andrés?', o: ['Le han llamado para dos bodas más.', 'Ha abierto un restaurante.', 'Se ha casado en el campo.'], why: '*Este año ya me han llamado para otras dos bodas.*' },
            { q: '¿Qué aprendió Rosa hace dos años?', o: ['A nadar.', 'A cocinar.', 'A conducir.'], why: '*hace dos años: aprendí a nadar.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the pretérito perfecto.', items: [
            { s: 'Todavía no [he vuelto], pero quiero ir otra vez.', why: '*todavía no*: *perfecto*, *he vuelto*.' },
            { s: 'Este año ya me [han llamado] para otras dos bodas.', why: '*este año*: *perfecto*.' },
            { s: 'Esta mañana [he ido] a la piscina y [he nadado] una hora.', why: '*esta mañana*: *perfecto*. *Fue* and *aprendí* in the text are *indefinido*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '¿Qué ___ hoy en clase?', o: ['habéis hecho', 'habéis hacido', 'han hacido'], why: '*hoy*: *perfecto*. *hacer → hecho*.' },
      { q: 'Mi hermano ___ el móvil otra vez.', o: ['ha roto', 'ha rompido', 'han roto'], why: '*romper → roto*. *él ha*.' },
      { q: '¿Has probado ___ la comida peruana?', o: ['alguna vez', 'todavía no', 'ayer'], why: 'A question about experience: *alguna vez*.' },
      { q: 'El año pasado ___ en Italia.', o: ['estuve', 'he estado', 'estoy'], why: '*el año pasado*: *indefinido*.' },
      { q: 'No he estado ___ en un concierto de ópera.', o: ['nunca', 'ya', 'alguna'], why: '*no* + verb + *nunca*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word or words.', items: [
      { q: 'Esta semana he ___ dos cartas. (escribir)', a: ['escrito'], why: '*escribir → escrito*.' },
      { q: '¿Ya habéis ___ de la playa? (volver)', a: ['vuelto'], why: '*volver → vuelto*.' },
      { q: 'Ayer ___ con Sofía por teléfono. (yo, hablar)', a: ['hablé'], why: '*ayer*: *indefinido*, *hablé*.' },
      { q: 'Hoy mis padres ___ el piso nuevo. (ver)', a: ['han visto'], why: '*hoy*: *perfecto*, *han visto*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write it correctly.', items: [
      { s: 'Esta mañana he [ponido] la lavadora.', a: ['puesto'], why: '*poner → puesto*.' },
      { s: 'En 2019 [hemos ido] a Perú.', a: ['fuimos'], why: 'A year in the past: *indefinido*.' },
      { s: 'Todavía [he no] terminado el trabajo.', a: ['no he'], why: '*Todavía no* + *haber*: *Todavía no he terminado*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Say the same thing another way. Start with the words given.', items: [
      { q: 'Nunca he comido sushi.', cue: 'No he', a: ['No he comido nunca sushi', 'No he comido sushi nunca'], why: 'With *no* before *haber*, *nunca* goes after the participle.' },
      { q: 'No he llamado a Pedro todavía.', cue: 'Todavía no', a: ['Todavía no he llamado a Pedro'], why: '*Todavía no* goes before *haber*.' },
    ] },
  ],
};
