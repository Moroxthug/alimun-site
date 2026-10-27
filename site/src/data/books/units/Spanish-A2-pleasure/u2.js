// Spanish A2 for travel, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'At the station and airport',
  goal: 'Travel by train, bus and plane.',
  art: 'dog',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['train', 'airport', 'salir-llegar', 'indirect-questions', 'announcements'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Tickets, platforms and gates',
      about: 'Buy a ticket, find your train or gate and talk about delays.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'dialogue', title: 'En la taquilla', lines: [
            { who: 'Tomás', s: 'Buenos días. Un billete para Valencia, por favor.' },
            { who: 'Empleada', s: '¿Solo ida o ida y vuelta?' },
            { who: 'Tomás', s: 'Ida y vuelta. Voy hoy y vuelvo el domingo.' },
            { who: 'Empleada', s: 'Son ochenta y nueve euros. ¿Ventanilla o pasillo?' },
            { who: 'Tomás', s: 'Ventanilla, por favor. ¿Tengo que hacer transbordo?' },
            { who: 'Empleada', s: 'No, es directo. El tren sale a las diez y doce de la vía cuatro.' },
            { who: 'Tomás', s: '¿Y a qué hora llega a Valencia?' },
            { who: 'Empleada', s: 'A las dos y treinta y cinco. ¡Buen viaje!' },
          ] },
          { t: 'text', md: 'Two verbs you need all the time: **salir** (to leave) and **llegar** (to arrive). *Salir* is irregular only with *yo*: *salgo*. The train *sale de* a place and *llega a* a place: *El tren sale de Madrid y llega a Valencia.*' },
        ],
        [
          { t: 'table', caption: 'At the station and at the airport', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['el billete', 'ticket'],
            ['solo ida / ida y vuelta', 'one way / return'],
            ['la vía / el andén', 'platform'],
            ['hacer transbordo', 'to change trains'],
            ['el retraso', 'delay'],
            ['el vuelo', 'flight'],
            ['la tarjeta de embarque', 'boarding pass'],
            ['la puerta de embarque', 'gate'],
            ['el equipaje de mano', 'hand luggage'],
            ['facturar la maleta', 'to check in your suitcase'],
          ] },
          { t: 'examples', items: [
            { s: 'El tren **tiene un retraso de veinte minutos**.', n: 'The train is 20 minutes late. You also hear *lleva veinte minutos de retraso*.' },
            { s: 'Tienes que **hacer transbordo** en Zaragoza.', n: 'You get off one train and take another one.' },
            { s: 'El embarque empieza a las 9:40 en **la puerta B12**.', n: 'At the airport, the gate is *la puerta*.' },
            { s: '¿Cuántas maletas quiere **facturar**?', n: 'A question at the check-in desk.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In much of Latin America a ticket is *el boleto* and a suitcase can be *la valija* (Argentina, Uruguay). The bus between cities has many names: *el autobús*, *el camión* in Mexico, *el micro* in Chile and Argentina.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and the sentence.', pairs: [
            ['la tarjeta de embarque', 'La necesito en la puerta.'],
            ['la vía', 'Aquí para el tren.'],
            ['el retraso', 'El tren llega más tarde.'],
            ['hacer transbordo', 'cambiar de tren'],
            ['el equipaje de mano', 'Esta bolsa la llevo conmigo en el avión.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Va a Valencia el viernes y vuelve el domingo. Dice: «Un billete para Valencia, ___».', o: ['ida y vuelta', 'solo ida', 'hacer transbordo'], why: 'You come back, so you need a return ticket: *ida y vuelta*.' },
            { q: 'El tren ___ a las diez de la vía cuatro.', o: ['sale', 'llega', 'sube'], why: 'The train leaves from a platform: *salir*.' },
            { q: '¿A qué hora ___ el vuelo a Lima?', o: ['llega', 'llegan', 'llego'], why: '*el vuelo* is *él*: *llega*. You arrive *a* a place: *llegar a*.' },
            { q: 'Yo ___ de casa a las siete para coger el tren.', o: ['salgo', 'salo', 'sale'], why: '*salir* with *yo*: *salgo*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the present tense.', verb: 'salir', tense: 'present tense', rows: [
            ['yo', 'salgo', 'Only the *yo* form is irregular.'],
            ['tú', 'sales'],
            ['él, ella, usted', 'sale'],
            ['nosotros', 'salimos'],
            ['vosotros', 'salís|salis', 'In Latin America, *ustedes salen* is used for *vosotros* too.'],
            ['ellos, ellas, ustedes', 'salen'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the right form of the verb.', items: [
            { q: 'El autobús ___ a las 8:05. (salir)', a: ['sale'], why: '*el autobús* is *él*: *sale*.' },
            { q: 'Nosotros ___ a Bilbao a las dos. (llegar)', a: ['llegamos'], why: '*nosotros* + *-amos*: *llegamos*.' },
            { q: 'El tren lleva quince minutos de ___.', a: ['retraso'], why: 'A train that is late *lleva … minutos de retraso*.' },
            { q: 'En el mostrador puedes ___ la maleta.', a: ['facturar'], why: 'At the airport desk you *facturas* your suitcase.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Asking for help and reading messages',
      about: 'Ask people for help and understand short written messages about your train or flight.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To ask a stranger for help, start with *Perdone* or *Disculpe* and use *usted*. A question that starts with *¿Sabe…?* or *¿Me podría decir…?* is very polite. After it, keep the question word with its accent: *¿Sabe dónde está la vía 7?*\n\nFor a yes/no question inside, use *si*: *¿Sabe si este tren va a Granada?*' },
          { t: 'examples', items: [
            { s: '**Perdone**, ¿dónde está la vía siete?', n: 'A short, direct question.' },
            { s: '¿**Sabe dónde** está la puerta B12?', n: '*dónde* keeps its accent after *¿Sabe…?*' },
            { s: '¿**Me podría decir a qué hora** sale el autobús para Burgos?', n: 'Very polite. The question word stays with its accent.' },
            { s: '¿**Sabe si** este tren va a Granada?', n: 'A yes/no question inside another: *si*, with no accent.' },
            { s: '¿Dónde **se puede** comprar un billete?', n: '*se puede*: can people, can one.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'En el andén', lines: [
            { who: 'Aiko', s: 'Perdone, ¿me puede ayudar? ¿Sabe si este tren va a Granada?' },
            { who: 'Señor', s: 'No, este va a Málaga. El tren para Granada sale de la vía seis.' },
            { who: 'Aiko', s: '¿Y sabe a qué hora sale?' },
            { who: 'Señor', s: 'A las once y cuarto, pero hoy tiene retraso. Mire la pantalla.' },
            { who: 'Aiko', s: 'Ah, sí: veinticinco minutos de retraso. ¿Dónde puedo comprar un café?' },
            { who: 'Señor', s: 'Allí, al lado de la salida, hay una cafetería.' },
            { who: 'Aiko', s: 'Muchas gracias.' },
            { who: 'Señor', s: 'De nada. ¡Buen viaje!' },
          ] },
          { t: 'tip', art: 'owl', md: 'Messages about your trip often come by text or in an app. Look for the key words: *retraso* (delay), *cancelado* (cancelled), *cambio de vía* or *cambio de puerta* (a new platform or gate), *embarque* (boarding).' },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the polite questions.', items: [
            { a: '¿Sabe dónde está la puerta B12?', why: '*¿Sabe*, then the question word *dónde* and the verb *está*.' },
            { a: '¿Me podría decir a qué hora sale el tren?', why: '*¿Me podría decir*, then *a qué hora* and the verb.' },
            { a: '¿Sabe si este autobús va al aeropuerto?', why: 'A yes/no question inside: *si*, then the sentence.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '¿Sabe ___ este tren para en Córdoba?', o: ['si', 'sí', 'qué'], why: 'A yes/no question inside: *si* with no accent. *sí* means yes.' },
            { q: '¿Me podría decir ___ está la salida?', o: ['dónde', 'donde', 'si'], why: 'A question word keeps its accent: *dónde*.' },
            { q: '___, ¿dónde está la parada del autobús?', o: ['Perdone', 'Perdona', 'Perdón usted'], why: 'To a stranger with *usted*: *Perdone*. *Perdona* is for *tú*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Read the messages on your phone.' },
          { t: 'reading', title: 'Mensajes de viaje', md: '**Tren 3142 Madrid – Sevilla:** Hoy su tren sale de la vía 9, no de la vía 4. Disculpe las molestias.\n\n**Vuelo IB 618 a Bogotá:** El vuelo tiene un retraso de 45 minutos. Nueva hora de salida: 13:15.\n\n**Autobús 22:** El autobús de las 18:30 está cancelado. El siguiente sale a las 19:00.\n\n**Vuelo UX 205 a Roma:** El embarque empieza a las 9:40 en la puerta B12. Por favor, tenga preparada su tarjeta de embarque.' },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'El tren a Sevilla sale de la vía 4.', a: 'f', why: 'Today it leaves *de la vía 9, no de la vía 4*.' },
            { q: 'El vuelo a Bogotá sale más tarde.', a: 't', why: '*un retraso de 45 minutos*.' },
            { q: 'Hoy no hay autobús a las 18:30.', a: 't', why: 'It is *cancelado*.' },
            { q: 'Para el vuelo a Roma hay que ir a la puerta B12.', a: 't', why: '*El embarque empieza … en la puerta B12.*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a departure board and a notice',
      about: 'Read a departure board and a notice at the station.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'At the station, the departure board is *el panel de salidas*. *Destino* is where the train goes; *observaciones* tells you about delays and changes.' },
          { t: 'table', caption: 'Salidas', head: ['Hora', 'Tren', 'Destino', 'Vía', 'Observaciones'], rows: [
            ['10:05', 'AV 2131', 'Barcelona', '3', ''],
            ['10:12', 'MD 4410', 'Valencia', '4', 'Retraso 15 min'],
            ['10:30', 'R 7720', 'Toledo', '1', 'Cancelado'],
            ['10:45', 'AV 2185', 'Sevilla', '7', 'Cambio de vía: 9'],
            ['11:00', 'MD 4532', 'Zaragoza', '2', ''],
          ] },
          { t: 'ex', kind: 'choice', h: 'Look at the board and choose the right answer.', items: [
            { q: '¿A qué hora sale ahora el tren para Valencia?', o: ['a las 10:27', 'a las 10:12', 'a las 10:15'], why: '10:12 and a delay of 15 minutes is 10:27.' },
            { q: '¿De qué vía sale el tren para Sevilla?', o: ['de la vía 9', 'de la vía 7', 'de la vía 3'], why: '*Cambio de vía: 9.* The platform has changed from 7 to 9.' },
            { q: 'Quiere ir a Toledo a las 10:30. ¿Qué pasa?', o: ['El tren no sale.', 'El tren sale tarde.', 'El tren sale de otra vía.'], why: 'The train to Toledo is *cancelado*.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Aviso a los viajeros', md: '**Obras en la estación**\n\nDel 3 al 28 de mayo hay obras en la estación. Durante este tiempo, la entrada principal está cerrada. Por favor, utilice la entrada de la calle Alcalá.\n\nLas taquillas están en el primer piso. También puede comprar su billete en las máquinas o en la aplicación.\n\nLos trenes a Toledo no salen de esta estación los fines de semana. Hay autobuses gratuitos a la estación del Norte cada 30 minutos, desde la parada de delante de la cafetería.\n\nGracias por su comprensión.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the notice. True, false or not given?', items: [
            { q: 'Las obras duran casi todo el mes de mayo.', a: 't', why: '*Del 3 al 28 de mayo*.' },
            { q: 'Se puede entrar por la entrada principal.', a: 'f', why: '*la entrada principal está cerrada*.' },
            { q: 'Solo se pueden comprar billetes en la taquilla.', a: 'f', why: 'You can also use *las máquinas o la aplicación*.' },
            { q: 'El sábado, los viajeros a Toledo van en autobús a otra estación.', a: 't', why: 'At weekends there are free buses *a la estación del Norte*.' },
            { q: 'El autobús a la estación del Norte cuesta dos euros.', a: 'f', why: 'The buses are *gratuitos*: free.' },
            { q: 'La cafetería abre a las seis de la mañana.', a: 'ng', why: 'The notice does not say when the café opens.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword.', words: [
            { a: 'billete', clue: 'Lo compras en la taquilla para viajar.' },
            { a: 'retraso', clue: 'El tren llega tarde: tiene un…' },
            { a: 'vuelo', clue: 'Un viaje en avión.' },
            { a: 'maleta', clue: 'Llevas tu ropa en ella.' },
            { a: 'destino', clue: 'El lugar adonde va el tren.' },
            { a: 'puerta', clue: 'En el aeropuerto, el embarque es en la…' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Usted vuelve a casa el domingo. Compra un billete de ___.', o: ['ida y vuelta', 'solo ida', 'embarque'], why: 'You come back: a return ticket, *ida y vuelta*.' },
      { q: 'Yo ___ del hotel a las ocho.', o: ['salgo', 'salo', 'sale'], why: '*salir* with *yo*: *salgo*.' },
      { q: '¿Sabe ___ el vuelo sale a su hora?', o: ['si', 'sí', 'dónde'], why: 'A yes/no question inside: *si*, without an accent.' },
      { q: 'En el aeropuerto, la maleta grande se ___.', o: ['factura', 'embarca', 'cancela'], why: 'You check in a suitcase: *facturar la maleta*.' },
      { q: 'En el panel pone «Cancelado». El tren ___.', o: ['no sale', 'sale tarde', 'sale de otra vía'], why: '*cancelado*: the train does not run.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'El tren ___ a Sevilla a las tres. (llegar)', a: ['llega'], why: '*el tren* is *él*: *llega*.' },
      { q: 'No es directo: tienes que hacer ___ en Madrid.', a: ['transbordo'], why: 'To change trains: *hacer transbordo*.' },
      { q: '¿Me podría decir ___ está la puerta B12?', a: ['dónde', 'donde'], why: 'Asking for a place: *dónde*, with its accent.' },
      { q: 'Para subir al avión necesitas la tarjeta de ___.', a: ['embarque'], why: 'The boarding pass is *la tarjeta de embarque*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: '¿Sabe si este tren va a Granada?', why: '*¿Sabe si*, then the sentence.' },
      { a: '¿A qué hora sale el próximo autobús?', why: '*¿A qué hora*, then the verb *sale* and the bus.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: '«Cambio de vía» quiere decir que el tren sale de otra vía.', a: 't', why: '*cambio de vía*: a new platform.' },
      { q: 'El equipaje de mano va en la parte de abajo del avión.', a: 'f', why: 'Hand luggage goes with you in the cabin.' },
    ] },
  ],
};
