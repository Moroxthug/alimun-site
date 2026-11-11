// Spanish B1, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Wishes and feelings',
  goal: 'Say what you want others to do and how things make you feel.',
  art: 'sun',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['querer-que', 'feelings-subjunctive', 'ojala', 'good-wishes'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Quiero que vengas',
      about: 'Say what you want, hope or prefer others to do.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'When you want **someone else** to do something, use *querer que* + subjunctive: *Quiero que vengas.* When the person who wants and the person who does it are the **same**, use the infinitive: *Quiero venir.* *Esperar*, *preferir*, *necesitar* and *pedir* work in the same way.' },
          { t: 'table', caption: 'Infinitive or que + subjunctive', explain: ['head'], quiz: true, head: ['', 'Same person: infinitive', 'Another person: que + subjunctive'], rows: [
            ['querer', 'Quiero salir.', 'Quiero que salgas.'],
            ['esperar', 'Espero aprobar.', 'Espero que apruebes.'],
            ['preferir', 'Prefiero quedarme.', 'Prefiero que te quedes.'],
            ['necesitar', 'Necesito descansar.', 'Necesito que me ayudes.'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Mis padres **quieren que estudie** Medicina.', n: 'My parents want, I study: two different people, so *que* + subjunctive.' },
            { s: '**Quiero estudiar** Música.', n: 'I want and I study: the same person, so the infinitive.' },
            { s: 'Espero que **os guste** la comida.', n: '*Gustar* goes in the subjunctive too: *guste*, *gusten*.' },
            { s: 'La profesora nos **pide que hablemos** más despacio.', n: '*Pedir que* + subjunctive: to ask someone to do something.' },
            { s: '¿**Prefieres que vayamos** en tren?', n: '*Preferir que* + subjunctive.' },
          ] },
          { t: 'tip', art: 'churro', md: 'Verbs that change their stem in the present change it in the subjunctive too: *vuelvo* gives *vuelva*, *pido* gives *pida*, *duermo* gives *duerma*, *prefiero* gives *prefiera*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Infinitive or que + subjunctive? Choose.', items: [
            { q: 'Quiero ___ un café, por favor.', o: ['tomar', 'que tome', 'que tomo'], why: 'I want and I drink: the same person, so the infinitive.' },
            { q: 'Mi jefe quiere que (yo) ___ el informe hoy.', o: ['termine', 'terminar', 'termino'], why: 'My boss wants, I finish: *que* + subjunctive.' },
            { q: 'Esperamos ___ pronto.', o: ['veros', 'que veamos', 'que vemos'], why: 'We hope and we see: the same people, so the infinitive (*ver* + *os*).' },
            { q: 'Prefiero que no me ___ por la noche.', o: ['llames', 'llamas', 'llamar'], why: 'I prefer, you call: *que* + subjunctive.' },
            { q: 'Necesito que me ___ un favor.', o: ['hagas', 'haces', 'hacer'], why: 'I need, you do: *que* + subjunctive, *hagas*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in brackets in the right form: infinitive or subjunctive.', items: [
            { q: 'Espero que ___ (tener, tú) un buen viaje.', a: ['tengas'], why: 'I hope, you have: *que* + subjunctive.' },
            { q: 'Mis amigos quieren que ___ (ir, yo) con ellos a la playa.', a: ['vaya'], why: 'They want, I go: subjunctive of *ir*, *vaya*.' },
            { q: 'El médico me pide que ___ (dormir) más.', a: ['duerma'], why: '*Dormir* changes its stem: *duerma*.' },
            { q: 'Prefiero que ___ (venir, vosotros) el sábado.', a: ['vengáis'], why: 'From *vengo*: *vengáis*.' },
            { q: 'Queremos ___ (vivir) cerca del mar.', a: ['vivir'], why: 'We want and we live: the same people, so the infinitive.' },
            { q: 'Espero que os ___ (gustar) los regalos.', a: ['gusten'], why: '*Los regalos* is plural: *gusten*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Now you want the person in brackets to do it. Start with the words given.', items: [
            { q: 'Quiero ir al cine. (tú)', cue: 'Quiero que', a: ['Quiero que vayas al cine.', 'Quiero que tú vayas al cine.'], why: 'Another person does it: *que* + subjunctive, *vayas*.' },
            { q: 'Espero llegar a tiempo. (vosotros)', cue: 'Espero que', a: ['Espero que lleguéis a tiempo.', 'Espero que vosotros lleguéis a tiempo.'], why: '*Llegar* adds *u* before *e*: *lleguéis*.' },
            { q: 'Prefiero cocinar. (tú)', cue: 'Prefiero que', a: ['Prefiero que cocines.', 'Prefiero que tú cocines.', 'Prefiero que cocines tú.'], why: 'Another person cooks: *cocines*.' },
            { q: 'Necesito hablar con el director. (usted)', cue: 'Necesito que', a: ['Necesito que hable con el director.', 'Necesito que usted hable con el director.'], why: '*Usted* takes the same form as *él*: *hable*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Me alegra que…',
      about: 'Say how things make you feel, with que + subjunctive.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To say how something makes you feel, use a verb like *gustar* + *que* + subjunctive: *Me alegra que estés aquí.* When the feeling and the action belong to the **same** person, use the infinitive: *Me alegra estar aquí.*' },
          { t: 'table', caption: 'Feelings', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['me alegra que', 'it makes me happy that'],
            ['me encanta que', 'I love it that'],
            ['me molesta que', 'it annoys me that'],
            ['me preocupa que', 'it worries me that'],
            ['me da miedo que', 'I am afraid that'],
            ['me da pena que', 'I am sad that; it is a pity that'],
            ['me sorprende que', 'it surprises me that'],
            ['me pone nervioso/a que', 'it makes me nervous that'],
            ['estoy contento/a de que', 'I am pleased that'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Me alegra que **estés** mejor.', n: 'My feeling, your health: *que* + subjunctive.' },
            { s: 'Me molesta que la gente **hable** alto en el cine.', n: 'Something that annoys you: subjunctive.' },
            { s: 'A mi madre le preocupa que **conduzca** de noche.', n: '*Le preocupa*: the feeling is my mother’s. *Conduzca* comes from *conduzco*.' },
            { s: 'Nos da miedo que el perro **se escape**.', n: '*Dar miedo* + *que* + subjunctive.' },
            { s: 'Me encanta **bailar**.', n: 'I love it and I dance: the same person, so the infinitive.' },
            { s: '¿Te molesta que **abra** la ventana?', n: 'A polite way to ask if you can do something.' },
          ] },
          { t: 'tip', art: 'churro', md: 'These verbs work like *gustar*: *me*, *te*, *le*, *nos*, *os*, *les* go before the verb, and *a* + name can go first: *A Pedro le molesta que…* With *que* the verb is always singular: *me molestan los ruidos*, but *me molesta que haya ruido*.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Me alegra que ___ aquí.', o: ['estés', 'estás'], why: 'A feeling + *que*: subjunctive, *estés*.' },
            { q: 'Me encanta ___ por la playa.', o: ['pasear', 'paseo'], why: 'I love it and I walk: the same person, so the infinitive.' },
            { q: 'A Sara le molesta que sus vecinos ___ la música tan alta.', o: ['pongan', 'ponen'], why: 'From *pongo*: *pongan*.' },
            { q: 'Nos preocupa que el niño no ___ bien.', o: ['coma', 'come'], why: '*Nos preocupa que* + subjunctive.' },
            { q: 'Me da pena que te ___ de la empresa.', o: ['vayas', 'vas'], why: '*Irse* in the subjunctive: *te vayas*.' },
            { q: 'Me sorprende que no ___ nadie en la calle.', o: ['haya', 'hay'], why: 'The subjunctive of *hay* is *haya*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words can follow "me da"?', items: [
            { key: 'me da', o: ['miedo', 'pena', 'igual', 'vergüenza', 'alegre', 'preocupado'], a: [0, 1, 2, 3], why: '*Me da miedo*, *me da pena*, *me da igual* (I do not mind) and *me da vergüenza* (I am embarrassed) are nouns or fixed phrases. *Alegre* and *preocupado* go with *estar*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
            { s: 'Me alegra que [puedes] venir a la cena.', a: ['puedas'], why: 'A feeling + *que*: subjunctive, *puedas*.' },
            { s: 'Me [molestan] que llegues tarde.', a: ['molesta'], why: 'With *que* + a sentence the verb stays singular: *me molesta*.' },
            { s: 'A mis padres les preocupa que [viajo] sola.', a: ['viaje'], why: '*Les preocupa que* + subjunctive: *viaje*.' },
            { s: 'Me encanta [que bailo] salsa.', a: ['bailar'], why: 'I love it and I dance: the same person, so the infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Ojalá and good wishes',
      about: 'Make wishes with ojalá and say the usual good wishes.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: '*Ojalá* (I really hope, if only) is followed by the **subjunctive**: *Ojalá haga buen tiempo mañana.* You can add *que*: *Ojalá que…* It never takes the infinitive.' },
          { t: 'examples', items: [
            { s: '**Ojalá** no **llueva** el domingo.', n: 'A wish for something possible: present subjunctive.' },
            { s: '**Ojalá que** te **den** el trabajo.', n: '*Ojalá que* means the same as *ojalá*.' },
            { s: '—¿Vienes a la fiesta? —**Ojalá**, pero tengo que trabajar.', n: '*Ojalá* alone: I would like to, but I probably cannot.' },
          ] },
          { t: 'text', md: 'Many good wishes start with *que* + subjunctive. Think of *Espero* before them: *¡Que te vaya bien!* means *Espero que te vaya bien.*' },
        ],
        [
          { t: 'table', caption: 'Good wishes', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'When you say it'], rows: [
            ['¡Que te vaya bien!', 'when someone leaves or starts something new'],
            ['¡Que lo pases bien!', 'before a party, a trip or a holiday'],
            ['¡Que aproveche!', 'when someone is eating or about to eat'],
            ['¡Que te mejores!', 'to someone who is ill'],
            ['¡Que tengas suerte!', 'before an exam or an interview'],
            ['¡Que descanses!', 'when someone goes to bed or is tired'],
            ['¡Que cumplas muchos más!', 'on someone’s birthday'],
            ['¡Que seáis muy felices!', 'to a couple at their wedding'],
          ] },
          { t: 'tip', art: 'churro', md: 'Change the person to fit who you are talking to: *¡Que le vaya bien!* (usted), *¡Que lo paséis bien!* (vosotros). In Latin America people say *¡Que les vaya bien!* to a group, and *¡Buen provecho!* is more common than *¡Que aproveche!*' },
        ],
        [
          { t: 'dialogue', title: 'El viernes en la oficina', lines: [
            { who: 'Diego', s: 'Me voy ya. Mañana salgo para Galicia.' },
            { who: 'Marta', s: '¡Qué bien! ¡Que lo pases muy bien! ¿Vas en coche?' },
            { who: 'Diego', s: 'Sí. Ojalá no haya mucho tráfico en la autopista.' },
            { who: 'Marta', s: 'Y ojalá haga sol, porque en Galicia llueve bastante.' },
            { who: 'Diego', s: 'Ya, ya. ¿Y tú? ¿No tenías una entrevista el lunes?' },
            { who: 'Marta', s: 'Sí, y estoy un poco nerviosa.' },
            { who: 'Diego', s: 'Seguro que sale bien. ¡Que tengas mucha suerte!' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in brackets after ojalá.', items: [
            { q: 'Ojalá ___ (venir, tú) a mi boda.', a: ['vengas'], why: '*Ojalá* + subjunctive: from *vengo*, *vengas*.' },
            { q: 'Ojalá ___ (haber) entradas para el concierto.', a: ['haya'], why: 'The subjunctive of *hay* is *haya*.' },
            { q: 'Ojalá mis padres ___ (poder) visitarme pronto.', a: ['puedan'], why: '*Poder* changes its stem: *puedan*.' },
            { q: 'Ojalá que el examen ___ (ser) fácil.', a: ['sea'], why: 'The subjunctive of *ser* is *sea*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say? Choose the right wish.', items: [
            { q: 'Tu amiga tiene un examen mañana.', o: ['¡Que tengas suerte!', '¡Que aproveche!', '¡Que cumplas muchos más!'], why: 'Before an exam you wish someone luck.' },
            { q: 'Tu compañero está enfermo en casa.', o: ['¡Que te mejores!', '¡Que lo pases bien!', '¡Que aproveche!'], why: 'To someone who is ill: *¡Que te mejores!*' },
            { q: 'Unos amigos se van de vacaciones a la playa.', o: ['¡Que lo paséis bien!', '¡Que te mejores!', '¡Que cumpláis muchos más!'], why: 'Before a holiday, to a group of friends (*vosotros*): *¡Que lo paséis bien!*' },
            { q: 'Entras en la cocina de la oficina y unos compañeros están comiendo.', o: ['¡Que aproveche!', '¡Que tengas suerte!', '¡Que seáis muy felices!'], why: 'To people who are eating: *¡Que aproveche!*' },
            { q: 'Es el cumpleaños de tu abuela.', o: ['¡Que cumplas muchos más!', '¡Que te mejores!', '¡Que descanses!'], why: 'On a birthday: *¡Que cumplas muchos más!*' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword.', words: [
            { a: 'suerte', clue: 'Antes de un examen: ¡Que tengas mucha …!' },
            { a: 'mejores', clue: 'A una persona enferma: ¡Que te …!' },
            { a: 'aproveche', clue: 'A alguien que está comiendo: ¡Que …!' },
            { a: 'descanses', clue: 'Cuando alguien se va a dormir: ¡Que …!' },
            { a: 'cumplas', clue: 'En un cumpleaños: ¡Que … muchos más!' },
            { a: 'ojalá', clue: 'Palabra para un deseo: … no llueva mañana.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A farewell card',
      about: 'Read the messages on a card for a colleague who is leaving.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'Para Elena', md: 'Querida Elena:\n\n**Carlos:** Me da mucha pena que te vayas, pero me alegra que por fin vivas la aventura que siempre querías. ¡Que te vaya muy bien en México! Y espero que nos escribas de vez en cuando.\n\n**Rosa:** Gracias por estos seis años. Contigo aprendí a hablar en público sin morirme de miedo. Ojalá encuentres allí compañeros tan buenos como tú.\n\n**Mateo:** No me gusta nada que nos dejes solos con la impresora: ¡eres la única que la entiende! Fuera de bromas, te vamos a echar mucho de menos. ¡Que lo pases genial!\n\n**Ana:** Espero que el piso nuevo tenga mucha luz y que te acostumbres pronto al cambio de horario. Si algún día necesitas algo, aquí estamos.\n\n**Pedro:** Me sorprende que te vayas justo ahora, cuando el equipo funciona tan bien, pero lo entiendo. Ojalá vengas a vernos en Navidad. ¡Mucha suerte!\n\n**Sara:** Me alegra mucho que quieras seguir aprendiendo y cambiar de vida. Ojalá yo tenga algún día tu valor. Un abrazo enorme.\n\nCon cariño, todo el equipo de Valencia' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Elena se va a vivir a otro país.', a: 't', why: 'Carlos wishes her luck in Mexico.' },
            { q: 'Elena y Rosa han trabajado juntas seis años.', a: 't', why: '*Gracias por estos seis años.*' },
            { q: 'Antes, a Rosa le daba miedo hablar en público.', a: 't', why: 'With Elena she learnt to speak in public *sin morirme de miedo*.' },
            { q: 'Nadie más en la oficina sabe usar bien la impresora.', a: 't', why: 'Mateo says, as a joke, that she is the only one who understands it.' },
            { q: 'Pedro no entiende por qué se va Elena.', a: 'f', why: 'He is surprised, but he says *lo entiendo*.' },
            { q: 'Elena va a volver a Valencia en Navidad.', a: 'ng', why: 'Pedro hopes so (*ojalá*), but we do not know.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: '¿Por qué le da pena a Carlos?', o: ['Porque Elena se va.', 'Porque Elena no le escribe.', 'Porque no le gusta México.'], why: '*Me da mucha pena que te vayas.*' },
            { q: '«Ojalá vengas a vernos en Navidad»: what does Pedro do?', o: ['He makes a wish.', 'He gives an order.', 'He describes a fact.'], why: '*Ojalá* + subjunctive expresses a wish.' },
            { q: 'Mateo habla de la impresora porque…', o: ['quiere hacer una broma.', 'la impresora está rota.', 'Elena se lleva la impresora.'], why: 'He says *Fuera de bromas* right after it: it was a joke.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the subjunctive.', items: [
            { s: 'Espero que el piso nuevo [tenga] mucha luz y que te [acostumbres] pronto al cambio de horario.', why: '*Espero que* + subjunctive: *tenga*, *acostumbres*.' },
            { s: 'Ojalá [encuentres] allí compañeros tan buenos como tú.', why: '*Ojalá* + subjunctive: *encuentres*.' },
            { s: 'Me alegra mucho que [quieras] seguir aprendiendo y cambiar de vida.', why: '*Me alegra que* + subjunctive: *quieras*. *Seguir* and *cambiar* are infinitives.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Quiero que me ___ la verdad.', o: ['digas', 'dices', 'decir'], why: 'I want, you say: *que* + subjunctive, *digas*.' },
      { q: 'Prefiero ___ en casa esta noche.', o: ['quedarme', 'que me quede', 'que me quedo'], why: 'I prefer and I stay: the same person, so the infinitive.' },
      { q: 'Me molesta que mi compañero no ___ los platos.', o: ['friegue', 'friega', 'fregar'], why: '*Me molesta que* + subjunctive: *fregar* gives *friegue*.' },
      { q: 'Ojalá ___ buen tiempo el sábado.', o: ['haga', 'hace', 'hacer'], why: '*Ojalá* + subjunctive.' },
      { q: 'Tu vecino tiene la gripe. Le dices: ¡Que ___!', o: ['te mejores', 'aproveche', 'cumplas muchos más'], why: 'To someone who is ill: *¡Que te mejores!*' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
      { q: 'Me alegra que ___ venir a mi cumpleaños.', o: ['podáis', 'podéis'], why: 'A feeling + *que*: subjunctive, *podáis*.' },
      { q: 'Me encanta ___ con mis amigos.', o: ['cocinar', 'que cocino'], why: 'The same person: infinitive.' },
      { q: 'A Lucía le da miedo que su hijo ___ solo en bici.', o: ['vaya', 'va'], why: '*Le da miedo que* + subjunctive: *vaya*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in brackets in the right form.', items: [
      { q: 'Espero que (vosotros) ___ (pasarlo) bien en la fiesta.', a: ['lo paséis'], why: 'I hope, you have fun: subjunctive, *lo paséis*.' },
      { q: 'Mi madre me pide que la ___ (llamar, yo) todos los domingos.', a: ['llame'], why: '*Pedir que* + subjunctive: *llame*.' },
      { q: 'Nos sorprende que no ___ (haber) nadie en la playa.', a: ['haya'], why: 'The subjunctive of *hay* is *haya*.' },
      { q: 'Queremos ___ (aprender) a bailar salsa.', a: ['aprender'], why: 'We want and we learn: the infinitive.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Now you want the person in brackets to do it. Start with the words given.', items: [
      { q: 'Quiero salir esta noche. (tú)', cue: 'Quiero que', a: ['Quiero que salgas esta noche.', 'Quiero que tú salgas esta noche.'], why: 'From *salgo*: *salgas*.' },
      { q: 'Espero encontrar trabajo pronto. (mi hermano)', cue: 'Espero que', a: ['Espero que mi hermano encuentre trabajo pronto.'], why: '*Encontrar* changes its stem: *encuentre*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
      { s: 'Ojalá [viene] mi abuela a la boda.', a: ['venga'], why: '*Ojalá* + subjunctive: *venga*.' },
      { s: 'Me [preocupan] que trabajes tanto.', a: ['preocupa'], why: 'With *que* + a sentence the verb is singular: *me preocupa*.' },
    ] },
  ],
};
