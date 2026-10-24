// German A2, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Food and shopping',
  goal: 'Shop for food, order in a restaurant and say what you like. Learn the Akkusativ with ein and kein, quantities, gern, lieber, am liebsten and mögen.',
  art: 'pizza',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['akkusativ', 'kein', 'quantities', 'gern-lieber', 'moegen', 'restaurant'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Ein Kilo Tomaten, bitte',
      about: 'The Akkusativ with ein and kein, and quantities.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'When you buy, want or need something, it is in the **Akkusativ**: *Ich kaufe einen Apfel. Wir brauchen kein Brot.* Only the masculine article changes: *der → den*, *ein → einen*, *kein → keinen*.' },
          { t: 'table', caption: 'Akkusativ', explain: ['head', 'col0'], quiz: true, head: ['', 'a', 'no, not a', 'the'], rows: [
            ['masculine', 'einen Apfel', 'keinen Apfel', 'den Apfel'],
            ['neuter', 'ein Brot', 'kein Brot', 'das Brot'],
            ['feminine', 'eine Banane', 'keine Banane', 'die Banane'],
            ['plural', 'Eier', 'keine Eier', 'die Eier'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use *kein* with a noun and *nicht* with a verb or an adjective: *Ich habe **keinen** Hunger. Ich esse **nicht** gern Fisch.*' },
        ],
        [
          { t: 'text', md: 'For quantities, the food comes straight after the quantity word, with no article and no *von*: *eine Flasche Wasser, ein Kilo Tomaten, 200 Gramm Käse*. A masculine quantity word changes in the Akkusativ: *Ich kaufe einen Liter Milch.*' },
          { t: 'table', caption: 'Ich kaufe …', explain: ['head'], quiz: true, head: ['Quantity', 'Example'], rows: [
            ['das Kilo', 'ein Kilo Kartoffeln'],
            ['das Gramm', '200 Gramm Käse'],
            ['der Liter', 'einen Liter Milch'],
            ['die Flasche', 'eine Flasche Öl'],
            ['die Packung', 'eine Packung Reis'],
            ['die Dose', 'eine Dose Tomaten'],
            ['das Stück', 'ein Stück Kuchen'],
            ['der Becher', 'einen Becher Joghurt'],
          ] },
          { t: 'tip', art: 'owl', md: 'After a number, *Kilo*, *Gramm* and *Liter* stay singular: *zwei Kilo, 500 Gramm, drei Liter*. *Flasche*, *Dose* and *Packung* have a plural: *zwei Flaschen, drei Dosen, vier Packungen*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right article.', items: [
            { q: 'Ich brauche noch ___ Löffel.', o: ['einen', 'ein', 'eine'], why: '*der Löffel* is masculine. Akkusativ: *einen*.' },
            { q: 'Wir haben ___ Milch mehr.', o: ['keine', 'kein', 'keinen'], why: '*die Milch* is feminine: *keine*.' },
            { q: 'Kaufst du bitte ___ Brot?', o: ['ein', 'einen', 'eine'], why: '*das Brot* is neuter. Akkusativ: *ein*, no change.' },
            { q: 'Möchtest du ___ Salat?', o: ['einen', 'ein', 'eine'], why: '*der Salat* is masculine. Akkusativ: *einen*.' },
            { q: 'Ich esse ___ Fleisch. Ich bin Vegetarierin.', o: ['kein', 'keinen', 'nicht'], why: '*das Fleisch* is a neuter noun: *kein*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write kein in the right form.', items: [
            { q: 'Tut mir leid, wir haben heute ___ Fisch. (der Fisch)', a: ['keinen'], why: 'Masculine, Akkusativ: *keinen*.' },
            { q: 'Am Abend trinke ich ___ Kaffee. (der Kaffee)', a: ['keinen'], why: 'Masculine, Akkusativ: *keinen*.' },
            { q: 'Im Kühlschrank sind ___ Eier mehr. (die Eier)', a: ['keine'], why: 'Plural: *keine*.' },
            { q: 'Es gibt leider ___ Brot. (das Brot)', a: ['kein'], why: '*es gibt* takes the Akkusativ. Neuter: *kein*.' },
            { q: 'Hast du heute ___ Zeit? (die Zeit)', a: ['keine'], why: 'Feminine: *keine*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What goes together?', pairs: [
            ['eine Tafel', 'Schokolade'],
            ['ein Becher', 'Joghurt'],
            ['eine Flasche', 'Öl'],
            ['eine Dose', 'Thunfisch'],
            ['eine Scheibe', 'Brot'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'gern, lieber, am liebsten',
      about: 'Say what you like, what you prefer and what you like best.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'Use **gern** with a verb to say that you like doing something. **lieber** means you like it more, and **am liebsten** means you like it most. Put them after the verb: *Ich trinke gern Tee.* When *am liebsten* starts the sentence, the verb comes next: *Am liebsten trinke ich Saft.*' },
          { t: 'table', caption: 'gern, lieber, am liebsten', explain: ['head', 'col1'], head: ['German', 'English'], rows: [
            ['Ich trinke gern Tee.', 'I like drinking tea.'],
            ['Ich trinke lieber Kaffee.', 'I prefer coffee.'],
            ['Am liebsten trinke ich Saft.', 'I like juice best.'],
            ['Ich trinke nicht gern Milch.', 'I don’t like drinking milk.'],
          ] },
          { t: 'examples', items: [
            { s: 'Isst du **gern** Fisch?', n: 'In a question, *gern* comes after the subject.' },
            { s: 'Ich fahre **lieber** mit dem Fahrrad als mit dem Bus.', n: '*lieber … als*: you compare two things.' },
            { s: 'Was machst du **am liebsten** am Wochenende?', n: 'You ask about someone’s favourite activity.' },
          ] },
        ],
        [
          { t: 'text', md: '**mögen** usually goes with a noun: *Ich mag Käse. Magst du Hunde?* For activities, use a verb with *gern*: *Ich koche gern.*' },
          { t: 'table', caption: 'mögen', quiz: true, head: ['', 'mögen'], rows: [
            ['ich', 'mag'],
            ['du', 'magst'],
            ['er / sie / es', 'mag'],
            ['wir', 'mögen'],
            ['ihr', 'mögt'],
            ['sie / Sie', 'mögen'],
          ] },
          { t: 'tip', art: 'owl', md: '*Ich möchte* (I would like) is a wish for now. *Ich mag* is about what you like in general: *Ich mag Kaffee, aber jetzt möchte ich einen Tee.*' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write mögen in the right form.', items: [
            { q: 'Ich ___ keine Tomaten.', a: ['mag'], why: '*ich mag*: no ending.' },
            { q: '___ du scharfes Essen?', a: ['Magst'], why: '*du magst*' },
            { q: 'Meine Kinder ___ Spaghetti sehr.', a: ['mögen'], why: 'Plural: *sie mögen*.' },
            { q: 'Unser Chef ___ keinen Kaffee.', a: ['mag'], why: '*er mag*: the same form as *ich mag*.' },
            { q: '___ ihr Schokolade?', a: ['Mögt'], why: '*ihr mögt*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'gern, lieber or am liebsten?', items: [
            { q: 'Ich esse Fleisch, aber ich esse ___ Fisch.', o: ['lieber', 'am liebsten', 'liebsten'], why: 'You compare two things: *lieber*.' },
            { q: 'Von allen Getränken trinke ich ___ Wasser.', o: ['am liebsten', 'lieber', 'mehr'], why: '*Von allen* (of all): the favourite, so *am liebsten*.' },
            { q: 'Tanzt du ___? – Ja, sehr!', o: ['gern', 'lieber', 'am liebsten'], why: 'There is no comparison here: *gern*.' },
            { q: 'Ich fahre ___ mit dem Zug als mit dem Auto.', o: ['lieber', 'gern', 'am liebsten'], why: '*als* compares two things: *lieber … als*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'mag or möchte?', items: [
            { q: 'Ich ___ jetzt bitte ein Glas Wasser.', o: ['möchte', 'mag', 'mögen'], why: 'A wish for now: *möchte*.' },
            { q: 'Ich ___ Katzen, aber ich habe keine.', o: ['mag', 'möchte', 'mögt'], why: 'What you like in general: *mag*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Was isst du am liebsten?', why: 'Question word, verb, subject, then *am liebsten*.' },
            { a: 'Trinkst du lieber Tee oder Kaffee?', why: 'The verb comes first. *lieber* comes before the two things you compare.' },
            { a: 'Magst du keinen Fisch?', why: 'The verb comes first. *der Fisch*, Akkusativ: *keinen*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'In the restaurant',
      about: 'Order, pay and complain politely.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'In a restaurant, use polite forms: *Ich hätte gern …*, *Ich nehme …*, *Könnten Sie …?* To complain, start with *Entschuldigung* and add *leider*.' },
          { t: 'dialogue', title: 'Im Restaurant', lines: [
            { who: 'Kellnerin', s: 'Guten Abend! Was möchten Sie trinken?' },
            { who: 'Herr Osei', s: 'Ich hätte gern einen Apfelsaft.' },
            { who: 'Kellnerin', s: 'Und was möchten Sie essen?' },
            { who: 'Herr Osei', s: 'Ich nehme die Gemüsesuppe und danach das Hähnchen mit Reis.' },
            { who: 'Kellnerin', s: 'Sehr gern.' },
            { who: 'Herr Osei', s: 'Entschuldigung, die Suppe ist leider kalt.' },
            { who: 'Kellnerin', s: 'Oh, das tut mir leid. Ich bringe Ihnen sofort eine neue.' },
            { who: 'Herr Osei', s: 'Danke. … Die Rechnung, bitte!' },
            { who: 'Kellnerin', s: 'Das macht 23,50 Euro.' },
            { who: 'Herr Osei', s: 'Hier sind 25 Euro. Stimmt so.' },
            { who: 'Kellnerin', s: 'Vielen Dank! Einen schönen Abend noch.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Useful phrases', explain: ['head', 'col0'], head: ['You want to …', 'You say'], rows: [
            ['order', 'Ich hätte gern … / Ich nehme …'],
            ['see the menu', 'Die Speisekarte, bitte.'],
            ['complain', 'Entschuldigung, das Essen ist leider kalt.'],
            ['ask for something', 'Könnten Sie mir bitte einen Löffel bringen?'],
            ['pay', 'Die Rechnung, bitte. / Ich möchte bitte zahlen.'],
            ['let the waiter keep the change', 'Stimmt so.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The waiter often asks *Zusammen oder getrennt?* *Zusammen* means one bill for everyone. *Getrennt* means that everyone pays for their own food. In Germany, people usually give a tip of about five to ten percent.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What does the guest answer?', pairs: [
            ['Was möchten Sie trinken?', 'Ein Mineralwasser, bitte.'],
            ['Haben Sie schon gewählt?', 'Ja, ich nehme den Fisch.'],
            ['Zusammen oder getrennt?', 'Getrennt, bitte.'],
            ['Das macht 18 Euro.', 'Hier sind 20. Stimmt so.'],
            ['Hat es Ihnen geschmeckt?', 'Ja, sehr gut, danke.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'Ihre Suppe ist kalt. Sie sagen:', o: ['Entschuldigung, die Suppe ist leider kalt.', 'Die Suppe, bitte.', 'Die Suppe ist sehr lecker.'], why: 'A polite complaint: *Entschuldigung* and *leider*.' },
            { q: 'Sie möchten bezahlen. Sie sagen:', o: ['Ich möchte bitte zahlen.', 'Ich möchte bitte bestellen.', 'Die Speisekarte, bitte.'], why: '*zahlen* means to pay. *bestellen* means to order.' },
            { q: 'Sie bezahlen für sich und Ihre Freundin. Sie sagen:', o: ['Zusammen, bitte.', 'Getrennt, bitte.', 'Ich nehme das Hähnchen.'], why: 'One bill for both: *zusammen*.' },
            { q: 'Sie haben das Hähnchen bestellt, aber der Kellner bringt Fisch. Sie sagen:', o: ['Entschuldigung, ich habe das Hähnchen bestellt, nicht den Fisch.', 'Das Hähnchen ist sehr lecker.', 'Stimmt so.'], why: 'You say what you ordered: *Ich habe … bestellt.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Was möchten Sie trinken?', why: 'Question word, modal verb, subject, and the infinitive at the end.' },
            { a: 'Zahlen Sie zusammen oder getrennt?', why: 'A question with two choices starts with the verb.' },
            { a: 'Haben Sie schon gewählt?', why: 'Perfekt: *haben* first, the participle *gewählt* at the end.' },
            { a: 'Könnten Sie mir die Speisekarte bringen?', why: '*Könnten Sie …?* is very polite. *bringen* goes to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A menu and a review',
      about: 'Read a menu and a short restaurant review.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'reading', title: 'Gasthaus am Fluss: Speisekarte', md: '**Suppen:** Tomatensuppe mit Brot 5,50 €; Kartoffelsuppe mit Würstchen 6,90 €\n\n**Hauptgerichte:** Schnitzel mit Pommes und Salat 14,50 €; Gemüsecurry mit Reis (vegetarisch) 12,00 €; Forelle mit Kartoffeln und Spinat 16,80 €\n\n**Desserts:** Apfelstrudel mit Vanilleeis 6,20 €; Obstsalat 4,50 €\n\n**Getränke:** Mineralwasser 3,20 €; Apfelsaftschorle 3,80 €; Kaffee 2,90 €' },
          { t: 'ex', kind: 'choice', h: 'Read the menu and choose.', items: [
            { q: 'Lea isst kein Fleisch und keinen Fisch. Was kann sie als Hauptgericht nehmen?', o: ['das Gemüsecurry', 'die Forelle', 'das Schnitzel'], why: 'The curry is vegetarian. *Forelle* (trout) is a fish.' },
            { q: 'Was kostet die Kartoffelsuppe?', o: ['6,90 Euro', '5,50 Euro', '16,80 Euro'], why: '*Kartoffelsuppe mit Würstchen 6,90 €*' },
            { q: 'Was gibt es zum Schnitzel?', o: ['Pommes und Salat', 'Kartoffeln und Spinat', 'Reis'], why: '*Schnitzel mit Pommes und Salat*' },
          ] },
        ],
        [
          { t: 'reading', title: 'Ein schöner Abend', md: 'Am Freitag war ich mit meiner Freundin im Gasthaus am Fluss. Das Restaurant ist klein und gemütlich. Leider war es sehr voll, und wir mussten 20 Minuten auf einen Tisch warten.\n\nIch habe das Schnitzel genommen. Es war groß und sehr lecker, aber die Pommes waren ein bisschen kalt. Meine Freundin isst kein Fleisch. Sie hatte das Gemüsecurry und war sehr zufrieden. Als Dessert haben wir zusammen einen Apfelstrudel gegessen. Der war fantastisch!\n\nDie Kellnerin war sehr freundlich. Für die kalten Pommes hat sie uns zwei Kaffee gratis gebracht. Mit Getränken haben wir zusammen 41 Euro bezahlt. Das finde ich fair. Ich gehe bestimmt wieder hin!\n\nTomás' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Tomás war allein im Restaurant.', a: 'f', why: 'He was there with his girlfriend: *mit meiner Freundin*.' },
            { q: 'Sie mussten auf einen Tisch warten.', a: 't', why: '*Wir mussten 20 Minuten auf einen Tisch warten.*' },
            { q: 'Die Pommes waren warm und lecker.', a: 'f', why: '*Die Pommes waren ein bisschen kalt.*' },
            { q: 'Die Freundin von Tomás hat das Gemüsecurry gegessen.', a: 't', why: '*Sie hatte das Gemüsecurry.*' },
            { q: 'Die zwei Kaffees waren gratis.', a: 't', why: 'The waitress brought two coffees for free because of the cold chips.' },
            { q: 'Die Kellnerin arbeitet schon lange im Gasthaus.', a: 'ng', why: 'The review says that she was friendly, but not how long she has worked there.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the review again and choose.', items: [
            { q: 'Was hat Tomás gegessen?', o: ['ein Schnitzel und einen Apfelstrudel', 'ein Gemüsecurry und einen Obstsalat', 'eine Forelle und einen Apfelstrudel'], why: '*Ich habe das Schnitzel genommen.* The apple strudel was for both of them.' },
            { q: 'Wie findet Tomás den Preis?', o: ['Er findet ihn fair.', 'Er findet ihn zu teuer.', 'Er sagt nichts zum Preis.'], why: '*Das finde ich fair.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich kaufe ___ Liter Milch.', o: ['einen', 'ein', 'eine'], why: '*der Liter* is masculine. Akkusativ: *einen*.' },
      { q: 'Wir haben ___ Kartoffeln mehr.', o: ['keine', 'kein', 'keinen'], why: 'Plural: *keine*.' },
      { q: 'Ich esse gern Reis, aber ich esse ___ Nudeln.', o: ['lieber', 'am liebsten', 'liebsten'], why: 'You compare two things: *lieber*.' },
      { q: '___ du Käse?', o: ['Magst', 'Mögst', 'Mag'], why: '*du magst*' },
      { q: 'Zusammen oder getrennt? – ___, bitte. Jeder zahlt für sich.', o: ['Getrennt', 'Zusammen', 'Stimmt so'], why: 'Everyone pays for their own food: *getrennt*.' },
      { q: 'Entschuldigung, der Kaffee ist ___ kalt.', o: ['leider', 'gern', 'lieber'], why: '*leider* makes a complaint polite.' },
      { q: 'Ich ___ gern einen Tee.', o: ['hätte', 'hatte', 'hättet'], why: '*Ich hätte gern …* is a polite way to order.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Ich brauche zwei ___ Wasser. (die Flasche)', a: ['Flaschen'], why: '*Flasche* has a plural: *zwei Flaschen*.' },
      { q: 'Hast du ___ Hunger? (kein)', a: ['keinen'], why: '*der Hunger* is masculine. Akkusativ: *keinen*.' },
      { q: 'Meine Schwester ___ keine Pilze. (mögen)', a: ['mag'], why: '*sie mag*' },
      { q: 'Was isst du am ___?', a: ['liebsten'], why: '*am liebsten*: what you like most.' },
      { q: 'Die ___, bitte! Wir möchten zahlen.', a: ['Rechnung'], why: '*die Rechnung* is the bill.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: 'Isst du lieber Fisch oder Fleisch?', why: 'The verb comes first, then the subject and *lieber*.' },
      { a: 'Haben Sie heute keinen Fisch?', why: 'The verb comes first. *der Fisch*, Akkusativ: *keinen*.' },
    ] },
  ],
};
