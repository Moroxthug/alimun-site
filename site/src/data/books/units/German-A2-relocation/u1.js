// German A2 for moving abroad, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Arriving',
  goal: 'Introduce yourself at an office, spell your name and fill in a simple form.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['personal-details', 'alphabet', 'numbers-dates', 'forms', 'formal-sie', 'registration'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Spelling your name',
      about: 'Spell your name and say your date of birth, phone number and address.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'At an office or on the phone, people often ask you to spell your name: *Wie schreibt man das?* Most German letters sound similar to English, but some are very different. Learn these first.' },
          { t: 'table', caption: 'Letters that sound different', explain: ['head'], quiz: true, head: ['Letter', 'Name in German'], rows: [
            ['E', 'eh'],
            ['I', 'ih'],
            ['J', 'jott'],
            ['V', 'fau'],
            ['W', 'weh'],
            ['Y', 'üpsilon'],
            ['Z', 'tsett'],
            ['Ä', 'a-Umlaut'],
            ['ß', 'Eszett'],
          ] },
          { t: 'tip', art: 'owl', md: 'For two letters together, say *Doppel*: *Doppel-D*, *Doppel-L*. On the phone, people often add a word for a letter so it is clear: *D wie Dora*, *M wie Martha*.' },
        ],
        [
          { t: 'dialogue', title: 'Am Telefon', lines: [
            { who: 'Herr Graf', s: 'Wie ist Ihr Name, bitte?' },
            { who: 'Lina', s: 'Lina Haddad.' },
            { who: 'Herr Graf', s: 'Wie schreibt man Haddad?' },
            { who: 'Lina', s: 'H, A, Doppel-D, A, D.' },
            { who: 'Herr Graf', s: 'Danke. Und wann sind Sie geboren?' },
            { who: 'Lina', s: 'Am 9. Oktober 1994.' },
            { who: 'Herr Graf', s: 'Wie ist Ihre Telefonnummer?' },
            { who: 'Lina', s: '0176 52 38 41 90.' },
            { who: 'Herr Graf', s: 'Und wo wohnen Sie?' },
            { who: 'Lina', s: 'In der Bergstraße 7, in 10115 Berlin.' },
          ] },
          { t: 'text', md: 'Germans write a date as day, month, year: **09.10.1994**. Years before 2000 are said in hundreds: 1994 is *neunzehnhundertvierundneunzig*. From 2000 on, say *zweitausend*: 2005 is *zweitausendfünf*.' },
          { t: 'examples', items: [
            { s: 'Ich bin am **9. Oktober 1994** geboren.', n: 'Say *am neunten Oktober*. The word *geboren* comes at the end.' },
            { s: 'Meine Telefonnummer ist **0176 52 38 41 90**.', n: 'Say the digits one by one or in pairs: *null eins sieben sechs, zweiundfünfzig* …' },
            { s: 'Ich wohne **in der** Bergstraße 7.', n: '*in der* + street name, then the house number.' },
            { s: 'Ich komme **aus** Syrien. Ich bin Syrerin.', n: '*aus* + country. Many nationality words have a form for men and one for women: *Syrer*, *Syrerin*.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'On the phone, people often say *zwo* instead of *zwei*, so that it does not sound like *drei*. A German postcode, the *Postleitzahl*, has five digits and comes before the town: *10115 Berlin*.' },
          { t: 'ex', kind: 'match', h: 'Match the letter and its German name.', pairs: [
            ['J', 'jott'],
            ['V', 'fau'],
            ['W', 'weh'],
            ['Z', 'tsett'],
            ['Y', 'üpsilon'],
            ['ß', 'Eszett'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Geburtsdatum: 11.04.1988. Sie ist im ___ geboren.', o: ['April', 'November', 'Januar'], why: 'Day, month, year: 11 is the day and 04 is the month, April.' },
            { q: '1988 sagt man so: ___', o: ['neunzehnhundertachtundachtzig', 'neunzehnhundertachtzigacht', 'achtzehnhundertachtundachtzig'], why: 'Years before 2000: *neunzehnhundert* + the last two numbers, with the ones before the tens: *achtundachtzig*.' },
            { q: 'Am Telefon sagt man oft ___ für die Zahl 2.', o: ['zwo', 'zwanzig', 'zweite'], why: '*zwo* does not sound like *drei*, so it is clearer on the phone.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Wie ___ man das? (schreiben)', a: ['schreibt'], why: '*man* takes the same verb form as *er* and *sie*: *man schreibt*.' },
            { q: 'Ich ___ am 9. Oktober 1994 geboren. (sein)', a: ['bin'], why: 'Say your birthday with *sein*: *ich bin … geboren*.' },
            { q: 'Ich komme ___ Brasilien.', a: ['aus'], why: 'Your country of origin: *aus* + country.' },
            { q: 'Ich wohne ___ der Bergstraße 7.', a: ['in'], why: 'For a street: *in der … straße*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Filling in a form',
      about: 'The words on a German form, and polite questions with Sie at a counter.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'Soon after you arrive, you fill in many forms: at the citizens’ office (*Bürgeramt*), at the bank, at the doctor’s. A form is a **Formular**. These words are on almost every one.' },
          { t: 'table', caption: 'Words on a form', explain: ['head', 'col1'], quiz: true, head: ['On the form', 'Meaning'], rows: [
            ['Vorname', 'first name'],
            ['Nachname / Familienname', 'surname'],
            ['Geburtsname', 'surname at birth'],
            ['Geburtsdatum', 'date of birth'],
            ['Geburtsort', 'place of birth'],
            ['Staatsangehörigkeit', 'nationality'],
            ['Familienstand', 'marital status'],
            ['Anschrift', 'address'],
            ['Unterschrift', 'signature'],
          ] },
          { t: 'tip', art: 'owl', md: 'For *Familienstand* you write *ledig* (single), *verheiratet* (married), *geschieden* (divorced) or *verwitwet* (widowed). *Bitte in Druckbuchstaben* means: please write in capital letters.' },
        ],
        [
          { t: 'text', md: 'At an office, people say **Sie**. In a question with a question word, the verb comes **second**: *Wie ist Ihr Name?* In a yes/no question, the verb comes **first**: *Sind Sie verheiratet?* The polite *Ihr* and *Ihre* (your) start with a capital letter.' },
          { t: 'dialogue', title: 'Im Bürgeramt', lines: [
            { who: 'Frau Lorenz', s: 'Guten Morgen. Haben Sie einen Termin?' },
            { who: 'Herr Mensah', s: 'Ja, um 9.40 Uhr. Ich möchte meine Wohnung anmelden.' },
            { who: 'Frau Lorenz', s: 'Haben Sie das Formular schon ausgefüllt?' },
            { who: 'Herr Mensah', s: 'Ja, hier ist es. Und hier ist mein Pass.' },
            { who: 'Frau Lorenz', s: 'Danke. Sind Sie verheiratet?' },
            { who: 'Herr Mensah', s: 'Ja, meine Frau wohnt auch in der Wohnung.' },
            { who: 'Frau Lorenz', s: 'Gut. Unterschreiben Sie bitte hier unten.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Kwame Mensah fills in a form. Match each field and his answer.', pairs: [
            ['Vorname', 'Kwame'],
            ['Nachname', 'Mensah'],
            ['Geburtsdatum', '14.02.1993'],
            ['Geburtsort', 'Accra'],
            ['Staatsangehörigkeit', 'ghanaisch'],
            ['Familienstand', 'verheiratet'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer to each question.', items: [
            { q: 'Wie ist Ihr Familienstand?', o: ['Ich bin geschieden.', 'Ich bin aus Polen.', 'Ich bin 1990 geboren.'], why: '*Familienstand* asks if you are single, married, divorced or widowed.' },
            { q: 'Wo sind Sie geboren?', o: ['In Bogotá.', 'Am 3. Mai.', 'Seit zwei Jahren.'], why: '*Wo?* asks for a place. *Wann?* would ask for the date.' },
            { q: 'Haben Sie einen Termin?', o: ['Ja, um zehn Uhr.', 'Ja, in Köln.', 'Ja, ich bin ledig.'], why: 'A *Termin* is an appointment, so you give a time.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the questions you hear at a counter.', items: [
            { a: 'Wann sind Sie nach Deutschland gekommen?', why: 'Question word first, the verb *sind* second, the participle *gekommen* at the end.' },
            { a: 'Wie viele Kinder haben Sie?', why: '*Wie viele Kinder* is the question phrase. The verb *haben* comes after it.' },
            { a: 'Wo sind Sie geboren?', why: 'Question word, verb, *Sie*, and *geboren* at the end.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the questions and requests.', items: [
            { q: '___ Sie verheiratet? (sein)', a: ['Sind'], why: 'A yes/no question starts with the verb: *Sind Sie …?*' },
            { q: 'Wie ist ___ Adresse? (your, polite)', a: ['Ihre'], why: '*die Adresse* is feminine: *Ihre*, with a capital *I*.' },
            { q: 'Füllen Sie bitte das Formular ___. (ausfüllen)', a: ['aus'], why: '*ausfüllen* is separable: *aus* goes to the end.' },
            { q: '___ Sie bitte hier. (unterschreiben)', a: ['Unterschreiben'], why: 'A polite request: the verb first, then *Sie*. *unterschreiben* is not separable.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A form and a letter',
      about: 'Read a registration form and a letter that confirms an appointment.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In Germany you register your address at the local citizens’ office, usually within two weeks after you move in. This is the **Anmeldung**. Kwame and his wife Abena filled in this form.' },
          { t: 'reading', title: 'Anmeldung bei der Meldebehörde', md: 'Neue Wohnung: Lindenstraße 14, 04155 Leipzig\nEinzugsdatum: 01.09.2026\nBisherige Wohnung: Ring Road 22, Accra, Ghana\n\nPerson 1\nFamilienname: Mensah\nVorname: Kwame\nGeburtsdatum: 14.02.1993\nGeburtsort: Accra\nGeschlecht: männlich\nFamilienstand: verheiratet\nStaatsangehörigkeit: ghanaisch\n\nPerson 2\nFamilienname: Mensah\nGeburtsname: Owusu\nVorname: Abena\nGeburtsdatum: 30.06.1995\nGeburtsort: Kumasi\nGeschlecht: weiblich\nFamilienstand: verheiratet\nStaatsangehörigkeit: ghanaisch\n\nLeipzig, 03.09.2026\nUnterschrift: K. Mensah' },
          { t: 'ex', kind: 'tf', h: 'Read the form. True or false?', items: [
            { q: 'Kwame und Abena sind verheiratet.', a: 't', why: 'For both: *Familienstand: verheiratet*.' },
            { q: 'Abenas Geburtsname ist Owusu.', a: 't', why: '*Geburtsname: Owusu*. Her surname now is Mensah.' },
            { q: 'Kwame ist in Kumasi geboren.', a: 'f', why: 'His *Geburtsort* is Accra. Abena is from Kumasi.' },
            { q: 'Sie sind am 3. September eingezogen.', a: 'f', why: 'The *Einzugsdatum* is 01.09. They signed the form on 03.09.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Terminbestätigung', md: 'Sehr geehrter Herr Mensah,\n\nvielen Dank für Ihre Terminbuchung. Ihr Termin im Bürgeramt Nord ist am Dienstag, 8. September 2026, um 9.40 Uhr in Raum 112.\n\nBitte bringen Sie Ihren Reisepass, das ausgefüllte Anmeldeformular und die Wohnungsgeberbestätigung mit. Die Wohnungsgeberbestätigung bekommen Sie von Ihrem Vermieter. Melden Sie auch Ihre Frau an? Dann bringen Sie bitte auch ihren Reisepass mit.\n\nBitte kommen Sie pünktlich. Wenn Sie zu spät kommen, müssen Sie vielleicht einen neuen Termin buchen. Sie können nicht kommen? Dann sagen Sie den Termin bitte online ab.\n\nDie Anmeldung ist kostenlos. Nach dem Termin bekommen Sie eine Meldebescheinigung.\n\nMit freundlichen Grüßen\nIhr Bürgeramt Nord' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the letter. True, false or not given?', items: [
            { q: 'Der Termin ist am Dienstagvormittag.', a: 't', why: 'Tuesday at 9.40: in the morning, *am Vormittag*.' },
            { q: 'Herr Mensah braucht ein Papier von seinem Vermieter.', a: 't', why: 'The *Wohnungsgeberbestätigung* comes from the landlord.' },
            { q: 'Die Anmeldung kostet zehn Euro.', a: 'f', why: '*Die Anmeldung ist kostenlos*: it costs nothing.' },
            { q: 'Herr Mensah kann den Termin auch am Telefon absagen.', a: 'ng', why: 'The letter only says *online*. It does not say if the phone is possible.' },
            { q: 'Raum 112 ist im ersten Stock.', a: 'ng', why: 'The letter gives the room number, but not the floor.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Keep your *Meldebescheinigung* in a safe place. You often need it, for example to open a bank account or to get a tax number. In some towns the office is called *Bürgerbüro* or *Einwohnermeldeamt*.' },
          { t: 'ex', kind: 'spot', h: 'Tap the three documents Herr Mensah brings.', items: [
            { s: 'Bitte bringen Sie Ihren [Reisepass], das ausgefüllte [Anmeldeformular] und die [Wohnungsgeberbestätigung] mit.', why: 'Passport, the filled-in form and the paper from the landlord.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What does the word mean?', items: [
            { q: 'Eine Terminbestätigung sagt: ___', o: ['Sie haben einen Termin.', 'Ihr Termin ist abgesagt.', 'Sie brauchen einen Termin.'], why: '*bestätigen* means to confirm: the appointment is booked.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Familienstand: ___', o: ['ledig', 'Leipzig', 'Mensah'], why: '*ledig* (single) is a marital status.' },
      { q: 'Der Buchstabe W heißt auf Deutsch ___.', o: ['weh', 'fau', 'doppel-u'], why: 'W is *weh*. V is *fau*.' },
      { q: 'Geburtsdatum: 05.12.1999. Er ist im ___ geboren.', o: ['Dezember', 'Mai', 'Februar'], why: 'Day, month, year: 12 is the month, December.' },
      { q: '___ Sie bitte hier.', o: ['Unterschreiben', 'Unterschreibst', 'Unterschreibt'], why: 'A polite request with *Sie*: *Unterschreiben Sie …*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Wie ___ man Ihren Namen? (schreiben)', a: ['schreibt'], why: '*man schreibt*, like *er schreibt*.' },
      { q: 'Ich komme ___ der Türkei.', a: ['aus'], why: '*aus* + country. Some countries have an article: *aus der Türkei*.' },
      { q: '___ Sie Kinder? (haben)', a: ['Haben'], why: 'A yes/no question starts with the verb.' },
      { q: 'Nach dem Umzug macht man die ___ beim Bürgeramt. (anmelden, noun)', a: ['Anmeldung'], why: 'You register your address: the *Anmeldung*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: 'Wie ist Ihre Telefonnummer?', why: 'Question word, verb, then *Ihre Telefonnummer*.' },
      { a: 'Wann sind Sie geboren?', why: '*geboren* goes at the end.' },
      { a: 'Wie schreibt man Ihren Nachnamen?', why: 'Question word, verb, *man*, then the object.' },
    ] },
  ],
};
