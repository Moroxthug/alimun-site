// German A1 for moving abroad, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'At the Bürgeramt',
  goal: 'Spell your name, give your address and fill in a very simple form.',
  art: 'mug',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['alphabet', 'spelling', 'forms', 'address', 'numbers-20-100', 'registration'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Spelling your name',
      about: 'Say the German alphabet and spell your name.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'At the citizens’ office (*Bürgeramt*), at the bank or on the phone, people often ask: *Wie schreibt man das?* (How do you write that?) Then you spell your name with the German alphabet.' },
          { t: 'table', caption: 'The German alphabet', explain: ['head'], quiz: true, head: ['Letters', 'Say'], rows: [
            ['A B C D', 'ah, beh, tseh, deh'],
            ['E F G H', 'eh, eff, geh, hah'],
            ['I J K L', 'ih, jott, kah, ell'],
            ['M N O P', 'emm, enn, oh, peh'],
            ['Q R S T', 'kuh, err, ess, teh'],
            ['U V W X', 'uh, fau, weh, iks'],
            ['Y Z', 'üpsilon, tsett'],
            ['Ä Ö Ü ß', 'äh, öh, üh, Eszett'],
          ] },
          { t: 'tip', art: 'owl', md: 'Careful with these: German *E* sounds like English *A*, German *I* sounds like English *E*, and *V* sounds like *fau*. For two same letters, say *Doppel*: *Doppel-S*, *Doppel-M*.' },
        ],
        [
          { t: 'dialogue', title: 'Am Schalter', lines: [
            { who: 'Frau Wagner', s: 'Guten Morgen. Wie heißen Sie, bitte?' },
            { who: 'Tarek', s: 'Guten Morgen. Ich heiße Tarek Jabbour.' },
            { who: 'Frau Wagner', s: 'Wie schreibt man das?' },
            { who: 'Tarek', s: 'Jabbour: J, A, Doppel-B, O, U, R.' },
            { who: 'Frau Wagner', s: 'Und der Vorname?' },
            { who: 'Tarek', s: 'Tarek: T, A, R, E, K.' },
            { who: 'Frau Wagner', s: 'Danke, Herr Jabbour.' },
          ] },
          { t: 'text', md: 'Your **Vorname** is your first name, *Tarek*. Your **Name** or **Nachname** is your family name, *Jabbour*. In Germany people often say the family name: *Herr Jabbour*, *Frau Wagner*.' },
          { t: 'examples', items: [
            { s: 'Wie schreibt man das?', n: '*man* means people in general. The form is like *er*: *man schreibt*.' },
            { s: 'Können Sie das bitte buchstabieren?', n: '*buchstabieren*: to spell. *können* sends the second verb to the end.' },
            { s: 'Noch einmal, bitte. Langsam, bitte.', n: 'Useful when you do not understand: once more, slowly.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the letter and how you say it.', pairs: [
            ['E', 'eh'],
            ['I', 'ih'],
            ['J', 'jott'],
            ['V', 'fau'],
            ['W', 'weh'],
            ['Z', 'tsett'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Which name is it?', items: [
            { q: 'Weh, ih, ell, ell, ih: ___', o: ['Willi', 'Villi', 'Welle'], why: '*weh* is W, *ih* is I, and two *ell* are double L.' },
            { q: 'Emm, eh, ih: ___', o: ['Mei', 'Mai', 'Mia'], why: '*eh* is E and *ih* is I: M, E, I.' },
            { q: 'Jott, ah, enn, ah: ___', o: ['Jana', 'Yana', 'Gana'], why: '*jott* is J. Y is *üpsilon* and G is *geh*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Wie ___ man das? (schreiben)', a: ['schreibt'], why: '*man* takes the *er* form: *man schreibt*.' },
            { q: 'Mein ___ ist Tarek. (first name)', a: ['Vorname'], why: 'Your first name is your *Vorname*.' },
            { q: 'Noch ___, bitte. Ich verstehe nicht.', a: ['einmal', 'mal'], why: '*noch einmal*: once more.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Wie schreibt man das?', why: 'Question word, verb, *man*, then *das*.' },
            { a: 'Wie ist Ihr Vorname?', why: '*Wie*, the verb *ist*, then *Ihr Vorname*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'A simple form',
      about: 'The words on a simple form, your address and numbers 20 to 100.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In your first weeks you fill in forms: at the *Bürgeramt*, at the bank, at the doctor’s. A form is a **Formular**. These words are on almost every form.' },
          { t: 'table', caption: 'Words on a form', explain: ['head', 'col1'], quiz: true, head: ['On the form', 'Meaning'], rows: [
            ['Name / Nachname', 'family name'],
            ['Vorname', 'first name'],
            ['Straße, Hausnummer', 'street, house number'],
            ['Postleitzahl (PLZ)', 'postcode'],
            ['Ort / Wohnort', 'town'],
            ['Telefon', 'phone number'],
            ['E-Mail', 'email address'],
            ['Geburtsdatum', 'date of birth'],
            ['Unterschrift', 'signature'],
          ] },
          { t: 'tip', art: 'owl', md: 'In a German address, the house number comes after the street: *Gartenstraße 5*. The postcode has five numbers and comes before the town: *50667 Köln*.' },
        ],
        [
          { t: 'text', md: 'For addresses and phone numbers you need bigger numbers. From 21, say the small number first, then *und*, then the tens: 21 is *einundzwanzig* (one and twenty).' },
          { t: 'table', caption: 'Numbers 20 to 100', quiz: true, head: ['Number', 'German'], rows: [
            ['20', 'zwanzig'], ['21', 'einundzwanzig'], ['25', 'fünfundzwanzig'], ['30', 'dreißig'], ['40', 'vierzig'],
            ['50', 'fünfzig'], ['60', 'sechzig'], ['70', 'siebzig'], ['80', 'achtzig'], ['90', 'neunzig'], ['100', 'hundert'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right number.', items: [
            { q: '34 = ___', o: ['vierunddreißig', 'dreiundvierzig', 'dreißigvier'], why: 'The small number first: *vier* + *und* + *dreißig*.' },
            { q: '67 = ___', o: ['siebenundsechzig', 'sechsundsiebzig', 'sechzigsieben'], why: '*sieben* + *und* + *sechzig*.' },
            { q: '30 = ___', o: ['dreißig', 'dreizig', 'dreizehn'], why: '30 is special: *dreißig* with *ß*. 13 is *dreizehn*.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Im Bürgeramt', lines: [
            { who: 'Frau Wagner', s: 'Wie ist Ihre Adresse, Herr Jabbour?' },
            { who: 'Tarek', s: 'Gartenstraße 45, 50667 Köln.' },
            { who: 'Frau Wagner', s: 'Und Ihr Geburtsdatum?' },
            { who: 'Tarek', s: 'Der 3. Mai 1996.' },
            { who: 'Frau Wagner', s: 'Haben Sie eine Telefonnummer?' },
            { who: 'Tarek', s: 'Ja. 0123 98 76 54.' },
            { who: 'Frau Wagner', s: 'Gut. Unterschreiben Sie bitte hier.' },
          ] },
          { t: 'text', md: 'At the office you hear questions with **Ihr** and **Ihre** (your, polite, with a capital *I*). Use *Ihr* for *der* and *das* words: *Ihr Name*, *Ihr Geburtsdatum*. Use *Ihre* for *die* words: *Ihre Adresse*, *Ihre Telefonnummer*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Tarek fills in the form. Match each field and his answer.', pairs: [
            ['Name', 'Jabbour'],
            ['Vorname', 'Tarek'],
            ['Straße, Hausnummer', 'Gartenstraße 45'],
            ['PLZ, Ort', '50667 Köln'],
            ['Geburtsdatum', '03.05.1996'],
          ] },
          { t: 'ex', kind: 'select', h: 'Ihr or Ihre?', items: [
            { q: 'Wie ist ___ Adresse?', o: ['Ihre', 'Ihr', 'Sie'], why: '*die Adresse*: *Ihre*.' },
            { q: 'Wie ist ___ Name?', o: ['Ihr', 'Ihre', 'Sie'], why: '*der Name*: *Ihr*.' },
            { q: 'Wie ist ___ Telefonnummer?', o: ['Ihre', 'Ihr', 'Sie'], why: '*die Telefonnummer*: *Ihre*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Write the words from a form.', words: [
            { a: 'Vorname', clue: 'Tarek ist der …' },
            { a: 'Straße', clue: 'Gartenstraße ist eine …' },
            { a: 'Ort', clue: 'Köln ist der …' },
            { a: 'Telefon', clue: '0123 98 76 54 ist die Nummer für das …' },
            { a: 'Formular', clue: 'Ein Papier, hier schreiben Sie Ihren Namen und Ihre Adresse.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Numbers, signs and forms',
      about: 'Read a waiting number, the opening hours of an office and a filled-in form.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In many offices you take a number first and wait. The number shows on a screen, with a room or a counter.' },
          { t: 'reading', title: 'Bürgeramt Köln-Mitte', md: 'Öffnungszeiten\nMontag bis Freitag: 8 bis 12 Uhr\nDonnerstag auch: 14 bis 18 Uhr\nSamstag und Sonntag: geschlossen\n\nNur mit Termin. Einen Termin bekommen Sie online oder am Telefon.\n\nBitte ziehen Sie eine Nummer und warten Sie.' },
          { t: 'ex', kind: 'tf', h: 'Read the sign. True or false?', items: [
            { q: 'Das Bürgeramt ist am Montag um 10 Uhr offen.', a: 't', why: 'Monday to Friday from 8 to 12.' },
            { q: 'Am Donnerstag ist das Bürgeramt auch am Nachmittag offen.', a: 't', why: '*Donnerstag auch: 14 bis 18 Uhr.*' },
            { q: 'Am Samstag ist das Bürgeramt offen.', a: 'f', why: '*Samstag und Sonntag: geschlossen.*' },
            { q: 'Man braucht keinen Termin.', a: 'f', why: '*Nur mit Termin*: you need an appointment.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Ihre Nummer', md: 'Bürgeramt Köln-Mitte\n\nIhre Nummer: B 47\nBitte warten Sie.\nJetzt: B 39\n\nB 47 → Schalter 5' },
          { t: 'ex', kind: 'choice', h: 'Read the ticket. Choose the answer.', items: [
            { q: 'Was ist Tareks Nummer?', o: ['B 47', 'B 39', '5'], why: '*Ihre Nummer: B 47.* B 39 is the number now.' },
            { q: 'Wohin geht Tarek?', o: ['zu Schalter 5', 'zu Schalter 47', 'nach Hause'], why: '*B 47 → Schalter 5*: counter 5.' },
          ] },
          { t: 'tip', art: 'owl', md: 'A *Schalter* is a counter at an office or a bank. *Bitte warten Sie* means: please wait. Keep your number with you.' },
        ],
        [
          { t: 'reading', title: 'Formular', md: 'Name: Jabbour\nVorname: Tarek\nStraße, Hausnummer: Gartenstraße 45\nPLZ, Ort: 50667 Köln\nGeburtsdatum: 03.05.1996\nTelefon: 0123 98 76 54\nE-Mail: tarek.j@example.com\n\nUnterschrift: T. Jabbour' },
          { t: 'ex', kind: 'tf', h: 'Read the form. True or false?', items: [
            { q: 'Tarek wohnt in Köln.', a: 't', why: '*PLZ, Ort: 50667 Köln.*' },
            { q: 'Tareks Hausnummer ist 54.', a: 'f', why: 'His house number is 45. 54 is in his phone number.' },
            { q: 'Tarek ist im Mai geboren.', a: 't', why: '03.05.1996: day 3, month 5, May. Germans write the day first.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the postcode and the house number.', items: [
            { s: 'Gartenstraße [45], [50667] Köln', why: 'The house number comes after the street. The postcode has five numbers.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Jott, ah, enn: ___', o: ['Jan', 'Yan', 'Gan'], why: '*jott* is J.' },
      { q: 'Wie ist ___ Adresse?', o: ['Ihre', 'Ihr', 'Sie'], why: '*die Adresse*: *Ihre*.' },
      { q: '45 = ___', o: ['fünfundvierzig', 'vierundfünfzig', 'vierzigfünf'], why: 'The small number first: *fünf* + *und* + *vierzig*.' },
      { q: 'Bitte schreiben Sie hier Ihre ___.', o: ['Unterschrift', 'Postleitzahl', 'Straße'], why: 'You sign at the end of the form: *die Unterschrift*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Wie ___ man das? (schreiben)', a: ['schreibt'], why: '*man schreibt*.' },
      { q: '50667 ist die ___. (postcode)', a: ['Postleitzahl', 'PLZ'], why: 'The postcode: *die Postleitzahl*, short *PLZ*.' },
      { q: 'Noch ___, bitte. Langsam, bitte.', a: ['einmal', 'mal'], why: '*noch einmal*: once more.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the field and the answer.', pairs: [
      ['Vorname', 'Mei'],
      ['Ort', 'Leipzig'],
      ['Geburtsdatum', '12.08.1999'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: 'Wie ist Ihre Telefonnummer?', why: '*Wie*, the verb *ist*, then *Ihre Telefonnummer*.' },
      { a: 'Können Sie das bitte buchstabieren?', why: '*Können* first in a yes/no question, *buchstabieren* at the end.' },
    ] },
  ],
};
