// German A2, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Health',
  goal: 'Say what hurts, understand the doctor and give advice.',
  art: 'teacup',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['body', 'weh-tun', 'imperative', 'sollen', 'doctor'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Mir tut der Kopf weh',
      about: 'Name the parts of the body and say what hurts.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Learn every part of the body with its article and its plural. You need the plural often: *Mir tun die Füße weh.*' },
          { t: 'table', caption: 'The body', explain: ['head', 'col2'], quiz: true, head: ['Word', 'Plural', 'Meaning'], rows: [
            ['der Kopf', 'die Köpfe', 'head'],
            ['der Hals', 'die Hälse', 'throat, neck'],
            ['der Bauch', 'die Bäuche', 'stomach, belly'],
            ['der Rücken', 'die Rücken', 'back'],
            ['der Arm', 'die Arme', 'arm'],
            ['die Hand', 'die Hände', 'hand'],
            ['das Bein', 'die Beine', 'leg'],
            ['der Fuß', 'die Füße', 'foot'],
            ['das Auge', 'die Augen', 'eye'],
            ['das Ohr', 'die Ohren', 'ear'],
            ['der Zahn', 'die Zähne', 'tooth'],
          ] },
        ],
        [
          { t: 'text', md: 'To say what hurts, use *weh tun*. The person is in the **Dativ**: *mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen*. The part of the body is the subject, so the verb is *tut* for one thing and *tun* for more than one.\n\nYou can also use *haben* + a word with *-schmerzen*: *Ich habe Kopfschmerzen.*' },
          { t: 'examples', items: [
            { s: '**Mir tut** der Kopf weh.', n: 'One thing (*der Kopf*): *tut*. *Weh* goes to the end.' },
            { s: '**Mir tun** die Füße weh.', n: 'More than one (*die Füße*): *tun*.' },
            { s: 'Tut **dir** der Rücken weh?', n: 'The person in the Dativ: *du → dir*.' },
            { s: 'Ich habe **Halsschmerzen** und Fieber.', n: '*der Hals + Schmerzen = die Halsschmerzen*. It is always plural.' },
            { s: 'Ich bin erkältet. Ich habe Husten und Schnupfen.', n: '*Erkältet sein*: to have a cold.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'When someone is ill, you say *Gute Besserung!* It means: I hope you get well soon. The doctor asks: *Was fehlt Ihnen?* That means: What is wrong with you?' },
          { t: 'ex', kind: 'match', h: 'Which sentences mean the same?', pairs: [
            ['Mir tut der Kopf weh.', 'Ich habe Kopfschmerzen.'],
            ['Mir tut der Hals weh.', 'Ich habe Halsschmerzen.'],
            ['Mir tut der Bauch weh.', 'Ich habe Bauchschmerzen.'],
            ['Mir tut der Rücken weh.', 'Ich habe Rückenschmerzen.'],
            ['Mir tut ein Zahn weh.', 'Ich habe Zahnschmerzen.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Mir ___ die Füße weh.', o: ['tun', 'tut', 'tue'], why: '*Die Füße* is plural, so the verb is *tun*.' },
            { q: 'Mir ___ der Rücken weh.', o: ['tut', 'tun', 'tust'], why: '*Der Rücken* is one thing, so the verb is *tut*.' },
            { q: 'Mein Sohn hat Ohrenschmerzen. ___ tun die Ohren weh.', o: ['Ihm', 'Ihr', 'Er'], why: 'The person is in the Dativ. *Er* becomes *ihm*.' },
            { q: 'Frau Novak kann nicht schreiben. ___ tut die Hand weh.', o: ['Ihr', 'Ihm', 'Sie'], why: 'The person is in the Dativ. *Sie* (she) becomes *ihr*.' },
            { q: 'Herr Berger, tut ___ das Bein noch weh?', o: ['Ihnen', 'Sie', 'ihnen'], why: 'Formal *Sie* becomes *Ihnen* in the Dativ, with a capital I.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Mir tut der Hals weh. Ich habe ___.', a: ['Halsschmerzen'], why: '*der Hals + Schmerzen = die Halsschmerzen*' },
            { q: 'Meine Temperatur ist 39 Grad. Ich habe ___.', a: ['Fieber'], why: '39 degrees is a high temperature: *Fieber*.' },
            { q: 'Mir ___ die Beine weh. (tun)', a: ['tun'], why: '*Die Beine* is plural, so *tun*.' },
            { q: 'Lukas ist krank. ___ tut der Kopf weh. (er)', a: ['Ihm'], why: '*Er* in the Dativ is *ihm*.' },
            { q: 'Gute ___! Ich hoffe, es geht dir bald besser.', a: ['Besserung'], why: 'You say *Gute Besserung!* to a person who is ill.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Trink viel Tee!',
      about: 'Give advice and instructions with the imperative.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'The **imperative** gives instructions, requests and advice. German has three forms: one for *du*, one for *ihr* and one for *Sie*. The verb comes **first**.' },
          { t: 'table', caption: 'The imperative', quiz: true, head: ['', 'du', 'ihr', 'Sie'], rows: [
            ['trinken', 'Trink!', 'Trinkt!', 'Trinken Sie!'],
            ['kommen', 'Komm!', 'Kommt!', 'Kommen Sie!'],
            ['nehmen', 'Nimm!', 'Nehmt!', 'Nehmen Sie!'],
            ['essen', 'Iss!', 'Esst!', 'Essen Sie!'],
            ['schlafen', 'Schlaf!', 'Schlaft!', 'Schlafen Sie!'],
            ['anrufen', 'Ruf … an!', 'Ruft … an!', 'Rufen Sie … an!'],
            ['sein', 'Sei!', 'Seid!', 'Seien Sie!'],
          ] },
        ],
        [
          { t: 'text', md: 'For **du**, take the *du* form and drop *du* and *-st*: *du trinkst → Trink!* A change from *e* to *i* stays: *du nimmst → Nimm!* A change from *a* to *ä* goes away: *du schläfst → Schlaf!*\n\nFor **ihr**, take the *ihr* form without *ihr*: *ihr trinkt → Trinkt!* For **Sie**, put the verb first and *Sie* after it: *Trinken Sie!*\n\nIn separable verbs, the prefix goes to the end: *Ruf mich an!*' },
          { t: 'examples', items: [
            { s: '**Trink** viel Tee und **schlaf** viel!', n: 'Advice to a friend: *du*.' },
            { s: '**Nehmt** eure Jacken **mit**!', n: 'To two or more friends: *ihr*. *Mitnehmen* is separable.' },
            { s: '**Bleiben Sie** heute im Bett!', n: 'The doctor to a patient: *Sie*.' },
            { s: '**Sei** bitte leise, das Baby schläft.', n: '*Sein* is irregular: *Sei! Seid! Seien Sie!*' },
          ] },
          { t: 'tip', art: 'owl', md: 'Small words make an imperative more friendly: *bitte*, *mal* and *doch*. *Komm doch mit!* sounds like a nice invitation, not an order.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Give your friend advice. Write the du imperative.', items: [
            { q: '___ viel Wasser! (trinken)', a: ['Trink', 'Trinke'], why: '*du trinkst → Trink!*' },
            { q: '___ eine Tablette! (nehmen)', a: ['Nimm'], why: '*du nimmst → Nimm!* The *i* stays.' },
            { q: '___ heute zu Hause! (bleiben)', a: ['Bleib', 'Bleibe'], why: '*du bleibst → Bleib!*' },
            { q: '___ heute nicht mit dem Fahrrad! (fahren)', a: ['Fahr', 'Fahre'], why: '*du fährst → Fahr!* The umlaut goes away.' },
            { q: '___ bitte nicht so nervös! (sein)', a: ['Sei'], why: '*Sein* is irregular: *Sei!*' },
            { q: '___ morgen nicht so früh auf! (aufstehen)', a: ['Steh', 'Stehe'], why: 'Separable verb: *Steh … auf!* The prefix goes to the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Du, ihr or Sie? Choose the right form.', items: [
            { q: 'Kinder, ___ eure Jacken an!', o: ['zieht', 'zieh', 'ziehen'], why: 'To more than one child: the *ihr* form, *zieht*.' },
            { q: 'Frau Weber, ___ Sie bitte Platz!', o: ['nehmen', 'nehmt', 'nimm'], why: 'Formal: *Nehmen Sie Platz!*' },
            { q: 'Max und Ina, ___ bitte pünktlich!', o: ['seid', 'sei', 'seien'], why: 'Two friends: the *ihr* form of *sein* is *seid*.' },
            { q: 'Herr Okafor, ___ Sie bitte morgen noch einmal an!', o: ['rufen', 'ruft', 'ruf'], why: 'Formal: *Rufen Sie … an!*' },
            { q: 'Lisa, ___ doch mit!', o: ['komm', 'kommt', 'kommst'], why: 'One friend: the *du* form, *komm*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Bringen Sie Ihre Versichertenkarte mit!', why: 'Verb first, then *Sie*. The prefix *mit* goes to the end.' },
            { a: 'Zieh dir eine warme Jacke an!', why: 'Verb first, the prefix *an* at the end.' },
            { a: 'Leg dich sofort ins Bett!', why: 'In the imperative, the verb comes first. *dich* comes right after it.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'At the doctor’s',
      about: 'Make an appointment and say what the doctor wants you to do.',
      art: 'dog',
      spreads: [
        [
          { t: 'dialogue', title: 'Making an appointment', lines: [
            { who: 'Praxis', s: 'Praxis Dr. Schuster, guten Morgen. Was kann ich für Sie tun?' },
            { who: 'Herr Mensah', s: 'Guten Morgen, mein Name ist Kwame Mensah. Ich möchte einen Termin machen. Ich habe seit drei Tagen Halsschmerzen und Fieber.' },
            { who: 'Praxis', s: 'Waren Sie schon einmal bei uns?' },
            { who: 'Herr Mensah', s: 'Nein, ich wohne erst seit einem Monat hier.' },
            { who: 'Praxis', s: 'Kein Problem. Können Sie heute um 11 Uhr kommen?' },
            { who: 'Herr Mensah', s: 'Ja, das passt gut.' },
            { who: 'Praxis', s: 'Bringen Sie bitte Ihre Versichertenkarte mit.' },
            { who: 'Herr Mensah', s: 'Mache ich. Vielen Dank, auf Wiederhören!' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Germany you show your health insurance card (*die Versichertenkarte*) at the doctor’s. On the phone, people say *Auf Wiederhören* instead of *Auf Wiedersehen*.' },
        ],
        [
          { t: 'text', md: 'The doctor gives you instructions. Later you tell another person about them. For this, use the modal verb **sollen**. Like other modal verbs, it has the infinitive at the **end**.' },
          { t: 'table', caption: 'sollen', quiz: true, head: ['', 'sollen'], rows: [
            ['ich', 'soll'],
            ['du', 'sollst'],
            ['er / sie / es', 'soll'],
            ['wir', 'sollen'],
            ['ihr', 'sollt'],
            ['sie / Sie', 'sollen'],
          ] },
          { t: 'examples', items: [
            { s: 'Die Ärztin sagt: „Bleiben Sie im Bett.“ Ich **soll** im Bett **bleiben**.', n: 'The doctor’s imperative becomes *sollen* + infinitive.' },
            { s: 'Du **sollst** viel **trinken**, sagt der Arzt.', n: '*du sollst*' },
            { s: '**Soll** ich morgen **wiederkommen**?', n: 'A question with *sollen* asks for an instruction.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'At the doctor’s. Match the questions and answers.', pairs: [
            ['Was fehlt Ihnen?', 'Ich habe starke Kopfschmerzen.'],
            ['Wann können Sie kommen?', 'Am Montag um neun.'],
            ['Seit wann haben Sie Fieber?', 'Seit gestern Abend.'],
            ['Haben Sie Ihre Versichertenkarte dabei?', 'Ja, hier ist sie.'],
            ['Wie oft soll ich die Tabletten nehmen?', 'Dreimal am Tag nach dem Essen.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the right form of sollen.', items: [
            { q: 'Der Arzt sagt, ich ___ viel schlafen.', a: ['soll'], why: '*ich soll*, with no ending.' },
            { q: '___ ich die Tabletten vor oder nach dem Essen nehmen?', a: ['Soll'], why: 'A question with *ich*: *Soll ich …?*' },
            { q: 'Ihr ___ morgen nicht zur Schule gehen, sagt die Ärztin.', a: ['sollt'], why: '*ihr sollt*' },
            { q: 'Meine Eltern ___ weniger Salz essen.', a: ['sollen'], why: '*Meine Eltern* is *sie* (plural): *sollen*.' },
            { q: 'Du ___ dich ausruhen, sagt der Arzt.', a: ['sollst'], why: '*du sollst*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What did the doctor say? Choose the sentence that says the same.', items: [
            { q: 'Die Ärztin zu mir: „Nehmen Sie die Tabletten nach dem Essen.“', o: ['Ich soll die Tabletten nach dem Essen nehmen.', 'Ich will die Tabletten nach dem Essen nehmen.', 'Ich soll die Tabletten nach dem Essen genommen.'], why: 'An instruction from another person: *sollen* + infinitive at the end.' },
            { q: 'Der Arzt zu Paul: „Mach keinen Sport!“', o: ['Paul soll keinen Sport machen.', 'Paul sollt keinen Sport machen.', 'Paul kann keinen Sport machen.'], why: '*er soll*. *Kann* says what is possible, not what the doctor wants.' },
            { q: 'Die Ärztin zu Ali und Sara: „Esst mehr Obst!“', o: ['Ali und Sara sollen mehr Obst essen.', 'Ali und Sara soll mehr Obst essen.', 'Ali und Sara sollen mehr Obst esst.'], why: 'Two people: *sollen*, and the infinitive *essen* at the end.' },
            { q: 'Der Arzt zu mir: „Gehen Sie früh ins Bett.“', o: ['Ich soll früh ins Bett gehen.', 'Ich soll früh ins Bett gehe.', 'Ich sollst früh ins Bett gehen.'], why: '*ich soll* + infinitive *gehen*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Wie oft soll ich die Tabletten nehmen?', why: 'Question word, then *soll*, then *ich*. The infinitive goes to the end.' },
            { a: 'Was soll ich jetzt machen?', why: 'Question word, *soll*, *ich*; *machen* at the end.' },
            { a: 'Wann soll ich wiederkommen?', why: 'The infinitive *wiederkommen* goes to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Reading: a pharmacy leaflet',
      about: 'Read the information that comes with medicine.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Every medicine in Germany comes with a leaflet: *die Packungsbeilage*. It says what the medicine is for, how to take it and when not to take it. Read this one.' },
          { t: 'reading', title: 'Packungsbeilage: Schmerztabletten 400 mg', md: '**Wofür sind die Tabletten?**\nDie Tabletten helfen bei leichten und mittleren Schmerzen, zum Beispiel bei Kopfschmerzen, Zahnschmerzen oder Rückenschmerzen. Sie helfen auch bei Fieber.\n\n**Wie nehmen Sie die Tabletten?**\nErwachsene und Kinder ab 12 Jahren nehmen eine Tablette. Warten Sie danach mindestens 6 Stunden. Nehmen Sie nicht mehr als 3 Tabletten am Tag. Schlucken Sie die Tablette mit einem Glas Wasser, am besten nach dem Essen.\n\n**Wann sollen Sie die Tabletten nicht nehmen?**\nNehmen Sie die Tabletten nicht, wenn Sie Magenprobleme haben. Wenn Sie schwanger sind, fragen Sie vorher Ihren Arzt oder Ihre Ärztin.\n\n**Was kann passieren?**\nManchmal bekommt man Bauchschmerzen. Nehmen Sie dann keine Tabletten mehr und sprechen Sie mit Ihrem Arzt.\n\n**Wichtig**\nGehen Sie zum Arzt, wenn die Schmerzen nach 3 Tagen nicht besser sind. Bewahren Sie die Tabletten trocken und nicht über 25 °C auf. Legen Sie die Packung an einen Ort, wo kleine Kinder sie nicht finden.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Die Tabletten helfen auch bei Fieber.', a: 't', why: '*Sie helfen auch bei Fieber.*' },
            { q: 'Ein Kind mit 8 Jahren darf eine Tablette nehmen.', a: 'f', why: 'Only adults and children from 12 years: *ab 12 Jahren*.' },
            { q: 'Man darf 4 Tabletten am Tag nehmen.', a: 'f', why: '*Nicht mehr als 3 Tabletten am Tag.*' },
            { q: 'Bei Magenproblemen soll man die Tabletten nicht nehmen.', a: 't', why: '*Nehmen Sie die Tabletten nicht, wenn Sie Magenprobleme haben.*' },
            { q: 'Die Tabletten machen müde.', a: 'ng', why: 'The leaflet does not say this.' },
            { q: 'In einer Packung sind 20 Tabletten.', a: 'ng', why: 'The leaflet does not say how many tablets there are.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Elif hat um 8 Uhr eine Tablette genommen. Wann darf sie die nächste nehmen?', o: ['Um 14 Uhr oder später.', 'Um 10 Uhr.', 'Um 12 Uhr.'], why: 'She must wait at least 6 hours: *mindestens 6 Stunden*.' },
            { q: 'Die Kopfschmerzen sind nach drei Tagen noch da. Was soll man tun?', o: ['Zum Arzt gehen.', 'Mehr Tabletten nehmen.', 'Nichts, das ist normal.'], why: '*Gehen Sie zum Arzt, wenn die Schmerzen nach 3 Tagen nicht besser sind.*' },
            { q: 'Jonas bekommt von den Tabletten Bauchschmerzen. Was soll er tun?', o: ['Keine Tabletten mehr nehmen und mit dem Arzt sprechen.', 'Zwei Tabletten auf einmal nehmen.', 'Die Tabletten vor dem Essen nehmen.'], why: '*Nehmen Sie dann keine Tabletten mehr und sprechen Sie mit Ihrem Arzt.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the verb in the imperative.', items: [
            { s: '[Warten] Sie danach mindestens 6 Stunden.', why: 'Formal imperative: the verb first, then *Sie*.' },
            { s: '[Schlucken] Sie die Tablette mit einem Glas Wasser.', why: 'An instruction to the reader: *Schlucken Sie …*' },
            { s: 'Wenn die Schmerzen bleiben, [gehen] Sie zum Arzt.', why: '*bleiben* is a normal verb in the *wenn* clause. *gehen Sie* is the instruction.' },
            { s: 'Wenn Sie schwanger sind, [fragen] Sie vorher Ihren Arzt.', why: '*sind* is a normal verb. *fragen Sie* is the instruction.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Mir ___ die Ohren weh.', o: ['tun', 'tut', 'tust'], why: '*Die Ohren* is plural: *tun*.' },
      { q: 'Was fehlt ___, Frau Lang?', o: ['Ihnen', 'Sie', 'Ihr'], why: 'Formal *Sie* in the Dativ: *Ihnen*.' },
      { q: 'Paul, ___ bitte nicht so laut!', o: ['sei', 'seid', 'sein'], why: 'One friend: the *du* imperative of *sein* is *sei*.' },
      { q: 'Kinder, ___ euch die Hände!', o: ['wascht', 'wasch', 'waschen'], why: 'To more than one child: the *ihr* form, *wascht*.' },
      { q: 'Der Arzt sagt, wir ___ mehr Sport machen.', o: ['sollen', 'soll', 'sollt'], why: '*wir sollen*' },
      { q: 'Ich habe morgen einen Termin ___ Dr. Schuster.', o: ['bei', 'zu', 'mit'], why: 'A doctor’s appointment: *einen Termin bei …*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: '___ bitte das Fenster zu! (zumachen, du)', a: ['Mach', 'Mache'], why: '*du machst zu → Mach … zu!* The prefix *zu* goes to the end.' },
      { q: '___ Sie bitte hier Platz! (nehmen)', a: ['Nehmen'], why: 'Formal imperative: *Nehmen Sie …!*' },
      { q: 'Mir tut der Bauch weh. Ich habe ___.', a: ['Bauchschmerzen'], why: '*der Bauch + Schmerzen = die Bauchschmerzen*' },
      { q: 'Ihr ___ heute im Bett bleiben, sagt die Ärztin. (sollen)', a: ['sollt'], why: '*ihr sollt*' },
      { q: 'Mein Bruder hat Fieber. ___ geht es nicht gut. (er)', a: ['Ihm'], why: '*Es geht …* takes the Dativ: *er → ihm*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Wie oft soll ich die Tropfen nehmen?', why: 'Question word, *soll*, *ich*; the infinitive at the end.' },
      { a: 'Bring deine Versichertenkarte mit!', why: 'Imperative first; the prefix *mit* at the end.' },
      { a: 'Mir tun die Füße weh.', why: '*Mir* first, then the verb *tun*; *weh* at the end.' },
    ] },
  ],
};
