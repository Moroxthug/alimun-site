// French B1, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Travel and culture',
  goal: 'Deal with problems when you travel and talk about culture and traditions. Use polite complaints with the conditional, report what someone said, and recognise the passé simple in short texts.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['problems', 'complaints', 'conditional', 'reported speech', 'indirect questions', 'culture', 'festivals', 'passé simple'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Le train est en retard',
      about: 'Explain a problem and ask politely for a solution.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'When something goes wrong during a trip, start with a calm sentence that describes the problem: **Il y a un problème avec …** or **… ne fonctionne pas**. Then say what you want: **Je voudrais …** or **Pourriez-vous …?** (the conditional of politeness from unit 4). End with **Merci de votre aide.** This way the person who helps you is more likely to find a solution.' },
          { t: 'table', caption: 'Problems on a trip', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['Le train est en retard / annulé.', 'The train is late / cancelled.'],
            ['J’ai perdu mes bagages.', 'I have lost my luggage.'],
            ['La chambre est sale / bruyante.', 'The room is dirty / noisy.'],
            ['Le chauffage ne marche pas.', 'The heating does not work.'],
            ['Il y a une erreur sur la facture.', 'There is a mistake on the bill.'],
            ['On m’a volé mon portefeuille.', 'My wallet was stolen.'],
            ['Je voudrais être remboursé(e).', 'I would like a refund.'],
            ['Je voudrais faire une réclamation.', 'I would like to make a complaint.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In French, a calm voice and the conditional work better than a harsh word. Instead of *C’est inadmissible !* start with **Je suis désolé, mais …**: *Je suis désolé, mais la chambre n’est pas propre. Pourriez-vous m’en donner une autre ?* To thank, say **Je vous remercie de votre compréhension.**' },
        ],
        [
          { t: 'dialogue', title: 'À l’hôtel', lines: [
            { who: 'Karim', s: 'Bonsoir. Il y a un problème avec ma chambre : le chauffage ne marche pas.' },
            { who: 'Réceptionniste', s: 'Je suis désolée, Monsieur. Je peux envoyer quelqu’un tout de suite.' },
            { who: 'Karim', s: 'Merci. Pourriez-vous aussi me donner une couverture ?' },
            { who: 'Réceptionniste', s: 'Bien sûr. Nous allons vous apporter une couverture. Désolée pour le dérangement.' },
          ] },
          { t: 'examples', items: [
            { s: '**Il y a un problème avec** ma réservation.', n: 'Starting calmly.' },
            { s: 'Le train **est en retard** de vingt minutes.', n: '*en retard de* + time.' },
            { s: '**Pourriez-vous** m’aider à trouver un taxi ?', n: 'The polite request.' },
            { s: '**Je voudrais être remboursé** du billet.', n: 'Asking for a refund.' },
            { s: 'J’**ai perdu** mes bagages à l’aéroport.', n: 'A problem with luggage.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
            ['en retard', 'late'],
            ['un remboursement', 'a refund'],
            ['une réclamation', 'a complaint'],
            ['un bagage', 'a piece of luggage'],
            ['annulé', 'cancelled'],
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'Votre chambre est trop bruyante. Vous dites :', o: ['Pourriez-vous me donner une autre chambre ?', 'Je veux une autre chambre !', 'Ça m’est égal.'], why: 'A polite request with the conditional.' },
            { q: 'Votre train est annulé. Vous dites :', o: ['Je voudrais être remboursé, s’il vous plaît.', 'Je suis arrivé.', 'Bonne nuit.'], why: 'To ask for a refund.' },
            { q: 'Vous avez perdu votre valise. Vous dites :', o: ['J’ai perdu ma valise. Pourriez-vous m’aider ?', 'Ma valise est belle.', 'Je pars demain.'], why: 'State the problem, then ask for help.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il y a un problème avec ma réservation.', why: '*Il y a un problème avec* + noun.' },
            { a: 'Pourriez-vous m’apporter une couverture ?', why: '*Pourriez-vous* + infinitive.' },
            { a: 'Je voudrais être remboursé du billet.', why: '*Je voudrais* + infinitive.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make it more polite.', items: [
            { q: 'Donnez-moi une autre chambre !', cue: 'Pourriez', a: ['Pourriez-vous me donner une autre chambre ?'], why: 'The conditional is more polite than the imperative.' },
            { q: 'Je veux être remboursé.', cue: 'Je', a: ['Je voudrais être remboursé.'], why: '*vouloir* → *voudrais*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Il a dit qu’il viendrait',
      about: 'Report what someone said and ask indirect questions.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To report what someone says, use a verb like **dire que** (to say that), **expliquer que**, **répondre que** or **demander si** (to ask whether). If the reporting verb is in the **present**, the tense of the original sentence does not change: *« Je suis fatigué. » → Il dit qu’il est fatigué.* If the reporting verb is in the **past**, the tenses shift back one step: the present becomes the **imparfait**, the passé composé becomes the **plus-que-parfait**, and the future becomes the **conditional**.' },
          { t: 'table', caption: 'Reported speech', explain: ['head', 'col2'], head: ['Original words', 'Reported (past)', 'Change'], rows: [
            ['« Je suis fatigué. »', 'Il a dit qu’il était fatigué.', 'present → imparfait'],
            ['« J’ai fini. »', 'Il a dit qu’il avait fini.', 'passé composé → plus-que-parfait'],
            ['« Je viendrai demain. »', 'Il a dit qu’il viendrait le lendemain.', 'future → conditional'],
            ['« Je vais partir. »', 'Il a dit qu’il allait partir.', 'near future → imparfait + infinitive'],
          ] },
          { t: 'tip', art: 'owl', md: 'Words for time also change after a past verb: **demain** becomes **le lendemain**, **hier** becomes **la veille**, **aujourd’hui** becomes **ce jour-là**, **ici** becomes **là**. In speech, many people do not change them, but in a written report you should.' },
        ],
        [
          { t: 'text', md: 'To report a **question**, use **si** for yes/no questions and the question word for the others, and put the verb in normal order (no inversion): *« Tu viens ? » → Il demande si je viens. « Où habites-tu ? » → Il demande où j’habite. « Qu’est-ce que tu fais ? » → Il demande ce que je fais.* **si** becomes **s’** before **il**: *Il demande s’il peut entrer.*' },
          { t: 'examples', items: [
            { s: 'Elle **dit qu’**elle est en retard.', n: 'Present reporting verb: no change.' },
            { s: 'Elle **a dit qu’**elle **était** en retard.', n: 'Past reporting verb: imparfait.' },
            { s: 'Il **a expliqué qu’**il **viendrait** le lendemain.', n: 'Future → conditional.' },
            { s: 'Je **demande si** le train part à midi.', n: 'A yes/no question.' },
            { s: 'Il **a demandé où** nous **habitions**.', n: 'A question word; no inversion.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Report the words. Begin with Il a dit que…', items: [
            { q: '« Je suis fatigué. »', cue: 'Il a dit qu’il', a: ['Il a dit qu’il était fatigué.'], why: 'present → imparfait.' },
            { q: '« J’ai perdu mes clés. »', cue: 'Il a dit qu’il', a: ['Il a dit qu’il avait perdu ses clés.'], why: 'passé composé → plus-que-parfait, and *mes* → *ses*.' },
            { q: '« Je viendrai demain. »', cue: 'Il a dit qu’il', a: ['Il a dit qu’il viendrait le lendemain.', 'Il a dit qu’il viendrait demain.'], why: 'future → conditional; *demain* → *le lendemain*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Elle a dit qu’elle ___ en retard.', o: ['était', 'est', 'sera'], why: 'Past reporting verb: the imparfait.' },
            { q: 'Il demande ___ je viens.', o: ['si', 'que', 'ce que'], why: 'A yes/no question: *si*.' },
            { q: 'Il a demandé ___ nous habitions.', o: ['où', 'si', 'que'], why: 'A question word: *où*.' },
            { q: 'Elle a dit qu’elle ___ le lendemain.', o: ['viendrait', 'viendra', 'venait'], why: 'Future → conditional.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il a dit qu’il viendrait le lendemain.', why: 'Reported future: conditional.' },
            { a: 'Elle demande si le train part à midi.', why: '*demander si* + normal word order.' },
            { a: 'Ils ont demandé où nous habitions.', why: 'Question word, no inversion.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Report the question.', items: [
            { q: '« Tu viens ? » Il demande…', cue: 'Il demande', a: ['Il demande si je viens.', 'Il demande si tu viens.'], why: 'A yes/no question: *si*.' },
            { q: '« Où habites-tu ? » Il demande…', cue: 'Il demande', a: ['Il demande où j’habite.', 'Il demande où tu habites.'], why: 'No inversion.' },
            { q: '« Qu’est-ce que tu fais ? » Il demande…', cue: 'Il demande', a: ['Il demande ce que je fais.', 'Il demande ce que tu fais.'], why: '*qu’est-ce que* becomes *ce que*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Il a dit qu’il [est] fatigué.', a: ['était'], why: 'Past reporting verb: the imparfait.' },
            { s: 'Il demande [qu’] je viens.', a: ['si'], why: 'A yes/no question: *si*.' },
            { s: 'Elle a dit qu’elle [viendra] le lendemain.', a: ['viendrait'], why: 'Future → conditional.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Fêtes et traditions',
      about: 'Talk about festivals and customs, and recognise the passé simple.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'The French-speaking world has many festivals. In France, **le 14 juillet** is the national day. **La Fête de la musique** takes place every year on **21 juin**, with free concerts in the streets. At Epiphany, people eat **une galette des rois** and the person who finds the small figure in it becomes king or queen. In Belgium, the national day is **le 21 juillet**; in Switzerland, **le 1er août**; in Quebec, **la Fête nationale** is **le 24 juin**.' },
          { t: 'table', caption: 'Festivals', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['la fête nationale', 'the national day'],
            ['la Fête de la musique', 'music day (21 June)'],
            ['une galette des rois', 'Epiphany cake'],
            ['le Carnaval', 'carnival'],
            ['le réveillon', 'the evening meal on 24 December or 31 December'],
            ['un feu d’artifice', 'fireworks'],
            ['un défilé', 'a parade'],
            ['une tradition', 'a tradition'],
          ] },
          { t: 'tip', art: 'owl', md: 'Phrases for talking about customs: **Dans mon pays, on …** (In my country, people …), **Chez nous, c’est la tradition de …** (Where I come from, it is a tradition to …), **Ce jour-là, on …** (On that day, people …). **On** is the natural subject for customs.' },
        ],
        [
          { t: 'text', md: 'In books and old texts, you may see the **passé simple**, a past tense that is used in writing, not in speech. It looks different from the passé composé, but you only need to **recognise** it at this level. Common forms: **il fut** (he was), **il eut** (he had), **il alla** (he went), **il fit** (he did), **il prit** (he took), **ils furent** (they were), **ils firent** (they did). Compare: *Il alla au marché* (written) and *Il est allé au marché* (spoken).' },
          { t: 'table', caption: 'Recognising the passé simple', explain: ['head', 'col2'], head: ['Passé simple', 'Passé composé', 'Meaning'], rows: [
            ['il fut', 'il a été', 'he was'],
            ['il eut', 'il a eu', 'he had'],
            ['il alla', 'il est allé', 'he went'],
            ['il prit', 'il a pris', 'he took'],
            ['il fit', 'il a fait', 'he did'],
            ['ils arrivèrent', 'ils sont arrivés', 'they arrived'],
          ] },
          { t: 'examples', items: [
            { s: 'Le 14 juillet, **on** regarde le **défilé** et le **feu d’artifice**.', n: 'Customs with *on*.' },
            { s: 'Dans mon pays, **on mange** une galette en janvier.', n: 'A custom.' },
            { s: 'Il **prit** son manteau et **sortit**.', n: 'Passé simple: *prit*, *sortit*.' },
            { s: 'Il **fut** surpris par la nouvelle.', n: 'Passé simple of *être*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the passé composé.', pairs: [
            ['il alla', 'il est allé'],
            ['il fut', 'il a été'],
            ['il eut', 'il a eu'],
            ['il fit', 'il a fait'],
            ['ils arrivèrent', 'ils sont arrivés'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Which festival?', items: [
            { q: 'On mange une galette et on cherche une petite figurine :', o: ['l’Épiphanie', 'le 14 juillet', 'la Fête de la musique'], why: 'The galette des rois belongs to Epiphany.' },
            { q: 'Des concerts gratuits dans les rues, le 21 juin :', o: ['la Fête de la musique', 'le Carnaval', 'le réveillon'], why: 'The music day.' },
            { q: 'Un défilé et un feu d’artifice, le 14 juillet :', o: ['la fête nationale en France', 'la Fête nationale du Québec', 'la fête nationale de Belgique'], why: 'The 14th of July is the French national day.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Le 14 juillet, on regarde le feu d’___.', a: ['artifice'], why: '*un feu d’artifice* means fireworks.' },
            { q: 'Dans mon pays, ___ mange une galette en janvier.', a: ['on'], why: '*on* is the natural subject for customs.' },
            { q: 'Le 1er août est la fête nationale de la ___.', a: ['Suisse'], why: 'Switzerland’s national day.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Le passé simple est utilisé surtout à l’écrit.', a: 't', why: 'It is a written tense.' },
            { q: '« Il alla » est le passé simple de « aller ».', a: 't', why: '*il alla* = *il est allé* in writing.' },
            { q: 'La Fête de la musique a lieu le 14 juillet.', a: 'f', why: 'It takes place on 21 June.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Une lettre et un texte sur une fête',
      about: 'Read a travel complaint letter and a text about a festival.',
      art: 'ghost',
      spreads: [
        [
          { t: 'reading', title: 'Lettre de réclamation', md: 'Madame, Monsieur,\n\nJe me permets de vous écrire à propos de mon séjour dans votre hôtel du 5 au 8 mai. À mon arrivée, on m’a dit que ma chambre serait prête à quinze heures, mais elle ne l’était toujours pas à dix-huit heures. Ensuite, le chauffage ne marchait pas et la chambre était bruyante. J’ai expliqué le problème à la réception, mais on m’a répondu que personne ne pouvait m’aider.\n\nPourriez-vous me rembourser une partie du séjour ? Je vous remercie de votre compréhension.\n\nCordialement,\nKarim Benali' },
          { t: 'reading', title: 'La Fête de la musique', md: '**La Fête de la musique**\nChaque année, le 21 juin, les rues se remplissent de musiciens. Dans les grandes villes comme dans les petits villages, tout le monde peut jouer ou écouter gratuitement. Les familles se promènent, les jeunes dansent, et les cafés restent ouverts tard. Cette fête a lieu le même jour dans de nombreux pays. On dit que c’est le jour le plus long de l’année, et que la musique doit être partout.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Karim a séjourné dans l’hôtel du 5 au 8 mai.', a: 't', why: '*mon séjour … du 5 au 8 mai*' },
            { q: 'La chambre était prête à quinze heures.', a: 'f', why: 'It was still not ready at 6 pm.' },
            { q: 'Le chauffage marchait bien.', a: 'f', why: '*le chauffage ne marchait pas*' },
            { q: 'Karim a déjà reçu un remboursement.', a: 'ng', why: 'He asks for a partial refund; no answer is given.' },
            { q: 'La Fête de la musique est le 21 juin.', a: 't', why: '*le 21 juin*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Que demande Karim dans sa lettre ?', o: ['Un remboursement partiel.', 'Une autre chambre immédiatement.', 'Un autre hôtel.'], why: '*Pourriez-vous me rembourser une partie du séjour ?*' },
            { q: 'Que veut dire « on m’a dit que ma chambre serait prête » ?', o: ['On m’a promis que la chambre serait prête à quinze heures.', 'La chambre était déjà prête.', 'Je n’ai pas pu entrer.'], why: 'Reported speech: future → conditional.' },
            { q: 'Qui peut jouer de la musique pendant la fête ?', o: ['Tout le monde.', 'Seulement les professionnels.', 'Seulement les enfants.'], why: '*tout le monde peut jouer ou écouter gratuitement*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the reported speech in the letter.', items: [
            { s: 'On m’[a dit que] ma chambre [serait prête] à quinze heures.', why: 'Reported speech with the conditional.' },
            { s: 'On m’[a répondu que] personne ne [pouvait] m’aider.', why: 'Reported speech with the imparfait.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Karim demande un ___ partiel.', a: ['remboursement'], why: '*me rembourser une partie du séjour*' },
            { q: 'La Fête de la musique est ___ pour tout le monde.', a: ['gratuite'], why: '*gratuitement*' },
            { q: 'Les rues se remplissent de ___.', a: ['musiciens'], why: '*se remplissent de musiciens*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Il y a ___ problème avec ma réservation.', o: ['un', 'une', 'le'], why: '*un problème*' },
      { q: 'Elle a dit qu’elle ___ en retard.', o: ['était', 'est', 'sera'], why: 'Past reporting verb: imparfait.' },
      { q: 'Il demande ___ je viens.', o: ['si', 'que', 'ce que'], why: 'A yes/no question: *si*.' },
      { q: '« Il alla » est le passé simple de…', o: ['aller', 'être', 'avoir'], why: '*il alla* = *il est allé*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Pourriez-vous ___ aider ? (me)', a: ['m’', 'm'], why: '*Pourriez-vous m’aider ?*' },
      { q: 'Il a dit qu’il ___ le lendemain. (venir)', a: ['viendrait'], why: 'Future → conditional.' },
      { q: 'Dans mon pays, ___ mange une galette.', a: ['on'], why: '*on* for customs.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
      ['en retard', 'late'],
      ['un remboursement', 'a refund'],
      ['un feu d’artifice', 'fireworks'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Report the words. Begin with Il a dit que…', items: [
      { q: '« Je suis fatigué. »', cue: 'Il a dit qu’il', a: ['Il a dit qu’il était fatigué.'], why: 'present → imparfait.' },
      { q: '« J’ai perdu mes clés. »', cue: 'Il a dit qu’il', a: ['Il a dit qu’il avait perdu ses clés.'], why: 'passé composé → plus-que-parfait.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Pourriez-vous m’apporter une couverture ?', why: '*Pourriez-vous* + infinitive.' },
      { a: 'Elle demande si le train part à midi.', why: '*demander si* + normal word order.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Il a dit qu’il [est] fatigué.', a: ['était'], why: 'Past reporting verb: the imparfait.' },
    ] },
  ],
};
