// German B1 for travel, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Culture and events',
  goal: 'Find out about museums, concerts and festivals and give your opinion.',
  art: 'cat',
  tags: { skills: ['vocabulary', 'speaking', 'reading', 'grammar'], topics: ['events', 'tickets', 'opinions', 'gefallen-dativ', 'obwohl'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Events and tickets',
      about: 'Understand event information and buy tickets.',
      art: 'parrot',
      spreads: [
        [
          { t: 'table', caption: 'Words for events', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['die Ausstellung', 'an exhibition'],
            ['die Führung', 'a guided tour'],
            ['die Vorstellung', 'a performance or a show, in the theatre or cinema'],
            ['der Eintritt', 'entry, or the price to get in'],
            ['ermäßigt', 'reduced, for example for students'],
            ['die Abendkasse', 'the ticket office on the evening of the event'],
            ['ausverkauft', 'sold out'],
            ['der Einlass', 'the time when the doors open'],
          ] },
          { t: 'tip', art: 'owl', md: 'Many museums in Germany are closed on Mondays. Students, children and older people often pay less. Ask *Gibt es eine Ermäßigung?*' },
        ],
        [
          { t: 'text', md: 'Event information often gives two times: **Einlass**, when the doors open, and **Beginn**, when it starts. Use *um* for a clock time, *ab* for a starting point and *von … bis* for a period.' },
          { t: 'examples', items: [
            { s: 'Einlass **ab** 19 Uhr, Beginn **um** 20 Uhr.', n: '*ab*: from this time on. *um*: at exactly this time.' },
            { s: 'Die Ausstellung **läuft** noch bis Ende August.', n: '*laufen*: to be on, for exhibitions and films.' },
            { s: 'Das Festival **findet** vom 3. bis zum 5. Juli **statt**.', n: '*stattfinden*: to take place. It is separable: *findet … statt*.' },
            { s: 'Das Konzert ist **im** Stadtpark, bei Regen **in der** Stadthalle.', n: 'Where something is: *in* + dative.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'At the box office', lines: [
            { who: 'Diego', s: 'Guten Abend. Gibt es für heute Abend noch Karten für das Konzert?' },
            { who: 'Kassiererin', s: 'Ja, aber nur noch wenige. Im Parkett ist alles ausverkauft, auf dem Balkon gibt es noch Plätze.' },
            { who: 'Diego', s: 'Was kosten die Karten auf dem Balkon?' },
            { who: 'Kassiererin', s: '28 Euro. Für Studierende gibt es eine Ermäßigung, dann sind es 18 Euro.' },
            { who: 'Diego', s: 'Ich bin Student, hier ist mein Ausweis. Zwei Karten, bitte: eine ermäßigte und eine normale.' },
            { who: 'Kassiererin', s: 'Das macht 46 Euro. Reihe 3, Plätze 12 und 13.' },
            { who: 'Diego', s: 'Wann ist Einlass?' },
            { who: 'Kassiererin', s: 'Ab halb acht. Das Konzert beginnt um acht und dauert mit Pause ungefähr zwei Stunden.' },
            { who: 'Diego', s: 'Kann ich meine Jacke irgendwo abgeben?' },
            { who: 'Kassiererin', s: 'Ja, die Garderobe ist gleich links.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Im Parkett gibt es noch Plätze.', a: 'f', why: '*Im Parkett ist alles ausverkauft.*' },
            { q: 'Diego kauft zwei ermäßigte Karten.', a: 'f', why: 'One reduced ticket and one normal ticket: 18 + 28 = 46 Euro.' },
            { q: 'Die Türen öffnen um 19:30 Uhr.', a: 't', why: '*Einlass ab halb acht.*' },
            { q: 'Das Konzert hat eine Pause.', a: 't', why: '*… dauert mit Pause ungefähr zwei Stunden.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Es gibt keine Karten mehr. Das Konzert ist ___.', o: ['ausverkauft', 'ermäßigt', 'geöffnet'], why: '*ausverkauft*: all tickets are sold.' },
            { q: 'Online gibt es keine Karten mehr, aber an der ___ vielleicht noch.', o: ['Abendkasse', 'Garderobe', 'Führung'], why: 'At the *Abendkasse* you buy tickets on the evening itself.' },
            { q: 'Die Ausstellung ___ noch bis Ende August.', o: ['läuft', 'fährt', 'spielt'], why: 'An exhibition *läuft*: it is on.' },
            { q: 'Das Konzert beginnt ___ 20 Uhr.', o: ['um', 'am', 'im'], why: 'A clock time: *um*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Das Konzert ___ im Stadtpark statt. (stattfinden)', a: ['findet'], why: 'Separable verb: *findet* in second place, *statt* at the end.' },
            { q: 'Die Führung fängt um 11 Uhr ___. (anfangen)', a: ['an'], why: '*anfangen*: *fängt … an*.' },
            { q: 'Sie können Ihre Jacke an der Garderobe ___. (abgeben)', a: ['abgeben'], why: 'After the modal verb *können*, the infinitive goes to the end.' },
            { q: 'Gibt es eine ___ für Studierende? (lower price)', a: ['Ermäßigung', 'Ermaessigung'], why: '*die Ermäßigung*: a reduced price.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Giving your opinion',
      about: 'Say what you liked and did not like about art, music and films.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'To give an opinion, start with *Ich finde, dass …*, *Meiner Meinung nach …* or *Mir hat … gefallen*. After *Meiner Meinung nach*, the verb comes next, in second place.' },
          { t: 'examples', items: [
            { s: 'Ich finde, dass der Film zu lang **war**.', n: 'After *dass*, the verb goes to the end.' },
            { s: 'Meiner Meinung nach **war** die Musik das Beste.', n: 'The verb is in second place.' },
            { s: '**Mir** hat die Ausstellung sehr gut **gefallen**.', n: '*gefallen*: the person is in the dative, *mir*. The thing you like is the subject.' },
            { s: 'Die Bilder **haben** mir nicht so gut gefallen.', n: 'The subject is plural, *die Bilder*: *haben*.' },
            { s: 'Das war nicht **mein Fall**.', n: 'An informal way to say you did not like it.' },
            { s: '**Obwohl** die Karten teuer **waren**, hat sich das Konzert gelohnt.', n: '*obwohl*: a contrast. The verb goes to the end; then the main clause starts with its verb.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Words for opinions', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['spannend', 'exciting, you want to know what happens'],
            ['langweilig', 'boring'],
            ['beeindruckend', 'impressive'],
            ['enttäuschend', 'disappointing'],
            ['gelungen', 'well done, a success'],
            ['kitschig', 'too sweet and sentimental'],
            ['übertrieben', 'too much, not realistic'],
            ['berührend', 'moving, it touches your feelings'],
          ] },
          { t: 'tip', art: 'owl', md: 'For opinions about the past, people often use *fand*: *Ich fand den Film gut.* To agree, say *Da hast du recht* or *Das stimmt*. To disagree politely, say *Echt? Ich finde …* or *Das sehe ich ein bisschen anders.*' },
        ],
        [
          { t: 'dialogue', title: 'After the film', lines: [
            { who: 'Ben', s: 'Und, wie fandest du den Film?' },
            { who: 'Nadia', s: 'Ehrlich gesagt war er nicht mein Fall. Die Geschichte war spannend, aber das Ende fand ich total kitschig.' },
            { who: 'Ben', s: 'Echt? Mir hat das Ende gut gefallen. Ich finde, dass es gut zur Geschichte passt.' },
            { who: 'Nadia', s: 'Na ja. Und die Musik war meiner Meinung nach viel zu laut.' },
            { who: 'Ben', s: 'Da hast du recht. Aber die Schauspieler waren beeindruckend, oder?' },
            { who: 'Nadia', s: 'Ja, das stimmt. Vor allem die Hauptdarstellerin.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Nadia hat der Film sehr gut gefallen.', a: 'f', why: '*Ehrlich gesagt war er nicht mein Fall.*' },
            { q: 'Ben findet das Ende gut.', a: 't', why: '*Mir hat das Ende gut gefallen.*' },
            { q: 'Beide finden die Musik zu laut.', a: 't', why: 'Nadia says it was too loud, and Ben agrees: *Da hast du recht.*' },
            { q: 'Nadia findet die Hauptdarstellerin schlecht.', a: 'f', why: 'She agrees the actors were impressive, *vor allem die Hauptdarstellerin*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the opinions.', items: [
            { a: 'Ich finde, dass die Musik zu laut war.', why: 'After *dass*, the verb *war* goes to the end.' },
            { a: 'Obwohl es regnete, war das Konzert super.', why: 'The *obwohl* clause comes first, so the main clause starts with the verb *war*.' },
            { a: 'Das sehe ich ein bisschen anders.', why: '*Das* comes first, so the verb *sehe* is second and *ich* follows.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word and the explanation.', pairs: [
            ['spannend', 'Man möchte wissen, wie es weitergeht.'],
            ['langweilig', 'Man schläft fast ein.'],
            ['kitschig', 'zu süß und zu romantisch'],
            ['beeindruckend', 'so gut, dass man staunt'],
            ['übertrieben', 'viel zu viel, nicht realistisch'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: events and reviews',
      about: 'Read an events listing and two different opinions about one exhibition.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'Was ist los am Wochenende?', md: '**Freitag, 20 Uhr: Jazz im Hof**\nDas Trio Lindgren spielt im Innenhof des Stadtmuseums. Eintritt 15 €, ermäßigt 10 €. Bei Regen im Saal.\n\n**Samstag, 10 bis 18 Uhr: „Licht und Wasser“**\nAusstellung mit Fotos aus fünfzig Jahren im Kunstverein. Führungen um 11 und 15 Uhr. Eintritt frei.\n\n**Sonntag, ab 15 Uhr: Sommerfest am See**\nMusik, Essen und Spiele für die ganze Familie. Um 22 Uhr Feuerwerk. Eintritt frei.' },
          { t: 'ex', kind: 'tf', h: 'Read the listing. True or false?', items: [
            { q: 'Das Jazzkonzert findet auf jeden Fall draußen statt.', a: 'f', why: '*Bei Regen im Saal*: if it rains, it is inside.' },
            { q: 'Für die Ausstellung muss man Eintritt zahlen.', a: 'f', why: '*Eintritt frei*: it costs nothing.' },
            { q: 'Das Feuerwerk ist am Sonntagabend.', a: 't', why: '*Um 22 Uhr Feuerwerk*, at the summer festival on Sunday.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Zwei Meinungen zu „Licht und Wasser“', md: '**Karin, 54:** Ich war am Samstag mit meiner Tochter in der Ausstellung und bin immer noch begeistert. Die Fotos sind einfach beeindruckend, vor allem die alten Bilder vom Hafen. Wir haben an der Führung um 11 Uhr teilgenommen. Die Leiterin hat viel über die Fotografin erzählt, das war sehr interessant. Obwohl es ziemlich voll war, konnten wir alles gut sehen. Ich kann die Ausstellung nur empfehlen!\n\n**Yusuf, 31:** Ehrlich gesagt war ich ein bisschen enttäuscht. Einige Fotos waren toll, aber viele sahen ähnlich aus: Wasser, Licht und wieder Wasser. Nach einer halben Stunde fand ich es langweilig. Außerdem war es so voll, dass ich manche Bilder kaum sehen konnte. Meiner Meinung nach waren es einfach zu viele Fotos. Aber weil der Eintritt frei ist, lohnt sich ein kurzer Besuch trotzdem.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the reviews. True, false or not given?', items: [
            { q: 'Karin war allein in der Ausstellung.', a: 'f', why: 'She went *mit meiner Tochter*.' },
            { q: 'Karin hat an einer Führung teilgenommen.', a: 't', why: '*Wir haben an der Führung um 11 Uhr teilgenommen.*' },
            { q: 'Yusuf fand alle Fotos langweilig.', a: 'f', why: '*Einige Fotos waren toll.*' },
            { q: 'Yusuf ist nach einer halben Stunde gegangen.', a: 'ng', why: 'He found it boring after half an hour, but he does not say when he left.' },
            { q: 'Yusuf findet, dass sich ein kurzer Besuch lohnt.', a: 't', why: '*… lohnt sich ein kurzer Besuch trotzdem.*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Who says it: Karin, Yusuf or both?', items: [
            { q: 'Wer findet, dass es zu viele Fotos waren?', o: ['Yusuf', 'Karin', 'beide'], why: '*Meiner Meinung nach waren es einfach zu viele Fotos.*' },
            { q: 'Wer hat etwas über die Fotografin gelernt?', o: ['Karin', 'Yusuf', 'beide'], why: 'At the guided tour, Karin heard a lot about the photographer.' },
            { q: 'Wer sagt, dass es in der Ausstellung voll war?', o: ['beide', 'Karin', 'Yusuf'], why: 'Karin: *ziemlich voll*. Yusuf: *so voll, dass …*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Es gibt keine Karten mehr, das Konzert ist ___.', o: ['ausverkauft', 'ermäßigt', 'geschlossen'], why: '*ausverkauft*: sold out.' },
      { q: '___ hat der Film sehr gut gefallen.', o: ['Mir', 'Ich', 'Mich'], why: '*gefallen* + dative: *mir*.' },
      { q: 'Meiner Meinung nach ___ die Musik zu laut.', o: ['war', 'waren', 'sein'], why: 'The verb comes second; *die Musik* is singular: *war*.' },
      { q: 'Die Führung ___ um 11 Uhr an.', o: ['fängt', 'beginnt', 'startet'], why: 'Only *anfangen* has the part *an*: *fängt … an*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Das Festival findet im Stadtpark ___. (stattfinden)', a: ['statt'], why: '*stattfinden*: *findet … statt*.' },
      { q: 'Gibt es eine ___ für Studierende? (lower price)', a: ['Ermäßigung', 'Ermaessigung'], why: '*die Ermäßigung*: a reduced price.' },
      { q: '___ die Karten teuer waren, hat sich das Konzert gelohnt. (although)', a: ['Obwohl'], why: '*obwohl* sends the verb to the end of its clause.' },
      { q: 'Ich finde, ___ das Ende kitschig war.', a: ['dass'], why: '*Ich finde, dass …*: the verb *war* is at the end.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word and the meaning.', pairs: [
      ['der Einlass', 'Die Türen öffnen.'],
      ['die Garderobe', 'Hier gibt man die Jacke ab.'],
      ['die Abendkasse', 'Hier kauft man Karten am Abend der Vorstellung.'],
      ['die Führung', 'Jemand zeigt und erklärt die Ausstellung.'],
    ] },
  ],
};
