// German B1 for work, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Business emails',
  goal: 'Write clear, polite work emails in the right register.',
  art: 'mug',
  tags: { skills: ['writing', 'reading', 'vocabulary'], topics: ['formal-email', 'register', 'konjunktiv-ii-polite', 'delivery'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Opening and closing an email',
      about: 'The subject line, the greeting, the closing, and du or Sie.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'A German work email has a fixed frame. The **Betreff** (subject line) says in a few words what the email is about. Then comes the greeting with a comma, and the first line starts with a **small letter**. At the end comes a closing formula without a comma, and then your name.' },
          { t: 'table', caption: 'Opening and closing an email', explain: ['head', 'col0'], quiz: true, head: ['', 'Formal (Sie)', 'Colleague (du)'], rows: [
            ['Greeting', 'Sehr geehrte Frau Schulz,', 'Hallo Jonas,'],
            ['First line', 'vielen Dank für Ihre E-Mail.', 'danke für deine Nachricht.'],
            ['Asking for something', 'Könnten Sie mir bitte die Rechnung schicken?', 'Kannst du mir bitte die Rechnung schicken?'],
            ['Last line', 'Ich freue mich auf Ihre Antwort.', 'Bis morgen!'],
            ['Closing', 'Mit freundlichen Grüßen', 'Viele Grüße'],
          ] },
        ],
        [
          { t: 'reading', title: 'Betreff: Termin am 14. März', md: 'Sehr geehrter Herr Krüger,\n\nvielen Dank für Ihren Anruf heute Vormittag. Gern bestätige ich unseren Termin am Donnerstag, 14. März, um 10 Uhr in unserem Büro in Hannover.\n\nKönnten Sie mir bitte vorher die aktuelle Preisliste schicken? Dann kann sich unser Team gut auf das Gespräch vorbereiten.\n\nIch freue mich auf Ihren Besuch.\n\nMit freundlichen Grüßen\nNadia Haddad' },
          { t: 'tip', art: 'owl', md: 'Do you not know the name of the person? Write *Sehr geehrte Damen und Herren,*. Do you know the person a little? *Liebe Frau Schulz,* or *Guten Tag Frau Schulz,* is friendly and still uses *Sie*. *Hallo* is for colleagues you know well.' },
        ],
        [
          { t: 'text', md: '**Du or Sie?** In many German companies colleagues say *Sie* to each other. In others, for example in many start-ups and IT companies, almost everybody says *du*. With customers and partners, *Sie* is the normal choice. A good rule: answer in the form the other person uses with you.' },
          { t: 'text', md: 'In an email, *Sie*, *Ihnen* and *Ihr* (your) always start with a **capital letter**. Small *sie* means *she*, *her*, *they* or *them*: *Ich rufe Sie an* (you), *Ich rufe sie an* (her or them). *Du* and *dein* can be written with a small or a capital letter in letters and emails; both are correct.' },
          { t: 'ex', kind: 'spot', h: 'Tap the formal forms of address (Sie, Ihnen, Ihr…).', items: [
            { s: 'Vielen Dank für [Ihre] Nachricht. Ich schicke [Ihnen] die Unterlagen bis Freitag.', why: '*Ihre* and *Ihnen* are formal and start with a capital letter.' },
            { s: 'Frau Berger ist heute nicht im Büro, aber [Sie] können sie morgen erreichen.', why: 'Capital *Sie* is the reader. Small *sie* is Frau Berger.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best line for an email to a new customer.', items: [
            { q: 'Anrede:', o: ['Sehr geehrter Herr Novak,', 'Hallo Herr Novak!', 'Sehr geehrter Jan Novak,'], why: '*Sehr geehrter* + *Herr* + surname, and a comma at the end.' },
            { q: 'Erste Zeile:', o: ['vielen Dank für Ihre Anfrage.', 'Vielen Dank für deine Anfrage.', 'danke für die Mail!'], why: 'After the comma the line starts with a small letter, and a customer gets *Ihre*.' },
            { q: 'Gruß am Ende:', o: ['Mit freundlichen Grüßen', 'Tschüss', 'Liebe Grüße'], why: '*Mit freundlichen Grüßen* is the safe formal closing. *Liebe Grüße* is for friends and close colleagues.' },
            { q: 'Sie kennen den Namen nicht:', o: ['Sehr geehrte Damen und Herren,', 'Sehr geehrte Frau oder Herr,', 'Hallo zusammen,'], why: 'The fixed formal greeting when you do not know the name.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the formal line and the line for a colleague.', pairs: [
            ['Sehr geehrte Frau Weber,', 'Hallo Lena,'],
            ['Vielen Dank für Ihre E-Mail.', 'Danke für deine Nachricht.'],
            ['Könnten Sie mich bitte anrufen?', 'Kannst du mich mal anrufen?'],
            ['Mit freundlichen Grüßen', 'Viele Grüße'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Requests, reminders and confirmations',
      about: 'Ask politely with the Konjunktiv II, send a friendly reminder and confirm.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A direct request like *Schicken Sie mir den Bericht.* sounds hard in an email. The **Konjunktiv II** makes it softer: *Könnten Sie …?*, *Würden Sie …?*, *Wäre es möglich, …?* Add *bitte*, and the request is polite.' },
          { t: 'examples', items: [
            { s: '**Könnten** Sie mir bitte den Bericht bis Freitag schicken?', n: 'The most common polite request. The infinitive *schicken* goes to the end.' },
            { s: '**Würden** Sie den Termin bitte auf Mittwoch verschieben?', n: '*würden* + infinitive at the end.' },
            { s: '**Wäre** es möglich, das Angebot bis Montag zu bekommen?', n: 'Very polite. After *möglich* comes an infinitive with *zu*.' },
            { s: 'Ich **hätte** noch eine Frage zum Vertrag.', n: '*hätte* sounds softer than *habe*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Konjunktiv II for polite requests', explain: ['head'], quiz: true, head: ['Infinitive', 'ich', 'Sie / wir'], rows: [
            ['haben', 'ich hätte', 'Sie hätten'],
            ['sein', 'ich wäre', 'Sie wären'],
            ['können', 'ich könnte', 'Sie könnten'],
            ['werden', 'ich würde', 'Sie würden'],
            ['dürfen', 'ich dürfte', 'Sie dürften'],
          ] },
          { t: 'tip', art: 'owl', md: 'For most other verbs, use *würde* + infinitive: *Ich würde gern einen Termin vereinbaren.* With *haben*, *sein* and the modal verbs, use their own form: *ich hätte*, *ich wäre*, *ich könnte*.' },
          { t: 'ex', kind: 'gap', h: 'Write the Konjunktiv II form.', items: [
            { q: 'Ich ___ gern einen Termin mit Ihnen vereinbaren. (werden)', a: ['würde', 'wuerde'], why: '*würde* + infinitive: *ich würde gern … vereinbaren*.' },
            { q: '___ Sie am Dienstag um 15 Uhr Zeit? (haben)', a: ['Hätten', 'Haetten'], why: '*Zeit haben*: polite question with *Hätten Sie …?*' },
            { q: 'Es ___ schön, wenn Sie bald antworten. (sein)', a: ['wäre', 'waere'], why: '*Es wäre schön, wenn …*: a soft wish.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the polite form.', items: [
            { q: '___ Sie mir bitte die Rechnung noch einmal schicken?', o: ['Könnten', 'Wären', 'Hätten'], why: '*Könnten Sie …?* is the polite Konjunktiv II. *Wären* and *Hätten* do not go with *schicken*.' },
            { q: '___ es möglich, den Termin zu verschieben?', o: ['Wäre', 'Würde', 'Hätte'], why: '*Wäre es möglich, … zu …?*: the Konjunktiv II of *sein*.' },
            { q: 'Ich ___ noch eine Frage zur Lieferung.', o: ['hätte', 'wäre', 'würde'], why: '*eine Frage haben*: Konjunktiv II *ich hätte*.' },
            { q: '___ Sie bitte kurz zurückrufen?', o: ['Würden', 'Wären', 'Hätten'], why: '*Würden Sie …?* + infinitive at the end: *zurückrufen*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences for your email.', items: [
            { a: 'Könnten Sie mir die Unterlagen schicken?', why: 'A yes/no question: *Könnten* first, the infinitive *schicken* at the end.' },
            { a: 'Wäre ein Termin am Montag möglich?', why: '*Wäre* first, *möglich* at the end.' },
            { a: 'Leider habe ich noch keine Antwort erhalten.', why: '*Leider* first, so the verb *habe* comes second and the participle *erhalten* goes to the end.' },
          ] },
        ],
        [
          { t: 'text', md: 'Sometimes nobody answers. A **reminder** (*Erinnerung*) stays friendly: say what you sent, and ask again. A **confirmation** (*Bestätigung*) repeats the important facts, such as the date, time or amount.' },
          { t: 'examples', items: [
            { s: 'Ich möchte Sie **freundlich an** unsere Anfrage vom 3. Mai **erinnern**.', n: '*jemanden an etwas erinnern*: to remind someone of something.' },
            { s: 'Leider habe ich **noch keine Antwort** erhalten.', n: 'A neutral way to say that nobody has answered yet.' },
            { s: 'Hiermit **bestätige** ich unseren Termin am 12. Juni um 9 Uhr.', n: '*hiermit*: with this email. A formal confirmation.' },
          ] },
          { t: 'ex', kind: 'match', h: 'What does the sentence do? Match.', pairs: [
            ['Könnten Sie mir das Angebot schicken?', 'eine Bitte'],
            ['Ich möchte Sie an unsere Anfrage erinnern.', 'eine Erinnerung'],
            ['Hiermit bestätige ich den Termin am Freitag.', 'eine Bestätigung'],
            ['Vielen Dank für Ihre schnelle Antwort.', 'ein Dank'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'An email thread about a delivery',
      about: 'Read a short email thread between a customer and a supplier.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Betreff: Bestellung 4471 – Liefertermin', md: '**Von: Marta Kowalczyk**\n\nSehr geehrter Herr Brandt,\n\nam 2. Oktober haben wir bei Ihnen 40 Bürostühle bestellt (Bestellnummer 4471). In Ihrer Auftragsbestätigung steht als Liefertermin der 16. Oktober. Heute ist der 18. Oktober, und die Stühle sind leider noch nicht da. Unsere neuen Mitarbeiter beginnen am 1. November, deshalb brauchen wir die Stühle dringend.\n\nKönnten Sie mir bitte sagen, wann wir mit der Lieferung rechnen können? Bitte geben Sie mir bis Montag Bescheid.\n\nMit freundlichen Grüßen\nMarta Kowalczyk\n\n**Von: Daniel Brandt**\n\nSehr geehrte Frau Kowalczyk,\n\nvielen Dank für Ihre Nachricht, und bitte entschuldigen Sie die Verzögerung. Unser Lieferant hatte Probleme in der Produktion, deshalb konnten wir nicht pünktlich liefern. Die Stühle sind jetzt in unserem Lager. Wir könnten sie am Donnerstag, 24. Oktober, zwischen 8 und 12 Uhr liefern. Würde Ihnen dieser Termin passen? Unser Fahrer ruft Sie etwa eine Stunde vorher an.\n\nAls kleine Entschuldigung übernehmen wir die Versandkosten.\n\nMit freundlichen Grüßen\nDaniel Brandt' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the emails again. True, false or not given?', items: [
            { q: 'Die Firma von Frau Kowalczyk hat 40 Stühle bestellt.', a: 't', why: '*40 Bürostühle bestellt*.' },
            { q: 'Die Stühle sind pünktlich angekommen.', a: 'f', why: 'The delivery date was 16 October. On 18 October the chairs are *noch nicht da*.' },
            { q: 'Die Stühle sind für neue Mitarbeiter.', a: 't', why: '*Unsere neuen Mitarbeiter beginnen am 1. November.*' },
            { q: 'Die Firma von Herrn Brandt produziert die Stühle selbst.', a: 'f', why: 'A supplier, *unser Lieferant*, had problems in production.' },
            { q: 'Frau Kowalczyk hat schon einmal angerufen.', a: 'ng', why: 'The emails do not say if she called.' },
            { q: 'Frau Kowalczyk muss die Versandkosten nicht bezahlen.', a: 't', why: '*Wir übernehmen die Versandkosten*: the supplier pays them.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Betreff: AW: Bestellung 4471 – Liefertermin', md: 'Sehr geehrter Herr Brandt,\n\nvielen Dank für Ihre schnelle Antwort. Der 24. Oktober passt uns gut. Hiermit bestätige ich die Lieferung am Donnerstag zwischen 8 und 12 Uhr. Bitte melden Sie sich am Empfang im Erdgeschoss.\n\nMit freundlichen Grüßen\nMarta Kowalczyk' },
          { t: 'tip', art: 'owl', md: '*AW:* in the subject line means *Antwort* (reply). *WG:* means *weitergeleitet* (forwarded).' },
          { t: 'ex', kind: 'match', h: 'Match the words from the emails and their meaning.', pairs: [
            ['die Bestellnummer', 'die Nummer einer Bestellung'],
            ['der Liefertermin', 'der Tag, an dem die Ware kommt'],
            ['die Verzögerung', 'Etwas kommt später als geplant.'],
            ['der Lieferant', 'die Firma, die die Ware liefert'],
            ['die Versandkosten', 'Das kostet das Schicken der Ware.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the sentence that fits.', items: [
            { q: 'Frau Kowalczyk fragt nach dem Liefertermin:', o: ['Könnten Sie mir bitte sagen, wann wir mit der Lieferung rechnen können?', 'Wann kommen die Stühle endlich?', 'Sag mir bitte, wann die Stühle kommen.'], why: 'Polite *Könnten Sie …?* with an indirect question: the verb *können* goes to the end.' },
            { q: 'Herr Brandt entschuldigt sich:', o: ['Bitte entschuldigen Sie die Verzögerung.', 'Die Verzögerung ist nicht unser Problem.', 'Entschuldige bitte die Verzögerung.'], why: 'Formal and polite, with *Sie*.' },
            { q: 'Herr Brandt schlägt einen neuen Termin vor:', o: ['Würde Ihnen dieser Termin passen?', 'Passt dir dieser Termin?', 'Dieser Termin muss Ihnen passen.'], why: '*Würde Ihnen … passen?*: a polite question in the Konjunktiv II.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences from the emails.', items: [
            { q: 'Unser Lieferant hatte Probleme, ___ konnten wir nicht pünktlich liefern.', a: ['deshalb', 'deswegen', 'daher', 'darum'], why: '*deshalb* gives the result. The verb *konnten* comes right after it.' },
            { q: 'Hiermit ___ ich die Lieferung am Donnerstag. (bestätigen)', a: ['bestätige', 'bestaetige'], why: '*Hiermit bestätige ich …*: the formal confirmation.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'E-Mail an eine Firma. Sie kennen den Namen nicht: ___', o: ['Sehr geehrte Damen und Herren,', 'Hallo zusammen,', 'Liebe Firma,'], why: 'The fixed formal greeting without a name.' },
      { q: 'Sehr geehrte Frau Petrović, ___', o: ['vielen Dank für Ihre Nachricht.', 'Vielen Dank für deine Nachricht.', 'vielen Dank für ihre Nachricht.'], why: 'A small letter after the greeting, and formal *Ihre* with a capital letter.' },
      { q: '___ Sie mir bitte die Preisliste schicken?', o: ['Könnten', 'Wären', 'Hätten'], why: '*Könnten Sie …?* + infinitive.' },
      { q: 'Ich möchte Sie freundlich ___ unsere Anfrage erinnern.', o: ['an', 'auf', 'für'], why: '*jemanden an etwas erinnern*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Sehr ___ Herr Lindqvist, (geehrt)', a: ['geehrter'], why: 'Masculine: *Sehr geehrter Herr …*' },
      { q: 'Ich ___ noch eine Frage zum Angebot. (haben, Konjunktiv II)', a: ['hätte', 'haette'], why: 'Polite: *ich hätte*.' },
      { q: 'Hiermit ___ ich unseren Termin am Montag. (bestätigen)', a: ['bestätige', 'bestaetige'], why: 'A formal confirmation: *Hiermit bestätige ich …*' },
      { q: 'Bitte entschuldigen ___ die Verzögerung.', a: ['Sie'], why: 'The formal imperative: *entschuldigen Sie*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Wäre ein Termin am Dienstag möglich?', why: '*Wäre* first, *möglich* at the end.' },
      { a: 'Würden Sie mich zurückrufen?', why: '*Würden Sie* + object, the infinitive *zurückrufen* at the end.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'In einer formellen E-Mail schreibt man „Ihnen“ groß.', a: 't', why: '*Sie*, *Ihnen* and *Ihr* are always written with a capital letter.' },
      { q: 'Nach „Mit freundlichen Grüßen“ steht ein Komma.', a: 'f', why: 'The closing has no comma; your name follows on the next line.' },
      { q: '„AW:“ im Betreff bedeutet: Das ist eine Antwort.', a: 't', why: '*AW* is short for *Antwort*.' },
    ] },
  ],
};
