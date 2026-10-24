// German B1, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Festivals and traditions',
  goal: 'Talk about festivals and traditions in detail. Revise adjective endings, use the infinitive with zu after verbs like vorhaben and vergessen, and learn the customs and good wishes of the German-speaking countries.',
  art: 'pretzel',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['adjective-endings', 'zu-infinitive', 'festivals', 'customs'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Adjective endings: a review',
      about: 'Adjective endings after der, after ein and with no article.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'An adjective before a noun always takes an ending. The ending depends on the article in front of it. After **der, die, das** (and *dieser, jeder*), the article already shows the gender and the case. So the adjective only ends in *-e* or *-en*.' },
          { t: 'table', caption: 'After der, die, das', explain: ['head'], quiz: true, head: ['', 'masculine', 'neuter', 'feminine', 'plural'], rows: [
            ['Nominativ', 'der neue Baum', 'das neue Kleid', 'die neue Kerze', 'die neuen Kerzen'],
            ['Akkusativ', 'den neuen Baum', 'das neue Kleid', 'die neue Kerze', 'die neuen Kerzen'],
            ['Dativ', 'dem neuen Baum', 'dem neuen Kleid', 'der neuen Kerze', 'den neuen Kerzen'],
          ] },
        ],
        [
          { t: 'text', md: 'After **ein, kein** and *mein, dein, unser* …, the article sometimes has no ending. Then the adjective shows the gender: *ein neuer Baum, ein neues Kleid*.' },
          { t: 'table', caption: 'After ein, kein, mein', explain: ['head'], quiz: true, head: ['', 'masculine', 'neuter', 'feminine', 'plural'], rows: [
            ['Nominativ', 'ein neuer Baum', 'ein neues Kleid', 'eine neue Kerze', 'keine neuen Kerzen'],
            ['Akkusativ', 'einen neuen Baum', 'ein neues Kleid', 'eine neue Kerze', 'keine neuen Kerzen'],
            ['Dativ', 'einem neuen Baum', 'einem neuen Kleid', 'einer neuen Kerze', 'keinen neuen Kerzen'],
          ] },
        ],
        [
          { t: 'text', md: 'With **no article**, the adjective takes the ending of the definite article: *der → heißer Tee, das → frisches Brot, die → warme Milch*. In the Dativ: *mit heißem Tee, mit warmer Milch, mit bunten Lichtern*.' },
          { t: 'table', caption: 'No article', explain: ['head'], quiz: true, head: ['', 'masculine', 'neuter', 'feminine', 'plural'], rows: [
            ['Nominativ', 'heißer Tee', 'frisches Brot', 'warme Milch', 'bunte Lichter'],
            ['Akkusativ', 'heißen Tee', 'frisches Brot', 'warme Milch', 'bunte Lichter'],
            ['Dativ', 'heißem Tee', 'frischem Brot', 'warmer Milch', 'bunten Lichtern'],
          ] },
          { t: 'tip', art: 'owl', md: 'A short rule: if the article does not show the gender and the case, the adjective shows them. *der Baum → der neue Baum*, but *ein Baum → ein neuer Baum*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right ending.', items: [
            { q: 'Wir haben einen ___ Weihnachtsbaum gekauft.', o: ['großen', 'große', 'großer'], why: 'Akkusativ masculine after *einen*: *-en*.' },
            { q: 'Das ___ Fest hat drei Tage gedauert.', o: ['große', 'großes', 'großen'], why: 'After *das*, the article shows everything: *-e*.' },
            { q: 'Zum Frühstück gibt es ___ Brötchen.', o: ['frische', 'frischen', 'frisches'], why: 'Plural with no article, Akkusativ: *-e*.' },
            { q: 'Ich trinke gern Tee mit ___ Milch.', o: ['warmer', 'warme', 'warmen'], why: 'Dativ feminine with no article: *-er*, like *der*.' },
            { q: 'Sie trägt zur Hochzeit ein ___ Kleid.', o: ['rotes', 'rote', 'roten'], why: 'Neuter after *ein*: the adjective shows the gender, *-es*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the adjective with the right ending.', items: [
            { q: 'Wir wünschen euch ein ___ Fest! (schön)', a: ['schönes'], why: 'Neuter Akkusativ after *ein*: *-es*.' },
            { q: 'Auf dem Weihnachtsmarkt trinken wir ___ Punsch. (heiß)', a: ['heißen'], why: 'Masculine Akkusativ with no article: *-en*, like *den*.' },
            { q: 'Ich habe mit meiner ___ Tante telefoniert. (alt)', a: ['alten'], why: 'Dativ after *meiner*: *-en*.' },
            { q: 'In der Stadt hängen überall ___ Lichter. (bunt)', a: ['bunte'], why: 'Plural Nominativ with no article: *-e*, like *die*.' },
            { q: 'Wir feiern mit unseren ___ Freunden. (gut)', a: ['guten'], why: 'Dativ plural after *unseren*: *-en*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Infinitive with zu',
      about: 'Say what you plan, like or forget to do.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'After many verbs and expressions, a second verb goes to the **end** with **zu**. Common ones are *vorhaben, versuchen, vergessen, anfangen, aufhören, Lust haben, Zeit haben* and *Es macht Spaß*. The part with *zu* is often separated by a comma.' },
          { t: 'examples', items: [
            { s: 'Ich habe vor, Weihnachten bei meinen Eltern **zu feiern**.', n: '*vorhaben*: to plan.' },
            { s: 'Es macht Spaß, Plätzchen **zu backen**.', n: '*Es macht Spaß, … zu …*' },
            { s: 'Hast du Lust, am Samstag auf den Weihnachtsmarkt **zu gehen**?', n: '*Lust haben, … zu …*' },
            { s: 'Ich habe vergessen, dich **anzurufen**.', n: 'Separable verb: *zu* goes in the middle, *anzurufen*.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'After the modal verbs (*können, müssen, wollen* …) and after *werden*, there is **no** *zu*: *Ich will feiern. Ich werde feiern.*' },
          { t: 'ex', kind: 'choice', h: 'With or without zu? Choose.', items: [
            { q: 'Ich habe keine Zeit, heute Abend ___.', o: ['zu kochen', 'kochen', 'kochen zu'], why: '*Zeit haben* + *zu* + infinitive at the end.' },
            { q: 'Wir wollen Silvester in Berlin ___.', o: ['feiern', 'zu feiern', 'gefeiert'], why: 'After a modal verb (*wollen*): no *zu*.' },
            { q: 'Es macht mir Spaß, den Baum ___.', o: ['zu schmücken', 'schmücken', 'geschmückt'], why: '*Es macht Spaß* + *zu* + infinitive.' },
            { q: 'Vergiss nicht, Brot ___!', o: ['mitzubringen', 'zu mitbringen', 'mitbringen'], why: 'Separable verb: *zu* goes in the middle, *mitzubringen*.' },
            { q: 'Kannst du mir beim Kochen ___?', o: ['helfen', 'zu helfen', 'geholfen'], why: 'After a modal verb (*können*): no *zu*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write zu + infinitive.', items: [
            { q: 'Ich habe vor, im Dezember nach Salzburg ___. (fahren)', a: ['zu fahren'], why: '*vorhaben* + *zu fahren*' },
            { q: 'Hör bitte auf, so laut Musik ___. (hören)', a: ['zu hören'], why: '*aufhören* + *zu hören*' },
            { q: 'Sie hat schon angefangen, die Geschenke ___. (einpacken)', a: ['einzupacken'], why: 'Separable verb: *zu* goes in the middle, *einzupacken*.' },
            { q: 'Hast du Lust, mit uns Karneval ___? (feiern)', a: ['zu feiern'], why: '*Lust haben* + *zu feiern*' },
            { q: 'Ich versuche, jeden Tag ein bisschen Deutsch ___. (lernen)', a: ['zu lernen'], why: '*versuchen* + *zu lernen*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Es macht Spaß, mit Freunden zu feiern.', why: 'After the comma, the rest of the sentence, then *zu* + infinitive at the end.' },
            { a: 'Ich habe vergessen, dich anzurufen.', why: '*Anzurufen*, with *zu* in the middle, goes to the end.' },
            { a: 'Hast du Lust, ins Kino zu gehen?', why: '*Zu gehen* goes to the end of the sentence.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Festivals and good wishes',
      about: 'Customs and congratulations in the German-speaking countries.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'Each festival has its own wish. Learn the whole phrase.' },
          { t: 'table', caption: 'Good wishes', explain: ['head', 'col1'], head: ['Phrase', 'When you say it'], rows: [
            ['Herzlichen Glückwunsch zum Geburtstag!', 'on a birthday'],
            ['Frohe Weihnachten!', 'at Christmas'],
            ['Einen guten Rutsch!', 'in the last days before New Year'],
            ['Frohes neues Jahr!', 'on 1 January and the days after'],
            ['Frohe Ostern!', 'at Easter'],
            ['Herzlichen Glückwunsch zur Hochzeit!', 'at a wedding'],
            ['Alles Gute!', 'on a birthday, at a wedding or for a new job'],
            ['Gute Besserung!', 'when someone is ill'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Germany, many people think it brings bad luck to congratulate someone **before** their birthday. Wait for the day itself.' },
        ],
        [
          { t: 'text', md: 'In December, many families have an *Adventskranz* with four candles and light one more candle each Sunday. On 6 December, *Nikolaustag*, children find sweets in the shoes that they put outside the door the evening before. Presents are usually opened on the evening of 24 December, *Heiligabend*. On 31 December, *Silvester*, people celebrate with friends, and at midnight there are fireworks.' },
          { t: 'text', md: 'The carnival season has different names: *Karneval* in the Rhineland, *Fasching* in Bavaria and Austria, *Fastnacht* or *Fasnacht* in the south-west of Germany and in Switzerland. The big days are in February or March. People wear costumes and watch parades. Each country also has a national holiday: 3 October in Germany, 26 October in Austria and 1 August in Switzerland.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What goes together?', pairs: [
            ['der Adventskranz', 'Jeden Sonntag im Advent zündet man eine Kerze mehr an.'],
            ['der Nikolaustag', 'Kinder stellen am Abend vorher ihre Schuhe vor die Tür.'],
            ['Heiligabend', 'Am Abend packt die Familie die Geschenke aus.'],
            ['Silvester', 'Um Mitternacht gibt es ein Feuerwerk.'],
            ['der Karneval', 'Die Menschen tragen Kostüme und sehen sich Umzüge an.'],
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Am 6. Dezember finden viele Kinder Süßigkeiten in ihren Schuhen.', a: 't', why: 'That is the custom on *Nikolaustag*.' },
            { q: 'In Deutschland packt man die Geschenke meistens erst am 25. Dezember aus.', a: 'f', why: 'Most families open them on the evening of 24 December, *Heiligabend*.' },
            { q: 'In Bayern und Österreich heißt der Karneval Fasching.', a: 't', why: 'In Bavaria and Austria it is called *Fasching*.' },
            { q: 'Der Nationalfeiertag der Schweiz ist am 3. Oktober.', a: 'f', why: 'In Switzerland it is 1 August. 3 October is the national holiday in Germany.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'Deine Kollegin hat heute Geburtstag. Was sagst du?', o: ['Herzlichen Glückwunsch!', 'Einen guten Rutsch!', 'Frohe Ostern!'], why: 'On a birthday: *Herzlichen Glückwunsch!*' },
            { q: 'Es ist der 30. Dezember. Was sagst du zum Abschied?', o: ['Einen guten Rutsch!', 'Frohe Ostern!', 'Gute Besserung!'], why: 'Before New Year: *Einen guten Rutsch!*' },
            { q: 'Dein Freund heiratet. Was schreibst du auf die Karte?', o: ['Herzlichen Glückwunsch zur Hochzeit!', 'Herzlichen Glückwunsch zum Geburtstag!', 'Frohe Weihnachten!'], why: 'For a wedding: *zur Hochzeit*.' },
            { q: 'Dein Nachbar ist krank. Was sagst du?', o: ['Gute Besserung!', 'Einen guten Rutsch!', 'Frohes neues Jahr!'], why: 'When someone is ill: *Gute Besserung!*' },
            { q: 'Dein Bruder hat morgen Geburtstag. Was machst du heute besser nicht?', o: ['Ihm schon heute gratulieren.', 'Ein Geschenk kaufen.', 'Einen Kuchen backen.'], why: 'Many people think that congratulating before the birthday brings bad luck.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A year of festivals',
      about: 'Read about Karneval, Advent and other traditions.',
      art: 'monster',
      spreads: [
        [
          { t: 'reading', title: 'Ein Jahr voller Feste', md: 'Luana Costa kommt aus Brasilien und lebt seit zwei Jahren in Köln. Hier erzählt sie von ihrem ersten Jahr.\n\nAls ich nach Köln gezogen bin, wusste ich wenig über deutsche Feste. Mein erstes Fest war der Karneval. Am 11. November um 11:11 Uhr beginnt in Köln die neue Saison, aber die großen Partys gibt es erst im Februar. Meine Kollegen haben mir ein lustiges Kostüm geliehen, und wir haben auf der Straße gesungen und getanzt. Am Rosenmontag habe ich den großen Umzug gesehen. Von den Wagen werfen die Leute Süßigkeiten, die man „Kamelle“ nennt.\n\nIm Dezember habe ich die Adventszeit kennengelernt. Fast jede Stadt hat einen Weihnachtsmarkt mit kleinen Holzhäusern, bunten Lichtern und heißem Glühwein. Meine Nachbarin hat mir gezeigt, wie man Plätzchen backt. Es hat viel Spaß gemacht, zusammen in ihrer kleinen Küche zu stehen.\n\nWeihnachten selbst war ruhiger, als ich gedacht hatte. Meine deutschen Freunde feiern es mit der Familie, mit einem schönen Baum und einem guten Essen. Silvester ist dagegen laut: Um Mitternacht gibt es überall Feuerwerk.\n\nIn Brasilien feiern wir auch Karneval, aber im Sommer und bei 35 Grad. In Köln habe ich bei drei Grad gefeiert. Nächstes Jahr habe ich vor, meine Familie einzuladen. Sie sollen sehen, dass man auch im Winter gut feiern kann!' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Luana hat ihr Karnevalskostüm selbst gemacht.', a: 'f', why: 'Her colleagues lent it to her: *Meine Kollegen haben mir ein lustiges Kostüm geliehen.*' },
            { q: 'Die Karnevalssaison in Köln beginnt im November.', a: 't', why: '*Am 11. November um 11:11 Uhr beginnt in Köln die neue Saison.*' },
            { q: 'Luana hat mit ihrer Nachbarin Plätzchen gebacken.', a: 't', why: 'Her neighbour showed her how to bake them, in her kitchen.' },
            { q: 'Luana hat Weihnachten bei ihrer Nachbarin gefeiert.', a: 'ng', why: 'The text does not say where Luana spent Christmas.' },
            { q: 'In Brasilien ist es zur Karnevalszeit kalt.', a: 'f', why: 'In Brazil, carnival is in summer, at 35 degrees.' },
            { q: 'Luanas Familie hat schon gesagt, dass sie nach Köln kommt.', a: 'ng', why: 'Luana only plans to invite them. We do not know their answer.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Answer the questions about the text.', items: [
            { q: 'Was sind „Kamelle“?', o: ['Süßigkeiten, die man beim Umzug wirft.', 'Kostüme für den Karneval.', 'Kleine Holzhäuser auf dem Weihnachtsmarkt.'], why: '*Von den Wagen werfen die Leute Süßigkeiten, die man „Kamelle“ nennt.*' },
            { q: 'Wie war Weihnachten für Luana?', o: ['Ruhiger, als sie gedacht hatte.', 'Lauter als Silvester.', 'Genauso wie in Brasilien.'], why: '*Weihnachten selbst war ruhiger, als ich gedacht hatte.*' },
            { q: 'Was hat Luana nächstes Jahr vor?', o: ['Sie will ihre Familie nach Köln einladen.', 'Sie will nach Brasilien zurückziehen.', 'Sie will ein eigenes Kostüm nähen.'], why: '*Nächstes Jahr habe ich vor, meine Familie einzuladen.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the adjectives with an ending.', items: [
            { s: 'Meine Kollegen haben mir ein [lustiges] Kostüm geliehen.', why: 'Neuter Akkusativ after *ein*: *-es*.' },
            { s: 'Am Rosenmontag habe ich den [großen] Umzug gesehen.', why: 'Masculine Akkusativ after *den*: *-en*.' },
            { s: 'Fast jede Stadt hat einen Weihnachtsmarkt mit [kleinen] Holzhäusern, [bunten] Lichtern und [heißem] Glühwein.', why: 'Dativ after *mit* with no article: *-en* in the plural, *-em* for masculine *Glühwein*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Wir haben einen ___ Abend zusammen verbracht.', o: ['schönen', 'schöner', 'schönes'], why: 'Masculine Akkusativ after *einen*: *-en*.' },
      { q: 'Im Winter trinke ich gern ___ Tee.', o: ['heißen', 'heißer', 'heiße'], why: 'Masculine Akkusativ with no article: *-en*, like *den*.' },
      { q: 'Ich habe vor, im Sommer nach Zürich ___.', o: ['zu fahren', 'fahren', 'gefahren'], why: '*vorhaben* + *zu* + infinitive.' },
      { q: 'Es ist der 31. Dezember. Was wünschst du deinen Freunden?', o: ['Einen guten Rutsch!', 'Frohe Ostern!', 'Gute Besserung!'], why: 'Before New Year: *Einen guten Rutsch!*' },
      { q: 'Wir müssen morgen sehr früh ___.', o: ['aufstehen', 'aufzustehen', 'zu aufstehen'], why: 'After a modal verb (*müssen*): no *zu*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the right form.', items: [
      { q: 'Das ist ein ___ Brauch. (alt)', a: ['alter'], why: 'Masculine Nominativ after *ein*: *-er*.' },
      { q: 'Wir feiern mit der ganzen ___ Familie. (groß)', a: ['großen'], why: 'Dativ feminine after *der*: *-en*.' },
      { q: 'Vergiss nicht, die Kerzen ___. (anzünden)', a: ['anzuzünden'], why: 'Separable verb: *zu* goes in the middle, *anzuzünden*.' },
      { q: 'Hast du Lust, Plätzchen ___? (backen)', a: ['zu backen'], why: '*Lust haben* + *zu backen*' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Es macht Spaß, zusammen zu kochen.', why: '*Zu kochen* goes to the end.' },
      { a: 'Ich habe vergessen, dir zu gratulieren.', why: '*Zu gratulieren* goes to the end; *dir* comes before it.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'In der Schweiz ist der Nationalfeiertag am 1. August.', a: 't', why: 'The Swiss national holiday is on 1 August.' },
      { q: 'Zum Nikolaustag stellen Kinder ihre Schuhe vor die Tür.', a: 't', why: 'They put them out the evening before 6 December.' },
      { q: 'Man sollte schon am Tag vor dem Geburtstag gratulieren.', a: 'f', why: 'Many people think this brings bad luck. Wait for the day itself.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['Sie hat ein neues Kleid gekauft.', 'Sie hat ein neue Kleid gekauft.', 'Sie hat ein neuen Kleid gekauft.'], why: 'Neuter Akkusativ after *ein*: *-es*.' },
    ] },
  ],
};
