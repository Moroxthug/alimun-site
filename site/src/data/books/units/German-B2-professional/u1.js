// German B2 for work, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Negotiating',
  goal: 'Negotiate conditions, prices and deadlines in a professional way.',
  art: 'pretzel',
  tags: { skills: ['speaking', 'grammar', 'reading'], topics: ['negotiation', 'konjunktiv-ii', 'conditions', 'concessions'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Positions and compromises',
      about: 'Make offers and proposals with the Konjunktiv II and set conditions with falls and sofern.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In a negotiation, a direct sentence like *Wir geben Ihnen fünf Prozent Rabatt.* sounds like a final decision. The **Konjunktiv II** turns it into a proposal that the other side can answer: *Wir **könnten** Ihnen fünf Prozent Rabatt geben.* It keeps the door open for a compromise.\n\nUse *könnte*, *wäre*, *hätte* and *würde* + infinitive. Many fixed phrases for negotiating are built this way.' },
          { t: 'examples', items: [
            { s: 'Wir **könnten** Ihnen bei der Menge entgegenkommen.', n: '*jemandem entgegenkommen*: to make a concession to someone. A soft offer.' },
            { s: 'Wir **wären bereit**, die Lieferzeit auf drei Wochen zu verkürzen.', n: '*bereit sein, etwas zu tun*: to be willing to do something. After *bereit* comes an infinitive with *zu*.' },
            { s: '**Wäre** es für Sie denkbar, die Hälfte im Voraus zu zahlen?', n: 'A careful question: could you imagine this?' },
            { s: 'Ich **würde vorschlagen**, dass wir den Vertrag zunächst auf ein Jahr begrenzen.', n: '*Ich würde vorschlagen* sounds softer than *Ich schlage vor*.' },
            { s: 'Was **würden** Sie von einem Kompromiss **halten**?', n: 'Asks for the opinion of the other side on a proposal.' },
          ] },
        ],
        [
          { t: 'text', md: 'A proposal often comes with a condition. Besides *wenn*, German has more formal conjunctions for conditions. They start a subordinate clause, so the verb goes to the **end**. *Vorausgesetzt* can also be followed by main-clause word order without *dass*: *vorausgesetzt, wir erhalten die Daten rechtzeitig*.' },
          { t: 'table', caption: 'Conjunctions for conditions', explain: ['head', 'col1'], head: ['Conjunction', 'Use', 'Example'], rows: [
            ['wenn', 'if, the general word', 'Wenn Sie 500 Stück bestellen, sinkt der Preis.'],
            ['falls', 'if, in case: it may or may not happen', 'Falls es Probleme gibt, rufen Sie mich an.'],
            ['sofern', 'provided that, formal', 'Sofern die Qualität stimmt, verlängern wir den Vertrag.'],
            ['vorausgesetzt, (dass)', 'on condition that', 'Wir liefern bis Mai, vorausgesetzt, dass wir die Pläne bis März erhalten.'],
            ['unter der Bedingung, dass', 'on the condition that, very clear', 'Wir stimmen zu, unter der Bedingung, dass die Preise fest bleiben.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Combine a condition with the Konjunktiv II to make a careful offer: *Falls Sie 1.000 Stück abnehmen **würden**, **könnten** wir den Preis senken.* After the subordinate clause, the verb of the main clause comes **first**: *…, könnten wir …*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
            { q: '___ Sie mehr als 500 Stück bestellen, gewähren wir zehn Prozent Rabatt.', o: ['Sofern', 'Trotzdem', 'Deshalb'], why: 'A condition with the verb at the end: *sofern*. *Trotzdem* and *deshalb* are adverbs and need the verb in second place.' },
            { q: 'Wir ___ bereit, die Kosten für den Transport zu übernehmen.', o: ['wären', 'würden', 'hätten'], why: '*bereit sein*: the Konjunktiv II of *sein* is *wären*.' },
            { q: '___ es Ihnen recht, wenn wir den Termin um eine Woche verschieben?', o: ['Wäre', 'Hätte', 'Könnte'], why: '*Wäre es Ihnen recht, wenn …?* is a fixed polite question: would it be all right with you if …?' },
            { q: '___ sich die Lieferung verzögert, informieren wir Sie sofort.', o: ['Falls', 'Obwohl', 'Damit'], why: '*Falls*: in case it happens. *Obwohl* means although; *damit* gives a purpose.' },
            { q: 'Wir liefern pünktlich, ___, dass wir die Pläne bis Freitag bekommen.', o: ['vorausgesetzt', 'sofern', 'falls'], why: 'Only *vorausgesetzt* is followed by *dass*. *Sofern* and *falls* start the clause on their own.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the Konjunktiv II form.', items: [
            { q: 'Wir ___ Ihnen beim Preis etwas entgegenkommen. (können)', a: ['könnten', 'koennten'], why: 'A soft offer: *wir könnten*.' },
            { q: '___ Sie damit einverstanden, wenn wir in zwei Raten zahlen? (sein)', a: ['Wären', 'Waeren'], why: '*einverstanden sein*: the polite question is *Wären Sie …?*' },
            { q: 'Ich ___ vorschlagen, dass wir uns in der Mitte treffen. (werden)', a: ['würde', 'wuerde'], why: '*Ich würde vorschlagen* is softer than *Ich schlage vor*.' },
            { q: '___ Sie beim Preis vielleicht noch etwas Spielraum? (haben)', a: ['Hätten', 'Haetten'], why: '*Spielraum haben*: to have room to move. *Hätten Sie …?* asks carefully.' },
            { q: 'Falls Sie früher zahlen ___, könnten wir zwei Prozent Skonto geben. (werden)', a: ['würden', 'wuerden'], why: '*würden* + infinitive in the condition: *falls Sie früher zahlen würden*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Wir wären bereit, den Preis zu senken.', why: '*bereit sein*, then a comma and the infinitive with *zu* at the end.' },
            { a: 'Falls Sie Fragen haben, rufen Sie mich an.', why: 'After the clause with *falls*, the verb *rufen* comes first.' },
            { a: 'Sofern die Qualität stimmt, verlängern wir den Vertrag.', why: '*sofern* sends *stimmt* to the end; the main clause then starts with the verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Diplomatic disagreement and concessions',
      about: 'Disagree politely, make concessions and ask for something in return.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In German business culture people often say clearly what they think. In a negotiation, however, a hard *Nein* can block the talk. Experienced negotiators first show that they have understood the other side, and then give their own view. Small words like *leider*, *eigentlich*, *etwas* and *vielleicht* make a sentence softer, and so does the Konjunktiv II.' },
          { t: 'table', caption: 'Direct and diplomatic', explain: ['head'], head: ['Direct', 'Diplomatic'], rows: [
            ['Das ist zu teuer.', 'Der Preis liegt leider über unserem Budget.'],
            ['Das geht nicht.', 'Das wäre für uns schwierig.'],
            ['Sie haben unrecht.', 'Das sehe ich etwas anders.'],
            ['Nein.', 'Ich verstehe Ihren Standpunkt, aber …'],
            ['Das wollen wir nicht.', 'Das ist für uns im Moment keine Option.'],
          ] },
        ],
        [
          { t: 'text', md: 'A **concession** (*das Zugeständnis*) means that you give something to get something. Say clearly what you expect in return with *im Gegenzug* (in return). *Zwar … aber* admits a point and then limits it: *Wir können den Preis **zwar** nicht senken, **aber** wir übernehmen die Versandkosten.*' },
          { t: 'dialogue', title: 'Verhandlung über Software-Lizenzen', lines: [
            { who: 'Frau Berger', s: 'Ihr Angebot gefällt uns grundsätzlich, aber der Preis liegt leider über unserem Budget.' },
            { who: 'Herr Okafor', s: 'Ich verstehe. Wo genau sehen Sie das Problem?' },
            { who: 'Frau Berger', s: 'Für 200 Lizenzen sind 40.000 Euro im Jahr für uns zu viel. Wir hatten mit etwa 32.000 Euro gerechnet.' },
            { who: 'Herr Okafor', s: 'Ich verstehe Ihre Sicht. Allerdings ist der Support rund um die Uhr schon im Preis enthalten. Wir könnten Ihnen aber entgegenkommen, sofern Sie einen Vertrag über drei Jahre abschließen.' },
            { who: 'Frau Berger', s: 'Drei Jahre sind zwar eine lange Zeit, aber das wäre denkbar. An welchen Preis denken Sie?' },
            { who: 'Herr Okafor', s: '36.000 Euro im Jahr. Im Gegenzug bräuchten wir Ihre Zusage bis Ende des Monats.' },
            { who: 'Frau Berger', s: 'Damit wären wir einverstanden, vorausgesetzt, die Schulung für unser Team ist im Preis enthalten.' },
            { who: 'Herr Okafor', s: 'Einverstanden. Ich schicke Ihnen das geänderte Angebot morgen zu.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the direct sentence with a diplomatic version.', pairs: [
            ['Der Termin ist zu früh.', 'Der Termin wäre für uns etwas knapp.'],
            ['Ihr Preis ist zu hoch.', 'Der Preis liegt über unserem Budget.'],
            ['Das machen wir nicht.', 'Das ist für uns leider keine Option.'],
            ['Sie verstehen das falsch.', 'Vielleicht habe ich mich unklar ausgedrückt.'],
            ['Wir wollen mehr Rabatt.', 'Hätten Sie beim Rabatt noch etwas Spielraum?'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Which reaction is the most diplomatic?', items: [
            { q: 'Der Kunde möchte 20 Prozent Rabatt. Sie können höchstens 10 Prozent geben.', o: ['20 Prozent wären für uns schwierig, aber über 10 Prozent könnten wir sprechen.', '20 Prozent? Das ist doch lächerlich.', 'Nein, das geht auf keinen Fall.'], why: 'It says no politely with the Konjunktiv II and makes a counter-offer.' },
            { q: 'Ihr Partner sagt, dass Ihre Lieferzeit zu lang ist.', o: ['Ich verstehe Ihren Standpunkt. Lassen Sie uns schauen, was möglich ist.', 'Das stimmt nicht.', 'Dann müssen Sie eben woanders bestellen.'], why: 'First show understanding, then keep the talk open.' },
            { q: 'Sie geben etwas nach und möchten etwas dafür bekommen.', o: ['Wir übernehmen die Versandkosten. Im Gegenzug bräuchten wir eine feste Bestellung.', 'Wir übernehmen die Versandkosten, weil wir nett sind.', 'Wir übernehmen die Versandkosten, aber nur dieses eine Mal.'], why: '*Im Gegenzug* names what you expect in return.' },
            { q: 'Sie sind mit einer Zahl Ihres Partners nicht einverstanden.', o: ['Das sehe ich etwas anders.', 'Da haben Sie total unrecht.', 'Ihre Zahl ist falsch, das weiß doch jeder.'], why: '*etwas anders* makes the disagreement softer.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the small words that soften each sentence (not the verbs).', items: [
            { s: 'Der Termin ist für uns [leider] [etwas] knapp.', why: '*leider* and *etwas* make the problem sound smaller and more polite.' },
            { s: 'Wir hatten [eigentlich] mit einem [etwas] niedrigeren Preis gerechnet.', why: '*eigentlich* and *etwas* soften the disagreement.' },
            { s: 'Das ist [vielleicht] nicht die beste Lösung für beide Seiten.', why: '*vielleicht* turns a hard judgement into an opinion.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Der Preis ist zwar hoch, aber die Qualität stimmt.', why: '*zwar* admits a point; *aber* starts the second main clause with normal word order.' },
            { a: 'Das Angebot ist zwar gut, aber leider zu spät.', why: '*zwar … aber*: first a positive point, then the limit.' },
            { a: 'Im Gegenzug erwarten wir eine schnelle Zusage.', why: '*Im Gegenzug* takes the first position, so the verb *erwarten* follows directly.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'An email negotiation',
      about: 'Read an exchange of emails about a cleaning contract and follow the offers.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Betreff: Ihr Angebot für die Reinigung unserer Büros', md: '**Von: Selin Aydin, Einkauf**\n\nSehr geehrter Herr Lindqvist,\n\nvielen Dank für Ihr Angebot vom 4. September für die Reinigung unserer Büros in Mannheim. Ihr Konzept hat uns überzeugt, besonders die Reinigung mit umweltfreundlichen Mitteln. Allerdings liegt Ihr Preis von 4.800 Euro im Monat deutlich über dem Betrag, den wir eingeplant haben.\n\nWäre es für Sie denkbar, den Preis auf 4.200 Euro zu senken? Außerdem sieht Ihr Entwurf eine Laufzeit von drei Jahren vor. Wir würden zunächst lieber einen Vertrag über ein Jahr abschließen, um die Zusammenarbeit zu testen.\n\nMit freundlichen Grüßen\nSelin Aydin\n\n**Von: Erik Lindqvist, Vertrieb**\n\nSehr geehrte Frau Aydin,\n\nvielen Dank für Ihre offene Rückmeldung. Ich verstehe, dass Sie die Zusammenarbeit zunächst testen möchten. Ein Preis von 4.200 Euro wäre für uns allerdings nicht wirtschaftlich, da wir für Ihre Räume ein festes Team von vier Personen einplanen.\n\nIch möchte Ihnen daher zwei Möglichkeiten vorschlagen. Sofern Sie sich für drei Jahre entscheiden, könnten wir den Preis auf 4.400 Euro senken. Falls Ihnen ein Jahr lieber ist, bleibt es zwar bei 4.800 Euro, aber wir würden zweimal im Jahr die Fensterreinigung kostenlos übernehmen. Außerdem könnten Sie den Vertrag mit einer Frist von drei Monaten kündigen, falls Sie mit unserer Arbeit nicht zufrieden sind.\n\nFür beide Varianten bräuchten wir Ihre Entscheidung bis zum 30. September, damit wir das Team ab November einplanen können.\n\nMit freundlichen Grüßen\nErik Lindqvist' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Frau Aydin gefällt das Konzept der Reinigungsfirma.', a: 't', why: '*Ihr Konzept hat uns überzeugt.*' },
            { q: 'Frau Aydin möchte zuerst einen Vertrag über drei Jahre.', a: 'f', why: 'She would prefer *einen Vertrag über ein Jahr*.' },
            { q: 'Herr Lindqvist akzeptiert den Preis von 4.200 Euro.', a: 'f', why: 'This price *wäre für uns allerdings nicht wirtschaftlich*.' },
            { q: 'Bei einem Vertrag über drei Jahre kostet die Reinigung 4.400 Euro im Monat.', a: 't', why: '*Sofern Sie sich für drei Jahre entscheiden, könnten wir den Preis auf 4.400 Euro senken.*' },
            { q: 'Bei einem Vertrag über ein Jahr ist die Fensterreinigung zweimal im Jahr kostenlos.', a: 't', why: '*… würden wir zweimal im Jahr die Fensterreinigung kostenlos übernehmen.*' },
            { q: 'Die Reinigungsfirma hat schon andere Kunden in Mannheim.', a: 'ng', why: 'The emails do not mention other customers.' },
            { q: 'Frau Aydin soll bis Ende September antworten.', a: 't', why: '*… bräuchten wir Ihre Entscheidung bis zum 30. September.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the emails.', items: [
            { q: '„Wäre es für Sie denkbar, den Preis zu senken?“ Was macht Frau Aydin hier?', o: ['Sie schlägt vorsichtig einen niedrigeren Preis vor.', 'Sie lehnt das Angebot ab.', 'Sie akzeptiert den Preis.'], why: 'The Konjunktiv II *Wäre es denkbar* makes a careful proposal.' },
            { q: 'Warum kann Herr Lindqvist den Preis nicht auf 4.200 Euro senken?', o: ['Weil er ein festes Team von vier Personen einplant.', 'Weil die Reinigungsmittel teurer geworden sind.', 'Weil der Vertrag nur ein Jahr läuft.'], why: '*… da wir für Ihre Räume ein festes Team von vier Personen einplanen.*' },
            { q: '„Sofern Sie sich für drei Jahre entscheiden …“: Was bedeutet „sofern“ hier?', o: ['vorausgesetzt, dass', 'obwohl', 'nachdem'], why: '*sofern* sets a condition, like *vorausgesetzt, dass*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '___ Sie bis Freitag unterschreiben, gilt dieser Preis noch.', o: ['Sofern', 'Trotzdem', 'Obwohl'], why: 'A condition with the verb at the end: *sofern*.' },
      { q: 'Wir ___ bereit, die Hälfte der Kosten zu übernehmen.', o: ['wären', 'hätten', 'würden'], why: '*bereit sein*: Konjunktiv II *wären*.' },
      { q: 'Sie lehnen einen Vorschlag höflich ab:', o: ['Das wäre für uns leider schwierig.', 'Das geht gar nicht.', 'Das ist Ihr Problem.'], why: 'The Konjunktiv II and *leider* make the refusal polite.' },
      { q: 'Wir senken den Preis. ___ erwarten wir eine Bestellung über zwei Jahre.', o: ['Im Gegenzug', 'Zwar', 'Falls'], why: '*Im Gegenzug*: in return. *Falls* would need the verb at the end, and *zwar* needs an *aber*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: '___ Sie beim Liefertermin noch Spielraum? (haben)', a: ['Hätten', 'Haetten'], why: 'Polite question in the Konjunktiv II: *Hätten Sie …?*' },
      { q: 'Wir liefern bis Mai, ___, dass die Pläne rechtzeitig kommen.', a: ['vorausgesetzt'], why: '*vorausgesetzt, dass*: on condition that.' },
      { q: '___ Sie mit diesem Kompromiss einverstanden? (sein)', a: ['Wären', 'Waeren'], why: '*einverstanden sein*: *Wären Sie …?*' },
      { q: 'Wir können zwar keinen Rabatt geben, ___ wir übernehmen die Versandkosten.', a: ['aber'], why: '*zwar … aber*: first admit a point, then add another.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the direct sentence with a diplomatic version.', pairs: [
      ['Das ist zu teuer.', 'Der Preis liegt über unserem Budget.'],
      ['Nein.', 'Ich verstehe Ihren Standpunkt, aber …'],
      ['Sie haben unrecht.', 'Das sehe ich etwas anders.'],
      ['Das geht nicht.', 'Das wäre für uns schwierig.'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Falls es Probleme gibt, rufen wir Sie an.', why: 'After the clause with *falls*, the main clause starts with the verb.' },
      { a: 'Wir wären bereit, früher zu liefern.', why: '*bereit sein* + infinitive with *zu* at the end.' },
    ] },
  ],
};
