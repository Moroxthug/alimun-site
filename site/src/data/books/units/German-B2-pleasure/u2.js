// German B2 for travel, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Cultural etiquette',
  goal: 'Understand and discuss customs and good manners in other places.',
  art: 'teacup',
  tags: { skills: ['speaking', 'vocabulary', 'grammar', 'reading'], topics: ['etiquette', 'politeness', 'gelten-als', 'hedging', 'konjunktiv-ii', 'intercultural'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Politeness, gestures and taboos',
      about: 'Talk about customs and compare them respectfully.',
      art: 'teacup',
      spreads: [
        [
          { t: 'dialogue', title: 'Vor dem Essen bei Jonas’ Eltern', lines: [
            { who: 'Priya', s: 'Sag mal, was sollte ich bei deinen Eltern beachten? Ich möchte nichts falsch machen.' },
            { who: 'Jonas', s: 'Keine Sorge. Komm einfach pünktlich, das ist meinen Eltern wichtig. Eine Viertelstunde zu spät wäre schon unhöflich.' },
            { who: 'Priya', s: 'Gut zu wissen. Bei uns ist es eher üblich, etwas später zu kommen. Soll ich etwas mitbringen?' },
            { who: 'Jonas', s: 'Blumen oder eine Flasche Wein kommen immer gut an. Und meine Mutter siezt du am Anfang, bis sie dir das Du anbietet.' },
            { who: 'Priya', s: 'Und beim Essen?' },
            { who: 'Jonas', s: 'Man wartet, bis alle etwas auf dem Teller haben, und sagt „Guten Appetit“. Beim Anstoßen schaut man sich in die Augen.' },
            { who: 'Priya', s: 'Interessant. In meiner Familie stößt man beim Essen gar nicht an.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Priya soll ein bisschen später kommen.', a: 'f', why: '*Komm einfach pünktlich.* Fifteen minutes late would already be rude.' },
            { q: 'Jonas’ Mutter bietet Priya vielleicht später das Du an.', a: 't', why: '*… bis sie dir das Du anbietet.* Until then, Priya uses *Sie*.' },
            { q: 'Man beginnt zu essen, sobald man selbst etwas auf dem Teller hat.', a: 'f', why: '*Man wartet, bis alle etwas auf dem Teller haben.*' },
            { q: 'In Priyas Familie stößt man beim Essen nicht an.', a: 't', why: '*In meiner Familie stößt man beim Essen gar nicht an.*' },
          ] },
        ],
        [
          { t: 'text', md: 'To describe customs, German uses a small set of fixed phrases. They let you say what people expect without sounding like a rule book.' },
          { t: 'table', caption: 'Talking about customs', explain: ['head', 'col1'], head: ['Phrase', 'Meaning', 'Example'], rows: [
            ['als … gelten', 'to be seen as …', 'Lautes Telefonieren im Zug gilt als unhöflich.'],
            ['es ist (nicht) üblich, … zu …', 'it is (not) usual to …', 'Es ist üblich, die Schuhe auszuziehen.'],
            ['Wert legen auf + Akkusativ', 'to find something important', 'Viele legen Wert auf Pünktlichkeit.'],
            ['man sollte (nicht) …', 'a piece of advice', 'Man sollte nicht mit vollem Mund sprechen.'],
            ['etwas ist tabu', 'you should not do it or talk about it', 'Über das Gehalt zu sprechen ist für manche tabu.'],
            ['jemandem das Du anbieten', 'to offer to use *du*', 'Nach einer Woche bot sie mir das Du an.'],
          ] },
        ],
        [
          { t: 'text', md: 'When you talk about differences, describe your own experience instead of judging. Say how it is *bei uns* and ask how it is for the other person.' },
          { t: 'examples', items: [
            { s: '**Bei uns ist es eher so, dass** man etwas später kommt.', n: 'You describe your own background. The verb *kommt* goes to the end of the *dass* clause.' },
            { s: '**Mich hat überrascht, dass** alle beim Anstoßen Augenkontakt halten.', n: 'You say what was new for you, not what is wrong.' },
            { s: '**Wie ist das eigentlich bei euch?**', n: 'A friendly question that invites the other person to share.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In German restaurants people often round up the bill or add about five to ten percent as a tip. You usually say the total when you pay: *Machen Sie 30, bitte* or *Stimmt so*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each custom with its meaning.', pairs: [
            ['sich verbeugen', 'den Oberkörper nach vorn beugen'],
            ['die Hand geben', 'zur Begrüßung die Hand schütteln'],
            ['siezen', '„Sie“ zu jemandem sagen'],
            ['duzen', '„du“ zu jemandem sagen'],
            ['anstoßen', 'beim Trinken die Gläser leicht zusammenstoßen'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Laute Telefongespräche im Ruhebereich des Zuges ___ als unhöflich.', o: ['gelten', 'sind', 'halten'], why: '*als … gelten*: to be seen as. *sein* and *halten* do not go with *als* here.' },
            { q: 'Viele Menschen in Deutschland legen großen Wert ___ Pünktlichkeit.', o: ['auf', 'an', 'für'], why: '*Wert legen auf* + Akkusativ.' },
            { q: 'In vielen Wohnungen ist es üblich, die Schuhe ___.', o: ['auszuziehen', 'ausziehen', 'zu ausziehen'], why: 'With a separable verb, *zu* goes between the prefix and the verb: *auszuziehen*.' },
            { q: 'Mich hat überrascht, ___ hier alle so pünktlich sind.', o: ['dass', 'ob', 'was'], why: 'You report a fact that surprised you: *dass*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Wie ist das bei euch?', why: 'A W-question: question word, then the verb.' },
            { a: 'Mich hat überrascht, dass alle pünktlich waren.', why: 'In the *dass* clause the verb *waren* goes to the end.' },
            { a: 'In vielen Familien gilt das als unhöflich.', why: 'The place phrase comes first, then *gilt*. *als unhöflich* goes to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Softening what you say',
      about: 'Hedging when you compare cultures, with adverbs, limits and the Konjunktiv II.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Statements about whole countries can easily sound rude or simply be wrong. Good speakers **soften** them. They limit the statement to their own experience (*meiner Erfahrung nach*, *soweit ich weiß*), use careful adverbs (*eher*, *oft*, *in der Regel*, *nicht unbedingt*), and use the **Konjunktiv II** (*ich würde sagen*, *es könnte sein*).' },
          { t: 'table', caption: 'From hard to soft', explain: ['head'], head: ['Hard', 'Soft'], rows: [
            ['Das ist falsch.', 'Ich würde das vielleicht anders sehen.'],
            ['Alle Leute hier sind pünktlich.', 'Die meisten Leute, die ich kenne, sind sehr pünktlich.'],
            ['Das ist komisch.', 'Das ist für mich eher ungewohnt.'],
            ['Ihr seid zu direkt.', 'Manchmal wirkt das auf mich ziemlich direkt.'],
            ['Das stimmt nicht.', 'Das stimmt nicht unbedingt.'],
          ] },
        ],
        [
          { t: 'text', md: 'The **Konjunktiv II** makes an opinion sound open and polite. Most verbs use *würde* + infinitive. A few common verbs have their own forms.' },
          { t: 'table', caption: 'Konjunktiv II for softening', explain: ['head'], quiz: true, head: ['Verb', 'ich / er, sie, es', 'Example'], rows: [
            ['sein', 'wäre', 'Das wäre bei uns eher ungewöhnlich.'],
            ['haben', 'hätte', 'Ich hätte gedacht, dass man hier später isst.'],
            ['können', 'könnte', 'Es könnte sein, dass das regional verschieden ist.'],
            ['dürfen', 'dürfte', 'Das dürfte der Grund sein.'],
            ['sagen', 'würde sagen', 'Ich würde sagen, das ist eher selten.'],
          ] },
          { t: 'tip', art: 'owl', md: '*Das dürfte der Grund sein* does not talk about permission. Here *dürfte* means "is probably": you are fairly sure, but not completely.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence sounds more careful and respectful?', items: [
            { q: '', o: ['Meiner Erfahrung nach sind die Leute hier am Anfang eher zurückhaltend.', 'Die Leute hier sind unfreundlich.', 'Alle hier sind kalt und distanziert.'], why: '*Meiner Erfahrung nach* limits the statement, and *eher zurückhaltend* is softer than a judgement.' },
            { q: '', o: ['Ich würde sagen, das kommt auf die Region an.', 'Das ist überall in Deutschland so.', 'Das ist einfach falsch.'], why: '*Ich würde sagen* is open, and *es kommt darauf an* avoids a general rule.' },
            { q: '', o: ['Für mich ist das noch etwas ungewohnt.', 'Das ist total komisch.', 'So etwas macht man nicht.'], why: 'You describe your own feeling (*für mich*, *ungewohnt*) instead of judging the custom.' },
            { q: '', o: ['Soweit ich weiß, ist Trinkgeld hier freiwillig.', 'Hier gibt niemand Trinkgeld.', 'Ihr gebt alle zu wenig Trinkgeld.'], why: '*Soweit ich weiß* shows that you are not claiming to know everything.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the three words that soften the statement: one Konjunktiv II form and two adverbs.', items: [
            { s: 'Das [könnte] daran liegen, dass man hier [eher] leise spricht, [zumindest] in der Bahn.', why: '*könnte* makes it a possibility, *eher* weakens the claim and *zumindest* limits it to one situation.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the Konjunktiv II form.', items: [
            { q: 'Es ___ sein, dass man das in Bayern anders sieht. (können)', a: ['könnte', 'koennte'], why: '*können → könnte*: a possibility.' },
            { q: 'Ich ___ gedacht, dass man hier die Schuhe anlässt. (haben)', a: ['hätte', 'haette'], why: '*ich hätte gedacht*: a polite way to say you expected something else.' },
            { q: 'Bei uns ___ das eher unhöflich. (sein)', a: ['wäre', 'waere'], why: '*sein → wäre*: it softens the comparison.' },
            { q: 'Ich ___ sagen, das ist eine Frage des Alters. (werden)', a: ['würde', 'wuerde'], why: '*ich würde sagen*: a careful opinion.' },
            { q: 'Das ___ der Grund für das Missverständnis sein. (dürfen)', a: ['dürfte', 'duerfte'], why: '*dürfte*: probably, but you are not completely sure.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Das kommt auf die Situation an.', why: '*ankommen auf*: the prefix *an* goes to the end.' },
            { a: 'Es könnte sein, dass ich mich irre.', why: 'In the *dass* clause the verb *irre* goes to the end, after *mich*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'When politeness is misunderstood',
      about: 'Read an article about cultural misunderstandings.',
      art: 'parrot',
      spreads: [
        [
          { t: 'reading', title: 'Wenn Höflichkeit missverstanden wird', md: 'Ein Gast aus dem Ausland lobt das Essen und lehnt einen Nachschlag höflich ab. Die Gastgeberin fragt nicht noch einmal nach, und der Gast geht hungrig nach Hause. In seiner Familie hätte man ihm dreimal nachgefüllt, denn das erste Nein gehört dort zum guten Ton. Solche kleinen Missverständnisse passieren auf Reisen ständig, und meistens sind sie eher lustig als schlimm.\n\nDie Kulturwissenschaftlerin Miriam Okafor beschäftigt sich seit Jahren mit solchen Situationen. „Höflichkeit ist überall wichtig, aber sie sieht nicht überall gleich aus“, sagt sie. In manchen Kulturen gilt es als respektvoll, dem Gegenüber nicht direkt zu widersprechen. In Deutschland dagegen empfinden viele Menschen ein klares Nein als ehrlich und keineswegs als unhöflich. Wer beides nicht kennt, hält den anderen schnell für unfreundlich oder unaufrichtig.\n\nAuch Gesten können täuschen. Ein Nicken bedeutet nicht in jeder Kultur Zustimmung, und eine Geste, die hier „super“ heißt, kann anderswo beleidigend wirken. Okafor rät deshalb, auf Reisen lieber etwas zurückhaltender zu sein und erst einmal zu beobachten, wie sich die Menschen vor Ort verhalten.\n\nWichtig sei vor allem, nicht zu verallgemeinern. „Den typischen Deutschen gibt es genauso wenig wie den typischen Italiener“, betont sie. Innerhalb eines Landes gebe es große Unterschiede zwischen Regionen, Generationen und Familien. Statt „Bei euch macht man das so“ zu sagen, sei es besser, neugierig nachzufragen: „Wie ist das eigentlich bei dir?“\n\nIhr Fazit: Missverständnisse lassen sich nicht ganz vermeiden. Wer aber offen bleibt und über sich selbst lachen kann, lernt aus jedem Fettnäpfchen etwas Neues.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Der Gast wollte eigentlich noch mehr essen.', a: 't', why: 'He goes home hungry: in his family the first *Nein* is only politeness.' },
            { q: 'Laut Okafor ist Höflichkeit nur in wenigen Ländern wichtig.', a: 'f', why: '*Höflichkeit ist überall wichtig, aber sie sieht nicht überall gleich aus.*' },
            { q: 'In Deutschland empfinden viele Menschen ein klares Nein als ehrlich.', a: 't', why: '*… empfinden viele Menschen ein klares Nein als ehrlich.*' },
            { q: 'Ein Nicken bedeutet überall Zustimmung.', a: 'f', why: '*Ein Nicken bedeutet nicht in jeder Kultur Zustimmung.*' },
            { q: 'Okafor hat selbst viele Jahre im Ausland gelebt.', a: 'ng', why: 'The text does not say where she has lived.' },
            { q: 'Okafor findet es richtig, über „die Deutschen“ oder „die Italiener“ allgemein zu sprechen.', a: 'f', why: 'She warns against this: *Den typischen Deutschen gibt es genauso wenig wie den typischen Italiener.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the article.', items: [
            { q: '„… denn das erste Nein gehört dort zum guten Ton.“ Was bedeutet „zum guten Ton gehören“?', o: ['zum höflichen Verhalten gehören', 'besonders laut gesagt werden', 'als unhöflich gelten'], why: '*zum guten Ton gehören*: to be part of good manners.' },
            { q: '„Wichtig sei vor allem, nicht zu verallgemeinern.“ Warum steht hier „sei“?', o: ['Der Text gibt wieder, was Okafor sagt.', 'Der Satz ist eine höfliche Bitte.', 'Der Satz beschreibt etwas Unwirkliches.'], why: '*sei* and *gebe* are Konjunktiv I. Articles use it for indirect speech: they report what someone said.' },
            { q: '„… lernt aus jedem Fettnäpfchen etwas Neues.“ Was ist hier ein „Fettnäpfchen“?', o: ['ein peinlicher Fehler im Umgang mit anderen', 'ein besonders fettes Essen', 'ein Streit unter Freunden'], why: '*ins Fettnäpfchen treten*: to say or do something embarrassing by mistake.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Lautes Telefonieren im Zug ___ als unhöflich.', o: ['gilt', 'ist', 'hält'], why: '*als … gelten*.' },
      { q: 'Meine Gastgeber legen viel Wert ___ ein gemeinsames Frühstück.', o: ['auf', 'an', 'für'], why: '*Wert legen auf* + Akkusativ.' },
      { q: 'Welcher Satz klingt am vorsichtigsten?', o: ['Das ist für mich eher ungewohnt.', 'Das ist komisch.', 'Das macht man nicht.'], why: '*für mich* and *eher ungewohnt* describe your own feeling.' },
      { q: 'Es ___ sein, dass man das im Süden anders macht.', o: ['könnte', 'könnten', 'gekonnt'], why: 'Konjunktiv II, third person singular: *es könnte*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'In vielen Wohnungen ist es üblich, die Schuhe ___. (ausziehen)', a: ['auszuziehen'], why: 'Separable verb: *aus-zu-ziehen*.' },
      { q: 'Ich ___ gedacht, dass hier alle Trinkgeld geben. (haben)', a: ['hätte', 'haette'], why: '*ich hätte gedacht*.' },
      { q: 'Nach einem Monat hat mir mein Chef das Du ___. (anbieten)', a: ['angeboten'], why: 'Partizip II of *anbieten*: *angeboten*.' },
      { q: 'Mich hat überrascht, ___ alle so pünktlich waren.', a: ['dass'], why: 'A fact that surprised you: *dass*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the verb and its Konjunktiv II form.', pairs: [
      ['sein', 'wäre'],
      ['haben', 'hätte'],
      ['können', 'könnte'],
      ['dürfen', 'dürfte'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Das kommt auf die Region an.', why: '*ankommen auf*: *an* at the end.' },
      { a: 'Soweit ich weiß, ist Trinkgeld freiwillig.', why: 'After the clause *Soweit ich weiß*, the main clause starts with its verb *ist*.' },
    ] },
  ],
};
