// German B2 for study and exams, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Sources and research',
  goal: 'Use sources well: report what authors say with the right verb, quote and cite correctly, paraphrase responsibly and avoid plagiarism.',
  art: 'cat',
  tags: { skills: ['writing', 'reading', 'grammar', 'vocabulary'], topics: ['reporting-verbs', 'konjunktiv-i', 'citation', 'plagiarism', 'research-report'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Reporting verbs for sources',
      about: 'behaupten, betonen, darstellen and more: say exactly what an author does.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'When you write about a source, *sagen* is rarely the best verb. Reporting verbs show what the author does: explains, stresses, admits or doubts something. They can also show your own attitude. *Behaupten* is a good example: it often suggests that the claim is not proven, so *Die Autorin behauptet, …* can sound critical.' },
          { t: 'table', caption: 'Reporting verbs', explain: ['head', 'col1'], quiz: true, head: ['Verb', 'What the author does'], rows: [
            ['behaupten', 'claims something; often suggests it is not proven'],
            ['betonen, hervorheben', 'stresses that something is important'],
            ['darstellen', 'describes or presents something'],
            ['erläutern', 'explains something in detail'],
            ['feststellen', 'states a finding'],
            ['einräumen', 'admits a point against their own position'],
            ['bezweifeln', 'doubts something'],
            ['die Auffassung vertreten', 'holds a view'],
            ['hinweisen auf', 'points out, draws attention to'],
          ] },
        ],
        [
          { t: 'text', md: 'What an author says is often reported in **indirect speech** with the **Konjunktiv I**. It shows that you are reporting, not stating the fact yourself. The form for *er/sie/es* is the stem + *-e*: *sie habe, er könne, es gebe*. The verb *sein* is irregular: *sie sei*. When the Konjunktiv I looks the same as the normal present (*sie haben*), use the Konjunktiv II: *sie hätten*.\n\nShort alternatives are *laut* + Dativ and *zufolge*, which comes after a noun in the Dativ.' },
          { t: 'examples', items: [
            { s: 'Die Autorin betont, die Ergebnisse **seien** vorläufig.', n: 'Konjunktiv I of *sein*, plural: *seien*.' },
            { s: 'Keller räumt ein, seine Stichprobe **sei** klein.', n: '*einräumen*: he admits a weakness of his own study.' },
            { s: 'Die Forscher stellen fest, viele Befragte **hätten** wenig Zeit.', n: '*sie haben* would look like the present, so the Konjunktiv II *hätten* is used.' },
            { s: '**Laut** der Studie lernen Erwachsene anders als Kinder.', n: '*laut* + Dativ: according to.' },
            { s: '**Dem Bericht zufolge** ist die Nachfrage gestiegen.', n: '*zufolge* comes after the noun, which is in the Dativ.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the verb with a similar meaning.', pairs: [
            ['betonen', 'hervorheben'],
            ['darstellen', 'beschreiben'],
            ['einräumen', 'zugeben'],
            ['bezweifeln', 'in Frage stellen'],
            ['erläutern', 'genauer erklären'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the reporting verb that fits.', items: [
            { q: 'Die Autorin ___, dass ihre Studie nur in einer Stadt durchgeführt wurde. Das sei eine Schwäche.', o: ['räumt ein', 'betont stolz', 'bezweifelt'], why: 'She admits a weakness of her own work: *einräumen*.' },
            { q: 'Der Autor ___ ausführlich, wie die Daten erhoben wurden.', o: ['erläutert', 'bezweifelt', 'räumt ein'], why: 'He explains in detail: *erläutern*.' },
            { q: 'Viele Fachleute ___, dass die Methode zuverlässig ist. Sie halten sie für ungenau.', o: ['bezweifeln', 'betonen', 'stellen fest'], why: 'They think it is not reliable: *bezweifeln*.' },
            { q: 'Die Forscherin ___ besonders, wie wichtig frühe Förderung ist.', o: ['hebt hervor', 'bezweifelt', 'räumt ein'], why: 'She stresses importance: *hervorheben*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Report the statements with the Konjunktiv I.', items: [
            { q: 'Die Autorin schreibt, das Thema ___ bisher kaum erforscht. (sein)', a: ['sei'], why: 'Konjunktiv I of *sein*: *es sei*.' },
            { q: 'Der Forscher betont, die Methode ___ große Vorteile. (haben)', a: ['habe'], why: 'Konjunktiv I: *sie habe*.' },
            { q: 'Die Studierendenvertretung kritisiert, es ___ zu wenige Wohnheimplätze. (geben)', a: ['gebe'], why: 'Konjunktiv I: *es gebe*.' },
            { q: 'Sie erklärt, man ___ die Ergebnisse nicht verallgemeinern. (können)', a: ['könne'], why: 'Konjunktiv I: *man könne*.' },
            { q: 'Die Befragten gaben an, sie ___ zu wenig Zeit. (haben)', a: ['hätten'], why: '*sie haben* looks like the present, so use the Konjunktiv II: *hätten*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Quoting, citing and paraphrasing responsibly',
      about: 'Direct and indirect quotations, references and how to avoid plagiarism.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In academic work you must show which ideas come from others. A **direct quotation**, *wörtliches Zitat*, repeats the exact words in quotation marks. Anything you leave out is marked with three dots in square brackets. An **indirect quotation**, *sinngemäßes Zitat*, gives the idea in your own words. Both need a reference to the source.\n\nHow the reference looks depends on the subject and the department. Many subjects put author, year and page in brackets: *(Keller 2021: 45)* or *(Keller 2021, S. 45)*. Others use footnotes. Indirect quotations are often marked with *vgl.*, short for *vergleiche*. At the end, all sources are listed in the **Literaturverzeichnis**. Ask your department which style to use.' },
          { t: 'examples', items: [
            { s: 'Keller spricht von einem „deutlichen Wandel im Leseverhalten“ (Keller 2021: 45).', n: 'Direct quotation: exact words in „…“, with the page.' },
            { s: 'Das Leseverhalten habe sich stark verändert (vgl. Keller 2021: 45).', n: 'Indirect quotation: own words, Konjunktiv I, *vgl.* before the source.' },
            { s: 'Keller zufolge lesen Studierende heute vor allem digital.', n: 'The author is named in the sentence; the reference still follows in the chosen style.' },
          ] },
        ],
        [
          { t: 'text', md: '**Plagiarism**, *Plagiat*, means presenting someone else’s words or ideas as your own. It includes copying without quotation marks, paraphrasing without a reference and translating a text from another language without naming it. Universities in Germany take plagiarism seriously; it can lead to a failed assignment or worse. Common knowledge, such as *Berlin ist die Hauptstadt Deutschlands*, does not need a reference.' },
          { t: 'tip', art: 'owl', md: 'Write down the full source, with page, as soon as you take notes. Mark copied words clearly in your notes, for example in quotation marks, so that you never mix them up with your own words later.' },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Ein wörtliches Zitat steht in Anführungszeichen.', a: 't', why: 'The exact words go in „…“.' },
            { q: 'Wenn man einen Text mit eigenen Worten wiedergibt, braucht man keine Quelle.', a: 'f', why: 'A paraphrase still needs a reference: the idea comes from someone else.' },
            { q: 'Eine Übersetzung aus einer anderen Sprache ohne Quellenangabe ist auch ein Plagiat.', a: 't', why: 'The words and ideas still belong to the original author.' },
            { q: 'Allgemein bekannte Tatsachen muss man nicht belegen.', a: 't', why: 'Common knowledge does not need a reference.' },
            { q: 'Alle Fächer verwenden genau denselben Zitierstil.', a: 'f', why: 'Styles differ between subjects and departments.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which version is correct?', items: [
            { q: 'Sie übernehmen Kellers genaue Worte.', o: ['Keller spricht von einem „deutlichen Wandel“ (Keller 2021: 45).', 'Keller spricht von einem deutlichen Wandel.', 'Ich sehe einen deutlichen Wandel im Leseverhalten.'], why: 'Exact words need quotation marks and a reference.' },
            { q: 'Sie geben Kellers Idee mit eigenen Worten wieder.', o: ['Das Leseverhalten habe sich verändert (vgl. Keller 2021: 45).', 'Das Leseverhalten hat sich verändert.', '„Das Leseverhalten hat sich verändert“ (vgl. Keller 2021: 45).'], why: 'Own words, a reference with *vgl.*, and no quotation marks.' },
            { q: 'Wie gibt man die Meinung einer Autorin neutral wieder?', o: ['Die Autorin ist der Auffassung, die Methode sei geeignet.', 'Die Methode ist geeignet.', 'Die Autorin behauptet einfach, die Methode wäre super.'], why: 'A neutral reporting verb with Konjunktiv I. *Behaupten* would add doubt.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Find the verbs in the Konjunktiv I.', items: [
            { s: 'Die Autorin betont, die Methode [sei] neu und [habe] klare Vorteile.', why: '*sei* and *habe* are Konjunktiv I. *betont* is the normal present.' },
            { s: 'Der Bericht stellt fest, es [gebe] zu wenige Lernplätze.', why: '*gebe* is the Konjunktiv I of *geben*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a short research report',
      about: 'Read a short report and find its question, method, results and limits.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'Many research reports follow the same order: the research question, the method, the results and a discussion. The discussion often names the **limits** of the study. Watch how carefully the writers state their conclusions.' },
          { t: 'reading', title: 'Wie nutzen Studierende die Universitätsbibliothek?', md: '**Fragestellung.** Die vorliegende Untersuchung geht der Frage nach, wie Studierende die Bibliothek einer mittelgroßen Universität nutzen und welche Angebote sie sich zusätzlich wünschen.\n\n**Methode.** Im Sommersemester wurden die Studierenden aller Fakultäten per E-Mail zu einer Online-Befragung eingeladen. Insgesamt beantworteten 412 Personen den Fragebogen vollständig. Er enthielt geschlossene Fragen zur Nutzung sowie zwei offene Fragen zu Wünschen und Kritik. Die Beantwortung dauerte etwa zehn Minuten.\n\n**Ergebnisse.** Gut zwei Drittel der Befragten gaben an, die Bibliothek mindestens einmal pro Woche zu besuchen. Dabei steht die Bibliothek vor allem als Lernort im Mittelpunkt: Die meisten nutzen sie, um in Ruhe zu arbeiten. Gedruckte Bücher leiht hingegen nur etwa ein Drittel regelmäßig aus; Fachliteratur wird überwiegend digital genutzt. In den offenen Antworten wurden am häufigsten längere Öffnungszeiten und mehr Räume für Gruppenarbeit genannt. Kritisiert wurde außerdem die Lautstärke in einigen Lesesälen.\n\n**Diskussion.** Die Ergebnisse deuten darauf hin, dass sich die Rolle der Bibliothek verändert: vom Ort der Ausleihe zum Arbeitsort. Allerdings ist zu beachten, dass die Teilnahme freiwillig war. Es ist daher möglich, dass vor allem Studierende geantwortet haben, die die Bibliothek ohnehin häufig nutzen. Die Ergebnisse lassen sich somit nicht ohne Weiteres auf alle Studierenden übertragen. Weitere Untersuchungen, etwa mit Beobachtungen vor Ort, wären wünschenswert.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Die Befragung fand online statt.', a: 't', why: '*… zu einer Online-Befragung eingeladen.*' },
            { q: 'Nur Studierende einer Fakultät wurden befragt.', a: 'f', why: 'Students *aller Fakultäten* were invited.' },
            { q: 'Die meisten Befragten nutzen die Bibliothek vor allem, um Bücher auszuleihen.', a: 'f', why: 'Most use it *als Lernort*; only about a third borrow printed books regularly.' },
            { q: 'Viele wünschen sich mehr Räume für Gruppenarbeit.', a: 't', why: 'This was one of the most frequent answers.' },
            { q: 'Die Bibliothek hat ihre Öffnungszeiten nach der Befragung verlängert.', a: 'ng', why: 'The report says nothing about what happened after the survey.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the method and the language.', items: [
            { q: 'Warum lassen sich die Ergebnisse nicht ohne Weiteres verallgemeinern?', o: ['Weil vielleicht vor allem häufige Nutzer geantwortet haben.', 'Weil zu viele Personen geantwortet haben.', 'Weil die Fragen nur offen waren.'], why: 'Participation was voluntary, so frequent users may be overrepresented.' },
            { q: '„Die Ergebnisse deuten darauf hin, dass …“ Wie sicher ist die Aussage?', o: ['vorsichtig: ein Hinweis, kein Beweis', 'völlig sicher: ein Beweis', 'gar nicht: eine reine Vermutung ohne Daten'], why: '*darauf hindeuten*: the data suggest something, but do not prove it.' },
            { q: 'Welcher Satz gibt ein Ergebnis des Berichts korrekt wieder?', o: ['Laut Bericht nutzen die meisten Befragten die Bibliothek vor allem als Lernort.', 'Der Bericht behauptet, alle Studierenden lieben die Bibliothek.', 'Die Bibliothek ist der beste Lernort der Universität.'], why: 'It reports a finding of the text with a source marker. The others exaggerate or state an opinion as a fact.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Der Autor ___, dass seine Daten schon einige Jahre alt sind. Er sieht darin eine Schwäche.', o: ['räumt ein', 'betont stolz', 'bezweifelt'], why: 'He admits a weakness: *einräumen*.' },
      { q: '___ der Studie schlafen Studierende in der Prüfungszeit weniger.', o: ['Laut', 'Zufolge', 'Wegen'], why: '*laut* comes before the noun; *zufolge* would follow it.' },
      { q: 'Was ist ein Plagiat?', o: ['fremde Gedanken ohne Quellenangabe übernehmen', 'eine Quelle korrekt zitieren', 'allgemein bekannte Tatsachen nennen'], why: 'Using others’ ideas without a reference.' },
      { q: 'Wofür steht „vgl.“ vor einer Quelle?', o: ['vergleiche', 'vergessen', 'vorgelegt'], why: '*vgl.* = *vergleiche*, often used for indirect quotations.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Die Autorin meint, die Methode ___ zu teuer. (sein, Konjunktiv I)', a: ['sei'], why: 'Konjunktiv I of *sein*: *sie sei*.' },
      { q: 'Er erklärt, es ___ noch keine Lösung. (geben, Konjunktiv I)', a: ['gebe'], why: 'Konjunktiv I: *es gebe*.' },
      { q: 'Dem Bericht ___ ist die Zahl der Anmeldungen gestiegen.', a: ['zufolge'], why: '*zufolge* follows a noun in the Dativ.' },
      { q: 'Am Ende der Arbeit stehen alle Quellen im ___.', a: ['Literaturverzeichnis'], why: '*das Literaturverzeichnis*: the list of references.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the verb and its meaning.', pairs: [
      ['hervorheben', 'betonen'],
      ['zugeben', 'einräumen'],
      ['beschreiben', 'darstellen'],
      ['in Frage stellen', 'bezweifeln'],
    ] },
  ],
};
