// German A1, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Home',
  goal: 'Describe your flat, its rooms and furniture. Learn es gibt, er/sie/es for things, colours and adjectives, nicht and kein, and say where things are.',
  art: 'cactus',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['home', 'rooms-and-furniture', 'es-gibt', 'pronouns', 'adjectives', 'colours', 'negation', 'places'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Rooms and furniture',
      about: 'Name the rooms and furniture, say what there is with es gibt, and use er, sie, es for things.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'These are the rooms in a flat (*die Wohnung*) or a house (*das Haus*). Many room words end in *-zimmer*. They are all *das* words, because *das Zimmer* (the room) is neuter.' },
          { t: 'table', caption: 'Die Zimmer', quiz: true, head: ['der', 'die', 'das'], rows: [
            ['der Flur', 'die Küche', 'das Wohnzimmer'],
            ['der Balkon', 'die Toilette', 'das Schlafzimmer'],
            ['der Garten', 'die Terrasse', 'das Kinderzimmer'],
            ['der Keller', 'die Garage', 'das Bad'],
          ] },
          { t: 'tip', art: 'owl', md: 'A long noun takes the article of its last part: *das Zimmer → das Wohnzimmer*, *der Schrank → der Kühlschrank*.' },
        ],
        [
          { t: 'table', caption: 'Die Möbel', quiz: true, head: ['der', 'die', 'das'], rows: [
            ['der Tisch', 'die Lampe', 'das Sofa'],
            ['der Stuhl', 'die Dusche', 'das Bett'],
            ['der Schrank', 'die Badewanne', 'das Regal'],
            ['der Kühlschrank', 'die Waschmaschine', 'das Bild'],
            ['der Herd', 'die Pflanze', 'das Fenster'],
          ] },
          { t: 'text', md: 'To say what is in a room, use **es gibt** + Akkusativ: *Im Wohnzimmer gibt es **einen** Tisch.* Remember: *ein* becomes *einen* with *der* nouns. With *kein*: *Es gibt **keinen** Balkon.*' },
          { t: 'examples', items: [
            { s: 'In der Küche gibt es einen Herd und einen Kühlschrank.', n: '*der Herd, der Kühlschrank*: *einen*.' },
            { s: 'Im Schlafzimmer gibt es ein Bett und einen Schrank.', n: '*das Bett*: *ein*.' },
            { s: 'Gibt es einen Balkon? – Ja, es gibt einen Balkon.', n: 'In a question, *gibt* comes first.' },
            { s: 'Im Bad gibt es keine Badewanne, aber eine Dusche.', n: '*die Badewanne*: *keine*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Learn these as phrases: *im Wohnzimmer, im Schlafzimmer, im Bad* (for *das* rooms) and *in der Küche* (for *die Küche*).' },
        ],
        [
          { t: 'text', md: 'You do not need to repeat a noun. For things, use **er** for *der* words, **sie** for *die* words and **es** for *das* words. For the plural, use **sie**.' },
          { t: 'table', caption: 'der, die, das → er, sie, es', explain: ['head'], quiz: true, head: ['Noun', 'Pronoun'], rows: [
            ['der Tisch', 'er'],
            ['die Lampe', 'sie'],
            ['das Sofa', 'es'],
            ['die Stühle', 'sie'],
          ] },
          { t: 'examples', items: [
            { s: 'Der Tisch? **Er** ist neu.', n: '*der* → *er*.' },
            { s: 'Die Küche? **Sie** ist klein.', n: '*die* → *sie*.' },
            { s: 'Das Bett? **Es** ist sehr bequem.', n: '*das* → *es*.' },
            { s: 'Die Stühle? **Sie** sind alt.', n: 'Plural → *sie*, with *sind*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'This is different from English. In German, things can be *er* or *sie*: *Der Tisch* is *er*, not *es*.' },
        ],
        [
          { t: 'ex', kind: 'label', scene: 'kitchen', h: 'Label the kitchen. Two new words: *der Topf* (pot) and *der Wasserkocher* (kettle).', extra: ['das Bett', 'das Sofa'], items: [
            { x: 160, y: 50, a: 'das Fenster', why: '*das Fenster*: the window.' },
            { x: 260, y: 70, a: 'der Kühlschrank', why: '*der Kühlschrank*: it keeps food cold.' },
            { x: 71, y: 100, a: 'der Topf', why: '*der Topf*: you cook soup in it.' },
            { x: 156, y: 100, a: 'der Wasserkocher', why: '*der Wasserkocher*: you make hot water for tea in it.' },
            { x: 160, y: 165, a: 'der Schrank', why: '*der Schrank*: the cupboard.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Tap the odd one out.', items: [
            { o: ['das Bett', 'die Küche', 'das Bad', 'das Wohnzimmer'], why: '*das Bett* is furniture. The others are rooms.' },
            { o: ['die Dusche', 'der Tisch', 'der Stuhl', 'der Schrank'], why: '*die Dusche* is a *die* word. The others are *der* words.' },
            { o: ['der Garten', 'das Sofa', 'das Regal', 'der Stuhl'], why: '*der Garten* is outside. The others are furniture.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write ein, eine, einen or keinen.', items: [
            { q: 'Im Bad gibt es ___ Dusche.', a: ['eine'], why: '*die Dusche*: *eine*.' },
            { q: 'In der Küche gibt es ___ Kühlschrank.', a: ['einen'], why: '*der Kühlschrank*, Akkusativ: *einen*.' },
            { q: 'Im Wohnzimmer gibt es ___ Sofa.', a: ['ein'], why: '*das Sofa*: *ein*.' },
            { q: 'Es gibt ___ Balkon. Schade!', a: ['keinen'], why: '*der Balkon*: *keinen*. *Schade* shows it is a no.' },
            { q: 'Gibt es ___ Garten?', a: ['einen'], why: '*der Garten*, Akkusativ: *einen*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose er, sie or es.', items: [
            { q: 'Wie ist die Küche? – ___ ist sehr klein.', o: ['Sie', 'Er', 'Es'], why: '*die Küche* → *sie*.' },
            { q: 'Ist der Schrank neu? – Ja, ___ ist neu.', o: ['er', 'sie', 'es'], why: '*der Schrank* → *er*.' },
            { q: 'Wo ist das Bett? – ___ ist im Schlafzimmer.', o: ['Es', 'Er', 'Sie'], why: '*das Bett* → *es*.' },
            { q: 'Sind die Stühle teuer? – Nein, ___ sind billig.', o: ['sie', 'er', 'es'], why: 'Plural → *sie*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'hell, groß, blau',
      about: 'Adjectives and colours after sein, and nicht or kein.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'After **sein**, adjectives have no ending: *Die Wohnung ist hell. Das Sofa ist neu.* Learn adjectives in pairs, with the opposite.' },
          { t: 'table', caption: 'Adjectives', explain: ['head'], quiz: true, head: ['Adjective', 'Opposite'], rows: [
            ['groß', 'klein'],
            ['hell', 'dunkel'],
            ['neu', 'alt'],
            ['teuer', 'billig'],
            ['schön', 'hässlich'],
            ['ruhig', 'laut'],
            ['bequem', 'unbequem'],
          ] },
          { t: 'examples', items: [
            { s: 'Das Wohnzimmer ist groß und hell.', n: 'Two adjectives with *und*.' },
            { s: 'Die Wohnung ist schön, aber teuer.', n: '*aber* means but.' },
            { s: 'Die Straße ist sehr laut.', n: '*sehr* makes it stronger.' },
            { s: 'Das Sofa ist ein bisschen unbequem.', n: '*un-* makes the opposite: *bequem → unbequem*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Colours are adjectives too: *Das Sofa ist grau.* To ask about a colour, say *Welche Farbe hat …?*' },
          { t: 'table', caption: 'Colours', explain: ['head', 'col0'], quiz: true, head: ['Colour', 'German'], rows: [
            ['white', 'weiß'],
            ['black', 'schwarz'],
            ['red', 'rot'],
            ['blue', 'blau'],
            ['green', 'grün'],
            ['yellow', 'gelb'],
            ['grey', 'grau'],
            ['brown', 'braun'],
          ] },
          { t: 'examples', items: [
            { s: 'Welche Farbe hat der Teppich? – Er ist rot.', n: '*der Teppich* (the carpet) → *er*.' },
            { s: 'Die Küche ist weiß und sehr modern.', n: 'The adjective after *ist* has no ending.' },
            { s: 'Mein Bett ist hellblau.', n: '*hell* + colour: light blue.' },
          ] },
          { t: 'tip', art: 'owl', md: '*hell* and *dunkel* go with colours: *hellblau* (light blue), *dunkelgrün* (dark green). Write it as one word.' },
        ],
        [
          { t: 'text', md: 'Use **kein** with a noun that has *ein* or no article: *Es gibt keinen Balkon.* Use **nicht** with adjectives, with verbs and with nouns that have *der, die, das*: *Die Küche ist nicht groß.*' },
          { t: 'table', caption: 'nicht or kein?', explain: ['head', 'col0'], head: ['', 'Yes', 'No'], rows: [
            ['ein + noun', 'Das ist ein Balkon.', 'Das ist kein Balkon.'],
            ['noun, no article', 'Ich habe Zeit.', 'Ich habe keine Zeit.'],
            ['adjective', 'Das Bad ist groß.', 'Das Bad ist nicht groß.'],
            ['der, die, das + noun', 'Das ist die Küche.', 'Das ist nicht die Küche.'],
            ['verb', 'Ich wohne hier.', 'Ich wohne nicht hier.'],
          ] },
          { t: 'tip', art: 'owl', md: 'A quick test: is there *ein* or no article in the yes sentence? Then say *kein*. In all other sentences, say *nicht*.' },
        ],
        [
          { t: 'ex', kind: 'memory', h: 'Find the pairs: each adjective and its opposite.', pairs: [
            ['hell', 'dunkel'], ['teuer', 'billig'], ['neu', 'alt'], ['laut', 'ruhig'], ['groß', 'klein'], ['schön', 'hässlich'],
          ] },
          { t: 'ex', kind: 'crossword', h: 'Solve the crossword: colours.', words: [
            { a: 'rot', clue: 'Tomaten sind …' },
            { a: 'gelb', clue: 'Bananen sind …' },
            { a: 'grün', clue: 'Gras ist …' },
            { a: 'blau', clue: 'Der Himmel ist im Sommer …' },
            { a: 'schwarz', clue: 'Kaffee ohne Milch ist …' },
            { a: 'braun', clue: 'Schokolade ist oft …' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'nicht or kein? Choose.', items: [
            { q: 'Die Wohnung hat ___ Balkon.', o: ['keinen', 'nicht', 'kein'], why: 'A noun without *der*: use *kein*. *der Balkon*, Akkusativ: *keinen*.' },
            { q: 'Das Zimmer ist ___ hell.', o: ['nicht', 'kein', 'keine'], why: '*hell* is an adjective: use *nicht*.' },
            { q: 'Wir haben ___ Waschmaschine.', o: ['keine', 'nicht', 'kein'], why: 'A noun without *der*: use *kein*. *die Waschmaschine*: *keine*.' },
            { q: 'Ich wohne ___ in Berlin.', o: ['nicht', 'kein', 'keine'], why: 'You say no to the verb *wohne*: use *nicht*.' },
            { q: 'Das ist ___ Sofa, das ist ein Bett.', o: ['kein', 'nicht', 'keine'], why: '*ein Sofa* becomes *kein Sofa*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write it correctly.', items: [
            { s: 'Die Küche ist [kein] groß.', a: ['nicht'], why: '*groß* is an adjective: use *nicht*.' },
            { s: 'Es gibt [nicht] Garten.', a: ['keinen'], why: 'A noun without *der*: use *kein*. *der Garten*: *keinen*.' },
            { s: 'Das Sofa ist [rote].', a: ['rot'], why: 'After *sein*, the adjective has no ending.' },
            { s: 'Die Lampe? [Er] ist neu.', a: ['Sie'], why: '*die Lampe* → *sie*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Wo ist das Bad?',
      about: 'Ask where things are and ask questions about a flat.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To ask where something is, say **Wo ist …?** For the plural, say **Wo sind …?** Answer with *hier* (here), *dort* or *da* (there), *links* (on the left) and *rechts* (on the right).' },
          { t: 'dialogue', title: 'Die neue Wohnung', lines: [
            { who: 'Sabine', s: 'Guten Tag, Herr Haddad! Das ist die Wohnung.' },
            { who: 'Omar', s: 'Guten Tag! Wie viele Zimmer hat die Wohnung?' },
            { who: 'Sabine', s: 'Sie hat zwei Zimmer, eine Küche und ein Bad.' },
            { who: 'Omar', s: 'Und wie groß ist sie?' },
            { who: 'Sabine', s: 'Sie ist 60 Quadratmeter groß.' },
            { who: 'Omar', s: 'Wo ist die Küche?' },
            { who: 'Sabine', s: 'Hier links ist die Küche. Sie ist neu.' },
            { who: 'Omar', s: 'Schön! Und wo ist das Bad?' },
            { who: 'Sabine', s: 'Das Bad ist dort rechts.' },
            { who: 'Omar', s: 'Gibt es auch einen Balkon?' },
            { who: 'Sabine', s: 'Ja, im Wohnzimmer. Dort ist er.' },
            { who: 'Omar', s: 'Toll! Was kostet die Wohnung?' },
            { who: 'Sabine', s: 'Die Miete ist 690 Euro im Monat.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Questions about a flat', explain: ['head'], head: ['Question', 'Answer'], rows: [
            ['Wo ist die Küche?', 'Hier links.'],
            ['Wo sind die Zimmer?', 'Dort rechts.'],
            ['Wie viele Zimmer hat die Wohnung?', 'Sie hat zwei Zimmer.'],
            ['Wie groß ist die Wohnung?', 'Sie ist 60 Quadratmeter groß.'],
            ['Gibt es einen Balkon?', 'Ja, es gibt einen Balkon.'],
            ['Was kostet die Wohnung?', 'Die Miete ist 690 Euro im Monat.'],
          ] },
          { t: 'tip', art: 'owl', md: '*Wie viele* asks for a number: *Wie viele Zimmer?* (how many rooms?). *Quadratmeter* means square metres, often written *m²*. *die Miete* is the money you pay for the flat every month.' },
          { t: 'examples', items: [
            { s: 'Wo ist mein Handy? – Es ist hier.', n: '*das Handy* → *es*.' },
            { s: 'Wo sind die Stühle? – Sie sind dort.', n: 'Plural: *Wo sind …?*' },
            { s: 'Das Bad ist links, das Schlafzimmer ist rechts.', n: '*links* and *rechts* come after the verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the right answer.', pairs: [
            ['Wo ist die Küche?', 'Hier links.'],
            ['Wie viele Zimmer hat die Wohnung?', 'Drei Zimmer.'],
            ['Wie groß ist die Wohnung?', '75 Quadratmeter.'],
            ['Gibt es einen Balkon?', 'Nein, leider nicht.'],
            ['Was kostet die Wohnung?', '800 Euro im Monat.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Wo ___ die Stühle?', o: ['sind', 'ist', 'bin'], why: '*die Stühle* is plural: *sind*.' },
            { q: '___ Zimmer hat die Wohnung?', o: ['Wie viele', 'Wie', 'Wo'], why: '*Wie viele* asks for a number.' },
            { q: 'Wo ist das Bad? – ___', o: ['Es ist dort rechts.', 'Es ist 60 Quadratmeter.', 'Es ist drei Zimmer.'], why: '*Wo?* asks for a place: *dort rechts*.' },
            { q: '___ ist die Küche? – Hier links.', o: ['Wo', 'Wie', 'Was'], why: 'The answer is a place, so the question is *Wo?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the questions and sentences.', items: [
            { a: 'Wie viele Zimmer hat die Wohnung?', why: '*Wie viele Zimmer* first, then the verb *hat*.' },
            { a: 'Die Küche ist hier links.', why: 'The verb *ist* is in position 2.' },
            { a: 'Wo ist das Schlafzimmer?', why: 'Question word, verb, then the noun.' },
            { a: 'Gibt es einen Balkon?', why: 'A yes/no question: *Gibt* comes first.' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Complete with words from the box.', extra: ['ist', 'Euro'], items: [
            { q: 'Ist die Küche hier? – Nein, sie ist ___ rechts.', a: 'dort', why: '*dort*: there, not here.' },
            { q: 'Wo ___ die Lampen?', a: 'sind', why: '*die Lampen* is plural: *sind*.' },
            { q: 'Wie ___ Zimmer hat das Haus?', a: 'viele', why: '*Wie viele …?* asks for a number.' },
            { q: 'Die Wohnung ist 80 ___ groß.', a: 'Quadratmeter', why: 'The size of a flat is in *Quadratmeter*.' },
            { q: 'Im Bad ___ es eine Dusche.', a: 'gibt', why: '*es gibt* + Akkusativ: *Im Bad gibt es eine Dusche.*' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A new flat',
      about: 'Read a flat advert and an email about a new flat.',
      art: 'parrot',
      spreads: [
        [
          { t: 'reading', title: 'Wohnung zu vermieten', md: '**Schöne 3-Zimmer-Wohnung in der Altstadt**\n\nDie Wohnung ist 70 m² groß und sehr hell. Es gibt ein Wohnzimmer, zwei Schlafzimmer, eine Küche und ein Bad mit Dusche. Die Küche ist neu. Es gibt einen Balkon, aber keinen Garten.\n\nDie Wohnung ist im 3. Stock. Es gibt keinen Aufzug.\n\nMiete: 820 Euro im Monat\nKontakt: wohnung@example.com' },
          { t: 'reading', title: 'Eine E-Mail', md: 'Liebe Rosa,\n\nich habe eine neue Wohnung! Sie ist in der Altstadt. Die Wohnung hat drei Zimmer, eine Küche und ein Bad. Das Wohnzimmer ist groß und hell. Mein Schlafzimmer ist klein, aber sehr schön. Das zweite Schlafzimmer ist für Gäste. Die Küche ist neu und modern. Es gibt auch einen Balkon. Dort trinke ich am Morgen Kaffee.\n\nDie Wohnung ist im 3. Stock, und es gibt keinen Aufzug. Das ist nicht so toll! Die Miete ist nicht billig, aber die Wohnung ist super.\n\nKommst du bald? Das Gästezimmer ist frei!\n\nLiebe Grüße\nHana' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Die Wohnung ist hell.', a: 't', why: '*Die Wohnung ist 70 m² groß und sehr hell.*' },
            { q: 'Die Wohnung hat zwei Schlafzimmer.', a: 't', why: '*Es gibt ein Wohnzimmer, zwei Schlafzimmer …*' },
            { q: 'Es gibt einen Aufzug.', a: 'f', why: '*Es gibt keinen Aufzug.*' },
            { q: 'Hanas Schlafzimmer ist groß.', a: 'f', why: '*Mein Schlafzimmer ist klein, aber sehr schön.*' },
            { q: 'Die Miete ist 820 Euro im Monat.', a: 't', why: 'The advert says *Miete: 820 Euro im Monat*.' },
            { q: 'Hana hat eine Katze.', a: 'ng', why: 'The email says nothing about a cat.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the advert and the email again and choose.', items: [
            { q: 'Wo ist die Wohnung?', o: ['in der Altstadt', 'im Garten', 'im Haus von Rosa'], why: '*Sie ist in der Altstadt.*' },
            { q: 'Was macht Hana am Morgen auf dem Balkon?', o: ['Sie trinkt Kaffee.', 'Sie isst Kuchen.', 'Sie schläft.'], why: '*Dort trinke ich am Morgen Kaffee.*' },
            { q: 'Was ist nicht so toll?', o: ['Es gibt keinen Aufzug.', 'Die Küche ist modern.', 'Das Wohnzimmer ist hell.'], why: '*… es gibt keinen Aufzug. Das ist nicht so toll!*' },
            { q: 'Für wen ist das zweite Schlafzimmer?', o: ['für Gäste', 'für Hanas Kinder', 'für Hana'], why: '*Das zweite Schlafzimmer ist für Gäste.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Im Bad gibt es ___ Dusche.', o: ['eine', 'einen', 'ein'], why: '*die Dusche*: *eine*.' },
      { q: 'Der Schrank? ___ ist neu.', o: ['Er', 'Sie', 'Es'], why: '*der Schrank* → *er*.' },
      { q: 'Die Wohnung hat ___ Garten.', o: ['keinen', 'nicht', 'kein'], why: 'A noun without *der*: *kein*. *der Garten*, Akkusativ: *keinen*.' },
      { q: 'Das Zimmer ist ___ hell.', o: ['nicht', 'kein', 'keine'], why: '*hell* is an adjective: *nicht*.' },
      { q: '___ Zimmer hat die Wohnung?', o: ['Wie viele', 'Wo', 'Was'], why: '*Wie viele* asks for a number.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'In der Küche gibt es ___ Kühlschrank. (ein)', a: ['einen'], why: '*der Kühlschrank*, Akkusativ: *einen*.' },
      { q: 'Wo ___ die Stühle?', a: ['sind'], why: 'Plural: *sind*.' },
      { q: 'Die Wohnung ist nicht teuer. Sie ist ___.', a: ['billig', 'günstig'], why: 'The opposite of *teuer* is *billig*.' },
      { q: 'Das Wohnzimmer ist nicht dunkel. Es ist ___.', a: ['hell'], why: 'The opposite of *dunkel* is *hell*.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'der, die or das? Sort the words.', groups: ['der', 'die', 'das'], items: [
      { s: 'Tisch', g: 0, why: '*der Tisch*' },
      { s: 'Lampe', g: 1, why: '*die Lampe*' },
      { s: 'Bett', g: 2, why: '*das Bett*' },
      { s: 'Schlafzimmer', g: 2, why: '*das Zimmer → das Schlafzimmer*' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write it correctly.', items: [
      { s: 'Die Küche ist [kein] modern.', a: ['nicht'], why: '*modern* is an adjective: use *nicht*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Wo ist das Bad?', why: 'Question word, verb, then the noun.' },
      { a: 'Im Wohnzimmer gibt es ein Sofa.', why: '*Im Wohnzimmer* is position 1, so *gibt* comes next, then *es*.' },
    ] },
  ],
};
