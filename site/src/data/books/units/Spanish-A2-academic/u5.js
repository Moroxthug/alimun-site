// Spanish A2 for study and exams, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Speaking about yourself',
  goal: 'Talk about yourself, your plans and your opinions in simple words, and give reasons with porque and es que.',
  art: 'parrot',
  tags: { skills: ['speaking', 'grammar', 'reading'], topics: ['introducing-yourself', 'desde-hace-llevar', 'porque-es-que', 'opinions', 'speaking-test'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Introducing yourself in a speaking test',
      about: 'Say who you are, what you do and how long you have been learning Spanish.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'A speaking test often starts with questions about you: your name, where you are from, where you live, your work or studies, your languages and your free time. Answer with a **full sentence**, and add one more detail.' },
          { t: 'table', caption: 'Talking about yourself', explain: ['head', 'col0'], quiz: true, head: ['Topic', 'Spanish'], rows: [
            ['Name', 'Me llamo Priya.'],
            ['Where you are from', 'Soy de la India, de Bombay.'],
            ['Where you live', 'Vivo en Valencia desde hace tres meses.'],
            ['Work or studies', 'Soy enfermera. Trabajo en un hospital.'],
            ['Languages', 'Hablo inglés, hindi y un poco de español.'],
            ['Spanish', 'Estudio español desde hace un año.'],
            ['Free time', 'En mi tiempo libre me gusta correr.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The examiner may say *usted* or *tú*. Listen to the verb: *¿Cómo se llama?* is *usted*, *¿Cómo te llamas?* is *tú*. Answer in the same way. In many tests the examiner says *usted* at first.' },
        ],
        [
          { t: 'examples', items: [
            { s: '¿**A qué se dedica**?', n: 'A polite way to ask about someone’s job. Answer: *Soy…* or *Trabajo en…*' },
            { s: '¿**Desde cuándo** estudia español?', n: 'Answer with *desde* + a date, or *desde hace* + an amount of time.' },
            { s: 'Estudio español **desde hace** un año.', n: '*desde hace* + time. Spanish uses the present here: English says *I have been studying*.' },
            { s: '**Llevo** un año estudiando español.', n: '*llevar* + time + gerund (*estudiando*): the same meaning.' },
            { s: 'Vivo aquí **desde** enero.', n: '*desde* + a point in time: a month, a year, a date.' },
          ] },
          { t: 'dialogue', title: 'En el examen oral', lines: [
            { who: 'Rosa', s: 'Buenos días. ¿Cómo se llama?' },
            { who: 'Kenji', s: 'Me llamo Kenji Sato.' },
            { who: 'Rosa', s: '¿De dónde es usted?' },
            { who: 'Kenji', s: 'Soy de Japón, de Osaka. Pero vivo en Sevilla desde hace ocho meses.' },
            { who: 'Rosa', s: '¿A qué se dedica?' },
            { who: 'Kenji', s: 'Soy cocinero. Trabajo en un restaurante japonés en el centro.' },
            { who: 'Rosa', s: '¿Desde cuándo estudia español?' },
            { who: 'Kenji', s: 'Estudio español desde hace un año y medio. Al principio estudiaba solo con una aplicación, pero ahora voy a una academia tres veces a la semana.' },
            { who: 'Rosa', s: '¿Y qué hace en su tiempo libre?' },
            { who: 'Kenji', s: 'Me gusta mucho pasear por el río y probar comida de otros países.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Kenji vive en Sevilla desde hace un año y medio.', a: 'f', why: 'He lives in Seville *desde hace ocho meses*. He has studied Spanish for a year and a half.' },
            { q: 'Kenji trabaja en un restaurante.', a: 't', why: '*Soy cocinero. Trabajo en un restaurante japonés.*' },
            { q: 'Ahora Kenji estudia solo con una aplicación.', a: 'f', why: 'That was at the start: *al principio*. Now he goes to a school.' },
            { q: 'Kenji va a clase tres veces a la semana.', a: 't', why: '*voy a una academia tres veces a la semana*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['¿Cómo te llamas?', 'Me llamo Priya.'],
            ['¿De dónde eres?', 'Soy de la India.'],
            ['¿A qué te dedicas?', 'Soy enfermera.'],
            ['¿Desde cuándo estudias español?', 'Desde hace un año.'],
            ['¿Qué haces en tu tiempo libre?', 'Me gusta correr.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Vivo en Madrid desde ___ seis meses.', o: ['hace', 'desde', 'por'], why: '*desde hace* + an amount of time.' },
            { q: 'Trabajo en esta empresa ___ 2022.', o: ['desde', 'desde hace', 'hace'], why: '*2022* is a point in time, so *desde* alone.' },
            { q: '___ tres años estudiando español.', o: ['Llevo', 'Estoy', 'Tengo'], why: '*llevar* + time + gerund: *Llevo tres años estudiando*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say the same with llevar.', items: [
            { q: 'Estudio español desde hace dos años.', cue: 'Llevo', a: ['Llevo dos años estudiando español.'], why: '*llevar* + the time + the gerund: *estudiando*.' },
            { q: 'Vivo en Bilbao desde hace un mes.', cue: 'Llevo', a: ['Llevo un mes viviendo en Bilbao.', 'Llevo un mes en Bilbao.'], why: '*vivir → viviendo*. With a place you can also leave out the gerund: *Llevo un mes en Bilbao*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Reasons and opinions',
      about: 'Give a reason with porque and es que, and an opinion with creo que, me parece and para mí.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In a speaking test, a short answer is not enough: say **why**. Give a reason with **porque**. When you speak, you can also start an explanation with **es que**. To give your opinion, use **creo que** + a verb, **me parece** + an adjective, or **para mí**.' },
          { t: 'table', caption: 'Giving your opinion', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'English'], rows: [
            ['Creo que es útil.', 'I think it is useful.'],
            ['Me parece difícil.', 'I find it difficult.'],
            ['Para mí, lo más difícil es la gramática.', 'For me, the most difficult thing is grammar.'],
            ['Estoy de acuerdo.', 'I agree.'],
            ['No estoy de acuerdo.', 'I do not agree.'],
            ['¿Y tú qué piensas?', 'And what do you think?'],
          ] },
          { t: 'tip', art: 'owl', md: 'After *no creo que*, Spanish uses a verb form you learn at B1, the subjunctive. At A2 you can say *Creo que no es fácil* instead.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Estudio español **porque** quiero trabajar en México.', n: '*porque* + the reason. The word order does not change.' },
            { s: '—¿Por qué no vienes? —**Es que** tengo un examen mañana.', n: '*es que*: a very common way to start an explanation when you speak.' },
            { s: 'Me gusta la ciudad. **Por eso** quiero estudiar aquí.', n: '*por eso*: for this reason.' },
            { s: '**Me parecen** muy útiles las clases de conversación.', n: 'With a plural noun: *me parecen*, like *me gustan*.' },
            { s: '**Lo más difícil** para mí es la pronunciación de la erre.', n: '*lo más* + adjective: the most … thing.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Las clases de conversación me ___ muy útiles.', o: ['parecen', 'parece', 'creo'], why: '*las clases* is plural: *me parecen*.' },
            { q: '___ que el examen es fácil.', o: ['Creo', 'Para mí', 'Estoy'], why: '*creo que* + a verb. *Para mí* needs no *que*.' },
            { q: 'Estudio español ___ quiero vivir en Chile.', o: ['porque', 'por qué', 'por eso'], why: 'The reason comes after: *porque*. *¿Por qué?* is the question.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
            { s: 'La gramática me [parecen] difícil.', a: ['parece'], why: '*la gramática* is singular: *me parece*.' },
            { s: 'Yo [estoy acuerdo] contigo.', a: ['estoy de acuerdo'], why: 'The fixed phrase is *estar de acuerdo*, with *de*.' },
            { s: 'Para mí, lo [mucho] difícil es escuchar.', a: ['más'], why: '*lo más* + adjective: the most … thing.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: '—¿Por qué no vienes a la fiesta? —___ que tengo un examen.', a: ['Es'], why: '*Es que…* starts an explanation.' },
            { q: 'Me gusta mucho Granada. ___ eso quiero estudiar allí.', a: ['Por'], why: '*por eso*: for this reason.' },
            { q: '¿Y tú qué ___? (pensar)', a: ['piensas'], why: '*pensar* changes *e* to *ie*: *tú piensas*.' },
            { q: 'No estoy de ___ contigo.', a: ['acuerdo'], why: '*estar de acuerdo*: to agree.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which one is different?', items: [
            { o: ['porque', 'creo que', 'me parece', 'para mí'], why: '*porque* gives a reason. The others give an opinion.' },
            { o: ['No estoy de acuerdo.', 'Estoy de acuerdo.', 'Tienes razón.', 'Yo también lo creo.'], why: 'Only *No estoy de acuerdo* says you think something different.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Creo que el español es muy útil.', why: '*Creo que* + a full sentence.' },
            { a: 'Estudio español porque quiero trabajar en Perú.', why: 'The main sentence, then *porque* + the reason.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a model conversation',
      about: 'Read a conversation between two candidates in a speaking test and see how they ask and answer.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'In many A2 speaking tests, two candidates talk about a topic. Each person has cards with a word on them and makes a question with each card. Here, Amira and Yusuf talk about learning Spanish.' },
          { t: 'reading', title: 'Tema: aprender español', md: '**Amira** (tarjeta: ¿Por qué?): ¿Por qué estudias español, Yusuf?\n\n**Yusuf:** Estudio español porque el año que viene quiero estudiar en España. Quiero estudiar Ingeniería.\n\n**Yusuf** (tarjeta: ¿Cuántas veces?): ¿Y tú, Amira? ¿Cuántas veces a la semana tienes clase?\n\n**Amira:** Tres veces a la semana, siempre por la tarde. A veces es cansado, porque antes trabajo ocho horas.\n\n**Amira** (tarjeta: ¿Difícil?): ¿Qué te parece difícil?\n\n**Yusuf:** Para mí, lo más difícil son los verbos. ¡Hay muchas formas! Pero la pronunciación me parece fácil.\n\n**Yusuf** (tarjeta: ¿Palabra favorita?): ¿Tienes una palabra favorita en español?\n\n**Amira:** Sí, «sobremesa». Es el tiempo después de comer, cuando la familia o los amigos se quedan en la mesa y hablan. Me gusta mucho, porque es una costumbre muy bonita.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Por qué estudia español Yusuf?', o: ['Quiere estudiar en España.', 'Trabaja en España.', 'Su familia es española.'], why: '*el año que viene quiero estudiar en España*.' },
            { q: '¿Cuándo tiene clase Amira?', o: ['tres tardes a la semana', 'tres mañanas a la semana', 'todos los días'], why: '*Tres veces a la semana, siempre por la tarde.*' },
            { q: '¿Qué le parece fácil a Yusuf?', o: ['la pronunciación', 'los verbos', 'la gramática'], why: '*la pronunciación me parece fácil*. The verbs are the most difficult for him.' },
            { q: '¿Qué es la «sobremesa»?', o: ['el tiempo para hablar en la mesa después de comer', 'una mesa muy grande', 'un postre'], why: 'Amira explains it: the time after a meal when people stay at the table and talk.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'A veces Amira está cansada porque trabaja antes de clase.', a: 't', why: '*A veces es cansado, porque antes trabajo ocho horas.*' },
            { q: 'Yusuf ya estudia Ingeniería en España.', a: 'f', why: 'He wants to study there *el año que viene*: next year.' },
            { q: 'Cada persona hace una pregunta con su tarjeta.', a: 't', why: 'Each card gives one question: *¿Por qué?*, *¿Cuántas veces?*…' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the answers with the words.', extra: ['nunca'], items: [
            { q: 'Estudio español ___ quiero vivir en Madrid.', a: 'porque', why: '*porque* + the reason.' },
            { q: '___ mí, lo más difícil es el vocabulario.', a: 'Para', why: '*para mí*: in my opinion.' },
            { q: 'La gramática me ___ interesante.', a: 'parece', why: '*me parece* + adjective, singular with *la gramática*.' },
            { q: '___ que es una buena idea.', a: 'Creo', why: '*creo que* + a sentence.' },
            { q: 'Tienes razón. Estoy de ___.', a: 'acuerdo', why: '*estar de acuerdo*: to agree.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Like Amira and Yusuf, answer each question with a reason or an example, then ask your partner a question too. In a speaking test, a conversation with two sides is better than two short answers.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
      { q: 'Vivo en Lima ___ hace un año.', o: ['desde', 'por', 'en'], why: '*desde hace* + an amount of time.' },
      { q: 'Las clases me ___ interesantes.', o: ['parecen', 'parece', 'piensan'], why: '*las clases* is plural: *me parecen*.' },
      { q: 'Estudio mucho ___ quiero aprobar.', o: ['porque', 'por eso', 'por qué'], why: 'The reason comes after: *porque*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '¿A qué te ___? —Soy profesora. (dedicarse)', a: ['dedicas'], why: '*dedicarse*, with *tú*: *te dedicas*.' },
      { q: '___ dos años estudiando español. (llevar, yo)', a: ['Llevo'], why: '*llevar* + time + gerund.' },
      { q: 'No estoy de ___ contigo.', a: ['acuerdo'], why: '*estar de acuerdo*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentences.', items: [
      { q: 'Estudio español desde hace tres años.', cue: 'Llevo', a: ['Llevo tres años estudiando español.'], why: '*llevar* + the time + the gerund *estudiando*.' },
      { q: 'Quiero trabajar en México. Estudio español.', cue: 'Estudio español', a: ['Estudio español porque quiero trabajar en México.'], why: 'The main sentence, then *porque* + the reason.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
      { s: 'Para mí, lo [mucho] difícil es la gramática.', a: ['más'], why: '*lo más* + adjective.' },
      { s: 'Vivo aquí [desde hace] marzo.', a: ['desde'], why: '*marzo* is a point in time: *desde marzo*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: '¿Desde cuándo estudias español?', why: '*Desde cuándo* is the question phrase, then the verb.' },
      { a: 'Creo que el examen es fácil.', why: '*Creo que* + a full sentence.' },
    ] },
  ],
};
