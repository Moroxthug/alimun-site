// German B1 for study and exams, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Writing to teachers and offices',
  goal: 'Write polite, clear emails to teachers and offices.',
  art: 'mug',
  tags: { skills: ['writing', 'reading', 'grammar'], topics: ['formal-email', 'konjunktiv-ii-polite', 'weil-da-deshalb', 'university'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Formal emails',
      about: 'Ask a lecturer for more time or for an appointment.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A formal email to a lecturer or an office has a clear shape: a subject line (**Betreff**), a greeting (**Anrede**), who you are and why you write, your request, thanks and a formal ending (**Gruß**). Here a student asks for more time for her written assignment.' },
          { t: 'reading', title: 'Betreff: Bitte um Verlängerung der Abgabefrist für die Hausarbeit', md: 'Sehr geehrter Herr Professor Brandt,\n\nich bin Studentin in Ihrem Seminar „Stadt und Migration“ (Matrikelnummer 2741906). Ich schreibe Ihnen, weil ich meine Hausarbeit leider nicht bis zum 15. März abgeben kann.\n\nIch war zwei Wochen krank und konnte in dieser Zeit nicht arbeiten. Ein ärztliches Attest schicke ich Ihnen gern mit.\n\nWäre es möglich, die Abgabefrist um zwei Wochen zu verlängern? Ich könnte die Arbeit dann bis zum 29. März abgeben.\n\nVielen Dank für Ihr Verständnis.\n\nMit freundlichen Grüßen\nAyşe Demir' },
        ],
        [
          { t: 'table', caption: 'The parts of a formal email', explain: ['head', 'col0'], head: ['Part', 'German'], rows: [
            ['subject line', 'Betreff: Bitte um einen Termin in der Sprechstunde'],
            ['greeting', 'Sehr geehrte Frau Dr. Kaya, / Sehr geehrter Herr Professor Brandt,'],
            ['who you are', 'ich bin Student in Ihrem Seminar …'],
            ['why you write', 'Ich schreibe Ihnen, weil …'],
            ['request', 'Wäre es möglich, …? / Könnten Sie …?'],
            ['ending', 'Vielen Dank im Voraus. Mit freundlichen Grüßen'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use the title that the person uses: *Frau Professorin Kaya* or *Frau Prof. Kaya*, *Herr Dr. Brandt*. If you do not know the name, write *Sehr geehrte Damen und Herren*. After the comma, the first word of the email starts with a small letter.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each part of the email with an example.', pairs: [
            ['Betreff', 'Bitte um einen Termin'],
            ['Anrede', 'Sehr geehrte Frau Dr. Kaya,'],
            ['Grund', 'Ich schreibe Ihnen, weil ich eine Frage zum Referat habe.'],
            ['Bitte', 'Hätten Sie nächste Woche Zeit für ein kurzes Gespräch?'],
            ['Gruß', 'Mit freundlichen Grüßen'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the words for asking for more time.', items: [
            { q: 'Ich möchte um eine ___ der Abgabefrist bitten. (more time: the noun)', a: ['Verlängerung'], why: '*die Verlängerung*: making something longer. The verb is *verlängern*.' },
            { q: 'Bis wann muss ich die Hausarbeit ___? (hand in)', a: ['abgeben'], why: '*abgeben*: to hand in. After *muss*, the infinitive goes to the end.' },
            { q: 'Die ___ für die Hausarbeit ist der 15. März. (the deadline)', a: ['Abgabefrist', 'Frist'], why: '*die Abgabefrist* or *die Frist*: the last day to hand something in.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which one belongs in an email to a lecturer?', items: [
            { q: '', o: ['Sehr geehrte Frau Dr. Kaya,', 'Hallo Kaya,', 'Hey Frau Kaya,'], why: 'To a lecturer: *Sehr geehrte Frau* + title + name.' },
            { q: '', o: ['Betreff: Bitte um Verlängerung der Abgabefrist', 'Betreff: Hilfe!!!', 'Betreff: Hausarbeit, ich kann nicht'], why: 'A good subject line names the request in a few neutral words.' },
            { q: '', o: ['Ich schreibe Ihnen, weil ich eine Frage zur Klausur habe.', 'Ich schreibe dir, weil ich eine Frage zur Klausur habe.', 'Ich schreibe Ihnen, weil ich habe eine Frage zur Klausur.'], why: 'Formal *Ihnen*, and after *weil* the verb *habe* goes to the end.' },
            { q: '', o: ['Vielen Dank im Voraus. Mit freundlichen Grüßen', 'Danke! Tschüss', 'LG und bis dann'], why: 'The usual formal thanks and ending.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Polite requests and reasons',
      about: 'Make requests with Konjunktiv II and give a short reason.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Requests sound polite with the **Konjunktiv II**. Four verbs do almost all the work: *hätte*, *wäre*, *könnte* and *würde*.' },
          { t: 'table', caption: 'Konjunktiv II for polite requests', quiz: true, head: ['', 'haben', 'sein', 'können', 'werden'], rows: [
            ['ich', 'hätte', 'wäre', 'könnte', 'würde'],
            ['du', 'hättest', 'wärst', 'könntest', 'würdest'],
            ['er/sie/es', 'hätte', 'wäre', 'könnte', 'würde'],
            ['wir', 'hätten', 'wären', 'könnten', 'würden'],
            ['ihr', 'hättet', 'wärt', 'könntet', 'würdet'],
            ['sie/Sie', 'hätten', 'wären', 'könnten', 'würden'],
          ] },
          { t: 'examples', items: [
            { s: '**Könnten** Sie mir sagen, wann Ihre Sprechstunde ist?', n: 'Softer than *Können Sie …?*' },
            { s: '**Wäre** es möglich, einen Termin am Donnerstag zu bekommen?', n: '*Wäre es möglich*, + *zu* + infinitive at the end.' },
            { s: 'Ich **würde** gern mit Ihnen über mein Referat sprechen.', n: '*würde gern* + infinitive: what you would like to do.' },
            { s: '**Hätten** Sie nächste Woche kurz Zeit?', n: 'A polite way to ask for a meeting.' },
          ] },
        ],
        [
          { t: 'text', md: 'Give one short reason. After *weil* and *da* the verb goes to the **end**. After *deshalb* the verb comes **directly**, in position two. *Da* often starts the sentence.' },
          { t: 'examples', items: [
            { s: 'Ich kann nicht zur Klausur kommen, **weil** ich krank **bin**.', n: '*weil*: the verb *bin* goes to the end.' },
            { s: '**Da** ich am Montag arbeiten **muss**, kann ich nicht in die Sprechstunde kommen.', n: '*Da* at the start: its verb *muss* at the end, then the main verb *kann*.' },
            { s: 'Ich war zwei Wochen krank. **Deshalb brauche** ich mehr Zeit.', n: '*Deshalb* in position one, the verb *brauche* in position two.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not give too many details. One clear reason is enough: *Ich war krank* or *Ich hatte einen Unfall*. If you have a document, for example an *Attest* from a doctor, say that you can send it.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in Konjunktiv II.', items: [
            { q: '___ Sie mir bitte die Folien schicken? (können)', a: ['Könnten', 'Koennten'], why: 'Polite request with *Sie*: *Könnten Sie …?*' },
            { q: '___ es möglich, die Prüfung später zu schreiben? (sein)', a: ['Wäre', 'Waere'], why: '*Wäre es möglich, … zu …?*' },
            { q: 'Ich ___ gern einen Termin vereinbaren. (werden)', a: ['würde', 'wuerde'], why: '*ich würde gern* + infinitive.' },
            { q: '___ Sie am Freitag kurz Zeit? (haben)', a: ['Hätten', 'Haetten'], why: 'With *Sie*: *hätten*.' },
            { q: 'Ich ___ eine Frage zur Hausarbeit. (haben)', a: ['hätte', 'haette'], why: 'With *ich*: *hätte*. Softer than *ich habe*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Ich kann nicht kommen, weil ich krank bin.', why: 'After *weil*, the verb *bin* goes to the end.' },
            { a: 'Wäre es möglich, die Frist zu verlängern?', why: 'The question starts with *Wäre*; *zu verlängern* goes to the end.' },
            { a: 'Könnten Sie mir das Formular schicken?', why: 'The pronoun *mir* comes before the noun *das Formular*; *schicken* at the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Ich habe die Klausur verpasst, ___ mein Zug Verspätung hatte.', o: ['weil', 'deshalb', 'trotzdem'], why: 'The verb *hatte* is at the end, so you need *weil*.' },
            { q: 'Mein Zug hatte Verspätung. ___ habe ich die Klausur verpasst.', o: ['Deshalb', 'Weil', 'Obwohl'], why: 'The verb *habe* comes directly after the gap: *Deshalb habe ich …*' },
            { q: 'Ich möchte in Ihre Sprechstunde kommen, ___ ich eine Frage zum Thema habe.', o: ['da', 'deshalb', 'aber'], why: 'The verb *habe* is at the end: *da* gives the reason like *weil*.' },
            { q: '', o: ['Könnten Sie mir bitte sagen, ob die Klausur schon korrigiert ist?', 'Sagen Sie mir sofort, ob die Klausur schon korrigiert ist.', 'Ich will wissen, ob die Klausur schon korrigiert ist!'], why: 'Konjunktiv II and *bitte* make the request polite.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Emails between a student and a lecturer',
      about: 'Read a short email exchange and see how both sides write.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'João wants to talk to his lecturer about a talk he must give in her seminar. Read the three emails. Look at how each person starts and ends: the lecturer is a little less formal, but both use *Sie*.' },
          { t: 'tip', art: 'owl', md: 'If a lecturer answers with *Lieber Herr …* and *Viele Grüße*, you can stay formal. *Sehr geehrte …* and *Mit freundlichen Grüßen* are never wrong.' },
        ],
        [
          { t: 'reading', title: 'Termin für eine Beratung zum Referat', md: '**João an Frau Dr. Kaya**\n\nSehr geehrte Frau Dr. Kaya,\n\nich bin Student in Ihrem Seminar „Einführung in die Soziologie“ und halte am 12. Juni ein Referat über das Thema „Familie heute“. Ich habe schon einige Texte gelesen, aber ich bin nicht sicher, ob meine Gliederung gut ist.\n\nHätten Sie in den nächsten zwei Wochen Zeit für ein kurzes Gespräch? Ihre Sprechstunde am Dienstag ist leider genau während meines Deutschkurses.\n\nMit freundlichen Grüßen\nJoão Pereira\n\n**Die Antwort von Frau Dr. Kaya**\n\nLieber Herr Pereira,\n\nvielen Dank für Ihre Nachricht. Gerne bespreche ich Ihre Gliederung mit Ihnen. Könnten Sie am Donnerstag, den 30. Mai, um 14 Uhr in mein Büro kommen (Raum 3.12)? Bitte schicken Sie mir die Gliederung schon vorher, dann kann ich sie lesen.\n\nViele Grüße\nSelin Kaya\n\n**João antwortet**\n\nSehr geehrte Frau Dr. Kaya,\n\nder Termin am Donnerstag passt mir sehr gut. Die Gliederung finden Sie im Anhang.\n\nVielen Dank und freundliche Grüße\nJoão Pereira' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the emails. True, false or not given?', items: [
            { q: 'João hat noch keine Texte für sein Referat gelesen.', a: 'f', why: '*Ich habe schon einige Texte gelesen.*' },
            { q: 'João kann am Dienstag nicht in die Sprechstunde kommen.', a: 't', why: 'On Tuesday he has his German course at the same time.' },
            { q: 'Frau Dr. Kaya möchte die Gliederung vor dem Termin sehen.', a: 't', why: '*Bitte schicken Sie mir die Gliederung schon vorher.*' },
            { q: 'Das Gespräch findet online statt.', a: 'f', why: 'João should come *in mein Büro (Raum 3.12)*.' },
            { q: 'Das Referat dauert 20 Minuten.', a: 'ng', why: 'The emails do not say how long the talk is.' },
            { q: 'João schickt die Gliederung mit seiner letzten E-Mail.', a: 't', why: '*Die Gliederung finden Sie im Anhang.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Answer the questions about the emails.', items: [
            { q: 'Warum schreibt João?', o: ['Er möchte über seine Gliederung sprechen.', 'Er möchte das Thema wechseln.', 'Er braucht mehr Zeit für die Hausarbeit.'], why: 'He is not sure his outline is good and asks for a meeting.' },
            { q: 'Wie beginnt Frau Dr. Kaya ihre Antwort?', o: ['Lieber Herr Pereira,', 'Sehr geehrter Herr Pereira,', 'Hallo João,'], why: 'She writes *Lieber Herr Pereira*: friendly, but still with *Sie*.' },
            { q: 'Was bedeutet „im Anhang“?', o: ['in einer Datei, die mit der E-Mail kommt', 'am Ende des Semesters', 'in der Sprechstunde'], why: '*der Anhang*: the attachment of an email.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verb in Konjunktiv II.', items: [
            { s: '[Hätten] Sie in den nächsten zwei Wochen Zeit für ein kurzes Gespräch?', why: '*hätten*: Konjunktiv II of *haben*.' },
            { s: '[Könnten] Sie am Donnerstag um 14 Uhr in mein Büro kommen?', why: '*könnten*: Konjunktiv II of *können*. *kommen* is the infinitive.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '', o: ['Sehr geehrte Frau Professorin Weber,', 'Hi Frau Weber,', 'Hallo Weber,'], why: 'Formal: *Sehr geehrte Frau* + title + name.' },
      { q: '___ es möglich, einen Termin zu bekommen?', o: ['Wäre', 'Hätte', 'Würde'], why: 'The fixed phrase is *Wäre es möglich, … zu …?*' },
      { q: 'Mein Bus hatte Verspätung. ___ komme ich zu spät.', o: ['Deshalb', 'Weil', 'Da'], why: 'The verb *komme* comes directly after the gap: *Deshalb*.' },
      { q: 'Die Datei finden Sie im ___.', o: ['Anhang', 'Betreff', 'Gruß'], why: 'A file that comes with an email is *im Anhang*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '___ Sie mir die Folien schicken? (können, Konjunktiv II)', a: ['Könnten', 'Koennten'], why: 'Polite request: *Könnten Sie …?*' },
      { q: 'Ich schreibe Ihnen, weil ich eine Frage zum Referat ___. (haben)', a: ['habe', 'hätte', 'haette'], why: 'After *weil*, the verb goes to the end: *habe*, or politely *hätte*.' },
      { q: 'Ich bitte um eine ___ der Abgabefrist. (more time: the noun)', a: ['Verlängerung'], why: '*die Verlängerung der Abgabefrist*: more time to hand in.' },
      { q: 'Mit freundlichen ___', a: ['Grüßen', 'Gruessen'], why: 'The formal ending: *Mit freundlichen Grüßen*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Ich kann nicht kommen, da ich arbeiten muss.', why: 'After *da*, the modal verb *muss* goes to the end.' },
      { a: 'Könnten Sie mir sagen, wann die Klausur ist?', why: 'Indirect question: *ist* at the end.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Im Betreff steht das Thema der E-Mail.', a: 't', why: 'The subject line names what the email is about.' },
      { q: '„Tschüss“ ist ein guter Gruß für eine E-Mail an eine Professorin.', a: 'f', why: '*Tschüss* is informal. Use *Mit freundlichen Grüßen*.' },
    ] },
  ],
};
