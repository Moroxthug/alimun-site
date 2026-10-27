// Spanish A2 for moving abroad, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Neighbours and new friends',
  goal: 'Greet neighbours, invite people and make small talk.',
  art: 'sun',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['greetings', 'tu-usted', 'neighbours', 'invitations', 'small-talk'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Hello, I am new here',
      about: 'Greet people, introduce yourself and choose between tú and usted.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'In Spain, people usually greet neighbours on the stairs and in the lift: *Hola, buenos días* or just *Hola, buenas*. When you meet someone for the first time, say *Encantado* (a man) or *Encantada* (a woman), or *Mucho gusto*.' },
          { t: 'text', md: 'In Spain, **tú** is very common, also with neighbours and colleagues. People use **usted** with older people they do not know, at offices and to be very polite. If someone says *Puedes tutearme*, you can use *tú* with them.' },
          { t: 'table', caption: 'tú, usted, vosotros, ustedes', explain: ['head', 'col2'], quiz: true, head: ['Person', 'Question', 'When'], rows: [
            ['tú', '¿Dónde vives?', 'one person, informal'],
            ['usted', '¿Dónde vive?', 'one person, polite'],
            ['vosotros, vosotras', '¿Dónde vivís?', 'more than one person, informal (Spain)'],
            ['ustedes', '¿Dónde viven?', 'more than one person, polite in Spain; all situations in Latin America'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'En la escalera', lines: [
            { who: 'Andrés', s: 'Buenos días. ¿Es usted la nueva vecina del tercero?' },
            { who: 'Farah', s: 'Sí, soy Farah. Llegué la semana pasada.' },
            { who: 'Andrés', s: 'Encantado. Yo soy Andrés. Vivo en el segundo, justo debajo.' },
            { who: 'Farah', s: 'Mucho gusto.' },
            { who: 'Andrés', s: 'Bienvenida al edificio. Y puedes tutearme, ¿eh?' },
            { who: 'Farah', s: 'Vale, gracias. ¿Y tú, desde cuándo vives aquí?' },
            { who: 'Andrés', s: 'Desde hace veinte años. Si necesitas algo, llama a mi puerta.' },
            { who: 'Farah', s: 'Muchas gracias, eres muy amable.' },
            { who: 'Andrés', s: 'De nada. ¡Hasta luego!' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain, friends and people who are introduced often greet each other with **two kisses** on the cheeks; men often shake hands with other men. In many Latin American countries, people give one kiss. In Latin America, *usted* is more common than in Spain, and *vosotros* is not used: people say *ustedes* to everyone.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'Usted conoce a una persona por primera vez. Usted es una mujer. Dice: ___', o: ['Encantada.', 'Encantado.', 'Hasta luego.'], why: 'A woman says *encantada*, a man says *encantado*.' },
            { q: 'Usted ve a su vecino en el ascensor a las nueve de la mañana. Dice: ___', o: ['Buenos días.', 'Buenas noches.', 'Mucho gusto.'], why: 'In the morning: *buenos días*. *Mucho gusto* is for the first meeting.' },
            { q: 'Una vecina le dice: «Puedes tutearme». Usted le pregunta: ___', o: ['¿De dónde eres?', '¿De dónde es usted?', '¿De dónde sois?'], why: '*tutear* means to use *tú*: *¿De dónde eres?*' },
          ] },
          { t: 'ex', kind: 'match', h: 'When do people say it?', pairs: [
            ['Buenas tardes.', 'después de comer'],
            ['Buenas noches.', 'por la noche o para ir a dormir'],
            ['Encantado.', 'cuando un hombre conoce a alguien'],
            ['Bienvenida.', 'cuando una mujer llega a un sitio nuevo'],
            ['¡Hasta luego!', 'cuando alguien se va'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Who is the speaker talking to? Sort the questions.', groups: ['tú', 'usted', 'vosotros'], items: [
            { s: '¿Dónde vives?', g: 0, why: '*vives*: the *tú* form.' },
            { s: '¿Cómo se llama?', g: 1, why: '*se llama*: the *usted* form, like *él*.' },
            { s: '¿De dónde sois?', g: 2, why: '*sois*: the *vosotros* form of *ser*.' },
            { s: '¿Trabaja usted aquí?', g: 1, why: '*trabaja* with *usted*.' },
            { s: '¿Tienes hijos?', g: 0, why: '*tienes*: the *tú* form.' },
            { s: '¿Vivís en el cuarto?', g: 2, why: '*vivís*: the *vosotros* form.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the questions.', items: [
            { q: '¿Desde cuándo ___ aquí, Andrés? (vivir, tú)', a: ['vives'], why: '*tú vives*: *-ir* verbs end in *-es* with *tú*.' },
            { q: '¿Desde cuándo ___ aquí, señora? (vivir, usted)', a: ['vive'], why: '*usted vive*, like *ella vive*.' },
            { q: '¿___ nuevos en el edificio? (ser, vosotros)', a: ['Sois'], why: '*ser* with *vosotros*: *sois*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Soy la nueva vecina del tercero.', why: '*la nueva vecina*: *nueva* often comes before the noun. *del tercero*: from the third floor.' },
            { a: 'Si necesitas algo, llama a mi puerta.', why: '*si* + present, then the *tú* instruction *llama*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Inviting and replying',
      about: 'Invite someone, say yes, or say no politely.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To invite someone, ask **¿Te apetece** + infinitive**?** or **¿Quieres** + infinitive**?** To fix a time and place, use **quedar**: *¿Quedamos el sábado?* If you say no, give a reason with **es que…**: it sounds softer.' },
          { t: 'examples', items: [
            { s: '**¿Te apetece** tomar algo después del trabajo?', n: '*tomar algo*: to have a drink or a snack together.' },
            { s: '**¿Quedamos** a las ocho en la plaza?', n: '*quedar*: to arrange to meet.' },
            { s: '¡**Me encantaría**! / ¡**Vale**!', n: 'Two ways to say yes. *Me encantaría*: I would love to.' },
            { s: 'Lo siento, no puedo. **Es que** tengo que trabajar.', n: '*es que* + the reason: it is softer than just *no*.' },
            { s: '¡Qué pena! **Otro día.**', n: 'A friendly way to end a no.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain, people eat late: lunch is often at two or three, and dinner at nine or ten. *Vale* is very Spanish. In Latin America you hear *dale*, *claro* or *bueno*, and in Mexico *¿Se te antoja…?* means *¿Te apetece…?*' },
        ],
        [
          { t: 'dialogue', title: 'Mensajes', lines: [
            { who: 'Lucía', s: 'Hola, Farah. ¿Te apetece tomar algo el viernes después del trabajo?' },
            { who: 'Farah', s: '¡Sí, me encantaría! ¿A qué hora?' },
            { who: 'Lucía', s: '¿Quedamos a las siete en la plaza?' },
            { who: 'Farah', s: 'Lo siento, a las siete no puedo. Es que tengo clase de español. ¿A las ocho y media?' },
            { who: 'Lucía', s: '¡Vale! A las ocho y media en la plaza. Vienen también Diego y Sara.' },
            { who: 'Farah', s: '¡Genial! Hasta el viernes.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the messages. True or false?', items: [
            { q: 'Lucía invita a Farah el viernes.', a: 't', why: '*¿Te apetece tomar algo el viernes…?*' },
            { q: 'Farah no puede a las siete.', a: 't', why: '*A las siete no puedo. Es que tengo clase de español.*' },
            { q: 'Quedan a las siete en la plaza.', a: 'f', why: 'They change the time: *a las ocho y media*.' },
            { q: 'Van a ir solo Lucía y Farah.', a: 'f', why: '*Vienen también Diego y Sara.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: '¿Te apetece venir a cenar el sábado?', o: ['¡Me encantaría! ¿A qué hora?', 'Sí, me duele la cabeza.', 'Vale, son tres euros.'], why: 'A yes to the invitation and a question about the time.' },
            { q: '¿Quedamos mañana a las seis?', o: ['Lo siento, no puedo. Es que trabajo hasta las ocho.', 'No, gracias, tengo mi bolsa.', 'Sí, en el pasillo tres.'], why: 'A polite no with a reason: *es que…*' },
            { q: 'Lo siento, el domingo no puedo.', o: ['¡Qué pena! Otro día.', '¡Genial! Hasta el domingo.', 'Encantado.'], why: 'The friend says no, so you answer *¡Qué pena! Otro día.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the invitations and replies.', items: [
            { q: '¿Te ___ ir al cine esta noche?', a: ['apetece'], why: '*¿Te apetece* + infinitive?: would you like to…?' },
            { q: '¿___ el sábado a las once? (quedar, nosotros)', a: ['Quedamos'], why: '*quedar* with *nosotros*: *quedamos*.' },
            { q: 'Lo siento, no puedo. Es ___ tengo que estudiar.', a: ['que'], why: '*es que* + the reason.' },
            { q: '¡Me ___! Gracias por la invitación.', a: ['encantaría', 'encantaria'], why: '*Me encantaría*: I would love to.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'build', h: 'Build the sentences. Two words do not belong.', items: [
            { a: '¿Te apetece tomar algo después del trabajo?', extra: ['quieres', 'tomas'], why: '*¿Te apetece* + the infinitive *tomar*.' },
            { a: 'Lo siento, es que tengo que trabajar.', extra: ['debo', 'pero'], why: '*es que* + the reason, and *tener que* + infinitive.' },
            { a: '¿Quedamos a las ocho en la plaza?', extra: ['quedo', 'de'], why: '*quedamos* (we) + time + place.' },
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words can follow ¿Te apetece…?', items: [
            { key: '¿Te apetece…?', o: ['tomar un café', 'venir a cenar', 'dar un paseo', 'a las ocho', 'en la plaza'], a: [0, 1, 2], why: '*¿Te apetece* is followed by an infinitive or a thing: *tomar*, *venir*, *dar*. A time or place does not fit.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A note and an invitation',
      about: 'Read a note from a neighbour and an invitation to a party.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Una nota de Andrés', md: 'Hola, Farah:\n\nEsta mañana ha venido el repartidor con un paquete para ti, pero no estabas en casa. Lo tengo yo. Puedes recogerlo esta tarde a partir de las seis o mañana por la mañana. Mi piso es el segundo B.\n\nOtra cosa: el jueves a las ocho de la tarde hay reunión de la comunidad de vecinos en el portal. Vamos a hablar del ascensor nuevo. ¿Vienes?\n\nUn abrazo,\nAndrés' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the note. True, false or not given?', items: [
            { q: 'Andrés tiene un paquete de Farah.', a: 't', why: '*Un paquete para ti… Lo tengo yo.*' },
            { q: 'Farah puede recoger el paquete esta tarde a las cuatro.', a: 'f', why: 'From six: *a partir de las seis*.' },
            { q: 'El paquete es de la familia de Farah.', a: 'ng', why: 'The note does not say who sent the parcel.' },
            { q: 'La reunión de vecinos es en el piso de Andrés.', a: 'f', why: 'It is *en el portal*, at the entrance of the building.' },
            { q: 'En la reunión hablan del ascensor.', a: 't', why: '*Vamos a hablar del ascensor nuevo.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain, the owners of the flats in a building form a *comunidad de vecinos*. They meet to decide about the building, like the lift or the cleaning. *El portal* is the entrance of the building.' },
        ],
        [
          { t: 'reading', title: 'Fiesta de inauguración', md: '¡Hola a todos!\n\nPor fin tenemos el piso listo: las cajas están vacías y los muebles están en su sitio. Queremos celebrarlo con vosotros. Os invitamos a una pequeña fiesta de inauguración el sábado 24 de octubre, a partir de las nueve de la noche.\n\nDirección: calle del Río, 8, cuarto A.\n\nNosotros preparamos la cena. Si queréis, traed algo de beber o un postre.\n\nPor favor, decidnos antes del miércoles si venís.\n\n¡Os esperamos!\nMateo y Rania' },
          { t: 'ex', kind: 'tf', h: 'Read the invitation. True or false?', items: [
            { q: 'Mateo y Rania tienen un piso nuevo.', a: 't', why: 'A *fiesta de inauguración* is a party for a new home.' },
            { q: 'La fiesta empieza por la tarde, a las cinco.', a: 'f', why: 'It starts *a partir de las nueve de la noche*.' },
            { q: 'Los invitados tienen que preparar la cena.', a: 'f', why: '*Nosotros preparamos la cena.*' },
            { q: 'Los invitados tienen que responder antes del miércoles.', a: 't', why: '*Decidnos antes del miércoles si venís.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'The invitation speaks to a group with *vosotros*: *os invitamos*, *traed*, *venís*. In Latin America it would use *ustedes*: *los invitamos*, *traigan*, *vienen*.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write a reply to Mateo and Rania.', items: [
            { q: '¡Hola, Mateo y Rania! Muchas gracias por la ___.', a: ['invitación', 'invitacion'], why: '*la invitación*: what they sent you.' },
            { q: '¡Claro que ___! (ir, yo)', a: ['voy'], why: '*ir*: *yo voy*.' },
            { q: '¿___ un postre? (llevar, yo)', a: ['Llevo'], why: '*llevar*: *yo llevo*. A question to offer something.' },
            { q: 'Lo siento, ___ las nueve no puedo. Llego a las diez.', a: ['a'], why: 'A time: *a las nueve*.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find six words about neighbours and parties.', words: ['vecino', 'portal', 'fiesta', 'postre', 'paquete', 'abrazo'] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Una mujer conoce a alguien. Dice: ___', o: ['Encantada.', 'Encantado.', 'Bienvenido.'], why: 'A woman says *encantada*.' },
      { q: '¿De dónde ___ usted?', o: ['es', 'eres', 'sois'], why: '*usted es*, like *él es*.' },
      { q: '¿Te apetece cenar con nosotros?', o: ['¡Me encantaría!', '¡Qué pena!', 'Mucho gusto.'], why: 'A yes to the invitation: *¡Me encantaría!*' },
      { q: 'En América Latina, para hablar a un grupo de amigos, se usa ___.', o: ['ustedes', 'vosotros', 'tú'], why: 'In Latin America, *vosotros* is not used: *ustedes* for every group.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '¿Desde cuándo ___ aquí? (vivir, tú)', a: ['vives'], why: '*tú vives*.' },
      { q: '¿___ el viernes a las siete? (quedar, nosotros)', a: ['Quedamos'], why: '*quedamos*: we meet.' },
      { q: 'Lo siento, no puedo. Es ___ tengo clase.', a: ['que'], why: '*es que* + the reason.' },
      { q: '¿Te ___ dar un paseo? (apetecer)', a: ['apetece'], why: '*¿Te apetece* + infinitive?' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Formal or informal? Sort the questions.', groups: ['tú', 'usted'], items: [
      { s: '¿Cómo te llamas?', g: 0, why: '*te llamas*: the *tú* form.' },
      { s: '¿Cómo se llama?', g: 1, why: '*se llama*: the *usted* form.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Te apetece venir a mi fiesta?', why: '*¿Te apetece* + the infinitive *venir*.' },
      { a: 'Muchas gracias por la invitación.', why: '*gracias por* + what you thank someone for.' },
    ] },
  ],
};
