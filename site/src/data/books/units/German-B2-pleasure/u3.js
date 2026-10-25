// German B2 for travel, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Arts and media',
  goal: 'Discuss books, films, art and music in detail.',
  art: 'parrot',
  tags: { skills: ['speaking', 'vocabulary', 'grammar', 'reading'], topics: ['film', 'books', 'art', 'participles-as-adjectives', 'recommendations', 'auch-wenn', 'reviews'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Describing a film or a work of art',
      about: 'Say what a work is about, how it is made and what you think of it.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'To talk about a film, a novel, a play or a painting in detail, you need words for the **story**, the **people who made it** and **how it is made**. Learn the nouns with their article.' },
          { t: 'table', caption: 'Words for films, books and art', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['die Handlung', 'what happens in the story'],
            ['die Hauptfigur', 'the main character'],
            ['das Drehbuch', 'the script of a film'],
            ['die Regie', 'the direction of a film or play; *Regie führen*: to direct'],
            ['die Besetzung', 'the cast, all the actors'],
            ['die Kameraführung', 'the camera work'],
            ['das Bühnenbild', 'the stage set in a theatre'],
            ['das Gemälde', 'a painting'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Der Film **spielt im** Berlin der 1920er-Jahre.', n: '*spielen in*: where and when the story takes place.' },
            { s: 'Der Roman **handelt von** zwei Brüdern, die sich nach Jahren wiedersehen.', n: '*handeln von* + Dativ: what the book is about.' },
            { s: '**Es geht um** eine Ärztin, die aufs Land zieht.', n: '*es geht um* + Akkusativ: the same meaning, very common in speech.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Der Roman handelt ___ einer Familie in Hamburg.', o: ['von', 'um', 'über'], why: '*handeln von* + Dativ.' },
            { q: 'In dem Film geht es ___ eine junge Musikerin.', o: ['um', 'von', 'über'], why: '*es geht um* + Akkusativ.' },
            { q: 'Die Serie spielt ___ Wien der Nachkriegszeit.', o: ['im', 'in', 'am'], why: 'With a time added (*der Nachkriegszeit*) the city gets an article: *im Wien der Nachkriegszeit*.' },
            { q: 'Die ___ ist so spannend, dass man das Buch nicht weglegen kann.', o: ['Handlung', 'Besetzung', 'Kameraführung'], why: 'A book has a story, *die Handlung*, but no cast and no camera.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Evaluating a work', explain: ['head'], head: ['Positive', 'Negative'], rows: [
            ['mitreißend', 'langatmig'],
            ['vielschichtig', 'oberflächlich'],
            ['originell', 'vorhersehbar'],
            ['berührend', 'kitschig'],
            ['überzeugend', 'übertrieben'],
          ] },
          { t: 'ex', kind: 'match', h: 'Match each adjective with its meaning.', pairs: [
            ['vorhersehbar', 'man weiß früh, wie es endet'],
            ['langatmig', 'zu lang und deshalb langweilig'],
            ['vielschichtig', 'hat viele Ebenen und Bedeutungen'],
            ['kitschig', 'zu süß und sentimental'],
            ['mitreißend', 'man ist ganz gefesselt und gespannt'],
          ] },
        ],
        [
          { t: 'text', md: 'Reviews often use **participles as adjectives**. They take normal adjective endings. **Partizip I** (infinitive + *d*) describes something that acts or is happening: *eine **überzeugende** Darstellung* (the performance convinces). **Partizip II** describes something that has been done: *eine **gelungene** Verfilmung* (the film has succeeded).' },
          { t: 'ex', kind: 'gap', h: 'Write the participle with the right ending.', items: [
            { q: 'Das war eine sehr ___ Inszenierung. (gelingen, Partizip II)', a: ['gelungene'], why: '*gelingen → gelungen*, feminine after *eine*: *gelungene*.' },
            { q: 'Die Schauspielerin gibt eine ___ Darstellung der Hauptfigur. (überzeugen, Partizip I)', a: ['überzeugende', 'ueberzeugende'], why: '*überzeugen → überzeugend*, feminine after *eine*: *überzeugende*.' },
            { q: 'Der Film erzählt eine ___ Geschichte über Freundschaft. (berühren, Partizip I)', a: ['berührende', 'beruehrende'], why: '*berühren → berührend*: the story moves people.' },
            { q: 'Mir gefällt der ___ Schluss nicht. (übertreiben, Partizip II)', a: ['übertriebene', 'uebertriebene'], why: '*übertreiben → übertrieben*, masculine after *der*: *übertriebene*.' },
            { q: 'Das Museum zeigt ein lange ___ Gemälde. (vergessen, Partizip II)', a: ['vergessenes'], why: 'Neuter after *ein*: *ein lange vergessenes Gemälde*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Recommending and defending your taste',
      about: 'Recommend a book or film and argue for it when someone disagrees.',
      art: 'dog',
      spreads: [
        [
          { t: 'dialogue', title: 'Nach dem Kino', lines: [
            { who: 'Selin', s: 'Hast du „Die stille Insel“ schon gesehen? Den Film musst du dir unbedingt ansehen.' },
            { who: 'Noah', s: 'Ehrlich gesagt habe ich nur den Trailer gesehen, und der wirkte ziemlich langatmig.' },
            { who: 'Selin', s: 'Der Trailer täuscht. Gerade die ruhigen Szenen machen den Film so stark.' },
            { who: 'Noah', s: 'Hm. Ich mag eher Filme, in denen etwas passiert.' },
            { who: 'Selin', s: 'Das verstehe ich. Aber auch wenn die Handlung langsam ist, wird es nie langweilig. Die Hauptdarstellerin spielt einfach großartig.' },
            { who: 'Noah', s: 'Und die Musik?' },
            { who: 'Selin', s: 'Sparsam, aber wirkungsvoll. Glaub mir, es lohnt sich, ihn im Kino zu sehen. Auf dem Handy verliert er viel.' },
            { who: 'Noah', s: 'Na gut, du hast mich überzeugt. Aber wenn er mir nicht gefällt, lädst du mich auf ein Bier ein.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Noah hat den Film schon gesehen.', a: 'f', why: '*Ehrlich gesagt habe ich nur den Trailer gesehen.*' },
            { q: 'Selin findet die ruhigen Szenen besonders gut.', a: 't', why: '*Gerade die ruhigen Szenen machen den Film so stark.*' },
            { q: 'Laut Selin ist die Musik laut und auffällig.', a: 'f', why: 'She says it is *sparsam, aber wirkungsvoll*: there is not much of it, but it works.' },
            { q: 'Selin rät, den Film im Kino zu sehen.', a: 't', why: '*Es lohnt sich, ihn im Kino zu sehen.*' },
          ] },
        ],
        [
          { t: 'text', md: 'Selin recommends strongly, and when Noah has doubts she does not simply repeat herself. She **accepts his point** (*auch wenn die Handlung langsam ist*) and turns a weakness into a strength (*gerade die ruhigen Szenen*).' },
          { t: 'table', caption: 'Recommending and arguing', explain: ['head', 'col1'], head: ['Phrase', 'Use'], rows: [
            ['Den Film musst du (dir) unbedingt ansehen.', 'a strong recommendation, between friends'],
            ['Ich kann dir das Buch nur empfehlen.', 'a strong recommendation; *nur* makes it stronger'],
            ['Es lohnt sich, … zu …', 'it is worth doing'],
            ['sehenswert, lesenswert, hörenswert', 'worth seeing, worth reading, worth listening to'],
            ['Gerade weil … / Gerade die …', 'exactly because …; it turns a weak point into a strong one'],
            ['Auch wenn …, …', 'even if …; you accept a point and keep your opinion'],
            ['Zugegeben, … Trotzdem …', 'you admit a point, then disagree'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Die Ausstellung ist wirklich ___. Geht unbedingt hin!', o: ['sehenswert', 'lesenswert', 'hörenswert'], why: 'You look at an exhibition: *sehenswert*.' },
            { q: '___ die Handlung langsam ist, wird der Film nie langweilig.', o: ['Auch wenn', 'Damit', 'Trotzdem'], why: '*auch wenn* accepts a point. *Trotzdem* is an adverb and cannot start a subordinate clause.' },
            { q: 'Es lohnt sich, den Roman im Original ___.', o: ['zu lesen', 'lesen', 'gelesen'], why: '*es lohnt sich* + *zu* + infinitive.' },
            { q: '___ weil der Film so ruhig ist, bleibt er lange im Kopf.', o: ['Gerade', 'Zwar', 'Trotzdem'], why: '*gerade weil*: exactly because. The quiet style is the reason it stays with you.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Es ___ sich, den Film im Kino zu sehen. (lohnen)', a: ['lohnt'], why: '*es lohnt sich* + *zu* + infinitive: it is worth doing.' },
            { q: 'Zugegeben, der Anfang ist etwas langatmig. ___ lohnt sich das Buch.', a: ['Trotzdem'], why: '*Zugegeben … Trotzdem*: you admit a point, then disagree.' },
            { q: 'Das Album ist wirklich ___. Hör es dir an! (hören + wert)', a: ['hörenswert', 'hoerenswert'], why: 'Music is something you listen to: *hörenswert*.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'When a sentence starts with an *auch wenn* clause, the main clause starts with its verb: *Auch wenn es traurig ist, **lohnt** es sich.* The whole *auch wenn* clause counts as the first position.' },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Den Film musst du dir unbedingt ansehen.', why: 'The object *Den Film* comes first for emphasis, then the verb *musst*; *ansehen* goes to the end.' },
            { a: 'Auch wenn es traurig ist, lohnt es sich.', why: 'After the *auch wenn* clause the main clause starts with the verb *lohnt*.' },
            { a: 'Was mich überzeugt hat, war die Musik.', why: 'The *was* clause is the subject, so the verb *war* follows it directly.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A film review and a book review',
      about: 'Read two reviews and see how they describe, praise and criticise.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'Filmkritik: „Die letzte Fähre“', md: '„Die letzte Fähre“ erzählt von einem einzigen Abend auf einer kleinen Nordseeinsel. Weil ein Sturm aufzieht, fällt die letzte Fähre zum Festland aus, und sechs Fremde müssen die Nacht gemeinsam im Wartesaal des Hafens verbringen. Was als harmloses Warten beginnt, wird bald zu einem Abend voller Geständnisse.\n\nRegisseurin Johanna Brehm braucht dafür kaum mehr als einen Raum und ein überzeugendes Ensemble. Besonders Ilse Marwitz als pensionierte Lehrerin, die mehr weiß, als sie sagt, spielt mit einer Ruhe, die unter die Haut geht. Die Kamera bleibt nah an den Gesichtern, sodass man jede kleine Regung sieht.\n\nGanz ohne Schwächen ist der Film nicht: Im Mittelteil wirken einige Dialoge etwas konstruiert, und das Ende ist für meinen Geschmack zu vorhersehbar. Trotzdem ist „Die letzte Fähre“ ein kluger, stiller Film, der lange nachwirkt. Wer laute Action sucht, wird enttäuscht sein. Alle anderen sollten sich diesen Abend nicht entgehen lassen.' },
        ],
        [
          { t: 'reading', title: 'Buchkritik: „Was die Zitronen wissen“', md: 'In seinem zweiten Roman erzählt Samir Haddad die Geschichte dreier Generationen einer Familie zwischen Beirut und Stuttgart. Im Mittelpunkt steht die junge Architektin Lina, die nach dem Tod ihrer Großmutter deren Wohnung ausräumt und dabei auf alte Briefe stößt.\n\nHaddad springt geschickt zwischen den Zeiten hin und her. Was anfangs verwirrend wirkt, ergibt nach und nach ein vielschichtiges Bild einer Familie, die viel verloren und noch mehr bewahrt hat. Seine Sprache ist schlicht, aber genau; gerade die Beschreibungen von Gerüchen und Farben bleiben im Gedächtnis.\n\nKleine Längen gibt es im letzten Drittel, wo sich manche Erinnerungen wiederholen. Das ändert jedoch nichts daran, dass dies ein warmherziges, lesenswertes Buch ist, das ohne Kitsch auskommt. Eine klare Empfehlung für alle, die Familiengeschichten mögen.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Both reviews: true, false or not given?', items: [
            { q: 'In „Die letzte Fähre“ verbringen sechs Menschen eine Nacht im Hafen.', a: 't', why: '*… sechs Fremde müssen die Nacht gemeinsam im Wartesaal des Hafens verbringen.*' },
            { q: 'Der Film spielt an vielen verschiedenen Orten.', a: 'f', why: 'The director needs *kaum mehr als einen Raum*.' },
            { q: 'Die Filmkritik findet das Ende überraschend.', a: 'f', why: '*… das Ende ist für meinen Geschmack zu vorhersehbar.*' },
            { q: 'Der Roman spielt in zwei Städten.', a: 't', why: '*… zwischen Beirut und Stuttgart.*' },
            { q: 'Lina findet in der Wohnung ihrer Großmutter alte Briefe.', a: 't', why: '*… und dabei auf alte Briefe stößt.*' },
            { q: 'Der Roman wurde schon verfilmt.', a: 'ng', why: 'The review says nothing about a film version.' },
            { q: 'Die Buchkritik findet den Roman kitschig.', a: 'f', why: 'It is a book *das ohne Kitsch auskommt*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the reviews.', items: [
            { q: '„… spielt mit einer Ruhe, die unter die Haut geht.“ Was bedeutet „unter die Haut gehen“?', o: ['jemanden tief berühren', 'jemanden langweilen', 'kaum bemerkt werden'], why: '*unter die Haut gehen*: to move someone deeply.' },
            { q: 'Welche Schwäche nennt die Buchkritik?', o: ['Im letzten Drittel wiederholen sich manche Erinnerungen.', 'Die Sprache ist zu kompliziert.', 'Das Ende ist vorhersehbar.'], why: '*Kleine Längen gibt es im letzten Drittel, wo sich manche Erinnerungen wiederholen.* The predictable ending is in the film review.' },
            { q: 'Für wen ist der Film laut Kritik nichts?', o: ['für Leute, die laute Action suchen', 'für Leute, die ruhige Filme mögen', 'für Leute, die gern lesen'], why: '*Wer laute Action sucht, wird enttäuscht sein.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Der Film handelt ___ einer Lehrerin, die in Rente geht.', o: ['von', 'um', 'über'], why: '*handeln von* + Dativ.' },
      { q: '___ das Buch lang ist, liest man es in zwei Tagen.', o: ['Auch wenn', 'Weil', 'Damit'], why: '*auch wenn*: a point you accept that does not change the result.' },
      { q: 'Die Ausstellung ist absolut ___.', o: ['sehenswert', 'lesenswert', 'hörenswert'], why: 'An exhibition is something to see.' },
      { q: 'Man weiß nach zehn Minuten, wie der Film endet. Er ist ___.', o: ['vorhersehbar', 'vielschichtig', 'mitreißend'], why: '*vorhersehbar*: you can see the end coming.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Das war eine wirklich ___ Verfilmung. (gelingen, Partizip II)', a: ['gelungene'], why: '*gelungen*, feminine after *eine*: *gelungene*.' },
      { q: 'Sie gibt eine ___ Darstellung der Hauptfigur. (überzeugen, Partizip I)', a: ['überzeugende', 'ueberzeugende'], why: '*überzeugend* + *-e*.' },
      { q: 'In dem Roman geht es ___ eine Familie in Stuttgart.', a: ['um'], why: '*es geht um* + Akkusativ.' },
      { q: 'Zugegeben, das Ende ist schwach. ___ lohnt sich der Film.', a: ['Trotzdem'], why: '*Zugegeben … Trotzdem*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
      ['die Handlung', 'was in der Geschichte passiert'],
      ['die Besetzung', 'alle Schauspielerinnen und Schauspieler eines Films'],
      ['das Drehbuch', 'der Text, nach dem ein Film gedreht wird'],
      ['das Gemälde', 'ein Bild, das mit Farbe gemalt ist'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Es lohnt sich, das Buch zu lesen.', why: '*es lohnt sich* + *zu* + infinitive at the end.' },
      { a: 'Was mich überzeugt hat, war das Ende.', why: 'The *was* clause comes first, then the verb *war*.' },
    ] },
  ],
};
