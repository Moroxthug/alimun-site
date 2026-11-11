// French B2, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Society and the future',
  goal: 'Speculate about the future, express degrees of certainty and write a structured essay. Use the right mood after expressions of certainty and doubt, and organise an essay with clear links.',
  art: 'dragon',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['certainty', 'doubt', 'subjunctive', 'indicative', 'future', 'future perfect', 'conditional', 'essay structure', 'common mistakes'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Je suis sûr que, je doute que',
      about: 'Choose the indicative or the subjunctive according to your degree of certainty.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'The mood of the verb depends on how **certain** you are. When you are **sure**, use the **indicative**: *Je suis sûr que tu viendras. Il est évident que c’est vrai. Il est probable qu’il pleuvra.* When you **doubt** or consider something only **possible**, use the **subjunctive**: *Je doute que tu viennes. Il est possible qu’il pleuve. Il se peut que ce soit faux.* A negative or a question about your opinion usually leads to the subjunctive: *Je ne pense pas qu’il vienne. Pensez-vous qu’il vienne ?*' },
          { t: 'table', caption: 'Certainty and doubt', explain: ['head', 'col1'], head: ['Expression', 'Mood', 'Example'], rows: [
            ['je suis sûr(e) que, je sais que', 'indicative', 'Je suis sûr qu’il viendra.'],
            ['il est évident / clair que', 'indicative', 'Il est évident que c’est vrai.'],
            ['il est probable que', 'indicative', 'Il est probable qu’il pleuvra.'],
            ['je crois / je pense que', 'indicative', 'Je pense qu’il a raison.'],
            ['je ne suis pas sûr(e) que', 'subjunctive', 'Je ne suis pas sûr qu’il vienne.'],
            ['je doute que', 'subjunctive', 'Je doute que ce soit vrai.'],
            ['il est possible que, il se peut que', 'subjunctive', 'Il est possible qu’il pleuve.'],
            ['je ne pense pas que', 'subjunctive', 'Je ne pense pas qu’il ait raison.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Compare **il est probable que** (indicative) with **il est possible que** (subjunctive): French treats *probable* as more certain. After **espérer que**, use the indicative (and the future); after **souhaiter que**, the subjunctive. If your sentence is about the same subject, use the infinitive: *Je doute de pouvoir venir.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Je **suis sûr qu’**il **viendra**.', n: 'Certainty: indicative.' },
            { s: 'Je **doute qu’**il **vienne**.', n: 'Doubt: subjunctive.' },
            { s: 'Il est **probable qu’**il **pleuvra** demain.', n: '*probable* + indicative.' },
            { s: 'Il est **possible qu’**il **pleuve** demain.', n: '*possible* + subjunctive.' },
            { s: '**Pensez-vous qu’**il **ait** raison ?', n: 'A question about an opinion: subjunctive.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Je suis sûr qu’il ___.', o: ['viendra', 'vienne', 'viendrait'], why: 'Certainty: indicative.' },
            { q: 'Je doute qu’il ___.', o: ['vienne', 'viendra', 'vient'], why: 'Doubt: subjunctive.' },
            { q: 'Il est probable qu’il ___ demain.', o: ['pleuvra', 'pleuve', 'pleuvrait'], why: '*probable* + indicative.' },
            { q: 'Il se peut que ce ___ faux.', o: ['soit', 'est', 'sera'], why: '*il se peut que* + subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Indicative or subjunctive?', groups: ['indicative', 'subjunctive'], explain: ['groups'], items: [
            { s: 'je suis sûr que', g: 0, why: 'Certainty.' },
            { s: 'je doute que', g: 1, why: 'Doubt.' },
            { s: 'il est probable que', g: 0, why: 'Probable, so indicative.' },
            { s: 'il est possible que', g: 1, why: 'Possible, so subjunctive.' },
            { s: 'je ne pense pas que', g: 1, why: 'A negative opinion.' },
            { s: 'il est évident que', g: 0, why: 'Obvious, so indicative.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the expression.', items: [
            { q: 'Il vient demain. (Je suis sûr que …)', cue: 'Je suis sûr qu’il', a: ['Je suis sûr qu’il vient demain.', 'Je suis sûr qu’il viendra demain.'], why: 'Certainty: indicative.' },
            { q: 'Il vient demain. (Je doute que …)', cue: 'Je doute qu’il', a: ['Je doute qu’il vienne demain.'], why: 'Doubt: subjunctive.' },
            { q: 'Il pleut demain. (Il est possible que …)', cue: 'Il est possible qu’il', a: ['Il est possible qu’il pleuve demain.'], why: '*possible* + subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je suis sûr qu’il viendra demain.', why: 'Certainty: indicative.' },
            { a: 'Je doute que ce soit vrai.', why: 'Doubt: subjunctive.' },
            { a: 'Il est possible qu’il pleuve demain.', why: '*possible* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Je doute qu’il [viendra].', a: ['vienne'], why: 'Doubt: subjunctive.' },
            { s: 'Je suis sûr qu’il [vienne].', a: ['viendra', 'vient'], why: 'Certainty: indicative.' },
            { s: 'Il est probable qu’il [pleuve] demain.', a: ['pleuvra'], why: '*probable* + indicative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'D’ici vingt ans',
      about: 'Speculate about the future with different tenses.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To speak about the future, French has several tools. The **future** (*Les villes seront plus vertes*) is for a general prediction. The **future perfect** (*D’ici vingt ans, nous aurons changé nos habitudes*) shows that something will be **done by a certain moment**. The **conditional** (*Les voitures pourraient disparaître*) shows that something is **possible but not certain**. The **near future** (*Je vais partir*) is for a plan or a sure event. Time phrases help: **d’ici là** (by then), **dans vingt ans** (in twenty years), **à l’avenir** (in the future), **un jour** (one day).' },
          { t: 'table', caption: 'Talking about the future', explain: ['head', 'col2'], head: ['Tense', 'Example', 'Use'], rows: [
            ['future', 'Les villes seront plus vertes.', 'a prediction'],
            ['future perfect', 'D’ici vingt ans, nous aurons changé nos habitudes.', 'done by a moment'],
            ['conditional', 'Les voitures pourraient disparaître.', 'possible, not certain'],
            ['near future', 'Je vais partir demain.', 'a plan'],
            ['il est probable que + future', 'Il est probable que les emplois changeront.', 'probability'],
          ] },
          { t: 'tip', art: 'owl', md: 'To make a prediction more cautious, add **sans doute**, **probablement**, **peut-être**, or use the conditional: *Les emplois de demain seront sans doute très différents.* To make it stronger, use **certainement** or **à coup sûr**. After **peut-être**, you can put the verb right after: *Peut-être viendra-t-il.* (formal) or *Peut-être qu’il viendra.* (spoken).' },
        ],
        [
          { t: 'examples', items: [
            { s: '**D’ici vingt ans**, les villes **seront** plus vertes.', n: 'A prediction.' },
            { s: '**D’ici là**, nous **aurons changé** nos habitudes.', n: 'Done by then.' },
            { s: 'Les voitures **pourraient** disparaître du centre-ville.', n: 'A possibility.' },
            { s: 'Le travail de demain **sera** **sans doute** très différent.', n: 'A cautious prediction.' },
            { s: '**À l’avenir**, on **travaillera** peut-être moins.', n: 'A hesitation.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right tense.', items: [
            { q: 'D’ici vingt ans, nous ___ changé nos habitudes.', o: ['aurons', 'avons', 'avions'], why: 'Done by a point in the future: the future perfect.' },
            { q: 'Les voitures ___ disparaître. (possible, not sure)', o: ['pourraient', 'pourront', 'peuvent'], why: 'A possibility: the conditional.' },
            { q: 'Je ___ partir demain. (a plan)', o: ['vais', 'partirais', 'serai'], why: 'A plan: the near future.' },
            { q: 'Les villes ___ plus vertes. (prediction)', o: ['seront', 'sont', 'étaient'], why: 'A prediction: the future.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Make the prediction more cautious.', items: [
            { q: 'Les emplois de demain seront très différents. (sans doute)', cue: 'Les emplois', a: ['Les emplois de demain seront sans doute très différents.'], why: '*sans doute* before the adjective.' },
            { q: 'Les voitures disparaîtront. (conditional)', cue: 'Les voitures', a: ['Les voitures pourraient disparaître.', 'Les voitures disparaîtraient.'], why: 'The conditional marks a possibility.' },
            { q: 'On travaillera moins. (peut-être)', cue: 'On travaillera', a: ['On travaillera peut-être moins.'], why: '*peut-être* after the verb.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ vingt ans, les villes seront plus vertes.', a: ['D’ici', 'Dans'], why: '*d’ici vingt ans* or *dans vingt ans*.' },
            { q: 'D’ici ___, nous aurons changé nos habitudes.', a: ['là', 'la'], why: '*d’ici là* = by then.' },
            { q: 'On travaillera ___ moins. (perhaps)', a: ['peut-être'], why: '*peut-être*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'D’ici vingt ans, les villes seront plus vertes.', why: 'A time phrase first, then the prediction.' },
            { a: 'Les voitures pourraient disparaître du centre-ville.', why: 'The conditional for a possibility.' },
            { a: 'À l’avenir, on travaillera peut-être moins.', why: '*peut-être* after the verb.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'D’ici vingt ans, nous [avons] changé nos habitudes.', a: ['aurons'], why: 'The future perfect: *aurons changé*.' },
            { s: 'Les voitures [sont] disparaître.', a: ['pourraient'], why: 'Possibility: the conditional.' },
            { s: 'Demain, il [viennera] à la réunion.', a: ['viendra'], why: 'The future of *venir*: *viendra*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Écrire un essai',
      about: 'Structure an essay and avoid typical mistakes.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'A good essay in French follows a clear plan. The **introduction** has three steps: a **hook** (une accroche) that draws the reader in, the **question** raised (la problématique), and the **plan** you will follow (l’annonce du plan). The **development** has two or three paragraphs; each has one idea, one example and a link to the next. The **conclusion** answers the question and may open a wider perspective. Between paragraphs, use transitions such as **par ailleurs**, **en revanche**, **cela dit**.' },
          { t: 'table', caption: 'Parts of an essay', explain: ['head', 'col2'], head: ['Part', 'Phrase', 'Role'], rows: [
            ['hook', 'De nos jours, tout le monde parle de …', 'draws the reader in'],
            ['question', 'On peut se demander si …', 'states the question'],
            ['plan', 'Nous verrons d’abord que …, puis que …', 'announces the plan'],
            ['transition', 'Par ailleurs, … / En revanche, … / Cela dit, …', 'links paragraphs'],
            ['conclusion', 'En définitive, … / Pour conclure, …', 'answers the question'],
          ] },
          { t: 'tip', art: 'owl', md: 'Make each paragraph start with a **topic sentence**, and keep the same tenses within a paragraph. Use the present for general truths, the future for predictions. Read your essay twice: once for ideas, once for mistakes. Make a list of your usual mistakes, and check each one.' },
        ],
        [
          { t: 'text', md: 'Typical mistakes at B2: **malgré que** (say **bien que**), **plus bon** (say **meilleur**), a missing **agreement** of the past participle (*les lettres que j’ai écrit* → *écrites*), **a / à** (*il a* vs *à Paris*), **ce / se**, **ces / ses**, **et / est**, and **si il** (say **s’il**). Check also the mood after expressions of doubt, and the position of pronouns. A short list of correct forms can save your marks.' },
          { t: 'table', caption: 'Mistakes to avoid', explain: ['head', 'col1'], head: ['Wrong', 'Right', 'Why'], rows: [
            ['malgré qu’il pleuve', 'bien qu’il pleuve', 'malgré + noun; bien que + subjunctive'],
            ['plus bon', 'meilleur', 'irregular comparative'],
            ['les lettres que j’ai écrit', 'les lettres que j’ai écrites', 'agreement with a preceding object'],
            ['si il pleut', 's’il pleut', 'elision'],
            ['je doute qu’il viendra', 'je doute qu’il vienne', 'doubt + subjunctive'],
            ['il est a Paris', 'il est à Paris', 'a = has, à = to, in'],
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '[Malgré qu’]il pleuve, nous sortons.', a: ['Bien qu’'], why: '*bien que* + subjunctive.' },
            { s: 'C’est le [plus bon] restaurant.', a: ['meilleur'], why: '*bon* → *meilleur*.' },
            { s: 'Les lettres que j’ai [écrit] sont longues.', a: ['écrites'], why: 'Agreement with the preceding object.' },
            { s: '[Si il] pleut, nous restons.', a: ['S’il'], why: 'Elision: *s’il*.' },
            { s: 'Il est [a] Paris.', a: ['à'], why: '*à Paris* = in Paris.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which part of the essay?', groups: ['introduction', 'development', 'conclusion'], explain: ['groups'], items: [
            { s: 'De nos jours, tout le monde parle de télétravail.', g: 0, why: 'A hook.' },
            { s: 'Nous verrons d’abord les avantages, puis les limites.', g: 0, why: 'The plan.' },
            { s: 'Par ailleurs, il réduit la pollution.', g: 1, why: 'A new argument.' },
            { s: 'En définitive, le bilan reste positif.', g: 2, why: 'A conclusion.' },
            { s: 'Cela dit, certains métiers ne s’y prêtent pas.', g: 1, why: 'A transition with a nuance.' },
            { s: 'On peut se demander si le télétravail est un progrès.', g: 0, why: 'The question.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'On peut se demander si le télétravail est un progrès.', why: 'The question of the introduction.' },
            { a: 'Nous verrons d’abord les avantages, puis les limites.', why: 'The plan.' },
            { a: 'En définitive, le bilan reste positif.', why: 'The conclusion.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['Bien qu’il soit fatigué, il travaille.', 'Malgré qu’il soit fatigué, il travaille.', 'Bien qu’il est fatigué, il travaille.'], why: '*bien que* + subjunctive.' },
            { q: '', o: ['Ce sont les lettres que j’ai écrites.', 'Ce sont les lettres que j’ai écrit.', 'Ce sont les lettres que j’ai écris.'], why: 'Agreement with the preceding object.' },
            { q: '', o: ['Je ne suis pas sûr qu’il vienne.', 'Je ne suis pas sûr qu’il viendra.', 'Je ne suis pas sûr qu’il viens.'], why: 'Doubt: subjunctive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un essai sur le travail de demain',
      about: 'Read an essay on the future of work and a letter of opinion.',
      art: 'dragon',
      spreads: [
        [
          { t: 'reading', title: 'À quoi ressemblera le travail de demain ?', md: '**À quoi ressemblera le travail de demain ?**\nDe nos jours, tout le monde s’interroge sur l’avenir du travail. On peut se demander si les emplois de demain seront très différents de ceux d’aujourd’hui. Nous verrons d’abord que la technologie change les métiers, puis que les compétences humaines resteront essentielles.\n\nD’abord, il est probable que certaines tâches seront automatisées. D’ici vingt ans, beaucoup de métiers auront évolué, et les travailleurs auront appris de nouvelles compétences. Cela dit, il est possible que de nouveaux emplois apparaissent. Par ailleurs, je doute que la créativité, l’écoute et le travail en équipe soient un jour remplacés.\n\nEn définitive, bien que l’avenir reste incertain, il semble que le travail de demain sera plus flexible. Il serait donc sage de se préparer dès aujourd’hui.' },
          { t: 'reading', title: 'Une lettre d’opinion', md: 'Monsieur le Rédacteur,\n\nJe me permets de réagir à votre article. Je suis convaincu que les emplois de demain seront plus variés, mais je ne pense pas que toutes les professions puissent s’adapter au même rythme. Si les écoles proposaient plus de formations, les jeunes seraient mieux préparés. Pourvu que les entreprises soutiennent cette évolution, l’avenir sera plus serein.\n\nCordialement,\nKarim Benali' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'L’essai commence par une phrase d’accroche.', a: 't', why: '*De nos jours, tout le monde s’interroge sur l’avenir du travail.*' },
            { q: 'L’auteur pense que les compétences humaines disparaîtront.', a: 'f', why: 'He thinks they will remain essential.' },
            { q: 'D’après l’auteur, il est probable que certaines tâches seront automatisées.', a: 't', why: '*il est probable que certaines tâches seront automatisées*' },
            { q: 'L’auteur donne des statistiques précises sur l’emploi.', a: 'ng', why: 'No figures are given.' },
            { q: 'Karim pense que toutes les professions s’adapteront au même rythme.', a: 'f', why: '*je ne pense pas que toutes les professions puissent s’adapter au même rythme*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Quel est le plan annoncé dans l’introduction ?', o: ['La technologie change les métiers, puis les compétences humaines restent essentielles.', 'Les avantages du télétravail.', 'L’histoire du travail.'], why: '*Nous verrons d’abord que la technologie change les métiers, puis que les compétences humaines resteront essentielles.*' },
            { q: 'Que doute l’auteur ?', o: ['Que la créativité soit un jour remplacée.', 'Que les emplois changent.', 'Que les gens travaillent.'], why: '*je doute que la créativité … soient un jour remplacés*' },
            { q: 'Que propose Karim dans sa lettre ?', o: ['Plus de formations dans les écoles.', 'Moins de technologie.', 'Plus de vacances.'], why: '*Si les écoles proposaient plus de formations, les jeunes seraient mieux préparés.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the expressions of certainty or doubt in the essay.', items: [
            { s: 'Il est [probable que] certaines tâches seront automatisées.', why: '*il est probable que* + indicative.' },
            { s: 'Il est [possible que] de nouveaux emplois apparaissent.', why: '*il est possible que* + subjunctive.' },
            { s: 'Je [doute que] la créativité soit un jour remplacée.', why: '*je doute que* + subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'D’ici vingt ans, beaucoup de métiers ___ évolué.', a: ['auront'], why: '*auront évolué* (future perfect).' },
            { q: 'Bien que l’avenir ___ incertain, il faut se préparer. (rester)', a: ['reste'], why: '*bien que l’avenir reste* (subjunctive of *rester*).' },
            { q: 'Pourvu que les entreprises ___ cette évolution, l’avenir sera plus serein. (soutenir)', a: ['soutiennent'], why: '*pourvu que* + subjunctive.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Je suis sûr qu’il ___.', o: ['viendra', 'vienne', 'viendrait'], why: 'Certainty: indicative.' },
      { q: 'Je doute qu’il ___.', o: ['vienne', 'viendra', 'vient'], why: 'Doubt: subjunctive.' },
      { q: 'D’ici vingt ans, nous ___ changé nos habitudes.', o: ['aurons', 'avons', 'avions'], why: 'Future perfect.' },
      { q: 'Les voitures ___ disparaître. (possible)', o: ['pourraient', 'pourront', 'peuvent'], why: 'Conditional.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Il est probable qu’il ___ demain. (pleuvoir)', a: ['pleuvra'], why: '*probable* + indicative.' },
      { q: 'Il est possible qu’il ___ demain. (pleuvoir)', a: ['pleuve'], why: '*possible* + subjunctive.' },
      { q: 'D’ici ___, nous aurons changé nos habitudes.', a: ['là', 'la'], why: '*d’ici là*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the part of the essay.', pairs: [
      ['De nos jours, tout le monde parle de …', 'hook'],
      ['Nous verrons d’abord que …', 'plan'],
      ['En définitive, …', 'conclusion'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite with the expression.', items: [
      { q: 'Il vient demain. (Je doute que …)', cue: 'Je doute qu’il', a: ['Je doute qu’il vienne demain.'], why: 'Doubt: subjunctive.' },
      { q: 'Les emplois seront différents. (sans doute)', cue: 'Les emplois', a: ['Les emplois seront sans doute différents.'], why: '*sans doute*' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'D’ici vingt ans, les villes seront plus vertes.', why: 'A time phrase first.' },
      { a: 'On peut se demander si le télétravail est un progrès.', why: 'The question of the introduction.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: '[Malgré qu’]il pleuve, nous sortons.', a: ['Bien qu’'], why: '*bien que* + subjunctive.' },
    ] },
  ],
};
