// Spanish B1 for moving abroad, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Neighbours and everyday life',
  goal: 'Live well with neighbours: building rules, rubbish, parcels and polite complaints.',
  art: 'cat',
  tags: { skills: ['speaking', 'reading', 'vocabulary', 'grammar'], topics: ['neighbours', 'building-rules', 'recycling', 'te-importaria', 'polite-complaints'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'The rules of the building',
      about: 'The building community, quiet hours and the right container for your rubbish.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In Spain most people live in flats. The owners of a building form **la comunidad de vecinos**: they meet at **la junta de vecinos**, choose a president and often pay an administrator, **el administrador de fincas**, to look after the building. The community has its own rules, **las normas de la comunidad**, about noise, the shared spaces and rubbish.' },
          { t: 'table', caption: 'In the building', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['el portal', 'the entrance hall of the building'],
            ['el rellano', 'the space outside the doors on each floor'],
            ['el buzón', 'the letterbox'],
            ['el portero / la portera', 'a person who looks after the building'],
            ['las zonas comunes', 'the shared spaces: stairs, lift, yard'],
            ['el horario de descanso', 'the quiet hours'],
            ['la junta de vecinos', 'the meeting of the owners'],
          ] },
          { t: 'tip', art: 'owl', md: 'Quiet hours depend on the building rules and on your town, but at night people expect silence: no loud music, no drilling and no moving furniture. If you rent, your landlord should give you the community rules.' },
        ],
        [
          { t: 'text', md: 'Rules are often written with **está prohibido** + infinitive, **no se puede** + infinitive, **hay que** + infinitive or **se ruega** + infinitive. Notes to all neighbours also use the negative *ustedes* command: *No **dejen** las bicis en el portal*.' },
          { t: 'examples', items: [
            { s: '**Está prohibido** fumar en el ascensor.', n: 'A strong rule: it is not allowed.' },
            { s: '**No se puede** tender la ropa en la fachada.', n: '*No se puede*: you cannot. *tender la ropa*: hang out washing.' },
            { s: '**Hay que** cerrar siempre la puerta del portal.', n: '*hay que*: you have to. It is for everybody.' },
            { s: '**Se ruega** no hacer ruido después de las once de la noche.', n: 'Very formal and polite: please do not.' },
            { s: 'Por favor, **no dejen** bolsas de basura en el rellano.', n: 'Negative command with *ustedes*: *no dejen*.' },
          ] },
        ],
        [
          { t: 'text', md: 'In many cities, rubbish goes into **containers in the street**, sorted by colour. The colours and rules can change from town to town, so look at the stickers on the containers. Big things, old furniture and electrical items usually go to a **punto limpio**, a recycling centre.' },
          { t: 'ex', kind: 'sort', h: 'Where does it go? Use the usual colours in many Spanish towns.', groups: ['amarillo (envases)', 'azul (papel)', 'verde (vidrio)'], items: [
            { s: 'una botella de plástico', g: 0, why: 'Plastic packaging: the yellow container.' },
            { s: 'una lata de refresco', g: 0, why: 'Cans are packaging too: yellow.' },
            { s: 'un periódico viejo', g: 1, why: 'Paper: the blue container.' },
            { s: 'una caja de cartón', g: 1, why: 'Cardboard goes with paper: blue.' },
            { s: 'una botella de vino', g: 2, why: 'Glass: the green container.' },
            { s: 'un tarro de mermelada', g: 2, why: 'A glass jar: green. Take off the lid first.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word for the rules.', items: [
            { q: 'Está ___ aparcar las bicis en el portal.', o: ['prohibido', 'prohibida', 'prohibir'], why: '*Está prohibido* + infinitive: the masculine form.' },
            { q: '___ que sacar la basura por la noche.', o: ['Hay', 'Tiene', 'Se ruega'], why: '*Hay que* + infinitive: something everybody must do.' },
            { q: 'Por favor, no ___ la puerta del portal abierta.', o: ['dejen', 'dejan', 'dejar'], why: 'Negative command with *ustedes*: *no dejen*.' },
            { q: 'Se ruega no ___ ruido por la noche.', o: ['hacer', 'hagan', 'hace'], why: '*Se ruega* + infinitive.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the place and what happens there.', pairs: [
            ['el buzón', 'aquí recibe sus cartas'],
            ['el punto limpio', 'aquí lleva un sofá viejo o una tele rota'],
            ['la junta de vecinos', 'aquí los propietarios hablan del edificio'],
            ['el rellano', 'aquí están las puertas de los pisos de cada planta'],
            ['el contenedor verde', 'aquí tira las botellas de vidrio'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Asking for and offering help',
      about: 'Parcels, borrowing things and favours between neighbours, with ¿te importaría…?',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A good relationship with your neighbours helps a lot: someone can take in a parcel for you, water your plants or lend you a ladder. To ask for a favour politely, use **¿Te importaría** + infinitive? (would you mind…?) or, with *usted*, **¿Le importaría…?** To ask if *you* can do something, use **¿Te importa que** + subjunctive?' },
          { t: 'examples', items: [
            { s: '¿**Te importaría** recoger un paquete por mí?', n: '*importaría* + infinitive: you ask the other person to do it.' },
            { s: '¿**Le importaría** sujetarme la puerta?', n: 'The same with *usted*: *le importaría*.' },
            { s: '¿**Te importa que** **deje** la bici aquí un momento?', n: 'You ask if *you* can do it: *que* + subjunctive *deje*.' },
            { s: '¿**Me prestas** la escalera esta tarde?', n: 'Direct but friendly: *prestar*, to lend.' },
            { s: '¿**Quieres que** te **ayude** con las bolsas?', n: 'Offering help: *¿Quieres que…?* + subjunctive.' },
          ] },
          { t: 'tip', art: 'churro', md: 'Neighbours of a similar age often use *tú*; with older neighbours, many people start with *usted*. Answers: *¡Claro!*, *No me importa*, *Sin problema*. In Latin America *usted* is more common, and *ustedes* is the only plural: *¿Les importaría…?*' },
        ],
        [
          { t: 'dialogue', title: 'En el rellano', lines: [
            { who: 'Clara', s: 'Hola, Mateo. Perdona que te moleste. ¿Te importaría recoger un paquete por mí mañana? Yo trabajo todo el día.' },
            { who: 'Mateo', s: 'No, claro que no me importa. Mañana estoy en casa hasta las cinco.' },
            { who: 'Clara', s: '¡Muchas gracias! Va a llegar por la mañana. Es una caja pequeña.' },
            { who: 'Mateo', s: 'Sin problema. Cuando vuelvas, llama a mi puerta y te lo doy.' },
            { who: 'Clara', s: 'Genial. Y si alguna vez necesitas algo, dímelo.' },
            { who: 'Mateo', s: 'Pues ahora que lo dices… ¿me prestas tu taladro el sábado? Quiero colgar unas estanterías.' },
            { who: 'Clara', s: 'Claro. Pero no lo uses antes de las diez, que a esa hora los vecinos todavía duermen.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Clara va a estar en casa cuando llegue el paquete.', a: 'f', why: '*Yo trabajo todo el día*: she is at work.' },
            { q: 'Mateo le dará el paquete a Clara cuando ella vuelva.', a: 't', why: '*Cuando vuelvas, llama a mi puerta y te lo doy.*' },
            { q: 'Mateo quiere usar el taladro el sábado muy temprano.', a: 'f', why: 'Clara asks him not to use it before ten.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: '¿Te importaría ___ mis plantas esta semana?', o: ['regar', 'riegues', 'riegas'], why: '*¿Te importaría* + infinitive: *regar*.' },
            { q: '¿Te importa que ___ el coche delante de tu garaje un momento?', o: ['aparque', 'aparco', 'aparcar'], why: '*¿Te importa que* + subjunctive: *aparque* (c becomes qu).' },
            { q: '¿Quieres que te ___ con la mudanza?', o: ['ayude', 'ayudo', 'ayudar'], why: '*¿Quieres que* + subjunctive.' },
            { q: '¿___ importaría bajar la música, señora Gómez?', o: ['Le', 'Te', 'Se'], why: 'With *usted*: *le importaría*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the requests and offers.', items: [
            { q: '¿Me ___ tu escalera esta tarde? (prestar)', a: ['prestas'], why: '*prestar*, with *tú*: *me prestas*.' },
            { q: '¿Te importa que ___ la bici en el rellano? (dejar, yo)', a: ['deje'], why: '*que* + subjunctive: *deje*.' },
            { q: '¿Te ___ recoger un paquete por mí? (importar)', a: ['importaría'], why: 'Polite request: *¿Te importaría…?*' },
            { q: 'Si necesitas algo, ___. (decírmelo, tú)', a: ['dímelo'], why: 'Command with *tú* + *me* + *lo*: *dímelo*, with an accent.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A note and a polite complaint',
      about: 'Read a notice from the building community and complain politely, in person and in writing.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Aviso a todos los vecinos', md: 'Estimados vecinos:\n\nEn las últimas semanas hemos recibido varias quejas. Les recordamos algunas normas de la comunidad:\n\nNo dejen bolsas de basura en el portal ni en los rellanos. Los contenedores están en la esquina de la calle y la basura se saca por la noche.\n\nEstá prohibido aparcar bicicletas y carritos en el portal, porque bloquean la salida. Pueden guardarlos en el cuarto de bicis del sótano. Si necesitan una llave, pídanla al portero.\n\nSe ruega no hacer ruidos fuertes entre las once de la noche y las ocho de la mañana. Si van a hacer obras en su piso, avisen antes a los vecinos y respeten el horario.\n\nLa próxima junta de vecinos será el jueves 14 a las ocho de la tarde en el portal.\n\nGracias por su colaboración.\nLa Junta de la Comunidad' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the notice. True, false or not given?', items: [
            { q: 'Se puede dejar la basura en el rellano por la mañana.', a: 'f', why: '*No dejen bolsas de basura en el portal ni en los rellanos.*' },
            { q: 'Hay un sitio para las bicicletas en el sótano.', a: 't', why: '*el cuarto de bicis del sótano*.' },
            { q: 'La llave del cuarto de bicis la tiene el portero.', a: 't', why: '*pídanla al portero*.' },
            { q: 'Las obras están prohibidas en el edificio.', a: 'f', why: 'They are allowed: tell the neighbours first and respect the hours.' },
            { q: 'En la junta van a hablar del precio del ascensor.', a: 'ng', why: 'The notice gives the day and time of the meeting, not what they will talk about.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the rules written with a negative command.', items: [
            { s: '[No dejen] bolsas de basura en el portal. Si necesitan una llave, pídanla al portero. Se ruega no hacer ruido. [No aparquen] las bicis en la entrada.', why: '*No* + the *ustedes* subjunctive: *no dejen*, *no aparquen*.' },
          ] },
        ],
        [
          { t: 'text', md: 'If a neighbour is too loud, first talk to them in a friendly way. Start softly with **Perdona que te moleste, pero…** (sorry to bother you, but…), say what the problem is, and ask with the condicional: **¿Podrías…?** End positively.' },
          { t: 'dialogue', title: 'Una queja amable', lines: [
            { who: 'Inés', s: 'Hola, buenas noches. Soy Inés, la vecina del tercero. Perdona que te moleste a estas horas.' },
            { who: 'Andrés', s: 'Hola, no pasa nada. ¿Qué ocurre?' },
            { who: 'Inés', s: 'Es que la música se oye mucho en mi piso y mañana me levanto a las seis. ¿Podrías bajarla un poco?' },
            { who: 'Andrés', s: 'Uy, lo siento muchísimo, no me había dado cuenta. Ahora mismo la bajo.' },
            { who: 'Inés', s: 'Muchas gracias, de verdad. ¡Que lo paséis bien!' },
          ] },
        ],
        [
          { t: 'reading', title: 'Nota en la puerta', md: 'Hola, vecinos del cuarto B:\n\nSoy Lucas, del tercero B. Perdonad la nota, pero no os he encontrado en casa. Desde hace unas semanas, la lavadora se oye mucho en mi dormitorio por la noche, a veces a la una o las dos. ¿Os importaría ponerla antes de las once?\n\nSi queréis hablar, llamad a mi puerta cuando queráis.\n\n¡Muchas gracias y un saludo!\nLucas' },
          { t: 'ex', kind: 'choice', h: 'Read Lucas’s note. Choose the answer.', items: [
            { q: 'Lucas escribe una nota porque ___', o: ['no ha encontrado a los vecinos en casa.', 'no quiere hablar con ellos nunca.', 'la junta se lo ha pedido.'], why: '*no os he encontrado en casa*.' },
            { q: 'Lucas pide a los vecinos que ___', o: ['pongan la lavadora antes de las once.', 'no usen nunca la lavadora.', 'compren una lavadora nueva.'], why: '*¿Os importaría ponerla antes de las once?*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build polite sentences for a complaint.', items: [
            { a: 'Perdona que te moleste a estas horas.', why: '*Perdona que* + subjunctive *moleste*: a soft start.' },
            { a: '¿Podrías bajar un poco la música?', why: 'The condicional *podrías* makes the request polite.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'La entrada del edificio, donde están los buzones, es ___.', o: ['el portal', 'el rellano', 'el sótano'], why: '*el portal*: the entrance hall.' },
      { q: 'Las botellas de vidrio van normalmente al contenedor ___.', o: ['verde', 'azul', 'amarillo'], why: 'In many Spanish towns, glass goes into the green container.' },
      { q: '¿Te importaría ___ mi paquete?', o: ['recoger', 'recojas', 'recoges'], why: '*¿Te importaría* + infinitive.' },
      { q: '¿Te importa que ___ la ventana?', o: ['abra', 'abro', 'abrir'], why: '*¿Te importa que* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Está ___ fumar en el ascensor.', a: ['prohibido'], why: '*Está prohibido* + infinitive.' },
      { q: 'Por favor, no ___ las bicis en el portal. (dejar, ustedes)', a: ['dejen'], why: 'Negative command with *ustedes*: *no dejen*.' },
      { q: 'Perdona que te ___. (molestar)', a: ['moleste'], why: '*Perdona que* + subjunctive.' },
      { q: '¿___ bajar un poco la música? (poder, tú)', a: ['Podrías'], why: 'Polite request with the condicional: *podrías*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Un sofá viejo se lleva al punto limpio.', a: 't', why: 'Big things and electrical items go to the *punto limpio*.' },
      { q: '*Se ruega no hacer ruido* es una forma muy informal de pedir algo.', a: 'f', why: '*Se ruega* is very formal.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Quieres que te ayude con las bolsas?', why: 'Offering help: *¿Quieres que* + subjunctive.' },
      { a: 'Hay que cerrar la puerta del portal.', why: '*Hay que* + infinitive.' },
    ] },
  ],
};
