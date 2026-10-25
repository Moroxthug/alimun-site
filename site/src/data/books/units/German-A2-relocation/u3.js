// German A2 for moving abroad, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'A place to live',
  goal: 'Understand a simple flat advert and talk to a landlord on the phone.',
  art: 'cactus',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['housing', 'rooms-furniture', 'flat-adverts', 'phone-calls', 'accusative-pronouns'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Rooms and rent',
      about: 'The words for rooms, furniture and rent in a flat advert.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'When you look for a flat (*eine Wohnung*), you need the words for the rooms. Always learn a noun with its article.' },
          { t: 'table', caption: 'In der Wohnung', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['das Zimmer', 'room'],
            ['das Wohnzimmer', 'living room'],
            ['das Schlafzimmer', 'bedroom'],
            ['die Küche', 'kitchen'],
            ['das Bad', 'bathroom'],
            ['der Flur', 'hall'],
            ['der Balkon', 'balcony'],
            ['der Keller', 'cellar'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Germany, the kitchen and the bathroom are not counted as rooms. A *2-Zimmer-Wohnung* has two rooms **plus** a kitchen and a bathroom.' },
        ],
        [
          { t: 'text', md: 'Adverts show the rent in two ways. **Kaltmiete** is the rent without heating and other costs. **Nebenkosten** are the costs for heating, water and the building. Together they are the **Warmmiete**: what you pay every month.' },
          { t: 'table', caption: 'Money and the flat', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['die Miete', 'the rent'],
            ['die Kaltmiete', 'rent without heating and other costs'],
            ['die Nebenkosten', 'heating, water and building costs'],
            ['die Warmmiete', 'the total rent each month'],
            ['die Kaution', 'the deposit'],
            ['möbliert', 'with furniture'],
            ['die WG', 'a shared flat'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Germany, flats often come **without** a kitchen. *Einbauküche* means the kitchen stays in the flat. The deposit (*Kaution*) is usually not more than three months of *Kaltmiete*.' },
        ],
        [
          { t: 'reading', title: 'Anzeige', md: '2-Zimmer-Wohnung, 55 m², Küche, Bad, Balkon. Kaltmiete 610 €, Nebenkosten 150 €. Frei ab 1. Dezember.' },
          { t: 'ex', kind: 'choice', h: 'Read the advert. Choose the answer.', items: [
            { q: 'Die Warmmiete ist ___.', o: ['760 €', '610 €', '460 €'], why: '*Kaltmiete* + *Nebenkosten* = *Warmmiete*: 610 + 150.' },
            { q: 'Die Wohnung hat ___.', o: ['zwei Zimmer, eine Küche und ein Bad', 'ein Zimmer, eine Küche und ein Bad', 'zwei Zimmer, aber kein Bad'], why: 'Kitchen and bathroom are not counted: two rooms plus kitchen and bathroom.' },
            { q: 'Man kann ___ einziehen.', o: ['im Dezember', 'sofort', 'im Januar'], why: '*Frei ab 1. Dezember*: from 1 December.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Where is it usually? Match the thing and the room.', pairs: [
            ['das Bett', 'das Schlafzimmer'],
            ['der Herd', 'die Küche'],
            ['die Dusche', 'das Bad'],
            ['das Sofa', 'das Wohnzimmer'],
            ['die Garderobe', 'der Flur'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Die Wohnung hat zwei ___, eine Küche und ein Bad.', a: ['Zimmer'], why: '*das Zimmer*, plural *die Zimmer*: the plural has no ending.' },
            { q: 'Die Miete ohne Heizung und Nebenkosten heißt ___.', a: ['Kaltmiete'], why: '*kalt*: without heating.' },
            { q: 'Im ___ steht mein Bett.', a: ['Schlafzimmer'], why: '*schlafen* + *Zimmer*: the bedroom.' },
            { q: 'Die Wohnung ist ___: Bett, Tisch und Schrank sind schon da.', a: ['möbliert', 'moebliert'], why: '*möbliert*: with furniture (*Möbel*).' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Calling about a flat',
      about: 'Phone a landlord, ask if the flat is free and when you can see it.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Start the call with your name and the reason: *Mein Name ist … Ich rufe wegen der Wohnung in der … an.* Then ask your questions. In German, people often answer the phone with their surname only.' },
          { t: 'examples', items: [
            { s: 'Ist die Wohnung **noch frei**?', n: 'Is it still available?' },
            { s: 'Wann kann ich **sie** sehen?', n: '*sie* = *die Wohnung*. Feminine in the Akkusativ: *sie*.' },
            { s: 'Wie hoch **sind** die Nebenkosten?', n: '*die Nebenkosten* is plural: *sind*.' },
            { s: 'Ich rufe **wegen** der Wohnung **an**.', n: '*wegen der Wohnung*: about the flat. *anrufen* is separable: *an* at the end.' },
          ] },
          { t: 'table', caption: 'Pronouns in the Akkusativ', explain: ['head'], quiz: true, head: ['Noun', 'Pronoun'], rows: [
            ['der Balkon', 'ihn'],
            ['das Zimmer', 'es'],
            ['die Wohnung', 'sie'],
            ['die Zimmer (plural)', 'sie'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Am Telefon', lines: [
            { who: 'Herr Schulz', s: 'Schulz.' },
            { who: 'Mei', s: 'Guten Tag, Herr Schulz. Mein Name ist Mei Lin. Ich rufe wegen der Wohnung in der Ahornstraße an. Ist sie noch frei?' },
            { who: 'Herr Schulz', s: 'Ja, sie ist noch frei.' },
            { who: 'Mei', s: 'Wie hoch sind die Nebenkosten?' },
            { who: 'Herr Schulz', s: '160 Euro im Monat. Heizung und Wasser sind dabei.' },
            { who: 'Mei', s: 'Gibt es eine Küche?' },
            { who: 'Herr Schulz', s: 'Ja, die Küche ist neu.' },
            { who: 'Mei', s: 'Wann kann ich die Wohnung sehen?' },
            { who: 'Herr Schulz', s: 'Am Donnerstag um 18 Uhr. Geht das?' },
            { who: 'Mei', s: 'Ja, das passt gut. Wie ist die Adresse genau?' },
            { who: 'Herr Schulz', s: 'Ahornstraße 21, dritter Stock. Klingeln Sie bei Schulz.' },
            { who: 'Mei', s: 'Vielen Dank. Bis Donnerstag!' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the call. True or false?', items: [
            { q: 'Die Wohnung ist noch frei.', a: 't', why: '*Ja, sie ist noch frei.*' },
            { q: 'Die Heizung ist in den Nebenkosten.', a: 't', why: '*Heizung und Wasser sind dabei.*' },
            { q: 'Die Wohnung hat keine Küche.', a: 'f', why: '*Die Küche ist neu.*' },
            { q: 'Mei sieht die Wohnung am Dienstag.', a: 'f', why: 'The viewing is on Thursday, *am Donnerstag*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the landlord answer?', items: [
            { q: 'Ist die Wohnung noch frei?', o: ['Nein, leider nicht mehr.', 'Nein, sie kostet 600 Euro.', 'Ja, ich bin frei.'], why: 'The question is about the flat, so the answer is about the flat.' },
            { q: 'Wann kann ich die Wohnung sehen?', o: ['Morgen um 17 Uhr.', 'Seit drei Jahren.', 'Im Wohnzimmer.'], why: '*Wann?* asks for a time.' },
            { q: 'Wie hoch ist die Kaution?', o: ['Zwei Monatsmieten.', 'Im zweiten Stock.', 'Zwei Zimmer.'], why: '*Wie hoch* asks about an amount of money.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right pronoun.', items: [
            { q: 'Der Balkon ist sehr schön. Kann ich ___ sehen?', o: ['ihn', 'es', 'sie'], why: '*der Balkon* is masculine. Akkusativ: *ihn*.' },
            { q: 'Das Zimmer ist noch frei. Wann kann ich ___ sehen?', o: ['es', 'ihn', 'sie'], why: '*das Zimmer* is neuter: *es*.' },
            { q: 'Die Wohnung gefällt mir. Ich nehme ___.', o: ['sie', 'ihn', 'es'], why: '*die Wohnung* is feminine: *sie*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the questions for the call.', items: [
            { a: 'Wann kann ich die Wohnung sehen?', why: 'Question word, *kann*, *ich*, the object, and *sehen* at the end.' },
            { a: 'Ist die Wohnung noch frei?', why: 'A yes/no question: the verb *ist* first.' },
            { a: 'Wie hoch sind die Nebenkosten?', why: '*Wie hoch* first, then the verb *sind*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the call.', items: [
            { q: 'Ich rufe wegen der Wohnung ___. (anrufen)', a: ['an'], why: '*anrufen* is separable: *an* goes to the end.' },
            { q: 'Der Keller ist groß. Kann ich ___ auch sehen?', a: ['ihn'], why: '*der Keller* is masculine. Akkusativ: *ihn*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Three adverts',
      about: 'Read three adverts and find the right home for each person.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Wohnungsanzeigen', md: '**Zimmer in netter WG**\nWir sind drei Studierende zwischen 24 und 28 Jahren und suchen ab 1. November eine neue Mitbewohnerin oder einen neuen Mitbewohner. Das Zimmer ist 14 m² groß und möbliert. Küche und Bad teilen wir. Miete: 420 € warm. Bitte nur Nichtraucher!\n\n**Helle 1-Zimmer-Wohnung im Zentrum**\n30 m², 4. Stock ohne Aufzug, kleine Küche, Bad mit Dusche. Kaltmiete 480 €, Nebenkosten 110 €, Kaution 1.440 €. Frei ab sofort. Keine Haustiere.\n\n**Große 3-Zimmer-Wohnung am Stadtrand**\n85 m², Erdgeschoss mit Garten, Küche, Bad, Gäste-WC und Keller. Ideal für Familien: Kindergarten und Schule sind in der Nähe. Kaltmiete 950 €, Nebenkosten 250 €. Frei ab 1. Januar. Besichtigung am Samstag, bitte vorher anrufen.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the adverts. True, false or not given?', items: [
            { q: 'Das WG-Zimmer hat Möbel.', a: 't', why: '*möbliert*: with furniture.' },
            { q: 'Im Haus mit der 1-Zimmer-Wohnung gibt es einen Aufzug.', a: 'f', why: '*4. Stock ohne Aufzug*: no lift.' },
            { q: 'Die Warmmiete der 1-Zimmer-Wohnung ist 590 Euro.', a: 't', why: '480 € *Kaltmiete* + 110 € *Nebenkosten* = 590 €.' },
            { q: 'Die 3-Zimmer-Wohnung hat einen Balkon.', a: 'ng', why: 'The advert says *Garten*, but nothing about a balcony.' },
            { q: 'In der WG darf man rauchen.', a: 'f', why: '*Bitte nur Nichtraucher*: only non-smokers.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which home is right for each person?', items: [
            { q: 'Familie Osei hat zwei kleine Kinder und möchte einen Garten.', o: ['die 3-Zimmer-Wohnung', 'die 1-Zimmer-Wohnung', 'das WG-Zimmer'], why: 'Garden, school and kindergarten nearby: the big flat.' },
            { q: 'Ana studiert, hat keine Möbel und möchte nicht allein wohnen.', o: ['das WG-Zimmer', 'die 1-Zimmer-Wohnung', 'die 3-Zimmer-Wohnung'], why: 'A furnished room with other students.' },
            { q: 'Herr Ivanov arbeitet im Zentrum und braucht sofort eine kleine Wohnung.', o: ['die 1-Zimmer-Wohnung', 'das WG-Zimmer', 'die 3-Zimmer-Wohnung'], why: 'In the centre and *frei ab sofort*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Never send money for a flat before you have seen it and signed a contract (*Mietvertrag*). If an advert is very cheap and the landlord is “abroad”, be careful.' },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the three costs for the 1-room flat.', items: [
            { s: 'Die [Kaltmiete] ist 480 Euro, die [Nebenkosten] sind 110 Euro und die [Kaution] ist 1.440 Euro.', why: 'Rent without extras, the extra costs and the deposit.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Look at the 1-room flat again.', items: [
            { q: 'Die Kaution ist ___ Kaltmieten.', o: ['drei', 'zwei', 'vier'], why: '1.440 € is 3 × 480 €.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Kaltmiete 500 €, Nebenkosten 130 €. Die Warmmiete ist ___.', o: ['630 €', '500 €', '370 €'], why: '500 + 130 = 630.' },
      { q: 'Die Wohnung hat keine Möbel. Sie ist nicht ___.', o: ['möbliert', 'frei', 'warm'], why: '*möbliert*: with furniture.' },
      { q: 'Der Balkon ist groß. Ich möchte ___ sehen.', o: ['ihn', 'es', 'sie'], why: '*der Balkon*: *ihn*.' },
      { q: 'Ist die Wohnung noch frei?', o: ['Ja, Sie können sie am Montag sehen.', 'Ja, ich wohne gern hier.', 'Nein, sie hat einen Balkon.'], why: 'Yes, and the viewing time.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Wie hoch ___ die Nebenkosten? (sein)', a: ['sind'], why: 'Plural: *sind*.' },
      { q: 'Das Zimmer ist ___: Es hat ein Bett und einen Schrank.', a: ['möbliert', 'moebliert'], why: 'With furniture: *möbliert*.' },
      { q: 'Die Wohnung ist schön. Wann kann ich ___ sehen?', a: ['sie'], why: '*die Wohnung*: *sie*.' },
      { q: 'Ich rufe wegen der Wohnung ___. (anrufen)', a: ['an'], why: '*an* goes to the end.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Wann kann ich das Zimmer sehen?', why: '*kann* second, *sehen* at the end.' },
      { a: 'Wie groß ist das Schlafzimmer?', why: '*Wie groß* first, then the verb *ist*.' },
      { a: 'Wie hoch ist die Kaution?', why: '*Wie hoch* + verb + subject.' },
    ] },
  ],
};
