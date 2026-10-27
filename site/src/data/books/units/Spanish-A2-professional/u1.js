// Spanish A2 for work, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'At work',
  goal: 'Talk about your job, your workplace and your colleagues.',
  art: 'mug',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['jobs', 'workplace', 'introductions', 'times', 'stem-changing-verbs'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Jobs and colleagues',
      about: 'Say what you do and where you work, and introduce your colleagues.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'To say what your job is, use *Soy …* or *Trabajo de …* (also *Trabajo como …*). There is **no article** before the job: *Soy enfermera. Trabajo de cocinero.*\n\nMost jobs have a form for men and a form for women. Many end in **-o** for a man and **-a** for a woman. Jobs that end in **-ista** or **-e** are often the same for both: *el recepcionista, la recepcionista*.' },
          { t: 'table', caption: 'Jobs and workplaces', explain: ['head'], quiz: true, head: ['Man', 'Woman', 'Workplace'], rows: [
            ['el cocinero', 'la cocinera', 'en la cocina'],
            ['el dependiente', 'la dependienta', 'en la tienda'],
            ['el enfermero', 'la enfermera', 'en el hospital'],
            ['el mecánico', 'la mecánica', 'en el taller'],
            ['el camarero', 'la camarera', 'en el bar'],
            ['el administrativo', 'la administrativa', 'en la oficina'],
            ['el médico', 'la médica', 'en el centro de salud'],
            ['el recepcionista', 'la recepcionista', 'en el hotel'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Spanish you use *en* for a company and for a place: *Trabajo **en** Transportes Garza. Trabajo **en** el almacén.* For the job, use *de* or *como*: *Trabajo **de** camarera.*' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Who works where?', pairs: [
            ['la cocinera', 'en la cocina'],
            ['el dependiente', 'en la tienda'],
            ['la enfermera', 'en el hospital'],
            ['el mecánico', 'en el taller'],
            ['la recepcionista', 'en el hotel'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the job for a woman.', items: [
            { q: 'Mi hermano es cocinero y mi hermana es ___.', a: ['cocinera'], why: '*-o* for a man, *-a* for a woman: *cocinero*, *cocinera*.' },
            { q: 'El señor Ruiz es profesor y la señora Ruiz también es ___.', a: ['profesora'], why: 'A job that ends in *-or* adds *-a* for a woman: *profesora*.' },
            { q: 'Él es dependiente y ella es ___.', a: ['dependienta', 'dependiente'], why: 'You hear *la dependienta* and *la dependiente*. Both are correct.' },
            { q: 'Luis es recepcionista y Marta también es ___.', a: ['recepcionista'], why: 'Jobs in *-ista* are the same for men and women.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'The first day', lines: [
            { who: 'Javier Molina', s: 'Buenos días, señora Haddad. Bienvenida a la empresa. Le presento a Elena Ortega. Es la jefa de contabilidad.' },
            { who: 'Elena Ortega', s: 'Encantada, señora Haddad.' },
            { who: 'Leila Haddad', s: 'Encantada. Soy la nueva asistente del departamento comercial.' },
            { who: 'Javier Molina', s: 'Y este es Diego. Trabaja en atención al cliente.' },
            { who: 'Diego', s: '¡Hola! Aquí todos nos tratamos de tú. Yo soy Diego.' },
            { who: 'Leila Haddad', s: '¡Muy bien! Yo soy Leila.' },
          ] },
          { t: 'text', md: 'To introduce someone, say *Le presento a …* to a person you call *usted*, and *Te presento a …* to a person you call *tú*. Women say *Encantada*, men say *Encantado*.\n\nIn Spain, colleagues usually say *tú* to each other, often also to the boss. Use *usted* with customers, older people and in very formal places. If you are not sure, start with *usted*. People will tell you: *Puedes tratarme de tú.*' },
          { t: 'tip', art: 'churro', md: 'In many Latin American countries, people use *usted* more at work, also with colleagues. And for a group, Latin America always says *ustedes*, never *vosotros*.' },
        ],
        [
          { t: 'table', caption: 'Departments', explain: ['head', 'col1'], quiz: true, head: ['Department', 'What people do there'], rows: [
            ['la contabilidad', 'They pay bills and check the money.'],
            ['los recursos humanos', 'They look after the staff.'],
            ['el departamento comercial', 'They sell the products.'],
            ['la atención al cliente', 'They answer questions from customers.'],
            ['el almacén', 'They keep the goods and send them out.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Mi hermano es ___.', o: ['mecánico', 'un mecánico', 'el mecánico'], why: 'With a job after *ser*, there is no article.' },
            { q: 'Trabajo ___ una empresa de transportes.', o: ['en', 'de', 'a'], why: '*en* + a company or a place.' },
            { q: 'Ana trabaja ___ camarera en un hotel.', o: ['de', 'en', 'a'], why: '*trabajar de* + a job: *de camarera*.' },
            { q: 'Elena paga las facturas. Trabaja en ___.', o: ['contabilidad', 'la cocina', 'el taller'], why: 'Bills and money: *contabilidad*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: '¿A qué se dedica usted?', why: 'A polite way to ask about someone’s job. With *tú*: *¿A qué te dedicas?*' },
            { a: '¿En qué empresa trabajas?', why: '*En qué empresa* is the question part. The verb comes next.' },
            { a: 'Te presento a mi compañera Marta.', why: '*Te presento a* + the person. The *a* is needed before a person.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: the job for a man and for a woman.', pairs: [
            ['el cocinero', 'la cocinera'],
            ['el enfermero', 'la enfermera'],
            ['el médico', 'la médica'],
            ['el camarero', 'la camarera'],
            ['el profesor', 'la profesora'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Your working day',
      about: 'Say when you work and what you do: de … a …, a las …, and verbs that change their stem.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'To say how long you work, use **de … a …**: *Trabajo de ocho a cuatro.* You also hear **desde las … hasta las …**. For one point in time, use **a las …**: *A las dos como.*\n\nTimetables at work often use the 24-hour clock: *16:30* is *las dieciséis treinta*. In conversation people usually say *las cuatro y media de la tarde*.' },
          { t: 'table', caption: 'The working day', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['el horario', 'the working hours'],
            ['la jornada', 'the working day'],
            ['el turno', 'a shift'],
            ['el turno de mañana', 'the early shift'],
            ['el turno de tarde', 'the late shift'],
            ['el descanso', 'the break'],
            ['las horas extra', 'extra hours of work'],
            ['salir del trabajo', 'to leave work at the end of the day'],
          ] },
          { t: 'tip', art: 'owl', md: 'Some workplaces in Spain have a *jornada partida*: people work in the morning, have a long lunch break and work again in the afternoon. A *jornada continua* has no long break, for example from 8 to 3.' },
        ],
        [
          { t: 'text', md: 'Many verbs for the working day **change their stem** in the present. In *empezar* the *e* becomes **ie**, in *volver* the *o* becomes **ue**. The *nosotros* and *vosotros* forms do not change: *empiezo*, but *empezamos*.' },
          { t: 'examples', items: [
            { s: '**Empiezo** a las ocho.', n: '*empezar*: to start. *e* becomes *ie*.' },
            { s: '¿A qué hora **terminas** hoy?', n: '*terminar*: to finish. A regular verb.' },
            { s: 'Por la mañana **coloco** los productos en las estanterías.', n: '*colocar*: to put things in their place.' },
            { s: 'Después del trabajo **vuelvo** a casa en metro.', n: '*volver*: to go back. *o* becomes *ue*.' },
            { s: 'Los lunes **me levanto** a las seis.', n: '*levantarse*: to get up. A reflexive verb: *me levanto*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the present of empezar.', verb: 'empezar', tense: 'present', rows: [
            ['yo', 'empiezo'],
            ['tú', 'empiezas'],
            ['él, ella, usted', 'empieza'],
            ['nosotros, nosotras', 'empezamos', 'No change in the *nosotros* form.'],
            ['vosotros, vosotras', 'empezáis|empezais', 'No change in the *vosotros* form.'],
            ['ellos, ellas, ustedes', 'empiezan'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'A coffee break', lines: [
            { who: 'Marta', s: '¡Hola, Tomás! ¿Ya estás aquí? ¿A qué hora empiezas esta semana?' },
            { who: 'Tomás', s: 'A las seis. Esta semana tengo turno de mañana.' },
            { who: 'Marta', s: '¡Qué temprano! ¿Y a qué hora sales?' },
            { who: 'Tomás', s: 'A las dos. ¿Y tú?' },
            { who: 'Marta', s: 'Hoy trabajo de nueve a seis. Por la mañana contesto correos y a las once tengo una reunión.' },
            { who: 'Tomás', s: '¿Comes en el comedor de la empresa?' },
            { who: 'Marta', s: 'Sí, de dos a tres. ¿Vienes conmigo?' },
            { who: 'Tomás', s: '¡Vale! Salgo a las dos, así que como contigo y luego vuelvo a casa.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Tomás trabaja por la mañana esta semana.', a: 't', why: '*Esta semana tengo turno de mañana.*' },
            { q: 'Tomás sale del trabajo a las 14:00.', a: 't', why: '*A las dos* in the afternoon is 14:00.' },
            { q: 'Marta tiene una reunión por la tarde.', a: 'f', why: 'Her meeting is *a las once*, in the morning.' },
            { q: 'Marta come media hora.', a: 'f', why: '*de dos a tres* is one hour.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Mi turno ___ a las seis. (empezar)', a: ['empieza'], why: '*empezar*: *empieza*. The *e* becomes *ie*.' },
            { q: '¿A qué hora ___ tú a casa? (volver)', a: ['vuelves'], why: '*volver*: *tú vuelves*. The *o* becomes *ue*.' },
            { q: 'Nosotros ___ a las nueve. (empezar)', a: ['empezamos'], why: 'The *nosotros* form does not change: *empezamos*.' },
            { q: 'Yo ___ a las seis y media. (levantarse)', a: ['me levanto'], why: 'A reflexive verb: *yo me levanto*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'La reunión es ___ las once.', o: ['a', 'en', 'de'], why: 'One point in time: *a las once*.' },
            { q: 'Trabajo de ocho ___ tres.', o: ['a', 'en', 'por'], why: 'How long: *de ocho a tres*.' },
            { q: 'Hoy salgo ___ trabajo a las cinco.', o: ['del', 'al', 'en el'], why: '*salir de* + *el trabajo* becomes *salir del trabajo*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What do you do at work? Match the words.', pairs: [
            ['contestar', 'correos'],
            ['atender', 'a los clientes'],
            ['colocar', 'los productos'],
            ['tener', 'una reunión'],
            ['hacer', 'horas extra'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a staff profile',
      about: 'Read a short profile of a new colleague on a company intranet.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Many companies have an **intranet**, a website only for the staff. There you often find short profiles of new colleagues: their job, their team and how to contact them. In Spain these texts often use *tú*.' },
          { t: 'reading', title: 'Nuevo en el equipo: Kwame Mensah', md: 'Desde el 1 de septiembre, nuestro almacén de Zaragoza tiene un nuevo jefe de equipo: Kwame Mensah. Tiene 38 años y es de Ghana. Vive en España con su familia desde hace seis años.\n\nKwame es técnico de logística. Antes trabajó cuatro años en una empresa de transportes en Valencia. Con nosotros dirige un equipo de doce personas. Organiza los turnos, controla los pedidos y habla todos los días con los conductores.\n\nNormalmente trabaja de 7:00 a 15:30. Su despacho está en la planta baja, al lado de la entrada del almacén. Pero donde más le gusta estar es con su equipo, entre las estanterías.\n\nEn su tiempo libre, Kwame juega al fútbol y le encanta cocinar para sus amigos. Habla inglés, twi y español.\n\n¿Tienes preguntas sobre los pedidos? Llama a Kwame a la extensión 214.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the profile. True, false or not given?', items: [
            { q: 'Kwame trabaja en Zaragoza desde septiembre.', a: 't', why: '*Desde el 1 de septiembre, nuestro almacén de Zaragoza tiene un nuevo jefe de equipo.*' },
            { q: 'Antes Kwame trabajó en Valencia.', a: 't', why: '*Antes trabajó cuatro años en una empresa de transportes en Valencia.*' },
            { q: 'Normalmente Kwame trabaja por la noche.', a: 'f', why: 'He usually works *de 7:00 a 15:30*.' },
            { q: 'El despacho de Kwame está en el primer piso.', a: 'f', why: 'It is *en la planta baja*, on the ground floor.' },
            { q: 'La mujer de Kwame también trabaja en la empresa.', a: 'ng', why: 'The profile says he lives with his family, but nothing about his wife’s job.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Qué hace Kwame en el trabajo?', o: ['Organiza los turnos.', 'Conduce los camiones.', 'Escribe las facturas.'], why: '*Organiza los turnos, controla los pedidos …*' },
            { q: '¿Dónde le gusta más estar a Kwame?', o: ['con su equipo, entre las estanterías', 'en su despacho', 'en Valencia'], why: '*Pero donde más le gusta estar es con su equipo, entre las estanterías.*' },
            { q: '¿Cómo puedes llamar a Kwame?', o: ['a la extensión 214', 'al número 15:30', 'solo los sábados'], why: 'An *extensión* is the short number of one person in a company.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the four words for people at work. Do not tap names.', items: [
            { s: 'Kwame es [jefe] de equipo. Habla todos los días con los [conductores] y con sus [compañeras] y [compañeros].', why: 'A *jefe* leads a team. *Conductores*, *compañeras* and *compañeros* are other people at work.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Trabajo ___ enfermero en un hospital.', o: ['de', 'en', 'a'], why: '*trabajar de* + a job.' },
      { q: 'El turno que empieza a las seis de la mañana es el turno de ___.', o: ['mañana', 'tarde', 'noche'], why: 'The early shift is *el turno de mañana*.' },
      { q: 'Presentas a tu compañera a un cliente. Dices: ___', o: ['Le presento a mi compañera Rosa.', 'Te presento a mi compañera Rosa.', 'Me presento a mi compañera Rosa.'], why: 'To a customer you say *usted*, so *Le presento a …*' },
      { q: 'Las cuatro y media de la tarde son las ___.', o: ['16:30', '14:30', '17:30'], why: '*las cuatro de la tarde* is 16:00, and *y media* adds thirty minutes.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Mi compañero es camarero y mi compañera es ___.', a: ['camarera'], why: '*-o* for a man, *-a* for a woman.' },
      { q: 'Trabajo ___ ocho a cuatro.', a: ['de'], why: '*de … a …*' },
      { q: '¿A qué hora ___ tu curso? (empezar)', a: ['empieza'], why: '*empezar*: *empieza*, with *ie*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the department and the task.', pairs: [
      ['la contabilidad', 'pagar las facturas'],
      ['la atención al cliente', 'contestar preguntas de los clientes'],
      ['el almacén', 'colocar los productos'],
      ['los recursos humanos', 'buscar nuevos empleados'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿En qué empresa trabajas?', why: 'Question part first, then the verb.' },
      { a: '¿A qué hora vuelves a casa?', why: '*volver*: *tú vuelves*, with *ue*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Mi hermana trabaja [de] una empresa de transportes.', a: ['en'], why: 'With a company or a place you use *en*: *trabaja en una empresa*.' },
    ] },
  ],
};
