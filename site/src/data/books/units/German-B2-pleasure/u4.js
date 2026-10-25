// German B2 for travel, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'History in places',
  goal: 'Talk about the history of places you visit.',
  art: 'dragon',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['history', 'dates', 'praeteritum', 'plusquamperfekt', 'passive', 'relative-clauses', 'old-town'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Dates, periods and the past',
      about: 'Tell the history of a place with dates, centuries and the right past tenses.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'Guided tours, plaques and guidebooks use fixed phrases for time. A year stands alone or with *im Jahr*: *1648* or *im Jahr 1648*, never *in* alone. Centuries are written with a number and a full stop: *im 15. Jahrhundert* is read *im fünfzehnten Jahrhundert*.' },
          { t: 'table', caption: 'Talking about dates and periods', explain: ['head', 'col1'], quiz: true, head: ['Expression', 'Meaning'], rows: [
            ['1648 / im Jahr 1648', 'in 1648; there is no *in* before the year alone'],
            ['im 15. Jahrhundert', 'in the 15th century'],
            ['Mitte des 15. Jahrhunderts', 'in the middle of the 15th century; also *Anfang* and *Ende*'],
            ['in den 1920er-Jahren', 'in the 1920s, read *in den zwanziger Jahren*'],
            ['im Mittelalter', 'in the Middle Ages'],
            ['vor über 500 Jahren', 'more than 500 years ago'],
            ['seit dem 12. Jahrhundert', 'since the 12th century'],
          ] },
        ],
        [
          { t: 'text', md: 'Written history uses the **Präteritum** for the events of the story. When one event happened **before** another past event, use the **Plusquamperfekt**: *hatte* or *war* + Partizip II. It often comes after *nachdem*.' },
          { t: 'examples', items: [
            { s: 'Die Stadt **erhielt** 1290 das Marktrecht.', n: 'Präteritum: one step in the story of the town.' },
            { s: 'Im 17. Jahrhundert **brannte** fast die ganze Altstadt **ab**.', n: 'Präteritum of the separable verb *abbrennen*: *brannte … ab*.' },
            { s: 'Nachdem der Fluss seinen Lauf **verändert hatte**, **verlor** der Hafen an Bedeutung.', n: 'The river changed first: Plusquamperfekt. Then the port lost importance: Präteritum.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Use *war* in the Plusquamperfekt with verbs that take *sein* in the Perfekt: *Nachdem die Händler **weggezogen waren**, wurde es still.* Use *hatte* with the others: *Nachdem das Feuer die Häuser **zerstört hatte**, …*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right time phrase.', items: [
            { q: 'Die Brücke wurde ___ fertiggestellt.', o: ['im Jahr 1734', 'in 1734', 'am 1734'], why: 'A year alone or with *im Jahr*. *in 1734* is English word order, not German.' },
            { q: 'Die Kirche stammt aus ___ 13. Jahrhundert.', o: ['dem', 'den', 'das'], why: '*aus* + Dativ: *aus dem 13. Jahrhundert*.' },
            { q: '___ des 19. Jahrhunderts kam die Eisenbahn in die Stadt.', o: ['Mitte', 'Im Mitte', 'Am Mitte'], why: '*Mitte*, *Anfang* and *Ende* + Genitiv need no preposition: *Mitte des 19. Jahrhunderts*.' },
            { q: '___ 1920er-Jahren war das Viertel ein Zentrum der Musik.', o: ['In den', 'Im', 'Am'], why: 'Decades are plural: *in den 1920er-Jahren*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Nachdem der Krieg zu Ende war, kehrten viele zurück.', why: 'The *nachdem* clause is the first position, so the main clause starts with the verb *kehrten*.' },
            { a: 'Die Burg stammt aus dem 12. Jahrhundert.', why: '*stammen aus* + Dativ: *aus dem 12. Jahrhundert*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the Präteritum or the Plusquamperfekt.', items: [
            { q: 'Im 16. Jahrhundert ___ die Stadt durch den Salzhandel reich. (werden, Präteritum)', a: ['wurde'], why: '*werden → wurde*.' },
            { q: 'Die Bürger ___ 1350 eine neue Stadtmauer. (bauen, Präteritum)', a: ['bauten'], why: 'Regular verb, plural: *sie bauten*.' },
            { q: 'Der Graf ___ 1512 auf der Burg. (sterben, Präteritum)', a: ['starb'], why: '*sterben → starb*, an irregular verb.' },
            { q: 'Nachdem das Feuer die Altstadt zerstört ___, baute man sie aus Stein wieder auf. (haben)', a: ['hatte'], why: 'Plusquamperfekt with *haben*: *zerstört hatte*.' },
            { q: 'Nachdem die Händler weggezogen ___, wurde es still in der Stadt. (sein)', a: ['waren'], why: '*wegziehen* takes *sein*, plural: *weggezogen waren*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Describing buildings and places',
      about: 'The passive and relative clauses in descriptions of places.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Guide texts care more about the building than about who built it, so they use the **passive**: *werden* + Partizip II. If you name who did it, use *von* + Dativ: *von einem reichen Kaufmann gebaut*.' },
          { t: 'examples', items: [
            { s: 'Die Marienkirche **wurde** zwischen 1320 und 1410 **gebaut**.', n: 'Passive in the Präteritum: *wurde* + Partizip II.' },
            { s: 'Das Rathaus **ist** 2015 aufwendig **renoviert worden**.', n: 'Passive in the Perfekt: *ist … worden*, not *geworden*.' },
            { s: 'Der Turm **kann** im Sommer **besichtigt werden**.', n: 'Passive with a modal verb: Partizip II + *werden* at the end.' },
            { s: 'Ein Teil der Stadtmauer **ist** bis heute **erhalten**.', n: '*sein* + Partizip II describes a state, not an action.' },
          ] },
        ],
        [
          { t: 'text', md: 'Relative clauses add detail to a place: *die Brücke, **die** 1820 gebaut wurde*. The pronoun takes its gender and number from the noun and its case from its role in the clause. A preposition comes before the pronoun: *der Platz, **auf dem** …*. The verb goes to the end.' },
          { t: 'table', caption: 'Relative pronouns', explain: ['head'], quiz: true, head: ['Case', 'masculine', 'feminine', 'neuter', 'plural'], rows: [
            ['Nominativ', 'der', 'die', 'das', 'die'],
            ['Akkusativ', 'den', 'die', 'das', 'die'],
            ['Dativ', 'dem', 'der', 'dem', 'denen'],
            ['Genitiv', 'dessen', 'deren', 'dessen', 'deren'],
          ] },
          { t: 'examples', items: [
            { s: 'der Platz, **auf dem** früher der Markt stattfand', n: '*auf* + Dativ, masculine: *auf dem*.' },
            { s: 'die Familie, **deren** Wappen über dem Tor hängt', n: 'Genitiv: the coat of arms belongs to the family.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Das Schloss ___ im 18. Jahrhundert gebaut.', o: ['wurde', 'hat', 'worden'], why: 'Passive in the Präteritum: *wurde gebaut*.' },
            { q: 'Die Kirche ist 2010 renoviert ___.', o: ['worden', 'geworden', 'wurde'], why: 'In the passive Perfekt the participle of *werden* is *worden*.' },
            { q: 'Der Turm kann im Sommer ___ werden.', o: ['besichtigt', 'besichtigen', 'zu besichtigen'], why: 'Modal verb + Partizip II + *werden*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Die Kirche wurde im 14. Jahrhundert gebaut.', why: '*wurde* in second place, the participle *gebaut* at the end.' },
            { a: 'Das ist der Platz, auf dem der Markt stattfand.', why: 'Preposition + relative pronoun, then the verb *stattfand* at the end.' },
            { a: 'Der Turm kann im Sommer besichtigt werden.', why: 'The modal verb comes second; *besichtigt werden* goes to the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the relative pronoun.', items: [
            { q: 'Das ist die Kirche, ___ im 14. Jahrhundert gebaut wurde.', a: ['die'], why: '*die Kirche*, subject of the clause: Nominativ feminine *die*.' },
            { q: 'Der Brunnen, ___ man auf dem Marktplatz sieht, ist 300 Jahre alt.', a: ['den'], why: '*man sieht den Brunnen*: Akkusativ masculine *den*.' },
            { q: 'Das ist das Haus, in ___ die Dichterin lebte.', a: ['dem'], why: '*in dem Haus*: Dativ neuter *dem*.' },
            { q: 'Die Stadt, in ___ ich aufgewachsen bin, hat eine schöne Altstadt.', a: ['der'], why: '*in der Stadt*: Dativ feminine *der*.' },
            { q: 'Die Kaufleute, ___ Häuser am Fluss stehen, wurden durch den Handel reich.', a: ['deren'], why: 'The houses belong to the merchants, plural: Genitiv *deren*.' },
            { q: 'Wir besuchen das Museum, ___ Sammlung berühmt ist.', a: ['dessen'], why: 'The collection belongs to the museum, neuter: Genitiv *dessen*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A walk through an old town',
      about: 'Read a guide text about the history of a small town.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'reading', title: 'Willkommen in Marienbrück', md: 'Wer durch das Obere Tor in die Altstadt von Marienbrück tritt, macht einen Sprung von mehreren Jahrhunderten zurück. Enge Gassen, Fachwerkhäuser und ein Marktplatz mit Kopfsteinpflaster erinnern an die Zeit, in der die kleine Stadt eine der reichsten der Region war.\n\nGegründet wurde Marienbrück im 12. Jahrhundert an einer Furt, an der Händler den Fluss überqueren konnten. Im Jahr 1290 erhielt der Ort das Marktrecht, und bald darauf wurde die steinerne Brücke gebaut, der die Stadt ihren Namen verdankt. Vor allem der Handel mit Salz und Tuch brachte Wohlstand: Die reichen Kaufleute, deren prächtige Häuser bis heute den Marktplatz säumen, ließen auch die gotische Marienkirche errichten.\n\nMitte des 17. Jahrhunderts endete diese Blütezeit abrupt. Nachdem ein großer Brand fast die Hälfte der Häuser zerstört hatte, verließen viele Familien die Stadt. Marienbrück wurde ein ruhiges Landstädtchen, und gerade deshalb blieb sein altes Bild erhalten: Es fehlte schlicht das Geld, um die alten Häuser abzureißen.\n\nHeute kann der Turm der Marienkirche von April bis Oktober bestiegen werden. Von oben sieht man die Reste der Stadtmauer, die im 14. Jahrhundert angelegt wurde und an mehreren Stellen noch gut erhalten ist. Nicht verpassen sollten Besucher das Haus „Zum Goldenen Anker“, in dem heute das Stadtmuseum untergebracht ist. Dort erfährt man, wie die Menschen vor 500 Jahren lebten und arbeiteten.\n\nEin Tipp zum Schluss: Am frühen Abend, wenn die Tagesgäste abgereist sind, gehört die Altstadt fast ganz den Einheimischen. Dann lohnt sich ein Spaziergang über die alte Brücke besonders.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Marienbrück wurde im 12. Jahrhundert gegründet.', a: 't', why: '*Gegründet wurde Marienbrück im 12. Jahrhundert …*' },
            { q: 'Die Stadt wurde durch den Handel mit Wein reich.', a: 'f', why: '*Vor allem der Handel mit Salz und Tuch brachte Wohlstand.*' },
            { q: 'Die Kaufleute ließen die Marienkirche bauen.', a: 't', why: '*Die reichen Kaufleute … ließen auch die gotische Marienkirche errichten.*' },
            { q: 'Nach dem Brand zogen viele neue Familien in die Stadt.', a: 'f', why: '*… verließen viele Familien die Stadt.*' },
            { q: 'Die alten Häuser blieben erhalten, weil das Geld für einen Abriss fehlte.', a: 't', why: '*Es fehlte schlicht das Geld, um die alten Häuser abzureißen.*' },
            { q: 'Der Kirchturm ist das ganze Jahr geöffnet.', a: 'f', why: 'Only *von April bis Oktober*.' },
            { q: 'Das Stadtmuseum ist montags geschlossen.', a: 'ng', why: 'The text gives no opening times for the museum.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the history and the language of the text.', items: [
            { q: 'Was geschah vor dem großen Brand?', o: ['Der Ort erhielt das Marktrecht.', 'Marienbrück wurde ein ruhiges Landstädtchen.', 'Im Haus „Zum Goldenen Anker“ wurde das Stadtmuseum eingerichtet.'], why: 'The market rights came in 1290. The quiet years and the museum came after the fire.' },
            { q: '„… die steinerne Brücke, der die Stadt ihren Namen verdankt.“ Was bedeutet das?', o: ['Die Stadt hat ihren Namen wegen der Brücke.', 'Die Brücke hat ihren Namen von der Stadt.', 'Die Brücke wurde nach einer Familie benannt.'], why: '*jemandem etwas verdanken*: to owe something to someone. The town owes its name to the bridge.' },
            { q: '„Gegründet wurde Marienbrück im 12. Jahrhundert …“ Warum steht „gegründet“ am Anfang?', o: ['Das Wort „gegründet“ wird betont.', 'Der Satz ist eine Frage.', 'Der Satz steht im Aktiv.'], why: 'Putting the participle in first place gives it emphasis. Guide texts do this to vary their sentences.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Die Kapelle stammt aus ___ 15. Jahrhundert.', o: ['dem', 'den', 'das'], why: '*aus* + Dativ: *aus dem*.' },
      { q: 'Die Stadtmauer wurde ___ errichtet.', o: ['im Jahr 1350', 'in 1350', 'am 1350'], why: 'A year alone or with *im Jahr*.' },
      { q: 'Das Rathaus ist 1999 renoviert ___.', o: ['worden', 'geworden', 'wurde'], why: 'Passive Perfekt: *ist … worden*.' },
      { q: '___ 1960er-Jahren wurde die Altstadt zur Fußgängerzone.', o: ['In den', 'Im', 'Am'], why: 'Decades: *in den …er-Jahren*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Nachdem der Brand die Häuser zerstört ___, zogen viele weg. (haben)', a: ['hatte'], why: 'Plusquamperfekt: *zerstört hatte*.' },
      { q: 'Das ist die Brücke, ___ im 13. Jahrhundert gebaut wurde.', a: ['die'], why: 'Nominativ feminine: *die*.' },
      { q: 'Die Familie, ___ Wappen über dem Tor hängt, war sehr reich.', a: ['deren'], why: 'Genitiv feminine: *deren*.' },
      { q: 'Der Turm kann im Sommer ___ werden. (besichtigen)', a: ['besichtigt'], why: 'Modal verb + Partizip II + *werden*.' },
      { q: 'Im Mittelalter ___ hier jede Woche ein großer Markt statt. (finden, Präteritum)', a: ['fand'], why: '*stattfinden → fand … statt*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the expression and its meaning.', pairs: [
      ['im Mittelalter', 'in der Zeit zwischen Antike und Neuzeit'],
      ['vor über 500 Jahren', 'mehr als fünf Jahrhunderte zurück'],
      ['Mitte des 19. Jahrhunderts', 'ungefähr um 1850'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Das ist das Haus, in dem sie lebte.', why: 'Preposition + relative pronoun, verb at the end.' },
      { a: 'Die Burg wurde im Jahr 1180 gegründet.', why: '*wurde* second, *gegründet* at the end.' },
    ] },
  ],
};
