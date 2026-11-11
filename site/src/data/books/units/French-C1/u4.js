// French C1, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Formal and administrative French',
  goal: 'Understand and write the French of letters, contracts and official notices. Learn prepositional phrases such as en vue de and sous réserve de, the verbs of administration, and the structure of a formal request and its answer.',
  art: 'croissant',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['formal French', 'administration', 'prepositional phrases', 'letters', 'complaints'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'En vue de, faute de, sous réserve de',
      about: 'Use the prepositional phrases of formal French.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'Official French uses **prepositional phrases** (locutions prépositives) where everyday French uses a clause. They keep the text short and precise. **Faute de** means *for lack of*: *Faute de temps, nous reportons la réunion.* **En dépit de** means *despite*: *En dépit de la pluie, le match a lieu.* **Sous réserve de** means *subject to*: *Sous réserve d’acceptation du dossier, vous recevrez une réponse.* **Compte tenu de** means *given*: *Compte tenu des circonstances, la séance est annulée.* Most are followed by a **noun**, without an article when the meaning is general.' },
          { t: 'table', caption: 'Formal prepositional phrases', explain: ['head', 'col1'], head: ['Phrase', 'Meaning', 'Example'], rows: [
            ['en vue de', 'with a view to', 'Il économise en vue de l’achat d’une maison.'],
            ['au titre de', 'under, as part of', 'Cette somme est versée au titre de l’aide au logement.'],
            ['à l’égard de', 'towards, regarding', 'Il a une attitude bienveillante à l’égard des élèves.'],
            ['en dépit de', 'despite', 'En dépit de la pluie, le match a lieu.'],
            ['moyennant', 'in exchange for, on condition of', 'Moyennant un petit supplément, vous pouvez changer de date.'],
            ['faute de', 'for lack of', 'Faute de temps, nous reportons la réunion.'],
            ['sous réserve de', 'subject to', 'Sous réserve d’acceptation du dossier, vous recevrez une réponse.'],
            ['compte tenu de', 'given, in view of', 'Compte tenu des circonstances, la séance est annulée.'],
            ['quant à', 'as for', 'Quant à vous, vous recevrez un courrier.'],
          ] },
          { t: 'tip', art: 'owl', md: '**De** contracts with **le** and **les**: *compte tenu **du** retard, **des** circonstances*. After **faute de** and **en dépit de** you can also use **un infinitif**: *Faute de pouvoir venir, il a envoyé un message.* **Moyennant** is followed by a noun with no preposition: *moyennant finance*. In Belgium, Switzerland and Quebec these phrases are used in the same way.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Faute de** temps, nous reportons la réunion.', n: 'For lack of.' },
            { s: '**En dépit de** la pluie, le match a lieu.', n: 'Despite.' },
            { s: '**Sous réserve d’**acceptation du dossier, vous recevrez une réponse.', n: 'Subject to.' },
            { s: '**Compte tenu des** circonstances, la séance est annulée.', n: 'Given.' },
            { s: '**Quant à** vous, vous recevrez un courrier.', n: 'As for.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the phrase with its meaning.', pairs: [
            ['faute de', 'for lack of'],
            ['en dépit de', 'despite'],
            ['sous réserve de', 'subject to'],
            ['compte tenu de', 'given'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ de temps, nous reportons la réunion.', a: ['Faute'], why: '*Faute de* = for lack of.' },
            { q: 'En ___ de la pluie, le match a lieu.', a: ['dépit'], why: '*En dépit de* = despite.' },
            { q: 'Sous ___ d’acceptation du dossier, vous recevrez une réponse.', a: ['réserve'], why: '*Sous réserve de* = subject to.' },
            { q: 'Compte tenu ___ circonstances, la séance est annulée. (de + les)', a: ['des'], why: '*De* + *les* = *des*.' },
            { q: 'Il économise en ___ de l’achat d’une maison.', a: ['vue'], why: '*En vue de* = with a view to.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right phrase.', items: [
            { q: '___ temps, nous reportons la réunion.', o: ['Faute de', 'Quant à', 'Moyennant'], why: '*Faute de* = for lack of.' },
            { q: '___ la pluie, le match a lieu.', o: ['En dépit de', 'Faute de', 'Au titre de'], why: '*En dépit de* = despite.' },
            { q: '___ un petit supplément, vous pouvez changer de date.', o: ['Moyennant', 'Faute de', 'En dépit de'], why: '*Moyennant* = in exchange for.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the phrase in brackets.', items: [
            { q: 'Comme il manque de temps, nous reportons la réunion.', cue: 'Faute de', a: ['Faute de temps, nous reportons la réunion.'], why: '*Faute de* + noun.' },
            { q: 'Il pleut, mais le match a lieu.', cue: 'En dépit de', a: ['En dépit de la pluie, le match a lieu.'], why: '*En dépit de* + noun.' },
            { q: 'Si le dossier est accepté, vous recevrez une réponse.', cue: 'Sous réserve', a: ['Sous réserve d’acceptation du dossier, vous recevrez une réponse.', "Sous réserve d'acceptation du dossier, vous recevrez une réponse."], why: '*Sous réserve de* + noun.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Faute [à] temps, nous reportons la réunion.', a: ['de'], why: '*Faute de*.' },
            { s: 'Compte tenu [de les] circonstances, la séance est annulée.', a: ['des'], why: '*De* + *les* = *des*.' },
            { s: 'En [dépit] la pluie, le match a lieu.', a: ['dépit de'], why: '*En dépit de*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Faute de temps, nous reportons la réunion.', why: '*Faute de* + noun.' },
            { a: 'En dépit de la pluie, le match a lieu.', why: '*En dépit de* + noun.' },
            { a: 'Compte tenu des circonstances, la séance est annulée.', why: '*Compte tenu de* + noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Le style administratif',
      about: 'Understand the verbs and the fixed formulas of official French.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'Official French likes the **passive**, the **impersonal** and **nouns**. A refund is not made by a person: **Il sera procédé au remboursement.** Useful verbs are **procéder à** (to carry out), **effectuer** (to carry out, to make), **justifier de** (to prove), **faire état de** (to mention) and **être tenu de** (to be required to): *Vous devez justifier de votre identité. Le demandeur est tenu de fournir les pièces demandées.* Fixed words guide the reader: **ci-joint** (enclosed), **ci-dessous** (below), **conformément à** (in accordance with).' },
          { t: 'table', caption: 'The language of administration', explain: ['head', 'col1'], head: ['Expression', 'Meaning', 'Example'], rows: [
            ['il sera procédé à', 'will be carried out', 'Il sera procédé au remboursement sous dix jours.'],
            ['justifier de', 'to prove', 'Vous devez justifier de votre identité.'],
            ['être tenu de', 'to be required to', 'Le demandeur est tenu de fournir les pièces.'],
            ['ci-joint', 'enclosed', 'Veuillez trouver ci-joint la copie de ma facture.'],
            ['conformément à', 'in accordance with', 'Conformément à nos conditions, la demande est recevable.'],
            ['le demandeur, l’intéressé', 'the applicant, the person concerned', 'L’intéressé doit signer le formulaire.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Procéder à** + noun: **au** (à + le), **à la**, **aux**: *procéder au remboursement, à la vérification, aux contrôles*. **Ci-joint** does not change before a noun that follows it: *Veuillez trouver ci-joint la copie.* After the noun, it agrees: *les pièces ci-jointes*. These formulas are the same in France, Belgium, Switzerland and Quebec.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Il sera procédé au** remboursement sous dix jours.', n: 'Passive and impersonal.' },
            { s: 'Vous devez **justifier de** votre identité.', n: 'To prove.' },
            { s: 'Le demandeur **est tenu de** fournir les pièces demandées.', n: 'To be required to.' },
            { s: 'Veuillez trouver **ci-joint** la copie de ma facture.', n: 'Enclosed.' },
            { s: '**Conformément à** nos conditions, la demande est recevable.', n: 'In accordance with.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
            ['justifier de', 'to prove'],
            ['être tenu de', 'to be required to'],
            ['ci-joint', 'enclosed'],
            ['conformément à', 'in accordance with'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Il sera procédé ___ remboursement sous dix jours. (à + le)', a: ['au'], why: '*À* + *le* = *au*.' },
            { q: 'Vous devez justifier ___ votre identité.', a: ['de'], why: '*Justifier de*.' },
            { q: 'Le demandeur est tenu ___ fournir les pièces demandées.', a: ['de'], why: '*Être tenu de* + infinitive.' },
            { q: 'Veuillez trouver ___ la copie de ma facture.', a: ['ci-joint'], why: '*Ci-joint* = enclosed.' },
            { q: '___ à nos conditions, la demande est recevable.', a: ['Conformément'], why: '*Conformément à* = in accordance with.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best formal expression.', items: [
            { q: 'Which sentence is more formal?', o: ['Il sera procédé au remboursement.', 'On va vous rembourser.', 'Je vous rembourse.'], why: 'The passive and the noun are formal.' },
            { q: 'Which verb means *to prove*?', o: ['justifier de', 'procéder à', 'faire état de'], why: '*Justifier de* = to prove.' },
            { q: 'Which word means *enclosed*?', o: ['ci-joint', 'ci-dessous', 'conformément'], why: '*Ci-joint* = enclosed.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it in a formal register.', items: [
            { q: 'Nous rembourserons votre achat.', cue: 'Il sera procédé', a: ['Il sera procédé au remboursement de votre achat.'], why: '*Procéder à* + noun.' },
            { q: 'Montrez votre identité.', cue: 'Vous devez', a: ['Vous devez justifier de votre identité.'], why: '*Justifier de*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Il sera procédé [à le] remboursement.', a: ['au'], why: '*À* + *le* = *au*.' },
            { s: 'Vous devez justifier [à] votre identité.', a: ['de'], why: '*Justifier de*.' },
            { s: 'Les pièces [ci-joint] sont obligatoires.', a: ['ci-jointes'], why: 'After the noun, *ci-joint* agrees.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il sera procédé au remboursement sous dix jours.', why: '*Il sera procédé à* + noun.' },
            { a: 'Vous devez justifier de votre identité.', why: '*Justifier de* + noun.' },
            { a: 'Veuillez trouver ci-joint la copie de ma facture.', why: '*Ci-joint* before the noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Une demande et sa réponse',
      about: 'Write a formal request and a reply with the right formulas.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A formal letter starts with an **objet** (subject line), then explains the **reason for writing**, states the **request**, and closes with a polite formula. To start: **Je me permets de vous écrire au sujet de …** To refer to an earlier contact: **Suite à notre conversation du …** To ask: **Je vous serais reconnaissant(e) de bien vouloir + infinitif.** To close the request: **Dans l’attente de votre réponse, …** The company replies: **Nous avons bien reçu votre courrier du …**, **Nous vous prions de nous excuser pour la gêne occasionnée**, **Nous vous informons que …**' },
          { t: 'table', caption: 'Formulas of a formal exchange', explain: ['head', 'col1'], head: ['Formula', 'Use'], rows: [
            ['Je me permets de vous écrire au sujet de …', 'starting the letter'],
            ['Suite à notre conversation du …', 'referring to an earlier contact'],
            ['Je vous serais reconnaissant(e) de bien vouloir …', 'asking very politely'],
            ['Dans l’attente de votre réponse, …', 'closing the request'],
            ['Nous avons bien reçu votre courrier du …', 'the company acknowledges'],
            ['Nous vous prions de nous excuser pour la gêne occasionnée.', 'the company apologises'],
            ['Nous vous informons que …', 'the company gives news'],
          ] },
          { t: 'tip', art: 'owl', md: '**Reconnaissant(e)** agrees with the writer: a man writes *reconnaissant*, a woman *reconnaissante*. After **de bien vouloir**, the verb is an **infinitive**: *de bien vouloir procéder au remboursement*. **Suite à** is common in business letters; some people prefer **à la suite de**. The closing is the same as in unit 3: *Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Je me permets de vous écrire** au sujet de ma commande.', n: 'Starting the letter.' },
            { s: '**Suite à** notre conversation du 12 octobre, je vous envoie les documents.', n: 'Referring to an earlier contact.' },
            { s: '**Je vous serais reconnaissant de bien vouloir** procéder au remboursement.', n: 'A very polite request.' },
            { s: '**Nous avons bien reçu** votre courrier du 20 octobre.', n: 'The company acknowledges.' },
            { s: '**Nous vous prions de nous excuser** pour la gêne occasionnée.', n: 'The company apologises.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Customer or company? Sort the sentences.', groups: ['customer', 'company'], explain: ['groups'], items: [
            { s: 'Je me permets de vous écrire au sujet de ma commande.', g: 0, why: 'The customer starts the letter.' },
            { s: 'Je vous serais reconnaissant de bien vouloir me répondre.', g: 0, why: 'The customer asks.' },
            { s: 'Dans l’attente de votre réponse, …', g: 0, why: 'The customer closes the request.' },
            { s: 'Nous avons bien reçu votre courrier.', g: 1, why: 'The company acknowledges.' },
            { s: 'Nous vous prions de nous excuser pour la gêne occasionnée.', g: 1, why: 'The company apologises.' },
            { s: 'Nous vous informons que le remboursement a été effectué.', g: 1, why: 'The company gives news.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Je me ___ de vous écrire au sujet de ma commande.', a: ['permets'], why: '*Je me permets de* + infinitive.' },
            { q: '___ à notre conversation du 12 octobre, je vous envoie les documents.', a: ['Suite'], why: '*Suite à* refers to an earlier contact.' },
            { q: 'Je vous serais reconnaissant de bien ___ procéder au remboursement. (vouloir)', a: ['vouloir'], why: '*De bien vouloir* + infinitive.' },
            { q: 'Dans l’___ de votre réponse, je vous prie d’agréer …', a: ['attente'], why: '*Dans l’attente de*.' },
            { q: 'Nous vous prions de nous excuser pour la ___ occasionnée.', a: ['gêne'], why: '*La gêne occasionnée*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the formula with its use.', pairs: [
            ['Je me permets de vous écrire', 'I start a formal letter'],
            ['Suite à notre conversation', 'I refer to an earlier contact'],
            ['Dans l’attente de votre réponse', 'I close the request'],
            ['Nous vous prions de nous excuser', 'The company apologises'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence in a formal register.', items: [
            { q: 'Je veux être remboursé.', cue: 'Je vous serais reconnaissant de bien vouloir', a: ['Je vous serais reconnaissant de bien vouloir me rembourser.'], why: '*De bien vouloir* + infinitive.' },
            { q: 'J’écris pour parler de ma commande.', cue: 'Je me permets', a: ['Je me permets de vous écrire au sujet de ma commande.'], why: '*Je me permets de vous écrire au sujet de*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Je vous serais reconnaissant de bien [voulez] procéder au remboursement.', a: ['vouloir'], why: '*De bien vouloir* + infinitive.' },
            { s: 'Dans l’attente [à] votre réponse, je vous prie d’agréer …', a: ['de'], why: '*Dans l’attente de*.' },
            { s: 'Nous vous [prie] de nous excuser pour la gêne occasionnée.', a: ['prions'], why: '*Nous* → *prions*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je me permets de vous écrire au sujet de ma commande.', why: 'The formal opening.' },
            { a: 'Je vous serais reconnaissant de bien vouloir me répondre.', why: '*De bien vouloir* + infinitive.' },
            { a: 'Nous vous prions de nous excuser pour la gêne occasionnée.', why: 'The formal apology.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Une lettre officielle et sa réponse',
      about: 'Read a formal request and the reply.',
      art: 'croissant',
      spreads: [
        [
          { t: 'reading', title: 'Demande de remboursement', md: 'Objet : demande de remboursement\n\nMadame, Monsieur,\n\nJe me permets de vous écrire au sujet de ma commande, passée le 3 octobre. Compte tenu du retard important de la livraison, et faute de réponse à mon courriel du 15 octobre, je vous serais reconnaissant de bien vouloir procéder au remboursement de la somme versée. Veuillez trouver ci-joint la copie de ma facture.\n\nDans l’attente de votre réponse, je vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.\n\nKarim Benali\n\nRéponse : Monsieur, nous avons bien reçu votre courrier du 20 octobre. Nous vous prions de nous excuser pour la gêne occasionnée. En raison d’un incident de transport, votre commande n’a pas pu être livrée dans les délais. Conformément à nos conditions, il sera procédé au remboursement dans un délai de dix jours, moyennant l’envoi d’un justificatif bancaire. Quant au produit, vous pouvez le conserver. Nous vous prions d’agréer, Monsieur, nos salutations distinguées.\n\nLe service clientèle' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La commande a été passée le 3 octobre.', a: 't', why: '*Ma commande, passée le 3 octobre.*' },
            { q: 'Le client a reçu une réponse à son courriel du 15 octobre.', a: 'f', why: '*Faute de réponse à mon courriel du 15 octobre.*' },
            { q: 'La société avait déjà envoyé le produit avant la réclamation.', a: 'ng', why: 'The reply says only that the order could not be delivered on time.' },
            { q: 'Le remboursement sera effectué sous dix jours.', a: 't', why: '*Il sera procédé au remboursement dans un délai de dix jours.*' },
            { q: 'Le client doit renvoyer le produit.', a: 'f', why: '*Vous pouvez le conserver.*' },
            { q: 'Le client doit envoyer un justificatif bancaire.', a: 't', why: '*Moyennant l’envoi d’un justificatif bancaire.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Pourquoi le client écrit-il ?', o: ['Pour demander un remboursement.', 'Pour changer l’adresse.', 'Pour annuler un abonnement.'], why: '*Procéder au remboursement de la somme versée.*' },
            { q: 'Que demande la société au client ?', o: ['Un justificatif bancaire.', 'La facture originale.', 'Une photo du produit.'], why: '*Moyennant l’envoi d’un justificatif bancaire.*' },
            { q: 'Que peut faire le client du produit ?', o: ['Le conserver.', 'Le renvoyer.', 'Le jeter.'], why: '*Quant au produit, vous pouvez le conserver.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the formal prepositional phrases.', items: [
            { s: '[Compte tenu du] retard important, et [faute de] réponse à mon courriel, je vous serais reconnaissant …', why: '*Compte tenu de* = given; *faute de* = for lack of.' },
            { s: '[En raison d’]un incident de transport, la commande n’a pas pu être livrée. [Conformément à] nos conditions, il sera procédé au remboursement.', why: '*En raison de* and *conformément à*.' },
            { s: 'Il sera procédé au remboursement, [moyennant] l’envoi d’un justificatif. [Quant au] produit, vous pouvez le conserver.', why: '*Moyennant* and *quant à*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Compte tenu ___ retard, je demande un remboursement. (de + le)', a: ['du'], why: '*De* + *le* = *du*.' },
            { q: 'Il sera procédé ___ remboursement dans un délai de dix jours. (à + le)', a: ['au'], why: '*À* + *le* = *au*.' },
            { q: 'Dans l’___ de votre réponse, je vous prie d’agréer …', a: ['attente'], why: '*Dans l’attente de*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Quant au produit, vous pouvez le conserver.', why: '*Quant à* + noun.' },
            { a: 'Faute de réponse, je vous serais reconnaissant de bien vouloir procéder au remboursement.', why: '*Faute de* + noun.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '___ temps, nous reportons la réunion.', o: ['Faute de', 'Quant à', 'Moyennant'], why: '*Faute de* = for lack of.' },
      { q: '___ la pluie, le match a lieu.', o: ['En dépit de', 'Faute de', 'Au titre de'], why: '*En dépit de* = despite.' },
      { q: 'Il sera procédé ___ remboursement.', o: ['au', 'du', 'le'], why: '*À* + *le* = *au*.' },
      { q: 'Je vous serais reconnaissant de bien vouloir ___.', o: ['me répondre', 'répondre-moi', 'me répondez'], why: '*De bien vouloir* + infinitive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Veuillez trouver ___ la copie de ma facture.', a: ['ci-joint'], why: '*Ci-joint* = enclosed.' },
      { q: 'Compte tenu ___ circonstances, la séance est annulée. (de + les)', a: ['des'], why: '*De* + *les* = *des*.' },
      { q: 'Dans l’attente de votre ___, je vous prie d’agréer …', a: ['réponse'], why: '*Dans l’attente de votre réponse*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the phrase with its meaning.', pairs: [
      ['en vue de', 'with a view to'],
      ['moyennant', 'in exchange for'],
      ['sous réserve de', 'subject to'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the words in brackets.', items: [
      { q: 'Comme il manque de temps, nous reportons la réunion.', cue: 'Faute de', a: ['Faute de temps, nous reportons la réunion.'], why: '*Faute de* + noun.' },
      { q: 'Nous rembourserons votre achat.', cue: 'Il sera procédé', a: ['Il sera procédé au remboursement de votre achat.'], why: '*Procéder à* + noun.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Faute [à] temps, nous reportons la réunion.', a: ['de'], why: '*Faute de*.' },
      { s: 'Il sera procédé [à le] remboursement.', a: ['au'], why: '*À* + *le* = *au*.' },
    ] },
  ],
};
