// French C1, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Precise pronouns and agreement',
  goal: 'Use the relative and demonstrative pronouns of careful French and agree the past participle correctly. Learn lequel and its contractions, dont, ce dont, celui qui, quiconque, n’importe lequel, and the agreement of the participe passé.',
  art: 'pizza',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['relative pronouns', 'lequel', 'dont', 'demonstrative pronouns', 'past participle agreement'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Lequel, auquel, duquel, dont',
      about: 'Use the relative pronouns that follow a preposition.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'After a **preposition**, use **lequel, laquelle, lesquels, lesquelles**: *La table sur laquelle j’écris est vieille. Les raisons pour lesquelles il est parti sont claires.* With **à** the pronoun contracts: **auquel, à laquelle, auxquels, auxquelles**. With a phrase ending in **de** (près de, au bord de) it contracts too: **duquel, de laquelle, desquels, desquelles**: *Le lac au bord duquel nous campons est calme.* For **de + noun** or **de + verb**, use **dont**: *Le livre dont je parle est nouveau. L’homme dont la fille travaille ici est mon voisin.* To mean **what**, use **ce dont, ce à quoi, ce que, ce qui**: *Ce dont j’ai besoin, c’est de repos.*' },
          { t: 'table', caption: 'Relative pronouns after a preposition', explain: ['head', 'col1'], head: ['Pronoun', 'Use', 'Example'], rows: [
            ['lequel, laquelle, lesquels, lesquelles', 'after most prepositions', 'La table sur laquelle j’écris est vieille.'],
            ['auquel, à laquelle, auxquels, auxquelles', 'à + lequel', 'Le projet auquel je pense est ambitieux.'],
            ['duquel, de laquelle, desquels, desquelles', 'a phrase with de + lequel', 'Le lac au bord duquel nous campons est calme.'],
            ['dont', 'de + noun or verb', 'Le livre dont je parle est nouveau.'],
            ['ce dont, ce à quoi', 'what', 'Ce dont j’ai besoin, c’est de repos.'],
          ] },
          { t: 'tip', art: 'owl', md: 'For **people** after a preposition, **qui** is usual and lighter: *l’amie avec qui je voyage*. **Lequel** is also correct and more formal. After **parmi** and **entre**, use **lesquels** even for people: *des enseignants, parmi lesquels …* **Dont** replaces *de qui, duquel* and *de + noun*; do not use *dont* after a preposition: say *la maison près de laquelle j’habite*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'La table **sur laquelle** j’écris est vieille.', n: '*Lequel* after a preposition.' },
            { s: 'Le projet **auquel** je pense est ambitieux.', n: '*À + lequel* = *auquel*.' },
            { s: 'Le lac au bord **duquel** nous campons est calme.', n: '*De + lequel* = *duquel*.' },
            { s: 'Le livre **dont** je parle est nouveau.', n: '*Parler de*.' },
            { s: '**Ce dont** j’ai besoin, c’est de repos.', n: '*Avoir besoin de*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the contraction.', pairs: [
            ['à + lequel', 'auquel'],
            ['à + lesquels', 'auxquels'],
            ['de + lequel', 'duquel'],
            ['de + lesquelles', 'desquelles'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the relative pronoun.', items: [
            { q: 'La table sur ___ j’écris est vieille. (la table)', a: ['laquelle'], why: '*Sur* + *laquelle*.' },
            { q: 'Le projet ___ je pense est ambitieux. (à + lequel)', a: ['auquel'], why: '*Penser à*: *auquel*.' },
            { q: 'Le livre ___ je parle est nouveau.', a: ['dont'], why: '*Parler de*: *dont*.' },
            { q: 'Les amis avec ___ je voyage sont italiens. (les amis)', a: ['lesquels', 'qui'], why: '*Avec* + *lesquels* or *qui*.' },
            { q: 'Ce ___ j’ai besoin, c’est de repos.', a: ['dont'], why: '*Avoir besoin de*: *ce dont*.' },
            { q: 'Ce à ___ je pense, c’est à toi.', a: ['quoi'], why: '*Penser à*: *ce à quoi*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right pronoun.', items: [
            { q: 'Le projet ___ je pense est ambitieux.', o: ['auquel', 'dont', 'duquel'], why: '*Penser à*: *auquel*.' },
            { q: 'Les raisons pour ___ il est parti sont claires.', o: ['lesquelles', 'lesquels', 'dont'], why: 'Feminine plural: *lesquelles*.' },
            { q: 'La maison près de ___ j’habite est vieille.', o: ['laquelle', 'dont', 'quoi'], why: '*Près de* + *laquelle*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with a relative pronoun.', items: [
            { q: 'Je pense à ce projet. Il est ambitieux.', cue: 'Le projet', a: ['Le projet auquel je pense est ambitieux.'], why: '*Penser à*: *auquel*.' },
            { q: 'J’écris sur cette table. Elle est vieille.', cue: 'La table', a: ['La table sur laquelle j’écris est vieille.', "La table sur laquelle j'écris est vieille."], why: '*Sur* + *laquelle*.' },
            { q: 'Je parle de ce livre. Il est nouveau.', cue: 'Le livre', a: ['Le livre dont je parle est nouveau.'], why: '*Parler de*: *dont*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Le projet [dont] je pense est ambitieux.', a: ['auquel'], why: '*Penser à*: *auquel*.' },
            { s: 'Le livre [auquel] je parle est nouveau.', a: ['dont'], why: '*Parler de*: *dont*.' },
            { s: 'Les raisons pour [lesquels] il est parti sont claires.', a: ['lesquelles'], why: '*Les raisons* is feminine plural.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Le projet auquel je pense est ambitieux.', why: '*Auquel* after the noun.' },
            { a: 'Le livre dont je parle est nouveau.', why: '*Dont* after the noun.' },
            { a: 'La table sur laquelle j’écris est vieille.', why: '*Sur laquelle* after the noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Celui qui, quiconque, n’importe lequel',
      about: 'Use demonstrative and indefinite pronouns.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: '**Celui-ci** and **celui-là** mean *this one* and *that one*: *Je prends celui-ci.* **Celui, celle, ceux, celles** can also be followed by **qui, que, dont** or **de**: *Celui qui travaille réussit. Ma voiture et celle de Paul. Ceux dont je parle.* **Quiconque** means *anyone who*: *Quiconque ment sera puni.* **N’importe lequel, n’importe qui, n’importe quoi, n’importe où** mean *any one, anyone, anything, anywhere*: *Prends n’importe lequel.* **Chacun** (each one) and **l’un et l’autre** (both) are also useful.' },
          { t: 'table', caption: 'Demonstrative and indefinite pronouns', explain: ['head', 'col1'], head: ['Pronoun', 'Meaning', 'Example'], rows: [
            ['celui-ci / celui-là', 'this one / that one', 'Je prends celui-ci.'],
            ['celui qui / celle que', 'the one who / which', 'Celui qui travaille réussit.'],
            ['celle de / ceux de', 'the one(s) of', 'Ma voiture et celle de Paul.'],
            ['quiconque', 'anyone who (formal)', 'Quiconque ment sera puni.'],
            ['n’importe lequel', 'any one', 'Prends n’importe lequel.'],
            ['chacun, chacune', 'each one', 'Chacun son goût.'],
            ['l’un et l’autre', 'both', 'L’un et l’autre sont venus.'],
            ['ni l’un ni l’autre', 'neither', 'Ni l’un ni l’autre ne m’a répondu.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The pronoun **celui** can never stand alone: it needs **-ci, -là, qui, que, dont** or **de** after it. **Quiconque** is formal, and in speech people say **celui qui** or **tous ceux qui**. With **ni l’un ni l’autre**, the verb is singular or plural: *Ni l’un ni l’autre n’est venu* is the usual choice.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Je prends **celui-ci**.', n: 'This one.' },
            { s: '**Celui qui** travaille réussit.', n: 'The one who.' },
            { s: 'Ma voiture et **celle de** Paul.', n: 'The one of Paul.' },
            { s: '**Quiconque** ment sera puni.', n: 'Anyone who.' },
            { s: 'Prends **n’importe lequel**.', n: 'Any one.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the pronoun with its meaning.', pairs: [
            ['celui-ci', 'this one'],
            ['quiconque', 'anyone who'],
            ['n’importe lequel', 'any one'],
            ['l’un et l’autre', 'both'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ qui travaille réussit. (the one)', a: ['Celui'], why: '*Celui qui* = the one who.' },
            { q: 'Ma voiture et ___ de Paul. (the one)', a: ['celle'], why: '*Voiture* is feminine: *celle de*.' },
            { q: '___ ment sera puni. (anyone who)', a: ['Quiconque'], why: '*Quiconque* = anyone who.' },
            { q: 'Prends n’importe ___. (any one, masculine)', a: ['lequel'], why: '*N’importe lequel*.' },
            { q: '___ son goût. (each one)', a: ['Chacun'], why: '*Chacun son goût*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Ces livres sont intéressants, mais ___ de Paul est meilleur. (the one)', o: ['celui', 'ceux', 'celle'], why: '*Le livre* is masculine singular: *celui*.' },
            { q: 'Tous ___ qui veulent venir sont les bienvenus.', o: ['ceux', 'celui', 'celles'], why: 'Masculine plural: *ceux*.' },
            { q: 'Ces deux solutions sont bonnes. Prends ___.', o: ['n’importe laquelle', 'n’importe lequel', 'n’importe lesquels'], why: '*Solution* is feminine: *laquelle*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
            { q: 'Toute personne qui ment sera punie.', cue: 'Quiconque', a: ['Quiconque ment sera puni.'], why: '*Quiconque* + verb in the singular.' },
            { q: 'Prends un livre, peu importe lequel.', cue: 'Prends', a: ['Prends n’importe lequel.', "Prends n'importe lequel."], why: '*N’importe lequel*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '[Celui] qui travaillent réussissent.', a: ['Ceux'], why: 'The plural: *ceux qui*.' },
            { s: 'Ma voiture et [celui] de Paul.', a: ['celle'], why: '*Voiture* is feminine: *celle*.' },
            { s: '[Chacun] solution est bonne.', a: ['Chaque'], why: '*Chaque* goes before a noun; *chacun* stands alone.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Celui qui travaille réussit toujours.', why: '*Celui qui* + verb.' },
            { a: 'Prends n’importe lequel de ces livres.', why: '*N’importe lequel de* + noun.' },
            { a: 'Ma voiture et celle de Paul sont rouges.', why: '*Celle de* + a name.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'L’accord du participe passé',
      about: 'Agree the past participle with avoir, être and pronominal verbs.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'With **être**, the participle agrees with the **subject**: *Elle est partie.* With **avoir**, it agrees with the **direct object only if the object comes before the verb**: *Les fleurs qu’il a vues. Je les ai vus. Quelle robe as-tu choisie ?* If the object comes **after**, there is no agreement: *Il a vu les fleurs.* With **en**, the participle never agrees: *Des fleurs, il en a acheté.* With **pronominal verbs**, the participle agrees with the reflexive pronoun **if it is the direct object**: *Elle s’est lavée.* If the direct object comes after, there is no agreement: *Elle s’est lavé les mains.* If the pronoun is an **indirect object**, there is no agreement: *Ils se sont écrit.*' },
          { t: 'table', caption: 'Agreement of the participe passé', explain: ['head', 'col1'], head: ['Case', 'Rule', 'Example'], rows: [
            ['être', 'agrees with the subject', 'Elle est partie.'],
            ['avoir, object before', 'agrees with the object', 'Les fleurs qu’il a vues.'],
            ['avoir, object after', 'no agreement', 'Il a vu les fleurs.'],
            ['avoir with en', 'no agreement', 'Des fleurs, il en a acheté.'],
            ['pronominal, se is the object', 'agrees with se', 'Elle s’est lavée.'],
            ['pronominal, object after', 'no agreement', 'Elle s’est lavé les mains.'],
            ['pronominal, se is indirect', 'no agreement', 'Ils se sont écrit.'],
          ] },
          { t: 'tip', art: 'owl', md: 'To decide whether to agree, find the **direct object** and ask: **where is it?** *Il a vu quoi ?* The **answer** is the direct object. If it is **before** the verb (often *que, les, la, l’*, or a question phrase), agree. With **se**, ask whether you could say *à soi*: *Ils se sont écrit* (they wrote **to each other**), so no agreement.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Les fleurs **qu’il a vues**.', n: 'The object *que* comes first: agreement.' },
            { s: 'Il a **vu** les fleurs.', n: 'The object comes after: no agreement.' },
            { s: 'Elle **s’est lavée**.', n: '*Se* is the direct object: agreement.' },
            { s: 'Elle **s’est lavé** les mains.', n: 'The direct object *les mains* comes after: no agreement.' },
            { s: 'Ils **se sont écrit**.', n: '*Se* means *to each other*: no agreement.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Does the participle agree? Sort the sentences.', groups: ['agrees', 'does not agree'], explain: ['groups'], items: [
            { s: 'Les fleurs qu’il a vues.', g: 0, why: 'The object comes before.' },
            { s: 'Il a vu les fleurs.', g: 1, why: 'The object comes after.' },
            { s: 'Elle est partie.', g: 0, why: '*Être* agrees with the subject.' },
            { s: 'Elle s’est lavé les mains.', g: 1, why: 'The direct object comes after.' },
            { s: 'Elle s’est lavée.', g: 0, why: '*Se* is the direct object.' },
            { s: 'Ils se sont écrit.', g: 1, why: '*Se* is an indirect object.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the participe passé.', items: [
            { q: 'Les fleurs qu’il a ___. (voir)', a: ['vues'], why: 'The object *que* is feminine plural.' },
            { q: 'Quelle robe as-tu ___ ? (choisir)', a: ['choisie'], why: 'The object *quelle robe* comes before.' },
            { q: 'Elle est ___ à midi. (partir)', a: ['partie'], why: '*Être* agrees with *elle*.' },
            { q: 'Elle s’est ___. (laver)', a: ['lavée'], why: '*Se* is the direct object, feminine.' },
            { q: 'Elle s’est ___ les mains. (laver)', a: ['lavé'], why: 'The direct object comes after: no agreement.' },
            { q: 'Des fleurs, il en a ___. (acheter)', a: ['acheté'], why: 'With *en*: no agreement.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Les lettres que j’ai ___.', o: ['écrites', 'écrit', 'écrite'], why: 'The object *que* is feminine plural.' },
            { q: 'Elle s’est ___ les mains.', o: ['lavé', 'lavée', 'lavés'], why: 'The direct object comes after: no agreement.' },
            { q: 'Ils se sont ___ (they wrote to each other).', o: ['écrit', 'écrits', 'écrite'], why: '*Se* is indirect: no agreement.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Put the object first with a pronoun.', items: [
            { q: 'Il a vu les fleurs.', cue: 'Les fleurs', a: ['Les fleurs, il les a vues.'], why: 'The object comes before: agreement.' },
            { q: 'J’ai lu la lettre.', cue: 'Je', a: ['Je l’ai lue.', "Je l'ai lue."], why: '*L’* = *la lettre*: agreement.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Les fleurs qu’il a [vu] sont belles.', a: ['vues'], why: 'The object *que* comes before: agreement.' },
            { s: 'Elle est [parti] à midi.', a: ['partie'], why: '*Être* agrees with *elle*.' },
            { s: 'Elle s’est [lavée] les mains.', a: ['lavé'], why: 'The direct object comes after: no agreement.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Les fleurs qu’il a vues sont belles.', why: 'The object *que* comes before.' },
            { a: 'Elle s’est lavé les mains.', why: 'No agreement: the object comes after.' },
            { a: 'Des fleurs, il en a acheté.', why: 'With *en*: no agreement.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Faut-il simplifier l’orthographe ?',
      about: 'Read a short article on a language debate.',
      art: 'pizza',
      spreads: [
        [
          { t: 'reading', title: 'Le débat sur l’orthographe', md: 'Chaque année, le débat sur l’orthographe revient. Faut-il simplifier un système auquel tant de Français reprochent sa complexité ? Les règles dont on se plaint le plus sont celles de l’accord du participe passé : les élèves, pour lesquels ces règles semblent arbitraires, font souvent des fautes.\n\nLes partisans d’une réforme, parmi lesquels beaucoup d’enseignants, soutiennent que la langue appartient à ceux qui la parlent. Ceux qui s’y opposent, en revanche, rappellent que l’orthographe qu’ils ont apprise est un patrimoine.\n\nCe dont personne ne doute, c’est que la langue évolue. Quiconque a lu un texte ancien l’a constaté. Les mots que l’usage a imposés finissent toujours par entrer dans les dictionnaires, et les règles qui ont été simplifiées par le passé ne sont plus remises en cause.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Le débat sur l’orthographe revient chaque année.', a: 't', why: '*Chaque année, le débat sur l’orthographe revient.*' },
            { q: 'Les règles les plus critiquées sont celles de l’accord du participe passé.', a: 't', why: '*Les règles dont on se plaint le plus sont celles de l’accord du participe passé.*' },
            { q: 'Tous les enseignants s’opposent à une réforme.', a: 'f', why: 'Many teachers are among the supporters of reform.' },
            { q: 'Ceux qui s’opposent à la réforme voient l’orthographe comme un patrimoine.', a: 't', why: '*L’orthographe qu’ils ont apprise est un patrimoine.*' },
            { q: 'Les dictionnaires n’acceptent jamais de nouveaux mots.', a: 'f', why: '*Les mots que l’usage a imposés finissent toujours par entrer dans les dictionnaires.*' },
            { q: 'L’auteur est lui-même enseignant.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Quelles règles posent le plus de problèmes ?', o: ['Celles de l’accord du participe passé.', 'Celles de la ponctuation.', 'Celles de la prononciation.'], why: '*Les règles dont on se plaint le plus.*' },
            { q: 'Qui soutient une réforme ?', o: ['Beaucoup d’enseignants.', 'Tous les élèves.', 'Les dictionnaires.'], why: '*Parmi lesquels beaucoup d’enseignants.*' },
            { q: 'Sur quoi tout le monde est-il d’accord ?', o: ['La langue évolue.', 'L’orthographe est facile.', 'Il faut tout changer.'], why: '*Ce dont personne ne doute, c’est que la langue évolue.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the relative pronouns that follow a preposition.', items: [
            { s: 'Faut-il simplifier un système [auquel] tant de Français reprochent sa complexité ?', why: '*Reprocher à*: *auquel*.' },
            { s: 'Les élèves, [pour lesquels] ces règles semblent arbitraires, font des fautes.', why: '*Pour* + *lesquels*.' },
            { s: 'Les partisans d’une réforme, [parmi lesquels] beaucoup d’enseignants, soutiennent …', why: '*Parmi* + *lesquels*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Les règles ___ on se plaint le plus sont celles de l’accord.', a: ['dont'], why: '*Se plaindre de*: *dont*.' },
            { q: 'Ceux ___ s’y opposent rappellent que l’orthographe est un patrimoine.', a: ['qui'], why: '*Ceux qui*.' },
            { q: 'Les mots que l’usage a ___ finissent par entrer dans les dictionnaires. (imposer)', a: ['imposés'], why: 'The object *que* (*les mots*) comes before: *imposés*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ce dont personne ne doute, c’est que la langue évolue.', why: '*Ce dont* + clause + *c’est que*.' },
            { a: 'Quiconque a lu un texte ancien l’a constaté.', why: '*Quiconque* + verb.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'La table sur ___ j’écris est vieille.', o: ['laquelle', 'lequel', 'dont'], why: '*Sur* + *laquelle*.' },
      { q: 'Le livre ___ je parle est nouveau.', o: ['dont', 'duquel', 'auquel'], why: '*Parler de*: *dont*.' },
      { q: 'Les fleurs qu’il a ___.', o: ['vues', 'vu', 'vue'], why: 'The object *que* is feminine plural.' },
      { q: 'Elle s’est ___ les mains.', o: ['lavé', 'lavée', 'lavés'], why: 'The direct object comes after: no agreement.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Le projet ___ je pense est ambitieux. (à + lequel)', a: ['auquel'], why: '*Penser à*: *auquel*.' },
      { q: 'Ce ___ j’ai besoin, c’est de repos.', a: ['dont'], why: '*Avoir besoin de*: *ce dont*.' },
      { q: 'Quelle robe as-tu ___ ? (choisir)', a: ['choisie'], why: 'The object *quelle robe* comes before.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the pronoun with its meaning.', pairs: [
      ['à + lequel', 'auquel'],
      ['de + lesquels', 'desquels'],
      ['quiconque', 'anyone who'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
      { q: 'Je pense à ce projet. Il est ambitieux.', cue: 'Le projet', a: ['Le projet auquel je pense est ambitieux.'], why: '*Penser à*: *auquel*.' },
      { q: 'J’ai lu la lettre.', cue: 'Je', a: ['Je l’ai lue.', "Je l'ai lue."], why: '*L’* = *la lettre*: agreement.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Les fleurs qu’il a [vu] sont belles.', a: ['vues'], why: 'The object *que* comes before: agreement.' },
      { s: 'Elle est [parti] à midi.', a: ['partie'], why: '*Être* agrees with *elle*.' },
    ] },
  ],
};
