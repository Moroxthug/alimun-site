// Spanish A2 for moving abroad, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Arriving',
  goal: 'Introduce yourself at an office, spell your name and fill in a simple form.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['personal-details', 'alphabet', 'numbers-dates', 'forms', 'formal-usted', 'registration'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Spelling your name',
      about: 'Spell your name and say your date of birth, phone number and address.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'At an office or on the phone, people often ask you to spell your name: *¿Cómo se escribe?* Many Spanish letters have names that are different from English. Learn these first.' },
          { t: 'table', caption: 'Letters with a different name', explain: ['head'], quiz: true, head: ['Letter', 'Name in Spanish'], rows: [
            ['E', 'e'],
            ['G', 'ge'],
            ['H', 'hache'],
            ['I', 'i'],
            ['J', 'jota'],
            ['Ñ', 'eñe'],
            ['R', 'erre'],
            ['V', 'uve'],
            ['W', 'uve doble'],
            ['Y', 'i griega'],
            ['Z', 'zeta'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Spanish, **b** and **v** sound the same, so people ask: *¿Con be o con uve?* On the phone, people often add a word for a letter so it is clear: *eme de Madrid*, *be de Barcelona*. In Latin America, many people say *ve* or *ve corta* for V, *doble ve* for W and *ye* for Y.' },
        ],
        [
          { t: 'dialogue', title: 'Al teléfono', lines: [
            { who: 'Javier', s: '¿Cómo se llama usted, por favor?' },
            { who: 'Lina', s: 'Lina Haddad.' },
            { who: 'Javier', s: '¿Cómo se escribe Haddad?' },
            { who: 'Lina', s: 'Hache, a, de, de, a, de.' },
            { who: 'Javier', s: 'Gracias. ¿Y cuál es su fecha de nacimiento?' },
            { who: 'Lina', s: 'El 9 de octubre de 1994.' },
            { who: 'Javier', s: '¿Cuál es su número de teléfono?' },
            { who: 'Lina', s: 'Es el 600 12 34 56.' },
            { who: 'Javier', s: '¿Y dónde vive?' },
            { who: 'Lina', s: 'En la calle de los Olivos, número 7, tercero B. El código postal es 28013, Madrid.' },
          ] },
          { t: 'text', md: 'In Spain, a date is written day, month, year: **09/10/1994**. Say the year as a normal number: 1994 is *mil novecientos noventa y cuatro*, 2005 is *dos mil cinco*. Months have no capital letter: *octubre*.' },
          { t: 'examples', items: [
            { s: '**Nací el** 9 de octubre de 1994.', n: '*nací* = I was born. Say *el* + day + *de* + month + *de* + year.' },
            { s: 'Mi número de teléfono **es el** 600 12 34 56.', n: 'People often say the digits in groups: *seiscientos, doce, treinta y cuatro, cincuenta y seis*.' },
            { s: 'Vivo en la calle de los Olivos, **número 7, tercero B**.', n: 'Street, house number, then the floor (*tercero* = third) and the door (*B*).' },
            { s: 'Soy **de** Siria. Soy **siria**.', n: '*de* + country. Many nationality words have a form for men and one for women: *sirio*, *siria*.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'In Spain, most people have **two surnames**: usually the first comes from the father and the second from the mother. A woman keeps her own surnames when she marries. A Spanish postcode, the *código postal*, has five digits and comes before the town: *28013 Madrid*.' },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: the letter and its Spanish name.', pairs: [
            ['J', 'jota'],
            ['V', 'uve'],
            ['H', 'hache'],
            ['Z', 'zeta'],
            ['Y', 'i griega'],
            ['Ñ', 'eñe'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Fecha de nacimiento: 11/04/1988. Nació en ___.', o: ['abril', 'noviembre', 'enero'], why: 'Day, month, year: 11 is the day and 04 is the month, April.' },
            { q: '1988 se dice: ___', o: ['mil novecientos ochenta y ocho', 'diecinueve ochenta y ocho', 'mil nueve ochenta y ocho'], why: 'Say the year as one number: *mil* + *novecientos* + *ochenta y ocho*.' },
            { q: '¿Su apellido se escribe con be o con ___?', o: ['uve', 'jota', 'hache'], why: '*b* and *v* sound the same in Spanish, so people often ask which one it is.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: '¿Cómo se ___ su nombre? (escribir)', a: ['escribe'], why: 'With *se* the verb takes the *él* form: *se escribe*.' },
            { q: '___ el 9 de octubre de 1994. (I was born)', a: ['Nací', 'Naci'], why: '*nacer*: *yo nací*, with an accent on the *í*.' },
            { q: 'Soy ___ Brasil.', a: ['de'], why: 'Your country of origin: *de* + country.' },
            { q: 'Vivo ___ la calle Mayor, número 12.', a: ['en'], why: 'For a street: *vivo en la calle…*' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Ella es de Ghana. Es ___.', o: ['ghanesa', 'ghanés', 'ghaneses'], why: 'For a woman: *ghanesa*. *Ghanés* is for a man.' },
            { q: 'El código postal tiene ___ números.', o: ['cinco', 'cuatro', 'seis'], why: 'A Spanish postcode has five digits: *28013*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Filling in a form',
      about: 'The words on a Spanish form, and polite questions with usted at a counter.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'Soon after you arrive, you fill in many forms: at the town hall (*el ayuntamiento*), at the bank, at the health centre. A form is a **formulario** or an **impreso**, and you **rellenas** it (fill it in). These words are on almost every one.' },
          { t: 'table', caption: 'Words on a form', explain: ['head', 'col1'], quiz: true, head: ['On the form', 'Meaning'], rows: [
            ['Nombre', 'first name'],
            ['Primer apellido', 'first surname'],
            ['Segundo apellido', 'second surname'],
            ['Fecha de nacimiento', 'date of birth'],
            ['Lugar de nacimiento', 'place of birth'],
            ['Nacionalidad', 'nationality'],
            ['Estado civil', 'marital status'],
            ['Domicilio', 'address'],
            ['Correo electrónico', 'email'],
            ['Firma', 'signature'],
          ] },
          { t: 'tip', art: 'owl', md: 'For *estado civil* you write *soltero/soltera* (single), *casado/casada* (married), *divorciado/divorciada* (divorced) or *viudo/viuda* (widowed). *Escriba en mayúsculas* means: please write in capital letters.' },
        ],
        [
          { t: 'text', md: 'At an office, people often say **usted**. With *usted*, the verb has the same form as with *él* and *ella*: *¿Dónde vive usted?* The word for your is **su**: *su nombre*, *su pasaporte*. Polite requests: *Firme aquí, por favor. Rellene este impreso.*' },
          { t: 'dialogue', title: 'En el ayuntamiento', lines: [
            { who: 'Marta', s: 'Buenos días. ¿Tiene cita?' },
            { who: 'Kwame', s: 'Sí, a las nueve y cuarenta. Quería empadronarme.' },
            { who: 'Marta', s: '¿Ha rellenado ya el formulario?' },
            { who: 'Kwame', s: 'Sí, aquí está. Y aquí tiene mi pasaporte.' },
            { who: 'Marta', s: 'Gracias. ¿Está usted casado?' },
            { who: 'Kwame', s: 'Sí. Mi mujer también vive en el piso.' },
            { who: 'Marta', s: 'Muy bien. Firme aquí abajo, por favor.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Empadronarse* means to register your address at the town hall. *Quería…* (I wanted) is a polite way to say what you want. In Latin America, people use *usted* more often than in Spain, also with people they know.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Kwame Mensah fills in a form. Match each field and his answer.', pairs: [
            ['Nombre', 'Kwame'],
            ['Primer apellido', 'Mensah'],
            ['Fecha de nacimiento', '14/02/1993'],
            ['Lugar de nacimiento', 'Acra'],
            ['Nacionalidad', 'ghanesa'],
            ['Estado civil', 'casado'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer to each question.', items: [
            { q: '¿Cuál es su estado civil?', o: ['Estoy divorciada.', 'Soy de Polonia.', 'Nací en 1990.'], why: '*Estado civil* asks if you are single, married, divorced or widowed.' },
            { q: '¿Dónde nació usted?', o: ['En Bogotá.', 'El 3 de mayo.', 'Desde hace dos años.'], why: '*¿Dónde?* asks for a place. *¿Cuándo?* would ask for the date.' },
            { q: '¿Tiene cita?', o: ['Sí, a las diez.', 'Sí, en Sevilla.', 'Sí, estoy soltero.'], why: 'A *cita* is an appointment, so you give a time.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the questions you hear at a counter.', items: [
            { a: '¿Cuándo llegó usted a España?', why: 'Question word first, then the verb *llegó* and *usted*. *llegó* is the past, *él/usted* form.' },
            { a: '¿Cuántos hijos tiene usted?', why: '*¿Cuántos hijos?* is the question phrase. The verb *tiene* comes after it.' },
            { a: '¿Cuál es su número de teléfono?', why: '*¿Cuál es…?* asks for a number or a piece of information.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake. The speaker uses usted.', items: [
            { s: '¿Cómo [te llamas] usted?', a: ['se llama'], why: 'With *usted*, use the *él/ella* form: *se llama*.' },
            { s: '¿Dónde [vives] usted?', a: ['vive'], why: '*usted vive*, like *él vive*.' },
            { s: '¿Cuál es [tu] dirección, señora?', a: ['su'], why: 'With *usted*, your is *su*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the requests.', items: [
            { q: '___ aquí, por favor. (firmar, usted)', a: ['Firme'], why: 'A polite request with *usted*: *-ar* verbs end in *-e*: *firme*.' },
            { q: '___ este formulario, por favor. (rellenar, usted)', a: ['Rellene'], why: '*rellenar* is an *-ar* verb: *rellene*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A form and a letter',
      about: 'Read a registration form and a letter that confirms an appointment.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In Spain you usually register your address at the town hall of your town soon after you move in. The list of the people who live in a town is **el padrón**. Kwame and his wife Abena filled in this form.' },
          { t: 'reading', title: 'Hoja de inscripción en el padrón', md: 'Domicilio: calle de los Almendros, 14, 2.º A, 46005 Valencia\nFecha de llegada: 01/09/2026\nDomicilio anterior: Ring Road 22, Acra, Ghana\n\nPersona 1\nNombre: Kwame\nPrimer apellido: Mensah\nFecha de nacimiento: 14/02/1993\nLugar de nacimiento: Acra\nSexo: hombre\nNacionalidad: ghanesa\nDocumento: pasaporte\n\nPersona 2\nNombre: Abena\nPrimer apellido: Owusu\nFecha de nacimiento: 30/06/1995\nLugar de nacimiento: Kumasi\nSexo: mujer\nNacionalidad: ghanesa\nDocumento: pasaporte\n\nTeléfono: 600 98 76 54\nCorreo electrónico: kwame.mensah@example.com\n\nValencia, 3 de septiembre de 2026\nFirma: K. Mensah' },
          { t: 'ex', kind: 'tf', h: 'Read the form. True or false?', items: [
            { q: 'Kwame y Abena viven en Valencia.', a: 't', why: 'The address on the form is in Valencia.' },
            { q: 'El apellido de Abena es Owusu.', a: 't', why: '*Primer apellido: Owusu*. She keeps her own surname.' },
            { q: 'Kwame nació en Kumasi.', a: 'f', why: 'His *lugar de nacimiento* is Acra. Abena was born in Kumasi.' },
            { q: 'Llegaron al piso el 3 de septiembre.', a: 'f', why: 'The *fecha de llegada* is 01/09. They signed the form on 3 September.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Confirmación de cita', md: 'Estimado señor Mensah:\n\nSu cita en la Oficina de Atención Ciudadana del Distrito Norte está confirmada. Es el martes 8 de septiembre de 2026, a las 9:40, en la ventanilla 12.\n\nPor favor, traiga su pasaporte, el formulario de inscripción y su contrato de alquiler. ¿Viene también su mujer? Entonces traiga también el pasaporte de ella.\n\nLlegue a la hora, por favor. Si llega tarde, puede perder la cita. ¿No puede venir? Entonces cancele la cita en nuestra página web.\n\nEste trámite es gratuito. Después de la cita, recibe un certificado de empadronamiento.\n\nUn saludo,\nAyuntamiento de Valencia, Oficina de Atención Ciudadana' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the letter. True, false or not given?', items: [
            { q: 'La cita es el martes por la mañana.', a: 't', why: 'Tuesday at 9:40: in the morning, *por la mañana*.' },
            { q: 'El señor Mensah necesita su contrato de alquiler.', a: 't', why: '*Traiga… su contrato de alquiler.*' },
            { q: 'El trámite cuesta diez euros.', a: 'f', why: '*Este trámite es gratuito*: it costs nothing.' },
            { q: 'El señor Mensah puede cancelar la cita por teléfono.', a: 'ng', why: 'The letter only says *en nuestra página web*. It does not say if the phone is possible.' },
            { q: 'La ventanilla 12 está en la primera planta.', a: 'ng', why: 'The letter gives the number of the counter, but not the floor.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Keep your *certificado de empadronamiento* in a safe place: you often need it, for example for the health card or a school. Foreigners in Spain usually also need an identity number for foreigners, often called the *NIE*. In Latin America, the offices and documents have other names, so ask at your town hall.' },
          { t: 'ex', kind: 'spot', h: 'Tap the three documents Señor Mensah brings.', items: [
            { s: 'Por favor, traiga su [pasaporte], el [formulario] de inscripción y su [contrato] de alquiler.', why: 'Passport, the filled-in form and the rental contract.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What does the word mean?', items: [
            { q: 'Una confirmación de cita dice: ___', o: ['Usted tiene una cita.', 'Su cita está cancelada.', 'Usted necesita una cita.'], why: '*confirmar* means to confirm: the appointment is booked.' },
            { q: 'Un trámite gratuito ___.', o: ['no cuesta dinero', 'es muy caro', 'es por internet'], why: '*gratuito* or *gratis*: it costs nothing.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Estado civil: ___', o: ['soltera', 'Valencia', 'Mensah'], why: '*soltera* (single) is a marital status.' },
      { q: 'La letra J se llama ___.', o: ['jota', 'hache', 'ge'], why: 'J is *jota*. H is *hache* and G is *ge*.' },
      { q: 'Fecha de nacimiento: 05/12/1999. Nació en ___.', o: ['diciembre', 'mayo', 'febrero'], why: 'Day, month, year: 12 is the month, December.' },
      { q: '___ aquí, por favor.', o: ['Firme', 'Firmas', 'Firmo'], why: 'A polite request with *usted*: *Firme aquí.*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '¿Cómo se ___ su apellido? (escribir)', a: ['escribe'], why: '*se escribe*, with the *él* form.' },
      { q: 'Soy ___ Turquía.', a: ['de'], why: '*de* + country.' },
      { q: '¿___ usted hijos? (tener)', a: ['Tiene'], why: '*usted tiene*, like *él tiene*.' },
      { q: 'Al llegar a una ciudad, la gente se inscribe en el ___ del ayuntamiento.', a: ['padrón', 'padron'], why: 'The list of residents of a town is *el padrón*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake. The speaker uses usted.', items: [
      { s: '¿Dónde [naciste] usted?', a: ['nació', 'nacio'], why: 'With *usted*, the *él/ella* form: *nació*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: '¿Cuál es su número de teléfono?', why: '*¿Cuál es…?* + *su número de teléfono*.' },
      { a: '¿Cuándo nació usted?', why: 'Question word, verb, then *usted*.' },
      { a: '¿Cómo se escribe su apellido?', why: 'Question word, *se escribe*, then what is spelled.' },
    ] },
  ],
};
