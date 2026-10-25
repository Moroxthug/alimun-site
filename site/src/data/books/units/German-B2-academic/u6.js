// German B2 for study and exams, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
// Practice in the format of B2 exams such as Goethe B2, telc B2 and TestDaF; no official material.
export const UNIT = {
  id: 'u6',
  title: 'Exam skills',
  goal: 'Prepare for a B2 exam with strategies for every part. Practise in the format of exams like Goethe B2, telc B2 and TestDaF.',
  art: 'dragon',
  tags: { skills: ['reading', 'listening', 'writing', 'speaking', 'exam'], topics: ['exam-strategies', 'b2-exam', 'testdaf', 'graph-description', 'long-turn', 'error-checking'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Reading and listening under time pressure',
      about: 'Read and listen strategically: tasks first, key words, synonyms and traps.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'B2 exams such as Goethe B2, telc B2 and TestDaF test reading, listening, writing and speaking, but each exam has its own tasks and timing. Exam providers usually publish practice tests on their websites; do at least one under real time conditions, so that you know the format before the day.\n\nIn reading and listening, time is the main problem. You do not need to understand every word. You need to find the information the task asks for.' },
          { t: 'table', caption: 'Strategies for reading and listening', explain: ['head', 'col0', 'col1'], head: ['Strategy', 'How it works'], rows: [
            ['tasks first', 'Read the questions before the text, so that you know what to look for.'],
            ['skimming', 'Read quickly for the general idea: title, first sentences, last paragraph.'],
            ['scanning', 'Look for one detail: a name, a number, a key word or its synonym.'],
            ['synonyms', 'Tasks rarely repeat the words of the text. Expect the same idea in other words.'],
            ['traps', 'A wrong answer often uses a word from the text but changes the meaning.'],
            ['timing', 'Do not get stuck. Mark a difficult item, go on and come back at the end.'],
          ] },
        ],
        [
          { t: 'reading', title: 'Mentoring für Studierende aus dem Ausland', md: 'Der Studienbeginn in einem fremden Land ist für viele eine Herausforderung. Neben der Sprache müssen sich internationale Studierende an ein neues Hochschulsystem gewöhnen: Wie melde ich mich zu Prüfungen an? Was erwarten die Lehrenden in einer Hausarbeit? An vielen Hochschulen gibt es deshalb Mentoring-Programme, in denen Studierende höherer Semester neue Kommilitoninnen und Kommilitonen begleiten.\n\nDas Prinzip ist einfach: Eine Mentorin oder ein Mentor trifft sich im ersten Semester regelmäßig mit einer kleinen Gruppe. Gemeinsam besucht man die Bibliothek, bespricht den Stundenplan oder übt, wie man eine E-Mail an eine Professorin schreibt. Die Treffen finden oft in lockerer Atmosphäre statt, etwa in der Mensa oder bei einem gemeinsamen Ausflug. Fachliche Nachhilfe ist allerdings meist nicht vorgesehen; dafür gibt es eigene Tutorien.\n\nTeilnehmende berichten, dass ihnen vor allem der persönliche Kontakt geholfen habe. Viele hätten sich schneller zurechtgefunden und weniger allein gefühlt. Für die Mentorinnen und Mentoren lohnt sich das Engagement ebenfalls: Sie sammeln Erfahrung in Beratung und interkultureller Kommunikation, und manche Hochschulen bescheinigen die Tätigkeit im Zeugnis oder mit Leistungspunkten.\n\nWer teilnehmen möchte, meldet sich in der Regel vor Semesterbeginn beim International Office an. Die Teilnahme ist freiwillig und meist kostenlos. Da die Zahl der Plätze begrenzt sein kann, lohnt sich eine frühe Anmeldung.' },
          { t: 'ex', kind: 'choice', h: 'Exam practice: choose the right answer.', items: [
            { q: 'Wer begleitet die neuen Studierenden?', o: ['Studierende, die schon länger studieren', 'Professorinnen und Professoren', 'Mitarbeitende der Bibliothek'], why: '*Studierende höherer Semester*: students who have studied for longer. The other two are places or people mentioned in the text, a typical trap.' },
            { q: 'Was gehört normalerweise nicht zum Mentoring?', o: ['Nachhilfe im Studienfach', 'Hilfe beim Stundenplan', 'ein Besuch der Bibliothek'], why: '*Fachliche Nachhilfe ist allerdings meist nicht vorgesehen.*' },
            { q: 'Was haben die Mentorinnen und Mentoren davon?', o: ['Sie gewinnen Erfahrung in Beratung.', 'Sie bekommen immer Geld dafür.', 'Sie müssen keine Prüfungen schreiben.'], why: '*Sie sammeln Erfahrung in Beratung …* The text mentions certificates or credits at some universities, not money.' },
          ] },
        ],
        [
          { t: 'text', md: 'Listening tasks work in the same way. Read the following as if you were listening to an announcement at the start of a lecture. In the exam, read the statements before the recording starts and listen for numbers, changes and words like *nicht*, *nur* and *alle*.' },
          { t: 'reading', title: 'Ansage zu Beginn der Vorlesung', md: 'Guten Morgen zusammen. Bevor wir mit dem neuen Kapitel anfangen, habe ich noch einige organisatorische Hinweise für Sie. Zuerst zur Klausur: Sie findet nicht wie angekündigt am 12. Februar statt, sondern eine Woche später, am 19. Februar, und zwar im großen Hörsaal im Hauptgebäude. Bitte melden Sie sich bis Ende Januar im Online-Portal an. Eine Anmeldung per E-Mail ist leider nicht möglich, auch wenn das in den letzten Jahren manchmal so gemacht wurde. Ich weiß, dass der neue Termin bei einigen von Ihnen mit einer anderen Prüfung kollidiert. Sprechen Sie mich in diesem Fall bitte direkt nach der Vorlesung an.\n\nAußerdem fällt die Vorlesung am nächsten Donnerstag aus, weil ich auf einer Tagung bin. Die Folien zu diesem Termin stelle ich Ihnen aber online zur Verfügung, und ich möchte betonen: Der Stoff ist klausurrelevant. Wenn Sie dazu Fragen haben, können Sie gern in das Tutorium am Freitag gehen. Das Tutorium findet ganz normal statt.\n\nUnd schließlich: Meine Sprechstunde verschiebe ich in dieser Woche ausnahmsweise von Dienstag auf Mittwoch, gleiche Uhrzeit, gleicher Raum. So, dann fangen wir an.' },
          { t: 'ex', kind: 'tf', h: 'Exam practice: true or false?', items: [
            { q: 'Die Klausur findet am 12. Februar statt.', a: 'f', why: 'It was moved one week later, to 19 February. A changed date is a classic listening trap.' },
            { q: 'Man kann sich auch per E-Mail anmelden.', a: 'f', why: '*… eine Anmeldung per E-Mail ist leider nicht möglich.*' },
            { q: 'Nächsten Donnerstag gibt es keine Vorlesung.', a: 't', why: '*… fällt die Vorlesung am nächsten Donnerstag aus*: *ausfallen* = not take place.' },
            { q: 'Der Stoff vom nächsten Donnerstag kommt nicht in der Klausur vor.', a: 'f', why: '*… der Stoff ist klausurrelevant*: it is part of the exam.' },
            { q: 'Wer am neuen Termin eine andere Prüfung hat, soll eine E-Mail schreiben.', a: 'f', why: 'The lecturer asks them to come and speak *direkt nach der Vorlesung*.' },
            { q: 'In dieser Woche ist die Sprechstunde am Mittwoch.', a: 't', why: 'It moves *ausnahmsweise von Dienstag auf Mittwoch*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Text and task often use different words. Match the expressions with the same meaning.', pairs: [
            ['ausfallen', 'nicht stattfinden'],
            ['klausurrelevant', 'prüfungsrelevant'],
            ['sich zurechtfinden', 'sich orientieren können'],
            ['nicht vorgesehen', 'nicht geplant'],
            ['bescheinigen', 'schriftlich bestätigen'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Writing: planning, word limits and checking',
      about: 'Plan before you write, keep to the task and check the typical mistakes.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'B2 writing tasks often ask for an opinion text, for example a forum post, and a formal message such as a request or a complaint. Some exams for university admission also ask you to describe a graph and then discuss the topic.\n\nPlan for a few minutes before you write. Underline every point the task asks you to cover: missing points cost marks, even when the language is good. Decide on your paragraphs and the connectors you want to use. Keep close to the number of words in the task, and keep some minutes at the end to check your text.' },
          { t: 'table', caption: 'What to check at the end', explain: ['head', 'col0', 'col1'], head: ['Area', 'What to look for'], rows: [
            ['task', 'Have I answered every point of the task?'],
            ['word order', 'Verb second in main clauses, verb at the end after *weil*, *dass*, *obwohl*.'],
            ['cases', 'The right case after prepositions and verbs: *für* + Akkusativ, *mit* + Dativ.'],
            ['endings', 'Adjective endings, for example *mit freundlichen Grüßen*.'],
            ['spelling', 'All nouns start with a capital letter.'],
            ['register', '*Sie* or *du*, used the same way from start to end.'],
          ] },
        ],
        [
          { t: 'text', md: 'To describe a graph, you need a small set of phrases. Note the prepositions: a value rises **von** one number **auf** another, and **um** the difference.' },
          { t: 'examples', items: [
            { s: '**Die Grafik zeigt**, wie sich die Zahl der Studienanfänger entwickelt hat.', n: 'The first sentence names what the graph shows.' },
            { s: 'Die Zahl ist **von** 200 **auf** 300 gestiegen.', n: '*von … auf …*: from the old value to the new value.' },
            { s: 'Der Anteil ist **um** 5 Prozentpunkte gesunken.', n: '*um*: the size of the change.' },
            { s: 'Die Kosten **haben sich verdoppelt**.', n: '*sich verdoppeln*: to double.' },
            { s: '**Im Vergleich zum** Vorjahr gab es mehr Bewerbungen.', n: '*im Vergleich zu* + Dativ: compared with.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Check the text: find the mistake in each sentence.', items: [
            { s: 'Ich interessiere mich sehr für [dem] Kurs im Sommer.', why: '*für* takes the Akkusativ: *für den Kurs*.' },
            { s: 'Ich schreibe Ihnen, weil ich [habe] eine Frage zur Anmeldung.', why: 'After *weil* the verb goes to the end: *weil ich eine Frage zur Anmeldung habe*.' },
            { s: 'Ich freue mich auf Ihre [antwort].', why: 'Nouns start with a capital letter: *Antwort*.' },
            { s: 'Die Zahl der Bewerbungen ist von 400 [bis] 600 gestiegen.', why: 'With a change: *von … auf …*, not *bis*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the description of a graph.', items: [
            { q: 'Die Zahl der Studierenden ist von 12 000 ___ 15 000 gestiegen.', a: ['auf'], why: '*von … auf …*: the new value comes after *auf*.' },
            { q: 'Der Anteil der Online-Kurse ist ___ zehn Prozentpunkte gestiegen.', a: ['um'], why: '*um* gives the size of the change.' },
            { q: '___ Vergleich zum Vorjahr gab es weniger Bewerbungen.', a: ['Im'], why: '*im Vergleich zu* + Dativ.' },
            { q: 'Die Mieten haben sich in zehn Jahren fast ___. (doppelt)', a: ['verdoppelt'], why: '*sich verdoppeln*, Perfekt: *haben sich verdoppelt*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence fits the task?', items: [
            { q: 'Formelle Nachricht an das Studierendensekretariat: der erste Satz', o: ['Sehr geehrte Damen und Herren,', 'Hallo zusammen,', 'Hi!'], why: 'To an office whose contact person you do not know: *Sehr geehrte Damen und Herren*.' },
            { q: 'Forumsbeitrag: Sie nennen Ihre Meinung.', o: ['Meiner Meinung nach sollten Prüfungen auch mündlich möglich sein.', 'Die Grafik zeigt die Entwicklung der Prüfungen.', 'Mit freundlichen Grüßen'], why: 'An opinion text needs your view: *Meiner Meinung nach …*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Speaking: a long turn and a discussion',
      about: 'Structure a short talk on your own and react well in a discussion.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Many B2 exams have a part where you speak alone for a few minutes on a topic, and a part where you discuss with a partner or the examiner. For the long turn, a clear structure helps you and the listener. A common plan: introduce the topic, describe the situation in your country, give advantages and disadvantages, state your opinion, and end with a short conclusion. In your preparation time, note only key words, not full sentences.' },
          { t: 'table', caption: 'Phrases for a long turn', explain: ['head', 'col0'], head: ['Stage', 'Phrase'], rows: [
            ['introducing', 'Ich möchte heute über das Thema … sprechen.'],
            ['your country', 'In meinem Heimatland ist es üblich, dass …'],
            ['advantages', 'Ein großer Vorteil ist, dass …'],
            ['disadvantages', 'Ein Nachteil besteht darin, dass …'],
            ['your opinion', 'Ich persönlich bin der Meinung, dass …'],
            ['concluding', 'Abschließend möchte ich sagen, dass …'],
          ] },
        ],
        [
          { t: 'text', md: 'In the discussion, examiners want to see that you **interact**: you react to what your partner says, ask for their opinion and do not only give your own monologue. If you need time to think, use a phrase instead of staying silent.' },
          { t: 'examples', items: [
            { s: '**Was hältst du davon?** / **Wie sehen Sie das?**', n: 'Ask your partner for their opinion.' },
            { s: '**Lassen Sie mich kurz überlegen.**', n: 'You win a few seconds to think.' },
            { s: '**Da hast du recht, aber** man muss auch bedenken, dass …', n: 'Agree in part and add another point.' },
            { s: '**Ich meine damit**, dass …', n: 'You explain what you said in other words, for example after a mistake.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Which stage of the long turn is it?', pairs: [
            ['Ich möchte heute über das Thema Homeoffice sprechen.', 'Einleitung'],
            ['In meinem Heimatland arbeiten viele noch im Büro.', 'Situation im Heimatland'],
            ['Ein Nachteil besteht darin, dass man sich isoliert fühlt.', 'Nachteil'],
            ['Ich persönlich bin der Meinung, dass eine Mischung ideal ist.', 'eigene Meinung'],
            ['Abschließend möchte ich sagen, dass beide Modelle Vorteile haben.', 'Schluss'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What is the best thing to say?', items: [
            { q: 'Sie brauchen ein paar Sekunden zum Nachdenken.', o: ['Lassen Sie mich kurz überlegen.', 'Keine Ahnung.', 'Nächste Frage, bitte.'], why: 'A phrase that gains time without ending the conversation.' },
            { q: 'Ihre Partnerin hat ihre Meinung gesagt. Sie wollen das Gespräch fortsetzen.', o: ['Da hast du teilweise recht, aber man muss auch die Kosten bedenken.', 'Okay.', 'Jetzt spreche ich über mein Thema.'], why: 'React to her point and add a new aspect: this shows interaction.' },
            { q: 'Sie haben lange gesprochen. Jetzt soll Ihr Partner etwas sagen.', o: ['Was hältst du davon?', 'Ich bin fertig.', 'Du musst jetzt reden.'], why: 'An open question invites your partner politely.' },
            { q: 'Sie merken, dass Ihr Satz unklar war.', o: ['Ich meine damit, dass die Kurse flexibler sein sollten.', 'Vergessen Sie das.', 'Das war falsch, sorry.'], why: '*Ich meine damit …*: you explain your point again in other words.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build sentences for the speaking exam.', items: [
            { a: 'Ein großer Vorteil ist die Flexibilität.', why: 'Subject *Ein großer Vorteil* first, the verb *ist* second.' },
            { a: 'Lassen Sie mich kurz überlegen.', why: 'A polite imperative: *Lassen Sie* first, the infinitive *überlegen* at the end.' },
            { a: 'Ich möchte über das Thema Homeoffice sprechen.', why: '*möchte* second, the infinitive *sprechen* at the end.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Was macht man am besten zuerst bei einer Leseaufgabe?', o: ['die Aufgaben lesen', 'jedes Wort im Text verstehen', 'den Text zweimal ganz langsam lesen'], why: 'Read the tasks first, so that you know what to look for.' },
      { q: 'Eine Antwort enthält ein Wort aus dem Text, aber eine andere Bedeutung. Was ist das?', o: ['eine typische Falle', 'immer die richtige Lösung', 'ein Synonym'], why: 'Wrong options often repeat words from the text.' },
      { q: 'Die Zahl ist ___ 50 auf 80 gestiegen.', o: ['von', 'um', 'bis'], why: '*von … auf …*: from the old to the new value.' },
      { q: 'Sie brauchen in der Prüfung Zeit zum Nachdenken. Was sagen Sie?', o: ['Lassen Sie mich kurz überlegen.', 'Das weiß ich nicht.', 'Ich sage nichts.'], why: 'A phrase that gains time.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Der Anteil ist ___ drei Prozentpunkte gesunken.', a: ['um'], why: '*um* gives the size of the change.' },
      { q: 'Ich interessiere mich für ___ Mentoring-Kurs. (der)', a: ['den'], why: '*für* + Akkusativ; masculine: *den Kurs*.' },
      { q: 'Die Vorlesung fällt nächste Woche ___. (findet nicht statt)', a: ['aus'], why: '*ausfallen* = not take place; the particle *aus* goes to the end.' },
      { q: 'Ein Nachteil besteht ___, dass man wenig Kontakt hat.', a: ['darin'], why: '*bestehen in*: *Ein Nachteil besteht darin, dass …*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the expressions with the same meaning.', pairs: [
      ['nicht stattfinden', 'ausfallen'],
      ['sich verdoppeln', 'doppelt so groß werden'],
      ['im Vergleich zu', 'verglichen mit'],
      ['überlegen', 'nachdenken'],
    ] },
  ],
};
