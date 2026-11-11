// French C2, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Precision and nuance',
  goal: 'Choose the exact word for the exact shade of meaning. Learn near-synonyms and their connotations, natural collocations and fixed pairs, euphemism and litotes.',
  art: 'croissant',
  tags: { skills: ['vocabulary', 'reading', 'writing'], topics: ['near-synonyms', 'connotation', 'collocation', 'euphemism', 'litotes'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Regarder, contempler, fixer',
      about: 'Tell near-synonyms apart by what they suggest as well as what they mean.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At C2, knowing that two words are close is not enough. Near-synonyms differ in **denotation** (what they describe) and in **connotation** (what they suggest: approval, disapproval, formality). Take the verbs of looking. **Regarder** is neutral. **Jeter un coup d’œil** is a quick look. **Apercevoir** is to catch sight of, often by chance. **Contempler** is to look for a long time, often with admiration. **Fixer** is to look fixedly, sometimes rudely. **Épier** is to watch secretly.' },
          { t: 'table', caption: 'Verbs of looking', explain: ['head', 'col0'], head: ['Verb', 'What it suggests', 'Example'], rows: [
            ['regarder', 'neutral', 'Elle regarde par la fenêtre.'],
            ['jeter un coup d’œil', 'quick, casual', 'Il a jeté un coup d’œil à sa montre.'],
            ['apercevoir', 'catch sight of, by chance', 'J’ai aperçu le président dans la rue.'],
            ['contempler', 'long, admiring or dreamy', 'Ils contemplent les étoiles.'],
            ['fixer', 'fixed, often rude', 'Il me fixait sans rien dire.'],
            ['épier', 'secret, from hiding', 'Elle épiait ses voisins.'],
          ] },
        ],
        [
          { t: 'text', md: 'Connotation matters even more with adjectives for people. A thin person may be **mince** (neutral, often positive), **svelte** (elegant), **élancé** (tall and slim), **maigre** (negative) or **squelettique** (extreme, unhealthy). Someone who spends little is **économe** (positive), **regardant** (cautious, slightly negative), **radin** (informal, negative) or **avare** (very negative). Someone who keeps going is **persévérant** or **déterminé** (positive), but **têtu** or **obstiné** (negative).' },
          { t: 'tip', art: 'owl', md: 'A good dictionary marks connotation with labels such as *péjoratif*, *familier*, *soutenu*. Use them. In an exam, one wrong connotation (*Elle est radine avec son temps* said as praise) can change the whole message.' },
          { t: 'ex', kind: 'sort', h: 'Does the word praise, or criticise?', groups: ['praise', 'criticise'], explain: ['groups'], items: [
            { s: 'économe', g: 0, why: 'Approving: careful with money.' },
            { s: 'radin', g: 1, why: 'Disapproving: unwilling to spend.' },
            { s: 'déterminé', g: 0, why: 'Approving: firm and strong-minded.' },
            { s: 'obstiné', g: 1, why: 'Disapproving: refusing to change.' },
            { s: 'svelte', g: 0, why: 'Approving: thin in an elegant way.' },
            { s: 'squelettique', g: 1, why: 'Disapproving: unhealthily thin.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the most precise word.', items: [
            { q: 'Il est resté devant le tableau et l’a ___ pendant une heure, émerveillé.', o: ['contemplé', 'aperçu', 'épié'], why: '*Contempler*: to look for a long time with admiration.' },
            { q: 'Je n’ai fait que ___ le président, car sa voiture est passée très vite.', o: ['apercevoir', 'contempler', 'fixer'], why: '*Apercevoir*: to see briefly, often by chance.' },
            { q: 'Elle ___ derrière le rideau pour voir qui sonnait.', o: ['épiait', 'contemplait', 'fixait'], why: '*Épier*: to watch in secret.' },
            { q: 'Mon oncle est très ___ : il ne gaspille jamais rien, et je l’admire pour cela.', o: ['économe', 'radin', 'avare'], why: '*Économe* is positive; *radin* and *avare* are negative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a verb from the lesson (jeter un coup d’œil, apercevoir, contempler, fixer, épier).', items: [
            { q: 'Il est impoli de ___ les inconnus dans le métro.', a: ['fixer'], why: '*Fixer*: to look fixedly.' },
            { q: 'Elle a ___ un coup d’œil à son téléphone pendant la réunion.', a: ['jeté'], why: '*Jeter un coup d’œil*: a quick look.' },
            { q: 'Les amoureux ___ le coucher du soleil.', a: ['contemplent'], why: '*Contempler*: to look for a long time with admiration.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match each word with its meaning.', pairs: [
            ['squelettique', 'maigre au point d’être malade'],
            ['svelte', 'mince et élégant'],
            ['obstiné', 'qui refuse de changer d’avis, en mauvaise part'],
            ['persévérant', 'qui continue malgré les difficultés'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the word that gives the wrong impression.', items: [
            { s: 'J’admire ma grand-mère : elle est si [radine] et ne jette jamais rien.', a: ['économe'], why: 'Praise needs a positive word: *économe*.' },
            { s: 'Notre directrice est merveilleusement [têtue] : elle ne renonce jamais à une bonne idée.', a: ['déterminée', 'persévérante'], why: 'The speaker approves, so *déterminée* or *persévérante*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Profondément ému, tôt ou tard',
      about: 'Use natural collocations and fixed pairs of words.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Collocations are words that naturally go together. At C2, the test is not whether your sentence is correct, but whether it sounds as a French speaker would say it. Adverbs are selective: we say **profondément ému**, **gravement blessé**, **ardemment désiré**, **vivement recommandé**, **amèrement regretter**, but not *profondément blessé* in the sense of a wound. Nouns also pick their partners: **une généralisation hâtive**, **un parti pris**, **un argument de poids**, **une erreur grossière**, **un silence pesant**.' },
          { t: 'table', caption: 'Collocations that sound natural', explain: ['head', 'col0'], head: ['Word', 'Natural partners', 'Not natural'], rows: [
            ['adverb + adjective', 'profondément ému, gravement blessé, vivement recommandé', 'gravement ému, profondément recommandé'],
            ['adjective + noun', 'une généralisation hâtive, une erreur grossière', 'une généralisation grossière, une erreur hâtive'],
            ['verb + noun', 'tirer une conclusion, parvenir à un compromis', 'faire une conclusion, atteindre un compromis'],
            ['noun + de + noun', 'un coup de chance, un pincement de cœur', 'un coup de hasard, un pincement de joie'],
          ] },
        ],
        [
          { t: 'text', md: 'Fixed **pairs** are two words joined by *ou*, *et* or *ni*, always in the same order. **Tôt ou tard** (sooner or later), **de fond en comble** (from top to bottom), **à tort ou à raison** (rightly or wrongly), **sain et sauf** (safe and sound), **ni plus ni moins** (no more, no less), **peu ou prou** (more or less). You cannot reverse them: *tard ou tôt* is wrong.' },
          { t: 'tip', art: 'owl', md: 'Learn a pair as one block, never reversed. When you meet a new collocation, write it in a full sentence in a notebook, with its register. Native speakers will not correct *une erreur hâtive*, but they will notice it.' },
          { t: 'ex', kind: 'match', h: 'Match the fixed pair with its meaning.', pairs: [
            ['tôt ou tard', 'at some point in the future'],
            ['de fond en comble', 'completely, from top to bottom'],
            ['à tort ou à raison', 'rightly or wrongly'],
            ['sain et sauf', 'unharmed'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the natural collocation.', items: [
            { q: 'L’équipe a été ___ déçue par le résultat.', o: ['profondément', 'gravement', 'vivement'], why: '*Profondément déçu* is a natural collocation.' },
            { q: 'Il est ___ recommandé de réserver à l’avance.', o: ['vivement', 'gravement', 'profondément'], why: '*Vivement recommandé*: strongly recommended.' },
            { q: 'Son rapport contient une ___ erreur : il manque le budget.', o: ['grossière', 'hâtive', 'pesante'], why: '*Une erreur grossière*: a blatant mistake.' },
            { q: 'Dire que tous les adolescents sont paresseux est une généralisation ___.', o: ['hâtive', 'grossière', 'pesante'], why: '*Une généralisation hâtive*: a hasty generalisation.' },
            { q: 'Après un long débat, ils ont fini par ___ à un compromis.', o: ['parvenir', 'faire', 'atteindre'], why: '*Parvenir à un compromis* is the natural collocation.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the fixed pair.', items: [
            { q: 'Tôt ou ___, il faudra bien décider.', a: ['tard'], why: '*Tôt ou tard*: sooner or later.' },
            { q: 'Ils ont nettoyé la maison de fond en ___.', a: ['comble'], why: '*De fond en comble*: from top to bottom.' },
            { q: 'Ils sont rentrés sains et ___ après la tempête.', a: ['saufs'], why: '*Sains et saufs*: unharmed. The adjectives agree in the plural.' },
            { q: 'À tort ou à ___, elle pense avoir raison.', a: ['raison'], why: '*À tort ou à raison*: rightly or wrongly.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
            { q: 'Les arrivants étaient indemnes après la tempête.', cue: 'sains', a: ['Les arrivants étaient sains et saufs après la tempête.'], why: '*Sains et saufs*: unharmed. The adjectives agree in the plural.' },
            { q: 'Il est fortement conseillé de réserver.', cue: 'vivement', a: ['Il est vivement conseillé de réserver.'], why: '*Vivement conseillé*: strongly advised.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the unnatural collocation.', items: [
            { s: 'Il a fait une [erreur hâtive] en oubliant le budget. (a blatant mistake)', a: ['erreur grossière'], why: '*Une erreur grossière*: a blatant mistake.' },
            { s: 'Elle a [atteint] un compromis avec ses collègues.', a: ['abouti à', 'est parvenue à', 'a trouvé'], why: 'We say *parvenir à* or *aboutir à un compromis*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Il nous a quittés, ce n’est pas mal',
      about: 'Recognise euphemism and litotes, and decide when softening helps.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'A **euphemism** replaces a direct word with a gentler one: **il nous a quittés** for *il est mort*, **en recherche d’emploi** for *chômeur*, **se séparer d’un salarié** for *licencier*, **les dommages collatéraux** for *les victimes civiles*. **Litotes** (understatement) says less to mean more by negating the opposite: **ce n’est pas mal** means *c’est bien*, **il n’est pas bête** means *il est intelligent*, **ce n’est pas rien** means *c’est beaucoup*. Litotes is typical of French and often polite or ironic.' },
          { t: 'table', caption: 'Euphemism and litotes', explain: ['head', 'col0'], head: ['Gentle phrase', 'Direct meaning', 'Effect'], rows: [
            ['il nous a quittés', 'il est mort', 'respect, comfort'],
            ['en recherche d’emploi', 'au chômage', 'avoids embarrassment'],
            ['nous nous séparons de vos services', 'vous êtes licencié', 'hides the employer’s action'],
            ['ce n’est pas mal', 'c’est bien', 'litotes: understatement'],
            ['il n’est pas bête', 'il est intelligent', 'litotes: polite praise'],
          ] },
        ],
        [
          { t: 'text', md: 'Softening helps when it shows kindness: *Je vous présente mes condoléances* is better than *Je suis désolé qu’il soit mort* at a funeral. It hides the truth when it protects the powerful: *un plan de sauvegarde de l’emploi* for *des centaines de licenciements*, *des dommages collatéraux* for *des civils tués*. A careful reader asks: who benefits from the softer word?' },
          { t: 'tip', art: 'owl', md: 'In your own writing, use a euphemism only when the plain word would hurt your reader. In reports and essays, plain words show confidence: write *l’entreprise a licencié quarante salariés*, not *l’entreprise s’est séparée de quarante collaborateurs*.' },
          { t: 'ex', kind: 'sort', h: 'Kind softening, or hiding the truth?', groups: ['kind softening', 'hiding the truth'], explain: ['groups'], items: [
            { s: 'Je vous présente mes condoléances.', g: 0, why: 'Gentle, at a moment of grief.' },
            { s: 'L’usine fait l’objet d’un plan de sauvegarde de l’emploi.', g: 1, why: 'A fancy phrase that can hide job losses.' },
            { s: 'Notre grand-mère nous a quittés paisiblement.', g: 0, why: 'A gentle way to say it to the family.' },
            { s: 'Il y a eu des dommages collatéraux.', g: 1, why: 'Hides the fact that people were killed.' },
            { s: 'Il est en recherche d’emploi pour le moment.', g: 0, why: 'Avoids embarrassment, harms nobody.' },
            { s: 'Le ministre a été économe de la vérité.', g: 1, why: 'A polite way to say he did not tell the truth.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
            { q: '« Ce n’est pas mal », dit le critique à propos du film.', o: ['C’est plutôt bon.', 'C’est très mauvais.', 'C’est moyen.'], why: 'Litotes: negating the opposite means praise.' },
            { q: '« Il n’est pas bête », dit-on d’un étudiant.', o: ['Il est intelligent.', 'Il est stupide.', 'Il est timide.'], why: 'Litotes.' },
            { q: '« Nous nous séparons de vos services. »', o: ['Vous êtes licencié.', 'Vous êtes promu.', 'Vous êtes en congé.'], why: 'A euphemism for *licencier*.' },
            { q: '« Ce n’est pas rien », dit le médecin de la blessure.', o: ['C’est assez grave.', 'Ce n’est rien.', 'C’est guéri.'], why: 'Litotes: it is important.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it plainly.', items: [
            { q: 'L’entreprise s’est séparée de quarante salariés.', cue: 'L’entreprise a licencié', a: ['L’entreprise a licencié quarante salariés.'], why: 'Replace the euphemism with *licencier*.' },
            { q: 'Son grand-père nous a quittés en mars.', cue: 'Son grand-père est mort', a: ['Son grand-père est mort en mars.'], why: '*Nous quitter* means *mourir*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the euphemism with its plain meaning.', pairs: [
            ['en recherche d’emploi', 'au chômage'],
            ['il nous a quittés', 'il est mort'],
            ['se séparer d’un salarié', 'le licencier'],
            ['dommages collatéraux', 'victimes civiles d’une attaque'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'Ce film, ce n’est pas ___. (litotes: c’est bien)', a: ['mal'], why: '*Ce n’est pas mal* means *c’est bien*.' },
            { q: 'Il est en ___ d’emploi, mais il a un entretien demain.', a: ['recherche'], why: '*En recherche d’emploi* is a gentle way to say unemployed.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Les mots que l’on choisit',
      about: 'Read an essay and notice how word choice shapes the reader’s view.',
      art: 'croissant',
      spreads: [
        [
          { t: 'reading', title: 'Les mots que l’on choisit', md: 'Deux journaux ont rendu compte de la même manifestation. L’un écrivait que « des manifestants en colère fixaient les policiers » ; l’autre que « des citoyens déterminés regardaient calmement les agents ». Les faits étaient identiques. Les mots ne l’étaient pas.\n\nTelle est la discrète puissance des quasi-synonymes. Mince est un compliment, maigre n’en est pas un ; un oncle économe est admiré, un oncle radin est évité. Tout écrivain choisit, et chaque choix porte un petit jugement.\n\nLa collocation est la seconde épreuve de l’écrivain. Un francophone dira qu’une réponse est vivement recommandée, jamais profondément recommandée, et qu’une généralisation est hâtive, jamais grossière. Ces associations ne sont pas des règles ; ce sont des habitudes, que l’on acquiert en lisant beaucoup et en remarquant, peu à peu, ce qui sonne juste.\n\nReste la question de l’adoucissement. Après un décès, « il nous a quittés » est une délicatesse. Mais quand une entreprise annonce un « plan de sauvegarde de l’emploi », on peut se demander qui protège le mot plus doux. Les mots simples peuvent être durs ; ils peuvent aussi être honnêtes.\n\nLa leçon n’est pas d’éviter la nuance mais de la maîtriser. Avant de choisir un mot, posez-vous trois questions : que veut-il dire, que suggère-t-il, et qui peut-il flatter ou blesser ?' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Les deux journaux ont rapporté des faits différents.', a: 'f', why: '« Les faits étaient identiques. Les mots ne l’étaient pas. »' },
            { q: 'Selon l’auteur, maigre est un compliment.', a: 'f', why: '« Mince est un compliment, maigre n’en est pas un. »' },
            { q: 'L’auteur dit que les collocations sont des règles strictes.', a: 'f', why: '« Ces associations ne sont pas des règles ; ce sont des habitudes. »' },
            { q: 'L’auteur pense que « il nous a quittés » est toujours une erreur.', a: 'f', why: 'After a death it is “une délicatesse” (a kindness).' },
            { q: 'L’auteur conseille de se demander qui protège un mot plus doux.', a: 't', why: '« On peut se demander qui protège le mot plus doux. »' },
            { q: 'La manifestation a eu lieu à Paris.', a: 'ng', why: 'The text does not say where.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Que montre l’exemple du début ?', o: ['Le choix des mots peut changer l’image des mêmes faits.', 'Les journaux mentent toujours.', 'Les manifestations sont difficiles à décrire.'], why: 'The facts were identical, but the words gave two pictures.' },
            { q: 'Pourquoi l’auteur cite-t-il « plan de sauvegarde de l’emploi » ?', o: ['Comme exemple d’euphémisme qui peut protéger une entreprise.', 'Comme exemple de langage clair.', 'Comme mot d’un dictionnaire juridique.'], why: 'To show that a soft word can hide a hard reality.' },
            { q: 'De quoi parlent les trois questions finales ?', o: ['Du sens, de ce que le mot suggère et de son effet sur les gens.', 'De la grammaire, de l’orthographe et de la prononciation.', 'De la longueur, du rythme et du ton.'], why: 'What it means, what it suggests, whom it can flatter or hurt.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the near-synonyms the writer uses to praise or criticise.', items: [
            { s: '[Mince] est un compliment, [maigre] n’en est pas un ; un oncle [économe] est admiré, un oncle [radin] est évité.', why: 'Two pairs of near-synonyms with opposite connotations.' },
            { s: 'Des [manifestants en colère] fixaient les policiers.', why: 'These words give a negative picture.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Une réponse est vivement recommandée, jamais ___ recommandée.', a: ['profondément'], why: 'Collocations are habits.' },
            { q: 'Une généralisation est ___, jamais grossière.', a: ['hâtive'], why: '*Une généralisation hâtive*: a hasty generalisation.' },
            { q: 'Après un décès, « il nous a quittés » est une ___.', a: ['délicatesse'], why: 'The author’s view.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Tout écrivain choisit, et chaque choix porte un petit jugement.', why: 'A sentence from the text.' },
            { a: 'Avant de choisir un mot, demandez-vous qui il peut flatter ou blesser.', why: 'The idea of the last paragraph.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Il a ___ le tableau pendant une heure, émerveillé.', o: ['contemplé', 'aperçu', 'épié'], why: '*Contempler*: to look for a long time with admiration.' },
      { q: 'Mon oncle est très ___ et fier de l’être.', o: ['économe', 'radin', 'obstiné'], why: 'He is proud, so a positive word.' },
      { q: 'Il est ___ recommandé de réserver.', o: ['vivement', 'gravement', 'profondément'], why: '*Vivement recommandé*: strongly recommended.' },
      { q: 'Dire que tous les politiciens mentent est une généralisation ___.', o: ['hâtive', 'grossière', 'pesante'], why: '*Une généralisation hâtive*: a hasty generalisation.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Tôt ou ___, il faudra bien décider.', a: ['tard'], why: '*Tôt ou tard*: sooner or later.' },
      { q: 'Ils ont nettoyé la maison de fond en ___.', a: ['comble'], why: '*De fond en comble*: from top to bottom.' },
      { q: 'Il est impoli de ___ les inconnus.', a: ['fixer'], why: '*Fixer*: to look fixedly.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['svelte', 'mince et élégant'],
      ['en recherche d’emploi', 'au chômage'],
      ['il nous a quittés', 'il est mort'],
    ] },
    { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
      { q: '« Ce n’est pas mal », dit le critique à propos du film.', o: ['C’est plutôt bon.', 'C’est très mauvais.', 'C’est moyen.'], why: 'Litotes.' },
      { q: '« Il n’est pas bête. »', o: ['Il est intelligent.', 'Il est stupide.', 'Il est timide.'], why: 'Litotes.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'J’admire ma grand-mère : elle est si [radine].', a: ['économe'], why: 'Praise needs a positive word.' },
      { s: 'Il a fait une [erreur hâtive] en oubliant le budget. (a blatant mistake)', a: ['erreur grossière'], why: '*Une erreur grossière*: a blatant mistake.' },
    ] },
  ],
};
