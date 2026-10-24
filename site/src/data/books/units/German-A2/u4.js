// German A2, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'At home',
  goal: 'Describe your flat and say where things are and where they go. Learn the two-way prepositions and the verbs stellen, stehen, legen, liegen and hängen.',
  art: 'cat',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['two-way-prepositions', 'wo-wohin', 'position-verbs', 'flat', 'furniture'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Wo? or Wohin?',
      about: 'Two-way prepositions with the Dativ or the Akkusativ.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Nine prepositions can take the **Dativ** or the **Akkusativ**: *in, auf, an, unter, über, neben, vor, hinter, zwischen*. Ask a question. **Wo?** (where) asks about a place, and takes the **Dativ**. **Wohin?** (where to) asks about a movement to a new place, and takes the **Akkusativ**.' },
          { t: 'table', caption: 'Wo? or Wohin?', explain: ['head'], head: ['Wo? + Dativ', 'Wohin? + Akkusativ'], rows: [
            ['Die Katze liegt auf dem Sofa.', 'Die Katze springt auf das Sofa.'],
            ['Ich bin in der Küche.', 'Ich gehe in die Küche.'],
            ['Das Bild hängt an der Wand.', 'Ich hänge das Bild an die Wand.'],
            ['Die Schuhe stehen unter dem Bett.', 'Ich stelle die Schuhe unter das Bett.'],
          ] },
        ],
        [
          { t: 'table', caption: 'The articles', explain: ['head', 'col0'], quiz: true, head: ['', 'Wo? Dativ', 'Wohin? Akkusativ'], rows: [
            ['masculine', 'auf dem Tisch', 'auf den Tisch'],
            ['neuter', 'auf dem Bett', 'auf das Bett'],
            ['feminine', 'an der Wand', 'an die Wand'],
            ['plural', 'auf den Stühlen', 'auf die Stühle'],
          ] },
          { t: 'tip', art: 'owl', md: 'Short forms: *in dem → im*, *an dem → am* (Dativ), *in das → ins*, *an das → ans* (Akkusativ). *Ich bin im Bad. Ich gehe ins Bad.*' },
          { t: 'examples', items: [
            { s: 'Die Kinder spielen **im** Garten.', n: 'Wo? *in dem Garten → im Garten*.' },
            { s: 'Wir gehen heute Abend **ins** Kino.', n: 'Wohin? *in das Kino → ins Kino*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Wo or wohin? Choose the article.', items: [
            { q: 'Das Buch liegt auf ___ Tisch.', o: ['dem', 'den', 'der'], why: 'Wo? The book is in its place: Dativ, *dem Tisch*.' },
            { q: 'Ich lege das Buch auf ___ Tisch.', o: ['den', 'dem', 'das'], why: 'Wohin? You move the book: Akkusativ, *den Tisch*.' },
            { q: 'Wir gehen heute in ___ Park.', o: ['den', 'dem', 'das'], why: 'Wohin? A movement: Akkusativ, *den Park*.' },
            { q: 'Die Kinder spielen in ___ Garten.', o: ['dem', 'den', 'die'], why: 'Wo? They play there: Dativ, *dem Garten*.' },
            { q: 'Die Lampe hängt über ___ Tisch.', o: ['dem', 'den', 'die'], why: 'Wo? The lamp is in its place: Dativ, *dem Tisch*.' },
            { q: 'Stell die Tasche bitte neben ___ Tür.', o: ['die', 'der', 'den'], why: 'Wohin? You move the bag: Akkusativ, *die Tür*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the article. Think: wo or wohin?', items: [
            { q: 'Mein Auto steht vor ___ Haus.', a: ['dem'], why: 'Wo? Dativ: *vor dem Haus*.' },
            { q: 'Ich fahre das Auto in ___ Garage.', a: ['die'], why: 'Wohin? Akkusativ: *in die Garage*.' },
            { q: 'Der Teppich liegt zwischen ___ Sofa und dem Tisch.', a: ['dem'], why: 'Wo? Dativ: *zwischen dem Sofa und dem Tisch*.' },
            { q: 'Der Schlüssel ist unter ___ Zeitung.', a: ['der'], why: 'Wo? *die Zeitung* in the Dativ: *der Zeitung*.' },
            { q: 'Wir hängen die Uhr an ___ Wand.', a: ['die'], why: 'Wohin? Akkusativ: *an die Wand*.' },
            { q: 'Gehst du heute noch ___ Kino? (in + das)', a: ['ins'], why: 'Wohin? *in das → ins*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Wo ist mein Handy?', why: 'Question word, verb, subject.' },
            { a: 'Gehst du jetzt in die Küche?', why: 'The verb comes first. Wohin? *in die Küche*, Akkusativ.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'stellen or stehen?',
      about: 'Put things somewhere, and say where they are.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'These verbs come in pairs. **stellen, legen, hängen** are actions: you put something somewhere. They answer *Wohin?* and take the **Akkusativ**. **stehen, liegen, hängen** describe a position. They answer *Wo?* and take the **Dativ**.' },
          { t: 'table', caption: 'Action and position', explain: ['head'], head: ['Wohin? Action + Akkusativ', 'Wo? Position + Dativ'], rows: [
            ['Ich stelle die Flasche auf den Tisch.', 'Die Flasche steht auf dem Tisch.'],
            ['Ich lege das Handy auf den Tisch.', 'Das Handy liegt auf dem Tisch.'],
            ['Ich hänge die Jacke an den Haken.', 'Die Jacke hängt am Haken.'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: '**stellen / stehen**: for things that stand upright, like a bottle, a chair or a lamp. **legen / liegen**: for things that lie flat, like a phone, a newspaper or a carpet. **hängen** is the same verb for the action and the position: *Ich hänge das Bild an die Wand. Das Bild hängt an der Wand.*' },
          { t: 'ex', kind: 'spot', h: 'Tap the verb that describes a position.', items: [
            { s: 'Ich lege das Buch auf den Tisch. Jetzt [liegt] es dort.', why: '*liegt* says where the book is. *lege* is the action.' },
            { s: 'Sie stellt die Tasse ins Regal. Jetzt [steht] sie im Regal.', why: '*steht* says where the cup is. *stellt* is the action.' },
            { s: 'Er hängt die Jacke an den Haken. Jetzt [hängt] sie am Haken.', why: 'The second *hängt* says where the jacket is: *am Haken*, Dativ. The first one is the action: *an den Haken*, Akkusativ.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the verb.', items: [
            { q: 'Ich ___ die Vase auf den Tisch.', o: ['stelle', 'stehe', 'lege'], why: 'An action, and a vase stands upright: *stellen*.' },
            { q: 'Die Vase ___ auf dem Tisch.', o: ['steht', 'stellt', 'legt'], why: 'A position, Dativ: *stehen*.' },
            { q: 'Mein Handy ___ auf dem Sofa.', o: ['liegt', 'legt', 'stellt'], why: 'A position, and a phone lies flat: *liegen*.' },
            { q: 'Kannst du die Zeitung auf den Stuhl ___?', o: ['legen', 'liegen', 'stehen'], why: 'An action, Akkusativ, and a newspaper lies flat: *legen*.' },
            { q: 'Das Bild ___ über dem Sofa.', o: ['hängt', 'steht', 'liegt'], why: 'A picture on a wall hangs: *hängen*.' },
            { q: 'Er ___ seinen Mantel an den Haken.', o: ['hängt', 'stellt', 'liegt'], why: 'An action with *an den Haken*: *hängen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the present.', items: [
            { q: 'Wo ___ meine Schuhe? (stehen)', a: ['stehen'], why: 'A position. *die Schuhe* is plural: *stehen*.' },
            { q: 'Ich ___ die Bücher ins Regal. (stellen)', a: ['stelle'], why: 'An action: *ich stelle*. Books stand upright on a shelf.' },
            { q: 'Die Katze ___ unter dem Bett. (liegen)', a: ['liegt'], why: 'A position: *sie liegt*.' },
            { q: '___ du bitte den Teppich vor das Sofa? (legen)', a: ['Legst'], why: 'An action: *du legst*.' },
            { q: 'Wir ___ die Lampe über den Tisch. (hängen)', a: ['hängen'], why: 'An action with the Akkusativ: *wir hängen*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Wohin stellst du den Stuhl?', why: '*Wohin?* goes with the action verb *stellen*.' },
            { a: 'Wo liegt mein Schlüssel?', why: '*Wo?* goes with the position verb *liegen*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'My flat',
      about: 'Rooms and furniture, and how to describe a flat.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Learn rooms and furniture with the article. You need it with *in*, *auf* and the other two-way prepositions: *im Wohnzimmer, auf dem Sofa*.' },
          { t: 'table', caption: 'Zimmer und Möbel', quiz: true, head: ['Zimmer', 'Möbel'], rows: [
            ['das Wohnzimmer', 'das Sofa, der Sessel, der Fernseher'],
            ['das Schlafzimmer', 'das Bett, der Kleiderschrank'],
            ['die Küche', 'der Herd, der Kühlschrank, die Spüle'],
            ['das Bad', 'die Dusche, die Badewanne, das Waschbecken'],
            ['der Flur', 'die Garderobe, der Spiegel'],
            ['das Arbeitszimmer', 'der Schreibtisch, das Regal'],
          ] },
        ],
        [
          { t: 'text', md: 'To describe a flat, say how big it is, how many rooms it has and what it is like.' },
          { t: 'examples', items: [
            { s: 'Die Wohnung hat drei Zimmer, eine Küche und ein Bad.', n: 'In Germany, *Zimmer* usually counts the bedrooms and the living room, not the kitchen and the bathroom.' },
            { s: 'Sie ist 75 Quadratmeter groß.', n: '*Quadratmeter* (m²): square metres.' },
            { s: 'Die Wohnung liegt im dritten Stock.', n: '*im ersten, zweiten, dritten Stock*: on the first, second, third floor. The ground floor is *das Erdgeschoss*.' },
            { s: 'Das Wohnzimmer ist hell, aber die Küche ist ein bisschen dunkel.', n: 'Useful adjectives: *hell / dunkel, groß / klein, ruhig / laut, modern / alt*.' },
            { s: 'Die Miete ist 900 Euro warm.', n: '*warm*: heating and other costs (*Nebenkosten*) are included. *kalt*: they are not included.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'In which room is it usually?', pairs: [
            ['das Bett', 'das Schlafzimmer'],
            ['der Herd', 'die Küche'],
            ['die Badewanne', 'das Bad'],
            ['das Sofa', 'das Wohnzimmer'],
            ['die Garderobe', 'der Flur'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the opposite.', items: [
            { q: 'Die Küche ist nicht dunkel, sie ist ___.', a: ['hell'], why: 'The opposite of *dunkel* is *hell*.' },
            { q: 'Unsere Straße ist nicht laut, sie ist ___.', a: ['ruhig', 'leise'], why: 'The opposite of *laut* is *ruhig*.' },
            { q: 'Das Bad ist nicht groß, es ist ___.', a: ['klein'], why: 'The opposite of *groß* is *klein*.' },
            { q: 'Das Haus ist nicht modern, es ist ___.', a: ['alt'], why: 'The opposite of *modern* is *alt*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Ich koche das Essen auf dem ___.', o: ['Herd', 'Bett', 'Spiegel'], why: '*der Herd* is the cooker in the kitchen.' },
            { q: 'Die Milch ist im ___.', o: ['Kühlschrank', 'Kleiderschrank', 'Waschbecken'], why: 'Milk stays cold in the *Kühlschrank*.' },
            { q: 'Unsere Wohnung hat zwei Zimmer und ist 55 ___ groß.', o: ['Quadratmeter', 'Kilometer', 'Kilo'], why: 'The size of a flat is in *Quadratmeter*.' },
            { q: 'Wir wohnen im vierten ___.', o: ['Stock', 'Zimmer', 'Haus'], why: '*im vierten Stock*: on the fourth floor.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A room in a shared flat',
      about: 'Read an advert for a room in a WG.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'A **WG** (*Wohngemeinschaft*) is a shared flat. Each person has their own room, and everyone shares the kitchen and the bathroom. Many students and young workers in Germany live in a WG.' },
          { t: 'reading', title: 'Zimmer frei in netter WG', md: 'Wir sind Lina (26, Studentin) und Marco (31, Koch). Ab dem 1. März suchen wir eine neue Mitbewohnerin oder einen neuen Mitbewohner. Unsere Wohnung liegt in der Nähe vom Bahnhof, im zweiten Stock. Sie ist 85 Quadratmeter groß und hat drei Zimmer, eine große Küche, ein Bad und einen Balkon.\n\nDas freie Zimmer ist 16 Quadratmeter groß und hell. Es hat ein Bett, einen Schreibtisch und einen Kleiderschrank. Du kannst aber auch deine eigenen Möbel mitbringen.\n\nIn der Küche stehen ein großer Tisch und sechs Stühle. Dort kochen und essen wir oft zusammen. Die Waschmaschine steht im Bad.\n\nDie Miete ist 420 Euro warm, mit Internet. Die Kaution ist 800 Euro. Rauchen ist in der Wohnung nicht erlaubt. Haustiere sind leider auch nicht möglich, denn Marco hat eine Allergie.\n\nHast du Interesse? Schreib uns eine Nachricht!' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Lina und Marco suchen eine Person für die WG.', a: 't', why: 'They are looking for a new flatmate: *eine neue Mitbewohnerin oder einen neuen Mitbewohner*.' },
            { q: 'Die Wohnung hat zwei Balkone.', a: 'f', why: 'It has one balcony: *einen Balkon*.' },
            { q: 'Das freie Zimmer hat keine Möbel.', a: 'f', why: 'It has a bed, a desk and a wardrobe.' },
            { q: 'Die Waschmaschine steht in der Küche.', a: 'f', why: '*Die Waschmaschine steht im Bad.*' },
            { q: 'Das Internet ist in der Miete dabei.', a: 't', why: '*420 Euro warm, mit Internet.*' },
            { q: 'Man darf in der Wohnung rauchen.', a: 'f', why: '*Rauchen ist in der Wohnung nicht erlaubt.*' },
            { q: 'Lina studiert Medizin.', a: 'ng', why: 'Lina is a student, but the advert does not say what she studies.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the advert again and choose.', items: [
            { q: 'Wie viel kostet die Kaution?', o: ['800 Euro', '420 Euro', '85 Euro'], why: '*Die Kaution ist 800 Euro.* A *Kaution* is a deposit.' },
            { q: 'Warum sind Haustiere nicht möglich?', o: ['Marco hat eine Allergie.', 'Die Wohnung ist zu klein.', 'Lina mag keine Tiere.'], why: '*… denn Marco hat eine Allergie.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Die Katze schläft auf ___ Sofa.', o: ['dem', 'das', 'den'], why: 'Wo? Dativ: *auf dem Sofa*.' },
      { q: 'Ich stelle die Flasche in ___ Kühlschrank.', o: ['den', 'dem', 'der'], why: 'Wohin? Akkusativ: *in den Kühlschrank*.' },
      { q: 'Das Handy ___ auf dem Tisch.', o: ['liegt', 'legt', 'stellt'], why: 'A position: *liegen*.' },
      { q: 'Wir gehen ___ Wohnzimmer.', o: ['ins', 'im', 'in'], why: 'Wohin? *in das → ins*.' },
      { q: 'Wo ___ die Gläser? – Im Schrank.', o: ['stehen', 'stellen', 'legen'], why: '*Wo?* asks about a position. Glasses stand upright: *stehen*.' },
      { q: 'Ich hänge das Bild ___ Wand.', o: ['an die', 'an der', 'auf der'], why: 'Wohin? Akkusativ: *an die Wand*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Der Spiegel hängt an ___ Wand.', a: ['der'], why: 'Wo? Dativ: *an der Wand*.' },
      { q: 'Ich lege den Teppich vor ___ Sofa.', a: ['das'], why: 'Wohin? Akkusativ: *vor das Sofa*.' },
      { q: 'Kannst du die Stühle neben den Tisch ___? (stellen)', a: ['stellen'], why: 'An action with the Akkusativ: *stellen*, at the end after *kannst*.' },
      { q: 'Die Milch ist im ___.', a: ['Kühlschrank'], why: '*der Kühlschrank* keeps food cold.' },
      { q: 'Unsere Wohnung liegt im zweiten ___.', a: ['Stock'], why: '*im zweiten Stock*: on the second floor.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: 'Wohin legst du die Zeitung?', why: '*Wohin?* goes with the action verb *legen*.' },
      { a: 'Wo steht dein Schreibtisch?', why: '*Wo?* goes with the position verb *stehen*.' },
    ] },
  ],
};
