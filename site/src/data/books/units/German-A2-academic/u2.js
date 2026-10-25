// German A2 for study and exams, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Learning well',
  goal: 'Talk about how you learn and plan your study time: how often you do things, what you want to do and what you have to do.',
  art: 'snail',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['adverbs-of-frequency', 'study-habits', 'modal-verbs', 'study-plan'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'How often do you learn?',
      about: 'Talk about your study habits with immer, oft, manchmal, selten and nie.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Words like *immer* and *nie* say **how often** you do something. They usually come right after the verb: *Ich lerne **oft** am Abend.* They can also start the sentence. Then the verb comes next: *Manchmal lerne ich in der Bibliothek.*' },
          { t: 'table', caption: 'How often? A rough guide', explain: ['head', 'col1'], quiz: true, head: ['German', 'English', '%'], rows: [
            ['immer', 'always', '100 %'],
            ['meistens', 'usually, most of the time', '80 %'],
            ['oft', 'often', '60 %'],
            ['manchmal', 'sometimes', '30 %'],
            ['selten', 'rarely, not often', '10 %'],
            ['nie', 'never', '0 %'],
          ] },
          { t: 'tip', art: 'owl', md: 'You can also say how often with a number: *einmal pro Woche* (once a week), *zweimal am Tag* (twice a day), *jeden Tag* (every day), *jeden Morgen* (every morning).' },
        ],
        [
          { t: 'dialogue', title: 'How do you learn?', lines: [
            { who: 'Priya', s: 'Wie lernst du eigentlich Vokabeln, Kemal?' },
            { who: 'Kemal', s: 'Ich schreibe die Wörter auf Karteikarten. Jeden Morgen wiederhole ich sie im Bus.' },
            { who: 'Priya', s: 'Jeden Morgen? Super. Ich lerne meistens am Abend, aber dann bin ich oft müde.' },
            { who: 'Kemal', s: 'Und hörst du manchmal Podcasts auf Deutsch?' },
            { who: 'Priya', s: 'Ja, zweimal pro Woche beim Kochen. Aber ich spreche selten Deutsch. Ich habe Angst vor Fehlern.' },
            { who: 'Kemal', s: 'Das kenne ich. Komm doch in unsere Lerngruppe! Wir treffen uns immer am Mittwoch und sprechen nur Deutsch.' },
            { who: 'Priya', s: 'Gute Idee, ich komme gern mit.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Kemal lernt Vokabeln mit Karteikarten.', a: 't', why: '*Ich schreibe die Wörter auf Karteikarten.*' },
            { q: 'Priya lernt meistens am Morgen.', a: 'f', why: 'She learns *meistens am Abend*, in the evening.' },
            { q: 'Priya spricht oft Deutsch.', a: 'f', why: '*Ich spreche selten Deutsch*: she rarely speaks German.' },
            { q: 'Die Lerngruppe trifft sich jeden Mittwoch.', a: 't', why: '*Wir treffen uns immer am Mittwoch.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the right word for how often. Use the table.', items: [
            { q: 'Ich mache ___ meine Hausaufgaben. (100 %)', a: ['immer'], why: '100 %: *immer*, always.' },
            { q: 'Im Kurs sprechen wir ___ Englisch, nur Deutsch. (0 %)', a: ['nie'], why: '0 %: *nie*, never.' },
            { q: 'Ich lerne ___ in der Bibliothek, vielleicht einmal im Monat. (10 %)', a: ['selten'], why: '10 %: *selten*, rarely.' },
            { q: 'Wir lernen ___ zusammen, fast immer am Abend. (80 %)', a: ['meistens'], why: '80 %: *meistens*, most of the time.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Read the whole sentence. Which word fits?', items: [
            { q: 'Am Wochenende lerne ich ___. Da treffe ich Freunde und mache Sport.', o: ['nie', 'immer', 'meistens'], why: 'The weekend is for friends and sport, so no learning: *nie*.' },
            { q: 'Ich wiederhole die Wörter ___, jeden Tag, auch am Sonntag.', o: ['immer', 'selten', 'nie'], why: 'Every day, also on Sunday: *immer*.' },
            { q: 'Nach der Arbeit bin ich ___ müde, fast jeden Tag.', o: ['meistens', 'nie', 'selten'], why: '*fast jeden Tag* (almost every day): *meistens*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the words that say how often.', items: [
            { s: 'Ich lerne [meistens] am Abend. Ich schreibe [oft] Karteikarten, aber ich spreche [selten] Deutsch.', why: '*meistens*, *oft* and *selten* say how often. *am Abend* says when.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make questions about learning.', items: [
            { a: 'Wie oft lernst du Vokabeln?', why: '*Wie oft* asks how often. Then the verb, then the subject.' },
            { a: 'Wann machst du deine Hausaufgaben?', why: 'A W-question: *Wann*, the verb, the subject, then the rest.' },
            { a: 'Wo lernst du am liebsten?', why: '*am liebsten* (best of all) comes after the subject *du*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Planning your week',
      about: 'Make a study plan and set goals with wollen and müssen.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'A study plan is **der Lernplan**. For what you want to do, use **wollen**. For what you have to do, use **müssen**. The modal verb is in second place and the infinitive goes to the end: *Ich **will** jeden Tag zehn Wörter **lernen**. Am Freitag **muss** ich einen Test **schreiben**.*' },
          { t: 'table', caption: 'wollen and müssen', quiz: true, head: ['', 'wollen', 'müssen'], rows: [
            ['ich', 'will', 'muss'],
            ['du', 'willst', 'musst'],
            ['er / sie / es', 'will', 'muss'],
            ['wir', 'wollen', 'müssen'],
            ['ihr', 'wollt', 'müsst'],
            ['sie / Sie', 'wollen', 'müssen'],
          ] },
          { t: 'tip', art: 'owl', md: 'A good goal is small and clear: *Ich will jeden Tag zehn neue Wörter lernen.* That is better than *Ich will gut Deutsch sprechen*, because you know every day if you did it.' },
        ],
        [
          { t: 'text', md: 'To put the steps of your plan in order, use **zuerst** (first), **dann** (then), **danach** (after that) and **zum Schluss** (at the end). When one of them starts the sentence, the verb comes next: *Zuerst **lese** ich den Text, dann **mache** ich die Übungen.*' },
          { t: 'reading', title: 'Joannas Lernplan für diese Woche', md: 'Mein Ziel: Im Juni will ich die A2-Prüfung machen.\n\nMontag: 30 Minuten Vokabeln zum Thema Arbeit\nDienstag: Kurs, danach Hausaufgaben\nMittwoch: Lerngruppe, nur Deutsch sprechen\nDonnerstag: einen Lesetext aus einem Übungstest lesen\nFreitag: eine kurze E-Mail schreiben und der Lehrerin schicken\nSamstag: frei!\nSonntag: zuerst alle Wörter wiederholen, dann einen Film auf Deutsch sehen' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read Joanna’s plan. True or false?', items: [
            { q: 'Joanna lernt am Samstag nicht.', a: 't', why: '*Samstag: frei!* She has a free day.' },
            { q: 'Am Mittwoch trifft sie ihre Lerngruppe.', a: 't', why: '*Mittwoch: Lerngruppe.*' },
            { q: 'Joanna will im Mai die Prüfung machen.', a: 'f', why: 'Her goal is the exam *im Juni*.' },
            { q: 'Am Freitag schreibt sie eine E-Mail an ihre Familie.', a: 'f', why: 'She sends the email *der Lehrerin*, to her teacher.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Zuerst lese ich den Text, dann ___ die Übungen.', o: ['mache ich', 'ich mache', 'machen ich'], why: 'After *dann*, the verb comes first, then the subject: *dann mache ich*.' },
            { q: 'Welches Ziel ist klein und klar?', o: ['Ich will jeden Tag zehn neue Wörter lernen.', 'Ich will irgendwann sehr gut Deutsch sprechen.', 'Ich will alles über Deutschland wissen.'], why: 'You can check this goal every day: ten words, every day.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write wollen or müssen in the right form.', items: [
            { q: 'Ich ___ diese Woche jeden Tag zehn Wörter lernen. (wollen)', a: ['will'], why: '*ich will*: no ending, and the vowel changes.' },
            { q: 'Am Freitag ___ wir einen Test schreiben. (müssen)', a: ['müssen', 'muessen'], why: '*wir müssen*, like the infinitive.' },
            { q: 'Was ___ du am Wochenende machen? (wollen)', a: ['willst'], why: '*du willst*.' },
            { q: 'Ihr ___ die Übungen bis Montag machen. (müssen)', a: ['müsst', 'muesst'], why: '*ihr müsst*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make questions about plans.', items: [
            { a: 'Was musst du bis Freitag machen?', why: '*musst* in second place, the infinitive *machen* at the end.' },
            { a: 'Wann willst du die Prüfung machen?', why: '*Wann*, then *willst*, then *du*. The infinitive goes to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: study tips from other learners',
      about: 'Read three learners’ tips and find out who does what.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'In a forum for German learners, three people write how they learn. Read their tips and think: which tip is good for you?' },
          { t: 'reading', title: 'Forum: Wie lernt ihr Deutsch?', md: '**Kwame, 31:** Ich arbeite viel und habe wenig Zeit. Deshalb lerne ich in kleinen Portionen: zehn Minuten im Bus, zehn Minuten in der Mittagspause. Ich benutze eine Vokabel-App und wiederhole die Wörter jeden Tag.\n\n**Sofía, 24:** Ich lerne am besten mit anderen Menschen. Einmal pro Woche treffe ich eine Tandempartnerin. Sie lernt Spanisch, ich lerne Deutsch. Wir sprechen eine Stunde Deutsch und eine Stunde Spanisch. Fehler sind kein Problem!\n\n**Daniel, 45:** Für mich ist Ordnung wichtig. Ich habe ein Heft nur für Vokabeln und schreibe neue Nomen immer mit Artikel auf: der Tisch, die Lampe, das Fenster. Am Sonntag lese ich alle Wörter der Woche noch einmal. Und vor einer Prüfung schlafe ich genug!' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the forum again. True, false or not given?', items: [
            { q: 'Kwame hat viel Zeit zum Lernen.', a: 'f', why: '*Ich habe wenig Zeit*: he has little time.' },
            { q: 'Kwame wiederholt die Wörter jeden Tag.', a: 't', why: '*Ich … wiederhole die Wörter jeden Tag.*' },
            { q: 'Sofía trifft ihre Tandempartnerin jeden Tag.', a: 'f', why: 'She meets her *einmal pro Woche*, once a week.' },
            { q: 'Sofías Tandempartnerin kommt aus Spanien.', a: 'ng', why: 'The partner learns Spanish. The text does not say where she comes from.' },
            { q: 'Daniel lernt in der Nacht vor einer Prüfung.', a: 'f', why: '*Vor einer Prüfung schlafe ich genug*: he sleeps.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Who is it?', items: [
            { q: 'Wer lernt im Bus?', o: ['Kwame', 'Sofía', 'Daniel'], why: 'Kwame: *zehn Minuten im Bus*.' },
            { q: 'Wer spricht mit einer Partnerin zwei Sprachen?', o: ['Sofía', 'Kwame', 'Daniel'], why: 'Sofía speaks German and Spanish with her tandem partner.' },
            { q: 'Wer hat ein Heft für Vokabeln?', o: ['Daniel', 'Kwame', 'Sofía'], why: 'Daniel: *Ich habe ein Heft nur für Vokabeln.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words from the forum and their meaning.', pairs: [
            ['die Mittagspause', 'eine Pause bei der Arbeit am Mittag'],
            ['die Tandempartnerin', 'eine Partnerin zum Sprachenlernen'],
            ['das Heft', 'ein dünnes Buch zum Schreiben'],
            ['wiederholen', 'etwas noch einmal machen'],
            ['genug', 'so viel, wie man braucht'],
          ] },
          { t: 'tip', art: 'owl', md: 'Daniel’s tip is a good one: always learn a noun with its article, *der*, *die* or *das*. The article is part of the word.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich lerne ___ am Abend, fast jeden Tag.', o: ['meistens', 'nie', 'selten'], why: '*fast jeden Tag*: *meistens*.' },
      { q: 'Manchmal ___ ich in der Bibliothek.', o: ['lerne', 'lernen', 'lernst'], why: 'After *manchmal* comes the verb, in the *ich* form: *lerne*.' },
      { q: 'Danach ___ eine Pause.', o: ['mache ich', 'ich mache', 'ich machen'], why: 'After *danach*, the verb comes first, then the subject.' },
      { q: 'Was ist ein gutes Lernziel?', o: ['Ich will jeden Tag 15 Minuten Deutsch hören.', 'Ich will irgendwann perfekt sein.', 'Ich will nie Fehler machen.'], why: 'A good goal is small and clear, and you can check it.' },
      { q: 'Sie lernt meine Sprache, ich lerne ihre Sprache. Sie ist meine ___.', o: ['Tandempartnerin', 'Lehrerin', 'Nachbarin'], why: 'In a tandem, two people learn each other’s language.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Wir sprechen im Kurs ___ Englisch. (0 %)', a: ['nie'], why: '0 %: *nie*.' },
      { q: 'Er ___ im Juni die Prüfung machen. (wollen)', a: ['will'], why: '*er will*.' },
      { q: 'Du ___ die Wörter jeden Tag wiederholen. (müssen)', a: ['musst'], why: '*du musst*.' },
      { q: 'Ich treffe meine Lerngruppe einmal ___ Woche.', a: ['pro'], why: '*einmal pro Woche*: once a week.' },
      { q: 'Lern Nomen immer mit ___: der Tisch, die Lampe.', a: ['Artikel'], why: 'The article is part of the word.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Wie oft hörst du Podcasts?', why: '*Wie oft*, then the verb, then the subject.' },
      { a: 'Was willst du heute lernen?', why: '*willst* in second place, *lernen* at the end.' },
    ] },
  ],
};
