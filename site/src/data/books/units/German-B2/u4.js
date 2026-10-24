// German B2, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Society and news',
  goal: 'Understand the news and report what others said. Use the Konjunktiv I for indirect speech, know when the Konjunktiv II replaces it and read headlines.',
  art: 'parrot',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['konjunktiv-1', 'indirect-speech', 'konjunktiv-2', 'news', 'headlines'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'The Konjunktiv I',
      about: 'Report what someone said: er sagt, er sei …, sie habe …',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'News reports often repeat what someone said without saying whether it is true. For this, German uses the **Konjunktiv I**. It shows clearly: this is indirect speech, these are someone else’s words.\n\nThe pronouns change as in English: *„Ich bin zufrieden“* becomes *Sie sagt, sie **sei** zufrieden.* The word *dass* is optional. Without *dass*, the verb stays in second place.' },
          { t: 'examples', items: [
            { s: 'Die Ministerin sagte, sie **sei** mit dem Ergebnis zufrieden.', n: 'Direct speech: *„Ich bin mit dem Ergebnis zufrieden.“*' },
            { s: 'Der Sprecher erklärte, die Firma **habe** keine Pläne für Entlassungen.', n: 'Direct speech: *„Die Firma hat keine Pläne …“*' },
            { s: 'Die Polizei teilte mit, dass es keine Verletzten **gebe**.', n: 'With *dass*, the verb goes to the end.' },
          ] },
        ],
        [
          { t: 'text', md: 'To form the Konjunktiv I, take the infinitive stem and add the endings *-e, -est, -e, -en, -et, -en*. The most important form is the third person singular. It ends in **-e** and is always different from the indicative: *er komme, sie müsse, es gebe*. Only *sein* is irregular: *er sei*.' },
          { t: 'table', caption: 'Konjunktiv I', quiz: true, head: ['', 'sein', 'haben', 'können', 'werden'], rows: [
            ['ich', 'sei', 'habe', 'könne', 'werde'],
            ['du', 'seist', 'habest', 'könnest', 'werdest'],
            ['er / sie / es', 'sei', 'habe', 'könne', 'werde'],
            ['wir', 'seien', 'haben', 'können', 'werden'],
            ['ihr', 'seiet', 'habet', 'könnet', 'werdet'],
            ['sie / Sie', 'seien', 'haben', 'können', 'werden'],
          ] },
        ],
        [
          { t: 'text', md: 'The Konjunktiv I has only **one past form**: *habe* or *sei* + Partizip II. It replaces the Perfekt, the Präteritum and the Plusquamperfekt of direct speech. For the future, use *werde* + infinitive.' },
          { t: 'examples', items: [
            { s: 'Er behauptete, er **habe** nichts von dem Plan **gewusst**.', n: 'Direct speech: *„Ich wusste nichts von dem Plan.“*' },
            { s: 'Die Zeugin sagte, der Fahrer **sei** zu schnell **gefahren**.', n: '*fahren* takes *sein* in the Perfekt, so *sei … gefahren*.' },
            { s: 'Der Bürgermeister kündigte an, er **werde** nicht wieder **kandidieren**.', n: 'The future: *werde* + infinitive.' },
          ] },
          { t: 'tip', art: 'owl', md: 'The Konjunktiv I is neutral. It does not say that the speaker is lying or that the journalist doubts it. It only marks the words as someone else’s.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the Konjunktiv I.', items: [
            { q: 'Die Ministerin sagte, sie ___ mit dem Ergebnis zufrieden.', o: ['sei', 'ist', 'seid'], why: '*sie sei*: the Konjunktiv I of *sein*. *Ist* is the indicative.' },
            { q: 'Der Sprecher erklärte, die Firma ___ keine Pläne für Entlassungen.', o: ['habe', 'hat', 'hätte'], why: '*die Firma habe*. *Hätte* is the Konjunktiv II.' },
            { q: 'Die Polizei teilte mit, es ___ keine Verletzten.', o: ['gebe', 'gibt', 'geben'], why: '*es gebe*: stem *geb-* + *-e*.' },
            { q: 'Er behauptete, er ___ nichts von dem Plan gewusst.', o: ['habe', 'sei', 'hat'], why: '*wissen* takes *haben*: *er habe … gewusst*.' },
            { q: 'Die Zeugin sagte, der Fahrer ___ zu schnell gefahren.', o: ['sei', 'habe', 'ist'], why: '*fahren* takes *sein*: *er sei … gefahren*.' },
            { q: 'Der Trainer meinte, die Mannschaft ___ das Spiel noch gewinnen.', o: ['könne', 'kann', 'könnte'], why: '*sie könne*: the Konjunktiv I of *können*. *Könnte* is the Konjunktiv II.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Report what they said. Use the Konjunktiv I.', items: [
            { q: '„Ich bin krank.“ → Er sagt, er ___ krank.', a: ['sei'], why: '*sein → er sei*' },
            { q: '„Ich muss früher gehen.“ → Sie sagt, sie ___ früher gehen.', a: ['müsse'], why: '*müssen → sie müsse*' },
            { q: '„Das Projekt kostet zu viel.“ → Der Kritiker meint, das Projekt ___ zu viel.', a: ['koste'], why: '*kosten → es koste*' },
            { q: '„Ich habe den Brief nicht bekommen.“ → Er behauptet, er ___ den Brief nicht bekommen.', a: ['habe'], why: 'The past: *habe* + Partizip II.' },
            { q: '„Wir sind gestern angekommen.“ → Sie berichten, sie ___ gestern angekommen.', a: ['seien'], why: '*ankommen* takes *sein*: *sie seien … angekommen*.' },
            { q: '„Ich werde das prüfen.“ → Die Chefin sagt, sie ___ das prüfen.', a: ['werde'], why: 'The future: *sie werde* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'When the Konjunktiv II takes over',
      about: 'Use hätten, könnten and würde when the Konjunktiv I looks like the indicative.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Indirect speech must be clearly marked. In many forms, the Konjunktiv I looks exactly like the indicative: *wir haben, sie haben, sie können*. Then nobody can see that it is indirect speech, so you use the **Konjunktiv II** instead: *sie haben → sie hätten*.\n\nWith most verbs, the Konjunktiv II also looks like the Präteritum: *sie arbeiteten*. In that case, use *würde* + infinitive: *sie würden arbeiten*.' },
          { t: 'table', caption: 'Konjunktiv II instead of Konjunktiv I', explain: ['head'], head: ['Direct speech', 'Konjunktiv I', 'Use instead'], rows: [
            ['„Wir haben keine Zeit.“', 'sie haben', 'sie hätten'],
            ['„Wir können nicht kommen.“', 'sie können', 'sie könnten'],
            ['„Wir arbeiten zu viel.“', 'sie arbeiten', 'sie würden arbeiten'],
            ['„Wir haben nichts gesehen.“', 'sie haben … gesehen', 'sie hätten … gesehen'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'In everyday speech, many people use the Konjunktiv II or simply the indicative for indirect speech: *Er hat gesagt, er hätte keine Zeit.* The Konjunktiv I is typical of the news and of formal writing.' },
          { t: 'examples', items: [
            { s: 'Die Anwohner sagen, sie **hätten** seit Wochen keine Ruhe.', n: '*sie haben* would look like the indicative, so *hätten*.' },
            { s: 'Die Fans sagten, sie **seien** enttäuscht.', n: '*seien* is different from *sind*, so the Konjunktiv I stays.' },
            { s: 'Die Gäste erklärten, sie **kämen** später.', n: '*sie kommen* looks like the indicative; *kämen* is clear.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which form would a news report use?', items: [
            { q: 'Die Anwohner sagen, sie ___ seit Wochen keinen Schlaf.', o: ['hätten', 'haben', 'habe'], why: 'Konjunktiv I *sie haben* looks like the indicative, so the Konjunktiv II *hätten*.' },
            { q: 'Die Ärzte warnen, die Patienten ___ zu lange warten.', o: ['müssten', 'müssen', 'musste'], why: '*sie müssen* looks like the indicative, so *müssten*.' },
            { q: 'Der Minister sagte, er ___ die Kritik.', o: ['verstehe', 'versteht', 'verstehen'], why: '*er verstehe* is different from the indicative, so the Konjunktiv I stays.' },
            { q: 'Die Gäste sagten, sie ___ später.', o: ['kämen', 'kommen', 'kamen'], why: '*sie kommen* looks like the indicative. *Kamen* is the Präteritum. *Kämen* is clear.' },
            { q: 'Die Nachbarn berichteten, sie ___ einen lauten Knall gehört.', o: ['hätten', 'haben', 'seien'], why: '*hören* takes *haben*; *sie haben* looks like the indicative, so *hätten*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Report what they said in the style of the news.', items: [
            { q: '„Wir wissen nichts davon.“ → Die Mitarbeiter sagen, sie ___ nichts davon.', a: ['wüssten'], why: '*sie wissen* looks like the indicative, so the Konjunktiv II *wüssten*.' },
            { q: '„Wir sind enttäuscht.“ → Die Fans sagen, sie ___ enttäuscht.', a: ['seien'], why: '*seien* is different from *sind*, so the Konjunktiv I stays.' },
            { q: '„Wir arbeiten zu viel.“ → Die Pflegekräfte sagen, sie ___ zu viel arbeiten.', a: ['würden'], why: 'The Konjunktiv II *arbeiteten* looks like the Präteritum, so *würden* + infinitive.' },
            { q: '„Wir haben das Geld nicht bekommen.“ → Die Familien sagen, sie ___ das Geld nicht bekommen.', a: ['hätten'], why: 'The past with *haben*: *sie hätten … bekommen*.' },
            { q: '„Wir dürfen nichts sagen.“ → Die Angestellten sagen, sie ___ nichts sagen.', a: ['dürften'], why: '*sie dürfen* looks like the indicative, so *dürften*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Sie sagten, sie hätten keine Zeit.', why: 'Without *dass*, the verb of the reported clause stays in second place.' },
            { a: 'Er meinte, die Preise würden steigen.', why: '*würden* in second place, the infinitive at the end.' },
            { a: 'Die Ärztin sagte, er müsse sich ausruhen.', why: '*er müsse*, then the reflexive pronoun, then the infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'News words and headlines',
      about: 'Reporting verbs, key news vocabulary and the short style of headlines.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'Journalists rarely write only *sagen*. Each reporting verb adds a meaning: *behaupten* suggests that it may not be true, *bestätigen* says that it is true.' },
          { t: 'table', caption: 'Reporting verbs', explain: ['head', 'col1'], quiz: true, head: ['Verb', 'Meaning', 'Example'], rows: [
            ['berichten', 'to report', 'Die Zeitung berichtet über den Streik.'],
            ['mitteilen', 'to inform, to announce', 'Die Polizei teilte mit, es gebe keine Verletzten.'],
            ['betonen', 'to stress', 'Die Ministerin betonte, das Gesetz sei wichtig.'],
            ['behaupten', 'to claim', 'Er behauptet, er habe nichts gewusst.'],
            ['bestätigen', 'to confirm', 'Die Firma bestätigte den Bericht.'],
            ['dementieren', 'to deny officially', 'Die Regierung dementierte die Meldung.'],
            ['ankündigen', 'to announce something in the future', 'Die Gewerkschaft kündigte einen Streik an.'],
            ['fordern', 'to demand', 'Die Opposition fordert neue Wahlen.'],
          ] },
        ],
        [
          { t: 'text', md: 'Headlines save space. They leave out articles and the verb *sein*, use the present tense for things that have already happened, and often use a noun instead of a verb. A Partizip II alone is a short passive: *gefordert* = *wird gefordert*. A colon means "says": *Polizei: Keine Verletzten*.' },
          { t: 'examples', items: [
            { s: 'Stadt beschließt neues Radwegenetz', n: 'Present tense, no article: *Die Stadt hat ein neues Radwegenetz beschlossen.*' },
            { s: 'Rücktritt der Gesundheitsministerin', n: 'A noun instead of a verb: *Die Gesundheitsministerin ist zurückgetreten.*' },
            { s: 'Mehr Geld für Schulen gefordert', n: 'Partizip II: *Mehr Geld für Schulen wird gefordert.*' },
            { s: 'Neue Brücke soll im Herbst fertig sein', n: '*soll*: it is planned.' },
            { s: 'Polizei: Keine Verletzten nach Unfall', n: 'The colon: the police say this.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each verb with its meaning.', pairs: [
            ['bestätigen', 'sagen, dass etwas stimmt'],
            ['dementieren', 'offiziell sagen, dass etwas nicht stimmt'],
            ['ankündigen', 'sagen, dass etwas passieren wird'],
            ['fordern', 'etwas mit Nachdruck verlangen'],
            ['behaupten', 'etwas sagen, das vielleicht nicht stimmt'],
            ['betonen', 'etwas besonders deutlich sagen'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the headline mean?', items: [
            { q: 'Rücktritt des Vereinsvorsitzenden', o: ['Der Vorsitzende des Vereins ist zurückgetreten.', 'Der Vorsitzende des Vereins bleibt im Amt.', 'Der Verein sucht einen Vorsitzenden.'], why: 'The noun *Rücktritt* stands for the verb *zurücktreten*.' },
            { q: 'Regierung plant höhere Steuer auf Zucker', o: ['Die Regierung will die Steuer auf Zucker erhöhen.', 'Die Regierung hat die Steuer auf Zucker gesenkt.', 'Die Steuer auf Zucker ist schon gestiegen.'], why: '*plant*: it is a plan for the future.' },
            { q: 'Bahn: Keine Verspätungen trotz Schnee', o: ['Die Bahn sagt, es gebe trotz Schnee keine Verspätungen.', 'Wegen des Schnees gibt es viele Verspätungen.', 'Die Bahn fährt wegen des Schnees nicht.'], why: 'The colon means that the railway says this.' },
            { q: 'Mehr Geld für Kitas gefordert', o: ['Jemand verlangt mehr Geld für Kitas.', 'Die Kitas haben mehr Geld bekommen.', 'Die Kitas brauchen kein Geld mehr.'], why: 'A Partizip II alone is a short passive: *Mehr Geld wird gefordert.*' },
            { q: 'Neues Schwimmbad soll im Mai öffnen', o: ['Nach den Plänen öffnet das Schwimmbad im Mai.', 'Das Schwimmbad hat im Mai geöffnet.', 'Das Schwimmbad muss im Mai schließen.'], why: '*soll* in a headline: it is planned.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing news word.', items: [
            { q: 'Am Sonntag finden in zwei Bundesländern ___ statt. Alle Bürger ab 18 dürfen wählen.', a: ['Wahlen'], why: '*die Wahl, die Wahlen*: the noun for *wählen*.' },
            { q: 'Die Gewerkschaft hat für Montag einen ___ angekündigt. Busse und Bahnen fahren nicht.', a: ['Streik'], why: '*der Streik*: people stop working to protest.' },
            { q: 'Die Polizei ___ noch, wie es zu dem Unfall kam.', a: ['ermittelt'], why: '*ermitteln*: the police try to find out what happened.' },
            { q: 'Das Parlament hat ein neues ___ zum Klimaschutz beschlossen.', a: ['Gesetz'], why: '*ein Gesetz beschließen*: to pass a law.' },
            { q: 'Nach dem Skandal ist der Bürgermeister ___. (zurücktreten)', a: ['zurückgetreten'], why: '*zurücktreten*: to resign. Perfekt with *sein*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A local news report',
      about: 'Read a news report full of indirect speech.',
      art: 'dragon',
      spreads: [
        [
          { t: 'reading', title: 'Innenstadt von Hallberg soll autofrei werden', md: 'Der Stadtrat von Hallberg hat am Dienstagabend beschlossen, die Altstadt ab dem kommenden Frühjahr für Autos zu sperren. Nur Lieferwagen, Taxis und Anwohner sollen am frühen Morgen noch hineinfahren dürfen.\n\nBürgermeisterin Sabine Krüger zeigte sich nach der Abstimmung zufrieden. Die Stadt wolle mehr Platz für Fußgänger, Radfahrer und Cafés schaffen, sagte sie. Die Luft in der Altstadt sei seit Jahren schlecht, und viele Familien würden sich über den Lärm beklagen. Außerdem werde der Busverkehr ausgebaut, damit alle die Innenstadt gut erreichen könnten.\n\nKritik kam vor allem von den Geschäftsleuten. Der Sprecher des Handelsvereins, Murat Aydın, erklärte, viele Kunden kämen aus den Dörfern der Umgebung und seien auf das Auto angewiesen. Er befürchte, dass sie in Zukunft lieber in das Einkaufszentrum am Stadtrand fahren würden. Die Händler hätten sich mehr Parkplätze am Rand der Altstadt gewünscht.\n\nAuch in der Bevölkerung sind die Meinungen geteilt. Eine Anwohnerin sagte unserer Zeitung, sie freue sich auf ruhigere Nächte. Ein Rentner meinte dagegen, für ältere Menschen werde der Weg zum Arzt nun schwieriger.\n\nDie Stadt will die neuen Regeln zunächst ein Jahr lang testen. Danach soll entschieden werden, ob die Sperrung dauerhaft gilt.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Ab dem Frühjahr darf kein einziges Fahrzeug mehr in die Altstadt fahren.', a: 'f', why: 'Delivery vans, taxis and residents may still drive in early in the morning.' },
            { q: 'Die Bürgermeisterin ist mit der Entscheidung zufrieden.', a: 't', why: '*Bürgermeisterin Sabine Krüger zeigte sich nach der Abstimmung zufrieden.*' },
            { q: 'Laut der Bürgermeisterin ist die Luft in der Altstadt schlecht.', a: 't', why: '*Die Luft in der Altstadt sei seit Jahren schlecht.*' },
            { q: 'Murat Aydın fürchtet, dass Kunden aus den Dörfern wegbleiben.', a: 't', why: 'He fears they will go to the shopping centre on the edge of town instead.' },
            { q: 'Die Händler wollen gegen die Entscheidung vor Gericht gehen.', a: 'ng', why: 'The text does not mention a court.' },
            { q: 'Die Sperrung gilt ab dem Frühjahr für immer.', a: 'f', why: 'The town will test the rules for one year first.' },
            { q: 'Die Fahrkarten für den Bus sollen billiger werden.', a: 'ng', why: 'The text says the bus service will grow, not what tickets will cost.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the indirect speech in the text.', items: [
            { q: '„Die Luft in der Altstadt sei seit Jahren schlecht“: Warum steht hier „sei“?', o: ['Die Zeitung gibt wieder, was die Bürgermeisterin gesagt hat.', 'Die Zeitung glaubt der Bürgermeisterin nicht.', 'Die Bürgermeisterin wünscht sich schlechte Luft.'], why: 'The Konjunktiv I marks someone else’s words. It does not show doubt.' },
            { q: '„… viele Kunden kämen aus den Dörfern …“: Warum „kämen“ und nicht „kommen“?', o: ['Der Konjunktiv I „kommen“ sieht aus wie der Indikativ.', 'Es ist ein irrealer Wunsch.', 'Es geht um die Zukunft.'], why: '*sie kommen* looks like the indicative, so the Konjunktiv II *kämen* replaces it.' },
            { q: '„Eine Anwohnerin sagte, sie freue sich auf ruhigere Nächte.“ Was hat sie direkt gesagt?', o: ['„Ich freue mich auf ruhigere Nächte.“', '„Sie freut sich auf ruhigere Nächte.“', '„Ich würde mich über ruhigere Nächte freuen, aber das passiert nie.“'], why: 'The Konjunktiv I *sie freue sich* reports an indicative sentence. The pronoun changes from *ich* to *sie*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the form a news report would use.', items: [
      { q: 'Der Sprecher sagte, das Unternehmen ___ keine Schulden.', o: ['habe', 'hat', 'haben'], why: 'Konjunktiv I, third person singular: *es habe*.' },
      { q: 'Die Experten meinen, die Preise ___ weiter steigen.', o: ['würden', 'werden', 'werde'], why: '*sie werden* looks like the indicative, so *würden*.' },
      { q: 'Sie erklärte, sie ___ gestern zu Hause gewesen.', o: ['sei', 'habe', 'ist'], why: '*sein* takes *sein* in the Perfekt: *sie sei … gewesen*.' },
      { q: 'Die Schlagzeile „Polizei: Keine Verletzten“ bedeutet:', o: ['Die Polizei sagt, es gebe keine Verletzten.', 'Die Polizei ist verletzt.', 'Es gibt keine Polizei.'], why: 'In a headline, a colon means that someone says this.' },
      { q: 'Die Regierung ___ die Meldung: „Das stimmt nicht.“', o: ['dementierte', 'bestätigte', 'forderte'], why: '*dementieren*: to deny officially.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Report what they said in the style of the news.', items: [
      { q: '„Ich kann nicht kommen.“ → Er sagt, er ___ nicht kommen.', a: ['könne'], why: 'Konjunktiv I: *er könne*.' },
      { q: '„Wir haben das nicht gewusst.“ → Sie sagen, sie ___ das nicht gewusst.', a: ['hätten'], why: '*sie haben* looks like the indicative, so *hätten*.' },
      { q: '„Der Zug ist zu spät gekommen.“ → Sie sagte, der Zug ___ zu spät gekommen.', a: ['sei'], why: '*kommen* takes *sein*: *er sei … gekommen*.' },
      { q: '„Wir arbeiten jeden Tag.“ → Sie sagen, sie ___ jeden Tag arbeiten.', a: ['würden'], why: '*arbeiten* and *arbeiteten* both look like the indicative, so *würden* + infinitive.' },
      { q: 'Die Gewerkschaft hat einen ___ für Freitag angekündigt.', a: ['Streik'], why: '*einen Streik ankündigen*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match each verb with its meaning.', pairs: [
      ['berichten', 'über ein Ereignis informieren'],
      ['ankündigen', 'sagen, dass etwas passieren wird'],
      ['dementieren', 'offiziell sagen, dass etwas nicht stimmt'],
      ['fordern', 'etwas mit Nachdruck verlangen'],
    ] },
  ],
};
