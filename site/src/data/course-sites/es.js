// Spanish site (/es/): course pages written for Spanish speakers in Spain and Latin America.
// Facts only: no figures the platform or a public source cannot back up.

const LEVELS = {
  A1: 'Entiendes y usas expresiones cotidianas y frases muy sencillas, sabes presentarte y hacer preguntas sobre datos personales, si la otra persona habla despacio y con claridad.',
  A2: 'Te comunicas en situaciones sencillas y habituales, como la familia, las compras, el trabajo y el lugar donde vives, y describes con palabras simples tu entorno.',
  B1: 'Te desenvuelves en la mayoría de las situaciones que surgen al viajar, cuentas experiencias, planes y deseos y explicas brevemente tus opiniones.',
  B2: 'Entiendes las ideas principales de textos complejos, incluso técnicos de tu campo, y hablas con una soltura que hace natural la conversación con quien habla la lengua desde siempre.',
  C1: 'Usas la lengua de forma flexible y eficaz en la vida social, los estudios y el trabajo, y escribes textos claros y bien estructurados sobre temas complejos.',
  C2: 'Entiendes con facilidad casi todo lo que lees y escuchas y te expresas de forma espontánea, fluida y precisa, captando incluso los matices de significado.',
};

const waitlistRow = (name) => ['Cuándo abren las clases', [
  `Las clases de ${name} en Alimun todavía no están abiertas. Si te **apuntas gratis a la lista de espera**, recibes un correo en cuanto abran, sin pagar nada hoy. Mientras tanto, ya puedes seguir las clases de inglés y alemán.`,
]];
const levelRow = ['Cómo saber desde qué nivel empezar', [
  'El Marco común europeo de referencia divide el conocimiento de una lengua en seis niveles, de A1 a C2. **Medirte antes de empezar** te permite partir del punto adecuado y ver tus avances.',
]];

