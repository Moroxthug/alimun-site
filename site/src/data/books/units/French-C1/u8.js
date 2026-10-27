// French C1, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Reporting, quoting and summarising',
  goal: 'Report what others say and summarise a text in your own words. Learn reporting verbs with nuance, the tenses of indirect speech, free indirect speech, expressions such as selon and aux dires de, and how to write a résumé.',
  art: 'croissant',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['reported speech', 'reporting verbs', 'quoting', 'summary', 'nominalisation'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Les verbes du discours rapporté',
      about: 'Choose a reporting verb with the right nuance and change the tenses of indirect speech.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'The verb **dire** is neutral. A more precise verb tells the reader **how** to take the words. **Affirmer** states something as a fact. **Soutenir** means to maintain a position. **Prétendre** reports a claim that the writer **doubts**. **Reconnaître** and **admettre** show that the speaker agrees reluctantly. **Souligner** and **préciser** stress or add a detail. **Déplorer** shows regret. **Nier** means to deny: *Il nie avoir menti.* After **déplorer que** and **nier que**, use the **subjunctive**: *Le maire déplore que les travaux aient pris du retard.*' },
          { t: 'table', caption: 'Reporting verbs', explain: ['head', 'col1'], head: ['Verb', 'Nuance', 'Example'], rows: [
            ['affirmer', 'states as a fact', 'Il affirme que le projet est sûr.'],
            ['soutenir', 'maintains a position', 'Elle soutient que la méthode fonctionne.'],
            ['prétendre', 'claims, with doubt', 'Il prétend ne rien savoir.'],
            ['reconnaître', 'admits', 'Il reconnaît qu’il s’est trompé.'],
            ['souligner', 'stresses', 'Elle souligne que le délai est court.'],
            ['déplorer', 'regrets', 'Le maire déplore que les travaux aient pris du retard.'],
            ['nier', 'denies', 'Il nie avoir menti.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In **indirect speech**, when the reporting verb is in the **past**, the tenses change: the **présent** becomes the **imparfait**, the **futur** becomes the **conditionnel**, the **passé composé** becomes the **plus-que-parfait**. Time words change too: *demain → le lendemain, hier → la veille, ici → là*. With a reporting verb in the **present**, nothing changes: *Il affirme que le projet est sûr.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Il **affirme** que le projet est sûr.', n: 'A fact.' },
            { s: 'Il **prétend** ne rien savoir.', n: 'A claim, with doubt.' },
            { s: 'Il **reconnaît** qu’il s’est trompé.', n: 'He admits it.' },
            { s: 'Il a dit qu’il **venait**.', n: 'Direct: *Je viens.*' },
            { s: 'Elle a dit qu’elle **viendrait le lendemain**.', n: 'Direct: *Je viendrai demain.*' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the verb with its nuance.', pairs: [
            ['affirmer', 'to state as a fact'],
            ['prétendre', 'to claim, with doubt'],
            ['souligner', 'to stress'],
            ['déplorer', 'to regret'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Il ___ ne rien savoir. (prétendre)', a: ['prétend'], why: '*Prétendre* in the present.' },
            { q: 'Il ___ qu’il s’est trompé. (reconnaître)', a: ['reconnaît'], why: '*Reconnaître* in the present.' },
            { q: 'Elle ___ que le délai est court. (souligner)', a: ['souligne'], why: '*Souligner* in the present.' },
            { q: 'Le maire déplore que les travaux ___ pris du retard. (avoir, subjonctif)', a: ['aient'], why: '*Déplorer que* + subjunctive.' },
            { q: 'Il ___ avoir menti. (nier)', a: ['nie'], why: '*Nier* + infinitive.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right verb.', items: [
            { q: 'Il ___ ne rien savoir, mais personne ne le croit. (a claim, with doubt)', o: ['prétend', 'reconnaît', 'souligne'], why: '*Prétendre* shows doubt.' },
            { q: 'Il ___ qu’il s’est trompé. (he admits it)', o: ['reconnaît', 'prétend', 'nie'], why: '*Reconnaître* = to admit.' },
            { q: 'Elle ___ que le délai est très court. (she stresses it)', o: ['souligne', 'nie', 'déplore'], why: '*Souligner* = to stress.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Report the sentence. Begin with the words in brackets.', items: [
            { q: 'Il dit : « Je viens. »', cue: 'Il a dit', a: ['Il a dit qu’il venait.', "Il a dit qu'il venait."], why: 'The présent becomes the imparfait.' },
            { q: 'Elle dit : « Je viendrai demain. »', cue: 'Elle a dit', a: ['Elle a dit qu’elle viendrait le lendemain.', "Elle a dit qu'elle viendrait le lendemain."], why: 'The futur becomes the conditionnel; *demain* becomes *le lendemain*.' },
            { q: 'Il dit : « Je suis venu hier. »', cue: 'Il a dit', a: ['Il a dit qu’il était venu la veille.', "Il a dit qu'il était venu la veille."], why: 'The passé composé becomes the plus-que-parfait; *hier* becomes *la veille*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Il a dit qu’il [vient].', a: ['venait'], why: 'After a past reporting verb: imparfait.' },
            { s: 'Le maire déplore que les travaux [ont] pris du retard.', a: ['aient'], why: '*Déplorer que* + subjunctive.' },
            { s: 'Elle a dit qu’elle viendrait [demain].', a: ['le lendemain'], why: 'In indirect speech: *le lendemain*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il a dit qu’il venait le lendemain.', why: 'The reported speech with the imparfait.' },
            { a: 'Il prétend ne rien savoir de cette affaire.', why: '*Prétendre* + infinitive.' },
            { a: 'Le maire déplore que les travaux aient pris du retard.', why: '*Déplorer que* + subjunctive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Citer et rapporter librement',
      about: 'Quote a source and use free indirect speech.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'To give the **source** of a statement, use **selon** or **d’après** + a noun or a pronoun: *Selon le ministre, le projet est sûr. D’après le rapport, la situation s’améliore. Selon moi, il a tort.* More formal choices are **aux dires de** (according to what was said by) and **de l’avis de** (in the opinion of): *Aux dires des témoins, il roulait trop vite.* **À en croire** means *if one believes*: *À en croire la presse, tout va bien.* In **free indirect speech**, you give a character’s thoughts **without *que* and without a reporting verb**, in the tense of the narrative: *Il hésita. Fallait-il lui dire la vérité ? Non, c’était trop tôt.*' },
          { t: 'table', caption: 'Sources and free indirect speech', explain: ['head', 'col1'], head: ['Expression', 'Meaning', 'Example'], rows: [
            ['selon / d’après', 'according to', 'Selon le ministre, le projet est sûr.'],
            ['aux dires de', 'according to the statements of', 'Aux dires des témoins, il roulait trop vite.'],
            ['de l’avis de', 'in the opinion of', 'De l’avis des experts, le risque est faible.'],
            ['à en croire', 'if one believes', 'À en croire la presse, tout va bien.'],
            ['discours indirect libre', 'the thoughts, with no *que*', 'Il hésita. Fallait-il lui dire la vérité ?'],
          ] },
          { t: 'tip', art: 'owl', md: 'Say **selon moi** or **d’après moi**, never *selon que moi*. **Selon que** + clause means *depending on whether*: *Selon que vous êtes riche ou pauvre …* **Free indirect speech** is common in novels, where it mixes the voice of the narrator with the thoughts of a character. You recognise it by the **questions and exclamations** in the narrative tense and by the **absence of quotation marks**.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Selon** le ministre, le projet est sûr.', n: 'A source.' },
            { s: '**D’après** le rapport, la situation s’améliore.', n: 'A source.' },
            { s: '**Aux dires des** témoins, il roulait trop vite.', n: 'A source, more formal.' },
            { s: '**À en croire** la presse, tout va bien.', n: 'With a slight doubt.' },
            { s: 'Il hésita. **Fallait-il** lui dire la vérité ?', n: 'Free indirect speech.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which kind of speech is it? Sort the sentences.', groups: ['direct speech', 'indirect speech', 'free indirect speech'], explain: ['groups'], items: [
            { s: 'Elle a dit : « Je pars. »', g: 0, why: 'The words are in quotation marks.' },
            { s: 'Elle a dit qu’elle partait.', g: 1, why: 'A *que* clause with changed tenses.' },
            { s: 'Elle regarda sa montre. Elle partait, c’était décidé.', g: 2, why: 'The thought in the narrative tense, with no *que*.' },
            { s: 'Il a demandé : « Où est-elle ? »', g: 0, why: 'The words are in quotation marks.' },
            { s: 'Il a demandé où elle était.', g: 1, why: 'An indirect question.' },
            { s: 'Il s’arrêta. Où était-elle donc passée ?', g: 2, why: 'The thought in the narrative tense.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ le ministre, le projet est sûr.', a: ['Selon', 'D’après', "D'après"], why: '*Selon* or *d’après* gives the source.' },
            { q: 'Aux ___ des témoins, il roulait trop vite.', a: ['dires'], why: '*Aux dires de*.' },
            { q: 'De l’___ des experts, le risque est faible.', a: ['avis'], why: '*De l’avis de*.' },
            { q: 'À en ___ la presse, tout va bien.', a: ['croire'], why: '*À en croire*.' },
            { q: 'Selon ___, il a tort. (according to me)', a: ['moi'], why: '*Selon moi*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best expression.', items: [
            { q: '___ le rapport, la situation s’améliore.', o: ['D’après', 'Selon que', 'Quant à'], why: '*D’après* gives the source.' },
            { q: 'You report a statement but you doubt it. You write:', o: ['À en croire la presse, tout va bien.', 'Il est vrai que tout va bien.', 'Je sais que tout va bien.'], why: '*À en croire* shows a slight doubt.' },
            { q: 'In free indirect speech you write:', o: ['Il hésita. Fallait-il lui dire la vérité ?', 'Il hésita : « Faut-il lui dire la vérité ? »', 'Il hésita et dit qu’il fallait lui dire la vérité.'], why: 'No quotation marks and no *que*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Give the source with the words in brackets.', items: [
            { q: 'Le projet est sûr, dit le ministre.', cue: 'Selon', a: ['Selon le ministre, le projet est sûr.'], why: '*Selon* + noun.' },
            { q: 'La situation s’améliore, dit le rapport.', cue: 'D’après', a: ['D’après le rapport, la situation s’améliore.', "D'après le rapport, la situation s'améliore."], why: '*D’après* + noun.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '[Selon que] le ministre, le projet est sûr.', a: ['Selon'], why: '*Selon que* means *depending on whether*.' },
            { s: 'Aux [dits] des témoins, il roulait trop vite.', a: ['dires'], why: '*Aux dires de*.' },
            { s: 'À en [croyant] la presse, tout va bien.', a: ['croire'], why: '*À en croire*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Selon le ministre, le projet est sûr.', why: '*Selon* + noun, then the clause.' },
            { a: 'Aux dires des témoins, il roulait trop vite.', why: '*Aux dires de* + noun.' },
            { a: 'À en croire la presse, tout va bien.', why: '*À en croire* + noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Résumer un texte',
      about: 'Summarise a text with nouns, shorter sentences and your own words.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A **résumé** keeps the **main ideas** of a text, in a **shorter** form and in **your own words**. You do not copy, you do not add your opinion, and you follow the **order of the ideas**. Three techniques help. First, **nominalise**: replace a clause with a noun phrase, as in *Les prix ont augmenté* → *la hausse des prix*. Second, **combine** sentences with a connector. Third, **remove examples** and details. Use the present tense, and begin with a verb such as **L’auteur affirme que**, **Le texte montre que** or **Selon l’auteur**.' },
          { t: 'table', caption: 'From text to summary', explain: ['head'], head: ['In the text', 'In the summary'], rows: [
            ['Les prix ont beaucoup augmenté et les gens ont du mal à payer leurs factures.', 'La hausse des prix rend les factures difficiles à payer.'],
            ['Beaucoup de jeunes quittent leur village parce qu’il n’y a pas de travail.', 'Le manque d’emploi provoque l’exode des jeunes.'],
            ['Les villes ont construit de nouvelles lignes de tramway pour réduire la pollution.', 'La construction de lignes de tramway vise à réduire la pollution.'],
          ] },
          { t: 'tip', art: 'owl', md: 'A **résumé** follows a text and keeps one text; a **synthèse** combines **several** texts on the same topic. A good summary is about **a quarter** of the original, or the length you are given. Check it with three questions: *Did I keep the main ideas? Did I use my own words? Is it in the same order?* Do not start with *Dans ce texte, l’auteur dit que* for every sentence; vary your verbs.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**La hausse** des prix rend les factures difficiles à payer.', n: '*Augmenter* → *la hausse*.' },
            { s: '**Le manque d’emploi** provoque **l’exode** des jeunes.', n: 'Nouns in place of clauses.' },
            { s: '**La construction** de lignes de tramway vise à réduire la pollution.', n: '*Construire* → *la construction*.' },
            { s: '**L’auteur affirme** que le télétravail s’installe.', n: 'A reporting verb.' },
            { s: '**Le texte montre** que les avis divergent.', n: 'Another way to begin.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the verb with its noun.', pairs: [
            ['augmenter', 'la hausse'],
            ['construire', 'la construction'],
            ['partir', 'le départ'],
            ['diminuer', 'la baisse'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'La ___ des prix rend les factures difficiles à payer. (augmenter)', a: ['hausse'], why: '*Augmenter* → *la hausse*.' },
            { q: 'La ___ de lignes de tramway vise à réduire la pollution. (construire)', a: ['construction'], why: '*Construire* → *la construction*.' },
            { q: 'Le ___ d’emploi provoque l’exode des jeunes. (manquer)', a: ['manque'], why: '*Manquer* → *le manque*.' },
            { q: 'L’___ affirme que le télétravail s’installe.', a: ['auteur'], why: '*L’auteur affirme que*.' },
            { q: 'Le texte ___ que les avis divergent. (montrer)', a: ['montre'], why: '*Le texte montre que*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best summary.', items: [
            { q: 'Text: « Les prix ont beaucoup augmenté et les gens ont du mal à payer leurs factures. »', o: ['La hausse des prix rend les factures difficiles à payer.', 'Les prix ont beaucoup augmenté et les gens ont du mal à payer leurs factures.', 'Je pense que les prix sont trop élevés.'], why: 'A good summary uses nouns and your own words, with no opinion.' },
            { q: 'A good summary …', o: ['keeps the main ideas in your own words', 'copies the text', 'adds your opinion'], why: 'A summary keeps the ideas, not the words.' },
            { q: 'Which verb begins a summary?', o: ['L’auteur affirme que …', 'Moi, je pense que …', 'Il était une fois …'], why: 'A reporting verb is the normal way to begin.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Write it as a noun phrase. Begin with the words in brackets.', items: [
            { q: 'Les prix ont augmenté.', cue: 'La hausse', a: ['La hausse des prix.'], why: '*Augmenter* → *la hausse des prix*.' },
            { q: 'Beaucoup de jeunes partent.', cue: 'L’exode', a: ['L’exode des jeunes.', "L'exode des jeunes."], why: 'The verb becomes a noun.' },
            { q: 'Le nombre de lecteurs diminue.', cue: 'La baisse', a: ['La baisse du nombre de lecteurs.'], why: '*Diminuer* → *la baisse*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'La [augmenter] des prix rend les factures difficiles à payer.', a: ['hausse'], why: 'We need the noun *la hausse*.' },
            { s: 'La [construire] de lignes de tramway vise à réduire la pollution.', a: ['construction'], why: 'We need the noun *la construction*.' },
            { s: 'L’auteur [affirmer] que le télétravail s’installe.', a: ['affirme'], why: 'A conjugated verb is needed.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'La hausse des prix rend les factures difficiles à payer.', why: 'A noun phrase as the subject.' },
            { a: 'Le manque d’emploi provoque l’exode des jeunes.', why: 'Two noun phrases.' },
            { a: 'L’auteur affirme que le télétravail s’installe.', why: 'A reporting verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un article et son résumé',
      about: 'Read a press article and its summary.',
      art: 'croissant',
      spreads: [
        [
          { t: 'reading', title: 'Les bibliothèques de quartier changent de visage', md: 'Les bibliothèques de quartier changent de visage. Selon une enquête récente, elles accueillent moins de lecteurs qu’avant, mais davantage d’habitants venus pour des ateliers, des rencontres ou simplement pour travailler au calme. La directrice d’une bibliothèque affirme que ces activités attirent un public nouveau.\n\nUn élu reconnaît que le budget reste insuffisant et déplore que plusieurs établissements aient dû réduire leurs horaires. Une association prétend que les ateliers gratuits sont menacés ; la mairie, elle, soutient qu’aucune suppression n’est prévue. Reste à savoir si le nouveau modèle trouvera son équilibre.\n\nRésumé : Les bibliothèques de quartier perdent des lecteurs mais gagnent un public nouveau grâce aux ateliers. Le budget insuffisant entraîne une réduction des horaires, et les avis divergent sur l’avenir des ateliers gratuits.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Les bibliothèques accueillent moins de lecteurs qu’avant.', a: 't', why: '*Elles accueillent moins de lecteurs qu’avant.*' },
            { q: 'La directrice affirme que les activités attirent un public nouveau.', a: 't', why: '*Affirme que ces activités attirent un public nouveau.*' },
            { q: 'Un élu pense que le budget est suffisant.', a: 'f', why: '*Reconnaît que le budget reste insuffisant.*' },
            { q: 'L’association prétend que les ateliers sont menacés.', a: 't', why: '*Prétend que les ateliers gratuits sont menacés.*' },
            { q: 'La mairie confirme la suppression des ateliers.', a: 'f', why: '*Soutient qu’aucune suppression n’est prévue.*' },
            { q: 'Le résumé donne l’opinion personnelle de l’auteur.', a: 'f', why: 'A summary keeps the facts and the views of the speakers, not your own opinion.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Que reconnaît l’élu ?', o: ['Que le budget reste insuffisant.', 'Que les ateliers coûtent trop cher.', 'Que le public a disparu.'], why: '*Reconnaît que le budget reste insuffisant.*' },
            { q: 'Que soutient la mairie ?', o: ['Qu’aucune suppression n’est prévue.', 'Que les ateliers seront payants.', 'Que les horaires vont s’allonger.'], why: '*Soutient qu’aucune suppression n’est prévue.*' },
            { q: 'Quelle phrase résume le mieux le texte ?', o: ['Les bibliothèques changent : moins de lecteurs, mais un public nouveau.', 'Les bibliothèques ferment.', 'Un élu pense que tout va bien.'], why: 'It keeps the main idea.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the reporting verbs.', items: [
            { s: 'La directrice [affirme] que ces activités attirent un public nouveau. Un élu [reconnaît] que le budget reste insuffisant.', why: '*Affirmer* and *reconnaître*.' },
            { s: 'Il [déplore] que plusieurs établissements aient réduit leurs horaires. Une association [prétend] que les ateliers sont menacés ; la mairie [soutient] le contraire.', why: '*Déplorer*, *prétendre* and *soutenir*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'La directrice ___ que ces activités attirent un public nouveau. (affirmer)', a: ['affirme'], why: '*Affirmer* in the present.' },
            { q: 'Un élu déplore que plusieurs établissements ___ dû réduire leurs horaires. (avoir, subjonctif)', a: ['aient'], why: '*Déplorer que* + subjunctive.' },
            { q: 'Selon une enquête ___, elles accueillent moins de lecteurs.', a: ['récente'], why: '*Une enquête récente*, feminine.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'La mairie soutient qu’aucune suppression n’est prévue.', why: '*Soutenir que* + clause.' },
            { a: 'Les avis divergent sur l’avenir des ateliers gratuits.', why: 'A summary sentence.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '« Prétendre » means …', o: ['to claim, with doubt', 'to admit', 'to stress'], why: '*Prétendre* shows doubt.' },
      { q: 'Il a dit qu’il ___. (direct speech: Je viens.)', o: ['venait', 'vient', 'viendra'], why: 'The présent becomes the imparfait.' },
      { q: '___ le ministre, le projet est sûr.', o: ['Selon', 'Selon que', 'Quant à'], why: '*Selon* + noun.' },
      { q: 'Le maire déplore que les travaux ___ pris du retard.', o: ['aient', 'ont', 'auront'], why: '*Déplorer que* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Il ___ qu’il s’est trompé. (reconnaître)', a: ['reconnaît'], why: '*Reconnaître* in the present.' },
      { q: 'Il ___ avoir menti. (nier)', a: ['nie'], why: '*Nier* + infinitive.' },
      { q: 'La ___ des prix rend les factures difficiles à payer. (augmenter)', a: ['hausse'], why: '*Augmenter* → *la hausse*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the verb with its nuance.', pairs: [
      ['affirmer', 'to state as a fact'],
      ['souligner', 'to stress'],
      ['déplorer', 'to regret'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the words in brackets.', items: [
      { q: 'Il dit : « Je viens. »', cue: 'Il a dit', a: ['Il a dit qu’il venait.', "Il a dit qu'il venait."], why: 'The présent becomes the imparfait.' },
      { q: 'Les prix ont augmenté.', cue: 'La hausse', a: ['La hausse des prix.'], why: '*Augmenter* → *la hausse des prix*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Il a dit qu’il [vient].', a: ['venait'], why: 'After a past reporting verb: imparfait.' },
      { s: 'Le maire déplore que les travaux [ont] pris du retard.', a: ['aient'], why: '*Déplorer que* + subjunctive.' },
    ] },
  ],
};
