// Spanish B1, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'News and media',
  goal: 'Understand the news and report what people said. Use reported speech with dice que, dijo que and me preguntó si, the passive and impersonal se, and react to news.',
  art: 'parrot',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['reported-speech', 'reported-questions', 'passive-se', 'impersonal-se', 'news-media', 'reactions'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Dice que… Dijo que…',
      about: 'Report what people said and asked, and change the tense when you need to.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To tell someone what another person says, use **decir que**. If the reporting verb is in the **present** (*dice que*), the tense does not change. Only the person changes: *yo* becomes *él* or *ella*, *mi* becomes *su*.' },
          { t: 'examples', items: [
            { s: '“Estoy cansada.” → Marta **dice que está** cansada.', n: 'Present reporting verb: the tense stays the same.' },
            { s: '“Mañana voy al médico.” → Pedro **dice que** mañana **va** al médico.', n: '*voy* becomes *va*: the person changes, the tense does not.' },
            { s: '“He perdido mis llaves.” → Ana **dice que ha perdido** sus llaves.', n: '*mis* becomes *sus*.' },
          ] },
        ],
        [
          { t: 'text', md: 'When the reporting verb is in the **past** (*dijo que, me contó que, explicó que*), the verb in the reported sentence usually moves one step back into the past.' },
          { t: 'table', caption: 'Tense changes after dijo que', explain: ['head'], quiz: true, head: ['Direct speech', 'Reported speech'], rows: [
            ['“**Estoy** enfermo.”', 'Dijo que **estaba** enfermo.'],
            ['“**He terminado** el informe.”', 'Dijo que **había terminado** el informe.'],
            ['“**Fui** al cine.”', 'Dijo que **había ido** al cine. / Dijo que **fue** al cine.'],
            ['“**Llegaré** tarde.”', 'Dijo que **llegaría** tarde.'],
            ['“**Voy a** llamar.”', 'Dijo que **iba a** llamar.'],
            ['“**Vivía** en Sevilla.”', 'Dijo que **vivía** en Sevilla.'],
          ] },
          { t: 'tip', art: 'churro', md: 'Time and place words change too: *hoy* → *ese día*, *mañana* → *al día siguiente*, *ayer* → *el día anterior*, *aquí* → *allí*. If something is still true now, you can keep the present: *Me dijo que vive en Sevilla.*' },
        ],
        [
          { t: 'text', md: 'To report a question, use **preguntar**. For a **yes or no question**, use **si**. For a question with a question word (*dónde, cuándo, qué, cómo, por qué*), keep the question word with its accent. The tense changes in the same way.' },
          { t: 'examples', items: [
            { s: '“¿Tienes hambre?” → Me **preguntó si tenía** hambre.', n: 'A yes or no question: *si*, without an accent.' },
            { s: '“¿Dónde vives?” → Me preguntó **dónde vivía**.', n: 'The question word keeps its accent: *dónde*.' },
            { s: '“¿Cuándo empieza el curso?” → Le pregunté **cuándo empezaba** el curso.', n: '*empieza* becomes *empezaba*.' },
            { s: '“¿Vendrás a la fiesta?” → Nos preguntaron **si iríamos** a la fiesta.', n: 'The future *vendrás* becomes the condicional. *Venir* often becomes *ir* when the place changes.' },
          ] },
          { t: 'tip', art: 'churro', md: 'To report a request with a present verb, use *que* + subjunctive: *“Llámame.”* → *Dice que lo llames.* After *dijo que*, a request needs another subjunctive form that you will learn later.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: '“Estoy muy contenta.” → Lucía dijo que ___ muy contenta.', o: ['estaba', 'estuvo', 'estará'], why: 'After *dijo que*, the present *estoy* becomes the imperfecto *estaba*.' },
            { q: '“He comprado las entradas.” → Mateo dijo que ___ las entradas.', o: ['había comprado', 'habría comprado', 'compra'], why: 'The pretérito perfecto becomes the pluscuamperfecto: *había comprado*.' },
            { q: '“Te llamaré mañana.” → Carlos me dijo que me ___ al día siguiente.', o: ['llamaría', 'llamará', 'llamaba'], why: 'The future becomes the condicional: *llamaría*.' },
            { q: '“¿Te gusta el trabajo nuevo?” → Mi madre me preguntó ___ me gustaba el trabajo nuevo.', o: ['si', 'que', 'sí'], why: 'A yes or no question: *si*, without an accent.' },
            { q: '“¿Por qué no viniste?” → Sara me preguntó ___ no había ido.', o: ['por qué', 'porque', 'si'], why: 'The question word stays, with its accent: *por qué*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Report the sentences after dijo que or preguntó. Write the verb.', items: [
            { q: '“Tengo frío.” → Daniel dijo que ___ frío.', a: ['tenía'], why: 'Present → imperfecto: *tenía*.' },
            { q: '“Voy a cambiar de trabajo.” → Inés dijo que ___ a cambiar de trabajo.', a: ['iba'], why: '*voy a* → *iba a*.' },
            { q: '“Saldremos a las ocho.” → Dijeron que ___ a las ocho.', a: ['saldrían'], why: 'The future *saldremos* becomes the condicional *saldrían*.' },
            { q: '“¿Dónde está la estación?” → Un turista me preguntó dónde ___ la estación.', a: ['estaba'], why: 'Present → imperfecto: *estaba*.' },
            { q: '“Hemos vendido el coche.” → Mis vecinos me contaron que ___ el coche.', a: ['habían vendido'], why: 'Pretérito perfecto → pluscuamperfecto: *habían vendido*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Report the sentences. Start with the words given.', items: [
            { q: '“Vivo en Valencia.”', cue: 'Elena dijo que', a: ['Elena dijo que vivía en Valencia.', 'Elena dijo que vive en Valencia.'], why: '*vivo* → *vivía*. If it is still true, *vive* is also possible.' },
            { q: '“¿Hablas francés?”', cue: 'Me preguntó si', a: ['Me preguntó si hablaba francés.'], why: 'A yes or no question: *si* + imperfecto.' },
            { q: '“Mañana no vendré.”', cue: 'Andrés dijo que', a: ['Andrés dijo que al día siguiente no vendría.', 'Andrés dijo que no vendría al día siguiente.', 'Andrés dijo que no iría al día siguiente.', 'Andrés dijo que al día siguiente no iría.'], why: '*vendré* → *vendría*, and *mañana* → *al día siguiente*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Me preguntó dónde trabajaba.', why: '*preguntar* + question word with accent + imperfecto.' },
            { a: 'Dijo que llegaría tarde.', why: 'The future becomes the condicional after *dijo que*.' },
            { a: 'Nos contó que había perdido el tren.', why: '*contar que* + pluscuamperfecto for the earlier action.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Se construyó, se habla, se venden',
      about: 'Use se when the person who does the action is not important.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'When it is not important **who** does something, Spanish often uses **se** + the verb in the third person. It is very common in the news, on signs and in adverts.' },
          { t: 'text', md: 'With the **passive se**, the verb agrees with the thing: *se vende* **un piso**, *se venden* **pisos**. With the **impersonal se**, the sentence talks about people in general and the verb is always singular: *Aquí se vive bien.*' },
          { t: 'examples', items: [
            { s: 'El puente **se construyó** en 1890.', n: 'Passive *se* in the past: who built it is not important.' },
            { s: 'Ayer **se cerraron** dos carreteras por la nieve.', n: 'Plural: *dos carreteras*, so *se cerraron*.' },
            { s: 'En este barrio **se habla** catalán y castellano.', n: 'The verb is singular. With two languages joined by *y*, many speakers also say *se hablan*.' },
            { s: 'En España **se cena** bastante tarde.', n: 'Impersonal *se*: people in general.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Passive se: singular and plural', explain: ['head'], quiz: true, head: ['One thing', 'More than one thing'], rows: [
            ['Se vende bicicleta.', 'Se venden bicicletas.'],
            ['Se alquila habitación.', 'Se alquilan habitaciones.'],
            ['Se necesita camarero.', 'Se necesitan camareros.'],
            ['Se publicó un artículo.', 'Se publicaron dos artículos.'],
            ['Se ha encontrado una solución.', 'Se han encontrado varias soluciones.'],
          ] },
          { t: 'tip', art: 'churro', md: 'When the verb is followed by a specific person with *a*, the verb stays singular: *Se busca **a** los dueños del perro.* In written news you also find the passive with *ser*: *El hospital **fue inaugurado** en mayo.* It means the same, but it sounds more formal.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'En esta tienda ___ libros de segunda mano.', o: ['se venden', 'se vende', 'venden se'], why: '*libros* is plural: *se venden*.' },
            { q: 'El castillo ___ en el siglo XII.', o: ['se construyó', 'se construyeron', 'se construye'], why: 'One castle, in the past: *se construyó*.' },
            { q: 'En verano ___ muchas fiestas en los pueblos.', o: ['se celebran', 'se celebra', 'se celebramos'], why: '*muchas fiestas* is plural: *se celebran*.' },
            { q: '¿Cómo ___ “thank you” en español?', o: ['se dice', 'se dicen', 'se decimos'], why: 'One phrase, in general: *se dice*.' },
            { q: 'En mi país ___ muy bien.', o: ['se come', 'se comen', 'comen se'], why: 'Impersonal *se*, people in general: always singular, *se come*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: '[Se alquila] dos pisos en el centro.', a: ['Se alquilan'], why: '*dos pisos* is plural: *se alquilan*.' },
            { s: 'Ayer se [encontró] tres maletas en el aeropuerto.', a: ['encontraron'], why: '*tres maletas*: plural, *se encontraron*.' },
            { s: 'En este restaurante [se sirven] pescado fresco.', a: ['se sirve'], why: '*pescado fresco* is singular: *se sirve*.' },
            { s: 'Las nuevas normas [se publicó] ayer en internet.', a: ['se publicaron'], why: '*las nuevas normas*: plural, *se publicaron*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentences with se. Start with the words given.', items: [
            { q: 'La gente come mucho pescado en la costa.', cue: 'En la costa se', a: ['En la costa se come mucho pescado.'], why: 'Passive *se*: *mucho pescado* is singular, *se come*.' },
            { q: 'Abrieron el museo en 2015.', cue: 'El museo se', a: ['El museo se abrió en 2015.'], why: 'One museum: *se abrió*.' },
            { q: 'Aquí no aceptan tarjetas.', cue: 'Aquí no se', a: ['Aquí no se aceptan tarjetas.'], why: '*tarjetas* is plural: *se aceptan*.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentences. Some words do not belong.', items: [
            { a: 'Se buscan voluntarios para el festival.', extra: ['busca', 'están'], why: '*voluntarios* is plural: *se buscan*.' },
            { a: 'La noticia se publicó ayer.', extra: ['publicaron', 'fue'], why: 'One piece of news: *se publicó*.' },
            { a: 'En Argentina se habla español.', extra: ['hablan', 'es'], why: 'One language: *se habla*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: '¡No me digas!',
      about: 'The words for the news, and how to react when someone tells you something.',
      art: 'cat',
      spreads: [
        [
          { t: 'table', caption: 'The news', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['la noticia', 'a piece of news'],
            ['el titular', 'a headline'],
            ['la portada', 'the front page'],
            ['la prensa', 'the newspapers and magazines'],
            ['el / la periodista', 'a journalist'],
            ['el telediario', 'the news on TV (Spain)'],
            ['el reportaje', 'a long report'],
            ['la entrevista', 'an interview'],
            ['publicar', 'to publish, to post'],
            ['informar', 'to inform, to report'],
          ] },
          { t: 'tip', art: 'churro', md: 'In Latin America, the news on TV is usually *el noticiero* or *el noticiario*, not *el telediario*. *Una noticia* is one piece of news; *las noticias* is the news in general.' },
        ],
        [
          { t: 'table', caption: 'Reacting to news', explain: ['head', 'col1'], head: ['Spanish', 'Use'], rows: [
            ['¡No me digas!', 'surprise: really?'],
            ['¿En serio?', 'surprise, or you are not sure it is true'],
            ['¡Qué fuerte!', 'shock, very informal (Spain)'],
            ['¡Qué bien! / ¡Qué alegría!', 'good news'],
            ['¡Qué pena! / ¡Qué lástima!', 'sad or disappointing news'],
            ['¡Menos mal!', 'relief: thank goodness'],
            ['¡Vaya!', 'surprise, often about something bad'],
          ] },
          { t: 'dialogue', title: 'En la oficina', lines: [
            { who: 'Carla', s: '¿Has visto la noticia? Dicen que van a cerrar el cine de la plaza.' },
            { who: 'Diego', s: '¡No me digas! ¿Y por qué?' },
            { who: 'Carla', s: 'Según el periódico, se venden muy pocas entradas. El dueño dijo que no podía pagar el alquiler.' },
            { who: 'Diego', s: '¡Qué pena! Yo iba allí todos los domingos de pequeño.' },
            { who: 'Carla', s: 'Pero el ayuntamiento ha dicho que lo convertirá en un centro cultural.' },
            { who: 'Diego', s: 'Bueno, ¡menos mal!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the news and the best reaction.', pairs: [
            ['Me han dado el trabajo.', '¡Qué alegría! Enhorabuena.'],
            ['El perro de mi abuela se ha muerto.', '¡Qué pena! Lo siento mucho.'],
            ['Perdí la cartera, pero alguien la devolvió.', '¡Menos mal!'],
            ['Mi jefe se va a vivir a una isla desierta.', '¿En serio? No me lo creo.'],
            ['Se ha roto la lavadora otra vez.', '¡Vaya! Qué mala suerte.'],
          ] },
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword.', words: [
            { a: 'titular', clue: 'El título de una noticia, en letras grandes.' },
            { a: 'periodista', clue: 'La persona que escribe las noticias.' },
            { a: 'portada', clue: 'La primera página de un periódico.' },
            { a: 'entrevista', clue: 'Una conversación con preguntas y respuestas para el periódico o la radio.' },
            { a: 'prensa', clue: 'Todos los periódicos y revistas.' },
            { a: 'publicar', clue: 'Poner un artículo o un texto en el periódico o en internet.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word or reaction.', items: [
            { q: 'Esta noche hay un ___ sobre los bosques de Galicia en la tele.', o: ['reportaje', 'titular', 'periodista'], why: 'A long report on TV: *un reportaje*.' },
            { q: '—Han encontrado al niño perdido. Está bien. —¡___!', o: ['Menos mal', 'Qué pena', 'Vaya'], why: 'Relief after worry: *¡Menos mal!*' },
            { q: 'La foto del accidente salió en la ___ de todos los periódicos.', o: ['portada', 'entrevista', 'prensa'], why: 'The front page: *la portada*.' },
            { q: '—Han suspendido el concierto por la lluvia. —¡Qué ___!', o: ['lástima', 'alegría', 'bien'], why: 'Disappointing news: *¡Qué lástima!*' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find the media words.', words: ['noticia', 'titular', 'prensa', 'radio', 'portada', 'revista'] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A short news report',
      about: 'Read a news report from a small town and what people said about it.',
      art: 'dragon',
      spreads: [
        [
          { t: 'reading', title: 'Valdeoliva vuelve a tener escuela doce años después', md: 'La escuela del pueblo de Valdeoliva abrió ayer sus puertas por primera vez desde hace doce años. En total se han matriculado nueve niños de entre tres y once años, todos de familias que se mudaron al pueblo en los últimos dos años.\n\nLa escuela se cerró en 2014 porque solo quedaban dos alumnos. Desde entonces, los niños del pueblo tenían que ir en autobús a un colegio a cuarenta minutos de distancia.\n\nLa alcaldesa, Carmen Llorente, explicó a este periódico que el ayuntamiento había arreglado el edificio durante el verano. “Es un día muy especial para todos”, dijo. También anunció que el próximo año se abrirá una pequeña biblioteca en el mismo edificio.\n\nUna de las madres, que llegó desde la ciudad con su familia, contó que antes pasaba dos horas al día en el coche. Dijo que ahora su hija podría ir andando a clase. Los vecinos más mayores prepararon un desayuno con chocolate y churros para celebrarlo.\n\nSegún el ayuntamiento, se espera que dos familias más lleguen al pueblo antes de Navidad.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La escuela estuvo cerrada doce años.', a: 't', why: '*Por primera vez desde hace doce años.*' },
            { q: 'Todos los alumnos nacieron en Valdeoliva.', a: 'f', why: 'They are all from families who moved to the village in the last two years.' },
            { q: 'La escuela se cerró porque el edificio estaba en malas condiciones.', a: 'f', why: 'It closed because there were only two pupils left.' },
            { q: 'La alcaldesa tiene hijos en la escuela.', a: 'ng', why: 'The text does not say if the mayor has children.' },
            { q: 'El próximo año habrá una biblioteca en el edificio.', a: 't', why: '*El próximo año se abrirá una pequeña biblioteca.*' },
            { q: 'Los vecinos mayores organizaron un desayuno.', a: 't', why: '*Prepararon un desayuno con chocolate y churros.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the verbs with se that are passive or impersonal.', items: [
            { s: 'En total [se han matriculado] nueve niños. La escuela [se cerró] en 2014.', why: 'Who enrolled the children or closed the school is not important: *se han matriculado*, *se cerró*.' },
            { s: 'El próximo año [se abrirá] una pequeña biblioteca. Además, [se espera] que lleguen dos familias más.', why: '*se abrirá* (one library) and *se espera* (people in general).' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Look at the reported speech in the text.', items: [
            { q: 'The mayor’s words were: “El ayuntamiento ___ el edificio durante el verano.”', o: ['ha arreglado', 'arreglaría', 'arreglará'], why: 'The text says *había arreglado*: the pluscuamperfecto comes from the pretérito perfecto *ha arreglado*.' },
            { q: 'The mother’s words were: “Ahora mi hija ___ ir andando a clase.”', o: ['podrá', 'podía', 'pudo'], why: 'The text says *podría*: the condicional comes from the future *podrá*.' },
            { q: '“Antes pasaba dos horas al día en el coche”: why “pasaba”?', o: ['It describes a habit in the past.', 'It is a polite request.', 'It is a future plan.'], why: 'The imperfecto *pasaba* describes what she used to do.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '“Estoy en casa.” → Rosa dijo que ___ en casa.', o: ['estaba', 'estará', 'estuviera'], why: 'Present → imperfecto after *dijo que*.' },
      { q: '“¿Quieres un café?” → Me preguntó ___ quería un café.', o: ['si', 'que', 'qué si'], why: 'A yes or no question: *si*.' },
      { q: 'En esta oficina ___ pasaportes.', o: ['se renuevan', 'se renueva', 'renuevan se'], why: '*pasaportes* is plural: *se renuevan*.' },
      { q: '—He aprobado el examen de conducir. —¡___!', o: ['Qué bien', 'Qué pena', 'Qué lástima'], why: 'Good news: *¡Qué bien!*' },
      { q: 'El ___ de la noticia era: “Vuelve el tren al valle”.', o: ['titular', 'reportaje', 'periodista'], why: 'The headline: *el titular*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing verb.', items: [
      { q: '“Lo haré mañana.” → Dijo que lo ___ al día siguiente.', a: ['haría'], why: 'Future → condicional: *haría*.' },
      { q: '“He visto la película.” → Me contó que ___ visto la película.', a: ['había'], why: 'Pretérito perfecto → pluscuamperfecto: *había visto*.' },
      { q: 'La catedral se ___ (construir) en el siglo XIII.', a: ['construyó'], why: 'One cathedral, in the past: *se construyó*.' },
      { q: 'Se ___ (necesitar) dos camareros para el verano.', a: ['necesitan'], why: '*dos camareros* is plural: *se necesitan*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Me preguntó [donde] vivía.', a: ['dónde'], why: 'In a reported question, the question word keeps its accent: *dónde*.' },
      { s: '[Se vende] dos coches usados.', a: ['Se venden'], why: '*dos coches* is plural: *se venden*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Me preguntó si tenía tiempo.', why: '*preguntar si* + imperfecto.' },
      { a: 'Aquí se habla inglés.', why: 'One language: *se habla*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['Dijo que llegaría a las nueve.', 'Dijo que llegará a las nueve ayer.', 'Dijo si llegaría a las nueve.'], why: 'After *dijo que*, the future becomes the condicional.' },
      { q: '', o: ['Se buscan profesores de inglés.', 'Se buscamos profesores de inglés.', 'Se buscan a profesores de inglés.'], why: 'Passive *se* with a plural thing and no *a*: *se buscan*.' },
    ] },
  ],
};
