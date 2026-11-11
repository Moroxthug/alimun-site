// Spanish A1 for work, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Hello at work',
  goal: 'Introduce yourself and your colleagues at work.',
  art: 'churro',
  tags: { skills: ['speaking', 'vocabulary', 'reading'], topics: ['greetings', 'introductions', 'tu-usted', 'ser', 'nationalities', 'languages'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Hello, I am new here',
      about: 'Greet people at work, say your name and say where you work, with tú or usted.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'At work you greet people with **Buenos días** in the morning and **Buenas tardes** after lunch. With colleagues you know, **Hola** is fine.\n\nTo say your name, use *Me llamo …* or *Soy …*. To say where you work, use *Trabajo en …*: *Trabajo en el departamento de ventas.*' },
          { t: 'examples', items: [
            { s: '**Buenos días.** Me llamo Elena Ruiz.', n: '*Buenos días*: good morning. You say it until lunch, around two o’clock in Spain.' },
            { s: '**Soy** Javier, el nuevo técnico.', n: '*Soy* is from *ser*: I am.' },
            { s: '**Trabajo en** recursos humanos.', n: '*recursos humanos*: the department that looks after the staff.' },
            { s: '**¿Cómo te llamas?**', n: 'What is your name? (to a colleague, with *tú*).' },
            { s: '**¿Cómo se llama usted?**', n: 'What is your name? (polite, with *usted*).' },
          ] },
        ],
        [
          { t: 'text', md: 'Spanish has two words for *you*. **Tú** is for colleagues, friends and young people. **Usted** is polite: for customers, older people and sometimes your boss. With *usted*, the verb has the same form as for *él* and *ella*.\n\nIn many offices in Spain, colleagues say *tú* from the first day. If you are not sure, start with *usted* and wait.' },
          { t: 'table', caption: 'ser (to be)', quiz: true, head: ['Person', 'ser'], rows: [
            ['yo', 'soy'],
            ['tú', 'eres'],
            ['él, ella, usted', 'es'],
            ['nosotros, nosotras', 'somos'],
            ['vosotros, vosotras', 'sois'],
            ['ellos, ellas, ustedes', 'son'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Latin America people use *usted* more often at work, and **ustedes** is the only plural *you*: *¿Ustedes son de ventas?* In Spain you say *vosotros* to a group of colleagues: *¿Vosotros sois de ventas?*' },
        ],
        [
          { t: 'dialogue', title: 'At reception', lines: [
            { who: 'Recepcionista', s: 'Buenos días. ¿Cómo se llama usted?' },
            { who: 'Elena', s: 'Buenos días. Me llamo Elena Ruiz. Soy la nueva diseñadora.' },
            { who: 'Recepcionista', s: '¡Bienvenida, señora Ruiz! Su oficina está en el segundo piso.' },
            { who: 'Elena', s: 'Muchas gracias.' },
            { who: 'Recepcionista', s: 'De nada. ¡Hasta luego!' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Tú or usted? Choose the right question.', items: [
            { q: 'You speak to a new colleague of your age.', o: ['¿Cómo te llamas?', '¿Cómo se llama usted?', '¿Cómo se llaman?'], why: 'With colleagues people usually say *tú*: *¿Cómo te llamas?*' },
            { q: 'You speak to an older customer at reception.', o: ['¿Cómo se llama usted?', '¿Cómo te llamas?', '¿Cómo me llamo?'], why: 'With customers and older people, use *usted*: *¿Cómo se llama usted?*' },
            { q: 'You ask a colleague: Are you the new technician?', o: ['¿Eres el nuevo técnico?', '¿Es el nuevo técnico tú?', '¿Soy el nuevo técnico?'], why: 'With *tú*, the verb is *eres*.' },
            { q: 'It is ten in the morning. You arrive at the office.', o: ['Buenos días.', 'Buenas noches.', 'Adiós.'], why: 'In the morning: *Buenos días*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of ser.', verb: 'ser', tense: 'present', rows: [
            ['yo', 'soy'],
            ['tú', 'eres'],
            ['usted', 'es'],
            ['nosotros', 'somos'],
            ['vosotros', 'sois'],
            ['ellos', 'son'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with soy, eres, es or somos.', items: [
            { q: 'Hola, ___ Carlos, de contabilidad.', a: ['soy'], why: '*yo soy*: I am.' },
            { q: '¿Tú ___ la nueva compañera?', a: ['eres'], why: '*tú eres*: you are.' },
            { q: 'Señor Gómez, ¿usted ___ el director?', a: ['es'], why: 'With *usted* the verb is like *él*: *es*.' },
            { q: 'Ana y yo ___ de recursos humanos.', a: ['somos'], why: '*Ana y yo* is *nosotras*: *somos*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Meet my colleagues',
      about: 'Introduce colleagues, answer politely and say where people are from and which languages they speak.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To introduce a man, say **Este es …**. To introduce a woman, say **Esta es …**: *Este es Diego. Esta es Marta.*\n\nThe answer depends on who is speaking. A man says **Encantado**, a woman says **Encantada**. *Mucho gusto* is the same for everyone.' },
          { t: 'dialogue', title: 'The first day', lines: [
            { who: 'Marta', s: 'Hola, Elena. Mira, este es Diego. Es el jefe de ventas.' },
            { who: 'Diego', s: 'Hola, Elena. Encantado.' },
            { who: 'Elena', s: 'Encantada, Diego.' },
            { who: 'Marta', s: 'Y esta es Aisha. Es de Marruecos y habla árabe, francés y español.' },
            { who: 'Aisha', s: '¡Hola! Mucho gusto. ¿Y tú, de dónde eres?' },
            { who: 'Elena', s: 'Soy de Valencia, pero vivo aquí en Madrid.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain, colleagues often greet each other with two kisses, one on each cheek, but at work a handshake is also very normal. If you are not sure, offer your hand.' },
        ],
        [
          { t: 'text', md: 'To say where you are from, use **ser de**: *Soy de Polonia.* Nationalities change for men and women, and they are written with a small letter: *Diego es mexicano. Aisha es marroquí.*\n\nTo say which languages you speak, use **hablar**: *Hablo inglés y un poco de español.*' },
          { t: 'table', caption: 'Countries and nationalities', explain: ['head'], quiz: true, head: ['Country', 'Man', 'Woman'], rows: [
            ['España', 'español', 'española'],
            ['México', 'mexicano', 'mexicana'],
            ['Alemania', 'alemán', 'alemana'],
            ['Francia', 'francés', 'francesa'],
            ['Brasil', 'brasileño', 'brasileña'],
            ['Marruecos', 'marroquí', 'marroquí'],
            ['Estados Unidos', 'estadounidense', 'estadounidense'],
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Hola, Pedro, ___ es Rosa, la nueva recepcionista.', o: ['esta', 'este', 'estas'], why: 'Rosa is a woman: *esta es*.' },
            { q: 'Lucía dice: «___, Pedro.»', o: ['Encantada', 'Encantado', 'Encantados'], why: 'Lucía is a woman, so she says *Encantada*.' },
            { q: 'Andrés es de México. Es ___.', o: ['mexicano', 'mexicana', 'México'], why: 'Andrés is a man: *mexicano*.' },
            { q: 'Inés es de Francia. Es ___.', o: ['francesa', 'francés', 'Francia'], why: 'For a woman: *francesa*, with no accent.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the nationality for a woman.', items: [
            { q: 'Carlos es español y Carla también es ___.', a: ['española'], why: '*español*, *española*: add *-a*.' },
            { q: 'Mateo es alemán y su compañera Sara también es ___.', a: ['alemana'], why: '*alemán*, *alemana*: the accent goes away.' },
            { q: 'Rafael es brasileño y Ana también es ___.', a: ['brasileña'], why: '*-o* changes to *-a*: *brasileña*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['¿Cómo te llamas?', 'Me llamo Tomás.'],
            ['¿De dónde eres?', 'Soy de Portugal.'],
            ['¿Qué idiomas hablas?', 'Hablo portugués e inglés.'],
            ['¿Dónde trabajas?', 'Trabajo en contabilidad.'],
            ['Esta es Rosa.', 'Encantado, Rosa.'],
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Este es Diego, el jefe de ventas.', why: '*Este es* + name, then who the person is.' },
            { a: '¿De dónde es usted?', why: 'Question word *de dónde*, verb *es*, then *usted*.' },
            { a: 'Hablo inglés y un poco de español.', why: '*un poco de*: a little.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a welcome email',
      about: 'Read an email that introduces a new colleague to the team.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'When a new person starts, the manager often sends an email to the team. Read the email from Marta to her colleagues.' },
          { t: 'reading', title: 'Una nueva compañera', md: '**De:** marta.lopez@example.com\n**Para:** equipo de diseño\n**Asunto:** Una nueva compañera\n\nHola a todos:\n\nHoy es el primer día de Elena Ruiz en la empresa. Elena es diseñadora y trabaja con nosotros en el equipo de diseño. Es de Valencia, pero ahora vive en Madrid.\n\nElena habla español, inglés y un poco de italiano. Su oficina está en el segundo piso, al lado de la oficina de Diego.\n\nA las once tomamos un café en la cocina para dar la bienvenida a Elena. ¡Hasta luego!\n\nUn saludo,\nMarta' },
          { t: 'tip', art: 'owl', md: '*Un saludo* is a friendly way to end an email at work, a little like *Best wishes*. *Hola a todos* means *Hello everyone*.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the email. True, false or not given?', items: [
            { q: 'Elena es diseñadora.', a: 't', why: '*Elena es diseñadora y trabaja con nosotros.*' },
            { q: 'Elena vive en Valencia.', a: 'f', why: 'She is from Valencia, but *ahora vive en Madrid*.' },
            { q: 'Elena habla tres idiomas.', a: 't', why: '*español, inglés y un poco de italiano*.' },
            { q: 'La oficina de Elena está en el primer piso.', a: 'f', why: 'It is *en el segundo piso*.' },
            { q: 'Diego es de Madrid.', a: 'ng', why: 'The email does not say where Diego is from.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Quién escribe el correo?', o: ['Marta', 'Elena', 'Diego'], why: 'The email is *De: marta.lopez@example.com* and it ends *Marta*.' },
            { q: '¿Qué hacen a las once?', o: ['Toman un café en la cocina.', 'Tienen una reunión con Diego.', 'Elena llega a la empresa.'], why: '*A las once tomamos un café en la cocina.*' },
            { q: '¿Dónde está la oficina de Elena?', o: ['al lado de la oficina de Diego', 'en la cocina', 'en Valencia'], why: '*al lado de la oficina de Diego*: next to Diego’s office.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the three languages Elena speaks.', items: [
            { s: 'Elena habla [español], [inglés] y un poco de [italiano].', why: 'Names of languages are written with a small letter in Spanish.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'You meet an older customer. You ask:', o: ['¿Cómo se llama usted?', '¿Cómo te llamas?', '¿Cómo os llamáis?'], why: 'Polite *usted* for customers and older people.' },
      { q: 'Lucía meets a new colleague. She says:', o: ['Encantada.', 'Encantado.', 'Este es.'], why: 'A woman says *Encantada*.' },
      { q: '___ es Javier, mi compañero.', o: ['Este', 'Esta', 'Estos'], why: 'Javier is a man: *Este es*.' },
      { q: 'It is four in the afternoon. You say:', o: ['Buenas tardes.', 'Buenos días.', 'Buenas noches.'], why: 'After lunch: *Buenas tardes*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Yo ___ de Brasil. (ser)', a: ['soy'], why: '*yo soy*.' },
      { q: 'Vosotros ___ del equipo de diseño, ¿no? (ser)', a: ['sois'], why: '*vosotros sois*.' },
      { q: 'Marta es de España. Es ___.', a: ['española'], why: 'For a woman: *española*.' },
      { q: 'Yo ___ en el departamento de ventas. (trabajar)', a: ['trabajo'], why: '*trabajar*: *yo trabajo*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
      ['¿De dónde eres?', 'Soy de Alemania.'],
      ['¿Qué idiomas hablas?', 'Hablo alemán y español.'],
      ['¿Cómo te llamas?', 'Me llamo Paul.'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Esta es Aisha, la nueva compañera.', why: '*Esta es* + name for a woman.' },
      { a: '¿De dónde es usted?', why: 'Question word first, then the verb and *usted*.' },
    ] },
  ],
};
