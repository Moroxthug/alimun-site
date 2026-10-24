// German A2, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Celebrations and presents',
  goal: 'Invite people, talk about celebrations and say what you give whom.',
  art: 'pretzel',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['dativ-verbs', 'adjective-endings', 'ordinal-numbers', 'dates', 'invitations'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Wem schenkst du was?',
      about: 'Verbs with the Dativ, and giving things to people.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Some verbs always take the **Dativ**: *helfen, gefallen, gehören, danken, gratulieren, schmecken*. The question word for the Dativ is *wem?* (to whom?).\n\nVerbs of giving, like *geben, schenken, bringen* and *zeigen*, often have two objects: the **person** in the Dativ and the **thing** in the Akkusativ. The person usually comes first.' },
          { t: 'examples', items: [
            { s: 'Kannst du **mir** helfen?', n: '*helfen* + Dativ: *mir*, not *mich*.' },
            { s: 'Die Wohnung **gefällt mir** sehr gut.', n: 'The thing you like is the subject. The person is in the Dativ.' },
            { s: '**Wem** gehört der Schlüssel? – **Dem** Hausmeister.', n: '*Wem?* asks for the Dativ.' },
            { s: 'Ich schenke **meiner Mutter** einen Schal.', n: 'Person in the Dativ, then the thing in the Akkusativ.' },
            { s: 'Wir gratulieren **dir** zum Geburtstag!', n: '*gratulieren* + Dativ' },
          ] },
        ],
        [
          { t: 'table', caption: 'Articles in the Dativ', quiz: true, head: ['Nominativ', 'Dativ'], rows: [
            ['der Vater', 'dem Vater'],
            ['die Mutter', 'der Mutter'],
            ['das Kind', 'dem Kind'],
            ['die Kinder', 'den Kindern'],
            ['mein Bruder', 'meinem Bruder'],
            ['meine Schwester', 'meiner Schwester'],
          ] },
          { t: 'table', caption: 'Personal pronouns in the Dativ', quiz: true, head: ['Nominativ', 'Dativ'], rows: [
            ['ich', 'mir'],
            ['du', 'dir'],
            ['er / es', 'ihm'],
            ['sie', 'ihr'],
            ['wir', 'uns'],
            ['ihr', 'euch'],
            ['sie / Sie', 'ihnen / Ihnen'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'In the Dativ plural, the noun gets an extra *-n* if it does not already end in *-n* or *-s*: *die Kinder → den Kindern*, *die Freunde → den Freunden*.' },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Anna hat ein Buch bekommen. Das Buch gefällt ___ sehr.', o: ['ihr', 'sie', 'ihm'], why: '*gefallen* + Dativ. *Sie* (Anna) becomes *ihr*.' },
            { q: 'Kannst du ___ bitte helfen? Die Tasche ist so schwer.', o: ['mir', 'mich', 'ich'], why: '*helfen* + Dativ: *mir*.' },
            { q: 'Gehört das Fahrrad ___, Herr Novak?', o: ['Ihnen', 'Sie', 'Ihr'], why: '*gehören* + Dativ. Formal *Sie* becomes *Ihnen*.' },
            { q: 'Ich gratuliere ___ zur Hochzeit, liebe Sara!', o: ['dir', 'dich', 'du'], why: '*gratulieren* + Dativ: *dir*.' },
            { q: 'Was schenkst du ___ Vater zum Geburtstag?', o: ['deinem', 'deinen', 'dein'], why: 'The person is in the Dativ: *der Vater → deinem Vater*.' },
            { q: 'Schmeckt ___ der Kuchen, Kinder?', o: ['euch', 'ihr', 'dich'], why: '*schmecken* + Dativ. *Ihr* (you, plural) becomes *euch*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the article or possessive in the Dativ.', items: [
            { q: 'Ich gebe ___ Lehrerin das Heft. (die)', a: ['der'], why: '*die Lehrerin → der Lehrerin* in the Dativ.' },
            { q: '___ Kind gefällt das Spiel. (das)', a: ['Dem'], why: '*das Kind → dem Kind* in the Dativ.' },
            { q: 'Er schenkt ___ Freundin Blumen. (seine)', a: ['seiner'], why: 'Feminine in the Dativ: *seiner*.' },
            { q: 'Der Koffer gehört ___ Mann dort. (der)', a: ['dem'], why: '*der Mann → dem Mann* in the Dativ.' },
            { q: 'Wir bringen ___ Kindern Geschenke mit. (die, plural)', a: ['den'], why: 'Plural in the Dativ: *den Kindern*.' },
            { q: 'Ich zeige ___ Gästen die Wohnung. (unsere)', a: ['unseren'], why: 'Plural in the Dativ: *unseren Gästen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Was schenkst du deiner Schwester?', why: 'Question word, verb, subject, then the person in the Dativ.' },
            { a: 'Wem gehört dieser Schlüssel?', why: '*Wem?* is the question word for the Dativ.' },
            { a: 'Wie gefällt dir die Wohnung?', why: 'Question word, verb, the person in the Dativ, then the subject.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Der rote Schal',
      about: 'Adjective endings after der, die and das.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'An adjective before a noun needs an ending. After the definite article (*der, die, das*) the ending is only ever **-e** or **-en**.\n\nThe ending is *-e* in the Nominativ singular, and in the Akkusativ singular for feminine and neuter nouns. Everywhere else it is *-en*: in the Akkusativ masculine, in all of the Dativ and in all of the plural.' },
          { t: 'table', caption: 'After der, die, das', quiz: true, head: ['', 'der', 'die', 'das', 'Plural'], rows: [
            ['Nominativ', 'der rote Schal', 'die rote Tasche', 'das rote Kleid', 'die roten Schuhe'],
            ['Akkusativ', 'den roten Schal', 'die rote Tasche', 'das rote Kleid', 'die roten Schuhe'],
            ['Dativ', 'dem roten Schal', 'der roten Tasche', 'dem roten Kleid', 'den roten Schuhen'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Der **neue** Kollege heißt Samir.', n: 'Nominativ, masculine: *-e*.' },
            { s: 'Ich nehme den **blauen** Pullover.', n: 'Akkusativ, masculine: *-en*.' },
            { s: 'Wie findest du das **kleine** Café?', n: 'Akkusativ, neuter: *-e*.' },
            { s: 'Mit dem **alten** Auto fahren wir nicht mehr.', n: 'Dativ: always *-en*.' },
            { s: 'Die **bunten** Luftballons sind für die Party.', n: 'Plural: always *-en*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'A trick for the singular: if the article is the same as in the Nominativ (*die → die*, *das → das*), the adjective keeps *-e*. If the article changes (*der → den*, *der → dem*), the adjective takes *-en*. In the plural, it is always *-en*.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the adjective with the right ending.', items: [
            { q: 'Der ___ Kuchen ist von meiner Oma. (lecker)', a: ['leckere'], why: 'Nominativ, masculine: *-e*.' },
            { q: 'Ich kaufe den ___ Wein. (rot)', a: ['roten'], why: 'Akkusativ, masculine: *-en*.' },
            { q: 'Die ___ Gäste kommen um acht. (neu)', a: ['neuen'], why: 'Plural: *-en*.' },
            { q: 'Wie gefällt dir das ___ Kleid? (grün)', a: ['grüne'], why: 'Nominativ, neuter: *-e*.' },
            { q: 'Wir feiern in dem ___ Restaurant am Markt. (italienisch)', a: ['italienischen'], why: 'Dativ: always *-en*.' },
            { q: 'Ich schenke der ___ Nachbarin Blumen. (nett)', a: ['netten'], why: 'Dativ, feminine: *-en*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right ending.', items: [
            { q: 'Gefällt dir die ___ Lampe?', o: ['neue', 'neuen', 'neuer'], why: 'Nominativ, feminine: *-e*.' },
            { q: 'Ich suche den ___ Schlüssel.', o: ['kleinen', 'kleine', 'kleiner'], why: 'Akkusativ, masculine: *-en*.' },
            { q: 'Mit dem ___ Fahrrad fahre ich zur Arbeit.', o: ['alten', 'alte', 'altes'], why: '*mit* takes the Dativ: *-en*.' },
            { q: 'Die ___ Schuhe sind zu teuer.', o: ['schwarzen', 'schwarze', 'schwarzes'], why: 'Plural: *-en*.' },
            { q: 'Das ___ Geschenk ist für dich.', o: ['große', 'großen', 'großes'], why: 'Nominativ, neuter, after *das*: *-e*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the adjective that ends in -en.', items: [
            { s: 'Der alte Tisch steht neben dem [neuen] Sofa.', why: '*neben dem*: Dativ, so *-en*. *Der alte Tisch* is Nominativ: *-e*.' },
            { s: 'Die kleine Tochter spielt mit dem [roten] Ball.', why: '*mit dem*: Dativ, so *-en*.' },
            { s: 'Ich trage heute den [blauen] Pullover und die weiße Hose.', why: '*den* Pullover: Akkusativ masculine, so *-en*. *Die weiße Hose* keeps *-e*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Invitations and dates',
      about: 'Invite people, congratulate them and say dates.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'For dates you need **ordinal numbers** (first, second, third). From 1 to 19, add *-te* to the number: *vier → vierte*. From 20, add *-ste*: *zwanzigste*. Learn the irregular ones: *erste, dritte, siebte, achte*.\n\nIn writing, an ordinal number is a number with a point: *der 3. Mai*. To say when something happens, use *am* and the ending *-ten* or *-sten*: *am dritten Mai*.' },
          { t: 'table', caption: 'Ordinal numbers', quiz: true, head: ['', 'Heute ist der …', 'am …'], rows: [
            ['1.', 'erste', 'ersten'],
            ['2.', 'zweite', 'zweiten'],
            ['3.', 'dritte', 'dritten'],
            ['4.', 'vierte', 'vierten'],
            ['7.', 'siebte', 'siebten'],
            ['8.', 'achte', 'achten'],
            ['19.', 'neunzehnte', 'neunzehnten'],
            ['20.', 'zwanzigste', 'zwanzigsten'],
            ['31.', 'einunddreißigste', 'einunddreißigsten'],
          ] },
          { t: 'examples', items: [
            { s: 'Der Wievielte ist heute? – Heute ist der 3. Mai.', n: 'Say: *der dritte Mai*.' },
            { s: 'Ich habe am 12. Juni Geburtstag.', n: 'Say: *am zwölften Juni*.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'An invitation', lines: [
            { who: 'Sophie', s: 'Hallo Daniel! Ich habe am Samstag Geburtstag. Ich möchte dich zu meiner Party einladen.' },
            { who: 'Daniel', s: 'Oh, wie schön! Wann fängt die Party an?' },
            { who: 'Sophie', s: 'Um acht Uhr, bei mir zu Hause.' },
            { who: 'Daniel', s: 'Ich komme gern. Soll ich etwas mitbringen?' },
            { who: 'Sophie', s: 'Vielleicht einen Salat? Das wäre toll.' },
            { who: 'Daniel', s: 'Klar, mache ich. Danke für die Einladung. Bis Samstag!' },
          ] },
          { t: 'table', caption: 'Good wishes', explain: ['head', 'col0'], head: ['Occasion', 'What you say'], rows: [
            ['Birthday', 'Herzlichen Glückwunsch zum Geburtstag! Alles Gute!'],
            ['Wedding', 'Herzlichen Glückwunsch zur Hochzeit!'],
            ['Christmas', 'Frohe Weihnachten!'],
            ['New Year', 'Frohes neues Jahr!'],
            ['Before an exam or a new job', 'Viel Glück! Viel Erfolg!'],
            ['Someone is ill', 'Gute Besserung!'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'To say no politely, thank the person first and give a reason: *Danke für die Einladung! Leider kann ich nicht kommen, weil ich arbeiten muss.*' },
          { t: 'ex', kind: 'match', h: 'What do you say?', pairs: [
            ['Morgen habe ich meine Deutschprüfung.', 'Viel Glück!'],
            ['Ich habe heute Geburtstag.', 'Herzlichen Glückwunsch!'],
            ['Ich habe eine Grippe.', 'Gute Besserung!'],
            ['Es ist der 24. Dezember.', 'Frohe Weihnachten!'],
            ['Es ist der 1. Januar.', 'Frohes neues Jahr!'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the ordinal number as a word.', items: [
            { q: 'Heute ist der ___ Mai. (3.)', a: ['dritte'], why: '*der dritte*: *drei* is irregular.' },
            { q: 'Ich habe am ___ Juli Geburtstag. (7.)', a: ['siebten'], why: 'After *am*: *-ten*. *Sieben* becomes *siebten*.' },
            { q: 'Die Party ist am ___ Oktober. (20.)', a: ['zwanzigsten'], why: 'From 20: *-sten* after *am*.' },
            { q: 'Der erste Weihnachtstag ist am ___ Dezember. (25.)', a: ['fünfundzwanzigsten'], why: 'From 20: *-sten*: *fünfundzwanzigsten*.' },
            { q: 'Silvester ist am ___ Dezember. (31.)', a: ['einunddreißigsten'], why: 'From 20: *-sten*: *einunddreißigsten*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Wann hast du Geburtstag?', o: ['Am zwölften März.', 'Der zwölfte März.', 'Am zwölfte März.'], why: 'To say when: *am* + *-ten*.' },
            { q: 'Der Wievielte ist heute? – Heute ist ___', o: ['der erste April.', 'am ersten April.', 'der einste April.'], why: '*Heute ist der …* + *-te*. *Eins* becomes *erste*.' },
            { q: 'Danke für die Einladung! Ich komme ___.', o: ['gern', 'lieber', 'gut'], why: 'To accept an invitation: *Ich komme gern.*' },
            { q: 'Leider kann ich nicht kommen, ___ ich arbeiten muss.', o: ['weil', 'dass', 'denn'], why: 'A reason with the verb at the end: *weil*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Reading: a birthday invitation',
      about: 'Read an invitation and find the important details.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'Einladung zu meinem 40. Geburtstag', md: 'Liebe Freundinnen und Freunde,\n\nam 18. Mai werde ich 40 Jahre alt, und das möchte ich mit euch feiern! Die Party ist am Samstag, dem 18. Mai, ab 19 Uhr im Garten von meinem Bruder Tarek. Die Adresse ist Lindenstraße 12. Ihr könnt mit der Straßenbahn kommen: Linie 3 bis zur Haltestelle „Stadtpark“. Von dort sind es nur fünf Minuten zu Fuß.\n\nEs gibt ein großes Buffet. Tarek grillt, und meine Mutter macht ihren berühmten Apfelkuchen. Bringt bitte keine Geschenke mit! Ich wünsche mir nur, dass ihr kommt. Wenn ihr wollt, könnt ihr aber gern einen Salat oder ein Getränk mitbringen.\n\nBitte sagt mir bis zum 10. Mai Bescheid, ob ihr kommen könnt. Und vergesst die warme Jacke nicht, denn am Abend wird es im Garten oft kühl.\n\nIch freue mich auf euch!\nEure Nadia' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Nadia wird 40 Jahre alt.', a: 't', why: '*Am 18. Mai werde ich 40 Jahre alt.*' },
            { q: 'Die Party ist in Nadias Wohnung.', a: 'f', why: 'It is in her brother’s garden: *im Garten von meinem Bruder*.' },
            { q: 'Man kann mit der Straßenbahn zur Party fahren.', a: 't', why: '*Ihr könnt mit der Straßenbahn kommen.*' },
            { q: 'Nadia möchte viele Geschenke.', a: 'f', why: '*Bringt bitte keine Geschenke mit!*' },
            { q: 'Tarek ist älter als Nadia.', a: 'ng', why: 'The text does not say how old Tarek is.' },
            { q: 'Die Gäste sollen bis zum 10. Mai antworten.', a: 't', why: '*Bitte sagt mir bis zum 10. Mai Bescheid.*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Was können die Gäste mitbringen, wenn sie wollen?', o: ['Einen Salat oder ein Getränk.', 'Ein Geschenk.', 'Einen Apfelkuchen.'], why: '*… könnt ihr aber gern einen Salat oder ein Getränk mitbringen.*' },
            { q: 'Warum sollen die Gäste eine warme Jacke mitnehmen?', o: ['Weil es am Abend im Garten kühl wird.', 'Weil es den ganzen Tag regnet.', 'Weil die Party im Winter ist.'], why: '*… am Abend wird es im Garten oft kühl.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the adjective.', items: [
            { s: 'Es gibt ein [großes] Buffet.', why: '*groß*. After *ein*, a neuter noun gets *-es*.' },
            { s: 'Vergesst die [warme] Jacke nicht!', why: 'Akkusativ, feminine, after *die*: *-e*.' },
            { s: 'Meine Mutter macht ihren [berühmten] Apfelkuchen.', why: 'Akkusativ, masculine: *-en*.' },
            { s: 'Am Abend wird es im Garten oft [kühl].', why: 'After *wird*, the adjective has no ending.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Kannst du ___ beim Umzug helfen?', o: ['uns', 'wir', 'unser'], why: '*helfen* + Dativ: *wir → uns*.' },
      { q: 'Wem gehört die Tasche? – Sie gehört ___ Frau dort.', o: ['der', 'die', 'dem'], why: '*gehören* + Dativ: *die Frau → der Frau*.' },
      { q: 'Ich schenke ___ Bruder ein Buch.', o: ['meinem', 'meinen', 'mein'], why: 'The person in the Dativ: *meinem Bruder*.' },
      { q: 'Der ___ Film war wirklich gut.', o: ['neue', 'neuen', 'neuer'], why: 'Nominativ, masculine, after *der*: *-e*.' },
      { q: 'Wir sitzen in dem ___ Garten.', o: ['schönen', 'schöne', 'schönes'], why: 'Dativ: always *-en*.' },
      { q: 'Mein Freund hat eine neue Stelle. Ich sage: „___“', o: ['Herzlichen Glückwunsch!', 'Gute Besserung!', 'Frohe Weihnachten!'], why: 'Good news: *Herzlichen Glückwunsch!*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Wie gefällt ___ das Geschenk, Mama? (du)', a: ['dir'], why: '*gefallen* + Dativ: *du → dir*.' },
      { q: 'Ich nehme die ___ Bluse. (weiß)', a: ['weiße'], why: 'Akkusativ, feminine: *-e*.' },
      { q: 'Wir helfen den ___ Nachbarn. (alt)', a: ['alten'], why: 'Dativ plural: *-en*.' },
      { q: 'Mein Geburtstag ist am ___ August. (8.)', a: ['achten'], why: '*acht → achten*, with only one *t*.' },
      { q: 'Heute ist der ___ Juni. (1.)', a: ['erste'], why: '*eins → der erste*' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Was schenkst du deiner Mutter?', why: 'Question word, verb, subject, then the person in the Dativ.' },
      { a: 'Soll ich etwas zur Party mitbringen?', why: 'A yes/no question starts with the verb. The infinitive *mitbringen* goes to the end.' },
      { a: 'Wem gehört das rote Fahrrad?', why: '*Wem?* first, then the verb and the subject.' },
    ] },
  ],
};
