// Spanish A1 for moving abroad, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'At the town hall',
  goal: 'Make an appointment, answer questions at a counter and fill in a simple form.',
  art: 'owl',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['forms', 'personal-details', 'months-dates', 'numbers-to-100', 'tener', 'usted', 'registration'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Words on a form',
      about: 'The words on a Spanish form, the months, dates and numbers to 100.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'After you move, you fill in many forms: at the town hall (*el ayuntamiento*), at the bank, at the health centre. A form is **un formulario** or **una solicitud**. These words are on almost every one.' },
          { t: 'table', caption: 'Words on a form', explain: ['head', 'col1'], quiz: true, head: ['On the form', 'Meaning'], rows: [
            ['Nombre', 'first name'],
            ['Primer apellido', 'first surname'],
            ['Segundo apellido', 'second surname'],
            ['Fecha de nacimiento', 'date of birth'],
            ['Lugar de nacimiento', 'place of birth'],
            ['Nacionalidad', 'nationality'],
            ['Estado civil', 'marital status'],
            ['Domicilio', 'address, where you live'],
            ['Código postal', 'postcode'],
            ['Firma', 'signature'],
          ] },
          { t: 'tip', art: 'owl', md: 'For *Estado civil* you write *soltero* (single), *casado* (married), *divorciado* (divorced) or *viudo* (widowed). A woman writes *soltera*, *casada*, *divorciada*, *viuda*. If you have only one surname, leave *Segundo apellido* empty.' },
        ],
        [
          { t: 'text', md: 'A date in Spanish is **el** + day + **de** + month + **de** + year: *el 3 de mayo de 1990*. On a form it is written day, month, year: **03/05/1990**. The months do not start with a capital letter.' },
          { t: 'table', caption: 'The months', explain: ['head'], quiz: true, head: ['On a form', 'Month', 'On a form', 'Month'], rows: [
            ['01', 'enero', '07', 'julio'],
            ['02', 'febrero', '08', 'agosto'],
            ['03', 'marzo', '09', 'septiembre'],
            ['04', 'abril', '10', 'octubre'],
            ['05', 'mayo', '11', 'noviembre'],
            ['06', 'junio', '12', 'diciembre'],
          ] },
          { t: 'examples', items: [
            { s: 'Mi fecha de nacimiento es **el 14 de febrero de 1993**.', n: 'Say *el* before the day, and *de* before the month and the year.' },
            { s: '**1993**: mil novecientos noventa y tres.', n: 'Years before 2000 start with *mil novecientos*.' },
            { s: '**2026**: dos mil veintiséis.', n: 'From 2000 on, years start with *dos mil*.' },
            { s: '¿Cuántos años tiene? **Tengo treinta y tres años.**', n: 'Your age goes with *tener*: *tengo … años*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Numbers 21 to 100', explain: ['head'], quiz: true, head: ['Number', 'Spanish', 'Number', 'Spanish'], rows: [
            ['21', 'veintiuno', '40', 'cuarenta'],
            ['22', 'veintidós', '50', 'cincuenta'],
            ['23', 'veintitrés', '60', 'sesenta'],
            ['26', 'veintiséis', '70', 'setenta'],
            ['30', 'treinta', '80', 'ochenta'],
            ['31', 'treinta y uno', '90', 'noventa'],
            ['35', 'treinta y cinco', '100', 'cien'],
          ] },
          { t: 'text', md: 'From 21 to 29, the numbers are one word: *veinticuatro*. From 31, they are three words with **y**: *treinta y cuatro*, *setenta y ocho*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Omar fills in a form. Match each field and his answer.', pairs: [
            ['Nombre', 'Omar'],
            ['Primer apellido', 'Hassan'],
            ['Fecha de nacimiento', '14/02/1993'],
            ['Lugar de nacimiento', 'El Cairo'],
            ['Nacionalidad', 'egipcia'],
            ['Estado civil', 'casado'],
          ] },
          { t: 'ex', kind: 'crossword', h: 'Write the months.', words: [
            { a: 'enero', clue: 'El primer mes del año.' },
            { a: 'diciembre', clue: 'El último mes del año.' },
            { a: 'agosto', clue: 'El mes entre julio y septiembre.' },
            { a: 'abril', clue: 'El mes entre marzo y mayo.' },
            { a: 'febrero', clue: 'El mes más corto.' },
            { a: 'octubre', clue: 'El mes después de septiembre.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Fecha de nacimiento: 09/11/1988. Es el 9 de ___.', o: ['noviembre', 'septiembre', 'enero'], why: 'Day, month, year: 11 is the month, November.' },
            { q: 'Farah es la mujer de Omar. En el formulario escribe: Estado civil: ___', o: ['casada', 'casado', 'soltera'], why: 'Farah is married and a woman: *casada*.' },
            { q: '1990 es ___.', o: ['mil novecientos noventa', 'mil nueve noventa', 'diecinueve noventa'], why: 'Years before 2000: *mil novecientos* + the rest.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the number in words.', items: [
            { q: '45: cuarenta y ___', a: ['cinco'], why: 'From 31: tens + *y* + ones.' },
            { q: '28: ___', a: ['veintiocho'], why: 'From 21 to 29, one word: *veinti* + *ocho*.' },
            { q: '60: ___', a: ['sesenta'], why: '60 is *sesenta*. Do not mix it up with 70, *setenta*.' },
            { q: 'Omar tiene treinta y tres ___.', a: ['años'], why: 'Age: *tener* + number + *años*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'At the counter',
      about: 'Answer questions at an office, with tener, necesitar and usted.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In many Spanish offices, you need an appointment: **una cita** or **cita previa**. You usually book it online or by phone. At the counter, the first question is often *¿Tiene cita?*' },
          { t: 'table', caption: 'tener (to have) and necesitar (to need)', explain: ['head'], quiz: true, head: ['Person', 'tener', 'necesitar'], rows: [
            ['yo', 'tengo', 'necesito'],
            ['tú', 'tienes', 'necesitas'],
            ['él, ella, usted', 'tiene', 'necesita'],
            ['nosotros, nosotras', 'tenemos', 'necesitamos'],
            ['vosotros, vosotras', 'tenéis', 'necesitáis'],
            ['ellos, ellas, ustedes', 'tienen', 'necesitan'],
          ] },
          { t: 'tip', art: 'churro', md: '*tener* is irregular: *tengo*, *tienes*. *necesitar* is a regular *-ar* verb, like *hablar*. In Argentina and some other countries, an appointment is often *un turno*.' },
        ],
        [
          { t: 'dialogue', title: 'En el ayuntamiento', lines: [
            { who: 'Funcionaria', s: 'Buenos días. ¿Tiene cita?' },
            { who: 'Omar', s: 'Sí, a las diez. Necesito empadronarme.' },
            { who: 'Funcionaria', s: 'Muy bien. ¿Tiene el pasaporte y el contrato de alquiler?' },
            { who: 'Omar', s: 'Sí, aquí tiene.' },
            { who: 'Funcionaria', s: '¿Cuál es su domicilio?' },
            { who: 'Omar', s: 'Calle Mayor, número 8, segundo A.' },
            { who: 'Funcionaria', s: '¿Vive usted solo?' },
            { who: 'Omar', s: 'No, vivo con mi mujer, Farah. Ella también tiene cita, mañana.' },
            { who: 'Funcionaria', s: 'Perfecto. Firme aquí, por favor.' },
          ] },
          { t: 'text', md: 'With **usted**, the possessive is **su**: *¿Cuál es **su** domicilio?* (your address). *su* also means *his* or *her*, so the situation tells you. A question can be the same as a sentence, with a rising voice at the end: *¿Vive usted solo?*' },
        ],
        [
          { t: 'tip', art: 'owl', md: 'In Spain, the list of people who live in a town is *el padrón*. To be on it, you *te empadronas* at the town hall. People often need it for other papers, for example at the health centre. Each town has its own rules, so ask your town hall which papers to bring.' },
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of tener.', verb: 'tener', tense: 'present', rows: [
            ['yo', 'tengo'],
            ['tú', 'tienes'],
            ['él, ella, usted', 'tiene'],
            ['nosotros', 'tenemos'],
            ['vosotros', 'tenéis'],
            ['ellos, ellas, ustedes', 'tienen'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer to each question.', items: [
            { q: '¿Tiene cita?', o: ['Sí, a las once.', 'Sí, en Madrid.', 'Sí, soy egipcio.'], why: '*una cita* is an appointment, so you give a time.' },
            { q: '¿Cuál es su domicilio?', o: ['Calle Mayor, 8.', 'El 14 de febrero.', 'Treinta y tres años.'], why: '*domicilio* is your address.' },
            { q: '¿Cuál es su estado civil?', o: ['Soy soltero.', 'Soy de El Cairo.', 'Tengo un hijo.'], why: '*estado civil*: single, married, divorced or widowed.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'At the office, ask with usted, not tú.', items: [
            { q: '¿Tienes cita?', a: ['¿Tiene cita?', '¿Tiene usted cita?', '¿Usted tiene cita?'], why: 'With *usted*, use the form of *él* and *ella*: *tiene*.' },
            { q: '¿Cuál es tu nombre?', a: ['¿Cuál es su nombre?'], why: 'The possessive for *usted* is *su*.' },
            { q: '¿Vives sola?', a: ['¿Vive sola?', '¿Vive usted sola?', '¿Usted vive sola?'], why: '*vivir* with *usted*: *vive*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Para el padrón, ___ el contrato de alquiler.', o: ['necesito', 'necesita', 'necesitas'], why: 'With *yo*: *necesito*.' },
            { q: 'Mi mujer y yo ___ cita mañana.', o: ['tenemos', 'tienen', 'tengo'], why: '*Mi mujer y yo* = *nosotros*: *tenemos*.' },
            { q: 'Señora, ¿cuál es ___ número de teléfono?', o: ['su', 'tu', 'mi'], why: '*Señora* means you use *usted*, so the possessive is *su*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions you hear at a counter.', items: [
            { a: '¿Cuál es su fecha de nacimiento?', why: '*¿Cuál es…?* + *su* + the thing you ask for.' },
            { a: '¿Tiene usted el pasaporte?', why: 'Verb, then *usted*, then the object.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A form and an appointment',
      about: 'Read a simple registration form and a message about an appointment.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Farah fills in her form for the *padrón*. The real form in your town can look different, but the words are usually the same.' },
          { t: 'reading', title: 'Solicitud de inscripción en el padrón', md: 'Domicilio: calle Mayor, 8, 2.º A\nCódigo postal: 46001\nMunicipio: Valencia\n\nNombre: Farah\nPrimer apellido: Nasser\nSegundo apellido: \nSexo: mujer\nFecha de nacimiento: 30/06/1995\nLugar de nacimiento: Alejandría, Egipto\nNacionalidad: egipcia\nDocumento: pasaporte\nEstado civil: casada\n\nPersonas en el domicilio: 2\nFecha: 15/09/2026\nFirma: F. Nasser' },
          { t: 'ex', kind: 'tf', h: 'Read the form. True or false?', items: [
            { q: 'Farah tiene dos apellidos.', a: 'f', why: '*Segundo apellido* is empty: she has one surname.' },
            { q: 'Farah es de Alejandría.', a: 't', why: '*Lugar de nacimiento: Alejandría, Egipto*.' },
            { q: 'Farah tiene treinta y un años en 2026.', a: 't', why: 'Born on 30 June 1995: in September 2026 she is 31.' },
            { q: 'En el piso viven tres personas.', a: 'f', why: '*Personas en el domicilio: 2*, Farah and Omar.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Cita previa confirmada', md: 'Ayuntamiento de Valencia. Oficina de Atención a la Ciudadanía.\n\nEstimada señora Nasser:\n\nSu cita es el martes, 15 de septiembre, a las 9:30, en la calle Mayor, número 1, planta baja.\n\nPara el padrón necesita su pasaporte original, el contrato de alquiler y el formulario firmado. El trámite es gratuito.\n\nPor favor, llegue diez minutos antes. Si no puede venir, anule la cita en la página web del ayuntamiento.\n\nUn saludo.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the message. True, false or not given?', items: [
            { q: 'La cita es por la mañana.', a: 't', why: 'At 9:30: in the morning.' },
            { q: 'Farah necesita el contrato de alquiler.', a: 't', why: 'It says *necesita … el contrato de alquiler*.' },
            { q: 'El padrón cuesta veinte euros.', a: 'f', why: '*El trámite es gratuito*: it costs nothing.' },
            { q: 'Farah puede anular la cita por teléfono.', a: 'ng', why: 'The message only says *en la página web*. It does not say if the phone is possible.' },
            { q: 'La oficina está en la planta baja.', a: 't', why: '*planta baja* is the ground floor.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Useful words in letters from an office: *el trámite* (a piece of paperwork), *gratuito* (free of charge), *anular* (to cancel), *la planta baja* (the ground floor). *Estimada señora* and *Estimado señor* start a polite letter.' },
          { t: 'ex', kind: 'spot', h: 'Tap the three things Farah brings.', items: [
            { s: 'Necesita su [pasaporte] original, el [contrato] de alquiler y el [formulario] firmado.', why: 'Passport, rental contract and the signed form.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which word is not about a form or an office?', items: [
            { o: ['la playa', 'la firma', 'el domicilio', 'el apellido'], why: '*la playa* is the beach. The others are fields on a form.' },
            { o: ['febrero', 'soltero', 'casado', 'divorciado'], why: '*febrero* is a month. The others are a marital status.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Estado civil: ___', o: ['soltera', 'Valencia', 'Nasser'], why: '*soltera* (single) is a marital status.' },
      { q: 'Fecha de nacimiento: 05/12/1999. Es el 5 de ___.', o: ['diciembre', 'mayo', 'febrero'], why: 'Day, month, year: 12 is December.' },
      { q: 'At an office: ¿Cuál es ___ domicilio?', o: ['su', 'tu', 'mi'], why: 'With *usted*: *su*.' },
      { q: '70 es ___.', o: ['setenta', 'sesenta', 'diecisiete'], why: '70 is *setenta*. 60 is *sesenta*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '¿___ usted cita? (tener)', a: ['Tiene'], why: '*usted*: *tiene*.' },
      { q: 'Yo ___ treinta años. (tener)', a: ['tengo'], why: 'Age with *tener*: *tengo … años*.' },
      { q: 'Para el padrón, ¿qué papeles ___? (necesitar, yo)', a: ['necesito'], why: 'Regular *-ar* verb, *yo*: *necesito*.' },
      { q: '52: cincuenta ___ dos', a: ['y'], why: 'From 31, tens + *y* + ones.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Cuál es su fecha de nacimiento?', why: '*¿Cuál es…?* + *su* + the thing.' },
      { a: 'Mi fecha de nacimiento es el 3 de mayo.', why: '*el* + day + *de* + month.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Ask with usted, not tú.', items: [
      { q: '¿Tienes el pasaporte?', a: ['¿Tiene el pasaporte?', '¿Tiene usted el pasaporte?', '¿Usted tiene el pasaporte?'], why: 'With *usted*: *tiene*.' },
      { q: '¿Necesitas el formulario?', a: ['¿Necesita el formulario?', '¿Necesita usted el formulario?', '¿Usted necesita el formulario?'], why: 'With *usted*: *necesita*.' },
    ] },
  ],
};
