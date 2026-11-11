// Spanish B1, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Cities and the environment',
  goal: 'Describe places in detail, talk about the environment and future plans. Use relative clauses, cuando + subjunctive for the future and para que + subjunctive.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['relative-clauses', 'cuando-subjunctive', 'para-que', 'environment', 'cities'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'La ciudad donde vivo',
      about: 'Describe people, places and things with que, donde, el que and lo que.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'A **relative clause** gives more information about a noun. In Spanish, the most common relative word is **que**. It is used for people and for things. Unlike in English, you can never leave it out.' },
          { t: 'examples', items: [
            { s: 'Vivo en una ciudad **que** tiene mucha historia.', n: '*que* for a thing: *una ciudad*.' },
            { s: 'La mujer **que** vive enfrente es arquitecta.', n: '*que* for a person: *la mujer*.' },
            { s: 'El barrio **donde** crecí ahora está lleno de bares.', n: '*donde* for a place.' },
            { s: 'La plaza **en la que** nos conocimos ya no existe.', n: 'After a preposition: *en la que*. *Donde* is also possible here.' },
            { s: '**Lo que** más me gusta de mi ciudad es la luz.', n: '*lo que*: the thing that, an idea that is not named.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Relative words', explain: ['head', 'col1'], head: ['Relative', 'Use', 'Example'], rows: [
            ['que', 'people and things, with no preposition', 'La calle que va al río es preciosa.'],
            ['donde', 'places', 'Es el parque donde corro por las mañanas.'],
            ['el que, la que, los que, las que', 'after a preposition; it agrees with the noun', 'Es la empresa para la que trabajo.'],
            ['lo que', 'an idea or a thing that is not named', 'No entiendo lo que dices.'],
          ] },
          { t: 'text', md: 'In English the preposition can go at the end (*the friend I travelled with*). In Spanish it always goes **before** the relative: *el amigo **con el que** viajé*. For people you can also use *quien*: *el amigo con quien viajé*.' },
          { t: 'tip', art: 'churro', md: 'Do not mix up *que* and *lo que*. *Que* goes after a noun: *el libro **que** leí*. *Lo que* has no noun before it: *Me gustó **lo que** leí.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right relative word.', items: [
            { q: 'Tengo un vecino ___ toca el piano todas las noches.', o: ['que', 'lo que', 'donde'], why: 'After a person, with no preposition: *que*.' },
            { q: 'Este es el restaurante ___ comimos el día de tu cumpleaños.', o: ['donde', 'que', 'lo que'], why: 'A place where something happened: *donde* (or *en el que*).' },
            { q: 'No me gusta ___ han hecho con la plaza.', o: ['lo que', 'que', 'la que'], why: 'There is no noun before it: *lo que*.' },
            { q: 'Esa es la amiga con ___ fui de vacaciones.', o: ['la que', 'que', 'lo que'], why: 'After the preposition *con*, and *amiga* is feminine: *la que*.' },
            { q: 'Los parques en ___ juegan mis hijos están muy limpios.', o: ['los que', 'lo que', 'las que'], why: '*los parques* is masculine plural: *en los que*.' },
            { q: '___ necesita esta ciudad es más transporte público.', o: ['Lo que', 'Que', 'El que'], why: 'The thing that the city needs: *lo que*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write que, donde, lo que or el / la / los / las que.', items: [
            { q: 'Esta es la casa ___ nació mi abuelo.', a: ['donde', 'en la que', 'en que'], why: 'A place: *donde*, or *en la que*.' },
            { q: 'El autobús ___ tomo para ir al trabajo siempre llega tarde.', a: ['que'], why: 'A thing, with no preposition: *que*.' },
            { q: 'Cuéntame ___ pasó ayer en la reunión.', a: ['lo que'], why: 'No noun before it: *lo que*.' },
            { q: 'Las calles por ___ paseamos eran muy estrechas.', a: ['las que'], why: '*las calles*: feminine plural, after *por*: *las que*.' },
            { q: 'El chico con ___ hablaste es mi primo.', a: ['el que', 'quien'], why: 'After *con*, a masculine person: *el que* or *quien*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Es el barrio donde vive mi hermana.', why: '*donde* for a place, then the verb.' },
            { a: 'Lo que más me gusta es el mar.', why: '*Lo que* starts the sentence: the thing that I like most.' },
            { a: 'La empresa para la que trabajo es pequeña.', why: 'The preposition *para* goes before *la que*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Cuando tenga tiempo…',
      about: 'Use cuando + subjunctive to talk about the future.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'After **cuando**, the tense depends on the time. For **habits** and for the **past**, use the indicative. When the action is in the **future**, use the **present subjunctive** after *cuando*. The other verb is in the future, *ir a*, the present or the imperative.' },
          { t: 'examples', items: [
            { s: '**Cuando tenga** tiempo, te **llamaré**.', n: 'Future: *cuando* + subjunctive, then the future.' },
            { s: '**Cuando llegues** a casa, **escríbeme**.', n: 'Future: *cuando* + subjunctive, then an imperative.' },
            { s: '**Cuando llueve**, **voy** en autobús.', n: 'A habit: *cuando* + present indicative.' },
            { s: '**Cuando era** niña, **vivía** en el campo.', n: 'The past: *cuando* + imperfecto.' },
            { s: '¿**Cuándo vienes**?', n: 'In a question, *cuándo* has an accent and takes the indicative.' },
          ] },
        ],
        [
          { t: 'table', caption: 'cuando: habit, past or future?', explain: ['head'], quiz: true, head: ['Habit', 'Past', 'Future'], rows: [
            ['Cuando **salgo** del trabajo, voy al gimnasio.', 'Cuando **salí** del trabajo, fui al gimnasio.', 'Cuando **salga** del trabajo, iré al gimnasio.'],
            ['Cuando **hace** sol, comemos fuera.', 'Cuando **hacía** sol, comíamos fuera.', 'Cuando **haga** sol, comeremos fuera.'],
            ['Cuando **viene** mi madre, cocina ella.', 'Cuando **vino** mi madre, cocinó ella.', 'Cuando **venga** mi madre, cocinará ella.'],
          ] },
          { t: 'tip', art: 'churro', md: 'Other time words work the same way: *en cuanto* (as soon as) and *hasta que* (until). *En cuanto **sepa** algo, te aviso. Espera aquí hasta que **vuelva**.* Never use the future after *cuando*: not *cuando tendré*, but *cuando tenga*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Habit, past or future? Choose the right form.', items: [
            { q: 'Cuando ___ mayor, quiero vivir en la costa.', o: ['sea', 'soy', 'seré'], why: 'In the future: *cuando* + subjunctive, *sea*.' },
            { q: 'Cuando ___ pequeño, iba al colegio en bici.', o: ['era', 'sea', 'seré'], why: 'The past: *cuando* + imperfecto, *era*.' },
            { q: 'Normalmente, cuando ___ a casa, me ducho.', o: ['llego', 'llegue', 'llegaré'], why: '*Normalmente* shows a habit: indicative, *llego*.' },
            { q: 'Te devolveré el libro cuando lo ___.', o: ['termine', 'termino', 'terminaré'], why: 'In the future: *cuando* + subjunctive, *termine*.' },
            { q: 'En cuanto ___ los resultados, os los envío.', o: ['tenga', 'tengo', 'tendré'], why: '*En cuanto* in the future: subjunctive, *tenga*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the present subjunctive.', items: [
            { q: 'Cuando ___ (terminar) la carrera, buscaré trabajo en el extranjero.', a: ['termine'], why: 'Future: *cuando* + subjunctive, *termine*.' },
            { q: 'Cuando ___ (ir) a Madrid, visitaremos el Museo del Prado.', a: ['vayamos'], why: '*ir* → *vayamos*, for *nosotros*.' },
            { q: 'Llámame cuando ___ (saber) algo.', a: ['sepas'], why: '*saber* → *sepas*, an irregular subjunctive.' },
            { q: 'No saldremos hasta que ___ (dejar) de llover.', a: ['deje'], why: '*hasta que* in the future: subjunctive, *deje*.' },
            { q: 'Cuando mis padres se ___ (jubilar), se mudarán a un pueblo.', a: ['jubilen'], why: '*jubilarse* → *se jubilen*, for *ellos*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the two halves of the sentences.', pairs: [
            ['Cuando tenga vacaciones,', 'haré un curso de fotografía.'],
            ['Cuando era estudiante,', 'compartía piso con cuatro personas.'],
            ['Cuando hace mucho calor,', 'no salgo de casa a mediodía.'],
            ['Cuando vengáis a vernos,', 'os enseñaremos el barrio.'],
            ['Cuando llegó la policía,', 'el ladrón ya se había ido.'],
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with cuando. Start with the words given.', items: [
            { q: 'Voy a tener dinero. Me compraré una bici eléctrica.', cue: 'Cuando', a: ['Cuando tenga dinero, me compraré una bici eléctrica.', 'Cuando tenga dinero me compraré una bici eléctrica.'], why: 'Future: *cuando* + subjunctive *tenga*.' },
            { q: 'Vas a llegar al hotel. Llámame.', cue: 'Cuando', a: ['Cuando llegues al hotel, llámame.', 'Cuando llegues al hotel llámame.'], why: '*cuando* + subjunctive *llegues*, then the imperative.' },
            { q: 'Van a abrir el nuevo parque. Iremos todos.', cue: 'Cuando', a: ['Cuando abran el nuevo parque, iremos todos.', 'Cuando abran el nuevo parque iremos todos.'], why: '*abrir* → *abran*, for *ellos*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'The environment: para que…',
      about: 'Talk about problems and solutions in a city, and say why things are done.',
      art: 'cactus',
      spreads: [
        [
          { t: 'table', caption: 'The environment in the city', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['la contaminación', 'pollution'],
            ['el cambio climático', 'climate change'],
            ['las emisiones', 'emissions, gases that go into the air'],
            ['los residuos', 'waste, rubbish'],
            ['reciclar', 'to recycle'],
            ['el contenedor', 'a large bin in the street for recycling'],
            ['el transporte público', 'buses, trains and the metro'],
            ['el carril bici', 'a cycle lane'],
            ['la zona peatonal', 'an area without cars'],
            ['el atasco', 'a traffic jam'],
            ['ahorrar', 'to save (water, energy, money)'],
          ] },
          { t: 'tip', art: 'churro', md: 'Some city words change in Latin America: *el coche* is *el carro* or *el auto*, and *el autobús* can be *el camión* (Mexico), *el colectivo* (Argentina) or *la guagua* (the Caribbean). *El móvil* is *el celular*.' },
        ],
        [
          { t: 'text', md: 'To say **why** something is done, use **para + infinitive** when the subject is the same. When the subject is **different**, use **para que + subjunctive**.' },
          { t: 'examples', items: [
            { s: 'Voy en bici al trabajo **para ahorrar** dinero.', n: 'Same subject: I go, I save. *Para* + infinitive.' },
            { s: 'El ayuntamiento pone más autobuses **para que** la gente **deje** el coche en casa.', n: 'Different subjects: the city, the people. *Para que* + subjunctive.' },
            { s: 'Plantamos árboles **para que haya** más sombra en verano.', n: '*hay* → *haya*, the subjunctive of *haber*.' },
            { s: 'Te lo explico **para que** lo **entiendas**.', n: 'I explain, you understand: *para que* + subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words go with the verb?', items: [
            { key: 'ahorrar', o: ['agua', 'energía', 'dinero', 'basura', 'atascos'], a: [0, 1, 2], why: 'You save *agua, energía, dinero*. Rubbish and traffic jams are not saved.' },
            { key: 'reducir', o: ['la contaminación', 'el ruido', 'las emisiones', 'un árbol', 'la bici'], a: [0, 1, 2], why: 'You reduce problems: *la contaminación, el ruido, las emisiones*.' },
            { key: 'separar', o: ['la basura', 'el plástico', 'el vidrio', 'el aire', 'el tráfico'], a: [0, 1, 2], why: 'For recycling, you *separar la basura, el plástico, el vidrio*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'para or para que? Choose the right form.', items: [
            { q: 'Apago las luces ___ ahorrar energía.', o: ['para', 'para que', 'que'], why: 'Same subject (I turn off, I save): *para* + infinitive.' },
            { q: 'Han cerrado el centro al tráfico para que los niños ___ jugar en la calle.', o: ['puedan', 'pueden', 'poder'], why: 'Different subjects: *para que* + subjunctive *puedan*.' },
            { q: 'Pondrán más contenedores para que la gente ___ más.', o: ['recicle', 'recicla', 'reciclar'], why: 'Different subjects: *para que* + subjunctive *recicle*.' },
            { q: 'Necesitamos más carriles bici ___ ir seguros al trabajo.', o: ['para', 'para que', 'cuando'], why: 'Same subject (we need, we go): *para* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Write the right form of the word in capitals.', items: [
            { q: 'La ___ del aire es un problema grave en las grandes ciudades.', base: 'contaminar', a: ['contaminación'], why: 'The noun from *contaminar* is *la contaminación*.' },
            { q: 'El ___ del papel y del plástico es obligatorio en mi edificio.', base: 'reciclar', a: ['reciclaje'], why: 'The noun from *reciclar* is *el reciclaje*.' },
            { q: 'En verano el ___ de agua es muy alto.', base: 'consumir', a: ['consumo'], why: 'The noun from *consumir* is *el consumo*.' },
            { q: 'Mi calle es muy ___ por la noche: hay muchos bares.', base: 'ruido', a: ['ruidosa'], why: 'The adjective from *el ruido* is *ruidoso*. It agrees with *mi calle*: *ruidosa*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the sentences with para que.', items: [
            { q: 'Abren un parque nuevo. Los vecinos tienen más zonas verdes.', cue: 'Abren un parque nuevo para que', a: ['Abren un parque nuevo para que los vecinos tengan más zonas verdes.'], why: 'Different subjects: *para que* + *tengan*.' },
            { q: 'Te dejo mi bici. Vas al trabajo sin coche.', cue: 'Te dejo mi bici para que', a: ['Te dejo mi bici para que vayas al trabajo sin coche.'], why: '*ir* → *vayas*.' },
            { q: 'Bajan el precio del metro. Más gente lo usa.', cue: 'Bajan el precio del metro para que', a: ['Bajan el precio del metro para que más gente lo use.'], why: '*usar* → *use*, and *lo* stays before the verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A plan for cleaner air',
      about: 'Read a city’s plan to reduce pollution and what it will change.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Montealto respira: el plan del ayuntamiento para un aire más limpio', md: 'Montealto es una ciudad que tiene muchas cosas buenas, pero también un problema: el aire que respiramos. En los días de más tráfico, la contaminación en el centro llega a niveles poco saludables. Por eso, el ayuntamiento ha presentado un plan para los próximos cinco años.\n\n**Menos coches en el centro.** Cuando termine la obra de la plaza Mayor, las calles del casco antiguo serán zonas peatonales. Solo podrán entrar los vecinos, los taxis y los vehículos de reparto, por la mañana.\n\n**Más transporte público.** Habrá dos nuevas líneas de autobús eléctrico, y el billete será gratuito para los menores de dieciocho años, para que los jóvenes se acostumbren a moverse sin coche.\n\n**Bicis y árboles.** Se construirán veinte kilómetros de carril bici que unirán los barrios con el centro. Además, se plantarán mil árboles en las calles donde hace más calor en verano.\n\n**Lo que pueden hacer los vecinos.** El plan también pide a los ciudadanos que compartan el coche, que trabajen desde casa cuando sea posible y que no dejen el motor encendido cuando estén parados.\n\nNo todos están de acuerdo. Algunos comerciantes del centro temen que vengan menos clientes. El ayuntamiento dice que estudiará los resultados cada año y cambiará lo que no funcione.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'El plan durará cinco años.', a: 't', why: '*Un plan para los próximos cinco años.*' },
            { q: 'Cuando el plan empiece, nadie podrá entrar en coche al casco antiguo.', a: 'f', why: 'Residents, taxis and delivery vehicles can still go in.' },
            { q: 'Los jóvenes no pagarán el autobús.', a: 't', why: 'The ticket will be free for people under eighteen.' },
            { q: 'Los nuevos autobuses serán más rápidos que los antiguos.', a: 'ng', why: 'The text says they will be electric, but not if they are faster.' },
            { q: 'Los árboles se plantarán en las calles más calurosas.', a: 't', why: '*En las calles donde hace más calor en verano.*' },
            { q: 'Todos los comerciantes están contentos con el plan.', a: 'f', why: 'Some shop owners are afraid fewer customers will come.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the present subjunctive.', items: [
            { s: 'Cuando [termine] la obra de la plaza Mayor, las calles serán zonas peatonales.', why: '*cuando* + subjunctive: the works will finish in the future.' },
            { s: 'El billete será gratuito para que los jóvenes se [acostumbren] a moverse sin coche.', why: '*para que* + subjunctive, with a different subject: *los jóvenes*.' },
            { s: 'El ayuntamiento cambiará lo que no [funcione].', why: '*lo que* + subjunctive: whatever does not work in the future. *Cambiará* is the future.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Look at the language in the text.', items: [
            { q: '“el aire que respiramos”: what does “que” refer to?', o: ['el aire', 'Montealto', 'el problema'], why: '*que* refers to the noun just before it: *el aire*.' },
            { q: '“las calles donde hace más calor”: what could replace “donde”?', o: ['en las que', 'que', 'lo que'], why: 'After a place with a preposition: *en las que*, feminine plural like *las calles*.' },
            { q: 'Why does the text say “cuando sea posible” and not “cuando es posible”?', o: ['It is about the future, so it takes the subjunctive.', 'It is a habit in the past.', 'It is a question.'], why: 'The plan asks people to do something in the future: *cuando* + subjunctive.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'El pueblo ___ nací está en la montaña.', o: ['donde', 'que', 'lo que'], why: 'A place where something happened: *donde*.' },
      { q: 'No entiendo ___ quieres decir.', o: ['lo que', 'que', 'el que'], why: 'No noun before it: *lo que*.' },
      { q: 'Cuando ___ a Sevilla, te llamaré.', o: ['llegue', 'llego', 'llegaré'], why: 'In the future: *cuando* + subjunctive.' },
      { q: 'Abren el parque por la noche para que la gente ___ pasear con el fresco.', o: ['pueda', 'puede', 'poder'], why: 'Different subjects: *para que* + subjunctive.' },
      { q: 'Si quieres ___ energía, apaga la luz.', o: ['ahorrar', 'reciclar', 'separar'], why: 'You save energy: *ahorrar energía*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'La amiga con ___ vivo es de Chile.', a: ['la que', 'quien'], why: 'After *con*, a woman: *la que* or *quien*.' },
      { q: 'Cuando ___ (tener) treinta años, quiero vivir sola.', a: ['tenga'], why: 'Future: *cuando* + subjunctive *tenga*.' },
      { q: 'Cuando ___ (ser) niño, jugaba en la calle.', a: ['era'], why: 'The past: *cuando* + imperfecto.' },
      { q: 'Uso el transporte público ___ contaminar menos.', a: ['para'], why: 'Same subject: *para* + infinitive.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Join the sentences. Start with the words given.', items: [
      { q: 'Vas a terminar. Avísame.', cue: 'Cuando', a: ['Cuando termines, avísame.', 'Cuando termines avísame.'], why: '*cuando* + subjunctive *termines*.' },
      { q: 'Te doy mi número. Me llamas.', cue: 'Te doy mi número para que', a: ['Te doy mi número para que me llames.'], why: 'Different subjects: *para que* + *llames*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Esta es la calle donde vivo.', why: '*donde* for a place.' },
      { a: 'Cuando haga buen tiempo, iremos a la playa.', why: 'Future: *cuando* + subjunctive *haga*, then the future.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['Cuando tenga tiempo, leeré tu libro.', 'Cuando tendré tiempo, leeré tu libro.', 'Cuando tengo tiempo, leeré tu libro.'], why: 'Never the future after *cuando*. For the future: subjunctive.' },
      { q: '', o: ['Es el amigo con el que viajé a Perú.', 'Es el amigo que viajé con a Perú.', 'Es el amigo con que lo viajé a Perú.'], why: 'The preposition goes before the relative: *con el que*.' },
    ] },
  ],
};
