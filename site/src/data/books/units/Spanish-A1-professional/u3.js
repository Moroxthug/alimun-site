// Spanish A1 for work, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'The working day',
  goal: 'Talk about your working hours and what you do every day.',
  art: 'sun',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['time', 'days', 'routine', 'stem-changing-verbs', 'reflexive-verbs'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'What time do you start?',
      about: 'Ask and say the time you start and finish, and the days you work.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'To ask the time, say **¿Qué hora es?** The answer uses **es la** for one o’clock and **son las** for the other hours: *Es la una. Son las tres.*\n\nTo say *at* a time, use **a la** or **a las**: *Empiezo a las nueve.* To ask, say **¿A qué hora …?**' },
          { t: 'examples', items: [
            { s: '**Son las ocho y media.**', n: '*y media*: half past. 8.30.' },
            { s: '**Es la una y cuarto.**', n: '*y cuarto*: quarter past. 1.15.' },
            { s: '**Son las cinco menos cuarto.**', n: '*menos cuarto*: quarter to. 4.45.' },
            { s: '¿**A qué hora** empiezas?', n: 'At what time do you start?' },
            { s: 'Trabajo **de** nueve **a** cinco.', n: '*de … a …*: from … to …' },
          ] },
          { t: 'tip', art: 'owl', md: 'On timetables and in emails at work, people often use the 24-hour clock: *a las 17.00* (*a las diecisiete horas*). In conversation they usually say *a las cinco de la tarde*.' },
        ],
        [
          { t: 'text', md: 'The days of the week are written with a small letter. Use **el** for one day and **los** for every week: *El lunes tengo una reunión. Los viernes trabajo en casa.*' },
          { t: 'table', caption: 'Days of the week', explain: ['head', 'col1'], quiz: true, head: ['Day', 'Meaning'], rows: [
            ['lunes', 'Monday'],
            ['martes', 'Tuesday'],
            ['miércoles', 'Wednesday'],
            ['jueves', 'Thursday'],
            ['viernes', 'Friday'],
            ['sábado', 'Saturday'],
            ['domingo', 'Sunday'],
          ] },
          { t: 'examples', items: [
            { s: 'Trabajo **de lunes a viernes**.', n: 'From Monday to Friday.' },
            { s: '**El fin de semana** no trabajo.', n: '*el fin de semana*: the weekend.' },
            { s: 'Trabajo **por la mañana**.', n: '*por la mañana*: in the morning. Also *por la tarde*, *por la noche*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What time is it? Choose the right answer.', items: [
            { q: '9.30', o: ['Son las nueve y media.', 'Es la nueve y media.', 'Son las diez y media.'], why: 'Use *son las* for all hours except one: *son las nueve y media*.' },
            { q: '1.00', o: ['Es la una.', 'Son las una.', 'Es las uno.'], why: 'One o’clock is singular: *es la una*.' },
            { q: '6.15', o: ['Son las seis y cuarto.', 'Son las seis menos cuarto.', 'Son las siete y cuarto.'], why: '*y cuarto*: quarter past.' },
            { q: '2.45', o: ['Son las tres menos cuarto.', 'Son las dos menos cuarto.', 'Son las dos y media.'], why: '2.45 is quarter to three: *las tres menos cuarto*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write a la, a las, de or a.', items: [
            { q: 'La reunión es ___ diez.', a: ['a las'], why: 'At ten: *a las diez*.' },
            { q: 'Como ___ una y media.', a: ['a la'], why: 'One o’clock is singular: *a la una*.' },
            { q: 'Trabajo ___ ocho a cuatro.', a: ['de'], why: '*de … a …*: from … to …' },
            { q: 'La tienda abre de lunes ___ sábado.', a: ['a'], why: '*de lunes a sábado*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'memory', h: 'Find the pairs: the time in words and in numbers.', pairs: [
            ['las ocho y media', '8.30'],
            ['la una y cuarto', '1.15'],
            ['las cinco menos cuarto', '4.45'],
            ['las diez', '10.00'],
            ['las siete y veinte', '7.20'],
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: '¿A qué hora empieza la reunión?', why: '*¿A qué hora* first, then the verb and the subject.' },
            { a: 'Trabajo de lunes a viernes.', why: '*de lunes a viernes*: from Monday to Friday.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'A day at work',
      about: 'Describe your working day with empezar, terminar, volver and levantarse.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'Some common verbs change their vowel in the present. In **empezar** (to start), *e* becomes *ie*. In **volver** (to come back), *o* becomes *ue*. The change does not happen with *nosotros* and *vosotros*.\n\n**Terminar** (to finish) is regular.' },
          { t: 'table', caption: 'empezar and volver', quiz: true, head: ['Person', 'empezar', 'volver'], rows: [
            ['yo', 'empiezo', 'vuelvo'],
            ['tú', 'empiezas', 'vuelves'],
            ['él, ella, usted', 'empieza', 'vuelve'],
            ['nosotros, nosotras', 'empezamos', 'volvemos'],
            ['vosotros, vosotras', 'empezáis', 'volvéis'],
            ['ellos, ellas, ustedes', 'empiezan', 'vuelven'],
          ] },
          { t: 'tip', art: 'owl', md: '**Tener** is irregular: *tengo, tienes, tiene*. At work it is very useful: *Tengo una reunión a las once. Tengo turno de mañana.*' },
        ],
        [
          { t: 'text', md: '**Levantarse** (to get up) is a reflexive verb. It has a small word before the verb: *me levanto, te levantas, se levanta*. Other reflexive verbs for the day are *ducharse* and *acostarse*.' },
          { t: 'dialogue', title: 'A coffee break', lines: [
            { who: 'Diego', s: 'Hola, Ana. ¿A qué hora empiezas hoy?' },
            { who: 'Ana', s: 'Empiezo a las siete. Esta semana tengo turno de mañana.' },
            { who: 'Diego', s: '¡Qué pronto! ¿A qué hora te levantas?' },
            { who: 'Ana', s: 'Me levanto a las seis menos cuarto. ¿Y tú?' },
            { who: 'Diego', s: 'Yo empiezo a las nueve y termino a las seis. A las once tengo una reunión con un cliente.' },
            { who: 'Ana', s: 'Yo termino a las tres y vuelvo a casa en metro.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Ana empieza a las siete.', a: 't', why: '*Empiezo a las siete.*' },
            { q: 'Ana se levanta a las seis y cuarto.', a: 'f', why: 'She gets up *a las seis menos cuarto*: 5.45.' },
            { q: 'Diego tiene una reunión por la mañana.', a: 't', why: '*A las once tengo una reunión.*' },
            { q: 'Ana vuelve a casa en coche.', a: 'f', why: 'She goes home *en metro*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Yo ___ a trabajar a las nueve. (empezar)', a: ['empiezo'], why: '*e* changes to *ie*: *empiezo*.' },
            { q: 'Mi jefe ___ a la oficina a las cuatro. (volver)', a: ['vuelve'], why: '*o* changes to *ue*: *vuelve*.' },
            { q: 'Nosotros ___ a las nueve también. (empezar)', a: ['empezamos'], why: 'No change with *nosotros*: *empezamos*.' },
            { q: '¿A qué hora ___ tú? (terminar)', a: ['terminas'], why: '*terminar* is regular: *terminas*.' },
            { q: 'Carla ___ a las seis. (levantarse)', a: ['se levanta'], why: 'Reflexive: *ella se levanta*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of empezar.', verb: 'empezar', tense: 'present', rows: [
            ['yo', 'empiezo'],
            ['tú', 'empiezas'],
            ['él', 'empieza'],
            ['nosotros', 'empezamos'],
            ['vosotros', 'empezáis|empezais'],
            ['ellas', 'empiezan'],
          ] },
          { t: 'ex', kind: 'match', h: 'Match the two parts.', pairs: [
            ['Tengo una reunión', 'con un cliente.'],
            ['Me levanto', 'a las seis.'],
            ['Vuelvo a casa', 'en metro.'],
            ['Esta semana tengo', 'turno de mañana.'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: the shift timetable',
      about: 'Read a shift timetable in a shop and a short note about it.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In shops, hotels and hospitals, people often work in **turnos** (shifts). The manager writes a timetable, the **horario**, every week.' },
          { t: 'reading', title: 'Horario de la semana', md: '**Turno de mañana:** de 8.00 a 15.00\n**Turno de tarde:** de 15.00 a 22.00\n\n**Rosa:** de lunes a jueves, turno de mañana. El viernes no trabaja.\n**Pedro:** de martes a sábado, turno de tarde.\n**Leila:** lunes, miércoles y viernes, turno de tarde. Sábado, turno de mañana.\n\n**Nota de Marta:** Hola a todos. El miércoles a las 14.30 tenemos una reunión corta en la oficina. Es para el turno de mañana y el turno de tarde. Leila, el sábado empiezas a las 8.00, no a las 9.00. ¡Gracias!' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the timetable. True, false or not given?', items: [
            { q: 'El turno de tarde termina a las diez de la noche.', a: 't', why: '*Turno de tarde: de 15.00 a 22.00*. 22.00 is ten at night.' },
            { q: 'Rosa trabaja el viernes.', a: 'f', why: '*El viernes no trabaja.*' },
            { q: 'Pedro trabaja por la tarde.', a: 't', why: '*Pedro: de martes a sábado, turno de tarde.*' },
            { q: 'Leila trabaja cinco días.', a: 'f', why: 'She works on Monday, Wednesday, Friday and Saturday: four days.' },
            { q: 'Pedro vive cerca de la tienda.', a: 'ng', why: 'The timetable does not say where Pedro lives.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Cuándo es la reunión?', o: ['el miércoles a las dos y media', 'el viernes a las ocho', 'el sábado a las nueve'], why: '*El miércoles a las 14.30*: half past two in the afternoon.' },
            { q: '¿A qué hora empieza Leila el sábado?', o: ['a las ocho', 'a las nueve', 'a las tres'], why: '*el sábado empiezas a las 8.00, no a las 9.00*.' },
            { q: '¿Quién trabaja el lunes por la mañana?', o: ['Rosa', 'Pedro', 'Leila'], why: 'Rosa has the morning shift from Monday to Thursday.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the three days in the note.', items: [
            { s: 'El [miércoles] tenemos una reunión. Leila trabaja el [viernes] y el [sábado].', why: 'Days of the week are written with a small letter in Spanish.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '3.30', o: ['Son las tres y media.', 'Es la tres y media.', 'Son las cuatro y media.'], why: '*son las* + hour + *y media*.' },
      { q: '¿A qué hora ___ tu turno?', o: ['empieza', 'empezas', 'empiezo'], why: '*tu turno* is *él*: *empieza*.' },
      { q: 'Trabajo ___ lunes a viernes.', o: ['de', 'a', 'en'], why: '*de lunes a viernes*.' },
      { q: 'Me ___ a las siete.', o: ['levanto', 'levanta', 'levantas'], why: '*yo me levanto*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Yo ___ a casa a las seis. (volver)', a: ['vuelvo'], why: '*o* changes to *ue*: *vuelvo*.' },
      { q: 'Hoy ___ una reunión con el jefe. (tener, yo)', a: ['tengo'], why: '*tener*: *yo tengo*.' },
      { q: 'La clase es ___ una.', a: ['a la'], why: 'One o’clock: *a la una*.' },
      { q: 'Nosotros ___ a las cinco. (terminar)', a: ['terminamos'], why: 'Regular: *nosotros terminamos*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the time and the words.', pairs: [
      ['7.15', 'las siete y cuarto'],
      ['12.30', 'las doce y media'],
      ['5.45', 'las seis menos cuarto'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿A qué hora terminas hoy?', why: '*¿A qué hora* first, then the verb.' },
      { a: 'Los viernes trabajo en casa.', why: '*los viernes*: every Friday.' },
    ] },
  ],
};
