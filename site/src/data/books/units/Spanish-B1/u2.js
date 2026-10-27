// Spanish B1, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Opinions',
  goal: 'Give your opinion, agree and disagree.',
  art: 'cat',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['present-subjunctive', 'creo-que-no-creo-que', 'agreeing-disagreeing', 'working-from-home'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'The present subjunctive',
      about: 'Make the present subjunctive of regular verbs and of the common irregular ones.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'The **subjunctive** is a set of verb forms for things that are not presented as facts: doubts, wishes, feelings, possibilities. You will use it a lot from now on. To make it, take the *yo* form of the present, drop the *-o* and add the endings of the **other** group: *-ar* verbs take *e*, and *-er* and *-ir* verbs take *a*.' },
          { t: 'table', caption: 'Regular verbs', explain: ['head'], quiz: true, head: ['', 'hablar', 'comer', 'vivir'], rows: [
            ['yo', 'hable', 'coma', 'viva'],
            ['tú', 'hables', 'comas', 'vivas'],
            ['él, ella, usted', 'hable', 'coma', 'viva'],
            ['nosotros, nosotras', 'hablemos', 'comamos', 'vivamos'],
            ['vosotros, vosotras', 'habléis', 'comáis', 'viváis'],
            ['ellos, ellas, ustedes', 'hablen', 'coman', 'vivan'],
          ] },
          { t: 'text', md: 'In this lesson the sentences start with *Es posible que…* (It is possible that…). It always takes the subjunctive.' },
        ],
        [
          { t: 'table', caption: 'Common irregular verbs', explain: ['head'], quiz: true, head: ['Infinitive', 'yo, él, ella', 'nosotros'], rows: [
            ['ser', 'sea', 'seamos'],
            ['ir', 'vaya', 'vayamos'],
            ['estar', 'esté', 'estemos'],
            ['tener', 'tenga', 'tengamos'],
            ['hacer', 'haga', 'hagamos'],
            ['decir', 'diga', 'digamos'],
            ['venir', 'venga', 'vengamos'],
            ['poder', 'pueda', 'podamos'],
            ['querer', 'quiera', 'queramos'],
            ['haber', 'haya', 'hayamos'],
          ] },
          { t: 'tip', art: 'churro', md: 'Most irregular forms come from the *yo* form of the present: *tengo* gives *tenga*, *hago* gives *haga*, *salgo* gives *salga*, *conozco* gives *conozca*. Only a few verbs, such as *ser*, *ir*, *estar*, *haber*, *saber* (*sepa*) and *dar* (*dé*), do not follow this.' },
          { t: 'examples', items: [
            { s: 'Es posible que **llueva** mañana.', n: '*Llover* becomes *llueva*: the *-er* verb takes *a*.' },
            { s: 'Es posible que **vayamos** a la playa.', n: '*Ir* is irregular: *vaya*, *vayamos*.' },
            { s: 'Es posible que **lleguen** tarde.', n: 'Spelling: *llegar* becomes *llegue*, with *u*, to keep the hard *g* sound. Also *buscar*, *busque*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Complete the table.', verb: 'tener', tense: 'present subjunctive', rows: [
            ['yo', 'tenga', 'From the *yo* form *tengo*.'],
            ['tú', 'tengas'],
            ['él', 'tenga'],
            ['nosotros', 'tengamos'],
            ['vosotros', 'tengáis'],
            ['ellos', 'tengan'],
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: infinitive and subjunctive.', pairs: [
            ['ser', 'sea'], ['ir', 'vaya'], ['hacer', 'haga'], ['saber', 'sepa'], ['salir', 'salga'], ['decir', 'diga'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in brackets in the present subjunctive.', items: [
            { q: 'Es posible que Ana ___ (llegar) tarde.', a: ['llegue'], why: '*Llegar* adds *u* before *e*: *llegue*.' },
            { q: 'Es posible que (nosotros) ___ (comer) fuera esta noche.', a: ['comamos'], why: 'An *-er* verb takes *a*: *comamos*.' },
            { q: 'Es posible que ___ (hacer) frío mañana.', a: ['haga'], why: 'From *hago*: *haga*.' },
            { q: 'Es posible que mis padres ___ (venir) en verano.', a: ['vengan'], why: 'From *vengo*: *vengan*.' },
            { q: 'Es posible que (tú) ___ (tener) razón.', a: ['tengas'], why: 'From *tengo*: *tengas*.' },
            { q: 'Es posible que (vosotros) ___ (vivir) cerca de mí.', a: ['viváis'], why: 'An *-ir* verb takes *a*; the *vosotros* form has an accent: *viváis*.' },
            { q: 'Es posible que el museo ___ (estar) cerrado el lunes.', a: ['esté'], why: '*Estar* is irregular and has an accent: *esté*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'odd', h: 'Which one is not in the subjunctive?', items: [
            { o: ['habla', 'coma', 'viva', 'salga'], why: '*Habla* is the present indicative. The others have the "other" ending: *coma*, *viva*, *salga*.' },
            { o: ['vamos', 'seamos', 'hagamos', 'podamos'], why: '*Vamos* is the present indicative. The subjunctive is *vayamos*.' },
            { o: ['come', 'hable', 'escriba', 'trabaje'], why: '*Come* is the present indicative. The subjunctive of *comer* is *coma*.' },
            { o: ['dice', 'diga', 'esté', 'vaya'], why: '*Dice* is the present indicative. The subjunctive is *diga*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Creo que, no creo que',
      about: 'Use the indicative after creo que and the subjunctive after no creo que.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'When you say what you think is **true**, use the **indicative**: *Creo que tienes razón.* When you say you **do not** think something is true, use the **subjunctive**: *No creo que tengas razón.* The same happens with *es verdad que*, *está claro que* and *estoy seguro de que*.' },
          { t: 'table', caption: 'Opinions', explain: ['head'], quiz: true, head: ['+ indicative', '+ subjunctive'], rows: [
            ['creo que', 'no creo que'],
            ['pienso que', 'no pienso que'],
            ['me parece que', 'no me parece que'],
            ['es verdad que', 'no es verdad que'],
            ['está claro que', 'no está claro que'],
            ['estoy seguro de que', 'no estoy seguro de que'],
          ] },
          { t: 'text', md: '*Es posible que*, *es probable que* and *puede que* always take the subjunctive, positive or negative.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Creo que **tienes** razón.', n: 'A positive opinion: indicative.' },
            { s: 'No creo que **tengas** razón.', n: 'A negative opinion: subjunctive.' },
            { s: 'Es verdad que el piso **es** caro.', n: 'You present it as a fact: indicative.' },
            { s: 'No es verdad que los jóvenes no **lean**.', n: 'You deny it: subjunctive.' },
            { s: 'Me parece que **va** a llover.', n: '*Me parece que* works like *creo que*.' },
            { s: 'Puede que **llueva** esta tarde.', n: 'Possibility always takes the subjunctive.' },
          ] },
          { t: 'tip', art: 'churro', md: 'In questions, *¿Crees que…?* usually takes the indicative: *¿Crees que va a llover?* This works the same way in Spain and in Latin America.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Indicative or subjunctive? Choose.', items: [
            { q: 'Creo que el examen ___ fácil.', o: ['es', 'sea'], why: 'A positive opinion with *creo que*: indicative.' },
            { q: 'No creo que Javier ___ hoy.', o: ['venga', 'viene'], why: '*No creo que* takes the subjunctive: *venga*.' },
            { q: 'Es verdad que Madrid ___ mucho tráfico.', o: ['tiene', 'tenga'], why: '*Es verdad que* presents a fact: indicative.' },
            { q: 'No es verdad que los gatos ___ malos.', o: ['sean', 'son'], why: '*No es verdad que* denies it: subjunctive.' },
            { q: 'Me parece que ___ una buena idea.', o: ['es', 'sea'], why: '*Me parece que* in the positive: indicative.' },
            { q: 'No estoy segura de que la tienda ___ abierta.', o: ['esté', 'está'], why: 'Doubt with *no estoy segura de que*: subjunctive.' },
            { q: 'Es posible que ___ más tarde.', o: ['lleguemos', 'llegamos'], why: '*Es posible que* always takes the subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Make the opinion negative. Start with the words given.', items: [
            { q: 'Creo que tiene razón.', cue: 'No creo que', a: ['No creo que tenga razón.'], why: '*No creo que* + subjunctive: *tenga*.' },
            { q: 'Creo que el tren sale a las ocho.', cue: 'No creo que', a: ['No creo que el tren salga a las ocho.'], why: 'From *salgo*: *salga*.' },
            { q: 'Es verdad que Pedro es muy tímido.', cue: 'No es verdad que', a: ['No es verdad que Pedro sea muy tímido.'], why: '*No es verdad que* + subjunctive: *sea*.' },
            { q: 'Pienso que podemos ganar.', cue: 'No pienso que', a: ['No pienso que podamos ganar.'], why: '*No pienso que* + subjunctive: *podamos*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which mood comes after each expression?', groups: ['+ indicativo', '+ subjuntivo'], items: [
            { s: 'creo que', g: 0, why: 'A positive opinion: indicative.' },
            { s: 'es verdad que', g: 0, why: 'A fact: indicative.' },
            { s: 'me parece que', g: 0, why: 'A positive opinion: indicative.' },
            { s: 'está claro que', g: 0, why: 'Something clear is a fact: indicative.' },
            { s: 'no creo que', g: 1, why: 'A negative opinion: subjunctive.' },
            { s: 'no es verdad que', g: 1, why: 'You deny something: subjunctive.' },
            { s: 'es posible que', g: 1, why: 'A possibility: always subjunctive.' },
            { s: 'no pienso que', g: 1, why: 'A negative opinion: subjunctive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Agreeing and disagreeing',
      about: 'Agree, disagree and say "it depends" politely.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'To give your opinion, start with *En mi opinión…*, *Para mí…*, *(A mí) me parece que…* or *Creo que…*. To react to someone else, use the phrases below. A soft start, like *Puede ser, pero…*, makes it polite to disagree.' },
          { t: 'table', caption: 'Reacting to an opinion', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'When you use it'], rows: [
            ['Estoy de acuerdo (contigo).', 'you agree'],
            ['Tienes razón.', 'you agree: the other person is right'],
            ['Yo también lo creo.', 'you agree with a positive opinion'],
            ['Yo tampoco.', 'you agree with a negative opinion'],
            ['Depende.', 'your answer is not a simple yes or no'],
            ['Sí, pero…', 'you agree a little, then add a different idea'],
            ['Puede ser, pero…', 'polite: you do not fully agree'],
            ['Yo no lo veo así.', 'polite: you disagree'],
            ['No estoy de acuerdo.', 'you disagree'],
            ['¡Qué va!', 'informal: not at all'],
          ] },
        ],
        [
          { t: 'dialogue', title: '¿Ciudad o pueblo?', lines: [
            { who: 'Lucía', s: 'Para mí, vivir en el centro es lo mejor. Tienes todo cerca.' },
            { who: 'Andrés', s: 'Sí, pero es muy caro y hay mucho ruido. A mí me parece que en un pueblo se vive mejor.' },
            { who: 'Lucía', s: 'No estoy de acuerdo. No creo que en un pueblo haya tantas oportunidades de trabajo.' },
            { who: 'Andrés', s: 'Depende. Hoy mucha gente trabaja desde casa.' },
            { who: 'Lucía', s: 'En eso tienes razón. Pero a mí me encanta tener cines y teatros cerca.' },
            { who: 'Andrés', s: 'Bueno, cada uno tiene su opinión.' },
          ] },
          { t: 'tip', art: 'churro', md: '*También* answers a positive sentence and *tampoco* a negative one: *—No me gusta el ruido. —A mí tampoco.* In Spain people often say *vale* for "OK". In Latin America you hear *está bien* or *de acuerdo*, and in some countries *dale*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best reply.', items: [
            { q: '—Creo que el fútbol es aburrido. —___ Para mí es el deporte más emocionante.', o: ['Yo no lo veo así.', 'Yo también lo creo.', 'Tienes razón.'], why: 'The second speaker thinks the opposite, so this is a polite way to disagree.' },
            { q: '—No me gusta nada madrugar. —___ Me cuesta mucho levantarme.', o: ['A mí tampoco.', 'A mí también.', '¡Qué va!'], why: 'Agreeing with a negative sentence: *tampoco*.' },
            { q: '—Me encanta este barrio. —___ Es tranquilo y tiene muchos parques.', o: ['A mí también.', 'A mí tampoco.', 'No estoy de acuerdo.'], why: 'Agreeing with a positive sentence: *también*.' },
            { q: '—¿Es mejor estudiar por la mañana o por la noche? —___ Para algunas personas, por la mañana; para otras, por la noche.', o: ['Depende.', 'Estoy de acuerdo.', 'Yo también.'], why: 'The answer is not a simple yes or no: *Depende*.' },
            { q: '—Este restaurante es carísimo. —___, pero la comida es excelente.', o: ['Puede ser', 'Yo tampoco', 'A mí también'], why: '*Puede ser, pero…* accepts part of the idea and adds a different one.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the phrases that mean almost the same.', pairs: [
            ['Estoy de acuerdo.', 'Tienes razón.'],
            ['No estoy de acuerdo.', 'Yo no lo veo así.'],
            ['En mi opinión…', 'Para mí…'],
            ['Depende.', 'No es ni sí ni no.'],
            ['¡Qué va!', 'Para nada.'],
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentences. Some words do not belong.', items: [
            { a: 'No estoy de acuerdo contigo.', extra: ['en', 'soy'], why: '*Estar de acuerdo con alguien*: with *estar*, not *ser*.' },
            { a: 'No creo que tengas razón.', extra: ['tienes', 'de'], why: '*No creo que* + subjunctive: *tengas*, not *tienes*.' },
            { a: 'A mí me parece que es caro.', extra: ['sea', 'yo'], why: '*Me parece que* in the positive takes the indicative: *es*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Working from home',
      about: 'Read two opinions on working from home and compare them.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Marta, diseñadora', md: 'Trabajo desde casa tres días a la semana desde hace dos años y, para mí, es lo mejor que me ha pasado. Antes tardaba una hora en llegar a la oficina; ahora uso ese tiempo para hacer deporte o desayunar con calma.\n\nCreo que trabajo mejor en casa, porque hay menos ruido y nadie me interrumpe. Mucha gente dice que en casa te sientes solo, pero no creo que sea verdad para todos. Yo hablo con mis compañeros por videollamada varias veces al día. Eso sí, hace falta un espacio solo para trabajar. Trabajar en el sofá no es buena idea: al final te duele la espalda y no te concentras.' },
          { t: 'reading', title: 'Javier, jefe de equipo', md: 'Dirijo un equipo de doce personas y estoy de acuerdo en que trabajar desde casa tiene ventajas: la gente ahorra tiempo y dinero. Pero no creo que sea bueno para todo el mundo.\n\nLos compañeros nuevos, por ejemplo, aprenden mucho cuando ven trabajar a los demás, y eso es difícil por videollamada. Además, me parece que muchas buenas ideas nacen en conversaciones informales, en la cocina o en el pasillo. Por eso en mi equipo hemos decidido trabajar dos días en la oficina y tres en casa. Depende del trabajo y de la persona, pero para mí la mezcla es la mejor solución.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Marta trabaja desde casa todos los días.', a: 'f', why: 'She works from home three days a week.' },
            { q: 'Antes Marta tardaba mucho en llegar a la oficina.', a: 't', why: '*Antes tardaba una hora en llegar a la oficina.*' },
            { q: 'Marta piensa que todo el mundo se siente solo en casa.', a: 'f', why: '*No creo que sea verdad para todos.*' },
            { q: 'Para Marta, se puede trabajar bien en el sofá.', a: 'f', why: 'She says it is not a good idea.' },
            { q: 'Javier cree que trabajar desde casa no tiene ninguna ventaja.', a: 'f', why: 'He agrees that people save time and money.' },
            { q: 'En el equipo de Javier trabajan tres días a la semana en casa.', a: 't', why: '*…dos días en la oficina y tres en casa.*' },
            { q: 'Javier trabajaba antes en otra empresa.', a: 'ng', why: 'The text does not say where he worked before.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: '¿En qué están de acuerdo Marta y Javier?', o: ['Trabajar desde casa ahorra tiempo.', 'Es mejor trabajar siempre en casa.', 'Las videollamadas son aburridas.'], why: 'Marta uses the time she saves; Javier says people save time and money.' },
            { q: '«No creo que sea verdad para todos»: why sea?', o: ['After no creo que, the verb goes in the subjunctive.', 'Sea is the indicative of ser.', 'Marta is talking about the past.'], why: '*No creo que* + subjunctive: *sea*.' },
            { q: 'Según Javier, ¿por qué es difícil para los compañeros nuevos?', o: ['Aprenden mucho mirando a los demás.', 'No tienen ordenador en casa.', 'No les gusta hablar por teléfono.'], why: '*Aprenden mucho cuando ven trabajar a los demás.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the expressions that give an opinion.', items: [
            { s: '[Para mí], es lo mejor que me ha pasado. [Creo que] trabajo mejor en casa.', why: '*Para mí* and *creo que* introduce Marta’s opinion.' },
            { s: 'Además, [me parece que] muchas buenas ideas nacen en conversaciones informales.', why: '*Me parece que* introduces Javier’s opinion.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Es posible que mañana ___ sol.', o: ['haga', 'hace', 'hizo'], why: '*Es posible que* always takes the subjunctive: *haga*.' },
      { q: 'No creo que ___ tiempo para ir al cine.', o: ['tengamos', 'tenemos', 'tendremos'], why: '*No creo que* + subjunctive.' },
      { q: '—No me gustan las películas de miedo. —A mí ___.', o: ['tampoco', 'también', 'sí'], why: 'Agreeing with a negative sentence: *tampoco*.' },
      { q: '—Creo que ya es muy tarde. —Estoy de acuerdo ___.', o: ['contigo', 'con tú', 'a ti'], why: '*Estar de acuerdo con alguien*; *con* + *ti* becomes *contigo*.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Indicative or subjunctive? Choose.', items: [
      { q: 'Está claro que el plan no ___.', o: ['funciona', 'funcione'], why: '*Está claro que* presents a fact: indicative.' },
      { q: 'Creo que Elena ___ en Bilbao.', o: ['vive', 'viva'], why: 'A positive opinion: indicative.' },
      { q: 'No es verdad que ___ tan difícil.', o: ['sea', 'es'], why: '*No es verdad que* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in brackets in the right form.', items: [
      { q: 'No pienso que Carlos ___ (decir) mentiras.', a: ['diga'], why: 'From *digo*: *diga*, after *no pienso que*.' },
      { q: 'Me parece que ___ (ir, nosotros) a llegar tarde.', a: ['vamos'], why: '*Me parece que* in the positive: indicative, *vamos*.' },
      { q: 'Puede que (vosotros) ___ (estar) cansados.', a: ['estéis'], why: '*Puede que* + subjunctive; the *vosotros* form of *estar* is *estéis*.' },
      { q: 'No estoy seguro de que ellos ___ (querer) venir.', a: ['quieran'], why: 'Doubt: subjunctive, *quieran*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Make the opinion negative. Start with the words given.', items: [
      { q: 'Creo que es una buena idea.', cue: 'No creo que', a: ['No creo que sea una buena idea.'], why: '*No creo que* + subjunctive: *sea*.' },
      { q: 'Es verdad que hay mucho tráfico.', cue: 'No es verdad que', a: ['No es verdad que haya mucho tráfico.'], why: 'The subjunctive of *hay* is *haya*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
      { s: 'No creo que el restaurante [está] abierto hoy.', a: ['esté'], why: '*No creo que* + subjunctive: *esté*.' },
      { s: 'Yo [soy] de acuerdo contigo.', a: ['estoy'], why: 'The phrase is *estar de acuerdo*.' },
    ] },
  ],
};
