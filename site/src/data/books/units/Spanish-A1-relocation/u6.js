// Spanish A1 for moving abroad, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Neighbours',
  goal: 'Greet your neighbours, introduce your family and invite people.',
  art: 'sun',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['neighbours', 'introductions', 'este-esta', 'vivir', 'floors', 'invitations', 'querer-poder', 'notices'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Meeting the neighbours',
      about: 'Introduce yourself and your family and say where you live in the building.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Many people in Spain live in blocks of flats. You meet your neighbours (*los vecinos*) on the stairs, in the lift and at the door. A short *Buenos días* or *Hola, buenas* in the lift is normal, also with people you do not know.' },
          { t: 'table', caption: 'Introducing people', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'When you say it'], rows: [
            ['Este es mi marido, Lucas.', 'to introduce a man or a boy'],
            ['Esta es mi hija, Sara.', 'to introduce a woman or a girl'],
            ['Estos son mis hijos.', 'to introduce more than one person'],
            ['Encantado.', 'nice to meet you, said by a man'],
            ['Encantada.', 'nice to meet you, said by a woman'],
            ['Mucho gusto.', 'nice to meet you, said by anyone'],
          ] },
          { t: 'tip', art: 'churro', md: 'In Latin America, *Mucho gusto* is very common, and many people answer *Igualmente* (you too). In Spain, *Encantado* and *Encantada* are more usual.' },
        ],
        [
          { t: 'text', md: 'To say where you live, use **vivir**, a regular *-ir* verb. In a building, you say the floor: *Vivo **en el tercero**.* (I live on the third floor.) The ground floor is *el bajo*. Doors have a letter or a side: *el segundo B*, *el cuarto izquierda*.' },
          { t: 'table', caption: 'vivir (to live)', explain: ['head'], quiz: true, head: ['Person', 'vivir'], rows: [
            ['yo', 'vivo'],
            ['tú', 'vives'],
            ['él, ella, usted', 'vive'],
            ['nosotros, nosotras', 'vivimos'],
            ['vosotros, vosotras', 'vivís'],
            ['ellos, ellas, ustedes', 'viven'],
          ] },
          { t: 'table', caption: 'The floors', explain: ['head', 'col0'], head: ['Floor', 'Spanish'], rows: [
            ['ground floor', 'el bajo'],
            ['first floor', 'el primero'],
            ['second floor', 'el segundo'],
            ['third floor', 'el tercero'],
            ['fourth floor', 'el cuarto'],
            ['fifth floor', 'el quinto'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'En el ascensor', lines: [
            { who: 'Rosa', s: 'Buenos días. ¿Es usted el vecino nuevo del cuarto?' },
            { who: 'Lucas', s: 'Sí, buenos días. Me llamo Lucas. Encantado.' },
            { who: 'Rosa', s: 'Encantada. Yo soy Rosa. Vivo en el segundo, en el segundo B.' },
            { who: 'Lucas', s: 'Esta es mi hija, Sara. Mi mujer está en el trabajo.' },
            { who: 'Rosa', s: '¡Hola, Sara! ¿Cuántos años tienes?' },
            { who: 'Sara', s: 'Tengo siete años.' },
            { who: 'Rosa', s: 'Mis nietos también tienen siete años. Viven en el primero. ¡Bienvenidos al edificio!' },
            { who: 'Lucas', s: 'Muchas gracias. ¡Hasta luego!' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Lucas vive en el cuarto.', a: 't', why: 'Rosa asks *¿Es usted el vecino nuevo del cuarto?* and he says yes.' },
            { q: 'Rosa vive en el segundo B.', a: 't', why: '*Vivo en el segundo, en el segundo B.*' },
            { q: 'La mujer de Lucas está en el ascensor.', a: 'f', why: '*Mi mujer está en el trabajo.*' },
            { q: 'Los nietos de Rosa viven en otra ciudad.', a: 'f', why: 'They live in the same building: *Viven en el primero.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '___ es mi mujer, Clara.', o: ['Esta', 'Este', 'Estos'], why: 'One woman: *esta*.' },
            { q: '___ son mis hijos, Leo y Mateo.', o: ['Estos', 'Este', 'Esta'], why: 'More than one person: *estos*.' },
            { q: 'Rosa says: Encantad___.', o: ['Encantada.', 'Encantado.', 'Encantados.'], why: 'Rosa is a woman: *encantada*.' },
            { q: 'You live on the ground floor: Vivo en ___', o: ['el bajo.', 'el primero.', 'el ático.'], why: 'The ground floor is *el bajo*.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of vivir.', verb: 'vivir', tense: 'present', rows: [
            ['yo', 'vivo'],
            ['tú', 'vives'],
            ['él, ella, usted', 'vive'],
            ['nosotros', 'vivimos'],
            ['vosotros', 'vivís'],
            ['ellos, ellas, ustedes', 'viven'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: '¿Dónde ___ tú? (vivir)', a: ['vives'], why: '*tú*: *vives*.' },
            { q: 'Mi familia y yo vivimos ___ el tercero.', a: ['en'], why: 'The floor: *en el tercero*.' },
            { q: 'Esta es ___ hija. (my)', a: ['mi'], why: '*mi* + one person or thing.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Inviting and replying',
      about: 'Invite someone, say yes, or say no in a polite way.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To invite someone, use **¿Quieres + infinitive?** or **¿Te apetece + infinitive?**: *¿Quieres venir a cenar? ¿Te apetece tomar un café?* With friends you also hear **¿Quedamos?** (Shall we meet?). With *usted*, say *¿Quiere…?* and *¿Le apetece…?*' },
          { t: 'table', caption: 'querer (to want) and poder (can)', explain: ['head'], quiz: true, head: ['Person', 'querer', 'poder'], rows: [
            ['yo', 'quiero', 'puedo'],
            ['tú', 'quieres', 'puedes'],
            ['él, ella, usted', 'quiere', 'puede'],
            ['nosotros, nosotras', 'queremos', 'podemos'],
            ['vosotros, vosotras', 'queréis', 'podéis'],
            ['ellos, ellas, ustedes', 'quieren', 'pueden'],
          ] },
          { t: 'table', caption: 'Saying yes and no', explain: ['head', 'col1'], head: ['Spanish', 'Meaning'], rows: [
            ['Sí, claro.', 'yes, of course'],
            ['¡Vale!', 'OK, very common in Spain'],
            ['¡Qué buena idea!', 'what a good idea'],
            ['Lo siento, no puedo.', 'sorry, I can’t'],
            ['Es que trabajo.', 'the thing is, I work then'],
            ['¿Y otro día?', 'and another day?'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'En la escalera', lines: [
            { who: 'Inés', s: '¡Hola, Lucas! El sábado hacemos una cena en la terraza con los vecinos. ¿Quieres venir?' },
            { who: 'Lucas', s: '¡Sí, claro! ¡Qué buena idea! ¿A qué hora?' },
            { who: 'Inés', s: 'A las nueve y media. ¿Te apetece traer algo? Una ensalada, una bebida…' },
            { who: 'Lucas', s: 'Vale, llevo una ensalada.' },
            { who: 'Inés', s: '¡Genial! ¿Y tu mujer puede venir?' },
            { who: 'Lucas', s: 'Lo siento, ella no puede. Es que el sábado trabaja por la noche.' },
            { who: 'Inés', s: '¡Qué pena! Bueno, hasta el sábado.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain, dinner is late, often at nine or ten. When people invite you to their home, it is nice to bring something small, like a dessert or a drink. In much of Latin America, people say *está bien* or *dale* more than *vale*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: '¿Te apetece tomar un café?', o: ['¡Sí, vale!', 'Vivo en el tercero.', 'Encantada.'], why: 'An invitation: answer yes or no.' },
            { q: '¿Quieres venir a la cena el sábado?', o: ['Lo siento, no puedo. Es que trabajo.', 'Sí, es mi hija.', 'Sí, en el tercero.'], why: 'A polite no: *Lo siento, no puedo* + a reason.' },
            { q: '¿Quedamos el domingo?', o: ['Sí, ¿a qué hora?', 'Sí, en el bajo.', 'Sí, tengo siete años.'], why: '*¿Quedamos?* asks to meet, so you can ask the time.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: '¿___ venir a mi casa el viernes? (tú)', o: ['Quieres', 'Quiere', 'Quiero'], why: '*tú*: *quieres*.' },
            { q: 'Lo siento, el viernes no ___.', o: ['puedo', 'pueden', 'podemos'], why: 'For yourself: *no puedo*.' },
            { q: 'Señora Rosa, ¿___ tomar un café con nosotros?', o: ['quiere', 'quieres', 'queréis'], why: '*Señora* means *usted*: *quiere*.' },
            { q: 'Mi mujer y yo no ___ ir el sábado.', o: ['podemos', 'puedo', 'pueden'], why: '*Mi mujer y yo* = *nosotros*: *podemos*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Make an invitation with ¿Quieres…?', items: [
            { q: '¿Vienes a la cena?', cue: '¿Quieres', a: ['¿Quieres venir a la cena?'], why: '*¿Quieres* + infinitive: *venir*.' },
            { q: '¿Tomas un café conmigo?', cue: '¿Quieres', a: ['¿Quieres tomar un café conmigo?'], why: '*¿Quieres* + infinitive: *tomar*.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentences. Two words do not belong.', items: [
            { a: '¿Te apetece cenar con nosotros?', extra: ['quiere', 'cenas'], why: '*¿Te apetece* + infinitive: *cenar*, not *cenas*.' },
            { a: 'Lo siento, no puedo el sábado.', extra: ['puede', 'quiero'], why: 'For yourself: *no puedo*.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: what someone says and the answer.', pairs: [
            ['¿Quedamos mañana?', 'Vale, ¿a qué hora?'],
            ['¿Te apetece un café?', 'Sí, gracias.'],
            ['Esta es mi hija.', 'Hola, encantada.'],
            ['¿Puedes venir el sábado?', 'Lo siento, no puedo.'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A notice and an invitation',
      about: 'Read a notice for the neighbours and an invitation to a party.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Most blocks of flats in Spain have a residents’ association, *la comunidad de vecinos*. It looks after the stairs, the lift and the rules of the building. Notices are usually at the door, in *el portal*.' },
          { t: 'reading', title: 'Aviso a los vecinos', md: 'Comunidad de vecinos, calle del Sol, 21.\n\nReunión de vecinos: el jueves 5 de noviembre a las 19:30, en el portal. Hablamos del ascensor y de la limpieza de la escalera.\n\nRecuerden: la basura se baja por la noche, de 20:00 a 23:00. Hay contenedores para papel, plástico y vidrio en la esquina.\n\nPor favor, no hagan ruido después de las 23:00.\n\nGracias.\nEl presidente de la comunidad' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the notice. True, false or not given?', items: [
            { q: 'La reunión es en el portal.', a: 't', why: '*a las 19:30, en el portal*.' },
            { q: 'En la reunión hablan de la terraza.', a: 'f', why: 'They talk about the lift and the cleaning of the stairs.' },
            { q: 'Se puede bajar la basura a las nueve de la mañana.', a: 'f', why: 'Only at night, from 20:00 to 23:00.' },
            { q: 'Los contenedores están en la esquina.', a: 't', why: '*Hay contenedores … en la esquina.*' },
            { q: 'El presidente vive en el bajo.', a: 'ng', why: 'The notice does not say where he lives.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Una nota de Inés', md: '¡Hola, vecinos!\n\nSoy Inés, del quinto A. El sábado 7 de noviembre es mi cumpleaños y hago una fiesta en la terraza del edificio, a partir de las nueve de la noche. ¡Estáis todos invitados! Los niños también pueden venir.\n\nYo pongo la música y la comida. Si queréis, podéis traer una bebida o un postre.\n\nPor favor, escribidme un mensaje antes del jueves: ¿podéis venir o no? Mi número es el 600 000 555.\n\n¡Un beso!\nInés' },
          { t: 'ex', kind: 'choice', h: 'Read the note. Choose the answer.', items: [
            { q: 'La fiesta es ___', o: ['el sábado por la noche.', 'el jueves por la noche.', 'el sábado por la mañana.'], why: '*El sábado … a partir de las nueve de la noche.*' },
            { q: 'Inés vive en ___', o: ['el quinto A.', 'el bajo.', 'el segundo B.'], why: '*Soy Inés, del quinto A.*' },
            { q: 'Los vecinos pueden traer ___', o: ['una bebida o un postre.', 'la música.', 'la comida.'], why: 'Inés brings the music and the food; the neighbours can bring a drink or a dessert.' },
            { q: 'Antes del jueves, los vecinos ___', o: ['escriben a Inés.', 'compran la comida.', 'van a la terraza.'], why: '*escribidme un mensaje antes del jueves*.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Inés writes to all the neighbours with **vosotros**: *estáis invitados*, *podéis venir*, *escribidme*. In Latin America, she would write with *ustedes*: *están invitados*, *pueden venir*. *¡Un beso!* is a friendly way to end a message.' },
          { t: 'ex', kind: 'spot', h: 'Tap the three verbs with vosotros.', items: [
            { s: '¡[Estáis] todos invitados! Si [queréis], [podéis] traer una bebida.', why: '*estáis*, *queréis*, *podéis*: the *vosotros* forms end in *-áis* or *-éis*.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which word does not belong?', items: [
            { o: ['el postre', 'el portal', 'la escalera', 'el ascensor'], why: '*el postre* is a dessert. The others are parts of a building.' },
            { o: ['la basura', 'la fiesta', 'la cena', 'el cumpleaños'], why: '*la basura* is rubbish. The others are about a party.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '___ son mis hijas.', o: ['Estas', 'Esta', 'Estos'], why: 'More than one girl: *estas*.' },
      { q: 'A man says: ___', o: ['Encantado.', 'Encantada.', 'Encantadas.'], why: 'A man: *encantado*.' },
      { q: '¿Te apetece tomar algo? ___', o: ['¡Sí, vale!', 'Vivo en el bajo.', 'Esta es mi hija.'], why: 'An invitation: yes or no.' },
      { q: 'La basura se baja ___', o: ['por la noche.', 'en el ascensor.', 'en la reunión.'], why: 'In the notice: from 20:00 to 23:00, at night.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Nosotros ___ en el tercero. (vivir)', a: ['vivimos'], why: '*nosotros*: *vivimos*.' },
      { q: '¿___ venir a la fiesta? (querer, tú)', a: ['Quieres'], why: '*tú*: *quieres*.' },
      { q: 'Lo siento, no ___. Es que trabajo. (poder)', a: ['puedo'], why: 'For yourself: *puedo*.' },
      { q: '___ es mi marido, Javier.', a: ['Este'], why: 'One man: *este*.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
      { q: 'Vecinos, ¿___ venir el sábado?', o: ['podéis', 'puedes', 'puedo'], why: 'To all the neighbours in Spain: *vosotros podéis*.' },
      { q: 'Señor, ¿le ___ un café?', o: ['apetece', 'apetezco', 'apetecen'], why: '*apetecer* works like *gustar*: *le apetece* + one thing.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Quieres venir a cenar el sábado?', why: '*¿Quieres* + infinitive + when.' },
      { a: 'Mi vecina vive en el segundo B.', why: 'Subject, *vive*, then *en* + the floor.' },
    ] },
  ],
};
