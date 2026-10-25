// German B1 for moving abroad, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Paperwork and offices',
  goal: 'Deal with offices, appointments and formal letters after you arrive.',
  art: 'cat',
  tags: { skills: ['reading', 'writing', 'speaking', 'vocabulary'], topics: ['offices', 'appointments', 'formal-letter', 'documents'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Appointments at an office',
      about: 'Make, move and cancel an appointment, and know which documents to bring.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In Germany you usually need an appointment, a **Termin**, for an office such as the *Bürgeramt* or the *Ausländerbehörde*. You often book it online, sometimes by phone. If you cannot come, move or cancel it: other people are waiting for a free date.' },
          { t: 'table', caption: 'Appointment verbs', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['einen Termin vereinbaren', 'to make an appointment'],
            ['einen Termin verschieben', 'to move an appointment to another date'],
            ['einen Termin absagen', 'to cancel an appointment'],
            ['einen Termin bestätigen', 'to confirm an appointment'],
            ['einen Termin wahrnehmen', 'to go to an appointment (formal)'],
          ] },
          { t: 'tip', art: 'owl', md: 'Letters and websites often say *Bitte bringen Sie … mit*: please bring. Bring the **original** documents and, to be safe, a copy of each.' },
        ],
        [
          { t: 'dialogue', title: 'Am Telefon mit dem Bürgeramt', lines: [
            { who: 'Herr Schneider', s: 'Bürgeramt Mitte, Schneider, guten Tag.' },
            { who: 'Kwame', s: 'Guten Tag, mein Name ist Kwame Mensah. Ich habe am Donnerstag um 9 Uhr einen Termin, aber leider kann ich nicht kommen. Könnte ich den Termin verschieben?' },
            { who: 'Herr Schneider', s: 'Kein Problem. Worum geht es denn?' },
            { who: 'Kwame', s: 'Um meine Anmeldung. Ich bin letzte Woche umgezogen.' },
            { who: 'Herr Schneider', s: 'Ich hätte am Montag um halb elf noch einen Termin frei. Passt Ihnen das?' },
            { who: 'Kwame', s: 'Ja, das passt gut. Welche Unterlagen muss ich mitbringen?' },
            { who: 'Herr Schneider', s: 'Ihren Reisepass, das ausgefüllte Anmeldeformular und die Wohnungsgeberbestätigung von Ihrem Vermieter.' },
            { who: 'Kwame', s: 'Vielen Dank. Dann bis Montag.' },
          ] },
          { t: 'text', md: '*Worum geht es?* asks what the appointment is about. *Passt Ihnen das?* asks if the time is good for you: *passen* takes the dative, *Ihnen*.' },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences from phone calls with an office.', items: [
            { q: 'Ich ___ am Montag um 9 Uhr einen Termin. (haben)', a: ['habe'], why: '*ich habe*: you already have an appointment.' },
            { q: 'Passt ___ Dienstag um 14 Uhr? (Sie, Dativ)', a: ['Ihnen'], why: '*passen* takes the dative: *Passt Ihnen …?*' },
            { q: 'Welche Unterlagen muss ich ___? (mitbringen)', a: ['mitbringen'], why: 'After the modal verb *muss*, the infinitive goes to the end and stays together: *mitbringen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the phone call. True or false?', items: [
            { q: 'Kwame möchte seinen Termin absagen.', a: 'f', why: 'He wants a new date: *Könnte ich den Termin verschieben?*' },
            { q: 'Der neue Termin ist am Montag um 10:30 Uhr.', a: 't', why: '*halb elf* is 10:30.' },
            { q: 'Kwame braucht ein Formular von seinem Vermieter.', a: 't', why: 'The *Wohnungsgeberbestätigung* comes from the landlord.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right verb.', items: [
            { q: 'Ich bin krank und kann nicht kommen. Ich muss den Termin leider ___.', o: ['absagen', 'vereinbaren', 'bestätigen'], why: 'You cannot come and want no new date: *absagen*, to cancel.' },
            { q: 'Ich brauche einen Termin. Wie kann ich einen Termin ___?', o: ['vereinbaren', 'absagen', 'verschieben'], why: 'You do not have one yet: *einen Termin vereinbaren*.' },
            { q: 'Donnerstag passt mir nicht. Kann ich den Termin auf Freitag ___?', o: ['verschieben', 'absagen', 'wahrnehmen'], why: 'Another date: *verschieben auf* + accusative.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Documents you often need', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['der Reisepass', 'passport'],
            ['das biometrische Passfoto', 'a passport photo that follows the official rules'],
            ['die Meldebescheinigung', 'proof of your registered address, after the Anmeldung'],
            ['der Mietvertrag', 'rental contract'],
            ['der Arbeitsvertrag', 'employment contract'],
            ['die beglaubigte Übersetzung', 'certified translation of a document'],
          ] },
          { t: 'ex', kind: 'match', h: 'Match the document and what it shows.', pairs: [
            ['der Reisepass', 'wer Sie sind'],
            ['die Meldebescheinigung', 'wo Sie gemeldet sind'],
            ['der Mietvertrag', 'wie viel Miete Sie zahlen'],
            ['der Arbeitsvertrag', 'wo Sie arbeiten'],
            ['die Geburtsurkunde', 'wann und wo Sie geboren sind'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Understanding a formal letter',
      about: 'The parts and phrases of an official letter, and a polite reply.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Official letters in German follow a fixed pattern. Look first at the **Betreff**, the subject line in bold, and for a **Frist**, a deadline. The **Aktenzeichen** is your reference number: write it in every reply.' },
          { t: 'table', caption: 'Words in official letters', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['der Betreff', 'subject line'],
            ['das Aktenzeichen', 'reference number of your case'],
            ['die Frist', 'deadline'],
            ['die Unterlagen (Pl.)', 'documents, papers'],
            ['Unterlagen einreichen', 'to hand in or send documents'],
            ['der Antrag', 'application'],
            ['der Bescheid', 'official decision in writing'],
            ['die Anlage', 'something you add to a letter, an enclosure'],
          ] },
        ],
        [
          { t: 'text', md: 'Offices often write in a formal style with the **imperative with Sie** and the **passive**. Separable verbs split: *Bitte reichen Sie … ein*.' },
          { t: 'examples', items: [
            { s: 'Bitte **reichen** Sie die fehlenden Unterlagen bis zum 15. Mai **ein**.', n: '*einreichen* is separable: *reichen* first, *ein* at the end. *bis zum 15. Mai*: at the latest on 15 May.' },
            { s: 'Ihr Antrag **kann** erst **bearbeitet werden**, wenn alle Unterlagen vorliegen.', n: 'Passive with a modal verb: they can only work on it when they have everything.' },
            { s: 'Bitte melden Sie sich **innerhalb von zwei Wochen**.', n: '*innerhalb von*: within.' },
            { s: '**Anbei** sende ich Ihnen eine Kopie meines Arbeitsvertrags.', n: 'A typical first line in a reply: *anbei* means attached or enclosed.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Take every *Frist* seriously. If you cannot send everything in time, write **before** the deadline, say why and ask for more time: *Ich bitte um Verlängerung der Frist*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the letter want from you?', items: [
            { q: 'Bitte reichen Sie die Unterlagen bis zum 3. Juni ein.', o: ['Send the documents by 3 June at the latest.', 'Come to the office on 3 June.', 'You will get the documents on 3 June.'], why: '*einreichen*: hand in or send. *bis zum*: by, at the latest.' },
            { q: 'Bitte geben Sie bei Antworten immer das Aktenzeichen an.', o: ['Write your reference number in every reply.', 'Write the date of your appointment.', 'Answer only by phone.'], why: '*das Aktenzeichen*: the reference number of your case.' },
            { q: 'Ihr Antrag wird zurzeit bearbeitet.', o: ['They are working on your application now.', 'Your application is complete and accepted.', 'Your application was lost.'], why: 'Passive in the present: *wird bearbeitet*, is being worked on.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences from official letters.', items: [
            { q: 'Bitte reichen Sie die Unterlagen bis zum 10. April ___. (einreichen)', a: ['ein'], why: 'Separable verb: the prefix *ein* goes to the end.' },
            { q: 'Bitte melden Sie sich ___ von zwei Wochen.', a: ['innerhalb'], why: '*innerhalb von*: within.' },
            { q: '___ sende ich Ihnen die Kopie meines Passes.', a: ['Anbei'], why: '*Anbei sende ich Ihnen …*: I am sending you … attached.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build sentences for a reply to an office.', items: [
            { a: 'Ich bitte um Verlängerung der Frist.', why: '*bitten um* + accusative: ask for something.' },
            { a: 'Könnten Sie mir die Frist verlängern?', why: 'A polite yes/no question: *könnten* first, the infinitive *verlängern* at the end.' },
            { a: 'Anbei sende ich Ihnen die fehlenden Unterlagen.', why: '*Anbei* first, so the verb *sende* comes next and then the subject *ich*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the documents the office asks for.', items: [
            { s: 'Bitte reichen Sie Ihren [Arbeitsvertrag] und Ihre [Meldebescheinigung] bis zum 30. September ein.', why: 'The *Arbeitsvertrag* shows your job, the *Meldebescheinigung* your address.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A letter and a reply',
      about: 'Read a letter asking for documents and the answer to it.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Verlängerung Ihrer Aufenthaltserlaubnis – fehlende Unterlagen', md: 'Ausländerbehörde, Aktenzeichen: 31-AB-2648\n\nSehr geehrte Frau Okafor,\n\nwir haben Ihren Antrag auf Verlängerung Ihrer Aufenthaltserlaubnis vom 2. März erhalten. Leider sind Ihre Unterlagen nicht vollständig. Wir können Ihren Antrag erst bearbeiten, wenn alle Unterlagen vorliegen.\n\nBitte reichen Sie bis zum 10. April folgende Unterlagen ein: eine Kopie Ihres aktuellen Arbeitsvertrags, Ihre Gehaltsabrechnungen der letzten drei Monate und einen Nachweis über Ihre Krankenversicherung. Sie können die Unterlagen per Post schicken oder in unserem Online-Portal hochladen. Bitte geben Sie dabei immer das Aktenzeichen an.\n\nIhre jetzige Aufenthaltserlaubnis ist bis zum 30. April gültig. Wenn Unterlagen fehlen, kann es bei der Bearbeitung zu Verzögerungen kommen.\n\nFür Fragen erreichen Sie uns montags bis donnerstags von 8 bis 12 Uhr unter der oben genannten Telefonnummer.\n\nMit freundlichen Grüßen\nJonas Hoffmann' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the letter. True, false or not given?', items: [
            { q: 'Frau Okafor hat im März einen Antrag gestellt.', a: 't', why: '*Ihren Antrag … vom 2. März*.' },
            { q: 'Die Behörde hat schon alle Unterlagen.', a: 'f', why: '*Leider sind Ihre Unterlagen nicht vollständig.*' },
            { q: 'Frau Okafor muss die Unterlagen persönlich vorbeibringen.', a: 'f', why: 'She can send them by post or upload them: *per Post schicken oder … hochladen*.' },
            { q: 'Die Behörde braucht drei Gehaltsabrechnungen.', a: 't', why: '*Gehaltsabrechnungen der letzten drei Monate*: one for each month.' },
            { q: 'Frau Okafor arbeitet als Krankenschwester.', a: 'ng', why: 'The letter mentions her employment contract, but not her job.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Aktenzeichen 31-AB-2648 – fehlende Unterlagen', md: 'Sehr geehrter Herr Hoffmann,\n\nvielen Dank für Ihr Schreiben vom 18. März. Anbei sende ich Ihnen eine Kopie meines Arbeitsvertrags und einen Nachweis über meine Krankenversicherung.\n\nMeine Gehaltsabrechnungen für Januar und Februar finden Sie ebenfalls in der Anlage. Die Abrechnung für März bekomme ich leider erst Anfang April von meinem Arbeitgeber. Ich schicke sie Ihnen sofort, wenn ich sie habe, spätestens am 5. April.\n\nKönnten Sie mir bitte kurz bestätigen, dass die Unterlagen angekommen sind?\n\nMit freundlichen Grüßen\nChioma Okafor\n\nAnlagen: Arbeitsvertrag (Kopie), Nachweis Krankenversicherung, Gehaltsabrechnungen Januar und Februar' },
          { t: 'ex', kind: 'choice', h: 'Read the reply. Choose the right answer.', items: [
            { q: 'Welche Unterlage fehlt noch?', o: ['die Gehaltsabrechnung für März', 'der Arbeitsvertrag', 'der Nachweis über die Krankenversicherung'], why: 'She gets the March payslip only at the beginning of April.' },
            { q: 'Warum schreibt Frau Okafor das Aktenzeichen in den Betreff?', o: ['Damit die Behörde ihren Antrag schnell findet.', 'Weil es ihre Telefonnummer ist.', 'Weil sie einen neuen Antrag stellt.'], why: 'The reference number tells the office which case the letter is about.' },
            { q: 'Worum bittet Frau Okafor am Ende?', o: ['um eine kurze Bestätigung', 'um einen neuen Termin', 'um eine längere Aufenthaltserlaubnis'], why: '*Könnten Sie mir bitte kurz bestätigen, dass die Unterlagen angekommen sind?*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich kann am Freitag nicht. Kann ich den Termin auf Montag ___?', o: ['verschieben', 'absagen', 'einreichen'], why: 'Another date: *verschieben auf*.' },
      { q: 'Nach der Anmeldung bekommen Sie eine ___.', o: ['Meldebescheinigung', 'Geburtsurkunde', 'Gehaltsabrechnung'], why: 'The *Meldebescheinigung* shows your registered address.' },
      { q: 'Die ___ ist der letzte Tag, an dem Sie etwas schicken können.', o: ['Frist', 'Anlage', 'Betreff'], why: '*die Frist*: the deadline.' },
      { q: 'Die Nummer Ihres Falls bei einer Behörde heißt ___.', o: ['Aktenzeichen', 'Bescheid', 'Antrag'], why: '*das Aktenzeichen*: your reference number.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Passt ___ Mittwoch um 11 Uhr? (Sie, Dativ)', a: ['Ihnen'], why: '*passen* + dative: *Passt Ihnen …?*' },
      { q: 'Bitte reichen Sie den Mietvertrag bis zum 1. Juli ___.', a: ['ein'], why: '*einreichen*: *ein* goes to the end.' },
      { q: '___ sende ich Ihnen meine Gehaltsabrechnungen. (attached)', a: ['Anbei'], why: '*Anbei sende ich Ihnen …*' },
      { q: 'Ich bitte ___ Verlängerung der Frist.', a: ['um'], why: '*bitten um*: ask for.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Könnte ich den Termin verschieben?', why: 'Polite question: *könnte* first, the infinitive at the end.' },
      { a: 'Welche Unterlagen muss ich mitbringen?', why: 'Question word first, *muss* second, *mitbringen* at the end.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'In einem Brief an eine Behörde schreibt man das Aktenzeichen in den Betreff.', a: 't', why: 'Then they find your case quickly.' },
      { q: 'Wenn man eine Frist nicht schafft, schreibt man am besten nach der Frist.', a: 'f', why: 'Write **before** the deadline and ask for more time.' },
    ] },
  ],
};
