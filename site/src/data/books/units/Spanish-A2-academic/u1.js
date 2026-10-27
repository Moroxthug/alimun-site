// Spanish A2 for study and exams, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'In the classroom',
  goal: 'Understand classroom language and talk about your course: instructions, questions, subjects and timetables.',
  art: 'mug',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['classroom-language', 'imperative-vosotros-usted', 'school-subjects', 'time-expressions', 'timetable'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: '¿Cómo se dice…?',
      about: 'Understand what the teacher asks you to do, and ask your own questions in class.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'Teachers give many short instructions with the **imperative**. In Spain, the teacher often speaks to the whole class with **vosotros**: take the infinitive, change the final *-r* to **-d**: *leer → **leed**, escuchar → **escuchad***. To one learner, the teacher uses **tú**: *lee, escucha*.' },
          { t: 'table', caption: 'Instructions in class', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'English'], rows: [
            ['Abrid el libro por la página 12.', 'Open the book at page 12.'],
            ['Leed el texto.', 'Read the text.'],
            ['Escuchad.', 'Listen.'],
            ['Trabajad en parejas.', 'Work in pairs.'],
            ['Marcad la respuesta correcta.', 'Tick the right answer.'],
            ['Completad las frases.', 'Complete the sentences.'],
            ['Relacionad las dos columnas.', 'Match the two columns.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Books and exams usually give instructions with **usted**: *Lea, Escuche, Marque, Complete, Relacione*. The *vosotros* form is used only in Spain. In Latin America, the teacher says **ustedes** to the class: *Lean el texto. Escuchen.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '¿Cómo **se dice** «pen» en español?', n: 'You know the word in another language and want the Spanish word.' },
            { s: '¿Qué **significa** «deberes»?', n: 'You want to know the meaning of a Spanish word. *Los deberes* means homework.' },
            { s: '¿Cómo **se escribe**?', n: 'You want to know the spelling.' },
            { s: '¿Puedes **repetir**, por favor?', n: 'You want the teacher to say it again. With *usted*: *¿Puede repetir?*' },
            { s: '¿Puedes hablar **más despacio**?', n: '*más despacio* means more slowly.' },
            { s: 'No lo **he entendido**.', n: 'The pretérito perfecto of *entender*. In Latin America many people say *No entendí*.' },
          ] },
          { t: 'dialogue', title: 'En la clase de español', lines: [
            { who: 'Elena', s: 'Abrid el libro por la página 24, por favor.' },
            { who: 'Tomás', s: 'Perdona, ¿por qué página?' },
            { who: 'Elena', s: 'Por la página 24. Leed el texto de arriba.' },
            { who: 'Amira', s: 'Tengo una pregunta. ¿Qué significa «horario»?' },
            { who: 'Elena', s: 'Un horario dice cuándo tienes cada clase.' },
            { who: 'Amira', s: 'Gracias. ¿Y cómo se escribe? ¿Con hache?' },
            { who: 'Elena', s: 'Sí, con hache: h, o, r, a, r, i, o. La hache no se pronuncia.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What do you say? Match the situation and the question.', pairs: [
            ['No entiendes una palabra.', '¿Qué significa esta palabra?'],
            ['La profesora habla muy rápido.', '¿Puedes hablar más despacio?'],
            ['No sabes la palabra en español.', '¿Cómo se dice en español?'],
            ['No sabes escribir la palabra.', '¿Cómo se escribe?'],
            ['No has oído la frase.', '¿Puedes repetir, por favor?'],
          ] },
          { t: 'ex', kind: 'choice', h: 'The teacher gives an instruction. What do you do?', items: [
            { q: '«Trabajad en parejas.»', o: ['Trabajo con un compañero o una compañera.', 'Trabajo solo.', 'Trabajo con toda la clase.'], why: '*en parejas* means two people together.' },
            { q: '«Relacionad las dos columnas.»', o: ['Busco las parejas que van juntas.', 'Escribo un texto largo.', 'Leo el texto en voz alta.'], why: '*relacionar*: you put the things that belong together into pairs.' },
            { q: '«Marcad la respuesta correcta.»', o: ['Pongo una cruz en una respuesta.', 'Escribo tres respuestas.', 'Cierro el libro.'], why: '*marcar*: you put a cross or a tick next to one answer.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the instruction for each person.', verb: 'escuchar', tense: 'Imperative (instructions)', rows: [
            ['tú', 'escucha', 'For *tú*, the same form as *él* in the present: *escucha*.'],
            ['vosotros, vosotras', 'escuchad', 'For *vosotros*, the infinitive with *-d* instead of *-r*.'],
            ['usted', 'escuche', 'For *usted*, *-ar* verbs end in *-e*.'],
            ['ustedes', 'escuchen', 'For *ustedes*, *-ar* verbs end in *-en*.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the teacher’s instructions.', items: [
            { q: '___ el texto de la página 30. (leer, vosotros)', a: ['Leed'], why: '*vosotros*: the infinitive *leer* with *-d* instead of *-r*.' },
            { q: '___ las frases con una palabra. (completar, usted)', a: ['Complete'], why: 'With *usted*, *-ar* verbs end in *-e*: *complete*.' },
            { q: '___ la respuesta correcta. (marcar, tú)', a: ['Marca'], why: 'With *tú*, use the *él* form of the present: *marca*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make questions for class.', items: [
            { a: '¿Cómo se dice esto en español?', why: 'The question word *Cómo*, then *se dice*, then the rest.' },
            { a: '¿Qué significa esta palabra?', why: '*Qué* first, then the verb *significa*, then the word you ask about.' },
            { a: '¿Puedes repetir la última frase?', why: '*Puedes* + infinitive *repetir*, then what you want to hear again.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Subjects, timetables and course information',
      about: 'Name school and university subjects, say when classes are and ask about a course.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A school or university subject is **la asignatura**. After *estudiar* and *tener* you usually use **no article**: *Estudio Informática. Hoy tengo Historia.* After *gustar* you use the article: *Me gusta **la** historia.*' },
          { t: 'table', caption: 'Subjects', explain: ['head', 'col1'], quiz: true, head: ['Subject', 'What you learn'], rows: [
            ['las matemáticas', 'numbers and formulas'],
            ['la historia', 'life and events in the past'],
            ['la biología', 'plants, animals and the human body'],
            ['la informática', 'computers and programming'],
            ['la economía', 'money, companies and markets'],
            ['el arte', 'painting and drawing'],
          ] },
          { t: 'tip', art: 'owl', md: 'At school and at university a class is *la clase*. A small university class is *el seminario*. In a language school you take *un curso*. In much of Latin America people say *la materia* for a subject, and in some countries *la computación* for computer science.' },
        ],
        [
          { t: 'text', md: 'Timetables need small time words. Use **el** with a day (*el lunes* = this Monday, *los lunes* = every Monday), **a las** with a clock time, **de … a** for the start and the end, **a partir de** for a start with no end, and **en** with months.' },
          { t: 'examples', items: [
            { s: '**El** lunes tengo español.', n: '*el* + day. *Los lunes* means every Monday.' },
            { s: 'El curso empieza **a las** nueve.', n: '*a las* + clock time. For one o’clock: *a la una*.' },
            { s: 'La clase es **de** diez **a** doce.', n: '*de … a*: the start and the end.' },
            { s: '**A partir de** octubre estudio todos los días.', n: '*a partir de*: from this time on.' },
            { s: '**En** marzo hago el examen.', n: '*en* + month: *en enero, en mayo*.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'En la secretaría', lines: [
            { who: 'Mei', s: 'Buenos días. Quería información sobre el curso de preparación para el examen A2. ¿Cuándo empieza?' },
            { who: 'Javier', s: 'El próximo curso empieza el 3 de marzo.' },
            { who: 'Mei', s: '¿Y cuántos días a la semana hay clase?' },
            { who: 'Javier', s: 'Dos días a la semana, los martes y los jueves, de seis a ocho y cuarto de la tarde.' },
            { who: 'Mei', s: '¿Cuántas personas hay en cada grupo?' },
            { who: 'Javier', s: 'Como máximo, doce.' },
            { who: 'Mei', s: '¿Tengo que comprar un libro antes?' },
            { who: 'Javier', s: 'No, el primer día le damos el libro. El curso es aquí, en el aula 312, en la tercera planta.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Hay clase tres días a la semana.', a: 'f', why: '*Dos días a la semana*: on Tuesday and Thursday.' },
            { q: 'Las clases son por la tarde.', a: 't', why: 'From six to a quarter past eight *de la tarde*.' },
            { q: 'En un grupo hay como máximo doce personas.', a: 't', why: '*Como máximo, doce* means not more than twelve.' },
            { q: 'Mei tiene que comprar el libro antes del curso.', a: 'f', why: 'She gets the book on the first day: *el primer día le damos el libro*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write el, a las, a, en or a partir de.', items: [
            { q: 'El examen es ___ viernes.', a: ['el'], why: '*el* + day.' },
            { q: 'La pausa empieza ___ diez y media.', a: ['a las'], why: '*a las* + clock time.' },
            { q: 'Tengo clase de nueve ___ una.', a: ['a'], why: '*de … a*: the end time comes after *a*.' },
            { q: 'Mi cumpleaños es ___ enero.', a: ['en'], why: '*en* + month.' },
            { q: '___ hoy estudio una hora todos los días.', a: ['A partir de', 'Desde'], why: '*a partir de hoy*: from today on, with no end.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['¿Cuándo empieza el curso?', 'El 3 de marzo.'],
            ['¿Cuántos días a la semana hay clase?', 'Dos: martes y jueves.'],
            ['¿Dónde es el curso?', 'En el aula 312.'],
            ['¿Cuánto dura la pausa?', 'Quince minutos.'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a timetable and a notice',
      about: 'Find days, times and rooms in a timetable, and understand a notice about changes.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Here is the timetable of an A2 course at a language school. Read the days, times and rooms carefully.' },
          { t: 'table', caption: 'Horario de español A2', head: ['Día', 'Hora', 'Clase', 'Aula'], rows: [
            ['Lunes', '9:00–12:15', 'Gramática', '104'],
            ['Martes', '9:00–12:15', 'Lectura y escritura', '104'],
            ['Miércoles', '16:00–17:30', 'Pronunciación', '210'],
            ['Jueves', '9:00–12:15', 'Conversación', '104'],
            ['Viernes', '9:00–10:30', 'Preparación del examen', '012'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Look at the timetable. Choose the right answer.', items: [
            { q: '¿Cuándo es la preparación del examen?', o: ['el viernes a las nueve', 'el miércoles a las cuatro', 'el viernes a las cuatro'], why: 'Viernes, 9:00–10:30: *Preparación del examen*.' },
            { q: '¿En qué aula es la clase de pronunciación?', o: ['en el aula 210', 'en el aula 104', 'en el aula 012'], why: 'Miércoles, *Pronunciación*, aula 210.' },
            { q: '¿Hasta qué hora es la clase del lunes?', o: ['hasta las doce y cuarto', 'hasta las doce y media', 'hasta las doce menos cuarto'], why: '12:15 is *las doce y cuarto*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Schools put important changes on a notice, **el aviso**. Two phrases are very common there: **se cancela** (a class does not happen) and **pasa a** (it moves to another day or place): *La clase del miércoles **se cancela**. **Pasa al** viernes.*' },
          { t: 'reading', title: 'Aviso: información importante para los grupos A2', md: 'Queridos estudiantes:\n\nLa próxima semana hay algunos cambios. El miércoles se cancela la clase de pronunciación porque la profesora, Carla, está en un curso de formación. La clase pasa al viernes, de 11:00 a 12:30.\n\nA partir del lunes, el aula 104 está cerrada porque vamos a cambiar las ventanas. Durante dos semanas, las clases son en el aula 108, en la primera planta.\n\nAdemás, el sábado hay un examen de prueba para el A2, de 10:00 a 11:30. Para participar, tenéis que apuntaros en la secretaría hasta el miércoles. El examen de prueba es gratuito.\n\nLa secretaría abre de lunes a viernes, de 8:30 a 13:00.\n\nEl equipo de la Academia Los Olmos' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the notice. True, false or not given?', items: [
            { q: 'El miércoles no hay clase de pronunciación.', a: 't', why: '*El miércoles se cancela la clase de pronunciación.*' },
            { q: 'La profesora Carla está enferma.', a: 'f', why: 'She is *en un curso de formación*, a training course for teachers. She is not ill.' },
            { q: 'El aula 108 es más grande que el aula 104.', a: 'ng', why: 'The notice says nothing about the size of the rooms.' },
            { q: 'Te puedes apuntar al examen de prueba el jueves.', a: 'f', why: '*hasta el miércoles*: Wednesday is the last day.' },
            { q: 'El examen de prueba no cuesta nada.', a: 't', why: '*gratuito* means free.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Use the timetable and the notice together.', items: [
            { q: '¿Dónde es la clase de conversación el jueves de la próxima semana?', o: ['en el aula 108', 'en el aula 104', 'en el aula 210'], why: 'Room 104 is closed, so the classes are in *el aula 108*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words from the notice and their meaning.', pairs: [
            ['se cancela', 'no hay clase'],
            ['gratuito', 'no cuesta dinero'],
            ['la secretaría', 'la oficina de la escuela'],
            ['cerrada', 'no está abierta'],
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words for places in the school.', items: [
            { s: 'Para apuntarte, ve a la [secretaría]. A partir del lunes, las clases son en el [aula] 108, en la primera [planta].', why: '*la secretaría* (the office), *el aula* (the classroom), *la planta* (the floor).' },
          ] },
          { t: 'tip', art: 'owl', md: '*Aula* is feminine, but it takes *el* in the singular because it starts with a stressed *a*: *el aula*, *las aulas*. The adjective stays feminine: *el aula está cerrada*.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'No entiendes una palabra. Preguntas: «___»', o: ['¿Qué significa?', '¿Qué hora es?', '¿Dónde vives?'], why: '*¿Qué significa…?* asks for the meaning.' },
      { q: '___ el texto, por favor. (vosotros)', o: ['Leed', 'Lee', 'Lean'], why: 'For *vosotros*: *leer* with *-d* instead of *-r*, *leed*.' },
      { q: 'El examen es ___ martes.', o: ['el', 'en', 'a las'], why: '*el* + day.' },
      { q: 'En ___ aprendemos mucho sobre ordenadores.', o: ['informática', 'historia', 'arte'], why: '*informática*: computers and programming.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '¿Cómo se ___ «pen» en español? (decir)', a: ['dice'], why: 'With *se*, the verb takes the *él* form: *se dice*.' },
      { q: 'El curso empieza ___ seis de la tarde.', a: ['a las'], why: '*a las* + clock time.' },
      { q: 'El miércoles no hay clase: la clase se ___. (cancelar)', a: ['cancela'], why: '*se cancela*: the class does not happen.' },
      { q: '___ la respuesta correcta. (marcar, usted)', a: ['Marque'], why: 'With *usted*, *-ar* verbs end in *-e*. *Marcar* keeps the hard sound with *qu*: *marque*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: '¿Puede repetir la pregunta, por favor?', why: '*Puede* + infinitive *repetir*, then the object. *Por favor* goes at the end.' },
      { a: '¿Cómo se escribe esta palabra?', why: 'Question word, *se escribe*, then the word you ask about.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the subject and the topic.', pairs: [
      ['las matemáticas', 'números y fórmulas'],
      ['la historia', 'la vida en el pasado'],
      ['la biología', 'las plantas y los animales'],
      ['la economía', 'el dinero y las empresas'],
    ] },
  ],
};
