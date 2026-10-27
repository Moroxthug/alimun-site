// German A1 for study and exams, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Learning and notes',
  goal: 'Say how you like to learn, learn new words with their article and plural, and write and read simple notes and a plan for the week.',
  art: 'snail',
  tags: { skills: ['vocabulary', 'writing', 'reading'], topics: ['learning-strategies', 'word-cards', 'plural', 'gern', 'notes', 'abbreviations', 'study-plan'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Wörter lernen',
      about: 'Learn a new noun with its article and plural, and say how you like to learn.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'When you learn a new noun, learn **three things** together: the article, the word and the plural. *der Stift, die Stifte*. Many learners write them on a **word card** (*die Karteikarte*): the German word on one side, the meaning on the other.' },
          { t: 'table', caption: 'Plural forms', explain: ['head'], quiz: true, head: ['Singular', 'Plural'], rows: [
            ['der Tisch', 'die Tische'],
            ['der Stuhl', 'die Stühle'],
            ['das Buch', 'die Bücher'],
            ['das Wort', 'die Wörter'],
            ['die Übung', 'die Übungen'],
            ['die Karte', 'die Karten'],
            ['der Lehrer', 'die Lehrer'],
            ['das Handy', 'die Handys'],
          ] },
          { t: 'tip', art: 'owl', md: 'Some learners use three colours for the articles, for example blue for *der*, red for *die* and green for *das*. Choose your own colours and use them every time.' },
        ],
        [
          { t: 'text', md: 'To say what you like doing, put **gern** after the verb: *Ich lerne **gern** mit Karten.* For things you do not like doing, say **nicht gern**: *Ich lese **nicht gern** lange Texte.*' },
          { t: 'examples', items: [
            { s: 'Ich lerne **gern** mit Karteikarten.', n: '*gern* comes after the verb.' },
            { s: 'Ich höre **gern** Musik auf Deutsch.', n: 'Listening helps with new words and the sound of German.' },
            { s: 'Ich schreibe **nicht gern** lange Texte.', n: '*nicht gern*: you do not like it.' },
            { s: 'Ich wiederhole die Wörter jeden Tag.', n: '*wiederholen*: learn them again.' },
            { s: 'Am Abend lerne ich zehn neue Wörter.', n: 'The time first, then the verb, then *ich*.' },
          ] },
          { t: 'dialogue', title: 'How do you learn?', lines: [
            { who: 'Sofia', s: 'Daniel, wie lernst du Wörter?' },
            { who: 'Daniel', s: 'Ich lerne gern mit Karten. Ich schreibe das Wort mit Artikel und Plural.' },
            { who: 'Sofia', s: 'Gute Idee. Ich lerne nicht gern mit Karten. Ich höre gern Musik.' },
            { who: 'Daniel', s: 'Musik? Und das hilft?' },
            { who: 'Sofia', s: 'Ja! Ich lese den Text und singe mit. Und ich wiederhole die Wörter jeden Abend.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Write the plural.', items: [
            { q: 'Ich habe drei ___.', base: 'Buch', a: ['Bücher', 'Buecher'], why: '*das Buch, die Bücher*: an umlaut and *-er*.' },
            { q: 'Heute lernen wir zehn neue ___.', base: 'Wort', a: ['Wörter', 'Woerter'], why: '*das Wort, die Wörter*.' },
            { q: 'Wir machen zwei ___.', base: 'Übung', a: ['Übungen', 'Uebungen'], why: 'Words with *-ung* take *-en*: *die Übungen*.' },
            { q: 'Im Raum sind zwölf ___.', base: 'Stuhl', a: ['Stühle', 'Stuehle'], why: '*der Stuhl, die Stühle*: an umlaut and *-e*.' },
          ] },
          { t: 'ex', kind: 'colloc', h: 'What can you do with Wörter? Choose all the right verbs.', items: [
            { key: 'Wörter', o: ['lernen', 'wiederholen', 'schreiben', 'trinken', 'essen'], a: [0, 1, 2], why: 'You learn, repeat and write words. You eat and drink food.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Daniel lernt gern mit Karten.', a: 't', why: '*Ich lerne gern mit Karten.*' },
            { q: 'Sofia lernt auch gern mit Karten.', a: 'f', why: '*Ich lerne nicht gern mit Karten.* She likes music.' },
            { q: 'Sofia wiederholt die Wörter am Abend.', a: 't', why: '*Ich wiederhole die Wörter jeden Abend.*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ich lerne gern mit Karten.', why: '*gern* comes after the verb *lerne*.' },
            { a: 'Ich lese nicht gern lange Texte.', why: '*nicht gern* comes after the verb, then the object.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: singular and plural.', pairs: [
            ['das Heft', 'die Hefte'],
            ['die Tasche', 'die Taschen'],
            ['das Wort', 'die Wörter'],
            ['der Kuli', 'die Kulis'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Notizen und ein Lernplan',
      about: 'Read and write short notes with key words and plan your learning for the week.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In class you do not write full sentences. You write **key words** and short forms. Learners and teachers in Germany often use these short forms. Learn them, so you can read the notes of your classmates and the board.' },
          { t: 'table', caption: 'Short forms', explain: ['head', 'col2'], quiz: true, head: ['Short form', 'Long form', 'English'], rows: [
            ['S.', 'Seite', 'page'],
            ['Ü', 'Übung', 'exercise'],
            ['HA', 'Hausaufgabe', 'homework'],
            ['z. B.', 'zum Beispiel', 'for example'],
            ['Mo, Di, Mi', 'Montag, Dienstag, Mittwoch', 'Monday, Tuesday, Wednesday'],
            ['Min.', 'Minuten', 'minutes'],
          ] },
        ],
        [
          { t: 'text', md: 'Here is Priya’s note from the lesson on Monday. She only writes key words.' },
          { t: 'reading', title: 'Priyas Notiz', md: 'HA für Mi: S. 32, Ü 2 und 3\n\nTest: Fr, 9 Uhr, Raum 5\n\nMitbringen: Kuli, Wörterbuch\n\nNeue Wörter: z. B. die Pause, die Pausen' },
          { t: 'ex', kind: 'choice', h: 'Read Priya’s note. Choose the right answer.', items: [
            { q: 'Für wann sind die Hausaufgaben?', o: ['am Mittwoch', 'am Montag', 'am Freitag'], why: '*HA für Mi*: Mi is *Mittwoch*.' },
            { q: 'Was sind die Hausaufgaben?', o: ['Seite 32, Übung 2 und 3', 'Seite 2, Übung 32', 'Seite 5, Übung 9'], why: '*S.* is *Seite*, *Ü* is *Übung*.' },
            { q: 'Was braucht Priya für den Test?', o: ['einen Kuli und ein Wörterbuch', 'ein Handy', 'kein Buch und keinen Kuli'], why: '*Mitbringen: Kuli, Wörterbuch.*' },
          ] },
        ],
        [
          { t: 'text', md: 'A **study plan** (*der Lernplan*) helps you learn a little every day. Write the day, what you do and how long. When you talk about the plan, start with the day: *Am Montag **lerne ich** zwanzig Minuten Wörter.*' },
          { t: 'table', caption: 'Priyas Lernplan', head: ['Tag', 'Was?', 'Wie lange?'], rows: [
            ['Mo', 'Wörter lernen', '20 Min.'],
            ['Di', 'HA machen', '30 Min.'],
            ['Mi', 'Musik auf Deutsch hören', '15 Min.'],
            ['Do', 'Wörter wiederholen', '20 Min.'],
            ['Fr', 'Test', '–'],
            ['Sa', 'einen Text lesen', '30 Min.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Look at Priya’s plan. Complete the sentences.', items: [
            { q: 'Am Montag ___ Priya zwanzig Minuten Wörter. (lernen)', a: ['lernt'], why: 'The time first, then the verb: *Am Montag lernt Priya …*' },
            { q: 'Am ___ macht sie dreißig Minuten Hausaufgaben.', a: ['Dienstag'], why: '*Di* is *Dienstag*: *HA machen, 30 Min.*' },
            { q: 'Am Mittwoch ___ sie Musik auf Deutsch. (hören)', a: ['hört', 'hoert'], why: '*sie hört*: the verb in second position, after *Am Mittwoch*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the short form and the long form.', pairs: [
            ['S.', 'Seite'],
            ['Ü', 'Übung'],
            ['HA', 'Hausaufgabe'],
            ['z. B.', 'zum Beispiel'],
            ['Do', 'Donnerstag'],
          ] },
          { t: 'ex', kind: 'transform', h: 'Write the note as a sentence. Start with the day.', items: [
            { q: 'Do: Wörter wiederholen', cue: 'Am Donnerstag', a: ['Am Donnerstag wiederhole ich Wörter.', 'Am Donnerstag wiederhole ich die Wörter.'], why: 'The day first, then the verb *wiederhole*, then *ich*.' },
            { q: 'Sa: einen Text lesen', cue: 'Am Samstag', a: ['Am Samstag lese ich einen Text.'], why: 'The day first, then *lese*, then *ich*, then the object.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: learning tips',
      about: 'Read short tips from three learners and find who does what.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A language school asks its learners: *Wie lernen Sie Deutsch?* Here are three answers. Read them and find who learns how.' },
          { t: 'reading', title: 'Wie lernen Sie Deutsch?', md: '**Kwame:** Ich lerne jeden Morgen im Bus. Die Fahrt ist zwanzig Minuten lang. Ich habe die Karteikarten im Handy und lerne zehn Wörter. Am Wochenende wiederhole ich alle Wörter.\n\n**Hana:** Ich lerne nicht gern allein. Am Dienstag und am Donnerstag lerne ich mit zwei Freundinnen aus dem Kurs. Wir sprechen nur Deutsch und machen die Hausaufgaben zusammen.\n\n**Javier:** Ich schreibe gern. Jeden Abend schreibe ich drei oder vier Sätze auf Deutsch: Was mache ich heute? Am Montag liest meine Lehrerin die Sätze und hilft mir.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Who is it? Choose the right person.', items: [
            { q: 'Wer lernt mit Freundinnen?', o: ['Hana', 'Kwame', 'Javier'], why: 'Hana: *Ich lerne mit zwei Freundinnen aus dem Kurs.*' },
            { q: 'Wer lernt im Bus?', o: ['Kwame', 'Hana', 'Javier'], why: 'Kwame: *Ich lerne jeden Morgen im Bus.*' },
            { q: 'Wer schreibt jeden Abend Sätze?', o: ['Javier', 'Kwame', 'Hana'], why: 'Javier: *Jeden Abend schreibe ich drei oder vier Sätze.*' },
          ] },
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Kwame lernt jeden Morgen zehn Wörter.', a: 't', why: '*Ich habe die Karteikarten im Handy und lerne zehn Wörter.*' },
            { q: 'Hana lernt gern allein.', a: 'f', why: '*Ich lerne nicht gern allein.*' },
            { q: 'Hanas Freundinnen kommen aus Spanien.', a: 'ng', why: 'The text says they are from the course, but not where they come from.' },
            { q: 'Javiers Lehrerin liest die Sätze am Montag.', a: 't', why: '*Am Montag liest meine Lehrerin die Sätze.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the time words in Kwame’s text.', items: [
            { s: 'Ich lerne jeden [Morgen] im Bus. Am [Wochenende] wiederhole ich alle Wörter.', why: '*der Morgen* and *das Wochenende* tell you when Kwame learns.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find the learning words.', words: ['Karte', 'Wort', 'Satz', 'Plan', 'Notiz', 'Test'] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Das Buch, die ___', o: ['Bücher', 'Buchs', 'Büchen'], why: 'The plural of *das Buch* is *die Bücher*: an umlaut and *-er*.' },
      { q: 'Ich lerne ___ mit Karten. Das macht Spaß.', o: ['gern', 'nicht gern', 'kein'], why: '*Das macht Spaß*: you like it, so *gern*.' },
      { q: '„S. 12“ bedeutet ___.', o: ['Seite 12', 'Satz 12', 'Samstag, 12 Uhr'], why: '*S.* is short for *Seite*.' },
      { q: '„HA“ bedeutet ___.', o: ['Hausaufgabe', 'Handy', 'halb acht'], why: '*HA* is short for *Hausaufgabe*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Am Abend ___ ich die Wörter. (wiederholen)', a: ['wiederhole'], why: 'The time first, the verb second: *wiederhole ich*.' },
      { q: 'Die Übung, die ___ (plural)', a: ['Übungen', 'Uebungen'], why: 'Words with *-ung* take *-en* in the plural.' },
      { q: 'Ich lese ___ gern lange Texte. Sie sind schwer.', a: ['nicht'], why: 'You do not like it: *nicht gern*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Am Montag lerne ich zehn Wörter.', why: 'The time first, then the verb, then *ich*.' },
      { a: 'Ich höre gern Musik auf Deutsch.', why: '*gern* comes after the verb.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the short form and the long form.', pairs: [
      ['Ü', 'Übung'],
      ['z. B.', 'zum Beispiel'],
      ['Min.', 'Minuten'],
      ['Fr', 'Freitag'],
    ] },
  ],
};