export default {
  site: 'es',
  locale: 'es_ES',
  courses: [
    { lang: 'English', slug: 'cursos-de-ingles-online', name: 'inglés', video: 'pexels-12156230-london', open: true },
    { lang: 'German', slug: 'cursos-de-aleman-online', name: 'alemán', video: 'pexels-29955338-berlin', open: true },
    { lang: 'French', slug: 'cursos-de-frances-online', name: 'francés', video: 'pexels-4272751-paris', open: false },
    { lang: 'Portuguese', slug: 'cursos-de-portugues-online', name: 'portugués', video: 'pexels-12890902-sintra', open: false },
    { lang: 'Italian', slug: 'cursos-de-italiano-online', name: 'italiano', video: 'pexels-15245121-rome', open: false },
  ],
  pageTitle: (c) => c.open ? `Cursos de ${c.name} online con clases en directo | Alimun` : `Cursos de ${c.name} online: lista de espera | Alimun`,
  metaDesc: (c) => c.open
    ? `Cursos de ${c.name} online en grupos con un profesor, en días y horarios fijos cada semana, deberes corregidos con ayuda de la IA y ejercicios con corrección inmediata. Desde €24 al mes.`
    : `Las clases de ${c.name} en Alimun abrirán pronto. Apúntate gratis a la lista de espera y te escribiremos en cuanto abran.`,
  heroTitle: (c) => `Cursos de ${c.name} online`,
  heroDesc: (c) => c.open
    ? 'Clases en directo por vídeo con un profesor y el mismo grupo, en días fijos y a la misma hora cada semana. Entre clase y clase practicas con corrección inmediata y tu profesor corrige los deberes con ayuda de la IA. Desde €24 al mes.'
    : `Las clases de ${c.name} abrirán pronto. Apúntate gratis a la lista de espera: te escribimos en cuanto abra tu idioma y hoy no pagas nada. Mientras tanto, ya puedes seguir las clases de inglés y alemán.`,
  heroCta: (c) => c.open ? 'Empieza ahora' : 'Únete a la lista de espera',
  howTitle: (c) => `Cómo funcionan las clases de ${c.name}`,
  liveDesc: (c) => `Clases de ${c.name} por vídeo con tu profesor y el mismo grupo, en días fijos y a la misma hora cada semana.`,
  levelsTitle: (c) => `Los niveles de ${c.name} de A1 a C2`,
  exams: {
    English: {
      title: 'Los certificados de inglés',
      desc: 'Los certificados más pedidos para estudiar, trabajar y obtener visados. En Alimun practicas con pruebas en su mismo formato.',
      panels: [
        ['B2 First', 'El B2 First de Cambridge English certifica el nivel B2 con cuatro pruebas: Reading and Use of English, Writing, Listening y Speaking. Lo piden a menudo universidades, programas Erasmus y empresas, y el certificado no caduca.'],
        ['C1 Advanced', 'El C1 Advanced de Cambridge English certifica el nivel C1 con las mismas cuatro pruebas, más exigentes. Muchas universidades y empresas lo aceptan como prueba de un inglés avanzado para estudiar y trabajar en inglés.'],
        ['IELTS', 'El IELTS evalúa Listening, Reading, Writing y Speaking con una puntuación de 0 a 9. Tiene una versión Academic, para estudiar, y otra General Training, para trabajar y emigrar, y se exige para visados en países como el Reino Unido, Australia y Canadá.'],
      ],
    },
    German: {
      title: 'Los certificados de alemán',
      desc: 'Los certificados más pedidos para vivir, estudiar y trabajar en países de habla alemana. En Alimun practicas con pruebas en su mismo formato.',
      panels: [
        ['Goethe B1', 'El Goethe-Zertifikat B1 del Goethe-Institut evalúa lectura, comprensión auditiva, escritura y expresión oral, que también puedes presentar en módulos separados. Es uno de los certificados más pedidos para vivir y trabajar en Alemania.'],
        ['Goethe B2', 'El Goethe-Zertifikat B2 certifica un alemán independiente en las mismas cuatro destrezas. Se pide a menudo para trabajos cualificados y para acceder a algunos estudios.'],
        ['telc B1', 'El telc Deutsch B1, conocido como Zertifikat Deutsch, certifica el nivel B1 y lo reconocen las autoridades alemanas, por ejemplo en las solicitudes de nacionalidad.'],
      ],
    },
  },
  guides: {
    English: {
      title: 'Estudiar inglés online: lo que conviene saber antes de empezar',
      lead: 'El inglés es **la lengua que más puertas abre** a quien habla español, en España y en América Latina. Elegir bien cómo estudiarlo marca la diferencia entre un curso que dejas a medias y uno que te lleva a hablar de verdad.',
      rows: [
        ['Por qué el inglés importa si hablas español', [
          'Muchas empresas trabajan con clientes y equipos de otros países, y cada vez más entrevistas de trabajo se hacen, al menos en parte, en inglés. Manejarlo con seguridad te permite **optar a puestos internacionales** y trabajar en remoto para empresas extranjeras.',
          'En los estudios también es decisivo: es la lengua de muchos másteres y doctorados en el extranjero y de la mayor parte de la documentación técnica y científica. Y hace cualquier viaje más sencillo.',
        ]],
        ['Lo que más cuesta a un hispanohablante', [
          'El inglés tiene muchos más sonidos vocálicos que el español, y las consonantes finales y la diferencia entre palabras como ship y sheep piden práctica de escucha. También abundan los falsos amigos: actually no significa actualmente y embarrassed no significa embarazada.',
          'Hablar con un profesor y con un grupo desde el primer día ayuda a **oír la lengua real** y a corregir los errores que vienen del español antes de que se conviertan en costumbre.',
        ]],
        ['Clases en grupo o clases particulares', [
          'Las clases particulares ofrecen atención completa, pero cuestan más y te acostumbran a un solo interlocutor. En un grupo hablas con personas distintas, escuchas acentos diferentes y **el coste de cada clase se comparte**.',
          'En Alimun puedes elegir entre grupos de distinto tamaño, según la atención que quieras, y un plan con clases individuales. En todos los casos las clases son en días y horarios fijos, así estudiar se convierte en un hábito.',
        ]],
        ['Cuánto se mejora y de qué depende', [
          'No existe un número de semanas igual para todos: el progreso depende del nivel de partida, de la constancia y de cuánto practiques entre clase y clase. **Unas horas constantes cada semana** funcionan mejor que sesiones largas y ocasionales.',
          'Por eso las clases en directo se completan con ejercicios con corrección inmediata, tarjetas con el vocabulario de las clases y deberes que corrige tu profesor.',
        ]],
      ],
    },
    German: {
      title: 'Estudiar alemán online: lo que conviene saber antes de empezar',
      lead: 'El alemán es **la lengua materna más hablada de la Unión Europea** y abre las puertas de Alemania, Austria y Suiza. Con un método constante, su fama de lengua difícil se queda en poco.',
      rows: [
        ['Por qué el alemán importa si hablas español', [
          'Alemania busca profesionales cualificados en sectores como la salud, la ingeniería y la tecnología, y tiene vías específicas para que lleguen trabajadores de fuera de la Unión Europea. Para muchos de esos puestos el idioma es un requisito.',
          'Si piensas mudarte, el alemán se pide a menudo para **trabajos cualificados**, para algunos estudios y en los trámites con las autoridades. Y abre también Austria y Suiza.',
        ]],
        ['Las dificultades más comunes y cómo superarlas', [
          'Para un hispanohablante los principales obstáculos son **los casos, el género de los sustantivos y el orden de las palabras** en la frase, además de sonidos como la ü o la ö, que no existen en español.',
          'En las clases en directo usas la lengua desde el principio y el profesor corrige los errores que se repiten. Entre clase y clase repasas con ejercicios y tarjetas, y las estructuras se vuelven automáticas.',
        ]],
        ['Cómo saber desde qué nivel empezar', [
          'El Marco común europeo de referencia divide el conocimiento de una lengua en seis niveles, de A1 a C2, y **los certificados de alemán siguen la misma escala**. Saber dónde estás te evita repetir lo que ya sabes.',
          'La prueba de nivel de Alimun te sitúa de A1 a C1, y tu clase y tus ejercicios se adaptan al resultado.',
        ]],
        ['Alemán para trabajar, estudiar o mudarte', [
          'Si tu objetivo es un trabajo o una mudanza, pregunta con antelación **qué nivel y qué certificado necesitas**: suele indicarse en las ofertas o en los organismos ante los que presentas la solicitud.',
          'En Alimun puedes practicar con pruebas en el formato de Goethe B1, Goethe B2 y telc B1 y prepararte con constancia, en días y horarios fijos cada semana, incluso antes de irte.',
        ]],
      ],
    },
    French: {
      title: 'Estudiar francés online: lo que conviene saber antes de empezar',
      lead: 'El francés comparte origen con el español, así que **los primeros pasos son rápidos**. Esa misma cercanía esconde trampas que conviene conocer desde el principio.',
      rows: [
        ['Por qué el francés importa si hablas español', [
          'El francés se habla en Francia, Bélgica, Suiza, Canadá y muchos países de África, y es **lengua de trabajo de las instituciones europeas** y de muchos organismos internacionales.',
          'Es útil en sectores como el turismo, el comercio y la diplomacia, y para quien piensa estudiar o trabajar en Francia o en Quebec.',
        ]],
        ['Parecidos y trampas para un hispanohablante', [
          'Muchas palabras se reconocen enseguida, pero **los falsos amigos son numerosos** y la pronunciación, con sus vocales nasales y las letras que no se pronuncian, pide práctica de escucha desde el primer día.',
        ]],
        levelRow,
        waitlistRow('francés'),
      ],
    },
    Portuguese: {
      title: 'Estudiar portugués online: lo que conviene saber antes de empezar',
      lead: 'El portugués une Portugal, Brasil y varios países de África y Asia. Para un hispanohablante la gramática resulta familiar, pero **la pronunciación es el verdadero reto**.',
      rows: [
        ['Por qué el portugués importa si hablas español', [
          'El portugués es lengua oficial en Brasil, Portugal, Angola, Mozambique y otros países, y lo hablan **cientos de millones de personas**. Para América Latina, Brasil es un socio comercial de primer orden.',
          'Conocerlo facilita trabajar con empresas brasileñas o portuguesas y vivir en Portugal, vecino directo de España.',
        ]],
        ['El riesgo del portuñol', [
          'La cercanía con el español permite hacerse entender pronto, pero también lleva a **mezclar las dos lenguas**: palabras parecidas con significados distintos y sonidos del español aplicados al portugués.',
          'Las clases en directo con corrección precisa ayudan a pasar de hacerse entender a hablar un portugués correcto, en su variante europea o brasileña.',
        ]],
        levelRow,
        waitlistRow('portugués'),
      ],
    },
    Italian: {
      title: 'Estudiar italiano online: lo que conviene saber antes de empezar',
      lead: 'El italiano es probablemente **la lengua más cercana al español** entre las más estudiadas. Se entiende pronto, pero hablarlo bien exige salir de los parecidos.',
      rows: [
        ['Por qué el italiano importa si hablas español', [
          'Italia es uno de los grandes destinos de estudio, arte, diseño, gastronomía y moda, y muchas familias de Argentina y Uruguay tienen **raíces italianas**.',
          'Saber italiano facilita estudiar o trabajar en Italia y tratar con empresas italianas, y enriquece cualquier viaje.',
        ]],
        ['Parecidos y trampas para un hispanohablante', [
          'Las consonantes dobles, como en fatto o anno, cambian el significado de las palabras, y **los falsos amigos son traicioneros**: burro significa mantequilla y salire significa subir.',
          'Practicar con un profesor y con un grupo ayuda a fijar la pronunciación correcta desde el principio.',
        ]],
        levelRow,
        waitlistRow('italiano'),
      ],
    },
  },
  faq: (c) => {
    const n = c.name;
    if (c.open) {
      return [
        [`¿Cuánto cuesta un curso de ${n} online en Alimun?`, 'Los planes empiezan en €24 al mes con Community, en grupos de unas 35 personas. Focused cuesta €59, Intensive €109 y las clases particulares 1 on 1 €269 al mes. Con la suscripción anual pagas diez meses en lugar de doce.'],
        ['¿Las clases son en directo o grabadas?', 'Son clases en directo por vídeo con un profesor y siempre el mismo grupo. Alimun no graba las clases: después de cada clase recibes los apuntes de la sesión, el vocabulario nuevo y los deberes.'],
        ['¿Qué días y a qué hora son las clases?', 'Cada clase se reúne en días fijos y a la misma hora cada semana, con el mismo profesor y el mismo grupo. Así estudiar se convierte en parte de tu semana.'],
        ['¿Hace falta un nivel mínimo para empezar?', 'No. Hay clases desde el nivel A1 y una breve prueba inicial te sitúa de A1 a C1, para que entres en la clase adecuada.'],
        ['¿Puedo prepararme para un certificado?', c.lang === 'German'
          ? 'Sí, puedes practicar con pruebas en el formato de Goethe B1, Goethe B2 y telc B1. No es material oficial y Alimun no está afiliada a los organismos examinadores.'
          : 'Sí, puedes practicar con pruebas en el formato de B2 First, C1 Advanced e IELTS. No es material oficial y Alimun no está afiliada a los organismos examinadores.'],
        ['¿Puedo cancelar cuando quiera?', 'Sí, puedes cancelar en cualquier momento desde los ajustes de pago de tu área personal. Mantienes el acceso hasta el final del periodo ya pagado, como indican los Términos y condiciones.'],
        ['¿Qué necesito para seguir las clases?', 'Un ordenador u otro dispositivo con cámara, micrófono y una conexión estable. Las clases se siguen en el navegador, sin instalar programas.'],
      ];
    }
    return [
      [`¿Cuándo abren las clases de ${n}?`, `Todavía no hay fecha. Si te apuntas a la lista de espera, recibes un correo en cuanto abran las clases de ${n}.`],
      ['¿La lista de espera es gratuita?', 'Sí. Te apuntas gratis y hoy no pagas nada.'],
      ['¿Puedo empezar ya con otro idioma?', 'Sí, las clases de inglés y alemán ya están abiertas y puedes apuntarte en cualquier momento.'],
      ['¿Cómo son las clases en Alimun?', 'Son clases en directo por vídeo, con un profesor y siempre el mismo grupo, en días fijos y a la misma hora cada semana. Entre clase y clase practicas con corrección inmediata.'],
      ['¿Qué necesito para seguir las clases?', 'Un ordenador u otro dispositivo con cámara, micrófono y una conexión estable. Las clases se siguen en el navegador, sin instalar programas.'],
    ];
  },
  quiz: {
    title: (c) => `Descubre tu nivel de ${c.name}`,
    intro: (c) => `Frases para completar que se vuelven más difíciles si aciertas y más fáciles si fallas, en unos dos minutos. Al final verás una estimación de tu nivel de ${c.name}.`,
    note: (c) => c.open
      ? 'Es una estimación. Después de registrarte, la prueba completa establece tu nivel y te coloca en la clase adecuada.'
      : `Es una estimación. Cuando abran las clases de ${c.name}, la prueba completa establecerá tu nivel y la clase adecuada para ti.`,
    cta: (c) => c.open ? 'Regístrate y haz la prueba completa' : 'Únete a la lista de espera',
    start: 'Empezar el test',
    prompt: 'Completa la frase',
    again: 'Repetir el test',
    right1: 'respuesta correcta de',
    rightN: 'respuestas correctas de',
    levels: LEVELS,
  },
  ui: {
    UI_QUIZ_BTN: 'Descubre tu nivel',
    UI_QUIZ_BTN_LONG: 'Descubre tu nivel en dos minutos',
    UI_HOW_1_T: 'Prueba de nivel',
    UI_HOW_1_D: 'Una breve prueba establece tu nivel, de A1 a C1, y te coloca en la clase adecuada para ti.',
    UI_HOW_1_A: 'Una estudiante frente al ordenador tomando apuntes',
    UI_HOW_2_T: 'Clases en directo',
    UI_HOW_2_A: 'Una clase por vídeo con dos estudiantes en la pantalla',
    UI_HOW_3_T: 'Deberes corregidos',
    UI_HOW_3_D: 'Tu profesor pone los deberes y te los devuelve corregidos con ayuda de la IA: nota, puntos fuertes, qué mejorar y un ejemplo de corrección.',
    UI_HOW_3_A: 'Un profesor corrigiendo deberes en el ordenador',
    UI_HOW_4_T: 'Practica cuando quieras',
    UI_HOW_4_D: 'Ejercicios de tu nivel con corrección inmediata, tarjetas con el vocabulario de las clases y pruebas en el formato de los exámenes.',
    UI_HOW_4_A: 'Un estudiante con auriculares practicando en su cuaderno',
    UI_LV_INTRO: 'El Marco común europeo de referencia (MCER) describe seis niveles de conocimiento de una lengua. En Alimun hay clases para cada nivel y la prueba inicial te sitúa de A1 a C1.',
    UI_LV_1_H: 'A1, nivel básico', UI_LV_1_P: LEVELS.A1,
    UI_LV_2_H: 'A2, nivel elemental', UI_LV_2_P: LEVELS.A2,
    UI_LV_3_H: 'B1, nivel intermedio', UI_LV_3_P: LEVELS.B1,
    UI_LV_4_H: 'B2, intermedio alto', UI_LV_4_P: LEVELS.B2,
    UI_LV_5_H: 'C1, nivel avanzado', UI_LV_5_P: LEVELS.C1,
    UI_LV_6_H: 'C2, maestría', UI_LV_6_P: LEVELS.C2,
    UI_EX_NOTE: 'No es material oficial de examen. Alimun no está afiliada a los organismos examinadores.',
    UI_PL_TITLE: 'Planes y precios',
    UI_PL_DESC: 'Elige cuánta atención quieres: cuanto más pequeño es el grupo, más tiempo tienes para hablar. Con la suscripción anual pagas diez meses en lugar de doce.',
    UI_PL_MONTH: 'al mes',
    UI_PL_1: 'Grupos de unas 35 personas, clases en directo y acceso a la comunidad.',
    UI_PL_2: 'Grupos de unas 17 personas y una valoración semanal de tu trabajo.',
    UI_PL_3: 'Grupos de unas 6 personas y, además, una clase individual cada semana.',
    UI_PL_4: 'Clases particulares con tu profesor, con una base de tres clases a la semana.',
    UI_PL_CTA: 'Elige tu plan',
    UI_FAQ_TITLE: 'Preguntas frecuentes',
    UI_Q_CLOSE: 'Cerrar',
  },
};
