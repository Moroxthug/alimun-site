// French C2, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Rhetoric and persuasion',
  goal: 'Understand how speeches persuade and use the devices yourself. Learn the three appeals, the devices of the speech (anaphore, antithèse, chiasme, gradation), and how to read framing and loaded language critically.',
  art: 'parrot',
  tags: { skills: ['reading', 'listening', 'writing'], topics: ['ethos', 'pathos', 'logos', 'anaphore', 'antithèse', 'chiasme', 'gradation', 'framing', 'bias'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Ethos, pathos, logos',
      about: 'Recognise the three appeals a speaker uses to persuade.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'More than two thousand years ago, teachers of rhetoric in ancient Greece described three ways to persuade. They are still the basis of the art of speaking. **L’ethos** is the appeal to **character and credibility**: *Infirmière depuis vingt ans, je vois ce problème tous les jours.* **Le pathos** is the appeal to **emotion**: *Imaginez un enfant seul devant la porte fermée de la bibliothèque.* **Le logos** is the appeal to **logic and evidence**: *Les bibliothèques coûtent à la commune moins d’un pour cent de son budget, et pourtant elles servent un tiers de ses habitants.* A strong speech uses all three.' },
          { t: 'table', caption: 'The three appeals', explain: ['head', 'col0'], head: ['Appeal', 'Aim', 'Example'], rows: [
            ['ethos', 'make the audience trust the speaker', 'Infirmière depuis vingt ans, je vois ce problème tous les jours.'],
            ['pathos', 'make the audience feel', 'Imaginez un enfant seul devant la porte fermée.'],
            ['logos', 'convince with reason and facts', 'Les bibliothèques coûtent moins d’un pour cent du budget.'],
          ] },
        ],
        [
          { t: 'text', md: 'Each appeal can be misused. **Ethos** without substance becomes **name-dropping** (*Je connais personnellement le ministre*). **Pathos** alone can become manipulation: a moving story that proves nothing. **Logos** that is too heavy may bore an audience. A skilled speaker opens with ethos (*pourquoi vous devriez m’écouter*), builds a picture with pathos, then gives the facts with logos, and often returns to pathos at the end.' },
          { t: 'tip', art: 'owl', md: 'When you read a speech, mark each sentence with *E*, *P* or *L*. If most sentences are *P*, the speaker may rely on feeling more than proof. If most are *L*, the speech may be accurate but dry. The best speeches mix the three.' },
          { t: 'ex', kind: 'sort', h: 'Which appeal is it?', groups: ['ethos', 'pathos', 'logos'], explain: ['groups'], items: [
            { s: 'Enseignante depuis trente ans, je sais ce dont les enfants ont besoin.', g: 0, why: 'Credibility: the speaker’s experience.' },
            { s: 'Voyez la salle de classe vide, la cour silencieuse.', g: 1, why: 'Emotion: a vivid picture.' },
            { s: 'Les résultats ont progressé de douze pour cent depuis le début du programme.', g: 2, why: 'Logic: a fact.' },
            { s: 'J’habite dans cette rue depuis toujours.', g: 0, why: 'Credibility.' },
            { s: 'Pensez à cette mère qui ne peut pas acheter un seul livre.', g: 1, why: 'Emotion.' },
            { s: 'Fermer la bibliothèque coûtera plus cher à la ville que ce que l’on économisera.', g: 2, why: 'Logic: cause and effect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which appeal does the speaker mainly use?', items: [
            { q: '« Je travaille dans cet hôpital depuis vingt ans. »', o: ['ethos', 'pathos', 'logos'], why: 'Credibility.' },
            { q: '« Imaginez perdre votre maison en une seule nuit. »', o: ['pathos', 'ethos', 'logos'], why: 'Emotion.' },
            { q: '« Les études montrent que le sommeil améliore les résultats de quinze pour cent. »', o: ['logos', 'pathos', 'ethos'], why: 'Evidence.' },
            { q: '« En tant que voisin et parent, je partage votre inquiétude. »', o: ['ethos', 'logos', 'pathos'], why: 'Building trust through a shared position.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the appeal with its aim.', pairs: [
            ['ethos', 'make the audience trust the speaker'],
            ['pathos', 'make the audience feel'],
            ['logos', 'convince with reason and facts'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Anaphore, antithèse, chiasme',
      about: 'Recognise and use the devices that give speeches rhythm and force.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Speakers use **devices** that make words easy to remember. **L’anaphore** repeats the same words at the start of successive sentences: *Nous n’attendrons pas. Nous ne nous tairons pas. Nous n’abandonnerons pas.* **L’antithèse** sets two opposite ideas side by side: *Nous choisissons l’espoir plutôt que la peur.* **La gradation** lists items of increasing strength: *un mot, une phrase, un cri.* **Le chiasme** reverses the order of two phrases: *Travailler pour vivre, non vivre pour travailler.* **La question rhétorique** needs no answer: *Si ce n’est nous, qui ?*' },
          { t: 'table', caption: 'Devices of the speech', explain: ['head', 'col0'], head: ['Device', 'What it does', 'Example'], rows: [
            ['anaphore', 'repeats the opening words', 'Nous n’attendrons pas. Nous ne nous tairons pas.'],
            ['antithèse', 'sets opposites side by side', 'L’espoir plutôt que la peur.'],
            ['gradation', 'lists in rising strength', 'un mot, une phrase, un cri'],
            ['chiasme', 'reverses the order', 'Travailler pour vivre, non vivre pour travailler.'],
            ['question rhétorique', 'asks without needing an answer', 'Si ce n’est nous, qui ?'],
          ] },
        ],
        [
          { t: 'text', md: 'A **métaphore filée** (extended metaphor) carries one image through a whole speech: a speaker might compare a town to a ship and speak of *affronter la tempête*, *un équipage solidaire* and *un port sûr*. It gives unity and colour. Do not mix images: a speaker who says *Il faut naviguer ce navire à travers le feu* mixes two metaphors, and the audience may smile in the wrong place.' },
          { t: 'tip', art: 'owl', md: 'To use these devices, **keep them short and rhythmic**. Anaphora works best with **three** repetitions. In your own speech, choose **one** main device and repeat it, instead of using five different ones in a paragraph.' },
          { t: 'ex', kind: 'match', h: 'Match the device with its example.', pairs: [
            ['anaphore', 'Nous n’attendrons pas. Nous ne nous tairons pas.'],
            ['antithèse', 'L’espoir plutôt que la peur.'],
            ['chiasme', 'Travailler pour vivre, non vivre pour travailler.'],
            ['gradation', 'un mot, une phrase, un cri'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which device is used?', items: [
            { q: '« Nous bâtirons des maisons. Nous bâtirons des écoles. Nous bâtirons l’espoir. »', o: ['anaphore', 'chiasme', 'antithèse'], why: 'The same words open each sentence.' },
            { q: '« Non pas les mots, mais les actes. »', o: ['antithèse', 'gradation', 'anaphore'], why: 'Two opposite ideas side by side.' },
            { q: '« Manger pour vivre, non vivre pour manger. »', o: ['chiasme', 'anaphore', 'gradation'], why: 'The order of the two phrases is reversed.' },
            { q: '« Si ce n’est maintenant, quand ? »', o: ['question rhétorique', 'gradation', 'chiasme'], why: 'A question that needs no answer.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite with the device given.', items: [
            { q: 'Nous n’abandonnerons pas, nous ne partirons pas en silence et nous n’oublierons pas.', cue: 'Nous n’abandonnerons pas. Nous', a: ['Nous n’abandonnerons pas. Nous ne partirons pas en silence. Nous n’oublierons pas.'], why: 'Anaphora: three sentences with the same opening.' },
            { q: 'Une ville sûre et juste et libre.', cue: 'Une ville sûre,', a: ['Une ville sûre, juste et libre.'], why: 'A list of three.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which device?', groups: ['anaphore', 'antithèse'], explain: ['groups'], items: [
            { s: 'Nous écouterons. Nous apprendrons. Nous agirons.', g: 0, why: 'The same word opens each sentence.' },
            { s: 'Non pas le temps, mais la volonté.', g: 1, why: 'Two opposite ideas.' },
            { s: 'Nous sommes là pour les faibles. Nous sommes là pour les pauvres. Nous sommes là pour vous.', g: 0, why: 'The same words open each sentence.' },
            { s: 'Petits pas, grands bonds.', g: 1, why: 'Contrast of small and great.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mixed metaphor.', items: [
            { s: 'Il faut piloter ce navire à travers le [feu] de la tempête économique.', a: ['tempête', 'houle', 'récifs'], why: 'A ship needs a sea image: *tempête*, *houle* or *récifs*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Cadrage et mots chargés',
      about: 'Read critically and notice how the same event can be presented in two ways.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: '**Framing** (*le cadrage*) means presenting the same facts in a way that guides the reader’s view. *La ville a réduit ses dépenses de cinq pour cent* and *La ville a préservé quatre-vingt-quinze pour cent de ses services* are both true, but they feel different. **Loaded words** (*les mots chargés*) have a strong positive or negative connotation: *un plan social* against *des licenciements*; *les manifestants* against *les casseurs*; *une réforme* against *un recul*. **The passive** can hide who is responsible: *Des erreurs ont été commises* does not say by whom.' },
          { t: 'table', caption: 'How framing works', explain: ['head', 'col0'], head: ['Technique', 'Example', 'Effect'], rows: [
            ['selection of facts', 'Dépenses réduites de 5 % / 95 % des services préservés', 'a different feeling about the same facts'],
            ['loaded words', 'plan social / licenciements', 'softer or harsher colour'],
            ['passive to hide the doer', 'Des erreurs ont été commises.', 'no responsibility is named'],
            ['headline size', 'A small story in a large headline', 'makes it seem important'],
          ] },
        ],
        [
          { t: 'text', md: 'A critical reader asks four questions of any text: **Qui parle ?** **Qu’est-ce qui est dit, et qu’est-ce qui est omis ?** **Quels mots portent un jugement ?** **À qui profite cette version ?** This is not cynicism; it is the basis of reading news, advertising and political speeches in any language. It also helps your own writing: if you know how framing works, you can choose to be fair.' },
          { t: 'tip', art: 'owl', md: 'In an exam, if you are asked to compare two reports of the same event, list the **loaded words** in each, say **what each leaves out**, and give the **effect**. Support each point with a short quotation.' },
          { t: 'ex', kind: 'sort', h: 'Does the word sound positive, or negative?', groups: ['positive', 'negative'], explain: ['groups'], items: [
            { s: 'un plan de sauvegarde de l’emploi', g: 0, why: 'A reassuring phrase that can hide job losses.' },
            { s: 'un régime', g: 1, why: 'More negative than *un gouvernement*.' },
            { s: 'une foule déterminée', g: 0, why: 'A positive description of protesters.' },
            { s: 'une meute', g: 1, why: 'Negative: suggests violence.' },
            { s: 'un conseil économe', g: 0, why: 'Approving: careful with money.' },
            { s: 'un conseil radin', g: 1, why: 'Disapproving.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which version is the most neutral?', items: [
            { q: '', o: ['Le conseil a réduit le budget de cinq pour cent.', 'Le conseil a sabré le budget.', 'Le conseil a préservé le budget.'], why: 'The first states a fact without loaded words.' },
            { q: '', o: ['Des milliers de personnes ont participé à la marche.', 'Une horde a envahi les rues.', 'Une foule héroïque a rempli les rues.'], why: 'The first is neutral.' },
            { q: '', o: ['L’entreprise a licencié 200 salariés.', 'L’entreprise a optimisé ses effectifs.', 'L’entreprise a brutalement jeté 200 salariés à la rue.'], why: 'The first names the action plainly.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make the sentence name who is responsible.', items: [
            { q: 'Des erreurs ont été commises dans la préparation.', cue: 'Les organisateurs', a: ['Les organisateurs ont commis des erreurs dans la préparation.', 'Les organisateurs ont commis des erreurs.'], why: 'The active voice names the doer.' },
            { q: 'Il a été décidé de fermer la bibliothèque.', cue: 'Le conseil', a: ['Le conseil a décidé de fermer la bibliothèque.'], why: 'The active voice names the doer.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un discours pour le jardin',
      about: 'Read a speech and a commentary on how it persuades.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Un discours pour le jardin', md: 'DISCOURS\n\nAmis, voisins, conseillers. J’habite à côté de ce jardin depuis quarante ans. J’y ai appris à faire du vélo ; mes enfants y ont appris à nager dans son bassin ; mon petit-fils y fera ses premiers pas sur l’herbe. Je ne suis pas une experte. Je suis une habitante, et je suis venue parler pour lui.\n\nImaginez ce jardin sans ses arbres. Imaginez le bassin comblé, les bancs disparus, l’aire de jeux grillagée. Imaginez votre petit-enfant demandant où est passé le vert, et imaginez ne pas avoir de réponse.\n\nLa mairie dit avoir besoin du terrain pour des logements. Les chiffres disent autre chose : la ville possède quarante bâtiments vides, et le jardin offre un air pur, de l’ombre et un lieu de rencontre pour trois mille personnes par semaine. Nous ne demandons pas à la mairie de choisir entre les logements et les arbres. Nous lui demandons de choisir les deux.\n\nNous ne nous tairons pas. Nous ne reculerons pas. Nous ne serons pas oubliés. Si ce n’est nous, qui ? Si ce n’est maintenant, quand ?\n\nCOMMENTAIRE\n\nL’oratrice ouvre sur l’ethos, avec quarante ans de souvenirs plutôt qu’une expertise. Le deuxième paragraphe est du pur pathos : trois pertes imaginées. Le logos arrive au troisième, avec des chiffres précis. La fin combine anaphore, gradation et deux questions rhétoriques.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'L’oratrice affirme être une experte en jardins.', a: 'f', why: '« Je ne suis pas une experte. Je suis une habitante. »' },
            { q: 'La mairie dit avoir besoin du terrain pour des logements.', a: 't', why: '« La mairie dit avoir besoin du terrain pour des logements. »' },
            { q: 'La ville possède quarante bâtiments vides.', a: 't', why: '« La ville possède quarante bâtiments vides. »' },
            { q: 'L’oratrice veut mettre les logements et les arbres en concurrence.', a: 'f', why: '« Nous ne demandons pas à la mairie de choisir entre les logements et les arbres. »' },
            { q: 'Le commentaire dit que le troisième paragraphe fait surtout appel à l’émotion.', a: 'f', why: '« Le logos arrive au troisième. »' },
            { q: 'Le petit-fils de l’oratrice vit déjà dans la ville.', a: 'ng', why: 'The text only says he will take his first steps there.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does the opening about forty years show?', o: ['Ethos: the speaker’s credibility and attachment.', 'Logos: a statistic.', 'Antithesis: two opposites.'], why: 'Credibility through experience.' },
            { q: 'What is the device in « Nous ne nous tairons pas. Nous ne reculerons pas. Nous ne serons pas oubliés. » ?', o: ['Anaphora', 'Chiasmus', 'Extended metaphor'], why: 'The same opening, repeated.' },
            { q: 'What is the function of « Imaginez… Imaginez… Imaginez… » ?', o: ['Pathos through repetition.', 'Logos through evidence.', 'Ethos through experience.'], why: 'Emotion with anaphora.' },
            { q: 'Why does the speaker mention the forty empty buildings?', o: ['As logical evidence against the council’s plan.', 'To appeal to the council’s feelings.', 'To show the speaker’s authority.'], why: 'A fact: logos.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the rhetorical questions and the repeated openings.', items: [
            { s: '[Si ce n’est nous, qui ?] [Si ce n’est maintenant, quand ?]', why: 'Two rhetorical questions.' },
            { s: '[Nous ne nous tairons pas. Nous ne reculerons pas. Nous ne serons pas oubliés.]', why: 'Anaphora.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Je ne suis pas une experte. Je suis une ___, et je suis venue parler pour lui.', a: ['habitante'], why: 'The speaker’s role.' },
            { q: 'Nous lui demandons de choisir les ___.', a: ['deux'], why: 'The speaker’s request.' },
            { q: 'Le jardin offre un lieu de rencontre pour trois mille ___ par semaine.', a: ['personnes'], why: 'The speaker’s fact.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Nous ne demandons pas à la mairie de choisir entre les logements et les arbres.', why: 'A sentence from the speech.' },
            { a: 'Le logos arrive au troisième paragraphe, avec des chiffres précis.', why: 'A sentence from the commentary.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: '« J’enseigne depuis trente ans. » This is mainly…', o: ['ethos', 'pathos', 'logos'], why: 'Credibility.' },
      { q: '« Travailler pour vivre, non vivre pour travailler. » This is…', o: ['chiasme', 'anaphore', 'gradation'], why: 'The order is reversed.' },
      { q: '« Nous bâtirons. Nous grandirons. Nous réussirons. » This is…', o: ['anaphore', 'antithèse', 'chiasme'], why: 'The same opening repeated.' },
      { q: 'Which phrase is the most neutral?', o: ['L’entreprise a licencié 200 salariés.', 'L’entreprise a optimisé ses effectifs.', 'L’entreprise a brutalement jeté 200 salariés.'], why: 'No loaded words.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the appeal with its aim.', pairs: [
      ['ethos', 'make the audience trust the speaker'],
      ['pathos', 'make the audience feel'],
      ['logos', 'convince with reason and facts'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Si ce n’est nous, qui ? C’est une question ___.', a: ['rhétorique'], why: 'A question that needs no answer.' },
      { q: '« Des erreurs ont été commises » utilise le ___ pour cacher qui est responsable.', a: ['passif'], why: 'The passive hides the doer.' },
      { q: 'Nous choisissons l’espoir plutôt que la peur : c’est une ___.', a: ['antithèse'], why: 'Two opposite ideas.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
      { q: 'Des erreurs ont été commises dans la préparation.', cue: 'Les organisateurs', a: ['Les organisateurs ont commis des erreurs dans la préparation.', 'Les organisateurs ont commis des erreurs.'], why: 'The active voice names the doer.' },
      { q: 'Une ville sûre et juste et libre.', cue: 'Une ville sûre,', a: ['Une ville sûre, juste et libre.'], why: 'A list of three.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Il faut piloter ce navire à travers le [feu] de la tempête.', a: ['tempête', 'houle', 'récifs'], why: 'A ship needs a sea image.' },
      { s: 'Infirmière depuis vingt ans, j’utilise le [logos] pour montrer que je suis crédible.', a: ['ethos'], why: 'Credibility is ethos.' },
    ] },
  ],
};
