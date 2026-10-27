// Spanish C2, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Rhetoric and persuasion',
  goal: 'Understand how speeches persuade and use the devices yourself. Learn the three appeals, the devices of the speech (anáfora, antítesis, quiasmo, gradación), and how to read framing and loaded language critically.',
  art: 'parrot',
  tags: { skills: ['reading', 'listening', 'writing'], topics: ['ethos', 'pathos', 'logos', 'anáfora', 'antítesis', 'quiasmo', 'gradación', 'framing', 'bias'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Ethos, pathos, logos',
      about: 'Recognise the three appeals a speaker uses to persuade.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'More than two thousand years ago, teachers of rhetoric in ancient Greece described three ways to persuade. They are still the basis of the art of speaking. **El ethos** is the appeal to **character and credibility**: *Como enfermera desde hace veinte años, veo este problema todos los días.* **El pathos** is the appeal to **emotion**: *Imaginen a un niño solo ante la puerta cerrada de la biblioteca.* **El logos** is the appeal to **logic and evidence**: *Las bibliotecas cuestan al municipio menos del uno por ciento de su presupuesto y, sin embargo, atienden a un tercio de sus vecinos.* A strong speech uses all three.' },
          { t: 'table', caption: 'The three appeals', explain: ['head', 'col0'], head: ['Appeal', 'Aim', 'Example'], rows: [
            ['ethos', 'make the audience trust the speaker', 'Como enfermera, veo este problema todos los días.'],
            ['pathos', 'make the audience feel', 'Imaginen a un niño solo ante la puerta cerrada.'],
            ['logos', 'convince with reason and facts', 'Las bibliotecas cuestan menos del uno por ciento del presupuesto.'],
          ] },
        ],
        [
          { t: 'text', md: 'Each appeal can be misused. **Ethos** without substance becomes **name-dropping** (*Conozco personalmente al ministro*). **Pathos** alone can become manipulation: a moving story that proves nothing. **Logos** that is too heavy may bore an audience. A skilled speaker opens with ethos (*por qué deberían escucharme*), builds a picture with pathos, then gives the facts with logos, and often returns to pathos at the end.' },
          { t: 'tip', art: 'owl', md: 'When you read a speech, mark each sentence with *E*, *P* or *L*. If most sentences are *P*, the speaker may rely on feeling more than proof. If most are *L*, the speech may be accurate but dry. The best speeches mix the three.' },
          { t: 'ex', kind: 'sort', h: 'Which appeal is it?', groups: ['ethos', 'pathos', 'logos'], explain: ['groups'], items: [
            { s: 'Como maestra desde hace treinta años, sé lo que necesitan los niños.', g: 0, why: 'Credibility: the speaker’s experience.' },
            { s: 'Vean el aula vacía, el patio en silencio.', g: 1, why: 'Emotion: a vivid picture.' },
            { s: 'Los resultados han mejorado un doce por ciento desde el inicio del programa.', g: 2, why: 'Logic: a fact.' },
            { s: 'Vivo en esta calle desde siempre.', g: 0, why: 'Credibility.' },
            { s: 'Piensen en la madre que no puede comprar ni un solo libro.', g: 1, why: 'Emotion.' },
            { s: 'Cerrar la biblioteca costará a la ciudad más de lo que ahorra.', g: 2, why: 'Logic: cause and effect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which appeal does the speaker mainly use?', items: [
            { q: '«Llevo veinte años trabajando en este hospital.»', o: ['ethos', 'pathos', 'logos'], why: 'Credibility.' },
            { q: '«Imaginen perder su casa en una sola noche.»', o: ['pathos', 'ethos', 'logos'], why: 'Emotion.' },
            { q: '«Los estudios muestran que el sueño mejora los resultados un quince por ciento.»', o: ['logos', 'pathos', 'ethos'], why: 'Evidence.' },
            { q: '«Como vecino y padre, comparto su preocupación.»', o: ['ethos', 'logos', 'pathos'], why: 'Building trust through a shared position.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the appeal with its aim.', pairs: [
            ['ethos', 'make the audience trust the speaker'],
            ['pathos', 'make the audience feel'],
            ['logos', 'convince with reason and facts'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Anáfora, antítesis, quiasmo',
      about: 'Recognise and use the devices that give speeches rhythm and force.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Speakers use **devices** that make words easy to remember. **La anáfora** repeats the same words at the start of successive sentences: *No esperaremos. No callaremos. No nos rendiremos.* **La antítesis** sets two opposite ideas side by side: *Elegimos la esperanza antes que el miedo.* **La gradación** lists items of increasing strength: *una palabra, una frase, un grito.* **El quiasmo** reverses the order of two phrases: *Se trabaja para vivir, no se vive para trabajar.* **La pregunta retórica** needs no answer: *Si no somos nosotros, ¿quién?*' },
          { t: 'table', caption: 'Devices of the speech', explain: ['head', 'col0'], head: ['Device', 'What it does', 'Example'], rows: [
            ['anáfora', 'repeats the opening words', 'No esperaremos. No callaremos.'],
            ['antítesis', 'sets opposites side by side', 'La esperanza antes que el miedo.'],
            ['gradación', 'lists in rising strength', 'una palabra, una frase, un grito'],
            ['quiasmo', 'reverses the order', 'Se trabaja para vivir, no se vive para trabajar.'],
            ['pregunta retórica', 'asks without needing an answer', 'Si no somos nosotros, ¿quién?'],
          ] },
        ],
        [
          { t: 'text', md: 'A **metáfora continuada** (extended metaphor) carries one image through a whole speech: a speaker might compare a town to a ship and speak of *capear el temporal*, *una tripulación unida* and *un puerto seguro*. It gives unity and colour. Do not mix images: a speaker who says *Hay que gobernar este barco a través del fuego* mixes two metaphors, and the audience may smile in the wrong place.' },
          { t: 'tip', art: 'owl', md: 'To use these devices, **keep them short and rhythmic**. Anaphora works best with **three** repetitions. In your own speech, choose **one** main device and repeat it, instead of using five different ones in a paragraph.' },
          { t: 'ex', kind: 'match', h: 'Match the device with its example.', pairs: [
            ['anáfora', 'No esperaremos. No callaremos.'],
            ['antítesis', 'La esperanza antes que el miedo.'],
            ['quiasmo', 'Se trabaja para vivir, no se vive para trabajar.'],
            ['gradación', 'una palabra, una frase, un grito'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which device is used?', items: [
            { q: '«Construiremos casas. Construiremos escuelas. Construiremos esperanza.»', o: ['anáfora', 'quiasmo', 'antítesis'], why: 'The same words open each sentence.' },
            { q: '«No palabras, sino hechos.»', o: ['antítesis', 'gradación', 'anáfora'], why: 'Two opposite ideas side by side.' },
            { q: '«Se come para vivir; no se vive para comer.»', o: ['quiasmo', 'anáfora', 'gradación'], why: 'The order of the two phrases is reversed.' },
            { q: '«Si no es ahora, ¿cuándo?»', o: ['pregunta retórica', 'gradación', 'quiasmo'], why: 'A question that needs no answer.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite with the device given.', items: [
            { q: 'No nos rendiremos, no nos iremos en silencio y no olvidaremos.', cue: 'No nos rendiremos. No', a: ['No nos rendiremos. No nos iremos en silencio. No olvidaremos.'], why: 'Anaphora: three sentences with the same opening.' },
            { q: 'Una ciudad segura y justa y libre.', cue: 'Una ciudad segura,', a: ['Una ciudad segura, justa y libre.'], why: 'A list of three.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which device?', groups: ['anáfora', 'antítesis'], explain: ['groups'], items: [
            { s: 'Escucharemos. Aprenderemos. Actuaremos.', g: 0, why: 'The same pattern opens each sentence.' },
            { s: 'No el tiempo, sino la voluntad.', g: 1, why: 'Two opposite ideas.' },
            { s: 'Estamos aquí por los débiles. Estamos aquí por los pobres. Estamos aquí por ustedes.', g: 0, why: 'The same words open each sentence.' },
            { s: 'Pasos pequeños, saltos gigantes.', g: 1, why: 'Contrast of small and great.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mixed metaphor.', items: [
            { s: 'Hay que gobernar este barco a través del [fuego] del temporal económico.', a: ['temporal', 'oleaje', 'arrecifes'], why: 'A ship needs a sea image: *temporal*, *oleaje* or *arrecifes*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Encuadre y palabras cargadas',
      about: 'Read critically and notice how the same event can be presented in two ways.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: '**Framing** (*el encuadre*) means presenting the same facts in a way that guides the reader’s view. *La ciudad ha recortado sus gastos un cinco por ciento* and *La ciudad ha conservado el noventa y cinco por ciento de sus servicios* are both true, but they feel different. **Loaded words** (*las palabras cargadas*) have a strong positive or negative connotation: *un reajuste de plantilla* against *despidos*; *manifestantes* against *alborotadores*; *una reforma* against *un recorte*. **The passive** can hide who is responsible: *Se cometieron errores* does not say by whom.' },
          { t: 'table', caption: 'How framing works', explain: ['head', 'col0'], head: ['Technique', 'Example', 'Effect'], rows: [
            ['selection of facts', 'Gastos recortados un 5 % / 95 % de los servicios conservados', 'a different feeling about the same facts'],
            ['loaded words', 'reajuste de plantilla / despidos', 'softer or harsher colour'],
            ['passive to hide the doer', 'Se cometieron errores.', 'no responsibility is named'],
            ['headline size', 'A small story in a large headline', 'makes it seem important'],
          ] },
        ],
        [
          { t: 'text', md: 'A critical reader asks four questions of any text: **¿Quién habla?** **¿Qué se dice y qué se omite?** **¿Qué palabras llevan un juicio?** **¿A quién beneficia esta versión?** This is not cynicism; it is the basis of reading news, advertising and political speeches in any language. It also helps your own writing: if you know how framing works, you can choose to be fair.' },
          { t: 'tip', art: 'owl', md: 'In an exam, if you are asked to compare two reports of the same event, list the **loaded words** in each, say **what each leaves out**, and give the **effect**. Support each point with a short quotation.' },
          { t: 'ex', kind: 'sort', h: 'Does the word sound positive, or negative?', groups: ['positive', 'negative'], explain: ['groups'], items: [
            { s: 'un expediente de regulación de empleo', g: 0, why: 'A technical phrase that softens job losses.' },
            { s: 'un régimen', g: 1, why: 'More negative than *un gobierno*.' },
            { s: 'una multitud decidida', g: 0, why: 'A positive description of protesters.' },
            { s: 'una turba', g: 1, why: 'Negative: suggests violence.' },
            { s: 'un consejo ahorrador', g: 0, why: 'Approving: careful with money.' },
            { s: 'un consejo tacaño', g: 1, why: 'Disapproving.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which version is the most neutral?', items: [
            { q: '', o: ['El consejo ha reducido el presupuesto un cinco por ciento.', 'El consejo ha recortado a machetazos el presupuesto.', 'El consejo ha protegido el presupuesto.'], why: 'The first states a fact without loaded words.' },
            { q: '', o: ['Miles de personas participaron en la marcha.', 'Una turba invadió las calles.', 'Una multitud heroica llenó las calles.'], why: 'The first is neutral.' },
            { q: '', o: ['La empresa ha despedido a 200 empleados.', 'La empresa ha optimizado su plantilla.', 'La empresa ha tirado brutalmente a la calle a 200 empleados.'], why: 'The first names the action plainly.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make the sentence name who is responsible.', items: [
            { q: 'Se cometieron errores en la planificación.', cue: 'Los organizadores', a: ['Los organizadores cometieron errores en la planificación.', 'Los organizadores cometieron errores.'], why: 'The active voice names the doer.' },
            { q: 'Se decidió cerrar la biblioteca.', cue: 'El consejo', a: ['El consejo decidió cerrar la biblioteca.'], why: 'The active voice names the doer.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un discurso para el parque',
      about: 'Read a speech and a commentary on how it persuades.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Un discurso para el parque', md: 'DISCURSO\n\nAmigos, vecinos, concejales. Llevo cuarenta años viviendo junto a este parque. Aquí aprendí a montar en bicicleta; mis hijos aprendieron a nadar en su estanque; mi nieto dará sus primeros pasos sobre su césped. No soy una experta. Soy una vecina, y he venido a hablar por él.\n\nImaginen este parque sin sus árboles. Imaginen el estanque cegado, los bancos desaparecidos, la zona de juegos vallada. Imaginen a su nieto preguntando adónde se fue el verde, e imaginen no tener respuesta.\n\nEl ayuntamiento dice que necesita el terreno para viviendas. Las cifras dicen otra cosa: la ciudad posee cuarenta edificios vacíos, y el parque ofrece aire limpio, sombra y un lugar de encuentro para tres mil personas por semana. No pedimos que el ayuntamiento elija entre viviendas y árboles. Pedimos que elija ambas cosas.\n\nNo callaremos. No retrocederemos. No seremos olvidados. Si no somos nosotros, ¿quién? Si no es ahora, ¿cuándo?\n\nCOMENTARIO\n\nLa oradora abre con el ethos, con cuarenta años de recuerdos en lugar de pericia. El segundo párrafo es puro pathos: tres pérdidas imaginadas. El logos llega en el tercero, con cifras precisas. El cierre combina anáfora, gradación y dos preguntas retóricas.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La oradora afirma ser una experta en parques.', a: 'f', why: '«No soy una experta. Soy una vecina.»' },
            { q: 'El ayuntamiento dice que necesita el terreno para viviendas.', a: 't', why: '«Necesita el terreno para viviendas.»' },
            { q: 'La ciudad posee cuarenta edificios vacíos.', a: 't', why: '«La ciudad posee cuarenta edificios vacíos.»' },
            { q: 'La oradora quiere enfrentar viviendas y árboles.', a: 'f', why: '«No pedimos que el ayuntamiento elija entre viviendas y árboles.»' },
            { q: 'El comentario dice que el tercer párrafo apela sobre todo a la emoción.', a: 'f', why: '«El logos llega en el tercero.»' },
            { q: 'El nieto de la oradora ya vive en la ciudad.', a: 'ng', why: 'The text says only that he will take his first steps there.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does the opening about forty years show?', o: ['Ethos: the speaker’s credibility and attachment.', 'Logos: a statistic.', 'Antithesis: two opposites.'], why: 'Credibility through experience.' },
            { q: 'What is the device in «No callaremos. No retrocederemos. No seremos olvidados.»?', o: ['Anaphora', 'Chiasmus', 'Extended metaphor'], why: 'The same opening, repeated.' },
            { q: 'What is the function of «Imaginen… Imaginen… Imaginen…»?', o: ['Pathos through repetition.', 'Logos through evidence.', 'Ethos through experience.'], why: 'Emotion with anaphora.' },
            { q: 'Why does the speaker mention the forty empty buildings?', o: ['As logical evidence against the council’s plan.', 'To appeal to the council’s feelings.', 'To show the speaker’s authority.'], why: 'A fact: logos.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the rhetorical questions and the repeated openings.', items: [
            { s: '[Si no somos nosotros, ¿quién?] [Si no es ahora, ¿cuándo?]', why: 'Two rhetorical questions.' },
            { s: '[No callaremos. No retrocederemos. No seremos olvidados.]', why: 'Anaphora.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'No soy una experta. Soy una ___, y he venido a hablar por él.', a: ['vecina'], why: 'The speaker’s role.' },
            { q: 'Pedimos que elija ___ cosas.', a: ['ambas'], why: 'The speaker’s request.' },
            { q: 'El parque ofrece un lugar de encuentro para tres mil ___ por semana.', a: ['personas'], why: 'The speaker’s fact.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'No pedimos que el ayuntamiento elija entre viviendas y árboles.', why: 'A sentence from the speech.' },
            { a: 'El logos llega en el tercer párrafo, con cifras precisas.', why: 'A sentence from the commentary.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: '«Llevo treinta años enseñando.» This is mainly…', o: ['ethos', 'pathos', 'logos'], why: 'Credibility.' },
      { q: '«Se trabaja para vivir, no se vive para trabajar.» This is…', o: ['quiasmo', 'anáfora', 'gradación'], why: 'The order is reversed.' },
      { q: '«Construiremos. Creceremos. Venceremos.» Which device is this?', o: ['anáfora', 'antítesis', 'quiasmo'], why: 'The same pattern opens each sentence.' },
      { q: 'Which phrase is the most neutral?', o: ['La empresa ha despedido a 200 empleados.', 'La empresa ha optimizado su plantilla.', 'La empresa ha tirado brutalmente a la calle a 200 empleados.'], why: 'No loaded words.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the appeal with its aim.', pairs: [
      ['ethos', 'make the audience trust the speaker'],
      ['pathos', 'make the audience feel'],
      ['logos', 'convince with reason and facts'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Si no somos nosotros, ¿quién? Es una pregunta ___.', a: ['retórica'], why: 'A question that needs no answer.' },
      { q: '«Se cometieron errores» usa la ___ para ocultar quién es responsable.', a: ['pasiva'], why: 'The passive hides the doer.' },
      { q: 'Elegimos la esperanza antes que el miedo: es una ___.', a: ['antítesis'], why: 'Two opposite ideas.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
      { q: 'Se cometieron errores en la planificación.', cue: 'Los organizadores', a: ['Los organizadores cometieron errores en la planificación.', 'Los organizadores cometieron errores.'], why: 'The active voice names the doer.' },
      { q: 'Una ciudad segura y justa y libre.', cue: 'Una ciudad segura,', a: ['Una ciudad segura, justa y libre.'], why: 'A list of three.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Hay que gobernar este barco a través del [fuego] del temporal.', a: ['temporal', 'oleaje', 'arrecifes'], why: 'A ship needs a sea image.' },
      { s: 'Como enfermera desde hace veinte años, uso el [logos] para parecer creíble.', a: ['ethos'], why: 'Credibility is ethos.' },
    ] },
  ],
};
