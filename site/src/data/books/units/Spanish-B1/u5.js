// Spanish B1, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Advice and rules',
  goal: 'Give instructions, advice and warnings, and talk about rules. Use the negative imperative, the imperative with usted and ustedes, and es importante que, es necesario que and está prohibido.',
  art: 'dog',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['negative-imperative', 'imperative-usted', 'pronouns-imperative', 'impersonal-expressions', 'rules'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'No lo toques: the negative imperative',
      about: 'Tell a friend what not to do, with and without pronouns.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'You already know the affirmative imperative for *tú*: *habla, come, escribe*. To tell someone **not** to do something, Spanish uses **no + the present subjunctive**. You learned these forms in Unit 2, so you already know them: *no hables, no comas, no escribas*.' },
          { t: 'examples', items: [
            { s: '**No comas** tan rápido, que te vas a poner malo.', n: '*comer* → *no comas*. The *-er* verb takes the ending *-as*.' },
            { s: '**No llegues** tarde a la entrevista.', n: '*llegar* → *no llegues*. The *u* keeps the hard *g* sound.' },
            { s: '**No vayas** sola por ese camino de noche.', n: '*ir* → *no vayas*, an irregular subjunctive.' },
            { s: 'Chicos, **no habléis** tan alto.', n: 'For *vosotros*: *no* + *habléis*, the subjunctive form.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Affirmative and negative imperative', explain: ['head'], quiz: true, head: ['', 'tú', 'no + tú', 'vosotros', 'no + vosotros'], rows: [
            ['hablar', 'habla', 'no hables', 'hablad', 'no habléis'],
            ['comer', 'come', 'no comas', 'comed', 'no comáis'],
            ['abrir', 'abre', 'no abras', 'abrid', 'no abráis'],
            ['hacer', 'haz', 'no hagas', 'haced', 'no hagáis'],
            ['ir', 've', 'no vayas', 'id', 'no vayáis'],
            ['poner', 'pon', 'no pongas', 'poned', 'no pongáis'],
            ['decir', 'di', 'no digas', 'decid', 'no digáis'],
            ['ser', 'sé', 'no seas', 'sed', 'no seáis'],
          ] },
          { t: 'text', md: 'The negative forms follow the spelling of the subjunctive. Verbs in *-car*, *-gar* and *-zar* change their spelling to keep the sound: *tocar* → *no toques*, *llegar* → *no llegues*, *empezar* → *no empieces*.' },
          { t: 'tip', art: 'churro', md: 'The irregular affirmative forms (*haz, ve, pon, di, sal, ten, ven, sé*) are only for the affirmative. In the negative, every verb uses the subjunctive: *no hagas, no vayas, no pongas*.' },
        ],
        [
          { t: 'text', md: 'Where do the pronouns go? In the **affirmative**, they are joined to the **end** of the verb. In the **negative**, they go **before** the verb, after *no*. With two pronouns, the order is the same as in Unit 4: *me lo, te la, se lo*.' },
          { t: 'examples', items: [
            { s: '**Tócalo.** → **No lo toques.**', n: 'Affirmative: *toca* + *lo*. Negative: *no lo toques*.' },
            { s: '**Siéntate.** → **No te sientes.**', n: 'A reflexive verb: *te* goes before the verb in the negative.' },
            { s: '**Dímelo.** → **No me lo digas.**', n: 'Two pronouns: *me lo*, before the verb in the negative.' },
            { s: '**Levantaos.** → **No os levantéis.**', n: 'For *vosotros*, *levantad* + *os* loses the *d*: *levantaos*.' },
          ] },
          { t: 'tip', art: 'churro', md: 'When you add pronouns to an affirmative imperative, you often need a written accent to keep the stress in the same place: *toca* → *tócalo*, *da* + *me* + *lo* → *dámelo*. The negative forms do not change: *no lo toques*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: '___ la ventana, que hace mucho frío.', o: ['No abras', 'No abres', 'No abriste'], why: 'The negative imperative for *tú* is *no* + the subjunctive: *no abras*.' },
            { q: 'Mañana tienes el examen a las nueve. ¡No ___ tarde!', o: ['llegues', 'llegas', 'llega'], why: '*llegar* → *no llegues*: the *u* keeps the hard *g* sound.' },
            { q: 'Ese plato está muy caliente. No ___ toques.', o: ['lo', 'la', 'los'], why: '*el plato* is masculine singular: *lo*, before the verb in the negative.' },
            { q: 'Chicos, no ___ el móvil en clase.', o: ['uséis', 'usad', 'usáis'], why: 'Negative for *vosotros*: *no* + subjunctive, *no uséis*. *Usad* is only affirmative.' },
            { q: 'Es una sorpresa para Marta. No ___ a nadie.', o: ['se lo digas', 'díselo', 'se lo dices'], why: 'Negative: pronouns before the verb and the subjunctive *digas*.' },
            { q: '¿La chaqueta? No ___ pongas, hoy hace calor.', o: ['te la', 'la te', 'te lo'], why: '*Ponerse la chaqueta*: *te* comes first, then *la* for *la chaqueta*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the negative imperative (tú) of the verb in brackets.', items: [
            { q: 'No ___ (beber) tanto café por la noche.', a: ['bebas'], why: '*beber* → *bebas*.' },
            { q: 'No ___ (hacer) ruido, el bebé está durmiendo.', a: ['hagas'], why: '*hacer* → *hagas*, from *hago*.' },
            { q: 'No ___ (ir) por esa calle, está cortada.', a: ['vayas'], why: '*ir* → *vayas*, an irregular subjunctive.' },
            { q: 'No ___ (empezar) a comer sin los demás.', a: ['empieces'], why: '*empezar* → *empieces*: *e* becomes *ie*, and *z* becomes *c* before *e*.' },
            { q: 'No ___ (sacar) fotos con flash en el museo.', a: ['saques'], why: '*sacar* → *saques*: *c* becomes *qu* before *e*.' },
            { q: 'No ___ (ser) tan negativo, todo va a salir bien.', a: ['seas'], why: '*ser* → *seas*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make the sentences negative. Put the pronouns before the verb.', items: [
            { q: 'Cómpralo.', cue: 'No', a: ['No lo compres.'], why: 'Negative: *no lo* + subjunctive *compres*.' },
            { q: 'Siéntate aquí.', cue: 'No', a: ['No te sientes aquí.'], why: 'The reflexive pronoun *te* goes before *sientes*.' },
            { q: 'Dáselo.', cue: 'No', a: ['No se lo des.'], why: 'Two pronouns before the verb: *se lo*. *dar* → *des*.' },
            { q: 'Levantaos temprano.', cue: 'No', a: ['No os levantéis temprano.'], why: 'For *vosotros*: *no os levantéis*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Pase, siéntese: usted and ustedes',
      about: 'Give polite instructions to people you speak to with usted and ustedes.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'With **usted** and **ustedes**, the imperative uses the **subjunctive** forms, in the affirmative and in the negative. You hear these forms every day in shops, offices, at the doctor’s and in announcements.' },
          { t: 'examples', items: [
            { s: '**Pase**, por favor.', n: '*pasar* → *pase* (usted).' },
            { s: '**Siéntense**, por favor. La reunión empieza ya.', n: '*sentarse* → *siéntense* (ustedes). The pronoun *se* goes at the end.' },
            { s: 'No **se preocupe**, señora. Todo está bien.', n: 'Negative: the pronoun *se* goes before the verb.' },
            { s: 'Buenos días, **dígame**.', n: 'A common way to answer the phone or a customer: *diga* + *me*.' },
            { s: '**Rellenen** este formulario y **fírmenlo** abajo.', n: 'Ustedes: *rellenen*, *firmen* + *lo*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'The imperative with usted and ustedes', explain: ['head'], quiz: true, head: ['', 'usted', 'ustedes', 'no + usted'], rows: [
            ['pasar', 'pase', 'pasen', 'no pase'],
            ['esperar', 'espere', 'esperen', 'no espere'],
            ['abrir', 'abra', 'abran', 'no abra'],
            ['venir', 'venga', 'vengan', 'no venga'],
            ['hacer', 'haga', 'hagan', 'no haga'],
            ['ir', 'vaya', 'vayan', 'no vaya'],
            ['dar', 'dé', 'den', 'no dé'],
            ['sentarse', 'siéntese', 'siéntense', 'no se siente'],
          ] },
          { t: 'text', md: 'The pronouns work as with *tú*: joined to the end in the affirmative (*siéntese, tómelo, dígamelo*), before the verb in the negative (*no se siente, no lo tome*).' },
          { t: 'tip', art: 'churro', md: 'In Latin America, *ustedes* is the only plural “you”, so people say *siéntense* and *no se preocupen* to friends and children too. The *vosotros* forms (*sentaos, no os preocupéis*) are used only in Spain.' },
        ],
        [
          { t: 'dialogue', title: 'En el centro de salud', lines: [
            { who: 'Recepcionista', s: 'Buenos días. Pase, pase. ¿Tiene cita?' },
            { who: 'Javier', s: 'Sí, a las diez y cuarto, con la doctora Ruiz.' },
            { who: 'Recepcionista', s: 'Muy bien. Deme su tarjeta sanitaria, por favor. Siéntese en la sala de espera y espere a que lo llamen.' },
            { who: 'Doctora', s: 'Señor Molina, venga conmigo, por favor. Cuénteme, ¿qué le pasa?' },
            { who: 'Javier', s: 'Me duele mucho la garganta desde el lunes.' },
            { who: 'Doctora', s: 'Tómese una de estas pastillas cada ocho horas, beba mucha agua y no hable mucho. Y no vaya a trabajar hasta el jueves.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Javier tiene cita con la doctora.', a: 't', why: '*Sí, a las diez y cuarto, con la doctora Ruiz.*' },
            { q: 'La recepcionista le pide el pasaporte.', a: 'f', why: 'She asks for his health card: *Deme su tarjeta sanitaria.*' },
            { q: 'La doctora le dice que hable poco.', a: 't', why: '*No hable mucho.*' },
            { q: 'Javier puede ir a trabajar mañana.', a: 'f', why: '*No vaya a trabajar hasta el jueves.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the polite form for usted or ustedes.', items: [
            { q: 'Señora, ___ aquí, por favor. Esta silla está libre.', o: ['siéntese', 'siéntate', 'se sienta'], why: 'Usted, affirmative: *siéntese*, with *se* at the end.' },
            { q: 'Señores pasajeros, no ___ el cinturón hasta que el avión se pare.', o: ['se quiten', 'se quitan', 'quitaos'], why: 'Ustedes, negative: *no se quiten*, the pronoun before the verb.' },
            { q: 'Para ir al museo, ___ la segunda calle a la derecha.', o: ['tome', 'toma usted', 'tomar'], why: 'Usted: *tome*, the subjunctive form.' },
            { q: 'Si tiene alguna pregunta, ___ a este número.', o: ['llame', 'llama', 'llamas'], why: '*Si tiene* shows we use usted: *llame*.' },
            { q: 'Niños, ___ las manos antes de comer.', o: ['lávense', 'se lavan', 'lávanse'], why: 'Ustedes, affirmative: *laven* + *se*, *lávense*. In Spain you can also say *lavaos* to children.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the imperative of venir.', verb: 'venir', tense: 'Imperative', rows: [
            ['tú', 'ven'],
            ['no + tú', 'no vengas'],
            ['usted', 'venga'],
            ['no + usted', 'no venga'],
            ['vosotros', 'venid'],
            ['ustedes', 'vengan', 'The *ustedes* form is the same in the affirmative and the negative: *vengan*, *no vengan*.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake. Each person is spoken to with usted or ustedes.', items: [
            { s: 'Buenos días, señor Gómez. [Pasa], por favor.', a: ['pase'], why: 'With *señor Gómez* we use usted: *pase*.' },
            { s: 'Señora, no [se preocupa], su hijo está bien.', a: ['se preocupe'], why: 'The negative imperative needs the subjunctive: *no se preocupe*.' },
            { s: 'Por favor, [rellenan] este formulario y fírmenlo.', a: ['rellenen'], why: 'Ustedes: *rellenen*, like *fírmenlo*.' },
            { s: 'Si tiene preguntas, [llámame] a la oficina.', a: ['llámeme'], why: 'Usted: *llame* + *me* = *llámeme*.' },
            { s: 'Señores, por favor, no [hagáis] fotos dentro de la iglesia.', a: ['hagan'], why: '*Señores* is formal: ustedes, *no hagan*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Es importante que… Está prohibido…',
      about: 'Talk about what is necessary, allowed and not allowed.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'To say what matters for **a particular person**, use *es importante / necesario / mejor / obligatorio* **+ que + subjunctive**. To speak **in general**, for everyone, use the same expression **+ infinitive**.' },
          { t: 'examples', items: [
            { s: '**Es importante dormir** bien antes de un examen.', n: 'In general, for everyone: infinitive.' },
            { s: '**Es importante que duermas** bien esta noche.', n: 'For you in particular: *que* + subjunctive.' },
            { s: '**Es necesario que traigan** el pasaporte.', n: 'For ustedes: *traer* → *traigan*.' },
            { s: '**Es mejor que no salgas** con este tiempo.', n: '*es mejor que* + subjunctive gives soft advice.' },
            { s: '**Está prohibido fumar** en todo el edificio.', n: 'A rule for everyone: *está prohibido* + infinitive.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Talking about rules', explain: ['head', 'col1'], head: ['Spanish', 'Meaning'], rows: [
            ['Hay que pagar en la caja.', 'a general obligation, for everyone'],
            ['Es obligatorio llevar casco.', 'a rule you must follow'],
            ['Está prohibido aparcar aquí.', 'it is not allowed'],
            ['No se puede entrar con comida.', 'it is not possible or not allowed'],
            ['Está permitido entrar con perros.', 'it is allowed'],
            ['Se prohíbe el uso del móvil.', 'formal, often on signs: it is not allowed'],
          ] },
          { t: 'tip', art: 'churro', md: 'On signs, the verb is often left out: *Prohibido fumar*, *Prohibido el paso*. Remember the difference: *es verdad que* + indicative (a fact), but *es importante que* + subjunctive (something that should happen).' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Infinitive or que + subjunctive? Choose the right form.', items: [
            { q: 'Es importante que ___ crema solar en la playa.', o: ['te pongas', 'ponerte', 'te pones'], why: 'After *es importante que*: the subjunctive, *te pongas*.' },
            { q: 'En este museo está prohibido ___ fotos.', o: ['hacer', 'hagas', 'haces'], why: '*Está prohibido* + infinitive: a rule for everyone.' },
            { q: 'Es necesario que los alumnos ___ el libro a clase.', o: ['traigan', 'traen', 'traer'], why: 'After *es necesario que*: the subjunctive, *traigan*.' },
            { q: 'Para ver el amanecer, es mejor ___ muy temprano.', o: ['salir', 'sales', 'salgas'], why: 'General advice without *que*: the infinitive *salir*.' },
            { q: 'Hay que ___ el billete antes de subir al tren.', o: ['comprar', 'compres', 'compras'], why: '*Hay que* is always followed by an infinitive.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Find the odd one out.', items: [
            { o: ['Está permitido', 'Está prohibido', 'No se puede', 'Se prohíbe'], why: '*Está permitido* says something is allowed. The others say it is not.' },
            { o: ['es verdad que', 'es importante que', 'es necesario que', 'es mejor que'], why: '*Es verdad que* takes the indicative. The others take the subjunctive.' },
            { o: ['comes', 'saques', 'toques', 'llegues'], why: '*Comes* is the indicative. The others are subjunctive forms with a spelling change.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the rules with the words from the box.', extra: ['permiso', 'prohibición'], items: [
            { q: 'Está ___ fumar en todo el edificio.', a: 'prohibido', why: '*Está prohibido* + infinitive: it is not allowed.' },
            { q: 'Si vas en moto, es ___ llevar casco.', a: 'obligatorio', why: 'A rule you must follow: *es obligatorio*.' },
            { q: '___ que apagar la luz al salir.', a: 'Hay', why: '*Hay que* + infinitive: a general obligation.' },
            { q: 'Aquí no se ___ aparcar: es la salida de los bomberos.', a: 'puede', why: '*No se puede* + infinitive: it is not allowed.' },
            { q: 'Los perros pequeños están ___ en la terraza.', a: 'permitidos', why: '*Permitidos* agrees with *los perros*.' },
            { q: 'Para entrar en algunos países es ___ que tengas un visado.', a: 'necesario', why: '*Es necesario que* + subjunctive *tengas*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentences. Start with the words given.', items: [
            { q: 'Tienes que dormir más.', cue: 'Es importante que', a: ['Es importante que duermas más.'], why: '*Dormir* → *duermas*: the subjunctive after *es importante que*.' },
            { q: 'Tenéis que reciclar el vidrio.', cue: 'Es necesario que', a: ['Es necesario que recicléis el vidrio.'], why: 'For *vosotros*: *recicléis*.' },
            { q: 'Usted tiene que firmar aquí.', cue: 'Es necesario que', a: ['Es necesario que firme aquí.', 'Es necesario que usted firme aquí.'], why: 'For *usted*: *firme*.' },
            { q: 'Tenemos que salir antes de las siete.', cue: 'Es mejor que', a: ['Es mejor que salgamos antes de las siete.'], why: '*Salir* → *salgamos*, from *salgo*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Está prohibido usar el móvil en el examen.', why: '*Está prohibido* + infinitive.' },
            { a: 'Es importante que llegues a tiempo.', why: '*Es importante que* + subjunctive *llegues*.' },
            { a: 'No se puede entrar con perros.', why: '*No se puede* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'House rules and museum rules',
      about: 'Read the rules of a shared flat and of a museum.',
      art: 'monster',
      spreads: [
        [
          { t: 'reading', title: 'Normas del piso (en la puerta de la nevera)', md: 'Hola, chicos. Ahora somos cuatro en el piso, así que es importante que todos sigamos unas normas. Leedlas, por favor.\n\n**Cocina:** fregad los platos después de comer. No los dejéis en el fregadero hasta el día siguiente. Si usáis algo de otra persona, pedidlo antes.\n\n**Baño:** el baño se limpia los sábados; cada semana le toca a una persona. No uséis toda el agua caliente por la mañana: las duchas, de diez minutos como máximo.\n\n**Ruido:** de lunes a jueves, nada de música alta después de las once. Si traéis amigos, avisad en el grupo del piso.\n\n**Basura:** hay que separar el plástico, el papel y el vidrio. Bajad la basura antes de que se llene el cubo.\n\nY, sobre todo, no os enfadéis: si hay un problema, hablad conmigo. Gracias. Lucía' },
          { t: 'reading', title: 'Museo de la Ciudad: información para los visitantes', md: 'Bienvenidos al Museo de la Ciudad. Para que su visita sea agradable, les pedimos que lean estas normas.\n\nDejen las mochilas grandes y los paraguas en la consigna, que es gratuita. Está prohibido comer y beber en las salas. Se pueden hacer fotos, pero no utilicen el flash y no toquen las obras. Hablen en voz baja y pongan el móvil en silencio.\n\nLos grupos de más de diez personas tienen que reservar la visita. Los domingos por la tarde la entrada es gratuita para todos. Si necesita ayuda, pregunte al personal del museo.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'En el piso viven cuatro personas.', a: 't', why: '*Ahora somos cuatro en el piso.*' },
            { q: 'Se pueden dejar los platos sucios hasta el día siguiente.', a: 'f', why: '*No los dejéis en el fregadero hasta el día siguiente.*' },
            { q: 'Lucía paga más alquiler que los demás.', a: 'ng', why: 'The note does not talk about the rent.' },
            { q: 'Los fines de semana se puede poner música alta después de las once.', a: 'ng', why: 'The rule is for Monday to Thursday. The note does not say what happens at the weekend.' },
            { q: 'En el museo hay que pagar por dejar la mochila.', a: 'f', why: 'The left-luggage room is free: *la consigna, que es gratuita*.' },
            { q: 'En el museo se pueden hacer fotos sin flash.', a: 't', why: '*Se pueden hacer fotos, pero no utilicen el flash.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the negative imperatives.', items: [
            { s: 'No los [dejéis] en el fregadero. [No uséis] toda el agua caliente.', why: '*No dejéis* and *no uséis*: no + subjunctive for *vosotros*. *Los* is a pronoun before the verb.' },
            { s: 'Se pueden hacer fotos, pero [no utilicen] el flash y [no toquen] las obras.', why: '*No utilicen*, *no toquen*: negative forms for *ustedes*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Look at the language in the texts.', items: [
            { q: 'Lucía writes “fregad”, “pedidlo” and “avisad”. Who is she speaking to?', o: ['Her flatmates, with vosotros.', 'One flatmate, with tú.', 'Visitors, with ustedes.'], why: 'The ending *-ad*, *-id* is the affirmative imperative for *vosotros*.' },
            { q: 'Why does the museum write “dejen” and “hablen”?', o: ['It speaks politely to the visitors with ustedes.', 'It gives an order to one friend.', 'It describes the past.'], why: '*Dejen*, *hablen*: the imperative for *ustedes*.' },
            { q: '“Es importante que todos sigamos unas normas”: why “sigamos”?', o: ['Es importante que takes the subjunctive.', 'It is the past tense.', 'It is an imperative for tú.'], why: '*Es importante que* + subjunctive: *seguir* → *sigamos*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the sign to its meaning.', pairs: [
            ['Prohibido el paso', 'You cannot go in here.'],
            ['Silencio, por favor', 'Do not make noise.'],
            ['No tocar', 'Do not put your hands on it.'],
            ['Consigna', 'Leave your bags here.'],
            ['Entrada libre', 'You do not pay to go in.'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'No ___ la puerta, por favor. Hace frío.', o: ['abras', 'abre', 'abres'], why: 'Negative imperative for *tú*: *no* + subjunctive.' },
      { q: 'Señor, ___ aquí, por favor.', o: ['siéntese', 'siéntate', 'se sienta'], why: 'Usted, affirmative: *siéntese*.' },
      { q: 'Las llaves son de Carlos. No ___ pierdas.', o: ['las', 'les', 'lo'], why: '*las llaves*: feminine plural, *las*, before the verb in the negative.' },
      { q: 'Es importante que ___ la verdad.', o: ['digas', 'dices', 'decir'], why: '*Es importante que* + subjunctive *digas*.' },
      { q: 'En el avión está prohibido ___.', o: ['fumar', 'fumes', 'que fuma'], why: '*Está prohibido* + infinitive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Chicos, no ___ (gritar) en el pasillo.', a: ['gritéis'], why: 'Negative for *vosotros*: *no gritéis*.' },
      { q: 'Señores, ___ (esperar) aquí un momento, por favor.', a: ['esperen'], why: 'Ustedes, affirmative: *esperen*.' },
      { q: '¡No ___ (tocar) eso! Está muy caliente.', a: ['toques'], why: '*tocar* → *toques*: *c* becomes *qu* before *e*.' },
      { q: 'Es necesario que usted ___ (traer) una foto.', a: ['traiga'], why: '*Es necesario que* + subjunctive: *traiga*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'No [dímelo], prefiero no saberlo.', a: ['me lo digas'], why: 'In the negative, the pronouns go before the subjunctive: *no me lo digas*.' },
      { s: 'Señora, no [se preocupa], todo va bien.', a: ['se preocupe'], why: 'Usted, negative: *no se preocupe*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'No te preocupes por el examen.', why: 'Negative: *no te* + subjunctive.' },
      { a: 'Es mejor que vayas en tren.', why: '*Es mejor que* + subjunctive *vayas*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['No lo hagas así.', 'No hazlo así.', 'No lo haz así.'], why: 'Negative: *no lo* + subjunctive *hagas*.' },
      { q: '', o: ['Hay que reciclar el papel.', 'Hay que recicles el papel.', 'Hay reciclar el papel.'], why: '*Hay que* + infinitive.' },
    ] },
  ],
};
