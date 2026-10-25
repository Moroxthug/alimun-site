// German B1 for moving abroad, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Neighbours and everyday life',
  goal: 'Live well with neighbours: house rules, waste, parcels and polite complaints.',
  art: 'dog',
  tags: { skills: ['reading', 'speaking', 'writing', 'vocabulary'], topics: ['hausordnung', 'waste-sorting', 'neighbours', 'polite-requests', 'complaints'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'House rules and waste',
      about: 'Quiet hours, the rules of your building and which bin is for what.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Most rented buildings in Germany have house rules, a **Hausordnung**. It is often part of your rental contract. It says when to be quiet, where to put bikes and rubbish, and who cleans the stairs.' },
          { t: 'table', caption: 'Words in house rules', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['die Ruhezeit', 'time when everyone should be quiet'],
            ['die Nachtruhe', 'quiet at night, usually from 22 to 6 o’clock'],
            ['das Treppenhaus / der Hausflur', 'stairs and hall inside the building'],
            ['der Keller', 'cellar, basement'],
            ['der Hausmeister', 'caretaker of the building'],
            ['die Hausverwaltung', 'company that manages the building for the owner'],
          ] },
          { t: 'tip', art: 'owl', md: 'On Sundays and public holidays people expect quiet all day: no drilling and no lawn mowing. Some buildings also have a quiet time at lunch, the *Mittagsruhe*.' },
        ],
        [
          { t: 'reading', title: 'Aus der Hausordnung', md: 'Bitte nehmen Sie Rücksicht auf Ihre Nachbarn. Von 22 bis 6 Uhr gilt Nachtruhe. Stellen Sie Musik und Fernseher in dieser Zeit auf Zimmerlautstärke.\n\nFahrräder und Kinderwagen gehören in den Fahrradkeller, nicht in den Hausflur. Der Hausflur muss frei bleiben.\n\nDie Mieter im Erdgeschoss und im ersten Stock reinigen das Treppenhaus abwechselnd jede Woche. Der Plan hängt neben dem Eingang.\n\nBitte trennen Sie den Müll und benutzen Sie die richtigen Tonnen im Hof.' },
          { t: 'ex', kind: 'tf', h: 'Read the house rules. True or false?', items: [
            { q: 'Um 23 Uhr darf man laut Musik hören.', a: 'f', why: 'From 22 to 6 o’clock it is *Nachtruhe*: TV and music only at room volume.' },
            { q: 'Das Fahrrad darf im Hausflur stehen.', a: 'f', why: 'Bikes go in the *Fahrradkeller*. The hall must stay free.' },
            { q: 'Die Mieter putzen das Treppenhaus selbst.', a: 't', why: 'They clean it in turns, every week.' },
            { q: 'Die Mülltonnen stehen im Hof.', a: 't', why: '*die richtigen Tonnen im Hof*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Germans sort their rubbish. The colours of the bins are often the same, but they can differ from town to town. Your town’s waste calendar, the **Abfallkalender**, says what goes where and when the bins are emptied.' },
          { t: 'table', caption: 'Which bin?', explain: ['head'], quiz: true, head: ['Bin', 'Colour', 'What goes in it'], rows: [
            ['die Biotonne', 'oft braun', 'Obst- und Gemüsereste, Kaffeesatz'],
            ['die Papiertonne', 'oft blau', 'Zeitungen, Kartons'],
            ['die Gelbe Tonne / der Gelbe Sack', 'gelb', 'Verpackungen aus Plastik und Metall, Dosen'],
            ['die Restmülltonne', 'oft grau oder schwarz', 'alles andere, zum Beispiel Windeln'],
            ['der Glascontainer', 'weiß, grün, braun', 'leere Glasflaschen und Gläser, nach Farben'],
          ] },
          { t: 'tip', art: 'owl', md: 'Many bottles and cans have a deposit, a *Pfand*. Take them back to the shop and you get the money back.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Where does it go? Match the rubbish and the bin.', pairs: [
            ['ein alter Karton', 'die Papiertonne'],
            ['eine leere Dose Tomaten', 'die Gelbe Tonne'],
            ['eine Bananenschale', 'die Biotonne'],
            ['eine leere Weinflasche ohne Pfand', 'der Glascontainer'],
            ['eine benutzte Windel', 'die Restmülltonne'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Is it OK? Choose the right answer.', items: [
            { q: 'Sonntag, 11 Uhr: Darf ich in meiner Wohnung ein Loch in die Wand bohren?', o: ['Nein, am Sonntag ist den ganzen Tag Ruhe.', 'Ja, vormittags ist das kein Problem.', 'Ja, wenn der Hausmeister da ist.'], why: 'On Sundays people expect quiet all day.' },
            { q: 'Mittwoch, 23 Uhr: Darf ich Gäste haben und laut Musik hören?', o: ['Nein, ab 22 Uhr ist Nachtruhe.', 'Ja, in der Woche ist das egal.', 'Ja, bis Mitternacht.'], why: 'Night quiet usually starts at 22 o’clock.' },
            { q: 'Wohin kommen leere Pfandflaschen?', o: ['zurück in den Laden', 'in die Gelbe Tonne', 'in die Restmülltonne'], why: 'Bottles with a *Pfand* go back to the shop, and you get your money back.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Asking for and offering help',
      about: 'Parcels for neighbours, borrowing things and offering a hand.',
      art: 'parrot',
      spreads: [
        [
          { t: 'dialogue', title: 'An der Wohnungstür', lines: [
            { who: 'Herr Lehmann', s: 'Hallo, ich bin Jakob Lehmann aus dem dritten Stock. Ich habe gestern ein Paket für Sie angenommen.' },
            { who: 'Fatma', s: 'Ach, vielen Dank! Ich habe schon die Karte im Briefkasten gefunden.' },
            { who: 'Herr Lehmann', s: 'Kein Problem. Ich bin morgen den ganzen Tag nicht da. Könnten Sie vielleicht ein Paket für mich annehmen?' },
            { who: 'Fatma', s: 'Ja, gern. Ich arbeite morgen zu Hause.' },
            { who: 'Herr Lehmann', s: 'Super, danke. Und noch eine Frage: Hätten Sie vielleicht eine Leiter? Ich möchte eine Lampe aufhängen.' },
            { who: 'Fatma', s: 'Ja, die steht im Keller. Soll ich sie Ihnen nachher bringen?' },
            { who: 'Herr Lehmann', s: 'Das wäre sehr nett. Sie bekommen sie morgen zurück.' },
          ] },
          { t: 'text', md: 'If you are not at home, the delivery service often leaves a parcel with a neighbour and puts a card in your letter box. Many neighbours say *Sie* to each other at first. Younger neighbours often say *du* quite soon.' },
        ],
        [
          { t: 'text', md: 'To **ask**, use the Konjunktiv II: *Könnten Sie …?*, *Hätten Sie …?*, *Würden Sie …?* To **offer**, use *Soll ich …?* or *Ich kann gern …*.' },
          { t: 'examples', items: [
            { s: '**Könnten** Sie mein Paket annehmen?', n: 'A polite request. *annehmen* goes to the end.' },
            { s: '**Hätten** Sie vielleicht einen Akkuschrauber?', n: 'Asking if someone has something you need.' },
            { s: '**Soll** ich Ihnen die Leiter bringen?', n: 'An offer: shall I …?' },
            { s: 'Kann ich **mir** Ihre Bohrmaschine **leihen**?', n: '*sich etwas leihen*: to borrow. *mir* is dative.' },
          ] },
          { t: 'tip', art: 'owl', md: '*leihen* works both ways. *Ich leihe **dir** meine Leiter* means I lend you my ladder. *Ich leihe **mir** deine Leiter* means I borrow your ladder.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Sie möchten etwas anbieten: ___ ich Ihnen helfen?', o: ['Soll', 'Könnten', 'Hätten'], why: 'An offer: *Soll ich …?*' },
            { q: 'Kann ich ___ Ihre Leiter leihen?', o: ['mir', 'mich', 'Ihnen'], why: '*sich etwas leihen* (borrow): dative *mir*.' },
            { q: 'Kannst du ___ bis morgen dein Auto leihen?', o: ['mir', 'mich', 'dir'], why: 'You lend it to me: *jemandem etwas leihen*, dative *mir*.' },
            { q: 'Ihr Nachbar fragt: „Könnten Sie mein Paket annehmen?“ Sie können nicht. Sie sagen:', o: ['Das tut mir leid, ich bin morgen nicht zu Hause.', 'Nein. Tschüss.', 'Ja, gern, ich bin nicht da.'], why: 'Say no politely and give a reason.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the polite requests with the Konjunktiv II.', items: [
            { q: '___ Sie mir kurz helfen? (können)', a: ['Könnten', 'Koennten'], why: '*können* becomes *könnten*.' },
            { q: '___ Sie vielleicht etwas Zucker für mich? (haben)', a: ['Hätten', 'Haetten'], why: '*haben* becomes *hätten*.' },
            { q: '___ Sie bitte die Tür aufhalten? (werden)', a: ['Würden', 'Wuerden'], why: '*werden* becomes *würden*, with the infinitive at the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the requests and offers.', items: [
            { a: 'Könnten Sie mein Paket annehmen?', why: '*Könnten* first, *annehmen* at the end.' },
            { a: 'Soll ich Ihnen die Leiter bringen?', why: 'The dative pronoun *Ihnen* comes before *die Leiter*.' },
            { a: 'Kann ich mir Ihre Bohrmaschine leihen?', why: '*sich etwas leihen*: *mir* directly after *ich*, *leihen* at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Complaining politely',
      about: 'Talk to a neighbour about a problem, and read a note in the stairwell.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'If a neighbour is too loud or blocks the hall, talk to them first, in a friendly way. A good complaint has three parts: say sorry for disturbing, describe the problem, then ask politely for a change. Go to the landlord or the *Hausverwaltung* only if talking does not help.' },
          { t: 'examples', items: [
            { s: 'Entschuldigen Sie, **dass** ich **störe**, aber …', n: 'A friendly start. After *dass*, the verb goes to the end.' },
            { s: 'Ihre Musik war gestern bis zwei Uhr nachts sehr laut.', n: 'Describe the facts, not the person.' },
            { s: '**Wäre** es möglich, nach 22 Uhr etwas leiser **zu sein**?', n: '*Wäre es möglich, … zu …?*: a very polite request.' },
            { s: 'Ich **würde** Sie **bitten**, die Fahrräder in den Keller zu stellen.', n: 'Polite and clear.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Im Treppenhaus', lines: [
            { who: 'Marta', s: 'Guten Abend, Herr Brandt. Entschuldigen Sie bitte, dass ich störe.' },
            { who: 'Herr Brandt', s: 'Guten Abend. Was gibt es denn?' },
            { who: 'Marta', s: 'Ich wohne direkt unter Ihnen. In den letzten Nächten war es oft nach Mitternacht sehr laut. Ich muss um fünf Uhr aufstehen.' },
            { who: 'Herr Brandt', s: 'Oh, das tut mir leid. Wir hatten Besuch, das war mir nicht klar.' },
            { who: 'Marta', s: 'Wäre es möglich, nach 22 Uhr etwas leiser zu sein?' },
            { who: 'Herr Brandt', s: 'Natürlich. Und wenn es wieder zu laut ist, klingeln Sie einfach.' },
            { who: 'Marta', s: 'Danke für Ihr Verständnis.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Marta wohnt über Herrn Brandt.', a: 'f', why: '*Ich wohne direkt unter Ihnen.*' },
            { q: 'Herr Brandt wusste nicht, dass es so laut war.', a: 't', why: '*Das war mir nicht klar.*' },
            { q: 'Herr Brandt ist unfreundlich.', a: 'f', why: 'He says sorry and offers a solution.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Ein Zettel im Treppenhaus', md: 'Liebe Nachbarinnen und Nachbarn,\n\nseit einigen Wochen stehen im Hausflur immer wieder Fahrräder, Kinderwagen und Schuhe. Gestern ist eine ältere Nachbarin aus dem zweiten Stock fast über ein Fahrrad gefallen. Außerdem muss der Hausflur bei einem Feuer frei sein.\n\nWir möchten Sie deshalb freundlich bitten, Fahrräder in den Fahrradkeller zu stellen. Für Kinderwagen gibt es neben dem Eingang einen Abstellraum. Den Schlüssel bekommen Sie beim Hausmeister, Herrn Kowalski.\n\nNoch eine Bitte: In der Gelben Tonne liegen oft Kartons. Bitte werfen Sie Papier und Kartons in die blaue Tonne und falten Sie große Kartons vorher zusammen. Sonst ist die Tonne schon nach zwei Tagen voll.\n\nWenn Sie Fragen oder Ideen haben, sprechen Sie uns gern an oder schreiben Sie in unsere Hausgruppe.\n\nVielen Dank und herzliche Grüße\nFamilie Demir (Erdgeschoss links) und Lea Hartmann (1. Stock rechts)' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the note. True, false or not given?', items: [
            { q: 'Eine Nachbarin ist über ein Fahrrad gefallen und hat sich verletzt.', a: 'f', why: 'She *almost* fell: *fast über ein Fahrrad gefallen*.' },
            { q: 'Für Kinderwagen gibt es einen eigenen Raum.', a: 't', why: '*einen Abstellraum neben dem Eingang*.' },
            { q: 'Den Schlüssel für den Abstellraum hat Familie Demir.', a: 'f', why: 'The caretaker, Herr Kowalski, has the key.' },
            { q: 'Kartons gehören in die Gelbe Tonne.', a: 'f', why: 'Paper and cardboard go in the blue bin.' },
            { q: 'Lea Hartmann hat zwei Kinder.', a: 'ng', why: 'The note does not say this.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build polite sentences for a complaint.', items: [
            { a: 'Entschuldigen Sie, dass ich störe.', why: 'After *dass*, the verb *störe* goes to the end.' },
            { a: 'Wäre es möglich, etwas leiser zu sein?', why: '*Wäre* first; *zu sein* at the end of the infinitive clause.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Die Regeln für alle Mieter in einem Haus stehen in der ___.', o: ['Hausordnung', 'Hausverwaltung', 'Hausgruppe'], why: '*die Hausordnung*: the house rules.' },
      { q: 'Kaffeesatz und Gemüsereste kommen in die ___.', o: ['Biotonne', 'Gelbe Tonne', 'Papiertonne'], why: 'Food waste goes in the *Biotonne*.' },
      { q: 'Nachtruhe ist meistens von ___.', o: ['22 bis 6 Uhr', '18 bis 8 Uhr', '12 bis 15 Uhr'], why: 'Usually from 22 to 6 o’clock.' },
      { q: '___ ich Ihnen die Tasche nach oben tragen?', o: ['Soll', 'Hätten', 'Könnten'], why: 'An offer: *Soll ich …?*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '___ Sie mein Paket annehmen? (können, Konjunktiv II)', a: ['Könnten', 'Koennten'], why: 'Polite request: *Könnten Sie …?*' },
      { q: 'Kann ich ___ Ihre Leiter leihen? (ich, Dativ)', a: ['mir'], why: '*sich etwas leihen*: *mir*.' },
      { q: 'Entschuldigen Sie, dass ich ___. (stören)', a: ['störe', 'stoere'], why: 'After *dass*, the verb goes to the end: *störe*.' },
      { q: 'Wäre es möglich, nach 22 Uhr leiser zu ___? (sein)', a: ['sein'], why: '*Wäre es möglich, … zu sein?*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the rubbish and the bin.', pairs: [
      ['Zeitungen', 'die Papiertonne'],
      ['ein Joghurtbecher aus Plastik', 'die Gelbe Tonne'],
      ['ein leeres Marmeladenglas', 'der Glascontainer'],
      ['Apfelreste', 'die Biotonne'],
    ] },
  ],
};
