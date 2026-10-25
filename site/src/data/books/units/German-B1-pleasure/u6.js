// German B1 for travel, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Travel stories',
  goal: 'Tell stories about your travels.',
  art: 'dragon',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['praeteritum', 'plusquamperfekt', 'time-linkers', 'feelings', 'adjectives'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Telling a story in the past',
      about: 'Use the right past tenses and link the events of a story.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'When people speak, they usually tell stories in the **Perfekt**. In written stories, blogs and books, the **Präteritum** is more common. With *sein*, *haben* and the modal verbs, people use the Präteritum in speech too: *war*, *hatte*, *konnte*.' },
          { t: 'table', caption: 'Irregular verbs in stories', quiz: true, head: ['Infinitiv', 'Präteritum', 'Perfekt'], rows: [
            ['fahren', 'fuhr', 'ist gefahren'],
            ['gehen', 'ging', 'ist gegangen'],
            ['kommen', 'kam', 'ist gekommen'],
            ['bleiben', 'blieb', 'ist geblieben'],
            ['sehen', 'sah', 'hat gesehen'],
            ['finden', 'fand', 'hat gefunden'],
            ['treffen', 'traf', 'hat getroffen'],
            ['verlieren', 'verlor', 'hat verloren'],
          ] },
        ],
        [
          { t: 'text', md: 'For something that happened **before** another event in the past, use the **Plusquamperfekt**: *hatte* or *war* + Partizip II. It often comes after *nachdem*.' },
          { t: 'examples', items: [
            { s: 'Als wir ankamen, **war** der letzte Bus schon **abgefahren**.', n: 'First the bus left, then we arrived.' },
            { s: '**Nachdem** wir das Hotel **gefunden hatten**, gingen wir essen.', n: '*nachdem* + Plusquamperfekt; the main clause is in the Präteritum.' },
            { s: 'Ich **hatte** meinen Pass zu Hause **vergessen**.', n: 'Background: this happened before the story starts.' },
            { s: '**Während** wir am Strand lagen, fing es an zu regnen.', n: '*während*: at the same time as.' },
            { s: '**Bevor** wir losfuhren, kauften wir etwas zu essen.', n: '*bevor*: before. The verb goes to the end of its clause.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Linking the events of a story', explain: ['head', 'col1'], head: ['German', 'When you use it'], rows: [
            ['zuerst', 'for the first event'],
            ['dann, danach', 'for the next event'],
            ['plötzlich', 'for something sudden and unexpected'],
            ['zum Glück', 'for something good that helped'],
            ['leider', 'for something bad'],
            ['am Ende, schließlich', 'for the last event'],
          ] },
          { t: 'tip', art: 'owl', md: 'When *zuerst*, *dann*, *plötzlich* or *schließlich* starts a sentence, the verb comes next: *Plötzlich hörten wir einen Schrei.* After *als*, *nachdem* and *bevor*, the verb goes to the end.' },
          { t: 'ex', kind: 'order', h: 'Build the sentences of a story.', items: [
            { a: 'Nachdem wir angekommen waren, suchten wir ein Hotel.', why: '*nachdem* clause with *waren* at the end, then the main clause starts with the verb *suchten*.' },
            { a: 'Als ich aufwachte, war das Zimmer ganz hell.', why: 'After the *als* clause, the main clause starts with the verb *war*.' },
            { a: 'Bevor wir losfuhren, tranken wir einen Kaffee.', why: '*losfuhren* at the end of the *bevor* clause, then the verb *tranken*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Als wir am Bahnhof ankamen, ___ der Zug schon abgefahren.', o: ['war', 'hatte', 'ist'], why: 'Plusquamperfekt with *sein*, because *abfahren* is a verb of movement: *war abgefahren*.' },
            { q: 'Nachdem wir gegessen ___, gingen wir spazieren.', o: ['hatten', 'haben', 'waren'], why: '*nachdem* + Plusquamperfekt: *gegessen hatten*.' },
            { q: 'Gestern ___ ich eine alte Freundin in Wien getroffen.', o: ['habe', 'bin', 'war'], why: '*treffen* forms the Perfekt with *haben*: *habe getroffen*.' },
            { q: '___ wir im Café saßen, fing es an zu regnen.', o: ['Während', 'Wenn', 'Nachdem'], why: 'Two things at the same time: *während*. *Wenn* is not used for one event in the past.' },
            { q: 'Wir hatten keine Karte, aber ___ half uns ein Mann.', o: ['zum Glück', 'leider', 'deshalb'], why: 'Something good that helped: *zum Glück*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the Präteritum.', items: [
            { q: 'Am Morgen ___ wir mit dem Zug nach Salzburg. (fahren)', a: ['fuhren'], why: '*fahren*, *fuhr*; with *wir*: *fuhren*.' },
            { q: 'Dort ___ wir zwei Nächte. (bleiben)', a: ['blieben'], why: '*bleiben*, *blieb*; with *wir*: *blieben*.' },
            { q: 'In der Altstadt ___ ich meinen Geldbeutel. (verlieren)', a: ['verlor'], why: '*verlieren*, *verlor*.' },
            { q: 'Zum Glück ___ ihn eine Frau und brachte ihn zur Polizei. (finden)', a: ['fand'], why: '*finden*, *fand*.' },
            { q: 'Am Abend ___ ich sehr müde, aber glücklich. (sein)', a: ['war'], why: '*sein*, *war*: common in speech and in writing.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Places, people and feelings',
      about: 'Make your story come alive with adjectives and words for feelings.',
      art: 'cat',
      spreads: [
        [
          { t: 'table', caption: 'Describing places and people', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['malerisch', 'very pretty, like a picture'],
            ['überfüllt', 'too full of people'],
            ['verlassen', 'empty, nobody is there'],
            ['gemütlich', 'cosy and comfortable'],
            ['hilfsbereit', 'happy to help'],
            ['gesprächig', 'likes to talk a lot'],
            ['schüchtern', 'shy'],
            ['gastfreundlich', 'friendly and generous to guests'],
          ] },
          { t: 'tip', art: 'owl', md: 'A good travel story has details. Instead of *Das Dorf war schön*, say what you saw: *Das Dorf war malerisch, mit kleinen Häusern direkt am Wasser.*' },
        ],
        [
          { t: 'text', md: 'Many words for feelings go with a fixed preposition. Learn them together.' },
          { t: 'examples', items: [
            { s: 'Ich habe mich sehr **über** das Geschenk **gefreut**.', n: '*sich freuen über* + accusative: about something that has happened.' },
            { s: 'Wir hatten **Angst vor** dem Gewitter.', n: '*Angst haben vor* + dative.' },
            { s: 'Er hat sich **über** die Verspätung **geärgert**.', n: '*sich ärgern über* + accusative: to be annoyed about.' },
            { s: 'Ich war total **enttäuscht von** dem Hotel.', n: '*enttäuscht von* + dative: disappointed with.' },
            { s: 'Sie war **begeistert von** der Aussicht.', n: '*begeistert von* + dative: very happy with something.' },
            { s: 'Wir waren **erleichtert**, als der Bus endlich kam.', n: '*erleichtert*: happy because a problem is over.' },
          ] },
          { t: 'tip', art: 'owl', md: '*sich freuen auf* is for the future: *Ich freue mich auf den Urlaub.* *sich freuen über* is for something that is already here or has happened.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the preposition or the verb.', items: [
            { q: 'Wir haben uns sehr ___ eure Postkarte gefreut.', o: ['über', 'vor', 'von'], why: 'The postcard has arrived: *sich freuen über*.' },
            { q: 'Viele Touristen haben Angst ___ Schlangen.', o: ['vor', 'über', 'auf'], why: '*Angst haben vor* + dative.' },
            { q: 'Ich freue mich schon ___ die Reise im Sommer.', o: ['auf', 'über', 'von'], why: 'The trip is in the future: *sich freuen auf*.' },
            { q: 'Er war enttäuscht ___ dem Essen.', o: ['von', 'vor', 'auf'], why: '*enttäuscht von* + dative.' },
            { q: 'Sie hat sich über den Lärm im Hotel ___.', o: ['geärgert', 'begeistert', 'gefürchtet'], why: 'Noise is annoying: *sich ärgern über*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the feeling and the situation.', pairs: [
            ['erleichtert', 'Der Pass ist wieder da!'],
            ['enttäuscht', 'Das Hotel war viel schlechter als auf den Fotos.'],
            ['nervös', 'Morgen habe ich meine erste Tauchstunde, und ich kann nicht schlafen.'],
            ['begeistert', 'Die Aussicht war einfach fantastisch!'],
            ['überrascht', 'Ich hatte keine Ahnung, dass meine Freunde auch da waren!'],
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the adjectives from the table in this lesson.', items: [
            { s: 'Das Dorf am See war [malerisch], aber im August total [überfüllt].', why: '*malerisch*: like a picture. *überfüllt*: too many people.' },
            { s: 'Unsere Gastgeberin war sehr [gastfreundlich], und das Zimmer war richtig [gemütlich].', why: 'One adjective for a person, one for a room.' },
            { s: 'Am Abend war der Strand ganz [verlassen].', why: '*verlassen*: nobody was there.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with an adjective.', items: [
            { q: 'Die Frau an der Rezeption war sehr ___ und hat uns sofort geholfen. (happy to help)', a: ['hilfsbereit'], why: '*hilfsbereit*: ready to help.' },
            { q: 'Der Junge sagte kein Wort. Er war sehr ___. (shy)', a: ['schüchtern'], why: '*schüchtern*: shy.' },
            { q: 'Ich war total ___, als ich meinen Pass wiedergefunden hatte. (relieved)', a: ['erleichtert'], why: '*erleichtert*: the problem is over.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a travel story with a surprise',
      about: 'Read a story told in the past and follow what happens.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Lina tells a story from her trip to the North Sea. Look at the tenses: most of the story is in the Präteritum, the background is in the Plusquamperfekt, and the last sentence is in the Perfekt.' },
          { t: 'reading', title: 'Auf der falschen Insel', md: 'Im letzten Sommer wollte ich ein paar Tage auf einer Nordseeinsel verbringen. Ich hatte ein kleines Zimmer gebucht und freute mich schon lange auf die Reise. Am Hafen war es laut und voll. Ich kaufte schnell ein Ticket, stieg auf die Fähre und schlief sofort ein, denn ich war schon um vier Uhr aufgestanden.\n\nAls ich aufwachte, legte die Fähre gerade an. Ich ging von Bord und suchte meine Pension, aber niemand kannte die Adresse. Nach einer halben Stunde fragte ich einen älteren Mann, der vor einem Café saß. Er sah auf meine Buchung und lachte. „Die Straße gibt es hier nicht“, sagte er. „Sie sind auf der falschen Insel!“\n\nIch war total erschrocken. Die nächste Fähre zurück fuhr erst am nächsten Morgen. Zum Glück war der Mann, er hieß Hinrich, sehr hilfsbereit. Er rief seine Schwester an, die ein Gästezimmer hatte. Am Abend saß ich mit der ganzen Familie am Tisch, es gab frischen Fisch, und alle erzählten Geschichten.\n\nAm nächsten Morgen brachte mich Hinrich zur Fähre. Beim Abschied sagte er: „Nächstes Jahr kommst du einfach wieder, aber diesmal mit Absicht!“ Und genau das habe ich gemacht.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read Lina’s story. True, false or not given?', items: [
            { q: 'Lina hatte vor der Reise ein Zimmer gebucht.', a: 't', why: '*Ich hatte ein kleines Zimmer gebucht.*' },
            { q: 'Auf der Fähre war Lina die ganze Zeit wach.', a: 'f', why: '*… und schlief sofort ein.*' },
            { q: 'Hinrich kannte die Adresse von Linas Pension.', a: 'f', why: '*Die Straße gibt es hier nicht.*' },
            { q: 'Lina konnte noch am selben Abend zurückfahren.', a: 'f', why: 'The next ferry went back *erst am nächsten Morgen*.' },
            { q: 'Hinrichs Schwester hat ein Restaurant.', a: 'ng', why: 'She has a guest room. The text does not mention a restaurant.' },
            { q: 'Lina ist im nächsten Jahr wieder auf die Insel gefahren.', a: 't', why: '*Und genau das habe ich gemacht.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Lina schlief auf der Fähre sofort ein, weil ___', o: ['sie sehr früh aufgestanden war.', 'die Fähre sehr ruhig war.', 'sie krank war.'], why: '*… denn ich war schon um vier Uhr aufgestanden.*' },
            { q: 'Hinrich lachte, weil ___', o: ['Lina auf der falschen Insel war.', 'er Lina schon kannte.', 'Lina kein Ticket hatte.'], why: '*Sie sind auf der falschen Insel!*' },
            { q: 'Was meint Hinrich mit *diesmal mit Absicht*?', o: ['Lina soll die Insel nächstes Mal bewusst wählen.', 'Lina soll eine andere Fähre nehmen.', 'Lina soll nicht wiederkommen.'], why: '*mit Absicht*: on purpose, not by mistake.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two parts of the Plusquamperfekt.', items: [
            { s: 'Ich [hatte] ein kleines Zimmer [gebucht].', why: '*hatte* + *gebucht*: she booked before the trip.' },
            { s: 'Ich [war] schon um vier Uhr [aufgestanden].', why: '*war* + *aufgestanden*: she got up before the ferry left.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Als wir ankamen, ___ das Konzert schon angefangen.', o: ['hatte', 'war', 'hat'], why: 'Plusquamperfekt: *anfangen* takes *haben*, so *hatte angefangen*.' },
      { q: 'Wir haben uns sehr ___ dein Geschenk gefreut.', o: ['über', 'vor', 'von'], why: 'The present is here: *sich freuen über*.' },
      { q: 'Das Dorf war so ___, dass wir kaum laufen konnten.', o: ['überfüllt', 'verlassen', 'gemütlich'], why: 'Too many people: *überfüllt*.' },
      { q: '___ ich in Rom war, habe ich viel Pasta gegessen.', o: ['Als', 'Wenn', 'Wann'], why: 'One period in the past: *als*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Am Morgen ___ wir nach Graz. (fahren, Präteritum)', a: ['fuhren'], why: '*fahren*, *fuhr*; with *wir*: *fuhren*.' },
      { q: 'Nachdem wir gegessen ___, gingen wir zum Strand. (haben)', a: ['hatten'], why: '*nachdem* + Plusquamperfekt: *gegessen hatten*.' },
      { q: 'Ich habe Angst ___ dem Fliegen.', a: ['vor'], why: '*Angst haben vor* + dative.' },
      { q: 'Die Frau hat uns sofort geholfen. Sie war sehr ___. (happy to help)', a: ['hilfsbereit'], why: '*hilfsbereit*: ready to help.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Als ich aufwachte, legte die Fähre an.', why: 'After the *als* clause, the main clause starts with the verb *legte*.' },
      { a: 'Nachdem wir das Hotel gefunden hatten, gingen wir essen.', why: '*hatten* at the end of the *nachdem* clause, then *gingen*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'In geschriebenen Geschichten benutzt man oft das Präteritum.', a: 't', why: 'Written stories usually use the Präteritum.' },
      { q: 'Man sagt *sich freuen auf* für etwas, das schon passiert ist.', a: 'f', why: '*sich freuen auf* is for the future; for the past, use *sich freuen über*.' },
    ] },
  ],
};
