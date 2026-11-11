// Spanish A1 for work, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Appointments and schedules',
  goal: 'Make, check and change simple appointments.',
  art: 'snail',
  tags: { skills: ['speaking', 'vocabulary', 'reading', 'writing'], topics: ['dates', 'months', 'appointments', 'meetings', 'ir-a-infinitive'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Days and dates',
      about: 'Say the date, the months and when something is: el lunes, el 3 de mayo, a las diez.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To say a date, use **el + number + de + month**: *el 3 de mayo, el 21 de octubre.* Months are written with a small letter.\n\nTo ask the date, say **¿Qué día es hoy?** The answer is often the day and the date: *Hoy es lunes, 3 de mayo.*' },
          { t: 'table', caption: 'The months', explain: ['head', 'col1'], quiz: true, head: ['Month', 'Meaning'], rows: [
            ['enero', 'January'],
            ['febrero', 'February'],
            ['marzo', 'March'],
            ['abril', 'April'],
            ['mayo', 'May'],
            ['junio', 'June'],
            ['julio', 'July'],
            ['agosto', 'August'],
            ['septiembre', 'September'],
            ['octubre', 'October'],
            ['noviembre', 'November'],
            ['diciembre', 'December'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'La reunión es **el jueves a las diez**.', n: 'A day with *el*, a time with *a las*.' },
            { s: 'Las vacaciones empiezan **el 1 de agosto**.', n: 'In Spain people say *el uno de agosto*. In Latin America they often say *el primero de agosto*.' },
            { s: 'Tengo una cita con el médico **el 15 de marzo**.', n: '*una cita*: an appointment.' },
            { s: '¿**Qué día** es la reunión? **El martes.**', n: 'A short answer: just the day.' },
            { s: 'En **agosto** muchas oficinas cierran.', n: 'With a month there is no article: *en agosto*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain, dates are written day, month, year: *3/5* is *el 3 de mayo*, not *el 5 de marzo*. In August many companies in Spain work less, so plan meetings early.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the date in words. Write the month.', items: [
            { q: 'La reunión es el 12 de ___. (12/03)', a: ['marzo'], why: 'Day first, then the month: *03* is *marzo*.' },
            { q: 'Mis vacaciones empiezan el 1 de ___. (1/07)', a: ['julio'], why: '*07* is *julio*.' },
            { q: 'El curso es el 20 de ___. (20/11)', a: ['noviembre'], why: '*11* is *noviembre*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'La cita es ___ lunes.', o: ['el', 'en', 'a'], why: 'With a day: *el lunes*.' },
            { q: 'La empresa cierra ___ agosto.', o: ['en', 'el', 'a las'], why: 'With a month: *en agosto*.' },
            { q: 'La reunión empieza ___ nueve y media.', o: ['a las', 'el', 'en'], why: 'With a time: *a las*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Write the months.', words: [
            { a: 'enero', clue: 'El primer mes del año.' },
            { a: 'diciembre', clue: 'El último mes del año.' },
            { a: 'agosto', clue: 'El mes después de julio.' },
            { a: 'abril', clue: 'El mes entre marzo y mayo.' },
            { a: 'febrero', clue: 'El mes más corto del año.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Making an appointment',
      about: 'Suggest a day and a time, say yes or no, and talk about plans with ir a + infinitive.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To suggest a day or a time, ask **¿Te va bien …?** (with *tú*) or **¿Le va bien …?** (with *usted*). You can also ask **¿Quedamos …?**\n\nTo say yes: *Sí, me va bien. Vale. De acuerdo.* To say no politely: *Lo siento, el martes no puedo. ¿Qué tal el miércoles?*' },
          { t: 'dialogue', title: 'A meeting', lines: [
            { who: 'Carla', s: 'Hola, Javier. Necesitamos una reunión para el proyecto nuevo. ¿Te va bien el martes?' },
            { who: 'Javier', s: 'Lo siento, el martes no puedo. Tengo una cita con un cliente. ¿Qué tal el miércoles?' },
            { who: 'Carla', s: 'El miércoles por la mañana tengo un curso. ¿Quedamos el miércoles por la tarde?' },
            { who: 'Javier', s: 'Vale. ¿A las cuatro?' },
            { who: 'Carla', s: 'Perfecto. El miércoles a las cuatro, en la sala de reuniones.' },
            { who: 'Javier', s: 'De acuerdo. Voy a enviar un correo al equipo.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Vale* is very common in Spain and means *OK*. In Latin America people often say *Está bien* or *De acuerdo* instead.' },
        ],
        [
          { t: 'text', md: 'To talk about plans, use **ir a + infinitive**: *Voy a enviar un correo. Vamos a cambiar la reunión.* Only *ir* changes; the second verb stays in the infinitive.' },
          { t: 'table', caption: 'ir a + infinitive', quiz: true, head: ['Person', 'ir', 'a + infinitive'], rows: [
            ['yo', 'voy', 'a llamar'],
            ['tú', 'vas', 'a llamar'],
            ['él, ella, usted', 'va', 'a llamar'],
            ['nosotros, nosotras', 'vamos', 'a llamar'],
            ['vosotros, vosotras', 'vais', 'a llamar'],
            ['ellos, ellas, ustedes', 'van', 'a llamar'],
          ] },
          { t: 'examples', items: [
            { s: 'Mañana **voy a llamar** al cliente.', n: '*a + el = al*.' },
            { s: 'El lunes **vamos a cambiar** la hora de la reunión.', n: '*cambiar*: to change.' },
            { s: 'Lo siento, **no voy a llegar** a tiempo.', n: '*no* goes before *voy*. *a tiempo*: on time.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Javier tiene una cita con un cliente el martes.', a: 't', why: '*el martes no puedo. Tengo una cita con un cliente.*' },
            { q: 'Carla tiene un curso el miércoles por la tarde.', a: 'f', why: 'Her course is *el miércoles por la mañana*.' },
            { q: 'La reunión es el miércoles a las cuatro.', a: 't', why: '*El miércoles a las cuatro, en la sala de reuniones.*' },
            { q: 'Carla va a enviar un correo al equipo.', a: 'f', why: 'Javier says: *Voy a enviar un correo al equipo.*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You suggest Friday to a colleague.', o: ['¿Te va bien el viernes?', '¿Te va bien en viernes?', '¿Te gusta el viernes?'], why: '*¿Te va bien …?* + *el* + day.' },
            { q: 'You cannot come on Monday.', o: ['Lo siento, el lunes no puedo.', 'Lo siento, el lunes no estoy bien.', 'Vale, el lunes.'], why: '*no puedo*: I cannot.' },
            { q: 'You say yes to the time.', o: ['De acuerdo.', '¿Qué tal?', 'No puedo.'], why: '*De acuerdo*: agreed, OK.' },
            { q: 'You suggest a time to a customer, politely.', o: ['¿Le va bien a las diez?', '¿Te va bien a las diez?', '¿Me va bien a las diez?'], why: 'With *usted*: *¿Le va bien …?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the right form of ir.', items: [
            { q: 'Mañana ___ a llamar a la señora Ruiz. (yo)', a: ['voy'], why: '*yo voy a* + infinitive.' },
            { q: '¿___ a venir a la reunión? (tú)', a: ['Vas'], why: '*tú vas a* + infinitive.' },
            { q: 'Nosotros ___ a cambiar la cita.', a: ['vamos'], why: '*nosotros vamos a*.' },
            { q: 'Los clientes ___ a llegar a las once.', a: ['van'], why: '*ellos van a*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Write the sentence as a plan with ir a.', items: [
            { q: 'Envío el correo.', cue: 'Voy a', a: ['Voy a enviar el correo.'], why: '*ir a* + the infinitive *enviar*.' },
            { q: 'Cambiamos la reunión.', cue: 'Vamos a', a: ['Vamos a cambiar la reunión.'], why: '*vamos a* + the infinitive *cambiar*.' },
            { q: 'Carla llama al cliente.', cue: 'Carla va a', a: ['Carla va a llamar al cliente.'], why: '*va a* + the infinitive *llamar*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a work diary and an email',
      about: 'Read a page from a work diary and an email that changes a meeting.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'This is a week from the work diary of Marta, the manager of a small design team. A diary is *una agenda*.' },
          { t: 'reading', title: 'La agenda de Marta', md: '**Lunes, 14 de octubre:** 9.30, reunión del equipo. 13.00, comida con Diego.\n\n**Martes, 15 de octubre:** todo el día en Valencia con un cliente.\n\n**Miércoles, 16 de octubre:** 10.00, entrevista con una diseñadora nueva. 16.00, reunión con Javier y Carla.\n\n**Jueves, 17 de octubre:** 11.00, médico. Por la tarde, trabajo en casa.\n\n**Viernes, 18 de octubre:** libre. ¡Vacaciones!' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the diary. True, false or not given?', items: [
            { q: 'Marta tiene una reunión del equipo el lunes.', a: 't', why: '*Lunes … 9.30, reunión del equipo.*' },
            { q: 'El martes Marta trabaja en la oficina.', a: 'f', why: 'She is *todo el día en Valencia con un cliente*.' },
            { q: 'Marta tiene una cita con el médico el jueves.', a: 't', why: '*Jueves … 11.00, médico.*' },
            { q: 'Marta va a Valencia en tren.', a: 'ng', why: 'The diary does not say how she travels.' },
            { q: 'Marta trabaja el viernes.', a: 'f', why: '*Viernes: libre. ¡Vacaciones!*' },
          ] },
        ],
        [
          { t: 'reading', title: 'Cambio de reunión', md: '**De:** marta.lopez@example.com\n**Para:** javier.martin@example.com, carla.diaz@example.com\n**Asunto:** Cambio de reunión\n\nHola, Javier y Carla:\n\nLo siento, el miércoles a las cuatro no puedo. Tengo otra reunión con un cliente. ¿Os va bien el jueves a las cuatro y media? Voy a trabajar en casa, pero podemos hablar por videollamada.\n\nVoy a enviar los documentos del proyecto mañana por la mañana.\n\nUn saludo,\nMarta' },
          { t: 'ex', kind: 'choice', h: 'Read the email and choose the right answer.', items: [
            { q: '¿Por qué escribe Marta?', o: ['Para cambiar la reunión.', 'Para pedir unas vacaciones.', 'Para invitar a un cliente.'], why: '*Asunto: Cambio de reunión.*' },
            { q: '¿Cuándo es la reunión nueva?', o: ['el jueves a las cuatro y media', 'el miércoles a las cuatro', 'el viernes por la mañana'], why: '*¿Os va bien el jueves a las cuatro y media?*' },
            { q: '¿Cómo van a hablar?', o: ['por videollamada', 'en la sala de reuniones', 'en Valencia'], why: '*podemos hablar por videollamada*.' },
            { q: '¿Qué va a enviar Marta?', o: ['los documentos del proyecto', 'una invitación', 'su agenda'], why: '*Voy a enviar los documentos del proyecto.*' },
          ] },
          { t: 'tip', art: 'owl', md: '*¿Os va bien …?* is for a group of people you call *vosotros*. In Latin America, and in very polite emails in Spain, people write *¿Les va bien …?*' },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the two plans with ir a in the email.', items: [
            { s: '[Voy a trabajar] en casa. [Voy a enviar] los documentos mañana.', why: '*voy a* + infinitive: a plan.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the two parts.', pairs: [
            ['¿Te va bien', 'el jueves?'],
            ['Lo siento, el martes', 'no puedo.'],
            ['Voy a enviar', 'un correo al equipo.'],
            ['La reunión es', 'a las cuatro y media.'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'La reunión es ___ jueves a las diez.', o: ['el', 'en', 'a'], why: 'With a day: *el jueves*.' },
      { q: 'You suggest a time to a colleague. You ask:', o: ['¿Te va bien a las once?', '¿Le gustas a las once?', '¿Te vas a las once?'], why: '*¿Te va bien …?*' },
      { q: 'You cannot come. You say:', o: ['Lo siento, no puedo.', 'Vale, de acuerdo.', 'Me va bien.'], why: '*no puedo*: I cannot.' },
      { q: 'El mes después de marzo es ___.', o: ['abril', 'mayo', 'febrero'], why: '*marzo*, *abril*, *mayo*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Mañana ___ a llamar al cliente. (yo)', a: ['voy'], why: '*yo voy a* + infinitive.' },
      { q: 'Muchas oficinas cierran ___ agosto.', a: ['en'], why: 'With a month: *en*.' },
      { q: 'Vosotros ___ a enviar los documentos, ¿no? (ir)', a: ['vais'], why: '*vosotros vais a*.' },
      { q: '¿Quedamos el viernes ___ las nueve?', a: ['a'], why: 'With a time: *a las nueve*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Te va bien el martes por la tarde?', why: '*¿Te va bien* + day + part of the day.' },
      { a: 'Vamos a cambiar la reunión.', why: '*vamos a* + infinitive.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Write the sentence as a plan with ir a.', items: [
      { q: 'Envío los documentos.', cue: 'Voy a', a: ['Voy a enviar los documentos.'], why: '*voy a* + the infinitive *enviar*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'La cita con el cliente es [en] lunes a las diez.', a: ['el'], why: 'With a day of the week, use *el*: *el lunes*.' },
    ] },
  ],
};
