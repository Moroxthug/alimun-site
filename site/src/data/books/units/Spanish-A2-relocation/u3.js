// Spanish A2 for moving abroad, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'A place to live',
  goal: 'Understand a simple flat advert and talk to a landlord on the phone.',
  art: 'cactus',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['housing', 'rooms-furniture', 'flat-adverts', 'phone-calls', 'object-pronouns'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Rooms and rent',
      about: 'The words for rooms, furniture and rent in a flat advert.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'When you look for a flat (*un piso*), you need the words for the rooms. Learn each noun with its article: *el* or *la*.' },
          { t: 'table', caption: 'En el piso', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['la habitación', 'room, bedroom'],
            ['el dormitorio', 'bedroom'],
            ['el salón', 'living room'],
            ['la cocina', 'kitchen'],
            ['el baño', 'bathroom'],
            ['el pasillo', 'hall'],
            ['la terraza', 'terrace, balcony'],
            ['el trastero', 'storage room'],
            ['el ascensor', 'lift'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Spanish adverts, the number usually counts the **bedrooms**: *piso de 2 dormitorios* (or *2 habitaciones*) has two bedrooms **plus** a living room, a kitchen and a bathroom. In much of Latin America, a flat is *un departamento* or *un apartamento*.' },
        ],
        [
          { t: 'text', md: 'Adverts often say **Se alquila** (for rent). Look at what is in the price. **Gastos incluidos** means water, electricity and other costs are in the rent. **Gastos aparte** means you pay them on top.' },
          { t: 'table', caption: 'Money and the flat', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['el alquiler', 'the rent'],
            ['los gastos', 'bills: water, electricity, gas'],
            ['los gastos de comunidad', 'costs for the building'],
            ['la fianza', 'the deposit'],
            ['amueblado', 'with furniture'],
            ['el piso compartido', 'a shared flat'],
            ['el propietario, la propietaria', 'the owner, the landlord'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain, *la luz* is the everyday word for electricity: *la factura de la luz* is the electricity bill. The deposit (*la fianza*) is usually one or more months of rent. In Latin America, people often say *el depósito* for the deposit and, in Mexico, *la renta* for the rent.' },
        ],
        [
          { t: 'reading', title: 'Anuncio', md: 'Se alquila piso de 2 dormitorios, 65 m², salón, cocina amueblada, baño y terraza. 750 € al mes + 40 € de gastos de comunidad. Libre a partir del 1 de diciembre.' },
          { t: 'ex', kind: 'choice', h: 'Read the advert. Choose the answer.', items: [
            { q: 'Cada mes, usted paga ___ por el piso y la comunidad.', o: ['790 €', '750 €', '710 €'], why: 'Rent plus the building costs: 750 + 40.' },
            { q: 'El piso tiene ___.', o: ['dos dormitorios, un salón, una cocina y un baño', 'dos habitaciones en total', 'un dormitorio y un salón'], why: 'The number counts the bedrooms. The living room, kitchen and bathroom come on top.' },
            { q: 'Usted puede entrar a vivir ___.', o: ['en diciembre', 'hoy mismo', 'en enero'], why: '*Libre a partir del 1 de diciembre*: from 1 December.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Where is it usually? Match the thing and the room.', pairs: [
            ['la cama', 'el dormitorio'],
            ['la nevera', 'la cocina'],
            ['la ducha', 'el baño'],
            ['el sofá', 'el salón'],
            ['las plantas', 'la terraza'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'El piso tiene dos ___, un salón, una cocina y un baño.', a: ['dormitorios', 'habitaciones'], why: 'Plural: *el dormitorio, los dormitorios* or *la habitación, las habitaciones*.' },
            { q: 'Se ___ piso en el centro. 700 € al mes.', a: ['alquila'], why: '*Se alquila*: for rent. It is the usual start of an advert.' },
            { q: 'En el ___ duermo y tengo mi armario.', a: ['dormitorio'], why: '*dormir* + *-torio*: the room where you sleep.' },
            { q: 'El piso está ___: tiene cama, mesa y sofá.', a: ['amueblado'], why: '*amueblado*: with furniture (*muebles*). *el piso* is masculine: *-o*.' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword about the home.', words: [
            { a: 'cocina', clue: 'Aquí preparas la comida.' },
            { a: 'ascensor', clue: 'Sube y baja a los pisos de un edificio.' },
            { a: 'alquiler', clue: 'El dinero que pagas cada mes por tu piso.' },
            { a: 'fianza', clue: 'El dinero que pagas al principio y recibes al final.' },
            { a: 'terraza', clue: 'Está fuera, pero es parte del piso.' },
            { a: 'pasillo', clue: 'Va de una habitación a otra.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Calling about a flat',
      about: 'Phone a landlord, ask if the flat is free and when you can see it.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'Start the call with your name and the reason: *Me llamo… Llamo por el piso de la calle…* Then ask your questions. In Spain, people often answer the phone with *¿Dígame?* or *¿Sí?* In Mexico you may hear *¿Bueno?*, and in many other countries *¿Aló?*' },
          { t: 'examples', items: [
            { s: '¿**Sigue libre** el piso?', n: 'Is it still available? You can also say *¿Todavía está disponible?*' },
            { s: '¿Cuándo puedo **verlo**?', n: '*lo* = *el piso*. With an infinitive, the pronoun joins the end: *verlo*.' },
            { s: '¿**Están incluidos** los gastos?', n: '*los gastos* is plural: *están incluidos*.' },
            { s: '**Llamo por** el anuncio.', n: '*llamar por*: to call about something.' },
          ] },
          { t: 'table', caption: 'lo, la, los, las', explain: ['head'], quiz: true, head: ['Noun', 'Pronoun', 'Example'], rows: [
            ['el piso', 'lo', '¿Cuándo lo puedo ver?'],
            ['la habitación', 'la', 'La alquilo.'],
            ['los muebles', 'los', 'Los compramos.'],
            ['las llaves', 'las', '¿Las tiene usted?'],
          ] },
          { t: 'text', md: 'The pronoun goes **before** the verb: *Lo veo el jueves.* With an infinitive, it can also go **at the end**, joined to it: *Puedo verlo* = *Lo puedo ver*.' },
        ],
        [
          { t: 'dialogue', title: 'Al teléfono', lines: [
            { who: 'Rafael', s: '¿Dígame?' },
            { who: 'Mei', s: 'Hola, buenas tardes. Me llamo Mei Lin. Llamo por el piso de la calle de los Pinos. ¿Sigue libre?' },
            { who: 'Rafael', s: 'Sí, sigue libre.' },
            { who: 'Mei', s: '¿Los gastos están incluidos en el alquiler?' },
            { who: 'Rafael', s: 'El agua sí, pero la luz y el gas no.' },
            { who: 'Mei', s: '¿Y el piso está amueblado?' },
            { who: 'Rafael', s: 'Sí, tiene cama, armario, sofá y una cocina completa.' },
            { who: 'Mei', s: '¿Cuándo puedo verlo?' },
            { who: 'Rafael', s: 'El jueves a las seis de la tarde. ¿Le viene bien?' },
            { who: 'Mei', s: 'Sí, perfecto. ¿Cuál es la dirección exacta?' },
            { who: 'Rafael', s: 'Calle de los Pinos, 21, tercero izquierda. Llame al portero automático.' },
            { who: 'Mei', s: 'Muchas gracias. Hasta el jueves.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the call. True or false?', items: [
            { q: 'El piso sigue libre.', a: 't', why: '*Sí, sigue libre.*' },
            { q: 'La luz está incluida en el alquiler.', a: 'f', why: 'Only the water is included: *la luz y el gas no*.' },
            { q: 'El piso tiene muebles.', a: 't', why: '*Tiene cama, armario, sofá…*: it is furnished.' },
            { q: 'Mei va a ver el piso el martes.', a: 'f', why: 'The viewing is on Thursday, *el jueves*.' },
          ] },
          { t: 'tip', art: 'owl', md: '*¿Le viene bien?* means *Is that a good time for you?* (with *usted*). With *tú* it is *¿Te viene bien?* *El portero automático* is the door phone at the street door.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the landlord answer?', items: [
            { q: '¿Sigue libre el piso?', o: ['No, lo siento, ya está alquilado.', 'No, cuesta 600 euros.', 'Sí, estoy libre.'], why: 'The question is about the flat, so the answer is about the flat.' },
            { q: '¿Cuándo puedo verlo?', o: ['Mañana a las cinco.', 'Desde hace tres años.', 'En el salón.'], why: '*¿Cuándo?* asks for a time.' },
            { q: '¿Cuánto es la fianza?', o: ['Dos meses de alquiler.', 'En el segundo piso.', 'Dos dormitorios.'], why: '*¿Cuánto?* asks about an amount of money.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right pronoun.', items: [
            { q: 'El trastero es muy grande. ¿Puedo ___ ver?', o: ['lo', 'la', 'los'], why: '*el trastero* is masculine singular: *lo*.' },
            { q: 'La habitación está libre. ¿Cuándo ___ puedo ver?', o: ['la', 'lo', 'las'], why: '*la habitación* is feminine singular: *la*.' },
            { q: 'Necesito las llaves del trastero. ¿Usted ___ tiene?', o: ['las', 'los', 'la'], why: '*las llaves* is feminine plural: *las*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Use a pronoun instead of the noun.', items: [
            { q: '¿Cuándo puedo ver el piso?', a: ['¿Cuándo puedo verlo?', '¿Cuándo lo puedo ver?', 'Cuándo puedo verlo', 'Cuándo lo puedo ver'], why: '*el piso* = *lo*: *verlo* or *lo puedo ver*.' },
            { q: 'Alquilo la habitación.', a: ['La alquilo.', 'La alquilo'], why: '*la habitación* = *la*, before the verb.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions for the call.', items: [
            { a: '¿Cuándo puedo ver el piso?', why: 'Question word, *puedo*, then the infinitive *ver* and the object.' },
            { a: '¿Cuál es la dirección exacta?', why: '*¿Cuál es…?* asks for a piece of information.' },
            { a: 'Llamo por el piso de la calle Mayor.', why: '*Llamo por* + what you call about.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the call.', items: [
            { q: 'El salón es bonito. ¿Puedo ___ ahora? (ver + lo)', a: ['verlo'], why: 'With an infinitive, *lo* joins the end: *verlo*.' },
            { q: '¿Los gastos ___ incluidos? (estar)', a: ['están', 'estan'], why: '*los gastos* is plural: *están*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Three adverts',
      about: 'Read three adverts and find the right home for each person.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Anuncios de pisos', md: '**Habitación en piso compartido**\nSomos tres estudiantes de entre 23 y 27 años y buscamos compañero o compañera de piso a partir del 1 de noviembre. La habitación tiene 12 m², está amueblada y tiene ventana a la calle. Compartimos la cocina, el salón y dos baños. Alquiler: 380 € al mes, gastos incluidos. No se permite fumar.\n\n**Estudio luminoso en el centro**\n30 m², cuarto piso sin ascensor, cocina pequeña, baño con ducha. Alquiler: 550 € al mes, gastos aparte. Fianza: dos meses. Disponible ya. No se admiten mascotas.\n\n**Piso grande de 3 dormitorios en las afueras**\n90 m², planta baja con jardín, salón, cocina, dos baños y trastero. Ideal para familias: hay un colegio y una guardería cerca. Alquiler: 980 € al mes + 60 € de gastos de comunidad. Libre a partir del 1 de enero. Visitas el sábado; llame antes, por favor.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the adverts. True, false or not given?', items: [
            { q: 'La habitación del piso compartido tiene muebles.', a: 't', why: '*Está amueblada*: it is furnished.' },
            { q: 'En el edificio del estudio hay ascensor.', a: 'f', why: '*Cuarto piso sin ascensor*: no lift.' },
            { q: 'En el estudio, la luz y el agua no están en el precio.', a: 't', why: '*Gastos aparte*: you pay them on top of the rent.' },
            { q: 'El piso de 3 dormitorios tiene terraza.', a: 'ng', why: 'The advert says *jardín*, but nothing about a terrace.' },
            { q: 'En el piso compartido se puede fumar.', a: 'f', why: '*No se permite fumar.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which home is right for each person?', items: [
            { q: 'La familia Osei tiene dos niños pequeños y quiere un jardín.', o: ['el piso de 3 dormitorios', 'el estudio', 'la habitación'], why: 'A garden, and a school and nursery nearby: the big flat.' },
            { q: 'Ana estudia, no tiene muebles y no quiere vivir sola.', o: ['la habitación', 'el estudio', 'el piso de 3 dormitorios'], why: 'A furnished room with other students.' },
            { q: 'El señor Ivanov trabaja en el centro y necesita un piso pequeño ya.', o: ['el estudio', 'la habitación', 'el piso de 3 dormitorios'], why: 'In the centre and *disponible ya*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Never send money for a flat before you have seen it and signed a contract (*el contrato de alquiler*). If an advert is very cheap and the owner says they are abroad, be careful.' },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the three things you pay for the studio.', items: [
            { s: 'Para el estudio, usted paga el [alquiler] de 550 euros, los [gastos] aparte y una [fianza] de dos meses.', why: 'The rent, the bills on top and the deposit.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Look at the studio again.', items: [
            { q: 'La fianza del estudio es de ___.', o: ['1.100 €', '550 €', '1.650 €'], why: 'Two months: 2 × 550 € = 1.100 €.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which word does not belong?', items: [
            { o: ['el billete', 'el salón', 'el dormitorio', 'la cocina'], why: '*el billete* is a ticket. The others are rooms.' },
            { o: ['la ducha', 'el alquiler', 'la fianza', 'los gastos'], why: '*la ducha* is in the bathroom. The others are money for the flat.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Alquiler 600 €, gastos de comunidad 50 €. Usted paga ___ al mes.', o: ['650 €', '600 €', '550 €'], why: '600 + 50 = 650.' },
      { q: 'El piso no tiene muebles. No está ___.', o: ['amueblado', 'libre', 'incluido'], why: '*amueblado*: with furniture.' },
      { q: 'El trastero es grande. Quiero ___ ver.', o: ['lo', 'la', 'las'], why: '*el trastero*: *lo*.' },
      { q: '¿Sigue libre el piso?', o: ['Sí, puede verlo el lunes.', 'Sí, me gusta mucho vivir aquí.', 'No, tiene una terraza.'], why: 'Yes, and a time to see it.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '¿Los gastos ___ incluidos? (estar)', a: ['están', 'estan'], why: 'Plural: *están*.' },
      { q: 'La habitación está ___: tiene cama y armario.', a: ['amueblada'], why: '*la habitación* is feminine: *amueblada*.' },
      { q: 'La habitación es bonita. ¿Cuándo ___ puedo ver?', a: ['la'], why: '*la habitación*: *la*, before the verb.' },
      { q: 'Se ___ piso de dos dormitorios.', a: ['alquila'], why: '*Se alquila*: for rent.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Use a pronoun instead of the noun.', items: [
      { q: 'Quiero ver el salón.', a: ['Quiero verlo.', 'Lo quiero ver.', 'Quiero verlo', 'Lo quiero ver'], why: '*el salón* = *lo*: *verlo* or *lo quiero ver*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Cuándo puedo ver la habitación?', why: '*puedo* + the infinitive *ver*.' },
      { a: '¿Cuántos dormitorios tiene el piso?', why: '*¿Cuántos dormitorios?* first, then the verb *tiene*.' },
      { a: '¿Cuánto es la fianza?', why: '*¿Cuánto es…?* asks for an amount.' },
    ] },
  ],
};
