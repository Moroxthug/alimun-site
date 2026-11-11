// Spanish B1 for work, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Small talk and workplace culture',
  goal: 'Make small talk with colleagues and understand everyday workplace habits.',
  art: 'churro',
  tags: { skills: ['speaking', 'reading', 'vocabulary'], topics: ['small-talk', 'tu-or-usted', 'invitations', 'workplace-culture'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'At the coffee machine',
      about: 'Safe topics, good questions and showing that you are interested.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'Small talk at work in Spain is friendly and quite personal. Safe topics are the weekend, holidays, plans, food, the weather, the city and work in general. People ask about your family more easily than in some other countries, but money, politics and religion are better avoided with people you do not know well.' },
          { t: 'examples', items: [
            { s: '¿**Qué tal** el fin de semana?', n: 'The classic Monday question.' },
            { s: '¿**Hiciste algo** especial?', n: 'A follow-up question about a finished weekend: indefinido.' },
            { s: '¿**Tienes planes** para el puente?', n: '*el puente*: a long weekend, when a holiday is next to a weekend.' },
            { s: '¿**Cuánto tiempo llevas** en la empresa?', n: 'A good question for a new colleague.' },
            { s: '¡Qué calor hace hoy!', n: 'The weather is always safe.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Good small talk is not only answering. Give a short answer, then ask back: *Muy bien, estuve en la playa. ¿Y tú?*. A question with *¿Y tú?* keeps the conversation going.' },
        ],
        [
          { t: 'text', md: 'To show you are interested, react with **¡Qué + adjective or noun!** For good news: *¡Qué bien!*, *¡Qué suerte!*. For bad news: *¡Qué pena!*, *¡Qué rollo!* (how boring or annoying). For a surprise: *¡No me digas!*, *¿En serio?*' },
          { t: 'dialogue', title: 'En la máquina de café', lines: [
            { who: 'Ana', s: '¡Hola, Diego! ¿Qué tal el fin de semana?' },
            { who: 'Diego', s: 'Muy bien, gracias. Fui a Cuenca con unos amigos. ¿Y tú?' },
            { who: 'Ana', s: '¡Qué bien! Yo me quedé en casa. Estuve pintando el salón.' },
            { who: 'Diego', s: '¡Qué rollo! ¿Y ya has terminado?' },
            { who: 'Ana', s: 'Casi. Me falta una pared. Oye, ¿tú no te ibas de vacaciones en agosto?' },
            { who: 'Diego', s: 'Sí, a Asturias. Dicen que allí no hace tanto calor.' },
            { who: 'Ana', s: '¡Qué suerte! Yo trabajo todo agosto.' },
            { who: 'Diego', s: 'Bueno, en agosto hay poca gente en la oficina, ¿no? Es más tranquilo.' },
            { who: 'Ana', s: 'Eso es verdad. Bueno, te dejo, que tengo una reunión a las diez.' },
            { who: 'Diego', s: 'Venga, hasta luego.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Diego pasó el fin de semana fuera de su ciudad.', a: 't', why: '*Fui a Cuenca con unos amigos.*' },
            { q: 'Ana ya ha terminado de pintar el salón.', a: 'f', why: '*Casi. Me falta una pared.*' },
            { q: 'Ana también tiene vacaciones en agosto.', a: 'f', why: '*Yo trabajo todo agosto.*' },
            { q: 'Ana termina la conversación porque tiene una reunión.', a: 't', why: '*te dejo, que tengo una reunión a las diez*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best reaction.', items: [
            { q: 'Me han dado el puesto que quería.', o: ['¡Qué bien! ¡Enhorabuena!', '¡Qué pena!', '¡Qué rollo!'], why: 'Good news: *¡Qué bien!* and *¡Enhorabuena!* (congratulations).' },
            { q: 'Mi vuelo se canceló y no pude ir a la boda de mi prima.', o: ['¡Qué pena!', '¡Qué suerte!', '¡Qué bien!'], why: 'Bad news: *¡Qué pena!*' },
            { q: 'Ayer vi al director en el gimnasio.', o: ['¿En serio?', '¡Qué pena!', '¡Enhorabuena!'], why: 'A surprise: *¿En serio?* or *¡No me digas!*' },
            { q: 'Este fin de semana tengo que trabajar el sábado.', o: ['¡Qué rollo!', '¡Qué suerte!', '¡Enhorabuena!'], why: 'Something annoying: *¡Qué rollo!*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['¿Qué tal el fin de semana?', 'Genial, estuve en la montaña.'],
            ['¿Cuánto tiempo llevas en la empresa?', 'Casi dos años, desde marzo del año pasado.'],
            ['¿Tienes planes para el puente?', 'Sí, vamos a ver a mis padres a Galicia.'],
            ['¿Has probado el restaurante nuevo de enfrente?', 'Sí, el menú del día está muy bien.'],
          ] },
          { t: 'ex', kind: 'order', h: 'Build the small-talk questions.', items: [
            { a: '¿Qué tal las vacaciones?', why: '*¿Qué tal* + the topic?' },
            { a: '¿Hiciste algo especial el sábado?', why: 'A follow-up question in the indefinido.' },
            { a: '¿Cuánto tiempo llevas trabajando aquí?', why: '*¿Cuánto tiempo llevas* + gerund?' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Tú or usted, invitations and goodbyes',
      about: 'Know when to say tú, invite a colleague, say yes or no, and end a chat.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In most offices in Spain colleagues say **tú** to each other from the first day, also to the boss in many companies. Saying *tú* is called **tutear**. With customers, older people and in very formal companies, start with **usted**. If someone says *usted* to you and you would like *tú*, you can say: *Puedes tutearme*, or *Háblame de tú*.' },
          { t: 'table', caption: 'tú or usted', explain: ['head', 'col0'], quiz: true, head: ['', 'tú', 'usted'], rows: [
            ['How are you?', '¿Qué tal estás?', '¿Qué tal está?'],
            ['Do you want…?', '¿Quieres un café?', '¿Quiere un café?'],
            ['your', 'tu despacho', 'su despacho'],
            ['to you', 'Te llamo mañana.', 'Le llamo mañana.'],
            ['Command', 'Siéntate, por favor.', 'Siéntese, por favor.'],
          ] },
          { t: 'tip', art: 'churro', md: 'In many Latin American countries *usted* is much more common at work, and some people say *usted* even to friends and family. In parts of Central and South America you also hear *vos* instead of *tú*: *vos tenés*, *vos querés*.' },
        ],
        [
          { t: 'text', md: 'To invite a colleague, use **¿Te apetece…?** or **¿Por qué no…?**. To say no politely, thank them, say *no* softly and give a reason, and if you like, suggest another day.' },
          { t: 'examples', items: [
            { s: '¿**Te apetece** tomar algo después del trabajo?', n: '*apetecer* works like *gustar*: *me apetece*, *te apetece*.' },
            { s: '¿**Por qué no** vienes a comer con nosotros?', n: 'A friendly invitation.' },
            { s: '**Me encantaría**, ¡gracias!', n: 'Saying yes with the condicional.' },
            { s: '**Me encantaría, pero** hoy no puedo. ¿**Lo dejamos para** otro día?', n: 'Saying no softly, then a new plan.' },
            { s: 'Bueno, **te dejo, que** tengo una reunión.', n: 'Ending a chat. *que* here means *because*.' },
            { s: '¡**Que aproveche**!', n: 'Said to people who are eating: enjoy your meal.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Now you say tú. Complete the sentences.', items: [
            { q: '¿___ un café? (querer, tú)', a: ['Quieres'], why: '*tú quieres*: *e* becomes *ie*.' },
            { q: 'Si quieres, ___ llamo mañana por la mañana. (to you, tú)', a: ['te'], why: 'With *tú*: *te llamo*.' },
            { q: '¿Te ___ venir a la cena del equipo? (apetecer)', a: ['apetece'], why: '*apetecer* is like *gustar*: *te apetece*.' },
            { q: '¿Dónde está ___ mesa? (your, tú)', a: ['tu'], why: '*tu* without an accent: your. *tú* with an accent: you.' },
          ] },
        ],
        [
          { t: 'dialogue', title: '¿Nos tuteamos?', lines: [
            { who: 'Pedro', s: 'Buenos días, Sra. Ramos. ¿Quiere un café?' },
            { who: 'Carla', s: 'Sí, gracias. Pero, por favor, háblame de tú. Aquí nos tuteamos todos.' },
            { who: 'Pedro', s: 'Ah, perfecto. Entonces, ¿quieres azúcar, Carla?' },
            { who: 'Carla', s: 'No, gracias. Oye, los viernes comemos juntos en el bar de la esquina. ¿Te apetece venir?' },
            { who: 'Pedro', s: 'Me encantaría, pero este viernes no puedo. Tengo cita con el médico. ¿Lo dejamos para el próximo?' },
            { who: 'Carla', s: 'Claro, sin problema. Bueno, te dejo, que me están esperando.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Think about the dialogue. Choose the right answer.', items: [
            { q: '¿Por qué cambia Pedro de usted a tú?', o: ['Porque Carla se lo pide.', 'Porque Carla es más joven.', 'Porque es viernes.'], why: '*por favor, háblame de tú*.' },
            { q: '¿Qué hace el equipo los viernes?', o: ['Come junto en un bar.', 'Tiene una reunión.', 'Sale antes del trabajo.'], why: '*los viernes comemos juntos en el bar de la esquina*.' },
            { q: '¿Cómo dice Pedro que no?', o: ['Da las gracias, explica por qué y propone otro día.', 'Dice solo «no».', 'No contesta.'], why: '*Me encantaría, pero…* + a reason + *¿Lo dejamos para el próximo?*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that show the speaker says tú.', items: [
            { s: 'Por favor, [háblame] de tú. ¿[Quieres] azúcar?', why: '*háblame* is the *tú* command, *quieres* the *tú* form.' },
            { s: 'Si [te] [apetece], [puedes] venir con nosotros.', why: '*te* and *puedes* are *tú* forms.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Workplace culture',
      about: 'Read an article about working days and habits in Spanish companies.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Café, menú del día y jornada intensiva', md: 'Quien empieza a trabajar en una empresa española nota pronto algunas costumbres.\n\nLa primera es el horario. En muchas empresas se trabaja con **jornada partida**: se empieza entre las ocho y las nueve, se para una hora o más para comer y se vuelve a la oficina hasta las seis o las siete. Se come tarde, normalmente entre las dos y las tres. Muchos trabajadores comen el **menú del día** en un bar cerca de la oficina: un primer plato, un segundo y postre o café, a un precio fijo. En verano, algunas empresas tienen **jornada intensiva**: se trabaja de ocho a tres sin parar para comer y la tarde queda libre.\n\nLa segunda costumbre es la pausa para el café a media mañana. Es un momento para hablar con los compañeros, no solo de trabajo. Mucha gente piensa que estas conversaciones ayudan a crear un buen ambiente.\n\nEl trato también es bastante informal. En la mayoría de las oficinas los compañeros se tutean y se saludan con un «¡Buenos días!» al llegar. Con clientes nuevos, en cambio, se suele empezar con usted.\n\nY si alguien cumple años, a veces es él quien trae algo para los compañeros: unos pasteles, un bizcocho o unos churros para el café.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the article. True, false or not given?', items: [
            { q: 'Con la jornada partida se para a mediodía para comer.', a: 't', why: '*se para una hora o más para comer*.' },
            { q: 'En España se come normalmente a las doce.', a: 'f', why: '*normalmente entre las dos y las tres*.' },
            { q: 'Con la jornada intensiva la tarde queda libre.', a: 't', why: '*se trabaja de ocho a tres… y la tarde queda libre*.' },
            { q: 'En la pausa del café solo se habla de trabajo.', a: 'f', why: '*no solo de trabajo*.' },
            { q: 'Todas las empresas tienen jornada intensiva en verano.', a: 'f', why: 'The text says *algunas empresas*, not all.' },
            { q: 'El menú del día es más barato los viernes.', a: 'ng', why: 'The text says the price is fixed, but nothing about Fridays.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the words from the article and their meaning.', pairs: [
            ['la jornada partida', 'Trabajas por la mañana y por la tarde, con una pausa larga para comer.'],
            ['la jornada intensiva', 'Trabajas por la mañana sin parar y tienes la tarde libre.'],
            ['el menú del día', 'una comida de varios platos a un precio fijo'],
            ['tutearse', 'hablarse de tú'],
            ['el ambiente', 'cómo se siente la gente en un lugar'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Según el artículo, ¿para qué sirve la pausa del café?', o: ['Para hablar con los compañeros y crear buen ambiente.', 'Para terminar el trabajo antes.', 'Para hablar con los clientes.'], why: '*estas conversaciones ayudan a crear un buen ambiente*.' },
            { q: 'Con un cliente nuevo, normalmente…', o: ['se empieza con usted.', 'se habla de tú desde el principio.', 'no se saluda.'], why: '*Con clientes nuevos… se suele empezar con usted.*' },
            { q: 'Es tu cumpleaños. Según el artículo, puedes…', o: ['traer algo dulce para tus compañeros.', 'tomarte el día libre.', 'invitar a todos a cenar.'], why: '*a veces es él quien trae algo para los compañeros*.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find the words from this unit.', words: ['jornada', 'menú', 'puente', 'tutear', 'ambiente', 'pausa'] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Es lunes. Le preguntas a un compañero: ___', o: ['¿Qué tal el fin de semana?', '¿Cuánto ganas?', '¿A quién votaste?'], why: 'The weekend is a safe topic. Money and politics are not.' },
      { q: 'Tu compañera te cuenta una buena noticia. Dices: ___', o: ['¡Qué bien!', '¡Qué pena!', '¡Qué rollo!'], why: 'Good news: *¡Qué bien!*' },
      { q: 'Quieres terminar la conversación: ___', o: ['Bueno, te dejo, que tengo una reunión.', 'Ya está, adiós.', 'No quiero hablar más.'], why: '*Te dejo, que…* + a reason is the friendly way.' },
      { q: 'Alguien te habla de usted y prefieres tú: ___', o: ['Puedes tutearme.', 'Puede usted.', 'Háblame de usted.'], why: '*tutear*: to say *tú*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '¿Cuánto tiempo ___ en la empresa? (llevar, tú)', a: ['llevas'], why: '*¿Cuánto tiempo llevas…?*' },
      { q: '¿Te ___ tomar algo después del trabajo? (apetecer)', a: ['apetece'], why: '*apetecer* is like *gustar*: *te apetece*.' },
      { q: 'Me ___, pero hoy no puedo. (encantar, condicional)', a: ['encantaría', 'encantaria'], why: '*Me encantaría, pero…*: a soft no.' },
      { q: 'Muchos trabajadores comen el menú del ___ en un bar.', a: ['día', 'dia'], why: '*el menú del día*: a set lunch at a fixed price.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Tienes planes para el puente?', why: '*¿Tienes planes para* + time?' },
      { a: '¿Por qué no vienes a comer con nosotros?', why: '*¿Por qué no* + verb? is a friendly invitation.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'En muchas oficinas españolas los compañeros se tutean.', a: 't', why: 'Saying *tú* to colleagues is normal in most Spanish offices.' },
      { q: 'Con la jornada intensiva se trabaja por la mañana y por la tarde.', a: 'f', why: 'With *jornada intensiva* you work in the morning without a lunch break and the afternoon is free.' },
    ] },
  ],
};
