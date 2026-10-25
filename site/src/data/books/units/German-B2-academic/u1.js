// German B2 for study and exams, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Academic language',
  goal: 'Understand and use the vocabulary of academic texts: key nouns, fixed word combinations and the formal, nominal style of German textbooks and papers.',
  art: 'owl',
  tags: { skills: ['vocabulary', 'reading', 'writing'], topics: ['academic-vocabulary', 'collocations', 'nominal-style', 'register', 'funktionsverbgefuege'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Common academic words and collocations',
      about: 'The nouns every academic text uses, and the verbs that go with them.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Academic texts in every subject share a core vocabulary. These words describe what researchers do and what they find: they ask questions, make assumptions, carry out studies and reach results. If you know these words, you understand the structure of a text much faster, even when the topic is new to you.\n\nLearn each noun with its article and plural. Many of them come from verbs: *untersuchen → die Untersuchung*, *annehmen → die Annahme*.' },
          { t: 'table', caption: 'Key nouns in academic texts', explain: ['head', 'col1'], quiz: true, head: ['Noun', 'Meaning'], rows: [
            ['die Fragestellung', 'the question a study tries to answer'],
            ['der Ansatz', 'an approach, a way of looking at a problem'],
            ['der Begriff', 'a term or concept'],
            ['der Zusammenhang', 'a connection or relationship'],
            ['die Untersuchung', 'a study or investigation'],
            ['die Annahme', 'an assumption'],
            ['das Ergebnis', 'a result'],
            ['der Forschungsstand', 'what is known about a topic so far'],
          ] },
        ],
        [
          { t: 'text', md: 'Academic German uses many fixed combinations of noun and verb, called **collocations**. You cannot choose any verb with a noun: you **führen** a study **durch**, but you **stellen** a hypothesis **auf**. Learn the noun and the verb together.' },
          { t: 'table', caption: 'Noun and verb together', explain: ['head', 'col1'], quiz: true, head: ['Collocation', 'Meaning'], rows: [
            ['eine Untersuchung durchführen', 'to carry out a study'],
            ['Daten erheben', 'to collect data'],
            ['eine Hypothese aufstellen', 'to put forward a hypothesis'],
            ['eine Frage aufwerfen', 'to raise a question'],
            ['eine Rolle spielen', 'to play a role'],
            ['einen Beitrag leisten (zu)', 'to make a contribution (to)'],
            ['zu einem Ergebnis kommen', 'to reach a result'],
            ['einen Überblick geben (über)', 'to give an overview (of)'],
          ] },
          { t: 'tip', art: 'owl', md: 'In academic German, *Studie* and *Untersuchung* are close in meaning. *Daten erheben* is more formal than *Daten sammeln*; both are correct.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Which verb goes with each noun?', pairs: [
            ['eine Untersuchung', 'durchführen'],
            ['Daten', 'erheben'],
            ['eine Hypothese', 'aufstellen'],
            ['einen Beitrag', 'leisten'],
            ['eine Rolle', 'spielen'],
            ['eine Frage', 'aufwerfen'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the collocations.', items: [
            { q: 'Die Forscherinnen haben eine Umfrage unter 500 Studierenden ___. (durchführen)', a: ['durchgeführt'], why: 'Perfekt of the separable verb *durchführen*: *durchgeführt*.' },
            { q: 'Für die Studie wurden Daten aus drei Ländern ___. (erheben)', a: ['erhoben'], why: '*erheben* is irregular: *erhob, erhoben*. Passive: *wurden … erhoben*.' },
            { q: 'Das Alter der Teilnehmenden spielt dabei eine wichtige ___.', a: ['Rolle'], why: '*eine Rolle spielen*: to play a role.' },
            { q: 'Die Arbeit leistet einen wichtigen ___ zur Forschung über Mehrsprachigkeit.', a: ['Beitrag'], why: '*einen Beitrag leisten zu*: to make a contribution to.' },
            { q: 'Am Ende kommt die Autorin zu einem klaren ___.', a: ['Ergebnis', 'Schluss'], why: '*zu einem Ergebnis kommen* or *zu einem Schluss kommen*: to reach a result or conclusion.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the noun that fits.', items: [
            { q: 'Der ___ zwischen Schlaf und Lernerfolg ist gut untersucht.', o: ['Zusammenhang', 'Begriff', 'Ansatz'], why: 'A relationship between two things: *der Zusammenhang zwischen … und …*.' },
            { q: 'Die zentrale ___ der Arbeit lautet: Wie lernen Erwachsene neue Wörter?', o: ['Fragestellung', 'Untersuchung', 'Annahme'], why: 'The question the work tries to answer: *die Fragestellung*.' },
            { q: 'Der ___ „Kultur“ wird in der Forschung sehr unterschiedlich definiert.', o: ['Begriff', 'Zusammenhang', 'Beitrag'], why: 'A word that is defined: *der Begriff*.' },
            { q: 'Die Studie verfolgt einen neuen ___: Sie verbindet Psychologie und Linguistik.', o: ['Ansatz', 'Begriff', 'Forschungsstand'], why: 'A way of looking at a problem: *einen Ansatz verfolgen*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Nominal style and formal register',
      about: 'Write like a textbook: formal words, nouns instead of clauses, and verb-noun phrases.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Academic German sounds different from spoken German. It avoids everyday words, uses *man* or the passive instead of *ich*, and prefers precise verbs. Compare: *Wir haben rausgefunden, dass viele Leute das kriegen.* (spoken) and *Es wurde ermittelt, dass zahlreiche Personen dies erhalten.* (academic).' },
          { t: 'table', caption: 'Spoken and academic', explain: ['head'], quiz: true, head: ['Spoken', 'Academic'], rows: [
            ['kriegen', 'erhalten'],
            ['rausfinden', 'ermitteln, herausfinden'],
            ['klarmachen', 'verdeutlichen'],
            ['sich etwas angucken', 'etwas betrachten, untersuchen'],
            ['benutzen', 'verwenden'],
            ['viele', 'zahlreiche'],
            ['also', 'somit, folglich'],
            ['echt', 'tatsächlich'],
          ] },
        ],
        [
          { t: 'text', md: 'Academic texts also like **nominal style**: a clause becomes a noun phrase. *Wenn man die Daten auswertet, …* becomes *Bei der **Auswertung** der Daten …*. The text gets shorter and more abstract.\n\nAnother feature is the **Funktionsverbgefüge**: a noun with a verb that has lost most of its own meaning. *zum Ausdruck bringen* means the same as *ausdrücken*, but sounds more formal.' },
          { t: 'examples', items: [
            { s: 'Weil die Kosten gestiegen sind, … → **Aufgrund des Anstiegs** der Kosten …', n: 'A clause with *weil* becomes *aufgrund* + Genitiv.' },
            { s: 'Wenn man die Daten auswertet, … → **Bei der Auswertung** der Daten …', n: 'A clause with *wenn* often becomes *bei* + noun.' },
            { s: 'Die Bibliothek **stellt** den Studierenden Arbeitsplätze **zur Verfügung**.', n: '*zur Verfügung stellen* = *bereitstellen*, to provide.' },
            { s: 'Die Autorin **übt** deutliche **Kritik** an dieser Methode.', n: '*Kritik üben an* + Dativ = *kritisieren*.' },
            { s: 'Diese Möglichkeit sollte **in Betracht gezogen** werden.', n: '*in Betracht ziehen* = *berücksichtigen*, to consider.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the academic word.', items: [
            { q: 'Die Teilnehmenden ___ für ihre Mitarbeit eine kleine Entschädigung.', o: ['erhielten', 'kriegten', 'gaben'], why: '*erhalten* is the formal word for *kriegen*.' },
            { q: 'In der Studie wurden ___ Faktoren untersucht.', o: ['zahlreiche', 'echt viele', 'total viele'], why: '*zahlreiche* is formal; *echt* and *total* belong to spoken German.' },
            { q: 'Die Grafik ___ den Anstieg der Studierendenzahlen.', o: ['verdeutlicht', 'macht klar', 'guckt an'], why: '*verdeutlichen*: to make clear, in a formal text.' },
            { q: 'Für die Analyse wurde ein neues Programm ___.', o: ['verwendet', 'genommen', 'gekriegt'], why: '*verwenden* is the precise, formal verb for using a tool.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Find the spoken words that do not belong in an academic text.', items: [
            { s: 'Die Studie hat [rausgefunden], dass Studierende vor Prüfungen [echt] wenig schlafen.', why: 'Formal: *ermittelt* or *herausgefunden*, and *tatsächlich* instead of *echt*.' },
            { s: 'Im zweiten Teil [gucken] wir uns die Ergebnisse genauer an.', why: 'Formal: *Im zweiten Teil werden die Ergebnisse genauer betrachtet.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the verb-noun phrase and the simple verb.', pairs: [
            ['zur Verfügung stellen', 'bereitstellen'],
            ['zum Ausdruck bringen', 'ausdrücken'],
            ['Kritik üben', 'kritisieren'],
            ['in Frage stellen', 'bezweifeln'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the noun for the nominal style.', items: [
            { q: 'Bei der ___ der Daten fiel ein Fehler auf. (auswerten)', a: ['Auswertung'], why: '*auswerten → die Auswertung*. *Bei* + Dativ replaces *wenn man … auswertet*.' },
            { q: 'Nach der ___ der Fragebögen begann die Analyse. (verteilen)', a: ['Verteilung'], why: '*verteilen → die Verteilung*. *Nach* + Dativ replaces *nachdem*.' },
            { q: 'Die ___ dieser Methode ist umstritten. (anwenden)', a: ['Anwendung'], why: '*anwenden → die Anwendung*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build formal sentences.', items: [
            { a: 'Die Hochschule stellt einen Lesesaal zur Verfügung.', why: 'In the main clause *stellt* is second; *zur Verfügung* goes to the end.' },
            { a: 'Die Autorin bringt ihre Zweifel zum Ausdruck.', why: '*bringt* in second place, *zum Ausdruck* at the end of the clause.' },
            { a: 'Bei der Auswertung wurde ein Fehler entdeckt.', why: 'The phrase *Bei der Auswertung* takes first place, then the verb *wurde*, the participle at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: an introductory textbook',
      about: 'Read an extract from a textbook chapter and notice its academic language.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'Introductory textbooks, *Einführungen*, are often the first academic texts students read. A chapter usually defines its key term, describes what research is interested in and ends with a look at the next chapter. Read the extract and watch for the words and collocations from this unit.' },
          { t: 'reading', title: 'Mehrsprachigkeit: Begriff und Forschungsfragen', md: 'Unter Mehrsprachigkeit versteht man im Allgemeinen die Fähigkeit eines Menschen, im Alltag mehr als eine Sprache zu verwenden. Lange Zeit galt nur derjenige als mehrsprachig, der zwei Sprachen von Geburt an gleich gut beherrschte. Diese enge Definition wird in der heutigen Forschung jedoch kaum noch vertreten. Stattdessen geht man davon aus, dass mehrsprachige Personen ihre Sprachen in unterschiedlichen Bereichen und für unterschiedliche Zwecke nutzen: die eine etwa in der Familie, die andere im Beruf oder im Studium.\n\nAus dieser Sicht ist Mehrsprachigkeit nicht die Ausnahme, sondern in vielen Teilen der Welt der Normalfall. Für die Forschung ergibt sich daraus eine Reihe von Fragestellungen. Zum einen wird untersucht, wie Kinder zwei oder mehr Sprachen gleichzeitig erwerben. Zum anderen steht die Frage im Mittelpunkt, welche Rolle die Erstsprache beim späteren Lernen einer Fremdsprache spielt.\n\nEin weiterer Schwerpunkt liegt auf dem Sprachwechsel, also dem Wechsel zwischen zwei Sprachen innerhalb eines Gesprächs oder sogar eines Satzes. Früher wurde dieses Verhalten häufig als Zeichen mangelnder Sprachkenntnisse betrachtet. Zahlreiche Untersuchungen haben inzwischen gezeigt, dass der Sprachwechsel bestimmten Regeln folgt und oft eine kommunikative Funktion erfüllt. So kann er beispielsweise dazu dienen, Nähe herzustellen oder ein Zitat hervorzuheben.\n\nIm folgenden Kapitel wird zunächst ein Überblick über die wichtigsten Theorien des Spracherwerbs gegeben. Anschließend werden ausgewählte Ergebnisse empirischer Studien vorgestellt und kritisch diskutiert.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Heute gilt nur als mehrsprachig, wer zwei Sprachen von Geburt an gleich gut spricht.', a: 'f', why: 'This narrow definition *wird in der heutigen Forschung jedoch kaum noch vertreten*.' },
            { q: 'Mehrsprachige Menschen nutzen ihre Sprachen oft in verschiedenen Lebensbereichen.', a: 't', why: '*… in unterschiedlichen Bereichen und für unterschiedliche Zwecke …: die eine etwa in der Familie, die andere im Beruf.*' },
            { q: 'Laut Text ist Mehrsprachigkeit weltweit eher selten.', a: 'f', why: 'It is *nicht die Ausnahme, sondern in vielen Teilen der Welt der Normalfall*.' },
            { q: 'Die Forschung untersucht auch, wie die Erstsprache das Fremdsprachenlernen beeinflusst.', a: 't', why: '*… welche Rolle die Erstsprache beim späteren Lernen einer Fremdsprache spielt.*' },
            { q: 'Kinder lernen zwei Sprachen langsamer als eine Sprache.', a: 'ng', why: 'The text says this is studied, but gives no result about speed.' },
            { q: 'Der Sprachwechsel wird heute meist als Zeichen schlechter Sprachkenntnisse gesehen.', a: 'f', why: 'That was the view *früher*. Studies now show it follows rules and has a function.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the text.', items: [
            { q: '„Diese enge Definition wird kaum noch vertreten.“ Was bedeutet das?', o: ['Kaum jemand hält diese Definition heute für richtig.', 'Diese Definition wird oft wiederholt.', 'Diese Definition ist schwer zu verstehen.'], why: '*eine Auffassung vertreten*: to hold a view. *Kaum noch*: hardly anyone any more.' },
            { q: 'Was beschreibt der Begriff „Sprachwechsel“ im Text?', o: ['den Wechsel zwischen zwei Sprachen in einem Gespräch', 'das Lernen einer neuen Sprache im Ausland', 'die Veränderung einer Sprache über viele Jahre'], why: 'The text defines it: *der Wechsel zwischen zwei Sprachen innerhalb eines Gesprächs oder sogar eines Satzes*.' },
            { q: 'Welche Funktion hat der letzte Absatz?', o: ['Er kündigt den Inhalt des nächsten Kapitels an.', 'Er fasst die Ergebnisse einer Studie zusammen.', 'Er definiert den Begriff Mehrsprachigkeit.'], why: '*Im folgenden Kapitel wird …*: the paragraph looks ahead.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
      { q: 'Für die Studie wurde eine Umfrage ___.', o: ['durchgeführt', 'aufgestellt', 'geleistet'], why: '*eine Umfrage* or *eine Untersuchung durchführen*.' },
      { q: 'Die Autorin ___ die Hypothese auf, dass Musik beim Lernen hilft.', o: ['stellt', 'führt', 'spielt'], why: '*eine Hypothese aufstellen*.' },
      { q: 'Welches Wort passt in einen wissenschaftlichen Text?', o: ['ermitteln', 'rausfinden', 'kriegen'], why: '*ermitteln* is formal; the others are spoken German.' },
      { q: 'Die Ergebnisse werfen eine neue ___ auf.', o: ['Frage', 'Rolle', 'Antwort'], why: '*eine Frage aufwerfen*: to raise a question.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Bei der ___ der Interviews half ein Programm. (auswerten)', a: ['Auswertung'], why: '*auswerten → die Auswertung*.' },
      { q: 'Die Autorin übt deutliche ___ an dieser Methode.', a: ['Kritik'], why: '*Kritik üben an* + Dativ = *kritisieren*.' },
      { q: 'Das Wetter spielt bei dieser Frage keine ___.', a: ['Rolle'], why: '*eine Rolle spielen*.' },
      { q: 'In der Einleitung gibt die Autorin einen ___ über den Forschungsstand.', a: ['Überblick'], why: '*einen Überblick geben über*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the phrase and the simple verb.', pairs: [
      ['in Frage stellen', 'bezweifeln'],
      ['in Betracht ziehen', 'berücksichtigen'],
      ['zum Ausdruck bringen', 'ausdrücken'],
      ['eine Entscheidung treffen', 'entscheiden'],
    ] },
  ],
};
