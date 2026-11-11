// French C2, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Literature and criticism',
  goal: 'Read literary French closely and write about it. Learn figurative language, narrative voice and tone, and how to write a commentaire with a plan, short quotations and explained effects.',
  art: 'owl',
  tags: { skills: ['reading', 'writing', 'vocabulary'], topics: ['métaphore', 'comparaison', 'personnification', 'symbole', 'narrative voice', 'tone', 'commentaire'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Métaphore, comparaison, symbole',
      about: 'Identify figurative language and explain what it does for the reader.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Literary writers use **figurative language**, words that mean more than their literal sense. **La métaphore** says that one thing *is* another, without a comparing word: *La ville était une fournaise.* **La comparaison** uses *comme*, *tel* or *pareil à*: *La ville était comme une fournaise.* **La personnification** gives human qualities to a non-human thing: *Le vent chuchotait dans les arbres.* **Le symbole** is an object or image that stands for a larger idea: *une porte verrouillée* may stand for a closed future. **Les images** appeal to the senses: *l’odeur aigre de la vieille pluie*.' },
          { t: 'table', caption: 'Figurative language', explain: ['head', 'col0'], head: ['Device', 'What it does', 'Example'], rows: [
            ['métaphore', 'says one thing is another', 'La ville était une fournaise.'],
            ['comparaison', 'compares with comme or tel', 'La ville était comme une fournaise.'],
            ['personnification', 'gives human qualities to things', 'Le vent chuchotait dans les arbres.'],
            ['symbole', 'stands for a larger idea', 'une porte verrouillée pour un avenir fermé'],
            ['image sensorielle', 'appeals to the senses', 'l’odeur aigre de la vieille pluie'],
          ] },
        ],
        [
          { t: 'text', md: 'Naming a device is only the first step. The skill is to explain its **effect**: what does it make the reader see, feel or think? *La ville était une fournaise* suggests not only heat but also pressure and exhaustion. Always ask: **pourquoi cette image, et pas une autre ?** A weak comment says *l’auteur utilise une métaphore*. A strong one says *la métaphore de la fournaise présente la ville comme un lieu qui consume les gens*.' },
          { t: 'tip', art: 'owl', md: 'Use verbs of effect: *suggérer, évoquer, traduire, renforcer, mettre en relief, créer une impression de*. Avoid *montrer* on its own. Say what the image suggests **to the reader**: *La comparaison évoque la solitude*.' },
          { t: 'ex', kind: 'sort', h: 'Which device?', groups: ['métaphore', 'comparaison', 'personnification'], explain: ['groups'], items: [
            { s: 'La classe était un zoo.', g: 0, why: 'One thing is another: no comparing word.' },
            { s: 'Sa voix était froide comme la glace.', g: 1, why: 'A comparison with *comme*.' },
            { s: 'Le soleil souriait au village.', g: 2, why: 'A human quality given to the sun.' },
            { s: 'Le temps est un voleur.', g: 0, why: 'A metaphor.' },
            { s: 'Il courait comme le vent.', g: 1, why: 'A comparison with *comme*.' },
            { s: 'La vieille maison gémissait dans la nuit.', g: 2, why: 'The house is given a human sound.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What is the effect?', items: [
            { q: '« La ville était une fournaise. » This metaphor suggests…', o: ['heat and exhaustion', 'a place for making metal', 'a quiet town'], why: 'It conveys oppressive heat and pressure.' },
            { q: '« La vieille maison gémissait dans la nuit. » This personification creates…', o: ['a sense of age and unease', 'a sense of comfort', 'a sense of speed'], why: 'The house sounds like a person in discomfort.' },
            { q: 'A locked door in a novel about a young person may symbolise…', o: ['a closed future', 'a broken lock', 'a new house'], why: 'A symbol stands for a larger idea.' },
            { q: '« Elle se tenait seule, comme un réverbère à l’aube. » The comparison suggests…', o: ['loneliness and being forgotten', 'brightness', 'noise'], why: 'A street lamp at dawn has lost its purpose.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the device with its definition.', pairs: [
            ['métaphore', 'says one thing is another'],
            ['comparaison', 'compares with comme'],
            ['personnification', 'gives human qualities to things'],
            ['image sensorielle', 'language that appeals to the senses'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Turn the comparison into a metaphor.', items: [
            { q: 'Sa voix était froide comme la glace.', cue: 'Sa voix', a: ['Sa voix était de la glace.', 'Sa voix était glace.'], why: 'Remove *comme*: the metaphor says it *is* ice.' },
            { q: 'La classe était comme un zoo.', cue: 'La classe', a: ['La classe était un zoo.'], why: 'Remove *comme*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'Le vent chuchotait dans les arbres : c’est une ___.', a: ['personnification'], why: 'Human quality given to the wind.' },
            { q: 'Un ___ représente une idée plus large, comme une porte verrouillée pour un avenir fermé.', a: ['symbole'], why: 'The definition of a symbol.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Voix et ton',
      about: 'Describe who is telling the story, how reliable they are and what tone they take.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Every story has a **narrateur**. In the **first person**, the narrator is a character: *J’ai ouvert la porte.* The reader sees only what the narrator sees. In the **third person**, the narrator stands outside: *Elle ouvrit la porte.* A **focalisation interne** (limited) shows one character’s thoughts; a **focalisation zéro** (omniscient) knows everything. A narrator is **peu fiable** (unreliable) when the reader has reason to doubt them, because they lie, forget, or do not understand what they see.' },
          { t: 'table', caption: 'Narrative voice', explain: ['head', 'col0'], head: ['Type', 'What the reader gets', 'Example'], rows: [
            ['première personne', 'one character’s view', 'J’ai ouvert la porte.'],
            ['troisième personne, focalisation interne', 'one character’s thoughts', 'Elle ouvrit la porte, redoutant ce qu’elle trouverait.'],
            ['focalisation zéro', 'many characters’ thoughts', 'Elle ouvrit la porte ; lui, à l’étage, retenait son souffle.'],
            ['narrateur peu fiable', 'a view that cannot be trusted', 'Je n’ai jamais menti, je vous l’assure, sauf une ou deux fois.'],
          ] },
        ],
        [
          { t: 'text', md: '**Le ton** is the writer’s or narrator’s attitude to the subject: *grave, ironique, nostalgique, amer, enjoué, détaché*. It comes from word choice, rhythm and detail. **Le registre** is the level of formality. A narrator who calls a funeral *une cérémonie plutôt terne* uses an ironic, detached tone; one who says *le jour où nous l’avons enterrée* sounds nostalgic and serious. Support any claim about tone with **evidence from the text**.' },
          { t: 'tip', art: 'owl', md: 'When you comment on tone, avoid vague words (*bien, mauvais, intéressant*). Use precise ones: *ironique, résigné, tendre, sarcastique, solennel*. And always link the tone to a **word or phrase**: *Le ton est ironique : « plutôt terne » traite un enterrement comme une réception.*' },
          { t: 'ex', kind: 'sort', h: 'First or third person?', groups: ['first person', 'third person'], explain: ['groups'], items: [
            { s: 'Je n’ai pas pu dormir cette nuit-là.', g: 0, why: 'The narrator is a character: *je*.' },
            { s: 'Elle n’a pas pu dormir cette nuit-là.', g: 1, why: 'The narrator stands outside: *elle*.' },
            { s: 'Nous sommes rentrés en silence.', g: 0, why: 'First person plural.' },
            { s: 'Ils sont rentrés en silence.', g: 1, why: 'Third person.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What is the tone?', items: [
            { q: '« C’était, je suppose, une cérémonie plutôt terne : quarante personnes, et les sandwichs étaient rassis. »', o: ['ironic and detached', 'tender and grieving', 'angry and bitter'], why: 'The understatement and flat details suggest an ironic tone.' },
            { q: '« Je me souviens de la lumière d’été sur ses mains quand elle épluchait les pommes, et de l’odeur de cannelle dans la cuisine. »', o: ['nostalgic and tender', 'ironic and cold', 'angry and sharp'], why: 'Sensory memories suggest a nostalgic tone.' },
            { q: '« Rien ne change jamais dans cette ville, et personne n’a la moindre envie que cela change. »', o: ['bitter and resigned', 'excited and hopeful', 'playful and light'], why: 'A negative generalisation with a tired attitude.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['ironique', 'saying one thing and meaning another'],
            ['nostalgique', 'looking back fondly'],
            ['détaché', 'not emotionally involved'],
            ['omniscient', 'knowing everything'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite from the first person into the third person.', items: [
            { q: 'J’ai ouvert la porte et j’ai eu peur de ce que je trouverais.', cue: 'Elle a ouvert la porte', a: ['Elle a ouvert la porte et elle a eu peur de ce qu’elle trouverait.', 'Elle a ouvert la porte et a eu peur de ce qu’elle trouverait.'], why: 'Change *je* to *elle* and keep the tenses consistent.' },
            { q: 'Nous sommes rentrés en silence.', cue: 'Ils sont', a: ['Ils sont rentrés en silence.'], why: 'First person plural becomes third person plural.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'Un narrateur qui connaît les pensées de tous les personnages est ___.', a: ['omniscient'], why: 'The definition.' },
            { q: 'Un narrateur à qui le lecteur ne peut pas faire confiance est ___. (peu fiable)', a: ['peu fiable'], why: 'The definition.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Le commentaire : plan, citation, effet',
      about: 'Write a commentaire paragraph that makes a point, quotes briefly and explains the effect.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A **commentaire** follows a plan: an **introduction** (the text, its context and the question), two or three **axes** (parts of the argument) and a **conclusion**. Each paragraph in an axis makes a **point**, gives **evidence** (a short quotation) and **explains the effect**. Example: *L’auteur présente la maison comme hostile **(idée)** : elle « gémissait dans la nuit » **(citation)**, une personnification qui lui prête une souffrance humaine et crée un malaise **(explication)**.*' },
          { t: 'table', caption: 'Idée, citation, explication', explain: ['head', 'col0'], head: ['Part', 'What it does', 'Useful language'], rows: [
            ['idée', 'answers the question in your own words', 'L’auteur présente… / Le narrateur semble…'],
            ['citation', 'a short, embedded quotation', 'elle « gémissait », ce qui… / l’expression « … » suggère…'],
            ['explication', 'explains the effect', 'Cela suggère / évoque / renforce / crée une impression de…'],
          ] },
        ],
        [
          { t: 'text', md: 'Keep quotations **short**: a word or a phrase is better than a whole sentence. **Embed** them in your own sentence: *La maison « gémissait », ce qui lui donne une souffrance humaine.* Then explain the **effect on the reader**. If possible, link to the writer’s wider purpose: *Cela renforce l’idée que la famille est prisonnière.* In a French commentaire, use the **present tense** for what the text does and **avoid saying “je”**.' },
          { t: 'tip', art: 'owl', md: 'Do not just **retell** the story (« Ensuite la jeune fille ouvre la porte »). A commentaire is about **how** the writer creates meaning, not **what** happens. Use the present tense: *L’auteur utilise…*, not *a utilisé*. And do not paraphrase a quotation without commenting on it.' },
          { t: 'ex', kind: 'sort', h: 'Which part is it?', groups: ['idée', 'citation', 'explication'], explain: ['groups'], items: [
            { s: 'L’auteur présente la maison comme hostile.', g: 0, why: 'A point in your own words.' },
            { s: 'elle « gémissait dans la nuit »', g: 1, why: 'A short quotation.' },
            { s: 'Cette personnification prête à l’édifice une souffrance humaine et crée un malaise.', g: 2, why: 'It explains the effect.' },
            { s: 'Le narrateur semble nostalgique.', g: 0, why: 'A point.' },
            { s: 'la « lumière d’été sur ses mains »', g: 1, why: 'A short quotation.' },
            { s: 'Cette image sensorielle évoque la tendresse et la perte.', g: 2, why: 'It explains the effect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which is the best sentence for a commentary?', items: [
            { q: '', o: ['L’auteur rend la maison vivante en disant qu’elle « gémissait », ce qui crée un malaise.', 'La maison gémissait et puis elle est montée à l’étage.', 'L’auteur utilise beaucoup de mots intéressants.'], why: 'It has a point, a quotation and an explanation.' },
            { q: '', o: ['La comparaison « froide comme la glace » suggère la distance affective du locuteur.', 'Le locuteur dit « froide comme la glace », et je trouve cela bien.', 'La glace est froide et le locuteur aussi.'], why: 'It names the device, quotes briefly and explains the effect.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite as a commentary sentence, using the words given.', items: [
            { q: 'L’auteur dit que le vent « chuchotait », et c’est une personnification et la scène est calme.', cue: 'La personnification du vent', a: ['La personnification du vent qui « chuchotait » rend la scène calme.', 'La personnification du vent qui chuchote rend la scène calme.'], why: 'Embed the quotation and explain the effect.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the tense problem.', items: [
            { s: 'L’auteur [a utilisé] une métaphore pour montrer que la ville est chaude.', a: ['utilise'], why: 'Use the present tense for what the text does.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Le verger',
      about: 'Read a short story extract and a critical note on it.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Le verger', md: 'RÉCIT\n\nLe verger de ma mère était un endroit tranquille, de ce silence qui attend. À l’automne, les pommes tombaient comme de petites pièces rouges dans l’herbe, et je marchais parmi elles en les comptant, comme si je devais un jour être riche. La vieille barrière gémissait chaque fois que je la poussais, comme si elle savait ce que j’allais faire.\n\nJe ne suis pas, quoi qu’en dise mon frère, une personne négligente. Je voulais seulement revoir le verger une dernière fois avant la vente. L’homme de l’agence avait souri comme s’il me rendait service.\n\nAu fond, le plus vieil arbre se penchait sur le mur, une vieille femme cherchant quelque chose qu’elle aurait laissé tomber. J’ai posé la main sur l’écorce. Elle était chaude, ce qui n’avait aucun sens, car le soleil avait disparu. Je suis restée là, je crois, une heure. Ou une éternité. Difficile à dire.\n\nNOTE CRITIQUE\n\nLe ton calme du narrateur est miné par de petits signes de malaise. La comparaison des pommes « comme de petites pièces rouges » suggère le désir de sécurité du narrateur, tandis que la personnification de la barrière qui « gémissait… comme si elle savait » laisse deviner une culpabilité. La phrase « Je ne suis pas, quoi qu’en dise mon frère, une personne négligente » suggère un narrateur peu fiable : ce déni défensif invite le lecteur à douter. La fin, incertaine (« une heure. Ou une éternité »), laisse le lecteur sans savoir ce qui s’est vraiment passé.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La narratrice est venue revoir le verger avant la vente.', a: 't', why: '« Revoir le verger une dernière fois avant la vente. »' },
            { q: 'Le frère de la narratrice la trouve négligente.', a: 't', why: '« Quoi qu’en dise mon frère. »' },
            { q: 'Le vieil arbre était froid au toucher.', a: 'f', why: '« Elle était chaude. »' },
            { q: 'La note critique dit que le ton du narrateur est entièrement calme.', a: 'f', why: '« Miné par de petits signes de malaise. »' },
            { q: 'La note suggère que la narratrice est peu fiable.', a: 't', why: '« Suggère un narrateur peu fiable. »' },
            { q: 'Le verger appartenait au père de la narratrice.', a: 'ng', why: 'The story says « le verger de ma mère ».' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What device is « les pommes tombaient comme de petites pièces rouges » ?', o: ['comparison', 'metaphor', 'personification'], why: 'A comparison with *comme*.' },
            { q: 'What device is « La vieille barrière gémissait… comme si elle savait » ?', o: ['personification', 'comparison only', 'chiasmus'], why: 'The gate is given human awareness.' },
            { q: 'What does « une vieille femme cherchant quelque chose qu’elle aurait laissé tomber » suggest?', o: ['sadness and searching', 'anger and speed', 'joy and noise'], why: 'The image evokes loss and age.' },
            { q: 'Why might the narrator be unreliable?', o: ['The denial is defensive and the ending is unsure.', 'The narrator tells the whole truth.', 'The narrator is a child.'], why: 'The text raises doubt about the narrator’s account.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the figurative language.', items: [
            { s: 'Les pommes tombaient [comme de petites pièces rouges] dans l’herbe.', why: 'A comparison.' },
            { s: 'La vieille barrière [gémissait] chaque fois que je la poussais, comme si elle savait ce que j’allais faire.', why: 'Personification.' },
            { s: 'Le plus vieil arbre se penchait sur le mur, [une vieille femme cherchant quelque chose qu’elle aurait laissé tomber].', why: 'A metaphor with a human image.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the critical note.', items: [
            { q: 'Le ton calme du narrateur est ___ par de petits signes de malaise.', a: ['miné'], why: 'The critic’s word.' },
            { q: 'Ce déni défensif invite le lecteur à ___.', a: ['douter'], why: 'The effect on the reader.' },
            { q: 'La fin laisse le lecteur sans ___ ce qui s’est vraiment passé.', a: ['savoir'], why: 'The effect of the ending.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'La barrière est personnifiée, ce qui laisse deviner une culpabilité.', why: 'A commentary sentence.' },
            { a: 'La comparaison suggère le désir de sécurité du narrateur.', why: 'A commentary sentence.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: '« La classe était un zoo. » This is a…', o: ['métaphore', 'comparaison', 'symbole'], why: 'One thing is another.' },
      { q: '« Le vent chuchotait. » This is…', o: ['une personnification', 'une comparaison', 'un symbole'], why: 'A human quality given to the wind.' },
      { q: 'A narrator who knows all the characters’ thoughts is…', o: ['omniscient', 'peu fiable', 'à la première personne'], why: 'Knows everything.' },
      { q: 'Which is the best sentence for a commentary?', o: ['L’auteur rend la maison vivante en disant qu’elle « gémissait », ce qui crée un malaise.', 'La maison gémissait et elle est montée.', 'L’auteur utilise des mots intéressants.'], why: 'Point, quotation, explanation.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['ironique', 'saying one thing and meaning another'],
      ['nostalgique', 'looking back fondly'],
      ['détaché', 'not emotionally involved'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Une ___ compare deux choses avec *comme*.', a: ['comparaison'], why: 'The definition.' },
      { q: 'Un narrateur à qui l’on ne peut pas faire confiance est ___.', a: ['peu fiable'], why: 'The definition.' },
      { q: 'Une porte verrouillée qui représente un avenir fermé est un ___.', a: ['symbole'], why: 'The definition.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
      { q: 'Sa voix était froide comme la glace.', cue: 'Sa voix', a: ['Sa voix était de la glace.', 'Sa voix était glace.'], why: 'The metaphor.' },
      { q: 'J’ai ouvert la porte et j’ai eu peur.', cue: 'Elle a ouvert la porte', a: ['Elle a ouvert la porte et elle a eu peur.', 'Elle a ouvert la porte et a eu peur.'], why: 'Third person.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'L’auteur [a utilisé] une métaphore pour montrer que la ville est chaude.', a: ['utilise'], why: 'Use the present tense for what the text does.' },
      { s: 'Le narrateur dit « la ville était comme une fournaise », ce qui est une [métaphore].', a: ['comparaison'], why: 'There is a comparing word: *comme*.' },
    ] },
  ],
};
