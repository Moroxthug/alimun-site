// Spanish B1, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Work',
  goal: 'Understand job adverts, write a formal email and do a simple interview.',
  art: 'mug',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing', 'speaking'], topics: ['double-object-pronouns', 'job-adverts', 'formal-email', 'job-interview'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Me lo, se lo',
      about: 'Use two object pronouns together and put them in the right place.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'When a sentence has two object pronouns, the **indirect** one (to whom) comes first, then the **direct** one (what): *Me lo das.* *Le* and *les* become **se** before *lo*, *la*, *los* and *las*: *Se lo doy*, never *le lo doy*.' },
          { t: 'table', caption: 'Two pronouns together', explain: ['head'], quiz: true, head: ['Indirect', '+ lo', '+ la', '+ los, las'], rows: [
            ['me', 'me lo', 'me la', 'me los, me las'],
            ['te', 'te lo', 'te la', 'te los, te las'],
            ['le → se', 'se lo', 'se la', 'se los, se las'],
            ['nos', 'nos lo', 'nos la', 'nos los, nos las'],
            ['os', 'os lo', 'os la', 'os los, os las'],
            ['les → se', 'se lo', 'se la', 'se los, se las'],
          ] },
        ],
        [
          { t: 'text', md: 'Both pronouns go **before** a conjugated verb: *Te lo explico.* With an infinitive, a gerund or a positive command they can also go at the **end**, joined to the verb: *Voy a explicártelo*, *Estoy explicándotelo*, *Explícamelo*. Add a written accent to keep the stress in the same place.' },
          { t: 'examples', items: [
            { s: '—¿Me dejas el coche? —Sí, **te lo** dejo.', n: '*Te* (to you) first, then *lo* (the car).' },
            { s: 'Le di el informe a Marta. **Se lo** di.', n: '*Le* + *lo* becomes *se lo*.' },
            { s: '**Se lo** voy a enviar mañana. Voy a **enviárselo** mañana.', n: 'Two correct positions with *ir a* + infinitive.' },
            { s: '¿Las fotos? **Mándamelas** por correo.', n: 'A positive command: the pronouns are joined at the end, with an accent.' },
            { s: '**Se las** he dado a ellos.', n: '*Se* can mean him, her, you (*usted*) or them. *A ellos* makes it clear.' },
          ] },
          { t: 'tip', art: 'churro', md: 'In Spain *os lo* is used for "to you all". In Latin America people use *ustedes*, so it becomes *se lo*: *Se lo explico a ustedes.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right pronouns.', items: [
            { q: '—¿Le has dado las llaves al portero? —Sí, ya ___ he dado.', o: ['se las', 'le las', 'las le'], why: '*Le* + *las* becomes *se las*.' },
            { q: '—¿Me prestas tu diccionario? —Claro, ahora ___ traigo.', o: ['te lo', 'lo te', 'te le'], why: 'Indirect first (*te*), then direct (*lo*).' },
            { q: '—¿Nos enviáis las fotos? —Sí, ___ enviamos esta tarde.', o: ['os las', 'las os', 'os les'], why: '*Os* (to you all) + *las* (the photos).' },
            { q: '—¿Quién te regaló ese reloj? —___ regaló mi abuelo.', o: ['Me lo', 'Lo me', 'Me le'], why: '*Me* (to me) + *lo* (the watch), before the verb.' },
            { q: '—¿Has explicado el problema a tus jefes? —No, voy a ___ mañana.', o: ['explicárselo', 'explicarles lo', 'explicárlelo'], why: '*Les* + *lo* becomes *se lo*, joined to the infinitive with an accent.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Replace both objects with pronouns.', items: [
            { q: 'Le di el informe a Marta.', a: ['Se lo di.', 'Se lo di a Marta.'], why: '*Le* + *el informe* becomes *se lo*.' },
            { q: 'Te compro las entradas.', a: ['Te las compro.'], why: '*Las entradas* becomes *las*, after *te*.' },
            { q: 'Mi jefa nos explicó el proyecto.', a: ['Mi jefa nos lo explicó.', 'Nos lo explicó.'], why: '*Nos* + *lo*, before the verb.' },
            { q: 'Voy a mandar el currículum a la empresa.', a: ['Voy a mandárselo.', 'Se lo voy a mandar.', 'Voy a mandárselo a la empresa.', 'Se lo voy a mandar a la empresa.'], why: '*Le* + *lo* becomes *se lo*: before *voy* or joined to *mandar*, with an accent.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Te lo explico después de la reunión.', why: 'Both pronouns before the conjugated verb: *te lo explico*.' },
            { a: 'Se las he enviado esta mañana.', why: 'The pronouns go before *haber*: *se las he enviado*.' },
            { a: 'Nos la van a dar el lunes.', why: 'Before *ir a* + infinitive is also correct: *nos la van a dar*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
            { s: 'Ya [le lo] he dicho a mi jefe.', a: ['se lo'], why: '*Le* + *lo* always becomes *se lo*.' },
            { s: '[Lo te] doy mañana.', a: ['Te lo', 'te lo'], why: 'The indirect pronoun comes first: *te lo*.' },
            { s: 'Voy a [darteló] esta tarde.', a: ['dártelo'], why: 'The accent goes on the stressed syllable of the verb: *dártelo*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Job adverts and formal emails',
      about: 'The words of job adverts and the phrases of a formal email.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'Job adverts (*ofertas de empleo*) use short phrases and a lot of nouns. Learn them as whole phrases.' },
          { t: 'table', caption: 'The job advert', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['la oferta de empleo', 'the job advert'],
            ['el puesto', 'the position, the job'],
            ['solicitar un puesto', 'to apply for a job'],
            ['los requisitos', 'what you need to have for the job'],
            ['la experiencia', 'work you have done before'],
            ['el sueldo', 'the salary'],
            ['la jornada completa / la media jornada', 'full-time / part-time'],
            ['el contrato indefinido / temporal', 'a permanent / temporary contract'],
            ['la incorporación inmediata', 'you start straight away'],
            ['el currículum', 'the CV'],
            ['la carta de presentación', 'the cover letter'],
            ['enviar la candidatura', 'to send your application'],
          ] },
        ],
        [
          { t: 'text', md: 'A formal email uses *usted*. Start with *Estimado señor…* or *Estimada señora…*, or *Estimados señores* when you do not know the name, followed by a colon. Say why you are writing, give the details and finish politely. To a company or a group, use *les*: *Les escribo para…*' },
          { t: 'table', caption: 'A formal email', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Use'], rows: [
            ['Estimada señora López:', 'start, when you know the name'],
            ['Estimados señores:', 'start, when you do not know the name'],
            ['Le escribo para…', 'say why you are writing'],
            ['Me pongo en contacto con usted para…', 'say why you are writing, more formal'],
            ['Le adjunto mi currículum.', 'say that a document is attached'],
            ['Quedo a la espera de su respuesta.', 'say that you are waiting for an answer'],
            ['Atentamente,', 'end'],
            ['Un cordial saludo,', 'end, a little less formal'],
          ] },
          { t: 'tip', art: 'churro', md: 'In many Latin American countries people say *postularse a un puesto* for "to apply for a job", and in some countries the CV is *la hoja de vida*. *Estimado* and *Atentamente* are used everywhere.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What goes together?', pairs: [
            ['jornada', 'completa'],
            ['contrato', 'indefinido'],
            ['incorporación', 'inmediata'],
            ['carta de', 'presentación'],
            ['enviar la', 'candidatura'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'El ___ es de 1.800 euros al mes.', o: ['sueldo', 'puesto', 'requisito'], why: 'The money you earn: *el sueldo*.' },
            { q: 'Trabajo solo cuatro horas por la mañana: tengo ___.', o: ['media jornada', 'jornada completa', 'incorporación inmediata'], why: 'Only some of the normal hours: *media jornada*.' },
            { q: 'Es un contrato ___: solo para los meses de verano.', o: ['temporal', 'indefinido', 'completo'], why: 'A contract with an end date: *temporal*.' },
            { q: 'Uno de los ___ del puesto es hablar inglés.', o: ['requisitos', 'sueldos', 'currículums'], why: 'What you need to have for the job: *los requisitos*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the formal email with the words.', extra: ['pongo', 'contacto'], items: [
            { q: '___ señora Ruiz:', a: 'Estimada', why: 'A formal email to a woman starts with *Estimada*.' },
            { q: 'Le ___ para solicitar el puesto de recepcionista.', a: 'escribo', why: '*Le escribo para…* says why you are writing.' },
            { q: 'Le ___ mi currículum y mi carta de presentación.', a: 'adjunto', why: '*Le adjunto*: the documents are attached.' },
            { q: 'Quedo a la ___ de su respuesta.', a: 'espera', why: 'The fixed phrase is *quedo a la espera de*.' },
            { q: '___, Javier Ortega', a: 'Atentamente', why: 'A formal email ends with *Atentamente*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A job interview',
      about: 'Answer questions with usted and talk about your experience and strengths.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In a job interview people often use **usted**. *Usted* takes the same verb form as *él* and *ella*, and the possessive *su*. Some companies use *tú*; follow what the interviewer does.' },
          { t: 'table', caption: 'Tú or usted', head: ['tú', 'usted'], rows: [
            ['¿Dónde trabajas?', '¿Dónde trabaja usted?'],
            ['¿Tienes experiencia?', '¿Tiene experiencia?'],
            ['¿Cuál es tu horario?', '¿Cuál es su horario?'],
            ['¿Te interesa el puesto?', '¿Le interesa el puesto?'],
            ['Cuéntame un poco.', 'Cuénteme un poco.'],
          ] },
        ],
        [
          { t: 'table', caption: 'Talking about yourself', explain: ['head', 'col1'], quiz: true, head: ['Spanish', 'Meaning'], rows: [
            ['Llevo tres años trabajando en…', 'I have been working in… for three years'],
            ['Tengo experiencia en atención al cliente.', 'I have experience in customer service.'],
            ['Se me da bien organizar.', 'I am good at organising.'],
            ['Soy una persona responsable y con iniciativa.', 'I am responsible and I have initiative.'],
            ['Mi punto fuerte es…', 'my strength is…'],
            ['Mi punto débil es que…', 'my weakness is that…'],
            ['Estoy disponible a partir de…', 'I can start from…'],
          ] },
          { t: 'dialogue', title: 'La entrevista', lines: [
            { who: 'Carla', s: 'Buenos días, señor Ruiz. Siéntese, por favor. Cuénteme un poco sobre su experiencia.' },
            { who: 'Tomás', s: 'Llevo cuatro años trabajando como recepcionista en un hotel de Málaga. Atiendo a los clientes y gestiono las reservas.' },
            { who: 'Carla', s: '¿Y por qué quiere cambiar de trabajo?' },
            { who: 'Tomás', s: 'Me gustaría trabajar en una empresa más grande y usar mis idiomas. Hablo inglés y alemán.' },
            { who: 'Carla', s: '¿Cuál es su punto fuerte?' },
            { who: 'Tomás', s: 'Soy una persona muy organizada y se me da bien resolver problemas con calma.' },
            { who: 'Carla', s: 'Muy bien. ¿Tiene alguna pregunta para nosotros?' },
            { who: 'Tomás', s: 'Sí. ¿Cuándo empezaría el contrato?' },
            { who: 'Carla', s: 'En principio, el uno de marzo. Le llamaremos la semana que viene.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'The interviewer uses usted. Ask the same question with usted.', items: [
            { q: '¿Cuántos años tienes de experiencia?', a: ['¿Cuántos años tiene de experiencia?', '¿Cuántos años tiene usted de experiencia?', 'Cuántos años tiene de experiencia?', 'Cuántos años tiene usted de experiencia?'], why: '*Usted* takes the *él* form: *tiene*.' },
            { q: '¿Por qué quieres este puesto?', a: ['¿Por qué quiere este puesto?', '¿Por qué quiere usted este puesto?', 'Por qué quiere este puesto?', 'Por qué quiere usted este puesto?'], why: '*Quieres* becomes *quiere*.' },
            { q: '¿Hablas otros idiomas?', a: ['¿Habla otros idiomas?', '¿Habla usted otros idiomas?', 'Habla otros idiomas?', 'Habla usted otros idiomas?'], why: '*Hablas* becomes *habla*.' },
            { q: '¿Cuál es tu punto fuerte?', a: ['¿Cuál es su punto fuerte?', 'Cuál es su punto fuerte?'], why: 'With *usted* the possessive is *su*.' },
            { q: '¿Puedes empezar en marzo?', a: ['¿Puede empezar en marzo?', '¿Puede usted empezar en marzo?', 'Puede empezar en marzo?', 'Puede usted empezar en marzo?'], why: '*Puedes* becomes *puede*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'You are good at organising. You say: «___ organizar.»', o: ['Se me da bien', 'Me doy bien', 'Soy bien'], why: 'The fixed phrase is *se me da bien* + infinitive or noun.' },
            { q: '«___ tres años trabajando en una tienda.»', o: ['Llevo', 'Tengo', 'Hago'], why: '*Llevar* + time + gerundio: how long you have been doing something.' },
            { q: 'Which question uses usted correctly?', o: ['¿Tiene usted carné de conducir?', '¿Tienes usted carné de conducir?', '¿Tiene tú carné de conducir?'], why: '*Usted* + the *él* form: *tiene*.' },
            { q: '«Mi punto ___ es que a veces soy impaciente.»', o: ['débil', 'fuerte', 'bajo'], why: 'Being impatient is a weakness: *punto débil*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Estoy disponible ___ partir del lunes.', a: ['a'], why: 'The fixed phrase is *a partir de*: from.' },
            { q: 'Tengo mucha experiencia ___ atención al cliente.', a: ['en'], why: '*Tener experiencia en* + an area of work.' },
            { q: 'Soy una persona ___ iniciativa: me gusta proponer ideas.', a: ['con'], why: '*Una persona con iniciativa*.' },
            { q: 'Trabajo ___ camarera desde 2021.', a: ['como', 'de'], why: 'Your job goes after *como* or *de*, without an article.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'An advert and a cover letter',
      about: 'Read a job advert and a cover letter, and check the details.',
      art: 'dog',
      spreads: [
        [
          { t: 'reading', title: 'Oferta de empleo: auxiliar administrativo/a', md: 'Una clínica dental del centro de Bilbao busca auxiliar administrativo/a. Incorporación inmediata.\n\nFunciones: atender a los pacientes en la recepción y por teléfono, organizar la agenda de citas y preparar las facturas.\n\nRequisitos: experiencia mínima de un año en un puesto similar, buen nivel de informática, persona organizada y con don de gentes. Se valorará el conocimiento de euskera o de inglés.\n\nOfrecemos: contrato indefinido, jornada completa de lunes a viernes (de 9:00 a 17:00), sueldo según convenio y buen ambiente de trabajo.\n\nLas personas interesadas pueden enviar su currículum y una carta de presentación a empleo@example.com antes del 15 de mayo.' },
        ],
        [
          { t: 'reading', title: 'Carta de presentación', md: 'Estimados señores:\n\nLes escribo para solicitar el puesto de auxiliar administrativa de su oferta de empleo. Les adjunto mi currículum.\n\nLlevo dos años trabajando como recepcionista en una academia de idiomas de Vitoria, donde atiendo a los alumnos, organizo los horarios de las clases y preparo los recibos. Antes había trabajado seis meses en una tienda de ropa, así que estoy acostumbrada a tratar con el público. Se me da bien usar programas de gestión y soy una persona muy organizada.\n\nHablo francés y árabe, y tengo un buen nivel de inglés. No hablo euskera, pero me gustaría aprenderlo. Me interesa mucho este puesto porque quiero trabajar en el sector de la salud y vivir en Bilbao, donde vive mi familia.\n\nEstoy disponible para una entrevista cuando a ustedes les venga bien. Podría incorporarme a partir del 1 de junio.\n\nQuedo a la espera de su respuesta.\n\nAtentamente,\n\nLeila Haddad' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La clínica quiere que la nueva persona empiece pronto.', a: 't', why: 'The advert says *incorporación inmediata*.' },
            { q: 'Para el puesto es necesario hablar euskera.', a: 'f', why: '*Se valorará*: it is a plus, not a requirement.' },
            { q: 'El contrato es solo para unos meses.', a: 'f', why: 'The contract is *indefinido*: permanent.' },
            { q: 'Leila tiene experiencia en un puesto parecido.', a: 't', why: 'She has worked for two years as a receptionist.' },
            { q: 'Leila ya ha trabajado en una clínica.', a: 'f', why: 'She has worked in a language school and a shop; she wants to start in health care.' },
            { q: 'Leila puede empezar a trabajar inmediatamente.', a: 'f', why: 'She can start on 1 June.' },
            { q: 'La familia de Leila trabaja en una clínica.', a: 'ng', why: 'The letter says her family lives in Bilbao, not where they work.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Why does Leila write «Les escribo» and not «Le escribo»?', o: ['She writes to a company, not to one person.', 'She knows the name of the manager.', 'She is writing to a friend.'], why: 'She starts with *Estimados señores*, so she uses *les*.' },
            { q: '«Se valorará el conocimiento de euskera o de inglés» means…', o: ['It is a plus, but it is not required.', 'It is required for the job.', 'It is not useful for the job.'], why: '*Se valorará*: it will count in your favour.' },
            { q: '¿Qué problema puede tener la candidatura de Leila?', o: ['No puede empezar enseguida.', 'No tiene experiencia.', 'No habla ningún idioma extranjero.'], why: 'The clinic wants someone now; Leila can only start in June.' },
            { q: '«Antes había trabajado seis meses en una tienda»: when?', o: ['Before her job at the language school.', 'After her job at the language school.', 'Now, at the same time.'], why: 'The pluscuamperfecto shows the earlier job.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '—¿Le has enviado el contrato a Pedro? —Sí, ya ___ he enviado.', o: ['se lo', 'le lo', 'lo le'], why: '*Le* + *lo* becomes *se lo*.' },
      { q: '—¿Me dejas tus apuntes? —Vale, ___ dejo mañana.', o: ['te los', 'los te', 'te les'], why: 'Indirect first (*te*), then direct (*los*).' },
      { q: 'Trabajo de lunes a viernes, ocho horas al día: tengo ___.', o: ['jornada completa', 'media jornada', 'contrato temporal'], why: 'All the normal hours: *jornada completa*.' },
      { q: 'A formal email to a company you do not know starts with…', o: ['Estimados señores:', 'Querida empresa:', 'Hola a todos:'], why: '*Estimados señores* when you do not know the name.' },
      { q: 'In an interview with usted: «¿Cuál es ___ experiencia?»', o: ['su', 'tu', 'vuestra'], why: 'With *usted* the possessive is *su*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Quedo a la ___ de su respuesta.', a: ['espera'], why: 'The fixed phrase is *quedo a la espera de*.' },
      { q: '___ cinco años trabajando en esta empresa.', a: ['Llevo', 'llevo'], why: '*Llevar* + time + gerundio.' },
      { q: 'Se me da muy ___ trabajar en equipo.', a: ['bien'], why: '*Se me da bien*: I am good at it.' },
      { q: 'Le ___ mi currículum en este correo.', a: ['adjunto', 'envío', 'mando'], why: '*Le adjunto*: the document is attached.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Replace both objects with pronouns.', items: [
      { q: 'Te explico el problema.', a: ['Te lo explico.'], why: '*Te* + *lo*, before the verb.' },
      { q: 'Di las llaves a mis vecinos.', a: ['Se las di.', 'Se las di a mis vecinos.'], why: '*Les* + *las* becomes *se las*.' },
      { q: 'Voy a enseñar la oficina a la nueva compañera.', a: ['Voy a enseñársela.', 'Se la voy a enseñar.', 'Voy a enseñársela a la nueva compañera.', 'Se la voy a enseñar a la nueva compañera.'], why: '*Le* + *la* becomes *se la*, before *voy* or joined to the infinitive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
      { s: 'Señora García, ¿[tienes] coche propio?', a: ['tiene'], why: 'You speak to Señora García with *usted*, so the verb takes the *él* form: *tiene*.' },
      { s: 'Mándame las fotos. Sí, ahora [te los] mando.', a: ['te las'], why: '*Las fotos* is feminine plural: *te las*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Me pongo en contacto con usted para solicitar el puesto.', why: 'A formal way to say why you are writing.' },
    ] },
  ],
};
