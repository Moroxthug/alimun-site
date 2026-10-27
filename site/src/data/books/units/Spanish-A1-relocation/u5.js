// Spanish A1 for moving abroad, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'At the health centre',
  goal: 'Register at a health centre, make an appointment and say what is wrong.',
  art: 'cactus',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['health', 'appointments', 'days-of-the-week', 'telling-the-time', 'doler', 'body', 'pharmacy', 'imperative-usted'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Making an appointment',
      about: 'The health centre and the health card, days, times and a phone call to book.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In Spain, public health care starts at your local health centre, **el centro de salud**. There you have a family doctor (*el médico de familia*) and a nurse. With a health card, **la tarjeta sanitaria**, you can book appointments. What you need to get the card depends on your situation and your region, so ask at your health centre.' },
          { t: 'table', caption: 'At the health centre', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['el centro de salud', 'the local health centre'],
            ['el médico, la médica', 'the doctor'],
            ['el enfermero, la enfermera', 'the nurse'],
            ['la tarjeta sanitaria', 'the health card'],
            ['pedir cita', 'to make an appointment'],
            ['urgencias', 'the emergency department'],
            ['la receta', 'the prescription'],
            ['la farmacia', 'the chemist’s, the pharmacy'],
          ] },
          { t: 'tip', art: 'owl', md: 'In an emergency, call **112**. It works in Spain and in all the European Union. In Latin America, each country has its own numbers and its own health system.' },
        ],
        [
          { t: 'text', md: 'To give a day, use **el**: *el lunes* (on Monday). With **los** it means every week: *los lunes* (on Mondays). The days do not start with a capital letter. For the time, use **a la una**, **a las dos**, **a las tres y media**, and add *de la mañana* or *de la tarde*.' },
          { t: 'table', caption: 'The days of the week', explain: ['head', 'col0'], quiz: true, head: ['Day', 'Spanish'], rows: [
            ['Monday', 'lunes'],
            ['Tuesday', 'martes'],
            ['Wednesday', 'miércoles'],
            ['Thursday', 'jueves'],
            ['Friday', 'viernes'],
            ['Saturday', 'sábado'],
            ['Sunday', 'domingo'],
          ] },
          { t: 'examples', items: [
            { s: 'La cita es **el jueves a las diez y cuarto**.', n: '*y cuarto*: quarter past. *y media*: half past.' },
            { s: 'El centro de salud abre **a las ocho de la mañana**.', n: '*de la mañana* for the morning, *de la tarde* for the afternoon.' },
            { s: '**Los sábados** el centro de salud está cerrado.', n: '*los sábados*: every Saturday.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Al teléfono', lines: [
            { who: 'Recepcionista', s: 'Centro de salud, buenos días.' },
            { who: 'Elif', s: 'Buenos días. Quería pedir cita con el médico de familia.' },
            { who: 'Recepcionista', s: '¿Tiene la tarjeta sanitaria?' },
            { who: 'Elif', s: 'Sí. Me llamo Elif Kaya.' },
            { who: 'Recepcionista', s: 'Un momento… ¿Qué día le va bien?' },
            { who: 'Elif', s: 'El jueves, si es posible.' },
            { who: 'Recepcionista', s: 'El jueves a las once, con la doctora Ruiz.' },
            { who: 'Elif', s: 'Por la mañana trabajo. ¿Puede ser por la tarde?' },
            { who: 'Recepcionista', s: 'Sí, a las cinco y media.' },
            { who: 'Elif', s: 'Perfecto. Muchas gracias.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Elif tiene tarjeta sanitaria.', a: 't', why: 'She says *Sí* to the question.' },
            { q: 'La cita es el jueves a las once.', a: 'f', why: 'She works in the morning, so the appointment is at 5.30 pm.' },
            { q: 'La médica se llama Ruiz.', a: 't', why: '*con la doctora Ruiz*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What time is it? Choose the answer.', items: [
            { q: '10:30', o: ['a las diez y media', 'a las diez y cuarto', 'a las once y media'], why: '*y media*: half past.' },
            { q: '1:00', o: ['a la una', 'a las una', 'a las uno'], why: 'For one o’clock: *a la una*, singular.' },
            { q: '17:15', o: ['a las cinco y cuarto de la tarde', 'a las siete y cuarto de la tarde', 'a las cinco y media de la mañana'], why: '17:15 is a quarter past five in the afternoon.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Quería pedir ___ con el médico.', a: ['cita'], why: '*pedir cita*: to make an appointment.' },
            { q: 'La cita es ___ martes a las nueve.', a: ['el'], why: 'One day: *el martes*.' },
            { q: '___ domingos el centro de salud está cerrado.', a: ['Los'], why: 'Every Sunday: *los domingos*.' },
            { q: '¿Qué día le va ___?', a: ['bien'], why: '*¿Qué día le va bien?*: which day suits you?' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find the six days.', words: ['lunes', 'martes', 'jueves', 'viernes', 'sábado', 'domingo'] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'What is wrong?',
      about: 'Say what hurts and how you feel, and understand the doctor and the chemist.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'To say what hurts, use **me duele** + one thing and **me duelen** + more than one: *Me duele la cabeza. Me duelen los pies.* It works like *me gusta*: the verb agrees with the thing that hurts. Use **el, la, los, las**, not *mi*: *me duele **la** espalda*.' },
          { t: 'table', caption: 'The body', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['la cabeza', 'head'],
            ['la garganta', 'throat'],
            ['el estómago', 'stomach'],
            ['la espalda', 'back'],
            ['el oído', 'ear, inside'],
            ['los ojos', 'eyes'],
            ['las piernas', 'legs'],
            ['los pies', 'feet'],
          ] },
          { t: 'text', md: 'For other problems, use **tener**: *tengo fiebre* (a temperature), *tengo tos* (a cough), *tengo un resfriado* (a cold). For how you feel, use **estar**: *estoy cansado* or *cansada*, *estoy enfermo* or *enferma*.' },
        ],
        [
          { t: 'dialogue', title: 'En la consulta', lines: [
            { who: 'Médica', s: 'Buenas tardes. ¿Qué le pasa?' },
            { who: 'Kofi', s: 'Me duele mucho la garganta y tengo tos.' },
            { who: 'Médica', s: '¿Tiene fiebre?' },
            { who: 'Kofi', s: 'Sí, un poco. Y estoy muy cansado.' },
            { who: 'Médica', s: 'Es un resfriado fuerte. Tome este jarabe tres veces al día.' },
            { who: 'Kofi', s: '¿Necesito una receta?' },
            { who: 'Médica', s: 'Sí, aquí la tiene. Beba mucha agua y descanse dos o tres días.' },
            { who: 'Kofi', s: 'Muy bien. Gracias, doctora.' },
          ] },
          { t: 'text', md: 'The doctor gives instructions with **usted**: *tome* (take), *beba* (drink), *descanse* (rest). *¿Qué le pasa?* means *What is wrong?*' },
          { t: 'tip', art: 'churro', md: 'In Spain, the chemist’s has a green cross. For some medicines you need a prescription (*receta*). In Argentina and Chile, people often say *un resfrío* for a cold, and in Mexico *una gripa* for the flu.' },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'me duele or me duelen?', groups: ['me duele', 'me duelen'], items: [
            { s: 'la cabeza', g: 0, why: 'One thing: *me duele*.' },
            { s: 'los pies', g: 1, why: 'More than one: *me duelen*.' },
            { s: 'el estómago', g: 0, why: 'One thing: *me duele*.' },
            { s: 'las piernas', g: 1, why: 'More than one: *me duelen*.' },
            { s: 'la espalda', g: 0, why: 'One thing: *me duele*.' },
            { s: 'los ojos', g: 1, why: 'More than one: *me duelen*.' },
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the verb?', items: [
            { key: 'tengo', o: ['fiebre', 'tos', 'un resfriado', 'cansado'], a: [0, 1, 2], why: '*tener fiebre, tos, un resfriado*. For how you feel: *estoy cansado*.' },
            { key: 'estoy', o: ['enferma', 'cansada', 'fiebre', 'la cabeza'], a: [0, 1], why: '*estar* + how you feel: *enferma, cansada*. Say *tengo fiebre* and *me duele la cabeza*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Me [duele] los oídos.', a: ['duelen'], why: '*los oídos* is plural: *me duelen*.' },
            { s: 'Me duele [mi] cabeza.', a: ['la'], why: 'With the body, use *la*, not *mi*: *me duele la cabeza*.' },
            { s: '[Estoy] fiebre.', a: ['Tengo'], why: '*tener fiebre*: *tengo fiebre*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What does the doctor say? Choose the meaning.', items: [
            { q: 'Tome una pastilla después de comer.', o: ['Take a tablet after you eat.', 'Do not eat after the tablet.', 'Buy tablets at the chemist’s.'], why: '*tome*: take. *después de comer*: after eating.' },
            { q: 'Beba mucha agua.', o: ['Drink a lot of water.', 'Do not drink water.', 'Buy a bottle of water.'], why: '*beba*: drink, from *beber*.' },
            { q: 'Descanse dos días.', o: ['Rest for two days.', 'Come back in two days.', 'Work two days.'], why: '*descanse*: rest, from *descansar*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Me duele mucho la garganta.', why: '*Me duele* + *mucho* + the body part.' },
            { a: '¿Tiene algo para la tos?', why: 'A useful question at the chemist’s: *¿Tiene algo para…?*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A notice and a reminder',
      about: 'Read a notice at a health centre and a text message about an appointment.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Centro de Salud Las Flores: información', md: 'Horario: de lunes a viernes, de 8:00 a 20:00.\nSábados, domingos y festivos: cerrado. Vaya a urgencias del hospital.\n\nCita previa: por teléfono, en la web o en la aplicación de salud de su región.\n\nPara su cita, traiga siempre la tarjeta sanitaria.\n\nAnálisis de sangre: de lunes a jueves, de 8:00 a 9:30. No coma nada antes del análisis.\n\nSi llega más de diez minutos tarde, pida una cita nueva.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the notice. True, false or not given?', items: [
            { q: 'El centro de salud abre los sábados.', a: 'f', why: '*Sábados, domingos y festivos: cerrado.*' },
            { q: 'Se puede pedir cita por teléfono.', a: 't', why: '*Cita previa: por teléfono, en la web o en la aplicación.*' },
            { q: 'Los viernes hay análisis de sangre.', a: 'f', why: 'Blood tests are from Monday to Thursday.' },
            { q: 'Antes del análisis no se puede comer.', a: 't', why: '*No coma nada antes del análisis.*' },
            { q: 'En el centro de salud hay un dentista.', a: 'ng', why: 'The notice does not talk about a dentist.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Mensaje', md: 'Centro de Salud Las Flores. Recordatorio: Elif Kaya, tiene cita con su médica de familia, la doctora Ruiz, el jueves 22 de octubre a las 17:30, consulta 4, primera planta. Si no puede venir, anule la cita en la web o llame al centro. Gracias.' },
          { t: 'ex', kind: 'choice', h: 'Read the message. Choose the answer.', items: [
            { q: 'La cita es ___', o: ['el jueves por la tarde.', 'el jueves por la mañana.', 'el martes por la tarde.'], why: '*el jueves … a las 17:30*: Thursday afternoon.' },
            { q: 'La consulta está ___', o: ['en la primera planta.', 'en la planta baja.', 'en el hospital.'], why: '*consulta 4, primera planta*.' },
            { q: 'Si Elif no puede ir, ___', o: ['anula la cita.', 'va a urgencias.', 'no hace nada.'], why: '*anule la cita en la web o llame al centro*.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Words for the health centre: *la consulta* (the doctor’s room), *el análisis de sangre* (a blood test), *el recordatorio* (a reminder), *anular* (to cancel). *Traiga* (bring) and *vaya* (go) are instructions with *usted*.' },
          { t: 'ex', kind: 'spot', h: 'Tap the two days and the time in the message.', items: [
            { s: 'Su cita es el [jueves] a las [17:30]. El centro está cerrado el [sábado].', why: 'Two days, *jueves* and *sábado*, and the time, 17:30.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the problem and the place.', pairs: [
            ['Necesito un jarabe para la tos.', 'la farmacia'],
            ['Quiero ver a mi médico de familia.', 'el centro de salud'],
            ['Es domingo y estoy muy enfermo.', 'urgencias'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Me ___ los pies.', o: ['duelen', 'duele', 'dolor'], why: '*los pies* is plural: *duelen*.' },
      { q: 'Quería pedir ___ con la médica.', o: ['cita', 'receta', 'tarjeta'], why: '*pedir cita*: make an appointment.' },
      { q: 'Tengo ___ y me duele la garganta.', o: ['tos', 'cansado', 'enfermo'], why: '*tener tos*: to have a cough.' },
      { q: '9:30: La cita es ___', o: ['a las nueve y media.', 'a las nueve y cuarto.', 'a la nueve y media.'], why: '*a las* + hour + *y media*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Me duele ___ espalda.', a: ['la'], why: 'Body parts take *la*, not *mi*.' },
      { q: 'Estoy muy ___. (tired, a woman)', a: ['cansada'], why: 'A woman: *cansada*, with *-a*.' },
      { q: '___ lunes tengo cita con el médico.', a: ['El'], why: 'One day: *el lunes*.' },
      { q: '¿Tiene algo ___ la tos?', a: ['para'], why: '*algo para…*: something for…' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Me [duelen] el estómago.', a: ['duele'], why: '*el estómago* is singular: *duele*.' },
      { s: '[Tengo] cansado.', a: ['Estoy'], why: 'How you feel: *estoy cansado*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Tome este jarabe tres veces al día.', why: 'The instruction *tome* first, then what and how often.' },
      { a: '¿Qué día le va bien?', why: '*¿Qué día…?* + *le va bien*.' },
    ] },
  ],
};
