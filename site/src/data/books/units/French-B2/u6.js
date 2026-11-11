// French B2, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Science, environment and technology',
  goal: 'Describe trends, explain processes and discuss scientific and environmental questions. Use the language of numbers and change, the present participle and the verbal adjective, and nouns made from verbs.',
  art: 'sun',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['trends', 'numbers', 'fractions', 'present participle', 'verbal adjective', 'nominalisation', 'cause and effect', 'processes'], goals: ['foundations', 'academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Une hausse de dix pour cent',
      about: 'Describe changes and numbers.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'To describe a change, use a **verb** (*augmenter, diminuer, baisser, doubler, tripler, rester stable*) or a **noun** (*une hausse, une baisse, une augmentation, une diminution, une stabilité*). Add the **amount** with **de** and the **starting and ending points** with **de … à …**: *Le nombre de visiteurs est passé de mille à deux mille. Il a augmenté de dix pour cent.* The word for the result is **pour cent** (percent), always written with a space in French: *10 %*.' },
          { t: 'table', caption: 'Describing change', explain: ['head', 'col2'], head: ['Verb', 'Noun', 'Meaning'], rows: [
            ['augmenter', 'une hausse, une augmentation', 'to rise'],
            ['diminuer, baisser', 'une baisse, une diminution', 'to fall'],
            ['doubler, tripler', 'un doublement, un triplement', 'to double, to triple'],
            ['rester stable', 'une stabilité', 'to stay stable'],
            ['passer de … à …', 'une évolution', 'to go from … to …'],
            ['fluctuer', 'une fluctuation', 'to fluctuate'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use **de** for the size of a change (*une hausse de 5 %*), **à** for the level reached (*une hausse à 25 %*), and **de … à …** for the path (*de 20 à 25 %*). For approximations, say **environ** (about), **plus de** (more than), **moins de** (less than), **près de** (nearly), **entre … et …** (between … and …).' },
        ],
        [
          { t: 'table', caption: 'Fractions and proportions', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['la moitié', 'half'],
            ['un tiers', 'a third'],
            ['un quart', 'a quarter'],
            ['les deux tiers', 'two thirds'],
            ['la majorité, la plupart', 'the majority, most'],
            ['une minorité', 'a minority'],
            ['en moyenne', 'on average'],
          ] },
          { t: 'examples', items: [
            { s: 'Le nombre d’habitants **a doublé** en vingt ans.', n: 'A verb for a change.' },
            { s: 'On observe **une hausse de dix pour cent**.', n: 'A noun for a change.' },
            { s: 'Le chiffre est **passé de** mille **à** deux mille.', n: 'From … to ….' },
            { s: '**La moitié** des participants ont répondu.', n: 'A fraction with a plural verb.' },
            { s: 'Il y a **environ** trois cents personnes.', n: 'An approximation.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the meaning.', pairs: [
            ['la moitié', 'half'],
            ['un tiers', 'a third'],
            ['un quart', 'a quarter'],
            ['en moyenne', 'on average'],
            ['doubler', 'to double'],
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Le nombre de visiteurs est passé ___ mille à deux mille.', o: ['de', 'à', 'en'], why: '*passer de … à …*' },
            { q: 'On observe une hausse ___ dix pour cent.', o: ['de', 'à', 'en'], why: 'The size of the change: *de*.' },
            { q: 'Le nombre d’habitants a ___ en vingt ans. (deux fois plus)', o: ['doublé', 'doublement', 'double'], why: 'The participle after *a*.' },
            { q: 'Les prix ont ___ de 5 %. (en baisse)', o: ['baissé', 'baisse', 'baissement'], why: 'The participle after *ont*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Turn the verb into a noun phrase.', items: [
            { q: 'Le nombre d’élèves a augmenté.', cue: 'On observe', a: ['On observe une augmentation du nombre d’élèves.', 'On observe une hausse du nombre d’élèves.'], why: '*augmenter* → *une augmentation*.' },
            { q: 'Les prix ont baissé.', cue: 'On constate', a: ['On constate une baisse des prix.'], why: '*baisser* → *une baisse*.' },
            { q: 'La température a doublé.', cue: 'Il y a eu', a: ['Il y a eu un doublement de la température.'], why: '*doubler* → *un doublement*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Le nombre de visiteurs est passé de mille à deux mille.', why: '*passer de … à …*' },
            { a: 'On observe une hausse de dix pour cent.', why: '*une hausse de* + amount.' },
            { a: 'La moitié des participants ont répondu.', why: 'A fraction with a plural verb.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Le nombre est passé [à] mille à deux mille.', a: ['de'], why: '*passer de … à …*' },
            { s: 'Les prix ont [baisse] de 5 %.', a: ['baissé'], why: 'The past participle: *baissé*.' },
            { s: 'On observe une hausse [à] dix pour cent.', a: ['de'], why: 'The size of the change: *de*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Fatigant ou fatiguant ?',
      about: 'Tell the present participle from the verbal adjective.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'The **present participle** ends in **-ant**: *en parlant, ayant, étant*. It is a verb form and **never changes**: *Les enfants, aimant jouer, restent dehors.* Some words in **-ant** are **adjectives** that agree with the noun: *un travail fatigant, une histoire passionnante, des enfants obéissants*. They are called **verbal adjectives**. Some have a different spelling from the participle: **fatigant** (adjective) and **fatiguant** (participle); **convaincant** (adjective) and **convainquant** (participle); **différent** (adjective) and **différant** (participle).' },
          { t: 'table', caption: 'Participle or adjective?', explain: ['head', 'col2'], head: ['Participle (verb, never changes)', 'Adjective (agrees)', 'Example'], rows: [
            ['fatiguant', 'fatigant, fatigante', 'Ce travail est fatigant.'],
            ['convainquant', 'convaincant, convaincante', 'Un argument convaincant.'],
            ['différant', 'différent, différente', 'Deux idées différentes.'],
            ['précédant', 'précédent, précédente', 'La semaine précédente.'],
            ['négligeant', 'négligent, négligente', 'Un élève négligent.'],
            ['intriguant', 'intrigant, intrigante', 'Une histoire intrigante.'],
          ] },
          { t: 'tip', art: 'owl', md: 'A quick test: if you can replace the word by *qui* + verb, it is a **participle** (*Les enfants, aimant jouer* = *qui aiment jouer*). If it describes the noun and agrees with it, it is an **adjective** (*une histoire passionnante*). The participle can also have an object: *aimant la musique*; an adjective cannot.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Cette histoire est **passionnante**.', n: 'An adjective: feminine singular.' },
            { s: 'Les résultats **convaincants** ont été publiés.', n: 'An adjective: plural.' },
            { s: '**Voyant** qu’il pleuvait, nous sommes rentrés.', n: 'A participle with an object clause.' },
            { s: 'Elle travaille **en écoutant** de la musique.', n: 'The gerund of manner.' },
            { s: 'Les étudiants, **ayant fini** leurs examens, sont partis.', n: 'A participle clause.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Participle or adjective? Choose.', items: [
            { q: 'Cette histoire est ___.', o: ['passionnante', 'passionnant', 'passionnants'], why: 'An adjective agreeing with *histoire*: *passionnante*.' },
            { q: 'Les enfants, ___ jouer, sont restés dehors.', o: ['aimant', 'aimante', 'aimants'], why: 'A participle never changes.' },
            { q: 'Un argument ___.', o: ['convaincant', 'convainquant', 'convaincante'], why: 'The adjective: *convaincant*.' },
            { q: 'Deux idées ___.', o: ['différentes', 'différantes', 'différents'], why: 'The adjective: *différentes*, feminine plural.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the participle or the adjective.', items: [
            { q: 'Ce travail est très ___. (fatiguer)', a: ['fatigant'], why: 'The adjective: *fatigant*.' },
            { q: 'Les arguments ___ ont été acceptés. (convaincre)', a: ['convaincants'], why: 'The adjective, plural: *convaincants*.' },
            { q: '___ qu’il pleuvait, nous sommes rentrés. (voir)', a: ['Voyant'], why: 'The participle *voyant*.' },
            { q: 'La semaine ___, il a plu. (précéder)', a: ['précédente', 'precedente'], why: 'The adjective: *précédente*.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Le participe présent s’accorde avec le nom.', a: 'f', why: 'It never agrees.' },
            { q: 'Un adjectif verbal s’accorde avec le nom.', a: 't', why: 'It agrees in gender and number.' },
            { q: '« Fatiguant » et « fatigant » s’écrivent de la même façon.', a: 'f', why: '*fatigant* (adjective) and *fatiguant* (participle).' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with a present participle.', items: [
            { q: 'Comme il voyait qu’il pleuvait, il a pris son parapluie.', cue: 'Voyant', a: ['Voyant qu’il pleuvait, il a pris son parapluie.'], why: '*voyant* replaces *comme il voyait*.' },
            { q: 'Parce qu’elle voulait réussir, elle a travaillé dur.', cue: 'Voulant', a: ['Voulant réussir, elle a travaillé dur.'], why: '*voulant* replaces *parce qu’elle voulait*.' },
            { q: 'Il marche et il écoute de la musique.', cue: 'Il marche', a: ['Il marche en écoutant de la musique.'], why: 'The gerund for two actions.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Cette histoire est [passionnant].', a: ['passionnante'], why: 'An adjective: it agrees with *histoire*.' },
            { s: 'Les étudiants, [ayants] fini, sont partis.', a: ['ayant'], why: 'A participle never agrees.' },
            { s: 'Un travail [fatiguant].', a: ['fatigant'], why: 'The adjective is spelled *fatigant*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'La fonte des glaces',
      about: 'Explain causes, effects and processes with nouns and passive forms.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Scientific and formal texts like **nouns made from verbs**: *les glaces fondent* becomes *la fonte des glaces*, *les espèces disparaissent* becomes *la disparition des espèces*. This **nominalisation** makes the sentence shorter and more abstract. To explain **cause and effect**, use verbs such as **provoquer**, **entraîner**, **causer**, **résulter de**, **être dû à**: *La hausse de la température provoque la fonte des glaces. La disparition de certaines espèces est due à la pollution.*' },
          { t: 'table', caption: 'Verbs and nouns', explain: ['head', 'col2'], head: ['Sentence', 'Nominal form', 'Meaning'], rows: [
            ['Les glaces fondent.', 'la fonte des glaces', 'the melting of the ice'],
            ['Les espèces disparaissent.', 'la disparition des espèces', 'the disappearance of species'],
            ['La température augmente.', 'l’augmentation de la température', 'the rise in temperature'],
            ['On détruit les forêts.', 'la destruction des forêts', 'the destruction of forests'],
            ['On protège la nature.', 'la protection de la nature', 'the protection of nature'],
          ] },
          { t: 'tip', art: 'owl', md: 'Cause and effect verbs: **provoquer** and **entraîner** put the cause first (*La pollution provoque des maladies*); **être dû à** and **résulter de** put the effect first (*Les maladies sont dues à la pollution*). **Parce que** is not used in scientific titles; the noun phrase is shorter: *la disparition des espèces due à la pollution.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'La hausse de la température **provoque** la fonte des glaces.', n: 'Cause → effect.' },
            { s: 'La pollution **entraîne** la disparition de certaines espèces.', n: 'Cause → effect.' },
            { s: 'La disparition de certaines espèces **est due à** la pollution.', n: 'Effect → cause.' },
            { s: 'Ce phénomène **résulte de** l’activité humaine.', n: 'Effect → cause.' },
            { s: 'D’abord, on récolte les échantillons ; **ensuite**, on les analyse.', n: 'Describing a process with *on*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite with a noun phrase.', items: [
            { q: 'Les glaces fondent.', cue: 'La fonte', a: ['La fonte des glaces.'], why: '*fondre* → *la fonte*.' },
            { q: 'On détruit les forêts.', cue: 'La destruction', a: ['La destruction des forêts.'], why: '*détruire* → *la destruction*.' },
            { q: 'Les espèces disparaissent.', cue: 'La disparition', a: ['La disparition des espèces.'], why: '*disparaître* → *la disparition*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right verb.', items: [
            { q: 'La hausse de la température ___ la fonte des glaces.', o: ['provoque', 'est due à', 'résulte de'], why: 'Cause first, then effect: *provoque*.' },
            { q: 'La disparition des espèces ___ la pollution.', o: ['est due à', 'provoque', 'entraîne'], why: 'Effect first, then cause: *est due à*.' },
            { q: 'Ce phénomène ___ l’activité humaine.', o: ['résulte de', 'provoque', 'cause'], why: 'Effect first: *résulte de*.' },
            { q: 'La pollution ___ des maladies.', o: ['entraîne', 'est due à', 'résulte de'], why: 'Cause first: *entraîne*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'La pollution entraîne la disparition de certaines espèces.', why: 'Cause, verb, effect.' },
            { a: 'La disparition des espèces est due à la pollution.', why: 'Effect, *est due à*, cause.' },
            { a: 'D’abord on récolte les échantillons, ensuite on les analyse.', why: 'A process with *on*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Cause or effect?', groups: ['cause', 'effect'], explain: ['groups'], items: [
            { s: 'la hausse de la température', g: 0, why: 'It makes the ice melt.' },
            { s: 'la fonte des glaces', g: 1, why: 'The result of warming.' },
            { s: 'la pollution', g: 0, why: 'It makes species disappear.' },
            { s: 'la disparition des espèces', g: 1, why: 'The result of pollution.' },
            { s: 'l’activité humaine', g: 0, why: 'It is the origin of the phenomenon.' },
            { s: 'les maladies', g: 1, why: 'A result of pollution.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'La pollution [est due à] la disparition des espèces.', a: ['entraîne', 'provoque'], why: 'Pollution is the cause: *entraîne* or *provoque*.' },
            { s: 'La disparition des espèces [provoque] la pollution.', a: ['est due à'], why: 'The disappearance is the effect: *est due à* the pollution.' },
            { s: 'Les glaces [fonte] à cause de la chaleur.', a: ['fondent'], why: 'The verb *fondre*: *les glaces fondent*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un article et la description d’un graphique',
      about: 'Read a short scientific article and a chart description.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Pourquoi les glaces fondent', md: '**La fonte des glaces : un phénomène inquiétant**\nLa hausse de la température moyenne de la planète entraîne la fonte des glaces dans les régions polaires. Ce phénomène est dû en grande partie à l’activité humaine, qui rejette beaucoup de gaz dans l’atmosphère. La disparition progressive de la glace provoque à son tour une élévation du niveau des mers, ce qui menace les villes côtières.\n\nLes scientifiques, prévoyant des conséquences graves, recommandent de réduire les émissions de gaz. Un argument convaincant, selon eux : plus on agit tôt, plus les effets seront limités.' },
          { t: 'reading', title: 'Décrire un graphique', md: '**Évolution de la fréquentation d’un musée (exemple)**\nDans cet exemple fictif, le nombre de visiteurs d’un musée est passé de mille à deux mille entre deux années, soit un doublement. La majorité des visiteurs viennent le week-end. En moyenne, environ un tiers des visiteurs sont des enfants. On observe une baisse en hiver, suivie d’une hausse au printemps.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La hausse de la température entraîne la fonte des glaces.', a: 't', why: '*La hausse … entraîne la fonte des glaces.*' },
            { q: 'Le phénomène est dû uniquement à des causes naturelles.', a: 'f', why: 'It is largely due to human activity.' },
            { q: 'La fonte de la glace provoque une élévation du niveau des mers.', a: 't', why: '*provoque … une élévation du niveau des mers*' },
            { q: 'Le niveau des mers monte de dix centimètres par an.', a: 'ng', why: 'The text gives no figure.' },
            { q: 'Dans l’exemple du musée, le nombre de visiteurs a doublé.', a: 't', why: '*est passé de mille à deux mille … un doublement*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Que recommandent les scientifiques ?', o: ['Réduire les émissions de gaz.', 'Construire plus de villes côtières.', 'Attendre.'], why: '*recommandent de réduire les émissions de gaz*' },
            { q: 'Quel argument les scientifiques jugent-ils convaincant ?', o: ['Plus on agit tôt, plus les effets seront limités.', 'La glace ne fond pas.', 'Il fait plus chaud en été.'], why: '*plus on agit tôt, plus les effets seront limités*' },
            { q: 'Quand le nombre de visiteurs baisse-t-il, dans l’exemple ?', o: ['En hiver.', 'Au printemps.', 'Le week-end.'], why: '*une baisse en hiver*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words of cause and effect in the article.', items: [
            { s: 'La hausse de la température [entraîne] la fonte des glaces.', why: '*entraîne* links a cause and an effect.' },
            { s: 'Ce phénomène est [dû à] l’activité humaine.', why: '*dû à* links an effect to its cause.' },
            { s: 'La disparition de la glace [provoque] une élévation du niveau des mers.', why: '*provoque* links a cause and an effect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Les glaces fondent à cause de la ___ de la température.', a: ['hausse'], why: '*La hausse de la température*' },
            { q: 'En ___, environ un tiers des visiteurs sont des enfants.', a: ['moyenne'], why: '*en moyenne*' },
            { q: 'Les scientifiques, ___ des conséquences graves, recommandent d’agir. (prévoir)', a: ['prévoyant', 'prevoyant'], why: 'The present participle *prévoyant*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Le nombre est passé ___ mille à deux mille.', o: ['de', 'à', 'en'], why: '*passer de … à …*' },
      { q: 'La pollution ___ la disparition des espèces.', o: ['entraîne', 'est due à', 'résulte de'], why: 'Cause first: *entraîne*.' },
      { q: 'Cette histoire est ___.', o: ['passionnante', 'passionnant', 'passionnantes'], why: 'An adjective agreeing with *histoire*.' },
      { q: 'Les enfants, ___ jouer, restent dehors.', o: ['aimant', 'aimante', 'aimants'], why: 'A participle never changes.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'On observe une hausse ___ dix pour cent.', a: ['de'], why: 'The size of the change.' },
      { q: 'Les glaces fondent : la ___ des glaces.', a: ['fonte'], why: '*fondre* → *la fonte*.' },
      { q: 'La disparition des espèces est ___ à la pollution.', a: ['due'], why: '*est due à*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the meaning.', pairs: [
      ['la moitié', 'half'],
      ['un tiers', 'a third'],
      ['en moyenne', 'on average'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite with a noun phrase.', items: [
      { q: 'On détruit les forêts.', cue: 'La destruction', a: ['La destruction des forêts.'], why: '*détruire* → *la destruction*.' },
      { q: 'Comme il voyait qu’il pleuvait, il a pris son parapluie.', cue: 'Voyant', a: ['Voyant qu’il pleuvait, il a pris son parapluie.'], why: 'A present participle.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'La disparition des espèces est due à la pollution.', why: 'Effect, *est due à*, cause.' },
      { a: 'On observe une hausse de dix pour cent.', why: '*une hausse de* + amount.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Cette histoire est [passionnant].', a: ['passionnante'], why: 'The adjective agrees.' },
    ] },
  ],
};
