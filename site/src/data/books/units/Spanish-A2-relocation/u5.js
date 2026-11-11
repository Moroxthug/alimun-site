// Spanish A2 for moving abroad, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'At the doctor',
  goal: 'Make an appointment with a doctor and say what is wrong.',
  art: 'teacup',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['health', 'appointments', 'body', 'doler', 'tener-que', 'instructions'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Making an appointment',
      about: 'The health centre, the family doctor, the health card and booking an appointment by phone.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'In Spain, when you are ill, you usually go first to your family doctor at the local health centre (*el centro de salud*). You need an appointment: you ask for one (**pedir cita**) by phone, in an app or at the front desk. For the public health service, you usually get a health card (*la tarjeta sanitaria*).' },
          { t: 'table', caption: 'At the health centre', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['el centro de salud', 'local health centre'],
            ['el médico / la médica de familia', 'family doctor'],
            ['la tarjeta sanitaria', 'health card'],
            ['pedir cita', 'to make an appointment'],
            ['la consulta', 'the doctor’s room; the visit'],
            ['urgencias', 'the emergency department'],
            ['la receta', 'prescription'],
            ['la farmacia de guardia', 'a chemist’s open at night or on holidays'],
          ] },
          { t: 'tip', art: 'owl', md: 'In an emergency, call **112**: it is the emergency number in Spain and the rest of the European Union. In Latin America, the health system and the emergency number change from country to country. In Argentina, for example, an appointment is often *un turno*.' },
        ],
        [
          { t: 'dialogue', title: 'Al teléfono', lines: [
            { who: 'Lucía', s: 'Centro de salud del Norte, buenos días.' },
            { who: 'Olga', s: 'Buenos días. Quería pedir cita con mi médico de familia.' },
            { who: 'Lucía', s: '¿Me dice su nombre y su número de tarjeta sanitaria?' },
            { who: 'Olga', s: 'Me llamo Olga Petrova. Todavía no tengo la tarjeta. La pedí la semana pasada.' },
            { who: 'Lucía', s: 'No pasa nada. ¿Me da su fecha de nacimiento?' },
            { who: 'Olga', s: 'El 2 de marzo de 1989.' },
            { who: 'Lucía', s: 'Muy bien. ¿Qué le pasa?' },
            { who: 'Olga', s: 'Tengo fiebre y me duele mucho la garganta desde ayer.' },
            { who: 'Lucía', s: '¿Le va bien mañana a las diez y veinte?' },
            { who: 'Olga', s: '¿No hay nada para hoy?' },
            { who: 'Lucía', s: 'Sí, hoy a las cinco y media, con el doctor Ruiz.' },
            { who: 'Olga', s: 'Perfecto. Muchas gracias.' },
            { who: 'Lucía', s: 'De nada. Traiga su pasaporte, por favor.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the call. True or false?', items: [
            { q: 'Olga ya tiene su tarjeta sanitaria.', a: 'f', why: '*Todavía no tengo la tarjeta.*' },
            { q: 'Olga está enferma desde ayer.', a: 't', why: '*Me duele mucho la garganta desde ayer.*' },
            { q: 'Olga va al médico mañana por la mañana.', a: 'f', why: 'She takes the appointment today at half past five.' },
            { q: 'Olga tiene que llevar su pasaporte.', a: 't', why: '*Traiga su pasaporte, por favor.*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Usted necesita una cita. Dice: ___', o: ['Quería pedir cita, por favor.', 'Quería pedir la cuenta, por favor.', 'Quería un billete, por favor.'], why: 'To book an appointment: *pedir cita*.' },
            { q: 'Es domingo por la noche y usted necesita un medicamento. Va a ___.', o: ['una farmacia de guardia', 'el centro de salud', 'una farmacia normal'], why: 'At night and on holidays, a *farmacia de guardia* is open.' },
            { q: '¿Qué le pasa?', o: ['Me duele la cabeza.', 'Me llamo Olga.', 'A las cinco y media.'], why: '*¿Qué le pasa?* asks what is wrong with you.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences for the call.', items: [
            { a: 'Quería pedir cita con el médico.', why: '*Quería* + infinitive: a polite way to ask.' },
            { a: '¿Hay alguna cita para hoy?', why: '*¿Hay…?* asks if something exists. *alguna*: any.' },
            { a: 'Tengo fiebre desde ayer.', why: '*desde* + a time: since.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Quería ___ cita con mi médica de familia.', a: ['pedir'], why: 'To make an appointment: *pedir cita*.' },
            { q: 'Tengo fiebre ___ el lunes.', a: ['desde'], why: '*desde*: since a moment in the past.' },
            { q: 'Todavía no tengo la tarjeta ___.', a: ['sanitaria'], why: 'The health card: *la tarjeta sanitaria*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'What hurts?',
      about: 'Say what hurts and understand what the doctor tells you to do.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To say what hurts, use **doler**. It works like *gustar*: **me duele** + one thing, **me duelen** + more than one thing. Use *el*, *la*, *los*, *las*, not *mi*: *Me duele **la** cabeza.*' },
          { t: 'table', caption: 'El cuerpo', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['la cabeza', 'head'],
            ['la garganta', 'throat'],
            ['el estómago', 'stomach'],
            ['la espalda', 'back'],
            ['el oído', 'ear (inside)'],
            ['la muela', 'back tooth'],
            ['la pierna', 'leg'],
            ['los pies', 'feet'],
          ] },
          { t: 'examples', items: [
            { s: '**Me duele** la espalda.', n: 'One thing: *duele*.' },
            { s: '**Me duelen** los pies.', n: 'More than one thing: *duelen*.' },
            { s: '**Tengo** fiebre y tos.', n: '*tener* + fiebre (fever), tos (cough), gripe (flu).' },
            { s: '**Estoy** resfriada.', n: '*estar resfriado/resfriada*: to have a cold. The ending changes for a man or a woman.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'duele or duelen?', items: [
            { q: 'Me ___ la cabeza.', o: ['duele', 'duelen', 'dolor'], why: '*la cabeza* is one thing: *duele*.' },
            { q: 'Me ___ los ojos.', o: ['duelen', 'duele', 'dolor'], why: '*los ojos* is plural: *duelen*.' },
            { q: '¿Te ___ el estómago?', o: ['duele', 'duelen', 'dolor'], why: '*el estómago* is one thing: *duele*.' },
            { q: 'A mi hijo le ___ los oídos.', o: ['duelen', 'duele', 'dolor'], why: '*los oídos* is plural: *duelen*. For another person: *le duele(n)*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the parts of the body.', items: [
            { s: 'Me duele la [garganta], tengo dolor de [cabeza] y también me duelen las [piernas].', why: 'Throat, head and legs are parts of the body.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'En la consulta', lines: [
            { who: 'Médico', s: 'Buenas tardes. Siéntese, por favor. ¿Qué le pasa?' },
            { who: 'Olga', s: 'Me duele mucho la garganta y tengo fiebre.' },
            { who: 'Médico', s: '¿Desde cuándo?' },
            { who: 'Olga', s: 'Desde ayer por la mañana. También me duele la cabeza.' },
            { who: 'Médico', s: '¿Tiene tos?' },
            { who: 'Olga', s: 'Un poco, por la noche.' },
            { who: 'Médico', s: 'A ver, abra la boca, por favor. Sí, tiene la garganta muy roja. Es una infección.' },
            { who: 'Olga', s: '¿Tengo que tomar algo?' },
            { who: 'Médico', s: 'Sí. Tome estas pastillas cada ocho horas durante cinco días. Y tiene que descansar y beber mucha agua.' },
            { who: 'Olga', s: '¿Puedo ir a trabajar mañana?' },
            { who: 'Médico', s: 'Mejor no. Debe quedarse en casa dos o tres días. Le doy un justificante para su empresa.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the visit. True or false?', items: [
            { q: 'A Olga le duelen la garganta y la cabeza.', a: 't', why: '*Me duele mucho la garganta… También me duele la cabeza.*' },
            { q: 'Olga tiene mucha tos durante el día.', a: 'f', why: 'She has a little cough, at night: *un poco, por la noche*.' },
            { q: 'Olga tiene que tomar las pastillas tres veces al día.', a: 't', why: '*Cada ocho horas*: three times in 24 hours.' },
            { q: 'Olga puede ir a trabajar mañana.', a: 'f', why: '*Mejor no. Debe quedarse en casa.*' },
          ] },
        ],
        [
          { t: 'text', md: 'The doctor gives instructions in three ways. **Tome…** is a polite instruction with *usted*. **Tiene que** + infinitive and **debe** + infinitive say what you must do. **No debe** says what you must not do.' },
          { t: 'ex', kind: 'gap', h: 'Complete what the doctor says.', items: [
            { q: '___ una pastilla cada ocho horas. (tomar, usted)', a: ['Tome'], why: 'A polite instruction with *usted*: *tome*.' },
            { q: 'Tiene ___ beber mucha agua.', a: ['que'], why: '*tener que* + infinitive: you must.' },
            { q: 'No ___ ir a trabajar esta semana. (deber, usted)', a: ['debe'], why: '*usted debe*, like *él debe*. *No debe*: you must not.' },
            { q: '___ la boca, por favor. (abrir, usted)', a: ['Abra'], why: '*-ir* verbs end in *-a* with *usted*: *abra*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Me [duelen] la espalda.', a: ['duele'], why: '*la espalda* is one thing: *me duele*.' },
            { s: 'Me duele [mi] cabeza.', a: ['la'], why: 'With body parts, Spanish uses *la*, not *mi*: *me duele la cabeza*.' },
            { s: 'Tiene [de] descansar mucho.', a: ['que'], why: 'The form is *tener que* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A notice and a reminder',
      about: 'Read a notice from a health centre and a reminder for an appointment.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Centro de salud del Norte', md: '**Horario:** de lunes a viernes, de 8:00 a 21:00.\n\n**Cita previa:** por teléfono, en la aplicación de salud de su región o en el mostrador de admisión.\n\nSi no puede venir, anule su cita, por favor. Así otra persona puede usarla.\n\n**Pediatría:** lunes, miércoles y viernes, por la mañana.\n\n**Urgencias:** por la noche y los fines de semana, vaya a las urgencias del hospital o llame al 112.\n\n**Recetas:** normalmente el médico guarda la receta en su tarjeta sanitaria. Con la tarjeta, puede recoger sus medicamentos en cualquier farmacia.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the notice. True, false or not given?', items: [
            { q: 'El centro de salud abre los sábados.', a: 'f', why: 'It is open *de lunes a viernes*, Monday to Friday.' },
            { q: 'Se puede pedir cita por teléfono.', a: 't', why: '*Cita previa: por teléfono…*' },
            { q: 'Los niños tienen médico los martes.', a: 'f', why: '*Pediatría* is on Mondays, Wednesdays and Fridays.' },
            { q: 'El hospital está a cinco minutos del centro de salud.', a: 'ng', why: 'The notice does not say where the hospital is.' },
            { q: 'Para recoger los medicamentos, usted necesita su tarjeta sanitaria.', a: 't', why: '*Con la tarjeta, puede recoger sus medicamentos.*' },
          ] },
        ],
        [
          { t: 'reading', title: 'Recordatorio de cita', md: 'Centro de salud del Norte. Sra. Petrova: le recordamos su cita con el doctor Ruiz el jueves 15 de octubre a las 9:10, en la consulta 4.\n\nTraiga su tarjeta sanitaria. Si no puede venir, anule la cita en el 900 000 000 o en la aplicación de salud.\n\nGracias.' },
          { t: 'ex', kind: 'tf', h: 'Read the reminder. True or false?', items: [
            { q: 'La cita es el jueves por la mañana.', a: 't', why: 'Thursday at 9:10: in the morning.' },
            { q: 'La cita es con una médica.', a: 'f', why: 'It is with *el doctor Ruiz*, a man.' },
            { q: 'La señora Petrova puede anular la cita en la aplicación.', a: 't', why: '*Anule la cita en el 900 000 000 o en la aplicación.*' },
          ] },
          { t: 'tip', art: 'owl', md: '*Anular* (or *cancelar*) a cita means to cancel it. *Cambiar* la cita means to move it to another day. If you cannot come, always say so: other patients are waiting for a free appointment.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['la receta', 'el papel o el registro para recoger un medicamento'],
            ['anular una cita', 'decir que no va a venir'],
            ['la pediatría', 'la medicina para niños'],
            ['urgencias', 'el sitio para los problemas graves y rápidos'],
            ['la consulta', 'la sala del médico'],
          ] },
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword about health.', words: [
            { a: 'fiebre', clue: 'Tienes la temperatura muy alta.' },
            { a: 'garganta', clue: 'Está en el cuello. Con la gripe, a veces duele.' },
            { a: 'receta', clue: 'El médico te la da para la farmacia.' },
            { a: 'farmacia', clue: 'Aquí compras medicamentos.' },
            { a: 'espalda', clue: 'La parte de atrás del cuerpo.' },
            { a: 'pastilla', clue: 'Un medicamento pequeño que tomas con agua.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Me ___ los pies.', o: ['duelen', 'duele', 'duelo'], why: '*los pies* is plural: *duelen*.' },
      { q: 'Para su médico de familia, usted va ___.', o: ['al centro de salud', 'a la farmacia de guardia', 'al ayuntamiento'], why: 'Your family doctor works at the local health centre.' },
      { q: '¿Qué le pasa?', o: ['Tengo fiebre y tos.', 'Tengo cita a las diez.', 'Tengo una tarjeta.'], why: '*¿Qué le pasa?* asks what is wrong.' },
      { q: 'Es una emergencia. Usted llama al ___.', o: ['112', 'número del ayuntamiento', 'número de la farmacia'], why: 'In an emergency in Spain and the EU, call 112.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Me ___ la espalda. (doler)', a: ['duele'], why: 'One thing: *duele*.' },
      { q: 'Quería ___ cita para mañana.', a: ['pedir'], why: '*pedir cita*: to make an appointment.' },
      { q: 'Tiene ___ descansar dos días.', a: ['que'], why: '*tener que* + infinitive.' },
      { q: '___ estas pastillas cada ocho horas. (tomar, usted)', a: ['Tome'], why: 'A polite instruction: *tome*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Me duele [mi] garganta.', a: ['la'], why: 'With body parts: *la garganta*, not *mi garganta*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Me duele mucho la cabeza.', why: '*me duele* + *mucho* + the body part with *la*.' },
      { a: '¿Tengo que tomar algo?', why: '*tener que* + the infinitive *tomar*.' },
      { a: 'Debe quedarse en casa.', why: '*deber* + infinitive. *quedarse*: *se* joins the end.' },
    ] },
  ],
};
