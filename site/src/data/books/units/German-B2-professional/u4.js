// German B2 for work, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Reports and proposals',
  goal: 'Write structured reports and proposals.',
  art: 'snail',
  tags: { skills: ['writing', 'grammar', 'vocabulary', 'reading'], topics: ['report', 'nominal-style', 'funktionsverbgefuege', 'describing-trends', 'recommendations'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Nominal style and structure of a report',
      about: 'The parts of a report and the formal nominal style with Funktionsverbgefüge.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'A report (*der Bericht*) or a proposal (*der Vorschlag*, *das Konzept*) in a German company usually follows a clear structure. Headings help readers find what they need quickly. Many readers only read the summary and the recommendation, so these parts must be clear on their own.' },
          { t: 'table', caption: 'Parts of a report', explain: ['head', 'col1'], head: ['Part', 'Content'], rows: [
            ['Zusammenfassung', 'the main result and the recommendation in a few sentences'],
            ['Ausgangslage', 'the situation and the problem'],
            ['Ziel', 'what the report or the project wants to achieve'],
            ['Vorgehen', 'how the information was collected'],
            ['Ergebnisse', 'the facts and figures'],
            ['Empfehlung', 'what should happen next'],
          ] },
        ],
        [
          { t: 'text', md: 'Reports use a **nominal style**: many nouns, fewer verbs. A typical feature is the **Funktionsverbgefüge**: a noun with a fairly empty verb. Together they mean the same as a simple verb: *entscheiden → eine Entscheidung treffen*. They sound formal, and they are fixed: you cannot choose the verb freely.' },
          { t: 'table', caption: 'Funktionsverbgefüge', explain: ['head', 'col2'], quiz: true, head: ['Simple verb', 'Funktionsverbgefüge', 'Meaning'], rows: [
            ['entscheiden', 'eine Entscheidung treffen', 'to decide'],
            ['untersuchen', 'eine Untersuchung durchführen', 'to carry out a study'],
            ['bereitstellen', 'zur Verfügung stellen', 'to provide'],
            ['erwägen', 'in Betracht ziehen', 'to consider'],
            ['beenden', 'zum Abschluss bringen', 'to complete'],
            ['eingesetzt werden', 'zum Einsatz kommen', 'to be used'],
            ['beantragen', 'einen Antrag stellen', 'to apply for'],
          ] },
          { t: 'tip', art: 'owl', md: 'The noun often comes with a preposition and an article: *zur* (= *zu der*) *Verfügung stellen*, *in Betrieb nehmen* (to put into operation), *zum Abschluss bringen*. Learn the whole phrase.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the verb that goes with each noun.', pairs: [
            ['eine Entscheidung', 'treffen'],
            ['eine Untersuchung', 'durchführen'],
            ['Kritik', 'üben'],
            ['einen Antrag', 'stellen'],
            ['in Betracht', 'ziehen'],
            ['in Betrieb', 'nehmen'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the Funktionsverbgefüge.', items: [
            { q: 'Die Geschäftsleitung hat noch keine Entscheidung ___. (treffen)', a: ['getroffen'], why: '*eine Entscheidung treffen*, Partizip II *getroffen*.' },
            { q: 'Die Firma stellt allen Mitarbeitenden einen Laptop zur ___.', a: ['Verfügung', 'Verfuegung'], why: '*zur Verfügung stellen*: to provide.' },
            { q: 'Die neue Anlage wurde im März in ___ genommen.', a: ['Betrieb'], why: '*in Betrieb nehmen*: to put into operation.' },
            { q: 'Das Projekt konnte pünktlich zum ___ gebracht werden.', a: ['Abschluss'], why: '*zum Abschluss bringen*: to complete.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence says the same in nominal style?', items: [
            { q: 'Wir haben untersucht, wie zufrieden die Kunden sind.', o: ['Wir haben eine Untersuchung zur Kundenzufriedenheit durchgeführt.', 'Wir haben eine Untersuchung zur Kundenzufriedenheit gemacht getroffen.', 'Wir haben die Kunden zufrieden untersucht.'], why: '*untersuchen → eine Untersuchung durchführen*. The question becomes the noun *Kundenzufriedenheit*.' },
            { q: 'Weil die Kosten gestiegen sind, …', o: ['Aufgrund der gestiegenen Kosten …', 'Aufgrund die Kosten gestiegen …', 'Obwohl der gestiegenen Kosten …'], why: '*weil → aufgrund* + Genitiv: *der gestiegenen Kosten*.' },
            { q: 'Wir müssen schnell handeln.', o: ['Es müssen schnell Maßnahmen ergriffen werden.', 'Es muss schnell Maßnahmen ergriffen.', 'Wir müssen schnelle Maßnahmen gegriffen werden.'], why: '*handeln → Maßnahmen ergreifen*, here in the passive with a modal verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Describing results and recommending action',
      about: 'Describe changes in figures with the right prepositions and recommend what to do.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'Results are usually described in the Präteritum or the Perfekt. Watch the prepositions: **um** gives the size of the change, **auf** the new value, and **von … auf** the old and the new value.' },
          { t: 'examples', items: [
            { s: 'Der Umsatz ist **um** 8 Prozent gestiegen.', n: '*um*: the size of the change.' },
            { s: 'Die Zahl der Beschwerden sank **von** 120 **auf** 75.', n: '*von … auf*: the old and the new value.' },
            { s: 'Die Kosten haben sich **verdoppelt**.', n: 'They are now twice as high. The opposite is *sich halbieren*.' },
            { s: '**Aus** der Umfrage **geht hervor**, dass die Kunden zufrieden sind.', n: '*aus etwas hervorgehen*: to be clear from something. Formal.' },
            { s: 'Die Zahlen zeigen einen deutlichen **Rückgang**.', n: '*der Rückgang* (decrease), *der Anstieg* (increase).' },
          ] },
        ],
        [
          { t: 'table', caption: 'Up and down', explain: ['head'], quiz: true, head: ['Up', 'Down'], rows: [
            ['steigen', 'sinken'],
            ['zunehmen', 'abnehmen'],
            ['der Anstieg', 'der Rückgang'],
            ['sich verdoppeln', 'sich halbieren'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Die Zahl der Bestellungen ist ___ 15 Prozent gestiegen.', a: ['um'], why: 'The size of the change: *um*.' },
            { q: 'Der Preis wurde von 40 ___ 35 Euro gesenkt.', a: ['auf'], why: '*von … auf*: the new value comes after *auf*.' },
            { q: 'Die Kosten sind ___ 2,1 auf 2,4 Millionen Euro gestiegen.', a: ['von'], why: 'The old value comes after *von*.' },
            { q: 'Die Fehlerquote ist auf 3 Prozent ___. (sinken)', a: ['gesunken'], why: '*sinken*: Perfekt with *sein*, Partizip II *gesunken*.' },
            { q: 'Im Vergleich zum Vorjahr hat die Zahl der Krankheitstage deutlich ___. (abnehmen)', a: ['abgenommen'], why: '*abnehmen*: Perfekt with *haben*, Partizip II *abgenommen*.' },
          ] },
        ],
        [
          { t: 'text', md: 'At the end, a report recommends what to do. Typical forms are *empfehlen* + infinitive with *zu*, *es empfiehlt sich*, *sollte* + passive and the Konjunktiv II. They sound objective because the writer stays in the background.' },
          { t: 'examples', items: [
            { s: 'Wir **empfehlen**, das System an allen Standorten **einzuführen**.', n: '*empfehlen, … zu* + infinitive. With separable verbs, *zu* goes in the middle: *einzuführen*.' },
            { s: '**Es empfiehlt sich**, die Testphase um drei Monate zu verlängern.', n: 'Impersonal and formal.' },
            { s: 'Die Schulungen **sollten** früher **angeboten werden**.', n: '*sollte* + Partizip II + *werden*: a recommendation in the passive.' },
            { s: '**Es wäre sinnvoll**, zusätzliche Mitarbeitende einzustellen.', n: 'A softer recommendation with the Konjunktiv II.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Wir empfehlen, die Preise im Herbst ___.', o: ['anzupassen', 'zu anpassen', 'anpassen'], why: '*anpassen* is separable, so *zu* goes in the middle: *anzupassen*.' },
            { q: 'Die Daten ___ regelmäßig gesichert werden.', o: ['sollten', 'sollte', 'solltet'], why: '*die Daten* is plural: *sollten*.' },
            { q: '___ empfiehlt sich, die Ergebnisse im Team zu besprechen.', o: ['Es', 'Man', 'Wir'], why: 'The fixed impersonal phrase is *Es empfiehlt sich, … zu …*' },
            { q: 'Aus der Analyse geht ___, dass die Lieferzeiten zu lang sind.', o: ['hervor', 'heraus', 'vor'], why: '*aus etwas hervorgehen*: to be clear from something.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Es wäre sinnvoll, mehr Personal einzustellen.', why: '*Es wäre sinnvoll*, then the infinitive with *zu*: *einzustellen*.' },
            { a: 'Wir empfehlen, die Testphase zu verlängern.', why: '*empfehlen*, a comma, then *zu* + infinitive at the end.' },
            { a: 'Aus der Umfrage geht hervor, dass alle zufrieden sind.', why: '*hervor* closes the main clause; in the *dass* clause the verb goes to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'An extract from a report',
      about: 'Read part of a report on a pilot project and find the results and the recommendation.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Bericht: Pilotprojekt mobiles Arbeiten in der Buchhaltung', md: '**Zusammenfassung**\nVon Januar bis Juni wurde in der Buchhaltung ein Pilotprojekt zum mobilen Arbeiten durchgeführt. Die Ergebnisse sind überwiegend positiv. Wir empfehlen, das Modell mit kleinen Anpassungen ab Oktober in weiteren Abteilungen einzuführen.\n\n**Ausgangslage**\nIm vergangenen Jahr hatten zwei erfahrene Mitarbeiterinnen das Unternehmen verlassen, unter anderem wegen des langen Arbeitswegs. Außerdem wurde in Bewerbungsgesprächen immer wieder gefragt, ob man auch von zu Hause aus arbeiten könne. Daraufhin wurde beschlossen, das mobile Arbeiten zunächst in einer Abteilung zu testen.\n\n**Vorgehen**\nDie zwölf Beschäftigten der Buchhaltung konnten an bis zu zwei Tagen pro Woche mobil arbeiten. Zu Beginn und am Ende der Testphase wurde eine Befragung durchgeführt. Zusätzlich wurden die Bearbeitungszeiten für Rechnungen ausgewertet.\n\n**Ergebnisse**\nAus der Befragung geht hervor, dass die Zufriedenheit deutlich gestiegen ist. Elf von zwölf Beschäftigten möchten das Modell beibehalten. Die durchschnittliche Bearbeitungszeit einer Rechnung sank von vier auf drei Arbeitstage. Allerdings gaben mehrere Teilnehmende an, die Abstimmung im Team sei schwieriger geworden. Spontane Fragen blieben häufiger liegen, besonders an Tagen, an denen die halbe Abteilung nicht im Büro war.\n\n**Empfehlung**\nWir empfehlen, das mobile Arbeiten beizubehalten und auf weitere Abteilungen auszuweiten. Um die Abstimmung zu verbessern, sollte für jedes Team ein gemeinsamer Bürotag festgelegt werden. Darüber hinaus wäre es sinnvoll, allen Beschäftigten einen zweiten Bildschirm für zu Hause zur Verfügung zu stellen. Nach weiteren sechs Monaten sollte eine erneute Auswertung erfolgen.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Das Pilotprojekt dauerte ein halbes Jahr.', a: 't', why: '*Von Januar bis Juni*: six months.' },
            { q: 'Alle Beschäftigten der Buchhaltung möchten weiter mobil arbeiten.', a: 'f', why: '*Elf von zwölf Beschäftigten*: not all of them.' },
            { q: 'Rechnungen wurden während des Projekts schneller bearbeitet.', a: 't', why: 'The time *sank von vier auf drei Arbeitstage*.' },
            { q: 'Nach Angaben mehrerer Teilnehmender wurde die Abstimmung im Team einfacher.', a: 'f', why: 'They said it had become *schwieriger*.' },
            { q: 'Die Firma hat durch das Pilotprojekt Geld gespart.', a: 'ng', why: 'The extract says nothing about costs.' },
            { q: 'Der Bericht empfiehlt einen gemeinsamen Bürotag für jedes Team.', a: 't', why: '*… sollte für jedes Team ein gemeinsamer Bürotag festgelegt werden.*' },
            { q: 'Die Beschäftigten konnten jeden Tag mobil arbeiten.', a: 'f', why: 'Only *an bis zu zwei Tagen pro Woche*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the content and the language of the report.', items: [
            { q: 'Warum wurde das Projekt gestartet?', o: ['Weil Mitarbeiterinnen gegangen waren und Bewerber nach mobilem Arbeiten fragten.', 'Weil das Büro zu klein geworden war.', 'Weil Rechnungen zu spät bezahlt wurden.'], why: 'See the *Ausgangslage*: two employees left, and applicants asked about working from home.' },
            { q: 'In welchem Teil steht, wie die Informationen gesammelt wurden?', o: ['Vorgehen', 'Ausgangslage', 'Empfehlung'], why: 'The *Vorgehen* describes the survey and the evaluation of the processing times.' },
            { q: '„… einen zweiten Bildschirm zur Verfügung zu stellen“ bedeutet:', o: ['einen zweiten Bildschirm bereitzustellen', 'einen zweiten Bildschirm zu verkaufen', 'einen zweiten Bildschirm zu reparieren'], why: '*zur Verfügung stellen = bereitstellen*: to provide.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Die Geschäftsleitung muss bald eine Entscheidung ___.', o: ['treffen', 'machen', 'stellen'], why: 'The fixed phrase is *eine Entscheidung treffen*.' },
      { q: 'Der Umsatz stieg ___ 5 auf 6 Millionen Euro.', o: ['von', 'um', 'bei'], why: '*von … auf*: the old and the new value.' },
      { q: 'Wir empfehlen, eine neue Software ___.', o: ['einzuführen', 'zu einführen', 'einführen'], why: 'Separable verb: *zu* goes in the middle.' },
      { q: 'Welcher Teil eines Berichts beschreibt die Situation und das Problem?', o: ['die Ausgangslage', 'die Empfehlung', 'das Vorgehen'], why: 'The *Ausgangslage* describes the starting situation.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Die Firma stellt das Material kostenlos zur ___.', a: ['Verfügung', 'Verfuegung'], why: '*zur Verfügung stellen*: to provide.' },
      { q: 'Die Zahl der Fehler ist ___ 20 Prozent gesunken.', a: ['um'], why: 'The size of the change: *um*.' },
      { q: 'Die Prozesse ___ vereinfacht werden. (sollen, Konjunktiv II)', a: ['sollten'], why: 'A recommendation: *sollten* + Partizip II + *werden*.' },
      { q: '___ empfiehlt sich, früh zu beginnen.', a: ['Es'], why: 'The fixed phrase *Es empfiehlt sich, … zu …*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the opposites.', pairs: [
      ['steigen', 'sinken'],
      ['zunehmen', 'abnehmen'],
      ['der Anstieg', 'der Rückgang'],
      ['sich verdoppeln', 'sich halbieren'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Die Anlage wurde im Mai in Betrieb genommen.', why: 'Passive in the Präteritum: *wurde* second, *genommen* at the end, *in Betrieb* just before it.' },
      { a: 'Es wäre sinnvoll, die Testphase zu verlängern.', why: 'Konjunktiv II recommendation, then *zu* + infinitive at the end.' },
    ] },
  ],
};
