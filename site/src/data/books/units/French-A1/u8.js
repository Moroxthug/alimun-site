// French A1, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'At the weekend',
  goal: 'Say what you did at the weekend and what you liked.',
  art: 'cactus',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['past', 'passé composé', 'avoir', 'être', 'agreement', 'negation', 'weekend'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'J’ai regardé un film',
      about: 'The passé composé with avoir: regular and common irregular participles.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To say what you did in the past, French uses the **passé composé**. It has two parts: the present of **avoir** and a **past participle**. *J’ai regardé un film* means *I watched a film* or *I have watched a film*. Both English tenses are translated by the same form.' },
          { t: 'table', caption: 'Regular past participles', explain: ['head'], head: ['Verbs in', 'Participle', 'Example'], rows: [
            ['-er (regarder)', '-é: regardé', 'J’ai regardé un film.'],
            ['-ir (finir)', '-i: fini', 'Elle a fini à six heures.'],
            ['-re (vendre)', '-u: vendu', 'Nous avons vendu la voiture.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The pronunciation of the participle is the same for *regardé*, *regardée* and *regardés*: all end in the sound **é**. With *avoir*, the participle does not change when the subject is a woman or a group: *Elle a mangé*, *Elles ont mangé*.' },
        ],
        [
          { t: 'text', md: 'Many common verbs have an **irregular participle**. You must learn each one. Here are the ones you need the most at A1.' },
          { t: 'table', caption: 'Common irregular participles', explain: ['head'], quiz: true, head: ['Infinitive', 'Participle', 'Example'], rows: [
            ['faire', 'fait', 'J’ai fait du vélo.'],
            ['prendre', 'pris', 'Nous avons pris le train.'],
            ['voir', 'vu', 'Elle a vu un ami.'],
            ['avoir', 'eu', 'J’ai eu un cours.'],
            ['être', 'été', 'Il a été malade.'],
            ['boire', 'bu', 'Tu as bu un café.'],
            ['lire', 'lu', 'Ils ont lu un livre.'],
            ['écrire', 'écrit', 'J’ai écrit un e-mail.'],
          ] },
          { t: 'examples', items: [
            { s: 'Samedi, j’**ai travaillé**.', n: 'On Saturday, I worked.' },
            { s: 'Nous **avons mangé** au restaurant.', n: '*manger* → *mangé*.' },
            { s: 'Elle **a fait** les courses.', n: '*faire* → *fait*.' },
            { s: 'Vous **avez pris** le bus ?', n: '*prendre* → *pris*.' },
            { s: 'Ils **ont regardé** un film.', n: '*regarder* → *regardé*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the passé composé.', items: [
            { q: 'Hier, j’___ un film. (regarder)', a: ['ai regardé'], why: '*j’ai regardé*' },
            { q: 'Nous ___ au restaurant. (manger)', a: ['avons mangé'], why: '*nous avons mangé*' },
            { q: 'Elle ___ à six heures. (finir)', a: ['a fini'], why: '*elle a fini*' },
            { q: 'Tu ___ du vélo ? (faire)', a: ['as fait'], why: '*tu as fait*' },
            { q: 'Ils ___ le train. (prendre)', a: ['ont pris'], why: '*ils ont pris*' },
            { q: 'Vous ___ un café. (boire)', a: ['avez bu'], why: '*vous avez bu*' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the participle.', pairs: [
            ['faire', 'fait'],
            ['prendre', 'pris'],
            ['voir', 'vu'],
            ['boire', 'bu'],
            ['lire', 'lu'],
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'J’ai regardé un film hier.', why: 'Subject, *ai*, participle, then the time.' },
            { a: 'Nous avons pris le train.', why: '*avons* + *pris*.' },
            { a: 'Elle a fait les courses samedi.', why: '*a fait* + object + time.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Hier, j’___ mangé au restaurant.', o: ['ai', 'suis', 'a'], why: '*manger* uses *avoir*: *j’ai mangé*.' },
            { q: 'Samedi, nous ___ un film.', o: ['avons vu', 'avons voir', 'sommes vu'], why: '*avoir* + *vu*.' },
            { q: 'Elle a ___ un e-mail.', o: ['écrit', 'écrire', 'écrivé'], why: 'The participle of *écrire* is *écrit*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Je suis allée à Lyon',
      about: 'The passé composé with être for movement, and time words.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'A small group of verbs of movement use **être**, not *avoir*, in the passé composé: **aller, venir, partir, arriver, rester, sortir, rentrer**. With *être*, the participle **agrees with the subject**: add **-e** for a woman, **-s** for several people, **-es** for several women. *Il est allé, elle est allée, ils sont allés, elles sont allées.*' },
          { t: 'table', caption: 'aller in the passé composé', quiz: true, head: ['', 'aller'], rows: [
            ['je', 'suis allé / allée'],
            ['tu', 'es allé / allée'],
            ['il / on', 'est allé'],
            ['elle', 'est allée'],
            ['nous', 'sommes allés / allées'],
            ['vous', 'êtes allé / allée / allés / allées'],
            ['ils', 'sont allés'],
            ['elles', 'sont allées'],
          ] },
          { t: 'tip', art: 'owl', md: 'Here is a way to remember them: the verbs are movements or states of a person who goes in or out, up or down, or stays: *aller, venir, arriver, partir, sortir, rester, rentrer*. For all other verbs, use *avoir*. Many are pairs of opposites: *aller / venir, arriver / partir, sortir / rentrer*.' },
        ],
        [
          { t: 'table', caption: 'Verbs with être', explain: ['head', 'col2'], head: ['Infinitive', 'Participle', 'Meaning'], rows: [
            ['aller', 'allé', 'to go'],
            ['venir', 'venu', 'to come'],
            ['partir', 'parti', 'to leave'],
            ['arriver', 'arrivé', 'to arrive'],
            ['rester', 'resté', 'to stay'],
            ['sortir', 'sorti', 'to go out'],
            ['rentrer', 'rentré', 'to go home'],
          ] },
          { t: 'text', md: 'Time words help you place a past event: **hier** (yesterday), **hier soir** (last night), **samedi dernier** (last Saturday), **la semaine dernière** (last week), **il y a deux jours** (two days ago), **ce matin** (this morning). They usually come at the start or the end of the sentence.' },
          { t: 'examples', items: [
            { s: 'Samedi, **je suis allé** au marché.', n: 'A man says *allé*.' },
            { s: 'Samedi, **je suis allée** au marché.', n: 'A woman says *allée*. It sounds the same.' },
            { s: 'Nous **sommes arrivés** à midi.', n: 'A group: *arrivés*.' },
            { s: 'Elles **sont parties** hier soir.', n: 'Women: *parties*.' },
            { s: '**La semaine dernière**, il **est resté** chez lui.', n: 'A time word at the start.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Marie est ___ à Lyon.', o: ['allée', 'allé', 'allés'], why: 'Marie is a woman: *allée*.' },
            { q: 'Mes frères sont ___ hier.', o: ['partis', 'parti', 'partie'], why: 'Several men: *partis*.' },
            { q: 'Nous sommes ___ à huit heures. (two women)', o: ['arrivées', 'arrivés', 'arrivé'], why: 'Two women: *arrivées*.' },
            { q: 'Paul est ___ à la maison.', o: ['resté', 'restée', 'restés'], why: 'Paul is a man: *resté*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'avoir or être?', groups: ['avoir', 'être'], items: [
            { s: 'manger', g: 0, why: '*j’ai mangé*' },
            { s: 'aller', g: 1, why: '*je suis allé*' },
            { s: 'regarder', g: 0, why: '*j’ai regardé*' },
            { s: 'arriver', g: 1, why: '*je suis arrivé*' },
            { s: 'faire', g: 0, why: '*j’ai fait*' },
            { s: 'rester', g: 1, why: '*je suis resté*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the passé composé of aller (a woman speaks).', verb: 'aller', tense: 'passé composé', rows: [
            ['je', 'suis allée'],
            ['tu', 'es allée'],
            ['elle', 'est allée'],
            ['nous', 'sommes allées'],
            ['elles', 'sont allées'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Hier, je [ai] allé au cinéma.', a: ['suis'], why: '*aller* uses *être*: *je suis allé*.' },
            { s: 'Elle est [arrivé] à midi.', a: ['arrivée'], why: 'A woman: *arrivée*.' },
            { s: 'Ils sont [resté] à la maison.', a: ['restés'], why: 'Several people: *restés*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'C’était comment ?',
      about: 'Negation in the past, asking about the weekend and c’était.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To make a past sentence negative, put **ne … pas** around the auxiliary: *Je n’ai pas mangé. Elle n’est pas allée au cinéma.* To ask about the weekend, say **Qu’est-ce que tu as fait ce week-end ?** and answer with the passé composé. To ask how it was, say **C’était comment ?** and answer **C’était super / bien / génial / long / fatigant**.' },
          { t: 'dialogue', title: 'Le week-end', lines: [
            { who: 'Sophie', s: 'Salut Lucas ! Qu’est-ce que tu as fait ce week-end ?' },
            { who: 'Lucas', s: 'Samedi, je suis allé à la mer avec ma sœur. Nous avons fait une promenade.' },
            { who: 'Sophie', s: 'C’était comment ?' },
            { who: 'Lucas', s: 'C’était super ! Mais dimanche, je suis resté à la maison. Je n’ai pas travaillé.' },
          ] },
          { t: 'tip', art: 'owl', md: '**C’était** is the past of **c’est**: *C’est bien* (it is good) becomes *C’était bien* (it was good). It is a form of the **imparfait**, which you will meet in a later book. At this level, use it as a fixed phrase to say what something was like. Ask **C’était comment ?** and answer with one adjective.' },
        ],
        [
          { t: 'table', caption: 'The weekend', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['faire une promenade', 'to go for a walk'],
            ['aller à la mer', 'to go to the sea'],
            ['voir des amis', 'to see friends'],
            ['faire du sport', 'to do sport'],
            ['rester à la maison', 'to stay at home'],
            ['dormir', 'to sleep'],
            ['C’était super / bien / long', 'It was great / good / long'],
          ] },
          { t: 'examples', items: [
            { s: 'Je **n’ai pas** travaillé dimanche.', n: '*ne … pas* around *ai*.' },
            { s: 'Elle **n’est pas** venue samedi.', n: 'With *être*, *ne … pas* goes around *est*.' },
            { s: 'Qu’est-ce que vous **avez fait** ?', n: 'What did you do?' },
            { s: 'Nous **n’avons rien** fait.', n: '*ne … rien* means nothing.' },
            { s: '**C’était** comment, le film ? – **C’était** long, mais bien.', n: '*C’était* + adjective.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je n’ai pas travaillé dimanche.', why: '*ne … pas* around *ai*.' },
            { a: 'Elle n’est pas allée au cinéma.', why: 'With *être*: *n’est pas allée*.' },
            { a: 'Qu’est-ce que tu as fait ?', why: 'Question word, then *tu as fait*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make the sentence negative.', items: [
            { q: 'J’ai mangé au restaurant.', cue: 'Je n’ai pas', a: ['Je n’ai pas mangé au restaurant.'], why: 'Put *ne … pas* around *ai*: *je n’ai pas mangé*.' },
            { q: 'Elle est partie hier soir.', cue: 'Elle n’est pas', a: ['Elle n’est pas partie hier soir.'], why: 'Put *ne … pas* around *est*.' },
            { q: 'Nous avons vu un film.', cue: 'Nous n’avons pas', a: ['Nous n’avons pas vu de film.', 'Nous n’avons pas vu un film.'], why: '*Nous n’avons pas vu* + *de film* (the usual form) or *un film*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: '— Qu’est-ce que tu as fait samedi ? — ___', o: ['J’ai fait du vélo.', 'Je fais du vélo demain.', 'Je suis du vélo.'], why: 'Use the passé composé for what you did.' },
            { q: '— C’était comment ? — ___', o: ['C’était super !', 'C’est vers midi.', 'C’était à huit heures.'], why: 'Answer with an adjective: *C’était super.*' },
            { q: '— Tu es allé au cinéma ? — Non, ___ au cinéma.', o: ['je ne suis pas allé', 'je n’ai pas allé', 'je ne suis allé pas'], why: '*aller* uses *être*, and *ne … pas* goes around it.' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Fill the gaps with the words in the bank.', extra: ['hier', 'demain'], items: [
            { q: 'Nous sommes ___ à midi.', a: 'arrivés', why: '*arriver* uses *être* and agrees with *nous*: *arrivés*.' },
            { q: 'Elle ne travaille pas ___ matin.', a: 'ce', why: '*ce matin* means this morning.' },
            { q: 'Il a ___ un livre.', a: 'lu', why: 'The participle of *lire* is *lu*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un week-end à la mer',
      about: 'Read a short blog post about a weekend trip.',
      art: 'cactus',
      spreads: [
        [
          { t: 'reading', title: 'Notre week-end', md: '**Un week-end à la mer**\n\nSamedi matin, nous sommes partis à huit heures. Nous avons pris le train jusqu’à la côte. Nous sommes arrivés à dix heures et nous avons posé les valises à l’hôtel.\n\nL’après-midi, nous avons fait une longue promenade sur la plage. Il faisait beau et nous avons mangé des glaces. Le soir, nous avons dîné dans un petit restaurant. J’ai pris du poisson, et ma sœur a pris des pâtes.\n\nDimanche, il a plu. Nous sommes restés à l’hôtel le matin, et nous avons lu. L’après-midi, nous sommes rentrés à la maison. C’était un week-end court, mais super !' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Ils sont partis samedi matin.', a: 't', why: '*Samedi matin, nous sommes partis à huit heures.*' },
            { q: 'Ils sont allés à la mer en voiture.', a: 'f', why: 'They went by train: *Nous avons pris le train.*' },
            { q: 'Samedi soir, ils ont dîné au restaurant.', a: 't', why: '*Nous avons dîné dans un petit restaurant.*' },
            { q: 'La sœur de l’auteur a pris du poisson.', a: 'f', why: 'The author had fish; the sister had pasta.' },
            { q: 'L’hôtel avait une piscine.', a: 'ng', why: 'The text does not mention a swimming pool.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Qu’est-ce qu’ils ont fait samedi après-midi ?', o: ['Une promenade sur la plage.', 'Du vélo.', 'Les courses.'], why: '*Nous avons fait une longue promenade sur la plage.*' },
            { q: 'Quel temps a-t-il fait dimanche ?', o: ['Il a plu.', 'Il a neigé.', 'Il a fait très chaud.'], why: '*Dimanche, il a plu.*' },
            { q: 'Comment était le week-end ?', o: ['Court, mais super.', 'Long et fatigant.', 'Triste.'], why: '*C’était un week-end court, mais super !*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the passé composé.', items: [
            { s: 'Samedi matin, nous [sommes partis] à huit heures.', why: '*sommes partis*: être + participle.' },
            { s: 'Nous [avons pris] le train jusqu’à la côte.', why: '*avons pris*: avoir + participle.' },
            { s: 'Le soir, nous [avons dîné] dans un petit restaurant.', why: '*avons dîné*: avoir + participle.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Hier, j’___ regardé un film.', o: ['ai', 'suis', 'a'], why: '*regarder* uses *avoir*: *j’ai regardé*.' },
      { q: 'Samedi, elle est ___ à la mer.', o: ['allée', 'allé', 'allés'], why: 'A woman: *allée*.' },
      { q: 'Nous avons ___ le train.', o: ['pris', 'prendre', 'prendu'], why: 'The participle of *prendre* is *pris*.' },
      { q: '— C’était comment ? — ___', o: ['C’était super !', 'C’est demain.', 'C’était huit heures.'], why: 'Answer with an adjective.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Elle ___ fait du sport. (avoir, faire)', a: ['a'], why: '*elle a fait*' },
      { q: 'Ils ne sont ___ venus. (not)', a: ['pas'], why: '*ne … pas* around *sont*.' },
      { q: 'La semaine ___, nous sommes allés à Lyon. (last)', a: ['dernière', 'derniere'], why: '*la semaine dernière* means last week.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the participle.', pairs: [
      ['faire', 'fait'],
      ['voir', 'vu'],
      ['boire', 'bu'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Hier soir, nous avons mangé au restaurant.', why: 'A time word at the start, then *nous avons mangé*.' },
      { a: 'Elle n’est pas allée au travail.', why: '*ne … pas* around *est*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Hier, je [ai] allé au cinéma.', a: ['suis'], why: '*aller* uses *être*.' },
      { s: 'Elle est [arrivé] à midi.', a: ['arrivée'], why: 'A woman: *arrivée*.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
      { q: 'Nous ___ pris le bus.', o: ['avons', 'sommes', 'ont'], why: '*prendre* uses *avoir*: *nous avons pris*.' },
    ] },
  ],
};
