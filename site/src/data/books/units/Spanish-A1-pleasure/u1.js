// Spanish A1 for travel, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'First words for travellers',
  goal: 'Greet people, say who you are and use the polite words every traveller needs.',
  art: 'churro',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['greetings', 'polite-words', 'tu-and-usted', 'ser', 'nationalities', 'numbers', 'signs'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Hello, please and thank you',
      about: 'Say hello and goodbye, use polite words and choose between tú and usted.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: '*Hola* means hello. You can say it to everyone, at any time of the day.\n\nTo be a little more polite, use the greeting for the time of day: *buenos días* in the morning, *buenas tardes* in the afternoon and early evening, and *buenas noches* late in the evening and at night. *Buenas noches* also means good night.' },
          { t: 'table', caption: 'Hello and goodbye', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'When you say it'], rows: [
            ['Hola.', 'hello, at any time'],
            ['Buenos días.', 'good morning'],
            ['Buenas tardes.', 'good afternoon, good evening'],
            ['Buenas noches.', 'good evening late, good night'],
            ['Adiós.', 'goodbye'],
            ['Hasta luego.', 'see you later, bye'],
            ['Hasta mañana.', 'see you tomorrow'],
          ] },
          { t: 'tip', art: 'churro', md: 'In Spain people eat lunch late, so *buenos días* is used until about two in the afternoon. In a shop or a lift, people often say only *Buenas*: it is short for *buenos días* or *buenas tardes*.' },
        ],
        [
          { t: 'text', md: 'These little words are the most useful words on a trip. Say *por favor* when you ask for something and *gracias* when you get it.\n\nSpanish has two words for *you*. Use **tú** with friends, children and young people. Use **usted** with older people, in a hotel or with someone you do not know. With *usted*, the verb has the same form as with *él* and *ella*.' },
          { t: 'examples', items: [
            { s: 'Un café, **por favor**.', n: 'Please.' },
            { s: '**Muchas gracias.** – **De nada.**', n: 'Thank you very much. – You are welcome.' },
            { s: '**Perdón**, ¿es su maleta?', n: '*Perdón*: excuse me or sorry, for a small thing.' },
            { s: '**Lo siento**, no hablo bien español.', n: 'I am sorry. You say it when something is your fault.' },
            { s: '¿Cómo **estás**? – Bien, gracias.', n: 'With *tú*: *¿Cómo estás?*' },
            { s: '¿Cómo **está usted**? – Muy bien, gracias.', n: 'With *usted*: *¿Cómo está usted?*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In most of Latin America people use *usted* more often than in Spain. For more than one person, Latin America uses *ustedes* for friends too, where Spain says *vosotros*.' },
        ],
        [
          { t: 'dialogue', title: 'En la recepción', lines: [
            { who: 'Recepcionista', s: 'Buenas tardes. ¿Qué tal?' },
            { who: 'Grace', s: 'Buenas tardes. Muy bien, gracias. ¿Y usted?' },
            { who: 'Recepcionista', s: 'Bien, gracias. Aquí tiene la llave.' },
            { who: 'Grace', s: 'Muchas gracias.' },
            { who: 'Recepcionista', s: 'De nada. ¡Hasta luego!' },
            { who: 'Grace', s: '¡Adiós, hasta luego!' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right words.', items: [
            { q: 'Por la mañana, en el hotel: «___, señora.»', o: ['Buenos días', 'Buenas noches', 'Buenas tardes'], why: 'In the morning: *buenos días*.' },
            { q: 'Un señor dice: «Gracias». Tú dices: «___»', o: ['De nada.', 'Lo siento.', 'Por favor.'], why: '*De nada* means you are welcome.' },
            { q: 'En un bar: «Un agua, ___.»', o: ['por favor', 'de nada', 'hasta luego'], why: 'When you ask for something, add *por favor*.' },
            { q: 'Un señor mayor en la calle: «¿Cómo ___ usted?»', o: ['está', 'estás', 'estoy'], why: 'With *usted*, the verb has the *él* and *ella* form: *está*.' },
            { q: 'Por la noche, antes de dormir: «___»', o: ['Buenas noches.', 'Buenos días.', 'Hola.'], why: '*Buenas noches* is also good night.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'When do you say it? Match.', pairs: [
            ['Buenos días.', 'por la mañana'],
            ['Buenas tardes.', 'por la tarde'],
            ['Buenas noches.', 'por la noche'],
            ['Hasta mañana.', 'Nos vemos mañana.'],
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: the question and its answer.', pairs: [
            ['¿Qué tal?', 'Bien, gracias.'],
            ['Gracias.', 'De nada.'],
            ['Hasta luego.', 'Adiós.'],
            ['¿Cómo está usted?', 'Muy bien, ¿y usted?'],
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose tú or usted.', items: [
            { q: 'Un niño en el parque: ¿Cómo estás ___?', o: ['tú', 'usted', 'vosotros'], why: 'With a child, use *tú*. The verb *estás* is also the *tú* form.' },
            { q: 'El director del hotel: ¿Cómo está ___?', o: ['usted', 'tú', 'vosotros'], why: 'With someone you do not know, in a hotel, use *usted*. The verb is *está*.' },
            { q: 'Tu amigo Diego: Y ___, ¿qué tal?', o: ['tú', 'usted', 'ustedes'], why: 'With a friend, use *tú*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Muchas ___. – De nada.', a: ['gracias'], why: '*Muchas gracias*: thank you very much.' },
            { q: 'Buenos ___, señora.', a: ['días', 'dias'], why: '*Buenos días*: *días* is masculine, so *buenos*.' },
            { q: 'Buenas ___. (in the afternoon)', a: ['tardes'], why: 'In the afternoon: *buenas tardes*.' },
            { q: 'Hasta ___. (see you later)', a: ['luego'], why: '*Hasta luego*: see you later.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Your name, where you are from and numbers',
      about: 'Say your name and where you are from with ser, and count from 0 to 20.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'To say your name, use *Me llamo …* or *Soy …*. To say where you are from, use *Soy de …*.\n\nThe verb **ser** (to be) is irregular. You need it for names, countries and nationalities.' },
          { t: 'table', caption: 'ser (to be)', quiz: true, head: ['', 'ser'], rows: [
            ['yo', 'soy'],
            ['tú', 'eres'],
            ['él, ella, usted', 'es'],
            ['nosotros, nosotras', 'somos'],
            ['vosotros, vosotras', 'sois'],
            ['ellos, ellas, ustedes', 'son'],
          ] },
          { t: 'examples', items: [
            { s: '**Me llamo** Kofi. **Soy de** Ghana.', n: 'My name is Kofi. I am from Ghana.' },
            { s: '¿**Cómo te llamas**?', n: 'What is your name? With *tú*.' },
            { s: '¿**Cómo se llama** usted?', n: 'What is your name? With *usted*.' },
            { s: '¿**De dónde eres**? – **Soy de** Irlanda.', n: 'Where are you from? – I am from Ireland.' },
          ] },
        ],
        [
          { t: 'text', md: 'Nationalities change for a man and a woman. Many end in *-o* for a man and *-a* for a woman: *italiano, italiana*. When the word for a man ends in a consonant, add *-a* for a woman: *español, española*. Some words are the same for both: *estadounidense, canadiense*.\n\nNationalities are written with a small letter in Spanish.' },
          { t: 'table', caption: 'Nationalities', quiz: true, head: ['', 'a man', 'a woman'], explain: ['head'], rows: [
            ['Italia', 'italiano', 'italiana'],
            ['México', 'mexicano', 'mexicana'],
            ['España', 'español', 'española'],
            ['Inglaterra', 'inglés', 'inglesa'],
            ['Alemania', 'alemán', 'alemana'],
            ['Francia', 'francés', 'francesa'],
            ['Canadá', 'canadiense', 'canadiense'],
          ] },
          { t: 'dialogue', title: 'En el avión', lines: [
            { who: 'Elena', s: 'Hola, ¿es tu primer viaje a España?' },
            { who: 'Owen', s: 'Sí. Me llamo Owen. ¿Y tú?' },
            { who: 'Elena', s: 'Yo me llamo Elena. Encantada.' },
            { who: 'Owen', s: 'Encantado. ¿De dónde eres, Elena?' },
            { who: 'Elena', s: 'Soy mexicana, de Puebla. ¿Y tú?' },
            { who: 'Owen', s: 'Soy galés, de Cardiff.' },
          ] },
          { t: 'tip', art: 'churro', md: 'When you meet someone, a man says *encantado* and a woman says *encantada*. *Mucho gusto* is the same for everyone and is very common in Latin America.' },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of ser.', verb: 'ser', tense: 'present', rows: [
            ['yo', 'soy'],
            ['tú', 'eres'],
            ['él, ella, usted', 'es'],
            ['nosotros', 'somos'],
            ['vosotros', 'sois', 'Only in Spain. In Latin America people say *ustedes son*.'],
            ['ellos, ellas, ustedes', 'son'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with the right form of ser.', items: [
            { q: 'Yo ___ de Australia.', a: ['soy'], why: 'With *yo*: *soy*.' },
            { q: '¿De dónde ___ tú?', a: ['eres'], why: 'With *tú*: *eres*.' },
            { q: 'Ellas ___ francesas.', a: ['son'], why: 'With *ellas*: *son*.' },
            { q: '¿Usted ___ el señor García?', a: ['es'], why: 'With *usted*, the verb has the *él* form: *es*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Spanish you can often leave out *yo*, *tú* and *nosotros*: the verb already shows who it is. *Soy de Irlanda* is more usual than *Yo soy de Irlanda*.' },
        ],
        [
          { t: 'text', md: 'You need numbers for rooms, seats, prices and phone numbers. Learn them from zero to twenty. From 16 to 19, the number is one word: *dieci* + the number, so *dieciséis*, *diecisiete*.' },
          { t: 'table', caption: 'Numbers from 0 to 20', explain: ['head'], quiz: true, head: ['Number', 'Word', 'Number', 'Word'], rows: [
            ['0', 'cero', '11', 'once'],
            ['1', 'uno', '12', 'doce'],
            ['2', 'dos', '13', 'trece'],
            ['3', 'tres', '14', 'catorce'],
            ['4', 'cuatro', '15', 'quince'],
            ['5', 'cinco', '16', 'dieciséis'],
            ['6', 'seis', '17', 'diecisiete'],
            ['7', 'siete', '18', 'dieciocho'],
            ['8', 'ocho', '19', 'diecinueve'],
            ['9', 'nueve', '20', 'veinte'],
            ['10', 'diez', '', ''],
          ] },
          { t: 'examples', items: [
            { s: 'Mi asiento es el **catorce**.', n: 'My seat is number 14.' },
            { s: 'Son **doce** euros.', n: 'It is 12 euros.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the number in words.', items: [
            { q: 'Tengo la habitación ___. (15)', a: ['quince'], why: '15 is *quince*.' },
            { q: 'Son ___ euros. (7)', a: ['siete'], why: '7 is *siete*.' },
            { q: 'Mi asiento es el ___. (16)', a: ['dieciséis', 'dieciseis'], why: '16 is one word, with an accent: *dieciséis*.' },
            { q: 'El autobús número ___ va al centro. (12)', a: ['doce'], why: '12 is *doce*.' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Write the numbers.', words: [
            { a: 'tres', clue: 'Dos y uno.' },
            { a: 'diez', clue: 'Cinco y cinco.' },
            { a: 'veinte', clue: 'Diez y diez.' },
            { a: 'ocho', clue: 'Cuatro y cuatro.' },
            { a: 'once', clue: 'Diez y uno.' },
            { a: 'catorce', clue: 'Siete y siete.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: signs at the airport',
      about: 'Understand the signs at an airport and a short welcome text.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'At the airport, signs are short. Many words look like English words, so you can often guess them. *Salida* means exit, and *Salidas* means departures. *Llegadas* means arrivals.' },
          { t: 'table', caption: 'Airport signs', explain: ['head', 'col1'], quiz: true, head: ['Sign', 'Meaning'], rows: [
            ['Llegadas', 'arrivals'],
            ['Salidas', 'departures'],
            ['Salida', 'way out'],
            ['Recogida de equipajes', 'baggage reclaim'],
            ['Control de pasaportes', 'passport control'],
            ['Aseos', 'toilets'],
            ['Información', 'information'],
            ['Prohibido fumar', 'no smoking'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Latin America you will often read *Baños* for the toilets. In Spain you see *Aseos* or *Servicios*, and people also say *baño*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Where do you go? Match the sign and the sentence.', pairs: [
            ['Recogida de equipajes', 'Quiero mi maleta.'],
            ['Aseos', 'Necesito el baño.'],
            ['Información', 'Tengo una pregunta.'],
            ['Salidas', 'Mi avión sale pronto.'],
            ['Salida', 'Quiero ir a la calle.'],
          ] },
          { t: 'ex', kind: 'search', h: 'Find the airport words.', words: ['salida', 'aseos', 'llegadas', 'equipaje', 'taxi', 'maleta'] },
        ],
        [
          { t: 'reading', title: 'Bienvenidos', md: '**Bienvenidos al aeropuerto**\n\nHola y bienvenidos. La recogida de equipajes está en la planta baja. Los aseos están al lado de la salida.\n\nEl punto de información está abierto de las seis de la mañana a las once de la noche. Aquí hay mapas de la ciudad gratis.\n\nLos taxis están delante de la salida. El autobús al centro sale cada veinte minutos. El billete cuesta cinco euros.\n\nPor favor, no deje su equipaje solo. Prohibido fumar en el aeropuerto.\n\n¡Buen viaje!' },
          { t: 'text', md: '*Bienvenidos* means welcome. *Gratis* means it costs nothing. *Cada veinte minutos* means every twenty minutes.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the text. True, false or not given?', items: [
            { q: 'Los aseos están al lado de la salida.', a: 't', why: '*Los aseos están al lado de la salida.*' },
            { q: 'Los mapas de la ciudad cuestan dos euros.', a: 'f', why: 'The maps are *gratis*: they cost nothing.' },
            { q: 'El autobús al centro sale cada veinte minutos.', a: 't', why: '*sale cada veinte minutos*.' },
            { q: 'Hay una cafetería en la planta baja.', a: 'ng', why: 'The text does not talk about a café.' },
            { q: 'En el aeropuerto se puede fumar.', a: 'f', why: '*Prohibido fumar en el aeropuerto.*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Cuánto cuesta el billete de autobús?', o: ['cinco euros', 'veinte euros', 'once euros'], why: '*El billete cuesta cinco euros.*' },
            { q: '¿Dónde están los taxis?', o: ['delante de la salida', 'en la planta baja', 'al lado de los aseos'], why: '*Los taxis están delante de la salida.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the word for arrivals and the word for departures.', items: [
            { s: '[Llegadas]: planta baja. [Salidas]: primera planta.', why: '*Llegadas*: arrivals. *Salidas*: departures.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Por la tarde, en una tienda: «___»', o: ['Buenas tardes.', 'Buenos días.', 'Buenas noches.'], why: 'In the afternoon: *buenas tardes*.' },
      { q: '¿De dónde ___ tú?', o: ['eres', 'es', 'soy'], why: 'With *tú*, the verb *ser* is *eres*.' },
      { q: 'Ella es de Italia. Es ___.', o: ['italiana', 'italiano', 'Italia'], why: 'For a woman: *italiana*.' },
      { q: 'Quiero salir del aeropuerto. Busco el cartel «___».', o: ['Salida', 'Llegadas', 'Aseos'], why: '*Salida* is the way out.' },
      { q: 'Con el director del hotel: «¿Cómo ___ usted?»', o: ['se llama', 'te llamas', 'me llamo'], why: 'With *usted*: *¿Cómo se llama usted?*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Nosotros ___ de Canadá. (ser)', a: ['somos'], why: 'With *nosotros*: *somos*.' },
      { q: 'Muchas gracias. – De ___.', a: ['nada'], why: '*De nada*: you are welcome.' },
      { q: 'Son ___ euros. (14)', a: ['catorce'], why: '14 is *catorce*.' },
      { q: 'Él es de España. Es ___.', a: ['español'], why: 'A man from Spain: *español*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Me llamo Ana y soy de Chile.', why: '*Me llamo* + name, then *soy de* + country.' },
      { a: '¿De dónde es usted?', why: 'The question word *de dónde*, then the verb *es*, then *usted*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
      { s: 'Ella es [español].', a: ['española'], why: 'For a woman: *española*.' },
    ] },
  ],
};
