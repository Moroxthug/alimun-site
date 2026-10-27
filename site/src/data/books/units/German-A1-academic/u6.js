// German A1 for study and exams, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
// Practice in the format of A1 exams such as Goethe-Zertifikat A1: Start Deutsch 1. All tasks and texts are original, not official material.
export const UNIT = {
  id: 'u6',
  title: 'Exam skills',
  goal: 'Get ready for an A1 exam: know the four parts, read the task first, fill in a form, write a short message to three points and practise with exam-style texts. Practice in the format of exams like Goethe-Zertifikat A1: Start Deutsch 1, never official material.',
  art: 'owl',
  tags: { skills: ['reading', 'writing', 'speaking', 'exam-skills'], topics: ['exam-parts', 'exam-instructions', 'true-false', 'signs', 'forms', 'short-message'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'The parts of an A1 exam',
      about: 'Know the four parts of an A1 exam, understand the instructions and read the task first.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Many A1 exams, like Goethe-Zertifikat A1: Start Deutsch 1, have four parts: listening (*Hören*), reading (*Lesen*), writing (*Schreiben*) and speaking (*Sprechen*). The texts are short and about everyday life: a message, an advert, a sign. Always read the **task first**. Then you know what to look for.' },
          { t: 'table', caption: 'Instructions in exams', explain: ['head', 'col1'], quiz: true, head: ['German', 'English'], rows: [
            ['Lesen Sie die Aufgaben.', 'Read the tasks.'],
            ['Kreuzen Sie an: richtig oder falsch.', 'Tick right or wrong.'],
            ['Kreuzen Sie an: a oder b.', 'Tick a or b.'],
            ['Ergänzen Sie das Formular.', 'Complete the form.'],
            ['Schreiben Sie eine Nachricht.', 'Write a message.'],
            ['Stellen Sie sich vor.', 'Introduce yourself.'],
          ] },
        ],
        [
          { t: 'text', md: 'In the speaking part, you often introduce yourself with **key words** on a card: *Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby*. Make one short sentence for each word. Then you ask and answer simple questions with the other people in your group.' },
          { t: 'examples', items: [
            { s: '**Name:** Ich heiße Tomás.', n: 'Your name.' },
            { s: '**Alter:** Ich bin dreiundzwanzig Jahre alt.', n: '*das Alter*: how old you are.' },
            { s: '**Land:** Ich komme aus Chile.', n: '*kommen aus* + country.' },
            { s: '**Wohnort:** Ich wohne in Freiburg.', n: '*wohnen in* + city.' },
            { s: '**Sprachen:** Ich spreche Spanisch und Englisch.', n: 'The languages you speak.' },
            { s: '**Beruf:** Ich bin Student.', n: 'No article before a job: *Ich bin Student*, not *ein Student*.' },
            { s: '**Hobby:** Ich spiele gern Fußball.', n: '*gern* after the verb.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Practise your introduction at home, aloud, until you can say it without notes. It is the same in many exams, and a good start helps you feel calm.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the key word and the sentence.', pairs: [
            ['Alter', 'Ich bin neunzehn Jahre alt.'],
            ['Wohnort', 'Ich wohne in Graz.'],
            ['Sprachen', 'Ich spreche Französisch und Arabisch.'],
            ['Beruf', 'Ich bin Schülerin.'],
            ['Hobby', 'Ich lese gern.'],
          ] },
          { t: 'ex', kind: 'tf', h: 'Good exam habits. True or false?', items: [
            { q: 'Man liest zuerst die Aufgabe.', a: 't', why: 'Read the task first. Then you know what to look for in the text.' },
            { q: 'Man muss jedes Wort im Text verstehen.', a: 'f', why: 'You only need the information for the question. Some words can stay new.' },
            { q: 'Bei „richtig oder falsch“ kreuzt man eine Antwort an.', a: 't', why: 'One cross for each sentence: right or wrong.' },
          ] },
        ],
        [
          { t: 'text', md: 'Signs are short, so every word is important. Look at the small words: **nicht**, **kein**, **nur**. They can change the meaning.' },
          { t: 'reading', title: 'An der Tür der Sprachschule', md: 'Sprachschule am Markt\n\nBüro: Montag bis Donnerstag 9 bis 16 Uhr, Freitag nur 9 bis 12 Uhr\n\nHeute keine Kurse im Raum 3. Die Kurse sind im Raum 7.' },
          { t: 'ex', kind: 'tf', h: 'Read the sign. Richtig oder falsch?', items: [
            { q: 'Am Freitag ist das Büro am Nachmittag offen.', a: 'f', why: '*Freitag nur 9 bis 12 Uhr*: only in the morning.' },
            { q: 'Am Dienstag kann man um 15 Uhr ins Büro gehen.', a: 't', why: 'Monday to Thursday, 9 to 16 Uhr. Tuesday 15 Uhr is in this time.' },
            { q: 'Heute sind die Kurse im Raum 3.', a: 'f', why: '*Heute keine Kurse im Raum 3.* They are in room 7.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'A form and a short message',
      about: 'Fill in a form from a short text, and write a message to three points in about 30 words.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In the writing part of an A1 exam, you often do two things. First you read a short text about a person and **complete a form** with five pieces of information. Then you **write a short message** of about 30 words.' },
          { t: 'reading', title: 'Text', md: 'Tomás Rivera kommt aus Chile. Er ist dreiundzwanzig Jahre alt und studiert in Freiburg. Er möchte einen Deutschkurs machen, am Abend, zweimal pro Woche. Er wohnt in der Bergstraße 5. Seine Telefonnummer ist 0151 222 333.' },
          { t: 'ex', kind: 'gap', h: 'Complete the form for Tomás.', items: [
            { q: 'Familienname: ___', a: ['Rivera'], why: '*Tomás* is his first name, *Rivera* his family name.' },
            { q: 'Herkunftsland: ___', a: ['Chile'], why: '*Herkunftsland* is the country you come from: *Er kommt aus Chile.*' },
            { q: 'Alter: ___', a: ['23', 'dreiundzwanzig'], why: '*Er ist dreiundzwanzig Jahre alt.*' },
            { q: 'Kurszeit: am Morgen oder am Abend? ___', a: ['am Abend', 'Abend'], why: '*Er möchte einen Deutschkurs machen, am Abend.*' },
            { q: 'Straße und Hausnummer: ___', a: ['Bergstraße 5', 'Bergstrasse 5'], why: '*Er wohnt in der Bergstraße 5.*' },
          ] },
        ],
        [
          { t: 'text', md: 'The message task gives you a situation and **three points**. Write a sentence or two for **every** point. Start with a greeting and end with a greeting. Write *Sie* and *Liebe Frau … / Lieber Herr …* to a teacher, *du* and *Liebe … / Lieber …* to a friend.' },
          { t: 'reading', title: 'Aufgabe', md: 'Sie sind krank und können heute nicht zum Kurs kommen. Schreiben Sie eine Nachricht an Ihre Lehrerin, Frau Becker. Schreiben Sie: Warum kommen Sie nicht? Wann kommen Sie wieder? Fragen Sie nach den Hausaufgaben. Schreiben Sie ca. 30 Wörter.' },
          { t: 'reading', title: 'Die Nachricht von Tomás', md: 'Liebe Frau Becker,\n\nich bin leider krank. Ich kann heute nicht zum Kurs kommen. Am Freitag komme ich wieder. Was sind die Hausaufgaben? Können Sie mir bitte eine E-Mail schreiben?\n\nViele Grüße\nTomás Rivera' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the message from Tomás. Which sentence answers the point?', items: [
            { q: 'Warum kommen Sie nicht?', o: ['Ich bin leider krank.', 'Am Freitag komme ich wieder.', 'Viele Grüße'], why: 'Being ill is the reason.' },
            { q: 'Wann kommen Sie wieder?', o: ['Am Freitag komme ich wieder.', 'Ich bin leider krank.', 'Was sind die Hausaufgaben?'], why: '*Am Freitag*: the day he comes back.' },
            { q: 'Fragen Sie nach den Hausaufgaben.', o: ['Was sind die Hausaufgaben?', 'Ich kann heute nicht kommen.', 'Liebe Frau Becker,'], why: 'A question about the homework.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word for a message to the teacher.', items: [
            { q: '___ Frau Becker,', o: ['Liebe', 'Lieber', 'Hallo du'], why: 'For a woman: *Liebe Frau …*. *Lieber* is for a man.' },
            { q: 'Können ___ mir bitte die Hausaufgaben schreiben?', o: ['Sie', 'du', 'ihr'], why: 'To the teacher you write *Sie*.' },
            { q: 'Viele ___', o: ['Grüße', 'Gruß', 'Grüßen'], why: 'The usual ending: *Viele Grüße*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences for a message.', items: [
            { a: 'Ich kann heute nicht kommen.', why: '*kann* in second position, *nicht* before *kommen*, *kommen* at the end.' },
            { a: 'Am Montag komme ich wieder.', why: 'The day first, then the verb *komme*, then *ich*, then *wieder*.' },
            { a: 'Was sind die Hausaufgaben?', why: 'A W-question: *Was*, then the verb *sind*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Before you finish, check three things. Did you write about every point? Is the greeting right, *Sie* or *du*? Is the message about the right length? A message of 30 words is about five short sentences.' },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: exam-style texts',
      about: 'Practise with a short message and two adverts in the style of an A1 reading task.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'First read the sentences in the exercise. Then read the text and look for the answers. Remember: in a *richtig oder falsch* task, every sentence is right or wrong. There is no *not given*.' },
          { t: 'reading', title: 'Eine E-Mail von Jana', md: 'Hallo Kofi,\n\nwie geht es dir? Am Samstag lerne ich mit Lena für den Test. Wir lernen in der Bibliothek, von zehn bis eins. Möchtest du mitkommen? Bitte bring dein Wörterbuch mit, ich habe keins. Am Abend gehen wir zusammen ins Kino.\n\nBis Samstag!\nJana' },
          { t: 'ex', kind: 'tf', h: 'Richtig oder falsch?', items: [
            { q: 'Jana und Lena lernen am Samstag zusammen.', a: 't', why: '*Am Samstag lerne ich mit Lena für den Test.*' },
            { q: 'Sie lernen am Nachmittag zu Hause.', a: 'f', why: 'They learn *in der Bibliothek, von zehn bis eins*, so in the morning, and not at home.' },
            { q: 'Jana hat kein Wörterbuch.', a: 't', why: '*ich habe keins* means *ich habe kein Wörterbuch*. So she asks Kofi: *Bitte bring dein Wörterbuch mit.*' },
          ] },
        ],
        [
          { t: 'text', md: 'In another kind of task, you read a sentence about a person and choose the right advert or web page: **a** or **b**. Look for the words that the person really needs.' },
          { t: 'reading', title: 'Sie möchten am Wochenende einen Deutschkurs machen.', md: '**a** Sprachschule Lindenhof: Deutschkurse A1 und A2. Montag bis Freitag, 18 bis 20 Uhr. Kleine Gruppen, nur acht Personen.\n\n**b** Volkshochschule am Park: Deutsch A1 am Samstag und am Sonntag, 9 bis 13 Uhr. Anmeldung im Büro oder online.' },
          { t: 'ex', kind: 'choice', h: 'Read the sentence and the two adverts. Choose a or b.', items: [
            { q: 'Sie möchten am Wochenende einen Deutschkurs machen. Welche Anzeige passt?', o: ['b', 'a'], why: 'Advert b has courses on Saturday and Sunday, the weekend. Advert a is Monday to Friday.' },
            { q: 'Sie möchten am Abend lernen. Die Gruppe ist klein. Welche Anzeige passt?', o: ['a', 'b'], why: 'Advert a: *18 bis 20 Uhr* (in the evening) and *nur acht Personen*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Wrong answers often have words from the sentence, for example *Deutsch* or *A1*. Both adverts here have them. Look for the detail that is different: the day or the time.' },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'A learner writes about the texts, but each sentence has a mistake. Find and fix it.', items: [
            { s: 'Jana lernt am Samstag in der [Schule].', a: ['Bibliothek'], why: '*Wir lernen in der Bibliothek.*' },
            { s: 'Die Sprachschule Lindenhof hat Kurse am [Wochenende].', a: ['Abend'], why: 'Lindenhof has courses from 18 to 20 Uhr, Monday to Friday: in the evening.' },
            { s: 'In der Volkshochschule ist der Kurs am [Abend].', a: ['Morgen', 'Vormittag', 'Wochenende'], why: '9 bis 13 Uhr is in the morning, on Saturday and Sunday.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Was machen Sie zuerst bei einer Leseaufgabe?', o: ['Ich lese die Aufgabe.', 'Ich lese jedes Wort im Text.', 'Ich kreuze schnell a an.'], why: 'Read the task first, then the text.' },
      { q: '„Stellen Sie sich vor.“ Was sagen Sie?', o: ['Ich heiße Ana und komme aus Peru.', 'Wie heißen Sie?', 'Was bedeutet das?'], why: '*sich vorstellen*: you say who you are.' },
      { q: 'Die Aufgabe hat drei Punkte. Worüber schreiben Sie?', o: ['über alle drei Punkte', 'über einen Punkt', 'über zwei Punkte'], why: 'Write about every point in the task.' },
      { q: 'Ihr Lehrer heißt Herr Wagner. Sie schreiben eine Nachricht und beginnen mit: „___“', o: ['Lieber Herr Wagner,', 'Liebe Herr Wagner,', 'Hallo Wagner,'], why: 'For a man: *Lieber Herr …*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Kreuzen Sie ___: richtig oder falsch. (ankreuzen)', a: ['an'], why: '*ankreuzen* is separable: *Kreuzen Sie … an*.' },
      { q: 'Ich bin leider krank. Ich ___ heute nicht kommen. (können)', a: ['kann'], why: '*ich kann*, the infinitive *kommen* at the end.' },
      { q: 'Viele ___, Tomás', a: ['Grüße', 'Gruesse'], why: 'The usual ending: *Viele Grüße*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Bei „ca. 30 Wörter“ ist eine Nachricht mit 100 Wörtern gut.', a: 'f', why: '*ca.* means about. 100 words is much too long.' },
      { q: 'An Ihre Lehrerin schreiben Sie mit „Sie“.', a: 't', why: 'To a teacher you usually write *Sie*.' },
      { q: '„Büro: Freitag nur 9 bis 12 Uhr.“ Am Freitag um 14 Uhr ist das Büro offen.', a: 'f', why: '*nur 9 bis 12 Uhr*: at 14 Uhr it is closed.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the key word and the sentence.', pairs: [
      ['Land', 'Ich komme aus Peru.'],
      ['Beruf', 'Ich bin Studentin.'],
      ['Alter', 'Ich bin zwanzig Jahre alt.'],
      ['Wohnort', 'Ich wohne in Bern.'],
    ] },
  ],
};
