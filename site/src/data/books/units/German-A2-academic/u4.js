// German A2 for study and exams, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Reading for information',
  goal: 'Find information in notices, adverts and short articles: times, prices and places, and the main idea of a text.',
  art: 'cactus',
  tags: { skills: ['reading', 'vocabulary'], topics: ['scanning', 'main-idea', 'notices', 'opening-hours', 'prices', 'abbreviations'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Scanning for details',
      about: 'Find times, prices and places in a notice quickly, without reading every word.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'When you need one detail, you do not read every word. Read the **question first**, then look only for the right number, day or place. This is called scanning. Notices are short and use many abbreviations.' },
          { t: 'table', caption: 'Abbreviations on notices', explain: ['head', 'col2'], quiz: true, head: ['Short', 'Long', 'Meaning'], rows: [
            ['Mo–Fr', 'Montag bis Freitag', 'Monday to Friday'],
            ['Sa / So', 'Samstag / Sonntag', 'Saturday / Sunday'],
            ['tgl.', 'täglich', 'every day'],
            ['EG', 'Erdgeschoss', 'ground floor'],
            ['OG', 'Obergeschoss', 'upper floor'],
            ['ca.', 'circa', 'about'],
            ['max.', 'maximal', 'not more than'],
            ['geschl.', 'geschlossen', 'closed'],
          ] },
        ],
        [
          { t: 'reading', title: 'Universitätsbibliothek: Öffnungszeiten', md: 'Mo–Fr: 8:00–22:00 Uhr\nSa: 10:00–18:00 Uhr\nSo und an Feiertagen: geschlossen\n\nAusleihe und Information im EG, Lesesaal im 1. OG. Gruppenräume kann man online reservieren, max. 3 Stunden pro Tag.' },
          { t: 'reading', title: 'Mensa am Campus: Preise', md: 'Tagesgericht: Studierende 3,20 €, Gäste 5,90 €\nVegetarisches Gericht: Studierende 2,80 €, Gäste 5,40 €\nKaffee: 1,30 €\n\nGeöffnet Mo–Fr 11:15–14:30 Uhr.' },
          { t: 'tip', art: 'owl', md: 'German prices use a comma: *3,20 €* is *drei Euro zwanzig*. *die Mensa* is the canteen at a university, and *Studierende* are students.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the question first. Then find the answer in the notices.', items: [
            { q: 'Wann ist die Bibliothek am Samstag geöffnet?', o: ['von 10 bis 18 Uhr', 'von 8 bis 22 Uhr', 'gar nicht'], why: '*Sa: 10:00–18:00 Uhr.*' },
            { q: 'Wo ist der Lesesaal?', o: ['im ersten Stock', 'im Erdgeschoss', 'in der Mensa'], why: '*Lesesaal im 1. OG*: on the first floor.' },
            { q: 'Kann man am Sonntag in der Bibliothek lernen?', o: ['Nein, sie ist geschlossen.', 'Ja, von 10 bis 18 Uhr.', 'Ja, aber nur im Lesesaal.'], why: '*So und an Feiertagen: geschlossen.*' },
            { q: 'Wie viel kostet das vegetarische Gericht für Studierende?', o: ['2,80 €', '5,40 €', '3,20 €'], why: 'Vegetarian dish, students: *2,80 €*.' },
            { q: 'Wie lange kann man einen Gruppenraum am Tag haben?', o: ['höchstens drei Stunden', 'den ganzen Tag', 'genau eine Stunde'], why: '*max. 3 Stunden pro Tag*: not more than three hours.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the abbreviation and the word.', pairs: [
            ['tgl.', 'täglich'],
            ['EG', 'Erdgeschoss'],
            ['ca.', 'circa'],
            ['max.', 'maximal'],
            ['So', 'Sonntag'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: '3,20 € = drei Euro ___', a: ['zwanzig'], why: 'The number after the comma is the cents: *zwanzig*.' },
            { q: '1,30 € = ein Euro ___', a: ['dreißig', 'dreissig'], why: '30 cents: *dreißig*.' },
            { q: 'Am Sonntag ist die Bibliothek ___. (geschl.)', a: ['geschlossen'], why: '*geschl.* is short for *geschlossen*.' },
            { q: 'Die Ausleihe ist im ___. (EG)', a: ['Erdgeschoss'], why: '*EG*: *Erdgeschoss*, the ground floor.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'The main idea of a short text',
      about: 'Find out what a short text is about from its title and first sentences.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Often you only need to know **what a text is about**: *Worum geht es?* Read the title and the first sentence carefully. The other sentences usually give details. You do not need to understand every word.' },
          { t: 'reading', title: 'Bibliothek bis Mitternacht', md: 'Ab dem 1. März hat die Bibliothek längere Öffnungszeiten. Studierende können dann von Montag bis Freitag bis Mitternacht lernen. Das haben sich viele Studierende gewünscht, besonders in der Prüfungszeit.' },
          { t: 'reading', title: 'Sprachcafé', md: 'Lernen Sie Deutsch mit anderen! Unser Sprachcafé trifft sich jeden Donnerstag um 18 Uhr in der Cafeteria. Hier können Sie in kleinen Gruppen Deutsch sprechen. Die Teilnahme ist kostenlos, eine Anmeldung ist nicht nötig.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What is the main idea of each text?', items: [
            { q: 'Bibliothek bis Mitternacht', o: ['Die Bibliothek ist bald länger geöffnet.', 'Die Bibliothek ist im März geschlossen.', 'Die Prüfungen sind im März.'], why: 'The first sentence says it: *längere Öffnungszeiten*, longer opening hours.' },
            { q: 'Sprachcafé', o: ['Man kann jede Woche zusammen Deutsch sprechen.', 'Die Cafeteria hat neue Preise.', 'Man muss sich für einen Deutschkurs anmelden.'], why: 'The text invites you to speak German in a group every Thursday.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Wrong answers often use words from the text, like *März* or *anmelden*, but say something different. Check the meaning, not only the words.' },
        ],
        [
          { t: 'reading', title: 'Eingang geschlossen', md: 'Liebe Studierende, wegen Bauarbeiten ist der Haupteingang bis Ende April geschlossen. Bitte benutzen Sie den Eingang an der Seite, neben dem Parkplatz. Vielen Dank für Ihr Verständnis.' },
          { t: 'reading', title: 'Tag der offenen Tür', md: 'Am Samstag, dem 14. Juni, ist Tag der offenen Tür an der Hochschule. Alle Interessierten können Vorlesungen besuchen, mit Studierenden sprechen und die Labore ansehen. Das Programm beginnt um 10 Uhr.' },
          { t: 'ex', kind: 'choice', h: 'What is the main idea of each text?', items: [
            { q: 'Eingang geschlossen', o: ['Man muss bis Ende April einen anderen Eingang benutzen.', 'Der Parkplatz ist bis Ende April geschlossen.', 'Die Hochschule ist im April geschlossen.'], why: 'The main entrance is closed, so you use the side entrance.' },
            { q: 'Tag der offenen Tür', o: ['An einem Samstag kann man die Hochschule besuchen und kennenlernen.', 'Die Hochschule sucht neue Lehrkräfte.', 'Am Samstag gibt es keine Vorlesungen.'], why: 'An open day: visitors can see lectures and labs and talk to students.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Details from the four texts. True or false?', items: [
            { q: 'Ab März kann man von Montag bis Freitag bis 24 Uhr in der Bibliothek lernen.', a: 't', why: '*bis Mitternacht*: until midnight, 24 Uhr.' },
            { q: 'Für das Sprachcafé muss man sich anmelden.', a: 'f', why: '*eine Anmeldung ist nicht nötig*.' },
            { q: 'Der Eingang an der Seite ist neben dem Parkplatz.', a: 't', why: '*den Eingang an der Seite, neben dem Parkplatz*.' },
            { q: 'Das Programm am Tag der offenen Tür beginnt am Nachmittag.', a: 'f', why: 'It begins *um 10 Uhr*, in the morning.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: notices on a school board',
      about: 'Read four notices and find the right one for each person, like in an exam task.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Schools and universities have a board for notices, *das Schwarze Brett*. People look for study partners, sell books or look for a room there.' },
          { t: 'reading', title: 'Am Schwarzen Brett', md: '**A** Lerngruppe sucht dich! Wir sind vier Leute aus dem Abendkurs und lernen jeden Samstag von 10 bis 12 Uhr in der Bibliothek für die A2-Prüfung im Juli. Schreib einfach eine Nachricht an Hamid, Kurs A2-3.\n\n**B** Verkaufe mein Kursbuch für A2 mit Übungsbuch, fast neu, nur 12 €. Eva, Raum 214, am Dienstag und Donnerstag nach dem Kurs.\n\n**C** Zimmer frei! Ab 1. Oktober ist in unserer WG ein Zimmer frei: 14 m², mit dem Rad 10 Minuten zur Uni, 390 € warm. Wir suchen eine ruhige Person.\n\n**D** Achtung: Der Computerraum 012 ist vom 3. bis 7. März geschlossen. In dieser Woche können Sie in der Bibliothek im EG drucken.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Which notice is right for each person?', pairs: [
            ['Olga möchte am Wochenende mit anderen für die Prüfung lernen.', 'Text A'],
            ['Ravi braucht ein Buch für den A2-Kurs, aber er hat wenig Geld.', 'Text B'],
            ['Nadia sucht ab Herbst eine Wohnung oder ein Zimmer.', 'Text C'],
            ['Jan muss am 5. März seine Hausarbeit drucken.', 'Text D'],
          ] },
          { t: 'tip', art: 'owl', md: 'In exam tasks like this, read the people first and underline the key words: *am Wochenende*, *wenig Geld*, *ab Herbst*. Then look for them in the notices.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the notices again. True, false or not given?', items: [
            { q: 'Die Lerngruppe trifft sich am Sonntag.', a: 'f', why: 'They meet *jeden Samstag*.' },
            { q: 'Das Kursbuch ist ganz neu.', a: 'f', why: '*fast neu*: almost new, not completely new.' },
            { q: 'Das Zimmer kostet 390 Euro mit Heizung.', a: 't', why: '*warm* means heating is included in the rent.' },
            { q: 'In der WG wohnen drei Personen.', a: 'ng', why: 'The notice does not say how many people live in the flat.' },
            { q: 'Im März kann man eine Woche lang nicht im Computerraum drucken.', a: 't', why: 'Room 012 is closed from 3 to 7 March.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Scan the sentence. Tap the numbers that are prices.', items: [
            { s: 'Das Buch kostet nur [12] €, das Zimmer [390] € im Monat. Das Zimmer hat 14 m² und ist 10 Minuten von der Uni entfernt.', why: 'Prices come with *€*. 14 is the size and 10 is the time.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Öffnungszeiten: Mo–Fr 9–17 Uhr. Wann ist das Büro am Mittwoch geöffnet?', o: ['von 9 bis 17 Uhr', 'gar nicht', 'nur am Vormittag'], why: '*Mo–Fr* includes Wednesday.' },
      { q: 'Kaffee: 1,50 €. Wie sagt man den Preis?', o: ['ein Euro fünfzig', 'fünfzehn Euro', 'ein Euro fünf'], why: 'The comma separates euros and cents: *ein Euro fünfzig*.' },
      { q: 'Das Sekretariat ist im EG. Wo ist es?', o: ['im Erdgeschoss', 'im ersten Stock', 'im Keller'], why: '*EG*: *Erdgeschoss*.' },
      { q: 'Was liest man zuerst, wenn man eine Information sucht?', o: ['die Frage', 'den ganzen Text', 'nur das letzte Wort'], why: 'Read the question first, then scan for the detail.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the full word.', items: [
      { q: 'tgl. = ___', a: ['täglich', 'taeglich'], why: '*täglich*: every day.' },
      { q: 'max. = ___', a: ['maximal'], why: '*maximal*: not more than.' },
      { q: 'Die Teilnahme ist ___. Man bezahlt nichts.', a: ['kostenlos', 'gratis', 'frei', 'umsonst'], why: '*kostenlos* means free.' },
      { q: 'Das Zimmer kostet 400 € ___, mit Heizung und Nebenkosten.', a: ['warm'], why: '*warm*: the rent with heating and service charges.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'Read the notice. True or false?', items: [
      { q: '„Wegen Bauarbeiten ist der Haupteingang bis Ende Mai geschlossen.“ Man kann im Mai nicht durch den Haupteingang gehen.', a: 't', why: '*bis Ende Mai*: the whole of May.' },
      { q: '„Sprachcafé: jeden Donnerstag, 18 Uhr. Anmeldung nicht nötig.“ Man muss sich vorher anmelden.', a: 'f', why: '*nicht nötig*: not necessary.' },
      { q: '„Verkaufe Wörterbuch, fast neu, 8 €.“ Das Wörterbuch ist alt und kaputt.', a: 'f', why: '*fast neu*: almost new.' },
      { q: '„Lesesaal im 2. OG.“ Der Lesesaal ist im zweiten Stock.', a: 't', why: '*OG* is the upper floor: *2. OG*, the second floor.' },
    ] },
  ],
};
