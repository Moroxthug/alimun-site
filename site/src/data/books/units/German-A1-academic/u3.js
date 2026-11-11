// German A1 for study and exams, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Timetable and school things',
  goal: 'Name the things you need in class, say what you have and need, and read a simple course timetable.',
  art: 'mug',
  tags: { skills: ['vocabulary', 'grammar', 'reading'], topics: ['school-things', 'articles', 'accusative-ein-kein', 'days-and-times', 'timetable'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Ich brauche einen Stift',
      about: 'Name school things with der, die, das and say what you have, need or do not have.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'text', md: 'Every German noun has an article: **der**, **die** or **das**. Learn each word with its article. *ein* goes with *der* and *das* words, *eine* with *die* words. The plural article is always *die*.' },
          { t: 'table', caption: 'Things in the classroom', explain: ['head', 'col2'], quiz: true, head: ['Word', 'Plural', 'English'], rows: [
            ['der Stift', 'die Stifte', 'pen'],
            ['der Kuli', 'die Kulis', 'ballpoint pen'],
            ['der Tisch', 'die Tische', 'table'],
            ['der Stuhl', 'die Stühle', 'chair'],
            ['das Heft', 'die Hefte', 'exercise book'],
            ['das Buch', 'die Bücher', 'book'],
            ['das Handy', 'die Handys', 'mobile phone'],
            ['die Tasche', 'die Taschen', 'bag'],
            ['die Tafel', 'die Tafeln', 'board'],
          ] },
        ],
        [
          { t: 'text', md: 'After verbs like **haben**, **brauchen** and **suchen**, the thing is in the **accusative**. Only the *der* words change: *ein* becomes **einen**, *kein* becomes **keinen**. *Kein* means *not a* or *no*.' },
          { t: 'table', caption: 'ein and kein in the accusative', explain: ['head'], head: ['', 'der', 'das', 'die', 'plural'], rows: [
            ['ein', 'einen Stift', 'ein Heft', 'eine Tasche', 'Stifte'],
            ['kein', 'keinen Stift', 'kein Heft', 'keine Tasche', 'keine Stifte'],
          ] },
          { t: 'examples', items: [
            { s: 'Ich brauche **einen** Stift.', n: '*der Stift*: *ein* becomes *einen*.' },
            { s: 'Hast du **ein** Heft?', n: '*das Heft*: *ein* stays *ein*.' },
            { s: 'Ich habe **keine** Tasche.', n: '*die Tasche*: *keine*.' },
            { s: 'Ich habe heute **kein** Buch.', n: '*das Buch*: *kein*.' },
            { s: 'Wir brauchen **keine** Wörterbücher.', n: 'Plural: *keine*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'der, das or die? Sort the words.', groups: ['der', 'das', 'die'], items: [
            { s: 'Stift', g: 0, why: '*der Stift*, plural *die Stifte*.' },
            { s: 'Heft', g: 1, why: '*das Heft*, plural *die Hefte*.' },
            { s: 'Tasche', g: 2, why: '*die Tasche*. Many words with *-e* at the end are *die* words.' },
            { s: 'Stuhl', g: 0, why: '*der Stuhl*, plural *die Stühle*.' },
            { s: 'Buch', g: 1, why: '*das Buch*, plural *die Bücher*.' },
            { s: 'Tafel', g: 2, why: '*die Tafel*: the board in the classroom.' },
          ] },
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'phone', o: ['das Handy', 'die Uhr', 'der Schlüssel'], why: '*das Handy* is a mobile phone.' },
            { pic: 'clock', o: ['die Uhr', 'das Handy', 'das Heft'], why: '*die Uhr*: it shows the time.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write einen, eine, ein, keinen, keine or kein.', items: [
            { q: 'Ich brauche ___ Kuli. (ein)', a: ['einen'], why: '*der Kuli*: in the accusative, *ein* becomes *einen*.' },
            { q: 'Hast du ___ Tasche für mich? (ein)', a: ['eine'], why: '*die Tasche*: *eine* does not change.' },
            { q: 'Ich habe ___ Heft. (kein)', a: ['kein'], why: '*das Heft*: *kein* does not change.' },
            { q: 'Ich habe ___ Stift. Kannst du helfen? (kein)', a: ['keinen'], why: '*der Stift*: *kein* becomes *keinen*.' },
            { q: 'Wir haben heute ___ Hausaufgaben. (kein)', a: ['keine'], why: 'Plural: *keine*.' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Solve the crossword: things in class.', words: [
            { a: 'Heft', clue: 'Hier schreiben Sie die Hausaufgaben.' },
            { a: 'Stuhl', clue: 'Hier sitzen Sie im Kurs.' },
            { a: 'Tafel', clue: 'Hier schreibt die Lehrerin für alle.' },
            { a: 'Tasche', clue: 'Hier sind Ihre Bücher und Stifte.' },
            { a: 'Buch', clue: 'Hier lesen Sie Texte und machen Übungen.' },
            { a: 'Stift', clue: 'Damit schreiben Sie.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Am Montag um neun Uhr',
      about: 'Say the days and the time, and say when your classes are.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'The days of the week are all *der* words: *der Montag, der Dienstag, der Mittwoch, der Donnerstag, der Freitag, der Samstag, der Sonntag*. Use **am** with a day, **um** with a clock time and **von … bis** for the start and the end.' },
          { t: 'examples', items: [
            { s: '**Am** Montag habe ich Deutsch.', n: '*am* + day.' },
            { s: 'Der Kurs beginnt **um** neun Uhr.', n: '*um* + clock time.' },
            { s: 'Die Pause ist **von** halb elf **bis** elf.', n: '*von … bis*: the start and the end.' },
            { s: 'Am Wochenende habe ich keinen Unterricht.', n: '*das Wochenende*: Saturday and Sunday.' },
          ] },
          { t: 'tip', art: 'owl', md: 'When a time word comes first, the verb is still in **second position**, and the subject comes after it: *Am Montag **habe ich** Deutsch.* Not: *Am Montag ich habe*.' },
        ],
        [
          { t: 'text', md: 'There are two ways to say the time. On timetables and in announcements: *neun Uhr dreißig*. In everyday talk: *halb zehn* (half to ten). *Viertel nach* is a quarter past, *Viertel vor* is a quarter to.' },
          { t: 'table', caption: 'The time', explain: ['head'], quiz: true, head: ['Time', 'Official', 'Everyday'], rows: [
            ['9:00', 'neun Uhr', 'neun'],
            ['9:15', 'neun Uhr fünfzehn', 'Viertel nach neun'],
            ['9:30', 'neun Uhr dreißig', 'halb zehn'],
            ['9:45', 'neun Uhr fünfundvierzig', 'Viertel vor zehn'],
            ['14:00', 'vierzehn Uhr', 'zwei'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Before the course', lines: [
            { who: 'Kofi', s: 'Hallo Elif! Wann hast du am Dienstag Unterricht?' },
            { who: 'Elif', s: 'Am Dienstag habe ich von neun bis zwölf Deutsch.' },
            { who: 'Kofi', s: 'Und am Nachmittag?' },
            { who: 'Elif', s: 'Am Nachmittag habe ich frei. Und du?' },
            { who: 'Kofi', s: 'Ich habe um zwei Uhr Mathe an der Universität.' },
            { who: 'Elif', s: 'Wann ist denn die Pause im Deutschkurs?' },
            { who: 'Kofi', s: 'Um halb elf. Sie ist fünfzehn Minuten lang.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Elif hat am Dienstag von neun bis zwölf Deutsch.', a: 't', why: '*Am Dienstag habe ich von neun bis zwölf Deutsch.*' },
            { q: 'Elif hat am Nachmittag Unterricht.', a: 'f', why: '*Am Nachmittag habe ich frei.*' },
            { q: 'Die Pause ist um 10:30 Uhr.', a: 't', why: '*halb elf* is 10:30.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write am, um, von or bis.', items: [
            { q: 'Ich habe ___ Freitag einen Test.', a: ['am'], why: '*am* + day.' },
            { q: 'Der Unterricht beginnt ___ acht Uhr.', a: ['um'], why: '*um* + clock time.' },
            { q: 'Der Kurs ist ___ neun bis zwölf Uhr.', a: ['von'], why: '*von … bis*: *von* comes before the start.' },
            { q: 'Die Bibliothek ist von Montag ___ Samstag offen.', a: ['bis'], why: '*bis* comes before the end.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the time and the words.', pairs: [
            ['10:30', 'halb elf'],
            ['8:15', 'Viertel nach acht'],
            ['11:45', 'Viertel vor zwölf'],
            ['7:30', 'halb acht'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order. Start with the time.', items: [
            { a: 'Am Montag habe ich Deutsch.', why: 'The time first, then the verb *habe*, then the subject *ich*.' },
            { a: 'Um neun Uhr beginnt der Kurs.', why: '*Um neun Uhr* first, then the verb *beginnt*, then *der Kurs*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a timetable and a message',
      about: 'Find days, times and rooms in a timetable, and understand a short message about a change.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Here is the timetable of an A1 course. Read the days, times and rooms.' },
          { t: 'table', caption: 'Stundenplan Deutsch A1', head: ['Tag', 'Zeit', 'Unterricht', 'Raum'], rows: [
            ['Montag', '9:00–12:00', 'Deutsch: Grammatik', '12'],
            ['Dienstag', '9:00–12:00', 'Deutsch: Lesen und Schreiben', '12'],
            ['Mittwoch', '14:00–15:30', 'Aussprache', '20'],
            ['Donnerstag', '9:00–12:00', 'Deutsch: Sprechen', '12'],
            ['Freitag', '9:00–10:30', 'Test und Wiederholung', '5'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Look at the timetable. Choose the right answer.', items: [
            { q: 'Wann ist der Aussprachekurs?', o: ['am Mittwoch um 14 Uhr', 'am Montag um 9 Uhr', 'am Freitag um 14 Uhr'], why: 'Mittwoch, 14:00–15:30: *Aussprache*.' },
            { q: 'In welchem Raum ist der Test?', o: ['in Raum 5', 'in Raum 12', 'in Raum 20'], why: 'Freitag, *Test und Wiederholung*, Raum 5.' },
            { q: 'Wann hat man keinen Unterricht?', o: ['am Samstag', 'am Dienstag', 'am Donnerstag'], why: 'Saturday is not in the timetable.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Nachricht von Frau Becker', md: 'Liebe Kursteilnehmerinnen und Kursteilnehmer,\n\nam Mittwoch ist der Aussprachekurs nicht in Raum 20. Er ist in Raum 8 im Erdgeschoss. Der Kurs beginnt um halb drei, nicht um zwei Uhr.\n\nAm Freitag haben wir einen Test. Bitte bringen Sie einen Kuli mit. Sie brauchen kein Buch und kein Handy.\n\nViele Grüße\nSabine Becker' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the message. True, false or not given?', items: [
            { q: 'Am Mittwoch ist der Aussprachekurs in Raum 8.', a: 't', why: '*Er ist in Raum 8 im Erdgeschoss.*' },
            { q: 'Der Aussprachekurs beginnt am Mittwoch um 14 Uhr.', a: 'f', why: 'It begins at *halb drei*, 14:30, not at two.' },
            { q: 'Für den Test braucht man einen Kuli.', a: 't', why: '*Bitte bringen Sie einen Kuli mit.*' },
            { q: 'Der Test ist sehr schwer.', a: 'ng', why: 'The message says nothing about how hard the test is.' },
            { q: 'Man braucht für den Test ein Buch.', a: 'f', why: '*Sie brauchen kein Buch.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the note about the message with the words.', extra: ['Raum 20', 'zwei Uhr'], items: [
            { q: 'Mittwoch: Aussprache in ___', a: 'Raum 8', why: 'The course is in room 8 this week, not in room 20.' },
            { q: 'Beginn: ___', a: 'halb drei', why: 'The new time is *halb drei*.' },
            { q: 'Freitag: ___', a: 'Test', why: '*Am Freitag haben wir einen Test.*' },
            { q: 'Mitbringen: ___', a: 'einen Kuli', why: '*Bitte bringen Sie einen Kuli mit.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words for things you have in class.', items: [
            { s: 'Bitte bringen Sie einen [Kuli] mit. Sie brauchen kein [Buch] und kein [Handy].', why: '*der Kuli*, *das Buch*, *das Handy*: things you can bring to class.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich brauche ___ Stift.', o: ['einen', 'ein', 'eine'], why: '*der Stift*: in the accusative, *einen*.' },
      { q: 'Ich habe ___ Tasche.', o: ['keine', 'keinen', 'kein'], why: '*die Tasche*: *keine*.' },
      { q: '___ Montag habe ich Deutsch.', o: ['Am', 'Um', 'Von'], why: '*am* + day.' },
      { q: 'Es ist 9:30 Uhr. Es ist ___.', o: ['halb zehn', 'halb neun', 'Viertel nach neun'], why: '*halb zehn*: half an hour before ten.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Der Kurs beginnt ___ acht Uhr.', a: ['um'], why: '*um* + clock time.' },
      { q: 'Hast du ein Heft? Nein, ich habe ___ Heft.', a: ['kein'], why: '*das Heft*: *kein* does not change.' },
      { q: 'Das Buch, die ___ (plural)', a: ['Bücher', 'Buecher'], why: 'The plural of *das Buch* is *die Bücher*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Am Freitag haben wir einen Test.', why: 'The time first, then the verb, then the subject *wir*.' },
      { a: 'Ich brauche einen Kuli.', why: 'Subject, verb, then the accusative *einen Kuli*.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'der, das or die?', groups: ['der', 'das', 'die'], items: [
      { s: 'Tisch', g: 0, why: '*der Tisch*.' },
      { s: 'Handy', g: 1, why: '*das Handy*.' },
      { s: 'Tafel', g: 2, why: '*die Tafel*.' },
    ] },
  ],
};
