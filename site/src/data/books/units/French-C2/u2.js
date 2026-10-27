// French C2, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Style and rhythm',
  goal: 'Write sentences that are varied, cohesive and well paced. Learn sentence variety and parallel structure, cohesion without repetition, and punctuation for effect with French typography.',
  art: 'parrot',
  tags: { skills: ['grammar', 'writing', 'reading'], topics: ['sentence variety', 'parallelism', 'cohesion', 'punctuation', 'typography'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Court, long, équilibré',
      about: 'Vary the length of sentences and keep parallel ideas in parallel form.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Good writers control **rhythm**. A run of long sentences tires the reader; a run of short ones sounds like a list. The skill is to mix them. A **short sentence** gives impact: *Il attendit. Rien ne se passa.* A **long sentence** builds an idea step by step. A **periodic sentence** keeps the main point until the end, to create suspense: *Malgré la pluie, les retards et les réticences de ses propres conseillers, le ministre a signé.*' },
          { t: 'examples', items: [
            { s: 'La porte s’ouvrit. **Personne n’entra.**', n: 'A short sentence after a longer one creates a pause and tension.' },
            { s: 'Après des mois passés aux archives, à interroger les survivants et à vérifier chaque date, **elle a enfin publié son livre**.', n: 'A periodic sentence: the main clause comes last.' },
            { s: 'Il **est venu, a vu et a vaincu**.', n: 'Three short verbs in a row: a quick, confident rhythm.' },
          ] },
        ],
        [
          { t: 'text', md: '**Parallelism** means using the same grammatical form for ideas of equal importance. It makes a sentence balanced and easy to follow. Faulty parallelism sounds clumsy: *Elle aime lire, l’écriture et peindre.* Use the same form for all three: *lire, écrire et peindre.* Balance can also be used for effect: *Les uns parlent, les autres agissent.*' },
          { t: 'tip', art: 'owl', md: 'To check parallelism, underline the items in a list or after *non seulement… mais aussi*, *soit… soit*, *à la fois… et*. Do they all have the same form (all infinitives, all nouns)? If not, rewrite. A common fault: *Le poste exige de travailler tard et la ponctualité.*' },
          { t: 'ex', kind: 'choice', h: 'Which sentence is correctly parallel?', items: [
            { q: '', o: ['Elle aime nager, courir et danser.', 'Elle aime nager, la course et danser.', 'Elle aime nager, courir et la danse.'], why: 'All three items are infinitives.' },
            { q: '', o: ['Le directeur est à la fois juste et honnête.', 'Le directeur est à la fois juste et il est honnête.', 'Le directeur est à la fois la justice et honnête.'], why: 'Both items after *à la fois* are adjectives.' },
            { q: '', o: ['Il a non seulement rédigé le rapport, mais aussi présenté les résultats.', 'Il a non seulement rédigé le rapport, mais aussi la présentation.', 'Il a non seulement rédigé le rapport, mais aussi de présenter.'], why: 'Both parts after *non seulement… mais aussi* are past participles.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite to make the structure parallel.', items: [
            { q: 'Le poste exige de travailler tard et la ponctualité.', cue: 'Le poste exige de travailler tard et d’', a: ['Le poste exige de travailler tard et d’être ponctuel.', 'Le poste exige de travailler tard et d’être à l’heure.'], why: 'Both items become infinitives.' },
            { q: 'Elle est intelligente, travailleuse et a un grand sens de l’humour.', cue: 'Elle est intelligente, travailleuse et', a: ['Elle est intelligente, travailleuse et drôle.', 'Elle est intelligente, travailleuse et spirituelle.'], why: 'Three adjectives, not two adjectives and a clause.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Is the sentence short for impact, or periodic?', groups: ['short for impact', 'periodic'], explain: ['groups'], items: [
            { s: 'Le silence tomba.', g: 0, why: 'Very short: creates a pause.' },
            { s: 'Après des semaines de disputes, de réunions interminables et d’un dernier vote amer, le conseil donna son accord.', g: 1, why: 'The main clause comes last.' },
            { s: 'Personne ne bougea.', g: 0, why: 'Very short: impact.' },
            { s: 'Malgré sa peur du vide, son manque d’équipement et les avertissements du guide, il grimpa.', g: 1, why: 'The main point is delayed until the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Ce dernier, cette décision',
      about: 'Avoid repetition with pronouns, nominal resumption and ellipsis, and keep the reference clear.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Cohesion means that sentences link smoothly. Repeating the same noun again and again sounds heavy; replacing it badly makes the meaning unclear. French uses **pronouns** (*le, la, les, en, y*), **demonstratives** (*celui-ci, celui-là, ce dernier*) and **nominal resumption**, where a noun names what has just been said: *Le conseil a augmenté les tarifs. Cette décision a irrité les habitants.* **Ellipsis** leaves out words that are easy to supply: *Les uns votent pour, les autres contre.*' },
          { t: 'table', caption: 'Ways to avoid repetition', explain: ['head', 'col0'], head: ['Device', 'Example', 'What it replaces'], rows: [
            ['pronoun en / y', 'J’en ai besoin. / J’y pense.', 'de cela / à cela'],
            ['celui-ci / celui-là', 'Anne et Léo ont postulé ; celui-ci a été pris.', 'Léo (the nearer one)'],
            ['ce dernier / ce premier', 'Le ministre a rencontré le maire ; ce dernier a refusé.', 'le maire'],
            ['nominal resumption', 'Le conseil a augmenté les tarifs. Cette hausse a irrité tout le monde.', 'the increase'],
            ['ellipsis', 'Les uns votent pour, les autres contre.', 'votent'],
          ] },
        ],
        [
          { t: 'text', md: 'The word **cela** (or *ça*) is a common source of vagueness. *Le conseil a augmenté les tarifs. Cela a irrité les habitants.* What irritated them: the council, the tariffs, or the rise? Where there is doubt, name it: *Cette hausse a irrité les habitants.* **Ce dernier** refers to the **last-mentioned** person or thing, **celui-ci** to the nearer one. If the reader must look back to find who is who, repeat the name.' },
          { t: 'tip', art: 'owl', md: '*Le premier… le second* works for two items; with three or more, use *le premier, le deuxième, le dernier*. *Ce dernier* is formal and a bit heavy: do not use it more than once in a paragraph, and make sure the last-mentioned person is the one you mean.' },
          { t: 'ex', kind: 'choice', h: 'Choose the best word to avoid repetition.', items: [
            { q: 'Le conseil a augmenté les tarifs. ___ a irrité les habitants.', o: ['Cette hausse', 'Il', 'Ceux-ci'], why: 'A noun names exactly what irritated them.' },
            { q: 'Le ministre a rencontré le maire ; ___ a refusé de répondre.', o: ['ce dernier', 'celui-là', 'le premier'], why: '*Ce dernier* = the last-mentioned person: the mayor.' },
            { q: 'J’ai besoin de ce livre. J’___ ai besoin pour demain.', o: ['en', 'y', 'le'], why: '*Avoir besoin de* takes *en*.' },
            { q: 'Les uns votent pour ; les autres ___ .', o: ['contre', 'votent contre eux', 'contre le vote'], why: 'Ellipsis: the verb is understood.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite to avoid repetition, using the word given.', items: [
            { q: 'Le conseil a augmenté les tarifs, et cela a irrité les habitants.', cue: 'Cette', a: ['Le conseil a augmenté les tarifs, et cette hausse a irrité les habitants.', 'Le conseil a augmenté les tarifs ; cette hausse a irrité les habitants.'], why: 'Nominal resumption names the increase.' },
            { q: 'Je pense à cette idée depuis une semaine.', cue: 'J’y', a: ['J’y pense depuis une semaine.'], why: '*Penser à* + thing is replaced by *y*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Make the reference clear.', items: [
            { s: 'Le conseil a baissé les subventions. [Cela] a inquiété les associations.', a: ['Cette baisse', 'Cette décision', 'Cette mesure'], why: 'Name what *cela* refers to.' },
            { s: 'Parmi les trois candidats, [ce dernier] avait le plus d’expérience, et le premier le moins.', a: ['le troisième', 'le dernier'], why: '*Ce dernier* is not clear when there are three candidates; use *le troisième*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with *en*, *y* or *ce dernier*.', items: [
            { q: 'Tu veux du café ? Oui, j’___ veux bien.', a: ['en'], why: '*Vouloir du café* is replaced by *en*.' },
            { q: 'Tu penses à ton voyage ? Oui, j’___ pense souvent.', a: ['y'], why: '*Penser à* is replaced by *y*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Point-virgule et tiret',
      about: 'Use punctuation to control meaning and rhythm, with French typography.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Punctuation controls how a sentence is read. The **point-virgule** (;) joins two closely related clauses: *Le plan était simple ; son exécution ne l’était pas.* The **deux-points** (:) introduces an explanation or a list: *Il n’y avait qu’une explication : il avait menti.* The **tiret** (–) adds emphasis or an interruption: *Le résultat – à la surprise générale – fut un match nul.* **Parentheses** add information that could be removed. **Typography** matters in French: a **space** goes before **; : ? !** and inside **« guillemets »**.' },
          { t: 'table', caption: 'Punctuation for effect', explain: ['head', 'col0'], head: ['Mark', 'Use', 'Example'], rows: [
            ['point-virgule ;', 'two related clauses', 'Le plan était simple ; son exécution ne l’était pas.'],
            ['deux-points :', 'explanation or list', 'Il n’avait qu’une peur : l’échec.'],
            ['tiret –', 'emphasis or interruption', 'Le résultat – à la surprise générale – fut un match nul.'],
            ['parenthèses ( )', 'extra, removable information', 'Le festival (dont c’est la dixième édition) ouvre vendredi.'],
          ] },
        ],
        [
          { t: 'text', md: 'A single comma can change the meaning: *Allons manger, grand-mère !* and *Allons manger grand-mère !* In relative clauses, commas separate **explanatory** information (extra) from **restrictive** information (needed to identify): *Mon frère, qui habite à Paris, est cuisinier* means I have one brother. *Mon frère qui habite à Paris est cuisinier* suggests I have more than one.' },
          { t: 'tip', art: 'owl', md: 'Do not join two independent clauses with a comma alone: *Le plan était simple, son exécution ne l’était pas.* Use a semicolon, a full stop or a conjunction. In French, a **space** goes before the colon, the semicolon, the question mark and the exclamation mark; in English it does not. Do not copy English typography into French.' },
          { t: 'ex', kind: 'choice', h: 'Which punctuation is correct?', items: [
            { q: '', o: ['Le plan était simple ; son exécution ne l’était pas.', 'Le plan était simple, son exécution ne l’était pas.', 'Le plan était simple : son exécution ne l’était pas.'], why: 'A semicolon joins two related clauses; a comma alone is a splice.' },
            { q: '', o: ['Il n’avait qu’une peur : l’échec.', 'Il n’avait qu’une peur ; l’échec.', 'Il n’avait qu’une peur, l’échec.'], why: 'A colon introduces the explanation.' },
            { q: '', o: ['Ma sœur, qui habite à Rome, est médecin.', 'Ma sœur qui habite à Rome, est médecin.', 'Ma sœur, qui habite à Rome est médecin.'], why: 'Explanatory information needs a comma on both sides.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with a semicolon, colon or dash.', items: [
            { q: 'Le plan était simple, mais son exécution ne l’était pas.', cue: 'Le plan était simple ;', a: ['Le plan était simple ; son exécution ne l’était pas.'], why: 'A semicolon joins the clauses.' },
            { q: 'Il n’y avait qu’une explication, et c’était qu’il avait menti.', cue: 'Il n’y avait qu’une explication :', a: ['Il n’y avait qu’une explication : il avait menti.'], why: 'A colon introduces the explanation.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'What does the sentence tell you?', groups: ['only one such person', 'more than one possible'], explain: ['groups'], items: [
            { s: 'Mon frère, qui habite à Paris, est cuisinier.', g: 0, why: 'Commas: extra information, so there is one brother.' },
            { s: 'Mon frère qui habite à Paris est cuisinier.', g: 1, why: 'No commas: identifies which brother, so there are several.' },
            { s: 'Les élèves, qui étaient fatigués, sont partis tôt.', g: 0, why: 'All the pupils were tired and left.' },
            { s: 'Les élèves qui étaient fatigués sont partis tôt.', g: 1, why: 'Only the tired pupils left.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Fix the punctuation error.', items: [
            { s: 'Le film était long[,] il était aussi magnifique.', a: [' ;', ' –', ' :'], why: 'A comma splice: use a semicolon or a dash.' },
            { s: 'Allons manger[ ]grand-mère !', a: [','], why: 'A comma changes the meaning: *Allons manger, grand-mère !*' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'La voie lente',
      about: 'Read a magazine essay and notice rhythm, cohesion and punctuation.',
      art: 'croissant',
      spreads: [
        [
          { t: 'reading', title: 'La voie lente', md: 'Autrefois, je mesurais mes journées en tâches accomplies. Courriels traités, réunions tenues, listes biffées ; le soir venu, j’étais épuisée et pas plus sage. Puis, un printemps, j’ai essayé quelque chose de simple : je me suis arrêtée.\n\nÇa n’a pas bien commencé. L’oisiveté, ai-je découvert, est un art, et un art difficile. Je prenais mon téléphone pour voir la météo et je faisais défiler l’écran quarante minutes plus tard. Une voisine, qui avait vécu toute sa vie dans le village, a ri quand je lui ai raconté. « Vous n’êtes pas lente, m’a-t-elle dit. Vous êtes juste en retard. »\n\nVivre lentement ne veut pas dire ne rien faire ; cela veut dire faire une seule chose à la fois, et la faire avec attention. Je cuisine sans balado. Je marche sans écouteurs. Je lis un chapitre puis, surtout, j’y réfléchis. La première de ces habitudes fut la plus difficile ; la dernière, la plus gratifiante.\n\nOn peut objecter que tout cela est un luxe, disent les critiques, réservé à ceux qui peuvent réduire leurs heures. Ils n’ont pas tort, et je ne l’écarte pas. Mais le calme d’une soirée lente n’est pas un produit ; c’est un choix, et un choix qui coûte très peu.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'L’auteure jugeait autrefois ses journées au nombre de tâches accomplies.', a: 't', why: '« Je mesurais mes journées en tâches accomplies. »' },
            { q: 'Elle a trouvé facile d’être oisive au début.', a: 'f', why: '« Ça n’a pas bien commencé. »' },
            { q: 'La voisine lui a dit qu’elle était trop lente.', a: 'f', why: '« Vous n’êtes pas lente… Vous êtes juste en retard. »' },
            { q: 'L’auteure pense que les critiques n’ont absolument pas raison.', a: 'f', why: '« Ils n’ont pas tort. »' },
            { q: 'Elle cuisine maintenant sans balado.', a: 't', why: '« Je cuisine sans balado. »' },
            { q: 'L’auteure habite un village au bord de la mer.', a: 'ng', why: 'The text mentions a village but not the sea.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at how the essay is written.', items: [
            { q: '« Puis, un printemps, j’ai essayé quelque chose de simple : je me suis arrêtée. » Why is the last sentence so short?', o: ['To give impact after a long build-up.', 'Because the writer was in a hurry.', 'Because it is a question.'], why: 'A short clause after a long one creates impact.' },
            { q: '« La première de ces habitudes fut la plus difficile ; la dernière, la plus gratifiante. » Why the semicolon?', o: ['It balances two closely related ideas.', 'It introduces a list.', 'It shows a quotation.'], why: 'A semicolon joins related clauses and creates balance.' },
            { q: '« la faire avec attention » – what does *la* refer to?', o: ['une seule chose à la fois', 'la journée', 'la voisine'], why: '*La* replaces *une seule chose*.' },
            { q: 'Which opening is a periodic sentence?', o: ['« Courriels traités, réunions tenues, listes biffées ; le soir venu, j’étais épuisée et pas plus sage. »', '« Ça n’a pas bien commencé. »', '« Je marche sans écouteurs. »'], why: 'The list of details comes first and the point last.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the examples of parallel structure.', items: [
            { s: '[Je cuisine sans balado. Je marche sans écouteurs.] Je lis un chapitre puis j’y réfléchis.', why: 'The first two sentences repeat one structure.' },
            { s: '[Courriels traités, réunions tenues, listes biffées] ; le soir venu, j’étais épuisée.', why: 'Three parallel participle phrases.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'L’oisiveté, ai-je découvert, est un ___, et un art difficile.', a: ['art'], why: 'The writer’s discovery.' },
            { q: 'Le calme d’une soirée lente n’est pas un produit ; c’est un ___.', a: ['choix'], why: 'The writer’s final point.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Elle aime ___.', o: ['nager, courir et danser', 'nager, la course et danser', 'nager, courir et la danse'], why: 'All items must have the same form.' },
      { q: 'Le conseil a augmenté les tarifs. ___ a irrité les habitants.', o: ['Cette hausse', 'Il', 'Ceux-ci'], why: 'A noun names exactly what irritated them.' },
      { q: 'Which sentence is correct?', o: ['Le plan était simple ; son exécution ne l’était pas.', 'Le plan était simple, son exécution ne l’était pas.', 'Le plan était simple ; et son exécution ne l’était pas.'], why: 'A semicolon joins two clauses without a conjunction.' },
      { q: 'Tu penses à ton voyage ? Oui, j’___ pense souvent.', o: ['y', 'en', 'le'], why: '*Penser à* is replaced by *y*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Le ministre a rencontré le maire ; ce ___ a refusé de répondre.', a: ['dernier'], why: '*Ce dernier* = the last-mentioned.' },
      { q: 'Il n’y avait qu’une explication : il avait ___.', a: ['menti'], why: 'A colon introduces the explanation.' },
      { q: 'Les uns votent pour, les autres ___.', a: ['contre'], why: 'Ellipsis.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, starting with the words given.', items: [
      { q: 'Le poste exige de travailler tard et la ponctualité.', cue: 'Le poste exige de travailler tard et d’', a: ['Le poste exige de travailler tard et d’être ponctuel.', 'Le poste exige de travailler tard et d’être à l’heure.'], why: 'Parallel infinitives.' },
      { q: 'Le plan était simple, mais son exécution ne l’était pas.', cue: 'Le plan était simple ;', a: ['Le plan était simple ; son exécution ne l’était pas.'], why: 'A semicolon joins the clauses.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'What does the sentence tell you?', groups: ['one only', 'more than one'], explain: ['groups'], items: [
      { s: 'Ma sœur, qui habite à Rome, est médecin.', g: 0, why: 'Commas: extra information, so one sister.' },
      { s: 'Ma sœur qui habite à Rome est médecin.', g: 1, why: 'No commas: identifies a sister, so there are several.' },
      { s: 'Son fils, qui est pilote, a appelé.', g: 0, why: 'One son.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Le film était long[,] il était aussi magnifique.', a: [' ;', ' –', ' :'], why: 'A comma splice.' },
      { s: 'Le conseil a baissé les subventions. [Cela] a inquiété les associations.', a: ['Cette baisse', 'Cette décision', 'Cette mesure'], why: 'Name what *cela* refers to.' },
    ] },
  ],
};
