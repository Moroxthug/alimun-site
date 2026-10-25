// German B2 for work, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Leading meetings',
  goal: 'Chair and take part in meetings and write minutes.',
  art: 'mug',
  tags: { skills: ['speaking', 'writing', 'grammar', 'reading'], topics: ['meetings', 'minutes', 'passive', 'konjunktiv-i', 'reported-speech'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Opening, steering and closing a meeting',
      about: 'Phrases to chair a meeting: start, follow the agenda, give the floor and finish.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'The person who chairs a meeting (*die Sitzungsleitung* or *die Moderation*) opens it, guides the group through the agenda (*die Tagesordnung*) and closes it with a short summary. Each stage has typical phrases. They are fairly formal, but many teams use them with *du* as well.' },
          { t: 'table', caption: 'Chairing a meeting', explain: ['head', 'col0'], head: ['Stage', 'Phrase'], rows: [
            ['Opening', 'Ich begrüße Sie herzlich zu unserer Besprechung.'],
            ['The agenda', 'Wir haben heute drei Punkte auf der Tagesordnung.'],
            ['Giving the floor', 'Frau Petrović, möchten Sie dazu etwas sagen?'],
            ['Back to the topic', 'Lassen Sie uns zum eigentlichen Thema zurückkommen.'],
            ['Time', 'Wir müssen langsam zum Ende kommen.'],
            ['Summary', 'Ich fasse kurz zusammen: …'],
            ['Closing', 'Vielen Dank für Ihre Beiträge. Damit schließe ich die Sitzung.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Projektbesprechung: ein neuer Lieferant', lines: [
            { who: 'Jana', s: 'Guten Morgen zusammen. Ich begrüße euch zu unserer Projektbesprechung. Wir haben heute zwei Punkte: die Wahl des Lieferanten und den Zeitplan. Beginnen wir mit dem ersten Punkt. Mehmet, du hast die Angebote verglichen. Magst du kurz berichten?' },
            { who: 'Mehmet', s: 'Gern. Wir haben drei Angebote. Das günstigste kommt aus Polen, aber die Lieferzeit ist recht lang.' },
            { who: 'Lukas', s: 'Apropos Polen: Hat eigentlich schon jemand die Hotels für die Messe in Posen gebucht?' },
            { who: 'Jana', s: 'Das ist ein wichtiger Punkt, Lukas, aber er gehört nicht zum heutigen Thema. Können wir das am Ende unter „Verschiedenes“ besprechen?' },
            { who: 'Lukas', s: 'Klar, entschuldigt.' },
            { who: 'Jana', s: 'Mehmet, wie lang ist die Lieferzeit genau?' },
            { who: 'Mehmet', s: 'Sechs Wochen statt drei.' },
            { who: 'Jana', s: 'Danke. Dann fasse ich kurz zusammen: Wir brauchen mehr Informationen, bevor wir entscheiden. Mehmet, kannst du bis Donnerstag beim Lieferanten nachfragen?' },
          ] },
          { t: 'tip', art: 'owl', md: 'Many agendas end with the point *Verschiedenes* (any other business). It is a useful place to "park" topics that come up at the wrong moment: *Lassen Sie uns das unter „Verschiedenes“ besprechen.*' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Complete the phrases.', pairs: [
            ['Ich begrüße Sie herzlich', 'zu unserer Besprechung.'],
            ['Wir haben heute drei Punkte', 'auf der Tagesordnung.'],
            ['Damit schließe ich', 'die Sitzung.'],
            ['Ich fasse kurz', 'zusammen.'],
            ['Wir müssen langsam', 'zum Ende kommen.'],
            ['Lassen Sie uns zum eigentlichen Thema', 'zurückkommen.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'Zwei Kollegen sprechen über den Urlaub, nicht über das Thema.', o: ['Lassen Sie uns bitte zum eigentlichen Thema zurückkommen.', 'Ich fasse kurz zusammen.', 'Ich begrüße Sie herzlich.'], why: 'The chair brings the group back to the topic.' },
            { q: 'Eine Kollegin hat noch nichts gesagt.', o: ['Frau Demir, wie sehen Sie das?', 'Damit schließe ich die Sitzung.', 'Wir müssen langsam zum Ende kommen.'], why: 'Give the floor with a direct, open question.' },
            { q: 'Es bleiben nur noch fünf Minuten.', o: ['Wir müssen langsam zum Ende kommen.', 'Beginnen wir mit dem ersten Punkt.', 'Darf ich Sie kurz unterbrechen?'], why: '*langsam zum Ende kommen*: to start finishing the meeting.' },
            { q: 'Sie möchten etwas sagen, aber ein Kollege spricht gerade.', o: ['Darf ich kurz etwas ergänzen?', 'Ich begrüße Sie zu unserer Sitzung.', 'Damit schließe ich die Sitzung.'], why: '*ergänzen*: to add something. A polite way to come in.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Beginnen wir mit dem ersten Punkt.', why: 'An invitation with the verb first: *Beginnen wir …*' },
            { a: 'Darf ich Sie kurz unterbrechen?', why: 'A yes/no question: modal verb first, infinitive at the end. The pronoun *Sie* comes before *kurz*.' },
            { a: 'Wir sollten das unter „Verschiedenes“ besprechen.', why: 'The modal verb *sollten* is second; the infinitive *besprechen* goes to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Taking minutes',
      about: 'Write a Protokoll with the passive and reported speech in the Konjunktiv I.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Minutes (*das Protokoll*) record decisions and tasks, not every word. Two grammar tools make them neutral. The **passive** puts the decision first, not the person: *Es **wurde beschlossen**, …* (It was decided …). In minutes it is usually in the Präteritum: *wurde* / *wurden* + Partizip II.' },
          { t: 'examples', items: [
            { s: 'Das Budget **wurde** um zehn Prozent **erhöht**.', n: 'Passive in the Präteritum: *wurde* + Partizip II.' },
            { s: 'Es **wurde vereinbart**, dass das Team im März startet.', n: '*Es wurde vereinbart / beschlossen / festgelegt, dass …* is typical of minutes.' },
            { s: 'Die Angebote **wurden** ausführlich **diskutiert**.', n: 'A plural subject takes *wurden*.' },
            { s: 'Der Termin **muss** noch **bestätigt werden**.', n: 'Passive with a modal verb: modal + Partizip II + *werden*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the passive in the Präteritum.', items: [
            { q: 'Das neue Logo ___ einstimmig angenommen. (werden)', a: ['wurde'], why: '*das Logo* is singular: *wurde* + Partizip II.' },
            { q: 'Die Kosten wurden noch einmal ___. (prüfen)', a: ['geprüft', 'geprueft'], why: 'Partizip II of *prüfen*: *geprüft*.' },
            { q: 'Es wurde ___, dass Herr Kaya die Kunden informiert. (vereinbaren)', a: ['vereinbart'], why: '*vereinbaren* has no *ge-* in the Partizip II: *vereinbart*.' },
            { q: 'Zwei Termine ___ verschoben. (werden)', a: ['wurden'], why: '*zwei Termine* is plural: *wurden*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences for the minutes.', items: [
            { a: 'Es wurde beschlossen, den Test zu verschieben.', why: '*Es wurde beschlossen*, then the infinitive with *zu* at the end.' },
            { a: 'Die Präsentation muss noch überarbeitet werden.', why: 'Passive with a modal verb: *muss* second, *überarbeitet werden* at the end.' },
          ] },
        ],
        [
          { t: 'text', md: 'When minutes report what someone said, they often use the **Konjunktiv I** (indirect speech). It shows that the writer only reports the statement. It is used mainly in the third person singular: the stem + *-e*. *Sein* is irregular.\n\nIf the Konjunktiv I looks the same as the normal present (mostly in the plural), use the **Konjunktiv II** instead: *Die Kollegen sagen, sie **hätten** keine Zeit.*' },
          { t: 'table', caption: 'Konjunktiv I (er, sie, es)', explain: ['head'], quiz: true, head: ['Infinitive', 'Konjunktiv I', 'Example'], rows: [
            ['sein', 'sei', 'Herr Kaya sagt, das Projekt sei im Zeitplan.'],
            ['haben', 'habe', 'Frau Lenz erklärt, sie habe die Zahlen geprüft.'],
            ['werden', 'werde', 'Sie teilt mit, die Software werde im Mai eingeführt.'],
            ['können', 'könne', 'Er meint, man könne Kosten sparen.'],
            ['müssen', 'müsse', 'Sie betont, das Team müsse schneller reagieren.'],
            ['kommen', 'komme', 'Er sagt, der Lieferant komme am Montag.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In indirect speech, *dass* is optional. Without *dass*, the verb stays in second place: *Sie sagt, sie **habe** die Zahlen geprüft.* With *dass*, it goes to the end: *Sie sagt, dass sie die Zahlen geprüft **habe**.* Useful verbs to introduce it: *berichten, erklären, betonen, mitteilen, vorschlagen*.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the Konjunktiv I (or II if needed).', items: [
            { q: 'Frau Lenz berichtet, der Kunde ___ sehr zufrieden. (sein)', a: ['sei'], why: '*sein* is irregular: *er sei*.' },
            { q: 'Herr Adeyemi erklärt, er ___ die Präsentation schon fertig. (haben)', a: ['habe'], why: '*haben → er habe*: stem + *-e*.' },
            { q: 'Die Leiterin betont, man ___ das Budget nicht überschreiten. (dürfen)', a: ['dürfe', 'duerfe'], why: '*dürfen → man dürfe*: stem + *-e*.' },
            { q: 'Herr Novak teilt mit, die neue Software ___ im Juni eingeführt. (werden)', a: ['werde'], why: 'Passive in indirect speech: *werde … eingeführt*.' },
            { q: 'Die Kollegen sagen, sie ___ zu wenig Zeit. (haben)', a: ['hätten', 'haetten'], why: 'The Konjunktiv I *sie haben* looks like the present, so use the Konjunktiv II *hätten*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence reports the statement correctly?', items: [
            { q: 'Frau Weber: „Ich bin mit dem Ergebnis zufrieden.“', o: ['Frau Weber sagt, sie sei mit dem Ergebnis zufrieden.', 'Frau Weber sagt, ich sei mit dem Ergebnis zufrieden.', 'Frau Weber sagt, sie bin mit dem Ergebnis zufrieden.'], why: 'The pronoun changes to *sie*, and *bin* becomes *sei*.' },
            { q: 'Herr Sato: „Wir haben die Zahlen schon geprüft.“', o: ['Herr Sato sagt, sie hätten die Zahlen schon geprüft.', 'Herr Sato sagt, wir haben die Zahlen schon geprüft.', 'Herr Sato sagt, sie sei die Zahlen schon geprüft.'], why: '*sie haben* would look like the present, so the Konjunktiv II *hätten*.' },
            { q: 'Frau Ali: „Der Termin kann nicht stattfinden.“', o: ['Frau Ali teilt mit, der Termin könne nicht stattfinden.', 'Frau Ali teilt mit, der Termin können nicht stattfinden.', 'Frau Ali teilt mit, dass der Termin könne nicht stattfinden.'], why: '*kann → könne*. With *dass*, the verb would have to go to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Minutes of a team meeting',
      about: 'Read the minutes of an IT team meeting and find decisions, tasks and reported statements.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Protokoll: Teambesprechung IT-Support', md: '**Datum:** 7. Oktober, 10:00 bis 11:10 Uhr, Raum 3.12\n**Teilnehmende:** Daniela Ruiz (Leitung), Tobias Engel, Aylin Kaya, Kwame Mensah\n**Protokoll:** Aylin Kaya\n\n**TOP 1: Umstellung auf das neue Ticketsystem**\nFrau Ruiz berichtete, die Umstellung sei weitgehend abgeschlossen. Seit dem 1. Oktober würden alle Anfragen über das neue System bearbeitet. Herr Engel merkte an, viele Kolleginnen und Kollegen aus anderen Abteilungen hätten noch Schwierigkeiten mit dem Formular. Es wurde beschlossen, eine kurze Anleitung im Intranet zu veröffentlichen. Herr Engel erstellt den Text bis zum 14. Oktober.\n\n**TOP 2: Erreichbarkeit am Freitagnachmittag**\nHerr Mensah wies darauf hin, dass freitags nach 14 Uhr oft niemand im Support erreichbar sei. Frau Ruiz erklärte, das Problem sei bekannt. Da zwei Stellen nicht besetzt seien, könne das Team derzeit nicht alle Zeiten abdecken. Nach einer längeren Diskussion wurde vereinbart, einen Bereitschaftsplan einzuführen: Jede Woche übernimmt eine Person den Freitagnachmittag. Der Plan wird von Frau Kaya erstellt.\n\n**TOP 3: Schulung zur Datensicherheit**\nDie jährliche Schulung muss bis Ende November durchgeführt werden. Frau Ruiz schlug vor, die Schulung dieses Jahr online anzubieten. Herr Mensah gab zu bedenken, dass eine Schulung vor Ort mehr Austausch ermögliche. Die Entscheidung wurde vertagt, bis Angebote von zwei Anbietern vorliegen.\n\n**Verschiedenes:** Herr Engel ist vom 20. bis 24. Oktober im Urlaub. Er wird von Herrn Mensah vertreten.\n\n**Nächste Besprechung:** 21. Oktober, 10:00 Uhr' },
          { t: 'tip', art: 'owl', md: 'In German minutes, *TOP* stands for *Tagesordnungspunkt* (agenda item). *Eine Entscheidung vertagen* means to postpone a decision to a later meeting.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Das neue Ticketsystem wird seit Anfang Oktober benutzt.', a: 't', why: '*Seit dem 1. Oktober würden alle Anfragen über das neue System bearbeitet.*' },
            { q: 'Alle Kolleginnen und Kollegen kommen gut mit dem Formular zurecht.', a: 'f', why: 'Many *hätten noch Schwierigkeiten mit dem Formular*.' },
            { q: 'Herr Engel schreibt eine Anleitung für das Intranet.', a: 't', why: '*Herr Engel erstellt den Text bis zum 14. Oktober.*' },
            { q: 'Am Freitagnachmittag ist der Support immer gut erreichbar.', a: 'f', why: '*… freitags nach 14 Uhr oft niemand im Support erreichbar sei.*' },
            { q: 'Das Team stellt im November zwei neue Mitarbeitende ein.', a: 'ng', why: 'Two positions are open, but the minutes say nothing about when they will be filled.' },
            { q: 'Es wurde entschieden, die Schulung online durchzuführen.', a: 'f', why: '*Die Entscheidung wurde vertagt*: it was postponed.' },
            { q: 'Herr Mensah vertritt Herrn Engel während seines Urlaubs.', a: 't', why: '*Er wird von Herrn Mensah vertreten.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the Konjunktiv I.', items: [
            { s: 'Frau Ruiz berichtete, die Umstellung [sei] weitgehend abgeschlossen.', why: '*sei*: Konjunktiv I of *sein*. *berichtete* is the normal Präteritum.' },
            { s: 'Sie erklärte, das Team [könne] derzeit nicht alle Zeiten abdecken.', why: '*könne*: Konjunktiv I of *können*.' },
            { s: 'Herr Mensah gab zu bedenken, dass eine Schulung vor Ort mehr Austausch [ermögliche].', why: '*ermögliche*: stem + *-e*. The normal present would be *ermöglicht*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Die Diskussion geht weg vom Thema. Was sagt die Leitung?', o: ['Lassen Sie uns zum eigentlichen Thema zurückkommen.', 'Damit schließe ich die Sitzung.', 'Ich begrüße Sie herzlich.'], why: 'This phrase brings the group back to the topic.' },
      { q: 'Das Budget ___ um fünf Prozent gekürzt.', o: ['wurde', 'wurden', 'hat'], why: 'Passive in the Präteritum with a singular subject: *wurde*.' },
      { q: 'Er sagt, er ___ morgen nicht im Büro.', o: ['sei', 'seien', 'habe'], why: 'Konjunktiv I of *sein* for *er*: *sei*.' },
      { q: 'Die Kollegen sagen, sie ___ am Freitag keine Zeit.', o: ['hätten', 'habe', 'hat'], why: 'In the plural the Konjunktiv I looks like the present, so the Konjunktiv II *hätten*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Es wurde ___, das Projekt zu verlängern. (beschließen)', a: ['beschlossen'], why: 'Partizip II of *beschließen*: *beschlossen*.' },
      { q: 'Frau Kim erklärt, sie ___ den Bericht schon geschickt. (haben)', a: ['habe'], why: 'Konjunktiv I: *sie habe … geschickt*.' },
      { q: 'Ich fasse kurz ___: Wir verschieben den Start auf Mai.', a: ['zusammen'], why: '*zusammenfassen*: to summarise. The prefix goes to the end.' },
      { q: 'Der Plan ___ von Frau Kaya erstellt. (werden, present)', a: ['wird'], why: 'Passive in the present: *wird* + Partizip II.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the noun for each verb.', pairs: [
      ['beschließen', 'der Beschluss'],
      ['vereinbaren', 'die Vereinbarung'],
      ['vorschlagen', 'der Vorschlag'],
      ['protokollieren', 'das Protokoll'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Damit schließe ich die heutige Sitzung.', why: '*Damit* first, then the verb *schließe*.' },
      { a: 'Es wurde vereinbart, die Schulung online anzubieten.', why: 'With the separable verb *anbieten*, *zu* goes in the middle: *anzubieten*.' },
    ] },
  ],
};
