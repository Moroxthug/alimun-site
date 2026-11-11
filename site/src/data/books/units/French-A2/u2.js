// French A2, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'What did you do?',
  goal: 'Tell a short story about last week and put events in order. Learn more irregular participles, reflexive verbs in the passé composé and the time words il y a, depuis and pendant.',
  art: 'pizza',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['passé composé', 'irregular participles', 'reflexive verbs', 'time expressions', 'narrative'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'J’ai mis, j’ai dit, j’ai appris',
      about: 'Review the passé composé and learn more irregular participles.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'The **passé composé** is built with the present of **avoir** (or **être**) and a past participle: *J’ai travaillé. Elle est partie.* You learned the regular participles (**-é**, **-i**, **-u**) and a few irregular ones at A1. Here are more irregular participles. Learn them with the infinitive, because the spelling does not follow a rule.' },
          { t: 'table', caption: 'Irregular participles', explain: ['head'], quiz: true, head: ['Infinitive', 'Participle', 'Example'], rows: [
            ['mettre', 'mis', 'J’ai mis mon manteau.'],
            ['dire', 'dit', 'Elle a dit bonjour.'],
            ['ouvrir', 'ouvert', 'Nous avons ouvert la fenêtre.'],
            ['apprendre', 'appris', 'Il a appris le français.'],
            ['comprendre', 'compris', 'Tu as compris ?'],
            ['pouvoir', 'pu', 'Je n’ai pas pu venir.'],
            ['vouloir', 'voulu', 'Ils ont voulu partir.'],
            ['savoir', 'su', 'Elle a su la réponse.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Short adverbs like **déjà**, **bien**, **mal** and **beaucoup** go between *avoir* and the participle: *J’ai bien dormi. Il a déjà mangé.* A time word like **hier** goes at the start or the end: *Hier, j’ai travaillé.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Hier, j’**ai mis** un pull parce qu’il faisait froid.', n: '*mettre* → *mis*.' },
            { s: 'Elle m’**a dit** la vérité.', n: '*dire* → *dit*.' },
            { s: 'Nous **avons appris** trois mots nouveaux.', n: '*apprendre* → *appris*.' },
            { s: 'Tu **as bien compris** la leçon ?', n: 'The adverb *bien* goes between *as* and *compris*.' },
            { s: 'Je n’**ai pas pu** venir.', n: 'Negative: *ne … pas* around *ai*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the passé composé.', items: [
            { q: 'Hier, j’___ mon manteau. (mettre)', a: ['ai mis'], why: '*j’ai mis*' },
            { q: 'Elle ___ bonjour à tout le monde. (dire)', a: ['a dit'], why: '*elle a dit*' },
            { q: 'Nous ___ la porte. (ouvrir)', a: ['avons ouvert'], why: '*nous avons ouvert*' },
            { q: 'Tu ___ la question ? (comprendre)', a: ['as compris'], why: '*tu as compris*' },
            { q: 'Ils n’ont pas ___ venir. (pouvoir)', a: ['pu'], why: 'The participle of *pouvoir* is *pu*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the participle.', pairs: [
            ['mettre', 'mis'],
            ['dire', 'dit'],
            ['ouvrir', 'ouvert'],
            ['apprendre', 'appris'],
            ['vouloir', 'voulu'],
            ['savoir', 'su'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Elle a ___ le français à l’école.', o: ['appris', 'apprendu', 'apprend'], why: 'The participle of *apprendre* is *appris*.' },
            { q: 'Nous avons ___ la fenêtre.', o: ['ouvert', 'ouvri', 'ouvré'], why: 'The participle of *ouvrir* is *ouvert*.' },
            { q: 'Tu as bien ___ ?', o: ['dormi', 'dormé', 'dormu'], why: '*dormir* is regular in *-ir*: *dormi*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Hier, j’ai [metté] mon manteau.', a: ['mis'], why: '*mettre* → *mis*.' },
            { s: 'Elle a [disé] bonjour.', a: ['dit'], why: '*dire* → *dit*.' },
            { s: 'Nous avons [compré] la leçon.', a: ['compris'], why: '*comprendre* → *compris*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'J’ai bien dormi hier soir.', why: '*bien* goes between *ai* and the participle.' },
            { a: 'Elle a déjà ouvert la porte.', why: '*déjà* goes between *a* and the participle.' },
            { a: 'Nous n’avons pas compris.', why: '*ne … pas* around *avons*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Je me suis levé tôt',
      about: 'Reflexive verbs in the passé composé.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Reflexive verbs always use **être** in the passé composé, and the participle usually **agrees with the subject**. The reflexive pronoun (**me, te, se, nous, vous, se**) goes before *être*: *Je me suis levé(e). Elle s’est couchée tard. Nous nous sommes promenés.*' },
          { t: 'table', caption: 'se lever in the passé composé', quiz: true, head: ['', 'se lever'], rows: [
            ['je', 'me suis levé / levée'],
            ['tu', 't’es levé / levée'],
            ['il / on', 's’est levé'],
            ['elle', 's’est levée'],
            ['nous', 'nous sommes levés / levées'],
            ['vous', 'vous êtes levé / levée / levés / levées'],
            ['ils', 'se sont levés'],
            ['elles', 'se sont levées'],
          ] },
          { t: 'tip', art: 'owl', md: 'For the negative, put **ne … pas** around *me suis*: **Je ne me suis pas levé.** Before a vowel, **te** and **se** become **t’** and **s’**: *tu t’es levé, elle s’est levée*.' },
        ],
        [
          { t: 'table', caption: 'Useful reflexive verbs', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['se réveiller', 'to wake up'],
            ['se lever', 'to get up'],
            ['se promener', 'to go for a walk'],
            ['se reposer', 'to rest'],
            ['se dépêcher', 'to hurry'],
            ['s’amuser', 'to have fun'],
            ['se coucher', 'to go to bed'],
            ['se disputer', 'to argue'],
          ] },
          { t: 'examples', items: [
            { s: 'Ce matin, **je me suis levé** à six heures.', n: 'A man speaks.' },
            { s: 'Hier, **elle s’est couchée** très tard.', n: 'A woman: *couchée*.' },
            { s: 'Samedi, **nous nous sommes promenés** au parc.', n: 'A group of men or mixed.' },
            { s: 'Ils **se sont bien amusés** à la fête.', n: 'The adverb *bien* between *sont* and the participle.' },
            { s: 'Je **ne me suis pas reposé** ce week-end.', n: 'Negative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the passé composé of the reflexive verb.', items: [
            { q: 'Ce matin, je ___ à sept heures. (se lever, a man)', a: ['me suis levé'], why: '*je me suis levé*' },
            { q: 'Elle ___ très tôt. (se réveiller)', a: ['s’est réveillée', 's’est reveillée', 'sest réveillée'], why: 'A woman: *s’est réveillée*.' },
            { q: 'Nous nous ___ au parc. (se promener, men)', a: ['sommes promenés'], why: '*nous nous sommes promenés*' },
            { q: 'Ils se sont bien ___ à la fête. (s’amuser)', a: ['amusés'], why: '*ils se sont amusés*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Marie s’est ___ à minuit.', o: ['couchée', 'couché', 'couchés'], why: 'Marie is a woman: *couchée*.' },
            { q: 'Mes amis se sont ___ au parc.', o: ['promenés', 'promené', 'promenées'], why: 'Several men: *promenés*.' },
            { q: 'Elles se sont ___ tard.', o: ['levées', 'levés', 'levé'], why: 'Several women: *levées*.' },
            { q: 'Je me suis ___ ce matin. (a woman)', o: ['réveillée', 'réveillé', 'réveillées'], why: 'A woman: *réveillée*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je me suis levé à sept heures.', why: '*me suis levé* with the time at the end.' },
            { a: 'Elle ne s’est pas reposée.', why: '*ne … pas* around *s’est*.' },
            { a: 'Nous nous sommes bien amusés.', why: '*bien* between *sommes* and the participle.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'D’abord, ensuite, enfin',
      about: 'Put events in order, and use il y a, depuis and pendant.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To tell a story in order, use words of sequence: **d’abord** (first), **ensuite** or **puis** (then), **après** (after), **enfin** (finally). Each one goes at the start of a sentence, followed by a comma: *D’abord, je me suis levé. Ensuite, j’ai pris un café. Enfin, je suis parti.*' },
          { t: 'dialogue', title: 'A busy morning', lines: [
            { who: 'Sophie', s: 'Qu’est-ce que tu as fait ce matin, Lucas ?' },
            { who: 'Lucas', s: 'D’abord, je me suis levé à six heures. Ensuite, j’ai pris une douche.' },
            { who: 'Sophie', s: 'Et puis ?' },
            { who: 'Lucas', s: 'Puis j’ai pris le bus. Enfin, je suis arrivé au bureau à huit heures.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In speech, people often use **et puis** and **alors**, and in writing **tout d’abord** and **pour finir**. Do not put **après** alone before a verb: say **après avoir mangé** (after eating) or **après, j’ai mangé**.' },
        ],
        [
          { t: 'text', md: 'Three small words say *when* and *how long*. **il y a** + a time means *ago*: *Je suis arrivé il y a deux jours.* **depuis** + a time means *for* or *since*, with a **present** verb: *J’habite ici depuis trois ans* (I have lived here for three years). **pendant** + a time means *for*, with a **past** verb: *J’ai travaillé pendant deux heures.*' },
          { t: 'table', caption: 'il y a, depuis, pendant', explain: ['head', 'col2'], head: ['Word', 'Example', 'Meaning'], rows: [
            ['il y a', 'Il est parti il y a une heure.', 'ago'],
            ['depuis', 'J’apprends le français depuis un an.', 'for, since (still true now)'],
            ['pendant', 'J’ai dormi pendant huit heures.', 'for (finished)'],
            ['hier / ce matin', 'Ce matin, j’ai travaillé.', 'yesterday / this morning'],
            ['la semaine dernière', 'La semaine dernière, nous sommes partis.', 'last week'],
          ] },
          { t: 'examples', items: [
            { s: 'Elle est partie **il y a** cinq minutes.', n: 'Five minutes ago.' },
            { s: 'Je travaille ici **depuis** deux ans.', n: 'I still work here.' },
            { s: 'Nous avons attendu **pendant** une heure.', n: 'We waited; it is finished.' },
            { s: '**La semaine dernière**, il a plu tous les jours.', n: 'A time word at the start.' },
            { s: '**D’abord**, nous avons mangé. **Ensuite**, nous sommes sortis.', n: 'Two events in order.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose il y a, depuis or pendant.', items: [
            { q: 'J’habite à Paris ___ trois ans.', o: ['depuis', 'il y a', 'pendant'], why: 'You still live there: *depuis* + present.' },
            { q: 'Elle est arrivée ___ deux heures.', o: ['il y a', 'depuis', 'pendant'], why: 'Two hours ago: *il y a*.' },
            { q: 'Nous avons marché ___ une heure.', o: ['pendant', 'depuis', 'il y a'], why: 'A finished action with a duration: *pendant*.' },
            { q: 'Il apprend l’espagnol ___ six mois.', o: ['depuis', 'il y a', 'pendant'], why: 'He still learns it: *depuis*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'D’abord, je me suis levé.', why: 'The first thing in the morning.' },
            { a: 'Ensuite, j’ai pris le petit-déjeuner.', why: 'Then breakfast.' },
            { a: 'Enfin, je suis parti au travail.', why: 'Finally, leaving home.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Fill the gaps with the words in the bank.', extra: ['avant', 'depuis'], items: [
            { q: '___, j’ai ouvert la fenêtre. Ensuite, j’ai fait le lit.', a: 'D’abord', why: '*d’abord* starts the story.' },
            { q: 'J’ai mangé, ___ je suis sorti.', a: 'puis', why: '*puis* means then.' },
            { q: '___, nous sommes rentrés très fatigués.', a: 'Enfin', why: '*enfin* ends the story.' },
            { q: 'J’ai dormi ___ huit heures.', a: 'pendant', why: 'A finished action with a duration: *pendant*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Une semaine chargée',
      about: 'Read an e-mail about a busy week.',
      art: 'pizza',
      spreads: [
        [
          { t: 'reading', title: 'Une semaine chargée', md: 'Salut Sophie,\n\nQuelle semaine ! Lundi, je me suis levée à six heures parce que j’avais un rendez-vous au travail. D’abord, j’ai pris le train, puis j’ai travaillé pendant six heures sans pause. Le soir, je me suis couchée très tôt.\n\nMardi, j’ai fait les courses et j’ai préparé un grand dîner pour mes parents. Mercredi, je n’ai pas pu venir au cours de français, parce que j’étais fatiguée. Jeudi, je me suis reposée et j’ai lu un livre.\n\nVendredi, je suis allée chez Clara. Nous nous sommes bien amusées ! Nous avons regardé un film, et nous avons mangé une pizza. Enfin, samedi, je me suis promenée au parc avec Karim. Il m’a dit qu’il habite ici depuis deux ans.\n\nEt toi, qu’est-ce que tu as fait ?\n\nÀ bientôt,\nNadia' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Nadia s’est levée à six heures lundi.', a: 't', why: '*Lundi, je me suis levée à six heures.*' },
            { q: 'Elle a travaillé pendant six heures lundi.', a: 't', why: '*j’ai travaillé pendant six heures sans pause*' },
            { q: 'Mercredi, elle est allée au cours de français.', a: 'f', why: '*Je n’ai pas pu venir au cours de français.*' },
            { q: 'Vendredi, Nadia et Clara ont regardé un film.', a: 't', why: '*Nous avons regardé un film.*' },
            { q: 'Karim habite à Paris.', a: 'ng', why: 'The e-mail says he has lived here for two years, but not where.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Pourquoi Nadia n’a-t-elle pas pu venir au cours ?', o: ['Elle était fatiguée.', 'Elle travaillait.', 'Elle était malade.'], why: '*parce que j’étais fatiguée*' },
            { q: 'Qu’a-t-elle fait jeudi ?', o: ['Elle s’est reposée et a lu.', 'Elle est allée chez Clara.', 'Elle a fait les courses.'], why: '*Jeudi, je me suis reposée et j’ai lu un livre.*' },
            { q: 'Que veut dire « depuis deux ans » ?', o: ['Karim habite ici encore maintenant.', 'Karim est parti il y a deux ans.', 'Karim a habité ici pendant deux ans, puis il est parti.'], why: '*depuis* + present: it is still true.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that put the events in order.', items: [
            { s: '[D’abord], j’ai pris le train, [puis] j’ai travaillé.', why: '*d’abord* and *puis* put the events in order.' },
            { s: '[Enfin], samedi, je me suis promenée.', why: '*enfin* ends the story.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Elle a ___ le français à l’école.', o: ['appris', 'apprendu', 'apprend'], why: '*apprendre* → *appris*.' },
      { q: 'Marie s’est ___ tard.', o: ['couchée', 'couché', 'couchés'], why: 'Marie is a woman: *couchée*.' },
      { q: 'J’habite ici ___ trois ans.', o: ['depuis', 'il y a', 'pendant'], why: 'You still live here: *depuis*.' },
      { q: 'Nous avons marché ___ une heure.', o: ['pendant', 'depuis', 'il y a'], why: 'A finished action: *pendant*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Hier, j’ai ___ mon manteau. (mettre)', a: ['mis'], why: '*mettre* → *mis*.' },
      { q: 'Je me ___ levé à sept heures. (être)', a: ['suis'], why: '*je me suis levé*' },
      { q: 'Il est parti ___ une heure.', a: ['il y a', 'il ya'], why: 'One hour ago: *il y a*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the participle.', pairs: [
      ['dire', 'dit'],
      ['ouvrir', 'ouvert'],
      ['pouvoir', 'pu'],
      ['comprendre', 'compris'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Elle ne s’est pas reposée.', why: '*ne … pas* around *s’est*.' },
      { a: 'D’abord, nous avons mangé, puis nous sommes sortis.', why: '*d’abord* … *puis* …' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Hier, je [suis] mangé au restaurant.', a: ['ai'], why: '*manger* uses *avoir*.' },
      { s: 'Elle s’est [levé] à six heures.', a: ['levée'], why: 'A woman: *levée*.' },
    ] },
  ],
};
