// German A2 for work, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Appointments and meetings',
  goal: 'Arrange, move and cancel appointments.',
  art: 'snail',
  tags: { skills: ['speaking', 'writing', 'reading', 'vocabulary'], topics: ['dates', 'ordinal-numbers', 'appointments', 'weil', 'calendar'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Finding a time',
      about: 'Say dates and times and suggest a time for a meeting.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'For dates, German uses **ordinal numbers**. You write a point after the number: *der 3. Mai* is *der dritte Mai*. After *am*, the ending is **-en**: *am dritten Mai*.' },
          { t: 'table', caption: 'Dates', explain: ['head'], quiz: true, head: ['Date', 'Today is …', 'The meeting is …'], rows: [
            ['1.', 'der erste', 'am ersten'],
            ['2.', 'der zweite', 'am zweiten'],
            ['3.', 'der dritte', 'am dritten'],
            ['7.', 'der siebte', 'am siebten'],
            ['10.', 'der zehnte', 'am zehnten'],
            ['20.', 'der zwanzigste', 'am zwanzigsten'],
            ['31.', 'der einunddreißigste', 'am einunddreißigsten'],
          ] },
          { t: 'tip', art: 'owl', md: 'From 1 to 19, add *-te*: *der vierte, der neunzehnte*. From 20, add *-ste*: *der zwanzigste*. Learn the special forms: *erste, dritte, siebte, achte*.' },
        ],
        [
          { t: 'dialogue', title: 'Finding a time', lines: [
            { who: 'Frau Lehmann', s: 'Herr Diaz, wir müssen über das neue Projekt sprechen. Haben Sie diese Woche Zeit?' },
            { who: 'Herr Diaz', s: 'Diese Woche ist schwierig. Passt es Ihnen am Montag, dem 10. Juni?' },
            { who: 'Frau Lehmann', s: 'Am Montag habe ich leider schon einen Termin. Wie wäre es mit Dienstag?' },
            { who: 'Herr Diaz', s: 'Dienstag geht. Um wie viel Uhr?' },
            { who: 'Frau Lehmann', s: 'Um 10 Uhr? Oder lieber am Nachmittag?' },
            { who: 'Herr Diaz', s: 'Um 10 Uhr passt mir gut.' },
            { who: 'Frau Lehmann', s: 'Prima. Dann treffen wir uns am Dienstag, dem 11. Juni, um 10 Uhr in meinem Büro.' },
          ] },
          { t: 'text', md: 'For a full date, people say *am Montag, dem 10. Juni*. In emails you also often see *am Montag, den 10. Juni*. Both are common.' },
        ],
        [
          { t: 'table', caption: 'Making an appointment', explain: ['head', 'col0'], head: ['You want to …', 'You say …'], rows: [
            ['ask if someone has time', 'Haben Sie am Donnerstag Zeit?'],
            ['suggest a time', 'Wie wäre es mit Freitag um 9 Uhr?'],
            ['ask if a time is good', 'Passt es Ihnen am Mittwoch?'],
            ['say yes', 'Das passt mir gut.'],
            ['say no', 'Da kann ich leider nicht.'],
          ] },
          { t: 'tip', art: 'owl', md: '*passen* takes the **Dativ**: *Das passt **mir**. Passt es **Ihnen**?*' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the date in words.', items: [
            { q: 'Die Besprechung ist am ___ Mai. (3.)', a: ['dritten'], why: '*der dritte*, after *am*: *am dritten*.' },
            { q: 'Ich habe ab dem ___ Juli Urlaub. (1.)', a: ['ersten'], why: '*der erste*, after *ab dem*: *ab dem ersten*.' },
            { q: 'Der Kurs beginnt am ___ September. (20.)', a: ['zwanzigsten'], why: 'From 20: *-ste*, after *am*: *am zwanzigsten*.' },
            { q: 'Heute ist der ___ März. (7.)', a: ['siebte', 'siebente'], why: '*der siebte*: no *-en* after *der*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '___ es Ihnen am Freitag?', o: ['Passt', 'Passen', 'Passe'], why: 'The subject is *es*: *es passt*.' },
            { q: 'Wie wäre es ___ Mittwoch um 15 Uhr?', o: ['mit', 'am', 'um'], why: 'The fixed phrase is *Wie wäre es mit …?*' },
            { q: 'Das passt ___ gut.', o: ['mir', 'mich', 'ich'], why: '*passen* takes the Dativ: *mir*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the times.', pairs: [
            ['9.15 Uhr', 'Viertel nach neun'],
            ['8.45 Uhr', 'Viertel vor neun'],
            ['10.30 Uhr', 'halb elf'],
            ['12.00 Uhr', 'zwölf Uhr mittags'],
            ['16.00 Uhr', 'vier Uhr nachmittags'],
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Wie wäre es mit Freitag?', why: 'A fixed phrase to suggest a day.' },
            { a: 'Passt es Ihnen am Mittwoch?', why: 'The verb *passt* first, then *es* and *Ihnen*, then the day.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Moving and cancelling',
      about: 'Say sorry, give a reason, and move or cancel an appointment politely.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Sometimes you cannot come. Then you **move** the appointment (*verschieben*) or **cancel** it (*absagen*). Say sorry, give a short reason and suggest a new time.' },
          { t: 'examples', items: [
            { s: 'Leider muss ich unseren Termin am Dienstag **absagen**.', n: '*absagen*: to cancel. With *muss*, the infinitive goes to the end.' },
            { s: 'Können wir den Termin **auf** Donnerstag **verschieben**?', n: '*verschieben auf*: to move to a new day.' },
            { s: 'Ich kann nicht kommen, **weil** ich einen Arzttermin **habe**.', n: 'After *weil*, the verb goes to the end.' },
            { s: 'Mir ist leider etwas dazwischengekommen.', n: 'Something has come up. You do not need to say what.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Say sorry with *Es tut mir leid* or *Entschuldigung*. If someone cancels, a friendly answer is *Kein Problem.*' },
        ],
        [
          { t: 'reading', title: 'Betreff: Termin am Dienstag', md: 'Sehr geehrte Frau Lehmann,\n\nleider muss ich unseren Termin am Dienstag, dem 11. Juni, um 10 Uhr verschieben. Ich bin am Dienstag auf einer Messe in Köln. Es tut mir sehr leid.\n\nHaben Sie am Donnerstag, dem 13. Juni, Zeit? Ich kann am Vormittag oder ab 14 Uhr.\n\nMit freundlichen Grüßen\nCarlos Diaz' },
          { t: 'reading', title: 'AW: Termin am Dienstag', md: 'Sehr geehrter Herr Diaz,\n\nkein Problem. Donnerstag um 14 Uhr passt mir gut. Wir treffen uns wieder in meinem Büro.\n\nViele Grüße\nSabine Lehmann' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read the two emails. True or false?', items: [
            { q: 'Herr Diaz sagt den Termin ganz ab.', a: 'f', why: 'He wants to move it: *verschieben*.' },
            { q: 'Herr Diaz ist am Dienstag in Köln.', a: 't', why: '*Ich bin am Dienstag auf einer Messe in Köln.*' },
            { q: 'Frau Lehmann hat am Donnerstag um 14 Uhr Zeit.', a: 't', why: '*Donnerstag um 14 Uhr passt mir gut.*' },
            { q: 'Das neue Treffen ist in Köln.', a: 'f', why: '*Wir treffen uns wieder in meinem Büro.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Leider ___ ich den Termin absagen. (müssen)', a: ['muss'], why: '*ich muss*: no ending. *absagen* goes to the end.' },
            { q: 'Können wir den Termin ___ Freitag verschieben?', a: ['auf'], why: '*verschieben auf* + the new day.' },
            { q: 'Ich kann nicht kommen, weil ich krank ___. (sein)', a: ['bin'], why: 'After *weil*, the verb goes to the end: *weil ich krank bin*.' },
            { q: 'Es tut ___ leid.', a: ['mir'], why: 'The fixed phrase: *Es tut mir leid.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'Sie möchten sich einen Tag später treffen.', o: ['Können wir den Termin auf morgen verschieben?', 'Können wir den Termin absagen?', 'Können wir den Termin vergessen?'], why: '*verschieben*: to move to another time.' },
            { q: 'Sie können nicht kommen. Den Grund möchten Sie nicht sagen.', o: ['Mir ist leider etwas dazwischengekommen.', 'Das passt mir gut.', 'Wie wäre es mit Freitag?'], why: 'This sentence says that something has come up, without details.' },
            { q: 'Eine Kollegin sagt ein Meeting ab. Sie antworten freundlich:', o: ['Kein Problem. Dann sprechen wir nächste Woche.', 'Das ist leider Ihr Problem.', 'Es tut mir leid, ich bin krank.'], why: '*Kein Problem* is friendly. Then suggest a new time.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Können wir den Termin verschieben?', why: '*Können* first, *verschieben* at the end.' },
            { a: 'Ich kann nicht kommen, weil ich krank bin.', why: 'After *weil*, the verb *bin* goes to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: an invitation and replies',
      about: 'Read a calendar invitation to a meeting and the answers from colleagues.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Many companies send meeting invitations by calendar. You can answer with *Zusagen* (yes), *Absagen* (no) or *Mit Vorbehalt* (maybe). You can often add a short note.' },
          { t: 'reading', title: 'Einladung: Planung Kundentag', md: '**Wann:** Mittwoch, 18. September, 9.30 bis 11.00 Uhr\n**Wo:** Raum 2.14 (2. Stock) oder online per Video\n**Organisatorin:** Nina Hartmann\n**Teilnehmer:** Team Vertrieb, Team Marketing\n\nHallo zusammen,\n\nam 10. Oktober ist unser Kundentag. In der Besprechung planen wir das Programm, das Essen und die Einladungen. Bitte bringt eure Ideen mit! Wer nicht ins Büro kommen kann, macht online mit.\n\nBitte sagt bis Montag zu oder ab.\n\nViele Grüße\nNina' },
        ],
        [
          { t: 'reading', title: 'Antworten', md: '**Zugesagt:** Oleksandr Bondar\nIch bin dabei! Ich komme ins Büro.\n\n**Abgesagt:** Fatma Arslan\nLeider bin ich am 18. im Urlaub. Meine Ideen schicke ich dir per E-Mail.\n\n**Neue Zeit vorgeschlagen:** Lukas Meyer\nHallo Nina, um 9.30 Uhr habe ich einen Termin bei einem Kunden. Geht es auch um 11 Uhr?' },
          { t: 'ex', kind: 'match', h: 'Who is it? Match.', pairs: [
            ['Oleksandr', 'kommt ins Büro.'],
            ['Fatma', 'ist im Urlaub.'],
            ['Lukas', 'hat um 9.30 Uhr einen Termin bei einem Kunden.'],
            ['Nina', 'organisiert die Besprechung.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the invitation and the replies. True, false or not given?', items: [
            { q: 'Die Besprechung dauert anderthalb Stunden.', a: 't', why: 'From 9.30 to 11.00 Uhr is one and a half hours.' },
            { q: 'Man kann auch online mitmachen.', a: 't', why: '*oder online per Video*.' },
            { q: 'Der Kundentag ist am 18. September.', a: 'f', why: 'The meeting is on 18 September. The *Kundentag* is *am 10. Oktober*.' },
            { q: 'Fatma kommt zur Besprechung.', a: 'f', why: 'She says no: *Leider bin ich am 18. im Urlaub.*' },
            { q: 'Lukas möchte eine andere Uhrzeit.', a: 't', why: '*Geht es auch um 11 Uhr?*' },
            { q: 'Oleksandr arbeitet im Team Marketing.', a: 'ng', why: 'The replies do not say in which team Oleksandr works.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Bis wann sollen die Kollegen antworten?', o: ['bis Montag', 'bis Mittwoch', 'bis zum 10. Oktober'], why: '*Bitte sagt bis Montag zu oder ab.*' },
            { q: 'Was sollen die Kollegen mitbringen?', o: ['ihre Ideen', 'das Essen', 'die Einladungen'], why: '*Bitte bringt eure Ideen mit!* They plan the food and the invitations in the meeting.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Das Meeting ist am ___ April. (2.)', o: ['zweiten', 'zweite', 'zweiter'], why: 'After *am*: *-en*, *am zweiten*.' },
      { q: 'Passt ___ Montag um 9 Uhr?', o: ['Ihnen', 'Sie', 'Ihr'], why: '*passen* takes the Dativ: *Ihnen*.' },
      { q: 'Ich kann nicht kommen. Ich ___ den Termin leider ab.', o: ['sage', 'verschiebe', 'passe'], why: '*absagen*: to cancel. *ab* goes to the end.' },
      { q: 'Sie klicken in einer Einladung auf *Zusagen*. Das heißt:', o: ['Ich komme.', 'Ich komme nicht.', 'Vielleicht komme ich.'], why: '*zusagen*: to say yes. *absagen*: to say no.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Heute ist der ___ Oktober. (3.)', a: ['dritte'], why: '*der dritte*: a special form, no *-en* after *der*.' },
      { q: 'Wie wäre es ___ Donnerstag?', a: ['mit'], why: '*Wie wäre es mit …?*' },
      { q: 'Ich komme später, weil der Zug Verspätung ___. (haben)', a: ['hat'], why: 'After *weil*, the verb goes to the end.' },
      { q: 'Ich kann am Montag nicht. Können wir den Termin auf Freitag ___?', a: ['verschieben'], why: '*verschieben auf*: to move to a new day.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the phrase and the meaning.', pairs: [
      ['Das passt mir gut.', 'Ja, da habe ich Zeit.'],
      ['Da kann ich leider nicht.', 'Nein, da habe ich keine Zeit.'],
      ['Haben Sie am Freitag Zeit?', 'Können Sie am Freitag?'],
      ['Es tut mir leid.', 'Entschuldigung.'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Wie wäre es mit Dienstag?', why: 'A fixed phrase to suggest a day.' },
      { a: 'Können wir uns am Montag treffen?', why: '*Können* first, *uns* right after *wir*, *treffen* at the end.' },
    ] },
  ],
};
