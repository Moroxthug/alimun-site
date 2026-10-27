// Spanish B1 for work, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Presenting your work',
  goal: 'Give a short, clear presentation at work.',
  art: 'sun',
  tags: { skills: ['speaking', 'reading', 'vocabulary'], topics: ['presentations', 'signposting', 'figures-and-trends', 'project-update'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Structuring a presentation',
      about: 'Guide your listeners from the start to the end with clear signposts.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'A good presentation tells the listeners where they are. At the start, say who you are and what you will talk about. Between the parts, use **signposts** (*conectores*): short phrases that say a new part begins. At the end, sum up and invite questions.' },
          { t: 'table', caption: 'Signposts for a presentation', explain: ['head', 'col0'], quiz: true, head: ['', 'Spanish'], rows: [
            ['Starting', 'Buenos días a todos. Hoy les voy a hablar de…'],
            ['The plan', 'La presentación tiene tres partes.'],
            ['The first part', 'En primer lugar, voy a presentar…'],
            ['Moving on', 'A continuación, pasamos a… / En segundo lugar…'],
            ['Showing a slide', 'Como pueden ver en este gráfico…'],
            ['The last part', 'Por último, … / Para terminar, …'],
            ['Summing up', 'En resumen, …'],
            ['Questions', 'Muchas gracias por su atención. ¿Tienen alguna pregunta?'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Hoy **les voy a hablar de** los resultados del primer trimestre.', n: '*ir a* + infinitive for what you are going to do. *les*: to you all (ustedes).' },
            { s: '**En primer lugar**, voy a explicar el objetivo del proyecto.', n: 'The first part of the talk.' },
            { s: '**A continuación**, pasamos a los costes.', n: 'A new part begins.' },
            { s: '**Como pueden ver**, las ventas han subido.', n: 'You point at a slide or a chart.' },
            { s: '**En resumen**, el proyecto va bien, pero necesitamos más tiempo.', n: 'A short summary before the end.' },
          ] },
          { t: 'tip', art: 'owl', md: 'With a team you know well in Spain you can say *vosotros*: *Como veis…*, *¿Tenéis alguna pregunta?*. With clients, bosses and in Latin America, use *ustedes*: *Como pueden ver…*, *¿Tienen alguna pregunta?*' },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences for a presentation.', items: [
            { a: 'Hoy les voy a hablar de nuestro nuevo producto.', why: '*voy a hablar de* + topic. *les* goes before the verb.' },
            { a: 'A continuación, pasamos a los resultados.', why: 'The signpost first, then a comma.' },
            { a: 'Muchas gracias por su atención.', why: 'The usual last line of a presentation.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the signpost that fits.', items: [
            { q: '___, voy a presentar al equipo. Después hablaré del presupuesto.', o: ['En primer lugar', 'En resumen', 'Por último'], why: 'The first part: *En primer lugar*.' },
            { q: 'Y ___, unas palabras sobre los próximos pasos.', o: ['para terminar', 'en primer lugar', 'como pueden ver'], why: 'The last part: *para terminar*.' },
            { q: '___ en esta diapositiva, los costes han bajado.', o: ['Como pueden ver', 'A continuación', 'En resumen'], why: 'You point at a slide: *Como pueden ver…*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the two halves of the sentences.', pairs: [
            ['La presentación tiene', 'tres partes.'],
            ['Como pueden ver', 'en este gráfico, los pedidos han subido.'],
            ['A continuación,', 'pasamos a los costes.'],
            ['En resumen,', 'ha sido un buen año.'],
            ['¿Tienen', 'alguna pregunta?'],
          ] },
          { t: 'ex', kind: 'odd', h: 'Which phrase is not used to end a presentation?', items: [
            { o: ['En primer lugar', 'Para terminar', 'Por último', 'En resumen'], why: '*En primer lugar* starts the first part. The others are for the end.' },
            { o: ['Hoy les voy a hablar de…', 'Muchas gracias por su atención.', '¿Tienen alguna pregunta?', 'En resumen, …'], why: '*Hoy les voy a hablar de…* is for the start.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Figures and trends',
      about: 'Say that numbers go up, go down or stay the same.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In a presentation you often describe how numbers change. Use the **pretérito perfecto** for this year or this month (*este año las ventas han subido*), and the **indefinido** for a finished period (*en 2025 las ventas subieron*). The amount of the change goes after **un**: *subieron un 10 %*. The new level goes after **hasta** or **a**: *bajaron hasta 500 clientes*.' },
          { t: 'table', caption: 'Verbs and nouns for trends', explain: ['head', 'col0'], quiz: true, head: ['', 'Verb', 'Noun'], rows: [
            ['go up', 'subir, aumentar, crecer', 'la subida, el aumento, el crecimiento'],
            ['go down', 'bajar, disminuir, caer', 'la bajada, la disminución, la caída'],
            ['stay the same', 'mantenerse, quedarse igual', 'la estabilidad'],
          ] },
          { t: 'tip', art: 'churro', md: '*crecer* and *disminuir* are a little irregular in the present: *crece*, *crecen*, but *yo crezco*; *disminuye*, *disminuyen*. *mantenerse* goes like *tener*: *se mantiene*, *se mantuvo*.' },
        ],
        [
          { t: 'text', md: 'Say **how much** with an adverb: *ligeramente* or *un poco* for a small change, *bastante* for a medium one, *mucho* for a big one. Say **how fast** with *rápidamente* or *poco a poco*.' },
          { t: 'examples', items: [
            { s: 'Este año los pedidos **han aumentado un 15 %**.', n: 'This year, still going on: pretérito perfecto. *un* + the amount.' },
            { s: 'En 2025 los costes **bajaron ligeramente**.', n: 'A finished year: indefinido. *ligeramente*: a little.' },
            { s: 'El número de clientes **se ha mantenido** estable.', n: '*mantenerse estable*: to stay the same.' },
            { s: 'Las ventas **subieron de 2.000 a 2.600** unidades.', n: '*de* the start *a* the end.' },
            { s: 'Hubo **una caída** fuerte en agosto.', n: 'A noun: *una caída*, a fall.' },
          ] },
          { t: 'ex', kind: 'wordform', h: 'Write the noun from the verb.', items: [
            { q: 'En marzo hubo un ___ de las ventas del 8 %.', base: 'aumentar', a: ['aumento'], why: '*aumentar* gives *el aumento*.' },
            { q: 'Este año el ___ de la empresa ha sido muy rápido.', base: 'crecer', a: ['crecimiento'], why: '*crecer* gives *el crecimiento*.' },
            { q: 'La ___ de los precios ha ayudado a vender más.', base: 'bajar', a: ['bajada'], why: '*bajar* gives *la bajada*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right tense.', items: [
            { q: 'Este año el número de clientes ___ un 20 %. (subir)', a: ['ha subido'], why: '*este año*: pretérito perfecto, *ha subido*.' },
            { q: 'En 2024 los costes ___ mucho. (bajar)', a: ['bajaron'], why: 'A finished year: indefinido, *bajaron*.' },
            { q: 'Durante todo el año pasado, las ventas ___ estables. (mantenerse)', a: ['se mantuvieron'], why: '*mantenerse* goes like *tener*: *se mantuvieron*.' },
            { q: 'Los pedidos subieron ___ 3.000 a 3.500.', a: ['de'], why: '*de* the start *a* the end.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'un, de or hasta? Choose.', items: [
            { q: 'Los precios han subido ___ 5 %.', o: ['un', 'hasta', 'de'], why: 'The amount of the change: *un 5 %*.' },
            { q: 'El número de visitas bajó ___ 800 al mes.', o: ['hasta', 'un', 'de'], why: 'The new level: *hasta 800*.' },
            { q: 'Las ventas aumentaron ___ 10.000 a 12.000 euros.', o: ['de', 'un', 'hasta'], why: '*de* the start *a* the end.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Los números de nuestra tienda en línea', md: 'En el primer trimestre, de enero a marzo, nuestra tienda en línea recibió unos 2.000 pedidos al mes. En el segundo trimestre el número subió a unos 2.600 pedidos al mes, sobre todo gracias a la nueva aplicación para el móvil. En verano, en cambio, hubo una caída: en agosto solo tuvimos 1.500 pedidos. Los precios se mantuvieron estables todo el año. Este otoño los pedidos han vuelto a crecer poco a poco.' },
          { t: 'ex', kind: 'tf', h: 'Read the text. True or false?', items: [
            { q: 'En el segundo trimestre hubo más pedidos que en el primero.', a: 't', why: 'From about 2,000 to about 2,600 a month.' },
            { q: 'En agosto hubo más pedidos que nunca.', a: 'f', why: '*hubo una caída: en agosto solo tuvimos 1.500 pedidos*.' },
            { q: 'Los precios subieron en verano.', a: 'f', why: '*Los precios se mantuvieron estables todo el año.*' },
            { q: 'Los pedidos están creciendo otra vez.', a: 't', why: '*Este otoño los pedidos han vuelto a crecer.*' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: a verb and its noun.', pairs: [
            ['subir', 'la subida'],
            ['aumentar', 'el aumento'],
            ['crecer', 'el crecimiento'],
            ['bajar', 'la bajada'],
            ['caer', 'la caída'],
            ['disminuir', 'la disminución'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A project update',
      about: 'Read a project update and follow the figures and the next steps.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Proyecto «Nuevo programa de almacén»: situación a finales de junio', md: 'Hola a todos:\n\nOs envío un breve resumen de cómo va el proyecto.\n\n**Lo que hemos hecho.** En primer lugar, ya hemos instalado el nuevo programa en los dos almacenes de Sevilla y de Córdoba. Además, 45 de los 60 empleados ya han hecho la formación.\n\n**Los números.** Como veis en el gráfico adjunto, los errores en los pedidos han bajado mucho: del 4 % en enero al 1,5 % en junio. El tiempo medio para preparar un pedido ha disminuido ligeramente, de 12 a 11 minutos. Los costes del proyecto, en cambio, han subido un 10 % porque necesitamos más horas de formación.\n\n**Los próximos pasos.** A continuación, los 15 empleados que faltan harán la formación en julio. Para terminar, en septiembre revisaremos los resultados con la dirección.\n\nSi tenéis alguna pregunta, escribidme.\n\nUn saludo,\nSofía' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the update. True, false or not given?', items: [
            { q: 'El programa ya funciona en los dos almacenes.', a: 't', why: '*ya hemos instalado el nuevo programa en los dos almacenes*.' },
            { q: 'Todos los empleados han hecho ya la formación.', a: 'f', why: 'Only 45 of the 60. The others do it in July.' },
            { q: 'Hay menos errores en los pedidos que en enero.', a: 't', why: '*del 4 % en enero al 1,5 % en junio*.' },
            { q: 'Preparar un pedido es ahora mucho más rápido.', a: 'f', why: 'It went down *ligeramente*, only from 12 to 11 minutes.' },
            { q: 'Los empleados están contentos con el programa.', a: 'ng', why: 'The update does not say what the staff think.' },
            { q: 'El proyecto cuesta más de lo previsto.', a: 't', why: '*Los costes del proyecto… han subido un 10 %.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the verbs that describe a trend.', items: [
            { s: 'Los errores en los pedidos [han] [bajado] mucho.', why: '*han bajado*: they went down.' },
            { s: 'El tiempo medio [ha] [disminuido] ligeramente, y los costes [han] [subido] un 10 %.', why: '*ha disminuido* (down) and *han subido* (up).' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Complete the sentences about the update with the words.', extra: ['hasta', 'caída'], items: [
            { q: 'Los errores han bajado ___: del 4 % al 1,5 %.', a: 'mucho', why: 'A big change: *mucho*.' },
            { q: 'El tiempo para preparar un pedido ha disminuido ___.', a: 'ligeramente', why: 'From 12 to 11 minutes: a small change.' },
            { q: 'Los costes han subido ___ 10 %.', a: 'un', why: 'The amount of the change goes after *un*.' },
            { q: 'Los últimos 15 empleados harán la ___ en julio.', a: 'formación', why: '*hacer la formación*: to do the training.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '¿Qué pasará en septiembre?', o: ['Revisarán los resultados con la dirección.', 'Instalarán el programa en Córdoba.', 'Terminará la formación.'], why: '*en septiembre revisaremos los resultados con la dirección*.' },
            { q: '¿Por qué han subido los costes?', o: ['Porque necesitan más horas de formación.', 'Porque hay más errores.', 'Porque han abierto otro almacén.'], why: '*porque necesitamos más horas de formación*.' },
            { q: 'Sofía escribe a sus compañeros. Por eso usa: ___', o: ['vosotros', 'ustedes', 'usted'], why: '*Os envío…*, *Como veis…*, *escribidme*: *vosotros*, for colleagues in Spain.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Empiezas tu presentación: ___', o: ['Hoy les voy a hablar de los costes.', 'En resumen, los costes.', 'Por último, los costes.'], why: '*Hoy les voy a hablar de…* starts a talk.' },
      { q: 'Las ventas han subido ___ 12 %.', o: ['un', 'hasta', 'de'], why: 'The amount of the change: *un 12 %*.' },
      { q: 'Los precios no han cambiado. Se han ___.', o: ['mantenido', 'bajado', 'crecido'], why: '*mantenerse*: to stay the same.' },
      { q: 'En 2023 los pedidos ___ un poco.', o: ['bajaron', 'han bajado', 'bajan'], why: 'A finished year: indefinido.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'En primer ___, voy a presentar el proyecto.', a: ['lugar'], why: '*En primer lugar*.' },
      { q: 'Como ___ ver en este gráfico, hay menos errores. (poder, ustedes)', a: ['pueden'], why: '*Como pueden ver…* with *ustedes*.' },
      { q: 'Este mes el número de clientes ___ un 5 %. (crecer)', a: ['ha crecido'], why: '*este mes*: pretérito perfecto.' },
      { q: 'En agosto hubo una ___ de las ventas. (caer)', a: ['caída', 'caida'], why: '*caer* gives the noun *la caída*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'A continuación, pasamos a los próximos pasos.', why: 'Signpost, comma, then the new part.' },
      { a: 'Los costes han bajado ligeramente este año.', why: 'Subject, verb, adverb, time.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the verb and the noun.', pairs: [
      ['aumentar', 'el aumento'],
      ['crecer', 'el crecimiento'],
      ['bajar', 'la bajada'],
      ['disminuir', 'la disminución'],
    ] },
  ],
};
