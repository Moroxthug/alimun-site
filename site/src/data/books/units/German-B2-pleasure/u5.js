// German B2 for travel, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Tourism today',
  goal: 'Discuss the effects of tourism and give a balanced opinion.',
  art: 'sun',
  tags: { skills: ['speaking', 'writing', 'vocabulary', 'reading'], topics: ['tourism', 'cause-effect', 'verbs-with-prepositions', 'argumentation', 'opinion'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'What tourism does to a place',
      about: 'Words for the effects of tourism, and verbs for causes and results.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'Tourism brings money and jobs, but it can also change a place for the people who live there. To discuss this, you need words for the **effects** and for the people involved: *die Einheimischen* (the locals), *die Anwohner* (the residents of a street or area) and *die Gäste*.' },
          { t: 'table', caption: 'The effects of tourism', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['der Massentourismus', 'tourism with very large numbers of visitors'],
            ['überlaufen', 'too full of visitors (a place)'],
            ['die Einnahmen', 'money that comes in'],
            ['die Kurzzeitvermietung', 'renting out flats to tourists for short stays'],
            ['verdrängen', 'to push people out of a place'],
            ['die Einheimischen', 'the people who live in a place'],
            ['nachhaltig', 'in a way that protects the environment and the future'],
            ['die Umweltbelastung', 'harm or pressure on the environment'],
          ] },
        ],
        [
          { t: 'text', md: 'Causes and results are often expressed with **verbs + prepositions**. Learn the preposition and its case with the verb.' },
          { t: 'table', caption: 'Verbs for causes and results', explain: ['head'], quiz: true, head: ['Verb', 'Preposition', 'Example'], rows: [
            ['führen', 'zu + Dativ', 'Der Tourismus führt zu höheren Mieten.'],
            ['beitragen', 'zu + Dativ', 'Die Gäste tragen zum Wohlstand der Region bei.'],
            ['profitieren', 'von + Dativ', 'Die Gastronomie profitiert von den Besuchern.'],
            ['leiden', 'unter + Dativ', 'Die Anwohner leiden unter dem Lärm.'],
            ['abhängen', 'von + Dativ', 'Die Insel hängt vom Tourismus ab.'],
            ['sich auswirken', 'auf + Akkusativ', 'Das wirkt sich auf die Natur aus.'],
          ] },
          { t: 'tip', art: 'owl', md: '*etwas zur Folge haben* is a formal way to say "to result in": *Der Bau des Hotels hatte zur Folge, dass der Strand kleiner wurde.*' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['überlaufen', 'voller Touristen'],
            ['die Einheimischen', 'die Menschen, die dort wohnen'],
            ['verdrängen', 'jemanden von seinem Platz wegschieben'],
            ['nachhaltig', 'gut für Umwelt und Zukunft'],
            ['die Einnahmen', 'das Geld, das hereinkommt'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Die Altstadt ist im August völlig ___.', o: ['überlaufen', 'nachhaltig', 'einheimisch'], why: 'Too many visitors in one place: *überlaufen*.' },
            { q: 'Immer mehr Mieter werden durch Ferienwohnungen aus dem Zentrum ___.', o: ['verdrängt', 'gefördert', 'verdient'], why: 'The tenants have to leave: they are pushed out, *verdrängt*.' },
            { q: 'Der Bau des neuen Hotels hatte zur ___, dass der Strand kleiner wurde.', o: ['Folge', 'Ursache', 'Grund'], why: '*etwas zur Folge haben*: to result in.' },
            { q: 'Die Gemeinde setzt auf ___ Tourismus: wenige Gäste, kurze Wege, regionale Produkte.', o: ['nachhaltigen', 'überlaufenen', 'lauten'], why: 'Few guests and local products protect the place: *nachhaltigen Tourismus*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the preposition.', items: [
            { q: 'Viele Restaurants profitieren ___ den Gästen aus dem Ausland.', a: ['von'], why: '*profitieren von* + Dativ.' },
            { q: 'Die Anwohner leiden ___ dem Lärm der Rollkoffer.', a: ['unter'], why: '*leiden unter* + Dativ.' },
            { q: 'Der Tourismus trägt ___ Wohlstand der Region bei. (zu + dem)', a: ['zum'], why: '*beitragen zu* + Dativ: *zu dem* becomes *zum*.' },
            { q: 'Zu viele Ferienwohnungen führen ___ steigenden Mieten.', a: ['zu'], why: '*führen zu* + Dativ.' },
            { q: 'Der Klimawandel wirkt sich auch ___ den Wintertourismus aus.', a: ['auf'], why: '*sich auswirken auf* + Akkusativ.' },
            { q: 'Die Insel hängt fast ganz ___ Tourismus ab. (von + dem)', a: ['vom'], why: '*abhängen von* + Dativ: *von dem* becomes *vom*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'For and against',
      about: 'Build a balanced argument and come to a clear conclusion.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A balanced opinion presents both sides before it comes to a conclusion. First introduce the topic, then give the arguments for and against, weigh them, and finish with your own view. These phrases guide the reader through each step.' },
          { t: 'table', caption: 'Phrases for a balanced argument', explain: ['head', 'col1'], head: ['Phrase', 'Use'], rows: [
            ['Ein wichtiges Argument dafür ist, dass …', 'an argument for'],
            ['Dagegen spricht, dass …', 'an argument against'],
            ['Einerseits …, andererseits …', 'showing two sides'],
            ['Befürworter meinen, … / Kritiker wenden ein, dass …', 'reporting what others think'],
            ['Zwar …, aber …', 'admitting a point, then giving a stronger one'],
            ['Meiner Ansicht nach überwiegen die Vorteile.', 'weighing the arguments'],
            ['Alles in allem … / Abschließend lässt sich sagen, …', 'the conclusion'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: '**Einerseits** bringt der Tourismus Arbeitsplätze, **andererseits** steigen die Mieten.', n: 'Both words take the first place in their clause, so the verb follows directly.' },
            { s: '**Kritiker wenden ein, dass** Kreuzfahrtschiffe kaum Geld in der Stadt lassen.', n: '*einwenden*: to object. The verb *lassen* goes to the end of the *dass* clause.' },
            { s: 'Die Stadt verdient **zwar** an den Gästen, **aber** sie muss auch mehr für die Reinigung ausgeben.', n: 'You admit the income, then point to the costs.' },
            { s: '**Alles in allem** überwiegen für mich die Vorteile, **sofern** die Stadt den Tourismus klug lenkt.', n: '*sofern*: provided that. The verb *lenkt* goes to the end.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In a balanced text, report other people’s views before your own: *Befürworter meinen …*, *Kritiker wenden ein …*. Then give yours with *meiner Ansicht nach* or *ich bin der Meinung, dass …*. This makes your conclusion more convincing.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '___ bringt der Tourismus Geld, andererseits belastet er die Umwelt.', o: ['Einerseits', 'Zwar', 'Dagegen'], why: '*einerseits … andererseits* belong together.' },
            { q: 'Ein wichtiges Argument ___ ist, dass neue Arbeitsplätze entstehen.', o: ['dafür', 'dagegen', 'davon'], why: 'New jobs speak for tourism: *dafür*.' },
            { q: 'Kritiker wenden ___, dass die Einheimischen kaum profitieren.', o: ['ein', 'an', 'aus'], why: '*einwenden*: to object. The prefix *ein* goes to the end of the main clause.' },
            { q: '___ lässt sich sagen, dass beide Seiten gute Argumente haben.', o: ['Abschließend', 'Einerseits', 'Dagegen'], why: 'A conclusion: *abschließend lässt sich sagen*.' },
            { q: 'Ich bin für die Touristenabgabe, ___ das Geld in die Altstadt fließt.', o: ['sofern', 'obwohl', 'zwar'], why: '*sofern*: provided that. You support the tax on one condition.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Die Stadt verdient zwar an den Gästen, ___ sie hat auch höhere Kosten.', a: ['aber'], why: '*zwar … aber*.' },
            { q: 'Einerseits entstehen Arbeitsplätze, ___ steigen die Mieten.', a: ['andererseits'], why: '*einerseits … andererseits*.' },
            { q: 'Alles in ___ überwiegen für mich die Vorteile.', a: ['allem'], why: 'The fixed phrase *alles in allem*: all in all.' },
            { q: 'Befürworter ___, dass der Tourismus die Kultur lebendig hält. (meinen)', a: ['meinen'], why: '*Befürworter* is plural: *sie meinen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Dagegen spricht, dass die Mieten steigen.', why: 'In the *dass* clause the verb *steigen* goes to the end.' },
            { a: 'Meiner Ansicht nach überwiegen die Vorteile.', why: '*Meiner Ansicht nach* takes the first place, so the verb *überwiegen* follows.' },
            { a: 'Kritiker wenden ein, dass die Preise steigen.', why: '*wenden … ein* in the main clause, then the *dass* clause with the verb at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Two views on tourism',
      about: 'Read two opinion pieces from the same old town and compare their arguments.',
      art: 'cactus',
      spreads: [
        [
          { t: 'reading', title: 'Pro: Gäste halten unsere Stadt lebendig (Elena Brandt, Café-Besitzerin)', md: 'Wenn im Frühjahr die ersten Reisegruppen über den Domplatz ziehen, freue ich mich. Ich führe seit fünfzehn Jahren ein kleines Café in der Altstadt, und ohne die Gäste von außerhalb gäbe es mein Geschäft längst nicht mehr. Wie mir geht es vielen: Hotels, Museen, Handwerksbetriebe und Stadtführer leben direkt oder indirekt vom Tourismus.\n\nNatürlich verstehe ich, dass volle Gassen nerven. Aber man sollte nicht vergessen, dass viele Angebote, die auch Einheimische nutzen, nur dank der Besucher existieren: das Theater, die Konzerte im Sommer, die gute Busverbindung zum Bahnhof. Statt über zu viele Touristen zu klagen, sollten wir sie besser verteilen, zum Beispiel mit Angeboten in Vierteln, die bisher kaum jemand kennt.' },
        ],
        [
          { t: 'reading', title: 'Contra: Wir sind keine Kulisse (Tomasz Wierzbicki, Lehrer)', md: 'Ich wohne seit meiner Kindheit in der Altstadt, doch mein Viertel erkenne ich kaum wieder. Wo früher ein Schuster und ein Gemüseladen waren, verkaufen heute Läden Souvenirs, und in vielen Häusern gibt es Ferienwohnungen, die über Internetportale vermietet werden. Viele meiner Nachbarn konnten sich die steigenden Mieten nicht mehr leisten und sind an den Stadtrand gezogen.\n\nIch bin nicht gegen Besucher. Ich wünsche mir aber, dass die Stadt klare Grenzen setzt: weniger Ferienwohnungen, eine Obergrenze für Reisebusse und eine Abgabe, die direkt in Wohnungen für Einheimische fließt. Eine Altstadt, in der niemand mehr wohnt, ist keine Stadt mehr, sondern nur noch eine Kulisse.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Elena Brandt führt ihr Café seit fünfzehn Jahren.', a: 't', why: '*Ich führe seit fünfzehn Jahren ein kleines Café in der Altstadt.*' },
            { q: 'Laut Brandt profitieren nur Hotels vom Tourismus.', a: 'f', why: 'She lists *Hotels, Museen, Handwerksbetriebe und Stadtführer*.' },
            { q: 'Brandt schlägt vor, Touristen auch in andere Viertel zu lenken.', a: 't', why: '*… sollten wir sie besser verteilen, zum Beispiel mit Angeboten in Vierteln, die bisher kaum jemand kennt.*' },
            { q: 'Tomasz Wierzbicki ist erst vor Kurzem in die Altstadt gezogen.', a: 'f', why: '*Ich wohne seit meiner Kindheit in der Altstadt.*' },
            { q: 'Viele Nachbarn von Wierzbicki sind an den Stadtrand gezogen.', a: 't', why: '*… und sind an den Stadtrand gezogen.*' },
            { q: 'Wierzbicki möchte, dass keine Touristen mehr kommen.', a: 'f', why: '*Ich bin nicht gegen Besucher.* He wants clear limits.' },
            { q: 'Die Stadt plant schon eine Obergrenze für Reisebusse.', a: 'ng', why: 'Wierzbicki wishes for one; the text does not say what the town plans.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Who says it, and what does it mean?', items: [
            { q: '„Ohne Besucher gäbe es manche Angebote für Einheimische nicht.“ Wer vertritt diese Meinung?', o: ['Brandt', 'Wierzbicki', 'beide'], why: 'Brandt names the theatre, the concerts and the bus line, which exist *nur dank der Besucher*.' },
            { q: '„Eine Abgabe soll in Wohnungen für Einheimische fließen.“ Wer schlägt das vor?', o: ['Wierzbicki', 'Brandt', 'beide'], why: 'Wierzbicki wants *eine Abgabe, die direkt in Wohnungen für Einheimische fließt*.' },
            { q: 'Was bedeutet „Kulisse“ im letzten Satz?', o: ['ein schöner Hintergrund ohne echtes Leben', 'ein Viertel mit vielen Bewohnern', 'ein Ort mit vielen Theatern'], why: 'In a theatre the *Kulisse* is the painted background. A town where nobody lives only looks like a town.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Die Insel ist im Sommer völlig ___.', o: ['überlaufen', 'nachhaltig', 'einheimisch'], why: 'Too many visitors: *überlaufen*.' },
      { q: 'Viele Geschäfte profitieren ___ den Touristen.', o: ['von', 'unter', 'auf'], why: '*profitieren von* + Dativ.' },
      { q: '___ spricht, dass die Mieten steigen.', o: ['Dagegen', 'Einerseits', 'Zwar'], why: '*Dagegen spricht, dass …*: an argument against.' },
      { q: 'Kritiker wenden ___, dass die Gewinne ungleich verteilt sind.', o: ['ein', 'an', 'aus'], why: '*einwenden*: to object.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Die Anwohner leiden ___ dem Lärm.', a: ['unter'], why: '*leiden unter* + Dativ.' },
      { q: 'Zu viele Ferienwohnungen führen ___ höheren Mieten.', a: ['zu'], why: '*führen zu* + Dativ.' },
      { q: 'Einerseits bringt der Tourismus Geld, ___ belastet er die Umwelt.', a: ['andererseits'], why: '*einerseits … andererseits*.' },
      { q: 'Alles in ___ überwiegen die Vorteile.', a: ['allem'], why: '*alles in allem*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
      ['die Einheimischen', 'die Menschen, die dort wohnen'],
      ['nachhaltig', 'gut für Umwelt und Zukunft'],
      ['verdrängen', 'jemanden von seinem Platz wegschieben'],
      ['die Einnahmen', 'das Geld, das hereinkommt'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Dagegen spricht, dass es zu laut wird.', why: 'Verb at the end of the *dass* clause.' },
      { a: 'Meiner Ansicht nach überwiegen die Nachteile.', why: 'The phrase takes the first place, then the verb.' },
    ] },
  ],
};
