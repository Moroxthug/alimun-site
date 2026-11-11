// French B2, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Hypotheses and conditions',
  goal: 'Talk about conditions, possibilities and consequences with precision. Use the conditional links, the future perfect and the past subjunctive.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['conditions', 'si clauses', 'au cas où', 'à condition que', 'futur antérieur', 'subjonctif passé', 'contract'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Au cas où, sauf si, à moins que',
      about: 'Review the si-sentences and meet other ways to express a condition.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'You already know three kinds of **si** sentence. **Likely**: si + present, future (*Si je peux, je viendrai*). **Imaginary**: si + imparfait, conditional (*Si je pouvais, je viendrais*). **Impossible in the past**: si + plus-que-parfait, past conditional (*Si j’avais pu, je serais venu*). At B2 you add other links that express a condition, each with its own mood.' },
          { t: 'table', caption: 'Ways to express a condition', explain: ['head', 'col2'], head: ['Link', 'Example', 'What follows'], rows: [
            ['si', 'Si tu viens, je cuisinerai.', 'present or imparfait'],
            ['au cas où', 'Prends un parapluie au cas où il pleuvrait.', 'conditional'],
            ['à condition que', 'Je viens à condition que tu m’invites.', 'subjunctive'],
            ['pourvu que', 'Pourvu qu’il vienne !', 'subjunctive'],
            ['à moins que', 'Je viendrai à moins que tu ne sois absent.', 'subjunctive'],
            ['sauf si', 'Je viendrai sauf si je suis malade.', 'indicative'],
            ['si jamais', 'Si jamais tu as un problème, appelle-moi.', 'present or imparfait'],
          ] },
          { t: 'tip', art: 'owl', md: '**au cas où** is followed by the **conditional**, not the future: *Prends ton manteau au cas où il ferait froid.* **à moins que** is followed by the subjunctive and often has a small **ne**, which does not make the sentence negative: *à moins qu’il ne pleuve* (unless it rains). **sauf si** takes the indicative: *sauf s’il pleut*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Prends un parapluie **au cas où il pleuvrait**.', n: '*au cas où* + conditional.' },
            { s: 'Je viendrai **à condition que tu m’invites**.', n: '*à condition que* + subjunctive.' },
            { s: 'Nous irons à la plage **sauf s’il pleut**.', n: '*sauf si* + indicative.' },
            { s: 'Je partirai demain **à moins que le train ne soit annulé**.', n: '*à moins que* + subjunctive.' },
            { s: '**Si jamais** tu as un problème, appelle-moi.', n: 'A possibility you hope will not happen.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Prends ton manteau au cas où il ___ froid.', o: ['ferait', 'fera', 'fasse'], why: '*au cas où* + conditional.' },
            { q: 'Je viendrai à condition que tu___.', o: ['m’invites', 'm’invitais', 'm’inviteras'], why: '*à condition que* + subjunctive.' },
            { q: 'Nous sortirons sauf s’il___.', o: ['pleut', 'pleuve', 'pleuvrait'], why: '*sauf si* + indicative.' },
            { q: 'Je partirai demain à moins que le train ne ___ annulé.', o: ['soit', 'est', 'sera'], why: '*à moins que* + subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with the link in brackets.', items: [
            { q: 'Je viendrai. Tu m’invites. (à condition que)', cue: 'Je viendrai', a: ['Je viendrai à condition que tu m’invites.'], why: '*à condition que* + subjunctive.' },
            { q: 'Nous sortirons. Il pleut. (sauf si)', cue: 'Nous sortirons', a: ['Nous sortirons sauf s’il pleut.'], why: '*sauf si* + indicative.' },
            { q: 'Prends un manteau. Il fera peut-être froid. (au cas où)', cue: 'Prends un manteau', a: ['Prends un manteau au cas où il ferait froid.'], why: '*au cas où* + conditional.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Prends un parapluie au cas où il pleuvrait.', why: '*au cas où* + conditional.' },
            { a: 'Je viendrai à condition que tu m’invites.', why: '*à condition que* + subjunctive.' },
            { a: 'Nous sortirons sauf s’il pleut.', why: '*sauf si* + indicative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Prends un manteau au cas où il [fera] froid.', a: ['ferait'], why: '*au cas où* + conditional.' },
            { s: 'Je viendrai à condition que tu [invites] moi.', a: ['m’invites'], why: 'Pronoun first, and the subjunctive: *que tu m’invites*.' },
            { s: 'Nous sortirons sauf s’il [pleuve].', a: ['pleut'], why: '*sauf si* + indicative.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['Si j’avais su, je serais venu.', 'Si j’aurais su, je serais venu.', 'Si j’ai su, je serais venu.'], why: 'si + plus-que-parfait, past conditional.' },
            { q: '', o: ['À moins qu’il ne pleuve, nous sortirons.', 'À moins qu’il pleut, nous sortirons.', 'À moins qu’il pleuvra, nous sortirons.'], why: '*à moins que* + subjunctive.' },
            { q: '', o: ['Sauf s’il pleut, nous sortirons.', 'Sauf qu’il pleut, nous sortirons.', 'Sauf s’il pleuve, nous sortirons.'], why: '*sauf si* + indicative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Quand j’aurai fini',
      about: 'Use the future perfect for something finished before a future point.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The **future perfect** (**futur antérieur**) says that something will be **finished before** another future event or a future time: *Quand j’aurai fini, je t’appellerai.* (When I have finished, I will call you.) It is made of the **future of avoir or être** and the **past participle**: *j’aurai fini, tu auras fini, il aura fini, nous aurons fini …* and *je serai arrivé(e), elle sera arrivée …*.' },
          { t: 'table', caption: 'The future perfect', explain: ['head'], quiz: true, head: ['', 'avoir (finir)', 'être (arriver)'], rows: [
            ['je', 'j’aurai fini', 'je serai arrivé(e)'],
            ['tu', 'tu auras fini', 'tu seras arrivé(e)'],
            ['il / elle / on', 'il aura fini', 'elle sera arrivée'],
            ['nous', 'nous aurons fini', 'nous serons arrivé(e)s'],
            ['vous', 'vous aurez fini', 'vous serez arrivé(e)(s)'],
            ['ils / elles', 'ils auront fini', 'elles seront arrivées'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **quand, lorsque, dès que, aussitôt que, une fois que**, French uses the **future** (or the future perfect) when the main verb is in the future, which English does not do: *Quand tu arriveras, je cuisinerai.* (When you arrive …) For two actions in a row, use the future perfect in the first part: *Dès que j’aurai fini, je partirai.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Quand j’aurai fini**, je t’appellerai.', n: 'First finish, then call.' },
            { s: '**Dès qu’elle sera arrivée**, elle nous préviendra.', n: 'Arrival first, then the message.' },
            { s: 'À six heures, nous **aurons terminé**.', n: 'Finished by a time.' },
            { s: 'Il n’a pas répondu : il **aura oublié**.', n: 'A supposition: he probably forgot.' },
            { s: '**Après que** tu **auras mangé**, nous sortirons.', n: '*après que* + indicative, not subjunctive.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the future perfect.', items: [
            { q: 'Quand j’___ fini, je t’appellerai. (avoir)', a: ['aurai'], why: '*j’aurai fini*' },
            { q: 'Dès qu’elle ___ arrivée, elle nous préviendra. (être)', a: ['sera'], why: '*elle sera arrivée*' },
            { q: 'À six heures, nous ___ terminé. (avoir)', a: ['aurons'], why: '*nous aurons terminé*' },
            { q: 'Il n’a pas répondu : il ___ oublié. (avoir)', a: ['aura'], why: 'A supposition: *il aura oublié*.' },
            { q: 'Quand vous ___ lu le dossier, vous me direz. (avoir)', a: ['aurez'], why: '*vous aurez lu*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two future events with quand or dès que.', items: [
            { q: 'Je finirai. Je t’appellerai. (Quand …)', cue: 'Quand j’aurai', a: ['Quand j’aurai fini, je t’appellerai.'], why: 'The first event is finished before the second.' },
            { q: 'Elle arrivera. Elle nous préviendra. (Dès que …)', cue: 'Dès qu’elle', a: ['Dès qu’elle sera arrivée, elle nous préviendra.'], why: '*dès que* + future perfect.' },
            { q: 'Tu mangeras. Nous sortirons. (Après que …)', cue: 'Après que', a: ['Après que tu auras mangé, nous sortirons.'], why: '*après que* + future perfect.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right tense.', items: [
            { q: 'Quand tu ___, je cuisinerai.', o: ['arriveras', 'arrives', 'arrivais'], why: 'After *quand* with a future main verb: the future.' },
            { q: 'Dès que j’___ fini, je partirai.', o: ['aurai', 'ai', 'avais'], why: 'Finishing comes first: the future perfect.' },
            { q: 'Il n’a pas répondu : il ___ oublié.', o: ['aura', 'avait', 'a'], why: 'A supposition: the future perfect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Quand j’aurai fini, je t’appellerai.', why: 'Future perfect, then future.' },
            { a: 'Dès qu’elle sera arrivée, elle nous préviendra.', why: '*dès que* + future perfect.' },
            { a: 'À six heures, nous aurons terminé.', why: 'A deadline in the future perfect.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Quand j’[ai] fini, je t’appellerai.', a: ['aurai'], why: 'The main verb is in the future, so: *quand j’aurai fini*.' },
            { s: 'Dès qu’elle [aura] arrivée, elle nous préviendra.', a: ['sera'], why: '*arriver* uses *être*.' },
            { s: 'Après que tu [aies mangé], nous sortirons.', a: ['auras mangé'], why: '*après que* takes the indicative: *auras mangé*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Je suis content qu’il soit venu',
      about: 'Use the past subjunctive for an action that came first.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'The **present subjunctive** talks about an action that is **at the same time** or **later** than the main verb: *Je veux qu’il vienne.* (He is to come later.) The **past subjunctive** talks about an action that is **earlier**: *Je suis content qu’il soit venu.* (He came before, and I am glad now.) It is made of the **subjunctive of avoir or être** and the **past participle**: *que j’aie fini, que tu aies fini, qu’il ait fini …* and *que je sois arrivé(e), qu’elle soit arrivée …*.' },
          { t: 'table', caption: 'The past subjunctive', explain: ['head'], quiz: true, head: ['', 'avoir (finir)', 'être (venir)'], rows: [
            ['que je', 'j’aie fini', 'je sois venu(e)'],
            ['que tu', 'tu aies fini', 'tu sois venu(e)'],
            ['qu’il / elle', 'il ait fini', 'elle soit venue'],
            ['que nous', 'nous ayons fini', 'nous soyons venu(e)s'],
            ['que vous', 'vous ayez fini', 'vous soyez venu(e)(s)'],
            ['qu’ils / elles', 'ils aient fini', 'elles soient venues'],
          ] },
          { t: 'tip', art: 'owl', md: 'Compare: **Je regrette qu’il parte** (he is leaving, now or soon) and **Je regrette qu’il soit parti** (he left earlier). **Bien qu’il ait fini**, **avant qu’il vienne** (present), **après qu’il est venu** (indicative: after **après que**, use the indicative, although many speakers use the subjunctive).' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Je suis content **qu’il soit venu**.', n: 'He came earlier.' },
            { s: 'Bien **qu’elle ait fini** son travail, elle est restée.', n: '*bien que* + past subjunctive for an earlier action.' },
            { s: 'Je regrette **qu’ils soient partis** si tôt.', n: 'They left earlier.' },
            { s: 'Il faut que **tu aies fini** avant midi.', n: 'A deadline: finished before noon.' },
            { s: 'Je ne pense pas **qu’il ait compris**.', n: 'A doubt about something that already happened.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the past subjunctive.', items: [
            { q: 'Je suis content qu’il ___ venu. (être)', a: ['soit'], why: '*qu’il soit venu*' },
            { q: 'Bien qu’elle ___ fini son travail, elle est restée. (avoir)', a: ['ait'], why: '*bien qu’elle ait fini*' },
            { q: 'Je regrette qu’ils ___ partis si tôt. (être)', a: ['soient'], why: '*qu’ils soient partis*' },
            { q: 'Il faut que tu ___ fini avant midi. (avoir)', a: ['aies'], why: '*que tu aies fini*' },
            { q: 'Je ne pense pas qu’il ___ compris. (avoir)', a: ['ait'], why: '*qu’il ait compris*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Present or past subjunctive?', items: [
            { q: 'Je veux qu’il ___ demain. (he is to come)', o: ['vienne', 'soit venu', 'vient'], why: 'Later than the main verb: the present subjunctive.' },
            { q: 'Je suis content qu’il ___ hier. (he came)', o: ['soit venu', 'vienne', 'viendra'], why: 'Earlier than the main verb: the past subjunctive.' },
            { q: 'Il faut que tu ___ ce travail avant midi. (finished by then)', o: ['aies fini', 'finisses', 'finis'], why: 'A deadline: finished before noon.' },
            { q: 'Je regrette qu’il___. (he is leaving now)', o: ['parte', 'soit parti', 'partira'], why: 'Happening now: the present subjunctive.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Express the feeling about the earlier event.', items: [
            { q: 'Il est venu. Je suis content. (Je suis content qu’…)', cue: 'Je suis content qu’il', a: ['Je suis content qu’il soit venu.'], why: 'An earlier event: the past subjunctive.' },
            { q: 'Ils sont partis. Je regrette. (Je regrette qu’…)', cue: 'Je regrette qu’ils', a: ['Je regrette qu’ils soient partis.'], why: '*qu’ils soient partis*' },
            { q: 'Elle a fini. Il est étonné. (Il est étonné qu’…)', cue: 'Il est étonné qu’elle', a: ['Il est étonné qu’elle ait fini.'], why: '*qu’elle ait fini*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je suis content qu’il soit venu.', why: 'Past subjunctive for an earlier action.' },
            { a: 'Bien qu’elle ait fini, elle est restée.', why: '*bien que* + past subjunctive.' },
            { a: 'Il faut que tu aies fini avant midi.', why: 'A deadline: finished before noon.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Je suis content qu’il [vienne] hier.', a: ['soit venu'], why: 'An earlier event: the past subjunctive.' },
            { s: 'Il faut que tu [as] fini avant midi.', a: ['aies'], why: 'After *il faut que*: the subjunctive *aies fini*.' },
            { s: 'Bien qu’elle [a] fini, elle est restée.', a: ['ait'], why: '*bien que* + subjunctive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un contrat et un e-mail',
      about: 'Read a contract extract and an e-mail that sets conditions.',
      art: 'cactus',
      spreads: [
        [
          { t: 'reading', title: 'Extrait d’un contrat de location', md: '**Article 4 – Conditions de la location**\nLe locataire s’engage à payer le loyer avant le cinq de chaque mois. Il pourra héberger des invités à condition qu’ils ne dérangent pas les voisins. Au cas où le locataire souhaiterait quitter le logement avant la fin du contrat, il devra prévenir le propriétaire un mois à l’avance, sauf si le propriétaire accepte un délai plus court. Aucun animal n’est autorisé, à moins que le propriétaire ne l’ait accepté par écrit.' },
          { t: 'reading', title: 'Un e-mail pour fixer les conditions', md: 'Bonjour Madame Roux,\n\nMerci pour votre proposition. Nous pouvons signer le contrat dès que vous aurez envoyé les documents. Nous sommes d’accord pour la date du premier juillet, à condition que l’appartement soit propre. Pourvu que tout se passe bien, nous aménagerons dès le lendemain. Quand nous aurons déposé la caution, nous vous préviendrons.\n\nCordialement,\nKarim Benali' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Le loyer doit être payé avant le cinq de chaque mois.', a: 't', why: '*avant le cinq de chaque mois*' },
            { q: 'Le locataire peut inviter des personnes à condition qu’elles ne dérangent pas les voisins.', a: 't', why: '*à condition qu’ils ne dérangent pas les voisins*' },
            { q: 'Les animaux sont toujours interdits.', a: 'f', why: 'Not if the owner has accepted in writing.' },
            { q: 'Le loyer est de 600 euros.', a: 'ng', why: 'The amount is not given.' },
            { q: 'Karim signera dès qu’il aura reçu les documents.', a: 't', why: '*dès que vous aurez envoyé les documents*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Quand le locataire doit-il prévenir pour partir plus tôt ?', o: ['Un mois à l’avance.', 'Une semaine à l’avance.', 'Le jour même.'], why: '*il devra prévenir le propriétaire un mois à l’avance*' },
            { q: 'Qu’est-ce qui permettrait un délai plus court ?', o: ['L’accord du propriétaire.', 'Le paiement du loyer.', 'Un nouvel animal.'], why: '*sauf si le propriétaire accepte un délai plus court*' },
            { q: 'Que fera Karim après avoir déposé la caution ?', o: ['Il préviendra Madame Roux.', 'Il quittera l’appartement.', 'Il signera un nouveau contrat.'], why: '*Quand nous aurons déposé la caution, nous vous préviendrons.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that express a condition.', items: [
            { s: 'Il pourra héberger des invités [à condition qu’]ils ne dérangent pas les voisins.', why: '*à condition que* introduces a condition.' },
            { s: '[Au cas où] le locataire souhaiterait partir, il devra prévenir le propriétaire.', why: '*au cas où* introduces a possibility.' },
            { s: 'Aucun animal n’est autorisé, [à moins que] le propriétaire ne l’ait accepté.', why: '*à moins que* means unless.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Le locataire doit payer le ___ avant le cinq de chaque mois.', a: ['loyer'], why: '*le loyer* = the rent.' },
            { q: 'Pourvu que tout se ___ bien, nous aménagerons le lendemain.', a: ['passe'], why: '*pourvu que* + subjunctive: *se passe*.' },
            { q: 'Nous signerons dès que vous ___ envoyé les documents.', a: ['aurez'], why: '*dès que vous aurez envoyé*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Prends ton manteau au cas où il ___ froid.', o: ['ferait', 'fera', 'fasse'], why: '*au cas où* + conditional.' },
      { q: 'Quand j’___ fini, je t’appellerai.', o: ['aurai', 'ai', 'avais'], why: 'The future perfect.' },
      { q: 'Je suis content qu’il ___ venu.', o: ['soit', 'est', 'sera'], why: 'The past subjunctive.' },
      { q: 'Nous sortirons sauf s’il___.', o: ['pleut', 'pleuve', 'pleuvrait'], why: '*sauf si* + indicative.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Je viendrai à ___ que tu m’invites.', a: ['condition'], why: '*à condition que*' },
      { q: 'Dès qu’elle ___ arrivée, elle nous préviendra. (être)', a: ['sera'], why: '*elle sera arrivée*' },
      { q: 'Il faut que tu ___ fini avant midi. (avoir)', a: ['aies'], why: '*que tu aies fini*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the meaning.', pairs: [
      ['au cas où', 'in case'],
      ['sauf si', 'unless'],
      ['à condition que', 'provided that'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Join the two events.', items: [
      { q: 'Je finirai. Je t’appellerai. (Quand …)', cue: 'Quand j’aurai', a: ['Quand j’aurai fini, je t’appellerai.'], why: 'Future perfect, then future.' },
      { q: 'Il est venu. Je suis content. (Je suis content qu’…)', cue: 'Je suis content qu’il', a: ['Je suis content qu’il soit venu.'], why: 'The past subjunctive.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Prends un parapluie au cas où il pleuvrait.', why: '*au cas où* + conditional.' },
      { a: 'Dès qu’elle sera arrivée, elle nous préviendra.', why: '*dès que* + future perfect.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Après que tu [aies mangé], nous sortirons.', a: ['auras mangé'], why: '*après que* takes the indicative.' },
    ] },
  ],
};
