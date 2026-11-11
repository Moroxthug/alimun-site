// French B1, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Hopes and plans',
  goal: 'Talk about wishes, plans and regrets, and describe what you would like for the future. Use j’espère que and je voudrais que, the gerund with en, and the past conditional.',
  art: 'dragon',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing', 'speaking'], topics: ['wishes', 'hopes', 'espérer', 'gerund', 'present participle', 'past conditional', 'regrets'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'J’espère que, je voudrais que',
      about: 'Express hopes and wishes with the right mood.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'To talk about hopes and wishes, French uses different verbs, and the mood changes. After **j’espère que**, use the **indicative**, often the future: *J’espère que tu viendras.* After **je voudrais que**, **je souhaite que** and **j’aimerais que**, use the **subjunctive**: *Je voudrais que tu viennes.* If the subject is the same, use the infinitive: *J’espère venir. Je voudrais venir.*' },
          { t: 'table', caption: 'Hopes and wishes', explain: ['head', 'col2'], head: ['Verb', 'Example', 'Mood'], rows: [
            ['j’espère que', 'J’espère que tu réussiras.', 'indicative (future)'],
            ['je voudrais que', 'Je voudrais que tu réussisses.', 'subjunctive'],
            ['je souhaite que', 'Je souhaite que vous soyez heureux.', 'subjunctive'],
            ['j’aimerais que', 'J’aimerais que tu m’aides.', 'subjunctive'],
            ['j’ai envie de', 'J’ai envie de voyager.', 'infinitive'],
            ['je rêve de', 'Je rêve de vivre à la mer.', 'infinitive'],
          ] },
          { t: 'tip', art: 'owl', md: 'This is a classic trap: **espérer que** is followed by the indicative (*J’espère qu’il viendra*), while **souhaiter que** and **vouloir que** are followed by the subjunctive (*Je souhaite qu’il vienne*). Both express a wish, but the grammar is different. For a plan with the same subject, use **j’ai l’intention de** or **je compte** + infinitive.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**J’espère que** tu **réussiras** ton examen.', n: '*espérer que* + future.' },
            { s: '**Je voudrais que** tu **viennes** à ma fête.', n: '*vouloir que* + subjunctive.' },
            { s: '**J’ai envie de** voyager l’année prochaine.', n: '*avoir envie de* + infinitive.' },
            { s: '**Je rêve de** vivre au bord de la mer.', n: '*rêver de* + infinitive.' },
            { s: '**Je compte** partir en septembre.', n: '*compter* + infinitive for a plan.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'J’espère que tu ___ ton examen.', o: ['réussiras', 'réussisses', 'réussis'], why: 'After *espérer que*: the future.' },
            { q: 'Je voudrais que tu ___ à ma fête.', o: ['viennes', 'viendras', 'viens'], why: 'After *vouloir que*: the subjunctive.' },
            { q: 'Je souhaite que vous ___ heureux.', o: ['soyez', 'serez', 'êtes'], why: 'After *souhaiter que*: the subjunctive.' },
            { q: 'J’ai envie ___ voyager.', o: ['de', 'que', 'à'], why: '*avoir envie de* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Express the wish with the verb in brackets.', items: [
            { q: 'Tu viens à ma fête. (j’espère que)', cue: 'J’espère que', a: ['J’espère que tu viendras à ma fête.'], why: '*espérer que* + future.' },
            { q: 'Tu viens à ma fête. (je voudrais que)', cue: 'Je voudrais que', a: ['Je voudrais que tu viennes à ma fête.'], why: '*vouloir que* + subjunctive.' },
            { q: 'Je pars en septembre. (je compte)', cue: 'Je compte', a: ['Je compte partir en septembre.'], why: '*compter* + infinitive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'J’espère que tu réussiras ton examen.', why: '*espérer que* + future.' },
            { a: 'Je voudrais que vous veniez demain.', why: '*vouloir que* + subjunctive.' },
            { a: 'Je rêve de vivre au bord de la mer.', why: '*rêver de* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'J’espère que tu [viennes].', a: ['viendras'], why: 'After *espérer que*: the future.' },
            { s: 'Je voudrais que tu [viendras].', a: ['viennes'], why: 'After *vouloir que*: the subjunctive.' },
            { s: 'Je rêve [que] vivre à Paris.', a: ['de'], why: '*rêver de* + infinitive.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Indicative or subjunctive?', groups: ['indicative', 'subjunctive'], explain: ['groups'], items: [
            { s: 'J’espère que tu viendras.', g: 0, why: '*espérer que* + indicative.' },
            { s: 'Je voudrais que tu viennes.', g: 1, why: '*vouloir que* + subjunctive.' },
            { s: 'Je souhaite que tu sois heureux.', g: 1, why: '*souhaiter que* + subjunctive.' },
            { s: 'Je pense qu’il a raison.', g: 0, why: '*penser que* + indicative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'En marchant, en parlant',
      about: 'Use the gerund to say two things at the same time.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'The **gerund** (**le gérondif**) is made of **en** and the **present participle**, which ends in **-ant**. To form the participle, take the **nous** form of the present, remove **-ons** and add **-ant**: *nous parlons → parlant*; *nous finissons → finissant*; *nous faisons → faisant*. The gerund has the same form for everybody: *en parlant, en finissant*. Three verbs are irregular: **être → étant**, **avoir → ayant**, **savoir → sachant**.' },
          { t: 'table', caption: 'The gerund', explain: ['head', 'col2'], head: ['Infinitive', 'Gerund', 'Example'], rows: [
            ['marcher', 'en marchant', 'Il téléphone en marchant.'],
            ['lire', 'en lisant', 'Elle mange en lisant.'],
            ['faire', 'en faisant', 'En faisant du sport, on se sent mieux.'],
            ['écouter', 'en écoutant', 'Je travaille en écoutant de la musique.'],
            ['voir', 'en voyant', 'En voyant la mer, il a souri.'],
            ['prendre', 'en prenant', 'En prenant le bus, on économise.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The subject of the gerund is always the subject of the main verb: *Il mange en lisant* means he eats and he reads. If the subjects are different, use a full clause: *Il mange pendant que sa sœur lit.* The gerund is also used to say how you do something: *Elle apprend le français en regardant des films.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Il mange **en lisant** le journal.', n: 'Two actions at the same time.' },
            { s: 'Elle apprend le français **en regardant** des films.', n: 'How she does it.' },
            { s: '**En prenant** le bus, on économise de l’argent.', n: 'The means: by taking the bus.' },
            { s: 'Je me suis fait mal **en courant**.', n: 'While running.' },
            { s: 'Elle est sortie **en souriant**.', n: 'With a smile.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the gerund.', items: [
            { q: 'Il téléphone en___. (marcher)', a: ['marchant'], why: '*en marchant*' },
            { q: 'Elle mange en ___ le journal. (lire)', a: ['lisant'], why: '*en lisant*' },
            { q: 'Je travaille en ___ de la musique. (écouter)', a: ['écoutant', 'ecoutant'], why: '*en écoutant*' },
            { q: 'En ___ du sport, on se sent mieux. (faire)', a: ['faisant'], why: '*en faisant*' },
            { q: 'Il a souri en ___ la mer. (voir)', a: ['voyant'], why: '*en voyant*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with a gerund.', items: [
            { q: 'Il marche. Il téléphone.', cue: 'Il téléphone', a: ['Il téléphone en marchant.', 'Il marche en téléphonant.'], why: 'The second action with *en* + -ant.' },
            { q: 'Elle regarde des films. Elle apprend le français.', cue: 'Elle apprend', a: ['Elle apprend le français en regardant des films.'], why: 'How she learns: *en regardant*.' },
            { q: 'Nous écoutons de la musique. Nous travaillons.', cue: 'Nous travaillons', a: ['Nous travaillons en écoutant de la musique.'], why: '*en écoutant*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il mange en lisant le journal.', why: '*en lisant* after the main verb.' },
            { a: 'Elle apprend le français en regardant des films.', why: '*en regardant* tells how.' },
            { a: 'En prenant le bus, on économise de l’argent.', why: 'The gerund can start the sentence.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Il parle ___ en conduisant.', o: ['au téléphone', 'téléphone', 'au téléphonant'], why: 'Only the second verb is a gerund.' },
            { q: 'Elle chante ___.', o: ['en cuisinant', 'en cuisiner', 'en cuisine'], why: 'The gerund: *en cuisinant*.' },
            { q: 'Je me suis blessé ___.', o: ['en jouant au foot', 'à jouer au foot', 'jouant au foot en'], why: 'The gerund: *en jouant*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Il mange en [lire] le journal.', a: ['lisant'], why: 'After *en*: the gerund *lisant*.' },
            { s: 'Elle apprend en [regardons] des films.', a: ['regardant'], why: 'The gerund has one form: *en regardant*.' },
            { s: 'Il apprend en [écoutons] la radio.', a: ['écoutant', 'ecoutant'], why: 'The gerund has one form: *en écoutant*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'J’aurais dû, si j’avais su',
      about: 'Express regrets with the past conditional.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To say what you **should have done** or **could have done**, French uses the **past conditional**: the **conditional of avoir or être** and the **past participle**. *J’aurais dû partir plus tôt.* (I should have left earlier.) *Tu aurais pu m’appeler.* (You could have called me.) *Nous serions venus si nous avions su.* (We would have come if we had known.)' },
          { t: 'table', caption: 'The past conditional', explain: ['head'], quiz: true, head: ['', 'with avoir (faire)', 'with être (venir)'], rows: [
            ['je', 'j’aurais fait', 'je serais venu(e)'],
            ['tu', 'tu aurais fait', 'tu serais venu(e)'],
            ['il / elle / on', 'il aurait fait', 'elle serait venue'],
            ['nous', 'nous aurions fait', 'nous serions venu(e)s'],
            ['vous', 'vous auriez fait', 'vous seriez venu(e)(s)'],
            ['ils / elles', 'ils auraient fait', 'elles seraient venues'],
          ] },
          { t: 'tip', art: 'owl', md: 'Two phrases are very useful to express regret: **j’aurais dû** + infinitive (I should have) and **j’aurais pu** + infinitive (I could have). Add **si j’avais su** (if I had known) for a regret: *Si j’avais su, je serais venu.* This is the third type of **si** sentence: **si + plus-que-parfait, conditional past**.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**J’aurais dû** partir plus tôt.', n: 'A regret about the past.' },
            { s: 'Tu **aurais pu** m’appeler hier soir.', n: 'A reproach.' },
            { s: '**Si j’avais su**, **je serais venu**.', n: 'si + plus-que-parfait, past conditional.' },
            { s: 'Elle **aurait aimé** voyager plus.', n: 'A wish she could not fulfil.' },
            { s: 'Nous **aurions voulu** rester plus longtemps.', n: 'We would have liked to stay longer.' },
          ] },
          { t: 'dialogue', title: 'Un regret', lines: [
            { who: 'Sophie', s: 'Tu as raté le dernier train ?' },
            { who: 'Lucas', s: 'Oui. J’aurais dû partir plus tôt.' },
            { who: 'Sophie', s: 'Tu aurais pu me téléphoner. Je serais venue te chercher.' },
            { who: 'Lucas', s: 'Si j’avais su, je l’aurais fait. Merci pour la prochaine fois.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the past conditional.', items: [
            { q: 'J’___ dû partir plus tôt. (avoir)', a: ['aurais'], why: '*j’aurais dû*' },
            { q: 'Tu ___ pu m’appeler. (avoir)', a: ['aurais'], why: '*tu aurais pu*' },
            { q: 'Nous ___ venus si nous avions su. (être)', a: ['serions'], why: '*nous serions venus*' },
            { q: 'Elle ___ aimé voyager plus. (avoir)', a: ['aurait'], why: '*elle aurait aimé*' },
            { q: 'Ils ___ voulu rester. (avoir)', a: ['auraient'], why: '*ils auraient voulu*' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Express the regret.', items: [
            { q: 'Je n’ai pas étudié. (J’aurais dû…)', cue: 'J’aurais dû', a: ['J’aurais dû étudier.'], why: '*j’aurais dû* + infinitive.' },
            { q: 'Tu ne m’as pas téléphoné. (Tu aurais pu…)', cue: 'Tu aurais pu', a: ['Tu aurais pu me téléphoner.'], why: '*tu aurais pu* + infinitive.' },
            { q: 'Je ne savais pas. Je ne suis pas venu. (Si …)', cue: 'Si j’avais su', a: ['Si j’avais su, je serais venu.', 'Si j’avais su, je serais venue.'], why: 'si + plus-que-parfait, past conditional.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'J’aurais dû partir plus tôt.', why: '*j’aurais dû* + infinitive.' },
            { a: 'Si j’avais su, je serais venu.', why: 'si + plus-que-parfait, past conditional.' },
            { a: 'Tu aurais pu me téléphoner.', why: '*tu aurais pu* + infinitive.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Present, past or imaginary? Choose.', items: [
            { q: 'Si j’avais le temps, ___.', o: ['je viendrais', 'je serais venu', 'je viens'], why: 'Present imaginary: conditional.' },
            { q: 'Si j’avais su, ___.', o: ['je serais venu', 'je viendrais', 'je viendrai'], why: 'Past regret: past conditional.' },
            { q: 'Si j’ai le temps, ___.', o: ['je viendrai', 'je viendrais', 'je serais venu'], why: 'Likely: future.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un rêve et une décision',
      about: 'Read a letter about a dream and a short text about a decision.',
      art: 'dragon',
      spreads: [
        [
          { t: 'reading', title: 'Lettre à une amie', md: 'Chère Clara,\n\nJe t’écris de la gare, en attendant mon train. Tu te souviens de notre conversation sur nos rêves ? J’ai pris une décision : à la fin de l’année, je quitterai mon travail pour ouvrir une petite librairie. J’espère que tu viendras la voir, et je voudrais que tu me donnes ton avis sur le choix des livres.\n\nBien sûr, j’ai des doutes. Si j’avais dix ans de plus, j’aurais peut-être moins peur. Mon frère dit que j’aurais dû commencer plus tôt. Mais en réfléchissant bien, je me dis que c’est le bon moment.\n\nÉcris-moi vite !\nNadia' },
          { t: 'reading', title: 'Une décision difficile', md: 'Après avoir longtemps hésité, Karim a décidé de partir étudier à l’étranger. Il rêve de vivre dans un autre pays depuis qu’il est enfant. Ses parents voudraient qu’il reste, mais ils ont fini par comprendre. « J’aurais pu rester ici, dit-il, mais je regretterais toute ma vie de ne pas avoir essayé. »' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Nadia veut ouvrir une librairie.', a: 't', why: '*pour ouvrir une petite librairie*' },
            { q: 'Elle a déjà quitté son travail.', a: 'f', why: '*à la fin de l’année, je quitterai mon travail*' },
            { q: 'Nadia voudrait que Clara lui donne son avis.', a: 't', why: '*je voudrais que tu me donnes ton avis*' },
            { q: 'Le frère de Nadia pense qu’elle aurait dû commencer plus tôt.', a: 't', why: '*Mon frère dit que j’aurais dû commencer plus tôt.*' },
            { q: 'Nadia a un budget de 20 000 euros.', a: 'ng', why: 'The letter does not talk about money.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Où est Nadia quand elle écrit ?', o: ['À la gare.', 'Dans sa librairie.', 'Au travail.'], why: '*Je t’écris de la gare, en attendant mon train.*' },
            { q: 'Que veulent les parents de Karim ?', o: ['Qu’il reste.', 'Qu’il parte vite.', 'Qu’il change d’avis.'], why: '*Ses parents voudraient qu’il reste.*' },
            { q: 'Que regretterait Karim toute sa vie ?', o: ['De ne pas avoir essayé.', 'D’être parti.', 'D’avoir changé de travail.'], why: '*je regretterais toute ma vie de ne pas avoir essayé*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the gerunds in the texts.', items: [
            { s: 'Je t’écris de la gare, [en attendant] mon train.', why: '*en attendant* is a gerund.' },
            { s: 'Mais [en réfléchissant] bien, je me dis que c’est le bon moment.', why: '*en réfléchissant* is a gerund.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Nadia a pris une ___.', a: ['décision', 'decision'], why: '*J’ai pris une décision.*' },
            { q: 'Karim rêve de vivre dans un autre ___.', a: ['pays'], why: '*dans un autre pays*' },
            { q: 'Il a fini ___ comprendre.', a: ['par'], why: '*ils ont fini par comprendre*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'J’espère que tu ___ ton examen.', o: ['réussiras', 'réussisses', 'réussis'], why: 'After *espérer que*: the future.' },
      { q: 'Je voudrais que tu ___ à ma fête.', o: ['viennes', 'viendras', 'viens'], why: 'After *vouloir que*: the subjunctive.' },
      { q: 'Il mange en ___ le journal.', o: ['lisant', 'lire', 'lit'], why: 'The gerund: *en lisant*.' },
      { q: 'J’___ dû partir plus tôt.', o: ['aurais', 'aurai', 'avais'], why: 'The past conditional: *j’aurais dû*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Si j’avais ___, je serais venu. (savoir)', a: ['su'], why: '*si j’avais su*' },
      { q: 'J’ai envie ___ voyager.', a: ['de', 'd’'], why: '*avoir envie de* + infinitive.' },
      { q: 'En ___ du sport, on se sent mieux. (faire)', a: ['faisant'], why: '*en faisant*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
      ['j’aurais dû', 'I should have'],
      ['j’aurais pu', 'I could have'],
      ['j’espère que', 'I hope that'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Join the two sentences with a gerund.', items: [
      { q: 'Il marche. Il téléphone.', cue: 'Il téléphone', a: ['Il téléphone en marchant.', 'Il marche en téléphonant.'], why: '*en* + -ant.' },
      { q: 'Je n’ai pas étudié. (J’aurais dû…)', cue: 'J’aurais dû', a: ['J’aurais dû étudier.'], why: '*j’aurais dû* + infinitive.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Si j’avais su, je serais venu.', why: 'si + plus-que-parfait, past conditional.' },
      { a: 'Elle apprend le français en regardant des films.', why: '*en regardant* tells how.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'J’espère que tu [viennes].', a: ['viendras'], why: 'After *espérer que*: the future.' },
    ] },
  ],
};
