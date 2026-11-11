// Spanish A2, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'People and relationships',
  goal: 'Describe people’s character and how they get on, and choose between ser and estar.',
  art: 'dog',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['ser-estar', 'character-adjectives', 'reciprocal-verbs', 'muy-mucho', 'relationships'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'ser or estar',
      about: 'Say who someone is and how they are right now.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Spanish has two verbs for *to be*. Use **ser** for who or what someone is: name, nationality, job, character and what they look like. Use **estar** for how someone is now: tired, happy, ill, and also for where someone is.' },
          { t: 'table', caption: 'ser and estar', explain: ['head'], quiz: true, head: ['Person', 'ser', 'estar'], rows: [
            ['yo', 'soy', 'estoy'],
            ['tú', 'eres', 'estás'],
            ['él, ella, usted', 'es', 'está'],
            ['nosotros, nosotras', 'somos', 'estamos'],
            ['vosotros, vosotras', 'sois', 'estáis'],
            ['ellos, ellas, ustedes', 'son', 'están'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Latin America, people do not use *vosotros*. They say *ustedes* to friends too: *¿Ustedes están cansados?* instead of *¿Estáis cansados?*' },
        ],
        [
          { t: 'table', caption: 'When to use ser and estar', explain: ['head', 'col0'], head: ['Use', 'Example'], rows: [
            ['ser: identity and job', 'Ana es mi vecina. Es enfermera.'],
            ['ser: origin and nationality', 'Somos de Bilbao.'],
            ['ser: character and looks', 'Mi hermano es simpático y muy alto.'],
            ['estar: how someone feels now', 'Hoy estoy cansada.'],
            ['estar: health', 'Pedro está enfermo.'],
            ['estar: place', 'Mis padres están en Málaga.'],
          ] },
          { t: 'examples', items: [
            { s: 'Carlos **es** muy tranquilo, pero hoy **está** nervioso.', n: '*es tranquilo*: his character. *está nervioso*: only today.' },
            { s: 'Mi abuela **es** de Cádiz, pero ahora **está** en Madrid.', n: '*ser de*: where she comes from. *estar en*: where she is now.' },
            { s: '¿Qué te pasa? ¿**Estás** triste?', n: 'A feeling now: *estar*.' },
            { s: 'Mis amigas **son** profesoras.', n: 'A job: *ser*, with no article.' },
          ] },
        ],
        [
          { t: 'text', md: 'Some adjectives change their meaning with *ser* and *estar*. With *ser* they describe the person. With *estar* they describe a state.' },
          { t: 'table', caption: 'One adjective, two meanings', explain: ['head', 'col2'], head: ['ser', 'estar', 'Meaning'], rows: [
            ['es aburrido', 'está aburrido', 'boring / bored'],
            ['es listo', 'está listo', 'clever / ready'],
            ['es malo', 'está malo', 'bad / ill'],
            ['es rico', 'está rico', 'rich / tasty'],
          ] },
          { t: 'tip', art: 'owl', md: '*Estar malo* (to be ill) is very common in Spain. In Latin America people usually say *estar enfermo*, which is correct everywhere.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'ser or estar? Choose.', items: [
            { q: 'Mi novio ___ ingeniero.', o: ['es', 'está', 'son'], why: 'A job: *ser*.' },
            { q: 'Lucía no puede venir porque ___ enferma.', o: ['está', 'es', 'estás'], why: 'Health, how she is now: *estar*.' },
            { q: 'Vosotros ___ de Argentina, ¿verdad?', o: ['sois', 'estáis', 'son'], why: 'Origin: *ser*. *vosotros sois*.' },
            { q: 'Mis padres ___ en casa de mi tía.', o: ['están', 'son', 'estamos'], why: 'A place: *estar*. *ellos están*.' },
            { q: 'Diego ___ muy simpático. Habla con todo el mundo.', o: ['es', 'está', 'eres'], why: 'His character: *ser*.' },
            { q: '¿Por qué ___ tan contenta hoy, Sara?', o: ['estás', 'eres', 'está'], why: 'A feeling now: *estar*. You speak to Sara: *tú estás*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'ser or estar? Sort the words that follow the verb.', groups: ['ser', 'estar'], items: [
            { s: 'de Valencia', g: 0, why: 'Origin: *ser de*.' },
            { s: 'cansado después del trabajo', g: 1, why: 'A state now: *estar cansado*.' },
            { s: 'camarero', g: 0, why: 'A job: *ser camarero*.' },
            { s: 'en la oficina', g: 1, why: 'A place: *estar en*.' },
            { s: 'alto y moreno', g: 0, why: 'What someone looks like: *ser*.' },
            { s: 'enfadado con su hermana', g: 1, why: 'A feeling now: *estar enfadado*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the right form of ser or estar.', items: [
            { q: 'Nosotros ___ muy contentos con el piso nuevo.', a: ['estamos'], why: 'A feeling: *estar*. *nosotros estamos*.' },
            { q: 'Tú ___ muy generoso con tus amigos.', a: ['eres'], why: 'Character: *ser*. *tú eres*.' },
            { q: 'La comida ___ lista. ¡A la mesa!', a: ['está'], why: '*estar listo*: ready.' },
            { q: 'Mi profesora de inglés ___ irlandesa.', a: ['es'], why: 'Nationality: *ser*.' },
            { q: '¿Dónde ___ vosotros? Os estamos esperando.', a: ['estáis'], why: 'A place: *estar*. *vosotros estáis*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'What is he like?',
      about: 'Describe character and say how people get on.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To ask about someone’s character, say **¿Cómo es?** The answer uses *ser* + an adjective. Adjectives agree with the person: *-o* for a man, *-a* for a woman, and *-s* in the plural.' },
          { t: 'table', caption: 'Character adjectives', quiz: true, head: ['', 'The opposite'], rows: [
            ['simpático, simpática', 'antipático, antipática'],
            ['abierto, abierta', 'tímido, tímida'],
            ['trabajador, trabajadora', 'vago, vaga'],
            ['generoso, generosa', 'tacaño, tacaña'],
            ['divertido, divertida', 'aburrido, aburrida'],
            ['tranquilo, tranquila', 'nervioso, nerviosa'],
            ['educado, educada', 'maleducado, maleducada'],
          ] },
          { t: 'tip', art: 'owl', md: 'Adjectives ending in *-e* or *-ista* are the same for men and women: *amable, alegre, optimista*. Most adjectives ending in a consonant are too (*puntual*), but *trabajador* and *hablador* add *-a*: *trabajadora, habladora*.' },
        ],
        [
          { t: 'text', md: '**llevarse bien / mal con** someone means to get on well or badly with them. **parecerse a** someone means to look like them or be like them. Both verbs go with *me, te, se, nos, os, se*.' },
          { t: 'table', caption: 'llevarse and parecerse', explain: ['head'], quiz: true, head: ['Person', 'llevarse', 'parecerse'], rows: [
            ['yo', 'me llevo', 'me parezco'],
            ['tú', 'te llevas', 'te pareces'],
            ['él, ella, usted', 'se lleva', 'se parece'],
            ['nosotros, nosotras', 'nos llevamos', 'nos parecemos'],
            ['vosotros, vosotras', 'os lleváis', 'os parecéis'],
            ['ellos, ellas, ustedes', 'se llevan', 'se parecen'],
          ] },
          { t: 'examples', items: [
            { s: '**Me llevo** muy bien **con** mi suegra.', n: '*llevarse bien con* + a person.' },
            { s: 'Mi hermano y yo **nos llevamos** fatal.', n: '*fatal*: very badly. *mi hermano y yo* = *nosotros*.' },
            { s: '**Te pareces** mucho **a** tu padre.', n: '*parecerse a* + a person. *yo* is irregular: *me parezco*.' },
            { s: 'Las dos hermanas **se parecen**: son muy alegres.', n: 'Without *a*, it means they are like each other.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the opposite.', pairs: [
            ['simpático', 'antipático'],
            ['trabajador', 'vago'],
            ['generoso', 'tacaño'],
            ['abierto', 'tímido'],
            ['tranquilo', 'nervioso'],
          ] },
          { t: 'ex', kind: 'odd', h: 'Tap the odd one out.', items: [
            { o: ['vago', 'amable', 'simpático', 'generoso'], why: '*vago* (lazy) is negative. The others are positive.' },
            { o: ['cansado', 'tímido', 'alegre', 'trabajador'], why: '*cansado* is a state and goes with *estar*. The others describe character.' },
            { o: ['alta', 'educado', 'abierto', 'tacaño'], why: '*alta* is feminine. The others are masculine.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Write the adjective so that it agrees with the person.', items: [
            { q: 'Mi jefa es muy ___. Siempre trabaja hasta tarde.', base: 'trabajador', a: ['trabajadora'], why: '*trabajador* adds *-a* for a woman.' },
            { q: 'Mis primas son muy ___.', base: 'divertido', a: ['divertidas'], why: 'Feminine plural: *-as*.' },
            { q: 'Tu hermana es muy ___ con todo el mundo.', base: 'amable', a: ['amable'], why: 'Adjectives in *-e* do not change for a woman.' },
            { q: 'Mis vecinos son un poco ___. Nunca dicen hola.', base: 'antipático', a: ['antipáticos'], why: 'Masculine plural: *-os*.' },
            { q: 'Mi abuela es muy ___. Habla sin parar.', base: 'hablador', a: ['habladora'], why: '*hablador* adds *-a* for a woman.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Yo ___ mucho a mi madre: tenemos los mismos ojos.', o: ['me parezco', 'me parezo', 'me parece'], why: '*parecerse* is irregular in the *yo* form: *me parezco*.' },
            { q: 'Pablo ___ muy bien con sus compañeros de trabajo.', o: ['se lleva', 'se llevan', 'lleva'], why: '*llevarse* needs *se* for *él*: *se lleva*.' },
            { q: '¿Vosotros ___ bien con vuestros vecinos?', o: ['os lleváis', 'se llevan', 'nos llevamos'], why: '*vosotros*: *os lleváis*.' },
            { q: 'Marta se parece ___ su abuela.', o: ['a', 'con', 'de'], why: '*parecerse a* + a person.' },
            { q: 'Mi hermana y yo nos llevamos ___: siempre discutimos.', o: ['mal', 'bien', 'muy'], why: 'They always argue, so they get on badly: *mal*.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the present of *llevarse*.', verb: 'llevarse', tense: 'present', rows: [
            ['yo', 'me llevo'], ['tú', 'te llevas'], ['él, ella, usted', 'se lleva'], ['nosotros', 'nos llevamos'], ['vosotros', 'os lleváis'], ['ellos, ustedes', 'se llevan'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'We see each other every week',
      about: 'Say what people do to each other, and use muy and mucho.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'With **nos**, **os** and **se** in the plural, a verb can mean that people do something **to each other**: *Nos vemos los lunes* (we see each other on Mondays). *Se quieren mucho* (they love each other a lot).' },
          { t: 'table', caption: 'Doing things to each other', explain: ['head'], quiz: true, head: ['Person', 'Pronoun', 'Example'], rows: [
            ['nosotros, nosotras', 'nos', 'Nos escribimos cada día.'],
            ['vosotros, vosotras', 'os', '¿Os conocéis?'],
            ['ellos, ellas, ustedes', 'se', 'Se ayudan mucho.'],
          ] },
          { t: 'examples', items: [
            { s: 'Elena y yo **nos conocimos** en la universidad.', n: '*conocimos* is a past form (unit 2). *Nos conocimos*: we met.' },
            { s: 'Mis padres **se llaman** por teléfono todos los días.', n: 'They call each other.' },
            { s: '¿Vosotros **os veis** mucho?', n: '*verse*: to see each other.' },
            { s: 'Los dos hermanos **se quieren** mucho.', n: '*quererse*: to love each other.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Latin America, *ustedes se* replaces *vosotros os*: *¿Ustedes se conocen?* instead of *¿Os conocéis?*' },
        ],
        [
          { t: 'text', md: 'Use **muy** before an adjective or an adverb: *muy simpático, muy bien*. Use **mucho** after a verb: *Te quiero mucho*. Before a noun, *mucho* agrees with it: *mucho tiempo, mucha paciencia, muchos amigos, muchas cosas*.' },
          { t: 'table', caption: 'muy and mucho', explain: ['head'], quiz: true, head: ['Word', 'Goes with', 'Example'], rows: [
            ['muy', 'adjective, adverb', 'Es muy alegre. Vive muy cerca.'],
            ['mucho', 'after a verb', 'Mi hermana habla mucho.'],
            ['mucho, mucha', 'singular noun', 'Tengo mucho trabajo y mucha prisa.'],
            ['muchos, muchas', 'plural noun', 'Tiene muchos amigos y muchas ideas.'],
          ] },
          { t: 'tip', art: 'owl', md: '*muy* cannot stand alone. To answer a question, use *mucho*: *¿Es simpático? Sí, mucho.* Never say *muy mucho*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right pronoun.', items: [
            { q: 'Mi novia y yo ___ escribimos mensajes todo el día.', o: ['nos', 'se', 'os'], why: '*Mi novia y yo* = *nosotros*: *nos*.' },
            { q: 'Ana y Carlos ___ conocen desde el colegio.', o: ['se', 'nos', 'les'], why: '*ellos*: *se conocen*.' },
            { q: '¿Vosotros ___ veis los fines de semana?', o: ['os', 'se', 'nos'], why: '*vosotros*: *os veis*.' },
            { q: 'Mis abuelos ___ quieren mucho después de cincuenta años.', o: ['se', 'les', 'os'], why: '*ellos*: *se quieren*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'muy or mucho? Choose the right word.', items: [
            { q: 'Mi compañera de piso es ___ ordenada.', o: ['muy', 'mucho', 'mucha'], why: 'Before an adjective: *muy*.' },
            { q: 'Mi hermano y yo nos llamamos ___.', o: ['mucho', 'muy', 'muchos'], why: 'After a verb: *mucho*.' },
            { q: 'Tengo ___ amigas en Sevilla.', o: ['muchas', 'muy', 'mucho'], why: '*amigas* is feminine plural: *muchas*.' },
            { q: 'Hoy tengo ___ prisa.', o: ['mucha', 'muy', 'mucho'], why: '*la prisa* is feminine singular: *mucha*.' },
            { q: 'Mis vecinos viven ___ lejos.', o: ['muy', 'mucho', 'muchos'], why: 'Before an adverb (*lejos*): *muy*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write muy, mucho, mucha, muchos or muchas.', items: [
            { q: 'Mis padres se quieren ___.', a: ['mucho'], why: 'After a verb: *mucho*, with no change.' },
            { q: 'Lucas tiene ___ paciencia con los niños.', a: ['mucha'], why: '*la paciencia*: *mucha*.' },
            { q: 'Es una persona ___ abierta.', a: ['muy'], why: 'Before an adjective: *muy*.' },
            { q: 'En mi trabajo hay ___ problemas.', a: ['muchos'], why: '*los problemas* is masculine plural: *muchos*.' },
            { q: '¿Tu jefa es simpática? Sí, ___.', a: ['mucho'], why: '*muy* cannot stand alone. Use *mucho*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Mi hermana y yo nos vemos cada domingo.', why: '*nos* goes before the verb *vemos*.' },
            { a: '¿Os conocéis desde hace mucho tiempo?', why: '*os* goes before *conocéis*. *desde hace* + time.' },
            { a: 'Mis primos se llevan muy bien.', why: '*se* before the verb, *muy* before *bien*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Reading: a new flatmate',
      about: 'Read an email that introduces a new flatmate.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'Un compañero de piso nuevo', md: 'Hola, Inés:\n\n¿Qué tal estás? Te escribo porque tengo noticias: ¡ya tenemos un compañero de piso nuevo! Se llama Mateo, tiene veintiséis años y es de Granada. Es enfermero y trabaja en un hospital cerca de casa.\n\nMateo es muy simpático y abierto, pero también es un poco tímido al principio. Es alto y moreno y se parece mucho a un actor de una serie, pero no recuerdo cuál. Es muy ordenado, y eso me gusta mucho, porque tú ya sabes que Rosa y yo somos un poco desordenadas.\n\nMateo y Rosa se llevan muy bien. Los dos son muy divertidos y hablan mucho. Ahora mismo están en la cocina y preparan una tortilla para la cena. Yo estoy en mi habitación, un poco cansada, porque esta semana tengo mucho trabajo.\n\nMateo y yo nos conocimos hace dos semanas, el día de su visita al piso. Desde entonces nos vemos cada mañana en el desayuno y hablamos de todo.\n\n¿Cuándo vienes a visitarnos? Así te presento a Mateo.\n\nUn beso,\nLucía' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Mateo es de Granada.', a: 't', why: '*Se llama Mateo, tiene veintiséis años y es de Granada.*' },
            { q: 'Mateo trabaja en un colegio.', a: 'f', why: 'He is a nurse and works in a hospital: *trabaja en un hospital*.' },
            { q: 'Al principio, Mateo es un poco tímido.', a: 't', why: '*también es un poco tímido al principio.*' },
            { q: 'Lucía y Rosa son muy ordenadas.', a: 'f', why: '*Rosa y yo somos un poco desordenadas.*' },
            { q: 'Mateo tiene una hermana en Granada.', a: 'ng', why: 'The email does not talk about Mateo’s family.' },
            { q: 'Mateo y Rosa se llevan mal.', a: 'f', why: '*Mateo y Rosa se llevan muy bien.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the email again and choose.', items: [
            { q: '¿Dónde están Mateo y Rosa ahora?', o: ['En la cocina.', 'En el hospital.', 'En la habitación de Lucía.'], why: '*Ahora mismo están en la cocina.*' },
            { q: '¿Cómo está Lucía ahora?', o: ['Un poco cansada.', 'Muy nerviosa.', 'Enferma.'], why: '*Yo estoy en mi habitación, un poco cansada.*' },
            { q: '¿Cuándo se ven Lucía y Mateo?', o: ['Cada mañana en el desayuno.', 'Cada noche en la cena.', 'Los fines de semana.'], why: '*nos vemos cada mañana en el desayuno.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the forms of estar.', items: [
            { s: 'Hola, Inés: ¿Qué tal [estás]?', why: 'How someone is now: *estar*.' },
            { s: 'Ahora mismo [están] en la cocina y preparan una tortilla.', why: 'A place: *estar en*.' },
            { s: 'Yo [estoy] en mi habitación, un poco cansada.', why: 'A place and a state: both use *estar*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Mi madre ___ médica en un centro de salud.', o: ['es', 'está', 'son'], why: 'A job: *ser*.' },
      { q: 'No puedo hablar ahora, ___ muy ocupado.', o: ['estoy', 'soy', 'es'], why: 'A state now: *estar*. *yo estoy*.' },
      { q: 'Yo ___ mucho a mi hermano mayor.', o: ['me parezco', 'me parezo', 'nos parecemos'], why: '*parecerse a*, *yo* form: *me parezco*.' },
      { q: 'Ellos ___ por teléfono todos los domingos.', o: ['se llaman', 'nos llamamos', 'llaman'], why: 'They call each other: *se llaman*.' },
      { q: 'Tiene ___ amigos en el barrio.', o: ['muchos', 'muy', 'mucho'], why: '*amigos* is masculine plural: *muchos*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Mi compañero de piso no hace nada en casa. Es muy ___.', a: ['vago'], why: 'Someone who does not want to work is *vago*.' },
      { q: 'La sopa ___ muy rica. ¿Me das la receta?', a: ['está'], why: '*estar rico*: tasty.' },
      { q: '¿Vosotros ___ lleváis bien con vuestros jefes?', a: ['os'], why: '*vosotros*: *os lleváis*.' },
      { q: 'Mi hermana es muy ___. Siempre está contenta.', a: ['alegre'], why: '*alegre* (cheerful) is the same for men and women.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write it correctly.', items: [
      { s: 'Mis abuelos [son] en el pueblo este verano.', a: ['están'], why: 'A place: *estar*. *ellos están*.' },
      { s: 'Mi profesor es [mucho] simpático.', a: ['muy'], why: 'Before an adjective: *muy*.' },
      { s: 'Me llevo muy bien [a] mis compañeros.', a: ['con'], why: '*llevarse bien con* + a person.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Mi novio es tranquilo, pero hoy está nervioso.', why: '*es*: his character. *está*: how he is today.' },
      { a: '¿Os conocéis desde el colegio?', why: '*os* goes before the verb *conocéis*.' },
    ] },
  ],
};
