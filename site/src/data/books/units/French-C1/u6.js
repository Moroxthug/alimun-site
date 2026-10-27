// French C1, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'The art of argument',
  goal: 'Build and defend a nuanced argument in a written commentary. Learn the connectors of argument, concession and refutation, the structure of a commentary, and figures of speech such as the rhetorical question, the litote and the antithesis.',
  art: 'croissant',
  tags: { skills: ['writing', 'vocabulary', 'reading', 'speaking'], topics: ['argument', 'connectors', 'concession', 'commentary', 'rhetoric'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Les connecteurs de l’argumentation',
      about: 'Link the parts of an argument with precise connectors.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'A good argument shows **how its parts fit together**. **D’une part … d’autre part …** presents two sides: *D’une part, la voiture est pratique ; d’autre part, elle pollue.* **Certes … mais …** grants a point and then answers it: *Certes, c’est cher, mais cela en vaut la peine.* **En revanche** (on the other hand) contrasts two things: *Il parle bien ; en revanche, il écrit mal.* **Or** introduces a fact that goes against what was just said: *On dit que c’est facile. Or, c’est très difficile.* **D’ailleurs** and **par ailleurs** add a point. **En effet** confirms. **En définitive** concludes.' },
          { t: 'table', caption: 'Connectors of argument', explain: ['head', 'col1'], head: ['Connector', 'Function', 'Example'], rows: [
            ['d’une part … d’autre part …', 'two sides', 'D’une part, la voiture est pratique ; d’autre part, elle pollue.'],
            ['certes … mais …', 'granted … but …', 'Certes, c’est cher, mais cela en vaut la peine.'],
            ['en revanche', 'on the other hand', 'Il parle bien ; en revanche, il écrit mal.'],
            ['or', 'now, but (against expectation)', 'On dit que c’est facile. Or, c’est très difficile.'],
            ['d’ailleurs / par ailleurs', 'besides, moreover', 'Il n’a pas voulu venir ; d’ailleurs, il était malade.'],
            ['en effet', 'indeed', 'Il est fatigué. En effet, il travaille depuis six heures.'],
            ['en définitive', 'in the end', 'En définitive, le projet reste utile.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Or** is a **logical** word, not the same as *gold* (*l’or*). It never starts the first sentence of a text; it follows another idea. **En revanche** compares two facts; **par contre** means the same and is common in speech, but some careful writers avoid it. In a French essay, **certes** almost always calls for a **mais** (or **cependant, pourtant**) later in the sentence or in the next.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**D’une part**, la voiture est pratique ; **d’autre part**, elle pollue.', n: 'Two sides.' },
            { s: '**Certes**, c’est cher, **mais** cela en vaut la peine.', n: 'Concession and answer.' },
            { s: 'Il parle bien ; **en revanche**, il écrit mal.', n: 'Contrast.' },
            { s: 'On dit que c’est facile. **Or**, c’est très difficile.', n: 'Against expectation.' },
            { s: '**En définitive**, le projet reste utile.', n: 'Conclusion.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the connector with its function.', pairs: [
            ['certes … mais', 'granted … but'],
            ['en revanche', 'on the other hand'],
            ['d’ailleurs', 'besides'],
            ['en définitive', 'in the end'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'D’une ___, la voiture est pratique ; d’autre part, elle pollue.', a: ['part'], why: '*D’une part … d’autre part …*' },
            { q: '___, c’est cher, mais cela en vaut la peine.', a: ['Certes'], why: '*Certes … mais …*' },
            { q: 'Il parle bien ; en ___, il écrit mal.', a: ['revanche'], why: '*En revanche* = on the other hand.' },
            { q: 'On dit que c’est facile. ___, c’est très difficile.', a: ['Or'], why: '*Or* introduces a fact against expectation.' },
            { q: 'En ___, le projet reste utile.', a: ['définitive'], why: '*En définitive* = in the end.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best connector.', items: [
            { q: 'Il est riche. ___, il n’est pas heureux.', o: ['Or', 'Quant à', 'Ainsi'], why: '*Or* introduces a surprising fact.' },
            { q: 'Il n’a pas voulu venir ; ___, il était malade.', o: ['d’ailleurs', 'en revanche', 'or'], why: '*D’ailleurs* adds a point.' },
            { q: 'Il est fatigué. ___, il travaille depuis six heures.', o: ['En effet', 'Certes', 'En revanche'], why: '*En effet* explains.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with the word in brackets.', items: [
            { q: 'C’est cher. Cela en vaut la peine.', cue: 'Certes', a: ['Certes, c’est cher, mais cela en vaut la peine.', "Certes, c'est cher, mais cela en vaut la peine."], why: '*Certes … mais …*' },
            { q: 'Il parle bien. Il écrit mal.', cue: 'Il parle bien ;', a: ['Il parle bien ; en revanche, il écrit mal.', 'Il parle bien ; en revanche il écrit mal.'], why: '*En revanche* contrasts the two.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '[Ou] on dit que c’est facile, c’est très difficile.', a: ['Or'], why: '*Or* is the logical connector.' },
            { s: 'D’une part, la voiture est pratique ; [d’une part], elle pollue.', a: ['d’autre part', "d'autre part"], why: '*D’une part … d’autre part …*' },
            { s: 'Certes, c’est cher, [car] cela en vaut la peine.', a: ['mais'], why: '*Certes … mais …*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Certes, c’est cher, mais cela en vaut la peine.', why: '*Certes … mais …*' },
            { a: 'Il parle bien ; en revanche, il écrit mal.', why: '*En revanche* after the semicolon.' },
            { a: 'En définitive, le projet reste utile.', why: '*En définitive* at the start.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Concession et réfutation',
      about: 'Concede a point and answer it with force.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'A strong text **admits a point** and then **refutes it**. **Il n’en reste pas moins que** (nevertheless) comes after a concession: *Il est riche ; il n’en reste pas moins que son entreprise est fragile.* **Force est de constater que** means *one must admit that*: *Force est de constater que le projet a échoué.* **On a beau + infinitive** means *no matter how much one …*: *On a beau l’expliquer, il ne comprend pas.* **Encore faut-il que + subjunctive** adds a **condition**: *Il faut des idées, encore faut-il qu’elles soient réalistes.* **Loin de là** means *far from it*: *Est-il heureux ? Loin de là.*' },
          { t: 'table', caption: 'Concession and refutation', explain: ['head', 'col1'], head: ['Expression', 'Meaning', 'Example'], rows: [
            ['il n’en reste pas moins que', 'nevertheless', 'Il est riche ; il n’en reste pas moins que son entreprise est fragile.'],
            ['force est de constater que', 'one must admit that', 'Force est de constater que le projet a échoué.'],
            ['on a beau + infinitive', 'no matter how much one …', 'On a beau l’expliquer, il ne comprend pas.'],
            ['encore faut-il que + subjunctive', 'but one still needs', 'Il faut des idées, encore faut-il qu’elles soient réalistes.'],
            ['loin de là', 'far from it', 'Est-il heureux ? Loin de là.'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **il n’en reste pas moins que**, use the **indicative**: *il n’en reste pas moins que son entreprise est fragile*. **Force est de constater** takes **que** + indicative; the verb **être** stays in the third person singular. With **on a beau**, the main clause comes after a comma and shows the **opposite** result: *On a beau crier, personne n’entend.* These phrases belong to **written and careful spoken French**.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Il est riche ; **il n’en reste pas moins que** son entreprise est fragile.', n: 'Nevertheless.' },
            { s: '**Force est de constater que** le projet a échoué.', n: 'One must admit.' },
            { s: '**On a beau** l’expliquer, il ne comprend pas.', n: 'No matter how much.' },
            { s: 'Il faut des idées, **encore faut-il qu’**elles **soient** réalistes.', n: 'A condition.' },
            { s: 'Est-il heureux ? **Loin de là.**', n: 'Far from it.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
            ['il n’en reste pas moins que', 'nevertheless'],
            ['force est de constater que', 'one must admit that'],
            ['on a beau', 'no matter how much'],
            ['loin de là', 'far from it'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Il n’en reste pas ___ que son entreprise est fragile.', a: ['moins'], why: '*Il n’en reste pas moins que*.' },
            { q: 'Force ___ de constater que le projet a échoué.', a: ['est'], why: '*Force est de constater que*.' },
            { q: 'On a ___ l’expliquer, il ne comprend pas.', a: ['beau'], why: '*On a beau* + infinitive.' },
            { q: 'Encore faut-il qu’elles ___ réalistes. (être)', a: ['soient'], why: '*Encore faut-il que* + subjunctive.' },
            { q: 'On a beau ___, personne n’entend. (crier)', a: ['crier'], why: '*On a beau* + infinitive.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'On a beau ___, il ne comprend pas.', o: ['l’expliquer', 'l’explique', 'l’expliquant'], why: '*On a beau* + infinitive.' },
            { q: 'Encore faut-il que les idées ___ réalistes.', o: ['soient', 'sont', 'seront'], why: '*Encore faut-il que* + subjunctive.' },
            { q: 'Il n’en reste pas moins que son entreprise ___ fragile.', o: ['est', 'soit', 'serait'], why: '*Il n’en reste pas moins que* + indicative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the words in brackets.', items: [
            { q: 'Le projet a échoué, il faut l’admettre.', cue: 'Force', a: ['Force est de constater que le projet a échoué.'], why: '*Force est de constater que* + indicative.' },
            { q: 'Il l’explique mais il ne comprend pas.', cue: 'On a beau', a: ['On a beau l’expliquer, il ne comprend pas.', "On a beau l'expliquer, il ne comprend pas."], why: '*On a beau* + infinitive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'On a beau [expliquons], il ne comprend pas.', a: ['expliquer'], why: '*On a beau* + infinitive.' },
            { s: 'Force [a] de constater que le projet a échoué.', a: ['est'], why: '*Force est de constater que*.' },
            { s: 'Encore faut-il qu’elles [sont] réalistes.', a: ['soient'], why: '*Encore faut-il que* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Force est de constater que le projet a échoué.', why: '*Force est de constater que* + clause.' },
            { a: 'On a beau l’expliquer, il ne comprend pas.', why: '*On a beau* + infinitive.' },
            { a: 'Il n’en reste pas moins que son entreprise est fragile.', why: '*Il n’en reste pas moins que* + indicative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Structure et figures de style',
      about: 'Plan a commentary and use the rhetorical question, the litote and the antithesis.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A **commentary** has three parts. The **introduction** states the topic and raises a question. The **development** gives arguments, each with an example, and answers the main objection. The **conclusion** sums up and opens to something new. Figures of speech make the text lively. A **rhetorical question** needs no answer: *Qui peut dire le contraire ?* A **litote** says less to mean more: *Ce n’est pas bête* means *it is clever*. An **antithesis** puts two opposites side by side: *Plus on parle, moins on écoute.*' },
          { t: 'table', caption: 'Figures of speech', explain: ['head', 'col1'], head: ['Figure', 'What it does', 'Example'], rows: [
            ['la question rhétorique', 'asks without waiting for an answer', 'Qui peut dire le contraire ?'],
            ['la litote', 'says less to mean more', 'Ce n’est pas bête. (= C’est intelligent.)'],
            ['l’antithèse', 'sets two opposites side by side', 'Plus on parle, moins on écoute.'],
            ['l’hyperbole', 'exaggerates', 'Je meurs de faim !'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use **one or two** figures of speech in a text, not more. A **litote** is often a **negation**: *Ce n’est pas mauvais* = *c’est bon*. Do not use an **hyperbole** in a formal commentary. A good **introduction** has three steps in sentences: a hook, the topic, the question. In a **conclusion**, avoid repeating the introduction word for word.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Qui peut dire le contraire ?**', n: 'A rhetorical question.' },
            { s: 'Ce n’est **pas bête**.', n: 'A litote: it is clever.' },
            { s: '**Plus on parle, moins on écoute.**', n: 'An antithesis.' },
            { s: 'Je **meurs de faim** !', n: 'An hyperbole.' },
            { s: 'Ce n’est **pas un mince enjeu**.', n: 'A litote: it is an important issue.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which figure of speech is it? Sort the sentences.', groups: ['question rhétorique', 'litote', 'antithèse'], explain: ['groups'], items: [
            { s: 'Qui peut dire le contraire ?', g: 0, why: 'A question that needs no answer.' },
            { s: 'Qui n’a jamais fait cette erreur ?', g: 0, why: 'A question that needs no answer.' },
            { s: 'Ce n’est pas mauvais.', g: 1, why: 'It means *it is good*.' },
            { s: 'Il n’est pas sot.', g: 1, why: 'It means *he is clever*.' },
            { s: 'Plus on parle, moins on écoute.', g: 2, why: 'Two opposites.' },
            { s: 'Petit budget, grandes idées.', g: 2, why: 'Two opposites.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the figure of speech with its example.', pairs: [
            ['la question rhétorique', 'Qui peut dire le contraire ?'],
            ['la litote', 'Ce n’est pas bête.'],
            ['l’antithèse', 'Plus on parle, moins on écoute.'],
            ['l’hyperbole', 'Je meurs de faim !'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '« Ce n’est pas mauvais » is …', o: ['a litote', 'a rhetorical question', 'an antithesis'], why: 'It says less to mean more.' },
            { q: '« Qui peut dire le contraire ? » is …', o: ['a rhetorical question', 'a litote', 'an hyperbole'], why: 'It needs no answer.' },
            { q: 'What does the conclusion of a commentary do?', o: ['It sums up and opens to something new.', 'It repeats the introduction.', 'It gives a new argument.'], why: 'A good conclusion sums up and opens.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Plus on parle, ___ on écoute.', a: ['moins'], why: 'The antithesis: *plus … moins …*' },
            { q: 'Ce n’est pas un ___ enjeu. (litote: important)', a: ['mince'], why: '*Pas un mince enjeu* = an important issue.' },
            { q: 'Qui peut dire le ___ ?', a: ['contraire'], why: 'A rhetorical question.' },
            { q: 'Ce n’est pas ___. (litote: it is clever)', a: ['bête'], why: '*Pas bête* = clever.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Plus on parle, [plus] on écoute. (antithesis)', a: ['moins'], why: 'The antithesis needs opposites: *plus … moins …*' },
            { s: 'Qui peut dire le [contrairement] ?', a: ['contraire'], why: '*Dire le contraire*.' },
            { s: 'Ce n’est pas [bêtement]. (litote: clever)', a: ['bête'], why: '*Pas bête* = clever.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Qui peut dire le contraire ?', why: 'A rhetorical question.' },
            { a: 'Plus on parle, moins on écoute.', why: 'The antithesis.' },
            { a: 'Ce n’est pas un mince enjeu.', why: 'A litote.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Le télétravail : liberté ou piège ?',
      about: 'Read a newspaper commentary.',
      art: 'croissant',
      spreads: [
        [
          { t: 'reading', title: 'Le télétravail : liberté ou piège ?', md: 'Le télétravail s’est installé dans les habitudes. D’une part, il offre une liberté précieuse : plus de temps pour soi, moins de trajets. D’autre part, il isole. Certes, beaucoup de salariés y gagnent en confort ; en revanche, les plus jeunes y perdent des occasions d’apprendre.\n\nForce est de constater que les entreprises hésitent encore : on a beau vanter la flexibilité, peu osent changer leurs règles. Qui peut croire qu’un écran remplace une conversation de couloir ? Il n’en reste pas moins que le retour au bureau à temps plein paraît improbable. Encore faut-il que chacun y trouve son compte.\n\nCe n’est pas un mince enjeu : en définitive, il s’agit moins de choisir un lieu que de choisir une manière de travailler.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Le télétravail offre plus de temps pour soi.', a: 't', why: '*Plus de temps pour soi, moins de trajets.*' },
            { q: 'Les plus jeunes y gagnent des occasions d’apprendre.', a: 'f', why: '*Les plus jeunes y perdent des occasions d’apprendre.*' },
            { q: 'Les entreprises changent leurs règles sans hésiter.', a: 'f', why: '*Les entreprises hésitent encore.*' },
            { q: 'L’auteur pense qu’un écran remplace une conversation de couloir.', a: 'f', why: 'It is a rhetorical question: *Qui peut croire … ?*' },
            { q: 'Le retour au bureau à temps plein paraît improbable.', a: 't', why: '*Il n’en reste pas moins que le retour au bureau à temps plein paraît improbable.*' },
            { q: 'L’auteur travaille à domicile.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Quel est l’inconvénient du télétravail ?', o: ['Il isole.', 'Il coûte cher.', 'Il fatigue les yeux.'], why: '*D’autre part, il isole.*' },
            { q: 'Que perdent les plus jeunes ?', o: ['Des occasions d’apprendre.', 'Du temps libre.', 'Leur emploi.'], why: '*Les plus jeunes y perdent des occasions d’apprendre.*' },
            { q: 'Que veut dire « Ce n’est pas un mince enjeu » ?', o: ['C’est un enjeu important.', 'C’est un petit enjeu.', 'Il n’y a pas d’enjeu.'], why: 'A litote.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the connectors of argument.', items: [
            { s: '[D’une part], il offre une liberté précieuse. [D’autre part], il isole.', why: 'Two sides.' },
            { s: '[Certes], beaucoup de salariés y gagnent ; [en revanche], les plus jeunes y perdent.', why: 'Concession and contrast.' },
            { s: '[Force est de constater que] les entreprises hésitent : [on a beau] vanter la flexibilité, peu osent changer.', why: 'Admission and *on a beau*.' },
            { s: '[Il n’en reste pas moins que] le retour au bureau paraît improbable. [Encore faut-il que] chacun y trouve son compte.', why: 'Refutation and condition.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'D’une ___, il offre une liberté précieuse.', a: ['part'], why: '*D’une part … d’autre part …*' },
            { q: '___ est de constater que les entreprises hésitent encore.', a: ['Force'], why: '*Force est de constater que*.' },
            { q: 'Ce n’est pas un ___ enjeu. (litote)', a: ['mince'], why: '*Pas un mince enjeu* = an important issue.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Qui peut croire qu’un écran remplace une conversation de couloir ?', why: 'A rhetorical question.' },
            { a: 'En définitive, il s’agit de choisir une manière de travailler.', why: '*En définitive* at the start.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '___, c’est cher, mais cela en vaut la peine.', o: ['Certes', 'Or', 'Quant à'], why: '*Certes … mais …*' },
      { q: 'Il parle bien ; ___, il écrit mal.', o: ['en revanche', 'en effet', 'd’ailleurs'], why: '*En revanche* contrasts.' },
      { q: 'On a beau ___, il ne comprend pas.', o: ['l’expliquer', 'l’explique', 'l’expliquait'], why: '*On a beau* + infinitive.' },
      { q: '« Qui peut dire le contraire ? » is …', o: ['a rhetorical question', 'a litote', 'an antithesis'], why: 'It needs no answer.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'D’une part, la voiture est pratique ; d’___ part, elle pollue.', a: ['autre'], why: '*D’une part … d’autre part …*' },
      { q: 'Il n’en reste pas ___ que son entreprise est fragile.', a: ['moins'], why: '*Il n’en reste pas moins que*.' },
      { q: 'Encore faut-il qu’elles ___ réalistes. (être)', a: ['soient'], why: '*Encore faut-il que* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the connector with its meaning.', pairs: [
      ['en revanche', 'on the other hand'],
      ['d’ailleurs', 'besides'],
      ['en définitive', 'in the end'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
      { q: 'C’est cher. Cela en vaut la peine.', cue: 'Certes', a: ['Certes, c’est cher, mais cela en vaut la peine.', "Certes, c'est cher, mais cela en vaut la peine."], why: '*Certes … mais …*' },
      { q: 'Le projet a échoué, il faut l’admettre.', cue: 'Force', a: ['Force est de constater que le projet a échoué.'], why: '*Force est de constater que*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'On a beau [expliquons], il ne comprend pas.', a: ['expliquer'], why: '*On a beau* + infinitive.' },
      { s: 'Force [a] de constater que le projet a échoué.', a: ['est'], why: '*Force est de constater que*.' },
    ] },
  ],
};
