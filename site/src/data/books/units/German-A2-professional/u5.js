// German A2 for work, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Customers',
  goal: 'Help customers politely in a shop, café or office.',
  art: 'teacup',
  tags: { skills: ['speaking', 'reading', 'vocabulary'], topics: ['customers', 'shop', 'cafe', 'reception', 'apologising', 'complaints'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Helping customers',
      about: 'Greet customers, offer help and serve them in a shop, a café or at reception.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'With customers, you usually say **Sie**. Greet them, offer help and say what you are doing: *Einen Moment, bitte. Ich schaue gleich nach.*' },
          { t: 'dialogue', title: 'In a shoe shop', lines: [
            { who: 'Verkäuferin', s: 'Guten Tag! Kann ich Ihnen helfen?' },
            { who: 'Kunde', s: 'Ja, gern. Ich suche diese Schuhe in Größe 43.' },
            { who: 'Verkäuferin', s: 'Einen Moment, bitte. Ich schaue im Lager nach.' },
            { who: 'Verkäuferin', s: 'Es tut mir leid, in Braun haben wir Größe 43 leider nicht mehr. Möchten Sie die Schuhe in Schwarz probieren?' },
            { who: 'Kunde', s: 'Ja, gern.' },
            { who: 'Verkäuferin', s: 'Bitte schön. Passen sie?' },
            { who: 'Kunde', s: 'Ja, perfekt. Die nehme ich.' },
            { who: 'Verkäuferin', s: 'Sehr gern. Zahlen Sie bar oder mit Karte?' },
          ] },
        ],
        [
          { t: 'table', caption: 'Serving customers', explain: ['head', 'col0'], head: ['Situation', 'What you say'], rows: [
            ['You greet a customer.', 'Guten Tag! Kann ich Ihnen helfen?'],
            ['You take an order in a café.', 'Was darf es sein?'],
            ['You need a moment.', 'Einen Moment, bitte. Ich schaue nach.'],
            ['You show the way.', 'Kommen Sie bitte mit. Hier entlang.'],
            ['You ask if they want more.', 'Sonst noch etwas?'],
            ['You ask how they want to pay.', 'Zahlen Sie bar oder mit Karte?'],
            ['You say goodbye.', 'Vielen Dank und einen schönen Tag noch!'],
          ] },
          { t: 'tip', art: 'owl', md: '*helfen* takes the **Dativ**: *Kann ich **Ihnen** helfen?* Not *Kann ich Sie helfen?*' },
        ],
        [
          { t: 'dialogue', title: 'At reception', lines: [
            { who: 'Empfang', s: 'Guten Morgen! Wie kann ich Ihnen helfen?' },
            { who: 'Frau Zhou', s: 'Guten Morgen. Ich habe um zehn Uhr einen Termin bei Herrn Kraus.' },
            { who: 'Empfang', s: 'Wie ist Ihr Name, bitte?' },
            { who: 'Frau Zhou', s: 'Mei Lin Zhou, von der Firma Nordlicht Design.' },
            { who: 'Empfang', s: 'Danke, Frau Zhou. Nehmen Sie bitte kurz Platz. Herr Kraus kommt gleich.' },
            { who: 'Empfang', s: 'Möchten Sie etwas trinken? Einen Kaffee oder ein Wasser?' },
            { who: 'Frau Zhou', s: 'Ein Wasser, bitte. Danke schön.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['Kann ich Ihnen helfen?', 'Ja, ich suche eine Jacke.'],
            ['Was darf es sein?', 'Zwei Brötchen und einen Kaffee, bitte.'],
            ['Sonst noch etwas?', 'Nein, danke. Das ist alles.'],
            ['Zahlen Sie bar oder mit Karte?', 'Mit Karte, bitte.'],
            ['Haben Sie einen Termin?', 'Ja, um zehn Uhr bei Herrn Kraus.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'Ein Kunde kommt in den Laden. Sie sagen:', o: ['Guten Tag! Kann ich Ihnen helfen?', 'Guten Tag! Kann ich Sie helfen?', 'Guten Tag! Kann ich dir helfen?'], why: '*helfen* + Dativ, and *Sie* to a customer: *Ihnen*.' },
            { q: 'Sie müssen im Lager nachsehen. Sie sagen:', o: ['Einen Moment, bitte. Ich schaue gleich nach.', 'Das macht zwölf Euro.', 'Sonst noch etwas?'], why: 'Tell the customer what you are doing and ask them to wait.' },
            { q: 'Eine Kundin hat alles. Sie fragen:', o: ['Zahlen Sie bar oder mit Karte?', 'Was darf es sein?', 'Haben Sie einen Termin?'], why: 'At the end you ask how she wants to pay.' },
            { q: 'Eine Besucherin muss kurz warten. Sie sagen:', o: ['Nehmen Sie bitte kurz Platz.', 'Gehen Sie bitte nach Hause.', 'Kommen Sie morgen wieder.'], why: '*Platz nehmen*: to sit down.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Kann ich Ihnen helfen?', why: '*Kann* first, *Ihnen* in the Dativ, *helfen* at the end.' },
            { a: 'Was darf es sein?', why: 'A fixed question in a café, a bakery or at a market.' },
            { a: 'Zahlen Sie bar oder mit Karte?', why: 'A yes/no question: the verb *Zahlen* comes first.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Problems and saying sorry',
      about: 'Say sorry, show that you understand and offer a solution.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Sometimes there is a problem: a product does not work, the customer waits too long or the bill is wrong. Say sorry, show that you understand and offer a solution.' },
          { t: 'table', caption: 'When there is a problem', explain: ['head', 'col0'], quiz: true, head: ['You want to …', 'What you say'], rows: [
            ['say sorry', 'Das tut mir sehr leid.'],
            ['say sorry for the wait', 'Entschuldigen Sie bitte die Wartezeit.'],
            ['show that you understand', 'Ich verstehe. Das ist ärgerlich.'],
            ['offer help', 'Ich kümmere mich sofort darum.'],
            ['offer a solution', 'Möchten Sie das Geld zurück oder ein neues Gerät?'],
            ['get help', 'Einen Moment, ich hole meine Kollegin.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In German shops you usually need the receipt, the **Kassenbon**, when you bring something back or want to change it for something else (*umtauschen*).' },
        ],
        [
          { t: 'dialogue', title: 'A problem with a kettle', lines: [
            { who: 'Kundin', s: 'Guten Tag. Ich habe letzte Woche diesen Wasserkocher gekauft, aber er funktioniert nicht.' },
            { who: 'Verkäufer', s: 'Oh, das tut mir leid. Haben Sie den Kassenbon dabei?' },
            { who: 'Kundin', s: 'Ja, hier, bitte.' },
            { who: 'Verkäufer', s: 'Danke. Möchten Sie das Geld zurück oder einen neuen Wasserkocher?' },
            { who: 'Kundin', s: 'Lieber einen neuen, bitte.' },
            { who: 'Verkäufer', s: 'Kein Problem. Ich hole sofort einen aus dem Lager.' },
            { who: 'Kundin', s: 'Vielen Dank, das ist sehr nett.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Die Kundin hat den Wasserkocher gestern gekauft.', a: 'f', why: 'She bought it *letzte Woche*.' },
            { q: 'Die Kundin hat den Kassenbon dabei.', a: 't', why: '*Ja, hier, bitte.*' },
            { q: 'Die Kundin möchte ihr Geld zurück.', a: 'f', why: '*Lieber einen neuen, bitte.*' },
            { q: 'Der Verkäufer holt einen neuen Wasserkocher.', a: 't', why: '*Ich hole sofort einen aus dem Lager.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'Ein Kunde hat 20 Minuten gewartet. Sie sagen:', o: ['Entschuldigen Sie bitte die Wartezeit.', 'Sonst noch etwas?', 'Das macht nichts.'], why: 'You say sorry for the long wait.' },
            { q: 'Eine Kundin im Café sagt: „Die Suppe ist kalt.“ Sie sagen:', o: ['Oh, das tut mir leid. Ich bringe Ihnen sofort eine neue.', 'Das ist nicht mein Problem.', 'Die Suppe ist immer kalt.'], why: 'Say sorry and offer a solution.' },
            { q: 'Sie können das Problem nicht lösen. Sie sagen:', o: ['Einen Moment, bitte, ich hole meine Kollegin.', 'Auf Wiederhören!', 'Ich verstehe das nicht. Tschüss!'], why: 'Get help from a colleague.' },
            { q: 'Ein Kunde möchte eine Hose umtauschen. Sie fragen:', o: ['Haben Sie den Kassenbon dabei?', 'Haben Sie einen Termin?', 'Möchten Sie etwas trinken?'], why: 'To change a product, you usually need the receipt.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Das tut mir sehr ___.', a: ['leid'], why: 'The fixed phrase: *Das tut mir leid.*' },
            { q: 'Sie haben lange gewartet. Entschuldigen Sie bitte die ___.', a: ['Wartezeit'], why: '*die Wartezeit*: the time you wait.' },
            { q: 'Einen Moment, ich ___ meine Kollegin. (holen)', a: ['hole'], why: '*ich hole*: I get, I fetch.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Haben Sie den Kassenbon dabei?', why: 'A yes/no question: *Haben* first, *dabei* at the end.' },
            { a: 'Was kann ich für Sie tun?', why: 'Question word, the modal verb *kann*, *tun* at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: reviews and a notice',
      about: 'Read customer reviews of a bakery, the answer from the team and a notice on the door.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'text', md: 'Many customers write reviews online, a **Bewertung**. Good businesses answer them, also when the review is bad.' },
          { t: 'reading', title: 'Bewertungen: Bäckerei Sonnenkorn', md: '**5 von 5 Sternen – Jonas K.**\nIch kaufe hier jeden Morgen meine Brötchen. Das Brot ist immer frisch, und die Verkäuferinnen sind sehr freundlich. Letzte Woche hatte ich kein Geld dabei. Die Verkäuferin hat gesagt: „Kein Problem, Sie können morgen bezahlen.“ Super!\n\n**2 von 5 Sternen – Rosa M.**\nDer Kuchen ist lecker, aber am Samstag musste ich zwanzig Minuten warten. Es war sehr voll, und nur eine Person hat bedient. Niemand hat sich für die Wartezeit entschuldigt. Schade!\n\n**Antwort von Bäckerei Sonnenkorn**\nLiebe Frau M., vielen Dank für Ihre Bewertung. Es tut uns sehr leid! Am Samstag war eine Kollegin krank. Ab jetzt arbeiten samstags immer drei Personen. Wir hoffen, Sie besuchen uns bald wieder.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the reviews. True, false or not given?', items: [
            { q: 'Jonas kauft jeden Morgen in der Bäckerei ein.', a: 't', why: '*Ich kaufe hier jeden Morgen meine Brötchen.*' },
            { q: 'Jonas hat letzte Woche nicht sofort bezahlt.', a: 't', why: 'He had no money with him, so he could pay the next day.' },
            { q: 'Rosa findet den Kuchen nicht gut.', a: 'f', why: '*Der Kuchen ist lecker.* Her problem was the wait.' },
            { q: 'Am Samstag haben zwei Personen bedient.', a: 'f', why: '*nur eine Person hat bedient*.' },
            { q: 'Die Bäckerei hat am Samstag eine neue Kollegin.', a: 'ng', why: 'The answer says a colleague was ill and that three people will work on Saturdays. It does not say if there is a new colleague.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two words in the answer that say sorry.', items: [
            { s: 'Liebe Frau M., vielen Dank für Ihre Bewertung. Es tut uns sehr [leid]! Wir hoffen, Sie besuchen uns bald [wieder].', why: '' },
          ] },
        ],
        [
          { t: 'reading', title: 'An der Tür', md: '**Liebe Kundinnen und Kunden,**\n\nab dem 1. März haben wir neue Öffnungszeiten:\nMontag bis Freitag: 6.30 bis 18.00 Uhr\nSamstag: 7.00 bis 13.00 Uhr\nSonntag: geschlossen\n\nAm Montag, dem 3. März, bleibt die Bäckerei wegen Renovierung geschlossen. Wir bitten um Ihr Verständnis.\n\nIhr Team der Bäckerei Sonnenkorn' },
          { t: 'ex', kind: 'choice', h: 'Read the notice and choose the right answer.', items: [
            { q: 'Wann ist die Bäckerei am Sonntag offen?', o: ['gar nicht', 'von 7 bis 13 Uhr', 'von 6.30 bis 18 Uhr'], why: '*Sonntag: geschlossen*.' },
            { q: 'Warum ist die Bäckerei am 3. März geschlossen?', o: ['Sie wird renoviert.', 'Eine Kollegin ist krank.', 'Es ist Sonntag.'], why: '*wegen Renovierung*: because the shop is being renovated.' },
            { q: 'Wie lange ist die Bäckerei samstags offen?', o: ['sechs Stunden', 'dreizehn Stunden', 'elf Stunden'], why: 'From 7.00 to 13.00 Uhr is six hours.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Kann ich ___ helfen?', o: ['Ihnen', 'Sie', 'Ihr'], why: '*helfen* takes the Dativ: *Ihnen*.' },
      { q: 'Im Café fragt die Kellnerin: „Was ___ es sein?“', o: ['darf', 'kann', 'muss'], why: 'The fixed question: *Was darf es sein?*' },
      { q: 'Ein Kunde möchte etwas umtauschen. Er braucht oft den ___.', o: ['Kassenbon', 'Termin', 'Platz'], why: 'The *Kassenbon* shows that you bought the product in that shop.' },
      { q: 'Ein Kunde hat lange gewartet. Sie sagen:', o: ['Entschuldigen Sie bitte die Wartezeit.', 'Sonst noch etwas?', 'Kommen Sie bitte mit.'], why: 'You say sorry for the wait.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Zahlen Sie bar oder mit ___?', a: ['Karte'], why: '*bar oder mit Karte*: cash or card.' },
      { q: 'Nehmen Sie bitte kurz ___.', a: ['Platz'], why: '*Platz nehmen*: to sit down.' },
      { q: 'Oh, das tut mir ___!', a: ['leid'], why: '*Das tut mir leid*: I am sorry.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the customer and your answer.', pairs: [
      ['Ich suche eine Jacke in Größe M.', 'Einen Moment, ich schaue nach.'],
      ['Mein Handy funktioniert nicht.', 'Das tut mir leid. Haben Sie den Kassenbon dabei?'],
      ['Ich habe einen Termin bei Frau Lange.', 'Nehmen Sie bitte kurz Platz.'],
      ['Nein, danke, das ist alles.', 'Zahlen Sie bar oder mit Karte?'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Was kann ich für Sie tun?', why: 'Question word, *kann*, then *tun* at the end.' },
      { a: 'Kann ich Ihnen helfen?', why: '*helfen* + Dativ: *Ihnen*.' },
    ] },
  ],
};
