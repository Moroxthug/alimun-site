// German A2, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Travel and weather',
  goal: 'Plan a trip, understand the weather and compare places.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['prepositions-places', 'comparative', 'superlative', 'weather', 'station'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Nach, in, zu, an or auf?',
      about: 'Say where you are going and where you are.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'German uses different prepositions for places. The question *Wohin?* asks where you are going. The question *Wo?* asks where you are.\n\nAfter *in*, *an* and *auf*, *Wohin?* takes the **Akkusativ** and *Wo?* takes the **Dativ**. *Zu* and *nach* always take the Dativ: *zu dem → zum*, *zu der → zur*.' },
          { t: 'table', caption: 'Wohin? and Wo?', explain: ['col0'], quiz: true, head: ['', 'Wohin?', 'Wo?'], rows: [
            ['Cities and most countries', 'nach Berlin, nach Spanien', 'in Berlin, in Spanien'],
            ['Countries with an article', 'in die Schweiz, in die USA', 'in der Schweiz, in den USA'],
            ['Buildings you go into', 'ins Kino, in die Stadt', 'im Kino, in der Stadt'],
            ['People, shops and offices', 'zum Arzt, zur Bank', 'beim Arzt, bei der Bank'],
            ['The sea, a lake, the beach', 'ans Meer, an den See', 'am Meer, am See'],
            ['Islands, markets, parties', 'auf eine Insel, auf den Markt', 'auf der Insel, auf dem Markt'],
            ['Home', 'nach Hause', 'zu Hause'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Im Sommer fliegen wir **nach** Portugal.', n: 'A country without an article: *nach*.' },
            { s: 'Meine Kollegin fährt **in die** Türkei.', n: '*die Türkei* has an article, so *in die*.' },
            { s: 'Ich gehe heute **zum** Friseur.', n: 'To a person or a shop: *zu*. *zu dem → zum*.' },
            { s: 'Am Wochenende fahren wir **ans** Meer.', n: 'To the water: *an*. *an das → ans*.' },
            { s: 'Wir wohnen **am** Meer.', n: '*Wo?* takes the Dativ: *an dem → am*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not mix up *nach Hause* and *zu Hause*. *Ich gehe nach Hause* means you are on your way home. *Ich bin zu Hause* means you are at home.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right preposition.', items: [
            { q: 'Im Sommer fliegen wir ___ Spanien.', o: ['nach', 'in', 'zu'], why: 'A country without an article: *nach Spanien*.' },
            { q: 'Nächste Woche fahre ich ___ die Schweiz.', o: ['in', 'nach', 'zu'], why: '*die Schweiz* has an article, so *in die Schweiz*.' },
            { q: 'Ich habe Zahnschmerzen. Ich gehe morgen ___ Zahnarzt.', o: ['zum', 'zur', 'nach'], why: 'To a person: *zu*. *der Zahnarzt → zu dem → zum*.' },
            { q: 'Im Juli fahren wir ___ Meer.', o: ['ans', 'nach', 'im'], why: 'To the sea: *an das → ans Meer*.' },
            { q: 'Es ist spät. Ich gehe jetzt ___ Hause.', o: ['nach', 'zu', 'in'], why: 'On the way home: *nach Hause*.' },
            { q: 'Meine Schwester wohnt ___ der Türkei.', o: ['in', 'nach', 'zu'], why: '*Wo?* with a country with an article: *in der Türkei*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the preposition, or the preposition and article as one word.', items: [
            { q: 'Heute Abend gehen wir ___ Kino. (in + das)', a: ['ins'], why: '*in das → ins*' },
            { q: 'Ich muss noch ___ Post. (zu + die)', a: ['zur'], why: '*zu der → zur*. *Zu* takes the Dativ.' },
            { q: 'Morgen fährt Jonas ___ Hamburg.', a: ['nach'], why: 'A city: *nach Hamburg*.' },
            { q: 'Wir machen Urlaub ___ Bodensee. (an + dem)', a: ['am'], why: '*Wo?* at a lake: *an dem → am*.' },
            { q: 'Bist du heute Abend ___ Hause?', a: ['zu'], why: 'At home: *zu Hause*.' },
            { q: 'Fahrt ihr im Winter ___ die Berge?', a: ['in'], why: 'To the mountains: *in die Berge*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Where do you go?', pairs: [
            ['Ich möchte schwimmen.', 'Ich fahre ans Meer.'],
            ['Ich möchte Geld abheben.', 'Ich gehe zur Bank.'],
            ['Ich habe Zahnschmerzen.', 'Ich gehe zum Zahnarzt.'],
            ['Ich möchte einen Film sehen.', 'Ich gehe ins Kino.'],
            ['Ich bin müde und will schlafen.', 'Ich gehe nach Hause.'],
            ['Ich brauche frisches Obst und Gemüse.', 'Ich gehe auf den Markt.'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Schöner, am schönsten',
      about: 'Compare places, hotels and trips.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'To compare two things, add **-er** to the adjective and use **als**: *Der Zug ist schneller als der Bus.* For the most of all, use **am** + adjective + **-sten**: *Das Flugzeug ist am schnellsten.*\n\nMany short adjectives with *a*, *o* or *u* get an umlaut: *alt, älter, am ältesten*. After *-t*, *-d*, *-s*, *-ß* and *-z*, the superlative has an extra *e*: *am ältesten, am heißesten*.' },
          { t: 'table', caption: 'Comparing', explain: ['head'], quiz: true, head: ['Adjective', 'Comparative', 'Superlative'], rows: [
            ['schön', 'schöner', 'am schönsten'],
            ['billig', 'billiger', 'am billigsten'],
            ['alt', 'älter', 'am ältesten'],
            ['groß', 'größer', 'am größten'],
            ['warm', 'wärmer', 'am wärmsten'],
            ['teuer', 'teurer', 'am teuersten'],
            ['hoch', 'höher', 'am höchsten'],
            ['gut', 'besser', 'am besten'],
            ['viel', 'mehr', 'am meisten'],
            ['gern', 'lieber', 'am liebsten'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Das Hotel am Strand ist **teurer als** das Hotel in der Stadt.', n: '*teuer* loses an *e*: *teurer*.' },
            { s: 'Im August ist es hier **am wärmsten**.', n: 'Superlative: *am* + *-sten*.' },
            { s: 'Ich fahre **lieber** mit dem Zug als mit dem Auto.', n: '*gern, lieber, am liebsten*' },
            { s: 'Der Bus ist **so** teuer **wie** der Zug.', n: 'Two things are the same: *so … wie*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Different: comparative + **als**. The same: **so** + adjective + **wie**. *Mein Koffer ist schwerer als deiner. Mein Koffer ist so schwer wie deiner.*' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the comparative or the superlative.', items: [
            { q: 'Der Zug ist ___ als der Bus. (schnell)', a: ['schneller'], why: '*schnell + er = schneller*' },
            { q: 'Im Juli ist es in Rom ___ als in Oslo. (warm)', a: ['wärmer'], why: 'Short adjective with *a*: *warm, wärmer*.' },
            { q: 'Das Hotel am Strand ist ___ als das Hotel in der Stadt. (teuer)', a: ['teurer'], why: '*teuer* loses its second *e*: *teurer*.' },
            { q: 'Die Zugspitze ist ___ als der Brocken. (hoch)', a: ['höher'], why: '*hoch* is irregular: *höher*.' },
            { q: 'Von allen Jahreszeiten mag ich den Herbst am ___. (gern)', a: ['liebsten'], why: '*gern, lieber, am liebsten*' },
            { q: 'Welches Hotel ist am ___? (billig)', a: ['billigsten'], why: 'Superlative: *am billigsten*.' },
            { q: 'Mein Opa ist drei Jahre ___ als meine Oma. (alt)', a: ['älter'], why: 'Short adjective with *a*: *alt, älter*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Berlin ist größer ___ Hamburg.', o: ['als', 'wie', 'so'], why: 'Different: comparative + *als*.' },
            { q: 'Mein Koffer ist so schwer ___ deiner.', o: ['wie', 'als', 'dann'], why: 'The same: *so … wie*.' },
            { q: 'Das Essen hier ist gut, aber im Restaurant am Markt ist es ___.', o: ['besser', 'guter', 'mehr gut'], why: '*gut* is irregular: *gut, besser, am besten*.' },
            { q: 'Welche Jahreszeit magst du am ___?', o: ['liebsten', 'lieber', 'gernsten'], why: 'After *am*: the superlative, *am liebsten*.' },
            { q: 'Im Dezember ist es kalt, aber im Januar ist es oft noch ___.', o: ['kälter', 'kalter', 'kältest'], why: '*kalt, kälter, am kältesten*. The comparative has an umlaut.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Der Zug ist schneller als der Bus.', why: 'Comparative, then *als* and the second thing.' },
            { a: 'Welche Stadt findest du am schönsten?', why: 'Question word, verb, subject; the superlative at the end.' },
            { a: 'Mein Bruder ist so groß wie ich.', why: '*so* + adjective + *wie*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Weather and the station',
      about: 'Talk about the weather and buy a train ticket.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'Weather sentences often start with *es*: *Es regnet. Es ist kalt.* The seasons are *der Frühling, der Sommer, der Herbst* and *der Winter*. They are all masculine, so you say *im Sommer* (in summer).' },
          { t: 'table', caption: 'The weather', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['Die Sonne scheint.', 'It is sunny.'],
            ['Es regnet.', 'It is raining.'],
            ['Es schneit.', 'It is snowing.'],
            ['Es ist windig.', 'It is windy.'],
            ['Es ist bewölkt.', 'It is cloudy.'],
            ['Es ist neblig.', 'It is foggy.'],
            ['Es gibt ein Gewitter.', 'There is a thunderstorm.'],
            ['Es sind 25 Grad.', 'It is 25 degrees.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What is the weather? Give the right advice.', pairs: [
            ['Es regnet.', 'Nimm einen Regenschirm mit!'],
            ['Es schneit.', 'Zieh warme Stiefel an!'],
            ['Es ist windig.', 'Halt deinen Hut fest!'],
            ['Es ist neblig.', 'Fahr langsam, man sieht fast nichts!'],
            ['Die Sonne scheint.', 'Vergiss deine Sonnenbrille nicht!'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Nimm einen Schirm mit, es ___. (regnen)', a: ['regnet'], why: '*es regnet*' },
            { q: 'Heute sind es nur zwei ___. Zieh eine warme Jacke an!', a: ['Grad'], why: 'Temperature: *zwei Grad*. *Grad* has no plural ending.' },
            { q: 'Nach dem Winter kommt der ___.', a: ['Frühling'], why: 'The seasons: *Frühling, Sommer, Herbst, Winter*.' },
            { q: 'Es ___ und die Kinder bauen einen Schneemann. (schneien)', a: ['schneit'], why: '*es schneit*' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'At the ticket counter', lines: [
            { who: 'Mitarbeiterin', s: 'Guten Tag. Was kann ich für Sie tun?' },
            { who: 'Herr Rossi', s: 'Ich brauche eine Fahrkarte nach Leipzig, bitte. Für morgen früh.' },
            { who: 'Mitarbeiterin', s: 'Einfach oder hin und zurück?' },
            { who: 'Herr Rossi', s: 'Hin und zurück, bitte. Ich komme am Sonntag zurück.' },
            { who: 'Mitarbeiterin', s: 'Der Zug fährt um 8:12 Uhr von Gleis 4 ab. Sie müssen einmal umsteigen.' },
            { who: 'Herr Rossi', s: 'Und wann kommt der Zug in Leipzig an?' },
            { who: 'Mitarbeiterin', s: 'Um 11:05 Uhr. Die Fahrkarte kostet 74 Euro.' },
            { who: 'Herr Rossi', s: 'Gut. Kann ich mit Karte zahlen?' },
            { who: 'Mitarbeiterin', s: 'Ja, natürlich.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Useful words at the station: *die Abfahrt* (departure), *die Ankunft* (arrival), *das Gleis* (platform), *umsteigen* (to change trains) and *die Verspätung* (delay). Many people in Germany buy their tickets online or at a ticket machine (*der Fahrkartenautomat*).' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'At the station. Choose the right word.', items: [
            { q: 'Ich fahre morgen und komme am Sonntag zurück. Ich brauche eine Fahrkarte ___.', o: ['hin und zurück', 'einfach', 'mit Gleis'], why: 'There and back: *hin und zurück*.' },
            { q: 'Es gibt keinen direkten Zug. Sie müssen in Kassel ___.', o: ['umsteigen', 'einsteigen', 'ankommen'], why: 'To change trains: *umsteigen*.' },
            { q: 'Der Zug kommt nicht pünktlich. Er hat 20 Minuten ___.', o: ['Verspätung', 'Abfahrt', 'Ankunft'], why: 'A train that is late has *Verspätung*.' },
            { q: 'Der Zug nach Bremen fährt von ___ 7 ab.', o: ['Gleis', 'Platz', 'Bahnhof'], why: 'Trains leave from a platform: *von Gleis 7*.' },
            { q: 'Wann ___ der Zug in Dresden an?', o: ['kommt', 'fährt', 'steigt'], why: 'Arrival: *ankommen*. *Wann kommt der Zug an?*' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Reading: a postcard and a forecast',
      about: 'Read a holiday postcard and a weather forecast.',
      art: 'croissant',
      spreads: [
        [
          { t: 'reading', title: 'Eine Postkarte von der Ostsee', md: 'Liebe Oma,\n\nviele Grüße aus Warnemünde! Wir sind schon seit fünf Tagen hier an der Ostsee. Das Hotel ist kleiner als im letzten Jahr, aber das Zimmer ist schöner und wir sehen das Meer. Am Montag und am Dienstag hat die Sonne geschienen und es war 26 Grad warm. Wir waren jeden Tag am Strand. Gestern hat es den ganzen Tag geregnet, deshalb sind wir ins Museum gegangen. Morgen fahren wir mit dem Schiff nach Dänemark. Am Samstag fahren wir mit dem Zug nach Hause.\n\nViele Grüße\ndeine Mira und Leon' },
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Mira und Leon sind seit einer Woche an der Ostsee.', a: 'f', why: 'They have been there for five days: *seit fünf Tagen*.' },
            { q: 'Das Hotel ist größer als im letzten Jahr.', a: 'f', why: '*Das Hotel ist kleiner als im letzten Jahr.*' },
            { q: 'Vom Zimmer aus sieht man das Meer.', a: 't', why: '*… und wir sehen das Meer.*' },
            { q: 'Gestern waren sie im Museum.', a: 't', why: 'It rained, so they went to the museum.' },
            { q: 'Oma war auch schon einmal in Warnemünde.', a: 'ng', why: 'The postcard does not say this.' },
            { q: 'Sie fahren mit dem Auto nach Hause.', a: 'f', why: 'They go home by train: *mit dem Zug*.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Der Wetterbericht', md: 'Das Wetter für morgen, Freitag: Im Norden ist es bewölkt und windig. An der Küste regnet es am Vormittag, am Nachmittag scheint ab und zu die Sonne. Die Temperaturen liegen bei 18 bis 20 Grad.\n\nIm Süden bleibt es trocken und sonnig. Mit bis zu 28 Grad ist es dort am wärmsten. Am Wochenende wird es überall wärmer.' },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Wie ist das Wetter morgen im Süden?', o: ['Trocken und sonnig.', 'Bewölkt und windig.', 'Es regnet am Vormittag.'], why: '*Im Süden bleibt es trocken und sonnig.*' },
            { q: 'Wo ist es morgen am wärmsten?', o: ['Im Süden.', 'An der Küste.', 'Im Norden.'], why: '*Mit bis zu 28 Grad ist es dort am wärmsten*: in the south.' },
            { q: 'Wie wird das Wetter am Wochenende?', o: ['Überall wärmer.', 'Überall kälter.', 'Im Norden schneit es.'], why: '*Am Wochenende wird es überall wärmer.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the adjective in the comparative or superlative.', items: [
            { s: 'Das Hotel ist [kleiner] als im letzten Jahr.', why: '*klein, kleiner*: a comparative with *als*.' },
            { s: 'Aber das Zimmer ist [schöner] und wir sehen das Meer.', why: '*schön, schöner*' },
            { s: 'Mit bis zu 28 Grad ist es dort am [wärmsten].', why: '*am wärmsten*: the superlative.' },
            { s: 'Am Wochenende wird es überall [wärmer].', why: '*warm, wärmer*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Wir fliegen im Mai ___ Italien.', o: ['nach', 'in', 'zu'], why: 'A country without an article: *nach*.' },
      { q: 'Ich gehe heute Nachmittag ___ Ärztin.', o: ['zur', 'zum', 'nach'], why: '*die Ärztin → zu der → zur*.' },
      { q: 'Am Wochenende sind wir ___ Hause.', o: ['zu', 'nach', 'in'], why: 'At home: *zu Hause*.' },
      { q: 'Meine Wohnung ist kleiner ___ deine.', o: ['als', 'wie', 'so'], why: 'Comparative + *als*.' },
      { q: 'Wer kocht in deiner Familie am ___?', o: ['besten', 'besser', 'gutesten'], why: '*gut, besser, am besten*' },
      { q: 'Der Zug hat 15 Minuten ___.', o: ['Verspätung', 'Abfahrt', 'Gleis'], why: 'Late: *Verspätung haben*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Im Sommer fahren wir ___ Meer. (an + das)', a: ['ans'], why: '*an das → ans*' },
      { q: 'Heute ist es ___ als gestern. (kalt)', a: ['kälter'], why: '*kalt, kälter*, with an umlaut.' },
      { q: 'Ich fahre ___ mit dem Fahrrad als mit dem Bus. (gern)', a: ['lieber'], why: '*gern, lieber, am liebsten*' },
      { q: 'Nimm eine Jacke mit, es ist sehr ___. (Wind)', a: ['windig'], why: '*der Wind → windig*' },
      { q: 'In Fulda müssen Sie ___. Dort nehmen Sie den Zug nach Würzburg.', a: ['umsteigen'], why: 'To change trains: *umsteigen*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Wann kommt der Zug in Leipzig an?', why: 'Question word, verb, subject; the prefix *an* at the end.' },
      { a: 'Das Hotel ist so teuer wie die Wohnung.', why: '*so* + adjective + *wie*.' },
      { a: 'Fährst du morgen nach Hamburg?', why: 'In a yes/no question, the verb comes first.' },
    ] },
  ],
};
