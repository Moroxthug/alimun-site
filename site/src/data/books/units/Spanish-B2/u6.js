// Spanish B2, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Media and public debate',
  goal: 'Follow and join a debate on the media, the news and social networks. Learn the vocabulary and collocations of the news, mandar, hacer and dejar with an infinitive, ser and estar with the participle, and the phrases that give, soften and answer an opinion.',
  art: 'churro',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['media', 'news', 'debate', 'opinions', 'discourse markers'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'The news and social networks',
      about: 'Learn the words and collocations used to talk about the media.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'Many words about the media go with one verb. You **difundir** a news item, **desmentir** a hoax, **dar** an interview, **seguir** the news, **compartir** a post and **verificar** the source. Learn them together: *difundir una noticia, desmentir un bulo, dar una entrevista, seguir las noticias, compartir una publicación, verificar la fuente*. The people and places are **el periodista**, **la prensa**, **el titular** (the headline) and **las redes sociales**.' },
          { t: 'table', caption: 'Collocations of the news', explain: ['head', 'col1'], head: ['Expression', 'Meaning', 'Example'], rows: [
            ['difundir una noticia', 'to spread a piece of news', 'El periódico difundió la noticia ayer.'],
            ['desmentir un bulo', 'to deny a hoax', 'La empresa desmintió el bulo.'],
            ['dar una entrevista', 'to give an interview', 'La ministra dio una entrevista a la radio.'],
            ['seguir las noticias', 'to follow the news', 'Sigo las noticias todas las mañanas.'],
            ['compartir una publicación', 'to share a post', 'Compartió la publicación con sus amigos.'],
            ['verificar la fuente', 'to check the source', 'Antes de compartir, verifica la fuente.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain a false piece of news is often a **bulo**; in Latin America people say **rumor**, **noticia falsa** or **fake news**. You **dar** an interview but a journalist **hace** an interview: *La ministra dio una entrevista. El periodista hizo una entrevista a la ministra.* Do not say *hacer una entrevista* for the person who answers.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'El periódico **difundió** la noticia ayer.', n: 'To spread a piece of news.' },
            { s: 'La empresa **desmintió** el bulo.', n: 'To deny a hoax.' },
            { s: 'La ministra **dio** una entrevista a la radio.', n: 'The person who answers.' },
            { s: 'El periodista **hizo** una entrevista a la ministra.', n: 'The person who asks.' },
            { s: 'Antes de compartir, **verifica** la fuente.', n: 'To check the source.' },
          ] },
          { t: 'dialogue', title: 'En el desayuno', lines: [
            { who: 'Ana', s: '¿Has visto el titular de hoy?' },
            { who: 'Pedro', s: 'Sí. La empresa ha desmentido el bulo que circulaba en las redes sociales.' },
            { who: 'Ana', s: 'Mucha gente compartió la publicación sin verificar la fuente.' },
            { who: 'Pedro', s: 'Claro, y ahora nadie difunde la corrección.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Ayer la empresa ___ el bulo. (desmentir)', a: ['desmintió'], why: 'Indefinido of *desmentir*: *desmintió*.' },
            { q: 'Ayer la ministra ___ una entrevista a la radio. (dar)', a: ['dio'], why: 'The person who answers *da* an interview: *dio*.' },
            { q: 'Antes de compartir, ___ la fuente. (tú, verificar)', a: ['verifica'], why: 'Imperative: *verifica*.' },
            { q: 'Sigo las ___ todas las mañanas.', a: ['noticias'], why: '*Seguir las noticias*.' },
            { q: 'Ella compartió la ___ con sus amigos.', a: ['publicación'], why: '*Compartir una publicación*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
            ['difundir una noticia', 'to spread a piece of news'],
            ['desmentir un bulo', 'to deny a hoax'],
            ['dar una entrevista', 'to give an interview'],
            ['verificar la fuente', 'to check the source'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Antes de compartir, verifica la ___.', o: ['fuente', 'titular', 'entrevista'], why: '*Verificar la fuente*.' },
            { q: 'La empresa va a ___ el bulo.', o: ['desmentir', 'difundir', 'seguir'], why: '*Desmentir un bulo*.' },
            { q: 'El periodista hizo una ___ a la ministra.', o: ['entrevista', 'publicación', 'fuente'], why: '*Hacer una entrevista* to someone.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ayer el periódico [difunda] la noticia.', a: ['difundió'], why: 'Indefinido: *difundió*.' },
            { s: 'Sigo las [noticia] todas las mañanas.', a: ['noticias'], why: '*Las noticias* in the plural.' },
            { s: 'La ministra [hizo] una entrevista a la radio.', a: ['dio'], why: 'The person who answers *da* an interview.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'El periódico difundió la noticia ayer.', why: 'Subject, verb, object, time.' },
            { a: 'La ministra dio una entrevista a la radio.', why: '*Dar una entrevista*.' },
            { a: 'Antes de compartir, verifica la fuente.', why: '*Verificar la fuente*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Mandar, hacer, dejar; ser and estar',
      about: 'Use mandar, hacer and dejar with an infinitive, and ser or estar with the participle.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Three verbs take an **infinitive** straight after them. **Mandar** means *to have something done*: *Mandé reparar el coche.* **Dejar** means *to let*: *Lo dejé hablar.* **Hacer** means *to make someone do something*: *Me hicieron esperar.* The pronoun goes before the first verb: *lo dejé hablar*, *lo mandé salir*. With the **participle**, **ser** shows the **action**: *La noticia fue difundida ayer.* **Estar** shows the **state** that results: *La tienda está cerrada.* The participle agrees with the subject.' },
          { t: 'table', caption: 'Verb patterns', explain: ['head', 'col1'], head: ['Pattern', 'Meaning', 'Example'], rows: [
            ['mandar + infinitive', 'to have something done', 'Mandé reparar el coche.'],
            ['dejar + infinitive', 'to let someone do it', 'Lo dejé hablar.'],
            ['hacer + infinitive', 'to make someone do it', 'Me hicieron esperar.'],
            ['ser + participle', 'the action', 'La noticia fue difundida ayer.'],
            ['estar + participle', 'the state', 'La tienda está cerrada.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The passive with **ser** is more common in writing and in the news. In speech, Spanish prefers **se**: *Se difundió la noticia ayer.* The infinitive after **mandar** does not change with a plural thing: *Mandé reparar los coches.* **Mandar** also means *to send*: *Mandé una carta.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Mandé reparar** el coche.', n: 'I had the car repaired.' },
            { s: '**Lo dejé hablar** hasta el final.', n: 'I let him speak.' },
            { s: '**Me hicieron esperar** una hora.', n: 'They made me wait.' },
            { s: 'La noticia **fue difundida** ayer.', n: 'The action.' },
            { s: 'La tienda **está cerrada**.', n: 'The state.' },
          ] },
          { t: 'dialogue', title: 'En el taller', lines: [
            { who: 'Ana', s: '¿Mandaste reparar el coche?' },
            { who: 'Pedro', s: 'Sí, pero todavía está en el taller.' },
            { who: 'Ana', s: '¿Dejaste allí las llaves?' },
            { who: 'Pedro', s: 'Sí. Me hicieron esperar una hora, pero ya está pagado.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Mandé ___ el coche. (reparar)', a: ['reparar'], why: '*Mandar* + infinitive.' },
            { q: 'Lo dejé ___ hasta el final. (hablar)', a: ['hablar'], why: '*Dejar* + infinitive.' },
            { q: 'Me hicieron ___ una hora. (esperar)', a: ['esperar'], why: '*Hacer* + infinitive.' },
            { q: 'La noticia ___ difundida ayer. (ser)', a: ['fue'], why: 'The action: *ser*.' },
            { q: 'Ahora la tienda ___ cerrada. (estar)', a: ['está'], why: 'The state: *estar*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Action or state? Sort the sentences.', groups: ['action (ser)', 'state (estar)'], explain: ['groups'], items: [
            { s: 'La noticia fue difundida ayer.', g: 0, why: 'The action: *fue*.' },
            { s: 'La tienda está cerrada.', g: 1, why: 'The state: *está*.' },
            { s: 'La carta fue escrita por el director.', g: 0, why: 'The action: *fue*.' },
            { s: 'La carta está escrita en inglés.', g: 1, why: 'The state: *está*.' },
            { s: 'La puerta fue abierta por el viento.', g: 0, why: 'The action: *fue*.' },
            { s: 'La puerta está abierta.', g: 1, why: 'The state: *está*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Ahora la puerta ___ abierta.', o: ['está', 'fue', 'es'], why: 'The state now: *estar*.' },
            { q: 'La carta ___ escrita por el director ayer.', o: ['fue', 'está', 'es'], why: 'The action: *ser*.' },
            { q: 'Mandé ___ un vestido.', o: ['hacer', 'hago', 'hice'], why: '*Mandar* + infinitive.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word in brackets.', items: [
            { q: 'El mecánico reparó el coche. Yo lo pedí.', cue: 'Mandé', a: ['Mandé reparar el coche.'], why: '*Mandar* + infinitive.' },
            { q: 'Él habló. Yo lo permití.', cue: 'Lo dejé', a: ['Lo dejé hablar.'], why: 'The pronoun goes before *dejar*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ahora la tienda [fue] cerrada.', a: ['está'], why: 'The state now: *estar*.' },
            { s: 'Mandé [reparé] el coche.', a: ['reparar'], why: '*Mandar* + infinitive.' },
            { s: 'La noticia [está] difundida ayer.', a: ['fue'], why: 'The action: *ser*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Mandé reparar el coche en el taller.', why: '*Mandar* + infinitive.' },
            { a: 'Lo dejé hablar hasta el final.', why: 'The pronoun goes before *dejar*.' },
            { a: 'La noticia fue difundida ayer.', why: '*Ser* + participle.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Giving and softening an opinion',
      about: 'Give an opinion, agree, disagree politely and use the markers of a debate.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'To give an opinion, say **En mi opinión, …**, **Me parece que …** or **Creo que …**. To agree, say **Tienes razón** or **Estoy de acuerdo**. To agree only a little, say **Estoy de acuerdo en parte**. To soften a disagreement, say **No sé si es del todo así** or **Quizá sería mejor …**. After **quizá** and **tal vez** use the **subjunctive**: *Quizá tengas razón.* Debate markers organise what you say: **sin embargo** (however), **en cambio** (on the other hand), **por lo tanto** (therefore), **de hecho** (in fact), **o sea** (that is) and **además** (besides).' },
          { t: 'table', caption: 'Markers of a debate', explain: ['head', 'col1'], head: ['Marker', 'Use', 'Example'], rows: [
            ['sin embargo', 'a contrast', 'Me gusta la idea; sin embargo, creo que es peligrosa.'],
            ['en cambio', 'a contrast between two things', 'Él es optimista; ella, en cambio, es prudente.'],
            ['por lo tanto', 'a consequence', 'Hay bulos; por lo tanto, hay que verificar.'],
            ['de hecho', 'in fact', 'De hecho, tienes razón.'],
            ['o sea', 'that is', 'Es tarde; o sea, no llegaremos.'],
            ['además', 'adds a point', 'Es barato; además, es cómodo.'],
          ] },
          { t: 'tip', art: 'owl', md: '**A lo mejor** (maybe) is common in speech and always takes the **indicative**: *A lo mejor tienes razón.* **Quizá** and **tal vez** take the **subjunctive**, and the indicative when you feel more sure. In Spain, **vale** means *OK*, and **pues** is a common word to start an answer. In Latin America, people say **bueno** or **dale** for *OK*.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**En mi opinión**, el precio es demasiado alto.', n: 'Giving a view.' },
            { s: '**Estoy de acuerdo en parte** con lo que dices.', n: 'Partly agreeing.' },
            { s: '**Quizá sería mejor** esperar un día más.', n: 'A soft suggestion.' },
            { s: '**Quizá tengas** razón.', n: '*Quizá* + subjunctive.' },
            { s: 'No me gusta la idea; **sin embargo**, la entiendo.', n: 'A contrast.' },
          ] },
          { t: 'dialogue', title: 'Un debate', lines: [
            { who: 'Sara', s: 'Creo que las redes sociales informan más deprisa.' },
            { who: 'Paulo', s: 'De hecho, sí; sin embargo, no todo lo que se lee es verdad.' },
            { who: 'Sara', s: 'Además, mucha gente ni siquiera verifica la fuente.' },
            { who: 'Paulo', s: 'Estoy de acuerdo en parte; a lo mejor el problema son las prisas.' },
            { who: 'Sara', s: 'Quizá tengas razón. Veremos qué pasa.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Me gusta la idea; ___, creo que es peligrosa.', a: ['sin embargo'], why: '*Sin embargo* = however.' },
            { q: 'Él es optimista; ella, ___, es prudente.', a: ['en cambio'], why: '*En cambio* contrasts two things.' },
            { q: 'Quizá ___ razón. (tú, tener)', a: ['tengas'], why: '*Quizá* + subjunctive.' },
            { q: 'Estoy de acuerdo ___ parte con lo que dices.', a: ['en'], why: '*Estar de acuerdo en parte*.' },
            { q: 'Hay bulos; ___, hay que verificar las fuentes.', a: ['por lo tanto'], why: '*Por lo tanto* gives the consequence.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the phrase with what it does.', pairs: [
            ['En mi opinión', 'I give my view'],
            ['Estoy de acuerdo en parte', 'I partly agree'],
            ['Tienes razón, pero…', 'I agree, then object'],
            ['Quizá sería mejor…', 'I suggest softly'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Which sentence is softer?', o: ['Quizá sería mejor esperar.', 'Esperar es la única solución.', 'No esperes.'], why: '*Quizá sería mejor* softens a suggestion.' },
            { q: 'You partly agree. You say:', o: ['Estoy de acuerdo en parte.', 'Estoy totalmente de acuerdo.', 'No estoy de acuerdo en nada.'], why: '*Estoy de acuerdo en parte*.' },
            { q: 'Quizá ___ razón.', o: ['tengas', 'tienes', 'tenías'], why: '*Quizá* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Agree or disagree? Sort the phrases.', groups: ['agree', 'disagree or soften'], explain: ['groups'], items: [
            { s: 'Tienes toda la razón.', g: 0, why: 'A full agreement.' },
            { s: 'Claro, es verdad.', g: 0, why: 'A full agreement.' },
            { s: 'De hecho, estoy de acuerdo.', g: 0, why: 'A full agreement.' },
            { s: 'No estoy del todo de acuerdo.', g: 1, why: 'A soft disagreement.' },
            { s: 'No sé si es del todo así.', g: 1, why: 'A soft disagreement.' },
            { s: 'Quizá sería mejor esperar.', g: 1, why: 'A soft suggestion.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Quizá [tienes] razón.', a: ['tengas'], why: '*Quizá* + subjunctive.' },
            { s: 'Estoy de acuerdo [de] parte.', a: ['en'], why: '*Estar de acuerdo en parte*.' },
            { s: 'Me parece [si] la idea es buena.', a: ['que'], why: '*Me parece que*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'En mi opinión, el precio es demasiado alto.', why: 'Opinion first, then the sentence.' },
            { a: 'Estoy de acuerdo en parte con lo que dices.', why: '*Estar de acuerdo en parte*.' },
            { a: 'Quizá sería mejor esperar un día más.', why: '*Quizá sería mejor* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Menos pantallas en la mesa',
      about: 'Read an opinion article and a reader\'s reply.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Menos pantallas en la mesa', md: 'En mi opinión, las redes sociales han cambiado la forma en que hablamos, y no siempre para mejor. Mucha gente difunde una noticia sin verificar la fuente; después, cuando la empresa desmiente el bulo, ya nadie lo lee. De hecho, compartir es fácil, pero corregir es difícil.\n\nAdemás, he dejado de seguir las noticias durante la cena. Mandé apagar la televisión del salón y dejé el móvil en un cajón. Quizá sea una exageración, pero la conversación ha vuelto a la mesa.\n\nRespuesta de una lectora: Estoy de acuerdo en parte con el autor. Es verdad que las noticias falsas son un problema; sin embargo, las redes también permiten que la verdad se difunda deprisa. A lo mejor el problema no son las pantallas, sino las prisas. Por lo tanto, quizá lo mejor sea verificar siempre la fuente antes de compartir.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'El autor cree que las redes han cambiado todo para mejor.', a: 'f', why: '*Y no siempre para mejor.*' },
            { q: 'El autor ha dejado de seguir las noticias durante la cena.', a: 't', why: '*He dejado de seguir las noticias durante la cena.*' },
            { q: 'La lectora está totalmente de acuerdo con el autor.', a: 'f', why: '*Estoy de acuerdo en parte.*' },
            { q: 'La lectora dice que las redes también difunden la verdad.', a: 't', why: '*Permiten que la verdad se difunda deprisa.*' },
            { q: 'El autor trabaja en un periódico.', a: 'ng', why: 'The text does not say so.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: '¿Qué hizo el autor con el móvil?', o: ['Lo dejó en un cajón.', 'Lo vendió.', 'Se lo dio a su hija.'], why: '*Dejé el móvil en un cajón.*' },
            { q: 'Para la lectora, ¿cuál puede ser el problema?', o: ['Las prisas.', 'Las pantallas.', 'Las noticias.'], why: '*Quizá el problema no son las pantallas, sino las prisas.*' },
            { q: '¿Qué aconseja la lectora?', o: ['Verificar la fuente antes de compartir.', 'Dejar de leer noticias.', 'Apagar el móvil.'], why: '*Verificar siempre la fuente antes de compartir.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the discourse markers.', items: [
            { s: '[Además], he dejado de seguir las noticias durante la cena. [De hecho], compartir es fácil, pero corregir es difícil.', why: '*Además* adds a point; *de hecho* reinforces it.' },
            { s: '[Sin embargo], las redes también permiten que la verdad se difunda, y [por lo tanto] hay que verificar.', why: '*Sin embargo* contrasts; *por lo tanto* gives the consequence.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'El autor ha ___ de seguir las noticias durante la cena. (dejar)', a: ['dejado'], why: 'The participio of *dejar*: *dejado*.' },
            { q: 'Mandé ___ la televisión. (apagar)', a: ['apagar'], why: '*Mandar* + infinitive.' },
            { q: 'Estoy de acuerdo ___ parte con el autor.', a: ['en'], why: '*Estar de acuerdo en parte*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Mandé apagar la televisión del salón.', why: '*Mandar* + infinitive.' },
            { a: 'Quizá lo mejor sea verificar la fuente.', why: '*Quizá* + subjunctive.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ayer la empresa ___ el bulo.', o: ['desmintió', 'desmentir', 'desmiente'], why: 'Indefinido: *desmintió*.' },
      { q: 'Mandé ___ el coche.', o: ['reparar', 'reparé', 'repara'], why: '*Mandar* + infinitive.' },
      { q: 'Ahora la tienda ___ cerrada.', o: ['está', 'fue', 'es'], why: 'The state now: *estar*.' },
      { q: 'Quizá ___ razón.', o: ['tengas', 'tienes', 'tuviste'], why: '*Quizá* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Antes de compartir, ___ la fuente. (tú, verificar)', a: ['verifica'], why: 'Imperative: *verifica*.' },
      { q: 'Lo dejé ___ hasta el final. (hablar)', a: ['hablar'], why: '*Dejar* + infinitive.' },
      { q: 'Me gusta la idea; ___, creo que es peligrosa.', a: ['sin embargo'], why: '*Sin embargo* = however.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
      ['difundir una noticia', 'to spread a piece of news'],
      ['dar una entrevista', 'to give an interview'],
      ['de hecho', 'in fact'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word in brackets.', items: [
      { q: 'El mecánico reparó el coche. Yo lo pedí.', cue: 'Mandé', a: ['Mandé reparar el coche.'], why: '*Mandar* + infinitive.' },
      { q: 'Él habló. Yo lo permití.', cue: 'Lo dejé', a: ['Lo dejé hablar.'], why: 'The pronoun goes before *dejar*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'La ministra [hizo] una entrevista a la radio.', a: ['dio'], why: 'The person who answers *da* an interview.' },
      { s: 'Estoy de acuerdo [de] parte.', a: ['en'], why: '*Estar de acuerdo en parte*.' },
    ] },
  ],
};
