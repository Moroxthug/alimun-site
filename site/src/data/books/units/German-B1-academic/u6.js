// German B1 for study and exams, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
// Practice in the format of B1 exams such as Goethe B1 and telc B1; no official material.
export const UNIT = {
  id: 'u6',
  title: 'Exam skills',
  goal: 'Get ready for a B1 exam: task types, timing and strategies. Practise in the format of exams like Goethe B1 and telc B1.',
  art: 'dragon',
  tags: { skills: ['reading', 'listening', 'writing', 'speaking', 'exam'], topics: ['exam-strategies', 'b1-exam', 'formal-email', 'planning-together', 'opinions'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Reading and listening tasks',
      about: 'Know the common task types and a strategy for each one.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'B1 exams usually test four skills: reading, listening, writing and speaking. In reading and listening you often meet three kinds of task: true or false (*richtig/falsch*), multiple choice with three answers, and matching, for example adverts to people.' },
          { t: 'table', caption: 'Strategies for each kind of task', explain: ['head', 'col0', 'col1'], head: ['Task', 'Strategy'], rows: [
            ['true or false', 'Read the statements first. Find the place in the text, then compare every detail.'],
            ['multiple choice', 'Read the question and all three answers. A wrong answer often uses words from the text.'],
            ['matching', 'Note what each person needs. Some texts may match nobody.'],
            ['listening', 'Read the tasks before you listen. Some texts are played once, others twice: the task tells you.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Timing is different in each exam. Do a practice test with a clock, so that you know how long each part takes you.' },
        ],
        [
          { t: 'reading', title: 'Aushang in der Sprachschule', md: '**Wichtige Information für alle Kursteilnehmenden**\n\nWegen Bauarbeiten ist der Eingang in der Gartenstraße vom 4. bis 15. November geschlossen. Bitte benutzen Sie in dieser Zeit den Eingang auf der Rückseite des Gebäudes, neben dem Parkplatz. Die Kurse finden wie immer statt, aber die Kurse aus dem Erdgeschoss ziehen in den zweiten Stock um. Den neuen Raum finden Sie auf dem Plan am Eingang. Der Aufzug funktioniert in dieser Zeit leider nicht. Wenn Sie Hilfe brauchen, melden Sie sich bitte im Sekretariat.' },
          { t: 'ex', kind: 'tf', h: 'Exam practice: read the notice. True or false?', items: [
            { q: 'Der Eingang in der Gartenstraße ist im November eine Zeit lang geschlossen.', a: 't', why: 'From 4 to 15 November.' },
            { q: 'Die Kurse fallen während der Bauarbeiten aus.', a: 'f', why: '*Die Kurse finden wie immer statt.* Exam tasks often use the opposite word: *ausfallen*.' },
            { q: 'Alle Kurse ziehen in den zweiten Stock um.', a: 'f', why: 'Only the courses from the ground floor move. Watch out for words like *alle*.' },
            { q: 'Man kann in dieser Zeit den Aufzug benutzen.', a: 'f', why: '*Der Aufzug funktioniert in dieser Zeit leider nicht.*' },
            { q: 'Bei Problemen kann man ins Sekretariat gehen.', a: 't', why: '*Wenn Sie Hilfe brauchen, melden Sie sich bitte im Sekretariat.*' },
          ] },
        ],
        [
          { t: 'text', md: 'Exam tasks rarely use the same words as the text. They say the same thing in other words. Learn words with the same meaning (synonyms) and opposites.' },
          { t: 'examples', items: [
            { s: 'Text: Die Kurse finden wie immer statt. / Aufgabe: Die Kurse fallen nicht aus.', n: '*stattfinden* and *nicht ausfallen* mean the same.' },
            { s: 'Text: Der Aufzug funktioniert nicht. / Aufgabe: Der Aufzug ist kaputt.', n: '*funktioniert nicht* = *ist kaputt*.' },
            { s: 'Text: Die Teilnahme ist kostenlos. / Aufgabe: Man muss nichts bezahlen.', n: 'The same idea in other words.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the words with the same meaning.', pairs: [
            ['ausfallen', 'nicht stattfinden'],
            ['kostenlos', 'gratis'],
            ['geöffnet', 'offen'],
            ['beginnen', 'anfangen'],
            ['kaputt', 'funktioniert nicht'],
          ] },
        ],
        [
          { t: 'text', md: 'In a listening task you often hear announcements. Read this one as if you were listening. Listen for numbers, times and changes.' },
          { t: 'reading', title: 'Durchsage am Bahnhof', md: 'Achtung an Gleis 5: Der Regionalexpress nach Kassel, planmäßige Abfahrt 14:20 Uhr, hat heute etwa 15 Minuten Verspätung. Fahrgäste nach Göttingen können auch den Intercity um 14:30 Uhr von Gleis 7 nehmen. Wir bitten um Entschuldigung.' },
          { t: 'ex', kind: 'choice', h: 'Exam practice: choose the right answer.', items: [
            { q: 'Wann fährt der Zug nach Kassel ungefähr ab?', o: ['um 14:35 Uhr', 'um 14:20 Uhr', 'um 14:30 Uhr'], why: '14:20 plus about 15 minutes. 14:20 is the time in the timetable, and 14:30 is a different train.' },
            { q: 'Wer kann zu Gleis 7 gehen?', o: ['Fahrgäste nach Göttingen', 'alle Fahrgäste nach Kassel', 'Fahrgäste mit Fahrrad'], why: '*Fahrgäste nach Göttingen können auch den Intercity … von Gleis 7 nehmen.*' },
            { q: 'Was ist das Problem?', o: ['Der Zug kommt später.', 'Der Zug fällt aus.', 'Der Zug fährt von einem anderen Gleis.'], why: '*Verspätung*: the train is late, but it runs.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Writing to a task',
      about: 'Answer every point of a writing task and check your text.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In a writing task you get a situation and several points. You must write about **every** point. Plan first: one or two sentences for each point, plus a greeting, an introduction and an ending. Check who you write to: a friend (*du*, *Liebe …*, *Viele Grüße*) or someone formal (*Sie*, *Sehr geehrte …*, *Mit freundlichen Grüßen*).' },
          { t: 'reading', title: 'Aufgabe', md: 'Sie haben einen Deutschkurs an einer Sprachschule gebucht, können aber am ersten Kurstag nicht kommen. Schreiben Sie eine E-Mail an die Kursleiterin, Frau Schulz.\n\nEntschuldigen Sie sich höflich und nennen Sie den Grund. Fragen Sie, was Sie bis zum nächsten Termin vorbereiten sollen. Machen Sie einen Vorschlag, wie Sie die Materialien bekommen können.' },
        ],
        [
          { t: 'reading', title: 'Eine Antwort auf die Aufgabe', md: 'Sehr geehrte Frau Schulz,\n\nich habe mich für Ihren Deutschkurs B1 am Montagabend angemeldet. Leider kann ich am ersten Kurstag, dem 7. Oktober, nicht kommen, weil ich an diesem Abend arbeiten muss. Das tut mir sehr leid.\n\nKönnten Sie mir bitte sagen, was ich bis zum nächsten Termin vorbereiten soll? Gibt es Seiten im Buch, die ich lesen sollte?\n\nWenn Sie Arbeitsblätter verteilen, könnten Sie mir diese vielleicht per E-Mail schicken? Ich könnte sie auch am Mittwoch im Sekretariat abholen.\n\nVielen Dank im Voraus und freundliche Grüße\nAmara Okoye' },
          { t: 'ex', kind: 'tf', h: 'Does the email answer every point? True or false?', items: [
            { q: 'Amara nennt einen Grund, warum sie nicht kommen kann.', a: 't', why: '*weil ich an diesem Abend arbeiten muss*.' },
            { q: 'Amara fragt, was sie vorbereiten soll.', a: 't', why: '*Könnten Sie mir bitte sagen, was ich bis zum nächsten Termin vorbereiten soll?*' },
            { q: 'Amara schreibt nicht, wie sie die Materialien bekommen kann.', a: 'f', why: 'She suggests two ways: by email or from the office on Wednesday.' },
          ] },
        ],
        [
          { t: 'text', md: 'Leave a few minutes to check your text. Check one thing at a time: the **position of the verb** (position two, or the end after *weil, dass, ob*), **capital letters** for nouns, and the formal *Sie* and *Ihr*, which always start with a capital letter.' },
          { t: 'ex', kind: 'spot', h: 'Tap the mistake in each sentence.', items: [
            { s: 'Ich kann nicht kommen, weil ich [muss] arbeiten.', why: 'After *weil* the verb goes to the end: *weil ich arbeiten muss*.' },
            { s: 'Könnten [sie] mir die Unterlagen schicken, Frau Schulz?', why: 'The formal *Sie* always has a capital letter.' },
            { s: 'Ich freue mich auf [ihre] Antwort.', why: 'Formal *Ihre* has a capital letter. *ihre* means her or their.' },
            { s: 'Gestern [ich habe] eine E-Mail bekommen.', why: 'After *Gestern* the verb comes in position two: *Gestern habe ich …*' },
            { s: 'Ich habe eine Frage zu dem [kurs].', why: 'Nouns start with a capital letter: *Kurs*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the correct form.', items: [
            { q: 'Leider kann ich nicht kommen, weil ich krank ___. (sein)', a: ['bin'], why: 'After *weil*, the verb goes to the end: *bin*.' },
            { q: 'Ich freue mich auf ___ Antwort. (your, formal)', a: ['Ihre'], why: '*Ihre* with a capital letter: formal *your*.' },
            { q: 'Gestern ___ ich Ihre E-Mail bekommen. (haben)', a: ['habe'], why: 'Perfekt with *haben*; the verb comes in position two after *Gestern*.' },
            { q: 'Ich möchte wissen, ob der Kurs am Montag ___. (stattfinden)', a: ['stattfindet'], why: 'At the end of the clause a separable verb is written as one word: *stattfindet*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build useful sentences for an email.', items: [
            { a: 'Ich freue mich auf Ihre Antwort.', why: '*sich freuen auf* + Akkusativ: a common last sentence.' },
            { a: 'Das tut mir sehr leid.', why: '*Das tut mir leid*: a polite apology.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Planning together and giving opinions',
      about: 'Make suggestions, react to a partner and give your opinion with a reason.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In many B1 exams you plan something with a partner, for example a party or a trip. Make suggestions, react to what your partner says and agree on a plan. Give your opinion with a reason.' },
          { t: 'table', caption: 'Phrases for planning together', explain: ['head', 'col0'], quiz: true, head: ['Purpose', 'German'], rows: [
            ['make a suggestion', 'Wie wäre es, wenn wir …? / Ich schlage vor, dass … / Wir könnten …'],
            ['agree', 'Das ist eine gute Idee. / Einverstanden.'],
            ['disagree politely', 'Ich bin nicht sicher. / Das finde ich nicht so gut, weil …'],
            ['give an opinion', 'Ich finde, dass … / Meiner Meinung nach …'],
            ['ask your partner', 'Was meinst du? / Was hältst du davon?'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Planning a farewell party for the teacher', lines: [
            { who: 'Lukas', s: 'Unser Kurs ist nächste Woche zu Ende. Wir könnten doch ein kleines Fest für Frau Schulz organisieren. Was meinst du?' },
            { who: 'Fatima', s: 'Das ist eine gute Idee! Ich schlage vor, dass wir es am letzten Kurstag machen.' },
            { who: 'Lukas', s: 'Einverstanden. Und wo? Wie wäre es, wenn wir in ein Restaurant gehen?' },
            { who: 'Fatima', s: 'Ich bin nicht sicher. Ein Restaurant ist ziemlich teuer, und nicht alle haben viel Geld. Wir könnten einfach im Kursraum feiern.' },
            { who: 'Lukas', s: 'Stimmt, das ist günstiger. Dann bringt jeder etwas zu essen mit.' },
            { who: 'Fatima', s: 'Gut. Und ein Geschenk? Meiner Meinung nach wäre ein Buch schön.' },
            { who: 'Lukas', s: 'Super, dann sammeln wir Geld. Ich kümmere mich darum.' },
            { who: 'Fatima', s: 'Prima, und ich frage die anderen, wer was mitbringt.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the exam, both partners should speak about the same amount. Ask your partner questions, and do not only say *ja* or *nein*: give a reason.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Am Ende wollen sie im Kursraum feiern.', a: 't', why: 'Fatima suggests the classroom, and Lukas agrees: *Stimmt, das ist günstiger.*' },
            { q: 'Fatima findet ein Restaurant zu teuer.', a: 't', why: '*Ein Restaurant ist ziemlich teuer.*' },
            { q: 'Das Fest ist am ersten Kurstag.', a: 'f', why: '*am letzten Kurstag*: on the last day.' },
            { q: 'Lukas fragt die anderen, was sie mitbringen.', a: 'f', why: 'Fatima does this. Lukas collects the money.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right reaction.', items: [
            { q: 'Partner: „Wir könnten am Samstag ins Museum gehen.“ Sie sind einverstanden:', o: ['Gute Idee, das machen wir.', 'Ich bin nicht sicher.', 'Was hältst du davon?'], why: 'You agree: *Gute Idee*.' },
            { q: 'Partner: „Wie wäre es mit einem Picknick?“ Sie finden die Idee nicht so gut:', o: ['Ich weiß nicht, das Wetter soll schlecht werden.', 'Einverstanden, das ist super.', 'Ja, ich kümmere mich darum.'], why: 'You disagree politely and give a reason.' },
            { q: 'Sie möchten wissen, was Ihr Partner denkt:', o: ['Was hältst du davon?', 'Ich schlage vor, dass wir gehen.', 'Das finde ich gut.'], why: '*Was hältst du davon?* asks for your partner’s opinion.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the phrases.', items: [
            { q: 'Wie ___ es, wenn wir zusammen kochen? (sein, Konjunktiv II)', a: ['wäre', 'waere'], why: '*Wie wäre es, wenn …?*: a polite suggestion.' },
            { q: 'Ich schlage vor, dass wir den Zug ___. (nehmen)', a: ['nehmen'], why: 'After *dass*, the verb goes to the end: *wir nehmen*.' },
            { q: 'Was ___ du davon? (halten)', a: ['hältst', 'haeltst'], why: '*halten* changes its vowel with *du*: *du hältst*.' },
            { q: 'Wir ___ einen Kuchen backen. (können, Konjunktiv II)', a: ['könnten', 'koennten'], why: '*Wir könnten …*: a soft suggestion.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Ich schlage vor, dass wir im Park feiern.', why: 'After *dass*, the verb *feiern* goes to the end.' },
            { a: 'Das finde ich nicht so gut.', why: '*Das* in position one, then the verb *finde*, then the subject *ich*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Text: „Der Kurs fällt heute aus.“ Was ist richtig?', o: ['Heute gibt es keinen Kurs.', 'Der Kurs beginnt heute später.', 'Der Kurs ist heute in einem anderen Raum.'], why: '*ausfallen*: it does not take place.' },
      { q: 'Am Ende einer E-Mail an die Kursleiterin schreiben Sie:', o: ['Mit freundlichen Grüßen', 'Hab dich lieb', 'Bis gleich, tschüss!'], why: 'The formal ending.' },
      { q: 'Partner: „Wir könnten ein Fest machen.“ Sie sind einverstanden:', o: ['Einverstanden!', 'Was meinst du?', 'Ich bin nicht sicher.'], why: '*Einverstanden*: I agree.' },
      { q: 'Abfahrt 10:40 Uhr, 20 Minuten Verspätung. Der Zug fährt um ___ ab.', o: ['11:00 Uhr', '10:40 Uhr', '10:20 Uhr'], why: '10:40 plus 20 minutes.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Ich kann nicht kommen, weil ich arbeiten ___. (müssen)', a: ['muss'], why: 'After *weil*, the modal verb goes to the end: *muss*.' },
      { q: 'Ich freue mich auf ___ Antwort. (your, formal)', a: ['Ihre'], why: 'Formal *Ihre*, with a capital letter.' },
      { q: 'Wie ___ es mit einem Ausflug? (sein, Konjunktiv II)', a: ['wäre', 'waere'], why: '*Wie wäre es mit …?*: a suggestion.' },
      { q: 'Was ___ du davon? (halten)', a: ['hältst', 'haeltst'], why: '*du hältst*: the vowel changes.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the mistake.', items: [
      { s: 'Könnten [sie] mir bitte helfen, Frau Schulz?', why: 'The formal *Sie* has a capital letter.' },
      { s: 'Ich habe eine Frage zum [unterricht].', why: 'Nouns start with a capital letter: *Unterricht*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the words with the same meaning.', pairs: [
      ['anfangen', 'beginnen'],
      ['gratis', 'kostenlos'],
      ['kaputt', 'funktioniert nicht'],
    ] },
  ],
};
