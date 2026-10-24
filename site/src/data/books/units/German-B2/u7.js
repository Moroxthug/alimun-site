// German B2, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Culture and media',
  goal: 'Talk about books, films and media, give and justify your opinion, and join ideas elegantly.',
  art: 'parrot',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['two-part-connectors', 'participle-phrases', 'opinions', 'film-review'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Two-part connectors',
      about: 'Join two ideas with connectors that come in two parts.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'Some connectors have **two parts**. They link words, phrases or whole clauses and make the relation between the two ideas clear.' },
          { t: 'table', caption: 'Two-part connectors', explain: ['head', 'col1'], quiz: true, head: ['Connector', 'Meaning', 'Example'], rows: [
            ['sowohl … als auch', 'both … and', 'Sie liest sowohl Romane als auch Comics.'],
            ['nicht nur … sondern auch', 'not only … but also', 'Der Film ist nicht nur lustig, sondern auch klug.'],
            ['weder … noch', 'neither … nor', 'Ich habe weder das Buch gelesen noch den Film gesehen.'],
            ['entweder … oder', 'either … or', 'Wir gehen entweder ins Kino oder ins Theater.'],
            ['zwar … aber', 'it is true that …, but', 'Die Serie ist zwar lang, aber spannend.'],
          ] },
        ],
        [
          { t: 'text', md: '**Je … desto** (or *je … umso*) links two comparatives: the more …, the more …. The *je* clause is a subordinate clause, so its verb goes to the end. After *desto* comes the comparative, then the verb, then the subject.' },
          { t: 'examples', items: [
            { s: '**Je** länger ich das Buch **lese**, **desto** besser **gefällt** es mir.', n: '*Je* + comparative … verb at the end; *desto* + comparative + verb.' },
            { s: '**Je** mehr Serien es **gibt**, **umso** schwerer **ist** die Auswahl.', n: '*Umso* works like *desto*.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Weder … noch* already makes the sentence negative. Do not add *nicht* or *kein*: *Ich habe weder Zeit noch Geld.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Ich mag ___ Krimis noch Horrorfilme. Beides ist mir zu brutal.', o: ['weder', 'entweder', 'sowohl'], why: '*Noch* is the second part of *weder … noch*: not this and not that.' },
            { q: 'Der Roman ist ___ lang, aber man langweilt sich nie.', o: ['zwar', 'sowohl', 'weder'], why: '*Zwar … aber*: a fact, then a contrast.' },
            { q: 'Du kannst den Film entweder im Kino ___ online sehen.', o: ['oder', 'noch', 'als auch'], why: '*Entweder … oder*: one of two choices.' },
            { q: 'Sie arbeitet sowohl als Journalistin ___ als Übersetzerin.', o: ['als auch', 'sondern auch', 'noch'], why: '*Sowohl … als auch*: both.' },
            { q: '___ öfter ich den Film sehe, desto mehr Details entdecke ich.', o: ['Je', 'Desto', 'Sowohl'], why: '*Je* + comparative starts the first clause; *desto* starts the second.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the second part of the connector.', items: [
            { q: 'Das Buch ist nicht nur spannend, ___ auch gut geschrieben.', a: ['sondern'], why: '*Nicht nur … sondern auch*.' },
            { q: 'Je später es wird, ___ müder werde ich.', a: ['desto', 'umso'], why: '*Je … desto* or *je … umso*.' },
            { q: 'Er hat weder angerufen ___ eine Nachricht geschrieben.', a: ['noch'], why: '*Weder … noch*: he did neither.' },
            { q: 'Ich lese sowohl Zeitung ___ Nachrichten im Internet.', a: ['als auch'], why: '*Sowohl … als auch*: both.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Je mehr ich lese, desto besser schreibe ich.', why: 'Verb at the end of the *je* clause; after *desto* + comparative comes the verb.' },
            { a: 'Je länger der Film dauert, desto unruhiger werden die Kinder.', why: '*Desto unruhiger*, then the verb *werden*, then the subject.' },
            { a: 'Die Ausstellung war zwar klein, aber sehr interessant.', why: '*Zwar* stands after the verb; *aber* introduces the contrast.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Extended participle phrases',
      about: 'Pack information in front of a noun, the way newspapers and reviews do.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'In written German, a lot of information can stand **between the article and the noun**. The core is a participle used as an adjective, with the normal adjective ending. Everything that belongs to it comes **before** it.' },
          { t: 'examples', items: [
            { s: 'der **seit Jahren erwartete** Film', n: '= der Film, der seit Jahren erwartet wird.' },
            { s: 'die **in Wien lebende** Autorin', n: '= die Autorin, die in Wien lebt.' },
            { s: 'das **letztes Jahr erschienene** Buch', n: '= das Buch, das letztes Jahr erschienen ist.' },
            { s: 'mit einer **von allen Kritikern gelobten** Schauspielerin', n: 'Dativ after *einer*, so the ending is *-en*. = mit einer Schauspielerin, die von allen Kritikern gelobt wird.' },
          ] },
        ],
        [
          { t: 'text', md: 'Choose the participle by its meaning. **Partizip I** (infinitive + *d*: *lebend, wachsend*) is active and happens at the same time. **Partizip II** (*erwartet, erschienen*) is usually passive, or it shows that something is finished.' },
          { t: 'table', caption: 'Partizip I or Partizip II?', explain: ['head', 'col0'], head: ['Participle', 'Phrase', 'Relative clause'], rows: [
            ['Partizip I: active, happening now', 'die schnell wachsende Stadt', 'die Stadt, die schnell wächst'],
            ['Partizip II: passive', 'der oft gespielte Song', 'der Song, der oft gespielt wird'],
            ['Partizip II: finished', 'der gerade angekommene Zug', 'der Zug, der gerade angekommen ist'],
          ] },
          { t: 'tip', art: 'owl', md: 'To read a long phrase, find the article and its noun first: *die … Autorin*. Then go back and read what stands in between.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right participle.', items: [
            { q: 'Der von vielen Kritikern ___ Film läuft ab Donnerstag im Kino.', o: ['gelobte', 'lobende', 'gelobten'], why: '*Von vielen Kritikern* shows the passive: Partizip II. Nominative after *der*: *-e*.' },
            { q: 'Die in Berlin ___ Regisseurin hat einen neuen Film gedreht.', o: ['lebende', 'gelebte', 'lebenden'], why: 'She lives there now: Partizip I. Nominative feminine after *die*: *-e*.' },
            { q: 'Wir sprechen heute über das gestern ___ Interview.', o: ['veröffentlichte', 'veröffentlichende', 'veröffentlichten'], why: 'The interview was published: Partizip II. Accusative neuter after *das*: *-e*.' },
            { q: 'Die im Kino ___ Zuschauer lachten laut.', o: ['sitzenden', 'gesessenen', 'sitzende'], why: 'They are sitting at the same time: Partizip I. Plural after *die*: *-en*.' },
            { q: 'Das vor zwei Jahren ___ Buch ist jetzt verfilmt worden.', o: ['erschienene', 'erscheinende', 'erschienen'], why: 'It came out two years ago: Partizip II. Before a noun, it needs an ending: *-e*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each relative clause to the phrase with the same meaning.', pairs: [
            ['der Sänger, der am Klavier sitzt', 'der am Klavier sitzende Sänger'],
            ['die Bilder, die im Museum gezeigt werden', 'die im Museum gezeigten Bilder'],
            ['das Theaterstück, das oft gespielt wird', 'das oft gespielte Theaterstück'],
            ['die Zuschauer, die zu spät gekommen sind', 'die zu spät gekommenen Zuschauer'],
            ['der Artikel, der gestern erschienen ist', 'der gestern erschienene Artikel'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the participle with the right ending.', items: [
            { q: 'Wir wohnen in einer schnell ___ Stadt. (wachsen)', a: ['wachsenden'], why: 'Partizip I, Dativ feminine after *einer*: *-en*.' },
            { q: 'Der lange ___ Roman ist endlich da. (erwarten)', a: ['erwartete'], why: 'Partizip II, nominative masculine after *der*: *-e*.' },
            { q: 'Sie hat alle von ihrem Vater ___ Briefe aufgehoben. (schreiben)', a: ['geschriebenen'], why: 'Partizip II, passive. Plural after *alle*: *-en*.' },
            { q: 'Das ist ein oft ___ Fehler. (machen)', a: ['gemachter'], why: 'Partizip II, nominative masculine after *ein*: *-er*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Your opinion about a book or a film',
      about: 'Say what you think about a book or a film, and why.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'A good opinion has two parts: what you think, and **why** you think it. These phrases help you to do both.' },
          { t: 'table', caption: 'Giving an opinion', explain: ['head', 'col1'], head: ['Phrase', 'Use'], rows: [
            ['Meiner Meinung nach …', 'you give your opinion'],
            ['Ich finde, dass …', 'you give your opinion'],
            ['Was mich überzeugt hat, ist …', 'you name the best part'],
            ['Mir hat … (nicht) gefallen, weil …', 'you say what you liked and why'],
            ['Das liegt vor allem daran, dass …', 'you give the main reason'],
            ['Ich kann den Film nur empfehlen.', 'you recommend it strongly'],
          ] },
          { t: 'tip', art: 'owl', md: '*Meiner Meinung nach* takes position 1, so the verb comes straight after it: *Meiner Meinung nach **ist** das Ende zu schwach.*' },
        ],
        [
          { t: 'table', caption: 'Words for reviews', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['die Handlung', 'what happens in the story'],
            ['die Figur', 'a person in a story'],
            ['spannend', 'you want to know what happens next'],
            ['vorhersehbar', 'you know the ending early'],
            ['langatmig', 'too long and too slow'],
            ['glaubwürdig', 'you can believe it'],
            ['sehenswert / lesenswert', 'worth seeing / worth reading'],
          ] },
          { t: 'dialogue', title: 'Nach dem Kino', lines: [
            { who: 'Mara', s: 'Und, wie fandest du den Film?' },
            { who: 'Kwame', s: 'Ehrlich gesagt war ich etwas enttäuscht. Die Handlung war ziemlich vorhersehbar.' },
            { who: 'Mara', s: 'Das stimmt zwar, aber die Schauspieler haben mich total überzeugt.' },
            { who: 'Kwame', s: 'Ja, die Hauptdarstellerin war großartig. Was mich gestört hat, ist das Ende.' },
            { who: 'Mara', s: 'Wirklich? Mir hat das Ende gut gefallen, weil es offen bleibt.' },
            { who: 'Kwame', s: 'Genau das mag ich nicht. Ich möchte wissen, wie die Geschichte ausgeht.' },
            { who: 'Mara', s: 'Na ja, je mehr ich darüber nachdenke, desto besser finde ich es.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each word to its meaning.', pairs: [
            ['vorhersehbar', 'Man weiß schon früh, wie es endet.'],
            ['glaubwürdig', 'Man kann es gut glauben.'],
            ['spannend', 'Man will unbedingt wissen, wie es weitergeht.'],
            ['langatmig', 'Es dauert zu lange und wird langweilig.'],
            ['sehenswert', 'Es lohnt sich, den Film anzuschauen.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Meiner Meinung ___ ist das Buch zu lang.', o: ['nach', 'von', 'für'], why: 'The fixed phrase is *meiner Meinung nach*.' },
            { q: '', o: ['Meiner Meinung nach ist das Ende zu schwach.', 'Meiner Meinung nach das Ende ist zu schwach.', 'Meiner Meinung nach das Ende zu schwach ist.'], why: '*Meiner Meinung nach* is position 1, so the verb comes next.' },
            { q: 'Mir hat der Film nicht gefallen, ___ die Figuren nicht glaubwürdig waren.', o: ['weil', 'deshalb', 'trotzdem'], why: 'The verb is at the end, so you need a subordinating connector: *weil*.' },
            { q: 'Was mich überzeugt hat, ___ die Kameraarbeit.', o: ['ist', 'hat', 'wird'], why: 'The fixed pattern is *Was mich überzeugt hat, ist …*, followed by the thing you name.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that criticise the film or the book.', items: [
            { s: 'Die Schauspieler sind gut, aber die Handlung ist [vorhersehbar].', why: '*Vorhersehbar* is a criticism: you know the ending early.' },
            { s: 'Das Buch ist leider ziemlich [langatmig].', why: '*Langatmig*: too long and too slow.' },
            { s: 'Die Musik ist toll, aber die Figuren wirken [nicht] [glaubwürdig].', why: '*Nicht glaubwürdig*: you cannot believe them.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A film review',
      about: 'Read a film review and find the reviewer’s opinion and reasons.',
      art: 'monster',
      spreads: [
        [
          { t: 'reading', title: '„Der letzte Sommer in Triest“: ein leiser Film mit großer Wirkung', md: 'Der lange erwartete zweite Film der Regisseurin Lina Petrović läuft seit dieser Woche in den Kinos. Er erzählt die Geschichte der 70-jährigen Ana, die nach dem Tod ihres Mannes ihr Haus in Triest verkaufen will. Bevor sie auszieht, besucht sie ihr Enkel Marko, der in Wien als Grafiker arbeitet. Aus den geplanten drei Tagen wird ein ganzer Sommer.\n\nDie Handlung ist zwar einfach, aber nie langweilig. Petrović nimmt sich Zeit für kleine Momente: ein gemeinsames Frühstück auf dem Balkon, ein Streit über alte Fotos, ein Spaziergang am Meer. Je länger man zuschaut, desto mehr versteht man, wie wenig die beiden voneinander wissen.\n\nWas mich am meisten überzeugt hat, sind die Schauspieler. Die in Kroatien sehr bekannte Theaterschauspielerin Vesna Horvat spielt Ana weder sentimental noch übertrieben, sondern mit viel Humor. Auch Daniel Brenner ist als Marko glaubwürdig, obwohl seine Figur manchmal etwas blass bleibt.\n\nNicht alles gelingt jedoch. Mit über zwei Stunden ist der Film stellenweise langatmig, und eine Nebenhandlung über Markos Freundin in Wien wirkt überflüssig. Außerdem ist das Ende für meinen Geschmack zu vorhersehbar.\n\nTrotzdem kann ich den Film nur empfehlen. Er ist sowohl ein genaues Porträt einer Familie als auch eine Liebeserklärung an eine Stadt. Wer schnelle Action sucht, sollte lieber einen anderen Film wählen. Wer aber Lust auf ein ruhiges, warmes Kinoerlebnis hat, ist hier genau richtig.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Lina Petrović hat vorher schon einen Film gedreht.', a: 't', why: 'It is her *zweiter Film*, her second film.' },
            { q: 'Marko wollte ursprünglich nur drei Tage bleiben.', a: 't', why: '*Aus den geplanten drei Tagen wird ein ganzer Sommer.*' },
            { q: 'Laut der Kritik ist die Handlung langweilig.', a: 'f', why: '*Die Handlung ist zwar einfach, aber nie langweilig.*' },
            { q: 'Vesna Horvat spielt Ana sehr sentimental.', a: 'f', why: 'She plays Ana *weder sentimental noch übertrieben*.' },
            { q: 'Der Film dauert weniger als zwei Stunden.', a: 'f', why: '*Mit über zwei Stunden*: it is longer than two hours.' },
            { q: 'Der Film hat schon einen Preis gewonnen.', a: 'ng', why: 'The review does not mention any prize.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the review.', items: [
            { q: '„Die Handlung ist zwar einfach, aber nie langweilig.“ What does the reviewer mean?', o: ['The story is simple, but it is still interesting.', 'The story is complicated and boring.', 'The story is neither simple nor interesting.'], why: '*Zwar … aber*: a fact, then a contrast.' },
            { q: '„die in Kroatien sehr bekannte Theaterschauspielerin“ means …', o: ['die Theaterschauspielerin, die in Kroatien sehr bekannt ist', 'die Theaterschauspielerin, die Kroatien sehr gut kennt', 'die Theaterschauspielerin, die nach Kroatien gezogen ist'], why: 'The participle phrase *in Kroatien sehr bekannte* stands for a relative clause.' },
            { q: 'Who will probably like the film, according to the review?', o: ['People who want a calm film about a family.', 'People who love fast action films.', 'People who prefer short films.'], why: '*Wer aber Lust auf ein ruhiges, warmes Kinoerlebnis hat, ist hier genau richtig.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich habe ___ Zeit noch Lust, ins Kino zu gehen.', o: ['weder', 'entweder', 'sowohl'], why: '*Weder … noch*: not this and not that.' },
      { q: 'Je spannender ein Buch ist, ___ schneller lese ich es.', o: ['desto', 'als', 'sondern'], why: '*Je … desto*.' },
      { q: 'Der in Hamburg ___ Autor liest heute aus seinem neuen Buch.', o: ['lebende', 'gelebte', 'lebenden'], why: 'Partizip I, active and happening now. Nominative after *der*: *-e*.' },
      { q: 'Das Buch ist nicht nur lustig, ___ auch traurig.', o: ['sondern', 'aber', 'oder'], why: '*Nicht nur … sondern auch*.' },
      { q: 'Meiner Meinung nach ___.', o: ['ist der Film zu lang', 'der Film ist zu lang', 'der Film zu lang ist'], why: '*Meiner Meinung nach* is position 1, so the verb comes next.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Wir können entweder heute ___ morgen ins Museum gehen.', a: ['oder'], why: '*Entweder … oder*.' },
      { q: 'Der gestern ___ Artikel hat viele Leser verärgert. (veröffentlichen)', a: ['veröffentlichte'], why: 'Partizip II, passive. Nominative after *der*: *-e*.' },
      { q: 'Die Serie war zwar teuer, ___ sie hat sich gelohnt.', a: ['aber'], why: '*Zwar … aber*.' },
      { q: 'Die Handlung war so ___, dass ich das Ende schon nach zehn Minuten kannte.', a: ['vorhersehbar'], why: 'You knew the ending early: *vorhersehbar*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Je mehr Kritiken ich lese, desto unsicherer werde ich.', why: 'Verb at the end of the *je* clause; *desto* + comparative + verb.' },
      { a: 'Der Film ist zwar lang, aber nie langweilig.', why: '*Zwar* after the verb, *aber* for the contrast.' },
      { a: 'Das ist der seit Jahren erwartete Film.', why: 'Everything that belongs to the participle stands between the article and the noun.' },
    ] },
  ],
};
