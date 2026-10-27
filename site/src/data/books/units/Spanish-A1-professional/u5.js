// Spanish A1 for work, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'The office',
  goal: 'Say where things are in the office and ask colleagues for help.',
  art: 'cactus',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['office', 'hay-estar', 'prepositions', 'asking-for-help', 'directions'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Where is the printer?',
      about: 'Name things in the office and say where they are with hay, estar and words of place.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Learn the things in the office with their article. Words that end in *-o* are usually masculine (*el*), words that end in *-a* are usually feminine (*la*). Some words, like *el ordenador* and *la llave*, you just learn.' },
          { t: 'table', caption: 'In the office', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['el ordenador', 'the computer'],
            ['la impresora', 'the printer'],
            ['la mesa', 'the desk, the table'],
            ['la silla', 'the chair'],
            ['el bolígrafo', 'the pen'],
            ['el papel', 'the paper'],
            ['la llave', 'the key'],
            ['la sala de reuniones', 'the meeting room'],
            ['el ascensor', 'the lift'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Latin America a computer is usually *la computadora* or *el computador*, not *el ordenador*. A pen can be *la pluma* in Mexico or *el lapicero* in Peru.' },
        ],
        [
          { t: 'text', md: 'Use **hay** to say that something exists, with *un*, *una*, a number or no article: *Hay una impresora en la oficina. Hay dos salas de reuniones.*\n\nUse **está** or **están** to say where a known thing is, with *el*, *la*, *los*, *las*: *La impresora está al lado de la ventana.*' },
          { t: 'examples', items: [
            { s: '**Hay** una cocina en el primer piso.', n: '*hay* + *una*: there is a kitchen.' },
            { s: 'La cocina **está** al final del pasillo.', n: '*la cocina* is known, so *está*. *de + el = del*.' },
            { s: '¿**Hay** papel para la impresora?', n: '*hay* + a word with no article.' },
            { s: 'Las llaves **están** encima de la mesa.', n: 'Plural: *están*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Where is it?', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['al lado de', 'next to'],
            ['encima de', 'on, on top of'],
            ['debajo de', 'under'],
            ['delante de', 'in front of'],
            ['detrás de', 'behind'],
            ['entre … y …', 'between … and …'],
            ['a la derecha', 'on the right'],
            ['a la izquierda', 'on the left'],
          ] },
          { t: 'tip', art: 'owl', md: '**a + el = al** and **de + el = del**: *Voy al despacho. Está al lado del ascensor.* With *la* nothing changes: *al lado de la puerta*.' },
        ],
        [
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'phone', o: ['el teléfono', 'la llave', 'el reloj'], why: '*el teléfono*: the phone.' },
            { pic: 'key', o: ['la llave', 'la mesa', 'el papel'], why: '*la llave*: the key.' },
            { pic: 'clock', o: ['el reloj', 'el ordenador', 'la silla'], why: '*el reloj*: the clock.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Hay or está/están?', items: [
            { q: '___ una impresora en el segundo piso.', o: ['Hay', 'Está', 'Están'], why: 'With *una*: *hay*.' },
            { q: 'La sala de reuniones ___ a la izquierda.', o: ['está', 'hay', 'es'], why: '*la sala* is a known thing: *está*.' },
            { q: 'Los bolígrafos ___ en la mesa de Rosa.', o: ['están', 'hay', 'está'], why: 'Plural known things: *están*.' },
            { q: 'En la oficina ___ tres ordenadores.', o: ['hay', 'están', 'es'], why: 'With a number: *hay*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write al or del.', items: [
            { q: 'La impresora está al lado ___ ascensor.', a: ['del'], why: '*de + el ascensor* = *del ascensor*.' },
            { q: 'La cocina está ___ final del pasillo.', a: ['al'], why: '*a + el final* = *al final*.' },
            { q: 'Las llaves están encima ___ ordenador.', a: ['del'], why: '*de + el ordenador* = *del ordenador*.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find six things in the office.', words: ['silla', 'mesa', 'papel', 'llave', 'impresora', 'ordenador'] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Can you help me?',
      about: 'Ask a colleague for help, say that something does not work, and understand simple directions.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To start a question to someone, say **Perdona** (with *tú*) or **Perdone** (with *usted*). To ask for help, say **¿Puedes ayudarme?** or, politely, *¿Puede ayudarme?*\n\nWhen a machine is broken, say **No funciona**: *La impresora no funciona.*' },
          { t: 'dialogue', title: 'The printer', lines: [
            { who: 'Elena', s: 'Perdona, Pedro. ¿Puedes ayudarme? La impresora no funciona.' },
            { who: 'Pedro', s: 'A ver… No hay papel. El papel está en el armario, debajo de la ventana.' },
            { who: 'Elena', s: '¡Ah, gracias! Y otra pregunta: ¿dónde está la sala de reuniones?' },
            { who: 'Pedro', s: 'Está en el tercer piso. Sales del ascensor y está a la derecha, al lado de la cocina.' },
            { who: 'Elena', s: 'Perfecto. Muchas gracias, Pedro.' },
            { who: 'Pedro', s: 'De nada.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Asking for help', explain: ['head', 'col0'], head: ['Situation', 'What you say'], rows: [
            ['You start a question to a colleague.', 'Perdona, …'],
            ['You start a question politely.', 'Perdone, …'],
            ['You ask for help.', '¿Puedes ayudarme?'],
            ['A machine is broken.', 'El ordenador no funciona.'],
            ['You ask where something is.', '¿Dónde está el baño?'],
            ['You ask if there is something.', '¿Hay una impresora por aquí?'],
            ['You want to borrow something.', '¿Me dejas un bolígrafo?'],
          ] },
          { t: 'tip', art: 'owl', md: 'For directions people often use the *usted* forms: *Siga recto* (go straight on), *Gire a la derecha* (turn right). Between colleagues they also use the present: *Sales del ascensor y giras a la izquierda.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You want to ask your boss, Mr Gómez, a question.', o: ['Perdone, señor Gómez…', 'Perdona, señor Gómez…', 'Lo siento, señor Gómez…'], why: 'With *usted*: *Perdone*.' },
            { q: 'Your computer is broken.', o: ['Mi ordenador no funciona.', 'Mi ordenador no está.', 'Mi ordenador no hay.'], why: '*no funciona*: it does not work.' },
            { q: 'You need a pen from a colleague.', o: ['¿Me dejas un bolígrafo?', '¿Hay un bolígrafo?', '¿Dónde es un bolígrafo?'], why: '*¿Me dejas …?*: can I borrow …?' },
            { q: 'You are looking for the toilet.', o: ['¿Dónde está el baño?', '¿Dónde hay el baño?', '¿Dónde es el baño?'], why: 'Where a known place is: *¿Dónde está …?*' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'La impresora no funciona porque no hay papel.', a: 't', why: '*No hay papel.*' },
            { q: 'El papel está encima de la ventana.', a: 'f', why: 'It is in the cupboard, *debajo de la ventana*: under the window.' },
            { q: 'La sala de reuniones está al lado de la cocina.', a: 't', why: '*a la derecha, al lado de la cocina*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the problem and the question.', pairs: [
            ['No tengo bolígrafo.', '¿Me dejas un bolígrafo?'],
            ['La impresora no funciona.', '¿Puedes ayudarme?'],
            ['No sé dónde está la sala.', '¿Dónde está la sala de reuniones?'],
            ['Necesito un café.', '¿Hay una cocina por aquí?'],
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Perdone, ¿dónde está el ascensor?', why: '*Perdone* first, then the question *¿dónde está …?*' },
            { a: 'Siga recto y gire a la derecha.', why: 'Two directions with the *usted* forms *siga* and *gire*.' },
            { a: 'El ordenador de Marta no funciona.', why: 'Subject, then *no* before the verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a note for a new colleague',
      about: 'Read a note that tells a new colleague where things are in the office.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Rosa works in reception. She writes a short note for Tomás, a new colleague, about the office.' },
          { t: 'reading', title: 'Bienvenido, Tomás', md: 'Hola, Tomás:\n\nAquí tienes información sobre la oficina. Tu mesa está en el segundo piso, entre la mesa de Carla y la ventana. Tu ordenador está encima de la mesa, y la contraseña está en un papel en el primer cajón.\n\nLa impresora está al lado del ascensor. Si no funciona, habla con Pedro, el técnico. Su mesa está al final del pasillo, a la izquierda.\n\nHay una cocina pequeña en el primer piso, con una nevera y una cafetera. La sala de reuniones grande está en el tercer piso.\n\nLas llaves de la oficina están en recepción. ¡Bienvenido!\n\nRosa' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the note. True, false or not given?', items: [
            { q: 'La mesa de Tomás está al lado de la mesa de Carla.', a: 't', why: '*entre la mesa de Carla y la ventana*: next to Carla’s desk.' },
            { q: 'La impresora está en la cocina.', a: 'f', why: 'It is *al lado del ascensor*.' },
            { q: 'Pedro trabaja en el tercer piso.', a: 'ng', why: 'The note says his desk is at the end of the corridor, but not on which floor.' },
            { q: 'Hay una cocina en el primer piso.', a: 't', why: '*Hay una cocina pequeña en el primer piso.*' },
            { q: 'Tomás tiene las llaves de la oficina.', a: 'f', why: '*Las llaves de la oficina están en recepción.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Dónde está la contraseña del ordenador?', o: ['en el primer cajón', 'en recepción', 'al lado del ascensor'], why: '*la contraseña está en un papel en el primer cajón*.' },
            { q: '¿Quién ayuda con la impresora?', o: ['Pedro', 'Carla', 'Rosa'], why: '*Si no funciona, habla con Pedro, el técnico.*' },
            { q: '¿Dónde está la sala de reuniones grande?', o: ['en el tercer piso', 'en el primer piso', 'en recepción'], why: '*La sala de reuniones grande está en el tercer piso.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the three words of place.', items: [
            { s: 'Tu mesa está [entre] la mesa de Carla y la ventana. El ordenador está [encima] de la mesa. La impresora está al [lado] del ascensor.', why: '*entre*, *encima de* and *al lado de* say where things are.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '___ dos impresoras en la oficina.', o: ['Hay', 'Están', 'Es'], why: 'With a number: *hay*.' },
      { q: 'El ascensor ___ a la derecha.', o: ['está', 'hay', 'es'], why: 'A known thing: *está*.' },
      { q: 'You ask a customer a question. You start with:', o: ['Perdone, …', 'Perdona, …', 'Hola, tú, …'], why: 'With *usted*: *Perdone*.' },
      { q: 'Your computer is broken. You say:', o: ['El ordenador no funciona.', 'El ordenador no hay.', 'El ordenador no es.'], why: '*no funciona*: it does not work.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'La cocina está al lado ___ ascensor.', a: ['del'], why: '*de + el* = *del*.' },
      { q: 'Las llaves ___ encima de la mesa.', a: ['están', 'estan'], why: 'Plural: *están*.' },
      { q: '¿Puedes ___? La impresora no funciona.', a: ['ayudarme'], why: '*¿Puedes ayudarme?*: can you help me?' },
      { q: 'Siga recto y gire a la ___.', a: ['derecha', 'izquierda'], why: '*a la derecha*: on the right; *a la izquierda*: on the left.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the opposites.', pairs: [
      ['encima de', 'debajo de'],
      ['delante de', 'detrás de'],
      ['a la derecha', 'a la izquierda'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'La sala de reuniones está al lado [de el] ascensor.', a: ['del'], why: '*de + el* always becomes *del*.' },
    ] },
  ],
};
