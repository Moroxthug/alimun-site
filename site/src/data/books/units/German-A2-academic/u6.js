// German A2 for study and exams, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
// Practice in the format of A2 exams such as Goethe A2 and telc A2. All tasks and texts are original, not official material.
export const UNIT = {
  id: 'u6',
  title: 'Exam skills',
  goal: 'Get ready for an A2 exam: understand the task types, read the questions first, write a short message to a word limit and practise with an exam-style text.',
  art: 'owl',
  tags: { skills: ['reading', 'writing', 'exam-skills'], topics: ['multiple-choice', 'matching', 'synonyms', 'short-message', 'word-limit', 'exam-instructions'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Multiple-choice and matching tasks',
      about: 'Read the question first, look for words with the same meaning and avoid the traps.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Many A2 exams, like Goethe A2 and telc A2, have four parts: reading (*Lesen*), listening (*Hören*), writing (*Schreiben*) and speaking (*Sprechen*). In reading tasks you often choose a, b or c, match texts and people, or decide if a sentence is right or wrong. Always read the **task and the questions first**. Then you know what to look for in the text.' },
          { t: 'table', caption: 'Instructions in exams', explain: ['head', 'col1'], quiz: true, head: ['German', 'English'], rows: [
            ['Lesen Sie zuerst die Aufgaben.', 'Read the tasks first.'],
            ['Kreuzen Sie an: a, b oder c.', 'Tick a, b or c.'],
            ['Es gibt nur eine richtige Lösung.', 'There is only one correct answer.'],
            ['Ordnen Sie zu.', 'Match.'],
            ['Richtig oder falsch?', 'Right or wrong?'],
            ['Eine Anzeige passt nicht.', 'One advert does not match.'],
          ] },
        ],
        [
          { t: 'text', md: 'The text often uses **other words** than the question. The question says *kostenlos*, the text says *gratis*. Learn words with the same or a similar meaning in pairs.' },
          { t: 'table', caption: 'Same meaning, other words', explain: ['head'], quiz: true, head: ['In the question', 'In the text'], rows: [
            ['kostenlos', 'gratis'],
            ['am Wochenende', 'am Samstag und am Sonntag'],
            ['geschlossen', 'nicht geöffnet'],
            ['beginnen', 'anfangen'],
            ['günstig', 'nicht teuer'],
          ] },
          { t: 'tip', art: 'owl', md: 'Wrong answers often use a number or a word from the text, but in the wrong place. Watch the small words too: *nicht*, *kein*, *nur*, *noch nicht*. They can change the whole meaning.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words with the same meaning.', pairs: [
            ['gratis', 'kostenlos'],
            ['anfangen', 'beginnen'],
            ['am Samstag und am Sonntag', 'am Wochenende'],
            ['nicht teuer', 'günstig'],
            ['nicht geöffnet', 'geschlossen'],
          ] },
          { t: 'ex', kind: 'tf', h: 'Good exam habits. True or false?', items: [
            { q: 'Man liest zuerst den ganzen Text sehr langsam und genau.', a: 'f', why: 'Read the questions first. Then look in the text for what you need.' },
            { q: 'Bei „Kreuzen Sie an: a, b oder c“ ist nur eine Lösung richtig.', a: 't', why: '*Es gibt nur eine richtige Lösung*: one cross per question.' },
            { q: 'Der Text benutzt oft andere Wörter als die Frage.', a: 't', why: 'The question says *kostenlos*, the text may say *gratis*.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Prüfungstraining A2', md: 'Unser Kurs „Prüfungstraining A2“ fängt am 2. Mai an und findet jeden Samstag von 9 bis 12 Uhr statt. Die Teilnahme ist gratis, aber Sie müssen sich bis zum 25. April anmelden. Bitte bringen Sie kein Buch mit. Wir haben alle Materialien für Sie.' },
          { t: 'ex', kind: 'choice', h: 'Read the questions first. Then read the text and choose a, b or c.', items: [
            { q: 'Der Kurs beginnt ___.', o: ['am 2. Mai', 'am 25. April', 'am 12. Mai'], why: '*fängt am 2. Mai an*. *anfangen* = *beginnen*. The 25 April is the last day to register.' },
            { q: 'Der Kurs ist ___.', o: ['am Wochenende', 'am Abend', 'jeden Tag'], why: '*jeden Samstag*: Saturday is the weekend.' },
            { q: 'Der Kurs kostet ___.', o: ['nichts', '25 Euro', '12 Euro'], why: '*gratis* means free. 25 and 12 are a date and a time in the text.' },
            { q: 'Was sagt der Text über Bücher?', o: ['Man braucht kein Buch.', 'Man muss ein Buch kaufen.', 'Man bekommt das Buch am 2. Mai.'], why: '*Bitte bringen Sie kein Buch mit.* The school has the materials.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Writing a short message to a word limit',
      about: 'Write about all the points in the task, in about the right number of words.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In the writing part of an A2 exam, you often write a short message or email. The task tells you the situation, **three points** to write about and about how many words to write. Write about **every** point. A missing point usually costs marks. Do not write much more or much less than the task says.' },
          { t: 'reading', title: 'Aufgabe', md: 'Sie können morgen nicht zum Lerntreffen mit Ihrer Freundin Lena kommen. Schreiben Sie Lena eine Nachricht. Schreiben Sie zu diesen drei Punkten: Entschuldigung und Grund, ein neuer Termin, eine Frage zu den Hausaufgaben. Schreiben Sie ca. 30 bis 40 Wörter.' },
        ],
        [
          { t: 'reading', title: 'Tariqs Nachricht', md: 'Liebe Lena,\n\nes tut mir leid, aber ich kann morgen nicht kommen, weil ich arbeiten muss. Hast du am Samstagvormittag Zeit? Dann können wir bei mir lernen. Und was sind die Hausaufgaben für Montag?\n\nViele Grüße\nTariq' },
          { t: 'text', md: 'Tariq writes about 35 words. He uses one sentence for each point: *es tut mir leid … weil …* for the apology and the reason, *Hast du am Samstagvormittag Zeit?* for a new time, and *was sind die Hausaufgaben …?* for the question. To a friend, he writes *du* and *Liebe Lena*.' },
          { t: 'ex', kind: 'tf', h: 'Look at Tariq’s message. True or false?', items: [
            { q: 'Tariq schreibt, warum er nicht kommen kann.', a: 't', why: '*weil ich arbeiten muss*: that is the reason.' },
            { q: 'Tariq macht keinen neuen Vorschlag.', a: 'f', why: 'He suggests Saturday morning: *Hast du am Samstagvormittag Zeit?*' },
            { q: 'Die Nachricht hat mehr als 60 Wörter.', a: 'f', why: 'It has about 35 words, as the task asks.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence is it?', items: [
            { q: 'Welcher Satz ist ein neuer Termin?', o: ['Können wir uns am Sonntag treffen?', 'Ich kann morgen leider nicht kommen.', 'Was sind die Hausaufgaben?'], why: 'You suggest another day: *am Sonntag*.' },
            { q: 'Welcher Satz ist eine Entschuldigung?', o: ['Es tut mir sehr leid.', 'Bis Samstag!', 'Hast du am Freitag Zeit?'], why: '*Es tut mir leid* is how you say sorry.' },
            { q: 'Welcher Satz ist eine Frage zu den Hausaufgaben?', o: ['Welche Übungen müssen wir machen?', 'Ich muss morgen arbeiten.', 'Viele Grüße, Tariq'], why: 'The exercises you have to do are the homework.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the message.', items: [
            { q: 'Es tut mir ___, aber ich habe morgen keine Zeit.', a: ['leid'], why: '*Es tut mir leid*: I am sorry.' },
            { q: '___ du am Freitag Zeit? (haben)', a: ['Hast'], why: 'A yes/no question: the verb first, *du hast*.' },
            { q: '___ wir am Samstag zusammen lernen? (wollen)', a: ['Wollen'], why: '*Wollen wir …?* makes a suggestion.' },
            { q: 'Viele ___, Tariq', a: ['Grüße', 'Gruesse'], why: 'A friendly ending: *Viele Grüße*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences for the message.', items: [
            { a: 'Es tut mir sehr leid.', why: 'A fixed phrase: *Es tut mir leid*. *sehr* comes before *leid*.' },
            { a: 'Wann hast du Zeit?', why: 'W-question: *Wann*, the verb, then *du*.' },
            { a: 'Kannst du mir die Hausaufgaben schicken?', why: '*Kannst* first. *mir* comes before *die Hausaufgaben*, and *schicken* goes to the end.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Before you finish, check three things: Did you write about every point? Is the greeting right, *du* or *Sie*? Is the number of words about right?' },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: an exam-style text',
      about: 'Practise with a short text and questions in the style of an A2 reading task.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Read the questions on the next page first. Then read the text and look for the answers. Remember: the text may use other words than the questions.' },
          { t: 'reading', title: 'Lernen in der Stadtbibliothek', md: 'Seit Januar gibt es in der Stadtbibliothek einen neuen Lernraum. Er ist im dritten Stock und hat 40 Plätze, eine kleine Küche und schnelles Internet. Viele Schülerinnen, Schüler und Studierende lernen hier für ihre Prüfungen.\n\nDer Lernraum ist von Montag bis Samstag von 9 bis 21 Uhr geöffnet. Man braucht einen Bibliotheksausweis. Der Ausweis kostet für Schüler und Studierende nichts, für alle anderen 15 Euro im Jahr.\n\nIm Lernraum muss man leise sein. Wer zusammen lernen möchte, kann einen von vier Gruppenräumen reservieren. Das geht online oder an der Information im Erdgeschoss.\n\n„Zu Hause habe ich keine Ruhe, weil ich drei Geschwister habe“, sagt die Schülerin Leonie (17). „Hier kann ich mich gut konzentrieren. Und in der Pause trinke ich mit Freunden einen Tee in der Küche.“' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose a, b or c.', items: [
            { q: 'Der neue Lernraum ist ___.', o: ['im dritten Stock', 'im Erdgeschoss', 'im ersten Stock'], why: '*Er ist im dritten Stock.* The information desk is on the ground floor.' },
            { q: 'Wer muss für den Ausweis bezahlen?', o: ['Erwachsene, die nicht zur Schule gehen und nicht studieren', 'alle Schülerinnen und Schüler', 'alle Studierenden'], why: 'Free for school students and university students, 15 Euro for *alle anderen*.' },
            { q: 'Einen Gruppenraum kann man ___ reservieren.', o: ['im Internet oder an der Information', 'nur am Telefon', 'nur im dritten Stock'], why: '*online* = *im Internet*.' },
            { q: 'Warum lernt Leonie in der Bibliothek?', o: ['Zu Hause ist es oft laut.', 'Sie hat zu Hause kein Internet.', 'Sie arbeitet in der Küche.'], why: '*keine Ruhe* means it is not quiet: she has three brothers and sisters.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the text again. True, false or not given?', items: [
            { q: 'Am Sonntag ist der Lernraum geschlossen.', a: 't', why: 'It is open *von Montag bis Samstag*, so not on Sunday.' },
            { q: 'Im Lernraum darf man laut sprechen.', a: 'f', why: '*Im Lernraum muss man leise sein.*' },
            { q: 'Im Lernraum gibt es eine Küche.', a: 't', why: '*eine kleine Küche*.' },
            { q: 'Leonie schreibt bald ihre Abiturprüfung.', a: 'ng', why: 'The text does not say which exam Leonie is learning for.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the question about Leonie, *laut* is not in the text, but *keine Ruhe* means the same. Many exam questions work like this.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Im Text steht „gratis“. Das bedeutet ___.', o: ['kostenlos', 'teuer', 'geschlossen'], why: '*gratis* = *kostenlos*.' },
      { q: '„Der Kurs fängt um 9 Uhr an.“ Wann beginnt der Kurs?', o: ['um 9 Uhr', 'um 10 Uhr', 'um 19 Uhr'], why: '*anfangen* = *beginnen*.' },
      { q: 'Was machen Sie zuerst bei einer Leseaufgabe?', o: ['Ich lese die Aufgaben.', 'Ich lese jedes Wort im Text.', 'Ich kreuze schnell a an.'], why: 'Read the tasks first, then the text.' },
      { q: 'Die Aufgabe hat drei Punkte. Worüber schreiben Sie?', o: ['über alle drei Punkte', 'über einen Punkt', 'über zwei Punkte'], why: 'Write about every point in the task.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Kreuzen Sie ___: a, b oder c. (ankreuzen)', a: ['an'], why: '*ankreuzen* is separable: *Kreuzen Sie … an*.' },
      { q: 'Es tut mir ___, ich kann nicht kommen.', a: ['leid'], why: '*Es tut mir leid*.' },
      { q: '___ wir am Montag zusammen lernen? (wollen)', a: ['Wollen'], why: '*Wollen wir …?* makes a suggestion.' },
      { q: 'Die Bibliothek ist am Sonntag nicht geöffnet. Sie ist ___.', a: ['geschlossen', 'zu'], why: '*nicht geöffnet* = *geschlossen*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'In einer Multiple-Choice-Aufgabe kreuzt man bei jeder Frage nur eine Lösung an.', a: 't', why: '*Es gibt nur eine richtige Lösung.*' },
      { q: 'Bei „ca. 30 Wörter“ ist ein Text mit 80 Wörtern gut.', a: 'f', why: '*ca.* means about. 80 words is much too long.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the words with the same meaning.', pairs: [
      ['günstig', 'nicht teuer'],
      ['online', 'im Internet'],
      ['keine Ruhe', 'laut'],
      ['anfangen', 'beginnen'],
    ] },
  ],
};
