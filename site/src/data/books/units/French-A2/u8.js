// French A2, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Celebrations and the future',
  goal: 'Talk about celebrations, invite people and say what you will do. Learn dates, the simple future and si + present + future.',
  art: 'ghost',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['celebrations', 'dates', 'months', 'invitations', 'futur simple', 'si clauses', 'plans', 'promises'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Joyeux anniversaire !',
      about: 'Talk about celebrations, give dates and invite people.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'To say the date, use **le** + number + month: *le douze mars, le quatorze juillet*. For the first day, French uses the ordinal: **le premier mai**. The months and the days start with a small letter. To ask the date, say **Quelle est la date aujourd’hui ?** or **On est le combien ?** The answer is **On est le douze mars.**' },
          { t: 'table', caption: 'The months', explain: ['head'], head: ['Month', 'Month'], rows: [
            ['janvier', 'juillet'],
            ['février', 'août'],
            ['mars', 'septembre'],
            ['avril', 'octobre'],
            ['mai', 'novembre'],
            ['juin', 'décembre'],
          ] },
          { t: 'tip', art: 'owl', md: 'To say *in March*, use **en mars** or **au mois de mars**: *Mon anniversaire est en mars.* To say *on March 12th*, use **le 12 mars**. Remember: **le premier mai**, but **le deux mai, le trois mai**.' },
        ],
        [
          { t: 'table', caption: 'Celebrations and wishes', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['Joyeux anniversaire !', 'Happy birthday!'],
            ['Joyeux Noël !', 'Merry Christmas!'],
            ['Bonne année !', 'Happy New Year!'],
            ['Félicitations !', 'Congratulations!'],
            ['un cadeau', 'a present'],
            ['un gâteau', 'a cake'],
            ['les invités', 'the guests'],
            ['une fête', 'a party'],
          ] },
          { t: 'dialogue', title: 'Une invitation', lines: [
            { who: 'Sophie', s: 'Lucas, c’est mon anniversaire le douze mars. Tu veux venir à ma fête ?' },
            { who: 'Lucas', s: 'Avec plaisir ! C’est à quelle heure ?' },
            { who: 'Sophie', s: 'À huit heures chez moi. Tu peux apporter une boisson ?' },
            { who: 'Lucas', s: 'Bien sûr. Joyeux anniversaire d’avance !' },
          ] },
        ],
        [
          { t: 'text', md: 'To invite, say **Je t’invite à …** (to a friend) or **Je vous invite à …** (politely). To accept: **Avec plaisir ! C’est gentil.** To decline: **Merci, c’est gentil, mais je ne peux pas.** and give a reason. When you give a present, say **C’est pour toi / pour vous.** When you receive it, say **Merci beaucoup, c’est très gentil !**' },
          { t: 'ex', kind: 'match', h: 'What do you say?', pairs: [
            ['C’est ton anniversaire.', 'Joyeux anniversaire !'],
            ['Le 31 décembre à minuit.', 'Bonne année !'],
            ['Tu as réussi ton examen.', 'Félicitations !'],
            ['Tu veux venir à ma fête ?', 'Avec plaisir !'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Mon anniversaire est le douze mars.', why: '*le* + number + month.' },
            { a: 'Je t’invite à ma fête.', why: '*inviter à* + event.' },
            { a: 'Merci, c’est très gentil !', why: 'To thank.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Mon anniversaire est ___ mars.', a: ['en'], why: '*en mars*' },
            { q: 'La fête est le ___ mai. (1st)', a: ['premier'], why: '*le premier mai*' },
            { q: 'Je t’___ à ma fête. (inviter)', a: ['invite'], why: '*je t’invite*' },
            { q: 'C’est ___ toi, un petit cadeau.', a: ['pour'], why: '*C’est pour toi.*' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs.', pairs: [
            ['janvier', 'January'],
            ['mars', 'March'],
            ['juin', 'June'],
            ['août', 'August'],
            ['octobre', 'October'],
            ['décembre', 'December'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Je serai là, nous irons',
      about: 'Form the simple future.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'The **simple future** says what will happen. For most verbs, take the **infinitive** and add the endings **-ai, -as, -a, -ons, -ez, -ont**. *parler* gives *je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront*. For verbs in **-re**, drop the final **e**: *prendre* gives *je prendrai*. The endings look like the present of *avoir* (*ai, as, a, ont*).' },
          { t: 'table', caption: 'parler and prendre in the future', quiz: true, head: ['', 'parler', 'prendre'], rows: [
            ['je', 'parlerai', 'prendrai'],
            ['tu', 'parleras', 'prendras'],
            ['il / elle / on', 'parlera', 'prendra'],
            ['nous', 'parlerons', 'prendrons'],
            ['vous', 'parlerez', 'prendrez'],
            ['ils / elles', 'parleront', 'prendront'],
          ] },
          { t: 'tip', art: 'owl', md: 'The endings are always the same, even for irregular verbs. Only the stem changes, and it always ends in **-r-**. So the future always has an **r** before the ending: *j’irai, je ferai, je serai, je verrai*.' },
        ],
        [
          { t: 'table', caption: 'Irregular stems', explain: ['head', 'col3'], head: ['Infinitive', 'je', 'nous', 'Meaning'], rows: [
            ['être', 'serai', 'serons', 'to be'],
            ['avoir', 'aurai', 'aurons', 'to have'],
            ['aller', 'irai', 'irons', 'to go'],
            ['faire', 'ferai', 'ferons', 'to do'],
            ['venir', 'viendrai', 'viendrons', 'to come'],
            ['pouvoir', 'pourrai', 'pourrons', 'can'],
            ['vouloir', 'voudrai', 'voudrons', 'to want'],
            ['voir', 'verrai', 'verrons', 'to see'],
          ] },
          { t: 'examples', items: [
            { s: 'Demain, **je serai** à la maison.', n: '*être* → *serai*.' },
            { s: 'L’été prochain, **nous irons** en Italie.', n: '*aller* → *irons*.' },
            { s: 'Elle **viendra** à ma fête samedi.', n: '*venir* → *viendra*.' },
            { s: 'Je **ferai** un gâteau pour l’anniversaire.', n: '*faire* → *ferai*.' },
            { s: 'Ils **auront** une surprise.', n: '*avoir* → *auront*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the future of aller.', verb: 'aller', tense: 'futur simple', rows: [
            ['je', 'irai'],
            ['tu', 'iras'],
            ['il / elle', 'ira'],
            ['nous', 'irons'],
            ['vous', 'irez'],
            ['ils / elles', 'iront'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the simple future.', items: [
            { q: 'Demain, je ___ à la maison. (être)', a: ['serai'], why: '*je serai*' },
            { q: 'Nous ___ en Italie l’été prochain. (aller)', a: ['irons'], why: '*nous irons*' },
            { q: 'Elle ___ à ma fête. (venir)', a: ['viendra'], why: '*elle viendra*' },
            { q: 'Je ___ un gâteau. (faire)', a: ['ferai'], why: '*je ferai*' },
            { q: 'Tu ___ le film samedi. (voir)', a: ['verras'], why: '*tu verras*' },
            { q: 'Ils ___ une surprise. (avoir)', a: ['auront'], why: '*ils auront*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Demain, nous [allerons] au cinéma.', a: ['irons'], why: '*aller* → *irons*.' },
            { s: 'Elle [prenera] le train.', a: ['prendra'], why: 'Drop the *e* of *prendre*: *prendra*.' },
            { s: 'Je [serrai] là à huit heures.', a: ['serai'], why: '*je serai*, with one *r*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'L’année prochaine, nous ___ en Espagne.', o: ['irons', 'allons', 'allions'], why: 'Next year: the future *irons*.' },
            { q: 'Je ne ___ pas là samedi.', o: ['serai', 'suis', 'étais'], why: 'Future: *je serai*.' },
            { q: 'Tu ___ demain ? (come)', o: ['viendras', 'viens', 'venais'], why: '*tu viendras*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Si tu viens, je préparerai un gâteau',
      about: 'Talk about plans and promises with si + present + future.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To say what will happen if something happens, use **si** + present, and the **future** in the other part: *Si tu viens, je préparerai un gâteau. S’il pleut, nous resterons à la maison.* Before *il* or *ils*, **si** becomes **s’**: *s’il, s’ils* (but *si elle*). The **si** part can come first or second: *Je préparerai un gâteau si tu viens.*' },
          { t: 'table', caption: 'si + present + future', explain: ['head', 'col2'], head: ['If … (present)', 'Then … (future)', 'Meaning'], rows: [
            ['Si tu viens', 'je préparerai un gâteau.', 'If you come, I will make a cake.'],
            ['S’il pleut', 'nous resterons ici.', 'If it rains, we will stay here.'],
            ['Si j’ai le temps', 'j’irai au cinéma.', 'If I have time, I will go to the cinema.'],
            ['Si vous voulez', 'je vous aiderai.', 'If you want, I will help you.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Never use the future after **si**: say **Si tu viens**, not *Si tu viendras*. The future goes only in the other part of the sentence. For a plan with no condition, French often prefers the near future: *Je vais préparer un gâteau.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Si** j’ai le temps, **j’irai** à la fête.', n: 'A possible plan.' },
            { s: '**S’**il fait beau, **nous ferons** un pique-nique.', n: '*s’il* before *il*.' },
            { s: '**Si** tu veux, je **t’aiderai**.', n: 'An offer.' },
            { s: 'Je **viendrai** à ta fête **si** je peux.', n: 'The *si* part second.' },
            { s: 'Nous **partirons** en vacances **quand** nous aurons du temps.', n: '*quand* + future for a future time.' },
          ] },
          { t: 'dialogue', title: 'Les projets', lines: [
            { who: 'Sophie', s: 'Qu’est-ce que tu feras samedi ?' },
            { who: 'Lucas', s: 'S’il fait beau, j’irai à la plage. Et toi ?' },
            { who: 'Sophie', s: 'Si j’ai le temps, je ferai un gâteau pour ma fête.' },
            { who: 'Lucas', s: 'Super ! Je viendrai si je peux.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Si tu ___, je préparerai un gâteau.', o: ['viens', 'viendras', 'venais'], why: 'After *si*, use the present.' },
            { q: 'S’il pleut, nous ___ à la maison.', o: ['resterons', 'restons', 'restions'], why: 'The result is in the future.' },
            { q: 'Si j’___ le temps, j’irai au cinéma.', o: ['ai', 'aurai', 'avais'], why: 'After *si*, the present: *j’ai*.' },
            { q: 'Si vous voulez, je vous ___.', o: ['aiderai', 'aide', 'aidais'], why: 'The offer is in the future.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with si.', items: [
            { q: 'Il pleut. Nous resterons à la maison.', cue: 'S’il', a: ['S’il pleut, nous resterons à la maison.'], why: '*si il* becomes *s’il*.' },
            { q: 'Tu viens. Je préparerai un gâteau.', cue: 'Si', a: ['Si tu viens, je préparerai un gâteau.'], why: '*si* + present, future in the other part.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Si j’ai le temps, je viendrai.', why: '*si* + present, then the future.' },
            { a: 'Nous ferons un pique-nique s’il fait beau.', why: 'The *si* part can come second.' },
            { a: 'Tu verras, tout ira bien.', why: 'Two futures.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'On dit « Si tu viendras, je serai content ».', a: 'f', why: 'No future after *si*: *Si tu viens*.' },
            { q: 'On dit « S’il pleut ».', a: 't', why: '*si il* becomes *s’il*.' },
            { q: 'On dit « Si elle vient, je serai content ».', a: 't', why: '*si elle* does not change.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Une invitation et une réponse',
      about: 'Read an invitation card and an e-mail reply.',
      art: 'ghost',
      spreads: [
        [
          { t: 'reading', title: 'Une invitation', md: '**Vous êtes invités !**\nPour fêter mon anniversaire, je vous invite à une fête le samedi 12 mars, à 20 h, chez moi. Il y aura de la musique, un grand gâteau et beaucoup de surprises. Apportez une boisson, si vous pouvez.\n\nRépondez avant le 5 mars à sophie@example.com.\n\nSophie' },
          { t: 'reading', title: 'Une réponse', md: 'Salut Sophie,\n\nMerci pour ton invitation, c’est très gentil ! Je viendrai avec plaisir. Je serai chez toi à 20 h et j’apporterai du jus d’orange. Si mon frère est libre, il viendra aussi. Je te dirai ça demain.\n\nJoyeux anniversaire d’avance !\nLucas' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La fête est le samedi 12 mars.', a: 't', why: '*le samedi 12 mars, à 20 h*' },
            { q: 'La fête est dans un restaurant.', a: 'f', why: 'It is at Sophie’s home: *chez moi*.' },
            { q: 'Lucas apportera du jus d’orange.', a: 't', why: '*j’apporterai du jus d’orange*' },
            { q: 'Il faut répondre avant le 5 mars.', a: 't', why: '*Répondez avant le 5 mars.*' },
            { q: 'Lucas offrira un cadeau.', a: 'ng', why: 'The reply does not mention a present.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Qu’est-ce qu’il y aura à la fête ?', o: ['De la musique et un gâteau.', 'Un film et du sport.', 'Un voyage.'], why: '*Il y aura de la musique, un grand gâteau et beaucoup de surprises.*' },
            { q: 'Qui viendra peut-être avec Lucas ?', o: ['Son frère.', 'Sa sœur.', 'Sa mère.'], why: '*Si mon frère est libre, il viendra aussi.*' },
            { q: 'Quand Lucas dira-t-il si son frère vient ?', o: ['Demain.', 'Ce soir.', 'Samedi.'], why: '*Je te dirai ça demain.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the simple future.', items: [
            { s: 'Je [viendrai] avec plaisir et je [serai] chez toi à 20 h.', why: '*viendrai* and *serai* are future forms.' },
            { s: 'J’[apporterai] du jus et mon frère [viendra] aussi.', why: '*apporterai* and *viendra* are future forms.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Demain, je ___ à la maison.', o: ['serai', 'suis', 'étais'], why: 'Future of *être*: *je serai*.' },
      { q: 'Si tu ___, je préparerai un gâteau.', o: ['viens', 'viendras', 'venais'], why: 'After *si*, the present.' },
      { q: 'Mon anniversaire est ___ mars.', o: ['en', 'à', 'dans'], why: '*en mars*' },
      { q: 'C’est le ___ mai. (1st)', o: ['premier', 'un', 'une'], why: '*le premier mai*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Nous ___ en Italie l’été prochain. (aller)', a: ['irons'], why: '*nous irons*' },
      { q: 'Elle ___ à ma fête. (venir)', a: ['viendra'], why: '*elle viendra*' },
      { q: '___ il pleut, nous resterons ici.', a: ['S’', 'S'], why: '*si il* becomes *s’il*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'What do you say?', pairs: [
      ['C’est ton anniversaire.', 'Joyeux anniversaire !'],
      ['Le 31 décembre à minuit.', 'Bonne année !'],
      ['Tu as réussi ton examen.', 'Félicitations !'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Join the two sentences with si.', items: [
      { q: 'Il fait beau. Nous ferons un pique-nique.', cue: 'S’il', a: ['S’il fait beau, nous ferons un pique-nique.'], why: '*s’il* + present, future after.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Si j’ai le temps, je viendrai.', why: '*si* + present, future.' },
      { a: 'Je t’invite à ma fête.', why: '*inviter à* + event.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Demain, nous [allerons] au cinéma.', a: ['irons'], why: '*aller* → *irons*.' },
      { s: 'Si tu [viendras], je serai content.', a: ['viens'], why: 'No future after *si*.' },
    ] },
  ],
};
