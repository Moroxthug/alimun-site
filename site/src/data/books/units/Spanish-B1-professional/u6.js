// Spanish B1 for work, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Problems and solutions',
  goal: 'Explain problems, deal with complaints and agree on solutions.',
  art: 'cactus',
  tags: { skills: ['speaking', 'writing', 'reading'], topics: ['problems', 'cause-and-result', 'complaints', 'promises', 'para-que-subjunctive'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'What is the problem?',
      about: 'Describe a problem, say why it happened and apologise.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'To describe a problem at work, say **what** happened and **why**. For the cause, use **porque** in the middle of the sentence, or **como** at the start. For the result, use **por eso** or **así que**.' },
          { t: 'examples', items: [
            { s: 'El pedido llegó tarde **porque** el camión tuvo una avería.', n: '*porque*: the cause, in the middle of the sentence.' },
            { s: '**Como** el sistema no funcionaba, no pudimos enviar las facturas.', n: '*como* + cause at the **start** of the sentence.' },
            { s: 'Faltan dos personas en el almacén. **Por eso** vamos con retraso.', n: '*por eso*: the result.' },
            { s: 'Se ha estropeado la impresora, **así que** no puedo imprimir el contrato.', n: '*así que*: the result, after a comma.' },
            { s: '**Se nos ha olvidado** enviar la invitación.', n: 'With *se* the problem sounds less like someone’s fault: it just happened.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not start a sentence with *porque* to give a cause: *Porque llovía, llegamos tarde* sounds wrong. Say *Como llovía, llegamos tarde*. *Porque* is fine at the start only to answer a question: *¿Por qué llegasteis tarde? Porque llovía.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'porque, como or por eso? Choose.', items: [
            { q: '___ el tren no llegó, la reunión empezó sin mí.', o: ['Como', 'Porque', 'Por eso'], why: 'A cause at the start of the sentence: *como*.' },
            { q: 'No he terminado el informe ___ me faltan los datos de marzo.', o: ['porque', 'como', 'por eso'], why: 'The cause in the middle: *porque*.' },
            { q: 'El cliente no ha pagado. ___ no podemos enviar el pedido.', o: ['Por eso', 'Como', 'Porque'], why: 'The result: *por eso*.' },
            { q: 'El programa no funciona, ___ hoy trabajamos con papel.', o: ['así que', 'como', 'porque'], why: 'The result after a comma: *así que*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the problem and its result.', pairs: [
            ['Se ha estropeado el ascensor,', 'así que tenemos que subir por la escalera.'],
            ['Como no había conexión a internet,', 'no pudimos hacer la videollamada.'],
            ['Faltan tres compañeros por gripe.', 'Por eso vamos con retraso.'],
            ['El proveedor no nos envió las piezas,', 'así que la fábrica estuvo parada dos días.'],
          ] },
        ],
        [
          { t: 'text', md: 'When the problem is your company’s fault, **apologise** clearly and take responsibility. Then explain briefly and say what you will do. Avoid long excuses.' },
          { t: 'table', caption: 'Apologising at work', explain: ['head', 'col0'], quiz: true, head: ['', 'Formal (usted)', 'Colleague (tú)'], rows: [
            ['Saying sorry', 'Le pido disculpas por el retraso.', 'Perdona por el retraso.'],
            ['A written apology', 'Lamentamos las molestias.', 'Siento mucho lo de ayer.'],
            ['Taking responsibility', 'Ha sido un error nuestro.', 'Ha sido culpa mía.'],
            ['Promising', 'No volverá a pasar.', 'No volverá a pasar, te lo prometo.'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: '[Porque] no funcionaba el sistema, no pudimos enviar las facturas.', a: ['Como'], why: 'A cause at the start of the sentence: *como*, not *porque*.' },
            { s: 'Lamentamos [los molestias] causadas.', a: ['las molestias'], why: '*la molestia* is feminine: *las molestias*.' },
            { s: 'Ha sido un error [nuestra].', a: ['nuestro'], why: '*error* is masculine: *un error nuestro*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Solutions and promises',
      about: 'Suggest solutions, agree on one, and promise what you will do.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To suggest a solution, use the condicional or a question: *Podríamos…*, *Lo mejor sería…*, *¿Qué tal si…?*. To agree on a solution, say *Me parece bien* or *De acuerdo*. To promise, use the **future**: *Le enviaremos…*, *Me encargo yo*.' },
          { t: 'dialogue', title: 'Faltan personas en el almacén', lines: [
            { who: 'Marta', s: 'Tenemos un problema: esta semana faltan tres personas en el almacén y los pedidos van con retraso.' },
            { who: 'Tomás', s: '¿Por qué no pedimos ayuda a una empresa de trabajo temporal?' },
            { who: 'Marta', s: 'Es buena idea, pero tardan unos días. ¿Qué tal si los compañeros de oficina ayudan por las tardes?' },
            { who: 'Tomás', s: 'Podríamos hacer las dos cosas. Mientras llegan los temporales, ayudamos nosotros.' },
            { who: 'Marta', s: 'Me parece bien. ¿Y qué hacemos con los clientes que esperan?' },
            { who: 'Tomás', s: 'Lo mejor sería escribirles hoy mismo para que sepan qué pasa. Me encargo yo.' },
            { who: 'Marta', s: 'Perfecto. Y yo llamaré a la empresa de trabajo temporal esta tarde.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Los pedidos van con retraso porque faltan personas en el almacén.', a: 't', why: '*faltan tres personas en el almacén y los pedidos van con retraso*.' },
            { q: 'Marta no quiere pedir ayuda a una empresa de trabajo temporal.', a: 'f', why: 'She says it is a good idea, but it takes a few days.' },
            { q: 'Tomás va a escribir a los clientes.', a: 't', why: '*Me encargo yo.*' },
            { q: 'Marta llamará a la empresa de trabajo temporal mañana.', a: 'f', why: '*esta tarde*: this afternoon.' },
          ] },
          { t: 'text', md: 'To give the **purpose** of an action, use **para** + infinitive when the subject is the same, and **para que** + **subjunctive** when it is a different person: *Te llamo para explicarte el problema* (I call, I explain). *Te llamo para que sepas qué pasa* (I call, you know).' },
          { t: 'examples', items: [
            { s: 'Les escribimos **para que sepan** qué pasa.', n: 'We write, they know: *para que* + *sepan* (subjunctive of *saber*).' },
            { s: 'Le enviamos un técnico **para que revise** la máquina.', n: 'We send, the technician checks: *revise*.' },
            { s: 'Le llamo **para confirmar** la nueva fecha.', n: 'Same person: *para* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the future of enviar.', verb: 'enviar', tense: 'future', rows: [
            ['yo', 'enviaré'],
            ['tú', 'enviarás'],
            ['usted / él / ella', 'enviará'],
            ['nosotros', 'enviaremos'],
            ['vosotros', 'enviaréis'],
            ['ustedes / ellos', 'enviarán'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Mañana le ___ un producto nuevo. (enviar, nosotros)', a: ['enviaremos'], why: 'A promise in the future: *enviaremos*.' },
            { q: 'Le llamamos para que nos ___ la dirección. (confirmar, usted)', a: ['confirme'], why: 'Different subject: *para que* + subjunctive. *-ar* verbs take *-e*: *confirme*.' },
            { q: 'Te escribo para ___ el problema. (explicar)', a: ['explicarte', 'explicar'], why: 'Same person: *para* + infinitive.' },
            { q: 'No se preocupe, ___ yo. (encargarse, yo)', a: ['me encargo'], why: '*Me encargo yo*: I will take care of it.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best reaction.', items: [
            { q: 'Un cliente llama porque su pedido no ha llegado.', o: ['Lo siento mucho. Lo compruebo ahora mismo y le llamo en diez minutos.', 'No es culpa nuestra.', 'Llame otro día, por favor.'], why: 'Say sorry, then promise a concrete action.' },
            { q: 'Tu compañero propone una solución que te gusta.', o: ['Me parece bien.', 'Lo mejor sería no hacer nada.', 'Ya veremos.'], why: '*Me parece bien*: you agree.' },
            { q: 'Quieres proponer una solución.', o: ['¿Qué tal si cambiamos de proveedor?', '¡Cambiad de proveedor!', 'El proveedor es malo.'], why: '*¿Qué tal si* + present? is a soft suggestion.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentences. Two words do not belong.', items: [
            { a: 'Le enviaremos un técnico para que revise la máquina.', extra: ['revisa', 'enviamos'], why: 'A promise in the future, and *para que* + subjunctive *revise*.' },
            { a: 'Lo mejor sería llamar hoy al cliente.', extra: ['es', 'llamamos'], why: '*Lo mejor sería* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A complaint and the reply',
      about: 'Read a complaint email and a good answer from customer service.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Asunto: Reclamación por el pedido del 14 de noviembre', md: 'Estimados señores:\n\nEl 14 de noviembre recibimos nuestro pedido de material de oficina (número de pedido 8820). Por desgracia, hay varios problemas. Faltan dos cajas de papel, y de las diez sillas que pedimos, tres llegaron con el respaldo roto. Además, la entrega llegó con tres días de retraso, así que tuvimos que comprar papel en otra tienda.\n\nComo somos clientes suyos desde hace cinco años, nos ha sorprendido mucho este servicio. Les pido que nos envíen el material que falta y que cambien las sillas rotas lo antes posible.\n\nQuedo a la espera de su respuesta.\n\nAtentamente,\nElena Castillo\nResponsable de compras' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the complaint. True, false or not given?', items: [
            { q: 'En el pedido faltaba material.', a: 't', why: '*Faltan dos cajas de papel.*' },
            { q: 'Todas las sillas llegaron rotas.', a: 'f', why: 'Three of the ten chairs.' },
            { q: 'El pedido llegó a tiempo.', a: 'f', why: '*la entrega llegó con tres días de retraso*.' },
            { q: 'Elena Castillo es clienta de la empresa desde hace años.', a: 't', why: '*somos clientes suyos desde hace cinco años*.' },
            { q: 'Elena Castillo quiere que le devuelvan el dinero.', a: 'f', why: 'She asks for the missing items and new chairs, not for her money back.' },
            { q: 'Elena Castillo llamó también por teléfono.', a: 'ng', why: 'The email does not say if she called.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Asunto: RE: Reclamación por el pedido del 14 de noviembre', md: 'Estimada Sra. Castillo:\n\nMuchas gracias por su correo, y le pedimos disculpas por los problemas con su pedido. Como teníamos mucho trabajo por la campaña de otoño, en el almacén se cometieron varios errores. Ha sido un error nuestro y lo sentimos mucho.\n\nMañana mismo le enviaremos las dos cajas de papel y tres sillas nuevas. Nuestro conductor recogerá las sillas rotas en el mismo momento, así que usted no tendrá que hacer nada. Además, le devolveremos el dinero del papel que compró en otra tienda: solo tiene que enviarnos el tique para que podamos hacerle la transferencia.\n\nComo compensación, en su próximo pedido le haremos un descuento del 10 %.\n\nLamentamos de nuevo las molestias.\n\nUn cordial saludo,\nDavid Romero\nAtención al cliente' },
          { t: 'ex', kind: 'choice', h: 'Read the reply. Choose the right answer.', items: [
            { q: '¿Por qué hubo errores en el almacén?', o: ['Porque tenían mucho trabajo por la campaña de otoño.', 'Porque el camión tuvo una avería.', 'Porque faltaba papel en la fábrica.'], why: '*Como teníamos mucho trabajo por la campaña de otoño…*' },
            { q: '¿Qué pasará con las sillas rotas?', o: ['El conductor las recogerá.', 'La Sra. Castillo las enviará por correo.', 'La Sra. Castillo puede quedárselas.'], why: '*Nuestro conductor recogerá las sillas rotas.*' },
            { q: '¿Qué tiene que hacer la Sra. Castillo para recibir el dinero del papel?', o: ['Enviar el tique.', 'Llamar al almacén.', 'Hacer un nuevo pedido.'], why: '*solo tiene que enviarnos el tique*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the word that gives a cause or a result.', items: [
            { s: 'La entrega llegó con retraso, [así] [que] tuvimos que comprar papel en otra tienda.', why: '*así que* gives the result.' },
            { s: '[Como] teníamos mucho trabajo, en el almacén se cometieron varios errores.', why: '*como* gives the cause at the start of the sentence.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the words from the emails and their meaning.', pairs: [
            ['la reclamación', 'un mensaje de un cliente que no está contento'],
            ['el respaldo', 'la parte de la silla donde apoyas la espalda'],
            ['las molestias', 'los problemas y el trabajo extra para el cliente'],
            ['el tique', 'el papel que te dan en una tienda cuando pagas'],
            ['el descuento', 'Pagas menos de lo normal.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences about the emails.', items: [
            { q: 'Mañana mismo la empresa le ___ tres sillas nuevas. (enviar)', a: ['enviará'], why: 'A promise in the future: *enviará*.' },
            { q: 'Tiene que enviar el tique para que la empresa ___ hacer la transferencia. (poder)', a: ['pueda'], why: 'Different subject: *para que* + subjunctive *pueda*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '___ no funcionaba internet, trabajamos sin conexión.', o: ['Como', 'Porque', 'Por eso'], why: 'A cause at the start of the sentence: *como*.' },
      { q: 'Faltan dos personas. ___ vamos con retraso.', o: ['Por eso', 'Como', 'Porque'], why: '*por eso* gives the result.' },
      { q: 'Escribes a un cliente para pedir perdón: ___', o: ['Lamentamos las molestias.', 'No es nuestro problema.', 'Perdona, tío.'], why: 'A formal written apology.' },
      { q: 'Te llamo para que ___ la nueva fecha.', o: ['sepas', 'sabes', 'saber'], why: 'Different subject: *para que* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Mañana le ___ el material que falta. (enviar, nosotros)', a: ['enviaremos'], why: 'A promise: future *enviaremos*.' },
      { q: 'Lo mejor ___ cambiar de proveedor. (ser, condicional)', a: ['sería', 'seria'], why: '*Lo mejor sería* + infinitive.' },
      { q: 'Ha sido un error ___. Lo sentimos mucho. (our)', a: ['nuestro'], why: '*un error nuestro*: masculine.' },
      { q: 'Le enviamos un técnico para que ___ la máquina. (revisar)', a: ['revise'], why: '*para que* + subjunctive *revise*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Qué tal si llamamos al proveedor?', why: '*¿Qué tal si* + present?' },
      { a: 'Le pedimos disculpas por el retraso.', why: '*pedir disculpas por*: to apologise for.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Una reclamación es un mensaje de un cliente que no está contento.', a: 't', why: '*la reclamación*: a complaint.' },
      { q: 'Después de «para que» se usa el infinitivo.', a: 'f', why: 'After *para que* comes the subjunctive. *para* alone takes the infinitive.' },
    ] },
  ],
};
