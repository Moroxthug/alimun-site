// Spanish B1 for moving abroad, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Children, school and childcare',
  goal: 'Find childcare, register a child at school and talk to teachers.',
  art: 'dog',
  tags: { skills: ['speaking', 'reading', 'writing', 'grammar'], topics: ['school', 'childcare', 'parents-teachers', 'subjunctive-wishes', 'absence-note'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Childcare and school',
      about: 'The words for childcare and school, and how to register your child.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In Spain, children under three can go to **una escuela infantil**, often called *guardería*. From three to six most children go to **educación infantil** in a school, **un colegio**, although it is not compulsory. Compulsory school starts at six with **primaria**, and from twelve there is **la ESO**, secondary school, until sixteen.' },
          { t: 'table', caption: 'School words', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['la escuela infantil / la guardería', 'childcare for children under three'],
            ['el colegio (el cole)', 'school, for children from three to twelve'],
            ['el instituto', 'secondary school'],
            ['el tutor / la tutora', 'the teacher who is responsible for the class'],
            ['la matrícula', 'registration at a school'],
            ['el comedor', 'the school canteen, lunch at school'],
            ['las actividades extraescolares', 'activities after school: sport, music, languages'],
            ['la reunión de padres', 'the meeting for parents'],
          ] },
          { t: 'tip', art: 'owl', md: 'Schools can be *públicos* (state), *concertados* (private but paid partly by the state) or *privados*. In many Latin American countries, childcare and pre-school is *el kínder*, *el jardín de infantes* or *el jardín de niños*, and in some countries *colegio* means a private school.' },
        ],
        [
          { t: 'text', md: 'To register a child at a state school, you usually apply in a set period, **el plazo de admisión**, often in spring for the next school year. If you arrive during the year, ask the local education office or the school about a place. Schools often ask for the **padrón**, the child’s identity document or birth certificate and the health card.' },
          { t: 'dialogue', title: 'En la secretaría del colegio', lines: [
            { who: 'Secretaria', s: 'Buenos días. ¿Qué necesita?' },
            { who: 'Karim', s: 'Buenos días. Acabamos de llegar a la ciudad y quiero matricular a mi hija. Tiene ocho años.' },
            { who: 'Secretaria', s: 'Muy bien. Entonces iría a tercero de primaria. ¿Están empadronados en el barrio?' },
            { who: 'Karim', s: 'Sí, desde la semana pasada. Aquí tiene el certificado.' },
            { who: 'Secretaria', s: 'Perfecto. También necesito el pasaporte de la niña, la tarjeta sanitaria y la cartilla de vacunas.' },
            { who: 'Karim', s: '¿Hay comedor? Mi mujer y yo trabajamos hasta las cinco.' },
            { who: 'Secretaria', s: 'Sí, y por la tarde hay actividades extraescolares hasta las cinco y media.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'La hija de Karim tiene ocho años.', a: 't', why: '*Tiene ocho años.*' },
            { q: 'Karim todavía no está empadronado.', a: 'f', why: '*Sí, desde la semana pasada*: he brings the certificate.' },
            { q: 'La niña puede comer en el colegio.', a: 't', why: 'Karim asks *¿Hay comedor?* and the answer is *Sí*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['la matrícula', 'apuntar a un niño en un colegio'],
            ['el comedor', 'donde los niños comen al mediodía'],
            ['la tutora', 'la profesora responsable de la clase'],
            ['la guardería', 'para niños de menos de tres años'],
            ['el instituto', 'el centro para alumnos de doce a dieciocho años'],
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword with school words.', words: [
            { a: 'colegio', clue: 'Los niños de seis años van aquí cada mañana.' },
            { a: 'comedor', clue: 'Lugar del colegio donde los niños comen.' },
            { a: 'tutora', clue: 'La profesora responsable de un grupo.' },
            { a: 'matrícula', clue: 'Lo que hace al apuntar a su hijo en un colegio.' },
            { a: 'guardería', clue: 'Lugar para niños muy pequeños, antes del colegio.' },
            { a: 'reunión', clue: 'Los padres y la tutora hablan aquí al principio del curso.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Mi hijo tiene catorce años y va al ___.', o: ['instituto', 'recreo', 'buzón'], why: 'Secondary school, from twelve: *el instituto*.' },
            { q: 'Los martes, mi hija tiene fútbol después de clase. Es una actividad ___.', o: ['extraescolar', 'obligatoria', 'concertada'], why: '*extraescolar*: after school.' },
            { q: 'Para pedir plaza en un colegio público hay que respetar el plazo de ___.', o: ['admisión', 'permanencia', 'preaviso'], why: '*el plazo de admisión*: the period to apply.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Talking to the teacher',
      about: 'Ask how your child is doing, say what worries you and excuse an absence.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Parents can ask for a meeting with the class teacher, **una tutoría**. To say what you want, hope or worry about **for someone else**, use **quiero que**, **espero que** or **me preocupa que** followed by the **present subjunctive**. When it is about yourself, use the infinitive: *Quiero hablar con usted*.' },
          { t: 'examples', items: [
            { s: '**Quiero que** mi hijo **aprenda** español rápido.', n: 'Two different people: *quiero que* + subjunctive *aprenda*.' },
            { s: '**Espero que** **haga** amigos pronto.', n: '*hacer* → *haga*, from *yo hago*.' },
            { s: '**Me preocupa que** no **entienda** los deberes.', n: '*entender* → *entienda*: the stem change stays.' },
            { s: 'Me alegra que **esté** contenta en clase.', n: '*estar* → *esté*, with an accent.' },
            { s: '**Quiero hablar** con la tutora.', n: 'The same person: just the infinitive.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Una tutoría', lines: [
            { who: 'Elena', s: 'Buenas tardes. Siéntese, por favor. ¿Quería hablar de Leo?' },
            { who: 'Karim', s: 'Sí, gracias. ¿Qué tal va en clase? Me preocupa que no entienda todo todavía.' },
            { who: 'Elena', s: 'Está aprendiendo muy rápido. En matemáticas va muy bien, pero en lengua le cuesta un poco más, es normal.' },
            { who: 'Karim', s: '¿Y cómo se lleva con sus compañeros?' },
            { who: 'Elena', s: 'Muy bien, juega con todos en el recreo. Le recomiendo que lea en casa diez minutos cada día.' },
            { who: 'Karim', s: 'De acuerdo. Espero que con eso mejore. ¿Cómo puedo ponerme en contacto con usted?' },
            { who: 'Elena', s: 'Por la aplicación del colegio, o con una nota en la agenda de Leo.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the meeting. True or false?', items: [
            { q: 'A Leo le va mal en matemáticas.', a: 'f', why: '*En matemáticas va muy bien.*' },
            { q: 'Leo tiene buena relación con los otros niños.', a: 't', why: '*juega con todos en el recreo*.' },
            { q: 'La tutora recomienda que Leo lea en casa.', a: 't', why: '*Le recomiendo que lea en casa diez minutos cada día.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the present subjunctive of tener.', verb: 'tener', tense: 'Present subjunctive', rows: [
            ['yo', 'tenga'],
            ['tú', 'tengas'],
            ['él / ella / usted', 'tenga'],
            ['nosotros', 'tengamos'],
            ['vosotros', 'tengáis'],
            ['ellos / ustedes', 'tengan', 'From *yo tengo*: drop the *-o* and add the endings *-a, -as, -a, -amos, -áis, -an*.'],
          ] },
          { t: 'ex', kind: 'wordform', h: 'Write the verb in the present subjunctive.', items: [
            { q: 'Quiero que mi hija ___ al comedor.', base: 'ir', a: ['vaya'], why: '*ir* is irregular: *vaya*.' },
            { q: 'Espero que los niños ___ un buen curso.', base: 'tener', a: ['tengan'], why: 'From *yo tengo*: *tengan*.' },
            { q: 'Me preocupa que mi hijo no ___ bien por la noche.', base: 'dormir', a: ['duerma'], why: '*dormir* → *duerma*: the stem change *o* → *ue* stays.' },
            { q: 'La tutora quiere que los alumnos ___ en casa cada día.', base: 'leer', a: ['lean'], why: '*leer* → *lean*.' },
          ] },
        ],
        [
          { t: 'text', md: 'If your child misses school, tell the school and give a short written excuse, **un justificante**, through the school app or the child’s *agenda*. Say who, which day and why. For a doctor’s visit, the health centre can also give you a paper.' },
          { t: 'reading', title: 'Justificante de falta', md: 'Estimada Elena:\n\nLe informo de que mi hijo Leo no pudo asistir a clase ayer, lunes 9, porque tenía fiebre. Hoy ya se encuentra mejor y vuelve al colegio. Le agradecería que me dijera qué deberes tiene que hacer.\n\nUn saludo,\nKarim Haddad' },
          { t: 'ex', kind: 'order', h: 'Build sentences for an absence note.', items: [
            { a: 'Mi hija no pudo asistir a clase ayer.', why: '*asistir a clase*: attend class. *pudo*: indefinido of *poder*.' },
            { a: 'Le informo de que mi hijo estaba enfermo.', why: '*Le informo de que…*: a formal start.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A letter from the school',
      about: 'Read a school’s letter to families at the start of the year.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Carta a las familias', md: 'Queridas familias:\n\nOs damos la bienvenida al nuevo curso. Esperamos que vuestros hijos e hijas disfruten y aprendan mucho este año.\n\nLa primera reunión de padres y madres será el miércoles 24 de septiembre a las cinco y media de la tarde, en el aula de cada grupo. En ella, los tutores os explicarán el horario, los materiales y las salidas del trimestre. Es muy importante que asista al menos una persona de cada familia.\n\nEl horario de clase es de nueve de la mañana a dos de la tarde. El servicio de comedor empieza el primer día de clase; si vuestro hijo o hija va a usarlo, entregad la solicitud en secretaría antes del viernes 12. Las actividades extraescolares empiezan en octubre.\n\nOs recordamos que, cuando un alumno falta a clase, la familia debe justificar la falta en la aplicación del colegio o en la agenda. Para las salidas fuera del centro, necesitamos siempre una autorización firmada.\n\nLa asociación de familias (AMPA) os invita a participar en sus actividades.\n\nUn saludo cordial,\nEl equipo directivo' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the letter. True, false or not given?', items: [
            { q: 'La reunión de padres es por la mañana.', a: 'f', why: '*a las cinco y media de la tarde*.' },
            { q: 'Las clases terminan a las dos.', a: 't', why: '*de nueve de la mañana a dos de la tarde*.' },
            { q: 'Las actividades extraescolares empiezan el primer día de clase.', a: 'f', why: 'They start in October. The canteen starts on the first day.' },
            { q: 'Para una excursión, los padres tienen que firmar un papel.', a: 't', why: '*necesitamos siempre una autorización firmada*.' },
            { q: 'El comedor cuesta cinco euros al día.', a: 'ng', why: 'The letter does not say how much the canteen costs.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do the parents do? Choose the answer.', items: [
            { q: 'Si su hijo va a comer en el colegio, usted ___', o: ['entrega la solicitud en secretaría antes del día 12.', 'habla con el AMPA en octubre.', 'no tiene que hacer nada.'], why: '*entregad la solicitud en secretaría antes del viernes 12*.' },
            { q: 'Si su hija falta a clase, usted ___', o: ['justifica la falta en la aplicación o en la agenda.', 'llama a la policía.', 'espera a la reunión de padres.'], why: '*la familia debe justificar la falta*.' },
            { q: 'En la reunión, los tutores van a hablar de ___', o: ['el horario, los materiales y las salidas.', 'los precios del comedor.', 'las notas del curso pasado.'], why: '*os explicarán el horario, los materiales y las salidas*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the subjunctive.', items: [
            { s: 'Esperamos que vuestros hijos [disfruten] y [aprendan] mucho. Es muy importante que [asista] una persona de cada familia.', why: '*Esperamos que* and *es muy importante que* are followed by the subjunctive.' },
          ] },
          { t: 'tip', art: 'churro', md: 'The school writes to families with *vosotros* (*os damos*, *entregad*): friendly but polite, very usual in Spain. In Latin America the same letter would use *ustedes*: *les damos la bienvenida*, *entreguen*.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'La profesora responsable de la clase es la ___.', o: ['tutora', 'secretaria', 'portera'], why: '*la tutora*.' },
      { q: 'Los niños de menos de tres años pueden ir a ___.', o: ['la escuela infantil', 'el instituto', 'la ESO'], why: 'Childcare for under-threes: *escuela infantil*, *guardería*.' },
      { q: 'Quiero que mi hijo ___ al fútbol después de clase.', o: ['vaya', 'va', 'ir'], why: '*Quiero que* + subjunctive: *vaya*.' },
      { q: 'Un papel que explica por qué su hijo no fue a clase es un ___.', o: ['justificante', 'comedor', 'boletín'], why: '*un justificante*: an absence note.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Espero que mi hija ___ amigos pronto. (hacer)', a: ['haga'], why: 'From *yo hago*: *haga*.' },
      { q: 'Me preocupa que no ___ los deberes. (entender, él)', a: ['entienda'], why: '*entender* → *entienda*.' },
      { q: 'Mi hijo no pudo ___ a clase ayer.', a: ['asistir', 'ir'], why: '*asistir a clase* or *ir a clase*.' },
      { q: 'Quiero ___ con la tutora. (hablar)', a: ['hablar'], why: 'The same person: the infinitive.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'En España, primaria empieza a los seis años.', a: 't', why: 'Compulsory school starts with *primaria* at six.' },
      { q: 'Para una salida fuera del colegio no hace falta ningún papel.', a: 'f', why: 'Schools ask for a signed *autorización*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: '¿Cómo se lleva con sus compañeros?', why: '*llevarse bien / mal con*: get on with.' },
      { a: 'Le informo de que mi hija estaba enferma.', why: '*Le informo de que…*: a formal start.' },
    ] },
  ],
};
