// Spanish A1 for work, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Phone calls and messages',
  goal: 'Answer a simple work call, ask for someone and leave a short message.',
  art: 'parrot',
  tags: { skills: ['speaking', 'listening', 'vocabulary', 'reading'], topics: ['telephone', 'alphabet', 'spelling', 'numbers', 'messages', 'estar'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Answering the phone',
      about: 'Answer a work call, ask to speak to someone, and spell names and say numbers.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In a company, people usually answer the phone with the name of the company and a greeting: *Muebles Ortega, buenos días.* At home or on a mobile, people often say **¿Diga?** or **¿Sí?**\n\nThe caller says who they are and asks for someone: **¿Puedo hablar con …, por favor?**' },
          { t: 'dialogue', title: 'A phone call', lines: [
            { who: 'Recepcionista', s: 'Muebles Ortega, buenos días.' },
            { who: 'Javier', s: 'Buenos días. ¿Puedo hablar con la señora Ruiz, por favor?' },
            { who: 'Recepcionista', s: '¿De parte de quién?' },
            { who: 'Javier', s: 'Soy Javier Martín, de Transportes Rivera.' },
            { who: 'Recepcionista', s: 'Un momento, por favor.' },
            { who: 'Recepcionista', s: 'Lo siento, la señora Ruiz no está. Está en una reunión.' },
            { who: 'Javier', s: 'Vale. Llamo más tarde. Gracias.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Useful phrases on the phone', explain: ['head', 'col0'], head: ['Situation', 'What you say'], rows: [
            ['You answer the phone at work.', 'Muebles Ortega, buenos días.'],
            ['You answer your mobile.', '¿Diga? / ¿Sí?'],
            ['You ask for someone.', '¿Puedo hablar con Diego, por favor?'],
            ['You ask who is calling.', '¿De parte de quién?'],
            ['You say who you are.', 'Soy Javier Martín, de Transportes Rivera.'],
            ['You ask the caller to wait.', 'Un momento, por favor.'],
            ['The person is not there.', 'Lo siento, no está.'],
            ['You did not understand.', '¿Puede repetir, por favor?'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Latin America people answer the phone in different ways: *¿Aló?* in many countries, *¿Bueno?* in Mexico. A mobile phone is *el móvil* in Spain and *el celular* in Latin America.' },
        ],
        [
          { t: 'text', md: 'On the phone you often spell your name. Learn the names of the letters: *a, be, ce, de, e, efe, ge, hache, i, jota, ka, ele, eme, ene, eñe, o, pe, cu, erre, ese, te, u, uve, uve doble, equis, i griega, zeta.*\n\nPhone numbers are often said one digit at a time or in pairs: *seis, cero, cero, once, veintidós, treinta y tres*.' },
          { t: 'examples', items: [
            { s: '¿**Cómo se escribe** su apellido?', n: 'How do you spell your surname? *el apellido*: the family name.' },
            { s: 'Martín: **eme, a, erre, te, i, ene**. Con tilde en la i.', n: '*la tilde*: the accent on a letter.' },
            { s: '¿**Cuál es su número de teléfono**?', n: 'What is your phone number? (polite).' },
            { s: 'Es el **600 11 22 33**.', n: 'People say *el* before the number.' },
            { s: 'Mi correo es **javier.martin@example.com**.', n: 'Say *@* as *arroba* and *.* as *punto*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Latin America, many people call the letter *v* **ve corta** and the letter *b* **be larga**. In Spain they are *uve* and *be*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You want to speak to Diego.', o: ['¿Puedo hablar con Diego, por favor?', '¿De parte de Diego?', 'Diego no está.'], why: '*¿Puedo hablar con …?*: can I speak to …?' },
            { q: 'You want to know who is calling.', o: ['¿De parte de quién?', '¿Puedo hablar con usted?', '¿Cómo está?'], why: '*¿De parte de quién?*: who is calling?' },
            { q: 'You did not understand the number.', o: ['¿Puede repetir, por favor?', 'Un momento, por favor.', 'Lo siento, no está.'], why: '*repetir*: to say it again.' },
            { q: 'The person is not in the office.', o: ['Lo siento, no está.', 'Lo siento, no es.', 'Lo siento, no hay.'], why: 'For where a person is, use *estar*: *no está*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: '¿Puedo hablar con la señora Ruiz?', why: '*Puedo* + infinitive *hablar*, then *con* + the person.' },
            { a: '¿Cómo se escribe su apellido?', why: 'A useful question when you take a name.' },
            { a: '¿Cuál es su número de teléfono?', why: '*Cuál* + *es* + what you want to know.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['¿De parte de quién?', 'De Javier Martín.'],
            ['¿Cómo se escribe su apellido?', 'Eme, a, erre, te, i, ene.'],
            ['¿Cuál es su número?', 'El 600 11 22 33.'],
            ['¿Está la señora Ruiz?', 'No, lo siento. Está en una reunión.'],
            ['¿Cuál es su correo?', 'javier.martin@example.com.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '¿Puedo ___ con Diego, por favor?', a: ['hablar'], why: '*poder* + infinitive: *¿Puedo hablar …?*' },
            { q: '¿De ___ de quién?', a: ['parte'], why: 'The fixed question is *¿De parte de quién?*' },
            { q: 'Un ___, por favor.', a: ['momento'], why: '*Un momento*: one moment.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Leaving a message',
      about: 'Offer to take a message, leave one, and write short messages to colleagues.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'When the person is not there, offer to take a message: **¿Quiere dejar un mensaje?** (with *usted*) or *¿Quieres dejar un mensaje?* (with *tú*).\n\nUse **estar** to say where a person is or that they are busy: *Está en una reunión. Está de vacaciones. Está ocupada.*' },
          { t: 'dialogue', title: 'A message', lines: [
            { who: 'Recepcionista', s: 'Lo siento, la señora Ruiz no está. ¿Quiere dejar un mensaje?' },
            { who: 'Javier', s: 'Sí, por favor. Llamo por la reunión del jueves. Es a las diez, no a las nueve.' },
            { who: 'Recepcionista', s: 'La reunión es a las diez. Muy bien. ¿Cuál es su número de teléfono?' },
            { who: 'Javier', s: 'Es el 600 11 22 33.' },
            { who: 'Recepcionista', s: 'Repito: seis, cero, cero, once, veintidós, treinta y tres.' },
            { who: 'Javier', s: 'Sí, eso es. Muchas gracias.' },
            { who: 'Recepcionista', s: 'De nada. Adiós, buenos días.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Repeat names and numbers to check them: *Repito: …* At the end of a call people often say *Adiós* and a greeting together: *Adiós, buenos días* or *Adiós, buenas tardes*.' },
        ],
        [
          { t: 'table', caption: 'estar (to be: place and state)', quiz: true, head: ['Person', 'estar'], rows: [
            ['yo', 'estoy'],
            ['tú', 'estás'],
            ['él, ella, usted', 'está'],
            ['nosotros, nosotras', 'estamos'],
            ['vosotros, vosotras', 'estáis'],
            ['ellos, ellas, ustedes', 'están'],
          ] },
          { t: 'examples', items: [
            { s: 'Diego **está** en una reunión.', n: 'Where a person is: *estar*.' },
            { s: 'Lo siento, **estoy** ocupada.', n: '*ocupado*, *ocupada*: busy.' },
            { s: 'Marta y Pedro **están** de vacaciones.', n: '*estar de vacaciones*: to be on holiday.' },
            { s: '**Llamo por** la reunión del jueves.', n: '*Llamo por …*: I am calling about … *de + el = del*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the form of estar.', items: [
            { q: 'La señora Ruiz no ___. Está en una reunión.', a: ['está', 'esta'], why: '*ella está*.' },
            { q: 'Lo siento, ahora ___ ocupado. (yo)', a: ['estoy'], why: '*yo estoy*.' },
            { q: 'Los técnicos ___ en la fábrica.', a: ['están', 'estan'], why: '*ellos están*.' },
            { q: '¿Dónde ___ vosotros? (estar)', a: ['estáis', 'estais'], why: '*vosotros estáis*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Diego ___ de vacaciones esta semana.', o: ['está', 'es', 'hay'], why: '*estar de vacaciones*.' },
            { q: '¿Quiere dejar un ___?', o: ['mensaje', 'momento', 'apellido'], why: '*dejar un mensaje*: to leave a message.' },
            { q: 'Llamo ___ la reunión del jueves.', o: ['por', 'de', 'con'], why: '*Llamo por …*: I am calling about …' },
          ] },
        ],
        [
          { t: 'text', md: 'Colleagues often write short messages on the mobile. They are short and friendly. *Te llamo* means *I will call you*: in Spanish the present is often used for the near future.' },
          { t: 'examples', items: [
            { s: 'Estoy en una reunión. **Te llamo** a las doce.', n: '*te*: you. It goes before the verb.' },
            { s: 'Llego tarde, hay mucho tráfico. **Lo siento.**', n: '*llegar tarde*: to be late.' },
            { s: '¿Tienes el número de Javier? **Gracias.**', n: 'A short question to a colleague.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the messages. Two words do not belong.', items: [
            { a: 'Estoy en una reunión.', extra: ['soy', 'hay'], why: 'Where you are: *estar*, not *ser*.' },
            { a: 'Te llamo a las doce.', extra: ['la', 'en'], why: '*a las* + the hour.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: notes and messages',
      about: 'Read a phone note and short messages from colleagues.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'When you take a message for a colleague, you write a short note: who called, when, the number and the message.' },
          { t: 'reading', title: 'Nota de teléfono', md: '**Para:** Elena Ruiz\n**De:** Javier Martín, Transportes Rivera\n**Día y hora:** martes, 10.20\n**Teléfono:** 600 11 22 33\n**Mensaje:** La reunión del jueves es a las diez, no a las nueve. Javier va a llevar los documentos.\n**Llamar:** no\n**Escrito por:** Rosa' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the note. True, false or not given?', items: [
            { q: 'La nota es para Elena.', a: 't', why: '*Para: Elena Ruiz*.' },
            { q: 'Javier llama el martes por la tarde.', a: 'f', why: 'He calls *a las 10.20*, in the morning.' },
            { q: 'Es necesario llamar a Javier.', a: 'f', why: '*Llamar: no*.' },
            { q: 'Rosa escribe la nota.', a: 't', why: '*Escrito por: Rosa*.' },
            { q: 'La reunión es en la oficina de Javier.', a: 'ng', why: 'The note does not say where the meeting is.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Mensajes del móvil', md: '**Diego, 8.47:** Buenos días, Ana. Llego tarde, el metro no funciona. Estoy en la oficina a las nueve y media. ¡Lo siento!\n\n**Ana, 8.50:** No pasa nada, Diego. La reunión con el cliente es a las diez.\n\n**Carla, 13.15:** Hola, Pedro. Estoy en la fábrica todo el día. ¿Tienes el número de la señora Ruiz? Gracias.\n\n**Pedro, 13.20:** Hola, Carla. Sí, es el 600 44 55 66. Un saludo.' },
          { t: 'ex', kind: 'choice', h: 'Read the messages and choose the right answer.', items: [
            { q: '¿Por qué llega tarde Diego?', o: ['El metro no funciona.', 'Está en la fábrica.', 'Tiene una reunión.'], why: '*el metro no funciona*: the metro is not working.' },
            { q: '¿A qué hora es la reunión con el cliente?', o: ['a las diez', 'a las nueve y media', 'a las ocho'], why: '*La reunión con el cliente es a las diez.*' },
            { q: '¿Qué necesita Carla?', o: ['el número de la señora Ruiz', 'el correo de Pedro', 'una reunión con Diego'], why: '*¿Tienes el número de la señora Ruiz?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What does it mean? Match.', pairs: [
            ['Llamar: no', 'No es necesario llamar.'],
            ['Escrito por: Rosa', 'Rosa escribe la nota.'],
            ['No pasa nada.', 'No es un problema.'],
            ['Llego tarde.', 'No llego a la hora.'],
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the three forms of estar.', items: [
            { s: 'Diego [está] en el metro. Carla [está] en la fábrica. Yo [estoy] en la oficina.', why: '*estar* says where a person is.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'You want to know who is calling. You ask:', o: ['¿De parte de quién?', '¿Quién es usted de?', '¿Dónde está usted?'], why: 'The fixed question: *¿De parte de quién?*' },
      { q: 'Your colleague is not in the office. You say:', o: ['Lo siento, no está.', 'Lo siento, no es.', 'Lo siento, no soy.'], why: 'Where a person is: *estar*.' },
      { q: 'The caller cannot speak to the person. You ask:', o: ['¿Quiere dejar un mensaje?', '¿Puedo hablar con usted?', '¿Cómo se escribe?'], why: '*dejar un mensaje*: to leave a message.' },
      { q: 'In Spain, people often answer a mobile with:', o: ['¿Diga?', '¿Adiós?', '¿Bueno días?'], why: '*¿Diga?* or *¿Sí?*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '¿Puedo ___ con el señor López, por favor?', a: ['hablar'], why: '*¿Puedo hablar con …?*' },
      { q: 'El jefe ___ en una reunión.', a: ['está', 'esta'], why: '*él está*.' },
      { q: '¿Cómo se ___ su apellido?', a: ['escribe'], why: '*¿Cómo se escribe?*: how do you spell it?' },
      { q: 'Nosotros ___ de vacaciones en agosto. (estar)', a: ['estamos'], why: '*nosotros estamos*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Cuál es su número de teléfono?', why: '*Cuál es* + what you want to know.' },
      { a: 'Llamo por la reunión del jueves.', why: '*Llamo por …*: I am calling about …' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Lo siento, la señora Ruiz [es] en una reunión.', a: ['está', 'esta'], why: 'Where a person is: *estar*, *está*.' },
    ] },
  ],
};
