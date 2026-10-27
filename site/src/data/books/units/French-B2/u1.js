// French B2, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Telling stories',
  goal: 'Tell a story with several time layers, link events precisely and describe a scene. Use the narrative tenses, the passé simple in reading, relative pronouns with prepositions and participle clauses.',
  art: 'owl',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['narrative tenses', 'passé simple', 'relative pronouns', 'lequel', 'ce qui', 'ce que', 'participle clauses', 'narrative links'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Il parla, il fut, il vit',
      about: 'Combine the narrative tenses and recognise the passé simple.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A story told in French needs several tenses at once. The **passé composé** (or the **passé simple** in writing) gives the events, one after the other. The **imparfait** gives the background: the weather, the place, the feelings, repeated actions. The **plus-que-parfait** goes back to what had already happened. *Il pleuvait quand nous sommes arrivés. Quelqu’un avait laissé la porte ouverte.* (It was raining when we arrived. Someone had left the door open.)' },
          { t: 'table', caption: 'The narrative tenses', explain: ['head', 'col2'], head: ['Tense', 'Role', 'Example'], rows: [
            ['passé composé', 'events, one after the other', 'Elle est entrée et a ouvert la fenêtre.'],
            ['imparfait', 'background and habits', 'Il faisait nuit. Tout le monde dormait.'],
            ['plus-que-parfait', 'what had already happened', 'Il avait oublié ses clés.'],
            ['passé simple', 'events, in written stories', 'Elle entra et ouvrit la fenêtre.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In spoken French, you never use the **passé simple**: you use the passé composé. You must however **recognise** it, because it fills novels, tales and history books. The imparfait stays the same in both spoken and written French.' },
        ],
        [
          { t: 'table', caption: 'Recognising the passé simple', explain: ['head', 'col2'], head: ['Passé simple', 'Passé composé', 'Verb'], rows: [
            ['il parla, ils parlèrent', 'il a parlé', 'parler'],
            ['il finit, ils finirent', 'il a fini', 'finir'],
            ['il vendit', 'il a vendu', 'vendre'],
            ['il fut, ils furent', 'il a été', 'être'],
            ['il eut', 'il a eu', 'avoir'],
            ['il vint, ils vinrent', 'il est venu', 'venir'],
            ['il vit', 'il a vu', 'voir'],
            ['il dut, il put, il voulut', 'il a dû, pu, voulu', 'devoir, pouvoir, vouloir'],
            ['il fit, il prit, il mit', 'il a fait, pris, mis', 'faire, prendre, mettre'],
          ] },
          { t: 'examples', items: [
            { s: 'Il **faisait** nuit quand elle **arriva** devant la maison.', n: 'Imparfait for the background, passé simple for the event.' },
            { s: 'Elle **frappa**, mais personne ne **répondit**.', n: 'Two events in a row.' },
            { s: 'Il **avait** peur, car il **n’avait jamais vu** cette ville.', n: 'Feelings in the imparfait; the earlier experience in the plus-que-parfait.' },
            { s: 'Les invités **vinrent** nombreux et **furent** accueillis par la maîtresse de maison.', n: 'Passé simple of venir and être.' },
            { s: 'Il **prit** son manteau et **sortit**.', n: 'Two quick events.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the passé composé.', pairs: [
            ['il parla', 'il a parlé'],
            ['il fut', 'il a été'],
            ['il vint', 'il est venu'],
            ['il vit', 'il a vu'],
            ['il fit', 'il a fait'],
            ['il put', 'il a pu'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right tense.', items: [
            { q: 'Il ___ nuit quand elle est arrivée.', o: ['faisait', 'a fait', 'fit'], why: 'A background: the imparfait.' },
            { q: 'Quand nous sommes arrivés, tout le monde ___ déjà parti.', o: ['était', 'est', 'sera'], why: 'Earlier than the arrival: the pluperfect *était parti*; here the auxiliary is in the imparfait.' },
            { q: 'Elle ___ la porte et entra. (ouvrir, written story)', o: ['ouvrit', 'ouvrait', 'ouvre'], why: 'An event in a written story: the passé simple *ouvrit*.' },
            { q: 'Hier, nous ___ au cinéma. (spoken)', o: ['sommes allés', 'allâmes', 'allions'], why: 'Spoken French: the passé composé.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence in the passé composé (spoken French).', items: [
            { q: 'Elle arriva à midi et prit un café.', cue: 'Elle', a: ['Elle est arrivée à midi et a pris un café.'], why: '*arriva* → *est arrivée*; *prit* → *a pris*.' },
            { q: 'Il fut surpris et ne dit rien.', cue: 'Il', a: ['Il a été surpris et n’a rien dit.'], why: '*fut* → *a été*; *dit* → *a dit*.' },
            { q: 'Ils vinrent et virent la maison.', cue: 'Ils', a: ['Ils sont venus et ont vu la maison.'], why: '*vinrent* → *sont venus*; *virent* → *ont vu*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Il [pleut] quand je suis sorti.', a: ['pleuvait'], why: 'A background in the past: the imparfait.' },
            { s: 'Quand elle est arrivée, il [est] déjà parti.', a: ['était'], why: 'Earlier than the arrival: *était parti*.' },
            { s: 'Il [fit] nuit quand nous sommes partis.', a: ['faisait'], why: 'The background is in the imparfait: *il faisait nuit*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Ce à quoi je pense, la ville dans laquelle',
      about: 'Use relative pronouns with prepositions, and ce qui, ce que, ce dont.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'At B1 you used **qui, que, où, dont**. After a **preposition** (avec, pour, dans, sur, chez …), use **lequel**: *la ville dans laquelle j’ai grandi*, *l’ami avec lequel je voyage*. **lequel** agrees with the noun: **lequel, laquelle, lesquels, lesquelles**. With **à** and **de** the forms merge: **auquel, à laquelle, auxquels, auxquelles**; **duquel, de laquelle, desquels, desquelles**. For a person, **qui** is possible after a preposition: *l’ami avec qui je voyage*.' },
          { t: 'table', caption: 'lequel and its forms', explain: ['head'], quiz: true, head: ['', 'masculine', 'feminine'], rows: [
            ['singular', 'lequel', 'laquelle'],
            ['plural', 'lesquels', 'lesquelles'],
            ['with à (singular)', 'auquel', 'à laquelle'],
            ['with à (plural)', 'auxquels', 'auxquelles'],
            ['with de (singular)', 'duquel', 'de laquelle'],
            ['with de (plural)', 'desquels', 'desquelles'],
          ] },
          { t: 'tip', art: 'owl', md: 'For **de**, **dont** is usually simpler: *le livre dont je parle*. Use **duquel** only after a longer preposition such as **à côté de**, **au milieu de**, **près de**: *le parc près duquel j’habite*.' },
        ],
        [
          { t: 'text', md: '**Ce qui, ce que, ce dont, ce à quoi** replace a whole idea or something not named. **Ce qui** is the subject, **ce que** the object: *Ce qui m’intéresse, c’est la musique. Je ne comprends pas ce que tu dis.* **Ce dont** goes with **de**: *Ce dont j’ai besoin, c’est du repos.* **Ce à quoi** goes with **à**: *Ce à quoi je pense, c’est mon voyage.* They often start a sentence for emphasis.' },
          { t: 'table', caption: 'ce qui, ce que, ce dont, ce à quoi', explain: ['head', 'col2'], head: ['Pronoun', 'Example', 'Use'], rows: [
            ['ce qui', 'Ce qui me plaît, c’est le calme.', 'subject'],
            ['ce que', 'Ce que je veux, c’est un café.', 'direct object'],
            ['ce dont', 'Ce dont j’ai besoin, c’est du repos.', 'de + something'],
            ['ce à quoi', 'Ce à quoi je pense, c’est mon voyage.', 'à + something'],
          ] },
          { t: 'examples', items: [
            { s: 'La ville **dans laquelle** j’ai grandi est au bord de la mer.', n: '*dans* + a feminine noun.' },
            { s: 'Voici l’ami **avec lequel** je voyage.', n: '*avec* + a masculine noun.' },
            { s: 'Les problèmes **auxquels** nous pensons sont graves.', n: '*penser à* → *auxquels*.' },
            { s: '**Ce qui** m’étonne, c’est son silence.', n: '*ce qui* is the subject.' },
            { s: 'Je ne sais pas **ce dont** elle a peur.', n: '*avoir peur de* → *ce dont*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right relative pronoun.', items: [
            { q: 'La maison dans ___ j’ai grandi est vieille.', o: ['laquelle', 'lequel', 'laquelle que'], why: '*maison* is feminine: *dans laquelle*.' },
            { q: 'Les amis avec ___ je voyage sont drôles.', o: ['lesquels', 'lequel', 'lesquelles'], why: 'Masculine plural: *avec lesquels*.' },
            { q: 'Les projets ___ nous pensons sont importants.', o: ['auxquels', 'dont', 'lesquels'], why: '*penser à* → *auquel / auxquels*.' },
            { q: '___ me plaît, c’est le calme.', o: ['Ce qui', 'Ce que', 'Ce dont'], why: 'The subject: *ce qui*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with a relative pronoun.', items: [
            { q: 'J’habite dans une ville. Cette ville est au bord de la mer.', cue: 'La ville', a: ['La ville dans laquelle j’habite est au bord de la mer.'], why: '*dans* + feminine: *dans laquelle*.' },
            { q: 'Je voyage avec un ami. Cet ami est drôle.', cue: 'L’ami', a: ['L’ami avec lequel je voyage est drôle.', 'L’ami avec qui je voyage est drôle.'], why: '*avec lequel* (or *avec qui* for a person).' },
            { q: 'J’ai besoin de repos. (Commencez par : Ce dont …)', cue: 'Ce dont', a: ['Ce dont j’ai besoin, c’est de repos.', 'Ce dont j’ai besoin, c’est du repos.'], why: '*avoir besoin de* → *ce dont*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'La ville dans laquelle j’ai grandi est petite.', why: '*dans laquelle* after the noun.' },
            { a: 'Ce que je veux, c’est un peu de calme.', why: '*ce que* + subject + verb, then *c’est*.' },
            { a: 'Les problèmes auxquels nous pensons sont graves.', why: '*auxquels* after *penser à*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'La ville [que] j’habite est belle.', a: ['dans laquelle', 'où'], why: 'You live *in* the city: *dans laquelle* or *où*.' },
            { s: '[Ce que] me plaît, c’est le calme.', a: ['Ce qui'], why: 'It is the subject: *ce qui*.' },
            { s: 'Le livre [que] je parle est génial.', a: ['dont'], why: '*parler de* → *dont*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Soudain, à peine, ayant fini',
      about: 'Link events precisely with narrative links and participle clauses.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To make a story flow, use **links** that show time and surprise. **Soudain** and **tout à coup** (suddenly) introduce an unexpected event; **aussitôt** (immediately) and **peu après** (soon after) show the order; **pendant ce temps** (meanwhile) shows two things at once. **Dès que** and **une fois que** (as soon as, once) take the same tense as in the main clause or the pluperfect/future perfect: *Dès qu’il est arrivé, il a téléphoné.* **À peine … que** (hardly … when) shows that the second event followed at once: *À peine était-il arrivé qu’il a téléphoné.*' },
          { t: 'table', caption: 'Narrative links', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['soudain, tout à coup', 'suddenly'],
            ['aussitôt, immédiatement', 'at once, immediately'],
            ['pendant ce temps', 'meanwhile'],
            ['peu après, quelques instants plus tard', 'soon after, a few moments later'],
            ['dès que, aussitôt que', 'as soon as'],
            ['à peine … que', 'hardly … when'],
            ['finalement, enfin', 'finally'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **à peine** at the start of a sentence, the subject and the verb are inverted: **À peine était-il** arrivé **qu’il** a téléphoné. This is a written, slightly formal style. In speech, say **Il venait d’arriver quand il a téléphoné.**' },
        ],
        [
          { t: 'text', md: 'A **participle clause** replaces a longer clause with a past participle or a present participle. **Ayant fini son travail, il est parti** means *Because he had finished his work, he left* (or *After finishing…*). **Étant arrivée en retard, elle a raté le début.** With a verb of movement, use **étant** + participle. Other short forms: **une fois arrivé** (once arrived), **sachant que** (knowing that), **voyant qu’il pleuvait** (seeing that it was raining). The subject of the participle clause is the same as the main subject.' },
          { t: 'examples', items: [
            { s: '**Soudain**, la lumière s’est éteinte.', n: 'An unexpected event.' },
            { s: '**Dès que** nous sommes arrivés, il a plu.', n: 'As soon as.' },
            { s: '**Ayant fini** son travail, il est parti.', n: 'Having finished his work, he left.' },
            { s: '**Étant arrivée** en retard, elle a raté le début.', n: 'Being late, she missed the start.' },
            { s: '**Voyant** qu’il pleuvait, nous sommes restés chez nous.', n: 'Seeing that it was raining.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with a participle clause.', items: [
            { q: 'Il a fini son travail. Il est parti.', cue: 'Ayant', a: ['Ayant fini son travail, il est parti.'], why: '*ayant* + participle.' },
            { q: 'Elle est arrivée en retard. Elle a raté le début.', cue: 'Étant', a: ['Étant arrivée en retard, elle a raté le début.'], why: '*étant arrivée* with agreement.' },
            { q: 'Il voyait qu’il pleuvait. Il a pris son parapluie.', cue: 'Voyant', a: ['Voyant qu’il pleuvait, il a pris son parapluie.'], why: 'The present participle *voyant*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right link.', items: [
            { q: '___, la lumière s’est éteinte.', o: ['Soudain', 'Pendant ce temps', 'Enfin'], why: 'An unexpected event: *soudain*.' },
            { q: 'Il était à la gare. ___, son amie préparait le dîner.', o: ['Pendant ce temps', 'Soudain', 'Dès que'], why: 'Two things at the same time.' },
            { q: '___ elle est arrivée, il a téléphoné.', o: ['Dès qu’', 'Pendant qu’', 'Avant qu’'], why: 'As soon as: *dès qu’*.' },
            { q: '___ était-il arrivé qu’il a téléphoné.', o: ['À peine', 'Dès que', 'Aussitôt'], why: '*à peine … que* needs inversion here.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Dès qu’elle est arrivée, il a téléphoné.', why: '*dès que* + passé composé.' },
            { a: 'Ayant fini son travail, il est parti.', why: 'Participle clause first.' },
            { a: 'Soudain, la lumière s’est éteinte.', why: '*soudain* at the start.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ ce temps, elle préparait le dîner.', a: ['Pendant'], why: '*pendant ce temps* = meanwhile.' },
            { q: 'À peine était-il arrivé ___ il a téléphoné.', a: ['qu’', 'qu'], why: '*à peine … que*' },
            { q: '___ fini son travail, il est parti.', a: ['Ayant'], why: '*ayant fini*' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Une histoire et une anecdote',
      about: 'Read a short story extract and a travel anecdote.',
      art: 'dog',
      spreads: [
        [
          { t: 'reading', title: 'La maison au bout de la rue', md: 'Il pleuvait depuis le matin quand Julie arriva devant la maison. Elle n’y était pas revenue depuis dix ans. Les volets, qui avaient été verts, étaient maintenant gris. Elle poussa la porte, qu’on avait laissée ouverte, et entra.\n\nDans le salon, rien n’avait changé : le même fauteuil, la même horloge dont le tic-tac emplissait le silence. Soudain, elle entendit un bruit à l’étage. Ayant pris son courage à deux mains, elle monta lentement l’escalier. À peine avait-elle ouvert la porte de la chambre qu’un chat bondit à ses pieds. Elle éclata de rire : c’était le chat de sa grand-mère, celui dont on lui avait tant parlé.' },
          { t: 'reading', title: 'Un voyage inattendu', md: 'L’été dernier, j’ai pris le train pour Lyon. Je venais de m’asseoir quand un homme s’est installé en face de moi. Il avait l’air fatigué, mais il souriait. Pendant ce temps, le train roulait à travers la campagne, et nous avons commencé à discuter. Ce qui m’a frappé, c’est sa façon de raconter les choses. Dès que nous sommes arrivés, il m’a donné un livre, auquel je pense encore.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Julie arrive devant la maison sous la pluie.', a: 't', why: '*Il pleuvait depuis le matin quand Julie arriva*' },
            { q: 'Julie était souvent revenue dans la maison.', a: 'f', why: '*Elle n’y était pas revenue depuis dix ans.*' },
            { q: 'Julie entend un bruit à l’étage.', a: 't', why: '*elle entendit un bruit à l’étage*' },
            { q: 'Le chat appartenait au voisin.', a: 'f', why: 'It was *le chat de sa grand-mère*.' },
            { q: 'La maison était à vendre.', a: 'ng', why: 'The text does not say that.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Pourquoi Julie rit-elle à la fin ?', o: ['Le bruit venait d’un chat.', 'Elle trouve un trésor.', 'Elle rencontre une amie.'], why: '*un chat bondit à ses pieds … elle éclata de rire*' },
            { q: 'Que veut dire « Ayant pris son courage à deux mains » ?', o: ['Après avoir rassemblé son courage.', 'Parce qu’elle n’avait pas peur.', 'Quand elle était fatiguée.'], why: 'A participle clause: she gathered her courage.' },
            { q: 'Qu’est-ce qui a frappé le narrateur dans le train ?', o: ['La façon de raconter de l’homme.', 'Le prix du billet.', 'La vitesse du train.'], why: '*Ce qui m’a frappé, c’est sa façon de raconter les choses.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the passé simple forms.', items: [
            { s: 'Julie [arriva] devant la maison et [entra].', why: '*arriva* and *entra* are the passé simple.' },
            { s: 'Elle [poussa] la porte et [monta] lentement l’escalier.', why: '*poussa* and *monta* are the passé simple.' },
            { s: 'Un chat [bondit] à ses pieds.', why: '*bondit* is the passé simple of *bondir*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Les volets, qui ___ été verts, étaient gris.', a: ['avaient'], why: '*qui avaient été verts* (plus-que-parfait).' },
            { q: 'Il m’a donné un livre, ___ je pense encore. (à + lequel)', a: ['auquel'], why: '*penser à* → *auquel*.' },
            { q: '___ nous sommes arrivés, il m’a donné un livre.', a: ['Dès que'], why: '*Dès que nous sommes arrivés*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Il ___ nuit quand elle est arrivée.', o: ['faisait', 'a fait', 'fit'], why: 'A background: the imparfait.' },
      { q: 'La ville dans ___ j’ai grandi est petite.', o: ['laquelle', 'lequel', 'que'], why: '*ville* is feminine: *dans laquelle*.' },
      { q: '___ me plaît, c’est le calme.', o: ['Ce qui', 'Ce que', 'Ce dont'], why: 'The subject: *ce qui*.' },
      { q: '___ fini son travail, il est parti.', o: ['Ayant', 'Étant', 'Avoir'], why: '*ayant fini*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Les problèmes ___ nous pensons sont graves. (à + lequel)', a: ['auxquels'], why: '*penser à* → *auxquels*.' },
      { q: '___ ce temps, elle préparait le dîner.', a: ['Pendant'], why: '*pendant ce temps*' },
      { q: 'Il prit son manteau et ___. (sortir, passé simple)', a: ['sortit'], why: '*il sortit*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the passé composé.', pairs: [
      ['il fut', 'il a été'],
      ['il vint', 'il est venu'],
      ['il fit', 'il a fait'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite with a participle clause.', items: [
      { q: 'Il a fini son travail. Il est parti.', cue: 'Ayant', a: ['Ayant fini son travail, il est parti.'], why: '*ayant* + participle.' },
      { q: 'Elle est arrivée en retard. Elle a raté le début.', cue: 'Étant', a: ['Étant arrivée en retard, elle a raté le début.'], why: '*étant arrivée*' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Dès qu’elle est arrivée, il a téléphoné.', why: '*dès que* + passé composé.' },
      { a: 'Ce que je veux, c’est un peu de calme.', why: '*ce que* + subject + verb.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Le livre [que] je parle est génial.', a: ['dont'], why: '*parler de* → *dont*.' },
    ] },
  ],
};
