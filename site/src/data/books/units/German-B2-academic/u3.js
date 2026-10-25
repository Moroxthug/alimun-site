// German B2 for study and exams, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Summarising and paraphrasing',
  goal: 'Summarise texts and say things in your own words: find the main points, write a neutral summary and paraphrase with synonyms and new structures.',
  art: 'snail',
  tags: { skills: ['writing', 'reading', 'grammar', 'vocabulary'], topics: ['summary', 'paraphrase', 'synonyms', 'konjunktiv-i', 'participle-attributes'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Finding main points and writing a summary',
      about: 'Separate the main points from the details, then report them neutrally.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A summary, *Zusammenfassung*, gives the main content of a text in a much shorter form. Before you write, find the **main point** of each paragraph. Examples, numbers, anecdotes and repetitions are usually **details**: they support a main point but do not belong in a short summary.\n\nA good summary in German follows a few conventions. It is written in the **present tense**. It uses your own words, not quotations. It contains no opinion of your own. It starts with a sentence that names the text, the author if known, and the topic. What the author thinks is often reported in indirect speech with the **Konjunktiv I**: *Die Autorin meint, das Problem **sei** lösbar.*' },
          { t: 'table', caption: 'Phrases for a summary', explain: ['head', 'col0'], head: ['Function', 'Phrase'], rows: [
            ['naming text and topic', 'In dem Artikel „…“ von … geht es um …'],
            ['naming the topic', 'Der Text behandelt das Thema …'],
            ['the main claim', 'Die Autorin vertritt die These, dass …'],
            ['the structure', 'Zunächst beschreibt sie …, anschließend erläutert sie …'],
            ['the result', 'Er kommt zu dem Schluss, dass …'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the paragraph. What is its main point?', items: [
            { q: 'Immer mehr Studierende wohnen in Wohngemeinschaften. In Großstädten kostet ein eigenes Apartment oft deutlich mehr als ein Zimmer in einer WG. Eine Studentin aus Köln erzählt, dass sie nach drei Monaten Suche aufgegeben hat. Für viele ist die WG deshalb weniger ein Lebensstil als eine finanzielle Notwendigkeit.', o: ['Viele Studierende wohnen vor allem aus Kostengründen in einer WG.', 'Eine Studentin aus Köln hat drei Monate gesucht.', 'Apartments in Großstädten sind teuer.'], why: 'The last sentence gives the main point. The student from Cologne is an example, and the cost of apartments is a supporting detail.' },
            { q: 'Viele Hochschulen bieten inzwischen Kurse zum wissenschaftlichen Schreiben an. Dort lernen Studierende etwa, wie man eine Gliederung erstellt oder richtig zitiert. Die Kurse sollen helfen, typische Probleme bei der ersten Hausarbeit zu vermeiden.', o: ['Schreibkurse an Hochschulen sollen Studierenden bei der ersten Hausarbeit helfen.', 'In Schreibkursen lernt man, eine Gliederung zu erstellen.', 'Zitieren ist schwierig.'], why: 'The first and last sentences carry the main point. The outline is only one example of what the courses teach.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false? Think about the rules for a summary.', items: [
            { q: 'Eine Zusammenfassung steht normalerweise im Präsens.', a: 't', why: 'German summaries use the present tense, even if the text is about the past.' },
            { q: 'In einer Zusammenfassung sollte man die eigene Meinung zum Text nennen.', a: 'f', why: 'A summary is neutral. Your opinion belongs in a comment or a discussion.' },
            { q: 'Konkrete Beispiele aus dem Text gehören immer in die Zusammenfassung.', a: 'f', why: 'Examples are usually details. Keep only the points they support.' },
            { q: 'Der erste Satz nennt den Text und sein Thema.', a: 't', why: 'For example: *In dem Artikel „…“ geht es um …*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the phrases for a summary.', items: [
            { q: 'In dem Artikel „Neue Wege im Studium“ ___ es um digitale Lehre.', a: ['geht'], why: '*Es geht um* + Akkusativ: the text is about …' },
            { q: 'Der Autor ___ die These, dass Prüfungen reformiert werden müssen.', a: ['vertritt'], why: '*eine These vertreten*: to hold a position. *vertreten → er vertritt*.' },
            { q: 'Am Ende kommt die Autorin zu dem ___, dass mehr Forschung nötig ist.', a: ['Schluss', 'Ergebnis'], why: '*zu dem Schluss kommen* or *zu dem Ergebnis kommen*: to conclude.' },
            { q: 'Die Autorin meint, die Lösung ___ einfach. (sein, Konjunktiv I)', a: ['sei'], why: 'Konjunktiv I of *sein*: *sie sei*. It shows that you report her opinion.' },
            { q: 'Der Forscher betont, die Studie ___ neue Fragen auf. (werfen, Konjunktiv I)', a: ['werfe'], why: 'Konjunktiv I: stem + *-e*: *sie werfe … auf*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Paraphrasing: synonyms and new structures',
      about: 'Say the same thing in other words, without changing the meaning.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To paraphrase is to express an idea from a source in your own words. You need this for summaries, for written work and in exams, where tasks often say the same thing as the text in different words. A good paraphrase changes **both** the words and the structure, but keeps the meaning exactly.\n\nThe first tool is **synonyms**. Be careful: synonyms are rarely identical in every context. Check that the new word fits the sentence.' },
          { t: 'table', caption: 'Useful synonyms in academic texts', explain: ['head'], quiz: true, head: ['Word', 'Synonym'], rows: [
            ['wichtig', 'bedeutend, zentral'],
            ['zeigen', 'belegen, verdeutlichen'],
            ['das Problem', 'die Schwierigkeit'],
            ['erhöhen', 'steigern'],
            ['verringern', 'reduzieren, senken'],
            ['der Grund', 'die Ursache'],
            ['die Folge', 'die Auswirkung'],
            ['untersuchen', 'analysieren'],
          ] },
        ],
        [
          { t: 'text', md: 'The second tool is **changing the structure**. A clause can become a noun phrase, an active sentence can become passive, a relative clause can become a participle in front of the noun, and *kann … werden* can become *lässt sich …* or *ist … zu …*.' },
          { t: 'examples', items: [
            { s: 'Weil die Mieten steigen, … → **Aufgrund der steigenden Mieten** …', n: 'Clause with *weil* → *aufgrund* + Genitiv.' },
            { s: 'Obwohl es Kritik gab, … → **Trotz der Kritik** …', n: 'Clause with *obwohl* → *trotz* + Genitiv.' },
            { s: 'die Daten, die erhoben wurden → **die erhobenen Daten**', n: 'A passive relative clause becomes the Partizip II in front of the noun.' },
            { s: 'die Zahl, die steigt → **die steigende Zahl**', n: 'An active relative clause becomes the Partizip I: infinitive + *-d*.' },
            { s: 'Das Problem kann gelöst werden. → Das Problem **lässt sich lösen**. / Das Problem **ist zu lösen**.', n: 'Three ways to say that something is possible.' },
          ] },
          { t: 'tip', art: 'owl', md: 'A paraphrase is still someone else’s idea. In written work you must name the source, even if you have changed every word.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the synonym.', pairs: [
            ['wichtig', 'bedeutend'],
            ['die Ursache', 'der Grund'],
            ['erhöhen', 'steigern'],
            ['die Auswirkung', 'die Folge'],
            ['verringern', 'reduzieren'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Which paraphrase keeps the meaning?', items: [
            { q: 'Weil das Budget gekürzt wurde, fiel das Projekt aus.', o: ['Aufgrund der Kürzung des Budgets fiel das Projekt aus.', 'Trotz der Kürzung des Budgets fiel das Projekt aus.', 'Nach dem Ausfall des Projekts wurde das Budget gekürzt.'], why: '*weil → aufgrund*: the reason stays the reason. *Trotz* changes the meaning, and the third sentence reverses the order of events.' },
            { q: 'Die Ergebnisse, die veröffentlicht wurden, sind umstritten.', o: ['Die veröffentlichten Ergebnisse sind umstritten.', 'Die veröffentlichenden Ergebnisse sind umstritten.', 'Die Ergebnisse veröffentlichen sich umstritten.'], why: 'A passive relative clause becomes the Partizip II: *die veröffentlichten Ergebnisse*.' },
            { q: 'Diese Frage kann nicht eindeutig beantwortet werden.', o: ['Diese Frage lässt sich nicht eindeutig beantworten.', 'Diese Frage muss nicht eindeutig beantwortet werden.', 'Diese Frage wird eindeutig beantwortet.'], why: '*kann … werden = lässt sich …*. *Muss nicht* means something different: it is not necessary.' },
            { q: 'Die Zahl der Studierenden hat sich erhöht.', o: ['Die Zahl der Studierenden ist gestiegen.', 'Die Zahl der Studierenden ist gesunken.', 'Die Zahl der Studierenden ist gleich geblieben.'], why: '*sich erhöhen = steigen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Paraphrase with the word in brackets.', items: [
            { q: 'Obwohl das Wetter schlecht war, … → ___ des schlechten Wetters … (trotz)', a: ['Trotz'], why: '*obwohl → trotz* + Genitiv.' },
            { q: 'die Kosten, die steigen → die ___ Kosten (steigen)', a: ['steigenden'], why: 'Partizip I + adjective ending: *die steigenden Kosten*.' },
            { q: 'die Methode, die verwendet wurde → die ___ Methode (verwenden)', a: ['verwendete'], why: 'Partizip II + ending: *die verwendete Methode*.' },
            { q: 'Das Ergebnis kann leicht erklärt werden. → Das Ergebnis ist leicht zu ___. (erklären)', a: ['erklären'], why: '*sein + zu* + infinitive expresses a possibility.' },
            { q: 'Das kann man nicht beweisen. → Das lässt ___ nicht beweisen.', a: ['sich'], why: '*sich lassen* + infinitive: *Das lässt sich nicht beweisen.*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the paraphrases.', items: [
            { a: 'Diese These lässt sich gut belegen.', why: '*lässt* in second place, *sich* right after it, the infinitive *belegen* at the end.' },
            { a: 'Die befragten Studierenden waren zufrieden.', why: 'The participle *befragten* stands between article and noun, like an adjective.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: an article and two summaries',
      about: 'Read a short article, then decide which summary is better and why.',
      art: 'teacup',
      spreads: [
        [
          { t: 'reading', title: 'Lernen mit Pausen', md: 'Viele Studierende kennen die Situation: Kurz vor der Prüfung wird der gesamte Stoff in wenigen langen Nächten wiederholt. Diese Strategie ist verbreitet, sie ist jedoch weniger wirksam, als viele glauben. Lernforscherinnen und Lernforscher empfehlen seit Langem, den Stoff über einen längeren Zeitraum zu verteilen.\n\nHinter dieser Empfehlung steht ein gut untersuchter Effekt. Wer Inhalte in mehreren kurzen Einheiten mit Abständen wiederholt, behält sie in der Regel länger als jemand, der dieselbe Zeit an einem Stück lernt. Eine mögliche Erklärung: Beim erneuten Wiederholen muss das Gehirn die Informationen aktiv abrufen, und genau diese Anstrengung festigt das Wissen.\n\nDass die Methode trotzdem selten genutzt wird, hat mehrere Gründe. Zum einen fühlt sich intensives Lernen am Stück produktiver an, weil der Stoff kurz danach vertraut wirkt. Dieses Gefühl täuscht allerdings häufig. Zum anderen erfordert verteiltes Lernen eine frühe Planung, die im vollen Semesteralltag schwerfällt.\n\nFachleute raten daher, schon zu Beginn des Semesters feste Wiederholungstermine in den Kalender einzutragen, zum Beispiel einen Tag, eine Woche und einen Monat nach einer Vorlesung. Hilfreich sei es außerdem, sich selbst zu testen, statt die eigenen Notizen nur noch einmal zu lesen. Wer so lernt, braucht kurz vor der Prüfung weniger Zeit und geht meist entspannter in die Prüfung.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Laut Artikel ist Lernen in langen Nächten vor der Prüfung sehr wirksam.', a: 'f', why: 'It is *weniger wirksam, als viele glauben*.' },
            { q: 'Wer mit Abständen wiederholt, behält Inhalte meist länger.', a: 't', why: '*… behält sie in der Regel länger …*' },
            { q: 'Intensives Lernen am Stück fühlt sich oft erfolgreicher an, als es ist.', a: 't', why: 'It *fühlt sich … produktiver an*, but *dieses Gefühl täuscht allerdings häufig*.' },
            { q: 'Die meisten Hochschulen bieten Kurse zum verteilten Lernen an.', a: 'ng', why: 'The article says nothing about courses at universities.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Zwei Zusammenfassungen', md: '**Zusammenfassung A**\n\nIn dem Artikel „Lernen mit Pausen“ geht es um die Frage, wie Studierende wirksamer lernen können. Der Text erklärt, dass Wissen länger im Gedächtnis bleibt, wenn man den Stoff in mehreren kurzen Einheiten über einen längeren Zeitraum wiederholt. Diese Methode werde jedoch selten genutzt, weil Lernen am Stück produktiver wirke und verteiltes Lernen früh geplant werden müsse. Abschließend empfiehlt der Text, Wiederholungen früh zu planen und sich selbst zu testen.\n\n**Zusammenfassung B**\n\nDer Text ist sehr interessant und ich finde, dass alle Studierenden ihn lesen sollten. Viele Studierende lernen „in wenigen langen Nächten“. Man sollte einen Tag, eine Woche und einen Monat nach einer Vorlesung wiederholen. Ich selbst habe auch immer am Abend vor der Prüfung gelernt, und das hat nicht gut funktioniert. Lernen mit Pausen ist also besser.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Compare the two summaries.', items: [
            { q: 'Welche Zusammenfassung ist besser?', o: ['A, weil sie neutral ist und die Hauptpunkte nennt.', 'B, weil sie ein persönliches Beispiel enthält.', 'B, weil sie den Originaltext wörtlich zitiert.'], why: 'A names the text, gives the main points in the present tense and stays neutral.' },
            { q: 'Was fehlt in Zusammenfassung B?', o: ['die Gründe, warum die Methode selten genutzt wird', 'eine persönliche Meinung', 'ein Zitat aus dem Text'], why: 'B has an opinion and a quotation, but leaves out the reasons from the third paragraph.' },
            { q: 'Welcher Satz aus B gehört auf keinen Fall in eine Zusammenfassung?', o: ['Ich selbst habe auch immer am Abend vor der Prüfung gelernt.', 'Man sollte nach einer Vorlesung wiederholen.', 'Viele Studierende lernen kurz vor der Prüfung.'], why: 'Personal experience never belongs in a summary.' },
            { q: 'Warum steht in A „werde“ und „wirke“?', o: ['Der Text gibt die Aussagen des Artikels in indirekter Rede wieder.', 'Die Sätze stehen im Präteritum.', 'Es sind Befehle an die Leser.'], why: 'Konjunktiv I marks reported statements: *Diese Methode werde … selten genutzt*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'In welcher Zeitform schreibt man eine Zusammenfassung?', o: ['im Präsens', 'im Präteritum', 'im Futur'], why: 'German summaries use the present tense.' },
      { q: 'Die Studie, die veröffentlicht wurde → die ___ Studie', o: ['veröffentlichte', 'veröffentlichende', 'veröffentlichen'], why: 'Passive meaning: Partizip II *veröffentlicht* + ending *-e*.' },
      { q: 'Welcher Satz ist eine Paraphrase von „Das Problem kann gelöst werden“?', o: ['Das Problem lässt sich lösen.', 'Das Problem muss gelöst werden.', 'Das Problem wurde gelöst.'], why: '*kann … werden = lässt sich …*' },
      { q: 'Was gehört in eine Zusammenfassung?', o: ['die Hauptaussage des Textes', 'die eigene Meinung', 'ein persönliches Erlebnis'], why: 'A summary gives the main content, neutrally.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Weil die Preise steigen, … → Aufgrund der ___ Preise … (steigen)', a: ['steigenden'], why: 'Partizip I with the ending *-en* after *der* in the Genitiv plural.' },
      { q: 'Obwohl es viele Probleme gab, … → ___ vieler Probleme …', a: ['Trotz'], why: '*obwohl → trotz* + Genitiv.' },
      { q: 'Die Autorin meint, das Ergebnis ___ überraschend. (sein, Konjunktiv I)', a: ['sei'], why: 'Konjunktiv I of *sein*: *es sei*.' },
      { q: 'Der Text ___ das Thema Mehrsprachigkeit. (behandeln)', a: ['behandelt'], why: '*Der Text behandelt das Thema …*: a typical first sentence.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the synonym.', pairs: [
      ['zeigen', 'belegen'],
      ['das Problem', 'die Schwierigkeit'],
      ['untersuchen', 'analysieren'],
      ['senken', 'verringern'],
    ] },
  ],
};
