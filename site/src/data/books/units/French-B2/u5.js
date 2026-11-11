// French B2, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Arguing a point',
  goal: 'Build and defend an argument with cause, consequence and concession. Use the connectors of cause, consequence and purpose, and organise an opinion text.',
  art: 'dragon',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['cause', 'consequence', 'purpose', 'connectors', 'argumentation', 'opinion text', 'counter-argument'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Puisque, grâce à, en raison de',
      about: 'Give reasons with a range of connectors.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'At B2 you must vary the way you give a reason. Use a **clause** after **parce que** (new information), **puisque** (a reason the listener knows), **étant donné que** and **du fait que** (formal). Use a **noun** after **grâce à** (good cause), **à cause de** (bad cause), **en raison de** (neutral, formal), **faute de** (for lack of): *Le vol est annulé en raison de la grève.* Choose the connector that matches the tone and the structure.' },
          { t: 'table', caption: 'Cause', explain: ['head', 'col2'], head: ['Connector', 'Example', 'What follows'], rows: [
            ['parce que', 'Je reste parce que j’ai du travail.', 'clause, indicative'],
            ['puisque', 'Puisque tu es là, aide-moi.', 'clause, known reason'],
            ['étant donné que', 'Étant donné que les prix augmentent, nous devons agir.', 'clause (formal)'],
            ['grâce à', 'Grâce à ton aide, j’ai réussi.', 'noun, good cause'],
            ['à cause de', 'À cause de la grève, le train est annulé.', 'noun, bad cause'],
            ['en raison de', 'En raison de la grève, le train est annulé.', 'noun (formal)'],
            ['faute de', 'Faute de temps, nous avons arrêté.', 'noun, lack of'],
          ] },
          { t: 'tip', art: 'owl', md: '**Parce que** answers *pourquoi ?*; **puisque** cannot answer it. Compare: *Pourquoi es-tu en retard ? – Parce que le train est tombé en panne* and *Puisque le train est en panne, prenons un taxi.* For a result you want to stress, **c’est pour cette raison que** is useful: *C’est pour cette raison que nous avons décidé de reporter.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Il est resté **parce qu’**il avait du travail.', n: 'New information.' },
            { s: '**Puisque** tu es là, aide-moi.', n: 'The listener knows the reason.' },
            { s: '**Grâce à** ses efforts, l’équipe a gagné.', n: 'A good cause.' },
            { s: '**À cause de** la pluie, le match est annulé.', n: 'A bad cause.' },
            { s: '**Faute de** temps, nous avons arrêté la réunion.', n: 'For lack of.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right connector.', items: [
            { q: '___ la grève, le train est annulé.', o: ['À cause de', 'Parce que', 'Puisque'], why: 'A noun follows: *à cause de* (bad cause).' },
            { q: '___ ses efforts, l’équipe a gagné.', o: ['Grâce à', 'À cause de', 'Parce que'], why: 'A good cause: *grâce à*.' },
            { q: 'Il est resté ___ il avait du travail.', o: ['parce qu’', 'à cause qu’', 'grâce qu’'], why: 'A clause: *parce que*.' },
            { q: '___ temps, nous avons arrêté.', o: ['Faute de', 'Parce que', 'Puisque'], why: 'For lack of time: *faute de temps*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with the connector in brackets.', items: [
            { q: 'Le train est annulé car il y a une grève. (à cause de)', cue: 'Le train', a: ['Le train est annulé à cause de la grève.'], why: '*à cause de* + noun.' },
            { q: 'Il a réussi car son frère l’a aidé. (grâce à)', cue: 'Il a réussi', a: ['Il a réussi grâce à son frère.', 'Il a réussi grâce à l’aide de son frère.'], why: '*grâce à* + noun.' },
            { q: 'Tu es là. Aide-moi. (puisque)', cue: 'Puisque', a: ['Puisque tu es là, aide-moi.'], why: '*puisque* + known fact.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '[Parce que] tu es là, aide-moi.', a: ['Puisque'], why: 'The listener knows the reason: *puisque*.' },
            { s: 'À [grâce] à la pluie, le match est annulé.', a: ['cause'], why: 'A bad cause: *à cause de*.' },
            { s: 'En [raisons] de la grève, le train est annulé.', a: ['raison'], why: '*en raison de*, singular.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Grâce à ses efforts, l’équipe a gagné.', why: '*grâce à* + noun.' },
            { a: 'Faute de temps, nous avons arrêté la réunion.', why: '*faute de* + noun.' },
            { a: 'Étant donné que les prix augmentent, nous devons agir.', why: '*étant donné que* + clause.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Good cause or bad cause?', groups: ['good cause', 'bad cause'], explain: ['groups'], items: [
            { s: 'grâce à ton aide', g: 0, why: '*grâce à* is positive.' },
            { s: 'à cause du bruit', g: 1, why: '*à cause de* is negative.' },
            { s: 'grâce au soleil', g: 0, why: 'Positive.' },
            { s: 'à cause de la grève', g: 1, why: 'Negative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Donc, si bien que, afin que',
      about: 'Express consequence and purpose.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To show the **consequence**, use **donc** (so), **par conséquent** (consequently), **c’est pourquoi** (that is why) and **si bien que** or **de sorte que** + indicative (so that, with the result that): *Il a plu, si bien que le match a été annulé.* With **tellement … que** and **si … que**, the result follows: *Il est tellement fatigué qu’il dort debout.* To express the **purpose**, use **pour que**, **afin que** (formal) + subjunctive and **pour**, **afin de** + infinitive: *Je t’appelle pour que tu viennes. Il travaille afin de gagner plus.*' },
          { t: 'table', caption: 'Consequence and purpose', explain: ['head', 'col2'], head: ['Link', 'Example', 'What follows'], rows: [
            ['donc, par conséquent', 'Il pleut, donc le match est annulé.', 'a clause'],
            ['c’est pourquoi', 'C’est pourquoi nous restons.', 'a clause'],
            ['si bien que', 'Il a plu, si bien que le match a été annulé.', 'indicative'],
            ['tellement … que', 'Il est tellement fatigué qu’il dort.', 'indicative'],
            ['pour que, afin que', 'Je t’appelle pour que tu viennes.', 'subjunctive'],
            ['pour, afin de', 'Il travaille afin de gagner plus.', 'infinitive'],
          ] },
          { t: 'tip', art: 'owl', md: '**de sorte que** takes the **indicative** for a real result (*Il a plu, de sorte que le match a été annulé*) and the **subjunctive** for a goal (*Parle fort de sorte que tout le monde t’entende*). **donc** can go in the middle: *Il est donc parti.* Do not start a sentence with **car**; use **en effet** (indeed) to explain: *Il est parti. En effet, il était fatigué.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Il pleut, **donc** le match est annulé.', n: 'A simple consequence.' },
            { s: 'Il a plu, **si bien que** le match a été annulé.', n: 'With the indicative.' },
            { s: 'Il est **tellement** fatigué **qu’**il dort debout.', n: 'Intensity and result.' },
            { s: 'Je t’appelle **pour que** tu **viennes**.', n: 'Purpose: subjunctive.' },
            { s: 'Il travaille **afin de** gagner plus.', n: 'Same subject: infinitive.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Je t’appelle pour que tu ___.', o: ['viennes', 'viens', 'viendras'], why: '*pour que* + subjunctive.' },
            { q: 'Il a plu, si bien que le match ___ annulé.', o: ['a été', 'soit', 'serait'], why: '*si bien que* + indicative.' },
            { q: 'Il travaille afin ___ gagner plus.', o: ['de', 'que', 'à'], why: '*afin de* + infinitive.' },
            { q: 'Il est ___ fatigué qu’il dort debout.', o: ['tellement', 'trop', 'si bien'], why: '*tellement … que*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two sentences.', items: [
            { q: 'Il a plu. Le match a été annulé. (si bien que)', cue: 'Il a plu', a: ['Il a plu, si bien que le match a été annulé.'], why: '*si bien que* + indicative.' },
            { q: 'Je t’appelle. Tu viens. (pour que)', cue: 'Je t’appelle', a: ['Je t’appelle pour que tu viennes.'], why: '*pour que* + subjunctive.' },
            { q: 'Il est fatigué. Il dort debout. (tellement … que)', cue: 'Il est', a: ['Il est tellement fatigué qu’il dort debout.'], why: '*tellement … que*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Il travaille ___ de gagner plus.', a: ['afin'], why: '*afin de* + infinitive.' },
            { q: 'Il pleut, ___ le match est annulé.', a: ['donc'], why: '*donc* = so.' },
            { q: 'Il est parti. ___ effet, il était fatigué.', a: ['En'], why: '*en effet* explains.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il a plu, si bien que le match a été annulé.', why: '*si bien que* + indicative.' },
            { a: 'Je t’appelle pour que tu viennes.', why: '*pour que* + subjunctive.' },
            { a: 'Il est tellement fatigué qu’il dort debout.', why: '*tellement … que*' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Je t’appelle pour que tu [viens].', a: ['viennes'], why: '*pour que* + subjunctive.' },
            { s: 'Il travaille afin [que] gagner plus.', a: ['de'], why: 'Same subject: *afin de* + infinitive.' },
            { s: 'Il est parti. [Car] il était fatigué.', a: ['En effet'], why: '*car* cannot start a sentence: *en effet*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Certes, mais',
      about: 'Structure an opinion text with arguments and counter-arguments.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'An opinion text in French has four parts. The **introduction** presents the subject and your thesis. The **development** gives your arguments, one per paragraph. A good development also meets an **objection** and answers it. The **conclusion** repeats your thesis in different words and may open the question. Use markers to guide the reader.' },
          { t: 'table', caption: 'Discourse markers', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['D’abord, premièrement', 'first of all'],
            ['En outre, de plus, par ailleurs', 'moreover, besides'],
            ['Certes … mais …', 'admittedly … but …'],
            ['On pourrait objecter que …', 'one could object that …'],
            ['Toutefois, néanmoins', 'however, nevertheless'],
            ['Par exemple, ainsi', 'for example, thus'],
            ['En conclusion, somme toute', 'in conclusion, all in all'],
          ] },
          { t: 'tip', art: 'owl', md: '**Certes … mais …** is the classic way to concede and then argue: *Certes, le télétravail fatigue parfois, mais il réduit le temps de transport.* Avoid *je pense que* too many times in an essay; use impersonal forms (*Il est clair que …*) or the nouns (*Ma position est que …*).' },
        ],
        [
          { t: 'examples', items: [
            { s: '**D’abord**, le télétravail permet de gagner du temps.', n: 'The first argument.' },
            { s: '**En outre**, il réduit la pollution.', n: 'Adding an argument.' },
            { s: '**Certes**, il y a des inconvénients, **mais** ils sont limités.', n: 'Concession then argument.' },
            { s: '**On pourrait objecter que** les équipes se voient moins.', n: 'An objection.' },
            { s: '**En conclusion**, le bilan reste positif.', n: 'The conclusion.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Where does it belong in the text?', groups: ['introduction', 'arguments', 'conclusion'], explain: ['groups'], items: [
            { s: 'Le télétravail est au cœur du débat.', g: 0, why: 'It presents the subject.' },
            { s: 'D’abord, il permet de gagner du temps.', g: 1, why: 'A first argument.' },
            { s: 'En conclusion, le bilan est positif.', g: 2, why: 'A conclusion.' },
            { s: 'En outre, il réduit la pollution.', g: 1, why: 'Adds an argument.' },
            { s: 'Je défendrai l’idée que le télétravail est bénéfique.', g: 0, why: 'States the thesis.' },
            { s: 'Somme toute, les avantages l’emportent.', g: 2, why: 'A conclusion.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right marker.', items: [
            { q: '___, le télétravail permet de gagner du temps.', o: ['D’abord', 'En conclusion', 'Pourtant'], why: 'A first argument.' },
            { q: '___, il y a des inconvénients, mais ils sont limités.', o: ['Certes', 'Donc', 'Enfin'], why: '*certes … mais*' },
            { q: '___, le bilan reste positif.', o: ['En conclusion', 'D’abord', 'En outre'], why: 'The conclusion.' },
            { q: 'On pourrait ___ que les équipes se voient moins.', o: ['objecter', 'objecté', 'objection'], why: '*on pourrait objecter que*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Certes, il y a des inconvénients, mais ils sont limités.', why: '*certes … mais*' },
            { a: 'En outre, il réduit la pollution.', why: 'Adding an argument.' },
            { a: 'En conclusion, le bilan reste positif.', why: 'The conclusion.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Add the marker given.', items: [
            { q: 'Le télétravail fatigue. Il réduit le temps de transport. (Certes … mais)', cue: 'Certes', a: ['Certes, le télétravail fatigue, mais il réduit le temps de transport.'], why: 'Concede, then argue.' },
            { q: 'Le télétravail réduit la pollution. (En outre)', cue: 'En outre', a: ['En outre, le télétravail réduit la pollution.'], why: 'Adding an argument.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___, il y a des inconvénients, mais ils sont limités.', a: ['Certes'], why: '*certes … mais*' },
            { q: 'Les équipes se voient moins, ___ ils communiquent plus.', a: ['pourtant', 'mais'], why: 'A contrast.' },
            { q: 'En ___, le bilan reste positif.', a: ['conclusion'], why: '*en conclusion*' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un essai et une réponse',
      about: 'Read a short opinion essay and a model counter-argument.',
      art: 'dragon',
      spreads: [
        [
          { t: 'reading', title: 'Pour la semaine de quatre jours', md: '**Pourquoi la semaine de quatre jours est une bonne idée**\nLa question du temps de travail est au cœur du débat public. Je défendrai l’idée que la semaine de quatre jours serait bénéfique pour les salariés comme pour les entreprises.\n\nD’abord, un jour de repos supplémentaire permet de mieux récupérer, si bien que les employés sont plus efficaces. En outre, la semaine de quatre jours réduit les déplacements, ce qui permet d’économiser du temps et de l’argent. Certes, certains métiers ne s’y prêtent pas, mais beaucoup d’entreprises ont montré qu’une organisation différente était possible.\n\nEn conclusion, étant donné les avantages, il serait temps d’expérimenter cette solution plus largement.' },
          { t: 'reading', title: 'Une objection', md: '**Une autre vision**\nOn pourrait objecter que la semaine de quatre jours ne convient pas à tout le monde. Faute de personnel suffisant, de nombreux services ne pourraient pas fermer un jour de plus. Par conséquent, la mesure risque d’accroître les inégalités entre les métiers. Toutefois, l’idée mérite d’être testée, à condition que chaque secteur puisse l’adapter.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'L’auteur défend la semaine de quatre jours.', a: 't', why: '*Je défendrai l’idée que la semaine de quatre jours serait bénéfique.*' },
            { q: 'Un jour de repos supplémentaire rend les employés moins efficaces.', a: 'f', why: 'It makes them more efficient.' },
            { q: 'L’auteur reconnaît que certains métiers ne s’y prêtent pas.', a: 't', why: '*Certes, certains métiers ne s’y prêtent pas*' },
            { q: 'La semaine de quatre jours existe déjà dans tous les pays.', a: 'ng', why: 'The text does not say that.' },
            { q: 'Le second texte pense que la mesure peut créer des inégalités.', a: 't', why: '*la mesure risque d’accroître les inégalités entre les métiers*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Comment l’essai commence-t-il ?', o: ['Par la présentation du sujet et de la thèse.', 'Par une conclusion.', 'Par une objection.'], why: 'The first paragraph presents the subject and states the thesis.' },
            { q: 'Pourquoi certains services ne pourraient-ils pas fermer un jour de plus ?', o: ['Faute de personnel suffisant.', 'À cause du coût.', 'Parce que la loi l’interdit.'], why: '*Faute de personnel suffisant*' },
            { q: 'Sous quelle condition l’idée mérite-t-elle d’être testée ?', o: ['Que chaque secteur puisse l’adapter.', 'Que le salaire augmente.', 'Que tout le monde soit d’accord.'], why: '*à condition que chaque secteur puisse l’adapter*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the connectors of cause or consequence.', items: [
            { s: 'Un jour de repos permet de mieux récupérer, [si bien que] les employés sont plus efficaces.', why: '*si bien que* introduces a consequence.' },
            { s: '[Étant donné] les avantages, il serait temps d’expérimenter.', why: '*étant donné* introduces a cause.' },
            { s: '[Faute de] personnel suffisant, de nombreux services ne pourraient pas fermer.', why: '*faute de* introduces a cause.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'La question est au ___ du débat public.', a: ['cœur', 'coeur'], why: '*au cœur du débat*' },
            { q: '___, certains métiers ne s’y prêtent pas.', a: ['Certes'], why: '*certes … mais*' },
            { q: 'La mesure risque d’___ les inégalités.', a: ['accroître', 'accroitre'], why: '*accroître* = to increase.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '___ la grève, le train est annulé.', o: ['À cause de', 'Parce que', 'Puisque'], why: '*à cause de* + noun.' },
      { q: 'Je t’appelle pour que tu ___.', o: ['viennes', 'viens', 'viendras'], why: '*pour que* + subjunctive.' },
      { q: 'Il a plu, ___ le match a été annulé.', o: ['si bien que', 'bien que', 'pour que'], why: '*si bien que* + indicative.' },
      { q: '___, il y a des inconvénients, mais ils sont limités.', o: ['Certes', 'Donc', 'Enfin'], why: '*certes … mais*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Il travaille ___ de gagner plus.', a: ['afin'], why: '*afin de* + infinitive.' },
      { q: '___ temps, nous avons arrêté.', a: ['Faute de'], why: '*faute de* + noun.' },
      { q: 'Il est tellement fatigué ___ il dort debout.', a: ['qu’', 'qu'], why: '*tellement … que*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the meaning.', pairs: [
      ['grâce à', 'thanks to'],
      ['à cause de', 'because of (bad)'],
      ['en outre', 'moreover'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Join the two sentences.', items: [
      { q: 'Il a plu. Le match a été annulé. (si bien que)', cue: 'Il a plu', a: ['Il a plu, si bien que le match a été annulé.'], why: '*si bien que* + indicative.' },
      { q: 'Tu es là. Aide-moi. (puisque)', cue: 'Puisque', a: ['Puisque tu es là, aide-moi.'], why: '*puisque*' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Grâce à ses efforts, l’équipe a gagné.', why: '*grâce à* + noun.' },
      { a: 'En conclusion, le bilan reste positif.', why: 'The conclusion.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Je t’appelle pour que tu [viens].', a: ['viennes'], why: '*pour que* + subjunctive.' },
    ] },
  ],
};
