// German A1, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'My day',
  goal: 'Say what you do during the day, tell the time and make appointments.',
  art: 'mug',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['time', 'days-of-the-week', 'separable-verbs', 'word-order', 'daily-routine', 'appointments'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'What time is it?',
      about: 'Tell the time and say the days of the week.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To ask the time, say **Wie spät ist es?** or **Wie viel Uhr ist es?** The answer starts with *Es ist …*\n\nThere are two ways to say the time. The **official** time uses 24 hours. You hear it at the station, on the radio and at work. The **everyday** time uses 12 hours and the words *nach*, *vor*, *Viertel* and *halb*.' },
          { t: 'table', caption: 'Telling the time', explain: ['head'], quiz: true, head: ['Time', 'Official', 'Everyday'], rows: [
            ['8:00', 'acht Uhr', 'acht'],
            ['8:10', 'acht Uhr zehn', 'zehn nach acht'],
            ['8:15', 'acht Uhr fünfzehn', 'Viertel nach acht'],
            ['8:30', 'acht Uhr dreißig', 'halb neun'],
            ['8:45', 'acht Uhr fünfundvierzig', 'Viertel vor neun'],
            ['8:50', 'acht Uhr fünfzig', 'zehn vor neun'],
            ['20:00', 'zwanzig Uhr', 'acht'],
          ] },
          { t: 'tip', art: 'owl', md: 'Be careful with **halb**. *Halb neun* is 8:30: half an hour **before** nine. Many learners say 9:30 by mistake.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Wie spät ist es? – Es ist **Viertel nach drei**.', n: '3:15, everyday time.' },
            { s: 'Es ist **halb zwölf**.', n: '11:30: half an hour before twelve.' },
            { s: 'Der Zug kommt um **vierzehn Uhr zwanzig**.', n: '14:20, official time, as at the station.' },
            { s: 'Es ist **fünf vor sechs**.', n: '5:55: five minutes before six.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What time is it? Choose the everyday time.', items: [
            { q: '7:30 – Es ist ___.', o: ['halb acht', 'halb sieben', 'sieben halb'], why: '*halb acht*: half an hour before eight.' },
            { q: '4:15 – Es ist ___.', o: ['Viertel nach vier', 'Viertel vor vier', 'Viertel nach fünf'], why: 'A quarter after four: *Viertel nach vier*.' },
            { q: '9:45 – Es ist ___.', o: ['Viertel vor zehn', 'Viertel vor neun', 'Viertel nach zehn'], why: 'A quarter before ten: *Viertel vor zehn*.' },
            { q: '1:05 – Es ist ___.', o: ['fünf nach eins', 'fünf vor eins', 'eins fünf nach'], why: 'Five minutes after one: *fünf nach eins*.' },
            { q: '6:50 – Es ist ___.', o: ['zehn vor sieben', 'zehn nach sieben', 'zehn vor sechs'], why: 'Ten minutes before seven: *zehn vor sieben*.' },
          ] },
        ],
        [
          { t: 'text', md: 'The days of the week are all masculine: *der Montag*. Use **am** with a day, **um** with a time, and **von … bis** for a start and an end.' },
          { t: 'table', caption: 'Die Wochentage', quiz: true, head: ['Tag', 'am …'], rows: [
            ['der Montag', 'am Montag'],
            ['der Dienstag', 'am Dienstag'],
            ['der Mittwoch', 'am Mittwoch'],
            ['der Donnerstag', 'am Donnerstag'],
            ['der Freitag', 'am Freitag'],
            ['der Samstag', 'am Samstag'],
            ['der Sonntag', 'am Sonntag'],
          ] },
          { t: 'examples', items: [
            { s: '**Am** Dienstag habe ich Deutsch.', n: '*am* + day.' },
            { s: 'Der Kurs beginnt **um** sechs Uhr.', n: '*um* + time.' },
            { s: 'Ich arbeite **von** neun **bis** fünf.', n: '*von … bis*: from … to.' },
            { s: 'Das Café ist **von** Montag **bis** Freitag offen.', n: 'With *von … bis*, you can leave out *am*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Parts of the day also take **am**: *am Morgen, am Vormittag, am Mittag, am Nachmittag, am Abend*. But at night is **in der Nacht**.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write am, um, von or bis.', items: [
            { q: 'Ich habe ___ Freitag frei.', a: ['am'], why: 'A day takes *am*.' },
            { q: 'Der Film beginnt ___ acht Uhr.', a: ['um'], why: 'A time takes *um*.' },
            { q: 'Wir arbeiten von acht ___ vier.', a: ['bis'], why: '*von … bis*: the end time comes after *bis*.' },
            { q: 'Was machst du ___ Abend?', a: ['am'], why: 'Parts of the day take *am*: *am Abend*.' },
            { q: 'Die Bank ist ___ neun bis zwölf offen.', a: ['von'], why: 'The start time comes after *von*.' },
            { q: 'Kommst du ___ halb drei?', a: ['um'], why: 'A time takes *um*, also with *halb*.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: the time and the words.', pairs: [
            ['10:30', 'halb elf'],
            ['2:15', 'Viertel nach zwei'],
            ['5:45', 'Viertel vor sechs'],
            ['12:00', 'zwölf Uhr'],
            ['3:20', 'zwanzig nach drei'],
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Write the days of the week.', words: [
            { a: 'Montag', clue: 'Der erste Tag der Woche.' },
            { a: 'Mittwoch', clue: 'Der Tag nach Dienstag.' },
            { a: 'Freitag', clue: 'Der Tag vor Samstag.' },
            { a: 'Sonntag', clue: 'Der letzte Tag der Woche.' },
            { a: 'Donnerstag', clue: 'Der Tag vor Freitag.' },
          ] },
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'clock', o: ['die Uhr', 'der Tag', 'die Woche'], why: '*die Uhr* tells you the time.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'aufstehen, einkaufen, anrufen',
      about: 'Use separable verbs and put the small part at the end.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Some verbs have two parts: **auf** + **stehen** = *aufstehen* (to get up). In a sentence, the verb goes in position 2 and the small part (*auf*) goes to the **end**. The two parts are like a bracket around the sentence.' },
          { t: 'table', caption: 'Separable verbs', explain: ['head'], quiz: true, head: ['Infinitive', 'In a sentence'], rows: [
            ['aufstehen', 'Ich **stehe** um sieben **auf**.'],
            ['einkaufen', 'Ich **kaufe** im Supermarkt **ein**.'],
            ['anrufen', 'Ich **rufe** meine Mutter **an**.'],
            ['fernsehen', 'Ich **sehe** am Abend **fern**.'],
            ['anfangen', 'Der Kurs **fängt** um neun **an**.'],
            ['aufräumen', 'Ich **räume** die Küche **auf**.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the dictionary, the infinitive is one word: *aufstehen*. The stress is on the small part: **auf**stehen, **ein**kaufen, **an**rufen.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Lena **steht** jeden Tag um sechs **auf**.', n: '*stehen* in position 2, *auf* at the end.' },
            { s: 'Wir **kaufen** am Samstag **ein**.', n: '*einkaufen*: *ein* at the end.' },
            { s: '**Rufst** du mich morgen **an**?', n: 'In a question, the verb is first. *an* is still at the end.' },
            { s: 'Paul **sieht** am Abend **fern**.', n: '*fernsehen*: *sehen → er sieht*.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the verb.', verb: 'aufstehen', tense: 'present', rows: [
            ['ich', 'stehe auf'],
            ['du', 'stehst auf'],
            ['er / sie / es', 'steht auf'],
            ['wir', 'stehen auf'],
            ['ihr', 'steht auf'],
            ['sie / Sie', 'stehen auf'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the small part at the end.', items: [
            { q: 'Ich stehe um halb sieben ___. (aufstehen)', a: ['auf'], why: '*aufstehen*: *auf* goes to the end.' },
            { q: 'Wir kaufen heute im Supermarkt ___. (einkaufen)', a: ['ein'], why: '*einkaufen*: *ein* goes to the end.' },
            { q: 'Sara ruft ihren Bruder ___. (anrufen)', a: ['an'], why: '*anrufen*: *an* goes to the end.' },
            { q: 'Der Deutschkurs fängt um sechs ___. (anfangen)', a: ['an'], why: '*anfangen*: *an* goes to the end.' },
            { q: 'Siehst du am Abend ___? (fernsehen)', a: ['fern'], why: '*fernsehen*: *fern* goes to the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Ich stehe um sieben Uhr auf.', why: '*stehe* in position 2, *auf* at the end.' },
            { a: 'Wir kaufen am Freitag ein.', why: '*kaufen* in position 2, *ein* at the end.' },
            { a: 'Rufst du mich heute an?', why: 'A yes/no question starts with the verb. *an* is at the end.' },
            { a: 'Der Film fängt um acht an.', why: '*fängt* in position 2, *an* at the end.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and correct it.', items: [
            { s: 'Ich stehe um sechs Uhr [an].', a: ['auf'], why: 'To get up is *aufstehen*: *Ich stehe … auf.*' },
            { s: 'Ich rufe am Abend meine Mutter [auf].', a: ['an'], why: 'To phone is *anrufen*: *Ich rufe … an.*' },
            { s: 'Der Kurs fängt um neun [ein].', a: ['an'], why: 'To start is *anfangen*: *Der Kurs fängt … an.*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Am Montag arbeite ich',
      about: 'Talk about your daily routine and start a sentence with a time.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'These verbs help you talk about your day. Some are separable.' },
          { t: 'table', caption: 'Mein Tag', explain: ['head', 'col1'], quiz: true, head: ['German', 'English'], rows: [
            ['aufstehen', 'to get up'],
            ['frühstücken', 'to have breakfast'],
            ['zur Arbeit gehen', 'to go to work'],
            ['arbeiten / lernen', 'to work / to study'],
            ['zu Mittag essen', 'to have lunch'],
            ['nach Hause kommen', 'to come home'],
            ['kochen', 'to cook'],
            ['ins Bett gehen', 'to go to bed'],
          ] },
          { t: 'ex', kind: 'match', h: 'What goes together?', pairs: [
            ['Am Morgen', 'frühstücke ich.'],
            ['Um zwölf', 'esse ich zu Mittag.'],
            ['Am Abend', 'koche ich.'],
            ['Um elf', 'gehe ich ins Bett.'],
          ] },
        ],
        [
          { t: 'text', md: 'In German, the verb is always in **position 2**. Very often the sentence starts with the person: *Ich arbeite am Montag.* But you can also start with a time. Then the verb stays in position 2, and the person comes **after** the verb: *Am Montag arbeite ich.*' },
          { t: 'table', caption: 'The verb in position 2', explain: ['head'], head: ['Position 1', 'Position 2: verb', 'The rest'], rows: [
            ['Ich', 'arbeite', 'am Montag.'],
            ['Am Montag', 'arbeite', 'ich.'],
            ['Um sieben', 'stehe', 'ich auf.'],
            ['Am Abend', 'sieht', 'Paul fern.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Count the parts, not the words. *Am Montag* is two words, but it is one part: position 1.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['Am Sonntag schlafe ich lange.', 'Am Sonntag ich schlafe lange.', 'Am Sonntag lange ich schlafe.'], why: 'The time is in position 1, so the verb *schlafe* is next, then *ich*.' },
            { q: '', o: ['Um acht frühstückt Jonas.', 'Um acht Jonas frühstückt.', 'Jonas um acht frühstückt.'], why: 'The verb is always in position 2.' },
            { q: '', o: ['Am Abend kocht meine Frau.', 'Am Abend meine Frau kocht.', 'Kocht am Abend meine Frau.'], why: 'Time, verb, person. A sentence that starts with the verb is a question.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Start the sentence with the time.', items: [
            { q: 'Ich gehe um acht zur Arbeit.', cue: 'Um acht', a: ['Um acht gehe ich zur Arbeit.'], why: 'The time goes first, then the verb *gehe*, then *ich*.' },
            { q: 'Wir essen am Mittag zusammen.', cue: 'Am Mittag', a: ['Am Mittag essen wir zusammen.'], why: 'Time, verb, person: *Am Mittag essen wir …*' },
            { q: 'Sara steht am Samstag spät auf.', cue: 'Am Samstag', a: ['Am Samstag steht Sara spät auf.'], why: 'The verb *steht* stays in position 2. *auf* stays at the end.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Making an appointment', lines: [
            { who: 'Lena', s: 'Hallo Tarek! Hast du am Mittwoch Zeit?' },
            { who: 'Tarek', s: 'Am Mittwoch? Nein, da arbeite ich bis sechs.' },
            { who: 'Lena', s: 'Und am Donnerstag?' },
            { who: 'Tarek', s: 'Am Donnerstag habe ich frei. Um wie viel Uhr?' },
            { who: 'Lena', s: 'Um halb vier im Café?' },
            { who: 'Tarek', s: 'Gut, das passt. Bis Donnerstag!' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Tarek arbeitet am Mittwoch.', a: 't', why: '*Am Mittwoch … arbeite ich bis sechs.*' },
            { q: 'Tarek hat am Donnerstag frei.', a: 't', why: '*Am Donnerstag habe ich frei.*' },
            { q: 'Sie treffen sich um 15:30 Uhr.', a: 't', why: '*halb vier* is 3:30, so 15:30.' },
            { q: 'Sie treffen sich im Kino.', a: 'f', why: 'They meet in the café: *im Café*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the text about Mira’s day.', extra: ['abends', 'Nacht'], items: [
            { q: 'Mira steht um sechs Uhr ___.', a: 'auf', why: '*aufstehen*: *auf* at the end.' },
            { q: 'Um halb sieben ___ sie.', a: 'frühstückt', why: 'Time first, then the verb in position 2: *frühstückt sie*.' },
            { q: 'Sie arbeitet ___ acht bis vier.', a: 'von', why: '*von … bis*: from … to.' },
            { q: 'Am Abend ___ sie oft für ihre Kinder.', a: 'kocht', why: 'Verb in position 2: *Am Abend kocht sie*.' },
            { q: 'Um zehn geht sie ins ___.', a: 'Bett', why: '*ins Bett gehen*: to go to bed.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Reading: a week and a new time',
      about: 'Read a week planner and a message that changes an appointment.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'reading', title: 'Ninas Woche', md: '**Montag:** 8 bis 16 Uhr Arbeit. 18 Uhr Deutschkurs.\n\n**Dienstag:** 8 bis 16 Uhr Arbeit. Am Abend Mama anrufen!\n\n**Mittwoch:** frei. 10 Uhr Arzt. Am Nachmittag einkaufen.\n\n**Donnerstag:** 8 bis 16 Uhr Arbeit. 18 Uhr Deutschkurs.\n\n**Freitag:** 8 bis 13 Uhr Arbeit. 15 Uhr Kaffee mit Clara.\n\n**Samstag:** lange schlafen! 11 Uhr Wohnung aufräumen.\n\n**Sonntag:** Fußball mit Ben, 14 Uhr im Park.' },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Nina hat am Montag und am Donnerstag Deutschkurs.', a: 't', why: 'Monday and Thursday: *18 Uhr Deutschkurs*.' },
            { q: 'Am Mittwoch arbeitet Nina.', a: 'f', why: 'Wednesday: *frei*. She goes to the doctor and shopping.' },
            { q: 'Am Freitag arbeitet Nina bis 16 Uhr.', a: 'f', why: 'On Friday she works from 8 to 13 Uhr.' },
            { q: 'Am Samstag steht Nina spät auf.', a: 't', why: '*lange schlafen*: she sleeps late.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Eine Nachricht von Clara', md: 'Hallo Nina,\n\nes tut mir leid, aber am Freitag um drei kann ich nicht. Ich arbeite bis fünf. Hast du am Samstag Zeit? Um elf vielleicht? Oder am Sonntag um zehn? Wir können im Café am Markt frühstücken.\n\nRuf mich bitte an!\n\nClara' },
          { t: 'ex', kind: 'choice', h: 'Read the message and Nina’s week. Choose.', items: [
            { q: 'Warum kann Clara am Freitag um drei nicht?', o: ['Sie arbeitet bis fünf.', 'Sie hat Deutschkurs.', 'Sie geht zum Arzt.'], why: '*Ich arbeite bis fünf.*' },
            { q: 'Kann Nina am Samstag um elf?', o: ['Nein, da räumt sie die Wohnung auf.', 'Ja, da hat sie frei.', 'Nein, da spielt sie Fußball.'], why: 'Saturday 11 Uhr: *Wohnung aufräumen*.' },
            { q: 'Welcher Termin passt für Nina?', o: ['Sonntag um zehn', 'Samstag um elf', 'Freitag um drei'], why: 'On Sunday, football is at 14 Uhr. So 10 Uhr is free.' },
            { q: 'Was möchte Clara?', o: ['einen Anruf von Nina', 'eine E-Mail von Nina', 'einen Kuchen von Nina'], why: '*Ruf mich bitte an!*: Clara wants Nina to phone her.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the two parts of the separable verb.', items: [
            { s: 'Am Samstag [räumt] Nina die Wohnung [auf].', why: '*aufräumen*: *räumt* in position 2, *auf* at the end.' },
            { s: '[Ruf] mich bitte [an]!', why: '*anrufen*: *ruf* first, *an* at the end.' },
            { s: 'Am Mittwoch [kauft] Nina am Nachmittag [ein].', why: '*einkaufen*: *kauft* in position 2, *ein* at the end.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '8:30 – Es ist ___.', o: ['halb neun', 'halb acht', 'acht halb'], why: '*halb neun*: half an hour before nine.' },
      { q: '11:45 – Es ist Viertel ___ zwölf.', o: ['vor', 'nach', 'halb'], why: 'A quarter before twelve: *Viertel vor zwölf*.' },
      { q: 'Ich habe ___ Sonntag frei.', o: ['am', 'um', 'im'], why: 'A day takes *am*.' },
      { q: 'Der Kurs beginnt ___ sieben Uhr.', o: ['um', 'am', 'von'], why: 'A time takes *um*.' },
      { q: '', o: ['Am Montag arbeite ich.', 'Am Montag ich arbeite.', 'Ich am Montag arbeite.'], why: 'The verb is in position 2. After a time, the person comes after the verb.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Ich stehe jeden Tag um sechs ___. (aufstehen)', a: ['auf'], why: '*aufstehen*: *auf* at the end.' },
      { q: 'Wir ___ am Samstag im Supermarkt ein. (einkaufen)', a: ['kaufen'], why: '*einkaufen*: *kaufen* in position 2, *ein* at the end.' },
      { q: 'Die Praxis ist von acht ___ zwölf offen.', a: ['bis'], why: '*von … bis*: from … to.' },
      { q: 'Der Tag nach Montag ist ___.', a: ['Dienstag', 'der Dienstag'], why: 'Monday, Tuesday: *Montag, Dienstag*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Am Abend sehe ich fern.', why: 'Time, verb, person. *fern* at the end.' },
      { a: 'Rufst du mich morgen an?', why: 'Question: the verb first, *an* at the end.' },
    ] },
    { t: 'ex', kind: 'odd', h: 'Which word does not belong?', items: [
      { o: ['Abend', 'Montag', 'Freitag', 'Sonntag'], why: '*Abend* is a part of the day. The others are days of the week.' },
      { o: ['kochen', 'aufstehen', 'einkaufen', 'anrufen'], why: '*kochen* is not separable. The others have a small part that goes to the end.' },
    ] },
  ],
};
