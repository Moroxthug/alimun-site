// German A2 for travel, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Sightseeing',
  goal: 'Ask about sights, opening times and tickets, and talk about what you saw.',
  art: 'dragon',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['sightseeing', 'opening-times', 'tickets', 'perfekt', 'praeteritum-sein-haben'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Sights, tours and tickets',
      about: 'Ask about opening times, tickets and tours.',
      art: 'sun',
      spreads: [
        [
          { t: 'dialogue', title: 'In der Tourist-Information', lines: [
            { who: 'Mitarbeiter', s: 'Guten Morgen! Wie kann ich Ihnen helfen?' },
            { who: 'Ines', s: 'Guten Morgen. Wir sind nur zwei Tage hier. Was kann man hier besichtigen?' },
            { who: 'Mitarbeiter', s: 'Die Altstadt ist sehr schön, und das Schloss auf dem Berg ist besonders interessant.' },
            { who: 'Ines', s: 'Wann hat das Schloss geöffnet?' },
            { who: 'Mitarbeiter', s: 'Von Dienstag bis Sonntag, von 10 bis 18 Uhr. Montags ist es geschlossen.' },
            { who: 'Ines', s: 'Was kostet der Eintritt?' },
            { who: 'Mitarbeiter', s: '12 Euro. Für Studenten gibt es eine Ermäßigung, dann kostet es 8 Euro.' },
            { who: 'Ines', s: 'Gibt es auch eine Stadtführung?' },
            { who: 'Mitarbeiter', s: 'Ja, jeden Tag um 14 Uhr. Treffpunkt ist vor dem Rathaus. Die Führung dauert zwei Stunden.' },
            { who: 'Ines', s: 'Super, vielen Dank!' },
          ] },
        ],
        [
          { t: 'table', caption: 'Sightseeing', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['die Sehenswürdigkeit', 'sight, a place to visit'],
            ['die Altstadt', 'old town'],
            ['das Schloss', 'castle, palace'],
            ['der Dom', 'cathedral'],
            ['der Eintritt', 'the price to go in'],
            ['die Ermäßigung / ermäßigt', 'lower price / at a lower price'],
            ['die Öffnungszeiten', 'opening hours'],
            ['geöffnet / geschlossen', 'open / closed'],
            ['die Führung', 'guided tour'],
          ] },
          { t: 'text', md: 'With days, *am Montag* means one Monday. *Montags*, with *-s* and a small letter, means every Monday: *Montags ist das Museum geschlossen.*' },
          { t: 'tip', art: 'owl', md: 'Many museums have a lower price, *ermäßigt*, for students, children or older people. You often need to show a card. Ask: *Gibt es eine Ermäßigung für Studenten?*' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the questions and answers.', pairs: [
            ['Wann hat das Museum geöffnet?', 'Täglich von 9 bis 17 Uhr.'],
            ['Was kostet der Eintritt?', '10 Euro, ermäßigt 6 Euro.'],
            ['Wie lange dauert die Führung?', 'Etwa anderthalb Stunden.'],
            ['Wo ist der Treffpunkt?', 'Vor dem Haupteingang.'],
            ['Gibt es eine Ermäßigung für Kinder?', 'Ja, Kinder unter 6 Jahren zahlen nichts.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Das Museum ist montags ___. Am Montag kann man es nicht besuchen.', o: ['geschlossen', 'geöffnet', 'ermäßigt'], why: 'You cannot visit it, so it is closed: *geschlossen*.' },
            { q: 'Ich bin Student. Gibt es eine ___?', o: ['Ermäßigung', 'Öffnungszeit', 'Sehenswürdigkeit'], why: 'Students often pay less: *eine Ermäßigung*.' },
            { q: 'Die Führung ___ um 14 Uhr.', o: ['beginnt', 'dauert', 'kostet'], why: 'A time on the clock: the tour starts, *beginnt*.' },
            { q: 'Das Museum ist jeden Montag zu. Es ist ___ geschlossen.', o: ['montags', 'Montag', 'Montage'], why: 'Every Monday: *montags*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Wann hat das Schloss geöffnet?', why: '*Wann*, then the verb *hat*, and *geöffnet* at the end.' },
            { a: 'Wo beginnt die Stadtführung?', why: 'The question word, then the verb.' },
            { a: 'Was kann man hier besichtigen?', why: '*kann* in second place, the infinitive *besichtigen* at the end.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Was ___ der Eintritt? (kosten)', a: ['kostet'], why: '*der Eintritt* is *er*: *er kostet*.' },
            { q: 'Das Museum hat von 10 bis 18 Uhr ___. (open)', a: ['geöffnet', 'geoeffnet', 'offen'], why: '*geöffnet haben*: to be open.' },
            { q: 'Treffpunkt ist ___ dem Rathaus. (in front of)', a: ['vor'], why: '*vor dem Rathaus*: in front of the town hall.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Talking about the day',
      about: 'Say what you did and saw, with the Perfekt.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To talk about the past, use the **Perfekt**: *haben* or *sein* + the participle at the end. Most verbs use *haben*. Verbs for going from one place to another, like *gehen*, *fahren* and *steigen*, use *sein*. *Bleiben* also uses *sein*.\n\nFor *sein* and *haben*, people usually use the **Präteritum**: *Es war toll. Wir hatten Glück.*' },
          { t: 'table', caption: 'Perfekt: verbs for a day out', quiz: true, head: ['Infinitiv', 'Perfekt'], rows: [
            ['besichtigen', 'hat besichtigt'],
            ['besuchen', 'hat besucht'],
            ['sehen', 'hat gesehen'],
            ['machen', 'hat gemacht'],
            ['essen', 'hat gegessen'],
            ['fahren', 'ist gefahren'],
            ['gehen', 'ist gegangen'],
            ['steigen', 'ist gestiegen'],
            ['bleiben', 'ist geblieben'],
          ] },
        ],
        [
          { t: 'reading', title: 'Nachricht an Clara', md: 'Hallo Clara,\n\nheute war ein toller Tag! Am Vormittag haben wir das Schloss besichtigt. Dann sind wir auf den Turm gestiegen – 220 Stufen! Von oben haben wir die ganze Stadt gesehen. Mittags haben wir in der Altstadt Flammkuchen gegessen. Am Nachmittag sind wir mit einem Boot auf dem Fluss gefahren. Am Abend waren wir sehr müde und sind im Hotel geblieben.\n\nLiebe Grüße\nInes' },
          { t: 'examples', items: [
            { s: 'Wir **haben** das Schloss **besichtigt**.', n: 'Verbs that start with *be-* make the participle without *ge-*.' },
            { s: 'Wir **sind** auf den Turm **gestiegen**.', n: 'Going from one place to another: *sein*.' },
            { s: 'Es **war** toll!', n: 'The Präteritum of *sein*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'haben or sein? Choose the right form.', items: [
            { q: 'Wir ___ mit dem Boot gefahren.', o: ['sind', 'haben', 'hat'], why: '*fahren*: going from one place to another, so *sein*.' },
            { q: 'Ich ___ viele Fotos gemacht.', o: ['habe', 'bin', 'ist'], why: '*machen* uses *haben*.' },
            { q: 'Am Abend ___ wir ins Konzert gegangen.', o: ['sind', 'haben', 'hat'], why: '*gehen* uses *sein*.' },
            { q: 'Paul ___ den Dom besichtigt.', o: ['hat', 'ist', 'haben'], why: '*besichtigen* uses *haben*. *Paul* is *er*: *hat*.' },
            { q: 'Wir ___ im Hotel geblieben.', o: ['sind', 'haben', 'hat'], why: '*bleiben* uses *sein*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the participle or the Präteritum.', items: [
            { q: 'Wir haben das Museum ___. (besuchen)', a: ['besucht'], why: '*be-* verbs: no *ge-*. *besuchen → besucht*.' },
            { q: 'Hast du den Dom ___? (sehen)', a: ['gesehen'], why: '*sehen → gesehen*.' },
            { q: 'Mittags haben wir Fisch ___. (essen)', a: ['gegessen'], why: '*essen → gegessen*.' },
            { q: 'Wir sind zum Schloss ___. (gehen)', a: ['gegangen'], why: '*gehen → gegangen*.' },
            { q: 'Das Wetter ___ super. (sein, Präteritum)', a: ['war'], why: '*es war*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Was habt ihr heute gemacht?', why: '*habt* in second place, the participle *gemacht* at the end.' },
            { a: 'Seid ihr auf den Turm gestiegen?', why: 'A yes/no question: *Seid* first, *gestiegen* at the end.' },
            { a: 'Wie war die Stadtführung?', why: '*Wie*, then the verb *war*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a city leaflet',
      about: 'Read a leaflet from the tourist office and plan your day.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Tourist offices give out leaflets about their town. Read this leaflet about a small town.' },
          { t: 'reading', title: 'Willkommen in Lindenau!', md: 'Lindenau ist eine kleine Stadt am Fluss mit einer schönen Altstadt. Hier gibt es viel zu sehen.\n\n**Das Schloss**\nDas Schloss steht auf einem Berg über der Stadt. Sie können zu Fuß hinaufgehen (20 Minuten) oder mit dem Bus Nummer 5 fahren. Geöffnet: Dienstag bis Sonntag, 10 bis 17 Uhr. Eintritt: 9 €, ermäßigt 6 €.\n\n**Das Stadtmuseum**\nIm Museum lernen Sie die Geschichte der Stadt kennen. Geöffnet: täglich 11 bis 18 Uhr. Am ersten Sonntag im Monat ist der Eintritt frei.\n\n**Die Stadtführung**\nJeden Samstag um 11 Uhr, Treffpunkt: Rathaus. Dauer: 90 Minuten, 8 € pro Person. Bitte melden Sie sich vorher in der Tourist-Information an.\n\n**Bootsfahrten**\nVon April bis Oktober fahren die Boote jede Stunde ab der Brücke.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the leaflet. True, false or not given?', items: [
            { q: 'Man kann mit dem Bus zum Schloss fahren.', a: 't', why: '*oder mit dem Bus Nummer 5 fahren*.' },
            { q: 'Das Schloss ist montags geöffnet.', a: 'f', why: 'It is open from Tuesday to Sunday.' },
            { q: 'Das Stadtmuseum hat jeden Tag geöffnet.', a: 't', why: '*täglich*: every day.' },
            { q: 'Die Stadtführung gibt es auch auf Englisch.', a: 'ng', why: 'The leaflet does not say which languages the tour is in.' },
            { q: 'Für die Stadtführung muss man sich vorher anmelden.', a: 't', why: '*Bitte melden Sie sich vorher … an.*' },
            { q: 'Im Januar kann man eine Bootsfahrt machen.', a: 'f', why: 'The boats run from April to October.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Zwei Studenten besuchen das Schloss. Sie zahlen zusammen ___.', o: ['12 €', '18 €', '9 €'], why: 'Students pay the lower price, 6 €. Two students: 12 €.' },
            { q: 'Wann kostet das Museum nichts?', o: ['am ersten Sonntag im Monat', 'jeden Samstag', 'von April bis Oktober'], why: '*Am ersten Sonntag im Monat ist der Eintritt frei.*' },
            { q: 'Wie lange dauert die Stadtführung?', o: ['anderthalb Stunden', 'eine Stunde', '20 Minuten'], why: '90 minutes are one and a half hours: *anderthalb Stunden*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the three places to visit.', items: [
            { s: 'In Lindenau besuchen Sie das [Schloss], das [Stadtmuseum] und die [Altstadt].', why: 'Three sights from the leaflet.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Montags ist das Museum ___. Man kann es nicht besuchen.', o: ['geschlossen', 'geöffnet', 'ermäßigt'], why: '*geschlossen*: closed.' },
      { q: 'Wir ___ auf den Turm gestiegen.', o: ['sind', 'haben', 'hat'], why: '*steigen* uses *sein*.' },
      { q: 'Ich ___ viele Fotos gemacht.', o: ['habe', 'bin', 'hat'], why: '*machen* uses *haben*.' },
      { q: 'Für Studenten gibt es eine ___.', o: ['Ermäßigung', 'Führung', 'Altstadt'], why: 'A lower price: *eine Ermäßigung*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Wir haben das Schloss ___. (besichtigen)', a: ['besichtigt'], why: '*be-* verbs: no *ge-*.' },
      { q: 'Am Abend sind wir ins Theater ___. (gehen)', a: ['gegangen'], why: '*gehen → gegangen*.' },
      { q: 'Was ___ der Eintritt? (kosten)', a: ['kostet'], why: '*er kostet*.' },
      { q: 'Wie ___ dein Tag? (sein, Präteritum)', a: ['war'], why: '*sein* in the Präteritum: *war*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: 'Wann hat das Museum geöffnet?', why: '*Wann*, then *hat*, and *geöffnet* at the end.' },
      { a: 'Was habt ihr gestern gemacht?', why: '*habt* in second place, *gemacht* at the end.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Bei einer Führung erklärt eine Person die Stadt oder das Museum.', a: 't', why: '*eine Führung*: a guided tour.' },
      { q: '„Täglich geöffnet“ heißt: nur am Wochenende geöffnet.', a: 'f', why: '*täglich*: every day.' },
    ] },
  ],
};
