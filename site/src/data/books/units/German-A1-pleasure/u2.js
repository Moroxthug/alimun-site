// German A1 for travel, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'At the hotel',
  goal: 'Check in, understand room numbers and say what is in your room.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['hotel', 'numbers', 'haben', 'es-gibt', 'kein', 'articles'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'At the reception',
      about: 'Check in with a reservation, understand numbers and use haben.',
      art: 'parrot',
      spreads: [
        [
          { t: 'dialogue', title: 'An der Rezeption', lines: [
            { who: 'Rezeptionist', s: 'Guten Abend! Willkommen im Hotel Linde.' },
            { who: 'Aisha', s: 'Guten Abend! Ich habe eine Reservierung. Mein Name ist Aisha Rahman.' },
            { who: 'Rezeptionist', s: 'Wie schreibt man das, bitte?' },
            { who: 'Aisha', s: 'R, A, H, M, A, N.' },
            { who: 'Rezeptionist', s: 'Danke. Ja, ein Einzelzimmer für drei Nächte. Haben Sie einen Ausweis oder einen Pass?' },
            { who: 'Aisha', s: 'Ja, hier ist mein Pass.' },
            { who: 'Rezeptionist', s: 'Danke. Sie haben Zimmer 47. Hier ist Ihr Schlüssel.' },
            { who: 'Aisha', s: 'Danke! Wann gibt es Frühstück?' },
            { who: 'Rezeptionist', s: 'Von sieben bis zehn Uhr, hier unten im Restaurant.' },
          ] },
          { t: 'text', md: 'At the reception, say *Ich habe eine Reservierung* and then your name. The receptionist gives you the room number and the key: *der Schlüssel*. Many hotels give you a key card: *die Schlüsselkarte*.' },
        ],
        [
          { t: 'text', md: 'Room numbers, prices and phone numbers all need numbers. From 21, German says the small number first: *47* is *sieben-und-vierzig*, seven and forty. It is written as one word: *siebenundvierzig*.' },
          { t: 'table', caption: 'Numbers', quiz: true, head: ['', 'German'], rows: [
            ['12', 'zwölf'],
            ['16', 'sechzehn'],
            ['17', 'siebzehn'],
            ['20', 'zwanzig'],
            ['21', 'einundzwanzig'],
            ['30', 'dreißig'],
            ['47', 'siebenundvierzig'],
            ['60', 'sechzig'],
            ['70', 'siebzig'],
            ['100', 'hundert'],
          ] },
          { t: 'tip', art: 'owl', md: 'Be careful with *sechzehn*, *sechzig*, *siebzehn* and *siebzig*: they lose a few letters of *sechs* and *sieben*. And *dreißig* is written with *ß*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which number is it?', items: [
            { q: 'Ihr Zimmer ist Nummer vierundfünfzig.', o: ['54', '45', '44'], why: 'The small number comes first: *vier-und-fünfzig* is 54.' },
            { q: 'Das Zimmer kostet neunundsechzig Euro.', o: ['69', '96', '79'], why: '*neun-und-sechzig*: nine and sixty, 69.' },
            { q: 'Wir sind im Zimmer achtunddreißig.', o: ['38', '83', '28'], why: '*acht-und-dreißig*: eight and thirty, 38.' },
            { q: 'Das Frühstück kostet zwölf Euro.', o: ['12', '20', '2'], why: '*zwölf* is 12. *zwanzig* is 20.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the number in words.', items: [
            { q: 'Zimmer 23: Zimmer ___', a: ['dreiundzwanzig'], why: 'Three and twenty, written as one word.' },
            { q: 'Zimmer 16: Zimmer ___', a: ['sechzehn'], why: '*sechs* loses its *s*: *sechzehn*.' },
            { q: 'Zimmer 71: Zimmer ___', a: ['einundsiebzig'], why: '*eins* becomes *ein*, and *sieben* becomes *siebzig*.' },
          ] },
        ],
        [
          { t: 'text', md: 'The verb *haben* (to have) is very useful in a hotel: *Ich habe eine Reservierung. Haben Sie ein Zimmer frei? Wir haben zwei Koffer.*' },
          { t: 'ex', kind: 'conjugate', h: 'Write the verb.', verb: 'haben', tense: 'present', rows: [
            ['ich', 'habe'],
            ['du', 'hast'],
            ['er / sie / es', 'hat'],
            ['wir', 'haben'],
            ['ihr', 'habt'],
            ['sie / Sie', 'haben'],
          ] },
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'key', o: ['der Schlüssel', 'der Pass', 'der Koffer'], why: 'You open the door of your room with *der Schlüssel*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Ich habe eine Reservierung.', why: 'The verb *habe* is in second place.' },
            { a: 'Haben Sie ein Zimmer frei?', why: 'A yes/no question starts with the verb. *frei* goes to the end.' },
            { a: 'Wann gibt es Frühstück?', why: 'The question word *wann*, then the verb *gibt*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the form of haben.', items: [
            { q: '___ Sie einen Pass? (haben)', a: ['Haben'], why: 'With *Sie*: *haben*. The verb comes first in a yes/no question.' },
            { q: 'Wir ___ zwei Koffer. (haben)', a: ['haben'], why: 'With *wir*: *haben*.' },
            { q: 'Das Hotel ___ ein Restaurant. (haben)', a: ['hat'], why: '*das Hotel* is *es*, so *hat*.' },
            { q: 'Du ___ Zimmer 12. (haben)', a: ['hast'], why: 'With *du*: *hast*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'In the room',
      about: 'Say what is in your room and what is missing, and ask where things are.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Every German noun has an article: **der**, **die** or **das**. Learn the article with the word: *das Bett*, *die Dusche*, *der Schrank*. All nouns start with a capital letter.' },
          { t: 'table', caption: 'In the hotel room', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['das Bett', 'bed'],
            ['die Dusche', 'shower'],
            ['das Bad', 'bathroom'],
            ['das Handtuch', 'towel'],
            ['der Fernseher', 'TV'],
            ['der Schrank', 'wardrobe'],
            ['die Lampe', 'lamp'],
            ['das Fenster', 'window'],
            ['die Heizung', 'heating'],
          ] },
        ],
        [
          { t: 'text', md: 'To say what is there, use *es gibt*. After *es gibt*, *der* words change: *ein* becomes *einen*. *die* and *das* words do not change.\n\nTo say something is **not** there, use *kein*: *keinen*, *keine*, *kein*.' },
          { t: 'table', caption: 'es gibt', quiz: true, head: ['', 'es gibt …', 'es gibt kein …'], rows: [
            ['der Fernseher', 'einen Fernseher', 'keinen Fernseher'],
            ['die Dusche', 'eine Dusche', 'keine Dusche'],
            ['das Handtuch', 'ein Handtuch', 'kein Handtuch'],
          ] },
          { t: 'examples', items: [
            { s: 'Im Zimmer **gibt es einen** Fernseher.', n: '*der Fernseher*, so *einen*.' },
            { s: 'Im Bad **gibt es kein** Handtuch.', n: 'There is no towel. *das Handtuch*, so *kein*.' },
            { s: 'Die Heizung ist **kaputt**.', n: '*kaputt*: broken, it does not work.' },
            { s: '**Wo ist** der Aufzug?', n: '*der Aufzug*: the lift. *Wo ist …?* asks where something is.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Am Telefon', lines: [
            { who: 'Rezeptionist', s: 'Rezeption, guten Abend.' },
            { who: 'Aisha', s: 'Guten Abend, hier ist Zimmer 47. Im Bad gibt es kein Handtuch.' },
            { who: 'Rezeptionist', s: 'Oh, Entschuldigung! Ich bringe gleich ein Handtuch.' },
            { who: 'Aisha', s: 'Danke. Und die Lampe ist kaputt.' },
            { who: 'Rezeptionist', s: 'Kein Problem, ich bringe auch eine Lampe.' },
            { who: 'Aisha', s: 'Vielen Dank! Und wo ist der Aufzug, bitte?' },
            { who: 'Rezeptionist', s: 'Der Aufzug ist links, neben der Treppe.' },
          ] },
          { t: 'tip', art: 'owl', md: 'When you talk about a word again, you can use *der*, *die* or *das* alone: *Der Aufzug? Der ist links.* People say this a lot in everyday German.' },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'der, die or das?', groups: ['der', 'die', 'das'], items: [
            { s: 'Bett', g: 2, why: '*das Bett*.' },
            { s: 'Dusche', g: 1, why: '*die Dusche*.' },
            { s: 'Schrank', g: 0, why: '*der Schrank*.' },
            { s: 'Fenster', g: 2, why: '*das Fenster*.' },
            { s: 'Lampe', g: 1, why: '*die Lampe*. Many words ending in *-e* are *die* words.' },
            { s: 'Fernseher', g: 0, why: '*der Fernseher*. Many words ending in *-er* for things and people are *der* words.' },
            { s: 'Handtuch', g: 2, why: '*das Handtuch*.' },
            { s: 'Schlüssel', g: 0, why: '*der Schlüssel*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write einen, eine, ein, keinen, keine or kein.', items: [
            { q: 'Im Zimmer gibt es ___ Schrank. (ein)', a: ['einen'], why: '*der Schrank*: after *es gibt*, *ein* becomes *einen*.' },
            { q: 'Im Bad gibt es ___ Dusche. (ein)', a: ['eine'], why: '*die Dusche*: *eine* does not change.' },
            { q: 'Es gibt ___ Fernseher. (kein)', a: ['keinen'], why: '*der Fernseher*: *kein* becomes *keinen*.' },
            { q: 'Es gibt ___ Handtuch. (kein)', a: ['kein'], why: '*das Handtuch*: *kein* does not change.' },
            { q: 'Es gibt ___ Lampe. (kein)', a: ['keine'], why: '*die Lampe*: *keine*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
            { s: 'Im Zimmer gibt es [ein] Fernseher.', a: ['einen'], why: '*der Fernseher* after *es gibt*: *einen Fernseher*.' },
            { s: 'Im Bad gibt es [keinen] Dusche.', a: ['keine'], why: '*die Dusche*: *keine Dusche*.' },
            { s: '[Wie] ist der Aufzug?', a: ['Wo'], why: 'To ask about a place, use *wo*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: information for guests',
      about: 'Read the hotel information sheet and find what you need.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In many hotel rooms there is a page with information for guests: *Informationen für unsere Gäste*. Look for times, the wifi and the phone number of the reception.' },
          { t: 'reading', title: 'Hotel Linde: Informationen für unsere Gäste', md: '**Rezeption:** Die Rezeption ist von 6 bis 23 Uhr geöffnet. Telefon: 9.\n\n**Frühstück:** Es gibt jeden Tag Frühstück im Restaurant, von 7 bis 10 Uhr. Am Samstag und am Sonntag bis 11 Uhr.\n\n**WLAN:** Das WLAN ist kostenlos. Das Passwort ist Linde2027.\n\n**Check-out:** Bitte bis 11 Uhr. Ihr Gepäck können Sie an der Rezeption lassen.\n\n**Parken:** Wir haben keinen Parkplatz. Ein Parkhaus ist in der Bahnhofstraße.\n\nWir wünschen Ihnen einen schönen Aufenthalt!' },
          { t: 'tip', art: 'owl', md: '*kostenlos* means free, it costs nothing. *das Gepäck* is your bags and suitcases.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the information. True, false or not given?', items: [
            { q: 'Die Rezeption ist immer geöffnet.', a: 'f', why: 'It is open from 6 to 23 Uhr, not all night.' },
            { q: 'Am Sonntag gibt es bis 11 Uhr Frühstück.', a: 't', why: '*Am Samstag und am Sonntag bis 11 Uhr.*' },
            { q: 'Das WLAN kostet nichts.', a: 't', why: '*Das WLAN ist kostenlos.*' },
            { q: 'Das Hotel hat einen Parkplatz.', a: 'f', why: '*Wir haben keinen Parkplatz.*' },
            { q: 'Das Hotel hat ein Schwimmbad.', a: 'ng', why: 'The information does not talk about a swimming pool.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Sie möchten die Rezeption anrufen. Sie wählen die ___.', o: ['9', '11', '23'], why: '*Telefon: 9.*' },
            { q: 'Am Montag gibt es Frühstück bis ___.', o: ['10 Uhr', '11 Uhr', '23 Uhr'], why: 'From Monday to Friday, breakfast is from 7 to 10 Uhr.' },
            { q: 'Sie fahren am Abend. Am Morgen ist Check-out. Wo ist Ihr Koffer bis zum Abend?', o: ['an der Rezeption', 'im Zimmer', 'im Parkhaus'], why: '*Ihr Gepäck können Sie an der Rezeption lassen.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that say something is free or not there.', items: [
            { s: 'Das WLAN ist [kostenlos]. Wir haben [keinen] Parkplatz.', why: '*kostenlos*: it costs nothing. *keinen*: there is none.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Zimmer zweiundsechzig ist Zimmer ___.', o: ['62', '26', '72'], why: 'The small number comes first: *zwei-und-sechzig* is 62.' },
      { q: 'An der Rezeption sagen Sie: „Ich ___ eine Reservierung.“', o: ['habe', 'bin', 'hat'], why: '*haben* with *ich*: *habe*.' },
      { q: 'Im Zimmer gibt es ___ Fernseher.', o: ['einen', 'eine', 'ein'], why: '*der Fernseher*: after *es gibt*, *einen*.' },
      { q: 'Sie suchen den Aufzug. Sie fragen: „___ ist der Aufzug?“', o: ['Wo', 'Wann', 'Wie'], why: 'For a place: *wo*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Im Bad gibt es ___ Handtuch. (kein)', a: ['kein'], why: '*das Handtuch*: *kein* does not change.' },
      { q: '___ Sie ein Zimmer frei? (haben)', a: ['Haben'], why: 'A yes/no question starts with the verb.' },
      { q: 'Zimmer 30: Zimmer ___', a: ['dreißig', 'dreissig'], why: '*dreißig* is written with *ß*.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the article.', items: [
      { q: '___ Dusche ist kalt.', o: ['Die', 'Der', 'Das'], why: '*die Dusche*.' },
      { q: '___ Bett ist sehr gut.', o: ['Das', 'Der', 'Die'], why: '*das Bett*.' },
      { q: '___ Schlüssel ist an der Rezeption.', o: ['Der', 'Die', 'Das'], why: '*der Schlüssel*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Im Zimmer gibt es keine Lampe.', why: 'The place first, then *gibt es*, then *keine Lampe*.' },
      { a: 'Wann gibt es Frühstück?', why: 'The question word, then *gibt es*.' },
    ] },
  ],
};
