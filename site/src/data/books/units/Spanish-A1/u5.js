// Spanish A1, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'My day',
  goal: 'Say what you do every day and when.',
  art: 'sun',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['time', 'days-of-the-week', 'reflexive-verbs', 'stem-changing-verbs', 'irregular-yo-forms', 'daily-routine'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'What time is it?',
      about: 'Tell the time, say the days of the week and when you do things.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To ask the time, say **¿Qué hora es?** For one o’clock, say **Es la una**. For all the other hours, say **Son las** + number: *Son las dos, son las tres.*\n\nAfter the hour, add minutes with **y** (and). Before the next hour, take minutes away with **menos** (minus). *Cuarto* is a quarter and *media* is half.' },
          { t: 'table', caption: '¿Qué hora es?', explain: ['head'], quiz: true, head: ['Time', 'In Spanish'], rows: [
            ['1:00', 'Es la una.'],
            ['2:00', 'Son las dos.'],
            ['3:10', 'Son las tres y diez.'],
            ['4:15', 'Son las cuatro y cuarto.'],
            ['5:30', 'Son las cinco y media.'],
            ['6:40', 'Son las siete menos veinte.'],
            ['7:45', 'Son las ocho menos cuarto.'],
            ['12:00', 'Son las doce.'],
          ] },
          { t: 'tip', art: 'owl', md: 'From half past, Spanish counts to the next hour: 7:45 is *las ocho menos cuarto*. In many Latin American countries you also hear *un cuarto para las ocho* or *quince para las ocho*.' },
        ],
        [
          { t: 'text', md: 'To ask when something happens, say **¿A qué hora…?** and answer with **a la** or **a las**: *a la una, a las ocho.* Add **de la mañana**, **de la tarde** or **de la noche** to make it clear.\n\nWithout a clock time, say **por la mañana** (in the morning), **por la tarde** (in the afternoon or evening) and **por la noche** (at night).' },
          { t: 'examples', items: [
            { s: '¿A qué hora empieza la clase? – **A las nueve**.', n: '*a las* + the hour.' },
            { s: 'Como **a las dos y media**.', n: 'In Spain, lunch is often quite late.' },
            { s: 'El tren sale **a las ocho de la tarde**.', n: '*de la tarde* goes with a clock time.' },
            { s: '**Por la mañana** trabajo y **por la tarde** estudio.', n: '*por la mañana*: without a clock time.' },
            { s: 'Es **la una de la tarde**.', n: '*la una*: singular, because it is one hour.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What time is it? Choose.', items: [
            { q: '1:00 – ___', o: ['Es la una.', 'Son las una.', 'Es las una.'], why: 'One o’clock is singular: *Es la una*.' },
            { q: '9:30 – ___', o: ['Son las nueve y media.', 'Son las diez y media.', 'Son las nueve menos media.'], why: 'Half past nine: *las nueve y media*.' },
            { q: '6:15 – ___', o: ['Son las seis y cuarto.', 'Son las seis menos cuarto.', 'Son las siete y cuarto.'], why: 'A quarter after six: *y cuarto*.' },
            { q: '10:45 – ___', o: ['Son las once menos cuarto.', 'Son las diez menos cuarto.', 'Son las diez y menos cuarto.'], why: 'A quarter before eleven: *las once menos cuarto*.' },
            { q: '8:50 – ___', o: ['Son las nueve menos diez.', 'Son las ocho menos diez.', 'Son las nueve y diez.'], why: 'Ten minutes before nine: *las nueve menos diez*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
            { q: 'La película empieza ___ diez de la noche.', o: ['a las', 'son las', 'por las'], why: 'To say when, use *a las* + the hour.' },
            { q: '¿Qué hora es? – ___ tres y cuarto.', o: ['Son las', 'Es la', 'A las'], why: 'To say the time, use *Son las* for every hour except one.' },
            { q: 'Estudio inglés ___ tarde.', o: ['por la', 'a la', 'de la'], why: 'Without a clock time: *por la tarde*.' },
            { q: 'Me levanto a las siete ___ mañana.', o: ['de la', 'por la', 'en la'], why: 'After a clock time: *de la mañana*.' },
          ] },
        ],
        [
          { t: 'text', md: 'The days of the week are masculine and are written with a small letter. To say *on Monday*, just say **el lunes**. To say *every Monday*, use the plural: **los lunes**.' },
          { t: 'table', caption: 'Los días de la semana', explain: ['head'], quiz: true, head: ['English', 'Spanish'], rows: [
            ['Monday', 'el lunes'],
            ['Tuesday', 'el martes'],
            ['Wednesday', 'el miércoles'],
            ['Thursday', 'el jueves'],
            ['Friday', 'el viernes'],
            ['Saturday', 'el sábado'],
            ['Sunday', 'el domingo'],
          ] },
          { t: 'examples', items: [
            { s: '**El sábado** voy a casa de mi abuela.', n: 'This Saturday: *el sábado*. No word for *on*.' },
            { s: '**Los domingos** como con mi familia.', n: 'Every Sunday: *los domingos*.' },
            { s: 'Trabajo **de lunes a viernes**.', n: 'From Monday to Friday.' },
            { s: '**El fin de semana** descanso.', n: '*el fin de semana*: Saturday and Sunday.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Days that end in *-s* do not change in the plural: *el lunes, los lunes*. Only *sábado* and *domingo* add an *-s*: *los sábados, los domingos*.' },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Write the days of the week.', words: [
            { a: 'lunes', clue: 'El primer día de la semana.' },
            { a: 'martes', clue: 'El día después del lunes.' },
            { a: 'jueves', clue: 'El día antes del viernes.' },
            { a: 'viernes', clue: 'El último día de trabajo de la semana.' },
            { a: 'sábado', clue: 'El día después del viernes.' },
            { a: 'domingo', clue: 'El último día de la semana.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write el or los.', items: [
            { q: '___ lunes tengo clase de yoga. (every Monday)', a: ['los', 'Los'], why: 'Every Monday: the plural *los lunes*.' },
            { q: '___ sábado voy a una fiesta. (this Saturday)', a: ['el', 'El'], why: 'One Saturday only: *el sábado*.' },
            { q: 'Mi hermano trabaja ___ domingos. (every Sunday)', a: ['los'], why: 'Every Sunday: *los domingos*, with *-s*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'I get up at seven',
      about: 'Talk about your routine with reflexive verbs.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Some verbs have a small word before them: **me**, **te**, **se**, **nos**, **os**, **se**. These are **reflexive verbs**. You do the action to yourself: *me ducho* (I shower), *te levantas* (you get up).\n\nIn the dictionary, the verb ends in **-se**: *levantarse, ducharse*. You already know one: *llamarse* (*me llamo Ana*).' },
          { t: 'table', caption: 'levantarse (to get up)', explain: ['head'], quiz: true, head: ['Person', 'Present'], rows: [
            ['yo', 'me levanto'],
            ['tú', 'te levantas'],
            ['él / ella / usted', 'se levanta'],
            ['nosotros / nosotras', 'nos levantamos'],
            ['vosotros / vosotras', 'os levantáis'],
            ['ellos / ellas / ustedes', 'se levantan'],
          ] },
          { t: 'tip', art: 'owl', md: 'The verb has the normal endings of an *-ar* verb. Only the small word changes with the person. In Latin America, people do not use *vosotros*. They say *ustedes se levantan* to friends too.' },
        ],
        [
          { t: 'text', md: 'Here are some verbs for your day. *Acostarse* changes **o** to **ue**: *me acuesto*. You will see more verbs like this in the next lesson.' },
          { t: 'table', caption: 'My day', explain: ['head', 'col1'], head: ['Spanish', 'English'], rows: [
            ['despertarse (me despierto)', 'to wake up'],
            ['levantarse', 'to get up'],
            ['ducharse', 'to have a shower'],
            ['lavarse los dientes', 'to brush your teeth'],
            ['peinarse', 'to comb your hair'],
            ['vestirse (me visto)', 'to get dressed'],
            ['acostarse (me acuesto)', 'to go to bed'],
          ] },
          { t: 'examples', items: [
            { s: '**Me despierto** a las siete, pero **me levanto** a las siete y cuarto.', n: '*me* before the verb for *yo*.' },
            { s: 'Mi hija **se ducha** por la noche.', n: '*ella* → *se*.' },
            { s: '¿A qué hora **os acostáis**?', n: '*vosotros* → *os*. No *ue* in the *vosotros* form.' },
            { s: 'Nunca **nos acostamos** tarde.', n: '*nosotros* → *nos*. No *ue* in the *nosotros* form.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the present of ducharse.', verb: 'ducharse', tense: 'present', rows: [
            ['yo', 'me ducho'],
            ['tú', 'te duchas'],
            ['él / ella / usted', 'se ducha'],
            ['nosotros', 'nos duchamos'],
            ['vosotros', 'os ducháis'],
            ['ellos / ellas / ustedes', 'se duchan'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right small word.', items: [
            { q: 'Yo ___ levanto muy temprano.', o: ['me', 'se', 'te'], why: '*yo* → *me*: *me levanto*.' },
            { q: '¿Tú ___ duchas por la mañana?', o: ['te', 'me', 'se'], why: '*tú* → *te*: *te duchas*.' },
            { q: 'Mis padres ___ acuestan a las once.', o: ['se', 'nos', 'os'], why: '*ellos* → *se*: *se acuestan*.' },
            { q: 'Ana y yo ___ levantamos a las seis.', o: ['nos', 'se', 'os'], why: '*Ana y yo* is *nosotros* → *nos*.' },
            { q: 'Chicos, ¿a qué hora ___ despertáis?', o: ['os', 'se', 'nos'], why: 'You speak to friends (*vosotros*) → *os*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Me levanto a las siete y media.', why: '*me* goes right before the verb.' },
            { a: '¿A qué hora te acuestas?', why: 'Question word first, then *te* and the verb.' },
            { a: 'Mi hermano se ducha por la noche.', why: 'Subject, then *se* + verb, then when.' },
            { a: 'Los sábados nos levantamos tarde.', why: '*nos* goes right before *levantamos*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Yo [se] levanto a las ocho.', a: ['me'], why: 'With *yo*, the small word is *me*.' },
            { s: 'Mi madre se [acosta] a las diez.', a: ['acuesta'], why: '*acostarse* changes *o* to *ue*: *se acuesta*.' },
            { s: 'Nosotros nos [duchan] por la mañana.', a: ['duchamos'], why: '*nosotros* takes the ending *-amos*: *nos duchamos*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'I come back, I go out',
      about: 'Learn verbs that change their vowel and verbs with a special yo form.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Some verbs change the vowel in the middle: **e → ie** (*empezar → empiezo*), **o → ue** (*volver → vuelvo*), **u → ue** (*jugar → juego*) and **e → i** (*pedir → pido*).\n\nThe vowel changes in every person **except nosotros and vosotros**. The endings are the normal ones.' },
          { t: 'table', caption: 'Verbs that change their vowel', explain: ['head', 'col0'], quiz: true, head: ['', 'empezar (e → ie)', 'volver (o → ue)', 'jugar (u → ue)', 'pedir (e → i)'], rows: [
            ['yo', 'empiezo', 'vuelvo', 'juego', 'pido'],
            ['tú', 'empiezas', 'vuelves', 'juegas', 'pides'],
            ['él / ella / usted', 'empieza', 'vuelve', 'juega', 'pide'],
            ['nosotros', 'empezamos', 'volvemos', 'jugamos', 'pedimos'],
            ['vosotros', 'empezáis', 'volvéis', 'jugáis', 'pedís'],
            ['ellos / ellas / ustedes', 'empiezan', 'vuelven', 'juegan', 'piden'],
          ] },
          { t: 'tip', art: 'owl', md: 'Other common verbs: *querer* and *preferir* (e → ie), *poder*, *dormir* and *acostarse* (o → ue), *repetir* and *vestirse* (e → i). Learn the *yo* form with the verb.' },
        ],
        [
          { t: 'text', md: 'Some verbs are only different in the **yo** form. The other forms are regular: *hago, haces, hace…*\n\nThe verb **ir** (to go) is different in every person. Learn it by heart.' },
          { t: 'table', caption: 'Special yo forms', explain: ['head'], quiz: true, head: ['Verb', 'yo', 'tú'], rows: [
            ['hacer (to do, to make)', 'hago', 'haces'],
            ['salir (to go out, to leave)', 'salgo', 'sales'],
            ['poner (to put)', 'pongo', 'pones'],
            ['ver (to see, to watch)', 'veo', 'ves'],
            ['ir (to go)', 'voy', 'vas'],
          ] },
          { t: 'table', caption: 'ir (to go)', explain: ['head'], quiz: true, head: ['Person', 'Present'], rows: [
            ['yo', 'voy'],
            ['tú', 'vas'],
            ['él / ella / usted', 'va'],
            ['nosotros / nosotras', 'vamos'],
            ['vosotros / vosotras', 'vais'],
            ['ellos / ellas / ustedes', 'van'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Mi clase **empieza** a las nueve.', n: '*empezar*: e → ie.' },
            { s: '**Vuelvo** a casa a las seis.', n: '*volver*: o → ue.' },
            { s: 'Los martes **juego** al fútbol.', n: '*jugar*: u → ue. *jugar a + el = jugar al*.' },
            { s: 'En el bar siempre **pido** un café con leche.', n: '*pedir*: e → i.' },
            { s: 'Por la tarde **hago** los deberes y luego **salgo** con mis amigos.', n: '*hacer → hago*, *salir → salgo*.' },
            { s: 'Los viernes **vamos** al cine.', n: '*ir*: *nosotros vamos*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'How does the vowel change?', groups: ['e → ie', 'o → ue', 'e → i'], explain: ['groups'], items: [
            { s: 'empezar', g: 0, why: '*empiezo, empiezas*: e → ie.' },
            { s: 'querer', g: 0, why: '*quiero, quieres*: e → ie.' },
            { s: 'volver', g: 1, why: '*vuelvo, vuelves*: o → ue.' },
            { s: 'dormir', g: 1, why: '*duermo, duermes*: o → ue.' },
            { s: 'poder', g: 1, why: '*puedo, puedes*: o → ue.' },
            { s: 'pedir', g: 2, why: '*pido, pides*: e → i.' },
            { s: 'repetir', g: 2, why: '*repito, repites*: e → i.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the present of volver.', verb: 'volver', tense: 'present', rows: [
            ['yo', 'vuelvo'],
            ['tú', 'vuelves'],
            ['él / ella / usted', 'vuelve'],
            ['nosotros', 'volvemos', 'No vowel change in the *nosotros* form.'],
            ['vosotros', 'volvéis', 'No vowel change in the *vosotros* form.'],
            ['ellos / ellas / ustedes', 'vuelven'],
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: the verb and its yo form.', pairs: [
            ['hacer', 'hago'],
            ['salir', 'salgo'],
            ['poner', 'pongo'],
            ['ir', 'voy'],
            ['jugar', 'juego'],
            ['pedir', 'pido'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the present.', items: [
            { q: 'La película ___ a las diez. (empezar)', a: ['empieza'], why: '*empezar*, *ella* form: e → ie, *empieza*.' },
            { q: 'Yo ___ a casa a las siete. (volver)', a: ['vuelvo'], why: '*volver*, *yo* form: o → ue, *vuelvo*.' },
            { q: 'Nosotros ___ al tenis los sábados. (jugar)', a: ['jugamos'], why: 'No vowel change with *nosotros*: *jugamos*.' },
            { q: '¿Qué ___ tú en el restaurante? (pedir)', a: ['pides'], why: '*pedir*, *tú* form: e → i, *pides*.' },
            { q: 'Los domingos ___ la comida para toda la familia. (yo, hacer)', a: ['hago'], why: '*hacer* has a special *yo* form: *hago*.' },
            { q: 'Mis hijos ___ al colegio en autobús. (ir)', a: ['van'], why: '*ir*, *ellos* form: *van*.' },
            { q: 'Yo ___ de casa a las ocho. (salir)', a: ['salgo'], why: '*salir* has a special *yo* form: *salgo*.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which form is the odd one out?', items: [
            { o: ['volvemos', 'vuelvo', 'vuelves', 'vuelven'], why: '*volvemos* is the *nosotros* form, with no vowel change. The others have *ue*.' },
            { o: ['como', 'hago', 'salgo', 'pongo'], why: '*como* is regular. *hago, salgo* and *pongo* are special *yo* forms with *-go*.' },
            { o: ['pedís', 'pido', 'pide', 'piden'], why: '*pedís* is the *vosotros* form, with no vowel change. The others have *i*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Reading: a day in the life of a baker',
      about: 'Read about a baker’s day and check the details.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'Un día con Javier, panadero', md: 'Javier tiene cuarenta y dos años y es panadero. Vive en un pueblo pequeño cerca de Valencia. Su día empieza muy temprano: se despierta a las tres de la mañana, se ducha y se viste. No desayuna en casa.\n\nA las tres y media sale de casa y va a la panadería a pie, porque está muy cerca. Allí hace el pan, las magdalenas y los cruasanes. A las siete abre la tienda. Su mujer, Carla, trabaja con él por la mañana.\n\nA las nueve, Javier desayuna un café con leche y una tostada. Los clientes del pueblo siempre piden pan de pueblo y magdalenas. A las dos cierran la tienda y Javier vuelve a casa. Come con su familia y después duerme la siesta.\n\nPor la tarde juega con sus hijos o ve la tele. Se acuesta muy pronto, a las nueve de la noche. Los lunes la panadería está cerrada. "Ese día duermo mucho", dice Javier.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Javier se despierta a las tres de la mañana.', a: 't', why: '*se despierta a las tres de la mañana*.' },
            { q: 'Javier desayuna en casa.', a: 'f', why: '*No desayuna en casa.* He has breakfast at nine, at work.' },
            { q: 'Javier va a la panadería en coche.', a: 'f', why: 'He walks: *va a la panadería a pie*.' },
            { q: 'Carla trabaja en la panadería por la tarde.', a: 'f', why: 'She works there in the morning: *trabaja con él por la mañana*.' },
            { q: 'Javier tiene dos hijos.', a: 'ng', why: 'The text says *sus hijos*, but not how many children he has.' },
            { q: 'Los lunes Javier no trabaja.', a: 't', why: '*Los lunes la panadería está cerrada.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿A qué hora abre la tienda?', o: ['A las siete.', 'A las tres y media.', 'A las nueve.'], why: '*A las siete abre la tienda.*' },
            { q: '¿Qué hace Javier después de comer?', o: ['Duerme la siesta.', 'Juega al fútbol.', 'Vuelve a la panadería.'], why: '*Come con su familia y después duerme la siesta.*' },
            { q: '¿A qué hora se acuesta Javier?', o: ['A las nueve de la noche.', 'A las tres de la mañana.', 'A las dos de la tarde.'], why: '*Se acuesta muy pronto, a las nueve de la noche.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the reflexive verbs.', items: [
            { s: 'Javier [se despierta] a las tres, [se ducha] y [se viste].', why: 'Each verb has *se* before it: *despertarse, ducharse, vestirse*.' },
            { s: 'Por la noche ve la tele y [se acuesta] pronto.', why: '*se acuesta* is from *acostarse*. *ve* is not reflexive.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '2:30 – ___', o: ['Son las dos y media.', 'Es la dos y media.', 'Son las tres y media.'], why: 'Every hour except one: *Son las*. Half past: *y media*.' },
      { q: 'La clase empieza ___ nueve.', o: ['a las', 'son las', 'por las'], why: 'To say when: *a las* + the hour.' },
      { q: 'Mi padre ___ levanta a las seis.', o: ['se', 'me', 'te'], why: '*él* → *se*: *se levanta*.' },
      { q: '¿A qué hora ___ tú del trabajo?', o: ['vuelves', 'volves', 'vuelvas'], why: '*volver*: o → ue, *tú vuelves*.' },
      { q: '___ sábados voy al mercado.', o: ['Los', 'El', 'En'], why: 'Every Saturday: *los sábados*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Yo ___ los deberes por la tarde. (hacer)', a: ['hago'], why: '*hacer* has a special *yo* form: *hago*.' },
      { q: 'Nosotros ___ a las once. (acostarse)', a: ['nos acostamos'], why: 'With *nosotros*: *nos* and no vowel change, *nos acostamos*.' },
      { q: 'Ellos ___ al baloncesto los jueves. (jugar)', a: ['juegan'], why: '*jugar*: u → ue, *juegan*.' },
      { q: '7:45 – Son las ocho menos ___.', a: ['cuarto'], why: 'A quarter before eight: *las ocho menos cuarto*.' },
      { q: 'Mis amigos y yo ___ al cine los viernes. (ir)', a: ['vamos'], why: '*ir*, *nosotros* form: *vamos*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Me ducho por la mañana.', why: '*me* before the verb, then when.' },
      { a: '¿A qué hora sales de casa?', why: 'Question word first, then the verb *sales*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Yo [salo] de casa a las ocho.', a: ['salgo'], why: '*salir* has a special *yo* form: *salgo*.' },
      { s: 'En el restaurante tú siempre [pedes] pescado.', a: ['pides'], why: '*pedir*: e → i, *tú pides*.' },
    ] },
  ],
};
