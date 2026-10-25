// German A2 for travel, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Eating out',
  goal: 'Order food, ask about dishes and pay.',
  art: 'pretzel',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['restaurant', 'menu', 'akkusativ', 'allergies', 'paying'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Ordering and asking about the menu',
      about: 'Ask for a table, ask about dishes and order.',
      art: 'pizza',
      spreads: [
        [
          { t: 'dialogue', title: 'Im Restaurant', lines: [
            { who: 'Kellnerin', s: 'Guten Abend! Haben Sie reserviert?' },
            { who: 'Kofi', s: 'Nein. Haben Sie einen Tisch für zwei Personen?' },
            { who: 'Kellnerin', s: 'Ja, der Tisch am Fenster ist frei. Hier ist die Speisekarte. Was möchten Sie trinken?' },
            { who: 'Lea', s: 'Ich hätte gern ein Glas Weißwein.' },
            { who: 'Kofi', s: 'Und für mich ein Mineralwasser, bitte.' },
            { who: 'Kellnerin', s: 'Gern. Möchten Sie schon bestellen?' },
            { who: 'Lea', s: 'Was können Sie uns empfehlen?' },
            { who: 'Kellnerin', s: 'Der Fisch ist heute sehr frisch. Dazu gibt es Kartoffeln und Salat.' },
            { who: 'Lea', s: 'Gut, dann nehme ich den Fisch.' },
            { who: 'Kofi', s: 'Was sind Maultaschen?' },
            { who: 'Kellnerin', s: 'Das sind große Nudeltaschen mit Fleisch und Spinat, eine Spezialität aus Schwaben.' },
            { who: 'Kofi', s: 'Dann probiere ich die Maultaschen.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In many restaurants in Germany you can sit at any free table. In busy restaurants, and in the evening, it is better to reserve a table.' },
        ],
        [
          { t: 'table', caption: 'The menu', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['die Speisekarte', 'menu'],
            ['die Vorspeise', 'starter'],
            ['das Hauptgericht', 'main course'],
            ['die Nachspeise', 'dessert'],
            ['die Beilage', 'side dish'],
            ['die Getränke', 'drinks'],
            ['das Tagesgericht', 'dish of the day'],
          ] },
          { t: 'ex', kind: 'match', h: 'Which part of the menu?', pairs: [
            ['Tomatensuppe', 'Vorspeise'],
            ['Schnitzel mit Pommes', 'Hauptgericht'],
            ['Apfelstrudel mit Vanilleeis', 'Nachspeise'],
            ['Reis', 'Beilage'],
            ['Apfelschorle', 'Getränke'],
          ] },
        ],
        [
          { t: 'text', md: 'To order, say *Ich nehme …*, *Ich hätte gern …* or *Für mich bitte …*. After *nehmen* and *hätte gern*, use the **Akkusativ**. Only the masculine words change: *der Salat → den Salat, einen Salat*.' },
          { t: 'examples', items: [
            { s: 'Ich nehme **den** Fisch.', n: '*der Fisch → den Fisch*' },
            { s: 'Ich hätte gern **einen** Apfelsaft.', n: '*der Apfelsaft → einen Apfelsaft*' },
            { s: 'Für mich bitte **eine** Suppe und **ein** Wasser.', n: '*die* and *das* do not change: *eine Suppe, ein Wasser*.' },
            { s: 'Was **empfehlen** Sie?', n: 'A good question when you do not know the food.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Ich nehme ___ Salat.', o: ['einen', 'ein', 'eine'], why: '*der Salat* is masculine: Akkusativ *einen Salat*.' },
            { q: 'Ich hätte gern ___ Tasse Kaffee.', o: ['eine', 'einen', 'ein'], why: '*die Tasse* is feminine: *eine Tasse*.' },
            { q: 'Für mich bitte ___ Wasser.', o: ['ein', 'einen', 'eine'], why: '*das Wasser* is neuter: *ein Wasser*.' },
            { q: 'Was ___ Sie heute empfehlen?', o: ['können', 'kann', 'könnt'], why: 'With *Sie*: *können*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Was können Sie uns empfehlen?', why: '*können* in second place, *uns* after *Sie*, and *empfehlen* at the end.' },
            { a: 'Was ist das Tagesgericht?', why: 'The question word, then the verb *ist*.' },
            { a: 'Möchten Sie schon bestellen?', why: 'A yes/no question: *Möchten* first, *bestellen* at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Allergies, preferences and paying',
      about: 'Say what you cannot eat and pay the bill.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'If you cannot eat something, tell the waiter. Say *Ich bin allergisch gegen …*, *Ich esse kein …* or ask for a dish *ohne …*. After *gegen* and *ohne*, use the **Akkusativ**.' },
          { t: 'examples', items: [
            { s: 'Ich bin **allergisch gegen** Nüsse.', n: 'I cannot eat nuts.' },
            { s: 'Ich esse **kein** Fleisch. Ich bin Vegetarierin.', n: 'A woman says *Vegetarierin*, a man says *Vegetarier*.' },
            { s: 'Ist in der Soße Sahne?', n: 'Ask what is in a dish.' },
            { s: 'Den Salat bitte **ohne** Zwiebeln.', n: '*ohne*: without.' },
            { s: 'Haben Sie auch etwas **ohne** Fleisch?', n: 'Ask for a dish without meat.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the EU, restaurants must be able to tell you about the main allergens in their food. Just ask the staff.' },
        ],
        [
          { t: 'dialogue', title: 'Zahlen, bitte!', lines: [
            { who: 'Kofi', s: 'Entschuldigung, wir möchten bitte zahlen.' },
            { who: 'Kellnerin', s: 'Gern. Zusammen oder getrennt?' },
            { who: 'Kofi', s: 'Getrennt, bitte. Ich hatte die Maultaschen und das Wasser.' },
            { who: 'Kellnerin', s: 'Das macht 16,80 Euro.' },
            { who: 'Kofi', s: 'Hier sind 18 Euro. Stimmt so.' },
            { who: 'Kellnerin', s: 'Vielen Dank! Und Sie?' },
            { who: 'Lea', s: 'Kann ich mit Karte zahlen?' },
            { who: 'Kellnerin', s: 'Ja, natürlich.' },
          ] },
          { t: 'text', md: 'In Germany you usually pay at the table. *Zusammen* means one bill for everyone. *Getrennt* means everyone pays for their own food. A tip of about 5 to 10 percent is usual: you say the total with the tip, or you say *Stimmt so* (keep the change). Not every restaurant takes cards, so ask first.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Ich bin allergisch ___ Nüsse.', o: ['gegen', 'für', 'mit'], why: '*allergisch gegen*: always with *gegen*.' },
            { q: 'Ich esse ___ Fleisch.', o: ['kein', 'keine', 'nicht'], why: '*das Fleisch*: *kein Fleisch*. Use *kein* with a noun.' },
            { q: 'Sie bezahlen für alle am Tisch. Sie sagen: ___', o: ['Zusammen, bitte.', 'Getrennt, bitte.', 'Stimmt so.'], why: 'One bill for everyone: *zusammen*.' },
            { q: 'Die Rechnung ist 27,50 €. Sie geben 30 € und sagen: ___', o: ['Stimmt so.', 'Getrennt, bitte.', 'Zusammen, bitte.'], why: '*Stimmt so*: keep the change. The 2,50 € is the tip.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the questions and answers.', pairs: [
            ['Zusammen oder getrennt?', 'Getrennt, bitte.'],
            ['Kann ich mit Karte zahlen?', 'Nein, leider nur bar.'],
            ['Ist in der Suppe Sahne?', 'Nein, nur Gemüse und Wasser.'],
            ['Haben Sie auch vegetarische Gerichte?', 'Ja, die Gemüse-Lasagne.'],
            ['Was macht das?', '24,60 Euro, bitte.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Ich bin allergisch ___ Erdnüsse.', a: ['gegen'], why: '*allergisch gegen*.' },
            { q: 'Den Salat bitte ___ Zwiebeln. Ich mag keine Zwiebeln.', a: ['ohne'], why: '*ohne*: without.' },
            { q: 'Die ___, bitte! – Gern, das macht 23 Euro.', a: ['Rechnung'], why: '*die Rechnung*: the bill.' },
            { q: 'Ich esse ___ Fisch. (kein)', a: ['keinen'], why: '*der Fisch* is masculine. Akkusativ: *keinen Fisch*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Haben Sie auch etwas ohne Fleisch?', why: 'A yes/no question: *Haben* first.' },
            { a: 'Was macht das zusammen?', why: '*Was macht das?* asks for the price. *zusammen* goes at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a menu and a review',
      about: 'Read a menu and a short review of a restaurant.',
      art: 'croissant',
      spreads: [
        [
          { t: 'reading', title: 'Speisekarte: Gasthaus Zur Linde', md: '**Vorspeisen**\nKartoffelsuppe mit Brot (vegetarisch) – 5,90 €\nGemischter Salat mit Ei – 6,50 €\n\n**Hauptgerichte**\nSchnitzel vom Schwein mit Pommes und Salat – 15,90 €\nGemüse-Lasagne (vegetarisch) – 12,50 €\nForelle mit Kartoffeln und Spinat – 17,80 €\n\n**Nachspeisen**\nApfelstrudel mit Vanilleeis – 5,50 €\n\n**Tagesgericht** (nur mittags, Montag bis Freitag): Fragen Sie unser Team!\n\nInformationen zu Allergenen bekommen Sie bei unserem Service.' },
          { t: 'ex', kind: 'choice', h: 'Read the menu. Choose the right answer.', items: [
            { q: 'Sie essen kein Fleisch und keinen Fisch. Welches Hauptgericht nehmen Sie?', o: ['die Gemüse-Lasagne', 'das Schnitzel', 'die Forelle'], why: 'The *Gemüse-Lasagne* is *vegetarisch*. *Die Forelle* is a fish.' },
            { q: 'Was kostet das teuerste Hauptgericht?', o: ['17,80 €', '15,90 €', '12,50 €'], why: 'The trout, *die Forelle*, costs the most: 17,80 €.' },
            { q: 'Wann gibt es das Tagesgericht?', o: ['mittags von Montag bis Freitag', 'jeden Abend', 'nur am Wochenende'], why: '*nur mittags, Montag bis Freitag*.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Bewertung: Ein schöner Abend', md: 'Am Samstag waren wir zu viert im Gasthaus Zur Linde. Wir hatten reserviert, und das war gut: Das Restaurant war ganz voll.\n\nDas Essen war sehr gut. Mein Mann hatte die Forelle, sie war frisch und lecker. Ich habe die Gemüse-Lasagne gegessen, auch sehr gut. Nur die Pommes von meinem Sohn waren ein bisschen kalt. Die Kellnerin hat sofort neue gebracht.\n\nMeine Tochter hat eine Nussallergie. Die Kellnerin hat in der Küche gefragt und uns genau erklärt, welche Gerichte ohne Nüsse sind. Das fanden wir sehr freundlich.\n\nDer Apfelstrudel war das Beste! Wir mussten aber fast 20 Minuten auf die Rechnung warten. Trotzdem: Wir kommen gern wieder.\n\nIrina, Kassel' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the review. True, false or not given?', items: [
            { q: 'Irina hatte einen Tisch reserviert.', a: 't', why: '*Wir hatten reserviert.*' },
            { q: 'Im Restaurant waren viele Tische frei.', a: 'f', why: '*Das Restaurant war ganz voll.*' },
            { q: 'Die Pommes waren kalt, und die Kellnerin hat neue gebracht.', a: 't', why: '*Die Kellnerin hat sofort neue gebracht.*' },
            { q: 'Irinas Tochter darf keine Nüsse essen.', a: 't', why: 'She has a nut allergy: *eine Nussallergie*.' },
            { q: 'Die Familie hat mit Karte bezahlt.', a: 'ng', why: 'The review says they waited for the bill, but not how they paid.' },
            { q: 'Irina möchte nicht mehr in das Restaurant gehen.', a: 'f', why: '*Wir kommen gern wieder.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the three dishes.', items: [
            { s: 'Mein Mann hatte die [Forelle]. Ich habe die [Lasagne] gegessen, und zum Schluss hatten wir [Apfelstrudel].', why: 'Three dishes from the menu.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich nehme ___ Salat.', o: ['den', 'die', 'das'], why: '*der Salat* in the Akkusativ: *den Salat*.' },
      { q: 'Ich bin allergisch ___ Milch.', o: ['gegen', 'für', 'von'], why: '*allergisch gegen*.' },
      { q: 'Jeder bezahlt für sich. Man sagt: ___', o: ['Getrennt, bitte.', 'Zusammen, bitte.', 'Stimmt so.'], why: 'Everyone pays for their own food: *getrennt*.' },
      { q: 'Eine Suppe vor dem Hauptgericht ist eine ___.', o: ['Vorspeise', 'Nachspeise', 'Beilage'], why: '*die Vorspeise* comes before the main course.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Ich hätte gern ___ Apfelsaft. (ein)', a: ['einen'], why: '*der Apfelsaft*: Akkusativ *einen*.' },
      { q: 'Den Salat bitte ___ Zwiebeln. Ich mag keine Zwiebeln.', a: ['ohne'], why: '*ohne*: without.' },
      { q: 'Die ___, bitte! – Gern, das macht 23 Euro.', a: ['Rechnung'], why: '*die Rechnung*: the bill.' },
      { q: 'Was ___ Sie empfehlen? (können)', a: ['können', 'koennen'], why: 'With *Sie*: *können*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: 'Was ist in der Soße?', why: 'The question word, then the verb *ist*.' },
      { a: 'Möchten Sie etwas trinken?', why: '*Möchten* first, *trinken* at the end.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: '„Stimmt so“ heißt: Der Rest ist für Sie.', a: 't', why: 'The rest of the money is the tip.' },
      { q: 'Ein Vegetarier isst Fleisch.', a: 'f', why: 'A *Vegetarier* does not eat meat.' },
    ] },
  ],
};
