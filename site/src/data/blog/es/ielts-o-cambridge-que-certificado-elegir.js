// Template: compare. Facts: IELTS (owners, Academic and General Training, bands 0-9, results usually
// accepted for two years), Cambridge English Qualifications (one exam per level, certificate does not
// expire). Alimun practises these formats in its mock tests and is not affiliated with either.
export default {
  key: 'ielts-or-cambridge',
  site: 'es',
  slug: 'ielts-o-cambridge-que-certificado-elegir',
  template: 'compare',
  course: 'English',
  theme: 'levels',
  cover: ['IELTS', 'Cambridge'],
  published: '2026-10-26',
  updated: '2026-10-26',
  title: 'IELTS o Cambridge: ¿qué certificado de inglés te conviene?',
  metaTitle: '¿IELTS o Cambridge (B2 First, C1 Advanced)? Cómo elegir – Alimun',
  desc: 'En qué se diferencian IELTS y los exámenes de Cambridge English como B2 First y C1 Advanced, y cuál te sirve para un visado, la universidad o tu currículum.',
  lead: 'Los dos acreditan tu inglés y los dos están reconocidos en todo el mundo. Pero funcionan de forma distinta, y **el adecuado depende de para qué lo necesites**.',
  blocks: [
    { h: 'Los dos, en resumen' },
    { panels: [
      ['IELTS', 'Un solo examen para todos los niveles. Obtienes una **puntuación de 0 a 9** en Listening, Reading, Writing y Speaking, además de una puntuación global. Tiene dos versiones: Academic, para estudiar, y General Training, que se usa a menudo para trabajar y emigrar.'],
      ['Cambridge', 'Un examen para cada nivel, como **B2 First, C1 Advanced y C2 Proficiency**. Apruebas en el nivel del examen, con una puntuación en la Cambridge English Scale, y el certificado no caduca.'],
    ] },
    { h: 'Cara a cara' },
    { table: {
      head: ['', 'IELTS', 'Cambridge (B2 First, C1 Advanced)'],
      rows: [
        ['Organiza', 'British Council, IDP y Cambridge University Press & Assessment', 'Cambridge University Press & Assessment'],
        ['Resultado', 'Una puntuación de 0 a 9 por destreza y otra global', 'Aprobado en el nivel del examen, con una puntuación en la Cambridge English Scale'],
        ['Niveles', 'Un solo examen para todos los niveles', 'Un examen por nivel, de A2 Key a C2 Proficiency'],
        ['Prueba oral', 'Individual, con un examinador', 'Normalmente en parejas, con dos examinadores'],
        ['Validez', 'La mayoría de las instituciones aceptan resultados de hasta dos años', 'El certificado no caduca, aunque algunas piden uno reciente'],
      ],
      note: 'Consulta los datos actualizados en las webs oficiales de IELTS y Cambridge English antes de reservar.',
    } },
    { h: 'Cuándo conviene IELTS' },
    { p: 'Si necesitas el inglés para **un visado o para emigrar**, IELTS suele ser el examen que nombran las autoridades, y algunas exigen una versión concreta, como General Training. También lo aceptan muchísimas universidades, sobre todo en el Reino Unido, Australia, Canadá y Nueva Zelanda.' },
    { p: 'Como todo el mundo hace el mismo examen, IELTS también te encaja si **no estás seguro de tu nivel**: tu puntuación muestra dónde estás, sin el riesgo de elegir un examen demasiado difícil o demasiado fácil.' },
    { h: 'Cuándo conviene Cambridge' },
    { p: 'Si quieres un certificado **para tu currículum que dure**, un examen de Cambridge es una muy buena opción: no caduca, y empresas y universidades de toda Europa conocen bien el B2 First y el C1 Advanced.' },
    { p: 'Te encaja mejor cuando **ya conoces tu nivel**, porque cada examen apunta a uno. Preparar un examen concreto también te da un objetivo claro para tus estudios.' },
    { verdict: { title: 'Nuestro consejo', text: 'Parte del requisito, no del examen. Si una oficina de visados, una universidad o una empresa nombra un certificado, haz ese. Si la elección es tuya, elige **IELTS para emigrar y para necesidades a corto plazo**, y **Cambridge para una acreditación duradera** de un nivel que ya has alcanzado.' } },
    { note: { title: 'Practicar los formatos', text: 'En Alimun puedes practicar con tareas en el formato de B2 First, C1 Advanced e IELTS en los simulacros de examen. No son materiales oficiales de examen, y Alimun no está afiliada a los organismos examinadores.' } },
  ],
  faq: [
    ['¿IELTS es más difícil que Cambridge?', 'Ninguno es más difícil en sí: están construidos de forma diferente. IELTS te mide en una sola escala, mientras que un examen de Cambridge comprueba si has alcanzado un nivel concreto.'],
    ['¿Cuál aceptan las universidades británicas?', 'La mayoría de las universidades británicas aceptan IELTS Academic, y muchas también aceptan el C1 Advanced o el C2 Proficiency de Cambridge. Cada universidad indica qué exámenes y puntuaciones acepta para cada programa.'],
    ['¿Se puede suspender un examen de Cambridge?', 'Si tu puntuación queda por debajo del nivel del examen, puedes recibir un certificado del nivel inferior, o ningún certificado si la puntuación es demasiado baja. Con IELTS siempre obtienes una puntuación.'],
  ],
  related: ['cefr-english', 'how-long-english', 'german-articles'],
  sources: [
    ['IELTS', 'https://ielts.org'],
    ['Certificados de Cambridge English', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/'],
  ],
};
