// French C2, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Legal French and plain language',
  goal: 'Read legal and formal French and rewrite it in plain language. Learn formal and legal words, why legal French is dense and how to simplify it, and the language of obligations, rights and conditions.',
  art: 'cactus',
  tags: { skills: ['reading', 'writing', 'vocabulary'], topics: ['legal French', 'formal words', 'plain language', 'contracts', 'obligation', 'conditions'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Ci-après, nonobstant, aux termes de',
      about: 'Recognise the formal and legal words of contracts and official texts.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Legal and official French uses words that almost nobody uses in speech. **Ci-après** means *hereinafter, from here on*: *Le contrat ci-après dénommé « le Contrat »*. **Ci-joint** means *enclosed*. **Nonobstant** means *notwithstanding, despite*. **Aux termes de** means *under the terms of*. **En vertu de** means *by virtue of*. **Aux fins de** means *for the purpose of*. **Au titre de** means *under, as part of*. **Il y a lieu de** means *it is appropriate to*. **Ledit, ladite, lesdits, lesdites** mean *the said*. **Susmentionné** means *mentioned above*.' },
          { t: 'table', caption: 'Formal words and plain alternatives', explain: ['head', 'col0'], head: ['Formal', 'Plain French'], rows: [
            ['ci-après', 'appelé / à partir de maintenant'],
            ['nonobstant', 'malgré'],
            ['aux termes de', 'selon / d’après'],
            ['en vertu de', 'grâce à / selon'],
            ['aux fins de', 'pour'],
            ['ledit / ladite', 'ce / cette'],
            ['susmentionné', 'cité plus haut'],
            ['il y a lieu de', 'il faut'],
          ] },
        ],
        [
          { t: 'text', md: 'These words make a text precise, but heavy and hard for ordinary readers. **Ledit** and its forms agree in **gender and number** with the noun they replace: *ledit contrat*, *ladite clause*, *lesdits salariés*, *lesdites parties*. They are only used in legal texts. The word **nonobstant** is followed by a **noun** (*nonobstant cette clause*), not by a verb.' },
          { t: 'tip', art: 'owl', md: 'In an exam, you may be asked to **recognise** these words and to **replace** them. You do not need them in everyday writing. If a clause begins with *attendu que* or *considérant que*, it gives the reasons for a decision: you can translate it as *since* or *given that*.' },
          { t: 'ex', kind: 'match', h: 'Match the formal word with its plain meaning.', pairs: [
            ['nonobstant', 'malgré'],
            ['aux termes de', 'selon'],
            ['aux fins de', 'pour'],
            ['il y a lieu de', 'il faut'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the plain French version.', items: [
            { q: 'Nonobstant cette clause, le contrat reste valable.', o: ['Malgré cette clause, le contrat reste valable.', 'À cause de cette clause, le contrat est annulé.', 'Cette clause et le contrat sont identiques.'], why: '*Nonobstant* = malgré.' },
            { q: 'Aux termes de l’article 4, le loyer est payable d’avance.', o: ['Selon l’article 4, le loyer se paie d’avance.', 'Avant l’article 4, le loyer est payé.', 'Sans l’article 4, le loyer est gratuit.'], why: '*Aux termes de* = selon.' },
            { q: 'Il y a lieu de signaler tout retard.', o: ['Il faut signaler tout retard.', 'Il n’est pas utile de signaler un retard.', 'On a signalé un retard.'], why: '*Il y a lieu de* = il faut.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with the formal word.', items: [
            { q: 'Les parties ___ désignées sont tenues de respecter le contrat. (mentioned above)', a: ['susmentionnées', 'susdites'], why: '*Susmentionné* agrees with *parties*.' },
            { q: 'La somme sera versée ___ fins de remboursement. (for the purpose of)', a: ['aux'], why: '*Aux fins de*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite in plain French, using the word given.', items: [
            { q: 'Nonobstant la pluie, la fête aura lieu.', cue: 'Malgré', a: ['Malgré la pluie, la fête aura lieu.'], why: '*Nonobstant* = malgré.' },
            { q: 'Aux termes du règlement, le délai est de dix jours.', cue: 'Selon', a: ['Selon le règlement, le délai est de dix jours.'], why: '*Aux termes de* = selon.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Les [ledit] salariés doivent signer le registre.', a: ['lesdits'], why: '*Ledit* agrees in the plural.' },
            { s: 'La [ledit] clause reste en vigueur.', a: ['ladite'], why: '*Clause* is feminine.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Du jargon au langage clair',
      about: 'Understand why legal French is dense and how to simplify a clause.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Legal French is dense because of **long sentences**, **passive forms**, **nominalisation** (nouns in place of verbs) and the **formal words** of the first lesson. Compare: *Le locataire est tenu de procéder au règlement du loyer dans un délai de dix jours à compter de la réception de l’avis.* In **plain language** (*langage clair*): *Vous devez payer le loyer dans les dix jours après avoir reçu l’avis.* The plain version uses **vous**, an **active verb** (*payer*), a **short sentence** and **common words** (*dans les dix jours*).' },
          { t: 'table', caption: 'From dense to plain', explain: ['head', 'col0'], head: ['Dense', 'Plain'], rows: [
            ['procéder au règlement', 'payer'],
            ['est tenu de', 'doit'],
            ['à compter de', 'à partir de'],
            ['dans un délai de dix jours', 'dans les dix jours'],
            ['il est interdit de', 'vous ne devez pas'],
            ['ci-après dénommé', 'appelé'],
          ] },
        ],
        [
          { t: 'text', md: 'The **plain language movement** argues that official documents should be clear to the reader, without losing legal accuracy. Its advice: write **short sentences** (about 20 words), prefer **active verbs**, use **common words**, address the reader as **vous**, and put the **most important information first**. It does not mean making the text childish; it means respecting the reader’s time.' },
          { t: 'tip', art: 'owl', md: 'When you rewrite, keep the **meaning** exactly the same. Change the **words** and the **structure** (passive to active, noun to verb, long to short), but not the **obligation**. If the original says the reader *must* act, the plain version must also say *vous devez*, not *vous pouvez*.' },
          { t: 'ex', kind: 'match', h: 'Match the dense expression with its plain version.', pairs: [
            ['procéder au règlement de', 'payer'],
            ['est tenu de', 'doit'],
            ['à compter de', 'à partir de'],
            ['ci-après dénommé', 'appelé'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which is the plain version?', items: [
            { q: 'Le locataire est tenu de procéder au règlement du loyer avant le 5.', o: ['Vous devez payer le loyer avant le 5.', 'Le loyer pourrait être payé à une date non précisée.', 'Le règlement du loyer a été effectué.'], why: 'Plain: *vous*, an active verb and the same obligation.' },
            { q: 'Il est interdit de procéder à toute sous-location.', o: ['Vous ne devez pas sous-louer.', 'Vous pouvez sous-louer.', 'La sous-location est obligatoire.'], why: 'The same prohibition in plain words.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite in plain language, starting with the words given.', items: [
            { q: 'Le bénéficiaire est tenu de procéder au remboursement de la somme perçue.', cue: 'Vous devez', a: ['Vous devez rembourser la somme perçue.', 'Vous devez rembourser la somme que vous avez reçue.'], why: 'An active verb replaces the noun phrase.' },
            { q: 'Dans un délai de dix jours à compter de la réception du courrier, le locataire doit répondre.', cue: 'Vous devez répondre', a: ['Vous devez répondre dans les dix jours après avoir reçu le courrier.', 'Vous devez répondre dans les dix jours qui suivent la réception du courrier.'], why: 'The important obligation comes first.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Dense or plain?', groups: ['dense', 'plain'], explain: ['groups'], items: [
            { s: 'Le locataire est tenu de procéder au règlement du loyer.', g: 0, why: 'Long and nominal.' },
            { s: 'Vous devez payer le loyer.', g: 1, why: 'Short, active, with *vous*.' },
            { s: 'Nonobstant les dispositions précitées, …', g: 0, why: 'Legal vocabulary.' },
            { s: 'Malgré ce qui est écrit plus haut, …', g: 1, why: 'Common words.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the plain version.', items: [
            { q: 'Vous ___ payer le loyer avant le 5. (obligation)', a: ['devez'], why: 'The obligation stays.' },
            { q: 'Vous ne ___ pas sous-louer. (prohibition)', a: ['devez'], why: 'The prohibition stays.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Doit, peut, sous réserve de',
      about: 'Use the language of obligation, permission, prohibition and condition.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Contracts and rules state **obligations**, **rights**, **prohibitions** and **conditions**. **Obligation**: **doit** and **est tenu de** (*Le locataire doit payer*, *est tenu de payer*). **Permission and right**: **peut**, **a le droit de**, **est autorisé à** (*Le locataire peut résilier le bail*). **Prohibition**: **ne peut pas**, **il est interdit de**, **ne doit pas** (*Il est interdit de sous-louer*). **Condition**: **sous réserve de** (*subject to*), **à condition que** + subjunctive, **sauf si** (*unless*), **à défaut de** (*failing*), **faute de** (*for lack of*).' },
          { t: 'table', caption: 'Obligation, right, prohibition, condition', explain: ['head', 'col0'], head: ['Function', 'Phrases', 'Example'], rows: [
            ['obligation', 'doit, est tenu de', 'Le locataire doit payer le loyer.'],
            ['right', 'peut, a le droit de, est autorisé à', 'Le locataire peut résilier le bail.'],
            ['prohibition', 'ne peut pas, il est interdit de', 'Il est interdit de sous-louer.'],
            ['condition', 'sous réserve de, à condition que', 'Le bail est renouvelé sous réserve d’un accord écrit.'],
            ['exception', 'sauf si, à défaut de', 'Sauf si les parties en décident autrement, le bail est annuel.'],
          ] },
        ],
        [
          { t: 'text', md: '**À défaut de** means *failing that*, *in the absence of*: *À défaut de paiement, le contrat est résilié.* **Faute de** means *for lack of*: *Faute de preuves, l’affaire est classée.* **Sous réserve de** is followed by a **noun**: *sous réserve d’acceptation*. **À condition que** is followed by the **subjunctive**: *à condition que le loyer soit payé*. **Sauf si** is followed by the **indicative**: *sauf si le loyer est payé*.' },
          { t: 'tip', art: 'owl', md: 'Do not confuse **doit** (must) and **peut** (may): a translation error here changes a legal obligation into a permission. In a contract, **doit** and **est tenu de** create a duty; **peut** and **a le droit de** give a choice. Also, **il est interdit de** + infinitive is stronger than **ne pas devoir**.' },
          { t: 'ex', kind: 'sort', h: 'Obligation, right or prohibition?', groups: ['obligation', 'right', 'prohibition'], explain: ['groups'], items: [
            { s: 'Le locataire doit payer le loyer.', g: 0, why: '*Doit* creates an obligation.' },
            { s: 'Le locataire peut résilier le bail.', g: 1, why: '*Peut* gives a right.' },
            { s: 'Il est interdit de sous-louer.', g: 2, why: 'A prohibition.' },
            { s: 'Le propriétaire est tenu d’entretenir le logement.', g: 0, why: '*Est tenu de* = an obligation.' },
            { s: 'Le locataire a le droit d’installer une antenne.', g: 1, why: '*A le droit de* = a right.' },
            { s: 'Le locataire ne peut pas peindre les murs.', g: 2, why: '*Ne peut pas* = a prohibition.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'Le bail est renouvelé ___ d’un accord écrit.', o: ['sous réserve', 'à condition', 'faute'], why: '*Sous réserve de* + noun.' },
            { q: 'Vous pouvez partir ___ vous ayez fini.', o: ['à condition que', 'sous réserve de', 'à défaut de'], why: '*À condition que* + subjunctive.' },
            { q: '___ paiement, le contrat est résilié.', o: ['À défaut de', 'À condition de', 'Sauf si'], why: '*À défaut de* = in the absence of.' },
            { q: 'Le bail est annuel, ___ les parties en décident autrement.', o: ['sauf si', 'faute de', 'sous réserve'], why: '*Sauf si* + indicative.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
            { q: 'Le contrat est résilié si le loyer n’est pas payé.', cue: 'À défaut de', a: ['À défaut de paiement du loyer, le contrat est résilié.', 'À défaut de paiement, le contrat est résilié.'], why: '*À défaut de* + noun.' },
            { q: 'Le bail est annuel, mais les parties peuvent en décider autrement.', cue: 'Sauf si', a: ['Le bail est annuel, sauf si les parties en décident autrement.'], why: '*Sauf si* + indicative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
            { q: 'Le locataire ___ payer le loyer chaque mois. (obligation)', a: ['doit'], why: 'An obligation.' },
            { q: 'Il est ___ de sous-louer sans l’accord du propriétaire. (prohibited)', a: ['interdit'], why: 'A prohibition.' },
            { q: '___ de preuves, l’affaire a été classée. (for lack of)', a: ['Faute'], why: '*Faute de* = for lack of.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Vous pouvez partir à condition que vous [avez] fini.', a: ['ayez'], why: '*À condition que* + subjunctive.' },
            { s: 'Le locataire [peut] payer le loyer avant le 5. (it is an obligation)', a: ['doit', 'est tenu de'], why: 'An obligation needs *doit* or *est tenu de*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Une clause et sa version claire',
      about: 'Read a contract clause and its plain-language version.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Article 4 : paiement du loyer', md: 'VERSION JURIDIQUE\n\nAux termes du présent contrat, le locataire ci-après dénommé « le Preneur » est tenu de procéder au règlement du loyer mensuel dans un délai de cinq jours à compter du premier jour du mois. Nonobstant toute disposition contraire, aucun report ne saurait être accordé, sous réserve d’un accord écrit du bailleur. À défaut de paiement dans ledit délai, le bailleur peut résilier le bail, sauf si le Preneur justifie d’un motif légitime. Il est interdit au Preneur de sous-louer le logement.\n\nVERSION CLAIRE\n\nVous devez payer le loyer dans les cinq premiers jours du mois. Vous ne pouvez pas payer plus tard, sauf si le propriétaire vous le permet par écrit. Si vous ne payez pas à temps, le propriétaire peut mettre fin au bail, sauf si vous avez une bonne raison. Vous ne devez pas sous-louer le logement.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Le locataire doit payer le loyer dans les cinq premiers jours du mois.', a: 't', why: '« Dans un délai de cinq jours à compter du premier jour du mois. »' },
            { q: 'Le locataire peut payer plus tard sans autorisation.', a: 'f', why: '« Sauf si le propriétaire vous le permet par écrit. »' },
            { q: 'Si le locataire ne paie pas, le propriétaire peut résilier le bail.', a: 't', why: '« Le bailleur peut résilier le bail. »' },
            { q: 'Le locataire peut sous-louer le logement.', a: 'f', why: '« Il est interdit… de sous-louer. »' },
            { q: 'Le loyer est de 800 euros par mois.', a: 'ng', why: 'The text gives no amount.' },
            { q: 'Le locataire peut avoir une bonne raison de ne pas payer à temps.', a: 't', why: '« Sauf si le Preneur justifie d’un motif légitime. »' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does « aux termes du présent contrat » mean?', o: ['under the terms of this contract', 'before this contract', 'without this contract'], why: '*Aux termes de* = under the terms of.' },
            { q: 'What does « à défaut de paiement » mean?', o: ['if there is no payment', 'after payment', 'because of payment'], why: '*À défaut de* = in the absence of.' },
            { q: 'What is the plain-language version of « est tenu de procéder au règlement »?', o: ['vous devez payer', 'vous pouvez payer', 'vous avez payé'], why: 'The obligation stays, in plain words.' },
            { q: 'What does « ci-après dénommé le Preneur » do?', o: ['It gives the tenant a short name for the rest of the contract.', 'It names the landlord.', 'It cancels the contract.'], why: '*Ci-après dénommé* = hereinafter called.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the legal words.', items: [
            { s: '[Aux termes du] présent contrat, le locataire [ci-après dénommé] « le Preneur ».', why: 'Legal phrases.' },
            { s: '[Nonobstant] toute disposition contraire, aucun report ne saurait être accordé, [sous réserve de] l’accord du bailleur.', why: 'Formal words of exception.' },
            { s: 'À défaut de paiement dans [ledit] délai, le bailleur peut résilier le bail.', why: '*Ledit* = the said.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Vous ne pouvez pas payer plus tard, ___ si le propriétaire vous le permet par écrit.', a: ['sauf'], why: '*Sauf si* + indicative.' },
            { q: 'Il est ___ au Preneur de sous-louer le logement.', a: ['interdit'], why: 'A prohibition.' },
            { q: 'Le locataire est ___ de procéder au règlement du loyer.', a: ['tenu'], why: '*Est tenu de*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Vous devez payer le loyer dans les cinq premiers jours du mois.', why: 'The plain version of the first sentence.' },
            { a: 'Vous ne devez pas sous-louer le logement.', why: 'The plain version of the prohibition.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Nonobstant cette clause, le contrat reste valable. “Nonobstant” means…', o: ['malgré', 'à cause de', 'avant'], why: '*Nonobstant* = despite.' },
      { q: 'Le bail est renouvelé ___ d’un accord écrit.', o: ['sous réserve', 'à condition', 'faute'], why: '*Sous réserve de* + noun.' },
      { q: 'Le bail est annuel, ___ les parties en décident autrement.', o: ['sauf si', 'faute de', 'sous réserve'], why: '*Sauf si* + indicative.' },
      { q: 'Which is the plain version of « est tenu de procéder au règlement » ?', o: ['vous devez payer', 'vous pouvez payer', 'il faudrait payer'], why: 'The obligation stays.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the formal word with its plain meaning.', pairs: [
      ['aux termes de', 'selon'],
      ['aux fins de', 'pour'],
      ['il y a lieu de', 'il faut'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Les ___ salariés doivent signer. (the said, plural masculine)', a: ['lesdits'], why: '*Lesdits* agrees in the plural.' },
      { q: '___ de paiement, le contrat est résilié.', a: ['À défaut'], why: '*À défaut de*.' },
      { q: 'Il est ___ de sous-louer.', a: ['interdit'], why: 'A prohibition.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite in plain language.', items: [
      { q: 'Le bénéficiaire est tenu de procéder au remboursement de la somme perçue.', cue: 'Vous devez', a: ['Vous devez rembourser la somme perçue.', 'Vous devez rembourser la somme que vous avez reçue.'], why: 'An active verb replaces the noun phrase.' },
      { q: 'Nonobstant la pluie, la fête aura lieu.', cue: 'Malgré', a: ['Malgré la pluie, la fête aura lieu.'], why: '*Nonobstant* = malgré.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'La [ledit] clause reste en vigueur.', a: ['ladite'], why: '*Clause* is feminine.' },
      { s: 'Vous pouvez partir à condition que vous [avez] fini.', a: ['ayez'], why: '*À condition que* + subjunctive.' },
    ] },
  ],
};
