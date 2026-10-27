// German A1 for travel, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Sightseeing',
  goal: 'Ask about opening times and say what you can and want to see.',
  art: 'cactus',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['sightseeing', 'telling-the-time', 'days-of-the-week', 'opening-times', 'koennen', 'moechten'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Opening times',
      about: 'Ask when a place is open and understand days and times.',
      art: 'owl',
      spreads: [
        [
          { t: 'dialogue', title: 'An der Kasse', lines: [
            { who: 'Elif', s: 'Guten Tag! Wann ist das Museum geöffnet?' },
            { who: 'Mitarbeiter', s: 'Von Dienstag bis Sonntag, von zehn bis achtzehn Uhr.' },
            { who: 'Elif', s: 'Und am Montag?' },
            { who: 'Mitarbeiter', s: 'Am Montag ist das Museum geschlossen.' },
            { who: 'Elif', s: 'Wann beginnt die Führung?' },
            { who: 'Mitarbeiter', s: 'Um halb drei. Sie dauert eine Stunde.' },
            { who: 'Elif', s: 'Was kostet der Eintritt?' },
            { who: 'Mitarbeiter', s: 'Zehn Euro. Für Studenten sechs Euro.' },
          ] },
          { t: 'text', md: 'Use **am** with days: *am Montag*. Use **um** with a time: *um zehn Uhr*. For a time from one point to another, use **von … bis**: *von Dienstag bis Sonntag*, *von zehn bis achtzehn Uhr*.' },
        ],
        [
          { t: 'table', caption: 'The days of the week', quiz: true, head: ['', 'am …'], rows: [
            ['Montag', 'am Montag'],
            ['Dienstag', 'am Dienstag'],
            ['Mittwoch', 'am Mittwoch'],
            ['Donnerstag', 'am Donnerstag'],
            ['Freitag', 'am Freitag'],
            ['Samstag', 'am Samstag'],
            ['Sonntag', 'am Sonntag'],
          ] },
          { t: 'tip', art: 'owl', md: 'On signs, days are often short: *Mo, Di, Mi, Do, Fr, Sa, So*. *Mo–Fr* means from Monday to Friday. *das Wochenende* is Saturday and Sunday.' },
        ],
        [
          { t: 'text', md: 'On signs and timetables, times use 24 hours: *18:00 Uhr* is *achtzehn Uhr*, and *14:30 Uhr* is *vierzehn Uhr dreißig*.\n\nIn everyday speech, people often use 12 hours. *halb* means half an hour **before** the next hour: *halb drei* is 2:30. *Viertel nach zwei* is 2:15 and *Viertel vor drei* is 2:45.' },
          { t: 'examples', items: [
            { s: 'Das Museum öffnet **um neun Uhr**.', n: '9:00.' },
            { s: 'Die Führung beginnt **um halb elf**.', n: '10:30: half an hour before eleven.' },
            { s: 'Der Turm schließt **um siebzehn Uhr dreißig**.', n: '17:30, as on a sign.' },
            { s: 'Wir treffen uns **um Viertel nach zwei**.', n: '14:15 or 2:15.' },
            { s: '**Wie spät ist es?** – Es ist Viertel vor vier.', n: 'What time is it? – It is 3:45.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'memory', h: 'Find the pairs: the time and the words.', pairs: [
            ['10:30', 'halb elf'],
            ['14:15', 'Viertel nach zwei'],
            ['16:45', 'Viertel vor fünf'],
            ['18:00', 'achtzehn Uhr'],
            ['9:30', 'halb zehn'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Das Schloss ist ___ Montag geschlossen.', o: ['am', 'um', 'im'], why: 'With a day: *am*.' },
            { q: 'Die Führung beginnt ___ elf Uhr.', o: ['um', 'am', 'von'], why: 'With a time: *um*.' },
            { q: 'Der Park ist ___ acht bis zwanzig Uhr geöffnet.', o: ['von', 'um', 'am'], why: 'From one time to another: *von … bis*.' },
            { q: 'Es ist 15:30 Uhr. Man sagt auch: Es ist ___.', o: ['halb vier', 'halb drei', 'Viertel nach drei'], why: '*halb vier* is half an hour before four: 3:30.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write am, um, von or bis.', items: [
            { q: 'Die Kirche ist ___ Sonntag geöffnet.', a: ['am'], why: 'With a day: *am Sonntag*.' },
            { q: 'Das Konzert beginnt ___ acht Uhr.', a: ['um'], why: 'With a time: *um acht Uhr*.' },
            { q: 'Das Museum ist von Dienstag ___ Sonntag geöffnet.', a: ['bis'], why: '*von … bis*: from … to.' },
            { q: 'Der Markt ist ___ sieben bis dreizehn Uhr.', a: ['von'], why: '*von … bis*: the first word is *von*.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which one does not belong?', items: [
            { o: ['Wochenende', 'Montag', 'Mittwoch', 'Freitag'], why: '*das Wochenende* is two days. The others are single days of the week.' },
            { o: ['geschlossen', 'geöffnet', 'offen', 'auf'], why: '*geschlossen* means closed. The others all mean open.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'What can we do?',
      about: 'Say what you can do and what you would like to see with können and möchten.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: '*können* (can) and *möchten* (would like) go with a second verb. *können* or *möchten* is in **second place**, and the second verb goes to the **end** in its infinitive form: *Ich möchte das Schloss sehen.*\n\n*man* means people in general. *Kann man …?* is a useful question for travellers: *Kann man den Turm besichtigen?*' },
          { t: 'table', caption: 'können and möchten', quiz: true, head: ['', 'können', 'möchten'], rows: [
            ['ich', 'kann', 'möchte'],
            ['du', 'kannst', 'möchtest'],
            ['er / sie / es / man', 'kann', 'möchte'],
            ['wir', 'können', 'möchten'],
            ['ihr', 'könnt', 'möchtet'],
            ['sie / Sie', 'können', 'möchten'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Ich **möchte** den Dom **besichtigen**.', n: '*besichtigen*: to visit and look at a building.' },
            { s: '**Kann man** hier **fotografieren**?', n: 'Are you allowed to take photos here?' },
            { s: 'Wir **können** eine Bootsfahrt **machen**.', n: '*eine Bootsfahrt*: a trip by boat.' },
            { s: 'Am Abend **möchte** ich ins Konzert **gehen**.', n: 'The time comes first, then the verb *möchte*, then *ich*.' },
            { s: 'Von hier **kann** man die ganze Stadt **sehen**.', n: 'From here you can see the whole town.' },
          ] },
          { t: 'dialogue', title: 'In der Touristeninformation', lines: [
            { who: 'Mitarbeiterin', s: 'Guten Morgen! Kann ich Ihnen helfen?' },
            { who: 'Omar', s: 'Ja, bitte. Wir sind nur einen Tag hier. Was kann man hier machen?' },
            { who: 'Mitarbeiterin', s: 'Sie können die Altstadt besichtigen. Und der Turm ist sehr schön.' },
            { who: 'Omar', s: 'Kann man auf den Turm gehen?' },
            { who: 'Mitarbeiterin', s: 'Ja, von neun bis siebzehn Uhr. Von oben können Sie die ganze Stadt sehen.' },
            { who: 'Omar', s: 'Super. Und wir möchten am Abend gut essen.' },
            { who: 'Mitarbeiterin', s: 'Hier ist ein Stadtplan mit Restaurants. Viel Spaß!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the verb.', verb: 'können', tense: 'present', rows: [
            ['ich', 'kann'],
            ['du', 'kannst'],
            ['er / sie / es', 'kann'],
            ['wir', 'können', 'With *wir* and *Sie*, the form is the same as the infinitive.'],
            ['ihr', 'könnt'],
            ['sie / Sie', 'können'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the right form.', items: [
            { q: 'Wir ___ das Schloss besichtigen. (möchten)', a: ['möchten', 'moechten'], why: '*möchten* with *wir*: *möchten*.' },
            { q: '___ man hier fotografieren? (können)', a: ['Kann'], why: '*man* has the same form as *er*: *kann*.' },
            { q: 'Du ___ den Turm sehen. (können)', a: ['kannst'], why: '*können* with *du*: *kannst*.' },
            { q: 'Ich ___ ins Museum gehen. (möchten)', a: ['möchte', 'moechte'], why: '*möchten* with *ich*: *möchte*, with no *-n*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word given.', items: [
            { q: 'Ich sehe den Dom.', cue: 'Ich möchte', a: ['Ich möchte den Dom sehen.'], why: '*möchte* in second place, *sehen* at the end.' },
            { q: 'Wir machen eine Stadtführung.', cue: 'Wir können', a: ['Wir können eine Stadtführung machen.'], why: '*können* in second place, *machen* at the end.' },
            { q: 'Man geht auf den Turm.', cue: 'Kann man', a: ['Kann man auf den Turm gehen?'], why: 'A yes/no question: *Kann man* first, *gehen* at the end.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Was kann man hier machen?', why: 'The question word *was*, then *kann man*, then *machen* at the end.' },
            { a: 'Am Abend möchten wir ins Konzert gehen.', why: 'The time first, then *möchten wir*, and *gehen* at the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Write the sightseeing words.', words: [
            { a: 'Museum', clue: 'Hier sehen Sie Bilder und alte Dinge.' },
            { a: 'Turm', clue: 'Er ist hoch. Von oben sehen Sie die Stadt.' },
            { a: 'Schloss', clue: 'Ein großes, altes Haus für einen König.' },
            { a: 'Kirche', clue: 'Ein Haus für Gott, oft mit einem hohen Turm.' },
            { a: 'Altstadt', clue: 'Der alte Teil von einer Stadt.' },
            { a: 'Eintritt', clue: 'Das bezahlen Sie an der Kasse vom Museum.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a notice from the tourist information',
      about: 'Read a notice about sights, opening times and prices.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'The tourist information often gives you a page with the most important sights: *die Sehenswürdigkeiten*. Look for the days, the times and the price.' },
          { t: 'reading', title: 'Sehenswürdigkeiten in der Altstadt', md: '**Stadtmuseum**\nDi–So 10–17 Uhr, Mo geschlossen. Eintritt: 7 €, Kinder bis 12 Jahre frei.\n\n**Rathausturm**\nJeden Tag 9–18 Uhr. Eintritt: 3 €. Es gibt keinen Aufzug: 210 Stufen bis nach oben! Bei Regen und Sturm ist der Turm geschlossen.\n\n**Schloss am Fluss**\nNur mit Führung. Führungen auf Deutsch: 11 und 15 Uhr. Auf Englisch: Sa und So um 13 Uhr. Eintritt: 9 €. Im Schloss kann man nicht fotografieren.\n\n**Stadtführung**\nTreffpunkt: vor dem Rathaus. Mo–Sa um 10:30 Uhr, 90 Minuten. Preis: 12 € pro Person.' },
          { t: 'tip', art: 'owl', md: '*frei* can mean free of charge: *Der Eintritt ist frei.* *die Führung* is a guided visit with a guide.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the notice. True, false or not given?', items: [
            { q: 'Am Montag kann man das Stadtmuseum nicht besichtigen.', a: 't', why: '*Mo geschlossen*: closed on Monday.' },
            { q: 'Ein Kind mit acht Jahren zahlt im Museum 7 Euro.', a: 'f', why: '*Kinder bis 12 Jahre frei*: children up to 12 do not pay.' },
            { q: 'Im Rathausturm gibt es einen Aufzug.', a: 'f', why: '*Es gibt keinen Aufzug.*' },
            { q: 'Im Schloss gibt es ein Café.', a: 'ng', why: 'The notice does not say anything about a café.' },
            { q: 'Man kann das Schloss ohne Führung besichtigen.', a: 'f', why: '*Nur mit Führung*: only with a guided visit.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Sie sprechen nur Englisch. Wann können Sie das Schloss besichtigen?', o: ['am Samstag um 13 Uhr', 'am Montag um 11 Uhr', 'jeden Tag um 15 Uhr'], why: 'Visits in English: *Sa und So um 13 Uhr*.' },
            { q: 'Es regnet. Was ist heute geschlossen?', o: ['der Rathausturm', 'das Stadtmuseum', 'das Schloss'], why: '*Bei Regen und Sturm ist der Turm geschlossen.*' },
            { q: 'Wo beginnt die Stadtführung?', o: ['vor dem Rathaus', 'im Schloss', 'im Stadtmuseum'], why: '*Treffpunkt: vor dem Rathaus.*' },
            { q: 'Wie lange dauert die Stadtführung?', o: ['eine Stunde und dreißig Minuten', 'eine Stunde', 'zwei Stunden'], why: '*90 Minuten* is one hour and thirty minutes.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that say when and where you meet for the city tour.', items: [
            { s: 'Treffpunkt: [vor dem Rathaus]. Mo–Sa [um 10:30 Uhr], 90 Minuten.', why: 'The place is *vor dem Rathaus* and the time is *um 10:30 Uhr*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Das Museum ist ___ Dienstag bis Sonntag geöffnet.', o: ['von', 'um', 'am'], why: '*von … bis*: from … to.' },
      { q: 'Die Führung beginnt ___ zwei Uhr.', o: ['um', 'am', 'im'], why: 'With a time: *um*.' },
      { q: '„Halb neun“ ist ___.', o: ['8:30', '9:30', '9:15'], why: '*halb neun* is half an hour before nine: 8:30.' },
      { q: '___ man hier fotografieren?', o: ['Kann', 'Kannst', 'Können'], why: '*man* has the same form as *er*: *kann*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Das Schloss ist ___ Montag geschlossen.', a: ['am'], why: 'With a day: *am*.' },
      { q: 'Wir ___ den Dom besichtigen. (möchten)', a: ['möchten', 'moechten'], why: '*möchten* with *wir*.' },
      { q: 'Du ___ von oben die Stadt sehen. (können)', a: ['kannst'], why: '*können* with *du*: *kannst*.' },
    ] },
    { t: 'ex', kind: 'build', h: 'Build the sentence. One or two words do not belong.', items: [
      { a: 'Ich möchte das Schloss besichtigen.', extra: ['besichtige', 'möchten'], why: 'With *ich*: *möchte*. The second verb stays in the infinitive at the end.' },
      { a: 'Kann man auf den Turm gehen?', extra: ['geht'], why: 'After *kann*, the second verb is the infinitive *gehen*, at the end.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: '„Mo–Fr“ heißt: von Montag bis Freitag.', a: 't', why: '*Mo* is *Montag* and *Fr* is *Freitag*.' },
      { q: '„Der Eintritt ist frei“ heißt: Der Eintritt kostet nichts.', a: 't', why: '*frei* here means free of charge.' },
      { q: '„Viertel vor drei“ ist 3:15.', a: 'f', why: '*Viertel vor drei* is 2:45. 3:15 is *Viertel nach drei*.' },
    ] },
  ],
};
