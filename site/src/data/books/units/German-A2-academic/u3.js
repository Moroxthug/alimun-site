// German A2 for study and exams, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Short texts',
  goal: 'Write short emails and messages to a teacher or a school: greet, give a reason, ask for information and reply.',
  art: 'cat',
  tags: { skills: ['writing', 'reading', 'grammar'], topics: ['email', 'greetings-endings', 'weil', 'asking-for-information'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'An email to your teacher',
      about: 'Greeting, reason and ending: write a short email when you cannot come to class.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'A short email to a teacher has four parts: the **greeting**, the **reason** for writing, what you **ask** or what happens next, and the **ending**. Put the topic in the subject line, *der Betreff*.' },
          { t: 'reading', title: 'Betreff: Kurs am Donnerstag', md: 'Liebe Frau Weber,\n\nleider kann ich am Donnerstag nicht zum Kurs kommen, weil ich einen Termin beim Arzt habe. Können Sie mir bitte die Hausaufgaben schicken? Dann kann ich sie zu Hause machen.\n\nVielen Dank und viele Grüße\nAhmed Karimi' },
          { t: 'tip', art: 'owl', md: 'After the greeting there is a comma, and the next line starts with a **small** letter: *leider kann ich …*. Nouns and *Sie* still have a capital letter.' },
        ],
        [
          { t: 'table', caption: 'Greetings and endings', explain: ['head', 'col0'], quiz: true, head: ['', 'Very formal', 'Polite and friendly'], rows: [
            ['To a woman', 'Sehr geehrte Frau Weber,', 'Liebe Frau Weber,'],
            ['To a man', 'Sehr geehrter Herr Kaya,', 'Lieber Herr Kaya,'],
            ['To a school or office', 'Sehr geehrte Damen und Herren,', 'Liebes Team,'],
            ['Ending', 'Mit freundlichen Grüßen', 'Viele Grüße'],
          ] },
          { t: 'text', md: 'Use *Sehr geehrte …* when you do not know the person. *Liebe Frau Weber* is fine for a teacher you know. In both cases you say *Sie* to the teacher.' },
          { t: 'ex', kind: 'choice', h: 'Which one fits the email?', items: [
            { q: 'Sie schreiben an eine Sprachschule. Sie kennen den Namen der Person nicht.', o: ['Sehr geehrte Damen und Herren,', 'Liebe Frau Weber,', 'Hallo Leute,'], why: 'For a school or office with no name: *Sehr geehrte Damen und Herren*.' },
            { q: 'Ein formelles Ende für die E-Mail:', o: ['Mit freundlichen Grüßen', 'Bis dann!', 'Tschüss'], why: '*Mit freundlichen Grüßen* is the usual formal ending.' },
            { q: 'Sehr geehrter Herr Kaya, ___', o: ['ich habe eine Frage zum Kurs.', 'Ich habe eine Frage zum Kurs.', 'ich habe eine frage zum Kurs.'], why: 'After the greeting the line starts with a small letter, but nouns like *Frage* keep their capital letter.' },
          ] },
        ],
        [
          { t: 'text', md: 'Give your reason with **weil**. In a *weil* clause the conjugated verb goes to the **end**. With a modal verb, the modal verb is last: *…, weil ich arbeiten **muss**.*' },
          { t: 'examples', items: [
            { s: 'Ich kann nicht kommen, weil ich krank **bin**.', n: '*bin* goes to the end of the *weil* clause.' },
            { s: 'Ich komme später, weil mein Zug Verspätung **hat**.', n: '*Verspätung haben*: to be late (trains and buses).' },
            { s: 'Ich fehle morgen, weil mein Sohn krank **ist**.', n: '*fehlen*: not to be in class.' },
            { s: 'Ich kann nicht zum Kurs kommen, weil ich länger arbeiten **muss**.', n: 'The modal verb *muss* comes after the infinitive *arbeiten*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the reasons. The verb goes to the end.', items: [
            { q: 'Ich komme nicht, weil ich einen Arzttermin ___. (haben)', a: ['habe'], why: '*ich habe*, at the end of the *weil* clause.' },
            { q: 'Ich fehle heute, weil meine Tochter krank ___. (sein)', a: ['ist'], why: '*meine Tochter ist*, at the end.' },
            { q: 'Ich bin zu spät, weil der Bus Verspätung ___. (haben)', a: ['hat'], why: '*der Bus hat*, at the end.' },
            { q: 'Ich kann nicht kommen, weil ich arbeiten ___. (müssen)', a: ['muss'], why: 'The modal verb comes last: *arbeiten muss*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences for an email.', items: [
            { a: 'Ich komme später, weil ich einen Termin habe.', why: 'In the *weil* clause, *habe* goes to the end.' },
            { a: 'Können Sie mir bitte die Hausaufgaben schicken?', why: 'A polite question: *Können* first, *schicken* at the end.' },
            { a: 'Ich fehle morgen, weil ich krank bin.', why: 'In the *weil* clause, *bin* goes to the end.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs at the end of the weil clauses.', items: [
            { s: 'Ich kann am Montag nicht kommen, weil ich eine Prüfung [habe]. Ich komme später, weil ich lange arbeiten [muss].', why: 'In a *weil* clause the conjugated verb is last: *habe*, *muss*. *arbeiten* is the infinitive before it.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Asking for information and replying',
      about: 'Ask a school short, clear questions, and understand the reply.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'When you ask for information, say what your question is about, then ask short, direct questions. *Könnten Sie …?* is a very polite way to ask for something.' },
          { t: 'examples', items: [
            { s: 'Ich habe eine Frage **zum** Prüfungskurs.', n: '*zum* = *zu dem*: about the exam course.' },
            { s: '**Wann** beginnt der nächste Kurs?', n: 'A W-question: the verb comes second.' },
            { s: '**Gibt es** noch freie Plätze?', n: '*Gibt es …?*: Is there …? Are there …?' },
            { s: '**Könnten** Sie mir bitte den Stundenplan **schicken**?', n: '*Könnten* is more polite than *Können*. The infinitive goes to the end.' },
          ] },
        ],
        [
          { t: 'text', md: 'A reply from a school often uses fixed phrases. If you know them, you understand the email much faster.' },
          { t: 'examples', items: [
            { s: 'Vielen Dank für Ihre E-Mail.', n: 'The usual first line of a reply.' },
            { s: 'Im Anhang finden Sie das Anmeldeformular.', n: '*der Anhang*: the attachment.' },
            { s: 'Bei Fragen schreiben Sie uns gern.', n: 'Write to us if you have questions.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In a reply, the subject line often starts with *AW:*. It means *Antwort*, a reply.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the reply.', pairs: [
            ['Wann beginnt der Prüfungskurs?', 'Er beginnt am 4. April.'],
            ['Gibt es noch freie Plätze?', 'Ja, es gibt noch drei Plätze.'],
            ['Könnten Sie mir bitte den Stundenplan schicken?', 'Gern, im Anhang finden Sie den Stundenplan.'],
            ['Muss ich ein Buch kaufen?', 'Nein, Sie bekommen das Material im Kurs.'],
            ['Wo findet der Kurs statt?', 'In Raum 5 im Erdgeschoss.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the questions.', items: [
            { q: '___ es noch freie Plätze? (geben)', a: ['Gibt'], why: '*Gibt es …?*: the verb comes first in a yes/no question.' },
            { q: 'Wann ___ der nächste Kurs? (beginnen)', a: ['beginnt'], why: '*der Kurs* is singular: *beginnt*.' },
            { q: '___ Sie mir bitte den Link schicken? (können, very polite)', a: ['Könnten', 'Koennten'], why: 'The very polite form: *Könnten Sie …?*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word for the reply.', items: [
            { q: 'Vielen Dank für Ihre ___.', o: ['E-Mail', 'Grüße', 'Betreff'], why: 'The usual first line: *Vielen Dank für Ihre E-Mail.*' },
            { q: 'Im ___ finden Sie das Formular.', o: ['Anhang', 'Betreff', 'Gruß'], why: 'A file sent with an email is in the *Anhang*.' },
            { q: 'Bei Fragen ___ Sie uns gern.', o: ['schreiben', 'schreibt', 'geschrieben'], why: 'With *Sie*, the verb has the infinitive form: *schreiben Sie*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a learner writes to a school',
      about: 'Read an email from a learner and the reply from the school.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Betreff: Frage zum Prüfungskurs A2', md: 'Sehr geehrte Damen und Herren,\n\nich lerne seit einem Jahr Deutsch und möchte im Sommer die A2-Prüfung machen. Ich habe ein paar Fragen zu Ihrem Prüfungskurs. Wann beginnt der nächste Kurs? Gibt es auch Kurse am Abend? Ich arbeite nämlich bis 17 Uhr.\n\nMit freundlichen Grüßen\nLucía Fernández' },
          { t: 'reading', title: 'Betreff: AW: Frage zum Prüfungskurs A2', md: 'Sehr geehrte Frau Fernández,\n\nvielen Dank für Ihre E-Mail. Der nächste Prüfungskurs beginnt am 6. Mai. Es gibt einen Kurs am Vormittag und einen Kurs am Abend. Der Abendkurs ist immer montags und mittwochs von 18:00 bis 20:30 Uhr. Dort gibt es noch vier freie Plätze.\n\nVor dem Kurs machen alle einen kurzen Einstufungstest. Sie können ihn online machen. Den Link finden Sie im Anhang.\n\nBei Fragen schreiben Sie uns gern.\n\nMit freundlichen Grüßen\nMarkus Weiß\nSprachschule am Fluss' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the two emails. True, false or not given?', items: [
            { q: 'Lucía lernt seit einem Jahr Deutsch.', a: 't', why: '*ich lerne seit einem Jahr Deutsch*.' },
            { q: 'Lucía arbeitet bis 18 Uhr.', a: 'f', why: 'She works *bis 17 Uhr*.' },
            { q: 'Der Abendkurs ist am Montag und am Mittwoch.', a: 't', why: '*montags und mittwochs*: every Monday and Wednesday.' },
            { q: 'Im Kurs am Vormittag gibt es keine freien Plätze mehr.', a: 'ng', why: 'The reply only says that the evening course has four free places.' },
            { q: 'Den Einstufungstest muss man in der Schule machen.', a: 'f', why: '*Sie können ihn online machen.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Warum fragt Lucía nach einem Kurs am Abend?', o: ['Sie arbeitet bis 17 Uhr.', 'Sie hat am Vormittag einen anderen Kurs.', 'Sie wohnt weit weg.'], why: '*Ich arbeite nämlich bis 17 Uhr.* *nämlich* gives a reason.' },
            { q: 'Was schickt die Schule im Anhang?', o: ['einen Link zum Test', 'den Stundenplan', 'ein Kursbuch'], why: '*Den Link finden Sie im Anhang.*' },
            { q: 'Was macht man vor dem Kurs?', o: ['einen Einstufungstest', 'die A2-Prüfung', 'eine Anmeldung im Büro'], why: '*Vor dem Kurs machen alle einen kurzen Einstufungstest.*' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the words from the emails and their meaning.', pairs: [
            ['der Einstufungstest', 'ein Test für das richtige Kursniveau'],
            ['der Anhang', 'eine Datei mit der E-Mail'],
            ['der Betreff', 'das Thema der E-Mail'],
            ['freie Plätze', 'Man kann noch mitmachen.'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Sie schreiben an einen Lehrer. Sie kennen ihn noch nicht. Er heißt Herr Schulz.', o: ['Sehr geehrter Herr Schulz,', 'Sehr geehrte Herr Schulz,', 'Lieber Schulz,'], why: 'To a man: *Sehr geehrter Herr …*, with *-r*.' },
      { q: 'Vielen Dank für Ihre E-Mail. Im ___ finden Sie den Stundenplan.', o: ['Anhang', 'Betreff', 'Gruß'], why: 'A file with an email: *im Anhang*.' },
      { q: 'Ich komme nicht, weil ___.', o: ['ich krank bin', 'ich bin krank', 'bin ich krank'], why: 'In a *weil* clause the verb goes to the end.' },
      { q: '„AW“ im Betreff bedeutet ___.', o: ['Antwort', 'Anhang', 'Anmeldung'], why: '*AW*: *Antwort*, a reply.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the email.', items: [
      { q: 'Liebe Frau Weber, leider ___ ich heute nicht kommen. (können)', a: ['kann'], why: '*ich kann*: the modal verb comes second, *kommen* goes to the end.' },
      { q: 'Ich fehle, weil ich einen Termin beim Arzt ___. (haben)', a: ['habe'], why: 'The verb goes to the end of the *weil* clause.' },
      { q: '___ es noch freie Plätze im Abendkurs? (geben)', a: ['Gibt'], why: '*Gibt es …?*' },
      { q: 'Mit freundlichen ___', a: ['Grüßen', 'Gruessen'], why: 'The formal ending.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Könnten Sie mir bitte den Link schicken?', why: '*Könnten* first, *schicken* at the end.' },
      { a: 'Ich komme später, weil der Bus Verspätung hat.', why: '*hat* goes to the end of the *weil* clause.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Nach „Sehr geehrte Frau Weber,“ beginnt die nächste Zeile mit einem kleinen Buchstaben.', a: 't', why: 'After the comma, the next line starts small, except nouns and *Sie*.' },
      { q: '„Viele Grüße“ ist formeller als „Mit freundlichen Grüßen“.', a: 'f', why: '*Mit freundlichen Grüßen* is more formal. *Viele Grüße* is friendly.' },
    ] },
  ],
};
