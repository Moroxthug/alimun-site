// German B1 for moving abroad, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Banks, contracts and phones',
  goal: 'Open a bank account, get a phone contract and understand the small print.',
  art: 'mug',
  tags: { skills: ['reading', 'writing', 'speaking', 'vocabulary'], topics: ['bank-account', 'contracts', 'cancelling', 'phone-contract'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Opening a bank account',
      about: 'What the bank asks for, and the words of everyday banking.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'text', md: 'For your salary and your rent you need a current account, a **Girokonto**. Banks usually ask for your passport, your proof of address (*Meldebescheinigung*) and your tax number (*Steuer-Identifikationsnummer*, short *Steuer-ID*). Everyone who lives legally in the EU has the right to a basic account, a **Basiskonto**.' },
          { t: 'table', caption: 'Banking words', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['das Girokonto', 'current account'],
            ['die IBAN', 'your account number for transfers'],
            ['die Überweisung', 'bank transfer'],
            ['der Dauerauftrag', 'standing order: the same transfer every month'],
            ['die Lastschrift', 'direct debit: a company takes the money from your account'],
            ['der Kontoauszug', 'bank statement'],
            ['die Kontoführungsgebühr', 'monthly fee for the account'],
            ['der Geldautomat', 'cash machine'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'In der Bank', lines: [
            { who: 'Frau Lange', s: 'Guten Tag, Herr Adeyemi. Sie möchten ein Girokonto eröffnen?' },
            { who: 'Herr Adeyemi', s: 'Ja, genau. Ich habe gerade eine Stelle in Hamburg angefangen.' },
            { who: 'Frau Lange', s: 'Haben Sie Ihren Reisepass und Ihre Meldebescheinigung dabei?' },
            { who: 'Herr Adeyemi', s: 'Ja, hier bitte. Meine Steuer-ID habe ich auch mitgebracht.' },
            { who: 'Frau Lange', s: 'Sehr gut. Wir haben ein Online-Konto ohne Kontoführungsgebühr und ein Konto mit Beratung in der Filiale für 6,90 Euro im Monat.' },
            { who: 'Herr Adeyemi', s: 'Kann ich mit dem Online-Konto auch Geld am Automaten abheben?' },
            { who: 'Frau Lange', s: 'Ja, an unseren Automaten kostenlos. Die Karte und die PIN bekommen Sie in ein paar Tagen per Post, in zwei Briefen.' },
            { who: 'Herr Adeyemi', s: 'Und wie funktioniert das Online-Banking?' },
            { who: 'Frau Lange', s: 'Sie laden unsere App herunter. Jede Überweisung bestätigen Sie mit einer TAN in der App.' },
          ] },
          { t: 'tip', art: 'owl', md: 'The **PIN** is your secret number for the card. A **TAN** is a one-time code that confirms one payment online. Never give either of them to anyone, not even on the phone to someone who says they are from your bank.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Herr Adeyemi bringt seine Steuer-ID mit.', a: 't', why: '*Meine Steuer-ID habe ich auch mitgebracht.*' },
            { q: 'Das Online-Konto kostet 6,90 Euro im Monat.', a: 'f', why: 'The online account has no monthly fee. 6.90 euros is the account with advice in the branch.' },
            { q: 'Herr Adeyemi bekommt die Karte und die PIN im selben Brief.', a: 'f', why: '*in zwei Briefen*: in two separate letters.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word and what it does.', pairs: [
            ['der Dauerauftrag', 'zahlt jeden Monat automatisch die Miete'],
            ['die Lastschrift', 'die Firma holt das Geld von Ihrem Konto'],
            ['der Kontoauszug', 'zeigt alle Zahlungen auf Ihrem Konto'],
            ['der Geldautomat', 'dort heben Sie Bargeld ab'],
            ['die TAN', 'bestätigt eine Zahlung im Online-Banking'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Meine Miete zahle ich jeden Monat per ___.', o: ['Dauerauftrag', 'Kontoauszug', 'Geldautomat'], why: 'The same transfer every month: a *Dauerauftrag*.' },
            { q: 'Für eine Überweisung brauche ich die ___ des Vermieters.', o: ['IBAN', 'PIN', 'Steuer-ID'], why: 'The *IBAN* is the account number you send money to.' },
            { q: 'Ich brauche Bargeld. Ich gehe zum ___.', o: ['Geldautomaten', 'Dauerauftrag', 'Kontoauszug'], why: '*zum Geldautomaten*: *der Automat* adds *-en* in the dative.' },
            { q: 'Das Konto kostet nichts. Es gibt keine ___.', o: ['Kontoführungsgebühr', 'Lastschrift', 'Überweisung'], why: 'The monthly fee for the account: *Kontoführungsgebühr*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Contracts and cancelling',
      about: 'Ask about costs and terms, and know how to end a contract.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Phones, internet, electricity and gyms usually come with a contract, a **Vertrag**. Before you sign, check three things: how long the contract runs (**Laufzeit**), how much it costs each month, and how and when you can end it (**kündigen**).' },
          { t: 'table', caption: 'Contract words', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['die Mindestlaufzeit', 'the shortest time the contract runs, for example 24 months'],
            ['kündigen', 'to end a contract'],
            ['die Kündigungsfrist', 'how early you must cancel before the end'],
            ['monatlich kündbar', 'you can end it every month'],
            ['die Grundgebühr', 'the fixed amount you pay every month'],
            ['einmalig', 'only once, for example at the start'],
            ['die Kündigungsbestätigung', 'the company’s written confirmation that you have cancelled'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Germany, after the minimum term, many contracts can now be ended with **one month’s notice**. Cancel in writing, for example by email or with the online form, and keep the confirmation.' },
        ],
        [
          { t: 'dialogue', title: 'Im Handyladen', lines: [
            { who: 'Verkäufer', s: 'Dieser Tarif kostet 15 Euro im Monat, mit 20 Gigabyte Datenvolumen.' },
            { who: 'Priya', s: 'Wie lange ist die Laufzeit?' },
            { who: 'Verkäufer', s: '24 Monate. Den Tarif gibt es aber auch monatlich kündbar, dann kostet er 18 Euro.' },
            { who: 'Priya', s: 'Muss ich am Anfang etwas bezahlen?' },
            { who: 'Verkäufer', s: 'Beim Vertrag mit 24 Monaten zahlen Sie einmalig 30 Euro. Beim monatlich kündbaren Tarif nicht.' },
            { who: 'Priya', s: 'Und was kostet es, wenn ich nach Indien telefoniere?' },
            { who: 'Verkäufer', s: 'Anrufe in Länder außerhalb der EU sind nicht im Preis enthalten. Dafür gibt es eine Zusatzoption.' },
            { who: 'Priya', s: 'Danke. Ich überlege es mir noch.' },
          ] },
          { t: 'examples', items: [
            { s: 'Was kostet es, **wenn** ich ins Ausland **telefoniere**?', n: 'After *wenn*, the verb goes to the end.' },
            { s: 'Ist der Router im Preis **enthalten**?', n: '*im Preis enthalten*: included in the price.' },
            { s: 'Können Sie mir sagen, **wann** ich frühestens kündigen **kann**?', n: 'An indirect question: the verb *kann* goes to the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['Wie lange ist die Laufzeit?', '24 Monate.'],
            ['Wie hoch ist die Grundgebühr?', '15 Euro im Monat.'],
            ['Wie lange ist die Kündigungsfrist?', 'Einen Monat vor dem Ende.'],
            ['Muss ich am Anfang etwas bezahlen?', 'Ja, einmalig 30 Euro.'],
            ['Ist der Router im Preis enthalten?', 'Nein, den müssen Sie extra kaufen.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Think about the conversation in the shop. Choose the right answer.', items: [
            { q: 'Der Tarif ohne lange Laufzeit kostet ___ im Monat.', o: ['18 Euro', '15 Euro', '30 Euro'], why: 'The monthly cancellable tariff is 18 euros.' },
            { q: 'Die 30 Euro bezahlt Priya ___.', o: ['einmal am Anfang', 'jeden Monat', 'am Ende des Vertrags'], why: '*einmalig*: only once, at the start, and only with the 24-month contract.' },
            { q: 'Anrufe nach Indien ___.', o: ['kosten extra', 'sind im Preis enthalten', 'sind nicht möglich'], why: 'Calls outside the EU are not included: there is an extra option.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the questions about a contract.', items: [
            { q: 'Was kostet es, wenn ich im Ausland ___? (telefonieren)', a: ['telefoniere'], why: 'After *wenn*, the verb goes to the end: *telefoniere*.' },
            { q: 'Können Sie mir sagen, wann ich ___ kann? (kündigen)', a: ['kündigen', 'kuendigen'], why: 'Indirect question: the infinitive *kündigen* comes before the modal verb *kann* at the end.' },
            { q: 'Sind die Anrufe im Preis ___? (included)', a: ['enthalten'], why: '*im Preis enthalten*: included in the price.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Gibt es eine Mindestlaufzeit?', why: 'A yes/no question: the verb *gibt* comes first.' },
            { a: 'Wie lange ist die Kündigungsfrist?', why: '*Wie lange* first, then the verb *ist*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'An offer and a cancellation',
      about: 'Read the small print of a phone offer and an email that ends a contract.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Unser Angebot: Handytarif Smart 20', md: '**20 GB Datenvolumen, Telefonie- und SMS-Flat in alle deutschen Netze, EU-Roaming inklusive**\n\nIn den ersten sechs Monaten nur 7,99 € im Monat, danach 14,99 € im Monat. Mindestlaufzeit 24 Monate. Einmaliger Anschlusspreis: 29,99 €. Nach der Mindestlaufzeit ist der Vertrag monatlich kündbar, mit einer Frist von einem Monat.\n\nWenn Sie Ihr Datenvolumen verbraucht haben, surfen Sie bis zum Ende des Monats langsamer weiter. Zusätzliches Datenvolumen können Sie in der App buchen. Anrufe in Länder außerhalb der EU sind nicht enthalten.\n\nIhre alte Rufnummer können Sie mitnehmen. Die SIM-Karte kommt per Post, normalerweise innerhalb von drei Werktagen.' },
          { t: 'text', md: 'Read the small print: the low price in big letters is often only for the first months.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the offer. True, false or not given?', items: [
            { q: 'Der Tarif kostet immer 7,99 Euro im Monat.', a: 'f', why: 'Only for the first six months, then 14.99 euros.' },
            { q: 'Man kann den Vertrag in den ersten 24 Monaten nicht monatlich kündigen.', a: 't', why: 'The minimum term is 24 months. Monthly cancellation is possible only after it.' },
            { q: 'Wenn das Datenvolumen weg ist, kann man nicht mehr surfen.', a: 'f', why: 'You can still use the internet, but more slowly: *langsamer weiter*.' },
            { q: 'Das Angebot gibt es nur für Studierende.', a: 'ng', why: 'The offer does not say who can get it.' },
            { q: 'Man bekommt die SIM-Karte mit der Post.', a: 't', why: '*Die SIM-Karte kommt per Post.*' },
          ] },
        ],
        [
          { t: 'reading', title: 'Kündigung meines Mobilfunkvertrags, Kundennummer 4471-0923', md: 'Sehr geehrte Damen und Herren,\n\nhiermit kündige ich meinen Mobilfunkvertrag fristgerecht zum nächstmöglichen Termin.\n\nBitte bestätigen Sie mir die Kündigung und das genaue Vertragsende schriftlich per E-Mail.\n\nIch möchte meine Rufnummer zu einem anderen Anbieter mitnehmen. Bitte schicken Sie mir dafür die notwendigen Informationen.\n\nBitte rufen Sie mich nicht wegen neuer Angebote an.\n\nMit freundlichen Grüßen\nPriya Sharma' },
          { t: 'ex', kind: 'choice', h: 'Read the email. Choose the right answer.', items: [
            { q: 'Wann soll der Vertrag enden?', o: ['so früh wie möglich, mit der richtigen Frist', 'heute', 'nach weiteren 24 Monaten'], why: '*fristgerecht zum nächstmöglichen Termin*: at the earliest date that respects the notice period.' },
            { q: 'Was möchte Priya behalten?', o: ['ihre Telefonnummer', 'ihren Vertrag', 'ihre alte SIM-Karte'], why: 'She wants to take her number to a new provider.' },
            { q: 'Warum schreibt Priya die Kundennummer in den Betreff?', o: ['Damit die Firma ihren Vertrag findet.', 'Weil sie eine neue Nummer möchte.', 'Weil sie ein neues Angebot bestellt.'], why: 'The customer number tells the company which contract it is.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Two useful phrases for every cancellation: *Hiermit kündige ich …* and *zum nächstmöglichen Termin*. Then you do not need to know the exact end date yourself.' },
          { t: 'ex', kind: 'spot', h: 'Tap the word that ends the contract and the words that give the date.', items: [
            { s: 'Hiermit [kündige] ich meinen Vertrag [zum] [nächstmöglichen] [Termin].', why: '*kündigen*: end the contract. *zum nächstmöglichen Termin*: at the earliest possible date.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Für meinen Lohn brauche ich ein ___.', o: ['Girokonto', 'Rezept', 'Aktenzeichen'], why: 'Your salary goes into a current account, a *Girokonto*.' },
      { q: 'Die Miete geht jeden Monat automatisch per ___ an den Vermieter.', o: ['Dauerauftrag', 'Kontoauszug', 'Geldautomat'], why: 'A *Dauerauftrag* repeats the same transfer.' },
      { q: 'Die kürzeste Zeit, die ein Vertrag läuft, heißt ___.', o: ['Mindestlaufzeit', 'Kündigungsfrist', 'Grundgebühr'], why: '*die Mindestlaufzeit*: the minimum term.' },
      { q: 'Einen einmaligen Preis bezahlt man ___.', o: ['nur einmal', 'jeden Monat', 'jedes Jahr'], why: '*einmalig*: only once.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Hiermit ___ ich meinen Vertrag. (kündigen)', a: ['kündige', 'kuendige'], why: '*Hiermit kündige ich …*: the usual first line.' },
      { q: 'Was kostet es, wenn ich mehr Datenvolumen ___? (brauchen)', a: ['brauche'], why: 'After *wenn*, the verb goes to the end.' },
      { q: 'Ist der Router im Preis ___?', a: ['enthalten'], why: '*im Preis enthalten*: included.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Eine TAN darf man am Telefon dem Bankmitarbeiter sagen.', a: 'f', why: 'Never give your PIN or a TAN to anyone.' },
      { q: 'Ein monatlich kündbarer Vertrag hat keine lange Mindestlaufzeit.', a: 't', why: 'You can end it every month.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Ich möchte ein Girokonto eröffnen.', why: '*möchte* second, the infinitive *eröffnen* at the end.' },
      { a: 'Bitte bestätigen Sie mir die Kündigung.', why: '*Bitte* + imperative with *Sie*; *mir* before *die Kündigung*.' },
    ] },
  ],
};
