// French C2, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Subtle grammar',
  goal: 'Use the finer points of French grammar with confidence. Learn the mood after verbs of belief and doubt and after superlatives, the gérondif and the participe présent, the participe absolu, the expletive ne, ne … que and stylistic inversion.',
  art: 'cat',
  tags: { skills: ['grammar', 'reading', 'writing'], topics: ['subjunctive', 'gérondif', 'participe présent', 'expletive ne', 'inversion'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Je crois que, je ne crois pas que',
      about: 'Choose the mood after verbs of belief, doubt and after superlatives.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The choice between indicative and subjunctive follows the speaker’s **degree of certainty**. **Croire que**, **penser que** and **espérer que** take the **indicative** when affirmative: *Je crois qu’il viendra.* When **negative** or in a **question** with inversion, they usually take the **subjunctive**: *Je ne crois pas qu’il vienne.* *Croyez-vous qu’il vienne ?* **Douter que** takes the subjunctive: *Je doute qu’il vienne.* But **ne pas douter que** and **se douter que** take the indicative, because the speaker is sure: *Je ne doute pas qu’il viendra.* *Je me doute qu’il viendra.*' },
          { t: 'table', caption: 'Mood and certainty', explain: ['head', 'col0'], head: ['Expression', 'Mood', 'Example'], rows: [
            ['croire / penser que (affirmative)', 'indicative', 'Je crois qu’il viendra.'],
            ['ne pas croire / penser que', 'subjunctive', 'Je ne crois pas qu’il vienne.'],
            ['douter que', 'subjunctive', 'Je doute qu’il vienne.'],
            ['ne pas douter que / se douter que', 'indicative', 'Je ne doute pas qu’il viendra.'],
            ['espérer que', 'indicative', 'J’espère qu’il viendra.'],
          ] },
        ],
        [
          { t: 'text', md: 'The subjunctive is also used after a **superlative** and after **seul, unique, premier, dernier**, when the speaker gives a personal opinion or limit: *C’est le plus beau film que j’aie vu.* *Il est le seul qui puisse nous aider.* *C’est la première fois qu’il soit venu.* When the speaker states a plain fact, the indicative is possible: *C’est le plus grand pont qui existe.*' },
          { t: 'tip', art: 'owl', md: 'In a question with **intonation only**, the indicative stays: *Tu crois qu’il viendra ?* With **inversion** (*Crois-tu qu’il vienne ?*) the subjunctive is common. The subjunctive after a superlative signals a **subjective** judgement (*j’aie vu*); if you are stating a fact, the indicative is correct.' },
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'Je ne crois pas qu’il ___ à l’heure.', o: ['arrive', 'arrivera', 'arrive-t-il'], why: '*Ne pas croire que* + subjunctive.' },
            { q: 'Je me doute qu’il ___ en retard.', o: ['sera', 'soit', 'serait'], why: '*Se douter que* + indicative.' },
            { q: 'C’est le plus beau film que j’___ jamais vu.', o: ['aie', 'ai', 'avais'], why: 'A subjective superlative: subjunctive.' },
            { q: 'Il est le seul qui ___ nous aider.', o: ['puisse', 'peut', 'pourra'], why: '*Le seul qui* + subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Je crois qu’il ___ demain. (venir, futur simple)', a: ['viendra'], why: '*Croire que* + indicative.' },
            { q: 'Je doute qu’il ___ à l’heure. (venir, subjonctif)', a: ['vienne'], why: '*Douter que* + subjunctive.' },
            { q: 'Je ne doute pas qu’il ___ la vérité. (dire, présent)', a: ['dit'], why: '*Ne pas douter que* + indicative.' },
            { q: 'Crois-tu qu’il ___ raison ? (avoir, subjonctif)', a: ['ait'], why: 'Inverted question: subjunctive.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make the sentence negative.', items: [
            { q: 'Je pense qu’il viendra.', cue: 'Je ne pense pas', a: ['Je ne pense pas qu’il vienne.'], why: '*Ne pas penser que* + subjunctive.' },
            { q: 'Je crois qu’elle a raison.', cue: 'Je ne crois pas', a: ['Je ne crois pas qu’elle ait raison.'], why: '*Ne pas croire que* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Je ne crois pas qu’il [viendra].', a: ['vienne'], why: '*Ne pas croire que* + subjunctive.' },
            { s: 'Je doute qu’il [viendra] à l’heure.', a: ['vienne'], why: '*Douter que* + subjunctive.' },
            { s: 'C’est la seule personne qui [peut] m’aider. (the speaker’s opinion)', a: ['puisse'], why: '*Seul* + subjunctive for a personal judgement.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Gérondif, participe présent, participe absolu',
      about: 'Tell the gérondif from the participe présent and use the participe absolu.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'The **gérondif** is **en + -ant** and describes an action happening at the same time, the manner, or a condition. Its subject is **the same** as the main verb: *En sortant, j’ai vu Paul.* *Il a réussi en travaillant dur.* *En travaillant, tu réussiras.* The **participe présent** (**-ant** without *en*) is used in writing, to give a reason or to replace a relative clause: *Voyant la pluie, nous sommes restés.* *Les élèves travaillant dur réussiront.* It agrees with nothing, unlike an adjective: *des enfants obéissants* (adjective, agrees) but *des enfants obéissant à leurs parents* (participle, invariable).' },
          { t: 'table', caption: 'Gérondif and participe présent', explain: ['head', 'col0'], head: ['Form', 'Use', 'Example'], rows: [
            ['gérondif: en + -ant', 'time, manner or condition, same subject', 'En sortant, j’ai vu Paul.'],
            ['participe présent', 'cause (written), replaces a relative', 'Voyant la pluie, nous sommes restés.'],
            ['adjectif verbal', 'describes a noun, agrees', 'des enfants obéissants'],
            ['participe absolu', 'own subject, time or cause', 'Le travail terminé, ils sont partis.'],
          ] },
        ],
        [
          { t: 'text', md: 'The **participe absolu** has **its own subject**, different from the main clause: *Le soleil se couchant, nous sommes rentrés.* *Le travail terminé, ils sont partis.* *La nuit tombée, les rues se vidèrent.* It is formal and literary. Common fixed forms: **cela dit** (that said), **tout bien considéré** (all things considered), **tout compte fait** (all in all). The **infinitive clause** with *après avoir* or *avant de* is another compact form: *Après avoir fini, il est parti.* *Avant de partir, elle a fermé la porte.*' },
          { t: 'tip', art: 'owl', md: 'The **gérondif** and the main verb must have the **same subject**; otherwise it is a mistake: *En marchant dans la rue, la pluie a commencé* wrongly suggests that the rain was walking. The **participe absolu** is the exception, because it has its own subject on purpose. Use these structures in writing, rarely in speech.' },
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: '___ , nous avons rencontré une amie.', o: ['En sortant du cinéma', 'En sortie du cinéma', 'Sortant le cinéma'], why: 'A gérondif: simultaneity, same subject.' },
            { q: 'Le travail ___ , les ouvriers sont rentrés.', o: ['terminé', 'terminant', 'terminer'], why: 'A participe absolu: noun + past participle.' },
            { q: 'Elle a réussi ___ très dur.', o: ['en travaillant', 'travaillant en', 'à travaillant'], why: 'The gérondif expresses manner.' },
            { q: 'Les enfants ___ à leurs parents sont heureux.', o: ['obéissant', 'obéissants', 'obéissantes'], why: 'The participle is invariable here; it replaces *qui obéissent*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with a compact construction, using the words given.', items: [
            { q: 'Quand le travail a été terminé, les ouvriers sont rentrés.', cue: 'Le travail', a: ['Le travail terminé, les ouvriers sont rentrés.'], why: 'A participe absolu.' },
            { q: 'Pendant qu’elle marchait, elle chantait.', cue: 'En', a: ['En marchant, elle chantait.'], why: 'A gérondif.' },
            { q: 'Après qu’il a fini, il est parti.', cue: 'Après', a: ['Après avoir fini, il est parti.'], why: 'An infinitive clause with *après avoir*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the structure with its use.', pairs: [
            ['en sortant', 'gérondif: at the same time'],
            ['voyant la pluie', 'participe présent: cause'],
            ['la nuit tombée', 'participe absolu: own subject'],
            ['cela dit', 'fixed phrase: that said'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the faulty sentence.', items: [
            { s: '[En marchant dans la rue, la pluie a commencé].', a: ['En marchant dans la rue, j’ai senti la pluie commencer', 'Alors que je marchais dans la rue, la pluie a commencé'], why: 'The gérondif needs the same subject as the main verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Ne explétif, ne … que, à peine',
      about: 'Use the expletive ne, ne … que and stylistic inversion.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'The **expletive ne** (*ne explétif*) is a **ne** with no negative meaning. It appears in formal writing after verbs of fear and after some conjunctions: *Je crains qu’il ne vienne.* (I fear he will come.) *Partez avant qu’il ne pleuve.* *À moins qu’il ne soit malade, …* It is optional and slightly literary. **Ne … que** means *only*: *Il n’y a que lui.* *Je n’ai que dix euros.* **Ne … guère** means *hardly*: *Il ne dort guère.* **Ne … point** is literary for *pas*: *Il n’est point venu.*' },
          { t: 'table', caption: 'Ne with special meaning', explain: ['head', 'col0'], head: ['Form', 'Meaning', 'Example'], rows: [
            ['ne explétif', 'no negation (formal)', 'Je crains qu’il ne vienne.'],
            ['ne … que', 'only', 'Je n’ai que dix euros.'],
            ['ne … guère', 'hardly, scarcely', 'Il ne dort guère.'],
            ['ne … point', 'not (literary)', 'Il n’est point venu.'],
          ] },
        ],
        [
          { t: 'text', md: 'In formal and literary writing, the verb is **inverted** after certain adverbs placed first: **à peine** (*hardly*): *À peine était-il arrivé qu’il repartit.* **Peut-être** and **sans doute**: *Peut-être viendra-t-il.* *Sans doute est-il malade.* **Aussi** (meaning *therefore*): *Il était fatigué ; aussi est-il parti tôt.* **Ainsi** (*thus*): *Ainsi se termina la soirée.* In speech, these are replaced by simpler order: *Peut-être qu’il viendra.* *Il est sans doute malade.*' },
          { t: 'tip', art: 'owl', md: 'After **à peine**, the second clause starts with **que**: *À peine était-il arrivé **qu’**il repartit.* Do not add *ne* after *à peine*. **Aussi** at the start of a sentence means *therefore* and needs inversion; **aussi** meaning *also* does not: *Il vient aussi.* Be careful not to confuse them.' },
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'Je crains qu’il ___ vienne.', o: ['ne', 'ne pas', 'point'], why: 'The expletive *ne*, with no negative meaning.' },
            { q: 'Je ___ que dix euros.', o: ['n’ai', 'ne suis', 'n’ai pas'], why: '*Ne … que* = only: *je n’ai que dix euros*.' },
            { q: 'À peine ___-il arrivé qu’il repartit.', o: ['était', 'serait', 'fut'], why: 'Inversion after *à peine*, with the pluperfect.' },
            { q: 'Peut-être ___-t-il demain.', o: ['viendra', 'vient', 'venait'], why: 'Inversion after *peut-être* with a future.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite in a literary style, using the words given.', items: [
            { q: 'Peut-être qu’il viendra demain.', cue: 'Peut-être', a: ['Peut-être viendra-t-il demain.'], why: 'Inversion after *peut-être*.' },
            { q: 'Il est sans doute malade.', cue: 'Sans doute', a: ['Sans doute est-il malade.'], why: 'Inversion after *sans doute*.' },
            { q: 'Il est arrivé et il est reparti aussitôt.', cue: 'À peine', a: ['À peine était-il arrivé qu’il repartit.', 'À peine était-il arrivé qu’il est reparti.'], why: '*À peine* + inversion + *que*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
            { q: 'Il n’y a ___ lui pour résoudre ce problème. (only)', a: ['que'], why: '*Ne … que* = only.' },
            { q: 'Il ne dort ___. (hardly)', a: ['guère'], why: '*Ne … guère* = hardly.' },
            { q: 'Partez avant qu’il ne ___. (pleuvoir, subjonctif)', a: ['pleuve'], why: '*Avant que* + subjunctive, with expletive *ne*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'À peine [il était] arrivé qu’il repartit.', a: ['était-il'], why: 'Inversion after *à peine*.' },
            { s: 'Peut-être [il viendra-t-il] demain.', a: ['viendra-t-il'], why: 'Inversion after *peut-être*: the subject pronoun comes after the verb, once.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Le dernier bac',
      about: 'Read a short story and notice the advanced structures in context.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Le dernier bac', md: 'Le guichet fermé, Marta resta sur le quai et regarda s’éloigner le dernier bac. À peine était-il parti qu’une pluie fine se mit à tomber. Peut-être ne rentrerait-elle jamais.\n\n« Je ne crois pas qu’il y en ait un autre avant l’aube, dit l’homme du kiosque. Mais je me doute que vous trouverez un café ouvert. » Elle ne l’écouta guère. C’était la seule personne qui pût l’aider, et il ne lui offrait que des conseils.\n\nElle attendait depuis une heure quand un inconnu s’assit près d’elle. En souriant, il murmura : « Je crains que la nuit ne soit longue. » Sans doute était-il aussi fatigué qu’elle. Ils parlèrent de bateaux, de pluie, d’une sœur à Lisbonne.\n\nL’aube venue, la mer était calme. Le moteur tournant déjà, le premier bac attendait au quai. Tout bien considéré, pensa-t-elle, ce n’était pas une si mauvaise nuit. Et elle monta à bord.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Marta a manqué le dernier bac.', a: 't', why: '« Regarda s’éloigner le dernier bac. »' },
            { q: 'L’homme du kiosque est sûr qu’il y a un autre bac avant l’aube.', a: 'f', why: '« Je ne crois pas qu’il y en ait un autre. »' },
            { q: 'Marta a beaucoup écouté l’homme du kiosque.', a: 'f', why: '« Elle ne l’écouta guère. »' },
            { q: 'L’inconnu parle de bateaux, de pluie et d’une sœur.', a: 't', why: '« Ils parlèrent de bateaux, de pluie, d’une sœur à Lisbonne. »' },
            { q: 'Marta prend le premier bac du matin.', a: 't', why: '« Elle monta à bord. »' },
            { q: 'L’inconnu s’appelait Luc.', a: 'ng', why: 'The text does not give his name.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the grammar.', items: [
            { q: '« Je ne crois pas qu’il y en ait un autre. » What mood is *ait*?', o: ['Subjunctive, after a negative verb of belief.', 'Indicative.', 'Imperative.'], why: '*Ne pas croire que* + subjunctive.' },
            { q: '« À peine était-il parti qu’une pluie fine se mit à tomber. » What is the structure?', o: ['Inversion after à peine.', 'A question.', 'A conditional.'], why: '*À peine* + inversion + *que*.' },
            { q: '« Le guichet fermé, Marta resta sur le quai. » What is this?', o: ['A participe absolu.', 'A gérondif.', 'An infinitive clause.'], why: 'Noun + past participle with its own subject.' },
            { q: '« Je crains que la nuit ne soit longue. » What is *ne* here?', o: ['An expletive ne without negative meaning.', 'A real negation.', 'A pronoun.'], why: 'The expletive *ne* after *craindre que*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the structures of formal French.', items: [
            { s: '[À peine était-il parti] qu’une pluie fine se mit à tomber. [Peut-être ne rentrerait-elle jamais.]', why: 'Inversion after *à peine* and *peut-être*.' },
            { s: '[L’aube venue], la mer était calme. [Le moteur tournant déjà], le premier bac attendait.', why: 'Participes absolus.' },
            { s: '[Tout bien considéré], pensa-t-elle, ce n’était pas une si mauvaise nuit.', why: 'A fixed phrase: all things considered.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Le guichet ___, Marta resta sur le quai. (fermer, participe)', a: ['fermé'], why: 'A participe absolu.' },
            { q: 'Elle ne l’écouta ___. (hardly)', a: ['guère'], why: '*Ne … guère*.' },
            { q: 'Je crains que la nuit ne ___ longue. (être, subjonctif)', a: ['soit'], why: '*Craindre que* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'À peine était-il parti qu’une pluie fine se mit à tomber.', why: 'Inversion after *à peine*.' },
            { a: 'Tout bien considéré, ce n’était pas une si mauvaise nuit.', why: 'A fixed phrase.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Je ne crois pas qu’il ___ à l’heure.', o: ['arrive', 'arrivera', 'arrivait'], why: '*Ne pas croire que* + subjunctive.' },
      { q: 'Je me doute qu’il ___ en retard.', o: ['sera', 'soit', 'fût'], why: '*Se douter que* + indicative.' },
      { q: 'Le travail ___, ils sont partis.', o: ['terminé', 'terminant', 'terminer'], why: 'A participe absolu.' },
      { q: 'À peine ___-il arrivé qu’il repartit.', o: ['était', 'serait', 'fut'], why: 'Inversion after *à peine*, with the pluperfect.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Je n’ai ___ dix euros. (only)', a: ['que'], why: '*Ne … que*.' },
      { q: 'Il ne dort ___. (hardly)', a: ['guère'], why: '*Ne … guère*.' },
      { q: 'Je doute qu’il ___ à l’heure. (venir, subjonctif)', a: ['vienne'], why: '*Douter que* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the structure with its use.', pairs: [
      ['en sortant', 'gérondif: at the same time'],
      ['la nuit tombée', 'participe absolu: own subject'],
      ['cela dit', 'fixed phrase: that said'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite in a literary style, using the words given.', items: [
      { q: 'Peut-être qu’il viendra demain.', cue: 'Peut-être', a: ['Peut-être viendra-t-il demain.'], why: 'Inversion after *peut-être*.' },
      { q: 'Quand le travail a été terminé, les ouvriers sont rentrés.', cue: 'Le travail', a: ['Le travail terminé, les ouvriers sont rentrés.'], why: 'A participe absolu.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Je ne crois pas qu’il [viendra].', a: ['vienne'], why: '*Ne pas croire que* + subjunctive.' },
      { s: 'À peine [il était] arrivé qu’il repartit.', a: ['était-il'], why: 'Inversion after *à peine*.' },
    ] },
  ],
};
