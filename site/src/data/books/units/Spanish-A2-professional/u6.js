// Spanish A2 for work, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Applying for a job',
  goal: 'Understand a job advert and answer simple interview questions.',
  art: 'suitcase',
  tags: { skills: ['reading', 'speaking', 'writing'], topics: ['job-adverts', 'cv', 'job-interview', 'preterito-perfecto', 'preterito-indefinido'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Job adverts',
      about: 'The words every job advert uses: jornada completa, media jornada, experiencia, conocimientos.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'Job adverts are short and use many fixed words. *Se busca* or *Buscamos* says who the company wants. *Ofrecemos* says what the company gives you.\n\nAdverts often name a job in both forms, *dependiente/a*, or say that men and women can apply.' },
          { t: 'table', caption: 'Words in job adverts', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['la jornada completa', 'full-time, often 40 hours a week'],
            ['la media jornada', 'part-time, often 20 hours a week'],
            ['la experiencia', 'the work you have already done'],
            ['los conocimientos de', 'what you know, for example of a language or a program'],
            ['el contrato indefinido', 'a contract with no end date'],
            ['el contrato temporal', 'a contract for a fixed time'],
            ['el sueldo', 'the money you earn'],
            ['la incorporación inmediata', 'you can start at once'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Spain you send your *currículum* (also *CV*) and sometimes a *carta de presentación*, a short letter about why you want the job. In many Latin American countries the CV is also called *hoja de vida*.' },
        ],
        [
          { t: 'reading', title: 'Oferta de empleo', md: '**Se busca dependiente/a a media jornada**\n\nTienda de ropa en el centro de Málaga busca dependiente o dependienta a partir de septiembre.\n\n**Ofrecemos:**\ncontrato indefinido de 20 horas a la semana\nhorario de tarde, de lunes a viernes\nbuen ambiente de trabajo\n\n**Buscamos:**\nexperiencia en ventas (mínimo un año)\nbuen nivel de español; conocimientos básicos de inglés\npersona amable y organizada\n\nEnvía tu currículum a empleo@example.com antes del 15 de agosto.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the advert. True, false or not given?', items: [
            { q: 'La tienda busca a una persona para 40 horas a la semana.', a: 'f', why: 'It is *media jornada*: *20 horas a la semana*.' },
            { q: 'El trabajo es por la tarde.', a: 't', why: '*horario de tarde*.' },
            { q: 'Necesitas experiencia en ventas.', a: 't', why: '*experiencia en ventas (mínimo un año)*.' },
            { q: 'El contrato es solo para el verano.', a: 'f', why: 'It is a *contrato indefinido*, with no end date.' },
            { q: 'El sueldo es de 900 euros al mes.', a: 'ng', why: 'The advert does not say how much the job pays.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and the example.', pairs: [
            ['jornada completa', 'de lunes a viernes, de 9:00 a 18:00'],
            ['media jornada', 'cuatro horas al día'],
            ['experiencia', 'Trabajé dos años en un restaurante.'],
            ['conocimientos de informática', 'Sé usar el ordenador y los programas de oficina.'],
            ['incorporación inmediata', 'Puede empezar mañana.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences from job adverts.', items: [
            { q: 'Se ___ camarero para un restaurante en Sevilla. (buscar)', a: ['busca'], why: '*Se busca*: the company is looking for someone.' },
            { q: 'Ofrecemos un ___ indefinido.', a: ['contrato'], why: '*contrato indefinido*: a contract with no end date.' },
            { q: 'Buscamos una persona con ___ en hostelería.', a: ['experiencia'], why: '*experiencia en* + the area of work.' },
            { q: 'Envía tu ___ a empleo@example.com.', a: ['currículum', 'curriculum', 'CV'], why: 'You send your *currículum*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Your CV and the interview',
      about: 'Read a simple CV and answer short questions about yourself.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Currículum', md: '**Datos personales**\nNombre: Ana Lima\nCiudad: Málaga\n\n**Experiencia laboral**\ndesde 03/2024: camarera en un café del centro, Málaga\nde 2021 a 2023: dependienta en una tienda de ropa, Lisboa\n\n**Formación**\n2020: Bachillerato, Lisboa\n\n**Idiomas**\nportugués: lengua materna\nespañol: nivel B1\ninglés: nivel A2\n\n**Otros datos**\ncarné de conducir' },
          { t: 'ex', kind: 'choice', h: 'Read the CV and choose the right answer.', items: [
            { q: '¿Dónde trabaja Ana ahora?', o: ['en un café de Málaga', 'en una tienda de ropa de Lisboa', 'en un hotel de Málaga'], why: '*desde 03/2024: camarera en un café del centro, Málaga*.' },
            { q: '¿Cuántos años trabajó Ana en la tienda de ropa?', o: ['unos dos años', 'un año', 'cinco años'], why: '*de 2021 a 2023*.' },
            { q: '¿Qué idioma habla Ana mejor?', o: ['portugués', 'español', 'inglés'], why: '*portugués: lengua materna*, her first language.' },
          ] },
        ],
        [
          { t: 'text', md: 'In an interview you talk about your experience. In Spain people use two past tenses:\n\nthe **pretérito perfecto** for experience up to now, without a date: *He trabajado en hostelería. He sido dependienta.*\n\nthe **pretérito indefinido** for a finished time with a date: *En 2022 trabajé en Lisboa. De 2021 a 2023 fui dependienta.*\n\nFor something that started in the past and is still true, use the present with **desde** or **desde hace**: *Trabajo en un café desde 2024. Vivo en Málaga desde hace un año.*' },
          { t: 'tip', art: 'churro', md: 'In much of Latin America people use the *indefinido* also for experience up to now: *Trabajé en hostelería.* Both are understood everywhere.' },
          { t: 'examples', items: [
            { s: '**He trabajado** dos años como camarera.', n: 'Experience up to now: *pretérito perfecto*.' },
            { s: 'En 2022 **trabajé** en una tienda de ropa.', n: 'A finished time with a date: *indefinido*.' },
            { s: 'Hablo español **desde hace** tres años.', n: '*desde hace* + a period of time, with the present.' },
            { s: 'Puedo empezar **el 1 de septiembre**.', n: 'An answer to *¿Cuándo puede empezar?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the pretérito perfecto of trabajar.', verb: 'trabajar', tense: 'pretérito perfecto', rows: [
            ['yo', 'he trabajado'],
            ['tú', 'has trabajado'],
            ['él, ella, usted', 'ha trabajado'],
            ['nosotros, nosotras', 'hemos trabajado'],
            ['vosotros, vosotras', 'habéis trabajado|habeis trabajado'],
            ['ellos, ellas, ustedes', 'han trabajado'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the answers.', items: [
            { q: '¿Qué experiencia tiene? Pues, ___ trabajado tres años en un hotel. (yo)', a: ['he'], why: '*pretérito perfecto*: *yo he trabajado*.' },
            { q: 'En 2023 ___ en un restaurante en Valencia. (trabajar, yo)', a: ['trabajé', 'trabaje'], why: 'A finished time with a date: *indefinido*, *trabajé*.' },
            { q: 'Vivo en España ___ hace dos años.', a: ['desde'], why: '*desde hace* + a period of time.' },
            { q: '¿Cuándo puede empezar? ___ empezar el lunes. (poder, yo)', a: ['Puedo'], why: '*yo puedo* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the interview questions.', items: [
            { a: '¿Por qué quiere trabajar con nosotros?', why: '*¿Por qué?*, two words, asks for a reason.' },
            { a: '¿Qué experiencia tiene usted?', why: 'A common question in an interview.' },
            { a: '¿Cuándo puede empezar?', why: '*poder* + infinitive.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['¿Qué idiomas habla?', 'Portugués, español e inglés.'],
            ['¿Por qué quiere este trabajo?', 'Porque me gusta trabajar con personas.'],
            ['¿Cuándo puede empezar?', 'El 1 de septiembre.'],
            ['¿Tiene carné de conducir?', 'Sí, desde hace diez años.'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: adverts and an invitation',
      about: 'Compare two job adverts and read an invitation to an interview.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'Anuncio 1', md: '**Ayudante de cocina a jornada completa**\n\nRestaurante en el centro de Granada busca ayudante de cocina. Horario de martes a sábado, de 12:00 a 16:00 y de 19:00 a 23:00. No es necesaria experiencia: te formamos nosotros. Contrato temporal de seis meses, con posibilidad de contrato indefinido. Incorporación inmediata.\n\nLlama al 958 00 00 47 o ven al restaurante con tu currículum.' },
          { t: 'reading', title: 'Anuncio 2', md: '**Administrativo/a a media jornada**\n\nSomos una pequeña asesoría en Murcia y buscamos un administrativo o una administrativa para las mañanas, de 9:00 a 13:00. Necesitas experiencia en oficina, conocimientos de informática y buen nivel de español. El inglés es una ventaja.\n\nEnvía tu currículum y una carta de presentación a trabajo@example.com.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the two adverts. True, false or not given?', items: [
            { q: 'Para el trabajo en la cocina no necesitas experiencia.', a: 't', why: '*No es necesaria experiencia: te formamos nosotros.*' },
            { q: 'El restaurante abre los lunes.', a: 'ng', why: 'The advert gives the hours of the job, not the hours of the restaurant.' },
            { q: 'El contrato en la cocina es indefinido desde el primer día.', a: 'f', why: 'It is *temporal de seis meses*, maybe *indefinido* later.' },
            { q: 'El trabajo en la asesoría es por la tarde.', a: 'f', why: 'It is *para las mañanas, de 9:00 a 13:00*.' },
            { q: 'En la asesoría tienes que hablar inglés.', a: 'f', why: '*El inglés es una ventaja*: it helps, but you do not need it.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two documents that go with the application.', items: [
            { s: 'Envía tu [currículum] y una [carta de presentación] a trabajo@example.com.', why: 'The *currículum* and the *carta de presentación* go with the application.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Invitación a una entrevista', md: 'Estimado señor Tesfaye:\n\nMuchas gracias por su interés en el puesto de ayudante de cocina. Nos gustaría conocerlo en persona. Le invitamos a una entrevista el martes 9 de septiembre a las 11:00 en el restaurante.\n\nLa entrevista dura unos treinta minutos. Después puede hacer una prueba de dos horas en la cocina. Por favor, traiga ropa de trabajo cómoda.\n\n¿Puede confirmar la cita por correo o por teléfono?\n\nAtentamente,\nRosa Medina\nJefa de cocina' },
          { t: 'ex', kind: 'choice', h: 'Read the invitation and choose the right answer.', items: [
            { q: '¿Para qué trabajo es la entrevista?', o: ['ayudante de cocina', 'administrativo', 'dependiente'], why: '*el puesto de ayudante de cocina*.' },
            { q: '¿Qué hace el señor Tesfaye después de la entrevista?', o: ['una prueba en la cocina', 'una comida con el equipo', 'un curso de español'], why: '*Después puede hacer una prueba de dos horas en la cocina.*' },
            { q: '¿Qué tiene que traer?', o: ['ropa de trabajo cómoda', 'su carné de conducir', 'una carta de presentación'], why: '*Por favor, traiga ropa de trabajo cómoda.*' },
            { q: '¿Qué tiene que hacer antes de la entrevista?', o: ['confirmar la cita', 'enviar otro currículum', 'llamar al señor Medina'], why: '*¿Puede confirmar la cita por correo o por teléfono?* Rosa Medina is a woman: *la señora Medina*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'A job for 20 hours a week is ___.', o: ['a media jornada', 'a jornada completa', 'de incorporación inmediata'], why: '*media jornada*: part-time.' },
      { q: 'A contract with no end date is a ___.', o: ['contrato indefinido', 'contrato temporal', 'contrato de prueba'], why: '*indefinido*: with no end date.' },
      { q: 'En 2022 ___ en Lisboa.', o: ['trabajé', 'he trabajado', 'trabajo'], why: 'A finished time with a date: *indefinido*.' },
      { q: 'The interviewer asks: *¿Cuándo puede empezar?* You say:', o: ['Puedo empezar el lunes.', 'He empezado el lunes.', 'Empiezo hace un lunes.'], why: '*poder* + infinitive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '___ busca cocinero para un hotel en Cádiz.', a: ['Se'], why: '*Se busca*: the company is looking for someone.' },
      { q: 'He ___ dos años como recepcionista. (trabajar)', a: ['trabajado'], why: '*pretérito perfecto*: *he* + *trabajado*.' },
      { q: 'Vivo en Madrid desde ___ un año.', a: ['hace'], why: '*desde hace* + a period of time.' },
      { q: 'Envíe su ___ y una carta de presentación.', a: ['currículum', 'curriculum', 'CV'], why: 'The *currículum* goes with the application.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
      ['¿Qué experiencia tiene?', 'He trabajado tres años en un hotel.'],
      ['¿Qué idiomas habla?', 'Árabe, francés y español.'],
      ['¿Cuándo puede empezar?', 'El 1 de octubre.'],
      ['¿Por qué quiere trabajar aquí?', 'Porque me gusta la cocina.'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Por qué quiere trabajar con nosotros?', why: '*Por qué* first, then the verb.' },
      { a: 'Trabajo en un café desde 2024.', why: 'Present + *desde*: it started in 2024 and is still true.' },
    ] },
  ],
};
