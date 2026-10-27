// German A1 for moving abroad, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Hello, I am new here',
  goal: 'Greet people, say who you are and where you come from, and understand a short welcome note.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['greetings', 'introductions', 'du-sie', 'sein', 'countries', 'numbers-0-20'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Hello and goodbye',
      about: 'Say hello and goodbye, and choose between du and Sie.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In your first days you say hello to many new people: at the hotel, at the office, in your new house. Germans often greet with a short **Hallo** or **Guten Tag**, and they often shake hands when they meet someone for the first time.' },
          { t: 'table', caption: 'Hello and goodbye', explain: ['head', 'col1'], quiz: true, head: ['German', 'When'], rows: [
            ['Guten Morgen!', 'in the morning'],
            ['Guten Tag!', 'during the day, polite'],
            ['Guten Abend!', 'in the evening'],
            ['Hallo!', 'any time, friendly'],
            ['Auf Wiedersehen!', 'goodbye, polite'],
            ['Tschüss!', 'goodbye, friendly'],
            ['Gute Nacht!', 'before you go to bed'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the south of Germany and in Austria you also hear *Grüß Gott* or *Servus*. In the north, people often say *Moin*.' },
        ],
        [
          { t: 'dialogue', title: 'Im Hotel', lines: [
            { who: 'Rezeptionistin', s: 'Guten Abend!' },
            { who: 'Omar', s: 'Guten Abend. Mein Name ist Omar Haddad. Ich habe eine Reservierung.' },
            { who: 'Rezeptionistin', s: 'Herzlich willkommen, Herr Haddad! Sie haben Zimmer 12.' },
            { who: 'Omar', s: 'Danke. Ich bin neu hier. Ich komme aus Jordanien.' },
            { who: 'Rezeptionistin', s: 'Willkommen in Deutschland! Hier ist Ihr Schlüssel.' },
            { who: 'Omar', s: 'Vielen Dank!' },
            { who: 'Rezeptionistin', s: 'Bitte schön. Gute Nacht!' },
          ] },
          { t: 'text', md: 'There are two words for *you*. Say **Sie** to adults you do not know, at the office, in a shop, to your landlord. Say **du** to children, friends, family and often to young people. Many colleagues say *du* too. If you are not sure, start with *Sie*.' },
          { t: 'examples', items: [
            { s: 'Wie heißen **Sie**?', n: 'Polite. *Sie* has a capital *S*.' },
            { s: 'Wie heißt **du**?', n: 'Friendly, for a child or a friend.' },
            { s: 'Sind Sie neu hier? – Ja, ich bin neu hier.', n: '*neu hier*: new here.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What do you say at this time?', pairs: [
            ['8 Uhr, im Büro', 'Guten Morgen!'],
            ['14 Uhr, im Geschäft', 'Guten Tag!'],
            ['19 Uhr, im Restaurant', 'Guten Abend!'],
            ['23 Uhr, ins Bett', 'Gute Nacht!'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best words.', items: [
            { q: 'You leave the citizens’ office. You say: ___', o: ['Auf Wiedersehen!', 'Tschüss, du!', 'Gute Nacht!'], why: 'At an office, say goodbye politely: *Auf Wiedersehen*.' },
            { q: 'You meet a new friend at a party. You ask: ___', o: ['Wie heißt du?', 'Wie heißen Sie?', 'Wie heißt Sie?'], why: 'At a party with young people, *du* is normal: *Wie heißt du?*' },
            { q: 'Your landlord is 60 years old. You ask: ___', o: ['Wie geht es Ihnen?', 'Wie geht’s dir?', 'Wie geht es du?'], why: 'An older person you do not know well: say *Sie*. *Wie geht es Ihnen?* is the polite form.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Is it for du or for Sie?', groups: ['du', 'Sie'], items: [
            { s: 'Wie heißt du?', g: 0, why: '*heißt* goes with *du*.' },
            { s: 'Wie heißen Sie?', g: 1, why: '*heißen* goes with *Sie*.' },
            { s: 'Woher kommst du?', g: 0, why: '*kommst* goes with *du*.' },
            { s: 'Woher kommen Sie?', g: 1, why: '*kommen* goes with *Sie*.' },
            { s: 'Bist du neu hier?', g: 0, why: '*bist* goes with *du*.' },
            { s: 'Sind Sie neu hier?', g: 1, why: '*sind* goes with *Sie*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Ich bin neu hier.', why: '*Ich*, then the verb *bin*, then *neu hier*.' },
            { a: 'Mein Name ist Omar Haddad.', why: '*Mein Name* is the subject. The verb *ist* comes second.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Who are you?',
      about: 'Say your name, where you come from and where you live, with sein and simple verbs.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The verb **sein** (to be) is the most important verb. You need it to say who you are: *Ich bin Priya. Ich bin neu hier.* Learn all its forms.' },
          { t: 'table', caption: 'sein (to be)', explain: ['head'], quiz: true, head: ['Person', 'sein'], rows: [
            ['ich', 'bin'],
            ['du', 'bist'],
            ['er / sie / es', 'ist'],
            ['wir', 'sind'],
            ['ihr', 'seid'],
            ['sie / Sie', 'sind'],
          ] },
          { t: 'examples', items: [
            { s: 'Ich **bin** Ingenieurin.', n: 'No *eine* before a job: *Ich bin Ingenieurin*.' },
            { s: 'Wir **sind** aus Indien.', n: '*aus* + country: where you are from.' },
            { s: 'Herr Becker **ist** mein Vermieter.', n: '*der Vermieter*: the landlord.' },
          ] },
        ],
        [
          { t: 'text', md: 'Most verbs follow one pattern. Take away *-en* and add the ending: *komm-en* → *ich komm**e***, *du komm**st***. Questions start with a question word, and the verb comes **second**: *Woher **kommen** Sie?*' },
          { t: 'table', caption: 'kommen, wohnen, heißen', explain: ['head'], quiz: true, head: ['Person', 'kommen', 'wohnen', 'heißen'], rows: [
            ['ich', 'komme', 'wohne', 'heiße'],
            ['du', 'kommst', 'wohnst', 'heißt'],
            ['er / sie', 'kommt', 'wohnt', 'heißt'],
            ['wir', 'kommen', 'wohnen', 'heißen'],
            ['Sie', 'kommen', 'wohnen', 'heißen'],
          ] },
          { t: 'tip', art: 'owl', md: '*Wie?* asks for your name. *Woher?* asks where you come from. *Wo?* asks where you live now. With *heißen*, the *du* form is *heißt*, not *heißst*.' },
        ],
        [
          { t: 'dialogue', title: 'Der Vermieter', lines: [
            { who: 'Priya', s: 'Guten Tag! Ich bin Priya Sharma, die neue Mieterin.' },
            { who: 'Herr Becker', s: 'Ah, Frau Sharma! Herzlich willkommen. Ich bin Herr Becker.' },
            { who: 'Priya', s: 'Freut mich, Herr Becker.' },
            { who: 'Herr Becker', s: 'Woher kommen Sie?' },
            { who: 'Priya', s: 'Ich komme aus Indien, aus Pune. Ich arbeite hier in Hamburg.' },
            { who: 'Herr Becker', s: 'Sehr schön. Hier ist Ihr Schlüssel. Die Wohnung ist Nummer 8.' },
            { who: 'Priya', s: 'Nummer 8. Danke schön!' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Herr Becker ist der Vermieter.', a: 't', why: 'Priya is the new *Mieterin* (tenant). Herr Becker gives her the key.' },
            { q: 'Priya kommt aus Hamburg.', a: 'f', why: 'She comes from Pune, in India. She works in Hamburg.' },
            { q: 'Priyas Wohnung ist Nummer 8.', a: 't', why: '*Die Wohnung ist Nummer 8.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of sein.', verb: 'sein', tense: 'present', rows: [
            ['ich', 'bin'],
            ['du', 'bist'],
            ['er / sie / es', 'ist'],
            ['wir', 'sind'],
            ['Sie', 'sind'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Ich ___ aus Brasilien. (kommen)', a: ['komme'], why: 'With *ich*, the ending is *-e*: *ich komme*.' },
            { q: 'Wo ___ du? (wohnen)', a: ['wohnst'], why: 'With *du*, the ending is *-st*: *du wohnst*.' },
            { q: 'Wie ___ Sie? (heißen)', a: ['heißen'], why: 'With *Sie*, the verb looks like the infinitive: *Sie heißen*.' },
            { q: 'Er ___ mein Nachbar. (sein)', a: ['ist'], why: '*er ist*: *sein* is irregular.' },
          ] },
        ],
        [
          { t: 'text', md: 'Numbers help you with rooms, flats and house numbers. Learn 0 to 20. From 13 to 19, say the small number first and add *-zehn*: *dreizehn*, *vierzehn*. Careful with *sechzehn* and *siebzehn*: they are shorter.' },
          { t: 'table', caption: 'Numbers 0 to 20', quiz: true, head: ['Number', 'German'], rows: [
            ['0', 'null'], ['1', 'eins'], ['2', 'zwei'], ['3', 'drei'], ['4', 'vier'], ['5', 'fünf'], ['6', 'sechs'],
            ['7', 'sieben'], ['8', 'acht'], ['9', 'neun'], ['10', 'zehn'], ['11', 'elf'], ['12', 'zwölf'],
            ['13', 'dreizehn'], ['16', 'sechzehn'], ['17', 'siebzehn'], ['20', 'zwanzig'],
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: the number and the word.', pairs: [
            ['3', 'drei'],
            ['8', 'acht'],
            ['11', 'elf'],
            ['12', 'zwölf'],
            ['16', 'sechzehn'],
            ['17', 'siebzehn'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A welcome note',
      about: 'Read a welcome note from a neighbour and short introductions in a group chat.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Priya finds a note in her new flat. It is from her neighbour Jana. Jana writes *du*: she is young and friendly.' },
          { t: 'reading', title: 'Herzlich willkommen!', md: 'Liebe Priya,\n\nherzlich willkommen in Hamburg! Ich bin Jana. Ich wohne auch hier, in Wohnung 7. Ich bin 29 Jahre alt und ich bin Lehrerin.\n\nDas WLAN heißt Haus12. Das Passwort ist auf dem Router.\n\nDer Supermarkt ist links, nur zwei Minuten. Die Bäckerei ist rechts. Am Sonntag sind die Geschäfte zu.\n\nHast du Fragen? Meine Nummer ist 0123 456 789. Ich bin abends zu Hause.\n\nViele Grüße\nJana' },
          { t: 'ex', kind: 'tf', h: 'Read the note. True or false?', items: [
            { q: 'Jana wohnt in Wohnung 7.', a: 't', why: '*Ich wohne auch hier, in Wohnung 7.*' },
            { q: 'Jana ist Ärztin.', a: 'f', why: 'She is a teacher: *Ich bin Lehrerin*.' },
            { q: 'Die Bäckerei ist links.', a: 'f', why: 'The supermarket is on the left. The bakery is on the right: *Die Bäckerei ist rechts.*' },
            { q: 'Am Sonntag sind die Geschäfte geschlossen.', a: 't', why: '*zu* means closed. In Germany most shops are closed on Sundays.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Gruppe: Deutschkurs A1', md: 'Arjun: Hallo zusammen! Ich heiße Arjun. Ich komme aus Indien und wohne jetzt in Köln. Ich spreche Englisch, Hindi und ein bisschen Deutsch.\n\nElif: Hallo! Ich bin Elif. Ich komme aus der Türkei, aus Izmir. Ich bin Krankenschwester. Ich wohne in Köln-Nippes.\n\nMateo: Hi! Mein Name ist Mateo. Ich bin aus Argentinien. Ich bin neu in Köln, seit zwei Wochen. Ich spreche Spanisch und Englisch.' },
          { t: 'ex', kind: 'choice', h: 'Read the chat. Choose the answer.', items: [
            { q: 'Wer spricht Hindi?', o: ['Arjun', 'Elif', 'Mateo'], why: 'Arjun: *Ich spreche Englisch, Hindi und ein bisschen Deutsch.*' },
            { q: 'Woher kommt Elif?', o: ['aus der Türkei', 'aus Indien', 'aus Argentinien'], why: 'Elif: *Ich komme aus der Türkei, aus Izmir.*' },
            { q: 'Wer ist ganz neu in Köln?', o: ['Mateo', 'Arjun', 'Elif'], why: 'Mateo is new in Cologne: *seit zwei Wochen*, for two weeks.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the person and the information.', pairs: [
            ['Arjun', 'Indien'],
            ['Elif', 'Krankenschwester'],
            ['Mateo', 'Spanisch und Englisch'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Most countries have no article: *aus Indien*, *aus Spanien*. A few have one: *aus der Türkei*, *aus der Schweiz*, *aus dem Iran*. Learn them with the article.' },
          { t: 'ex', kind: 'spot', h: 'Tap the three languages.', items: [
            { s: 'Ich spreche [Englisch], [Hindi] und ein bisschen [Deutsch].', why: 'Many languages end in *-isch*, but not all: *Hindi*, *Deutsch*.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Write about yourself like Arjun. One word does not belong.', items: [
            { a: 'Ich komme aus Indien.', extra: ['von'], why: 'For the country you come from, say *aus*, not *von*.' },
            { a: 'Ich wohne jetzt in Köln.', extra: ['wohnst'], why: 'With *ich*: *wohne*. *wohnst* is the *du* form.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'It is 9 pm. You go to bed. You say: ___', o: ['Gute Nacht!', 'Guten Morgen!', 'Guten Tag!'], why: 'Before you go to bed: *Gute Nacht*.' },
      { q: 'At the office: Wie ___ Sie?', o: ['heißen', 'heißt', 'heiße'], why: 'With *Sie*: *heißen*.' },
      { q: 'Woher kommst du? – ___', o: ['Aus Polen.', 'In Berlin.', 'Ich heiße Ana.'], why: '*Woher?* asks where you come from: *aus* + country.' },
      { q: 'Am Sonntag sind die Geschäfte ___.', o: ['zu', 'neu', 'hier'], why: '*zu*: closed.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Wir ___ neu hier. (sein)', a: ['sind'], why: '*wir sind*.' },
      { q: 'Du ___ in Köln. (wohnen)', a: ['wohnst'], why: 'With *du*, the ending is *-st*.' },
      { q: 'Ich komme ___ Spanien.', a: ['aus'], why: '*aus* + country.' },
      { q: 'Elf, zwölf, ___ (13)', a: ['dreizehn'], why: '13: *drei* + *zehn*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Du [bin] neu hier.', a: ['bist'], why: '*du bist*. *bin* goes with *ich*.' },
      { s: 'Ich [heißt] Mateo.', a: ['heiße'], why: 'With *ich*, the ending is *-e*: *ich heiße*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: 'Woher kommen Sie?', why: 'Question word first, then the verb, then *Sie*.' },
      { a: 'Wo wohnst du jetzt?', why: '*Wo*, the verb *wohnst*, then *du*.' },
    ] },
  ],
};
