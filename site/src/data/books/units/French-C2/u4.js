// French C2, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Academic and critical writing',
  goal: 'Take a measured, evidence-based stance in academic writing. Learn hedging and boosting, nominal style and reporting verbs, and critical evaluation with signposting.',
  art: 'owl',
  tags: { skills: ['writing', 'reading', 'vocabulary'], topics: ['hedging', 'boosting', 'reporting verbs', 'nominal style', 'critical evaluation', 'signposting'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Il semblerait que, sans conteste',
      about: 'Hedge and boost claims to show exactly how sure you are.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Academic writers rarely say that something is simply true. They show **how sure** they are. **Hedges** make a claim less certain: *il semblerait que*, *dans une certaine mesure*, *tend à*, *vraisemblablement*, *apparemment*, *peut*, *sembler*. **Boosters** make it stronger: *sans conteste*, *indéniablement*, *de toute évidence*, *il est clair que*. The **conditional** is a classic hedge in French: *Il semblerait que les données confirment cette hypothèse.* **Soi-disant** and **prétendument** mean *so-called, allegedly* and show doubt.' },
          { t: 'table', caption: 'Hedges and boosters', explain: ['head', 'col0'], head: ['Function', 'Examples', 'Sample sentence'], rows: [
            ['hedge: possibility', 'il semblerait que, peut, sembler', 'Les données semblent confirmer cette thèse.'],
            ['hedge: frequency or degree', 'tend à, dans une certaine mesure', 'Les prix tendent à monter en été.'],
            ['hedge: probability', 'vraisemblablement, apparemment', 'Il est vraisemblablement parti.'],
            ['hedge: doubt about truth', 'prétendument, soi-disant', 'Cette visite était prétendument privée.'],
            ['booster', 'sans conteste, indéniablement, de toute évidence', 'Les résultats sont indéniablement significatifs.'],
          ] },
        ],
        [
          { t: 'text', md: 'Too many hedges make you sound unsure; too many boosters make you sound arrogant. A strong paragraph balances them. Weak: *Il est indéniable que tous les étudiants préfèrent les cours en ligne.* Measured: *L’enquête suggère que de nombreux étudiants préfèrent les cours en ligne, bien que cela puisse varier selon la discipline.* Notice **suggère**, **de nombreux** and **puisse**: three small hedges that make the claim defensible.' },
          { t: 'tip', art: 'owl', md: 'Be careful with absolute words: *tous, toujours, jamais, prouve, impossible*. They are almost always too strong in academic writing. Replace them: *tous → la plupart / de nombreux*; *toujours → souvent / tend à*; *prouve → suggère / indique*.' },
          { t: 'ex', kind: 'transform', h: 'Make the claim more cautious, using the word given.', items: [
            { q: 'Les réseaux sociaux causent de l’anxiété chez les adolescents.', cue: 'peuvent', a: ['Les réseaux sociaux peuvent causer de l’anxiété chez les adolescents.'], why: 'The hedge *peuvent* reduces certainty.' },
            { q: 'L’étude prouve que le sport améliore la mémoire.', cue: 'suggère', a: ['L’étude suggère que le sport améliore la mémoire.'], why: '*Suggère* is weaker than *prouve*.' },
            { q: 'Tous les jeunes préfèrent les messages écrits.', cue: 'tendent', a: ['Les jeunes tendent à préférer les messages écrits.'], why: '*Tendre à* hedges frequency.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
            { q: 'La loi a été ___ introduite pour protéger les salariés, mais ses détracteurs y voient un avantage pour les employeurs.', o: ['prétendument', 'indéniablement', 'sans conteste'], why: '*Prétendument*: as claimed, but perhaps not true.' },
            { q: 'Les preuves vont ___ dans le sens du nouveau traitement : les quatre essais concordent.', o: ['indéniablement', 'vraisemblablement', 'soi-disant'], why: 'A strong booster fits strong evidence.' },
            { q: 'Ce roman est ___ le plus influent de la décennie, même si certains s’y opposeraient.', o: ['sans doute', 'indéniablement', 'de toute évidence'], why: '*Sans doute* hedges an opinion.' },
            { q: 'Il ___ que les chiffres confirment cette hypothèse.', o: ['semblerait', 'est certain', 'est démontré'], why: 'The conditional *semblerait* is a classic hedge.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Hedge or booster?', groups: ['hedge', 'booster'], explain: ['groups'], items: [
            { s: 'tend à', g: 0, why: 'A hedge for frequency.' },
            { s: 'indéniablement', g: 1, why: 'A booster.' },
            { s: 'il semblerait que', g: 0, why: 'A hedge.' },
            { s: 'de toute évidence', g: 1, why: 'A booster.' },
            { s: 'dans une certaine mesure', g: 0, why: 'A hedge for degree.' },
            { s: 'sans conteste', g: 1, why: 'A booster.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Soutenir, objecter, concéder',
      about: 'Use nominal style and precise reporting verbs.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Academic French packs information into **noun phrases**. Instead of *De plus en plus de gens travaillent à domicile, et c’est important*, a writer might say *le nombre croissant de personnes travaillant à domicile* or *l’essor du télétravail*. Useful frames: *l’ampleur de…*, *un nombre croissant de…*, *l’absence de…*, *les implications de…*, *un faisceau d’indices*. The noun phrase can be the subject: *Un faisceau d’indices suggère que…*' },
          { t: 'examples', items: [
            { s: '**L’ampleur** de l’effet des écrans sur le sommeil reste incertaine.', n: 'A noun phrase as subject, then *reste incertaine*.' },
            { s: '**Un nombre croissant** d’études suggèrent que le bilinguisme favorise la concentration.', n: 'Impersonal and academic.' },
            { s: '**L’absence** de financement a ralenti le projet.', n: 'A noun phrase replacing *il n’y a pas de financement*.' },
          ] },
        ],
        [
          { t: 'text', md: 'To refer to other writers, choose a **reporting verb** that shows their stance. **Affirmer**, **suggérer** and **indiquer** are neutral. **Soutenir** and **maintenir** show a firm position. **Avancer** means *put forward* an idea. **Concéder** means *admit reluctantly*. **Objecter**, **contester** and **réfuter** show disagreement. **Prétendre** shows doubt: the claim is not accepted. Use the **present** for what an author says (*L’auteur soutient que…*) and the **passé composé** or **imparfait** for what a study did (*Les chercheurs ont constaté que…*).' },
          { t: 'table', caption: 'Reporting verbs', explain: ['head', 'col0'], head: ['Verb', 'What it shows', 'Example'], rows: [
            ['affirmer / suggérer', 'neutral', 'L’auteur affirme que les villes doivent réduire la circulation.'],
            ['soutenir / maintenir', 'firm position', 'Elle soutient que cette politique a échoué.'],
            ['avancer', 'puts forward an idea', 'Cette théorie avance que la mémoire est reconstruite.'],
            ['concéder', 'admits reluctantly', 'L’auteur concède que l’échantillon était réduit.'],
            ['objecter / contester', 'disagrees', 'Plusieurs spécialistes contestent ces chiffres.'],
            ['prétendre', 'doubt about the truth', 'Le rapport prétend que des fonds ont été détournés.'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Use **prétendre** only to signal doubt. In English, *to pretend* means *to feign*; in French, **prétendre que** means *to claim that*, often with doubt, and **faire semblant** means *to pretend*. In academic writing, **affirmer** and **suggérer** are the safest choices when you are not sure of an author’s strength of feeling.' },
          { t: 'ex', kind: 'choice', h: 'Choose the best reporting verb.', items: [
            { q: 'L’auteur ___ que l’expérience était trop courte pour tirer des conclusions fermes.', o: ['concède', 'prétend', 'conteste'], why: '*Concéder*: admit reluctantly, against the writer’s own case.' },
            { q: 'Cette théorie ___ que le langage s’apprend par imitation.', o: ['avance', 'concède', 'conteste'], why: '*Avancer*: put forward.' },
            { q: 'Plusieurs spécialistes ___ l’exactitude des chiffres.', o: ['contestent', 'avancent', 'maintiennent'], why: '*Contester*: disagree with.' },
            { q: 'Le journal ___ que le ministre a touché des pots-de-vin, mais aucune preuve n’a été produite.', o: ['prétend', 'soutient', 'concède'], why: '*Prétendre*: claim without proof.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with a noun phrase, starting with the words given.', items: [
            { q: 'De plus en plus de gens vont au travail à vélo, et c’est important.', cue: 'Le nombre croissant', a: ['Le nombre croissant de personnes allant au travail à vélo est important.', 'Le nombre croissant de gens allant au travail à vélo est important.'], why: 'A noun phrase as subject.' },
            { q: 'Il n’y a pas assez de financement, donc le projet a ralenti.', cue: 'Le manque', a: ['Le manque de financement a ralenti le projet.'], why: '*Le manque de* + noun.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'Un ___ d’indices suggère que le sommeil influence la mémoire.', a: ['faisceau'], why: '*Un faisceau d’indices*.' },
            { q: 'L’___ de l’effet des écrans sur le sommeil reste incertaine.', a: ['ampleur'], why: '*L’ampleur de*.' },
            { q: 'Le journal ___ que le ministre a menti, sans preuve.', a: ['prétend'], why: '*Prétendre* signals doubt.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Atouts et limites',
      about: 'Evaluate a piece of research and signpost your argument.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'A critical writer does not only describe; they **evaluate**. For any study, ask: what is its **atout** (strength), and what are its **limites** (limitations)? Typical strengths: *un échantillon large et varié*, *une méthode claire*, *des résultats qui concordent avec d’autres études*. Typical limitations: *un échantillon réduit ou homogène*, *une période courte*, *des données déclaratives*, *une conclusion qui va plus loin que les données*. Useful phrases: *L’un des atouts de l’étude est…*, *Une limite notable est que…*, *Ces résultats ne peuvent pas être généralisés à…*.' },
          { t: 'examples', items: [
            { s: '**L’un des atouts** de l’étude est son échantillon large et varié.', n: 'A positive evaluation.' },
            { s: '**Une limite notable** est que les données sont déclaratives.', n: 'A negative evaluation.' },
            { s: 'Ces résultats **ne peuvent pas être généralisés** aux personnes âgées.', n: 'The sample did not include them.' },
          ] },
        ],
        [
          { t: 'text', md: '**Signposting** tells the reader where the argument is going. To contrast: *alors que*, *en revanche*, *par contre* (informal), *néanmoins*. To draw a conclusion: *il s’ensuit que*, *dès lors*, *force est de constater que*. To add: *en outre*, *par ailleurs*. To concede and then argue: *certes… néanmoins…*. These words are the grammar of an argument; without them, a paragraph is a list of facts.' },
          { t: 'table', caption: 'Signposting', explain: ['head', 'col0'], head: ['Function', 'Phrases', 'Example'], rows: [
            ['contrast', 'alors que, en revanche, néanmoins', 'La première étude a trouvé un lien, alors que la seconde n’en a pas trouvé.'],
            ['conclusion', 'il s’ensuit que, dès lors, force est de constater que', 'Il s’ensuit que la politique doit être révisée.'],
            ['addition', 'en outre, par ailleurs', 'En outre, l’échantillon était réduit.'],
            ['concession', 'certes… néanmoins…', 'Certes, l’échantillon était réduit ; néanmoins, la tendance est nette.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Strength or limitation?', groups: ['strength', 'limitation'], explain: ['groups'], items: [
            { s: 'L’échantillon comptait 5 000 participants de douze pays.', g: 0, why: 'A large and varied sample.' },
            { s: 'Tous les participants étaient des étudiants.', g: 1, why: 'A narrow sample.' },
            { s: 'Les résultats concordent avec ceux de trois études antérieures.', g: 0, why: 'Consistency with earlier research.' },
            { s: 'L’étude n’a duré que deux semaines.', g: 1, why: 'A short time period.' },
            { s: 'Les données proviennent de questionnaires remplis par les participants.', g: 1, why: 'Self-reporting can be unreliable.' },
            { s: 'Les chercheurs ont décrit leur méthode en détail.', g: 0, why: 'A clear method.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best signpost.', items: [
            { q: 'La première étude a trouvé un lien net ; ___, la seconde n’en a trouvé aucun.', o: ['en revanche', 'en outre', 'il s’ensuit que'], why: 'Contrast between the studies.' },
            { q: '___, l’échantillon était réduit ; néanmoins, la tendance est nette.', o: ['Certes', 'En outre', 'Dès lors'], why: '*Certes… néanmoins…* concedes, then counters.' },
            { q: 'Les données viennent de deux pays ; ___, les conclusions risquent de ne pas s’appliquer ailleurs.', o: ['dès lors', 'en revanche', 'alors que'], why: 'A logical conclusion.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the sentences with the signpost given.', items: [
            { q: 'La première étude a trouvé un lien. La seconde n’en a pas trouvé.', cue: 'alors que', a: ['La première étude a trouvé un lien, alors que la seconde n’en a pas trouvé.', 'La première étude a trouvé un lien alors que la seconde n’en a pas trouvé.'], why: '*Alors que* links two contrasting clauses.' },
            { q: 'L’échantillon était réduit. La tendance était nette.', cue: 'Certes', a: ['Certes, l’échantillon était réduit ; néanmoins, la tendance était nette.', 'Certes, l’échantillon était réduit, mais la tendance était nette.'], why: 'Concession then counter-point.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Le télétravail : que sait-on ?',
      about: 'Read an extract from a literature review and identify stance, hedging and evaluation.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Le télétravail : que sait-on ?', md: 'Un faisceau d’indices suggère que le télétravail a transformé l’organisation des journées de nombreux salariés. L’ampleur de ses effets sur la productivité reste toutefois discutée.\n\nUne première étude soutenait que les salariés travaillant à domicile étaient plus productifs, prétendument parce qu’ils étaient moins interrompus. Une étude plus récente, en revanche, a constaté une baisse de productivité pour les tâches exigeant un travail d’équipe étroit. Les deux études ont des limites : le premier échantillon provenait d’une seule entreprise, alors que la seconde reposait sur les estimations des salariés eux-mêmes.\n\nPlusieurs chercheurs concèdent que les données sont incomplètes. L’un avance que la variable décisive n’est pas le lieu mais la qualité du management, une lecture qui semblerait cohérente avec les éléments disponibles, bien qu’elle n’ait pas été testée directement. D’autres la contestent et objectent que la nature du travail compte davantage que la manière de le gérer.\n\nPris ensemble, ces travaux suggèrent que le télétravail tend à convenir aux tâches individuelles, mais que ses effets sur la créativité et la collaboration sont moins nets. Dès lors, les organisations devraient éviter les généralisations hâtives. Une limite notable de la littérature est la brièveté de la période observée ; de futures recherches pourraient donc suivre les mêmes salariés pendant plusieurs années.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'L’auteur affirme qu’il est certain que le télétravail améliore la productivité.', a: 'f', why: 'L’ampleur de ses effets « reste toutefois discutée ».' },
            { q: 'Une première étude suggérait que les salariés étaient plus productifs à domicile.', a: 't', why: '« Plus productifs. »' },
            { q: 'L’étude plus récente a constaté que toutes les tâches étaient moins bien accomplies à domicile.', a: 'f', why: 'Only « les tâches exigeant un travail d’équipe étroit ».' },
            { q: 'Un chercheur avance que la qualité du management est la variable décisive.', a: 't', why: '« L’un avance que la variable décisive… est la qualité du management. »' },
            { q: 'L’auteur recommande les généralisations hâtives.', a: 'f', why: '« Les organisations devraient éviter les généralisations hâtives. »' },
            { q: 'La première étude a été menée dans un hôpital.', a: 'ng', why: 'The text says only « une seule entreprise ».' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does « prétendument parce qu’ils étaient moins interrompus » suggest?', o: ['The reason is claimed, but may not be true.', 'The reason is certainly true.', 'The reason is unimportant.'], why: '*Prétendument*: allegedly.' },
            { q: 'What does « concèdent » show about the researchers?', o: ['They admit the data are incomplete.', 'They reject the data.', 'They collected the data.'], why: '*Concéder*: admit reluctantly.' },
            { q: 'What is the function of « en revanche » in the second paragraph?', o: ['It introduces a different finding.', 'It adds a similar finding.', 'It concludes the argument.'], why: 'Signposting a contrast between studies.' },
            { q: 'What limitation of the literature is named in the last paragraph?', o: ['A short observation period.', 'A small number of countries.', 'A lack of interest.'], why: '« La brièveté de la période observée. »' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the hedges.', items: [
            { s: 'Une lecture qui [semblerait] cohérente avec les éléments disponibles, bien qu’elle n’ait pas été testée directement.', why: 'A hedge: the conditional *semblerait*.' },
            { s: 'Le télétravail [tend à] convenir aux tâches individuelles.', why: 'A hedge for frequency.' },
            { s: 'Ces travaux [suggèrent] que ses effets sont [moins nets].', why: 'Hedged claims.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Un ___ d’indices suggère que le télétravail a transformé les journées.', a: ['faisceau'], why: '*Un faisceau d’indices*.' },
            { q: '___ lors, les organisations devraient éviter les généralisations hâtives.', a: ['Dès'], why: '*Dès lors* = therefore.' },
            { q: 'Le premier échantillon provenait d’une seule entreprise, ___ la seconde reposait sur les estimations des salariés.', a: ['alors que'], why: '*Alors que* contrasts two things.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'L’ampleur de ces effets sur la productivité reste discutée.', why: 'A noun phrase as subject.' },
            { a: 'Les deux études ont des limites que l’on ne peut ignorer.', why: 'Evaluation of research.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'Cette visite était ___ privée, mais c’était surtout une réunion d’affaires.', o: ['prétendument', 'indéniablement', 'sans conteste'], why: '*Prétendument*: allegedly.' },
      { q: 'L’auteur ___ que l’échantillon était trop réduit.', o: ['concède', 'prétend', 'conteste'], why: 'Admits reluctantly.' },
      { q: 'La première étude a trouvé un lien ; ___, la seconde n’en a pas trouvé.', o: ['en revanche', 'en outre', 'dès lors'], why: 'Contrast.' },
      { q: 'Un ___ d’indices suggère cette thèse.', o: ['faisceau', 'groupe', 'ensemble de'], why: '*Un faisceau d’indices*.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Hedge or booster?', groups: ['hedge', 'booster'], explain: ['groups'], items: [
      { s: 'tend à', g: 0, why: 'Hedge.' },
      { s: 'indéniablement', g: 1, why: 'Booster.' },
      { s: 'il semblerait que', g: 0, why: 'Hedge.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'L’___ de l’effet des écrans sur le sommeil reste incertaine.', a: ['ampleur'], why: '*L’ampleur de*.' },
      { q: 'Ces résultats ne peuvent pas être ___ aux personnes âgées.', a: ['généralisés'], why: '*Généralisés à*.' },
      { q: '___, l’échantillon était réduit ; néanmoins, la tendance est nette.', a: ['Certes'], why: 'Concession and counter-point.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the word given.', items: [
      { q: 'L’étude prouve que le sport améliore la mémoire.', cue: 'suggère', a: ['L’étude suggère que le sport améliore la mémoire.'], why: '*Suggère* is weaker than *prouve*.' },
      { q: 'Il n’y a pas assez de financement, donc le projet a ralenti.', cue: 'Le manque', a: ['Le manque de financement a ralenti le projet.'], why: '*Le manque de* + noun.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the problem.', items: [
      { s: 'L’étude [prouve] que le sport améliore la mémoire, dans tous les cas.', a: ['suggère', 'indique'], why: 'Too strong for academic writing.' },
      { s: 'Le journal [concède] que le ministre a touché des pots-de-vin, mais il n’y a aucune preuve.', a: ['prétend', 'affirme'], why: '*Prétendre* signals doubt.' },
    ] },
  ],
};
