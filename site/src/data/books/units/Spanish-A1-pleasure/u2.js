// Spanish A1 for travel, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'At the hotel',
  goal: 'Check in, spell your name and ask about your room and breakfast.',
  art: 'cat',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['hotel', 'tener', 'alphabet', 'hay', 'estar', 'location', 'problems'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Checking in',
      about: 'Say you have a booking, spell your name and talk about rooms and nights.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'dialogue', title: 'En la recepción', lines: [
            { who: 'Recepcionista', s: 'Buenas tardes. ¿En qué puedo ayudarle?' },
            { who: 'Ben', s: 'Buenas tardes. Tengo una reserva a nombre de Ben Walsh.' },
            { who: 'Recepcionista', s: '¿Cómo se escribe su apellido, por favor?' },
            { who: 'Ben', s: 'Uve doble, a, ele, ese, hache.' },
            { who: 'Recepcionista', s: 'Gracias. Sí, una habitación doble para tres noches. ¿Tiene su pasaporte?' },
            { who: 'Ben', s: 'Sí, aquí tiene.' },
            { who: 'Recepcionista', s: 'Muy bien. Es la habitación doscientos doce, en la segunda planta. Aquí tiene la llave.' },
            { who: 'Ben', s: 'Muchas gracias.' },
          ] },
          { t: 'text', md: '*Tengo una reserva* means I have a booking. The verb **tener** (to have) is irregular. At the hotel you need *tengo* (I have) and *tiene* (you have, with *usted*).\n\n*Aquí tiene* means here you are. You say it when you give something to someone.' },
        ],
        [
          { t: 'table', caption: 'tener (to have)', quiz: true, head: ['', 'tener'], rows: [
            ['yo', 'tengo'],
            ['tú', 'tienes'],
            ['él, ella, usted', 'tiene'],
            ['nosotros, nosotras', 'tenemos'],
            ['vosotros, vosotras', 'tenéis'],
            ['ellos, ellas, ustedes', 'tienen'],
          ] },
          { t: 'table', caption: 'At the hotel', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['la reserva', 'booking'],
            ['la habitación individual', 'room for one person'],
            ['la habitación doble', 'room for two people'],
            ['la noche', 'night'],
            ['la llave', 'key'],
            ['el pasaporte', 'passport'],
            ['el apellido', 'family name'],
            ['la planta', 'floor of a building'],
          ] },
          { t: 'tip', art: 'churro', md: 'Many people in Spain and Latin America have two family names: the first from the father and the second from the mother. At the hotel they may ask for *el primer apellido*, the first family name.' },
        ],
        [
          { t: 'text', md: 'To spell your name, you need the letters. Spanish has one letter more than English: **ñ**, as in *España*. Ask *¿Cómo se escribe?* (How do you write it?).' },
          { t: 'table', caption: 'The alphabet', explain: ['head'], quiz: true, head: ['Letter', 'Name', 'Letter', 'Name', 'Letter', 'Name'], rows: [
            ['a', 'a', 'j', 'jota', 'r', 'erre'],
            ['b', 'be', 'k', 'ka', 's', 'ese'],
            ['c', 'ce', 'l', 'ele', 't', 'te'],
            ['d', 'de', 'm', 'eme', 'u', 'u'],
            ['e', 'e', 'n', 'ene', 'v', 'uve'],
            ['f', 'efe', 'ñ', 'eñe', 'w', 'uve doble'],
            ['g', 'ge', 'o', 'o', 'x', 'equis'],
            ['h', 'hache', 'p', 'pe', 'y', 'i griega'],
            ['i', 'i', 'q', 'cu', 'z', 'zeta'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Latin America, people often say *be larga* for b and *ve corta* for v, and *doble ve* for w. Many people now say *ye* for y.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Tengo una ___ a nombre de Grace Mensah.', o: ['reserva', 'llave', 'planta'], why: '*Tengo una reserva*: I have a booking.' },
            { q: 'Una habitación para una persona es una habitación ___.', o: ['individual', 'doble', 'grande'], why: 'For one person: *individual*.' },
            { q: '¿Cómo se ___ su apellido?', o: ['escribe', 'llama', 'tiene'], why: '*¿Cómo se escribe?*: How do you write it?' },
            { q: 'El recepcionista da la llave y dice: «___»', o: ['Aquí tiene.', 'De nada.', 'Lo siento.'], why: 'When you give something to someone, you say *Aquí tiene*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the right form of tener.', items: [
            { q: 'Yo ___ una reserva para dos noches.', a: ['tengo'], why: 'With *yo*: *tengo*.' },
            { q: '¿Usted ___ su pasaporte?', a: ['tiene'], why: 'With *usted*: *tiene*.' },
            { q: 'Nosotros ___ la habitación doce.', a: ['tenemos'], why: 'With *nosotros*: *tenemos*.' },
            { q: '¿___ tú la llave? (tener)', a: ['Tienes'], why: 'With *tú*: *tienes*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'How do you spell it? Match the name and the letters.', pairs: [
            ['Kim', 'ka, i, eme'],
            ['Wu', 'uve doble, u'],
            ['Peña', 'pe, e, eñe, a'],
            ['Haq', 'hache, a, cu'],
            ['Vaz', 'uve, a, zeta'],
          ] },
          { t: 'ex', kind: 'odd', h: 'Which word is not about the hotel room?', items: [
            { o: ['el avión', 'la llave', 'la habitación', 'la cama'], why: '*el avión* is the plane. The other words are about your room.' },
            { o: ['el apellido', 'individual', 'doble', 'la planta'], why: '*el apellido* is your family name. The others describe the room or where it is.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Is there wifi? Where is breakfast?',
      about: 'Ask what there is in the hotel with hay, and where things are with está.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: '**Hay** means there is or there are. It has only one form, for one thing and for many things: *Hay una piscina. Hay dos ascensores.* For a question, say *¿Hay …?*\n\nTo ask **where** something is, use **estar**: *¿Dónde está el ascensor?* For more than one thing, use *están*: *¿Dónde están los aseos?*' },
          { t: 'table', caption: 'estar (to be, for places)', quiz: true, head: ['', 'estar'], rows: [
            ['yo', 'estoy'],
            ['tú', 'estás'],
            ['él, ella, usted', 'está'],
            ['nosotros, nosotras', 'estamos'],
            ['vosotros, vosotras', 'estáis'],
            ['ellos, ellas, ustedes', 'están'],
          ] },
          { t: 'examples', items: [
            { s: '¿**Hay** wifi en la habitación?', n: 'Is there wifi in the room?' },
            { s: '¿**Hay** toallas en el baño? – Sí, **hay** dos.', n: '*hay* for one or many things.' },
            { s: '¿Dónde **está** el restaurante? – **Está** en la planta baja.', n: 'One thing: *está*.' },
            { s: '¿Dónde **están** los ascensores? – **Están** a la derecha.', n: 'More than one: *están*.' },
          ] },
          { t: 'tip', art: 'churro', md: 'With *hay*, use *un*, *una* or a number, or no article: *Hay un gimnasio. Hay wifi.* With *está*, use *el* or *la*: *El gimnasio está en la planta baja.*' },
        ],
        [
          { t: 'dialogue', title: 'Preguntas en la recepción', lines: [
            { who: 'Carla', s: 'Perdone, ¿hay wifi en el hotel?' },
            { who: 'Recepcionista', s: 'Sí, es gratis. La contraseña está en la tarjeta de la habitación.' },
            { who: 'Carla', s: 'Gracias. ¿Y a qué hora es el desayuno?' },
            { who: 'Recepcionista', s: 'De siete a diez y media.' },
            { who: 'Carla', s: '¿Dónde está el comedor?' },
            { who: 'Recepcionista', s: 'Está en la planta baja, al lado del bar.' },
            { who: 'Carla', s: '¿Hay aparcamiento?' },
            { who: 'Recepcionista', s: 'No, lo siento. Pero hay un aparcamiento público enfrente.' },
          ] },
          { t: 'table', caption: 'In the hotel', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['el desayuno', 'breakfast'],
            ['el comedor', 'dining room'],
            ['el ascensor', 'lift'],
            ['la contraseña', 'password'],
            ['el aparcamiento', 'car park'],
            ['la planta baja', 'ground floor'],
            ['la toalla', 'towel'],
          ] },
        ],
        [
          { t: 'text', md: 'If something is wrong in the room, say what is missing with *No hay …*, or say *… no funciona* (… does not work).\n\nStart politely with *Perdone* or *Disculpe* (excuse me, with *usted*).' },
          { t: 'examples', items: [
            { s: 'Perdone, en mi habitación **no hay** toallas.', n: '*No hay*: there is no, there are no.' },
            { s: 'La ducha **no funciona**.', n: 'The shower does not work.' },
            { s: 'El aire acondicionado **no funciona**.', n: 'The air conditioning does not work.' },
            { s: 'La habitación **tiene** mucho ruido. ¿**Tiene** otra habitación?', n: '*ruido*: noise. *¿Tiene otra?*: Do you have another one?' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Latin America people often say *el estacionamiento* or *el parqueo* for a car park, and *el elevador* for the lift in Mexico.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose hay, está or están.', items: [
            { q: '¿___ un gimnasio en el hotel?', o: ['Hay', 'Está', 'Están'], why: 'Is there a gym? *Hay* + *un*.' },
            { q: '¿Dónde ___ el ascensor?', o: ['está', 'hay', 'están'], why: 'Where is one thing: *está*.' },
            { q: 'Los aseos ___ al lado del bar.', o: ['están', 'está', 'hay'], why: '*los aseos* is plural, so *están*.' },
            { q: 'En la habitación no ___ toallas.', o: ['hay', 'está', 'están'], why: 'There are no towels: *no hay*.' },
            { q: 'El comedor ___ en la planta baja.', o: ['está', 'hay', 'están'], why: '*el comedor*, one thing with *el*: *está*.' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Complete the sentences with the words.', extra: ['pasaporte', 'noche'], items: [
            { q: 'La ___ del wifi está en la tarjeta.', a: 'contraseña', why: 'The wifi password: *la contraseña*.' },
            { q: 'El ___ es de siete a diez.', a: 'desayuno', why: 'Breakfast is from seven to ten: *el desayuno*.' },
            { q: 'La ducha no ___.', a: 'funciona', why: 'The shower does not work: *no funciona*.' },
            { q: 'Mi habitación está en la segunda planta. Voy en ___.', a: 'ascensor', why: 'You go up in the lift: *en ascensor*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'key', o: ['la llave', 'la toalla', 'la cama'], why: 'This is *la llave*, the key to your room.' },
            { pic: 'phone', o: ['el móvil', 'el pasaporte', 'el ascensor'], why: 'This is *el móvil*. In Latin America people say *el celular*.' },
            { pic: 'clock', o: ['el despertador', 'el desayuno', 'el comedor'], why: 'This is *el despertador*, the alarm clock.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: '¿Dónde está el comedor, por favor?', why: '*¿Dónde está* + the place.' },
            { a: 'Perdone, la ducha no funciona.', why: '*no* goes before the verb: *no funciona*.' },
            { a: '¿Hay wifi en la habitación?', why: '*¿Hay* + the thing + the place.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: information for hotel guests',
      about: 'Read the information sheet in your room and find the times and places.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In many hotels there is a sheet of information in the room. Look for the times, the floors and what is free (*gratis*) or what you pay for.' },
          { t: 'reading', title: 'Información para los clientes', md: '**Hostal Las Palmeras**\n\nBienvenidos a nuestro hostal.\n\n**Desayuno**: en el comedor, en la planta baja, de 7:30 a 10:30. El desayuno cuesta 8 euros.\n\n**Wifi**: gratis en todo el hostal. La contraseña es *palmeras2027*.\n\n**Recepción**: abierta de 8:00 a 23:00. Por la noche, llame al número de la tarjeta.\n\n**Terraza**: en la cuarta planta. Hay sillas y mesas para los clientes. La terraza cierra a las 23:00.\n\n**Salida**: el último día, usted deja la habitación antes de las 12:00. Después, su maleta puede estar en la recepción toda la tarde.\n\nNo hay aparcamiento en el hostal, pero hay un aparcamiento público en la calle Mayor.\n\n¡Felices vacaciones!' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the information. True, false or not given?', items: [
            { q: 'El desayuno es gratis.', a: 'f', why: '*El desayuno cuesta 8 euros.*' },
            { q: 'El comedor está en la planta baja.', a: 't', why: '*en el comedor, en la planta baja*.' },
            { q: 'Hay wifi en las habitaciones.', a: 't', why: 'Wifi is free *en todo el hostal*, in the whole hostel.' },
            { q: 'La terraza está en la segunda planta.', a: 'f', why: 'The terrace is *en la cuarta planta*, on the fourth floor.' },
            { q: 'En la terraza hay una piscina.', a: 'ng', why: 'The text says there are chairs and tables. It does not talk about a pool.' },
            { q: 'Hay aparcamiento en el hostal.', a: 'f', why: '*No hay aparcamiento en el hostal.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Llegas a las 23:30. La recepción ___.', o: ['está cerrada', 'está abierta', 'está en la terraza'], why: 'Reception is open from 8:00 to 23:00, so at 23:30 it is closed.' },
            { q: 'Tu avión sale a las 18:00. Tu maleta puede estar ___.', o: ['en la recepción', 'en la terraza', 'en el comedor'], why: '*Su maleta puede estar en la recepción toda la tarde.*' },
            { q: '¿Dónde hay un aparcamiento?', o: ['en la calle Mayor', 'en la planta baja', 'en la cuarta planta'], why: '*hay un aparcamiento público en la calle Mayor*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two words that tell you something costs nothing or something is not there.', items: [
            { s: 'Wifi: [gratis]. Aparcamiento: [no hay].', why: '*gratis*: it costs nothing. *no hay*: there is none.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Buenas tardes. ___ una reserva a nombre de Sara Novak.', o: ['Tengo', 'Tiene', 'Hay'], why: 'I have a booking: *tengo*.' },
      { q: '¿Dónde ___ los ascensores?', o: ['están', 'está', 'hay'], why: '*los ascensores* is plural: *están*.' },
      { q: '¿___ toallas en la habitación?', o: ['Hay', 'Está', 'Están'], why: 'Are there towels? *¿Hay …?*' },
      { q: 'Una habitación para dos personas es una habitación ___.', o: ['doble', 'individual', 'baja'], why: 'For two people: *doble*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: '¿Usted ___ su pasaporte? (tener)', a: ['tiene'], why: 'With *usted*: *tiene*.' },
      { q: 'El restaurante ___ en la primera planta. (estar)', a: ['está'], why: 'One place: *está*.' },
      { q: 'El aire acondicionado no ___. (funcionar)', a: ['funciona'], why: 'It does not work: *no funciona*.' },
      { q: '¿Cómo se ___ su apellido? – Ele, o, pe, e, zeta.', a: ['escribe'], why: '*¿Cómo se escribe?*: How do you write it?' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
      ['¿A qué hora es el desayuno?', 'De siete a diez.'],
      ['¿Hay aparcamiento?', 'No, lo siento.'],
      ['¿Dónde está el comedor?', 'En la planta baja.'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
      { s: 'En el hotel [está] una piscina.', a: ['hay'], why: 'There is a pool: *hay una piscina*. Use *está* with *el* or *la*.' },
    ] },
  ],
};
