// French B2, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Culture and identity',
  goal: 'Discuss culture, language and identity in the French-speaking world. Learn regional vocabulary, the subjunctive after verbs of feeling and the language of reviews.',
  art: 'parrot',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing', 'speaking'], topics: ['francophonie', 'regional vocabulary', 'feelings', 'subjunctive', 'film and book reviews', 'identity'], goals: ['foundations', 'pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Un monde francophone',
      about: 'Discover French as spoken in different countries.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'French is spoken on every continent. It is the official language of France, Belgium, Switzerland, Luxembourg, Canada (with English), Quebec, and many African countries, among others. This is called **la francophonie**. A person who speaks French is **un francophone** or **une francophone**. French varies from country to country, mostly in vocabulary and in accent, but the grammar is the same everywhere.' },
          { t: 'table', caption: 'Some regional words', explain: ['head', 'col3'], head: ['Standard (France)', 'Region', 'Regional word', 'Meaning'], rows: [
            ['soixante-dix, quatre-vingt-dix', 'Belgium, Switzerland', 'septante, nonante', 'seventy, ninety'],
            ['le petit-déjeuner, le déjeuner, le dîner', 'Belgium, Switzerland, Quebec', 'le déjeuner, le dîner, le souper', 'breakfast, lunch, dinner'],
            ['faire du shopping', 'Quebec', 'magasiner', 'to shop'],
            ['un e-mail', 'Quebec', 'un courriel', 'an e-mail'],
            ['le week-end', 'Quebec', 'la fin de semaine', 'the weekend'],
            ['une épicerie de quartier', 'Quebec', 'un dépanneur', 'a corner shop'],
            ['un portable', 'Switzerland', 'un natel', 'a mobile phone'],
          ] },
          { t: 'tip', art: 'owl', md: 'Some regional words may be unknown in France, but they are perfectly normal at home. In your own speech, choose the variety that matches the people you talk to. France’s **soixante-dix** and **quatre-vingt-dix** are not used in Belgium or in Switzerland, where **septante** and **nonante** are normal; in parts of Switzerland you also hear **huitante** for 80.' },
        ],
        [
          { t: 'text', md: 'Identity in a multilingual world is a rich topic. Useful phrases: **ma langue maternelle** (my mother tongue), **bilingue** (bilingual), **plurilingue** (speaking several languages), **l’accent** (accent), **le patrimoine** (heritage), **l’appartenance** (belonging), **s’identifier à** (to identify with), **vivre entre deux cultures** (to live between two cultures).' },
          { t: 'examples', items: [
            { s: 'Le français est **la langue officielle** de plusieurs pays.', n: 'An official language.' },
            { s: 'Elle est **bilingue** : elle parle français et anglais depuis l’enfance.', n: 'Bilingual.' },
            { s: 'Il vit **entre deux cultures**, celle de ses parents et celle de son pays d’accueil.', n: 'Between two cultures.' },
            { s: 'Au Québec, on dit **magasiner** pour *faire du shopping*.', n: 'A regional word.' },
            { s: 'En Belgique, on dit **septante** pour *soixante-dix*.', n: 'A regional number.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the standard word of France.', pairs: [
            ['septante', 'soixante-dix'],
            ['nonante', 'quatre-vingt-dix'],
            ['magasiner', 'faire du shopping'],
            ['un courriel', 'un e-mail'],
            ['un natel', 'un portable'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Where do people say this?', items: [
            { q: 'On dit « septante » pour 70 en…', o: ['Belgique et Suisse', 'France seulement', 'Chine'], why: '*septante* is used in Belgium and Switzerland.' },
            { q: 'On dit « magasiner » au…', o: ['Québec', 'Maroc seulement', 'Japon'], why: '*magasiner* is typical in Quebec.' },
            { q: 'On dit « un natel » en…', o: ['Suisse', 'Belgique', 'Algérie'], why: '*natel* is the Swiss word for a mobile phone.' },
            { q: 'Quelle langue officielle le Canada a-t-il avec l’anglais ?', o: ['Le français', 'L’espagnol', 'L’allemand'], why: 'Canada is officially bilingual in English and French.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which variety?', groups: ['France', 'Belgium or Switzerland', 'Quebec'], explain: ['groups'], items: [
            { s: 'soixante-dix', g: 0, why: 'Used in France.' },
            { s: 'septante', g: 1, why: 'Belgium and Switzerland.' },
            { s: 'magasiner', g: 2, why: 'Quebec.' },
            { s: 'nonante', g: 1, why: 'Belgium and Switzerland.' },
            { s: 'un courriel', g: 2, why: 'Quebec.' },
            { s: 'quatre-vingt-dix', g: 0, why: 'Used in France.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Le français est la langue officielle de plusieurs pays.', why: 'A statement about la francophonie.' },
            { a: 'Elle est bilingue depuis l’enfance.', why: '*bilingue depuis l’enfance*' },
            { a: 'Au Québec, on dit magasiner.', why: 'A regional word.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Une personne qui parle français est un ___.', a: ['francophone'], why: '*un francophone*' },
            { q: 'Le français a des mots différents selon les ___.', a: ['pays', 'régions', 'regions'], why: 'Vocabulary varies by country and region.' },
            { q: 'Au Québec, on dit un ___ pour un e-mail.', a: ['courriel'], why: '*un courriel*' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Je suis ravi que, je regrette que',
      about: 'Express feelings with the subjunctive.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To express a **feeling** about someone else’s action, French uses the **subjunctive**: *Je suis ravi que tu viennes. Je regrette qu’il soit parti. Il est dommage que nous n’ayons pas le temps.* Common verbs and phrases: **être content / heureux / ravi / triste / surpris / étonné / fier que**, **regretter que**, **avoir peur que**, **il est dommage que**, **ça m’étonne que**. If the subject is the **same**, use the infinitive with **de**: *Je suis ravi de venir.*' },
          { t: 'table', caption: 'Feelings', explain: ['head', 'col2'], head: ['Expression', 'Example', 'What follows'], rows: [
            ['être content / ravi que', 'Je suis ravi que tu viennes.', 'subjunctive'],
            ['regretter que', 'Je regrette qu’il soit parti.', 'subjunctive'],
            ['avoir peur que', 'J’ai peur qu’il ne vienne pas.', 'subjunctive'],
            ['il est dommage que', 'Il est dommage que nous n’ayons pas le temps.', 'subjunctive'],
            ['ça m’étonne que', 'Ça m’étonne qu’elle soit absente.', 'subjunctive'],
            ['être content de', 'Je suis content de te voir.', 'infinitive (same subject)'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use the **past subjunctive** for a feeling about something that already happened: *Je suis content qu’il soit venu.* Use the present subjunctive for something happening now or later: *Je suis content qu’il vienne.* After **avoir peur que**, a small **ne** often appears without making the sentence negative: *J’ai peur qu’il ne pleuve* means I am afraid it will rain. To say the fear is that something will not happen, add **pas**: *J’ai peur qu’il ne vienne pas.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Je suis **ravi que** tu **viennes** à la fête.', n: 'A feeling about the future.' },
            { s: 'Elle **regrette qu’**ils **soient** partis si tôt.', n: 'A feeling about the past.' },
            { s: 'Il est **dommage que** nous **n’ayons** pas le temps.', n: 'A regret.' },
            { s: 'Je suis **fier de** réussir.', n: 'Same subject: *de* + infinitive.' },
            { s: 'Nous sommes **surpris que** vous **soyez** là.', n: 'Surprise.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Je suis ravi que tu ___ à la fête.', o: ['viennes', 'viens', 'viendras'], why: 'After a feeling: the subjunctive.' },
            { q: 'Elle regrette qu’ils ___ partis si tôt.', o: ['soient', 'sont', 'seront'], why: 'The past subjunctive: *soient partis*.' },
            { q: 'Je suis content ___ te voir.', o: ['de', 'que', 'à'], why: 'Same subject: *de* + infinitive.' },
            { q: 'Il est dommage que nous n’___ pas le temps.', o: ['ayons', 'avons', 'aurons'], why: 'After *il est dommage que*: the subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Express the feeling.', items: [
            { q: 'Tu viens à la fête. Je suis ravi.', cue: 'Je suis ravi', a: ['Je suis ravi que tu viennes à la fête.'], why: '*être ravi que* + subjunctive.' },
            { q: 'Ils sont partis. Elle regrette.', cue: 'Elle regrette', a: ['Elle regrette qu’ils soient partis.'], why: 'Past subjunctive.' },
            { q: 'Je te vois. Je suis content.', cue: 'Je suis content', a: ['Je suis content de te voir.'], why: 'Same subject: *de* + infinitive.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the subjunctive.', items: [
            { q: 'Je suis surpris que vous ___ là. (être)', a: ['soyez'], why: '*que vous soyez*' },
            { q: 'Je regrette qu’il ___ parti. (être)', a: ['soit'], why: '*qu’il soit parti*' },
            { q: 'Il est dommage que nous n’___ pas le temps. (avoir)', a: ['ayons'], why: '*que nous ayons*' },
            { q: 'J’ai peur qu’il ne ___ pas. (venir)', a: ['vienne'], why: '*qu’il vienne*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je suis ravi que tu viennes à la fête.', why: 'Feeling + subjunctive.' },
            { a: 'Elle regrette qu’ils soient partis si tôt.', why: 'Past subjunctive.' },
            { a: 'Je suis content de te voir.', why: 'Same subject: infinitive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Je suis ravi que tu [viens].', a: ['viennes'], why: 'After a feeling: the subjunctive.' },
            { s: 'Je suis content [que] te voir.', a: ['de'], why: 'Same subject: *de* + infinitive.' },
            { s: 'Il est dommage que nous n’[avons] pas le temps.', a: ['ayons'], why: 'After *il est dommage que*: the subjunctive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Ce film m’a ému',
      about: 'Describe and judge a book, a film or a work of art.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To describe a **film or a book**, give the kind of work, the plot in a few words and your reaction. Use the **present** to tell the story: *Le film raconte l’histoire d’un homme qui quitte sa ville.* Name the elements: **l’intrigue** (plot), **les personnages** (characters), **le scénario** (script), **le réalisateur** (film director), **l’auteur / l’autrice** (writer), **le décor** (setting), **le rythme** (pace). Then judge it with adjectives.' },
          { t: 'table', caption: 'Reviewing', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['un roman, un recueil de poèmes', 'a novel, a poetry collection'],
            ['un réalisateur, une réalisatrice', 'a film director'],
            ['l’intrigue (f.)', 'the plot'],
            ['le personnage principal', 'the main character'],
            ['captivant, passionnant', 'gripping'],
            ['émouvant', 'moving'],
            ['ennuyeux, lent', 'boring, slow'],
            ['bien rythmé', 'well paced'],
            ['raconter l’histoire de …', 'to tell the story of …'],
          ] },
          { t: 'tip', art: 'owl', md: 'To express your impression, use **ce qui m’a plu, c’est …** (what I liked is …) and **ce que j’ai moins aimé, c’est …**. Verbs of reaction like **émouvoir** (to move) and **toucher** take a direct object: *Ce film m’a ému(e). Cette scène m’a beaucoup touché(e).* Be careful: the participle agrees with *me* when you are a woman: *Ce film m’a émue.*' },
        ],
        [
          { t: 'dialogue', title: 'Après le cinéma', lines: [
            { who: 'Sophie', s: 'Alors, comment tu as trouvé le film ?' },
            { who: 'Lucas', s: 'Plutôt bien. Ce qui m’a plu, c’est l’intrigue, qui est vraiment captivante.' },
            { who: 'Sophie', s: 'Moi, j’ai trouvé le rythme un peu lent. Ce que j’ai moins aimé, c’est la fin.' },
            { who: 'Lucas', s: 'C’est vrai, mais les personnages sont émouvants. Je suis content qu’on soit venus le voir.' },
          ] },
          { t: 'examples', items: [
            { s: 'Le film **raconte l’histoire** d’un homme qui quitte sa ville.', n: 'The plot in one line.' },
            { s: '**Ce qui m’a plu**, c’est l’intrigue.', n: 'What I liked.' },
            { s: '**Ce que j’ai moins aimé**, c’est la fin.', n: 'What I liked less.' },
            { s: 'Ce roman est **captivant** et **bien rythmé**.', n: 'Two judgements.' },
            { s: 'Ce film **m’a ému** : il est vraiment touchant.', n: '*émouvoir* + me.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Positive or negative?', groups: ['positive', 'negative'], explain: ['groups'], items: [
            { s: 'captivant', g: 0, why: 'It holds your interest.' },
            { s: 'ennuyeux', g: 1, why: 'It is boring.' },
            { s: 'émouvant', g: 0, why: 'It moves you.' },
            { s: 'trop lent', g: 1, why: 'The pace is a problem.' },
            { s: 'bien rythmé', g: 0, why: 'Good pace.' },
            { s: 'prévisible', g: 1, why: 'Too predictable.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Ce film raconte l’___ d’un homme.', o: ['histoire', 'intrigue', 'scénario'], why: '*raconter l’histoire de*.' },
            { q: '___ m’a plu, c’est l’intrigue.', o: ['Ce qui', 'Ce que', 'Ce dont'], why: 'The subject: *ce qui*.' },
            { q: '___ j’ai moins aimé, c’est la fin.', o: ['Ce que', 'Ce qui', 'Ce dont'], why: 'The object: *ce que*.' },
            { q: 'Ce film m’a beaucoup ___.', o: ['ému', 'émouvoir', 'émouvant'], why: 'The past participle: *ému*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Give your opinion.', items: [
            { q: 'J’aime l’intrigue. (Ce qui m’a plu, c’est …)', cue: 'Ce qui m’a plu', a: ['Ce qui m’a plu, c’est l’intrigue.'], why: '*ce qui* is the subject.' },
            { q: 'Je n’ai pas aimé la fin. (Ce que j’ai moins aimé, c’est …)', cue: 'Ce que j’ai moins aimé', a: ['Ce que j’ai moins aimé, c’est la fin.'], why: '*ce que* is the object.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ce qui m’a plu, c’est l’intrigue.', why: '*ce qui* + verb, then *c’est*.' },
            { a: 'Ce roman est captivant et bien rythmé.', why: 'Two adjectives.' },
            { a: 'Le film raconte l’histoire d’un homme.', why: '*raconter l’histoire de*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un extrait et une critique',
      about: 'Read a literary extract and a film review.',
      art: 'parrot',
      spreads: [
        [
          { t: 'reading', title: 'Extrait de roman', md: 'Il habitait ce village depuis toujours, et pourtant il avait l’impression de n’en connaître que les murs. Les gens qui le croisaient lui disaient bonjour, mais personne ne lui avait jamais demandé d’où venait sa famille. Il regrettait que sa grand-mère ne soit plus là pour lui raconter l’histoire d’avant, celle qu’on ne trouvait dans aucun livre.\n\nUn soir, il ouvrit la vieille malle qu’elle avait laissée au grenier. Il y trouva des lettres, écrites dans une langue qu’il comprenait à peine, mais dont l’écriture lui sembla familière.' },
          { t: 'reading', title: 'Critique d’un film', md: '**« Entre deux rives » : un film touchant**\nLe film raconte l’histoire d’une jeune femme qui quitte son pays pour étudier à l’étranger. Ce qui m’a plu, c’est l’interprétation de l’actrice principale, qui rend son personnage sincère et émouvant. Le rythme est parfois lent, mais le scénario reste captivant. Ce que j’ai moins aimé, c’est la fin, un peu prévisible. Je suis ravi que le réalisateur ait choisi de tourner dans des paysages réels : ils donnent au film une beauté simple. À voir, si l’on aime les histoires de vie.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Le narrateur habite le village depuis toujours.', a: 't', why: '*Il habitait ce village depuis toujours*' },
            { q: 'Sa grand-mère vit encore.', a: 'f', why: '*Il regrettait que sa grand-mère ne soit plus là*' },
            { q: 'Il trouve des lettres dans une malle.', a: 't', why: '*Il y trouva des lettres*' },
            { q: 'Les lettres sont écrites en anglais.', a: 'ng', why: 'The text only says *une langue qu’il comprenait à peine*.' },
            { q: 'Le critique trouve la fin du film surprenante.', a: 'f', why: 'He finds it *un peu prévisible*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Qu’est-ce qui a plu au critique ?', o: ['L’interprétation de l’actrice principale.', 'La fin du film.', 'Le décor en studio.'], why: '*Ce qui m’a plu, c’est l’interprétation de l’actrice principale*' },
            { q: 'Que regrette le narrateur de l’extrait ?', o: ['Que sa grand-mère ne soit plus là.', 'Qu’il n’ait pas de livre.', 'Qu’il habite ici.'], why: '*Il regrettait que sa grand-mère ne soit plus là*' },
            { q: 'Pourquoi le critique est-il ravi ?', o: ['Le réalisateur a tourné dans des paysages réels.', 'Le film est très court.', 'Le film est drôle.'], why: '*Je suis ravi que le réalisateur ait choisi de tourner dans des paysages réels*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the subjunctive forms.', items: [
            { s: 'Il regrettait que sa grand-mère ne [soit] plus là.', why: '*soit* is the subjunctive of *être*.' },
            { s: 'Je suis ravi que le réalisateur [ait choisi] de tourner dans des paysages réels.', why: '*ait choisi* is the past subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Le film ___ l’histoire d’une jeune femme.', a: ['raconte'], why: '*Le film raconte l’histoire …*' },
            { q: 'Ce que j’ai moins ___, c’est la fin.', a: ['aimé', 'aime'], why: '*ce que j’ai moins aimé*' },
            { q: 'Un soir, il ___ la vieille malle. (ouvrir, passé simple)', a: ['ouvrit'], why: '*il ouvrit* in the passé simple.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Je suis ravi que tu ___ à la fête.', o: ['viennes', 'viens', 'viendras'], why: 'After a feeling: the subjunctive.' },
      { q: 'En Belgique, on dit ___ pour 70.', o: ['septante', 'soixante', 'sexante'], why: '*septante*' },
      { q: '___ m’a plu, c’est l’intrigue.', o: ['Ce qui', 'Ce que', 'Ce dont'], why: 'The subject: *ce qui*.' },
      { q: 'Je suis content ___ te voir.', o: ['de', 'que', 'à'], why: 'Same subject: *de* + infinitive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Elle regrette qu’ils ___ partis. (être)', a: ['soient'], why: '*qu’ils soient partis*' },
      { q: 'Au Québec, on dit ___ pour faire du shopping.', a: ['magasiner'], why: '*magasiner*' },
      { q: 'Le film raconte l’___ d’un homme.', a: ['histoire'], why: '*raconter l’histoire de*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the standard word.', pairs: [
      ['septante', 'soixante-dix'],
      ['un courriel', 'un e-mail'],
      ['un natel', 'un portable'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Express the feeling.', items: [
      { q: 'Tu viens à la fête. Je suis ravi.', cue: 'Je suis ravi', a: ['Je suis ravi que tu viennes à la fête.'], why: 'Subjunctive.' },
      { q: 'Je te vois. Je suis content.', cue: 'Je suis content', a: ['Je suis content de te voir.'], why: 'Same subject.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Ce qui m’a plu, c’est l’intrigue.', why: '*ce qui* + verb.' },
      { a: 'Elle regrette qu’ils soient partis si tôt.', why: 'Past subjunctive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Je suis ravi que tu [viens].', a: ['viennes'], why: 'The subjunctive.' },
    ] },
  ],
};
