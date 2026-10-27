// French B2, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Work and negotiation',
  goal: 'Take part in meetings, write professional e-mails and negotiate. Use the language of proposals and objections, highlighting with c’est … qui, and polite concessions and refusals.',
  art: 'mug',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing', 'speaking'], topics: ['meetings', 'proposals', 'objections', 'highlighting', 'negotiation', 'concession', 'polite refusal', 'formal e-mail'], goals: ['foundations', 'professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Je propose que, si je comprends bien',
      about: 'Propose, object, ask for clarification and summarise in a meeting.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'A meeting has its own ritual in French. To **propose**, say **Je propose que** + subjunctive or **Que diriez-vous de** + infinitive: *Je propose que nous commencions par le budget. Que diriez-vous de reporter la réunion ?* To **object** politely, begin with an agreement: **Je comprends votre point de vue, mais …** or **Je ne suis pas convaincu(e) que** + subjunctive. To **ask for clarification**: **Pourriez-vous préciser …?** or **Si je comprends bien, …**. To **sum up**: **En résumé, …** or **Pour conclure, …**.' },
          { t: 'table', caption: 'In a meeting', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['Je propose que nous commencions par …', 'I suggest we start with …'],
            ['Que diriez-vous de … ?', 'How about … ?'],
            ['Je comprends votre point de vue, mais …', 'I understand your point of view, but …'],
            ['Je ne suis pas convaincu(e) que …', 'I am not convinced that …'],
            ['Pourriez-vous préciser … ?', 'Could you be more specific about … ?'],
            ['Si je comprends bien, …', 'If I understand correctly, …'],
            ['En résumé, …', 'To sum up, …'],
            ['Pour conclure, …', 'To conclude, …'],
          ] },
          { t: 'tip', art: 'owl', md: 'To take the floor politely, say **Puis-je ajouter quelque chose ?** or **Si vous me permettez, …**. To interrupt gently, say **Excusez-moi de vous couper, mais …**. In French meetings, people often speak at length and in full sentences: avoid very short answers, and use the conditional (*Il faudrait …, On pourrait …*) to sound polite.' },
        ],
        [
          { t: 'dialogue', title: 'Une réunion', lines: [
            { who: 'Sophie', s: 'Je propose que nous commencions par le budget, puis nous parlerons du planning.' },
            { who: 'Lucas', s: 'Je comprends, mais je ne suis pas convaincu que ce soit la meilleure méthode.' },
            { who: 'Sophie', s: 'Pourriez-vous préciser ce que vous proposez ?' },
            { who: 'Lucas', s: 'Si je comprends bien le problème, il faudrait d’abord fixer les priorités. Que diriez-vous de commencer par là ?' },
          ] },
          { t: 'examples', items: [
            { s: '**Je propose que** nous **commencions** par le budget.', n: '*proposer que* + subjunctive.' },
            { s: '**Que diriez-vous de** reporter la réunion ?', n: '*que diriez-vous de* + infinitive.' },
            { s: '**Je ne suis pas convaincu que** ce **soit** la meilleure méthode.', n: 'A doubt: subjunctive.' },
            { s: '**Pourriez-vous préciser** ce point ?', n: 'Asking for clarification.' },
            { s: '**En résumé**, nous avons décidé de reporter le lancement.', n: 'Summing up.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What do you say?', pairs: [
            ['Vous voulez proposer quelque chose.', 'Je propose que nous commencions par le budget.'],
            ['Vous voulez contredire poliment.', 'Je comprends votre point de vue, mais …'],
            ['Vous n’avez pas bien compris.', 'Pourriez-vous préciser ce point ?'],
            ['Vous voulez conclure.', 'En résumé, nous avons décidé de …'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Je propose que nous ___ par le budget.', o: ['commencions', 'commençons', 'commencerons'], why: '*proposer que* + subjunctive.' },
            { q: 'Je ne suis pas convaincu que ce ___ la meilleure méthode.', o: ['soit', 'est', 'sera'], why: 'A doubt: subjunctive.' },
            { q: 'Que diriez-vous ___ reporter la réunion ?', o: ['de', 'à', 'que'], why: '*que diriez-vous de* + infinitive.' },
            { q: '___ je comprends bien, il faut d’abord fixer les priorités.', o: ['Si', 'Que', 'Quand'], why: '*si je comprends bien* = if I understand correctly.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je propose que nous commencions par le budget.', why: '*proposer que* + subjunctive.' },
            { a: 'Pourriez-vous préciser ce point ?', why: 'A polite request.' },
            { a: 'En résumé, nous avons décidé de reporter le lancement.', why: 'Summing up.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Je propose que nous [commençons] par le budget.', a: ['commencions'], why: '*proposer que* + subjunctive.' },
            { s: 'Je ne suis pas convaincu que ce [est] la meilleure méthode.', a: ['soit'], why: 'A doubt: subjunctive.' },
            { s: 'Que diriez-vous [à] reporter la réunion ?', a: ['de'], why: '*que diriez-vous de* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'C’est lui qui a écrit',
      about: 'Highlight a word with c’est … qui / que and ce qui … c’est.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To put the **focus** on one part of the sentence, French uses **c’est … qui** (for the subject) and **c’est … que** (for the other parts): *C’est Paul qui a écrit ce rapport.* (It was Paul who wrote this report.) *C’est ce rapport que Paul a écrit.* (It is this report that Paul wrote.) *C’est demain que nous commençons.* The verb after **qui** agrees with the highlighted word: *C’est moi qui ai écrit* (not *a écrit*).' },
          { t: 'table', caption: 'Highlighting', explain: ['head', 'col2'], head: ['Structure', 'Example', 'Highlights'], rows: [
            ['c’est … qui', 'C’est Paul qui a écrit ce rapport.', 'the subject'],
            ['c’est … que', 'C’est ce rapport que Paul a écrit.', 'the object'],
            ['c’est … que', 'C’est demain que nous commençons.', 'time or place'],
            ['ce qui … c’est', 'Ce qui m’intéresse, c’est le prix.', 'subject, as a theme'],
            ['ce que … c’est', 'Ce que je veux, c’est un devis.', 'object, as a theme'],
            ['ce dont … c’est', 'Ce dont nous avons besoin, c’est de temps.', 'with de'],
          ] },
          { t: 'tip', art: 'owl', md: 'This structure is common in meetings, because it makes your point clear and strong: **Ce qui compte, c’est la qualité.** After **c’est** + a pronoun, use the stress form: **c’est moi qui**, **c’est toi qui**, **c’est nous qui**. The verb then agrees: *C’est nous qui avons proposé.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**C’est** la direction **qui** a pris la décision.', n: 'Highlighting the subject.' },
            { s: '**C’est** ce délai **que** nous contestons.', n: 'Highlighting the object.' },
            { s: '**C’est** en juin **que** le projet commence.', n: 'Highlighting a time.' },
            { s: '**Ce qui** compte, **c’est** la qualité du travail.', n: 'A theme.' },
            { s: '**C’est** moi **qui** ai écrit ce rapport.', n: 'The verb agrees with *moi*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Highlight the part indicated with c’est … qui or c’est … que.', items: [
            { q: 'Paul a écrit ce rapport. (Highlight Paul.)', cue: 'C’est Paul', a: ['C’est Paul qui a écrit ce rapport.'], why: 'The subject: *c’est … qui*.' },
            { q: 'Paul a écrit ce rapport. (Highlight ce rapport.)', cue: 'C’est ce rapport', a: ['C’est ce rapport que Paul a écrit.'], why: 'The object: *c’est … que*.' },
            { q: 'Nous commençons demain. (Highlight demain.)', cue: 'C’est demain', a: ['C’est demain que nous commençons.'], why: 'A time: *c’est … que*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose qui or que.', items: [
            { q: 'C’est la direction ___ a pris la décision.', o: ['qui', 'que', 'dont'], why: 'The subject: *qui*.' },
            { q: 'C’est ce délai ___ nous contestons.', o: ['que', 'qui', 'où'], why: 'The object: *que*.' },
            { q: 'C’est en juin ___ le projet commence.', o: ['que', 'qui', 'quand'], why: 'A time: *c’est … que*.' },
            { q: 'C’est moi ___ ai écrit ce rapport.', o: ['qui', 'que', 'dont'], why: 'The subject: *c’est moi qui*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Ce ___ compte, c’est la qualité.', a: ['qui'], why: '*ce qui* is the subject.' },
            { q: 'Ce ___ je veux, c’est un devis.', a: ['que'], why: '*ce que* is the object.' },
            { q: 'Ce dont nous avons besoin, c’est ___ temps.', a: ['de'], why: '*avoir besoin de*.' },
            { q: 'C’est moi qui ___ écrit ce rapport. (avoir)', a: ['ai'], why: 'The verb agrees with *moi*: *ai*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'C’est la direction qui a pris la décision.', why: '*c’est … qui* highlights the subject.' },
            { a: 'Ce qui compte, c’est la qualité du travail.', why: 'A theme with *ce qui … c’est*.' },
            { a: 'C’est en juin que le projet commence.', why: '*c’est … que* highlights a time.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'C’est moi qui [a] écrit ce rapport.', a: ['ai'], why: 'The verb agrees with *moi*.' },
            { s: 'C’est ce délai [qui] nous contestons.', a: ['que'], why: '*ce délai* is the object: *que*.' },
            { s: '[Ce que] compte, c’est la qualité.', a: ['Ce qui'], why: 'It is the subject: *ce qui*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Nous pourrions, malheureusement',
      about: 'Negotiate: concede, counter-propose and refuse politely.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Negotiation in French relies on the **conditional** and on soft words. To **concede**, say **Nous sommes prêts à** + infinitive: *Nous sommes prêts à réduire le délai.* To **put a condition**, say **à condition que** + subjunctive or **en échange de** + noun: *en échange d’un paiement immédiat*. To **counter-propose**, say **Nous pourrions plutôt** + infinitive. To **refuse politely**, say **Malheureusement, nous ne sommes pas en mesure de** + infinitive, or **Il nous serait difficile de** + infinitive.' },
          { t: 'table', caption: 'Negotiating', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['Nous sommes prêts à réduire le délai.', 'We are ready to shorten the deadline.'],
            ['à condition que … / en échange de …', 'provided that … / in exchange for …'],
            ['Nous pourrions plutôt …', 'We could rather …'],
            ['Malheureusement, nous ne sommes pas en mesure de …', 'Unfortunately, we are not able to …'],
            ['Il nous serait difficile de …', 'It would be difficult for us to …'],
            ['Un geste commercial', 'a discount, a goodwill gesture'],
            ['un devis, une remise, un délai', 'a quote, a discount, a deadline'],
          ] },
          { t: 'tip', art: 'owl', md: 'A direct **non** is rare in negotiations. Say **Ce n’est pas tout à fait ce que nous espérions** (This is not quite what we hoped) or **Cela nous paraît difficile** (This seems difficult to us). Always propose an alternative after a refusal: *Nous pourrions plutôt envisager …* This keeps the discussion open.' },
        ],
        [
          { t: 'dialogue', title: 'Une négociation', lines: [
            { who: 'Karim', s: 'Votre devis est un peu élevé. Seriez-vous prêts à baisser le prix de dix pour cent ?' },
            { who: 'Sophie', s: 'Malheureusement, nous ne sommes pas en mesure de faire une remise aussi importante.' },
            { who: 'Karim', s: 'Que diriez-vous de réduire le prix si nous signons pour deux ans ?' },
            { who: 'Sophie', s: 'Nous pourrions accepter cinq pour cent, à condition que le paiement soit anticipé.' },
          ] },
          { t: 'examples', items: [
            { s: '**Nous sommes prêts à** réduire le délai de livraison.', n: 'A concession.' },
            { s: 'Nous accepterions **à condition que** le paiement **soit** anticipé.', n: 'A condition.' },
            { s: '**Nous pourrions plutôt** envisager une remise de cinq pour cent.', n: 'A counter-proposal.' },
            { s: '**Malheureusement, nous ne sommes pas en mesure de** baisser le prix.', n: 'A polite refusal.' },
            { s: 'Pourriez-vous faire **un geste commercial** ?', n: 'Asking for a goodwill discount.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Concession, condition or refusal?', groups: ['concession', 'condition', 'refusal'], explain: ['groups'], items: [
            { s: 'Nous sommes prêts à réduire le délai.', g: 0, why: 'We give something.' },
            { s: 'à condition que le paiement soit anticipé', g: 1, why: 'A condition.' },
            { s: 'Nous ne sommes pas en mesure de baisser le prix.', g: 2, why: 'A polite refusal.' },
            { s: 'en échange d’un contrat de deux ans', g: 1, why: 'Something in return.' },
            { s: 'Nous pouvons faire un effort sur la livraison.', g: 0, why: 'We give something.' },
            { s: 'Il nous serait difficile d’accepter cette proposition.', g: 2, why: 'A soft refusal.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make the sentence more polite.', items: [
            { q: 'Nous ne pouvons pas baisser le prix.', cue: 'Malheureusement', a: ['Malheureusement, nous ne sommes pas en mesure de baisser le prix.'], why: 'A softer refusal.' },
            { q: 'Je veux une remise.', cue: 'Je', a: ['Je voudrais une remise.'], why: '*vouloir* → *voudrais*.' },
            { q: 'Baissez le prix !', cue: 'Seriez', a: ['Seriez-vous prêts à baisser le prix ?', 'Seriez-vous prêt à baisser le prix ?'], why: 'A polite question with the conditional.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Nous sommes prêts à réduire le délai de livraison.', why: '*prêts à* + infinitive.' },
            { a: 'Nous pourrions accepter cinq pour cent.', why: '*pourrions* + infinitive.' },
            { a: 'Malheureusement, nous ne sommes pas en mesure de baisser le prix.', why: 'A polite refusal.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the most polite answer.', items: [
            { q: 'Vous refusez une demande de remise :', o: ['Malheureusement, nous ne sommes pas en mesure de la faire.', 'Non, c’est impossible.', 'Jamais.'], why: 'The polite refusal.' },
            { q: 'Vous proposez autre chose :', o: ['Nous pourrions plutôt envisager un délai plus court.', 'Faites ça plutôt !', 'Ce n’est pas possible.'], why: 'A counter-proposal with the conditional.' },
            { q: 'Vous acceptez sous condition :', o: ['Nous acceptons à condition que le paiement soit anticipé.', 'Nous acceptons, point.', 'Nous refusons à condition que.'], why: '*à condition que* + subjunctive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un compte rendu, un e-mail, une négociation',
      about: 'Read a meeting report and a formal e-mail.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Compte rendu de réunion', md: '**Compte rendu – réunion du 12 mars**\nParticipants : Mme Roux, M. Petit, M. Benali.\n\nM. Petit a proposé que l’on commence par le budget. Mme Roux a souligné que ce qui comptait, c’était le délai de livraison. M. Benali a objecté que le coût serait trop élevé et a demandé que l’équipe prépare un nouveau devis. Il a été décidé de reporter la décision à la semaine suivante.\n\nProchaine réunion : le 19 mars.' },
          { t: 'reading', title: 'E-mail professionnel', md: 'Madame Roux,\n\nSuite à notre réunion du 12 mars, je tiens à vous remercier pour votre ouverture. Comme convenu, nous vous enverrons un nouveau devis avant la fin de la semaine. C’est le délai de livraison qui nous préoccupe le plus : serait-il possible de le réduire à quinze jours ? Nous serions prêts à accepter un paiement anticipé en échange d’une remise de cinq pour cent.\n\nJe reste à votre disposition pour en discuter.\n\nCordialement,\nKarim Benali' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Il a été décidé de reporter la décision à la semaine suivante.', a: 't', why: '*Il a été décidé de reporter la décision à la semaine suivante.*' },
            { q: 'M. Petit a proposé de commencer par le planning.', a: 'f', why: 'He proposed to start with the budget.' },
            { q: 'Karim propose un paiement anticipé en échange d’une remise.', a: 't', why: '*paiement anticipé en échange d’une remise de cinq pour cent*' },
            { q: 'La prochaine réunion aura lieu à Paris.', a: 'ng', why: 'Only the date (19 March) is given.' },
            { q: 'Karim est satisfait du délai actuel.', a: 'f', why: 'He asks whether it can be reduced to fifteen days.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Que souligne Mme Roux ?', o: ['Que le délai de livraison compte le plus.', 'Que le budget est trop bas.', 'Que la réunion est trop longue.'], why: '*ce qui comptait, c’était le délai de livraison*' },
            { q: 'Pourquoi M. Benali demande-t-il un nouveau devis ?', o: ['Le coût serait trop élevé.', 'Le délai est trop court.', 'Il veut changer de société.'], why: '*le coût serait trop élevé*' },
            { q: 'Que propose Karim dans son e-mail ?', o: ['Réduire le délai à quinze jours.', 'Annuler la commande.', 'Augmenter le prix.'], why: '*serait-il possible de le réduire à quinze jours ?*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the expressions of highlighting or condition.', items: [
            { s: '[C’est le délai de livraison qui] nous préoccupe le plus.', why: '*c’est … qui* highlights the subject.' },
            { s: 'Nous serions prêts à accepter un paiement anticipé [en échange d’]une remise.', why: '*en échange de* introduces what is given in return.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Il a été ___ de reporter la décision.', a: ['décidé', 'decide'], why: '*Il a été décidé de …*' },
            { q: 'Comme ___, nous vous enverrons un nouveau devis.', a: ['convenu'], why: '*comme convenu* = as agreed.' },
            { q: 'Je reste à votre ___ pour en discuter.', a: ['disposition'], why: '*à votre disposition*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Je propose que nous ___ par le budget.', o: ['commencions', 'commençons', 'commencerons'], why: '*proposer que* + subjunctive.' },
      { q: 'C’est la direction ___ a pris la décision.', o: ['qui', 'que', 'dont'], why: '*c’est … qui*' },
      { q: 'Ce ___ je veux, c’est un devis.', o: ['que', 'qui', 'dont'], why: 'The object: *ce que*.' },
      { q: '___ nous ne sommes pas en mesure de baisser le prix.', o: ['Malheureusement,', 'Heureusement,', 'Pourtant,'], why: 'A polite refusal.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Que diriez-vous ___ reporter la réunion ?', a: ['de'], why: '*que diriez-vous de*' },
      { q: 'Nous acceptons à ___ que le paiement soit anticipé.', a: ['condition'], why: '*à condition que*' },
      { q: 'C’est moi qui ___ écrit ce rapport. (avoir)', a: ['ai'], why: 'The verb agrees with *moi*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
      ['un devis', 'a quote'],
      ['une remise', 'a discount'],
      ['un délai', 'a deadline'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Highlight with c’est … qui or c’est … que.', items: [
      { q: 'Paul a écrit ce rapport. (Highlight Paul.)', cue: 'C’est Paul', a: ['C’est Paul qui a écrit ce rapport.'], why: '*c’est … qui*' },
      { q: 'Nous commençons demain. (Highlight demain.)', cue: 'C’est demain', a: ['C’est demain que nous commençons.'], why: '*c’est … que*' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Nous sommes prêts à réduire le délai de livraison.', why: '*prêts à* + infinitive.' },
      { a: 'Ce qui compte, c’est la qualité du travail.', why: 'A theme.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Je propose que nous [commençons] par le budget.', a: ['commencions'], why: 'Subjunctive.' },
    ] },
  ],
};
