// Spanish B1 for moving abroad, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Finding a flat',
  goal: 'Understand flat adverts, write to a landlord and ask the right questions at a viewing.',
  art: 'suitcase',
  tags: { skills: ['reading', 'writing', 'speaking', 'vocabulary'], topics: ['housing', 'flat-adverts', 'formal-email', 'condicional-polite', 'padron'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Reading flat adverts',
      about: 'The abbreviations and words every flat advert uses, and what you really pay.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Flat adverts in Spanish are short and use many abbreviations. The most important number is the rent, **el alquiler**. Then check what is included: **gastos incluidos** means the bills are in the rent, **gastos aparte** means you pay them on top.' },
          { t: 'table', caption: 'Abbreviations and words in flat adverts', explain: ['head', 'col2'], quiz: true, head: ['Short', 'Long', 'Meaning'], rows: [
            ['2 dorm.', 'dos dormitorios', 'two bedrooms, plus living room, kitchen and bathroom'],
            ['amueb.', 'amueblado', 'with furniture'],
            ['asc.', 'ascensor', 'lift'],
            ['ext.', 'exterior', 'the windows look onto the street, not onto an inner yard'],
            ['calef.', 'calefacción', 'heating'],
            ['a/a', 'aire acondicionado', 'air conditioning'],
            ['gtos. com.', 'gastos de comunidad', 'costs for the building: cleaning, lift, repairs'],
            ['disp.', 'disponible', 'available'],
          ] },
          { t: 'tip', art: 'owl', md: 'The deposit, *la fianza*, is often one month of rent, and some landlords ask for an extra guarantee too. An advert from *particular* is from the owner, without an agency. In much of Latin America people say *departamento* for a flat and *depósito* for the deposit.' },
        ],
        [
          { t: 'reading', title: 'Anuncio de piso', md: '**Piso luminoso de 2 dorm. en Valencia, barrio de Benimaclet, disp. ya**\n\n70 m², tercer piso con asc., ext., amueb., calef. y a/a. Alquiler: 850 € al mes, gastos de comunidad incluidos. Luz, agua y gas aparte. Fianza de un mes. A cinco minutos del metro. Mascotas a consultar. Particular. Solo contacto por correo electrónico, con una breve presentación.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the advert. True, false or not given?', items: [
            { q: 'El piso tiene muebles.', a: 't', why: '*amueb.*, *amueblado*: the furniture is included.' },
            { q: 'Los gastos de comunidad se pagan aparte.', a: 'f', why: '*gastos de comunidad incluidos*: they are in the 850 €.' },
            { q: 'La luz está incluida en el alquiler.', a: 'f', why: '*Luz, agua y gas aparte*: you pay electricity, water and gas on top.' },
            { q: 'Se puede alquilar el piso ahora mismo.', a: 't', why: '*disp. ya*: available now.' },
            { q: 'Los perros no están permitidos.', a: 'f', why: '*Mascotas a consultar*: pets are possible if you ask first.' },
            { q: 'La propietaria vive en el mismo edificio.', a: 'ng', why: 'The advert does not say where the owner lives.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the abbreviation and the word.', pairs: [
            ['dorm.', 'dormitorio'],
            ['asc.', 'ascensor'],
            ['amueb.', 'amueblado'],
            ['calef.', 'calefacción'],
            ['ext.', 'exterior'],
          ] },
          { t: 'ex', kind: 'choice', h: 'What does it cost?', items: [
            { q: 'Alquiler 700 €, más 60 € de gastos de comunidad. Cada mes usted paga ___ por el piso y la comunidad.', o: ['760 €', '700 €', '640 €'], why: 'The building costs are not included, so you add them: 700 + 60.' },
            { q: 'Alquiler 900 €, fianza de dos meses. La fianza es de ___.', o: ['1800 €', '900 €', '2700 €'], why: 'Two months of rent: 2 × 900.' },
            { q: 'Alquiler 850 €, fianza de un mes. Al firmar el contrato paga la fianza y el primer mes: en total ___.', o: ['1700 €', '850 €', '2550 €'], why: 'One month of deposit plus the first month of rent: 850 + 850.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword with words from flat adverts.', words: [
            { a: 'fianza', clue: 'Dinero que das al propietario al principio y que te devuelve al final si todo está bien.' },
            { a: 'alquiler', clue: 'Lo que pagas cada mes por vivir en el piso.' },
            { a: 'ascensor', clue: 'Te lleva al tercer piso sin usar las escaleras.' },
            { a: 'amueblado', clue: 'Un piso con cama, mesa, sofá y armarios.' },
            { a: 'exterior', clue: 'Un piso con ventanas a la calle.' },
            { a: 'particular', clue: 'Un anuncio del propietario, sin agencia.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Writing to a landlord',
      about: 'A short, polite email that gets you a viewing, and good questions to ask there.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In big cities, a landlord can get many emails for one flat. A good email is **short**, **formal** (with *usted*) and says who you are: your job, who will live in the flat and when you want to move in.' },
          { t: 'reading', title: 'Asunto: Piso en Benimaclet', md: 'Estimada señora Ortega:\n\nMe pongo en contacto con usted porque me interesa mucho su piso de Benimaclet. Tengo 31 años y desde octubre trabajo como enfermera en un hospital de Valencia. Viviría sola en el piso. No fumo y no tengo mascotas.\n\n¿Sería posible ver el piso esta semana? Podría ir el martes o el jueves a partir de las cinco de la tarde.\n\nMuchas gracias de antemano.\n\nUn cordial saludo,\nAna Ribeiro' },
        ],
        [
          { t: 'text', md: 'Polite requests often use the **condicional**: *me gustaría*, *¿sería posible…?*, *¿podría…?*, *podría ir…*. It sounds softer than the present tense. To ask a question inside a question, use *si* for yes/no questions and keep the accent on question words: *¿Podría decirme **cuánto** son los gastos?*' },
          { t: 'examples', items: [
            { s: '¿**Sería posible** ver el piso el lunes?', n: 'Softer than *¿Puedo ver el piso el lunes?*' },
            { s: '¿**Podría decirme si** el piso sigue libre?', n: 'An indirect yes/no question with *si*, without an accent.' },
            { s: '¿Podría decirme **cuánto** son los gastos de luz y agua?', n: '*cuánto* keeps its accent inside the question.' },
            { s: '**Me gustaría** entrar a vivir en enero.', n: 'A polite wish: *me gustaría* + infinitive.' },
          ] },
          { t: 'tip', art: 'churro', md: 'In Spain, a formal email starts with *Estimado señor …:* or *Estimada señora …:* with a colon, and the next line starts with a capital letter. End with *Un cordial saludo* or *Atentamente*. In Latin America a comma after the greeting is also common.' },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build polite sentences for your email.', items: [
            { a: 'Me interesa mucho su piso de Benimaclet.', why: '*interesar* works like *gustar*: *me interesa* + the thing that interests you.' },
            { a: '¿Sería posible ver el piso el lunes?', why: '*¿Sería posible* + infinitive: a polite request.' },
            { a: 'Me gustaría entrar a vivir en enero.', why: '*Me gustaría* + infinitive. *entrar a vivir*: move in.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which one belongs in an email to a landlord?', items: [
            { q: '', o: ['Estimada señora Ortega:', '¡Hola, guapa!', 'Querida Rosa:'], why: 'To someone you do not know: *Estimada señora …:*' },
            { q: '', o: ['Un cordial saludo,', '¡Besos!', 'Hasta luego, tía.'], why: 'A usual formal ending.' },
            { q: '', o: ['¿Podría decirme si el piso sigue libre?', '¿El piso está libre o qué?', 'Dime si el piso está libre.'], why: 'Polite, with *usted* and the condicional *podría*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the questions with the condicional.', items: [
            { q: '¿___ posible ver el piso mañana? (ser)', a: ['Sería'], why: 'Polite: *sería*, the condicional of *ser*.' },
            { q: '¿___ usted decirme cuándo está libre el piso? (poder)', a: ['Podría'], why: '*poder* has the stem *podr-*: *podría*.' },
            { q: 'Me ___ saber si se admiten mascotas. (gustar)', a: ['gustaría'], why: 'A polite wish: *me gustaría*.' },
            { q: 'Yo ___ ir el jueves por la tarde. (poder)', a: ['podría'], why: 'Offering a time politely: *podría ir*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake in each indirect question.', items: [
            { s: '¿Podría decirme [cuanto] son los gastos?', a: ['cuánto'], why: 'Question words keep their accent in indirect questions: *cuánto*.' },
            { s: '¿Podría decirme [sí] el piso tiene calefacción?', a: ['si'], why: 'In an indirect yes/no question, *si* means *if* and has no accent.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'The viewing and the padrón',
      about: 'Ask the questions that matter at a viewing, then read how to register at the town hall.',
      art: 'parrot',
      spreads: [
        [
          { t: 'dialogue', title: 'Visitando el piso', lines: [
            { who: 'Rosa', s: 'Pase, pase. Este es el salón, y aquí tiene la terraza.' },
            { who: 'Ana', s: 'Qué luminoso. ¿Cuánto se paga de luz y agua, más o menos?' },
            { who: 'Rosa', s: 'Depende del consumo, pero unos setenta euros al mes. La comunidad ya está incluida.' },
            { who: 'Ana', s: '¿Y a partir de cuándo estaría libre el piso?' },
            { who: 'Rosa', s: 'Desde el uno de diciembre. Al firmar le pido la fianza, que es un mes, y el primer mes de alquiler.' },
            { who: 'Ana', s: '¿Podría decirme si los muebles se quedan en el piso?' },
            { who: 'Rosa', s: 'Sí, todo lo que ve se queda. El contrato sería de un año, y luego se puede prorrogar.' },
          ] },
          { t: 'text', md: 'Ana asks direct questions (*¿Cuánto se paga…?*) and polite indirect ones (*¿Podría decirme si…?*). In Spain, a rental contract for a home often runs for one year at a time and can be extended: *prorrogar el contrato*.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the viewing. True or false?', items: [
            { q: 'La luz y el agua cuestan unos setenta euros al mes.', a: 't', why: '*unos setenta euros al mes*, depending on use.' },
            { q: 'El piso está libre desde noviembre.', a: 'f', why: '*Desde el uno de diciembre.*' },
            { q: 'Los muebles se quedan en el piso.', a: 't', why: '*todo lo que ve se queda*.' },
            { q: 'El contrato es de dos años.', a: 'f', why: '*El contrato sería de un año*, and then it can be extended.' },
          ] },
          { t: 'reading', title: 'Respuesta de la propietaria', md: 'Estimada Ana:\n\nMuchas gracias por su visita de ayer. Me alegra decirle que el piso es suyo, si todavía le interesa. Para preparar el contrato necesitaría una copia de su pasaporte, su NIE y su contrato de trabajo o sus tres últimas nóminas.\n\nPodríamos firmar el viernes 28 a las seis de la tarde en el piso. Ese día le daría también las llaves.\n\nUn saludo,\nRosa Ortega' },
          { t: 'ex', kind: 'choice', h: 'Read the reply. Choose the right answer.', items: [
            { q: 'La propietaria escribe para decir que ___', o: ['Ana puede alquilar el piso.', 'el piso ya no está libre.', 'Ana tiene que visitar el piso otra vez.'], why: '*el piso es suyo, si todavía le interesa*: Ana can rent it.' },
            { q: 'Para el contrato, Ana tiene que enviar ___', o: ['su pasaporte, su NIE y su contrato de trabajo o sus nóminas.', 'solo su pasaporte.', 'la fianza por transferencia.'], why: 'She lists three documents. *nómina*: payslip.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Empadronarse en el municipio', md: 'Si vive en nuestro municipio, tiene que inscribirse en el Padrón Municipal de Habitantes. El padrón es el registro de las personas que viven en la ciudad. Estar empadronado es necesario para muchos trámites: por ejemplo, para pedir la tarjeta sanitaria, matricular a sus hijos en el colegio o pedir algunas ayudas.\n\nPara empadronarse, pida cita previa en la web del Ayuntamiento o por teléfono. El día de la cita traiga su pasaporte o documento de identidad y un documento que demuestre dónde vive, por ejemplo el contrato de alquiler. Si no tiene contrato a su nombre, la persona propietaria o el titular del contrato puede firmar una autorización.\n\nEl trámite es gratuito. Si lo necesita, puede pedir en el mismo momento un certificado de empadronamiento. Recuerde que, si cambia de domicilio dentro de la ciudad, debe comunicarlo para actualizar sus datos.' },
          { t: 'tip', art: 'owl', md: 'In Spain, foreign residents also have an identity number, often called *NIE*. Procedures and names change from country to country in Latin America, so ask at the town hall (*la municipalidad* or *la alcaldía* in many countries) what you need.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the text about the padrón. True, false or not given?', items: [
            { q: 'El padrón es una lista de las personas que viven en la ciudad.', a: 't', why: '*el registro de las personas que viven en la ciudad*.' },
            { q: 'Para empadronarse hay que pagar una tasa.', a: 'f', why: '*El trámite es gratuito*: it is free.' },
            { q: 'Sin contrato a su nombre, no puede empadronarse.', a: 'f', why: 'The owner or the main tenant can sign an authorisation.' },
            { q: 'El certificado de empadronamiento tarda dos semanas.', a: 'ng', why: 'The text says you can ask for it at the same time, but not how long it takes if you ask later.' },
            { q: 'Si se muda a otra calle de la ciudad, tiene que comunicarlo.', a: 't', why: '*si cambia de domicilio … debe comunicarlo*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words for the paperwork.', items: [
            { s: 'Después de la mudanza, pido [cita previa] en el [Ayuntamiento] para el [padrón]. Llevo el pasaporte y el [contrato de alquiler].', why: 'Words you will hear in your first weeks in a new town.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Un piso con cama, sofá y mesa es un piso ___.', o: ['amueblado', 'exterior', 'particular'], why: '*amueblado*: with furniture.' },
      { q: 'Alquiler 600 €, gastos de comunidad 50 € aparte. Cada mes paga ___.', o: ['650 €', '600 €', '550 €'], why: '*aparte*: on top. 600 + 50.' },
      { q: '¿___ posible ver el piso el miércoles?', o: ['Sería', 'Podría', 'Gustaría'], why: '*¿Sería posible…?*' },
      { q: 'Para inscribirse en el padrón, hay que ir al ___.', o: ['Ayuntamiento', 'banco', 'centro de salud'], why: 'The *padrón* is the town hall’s register.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the email.', items: [
      { q: '___ señor García:', a: ['Estimado'], why: 'Formal greeting to a man: *Estimado señor …:*' },
      { q: 'Me ___ ver el piso esta semana. (gustar)', a: ['gustaría'], why: 'Polite wish: *me gustaría*.' },
      { q: '¿Podría decirme ___ el piso tiene ascensor?', a: ['si'], why: 'Indirect yes/no question: *si*, without an accent.' },
      { q: 'Un cordial ___,', a: ['saludo'], why: 'The formal ending: *Un cordial saludo*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: '*Gastos incluidos* significa que las facturas están en el precio del alquiler.', a: 't', why: '*incluidos*: included in the rent.' },
      { q: 'La fianza es el dinero que paga cada mes por el piso.', a: 'f', why: 'That is *el alquiler*. *La fianza* is the deposit.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Podría decirme cuánto son los gastos?', why: 'Indirect question: *cuánto* keeps its accent.' },
      { a: 'Me gustaría entrar a vivir en marzo.', why: '*Me gustaría* + infinitive.' },
    ] },
  ],
};
