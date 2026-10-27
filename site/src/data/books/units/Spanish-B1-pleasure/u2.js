// Spanish B1 for travel, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Meeting people',
  goal: 'Start conversations with locals and other travellers.',
  art: 'dog',
  tags: { skills: ['speaking', 'reading', 'vocabulary', 'grammar'], topics: ['small-talk', 'tu-usted', 'llevar-gerundio', 'soler', 'creo-que', 'culture'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Starting a conversation',
      about: 'Open a conversation, keep it going and end it in a friendly way.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'An easy way to start is a question about the place or the trip: *¿Es tu primera vez en Valencia?* or *¿Cuánto tiempo llevas aquí?*\n\nTo say how long something has been going on, use *llevar* + time + gerund: *Llevo dos semanas viajando*. You can also leave out the gerund: *Llevo tres días en Sevilla*.' },
          { t: 'examples', items: [
            { s: '¿**Cuánto tiempo llevas** en España?', n: '*llevar* + place: how long you have been here.' },
            { s: '**Llevo** un mes **viajando** por Sudamérica.', n: '*llevar* + time + gerund. *viajar*, *viajando*.' },
            { s: '**Llevamos** dos horas **esperando** el autobús.', n: 'It started two hours ago and is still going on.' },
            { s: '¿**Hace mucho que** vives aquí?', n: 'Another way to ask: *hace* + time + *que*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain, *tú* is very common, even with strangers of a similar age. Use *usted* with older people and in formal places. In much of Latin America, *usted* is used more often, and in some countries even between friends. For a group, Spain uses *vosotros*; Latin America uses *ustedes*.' },
        ],
        [
          { t: 'table', caption: 'Keeping a conversation going', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'When you use it'], rows: [
            ['¿Ah, sí? / ¿De verdad?', 'to show interest in what the other person says'],
            ['¡Qué bien! / ¡Qué interesante!', 'to react to good or interesting news'],
            ['¡Qué pena!', 'to react to bad news'],
            ['¿Y tú?', 'to ask the same question back'],
            ['Por cierto, …', 'to change the topic'],
            ['Bueno, me tengo que ir.', 'to end the conversation'],
            ['Ha sido un placer.', 'to say goodbye in a friendly way'],
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write llevar in the present.', verb: 'llevar', tense: 'present', rows: [
            ['yo', 'llevo', 'Regular *-ar* verb: *-o* for *yo*.'],
            ['tú', 'llevas', '*-as* for *tú*.'],
            ['él / ella / usted', 'lleva', '*-a* for the third person.'],
            ['nosotros', 'llevamos', '*-amos* for *nosotros*.'],
            ['vosotros', 'lleváis', '*-áis*, with an accent. Latin America uses *ustedes llevan* instead.'],
            ['ellos / ellas / ustedes', 'llevan', '*-an* for the third person plural.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'In the hostel kitchen', lines: [
            { who: 'Kwame', s: 'Hola. ¡Qué bien huele! ¿Qué estás cocinando?' },
            { who: 'Lucía', s: 'Una tortilla de patatas. Es lo único que sé hacer bien. ¿Es tu primera vez en Valencia?' },
            { who: 'Kwame', s: 'Sí, llegué ayer. Llevo tres semanas viajando por España. ¿Y tú? ¿Eres de aquí?' },
            { who: 'Lucía', s: 'No, soy de Salamanca, pero llevo dos años trabajando aquí. ¿De dónde eres?' },
            { who: 'Kwame', s: 'De Ghana, de Acra. Pero vivo en Londres.' },
            { who: 'Lucía', s: '¿De verdad? ¡Qué interesante! Por cierto, esta noche hay música en la plaza. ¿Te apetece venir?' },
            { who: 'Kwame', s: '¡Claro! Me encantaría.' },
            { who: 'Lucía', s: 'Genial. Si quieres, primero cenamos. Hay tortilla para los dos.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Kwame lleva tres semanas en Valencia.', a: 'f', why: 'He arrived in Valencia yesterday. He has been travelling in Spain for three weeks.' },
            { q: 'Lucía es de Valencia.', a: 'f', why: '*Soy de Salamanca, pero llevo dos años trabajando aquí.*' },
            { q: 'Lucía cambia de tema con *Por cierto*.', a: 't', why: 'After *Por cierto* she talks about the music in the square.' },
            { q: 'Kwame acepta la invitación.', a: 't', why: '*¡Claro! Me encantaría.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best reaction.', items: [
            { q: '—Mañana voy a ver las cataratas. —___', o: ['¡Qué bien!', '¡Qué pena!', 'Bueno, me tengo que ir.'], why: 'Good news: *¡Qué bien!*' },
            { q: '—Han cancelado mi vuelo. —___', o: ['¡Qué pena!', '¡Qué bien!', 'Ha sido un placer.'], why: 'Bad news: *¡Qué pena!*' },
            { q: '—Soy de Valparaíso. ¿___', o: ['Y tú?', 'Por cierto?', 'De verdad?'], why: 'You ask the same question back: *¿Y tú?*' },
            { q: '—Bueno, me tengo que ir. —Vale. ___', o: ['Ha sido un placer.', '¿Es tu primera vez?', '¿Cuánto tiempo llevas aquí?'], why: 'At the end of a conversation: *Ha sido un placer.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with llevar and a gerund.', items: [
            { q: 'Llevo una hora ___ el tren. (esperar)', a: ['esperando'], why: 'Gerund of *-ar* verbs: *-ando*. *esperar*, *esperando*.' },
            { q: 'Mi hermana ___ seis meses viviendo en Lima. (llevar)', a: ['lleva'], why: '*mi hermana* is third person: *lleva*.' },
            { q: 'Llevamos todo el día ___ por la ciudad. (caminar)', a: ['caminando'], why: '*caminar*, *caminando*.' },
            { q: '¿Cuánto tiempo llevas ___ español? (aprender)', a: ['aprendiendo'], why: 'Gerund of *-er* verbs: *-iendo*. *aprender*, *aprendiendo*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Your country and theirs',
      about: 'Talk about life in your country and ask about other countries.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'To talk about habits, use *soler* + infinitive: *En mi país solemos cenar a las siete*. It means *usually*. *soler* changes *o* to *ue*: *suelo*, *sueles*, *suele*.\n\nFor opinions, use *creo que* + indicative. With *no creo que*, the next verb is in the **subjunctive**: *No creo que sea tan caro*.' },
          { t: 'examples', items: [
            { s: 'En Japón **solemos** quitarnos los zapatos en casa.', n: '*soler* + infinitive: a habit.' },
            { s: 'Aquí la gente **suele** cenar muy tarde, a las diez o más.', n: '*suele*: *o* changes to *ue*.' },
            { s: '**Creo que** la vida aquí **es** más tranquila.', n: '*creo que* + indicative: *es*.' },
            { s: '**No creo que** **haya** tanto tráfico como en mi ciudad.', n: '*no creo que* + subjunctive: *haya*.' },
            { s: '¿Cómo es la comida en tu país? ¿**Se come** mucho arroz?', n: 'Impersonal *se*: people in general.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Talk about your own experience rather than making big statements about a whole country. *En mi familia…* or *Por lo que he visto…* sounds open and friendly.' },
        ],
        [
          { t: 'dialogue', title: 'On the bus to Oaxaca', lines: [
            { who: 'Priya', s: 'Perdona, ¿este asiento está libre?' },
            { who: 'Mateo', s: 'Sí, claro. ¿Vas a Oaxaca también? ¿De dónde eres?' },
            { who: 'Priya', s: 'Soy de la India, de Bombay. Llevo dos semanas en México.' },
            { who: 'Mateo', s: '¡Qué padre! ¿Y qué es lo más diferente para ti?' },
            { who: 'Priya', s: 'Las comidas, creo. Aquí se come muy tarde. En mi familia solemos comer a la una.' },
            { who: 'Mateo', s: 'Sí, aquí solemos comer a las tres o a las cuatro. ¿Y la comida picante? ¿Te gusta?' },
            { who: 'Priya', s: 'Me encanta. No creo que sea más picante que la comida de mi país.' },
            { who: 'Mateo', s: '¡Ja, ja! Ya veremos. En Oaxaca te voy a llevar a probar un mole de verdad.' },
          ] },
          { t: 'text', md: '*¡Qué padre!* means *great!* in Mexico. In Spain people say *¡Qué guay!* Many words change from country to country: a bus is *el autobús* in Spain, *el camión* in Mexico and *la guagua* in the Canary Islands and the Caribbean.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Priya lleva dos semanas en México.', a: 't', why: '*Llevo dos semanas en México.*' },
            { q: 'En la familia de Priya suelen comer tarde.', a: 'f', why: 'They usually eat at one o’clock. In Mexico people eat later.' },
            { q: 'Priya cree que la comida mexicana es más picante.', a: 'f', why: '*No creo que sea más picante que la comida de mi país.*' },
            { q: 'Mateo quiere enseñarle un plato típico a Priya.', a: 't', why: 'He wants to take her to try a real *mole* in Oaxaca.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'En mi país la gente ___ desayunar fuerte.', o: ['suele', 'sole', 'suelen'], why: '*la gente* is singular: *suele*, with *ue*.' },
            { q: 'Creo que aquí la gente ___ muy simpática.', o: ['es', 'sea', 'ser'], why: '*creo que* + indicative: *es*.' },
            { q: 'No creo que el museo ___ abierto hoy.', o: ['esté', 'está', 'estar'], why: '*no creo que* + subjunctive: *esté*.' },
            { q: 'Nosotros ___ cenar en familia los domingos.', o: ['solemos', 'suelemos', 'soléis'], why: '*nosotros* keeps the *o*: *solemos*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'En mi país solemos comer a las doce.', why: '*soler* + infinitive: *solemos comer*.' },
            { a: 'No creo que haga frío esta noche.', why: '*no creo que* + subjunctive: *haga*.' },
            { a: 'Creo que aquí se vive muy bien.', why: '*creo que* + indicative; *se vive*: people in general.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the beginning and the end.', pairs: [
            ['En mi familia solemos', 'cenar todos juntos a las siete.'],
            ['No creo que', 'sea fácil encontrar hotel en agosto.'],
            ['Por lo que he visto,', 'aquí la gente camina mucho.'],
            ['¿Cómo se celebra', 'el Año Nuevo en tu país?'],
            ['Llevo un mes aquí y', 'todavía me sorprenden los horarios.'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: meeting people on the road',
      about: 'Read a blog post with ideas for meeting people while you travel.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'Viajar sola, pero nunca sola', md: 'Hace tres años hice mi primer viaje sola: un mes por Argentina y Uruguay. Antes de salir, tenía miedo de sentirme sola. Hoy lo sé: viajar sola no significa estar sola. Estos son mis consejos.\n\nLa manera más fácil de conocer gente es en los albergues, sobre todo en la cocina. Cuando cocinas, enseguida empiezas a hablar con alguien. Yo suelo preguntar qué están preparando los demás, y muchas veces acabamos cenando juntos.\n\nEn muchas ciudades hay visitas guiadas gratuitas. Al final se le da una propina al guía. Los grupos son internacionales, y después de la visita algunos suelen ir a tomar algo juntos.\n\nMi consejo favorito es un intercambio de idiomas. Allí se encuentran personas del lugar y de otros países para practicar idiomas. En Buenos Aires conocí así a Diego. Él quería aprender chino y yo quería mejorar mi español. Todavía nos escribimos, y espero que pronto venga a visitarme.\n\n¿Y cuando no tengo ganas de hablar con nadie? Entonces me siento en un café con un libro. No creo que eso sea malo: también es parte del viaje.\n\nUn abrazo, Mei' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the blog post. True, false or not given?', items: [
            { q: 'Mei viajó sola por primera vez hace tres años.', a: 't', why: '*Hace tres años hice mi primer viaje sola.*' },
            { q: 'Antes del viaje, Mei no tenía ningún miedo.', a: 'f', why: '*tenía miedo de sentirme sola*.' },
            { q: 'En las visitas guiadas gratuitas no se paga nada al guía.', a: 'f', why: 'At the end people give the guide a tip: *una propina*.' },
            { q: 'Diego ya ha visitado a Mei en su país.', a: 'ng', why: 'Mei hopes he will come soon, but we do not know if he has visited before.' },
            { q: 'Mei conoció a Diego en un intercambio de idiomas.', a: 't', why: '*En Buenos Aires conocí así a Diego*: at a language exchange.' },
            { q: 'Mei habla chino con su familia.', a: 'ng', why: 'The blog does not say which languages Mei speaks at home.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words from the blog and their meaning.', pairs: [
            ['el albergue', 'un alojamiento barato con habitaciones compartidas'],
            ['enseguida', 'muy rápido, casi al momento'],
            ['tomar algo', 'ir a un bar o a un café a beber algo'],
            ['un intercambio de idiomas', 'un encuentro para practicar idiomas con otras personas'],
            ['no tener ganas', 'no querer hacer algo en ese momento'],
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the subjunctive.', items: [
            { s: 'Todavía nos escribimos, y espero que pronto [venga] a visitarme.', why: '*esperar que* + subjunctive: *venga*.' },
            { s: 'No creo que eso [sea] malo: también es parte del viaje.', why: '*no creo que* + subjunctive: *sea*. *es* is indicative.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '¿Cuánto tiempo ___ viajando por Chile?', o: ['llevas', 'haces', 'estás'], why: '*llevar* + gerund: how long something has been going on.' },
      { q: '—Me han robado la cámara. —___', o: ['¡Qué pena!', '¡Qué bien!', '¡Qué interesante!'], why: 'Bad news: *¡Qué pena!*' },
      { q: 'No creo que el viaje ___ muy largo.', o: ['sea', 'es', 'ser'], why: '*no creo que* + subjunctive: *sea*.' },
      { q: 'En Latinoamérica, para hablar con un grupo de amigos se usa ___.', o: ['ustedes', 'vosotros', 'usted'], why: 'Latin America uses *ustedes* for any group; *vosotros* is used in Spain.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Llevo dos años ___ en Madrid. (vivir)', a: ['viviendo'], why: 'Gerund of *-ir* verbs: *-iendo*. *vivir*, *viviendo*.' },
      { q: 'En mi país la gente ___ cenar a las siete. (soler)', a: ['suele'], why: '*soler*: *o* changes to *ue*. *la gente* is singular.' },
      { q: 'Creo que la ciudad ___ muy bonita. (ser)', a: ['es'], why: '*creo que* + indicative: *es*.' },
      { q: 'Bueno, me tengo que ir. Ha sido un ___.', a: ['placer'], why: '*Ha sido un placer*: a friendly goodbye.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Llevamos tres días esperando el barco.', why: '*llevar* + time + gerund.' },
      { a: 'No creo que llueva mañana.', why: '*no creo que* + subjunctive: *llueva*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'En España mucha gente usa *tú* con desconocidos de su misma edad.', a: 't', why: '*tú* is very common in Spain, even with strangers of a similar age.' },
      { q: '*Por cierto* se usa para terminar una conversación.', a: 'f', why: '*Por cierto* changes the topic. To end it, say *Bueno, me tengo que ir*.' },
    ] },
  ],
};
