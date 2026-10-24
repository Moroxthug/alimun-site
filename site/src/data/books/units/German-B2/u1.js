// German B2, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Personality and relationships',
  goal: 'Describe people and relationships precisely. Review all adjective endings, use participles as adjectives and learn verbs and adjectives with fixed prepositions.',
  art: 'cat',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['adjective-endings', 'participles', 'prepositional-verbs', 'da-wo-words', 'friendship'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Adjective endings: the full picture',
      about: 'All three types of adjective endings in one review.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'An adjective in front of a noun always has an ending. The ending depends on the word before the adjective. There are three types: after *der, die, das* and words like *dieser, jeder, welcher* (type 1), after *ein, kein* and the possessives *mein, dein, sein* (type 2), and with no article at all (type 3).\n\n**Type 1** is the simplest. The adjective ends in **-e** in five places: the Nominativ singular of all three genders and the Akkusativ of neuter and feminine nouns. Everywhere else it ends in **-en**.' },
          { t: 'table', caption: 'Type 1: after der, die, das, dieser, jeder', explain: ['head', 'col0'], quiz: true, head: ['', 'masculine', 'neuter', 'feminine', 'plural'], rows: [
            ['Nominativ', 'der nette', 'das nette', 'die nette', 'die netten'],
            ['Akkusativ', 'den netten', 'das nette', 'die nette', 'die netten'],
            ['Dativ', 'dem netten', 'dem netten', 'der netten', 'den netten'],
            ['Genitiv', 'des netten', 'des netten', 'der netten', 'der netten'],
          ] },
        ],
        [
          { t: 'text', md: '**Type 2** is almost the same as type 1. It differs in three places, where *ein* has no ending of its own: the masculine Nominativ and the neuter Nominativ and Akkusativ. There the adjective must show the gender: *ein netter Mann, ein nettes Kind*.' },
          { t: 'table', caption: 'Type 2: after ein, kein, mein, dein, unser', explain: ['head', 'col0'], quiz: true, head: ['', 'masculine', 'neuter', 'feminine', 'plural'], rows: [
            ['Nominativ', 'ein netter', 'ein nettes', 'eine nette', 'meine netten'],
            ['Akkusativ', 'einen netten', 'ein nettes', 'eine nette', 'meine netten'],
            ['Dativ', 'einem netten', 'einem netten', 'einer netten', 'meinen netten'],
            ['Genitiv', 'eines netten', 'eines netten', 'einer netten', 'meiner netten'],
          ] },
        ],
        [
          { t: 'text', md: '**Type 3**: with no article, the adjective takes the ending that the article would have: *dem Kaffee → mit heißem Kaffee*. The only exception is the Genitiv of masculine and neuter nouns. The noun already ends in *-s* there, so the adjective ends in **-en**: *trotz starken Regens*.' },
          { t: 'table', caption: 'Type 3: no article', explain: ['head', 'col0'], quiz: true, head: ['', 'masculine', 'neuter', 'feminine', 'plural'], rows: [
            ['Nominativ', 'guter Kaffee', 'gutes Brot', 'gute Laune', 'gute Freunde'],
            ['Akkusativ', 'guten Kaffee', 'gutes Brot', 'gute Laune', 'gute Freunde'],
            ['Dativ', 'gutem Kaffee', 'gutem Brot', 'guter Laune', 'guten Freunden'],
            ['Genitiv', 'guten Kaffees', 'guten Brotes', 'guter Laune', 'guter Freunde'],
          ] },
          { t: 'tip', art: 'owl', md: 'After *viele, einige, mehrere, wenige* and after numbers, use type 3: *viele nette Leute, zwei neue Kollegen*. After *alle*, use type 1, as after *die*: *alle netten Leute*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right ending.', items: [
            { q: 'Sie hat einen ___ Charakter.', o: ['starken', 'starker', 'starke'], why: 'Type 2, masculine Akkusativ: *einen starken*.' },
            { q: 'Mein Nachbar ist ein sehr ___ Mensch.', o: ['hilfsbereiter', 'hilfsbereite', 'hilfsbereiten'], why: 'Type 2, masculine Nominativ. *Ein* has no ending, so the adjective shows the gender: *-er*.' },
            { q: 'Mit ___ Menschen kann man nicht diskutieren.', o: ['sturen', 'sture', 'sturer'], why: 'Type 3, Dativ plural. The article would be *den*, so the ending is *-en*.' },
            { q: 'Er erzählt oft von den Ideen seiner ___ Kollegin.', o: ['neuen', 'neue', 'neuer'], why: 'Type 2, feminine Genitiv: *seiner neuen Kollegin*.' },
            { q: 'Sie ist eine Frau mit ___ Humor.', o: ['trockenem', 'trockenen', 'trockener'], why: 'Type 3, masculine Dativ. The article would be *dem*, so the ending is *-em*.' },
            { q: 'Dieses ___ Lächeln vergesse ich nie.', o: ['freundliche', 'freundliches', 'freundlichen'], why: '*Dieses* works like *das*, so this is type 1: neuter Akkusativ *-e*.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Adjectives ending in *-el* lose the *e* before an ending: *dunkel → dunkle Augen*. Many adjectives ending in *-er* do the same: *teuer → ein teures Geschenk*.' },
          { t: 'ex', kind: 'gap', h: 'Write the adjective with the right ending.', items: [
            { q: 'Lukas ist ein ___ Kollege. Auf ihn kann man sich verlassen. (zuverlässig)', a: ['zuverlässiger'], why: 'Type 2, masculine Nominativ: *-er*.' },
            { q: 'Ich mag Menschen mit ___ Meinungen. (klar)', a: ['klaren'], why: 'Type 3, Dativ plural: *-en*.' },
            { q: 'Sie hat ___ Augen und ein offenes Lachen. (dunkel)', a: ['dunkle'], why: 'Type 3, Akkusativ plural: *-e*. *Dunkel* loses its *e*: *dunkle*.' },
            { q: 'Das ist der Freund meiner ___ Schwester. (älter)', a: ['älteren'], why: 'Type 2, feminine Genitiv: *-en*.' },
            { q: 'Bei ___ Wetter gehen wir oft wandern. (schön)', a: ['schönem'], why: 'Type 3, neuter Dativ. The article would be *dem*: *-em*.' },
            { q: 'Wir suchen eine ___ Person für unser Team. (kreativ)', a: ['kreative'], why: 'Type 2, feminine Akkusativ: *-e*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Participles as adjectives',
      about: 'Use die steigenden Preise and das gelesene Buch.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A participle can stand in front of a noun, like an adjective. It then takes the normal adjective endings. German has two participles, and they mean different things.' },
          { t: 'table', caption: 'Two participles', explain: ['head', 'col0', 'col1', 'col2'], head: ['', 'Form', 'Meaning', 'Example'], rows: [
            ['Partizip I', 'infinitive + *-d*: *steigend*', 'active, happening at the same time', 'die steigenden Preise'],
            ['Partizip II', '*gelesen, verlassen*', 'passive, or already finished', 'das gelesene Buch'],
          ] },
          { t: 'examples', items: [
            { s: 'Die **steigenden** Preise machen vielen Familien Sorgen.', n: 'The prices are rising now: Partizip I, active.' },
            { s: 'Das **gelesene** Buch gebe ich dir morgen zurück.', n: 'Someone has read the book: Partizip II, passive meaning.' },
            { s: 'Die **angekommenen** Gäste warten im Wohnzimmer.', n: 'With verbs that form the Perfekt with *sein*, the Partizip II is not passive. It means the action is finished: the guests have arrived.' },
          ] },
        ],
        [
          { t: 'text', md: 'A participle in front of a noun is a short form of a relative clause. It sounds more compact and is common in written German.' },
          { t: 'table', caption: 'Relative clause or participle', explain: ['head'], head: ['Relative clause', 'Participle'], rows: [
            ['das Kind, das weint', 'das weinende Kind'],
            ['eine Frau, die schweigt', 'eine schweigende Frau'],
            ['der Brief, den sie geschrieben hat', 'der geschriebene Brief'],
            ['ein Rat, der gut gemeint ist', 'ein gut gemeinter Rat'],
            ['die Gäste, die angekommen sind', 'die angekommenen Gäste'],
          ] },
          { t: 'tip', art: 'owl', md: 'Many participles are ordinary adjectives today. You already know Partizip I forms like *spannend* and *überzeugend*, and Partizip II forms like *verheiratet, verliebt* and *verletzt*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right participle.', items: [
            { q: 'Die Eltern trösten das ___ Kind. (weinen)', o: ['weinende', 'geweinte', 'weinend'], why: 'The child is crying now: Partizip I. Neuter Akkusativ after *das*: *-e*.' },
            { q: 'Die frisch ___ Paare feierten zusammen. (verheiraten)', o: ['verheirateten', 'verheiratenden', 'verheiratete'], why: 'The couples have married: Partizip II. Plural after *die*: *-en*.' },
            { q: 'Ich habe das ___ Paket sofort geöffnet. (erhalten)', o: ['erhaltene', 'erhaltende', 'erhaltenes'], why: 'Someone has received the parcel: Partizip II. Neuter Akkusativ after *das*: *-e*.' },
            { q: 'Mit ___ Stimme erzählte er von seiner Kindheit. (zittern)', o: ['zitternder', 'gezitterter', 'zitternde'], why: 'His voice shakes while he speaks: Partizip I. Feminine Dativ, no article: *-er*.' },
            { q: 'Ein ___ Problem ist kein Problem mehr. (lösen)', o: ['gelöstes', 'lösendes', 'gelöste'], why: 'Someone has solved the problem: Partizip II. Neuter Nominativ after *ein*: *-es*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the participle with the right ending.', items: [
            { q: 'Die ___ Mieten machen vielen Studierenden Sorgen. (steigen, Partizip I)', a: ['steigenden'], why: 'Plural after *die*: *steigend + en*.' },
            { q: 'Das ___ Buch liegt noch auf meinem Schreibtisch. (leihen, Partizip II)', a: ['geliehene'], why: 'Neuter Nominativ after *das*: *geliehen + e*.' },
            { q: 'Wir suchen einen ___ Partner für unser Projekt. (passen, Partizip I)', a: ['passenden'], why: 'Masculine Akkusativ after *einen*: *passend + en*.' },
            { q: 'Die im Urlaub ___ Fotos sind wunderschön. (machen, Partizip II)', a: ['gemachten'], why: 'Plural after *die*: *gemacht + en*. *Im Urlaub* belongs to the participle.' },
            { q: 'Er sprach mit ___ Augen von seiner ersten Liebe. (leuchten, Partizip I)', a: ['leuchtenden'], why: 'Dativ plural, no article: *leuchtend + en*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the participles that are used as adjectives.', items: [
            { s: 'Sie las den [vergessenen] Brief mit [klopfendem] Herzen.', why: '*vergessen* (Partizip II) and *klopfend* (Partizip I) stand in front of nouns and have endings.' },
            { s: 'Die [schlafende] Katze lag neben dem [gepackten] Koffer.', why: '*schlafend* and *gepackt* describe the nouns that follow.' },
            { s: 'Wir haben lange über die [geplante] Reise gesprochen.', why: '*gesprochen* is part of the Perfekt, not an adjective. Only *geplante* describes a noun.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Wir sprechen über die steigenden Preise.', why: 'The participle stands between the article and the noun, like any adjective.' },
            { a: 'Hast du den empfohlenen Film gesehen?', why: 'Yes/no question: the verb comes first, the Partizip II of the Perfekt goes to the end.' },
            { a: 'Das war ein gut gemeinter Rat.', why: '*gut* belongs to the participle and stands directly in front of it.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Verbs and adjectives with prepositions',
      about: 'Fixed prepositions, and the words darauf, worüber and auf wen.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Many verbs and adjectives go with a fixed preposition. The preposition decides the case, and it is often not the one you would expect from your own language. Learn each verb together with its preposition and its case.' },
          { t: 'table', caption: 'Verbs and adjectives with prepositions', explain: ['head'], quiz: true, head: ['Verb or adjective', 'Case', 'Example'], rows: [
            ['sich verlassen auf', '+ Akk.', 'Auf Jana kann ich mich verlassen.'],
            ['stolz sein auf', '+ Akk.', 'Wir sind stolz auf unsere Tochter.'],
            ['eifersüchtig sein auf', '+ Akk.', 'Er ist eifersüchtig auf ihren Kollegen.'],
            ['sich ärgern über', '+ Akk.', 'Er ärgert sich über den Lärm.'],
            ['sich kümmern um', '+ Akk.', 'Sie kümmert sich um ihren Vater.'],
            ['sich verlieben in', '+ Akk.', 'Ich habe mich in ihn verliebt.'],
            ['befreundet sein mit', '+ Dat.', 'Ich bin mit Ali befreundet.'],
            ['abhängig sein von', '+ Dat.', 'Kinder sind von ihren Eltern abhängig.'],
            ['enttäuscht sein von', '+ Dat.', 'Ich bin von dir enttäuscht.'],
            ['sich sehnen nach', '+ Dat.', 'Sie sehnt sich nach Ruhe.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In these phrases, *über* always takes the Akkusativ and *auf* almost always does. *Mit, von* and *nach* always take the Dativ.' },
        ],
        [
          { t: 'text', md: 'To ask about a **thing**, use *wo-* + the preposition: *Worauf freust du dich?* To refer back to a thing, use *da-* + the preposition: *Ich freue mich darauf.* Add an *-r-* when the preposition starts with a vowel: *worüber, darum, daran*.\n\nFor **people**, use the preposition with a question word or a pronoun: *Auf wen wartest du? Auf ihn.*' },
          { t: 'examples', items: [
            { s: '**Worüber** ärgerst du dich? – **Darüber**, dass er immer zu spät kommt.', n: 'The *da*-word can point forward to a *dass* clause.' },
            { s: '**Mit wem** bist du befreundet? – Mit Leonie. Ich bin schon lange **mit ihr** befreundet.', n: 'A person: preposition + *wem* or a pronoun.' },
            { s: 'Ich kann mich **darauf** verlassen, dass sie pünktlich ist.', n: '*darauf* prepares the *dass* clause.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In everyday speech you will often hear *Über was …?* or *Auf was …?* instead of *worüber* and *worauf*. In writing, use the *wo*-words.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right preposition.', items: [
            { q: 'Ich kann mich immer ___ meine Schwester verlassen.', o: ['auf', 'an', 'zu'], why: '*sich verlassen auf* + Akkusativ.' },
            { q: 'Meine Eltern sind sehr stolz ___ meinen Abschluss.', o: ['auf', 'über', 'von'], why: '*stolz sein auf* + Akkusativ.' },
            { q: 'Er ärgert sich oft ___ seinen Mitbewohner.', o: ['über', 'auf', 'mit'], why: '*sich ärgern über* + Akkusativ.' },
            { q: 'Seit Jahren kümmert sie sich ___ ihre kranke Mutter.', o: ['um', 'für', 'über'], why: '*sich kümmern um* + Akkusativ.' },
            { q: 'Ich bin seit zehn Jahren ___ Jonas befreundet.', o: ['mit', 'zu', 'bei'], why: '*befreundet sein mit* + Dativ.' },
            { q: 'Bist du etwa eifersüchtig ___ meinen Kollegen?', o: ['auf', 'über', 'an'], why: '*eifersüchtig sein auf* + Akkusativ.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word: a wo-word, a da-word or a pronoun.', items: [
            { q: '___ freust du dich am meisten? – Auf den Urlaub am Meer.', a: ['Worauf'], why: 'A question about a thing with *sich freuen auf*: *worauf*.' },
            { q: '___ habt ihr euch gestern gestritten? – Über das Geld.', a: ['Worüber'], why: 'A question about a thing with *sich streiten über*: *worüber*, with *-r-* before the vowel.' },
            { q: 'Mit ___ verstehst du dich am besten? – Mit meinem Bruder.', a: ['wem'], why: 'A question about a person: preposition + *wem* (Dativ after *mit*).' },
            { q: 'Du hast mir beim Umzug geholfen. Ich bin dir sehr dankbar ___.', a: ['dafür'], why: '*dankbar sein für*. It refers back to a thing, the help: *dafür*.' },
            { q: 'Wir haben lange ___ gesprochen, ob wir zusammenziehen. (über)', a: ['darüber'], why: '*sprechen über*. The *da*-word points forward to the *ob* clause.' },
            { q: 'Denkst du noch oft an deinen Ex-Freund? – Nein, ich denke kaum noch an ___.', a: ['ihn'], why: 'For a person, use the preposition + a pronoun, not a *da*-word: *an ihn*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Which preposition goes with each verb or adjective?', pairs: [
            ['sich verlassen', 'auf'],
            ['sich kümmern', 'um'],
            ['sich verlieben', 'in'],
            ['sich interessieren', 'für'],
            ['abhängig sein', 'von'],
            ['sich sehnen', 'nach'],
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'What makes a good friendship?',
      about: 'Read an article about friendship between adults.',
      art: 'teacup',
      spreads: [
        [
          { t: 'reading', title: 'Freundschaft im Erwachsenenalter', md: 'Als Kind findet man Freunde fast von selbst: Man sitzt in derselben Klasse, spielt auf demselben Hof und verbringt die Nachmittage zusammen. Im Erwachsenenalter wird das schwieriger. Der Beruf, die eigene Familie und ein möglicher Umzug in eine andere Stadt lassen wenig Zeit für alte Freundschaften. Viele Menschen stellen mit Ende dreißig überrascht fest, dass ihr Freundeskreis kleiner geworden ist.\n\nDoch was macht eine gute Freundschaft eigentlich aus? Die meisten Menschen nennen zuerst Vertrauen. Ein echter Freund ist jemand, auf den man sich verlassen kann und der ein Geheimnis für sich behält. Fast genauso wichtig ist Ehrlichkeit: Gute Freunde sagen uns auch unangenehme Wahrheiten, ohne uns zu verletzen.\n\nDie Psychologin Miriam Okafor beschäftigt sich seit Jahren mit diesem Thema. „Freundschaften brauchen Zeit und gemeinsame Erlebnisse“, sagt sie. „Wer sich nur alle paar Monate kurz meldet, darf sich nicht wundern, wenn die Beziehung langsam einschläft.“ Sie rät dazu, feste Termine zu vereinbaren, zum Beispiel einen monatlichen Spieleabend oder einen gemeinsamen Spaziergang am Sonntag.\n\nInteressant ist auch, dass sich Freundschaften verändern dürfen. Eine Freundin, mit der man früher jedes Wochenende gefeiert hat, wird vielleicht später zur wichtigsten Gesprächspartnerin, wenn es Probleme mit den Kindern gibt. „Man sollte nicht enttäuscht darüber sein, dass eine Freundschaft anders wird“, meint Okafor. „Entscheidend ist, dass sich beide weiterhin füreinander interessieren.“' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Als Kind ist es meistens leichter, Freunde zu finden.', a: 't', why: '*Als Kind findet man Freunde fast von selbst.*' },
            { q: 'Für die meisten Menschen ist Ehrlichkeit das Wichtigste in einer Freundschaft.', a: 'f', why: 'Most people name trust first: *Die meisten Menschen nennen zuerst Vertrauen.*' },
            { q: 'Miriam Okafor hat selbst nur wenige Freunde.', a: 'ng', why: 'The text says nothing about her own friends.' },
            { q: 'Okafor empfiehlt, sich regelmäßig zu festen Terminen zu treffen.', a: 't', why: '*Sie rät dazu, feste Termine zu vereinbaren.*' },
            { q: 'Nach Okafor ist eine Freundschaft gescheitert, wenn sie sich verändert.', a: 'f', why: 'She says friendships may change: *Man sollte nicht enttäuscht darüber sein.*' },
            { q: 'Okafor organisiert selbst einen monatlichen Spieleabend.', a: 'ng', why: 'A games evening is only her example. The text does not say she organises one.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the text.', items: [
            { q: '„… und ein möglicher Umzug in eine andere Stadt …“: Warum steht hier die Endung -er?', o: ['Maskulin, Nominativ nach ein', 'Plural, Nominativ', 'Maskulin, Dativ nach ein'], why: '*Umzug* is masculine and part of the subject. After *ein*, the adjective shows the gender: *-er*.' },
            { q: '„… jemand, auf den man sich verlassen kann …“: Worauf bezieht sich „den“?', o: ['auf „jemand“, also den Freund', 'auf das Geheimnis', 'auf die Ehrlichkeit'], why: 'The relative pronoun refers to *jemand*, the real friend. *sich verlassen auf* + Akkusativ.' },
            { q: '„Man sollte nicht enttäuscht darüber sein, dass …“: Worauf zeigt „darüber“?', o: ['auf den folgenden dass-Satz', 'auf die Psychologin', 'auf die Kinder'], why: 'The *da*-word points forward to the *dass* clause: that a friendship changes.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Wir haben einen ___ Abend mit alten Freunden verbracht.', o: ['schönen', 'schöner', 'schönes'], why: 'Type 2, masculine Akkusativ: *einen schönen*.' },
      { q: 'Der ___ Brief lag noch auf dem Tisch. (vergessen)', o: ['vergessene', 'vergessende', 'vergessenen'], why: 'Someone forgot the letter: Partizip II. Masculine Nominativ after *der*: *-e*.' },
      { q: 'Ich ärgere mich nicht mehr ___ seine Kommentare.', o: ['über', 'auf', 'von'], why: '*sich ärgern über* + Akkusativ.' },
      { q: '___ wartest du? – Auf meine Schwester.', o: ['Auf wen', 'Worauf', 'Wofür'], why: 'The answer is a person, so use the preposition + *wen*.' },
      { q: 'Sie ist eine Person mit ___ Meinungen.', o: ['starken', 'starke', 'starker'], why: 'Type 3, Dativ plural: *-en*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Er hat einen sehr ___ Charakter. (ruhig)', a: ['ruhigen'], why: 'Type 2, masculine Akkusativ: *-en*.' },
      { q: 'Ich kann mich ___ verlassen, dass er mir hilft.', a: ['darauf'], why: '*sich verlassen auf*. The *da*-word points forward to the *dass* clause.' },
      { q: 'Die ___ Gäste wurden herzlich begrüßt. (ankommen, Partizip II)', a: ['angekommenen'], why: 'Plural after *die*: *angekommen + en*.' },
      { q: 'Sie ist zu Recht stolz ___ ihre Arbeit.', a: ['auf'], why: '*stolz sein auf* + Akkusativ.' },
      { q: 'Das ist das Auto meines ___ Nachbarn. (neu)', a: ['neuen'], why: 'Type 2, masculine Genitiv: *-en*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Kümmerst du dich um die Katze?', why: 'Yes/no question: verb, subject, reflexive pronoun, then *um* + Akkusativ.' },
      { a: 'Sie trösten das weinende Kind.', why: 'The Partizip I stands between the article and the noun.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the participles that are used as adjectives.', items: [
      { s: 'Der [bellende] Hund gehört unserer Nachbarin.', why: '*bellend* (Partizip I) describes *Hund*.' },
      { s: 'Wir haben das [reparierte] Fahrrad abgeholt.', why: '*repariert* describes *Fahrrad*. *abgeholt* is part of the Perfekt.' },
    ] },
  ],
};
