// German B2 for travel, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Writing about travel',
  goal: 'Write vivid reviews and travel pieces.',
  art: 'mug',
  tags: { skills: ['writing', 'vocabulary', 'grammar', 'reading'], topics: ['descriptive-language', 'senses', 'adjective-endings', 'als-ob', 'review-structure', 'travel-writing'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Colours, sounds and smells',
      about: 'Descriptive language: vivid adjectives, comparisons and the five senses.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'Good travel writing **shows** a place instead of just saying it was nice. It uses the senses: what you see, hear, smell, taste and feel. German has fixed patterns for this: *es duftet nach*, *es riecht nach*, *es schmeckt nach* (all + Dativ), *etwas fühlt sich … an*, *etwas wirkt …*.' },
          { t: 'table', caption: 'Writing with the senses', explain: ['head', 'col0'], head: ['Sense', 'Example'], rows: [
            ['sight', 'Die Fassaden leuchten in der Abendsonne.'],
            ['sound', 'Aus den offenen Fenstern hört man das Klappern von Geschirr.'],
            ['smell', 'In der Gasse duftet es nach frischem Brot.'],
            ['taste', 'Der Kaffee schmeckt leicht nach Schokolade.'],
            ['touch', 'Das Kopfsteinpflaster fühlt sich unter den Füßen warm an.'],
          ] },
        ],
        [
          { t: 'text', md: 'Replace plain adjectives with precise ones, and add **comparisons**: with *wie* (*eng wie ein Labyrinth*) or with *als ob* + **Konjunktiv II** for an image that is not real: *Es ist, **als ob** die Zeit stehen geblieben **wäre**.*' },
          { t: 'table', caption: 'From plain to vivid', explain: ['head'], head: ['Plain', 'Vivid'], rows: [
            ['schön', 'malerisch, atemberaubend'],
            ['alt und eng', 'verwinkelt'],
            ['voll', 'belebt, quirlig'],
            ['ruhig', 'verschlafen, idyllisch'],
          ] },
          { t: 'tip', art: 'owl', md: 'After *nach* the adjective is in the Dativ. Without an article it takes the ending the article would have: **-em** for masculine and neuter, **-er** for feminine, **-en** for plural. *nach frischem Brot*, *nach heißer Schokolade*, *nach reifen Beeren*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each adjective with its meaning.', pairs: [
            ['verwinkelt', 'mit vielen engen Ecken und Kurven'],
            ['belebt', 'voller Menschen und Bewegung'],
            ['verschlafen', 'sehr ruhig, fast ohne Leben'],
            ['atemberaubend', 'so schön, dass man staunt'],
            ['malerisch', 'schön wie auf einem Bild'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence is the most vivid?', items: [
            { q: '', o: ['Aus den offenen Fenstern hört man das Klappern von Geschirr.', 'Es war schön dort.', 'Die Stadt war gut.'], why: 'A concrete sound puts the reader in the scene.' },
            { q: '', o: ['Die verwinkelten Gassen sind eng wie ein Labyrinth.', 'Die Straßen sind klein.', 'Es gibt viele Straßen.'], why: 'A precise adjective (*verwinkelt*) and a comparison with *wie* create a picture.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the three verbs of the senses.', items: [
            { s: 'Auf dem Markt [duftet] es nach Zimt, man [hört] die Rufe der Händler, und alles [schmeckt] nach Sommer.', why: '*duften* (smell), *hören* (sound) and *schmecken* (taste) bring three senses into one sentence.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the adjective with the right ending, or the verb.', items: [
            { q: 'In der Gasse duftet es nach ___ Brot. (frisch)', a: ['frischem'], why: '*nach* + Dativ, neuter, no article: *frischem*.' },
            { q: 'Am Hafen riecht es nach ___ Fisch und Salz. (gegrillt)', a: ['gegrilltem'], why: '*nach* + Dativ, masculine, no article: *gegrilltem*.' },
            { q: 'Der Wein schmeckt nach ___ Beeren. (reif)', a: ['reifen'], why: 'Dativ plural, no article: *reifen*.' },
            { q: 'Wir saßen in einem ___ Innenhof. (verschlafen)', a: ['verschlafenen'], why: '*in* + Dativ, after *einem*: *-en*.' },
            { q: 'Die Stadt wirkt, als ob die Zeit stehen geblieben ___. (sein, Konjunktiv II)', a: ['wäre', 'waere'], why: '*als ob* + Konjunktiv II for an image that is not real: *wäre*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Structuring a review or travel article',
      about: 'A title, an opening that draws readers in, a clear middle and a useful conclusion.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'A review or travel article usually has four parts. The **title** is short and makes readers curious. The **opening** starts with a scene, a question or a surprising detail, not with *Ich war im Mai in …*. The **main part** gives one topic per paragraph: getting there, where to stay, food, what to see. The **conclusion** gives an overall judgement and says who the place is for.' },
          { t: 'table', caption: 'Phrases for each part', explain: ['head', 'col0'], head: ['Part', 'Typical phrases'], rows: [
            ['the title', 'Drei Tage zwischen Bergen und Seen'],
            ['the opening', 'Es ist sieben Uhr morgens, und … / Wer hätte gedacht, dass …'],
            ['the main part', 'Ein Höhepunkt war … / Was mir besonders gefallen hat, … / Weniger überzeugt hat mich …'],
            ['the conclusion', 'Alles in allem … / Mein Fazit: … / Wer …, sollte …'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: '**Wer** Ruhe sucht, **ist** hier genau richtig.', n: 'A *wer* clause speaks to a type of reader. Its verb goes to the end, and the main clause starts with its verb.' },
            { s: '**Einziger Wermutstropfen:** Das Frühstück war etwas teuer.', n: '*Wermutstropfen*: the one small disadvantage of something good. A colon keeps it short.' },
            { s: 'Ein Abstecher ins Nachbardorf **lohnt sich**.', n: '*der Abstecher*: a short trip away from your main route.' },
            { s: 'Das Preis-Leistungs-Verhältnis **stimmt**.', n: 'Common in reviews: you get good value for the price.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Online reviews can be more personal and direct; magazine articles are more polished and use more imagery. In both, give practical information in the main part and keep your judgement for the conclusion.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each part with a sentence from it.', pairs: [
            ['die Überschrift', 'Ein Wochenende am stillen See'],
            ['der Einstieg', 'Es ist kurz nach sechs, und über dem Wasser liegt noch Nebel.'],
            ['der Hauptteil', 'Ein Höhepunkt war die Wanderung zur alten Mühle.'],
            ['das Fazit', 'Alles in allem ein Ort, an den ich gern zurückkehre.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '___ Ruhe sucht, ist in diesem Hotel genau richtig.', o: ['Wer', 'Wenn', 'Der'], why: '*wer* means "anyone who". *Wenn* would need a subject: *Wenn man Ruhe sucht*.' },
            { q: 'Einziger ___: Das WLAN funktionierte nur in der Lobby.', o: ['Wermutstropfen', 'Höhepunkt', 'Einstieg'], why: 'A small disadvantage: *Wermutstropfen*.' },
            { q: 'Welcher Satz passt am besten als Einstieg?', o: ['Es ist sieben Uhr morgens, und der Markt erwacht gerade.', 'Alles in allem war es eine schöne Reise.', 'Das Hotel hat 40 Zimmer.'], why: 'A scene in the present draws the reader in. *Alles in allem* belongs to the conclusion.' },
            { q: 'Ein Abstecher in das Nachbardorf ___ sich.', o: ['lohnt', 'gibt', 'macht'], why: '*sich lohnen*: to be worth it.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ in allem war es ein gelungenes Wochenende.', a: ['Alles'], why: 'The fixed phrase *alles in allem* introduces the conclusion.' },
            { q: 'Ein ___ der Reise war die Bootsfahrt bei Sonnenuntergang.', a: ['Höhepunkt', 'Hoehepunkt', 'Highlight'], why: '*der Höhepunkt*: the best moment. Many people also say *das Highlight*.' },
            { q: 'Wer früh aufsteht, ___ den Gipfel fast für sich allein. (haben)', a: ['hat'], why: 'After the *wer* clause, the main clause starts with its verb: *hat*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Wer gern wandert, sollte im Herbst kommen.', why: 'The *wer* clause comes first, then the main clause starts with *sollte*.' },
            { a: 'Was mir besonders gefallen hat, war das Frühstück.', why: 'The *was* clause is the subject, so *war* follows it directly.' },
            { a: 'Ein Abstecher an den See lohnt sich.', why: 'The subject *Ein Abstecher an den See* comes first, then *lohnt sich*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A travel article and its style',
      about: 'Read a travel article and see how it works.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Die Ostsee im Januar: ein Strand für sich allein', md: 'Es ist kurz nach acht, und der Strand gehört den Möwen. Der Wind riecht nach Salz und nassem Holz, über dem Wasser hängt ein milchiger Nebel, und das Meer rauscht so gleichmäßig, als würde es tief atmen. Wo im August Strandkorb an Strandkorb steht, ziehen jetzt nur ein paar Spaziergänger mit Hunden ihre Spuren durch den Sand.\n\nWer im Winter an die Ostsee fährt, braucht drei Dinge: eine warme Jacke, gute Schuhe und keine großen Pläne. Die meisten Eisdielen haben geschlossen, die Promenade wirkt verschlafen, fast ein wenig verlassen. Doch genau darin liegt der Reiz. Man hört plötzlich Dinge, die im Sommer untergehen: das Knirschen der Muscheln unter den Sohlen, das Klappern der Leinen an den Fahnenmasten.\n\nGegen Mittag treibt mich die Kälte in eine kleine Fischräucherei am Hafen. Drinnen ist es eng und warm, die Fenster sind beschlagen, und auf dem Tresen liegt goldbrauner Räucherfisch, der noch nach Buchenholz duftet. Der Besitzer, ein schweigsamer Mann mit roten Händen, stellt mir ungefragt einen Becher Tee hin. Mehr Gastfreundschaft braucht es nicht.\n\nAm Nachmittag wird das Licht weich und silbrig, bevor die Sonne schon gegen vier hinter den Dünen verschwindet. Einziger Wermutstropfen: Nicht jedes Café hat im Winter geöffnet, und wer abends essen gehen möchte, sollte vorher anrufen.\n\nMein Fazit: Die Ostsee im Januar ist nichts für Menschen, die ein volles Programm brauchen. Für alle anderen ist sie ein Geschenk aus Wind, Weite und Stille.' },
        ],
        [
          { t: 'text', md: 'Notes on the style of the article.' },
          { t: 'examples', items: [
            { s: 'Es ist kurz nach acht, und der Strand gehört den Möwen.', n: 'The opening puts the reader straight into a scene, in the present tense.' },
            { s: 'Der Wind riecht nach Salz und nassem Holz …', n: 'The senses: a smell makes the place real.' },
            { s: '… als würde es tief atmen.', n: 'A comparison with *als* + Konjunktiv II: the sea is described like a living thing.' },
            { s: 'Wer im Winter an die Ostsee fährt, braucht drei Dinge …', n: 'A *wer* clause speaks to the reader and gives practical advice.' },
            { s: 'Einziger Wermutstropfen: …', n: 'One short phrase with a colon names the only disadvantage.' },
            { s: 'Mein Fazit: …', n: 'The end gives a judgement and says who the place is for.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Im August ist der Strand fast leer.', a: 'f', why: '*Wo im August Strandkorb an Strandkorb steht …*: in summer it is full.' },
            { q: 'Im Winter haben die meisten Eisdielen geschlossen.', a: 't', why: '*Die meisten Eisdielen haben geschlossen.*' },
            { q: 'In der Räucherei ist es kalt und leer.', a: 'f', why: '*Drinnen ist es eng und warm.*' },
            { q: 'Der Besitzer der Räucherei redet sehr viel.', a: 'f', why: 'He is *ein schweigsamer Mann*: he says very little.' },
            { q: 'Wer abends essen gehen möchte, sollte vorher anrufen.', a: 't', why: '*… wer abends essen gehen möchte, sollte vorher anrufen.*' },
            { q: 'Die Unterkunft war günstig.', a: 'ng', why: 'The article does not mention where the writer stayed.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the three nouns for sounds.', items: [
            { s: 'Man hört das [Knirschen] der Muscheln, das [Rauschen] des Meeres und das [Klappern] der Leinen.', why: '*das Knirschen*, *das Rauschen* and *das Klappern* are verbs used as nouns, all for sounds.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the style of the article.', items: [
            { q: 'Welche Funktion hat der erste Satz?', o: ['Er führt direkt in eine Szene.', 'Er fasst den ganzen Text zusammen.', 'Er nennt praktische Informationen.'], why: 'The article starts with a moment on the beach, not with facts.' },
            { q: '„… als würde es tief atmen.“ Was macht der Text hier?', o: ['Er vergleicht das Meer mit einem Lebewesen.', 'Er gibt einen praktischen Tipp.', 'Er kritisiert das Wetter.'], why: 'Breathing is something living things do: the sea becomes almost a person.' },
            { q: 'Für wen ist die Ostsee im Januar laut Fazit nichts?', o: ['für Menschen, die ein volles Programm brauchen', 'für Menschen, die Ruhe suchen', 'für Spaziergänger mit Hunden'], why: '*… nichts für Menschen, die ein volles Programm brauchen.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'In der Bäckerei duftet es ___ frischem Brot.', o: ['nach', 'von', 'mit'], why: '*duften nach* + Dativ.' },
      { q: '___ früh kommt, hat den Strand für sich allein.', o: ['Wer', 'Wenn', 'Der'], why: '*wer*: anyone who.' },
      { q: 'Das Pflaster fühlt sich warm ___.', o: ['an', 'aus', 'auf'], why: '*sich … anfühlen*.' },
      { q: 'Einziger ___: Das Frühstück war teuer.', o: ['Wermutstropfen', 'Höhepunkt', 'Einstieg'], why: 'The one disadvantage: *Wermutstropfen*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Am Hafen riecht es nach ___ Fisch. (geräuchert)', a: ['geräuchertem', 'geraeuchertem'], why: '*nach* + Dativ, masculine, no article: *-em*.' },
      { q: 'Es ist, als ob die Zeit stehen geblieben ___. (sein, Konjunktiv II)', a: ['wäre', 'waere'], why: '*als ob* + Konjunktiv II.' },
      { q: '___ in allem war es eine gelungene Reise.', a: ['Alles'], why: '*alles in allem*.' },
      { q: 'Wir übernachteten in einem ___ Dorf am See. (verschlafen)', a: ['verschlafenen'], why: 'After *einem*: *-en*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match each adjective with its meaning.', pairs: [
      ['verwinkelt', 'mit vielen engen Ecken'],
      ['belebt', 'voller Menschen'],
      ['malerisch', 'schön wie auf einem Bild'],
      ['atemberaubend', 'so schön, dass man staunt'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Wer Ruhe sucht, sollte im Winter kommen.', why: 'After the *wer* clause the main clause starts with *sollte*.' },
      { a: 'Ein Abstecher ins Dorf lohnt sich.', why: 'Subject first, then *lohnt sich*.' },
    ] },
  ],
};
