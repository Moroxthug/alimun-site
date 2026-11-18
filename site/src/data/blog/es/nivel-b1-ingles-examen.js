// Artículo (tercer diseño, docs/BLOG_PLAN.md). Datos comprobados el 18 nov 2026:
// cambridgeenglish.org: resultados del B1 Preliminary (160-170 grado A = B2, 153-159 grado B y 140-152 grado C = B1,
// 120-139 certificado A2, 102-119 sin certificado; "your Cambridge English certificate does not expire"),
// formato (Reading 45 min, Writing 45 min, Listening 30 min, Speaking 10-12 min por pareja), sample tests gratuitos
// digitales y en papel, test de nivel gratuito "not an official exam". Linguaskill: B1 140-159, B2 160-179,
// C1 180-199, C2 200-210; el certificado informa de cada módulo.
// trinitycollege.com: ISE I = B1; módulo Reading & Writing (2 horas, cuatro tareas) y Speaking & Listening
// (18 minutos, tres tareas); certificado completo si apruebas los dos módulos, de módulo si apruebas uno.
// British Council: Aptis da un nivel del MCER por destreza y un nivel global si haces las cuatro destrezas.
// CRUE, tabla de certificados para la acreditación de niveles de inglés (6 jul 2026): solo exámenes presenciales,
// con el formato reflejado en el certificado; B1 = EOI Certificado de Nivel Intermedio (RD 1629/2006) e Intermedio B1
// (RD 1041/2017), CertAcles B1, Preliminary (PET), Linguaskill B1, IELTS 4-5, Aptis B1, Oxford Test of English B1,
// ISE I; en Cambridge (General) solo se reconoce el nivel al que te presentaste; recomienda tomar como nivel la
// destreza más baja cuando el certificado las desglosa.
// BOE: Real Decreto 1/2019 (aplica a Intermedio B1; cinco partes con mediación, 65 % del total y 50 % por parte,
// matrícula libre sin certificados previos). Real Decreto 1041/2017 (Intermedio B1).
// Universidad de Huelva, Reglamento de acreditación de lenguas extranjeras (BOUH 109, 8 abr 2026): B1 para el título
// de grado (exención de Filología/Traducción), Convenio de las universidades públicas andaluzas (21 jun 2022,
// actualizado en mayo 2025), certificados de validez indefinida, solo exámenes presenciales y cuatro destrezas.
// Universidad de Granada (Facultad de Odontología): el B1 es imprescindible para graduarse; los certificados de
// cursos no sirven.
// Horas de aprendizaje guiado de Cambridge (B1 350-400, B2 500-600), tomadas del artículo english-b2-level ya verificado.
// No verificado y por tanto omitido: precios de los exámenes, rangos numéricos del Oxford Test of English
// (la web de OUP bloquea la lectura automática), requisito B1 de grado fuera de Andalucía como norma general.
export default {
  key: 'english-b1-level',
  site: 'es',
  slug: 'nivel-b1-ingles-examen',
  section: 'levels',
  course: 'English',
  published: '2026-11-18',
  updated: '2026-11-18',
  title: 'Nivel B1 de inglés: qué significa, qué examen hacer y para qué te lo piden',
  metaTitle: 'Nivel B1 de inglés: examen, certificados y test – Alimun',
  desc: 'Qué es el B1 de inglés según el MCER, qué exámenes oficiales lo acreditan en España (Cambridge, Trinity, Aptis, EOI) y en qué se diferencia de un test online.',
  lead: 'El B1 es el nivel de inglés que muchas universidades españolas piden para darte el título de grado, y el primer certificado que mucha gente se saca. Aquí ves qué significa según el Consejo de Europa, **qué exámenes oficiales lo acreditan** y por qué un test B1 online no basta para demostrarlo.',
  photo: 'english-b1-level-library-study',
  sticker: { draw: 'teacup', say: 'En el B1 ya te apañas solo: el reto es demostrarlo.' },
  facts: [
    { label: '140-159', text: 'la puntuación en la Cambridge English Scale que da un certificado B1 en el B1 Preliminary y en Linguaskill' },
    { n: 65, unit: '%', text: 'de la nota total que necesitas para aprobar el Intermedio B1 de una Escuela Oficial de Idiomas' },
    { label: 'Solo presencial', text: 'la tabla de certificados de la CRUE solo da por válidos los exámenes hechos en un centro' },
    { label: '350-400 horas', text: 'de aprendizaje guiado que indica Cambridge, de forma orientativa, para llegar al B1 desde cero' },
  ],
  blocks: [
    { take: {
      title: 'La respuesta corta',
      text: 'Tener un **B1 de inglés** significa que te defiendes de forma independiente: entiendes lo esencial cuando te hablan claro de temas conocidos, resuelves casi cualquier situación de viaje y cuentas experiencias y planes con frases enlazadas. En España lo acreditas con un examen oficial como el B1 Preliminary de Cambridge, el ISE I de Trinity, Aptis, Linguaskill, el Oxford Test of English, el Intermedio B1 de una Escuela Oficial de Idiomas o un examen CertAcles. Un test B1 gratuito te orienta, pero **no certifica nada**.',
      draw: 'owl',
    } },

    { h: 'Qué es el B1 según el MCER' },
    { p: 'El B1 es el tercero de los seis niveles del **Marco Común Europeo de Referencia para las Lenguas** (MCER), el sistema que el Consejo de Europa creó para describir el dominio de un idioma. Junto con el B2 forma la etapa del usuario independiente, y en la versión española del Marco recibe el nombre de nivel Umbral. El nombre es muy gráfico: es la puerta por la que pasas de depender de frases aprendidas a **arreglártelas por tu cuenta**.' },
    { p: 'Según la escala global del Consejo de Europa, quien tiene un B1 entiende los puntos principales de textos y conversaciones claros en lengua estándar sobre cosas que le resultan familiares, como el trabajo, los estudios o el ocio. Sabe desenvolverse en la mayoría de las situaciones que surgen al viajar por un lugar donde se habla la lengua. Produce textos sencillos y coherentes sobre temas conocidos o de interés personal, y puede describir experiencias, acontecimientos, deseos y planes, además de **justificar brevemente sus opiniones**.' },
    { p: 'Llevado a la vida real: con un B1 haces el check-in en un hotel y explicas que la habitación no es la que reservaste, cuentas qué hiciste el fin de semana, sigues una reunión sencilla si el tema es tuyo y escribes un correo para pedir información o quejarte de un pedido. Lo que todavía cuesta es seguir una conversación rápida entre nativos, ver una serie sin subtítulos o discutir un tema abstracto. Tu inglés no es elegante, pero **funciona**.' },
    { p: 'El Volumen complementario que el Consejo de Europa publicó en 2020 describe también un nivel intermedio **B1+**. Si tu profesor te dice que eres B1+, significa que ya has superado claramente el B1 pero aún no haces de forma estable lo que se espera de un B2.' },
    { figure: { photo: 'english-b1-level-hands-writing', alt: 'Una mano escribe con bolígrafo en una libreta abierta junto a un portátil sobre una mesa de madera', caption: 'En el B1 ya escribes correos y textos breves con sentido completo: lo que falta es variedad y precisión.' } },

    { h: 'Test B1 de inglés y examen B1: no son lo mismo' },
    { p: 'Si buscas «test inglés B1» o «test B1 inglés», casi todo lo que aparece son pruebas cortas y gratuitas: veinte o treinta preguntas de gramática y vocabulario y un resultado al momento. Son útiles para orientarte, pero tienen dos límites claros. El primero es que miden sobre todo **lo que reconoces**, no lo que produces: no te hacen hablar ni escribir, y casi nunca evalúan bien la comprensión oral. El segundo es que su resultado no lo acepta ninguna universidad, empresa ni administración.' },
    { p: 'Cambridge English, por ejemplo, ofrece un test de nivel gratuito en su web y avisa de forma expresa de que **no es un examen oficial** y de que la puntuación es solo una orientación, no una prueba de tu nivel. Lo mismo vale para cualquier otro test online, incluido el nuestro. En Alimun tienes un Quiz de inglés B1 gratis, con preguntas de nivel B1 y cada respuesta explicada en español, y una prueba de nivel que te sitúa entre A1 y C2 para saber en qué clase empezar. Sirven para decidir qué hacer después, no para presentarlos en ningún sitio.' },
    { p: 'Un **examen B1 de inglés**, en cambio, es una prueba oficial hecha en un centro autorizado, con las cuatro destrezas evaluadas por la entidad examinadora y un certificado con tu nombre. Ese es el documento que te pide la secretaría de tu facultad o una convocatoria. Si tu objetivo es acreditar el nivel, el test online es el primer paso y el examen oficial, el último.' },
    { table: {
      head: ['', 'Test B1 online gratuito', 'Examen oficial B1'],
      rows: [
        ['Qué mide', 'Sobre todo gramática y vocabulario', 'Comprensión oral y escrita, expresión oral y escrita'],
        ['Dónde se hace', 'En casa, cuando quieras', 'En un centro examinador, en fechas fijas'],
        ['Resultado', 'Orientativo, al momento', 'Certificado oficial con puntuación o calificación'],
        ['Para qué sirve', 'Saber por dónde empezar', 'Acreditar el nivel ante una universidad, empresa o administración'],
      ],
      note: 'Cambridge English advierte de que su propio test gratuito no es un examen oficial.',
    } },

    { h: 'Los exámenes oficiales que acreditan el B1 en España' },
    { p: 'Hay muchos certificados de inglés, pero no todos funcionan igual. Unos están diseñados para **un nivel concreto**, y si lo apruebas obtienes ese nivel; otros son pruebas de varios niveles que te dan una puntuación y la relacionan con el MCER. La Conferencia de Rectores de las Universidades Españolas (CRUE) publica una tabla con los certificados que considera válidos para acreditar cada nivel de inglés, y es la referencia que usan muchas universidades. Estos son los más habituales para el B1.' },
    { h3: 'Cambridge B1 Preliminary' },
    { p: 'El **B1 Preliminary** (el antiguo PET) es el examen de Cambridge English pensado para el B1. Tiene cuatro pruebas: Reading (45 minutos), Writing (45 minutos), Listening (unos 30 minutos) y Speaking, que se hace en pareja y dura de 10 a 12 minutos. El resultado se da en la Cambridge English Scale. Con una puntuación de **140 a 159** obtienes el certificado de nivel B1, con grado C hasta 152 y grado B desde 153. De 160 a 170 consigues el grado A, y el certificado indica nivel B2. De 120 a 139 recibes un certificado de nivel A2, y por debajo de 120 no hay certificado, aunque sí un informe con tu puntuación.' },
    { p: 'Según Cambridge, el certificado no caduca, aunque cada organismo puede fijar cuánta antigüedad acepta. Ojo a un detalle: la tabla de la CRUE indica que en los exámenes generales de Cambridge solo se reconoce **el nivel al que te presentaste**. Es decir, un grado A en el B1 Preliminary no te sirve en esas universidades como B2: para eso está el B2 First.' },
    { h3: 'Trinity ISE I' },
    { p: 'El Integrated Skills in English de Trinity College London tiene un examen por nivel, y el **ISE I** es el del B1. Se divide en dos módulos: Reading & Writing, de dos horas y cuatro tareas, y Speaking & Listening, de unos 18 minutos y tres tareas, que haces con un examinador. Si apruebas los dos módulos recibes el certificado completo del ISE I; si apruebas solo uno, un certificado de ese módulo.' },
    { h3: 'Aptis, del British Council' },
    { p: 'Aptis es una prueba del British Council que no tiene un examen por nivel: todos hacen la misma y el resultado indica **un nivel del MCER para cada destreza**, además de un nivel global si haces las cuatro: comprensión oral y lectora, expresión oral y escrita. Aparece en la tabla de la CRUE y en las listas de las universidades andaluzas en la fila del B1, siempre que tu resultado llegue a ese nivel.' },
    { h3: 'Linguaskill' },
    { p: 'Linguaskill es otra prueba de Cambridge que no se prepara para un nivel fijo: te da una puntuación por módulo en la Cambridge English Scale. Según Cambridge, de **140 a 159** corresponde al B1, de 160 a 179 al B2, de 180 a 199 al C1 y de 200 a 210 al C2. El certificado recoge cada módulo que has hecho, así que fíjate en que todas las destrezas lleguen al B1 si es lo que te piden.' },
    { h3: 'Oxford Test of English' },
    { p: 'El **Oxford Test of English**, de Oxford University Press, también es una prueba de varios niveles que te sitúa en una franja del MCER. Figura en la columna del B1 tanto en la tabla de la CRUE como en las de las universidades andaluzas. Antes de inscribirte, comprueba en la web oficial qué puntuación corresponde a cada nivel y si la entidad que te pide el certificado lo acepta.' },
    { h3: 'Escuela Oficial de Idiomas: Intermedio B1' },
    { p: 'El certificado de **Intermedio B1** de una Escuela Oficial de Idiomas es un título oficial. Desde el Real Decreto 1041/2017, las EOI llaman Intermedio B1 a este nivel; con el sistema anterior, el del Real Decreto 1629/2006, se llamaba Certificado de Nivel Intermedio, y la tabla de la CRUE lo sitúa también en el B1. Según el Real Decreto 1/2019, la prueba de certificación tiene cinco partes: comprensión de textos orales, comprensión de textos escritos, producción y coproducción oral, producción y coproducción escrita y **mediación**.' },
    { p: 'Para aprobar necesitas al menos el 65 % de la puntuación total y un mínimo del 50 % en cada una de las cinco partes. Puedes presentarte por libre a cualquier nivel sin tener los certificados anteriores. Las fechas, la matrícula y las tasas las fija cada comunidad autónoma, así que consulta la web de educación de la tuya.' },
    { h3: 'CertAcles en el centro de lenguas de tu universidad' },
    { p: 'Muchos centros de lenguas universitarios examinan con el modelo **CertAcles**, de la Asociación de Centros de Lenguas en la Enseñanza Superior. El CertAcles B1 aparece en la tabla de la CRUE y suele ser la opción más cercana si estudias en una universidad que lo ofrece. Cada centro decide qué niveles y en qué fechas examina.' },
    { table: {
      head: ['Certificado', 'Cómo acredita el B1', 'En breve'],
      rows: [
        ['Cambridge B1 Preliminary', 'De 140 a 159 en la Cambridge English Scale', 'Cuatro pruebas, Speaking en pareja; el certificado no caduca'],
        ['Trinity ISE I', 'Aprobar los dos módulos del ISE I', 'Reading & Writing (2 h) y Speaking & Listening (18 min)'],
        ['Aptis', 'Nivel B1 en el informe de resultados', 'Una prueba para varios niveles, nivel por destreza'],
        ['Linguaskill', 'De 140 a 159', 'Prueba de Cambridge de varios niveles, nota por módulo'],
        ['Oxford Test of English', 'Nivel B1 en el certificado', 'Prueba de varios niveles de Oxford University Press'],
        ['EOI, Intermedio B1', 'Aprobar la prueba de certificación', 'Cinco partes con mediación; 65 % del total y 50 % en cada parte'],
        ['CertAcles B1', 'Aprobar el examen en un centro acreditado por ACLES', 'Lo organizan los centros de lenguas universitarios'],
      ],
      note: 'Fuentes: cambridgeenglish.org, trinitycollege.com, britishcouncil.org, BOE y tabla de certificados de la CRUE (julio de 2026). Precios y fechas cambian: consulta la página oficial de cada examen.',
    } },
    { note: { title: 'Presencial, y con las cuatro destrezas', text: 'La CRUE solo da por válidos los exámenes hechos **de forma presencial**, y ese formato debe constar en el certificado. Antes de reservar una versión online desde casa, comprueba que quien te pide el B1 la acepta.', draw: 'cat' } },

    { h: 'Por qué te piden un B1: el requisito para el título de grado' },
    { p: 'La razón más frecuente por la que alguien en España busca «examen B1 inglés» es la universidad. No hay una norma estatal única: cada universidad fija sus requisitos de idiomas, y en algunos grados el nivel exigido figura en la memoria de verificación del título. Pero en muchos casos **sin el B1 no hay título**, aunque hayas aprobado todas las asignaturas.' },
    { p: 'Las universidades públicas andaluzas son el ejemplo más claro. Comparten un Convenio de Colaboración para la Acreditación de Lenguas Extranjeras, firmado el 21 de junio de 2022 y actualizado en mayo de 2025, con una lista común de certificados. El reglamento de la Universidad de Huelva de 2026, por ejemplo, regula la acreditación del B1 en una lengua extranjera para obtener el título de grado. Según esa lista, los certificados recogidos tienen **validez indefinida** a efectos de los requisitos lingüísticos en las universidades andaluzas, se exige haber superado las cuatro destrezas y solo se aceptan exámenes hechos de forma presencial en una sede autorizada.' },
    { p: 'La Facultad de Odontología de la Universidad de Granada lo dice sin rodeos en la información a sus estudiantes: acreditar el B1 de una lengua extranjera es imprescindible para graduarte, y los certificados de haber hecho un curso **no sirven**. Lo que cuenta es haber aprobado un examen de dominio oficial.' },
    { figure: { photo: 'english-b1-level-university', alt: 'Edificios universitarios de ladrillo rojo entre árboles otoñales en un día soleado', caption: 'En muchas universidades españolas el B1 es requisito para el título: mejor acreditarlo antes del último curso.' } },
    { p: 'Hay matices que conviene conocer. Las universidades andaluzas reconocen la nota global del certificado y, si no consta, calculan la media de las destrezas. La CRUE, en cambio, recomienda tomar como nivel **la destreza más baja** cuando el certificado las desglosa. Por eso, antes de pagar un examen, lee la normativa de tu propia universidad o pregunta en la secretaría de tu facultad: es la única lista que cuenta en tu caso. Además del grado, el B1 aparece en convocatorias de movilidad, en algunos másteres y en procesos de selección, cada uno con sus propias condiciones.' },
    { cta: true },

    { h: 'B1 frente a B2: qué cambia y cuál te conviene' },
    { p: 'Quien busca «test B2 inglés» suele estar en la duda: ¿me presento al B1, que es seguro, o me arriesgo al B2? La diferencia entre los dos niveles es grande. En el B1 **cuentas**: describes, narras, explicas planes. En el B2 **argumentas**: defiendes una postura, comparas ventajas e inconvenientes y conversas con soltura con un nativo. Cambridge calcula, de forma orientativa, unas 350 a 400 horas de aprendizaje guiado acumuladas para llegar al B1 desde cero y unas 500 a 600 para el B2.' },
    { table: {
      head: ['Destreza', 'B1 (Umbral)', 'B2 (Avanzado)'],
      rows: [
        ['Comprensión oral', 'Entiendes las ideas principales de un discurso claro sobre temas conocidos.', 'Sigues discursos largos, noticias y películas en lengua estándar, también sobre temas menos familiares.'],
        ['Comprensión lectora', 'Entiendes textos sencillos sobre temas cotidianos o de trabajo.', 'Entiendes textos complejos, incluso técnicos de tu campo, y la postura del autor.'],
        ['Expresión oral', 'Cuentas experiencias, planes y opiniones con frases sencillas enlazadas.', 'Conversas con soltura con un nativo y defiendes una opinión.'],
        ['Expresión escrita', 'Escribes textos sencillos y coherentes sobre temas conocidos.', 'Escribes textos claros y detallados que desarrollan un argumento.'],
        ['Examen de Cambridge', 'B1 Preliminary (140-159)', 'B2 First (160-179)'],
      ],
      note: 'Resumen basado en los descriptores del Consejo de Europa y en las escalas de resultados de Cambridge English.',
    } },
    { p: 'La decisión práctica depende de lo que te pidan. Si tu universidad exige un B1 para el título, el B2 también te sirve, porque acredita un nivel superior; pero si vas justo, un B1 aprobado vale más que un B2 suspendido. Y recuerda la regla de la CRUE: en los exámenes generales de Cambridge solo cuenta el nivel al que te presentas, así que **una nota alta en el B1 Preliminary no se convierte en un B2**. Si crees que estás cerca del B2, el artículo sobre el nivel B2 de inglés te explica qué significa y cómo comprobarlo.' },

    { h: 'Cómo saber si estás listo para el examen B1' },
    { p: 'Empieza por un test B1 gratuito para ver si la gramática y el vocabulario básicos están en su sitio: tiempos verbales del pasado, el present perfect, los comparativos, los primeros condicionales, los verbos modales más comunes. Si fallas mucho, no tiene sentido pagar un examen todavía. Si te sale bien, pasa al **simulacro oficial**.' },
    { p: 'Cambridge publica gratis sample tests del B1 Preliminary: versiones digitales de Reading, Writing y Listening y exámenes completos en papel para descargar. Hazlos con los tiempos reales, 45 minutos de Reading, 45 de Writing y unos 30 de Listening, de una sentada y sin parar el audio. Si vas a la EOI, tu comunidad autónoma suele publicar modelos de pruebas de convocatorias anteriores, y Trinity publica guías de preparación del ISE I en su web.' },
    { p: 'El Writing y el Speaking son las partes que más se resisten y las que no puedes corregir tú solo. En un correo de nivel B1 se espera que respondas a todo lo que te piden, enlaces las frases con conectores sencillos y uses un registro adecuado. En el Speaking, que hables **más de una frase seguida**, preguntes a tu compañero y reacciones a lo que dice. Para eso necesitas a alguien que conozca los criterios y te diga qué cambiar.' },
    { p: 'En las clases en directo de Alimun estudias con un profesor en un grupo reducido, con ejercicios de corrección inmediata y deberes que corrige tu profesor, un formato que ayuda justo con esas dos destrezas. Cuando tus simulacros den resultados estables dentro del B1, y no una sola vez por suerte, es el momento de reservar el examen.' },
    { quote: 'Un test B1 te dice **dónde estás**; solo un examen oficial lo demuestra.' },
  ],
  quiz: [
    { q: '¿Cómo se llama el nivel B1 en la versión española del MCER?', options: ['Acceso', 'Plataforma', 'Umbral', 'Avanzado'], a: 2, why: 'En la versión española del Marco, el B1 es el nivel Umbral; el B2 es el Avanzado.' },
    { q: '¿Qué puntuación del B1 Preliminary da un certificado de nivel B1?', options: ['De 120 a 139', 'De 140 a 159', 'De 160 a 170', 'De 180 a 190'], a: 1, why: 'De 140 a 159 en la Cambridge English Scale obtienes el B1 (grado C hasta 152 y grado B desde 153).' },
    { q: 'Según la tabla de la CRUE, si sacas un grado A en el B1 Preliminary, ¿qué nivel te reconocen?', options: ['B1, el nivel al que te presentaste', 'B2', 'C1', 'Ninguno'], a: 0, why: 'La CRUE solo reconoce en los exámenes generales de Cambridge el nivel al que se presentó el candidato.' },
    { q: '¿Qué dice Cambridge de su test de nivel gratuito?', options: ['Que equivale al B1 Preliminary', 'Que no es un examen oficial', 'Que lo aceptan las universidades', 'Que caduca a los dos años'], a: 1, why: 'Cambridge avisa de que su test gratuito no es un examen oficial y de que el resultado es solo orientativo.' },
    { q: '¿Qué necesitas para aprobar el Intermedio B1 de una EOI?', options: ['El 50 % del total', 'El 60 % en cada destreza', 'El 65 % del total y al menos el 50 % en cada parte', 'Aprobar solo la parte escrita'], a: 2, why: 'El Real Decreto 1/2019 exige el 65 % de la puntuación total y un mínimo del 50 % en cada una de las cinco partes.' },
    { q: '¿En cuántos módulos se divide el Trinity ISE I?', options: ['Uno', 'Dos', 'Cuatro', 'Cinco'], a: 1, why: 'El ISE I tiene un módulo de Reading & Writing y otro de Speaking & Listening.' },
    { q: '¿Qué formato de examen acepta la CRUE en su tabla de certificados?', options: ['Solo online desde casa', 'Solo presencial', 'Cualquiera', 'Solo en papel'], a: 1, why: 'La CRUE solo considera válidos los exámenes hechos de forma presencial, y ese formato debe constar en el certificado.' },
    { q: '¿Qué puntuación de Linguaskill corresponde al B1 según Cambridge?', options: ['De 120 a 139', 'De 140 a 159', 'De 160 a 179', 'De 180 a 199'], a: 1, why: 'En Linguaskill, de 140 a 159 es B1, de 160 a 179 B2 y de 180 a 199 C1.' },
  ],
  faq: [
    ['¿Un test de inglés B1 online sirve para acreditar el nivel?', 'No. Los tests gratuitos sirven para orientarte, pero no son exámenes oficiales y ninguna universidad ni administración los acepta. Para acreditar el B1 necesitas un certificado de un examen oficial, como el B1 Preliminary, el ISE I, Aptis, Linguaskill, el Oxford Test of English, el Intermedio B1 de la EOI o un CertAcles B1.'],
    ['¿Qué examen B1 de inglés es el más fácil?', 'No hay un examen fácil: todos evalúan el mismo nivel del MCER. Lo que cambia es el formato. Elige el que acepte tu universidad o tu convocatoria, haz un simulacro oficial de cada opción y quédate con aquel cuyo formato te resulte más cómodo.'],
    ['¿El B1 de Cambridge caduca?', 'Según Cambridge English, sus certificados no caducan, aunque cada organismo decide cuánta antigüedad acepta. En las universidades públicas andaluzas, los certificados de su lista tienen validez indefinida a efectos de los requisitos lingüísticos.'],
    ['¿Necesito el B1 para obtener mi título de grado?', 'Depende de tu universidad y de tu grado. En las universidades públicas andaluzas, por ejemplo, el B1 en una lengua extranjera es requisito para el título. Consulta la normativa de tu universidad o pregunta en la secretaría de tu facultad.'],
    ['¿Puedo presentarme directamente al B2 si me piden un B1?', 'Sí: un B2 acredita también el B1. Pero si no tienes asegurado el B2, ten en cuenta que en los exámenes generales de Cambridge la CRUE solo reconoce el nivel al que te presentas, así que un B2 First suspendido no te da un B1 en esas universidades.'],
  ],
  related: ['english-b2-level', 'b2-first', 'cefr-english', 'ielts-or-cambridge', 'how-long-english'],
  sources: [
    ['Consejo de Europa, MCER: niveles comunes de referencia, escala global', 'https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale'],
    ['Consejo de Europa, Volumen complementario del MCER (2020)', 'https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-companion-volume'],
    ['Cambridge English, resultados del B1 Preliminary', 'https://www.cambridgeenglish.org/exams-and-tests/preliminary/results/'],
    ['Cambridge English, formato del B1 Preliminary', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/preliminary/format/'],
    ['Cambridge English, preparación y sample tests del B1 Preliminary', 'https://www.cambridgeenglish.org/exams-and-tests/preliminary/preparation/'],
    ['Cambridge English, resultados de Linguaskill', 'https://www.cambridgeenglish.org/exams-and-tests/linguaskill/results/'],
    ['Cambridge English, test de nivel gratuito', 'https://www.cambridgeenglish.org/test-your-english/'],
    ['Cambridge English, horas de aprendizaje guiado', 'https://support.cambridgeenglish.org/hc/en-gb/articles/202838506-Guided-learning-hours'],
    ['Trinity College London, B1 English test (ISE I)', 'https://www.trinitycollege.com/qualifications/SELT/B1-ISE-I'],
    ['Trinity College London, resultados del ISE', 'https://www.trinitycollege.com/qualifications/english-language/ISE/ISE-paper/results'],
    ['British Council, sistema de puntuación de Aptis', 'https://www.britishcouncil.org/sites/default/files/aptis_esol_scoring_document.pdf'],
    ['CRUE, certificados para la acreditación de niveles de inglés (julio de 2026)', 'https://proyectos.crue.org/acreditacion/wp-content/uploads/sites/3/2026/07/tabla_equivalencias_ingles_06_07_2026-1.pdf'],
    ['BOE, Real Decreto 1041/2017 (niveles de las Escuelas Oficiales de Idiomas)', 'https://www.boe.es/eli/es/rd/2017/12/22/1041/con'],
    ['BOE, Real Decreto 1/2019 (pruebas de certificación de las EOI)', 'https://www.boe.es/buscar/act.php?id=BOE-A-2019-317'],
    ['Universidad de Huelva, Reglamento sobre la acreditación de lenguas extranjeras (BOUH 109, 2026)', 'https://www.uhu.es/secretaria-general/sites/secretaria-general/files/2026-04/Acreditacion_LEX.pdf'],
    ['Universidad de Granada, Facultad de Odontología: acreditación del B1', 'https://www.ugr.es/~odonto/infoacad/b1/index_b1.htm'],
    ['Alimun: Quiz de inglés B1 gratis', 'https://alimun.com/es/recursos/quiz-ingles-b1'],
  ],
};
