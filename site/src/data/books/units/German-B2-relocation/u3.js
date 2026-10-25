// German B2 for moving abroad, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Healthcare in depth',
  goal: 'Talk about health and treatment in detail with doctors and insurers.',
  art: 'cactus',
  tags: { skills: ['speaking', 'reading', 'vocabulary', 'grammar'], topics: ['specialists', 'hospital', 'asking-for-explanations', 'health-insurance', 'participle-attributes', 'choosing-a-doctor'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Specialists and treatment',
      about: 'Specialists, hospital stays and treatment plans, and how to ask for explanations.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In Germany your family doctor (*Hausarzt* or *Hausärztin*) often coordinates your treatment. With public insurance you can go to many specialists directly, but some, for example radiologists, usually need a **referral** (*Überweisung*). A referral can also make it easier to get an appointment.' },
          { t: 'table', caption: 'Words for treatment', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['der Facharzt, die Fachärztin', 'a specialist doctor'],
            ['die Überweisung', 'a referral from one doctor to another'],
            ['ambulant', 'treatment without staying overnight'],
            ['stationär', 'treatment with a stay in hospital'],
            ['die Aufnahme, die Entlassung', 'admission to hospital, discharge from hospital'],
            ['der Eingriff', 'a medical procedure, for example a small operation'],
            ['die Nebenwirkung', 'a side effect'],
            ['die Nachsorge', 'follow-up care after a treatment'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Beim Orthopäden', lines: [
            { who: 'Dr. Yılmaz', s: 'Die MRT-Bilder zeigen, dass der Meniskus im rechten Knie eingerissen ist. Ich würde Ihnen zu einer Arthroskopie raten.' },
            { who: 'Herr Mendes', s: 'Könnten Sie mir erklären, was bei diesem Eingriff genau gemacht wird?' },
            { who: 'Dr. Yılmaz', s: 'Wir machen zwei kleine Schnitte am Knie und führen eine Kamera ein. Dabei wird der beschädigte Teil des Meniskus entfernt oder genäht.' },
            { who: 'Herr Mendes', s: 'Muss ich dafür im Krankenhaus bleiben?' },
            { who: 'Dr. Yılmaz', s: 'Nein, der Eingriff wird meistens ambulant durchgeführt. Sie dürfen nach der Narkose aber 24 Stunden lang nicht selbst Auto fahren.' },
            { who: 'Herr Mendes', s: 'Habe ich Sie richtig verstanden, dass mich jemand abholen muss?' },
            { who: 'Dr. Yılmaz', s: 'Genau. Danach brauchen Sie etwa zwei Wochen Krücken und einige Termine bei der Physiotherapie.' },
            { who: 'Herr Mendes', s: 'Und was würde passieren, wenn ich mich gegen die Operation entscheide?' },
            { who: 'Dr. Yılmaz', s: 'Dann versuchen wir es zuerst mit Physiotherapie. Lassen Sie sich ruhig Zeit, und holen Sie gern eine zweite Meinung ein.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Herr Mendes muss nach dem Eingriff im Krankenhaus übernachten.', a: 'f', why: '*Der Eingriff wird meistens ambulant durchgeführt.*' },
            { q: 'Nach der Narkose darf er nicht selbst nach Hause fahren.', a: 't', why: '*24 Stunden lang nicht selbst Auto fahren*' },
            { q: 'Die Ärztin sagt, dass es keine andere Möglichkeit gibt.', a: 'f', why: 'Physiotherapy is an option, and she suggests a second opinion.' },
          ] },
        ],
        [
          { t: 'text', md: 'Doctors are often in a hurry, but you have the right to understand your treatment. Polite **indirect questions** and the **Konjunktiv II** help you ask without sounding rude. In an indirect question the verb goes to the end.' },
          { t: 'examples', items: [
            { s: 'Könnten Sie mir erklären, was das genau **bedeutet**?', n: 'Indirect question: *bedeutet* goes to the end.' },
            { s: 'Habe ich Sie richtig verstanden, dass ich danach nicht Auto fahren **darf**?', n: 'You check what you understood. The verb goes to the end after *dass*.' },
            { s: 'Was **würde** passieren, wenn ich die Behandlung ablehnen **würde**?', n: 'Konjunktiv II for a situation that is only possible.' },
            { s: 'Mit welchen Nebenwirkungen muss ich **rechnen**?', n: '*mit etwas rechnen*: to expect something.' },
            { s: 'Könnten Sie das bitte noch einmal mit einfacheren Worten erklären?', n: 'Ask for simpler words when you do not understand.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which question is correct?', items: [
            { q: 'Sie haben ein Wort nicht verstanden.', o: ['Könnten Sie mir erklären, was „stationär“ bedeutet?', 'Könnten Sie mir erklären, was bedeutet „stationär“?', 'Was bedeutet das, könnten Sie erklären mir?'], why: 'In the indirect question the verb *bedeutet* goes to the end.' },
            { q: 'Sie fragen nach möglichen Problemen.', o: ['Mit welchen Nebenwirkungen muss ich rechnen?', 'Mit welchen Nebenwirkungen muss ich rechnen mit?', 'Auf welche Nebenwirkungen muss ich rechnen?'], why: '*rechnen mit*: the preposition comes once, at the start of the question.' },
            { q: 'Sie fragen nach einer anderen Möglichkeit.', o: ['Gibt es eine Alternative zu dieser Behandlung?', 'Gibt es eine Alternative von dieser Behandlung?', 'Gibt es eine Alternative gegen diese Behandlung?'], why: '*eine Alternative zu etwas*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Könnten Sie mir erklären, was das bedeutet?', why: 'Indirect question: the verb *bedeutet* at the end.' },
            { a: 'Ich möchte wissen, wie lange ich krankgeschrieben bin.', why: 'After *wie lange*, the verb *bin* goes to the end.' },
            { a: 'Wissen Sie, ob der Eingriff ambulant ist?', why: 'After *ob*, the verb *ist* goes to the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Which specialist do you need?', pairs: [
            ['der Hautarzt', 'Probleme mit der Haut'],
            ['der Augenarzt', 'Probleme mit den Augen'],
            ['der HNO-Arzt', 'Probleme mit Hals, Nase oder Ohren'],
            ['der Orthopäde', 'Probleme mit Knochen und Gelenken'],
            ['der Kardiologe', 'Probleme mit dem Herzen'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the right word.', items: [
            { q: 'Der Eingriff wird ___ durchgeführt, Sie können am selben Abend nach Hause. (without staying overnight)', a: ['ambulant'], why: '*ambulant*: no night in hospital.' },
            { q: 'Für die Untersuchung beim Radiologen brauchen Sie eine ___ von Ihrer Hausärztin.', a: ['Überweisung', 'Ueberweisung'], why: 'A referral from one doctor to another: *die Überweisung*.' },
            { q: 'Diese Tabletten können ___ wie Müdigkeit oder Kopfschmerzen haben.', a: ['Nebenwirkungen'], why: '*die Nebenwirkung, die Nebenwirkungen*: side effects.' },
            { q: 'Ihre ___ aus dem Krankenhaus ist für Freitag geplant.', a: ['Entlassung'], why: '*die Entlassung*: when you leave hospital.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Public and private insurance',
      about: 'How the two systems differ in general terms, and a letter from an insurer.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In Germany almost everyone must have health insurance. Most people are in the public system (*gesetzliche Krankenversicherung*, GKV) with a *Krankenkasse*. Some groups can choose private insurance (*private Krankenversicherung*, PKV) instead. The table shows the main differences in general terms; the details depend on your situation.' },
          { t: 'table', caption: 'Public and private insurance in general terms', explain: ['head', 'col0', 'col1', 'col2'], head: ['', 'Public (GKV)', 'Private (PKV)'], rows: [
            ['Who', 'most employees and their families', 'for example self-employed people, civil servants and employees above an income limit'],
            ['Contributions', 'depend on your income', 'depend on age, health and the chosen plan'],
            ['Family', 'children and partners without their own income are often insured at no extra cost', 'each person usually needs their own contract'],
            ['Bills', 'you show your card; the doctor bills the insurer', 'you often pay first and get the money back'],
          ] },
          { t: 'tip', art: 'owl', md: 'Think carefully before you change to private insurance. Going back to public insurance later is often difficult, especially when you are older. Get independent advice before you decide.' },
        ],
        [
          { t: 'reading', title: 'Ihr Heil- und Kostenplan vom 8. September 2026', md: 'Sehr geehrte Frau Adeyemi,\n\nvielen Dank für den von Ihrer Zahnarztpraxis eingereichten Heil- und Kostenplan für eine Brücke im Oberkiefer. Wir haben den Plan geprüft und übernehmen die Kosten im Rahmen des gesetzlich vorgesehenen Festzuschusses. Der Zuschuss beträgt 520,00 Euro. Da Sie Ihr Bonusheft in den letzten fünf Jahren regelmäßig geführt haben, erhöht sich der Zuschuss auf 624,00 Euro.\n\nDer verbleibende Eigenanteil wird Ihnen von Ihrer Zahnarztpraxis direkt in Rechnung gestellt. Bitte beachten Sie, dass die Genehmigung sechs Monate gültig ist. Die Behandlung sollte daher innerhalb dieses Zeitraums beginnen.\n\nBei Fragen erreichen Sie uns in jeder Geschäftsstelle oder telefonisch.\n\nMit freundlichen Grüßen\nIhre Krankenkasse' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the letter. True, false or not given?', items: [
            { q: 'Die Krankenkasse übernimmt die gesamten Kosten.', a: 'f', why: 'It pays a fixed subsidy (*Festzuschuss*); she pays the rest, the *Eigenanteil*.' },
            { q: 'Frau Adeyemi bekommt mehr Geld, weil sie regelmäßig beim Zahnarzt war.', a: 't', why: 'Her *Bonusheft* shows regular check-ups, so the subsidy rises.' },
            { q: 'Den Eigenanteil bezahlt sie an die Zahnarztpraxis.', a: 't', why: '*wird Ihnen von Ihrer Zahnarztpraxis direkt in Rechnung gestellt*' },
            { q: 'Sie kann mit der Behandlung auch in einem Jahr noch beginnen.', a: 'f', why: 'The approval is valid for six months.' },
            { q: 'Die Brücke kostet insgesamt 1.500 Euro.', a: 'ng', why: 'The letter does not give the total cost.' },
          ] },
        ],
        [
          { t: 'text', md: 'Letters from insurers and offices often put a lot of information before a noun: *der von Ihrer Zahnarztpraxis eingereichte Plan*. This is an **extended participle** (*erweitertes Partizipialattribut*). Read it as a relative clause: *der Plan, der von Ihrer Zahnarztpraxis eingereicht wurde*.\n\nA Partizip II usually has a passive or completed meaning. A Partizip I (*-end*) has an active meaning: *die steigenden Kosten* = *die Kosten, die steigen*.' },
          { t: 'examples', items: [
            { s: 'die **von Ihrem Arzt ausgestellte** Bescheinigung', n: '= die Bescheinigung, die Ihr Arzt ausgestellt hat' },
            { s: 'die **im Vertrag genannten** Leistungen', n: '= die Leistungen, die im Vertrag genannt werden' },
            { s: 'die **ständig steigenden** Beiträge', n: '= die Beiträge, die ständig steigen' },
            { s: 'der **verbleibende** Eigenanteil', n: '= der Eigenanteil, der übrig bleibt' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which relative clause means the same?', items: [
            { q: 'die von der Kasse übernommenen Kosten', o: ['die Kosten, die die Kasse übernommen hat', 'die Kosten, die die Kasse übernehmen wird', 'die Kosten, die die Kasse nicht übernimmt'], why: 'Partizip II *übernommen*: the action is completed.' },
            { q: 'die zurzeit geltenden Beiträge', o: ['die Beiträge, die zurzeit gelten', 'die Beiträge, die früher galten', 'die Beiträge, die bald gelten werden'], why: 'Partizip I *geltend*: active and happening now.' },
            { q: 'das von Ihnen ausgefüllte Formular', o: ['das Formular, das Sie ausgefüllt haben', 'das Formular, das Sie noch ausfüllen müssen', 'das Formular, das wir für Sie ausgefüllt haben'], why: '*von Ihnen*: you did it, and it is finished.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the insurance words and their meanings.', pairs: [
            ['der Beitrag', 'Geld, das man jeden Monat an die Versicherung zahlt'],
            ['die Zuzahlung', 'ein kleiner Betrag, den man zum Beispiel in der Apotheke selbst zahlt'],
            ['die Erstattung', 'Man bekommt Geld zurück, das man schon bezahlt hat.'],
            ['die Versichertenkarte', 'die Karte, die man in der Arztpraxis zeigt'],
            ['die Kostenübernahme', 'Die Versicherung erklärt, dass sie zahlt.'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Choosing a doctor',
      about: 'Read an article about how people find the right family doctor.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'Wie finde ich die richtige Praxis?', md: 'Wer neu in eine Stadt zieht, steht früher oder später vor der Frage, welche Hausarztpraxis die richtige ist. In Deutschland gilt die freie Arztwahl: Gesetzlich Versicherte können sich ihre Praxis grundsätzlich selbst aussuchen. Ganz so einfach ist es allerdings nicht immer, denn in manchen Regionen nehmen Praxen keine neuen Patientinnen und Patienten mehr auf.\n\nViele Menschen verlassen sich bei der Suche auf Empfehlungen von Kollegen, Nachbarn oder Freunden. „Eine persönliche Empfehlung ist mir wichtiger als jede Bewertung im Internet“, sagt Tomás, der vor zwei Jahren aus Chile nach Hamburg gezogen ist. Andere nutzen gezielt Arztportale, auf denen Patienten Praxen bewerten. Fachleute raten jedoch, solche Bewertungen mit Vorsicht zu lesen: Oft schreiben vor allem sehr zufriedene oder sehr unzufriedene Menschen eine Bewertung.\n\nFür Zugezogene spielt häufig die Sprache eine große Rolle. Wer komplizierte Befunde besprechen muss, fühlt sich sicherer, wenn die Ärztin auch Englisch oder die eigene Muttersprache spricht. Viele Praxen geben auf ihrer Website an, welche Sprachen im Team gesprochen werden. Auch praktische Fragen sind entscheidend: Wie gut ist die Praxis zu erreichen? Gibt es Sprechstunden am Abend? Kann man Termine online buchen?\n\nWichtig ist schließlich das Vertrauen. Eine gute Hausärztin nimmt sich Zeit, erklärt Diagnosen verständlich und behält den Überblick, wenn mehrere Fachärzte beteiligt sind. „Beim ersten Termin merke ich meistens schnell, ob ich mich ernst genommen fühle“, sagt Amira, die als Pflegekraft in Köln arbeitet. Wer unzufrieden ist, kann die Praxis übrigens wechseln, sollte aber darauf achten, dass die bisherigen Unterlagen an die neue Praxis weitergegeben werden.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Gesetzlich Versicherte dürfen ihre Hausarztpraxis grundsätzlich selbst wählen.', a: 't', why: '*In Deutschland gilt die freie Arztwahl.*' },
            { q: 'Jede Praxis muss neue Patienten aufnehmen.', a: 'f', why: '*in manchen Regionen nehmen Praxen keine neuen Patientinnen und Patienten mehr auf*' },
            { q: 'Tomás vertraut Bewertungen im Internet mehr als Empfehlungen.', a: 'f', why: 'For him a personal recommendation is more important.' },
            { q: 'Fachleute halten Bewertungen im Internet für völlig objektiv.', a: 'f', why: 'They advise reading them *mit Vorsicht*.' },
            { q: 'Viele Praxen nennen auf ihrer Website die Sprachen des Teams.', a: 't', why: '*Viele Praxen geben auf ihrer Website an, welche Sprachen im Team gesprochen werden.*' },
            { q: 'Amira hat ihre Hausarztpraxis schon mehrmals gewechselt.', a: 'ng', why: 'The text does not say whether Amira has changed her practice.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Warum soll man Bewertungen im Internet mit Vorsicht lesen?', o: ['Weil oft vor allem sehr zufriedene oder sehr unzufriedene Menschen schreiben.', 'Weil die Bewertungen von den Praxen selbst stammen.', 'Weil die Bewertungen meistens veraltet sind.'], why: 'The text gives this reason directly after the experts’ advice.' },
            { q: 'Was tut eine gute Hausärztin, wenn mehrere Fachärzte beteiligt sind?', o: ['Sie behält den Überblick.', 'Sie überweist an keinen weiteren Arzt.', 'Sie entscheidet allein über alle Behandlungen.'], why: '*behält den Überblick*: she keeps an overview of the whole treatment.' },
            { q: '„Ich fühle mich ernst genommen.“ Was bedeutet das?', o: ['Die Ärztin hält meine Sorgen für wichtig.', 'Die Ärztin ist sehr streng mit mir.', 'Die Ärztin hat wenig Zeit für mich.'], why: '*ernst nehmen*: to treat someone’s worries as important.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the phrases from the article.', items: [
            { q: 'Viele Menschen verlassen sich ___ Empfehlungen von Freunden.', a: ['auf'], why: '*sich verlassen auf* + Akkusativ: to rely on.' },
            { q: 'Fachleute raten, Bewertungen mit ___ zu lesen.', a: ['Vorsicht'], why: '*mit Vorsicht*: carefully, without trusting everything.' },
            { q: 'Eine gute Ärztin nimmt sich ___ für ihre Patienten.', a: ['Zeit'], why: '*sich Zeit nehmen*: not to hurry.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Sie bleiben nach der Operation drei Nächte im Krankenhaus. Die Behandlung ist ___.', o: ['stationär', 'ambulant', 'privat'], why: '*stationär*: with a stay in hospital.' },
      { q: 'Könnten Sie mir erklären, was dieser Befund ___?', o: ['bedeutet', 'bedeuten', 'hat bedeutet'], why: 'Indirect question: the verb goes to the end and agrees with *dieser Befund*.' },
      { q: 'In der gesetzlichen Krankenversicherung hängt der Beitrag vor allem ___ ab.', o: ['vom Einkommen', 'vom Alter', 'vom Gesundheitszustand'], why: 'Public insurance: contributions depend on your income.' },
      { q: 'die von der Ärztin verschriebenen Tabletten = die Tabletten, ___', o: ['die die Ärztin verschrieben hat', 'die die Ärztin verschreiben wird', 'die die Ärztin nicht kennt'], why: 'Partizip II *verschrieben*: the action is completed.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Für den Radiologen brauche ich eine ___. (referral)', a: ['Überweisung', 'Ueberweisung'], why: '*die Überweisung*: a referral.' },
      { q: 'Mit welchen Nebenwirkungen muss ich ___?', a: ['rechnen'], why: '*mit etwas rechnen*: to expect something.' },
      { q: 'Habe ich Sie richtig ___, dass ich morgen nüchtern kommen soll?', a: ['verstanden'], why: '*Habe ich Sie richtig verstanden, dass …?* checks what you understood.' },
      { q: 'Der ___ Eigenanteil wird Ihnen in Rechnung gestellt. (verbleiben)', a: ['verbleibende'], why: 'Partizip I as an adjective: *der verbleibende Eigenanteil*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the words and their meanings.', pairs: [
      ['der Eingriff', 'eine kleine Operation'],
      ['die Nachsorge', 'Betreuung nach der Behandlung'],
      ['die Erstattung', 'Man bekommt Geld zurück.'],
      ['der Augenarzt', 'Probleme mit den Augen'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: 'Gibt es eine Alternative zu dieser Behandlung?', why: 'A yes/no question: the verb *gibt* first.' },
      { a: 'Wissen Sie, ob die Kasse die Kosten übernimmt?', why: 'After *ob*, the verb *übernimmt* goes to the end.' },
    ] },
  ],
};
