// Spanish C2, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Literature and criticism',
  goal: 'Read literary Spanish closely and write about it. Learn figurative language, narrative voice and tone, and how to write a comentario de texto with a structure, short quotations and explained effects.',
  art: 'owl',
  tags: { skills: ['reading', 'writing', 'vocabulary'], topics: ['metáfora', 'símil', 'personificación', 'símbolo', 'narrative voice', 'tone', 'comentario de texto'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Metáfora, símil, símbolo',
      about: 'Identify figurative language and explain what it does for the reader.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Literary writers use **figurative language**, words that mean more than their literal sense. **La metáfora** says that one thing *is* another, without a comparing word: *La ciudad era un horno.* **El símil** uses *como* or *tal*: *La ciudad era como un horno.* **La personificación** gives human qualities to a non-human thing: *El viento susurraba entre los árboles.* **El símbolo** is an object or image that stands for a larger idea: *una puerta cerrada con llave* may stand for a closed future. **Las imágenes** appeal to the senses: *el olor agrio de la lluvia vieja*.' },
          { t: 'table', caption: 'Figurative language', explain: ['head', 'col0'], head: ['Device', 'What it does', 'Example'], rows: [
            ['metáfora', 'says one thing is another', 'La ciudad era un horno.'],
            ['símil', 'compares with como', 'La ciudad era como un horno.'],
            ['personificación', 'gives human qualities to things', 'El viento susurraba entre los árboles.'],
            ['símbolo', 'stands for a larger idea', 'una puerta cerrada con llave para un futuro cerrado'],
            ['imagen sensorial', 'appeals to the senses', 'el olor agrio de la lluvia vieja'],
          ] },
        ],
        [
          { t: 'text', md: 'Naming a device is only the first step. The skill is to explain its **effect**: what does it make the reader see, feel or think? *La ciudad era un horno* suggests not only heat but also pressure and exhaustion. Always ask: **¿por qué esta imagen y no otra?** A weak comment says *El autor usa una metáfora*. A strong one says *La metáfora del horno presenta la ciudad como un lugar que consume a la gente*.' },
          { t: 'tip', art: 'owl', md: 'Use verbs of effect: *sugerir, evocar, transmitir, reforzar, subrayar, crear una sensación de*. Avoid *mostrar* on its own. Say what the image suggests **to the reader**: *El símil evoca soledad*.' },
          { t: 'ex', kind: 'sort', h: 'Which device?', groups: ['metáfora', 'símil', 'personificación'], explain: ['groups'], items: [
            { s: 'La clase era un zoo.', g: 0, why: 'One thing is another: no comparing word.' },
            { s: 'Su voz era fría como el hielo.', g: 1, why: 'A comparison with *como*.' },
            { s: 'El sol sonreía sobre el pueblo.', g: 2, why: 'A human quality given to the sun.' },
            { s: 'El tiempo es un ladrón.', g: 0, why: 'A metaphor.' },
            { s: 'Corría como el viento.', g: 1, why: 'A comparison with *como*.' },
            { s: 'La vieja casa gemía en la noche.', g: 2, why: 'The house is given a human sound.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What is the effect?', items: [
            { q: '«La ciudad era un horno.» This metaphor suggests…', o: ['heat and exhaustion', 'a place for baking bread', 'a quiet town'], why: 'It conveys oppressive heat and pressure.' },
            { q: '«La vieja casa gemía en la noche.» This personification creates…', o: ['a sense of age and unease', 'a sense of comfort', 'a sense of speed'], why: 'The house sounds like a person in discomfort.' },
            { q: 'A locked door in a novel about a young person may symbolise…', o: ['a closed future', 'a broken lock', 'a new house'], why: 'A symbol stands for a larger idea.' },
            { q: '«Estaba sola, como una farola al amanecer.» The simile suggests…', o: ['loneliness and being forgotten', 'brightness', 'noise'], why: 'A street lamp at dawn has lost its purpose.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the device with its definition.', pairs: [
            ['metáfora', 'says one thing is another'],
            ['símil', 'compares with como'],
            ['personificación', 'gives human qualities to things'],
            ['imagen sensorial', 'language that appeals to the senses'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Turn the simile into a metaphor.', items: [
            { q: 'Su voz era fría como el hielo.', cue: 'Su voz', a: ['Su voz era hielo.'], why: 'Remove *fría como*: the metaphor says it *is* ice.' },
            { q: 'La clase era como un zoo.', cue: 'La clase', a: ['La clase era un zoo.'], why: 'Remove *como*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'El viento susurraba entre los árboles: es una ___.', a: ['personificación'], why: 'A human quality given to the wind.' },
            { q: 'Un ___ representa una idea más amplia, como una puerta cerrada para un futuro cerrado.', a: ['símbolo'], why: 'The definition of a symbol.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Voz y tono',
      about: 'Describe who is telling the story, how reliable they are and what tone they take.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Every story has a **narrador**. In the **primera persona**, the narrator is a character: *Abrí la puerta.* The reader sees only what the narrator sees. In the **tercera persona**, the narrator stands outside: *Ella abrió la puerta.* A **narrador limitado** shows one character’s thoughts; a **narrador omnisciente** knows everything. A narrator is **poco fiable** (unreliable) when the reader has reason to doubt them, because they lie, forget, or do not understand what they see.' },
          { t: 'table', caption: 'Narrative voice', explain: ['head', 'col0'], head: ['Type', 'What the reader gets', 'Example'], rows: [
            ['primera persona', 'one character’s view', 'Abrí la puerta.'],
            ['tercera persona limitada', 'one character’s thoughts', 'Ella abrió la puerta, temiendo lo que encontraría.'],
            ['narrador omnisciente', 'many characters’ thoughts', 'Ella abrió la puerta; él, arriba, contuvo la respiración.'],
            ['narrador poco fiable', 'a view that cannot be trusted', 'Nunca he mentido, se lo aseguro, salvo una o dos veces.'],
          ] },
        ],
        [
          { t: 'text', md: '**El tono** is the writer’s or narrator’s attitude to the subject: *serio, irónico, nostálgico, amargo, juguetón, distante*. It comes from word choice, rhythm and detail. **El registro** is the level of formality. A narrator who calls a funeral *una ceremonia bastante sosa* uses an ironic, detached tone; one who says *el día en que la enterramos* sounds nostalgic and serious. Support any claim about tone with **evidence from the text**.' },
          { t: 'tip', art: 'owl', md: 'When you comment on tone, avoid vague words (*bien, mal, interesante*). Use precise ones: *irónico, resignado, tierno, sarcástico, solemne*. And always link the tone to a **word or phrase**: *El tono es irónico: «bastante sosa» trata un entierro como una recepción.*' },
          { t: 'ex', kind: 'sort', h: 'First or third person?', groups: ['first person', 'third person'], explain: ['groups'], items: [
            { s: 'Aquella noche no pude dormir.', g: 0, why: 'The narrator is a character: *pude*.' },
            { s: 'Aquella noche ella no pudo dormir.', g: 1, why: 'The narrator stands outside: *ella pudo*.' },
            { s: 'Volvimos a casa en silencio.', g: 0, why: 'First person plural.' },
            { s: 'Volvieron a casa en silencio.', g: 1, why: 'Third person.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What is the tone?', items: [
            { q: '«Fue, supongo, una ceremonia bastante sosa, el entierro: cuarenta personas y los bocadillos estaban duros.»', o: ['ironic and detached', 'tender and grieving', 'angry and bitter'], why: 'The understatement and flat details suggest an ironic tone.' },
            { q: '«Recuerdo la luz de verano sobre sus manos cuando pelaba manzanas, y el olor a canela en la cocina.»', o: ['nostalgic and tender', 'ironic and cold', 'angry and sharp'], why: 'Sensory memories suggest a nostalgic tone.' },
            { q: '«En esta ciudad nunca cambia nada, y a nadie le apetece lo más mínimo que cambie.»', o: ['bitter and resigned', 'excited and hopeful', 'playful and light'], why: 'A negative generalisation with a tired attitude.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['irónico', 'saying one thing and meaning another'],
            ['nostálgico', 'looking back fondly'],
            ['distante', 'not emotionally involved'],
            ['omnisciente', 'knowing everything'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite from the first person into the third person.', items: [
            { q: 'Abrí la puerta y tuve miedo de lo que encontraría.', cue: 'Ella abrió la puerta', a: ['Ella abrió la puerta y tuvo miedo de lo que encontraría.'], why: 'Change the person and keep the tenses consistent.' },
            { q: 'Volvimos a casa en silencio.', cue: 'Volvieron', a: ['Volvieron a casa en silencio.'], why: 'First person plural becomes third person plural.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'Un narrador que conoce los pensamientos de todos los personajes es ___.', a: ['omnisciente'], why: 'The definition.' },
            { q: 'Un narrador en quien el lector no puede confiar es ___. (poco fiable)', a: ['poco fiable'], why: 'The definition.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'El comentario de texto: idea, cita, explicación',
      about: 'Write a comentario paragraph that makes a point, quotes briefly and explains the effect.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A **comentario de texto** follows a structure: an **introducción** (the text, its context and the question), a **desarrollo** (several parts of the argument) and a **conclusión**. Each paragraph in the desarrollo makes an **idea** (a point), gives a **cita** (a short quotation) and **explains the effect** (*explicación*). Example: *El autor presenta la casa como hostil **(idea)**: «gemía en la noche» **(cita)**, una personificación que da al edificio un sufrimiento humano y crea inquietud **(explicación)**.*' },
          { t: 'table', caption: 'Idea, cita, explicación', explain: ['head', 'col0'], head: ['Part', 'What it does', 'Useful language'], rows: [
            ['idea', 'answers the question in your own words', 'El autor presenta… / El narrador parece…'],
            ['cita', 'a short, embedded quotation', 'ella «gemía», lo que… / la expresión «…» sugiere…'],
            ['explicación', 'explains the effect', 'Esto sugiere / evoca / refuerza / crea una sensación de…'],
          ] },
        ],
        [
          { t: 'text', md: 'Keep quotations **short**: a word or a phrase is better than a whole sentence. **Embed** them in your own sentence: *La casa «gemía», lo que le da un sufrimiento humano.* Then explain the **effect on the reader**. If possible, link to the writer’s wider purpose: *Esto refuerza la idea de que la familia está atrapada.* In a Spanish comentario, use the **present tense** for what the text does and **avoid saying “yo”**.' },
          { t: 'tip', art: 'owl', md: 'Do not just **retell** the story («Luego la chica abre la puerta»). A comentario is about **how** the writer creates meaning, not **what** happens. Use the present tense: *El autor usa…*, not *usó*. And do not paraphrase a quotation without commenting on it.' },
          { t: 'ex', kind: 'sort', h: 'Which part is it?', groups: ['idea', 'cita', 'explicación'], explain: ['groups'], items: [
            { s: 'El autor presenta la casa como hostil.', g: 0, why: 'A point in your own words.' },
            { s: 'ella «gemía en la noche»', g: 1, why: 'A short quotation.' },
            { s: 'Esta personificación da al edificio un sufrimiento humano y crea inquietud.', g: 2, why: 'It explains the effect.' },
            { s: 'El narrador parece nostálgico.', g: 0, why: 'A point.' },
            { s: 'la «luz de verano sobre sus manos»', g: 1, why: 'A short quotation.' },
            { s: 'Esta imagen sensorial evoca ternura y pérdida.', g: 2, why: 'It explains the effect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which is the best sentence for a comentario?', items: [
            { q: '', o: ['El autor da vida a la casa al decir que «gemía», lo que crea inquietud.', 'La casa gemía y luego ella subió.', 'El autor usa muchas palabras interesantes.'], why: 'It has a point, a quotation and an explanation.' },
            { q: '', o: ['El símil «fría como el hielo» sugiere la distancia afectiva del hablante.', 'El hablante dice «fría como el hielo», y me parece bien.', 'El hielo es frío y el hablante también.'], why: 'It names the device, quotes briefly and explains the effect.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite as a comentario sentence, using the words given.', items: [
            { q: 'El autor dice que el viento «susurraba», es una personificación y la escena es tranquila.', cue: 'La personificación del viento', a: ['La personificación del viento que «susurraba» vuelve tranquila la escena.', 'La personificación del viento que susurra vuelve tranquila la escena.'], why: 'Embed the quotation and explain the effect.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the tense problem.', items: [
            { s: 'El autor [usó] una metáfora para mostrar que la ciudad es calurosa.', a: ['usa'], why: 'Use the present tense for what the text does.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'El huerto',
      about: 'Read a short story extract and a critical note on it.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'El huerto', md: 'RELATO\n\nEl huerto de mi madre era un lugar callado, de ese silencio que espera. En otoño las manzanas caían como pequeñas monedas rojas sobre la hierba, y yo caminaba entre ellas contándolas, como si algún día fuera a ser rica. La vieja verja gemía cada vez que la empujaba, como si supiera lo que iba a hacer.\n\nNo soy, diga lo que diga mi hermano, una persona descuidada. Solo quería ver el huerto una vez más antes de la venta. El hombre de la agencia había sonreído como si me hiciera un favor.\n\nAl fondo, el árbol más viejo se inclinaba sobre el muro, una anciana que busca algo que se le ha caído. Puse la mano sobre la corteza. Estaba caliente, lo cual no tenía sentido, porque hacía rato que el sol se había puesto. Estuve allí, creo, una hora. O una eternidad. Es difícil decirlo.\n\nNOTA CRÍTICA\n\nEl tono sereno de la narradora queda minado por pequeños signos de inquietud. El símil de las manzanas «como pequeñas monedas rojas» sugiere el deseo de seguridad de la narradora, mientras que la personificación de la verja que «gemía… como si supiera» deja entrever una culpa. La frase «No soy, diga lo que diga mi hermano, una persona descuidada» sugiere una narradora poco fiable: la negación defensiva invita al lector a dudar. El final incierto («una hora. O una eternidad») deja al lector sin saber qué ha ocurrido realmente.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La narradora quería ver el huerto antes de la venta.', a: 't', why: '«Solo quería ver el huerto una vez más antes de la venta.»' },
            { q: 'Su hermano la considera descuidada.', a: 't', why: '«Diga lo que diga mi hermano.»' },
            { q: 'El árbol viejo estaba frío al tacto.', a: 'f', why: '«Estaba caliente.»' },
            { q: 'La nota crítica dice que el tono de la narradora es totalmente sereno.', a: 'f', why: '«Minado por pequeños signos de inquietud.»' },
            { q: 'La nota sugiere que la narradora es poco fiable.', a: 't', why: '«Sugiere una narradora poco fiable.»' },
            { q: 'El huerto pertenecía al padre de la narradora.', a: 'ng', why: 'The story says «el huerto de mi madre».' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What device is «las manzanas caían como pequeñas monedas rojas»?', o: ['simile', 'metaphor', 'personification'], why: 'A comparison with *como*.' },
            { q: 'What device is «La vieja verja gemía… como si supiera»?', o: ['personification', 'simile only', 'chiasmus'], why: 'The gate is given human awareness.' },
            { q: 'What does «una anciana que busca algo que se le ha caído» suggest?', o: ['sadness and searching', 'anger and speed', 'joy and noise'], why: 'The image evokes loss and age.' },
            { q: 'Why might the narrator be unreliable?', o: ['The denial is defensive and the ending is unsure.', 'The narrator tells the whole truth.', 'The narrator is a child.'], why: 'The text raises doubt about the narrator’s account.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the figurative language.', items: [
            { s: 'Las manzanas caían [como pequeñas monedas rojas] sobre la hierba.', why: 'A simile.' },
            { s: 'La vieja verja [gemía] cada vez que la empujaba, como si supiera lo que iba a hacer.', why: 'Personification.' },
            { s: 'El árbol más viejo se inclinaba sobre el muro, [una anciana que busca algo que se le ha caído].', why: 'A metaphor with a human image.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the critical note.', items: [
            { q: 'El tono sereno de la narradora queda ___ por pequeños signos de inquietud.', a: ['minado'], why: 'The critic’s word.' },
            { q: 'La negación defensiva invita al lector a ___.', a: ['dudar'], why: 'The effect on the reader.' },
            { q: 'El final deja al lector sin ___ qué ha ocurrido realmente.', a: ['saber'], why: 'The effect of the ending.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'La verja se personifica, lo que deja entrever una culpa.', why: 'A comentario sentence.' },
            { a: 'El símil sugiere el deseo de seguridad de la narradora.', why: 'A comentario sentence.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: '«La clase era un zoo.» This is a…', o: ['metáfora', 'símil', 'símbolo'], why: 'One thing is another.' },
      { q: '«El viento susurraba.» This is…', o: ['una personificación', 'un símil', 'un símbolo'], why: 'A human quality given to the wind.' },
      { q: 'A narrator who knows all the characters’ thoughts is…', o: ['omnisciente', 'poco fiable', 'de primera persona'], why: 'Knows everything.' },
      { q: 'Which is the best sentence for a comentario?', o: ['El autor da vida a la casa al decir que «gemía», lo que crea inquietud.', 'La casa gemía y ella subió.', 'El autor usa palabras interesantes.'], why: 'Point, quotation, explanation.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['irónico', 'saying one thing and meaning another'],
      ['nostálgico', 'looking back fondly'],
      ['distante', 'not emotionally involved'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Un ___ compara dos cosas con *como*.', a: ['símil'], why: 'The definition.' },
      { q: 'Un narrador en quien no se puede confiar es ___.', a: ['poco fiable'], why: 'The definition.' },
      { q: 'Una puerta cerrada que representa un futuro cerrado es un ___.', a: ['símbolo'], why: 'The definition.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
      { q: 'Su voz era fría como el hielo.', cue: 'Su voz', a: ['Su voz era hielo.'], why: 'The metaphor.' },
      { q: 'Abrí la puerta y tuve miedo.', cue: 'Ella abrió la puerta', a: ['Ella abrió la puerta y tuvo miedo.'], why: 'Third person.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'El autor [usó] una metáfora para mostrar que la ciudad es calurosa.', a: ['usa'], why: 'Use the present tense for what the text does.' },
      { s: 'El narrador dice «la ciudad era como un horno», lo que es [una metáfora].', a: ['un símil'], why: 'There is a comparing word: *como*.' },
    ] },
  ],
};
