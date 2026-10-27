// Spanish A2 for work, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Appointments and meetings',
  goal: 'Arrange, move and cancel appointments.',
  art: 'snail',
  tags: { skills: ['speaking', 'writing', 'reading'], topics: ['dates', 'times', 'appointments', 'meetings', 'tener-que'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Finding a time',
      about: 'Say dates and times and suggest a time for a meeting.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'For dates, Spanish uses the normal numbers: *el 3 de mayo, el 21 de octubre*. For the first day of the month you can say *el 1 de mayo* or *el primero de mayo*.\n\nDays and months start with a **small letter**. For one day, use *el*: *La reunión es **el** martes.* For every week, use *los*: ***Los** lunes tengo turno de tarde.*' },
          { t: 'table', caption: 'Times', explain: ['head'], quiz: true, head: ['Time', 'You say'], rows: [
            ['9:00', 'a las nueve'],
            ['9:15', 'a las nueve y cuarto'],
            ['9:30', 'a las nueve y media'],
            ['9:45', 'a las diez menos cuarto'],
            ['13:00', 'a la una'],
            ['16:20', 'a las cuatro y veinte de la tarde'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain you say *por la mañana*, *por la tarde*, *por la noche*. In many Latin American countries you also hear *en la mañana* and *en la tarde*.' },
        ],
        [
          { t: 'dialogue', title: 'Finding a time', lines: [
            { who: 'Mateo', s: 'Clara, tenemos que hablar del proyecto nuevo. ¿Tienes tiempo esta semana?' },
            { who: 'Clara', s: 'Esta semana estoy muy ocupada. ¿Te va bien el lunes que viene?' },
            { who: 'Mateo', s: 'El lunes no puedo, tengo formación todo el día. ¿Qué tal el martes por la mañana?' },
            { who: 'Clara', s: 'El martes por la mañana sí. ¿A las diez?' },
            { who: 'Mateo', s: 'Mejor a las diez y media. A las diez tengo una llamada con un cliente.' },
            { who: 'Clara', s: 'Vale, el martes 14 a las diez y media. ¿Dónde quedamos?' },
            { who: 'Mateo', s: 'En la sala de reuniones de la tercera planta. Te envío una invitación.' },
            { who: 'Clara', s: '¡Perfecto! Hasta el martes.' },
          ] },
          { t: 'text', md: 'To suggest a time, ask **¿Te va bien …?** (*tú*) or **¿Le va bien …?** (*usted*), or simply **¿Qué tal …?**\n\nTo say yes: *Sí, me va bien.* To say no and suggest another time: *El lunes no puedo. ¿Qué tal el martes?*' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the date in words.', items: [
            { q: 'La reunión es el ___ de marzo. (12)', a: ['doce'], why: 'Dates use the normal numbers: *el doce de marzo*.' },
            { q: 'La feria empieza el ___ de junio. (1)', a: ['uno', 'primero'], why: 'For the first day you can say *uno* or *primero*.' },
            { q: 'El curso es el ___ de octubre. (21)', a: ['veintiuno'], why: '*21* is *veintiuno*, one word.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'La reunión es ___ martes.', o: ['el', 'en el', 'en'], why: 'For one day: *el martes*, without *en*.' },
            { q: 'Empezamos ___ las diez y media.', o: ['a', 'en', 'por'], why: 'A time: *a las diez y media*.' },
            { q: 'Tengo una cita con el médico ___ la tarde.', o: ['por', 'a', 'de'], why: 'In Spain: *por la mañana, por la tarde*.' },
            { q: '___ lunes tengo turno de tarde. (every week)', o: ['Los', 'El', 'En'], why: 'For every week: *los lunes*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the times.', pairs: [
            ['9:45', 'las diez menos cuarto'],
            ['14:30', 'las dos y media de la tarde'],
            ['12:15', 'las doce y cuarto'],
            ['20:00', 'las ocho de la tarde'],
            ['13:00', 'la una'],
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: '¿Te va bien el martes a las diez?', why: '*¿Te va bien …?* + the day and the time.' },
            { a: '¿Qué tal el jueves por la mañana?', why: '*¿Qué tal …?* is a short way to suggest a time.' },
            { a: '¿Le va bien el viernes?', why: '*Le* for a person you call *usted*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Moving and cancelling',
      about: 'Say sorry, give a reason, and move or cancel an appointment politely.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'To move or cancel an appointment, say sorry first, then give a reason with **porque** and suggest a new time.\n\n**tener que** + infinitive says that you must do something: *Tengo que cambiar la cita. Tengo que ir a Sevilla.*' },
          { t: 'examples', items: [
            { s: 'Lo siento, pero **tengo que cambiar** nuestra cita.', n: '*cambiar una cita*: to move an appointment.' },
            { s: 'No puedo ir el martes **porque** tengo otra reunión.', n: '*porque*: because. One word.' },
            { s: '¿**Podemos cambiar** la reunión al jueves?', n: '*cambiar al jueves*: to move to Thursday.' },
            { s: 'Lo siento mucho, **tengo que cancelar** la cita del viernes.', n: '*cancelar*: to cancel.' },
            { s: 'Disculpe las molestias.', n: 'A polite way to say sorry for the trouble, to a person you call *usted*.' },
          ] },
          { t: 'tip', art: 'owl', md: '*¿Por qué?* (two words, with an accent) asks for a reason. *porque* (one word) gives the reason: *¿Por qué no vienes? Porque estoy enfermo.*' },
        ],
        [
          { t: 'reading', title: 'Asunto: Reunión del martes', md: 'Estimada señora Lozano:\n\nLo siento, pero tengo que cambiar nuestra reunión del martes 8 de octubre a las 10:00. Ese día tengo que ir a Sevilla a ver a un cliente. ¿Le va bien el jueves 10 a la misma hora o el viernes 11 por la mañana?\n\nDisculpe las molestias.\n\nUn cordial saludo,\nAndrés Díaz' },
          { t: 'reading', title: 'RE: Reunión del martes', md: 'Estimado señor Díaz:\n\nNo hay problema. El jueves a las 10:00 me va bien. Pero ese día solo tengo una hora, porque a las 11:30 tengo otra cita.\n\nUn saludo,\nInés Lozano' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read the two emails. True or false?', items: [
            { q: 'El señor Díaz quiere cancelar la reunión para siempre.', a: 'f', why: 'He wants to move it: *¿Le va bien el jueves 10 …?*' },
            { q: 'El martes el señor Díaz está en Sevilla.', a: 't', why: '*Ese día tengo que ir a Sevilla a ver a un cliente.*' },
            { q: 'La nueva reunión es el jueves a las 10:00.', a: 't', why: '*El jueves a las 10:00 me va bien.*' },
            { q: 'La señora Lozano tiene toda la mañana libre el jueves.', a: 'f', why: 'She only has one hour: *a las 11:30 tengo otra cita*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Lo siento, ___ que cancelar la cita. (tener, yo)', a: ['tengo'], why: '*tener que*: *yo tengo que* + infinitive.' },
            { q: 'No puedo ir el lunes ___ estoy enfermo.', a: ['porque'], why: '*porque* gives the reason. One word, no accent.' },
            { q: '¿Le ___ bien el viernes por la mañana? (ir)', a: ['va'], why: '*¿Le va bien …?*: does it suit you?' },
            { q: 'Disculpe las ___.', a: ['molestias'], why: '*Disculpe las molestias*: sorry for the trouble.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You cannot come on Monday. You want to meet on Wednesday.', o: ['Lo siento, el lunes no puedo. ¿Qué tal el miércoles?', 'El lunes me va bien. Hasta el lunes.', 'Lo siento, el miércoles no puedo.'], why: 'Say no, then suggest a new day with *¿Qué tal …?*' },
            { q: 'A colleague suggests Thursday at 9. It is fine for you.', o: ['Sí, el jueves a las nueve me va bien.', 'No, tengo que cancelar.', '¿Por qué el jueves?'], why: '*me va bien*: it suits me.' },
            { q: 'You want to cancel and say sorry for the trouble.', o: ['Tengo que cancelar la cita. Disculpe las molestias.', 'Tengo que cancelar la cita. Muchas gracias por la molestia.', 'Tengo la cita. Disculpe.'], why: '*cancelar* + *Disculpe las molestias*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'No puedo ir [por que] tengo médico.', a: ['porque'], why: 'The reason: *porque*, one word.' },
            { s: 'La reunión es [en] martes.', a: ['el'], why: 'For one day: *el martes*.' },
            { s: 'Lo siento, [tengo] cancelar la cita.', a: ['tengo que'], why: '*tener que* + infinitive: *tengo que cancelar*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: an invitation and replies',
      about: 'Read a calendar invitation to a meeting and the answers from colleagues.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'Invitación: Planificación del Día del Cliente', md: '**Cuándo:** miércoles, 18 de septiembre, de 9:30 a 11:00\n**Dónde:** sala 2.1, segunda planta, o por videollamada\n**Organizadora:** Fatima Benali\n\nHola a todos:\n\nEl 10 de octubre es nuestro Día del Cliente. En esta reunión vamos a organizar el programa, la comida y los regalos para los clientes. ¿Podéis traer vuestras ideas, por favor? Si no podéis venir, escribidme un correo antes del lunes.\n\nUn saludo,\nFatima' },
          { t: 'tip', art: 'churro', md: 'Fatima writes to a group of colleagues in Spain, so she uses *vosotros*: *podéis, vuestras, escribidme*. In Latin America she writes *ustedes*: *¿Pueden traer sus ideas? Escríbanme un correo.*' },
        ],
        [
          { t: 'reading', title: 'Respuestas', md: '**Acepta:** Omar Saleh\n¡Allí estaré! Voy a la oficina.\n\n**Rechaza:** Rosa Martín\nLo siento, esa semana estoy de vacaciones. Os envío mis ideas por correo.\n\n**Acepta:** Daniel Costa\nParticipo por videollamada, porque ese día trabajo desde casa.\n\n**Quizás:** Nadia Kaya\nTodavía no lo sé. Tengo una cita con el médico a las 9:00. Llego a las 10:00 como muy pronto.' },
          { t: 'ex', kind: 'match', h: 'Who is it? Match.', pairs: [
            ['Omar', 'viene a la oficina'],
            ['Rosa', 'está de vacaciones'],
            ['Daniel', 'participa desde casa'],
            ['Nadia', 'llega tarde o no viene'],
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the invitation and the replies. True, false or not given?', items: [
            { q: 'La reunión dura una hora y media.', a: 't', why: '*de 9:30 a 11:00* is one and a half hours.' },
            { q: 'El Día del Cliente es el 18 de septiembre.', a: 'f', why: 'The meeting is on 18 September. The *Día del Cliente* is *el 10 de octubre*.' },
            { q: 'Se puede participar en la reunión desde casa.', a: 't', why: '*o por videollamada*.' },
            { q: 'Rosa envía sus ideas a Fatima.', a: 't', why: '*Os envío mis ideas por correo.*' },
            { q: 'Nadia va al médico por un problema de espalda.', a: 'ng', why: 'Nadia does not say why she goes to the doctor.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Qué tienen que hacer los compañeros que no pueden venir?', o: ['escribir un correo antes del lunes', 'llamar por teléfono el miércoles', 'traer un regalo'], why: '*Si no podéis venir, escribidme un correo antes del lunes.*' },
            { q: '¿A qué hora llega Nadia, como muy pronto?', o: ['a las diez', 'a las nueve y media', 'a las nueve'], why: '*Llego a las 10:00 como muy pronto.*' },
            { q: '*Rechaza* significa que la persona ___.', o: ['no va a la reunión', 'va a la reunión', 'organiza la reunión'], why: '*rechazar*: to say no. *aceptar*: to say yes.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '9:45 es ___.', o: ['las diez menos cuarto', 'las nueve menos cuarto', 'las diez y cuarto'], why: '15 minutes before ten: *las diez menos cuarto*.' },
      { q: 'You suggest a time to a customer.', o: ['¿Le va bien el jueves a las once?', '¿Vas bien el jueves a las once?', '¿Va bien usted el jueves?'], why: 'To a customer: *¿Le va bien …?*' },
      { q: 'La cita es ___ viernes.', o: ['el', 'en', 'en el'], why: 'For one day: *el viernes*.' },
      { q: 'You cannot come and you say sorry.', o: ['Lo siento, pero no puedo ir.', 'Me va bien, gracias.', '¡Allí estaré!'], why: '*Lo siento, pero …* starts a polite no.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Lo siento, tengo ___ cambiar la reunión.', a: ['que'], why: '*tener que* + infinitive.' },
      { q: 'No puedo ir el martes ___ tengo otra cita.', a: ['porque'], why: '*porque* gives the reason.' },
      { q: 'El lunes no puedo. ¿Qué ___ el martes?', a: ['tal'], why: '*¿Qué tal …?* suggests another time.' },
      { q: 'La reunión es el ___ de mayo. (15)', a: ['quince'], why: 'Dates use the normal numbers: *el quince de mayo*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the phrase and the meaning.', pairs: [
      ['cambiar la cita', 'tener la cita otro día'],
      ['cancelar la cita', 'no tener la cita'],
      ['Me va bien.', 'Sí, puedo a esa hora.'],
      ['Disculpe las molestias.', 'Perdone por el problema.'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Podemos cambiar la reunión al jueves?', why: '*cambiar a* + the new day; *a + el = al*.' },
      { a: 'Tengo que cancelar la cita del viernes.', why: '*tener que* + infinitive; *de + el = del*.' },
    ] },
  ],
};
