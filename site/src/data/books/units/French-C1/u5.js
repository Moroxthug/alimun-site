// French C1, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Concession, whatever and the subjunctive',
  goal: 'Express concession, indifference and hypothesis with the subjunctive. Learn quel que soit, qui que, quoi que, où que, quelque … que, si … que, à supposer que, pour peu que, sans que and quitte à.',
  art: 'pizza',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['subjunctive', 'concession', 'indefinite expressions', 'hypothesis', 'debate'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Quel que soit, quoi que, où que',
      about: 'Say that it does not matter who, what, which or where.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'To say that **something does not change the result**, French uses expressions with the **subjunctive**. **Quel que soit** means *whatever*, and **quel** agrees with the noun that follows: *Quel que soit ton choix, je te soutiendrai. Quelle que soit la raison, il a tort. Quels que soient les motifs, la décision est prise.* **Qui que** means *whoever*: *Qui que vous soyez, vous devez respecter les règles.* **Quoi que** means *whatever*: *Quoi qu’il dise, je ne le crois pas.* **Où que** means *wherever*: *Où que tu ailles, je te suivrai.*' },
          { t: 'table', caption: 'Whatever, whoever, wherever', explain: ['head', 'col1'], head: ['Expression', 'Meaning', 'Example'], rows: [
            ['quel que soit', 'whatever (agrees with the noun)', 'Quel que soit ton choix, je te soutiendrai.'],
            ['quelle que soit / quels que soient', 'whatever (feminine, plural)', 'Quelles que soient les raisons, il a tort.'],
            ['qui que', 'whoever', 'Qui que vous soyez, respectez les règles.'],
            ['quoi que', 'whatever', 'Quoi qu’il dise, je ne le crois pas.'],
            ['où que', 'wherever', 'Où que tu ailles, je te suivrai.'],
            ['quelque … que', 'however', 'Quelque intelligent qu’il soit, il se trompe.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Write **quel que** in two words when it means *whatever* and is followed by **être**: *quel que soit*. **Quelque** in one word before an adjective means *however*, and it does not agree: *quelque intelligents qu’ils soient*. **Quelques** with an **s** means *a few*. **Quoi que** (two words) is not **quoique** (one word, *although*). All of these take the **subjunctive**.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Quel que soit** ton choix, je te soutiendrai.', n: 'Masculine singular.' },
            { s: '**Quelles que soient** les raisons, il a tort.', n: 'Feminine plural.' },
            { s: '**Qui que** vous soyez, respectez les règles.', n: 'Whoever.' },
            { s: '**Quoi qu’**il dise, je ne le crois pas.', n: 'Whatever.' },
            { s: '**Où que** tu ailles, je te suivrai.', n: 'Wherever.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
            ['quoi que', 'whatever'],
            ['qui que', 'whoever'],
            ['où que', 'wherever'],
            ['quel que soit', 'whatever it may be'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the subjunctive.', items: [
            { q: 'Quel que ___ ton choix, je te soutiendrai. (être)', a: ['soit'], why: '*Quel que soit* + singular.' },
            { q: 'Quelles que ___ les raisons, il a tort. (être)', a: ['soient'], why: '*Quelles que soient* + plural.' },
            { q: 'Qui que vous ___, respectez les règles. (être)', a: ['soyez'], why: '*Qui que* + subjunctive.' },
            { q: 'Quoi qu’il ___, je ne le crois pas. (dire)', a: ['dise'], why: '*Quoi que* + subjunctive.' },
            { q: 'Où que tu ___, je te suivrai. (aller)', a: ['ailles'], why: '*Où que* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Quelle que ___ la décision, nous la respecterons.', o: ['soit', 'est', 'sera'], why: '*Quelle que soit*.' },
            { q: '___ soit ton choix, je te soutiendrai.', o: ['Quel que', 'Quelque', 'Quelques'], why: '*Quel que soit* = whatever.' },
            { q: 'Où que tu ___, je te suivrai.', o: ['ailles', 'vas', 'iras'], why: '*Où que* + subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the words in brackets.', items: [
            { q: 'Peu importe ton choix, je te soutiendrai.', cue: 'Quel que', a: ['Quel que soit ton choix, je te soutiendrai.'], why: '*Quel que soit* + noun.' },
            { q: 'Peu importe où tu vas, je te suivrai.', cue: 'Où que', a: ['Où que tu ailles, je te suivrai.'], why: '*Où que* + subjunctive.' },
            { q: 'Peu importe ce qu’il dit, je ne le crois pas.', cue: 'Quoi que', a: ['Quoi qu’il dise, je ne le crois pas.', "Quoi qu'il dise, je ne le crois pas."], why: '*Quoi que* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Quelles que [soit] les raisons, il a tort.', a: ['soient'], why: 'The noun *les raisons* is plural.' },
            { s: 'Où que tu [vas], je te suivrai.', a: ['ailles'], why: '*Où que* + subjunctive.' },
            { s: '[Quelque] soit ton choix, je te soutiendrai.', a: ['Quel que'], why: '*Quel que soit* is written in two words.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Quel que soit ton choix, je te soutiendrai.', why: '*Quel que soit* + noun.' },
            { a: 'Où que tu ailles, je te suivrai.', why: '*Où que* + subjunctive.' },
            { a: 'Qui que vous soyez, respectez les règles.', why: '*Qui que* + subjunctive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Si riche qu’il soit',
      about: 'Express however, whether and either with the subjunctive.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To say **however + adjective**, use **si, aussi, pour** or **quelque + adjective + que + subjunctive**: *Si riche qu’il soit, il n’est pas heureux. Aussi riche qu’il soit, il n’est pas heureux. Quelque riche qu’il soit …* A literary variant uses **inversion**: *Aussi riche soit-il, il n’est pas heureux.* With **tout … que**, the verb is usually in the **indicative** in modern French: *Tout riche qu’il est, il n’est pas heureux.* To say **whether … or …**, use **que … ou que …** with the subjunctive: *Qu’il pleuve ou qu’il vente, nous partirons.* For **either … or**, use **soit … soit**: *Soit tu viens, soit tu restes.*' },
          { t: 'table', caption: 'However, whether, either', explain: ['head', 'col1'], head: ['Construction', 'Meaning', 'Example'], rows: [
            ['si + adjective + que + subjunctive', 'however', 'Si riche qu’il soit, il n’est pas heureux.'],
            ['aussi + adjective + que + subjunctive', 'however', 'Aussi riche qu’il soit, il n’est pas heureux.'],
            ['adjective + soit-il', 'however (literary)', 'Aussi riche soit-il, il n’est pas heureux.'],
            ['tout + adjective + que + indicative', 'even though', 'Tout riche qu’il est, il n’est pas heureux.'],
            ['que … ou que …', 'whether … or …', 'Qu’il pleuve ou qu’il vente, nous partirons.'],
            ['soit … soit …', 'either … or …', 'Soit tu viens, soit tu restes.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In **que … ou que …**, **que** is repeated before each verb, and both verbs are in the **subjunctive**. After **si … que** the subjunctive shows concession, but **si … que** + **indicative** means **consequence**: *Il est si fatigué qu’il s’endort.* So check the meaning before you choose the mood. **Pour … que** is more formal than **si … que**.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Si riche qu’il soit**, il n’est pas heureux.', n: 'However rich he may be.' },
            { s: '**Aussi riche soit-il**, il n’est pas heureux.', n: 'A literary inversion.' },
            { s: '**Tout riche qu’il est**, il n’est pas heureux.', n: 'Even though he is rich.' },
            { s: '**Qu’il pleuve ou qu’il vente**, nous partirons.', n: 'Whether it rains or blows.' },
            { s: '**Soit** tu viens, **soit** tu restes.', n: 'Either … or.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Concession or consequence? Sort the sentences.', groups: ['concession (subjunctive)', 'consequence (indicative)'], explain: ['groups'], items: [
            { s: 'Si riche qu’il soit, il n’est pas heureux.', g: 0, why: 'However rich he may be.' },
            { s: 'Il est si fatigué qu’il s’endort.', g: 1, why: 'He is so tired that he falls asleep.' },
            { s: 'Aussi intelligent qu’il soit, il se trompe.', g: 0, why: 'However intelligent he may be.' },
            { s: 'Il est si content qu’il chante.', g: 1, why: 'He is so happy that he sings.' },
            { s: 'Quelque fatigué qu’il soit, il travaille.', g: 0, why: 'However tired he may be.' },
            { s: 'Il pleut si fort qu’on ne voit rien.', g: 1, why: 'It rains so hard that one sees nothing.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Si riche qu’il ___, il n’est pas heureux. (être)', a: ['soit'], why: '*Si … que* + subjunctive.' },
            { q: 'Aussi intelligent qu’il ___, il se trompe. (être)', a: ['soit'], why: '*Aussi … que* + subjunctive.' },
            { q: 'Tout riche qu’il ___, il n’est pas heureux. (être)', a: ['est'], why: '*Tout … que* + indicative.' },
            { q: 'Qu’il ___ ou qu’il vente, nous partirons. (pleuvoir)', a: ['pleuve'], why: '*Que … ou que* + subjunctive.' },
            { q: '___ tu viens, soit tu restes.', a: ['Soit'], why: '*Soit … soit …*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Si fatigué qu’il ___, il continue de travailler.', o: ['soit', 'est', 'sera'], why: 'Concession: subjunctive.' },
            { q: 'Il est si fatigué qu’il ___ en classe.', o: ['s’endort', 's’endorme', 's’endormît'], why: 'Consequence: indicative.' },
            { q: 'Qu’il pleuve ___ qu’il vente, nous partirons.', o: ['ou', 'et', 'mais'], why: '*Que … ou que …*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the words in brackets.', items: [
            { q: 'Il est riche, mais il n’est pas heureux.', cue: 'Si riche', a: ['Si riche qu’il soit, il n’est pas heureux.', "Si riche qu'il soit, il n'est pas heureux."], why: '*Si … que* + subjunctive.' },
            { q: 'Il pleut ou il vente, nous partirons.', cue: 'Qu’il', a: ['Qu’il pleuve ou qu’il vente, nous partirons.', "Qu'il pleuve ou qu'il vente, nous partirons."], why: '*Que … ou que …*' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Si riche qu’il [est], il n’est pas heureux. (concession)', a: ['soit'], why: 'Concession: subjunctive.' },
            { s: '[Ou] tu viens, soit tu restes.', a: ['Soit'], why: '*Soit … soit …*' },
            { s: 'Qu’il pleuve [et] qu’il vente, nous partirons.', a: ['ou'], why: '*Que … ou que …*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Si riche qu’il soit, il n’est pas heureux.', why: '*Si … que* + subjunctive.' },
            { a: 'Qu’il pleuve ou qu’il vente, nous partirons.', why: '*Que … ou que …*' },
            { a: 'Soit tu viens, soit tu restes.', why: '*Soit … soit …*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'À supposer que, pour peu que, sans que',
      about: 'Express hypothesis, small conditions and absence with the subjunctive.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Other conjunctions take the **subjunctive** too. **À supposer que** (supposing that) and **en admettant que** (granted that) introduce a **hypothesis**: *À supposer qu’il vienne, que ferons-nous ?* **Pour peu que** means *if only a little*: *Pour peu qu’il fasse beau, nous irons.* **Sans que** means *without*: *Il est parti sans que personne le voie.* **Quitte à** + infinitive means *even if it means*: *Quitte à perdre du temps, vérifions.* **Quoi qu’il en soit** means *be that as it may*: *Quoi qu’il en soit, nous partons.*' },
          { t: 'table', caption: 'More conjunctions with the subjunctive', explain: ['head', 'col1'], head: ['Expression', 'Meaning', 'Example'], rows: [
            ['à supposer que', 'supposing that', 'À supposer qu’il vienne, que ferons-nous ?'],
            ['en admettant que', 'granted that', 'En admettant qu’il ait raison, ce n’est pas une excuse.'],
            ['pour peu que', 'if only a little', 'Pour peu qu’il fasse beau, nous irons.'],
            ['sans que', 'without', 'Il est parti sans que personne le voie.'],
            ['quitte à + infinitive', 'even if it means', 'Quitte à perdre du temps, vérifions.'],
            ['quoi qu’il en soit', 'be that as it may', 'Quoi qu’il en soit, nous partons.'],
          ] },
          { t: 'tip', art: 'owl', md: 'If the **subject is the same**, use **sans** + infinitive, not *sans que*: *Il est parti sans dire un mot.* With **sans que**, the subjunctive is always used: *sans que personne le sache*. **Quitte à** takes only an infinitive, never *que*. **Quoi qu’il en soit** is a fixed phrase: the verb stays *soit*.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**À supposer qu’**il vienne, que ferons-nous ?', n: 'A hypothesis.' },
            { s: '**En admettant qu’**il ait raison, ce n’est pas une excuse.', n: 'Granted that.' },
            { s: '**Pour peu qu’**il fasse beau, nous irons.', n: 'If only a little.' },
            { s: 'Il est parti **sans que** personne le voie.', n: 'Without, with a different subject.' },
            { s: '**Quitte à** perdre du temps, vérifions.', n: 'Even if it means.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
            ['à supposer que', 'supposing that'],
            ['pour peu que', 'if only a little'],
            ['quitte à', 'even if it means'],
            ['quoi qu’il en soit', 'be that as it may'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the subjunctive.', items: [
            { q: 'À supposer qu’il ___, que ferons-nous ? (venir)', a: ['vienne'], why: '*À supposer que* + subjunctive.' },
            { q: 'En admettant qu’il ___ raison, ce n’est pas une excuse. (avoir)', a: ['ait'], why: '*En admettant que* + subjunctive.' },
            { q: 'Pour peu qu’il ___ beau, nous irons. (faire)', a: ['fasse'], why: '*Pour peu que* + subjunctive.' },
            { q: 'Il est parti sans que personne le ___. (voir)', a: ['voie'], why: '*Sans que* + subjunctive.' },
            { q: 'Quoi qu’il en ___, nous partons. (être)', a: ['soit'], why: 'The fixed phrase: *quoi qu’il en soit*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Il est parti ___ dire un mot.', o: ['sans', 'sans que', 'pour que'], why: 'The same subject: *sans* + infinitive.' },
            { q: 'Il est parti sans que personne le ___.', o: ['voie', 'voit', 'verra'], why: '*Sans que* + subjunctive.' },
            { q: 'Quitte ___ perdre du temps, vérifions.', o: ['à', 'de', 'que'], why: '*Quitte à* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the words in brackets.', items: [
            { q: 'Peut-être viendra-t-il. Que ferons-nous ?', cue: 'À supposer', a: ['À supposer qu’il vienne, que ferons-nous ?', "À supposer qu'il vienne, que ferons-nous ?"], why: '*À supposer que* + subjunctive.' },
            { q: 'Il est parti. Personne ne l’a vu.', cue: 'Il est parti sans que', a: ['Il est parti sans que personne le voie.'], why: '*Sans que* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'À supposer qu’il [vient], que ferons-nous ?', a: ['vienne'], why: '*À supposer que* + subjunctive.' },
            { s: 'Il est parti [sans que] dire un mot.', a: ['sans'], why: 'The same subject: *sans* + infinitive.' },
            { s: 'Pour peu qu’il [fait] beau, nous irons.', a: ['fasse'], why: '*Pour peu que* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'À supposer qu’il vienne, que ferons-nous ?', why: '*À supposer que* + subjunctive.' },
            { a: 'Il est parti sans que personne le voie.', why: '*Sans que* + subjunctive.' },
            { a: 'Quitte à perdre du temps, vérifions.', why: '*Quitte à* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un débat sur le centre-ville',
      about: 'Read a report on a public debate.',
      art: 'pizza',
      spreads: [
        [
          { t: 'reading', title: 'Compte rendu d’un débat public', md: 'Le maire a défendu le projet de fermer le centre-ville aux voitures : « Quelle que soit l’opinion de chacun, le centre-ville étouffe. Quoi que l’on fasse, il faudra agir. À supposer que nous attendions encore, le problème sera plus grave. »\n\nUn commerçant a répondu : « Si utile que soit ce projet, il faut protéger les commerces. Qu’on le veuille ou non, les clients viennent en voiture. Pour peu que le stationnement disparaisse, ils iront ailleurs. »\n\nUne habitante a proposé un compromis : « Quitte à tâtonner, essayons pendant un an, sans que personne soit lésé. Quoi qu’il en soit, il faut décider. »' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Le maire pense que le centre-ville étouffe.', a: 't', why: '*Le centre-ville étouffe.*' },
            { q: 'Le commerçant est favorable au projet sans réserve.', a: 'f', why: '*Il faut protéger les commerces.*' },
            { q: 'Selon le commerçant, les clients viennent en voiture.', a: 't', why: '*Les clients viennent en voiture.*' },
            { q: 'L’habitante propose d’essayer pendant un an.', a: 't', why: '*Essayons pendant un an.*' },
            { q: 'Le débat a duré toute la nuit.', a: 'ng', why: 'The text does not say.' },
            { q: 'L’habitante veut que personne ne soit lésé.', a: 't', why: '*Sans que personne soit lésé.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Que demande le commerçant ?', o: ['De protéger les commerces.', 'De supprimer les parkings.', 'De fermer les magasins.'], why: '*Il faut protéger les commerces.*' },
            { q: 'Quel compromis propose l’habitante ?', o: ['Essayer pendant un an.', 'Attendre dix ans.', 'Tout interdire.'], why: '*Essayons pendant un an.*' },
            { q: 'Que dit le maire du centre-ville ?', o: ['Il étouffe.', 'Il est calme.', 'Il est vide.'], why: '*Le centre-ville étouffe.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the subjunctive.', items: [
            { s: 'Quelle que [soit] l’opinion de chacun, le centre-ville étouffe. Quoi que l’on [fasse], il faudra agir.', why: '*Soit* and *fasse* follow *quelle que* and *quoi que*.' },
            { s: 'À supposer que nous [attendions] encore, le problème sera plus grave.', why: '*Attendions* follows *à supposer que*.' },
            { s: 'Si utile que [soit] ce projet, … Pour peu que le stationnement [disparaisse], ils iront ailleurs.', why: '*Soit* follows *si … que*; *disparaisse* follows *pour peu que*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Quelle que ___ l’opinion de chacun, le centre-ville étouffe. (être)', a: ['soit'], why: '*Quelle que soit* + singular.' },
            { q: 'Pour peu que le stationnement ___, les clients iront ailleurs. (disparaître)', a: ['disparaisse'], why: '*Pour peu que* + subjunctive.' },
            { q: 'Quitte à ___, essayons pendant un an. (tâtonner)', a: ['tâtonner'], why: '*Quitte à* + infinitive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Quoi qu’il en soit, il faut décider.', why: 'A fixed phrase.' },
            { a: 'Essayons pendant un an, sans que personne soit lésé.', why: '*Sans que* + subjunctive.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Quel que ___ ton choix, je te soutiendrai.', o: ['soit', 'est', 'sera'], why: '*Quel que soit*.' },
      { q: 'Où que tu ___, je te suivrai.', o: ['ailles', 'vas', 'iras'], why: '*Où que* + subjunctive.' },
      { q: 'Si riche ___ il soit, il n’est pas heureux.', o: ['qu’', 'que', 'de'], why: '*Si … que* + subjunctive; *que* elides before *il*.' },
      { q: 'Il est parti ___ personne le voie.', o: ['sans que', 'sans', 'pour que'], why: '*Sans que* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the subjunctive.', items: [
      { q: 'Quoi qu’il ___, je ne le crois pas. (dire)', a: ['dise'], why: '*Quoi que* + subjunctive.' },
      { q: 'Pour peu qu’il ___ beau, nous irons. (faire)', a: ['fasse'], why: '*Pour peu que* + subjunctive.' },
      { q: 'À supposer qu’il ___, que ferons-nous ? (venir)', a: ['vienne'], why: '*À supposer que* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
      ['quoi que', 'whatever'],
      ['où que', 'wherever'],
      ['quitte à', 'even if it means'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the words in brackets.', items: [
      { q: 'Peu importe ton choix, je te soutiendrai.', cue: 'Quel que', a: ['Quel que soit ton choix, je te soutiendrai.'], why: '*Quel que soit* + noun.' },
      { q: 'Il est riche, mais il n’est pas heureux.', cue: 'Si riche', a: ['Si riche qu’il soit, il n’est pas heureux.', "Si riche qu'il soit, il n'est pas heureux."], why: '*Si … que* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Quelles que [soit] les raisons, il a tort.', a: ['soient'], why: 'The noun *les raisons* is plural.' },
      { s: 'Où que tu [vas], je te suivrai.', a: ['ailles'], why: '*Où que* + subjunctive.' },
    ] },
  ],
};
