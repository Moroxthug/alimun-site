// Spanish B1 for work, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Job interviews',
  goal: 'Prepare for a job interview and talk about your experience and strengths.',
  art: 'suitcase',
  tags: { skills: ['speaking', 'reading', 'vocabulary'], topics: ['job-interview', 'experience', 'strengths', 'indirect-questions'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Experience and strengths',
      about: 'Say what experience you have and what you are good at.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'In an interview you talk about your **experience** (*experiencia*). For a job you still have, use *llevar* + time + *-ando / -iendo*, or the present with *desde* or *desde hace*. For a job that is finished, with a date, use the **indefinido**. For experience in your life, without a date, use the **pretérito perfecto**.' },
          { t: 'examples', items: [
            { s: '**Llevo** tres años **trabajando** como asistente de proyectos.', n: 'I still do this job: *llevar* + time + gerund.' },
            { s: '**Trabajo** en una empresa de transportes **desde hace** tres años.', n: 'Also still true: present + *desde hace* + time.' },
            { s: 'De 2019 a 2022 **trabajé** en un hotel de Málaga.', n: 'Finished, with dates: indefinido.' },
            { s: '**He trabajado** en varios proyectos internacionales.', n: 'Experience in your life, no date: pretérito perfecto.' },
            { s: 'Tengo mucha experiencia **en** atención al cliente y **con** clientes extranjeros.', n: '*experiencia en* a field of work, *experiencia con* people, tools or programs.' },
          ] },
          { t: 'tip', art: 'churro', md: 'In most of Latin America people use the indefinido more, also without a date: *Trabajé en varios proyectos internacionales.* Both are understood everywhere.' },
        ],
        [
          { t: 'table', caption: 'Strengths', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['ser responsable', 'people can trust you to do your work'],
            ['saber trabajar en equipo', 'you work well with other people'],
            ['trabajar bien bajo presión', 'you work well when there is a lot of stress'],
            ['tener iniciativa', 'you start things without waiting to be told'],
            ['ser flexible', 'you can change your plans easily'],
            ['ser organizado / organizada', 'you plan your work well'],
          ] },
          { t: 'text', md: 'To name a strength, say *Soy una persona muy…* or *Uno de mis puntos fuertes es…*. Then give a **short example** from your work: *Por ejemplo, el año pasado…*. Remember that adjectives agree: *Soy organizado* (a man), *Soy organizada* (a woman). *Responsable* and *flexible* are the same for both.' },
          { t: 'tip', art: 'owl', md: 'Everybody says *Sé trabajar en equipo.* An example makes it believable: *En mi último proyecto trabajé con compañeros de tres países.*' },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Is the job still going on or is it finished? Sort the sentences.', groups: ['Still going on', 'Finished'], explain: ['groups'], items: [
            { s: 'Llevo dos años dando clases de inglés.', g: 0, why: '*llevar* + time + gerund: still true today.' },
            { s: 'Trabajo en un banco desde 2021.', g: 0, why: 'Present + *desde*: still true.' },
            { s: 'En 2018 trabajé seis meses en Londres.', g: 1, why: 'Indefinido with a date in the past: finished.' },
            { s: 'Fui jefa de equipo hasta el año pasado.', g: 1, why: '*hasta el año pasado*: finished.' },
            { s: 'Dirijo un pequeño equipo desde hace un año.', g: 0, why: 'Present + *desde hace*: still true.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Llevo cuatro años ___ como enfermera. (trabajar)', a: ['trabajando'], why: '*llevar* + time + gerund: *trabajando*.' },
            { q: 'De 2016 a 2020 ___ en una agencia de viajes. (trabajar, yo)', a: ['trabajé', 'trabaje'], why: 'Finished, with dates: indefinido *trabajé*.' },
            { q: 'Nunca ___ en una empresa tan grande. (trabajar, yo, pretérito perfecto)', a: ['he trabajado'], why: 'Life experience with *nunca*: pretérito perfecto.' },
            { q: 'Tengo experiencia ___ programas de diseño.', a: ['con'], why: 'For tools and programs: *experiencia con*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the strength and the example.', pairs: [
            ['Soy muy responsable.', 'En cinco años nunca he llegado tarde a una cita con un cliente.'],
            ['Sé trabajar en equipo.', 'Me gusta trabajar con mis compañeros y ayudo cuando alguien tiene dudas.'],
            ['Trabajo bien bajo presión.', 'En Navidad tenemos muchísimos pedidos, y yo mantengo la calma.'],
            ['Tengo iniciativa.', 'Vi que perdíamos clientes y propuse un nuevo servicio de atención por teléfono.'],
            ['Soy flexible.', 'Si un compañero está enfermo, cambio mi turno sin problema.'],
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the verb? Choose all the right ones.', items: [
            { key: 'tener', o: ['iniciativa', 'experiencia', 'don de gentes', 'responsable', 'organizado'], a: [0, 1, 2], why: '*tener* goes with nouns: *iniciativa*, *experiencia*, *don de gentes* (being good with people). Adjectives go with *ser*.' },
            { key: 'ser', o: ['responsable', 'flexible', 'organizada', 'experiencia', 'iniciativa'], a: [0, 1, 2], why: '*ser* + an adjective for who you are: *responsable*, *flexible*, *organizada*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Llevo tres años trabajando en atención al cliente.', why: '*Llevo* + time + gerund + the field.' },
            { a: 'Uno de mis puntos fuertes es la organización.', why: '*Uno de mis puntos fuertes es…*: one of my strengths is…' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Questions and answers',
      about: 'Answer typical interview questions well and ask good questions yourself.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Many interviews in Spain use similar questions. Interviewers usually say *usted*, but in some young companies they say *tú* from the start. Prepare an answer for each question and practise it aloud.' },
          { t: 'table', caption: 'Typical interview questions', explain: ['head', 'col1'], head: ['Question', 'What they want to know'], rows: [
            ['Hábleme un poco de usted.', 'a short summary of your education and work, about two minutes'],
            ['¿Por qué quiere trabajar con nosotros?', 'what you know about the company and why the job fits you'],
            ['¿Por qué quiere cambiar de trabajo?', 'a positive reason, not complaints about your old job'],
            ['¿Cuáles son sus puntos fuertes y débiles?', 'what you are good at, and if you know what you need to improve'],
            ['¿Cuáles son sus expectativas salariales?', 'how much you want to earn; usually a gross amount per year'],
            ['¿Cuándo podría incorporarse?', 'your start date; it often depends on how much notice you must give (*el preaviso*)'],
          ] },
        ],
        [
          { t: 'text', md: 'A good answer is **short, positive and concrete**. For a weakness, choose a real but small one, and say what you do about it.' },
          { t: 'examples', items: [
            { s: 'Quiero trabajar con ustedes **porque** sus proyectos me interesan mucho.', n: 'A reason with *porque*.' },
            { s: '**Busco un nuevo reto** profesional.', n: 'A positive reason to change jobs. *Un reto*: a challenge.' },
            { s: 'A veces soy un poco impaciente. **Por eso** ahora planifico más tiempo para cada tarea.', n: 'A small weakness and what you do about it.' },
            { s: '**Podría** incorporarme el 1 de abril.', n: '*podría*: a polite, open answer.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which answer is best in an interview?', items: [
            { q: '¿Por qué quiere cambiar de trabajo?', o: ['Busco un nuevo reto profesional.', 'Mi jefe es horrible.', 'No lo sé muy bien.'], why: 'Stay positive and never complain about your old employer.' },
            { q: '¿Cuál es su mayor punto débil?', o: ['Me cuesta hablar en público, por eso estoy haciendo un curso.', 'No tengo ningún punto débil.', 'Llego tarde casi todos los días.'], why: 'A real but small weakness, and what you do about it.' },
            { q: '¿Tiene alguna pregunta?', o: ['Sí, ¿cómo es la formación al principio?', 'No, nada. ¡Adiós!', '¿Cuántas vacaciones tiene usted?'], why: 'A question about the job shows real interest.' },
          ] },
        ],
        [
          { t: 'text', md: 'At the end you usually hear: *¿Tiene alguna pregunta?* Have two or three questions ready. Polite questions are often **indirect**: *Me gustaría saber…* or *¿Podría decirme…?*. The question word keeps its accent (*cómo*, *cuándo*, *qué*). For a yes/no question, use **si** (without an accent).' },
          { t: 'examples', items: [
            { s: 'Me gustaría saber **cómo** es un día normal en este puesto.', n: 'From *¿Cómo es un día normal?* The word order stays the same.' },
            { s: '¿Podría decirme **si** hay posibilidades de formación?', n: 'From *¿Hay posibilidades…?*, a yes/no question: *si*.' },
            { s: '¿**Cuándo** tendré una respuesta?', n: 'A direct question is also fine.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make the question indirect. Start with the words given.', items: [
            { q: '¿Cuántas personas hay en el equipo?', cue: 'Me gustaría saber', a: ['Me gustaría saber cuántas personas hay en el equipo.'], why: 'The question word *cuántas* stays with its accent; the order does not change.' },
            { q: '¿Es posible trabajar desde casa?', cue: '¿Podría decirme', a: ['¿Podría decirme si es posible trabajar desde casa?'], why: 'A yes/no question becomes *si* + the question.' },
            { q: '¿Cuándo empieza el proyecto?', cue: 'Me gustaría saber', a: ['Me gustaría saber cuándo empieza el proyecto.'], why: '*cuándo* keeps its accent in an indirect question.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the best answer.', pairs: [
            ['¿Por qué quiere trabajar con nosotros?', 'Sus productos son sostenibles y eso es importante para mí.'],
            ['¿Por qué quiere cambiar de trabajo?', 'Me gustaría tener más responsabilidad.'],
            ['¿Cuál es su mayor punto débil?', 'Quiero hacerlo todo yo sola, pero estoy aprendiendo a pedir ayuda.'],
            ['¿Cuándo podría incorporarse?', 'Tengo quince días de preaviso, así que a principios de julio.'],
            ['¿Cuáles son sus expectativas salariales?', 'Busco un salario de unos 30.000 euros brutos al año.'],
          ] },
          { t: 'ex', kind: 'build', h: 'Build the indirect question. Two words do not belong.', items: [
            { a: 'Me gustaría saber cómo es la formación.', extra: ['qué', 'está'], why: 'The question word *cómo* + *es*: what something is like. *qué* and *está* are not needed.' },
            { a: '¿Podría decirme si el contrato es indefinido?', extra: ['sí', 'qué'], why: '*si* without an accent means *if*. *Sí* with an accent means *yes*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Ready for the interview',
      about: 'Read tips for an interview and a sample conversation.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'Cómo preparar una entrevista de trabajo', md: 'Una entrevista de trabajo pone nerviosa a mucha gente. Pero con una buena preparación se sentirá más seguro.\n\nAntes de la entrevista, infórmese sobre la empresa: ¿qué hace?, ¿quiénes son sus clientes? Lea otra vez la oferta de trabajo con atención y piense qué parte de su experiencia encaja con el puesto. Para cada punto fuerte, prepare un ejemplo breve de su vida profesional.\n\nMuchas entrevistas empiezan con una conversación corta y relajada, por ejemplo sobre el viaje o el tiempo. Después, normalmente le pedirán que hable un poco de usted. Practique esta presentación en voz alta: dos o tres minutos son suficientes.\n\nLa puntualidad es importante. Salga con tiempo y llegue unos diez minutos antes. Si la entrevista es por videollamada, pruebe la cámara y el micrófono el día anterior.\n\nAl final, casi siempre le preguntarán: «¿Tiene alguna pregunta?». Prepare dos o tres preguntas, por ejemplo sobre el equipo o sobre la formación. Así demuestra que el puesto le interesa de verdad.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the tips. True, false or not given?', items: [
            { q: 'Antes de la entrevista conviene buscar información sobre la empresa.', a: 't', why: '*infórmese sobre la empresa*.' },
            { q: 'Las entrevistas nunca empiezan con una conversación relajada.', a: 'f', why: 'The text says *muchas entrevistas empiezan con una conversación corta y relajada*.' },
            { q: 'La presentación personal debe durar unos diez minutos.', a: 'f', why: '*dos o tres minutos son suficientes*. Ten minutes is how early you should arrive.' },
            { q: 'En una entrevista por videollamada hay que probar la técnica antes.', a: 't', why: '*pruebe la cámara y el micrófono el día anterior*.' },
            { q: 'No se debe preguntar por el salario en la primera entrevista.', a: 'ng', why: 'The text does not talk about questions about salary.' },
            { q: 'Hacer preguntas demuestra interés por el puesto.', a: 't', why: '*Así demuestra que el puesto le interesa de verdad.*' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Una entrevista de trabajo', lines: [
            { who: 'Rafael', s: 'Bueno, Inés, hábleme un poco de usted.' },
            { who: 'Inés', s: 'Claro. Estudié Administración de Empresas y llevo tres años trabajando como asistente de proyectos en una empresa de transportes de Valencia. Organizo reuniones y atiendo a nuestros clientes de Francia.' },
            { who: 'Rafael', s: '¿Y por qué quiere cambiar de trabajo?' },
            { who: 'Inés', s: 'Busco un nuevo reto. Con ustedes podría trabajar en proyectos internacionales más grandes, y eso me interesa mucho.' },
            { who: 'Rafael', s: '¿Cuáles son sus puntos fuertes?' },
            { who: 'Inés', s: 'Soy muy organizada. Por ejemplo, el año pasado preparé yo sola la presencia de mi empresa en una feria.' },
            { who: 'Rafael', s: '¿Y sus puntos débiles?' },
            { who: 'Inés', s: 'A veces quiero hacerlo todo sola. Ahora pido ayuda antes.' },
            { who: 'Rafael', s: 'Muy bien. ¿Tiene alguna pregunta para nosotros?' },
            { who: 'Inés', s: 'Sí. Me gustaría saber cómo es la formación en las primeras semanas.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Think about the interview. Choose the right answer.', items: [
            { q: '¿Cuánto tiempo lleva Inés en su trabajo actual?', o: ['tres años', 'un año', 'desde que estudió en Francia'], why: '*llevo tres años trabajando como asistente de proyectos*.' },
            { q: '¿Por qué quiere cambiar Inés de trabajo?', o: ['Quiere trabajar en proyectos internacionales más grandes.', 'Gana poco dinero.', 'No quiere vivir más en Valencia.'], why: 'She gives a positive reason: bigger international projects.' },
            { q: '¿Qué ejemplo da Inés de su punto fuerte?', o: ['Preparó sola la presencia de su empresa en una feria.', 'Estudió Administración de Empresas.', 'Ahora pide ayuda antes.'], why: '*Por ejemplo, el año pasado preparé yo sola… una feria.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Me gustaría saber [como] es un día normal en el puesto.', a: ['cómo'], why: 'In an indirect question *cómo* keeps its accent.' },
            { s: 'Llevo dos años [trabajar] en una tienda.', a: ['trabajando'], why: '*llevar* + time + gerund: *trabajando*.' },
            { s: 'Soy una persona muy [organizado]. (Inés)', a: ['organizada'], why: '*persona* is feminine, and Inés is a woman: *organizada*.' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword with words from the unit.', words: [
            { a: 'entrevista', clue: 'Conversación con una empresa para conseguir un trabajo.' },
            { a: 'puesto', clue: 'El trabajo concreto que ofrece una empresa.' },
            { a: 'reto', clue: 'Algo difícil e interesante que quieres conseguir.' },
            { a: 'preaviso', clue: 'El tiempo que tienes que avisar antes de dejar un trabajo.' },
            { a: 'salario', clue: 'El dinero que ganas cada mes o cada año.' },
            { a: 'formación', clue: 'Cursos y clases para aprender el trabajo.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Llevo dos años ___ en un hospital.', o: ['trabajando', 'trabajado', 'trabajar'], why: '*llevar* + time + gerund.' },
      { q: 'De 2015 a 2018 ___ en Barcelona.', o: ['viví', 'he vivido', 'vivo'], why: 'Finished, with dates: indefinido.' },
      { q: 'Puedes trabajar sin ayuda y empiezas cosas nuevas tú solo. Tienes ___.', o: ['iniciativa', 'preaviso', 'reto'], why: '*tener iniciativa*.' },
      { q: '¿Por qué quiere cambiar de trabajo? La mejor respuesta es: ___', o: ['Me gustaría tener más responsabilidad.', 'Mis compañeros son horribles.', 'Estoy cansado de trabajar.'], why: 'A positive reason.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Tengo mucha experiencia ___ atención al cliente.', a: ['en'], why: '*experiencia en* a field of work.' },
      { q: '¿Podría decirme ___ hay posibilidades de formación?', a: ['si'], why: 'An indirect yes/no question uses *si*.' },
      { q: 'Me gustaría saber ___ empieza el proyecto. (when)', a: ['cuándo', 'cuando'], why: 'The question word keeps its accent: *cuándo*.' },
      { q: 'A veces soy impaciente. ___ ahora planifico más.', a: ['Por eso', 'Así que'], why: '*Por eso* gives the result.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Me gustaría saber cuándo puedo empezar.', why: 'Indirect question: *Me gustaría saber* + *cuándo* + verb.' },
      { a: 'Trabajo como cocinero desde hace cuatro años.', why: 'Present + *desde hace* + time.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'En una entrevista es mejor no hablar mal del trabajo anterior.', a: 't', why: 'Stay positive about your old job.' },
      { q: 'En una pregunta indirecta, «cómo» pierde el acento.', a: 'f', why: 'The question word keeps its accent: *Me gustaría saber cómo…*' },
    ] },
  ],
};
