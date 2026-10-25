// German A2 for moving abroad, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Shopping and money',
  goal: 'Shop, pay and understand everyday rules for shopping.',
  art: 'pretzel',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['supermarket', 'quantities', 'prices', 'paying', 'pfand', 'opening-hours'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'In the supermarket',
      about: 'Quantities and prices, and how to ask where things are.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'For quantities, German puts the food directly after the quantity word, without *von*: *ein Kilo Äpfel*, *eine Flasche Wasser*.' },
          { t: 'table', caption: 'Quantities', explain: ['head'], quiz: true, head: ['Quantity', 'Example'], rows: [
            ['ein Kilo', 'ein Kilo Kartoffeln'],
            ['500 Gramm', '500 Gramm Hackfleisch'],
            ['ein Liter', 'ein Liter Milch'],
            ['eine Flasche', 'eine Flasche Wasser'],
            ['eine Packung', 'eine Packung Reis'],
            ['ein Becher', 'ein Becher Joghurt'],
            ['eine Dose', 'eine Dose Tomaten'],
            ['ein Stück', 'ein Stück Käse'],
          ] },
          { t: 'tip', art: 'owl', md: 'Prices use a comma: 2,49 € is *zwei Euro neunundvierzig*. At the counter for cheese or meat, ask: *Ich hätte gern 200 Gramm …* (I would like …).' },
        ],
        [
          { t: 'dialogue', title: 'Im Supermarkt', lines: [
            { who: 'Daniel', s: 'Entschuldigung, wo finde ich Reis?' },
            { who: 'Mitarbeiterin', s: 'Im Gang 4, neben den Nudeln.' },
            { who: 'Daniel', s: 'Danke. Und wo ist die Milch?' },
            { who: 'Mitarbeiterin', s: 'Die Milch ist im Kühlregal, ganz hinten links.' },
            { who: 'Daniel', s: 'Gibt es hier auch frisches Brot?' },
            { who: 'Mitarbeiterin', s: 'Ja, die Bäckerei ist vorne am Eingang.' },
          ] },
          { t: 'dialogue', title: 'An der Käsetheke', lines: [
            { who: 'Verkäufer', s: 'Guten Tag. Was darf es sein?' },
            { who: 'Daniel', s: 'Ich hätte gern 200 Gramm Bergkäse.' },
            { who: 'Verkäufer', s: 'Es sind 230 Gramm. Darf es ein bisschen mehr sein?' },
            { who: 'Daniel', s: 'Ja, kein Problem. Was kostet das?' },
            { who: 'Verkäufer', s: '4,60 Euro. Sonst noch etwas?' },
            { who: 'Daniel', s: 'Nein, danke. Das ist alles.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each question and its answer.', pairs: [
            ['Wo finde ich Reis?', 'Im Gang 4, neben den Nudeln.'],
            ['Was darf es sein?', 'Ich hätte gern 200 Gramm Käse.'],
            ['Darf es ein bisschen mehr sein?', 'Ja, kein Problem.'],
            ['Was kostet das?', '4,60 Euro.'],
            ['Sonst noch etwas?', 'Nein, danke. Das ist alles.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Ich brauche eine ___ Wasser.', o: ['Flasche', 'Dose', 'Kilo'], why: 'Water comes in a bottle: *eine Flasche Wasser*.' },
            { q: 'Ein ___ Joghurt, bitte.', o: ['Becher', 'Liter', 'Stück'], why: 'Yoghurt comes in a small pot: *ein Becher*.' },
            { q: 'Ich hätte gern 500 ___ Hackfleisch.', o: ['Gramm', 'Liter', 'Flaschen'], why: 'Meat is weighed in *Gramm* or *Kilo*.' },
            { q: '2,49 € sagt man so: ___', o: ['zwei Euro neunundvierzig', 'zweihundertneunundvierzig Euro', 'neunundvierzig Euro zwei'], why: 'First the euros, then the cents: *zwei Euro neunundvierzig*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Wo ___ ich Reis? (finden)', a: ['finde'], why: '*ich finde*: the *ich* form ends in *-e*.' },
            { q: 'Ich ___ gern 200 Gramm Käse. (haben, polite)', a: ['hätte', 'haette'], why: '*Ich hätte gern …* is a polite way to ask for something.' },
            { q: 'Ein Kilo ___, bitte. (Apfel, plural)', a: ['Äpfel', 'Aepfel'], why: 'The plural of *der Apfel* is *die Äpfel*.' },
            { q: 'Was ___ die Tomaten? (kosten)', a: ['kosten'], why: '*die Tomaten* is plural: *kosten*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Paying',
      about: 'Pay by cash or card, ask for a receipt and return bottles for the deposit.',
      art: 'mug',
      spreads: [
        [
          { t: 'dialogue', title: 'An der Kasse', lines: [
            { who: 'Kassiererin', s: 'Guten Tag. Brauchen Sie eine Tüte?' },
            { who: 'Yusuf', s: 'Nein, danke. Ich habe eine Tasche dabei. Und hier ist noch mein Pfandbon.' },
            { who: 'Kassiererin', s: 'Danke. Das macht dann 21,35 Euro. Bar oder mit Karte?' },
            { who: 'Yusuf', s: 'Mit Karte, bitte.' },
            { who: 'Kassiererin', s: 'Halten Sie die Karte bitte an das Gerät. … So, danke. Brauchen Sie den Kassenbon?' },
            { who: 'Yusuf', s: 'Ja, bitte. Schönen Tag noch!' },
            { who: 'Kassiererin', s: 'Danke, Ihnen auch!' },
          ] },
          { t: 'text', md: '*bar* means in cash. Many shops take cards, but some small shops, bakeries and cafés only take cash: *Nur Barzahlung*. A plastic bag (*Tüte*) usually costs money, so many people bring a bag.' },
        ],
        [
          { t: 'text', md: 'Many bottles and cans have a deposit, the **Pfand**. You pay it when you buy the drink. You get it back when you bring the empty bottle or can back to a shop. There is a machine for this in most supermarkets. It gives you a receipt, the **Pfandbon**, and you give it to the cashier.' },
          { t: 'examples', items: [
            { s: 'Die Dose hat **25 Cent Pfand**.', n: 'For cans and plastic bottles you use once, the *Pfand* is usually 25 cents.' },
            { s: 'Wo ist der **Pfandautomat**?', n: 'The machine for empty bottles. It is also called *Leergutautomat*.' },
            { s: 'Ich bringe die leeren Flaschen **zurück**.', n: '*zurückbringen* is separable: *zurück* at the end.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Germany most shops are closed on Sundays and public holidays. Bakeries are often open for a few hours on Sunday morning, and shops in big stations and at petrol stations are often open too. Do your shopping on Saturday.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue at the till. True or false?', items: [
            { q: 'Yusuf kauft eine Tüte.', a: 'f', why: 'He says *Nein, danke*. He has his own bag.' },
            { q: 'Yusuf zahlt bar.', a: 'f', why: 'He pays *mit Karte*, by card.' },
            { q: 'Yusuf möchte den Kassenbon.', a: 't', why: '*Brauchen Sie den Kassenbon?* – *Ja, bitte.*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you say or do?', items: [
            { q: 'Die Kassiererin fragt: „Bar oder mit Karte?“ Sie haben nur Geld in der Tasche. Sie sagen: ___', o: ['Bar, bitte.', 'Mit Karte, bitte.', 'Ohne Tüte, bitte.'], why: 'You have only cash: *bar*.' },
            { q: 'Sie wollen das Pfand für eine leere Dose zurück. Sie gehen zum ___.', o: ['Pfandautomaten', 'Kassenbon', 'Kühlregal'], why: 'The machine takes the can and gives you a *Pfandbon*. After *zum*, *Automat* becomes *Automaten*.' },
            { q: 'Es ist Sonntag. Sie brauchen Brot. Wo bekommen Sie es wahrscheinlich?', o: ['in einer Bäckerei am Vormittag', 'im Supermarkt am Abend', 'im Supermarkt am Nachmittag'], why: 'Supermarkets are usually closed on Sunday. Many bakeries open for a few hours in the morning.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Zahlen Sie ___ oder mit Karte?', a: ['bar'], why: '*bar zahlen*: to pay in cash.' },
            { q: 'Die Dose hat 25 Cent ___.', a: ['Pfand'], why: 'The deposit for bottles and cans: *Pfand*.' },
            { q: 'Am Sonntag ___ die meisten Geschäfte geschlossen. (sein)', a: ['sind'], why: '*die meisten Geschäfte* is plural: *sind*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Kann ich mit Karte zahlen?', why: 'A yes/no question: *kann* first, *zahlen* at the end.' },
            { a: 'Wo ist der Pfandautomat?', why: 'Question word, verb, then the subject.' },
            { a: 'Brauchen Sie den Kassenbon?', why: 'A yes/no question: the verb *brauchen* first.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Signs and offers',
      about: 'Read opening hours, an offer leaflet and the notice on a bottle machine.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Frischemarkt am Lindenplatz', md: '**Öffnungszeiten**\nMontag bis Samstag: 7 bis 21 Uhr\nSonntag und Feiertage: geschlossen\nAm 24. und 31. Dezember: 7 bis 14 Uhr\n\n**Angebote der Woche**\ngültig von Montag, 12.10., bis Samstag, 17.10.\n\nBananen, 1 kg: 1,29 €\nFrische Hähnchenbrust, 500 g: 4,99 €\nMineralwasser, 6 Flaschen zu je 1,5 Liter: 2,94 € plus 1,50 € Pfand\nJoghurt, 150-g-Becher: 0,39 €. Drei Becher kaufen, nur zwei bezahlen!\nBrot vom Bäcker, 750 g: 2,49 €\nÄpfel aus der Region, 2-kg-Beutel: 2,99 €\n\n**Neu bei uns:** Sie können jetzt an allen Kassen mit Karte zahlen, auch kleine Beträge. Bitte bringen Sie Ihre eigene Tasche mit: Eine Tüte kostet bei uns 20 Cent.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the sign and the offers. True, false or not given?', items: [
            { q: 'Am Sonntag ist der Markt geschlossen.', a: 't', why: '*Sonntag und Feiertage: geschlossen.*' },
            { q: 'Das Angebot für Bananen gilt auch am Sonntag, 18.10.', a: 'f', why: 'The offers are valid until Saturday, 17.10.' },
            { q: 'Für das Wasser zahlt man insgesamt 4,44 Euro.', a: 't', why: '2,94 € + 1,50 € *Pfand* = 4,44 €.' },
            { q: 'Drei Becher Joghurt kosten zusammen 0,78 Euro.', a: 't', why: 'You pay for two: 2 × 0,39 € = 0,78 €.' },
            { q: 'Der Markt hat einen Parkplatz.', a: 'ng', why: 'The text says nothing about parking.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Leergut: So geht’s', md: 'Stellen Sie die Flaschen einzeln und mit dem Boden zuerst in die Öffnung. Bitte drücken Sie Flaschen und Dosen nicht zusammen: Das Pfandzeichen muss man gut lesen können. Kästen stellen Sie unten auf das Band. Der Automat nimmt nur Flaschen und Dosen mit Pfandzeichen.\n\nAm Ende drücken Sie auf die grüne Taste. Dann bekommen Sie einen Pfandbon. Den Bon geben Sie an der Kasse ab. Sie möchten das Pfand spenden? Dann drücken Sie auf die rote Taste.\n\nGlas ohne Pfand gehört nicht in den Automaten. Bitte bringen Sie es zum Altglascontainer. Gibt es ein Problem? Dann drücken Sie auf die Klingel. Ein Mitarbeiter kommt dann zu Ihnen.' },
          { t: 'ex', kind: 'tf', h: 'Read the notice. True or false?', items: [
            { q: 'Man soll die Dosen zuerst zusammendrücken.', a: 'f', why: '*Bitte drücken Sie … nicht zusammen*: the machine must read the sign.' },
            { q: 'Kästen stellt man unten auf das Band.', a: 't', why: '*Kästen stellen Sie unten auf das Band.*' },
            { q: 'Mit der grünen Taste bekommt man den Pfandbon.', a: 't', why: '*Am Ende drücken Sie auf die grüne Taste.*' },
            { q: 'Glas ohne Pfand kann man in den Automaten stellen.', a: 'f', why: 'It goes to the *Altglascontainer*, the bottle bank.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['die Öffnungszeiten', 'wann ein Geschäft offen ist'],
            ['das Angebot', 'ein günstiger Preis für kurze Zeit'],
            ['der Pfandbon', 'den bekommt man vom Automaten'],
            ['der Feiertag', 'ein freier Tag wie Weihnachten'],
            ['die Kasse', 'hier bezahlt man'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich hätte gern eine ___ Tomaten.', o: ['Dose', 'Liter', 'Becher'], why: '*eine Dose Tomaten*: a tin of tomatoes.' },
      { q: 'Was bedeutet „Nur Barzahlung“?', o: ['Man kann nur mit Geld in bar zahlen.', 'Man kann nur mit Karte zahlen.', 'Das Geschäft ist nur kurz offen.'], why: '*bar*: in cash.' },
      { q: 'Für die leere Flasche bekommen Sie das ___ zurück.', o: ['Pfand', 'Angebot', 'Kilo'], why: 'The deposit: *das Pfand*.' },
      { q: 'Die meisten Supermärkte in Deutschland sind am ___ geschlossen.', o: ['Sonntag', 'Samstag', 'Montag'], why: 'Most shops close on Sundays and public holidays.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Entschuldigung, wo ___ ich Milch? (finden)', a: ['finde'], why: '*ich finde*.' },
      { q: 'Ich ___ gern 300 Gramm Käse. (haben, polite)', a: ['hätte', 'haette'], why: '*Ich hätte gern …*' },
      { q: 'Brauchen Sie den ___? (Kasse + Bon)', a: ['Kassenbon'], why: 'The receipt: *der Kassenbon*.' },
      { q: 'Möchten Sie eine ___? – Nein, danke, ich habe eine Tasche dabei.', a: ['Tüte', 'Plastiktüte', 'Einkaufstüte'], why: 'A bag from the shop: *die Tüte*. It usually costs money.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Kann ich mit Karte zahlen?', why: '*kann* first, *zahlen* at the end.' },
      { a: 'Was kostet ein Kilo Äpfel?', why: 'Question word, verb, then the subject *ein Kilo Äpfel*.' },
      { a: 'Wo ist der Pfandautomat?', why: 'Question word, verb, subject.' },
    ] },
  ],
};
