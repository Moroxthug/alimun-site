// German B1, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'On the move',
  goal: 'Travel and commute, and deal with problems on the way. Give reasons and contrasts with wegen, trotz, während and statt, talk about people with jemand and niemand, use nouns like der Kollege correctly and ask for help at the station.',
  art: 'snail',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['genitive-prepositions', 'indefinite-pronouns', 'n-declension', 'public-transport'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Wegen, trotz, während, statt',
      about: 'Give reasons and contrasts with the Genitiv.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'The prepositions **wegen** (because of), **trotz** (despite), **während** (during) and **statt** (instead of) take the **Genitiv**. In the Genitiv, the article is *des* for masculine and neuter nouns and *der* for feminine and plural nouns. Masculine and neuter nouns also add *-s* or *-es*.' },
          { t: 'table', caption: 'Genitiv', explain: ['head', 'col0'], quiz: true, head: ['Gender', 'Definite article', 'Indefinite article'], rows: [
            ['masculine', 'des Zuges', 'eines Zuges'],
            ['neuter', 'des Tickets', 'eines Tickets'],
            ['feminine', 'der Fahrt', 'einer Fahrt'],
            ['plural', 'der Züge', '–'],
          ] },
          { t: 'examples', items: [
            { s: 'Der Zug hat **wegen des Sturms** Verspätung.', n: '*wegen* + Genitiv: *der Sturm → des Sturms*.' },
            { s: '**Trotz des Regens** bin ich mit dem Rad gefahren.', n: '*trotz* + Genitiv: *der Regen → des Regens*.' },
            { s: '**Während der Fahrt** habe ich ein Buch gelesen.', n: '*während* + Genitiv: *die Fahrt → der Fahrt*.' },
            { s: 'Ich nehme heute den Bus **statt des Autos**.', n: '*statt* + Genitiv: *das Auto → des Autos*.' },
          ] },
        ],
        [
          { t: 'text', md: '*Wegen* gives a reason, like *weil*. *Trotz* gives a contrast, like *obwohl*. After *weil* and *obwohl* you need a whole clause with a verb. After *wegen* and *trotz* you only need a noun.' },
          { t: 'examples', items: [
            { s: '**Wegen des Streiks** fahren heute keine Busse.', n: 'A noun after *wegen*.' },
            { s: '**Weil die Fahrer streiken**, fahren heute keine Busse.', n: 'The same idea with *weil*: a clause with the verb at the end.' },
            { s: '**Trotz der Verspätung** haben wir den Anschluss noch erreicht.', n: 'A noun after *trotz*.' },
            { s: '**Obwohl der Zug Verspätung hatte**, haben wir den Anschluss noch erreicht.', n: 'The same idea with *obwohl*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In everyday speech, many people use the Dativ after *wegen* and *trotz*: *wegen dem Regen*. In writing, use the Genitiv: *wegen des Regens*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the preposition.', items: [
            { q: '___ des Schnees fahren heute keine Busse.', o: ['Wegen', 'Trotz', 'Statt'], why: 'The snow is the reason: *wegen*.' },
            { q: '___ der Kälte ist Lena wie jeden Tag mit dem Rad zur Arbeit gefahren.', o: ['Trotz', 'Wegen', 'Statt'], why: 'It is cold, but Lena still cycles as usual. This is a contrast: *trotz*.' },
            { q: 'Ich habe ___ der ganzen Fahrt geschlafen.', o: ['während', 'statt', 'trotz'], why: 'Two things at the same time: *während*.' },
            { q: 'Wir nehmen heute den Zug ___ des Flugzeugs.', o: ['statt', 'während', 'trotz'], why: 'The train replaces the plane: *statt*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the article in the Genitiv.', items: [
            { q: 'Wegen ___ Streiks fährt heute keine S-Bahn. (der Streik)', a: ['des'], why: 'Masculine: *der → des*, and the noun adds *-s*: *des Streiks*.' },
            { q: 'Trotz ___ Baustelle sind wir pünktlich. (die Baustelle)', a: ['der'], why: 'Feminine: *die → der*. Feminine nouns add no ending.' },
            { q: 'Während ___ Wochenendes ist das Büro geschlossen. (das Wochenende)', a: ['des'], why: 'Neuter: *das → des*, and the noun adds *-s*.' },
            { q: 'Statt ___ Taxis haben wir den Bus genommen. (ein Taxi)', a: ['eines'], why: 'Neuter with *ein*: *eines Taxis*.' },
            { q: 'Wegen ___ Bauarbeiten fährt die Linie 4 nicht. (die Bauarbeiten)', a: ['der'], why: 'Plural: *die → der*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Jemand, niemand and der Kollege',
      about: 'Talk about people you do not name, and learn nouns that add -n.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Use **indefinite pronouns** for people or things you do not name. *Jemand* is one person, but we do not know who. *Niemand* is no person. *Etwas* and *nichts* are for things. *Man* means people in general; its verb is in the *er/sie/es* form.' },
          { t: 'table', caption: 'Indefinite pronouns', explain: ['head', 'col1'], head: ['Pronoun', 'Meaning', 'Example'], rows: [
            ['jemand', 'a person, but we do not know who', 'Hat jemand meinen Schirm gesehen?'],
            ['niemand', 'no person', 'Im Wagen war niemand.'],
            ['etwas', 'a thing', 'Ich möchte etwas trinken.'],
            ['nichts', 'no thing', 'Ich habe nichts gehört.'],
            ['man', 'people in general', 'Hier darf man nicht rauchen.'],
            ['jeder', 'each person', 'Jeder braucht eine Fahrkarte.'],
            ['alle', 'all people (plural)', 'Alle müssen aussteigen.'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: '*Jemand* and *niemand* can take endings: *jemanden* in the Akkusativ, *jemandem* in the Dativ. In speech, many people leave the endings out. German uses only one negative word: *Ich habe nichts gesehen.*' },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Entschuldigung, kann mir ___ helfen? Mein Koffer ist so schwer.', o: ['jemand', 'niemand', 'nichts'], why: 'You ask for one person, but you do not know who: *jemand*.' },
            { q: 'Der Bahnsteig war ganz leer. Da war ___.', o: ['niemand', 'jemand', 'etwas'], why: 'Empty means no person: *niemand*.' },
            { q: 'Ich habe heute noch ___ gegessen. Ich habe großen Hunger!', o: ['nichts', 'etwas', 'niemand'], why: 'Very hungry: no food at all, so *nichts*.' },
            { q: 'Im Zug darf ___ nicht rauchen.', o: ['man', 'jemand', 'alle'], why: '*Man* means people in general, with the verb in the *er/sie/es* form: *man darf*.' },
            { q: 'Endstation! ___ müssen aussteigen.', o: ['Alle', 'Jeder', 'Man'], why: '*Alle* is plural: *alle müssen*. With *jeder* or *man*, the verb would be *muss*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Some masculine nouns add **-n** or **-en** in every case except the nominative singular. This is the **n-declension**. It is used for many nouns for male people and some animals: nouns ending in *-e* (*der Kollege, der Kunde, der Junge*), nouns ending in *-ent, -ant, -ist* (*der Student, der Praktikant, der Polizist*) and a few others, such as *der Mensch, der Nachbar, der Herr*.' },
          { t: 'table', caption: 'n-declension', quiz: true, head: ['', 'Singular', 'Plural'], rows: [
            ['Nominativ', 'der Kollege', 'die Kollegen'],
            ['Akkusativ', 'den Kollegen', 'die Kollegen'],
            ['Dativ', 'dem Kollegen', 'den Kollegen'],
            ['Genitiv', 'des Kollegen', 'der Kollegen'],
          ] },
          { t: 'tip', art: 'owl', md: '*Der Herr* adds *-n* in the singular and *-en* in the plural: *Ich frage den Herrn. Die Herren warten.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Ich fahre jeden Morgen mit **meinem Kollegen** ins Büro.', n: 'Dativ after *mit*: *meinem Kollegen*.' },
            { s: 'Kennst du **den neuen Studenten**?', n: 'Akkusativ: *den Studenten*.' },
            { s: 'Der Busfahrer hat **dem Touristen** den Weg erklärt.', n: 'Dativ: *dem Touristen*.' },
            { s: '**Mein Nachbar** fährt jeden Tag mit dem Rad.', n: 'Nominativ singular: no ending.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the noun with the n-declension ending.', items: [
            { s: 'Ich warte auf meinen [Kollegen], er ist noch im Büro.', why: 'Akkusativ after *warten auf*: *meinen Kollegen*.' },
            { s: 'Der Schaffner hat dem [Jungen] eine Fahrkarte verkauft.', why: 'Dativ: *dem Jungen*. *Der Schaffner* is not in the n-declension.' },
            { s: 'Unsere Nachbarin fragt den [Polizisten] nach dem Weg.', why: 'Akkusativ: *den Polizisten*.' },
            { s: 'Die Kellnerin bringt dem [Kunden] die Rechnung.', why: 'Dativ: *dem Kunden*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the noun in the right form.', items: [
            { q: 'Ich habe gestern einen alten ___ getroffen. (der Kollege)', a: ['Kollegen'], why: 'Akkusativ: *einen Kollegen*.' },
            { q: 'Kannst du bitte dem ___ helfen? Er sucht Gleis 7. (der Herr)', a: ['Herrn'], why: 'Dativ singular: *dem Herrn*.' },
            { q: 'Die Lehrerin spricht mit einem neuen ___. (der Student)', a: ['Studenten'], why: 'Dativ after *mit*: *einem Studenten*.' },
            { q: 'Wir haben im Zug einen netten ___ kennengelernt. (der Mensch)', a: ['Menschen'], why: 'Akkusativ: *einen Menschen*.' },
            { q: 'Mein ___ fährt jeden Tag mit dem Rad zur Arbeit. (der Nachbar)', a: ['Nachbar'], why: '*Mein Nachbar* is the subject, so Nominativ singular: no ending.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'At the station',
      about: 'Tickets, delays and asking for help on public transport.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'On trains, trams and buses you need some fixed words and phrases. Learn the nouns with their article and the verbs with their prefix.' },
          { t: 'table', caption: 'Public transport', explain: ['head'], quiz: true, head: ['Word', 'Example'], rows: [
            ['die Fahrkarte', 'Ich kaufe die Fahrkarte am Automaten.'],
            ['die Verspätung', 'Der Zug hat zehn Minuten Verspätung.'],
            ['ausfallen', 'Der Bus um 8 Uhr fällt heute aus.'],
            ['umsteigen', 'In Mannheim müssen Sie umsteigen.'],
            ['der Anschluss', 'Ich habe meinen Anschluss verpasst.'],
            ['das Gleis', 'Der Zug fährt von Gleis 3 ab.'],
            ['die Monatskarte', 'Mit der Monatskarte fahre ich günstiger.'],
            ['entwerten', 'Bitte entwerten Sie die Fahrkarte im Bus.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In many German cities, you buy your ticket before you get on, and sometimes you stamp it in a machine (*entwerten*). If you travel without a valid ticket (*schwarzfahren*), you must pay a fine.' },
        ],
        [
          { t: 'dialogue', title: 'At the station', lines: [
            { who: 'Amira', s: 'Entschuldigung, können Sie mir helfen? Mein Zug nach Köln steht nicht auf der Anzeige.' },
            { who: 'Mitarbeiter', s: 'Der Zug um 9:12 Uhr fällt leider aus. Wegen eines Unfalls ist die Strecke gesperrt.' },
            { who: 'Amira', s: 'Oh nein. Wie komme ich denn jetzt nach Köln?' },
            { who: 'Mitarbeiter', s: 'Nehmen Sie den Regionalzug um 9:30 Uhr von Gleis 5. In Düsseldorf steigen Sie dann um.' },
            { who: 'Amira', s: 'Gilt meine Fahrkarte auch für den Regionalzug?' },
            { who: 'Mitarbeiter', s: 'Ja, heute schon. Zeigen Sie sie einfach dem Zugbegleiter.' },
            { who: 'Amira', s: 'Vielen Dank für Ihre Hilfe!' },
          ] },
          { t: 'text', md: 'Polite ways to ask for help: *Entschuldigung, können Sie mir helfen?* or *Könnten Sie mir sagen, wo …?* or *Wissen Sie, ob dieser Zug nach … fährt?*' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the questions and the answers.', pairs: [
            ['Wann fährt der nächste Zug nach Bonn?', 'Um 10:15 Uhr von Gleis 2.'],
            ['Muss ich umsteigen?', 'Ja, in Koblenz.'],
            ['Wo kann ich eine Fahrkarte kaufen?', 'Am Automaten dort drüben.'],
            ['Warum fällt der Bus aus?', 'Wegen eines Streiks.'],
            ['Wie lange dauert die Fahrt?', 'Ungefähr zwei Stunden.'],
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Wissen Sie, ob dieser Zug nach Bremen fährt?', why: 'In the *ob* clause, the verb goes to the end.' },
            { a: 'Könnten Sie mir sagen, wo Gleis 9 ist?', why: 'In the *wo* clause, the verb goes to the end.' },
            { a: 'Wo muss ich umsteigen?', why: 'The modal verb comes second, the infinitive goes to the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Der Zug hat 20 Minuten ___.', o: ['Verspätung', 'Anschluss', 'Gleis'], why: '*Verspätung haben*: the train is late.' },
            { q: 'Wegen der Verspätung habe ich meinen ___ verpasst.', o: ['Anschluss', 'Fahrkarte', 'Bahnsteig'], why: '*den Anschluss verpassen*: you miss your next train.' },
            { q: 'Der Bus um 7:40 Uhr fällt heute ___.', o: ['aus', 'um', 'ab'], why: '*ausfallen*: the bus does not run.' },
            { q: 'Ohne gültige Fahrkarte fahren heißt ___.', o: ['schwarzfahren', 'umsteigen', 'entwerten'], why: '*schwarzfahren*: to travel without a valid ticket.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Der Zug um 8:05 Uhr ___ heute aus. (ausfallen)', a: ['fällt'], why: 'Separable verb: *fällt … aus*, with an umlaut for *er/sie/es*.' },
            { q: 'Wir ___ in Frankfurt um. (umsteigen)', a: ['steigen'], why: 'Separable verb: *wir steigen … um*.' },
            { q: 'Mein Zug hatte Verspätung, deshalb habe ich den Anschluss ___. (verpassen)', a: ['verpasst'], why: 'Inseparable prefix *ver-*: no *ge-*, so *verpasst*.' },
            { q: 'Bitte ___ Sie hier aus, der Zug endet hier. (aussteigen)', a: ['steigen'], why: 'Separable verb: *steigen Sie … aus*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Announcements and a commuter’s blog',
      about: 'Understand station announcements and read about life as a commuter.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'Station announcements use fixed phrases. Listen for the platform, the time and the reason for a change.' },
          { t: 'reading', title: 'Durchsagen am Bahnhof', md: 'Gleis 4: Der Zug nach München fährt ein. Bitte Vorsicht bei der Einfahrt. Planmäßige Abfahrt 14:20 Uhr.\n\nInformation zum Regionalexpress nach Ulm: Wegen einer technischen Störung hat dieser Zug heute etwa 25 Minuten Verspätung. Wir bitten um Entschuldigung.\n\nDie S-Bahn zum Flughafen fährt heute ausnahmsweise von Gleis 2 ab. Ich wiederhole: Die S-Bahn zum Flughafen fährt heute von Gleis 2.' },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Der Zug nach München fährt um 14:20 Uhr ab.', a: 't', why: '*Planmäßige Abfahrt 14:20 Uhr.*' },
            { q: 'Der Regionalexpress nach Ulm fällt heute aus.', a: 'f', why: 'It runs, but it is about 25 minutes late.' },
            { q: 'Die S-Bahn zum Flughafen fährt heute von einem anderen Gleis ab als sonst.', a: 't', why: '*Ausnahmsweise* means that today is an exception.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Mein Leben als Pendlerin', md: 'Seit drei Jahren pendle ich jeden Tag von meinem Dorf nach Hannover. Die Fahrt mit dem Regionalzug dauert vierzig Minuten, aber mit dem Weg zum Bahnhof bin ich fast eine Stunde unterwegs. Statt des Autos nehme ich den Zug, denn ein Auto ist mir zu teuer und zu stressig.\n\nMeistens klappt alles gut. Während der Fahrt lese ich oder höre Musik. Manchmal spreche ich auch mit einem Kollegen, der im selben Zug sitzt. Im Winter ist es aber oft schwierig. Wegen des Schnees hatte mein Zug letzte Woche eine Stunde Verspätung, und niemand wusste, warum wir so lange auf der Strecke standen.\n\nTrotz der Probleme fahre ich gern mit der Bahn. Man lernt viele Menschen kennen. Einmal hat mir ein Student geholfen, als mein Koffer zu schwer war. Ein anderes Mal hat mir eine ältere Dame ihren Schirm geschenkt, weil es geregnet hat und ich keinen hatte.\n\nMein Tipp für alle Pendler: Nehmen Sie immer etwas zu lesen und etwas zu trinken mit. Und bleiben Sie ruhig, wenn der Zug Verspätung hat. Ärgern hilft nichts!\n\nJana' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Jana fährt mit dem Zug, weil ihr ein Auto zu teuer ist.', a: 't', why: '*Ein Auto ist mir zu teuer und zu stressig.*' },
            { q: 'Während der Fahrt liest Jana manchmal.', a: 't', why: '*Während der Fahrt lese ich oder höre Musik.*' },
            { q: 'Letzte Woche hatte Janas Zug wegen eines Unfalls Verspätung.', a: 'f', why: 'The reason was the snow: *wegen des Schnees*.' },
            { q: 'Ein Student hat Jana mit ihrem Koffer geholfen.', a: 't', why: '*Einmal hat mir ein Student geholfen, als mein Koffer zu schwer war.*' },
            { q: 'Janas Kollege wohnt im selben Dorf wie Jana.', a: 'ng', why: 'The text says that he sits in the same train, not where he lives.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Answer the questions about the blog.', items: [
            { q: 'Wie lange ist Jana jeden Tag zur Arbeit unterwegs?', o: ['Fast eine Stunde.', 'Vierzig Minuten.', 'Zwanzig Minuten.'], why: 'The train takes forty minutes, but with the way to the station it is almost an hour.' },
            { q: 'Was hat eine ältere Dame für Jana getan?', o: ['Sie hat ihr ihren Schirm geschenkt.', 'Sie hat ihren Koffer getragen.', 'Sie hat ihr eine Fahrkarte gekauft.'], why: '*Eine ältere Dame hat mir ihren Schirm geschenkt.*' },
            { q: 'Was empfiehlt Jana anderen Pendlern?', o: ['Ruhig bleiben und etwas zu lesen mitnehmen.', 'Lieber mit dem Auto fahren.', 'Immer eine Monatskarte kaufen.'], why: 'Her tip: take something to read and to drink, and stay calm.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the preposition that takes the Genitiv.', items: [
            { s: '[Statt] des Autos nehme ich den Zug.', why: '*statt des Autos*' },
            { s: '[Wegen] des Schnees hatte mein Zug eine Stunde Verspätung.', why: '*wegen des Schnees*' },
            { s: '[Trotz] der Probleme fahre ich gern mit der Bahn.', why: '*trotz der Probleme*. *Mit* takes the Dativ.' },
            { s: '[Während] der Fahrt lese ich oder höre Musik.', why: '*während der Fahrt*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '___ des Streiks fahren heute keine Busse.', o: ['Wegen', 'Trotz', 'Während'], why: 'The strike is the reason: *wegen*.' },
      { q: 'Ich warte auf den ___.', o: ['Kollegen', 'Kollege', 'Kolleges'], why: 'n-declension, Akkusativ: *den Kollegen*.' },
      { q: 'Ich habe laut gerufen, aber ___ hat mich gehört.', o: ['niemand', 'jemand', 'nichts'], why: '*Aber* shows a contrast: no person heard me, so *niemand*.' },
      { q: 'Der Zug hat eine halbe Stunde ___.', o: ['Verspätung', 'Anschluss', 'Ausfall'], why: '*Verspätung haben*' },
      { q: '___ der Fahrt habe ich ein Buch gelesen.', o: ['Während', 'Statt', 'Wegen'], why: 'At the same time as the journey: *während*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the right form.', items: [
      { q: 'Trotz ___ Regens sind wir spazieren gegangen. (der Regen)', a: ['des'], why: 'Masculine Genitiv: *des Regens*.' },
      { q: 'Kannst du bitte den ___ fragen? (der Nachbar)', a: ['Nachbarn'], why: 'n-declension, Akkusativ: *den Nachbarn*.' },
      { q: 'Der Bus um 9 Uhr ___ heute aus. (ausfallen)', a: ['fällt'], why: 'Separable verb: *fällt … aus*.' },
      { q: 'Statt ___ Fahrrads nehme ich heute die U-Bahn. (das Fahrrad)', a: ['des'], why: 'Neuter Genitiv: *des Fahrrads*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: 'Wissen Sie, wo ich umsteigen muss?', why: 'In the *wo* clause, the conjugated verb goes to the end.' },
      { a: 'Wo kann ich eine Fahrkarte kaufen?', why: 'The modal verb comes second, the infinitive goes to the end.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['Ich habe mit einem Studenten gesprochen.', 'Ich habe mit einem Student gesprochen.', 'Ich habe mit einen Studenten gesprochen.'], why: '*Mit* takes the Dativ, and *der Student* is in the n-declension: *mit einem Studenten*.' },
      { q: '', o: ['Man muss hier eine Fahrkarte kaufen.', 'Man müssen hier eine Fahrkarte kaufen.', 'Man musst hier eine Fahrkarte kaufen.'], why: '*Man* takes the *er/sie/es* form: *man muss*.' },
    ] },
  ],
};
