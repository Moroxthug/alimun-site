// French A1, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'In town',
  goal: 'Find places in town, ask the way and use public transport.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['town', 'places', 'aller', 'directions', 'imperative', 'transport', 'tickets'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Où est la gare ?',
      about: 'Places in town, the verb aller and à + the article.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To find a place, ask **Où est … ?** (for one place) or **Où sont … ?** (for several): *Où est la gare ? Où sont les toilettes ?* A polite way to start is **Excusez-moi** (excuse me). The answer is usually **C’est** + where: *C’est à côté de la poste.*' },
          { t: 'table', caption: 'Places in town', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['la gare', 'railway station'],
            ['la poste', 'post office'],
            ['la banque', 'bank'],
            ['la pharmacie', 'chemist’s'],
            ['la boulangerie', 'bakery'],
            ['le supermarché', 'supermarket'],
            ['le musée', 'museum'],
            ['le parc', 'park'],
            ['l’hôpital (m.)', 'hospital'],
            ['l’école (f.)', 'school'],
            ['le centre-ville', 'town centre'],
            ['la rue, la place', 'street, square'],
          ] },
          { t: 'tip', art: 'owl', md: 'In many French towns, the **mairie** (town hall) and the church are on the main **place**. In Quebec, a small corner shop is often called **un dépanneur**.' },
        ],
        [
          { t: 'text', md: '**aller** means *to go*. It is irregular. After **aller**, use **à** to say where: *Je vais à la gare.* The small word **à** joins with **le** and **les**: **à + le = au**, **à + les = aux**. With **la** and **l’**, it stays **à la**, **à l’**: *au musée, aux toilettes, à la poste, à l’école.* To say what you are going to do soon, use **aller** + infinitive: *Je vais manger.*' },
          { t: 'table', caption: 'aller (to go)', quiz: true, head: ['', 'aller'], rows: [
            ['je', 'vais'],
            ['tu', 'vas'],
            ['il / elle / on', 'va'],
            ['nous', 'allons'],
            ['vous', 'allez'],
            ['ils / elles', 'vont'],
          ] },
          { t: 'examples', items: [
            { s: 'Je **vais à la** banque.', n: '*banque* is feminine: *à la*.' },
            { s: 'Elle **va au** musée.', n: '*à* + *le* = *au*.' },
            { s: 'Nous **allons à l’**hôpital.', n: 'Before a vowel: *à l’*.' },
            { s: 'Ils **vont aux** toilettes.', n: '*à* + *les* = *aux*.' },
            { s: 'Vous **allez** où ? – **Je vais** au parc.', n: 'Asking and answering.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of aller.', verb: 'aller', tense: 'present', rows: [
            ['je', 'vais'],
            ['tu', 'vas'],
            ['il / elle', 'va'],
            ['nous', 'allons'],
            ['vous', 'allez'],
            ['ils / elles', 'vont'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose à la, à l’, au or aux.', items: [
            { q: 'Je vais ___ gare.', o: ['à la', 'au', 'aux'], why: '*gare* is feminine: *à la gare*.' },
            { q: 'Elle va ___ supermarché.', o: ['au', 'à la', 'aux'], why: '*supermarché* is masculine: *au*.' },
            { q: 'Nous allons ___ école.', o: ['à l’', 'à la', 'au'], why: 'Before a vowel: *à l’école*.' },
            { q: 'Ils vont ___ toilettes.', o: ['aux', 'au', 'à la'], why: 'Plural: *aux toilettes*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'train', o: ['le train', 'le bus', 'le vélo'], why: 'A train: *le train*.' },
            { pic: 'bus', o: ['le bus', 'le train', 'le billet'], why: 'A bus: *le bus*.' },
            { pic: 'bicycle', o: ['le vélo', 'le bus', 'la clé'], why: 'A bicycle: *le vélo*.' },
            { pic: 'ticket', o: ['le billet', 'le train', 'le parapluie'], why: 'A ticket: *le billet*.' },
          ] },
          { t: 'ex', kind: 'label', h: 'Label the station.', scene: 'station', extra: ['le métro', 'la gare'], items: [
            { x: 110, y: 90, a: 'le train', why: 'The train.' },
            { x: 260, y: 52, a: 'l’horloge', why: 'The clock on the wall.' },
            { x: 262, y: 116, a: 'le banc', why: 'The bench.' },
            { x: 290, y: 140, a: 'la valise', why: 'The suitcase.' },
            { x: 150, y: 160, a: 'le quai', why: 'The platform.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Tournez à gauche',
      about: 'Ask the way and give directions with the imperative.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To ask the way, say **Excusez-moi, comment aller à la gare ?** or **Pour aller à la gare, s’il vous plaît ?** The answer uses the **imperative**: the verb with no pronoun, in the **vous** form for strangers. For -er verbs, it is the same as the present: *Tournez, traversez, continuez*. Note: **aller** gives *allez*, **prendre** gives *prenez*.' },
          { t: 'table', caption: 'Directions', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['Allez tout droit.', 'Go straight on.'],
            ['Tournez à gauche.', 'Turn left.'],
            ['Tournez à droite.', 'Turn right.'],
            ['Prenez la première rue à gauche.', 'Take the first street on the left.'],
            ['Traversez la place.', 'Cross the square.'],
            ['Continuez jusqu’au feu.', 'Keep going to the traffic lights.'],
            ['C’est en face de la banque.', 'It is opposite the bank.'],
            ['C’est au coin de la rue.', 'It is on the corner.'],
          ] },
          { t: 'tip', art: 'owl', md: 'With a friend, use the **tu** form: *Tourne à gauche, va tout droit, prends la deuxième rue.* For -er verbs, drop the **s** of *tu*: *tu tournes* becomes *tourne*; *tu vas* becomes **va**. In an imperative, the verb comes first; to say *do not*, put **ne … pas** around it: *Ne tournez pas à droite.*' },
        ],
        [
          { t: 'dialogue', title: 'Excusez-moi', lines: [
            { who: 'Paul', s: 'Excusez-moi, Madame. Pour aller à la gare, s’il vous plaît ?' },
            { who: 'Sophie', s: 'Allez tout droit, puis tournez à gauche au feu.' },
            { who: 'Paul', s: 'Et c’est loin ?' },
            { who: 'Sophie', s: 'Non, c’est à cinq minutes à pied. La gare est en face de la poste.' },
            { who: 'Paul', s: 'Merci beaucoup, Madame !' },
            { who: 'Sophie', s: 'Je vous en prie.' },
          ] },
          { t: 'text', md: 'To say *near* and *far*, use **près** and **loin**: *C’est près de la gare* and *C’est loin de la poste*. The distance in time is **à cinq minutes à pied** (five minutes on foot). The numbers for order are **premier / première** (first), **deuxième** (second), **troisième** (third). **Je vous en prie** is a polite answer to *merci*, with *vous*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
            ['Allez tout droit.', 'Go straight on.'],
            ['Tournez à droite.', 'Turn right.'],
            ['C’est en face de la banque.', 'It is opposite the bank.'],
            ['C’est loin.', 'It is far.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the imperative with vous.', items: [
            { q: '___ à gauche. (tourner)', a: ['Tournez'], why: '*vous tournez* gives the imperative *Tournez !*.' },
            { q: '___ la place. (traverser)', a: ['Traversez'], why: '*Traversez la place.*' },
            { q: '___ la deuxième rue à droite. (prendre)', a: ['Prenez'], why: '*Prenez la deuxième rue.*' },
            { q: '___ tout droit. (aller)', a: ['Allez'], why: '*Allez tout droit.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Tournez à gauche au feu.', why: 'Verb first, then direction, then the place.' },
            { a: 'La poste est en face de la banque.', why: '*en face de* = opposite.' },
            { a: 'Prenez la première rue à droite.', why: '*Prenez* + street + direction.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'You are at the station. Choose the best answer.', items: [
            { q: 'Quelqu’un demande : « Où est la banque ? » Vous dites : « ___ »', o: ['Allez tout droit.', 'Je vais à la banque.', 'Vous avez un billet.'], why: 'You give directions.' },
            { q: 'La gare est à côté de la poste. Vous dites : « C’est ___ de la poste. »', o: ['à côté', 'sous', 'derrière le'], why: '*à côté de la poste*' },
            { q: 'C’est à deux minutes. Vous dites : « C’est ___. »', o: ['près', 'loin', 'devant'], why: 'Two minutes is close: *près*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Un billet pour Lyon',
      about: 'Travel by bus, metro and train, and buy a ticket.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To say how you travel, use **en** + a vehicle you sit in (*en bus, en métro, en train, en voiture*), and **à** + something you ride or walk (*à pied, à vélo*). To say where you come from, use **venir de**: *Je viens de Lyon.* **venir** is irregular: *je viens, tu viens, il vient, nous venons, vous venez, ils viennent*.' },
          { t: 'table', caption: 'Transport', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['en bus', 'by bus'],
            ['en métro', 'by metro'],
            ['en train', 'by train'],
            ['en voiture', 'by car'],
            ['à pied', 'on foot'],
            ['à vélo', 'by bicycle'],
            ['un billet', 'a ticket'],
            ['un aller simple', 'a single ticket'],
            ['un aller-retour', 'a return ticket'],
          ] },
          { t: 'examples', items: [
            { s: 'Je vais au travail **en bus**.', n: '*en bus*' },
            { s: 'Nous allons à l’école **à pied**.', n: '*à pied*' },
            { s: 'Elle **vient de** Lyon.', n: '*venir de* + a place.' },
            { s: '**Un aller simple** pour Lyon, s’il vous plaît.', n: 'One way.' },
            { s: 'Le train **part à** huit heures.', n: '*partir à* + time.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Au guichet', lines: [
            { who: 'Paul', s: 'Bonjour, un aller-retour pour Lyon, s’il vous plaît.' },
            { who: 'Guichetier', s: 'Pour quand ?' },
            { who: 'Paul', s: 'Pour demain matin. Le train part à quelle heure ?' },
            { who: 'Guichetier', s: 'À huit heures dix, du quai trois.' },
            { who: 'Paul', s: 'Parfait. C’est combien ?' },
            { who: 'Guichetier', s: 'Trente-deux euros. Vous payez par carte ?' },
          ] },
          { t: 'tip', art: 'owl', md: 'In France, you must often **valider** (stamp) your ticket in a small machine before you get on the train or the bus. In a station, **le quai** is the platform and **la voie** is the track.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose en or à.', items: [
            { q: 'Je vais au travail ___ vélo.', o: ['à', 'en', 'au'], why: '*à vélo*, because you ride it.' },
            { q: 'Nous allons au centre ___ train.', o: ['en', 'à', 'au'], why: '*en train*' },
            { q: 'Il rentre ___ pied.', o: ['à', 'en', 'au'], why: '*à pied*' },
            { q: 'Vous venez ___ voiture ?', o: ['en', 'à', 'de'], why: '*en voiture*' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of venir.', verb: 'venir', tense: 'present', rows: [
            ['je', 'viens'],
            ['tu', 'viens'],
            ['il / elle', 'vient'],
            ['nous', 'venons'],
            ['vous', 'venez'],
            ['ils / elles', 'viennent'],
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Fill the gaps with the words in the bank.', extra: ['départ', 'retour'], items: [
            { q: 'Je voudrais un ___ simple pour Lyon.', a: 'aller', why: '*un aller simple* is a single ticket.' },
            { q: 'Le train part du ___ trois.', a: 'quai', why: '*le quai* is the platform.' },
            { q: 'Pour aller au centre, je prends le ___.', a: 'bus', why: '*le bus*' },
            { q: 'Vous payez par ___ ?', a: 'carte', why: '*par carte* means by card.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You want to buy a ticket:', o: ['Un billet pour Lyon, s’il vous plaît.', 'Le train est grand.', 'Il pleut.'], why: 'You ask for a ticket with *pour* + the place.' },
            { q: 'You ask the time of the train:', o: ['Le train part à quelle heure ?', 'Vous venez d’où ?', 'Où est la banque ?'], why: '*partir à quelle heure ?*' },
            { q: 'You go to work by bus. You say:', o: ['Je vais au travail en bus.', 'Je vais au travail à bus.', 'Je viens au travail en bus.'], why: '*en bus*' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un plan de ville',
      about: 'Read a city map text and a ticket machine screen.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Le centre-ville', md: '**Bienvenue dans le centre-ville !**\nLa gare est au nord, à côté de la place. En face de la gare, il y a la poste et la banque. Pour aller au musée, prenez la rue de la Paix et tournez à droite : le musée est au coin, en face du parc. Le supermarché est à cinq minutes à pied, derrière l’église. Il y a un office de tourisme sur la place, à côté de la mairie.' },
          { t: 'reading', title: 'Le distributeur de billets', md: '**Choisissez votre trajet**\nTicket seul : 2 €\nCarnet de dix tickets : 16 €\nPass journée : 6 €\n\nPayez par carte ou en espèces.\nNe oubliez pas de valider votre ticket.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La gare est à côté de la place.', a: 't', why: '*La gare est au nord, à côté de la place.*' },
            { q: 'La poste est derrière la gare.', a: 'f', why: 'The post office is *en face de la gare* (opposite the station).' },
            { q: 'Le musée est en face du parc.', a: 't', why: '*le musée est au coin, en face du parc*' },
            { q: 'Le supermarché est près du musée.', a: 'ng', why: 'The text says where the supermarket is, but not how far it is from the museum.' },
            { q: 'Un ticket coûte deux euros.', a: 't', why: '*Ticket seul : 2 €*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Pour aller au musée, on tourne…', o: ['à droite', 'à gauche', 'tout droit'], why: '*prenez la rue de la Paix et tournez à droite*' },
            { q: 'Qu’est-ce qu’il y a à côté de la mairie ?', o: ['un office de tourisme', 'un parc', 'une banque'], why: '*un office de tourisme sur la place, à côté de la mairie*' },
            { q: 'Le pass journée coûte…', o: ['six euros', 'seize euros', 'deux euros'], why: '*Pass journée : 6 €*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'On peut payer par carte ou en ___.', a: ['espèces', 'especes'], why: '*Payez par carte ou en espèces.*' },
            { q: 'Il ne faut pas oublier de ___ le ticket.', a: ['valider'], why: '*valider votre ticket*' },
            { q: 'Le supermarché est derrière l’___.', a: ['église', 'eglise'], why: '*derrière l’église*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Je vais ___ gare.', o: ['à la', 'au', 'aux'], why: '*gare* is feminine: *à la gare*.' },
      { q: 'Elle va ___ musée.', o: ['au', 'à la', 'aux'], why: '*musée* is masculine: *au*.' },
      { q: 'Nous allons au travail ___ bus.', o: ['en', 'à', 'au'], why: '*en bus*' },
      { q: 'La poste est ___ de la banque. (opposite)', o: ['en face', 'derrière', 'sur'], why: '*en face de* means opposite.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Vous ___ où ? (aller)', a: ['allez'], why: '*vous allez*' },
      { q: '___ à droite. (tourner, vous)', a: ['Tournez'], why: 'The imperative: *Tournez !*' },
      { q: 'Elle ___ de Lyon. (venir)', a: ['vient'], why: '*elle vient*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
      ['à pied', 'on foot'],
      ['un aller simple', 'a single ticket'],
      ['tout droit', 'straight on'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Allez tout droit puis tournez à gauche.', why: 'Two imperatives joined by *puis*.' },
      { a: 'Le train part à huit heures dix.', why: 'Subject, *part*, time.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Je vais [à le] musée.', a: ['au'], why: '*à* + *le* = *au*.' },
      { s: 'Ils [allent] à la gare.', a: ['vont'], why: '*ils vont*' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
      { q: 'Pour aller à la gare, ___ tout droit.', o: ['allez', 'allons', 'vont'], why: 'The imperative with *vous*: *allez*.' },
    ] },
  ],
};
