// German B2 for moving abroad, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Contracts and your rights',
  goal: 'Understand rental and work contracts and stand up for yourself politely.',
  art: 'cat',
  tags: { skills: ['reading', 'writing', 'vocabulary', 'grammar'], topics: ['rental-contract', 'service-charges', 'defects', 'work-contract', 'zustandspassiv', 'conditions'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Your rental contract',
      about: 'Service charges, rent increases and reporting defects.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Most tenants pay a monthly advance for service charges (*Nebenkosten* or *Betriebskosten*): water, heating, rubbish collection, cleaning of the building. Once a year the landlord sends a statement, the **Nebenkostenabrechnung**. It compares what you paid in advance with the real costs. You then either pay the difference or get money back.' },
          { t: 'table', caption: 'Words in and around a rental contract', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['die Vorauszahlung', 'the amount you pay every month in advance for service charges'],
            ['die Nebenkostenabrechnung', 'the yearly statement of the real service charges'],
            ['die Nachzahlung', 'money you must pay extra if your advance was too low'],
            ['das Guthaben', 'money you get back if you paid too much'],
            ['die Mieterhöhung', 'a rent increase'],
            ['der Mangel, die Mängel', 'a defect in the flat, such as mould or broken heating'],
            ['die Mietminderung', 'a lower rent because of a serious defect'],
          ] },
        ],
        [
          { t: 'text', md: 'In Germany a landlord cannot raise the rent at any time or by any amount: the law sets limits, and an increase usually has to be explained in writing. If you find a **defect**, report it to the landlord quickly and in writing. Describe it precisely, add photos and ask for a repair within a reasonable time.' },
          { t: 'tip', art: 'owl', md: 'Do not simply pay less rent on your own. A rent reduction (*Mietminderung*) is only possible for real defects, and the amount depends on the case. Tenants’ associations (*Mietervereine*) advise their members on statements, rent increases and defects.' },
          { t: 'ex', kind: 'choice', h: 'What is the result, or what is the best thing to do?', items: [
            { q: 'Vorauszahlungen: 1.800 €. Tatsächliche Kosten: 2.050 €. Das Ergebnis ist ___.', o: ['eine Nachzahlung von 250 €', 'ein Guthaben von 250 €', 'eine Mieterhöhung von 250 €'], why: 'You paid less than the real costs, so you pay the difference: a *Nachzahlung*.' },
            { q: 'Vorauszahlungen: 2.400 €. Tatsächliche Kosten: 2.100 €. Das Ergebnis ist ___.', o: ['ein Guthaben von 300 €', 'eine Nachzahlung von 300 €', 'eine Mietminderung von 300 €'], why: 'You paid more than the real costs, so you get money back: a *Guthaben*.' },
            { q: 'Im Bad bildet sich Schimmel. Was tun Sie zuerst?', o: ['Ich melde den Mangel schriftlich beim Vermieter.', 'Ich zahle ab sofort keine Miete mehr.', 'Ich kündige sofort die Wohnung.'], why: 'First report the defect in writing, so the landlord can repair it.' },
            { q: 'Ihr Vermieter schickt Ihnen eine Mieterhöhung. Was ist sinnvoll?', o: ['Ich prüfe sie oder lasse mich beraten, zum Beispiel beim Mieterverein.', 'Ich muss sofort und ohne Prüfung zustimmen.', 'Ich ignoriere den Brief, er hat keine Folgen.'], why: 'An increase must follow legal rules, so check it or get advice.' },
          ] },
        ],
        [
          { t: 'text', md: 'When you talk about repairs, you need two kinds of passive. **werden + Partizip II** describes the action: someone does something. **sein + Partizip II** describes the result, the state after the action. This second form is called the **Zustandspassiv**.' },
          { t: 'examples', items: [
            { s: 'Das Fenster **wird** morgen **repariert**.', n: 'The action: a workman will repair it tomorrow.' },
            { s: 'Das Fenster **ist** schon **repariert**.', n: 'The result: it works now.' },
            { s: 'Der Schaden **wurde** am Montag **gemeldet**.', n: 'The action in the past, in the Präteritum.' },
            { s: 'Die Wohnung **ist** frisch **renoviert**.', n: 'A state, very common in flat adverts.' },
            { s: 'Die Heizung **ist** seit gestern wieder **repariert**.', n: 'The state with *seit*: it has been in order since yesterday.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Action or result? Write a form of werden or sein.', items: [
            { q: 'Der Handwerker ist gerade da, das Fenster ___ jetzt repariert.', a: ['wird'], why: 'The repair is happening now: an action, so *wird*.' },
            { q: 'Gute Nachricht: Die Heizung ___ repariert, sie funktioniert wieder.', a: ['ist'], why: 'The heating works again: a result, so *ist*.' },
            { q: 'Der Mangel ___ schon vor einem Monat gemeldet. (werden, Präteritum)', a: ['wurde'], why: 'An action in the past: *wurde gemeldet*.' },
            { q: 'Die Wohnung ___ frisch renoviert und sofort bezugsfertig.', a: ['ist'], why: 'The flat is in a new state: *ist renoviert*.' },
            { q: 'Die Nebenkostenabrechnung ___ einmal im Jahr erstellt.', a: ['wird'], why: 'A regular action: *wird erstellt*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match each word with its explanation.', pairs: [
            ['die Nachzahlung', 'Geld, das man zusätzlich bezahlen muss'],
            ['das Guthaben', 'Geld, das man zurückbekommt'],
            ['die Vorauszahlung', 'Geld, das man jeden Monat im Voraus zahlt'],
            ['der Mangel', 'ein Schaden oder Fehler in der Wohnung'],
            ['die Kündigungsfrist', 'die Zeit zwischen der Kündigung und dem Ende des Vertrags'],
            ['die Mieterhöhung', 'Die Miete wird teurer.'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Your work contract',
      about: 'Probation, overtime and holiday, explained in general terms.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Before you sign a work contract (*Arbeitsvertrag*), check a few points: how long the probation lasts, whether the contract has an end date, the working hours, what happens with overtime, your holiday and the notice period.' },
          { t: 'table', caption: 'Words in a work contract', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['die Probezeit', 'the first months of a job, often up to six months, with a shorter notice period'],
            ['befristet / unbefristet', 'with a fixed end date / without an end date'],
            ['die Arbeitszeit', 'the working hours agreed in the contract'],
            ['die Überstunden', 'hours you work beyond the agreed working time'],
            ['der Urlaubsanspruch', 'the number of paid days off you are entitled to'],
            ['die Kündigungsfrist', 'the notice period'],
            ['der Tarifvertrag', 'an agreement between unions and employers on pay and conditions'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Germany the law sets a minimum of paid holiday: with a five-day week, at least 20 working days a year. Many contracts give more. Whether overtime is paid or balanced with time off (*Freizeitausgleich*) depends on your contract or the *Tarifvertrag*. A works council (*Betriebsrat*), a union or an advice centre can answer questions.' },
        ],
        [
          { t: 'reading', title: 'Auszug aus einem Arbeitsvertrag', md: '**Probezeit:** Die ersten sechs Monate des Arbeitsverhältnisses gelten als Probezeit. Während der Probezeit kann das Arbeitsverhältnis von beiden Seiten mit einer Frist von zwei Wochen gekündigt werden.\n\n**Arbeitszeit:** Die regelmäßige wöchentliche Arbeitszeit beträgt 40 Stunden. Bei betrieblichem Bedarf ist der Arbeitnehmer verpflichtet, Überstunden zu leisten. Überstunden werden nach Wahl des Arbeitgebers vergütet oder durch Freizeit ausgeglichen.\n\n**Urlaub:** Der Arbeitnehmer hat Anspruch auf 28 Arbeitstage bezahlten Urlaub pro Kalenderjahr.\n\n**Arbeitsunfähigkeit:** Im Falle einer Erkrankung ist der Arbeitgeber unverzüglich zu informieren. Sofern die Arbeitsunfähigkeit länger als drei Kalendertage dauert, ist eine ärztliche Bescheinigung vorzulegen.' },
          { t: 'ex', kind: 'choice', h: 'Read the contract. Choose the right answer.', items: [
            { q: 'Die Firma möchte Ihnen im vierten Monat kündigen. Mit welcher Frist?', o: ['zwei Wochen', 'drei Monate', 'sechs Monate'], why: 'The fourth month is still in the probation, so the notice period is two weeks.' },
            { q: 'Wer entscheidet, ob Überstunden bezahlt oder mit Freizeit ausgeglichen werden?', o: ['der Arbeitgeber', 'der Arbeitnehmer', 'der Betriebsrat'], why: '*nach Wahl des Arbeitgebers*: the employer chooses.' },
            { q: 'Sie sind seit Montag krank, heute ist Freitag. Was brauchen Sie?', o: ['eine ärztliche Bescheinigung', 'nichts, wenn Sie anrufen', 'eine Bescheinigung erst nach zwei Wochen'], why: 'More than three calendar days, so you must show a doctor’s certificate.' },
            { q: 'Wie viele bezahlte Urlaubstage haben Sie pro Jahr?', o: ['28', '20', '40'], why: '*Anspruch auf 28 Arbeitstage bezahlten Urlaub*. 20 days is only the legal minimum.' },
          ] },
        ],
        [
          { t: 'text', md: 'Contracts express conditions in formal ways. *sofern* and *soweit* mean *wenn* or *falls*; the verb goes to the end. *im Falle* + Genitiv and *bei* + noun replace a whole *wenn*-clause. *es sei denn* means "unless".' },
          { t: 'examples', items: [
            { s: '**Bei** Krankheit ist der Arbeitgeber sofort zu informieren.', n: '*bei Krankheit* = *wenn man krank ist*.' },
            { s: '**Im Falle** einer Kündigung erhalten Sie ein Arbeitszeugnis.', n: '*im Falle* + Genitiv = *wenn gekündigt wird*.' },
            { s: 'Überstunden werden bezahlt, **sofern** sie angeordnet wurden.', n: '*sofern* = *wenn*: the verb goes to the end.' },
            { s: 'Der Vertrag läuft unbefristet, **es sei denn**, er wird ausdrücklich befristet.', n: '*es sei denn* = unless.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the contract sentences.', items: [
            { q: '___ Krankheit ist der Arbeitgeber sofort zu informieren.', a: ['Bei'], why: '*bei* + noun replaces a *wenn*-clause.' },
            { q: 'Im ___ einer Kündigung erhalten Sie ein Arbeitszeugnis.', a: ['Falle', 'Fall'], why: '*im Falle* (or *im Fall*) + Genitiv.' },
            { q: 'Der Vertrag endet nicht automatisch, es ___ denn, er ist befristet.', a: ['sei'], why: '*es sei denn* means unless.' },
            { q: 'Während der Probezeit kann der Vertrag mit einer Frist von zwei Wochen ___ werden. (kündigen)', a: ['gekündigt'], why: 'Passive with *können*: Partizip II + *werden*.' },
            { q: 'Überstunden werden vergütet, sofern sie vorher angeordnet ___. (werden, Präteritum)', a: ['wurden'], why: 'After *sofern*, the verb goes to the end: *angeordnet wurden*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Bei Krankheit ist der Arbeitgeber zu informieren.', why: '*Bei Krankheit* first, then *ist*; *zu informieren* at the end.' },
            { a: 'Wie lange dauert die Probezeit?', why: 'A question word first, then the verb.' },
            { a: 'Wie viele Urlaubstage stehen mir zu?', why: '*zustehen* is separable: *stehen … zu*, with *zu* at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A defect in the flat',
      about: 'Read a tenant’s letter about a defect and the landlord’s answer.',
      art: 'teacup',
      spreads: [
        [
          { t: 'reading', title: 'Mängelanzeige: Wohnung Lindenstraße 14, 2. OG links', md: 'Sehr geehrter Herr Albrecht,\n\nhiermit möchte ich Ihnen zwei Mängel in meiner Wohnung anzeigen. Seit etwa drei Wochen bildet sich im Badezimmer an der Außenwand Schimmel, obwohl ich täglich mehrmals lüfte und nach dem Duschen die Fliesen abwische. Die betroffene Stelle ist inzwischen so groß wie ein Blatt Papier und wird weiter größer. Außerdem schließt das Schlafzimmerfenster nicht mehr richtig, sodass es bei Wind stark zieht und bei Regen Wasser auf die Fensterbank läuft. Den Schimmel habe ich Ihnen bereits am 20. Oktober telefonisch gemeldet, leider ist seitdem nichts passiert.\n\nIch habe beide Mängel fotografiert und füge die Fotos diesem Schreiben bei. Da Schimmel gesundheitsschädlich sein kann und in meiner Wohnung ein kleines Kind lebt, bitte ich Sie, die Ursache möglichst bald prüfen zu lassen und die Mängel bis zum 15. November zu beseitigen.\n\nFür einen Termin mit einem Handwerker bin ich werktags ab 16 Uhr sowie samstags erreichbar. Bitte teilen Sie mir kurz mit, wann ich mit einer Besichtigung rechnen kann.\n\nVorsorglich weise ich darauf hin, dass ich mir weitere Schritte vorbehalte, einschließlich einer Mietminderung, falls die Mängel nicht innerhalb der genannten Frist behoben werden.\n\nMit freundlichen Grüßen\nElena Petrova' },
        ],
        [
          { t: 'reading', title: 'Antwort des Vermieters', md: 'Sehr geehrte Frau Petrova,\n\nvielen Dank für Ihr Schreiben und die Fotos. Es tut mir leid, dass Sie Probleme mit der Wohnung haben. Ihren Anruf vom 20. Oktober habe ich erst verspätet erhalten, da ich im Urlaub war.\n\nDas Fenster im Schlafzimmer wird am kommenden Dienstag zwischen 8 und 10 Uhr von der Firma Krämer Fensterbau repariert. Falls Ihnen der Termin nicht passt, melden Sie sich bitte direkt bei der Firma. Bitte sorgen Sie dafür, dass das Fenster frei zugänglich ist.\n\nWas den Schimmel betrifft, habe ich einen Sachverständigen beauftragt, der die Außenwand untersuchen wird. Er wird sich in den nächsten Tagen bei Ihnen melden. Erst wenn die Ursache feststeht, kann entschieden werden, welche Arbeiten nötig sind. Sollte sich herausstellen, dass die Wand feucht ist, übernehme ich selbstverständlich die Kosten für die Sanierung. Bis dahin bitte ich Sie, die Stelle nicht selbst zu behandeln, damit der Sachverständige den Zustand beurteilen kann. Lüften Sie aber bitte weiterhin regelmäßig, so wie Sie es bisher getan haben.\n\nEine Mietminderung halte ich zum jetzigen Zeitpunkt nicht für angebracht, da ich umgehend reagiert habe. Sollten die Arbeiten länger dauern als geplant, können wir gern noch einmal darüber sprechen.\n\nMit freundlichen Grüßen\nRainer Albrecht' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read both letters. True, false or not given?', items: [
            { q: 'Frau Petrova lüftet ihr Badezimmer zu selten.', a: 'f', why: 'She airs it *täglich mehrmals*, several times a day.' },
            { q: 'Durch das Schlafzimmerfenster kommt Wasser in die Wohnung.', a: 't', why: '*bei Regen läuft Wasser auf die Fensterbank*' },
            { q: 'Frau Petrova setzt dem Vermieter eine Frist.', a: 't', why: 'She asks for the repair *bis zum 15. November*.' },
            { q: 'Für die Reparatur des Fensters gibt es schon einen Termin.', a: 't', why: 'Next Tuesday between 8 and 10.' },
            { q: 'Der Vermieter weiß schon, warum sich der Schimmel bildet.', a: 'f', why: 'An expert must first find the cause: *Erst wenn die Ursache feststeht …*' },
            { q: 'Frau Petrova soll den Schimmel sofort selbst entfernen.', a: 'f', why: 'He asks her *die Stelle nicht selbst zu behandeln*.' },
            { q: 'Der Sachverständige kommt am Dienstag.', a: 'ng', why: 'He will call *in den nächsten Tagen*; the day is not given.' },
            { q: 'Der Vermieter ist mit einer Mietminderung einverstanden.', a: 'f', why: 'He thinks a reduction is *nicht angebracht* at the moment.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the phrase from the letters mean?', items: [
            { q: '„Ich behalte mir weitere Schritte vor.“', o: ['Ich werde vielleicht später noch mehr unternehmen.', 'Ich verzichte auf alle weiteren Schritte.', 'Ich ziehe bald aus der Wohnung aus.'], why: '*sich etwas vorbehalten*: to keep the right to do something later.' },
            { q: '„Was den Schimmel betrifft, …“', o: ['Zum Thema Schimmel …', 'Obwohl es Schimmel gibt, …', 'Weil der Schimmel wächst, …'], why: '*Was … betrifft* introduces a topic: regarding.' },
            { q: '„… da ich umgehend reagiert habe.“', o: ['sofort', 'zu spät', 'nur teilweise'], why: '*umgehend* is a formal word for *sofort*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the forms of the Zustandspassiv (sein + Partizip II).', items: [
            { s: 'Der Mangel wurde im Oktober gemeldet. Inzwischen [ist] das Fenster [abgedichtet], und die Heizung [ist] [repariert].', why: '*ist abgedichtet* and *ist repariert* describe results. *wurde gemeldet* is the action, with *werden*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Sie haben zu wenig Nebenkosten vorausgezahlt. Sie bekommen ___.', o: ['eine Nachzahlung', 'ein Guthaben', 'eine Mietminderung'], why: 'You paid too little, so you must pay extra: a *Nachzahlung*.' },
      { q: 'Gute Nachricht: Die Heizung ___ repariert, sie läuft wieder.', o: ['ist', 'wird', 'werden'], why: 'The heating works again, so this is the result: Zustandspassiv with *ist*.' },
      { q: 'Die ersten Monate in einem neuen Job heißen ___.', o: ['Probezeit', 'Kündigungsfrist', 'Tarifvertrag'], why: '*die Probezeit*: the first months, often up to six.' },
      { q: '___ Krankheit ist der Arbeitgeber sofort zu informieren.', o: ['Bei', 'Sofern', 'Falls'], why: '*bei* + noun; *sofern* and *falls* need a clause.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Der Schaden ___ letzte Woche gemeldet. (werden, Präteritum)', a: ['wurde'], why: 'An action in the past: *wurde gemeldet*.' },
      { q: 'Im ___ einer Kündigung bekommen Sie ein Zeugnis.', a: ['Falle', 'Fall'], why: '*im Falle* + Genitiv.' },
      { q: 'Der Vertrag ist unbefristet, es sei ___, er wird befristet.', a: ['denn'], why: '*es sei denn*: unless.' },
      { q: 'Hiermit möchte ich Ihnen einen ___ in meiner Wohnung anzeigen. (defect)', a: ['Mangel'], why: '*einen Mangel anzeigen*: to report a defect.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match each word with its meaning.', pairs: [
      ['das Guthaben', 'Geld, das man zurückbekommt'],
      ['die Überstunden', 'mehr Arbeit als im Vertrag vereinbart'],
      ['unbefristet', 'ohne festes Ende'],
      ['die Mietminderung', 'weniger Miete wegen eines Mangels'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Das Fenster ist schon repariert.', why: 'Zustandspassiv: *ist* second, the participle at the end.' },
      { a: 'Wie viele Urlaubstage stehen mir zu?', why: '*stehen … zu*: the separable part at the end.' },
    ] },
  ],
};
