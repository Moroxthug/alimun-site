// German A1 for study and exams, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Enrolling in a course',
  goal: 'Give your personal data at a school office, spell your name, say numbers and email addresses, and fill in a simple form.',
  art: 'cat',
  tags: { skills: ['vocabulary', 'speaking', 'writing', 'reading'], topics: ['personal-data', 'alphabet', 'spelling', 'numbers', 'forms', 'enrolment'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Name, Adresse, Geburtsdatum',
      about: 'Learn the words on a form and spell your name in German.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'When you start a course, you fill in a form: **das Formular** or **die Anmeldung**. The form asks for your personal data. Learn these words well. They are on almost every form, and they are also in A1 exams.' },
          { t: 'table', caption: 'Words on a form', explain: ['head', 'col1'], quiz: true, head: ['German', 'English'], rows: [
            ['der Familienname', 'family name'],
            ['der Vorname', 'first name'],
            ['die Straße, die Hausnummer', 'street, house number'],
            ['die Postleitzahl (PLZ)', 'postcode'],
            ['der Wohnort', 'town or city where you live'],
            ['das Geburtsdatum', 'date of birth'],
            ['das Geburtsland', 'country of birth'],
            ['die Muttersprache', 'first language'],
          ] },
        ],
        [
          { t: 'text', md: 'At the office, people often ask you to spell your name: *Wie schreibt man das?* or *Buchstabieren Sie bitte.* Some German letters sound different from English: **E** sounds like *ee*, **I** like *ee* in *see*, **J** is *jott*, **V** is *fau*, **W** is *weh*, **Z** is *tsett*. **ß** is called *Eszett*.' },
          { t: 'examples', items: [
            { s: 'Wie ist Ihr **Familienname**?', n: '*Ihr* with a capital I is the polite form of *dein*.' },
            { s: 'Mein Familienname ist Sharma. S, H, A, R, M, A.', n: 'You say each letter.' },
            { s: 'Wie ist Ihr **Vorname**?', n: 'The first name.' },
            { s: 'Mein Vorname ist Ravi.', n: '*mein* + masculine noun: *mein Vorname*.' },
            { s: 'Schreibt man das mit **W** oder mit **V**?', n: 'A yes/no question with *oder*: the verb comes first.' },
            { s: 'Müller, mit **Ü**.', n: '*Ü* is *U-Umlaut*. You can also write it as *ue*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Practise spelling your own name, your street and your city in German. You need it on the phone, at the office and in the speaking part of many exams.' },
        ],
        [
          { t: 'dialogue', title: 'At the school office', lines: [
            { who: 'Sekretärin', s: 'Guten Tag. Was kann ich für Sie tun?' },
            { who: 'Ravi', s: 'Guten Tag. Ich möchte einen Deutschkurs machen, A1.' },
            { who: 'Sekretärin', s: 'Gern. Wie ist Ihr Familienname?' },
            { who: 'Ravi', s: 'Sharma. S, H, A, R, M, A.' },
            { who: 'Sekretärin', s: 'Und Ihr Vorname?' },
            { who: 'Ravi', s: 'Ravi. R, A, V, I. Mit V.' },
            { who: 'Sekretärin', s: 'Danke. Und wo wohnen Sie?' },
            { who: 'Ravi', s: 'Gartenstraße 8, in Leipzig.' },
            { who: 'Sekretärin', s: 'Was ist Ihre Muttersprache?' },
            { who: 'Ravi', s: 'Hindi. Ich spreche auch Englisch.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Look at the dialogue. Match the word on the form and Ravi’s answer.', pairs: [
            ['Familienname', 'Sharma'],
            ['Vorname', 'Ravi'],
            ['Straße und Hausnummer', 'Gartenstraße 8'],
            ['Wohnort', 'Leipzig'],
            ['Muttersprache', 'Hindi'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which question goes with the answer?', items: [
            { q: '„Mein Vorname ist Elif.“', o: ['Wie ist Ihr Vorname?', 'Wo wohnen Sie?', 'Wie ist Ihre Adresse?'], why: '*Vorname* is the first name: *Elif*.' },
            { q: '„Ich wohne in Hamburg.“', o: ['Wo wohnen Sie?', 'Woher kommen Sie?', 'Wie heißen Sie?'], why: '*Wo wohnen Sie?* asks where you live now.' },
            { q: '„K, A, Y, A.“', o: ['Wie schreibt man das?', 'Was bedeutet das?', 'Wie sagt man das?'], why: 'You spell a word when someone asks *Wie schreibt man das?*' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which word is not personal data on a form?', items: [
            { o: ['Wörterbuch', 'Vorname', 'Wohnort', 'Postleitzahl'], why: 'A *Wörterbuch* is a book. The others are on a form.' },
            { o: ['Tafel', 'Familienname', 'Geburtsdatum', 'Muttersprache'], why: 'A *Tafel* is in the classroom. The others are personal data.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Numbers, emails and dates',
      about: 'Say phone numbers, email addresses and your age, and write dates in numbers.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Numbers from 21 to 99 are said **backwards**: first the one, then *und*, then the ten. 25 is *fünfundzwanzig* (five and twenty). Phone numbers are often said **one number at a time**: *null, eins, sieben, sechs …* On the phone people also say *zwo* for 2, so it does not sound like *drei*.' },
          { t: 'table', caption: 'Numbers', explain: ['head'], quiz: true, head: ['Number', 'In words'], rows: [
            ['0', 'null'],
            ['12', 'zwölf'],
            ['17', 'siebzehn'],
            ['21', 'einundzwanzig'],
            ['36', 'sechsunddreißig'],
            ['48', 'achtundvierzig'],
            ['99', 'neunundneunzig'],
            ['100', 'hundert'],
          ] },
        ],
        [
          { t: 'text', md: 'In an email address, **@** is said *at*, **.** is *Punkt* and **-** is *Strich* or *Bindestrich*. A date is written in numbers: **day, month, year**, with a point after the day and the month: *12.03.1998* is the twelfth of March 1998.' },
          { t: 'examples', items: [
            { s: 'Meine Telefonnummer ist 0176 345 678.', n: 'Say: *null, eins, sieben, sechs, drei, vier, fünf, sechs, sieben, acht*.' },
            { s: 'Meine E-Mail-Adresse ist ravi.sharma@example.com.', n: 'Say: *ravi Punkt sharma at example Punkt com*.' },
            { s: 'Ich bin siebenundzwanzig Jahre alt.', n: 'Your age: *Ich bin … Jahre alt.*' },
            { s: 'Mein Geburtsdatum ist der 12.03.1998.', n: 'On a form you write the date in numbers: day, month, year.' },
            { s: 'Das Kursbuch kostet fünfundzwanzig Euro.', n: 'Prices: the number, then *Euro*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Germany the day comes first and the month second. *03.12.* is the third of December, not the twelfth of March.' },
        ],
        [
          { t: 'dialogue', title: 'At the school office, part two', lines: [
            { who: 'Sekretärin', s: 'Wie ist Ihre Telefonnummer, Herr Sharma?' },
            { who: 'Ravi', s: 'Null, eins, sieben, sechs, drei, vier, fünf, sechs, sieben, acht.' },
            { who: 'Sekretärin', s: 'Und haben Sie eine E-Mail-Adresse?' },
            { who: 'Ravi', s: 'Ja: ravi Punkt sharma at example Punkt com.' },
            { who: 'Sekretärin', s: 'Danke. Wie alt sind Sie?' },
            { who: 'Ravi', s: 'Ich bin siebenundzwanzig.' },
            { who: 'Sekretärin', s: 'Gut. Der Kurs beginnt am Montag um neun Uhr. Das Kursbuch kostet fünfundzwanzig Euro.' },
            { who: 'Ravi', s: 'Kann ich mit Karte bezahlen?' },
            { who: 'Sekretärin', s: 'Ja, natürlich.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Ravi ist siebzehn Jahre alt.', a: 'f', why: 'He is *siebenundzwanzig*: 27, not 17 (*siebzehn*).' },
            { q: 'Ravi hat eine E-Mail-Adresse.', a: 't', why: 'He says: *ravi Punkt sharma at example Punkt com*.' },
            { q: 'Der Kurs beginnt am Montag.', a: 't', why: '*Der Kurs beginnt am Montag um neun Uhr.*' },
            { q: 'Ravi bezahlt mit Karte.', a: 't', why: 'He asks *Kann ich mit Karte bezahlen?* and the answer is *Ja*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the number in words.', items: [
            { q: '25 = ___', a: ['fünfundzwanzig', 'fuenfundzwanzig'], why: 'First the five, then *und*, then *zwanzig*.' },
            { q: '43 = ___', a: ['dreiundvierzig'], why: '*drei* + *und* + *vierzig*.' },
            { q: '16 = ___', a: ['sechzehn'], why: '*sechzehn*: the *s* of *sechs* goes away.' },
            { q: '70 = ___', a: ['siebzig'], why: '*siebzig*: the *en* of *sieben* goes away.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match what you hear and what you write.', pairs: [
            ['at', '@'],
            ['Punkt', '.'],
            ['Bindestrich', '-'],
            ['zwo', '2'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a registration form',
      about: 'Read a registration form and a short text, and find the mistakes.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Elif fills in a registration form for a German course. Read the form. Then read what Elif says about herself.' },
          { t: 'table', caption: 'Anmeldung: Deutschkurs A1', head: ['', ''], rows: [
            ['Familienname', 'Kaya'],
            ['Vorname', 'Elif'],
            ['Straße, Hausnummer', 'Lindenweg 14'],
            ['PLZ, Wohnort', '50667 Köln'],
            ['Geburtsdatum', '05.11.2001'],
            ['Geburtsland', 'Türkei'],
            ['Muttersprache', 'Türkisch'],
            ['Telefon', '0157 246 813'],
            ['E-Mail', 'elif.kaya@example.com'],
            ['Kurs', 'A1, Montag bis Freitag, 9 bis 12 Uhr'],
          ] },
        ],
        [
          { t: 'reading', title: 'Elif stellt sich vor', md: 'Hallo, ich heiße Elif Kaya. Ich komme aus der Türkei. Meine Muttersprache ist Türkisch, und ich spreche auch Englisch.\n\nIch wohne jetzt in Köln, im Lindenweg. Ich bin Studentin und lerne Deutsch. Mein Kurs ist jeden Tag von Montag bis Freitag. Er beginnt um neun Uhr.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the form and the text. True, false or not given?', items: [
            { q: 'Elif wohnt in Köln.', a: 't', why: 'The form says *50667 Köln*, and Elif says *Ich wohne jetzt in Köln*.' },
            { q: 'Elifs Familienname ist Elif.', a: 'f', why: '*Elif* is her first name (*Vorname*). Her family name is *Kaya*.' },
            { q: 'Elif spricht Türkisch und Englisch.', a: 't', why: '*Meine Muttersprache ist Türkisch, und ich spreche auch Englisch.*' },
            { q: 'Elif studiert Informatik.', a: 'ng', why: 'She is a student, but the text does not say what she studies.' },
            { q: 'Der Kurs ist am Nachmittag.', a: 'f', why: 'The course is from 9 to 12 Uhr, in the morning.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the form. Choose the right answer.', items: [
            { q: 'Elif hat Geburtstag. Welcher Monat ist das?', o: ['November', 'Mai', 'Januar'], why: '05.11.: the day comes first (5), then the month (11 = November).' },
            { q: 'Wie ist die Postleitzahl?', o: ['50667', '14', '2001'], why: 'The postcode is the number before the city: *50667 Köln*. 14 is the house number.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Ravi fills in a form, but each line has a mistake. Find and fix it.', items: [
            { s: 'Familienname: [Ravi]', a: ['Sharma'], why: '*Ravi* is his first name. His family name is *Sharma*.' },
            { s: 'Wohnort: [Gartenstraße]', a: ['Leipzig'], why: 'The *Wohnort* is the city. *Gartenstraße* is the street.' },
            { s: 'Muttersprache: [Indien]', a: ['Hindi'], why: '*Indien* is a country. The first language is *Hindi*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Die Postleitzahl ist ___.', o: ['eine Nummer', 'ein Name', 'ein Land'], why: 'The *Postleitzahl* is a number, for example *50667*.' },
      { q: 'Sie heißen Maria Costa. Was ist Ihr Familienname?', o: ['Costa', 'Maria', 'Maria Costa'], why: 'The *Familienname* is the family name: *Costa*.' },
      { q: '„Wie schreibt man das?“ Das bedeutet: ___', o: ['Buchstabieren Sie bitte.', 'Lesen Sie bitte.', 'Hören Sie bitte zu.'], why: 'You answer by spelling the word, letter by letter.' },
      { q: '14.02.2000: Der Monat ist ___.', o: ['Februar', 'April', 'Dezember'], why: 'Day first, then the month: 02 is February.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Ich bin zweiunddreißig Jahre ___.', a: ['alt'], why: 'Your age: *Ich bin … Jahre alt.*' },
      { q: '58 = ___', a: ['achtundfünfzig', 'achtundfuenfzig'], why: 'First *acht*, then *und*, then *fünfzig*.' },
      { q: 'Wie ___ Ihr Familienname? (sein)', a: ['ist'], why: '*Wie ist Ihr Familienname?*: *sein* with one thing is *ist*.' },
      { q: 'Wo ___ Sie? Ich wohne in Bonn. (wohnen)', a: ['wohnen'], why: 'With *Sie*, the verb has the infinitive form: *wohnen Sie*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Wie ist Ihre Telefonnummer?', why: 'Question word, verb, then the rest.' },
      { a: 'Ich möchte einen Deutschkurs machen.', why: '*möchte* is in second position, the infinitive *machen* at the end.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word on the form and an answer.', pairs: [
      ['Geburtsdatum', '05.11.2001'],
      ['PLZ', '50667'],
      ['E-Mail', 'elif.kaya@example.com'],
      ['Geburtsland', 'Türkei'],
    ] },
  ],
};
