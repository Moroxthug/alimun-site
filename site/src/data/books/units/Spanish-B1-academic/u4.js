// Spanish B1 for study and exams, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Writing a clear text',
  goal: 'Write a structured paragraph and short essay.',
  art: 'cat',
  tags: { skills: ['writing', 'reading', 'grammar'], topics: ['paragraph', 'essay', 'connectors', 'opinions'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'A clear paragraph',
      about: 'Build a paragraph with a topic sentence, support and a conclusion.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A clear paragraph (*párrafo*) has three parts. The **topic sentence** (*la idea principal*) gives the main idea. The **supporting sentences** give reasons, examples or details. The **concluding sentence** (*la frase de cierre*) sums up or leads to the next paragraph.' },
          { t: 'reading', title: 'Un párrafo sobre el comedor universitario', md: 'El comedor universitario es un lugar importante para muchos estudiantes. La comida es más barata que en un restaurante y todos los días hay platos vegetarianos. Además, en el comedor te encuentras con tus compañeros y puedes hablar con ellos después de clase. Por eso, el comedor no es solo un sitio para comer, sino también un punto de encuentro.' },
        ],
        [
          { t: 'table', caption: 'The parts of the paragraph', explain: ['head', 'col0'], head: ['Part', 'Sentence'], rows: [
            ['topic sentence', 'El comedor universitario es un lugar importante para muchos estudiantes.'],
            ['support: a reason', 'La comida es más barata que en un restaurante…'],
            ['support: another reason', 'Además, en el comedor te encuentras con tus compañeros…'],
            ['concluding sentence', 'Por eso, el comedor no es solo un sitio para comer, sino también un punto de encuentro.'],
          ] },
          { t: 'examples', items: [
            { s: 'Una gran ventaja de los cursos en línea es la flexibilidad.', n: 'A topic sentence: it names the topic and the main idea.' },
            { s: 'Un ejemplo de esto es el comedor de la facultad.', n: 'A supporting sentence that gives an example.' },
            { s: 'Por estas razones, voy a la universidad en bicicleta.', n: 'A concluding sentence: it refers back to the reasons.' },
            { s: 'En definitiva, los grupos de estudio son muy útiles.', n: 'Another way to sum up a paragraph.' },
          ] },
          { t: 'tip', art: 'churro', md: 'One paragraph, one main idea. When you start a new idea, start a new paragraph. *no solo… sino también* (not only… but also) is a useful pattern for a strong last sentence.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right sentence.', items: [
            { q: '¿Cuál es la mejor idea principal para un párrafo sobre vivir en una residencia de estudiantes?', o: ['Vivir en una residencia de estudiantes tiene muchas ventajas.', 'Mi habitación tiene catorce metros cuadrados.', 'Por eso, el año que viene me mudo.'], why: 'A topic sentence gives the main idea. The size of a room is a detail.' },
            { q: 'Párrafo: «Ir en bici es sano. Haces ejercicio todos los días y estás al aire libre. Además, ahorras dinero». ¿Qué frase de cierre es la mejor?', o: ['Por estas razones, voy a la universidad en bici todos los días.', 'Mi bici es azul.', 'Por ejemplo, el autobús es caro.'], why: '*Por estas razones* refers back to all the reasons: a good conclusion.' },
            { q: '¿Qué frase no corresponde a un párrafo sobre las ventajas de la biblioteca?', o: ['Me encanta cocinar comida italiana.', 'En la biblioteca hay silencio.', 'Allí hay muchos libros de cada asignatura.'], why: 'Cooking has nothing to do with the library. Every sentence must support the main idea.' },
            { q: '¿Cuál es la mejor idea principal para un párrafo sobre los grupos de estudio?', o: ['Estudiar en grupo tiene grandes ventajas para muchos estudiantes.', 'Ayer nuestro grupo estudió hasta las ocho.', 'Después comimos pizza.'], why: 'The first sentence names the topic and the main idea. The others are details of one evening.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the topic sentence.', items: [
            { s: '[Un grupo de estudio ayuda a aprender.] Puedes hacer preguntas y tus compañeros te explican lo que no entiendes. Además, estás más motivado cuando los demás también estudian.', why: 'The topic sentence gives the main idea. The other sentences support it.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the concluding sentence.', items: [
            { s: 'Puedes hacer preguntas y tus compañeros te explican lo que no entiendes. Además, estás más motivado. [Por eso, todos deberíamos buscar un grupo de estudio.]', why: '*Por eso* shows the result of the reasons before it.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the phrases for a paragraph.', items: [
            { q: 'Un ejemplo de ___ es el comedor.', a: ['esto', 'ello', 'eso'], why: '*Un ejemplo de esto es…*: an example of what you said before.' },
            { q: 'Por estas ___, voy en bici. (reasons)', a: ['razones'], why: '*por estas razones*: for these reasons. *razón* has no accent in the plural.' },
            { q: 'El comedor no es solo un sitio para comer, ___ también un punto de encuentro.', a: ['sino'], why: '*no solo… sino también*: not only… but also.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Linking ideas',
      about: 'Connect sentences with además, sin embargo, por eso and aunque.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'These words link two sentences. *Además, sin embargo, por eso* and *por lo tanto* usually start the second sentence and are followed by a **comma**. *Aunque* joins two parts of one sentence.' },
          { t: 'table', caption: 'Linking words', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning', 'Example'], rows: [
            ['además', 'adds another point', 'El piso es luminoso. Además, es barato.'],
            ['por eso', 'gives a result', 'Estaba enfermo. Por eso, no hice el examen.'],
            ['por lo tanto', 'gives a result, more formal', 'Los datos son claros. Por lo tanto, el plan funciona.'],
            ['sin embargo', 'shows a contrast', 'La carrera es interesante. Sin embargo, es difícil.'],
            ['aunque', 'something happens, but you do not expect it', 'Aunque llovía, fue en bici.'],
          ] },
        ],
        [
          { t: 'text', md: 'Compare **porque** (the reason) with **por eso** (the result), and **aunque** (one sentence) with **sin embargo** (two sentences). The meaning is similar; the structure is different. With facts, *aunque* takes the **indicative**.' },
          { t: 'examples', items: [
            { s: 'Estudio mucho **porque** el examen es difícil.', n: '*porque* introduces the reason.' },
            { s: 'El examen es difícil. **Por eso**, estudio mucho.', n: '*Por eso* introduces the result, in a new sentence.' },
            { s: '**Aunque** estoy cansada, voy a clase.', n: '*aunque* + indicative: *estoy*. A fact that does not stop you.' },
            { s: 'Estoy cansada. **Sin embargo**, voy a clase.', n: 'The same idea in two sentences, with *sin embargo*.' },
          ] },
          { t: 'tip', art: 'churro', md: 'In an essay, avoid starting many sentences with *y* or *pero*. *Además* and *sin embargo* make the links clearer. *Por lo tanto* is common in academic texts in Spain and in Latin America.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the linking word.', items: [
            { q: 'La asignatura es muy interesante. ___, la profesora explica muy bien.', o: ['Además', 'Sin embargo', 'Aunque'], why: 'Two good points: *además* adds the second one.' },
            { q: 'No tuve tiempo. ___, no leí el texto.', o: ['Por eso', 'Sin embargo', 'Además'], why: 'No time, so I did not read it: a result, *por eso*.' },
            { q: 'La biblioteca estaba llena. ___, encontré un sitio.', o: ['Sin embargo', 'Por eso', 'Además'], why: 'You do not expect to find a seat in a full library: *sin embargo*.' },
            { q: 'Voy a clase ___ estoy cansada.', o: ['aunque', 'sin embargo', 'por eso'], why: 'One sentence with two parts and an unexpected result: *aunque*.' },
            { q: 'Los cursos en línea son flexibles. ___, a veces falta el contacto con los compañeros.', o: ['Sin embargo', 'Por lo tanto', 'Además'], why: 'A good point, then a problem: a contrast, *sin embargo*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two sentences. Start with the words given.', items: [
            { q: 'Llovía mucho. Fui a la universidad en bici.', cue: 'Aunque', a: ['Aunque llovía mucho, fui a la universidad en bici.'], why: '*Aunque* + the first fact, a comma, then the main sentence.' },
            { q: 'El examen es difícil. Estudio mucho.', cue: 'Estudio mucho porque', a: ['Estudio mucho porque el examen es difícil.'], why: '*porque* introduces the reason: the exam is difficult.' },
            { q: 'Estaba enfermo. No hice el examen.', cue: 'Como', a: ['Como estaba enfermo, no hice el examen.'], why: '*Como* gives the reason at the start of the sentence.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the second sentence. The linking word comes first.', items: [
            { a: 'Por eso, no pude hacer el examen.', why: '*Por eso* + comma + the result.' },
            { a: 'Sin embargo, voy en bici a clase.', why: '*Sin embargo* + comma + the unexpected fact.' },
            { a: 'Además, el alquiler es muy barato.', why: '*Además* + comma + another point.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A model short essay',
      about: 'Read a short essay and see how its parts and linking words work.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'A short essay has an **introduction** (*introducción*), a **main part** (*desarrollo*) and a **conclusion** (*conclusión*). The introduction names the question. The main part gives arguments for and against, each in its own paragraph. The conclusion gives your opinion.' },
          { t: 'tip', art: 'churro', md: 'Useful phrases for your opinion: *En mi opinión…*, *Creo que* + indicative, *No creo que* + subjunctive, *Desde mi punto de vista…*. Give a reason for it.' },
          { t: 'ex', kind: 'crossword', h: 'Words for writing an essay.', words: [
            { a: 'párrafo', clue: 'Una parte de un texto que trata una idea.' },
            { a: 'introducción', clue: 'La primera parte de un texto, donde presentas el tema.' },
            { a: 'conclusión', clue: 'La última parte de un texto, con tu opinión final.' },
            { a: 'argumento', clue: 'Una razón que das para defender una idea.' },
            { a: 'ventaja', clue: 'Lo contrario de una desventaja.' },
            { a: 'opinión', clue: 'Lo que piensas sobre un tema.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Un cuatrimestre en el extranjero: ¿una buena idea para todos?', md: 'Muchos estudiantes sueñan con pasar un cuatrimestre en otro país. Pero ¿es realmente una buena idea para todos? En este texto presento las ventajas y las desventajas.\n\nUn cuatrimestre en el extranjero tiene muchas ventajas. Se aprende un idioma mucho más rápido cuando lo necesitas todos los días. Además, conoces otra cultura y otras formas de estudiar en una universidad diferente. A muchas empresas les interesan estas experiencias. Por eso, un cuatrimestre fuera puede ayudar también en el futuro profesional.\n\nSin embargo, también hay desventajas. Vivir en otro país suele ser caro, por ejemplo, por el viaje y el alquiler. No todos pueden pagarlo, aunque existen becas. A veces, la propia universidad no reconoce las asignaturas cursadas fuera. En ese caso, la carrera dura más.\n\nEn conclusión, creo que un cuatrimestre en el extranjero es una gran oportunidad. Sin embargo, no creo que sea obligatorio para todos. Lo importante es planificarlo bien y hablar a tiempo con la propia universidad.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the essay. True, false or not given?', items: [
            { q: 'En la introducción se presenta la pregunta.', a: 't', why: '*Pero ¿es realmente una buena idea para todos?*' },
            { q: 'El segundo párrafo describe las desventajas.', a: 'f', why: 'The second paragraph describes advantages: *tiene muchas ventajas*.' },
            { q: 'Según el texto, en otro país se aprende un idioma más rápido.', a: 't', why: '*Se aprende un idioma mucho más rápido cuando lo necesitas todos los días.*' },
            { q: 'No hay becas para estudiar en el extranjero.', a: 'f', why: '*aunque existen becas*: there are grants.' },
            { q: 'La mayoría de los estudiantes pasa un cuatrimestre fuera.', a: 'ng', why: 'The text says many students dream of it, but not how many go.' },
            { q: 'La persona que escribe el texto estudió en el extranjero.', a: 'ng', why: 'The essay does not say this.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Answer the questions about the essay.', items: [
            { q: '¿Cuál es la opinión de la conclusión?', o: ['Es una gran oportunidad, pero no una obligación.', 'Todos los estudiantes tienen que ir al extranjero.', 'Es demasiado caro y no tiene sentido.'], why: '*una gran oportunidad* and *no creo que sea obligatorio para todos*.' },
            { q: '¿Cuál es la idea principal del tercer párrafo?', o: ['Sin embargo, también hay desventajas.', 'En ese caso, la carrera dura más.', 'No todos pueden pagarlo, aunque existen becas.'], why: 'The first sentence gives the main idea of the paragraph: the disadvantages.' },
            { q: '¿Qué significa «la universidad no reconoce las asignaturas»?', o: ['La universidad no acepta oficialmente las asignaturas.', 'La universidad no recuerda las asignaturas.', 'Las asignaturas son gratis.'], why: '*reconocer* here means to accept officially, so the subject does not count.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the linking words.', items: [
            { s: 'Se aprende un idioma más rápido. [Además], conoces otra cultura. [Por eso], puede ayudar en el futuro profesional.', why: '*Además* adds a point, *Por eso* gives a result.' },
            { s: 'No todos pueden pagarlo, [aunque] existen becas.', why: '*aunque* links the two parts of the sentence.' },
            { s: 'Es una gran oportunidad. [Sin embargo], no creo que sea obligatorio para todos.', why: '*Sin embargo* shows a contrast with the sentence before.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Estaba enfermo. ___, no pude ir a clase.', o: ['Por eso', 'Aunque', 'Sin embargo'], why: 'A result: *por eso*.' },
      { q: 'El alquiler es caro. ___, me gusta vivir aquí.', o: ['Sin embargo', 'Por eso', 'Porque'], why: 'High rent, but I like living here: a contrast, *sin embargo*.' },
      { q: '¿Qué frase es una buena idea principal?', o: ['Hay varias razones para viajar en tren.', 'Y luego estaba en el tren.', 'Por eso voy en tren.'], why: 'It names the topic and the main idea of the paragraph.' },
      { q: 'Al final de un párrafo hay a menudo una frase de ___.', o: ['cierre', 'saludo', 'asunto'], why: 'The *frase de cierre* sums up the paragraph.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'La habitación es grande. ___, tiene un balcón. (another point)', a: ['Además', 'Ademas'], why: '*Además* adds another point.' },
      { q: 'Voy a clase ___ estoy enferma. (although)', a: ['aunque'], why: '*aunque* + indicative: an unexpected result.' },
      { q: 'Un ejemplo de ___ es el comedor.', a: ['esto', 'ello', 'eso'], why: '*Un ejemplo de esto es…*' },
      { q: 'No creo que ___ obligatorio. (ser)', a: ['sea'], why: '*No creo que* + subjunctive: *sea*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Aunque estudié mucho, no aprobé el examen.', why: '*Aunque* + the first fact, a comma, then the main sentence.' },
      { a: 'Por lo tanto, el plan funciona bien.', why: '*Por lo tanto* + comma + the result.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the two sentences.', pairs: [
      ['Estaba muy cansado.', 'Por eso, me acosté pronto.'],
      ['El curso es caro.', 'Sin embargo, se apunta mucha gente.'],
      ['La habitación es luminosa.', 'Además, tiene un balcón.'],
      ['Primero leo el texto.', 'Después escribo el resumen.'],
    ] },
  ],
};
