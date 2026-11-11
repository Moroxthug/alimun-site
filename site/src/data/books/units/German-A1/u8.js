// German A1, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'At the weekend',
  goal: 'Say what you did at the weekend and what you liked.',
  art: 'sun',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['past', 'war-hatte', 'perfekt', 'weekend', 'free-time'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'war and hatte',
      about: 'Talk about the past with sein and haben.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To talk about the past with **sein** and **haben**, Germans usually use **war** (was, were) and **hatte** (had). *Ich bin müde* becomes *Ich war müde*. *Ich habe Zeit* becomes *Ich hatte Zeit*.' },
          { t: 'table', caption: 'war and hatte', explain: ['col0'], quiz: true, head: ['', 'sein', 'haben'], rows: [
            ['ich', 'war', 'hatte'],
            ['du', 'warst', 'hattest'],
            ['er / sie / es', 'war', 'hatte'],
            ['wir', 'waren', 'hatten'],
            ['ihr', 'wart', 'hattet'],
            ['sie / Sie', 'waren', 'hatten'],
          ] },
          { t: 'tip', art: 'owl', md: 'Like *kann* and *möchte*, **ich** and **er / sie / es** have the same form: *ich war, er war*; *ich hatte, sie hatte*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Gestern **war** ich im Kino.', n: '*sein* in the past: *ich war*.' },
            { s: 'Das Wetter **war** schön.', n: '*es war*.' },
            { s: 'Am Samstag **hatte** ich keine Zeit.', n: '*haben* in the past: *ich hatte*.' },
            { s: '**Wart** ihr am Wochenende zu Hause?', n: '*ihr wart*.' },
            { s: 'Wir **hatten** Besuch.', n: '*Besuch haben*: to have guests.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the past of sein.', verb: 'sein', tense: 'past (Präteritum)', rows: [
            ['ich', 'war'],
            ['du', 'warst'],
            ['er / sie / es', 'war'],
            ['wir', 'waren'],
            ['ihr', 'wart'],
            ['sie / Sie', 'waren'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'war or hatte? Choose.', items: [
            { q: 'Am Sonntag ___ ich im Park.', o: ['war', 'hatte', 'waren'], why: 'A place goes with *sein*: *ich war im Park*.' },
            { q: 'Lena ___ am Freitag Geburtstag.', o: ['hatte', 'war', 'hattet'], why: '*Geburtstag haben*: *sie hatte Geburtstag*.' },
            { q: 'Wir ___ sehr müde.', o: ['waren', 'hatten', 'war'], why: 'An adjective goes with *sein*: *wir waren müde*.' },
            { q: '___ du am Wochenende Zeit?', o: ['Hattest', 'Warst', 'Hatte'], why: '*Zeit haben*: *du hattest Zeit*.' },
            { q: 'Wie ___ der Film?', o: ['war', 'hatte', 'waren'], why: '*Wie war …?*: how was …? *der Film* is singular: *war*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Write the sentence in the past.', items: [
            { q: 'Ich bin zu Hause.', cue: 'Gestern', a: ['Gestern war ich zu Hause.'], why: '*bin → war*. After *Gestern*, the verb comes next, then *ich*.' },
            { q: 'Wir haben keine Zeit.', cue: 'Gestern', a: ['Gestern hatten wir keine Zeit.'], why: '*haben → hatten*. Time, verb, person.' },
            { q: 'Das Wetter ist schlecht.', cue: 'Am Samstag', a: ['Am Samstag war das Wetter schlecht.'], why: '*ist → war*. Time, verb, then *das Wetter*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Ich habe Pizza gegessen',
      about: 'Say what you did with the Perfekt and haben.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'For most other verbs, Germans talk about the past with the **Perfekt**. It has two parts: **haben** in position 2, and the **participle** at the end: *Ich habe Fußball gespielt.*\n\nRegular verbs make the participle with **ge-** + stem + **-t**: *spielen → gespielt*, *kaufen → gekauft*.' },
          { t: 'table', caption: 'Regular participles', explain: ['head'], quiz: true, head: ['Infinitive', 'Perfekt'], rows: [
            ['machen', 'hat gemacht'],
            ['kaufen', 'hat gekauft'],
            ['spielen', 'hat gespielt'],
            ['hören', 'hat gehört'],
            ['kochen', 'hat gekocht'],
            ['tanzen', 'hat getanzt'],
            ['arbeiten', 'hat gearbeitet'],
          ] },
          { t: 'tip', art: 'owl', md: 'When the stem ends in *-t* or *-d*, add **-et**: *arbeiten → gearbeitet*, *reden → geredet*.' },
        ],
        [
          { t: 'text', md: 'Some common verbs are **irregular**. Their participle ends in **-en**, and sometimes the vowel changes. Learn them one by one.' },
          { t: 'table', caption: 'Irregular participles', explain: ['head'], quiz: true, head: ['Infinitive', 'Perfekt'], rows: [
            ['essen', 'hat gegessen'],
            ['trinken', 'hat getrunken'],
            ['sehen', 'hat gesehen'],
            ['lesen', 'hat gelesen'],
            ['schlafen', 'hat geschlafen'],
            ['treffen', 'hat getroffen'],
          ] },
          { t: 'examples', items: [
            { s: 'Ich **habe** einen Film **gesehen**.', n: '*habe* in position 2, *gesehen* at the end.' },
            { s: 'Wir **haben** im Restaurant **gegessen**.', n: '*essen → gegessen*.' },
            { s: 'Am Samstag **hat** Paul lange **geschlafen**.', n: 'Time first, then *hat*, then *Paul*. The participle stays at the end.' },
            { s: 'Was **hast** du am Wochenende **gemacht**?', n: 'Question: *hast* after the question word.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the participle.', items: [
            { q: 'Ich habe am Samstag Tennis ___. (spielen)', a: ['gespielt'], why: 'Regular: *ge + spiel + t*.' },
            { q: 'Wir haben einen Kuchen ___. (kaufen)', a: ['gekauft'], why: 'Regular: *ge + kauf + t*.' },
            { q: 'Hast du schon ___? (essen)', a: ['gegessen'], why: 'Irregular: *essen → gegessen*.' },
            { q: 'Sara hat ein Buch ___. (lesen)', a: ['gelesen'], why: 'Irregular: *lesen → gelesen*.' },
            { q: 'Am Sonntag habe ich viel ___. (arbeiten)', a: ['gearbeitet'], why: 'The stem ends in *-t*, so add *-et*: *gearbeitet*.' },
            { q: 'Was habt ihr ___? (trinken)', a: ['getrunken'], why: 'Irregular: *trinken → getrunken*.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs.', pairs: [
            ['sehen', 'gesehen'],
            ['machen', 'gemacht'],
            ['trinken', 'getrunken'],
            ['hören', 'gehört'],
            ['schlafen', 'geschlafen'],
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Ich habe Musik gehört.', why: '*habe* in position 2, *gehört* at the end.' },
            { a: 'Am Abend haben wir gekocht.', why: 'Time first, *haben* in position 2, *gekocht* at the end.' },
            { a: 'Hast du den Film gesehen?', why: 'Yes/no question: *hast* first, *gesehen* at the end.' },
            { a: 'Was hat Jonas gekauft?', why: 'Question word, *hat*, *Jonas*, participle.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
            { s: 'Ich habe Pizza [geesst].', a: ['gegessen'], why: '*essen* is irregular: *gegessen*.' },
            { s: 'Wir haben Fußball [spielen].', a: ['gespielt'], why: 'In the Perfekt, the participle goes at the end: *gespielt*.' },
            { s: 'Er hat einen Film [gesieht].', a: ['gesehen'], why: '*sehen* is irregular: *gesehen*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Ich bin nach Berlin gefahren',
      about: 'Use the Perfekt with sein for movement and talk about your weekend.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Verbs of **movement** from one place to another use **sein** in the Perfekt, not *haben*: *Ich bin nach Berlin gefahren.* The participle is still at the end.' },
          { t: 'table', caption: 'Perfekt with sein', explain: ['head'], quiz: true, head: ['Infinitive', 'Perfekt'], rows: [
            ['fahren', 'ist gefahren'],
            ['gehen', 'ist gegangen'],
            ['kommen', 'ist gekommen'],
            ['fliegen', 'ist geflogen'],
            ['laufen', 'ist gelaufen'],
          ] },
          { t: 'examples', items: [
            { s: 'Wir **sind** ins Kino **gegangen**.', n: '*gehen*: movement, so *sein*.' },
            { s: 'Lena **ist** mit dem Zug nach Wien **gefahren**.', n: '*fahren*: movement, so *sein*.' },
            { s: 'Wann **bist** du nach Hause **gekommen**?', n: '*kommen*: movement, so *sein*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Ask yourself: does the person go from A to B? Then use *sein*. Eating, reading or playing is not movement, so use *haben*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'haben or sein? Choose.', items: [
            { q: 'Ich ___ am Samstag nach Hamburg gefahren.', o: ['bin', 'habe', 'ist'], why: '*fahren* is movement: *ich bin gefahren*.' },
            { q: 'Wir ___ im Café Kuchen gegessen.', o: ['haben', 'sind', 'hat'], why: '*essen* is not movement: *wir haben gegessen*.' },
            { q: 'Mein Bruder ___ spät nach Hause gekommen.', o: ['ist', 'hat', 'bin'], why: '*kommen* is movement: *er ist gekommen*.' },
            { q: '___ ihr ins Kino gegangen?', o: ['Seid', 'Habt', 'Sind'], why: '*gehen* is movement. *ihr*: *seid*.' },
            { q: 'Sara ___ am Sonntag lange geschlafen.', o: ['hat', 'ist', 'sind'], why: '*schlafen* is not movement: *sie hat geschlafen*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'haben or sein?', groups: ['haben', 'sein'], items: [
            { s: 'gegessen', g: 0, why: '*essen*: *hat gegessen*.' },
            { s: 'gefahren', g: 1, why: '*fahren* is movement: *ist gefahren*.' },
            { s: 'gelesen', g: 0, why: '*lesen*: *hat gelesen*.' },
            { s: 'gegangen', g: 1, why: '*gehen* is movement: *ist gegangen*.' },
            { s: 'getanzt', g: 0, why: '*tanzen*: *hat getanzt*. You dance in one place.' },
            { s: 'geflogen', g: 1, why: '*fliegen* is movement: *ist geflogen*.' },
          ] },
        ],
        [
          { t: 'text', md: 'On Monday, people often ask **Wie war dein Wochenende?** To say what you liked: *Es war super! Das war schön. Der Film hat mir gut gefallen.* If you did not like it: *Es war langweilig. Das war nicht so gut.*' },
          { t: 'dialogue', title: 'Wie war dein Wochenende?', lines: [
            { who: 'Jonas', s: 'Hallo Mira! Wie war dein Wochenende?' },
            { who: 'Mira', s: 'Super! Ich bin nach Leipzig gefahren. Meine Schwester wohnt da.' },
            { who: 'Jonas', s: 'Toll! Was habt ihr gemacht?' },
            { who: 'Mira', s: 'Wir sind in die Stadt gegangen und haben ein Museum gesehen. Am Abend haben wir zusammen gekocht.' },
            { who: 'Jonas', s: 'Das klingt gut.' },
            { who: 'Mira', s: 'Und du? Was hast du gemacht?' },
            { who: 'Jonas', s: 'Nicht viel. Das Wetter war schlecht. Ich habe gelesen und lange geschlafen.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Mira ist nach Leipzig gefahren.', a: 't', why: '*Ich bin nach Leipzig gefahren.*' },
            { q: 'Miras Bruder wohnt in Leipzig.', a: 'f', why: 'Her sister lives there: *Meine Schwester wohnt da.*' },
            { q: 'Am Abend sind sie ins Restaurant gegangen.', a: 'f', why: 'They cooked together: *haben wir zusammen gekocht*.' },
            { q: 'Jonas hatte ein ruhiges Wochenende.', a: 't', why: 'He read and slept a lot: *Nicht viel.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write bin, ist, sind, habe, hat or haben.', items: [
            { q: 'Am Samstag ___ ich ins Schwimmbad gegangen.', a: ['bin'], why: '*gehen* is movement: *ich bin gegangen*.' },
            { q: 'Wir ___ am Abend Musik gehört.', a: ['haben'], why: '*hören* is not movement: *wir haben gehört*.' },
            { q: 'Paul ___ mit dem Fahrrad zum See gefahren.', a: ['ist'], why: '*fahren* is movement: *er ist gefahren*.' },
            { q: 'Ich ___ meine Freunde getroffen.', a: ['habe'], why: '*treffen* is not movement: *ich habe getroffen*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Reading: a weekend trip',
      about: 'Read a short blog post about a weekend by the sea.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'reading', title: 'Ein Wochenende am Meer', md: 'Am Freitag hatte ich endlich frei! Am Samstag bin ich früh mit dem Zug ans Meer gefahren. Die Fahrt war lang, aber ich habe ein Buch gelesen.\n\nDas Wetter war toll: Die Sonne hat geschienen und es war warm. Ich bin am Strand gelaufen und habe viele Fotos gemacht. Am Mittag habe ich Fisch gegessen. Das war sehr lecker!\n\nAm Abend habe ich meine Freundin Hana getroffen. Sie wohnt dort. Wir sind in eine Bar gegangen und haben getanzt.\n\nAm Sonntag hat es geregnet. Ich war ein bisschen traurig, aber das Wochenende war wunderbar. Ich komme bald wieder!' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Die Autorin ist mit dem Auto ans Meer gefahren.', a: 'f', why: 'She went by train: *mit dem Zug*.' },
            { q: 'Im Zug hat sie gelesen.', a: 't', why: '*Die Fahrt war lang, aber ich habe ein Buch gelesen.*' },
            { q: 'Am Samstag war das Wetter schlecht.', a: 'f', why: 'On Saturday the sun was shining: *Das Wetter war toll.*' },
            { q: 'Sie hat am Strand Volleyball gespielt.', a: 'ng', why: 'She walked on the beach and took photos. The text does not say that she played volleyball.' },
            { q: 'Hana wohnt am Meer.', a: 't', why: '*Sie wohnt dort.*' },
            { q: 'Am Sonntag hat es geregnet.', a: 't', why: '*Am Sonntag hat es geregnet.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the post again and choose.', items: [
            { q: 'Was hat sie am Mittag gegessen?', o: ['Fisch', 'Pizza', 'Kuchen'], why: '*Am Mittag habe ich Fisch gegessen.*' },
            { q: 'Was haben Hana und sie am Abend gemacht?', o: ['Sie haben getanzt.', 'Sie haben gekocht.', 'Sie haben Fotos gemacht.'], why: '*Wir sind in eine Bar gegangen und haben getanzt.*' },
            { q: 'Wie war das Wochenende für sie?', o: ['wunderbar', 'langweilig', 'nicht so gut'], why: '*Das Wochenende war wunderbar.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the participles with sein.', items: [
            { s: 'Am Samstag bin ich früh mit dem Zug ans Meer [gefahren].', why: '*fahren* is movement, so *sein*: *ich bin gefahren*.' },
            { s: 'Ich bin am Strand [gelaufen] und habe viele Fotos gemacht.', why: '*laufen* takes *sein*. *gemacht* goes with *habe*.' },
            { s: 'Wir sind in eine Bar [gegangen] und haben getanzt.', why: '*gehen* takes *sein*. *getanzt* goes with *haben*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Gestern ___ ich krank.', o: ['war', 'hatte', 'bin'], why: 'Past of *sein*: *ich war*.' },
      { q: 'Wir ___ am Wochenende Besuch.', o: ['hatten', 'waren', 'hattet'], why: 'Past of *haben*: *wir hatten*.' },
      { q: 'Ich bin mit dem Bus in die Stadt ___.', o: ['gefahren', 'gefahrt', 'fahren'], why: '*fahren → gefahren*, with *sein*.' },
      { q: 'Hast du den Film ___?', o: ['gesehen', 'gesieht', 'sehen'], why: '*sehen → gesehen*.' },
      { q: 'Wir ___ ins Kino gegangen.', o: ['sind', 'haben', 'seid'], why: '*gehen* is movement. *wir sind*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Am Samstag habe ich Fußball ___. (spielen)', a: ['gespielt'], why: 'Regular: *gespielt*.' },
      { q: 'Wir haben im Restaurant ___. (essen)', a: ['gegessen'], why: 'Irregular: *gegessen*.' },
      { q: 'Lena ___ am Sonntag nach Hause gekommen.', a: ['ist'], why: '*kommen* is movement: *sie ist gekommen*.' },
      { q: 'Wie ___ dein Wochenende? – Super!', a: ['war'], why: '*Wie war …?*: how was …?' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Am Abend haben wir getanzt.', why: 'Time, *haben*, *wir*, participle at the end.' },
      { a: 'Was hast du am Wochenende gemacht?', why: 'Question word, *hast*, *du*; participle at the end.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
      { s: 'Ich [habe] nach Berlin gefahren.', a: ['bin'], why: '*fahren* is movement: *ich bin gefahren*.' },
      { s: 'Er hat viel Wasser [getrinkt].', a: ['getrunken'], why: '*trinken* is irregular: *getrunken*.' },
    ] },
  ],
};
