// German A1, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Free time',
  goal: 'Talk about hobbies, say what you can do and arrange to meet.',
  art: 'cat',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['hobbies', 'vowel-change-verbs', 'modal-verbs', 'koennen', 'moechten', 'weather', 'seasons', 'arranging-to-meet'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Hobbies',
      about: 'Say what you do in your free time, with verbs that change their vowel.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To ask about hobbies, say **Was machst du gern?** or **Was ist dein Hobby?** Put **gern** after the verb to say that you like doing something: *Ich schwimme gern.*' },
          { t: 'table', caption: 'Hobbys', explain: ['head', 'col1'], quiz: true, head: ['German', 'English'], rows: [
            ['Fußball spielen', 'to play football'],
            ['schwimmen', 'to swim'],
            ['lesen', 'to read'],
            ['Musik hören', 'to listen to music'],
            ['Rad fahren', 'to cycle'],
            ['tanzen', 'to dance'],
            ['kochen', 'to cook'],
            ['wandern', 'to go hiking'],
            ['Freunde treffen', 'to meet friends'],
          ] },
          { t: 'examples', items: [
            { s: 'Was machst du **gern**? – Ich tanze **gern**.', n: '*gern* comes after the verb.' },
            { s: 'Ich spiele **nicht gern** Fußball.', n: '*nicht gern*: you do not like it.' },
            { s: 'Mein Hobby ist Kochen.', n: 'As a noun, the verb has a capital letter: *das Kochen*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Some verbs change their vowel with **du** and **er / sie / es**. The other forms are normal.\n\n*a* becomes *ä*: *fahren → du fährst*. *e* becomes *i* or *ie*: *sprechen → du sprichst*, *lesen → du liest*.' },
          { t: 'table', caption: 'Verbs with a vowel change', explain: ['col0'], quiz: true, head: ['', 'fahren', 'lesen', 'sprechen', 'essen', 'treffen'], rows: [
            ['ich', 'fahre', 'lese', 'spreche', 'esse', 'treffe'],
            ['du', 'fährst', 'liest', 'sprichst', 'isst', 'triffst'],
            ['er / sie / es', 'fährt', 'liest', 'spricht', 'isst', 'trifft'],
            ['wir', 'fahren', 'lesen', 'sprechen', 'essen', 'treffen'],
            ['ihr', 'fahrt', 'lest', 'sprecht', 'esst', 'trefft'],
            ['sie / Sie', 'fahren', 'lesen', 'sprechen', 'essen', 'treffen'],
          ] },
          { t: 'tip', art: 'owl', md: 'Only **du** and **er / sie / es** change. With *wir*, *ihr* and *sie*, the vowel stays: *wir fahren, ihr fahrt*.' },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the verb.', verb: 'fahren', tense: 'present', rows: [
            ['ich', 'fahre'],
            ['du', 'fährst'],
            ['er / sie / es', 'fährt'],
            ['wir', 'fahren'],
            ['ihr', 'fahrt'],
            ['sie / Sie', 'fahren'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Jonas ___ gern Bücher.', o: ['liest', 'lest', 'lese'], why: '*lesen*, *er*: *liest*.' },
            { q: '___ du Spanisch?', o: ['Sprichst', 'Sprechst', 'Spricht'], why: '*sprechen*, *du*: *sprichst*.' },
            { q: 'Wir ___ am Sonntag nach Hamburg.', o: ['fahren', 'fährt', 'fährst'], why: '*wir* has no vowel change: *fahren*.' },
            { q: 'Sara ___ am Abend ihre Freundin.', o: ['trifft', 'trefft', 'treffe'], why: '*treffen*, *sie*: *trifft*, with double *f*.' },
            { q: 'Was ___ du gern?', o: ['isst', 'esst', 'esse'], why: '*essen*, *du*: *isst*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb.', items: [
            { q: 'Paul ___ jeden Tag Rad. (fahren)', a: ['fährt'], why: '*er*: *a* becomes *ä*: *fährt*.' },
            { q: 'Du ___ sehr gut Deutsch! (sprechen)', a: ['sprichst'], why: '*du*: *e* becomes *i*: *sprichst*.' },
            { q: 'Was ___ deine Tochter gern? (lesen)', a: ['liest'], why: '*sie*: *e* becomes *ie*: *liest*.' },
            { q: 'Ihr ___ heute bei uns. (essen)', a: ['esst'], why: '*ihr* has no vowel change: *esst*.' },
            { q: '___ du heute deine Freunde? (treffen)', a: ['Triffst'], why: '*du*: *triffst*. In a question, the verb is first.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find the hobbies.', words: ['tanzen', 'lesen', 'kochen', 'wandern', 'schwimmen', 'Musik'] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'können and möchten',
      about: 'Say what you can do and what you would like to do.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: '**können** means can. **möchten** means would like. They go in position 2. The second verb is in the infinitive and goes to the **end**: *Ich kann gut schwimmen. Ich möchte Gitarre spielen.*' },
          { t: 'table', caption: 'können and möchten', explain: ['col0'], quiz: true, head: ['', 'können', 'möchten'], rows: [
            ['ich', 'kann', 'möchte'],
            ['du', 'kannst', 'möchtest'],
            ['er / sie / es', 'kann', 'möchte'],
            ['wir', 'können', 'möchten'],
            ['ihr', 'könnt', 'möchtet'],
            ['sie / Sie', 'können', 'möchten'],
          ] },
          { t: 'tip', art: 'owl', md: '*ich* and *er / sie / es* have the same form: *ich kann, er kann*. There is no *-t* with *er*: say *er kann*, not *er kannt*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Ich **kann** gut **kochen**.', n: '*kann* in position 2, *kochen* at the end.' },
            { s: 'Lena **kann** nicht **schwimmen**.', n: '*nicht* comes before the infinitive.' },
            { s: '**Kannst** du Gitarre **spielen**?', n: 'Question: *kannst* first, *spielen* at the end.' },
            { s: 'Wir **möchten** am Samstag **wandern**.', n: '*möchten* in position 2, *wandern* at the end.' },
            { s: 'Am Abend **möchte** ich ins Kino **gehen**.', n: 'Time first, then *möchte*, then *ich*. *gehen* at the end.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Ich ___ sehr gut tanzen.', o: ['kann', 'kannst', 'können'], why: '*ich kann*.' },
            { q: 'Was ___ ihr am Wochenende machen?', o: ['möchtet', 'möchten', 'möchtest'], why: '*ihr möchtet*.' },
            { q: 'Mein Bruder ___ nicht kochen.', o: ['kann', 'kannt', 'können'], why: '*er kann*, with no *-t*.' },
            { q: '___ du heute Abend mitkommen?', o: ['Möchtest', 'Möchte', 'Möchtet'], why: '*du möchtest*.' },
            { q: 'Herr Weber, ___ Sie Englisch sprechen?', o: ['können', 'kann', 'könnt'], why: 'Polite *Sie*: *können*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Ich kann gut schwimmen.', why: '*kann* in position 2, *schwimmen* at the end.' },
            { a: 'Möchtest du Tennis spielen?', why: 'Question: *möchtest* first, *spielen* at the end.' },
            { a: 'Am Sonntag möchten wir wandern.', why: 'Time first, *möchten* in position 2, *wandern* at the end.' },
            { a: 'Paul kann nicht Rad fahren.', why: '*nicht* goes before *Rad fahren* at the end.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentence. Two words do not belong.', items: [
            { a: 'Sara kann sehr gut singen.', extra: ['kannst', 'singt'], why: '*sie kann*, and the infinitive *singen* at the end.' },
            { a: 'Ich möchte Deutsch lernen.', extra: ['möchtest', 'lerne'], why: '*ich möchte*, and the infinitive *lernen* at the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
            { s: 'Ich kann gut [schwimme].', a: ['schwimmen'], why: 'After *kann*, the second verb is in the infinitive: *schwimmen*.' },
            { s: 'Mia [kannt] Gitarre spielen.', a: ['kann'], why: '*er / sie kann*, with no *-t*.' },
            { s: 'Möchtest du einen Kaffee [trinkst]?', a: ['trinken'], why: 'After *möchtest*, the second verb is in the infinitive: *trinken*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Hast du Zeit?',
      about: 'Arrange to meet and talk about the weather and the seasons.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To arrange to meet, ask **Hast du Zeit?** Then ask **Wann?** (when) and **Wo?** (where). To say yes: *Gern! Das passt gut. Super!* To say no: *Leider nicht. Da kann ich nicht.*' },
          { t: 'dialogue', title: 'Hast du am Samstag Zeit?', lines: [
            { who: 'Elif', s: 'Hallo Ben! Hast du am Samstag Zeit?' },
            { who: 'Ben', s: 'Am Samstag? Ja. Was möchtest du machen?' },
            { who: 'Elif', s: 'Wir können schwimmen gehen. Das Wetter ist schön.' },
            { who: 'Ben', s: 'Gute Idee! Wann?' },
            { who: 'Elif', s: 'Um zwei? Am See?' },
            { who: 'Ben', s: 'Um zwei kann ich leider nicht. Geht es um drei?' },
            { who: 'Elif', s: 'Ja, das passt. Bis Samstag!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Ben hat am Samstag Zeit.', a: 't', why: '*Am Samstag? Ja.*' },
            { q: 'Elif möchte ins Kino gehen.', a: 'f', why: 'She wants to go swimming: *schwimmen gehen*.' },
            { q: 'Sie treffen sich um zwei.', a: 'f', why: 'Ben cannot at two. They meet at three.' },
            { q: 'Sie treffen sich am See.', a: 't', why: '*Am See?* – *Ja, das passt.*' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the answer.', pairs: [
            ['Hast du morgen Zeit?', 'Ja, gern.'],
            ['Wann treffen wir uns?', 'Um halb acht.'],
            ['Wo treffen wir uns?', 'Vor dem Kino.'],
            ['Kannst du am Freitag?', 'Leider nicht.'],
          ] },
        ],
        [
          { t: 'text', md: 'People often talk about the weather when they make plans. Use **es**: *Es regnet. Es ist kalt.* The seasons are all masculine and take **im**: *im Sommer, im Winter*.' },
          { t: 'table', caption: 'Das Wetter', explain: ['head', 'col1'], quiz: true, head: ['German', 'English'], rows: [
            ['Die Sonne scheint.', 'The sun is shining.'],
            ['Es regnet.', 'It is raining.'],
            ['Es schneit.', 'It is snowing.'],
            ['Es ist windig.', 'It is windy.'],
            ['Es ist warm / heiß.', 'It is warm / hot.'],
            ['Es ist kalt.', 'It is cold.'],
          ] },
          { t: 'examples', items: [
            { s: '**Im Frühling** ist es oft warm.', n: '*der Frühling*: spring.' },
            { s: '**Im Sommer** schwimme ich gern.', n: '*der Sommer*: summer.' },
            { s: '**Im Herbst** ist es windig.', n: '*der Herbst*: autumn.' },
            { s: '**Im Winter** schneit es oft.', n: '*der Winter*: winter. After *im Winter*, the verb is in position 2.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Weather or season?', groups: ['das Wetter', 'die Jahreszeit'], items: [
            { s: 'Es regnet.', g: 0, why: 'It tells you the weather.' },
            { s: 'der Herbst', g: 1, why: '*der Herbst* is a season.' },
            { s: 'Die Sonne scheint.', g: 0, why: 'It tells you the weather.' },
            { s: 'der Frühling', g: 1, why: '*der Frühling* is a season.' },
            { s: 'Es ist windig.', g: 0, why: 'It tells you the weather.' },
            { s: 'der Winter', g: 1, why: '*der Winter* is a season.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Im Winter ist es oft ___.', a: ['kalt'], why: 'Winter is usually cold: *kalt*.' },
            { q: 'Ich nehme meinen Schirm. Es ___.', a: ['regnet'], why: 'You need an umbrella when *es regnet*.' },
            { q: '___ Sommer fahren wir ans Meer.', a: ['Im'], why: 'Seasons take *im*: *im Sommer*.' },
            { q: 'Hast du am Freitag ___? – Ja, gern.', a: ['Zeit'], why: '*Hast du Zeit?*: are you free?' },
          ] },
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'umbrella', o: ['der Regenschirm', 'die Sonne', 'der Winter'], why: '*der Regenschirm* (or *der Schirm*): you need it when it rains.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Reading: notices',
      about: 'Read notices from a sports club and a language café.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'reading', title: 'Sportverein Grün-Weiß', md: '**Neu: Volleyball für alle!**\n\nKannst du nicht gut Volleyball spielen? Kein Problem! Bei uns kann jeder mitmachen. Wir spielen jeden Dienstag von 19 bis 21 Uhr in der Sporthalle am Park. Im Sommer spielen wir draußen.\n\nDu brauchst nur Sportschuhe. Das erste Training kostet nichts. Möchtest du mitspielen? Ruf Hannah an: 0123 45 67 89.' },
          { t: 'reading', title: 'Sprachcafé', md: '**Sprachcafé im Café Lindenhof**\n\nMöchtest du Deutsch sprechen und neue Leute treffen? Komm zum Sprachcafé! Wir treffen uns jeden Donnerstag um 18 Uhr. Hier sprechen wir Deutsch, Englisch, Arabisch und Spanisch. Du kannst auch Kaffee und Kuchen bestellen. Der Eintritt ist frei.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Beim Volleyball können auch Anfänger mitspielen.', a: 't', why: '*Bei uns kann jeder mitmachen.*' },
            { q: 'Das Volleyball-Training ist am Donnerstag.', a: 'f', why: 'Volleyball is on Tuesday: *jeden Dienstag*. The language café is on Thursday.' },
            { q: 'Im Sommer spielen sie am See.', a: 'ng', why: 'They play outside in summer: *draußen*. The text does not say where.' },
            { q: 'Das erste Training ist kostenlos.', a: 't', why: '*Das erste Training kostet nichts.*' },
            { q: 'Im Sprachcafé kann man nur Deutsch sprechen.', a: 'f', why: 'They speak German, English, Arabic and Spanish.' },
            { q: 'Das Sprachcafé kostet nichts.', a: 't', why: '*Der Eintritt ist frei.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the notices again and choose.', items: [
            { q: 'Was braucht man für das Volleyball-Training?', o: ['Sportschuhe', 'einen Ball', 'zehn Euro'], why: '*Du brauchst nur Sportschuhe.*' },
            { q: 'Wann ist das Sprachcafé?', o: ['am Donnerstag um 18 Uhr', 'am Dienstag um 19 Uhr', 'am Donnerstag um 21 Uhr'], why: '*jeden Donnerstag um 18 Uhr*.' },
            { q: 'Ana möchte am Dienstag um 19 Uhr Sport machen. Was passt?', o: ['Volleyball', 'das Sprachcafé', 'nichts'], why: 'Volleyball is on Tuesday from 19 to 21 Uhr.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the infinitive at the end.', items: [
            { s: 'Kannst du nicht gut Volleyball [spielen]?', why: 'After *kannst*, the infinitive *spielen* is at the end.' },
            { s: 'Möchtest du Deutsch [sprechen] und neue Leute [treffen]?', why: 'After *möchtest*, both infinitives are at the end of their part.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Mein Vater ___ jeden Morgen die Zeitung.', o: ['liest', 'lest', 'lesen'], why: '*lesen*, *er*: *liest*.' },
      { q: '___ du Französisch?', o: ['Sprichst', 'Sprechst', 'Spricht'], why: '*sprechen*, *du*: *sprichst*.' },
      { q: 'Ich ___ leider nicht kommen.', o: ['kann', 'kannst', 'können'], why: '*ich kann*.' },
      { q: 'Was ___ ihr trinken?', o: ['möchtet', 'möchtest', 'möchte'], why: '*ihr möchtet*.' },
      { q: '___ Winter schneit es oft.', o: ['Im', 'Am', 'Um'], why: 'Seasons take *im*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Sara ___ am Wochenende nach Berlin. (fahren)', a: ['fährt'], why: '*fahren*, *sie*: *fährt*.' },
      { q: 'Wir können heute nicht Fußball spielen. Es ___. (regnen)', a: ['regnet'], why: '*es regnet*.' },
      { q: 'Kannst du gut ___? (kochen)', a: ['kochen'], why: 'After *kannst*, the infinitive: *kochen*.' },
      { q: 'Hast du morgen ___? – Ja, gern!', a: ['Zeit'], why: '*Hast du Zeit?*: are you free?' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Ich möchte am Samstag schwimmen.', why: '*möchte* in position 2, *schwimmen* at the end.' },
      { a: 'Kannst du am Freitag kommen?', why: 'Question: *kannst* first, *kommen* at the end.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
      { s: 'Er [trefft] am Abend seine Freunde.', a: ['trifft'], why: '*treffen*, *er*: *trifft*.' },
      { s: 'Lena kann sehr gut [tanzt].', a: ['tanzen'], why: 'After *kann*, the infinitive: *tanzen*.' },
    ] },
  ],
};
