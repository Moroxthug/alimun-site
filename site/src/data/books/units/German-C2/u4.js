// German C2, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Academic and critical writing',
  goal: 'Take a measured, evidence-based stance in academic writing. Learn hedging and boosting, reporting verbs with Konjunktiv I, and critical evaluation with signposting.',
  art: 'owl',
  tags: { skills: ['writing', 'reading', 'vocabulary'], topics: ['hedging', 'boosting', 'reporting verbs', 'Konjunktiv I', 'critical evaluation', 'signposting'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Offenbar, dürfte, zweifellos',
      about: 'Hedge and boost claims to show exactly how sure you are.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Academic writers rarely say that something is simply true. They show **how sure** they are. **Hedges** make a claim less certain: *offenbar, vermutlich, möglicherweise, es scheint, tendenziell, in gewissem Maße, wohl*, and the modal **dürfte** (*Das dürfte stimmen* = that is probably true). **Boosters** make it stronger: *zweifellos, unbestreitbar, eindeutig, ohne Zweifel*. **Angeblich** and **vorgeblich** mean *allegedly* and show doubt: *Das Treffen war angeblich privat.*' },
          { t: 'table', caption: 'Hedges and boosters', explain: ['head', 'col0'], head: ['Function', 'Examples', 'Sample sentence'], rows: [
            ['hedge: possibility', 'möglicherweise, es scheint, dürfte', 'Die Daten dürften diese These stützen.'],
            ['hedge: frequency or degree', 'tendenziell, in gewissem Maße', 'Die Preise steigen tendenziell im Sommer.'],
            ['hedge: probability', 'vermutlich, offenbar, wohl', 'Er ist vermutlich abgereist.'],
            ['hedge: doubt about truth', 'angeblich, vorgeblich', 'Der Besuch war angeblich privat.'],
            ['booster', 'zweifellos, unbestreitbar, eindeutig', 'Die Ergebnisse sind eindeutig signifikant.'],
          ] },
        ],
        [
          { t: 'text', md: 'Too many hedges make you sound unsure; too many boosters make you sound arrogant. A strong paragraph balances them. Weak: *Es ist unbestreitbar, dass alle Studierenden Online-Kurse bevorzugen.* Measured: *Die Umfrage legt nahe, dass viele Studierende Online-Kurse bevorzugen, wobei dies je nach Fach variieren dürfte.* Notice **legt nahe**, **viele** and **dürfte**: three small hedges that make the claim defensible.' },
          { t: 'tip', art: 'owl', md: 'Be careful with absolute words: *alle, immer, nie, beweist, unmöglich*. They are almost always too strong in academic writing. Replace them: *alle → die meisten / viele*; *immer → oft / tendenziell*; *beweist → legt nahe / deutet darauf hin*.' },
          { t: 'ex', kind: 'transform', h: 'Make the claim more cautious, using the word given.', items: [
            { q: 'Soziale Medien verursachen Ängste bei Jugendlichen.', cue: 'können', a: ['Soziale Medien können Ängste bei Jugendlichen verursachen.'], why: 'The hedge *können* reduces certainty.' },
            { q: 'Die Studie beweist, dass Sport das Gedächtnis verbessert.', cue: 'legt nahe', a: ['Die Studie legt nahe, dass Sport das Gedächtnis verbessert.'], why: '*Legt nahe* is weaker than *beweist*.' },
            { q: 'Alle jungen Leute bevorzugen Textnachrichten.', cue: 'tendenziell', a: ['Junge Leute bevorzugen tendenziell Textnachrichten.', 'Junge Leute bevorzugen Textnachrichten tendenziell.'], why: '*Tendenziell* hedges frequency.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
            { q: 'Das Gesetz wurde ___ zum Schutz der Arbeitnehmer eingeführt, doch Kritiker sehen einen Vorteil für die Arbeitgeber.', o: ['angeblich', 'zweifellos', 'eindeutig'], why: '*Angeblich*: as claimed, but perhaps not true.' },
            { q: 'Die Beweise sprechen ___ für die neue Behandlung: Alle vier Studien stimmen überein.', o: ['eindeutig', 'wohl', 'angeblich'], why: 'A strong booster fits strong evidence.' },
            { q: 'Dies ist ___ der einflussreichste Roman des Jahrzehnts, auch wenn manche widersprechen würden.', o: ['wohl', 'zweifellos', 'eindeutig'], why: '*Wohl* hedges an opinion.' },
            { q: 'Die Zahlen ___ diese Hypothese zu bestätigen.', o: ['scheinen', 'beweisen', 'sind sicher'], why: '*Scheinen* is a hedge.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Hedge or booster?', groups: ['hedge', 'booster'], explain: ['groups'], items: [
            { s: 'tendenziell', g: 0, why: 'A hedge for frequency.' },
            { s: 'zweifellos', g: 1, why: 'A booster.' },
            { s: 'es scheint', g: 0, why: 'A hedge.' },
            { s: 'eindeutig', g: 1, why: 'A booster.' },
            { s: 'in gewissem Maße', g: 0, why: 'A hedge for degree.' },
            { s: 'unbestreitbar', g: 1, why: 'A booster.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Behaupten, einräumen, bestreiten',
      about: 'Use precise reporting verbs and Konjunktiv I.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To refer to other writers, choose a **reporting verb** that shows their stance. **Darlegen**, **feststellen** and **zeigen** are neutral. **Betonen** and **hervorheben** show emphasis. **Vertreten** (*eine Auffassung vertreten*) shows a firm position. **Annehmen** means *assume*. **Einräumen** means *admit reluctantly*. **Bestreiten** and **widersprechen** show disagreement. **Behaupten** shows doubt: the claim is not accepted. Use the **present** for what an author says and the **Perfekt or Präteritum** for what a study did.' },
          { t: 'table', caption: 'Reporting verbs', explain: ['head', 'col0'], head: ['Verb', 'What it shows', 'Example'], rows: [
            ['darlegen / feststellen', 'neutral', 'Der Autor legt dar, dass Städte den Verkehr reduzieren sollten.'],
            ['betonen / hervorheben', 'emphasis', 'Sie betont, dass die Politik gescheitert sei.'],
            ['vertreten', 'firm position', 'Er vertritt die Auffassung, dass die Studie zu kurz war.'],
            ['einräumen', 'admits reluctantly', 'Die Autorin räumt ein, dass die Stichprobe klein war.'],
            ['bestreiten / widersprechen', 'disagrees', 'Mehrere Fachleute bestreiten diese Zahlen.'],
            ['behaupten', 'doubt about the truth', 'Die Zeitung behauptet, der Minister habe Geld genommen.'],
          ] },
        ],
        [
          { t: 'text', md: 'In **indirect speech**, formal German uses **Konjunktiv I**, which marks distance from the claim: *Der Autor behauptet, die Studie sei fehlerfrei.* *Sie betont, die Politik sei gescheitert.* *Die Zeitung berichtet, der Minister habe Geld genommen.* If the Konjunktiv I form is **identical to the indicative** (*sie haben*), use **Konjunktiv II**: *Sie sagen, sie hätten keine Zeit.* In **everyday speech**, the indicative or *dass* + indicative is common.' },
          { t: 'tip', art: 'owl', md: 'Use **Konjunktiv I** for what **someone else** said, never for your own statements. **Behaupten** already shows doubt, so the Konjunktiv I reinforces it. **Annehmen** takes **dass** + indicative: *Ich nehme an, dass er kommt.* Use **einräumen** only for a concession that works **against** the writer’s own position.' },
          { t: 'ex', kind: 'choice', h: 'Choose the best reporting verb.', items: [
            { q: 'Die Autorin ___, dass die Stichprobe zu klein war.', o: ['räumt ein', 'behauptet', 'bestreitet'], why: '*Einräumen*: admit reluctantly.' },
            { q: 'Die Zeitung ___, der Minister habe Geld genommen; es gibt keinen Beweis.', o: ['behauptet', 'legt dar', 'räumt ein'], why: '*Behaupten*: claim without proof.' },
            { q: 'Mehrere Fachleute ___ die Richtigkeit der Zahlen.', o: ['bestreiten', 'vertreten', 'betonen'], why: '*Bestreiten*: deny, dispute.' },
            { q: 'Er ___ die Auffassung, dass die Studie zu kurz war.', o: ['vertritt', 'bestreitet', 'räumt ein'], why: '*Vertreten*: hold a view firmly.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Report the statement with Konjunktiv I, using the words given.', items: [
            { q: 'Die Studie ist fehlerfrei, behauptet der Autor.', cue: 'Der Autor behauptet, die Studie', a: ['Der Autor behauptet, die Studie sei fehlerfrei.'], why: 'Konjunktiv I of *sein*.' },
            { q: 'Der Minister hat Geld genommen, berichtet die Zeitung.', cue: 'Die Zeitung berichtet, der Minister', a: ['Die Zeitung berichtet, der Minister habe Geld genommen.'], why: 'Konjunktiv I of *haben* + participle.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
            { q: 'Sie behauptet, sie ___ keine Zeit. (haben, Konjunktiv II because Konjunktiv I looks like the indicative)', a: ['hätte'], why: 'Konjunktiv II when Konjunktiv I is the same as the indicative.' },
            { q: 'Die Autorin ___ ein, dass die Stichprobe klein war. (einräumen)', a: ['räumt'], why: '*Einräumen* is separable: *räumt … ein*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Der Autor behauptet, die Studie [ist] fehlerfrei. (formal reporting)', a: ['sei'], why: 'Konjunktiv I marks distance.' },
            { s: 'Die Zeitung [räumt ein], der Minister habe Geld genommen, aber es gibt keinen Beweis.', a: ['behauptet'], why: '*Behaupten* signals doubt.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Stärken und Schwächen',
      about: 'Evaluate a piece of research and signpost your argument.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'A critical writer does not only describe; they **evaluate**. For any study, ask: what is its **Stärke** (strength), and what are its **Schwächen** (weaknesses)? Typical strengths: *eine große und vielfältige Stichprobe, eine klare Methode, Ergebnisse, die mit anderen Studien übereinstimmen*. Typical weaknesses: *eine kleine oder einseitige Stichprobe, ein kurzer Zeitraum, Selbstauskünfte, eine Schlussfolgerung, die über die Daten hinausgeht*. Useful phrases: *Eine Stärke der Studie ist…*, *Eine wesentliche Einschränkung ist…*, *Die Ergebnisse lassen sich nicht auf … übertragen*.' },
          { t: 'examples', items: [
            { s: '**Eine Stärke** der Studie ist ihre große und vielfältige Stichprobe.', n: 'A positive evaluation.' },
            { s: '**Eine wesentliche Einschränkung** ist, dass die Daten auf Selbstauskünften beruhen.', n: 'A negative evaluation.' },
            { s: 'Die Ergebnisse **lassen sich nicht übertragen** auf ältere Menschen.', n: 'The sample did not include them.' },
          ] },
        ],
        [
          { t: 'text', md: '**Signposting** tells the reader where the argument is going. To contrast: *während*, *hingegen*, *dagegen*, *dennoch*. To draw a conclusion: *folglich*, *somit*, *daraus folgt*. To add: *darüber hinaus*, *zudem*. To balance: *einerseits … andererseits*. To concede and then argue: *zwar … aber …*. These words are the grammar of an argument; without them, a paragraph is a list of facts.' },
          { t: 'table', caption: 'Signposting', explain: ['head', 'col0'], head: ['Function', 'Phrases', 'Example'], rows: [
            ['contrast', 'während, hingegen, dennoch', 'Die erste Studie fand einen Zusammenhang, während die zweite keinen fand.'],
            ['conclusion', 'folglich, somit, daraus folgt', 'Folglich muss die Politik überarbeitet werden.'],
            ['addition', 'darüber hinaus, zudem', 'Darüber hinaus war die Stichprobe klein.'],
            ['concession', 'zwar … aber …', 'Die Stichprobe war zwar klein, aber der Trend ist klar.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Strength or weakness?', groups: ['strength', 'weakness'], explain: ['groups'], items: [
            { s: 'Die Stichprobe umfasste 5 000 Teilnehmende aus zwölf Ländern.', g: 0, why: 'A large and varied sample.' },
            { s: 'Alle Teilnehmenden waren Studierende.', g: 1, why: 'A narrow sample.' },
            { s: 'Die Ergebnisse stimmen mit denen von drei früheren Studien überein.', g: 0, why: 'Consistency with earlier research.' },
            { s: 'Die Studie dauerte nur zwei Wochen.', g: 1, why: 'A short time period.' },
            { s: 'Die Daten stammen aus Fragebögen, die die Teilnehmenden selbst ausfüllten.', g: 1, why: 'Self-reporting can be unreliable.' },
            { s: 'Die Forschenden beschrieben ihre Methode ausführlich.', g: 0, why: 'A clear method.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best signpost.', items: [
            { q: 'Die erste Studie fand einen klaren Zusammenhang, ___ die zweite keinen fand.', o: ['während', 'folglich', 'zudem'], why: 'Contrast between the studies.' },
            { q: 'Die Stichprobe war ___ klein, aber der Trend ist klar.', o: ['zwar', 'folglich', 'zudem'], why: '*Zwar … aber …* concedes, then counters.' },
            { q: 'Die Daten stammen aus zwei Ländern; ___ lassen sich die Ergebnisse nicht ohne Weiteres übertragen.', o: ['folglich', 'hingegen', 'während'], why: 'A logical conclusion.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the sentences with the signpost given.', items: [
            { q: 'Die erste Studie fand einen Zusammenhang. Die zweite fand keinen.', cue: 'während', a: ['Die erste Studie fand einen Zusammenhang, während die zweite keinen fand.'], why: '*Während* links two contrasting clauses.' },
            { q: 'Die Stichprobe war klein. Der Trend war klar.', cue: 'zwar', a: ['Die Stichprobe war zwar klein, aber der Trend war klar.', 'Die Stichprobe war zwar klein, doch der Trend war klar.'], why: 'Concession then counter-point.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Arbeiten von zu Hause: Was wissen wir?',
      about: 'Read an extract from a literature review and identify stance, hedging and evaluation.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Arbeiten von zu Hause: Was wissen wir?', md: 'Eine wachsende Zahl von Hinweisen legt nahe, dass das Arbeiten von zu Hause die Tagesgestaltung vieler Beschäftigter verändert hat. Das Ausmaß der Auswirkungen auf die Produktivität bleibt jedoch umstritten.\n\nEine frühe Studie vertrat die Auffassung, Beschäftigte zu Hause seien produktiver, angeblich weil sie weniger unterbrochen würden. Eine spätere Studie hingegen stellte fest, dass die Produktivität bei Aufgaben sank, die enge Teamarbeit erforderten. Beide Studien haben Schwächen: Die erste Stichprobe stammte aus einem einzigen Unternehmen, während die zweite auf den eigenen Schätzungen der Beschäftigten beruhte.\n\nMehrere Forschende räumen ein, dass die Daten unvollständig sind. Eine Person nimmt an, dass nicht der Ort, sondern die Qualität der Führung entscheidend sei, eine Deutung, die zu den vorliegenden Befunden passen dürfte, auch wenn sie nicht direkt geprüft wurde. Andere bestreiten dies und halten die Art der Arbeit für wichtiger.\n\nZusammengenommen legen die Studien nahe, dass sich Heimarbeit tendenziell für eigenständige Aufgaben eignet, ihre Wirkung auf Kreativität und Zusammenarbeit aber weniger eindeutig ist. Folglich sollten Organisationen pauschale Verallgemeinerungen vermeiden. Eine wesentliche Einschränkung der bisherigen Literatur ist der kurze Beobachtungszeitraum; künftige Forschung könnte daher dieselben Beschäftigten über mehrere Jahre begleiten.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Der Autor behauptet, es sei sicher, dass Heimarbeit die Produktivität steigert.', a: 'f', why: 'The extent of the effects “bleibt jedoch umstritten”.' },
            { q: 'Eine frühe Studie meinte, Beschäftigte zu Hause seien produktiver.', a: 't', why: '„Seien produktiver.“' },
            { q: 'Die spätere Studie fand, dass alle Aufgaben zu Hause schlechter erledigt wurden.', a: 'f', why: 'Only „Aufgaben, die enge Teamarbeit erforderten“.' },
            { q: 'Eine Person nimmt an, dass die Qualität der Führung entscheidend ist.', a: 't', why: '„Nimmt an, dass… die Qualität der Führung entscheidend sei.“' },
            { q: 'Der Autor empfiehlt pauschale Verallgemeinerungen.', a: 'f', why: '„Organisationen sollten pauschale Verallgemeinerungen vermeiden.“' },
            { q: 'Die erste Studie wurde in einem Krankenhaus durchgeführt.', a: 'ng', why: 'The text says only “einem einzigen Unternehmen”.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does “angeblich weil sie weniger unterbrochen würden” suggest?', o: ['The reason is claimed, but may not be true.', 'The reason is certainly true.', 'The reason is unimportant.'], why: '*Angeblich*: allegedly.' },
            { q: 'What does “räumen ein” show about the researchers?', o: ['They admit the data are incomplete.', 'They reject the data.', 'They collected the data.'], why: '*Einräumen*: admit reluctantly.' },
            { q: 'What is the function of “hingegen” in the second paragraph?', o: ['It introduces a different finding.', 'It adds a similar finding.', 'It concludes the argument.'], why: 'Signposting a contrast between studies.' },
            { q: 'What limitation of the literature is named in the last paragraph?', o: ['A short observation period.', 'A small number of countries.', 'A lack of interest.'], why: '„Der kurze Beobachtungszeitraum.“' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the hedges.', items: [
            { s: 'Eine Deutung, die zu den vorliegenden Befunden passen [dürfte], auch wenn sie nicht direkt geprüft wurde.', why: 'A hedge: *dürfte*.' },
            { s: 'Heimarbeit eignet sich [tendenziell] für eigenständige Aufgaben.', why: 'A hedge for frequency.' },
            { s: 'Die Studien [legen nahe], dass ihre Wirkung [weniger eindeutig] ist.', why: 'Hedged claims.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Eine wachsende ___ von Hinweisen legt nahe, dass Heimarbeit den Alltag verändert hat.', a: ['Zahl'], why: '*Eine wachsende Zahl von*.' },
            { q: '___ sollten Organisationen pauschale Verallgemeinerungen vermeiden.', a: ['Folglich'], why: '*Folglich* = therefore.' },
            { q: 'Die erste Stichprobe stammte aus einem einzigen Unternehmen, ___ die zweite auf eigenen Schätzungen beruhte.', a: ['während'], why: '*Während* contrasts two things.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Das Ausmaß der Auswirkungen auf die Produktivität bleibt umstritten.', why: 'A noun phrase as subject.' },
            { a: 'Beide Studien haben Schwächen, die man nicht übersehen darf.', why: 'Evaluation of research.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'Der Besuch war ___ privat, aber es war vor allem ein Geschäftstreffen.', o: ['angeblich', 'zweifellos', 'eindeutig'], why: '*Angeblich*: allegedly.' },
      { q: 'Die Autorin ___, dass die Stichprobe zu klein war.', o: ['räumt ein', 'behauptet', 'bestreitet'], why: 'Admits reluctantly.' },
      { q: 'Die erste Studie fand einen Zusammenhang; ___ fand die zweite keinen.', o: ['hingegen', 'zudem', 'folglich'], why: 'Contrast.' },
      { q: 'Die Zeitung behauptet, der Minister ___ Geld genommen.', o: ['habe', 'hat', 'hatte'], why: 'Konjunktiv I marks distance.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Hedge or booster?', groups: ['hedge', 'booster'], explain: ['groups'], items: [
      { s: 'tendenziell', g: 0, why: 'Hedge.' },
      { s: 'zweifellos', g: 1, why: 'Booster.' },
      { s: 'es scheint', g: 0, why: 'Hedge.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Die Ergebnisse lassen sich nicht auf ältere Menschen ___. (übertragen)', a: ['übertragen'], why: '*Lassen sich nicht übertragen*.' },
      { q: 'Die Stichprobe war ___ klein, aber der Trend ist klar.', a: ['zwar'], why: '*Zwar … aber …*.' },
      { q: 'Eine wachsende ___ von Hinweisen legt diese These nahe.', a: ['Zahl'], why: '*Eine wachsende Zahl von*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the word given.', items: [
      { q: 'Die Studie beweist, dass Sport das Gedächtnis verbessert.', cue: 'legt nahe', a: ['Die Studie legt nahe, dass Sport das Gedächtnis verbessert.'], why: '*Legt nahe* is weaker than *beweist*.' },
      { q: 'Die Studie ist fehlerfrei, behauptet der Autor.', cue: 'Der Autor behauptet, die Studie', a: ['Der Autor behauptet, die Studie sei fehlerfrei.'], why: 'Konjunktiv I.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the problem.', items: [
      { s: 'Die Studie [beweist], dass Sport das Gedächtnis verbessert, in allen Fällen.', a: ['legt nahe', 'deutet darauf hin'], why: 'Too strong for academic writing.' },
      { s: 'Die Zeitung [räumt ein], der Minister habe Geld genommen, aber es gibt keinen Beweis.', a: ['behauptet'], why: '*Behaupten* signals doubt.' },
    ] },
  ],
};
