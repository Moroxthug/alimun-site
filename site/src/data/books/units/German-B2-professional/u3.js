// German B2 for work, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Persuasive presentations',
  goal: 'Present ideas convincingly to colleagues and clients.',
  art: 'parrot',
  tags: { skills: ['speaking', 'grammar', 'reading'], topics: ['presentations', 'connectors', 'je-desto', 'indirect-questions', 'objections'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Arguments and connectors',
      about: 'Build an argument with einerseits … andererseits, nicht nur … sondern auch, folglich and je … desto.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'A convincing argument has a clear structure: a claim, a reason, an example and a consequence. Connectors guide the audience through it. Pay attention to word order: many connectors are adverbs. They take the first position, and the verb follows directly.' },
          { t: 'table', caption: 'Connectors for arguments', explain: ['head', 'col1'], head: ['Connector', 'Use', 'Example'], rows: [
            ['einerseits … andererseits', 'two sides of a question', 'Einerseits spart die Software Zeit, andererseits ist sie teuer.'],
            ['zwar … aber', 'admit a point, then limit it', 'Die Umstellung kostet zwar Geld, aber sie lohnt sich.'],
            ['nicht nur … sondern auch', 'add a stronger point', 'Wir sparen nicht nur Kosten, sondern auch Zeit.'],
            ['außerdem, darüber hinaus', 'add another point', 'Darüber hinaus verbessert sich die Qualität.'],
            ['folglich, somit, daher', 'a consequence', 'Folglich können wir schneller liefern.'],
            ['dennoch, trotzdem', 'a contrast to what you expect', 'Der Markt ist schwierig. Dennoch wachsen wir.'],
          ] },
        ],
        [
          { t: 'text', md: '**Je … desto** links two developments: the more one thing happens, the more the other happens. *Je* + comparative starts a subordinate clause, so its verb goes to the end. *Desto* (or *umso*) + comparative is followed directly by the verb: *Je früher wir beginnen, desto günstiger wird das Projekt.*' },
          { t: 'examples', items: [
            { s: '**Je** mehr Kunden online bestellen, **desto** wichtiger wird eine schnelle Website.', n: '*je* + comparative, verb at the end; *desto* + comparative + verb.' },
            { s: '**Einerseits** ist der Standort teuer, **andererseits** sind wir dort nah an unseren Kunden.', n: 'Both words take the first position, so the verb follows directly.' },
            { s: 'Die Lösung ist **nicht nur** günstig, **sondern auch** schnell umzusetzen.', n: 'After *nicht nur* comes *sondern auch*, never *aber auch*.' },
            { s: 'Die Testphase war erfolgreich. **Folglich** schlagen wir vor, das System einzuführen.', n: '*Folglich* takes the first position: the verb comes second.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Somit*, *folglich* and *daher* sound more formal than *deshalb*. In a presentation they make a conclusion sound logical: *Somit ist klar, dass sich die Investition lohnt.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right connector.', items: [
            { q: '___ ist die neue Maschine teuer, andererseits spart sie viel Energie.', o: ['Einerseits', 'Folglich', 'Je'], why: '*andererseits* in the second part needs *einerseits* in the first.' },
            { q: 'Wir sparen nicht nur Geld, ___ auch Zeit.', o: ['sondern', 'aber', 'und'], why: '*nicht nur … sondern auch* is a fixed pair.' },
            { q: 'Die Tests waren positiv. ___ empfehlen wir die Einführung.', o: ['Folglich', 'Obwohl', 'Je'], why: 'A consequence with the verb in second place: *folglich*.' },
            { q: '___ früher wir starten, desto eher sehen wir Ergebnisse.', o: ['Je', 'Wenn', 'Desto'], why: '*desto* in the second part needs *je* in the first.' },
            { q: 'Die Konkurrenz ist stark. ___ haben wir unseren Umsatz gesteigert.', o: ['Dennoch', 'Folglich', 'Außerdem'], why: 'The result is the opposite of what you expect: *dennoch*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Je mehr wir testen, ___ weniger Fehler gibt es später.', a: ['desto', 'umso'], why: 'After a clause with *je* comes *desto* or *umso*.' },
            { q: 'Die Software ist zwar neu, ___ sie läuft schon sehr stabil.', a: ['aber', 'doch'], why: '*zwar … aber*: first admit a point, then limit it.' },
            { q: 'Je ___ die Präsentation ist, desto besser hören die Leute zu. (kurz)', a: ['kürzer', 'kuerzer'], why: '*je* needs a comparative: *kurz → kürzer*.' },
            { q: 'Einerseits wollen wir wachsen, ___ müssen wir sparen.', a: ['andererseits', 'anderseits'], why: '*einerseits … andererseits*: two sides of one question.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Folglich können wir schneller liefern.', why: '*Folglich* first, then the verb *können*, the infinitive at the end.' },
            { a: 'Je früher wir starten, desto günstiger wird es.', why: '*je*: verb at the end. *desto* + comparative, then the verb.' },
            { a: 'Darüber hinaus verbessert sich die Qualität.', why: '*Darüber hinaus* takes the first position, so the verb comes next.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Handling questions and objections',
      about: 'Welcome questions, gain time, answer objections and promise to follow up.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Questions after a presentation are a chance, not a danger. A good answer often has three parts: thank the person or confirm the question, answer briefly, and check that the answer was enough. If you do not know the answer, say so honestly and promise to follow up.' },
          { t: 'table', caption: 'Reacting to questions', explain: ['head', 'col0'], head: ['Purpose', 'Phrase'], rows: [
            ['Welcome the question', 'Danke, das ist eine berechtigte Frage.'],
            ['Check you understood', 'Wenn ich Sie richtig verstehe, geht es Ihnen um die Kosten.'],
            ['Gain time', 'Darauf komme ich gleich noch zurück.'],
            ['Admit you do not know', 'Das kann ich Ihnen im Moment nicht genau sagen.'],
            ['Promise to follow up', 'Ich kläre das und melde mich bis Freitag bei Ihnen.'],
            ['Check the answer', 'Beantwortet das Ihre Frage?'],
          ] },
        ],
        [
          { t: 'text', md: 'An objection (*der Einwand*) is criticism of your idea. Do not reject it directly. First accept the concern, then give a counter-argument: *Ich verstehe Ihre Bedenken. Allerdings …*\n\n**Indirect questions** help you repeat a question politely. Yes/no questions take *ob*; other questions keep their question word. The verb goes to the end: *Sie möchten wissen, **ob** sich die Investition **lohnt**.*' },
          { t: 'dialogue', title: 'Fragen nach der Präsentation', lines: [
            { who: 'Herr Brandt', s: 'Das klingt alles gut, aber ist das System nicht viel zu teuer für eine Firma unserer Größe?' },
            { who: 'Frau Nguyen', s: 'Danke, das ist eine berechtigte Frage. Wenn ich Sie richtig verstehe, möchten Sie wissen, ob sich die Investition für Sie lohnt.' },
            { who: 'Herr Brandt', s: 'Genau.' },
            { who: 'Frau Nguyen', s: 'Die Anschaffung kostet zwar zunächst Geld, aber nach unserer Rechnung sparen Sie jeden Monat etwa zwanzig Arbeitsstunden. Somit hat sich das System nach ungefähr zwei Jahren bezahlt gemacht.' },
            { who: 'Frau Haas', s: 'Und wie lange dauert die Umstellung?' },
            { who: 'Frau Nguyen', s: 'Darauf komme ich gleich noch zurück, das steht auf meiner nächsten Folie.' },
            { who: 'Herr Brandt', s: 'Gibt es das System auch auf Polnisch? Wir haben ein Werk in Polen.' },
            { who: 'Frau Nguyen', s: 'Das kann ich Ihnen im Moment nicht genau sagen. Ich kläre das und melde mich bis Freitag bei Ihnen.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the situation with the reaction.', pairs: [
            ['Sie wissen die Antwort nicht.', 'Ich kläre das und melde mich bei Ihnen.'],
            ['Die Frage kommt später in Ihrer Präsentation.', 'Darauf komme ich gleich noch zurück.'],
            ['Sie sind nicht sicher, ob Sie die Frage verstanden haben.', 'Wenn ich Sie richtig verstehe, …'],
            ['Jemand kritisiert Ihre Idee.', 'Ich verstehe Ihre Bedenken. Allerdings …'],
            ['Sie möchten wissen, ob die Antwort genügt.', 'Beantwortet das Ihre Frage?'],
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the word that introduces the counter-argument.', items: [
            { s: 'Ich verstehe Ihre Bedenken. [Allerdings] zeigen unsere Tests ein anderes Bild.', why: '*Allerdings* (however) brings in your own view after you have accepted the concern.' },
            { s: 'Das ist ein wichtiger Punkt. [Dennoch] sind wir überzeugt, dass sich die Lösung lohnt.', why: '*Dennoch* (nevertheless): you keep your position.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right indirect question.', items: [
            { q: '„Lohnt sich die Investition?“ Sie fragen, …', o: ['ob sich die Investition lohnt.', 'ob lohnt sich die Investition.', 'dass sich die Investition lohnt.'], why: 'A yes/no question becomes *ob* + verb at the end.' },
            { q: '„Wie lange dauert die Umstellung?“ Sie möchten wissen, …', o: ['wie lange die Umstellung dauert.', 'wie lange dauert die Umstellung.', 'ob wie lange die Umstellung dauert.'], why: 'The question word stays; the verb goes to the end.' },
            { q: '„Wer ist für die Schulung verantwortlich?“ Sie fragen, …', o: ['wer für die Schulung verantwortlich ist.', 'wer ist für die Schulung verantwortlich.', 'ob wer für die Schulung verantwortlich ist.'], why: '*wer* introduces the clause; *ist* goes to the end.' },
            { q: '„Kann man das System testen?“ Sie möchten wissen, …', o: ['ob man das System testen kann.', 'ob man kann das System testen.', 'wenn man das System testen kann.'], why: 'Use *ob*, not *wenn*, for an indirect yes/no question. The modal verb goes to the very end.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Darauf komme ich später zurück.', why: '*Darauf* first, then the verb *komme*; *zurück* goes to the end.' },
            { a: 'Sie möchten wissen, wie lange das dauert.', why: 'In the indirect question the verb *dauert* goes to the end.' },
            { a: 'Das kann ich Ihnen leider nicht sagen.', why: '*Das* first, the modal verb second, the pronoun *Ihnen* early and the infinitive at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A short pitch',
      about: 'Read the script of a pitch for company bikes and look at how it persuades.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Pitch: Mit dem Rad zur Arbeit', md: 'Liebe Kolleginnen und Kollegen, ich möchte Ihnen in den nächsten fünf Minuten eine Idee vorstellen, die uns allen nützt: Diensträder für unser Team.\n\nZuerst ein Blick auf die Ausgangslage. Unser Parkplatz ist jeden Morgen voll, und viele von Ihnen stehen täglich im Stau. Gleichzeitig wohnt mehr als die Hälfte von uns weniger als zehn Kilometer vom Büro entfernt. Das hat unsere interne Umfrage im Frühjahr gezeigt.\n\nMein Vorschlag ist einfach: Die Firma least Fahrräder und E-Bikes und stellt sie allen zur Verfügung, die mitmachen möchten. Viele Unternehmen in Deutschland bieten so etwas bereits an.\n\nWas spricht dafür? Einerseits profitieren die Mitarbeitenden: Wer mit dem Rad fährt, bewegt sich mehr und kommt oft entspannter an. Andererseits profitiert auch die Firma. Wir bräuchten weniger Parkplätze und könnten einen Teil der Fläche anders nutzen. Darüber hinaus wäre das Angebot ein gutes Argument bei der Suche nach neuen Fachkräften.\n\nNatürlich gibt es auch Einwände. Manche von Ihnen werden sagen: „Bei Regen fährt doch niemand mit dem Rad.“ Das stimmt zwar zum Teil, aber selbst wenn Kolleginnen und Kollegen nur an drei Tagen pro Woche mit dem Rad kommen, stehen deutlich weniger Autos auf unserem Parkplatz. Und je mehr Leute mitmachen, desto mehr lohnen sich sichere Abstellplätze und eine zweite Dusche.\n\nIch schlage deshalb vor, mit einer Testphase von sechs Monaten und zwanzig Rädern zu beginnen. Somit wäre das Risiko für die Firma gering. Nach der Testphase werten wir die Erfahrungen aus und entscheiden gemeinsam.\n\nVielen Dank für Ihre Aufmerksamkeit. Ich freue mich auf Ihre Fragen.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Viele Mitarbeitende wohnen nicht weit vom Büro entfernt.', a: 't', why: '*… wohnt mehr als die Hälfte von uns weniger als zehn Kilometer vom Büro entfernt.*' },
            { q: 'Auf dem Parkplatz der Firma gibt es morgens viele freie Plätze.', a: 'f', why: '*Unser Parkplatz ist jeden Morgen voll.*' },
            { q: 'Der Vorschlag sieht vor, sofort für alle Mitarbeitenden Räder zu kaufen.', a: 'f', why: 'The firm would lease bikes, and only twenty in a test phase.' },
            { q: 'Ein Teil der Parkfläche könnte anders genutzt werden.', a: 't', why: '*… könnten einen Teil der Fläche anders nutzen.*' },
            { q: 'Laut Pitch ist das Angebot auch für neue Fachkräfte interessant.', a: 't', why: '*… ein gutes Argument bei der Suche nach neuen Fachkräften.*' },
            { q: 'Die Geschäftsleitung hat dem Projekt schon zugestimmt.', a: 'ng', why: 'The pitch does not say what the management thinks.' },
            { q: 'Nach der Testphase soll gemeinsam entschieden werden.', a: 't', why: '*Nach der Testphase werten wir die Erfahrungen aus und entscheiden gemeinsam.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at how the pitch persuades.', items: [
            { q: 'Welchen Einwand nennt die Person, die präsentiert, selbst?', o: ['Bei Regen fährt niemand mit dem Rad.', 'Fahrräder sind zu teuer.', 'Im Büro gibt es keine Dusche.'], why: 'The speaker quotes the objection: *„Bei Regen fährt doch niemand mit dem Rad.“*' },
            { q: '„Das stimmt zwar zum Teil, aber …“: Was macht die Person hier?', o: ['Sie gibt dem Einwand teilweise recht und widerspricht dann.', 'Sie lehnt den Einwand ganz ab.', 'Sie stimmt dem Einwand ganz zu.'], why: '*zwar … aber*: first admit a point, then limit it.' },
            { q: 'Wozu dient der Satz „Somit wäre das Risiko für die Firma gering“?', o: ['Er zieht eine Schlussfolgerung aus dem Vorschlag.', 'Er nennt einen Gegensatz.', 'Er stellt dem Publikum eine Frage.'], why: '*Somit* introduces a conclusion, like *folglich*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Wir sparen nicht nur Energie, ___ auch Kosten.', o: ['sondern', 'aber', 'oder'], why: '*nicht nur … sondern auch* is a fixed pair.' },
      { q: 'Die Tests waren erfolgreich. ___ schlagen wir die Einführung vor.', o: ['Somit', 'Obwohl', 'Andererseits'], why: 'A conclusion with the verb in second place: *somit*.' },
      { q: '„Ist das System sicher?“ Sie fragen, …', o: ['ob das System sicher ist.', 'ob ist das System sicher.', 'dass das System sicher ist.'], why: 'Indirect yes/no question: *ob* + verb at the end.' },
      { q: 'Sie kennen die Antwort nicht. Was sagen Sie?', o: ['Das kläre ich und melde mich bei Ihnen.', 'Das ist keine gute Frage.', 'Darauf antworte ich nicht.'], why: 'Be honest and promise to follow up.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Je länger wir warten, ___ teurer wird es.', a: ['desto', 'umso'], why: '*je … desto* (or *umso*).' },
      { q: '___ ist das Projekt teuer, andererseits bringt es neue Kunden.', a: ['Einerseits'], why: '*einerseits … andererseits*.' },
      { q: 'Sie möchten wissen, wann das Projekt ___. (beginnen)', a: ['beginnt'], why: 'Indirect question: the verb goes to the end.' },
      { q: 'Danke, das ist eine ___ Frage. (berechtigt)', a: ['berechtigte'], why: 'Adjective after *eine* with a feminine noun: *-e*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the two halves.', pairs: [
      ['Einerseits ist es teuer,', 'andererseits spart es Zeit.'],
      ['Es ist zwar teuer,', 'aber es lohnt sich.'],
      ['Es ist nicht nur teuer,', 'sondern auch kompliziert.'],
      ['Je teurer es ist,', 'desto genauer prüfen wir es.'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Folglich empfehlen wir eine Testphase.', why: '*Folglich* first, then the verb.' },
      { a: 'Wenn ich Sie richtig verstehe, geht es um die Kosten.', why: 'After the clause with *wenn*, the main clause starts with the verb *geht*.' },
    ] },
  ],
};
